const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  date: { type: String },
  worker: { type: mongoose.SchemaTypes.ObjectId },
  customer: { type: mongoose.SchemaTypes.ObjectId },
  service: { type: mongoose.SchemaTypes.ObjectId },
  address:  { type: String },
  status: { type: String, enum: ["ordered", "completed"] }
});

module.exports = mongoose.model("Order", orderSchema);
