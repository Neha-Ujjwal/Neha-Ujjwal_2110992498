const Cab = require("../models/Cab.model");

const editCabFeature = async (req, res) => {
  try {
    const cab_id = req.body._id;
    const updatedCabData = req.body.cabData;

    const updatedCab = await await Cab.findByIdAndUpdate(
      cab_id,
      updatedCabData,
      {
        new: true,
      }
    );

    if (!updatedCab) {
      return res.status(400).json({ msg: "No Cab found with given id" });
    }

    return res.status(201).json(updatedCab);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ msg: "Errror in updating Cab Information" });
  }
};

module.exports = editCabFeature;
