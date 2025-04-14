document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('ContactForm');
    
    if(contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validación básica
            const nombre = document.getElementById('Nombre').value.trim();
            const email = document.getElementById('Email').value.trim();
            
            if(nombre === '' || email === '') {
                alert('Por favor complete todos los campos requeridos');
                return;
            }
            
            // Validación de email simple
            if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                alert('Por favor ingrese un email válido');
                return;
            }
            
            // Mostrar feedback al usuario
            const submitBtn = contactForm.querySelector('.submit-btn');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Enviando...';
            submitBtn.disabled = true;
            
            // Simular envío (en producción se enviaría realmente)
            setTimeout(() => {
                // Aquí se enviaría el formulario realmente
                // contactForm.submit();
                
                // Feedback visual
                submitBtn.textContent = '¡Enviado!';
                submitBtn.style.backgroundColor = '#4CAF50';
                
                // Reset después de 2 segundos
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.style.backgroundColor = '';
                    submitBtn.disabled = false;
                    contactForm.reset();
                }, 2000);
                
                alert('¡Gracias por tu consulta! Nos pondremos en contacto contigo pronto.');
            }, 1500);
        });
    }
    
    // Animación para el botón de WhatsApp
    const whatsappBtn = document.querySelector('.whatsapp-float');
    if(whatsappBtn) {
        whatsappBtn.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1) translateY(-5px)';
        });
        
        whatsappBtn.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    }
});