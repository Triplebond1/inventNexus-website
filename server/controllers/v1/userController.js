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
// @access  Public ()
const getUserHandler = async (req, res) => {
  try {
    const userId = req.params.id;

    // Validate userId type
    if (typeof userId !== "string") {
      return res.status(400).json({ message: "ID must be a string" });
    }

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

    // Get pagination parameters (default: page 1, limit 10)
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    // Fetch users with pagination, excluding passwords
    const users = await User.find().select("-password").skip(skip).limit(limit);

    // Get total count for pagination metadata
    const totalUsers = await User.countDocuments();

    return res.status(200).json({
      success: true,
      currentPage: page,
      totalPages: Math.ceil(totalUsers / limit),
      totalUsers,
      data: users,
    });
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

module.exports = {
  getUserHandler,
  getAllUsersHandler,
  createUserHandler,
  updateUserHandler,
  deleteUserHandler,
};
