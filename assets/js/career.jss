/* ==========================================================================
   TRAVAWORK CAREER GUIDE JAVASCRIPT
   Wajib disimpan di: assets/js/career.js
   ========================================================================== */

document.addEventListener("DOMContentLoaded", function() {
    console.log("Career Guide Module Initialized.");

    // Interaktivitas sederhana scroll smooth untuk jangkar modul
    const moduleLinks = document.querySelectorAll('a[href^="#"]');
    
    moduleLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});
