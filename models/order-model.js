const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  date: Date,
  worker: mongoose.SchemaTypes.ObjectId,
  customer: mongoose.SchemaTypes.ObjectId,
  service: mongoose.SchemaTypes.ObjectId,
  address: String,
  status: { type: String, enum: ['ordered', 'completed'] }
});

module.exports = mongoose.model('Order', orderSchema);