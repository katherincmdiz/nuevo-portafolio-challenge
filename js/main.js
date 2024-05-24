import { esUnMail } from "./validar.js";
import { tiposError, mensajesError } from "./errores.js";

const elementosFormulario = document.querySelectorAll("[required]");
const formulario = document.querySelector("[data-form]");
const botonEnviar = document.getElementById("botonEnviar");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const listaRespuestas = {
        nombre: e.target.elements["nombre"].value,
        email: e.target.elements["email"].value,
        asunto: e.target.elements["asunto"].value,
        mensaje: e.target.elements["mensaje"].value
    };
    localStorage.setItem("contacto", JSON.stringify(listaRespuestas));

    window.location.href = "index.html";
});

elementosFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => verificarCampos(campo));
});

function verificarCampos(campo) {
    const errorDiv = document.getElementById(`error${campo.name.charAt(0).toUpperCase() + campo.name.slice(1)}`);
    let mensaje = "";

    if (campo.validity.valueMissing) {
        mensaje = mensajesError[campo.name].valueMissing;
    } else if (campo.validity.typeMismatch) {
        mensaje = mensajesError[campo.name].typeMismatch;
    } else if (campo.validity.patternMismatch) {
        mensaje = mensajesError[campo.name].patternMismatch;
    } else if (campo.validity.tooShort) {
        mensaje = mensajesError[campo.name].tooShort;
    }

    errorDiv.textContent = mensaje;

    if (campo.name === "email" && !esUnMail(campo.value)) {
        mensaje = "Por favor, introduce una dirección de correo válida.";
        errorDiv.textContent = mensaje;
    }

    campo.setCustomValidity(mensaje);
    verificarFormulario();
}

function verificarFormulario() {
    const todosValidos = Array.from(elementosFormulario).every((campo) => campo.checkValidity());
    botonEnviar.disabled = !todosValidos;
}

verificarFormulario();














