document.addEventListener('DOMContentLoaded', function() {
  const botones = document.querySelectorAll('.servicio-boton');
  const globalInfo = document.getElementById('servicio-global-info');
  
  function manejarClick(event) {
    const boton = event.currentTarget;
    const targetId = boton.getAttribute('data-target');
    const info = document.getElementById(targetId);
    const esMobile = window.innerWidth <= 768;
    
    // Verificar si el botón ya está activo (segundo click en móvil)
    if (boton.classList.contains('activo') && esMobile) {
      boton.classList.remove('activo');
      info.classList.remove('activo');
      return;
    }
    
    // Desactivar todos los botones
    botones.forEach(btn => {
      btn.classList.remove('activo');
    });
    
    // Activar el botón clickeado
    boton.classList.add('activo');
    
    if (esMobile) {
      // Versión móvil
      document.querySelectorAll('.servicio-info').forEach(el => {
        el.classList.remove('activo');
      });
      info.classList.add('activo');
      globalInfo.classList.remove('activo');
    } else {
      // Versión desktop
      globalInfo.innerHTML = info.innerHTML;
      globalInfo.setAttribute('data-active-service', targetId); // Actualizar el atributo para el fondo
      globalInfo.classList.add('activo');
      
      // Ocultar todos los servicio-info en desktop
      document.querySelectorAll('.servicio-info').forEach(el => {
        el.classList.remove('activo');
      });
    }
  }
  
  // Agregar event listeners a los botones
  botones.forEach(boton => {
    boton.addEventListener('click', manejarClick);
  });
  
  // Manejar redimensionamiento de pantalla
  window.addEventListener('resize', function() {
    const botonActivo = document.querySelector('.servicio-boton.activo');
    if (botonActivo) {
      botonActivo.click(); // Simular click para reajustar la visualización
    }
  });
  
  // Inicializar el primer botón como activo en desktop
  if (window.innerWidth > 768) {
    const primerBoton = document.querySelector('.servicio-boton');
    if (primerBoton) {
      primerBoton.click();
    }
  }
});