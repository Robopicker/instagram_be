const express = require("express");
const { post } = require("../apis/userApi");
const router = express.Router();
const { runValidation } = require("../validators/runValidations");
router.post('/post', runValidation, post)
module.exports = router;