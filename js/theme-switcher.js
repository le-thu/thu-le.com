const switcher = document.getElementById('theme-switcher');
const themeSwitcherClickSound = document.getElementById('themeSwitcherClickSound');
themeSwitcherClickSound.volume = 0.4;

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

const toggleTheme = () => {
    const isDark = !document.documentElement.classList.contains('dark');
    applyTheme(isDark);
    localStorage.setItem('theme', isDark ? 'dark' : '');
    themeSwitcherClickSound.play();

    const currentTheme = isDark ? 'dark' : 'light';

    if (window.clicky) {
        clicky.log('#theme-switcher', `Theme switched to ${currentTheme}`, 'click');
    }

    document.body.classList.add('theme-transition');

    setTimeout(() => {
        document.body.classList.remove('theme-transition');
    }, 400);
};

const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;

if (isTouchDevice) {
    switcher.addEventListener('touchstart', toggleTheme, {
        passive: true
    });
} else {
    switcher.addEventListener('click', toggleTheme, {
        passive: true
    });
};
