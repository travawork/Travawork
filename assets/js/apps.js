/* ==========================================================================
   TRAVAWORK CORE JAVASCRIPT
   FRONT-END PLACEHOLDER: Menangani logika UI dasar & status navigasi
   ========================================================================== */

document.addEventListener("DOMContentLoaded", function() {
    console.log("TRAVAWORK Platform Initialized.");

    // Highlight menu aktif secara otomatis
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        if (link.getAttribute('href') !== '#' && currentPath.includes(link.getAttribute('href'))) {
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        }
    });
});

