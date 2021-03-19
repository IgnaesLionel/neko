const util = require("util");
const multer = require("multer");
const maxSize = 2 * 1024 * 1024;
var path = require('path')

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __basedir + "/resources/uploads/");
  },
  filename: function (req, file, callback) {
    callback(null, file.originalname)
  },
});

let uploadFile = multer({
  storage: storage,
  limits: { fileSize: maxSize },
}).array("file");

let uploadFileMiddleware = util.promisify(uploadFile);
module.exports = uploadFileMiddleware;
