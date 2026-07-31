/*
===========================================================
PROYECTO  : Portafolio Profesional OuKeiZee
AUTOR     : OuKeiZee
VERSIÓN   : 1.0.3
ARCHIVO   : js/ripple.js

DESCRIPCIÓN:
Gestiona el efecto Ripple del sitio.

RESPONSABILIDADES

- Crear el efecto de onda.
- Posicionar el efecto según el clic.
- Eliminar automáticamente el efecto.
- Aplicar el efecto a elementos interactivos.

© 2026 OuKeiZee
===========================================================
*/

/*
===========================================================
PROYECTO  : OuKeiZee Portfolio
VERSIÓN   : 1.0.4
ARCHIVO   : ripple.js
===========================================================
*/

const Ripple = (() => {

    function spawnRipple() {

        const position = Cursor.getPosition();

        const ripple = document.createElement("div");

        ripple.className = "ripple";

        ripple.style.left = position.x + "px";
        ripple.style.top = position.y + "px";

        document.body.appendChild(ripple);

        setTimeout(() => {

            ripple.remove();

        }, 1200);

    }

    function initialize() {

        setInterval(spawnRipple, 120);

    }

    return {

        initialize

    };

})();
