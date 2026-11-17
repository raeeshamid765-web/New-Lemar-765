/* NEW LEMAR offline cache. Change VERSION whenever index.html changes so phones pick up the update. */
const VERSION='nl-5.2.1';
const FILES=['./','index.html','manifest.webmanifest','icon-192.png','icon-512.png','apple-touch-icon.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(VERSION).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==VERSION).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
  const r=e.request;if(r.method!=='GET')return;
  const u=new URL(r.url);
  if(u.origin===location.origin){
    // app files: cache first (works offline); refresh the cache quietly when online
    e.respondWith(caches.match(r,{ignoreSearch:true}).then(hit=>{
      const net=fetch(r).then(res=>{if(res&&res.ok){const cp=res.clone();caches.open(VERSION).then(c=>c.put(r,cp))}return res}).catch(()=>null);
      return hit||net.then(res=>res||caches.match('index.html'))}));
  }else if(/fonts\.(googleapis|gstatic)\.com$/.test(u.hostname)){
    // fonts: keep a copy for offline use, never block the app
    e.respondWith(caches.open(VERSION).then(c=>c.match(r).then(hit=>hit||fetch(r).then(res=>{c.put(r,res.clone());return res}).catch(()=>new Response('',{status:204})))));
  }
});
