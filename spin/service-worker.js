const CACHE_NAME = 'luckyspin-v1';
const urlsToCache = [
    './',
    './LuckySpin.html',
    './manifest.json',
    './icon-192.png',
    './icon-512.png',
    'https://cdn.tailwindcss.com',
    'https://fonts.googleapis.com/css2?family=Mali:wght@400;600;700&display=swap'
];

// Install service worker and cache files
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('✅ Cache opened');
                return cache.addAll(urlsToCache);
            })
            .catch(err => {
                console.log('❌ Cache failed:', err);
            })
    );
    self.skipWaiting();
});

// Activate and clean old caches
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('🗑️ Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
    self.clients.claim();
});

// Fetch from cache first, then network
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) {
                    return response;
                }
                return fetch(event.request).then(response => {
                    if (!response || response.status !== 200 || response.type !== 'basic') {
                        return response;
                    }
                    const responseToCache = response.clone();
                    caches.open(CACHE_NAME).then(cache => {
                        cache.put(event.request, responseToCache);
                    });
                    return response;
                });
            })
            .catch(() => {
                // Return offline fallback if needed
                return caches.match('./LuckySpin.html');
            })
    );
});
