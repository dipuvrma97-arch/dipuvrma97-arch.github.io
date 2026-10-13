"use strict";
/* Deepu Verma portfolio app. All content comes from ../content.js (same file as the website). */
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const esc=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const P=p=>p?"../"+p:"";                       /* content.js paths are relative to the site root */
const ext='target="_blank" rel="noopener noreferrer"';
const RM=matchMedia("(prefers-reduced-motion:reduce)").matches;
const store={get(k){try{return localStorage.getItem(k)}catch(e){return null}},set(k,v){try{localStorage.setItem(k,v)}catch(e){}}};
const tick=()=>{if(!RM)try{navigator.vibrate&&navigator.vibrate(8)}catch(e){}};
const standalone=()=>matchMedia("(display-mode: standalone)").matches||navigator.standalone===true;
const isIOS=/iphone|ipad|ipod/i.test(navigator.userAgent)||(navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1);

const IC={
 home:'<path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/><path d="M10 20v-6h4v6"/>',
 work:'<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>',
 cert:'<circle cx="12" cy="8" r="6"/><path d="M15.5 13.5L17 22l-5-3-5 3 1.5-8.5"/>',
 user:'<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
 mail:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 6l-10 7L2 6"/>',
 share:'<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/>',
 dl:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5"/><path d="M12 15V3"/>',
 folder:'<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>',
 pin:'<path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
 grad:'<path d="M22 10L12 5 2 10l10 5 10-5z"/><path d="M6 12v5c3 2 9 2 12 0v-5"/>',
 file:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h8"/>',
 trophy:'<path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0z"/><path d="M17 5h3v2a3 3 0 0 1-3 3M7 5H4v2a3 3 0 0 0 3 3"/>',
 search:'<circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/>',
 linkedin:'<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>',
 github:'<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>',
 insta:'<rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/>',
 globe:'<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20"/>',
 phone:'<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/>'
};
const svg=n=>`<svg viewBox="0 0 24 24" aria-hidden="true">${IC[n]}</svg>`;

/* ---------- auto-sync with the website ----------
   Data (certificates, projects, visits, skills...) comes from ../content.js. Text that lives only in the
   website's index.html (hero line, section intros, typed roles...) is read from ../index.html at launch. */
const SY0={eyebrow:"BCA STUDENT • DATA ANALYTICS ENTHUSIAST",h1:"Hi, I'm ",h1em:"Deepu Verma.",intro:"",fnote:"",edu:"BCA, 3rd Semester",focus:"Data Analytics",
 typed:["Aspiring Data Analyst","BCA Student","Excel and Power BI Learner"],
 leads:{about:"",skills:"Tools I currently work with, grouped by purpose. More will be added as I learn them.",projects:"Excel projects. All project files are in one shared Google Drive folder.",visits:"College industrial visits and what I learned from them. Open a case study to read more.",contact:"For internships, mentoring or collaboration, reach out by email or LinkedIn."}};
let SY=SY0;
const mergeSY=n=>({...SY0,...n,leads:{...SY0.leads,...(n&&n.leads)}});
try{SY=mergeSY(JSON.parse(store.get("dvSync")||"{}"))}catch(e){}
async function syncSite(){
 try{const r=await fetch("../index.html",{cache:"no-cache"});if(!r.ok)return;
  const d=new DOMParser().parseFromString(await r.text(),"text/html");
  const tx=s=>{const e=d.querySelector(s);return e?e.textContent.trim():""},n={leads:{}};
  const ey=tx("#home .eyebrow");if(ey)n.eyebrow=ey;
  const h1=d.querySelector("#home h1");if(h1){const em=h1.querySelector("em");if(em){n.h1em=em.textContent.trim();const f=h1.firstChild;if(f&&f.nodeType===3)n.h1=f.textContent}}
  const hi=tx("#heroIntro");if(hi)n.intro=hi;const fn=tx("#fnote");if(fn)n.fnote=fn;
  ["about","skills","projects","visits","contact"].forEach(id=>{const t=tx("#"+id+" .lead");if(t)n.leads[id]=t});
  const src=[...d.querySelectorAll("script:not([src])")].map(s=>s.textContent).join("\n");
  const m=src.match(/const w=\[((?:"[^"]*",?\s*)+)\]/);if(m)try{n.typed=JSON.parse("["+m[1]+"]")}catch(e){}
  const g=src.match(/\["Education","([^"]*)"\],\["Focus","([^"]*)"\]/);if(g){n.edu=g[1];n.focus=g[2]}
  const j=JSON.stringify(n);if(j!==store.get("dvSync")){store.set("dvSync",j);SY=mergeSY(n);
   const ae=document.activeElement;if(!vw&&!(ae&&ae.matches&&ae.matches("input,textarea")))render(true)}
 }catch(e){}}

const TABS=[{k:"home",t:"Home",i:"home"},{k:"work",t:"Work",i:"work"},{k:"certificates",t:"Certificates",i:"cert"},{k:"profile",t:"Profile",i:"user"},{k:"contact",t:"Contact",i:"mail"}];
const SUBS={work:[["projects","Projects"],["internship","Internship"],["visits","Visits"]],profile:[["achievements","Achievements"],["education","Education"],["resume","Resume"]]};
const view=$("#view"),lastSub={};
const parse=()=>{const h=location.hash.replace(/^#\/?/,"").split("/");const t=TABS.some(x=>x.k===h[0])?h[0]:"home";const s=SUBS[t]?(SUBS[t].some(x=>x[0]===h[1])?h[1]:(lastSub[t]||SUBS[t][0][0])):"";return{t,s}};
const go=r=>{const h="#/"+r;if(location.hash===h)return;location.hash=h};

/* ---------- viewer (certificates, marksheets, project screenshots) ---------- */
let vw=null;
const caseDL=k=>{const L=[["What I built",k.what],["Why I built it",k.why],["Features and formulas used",k.used],["What I learned",k.learned]].filter(x=>x[1]);return L.length?`<dl>${L.map(([a,b])=>`<div><dt>${a}</dt><dd>${esc(b)}</dd></div>`).join("")}</dl>`:`<p class="note">Case study will be added soon.</p>`};
function drawViewer(){const it=vw.items[vw.i],n=vw.items.length;
 $("#vt").textContent=it.title;$("#vcount").textContent=n>1?`${vw.i+1} / ${n}`:"";
 $("#vbody").innerHTML=`${it.sub?`<p class="note" style="margin:0 0 10px">${esc(it.sub)}</p>`:""}<div class="vimg" id="vimg"><img src="${esc(it.src)}" alt="${esc(it.alt||it.title)}"></div><p class="vhint">Tap the image to zoom${n>1?" • swipe for next":""}</p>${it.html||""}${it.note?`<p class="note">${esc(it.note)}</p>`:""}`;
 $("#vbody").scrollTop=0;$("#vnav").style.display=n>1?"flex":"none";
}
function openViewer(items,i=0){vw={items,i};drawViewer();$("#viewer").classList.add("open");history.pushState({vw:1},"");$("#vclose").focus()}
function closeViewer(fromPop){if(!vw)return;vw=null;$("#viewer").classList.remove("open");if(!fromPop&&history.state&&history.state.vw)history.back()}
function step(d){if(!vw||vw.items.length<2)return;vw.i=(vw.i+d+vw.items.length)%vw.items.length;drawViewer();tick()}
$("#vclose").onclick=()=>closeViewer();$("#vprev").onclick=()=>step(-1);$("#vnext").onclick=()=>step(1);
$("#vbody").addEventListener("click",e=>{if(e.target.closest("#vimg img"))$("#vimg").classList.toggle("zoom")});
let tx=0,ty=0;
$("#vbody").addEventListener("touchstart",e=>{tx=e.touches[0].clientX;ty=e.touches[0].clientY},{passive:true});
$("#vbody").addEventListener("touchend",e=>{if($("#vimg")&&$("#vimg").classList.contains("zoom"))return;const dx=e.changedTouches[0].clientX-tx,dy=e.changedTouches[0].clientY-ty;if(Math.abs(dx)>60&&Math.abs(dx)>Math.abs(dy)*1.5)step(dx<0?1:-1)},{passive:true});
addEventListener("popstate",()=>{if(vw)closeViewer(true)});
addEventListener("keydown",e=>{if(e.key==="Escape"){if(vw)closeViewer();else closeSheet()}if(vw&&e.key==="ArrowRight")step(1);if(vw&&e.key==="ArrowLeft")step(-1)});

/* ---------- bottom sheet, toast ---------- */
function openSheet(html){$("#sbox").innerHTML=html;$("#sheet").classList.add("open");const b=$("#sbox button");b&&b.focus()}
function closeSheet(){$("#sheet").classList.remove("open")}
$("#sheet").addEventListener("click",e=>{if(e.target.id==="sheet"||e.target.closest("[data-close]"))closeSheet()});
let tt;function toast(m,a){const t=$("#toast");t.innerHTML=`<span>${esc(m)}</span>${a?`<button type="button">${esc(a.label)}</button>`:""}`;t.classList.add("show");if(a)t.querySelector("button").onclick=()=>{a.fn();t.classList.remove("show")};clearTimeout(tt);tt=setTimeout(()=>t.classList.remove("show"),a?8000:2600)}

/* ---------- screens ---------- */
const seg=(t,s)=>`<div class="segwrap"><div class="seg" role="group" aria-label="${t} sections">${SUBS[t].map(([k,l])=>`<button type="button" data-go="${t}/${k}" aria-pressed="${k===s}">${l}</button>`).join("")}</div></div>`;
const tl=arr=>`<div class="tl">${arr.map(a=>`<div class="card"><h3>${a.t}</h3><span class="tag">${a.meta}</span><p>${a.d}</p></div>`).join("")}</div>`;
const socials=()=>`<div class="social"><a href="${SITE.linkedin}" ${ext} aria-label="LinkedIn">${svg("linkedin")}</a><a href="${SITE.github}" ${ext} aria-label="GitHub">${svg("github")}</a>${SITE.instagram?`<a href="${SITE.instagram}" ${ext} aria-label="Instagram">${svg("insta")}</a>`:""}<a href="mailto:${SITE.email}" data-mail aria-label="Email">${svg("mail")}</a></div>`;
const XI={formula:'<path d="M18 5H6l6 7-6 7h12"/>',format:'<rect x="3" y="3" width="8" height="8" rx="1"/><rect x="13" y="3" width="8" height="8" rx="1"/><rect x="3" y="13" width="8" height="8" rx="1"/><rect x="13" y="13" width="8" height="8" rx="1" fill="currentColor" fill-opacity=".35"/>',filter:'<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>',check:'<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>'};

function screenHome(){
 const T=typeof TEXT!=="undefined"?TEXT:{};
 const tiles=[["Projects","folder",`${PROJECTS.length} Excel projects`,"work/projects"],["Certificates","cert",`${CERTS.length} certificates`,"certificates"],["Internship","work",INTERN.role,"work/internship"],["Industrial visits","pin",`${VISITS.length} case studies`,"work/visits"],["Education","grad","BCA • semester results","profile/education"],["Resume","file","Preview or download","profile/resume"],["Achievements","trophy","Activities and events","profile/achievements"],["Contact","mail","Email and LinkedIn","contact"]];
 return `<section class="hero"><div class="orb o1"></div><div class="orb o2"></div>
 <div class="photo-wrap"><div class="photo" role="img" aria-label="Profile photo">${SITE.photo?`<img src="${esc(P(SITE.photo))}" alt="Portrait of Deepu Verma" width="320" height="400" onerror="this.parentNode.innerHTML='<span>Profile photo<br>could not load</span>'">`:"<span>Profile photo<br>to be added</span>"}</div></div>
 <p class="eyebrow">${esc(SY.eyebrow)}</p>
 <h2 class="h1">${esc(SY.h1)}<em>${esc(SY.h1em)}</em></h2>
 <p class="role">I'm a <span id="typed">${esc(SY.typed[0])}</span><i class="cur"></i></p>
 <p class="intro">${esc(T.heroIntro||SY.intro)}</p>
 <div class="row c"><button class="btn" type="button" data-go="work/projects">Explore my projects</button><button class="btn ghost" type="button" data-go="profile/resume">View my resume</button></div>
 ${socials()}</section>
 <div class="banner card" id="banner"><p>Install this portfolio as an app for quick, offline access.</p><button class="btn" type="button" data-install>Install</button></div>
 <div class="grid g2 glance">${[["Education",SY.edu,""],["Focus",SY.focus,""],["Certificates",CERTS.length,"certificates"],["Projects",PROJECTS.length,"work/projects"]].map(([a,b,r])=>r?`<button class="card tap" type="button" data-go="${r}"><b>${b}</b><span>${a}</span></button>`:`<div class="card"><b>${b}</b><span>${a}</span></div>`).join("")}</div>
 <h2 class="sh">Explore</h2>
 <div class="grid g2">${tiles.map(([a,i,s,r])=>`<button class="card tap tile" type="button" data-go="${r}">${svg(i)}<b>${a}</b><span>${esc(s)}</span></button>`).join("")}</div>
 <h2 class="sh">About me</h2>
 <p class="lead">${esc(T.aboutText||SY.leads.about)}</p>
 <div class="grid g2">${ABOUT.map(([a,b])=>`<div class="card info"><b>${a}</b>${b}</div>`).join("")}</div>
 <div class="card info"><b>Career objective</b>${esc(T.objective||"")}</div>
 <h2 class="sh">Skills</h2>
 <p class="lead">${esc(SY.leads.skills)}</p>
 <div class="grid">${SKILLS.map(g=>`<div class="card"><h3>${g.group}</h3><div class="chips">${g.items.map(i=>`<span class="chip">${i}</span>`).join("")}</div></div>`).join("")}</div>
 <div class="card info"><b>Currently learning</b><div class="chips">${LEARNING.map(x=>`<span class="chip">${esc(x)}</span>`).join("")}</div></div>
 <h3 class="grp">Excel features I use</h3>
 <div class="grid">${EXCEL_FEATURES.map(f=>`<article class="card xl"><svg viewBox="0 0 24 24" aria-hidden="true">${XI[f.icon]||""}</svg><div><h3>${esc(f.t)}</h3><p>${esc(f.d)}</p></div></article>`).join("")}</div>
 <p class="foot">© ${new Date().getFullYear()} Deepu Verma<br>BCA Student | Aspiring Data Analyst${SY.fnote?"<br>"+esc(SY.fnote):""}</p>`}

function screenWork(s){let h=seg("work",s);
 if(s==="projects"){h+=`<p class="lead">${esc(SY.leads.projects)}</p><div class="grid">${PROJECTS.map((p,i)=>`<article class="card"><div class="ph"><img src="${esc(P(p.img))}" alt="Excel screenshot of ${esc(p.title)}" loading="lazy" data-pi="${i}" tabindex="0" role="button"></div><span class="tag">${p.tools}</span><h3>${esc(p.title)}</h3><p>${esc(p.desc)}</p><details class="cs"><summary class="btn ghost">View case study</summary>${caseDL(p.case||{})}</details></article>`).join("")}</div><div class="row" style="margin-top:20px"><a class="btn" href="${DRIVE}" ${ext}>Open all projects on Google Drive</a></div>`}
 else if(s==="internship"){const I=INTERN,now=new Date(),st=now<new Date(I.start)?"Upcoming":now<=new Date(I.end+"T23:59:59")?"Ongoing":"Completed";
  h+=`<div class="grid"><article class="card"><span class="tag">${st}</span><h3>${esc(I.role)}</h3><p>${esc(I.org)} • ${esc(I.mode)}</p><p class="note">${esc(I.label)} (${esc(I.duration)})</p><div class="row" style="margin-top:14px"><button class="btn ghost" type="button" data-intern="offer">View offer letter</button></div></article><article class="card"><span class="tag">Completion certificate</span><div class="ph" style="margin-top:8px">${I.completionImg?`<img src="${esc(P(I.completionImg))}" alt="Internship completion certificate" data-intern="comp">`:"Will be added after the internship ends"}</div></article></div>`}
 else{h+=`<p class="lead">${esc(SY.leads.visits)}</p><div class="grid">${VISITS.map(v=>{const ci=v.cert?CERTS.findIndex(c=>c.t===v.cert):-1;return `<article class="card"><span class="tag">College industrial visit</span><h3>${esc(v.title)}</h3>${v.date?`<p class="note" style="margin-top:0">${esc(v.date)}</p>`:""}<p>${esc(v.desc)}</p>${ci>=0?`<div class="row" style="margin-top:12px"><button class="btn ghost" type="button" data-vc="${ci}">View certificate</button></div>`:""}<details class="cs"><summary class="btn ghost">View case study</summary><dl>${v.sections.map(([a,b])=>`<div><dt>${esc(a)}</dt><dd>${esc(b)}</dd></div>`).join("")}</dl><details class="cs"><summary class="btn ghost">View learning outcomes</summary><ul>${v.outcomes.map(o=>`<li>${esc(o)}</li>`).join("")}</ul>${v.note?`<p class="note">${esc(v.note)}</p>`:""}</details></details></article>`}).join("")}</div>`}
 return h}

const cf={g:"All",q:""};let cfList=[];
function screenCerts(){return `<div class="search">${svg("search")}<input id="cq" type="search" placeholder="Search certificates" aria-label="Search certificates" autocomplete="off" value="${esc(cf.q)}"></div>
 <div class="filters" id="cfil" role="group" aria-label="Filter by topic"></div><div id="cres" style="margin-top:14px"></div>`}
function drawCerts(){
 const q=cf.q.trim().toLowerCase();
 $("#cfil").innerHTML=["All",...CERT_GROUPS].map(g=>`<button type="button" data-f="${esc(g)}" aria-pressed="${g===cf.g}">${esc(g)}${g==="All"?"":" "+CERTS.filter(c=>c.cat===g).length}</button>`).join("");
 cfList=[];const rows=[];
 CERT_GROUPS.forEach(g=>{if(cf.g!=="All"&&cf.g!==g)return;const L=CERTS.map((c,i)=>[c,i]).filter(([c])=>c.cat===g&&(!q||[c.t,c.org,c.id,c.date,c.cat].join(" ").toLowerCase().includes(q)));if(!L.length)return;
  rows.push(`<h3 class="grp">${esc(g)}<small>${L.length} certificate${L.length>1?"s":""}</small></h3>`);
  L.forEach(([c])=>{const n=cfList.push(c)-1;rows.push(`<button class="crow" type="button" data-ci="${n}"><span class="th"><img src="${esc(P(c.img))}" alt="" loading="lazy" onerror="this.remove()"></span><span><span class="tag">${esc(c.type||c.cat)}</span><h3>${esc(c.t)}</h3><p>${esc(c.org)}${c.date?" • "+esc(c.date):""}</p>${c.id?`<p class="note">Certificate ID: ${esc(c.id)}</p>`:""}</span></button>`)})});
 $("#cres").innerHTML=rows.length?rows.join(""):`<p class="empty">No certificates match “${esc(cf.q)}”.</p>`}
const certItem=c=>({title:c.t,sub:c.org+(c.date?" • "+c.date:"")+(c.id?" • ID "+c.id:""),src:P(c.img),alt:"Certificate: "+c.t});

function screenProfile(s){let h=seg("profile",s);
 if(s==="achievements")h+=tl(ACH);
 else if(s==="education")h+=tl(EDU)+`<h3 class="grp">Semester results</h3><div class="grid g2">${SEMESTERS.map((x,i)=>x.sgpa?`<article class="card sem"><span class="tag">Semester ${x.n}</span><b class="sg">SGPA ${x.sgpa}</b><p>Result declared ${x.declared}</p><button class="btn ghost" type="button" data-s="${i}">View marksheet</button></article>`:`<article class="card sem wait"><span class="tag">Semester ${x.n}</span><b class="sg">--</b><p>Result awaited</p></article>`).join("")}</div>`;
 else h+=SITE.resumeFile?`<div class="card"><p style="margin-bottom:14px">My resume is available to preview or download as a PDF.</p><div class="row"><a class="btn" href="${esc(P(SITE.resumeFile))}" download="Deepu-Verma-Resume.pdf">${svg("dl")}Download resume (PDF)</a>${SITE.resumeImg?`<button class="btn ghost" type="button" data-resume>Preview resume</button>`:`<a class="btn ghost" href="${esc(P(SITE.resumeFile))}" ${ext}>Preview resume</a>`}</div></div>`:`<div class="card"><p>Resume coming soon.</p></div>`;
 return h}

function screenContact(){const act=(h,i,l,x="")=>`<a class="btn ghost" href="${h}" ${x}>${svg(i)}${l}</a>`;
 return `<h2 class="sh">Contact</h2><p class="lead">${esc(SY.leads.contact)}</p>
 <div class="card"><h3>Get in touch</h3><p style="margin-top:8px">Email: <a href="mailto:${SITE.email}" data-mail>${SITE.email}</a></p><p>Location: ${SITE.location}</p>
 <div class="acts2">${act("mailto:"+SITE.email,"mail","Email","data-mail")}${act(SITE.linkedin,"linkedin","LinkedIn",ext)}${act(SITE.github,"github","GitHub",ext)}${SITE.instagram?act(SITE.instagram,"insta","Instagram",ext):""}${SITE.phone?act("tel:"+SITE.phone,"phone","Call"):""}</div></div>
 <form class="card" id="form" novalidate>
 <div><label for="n">Name</label><input id="n" autocomplete="name" required aria-describedby="en"><div class="err" id="en"></div></div>
 <div><label for="e">Email</label><input id="e" type="email" autocomplete="email" required aria-describedby="ee"><div class="err" id="ee"></div></div>
 <div><label for="s">Subject (optional)</label><input id="s"></div>
 <div><label for="m">Message</label><textarea id="m" required aria-describedby="em"></textarea><div class="err" id="em"></div></div>
 <input type="text" id="hp" tabindex="-1" autocomplete="off" aria-hidden="true" style="position:absolute;left:-9999px;width:1px;min-height:0;height:1px;opacity:0">
 <button class="btn" type="submit">${SITE.formEndpoint?"Send message":"Open in my email app"}</button><p id="status" role="status"></p>
 <p class="note">${SITE.formEndpoint?"Your message goes straight to my inbox.":"This form opens your email app with the message filled in. Nothing is sent until you press send there."}</p></form>
 <div class="card"><h3>More</h3><div class="acts2"><button class="btn ghost" type="button" data-share>${svg("share")}Share app</button><a class="btn ghost" href="../">${svg("globe")}Full website</a>${standalone()?"":`<button class="btn" type="button" data-install style="grid-column:1/-1">${svg("dl")}Install app</button>`}</div></div>
 <p class="foot">© ${new Date().getFullYear()} Deepu Verma<br>BCA Student | Aspiring Data Analyst</p>`}

/* ---------- router ---------- */
let cur="",typedT;const pos={};
function render(keep){
 const {t,s}=parse(),key=t+"/"+s,st=view.scrollTop;if(cur)pos[cur]=st;if(SUBS[t])lastSub[t]=s;
 view.innerHTML={home:screenHome,work:()=>screenWork(s),certificates:screenCerts,profile:()=>screenProfile(s),contact:screenContact}[t]();
 view.classList.remove("enter");void view.offsetWidth;if(!RM&&!keep)view.classList.add("enter");
 view.scrollTop=keep?st:(pos[key]||0);cur=key;
 $$(".tab").forEach(b=>{if(b.dataset.tab===t)b.setAttribute("aria-current","page");else b.removeAttribute("aria-current")});
 const tab=TABS.find(x=>x.k===t),sub=SUBS[t]&&SUBS[t].find(x=>x[0]===s);
 $("#ttl").textContent=sub?sub[1]:tab.t;document.title=(sub?sub[1]:tab.t)+" | Deepu Verma";
 clearTimeout(typedT);if($("#typed"))typing();
 if(t==="certificates"){drawCerts();$("#cq").oninput=e=>{cf.q=e.target.value;drawCerts()}}
 if(t==="home")updInstall();
}
function typing(){const el=$("#typed"),w=SY.typed;if(RM){el.textContent=w[0];return}
 let k=0,i=0,d=false;(function f(){if(!$("#typed"))return;const s=w[k];el.textContent=s.slice(0,i);if(!d&&i===s.length){d=true;typedT=setTimeout(f,1500);return}if(d&&i===0){d=false;k=(k+1)%w.length}i+=d?-1:1;typedT=setTimeout(f,d?40:80)})()}
addEventListener("hashchange",render);

/* bottom tabs */
$("#tabs").innerHTML=TABS.map(x=>`<button class="tab" type="button" data-tab="${x.k}"><span class="pill">${svg(x.i)}</span>${x.t}</button>`).join("");
$("#tabs").addEventListener("click",e=>{const b=e.target.closest(".tab");if(!b)return;tick();const k=b.dataset.tab;
 if(parse().t===k){view.scrollTo({top:0,behavior:RM?"auto":"smooth"});return}
 go(SUBS[k]?k+"/"+(lastSub[k]||SUBS[k][0][0]):k)});

/* delegated actions inside the screen */
view.addEventListener("click",e=>{
 const g=e.target.closest("[data-go]");if(g){tick();const r=g.dataset.go;
  if(g.closest(".seg")){location.replace("#/"+r)}else go(r);return}
 const f=e.target.closest("[data-f]");if(f){cf.g=f.dataset.f;drawCerts();return}
 const ci=e.target.closest("[data-ci]");if(ci){openViewer(cfList.map(certItem),+ci.dataset.ci);return}
 const vc=e.target.closest("[data-vc]");if(vc){openViewer([certItem(CERTS[vc.dataset.vc])]);return}
 const pi=e.target.closest("[data-pi]");if(pi){const p=PROJECTS[pi.dataset.pi];openViewer([{title:p.title,src:P(p.img),alt:"Excel screenshot of "+p.title,html:caseDL(p.case||{}),note:"The project files are in my Google Drive folder, linked below the projects."}]);return}
 const it=e.target.closest("[data-intern]");if(it){const I=INTERN;openViewer([it.dataset.intern==="offer"?{title:"Internship offer letter",src:P(I.offerImg)}:{title:"Internship completion certificate",src:P(I.completionImg)}]);return}
 const sm=e.target.closest("[data-s]");if(sm){const x=SEMESTERS[sm.dataset.s];openViewer([{title:"Semester "+x.n+" marksheet",src:P(x.img),note:"Registration number, roll number and father's name are hidden for privacy."}]);return}
 if(e.target.closest("[data-resume]")){openViewer([{title:"Resume",src:P(SITE.resumeImg),alt:"Resume of Deepu Verma"}]);return}
 if(e.target.closest("[data-share]")){shareApp();return}
 if(e.target.closest("[data-install]")){installApp();return}
});
view.addEventListener("keydown",e=>{const t=e.target;if((e.key==="Enter"||e.key===" ")&&t.matches("img[data-pi]")){e.preventDefault();t.click()}});

/* contact form (same behaviour as the website) */
view.addEventListener("submit",async e=>{if(e.target.id!=="form")return;e.preventDefault();
 const fe=SITE.formEndpoint,n=$("#n").value.trim(),em=$("#e").value.trim(),m=$("#m").value.trim(),sub=$("#s").value.trim()||"Portfolio enquiry from "+n;
 $("#en").textContent=n?"":"Enter your name.";
 $("#ee").textContent=!em?"Enter your email address.":/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em)?"":"Enter a valid email address, like name@example.com.";
 $("#em").textContent=m?"":"Enter a message.";
 if($("#en").textContent||$("#ee").textContent||$("#em").textContent){$("#status").textContent="Fix the highlighted fields and try again.";return}
 if(fe){const btn=$("#form button[type=submit]");btn.disabled=true;$("#status").textContent="Sending...";
  try{if(!navigator.onLine)throw 0;const r=await fetch(fe,{method:"POST",headers:{"Accept":"application/json","Content-Type":"application/json"},body:JSON.stringify({name:n,email:em,subject:sub,message:m,_gotcha:$("#hp").value})});
   if(!r.ok)throw 0;$("#status").textContent="Thank you! Your message has been sent.";e.target.reset()}
  catch(x){$("#status").textContent="Sorry, your message could not be sent. Please email me at "+SITE.email+" instead."}
  btn.disabled=false;return}
 location.href=`mailto:${SITE.email}?subject=${encodeURIComponent(sub)}&body=${encodeURIComponent(m+"\n\n- "+n+" ("+em+")")}`;
 $("#status").textContent="Your email app should open with the message ready. Press send there to deliver it."});
/* hide the tab bar while typing so the keyboard has room */
addEventListener("focusin",e=>{if(e.target.matches("input,textarea"))document.body.classList.add("kb")});
addEventListener("focusout",()=>document.body.classList.remove("kb"));

/* ---------- email (works even when no mail app opens) ---------- */
function openMail(){let left=false;const h=()=>{left=true},v=()=>{if(document.hidden)left=true};
 addEventListener("blur",h,{once:true});document.addEventListener("visibilitychange",v);
 try{location.href="mailto:"+SITE.email}catch(e){}
 setTimeout(()=>{removeEventListener("blur",h);document.removeEventListener("visibilitychange",v);if(!left)mailSheet()},900)}
function mailSheet(){openSheet(`<h3 id="sht">Send an email</h3><p style="color:var(--muted);margin-bottom:14px">No email app opened. Choose another way to write to me:</p><p style="margin-bottom:16px;font-weight:600;word-break:break-all;user-select:all">${esc(SITE.email)}</p><div class="grid"><a class="btn" href="https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(SITE.email)}" ${ext}>Open Gmail</a><button class="btn ghost" type="button" data-copy>Copy email address</button><button class="btn ghost" type="button" data-close>Close</button></div>`)}
async function copyMail(){try{await navigator.clipboard.writeText(SITE.email);toast("Email address copied")}catch(e){toast(SITE.email)}closeSheet()}
$("#sheet").addEventListener("click",e=>{if(e.target.closest("[data-copy]"))copyMail()});
document.addEventListener("click",e=>{const m=e.target.closest("a[data-mail]");if(m){e.preventDefault();tick();openMail()}});

/* ---------- theme, share, install, offline ---------- */
const root=document.documentElement,tb=$("#theme");
function setTheme(t,save){root.dataset.theme=t;tb.textContent=t==="dark"?"☾":"☀";tb.setAttribute("aria-label",t==="dark"?"Switch to light theme":"Switch to dark theme");$("#tc").content=t==="dark"?"#0A1428":"#FAF7F0";if(save)store.set("dvTheme",t)}
setTheme(store.get("dvTheme")==="light"?"light":"dark");
tb.onclick=()=>{tick();setTheme(root.dataset.theme==="dark"?"light":"dark",true)};

$("#share").innerHTML=svg("share");
async function shareApp(){const url=location.origin+location.pathname.replace(/index\.html$/,""),d={title:"Deepu Verma | Portfolio",text:"Portfolio of Deepu Verma, BCA student and aspiring Data Analyst.",url};
 try{if(navigator.share){await navigator.share(d);return}}catch(e){if(e&&e.name==="AbortError")return}
 try{await navigator.clipboard.writeText(url);toast("Link copied")}catch(e){toast(url)}}
$("#share").onclick=shareApp;

let dp;const inst=$("#inst");
function updInstall(){const b=$("#banner");if(b)b.classList.toggle("show",!standalone()&&(!!dp||isIOS))}
addEventListener("beforeinstallprompt",e=>{e.preventDefault();dp=e;if(!standalone()){inst.innerHTML=svg("dl")+"Install";inst.style.display="grid"}updInstall()});
async function installApp(){
 if(dp){dp.prompt();try{await dp.userChoice}catch(e){}dp=null;inst.style.display="none";updInstall();return}
 openSheet(isIOS?`<h3 id="sht">Install on iPhone or iPad</h3><ol><li>Open this page in <b>Safari</b>.</li><li>Tap the <b>Share</b> button.</li><li>Choose <b>Add to Home Screen</b>, then tap <b>Add</b>.</li></ol><button class="btn" type="button" data-close style="width:100%">Got it</button>`:`<h3 id="sht">Install this app</h3><ol><li>Open your browser menu (⋮ or ⋯).</li><li>Tap <b>Install app</b> or <b>Add to Home screen</b>.</li><li>Open Deepu Verma from your home screen.</li></ol><button class="btn" type="button" data-close style="width:100%">Got it</button>`)}
inst.onclick=installApp;
if(isIOS&&!standalone()){inst.innerHTML=svg("dl")+"Install";inst.style.display="grid"}
addEventListener("appinstalled",()=>{inst.style.display="none";dp=null;updInstall();toast("App installed")});
const net=()=>document.body.classList.toggle("off",!navigator.onLine);
addEventListener("online",()=>{net();toast("Back online")});addEventListener("offline",()=>{net();toast("You're offline. Saved content still works.")});net();

if("serviceWorker" in navigator&&location.protocol.indexOf("http")===0){
 addEventListener("load",()=>navigator.serviceWorker.register("sw.js").then(reg=>{
  reg.addEventListener("updatefound",()=>{const w=reg.installing;if(w)w.addEventListener("statechange",()=>{if(w.state==="installed"&&navigator.serviceWorker.controller)toast("A new version is ready.",{label:"Refresh",fn:()=>location.reload()})})})}).catch(()=>{}))}

/* ---------- start ---------- */
if(!location.hash)history.replaceState(null,"","#/home");
render();syncSite();
const sp=$("#splash");
let seen=null;try{seen=sessionStorage.getItem("dvSplash")}catch(e){}
if(seen==="1"||RM){sp.remove()}else{try{sessionStorage.setItem("dvSplash","1")}catch(e){}setTimeout(()=>{sp.classList.add("hide");setTimeout(()=>sp.remove(),500)},900)}
