/*Factorial: Escribe una función que calcule el factorial de un número.*/

// Define la función que calcula el factorial
function factorial(n) {
    if (n < 0) {
        return "El factorial no está definido para números negativos.";
    }
    if (n === 0 || n === 1) {
        return 1; // El factorial de 0 y 1 es 1
    }
    let resultado = 1;
    for (let i = 2; i <= n; i++) {
        resultado *= i; // Multiplica los números desde 2 hasta n
    }
    return resultado;
}

// Pide al usuario que ingrese un número
let numeroIngresado = parseInt(prompt("Ingrese un número para calcular su factorial:"));

// Llama a la función y guarda el resultado
let resultado = factorial(numeroIngresado);

// Imprime el resultado
console.log("El factorial de", numeroIngresado, "es:", resultado);
