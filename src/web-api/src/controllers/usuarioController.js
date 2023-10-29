const UsuarioModel = require("../models/Usuario");

const usuarioController = {
  create: async (req, res) => {
    try {
      const usuario = {
        nome: req.body.nome,
        dataDeNascimento: req.body.dataDeNascimento,
        telefone: req.body.telefone,
        email: req.body.email,
        senha: req.body.senha,
        cpf: req.body.cpf,
        foto: req.body.foto,
      };

      if(!validarCPF(usuario.cpf)){
        res.status(404).json(`CPF ${usuario.cpf} não é valído`);
      } 
      
      if(!validarEmail(usuario.email)){
        res.status(404).json(`Email ${usuario.email} não é valído`);
      } 

      if(!validarTelefone(usuario.telefone)){
        res.status(404).json(`Telefone ${usuario.telefone} não é valído`);
      } 

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
        dataDeNascimento: req.body.dataDeNascimento,
        telefone: req.body.telefone,
        email: req.body.email,
        senha: req.body.senha,
        cpf: req.body.cpf,
        foto: req.body.foto,
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

const validarEmail = (email) => {

  let emailRegex = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

  if (!email)
      return false;

  if(email.length>254)
      return false;

  var valid = emailRegex.test(email);
  if(!valid)
      return false;

  var parts = email.split("@");
  if(parts[0].length>64)
      return false;

  var domainParts = parts[1].split(".");
  if(domainParts.some(function(part) { return part.length>63; }))
      return false;

  return true;
}

const validarTelefone = (telefone) => {
  telefone = telefone.replace(/\D/g, '');

  if (!(telefone.length >= 10 && telefone.length <= 11)) return false;

  if (telefone.length == 11 && parseInt(telefone.substring(2, 3)) != 9) return false;

  for (var n = 0; n < 10; n++) {
      if (telefone == new Array(11).join(n) || telefone == new Array(12).join(n)) return false;
  }

  var codigosDDD = [11, 12, 13, 14, 15, 16, 17, 18, 19,
      21, 22, 24, 27, 28, 31, 32, 33, 34,
      35, 37, 38, 41, 42, 43, 44, 45, 46,
      47, 48, 49, 51, 53, 54, 55, 61, 62,
      64, 63, 65, 66, 67, 68, 69, 71, 73,
      74, 75, 77, 79, 81, 82, 83, 84, 85,
      86, 87, 88, 89, 91, 92, 93, 94, 95,
      96, 97, 98, 99];

  if (codigosDDD.indexOf(parseInt(telefone.substring(0, 2))) == -1) return false;

  if (new Date().getFullYear() < 2017) return true;
  if (telefone.length == 10 && [2, 3, 4, 5, 7].indexOf(parseInt(telefone.substring(2, 3))) == -1) return false;

  return true;
}

const validarCPF = (cpf) => {	
	cpf = cpf.replace(/[^\d]+/g,'');	
	if(cpf == '') return false;	
		
	if (cpf.length != 11 || 
		cpf == "00000000000" || 
		cpf == "11111111111" || 
		cpf == "22222222222" || 
		cpf == "33333333333" || 
		cpf == "44444444444" || 
		cpf == "55555555555" || 
		cpf == "66666666666" || 
		cpf == "77777777777" || 
		cpf == "88888888888" || 
		cpf == "99999999999")
			return false;		
	
	add = 0;	
	for (i=0; i < 9; i ++)		
		add += parseInt(cpf.charAt(i)) * (10 - i);	
		rev = 11 - (add % 11);	
		if (rev == 10 || rev == 11)		
			rev = 0;	
		if (rev != parseInt(cpf.charAt(9)))		
			return false;		
		
	add = 0;	
	for (i = 0; i < 10; i ++)		
		add += parseInt(cpf.charAt(i)) * (11 - i);	
	rev = 11 - (add % 11);	
	if (rev == 10 || rev == 11)	
		rev = 0;	
	if (rev != parseInt(cpf.charAt(10)))
		return false;		
	return true;   
}

module.exports = usuarioController;
