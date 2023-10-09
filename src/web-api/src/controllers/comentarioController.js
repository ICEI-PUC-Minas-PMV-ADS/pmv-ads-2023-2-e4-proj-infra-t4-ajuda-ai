const ComentarioModel = require("../models/Comentario");

const comentarioController = {
  create: async (req, res) => {
    try {
      const comentario = {
        descricao: req.body.descricao,
        autonomoId: req.body.autonomoId,
        usuarioId: req.body.autonomoId
      };

      const response = await ComentarioModel.create(comentario);

      res.status(201).json({ response, msg: "Comentario registrado!" });
    } catch (error) {
      console.log(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const comentarios = await ComentarioModel.find();

      res.status(200).json(comentarios);
    } catch (error) {
      console.log(error);
    }
  },
  get: async (req, res) => {
    try {
      const id = req.params.id;
      const comentario = await ComentarioModel.findById(id);

      !comentario
        ? res.status(404).json({ msg: "Comentario não encontrado!" })
        : res.status(200).json(comentario);
    } catch (error) {
      console.log(error);
    }
  },
  delete: async (req, res) => {
    try {
      const id = req.params.id;
      const comentario = await ComentarioModel.findById(id);

      if (!comentario) {
        res.status(404).json({ msg: "Comentario não encontrado!" });
        return;
      }

      const comentarioDeletado = await ComentarioModel.findByIdAndDelete(id);
      res.status(200).json({
        comentarioDeletado,
        msg: `Registro de ${comentarioDeletado.descricao} excluído com sucesso!`,
      });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    try {
      const id = req.params.id;

      const comentario = {
        descricao: req.body.descricao,
      };

      const comentarioAtualizado = await ComentarioModel.findByIdAndUpdate(
        id,
        comentario
      );

      if (!comentarioAtualizado) {
        res.status(404).json({ msg: "Comentario não encontrado!" });
        return;
      }

      res
        .status(200)
        .json({ comentario, msg: "Comentario atualizado com sucesso!" });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = comentarioController;
