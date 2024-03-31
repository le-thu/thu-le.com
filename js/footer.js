'use strict';

function addFooter() {
    const footer = document.createElement('footer');
    footer.innerHTML = `
    <div class="footer-container">
      <p class="footer-text-light">
        &copy; 2024 Thu Le &#8901; Built with good ol' HTML, CSS, and JS
      </p>
    </div>
  `;
    document.body.appendChild(footer);
}

document.addEventListener('DOMContentLoaded', addFooter);
