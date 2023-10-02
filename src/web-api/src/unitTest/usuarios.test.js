const request = require('supertest');

test('Rota GET de usuarios completa', async ()=>
{
    await request(`http://localhost:3000`)
    .get('/api/usuarios')
    .expect(200)
    .then( response => ('foi'))
})

test('Rota GET de usuarios com parametro', async ()=>
{
    await request(`http://localhost:3000`)
    .get('/api/usuario/6519ea511063fe64a7658592')
    .expect(200)
    .then( response => ('foi'))
})

test('Rota POST de usuarios', async ()=>
{
    await request(`http://localhost:3000`)
    .post('/api/usuario')
    .expect('Content-Type', /json/)
    .expect(201)
    .then( response => ('foi'))
})