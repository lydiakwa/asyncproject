const router = require('express').Router();
const jwt = require('jsonwebtoken');

const { User } = require('../db/dbIndex');
const { requireToken } = require('../middleware');

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

module.exports = router;
