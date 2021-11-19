const knex = require("knex");
const settings = require("../knexfile.js");
const chalk = require("chalk");
require("dotenv").config();

const env = process.env.NODE_ENV || "development";


const config = settings[env];
const connection = knex(config)
console.log(
  "you are currently working on " + chalk.blue.underline.bold(env),
  "server"
);

module.exports = connection;
