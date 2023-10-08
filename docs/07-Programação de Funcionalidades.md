# Programação de Funcionalidades

- RF-001
  src/web-api/src/routes/autonomos.js

```
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
```

- RF-002
  src/web-api/src/routes/usuarios.js

```
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
```

- RF-003
- RF-004
- RF-005
- RF-006
- RF-007
  src/web-api/src/routes/comentarios.js

```
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
```

- RF-008
  src/web-api/src/routes/auth.js

```
const router = require("express").Router();

const authControllers = require("../controllers/authControllers")

router
  .route("/objetoParaJWT")
  .post((req, res) => authControllers.createJwt(req, res));

router
  .route("/jwtParaObjeto")
  .post((req, res) => authControllers.transformJwtInObj(req, res));

module.exports = router;
```

- RF-009
- RF-010
  src/web-api/src/routes/pontuacao.js

```
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
```
