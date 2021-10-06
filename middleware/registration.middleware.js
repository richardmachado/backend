// const AppError = require("../utils/AppError");
const { catchAsync } = require("../utils/catchAsync");
const User = require("../auth/auth-model");

const validateRegistration = catchAsync(async (req, res, next) => {
  const { username, password } = req.body;

  if ((!username, !password)) {
    // next(new AppError("One or more fields are missing", 403));
    return res.status(403).json("One or more fields are missing");
    return;
  }

  req.user = {
    username,
    password,
  };

  const userByUsername = await User.findUserByCriteria("username", username);
  if (userByUsername) {
    // return next(new AppError("User with that username already exists", 403));
    return res.status(403).json("User with that username already exists");
  }

  next();
});

module.exports = {
  validateRegistration,
};
