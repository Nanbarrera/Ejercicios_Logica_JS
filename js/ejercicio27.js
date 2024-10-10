/*Promedio de un array: Crea una función que reciba un array de números y
devuelva su promedio.*/

// Define la función que calcula el promedio de un array
function calcularPromedio(array) {
    if (array.length === 0) {
        return 0; // Retorna 0 si el array está vacío
    }
    
    let suma = 0;
    
    // Suma todos los elementos del array
    for (let i = 0; i < array.length; i++) {
        suma += array[i];
    }
    
    // Calcula y retorna el promedio
    return suma / array.length;
}

// Pide al usuario que ingrese números separados por comas
let entrada = prompt("Ingrese números separados por comas:");

// Convierte la entrada en un array de números
let numerosArray = entrada.split(",").map(Number);

// Llama a la función y guarda el resultado
let promedio = calcularPromedio(numerosArray);

// Imprime el resultado
console.log("El promedio de los números es:", promedio);
