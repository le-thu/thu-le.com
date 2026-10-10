Source for [thu-le.com](https://thu-le.com). Plain HTML and CSS with two small scripts. No framework, no build step, no dependencies. Hosted on Cloudflare Pages.

## Run locally

Serve the folder with any static server. Opening `index.html` directly over `file://` will not work because all asset paths are root-relative (`/css/styles.css`).

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Structure

```
index.html        homepage
about.html        about page
now/              Now updates, one page per month plus an index
blog/             blog posts, one HTML file per post, images in blog/images
links.html        links page
blogroll.html     blogs I read
uses.html         tools I use
css/styles.css    the only stylesheet
js/theme.js       light/dark theme toggle
js/collage.js     draggable photo collage on the Now page
fonts/            self-hosted Inter and Bricolage Grotesque (variable woff2)
assets/           favicon, social preview image, about photo
feed.xml          RSS feed, hand-maintained
sitemap.xml       sitemap, hand-maintained
llms.txt          summary of the site for AI crawlers
changelog.md      notable site changes over the years
```

## Good to know

- All colors are CSS custom properties in `:root`, with `light-dark()` for themes. The two `theme-color` meta tags on each page (`#FAFAFA` light, `#1B1B1B` dark) are a hand-maintained copy of `--color-background`.
- Icons are inline SVG, no icon files. `viewBox="0 0 20 20"`, `fill="currentColor"`, sizing in CSS.
- Images are kept at 1600px longest edge, WebP at quality 80, under 500KB.

## License

Code (HTML, CSS, JS) is free to use and adapt. Written content, photos, and other images are mine and not licensed for reuse. Fonts are under their own licenses: [Inter](https://github.com/rsms/inter) and [Bricolage Grotesque](https://github.com/ateliertriay/bricolage), both SIL Open Font License.
