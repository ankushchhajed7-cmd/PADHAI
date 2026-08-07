/* PadhAI service worker - network first, self-updating
   Har update par CACHE ka number badal do: padhai-v5, padhai-v5 ... */
const CACHE = 'padhai-v5';

// Naya SW turant install ho, purane ka intezaar na kare
self.addEventListener('install', e => {
  self.skipWaiting();
});

// Activate hote hi SAARI purani caches mita do
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(names => Promise.all(names.map(n => caches.delete(n))))
      .then(() => self.clients.claim())
  );
});

// Network pehle. Net chale to hamesha taaza file milegi.
// Net na ho to cache se chalega (offline support).
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;

  e.respondWith(
    fetch(e.request)
      .then(res => {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, copy)).catch(() => {});
        return res;
      })
      .catch(() => caches.match(e.request))
  );
});
