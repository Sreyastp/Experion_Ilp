// const { Sequelize } = require('sequelize');
// const db = new Sequelize('staffapp', 'sqlit', 'Welcome123', {
//     host: 'localhost',
//     dialect: 'sqlite',

//     pool: {
//         max: 5,
//         min: 0,
//         acquire: 30000,
//         idle: 10000
//     }
// });

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

module.exports = mongoose;