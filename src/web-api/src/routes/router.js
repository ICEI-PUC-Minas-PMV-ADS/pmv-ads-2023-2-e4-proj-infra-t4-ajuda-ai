const router = require("express").Router();

const autonomosRouter = require("./autonomos");
const comentariosRouter = require("./comentarios");
const pontuacaoRouter = require("./pontuacao");

router.use("/", autonomosRouter);
router.use("/", comentariosRouter);
router.use("/", pontuacaoRouter);

module.exports = router;