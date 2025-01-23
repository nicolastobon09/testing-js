const { MongoClient } = require('mongodb');
const request = require('supertest');

const { generateBooks } = require('../src/test/fakes/book.fake');
const { config } = require('../src/config');

const DB_NAME = config.dbName;
const MONGO_URI = config.dbUrl;

const createApp = require('../src/app');

describe('Books Endpoint', () => {
  let app;
  let server;
  let database;

  beforeAll(async () => {
    app = createApp();
    server = app.listen(3001);
    const client = new MongoClient(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await client.connect();
    database = client.db(DB_NAME);
  });

  afterAll(async () => {
    await server.close();
    await database.collection('books').drop();
  });

  describe('GET /api/v1/books', () => {
    test('Should return a list books', async () => {
      // arrange
      const seedData = await database.collection('books').insertMany(generateBooks(4));
      // act
      const response = await request(app).get('/api/v1/books');
      // assert
      expect(response.status).toBe(200);
      expect(response.body.length).toBe(seedData.insertedCount);
    });
  });
});
