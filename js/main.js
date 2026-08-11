// Trava Work - Global Interactive Scripts

document.addEventListener('DOMContentLoaded', () => {
    console.log('Trava Work platform loaded successfully.');

    // Highlight menu navigasi aktif secara otomatis
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        if (link.getAttribute('href') && currentPath.includes(link.getAttribute('href'))) {
            link.style.color = '#38bdf8';
            link.style.fontWeight = 'bold';
        }
    });
});

