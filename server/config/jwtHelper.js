const jwt = require('jsonwebtoken');

module.exports.verifyJwtToken = (req, res, next) => {
  var token;
  // check req headers
  if('authorization' in req.headers)
    token = req.headers['authorization'];

  // check if no token
  if(!token)
    return res.status(403).send({ auth: false, message: 'No token provided' });
  else {
    jwt.verify(token, require('./keys').JWT_SECRET, (err, decoded) => {
      if(err)
        return res.status(500).send({ auth: false, message: 'Token authentication failed' });
      else {
        req.userName = decoded.userName;
        next();
      }
    });
  }

}
