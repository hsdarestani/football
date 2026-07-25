import {icon} from './icons.js';
export const logo=()=>`<div class="aplus-logo"><div class="aplus-mark"><b>A+</b></div><div class="aplus-copy"><b>A+ SOLUTION</b><small>GMBH · FOOTBALL SUITE</small></div></div>`;
export const avatar=p=>`<div class="avatar" style="background-image:url('${p.image}')"></div>`;
export const badge=(text,color='')=>`<span class="badge ${color}">${text}</span>`;
export const pageHead=(title,sub,actions='')=>`<div class="page-head"><div><div class="eyebrow">A+ Solution GmbH · White-Label Demo</div><h1>${title}</h1><p>${sub}</p></div><div class="page-actions">${actions}</div></div>`;
export const moduleCard=m=>`<button class="module-card card" data-route="${m.id}"><div class="module-top"><span class="icon-wrap">${icon(m.icon)}</span><span class="module-count">${String(m.order||1).padStart(2,'0')}</span></div><div><h3>${m.title}</h3><p>${m.desc}</p></div></button>`;
export const table=(heads,rows)=>`<div class="table-shell"><table><thead><tr>${heads.map(h=>`<th>${h}</th>`).join('')}</tr></thead><tbody>${rows.map(r=>`<tr>${r.map((c,i)=>`<td>${i===2?badge(c,c==='Reha'||c==='Vertraulich'?'red':c==='Signiert'||c==='Gültig'||c==='Einsatzbereit'||c==='Abgeschlossen'?'green':'amber'):c}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
export const modal=(title,body,foot='')=>`<div class="modal-backdrop" data-close-overlay><section class="modal"><div class="modal-head"><div><div class="eyebrow">Demo-Ansicht</div><h3>${title}</h3></div><button class="btn icon" data-close-overlay>${icon('x')}</button></div><div class="modal-body">${body}</div>${foot?`<div class="modal-foot">${foot}</div>`:''}</section></div>`;
export {icon};
