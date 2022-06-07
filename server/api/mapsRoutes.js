const router = require('express').Router();

const { GuideEntry } = require('../db/dbIndex');
const { requireToken } = require('../middleware');

router.get('/', requireToken, async (req, res, next) => {
  try {
    res.json(await req.user.getGuideEntries());
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
});

module.exports = router;
