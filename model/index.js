var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var querySchema = new Schema({
 query:  String
});

module.exports = mongoose.model('Queries', querySchema);
