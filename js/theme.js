{
    const STORAGE_KEY = 'theme';
    const root = document.documentElement;

    const effectiveTheme = () => {
        const stored = root.dataset.theme;
        if (stored === 'light' || stored === 'dark') return stored;
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    };

    const updateToggleA11y = (button, theme) => {
        const isDark = theme === 'dark';
        button.setAttribute('aria-pressed', isDark ? 'true' : 'false');
        button.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
    };

    const applyTheme = (theme) => {
        if (theme === 'light' || theme === 'dark') {
            root.dataset.theme = theme;
            root.style.colorScheme = theme;
        } else {
            delete root.dataset.theme;
            root.style.colorScheme = '';
        }
    };

    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved === 'light' || saved === 'dark') {
            root.dataset.theme = saved;
            root.style.colorScheme = saved;
        }
    } catch (e) {}

    document.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll('.theme-toggle').forEach((button) => {
            updateToggleA11y(button, effectiveTheme());
            button.addEventListener('click', () => {
                const next = effectiveTheme() === 'dark' ? 'light' : 'dark';
                window.umami?.track('Theme toggle', { to: next });
                applyTheme(next);
                try { localStorage.setItem(STORAGE_KEY, next); } catch (e) {}
                updateToggleA11y(button, next);
            });
        });
    });
}
