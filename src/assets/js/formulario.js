// Aseguramos que 'form' es un HTMLFormElement, que sí tiene el método .reset()
const form = document.getElementById("admisionForm");
const msg = document.getElementById("successMsg");

if (form && msg) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        // Tu código...
        msg.classList.remove("hidden");
        form.reset(); // ¡Ahora funciona!
    });
}

// Aseguramos que 'contactForm' es un HTMLFormElement
const contactForm = document.getElementById("contactForm");
const contactMsg = document.getElementById("contactMsg");

if (contactForm && contactMsg) {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        contactMsg.classList.remove("hidden");
        contactForm.reset();
    });
}