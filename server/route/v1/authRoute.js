const express = require("express");
const router = express.Router();
const { logInUserHandler } = require("../../auth/v1/login");

//@desc LOGGIN user
//@route POST /v1/api/users/login
//@access public
router.post("/login", logInUserHandler);

module.exports = router;