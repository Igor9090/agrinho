// Funções de JavaScript podem ser adicionadas conforme necessário
document.addEventListener('DOMContentLoaded', function() {
    // Código JavaScript para funcionalidade adicional
});

function toggleMenu() {
    const nav = document.getElementById('nav-menu');
    const button = document.getElementById('btn-menu');
    nav.classList.toggle('active');
    button.classList.toggle('ativar');
}


window.sr = ScrollReveal({reset: true});

sr.reveal('.novas-tecnologias', {
    rotate: {x:0, y: 80, z:0},
    delay: 200,
    duraction: 3000}
    );
