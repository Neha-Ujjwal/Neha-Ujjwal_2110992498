const express = require("express");

const router = express.Router();
const getShortestRoute = require("../controller/shortestPath.controller.js");

router.post("/", getShortestRoute);

module.exports = router;
