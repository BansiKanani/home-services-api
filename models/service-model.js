const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  name: String,
  photourl: String
});

module.exports = mongoose.model('Service', serviceSchema);