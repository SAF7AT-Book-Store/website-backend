const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    // status: {
    //   type: String,
    //   enum: ['allowed', 'blocked'],
    //   default: 'allowed',
    // },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
