const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const server = express();

const loginRouter = require("./auth/auth-router.js");
const profileCreator = require("./profile/profile-router.js");
const glucoseRouter = require("./glucose/glucose.router");

server.use(express.json());
server.use(helmet());
server.use(cors());

//returns log only if status code is above a 400
server.use(
  morgan("combined", {
    skip: function (req, res) {
      return res.statusCode < 400;
    },
  })
);

server.use("/api/auth", loginRouter);
server.use("/profile", profileCreator);
server.use("/glucose", glucoseRouter);
server.get("/", (req, res) => {
  res.send("Your server is up and running!!!");
});

module.exports = server;
