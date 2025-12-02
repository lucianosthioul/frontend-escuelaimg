// src/assets/js/scroll.js

const navbar = document.getElementById('navbar');

// Leemos la configuración que enviamos desde Astro
// Si no encuentra el atributo, asume que es 'transparent' por seguridad
const currentStyle = navbar.getAttribute('data-style') || 'transparent';

// Definimos las listas de clases para mantener el código ordenado
const solidClasses = ['bg-white/90', 'backdrop-blur-md', 'text-slate-900', 'shadow-sm', 'py-4', 'border-gray-100'];
const transparentClasses = ['bg-transparent', 'text-white', 'py-6', 'border-transparent'];

function handleScroll() {
    if (window.scrollY > 50) {
        // BAJANDO: Poner modo sólido
        navbar.classList.add(...solidClasses);
        navbar.classList.remove(...transparentClasses);
    } else {
        // ARRIBA: Poner modo transparente
        navbar.classList.add(...transparentClasses);
        navbar.classList.remove(...solidClasses);
    }
}

// LÓGICA PRINCIPAL:
if (currentStyle === 'solid') {
    // CASO 1: NOTICIAS (Fondo blanco)
    // No hacemos nada. El CSS ya viene con las clases 'solidClasses' puestas desde Astro.
    // No agregamos el eventListener, así que al bajar el scroll el menú NO cambia.
    // (Opcional: Si quieres asegurarte, puedes forzar las clases aquí, pero no es necesario)

} else {
    // CASO 2: HOME (Fondo imagen)
    // Agregamos el detector de scroll para que cambie dinámicamente
    window.addEventListener('scroll', handleScroll);

    // Ejecutamos una vez al inicio por si el usuario recarga la página ya scrolleada
    handleScroll();
}


