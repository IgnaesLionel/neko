const UserModel = require('../models/user.model');
const AnimalModel = require('../models/animal.model');
const jwt = require('jsonwebtoken');
const { signUpErrors, signInErrors } = require('../utils/errors.utils');

// const { signUpErrors, signInErrors } = require('../utils/errors.utils');

// post sur /api/user/registeranimal
module.exports.registeranimal = async (req, res) => {
  const {name, age, gender,okwithdogs,okwithcats,okwithchild,bio} = req.body

  try {
    const animal = await AnimalModel.create({name, age, gender, okwithdogs, okwithcats, okwithchild, bio });
    res.status(201).json({ animal: animal._id});
  }
  catch(err) {
  console.log(err)
  }
}

// post sur /api/user/register

module.exports.signUp = async (req, res) => {
  const {pseudo, email, password} = req.body
  console.log("create")
  try {
    const user = await UserModel.create({pseudo, email, password });
    res.status(201).json({ user: user._id});
  }
  catch(err) {
    const errors = signUpErrors(err);
    res.status(200).send({ errors })
  }
}

// post sur /api/user/login
 
const maxAge = 3 * 24 * 60 * 60 * 1000;

const createToken = (id) => {
  return jwt.sign({id}, process.env.TOKEN_SECRET, {
    expiresIn: maxAge
  })
};

console.log(maxAge)
console.log(createToken)
module.exports.signIn = async (req, res) => {
  console.log("signIn")
  const { email, password } = req.body
  try {
    const user = await UserModel.login(email, password);

    const token = createToken(user._id);

    res.cookie('jwt', token, { httpOnly: true, maxAge});
    res.status(200).json({ user: user._id})
    console.log('Cookies: ', req.cookies);
  } catch (err){
    const errors = signInErrors(err);
    res.status(200).json({ errors });
  }
}

// get sur  /api/user/logout
module.exports.logout = (req, res) => {
  res.cookie('jwt', '', { maxAge: 1 });
  res.redirect('/');
}