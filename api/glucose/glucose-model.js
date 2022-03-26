const database = require("../../data/dbConfig.js");

function getAllReadings() {
  const getallreadings = database("glucose_reading").select("*");
  return getallreadings;
}

async function getMyReadings(profile_id) {
  const getreading = database("glucose_reading")
    .select("*")
    .where({ profile_id: profile_id });
  return getreading;
}

async function insertReading(glucoseData) {
  const [id] = await database("glucose_reading").insert(glucoseData, "id");
  return database("glucose_reading").where({ id }).first();
}

async function deleteReading(id) {
  // const [id] = await database("glucose_reading").del(glucoseData, "id");
  // return database("glucose_reading").where({ id }).first();
//  return db("glucose_reading").where("id", id).del();
  
 return database("glucose_reading").where({id:id}).del();
}
module.exports = {
  getAllReadings,
  getMyReadings,
  insertReading,
  deleteReading,
};
