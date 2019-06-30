const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  orders: [mongoose.SchemaTypes.ObjectId],
  name: { type: String },
  gender: { type: String },
  mobile: { type: Number, min: 1000000000, max: 9999999999 },
  email: { type: String },
  photoUrl: { type: String },
  dob: { type: Date },
  address:  { type: String }
});

module.exports = mongoose.model("Customer", customerSchema);
