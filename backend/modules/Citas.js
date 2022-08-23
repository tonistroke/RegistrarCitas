const mongoose = require('mongoose');
const CitaSchema = new mongoose.Schema({
  Nombre: String,
  NumeroDeIdentidad: Number,
  InformacionDeLaCita: String,
  Fecha: Date,
});

module.exports = mongoose.model('cita', CitaSchema);
