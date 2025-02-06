const express = require("express");
const cors = require("cors");
const userRoute = require("../route/v1/userRoute");
const authRoute = require("../route/v1/authRoute");
const postRoute = require("../route/v1/postRoute");
const tagRoute = require("../route/v1/tagRoute");
const categoryRoute = require("../route/v1/categoryRoute");
const commentRoute = require("../route/v1/commentRoute");
const profileRoute = require("../route/v1/profileRoute");
const pageRoute = require("../route/v1/pageRoute");
const imageRoute = require("../route/v1/imageRoute");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

//Routes
app.use("/v1/api/users", userRoute);
app.use("/v1/api/auth", authRoute);
app.use("/v1/api/posts", postRoute);
app.use("/v1/api/tags", tagRoute);
app.use("/v1/api/categories", categoryRoute);
app.use("/v1/api/comments", commentRoute);
app.use("/v1/api/profiles", profileRoute);
app.use("/v1/api/pages", pageRoute);
app.use("/v1/api/images", imageRoute);

module.exports = app;
