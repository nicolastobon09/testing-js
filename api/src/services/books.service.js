const MongoLib = require('../lib/mongo.lib');

class BooksService {
  constructor() {
    this.collection = 'books';
    this.mongoDB = new MongoLib();
  }

  getBooks(query) {
    return this.mongoDB.getAll(this.collection, query);
  }

  getBookById(id) {
    return this.mongoDB.get(this.collection, id);
  }

  createBook(newBook) {
    return this.mongoDB.create(this.collection, newBook);
  }
}

module.exports = BooksService;
