const router = require("express").Router();

const autonomosRouter = require("./autonomos");
const comentariosRouter = require("./comentarios");
const usuariosRouter = require("./usuarios");

router.use("/", autonomosRouter);
router.use("/", comentariosRouter);
router.use("/", usuariosRouter);

module.exports = router;
