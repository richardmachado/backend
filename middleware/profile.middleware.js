const { catchAsync } = require("../utils/catchAsync");
const Profile = require("../profile/profile-model");

const validateProfile = catchAsync(async (req, res, next) => {
  const { first_name, last_name, age, user_id } = req.body;

  if ((!first_name, !last_name, !age, !user_id)) {
    return res.status(403).json({ error: "One or more fields are missing" });
  }

  next();
});

module.exports = {
  validateProfile,
};
