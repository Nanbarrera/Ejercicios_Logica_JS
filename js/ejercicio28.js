/*Máximo y mínimo en un array: Escribe una función que encuentre el valor
más grande y el más pequeño en un array de números.*/

// Define la función que encuentra el máximo y el mínimo en un array
function encontrarMaximoMinimo(array) {
    if (array.length === 0) {
        return "El array está vacío."; // Maneja el caso de array vacío
    }

    let maximo = array[0]; // Inicializa el máximo con el primer elemento
    let minimo = array[0];  // Inicializa el mínimo con el primer elemento

    // Recorre el array para encontrar el máximo y el mínimo
    for (let i = 1; i < array.length; i++) {
        if (array[i] > maximo) {
            maximo = array[i]; // Actualiza el máximo
        }
        if (array[i] < minimo) {
            minimo = array[i]; // Actualiza el mínimo
        }
    }

    return { maximo, minimo }; // Retorna un objeto con el máximo y el mínimo
}

// Pide al usuario que ingrese números separados por comas
let entrada = prompt("Ingrese números separados por comas:");

// Convierte la entrada en un array de números
let numerosArray = entrada.split(",").map(Number);

// Llama a la función y guarda el resultado
let resultado = encontrarMaximoMinimo(numerosArray);

// Imprime el resultado
if (typeof resultado === "string") {
    console.log(resultado);
} else {
    console.log("El valor más grande es:", resultado.maximo);
    console.log("El valor más pequeño es:", resultado.minimo);
}
