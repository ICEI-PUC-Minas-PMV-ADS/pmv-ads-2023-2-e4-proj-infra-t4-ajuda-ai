const mongoose = require("mongoose");

const { Schema } = mongoose;

const UsuarioSchema = new Schema(
  {
    nome: {
      type: String,
      require: true,
    },
    dataDeNacimento: {
      type: Date,
      require: true,
    },
    cpf: {
      type: String,
      require: true,
    },
    foto: {
      type: String,
      require: true,
    },
    profissao: {
      type: [String],
      require: true,
    },
    descricao: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

const Usuario = mongoose.model("Usuario", UsuarioSchema);

module.exports = Usuario;
