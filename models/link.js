var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({

  linkName: {type: String, required: true},                        // Имя ссылки
  linkDesc: {type: String, required: true},                        // Описание ссылки
  linkAddress: {type: String, required: true, unique: true},       // Адресс ссылки

});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Link', schema);
