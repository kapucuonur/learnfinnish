const CACHE_NAME = 'learnfinnish-v2';
const urlsToCache = [
  '/',
  '/index.html',
  '/src/styles/main.css',
  '/src/styles/variables.css',
  '/src/styles/reset.css',
  '/src/main.js',
  '/manifest.json'
];

// Install - Cache'e dosyaları ekle
self.addEventListener('install', (event) => {
  console.log('Service Worker: Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Service Worker: Cache açıldı');
        // Add files one by one to handle errors gracefully
        return Promise.allSettled(
          urlsToCache.map(url =>
            cache.add(url).catch(err => {
              console.warn(`Failed to cache ${url}:`, err);
              return null;
            })
          )
        );
      })
      .then(() => {
        console.log('Service Worker: Dosyalar cache\'e eklendi');
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('Service Worker: Cache hatası:', error);
      })
  );
});

// Activate - Eski cache'leri temizle
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];

  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (!cacheWhitelist.includes(cacheName)) {
            console.log('Eski cache siliniyor:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  // Yeni SW tüm sekmeleri kontrol etsin
  self.clients.claim();
});

// Fetch - Cache'den veya ağdan al
self.addEventListener('fetch', event => {
  // Sadece GET isteklerini cache'le (POST vs. hariç)
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => {
        // Cache'de varsa onu döndür
        if (cachedResponse) {
          return cachedResponse;
        }

        // Yoksa ağdan al ve cache'e ekle (stale-while-revalidate stratejisi)
        return fetch(event.request).then(networkResponse => {
          // Geçersiz yanıtları cache'leme
          if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
            return networkResponse;
          }

          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME)
            .then(cache => {
              cache.put(event.request, responseToCache);
            });

          return networkResponse;
        }).catch(() => {
          // Ağ hatası durumunda offline fallback (isteğe bağlı)
          // return caches.match('/offline.html');
        });
      })
  );
});