import { sum, multiplay, divide } from '../02-math'

test('add 1 + 3 equal to 4', () => {
  const result = sum(1, 3)
  expect(result).toBe(4)
})

test('multiply 2 * 3 equal to 6', () => {
  const result = multiplay(2, 3)
  expect(result).toBe(6)
})

test('divide 10 / 2 equal to 5', () => {
  const result = divide(10, 2)
  expect(result).toBe(5)
})

test('divide number by zero should be null', () => {
  const result = divide(10, 0)
  expect(result).toBeNull()
})
