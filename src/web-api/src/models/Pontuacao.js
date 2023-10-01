const mongoose = require("mongoose");

const { Schema } = mongoose;

const PontuacaoSchema = new Schema(
  {
    pontuacao: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

const Pontuacao = mongoose.model("Pontuacao", PontuacaoSchema);

module.exports = Pontuacao;
