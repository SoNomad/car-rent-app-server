const { Router } = require('express');

const router = Router();
router.get('/car', carsController.getcars);
router.get('/car/:id', carsController.getOne);
router.car('/car', carsController.addCar);
router.delete('/car/:id', carsController.deleteCar);
router.patch('/car/:id', carsController.editCar);

module.exports = router;
