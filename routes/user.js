var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

var User = require('../models/user');

// Добавление нового пользователя
router.post('/signup', function (req, res) {
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
        title: 'При создании пользователя возникла ошибка соединения. Проверьте свое интернет-соединение и при необходимости обратитесь к Администратору.',
        error: err
      });
    }
    res.status(201).json({
      message: 'Пользователь зарегистрирован. Для входа в систему нажмите "Вход в систему"',
      obj: result
    });
  });
});

// Вход в систему
router.post('/signin', function(req, res) {
  User.findOne({fullName: req.body.lastName.concat('', req.body.firstName, '', req.body.parentName, '', req.body.birthDate)}, function(err, user) {
    if (err) {
      return res.status(500).json({
        title: 'При входе пользователя возникла ошибка соединения. Проверьте свое интернет-соединение и при необходимости обратитесь к Администратору.',
        error: err
      });
    }
    if (!user) {
      return res.status(401).json({
        title: 'Вход не выполнен',
        error: {message: 'Некорректные данные - проверьте ФИО, дату рождения и пароль'}
      });
    }
    if (!bcrypt.compareSync(req.body.password, user.password)) {
      return res.status(401).json({
        title: 'Вход не выполнен',
        error: {message: 'Некорректные данные - проверьте ФИО, дату рождения и пароль'}
      });
    }
    var token = jwt.sign({user: user}, 'secret', {expiresIn: 7200});
    res.status(200).json({
      message: 'Вход в систему произведен',
      token: token,
      userId: user._id
    });
  });
});

// Информация о пользователе
router.post('/userdata', function (req, res) {
  User.findOne({_id: req.body.userid}, function (err, result) {
    if (err) {
      return res.status(500).json({
        title: 'При получении информации о пользователе возникла ошибка соединения. Проверьте свое интернет-соединение и при необходимости обратитесь к Администратору.',
        error: err
      });
    }
    res.status(200).json({
      message: 'Данные о пользователе получены',
      user: result
    });
  });
});

module.exports = router;