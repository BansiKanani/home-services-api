const mongoose = require('mongoose');

const loginSchema = new mongoose.Schema({
  phone: Number,
  userId: mongoose.SchemaTypes.ObjectId,
  password: String,
});

module.exports = mongoose.model('Login', loginSchema);