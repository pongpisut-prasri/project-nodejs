const mongoose = require("mongoose");
require("dotenv").config();

const mongoConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_IMAGE_URL);
    console.log("db url ",process.env.MONGO_IMAGE_URL);
    console.log("Connected to the database successfully!");
  } catch (error) {
    console.error("Failed to connect to the database:", error);
  }
};

exports.mongoConnection = mongoConnection;
