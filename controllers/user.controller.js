const UserModel = require("../models/user.model");
const ObjectID = require("mongoose").Types.ObjectId;


// get sur /api/user 
module.exports.getAllUsers = async (req, res) => {
  const users = await UserModel.find().select("-password"); //resquest to MondoDB
   //sans le mot de passe
  res.status(200).json(users);
};

// get sur /api/user:id
module.exports.userInfo = (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  UserModel.findById(req.params.id, (err, docs) => { // resquest to MondoDB
    if (!err) res.send(docs);
    else console.log("ID unknown : " + err);
  }).select("-password"); //sans le mot de passe
};

// put sur /api/user:id
module.exports.updateUser = async (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  try {
    await UserModel.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          bio: req.body.bio,
        },
      },
      { new: true, upsert: true, setDefaultsOnInsert: true },
      (err, docs) => {
        if (!err) return res.send(docs);
        if (err) return res.status(500).send({ message: err });
      }
    );
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

// delete sur /api/user/:id
module.exports.deleteUser = async (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  try {
    await UserModel.remove({ _id: req.params.id }).exec();
    res.status(200).json({ message: "Successfully deleted. " });
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

