const router = require("express").Router();

const autonomoController = require("../controllers/autonomoController");

router
  .route("/autonomos")
  .get((req, res) => autonomoController.getAll(req, res));

router
  .route("/autonomo/:id")
  .get((req, res) => autonomoController.get(req, res));

router
.route("/autonomo")
.post((req, res) => autonomoController.create(req, res));

router
  .route("/autonomo/:id")
  .delete((req, res) => autonomoController.delete(req, res));

router
  .route("/autonomo/:id")
  .put((req, res) => autonomoController.update(req, res));

module.exports = router;
