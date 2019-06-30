const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  name: { type: String },
  photourl: { type: String }
});

module.exports = mongoose.model("Service", serviceSchema);
