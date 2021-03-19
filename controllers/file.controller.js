const uploadFile = require("../middleware/file.middleware");
const fs = require("fs");
require('dotenv').config({path: './config/.env'});
const serverUrl = `${process.env.SERVER_URL}/files/`


const upload = async (req, res) => {
  try {
    await uploadFile(req, res);

    if (req.file == undefined) {
      return res.status(200).send({ message: "Please upload a file!" });
    }

    res.status(200).send({
      message: "Uploaded the file successfully: " + req.file.originalname,
    });
  } catch (err) {
    console.log(err);

    if (err.code == "LIMIT_FILE_SIZE") {
      return res.status(500).send({
        message: "File size cannot be larger than 2MB!",
      });
    }

    res.status(500).send({
      message: `Could not upload the file: ${req.file.originalname}. ${err}`,
    });
  }
};

const getListFiles = (req, res) => {
  const directoryPath = __basedir + "/resources/uploads/";

  fs.readdir(directoryPath, function (err, files) {
    if (err) {
      res.status(500).send({
        message: "Unable to scan files!",
      });
    }

    let fileInfos = [];

     files.forEach((file) => {
      fileInfos.push({
        name: file,
        url: serverUrl + file,
      });
    }
    ); 

    res.status(200).send(fileInfos);
  });
};

const download = (req, res) => {
  const fileName = req.params.name;
  const directoryPath = __basedir + "/resources/uploads/";

  res.download(directoryPath + fileName, fileName, (err) => {
    if (err) {
      res.status(500).send({
        message: "Could not download the file. " + err,
      });
    }
  });
};

// delete image avec le nom
const deleteFile = (req, res) => {
  const fileName = req.params.id;
  const directoryPath = __basedir + "/resources/uploads/";
  const targetfile = `${directoryPath}${fileName}`

  fs.unlink(targetfile, (err)=> {
    res.send ({
      status: "200",
      responseType: "string",
      response: "success"
    });     
  }); 


}

module.exports = {
  upload,
  getListFiles,
  download,
  deleteFile
};
