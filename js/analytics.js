{
    const track = (name, data) => window.umami?.track(name, data);

    document.addEventListener('click', (e) => {
        const link = e.target.closest('a[href]');
        if (!link) return;

        const page = location.pathname;
        const inReply = link.closest('.page-date');

        if (inReply && link.protocol === 'mailto:') {
            track('Reply', { via: 'Email', page });
        } else if (inReply && link.hostname === 'bsky.app') {
            track('Reply', { via: 'Bluesky', page });
        } else if (link.closest('footer .top-nav-links')) {
            track('Footer link', { link: link.textContent.trim() });
        } else if (link.hostname !== location.hostname) {
            track('Outbound link', { url: link.href, page });
        }
    });
}
