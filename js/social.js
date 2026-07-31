/*
===========================================================
PROYECTO  : Portafolio Profesional OuKeiZee
AUTOR     : OuKeiZee
VERSIÓN   : 1.0.3
ARCHIVO   : js/social.js

DESCRIPCIÓN:
Gestiona el menú flotante de redes sociales.

RESPONSABILIDADES

- Abrir el menú social.
- Cerrar el menú.
- Cerrar al hacer clic fuera.
- Mantener el código modular.

© 2026 OuKeiZee
===========================================================
*/


/* ===================================================== */
/* [01] VARIABLES                                        */
/* ===================================================== */

const socialButton = document.getElementById("socialBtn");
const socialMenu = document.getElementById("socialMenu");


/* ===================================================== */
/* [02] FUNCIONES                                        */
/* ===================================================== */

/**
 * Abre o cierra el menú.
 */
function toggleSocialMenu(event) {

    event.stopPropagation();

    if (!socialMenu) return;

    socialMenu.classList.toggle("active");

}


/**
 * Cierra el menú.
 */
function closeSocialMenu() {

    if (!socialMenu) return;

    socialMenu.classList.remove("active");

}


/**
 * Registra eventos.
 */
function registerSocialEvents() {

    if (socialButton) {

        socialButton.addEventListener(

            "click",

            toggleSocialMenu

        );

    }

    document.addEventListener(

        "click",

        closeSocialMenu

    );

}


/**
 * Inicializa el módulo.
 */
function initializeSocialMenu() {

    registerSocialEvents();

}


/* ===================================================== */
/* [03] INICIALIZACIÓN                                   */
/* ===================================================== */

initializeSocialMenu();
