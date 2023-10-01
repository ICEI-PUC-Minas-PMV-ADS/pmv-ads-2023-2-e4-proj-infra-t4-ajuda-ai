const router = require("express").Router();

const usuarioController = require("../controllers/usuarioController");

router
  .route("/usuarios")
  .get((req, res) => usuarioController.getAll(req, res));

router
  .route("/usuario/:id")
  .get((req, res) => usuarioController.get(req, res));

router
  .route("/usuario")
  .post((req, res) => usuarioController.create(req, res));

router
  .route("/usuario/:id")
  .delete((req, res) => usuarioController.delete(req, res));

router
  .route("/usuario/:id")
  .put((req, res) => usuarioController.update(req, res));

module.exports = router;
