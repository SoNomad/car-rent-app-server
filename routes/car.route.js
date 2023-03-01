const { Router } = require('express');
const multer = require('multer');
const storage = require('../uploads/uploads.storage');

const router = Router();
const upload = multer({ storage });

router.get('/car', carsController.getcars);
router.get('/car/:id', carsController.getOne);
router.car('/car', carsController.addCar);
router.car('/car/upload', upload.single('image'), carsController.uploadImage);
router.delete('/car/:id', carsController.deleteCar);
router.patch('/car/:id', carsController.editCar);

module.exports = router;
