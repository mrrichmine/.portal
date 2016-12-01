var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

var User = require('../models/auth');

// Добавление нового пользователя
router.post('/', function (req, res, next) {
  var user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    parentName: req.body.parentName,
    password: bcrypt.hashSync(req.body.password, 10),
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


module.exports = router;