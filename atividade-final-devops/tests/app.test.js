const request = require('supertest');
const app = require('../src/app');

describe('GET /', () => {
  it('deve retornar status 200 e message correta', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('API rodando com sucesso!');
  });
});

describe('GET /health', () => {
  it('deve retornar status ok', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('ok');
  });
});

describe('GET /soma', () => {
  it('deve somar dois números corretamente', async () => {
    const res = await request(app).get('/soma?a=5&b=3');
    expect(res.statusCode).toBe(200);
    expect(res.body.resultado).toBe(8);
  });

  it('deve retornar 0 quando parâmetros não são fornecidos', async () => {
    const res = await request(app).get('/soma');
    expect(res.statusCode).toBe(200);
    expect(res.body.resultado).toBe(0);
  });
});
