const switcher = document.getElementById('theme-switcher');
const body = document.body;

// Check if there is a saved theme preference in local storage
const theme = localStorage.getItem('theme');
if (theme) {
    body.classList.add(theme);
    if (theme === 'dark') {
        switcher.innerHTML = '☼'; // sun symbol in hex
    }
}

switcher.addEventListener('click', () => {
    // Toggle the 'dark' class on the body element
    body.classList.toggle('dark');

    // Save the theme preference to local storage
    const theme = body.classList.contains('dark') ? 'dark' : '';
    localStorage.setItem('theme', theme);

    // Update the button text
    switcher.innerHTML = body.classList.contains('dark') ? '☼' : '☾'; // sun and moon symbols in hex
});
