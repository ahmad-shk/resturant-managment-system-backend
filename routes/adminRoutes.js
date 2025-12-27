const express = require("express");
const router = express.Router();
const {
  registerAdmin,
  loginAdmin,
  forgotPassword,
  resetPassword
} = require("../controllers/adminController");

// CREATE Admin
router.post("/register", registerAdmin);

// LOGIN Admin
router.post("/login", loginAdmin);

// FORGOT PASSWORD
router.post("/forgot-password", forgotPassword);

// RESET PASSWORD
router.post("/reset-password/:token", resetPassword);

module.exports = router;
