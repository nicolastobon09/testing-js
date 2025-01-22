const BooksService = require('../../services/books.service');
const { generateBooks } = require('../fakes/book.fake');

const mockGetAll = jest.fn();

jest.mock('../../lib/mongo.lib', () => jest.fn().mockImplementation(() => ({
  getAll: mockGetAll,
  create: () => {},
})));

describe('Test for BookService', () => {
  let service;
  beforeEach(() => {
    service = new BooksService();
    jest.clearAllMocks();
  });

  describe('test for getBooks', () => {
    test('should return a list of books', async () => {
      mockGetAll.mockResolvedValue(generateBooks(5));
      const books = await service.getBooks({});

      expect(books).not.toBeNull();
      expect(mockGetAll).toHaveBeenCalled();
      expect(mockGetAll).toHaveBeenCalledWith('books', {});
      expect(mockGetAll).toHaveBeenCalledTimes(1);
    });

    test('should return one books', async () => {
      mockGetAll.mockResolvedValue(generateBooks(1));
      const books = await service.getBooks({});

      expect(books).not.toBeNull();
      expect(books.length).toBe(1);
      expect(mockGetAll).toHaveBeenCalled();
      expect(mockGetAll).toHaveBeenCalledWith('books', {});
      expect(mockGetAll).toHaveBeenCalledTimes(1);
    });
  });
});
