const { catchAsync } = require("../utils/catchAsync");
const Profile = require("../profile/profile-model");
const User = require("../auth/auth-model");

const validateProfileFields = catchAsync(async (req, res, next) => {
  //checks that all fields are entered

  const { first_name, last_name, age, user_id } = req.body;

  if ((!user_id, !first_name, !last_name, !age)) {
    return res.status(403).json({ error: "One or more fields are missing" });
  }

  next();
});

// checks that profile doesn't already exist, or if you are trying add a profile to a nonexistent user_id
const validateDuplicateProfiles = catchAsync(async (req, res, next) => {
  const { user_id } = req.body;
  const userByProfile = await Profile.findProfileByCriteria("user_id", user_id);

  const id = user_id;

  const userById = await User.findUserByCriteria("id", id);

  if (!userById) {
    return res
      .status(403)
      .json({ error: "Cannot add profile as that user ID doesn't exist" });
  } else if (userByProfile) {
    return res.status(403).json({
      error:
        "Profile for that username already exists, please use the edit profile instead",
    });
  }

  next();
});

//ensures id in axios request matches the id in the body of the json request
// this does not work as user does not always match user_id
// const validateEditProfile = catchAsync(async (req, res, next) => {
//   const userIdByProfile = req.body.user_id;
//   const idByProfile = parseInt(req.params.id);

//   if (userIdByProfile !== idByProfile) {
//     return res
//       .status(403)
//       .json({ error: "You cannot edit someone else's profile" });
//   }

//   next();
// });

module.exports = {
  validateProfileFields,
  validateDuplicateProfiles,
};
