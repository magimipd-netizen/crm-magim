// Service Worker de CRM MAGIM
// Permite que la app funcione sin conexión y se pueda instalar en el teléfono.

const CACHE = 'crm-magim-v12';

// Archivos propios de la app (se guardan para abrir sin conexión).
const ARCHIVOS = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './icon-maskable-512.png'
];

// Al instalar: guardar los archivos esenciales en caché.
self.addEventListener('install', evento => {
  evento.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(ARCHIVOS)).catch(()=>{})
  );
  self.skipWaiting();
});

// Al activar: limpiar versiones antiguas de la caché.
self.addEventListener('activate', evento => {
  evento.waitUntil(
    caches.keys().then(claves =>
      Promise.all(claves.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', evento => {
  const req = evento.request;
  if(req.method !== 'GET'){ return; }

  const url = new URL(req.url);
  const esMismoOrigen = url.origin === self.location.origin;

  if(esMismoOrigen){
    // Archivos propios de la app: CACHÉ PRIMERO (abre instantáneo y sin internet).
    evento.respondWith(
      caches.match(req).then(cacheado => {
        if(cacheado) return cacheado;
        return fetch(req).then(resp => {
          const copia = resp.clone();
          caches.open(CACHE).then(cache => { try{ cache.put(req, copia); }catch(e){} });
          return resp;
        }).catch(() => caches.match('./index.html'));
      })
    );
  } else {
    // Recursos externos (fuentes, mapas, librerías): RED PRIMERO, con respaldo a caché.
    evento.respondWith(
      fetch(req).then(resp => {
        const copia = resp.clone();
        caches.open(CACHE).then(cache => { try{ cache.put(req, copia); }catch(e){} });
        return resp;
      }).catch(() => caches.match(req))
    );
  }
});
