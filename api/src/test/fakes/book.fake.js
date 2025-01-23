const { faker } = require('@faker-js/faker');

const generateOneBook = () => ({
  _id: faker.string.uuid(),
  name: faker.commerce.productName(),
  author: faker.person.fullName(),
  created_at: faker.date.recent(),
});

const generateBooks = (size) => {
  const books = [];
  for (let i = 0; i < size; i += 1) {
    books.push(generateOneBook());
  }
  return [...books];
};

module.exports = { generateBooks };
