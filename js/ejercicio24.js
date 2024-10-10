// Nivel 4: Funciones
/*Funciones básicas: Escribe una función que reciba dos números como
parámetros y devuelva su suma.*/

// Define la función que suma dos números
function sumar(num1, num2) {
    return num1 + num2;
}

// Pide al usuario que ingrese dos números
let numero1 = parseFloat(prompt("Ingrese el primer número:"));
let numero2 = parseFloat(prompt("Ingrese el segundo número:"));

// Llama a la función y guarda el resultado
let resultado = sumar(numero1, numero2);

// Imprime el resultado de la suma
console.log("La suma de", numero1, "y", numero2, "es:", resultado);
