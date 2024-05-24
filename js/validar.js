
export function esUnMail(email) {
    const emailRegExp = /\S+@\S+\.\S+/;
    return emailRegExp.test(email);
}










/*export function validarNombre(nombre) {
    if (nombre.trim() === "") {
        document.getElementById("errorNombre").innerHTML = "El campo Nombre no puede estar en blanco.";
        return false;
    } else if (nombre.length > 50) {
        document.getElementById("errorNombre").innerHTML = "El campo Nombre debe tener máximo 50 caracteres.";
        return false;
    } else {
        document.getElementById("errorNombre").innerHTML = "";
        return true;
    }
}

export function esUnMail(email) {
    var emailRegExp = /\S+@\S+\.\S+/;
    if (email.trim() === "") {
        document.getElementById("errorEmail").innerHTML = "El campo E-mail no puede estar en blanco.";
        return false;
    } else if (!emailRegExp.test(email)) {
        document.getElementById("errorEmail").innerHTML = "Por favor, ingresa una dirección de correo electrónico válida.";
        return false;
    } else {
        document.getElementById("errorEmail").innerHTML = "";
        return true;
    }
}

export function validarAsunto(asunto) {
    if (asunto.trim() === "") {
        document.getElementById("errorAsunto").innerHTML = "El campo Asunto no puede estar en blanco.";
        return false;
    } else if (asunto.length > 50) {
        document.getElementById("errorAsunto").innerHTML = "El campo Asunto debe tener máximo 50 caracteres.";
        return false;
    } else {
        document.getElementById("errorAsunto").innerHTML = "";
        return true;
    }
}

export function validarMensaje(mensaje) {
    if (mensaje.trim() === "") {
        document.getElementById("errorMensaje").innerHTML = "El campo Mensaje no puede estar en blanco.";
        return false;
    } else if (mensaje.length > 300) {
        document.getElementById("errorMensaje").innerHTML = "El campo Mensaje debe tener máximo 300 caracteres.";
        return false;
    } else {
        document.getElementById("errorMensaje").innerHTML = "";
        return true;
    }
}
 */   




