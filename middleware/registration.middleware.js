const AppError = require("../utils/AppError");
const { catchAsync } = require("../utils/catchAsync");
const User = require("../auth/auth-model");

const validateRegistration = catchAsync(async (req, res, next) => {
  const { username, password } = req.body;

  if ((!username, !password)) {
    next(new AppError("One or more fields are missing", 403));
    return;
  }
  next();
});

module.exports = {
  validateRegistration,
};
