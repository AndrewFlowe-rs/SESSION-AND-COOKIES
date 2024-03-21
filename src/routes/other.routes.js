const express = require("express");
const { home } = require("../controllers/other/index.");
const router = express.Router();



// desde app viene /

router.get("/" , home)