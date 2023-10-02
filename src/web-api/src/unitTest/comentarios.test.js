const request = require("supertest");

test("Rota GET de Comentario completa", async () => {
  await request(`http://localhost:3000`)
    .get("/api/comentarios")
    .expect(200)
    .then((response) => "foi");
});

test("Rota GET de Comentario com parametro", async () => {
  await request(`http://localhost:3000`)
    .get("/api/comentario/6517508ed8c3c695aac66572")
    .expect(200)
    .then((response) => "foi");
});

test("Rota POST de Comentario", async () => {
  await request(`http://localhost:3000`)
    .post("/api/comentario")
    .expect("Content-Type", /json/)
    .expect(201)
    .then((response) => "foi");
});