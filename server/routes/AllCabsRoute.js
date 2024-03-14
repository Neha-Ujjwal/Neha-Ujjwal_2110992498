const express = require("express");
const router = express.Router();
const cabController = require("../controller/getAllCabs.controller");

router.get("/", cabController);

module.exports = router;
