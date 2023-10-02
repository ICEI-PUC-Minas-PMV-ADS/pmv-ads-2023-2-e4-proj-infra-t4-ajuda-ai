const request = require("supertest");

test("Rota GET de Autônomo completa", async () => {
  await request(`http://localhost:3000`)
    .get("/api/autonomos")
    .set(
      "Authorization",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub21lIjoibWFyY3VzIiwic2VuaGEiOiIxMjMiLCJpYXQiOjE2OTYxOTYyMDh9.tILTbadDEyUZM_Mw2qTrXyXqsAKnhtYiK-5OlQ3shUI"
    )
    .expect(200)
    .then((response) => "foi");
});

test("Rota GET de Autônomo com parametro", async () => {
  await request(`http://localhost:3000`)
    .get("/api/autonomo/6513380decf9f8a4a9c4379f")
    .expect(200)
    .then((response) => "foi");
});

test("Rota POST de Autônomo", async () => {
  await request(`http://localhost:3000`)
    .post("/api/autonomo")
    .expect("Content-Type", /json/)
    .expect(201)
    .then((response) => "foi");
});
