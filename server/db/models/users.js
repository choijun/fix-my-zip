const Sequelize = require('sequelize');
import db from '../index';
import Repair from './repairs';

const User = db.define('users', {
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true
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
