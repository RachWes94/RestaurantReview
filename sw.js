const cacheName = 'rr-v1';
const itemsToCache = [
  './css/responsive.css',
  './css/styles.css',
  './data/restaurants.json',
  './img/1.jpg',
  './img/2.jpg',
  './img/3.jpg',
  './img/4.jpg',
  './img/5.jpg',
  './img/6.jpg',
  './img/7.jpg',
  './img/8.jpg',
  './img/9.jpg',
  './img/10.jpg',
  './js/dbhelper.js',
  './js/main.js',
  './js/reg_sw.js',
  './js/restaurant_info.js',
  './',
  './index.html',
  './restaurant.html',
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(cacheName)
      .then((cache) => {
        return cache.addAll(itemsToCache);
      })
      .catch((err) => {
        console.log(err)
      })
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((allCacheNames) => {
      return Promise.all(
        allCacheNames
          .filter((name) => name.startsWith('rr-') && name !== cacheName)
          .map((cacheToDelete) => caches.delete(cacheToDelete))
      );
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request)
      .then((response) => {
        if (response) { return response }
        else { return fetch(e.request) }
      })
  );
});
