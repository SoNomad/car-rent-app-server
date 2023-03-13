const Ship = require('../models/Ship.model');

module.exports.shipsController = {
  addShip: async (req, res) => {
    try {
      const { name, type, engine, payPerDay, imageUrl } = req.body;

      const ship = await Ship.create({
        name,
        type,
        engine,
        payPerDay,
        imageUrl,
      });
      return res.json(ship);
    } catch (e) {
      return res.json(e);
    }
  },

  getShipsByPage: async (req, res, next) => {
    const ITEMS_PER_PAGE = 2;
    const page = req.query.page || 1;

    try {
      const count = await Ship.find().countDocuments();
      const pageCount = count / ITEMS_PER_PAGE;

      const ships = await Ship.find()
        .skip((page - 1) * ITEMS_PER_PAGE)
        .limit(ITEMS_PER_PAGE);

      return res.status(200).json({
        ships,
        pageCount,
      });
    } catch (error) {
      if (!error.statusCode) {
        error.statusCode = 500;
      }
      next(error);
    }
  },

  deleteShip: async (req, res) => {
    try {
      await Ship.findByIdAndRemove(req.body.id);
      return res.json('авто удалено');
    } catch (error) {
      return res.json(error);
    }
  },

  editShip: async (req, res) => {
    try {
      const { name, type, engine, payPerDay, imageUrl } = req.body;

      const ship = await Ship.findByIdAndUpdate(
        { id: req.params.id },
        {
          name,
          type,
          engine,
          payPerDay,
          imageUrl,
        }
      );
      res.json(ship);
    } catch (error) {
      return res.json(error);
    }
  },
};
