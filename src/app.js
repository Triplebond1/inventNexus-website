const express = require("express");
const cors = require("cors");
const notFound = require("../middlewares/v1/notFound");
const app = express();

const userRoute = require("../route/v1/userRoute");
const postRoute = require("../route/v1/postRoute");
const tagRoute = require("../route/v1/tagRoute");
const categoryRoute = require("../route/v1/categoryRoute");
const commentRoute = require("../route/v1/commentRoute");
const profileRoute = require("../route/v1/profileRoute");

// to restrict access to api for just a specific website and you can also
//specify what kind of operation they are allowed to use on the api
//middle wares
// const corsOptions = {
//   origin: "https://inventnexus.com",
//   methods: ["GET", "POST", "PUT", "DELETE"],
// };
//app.use(cors(corsOptions));

// use these format if you want anyone to access your api
app.use(cors());
app.use(express.json());
//app.use(notFound);

//routes
app.use("/v1/api/users", userRoute);
app.use("/v1/api/post", postRoute);
app.use("/v1/api/tag", tagRoute);
app.use("/v1/api/categories", categoryRoute);
app.use("/v1/api/comments", commentRoute);
app.use("/v1/api/profiles", profileRoute);

module.exports = app;
