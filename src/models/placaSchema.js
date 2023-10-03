const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Defina a estrutura do modelo de placa
const placaSchema = new Schema({
  numeroPlaca: String,
  cidade: String,
  dataHora: {
    type: Date,
    default: Date.now
  }
});

// Exporte o modelo para uso em outras partes do seu aplicativo
module.exports = mongoose.model('Placa', placaSchema);
