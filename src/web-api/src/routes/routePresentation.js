module.exports = (app, port) => {
  app.get("/", (req, res) => {
    res.send(
      `Servidor está funcionando!!! <br/><br/><br/> Teste de perfis autônomos >>> <a href="http://localhost:${port}/api/autonomos">Teste de Perfis Autônomos</a>`
    );
  });
};
