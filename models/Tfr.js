const mongoose = require("mongoose");

const TfrSchema = new mongoose.Schema({
  numeroRTC: {
    type: String,
    unique: true,
  },
  idSitio: {
    type: String,
  },
  dataFalha: {
    type: String,
  },
  descricao: {
    type: String,
  },
  tempoGasto: {
    type: String,
  },
});

module.exports = mongoose.models.Tfr || mongoose.model("Tfr", TfrSchema);
