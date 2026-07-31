/*
===========================================================
PROYECTO  : Portafolio Profesional OuKeiZee
AUTOR     : OuKeiZee
VERSIÓN   : 1.0.3
ARCHIVO   : js/navbar.js

DESCRIPCIÓN:
Gestiona el comportamiento de la barra de navegación.

RESPONSABILIDADES

- Menú móvil.
- Navbar sticky.
- Enlace activo.
- Cierre automático del menú.

© 2026 OuKeiZee
===========================================================
*/


/* ===================================================== */
/* [01] VARIABLES                                        */
/* ===================================================== */

const navbar = document.querySelector("nav");
const menuButton = document.getElementById("menuBtn");
const navigation = document.getElementById("navLinks");

const navLinks = document.querySelectorAll(".nav-link");


/* ===================================================== */
/* [02] FUNCIONES                                        */
/* ===================================================== */

/**
 * Activa o desactiva el menú móvil.
 */
function toggleMobileMenu() {

    if (!navigation) return;

    navigation.classList.toggle("active");

}


/**
 * Cierra el menú móvil.
 */
function closeMobileMenu() {

    if (!navigation) return;

    navigation.classList.remove("active");

}


/**
 * Activa el efecto sticky del navbar.
 */
function updateNavbarOnScroll() {

    if (!navbar) return;

    if (window.scrollY > 50) {

        navbar.classList.add("sticky");

    } else {

        navbar.classList.remove("sticky");

    }

}


/**
 * Marca el enlace activo.
 */
function updateActiveLink() {

    let currentSection = "";

    document.querySelectorAll("section").forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {

            currentSection = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === `#${currentSection}`
        ) {

            link.classList.add("active");

        }

    });

}


/**
 * Registra eventos.
 */
function registerNavbarEvents() {

    if (menuButton) {

        menuButton.addEventListener(
            "click",
            toggleMobileMenu
        );

    }

    navLinks.forEach(link => {

        link.addEventListener("click", closeMobileMenu);

    });

    window.addEventListener("scroll", () => {

        updateNavbarOnScroll();
        updateActiveLink();

    });

}


/**
 * Inicializa el módulo.
 */
function initializeNavbar() {

    updateNavbarOnScroll();
    updateActiveLink();

    registerNavbarEvents();

}


/* ===================================================== */
/* [03] INICIALIZACIÓN                                   */
/* ===================================================== */

initializeNavbar();
