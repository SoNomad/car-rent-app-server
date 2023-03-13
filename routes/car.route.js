const { Router } = require('express');
const { carsController } = require('../controllers/car.controller');

const router = Router();
router.get('/vehicle/:type', carsController.getCarsByPage);
router.post('/vehicle', carsController.addCar);
router.delete('/vehicle/:id', carsController.deleteCar);
router.patch('/vehicle/:id', carsController.editCar);

module.exports = router;
