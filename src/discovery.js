/* Completion-first / verification-second discovery layer */
"use strict";
(() => {
const D=window.NetorariaCatalog;if(!D) return;
const root=document.getElementById("catalog");if(!root) return;
const esc=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const sources=new Map(D.sources.map(s=>[s.id,s])),works=new Map(D.works.map(w=>[w.id,w]));
const all=D.discovery_candidates||[], taxonomy=D.taxonomy?.facets||[];
const viewable=all.filter(c=>c.display_status==="public-linked"||c.display_status==="candidate-public");
const hiddenCount=all.length-viewable.length;
const linkedDistinct=new Set(viewable.filter(x=>x.matched_work_id).map(x=>x.matched_work_id));
let tag="all",year="all",q="",focusId=null;
const excludedTags=new Set(); // Session-only preferences: no account, cookie, or browser storage.
const section=document.createElement("section");section.id="discovery";section.className="discovery-section";
const mount=document.getElementById("release-explorer")||document.getElementById("releases")||document.getElementById("chronology");
if(mount)mount.parentNode.insertBefore(section,mount);else root.parentNode.insertBefore(section,root.nextSibling);
const knownTags=["netorare","netori","netorase","cheating","infidelity","bss","jealousy","betrayal"];
const menu=knownTags.map(id=>taxonomy.find(t=>t.id===id)).filter(Boolean);
const hideMenu=[...menu,...["coercion","consensual-nonmonogamy"].map(id=>taxonomy.find(t=>t.id===id)).filter(Boolean)];
function trust(c){return c.matched_work_id?"Catalog-matched":"Discovery candidate"}
function allowed(c){return c.display_status==="public-linked"||c.display_status==="candidate-public"}
function fromSource(ids){return [...new Set(ids)].map(id=>sources.get(id)).filter(Boolean).map(x=>'<a href="'+esc(x.url)+'" target="_blank" rel="noopener noreferrer">'+esc(x.evidence)+': '+esc(x.title)+' ↗</a>').join("")}
function miniCover(c){const n=c.title.split(/\s+/).slice(0,2).join(" ");return '<div class="discovery-cover"><small>'+esc(c.year)+'/NETORARIA</small><strong>'+esc(n)+'</strong><span>Editorial title graphic · no commercial art</span></div>'}
function candidates(){
let filtered=viewable.filter(c=>(year==="all"||String(c.year)===year)&&(tag==="all"||c.candidate_tag_ids.includes(tag))&&!c.candidate_tag_ids.some(id=>excludedTags.has(id))&&[c.title,c.notes,c.tag_basis,works.get(c.matched_work_id)?.jp||""].join(" ").toLocaleLowerCase().includes(q.toLocaleLowerCase()));
return filtered.sort((a,b)=>Number(b.year)-Number(a.year)||a.title.localeCompare(b.title));
}
function shell(){
section.innerHTML='<div class="discovery-head"><div><div class="eyebrow">BREADTH FIRST · EVERY LEAD HAS A STATUS</div><h2>Discovery frontier</h2><p class="note">Find documented and emerging NTR/adjacent animation entries. A calendar mention is not proof of a genre, an original release, or a character biography.</p></div><span class="discovery-badge">BETA · 2025–2026</span></div><div class="discovery-kpis"><div><strong>'+all.length+'</strong><span>tracked leads</span></div><div><strong>'+linkedDistinct.size+'</strong><span>unique matched work IDs</span></div><div><strong>'+viewable.filter(c=>!c.matched_work_id).length+'</strong><span>visible provisional dossiers</span></div><div><strong>'+hiddenCount+'</strong><span>context-only / held</span></div></div><div class="discovery-selects"><input class="discovery-query" type="search" aria-label="Search discovered works" placeholder="Search title, alias, studio, subject…"><select class="discovery-year" aria-label="Discovery year"><option value="all">All years</option>'+ [...new Set(viewable.map(x=>x.year))].sort((a,b)=>b-a).map(y=>'<option value="'+y+'">'+y+'</option>').join('')+'</select><div class="discovery-facets" role="group" aria-label="Filter by relationship tag"></div></div><details class="reader-preferences"><summary>Hide themes in results <span class="excluded-count" aria-live="polite">0 excluded</span></summary><p>Choose which indexed themes you prefer not to see. This only affects the Discovery Frontier during this browsing session, and never changes archival records.</p><div class="reader-exclusions"></div><button type="button" class="button reader-reset">Clear hidden themes</button></details><p class="discovery-results"></p><div class="discovery-grid"></div><div class="discovery-detail" hidden aria-live="polite"></div><details class="discovery-method"><summary>How complete is the database?</summary><p>We distinguish titles discovered in outside calendars from those verified by original manufacturers. There is no defensible percentage of worldwide NTR coverage until we define and complete a reproducible source inventory.</p><div class="coverage-cards">'+D.coverage_objectives.map(x=>'<div><strong>'+esc(x.title)+'</strong><span>'+esc(x.status)+'</span><small>'+esc(x.notes)+'</small></div>').join("")+'</div><p>UnderHentai’s separate Netorare and Netori genre links are visible in its menu, but their individual catalogs could not be reliably retrieved during this audit. Neither membership nor totals are invented.</p><h4>Relationship vocabulary</h4><div class="discovery-definitions">'+taxonomy.filter(t=>["viewpoint","relationship-agreement","relationship-event","relationship-stage"].includes(t.axis)).map(t=>'<div><b>'+esc(t.label)+(t.ja?" / "+esc(t.ja):"")+'</b><p>'+esc(t.note)+'</p></div>').join("")+'</div></details>';
const tags=section.querySelector(".discovery-facets");tags.innerHTML='<button type="button" class="facet on" data-facet="all">All leads</button>'+menu.map(t=>'<button type="button" class="facet" data-facet="'+esc(t.id)+'">'+esc(t.label)+'</button>').join("");
tags.querySelectorAll("[data-facet]").forEach(b=>b.onclick=()=>{tag=b.dataset.facet;tags.querySelectorAll(".facet").forEach(el=>el.classList.toggle("on",el===b));render()});
const excludeControl=section.querySelector(".reader-exclusions");
excludeControl.innerHTML=hideMenu.map(t=>'<label class="reader-choice"><input type="checkbox" data-excluded-tag="'+esc(t.id)+'"><span>'+esc(t.label)+'</span></label>').join("");
excludeControl.querySelectorAll("input[data-excluded-tag]").forEach(input=>input.onchange=()=>{if(input.checked)excludedTags.add(input.dataset.excludedTag);else excludedTags.delete(input.dataset.excludedTag);render()});
section.querySelector(".reader-reset").onclick=()=>{excludedTags.clear();excludeControl.querySelectorAll("input").forEach(input=>input.checked=false);render()};
section.querySelector(".discovery-year").onchange=e=>{year=e.target.value;render()};section.querySelector(".discovery-query").oninput=e=>{q=e.target.value;render()};
render()
}
function render(){
const hits=candidates(), list=section.querySelector(".discovery-grid");
section.querySelector(".excluded-count").textContent=excludedTags.size+" excluded";
section.querySelector(".discovery-results").textContent=hits.length+" matching discovery records. Tags shown here are research candidates, not necessarily verified publisher classifications.";
list.innerHTML=hits.length?hits.map(c=>'<button type="button" class="discovery-card" data-candidate="'+esc(c.id)+'" aria-label="Open research status of '+esc(c.title)+'">'+miniCover(c)+'<div class="discovery-card-body"><div class="discovery-card-kind">'+esc(trust(c))+' · '+esc(c.year)+'</div><strong>'+esc(c.title)+'</strong><div class="discovery-chips">'+(c.candidate_tag_ids.map(id=>'<span>'+esc(taxonomy.find(t=>t.id===id)?.label||id)+'</span>').join("")||'<span>Genre unclassified</span>')+'</div><p>'+esc(c.episode_hints[0]||"Release date unresolved")+'</p></div></button>').join(""):'<div class="empty">No entries in this evidence/status category. An empty Netori list means no *verified index membership yet*, not that no such anime exists.</div>';
list.querySelectorAll("[data-candidate]").forEach(b=>b.onclick=()=>show(b.dataset.candidate));
}
function show(id){
const c=all.find(x=>x.id===id);if(!c||!allowed(c))return;
focusId=id;const target=section.querySelector(".discovery-detail");
const approved=!!c.matched_work_id&&works.get(c.matched_work_id)?.visibility==="public";
target.hidden=false;
const stage=approved?"Linked to verified research record":"Discovery only · still needs independent checks";
const upcoming=c.episode_hints.some(x=>/2026-1[0-2]-/.test(x)&&!x.startsWith("2026-10-13"))||c.episode_hints.some(x=>x.includes("future"));
target.innerHTML='<div class="discovery-detail-head"><span class="eyebrow">'+esc(stage)+'</span><button class="button" type="button" data-close>× Close</button></div><h3>'+esc(c.title)+'</h3><p>'+esc(c.notes)+'</p><div class="discovery-evidence"><div><b>Discovery year</b><span>'+esc(c.year)+'</span></div><div><b>Research stage</b><span>'+esc(c.stage)+'</span></div><div><b>Genre basis</b><span>'+esc(c.tag_basis)+'</span></div><div><b>Episode/date hints</b><span>'+c.episode_hints.map(esc).join(" · ")+'</span></div><div><b>Rights</b><span>None of the original cover images have been cleared.</span></div></div><p class="muted">Do not treat an external episode calendar as a manufacturer-confirmed release. Entries dated after 13 October 2026 are future listings, not released episodes.</p><h4>Textual bibliographic sources</h4><div class="discovery-citations">'+fromSource(c.source_ids.filter(id=>!["S49","S63"].includes(id)))+'</div>'+ (approved?'<button type="button" class="button discovery-to-series">Open catalog series ↗</button>':'<div class="discovery-unverified">This is a neutral provisional bibliographic stub, not an endorsed/recommended release.</div>');
target.querySelector("[data-close]").onclick=()=>{target.hidden=true;focusId=null};
const jump=target.querySelector(".discovery-to-series");if(jump)jump.onclick=()=>{if(typeof openWork==="function")openWork(c.matched_work_id)};
target.scrollIntoView({behavior:"smooth",block:"start"})
}
shell();
const desktop=document.querySelector(".topnav");if(desktop){const a=document.createElement("a");a.href="#discovery";a.textContent="Discover";desktop.appendChild(a)}
const mobile=document.querySelector(".mobilebar");if(mobile){mobile.innerHTML='<a href="#home"><span>⌂</span>Home</a><a href="#catalog"><span>▦</span>Series</a><a href="#discovery"><span>⌕</span>Discover</a><a href="#studios"><span>◈</span>Studios</a><a href="#release-explorer"><span>◷</span>Releases</a>'}
})();
