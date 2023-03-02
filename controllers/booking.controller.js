const Booking = require('../models/Booking.model');

module.exports.bookingController = {
  addBooking: async (req, res) => {
    try {
      const {} = req.body;

      const booking = await Booking.create({});
      return res.json(booking);
    } catch (e) {
      return res.json(e);
    }
  },

  getBookings: async (req, res) => {
    try {
      const bookings = await Booking.find();

      return res.json(bookings);
    } catch (error) {
      return res.status(401).json(error);
    }
  },
};
