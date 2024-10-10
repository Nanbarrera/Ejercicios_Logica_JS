/*Validación de entrada: Pide al usuario que ingrese un número y verifica si es
realmente un número. Si no lo es, muestra un mensaje de error.*/

// Pide al usuario que ingrese un número
let entrada = prompt("Por favor, ingresa un número:");

// Verifica si la entrada es un número
if (isNaN(entrada) || entrada.trim() === "") {
    console.log("Error: La entrada no es un número válido.");
} else {
    console.log("Gracias, has ingresado el número: " + entrada);
}
