
/*
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Evita la redirección inmediata

            const destino = this.href; // Guarda la URL de destino
            document.body.classList.add('vortex-out'); // Aplica la animación

            // Espera a que termine la animación antes de redirigir
            document.body.addEventListener("animationend", function () {
                window.location.href = destino; 
            }, { once: true }); // Asegura que solo se ejecute una vez
        });
    });
}); 
*/
