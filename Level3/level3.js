// List of Problems

//1. HandShake - [ Apreton de manos ]

const handShake = (n) => {
    // Nos encontramos en la reunion anual de directores
    // La funcion recibe la cantidad de directores que asistiran.
    // Si cada asistente se un apreton de manos solo una vez con
    // todos los demas asistentes. ¿Cuantos apretones de manos se haran?
    // debe retornar ese numero total 
    // tu codigo AQUI:

}

//2. Minimun Height Triangle - [Altura minima de un triangulo]

const lowestTriangle = (base, area) => {
    
}

//3. Army game - [Juego de armado]

const armyGame = (a, b) => {
    
}

//4. es capicua ? 



//5. Resolvedor de operacion aritmetica -

const aritmeticProblems = (operation) => {
    // La funcion recive una operacion que como maximo puede tener sumas - restas - multiplicacion y divisiones
    // de be retornar el resultadio final de operacion.
    // PD: Recuerda respetar la jerarquia de las operaciones. Tambien ten en cuenta que to puedes utilizar el metodo
    // eval() de javascript.
    // tu codigo aqui:

    return eval(operation)

}

//6. fibonacci

const fibonacci = (n) => {
    // Función recursiva para calcular la secuencia de Fibonacci
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }

  // Testear
}


console.log(aritmeticProblems("410+45/4*3"))
console.log(fibonacci(45))



module.exports = {
    handShake
}