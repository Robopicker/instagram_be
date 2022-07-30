const { uploadImage } = require("../utils/postUtils")
const fs = require('fs');
const { default: imagemin } = require("imagemin");
const imageminJpegtran = require("imagemin-jpegtran");
const imageminPngquant = require("imagemin-pngquant");
exports.post = async (req, res) => {
  try {
    const files = await imagemin([`./uploads/${req.file.filename}`], {
      destination: "./compressed",
      plugins: [
        imageminJpegtran(),
        imageminPngquant({
          quality: [0.6, 0.8],
        }),
      ],
    });
    const fileContent = fs.readFileSync("./compressed/" + req.file.filename);
    const result = await uploadImage(fileContent, req.file.filename)
    console.log("please check result")

  } catch (err) {
    res.status(400).json({ error: "something went wrong"})
  }

}