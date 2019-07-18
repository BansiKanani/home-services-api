const mongoose = require('mongoose');

const workerSchema = new mongoose.Schema({
  isVerified: Boolean,
  dob: Date,
  name: String,
  gender: { type: String, enum: ['m', 'f'] },
  address: String,
  photoUrl: String,
  phone: Number,
  servicesId: [mongoose.SchemaTypes.ObjectId],
  aadhar: Number,
  pan: String,
  workingHours: { start: Number, end: Number }
});

module.exports = mongoose.model('Worker', workerSchema);
