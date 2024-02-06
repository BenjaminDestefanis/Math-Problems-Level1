const {
    firstFactorial,
    findRemeinder,
    countDivisor,
    lostSheep
} = require("../level2")


//Test 1

describe("1. firstFactorial(num)", () => {
    it("Debe retornar el factorial de ese numero", () => {
        expect(firstFactorial(3)).toBe(1)
        expect(firstFactorial(9)).toBe(362880)
        expect(firstFactorial(0)).toBe("Numero negativo")
    })
})