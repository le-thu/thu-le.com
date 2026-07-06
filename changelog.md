# Changelog

Notable design, content, accessibility, and infrastructure changes to thu-le.com over the years.

## 2026

- **Jul 5:** Moved the publish date back to the top of blog posts, sitting under the title in the post header, leaving just the reply-by links at the foot of each post.
- **Jun 28:** Optimized every image on the site, re-encoding WebPs at quality 80 and resizing oversized files to a 1600px longest edge. Cut the total image weight from roughly 14MB to 4.7MB, with formats and filenames unchanged.
- **Jun 28:** New body typeface, Inter variable, replacing Source Serif 4. Pinned to optical size 16 and set with Inter's ss03 styleset for rounded quotes and commas. Pairs with Bricolage for headings, the current setup.
- **Jun 27:** New display typeface for headings, Bricolage Grotesque. A single variable file spanning weights 200 to 800, with headings set around 520 and bold around 580.
- **Jun 20:** Added reply-by links to the bottom of blog posts, so a post can open into a conversation.
- **May 3:** Made the Now page photo collage draggable, replacing the photo carousel that had displayed the images before. Photos of recent travels and workspaces can be grabbed and rearranged, with grab and grabbing cursors signaling the interaction.
- **Apr 27:** Brought back a top navigation bar with an inline SVG theme toggle, both gone since late 2024. Theme changes animate over 0.4s, and a first-paint guard suppresses the transition flash on load.
- **Apr 25:** Refined the site-wide entrance animations. Content slides up 1rem and unblurs over 800ms on an eased curve, staggered so the header, each main block, and the footer arrive in sequence.
- **Apr 19:** Settled into the current warm palette: an off-white #FBF9F9 background with near-black text in light mode and the inverse in dark, plus a high-contrast near-black and near-white accent.
- **Feb 16:** Added related links to the bottom of blog posts.
- **Jan 22:** Added robots.txt and llms.txt to guide search crawlers and AI agents.
- **Jan 18:** Switched the prose to smart quotes for typographically correct quotation marks and apostrophes.
- **Jan 17:** Refreshed the themes, dropping the green for a warm neutral palette: a soft grey-white in light mode, warm near-black in dark, and a muted brown accent.

## 2025

- **Dec 14:** Redesigned the blog index and post layout, with dashed-underline separators between entries and dimmed dates.
- **Nov 28:** Added an RSS link to the blog pages, so the feed is discoverable from the writing itself.
- **Nov 9:** Added anchor links to section headings, revealed on hover, so any section can be linked directly.
- **Nov 1:** Wrapped post dates in time elements so they're machine-readable and friendlier to screen readers.
- **Oct 31:** Reworked the markup for meaning. Posts now sit in article elements, the footer is a real navigation landmark, and color-scheme meta tags let light and dark render correctly before the CSS loads.
- **Oct 25:** Added previous and next navigation between blog posts.
- **Oct 9:** Refactored the color tokens onto the CSS light-dark() function, collapsing the separate light and dark blocks into single declarations.
- **Sep 16:** Folded the colophon into the About page, consolidating the site's meta information in one place. The standalone Colophon page was removed.
- **Aug 23:** Removed the blog post "Blind spots," published four months earlier.
- **Aug 3:** Added separate favicons for light and dark mode, so the tab icon suits either system theme.
- **Aug 3:** Added aria labels to the logo links for screen readers.
- **Jul 6:** Removed the Reading page.
- **Jun 14:** Switched the serif from Crimson Pro to Source Serif 4 (the variable cut), which became the site's main face until the 2026 type change.
- **Apr 26:** Published a new blog post, "Blind spots."
- **Apr 18:** Renamed the Books page to Reading, broadening it beyond books.
- **Mar 20:** Shifted the whole palette to green: pale green in light mode (background #EAF3E2, deep-green text) and forest green in dark (#131D0C), with a green accent.
- **Mar 2:** Switched analytics to Umami, a privacy-focused, cookieless tool. The current setup.
- **Feb 15:** Added book-style first-line indentation to blog paragraphs (1.5em), with the opening paragraph left flush.
- **Jan 12:** Removed the Work section index, fully retiring the design portfolio.

## 2024

- **Dec 25:** Removed the manual theme toggle, letting the site follow the system light and dark preference. It returned in April 2026.
- **Dec 1:** Added an RSS feed so readers can subscribe.
- **Nov 18:** Full site redesign. Body text moved to the Crimson Pro serif (regular, italic, and semibold), and links and cards gained hairline borders with a subtle upward lift on hover. Removed the sticky navigation bar, the theme-toggle sound effect, the old avatar, the Footprint link, and the remaining case study pages.
- **Oct 27:** Added a Blogroll page listing the blogs I read and recommend.
- **Oct 20:** Switched analytics to Cabin.
- **Oct 19:** Launched the blog. The site began shifting from a design portfolio to a personal site.
- **Oct 19:** Grouped the remaining case studies under a new /work section.
- **Oct 6:** Added a Books page.
- **Sep 15:** Replaced the icon font library with inline SVG icons, dropping a third-party dependency and sharpening the icons.
- **Sep 5:** Started self-hosting the fonts, dropping the Google Fonts requests for privacy and speed. The typeface at the time was Newsreader (Display for headings, Text for body), kept as-is but served locally.
- **Sep 3:** Removed the image lightbox and the click-to-copy email, two scripts retired in a cleanup.
- **Sep 2:** Added Colophon and Links pages, plus a Letterboxd link.
- **Jul 27:** Published a refreshed About page.
- **Jul 21:** Added a Footprint link in the footer, pointing to the site's carbon report on Website Carbon.
- **Jun 16:** Added a carousel to the Process page for stepping through images.
- **Mar 19:** Introduced a minimal navigation bar, sticky and translucent with a 12px backdrop blur, backed by a full light and dark color-variable system. Switched to horizontal rules for section dividers.
- **Mar 13:** Added a Now page.
- **Mar 3:** Added a Uses page.
- **Feb 29:** Added a switch sound effect that plays when toggling the theme.
- **Feb 24:** Newsreader became the primary typeface across headings and body. The upright cuts joined the italics that had been in use as an accent, making it a full optical-size serif.

## 2023

- **Oct 21:** Switched numerals to tabular figures so numbers line up in columns.
- **Sep 15:** Pared the type system back to Newsreader as the serif over the system sans stack, dropping Inter, Inter Tight, and Space Mono. Sans reverted to the system stack until Newsreader took the body the following February.
- **Sep 7:** Added alt text to all case-study images.
- **Sep 4:** Swapped the monospace from IBM Plex Mono to Space Mono, which lasted only ten days.
- **Sep 3:** Added alt text to the navigation icons.
- **Aug 27:** Added click-to-copy on the email address.
- **Aug 20:** Added the Newsreader serif to the type system, at first only as an italic accent alongside Inter and Inter Tight.
- **Aug 20:** Retired the purple accent for a neutral palette: a warm off-white (#FBF9FB) in light mode and near-black (#141414) in dark, with grey text and monochrome links.
- **Aug 6:** Switched analytics to Clicky.
- **Jul 17:** Added a custom 404 page.
- **Jul 17:** Began winding down the design portfolio, removing the Cryptowatch and Flexible Workflow case studies.
- **Jul 9:** Set the body text in Inter, bringing a reading web font back after the system-stack period.
- **May 16:** Removed the Document Review case study.
- **Apr 9:** Added a full-screen image viewer for case-study images. Clicking an image opens it in a dark 70% overlay with a 200ms fade and rounded corners, and locks background scrolling.
- **Apr 8:** Added IBM Plex Mono for code and monospaced text.
- **Mar 13:** Introduced a light and dark theme switcher, ending the dark-only design. It responds to both tap and click.
- **Mar 1:** Upgraded analytics from Universal Analytics to GA4.
- **Feb 26:** Added a Design Process page.

## 2022

- **Dec 18:** Added a footer to the homepage.
- **Dec 18:** Removed the hello bar as part of the redesign.
- **Nov 23:** First major redesign, rolled out over several weeks. Dropped the Manrope web font for the native system font stack, moved to a light theme (off-white #F8F8F8 background, near-black text, a #7743DB purple accent with a matching text-selection highlight), and centered everything in a single 560px column with large 48px headings. Case studies became clickable blocks with descriptive titles and arrow glyphs.
- **May 4:** Switched the body type from DM Sans to Manrope (weights 500 and 800).

## 2021

- **Dec 11:** New typography pass, moving to DM Sans.

## 2020

- **Sep 12:** A quick visual refresh across the homepage and case studies, with the type moving to Overpass.
- **Jul 12:** Removed Hotjar.
- **May 4:** Added a hello bar, a slim top banner with a mailto link as a quick way to get in touch.
- **Apr 28:** Published the Liquid case study, the first full project page with hero image, personas, wireframes, and process.
- **Apr 27:** Added Hotjar for heatmaps and session recordings.
- **Apr 25:** Changed the type to Manrope for text with PT Serif as a serif accent, replacing the launch pairing.
- **Apr 24:** Switched the whole site to a dark theme: a near-black #161616 background, white text, and a purple #6B48FF accent.
- **Apr 16:** Added Google Analytics.
- **Apr 12:** Connected the custom domain thu-le.com.
- **Apr 9:** Launched the site as a design portfolio, with a short intro, a list of projects (Liquid, Cryptowatch, a COVID-19 contact tracer, and Abody.ai), and social links. Type set in DM Serif Display and Inter.
