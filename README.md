# lukabekavac.github.io

Personal site for Luka Bekavac — live at <https://lukabekavac.github.io>.

## Structure

Hand-written static HTML. No build step, no framework, no external fonts or scripts.

| File | What it is |
| --- | --- |
| `index.html` | The main page: intro, News, Papers, Talks (latest 3), Recommended Readings, Projects, Media & Features, Academic Info |
| `talks/index.html` | Full talks archive, served at `/talks/` |
| `style.css` | Shared stylesheet for both pages |
| `theme.js` | Light/dark toggle, remembers the choice in `localStorage` |
| `images/profile.jpg` | Profile photo, square, 720×720 |

The repository still carries the [Academic Pages](https://github.com/academicpages/academicpages.github.io)
Jekyll theme it was forked from. That machinery is no longer used by either page; it only
serves `/404.html` and the Atom feed. `_config.yml` remains the source of site metadata for those.

## Editing

- **Add a paper** — copy an existing `<li>` inside `<ul class="pubs">` in `index.html`. Wrap
  your own name in `<span class="me">`, put the 2–3 sentence summary in `<p class="tldr">`,
  and the links in `<div class="refs">` as `DOI` / `arXiv` / `PDF` / `Code`.
- **Add a news item** — an `<li>` in `<ul class="dated">` under `#news`, date in
  `<span class="when">`, body in `<span class="what">`. Add `<span class="upcoming">Upcoming</span>`
  for something that hasn't happened yet.
- **Add a talk** — add it to `talks/index.html`, newest first. If it is one of the three most
  recent, also add it to the Talks preview in `index.html` and drop the oldest one there.
- **Add a reading** — an `<li>` in `<ul class="readings">`: linked title, `<span class="who">`
  for author and year, `<span class="why">` for why it is worth reading.
- **Add a media feature** — an `<li>` in `<ul class="media">`: outlet and date in
  `<span class="outlet">`, the headline as a link, then a one-line note.
- **Nav bar** — the `<ul>` inside `<nav class="nav">`, kept identical on both pages. Links are
  anchors on the main page (`#papers`) and absolute from the talks page (`/#papers`). Mark the
  current page's link with `class="here"`.
- **Colors** — custom properties on `:root` in `style.css`, with dark-mode overrides below them.

## Running locally

Both pages are static, so no Ruby is needed to preview:

```sh
python3 -m http.server 8000
# then open http://localhost:8000
```

To build the whole site the way GitHub Pages does (only needed if you touch the Jekyll parts,
e.g. the 404 page):

```sh
bundle install
bundle exec jekyll serve --livereload
```

## Deploying

GitHub Pages builds from the default branch automatically. Push and it goes live.
