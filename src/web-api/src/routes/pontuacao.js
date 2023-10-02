const router = require("express").Router();

const pontuacaoController = require("../controllers/pontuacaoController");

router
  .route("/pontuacao")
  .get((req, res) => pontuacaoController.getAll(req, res));

router
  .route("/pontuacao/:id")
  .get((req, res) => pontuacaoController.get(req, res));

router
.route("/pontuacao")
.post((req, res) => pontuacaoController.create(req, res));

router
  .route("/pontuacao/:id")
  .delete((req, res) => pontuacaoController.delete(req, res));

router
  .route("/pontuacao/:id")
  .put((req, res) => pontuacaoController.update(req, res));

module.exports = router;
