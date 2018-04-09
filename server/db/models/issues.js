const Sequelize = require('sequelize');
const db = require('../index');


module.exports = db.define('issue', {
  imageid: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  issue: {
    type: Sequelize.ENUM('pothole', 'streetlight', 'traffic-light'),
    allowNull: false,
  },
  latitude: {
    type: Sequelize.FLOAT,
    allowNull: false,
    validate: {
      min: -90, max: 90
    }
  },
  longitude: {
    type: Sequelize.FLOAT,
    allowNull: false,
    validate: {min: -180, max: 180}
  },
  fixed: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  }
})


