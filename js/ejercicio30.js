// Nivel 5: Temas intermedios
/*Funciones anónimas: Escribe una función anónima que multiplique dos
números.*/

// Define una función anónima para multiplicar dos números
const multiplicar = function(num1, num2) {
    return num1 * num2;
};

// Pide al usuario que ingrese dos números
let numero1 = parseFloat(prompt("Ingrese el primer número:"));
let numero2 = parseFloat(prompt("Ingrese el segundo número:"));

// Llama a la función anónima y guarda el resultado
let resultado = multiplicar(numero1, numero2);

// Imprime el resultado
console.log("El resultado de multiplicar", numero1, "y", numero2, "es:", resultado);
