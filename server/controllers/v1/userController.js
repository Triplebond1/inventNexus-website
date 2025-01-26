const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../../models/user");
const dotenv = require("dotenv");

dotenv.config();

// @desc    Create a new user
// @route   POST /v1/api/users
// @access  Public (Registration) or Private (Admin creating users)
const createUserHandler = async (req, res) => {
  try {
    let { username, email, password, role, profilePicture } = req.body;

    // Validate required fields
    const validateField = (field, fieldName) => {
      if (!field || typeof field !== "string") {
        return res
          .status(400)
          .json({ message: `${fieldName} should be a string` });
      }
    };

    validateField(username, "Username");
    validateField(email, "Email");
    validateField(password, "Password");

    // Convert username and email to lowercase for uniformity
    username = username?.toLowerCase();
    email = email?.toLowerCase();

    // Only lowercasing the role if provided (and only allowing admin to set it)
    if (req.user && req.user.role === "admin" && role) {
      if (typeof role !== "string") {
        return res.status(400).json({ message: "Role should be a string" });
      }
      role = role.toLowerCase();
    } else {
      role = "subscriber"; // Default role for non-admin users
    }

    // Password validation (at least one uppercase, one lowercase, one number, min 8 characters)
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (password.length < 8 || !passwordRegex.test(password)) {
      return res.status(400).json({
        message:
          "Password must be at least 8 characters long, contain one uppercase letter, one lowercase letter, and one number.",
      });
    }

    // Check if the user with this email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User with this email already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user and profile
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
      role,
      profilePicture,
    });

    // Success response with user and profile data
    if (user) {
      return res.status(201).json({
        message: "User created successfully",
        user: user.toJSON(), // Return user data without password
      });
    } else {
      return res.status(400).json({ message: "Error creating user" });
    }
  } catch (error) {
    console.error("Error creating user:", error);
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

// @desc    Get a single user by ID
// @route   GET /v1/api/users/:id
// @access  Private (Admin and the user themselves)
const getUserHandler = async (req, res) => {
  try {
    const userId = req.params.id;

    // Validate userId type
    if (typeof userId !== "string") {
      return res.status(400).json({ message: "ID must be a string" });
    }

    // // Check if the requester is admin or the user themselves
    // if (req.user.role !== "admin" || req.user._id.toString() !== userId) {
    //   return res.status(403).json({ message: "Access denied" });
    // }

    // Find user by ID and exclude password from the result
    const user = await User.findById(userId).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Return the user data
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
};

// @desc    Get all users
// @route   GET /v1/api/users
// @access  Private (Admin only)
const getAllUsersHandler = async (req, res) => {
  try {
    // Only admin can access
    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Access denied" });
    }

    // Find all users and exclude their passwords
    const users = await User.find().select("-password");

    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
};

// @desc    Update an existing user
// @route   PUT /v1/api/users/:id
// @access  Private (Admin and the user themselves)
const updateUserHandler = async (req, res) => {
  try {
    const userId = req.params.id;
    let { username, email, password, role, profilePicture } = req.body;

    // Validate input fields
    // Validate input fields
    const validateStringField = (field, fieldName) => {
      if (field && typeof field !== "string") {
        return res
          .status(400)
          .json({ message: `${fieldName} should be a string` });
      }
    };

    validateStringField(username, "Username");
    validateStringField(email, "Email");
    validateStringField(password, "Password");
    validateStringField(role, "Role");

    // Convert fields to lowercase where necessary
    username = username ? username.toLowerCase() : undefined;
    email = email ? email.toLowerCase() : undefined;
    role = role ? role.toLowerCase() : undefined;

    
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Authorization check: only admin or the user can update their data
    if (req.user.role !== "admin" && req.user.id !== userId) {
      return res.status(403).json({ message: "Access denied" });
    }

    // Password validation
    if (password) {
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
      if (!passwordRegex.test(password)) {
        return res.status(400).json({
          message:
            "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one number",
        });
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      user.password = hashedPassword;
    }

    // Update user fields
    if (username) user.username = username;
    if (email) user.email = email;
    if (profilePicture) user.profilePicture = profilePicture;
    // Only admin can update the role
    if (req.user.role === "admin" && role) {
      user.role = role;
    }

    await user.save();

    res.status(200).json({
      message: "User updated successfully",
      user: user.toJSON(),
    });
  } catch (error) {
    console.error("Error updating user:", error);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

// @desc    Delete a user
// @route   DELETE /v1/api/users/:id
// @access  Private (Admin only)
const deleteUserHandler = async (req, res) => {
  try {
    const userId = req.params.id;

    // Authorization: Only admin can delete users
    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Access denied" });
    }

    // Find the user by ID
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Remove the user
    const deleted = await user.deleteOne();
    if (!deleted) {
      return res.status(401).json({ message: "unable to delete user" });
    }

    // Send success response
    return res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    // Internal server error response
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

//@desc LOGGIN user
//@route POST /v1/api/users/login
//@access public
const logInUserHandler = async (req, res) => {
  try {
    let { usernameOrEmail, password } = req.body;

    let query = {};

    // Validate email or username input, only one should be provided
    if (usernameOrEmail && typeof usernameOrEmail === "string") {
      usernameOrEmail = usernameOrEmail.toLowerCase();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const isValidEmail = emailRegex.test(usernameOrEmail);
      if (isValidEmail) {
        const email = usernameOrEmail;
        query = { email };
      } else {
        const username = usernameOrEmail;
        query = { username };
      }
    } else {
      return res
        .status(400)
        .json({ message: "Provide either a valid email or username" });
    }

    if (typeof password !== "string") {
      return res.status(400).json({ message: "Password should be a string" });
    }

    // Find the user by query
    const user = await User.findOne(query);
    if (!user) {
      return res.status(400).json({
        message: `user ${usernameOrEmail} not found`,
      });
    }

    // Compare passwords using bcrypt
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Create the JWT payload
    const payload = {
      id: user._id,
      email: user.email,
      role: user.role,
    };

    // Sign the JWT token
    const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
      expiresIn: "7d", // Token valid for 7 days
    });

    // Return the token and user info
    res.status(200).json({
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

module.exports = {
  getUserHandler,
  getAllUsersHandler,
  createUserHandler,
  updateUserHandler,
  deleteUserHandler,
  logInUserHandler,
};
