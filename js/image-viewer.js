// Get all image elements with class 'image'
const images = document.querySelectorAll('.image');

// Loop through each image and add an event listener for both click and touchstart
images.forEach(image => {
    image.addEventListener('click', showModal.bind(null, image));
    image.addEventListener('touchstart', showModal.bind(null, image), {
        passive: true
    });
});

function showModal(image, event) {
    // Prevent default behavior for touch events
    if (event && event.type === 'touchstart') {
        event.preventDefault();
    }

    // Create a new modal element
    const modal = document.createElement('div');
    modal.classList.add('modal');

    // Create a new image element
    const modalImage = new Image();
    modalImage.src = image.src;
    modalImage.alt = image.alt;

    // Add the image to the modal
    modal.appendChild(modalImage);

    // Create a close button
    const closeButton = document.createElement('button');
    closeButton.classList.add('close');
    closeButton.innerHTML = '<ion-icon name="close"></ion-icon>';
    closeButton.addEventListener('click', () => closeModal(modal));

    // Add the close button to the modal
    modal.appendChild(closeButton);

    // Add the modal to the DOM
    document.body.appendChild(modal);

    // Add the active class to the modal to show it with transition
    setTimeout(() => {
        modal.classList.add('active');
    }, 0);

    // Add the 'modal-open' class to the body to prevent scrolling in the background
    document.body.classList.add('modal-open');

    // Add event listener for pressing the escape key
    document.addEventListener('keydown', handleKeydown.bind(null, modal));

    // Add event listener for clicking outside of the modal
    modal.addEventListener('click', handleOutsideClick.bind(null, modal));

    // Add event listener for tapping outside of the modal on mobile devices
    document.addEventListener('touchstart', handleOutsideTap.bind(null, modal), {
        passive: true
    });
}

function closeModal(modal) {
    // Remove the modal from the DOM
    modal.remove();

    // Remove the 'modal-open' class from the body to allow scrolling again
    document.body.classList.remove('modal-open');

    // Remove event listeners
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
