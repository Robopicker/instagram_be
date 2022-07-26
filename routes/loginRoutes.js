const express = require("express");
const { login, signup, temp } = require("../apis/loginApi");
const { loginValidation, signupValidation } = require("../validators/loginValidator");
const { runValidation } = require("../validators/runValidations");
const router = express.Router();
router.get('/temp', temp)
router.get('/login', loginValidation, runValidation ,login)
router.post('/sign-up', signupValidation, runValidation, signup)
module.exports = router;