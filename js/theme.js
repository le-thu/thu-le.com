{
    const root = document.documentElement;

    const setTheme = (theme) => {
        root.dataset.theme = theme;
        root.style.colorScheme = theme;
    };

    const currentTheme = () => root.dataset.theme ||
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

    const updateLabel = (button) => {
        const isDark = currentTheme() === 'dark';
        button.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
    };

    try {
        const saved = localStorage.getItem('theme');
        if (saved === 'light' || saved === 'dark') setTheme(saved);
    } catch (e) {}

    document.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll('.theme-toggle').forEach((button) => {
            updateLabel(button);
            button.addEventListener('click', () => {
                const next = currentTheme() === 'dark' ? 'light' : 'dark';
                window.umami?.track('Theme toggle', { to: next });
                setTheme(next);
                try { localStorage.setItem('theme', next); } catch (e) {}
                updateLabel(button);
            });
        });
    });
}
