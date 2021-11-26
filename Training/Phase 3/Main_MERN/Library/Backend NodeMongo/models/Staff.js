const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const staffSchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  mobile_no: { type: Number, required: true },

  date: {
    type: Date,
  },
});

const Staff = mongoose.model("Staff", staffSchema);

module.exports = Staff;
