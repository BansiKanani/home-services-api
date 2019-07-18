const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  workerId: mongoose.SchemaTypes.ObjectId,
  customerId: mongoose.SchemaTypes.ObjectId,
  serviceId: mongoose.SchemaTypes.ObjectId,
  date: Date, 
  description: String,
  address: String,
  pincode: Number,
  phone: Number,
  status: { type: String, enum: ['ordered', 'completed'] }
});

module.exports = mongoose.model('Order', orderSchema);