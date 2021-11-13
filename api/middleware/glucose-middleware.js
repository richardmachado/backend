const { catchAsync } = require("../utils/catchAsync");
const Profile = require("../profile/profile-model");


const validateGlucoseFields = catchAsync(async (req, res, next) => {
  //checks that all fields are entered

  const { profile_id, glucose_reading} = req.body;

  if ((!profile_id, !glucose_reading)) {
    return res.status(403).json({ error: "One or more fields are missing" });
  }

  next();
});


// checks that profile exists or throw error
const validateUserID = catchAsync( async ( req, res, next ) => {
   

  const { profile_id } = req.body;

      const id = profile_id;

  const userById = await Profile.findProfileByCriteria("id", id);

  if (!userById) {
    return res
      .status(404)
      .json({ error: "Cannot add profile as that user ID doesn't exist" });
  }

  next();
});

module.exports = {
    validateUserID,
    validateGlucoseFields
};
