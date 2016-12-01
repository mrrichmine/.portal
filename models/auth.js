var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({

  firstName: {type: String, required: true},        // Имя
  lastName: {type: String, required: true},         // Фамилия
  parentName: {type: String, required: true},       // Отчество

  password: {type: String, required: true},

  personalPhone: {type: String, required: false},  // Сотовый телефон
  ipPhone: {type: String, required: false}         // IP-телефон



});

module.exports = mongoose.model('Auth', schema);
