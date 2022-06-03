const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

app.use(express.static(path.join(__dirname, '../public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

//connects the API folder to the SERVER
app.use('/api', require('./api'));

/*the server sends its index.html for any requests that
doesn't match one of the API routes*/

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

//handles 500 errors

//what is process.env.NODE_ENV
app.use((err, req, res, next) => {
  // if (process.env.NODE_ENV !== 'test') console.error(err.stack);
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error');
});

module.exports = app;
