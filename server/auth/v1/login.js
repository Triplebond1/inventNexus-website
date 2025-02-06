const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../../models/user");
const dotenv = require("dotenv");

dotenv.config();

//@desc LOGGIN user
//@route POST /v1/api/users/login
//@access public
export const logInUserHandler = async (req, res) => {
    try {
        let { usernameOrEmail, password } = req.body;

        // Initialize query object
        let query = {};

        // Validate email or username input, only one should be provided
        if (usernameOrEmail && typeof usernameOrEmail === "string") {
            usernameOrEmail = usernameOrEmail.toLowerCase();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const isValidEmail = emailRegex.test(usernameOrEmail);
            if (isValidEmail) {
                query.email = usernameOrEmail;
            } else {
                query.username = usernameOrEmail;
            }
        } else {
            return res.status(400).json({ message: "Provide either a valid email or username" });
        }

        // Validate password input
        if (typeof password !== "string") {
            return res.status(400).json({ message: "Password should be a string" });
        }

        // Find the user by query
        const user = await User.findOne(query);
        if (!user) {
            return res.status(400).json({ message: `User ${usernameOrEmail} not found` });
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
