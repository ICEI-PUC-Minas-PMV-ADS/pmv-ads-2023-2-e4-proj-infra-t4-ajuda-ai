const request = require('supertest');

test('Rota GET de Autônomo completa', ()=>
{
    request(`http://localhost:3000`)
    .get('/api/autonomos')
    .expect('Authorization', /eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub21lIjoibWFyY3VzIiwic2VuaGEiOiIxMjMiLCJpYXQiOjE2OTYxOTYyMDh9.tILTbadDEyUZM_Mw2qTrXyXqsAKnhtYiK-5OlQ3shUI/)
    .expect(200)
    .then( response => ('foi'))
})

test('Rota GET de Autônomo com parametro', ()=>
{
    request(`http://localhost:3000`)
    .get('/api/autonomo/:id')
    .expect(200)
    .then( response => ('foi'))
})

test('Rota POST de Autônomo', ()=>
{
    request(`http://localhost:3000`)
    .post('/api/autonomo')
    .expect('Content-Type', /json/)
    .expect(201)
    .then( response => ('foi'))
})

test('Rota DELETE de Autônomo', ()=>
{
    request(`http://localhost:3000`)
    .delete('/api/autonomo/:id')
    .expect(200)
    .then( response => ('foi'))
})

test('Rota PUT de Autônomo', ()=>
{
    request(`http://localhost:3000`)
    .put('/api/autonomo/:id')
    .expect('Content-Type', /json/)
    .expect(200)
    .then( response => ('foi'))
})
