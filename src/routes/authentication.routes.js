const express = require("express");
const { register } = require("../controllers/authentication");
const router = express.Router();

// De app viene /auth
router.get("/registro", register)