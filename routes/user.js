var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

var User = require('../models/user');

// Добавление нового пользователя
router.post('/', function (req, res) {
  var user = new User({
    fullName: req.body.lastName.concat('', req.body.firstName, '', req.body.parentName, '', req.body.birthDate),
    password: bcrypt.hashSync(req.body.password, 10),
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    parentName: req.body.parentName,
    birthDate: req.body.birthDate,
    personalPhone: req.body.personalPhone,
    ipPhone: req.body.ipPhone
  });
  user.save(function(err, result) {
    if (err) {
      return res.status(500).json({
        title: 'An error occurred when user was created',
        error: err
      });
    }
    res.status(201).json({
      message: 'User created',
      obj: result
    });
  });
});

router.post('/signin', function(req, res) {
  User.findOne({fullName: req.body.lastName.concat('', req.body.firstName, '', req.body.parentName, '', req.body.birthDate)}, function(err, user) {
    if (err) {
      return res.status(500).json({
        title: 'An error occurred',
        error: err
      });
    }
    if (!user) {
      return res.status(401).json({
        title: 'Login failed',
        error: {message: 'Invalid login credentials'}
      });
    }
    if (!bcrypt.compareSync(req.body.password, user.password)) {
      return res.status(401).json({
        title: 'Login failed',
        error: {message: 'Invalid login credentials'}
      });
    }
    var token = jwt.sign({user: user}, 'secret', {expiresIn: 7200});
    res.status(200).json({
      message: 'Successfully logged in',
      token: token,
      userId: user._id
    });
  });
});

module.exports = router;