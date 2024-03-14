const mongoose = require("mongoose");

const cabStatusSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  startTime: {
    type: String,
    required: true,
  },
  endTime: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    default: false, //by default all cabs are not booked
  },
});

const CabStatus = new mongoose.model("CabStatus", cabStatusSchema);

module.exports = CabStatus;
