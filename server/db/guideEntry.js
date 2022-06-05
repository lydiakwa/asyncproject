const Sequelize = require('sequelize');
const db = require('./database');
const { STRING, FLOAT } = Sequelize;

const GuideEntry = db.define('guideEntry', {
  //add default location ?
  lat: {
    type: FLOAT,
  },
  long: {
    type: FLOAT,
  },
  city: {
    type: STRING,
  },
});

module.exports = GuideEntry;
