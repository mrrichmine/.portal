var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({

  fullName:       {type: String, required: true},         // Полное Ф.И.О.
  password:       {type: String, required: true},

  firstName:      String,         // Имя
  lastName:       String,         // Фамилия
  parentName:     String,         // Отчество

  birthDate:      String,         // Дата рождения

  personalPhone:  String,         // Сотовый телефон
  ipPhone:        String          // IP-телефон

});

module.exports = mongoose.model('User', schema);
