const express = require("express");
const router = express.Router();
const {
  createUserHandler,
  getUserHandler,
  getAllUsersHandler,
  updateUserHandler,
  deleteUserHandler,
} = require("../../controllers/v1/userController");
const { validateToken } = require("../../middlewares/v1/auth");
const { authorize } = require("../../middlewares/v1/authorize");

// @desc    Create a new user
// @route   POST /v1/api/users
// @access  Public (Registration) or Private (Admin creating users)
router.post("", createUserHandler);

// @desc    Get a single user by ID
// @route   GET /v1/api/users/:id
// @access  Public
router.get("/:id", validateToken, getUserHandler);

// @desc    Get all users
// @route   GET /v1/api/users
// @access  Private (Admin only)
router.get("/", validateToken, authorize("admin"), getAllUsersHandler);

// @desc    Update an existing user
// @route   PUT /v1/api/users/:id
// @access  Private (Admin and the user themselves)
router.put("/:id", validateToken, updateUserHandler);

// @desc    Delete a user
// @route   DELETE /v1/api/users/:id
// @access  Private (Admin only)
router.delete("/:id", validateToken, authorize("admin"), deleteUserHandler);

module.exports = router;
