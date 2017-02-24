var mongoose = require( 'mongoose' );
var Schema = mongoose.Schema;

// Филиал

var schema = new Schema({
  name:             { type: String, required: true },                                       // Название филиала
  address:          { type: String, required: true },                                       // Адрес филиала
  cartridge_store:  { type: Schema.Types.ObjectId, ref: 'CartridgeStore' }                  // ID Хранилища картриджей
});

module.exports = mongoose.model( 'Branch', schema );
