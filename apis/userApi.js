const { S3Instance } = require("../DB/S3/S3Instance")

exports.post = async (req, res) => {
    try {
        S3Instance.listObjects({
            Bucket: 'instagram-s3-image-bucket'
        }, function(err, data) {
            if (err) {
              console.log("Error", err);
            } else {
              console.log("Success", data);
            }
          });
    } catch (error) {

    }
}