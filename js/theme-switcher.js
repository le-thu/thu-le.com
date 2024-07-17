const switcher = document.getElementById('theme-switcher');
const themeSwitcherClickSound = document.getElementById('themeSwitcherClickSound');
themeSwitcherClickSound.volume = 0.4;

// Function to update the theme icon
function updateThemeIcon(isDark) {
    switcher.innerHTML = isDark ? '<ion-icon name="sunny"></ion-icon>' : '<ion-icon name="moon"></ion-icon>';
}

// Function to apply theme
function applyTheme(isDark) {
    if (isDark) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
    updateThemeIcon(isDark);
}

// Apply initial theme
const storedTheme = localStorage.getItem('theme');
applyTheme(storedTheme === 'dark');

// Function to toggle the theme
const toggleTheme = () => {
    const isDark = !document.documentElement.classList.contains('dark');
    applyTheme(isDark);
    localStorage.setItem('theme', isDark ? 'dark' : '');
    themeSwitcherClickSound.play();

    // Add transition class to body
    document.body.classList.add('theme-transition');

    // Remove transition class after transition completes
    setTimeout(() => {
        document.body.classList.remove('theme-transition');
    }, 400);
};

// Check if the device supports touch events
const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;

// Add event listeners based on touch support
if (isTouchDevice) {
    switcher.addEventListener('touchstart', toggleTheme, {
        passive: true
    });
} else {
    switcher.addEventListener('click', toggleTheme, {
        passive: true
    });
}
