// src/assets/js/scroll.js

document.addEventListener('DOMContentLoaded', () => {

    // --- 1. REFERENCIAS A ELEMENTOS ---
    const navbar = document.getElementById('navbar');
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const iconHamburger = document.querySelector('.icon-hamburger');
    const iconClose = document.querySelector('.icon-close');

    // Seguridad: Si no hay navbar (ej. página de error), no hacemos nada
    if (!navbar) return;

    // --- 2. CONFIGURACIÓN DE ESTILOS (Tailwind directo) ---
    // Leemos el estilo inicial (solid o transparent)
    const currentStyle = navbar.getAttribute('data-style') || 'transparent';

    // Clases para el modo SÓLIDO (Fondo blanco, texto oscuro, sombra)
    const solidClasses = ['bg-white/90', 'backdrop-blur-md', 'text-slate-900', 'shadow-sm', 'py-4', 'border-gray-100'];

    // Clases para el modo TRANSPARENTE (Fondo invisible, texto blanco)
    const transparentClasses = ['bg-transparent', 'text-white', 'py-6', 'border-transparent'];


    // --- 3. FUNCIÓN DE SCROLL ---
    function handleScroll() {
        // Si el menú móvil está abierto, NO cambiamos colores al hacer scroll
        // (queremos que se mantenga blanco sólido mientras el menú esté visible)
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
    // Aunque sea 'solid', igual escuchamos para casos extremos, pero la lógica de arriba lo controla.
    window.addEventListener('scroll', handleScroll);


    // --- 4. LÓGICA DEL MENÚ MÓVIL ---
    if (menuBtn && mobileMenu && iconHamburger && iconClose) {

        const toggleMenu = () => {
            const isHidden = mobileMenu.classList.contains('hidden');

            if (isHidden) {
                // === ABRIR MENÚ ===
                mobileMenu.classList.remove('hidden');
                mobileMenu.classList.add('flex');

                // Forzamos la barra a BLANCO (Sólido) para que haga juego con el menú
                navbar.classList.add(...solidClasses);
                navbar.classList.remove(...transparentClasses);

                // NOTA: No bloqueamos el scroll del body (overflow) para permitir
                // que el usuario baje si el menú es largo o quiere ver el contenido.

            } else {
                // === CERRAR MENÚ ===
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('flex');

                // Restauramos el color de la barra según la posición del scroll
                if (window.scrollY <= 50 && currentStyle !== 'solid') {
                    // Si estamos arriba del todo y es Home, vuelve a transparente
                    navbar.classList.add(...transparentClasses);
                    navbar.classList.remove(...solidClasses);
                }
                // Si ya bajamos scroll o es una página sólida, se queda en blanco (no hace falta else)
            }

            // Alternar iconos (Hamburguesa vs X)
            iconHamburger.classList.toggle('hidden');
            iconClose.classList.toggle('hidden');
        };

        // Evento Click en el botón
        menuBtn.addEventListener('click', toggleMenu);

        // Evento Click en los enlaces (Cerrar menú automáticamente al ir a otra sección)
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