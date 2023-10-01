const UsuarioModel = require("../models/Usuario");

const usuarioController = {
  create: async (req, res) => {
    try {
      const usuario = {
        nome: req.body.nome,
        dataDeNacimento: req.body.dataDeNacimento,
        cpf: req.body.cpf,
        foto: req.body.foto,
        profissao: req.body.profissao,
        descricao: req.body.descricao,
      };

      const response = await UsuarioModel.create(usuario);

      res.status(201).json({ response, msg: "Usuário registrado!" });
    } catch (error) {
      console.log(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const usuarios = await UsuarioModel.find();

      res.status(200).json(usuarios);
    } catch (error) {
      console.log(error);
    }
  },
  get: async (req, res) => {
    try {
      const id = req.params.id;
      const usuario = await UsuarioModel.findById(id);

      !usuario
        ? res.status(404).json({ msg: "Usuário não encontrado!" })
        : res.status(200).json(usuario);
    } catch (error) {
      console.log(error);
    }
  },
  delete: async (req, res) => {
    try {
      const id = req.params.id;
      const usuario = await UsuarioModel.findById(id);

      if (!usuario) {
        res.status(404).json({ msg: "Usuário não encontrado!" });
        return;
      }

      const usuarioDeletado = await UsuarioModel.findByIdAndDelete(id);
      res.status(200).json({
        usuarioDeletado: usuarioDeletado,
        msg: `Registro de usuário excluído com sucesso!`,
      });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    try {
      const id = req.params.id;

      const usuário = {
        nome: req.body.nome,
        dataDeNacimento: req.body.dataDeNacimento,
        cpf: req.body.cpf,
        foto: req.body.foto,
        profissao: req.body.profissao,
        descricao: req.body.descricao,
      };

      const usuarioAtualizado = await UsuarioModel.findByIdAndUpdate(
        id,
        usuário
      );

      if (!usuarioAtualizado) {
        res.status(404).json({ msg: "Usuário não encontrado!" });
        return;
      }

      res
        .status(200)
        .json({ usuario: usuário, msg: "Usuário atualizado com sucesso!" });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = usuarioController;
