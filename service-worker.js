// Define el nombre de la caché
const cacheName = 'mi-aplicacion-cache-v1';

// Lista de archivos que se deben almacenar en caché
const cacheFiles = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icon.png',
  // Agrega aquí otros archivos que desees almacenar en caché
];

// Evento 'install' para realizar la instalación inicial del Service Worker
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(cacheFiles);
    })
  );
});

// Evento 'activate' para limpiar cachés antiguas si es necesario
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(thisCacheName) {
          if (thisCacheName !== cacheName) {
            return caches.delete(thisCacheName);
          }
        })
      );
    })
  );
});

// Evento 'fetch' para interceptar solicitudes de recursos y servir desde la caché
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      // Si el recurso está en caché, devuelve la versión en caché
      if (response) {
        return response;
      }
      // Si no está en caché, realiza la solicitud a la red y guárdala en caché para futuras visitas
      return fetch(event.request).then(function(response) {
        // Comprueba si la respuesta es válida
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }
        const responseToCache = response.clone();
        caches.open(cacheName).then(function(cache) {
          cache.put(event.request, responseToCache);
        });
        return response;
      });
    })
  );
});