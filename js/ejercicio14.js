/*Conversión de temperaturas: Crea un programa que convierta grados Celsius
a Fahrenheit.*/

// Pide al usuario que ingrese la temperatura en grados Celsius
let celsius = prompt("Por favor, ingresa la temperatura en grados Celsius:");

// Convierte la entrada a un número
celsius = parseFloat(celsius);

// Convierte Celsius a Fahrenheit
let fahrenheit = (celsius * 9/5) + 32;

// Muestra el resultado
console.log(celsius + "°C es igual a " + fahrenheit + "°F.");
