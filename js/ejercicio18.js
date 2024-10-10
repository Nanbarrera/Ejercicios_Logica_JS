/*Suma de elementos de un array: Crea un programa que sume todos los
números de un array.*/

// Define un array de números
let numeros = [1, 2, 3, 4, 5];

// Inicializa una variable para almacenar la suma
let suma = 0;

// Recorre el array y suma los elementos
for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
}

// Imprime el resultado
console.log("La suma de los elementos del array es:", suma);
