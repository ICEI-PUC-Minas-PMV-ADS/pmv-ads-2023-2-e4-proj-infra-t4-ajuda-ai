const request = require('supertest');
const port = process.env.PORT || 3000;

test('Rota GET de usuarios completa', ()=>
{
    request(`http://localhost:3000`)
    .get('/api/usuarios')
    .expect(200)
    .then( response => ('foi'))
})

test('Rota GET de usuarios com parametro', ()=>
{
    request(`http://localhost:3000`)
    .get('/api/usuario/:id')
    .expect(200)
    .then( response => ('foi'))
})

test('Rota POST de usuarios', ()=>
{
    request(`http://localhost:3000`)
    .post('/api/usuario')
    .expect('Content-Type', /json/)
    .expect(201)
    .then( response => ('foi'))
})

test('Rota DELETE de usuarios', ()=>
{
    request(`http://localhost:3000`)
    .delete('/api/usuario/:id')
    .expect(200)
    .then( response => ('foi'))
})

test('Rota PUT de usuarios', ()=>
{
    request(`http://localhost:3000`)
    .put('/api/usuario/:id')
    .expect('Content-Type', /json/)
    .expect(200)
    .then( response => ('foi'))
})