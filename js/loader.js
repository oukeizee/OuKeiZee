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

/*
===========================================================
PROYECTO  : Portafolio Profesional OuKeiZee
AUTOR     : OuKeiZee
VERSIÓN   : 1.0.4
ARCHIVO   : js/loader.js
===========================================================
*/

const Loader = (() => {

    function initialize() {

        window.addEventListener("load", () => {

            setTimeout(() => {

                const loader = document.getElementById("loader");

                if (!loader) return;

                loader.style.opacity = "0";
                loader.style.transition = "opacity .5s";

                setTimeout(() => {

                    loader.remove();

                }, 500);

            }, 1800);

        });

    }

    return {

        initialize

    };

})();
