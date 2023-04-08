const switcher = document.getElementById('theme-switcher');
const body = document.body;

// Check if there is a saved theme preference in local storage
const theme = localStorage.getItem('theme');
if (theme) {
  body.classList.add(theme);
  switcher.innerHTML = theme === 'dark' ? '☼' : '☾';
}

switcher.addEventListener('click', () => {
  // Toggle the 'dark' class on the body element
  body.classList.toggle('dark');

  // Save the theme preference to local storage
  localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : '');

  // Update the button text
  switcher.innerHTML = body.classList.contains('dark') ? '☼' : '☾';
});