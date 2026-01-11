const CACHE_NAME = 'signage-v1';
const ASSETS = [
  'DigitalSignage.html',
  'manifest.json',
  'app_icon_sw.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
