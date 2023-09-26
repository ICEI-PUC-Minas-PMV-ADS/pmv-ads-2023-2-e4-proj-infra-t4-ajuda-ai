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



// apagar assim que as rotas certas estiverem prontas
app.get("/", (req, res) => {
  res.send(
    `Servidor está funcionando!!! <br/><br/><br/> Teste de camadas >>> <a href="http://localhost:${port}/camada">Teste de camada</a>`
  );
});

app.get("/camada", (req, res) => {
  res.send("Tudo certo!!!");
});
// ------------------------------------------------------


app.listen(port, () =>
  console.log(`Servidor rodando na rota http://localhost:${port}`)
);
