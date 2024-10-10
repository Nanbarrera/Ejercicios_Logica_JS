/*Buscar en un array: Escribe un programa que busque un valor en un array y
muestre su posición*/

// Crea un array de ejemplo
let array = ["manzana", "mango", "naranja", "uva", "kiwi"];

// Pide al usuario que ingrese un valor para buscar
let valorBuscado = prompt("Ingrese un valor para buscar en el array:");

// Busca el valor en el array
let posicion = array.indexOf(valorBuscado);

// Verifica si el valor se encontró y muestra la posición
if (posicion !== -1) {
    console.log(`El valor "${valorBuscado}" se encuentra en la posición ${posicion}.`);
} else {
    console.log(`El valor "${valorBuscado}" no se encuentra en el array.`);
}
