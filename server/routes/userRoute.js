const express = require('express');
const router = express.Router();
const passport = require('passport');
const _ = require('lodash');

// User Model
const User = require("../models/UserModel");

router.post('/register', (req, res, next) => {
  var user = new User();
  user.userName = req.body.userName;
  user.password = req.body.password;
  user.save((err, doc) => {
    if(!err)
      res.send(doc);
    else {
      if(err.code == 11000) // If found duplicate error
        res.status(422).send(['Duplicate user name found.']);
      else
        return next(err);
    }
  });
});

router.post('/authenticate', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    // error from passport middleware
    if(err)
      return res.status(400).json(err);
    // registered user
    else if(user)
      return res.status(200).json({'token': user.generateJwt() });
    // unknown user or wrong password
    else
      return res.status(404).json(info);
  })(req, res);
});

module.exports = router;
