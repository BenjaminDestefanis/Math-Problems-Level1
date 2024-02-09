const {
    firstFactorial,
    findRemeinder,
    countDivisor,
    lostSheep,
    countPizzas,
    primesUpToN
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

describe("4. lostSheep(friday, saturday, total)", () => {
    it("Debe retornar la cantidad de ovejas que no regresaron a la granja.", () => {
        expect(lostSheep([2,4,6],[2,9],30)).toBe(7)
        expect(lostSheep([2,2,1],[23,4]),32).toBe(0)
        expect(lostSheep([4,6],[5],50)).toBe(35)
    })
    it("Debe retonar el mensaje de error.", () => {
        expect(lostSheep([3,5],[8],10)).toBe("Registro equivocado!")
    })

    
}) 

//Test 5

/* describe("5. countPizzas(array)", () => {

    const dinnersCount = [20,60,80,40,10]
    it("Debe retornar la cantidad de comensales.", () => {
        expect(countPizzas(dinnersCount)).toBe()
    })
}) */

//Test 6

    describe("6. primesUpToN(N)", () => {
        test.todo("Debe retornar un array que contenga todos los numeros primos que encontro.",)
            const case1 = [23, 4, 9, 6]
            const case2 = [45, 1, 33, 56, 8]
            const case3 = [5, 7, 19, 29]
            const nPrimesCase1 = [23]
            const nPrimesCase2 = "No se hallaron numeros (P)."
            const nPrimesCase3 = [5, 7, 19, 29]

            expect(primesUpToN(case1)).toEqual(nPrimesCase1)
            expect(primesUpToN(case2)).toEqual(nPrimesCase2)
            expect(primesUpToN(case3)).toEqual(nPrimesCase3)
            
    })



