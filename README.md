# Luqi Xu — personal portfolio

A self-contained five-page portfolio: charcoal/dark editorial design, warm gold accents, small readable typography and the original five-column animated achievement timeline. Plain HTML, CSS and vanilla JavaScript; no build step or frameworks.

## Preview locally

From this directory, run:

```bash
python -m http.server 8000
```

Visit http://localhost:8000/ (or open `index.html` directly). `index.html` is the home page.

## Where to edit

- `index.html` — home and featured results.
- `glaze.html` — animated achievement timeline with year/search filters.
- `projects.html` — public projects.
- `experience.html` — AIO Club, Battlecode teams and PyBotball; robotics leadership intentionally omitted.
- `publications.html` — six score previews, full PDF links and YouTube links.
- `assets/data.js` — achievement and project records, in normal readable formatting.
- `assets/site.js` — menu, filters, dynamic cards and subtle scroll animations.
- `styles/site.css` — dark editorial design, compact typography and animation rules.
- `scores/` — the six PDFs, plus `scores/previews/` with their cover images.

## YouTube links

The channel is **https://www.youtube.com/@ILikCoding**. Every page links to it from the footer. The Piano Scores page also has a channel banner.

Two specific public-watch URLs were reconstructed from previously shared YouTube Studio video IDs (live/public accessibility could not be independently checked):

- Mary Had a Little Lamb for Grade 8 — https://www.youtube.com/watch?v=hjUc8WRNJR8
- Star-Spangled Bummer (video previously titled *American Anthem In C-minor*) — https://www.youtube.com/watch?v=VeZC_OWFHjo

For the other four pieces, the site links to a **search of this channel**, not an unverified or invented video URL. If you want each button to open a particular upload directly, replace the corresponding `@ILikCoding/search?query=...` URL in `publications.html` with its `https://www.youtube.com/watch?v=...` URL and change the button text from `SEARCH MY CHANNEL` to `WATCH ON YOUTUBE`.

## Publication notes

This project includes music arrangements of copyrighted compositions. Confirm you have permission before redistributing those PDF scores publicly. The site includes no placeholder videos, private trading-browser details or internal Battlecode code.

Animations respect `prefers-reduced-motion`. The page is fully usable without JavaScript except for the dynamically rendered achievement archive and project cards.
