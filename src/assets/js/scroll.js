
document.addEventListener('DOMContentLoaded', () => {

    // Referencias a elementos
    const navbar = document.getElementById('navbar');
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const iconHamburger = document.querySelector('.icon-hamburger');
    const iconClose = document.querySelector('.icon-close');

    // Si no hay navbar (ej. página de error), no hacemos nada
    if (!navbar) return;

    // Configuración de Estilos
    // Leemos el estilo inicial (solid o transparent)
    const currentStyle = navbar.getAttribute('data-style') || 'transparent';

    // Clases para el modo SÓLIDO
    const solidClasses = ['bg-white/90', 'backdrop-blur-md', 'text-slate-900', 'shadow-sm', 'py-4', 'border-gray-100'];

    // Clases para el modo TRANSPARENTE
    const transparentClasses = ['bg-transparent', 'text-white', 'py-6', 'border-transparent'];


    // Funcion de Scroll
    function handleScroll() {
        // Si el menú móvil está abierto, no cambiamos colores al hacer scroll
        if (mobileMenu && !mobileMenu.classList.contains('hidden')) return;

        if (window.scrollY > 50) {
            // Bajando: Modo Sólido
            navbar.classList.add(...solidClasses);
            navbar.classList.remove(...transparentClasses);
        } else {
            // Arriba: Modo Transparente (solo si la página no es sólida por defecto)
            if (currentStyle !== 'solid') {
                navbar.classList.add(...transparentClasses);
                navbar.classList.remove(...solidClasses);
            }
        }
    }

    // Activamos el evento scroll solo si la página no es fija (como 'Nosotros' o 'Home')
    window.addEventListener('scroll', handleScroll);


    // Menu Movil
    if (menuBtn && mobileMenu && iconHamburger && iconClose) {

        const toggleMenu = () => {
            const isHidden = mobileMenu.classList.contains('hidden');

            if (isHidden) {
                // Abrir Menu
                mobileMenu.classList.remove('hidden');
                mobileMenu.classList.add('flex');

                // Forzamos la barra a sólido
                navbar.classList.add(...solidClasses);
                navbar.classList.remove(...transparentClasses);


            } else {
                // Cerrar Menu
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('flex');

                // Restauramos el color de la barra según la posición del scroll
                if (window.scrollY <= 50 && currentStyle !== 'solid') {
                    navbar.classList.add(...transparentClasses);
                    navbar.classList.remove(...solidClasses);
                }
                // Si bajamos scroll o es una página sólida, se queda en blanco
            }

            // Alternar iconos (Hamburguesa vs X)
            iconHamburger.classList.toggle('hidden');
            iconClose.classList.toggle('hidden');
        };

        // Evento Click en el botón
        menuBtn.addEventListener('click', toggleMenu);

        // Cerrar menú automáticamente al ir a otra sección
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                // Forzamos cierre
                if (!mobileMenu.classList.contains('hidden')) {
                    toggleMenu();
                }
            });
        });
    }
});