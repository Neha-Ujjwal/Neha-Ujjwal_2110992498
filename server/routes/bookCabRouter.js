const express = require("express");
const router = express.Router();
const bookCab = require("../controller/bookCab.controller");

router.post("/", bookCab);

module.exports = router;
