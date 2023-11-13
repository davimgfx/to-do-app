const mongoose = require("mongoose");

const connectDB = (url) => {
  mongoose.connect(url);
  console.log("Connected to the server")
};

module.exports = connectDB;
