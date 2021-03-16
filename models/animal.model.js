const mongoose = require('mongoose');

const animalSchema = new mongoose.Schema(
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
    picture: [{
      type: String,
      max:1024,
    }],
   
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

const animalModel = mongoose.model("animal", animalSchema);

module.exports = animalModel;