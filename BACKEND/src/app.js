const express = require("express");
const cookieParser = require("cookie-parser");
const authRouter = require("./routes/auth.routes.js");

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRouter);

module.exports = app;

//this file has only two tasks 1. to initialse the server and 2. use middleware use and mentions routes
