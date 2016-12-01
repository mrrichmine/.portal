//-- Файл конфигурации сервера --//

//- Настраиваем Node.JS -//

// Задаем переменные для расширений Node.JS
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// Задаем переменные для файлов маршрутизации из папки 'routes'
var authRoutes = require('./routes/auth');
var appRoutes = require('./routes/app');

//- Подключаемся к MongoDB на локальном сервере через Mongoose.JS -//
// mongoose.connect('mongodb://localhost:27017/portal');
//- Подключаемся к MongoDB на удаленном сервере через Mongoose.JS -//
mongoose.connect('mongodb://10.10.0.91:27017/portal');

//- Настраиваем Express.JS -//
// Для удобства создадим переменную
var app = express();

// Иконка приложения
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

// Указываем Express.JS на объекты для инициализации при запуске
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

// Задаем папку, доступную из фронтенда
app.use(express.static(path.join(__dirname, 'public')));

// Задаем заголовки для данных из ответов(response)
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
  next();
});

// Указываем Express.JS какие маршруты использовать при попадании в окна
app.use('/auth', authRoutes);
// Корневой маршрут всегда должен идти после всех остальных, потому-что он совпадает с любым иным маршрутом
app.use('/', appRoutes);

// В любой непонятной ситуации №404 производится следующее действие
// app.use(function (req, res) {
//   return res.send('index');
// });

// Экспортируем все это добро как 'app'
module.exports = app;
