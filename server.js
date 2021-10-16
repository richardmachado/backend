const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const server = express();

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

const loginRouter = require("./auth/auth-router.js");
const profileCreator = require("./profile/profile-router.js");

server.use("/api/auth", loginRouter);
server.use("/profile", profileCreator);

server.get("/", (req, res) => {
  res.send("Your server is up and running!!!");
});

module.exports = server;
