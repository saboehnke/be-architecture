/* ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
   BE · Architecture & Landscape · main.js
   Hand-built parametric SVG architectural drawings
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ */

/* progressive-enhancement flag: CSS only hides reveal content when .js is present */
document.documentElement.classList.add('js');
const reduceMotion=matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ── seeded RNG so drawings are stable per project ── */
function rng(seed){let s=seed%2147483647;if(s<=0)s+=2147483646;return()=>(s=s*16807%2147483647)/2147483647}

const BP="#9FC3D4", HI="#EAF3F7", ACC="#D98452", FAINT="rgba(159,195,212,.32)";

/* common frame: title block + border, returns [open, close] wrapping content */
function frame(label, no){
  return `
  <line x1="6" y1="6" x2="394" y2="6" stroke="${FAINT}" stroke-width="1"/>
  <line x1="6" y1="294" x2="394" y2="294" stroke="${FAINT}" stroke-width="1"/>
  <text x="10" y="288" fill="${BP}" font-family="IBM Plex Mono,monospace" font-size="8" letter-spacing="1.5">${label}</text>
  <text x="390" y="288" text-anchor="end" fill="${ACC}" font-family="IBM Plex Mono,monospace" font-size="8">${no}</text>`;
}
function northArrow(x,y){
  return `<g stroke="${ACC}" stroke-width="1.2" fill="none">
    <circle cx="${x}" cy="${y}" r="9" stroke="${FAINT}" stroke-width="1"/>
    <path d="M${x} ${y-7} L${x+3.5} ${y+2} L${x} ${y-1} L${x-3.5} ${y+2} Z" fill="${ACC}"/>
  </g><text x="${x}" y="${y-11}" text-anchor="middle" fill="${ACC}" font-family="IBM Plex Mono,monospace" font-size="7">N</text>`;
}
function svg(inner){return `<svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid meet" fill="none" stroke-linecap="round" stroke-linejoin="round" role="img" aria-hidden="true" focusable="false">${inner}</svg>`;}

/* ── 1 · FLOOR PLAN ── */
function floorPlan(seed,label,no){
  const r=rng(seed);
  const ox=40,oy=44,W=300,H=200;
  const splitX=ox+Math.round(W*(0.42+r()*0.18));
  const splitY=oy+Math.round(H*(0.4+r()*0.2));
  let s=`<g stroke="${BP}" stroke-width="2">
    <rect x="${ox}" y="${oy}" width="${W}" height="${H}"/>
  </g>
  <g stroke="${BP}" stroke-width="1.4">
    <line x1="${splitX}" y1="${oy}" x2="${splitX}" y2="${splitY}"/>
    <line x1="${ox}" y1="${splitY}" x2="${splitX}" y2="${splitY}"/>
    <line x1="${splitX}" y1="${splitY-30}" x2="${ox+W}" y2="${splitY-30}"/>
    <line x1="${splitX+70}" y1="${splitY-30}" x2="${splitX+70}" y2="${oy+H}"/>
  </g>`;
  // door swings
  const dsw=(x,y,rad,a0)=>`<path d="M${x} ${y} L${x+rad*Math.cos(a0)} ${y+rad*Math.sin(a0)} A${rad} ${rad} 0 0 1 ${x+rad} ${y}" stroke="${FAINT}" stroke-width="1"/>`;
  s+=dsw(splitX,splitY,22,-Math.PI/2);
  s+=dsw(ox+40,oy+H,20,-Math.PI/2);
  // furniture hints
  s+=`<g stroke="${FAINT}" stroke-width="1">
    <rect x="${ox+14}" y="${oy+14}" width="44" height="30" rx="3"/>
    <circle cx="${splitX+45}" cy="${oy+30}" r="14"/>
    <rect x="${splitX+18}" y="${splitY-22}" width="34" height="18"/>
    <line x1="${ox+14}" y1="${splitY+22}" x2="${splitX-14}" y2="${splitY+22}"/>
    <line x1="${ox+14}" y1="${splitY+40}" x2="${splitX-14}" y2="${splitY+40}"/>
  </g>`;
  // room labels
  s+=`<g fill="${BP}" font-family="IBM Plex Mono,monospace" font-size="7" letter-spacing="1">
    <text x="${ox+10}" y="${oy+H/2+30}">BED 01</text>
    <text x="${splitX+10}" y="${oy+20}">LIVING</text>
    <text x="${splitX+74}" y="${splitY-8}">KITCHEN</text>
    <text x="${ox+10}" y="${oy+12}">STUDY</text>
  </g>`;
  // dimension line
  s+=`<g stroke="${BP}" stroke-width="0.8">
    <line x1="${ox}" y1="${oy-12}" x2="${ox+W}" y2="${oy-12}"/>
    <line x1="${ox}" y1="${oy-16}" x2="${ox}" y2="${oy-8}"/>
    <line x1="${ox+W}" y1="${oy-16}" x2="${ox+W}" y2="${oy-8}"/>
  </g><text x="${ox+W/2}" y="${oy-16}" text-anchor="middle" fill="${BP}" font-family="IBM Plex Mono,monospace" font-size="7">${(10+Math.round(r()*8))}.4 m</text>`;
  s+=northArrow(360,44)+frame(label,no);
  return svg(s);
}

/* ── 2 · SITE / LANDSCAPE PLAN ── */
function sitePlan(seed,label,no){
  const r=rng(seed);
  let s=`<g stroke="${BP}" stroke-width="1.6"><rect x="30" y="30" width="340" height="240" rx="2" stroke-dasharray="6 5"/></g>`;
  // house footprint
  const hx=70+r()*30, hy=70+r()*20, hw=120+r()*30, hh=80+r()*20;
  s+=`<g stroke="${HI}" stroke-width="2"><rect x="${hx}" y="${hy}" width="${hw}" height="${hh}"/></g>
      <g stroke="${FAINT}" stroke-width="0.8"><line x1="${hx}" y1="${hy}" x2="${hx+hw}" y2="${hy+hh}"/><line x1="${hx+hw}" y1="${hy}" x2="${hx}" y2="${hy+hh}"/></g>
      <text x="${hx+6}" y="${hy+14}" fill="${HI}" font-family="IBM Plex Mono,monospace" font-size="7">RESIDENCE</text>`;
  // pool
  s+=`<rect x="${hx}" y="${hy+hh+24}" width="${hw*0.7}" height="34" rx="17" stroke="${ACC}" stroke-width="1.4"/>
      <text x="${hx+8}" y="${hy+hh+45}" fill="${ACC}" font-family="IBM Plex Mono,monospace" font-size="7">POOL</text>`;
  // winding path
  s+=`<path d="M40 250 C 120 220 90 160 ${hx} ${hy+hh}" stroke="${FAINT}" stroke-width="1.4" stroke-dasharray="2 4"/>`;
  // trees (planting)
  const tree=(x,y,rad)=>{let g=`<circle cx="${x}" cy="${y}" r="${rad}" stroke="${BP}" stroke-width="1"/><circle cx="${x}" cy="${y}" r="1.4" fill="${BP}"/>`;for(let i=0;i<8;i++){const a=i/8*Math.PI*2;g+=`<line x1="${x}" y1="${y}" x2="${x+Math.cos(a)*rad}" y2="${y+Math.sin(a)*rad}" stroke="${FAINT}" stroke-width="0.5"/>`}return g};
  for(let i=0;i<7;i++){s+=tree(50+r()*300,50+r()*200,6+r()*7);}
  // contour lines
  s+=`<g stroke="${FAINT}" stroke-width="0.7" fill="none">
    <path d="M30 200 Q 120 180 200 205 T 370 195"/>
    <path d="M30 225 Q 120 208 200 230 T 370 222"/>
  </g>`;
  s+=northArrow(348,52)+frame(label,no);
  return svg(s);
}

/* ── 3 · ELEVATION ── */
function elevation(seed,label,no){
  const r=rng(seed);
  const gy=240, bx=80, bw=240, roofH=46+r()*26, wallH=110+r()*20;
  const by=gy-wallH;
  let s=`<line x1="20" y1="${gy}" x2="380" y2="${gy}" stroke="${BP}" stroke-width="1.6"/>`;
  for(let x=20;x<380;x+=10){s+=`<line x1="${x}" y1="${gy}" x2="${x-5}" y2="${gy+6}" stroke="${FAINT}" stroke-width="0.6"/>`;}
  // body
  s+=`<g stroke="${BP}" stroke-width="2"><rect x="${bx}" y="${by}" width="${bw}" height="${wallH}"/></g>`;
  // roof
  const pitch=r()>0.5;
  if(pitch){s+=`<path d="M${bx-12} ${by} L${bx+bw/2} ${by-roofH} L${bx+bw+12} ${by}" stroke="${HI}" stroke-width="2"/>`;}
  else{s+=`<path d="M${bx-12} ${by} L${bx+bw+12} ${by-roofH*0.6} L${bx+bw+12} ${by} Z" stroke="${HI}" stroke-width="2"/>`;}
  // windows grid
  const cols=3+Math.round(r()*1), rows=2;
  const gw=bw/(cols+1), gh=wallH/(rows+1);
  for(let c=1;c<=cols;c++)for(let rr=1;rr<=rows;rr++){
    s+=`<rect x="${bx+gw*c-16}" y="${by+gh*rr-16}" width="32" height="26" stroke="${BP}" stroke-width="1"/>
        <line x1="${bx+gw*c}" y1="${by+gh*rr-16}" x2="${bx+gw*c}" y2="${by+gh*rr+10}" stroke="${FAINT}" stroke-width="0.7"/>`;
  }
  // door
  s+=`<rect x="${bx+bw/2-14}" y="${gy-46}" width="28" height="46" stroke="${HI}" stroke-width="1.4"/>`;
  // tree
  s+=`<line x1="345" y1="${gy}" x2="345" y2="${gy-40}" stroke="${FAINT}" stroke-width="1"/><circle cx="345" cy="${gy-50}" r="18" stroke="${BP}" stroke-width="1"/>`;
  // height dim
  s+=`<line x1="${bx-22}" y1="${by-roofH}" x2="${bx-22}" y2="${gy}" stroke="${BP}" stroke-width="0.8"/>
      <line x1="${bx-26}" y1="${gy}" x2="${bx-18}" y2="${gy}" stroke="${BP}" stroke-width="0.8"/>
      <line x1="${bx-26}" y1="${by-roofH}" x2="${bx-18}" y2="${by-roofH}" stroke="${BP}" stroke-width="0.8"/>
      <text x="${bx-30}" y="${(by-roofH+gy)/2}" text-anchor="end" fill="${BP}" font-family="IBM Plex Mono,monospace" font-size="7">${(6+r()*3).toFixed(1)}m</text>`;
  s+=frame(label,no);
  return svg(s);
}

/* ── 4 · SECTION ── */
function section(seed,label,no){
  const r=rng(seed);
  const gy=235, bx=60, bw=280, fH=70+r()*16, roofH=40+r()*20;
  const f1=gy-fH, f2=f1-fH;
  let s=`<line x1="20" y1="${gy}" x2="380" y2="${gy}" stroke="${BP}" stroke-width="1.6"/>`;
  // ground hatch
  for(let x=24;x<380;x+=12){s+=`<line x1="${x}" y1="${gy}" x2="${x+8}" y2="${gy+10}" stroke="${FAINT}" stroke-width="0.6"/>`;}
  // poche walls (cut = thick/bright)
  s+=`<g stroke="${HI}" stroke-width="2.4">
      <line x1="${bx}" y1="${f2-roofH+10}" x2="${bx}" y2="${gy}"/>
      <line x1="${bx+bw}" y1="${f2-roofH+10}" x2="${bx+bw}" y2="${gy}"/>
    </g>`;
  // floor slabs
  s+=`<g stroke="${HI}" stroke-width="2">
      <line x1="${bx}" y1="${f1}" x2="${bx+bw}" y2="${f1}"/>
      <line x1="${bx}" y1="${f2}" x2="${bx+bw}" y2="${f2}"/>
    </g>`;
  // roof
  s+=`<path d="M${bx} ${f2} L${bx+bw/2} ${f2-roofH} L${bx+bw} ${f2}" stroke="${HI}" stroke-width="2"/>`;
  // interior furniture / stairs
  let sx=bx+30; let sy=gy;
  let stair="";for(let i=0;i<6;i++){stair+=`<path d="M${sx} ${sy} h14 v-${(gy-f1)/6} " stroke="${BP}" stroke-width="1" fill="none"/>`;sx+=14;sy-=(gy-f1)/6;}
  s+=stair;
  s+=`<g stroke="${BP}" stroke-width="1">
      <rect x="${bx+bw-90}" y="${gy-26}" width="40" height="26"/>
      <rect x="${bx+40}" y="${f1-24}" width="40" height="24"/>
    </g>`;
  // level markers
  const lvl=(y,t)=>`<circle cx="${bx-18}" cy="${y}" r="3" stroke="${ACC}" stroke-width="1"/><line x1="${bx-15}" y1="${y}" x2="${bx}" y2="${y}" stroke="${FAINT}" stroke-width="0.7"/><text x="${bx-24}" y="${y+3}" text-anchor="end" fill="${ACC}" font-family="IBM Plex Mono,monospace" font-size="7">${t}</text>`;
  s+=lvl(gy,"±0.0")+lvl(f1,"+3.0")+lvl(f2,"+6.0");
  s+=frame(label,no);
  return svg(s);
}

/* ── 5 · MASTERPLAN ── */
function masterplan(seed,label,no){
  const r=rng(seed);
  let s=`<rect x="26" y="26" width="348" height="248" stroke="${FAINT}" stroke-width="1" stroke-dasharray="5 5"/>`;
  // road
  s+=`<path d="M26 ${120+r()*40} C 140 ${100+r()*30} 220 ${180+r()*20} 374 ${150+r()*30}" stroke="${ACC}" stroke-width="3" opacity=".8"/>`;
  s+=`<path d="M${140+r()*40} 274 L ${150+r()*40} 60" stroke="${ACC}" stroke-width="2" opacity=".6"/>`;
  // building blocks
  const blocks=6+Math.round(r()*3);
  for(let i=0;i<blocks;i++){
    const x=50+r()*270, y=50+r()*180, w=22+r()*40, h=18+r()*34;
    s+=`<rect x="${x}" y="${y}" width="${w}" height="${h}" stroke="${BP}" stroke-width="1.4"/>`;
    if(r()>0.5)s+=`<line x1="${x}" y1="${y}" x2="${x+w}" y2="${y+h}" stroke="${FAINT}" stroke-width="0.6"/>`;
  }
  // green / planting clusters
  for(let i=0;i<10;i++){const x=40+r()*320,y=40+r()*220;s+=`<circle cx="${x}" cy="${y}" r="${4+r()*5}" stroke="${FAINT}" stroke-width="0.8"/>`;}
  // grid ticks
  for(let x=26;x<=374;x+=58){s+=`<line x1="${x}" y1="26" x2="${x}" y2="32" stroke="${FAINT}" stroke-width="0.7"/>`;}
  s+=northArrow(352,50)+frame(label,no);
  return svg(s);
}

const DRAW={plan:floorPlan,site:sitePlan,elev:elevation,section:section,master:masterplan};

/* ░░ PROJECT DATA ░░ */
const PROJECTS=[
  {t:"Cedar Bluff House",y:2023,cat:"residential",type:"plan",loc:"San Juan Islands, WA",area:"420 m²",scope:"New build · 4 bed",code:"PL-218",
   d:"A long, low residence threaded along a forested bluff. The plan folds around an interior court so every room reads the water to the west and the cedars to the east."},
  {t:"Garden of Quiet Stones",y:2021,cat:"landscape",type:"site",loc:"Bainbridge Island, WA",area:"0.6 ha",scope:"Landscape masterplan",code:"LS-094",
   d:"A contemplative garden organised around a sequence of gravel courts, native planting and a single reflecting pool aligned to the summer sunset."},
  {t:"Ridgeline Residence",y:2019,cat:"residential",type:"section",loc:"Methow Valley, WA",area:"310 m²",scope:"New build · 3 bed",code:"SC-156",
   d:"Drawn first in section: three stepped floors track the slope, each opening to a terrace cut into the hillside. Mass timber structure, exposed throughout."},
  {t:"The Orchard Court",y:2022,cat:"masterplan",type:"master",loc:"Willamette Valley, OR",area:"4.2 ha",scope:"Residential cluster",code:"MP-031",
   d:"Six homes set into a working orchard, sharing a single spine road and a common green. Each parcel keeps its own aspect and privacy."},
  {t:"Hollow Elevation",y:2018,cat:"residential",type:"elev",loc:"Portland, OR",area:"265 m²",scope:"Renovation + addition",code:"EL-077",
   d:"A 1920s craftsman reworked behind a restrained new street elevation: deep eaves, vertical glazing, and a recessed entry that reads the original rhythm."},
  {t:"Terrace & Thicket",y:2020,cat:"landscape",type:"site",loc:"Hood River, OR",area:"0.9 ha",scope:"Garden + pool court",code:"LS-112",
   d:"Stone terraces descend through dense native thicket to a lap pool. Paths are drawn to slow the walk and frame three deliberate views."},
  {t:"Loft House",y:2024,cat:"interior",type:"plan",loc:"Seattle, WA",area:"180 m²",scope:"Interior architecture",code:"PL-244",
   d:"An open loft re-planned around a central oak core holding kitchen, stair and storage, freeing the perimeter for living and light."},
  {t:"Cantilever Section",y:2017,cat:"residential",type:"section",loc:"Columbia Gorge, WA",area:"340 m²",scope:"New build · 4 bed",code:"SC-061",
   d:"The living floor cantilevers nine metres over the gorge. The section is the project: structure, glazing and view resolved in one cut."},
  {t:"Walled Garden",y:2016,cat:"landscape",type:"site",loc:"Victoria, BC",area:"0.4 ha",scope:"Heritage garden",code:"LS-048",
   d:"A restored walled garden replanted to a strict geometry, with espaliered fruit on warm brick and a central rill drawn to the original 1890s survey."},
  {t:"Black Barn",y:2021,cat:"residential",type:"elev",loc:"Whidbey Island, WA",area:"220 m²",scope:"New build · 2 bed",code:"EL-138",
   d:"An agricultural form reduced to its elevation: a single charred-timber gable, punched openings, and a sliding door the full height of the wall."},
  {t:"Civic Green Masterplan",y:2015,cat:"masterplan",type:"master",loc:"Tacoma, WA",area:"6.8 ha",scope:"Mixed-use district",code:"MP-019",
   d:"A walkable district drawn around a central green, with built blocks calibrated to hold the street and open to shared landscape behind."},
  {t:"Atrium Interior",y:2023,cat:"interior",type:"plan",loc:"Vancouver, BC",area:"240 m²",scope:"Interior architecture",code:"PL-231",
   d:"A top-lit atrium reorganises a deep-plan home, pulling daylight to the centre and giving every room a borrowed view of sky."}
];

const seedOf=p=>p.y*97+p.t.length*13+p.code.charCodeAt(3);

/* ░░ HERO RAIL · auto-scroll + drag ░░ */
(function rail(){
  const rail=document.getElementById('rail');
  const pick=PROJECTS.slice(0,7);
  const make=p=>`<article class="plate">
      <div class="plate-svg">${DRAW[p.type](seedOf(p),p.code+" · "+p.scope.split(' ')[0].toUpperCase(),p.code)}</div>
      <div class="plate-tag"><b>${p.t}</b><span>${p.y}</span></div>
    </article>`;
  rail.innerHTML=[...pick,...pick].map(make).join('');

  const hint=document.querySelector('.rail-hint');
  if(hint)hint.textContent=hint.textContent.replace('{{count}}',PROJECTS.length+'+');

  // half-width = one full set; loop seamlessly
  let half=0,pos=0,paused=false,dragging=false,startX=0,startPos=0,last=0;
  const measure=()=>{half=rail.scrollWidth/2;};
  measure();window.addEventListener('resize',measure);

  function apply(){if(half){if(pos<=-half)pos+=half;if(pos>0)pos-=half;}rail.style.transform=`translateX(${pos}px)`;}

  function tick(t){
    const dt=Math.min(40,t-last||16);last=t;
    if(!paused&&!dragging)pos-=dt*0.035;
    apply();
    requestAnimationFrame(tick);
  }
  if(reduceMotion)apply(); else requestAnimationFrame(tick); // no idle loop when motion is reduced

  rail.addEventListener('pointerenter',()=>paused=true);
  rail.addEventListener('pointerleave',()=>paused=false);
  rail.addEventListener('pointerdown',e=>{dragging=true;rail.classList.add('dragging');startX=e.clientX;startPos=pos;rail.setPointerCapture(e.pointerId);});
  rail.addEventListener('pointermove',e=>{if(!dragging)return;pos=startPos+(e.clientX-startX);if(reduceMotion)apply();});
  const end=()=>{dragging=false;rail.classList.remove('dragging');};
  rail.addEventListener('pointerup',end);
  rail.addEventListener('pointercancel',end);
})();

/* ░░ PORTFOLIO GRID ░░ */
const grid=document.getElementById('grid');
const catLabel={residential:"Residential",landscape:"Landscape",interior:"Interior",masterplan:"Masterplan"};
const sheetType={plan:"FLOOR PLAN",site:"SITE PLAN",elev:"ELEVATION",section:"SECTION",master:"MASTERPLAN"};

PROJECTS.forEach((p,i)=>{
  const el=document.createElement('article');
  el.className='card';el.dataset.cat=p.cat;el.dataset.i=i;
  el.setAttribute('role','button');el.tabIndex=0;
  el.setAttribute('aria-label',`${p.t}, ${catLabel[p.cat]} ${sheetType[p.type].toLowerCase()}, ${p.loc}, ${p.y}. Open drawing and details.`);
  el.style.transitionDelay=reduceMotion?'0s':`${(i%3)*0.07}s`;
  el.innerHTML=`
    <span class="card-cat">${catLabel[p.cat]}</span>
    <span class="card-view" aria-hidden="true">↗</span>
    <div class="card-draw">${DRAW[p.type](seedOf(p),p.code+" · "+sheetType[p.type],p.code)}</div>
    <div class="card-meta">
      <div><h3>${p.t}</h3><div class="cm-sub">${p.loc}</div></div>
      <div class="cm-yr">${p.y}</div>
    </div>`;
  el.addEventListener('click',()=>openLB(i));
  el.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openLB(i);}});
  grid.appendChild(el);
});

/* ░░ FILTERS ░░ */
const filters=document.getElementById('filters');
filters.addEventListener('click',e=>{
  const b=e.target.closest('.filter');if(!b)return;
  filters.querySelectorAll('.filter').forEach(f=>f.classList.remove('is-active'));
  b.classList.add('is-active');
  const f=b.dataset.filter;
  document.querySelectorAll('.card').forEach(c=>{
    const show=f==='all'||c.dataset.cat===f;
    c.classList.toggle('hide',!show);
  });
});

/* ░░ LIGHTBOX ░░ */
const lb=document.getElementById('lightbox');
const lbInner=document.getElementById('lbInner');
let lbList=[],lbIdx=0,lastFocused=null;
const lbClose=document.getElementById('lbClose');
const lbPrev=document.getElementById('lbPrev');
const lbNext=document.getElementById('lbNext');
function visibleIdx(){return PROJECTS.map((_,i)=>i).filter(i=>!document.querySelector(`.card[data-i="${i}"]`).classList.contains('hide'));}
function openLB(i){
  lbList=visibleIdx();lbIdx=lbList.indexOf(i);if(lbIdx<0){lbList=[i];lbIdx=0;}
  lastFocused=document.activeElement;
  renderLB();lb.classList.add('open');lb.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';
  lbClose.focus();
}
function renderLB(){
  const p=PROJECTS[lbList[lbIdx]];
  lbInner.innerHTML=`
    <div class="lb-draw">${DRAW[p.type](seedOf(p),p.code+" · "+sheetType[p.type],p.code)}</div>
    <div class="lb-info">
      <span class="lb-cat">${catLabel[p.cat]} · Sheet ${p.code}</span>
      <h3>${p.t}</h3>
      <p>${p.d}</p>
      <ul class="lb-specs">
        <li><span>Location</span><span>${p.loc}</span></li>
        <li><span>Year</span><span>${p.y}</span></li>
        <li><span>Area</span><span>${p.area}</span></li>
        <li><span>Scope</span><span>${p.scope}</span></li>
        <li><span>Drawing</span><span>${sheetType[p.type]}</span></li>
      </ul>
    </div>`;
}
function closeLB(){lb.classList.remove('open');lb.setAttribute('aria-hidden','true');document.body.style.overflow='';if(lastFocused)lastFocused.focus();}
function step(d){lbIdx=(lbIdx+d+lbList.length)%lbList.length;renderLB();}
lbClose.addEventListener('click',closeLB);
lbNext.addEventListener('click',()=>step(1));
lbPrev.addEventListener('click',()=>step(-1));
lb.addEventListener('click',e=>{if(e.target===lb)closeLB();});
document.addEventListener('keydown',e=>{
  if(!lb.classList.contains('open'))return;
  if(e.key==='Escape'){closeLB();return;}
  if(e.key==='ArrowRight'){step(1);return;}
  if(e.key==='ArrowLeft'){step(-1);return;}
  if(e.key==='Tab'){ // trap focus within the dialog controls
    const f=[lbClose,lbPrev,lbNext];const idx=f.indexOf(document.activeElement);
    e.preventDefault();f[(idx+(e.shiftKey?-1:1)+f.length)%f.length].focus();
  }
});

/* ░░ REVEAL ON SCROLL ░░ */
const io=new IntersectionObserver((ents)=>{
  ents.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});
},{threshold:.12,rootMargin:'0px 0px -8% 0px'});
document.querySelectorAll('.reveal,.card').forEach(e=>io.observe(e));

/* ░░ COUNTERS ░░ */
const cio=new IntersectionObserver((ents)=>{
  ents.forEach(e=>{
    if(!e.isIntersecting)return;cio.unobserve(e.target);
    const el=e.target,target=+el.dataset.count;
    if(reduceMotion){el.textContent=target;return;}
    const t0=performance.now(),dur=1400;
    const run=now=>{const k=Math.min(1,(now-t0)/dur);el.textContent=Math.round(target*(1-Math.pow(1-k,3)));if(k<1)requestAnimationFrame(run);};
    requestAnimationFrame(run);
  });
},{threshold:.6});
document.querySelectorAll('.stat-num').forEach(e=>cio.observe(e));

/* ░░ NAV SCROLL + MISC ░░ */
const nav=document.getElementById('nav');
addEventListener('scroll',()=>nav.classList.toggle('scrolled',scrollY>40),{passive:true});
document.getElementById('yr').textContent=new Date().getFullYear();
const navLinks=document.querySelector('.nav-links');
const burger=document.getElementById('burger');
burger.addEventListener('click',()=>{
  const open=navLinks.classList.toggle('open');
  burger.setAttribute('aria-expanded',open);
});
navLinks.addEventListener('click',e=>{if(e.target.tagName==='A')navLinks.classList.remove('open');});
