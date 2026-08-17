/* ==========================================================================
   TRAVAWORK SSW 1 JAVASCRIPT
   Wajib disimpan di: assets/js/ssw.js
   ========================================================================== */

const sektorData = {
    'kaigo': {
        title: 'Modul SSW 1: Kaigo (Keperawatan Lansia)',
        desc: 'Materi mencakup 290+ istilah khusus keperawatan, simulasi etika komunikasi dengan pasien lansia Jepang, serta terjemahan modul resmi Otsouka/MHLW.'
    },
    'pertanian': {
        title: 'Modul SSW 1: Pertanian (Nogyou)',
        desc: 'Materi mencakup teknik budidaya tanaman hortikultura, penanganan pasca panen, pengelolaan hewan ternak, dan istilah keselamatan alat pertanian.'
    },
    'pengolahan-makanan': {
        title: 'Modul SSW 1: Pengolahan Makanan & Minuman',
        desc: 'Membahas prinsip kebersihan HACCP, keselamatan pengoperasian mesin pabrik, dan kontrol kualitas produk makanan.'
    },
    'restoran': {
        title: 'Modul SSW 1: Restoran & Layanan Kuliner',
        desc: 'Panduan percakapan keigo dengan tamu, etika kebersihan dapur restoran, dan teknik penyajian makanan standar Jepang.'
    },
    'building-cleaning': {
        title: 'Modul SSW 1: Building Cleaning',
        desc: 'Penyelenggaraan kebersihan gedung secara profesional, klasifikasi cairan pembersih, dan prosedur operasional mesin pembersih otomatis.'
    },
    'hotel': {
        title: 'Modul SSW 1: Hotel & Perhotelan',
        desc: 'Pelayanan penerimaan tamu (Front Desk), etika Omotenashi, penataan kamar (Housekeeping), dan penanganan situasi darurat.'
    },
    'manufaktur': {
        title: 'Modul SSW 1: Manufaktur & Industri Pabrik',
        desc: 'Pemahaman gambar teknik, keselamatan kerja pengolahan bahan logam/plastik, serta penerapan budaya 5S di lingkungan industri.'
    },
    'konstruksi': {
        title: 'Modul SSW 1: Konstruksi & Bangunan',
        desc: 'Istilah keselamatan proyek (KYT), teknik pertukangan kayu/besi/pembetonan, dan komunikasi antar teknisi di lapangan.'
    }
};

function openSektor(sektorKey) {
    const detailBox = document.getElementById('sektor-detail-box');
    const titleEl = document.getElementById('sektor-title');
    const descEl = document.getElementById('sektor-desc');

    if (sektorData[sektorKey]) {
        titleEl.textContent = sektorData[sektorKey].title;
        descEl.textContent = sektorData[sektorKey].desc;
        detailBox.style.display = 'block';
        detailBox.scrollIntoView({ behavior: 'smooth' });
    }
}

document.addEventListener("DOMContentLoaded", function() {
    console.log("SSW 1 Module Initialized.");
});
