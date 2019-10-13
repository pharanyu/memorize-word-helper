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
app.use('/', express.static(path.join(__dirname, '../dist/memorize-word-helper/index.html')));

// ROUTES
app.use('/api/words', require('./routes/wordsRoute'));

const server = http.createServer(app);
server.listen(PORT, () => console.log('Server running...'));

