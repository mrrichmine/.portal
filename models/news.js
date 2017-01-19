var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
  header:   {type: String, required: true}, // Заголовок новости
  text:     {type: String, required: true}, // Текст новости
  creator:  {type: Schema.Types.ObjectId, ref: 'User', required: true} // Создатель новости
});

module.exports = mongoose.model('News', schema);