/*
===========================================================
PROYECTO  : Portafolio Profesional OuKeiZee
AUTOR     : OuKeiZee
VERSIÓN   : 1.0.3
ARCHIVO   : js/skills.js

DESCRIPCIÓN:
Gestiona la animación de las barras de habilidades.

RESPONSABILIDADES

- Detectar cuando la sección es visible.
- Animar el ancho de cada barra.
- Ejecutar la animación una sola vez.

© 2026 OuKeiZee
===========================================================
*/


/* ===================================================== */
/* [01] VARIABLES                                        */
/* ===================================================== */

const skillBars = document.querySelectorAll(".skill-progress");


/* ===================================================== */
/* [02] FUNCIONES                                        */
/* ===================================================== */

/**
 * Anima una barra de progreso.
 */
function animateSkillBar(bar) {

    const progress = bar.dataset.progress;

    if (!progress) return;

    bar.style.width = progress + "%";

}


/**
 * Inicializa las barras de habilidades.
 */
function initializeSkills() {

    if (skillBars.length === 0) return;

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            animateSkillBar(entry.target);

            observer.unobserve(entry.target);

        });

    }, {

        threshold: 0.30

    });

    skillBars.forEach(bar => {

        bar.style.width = "0%";

        observer.observe(bar);

    });

}


/* ===================================================== */
/* [03] INICIALIZACIÓN                                   */
/* ===================================================== */

initializeSkills();
