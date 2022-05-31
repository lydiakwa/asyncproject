const Sequelize = require('sequelize');
const db = require('./database');
const { STRING, DATEONLY, TEXT, INTEGER, BOOLEAN } = Sequelize;

const User = db.define('user', {
  username: {
    type: STRING,
    allownull: false,
    validate: {
      notEmpty: false,
    },
  },
  email: {
    type: STRING,
    allownull: false,
    validate: {
      notEmpty: false,
    },
  },
});
