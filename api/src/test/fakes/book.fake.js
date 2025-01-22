const { faker } = require('@faker-js/faker');

const generateOneBook = () => ({
  _id: faker.string.uuid(),
  name: faker.commerce.productName(),
});

const generateBooks = (size) => {
  const books = [];
  for (let i = 0; i < size; i += 1) {
    books.push(generateOneBook());
  }
  return [...books];
};

module.exports = { generateBooks };
