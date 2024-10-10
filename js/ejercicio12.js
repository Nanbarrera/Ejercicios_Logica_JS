/*Verificación de edad: Pide al usuario su edad y muestra un mensaje
dependiendo de si es mayor o menor de edad*/

// Pide al usuario que ingrese su edad
let edad = prompt("Por favor, ingresa tu edad:");

// Convierte la entrada a un número
edad = parseInt(edad);

// Verifica si la edad es mayor o menor de edad
if (edad >= 18) {
    // alert("Eres mayor de edad.");
    console.log("Eres mayor de edad.")
} else {
    // alert("Eres menor de edad.");
    console.log("Eres menor de edad.")
}
