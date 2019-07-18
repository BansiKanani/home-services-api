const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  name: String,
  gender: { type: String, enum: ['m', 'f'] },
  dob: Date,
  phone: Number,
  pincode: Number,
  email: String,
  address: String,
  photoUrl: String
});

module.exports = mongoose.model('Customer', customerSchema);