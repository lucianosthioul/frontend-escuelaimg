// src/assets/js/academico.js

    function toggleCard(e) {
    const card = e.currentTarget;
    const extra = card.querySelector('.extra-content');
    if (extra) {
    extra.classList.toggle('hidden');
}
}
