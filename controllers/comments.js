const comments = require('../data/comments');

const list = (req, res) => {
  res.json(comments)
}

const show = (req, res) => {
  const id = parseInt(req.params.id);
  const comment = comments.find((comment) => comment._id === id);
  res.json(comment);
}

const create = (req, res) => {
  const newId = comments.length + 1;
  const newComment = {
    _id: newId,
    ...req.body,
  };
  comments.push(newComment);
  res.json(newComment);
}

module.exports = { list, show, create }
