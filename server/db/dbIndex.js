const db = require('./database');
const User = require('./userModel');
const GuideEntry = require('./guideEntry');
const Marker = require('./marker');

//define associations here
User.hasMany(GuideEntry);
GuideEntry.belongsTo(User);
GuideEntry.hasMany(Marker);
Marker.belongsTo(GuideEntry);

module.exports = {
  db,
  User,
  GuideEntry,
  Marker,
};
