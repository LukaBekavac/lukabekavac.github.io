# lukabekavac.github.io

Personal site for Luka Bekavac — live at <https://lukabekavac.github.io>.

## Structure

Hand-written static HTML. No build step, no framework, no external fonts or scripts.

| File | What it is |
| --- | --- |
| `index.html` | The main page: intro, News, Papers, Talks (latest 3), Recommended Readings, Projects, Media & Features, Academic Info |
| `talks/index.html` | Full talks archive, served at `/talks/` |
| `style.css` | Shared stylesheet for both pages |
| `site.js` | Light/dark toggle (remembered in `localStorage`) and self-expiring elements |
| `images/profile.jpg` | Profile photo, square, 720×720 |
| `images/logos/` | Affiliation logos, trimmed of padding and sized to 80px tall |

The repository still carries the [Academic Pages](https://github.com/academicpages/academicpages.github.io)
Jekyll theme it was forked from. That machinery is no longer used by either page; it only
serves `/404.html` and the Atom feed. `_config.yml` remains the source of site metadata for those.

## Editing

- **Add a paper** — copy an existing `<li>` inside `<ul class="pubs">` in `index.html`. Wrap
  your own name in `<span class="me">`, put the 2–3 sentence summary in `<p class="tldr">`,
  and the links in `<div class="refs">` as `DOI` / `arXiv` / `PDF` / `Code`. Only the newest
  three sit outside `<details class="morepubs">`; adding a newer one means moving the oldest
  of those three inside, and bumping the count in the summary text.
- **Add an affiliation** — an `<li>` in `<ul class="affs">` under `#affiliations`, holding one
  `<a class="aff">` with three children: a `<span class="plate">` (the logo `<img>`, or a
  `<span class="initials">` when there is no logo), a `<span class="affname">` and a
  `<span class="affrole">`. The plate is always white in both themes, so dark-on-transparent
  logos and logos with a baked-in white background both stay legible.
- **Tag a paper or project with an affiliation** — the markup exists but nothing uses it yet.
  Add, as the last child of the item, `<div class="tags">` containing one
  `<a class="tag" href="#affiliations"><img src="/images/logos/<name>.png" alt="">Short name</a>`
  per affiliation. The logo is optional; the text label carries the meaning, so an affiliation
  with no logo still works.
- **Add a news item** — an `<li>` in `<ul class="dated">` under `#news`, date in
  `<span class="when">`, body in `<span class="what">`. For something that hasn't happened yet,
  add `<span class="upcoming" data-until="2026-11">Upcoming</span>` (see below).
- **"Upcoming" badges expire by themselves** — any element carrying `data-until` is removed
  once that date has passed, so a badge never claims an event is still ahead. Use `YYYY-MM`
  when you only know the month (it disappears after the last day of that month) or
  `YYYY-MM-DD` for an exact date (it disappears after that day). Dates are read in the
  visitor's local time, and a value that isn't in one of those two shapes is left alone rather
  than hidden. Because the badge disappears on its own, write the surrounding sentence so it
  reads correctly either way — "Talk at the 5th Arcom Study Day", not "Presenting at".
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
