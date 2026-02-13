// --- 1. Fitur Dark Mode ---
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    // Tambah/Hapus class 'dark-mode' pada body
    body.classList.toggle('dark-mode');
    
    // Ganti ikon tombol
    if (body.classList.contains('dark-mode')) {
        themeToggle.textContent = '☀️'; // Jadi Matahari
    } else {
        themeToggle.textContent = '🌙'; // Jadi Bulan
    }
});

// --- 2. Fitur Form Handling (Tanpa Reload) ---
const contactForm = document.getElementById('contactForm');
const messageDiv = document.getElementById('form-message');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Mencegah halaman reload

    // Ambil nama dari input
    const nameInput = document.getElementById('name').value;

    // Tampilkan pesan sukses
    messageDiv.textContent = `Halo ${nameInput}, pesan Anda berhasil terkirim!`;
    
    // Kosongkan form setelah kirim
    contactForm.reset();

    // Hapus pesan setelah 4 detik (biar rapi)
    setTimeout(() => {
        messageDiv.textContent = '';
    }, 4000);
});

// --- 3. Smooth Scroll (Opsional karena sudah ada di CSS) ---
// Kode ini memastikan scroll halus bekerja di browser lama
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});