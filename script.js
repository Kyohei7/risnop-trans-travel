document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const mobileNavMenu = document.querySelector('.mobile-nav .menu');

    if (hamburgerMenu && mobileNavMenu) {
        hamburgerMenu.addEventListener('click', function() {
            mobileNavMenu.classList.toggle('open');
        });
    }

    // Tambahkan fungsi smooth scrolling jika diperlukan (untuk navigasi anchor di satu halaman)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });

            // Tutup menu mobile setelah tautan diklik
            if (mobileNavMenu.classList.contains('open')) {
                mobileNavMenu.classList.remove('open');
            }
        });
    });
});