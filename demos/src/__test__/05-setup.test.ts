describe('Set', () => {
  beforeAll(() => {
    console.log('Before all set')
  })

  test('Case 1', () => {
    expect(1).toBe(1)
  })
  test('Case 2', () => {
    expect(false).toBeFalsy()
  })
  test('Case 3', () => {
    expect(true).toBeTruthy()
  })
  afterAll(() => {
    console.log('after all set')
  })
  beforeEach(() => {
    console.log('Before each set')
  })
  afterEach(() => {
    console.log('After each set')
  })

  describe('Nested', () => {
    beforeAll(() => {
      console.log('Before all nested')
    })
    test('Case 1', () => {
      expect(1).toBe(1)
    })
    test('Case 2', () => {
      expect(false).toBeFalsy()
    })
    test('Case 3', () => {
      expect(true).toBeTruthy()
    })
  })
})
