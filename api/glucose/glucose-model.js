
const database = require( "../../data/dbConfig.js" );


function getAllReadings() {
  return database("glucose_reading").select("*");
}

module.exports = {
getAllReadings
};