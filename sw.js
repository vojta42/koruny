const CACHE = 'koruny-v2';
const SHELL = ['./', './index.html', './manifest.json', './icon-192.png', './icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

// Kurz se nikdy necachuje (appka si drží poslední hodnotu v localStorage), zbytek cache-first.
self.addEventListener('fetch', e => {
  if (e.request.url.includes('frankfurter')) return;
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
