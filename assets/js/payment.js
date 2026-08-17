/* ==========================================================================
   TRAVAWORK PAYMENT PLACEHOLDER JAVASCRIPT
   Wajib disimpan di: assets/js/payment.js
   ========================================================================== */

function handlePaymentSubmit(event) {
    event.preventDefault();

    const name = document.getElementById('fullname').value;
    const email = document.getElementById('payEmail').value;

    alert("Simulasi Pendaftaran Berhasil!\n\nTerima kasih " + name + ". Akun kamu (" + email + ") telah diaktifkan untuk akses paket Rp999.000.\n\nKamu akan diarahkan ke Dashboard Member Area.");

    localStorage.setItem('travawork_user', email);
    window.location.href = 'dashboard.html';
}

document.addEventListener("DOMContentLoaded", function() {
    console.log("Payment Module Initialized.");
});
