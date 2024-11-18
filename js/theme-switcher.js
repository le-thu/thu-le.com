document.addEventListener('DOMContentLoaded', () => {
    function applyTheme(isDark) {
        if (isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }

    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    applyTheme(prefersDarkScheme.matches);

    prefersDarkScheme.addEventListener('change', (e) => {
        applyTheme(e.matches);
    });
});