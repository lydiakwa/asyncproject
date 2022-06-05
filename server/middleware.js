const { User } = require('./db/dbIndex.js');

//middleware  that converts token into user object
const requireToken = async (req, res, next) => {
  try {
    const user = await User.byToken(req.headers.authorization);
    req.user = user;
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = { requireToken };
