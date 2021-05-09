const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://frakzor:1DebianHell1@neko.19uiy.mongodb.net/nekodb",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Failed to connect to MongoDB", err));
