const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  _carId: { type: mongoose.Schema.Types.ObjectId, ref: 'Car', required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  tel: { type: Number, required: true },
  comment: String,
  fromDate: { type: String, required: true },
  toDate: { type: String, required: true },
  location: { type: String, required: true },
  totalPayment: Number,
  totalDays: Number,
});

const Booking = mongoose.model('Booking', BookingSchema);
module.exports = Booking;
