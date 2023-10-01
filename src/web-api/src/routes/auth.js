const router = require("express").Router();

const authControllers = require("../controllers/authControllers")

router
  .route("/objetoParaJWT")
  .post((req, res) => authControllers.createJwt(req, res));

router
  .route("/jwtParaObjeto")
  .post((req, res) => authControllers.transformJwtInObj(req, res));
  
module.exports = router;