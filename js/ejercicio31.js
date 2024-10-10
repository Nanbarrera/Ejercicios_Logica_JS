/*Callbacks: Crea una función que reciba un callback. Usa el callback para
imprimir un mensaje en la consola*/

// Define una función que recibe un callback
function ejecutarCallback(callback) {
    // Llama al callback
    callback();
}

// Define un callback que imprime un mensaje
const mensaje = function() {
    console.log("¡Hola! Este es un mensaje desde el callback.");
};

// Llama a la función y pasa el callback
ejecutarCallback(mensaje);
