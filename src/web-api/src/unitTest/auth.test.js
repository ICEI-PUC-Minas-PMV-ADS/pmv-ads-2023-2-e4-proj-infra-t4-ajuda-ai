const request = require("supertest");

test("Rota GET de Autônomo com parametro", async () => {
  await request(`http://localhost:3000`)
    .post("/api/objetoParaJWT")
    .expect("Content-Type", /json/)
    .expect(200)
    .then((response) => "foi");
});


test("Rota GET de Autônomo completa", async () => {

    const tokenTest = {
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub21lIjoibWFyY3VzIiwic2VuaGEiOiIxMjMiLCJpYXQiOjE2OTYxOTYyMDh9.tILTbadDEyUZM_Mw2qTrXyXqsAKnhtYiK-5OlQ3shUI"
    }

  await request(`http://localhost:3000`)
    .post("/api/jwtParaObjeto")
    .send(tokenTest)
    .expect("Content-Type", /json/)
    .expect(200)
    .then((response) => "foi");
});
