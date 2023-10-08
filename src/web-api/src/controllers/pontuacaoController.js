const PontuacaoModel = require("../models/Pontuacao");

const pontuacaoController = {
  create: async (req, res) => {
    try {
      const pontuacao = req.body;

      const response = await PontuacaoModel.create(pontuacao);

      res.status(201).json({ response, msg: "Pontuação registrada!" });
    } catch (error) {
      console.log(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const pontuacoes = await PontuacaoModel.find();

      res.status(200).json(pontuacoes);
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

      if (!pontuacao) {
        res.status(404).json({ msg: "Pontuação não encontrada!" });
        return;
      }

      const pontuacaoDeletada = await PontuacaoModel.findByIdAndDelete(id);
      res.status(200).json({
        pontuacaoDeletada,
        msg: `Registro de ${pontuacaoDeletada.pontuacao} excluído com sucesso!`,
      });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    try {
      const id = req.params.id;

      const pontuacao = {
        pontuacao: req.body.pontuacao,
      };

      const pontuacaoAtualizada = await PontuacaoModel.findByIdAndUpdate(
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
