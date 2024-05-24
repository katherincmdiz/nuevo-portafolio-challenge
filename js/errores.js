export const tiposError = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "tooShort",
    "customError"
];

export const mensajesError = {
    nombre: {
        valueMissing: "El campo nombre no puede estar en blanco.",
        patternMismatch: "El campo nombre debe tener entre 3 y 15 caracteres.",
        tooShort: "El campo nombre debe tener entre 3 y 15 caracteres."
    },
    email: {
        valueMissing: "El campo correo no puede estar en blanco.",
        typeMismatch: "Por favor, introduce una dirección de correo válida.",
        patternMismatch: "Por favor, introduce una dirección de correo válida.",
        tooShort: "El campo correo debe tener entre 3 y 15 caracteres."
    },
    asunto: {
        valueMissing: "El campo asunto no puede estar en blanco.",
        patternMismatch: "El campo asunto debe tener entre 3 y 15 caracteres.",
        tooShort: "El campo asunto debe tener entre 3 y 15 caracteres."
    },
    mensaje: {
        valueMissing: "El campo mensaje no puede estar en blanco.",
        patternMismatch: "El campo mensaje debe tener entre 3 y 15 caracteres.",
        tooShort: "El campo mensaje debe tener entre 3 y 15 caracteres."
    }
};