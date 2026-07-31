/*
===========================================================
PROYECTO  : Portafolio Profesional OuKeiZee
AUTOR     : OuKeiZee
VERSIÓN   : 1.0.3
ARCHIVO   : js/carousel.js

DESCRIPCIÓN:
Gestiona el funcionamiento del carrusel.

RESPONSABILIDADES

- Avance automático.
- Controles manuales.
- Reinicio del temporizador.
- Pausa al pasar el mouse.

© 2026 OuKeiZee
===========================================================
*/

/*
===========================================================
PROYECTO  : OuKeiZee Portfolio
VERSIÓN   : 1.1.0
ARCHIVO   : carousel.js
===========================================================
*/

const Carousel = (() => {

    let section = null;
    let track = null;
    let cards = [];

    function cacheDOM() {

        section = document.querySelector(".carousel-section");
        track = document.querySelector(".carousel-track");

        if (track) {

            cards = [...track.querySelectorAll(".carousel-card")];

        }

    }

    function validate() {

        return section && track && cards.length > 0;

    }

    function initialize() {

        cacheDOM();

        if (!validate()) {

            console.warn("Carousel: elementos no encontrados.");

            return;

        }

        console.log("Carousel inicializado.");

    }

    return {

        initialize

    };

})();
