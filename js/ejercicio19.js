/*Array de números pares: Escribe un programa que filtre los números pares de
un array.*/

// Define un array de números
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filtra los números pares usando el método filter
let numerosPares = numeros.filter(function(num) {
    return num % 2 === 0;
});

// Imprime el array de números pares
console.log("Números pares del array:", numerosPares);
