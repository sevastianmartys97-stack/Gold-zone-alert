const CACHE="gold-zone-pwa-v643-logo-v2";
const SHELL=["./","./index.html","./manifest-gold-v2.json","./gold-icon-192.png","./gold-icon-512.png"];
self.addEventListener("install",e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE).then(c=>c.addAll(SHELL)).catch(()=>{}));});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener("fetch",e=>{const u=new URL(e.request.url);if(u.origin!==self.location.origin){e.respondWith(fetch(e.request));return;}e.respondWith(fetch(e.request).then(r=>{const copy=r.clone();caches.open(CACHE).then(c=>c.put(e.request,copy)).catch(()=>{});return r;}).catch(()=>caches.match(e.request)));});
