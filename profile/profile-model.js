const database = require("../data/dbConfig.js");

// const add = (profile) => {
//   return database("profile").insert(profile).returning("id");
// };

async function getMyProfile(user_id) {
  return database("profile")
    .select("id", "first_name", "last_name", "age", "user_id")
    .where({ user_id: user_id });
}

async function insert(profileData) {
  const [id] = await database("profile").insert(profileData, "id");
  return database("users").where({ id }).first();
}

function findProfileById(id) {
  return database("profile").where({ id });
}

const findProfileByCriteria = (field, arg) => {
  return database("profile").where(field, "=", arg).first();
};

module.exports = {
  // add,
  getMyProfile,
  insert,
  findProfileById,
  findProfileByCriteria
};
