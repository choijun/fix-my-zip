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

router.get('/:id', (req, res, next) => {
  User.findById(req.params.id)
  .then(user => {
    res.json(user);
  })
  .catch(next);
})



module.exports = router;

