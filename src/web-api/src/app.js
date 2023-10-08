const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const conn = require("./db/conn");
conn();

const routes = require("./routes/router");
app.use("/api", routes);


app.get("/", (req, res) => {
  res.send(
    `Servidor está funcionando!!! <br/><br/><br/> Teste de perfis autônomos >>> <a href="http://localhost:${port}/api/autonomos">Teste de Perfis Autônomos</a>`
  );
});

app.listen(port, () =>
  console.log(`Servidor rodando na rota http://localhost:${port}`)
);
