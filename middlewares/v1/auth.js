
const jwt = require("jsonwebtoken");
const  User  = require("../../models/user");
const dotenv = require("dotenv");

dotenv.config();

const validateToken = async (req, res, next) => {
  try {
    // Check for the authorization header
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        message: "Authorization header is missing or invalid",
      });
    }

    // Extract token from the header
    const token = authHeader.split(" ")[1];
    if (!token) {
      return res.status(401).json({
        message: "Token not found",
      });
    }

    // Verify token
    const payload = jwt.verify(token, process.env.JWT_SECRET_KEY);
    if (!payload) {
      return res.status(401).json({
        message: "Invalid token",
      });
    }

    // Find user by token's payload (user ID)
    const user = await User.findById(payload.id);
    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    // Attach the user object to the request for future use
    req.user = user;
    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Token has expired" });
    } else if (error.name === "JsonWebTokenError") {
      return res.status(401).json({ message: "Invalid token" });
    }
    return res.status(500).json({ message: "Internal server error", error: error.message });
  }
};

module.exports = {
  validateToken,
};

