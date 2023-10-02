const mongoose = require("mongoose");

const { Schema } = mongoose;

const ComentarioSchema = new Schema(
  {
    descricao: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

const Comentario = mongoose.model("Comentario", ComentarioSchema);

module.exports = Comentario;
