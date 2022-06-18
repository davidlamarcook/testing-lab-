const {returnTwo, greeting, add, multiply, divide, subtract} = require('./functions')

test('returns number 2', () => {
    expect(returnTwo()).toBe(2)
})

test('returns greeted name', () => {
    expect(greeting('david')).toBe('Hello david')
})

test('add sum', () => {
    expect(add(3,5)).toBe(8)
})

test('multiply', () => {
    expect(multiply(3,5)).toBe(15)
})

test('divide sum', () => {
    expect(divide(10, 5)).toBe(2)
})

test('subtraction', () => {
    expect(subtract(8, 3)).toBe(5)
})

describe("Math Challenges", () => {
    test('add sum', () => {
        expect(add(3,5)).toBe(8)
    })
    test('multiply', () => {
    expect(multiply(3,5)).toBe(15)
    })
    test('divide sum', () => {
        expect(divide(10, 5)).toBe(2)
    })
    test('subtraction', () => {
        expect(subtract(8, 3)).toBe(5)
    })
})