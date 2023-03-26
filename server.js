const mongoose = require("mongoose");

const connection = () => {
  try {
    const server = mongoose.connect("mongodb://127.0.0.1:27017/newdb");
    console.log("Connected to database");
  } catch (error) {
    console.log(error);
  }
  console.log("server started");
};

module.exports = { connection };
