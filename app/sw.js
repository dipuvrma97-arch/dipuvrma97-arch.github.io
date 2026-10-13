/* Service worker for the portfolio app: caches the app and all portfolio content for offline use. */
try{importScripts("../content.js")}catch(e){}
const C="dv-app-v1";
const SHELL=["./","index.html","app.js","manifest.json","icon-192.png","icon-512.png","../content.js","../index.html"];
function assets(){
 const a=[],add=p=>{if(p)a.push("../"+p)};
 try{add(SITE.photo);add(SITE.resumeImg);add(SITE.resumeFile);
  PROJECTS.forEach(p=>add(p.img));CERTS.forEach(c=>add(c.img));SEMESTERS.forEach(s=>add(s.img));
  add(INTERN.offerImg);add(INTERN.completionImg)}catch(e){}
 return a}
self.addEventListener("install",e=>{
 e.waitUntil(caches.open(C).then(c=>Promise.allSettled([...SHELL,...assets()].map(u=>c.add(new Request(u,{cache:"reload"}))))).then(()=>self.skipWaiting()))});
self.addEventListener("activate",e=>{
 e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x.startsWith("dv-app-")&&x!==C).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
const store=(r,res)=>{if(res&&res.ok&&res.type==="basic"){const cp=res.clone();caches.open(C).then(c=>c.put(r,cp))}return res};
self.addEventListener("fetch",e=>{
 const r=e.request;if(r.method!=="GET")return;
 const u=new URL(r.url);if(u.origin!==location.origin)return;
 const fresh=r.mode==="navigate"||/\.(js|json|html)$/.test(u.pathname)||u.pathname.endsWith("/");
 if(fresh){
  e.respondWith(fetch(r.url,{cache:"no-cache"}).then(res=>store(r.url,res)).catch(()=>caches.match(r.url,{ignoreSearch:true}).then(m=>m||caches.match("index.html"))));
 }else{
  e.respondWith(caches.match(r.url).then(m=>m||fetch(r.url).then(res=>store(r.url,res))));
 }});
