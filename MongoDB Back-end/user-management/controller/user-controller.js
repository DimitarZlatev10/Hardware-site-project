const User = require("../model/User");
const { hash, compare } = require("bcrypt");

const getAllUsers = async (req, res, next) => {
  let users;
  try {
    users = await User.find();
  } catch (err) {
    return next(err);
  }
  if (!users) {
    return res.status(500).json({ message: "Internal Server Error" });
  }

  return res.status(200).json(users);
};

const register = async (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;

  const existingEmail = await User.findOne({ email: email });

  if (existingEmail) {
    return res.status(500).json({ message: "This email is taken" });
  }

  let user;

  const hashedPassword = await hash(password, 10);

  try {
    user = await new User({
      firstName,
      lastName,
      email,
      hashedPassword,
    });
    await user.save();
  } catch (err) {
    return next(err);
  }
  if (!user) {
    return res.status(500).json({ message: "Unable to save user" });
  }
  return res.status(200).json(user);
};

module.exports = {
  getAllUsers,
  register,
};
