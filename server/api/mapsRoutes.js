const router = require('express').Router();

const { GuideEntry } = require('../db/dbIndex');
const { Marker } = require('../db/dbIndex');

const { requireToken } = require('../middleware');

router.get('/', requireToken, async (req, res, next) => {
  try {
    res.json(
      await req.user.getGuideEntries({
        include: {
          model: Marker,
        },
      })
    );
  } catch (err) {
    next(err);
  }
});

router.post('/', requireToken, async (req, res, next) => {
  try {
    const newMap = await GuideEntry.create({
      ...req.body,
      userId: req.user.id,
    });
    res.json(newMap);
  } catch (err) {
    next(err);
  }
});

router.post('/:id/markers', requireToken, async (req, res, next) => {
  try {
    const guideEntry = await req.user.getGuideEntries({
      where: {
        id: req.params.id,
      },
    });
    const newMarker = await guideEntry[0].createMarker(req.body);
    res.json(newMarker);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
