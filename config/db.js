const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb://" + process.env.DB_USER_PASS + "@15.236.97.173:27017/nekodb?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Failed to connect to MongoDB", err));
