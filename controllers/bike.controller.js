const Bike = require('../models/Bike.model');

module.exports.bikesController = {
  addBike: async (req, res) => {
    try {
      const { name, type, engine, payPerDay, imageUrl } = req.body;

      const bike = await Bike.create({
        name,
        type,
        engine,
        payPerDay,
        imageUrl,
      });
      return res.json(bike);
    } catch (e) {
      return res.json(e);
    }
  },

  getBikesByPage: async (req, res, next) => {
    const ITEMS_PER_PAGE = 2;
    const page = req.query.page || 1;

    try {
      const count = await Bike.find().countDocuments();
      const pageCount = count / ITEMS_PER_PAGE;

      const bikes = await Bike.find()
        .skip((page - 1) * ITEMS_PER_PAGE)
        .limit(ITEMS_PER_PAGE);

      return res.status(200).json({
        bikes,
        pageCount,
      });
    } catch (error) {
      if (!error.statusCode) {
        error.statusCode = 500;
      }
      next(error);
    }
  },

  deleteBike: async (req, res) => {
    try {
      await Bike.findByIdAndRemove(req.body.id);
      return res.json('Байк удален');
    } catch (error) {
      return res.json(error);
    }
  },

  editBike: async (req, res) => {
    try {
      const { name, type, engine, payPerDay, imageUrl } = req.body;

      const bike = await Bike.findByIdAndUpdate(
        { id: req.params.id },
        {
          name,
          type,
          engine,
          payPerDay,
          imageUrl,
        }
      );
      res.json(bike);
    } catch (error) {
      return res.json(error);
    }
  },
};
