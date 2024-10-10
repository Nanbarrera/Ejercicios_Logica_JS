/*Herencia: Crea una clase Estudiante que herede de Persona y agregue la
propiedad grado . Agrega un método para imprimir el grado.*/

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

// Define la clase Estudiante que hereda de Persona
class Estudiante extends Persona {
    // Constructor para inicializar las propiedades de Estudiante
    constructor(nombre, edad, grado) {
        super(nombre, edad); // Llama al constructor de Persona
        this.grado = grado; // Inicializa la propiedad grado
    }

    // Método para imprimir el grado
    imprimirGrado() {
        console.log(`Estoy en el grado: ${this.grado}.`);
    }
}

// Pide al usuario que ingrese los datos
let nombreIngresado = prompt("Ingrese el nombre:");
let edadIngresada = parseInt(prompt("Ingrese la edad:"));
let gradoIngresado = prompt("Ingrese el grado:");

// Crea una instancia de la clase Estudiante
let estudiante1 = new Estudiante(nombreIngresado, edadIngresada, gradoIngresado);

// Llama a los métodos
estudiante1.saludar();
estudiante1.imprimirGrado();
