/*Funciones y condicionales: Crea una función que reciba un número y
devuelva true si es par y false si es impar.*/

// Define la función que verifica si un número es par
function esPar(numero) {
    return numero % 2 === 0; // Devuelve true si es par, false si es impar
}

// Pide al usuario que ingrese un número
let numeroIngresado = parseInt(prompt("Ingrese un número:"));

// Llama a la función y guarda el resultado
let resultado = esPar(numeroIngresado);

// Imprime el resultado
if (resultado) {
    console.log(numeroIngresado + " es un número par.");
} else {
    console.log(numeroIngresado + " es un número impar.");
}
