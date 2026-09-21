# lukabekavac.github.io

Personal one-page site for Luka Bekavac — live at <https://lukabekavac.github.io>.

## Structure

The homepage is a single self-contained static file: **`index.html`**. All markup, CSS,
and the (tiny) theme-toggle script live in that one file — no build step, no external
fonts or scripts, no templating. To change the page content, edit `index.html` directly.

Sections, in order: intro, News, Publications, Projects, Media & Features, Academic Info.

The repository still carries the [Academic Pages](https://github.com/academicpages/academicpages.github.io)
Jekyll theme it was forked from. That machinery is no longer used by the homepage; it only
serves the `/404.html` page and the Atom feed. `_config.yml` remains the source of site
metadata for those.

## Editing

- **Add a publication** — copy an existing `<li>` inside `<ul class="pubs">`. Wrap your own
  name in `<span class="me">` so it renders emphasized, and put the 2–3 sentence summary in
  `<p class="tldr">`. Links go in `<div class="refs">` as `DOI` / `arXiv` / `PDF` / `Code`.
- **Add a news item** — a `<li>` in `<ul class="news">`, with the date in `<span class="when">`.
- **Add a media feature** — a `<li>` in `<ul class="media">`: outlet and date in
  `<span class="outlet">`, then the headline as a link, then a one-line note.
- **Colors** — defined once as custom properties on `:root`, with dark-mode overrides below.

Images live in `images/`; the profile photo is `images/profile.png`.

## Running locally

Because the homepage is static, you can preview it without Ruby:

```sh
python3 -m http.server 8000
# then open http://localhost:8000
```

To build the whole site the way GitHub Pages does (needed only if you touch the Jekyll
parts, e.g. the 404 page):

```sh
bundle install
bundle exec jekyll serve --livereload
```

## Deploying

GitHub Pages builds from the default branch automatically. Push and it goes live.
