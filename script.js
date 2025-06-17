
        // Fungsi untuk toggle menu aksesibilitas
        document.getElementById('accessibilityBtn').addEventListener('click', function() {
            const menu = document.getElementById('accessibilityMenu');
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            
            menu.classList.toggle('show');
            this.setAttribute('aria-expanded', !isExpanded);
        });
        
        // Fungsi untuk toggle high contrast
        document.getElementById('highContrastBtn').addEventListener('click', function() {
            document.body.classList.toggle('high-contrast');
            
            // Simpan preferensi pengguna di localStorage
            if (document.body.classList.contains('high-contrast')) {
                localStorage.setItem('highContrast', 'enabled');
            } else {
                localStorage.removeItem('highContrast');
            }
        });
        
        // Fungsi untuk toggle ukuran teks
        document.getElementById('textSizeBtn').addEventListener('click', function() {
            document.body.classList.toggle('text-large');
            
            // Simpan preferensi pengguna di localStorage
            if (document.body.classList.contains('text-large')) {
                localStorage.setItem('largeText', 'enabled');
            } else {
                localStorage.removeItem('largeText');
            }
        });
        
        // Fungsi untuk reset semua pengaturan aksesibilitas
        document.getElementById('resetAccessibilityBtn').addEventListener('click', function() {
            document.body.classList.remove('high-contrast', 'text-large');
            localStorage.removeItem('highContrast');
            localStorage.removeItem('largeText');
            document.getElementById('accessibilityMenu').classList.remove('show');
            document.getElementById('accessibilityBtn').setAttribute('aria-expanded', 'false');
        });
        
        // Cek localStorage saat halaman dimuat
        document.addEventListener('DOMContentLoaded', function() {
            if (localStorage.getItem('highContrast') === 'enabled') {
                document.body.classList.add('high-contrast');
            }
            
            if (localStorage.getItem('largeText') === 'enabled') {
                document.body.classList.add('text-large');
            }
            
            // Validasi form
            const form = document.getElementById('contactForm');
            
            form.addEventListener('submit', function(event) {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                
                form.classList.add('was-validated');
            }, false);
            
            // Fokus ke skip link saat tombol Tab ditekan pertama kali
            document.addEventListener('keydown', function(event) {
                if (event.key === 'Tab') {
                    document.querySelector('.skip-link').focus();
                }
            });
        });

        
