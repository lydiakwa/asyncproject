const router = require('express').Router();
const jwt = require('jsonwebtoken');

const { User } = require('../db/dbIndex');

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

//get - autolog in
router.get('/', requireToken, async (req, res, next) => {
  try {
    res.json(req.user);
  } catch (err) {
    next(err);
  }
});

//post - signing in
router.post('/', async (req, res, next) => {
  try {
    const { token, email, profilePicture } = await User.authenticate(req.body);
    res.json({ token, email, profilePicture });
  } catch (err) {
    next(err);
  }
});

//delete - signing out
// router.delete('/', async (req, res, next) => {
//   try {
//     res.json();
//   } catch (err) {
//     next(err);
//   }
// });

module.exports = router;
