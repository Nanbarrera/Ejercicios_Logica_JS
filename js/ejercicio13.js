/*Número par o impar: Escribe un programa que pida un número al usuario y
diga si es par o impar.*/

// Pide al usuario que ingrese un número
let numero = prompt("Por favor, ingresa un número:");

// Convierte la entrada a un número
numero = parseInt(numero);

// Verifica si el número es par o impar
if (numero % 2 === 0) {
    console.log("El número " + numero + " es par.") 
} else {
    console.log("El número " + numero + " es impar.")
}
