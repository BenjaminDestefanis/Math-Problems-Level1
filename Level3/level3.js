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

//6. Suma de pares fibonacci

const fibonacciEvenSum = (n) => {
    // Función recursiva para calcular la suma total de todos los numeros pares
    // de una sucecion de fibonacci
    // tu codigo AQUI:

    let initA = 1
    let initB = 2

    let sumResult = 0

    while(initB <= n){  // Corroborar si n es mayor que el minimo permitido (2)
      if(initB % 2 === 0){
        sumResult = sumResult + initB
      }

      // Sequencia de fibonacci en accion
      let temp = initB
      initB = initA + initB
      initA = temp
    
    }

    return sumResult


  // Testear
}


// 7. Numero primo mayor

const largestPrimeFactor = (num) => {
  // La funcion debe obtener el factor primo mas grande del numero recibido
  // tu codigo AQUI:

  let primoMayor = 1

  while (num % 2 === 0){
    primoMayor = num // corroborar si es divisible y almacenarlo
    num = num / 2   // reduccion del numero recibido
  }

  for (let i = 3; i <= Math.sqrt(num); i = i + 2){ // investigar
    while (num % i === 0){
      primoMayor = i
      num = num / i
    }
  }

  if (num > 2){
      primoMayor = num
    }

  return primoMayor

}


console.log(aritmeticProblems("410+45/4*3"))
console.log(fibonacci(45))



module.exports = {
    handShake
}