// Matchers

type user = {
  name: string,
  lastName?: string
}

test('Test for objects', () => {
  const user: user = { name: 'nicolas' }
  user.lastName = 'Alvarez'
  expect(user).toEqual({ name: 'nicolas', lastName: 'Alvarez' })
})

test('Test for null', () => {
  const data = null
  expect(data).toBeNull()
  expect(data).toBeDefined()
  expect(data).not.toBeUndefined()
})

test('Test for booleans', () => {
  expect(true).toBeTruthy()
  expect(true).not.toBeFalsy()

  expect(false).not.toBeTruthy()
  expect('').toBeFalsy()
  expect(0).not.toBeTruthy()
})

test('Test for string', () => {
  const name = 'Valentina'
  expect(name).toMatch(/tina/)
})

test('Test for array', () => {
  const numbers = [1, 2, 3]
  expect(numbers).toContain(2)
  expect(numbers).not.toContain(4)
  expect(numbers).toHaveLength(3)
})
