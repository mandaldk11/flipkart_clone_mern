const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userSchema");
// register user -
const register = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;
    if (!username || !email || !phone || !password) {
      res.status(404).json({ msg: "all fields are required..." });
      return;
    }

    const hashPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, email, phone, password: hashPassword });
    await user.save();
    res.status(200).json({ msg: "user created successfully..." });
  } catch (error) {
    console.log(error.message);
  }
};
// get all users

const allUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: "error while get user..." });
  }
};

// login users -
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(404).json({ msg: "all fields are required..." });
      return;
    }

    const userExist = await User.findOne({ email });
    if (!userExist) {
      res.status(404).json({ msg: "invalid credentials..." });
      return;
    }

    const passwordMatch = await bcrypt.compare(password, userExist.password);
    if (!passwordMatch) {
      res.status(404).json({ msg: "invalid credentials..." });
      return;
    }
    if (passwordMatch) {
      const accessToken = jwt.sign(
        { userId: userExist._id },
        process.env.SECRET_KEY,
        { expiresIn: "15min" }
      );
      res.status(200).json({ msg: "login successfully...", accessToken });
    }
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports = { register, allUsers, loginUser };
