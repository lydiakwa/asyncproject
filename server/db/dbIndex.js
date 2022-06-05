const db = require('./database');
const User = require('./UserModel');
const GuideEntry = require('./guideEntry');

//define associations here
User.hasMany(GuideEntry);
GuideEntry.belongsTo(User);

module.exports = {
  db,
  User,
  GuideEntry,
};
