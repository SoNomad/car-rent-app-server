const mongoose = require('mongoose');

const BikeSchema = new mongoose.Schema({
  name: { type: String, require: true },
  engine: { type: String },
  payPerDay: { type: Number, required: true },
  imageUrl: String,
});

const Bike = mongoose.model('Bike', BikeSchema);
module.exports = Bike;
