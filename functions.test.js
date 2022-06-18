const {returnTwo, greeting, add} = require('./functions')

test('returns number 2', () => {
    expect(returnTwo()).toBe(2)
})

test('returns greeted name', () => {
    expect(greeting('david')).toBe('Hello david')
})

test('add sum', () => {
    expect(add(3,5)).toBe(8)
})