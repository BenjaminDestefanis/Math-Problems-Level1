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


//Test 2
describe('2. powerOfTwo(num)', () => {
    it("Debe retornar la suma de los resultados del numero 2, elevado a 'num'.", () => {
        expect(powerOfTwo(12)).toBe(8190)
        expect(powerOfTwo(5)).toBe(62)
        expect(powerOfTwo(2)).toBe(6)
        expect(powerOfTwo(0)).toBe(1)
    })
})


//Test 3

describe('3. summation(number)', () => {
    it("Debe retornar la suma total de los numeros antes de 'number'.", () => {
        expect(summation(4)).toBe(10)
        expect(summation(7)).toBe(28)
    })
})

//Test 4 

describe('4. basicMathOperations(operation, num1, num2)', () => {
    it("Dependiendo que cual sea el operador, la funcion debe realizar la operacion y retornar el resultado.", () => {
        expect(basicMathOperations("+", 4, 28)).toBe(32)
        expect(basicMathOperations("-", 50, 36)).toBe(14)
        expect(basicMathOperations("/", 42, 2)).toBe(21)
        expect(basicMathOperations("*", 8, 3)).toBe(24)
    })
})