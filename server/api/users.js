const express = require('express');
const router = express.Router();
const { User, Issue } = require('../db/models');

router.get('/', (req, res, next) => {
  User.findAll()
  .then(users => {
    res.json(users);
  })
  .catch(next);
})

module.exports = router;

