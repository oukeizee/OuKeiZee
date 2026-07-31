/*
===========================================================
PROYECTO  : Portafolio Profesional OuKeiZee
AUTOR     : OuKeiZee
VERSIÓN   : 1.0.3
ARCHIVO   : js/main.js

DESCRIPCIÓN:
Archivo principal del proyecto.

RESPONSABILIDADES

- Inicializar todos los módulos.
- Centralizar el arranque del sitio.
- Ejecutar configuraciones globales.

© 2026 OuKeiZee
===========================================================
*/


/* ===================================================== */
/* [01] INICIALIZACIÓN GLOBAL                            */
/* ===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    console.log("====================================");
    console.log("OuKeiZee Portfolio v1.0.3");
    console.log("Inicializando módulos...");
    console.log("====================================");

    // Loader
    if (typeof initializeLoader === "function") {
        initializeLoader();
    }

    // Tema
    if (typeof initializeTheme === "function") {
        initializeTheme();
    }

    // Navbar
    if (typeof initializeNavbar === "function") {
        initializeNavbar();
    }

    // Carrusel
    if (typeof initializeCarousel === "function") {
        initializeCarousel();
    }

    // Contadores
    if (typeof initializeCounters === "function") {
        initializeCounters();
    }

    // Habilidades
    if (typeof initializeSkills === "function") {
        initializeSkills();
    }

    // Servicios
    if (typeof initializeServices === "function") {
        initializeServices();
    }

    // Cursor
    if (typeof initializeCursor === "function") {
        initializeCursor();
    }

    // Ripple
    if (typeof initializeRipple === "function") {
        initializeRipple();
    }

    // Redes sociales
    if (typeof initializeSocialMenu === "function") {
        initializeSocialMenu();
    }

    // Formulario
    if (typeof initializeContactForm === "function") {
        initializeContactForm();
    }

    console.log("Todos los módulos fueron cargados correctamente.");

    Loader.initialize();
    Skills.initialize();
    Theme.initialize();
    Services.initialize();
    Counters.initialize();
    Cursor.initialize();
    Ripple.initialize();

});
