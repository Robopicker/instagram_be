const express = require("express");
const { post } = require("../apis/userApi");
const { imageMiddleware } = require("../utils/postUtils");
const router = express.Router();
const { runValidation } = require("../validators/runValidations");
router.post('/post', runValidation,imageMiddleware ,post)
module.exports = router;