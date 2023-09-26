const router = require("express").Router();

const autonomosRouter = require("./autonomos");

router.use("/", autonomosRouter);

module.exports = router;