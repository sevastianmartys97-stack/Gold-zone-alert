GOLD AUTO ZONE V6.3.1 PWA — PRICE LOADING FIX

IMPORTANT FIX:
- Fixed JavaScript bug: runAnalysis() is async again.
- This bug was the reason the app could stay at Loading... forever.
- Added Gold-API as another live-price source.
- Live price sources now race in parallel:
  1) Gold-API
  2) XAUS.com
  3) Biquote
- Existing H1/H4 Auto Zone and M5/M15 Ready Signal remain.
- PWA remains installable.
- Service worker cache version was changed so Chrome loads the fixed code.

UPLOAD/REPLACE:
index.html
manifest.json
sw.js
icon-192.png
icon-512.png

Commit changes, wait about 1 minute, then refresh the app.
If Chrome still shows the old version, close the tab and reopen the GitHub Pages URL.
