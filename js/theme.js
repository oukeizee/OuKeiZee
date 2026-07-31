/*
===========================================================
PROYECTO  : Portafolio Profesional OuKeiZee
AUTOR     : OuKeiZee
VERSIÓN   : 1.0.3
ARCHIVO   : js/theme.js

DESCRIPCIÓN:
Gestiona el cambio entre el tema oscuro y el tema claro.

RESPONSABILIDADES

- Cambiar el tema del sitio.
- Cambiar el icono del botón.
- Centralizar la lógica del Theme Toggle.

© 2026 OuKeiZee
===========================================================
*/

/*
===========================================================
PROYECTO  : OuKeiZee Portfolio
VERSIÓN   : 1.0.4
ARCHIVO   : theme.js
===========================================================
*/

const Theme = (() => {

    function toggleTheme() {

        document.body.classList.toggle("light");

        const icon = document.querySelector("#themeBtn i");

        if (!icon) return;

        if (document.body.classList.contains("light")) {

            icon.className = "fa-solid fa-sun";

        } else {

            icon.className = "fa-solid fa-moon";

        }

    }

    function initialize() {

        const themeBtn = document.getElementById("themeBtn");

        if (!themeBtn) return;

        themeBtn.addEventListener("click", toggleTheme);

    }

    return {

        initialize

    };

})();
