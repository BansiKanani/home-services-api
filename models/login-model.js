const mongoose = require('mongoose');

const loginSchema = new mongoose.Schema({
  mobile: { type: Number, min: 1000000000, max: 9999999999 },
  user: mongoose.SchemaTypes.ObjectId,
  password: String,
});

module.exports = mongoose.model('Login', loginSchema);