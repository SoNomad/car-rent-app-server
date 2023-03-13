const { Router } = require('express');
const { shipsController } = require('../controllers/ships.controller');

const router = Router();
router.get('/ship', shipsController.getShipsByPage);
router.post('/ship', shipsController.addShip);
router.delete('/ship/:id', shipsController.deleteShip);
router.patch('/ship/:id', shipsController.editShip);

module.exports = router;
