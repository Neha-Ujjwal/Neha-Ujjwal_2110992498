const Cab = require("../models/Cab.model");
const AllCabs = async (req, res) => {
  try {
    const cabArray = await Cab.find();
    return res.status(200).json(cabArray);
  } catch (error) {
    console.log(error);
  }
};

module.exports = AllCabs;
