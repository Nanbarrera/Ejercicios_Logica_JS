/*Contar vocales: Crea una función que cuente cuántas vocales hay en una
palabra.*/

// Define la función que cuenta las vocales en una palabra
function contarVocales(palabra) {
    let contador = 0;
    const vocales = "aeiouAEIOU"; // Incluye vocales en mayúsculas y minúsculas

    // Recorre cada letra de la palabra
    for (let i = 0; i < palabra.length; i++) {
        if (vocales.includes(palabra[i])) {
            contador++; // Incrementa el contador si la letra es una vocal
        }
    }

    return contador; // Retorna el total de vocales encontradas
}

// Pide al usuario que ingrese una palabra
let palabraIngresada = prompt("Ingrese una palabra:");

// Llama a la función y guarda el resultado
let totalVocales = contarVocales(palabraIngresada);

// Imprime el resultado
console.log("La palabra tiene", totalVocales, "vocales.");
