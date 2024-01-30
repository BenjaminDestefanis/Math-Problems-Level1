const {
    convertCelsiusToFahrenheit,
    powerOfTwo,
    summation,
    basicMathOperations,
    arrowArea,
    isInOrder
} = require("../level1.js")



// Test 1
describe('1. convertCelsiusToFahrenheit(celsius)', () => {
    it("Debe retornar la conversion en Fahrenheit(numero).", () => {
        expect(convertCelsiusToFahrenheit(32)).toBe(89.6)
        expect(convertCelsiusToFahrenheit(41)).toBe(105.8)
        expect(convertCelsiusToFahrenheit(0)).toBe(32)
    })
})