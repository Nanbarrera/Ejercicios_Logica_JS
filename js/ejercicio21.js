/*Modificar propiedades de un objeto: Crea un programa que cambie el valor
de una propiedad de un objeto y luego lo imprima*/

// Crea un objeto que representa una persona
let persona = {
    nombre: prompt("Ingrese el nombre de la persona:"),
    edad: prompt("Ingrese la edad de la persona:"),
    ciudad: prompt("Ingrese la ciudad de la persona:")
};

// Imprime el objeto original
console.log("Objeto original:", persona);

// Permite al usuario cambiar la edad
let nuevaEdad = prompt("Ingrese la nueva edad:");
persona.edad = nuevaEdad;

// Imprime el objeto modificado
console.log("Objeto modificado:", persona);

