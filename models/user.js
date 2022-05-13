const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  Univ: {
    type: String,
    required: true,
  },
  GradDate: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("user", userSchema);
