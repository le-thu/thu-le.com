document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');

    if (carousel) {
        let isDown = false;
        let startX;
        let scrollLeft;

        carousel.addEventListener('mousedown', (e) => {
            isDown = true;
            carousel.style.cursor = 'grabbing'; // Change cursor to indicate dragging
            startX = e.pageX - carousel.offsetLeft;
            scrollLeft = carousel.scrollLeft;
        });

        carousel.addEventListener('mouseleave', () => {
            isDown = false;
            carousel.style.cursor = 'grab'; // Restore cursor on mouse leave
        });

        carousel.addEventListener('mouseup', () => {
            isDown = false;
            carousel.style.cursor = 'grab'; // Restore cursor on mouse up
        });

        carousel.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - carousel.offsetLeft;
            const walk = (x - startX) * 3; // Adjust scrolling sensitivity if needed
            carousel.scrollLeft = scrollLeft - walk;
        });

        carousel.addEventListener('selectstart', (e) => {
            e.preventDefault();
        });
    }
});