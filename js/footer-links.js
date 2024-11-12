class FooterLinks extends HTMLElement {
    constructor() {
        super();

        const currentYear = new Date().getFullYear();

        const footerData = {
            sections: [{

                title: "Browse",
                links: [{
                    text: "Blog",
                    url: "/blog"
                }, {
                    text: "Links",
                    url: "/links"
                }, {
                    text: "Books",
                    url: "/books"
                }, {
                    text: "Uses",
                    url: "/uses"
                }, {
                    text: "Blogroll",
                    url: "/blogroll"
                }]
            }, {
                title: "Index",
                links: [{
                    text: "Home",
                    url: "/"
                }, {
                    text: "About",
                    url: "/about"
                }, {
                    text: "Now",
                    url: "/now"
                }, {
                    text: "Colophon",
                    url: "/colophon"
                }, {
                    text: "Footprint",
                    url: "https://www.websitecarbon.com/website/thu-le-com/",
                    external: true,
                    showIcon: true
                }]
            }, {
                title: "Connect",
                links: [{
                    text: "thu@thu-le.com",
                    url: "mailto:thu@thu-le.com"
                }, {
                    text: "Read.cv",
                    url: "https://tple.read.cv",
                    external: true,
                    showIcon: false
                }, {
                    text: "Posts",
                    url: "https://posts.cv/tple",
                    external: true,
                    showIcon: false
                }, {
                    text: "Literal",
                    url: "https://literal.club/tple",
                    external: true,
                    showIcon: false
                }, {
                    text: "Letterboxd",
                    url: "https://letterboxd.com/tple/",
                    external: true,
                    showIcon: false
                }]
            }],
            copyright: {
                text: `&COPY; ${currentYear} Thu Le <span class="subtle">&sdot;</span> This site`,
                privacyLink: {
                    text: "respects your privacy",
                    url: "https://themarkup.org/blacklight?url=thu-le.com&device=mobile&location=us-ca&force=true",
                    showIcon: true
                }
            }
        };

        this.render(footerData);
    }

    createLink(link) {
        const externalAttrs = link.external ?
            'rel="noopener" target="_blank"' : '';
        const externalIcon = (link.external && link.showIcon) ?
            '<span class="subtle unselectable">&#160;&#8599;</span>' : '';
        return `
            <p class="footer-text secondary">
                <a class="inline-icon" ${externalAttrs} href="${link.url}">
                    ${link.text}${externalIcon}
                </a>
            </p>
        `;
    }

    render(data) {
            this.innerHTML = `
            <div class="footer-container">
                <div class="two-column">
                    ${data.sections.map(section => `
                        <div class="column">
                            <p class="footer-header">
                                ${section.title}
                            </p>
                            ${section.links.map(link => 
                                this.createLink(link)
                            ).join('')}
                        </div>
                    `).join('')}
                </div>
            </div>
            <div class="links-side-by-side">
                <p class="footer-text secondary">
                    ${data.copyright.text} 
                    <a class="inline-icon" rel="noopener" target="_blank" 
                       href="${data.copyright.privacyLink.url}">
                        ${data.copyright.privacyLink.text}
                        <span class="subtle unselectable">&#160;&#8599;</span>
                    </a>
                </p>
            </div>
        `;
    }
}

customElements.define('footer-links', FooterLinks);