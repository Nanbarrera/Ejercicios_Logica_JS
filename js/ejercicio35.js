/*Objetos y métodos: Crea un objeto que represente una calculadora con
métodos para sumar, restar, multiplicar y dividir*/

// Crea un objeto calculadora
const calculadora = {
    // Método para sumar
    sumar: function(num1, num2) {
        return num1 + num2;
    },

    // Método para restar
    restar: function(num1, num2) {
        return num1 - num2;
    },

    // Método para multiplicar
    multiplicar: function(num1, num2) {
        return num1 * num2;
    },

    // Método para dividir
    dividir: function(num1, num2) {
        if (num2 === 0) {
            return "No se puede dividir entre cero.";
        }
        return num1 / num2;
    }
};

// Pide al usuario que ingrese dos números y la operación
let num1 = parseFloat(prompt("Ingrese el primer número:"));
let num2 = parseFloat(prompt("Ingrese el segundo número:"));
let operacion = prompt("Ingrese la operación (sumar, restar, multiplicar, dividir):");

// Realiza la operación correspondiente y muestra el resultado
let resultado;
switch (operacion) {
    case "sumar":
        resultado = calculadora.sumar(num1, num2);
        break;
    case "restar":
        resultado = calculadora.restar(num1, num2);
        break;
    case "multiplicar":
        resultado = calculadora.multiplicar(num1, num2);
        break;
    case "dividir":
        resultado = calculadora.dividir(num1, num2);
        break;
    default:
        resultado = "Operación no válida.";
}

// Imprime el resultado
console.log("El resultado es:", resultado);
