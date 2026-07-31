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

/*
===========================================================
PROYECTO  : OuKeiZee Portfolio
VERSIÓN   : 1.0.4
ARCHIVO   : social.js
===========================================================
*/

const Social = (() => {

    function initialize() {

        const menu = document.querySelector(".facebook-menu");

        if (!menu) return;

        const button = menu.querySelector(".social-main");

        button.addEventListener("click", function (event) {

            event.preventDefault();
            event.stopPropagation();

            menu.classList.toggle("open");

        });

        document.addEventListener("click", function (event) {

            if (!menu.contains(event.target)) {

                menu.classList.remove("open");

            }

        });

    }

    return {

        initialize

    };

})();
