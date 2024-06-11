const vehicles = require('../data/vehicles');

const list = (req, res) => {
  res.json(vehicles);
}

const show = (req, res) => {
  const id = parseInt(req.params.id);
  const vehicle = vehicles.find((vehicle) => vehicle._id === id);
  res.json(vehicle);
}

const create = (req, res) => {
  const newId = vehicles.length + 1;
  const newVehicle = {
    _id: newId,
    ...req.body,
  };
  vehicles.push(newVehicle);
  res.json(newVehicle);
}

module.exports = { list, show, create }