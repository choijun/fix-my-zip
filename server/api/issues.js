const express = require('express');
const router = express.Router();
const { User, Issue } = require('../db/models');
console.log(User)

router.get('/', (req, res, next) => {
  Issue.findAll()
  .then(issues => {
    res.json(issues);
  })
  .catch(next);
})

router.get('/:id', (req, res, next) => {
  Issue.findById(req.params.id)
  .then(issue => res.json(issue))
  .catch(next)
})

module.exports = router;

