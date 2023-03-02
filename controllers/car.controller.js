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
  getCars: async (req, res) => {
    try {
      const cars = await Car.find();
      return res.json(cars);
    } catch (error) {
      return res.status(401).json(error);
    }
  },

  deleteCar: async (req, res) => {
    try {
      const car = await Car.findByIdAndRemove(req.body.id);
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
