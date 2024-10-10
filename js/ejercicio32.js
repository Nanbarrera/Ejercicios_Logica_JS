/*Funciones flecha: Escribe una función flecha que reciba un array de números
y devuelva un array con los números multiplicados por 2.*/

// Define una función flecha que multiplica los números por 2
const multiplicarPorDos = (array) => {
    return array.map(num => num * 2); // Usa map para multiplicar cada número por 2
};

// Pide al usuario que ingrese números separados por comas
let entrada = prompt("Ingrese números separados por comas:");

// Convierte la entrada en un array de números
let numerosArray = entrada.split(",").map(Number);

// Llama a la función flecha y guarda el resultado
let resultado = multiplicarPorDos(numerosArray);

// Imprime el resultado
console.log("Los números multiplicados por 2 son:", resultado);
