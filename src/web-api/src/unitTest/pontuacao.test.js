const request = require('supertest');
const port = process.env.PORT || 3000;

test('Rota GET de pontuacao completa', ()=>
{
    request(`http://localhost:3000`)
    .get('/api/pontuacao')
    .expect(200)
    .then( response => ('foi'))
})

test('Rota GET de pontuacao com parametro', ()=>
{
    request(`http://localhost:3000`)
    .get('/api/pontuacao/:id')
    .expect(200)
    .then( response => ('foi'))
})

test('Rota POST de pontuacao', ()=>
{
    request(`http://localhost:3000`)
    .post('/api/pontuacao')
    .expect('Content-Type', /json/)
    .expect(201)
    .then( response => ('foi'))
})

test('Rota DELETE de pontuacao', ()=>
{
    request(`http://localhost:3000`)
    .delete('/api/pontuacao/:id')
    .expect(200)
    .then( response => ('foi'))
})

test('Rota PUT de pontuacao', ()=>
{
    request(`http://localhost:3000`)
    .put('/api/pontuacao/:id')
    .expect('Content-Type', /json/)
    .expect(200)
    .then( response => ('foi'))
})