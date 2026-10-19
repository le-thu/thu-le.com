{
    const clock = document.querySelector('.footer-clock');

    if (clock) {
        const format = new Intl.DateTimeFormat('en-US', {
            timeZone: 'Asia/Ho_Chi_Minh',
            hour: 'numeric',
            minute: '2-digit',
            second: '2-digit',
        });

        const hour = clock.querySelector('[data-clock-hour]');
        const minute = clock.querySelector('[data-clock-minute]');
        const second = clock.querySelector('[data-clock-second]');
        const period = clock.querySelector('[data-clock-period]');

        const tick = () => {
            const parts = Object.fromEntries(
                format.formatToParts(new Date()).map((part) => [part.type, part.value])
            );
            hour.textContent = parts.hour;
            minute.textContent = parts.minute;
            second.textContent = parts.second;
            period.textContent = parts.dayPeriod;
        };

        const scheduleNext = () => {
            setTimeout(() => {
                tick();
                scheduleNext();
            }, 1000 - (Date.now() % 1000));
        };

        tick();
        clock.hidden = false;
        scheduleNext();
    }
}
