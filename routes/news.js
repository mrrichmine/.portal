var express = require('express');
var router = express.Router();

var News = require('../models/news');

// Добавление новости
router.post('/', function (req, res) {
  var news = new News({
    header: req.body.header,
    text: req.body.text,
    creator: req.user.firstName.concat(' ', req.user.parentName, ' ', req.user.lastName)
  });
  news.save(function(err, result) {
    if (err) {
      return res.status(500).json({
        title: 'При публикации новости возникла ошибка соединения. Проверьте свое интернет-соединение и при необходимости обратитесь к Администратору.',
        error: err
      });
    }
    res.status(201).json({
      message: 'Новость успешно опубликована',
      obj: result
    });
  });
});

// Получение списка новостей
router.get('/', function (req, res) {
  News.find(function (err, result) {
    if (err) {
      return res.status(500).json({
        title: 'При получении списка новостей возникла ошибка соединения. Проверьте свое интернет-соединение и при необходимости обратитесь к Администратору.',
        error: err
      });
    }
    if (!result) {
      return res.status(404).json({
        title: 'Данные не найдены',
        error: err
      });
    }
    res.status(200).json({
      message: 'Новости получены',
      news: result
    });
  });
});

module.exports = router;