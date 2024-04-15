function validarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var asunto = document.getElementById("asunto").value;
    var mensaje = document.getElementById("mensaje").value;

    var valido = true;

    // Validación de nombre
    if (nombre.trim() === "" || nombre.length > 50) {
        document.getElementById("errorNombre").innerHTML = nombre.trim() === "" ? "El campo Nombre no puede estar en blanco." : "El campo Nombre debe tener máximo 50 caracteres.";
        valido = false;
    } else {
        document.getElementById("errorNombre").innerHTML = "";
    }

    // Validación de email
    var emailRegExp = /\S+@\S+\.\S+/;
    if (!emailRegExp.test(email) || email.trim() === "") {
        document.getElementById("errorEmail").innerHTML = email.trim() === "" ? "El campo E-mail no puede estar en blanco." : "Por favor, ingresa una dirección de correo electrónico válida.";
        valido = false;
    } else {
        document.getElementById("errorEmail").innerHTML = "";
    }

    // Validación de asunto
    if (asunto.trim() === "" || asunto.length > 50) {
        document.getElementById("errorAsunto").innerHTML = asunto.trim() === "" ? "El campo Asunto no puede estar en blanco." : "El campo Asunto debe tener máximo 50 caracteres.";
        valido = false;
    } else {
        document.getElementById("errorAsunto").innerHTML = "";
    }

    // Validación de mensaje
    if (mensaje.trim() === "" || mensaje.length > 300) {
        document.getElementById("errorMensaje").innerHTML = mensaje.trim() === "" ? "El campo Mensaje no puede estar en blanco." : "El campo Mensaje debe tener máximo 300 caracteres.";
        valido = false;
    } else {
        document.getElementById("errorMensaje").innerHTML = "";
    }

    // Habilitar el botón de enviar solo si el formulario es válido
    document.getElementById("botonEnviar").disabled = !valido;

    // Si el formulario no es válido, no se envía
    return valido;
}

// Agregar eventos de entrada para realizar la validación en tiempo real
var inputs = document.querySelectorAll('.formcontato__input, .formcontato__textarea');
inputs.forEach(function(input) {
    input.addEventListener('input', function() {
        validarFormulario();
    });
});