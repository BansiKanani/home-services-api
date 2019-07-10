const mongoose = require('mongoose');

const loginSchema = new mongoose.Schema({
  user: mongoose.SchemaTypes.ObjectId,
  password: String,
});

module.exports = mongoose.model('Login', loginSchema);
