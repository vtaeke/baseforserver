const express = require('express');
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

const router = express.Router();

router.get('/', async (req, res) => {
  const master = await User.findAll({
    order: [['id', 'DESC']],
  });
  res.json(master);
});

router.get('/:id', async (req, res) => {
  const master = await User.findByPk(req.params.id);
  console.log(master);
  res.json(master);
});

module.exports = router;
