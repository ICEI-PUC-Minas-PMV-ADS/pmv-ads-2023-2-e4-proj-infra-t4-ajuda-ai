const AutonomoModel = require("../models/Autonomo");
const authControllers = require("../controllers/authControllers")

const autonomoController = {
  create: async (req, res) => {
    try {
      const autonomo = {
        nome: req.body.nome,
        dataDeNacimento: req.body.dataDeNacimento,
        cpf: req.body.cpf,
        foto: req.body.foto,
        profissao: req.body.profissao,
        senha: req.body.senha,
        descricao: req.body.descricao,
      };

      const response = await AutonomoModel.create(autonomo);

      const token = authControllers.createJwtCreateObj(autonomo.nome, autonomo.senha);

      res.status(201).json({ response, token, msg: "Autonomo registrado!" });
    } catch (error) {
      console.log(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const autonomos = await AutonomoModel.find();

      const token = req.header('Authorization');

      if(authControllers.verifyJwt(token) == false || token === null || token == undefined || token == ''){
        res.status(403).json({ msg: "token invalido!" });
      } else {
        res.status(200).json(autonomos);
      }

    } catch (error) {
      console.log(error);
    }
  },
  get: async (req, res) => {
    try {
      const id = req.params.id;
      const autonomo = await AutonomoModel.findById(id);

      !autonomo
        ? res.status(404).json({ msg: "Autonomo não encontrado!" })
        : res.status(200).json(autonomo);
    } catch (error) {
      console.log(error);
    }
  },
  delete: async (req, res) => {
    try {
      const id = req.params.id;
      const autonomo = await AutonomoModel.findById(id);

      if (!autonomo) {
        res.status(404).json({ msg: "Autonomo não encontrado!" });
        return;
      }

      const autonomoDeletado = await AutonomoModel.findByIdAndDelete(id);
      res.status(200).json({
        autonomoDeletado,
        msg: `Registro de ${autonomoDeletado.nome} excluído com sucesso!`,
      });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    try {
      const id = req.params.id;

      const autonomo = {
        nome: req.body.nome,
        dataDeNacimento: req.body.dataDeNacimento,
        cpf: req.body.cpf,
        foto: req.body.foto,
        profissao: req.body.profissao,
        descricao: req.body.descricao,
      };

      const autonomoAtualizado = await AutonomoModel.findByIdAndUpdate(
        id,
        autonomo
      );

      if (!autonomoAtualizado) {
        res.status(404).json({ msg: "Autonomo não encontrado!" });
        return;
      }

      res
        .status(200)
        .json({ autonomo, msg: "Autonomo atualizado com sucesso!" });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = autonomoController;
