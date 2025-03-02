// Ejemplo de interactividad
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        alert('¡Pronto verás más detalles de este proyecto!');
    });
});


        // Evitar el clic derecho en las imágenes
        document.querySelectorAll('.image-container img').forEach(img => {
            img.addEventListener('contextmenu', (e) => {
                e.preventDefault(); // Evita el menú contextual
            });
        });

        // Evitar que las imágenes sean arrastrables
        document.querySelectorAll('.image-container img').forEach(img => {
            img.setAttribute('draggable', false);
        });