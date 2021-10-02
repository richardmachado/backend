// Update with your config settings.

module.exports = {
  development: {
    client: "sqlite3",
    connection: { filename: "./data/database.db3" },
    useNullAsDefault: true,
  },

  production: {
    client: "pg",
    connection: `${process.env.DATABASE_URL}?ssl=no-verify`,
    migrations: {
      directory: "./migrations",
    },
    seeds: { directory: "./seeds" },
  },
};
