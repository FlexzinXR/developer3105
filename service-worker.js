const CACHE = "3105-studio-v17";
const ASSETS = [
  "./", "./index.html", "./styles.css", "./app.js", "./enhancements.js", "./theme-bootstrap.js",
  "./manifest.json", "./manifest-light.json", "./manifest-dark.json", "./icon.svg", "./icon-light-180.png", "./icon-dark-180.png",
  "./icon-192.png", "./icon-512.png", "./icon-maskable-192.png", "./icon-maskable-512.png",
  "./icon-light-192.png", "./icon-light-512.png", "./icon-dark-192.png", "./icon-dark-512.png",
  "./icon-maskable-light-192.png", "./icon-maskable-light-512.png", "./icon-maskable-dark-192.png", "./icon-maskable-dark-512.png"
];
self.addEventListener("install", (event) => event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(ASSETS)).then(() => self.skipWaiting())));
self.addEventListener("activate", (event) => event.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((key) => key.startsWith("3105-studio-") && key !== CACHE).map((key) => caches.delete(key)))).then(() => self.clients.claim())));
self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith(caches.match(event.request).then((cached) => cached || fetch(event.request).then((response) => {
    if (response.ok && new URL(event.request.url).origin === self.location.origin) {
      const copy = response.clone(); caches.open(CACHE).then((cache) => cache.put(event.request, copy));
    }
    return response;
  }).catch(() => caches.match("./index.html"))));
});
