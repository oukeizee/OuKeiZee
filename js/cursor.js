/*
===========================================================
PROYECTO  : Portafolio Profesional OuKeiZee
AUTOR     : OuKeiZee
VERSIÓN   : 1.0.3
ARCHIVO   : js/cursor.js

DESCRIPCIÓN:
Gestiona el cursor personalizado del sitio.

RESPONSABILIDADES

- Seguir el movimiento del mouse.
- Animar el cursor principal.
- Animar el cursor secundario.
- Cambiar estado al pasar sobre enlaces.

© 2026 OuKeiZee
===========================================================
*/

/*
===========================================================
PROYECTO  : OuKeiZee Portfolio
VERSIÓN   : 1.0.4
ARCHIVO   : cursor.js
===========================================================
*/

const Cursor = (() => {

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    function updatePosition(event) {

        mouseX = event.clientX;
        mouseY = event.clientY;

    }

    function initialize() {

        document.body.style.cursor = "none";

        document.addEventListener("mousemove", updatePosition);

    }

    function getPosition() {

        return {
            x: mouseX,
            y: mouseY
        };

    }

    return {

        initialize,
        getPosition

    };

})();
