const fs = require('fs')
const { S3Instance } = require('../DB/S3/S3Instance')
const multer = require('multer')
const  upload = multer({ dest: 'uploads/' })

exports.imageMiddleware = (req, res, next) => {
    upload.single('image')
    next()
}
exports.uploadImage = (file) => {
    const fileStream = fs.createReadStream(file.path)
    const uploadParams = {
        Bucket: bucketName,
        Body: fileStream,
        Key: file.fileName
    }
    return S3Instance.upload(uploadParams).promise()
}