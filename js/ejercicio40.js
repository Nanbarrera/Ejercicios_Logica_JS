/*Formularios: Escribe un programa que valide que un formulario tiene todos
sus campos llenos antes de enviarlo*/

// Obtiene el formulario y el mensaje
const formulario = document.getElementById("miFormulario");
const mensaje = document.getElementById("mensaje");

// Añade un evento de envío al formulario
formulario.addEventListener("submit", function(event) {
    // Evita el envío del formulario
    event.preventDefault();
    
    // Verifica si todos los campos están llenos
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const telefono = document.getElementById("telefono").value;

    if (nombre === "" || email === "" || telefono === "") {
        mensaje.textContent = "Por favor, completa todos los campos.";
    } else if (!/^\d+$/.test(telefono)) {
        mensaje.textContent = "El teléfono solo debe contener números.";
    } else {
        mensaje.textContent = ""; // Limpia el mensaje de error
        // Aquí puedes agregar la lógica para enviar el formulario
        console.log("Formulario enviado correctamente.");
    }
});
