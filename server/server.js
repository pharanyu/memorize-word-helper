const express = require('express');
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

const PORT = process.env.PORT || 3001;

// DB config
const db = require('./config/keys').MongoURL;

// Connect to DB
mongoose.connect(db, {useNewUrlParser: true});
mongoose.Promise = global.Promise;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Connect with Angular
app.use(express.static(path.join(__dirname, '../dist/memorize-word-helper')));
app.use('/', express.static(path.join(__dirname, '../dist/memorize-word-helper')));

// ROUTES
app.use('/api/words', require('./routes/wordsRoute'));

// If an incoming request uses
// a protocol other than HTTPS,
// redirect that request to the
// same url but with HTTPS
const forceSSL = function() {
  return function (req, res, next) {
    if (req.headers['x-forwarded-proto'] !== 'https') {
      return res.redirect(
       ['https://', req.get('Host'), req.url].join('')
      );
    }
    next();
  }
}
app.use(forceSSL());

const server = http.createServer(app);
server.listen(PORT, () => console.log('Server running...'));
