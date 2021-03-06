const router = require('express').Router();

//still need to set up main API route -- not sure what project yet
router.use('/users', require('./usersRoutes'));
router.use('/auth', require('./authRoutes'));
router.use('/maps', require('./mapsRoutes'));

router.use((req, res, next) => {
  const err = new Error('API route not found!');
  err.status = 404;
  next(err);
});

module.exports = router;
