/*
===========================================================
PROYECTO  : Portafolio Profesional OuKeiZee
AUTOR     : OuKeiZee
VERSIÓN   : 1.3.2
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

const Loader = (() => {

    const MINIMUM_TIME = 1800;

    function hideLoader() {

        const loader = document.getElementById("loader");

        if (!loader) return;

        loader.style.transition = "opacity 0.5s ease";
        loader.style.opacity = "0";

        setTimeout(() => {

            loader.remove();

        }, 500);

    }

    function initialize() {

        window.addEventListener("load", () => {

            window.setTimeout(hideLoader, MINIMUM_TIME);

        });

    }

    return {

        initialize

    };

})();
