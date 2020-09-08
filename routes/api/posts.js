const express = require('express');
const asyncHandler = require('express-async-handler');

const router = express.Router();

const { Post, User, Comment } = require("../../db/models");

router.get('/', asyncHandler(async function (_req, res, _next) {
  const posts = await Post.findAll({ include: [User, Comment] });
  res.json({ posts });
}));

router.post('/:id/comments', asyncHandler(async function (req, res, _next) {
  await Comment.create(req.body)
  res.json({ message: 'Successful' });
}));

module.exports = router;