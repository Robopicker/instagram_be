const { uploadImage } = require("../utils/postUtils")

exports.post = async (req, res) => {
  try {
    const file = req.file
    console.log(file)
    const result = await uploadImage(file)
    return res.status(200).json({ image_link: result?.Location })
  } catch (err) {
    res.status(400).json({ error: "something went wrong"})
  }

}