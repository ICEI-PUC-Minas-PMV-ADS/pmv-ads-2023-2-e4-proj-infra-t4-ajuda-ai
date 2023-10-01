const router = require("express").Router();

const autonomosRouter = require("./autonomos");
const comentariosRouter = require("./comentarios");
const usuariosRouter = require("./usuarios");
const pontuacaoRouter = require("./pontuacao");
const authRouter = require("./auth");

router.use("/", autonomosRouter);
router.use("/", comentariosRouter);
router.use("/", usuariosRouter);
router.use("/", pontuacaoRouter);
router.use("/", authRouter);

module.exports = router;
