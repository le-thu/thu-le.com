{
    const track = (name, data) => window.umami?.track(name, data);

    document.addEventListener('click', (e) => {
        const link = e.target.closest('a[href]');
        if (!link) return;

        const page = location.pathname;

        if (link.closest('footer .top-nav-links, footer .footer-directory')) {
            track('Footer link', { link: link.textContent.trim() });
        } else if (link.closest('.top-nav, nav[aria-label="Primary"]')) {
            track('Nav link', { link: link.textContent.trim(), page });
        } else if (link.closest('.post-navigation')) {
            const group = link.closest('.prev-next > div');
            const type = group?.querySelector('.post-nav-label')?.textContent.trim();
            track('Post nav', { type, page });
        } else if (link.hostname !== location.hostname) {
            track('Outbound link', { url: link.href, page });
        }
    });
}
