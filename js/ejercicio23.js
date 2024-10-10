/*Agregar y eliminar elementos en arrays: Crea un programa que agregue un
elemento a un array y luego elimine el último elemento.*/

// Crea un array inicial
let array = [];

// Pide al usuario que ingrese un elemento para agregar
let nuevoElemento = prompt("Ingrese un elemento para agregar al array:");

// Agrega el nuevo elemento al array
array.push(nuevoElemento);

// Imprime el array después de agregar el elemento
console.log("Array después de agregar el elemento:", array);

// Elimina el último elemento del array
array.pop();

// Imprime el array después de eliminar el último elemento
console.log("Array después de eliminar el último elemento:", array);
