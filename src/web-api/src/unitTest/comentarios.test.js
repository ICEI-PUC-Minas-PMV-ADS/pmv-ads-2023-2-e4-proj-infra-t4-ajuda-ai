const request = require('supertest');
const port = process.env.PORT || 3000;

test('Rota GET de Comentario completa', ()=>
{
    request(`http://localhost:3000`)
    .get('/api/comentarios')
    .expect(200)
    .then( response => ('foi'))
})

test('Rota GET de Comentario com parametro', ()=>
{
    request(`http://localhost:3000`)
    .get('/api/comentario/:id')
    .expect(200)
    .then( response => ('foi'))
})

test('Rota POST de Comentario', ()=>
{
    request(`http://localhost:3000`)
    .post('/api/comentario')
    .expect('Content-Type', /json/)
    .expect(201)
    .then( response => ('foi'))
})

test('Rota DELETE de Comentario', ()=>
{
    request(`http://localhost:3000`)
    .delete('/api/comentario/:id')
    .expect(200)
    .then( response => ('foi'))
})

test('Rota PUT de Comentario', ()=>
{
    request(`http://localhost:3000`)
    .put('/api/comentario/:id')
    .expect('Content-Type', /json/)
    .expect(200)
    .then( response => ('foi'))
})