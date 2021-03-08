const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 55,
      trim: true
    },
    age: {
      type: String,
      required: true,
      max: 1024,
      minlength: 2
    },
    gender: {
      type: String,
      required: true,
      max: 12,
      minlength: 3
    },
    picture: {
      type: String,
      default: "./uploads/profil/random-user.png"
    },
    bio :{
      type: String,
      max: 1024,
    },
    okwithdogs: {
      type: [Boolean]
    },
    okwithcats: {
      type: [Boolean]
    },
    okwithchild: {
      type: [Boolean]
    }
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;