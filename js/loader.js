/*
===========================================================
PROYECTO  : Portafolio Profesional OuKeiZee
AUTOR     : OuKeiZee
VERSIÓN   : 1.0.3
ARCHIVO   : js/loader.js

DESCRIPCIÓN:
Controla la pantalla de carga (Loader) del sitio web.

RESPONSABILIDADES

- Esperar que toda la página cargue.
- Mostrar el loader un tiempo mínimo.
- Aplicar la transición de salida.
- Eliminar el loader del DOM.

© 2026 OuKeiZee
===========================================================
*/


/* ===================================================== */
/* [01] CONFIGURACIÓN                                    */
/* ===================================================== */

/**
 * Tiempo mínimo que el loader permanece visible.
 * (milisegundos)
 */
const LOADER_MIN_TIME = 1800;

/**
 * Duración del efecto fade.
 */
const LOADER_FADE_TIME = 500;


/* ===================================================== */
/* [02] VARIABLES                                        */
/* ===================================================== */

const loaderElement = document.getElementById("loader");


/* ===================================================== */
/* [03] FUNCIONES                                        */
/* ===================================================== */

/**
 * Oculta el loader aplicando un efecto fade.
 */
function hideLoader() {

    if (!loaderElement) return;

    loaderElement.style.opacity = "0";
    loaderElement.style.transition =
        `opacity ${LOADER_FADE_TIME}ms`;

    window.setTimeout(() => {

        loaderElement.remove();

    }, LOADER_FADE_TIME);

}


/**
 * Inicializa el loader.
 */
function initializeLoader() {

    window.addEventListener("load", () => {

        window.setTimeout(() => {

            hideLoader();

        }, LOADER_MIN_TIME);

    });

}


/* ===================================================== */
/* [04] INICIALIZACIÓN                                   */
/* ===================================================== */

initializeLoader();
