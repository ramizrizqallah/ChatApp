const db = require('../database/db')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
var config = require('../config'); 
let verifyUser =  function(req, res) {
    var token = req.headers['x-access-token'];
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
    
    jwt.verify(token, config.secret, function(err, decoded) {

      if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.',
    decodedq:decoded });
      
      db.User.findById(decoded.id, 
         // projection-omit the password- itshould never be returned with the other data about the user
        function (err, user) {
          if (err) return res.status(500).send("There was a problem finding the user.");
          if (!user) return res.status(404).send("No user found.");
          
          res.status(200).send(user);
      });
  })

};
let login = function(req, res) {

    db.User.findOne({ email: req.body.email }, function (err, user) {
      if (err) return res.status(500).send('Error on the server.');
      if (!user) return res.status(404).send('No user found.');
      
      var passwordIsValid = bcrypt.compare(req.body.password, user.password);
      if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });
      
      var token = jwt.sign({ id: user._id }, config.secret, {
        expiresIn: 86400 // expires in 24 hours
      });
      
      res.status(200).send({ auth: true, token: token });
    });
    
  };
module.exports = {
    verifyUser,login
}