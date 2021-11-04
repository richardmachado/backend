const express = require("express");

const Glucose = require("./glucose-model");
const app = express.Router();

app.get("/", (req, res) => {
  Glucose.getAllReadings().then((user) => {
    res.status(200).json(user);
  });
});

module.exports = app;