const knex = require("knex");
const knexfile = require("../knexfile.js");
require("dotenv").config();

const env = process.env.NODE_ENV || "development";

const config = knexfile[env];
console.log("you are currently working on", env, "server");

module.exports = knex(config);
