const mongoose = require('mongoose');

const ShipSchema = new mongoose.Schema({
  name: { type: String, require: true },
  engine: { type: String },
  payPerDay: { type: Number, required: true },
  imageUrl: String,
});

const Ship = mongoose.model('Ship', ShipSchema);
module.exports = Ship;
