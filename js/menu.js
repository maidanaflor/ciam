function loadMenu() {
    const currentYear = new Date().getFullYear();
    
    const headerHTML = `
        <header>
            <div class="whatsapp-bar">
                <a href="https://wa.me/TUNUMERODETELEFONO" class="whatsapp-link" target="_blank" aria-label="Contactar por WhatsApp">
                    <i class="fab fa-whatsapp"></i>
                    <span class="whatsapp-text">Contacto</span>
                </a>
                <a href="https://eurotaller.com.ar/" class="euro" aria-label="Visitar EuroTaller">
                    <img src="pic/eurotaller.jpeg" alt="Logo EuroTaller" class="euro-logo" loading="lazy">
                </a>
            </div>
            
            <nav aria-label="Navegación principal">
                <input type="checkbox" id="check" aria-hidden="true" tabindex="-1">
                <label for="check" class="checkbtn" aria-label="Menú móvil">
                    <i class="fas fa-bars"></i>
                </label>
                <a href="index.html" class="enlace" aria-label="Página de inicio">
                    <img src="pic/ciam.png" alt="Logo CIAM" class="logo" loading="lazy">
                </a>

                <ul class="menu">
                    <li><a href="index.html" id="inicio-link">Inicio</a></li>
                    <li><a href="nosotros.html" id="nosotros-link">Nosotros</a></li>
                    <li><a href="servicios.html" id="servicios-link">Servicios</a></li>
                    <li><a href="repuestos.html" id="repuestos-link">Repuestos</a></li>
                    <li><a href="contacto.html" id="contacto-link">Contacto</a></li>
                </ul>
            </nav>
        </header>
    `;

    const footerHTML = `
        <footer>
            <div class="footer-info">
                <div class="footer-widht about">
                    <h2>Sobre nosotros</h2>
                    <p>Especialistas en mantenimiento preventivo y correctivo de vehículos, con técnicos certificados y tecnología de diagnóstico avanzada.</p>
                    
                    <div class="social-media">
                        <ul>
                            <li><a href="#" aria-label="WhatsApp"><i class="fa-brands fa-whatsapp"></i></a></li>
                            <li><a href="#" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a></li>
                            <li><a href="#" aria-label="Facebook"><i class="fa-brands fa-facebook"></i></a></li>
                        </ul>
                    </div>
                </div>

                <div class="footer-widht link">
                    <h2>Enlaces rápidos</h2>
                    <ul>
                        <li><a href="index.html">Inicio</a></li>
                        <li><a href="nosotros.html">Nosotros</a></li>
                        <li><a href="servicios.html">Servicios</a></li>
                        <li><a href="repuestos.html">Repuestos</a></li>
                        <li><a href="contacto.html">Contacto</a></li>
                    </ul>
                </div>

                <div class="footer-widht contact">
                    <h2>Contacto</h2>
                    <ul class="contact-list">
                        <li>
                            <span><i class="bi bi-geo-alt"></i></span>
                            <p>Av. Remedios de Escalada 1070, Buenos Aires</p>
                        </li>
                        <li>
                            <span><i class="bi bi-envelope-at"></i></span>
                            <p>contacto@ciam.com.ar</p>
                        </li>
                        <li>
                            <span><i class="bi bi-whatsapp"></i></span>
                            <p>11-12345678</p>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="copyright-bar">
                <div class="copyright-container">
                    <p class="copyright-text">
                        &copy; ${currentYear} CIAM Taller Mecánico. Todos los derechos reservados.
                    </p>
                    <div class="separator"></div>
                    <a href="https://flormaidana.com.ar/" target="_blank" class="copyright-icon" aria-label="Sitio web oficial">
                        <i class="bi bi-flower3"></i>
                    </a>
                </div>
            </div>
        </footer>
    `;

    document.body.insertAdjacentHTML('afterbegin', headerHTML);
    document.body.insertAdjacentHTML('beforeend', footerHTML);

    const setActiveLink = () => {
        const currentPath = window.location.pathname.split('/').pop() || 'index.html';
        const links = {
            'index.html': 'inicio-link',
            'nosotros.html': 'nosotros-link',
            'servicios.html': 'servicios-link',
            'repuestos.html': 'repuestos-link',
            'contacto.html': 'contacto-link'
        };

        document.querySelectorAll('nav ul li a').forEach(link => {
            link.classList.remove('active');
            if (link.id === links[currentPath]) {
                link.classList.add('active');
            }
        });
    };

    document.addEventListener('DOMContentLoaded', setActiveLink);
    window.addEventListener('popstate', setActiveLink); // Para cambios en la SPA
}

document.addEventListener('DOMContentLoaded', loadMenu);

document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || 
           (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });
});