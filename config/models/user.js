const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: {type: String, lowercase: true, unique: true}, //require later
    password: String
  }, {
    timestamps: true
  });

  module.exports = mongoose.model('User', userSchema);