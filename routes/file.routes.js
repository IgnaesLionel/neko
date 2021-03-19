const router = require("express").Router();
const controller = require("../controllers/file.controller");
  
router.post("/upload", controller.upload);
router.get("/files", controller.getListFiles);
router.get("/files/:name", controller.download);


router.delete("/files/:id", controller.deleteFile); //delete le fichier

module.exports = router;
