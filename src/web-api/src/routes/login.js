const router = require("express").Router();

const loginControllers = require("../controllers/loginController")

router
  .route("/login-perfil")
  .post((req, res) => loginControllers.loginPerfil(req, res));
  
module.exports = router;