require("dotenv").config();
const express = require("express");
const app = express();
var bodyParser = require("body-parser");
const ShortestPathRouter = require("./routes/shortestRoute.js");
const EditCabRouter = require("./routes/editCabRoute.js");
const connectToDB = require("./database/db.js");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use("/get-shortest-route", ShortestPathRouter);
app.use("/edit", EditCabRouter);

const PORT = process.env.PORT;

connectToDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server is running on port ${PORT}`);
    });
  })
  .catch(() => {
    console.log("Error in running the server");
  });
