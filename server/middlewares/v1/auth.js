const jwt = require("jsonwebtoken");
const User = require("../../models/user");
const dotenv = require("dotenv");

dotenv.config();

const validateToken = async (req, res, next) => {
  try {
    // Retrieve token from cookies
    const token = req.cookies?.authToken;

    if (!token) {
      return res.status(401).json({ message: "Authentication token is missing" });
    }

    // Verify JWT Token
    const payload = jwt.verify(token, process.env.JWT_SECRET_KEY);
    if (!payload?.id) {
      return res.status(401).json({ message: "Invalid token" });
    }

    // Find user (fetching only necessary fields)
    const user = await User.findById(payload.id).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Attach user to request
    req.user = user;
    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Token has expired. Please log in again." });
    } else if (error.name === "JsonWebTokenError") {
      return res.status(401).json({ message: "Invalid token. Authentication failed." });
    }
    return res.status(500).json({ message: "Internal server error", error: error.message });
  }
};

module.exports = { validateToken };
