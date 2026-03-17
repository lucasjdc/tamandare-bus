const CACHE_NAME = 'tamandare-bus-v1';
const urlsToCache = [
    '/src/index.html',
    '/src/css/style.css',
    '/src/js/script.js',
    '/manifest.json'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(resp => resp || fetch(event.request))
    );
});