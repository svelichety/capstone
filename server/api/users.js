var express = require('express');
var Users = require('../models/users');

var router = express.Router();

router.get('/', (req, res) => {
  Users.retrieveAll(function(err, users) {
    if (err)
     return res.json(err);
    return res.json(users);
  });
});

router.post('/', (req, res) => {
  var user = req.body.user;

  Users.insert(user, (err, result) => {
    if (err)
      return res.json(err);
    return res.json(result);
  });
});

module.exports = router;