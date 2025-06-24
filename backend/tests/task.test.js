const request = require('supertest');
const express = require('express');
const taskRoutes = require('../routes/taskRoutes');

const app = express();
app.use(express.json());
app.use('/api/tasks', taskRoutes);

describe('Task API Integration Tests', () => {
  it('GET /api/tasks → should return array', async () => {
    const res = await request(app).get('/api/tasks');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('POST /api/tasks → should create task', async () => {
    const res = await request(app)
      .post('/api/tasks')
      .send({ title: 'Test Task', description: 'Testing create' });
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('id');
  });
});
