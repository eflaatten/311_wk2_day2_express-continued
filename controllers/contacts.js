const express = require("express");
const router = express.Router();
const contacts = require("../data/contacts");

router.get("/contacts", (res) => {
  res.send("contacts.js");
});

const list = (res) => {
  res.json(contacts);
};

const show = (req, res) => {
  const id = parseInt(req.params.id);
  const contact = contacts.find((contact) => contact._id === id);
  res.json(contact);
}

const create = (req, res) => {
  const newId = contacts.length + 1;
  const newContact = {
    _id: newId,
    ...req.body,
  };
  contacts.push(newContact);
  res.json(newContact);
}

module.exports = { list, show, create }
