// const Sequelize = require('sequelize');
// const db = require('../config/database');

import mongoose from "mongoose";
const { Schema } = mongoose;

const blogSchema = new Schema({
  id: Number,
  email: String,
  password: String,
  first_name: String,
  last_name: String,
  mobile_no: Number,
  date_of_joining: Date,
});

module.exports = blogSchema;
