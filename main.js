require('dotenv').config();

const app = require('./server');
const db = require('./server/db/database');

const port = process.env.PORT || 3000;

// app.listen(port, function () {
//   console.log(`listening on port ${port}`);
// });

db.sync().then(function () {
  app.listen(port); // then start listening with our express server once we have synced
});
