document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    function showNextItem() {
        items.forEach((item, index) => {
            item.style.transform = `translateX(-${currentIndex * 100}%)`;
        });
        currentIndex = (currentIndex + 1) % totalItems;
    }

    setInterval(showNextItem, 3000); // Cambia de imagen cada 3 segundos
});
