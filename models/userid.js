var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
  userid: {type: String, required: true}
});

module.exports = mongoose.model('Userid', schema);
