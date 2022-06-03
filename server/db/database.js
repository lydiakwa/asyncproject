const Sequelize = require('sequelize');

//for when you deploy, needs to config the SSL settings
if (process.env.DATABASE_URL) {
  config.dialectOptions = {
    ssl: {
      rejectUnauthorized: false,
    },
  };
}

const db = new Sequelize(
  process.env.DATABASE_URL || 'postgres://localhost:5432/asyncproject',
  {
    logging: false,
  }
);

module.exports = db;
