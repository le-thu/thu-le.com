document.addEventListener('DOMContentLoaded', () => {
    const tooltipContainer = document.querySelector('.tooltip-container');
    const emailAnchor = tooltipContainer.querySelector('.email');
    const tooltip = tooltipContainer.querySelector('.tooltip');

    const handleInteraction = (event) => {
        if (event.type === 'touchstart') {
            event.preventDefault(); // Prevents the click event from firing immediately
            tooltip.style.visibility = 'visible';
        } else {
            const email = emailAnchor.textContent.trim();
            navigator.clipboard.writeText(email).then(() => {
                tooltip.textContent = 'Copied';
                setTimeout(() => {
                    tooltip.textContent = 'Copy thu@thu-le.com';
                }, 1200);
            });
        }
    };

    tooltipContainer.addEventListener('click', handleInteraction, {
        passive: true,
    });
    tooltipContainer.addEventListener('touchstart', handleInteraction, {
        passive: true,
    });
    tooltipContainer.addEventListener('touchend', handleInteraction, {
        passive: true,
    });
});
