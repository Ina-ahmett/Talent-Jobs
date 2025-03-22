const express = require("express");
const { loginAdmin, createInitialAdmin } = require("../controllers/authController");
const router = express.Router();

// Admin login route
router.post("/login", loginAdmin);

// Create initial admin route (use only once)
router.post("/create-admin", createInitialAdmin);

module.exports = router; 