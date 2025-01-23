const request = require('supertest');
const { generateBooks } = require('../src/test/fakes/book.fake');

const mockGetAll = jest.fn();

const createApp = require('../src/app');

jest.mock('../src/lib/mongo.lib', () => jest.fn().mockImplementation(() => ({
  getAll: mockGetAll,
})));

describe('Books Endpoint', () => {
  let app;
  let server;
  beforeAll(() => {
    app = createApp();
    server = app.listen(3001);
    jest.clearAllMocks();
  });

  afterAll(async () => {
    await server.close();
  });

  describe('GET /api/v1/books', () => {
    test('Should return a list books', async () => {
      // arrange
      mockGetAll.mockResolvedValue(generateBooks(4));
      // act
      const response = await request(app).get('/api/v1/books');
      // assert
      expect(response.status).toBe(200);
      expect(response.body.length).toBe(4);
    });
  });
});
