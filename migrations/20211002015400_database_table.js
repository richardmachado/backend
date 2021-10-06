exports.up = async function (knex) {
  await knex.schema
    .createTable("users", (table) => {
      table.increments("id").unique();
      table.string("username").unique().notNullable();
      table.string("password").notNullable();
    })
    .createTable("profile", (table) => {
      table.increments("id").unique();
      table.string("first_name", 24).notNullable();
      table.string("last_name", 24).notNullable();
      table.string("age", 4).notNullable();
      table
        .integer("user_id")
        .notNullable()
        .unsigned()
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("users").dropTableIfExists("profile");
};
