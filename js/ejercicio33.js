/*Clases básicas: Crea una clase Persona con propiedades nombre y edad , y un
método que salude con el nombre de la persona*/

// Define la clase Persona
class Persona {
    // Constructor para inicializar las propiedades
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    // Método para saludar
    saludar() {
        console.log(`¡Hola! Mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    }
}

// Pide al usuario que ingrese el nombre y la edad
let nombreIngresado = prompt("Ingrese el nombre:");
let edadIngresada = parseInt(prompt("Ingrese la edad:"));

// Crea una instancia de la clase Persona
let persona1 = new Persona(nombreIngresado, edadIngresada);

// Llama al método saludar
persona1.saludar();
