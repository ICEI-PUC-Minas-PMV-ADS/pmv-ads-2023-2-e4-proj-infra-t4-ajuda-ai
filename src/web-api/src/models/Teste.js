const mongoose = require("mongoose");

const { Schema } = mongoose;

const { autonomoSquema } = require("./Autonomo");

const testeSquema = new Schema(
  {
    lista: [autonomoSquema],
  },
  { timestamps: true }
);

const Teste = mongoose.model("Teste", testeSquema);

module.exports = Teste;
