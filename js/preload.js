document.addEventListener('DOMContentLoaded', function() {
    // Espera a que termine la animación (4s) + transición (0.5s)
    setTimeout(() => {
        const preloader = document.querySelector('.preloader');
        preloader.style.opacity = '0';
        
        // Oculta el preloader después de la transición
        setTimeout(() => {
            preloader.style.display = 'none';
            document.querySelector('.content').style.display = 'block';
        }, 500);
    }, 4000);
});