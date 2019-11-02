const express = require('express');
const router = express.Router();

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

module.exports = router;
