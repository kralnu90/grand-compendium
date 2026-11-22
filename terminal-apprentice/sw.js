// Terminal Apprentice service worker: lets the game install and play offline.
// Bump CACHE with every release (it carries the version) so updates land.
const CACHE = "ta-1.0.0";
const CORE = ["./", "./index.html", "./manifest.webmanifest", "./icons/icon-192.png", "./icons/icon-512.png", "./icons/favicon.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k.startsWith("ta-") && k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return;
  // version.json is the update check: always ask the network, never keep a copy.
  if (url.pathname.endsWith("/version.json")) return;
  // Network first so new uploads reach players; saved copy when offline.
  e.respondWith(fetch(req, { cache: "no-cache" }).then(res => {
    const copy = res.clone();
    caches.open(CACHE).then(c => c.put(req, copy));
    return res;
  }).catch(() => caches.match(req).then(hit => hit || caches.match("./index.html"))));
});
