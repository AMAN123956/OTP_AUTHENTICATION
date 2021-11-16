const express = require("express");
const router = express.Router();


const checkAuth = require("../middlewares/checkAuth");

const {
  fetchCurrentUser,
  loginWithPhoneOtp,
  createNewUser,
  verifyPhoneOtp
} = require("../controllers/auth.controller");


router.post("/register", createNewUser);

router.post("/login_with_phone", loginWithPhoneOtp);


router.post("/verify", verifyPhoneOtp);

router.get("/me", checkAuth, fetchCurrentUser);

module.exports = router;

