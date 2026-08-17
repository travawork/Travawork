/* ==========================================================================
   TRAVAWORK ACADEMY & LMS TABS JAVASCRIPT
   Wajib disimpan di: assets/js/academy.js
   ========================================================================== */

function switchLevel(levelId) {
    // Sembunyikan semua kontainer level
    const contents = document.querySelectorAll('.level-content');
    contents.forEach(content => {
        content.classList.remove('active-content');
    });

    // Matikan semua tombol tab aktif
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

    // Tampilkan level yang dipilih
    const selectedContent = document.getElementById('level-' + levelId);
    if (selectedContent) {
        selectedContent.classList.add('active-content');
    }

    // Aktifkan tombol yang diklik
    event.currentTarget.classList.add('active');
}

document.addEventListener("DOMContentLoaded", function() {
    console.log("Academy & JLPT LMS Module Loaded.");
});
