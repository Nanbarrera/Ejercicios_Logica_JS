//Ejercicio 37
/*Crear elementos en el DOM: Escribe un programa que añada un nuevo
elemento li a una lista ul en HTML al hacer clic en un botón.*/ 

//Ejercicio 38
/*Eliminar elementos del DOM: Crea un programa que elimine el último
elemento de una lista ul cuando se haga clic en un botón.*/

// Obtiene los botones, la lista y el input del DOM
const botonAñadir = document.getElementById("botonAñadir");
const botonEliminar = document.getElementById("botonEliminar");
const lista = document.getElementById("miLista");
const input = document.getElementById("nuevoElemento");

// Añade un evento de clic al botón para añadir elementos
botonAñadir.addEventListener("click", function() {
    const valor = input.value;

    if (valor.trim() !== "") {
        const nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = valor;
        lista.appendChild(nuevoElemento);
        input.value = ""; // Limpia el input
    } else {
        alert("Por favor, introduce un texto.");
    }
});

// Añade un evento de clic al botón para eliminar el último elemento
botonEliminar.addEventListener("click", function() {
    if (lista.children.length > 0) {
        lista.removeChild(lista.lastElementChild);
    } else {
        alert("No hay más elementos para eliminar.");
    }
});
