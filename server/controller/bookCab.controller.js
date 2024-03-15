const User = require("../models/User.model");
const CabStatus = require("../models/CabStatus.model");
const getShortestRoute = require("../controller/shortestPath.controller");
const timeHandler = require("../Algorithms/timeHandler.js");
const Cab = require("../models/Cab.model.js");

const bookCab = async (req, res) => {
  // const cityMapping = {
  //   Mumbai: "0",
  //   Delhi: "1",
  //   Kolkata: "2",
  //   Chennai: "3",
  //   Bengalore: "4",
  // };
  try {
    const email = req.body.email;
    const source = req.body.pickupLocation;
    const destination = req.body.dropoffLocation;

    const startTime = req.body.pickupTime;
    const cabType = req.body.cabType;

    if (source === destination) {
      return res.status(400).json({
        minTimeTaken: "",
        dropOffTime: "",
        message: "Source and Destination cant be same",
        cabBooked: false,
      });
    }

    const minTime = await getShortestRoute(source, destination);
    const endTime = await timeHandler(startTime, minTime);
    const cab = await Cab.findOne({ name: cabType });

    const isCabOverlapping = await CabStatus.find({
      name: cabType,
      startTime: { $lt: endTime },
      endTime: { $gt: startTime },
    });

    if (isCabOverlapping.length > 0) {
      console.log("cab found");
      return res.status(400).json({
        minTimeTaken: "",
        dropOffTime: "",
        message: "This cab is not available in this time slot",
        cabBooked: false,
        price: "",
      });
    }

    await User.create({
      email,
      source,
      destination,
      startTime,
      cabType,
    });

    await CabStatus.create({
      id: cab.id,
      name: cabType,
      startTime: startTime,
      endTime: endTime,
      status: true,
    });

    return res.status(200).json({
      minTimeTaken: minTime,
      dropOffTime: endTime,
      message: "Cab booked successfully",
      cabBooked: true,
      price: cab.price * minTime,
    });
  } catch (error) {
    console.log("error in controller ", error);
  }
};
module.exports = bookCab;
