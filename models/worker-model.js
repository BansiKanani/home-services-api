const mongoose = require("mongoose");

const workerSchema = new mongoose.Schema({
  isVerified: { type: Boolean },
  services: [mongoose.SchemaTypes.ObjectId],
  orders: [mongoose.SchemaTypes.ObjectId],
  mobile: { type: Number, min: 1000000000, max: 9999999999 },
  name: { type: String },
  gender: { type: String },
  dob: { type: Date },
  photoUrl: { type: String },
  aadhar: { type: Number },
  pan: { type: Number },
  workingHours: { start: { type: Number }, end: { type: Number } }
});

module.exports = mongoose.model("Worker", workerSchema);
