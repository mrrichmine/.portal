var express = require('express');
var router = express.Router();

var Post = require('../models/post');

// Добавление новости
router.post('/', function (req, res) {
  var posts = new Post({
    header: req.body.header,
    text: req.body.text,
    creator: req.user.firstName.concat(' ', req.user.parentName, ' ', req.user.lastName)
  });
  posts.save(function(err, result) {
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
  Post.find(function (err, posts) {
    if (err) {
      return res.status(500).json({
        title: 'При получении списка новостей возникла ошибка соединения. Проверьте свое интернет-соединение и при необходимости обратитесь к Администратору.',
        error: err
      });
    }
    if (!posts) {
      return res.status(404).json({
        title: 'Данные не найдены',
        error: err
      });
    }
    res.status(200).json({
      message: 'Новости получены',
      obj: posts
    });
  });
});

module.exports = router;