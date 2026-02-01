const CACHE_NAME = 'v1';
self.addEventListener('install', e => e.waitUntil(caches.open(CACHE_NAME).then(c => c.add(['/']))));
self.addEventListener('fetch', e => e.respondWith(fetch(e.request).catch(() => caches.match(e.request))));