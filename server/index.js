require("dotenv").config();
const express = require("express");
const app = express();
var bodyParser = require("body-parser");
const cors = require("cors");
const ShortestPathRouter = require("./routes/shortestRoute.js");
const EditCabRouter = require("./routes/editCabRoute.js");
const bookCabRouter = require("./routes/bookCabRouter.js");
const allCabDataRouter = require("./routes/AllCabsRoute.js");

const connectToDB = require("./database/db.js");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use("/get-shortest-route", ShortestPathRouter);
app.use("/edit", EditCabRouter);
app.use("/book", bookCabRouter);
app.use("/cabsData", allCabDataRouter);


const PORT = process.env.PORT;

connectToDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
    console.log("Error in running the server");
  });
