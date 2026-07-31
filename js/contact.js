/*
===========================================================
PROYECTO  : Portafolio Profesional OuKeiZee
AUTOR     : OuKeiZee
VERSIÓN   : 1.0.3
ARCHIVO   : js/contact.js

DESCRIPCIÓN:
Gestiona el formulario de contacto.

RESPONSABILIDADES

- Validar los campos.
- Mostrar mensajes de error.
- Enviar el formulario.
- Reiniciar los campos.

© 2026 OuKeiZee
===========================================================
*/


/* ===================================================== */
/* [01] VARIABLES                                        */
/* ===================================================== */

const contactForm = document.getElementById("contactForm");


/* ===================================================== */
/* [02] FUNCIONES                                        */
/* ===================================================== */

/**
 * Valida un correo electrónico.
 */
function isValidEmail(email) {

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

}


/**
 * Valida el formulario.
 */
function validateForm(formData) {

    if (!formData.get("name").trim()) {

        alert("Ingrese su nombre.");

        return false;

    }

    if (!isValidEmail(formData.get("email"))) {

        alert("Ingrese un correo válido.");

        return false;

    }

    if (!formData.get("message").trim()) {

        alert("Ingrese un mensaje.");

        return false;

    }

    return true;

}


/**
 * Procesa el envío.
 */
function submitContactForm(event) {

    event.preventDefault();

    const formData = new FormData(contactForm);

    if (!validateForm(formData)) {

        return;

    }

    console.log("Formulario enviado");

    console.table({
        Nombre: formData.get("name"),
        Email: formData.get("email"),
        Mensaje: formData.get("message")
    });

    alert("Mensaje enviado correctamente.");

    contactForm.reset();

}


/**
 * Registra eventos.
 */
function registerContactEvents() {

    if (!contactForm) return;

    contactForm.addEventListener(

        "submit",

        submitContactForm

    );

}


/**
 * Inicializa el módulo.
 */
function initializeContactForm() {

    registerContactEvents();

}


/* ===================================================== */
/* [03] INICIALIZACIÓN                                   */
/* ===================================================== */

initializeContactForm();   
