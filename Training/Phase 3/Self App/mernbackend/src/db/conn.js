const mongoose = require("mongoose");
const URL =
  "mongodb+srv://Sreyas:Sreyas@cluster0.bbs4s.mongodb.net/DB?retryWrites=true&w=majority";
mongoose
  .connect(URL)
  .then(() => {
    console.log("Mongo Connection Successful");
  })
  .catch(() => {
    console.log("No connection");
  });
//connect mobile 