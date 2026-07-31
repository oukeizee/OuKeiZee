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

/*
===========================================================
PROYECTO  : OuKeiZee Portfolio
VERSIÓN   : 1.0.4
ARCHIVO   : skills.js
===========================================================
*/

const Skills = (() => {

    function animateSkill(fillId, labelId, target, interval, delay) {

        const fill = document.getElementById(fillId);
        const label = document.getElementById(labelId);

        if (!fill || !label) return;

        function cycle() {

            let value = 0;

            fill.style.width = "0%";
            label.textContent = "0%";

            const timer = setInterval(() => {

                value++;

                fill.style.width = value + "%";
                label.textContent = value + "%";

                if (value >= target) {

                    clearInterval(timer);

                    setTimeout(cycle, 500);

                }

            }, interval);

        }

        setTimeout(cycle, delay);

    }

    function initialize() {

        window.addEventListener("load", () => {

            setTimeout(() => {

                animateSkill("f1", "p1", 95, 10, 0);
                animateSkill("f2", "p2", 95, 20, 400);
                animateSkill("f3", "p3", 95, 32, 900);
                animateSkill("f4", "p4", 75, 18, 1200);
                animateSkill("f5", "p5", 85, 16, 1500);
                animateSkill("f6", "p6", 70, 18, 1800);
                animateSkill("f7", "p7", 45, 24, 2100);

            }, 1900);

        });

    }

    return {

        initialize

    };

})();
