// Update with your config settings.
require("dotenv").config();

module.exports = {
  development: {
    client: "sqlite3",
    connection: { filename: "./data/database.db3" },
    useNullAsDefault: true,
        migrations: {
      directory: "./data/migrations",
    },
    seeds: { directory: "./data/seeds" },
  
  },

  production: {
    client: "pg",
    connection: `${process.env.DATABASE_URL}?ssl=no-verify`,
    migrations: {
      directory: "./data/migrations",
    },
    seeds: { directory: "./data/seeds" },
  },
};
