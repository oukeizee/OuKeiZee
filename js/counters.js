/*
===========================================================
PROYECTO  : Portafolio Profesional OuKeiZee
AUTOR     : OuKeiZee
VERSIÓN   : 1.0.3
ARCHIVO   : js/counters.js

DESCRIPCIÓN:
Gestiona la animación de los contadores numéricos.

RESPONSABILIDADES

- Detectar cuando un contador entra en pantalla.
- Animar el incremento del valor.
- Ejecutar la animación una sola vez.

© 2026 OuKeiZee
===========================================================
*/


/* ===================================================== */
/* [01] VARIABLES                                        */
/* ===================================================== */

const counters = document.querySelectorAll(".counter");

const COUNTER_DURATION = 2000;


/* ===================================================== */
/* [02] FUNCIONES                                        */
/* ===================================================== */

/**
 * Anima un contador.
 */
function animateCounter(counter) {

    const target = Number(counter.dataset.target);

    let current = 0;

    const increment = target / (COUNTER_DURATION / 16);

    const timer = setInterval(() => {

        current += increment;

        if (current >= target) {

            counter.textContent = target;

            clearInterval(timer);

            return;

        }

        counter.textContent = Math.floor(current);

    }, 16);

}


/**
 * Inicializa el observer.
 */
function initializeCounters() {

    if (counters.length === 0) return;

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            animateCounter(entry.target);

            observer.unobserve(entry.target);

        });

    }, {

        threshold: 0.4

    });

    counters.forEach(counter => {

        observer.observe(counter);

    });

}


/* ===================================================== */
/* [03] INICIALIZACIÓN                                   */
/* ===================================================== */

initializeCounters();
