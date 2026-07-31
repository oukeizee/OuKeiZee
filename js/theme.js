/*
===========================================================
PROYECTO  : Portafolio Profesional OuKeiZee
AUTOR     : OuKeiZee
VERSIÓN   : 1.0.3
ARCHIVO   : js/theme.js

DESCRIPCIÓN:
Gestiona el cambio entre el tema oscuro y el tema claro.

RESPONSABILIDADES

- Cambiar el tema del sitio.
- Cambiar el icono del botón.
- Centralizar la lógica del Theme Toggle.

© 2026 OuKeiZee
===========================================================
*/


/* ===================================================== */
/* [01] VARIABLES                                        */
/* ===================================================== */

const themeButton = document.getElementById("themeBtn");

const THEME_CLASS = "light";


/* ===================================================== */
/* [02] FUNCIONES                                        */
/* ===================================================== */

/**
 * Actualiza el icono según el tema activo.
 */
function updateThemeIcon() {

    if (!themeButton) return;

    const iconElement = themeButton.querySelector("i");

    if (!iconElement) return;

    if (document.body.classList.contains(THEME_CLASS)) {

        iconElement.className = "fa-solid fa-sun";

    } else {

        iconElement.className = "fa-solid fa-moon";

    }

}


/**
 * Cambia entre tema claro y oscuro.
 */
function toggleTheme() {

    document.body.classList.toggle(THEME_CLASS);

    updateThemeIcon();

}


/**
 * Registra los eventos del botón.
 */
function registerThemeEvents() {

    if (!themeButton) return;

    themeButton.addEventListener("click", toggleTheme);

}


/**
 * Inicializa el módulo.
 */
function initializeTheme() {

    updateThemeIcon();

    registerThemeEvents();

}


/* ===================================================== */
/* [03] INICIALIZACIÓN                                   */
/* ===================================================== */

initializeTheme();
