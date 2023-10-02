const request = require('supertest');

test('Rota GET de pontuacao completa', async ()=>
{
    await request(`http://localhost:3000`)
    .get('/api/pontuacao')
    .expect(200)
    .then( response => ('foi'))
})

test('Rota GET de pontuacao com parametro', async ()=>
{
    await request(`http://localhost:3000`)
    .get('/api/pontuacao/6519f5b21063fe64a76585c2')
    .expect(200)
    .then( response => ('foi'))
})

test('Rota POST de pontuacao', async ()=>
{
    await request(`http://localhost:3000`)
    .post('/api/pontuacao')
    .expect('Content-Type', /json/)
    .expect(201)
    .then( response => ('foi'))
})