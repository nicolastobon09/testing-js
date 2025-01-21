import { Person } from '../06-person'

describe('Person IMC', () => {
  let person: Person
  beforeEach(() => {
    person = new Person({ name: 'John', weight: 70, height: 1.80 })
  })

  test('calcIMC should return normal', () => {
    // Mantra AAA
    // Arrange -> Arrange the context
    // Act -> Act on the context
    // Assert -> Assert the result
    person.weight = 70
    const result = person.calcIMC()
    expect(result).toBe('normal')
  })
  test('calcIMC should return down', () => {
    // arrnge
    person.weight = 50
    // act
    const result = person.calcIMC()
    // assert
    expect(result).toBe('down')
  })
  test('calcIMC should return overweight', () => {
    person.weight = 100
    const result = person.calcIMC()
    expect(result).toBe('overweight level 2')
  })
})
