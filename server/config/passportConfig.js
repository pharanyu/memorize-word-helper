const passport = require('passport');
const localStrategy = require('passport-local').Strategy;

// User Model
const User = require("../models/UserModel");

passport.use(new localStrategy(
  {
    usernameField: 'userName',
    passwordField: 'password'
  },
  (username, password, done) => {
    User.findOne({ userName: username}, (err, user) => {
      if(err)
        return done(err);
      // unknow user
      else if(!user)
        return done(null, false, { message: 'Username is not available' });
      // wrong password
      else if(!user.verifyPassword(password))
        return done(null, false, { message: 'Wrong password' });
      // authentication succeeded
      else
        return done(null, user);
    });
  }
));
