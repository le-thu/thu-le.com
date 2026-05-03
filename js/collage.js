{
    const photos = document.querySelectorAll('.collage-photo');

    if (photos.length) {
        let topZ = 0;
        photos.forEach((p) => {
            const z = parseInt(p.style.zIndex, 10) || 0;
            if (z > topZ) topZ = z;
        });

        photos.forEach((photo) => {
            let offsetX, offsetY;

            photo.addEventListener('pointerdown', (e) => {
                photo.setPointerCapture(e.pointerId);
                photo.classList.add('is-dragging');
                topZ += 1;
                photo.style.zIndex = topZ;
                const rect = photo.getBoundingClientRect();
                offsetX = e.clientX - rect.left;
                offsetY = e.clientY - rect.top;
            });

            photo.addEventListener('pointermove', (e) => {
                if (!photo.hasPointerCapture(e.pointerId)) return;
                const parent = photo.parentElement.getBoundingClientRect();
                photo.style.left = (e.clientX - parent.left - offsetX) + 'px';
                photo.style.top  = (e.clientY - parent.top  - offsetY) + 'px';
            });

            photo.addEventListener('pointerup', () => {
                photo.classList.remove('is-dragging');
            });
        });
    }
}
