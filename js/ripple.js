/*
===========================================================
PROYECTO  : Portafolio Profesional OuKeiZee
AUTOR     : OuKeiZee
VERSIÓN   : 1.0.3
ARCHIVO   : js/ripple.js

DESCRIPCIÓN:
Gestiona el efecto Ripple del sitio.

RESPONSABILIDADES

- Crear el efecto de onda.
- Posicionar el efecto según el clic.
- Eliminar automáticamente el efecto.
- Aplicar el efecto a elementos interactivos.

© 2026 OuKeiZee
===========================================================
*/


/* ===================================================== */
/* [01] VARIABLES                                        */
/* ===================================================== */

const rippleElements = document.querySelectorAll(

    ".btn, .service-card, .portfolio-item"

);


/* ===================================================== */
/* [02] FUNCIONES                                        */
/* ===================================================== */

/**
 * Crea el efecto ripple.
 */
function createRipple(event) {

    const element = event.currentTarget;

    const ripple = document.createElement("span");

    ripple.classList.add("ripple");

    const rect = element.getBoundingClientRect();

    const size = Math.max(rect.width, rect.height);

    ripple.style.width = `${size}px`;
    ripple.style.height = `${size}px`;

    ripple.style.left =
        `${event.clientX - rect.left - size / 2}px`;

    ripple.style.top =
        `${event.clientY - rect.top - size / 2}px`;

    element.appendChild(ripple);

    ripple.addEventListener("animationend", () => {

        ripple.remove();

    });

}


/**
 * Registra los eventos.
 */
function registerRippleEvents() {

    rippleElements.forEach(element => {

        element.style.position = "relative";
        element.style.overflow = "hidden";

        element.addEventListener(

            "click",

            createRipple

        );

    });

}


/**
 * Inicializa el efecto.
 */
function initializeRipple() {

    registerRippleEvents();

}


/* ===================================================== */
/* [03] INICIALIZACIÓN                                   */
/* ===================================================== */

initializeRipple();   
