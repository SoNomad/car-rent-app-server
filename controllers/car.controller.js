const Car = require('../models/Car.model');

module.exports.carsController = {
  addCar: async (req, res) => {
    try {
      const { name, type, engine, seats, payPerDay, imageUrl } = req.body;

      const car = await Car.create({
        name,
        type,
        engine,
        seats,
        payPerDay,
        imageUrl,
      });
      return res.json(car);
    } catch (e) {
      return res.json(e);
    }
  },

  getCarsByPage: async (req, res, next) => {
    const ITEMS_PER_PAGE = 2;
    const page = req.query.page || 1;
    const { type } = req.params || 'car';

    try {
      const count = await Car.find({ type: type }).countDocuments();
      const pageCount = count / ITEMS_PER_PAGE;

      const transport = await Car.find({ type: type })
        .skip((page - 1) * ITEMS_PER_PAGE)
        .limit(ITEMS_PER_PAGE);

      return res.status(200).json({
        transport,
        pageCount,
      });
    } catch (error) {
      if (!error.statusCode) {
        error.statusCode = 500;
      }
      next(error);
    }
  },

  deleteCar: async (req, res) => {
    try {
      const car = await Car.findByIdAndRemove(req.params.id);
      return res.json('авто удалено');
    } catch (error) {
      return res.json(error);
    }
  },

  editCar: async (req, res) => {
    try {
      const { name, type, engine, seats, payPerDay, imageUrl } = req.body;

      const car = await Car.findByIdAndUpdate(
        { id: req.params.id },
        {
          name,
          type,
          engine,
          seats,
          payPerDay,
          imageUrl,
        }
      );
      res.json(car);
    } catch (error) {
      return res.json(error);
    }
  },
};
