const request = require('supertest');
const app = require('../src/app');

describe('Auth API', () => {
  describe('POST /api/auth/login', () => {
    it('returns 400 when fields are missing', async () => {
      const res = await request(app).post('/api/auth/login').send({ identifier: 'test@test.com' });
      expect(res.statusCode).toBe(400);
      expect(res.body.success).toBe(false);
    });

    it('returns 400 for invalid role', async () => {
      const res = await request(app)
        .post('/api/auth/login')
        .send({ identifier: 'test@test.com', password: '123456', role: 'admin' });
      expect(res.statusCode).toBe(400);
      expect(res.body.message).toMatch(/teacher, student, or parent/i);
    });
  });

  describe('POST /api/auth/register/teacher', () => {
    it('returns 400 when required fields are missing', async () => {
      const res = await request(app).post('/api/auth/register/teacher').send({ name: 'Test' });
      expect(res.statusCode).toBe(400);
      expect(res.body.success).toBe(false);
    });

    it('returns 400 when email and phone both missing', async () => {
      const res = await request(app)
        .post('/api/auth/register/teacher')
        .send({ name: 'Test', password: '123456' });
      expect(res.statusCode).toBe(400);
      expect(res.body.message).toMatch(/at least one/i);
    });

    it('returns 400 when password is too short', async () => {
      const res = await request(app)
        .post('/api/auth/register/teacher')
        .send({ name: 'Test', phone: '9876543210', password: '123' });
      expect(res.statusCode).toBe(400);
      expect(res.body.message).toMatch(/at least 6 characters/i);
    });
  });

  describe('POST /api/auth/register/student', () => {
    it('returns 400 when grade is missing', async () => {
      const res = await request(app)
        .post('/api/auth/register/student')
        .send({ name: 'Student', phone: '9876543210', password: '123456' });
      expect(res.statusCode).toBe(400);
      expect(res.body.success).toBe(false);
    });
  });

  describe('POST /api/auth/register/parent', () => {
    it('returns 400 when student details are missing', async () => {
      const res = await request(app)
        .post('/api/auth/register/parent')
        .send({
          parentName: 'Parent',
          parentPhone: '9876543210',
          parentPassword: '123456'
        });
      expect(res.statusCode).toBe(400);
      expect(res.body.success).toBe(false);
    });

    it('returns 400 when parent contact is missing', async () => {
      const res = await request(app)
        .post('/api/auth/register/parent')
        .send({
          parentName: 'Parent',
          parentPassword: '123456',
          studentName: 'Child',
          grade: '5th'
        });
      expect(res.statusCode).toBe(400);
      expect(res.body.message).toMatch(/parent/i);
    });
  });

  describe('GET /api/auth/me', () => {
    it('returns 401 without token', async () => {
      const res = await request(app).get('/api/auth/me');
      expect(res.statusCode).toBe(401);
      expect(res.body.success).toBe(false);
    });
  });
});
