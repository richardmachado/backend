// const AppError = require("../utils/AppError");
const { catchAsync } = require("../utils/catchAsync");
const User = require("../auth/auth-model");

const validateRegistration = catchAsync(async (req, res, next) => {
  const { username, password } = req.body;

  if ((!username, !password)) {
    return res.status(403).json({ error: "One or more fields are missing" });
  }

  req.user = {
    username,
    password,
  };

  const userByUsername = await User.findUserByCriteria("username", username);

  if (userByUsername) {
    return res
      .status(403)
      .json({ error: "User with that username already exists" });
  }

  next();
});

module.exports = {
  validateRegistration,
};
