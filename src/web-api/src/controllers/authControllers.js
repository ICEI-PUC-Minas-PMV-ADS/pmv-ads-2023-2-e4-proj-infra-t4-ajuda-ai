const e = require("cors");
const jwt = require("jsonwebtoken");

const chaveSecreta = "grupo4eixo4projetoajudaai";

const secretKeys = {
  createJwtCreateObj: (nome, senha) => {
    try {
      const objeto = { nome, senha };

      return jwt.sign(objeto, chaveSecreta);
    } catch (error) {
      console.log(error);
    }
  },

  verifyJwt: (token) => {
    jwt.verify(token, chaveSecreta, (err, decoded) => {
      if (err) {
        return false;
      } else{
        return true;
      }
    });
  },

  createJwt: async (req, res) => {
    try {
      const objeto = req.body;
      const token = jwt.sign(objeto, chaveSecreta);
      res.json({ token: token });
    } catch (error) {
      console.log(error);
    }
  },

  transformJwtInObj: (req, res) => {
    const token = req.body.token;
    jwt.verify(token, chaveSecreta, (err, decoded) => {
      if (err) {
        res.status(401).json({ error: "Token inválido" });
      } else {
        res.json({ objeto: decoded });
      }
    });
  },
};

module.exports = secretKeys;
