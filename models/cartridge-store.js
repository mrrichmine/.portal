var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Branch = require('./branch');

// Хранилище картриджей

var schema = new Schema({
  branch: {type: Schema.Types.ObjectId, ref: 'Branch', required: true}, // ID Филиала
  stock:  {type: Array}                                                 // Перечень картриджей в хранилище
});

schema.post('add', function (cartridge_store) {
  Branch.findById(cartridge_store.branch, function (err, branch) {
    branch.cartridge_store.push(cartridge_store);
    branch.save();
  });
})

module.exports = mongoose.model('CartridgeStore', schema);