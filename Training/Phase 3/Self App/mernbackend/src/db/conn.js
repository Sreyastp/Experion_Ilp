const mongoose = require("mongoose");
const URL =
  "mongodb+srv://Sreyas:Sreyas@cluster0.bbs4s.mongodb.net/DB1?retryWrites=true&w=majority";
mongoose
  .connect(URL)
  .then(() => {
    console.log("Mongo Connection Successful");
  })
  .catch(() => {
    console.log("No connection");
  }); //connection for mongo
