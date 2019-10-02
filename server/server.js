const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// DB config
const db = require('./config/keys').MongoURL;

// Connect to DB
mongoose.connect(db, {useNewUrlParser: true});
mongoose.Promise = global.Promise;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Allow clint to access cross domain or ip-address
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'content-type, x-access-token');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.get('/', (req,res) => {
  res.end('welcome to root path');
});

// ROUTES
app.use('/api/words', require('./routes/wordsRoute'));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Sever started on port ${PORT}`));
