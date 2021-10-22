// const AppError = require("../utils/AppError");
const { catchAsync } = require("../utils/catchAsync");
const User = require("../auth/auth-model");

const validateLogin = catchAsync(async (req, res, next) => {
  const { username, password } = req.body;

  if ((!username, !password)) {
    return res.status(403).json({ error: "One or more fields are missing" });
  }

  const userByUsername = await User.findUserByCriteria("username", username);

  if (!userByUsername) {
    return res.status(403).json({ error: "Username does not exist" });
  }

  next();
});

module.exports = {
  validateLogin,
};
