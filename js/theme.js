(function () {
    var STORAGE_KEY = 'theme';
    var root = document.documentElement;

    function effectiveTheme() {
        var stored = root.dataset.theme;
        if (stored === 'light' || stored === 'dark') return stored;
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    function applyTheme(theme) {
        if (theme === 'light' || theme === 'dark') {
            root.dataset.theme = theme;
            root.style.colorScheme = theme;
        } else {
            delete root.dataset.theme;
            root.style.colorScheme = '';
        }
        updateThemeColorMeta(theme);
    }

    function updateThemeColorMeta(theme) {
        var override = document.querySelector('meta[name="theme-color"][data-theme-override]');
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
    }

    try {
        var saved = localStorage.getItem(STORAGE_KEY);
        if (saved === 'light' || saved === 'dark') {
            root.dataset.theme = saved;
            root.style.colorScheme = saved;
        }
    } catch (e) {}

    document.addEventListener('DOMContentLoaded', function () {
        updateThemeColorMeta(root.dataset.theme);

        var buttons = document.querySelectorAll('.theme-toggle');
        buttons.forEach(function (button) {
            button.addEventListener('click', function () {
                var next = effectiveTheme() === 'dark' ? 'light' : 'dark';
                applyTheme(next);
                try { localStorage.setItem(STORAGE_KEY, next); } catch (e) {}
            });
        });
    });

})();
