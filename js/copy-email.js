document.addEventListener('DOMContentLoaded', () => {
    const tooltipContainer = document.querySelector('.tooltip-container');
    const emailAnchor = tooltipContainer.querySelector('.email');
    const emailText = emailAnchor.querySelector('.email-text');
    const tooltip = tooltipContainer.querySelector('.tooltip');
    const icon = emailAnchor.querySelector('ion-icon');

    const handleInteraction = (event) => {
        if (event.type === 'touchstart') {
            event.preventDefault();
            tooltip.style.visibility = 'visible';
        } else {
            const email = emailAnchor.textContent.trim();
            navigator.clipboard.writeText(email).then(() => {
                tooltip.textContent = 'Copied';
                icon.setAttribute('name', 'checkmark-circle');
                setTimeout(() => {
                    tooltip.textContent = 'Copy thu@thu-le.com';
                    icon.setAttribute('name', 'copy-outline');
                }, 1000);

                if (window.clicky) {
                    clicky.event('Email Copy', 'User copied email address', email);
                }
            });
        }
    };

    const adjustTooltipPosition = () => {
        const emailTextWidth = emailText.offsetWidth;
        tooltip.style.left = `calc(50% - ${emailTextWidth / 2}px)`;
    };

    adjustTooltipPosition();

    tooltipContainer.addEventListener('click', handleInteraction, {
        passive: true,
    });
    tooltipContainer.addEventListener('touchstart', handleInteraction, {
        passive: true,
    });
    tooltipContainer.addEventListener('touchend', handleInteraction, {
        passive: true,
    });

    window.addEventListener('resize', adjustTooltipPosition);
});
