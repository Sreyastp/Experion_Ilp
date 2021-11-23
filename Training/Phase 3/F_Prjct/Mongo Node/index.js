const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');

// //Database Connection
// const db = require('./config/database');
// db.authenticate().then(() => {
//     console.log('Database connected...');
// }).catch(err => {
//     console.log('Error: ' + err);
// })

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
  }); //connection for mongo

const app = express();

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(cors("*"));

//Gig routes
app.use('/', require('./routes/routes'));

const PORT = process.env.PORT || 8000;
db.sync().then(() => {
    app.listen(PORT, console.log(`Server started on port ${PORT}`));
}).catch(err => console.log("Error: " + err));