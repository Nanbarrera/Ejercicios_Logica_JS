// Nivel 6: Manejo del DOM
/*Manipulación del DOM: Crea un programa que cambie el texto de un párrafo
en una página HTML al hacer clic en un botón.*/

// Obtiene el botón y el párrafo del DOM
const boton = document.getElementById("miBoton");
const parrafo = document.getElementById("miParrafo");

// Añade un evento de clic al botón
boton.addEventListener("click", function() {
    parrafo.textContent = "¡El texto ha sido cambiado!";
});
