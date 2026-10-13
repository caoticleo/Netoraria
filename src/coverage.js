/* Source inventory and publication-state board */
"use strict";
(() => {
 const C=window.NetorariaCatalog; if(!C)return;
 const after=document.getElementById("discovery")||document.getElementById("release-explorer");if(!after)return;
 const sources=new Map(C.sources.map(s=>[s.id,s])), works=new Map(C.works.map(w=>[w.id,w]));
 const esc=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
 const list=C.source_observations||[];
 const src=id=>sources.get(id);
 const board=document.createElement("section");board.id="coverage";board.className="coverage-section";
 board.innerHTML='<div class="eyebrow">EDITORIAL TRANSPARENCY</div><h2>What has actually been checked?</h2><p class="note">Our source observations record exactly which portions of external publisher catalogs were inspected. A publisher’s entire catalog is NOT an NTR catalog, and page checks are NOT a percentage of genre coverage.</p><div class="coverage-pills"><div><b>'+list.length+'</b><small>inspected source windows</small></div><div><b>'+list.reduce((n,x)=>n+x.observed_items,0)+'</b><small>observed publisher-list entries, all genres</small></div><div><b>'+C.works.filter(w=>w.visibility==="public"&&w.media.includes("OVA")).length+'</b><small>publicly browsable series records</small></div></div><div class="source-windows"></div><div class="source-review-note"><b>Discovery is not proof.</b> An indexed 2026 release date may mean a new episode, reissue, translation, upload or future listing. Public pages separate those statuses and preserve original creator credits where independently known.</div>';
 after.parentNode.insertBefore(board,after.nextSibling);
 const windows=board.querySelector(".source-windows");
 windows.innerHTML=list.map(w=>{const s=src(w.source_id);return '<article class="source-window"><div class="source-window-top"><span class="eyebrow">SOURCE SAMPLE</span><span class="sample-pill">Partial window</span></div><h3>'+esc(w.source_scope)+'</h3><div class="source-window-count"><strong>'+esc(w.observed_items)+'</strong><span>list items observed</span></div><p>'+esc(w.notes)+'</p><div class="source-window-bottom"><time>'+esc(w.as_of)+'</time>'+(s?'<a href="'+esc(s.url)+'" target="_blank" rel="noopener noreferrer">Source page ↗</a>':"")+'</div></article>'}).join("");
 const nav=document.querySelector(".topnav");if(nav){const link=document.createElement("a");link.href="#coverage";link.textContent="Coverage";nav.appendChild(link)}
})();
