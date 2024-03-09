document.addEventListener('DOMContentLoaded', () => {
    const tooltipContainer = document.querySelector('.tooltip-container');
    const emailAnchor = tooltipContainer.querySelector('.email');
    const tooltip = tooltipContainer.querySelector('.tooltip');

    tooltipContainer.addEventListener('click', () => {
        const email = emailAnchor.textContent.trim();
        navigator.clipboard.writeText(email).then(() => {
            tooltip.textContent = 'Copied';
            setTimeout(() => {
                tooltip.textContent = 'Copy my email address';
            }, 1200);
        });
    });

    tooltipContainer.addEventListener('touchstart', (event) => {
        event.preventDefault(); // Prevents the click event from firing immediately
        tooltip.style.visibility = 'visible';
    }, {
        passive: true
    });

    tooltipContainer.addEventListener('touchend', () => {
        const email = emailAnchor.textContent.trim();
        navigator.clipboard.writeText(email).then(() => {
            tooltip.textContent = 'Copied';
            setTimeout(() => {
                tooltip.textContent = 'Copy my email address';
            }, 1200);
        });
    }, {
        passive: true
    });
});