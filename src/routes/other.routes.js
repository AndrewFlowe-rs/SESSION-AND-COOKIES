const express = require("express");
const router = express.Router();
const otherController = require('../controllers/other')


// desde app viene /

router.get("/" , otherController.home)