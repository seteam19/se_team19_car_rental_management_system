const express = require("express")
const router = express.Router()

const {register, login, forgetPassword, resetPassword, google} = require("../controllers/login")
router.post("/register",register)
router.post("/login",login)
router.post("/forgotPassword",forgetPassword)
router.post("/resetPassword",resetPassword)
router.post("/google",google)


module.exports = router