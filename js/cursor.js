/*
===========================================================
PROYECTO  : Portafolio Profesional OuKeiZee
AUTOR     : OuKeiZee
VERSIÓN   : 1.0.3
ARCHIVO   : js/cursor.js

DESCRIPCIÓN:
Gestiona el cursor personalizado del sitio.

RESPONSABILIDADES

- Seguir el movimiento del mouse.
- Animar el cursor principal.
- Animar el cursor secundario.
- Cambiar estado al pasar sobre enlaces.

© 2026 OuKeiZee
===========================================================
*/


/* ===================================================== */
/* [01] VARIABLES                                        */
/* ===================================================== */

const cursor = document.querySelector(".cursor");
const cursorRing = document.querySelector(".cursor-ring");

const interactiveElements = document.querySelectorAll(
    "a, button, .service-card, .portfolio-item"
);


/* ===================================================== */
/* [02] FUNCIONES                                        */
/* ===================================================== */

/**
 * Actualiza la posición del cursor.
 */
function moveCursor(event) {

    if (!cursor || !cursorRing) return;

    const x = event.clientX;
    const y = event.clientY;

    cursor.style.left = `${x}px`;
    cursor.style.top = `${y}px`;

    cursorRing.style.left = `${x}px`;
    cursorRing.style.top = `${y}px`;

}


/**
 * Activa el modo hover.
 */
function activateHover() {

    cursor?.classList.add("hover");
    cursorRing?.classList.add("hover");

}


/**
 * Desactiva el modo hover.
 */
function deactivateHover() {

    cursor?.classList.remove("hover");
    cursorRing?.classList.remove("hover");

}


/**
 * Registra los eventos.
 */
function registerCursorEvents() {

    document.addEventListener(
        "mousemove",
        moveCursor
    );

    interactiveElements.forEach(element => {

        element.addEventListener(
            "mouseenter",
            activateHover
        );

        element.addEventListener(
            "mouseleave",
            deactivateHover
        );

    });

}


/**
 * Inicializa el cursor.
 */
function initializeCursor() {

    registerCursorEvents();

}


/* ===================================================== */
/* [03] INICIALIZACIÓN                                   */
/* ===================================================== */

initializeCursor();
