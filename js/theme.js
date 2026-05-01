{
    const STORAGE_KEY = 'theme';
    const root = document.documentElement;

    const effectiveTheme = () => {
        const stored = root.dataset.theme;
        if (stored === 'light' || stored === 'dark') return stored;
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    };

    const updateThemeColorMeta = (theme) => {
        let override = document.querySelector('meta[name="theme-color"][data-theme-override]');
        if (theme !== 'light' && theme !== 'dark') {
            if (override) override.remove();
            return;
        }
        if (!override) {
            override = document.createElement('meta');
            override.setAttribute('name', 'theme-color');
            override.setAttribute('data-theme-override', '');
            document.head.appendChild(override);
        }
        override.setAttribute('content', theme === 'dark' ? '#1C1B19' : '#FBF9F9');
    };

    const applyTheme = (theme) => {
        if (theme === 'light' || theme === 'dark') {
            root.dataset.theme = theme;
            root.style.colorScheme = theme;
        } else {
            delete root.dataset.theme;
            root.style.colorScheme = '';
        }
        updateThemeColorMeta(theme);
    };

    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved === 'light' || saved === 'dark') {
            root.dataset.theme = saved;
            root.style.colorScheme = saved;
        }
    } catch (e) {}

    document.addEventListener('DOMContentLoaded', () => {
        updateThemeColorMeta(root.dataset.theme);

        document.querySelectorAll('.theme-toggle').forEach((button) => {
            button.addEventListener('click', () => {
                const next = effectiveTheme() === 'dark' ? 'light' : 'dark';
                applyTheme(next);
                try { localStorage.setItem(STORAGE_KEY, next); } catch (e) {}
            });
        });
    });
}
