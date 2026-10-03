(function () {
  var root = document.documentElement, KEY = 'theme';

  /* ---------- theme ---------- */

  try {
    var saved = localStorage.getItem(KEY);
    if (saved === 'light' || saved === 'dark') root.setAttribute('data-theme', saved);
  } catch (e) {}

  function currentTheme() {
    var explicit = root.getAttribute('data-theme');
    if (explicit === 'light' || explicit === 'dark') return explicit;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function wireThemeToggle() {
    var btn = document.getElementById('theme');
    if (!btn) return;
    btn.addEventListener('click', function () {
      var next = currentTheme() === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem(KEY, next); } catch (e) {}
    });
  }

  /* ---------- self-expiring elements ----------
     Any element with data-until is dropped once that date has passed, so an
     "Upcoming" badge stops claiming an event is still ahead. The value is
     YYYY-MM (expires at the end of that month, for events only known to the
     month) or YYYY-MM-DD (expires at the end of that day). Dates are read in
     the visitor's local time. */

  function expiresAt(value) {
    var m = /^(\d{4})-(\d{2})(?:-(\d{2}))?$/.exec(value || '');
    if (!m) return null;
    var year = +m[1], month = +m[2] - 1, day = m[3] ? +m[3] : null;
    if (month < 0 || month > 11) return null;
    // Start of the following day/month, minus a millisecond.
    var end = day ? new Date(year, month, day + 1) : new Date(year, month + 1, 1);
    var t = end.getTime();
    return isNaN(t) ? null : t - 1;
  }

  function dropExpired() {
    var now = Date.now();
    var nodes = document.querySelectorAll('[data-until]');
    for (var i = 0; i < nodes.length; i++) {
      var deadline = expiresAt(nodes[i].getAttribute('data-until'));
      // A malformed date is left alone rather than silently hiding content.
      if (deadline !== null && now > deadline) nodes[i].remove();
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    wireThemeToggle();
    dropExpired();
  });
})();
