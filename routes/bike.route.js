const { Router } = require('express');
const { bikesController } = require('../controllers/bike.controller');

const router = Router();
router.get('/bike', bikesController.getBikesByPage);
router.post('/bike', bikesController.addBike);
router.delete('/bike/:id', bikesController.deleteBike);
router.patch('/bike/:id', bikesController.editBike);

module.exports = router;
