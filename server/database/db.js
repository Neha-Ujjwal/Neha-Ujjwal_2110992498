const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to Database successfully");
  } catch (error) {
    throw new Error("Database connectivity faile");
  }
};

module.exports = connectToDB;
