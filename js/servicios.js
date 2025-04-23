document.addEventListener('DOMContentLoaded', function() {
    const primerBoton = document.querySelector('.servicio-boton.activo');
    if (primerBoton) {
        const targetId = primerBoton.getAttribute('data-target');
        const targetInfo = document.getElementById(targetId);
        const infoContainer = document.querySelector('.servicio-info-container');
        
        if (targetInfo && infoContainer) {
            targetInfo.classList.add('activo');
            infoContainer.classList.add('activo');
        }
    }

    document.querySelectorAll('.servicio-boton').forEach(boton => {
        boton.addEventListener('click', function() {
            document.querySelectorAll('.servicio-boton').forEach(btn => {
                btn.classList.remove('activo');
            });
            
            this.classList.add('activo');
            
            const targetId = this.getAttribute('data-target');
            const infoContainer = document.querySelector('.servicio-info-container');
            const allInfos = document.querySelectorAll('.servicio-info');
            
            allInfos.forEach(info => info.classList.remove('activo'));
            const targetInfo = document.getElementById(targetId);
            if (targetInfo) {
                targetInfo.classList.add('activo');
                infoContainer.classList.add('activo');
            }
        });
    });
});