const express = require("express");
const router = express.Router();
const { logInUserHandler } = require("../../auth/v1/login");
const { logOutUserHandler } = require("../../auth/v1/logOut");

//@desc LOGGIN user
//@route POST /v1/api/users/login
//@access public
router.post("/login", logInUserHandler);

router.post("/logout", logOutUserHandler);

module.exports = router;