exports.up = async function (knex) {
  await knex.schema.createTable("users", (table) => {
    table.increments("id").unique();
    table.string("username").unique().notNullable();
    table.string("password").notNullable();
  });
};

exports.down = async function (knex) {
  knex.schema.dropTableIfExists("users");
};
