/*Palíndromos: Pide al usuario ingresar una palabra y determina si es un
palíndromo (se lee igual al derecho y al revés).*/

// Pide al usuario que ingrese una palabra
let palabra = prompt("Por favor, ingresa una palabra:");

// Elimina espacios y convierte la palabra a minúsculas
palabra = palabra.replace(/\s+/g, '').toLowerCase();

// Verifica si la palabra es un palíndromo
let esPalindromo = palabra === palabra.split('').reverse().join('');

// Muestra el resultado
if (esPalindromo) {
    console.log("La palabra '" + palabra + "' es un palíndromo.");
} else {
    console.log("La palabra '" + palabra + "' no es un palíndromo.");
}
