const User = require("../models/User.model");
const CabStatus = require("../models/CabStatus.model");
const getShortestRoute = require("../controller/shortestPath.controller");
const timeHandler = require("../Algorithms/timeHandler.js");

const bookCab = async (req, res) => {
  try {
    const email = req.body.email;
    const source = req.body.pickupLocation;
    const destination = req.body.dropoffLocation;

    const startTime = req.body.pickupTime;
    const cabType = req.body.cabType;

    if (source == destination) {
      res.status(400).json({ message: "Source and Destination cant be same" });
    }

    const minTime = await getShortestRoute(source, destination);
    const endTime = await timeHandler(startTime, minTime);

    const isCabOverlapping = await CabStatus.find({
      type: cabType,
      startTime: { $lt: endTime },
      endTime: { $gt: startTime },
    });

    if (isCabOverlapping.length > 0) {
      return res
        .status(400)
        .json({ msg: "This cab is not available in this time slot" });
    }

    console.log("endTime", endTime);

    // await User.create({
    //   email,
    //   source,
    //   destination,
    //   startTime,
    //   cabType,
    // });

    return res.status(200).json({
      minTimeTaken: minTime,
      dropOffTime: endTime,
      msg: "Cab booked successfully",
    });
  } catch (error) {
    console.log("error in controller ", error);
  }
};

module.exports = bookCab;
