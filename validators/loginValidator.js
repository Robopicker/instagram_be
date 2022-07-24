const { check } = require('express-validator')
exports.loginValidation = [
    check("phone_number").trim().escape().isString().withMessage("Must be a valid phone_nymber"),
    check("passward").trim().escape().isString().withMessage("Must be valid password")
]
exports.signupValidation = [
    check("user_name").trim().escape().isString().notEmpty().withMessage("must be valid user_name"),
    check("user_phone_number").trim().escape().isNumeric().notEmpty().withMessage("must be valid phone number"),
    check("user_dob").trim().escape().notEmpty().withMessage("must be valid user dob "),
    check("password").trim().escape().notEmpty().withMessage("must be valid password")
]