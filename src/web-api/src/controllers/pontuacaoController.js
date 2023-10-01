const PontuacaoModel = require("../models/pontuacao");

const  pontuacaoController = {
  create: async (req, res) => {
    try {
      const pontuacao = {
        descricao: req.body.descricao,
      };

      const response = await PontuacaoModel.create(pontuacao);

      res.status(201).json({ response, msg: "Comentario registrado!" });
    } catch (error) {
      console.log(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const pontuacao = await PontuacaoModel.find();

      res.status(200).json(pontuacao);
    } catch (error) {
      console.log(error);
    }
  },
  get: async (req, res) => {
    try {
      const id = req.params.id;
      const pontuacao = await PontuacaoModel.findById(id);

      !pontuacao
        ? res.status(404).json({ msg: "Pontuação não encontrada!" })
        : res.status(200).json(pontuacao);
    } catch (error) {
      console.log(error);
    }
  },
  delete: async (req, res) => {
    try {
      const id = req.params.id;
      const pontuacao = await PontuacaoModel.findById(id);
pontuacao
      if (!pontuacao) {
        res.status(404).json({ msg: "Pontuação não encontrada!" });
        return;
      }

      const pontuacaoDeletada = await pontuacaoModel.findByIdAndDelete(id);
      res.status(200).json({
       pontuacaoDeletada,
        msg: `Registro de ${pontuacaiDeletada.descricao} excluído com sucesso!`,
      });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    try {
      const id = req.params.id;

      const pontuacao = {
        descricao: req.body.descricao,
      };

      const pontuacaoAtualizada = await pontuacaoModel.findByIdAndUpdate(
        id,
       pontuacao
      );

      if (!pontuacaoAtualizada) {
        res.status(404).json({ msg: "Pontuação não encontrada!" });
        return;
      }

      res
        .status(200)
        .json({ pontuacao, msg: "Pontuação atualizada com sucesso!" });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = pontuacaoController;
