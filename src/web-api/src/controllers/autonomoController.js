const AutonomoModel = require("../models/Autonomo");
const authControllers = require("../controllers/authControllers")

const autonomoController = {
  create: async (req, res) => {
    try {
      const autonomo = {
        nome: req.body.nome,
        dataDeNascimento: req.body.dataDeNascimento,
        cpf: req.body.cpf,
        telefone: req.body.telefone,
        email: req.body.email,
        foto: req.body.foto,
        profissao: req.body.profissao,
        senha: req.body.senha,
        descricao: req.body.descricao,
      };

      if(!validarCPF(autonomo.cpf)){
        res.status(404).json(`CPF ${autonomo.cpf} não é valído`);
      } 
      
      if(!validarEmail(autonomo.email)){
        res.status(404).json(`Email ${autonomo.email} não é valído`);
      } 

      if(!validarTelefone(autonomo.telefone)){
        res.status(404).json(`Telefone ${autonomo.telefone} não é valído`);
      } 

      const response = await AutonomoModel.create(autonomo);

      const token = authControllers.createJwtCreateObj(autonomo.email, autonomo.senha);

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
        dataDeNascimento: req.body.dataDeNascimento,
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

module.exports = autonomoController;
