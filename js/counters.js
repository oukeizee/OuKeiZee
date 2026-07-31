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

/*
===========================================================
PROYECTO  : OuKeiZee Portfolio
VERSIÓN   : 1.0.4
ARCHIVO   : counters.js
===========================================================
*/

const Counters = (() => {

    const portfolioData = {
        happyClients: 80,
        projectsDone: 120,
        logosMade: 350,
        yearsExp: 7
    };

    function animateCounter(id, target, suffix = "+") {

        const element = document.getElementById(id);

        if (!element) return;

        let value = 0;

        const step = Math.max(1, Math.ceil(target / 60));

        const timer = setInterval(() => {

            value = Math.min(target, value + step);

            element.textContent = value + suffix;

            if (value >= target) {

                clearInterval(timer);

            }

        }, 25);

    }

    function initialize() {

        const statsPanel = document.querySelector(".stats-panel");

        if (!statsPanel) return;

        const observer = new IntersectionObserver(entries => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) return;

                animateCounter("happyClients", portfolioData.happyClients);
                animateCounter("projectsDone", portfolioData.projectsDone);
                animateCounter("logosMade", portfolioData.logosMade);
                animateCounter("yearsExp", portfolioData.yearsExp);

                observer.disconnect();

            });

        });

        observer.observe(statsPanel);

    }

    return {

        initialize

    };

})();
