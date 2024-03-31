const switcher = document.getElementById('theme-switcher');
const body = document.body;
const themeSwitcherClickSound = document.getElementById('themeSwitcherClickSound');
themeSwitcherClickSound.volume = 0.4;

// Check for saved theme preference in local storage
const {
    theme
} = localStorage;

if (theme) {
    body.classList.add(theme);
    switcher.innerHTML = theme === 'dark' ? '<ion-icon name="sunny"></ion-icon>' : '<ion-icon name="moon"></ion-icon>';
}

// Check if the device supports touch events
const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;

// Function to toggle the theme
const toggleTheme = () => {
    body.classList.toggle('dark');
    localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : '');
    switcher.innerHTML = body.classList.contains('dark') ? '<ion-icon name="sunny"></ion-icon>' : '<ion-icon name="moon"></ion-icon>';
    themeSwitcherClickSound.play();
};

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
