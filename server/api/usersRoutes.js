const router = require('express').Router();

const { User } = require('../db/dbIndex');

//create GET, POST, PUT, DELETE routes here

//create individual user
router.post('/', async (req, res, next) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } catch (err) {
    next(err);
  }
});

//delete individual user

module.exports = router;
