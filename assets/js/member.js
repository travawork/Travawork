/* ==========================================================================
   TRAVAWORK MEMBER & LOGIN PROTOTYPE JAVASCRIPT
   Wajib disimpan di: assets/js/member.js
   ========================================================================== */

function handleLoginPrototype(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    
    // Simpan email secara lokal untuk penampilan sederhana di Dashboard
    if (email) {
        localStorage.setItem('travawork_user', email);
    }

    // Redirect langsung menuju Dashboard Member Area
    window.location.href = 'dashboard.html';
}

document.addEventListener("DOMContentLoaded", function() {
    const userNameDisplay = document.getElementById('userNameDisplay');
    if (userNameDisplay) {
        const savedUser = localStorage.getItem('travawork_user');
        if (savedUser) {
            userNameDisplay.textContent = savedUser;
        }
    }
});
