exports.up = async function (knex) {
  await knex.schema
    .createTable("users", (table) => {
      table.increments("id").unique();
      table.string("username").unique().notNullable();
      table.string("password").notNullable();
      table.boolean("isAdmin").defaultTo(toString(0));
    })
    .createTable("profile", (table) => {
      table.increments("id");
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
    })
    .createTable("glucose_reading", (table) => {
      table.increments("id");
      table.integer("glucose_reading").notNullable();
      table.timestamp("taken_at").notNullable().defaultTo(Date.now());
      table.timestamp("created_at").notNullable().defaultTo(Date.now());
      table.timestamp("updated_at").notNullable().defaultTo(Date.now());
      table
        .integer("profile_id")
        .notNullable()
        .unsigned()
        .references("id")
        .inTable("profile")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("glucose_reading");
  await knex.schema.dropTableIfExists("profile");
  await knex.schema.dropTableIfExists("users");
};
