# YourKayqik website

One-page site: open `index.html` in a browser to preview. No build step.

- `index.html` — the page (Armenian text lives here)
- `js/main.js` — English text, example links, language switch
- `css/style.css` — styles and brand colours
- `assets/icon.svg` — favicon / logo icon

## Example sites
The eight examples live in `examples/` and are linked from the cards via `EXAMPLE_LINKS` in `js/main.js`.
`examples/badge.js` adds the small "Order a site like this" badge to each example.

All text, dates, prices and lists in an example come from its mock data file in `examples/data/`
(e.g. `examples/data/wedding.js`). The page itself only holds the design and behaviour.

### Making a real client's site from an example
1. Copy the example page, `render.js` and its data file into a new folder (keep the `data/` subfolder).
2. Edit only the data file: names, dates, places, WhatsApp number, lists.
3. Put the client's photos in `images/<example>/` and point the data file at them (`photo`, `image`, `heroImage`).
4. Remove the `badge.js` line at the bottom of the page.

## Images
- `examples/images/` — photos used in the examples (free Unsplash photos, see `examples/images/CREDITS.md`)
- `assets/examples/` — screenshots of the examples, shown on the cards of the main page.
  Retake them if an example's design changes.

## Publish
Upload the whole folder to any static host, e.g. drag it into https://app.netlify.com/drop,
or push it to GitHub and turn on GitHub Pages.
