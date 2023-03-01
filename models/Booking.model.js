const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  car: { type: mongoose.Schema.Types.ObjectId, ref: 'Car', required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  destination: { type: String, required: true },
  dates: [{ type: String, required: true }],
});

const Booking = mongoose.model('Booking', BookingSchema);
module.exports = Booking;
