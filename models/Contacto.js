var mongoose = require('mongoose');

var ContSchema = new mongoose.Schema({
  mail: String,
  pregunta: String,
  calendario: Date,
});

module.exports = mongoose.model('Contacto', ContSchema);