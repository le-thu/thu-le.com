const images = document.querySelectorAll('.image');

images.forEach(image => {
    image.addEventListener('click', showModal.bind(null, image));
    image.addEventListener('touchstart', showModal.bind(null, image), {
        passive: true
    });
});

function showModal(image, event) {
    if (event && event.type === 'touchstart') {
        event.preventDefault();
    }

    const modal = document.createElement('div');
    modal.classList.add('modal');

    const modalImage = new Image();
    modalImage.src = image.src;
    modalImage.alt = image.alt;

    modal.appendChild(modalImage);

    const closeButton = document.createElement('button');
    closeButton.classList.add('close');
    closeButton.innerHTML = '<ion-icon name="close"></ion-icon>';
    closeButton.addEventListener('click', () => closeModal(modal));

    modal.appendChild(closeButton);

    document.body.appendChild(modal);

    setTimeout(() => {
        modal.classList.add('active');
    }, 0);

    document.body.classList.add('modal-open');

    document.addEventListener('keydown', handleKeydown.bind(null, modal));

    modal.addEventListener('click', handleOutsideClick.bind(null, modal));

    document.addEventListener('touchstart', handleOutsideTap.bind(null, modal), {
        passive: true
    });
}

function closeModal(modal) {
    modal.remove();

    document.body.classList.remove('modal-open');

    document.removeEventListener('keydown', handleKeydown);
    modal.removeEventListener('click', handleOutsideClick);
    document.removeEventListener('touchstart', handleOutsideTap);
}

function handleKeydown(modal, event) {
    if (event.key === 'Escape') {
        closeModal(modal);
    }
}

function handleOutsideClick(modal, event) {
    if (event.target === modal) {
        closeModal(modal);
    }
}

function handleOutsideTap(modal, event) {
    if (!modal.contains(event.target)) {
        closeModal(modal);
    }
}
