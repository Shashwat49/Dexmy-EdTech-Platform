const request = require('supertest');
const app = require('../src/app');

describe('Basic API Tests', () => {
  it('should return welcome message on GET /', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBeDefined();
  });
});
