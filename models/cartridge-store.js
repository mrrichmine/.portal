var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Хранилище картриджей

var schema = new Schema({
  branch: {type: Schema.Types.ObjectId, ref: 'Branch', required: true}, // ID Филиала
  stock:  {type: Array}                                                 // Перечень картриджей в хранилище
});

module.exports = mongoose.model('CartridgeStore', schema);