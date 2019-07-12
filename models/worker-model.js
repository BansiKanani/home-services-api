const mongoose = require('mongoose');

const workerSchema = new mongoose.Schema({
  isVerified: Boolean,
  name: String,
  dob: Date,
  gender: { type: String, enum: ['m', 'f'] },
  photoUrl: String,
  mobile: { type: Number, min: 1000000000, max: 9999999999 },
  services: [mongoose.SchemaTypes.ObjectId],
  aadhar: Number,
  pan: String,
  workingHours: { start: Number, end: Number }
});

module.exports = mongoose.model('Worker', workerSchema);