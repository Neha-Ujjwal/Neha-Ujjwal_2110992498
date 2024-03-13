require("dotenv").config();
const express = require("express");
const app = express();
var bodyParser = require("body-parser");
const router = require("./routes/shortestRoute.js");


app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json());
app.use("/get-shortest-route", router);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
