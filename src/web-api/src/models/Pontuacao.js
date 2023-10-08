const mongoose = require("mongoose");

const { Schema } = mongoose;

const PontuacaoSchema = new Schema(
  {
    pontuacao: {
      type: String,
      require: true,
    },
    autonomoId: {
      type: String,
      require: true,
    },
    usuarioId: {
      type: String,
      require: true,
    }
  },
  { timestamps: true }
);

const Pontuacao = mongoose.model("Pontuacao", PontuacaoSchema);

module.exports = Pontuacao;
