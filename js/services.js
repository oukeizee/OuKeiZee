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
/*
===========================================================
PROYECTO  : OuKeiZee Portfolio
VERSIÓN   : 1.0.4
ARCHIVO   : services.js
===========================================================
*/

const Services = (() => {

    let panel;

    function showPanel(box) {

        const rect = box.getBoundingClientRect();

        const items = box.dataset.items
            .split("|")
            .map(item => `<li>${item}</li>`)
            .join("");

        panel.innerHTML = `
            <h3>${box.dataset.title}</h3>
            <p>Este servicio incluye:</p>
            <ul>${items}</ul>
        `;

        panel.style.display = "block";

        let left = rect.right + 20;

        if (left + 380 > window.innerWidth) {

            left = rect.left - 380;

        }

        panel.style.left = left + "px";
        panel.style.top = rect.top + "px";

    }

    function hidePanel() {

        panel.style.display = "none";

    }

    function initialize() {

        panel = document.getElementById("servicePanel");

        if (!panel) return;

        document.querySelectorAll(".service-box").forEach(box => {

            box.addEventListener("mouseenter", () => {

                showPanel(box);

            });

            box.addEventListener("mouseleave", hidePanel);

        });

    }

    return {

        initialize

    };

})();
