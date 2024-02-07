const {
    firstFactorial,
    findRemeinder,
    countDivisor,
    lostSheep,
    countPizzas
} = require("../level2")


//Test 1

describe("1. firstFactorial(num)", () => {
    it("Debe retornar el factorial de ese numero", () => {
        expect(firstFactorial(3)).toBe(1)
        expect(firstFactorial(9)).toBe(362880)
        expect(firstFactorial(0)).toBe("Numero negativo")
    })
})

//Test 2

describe("2. findRemeinder(num1, num2)", () => {
    it("Debe retornar el resto de la divsion entre ambos numeros (num1, num2)", () => {
        expect(findRemeinder(5,3)).toBe(2)
        expect(findRemeinder(9,0)).toBe("No es posible dividir entre 0")
        expect(findRemeinder(4,12)).toBe(0)
    })
})

//Test 3 

describe("3. countDivisor(n)", () => {
    it("Debe retornar la cantida de divisores", () => {
        expect(countDivisor(6)).toBe(4)
        expect(countDivisor(8)).toBe(4)
        expect(countDivisor(13)).toBe(2)
    })
})


//Test 4

/* describe("4. lostSheep(friday, saturday, total)", () => {
    it("Debe retornar la cantidad de ovejas que no regresaron a la granja.", () => {
        expect(lostSheep()).toBe()
    })
}) */



