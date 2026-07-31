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


/* ===================================================== */
/* [01] VARIABLES                                        */
/* ===================================================== */

const carousel = document.querySelector(".carousel");
const carouselTrack = document.querySelector(".carousel-track");

const previousButton = document.getElementById("carouselPrev");
const nextButton = document.getElementById("carouselNext");

const slides = document.querySelectorAll(".carousel-item");

let currentSlide = 0;

let autoplay = null;

const AUTOPLAY_TIME = 4000;


/* ===================================================== */
/* [02] FUNCIONES                                        */
/* ===================================================== */

/**
 * Muestra un slide.
 */
function showSlide(index) {

    if (!carouselTrack || slides.length === 0) return;

    if (index >= slides.length) {

        currentSlide = 0;

    } else if (index < 0) {

        currentSlide = slides.length - 1;

    } else {

        currentSlide = index;

    }

    carouselTrack.style.transform =
        `translateX(-${currentSlide * 100}%)`;

}


/**
 * Siguiente slide.
 */
function nextSlide() {

    showSlide(currentSlide + 1);

}


/**
 * Slide anterior.
 */
function previousSlide() {

    showSlide(currentSlide - 1);

}


/**
 * Inicia el autoplay.
 */
function startAutoplay() {

    stopAutoplay();

    autoplay = setInterval(() => {

        nextSlide();

    }, AUTOPLAY_TIME);

}


/**
 * Detiene el autoplay.
 */
function stopAutoplay() {

    if (autoplay) {

        clearInterval(autoplay);

    }

}


/**
 * Registra eventos.
 */
function registerCarouselEvents() {

    if (nextButton) {

        nextButton.addEventListener("click", () => {

            nextSlide();
            startAutoplay();

        });

    }

    if (previousButton) {

        previousButton.addEventListener("click", () => {

            previousSlide();
            startAutoplay();

        });

    }

    if (carousel) {

        carousel.addEventListener(
            "mouseenter",
            stopAutoplay
        );

        carousel.addEventListener(
            "mouseleave",
            startAutoplay
        );

    }

}


/**
 * Inicializa el carrusel.
 */
function initializeCarousel() {

    showSlide(0);

    registerCarouselEvents();

    startAutoplay();

}


/* ===================================================== */
/* [03] INICIALIZACIÓN                                   */
/* ===================================================== */

initializeCarousel();
