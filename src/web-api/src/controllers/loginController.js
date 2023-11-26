const AutonomoModel = require("../models/Autonomo");
const UsuarioModel = require("../models/Usuario");
const authControllers = require("../controllers/authControllers");

const loginController = {
    loginPerfil: async (req, res) => {
      try {
        const dadosLogin = {
          perfil: req.body.perfil, 
          email: req.body.email,
          senha: req.body.senha,

        };

        if(!validarEmail(dadosLogin.email)){
          res.status(404).json(`Email ${dadosLogin.email} não é valído`);
          return
        }

        if(dadosLogin.perfil == "usuario"){

          const response = await UsuarioModel.findOne({email: dadosLogin.email});
          const token = authControllers.createJwtCreateObj(dadosLogin.email, dadosLogin.senha);

          dadosLogin.senha == response.senha? console.log(`Senha compatível`): res.stats(400).json(`Senha é incompatível.`);
  
          res.json({ response, token, msg: "Login com Sucesso!" });

        }else if(dadosLogin.perfil == "autonomo"){

          const response = await AutonomoModel.findOne({email: dadosLogin.email});
          const token = authControllers.createJwtCreateObj(dadosLogin.email, dadosLogin.senha);

          dadosLogin.senha == response.senha? console.log(`Senha compatível`): res.stats(400).json(`Senha é incompatível.`);
  
          res.json({ response, token, msg: "Login com Sucesso!" });

        }
      } catch (error) {
        console.log(error);
        res.status(500).json(`Email não é valído`);
      }
    }
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

module.exports = loginController;