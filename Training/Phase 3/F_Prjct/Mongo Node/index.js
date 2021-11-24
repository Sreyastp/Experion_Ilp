const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
// const Staff = require("./models/Staff");

const URL =
  "mongodb+srv://Sreyas:Sreyas@cluster0.bbs4s.mongodb.net/staff?retryWrites=true&w=majority";

mongoose
  .connect(URL)
  .then(() => {
    console.log("Mongo Connection Successful");
  })
  .catch(() => {
    console.log("No connection");
  }); //connection for mongo

const app = express();

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(cors("*"));

//Gig routes
app.use("/", require("./routes/routes"));
