/*
===========================================================
PROYECTO  : Portafolio Profesional OuKeiZee
AUTOR     : OuKeiZee
VERSIÓN   : 1.0.3
ARCHIVO   : js/services.js

DESCRIPCIÓN:
Gestiona la interacción de la sección de servicios.

RESPONSABILIDADES

- Abrir paneles de servicio.
- Cerrar paneles.
- Controlar el overlay.
- Evitar múltiples paneles abiertos.

© 2026 OuKeiZee
===========================================================
*/


/* ===================================================== */
/* [01] VARIABLES                                        */
/* ===================================================== */

const serviceCards = document.querySelectorAll(".service-card");
const servicePanels = document.querySelectorAll(".service-panel");
const overlay = document.getElementById("overlay");

const closeButtons = document.querySelectorAll(".service-close");


/* ===================================================== */
/* [02] FUNCIONES                                        */
/* ===================================================== */

/**
 * Cierra todos los paneles.
 */
function closeAllServices() {

    servicePanels.forEach(panel => {

        panel.classList.remove("active");

    });

    if (overlay) {

        overlay.classList.remove("active");

    }

}


/**
 * Abre un panel específico.
 */
function openService(index) {

    closeAllServices();

    if (servicePanels[index]) {

        servicePanels[index].classList.add("active");

    }

    if (overlay) {

        overlay.classList.add("active");

    }

}


/**
 * Registra los eventos.
 */
function registerServiceEvents() {

    serviceCards.forEach((card, index) => {

        card.addEventListener("click", () => {

            openService(index);

        });

    });

    closeButtons.forEach(button => {

        button.addEventListener("click", closeAllServices);

    });

    if (overlay) {

        overlay.addEventListener("click", closeAllServices);

    }

}


/**
 * Inicializa el módulo.
 */
function initializeServices() {

    registerServiceEvents();

}


/* ===================================================== */
/* [03] INICIALIZACIÓN                                   */
/* ===================================================== */

initializeServices();   
