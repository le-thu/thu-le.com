document.addEventListener('DOMContentLoaded', () => {
    const switcher = document.getElementById('theme-switcher');
    const themeSwitcherClickSound = document.getElementById('themeSwitcherClickSound');
    if (themeSwitcherClickSound) {
        themeSwitcherClickSound.volume = 0.4;
    }

    function updateThemeIcon(isDark) {
        switcher.innerHTML = isDark ? '<ion-icon name="sunny"></ion-icon>' : '<ion-icon name="moon"></ion-icon>';
    }

    function applyTheme(isDark) {
        if (isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        updateThemeIcon(isDark);
    }

    const storedTheme = localStorage.getItem('theme');
    applyTheme(storedTheme === 'dark');

    function toggleTheme() {
        const isDark = !document.documentElement.classList.contains('dark');
        applyTheme(isDark);
        localStorage.setItem('theme', isDark ? 'dark' : '');

        if (themeSwitcherClickSound) {
            themeSwitcherClickSound.play();
        }

        const currentTheme = isDark ? 'dark' : 'light';
        document.body.classList.add('theme-transition');

        setTimeout(() => {
            document.body.classList.remove('theme-transition');
        }, 400);
    }

    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;

    if (switcher) {
        switcher.addEventListener(isTouchDevice ? 'touchstart' : 'click', toggleTheme, {
            passive: true
        });
    }
});