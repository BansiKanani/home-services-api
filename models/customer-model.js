const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  name: String,
  gender: { type: String, enum: ['m', 'f'] },
  dob: Date,
  mobile: { type: Number, min: 1000000000, max: 9999999999 },
  email: String,
  photoUrl: String,
  address: String
});

module.exports = mongoose.model('Customer', customerSchema);
