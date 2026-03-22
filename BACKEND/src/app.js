const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();
const authRouter = require("./routes/auth.routes.js");
const interviewRouter = require("./routes/interview.routes.js");

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http//localhost:5173",
    credentials: true,
  }),
);

app.use("/api/auth", authRouter);
app.use("/api/interview", interviewRouter);

module.exports = app;

//this file has only two tasks 1. to initialse the server and 2. use middleware use and mentions routes
