var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var querySchema = new Schema({
 name:  String,
 companyname:  String,
 query:  String,
 contactnumber:  String,
 email:  String,
 services:  String
});

module.exports = mongoose.model('Queries', querySchema);
