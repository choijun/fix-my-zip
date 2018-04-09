const Sequelize = require('sequelize');
const db = require('../index');
const Issue = require('./issues');

const User = db.define('users', {
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    // defaultValue: this.email.slice(0,5) + Math.ceil(Math.random() * 99),
    validate: {
      notEmpty: true
    }
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      len: [2, 20]
    },
  },
  admin: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
    },
  phone: {
    type: Sequelize.STRING,
    allowNull: true,
    validate: {
      len:[10,11]
    }
  }
})


module.exports = { User }
