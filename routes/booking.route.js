const { Router } = require('express');
const { bookingController } = require('../controllers/booking.controller');

const router = Router();
router.get('/booking', bookingController.getBooks);
router.post('/booking', bookingController.addBook);
// router.delete('/car/:id', carsController.deleteCar);
// router.patch('/car/:id', carsController.editCar);

module.exports = router;
