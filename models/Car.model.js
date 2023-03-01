const mongoose = require('mongoose');

const CarSchema = new mongoose.Schema({
  name: { type: String, require: true },
  engine: { type: String },
  seats: { type: String },
  payment: { type: Number, required: true },
  imageUrl: String,
});

const Car = mongoose.model('Car', CarSchema);
module.exports = Car;
