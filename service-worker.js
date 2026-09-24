const VERSION='moderna-pwa-v2';
const ARCHIVOS=['./','./index.html','./manifest.webmanifest','./icon.svg','./ajustes-iniciales.json','./territorio-moderna.kml'];
self.addEventListener('install',evento=>evento.waitUntil(caches.open(VERSION).then(cache=>cache.addAll(ARCHIVOS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',evento=>evento.waitUntil(caches.keys().then(llaves=>Promise.all(llaves.filter(llave=>llave!==VERSION).map(llave=>caches.delete(llave)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',evento=>{
  if(evento.request.method!=='GET')return;
  evento.respondWith(fetch(evento.request).then(respuesta=>{const copia=respuesta.clone();caches.open(VERSION).then(cache=>cache.put(evento.request,copia));return respuesta}).catch(()=>caches.match(evento.request)))
});
