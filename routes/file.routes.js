const router = require("express").Router();
const controller = require("../controllers/file.controller");
const multer = require("multer");
const sharp = require("sharp");

let storage = new multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __basedir + "/resources/uploads/");
  },
  filename: function (req, file, callback) {
    callback(null, file.originalname);
  },
});

const upload = multer(storage);

router.post("/uploadOne", upload.single("file"), async (req, res) => {
  /* console.log(req.file); */
  const formatedName = req.file.originalname.split(" ").join("-");
  console.log(formatedName);
  console.log(__basedir + "/resources/uploads/" + `${formatedName}`);
  try {
    await sharp(req.file.buffer)
      .resize({ width: 800 })
      .toFile(__basedir + "/resources/uploads/" + `${formatedName}`);
  } catch (error) {
    console.log("Error while processing image", error);
  }
});

router.get("/files", controller.getListFiles); //json list les img
router.get("/files/:name", controller.download);

router.delete("/files/:id", controller.deleteFile); //delete le fichier

module.exports = router;
