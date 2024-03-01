const switcher = document.getElementById('theme-switcher');
const body = document.body;
const themeSwitcherClickSound = document.getElementById('themeSwitcherClickSound');
themeSwitcherClickSound.volume = 0.4;

// Check if there is a saved theme preference in local storage
const theme = localStorage.getItem('theme');
if (theme) {
  body.classList.add(theme);
  switcher.innerHTML = theme === 'dark' ? '<ion-icon name="sunny"></ion-icon>' : '<ion-icon name="moon"></ion-icon>';
}

// Check if the device supports touch events
const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;

// Add event listeners based on whether the device supports touch events or not
if (isTouchDevice) {
  switcher.addEventListener('touchstart', toggleTheme, { passive: true });
} else {
  switcher.addEventListener('click', toggleTheme);
}

// Add event listener to play sound when the theme switcher is clicked
switcher.addEventListener('click', function() {
  themeSwitcherClickSound.play();
});

function toggleTheme() {
  // Toggle the 'dark' class on the body element
  body.classList.toggle('dark');

  // Save the theme preference to local storage
  localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : '');

  // Update the button text
  switcher.innerHTML = body.classList.contains('dark') ? '<ion-icon name="sunny"></ion-icon>' : '<ion-icon name="moon"></ion-icon>';
}
