document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('ContactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            const nombre = document.getElementById('Nombre').value.trim();
            const apellido = document.getElementById('Apellido').value.trim();
            const email = document.getElementById('Email').value.trim();
            const telefono = document.getElementById('Telefono').value.trim();
            const mensaje = document.getElementById('Mensaje').value.trim();
            
            if (nombre === '' || apellido === '' || email === '' || telefono === '' || mensaje === '') {
                e.preventDefault();
                alert('Por favor complete todos los campos requeridos');
                return;
            }

            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                e.preventDefault();
                alert('Por favor ingrese un email válido');
                return;
            }

            // Se permite el envío si todo está bien
        });
    }

    // Animación para el botón de WhatsApp
    const whatsappBtn = document.querySelector('.whatsapp-float');
    if (whatsappBtn) {
        whatsappBtn.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1) translateY(-5px)';
        });

        whatsappBtn.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    }
});
