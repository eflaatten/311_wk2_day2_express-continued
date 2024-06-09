const express = require("express");
const router = express.Router();

router.get("/vehicles", (res) => {
  res.send("vehicles.js");
});

const list = (res) => {
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