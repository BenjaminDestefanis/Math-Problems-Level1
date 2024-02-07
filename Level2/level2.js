// List of problems

// 1. Primer Factorial

const firstFactorial = (num) => {
    // La funcion recibe un numero, debe retornar el factorial de ese numero
    // EJ: num = 6 - operacion: 6*5*4*3*2*1 - retornara 720
    // si el numero es 0 o negativo - retornara el mensaje "Numero negativo"
    // tu codigo AQUI:
}

// 2. Encuentra el resto

const findRemeinder = (num1, num2) => {
    // La funccion recibe 2 numeros . PRIMERO: debemos averiguar cual es el divisor y el dividendo, 
    // en este caso el dividendo siempre debe ser el mayor de los 2 numeros. SEGUNDO: la funcion debe 
    // retornar el resto de la division entre esos numeros. 
    // en caso de que el divisor sea un 0 retornar el mensaje "No es posible dividir entre 0"
    // tu codigo AQUI:
}

// 3. Contador de divisores

const countDivisor = (n) => {
    // La funcion recibe un numero, debe retornar la cantidad de divisores, por los cuales, al
    // realizar la division , quede como resto 0. 
    // EJ: n = 6 . retorna 4 . tiene 4 divisores (6,3,2,1)
    // Si el numero recibido es 0 retornar el mensaje "Error"
    // tu codigo AQUI:
}

// 4. Cuantas ovejas perdimos?

const lostSheep = (friday, saturday, total) => {
    // La funcion recibe 3 argumentos , 2 matrizes y un numero. 
    // Cada array contiene numeros, que son los grupos de ovejas que regresaron a la granja,
    // un grupo pertenece a las que volvieron el viernes y el otro a las que volvieron el 
    // sabada. Luego el tercer argumento , es el total de ovejas que tenia registrado el 
    // granjero. La funcion debe retornar la cantidad de ovejas que no regresaron a la granja.
    // tu codigo AQUI:
}

// 5. Cuantas Pizzas comemos?

const countPizzas = (array) => {
    // La funcion recibe una matriz que contiene numeros. Estos indican
    // el nivel de hambre que tiene la persona ( 0 - 100). Dependiendo el nivel de hambre
    // que tiene la persona, sera la cantidad de poriones que comera. (0 - 30 [2 porciones], 
    // 31 - 50 [5 porciones], 51 - 80 [8 porciones], 81 - 100 [12 porciones]).
    // La funcion debe retornar un array que contenga: La cantidad de personas que van a cenar.
    // la cantidad de pizzas que se comeran (1 pizza = 8 porciones)
    // indicar con un valor booleano si sobran porciones o no
    // tu codigo AQUI:


}

// 6. Numeors primos del 1 al N

const primesUpToN = (N) => {
    // la funcion recibe un numero , debe retornar una array que contenga todos los 
    // numero primos que podemos hallar desde el numero 1 , hasta el numero que hemos recibido
    // como (N) , debemos colocarlos en un array y retornar el array.
    // tu codigo AQUI:
}




module.exports = {
    firstFactorial,
    findRemeinder,
    countDivisor,
    lostSheep,
    countPizzas,
    primesUpToN
}