// Script básico para funcionalidades adicionales
document.addEventListener('DOMContentLoaded', function() {
    
    // Cerrar menú móvil al hacer clic en un enlace
    const menuCheckbox = document.getElementById('menu');
    const navLinks = document.querySelectorAll('.navbar a');
    
    if (menuCheckbox && navLinks.length > 0) {
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (menuCheckbox.checked) {
                    menuCheckbox.checked = false;
                }
            });
        });
    }
    
    // Smooth scroll para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Añadir clase active al enlace actual
    const currentLocation = window.location.pathname.split('/').pop();
    const menuItems = document.querySelectorAll('.navbar a');
    
    menuItems.forEach(item => {
        if (item.getAttribute('href') === currentLocation) {
            item.classList.add('active');
        }
    });
    
    // Animación de entrada para elementos
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observar elementos que queremos animar
    const animatedElements = document.querySelectorAll('.product, .contenido__container, .contenido2__container, .contenido3__container, .contenido4__container, .contenido5__container');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Prevenir zoom accidental en iOS
    document.addEventListener('gesturestart', function (e) {
        e.preventDefault();
    });
    
    // Log de bienvenida
    console.log('%c¡Bienvenido a LUMINA! ✨', 'color: #c47535; font-size: 20px; font-weight: bold;');
    console.log('%cRevista digital de estilo de vida', 'color: #666; font-size: 14px;');
});

// Función para el botón "Volver al Menú"
function volverAlMenu() {
    window.location.href = 'Inicio.html';
}

// Detectar si el usuario está usando un dispositivo táctil
function isTouchDevice() {
    return (('ontouchstart' in window) ||
            (navigator.maxTouchPoints > 0) ||
            (navigator.msMaxTouchPoints > 0));
}

if (isTouchDevice()) {
    document.body.classList.add('touch-device');
}

// Prevenir el comportamiento de zoom en inputs en iOS
if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
    const viewportMeta = document.querySelector('meta[name="viewport"]');
    if (viewportMeta) {
        viewportMeta.content = 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0';
    }
}
