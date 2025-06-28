// ✅ MOCK the taskModel before importing the route logic
jest.mock('../models/taskModel', () => ({
  getAllTasks: jest.fn(() => Promise.resolve([
    { id: 1, title: 'Mock Task 1', description: 'Desc 1' },
    { id: 2, title: 'Mock Task 2', description: 'Desc 2' },
  ])),
}));

const request = require('supertest');
const app = require('../app'); // ✅ Express app only (not app.listen)

describe('GET /api/tasks', () => {
  it('should return all tasks (mocked)', async () => {
    const res = await request(app).get('/api/tasks');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBe(2); // because you returned 2 mock tasks
    expect(res.body[0].title).toBe('Mock Task 1');
  });
});
