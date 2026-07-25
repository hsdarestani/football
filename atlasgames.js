(()=>{
  const logoMarkup=`<div class="ag-wordmark"><svg viewBox="0 0 100 70" aria-label="Atlasgames"><path d="M6 61 31 8h17L24 61H6Zm34 0L58 22l8 18H52l-9 21h-3Z" fill="currentColor"/><path d="M57 10h37v13H72c-8 0-13 5-13 13s5 13 13 13h9V39H69V28h26v33H72c-17 0-29-10-29-25S55 10 72 10H57Z" fill="currentColor"/></svg><div class="ag-wordmark__copy"><b>ATLASGAMES</b><small>MANAGEMENT</small></div></div>`;
  const replacements=[
    [/NEXUS XI/gi,'ATLASGAMES'],[/NEXUS/gi,'ATLASGAMES'],[/APEX XI/gi,'ATLASGAMES'],
    [/PLAYER MANAGEMENT OS/gi,'FOOTBALL MANAGEMENT OS'],[/PLAYER MANAGEMENT/gi,'ATLASGAMES MANAGEMENT']
  ];
  const patchText=root=>{
    const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,{acceptNode:n=>n.parentElement&&/^(SCRIPT|STYLE|TEXTAREA|INPUT|OPTION)$/.test(n.parentElement.tagName)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT});
    const nodes=[];while(walker.nextNode())nodes.push(walker.currentNode);
    nodes.forEach(node=>{let v=node.nodeValue;replacements.forEach(([a,b])=>v=v.replace(a,b));if(v!==node.nodeValue)node.nodeValue=v});
  };
  const patchBrand=()=>{
    document.title='Atlasgames Management — Football Operations';
    let meta=document.querySelector('meta[name="description"]');if(meta)meta.content='Die digitale Kommandozentrale von Atlasgames Management für Spieler, Transfers, Kommunikation und Performance.';
    patchText(document.body);
    document.querySelectorAll('.brand,.side-logo,.side .side-logo').forEach(el=>{if(!el.querySelector('.ag-wordmark'))el.innerHTML=logoMarkup});
    const hero=document.querySelector('.hero');
    if(hero){
      const h1=hero.querySelector('h1');if(h1&&!h1.dataset.ag){h1.innerHTML='THE GAME<br><em>BEYOND</em><br>THE PITCH.';h1.dataset.ag='1'}
      const lead=hero.querySelector('.lead');if(lead&&!lead.dataset.ag){lead.textContent='Die digitale Kommandozentrale von Atlasgames Management. Spieler, Verträge, Transfers, Kommunikation, Reisen, Performance und Partnerschaften — sicher an einem Ort.';lead.dataset.ag='1'}
      const primary=[...hero.querySelectorAll('button')].find(b=>b.classList.contains('primary'));if(primary)primary.textContent='Management Command Center';
    }
    const playerName=document.querySelector('.id-name h3');if(playerName)playerName.textContent='Younes Ebnoutalib';
    const playerNo=document.querySelector('.number');if(playerNo)playerNo.textContent='11';
    const topTitle=document.querySelector('.top-title small');if(topTitle)topTitle.textContent='ATLASGAMES MANAGEMENT';
    document.querySelectorAll('.roster-info h3').forEach((el,i)=>{if(i===0)el.textContent='Younes Ebnoutalib';if(i===1)el.textContent='Dickson Abiama'});
    const content=document.querySelector('.content');
    if(content&&!content.querySelector('.ag-brand-rail')){
      const rail=document.createElement('div');rail.className='ag-brand-rail';rail.innerHTML=`<b>ATLASGAMES · FOOTBALL OPERATIONS</b><div class="ag-brand-rail__line"></div><span>Football. Career. Legacy.</span><a class="ag-social-link" href="https://www.instagram.com/atlasgames_mgmt/" target="_blank" rel="noreferrer">Instagram ↗</a>`;content.prepend(rail)
    }
    document.querySelectorAll('input').forEach(i=>{if(/nexus|apex/i.test(i.value))i.value=i.value.replace(/nexus|apex/gi,'atlasgames')});
  };
  let queued=false;const schedule=()=>{if(queued)return;queued=true;requestAnimationFrame(()=>{queued=false;patchBrand()})};
  new MutationObserver(schedule).observe(document.documentElement,{subtree:true,childList:true,characterData:false});
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',patchBrand);else patchBrand();
})();
