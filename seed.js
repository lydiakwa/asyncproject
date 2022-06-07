const { db, User, GuideEntry } = require('./server/db/dbIndex.js');

// console.log('HERE ARE THE METHODS', Object.keys(Robot.prototype));

const seed = async () => {
  try {
    await db.sync({ force: true });

    const duane = await User.create({
      email: 'dwatson@tribecafilm.com',
      password: 'test',
    });

    const duaneMap = await GuideEntry.create({
      lat: 32.739761,
      long: -117.14135,
      city: 'San Diego',
    });

    const second = await GuideEntry.create({
      lat: 44.97786,
      long: -85.64891,
      city: 'Suttons Bay',
    });

    const third = await GuideEntry.create({
      lat: 40.756378,
      long: -73.923851,
      city: 'Queens',
    });

    await duane.setGuideEntries([duaneMap, second, third]);
  } catch (err) {
    console.log(err);
  }
};

module.exports = seed;
// If this module is being required from another module, then we just export the
// function, to be used as necessary. But it will run right away if the module
// is executed directly (e.g. `node seed.js` or `npm run seed`)
if (require.main === module) {
  seed()
    .then(() => {
      console.log('Seeding success!');
      db.close();
    })
    .catch((err) => {
      console.error('Oh noes! Something went wrong!');
      console.error(err);
      db.close();
    });
}
