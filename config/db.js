const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb://" + process.env.DB_USER_PASS + "@15.237.111.76:27017/?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Failed to connect to MongoDB", err));
