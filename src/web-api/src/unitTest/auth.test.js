const request = require('supertest');

test('Rota GET de Autônomo com parametro', ()=>
{
    request(`http://localhost:3000`)
    .post('/api/objetoParaJWT')
    .expect('Content-Type', /json/)
    .expect(200)
    .then( response => ('foi'))
})

test('Rota GET de Autônomo completa', ()=>
{
    request(`http://localhost:3000`)
    .post('/api/jwtParaObjeto')
    .expect('Content-Type', /json/)
    .expect(200)
    .then( response => ('foi'))
})