const express = require('express');
const BooksService = require('../services/books.service');

const router = express.Router();
const service = new BooksService();

router.get('/', async (req, res) => {
  const books = await service.getBooks();
  res.status(200).json(books);
});

router.get('/:id', async (req, res) => {
  const book = await service.getBookById(req.params.id);
  res.status(200).json(book);
});

router.post('/', async (req, res) => {
  const { body } = req;
  const newBook = await service.createBook(body);
  res.status(201).json(newBook);
});

module.exports = router;
