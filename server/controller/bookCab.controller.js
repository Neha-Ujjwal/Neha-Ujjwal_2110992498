const User = require("../models/User.model");
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

    await User.create({
      email,
      source,
      destination,
      startTime,
      cabType,
    });

    return res.status(200).json({ msg: "Data saved successfully" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = bookCab;
