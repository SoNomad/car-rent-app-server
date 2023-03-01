const Car = require('../models/Car.model');

module.exports.carsController = {
  addCar: async (req, res) => {
    try {
      const { name, engine, seats, payment, imageUrl } = req.body;

      const car = await Car.create({
        name,
        engine,
        seats,
        payment,
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
      const car = await Car.findById(req.body.id);
      await car.remove();
      return res.json('авто удалено');
    } catch (error) {
      return res.json(error);
    }
  },

  editCar: async (req, res) => {
    try {
      const { name, engine, seats, payment, imageUrl } = req.body;

      const car = await Car.updateOne({
        name,
        engine,
        seats,
        payment,
        imageUrl,
      });
      res.json(car);
    } catch (error) {
      return res.json(error);
    }
  },
  uploadImage: (req, res) => {
    try {
      res.json({
        url: `/uploads/${req.file.originalname}`,
      });
    } catch (error) {
      return res.json('Не удалось загрузить картинку');
    }
  },
};
