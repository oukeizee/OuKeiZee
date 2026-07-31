/*
===========================================================
PROYECTO  : Portafolio Profesional OuKeiZee
AUTOR     : OuKeiZee
VERSIÓN   : 1.2.0
ARCHIVO   : js/carousel.js

DESCRIPCIÓN:
Gestiona el funcionamiento del carrusel.

RESPONSABILIDADES

- Inicialización del carrusel.
- Caché de elementos del DOM.
- Pausa al pasar el cursor.
- Reanudación automática.
- Estado centralizado del carrusel.

© 2026 OuKeiZee
===========================================================
*/

const Carousel = (() => {

    /*
    ===========================================================
    ESTADO DEL CARRUSEL
    ===========================================================
    */

    const state = {

        section: null,

        track: null,

        cards: [],

        prevBtn: null,

        nextBtn: null,

        paused: false,

        currentIndex: 0,

        animationId: null,

        autoPlaySpeed: 28,

        initialized: false

    };

    /*
    ===========================================================
    CACHE DEL DOM
    ===========================================================
    */

    function cacheDOM() {

        state.section = document.querySelector(".carousel-section");

        state.track = document.querySelector(".carousel-track");

        state.prevBtn = document.querySelector(".carousel-btn.prev");

        state.nextBtn = document.querySelector(".carousel-btn.next");

        if (state.track) {

            state.cards = [
                ...state.track.querySelectorAll(".carousel-card")
            ];

        }

    }

    /*
    ===========================================================
    VALIDACIÓN
    ===========================================================
    */

    function validate() {

        return (
            state.section &&
            state.track &&
            state.cards.length > 0
        );

    }

    /*
    ===========================================================
    PAUSAR
    ===========================================================
    */

    function pause() {

        if (state.paused) return;

        state.paused = true;

        state.track.style.animationPlayState = "paused";

    }

    /*
    ===========================================================
    REANUDAR
    ===========================================================
    */

    function resume() {

        if (!state.paused) return;

        state.paused = false;

        state.track.style.animationPlayState = "running";

    }

    /*
    ===========================================================
    INICIALIZACIÓN
    ===========================================================
    */

    function initialize() {

        if (state.initialized) return;

        cacheDOM();

        if (!validate()) {

            console.warn("Carousel: elementos no encontrados.");

            return;

        }

        state.section.addEventListener("mouseenter", pause);

        state.section.addEventListener("mouseleave", resume);

        state.initialized = true;

        console.log("Carousel inicializado.");

    }

    /*
    ===========================================================
    API PÚBLICA
    ===========================================================
    */

    return {

        initialize

    };

})();
