document.addEventListener('DOMContentLoaded', () => {
    const tooltipContainer = document.querySelector('.tooltip-container');
    const emailAnchor = tooltipContainer.querySelector('.email');
    const tooltip = tooltipContainer.querySelector('.tooltip');

    let isTooltipVisible = false;

    const showTooltip = () => {
        tooltip.style.visibility = 'visible';
        isTooltipVisible = true;
    };

    const hideTooltip = () => {
        tooltip.style.visibility = 'hidden';
        isTooltipVisible = false;
    };

    tooltipContainer.addEventListener('click', () => {
        const email = emailAnchor.textContent.trim();
        navigator.clipboard.writeText(email).then(() => {
            tooltip.textContent = 'Copied';
            setTimeout(() => {
                tooltip.textContent = 'Copy my email address';
            }, 1200);
        });
    });

    tooltipContainer.addEventListener('mouseenter', () => {
        showTooltip();
    });

    tooltipContainer.addEventListener('mouseleave', () => {
        hideTooltip();
    });

    tooltipContainer.addEventListener('touchstart', (event) => {
        event.preventDefault(); // Prevents the click event from firing immediately
        if (!isTooltipVisible) {
            showTooltip();
        }
    });

    tooltipContainer.addEventListener('touchend', () => {
        if (isTooltipVisible) {
            const email = emailAnchor.textContent.trim();
            navigator.clipboard.writeText(email).then(() => {
                tooltip.textContent = 'Copied';
                setTimeout(() => {
                    tooltip.textContent = 'Copy my email address';
                }, 1200);
            });

            hideTooltip();
        }
    });
});
