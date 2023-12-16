const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: [true, "name is required"] },
    email: {
      type: String,
      required: [true, "email is required"],
      unique: [true, "email should be unique"],
    },
    phone: { type: String, required: [true, "pnone no. is required"] },
    password: { type: String, required: [true, "password is required"] },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("user", userSchema);

module.exports = User;
