const db = require("../data/dbConfig.js");

module.exports = {
  find,
  findById,
  findBy,
  insert,
  update,
};

function find() {
  return db("users").select("id", "username", "password");
}

function findById(id) {
  return db("users").select("id", "username").where({ id }).first();
}

function findBy(data) {
  return db("users").where(data);
}

async function insert(userData) {
  const [id] = await db("users").insert(userData, "id");
  return db("users").where({ id }).first();
}

async function update(id, updates) {
  let role = await db("users")
    .where({ id: id })
    .update({ password: updates.password });
  return db("users").where({ id }).first();
}
