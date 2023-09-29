const router = require("express").Router();

const autonomosRouter = require("./autonomos");
const comentariosRouter = require("./comentarios");

router.use("/", autonomosRouter);
router.use("/", comentariosRouter);

module.exports = router;