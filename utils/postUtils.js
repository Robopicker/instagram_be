const fs = require('fs')
const { S3Instance } = require('../DB/S3/S3Instance')
const multer = require('multer')
const  upload = multer({ dest: 'uploads/' })
const imagemin = require("imagemin");

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./uploads");
    },
    filename: function (req, file, cb) {
      let originalname = file.originalname;
      let ext = path.extname(originalname);
      let newfilename = uuidv4() + ext;
      cb(null, newfilename);
    },
  });

exports.imageMiddleware = multer({
    storage: storage,
    limits: { fileSize: 7 * 1024 * 1024 },
    fileFilter: function (req, file, callback) {
      if (!file.originalname.match(/\.(png|jpeg|jpg|JPEG|JPG|PNG)$/)) {
        return callback(new Error("Please upload png or jpg Image"));
      }
      callback(undefined, true);
    },
  }).single("profile");

exports.uploadImage = (file, fileName) => {
    const uploadParams = {
        Bucket: bucketName,
        Body: file,
        Key: fileName
    }
    return S3Instance.upload(uploadParams).promise()
}