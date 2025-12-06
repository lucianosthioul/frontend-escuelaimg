// Aseguramos que 'form' es un HTMLFormElement
const form = document.getElementById("admisionForm");
const msg = document.getElementById("successMsg");

if (form && msg) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        msg.classList.remove("hidden");
        form.reset();
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