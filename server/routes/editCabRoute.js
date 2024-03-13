const editCabFeature = require("../controller/editCab.controller");

const express = require("express");

const router = express.Router();

router.put("/", editCabFeature);

module.exports = router;
