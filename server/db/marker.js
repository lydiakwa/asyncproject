const Sequelize = require('sequelize');
const db = require('./database');
const { STRING, FLOAT, TEXT } = Sequelize;

const Marker = db.define('marker', {
  //add default location ?
  lat: {
    type: FLOAT,
  },
  long: {
    type: FLOAT,
  },
  title: {
    type: STRING,
  },
  image: {
    type: STRING,
  },
  text: {
    type: TEXT,
  },
});

module.exports = Marker;
