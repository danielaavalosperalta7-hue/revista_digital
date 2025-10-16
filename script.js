// Cerrar menú hamburguesa al hacer clic en un enlace
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        const menuCheckbox = document.getElementById('menu');
        if (menuCheckbox) {
            menuCheckbox.checked = false;
        }
    });
});

// Cerrar menú al hacer clic fuera de él
document.addEventListener('click', (e) => {
    const menu = document.getElementById('menu');
    const navbar = document.querySelector('.navbar');
    const menuLabel = document.querySelector('.menu-label');
    
    if (menu && navbar && menuLabel) {
        if (!navbar.contains(e.target) && !menuLabel.contains(e.target)) {
            menu.checked = false;
        }
    }
});

// Suavizar scroll a anclas
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
