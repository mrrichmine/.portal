var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Тип картриджа

var schema = new Schema({
  name: {type: String, required: true} // Имя типа картриджа
});

module.exports = mongoose.model('CartridgeType', schema);