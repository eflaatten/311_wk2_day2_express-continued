const products = require('../data/products');

const list = (req, res) => {
  res.json(products);
}

const show = (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find((product) => product._id === id);
  res.json(product);
}

const create = (req, res) => {
  const newId = products.length + 1;
  const newProduct = {
    _id: newId,
    ...req.body,
  };
  products.push(newProduct);
  res.json(newProduct);
}

module.exports = { list, show, create }