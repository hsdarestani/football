import {players} from './data.js?v=22';
import {badge,icon} from './components.js?v=22';

const metric=(label,value,target,suffix='')=>`<div class="spot-stat"><small>${label}</small><strong data-counter="${target}" data-suffix="${suffix}">0${suffix}</strong><span>${value}</span></div>`;

export function playerSpotlight(playerId){
 const p=players.find(x=>x.id===playerId)||players[0];
 const market=parseFloat(String(p.value).replace(',','.'))||0;
 const availability=parseInt(p.availability,10)||0;
 return `<div class="spotlight-backdrop" data-close-spotlight><section class="spotlight-shell" role="dialog" aria-modal="true" aria-label="Player Spotlight ${p.name}">
  <button class="spotlight-close" data-close-spotlight aria-label="Schließen">${icon('x')}</button>
  <div class="spotlight-media">
   <div class="spotlight-beam beam-a"></div><div class="spotlight-beam beam-b"></div><div class="spotlight-field"></div>
   <img src="${p.image}" alt="${p.name}" referrerpolicy="no-referrer" loading="eager">
   <div class="spotlight-number">${String(p.number).padStart(2,'0')}</div>
   <div class="spotlight-player-tag"><i></i><span>A+ PLAYER SPOTLIGHT</span></div>
  </div>
  <div class="spotlight-copy">
   <div class="spotlight-top">${badge('Spielerprofil','green')}<span>${p.club}</span></div>
   <h2>${p.name}</h2><p class="spotlight-role">${p.position} · #${p.number} · ${p.nation}</p>
   <div class="spotlight-stats">${metric('Marktwert',p.value,market,' Mio. €')}${metric('Leistungswert',p.rating,p.rating,'')}${metric('Verfügbarkeit',p.availability,availability,' %')}</div>
   <div class="spotlight-facts"><div><small>Vertrag bis</small><b>${p.contract}</b></div><div><small>Aktueller Verein</small><b>${p.club}</b></div><div><small>Position</small><b>${p.position}</b></div></div>
   <div class="spotlight-note"><span>${icon('performance')}</span><div><small>Aktueller Fokus</small><b>Vereinsgespräch, Leistungsentwicklung und persönliche Karriereplanung.</b></div></div>
   <div class="spotlight-actions"><button class="btn primary" data-spotlight-profile="${p.id}">${icon('players')} Profil öffnen</button><button class="btn" data-demo-action="Nachricht an ${p.name}">${icon('messages')} Nachricht</button><button class="btn" data-demo-action="Dokumente von ${p.name}">${icon('docs')} Dokumente</button></div>
  </div>
 </section></div>`;
}

export function animateSpotlight(root){
 root.querySelectorAll('[data-counter]').forEach(el=>{
  const target=Number(el.dataset.counter)||0,suffix=el.dataset.suffix||'',decimal=String(target).includes('.');let start=0;const duration=850,begin=performance.now();
  const tick=now=>{const progress=Math.min((now-begin)/duration,1),ease=1-Math.pow(1-progress,3),value=start+(target-start)*ease;el.textContent=`${decimal?value.toFixed(1).replace('.',','):Math.round(value)}${suffix}`;if(progress<1)requestAnimationFrame(tick)};requestAnimationFrame(tick);
 });
}