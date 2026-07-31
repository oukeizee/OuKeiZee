/*
===========================================================
PROYECTO  : Portafolio Profesional OuKeiZee
AUTOR     : OuKeiZee
VERSIÓN   : 1.1.0
ARCHIVO   : js/carousel.js

DESCRIPCIÓN:
Gestiona el funcionamiento del carrusel.

RESPONSABILIDADES

- Inicialización del carrusel.
- Pausa al pasar el cursor.
- Reanudación automática.

© 2026 OuKeiZee
===========================================================
*/

const Carousel = (() => {

    let section = null;
    let track = null;
    let cards = [];

    let paused = false;

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

    function pause() {

        if (paused) return;

        paused = true;

        track.style.animationPlayState = "paused";

    }

    function resume() {

        if (!paused) return;

        paused = false;

        track.style.animationPlayState = "running";

    }

    function initialize() {

        cacheDOM();

        if (!validate()) {

            console.warn("Carousel: elementos no encontrados.");

            return;

        }

        section.addEventListener("mouseenter", pause);

        section.addEventListener("mouseleave", resume);

        console.log("Carousel inicializado.");

    }

    return {

        initialize

    };

})();
