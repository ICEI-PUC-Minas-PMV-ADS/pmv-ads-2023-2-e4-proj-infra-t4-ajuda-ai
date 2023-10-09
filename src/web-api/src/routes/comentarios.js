const router = require("express").Router();

const comentarioController = require("../controllers/comentarioController");

router
  .route("/comentarios")
  .get((req, res) => comentarioController.getAll(req, res));

router
  .route("/comentario/:id")
  .get((req, res) => comentarioController.get(req, res));

router
  .route("/comentario")
  .post((req, res) => comentarioController.create(req, res));

router
  .route("/comentario/:id")
  .delete((req, res) => comentarioController.delete(req, res));

router
  .route("/comentario/:id")
  .put((req, res) => comentarioController.update(req, res));

module.exports = router;
