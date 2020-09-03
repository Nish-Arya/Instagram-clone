const express = require('express');
const asyncHandler = require('express-async-handler');

const router = express.Router();

const { Post, User } = require("../../db/models");

router.get('/', asyncHandler(async function (_req, res, _next) {
  const posts = await Post.findAll({ include: User });
  res.json({ posts });
}));

module.exports = router;