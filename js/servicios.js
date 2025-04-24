// Agrega este script al final de tu body
document.addEventListener('DOMContentLoaded', function() {
    const botones = document.querySelectorAll('.servicio-boton');
    const globalInfo = document.getElementById('servicio-global-info');
    
    function manejarClick(event) {
      const boton = event.currentTarget;
      const targetId = boton.getAttribute('data-target');
      const info = document.getElementById(targetId);
      
      // Remover activo de todos los botones
      botones.forEach(btn => {
        btn.classList.remove('activo');
      });
      
      // Agregar activo al botón clickeado
      boton.classList.add('activo');
      
      // Comportamiento diferente según tamaño de pantalla
      if (window.innerWidth <= 768) {
        // Pantallas pequeñas: mostrar debajo del item
        
        // Ocultar todos los contenidos primero
        document.querySelectorAll('.servicio-info').forEach(el => {
          el.classList.remove('activo');
        });
        
        // Mostrar el contenido correspondiente
        info.classList.add('activo');
        
        // Ocultar el global si está visible
        globalInfo.classList.remove('activo');
      } else {
        // Pantallas grandes: mostrar en el área global
        
        // Copiar contenido al área global
        globalInfo.innerHTML = info.innerHTML;
        globalInfo.classList.add('activo');
        
        // Asegurarse que los contenidos individuales estén ocultos
        document.querySelectorAll('.servicio-info').forEach(el => {
          el.classList.remove('activo');
        });
      }
    }
    
    // Agregar event listeners
    botones.forEach(boton => {
      boton.addEventListener('click', manejarClick);
    });
    
    // Manejar cambios de tamaño de pantalla
    window.addEventListener('resize', function() {
      const botonActivo = document.querySelector('.servicio-boton.activo');
      if (botonActivo) {
        // Simular click en el botón activo para reajustar la visualización
        botonActivo.click();
      }
    });
    
    // Activar el primer item por defecto en pantallas grandes
    if (window.innerWidth > 768) {
      const primerBoton = document.querySelector('.servicio-boton');
      if (primerBoton) {
        primerBoton.click();
      }
    }
  });