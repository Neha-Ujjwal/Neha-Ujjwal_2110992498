const mongoose = require("mongoose");

const cabSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

const Cab = new mongoose.model("Cab", cabSchema);

module.exports = Cab;
