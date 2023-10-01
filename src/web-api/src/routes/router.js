const router = require("express").Router();

const autonomosRouter = require("./autonomos");
const comentariosRouter = require("./comentarios");
const usuariosRouter = require("./usuarios");
const pontuacaoRouter = require("./pontuacao");

router.use("/", autonomosRouter);
router.use("/", comentariosRouter);
router.use("/", usuariosRouter);
router.use("/", pontuacaoRouter);

module.exports = router;
