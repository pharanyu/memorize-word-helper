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
mongoose.connect(db, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
  .then(() => console.log('DB Connected!'))
  .catch(err => console.log(`DB Connection Error: ${err.message}`));
mongoose.Promise = global.Promise;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// ROUTES
app.use('/api/user', require('./routes/userRoute'));
app.use('/api/words', require('./routes/wordsRoute'));

// Connect with Angular
app.use(express.static(path.join(__dirname, '../dist/memorize-word-helper')));
app.use('/*', express.static(path.join(__dirname, '../dist/memorize-word-helper/index.html')));

// Error handler
app.use((err, req, res, next) => {
  if(err.name === 'ValidationError') {
    var valErrors = [];
    Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
    res.status(422).send(valErrors);
  }
});

const server = http.createServer(app);
server.listen(PORT, () => {
  console.log('Server running...');
  console.log(__dirname);
  console.log(path.join(__dirname, '../dist/memorize-word-helper'));
});

