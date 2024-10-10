/*Eventos: Crea un programa que detecte cuándo se ha presionado una tecla y
lo muestre en la consola.*/

// Añade un evento keydown al documento
document.addEventListener("keydown", function(event) {
    // Muestra la tecla presionada en la consola
    console.log(`Tecla presionada: ${event.key}`);
});
