const { catchAsync } = require("../utils/catchAsync");
const Profile = require("../profile/profile-model");

const validateProfile = catchAsync( async ( req, res, next ) => {
  
  //checks that all fields are entered

  const { first_name, last_name, age, user_id } = req.body;

  if ((!user_id, !first_name, !last_name, !age)) {
    return res.status(403).json({ error: "One or more fields are missing" });
  }

  // checcks that profile doesn't already exists, or you are trying add a profile to a nonexistent user_id

  req.profile = {
   user_id
  };

  const userByProfile = await Profile.findProfileByCriteria("user_id", user_id);

  if (!userByProfile) {
    return res
      .status(403)
      .json({ error: "Cannot add profile as that username doesn't exist" });
  }
  
  if (userByProfile) {
    return res
      .status(403)
      .json({ error: "Profile for that username already exists, please use the edit profile instead" });
  } 

  next();
});

module.exports = {
  validateProfile,
};
