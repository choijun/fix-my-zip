const Sequelize = require('sequelize');
import db from '../index';

export default db.define('users', {
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
      len: [8, 20]
    }
  }
})
