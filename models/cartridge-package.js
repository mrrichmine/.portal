var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Пакет картриджей

var schema = new Schema({
  items:        { type: Array, required: true },                                        // Массив объектов в пакете
  from_branch:  { type: Schema.Types.ObjectId, ref: 'CartridgeStore', required: true }, // ID Хранилища отправки
  to_branch:    { type: Schema.Types.ObjectId, ref: 'CartridgeStore', required: true }, // ID Хранилища доставки
  date:         { type: Date, default: Date.now, required: true }                       // Дата создания
});

module.exports = mongoose.model('CartridgeStore', schema);