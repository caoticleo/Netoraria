import {readFileSync} from "node:fs";import assert from "node:assert/strict";
const C=JSON.parse(readFileSync("data/catalog.json","utf8"));
const unique=(xs,name)=>assert.equal(new Set(xs).size,xs.length,"duplicate "+name);
unique(C.works.map(w=>w.id),"work ids");unique(C.releases.map(r=>r.id),"release ids");unique(C.sources.map(s=>s.id),"source ids");unique(C.chronology.map(t=>t.id),"chronology ids");
const works=new Map(C.works.map(w=>[w.id,w])),sources=new Set(C.sources.map(s=>s.id));
for(const w of C.works){assert.ok(w.title&&w.visibility&&w.source_ids.length);for(const id of w.source_ids)assert.ok(sources.has(id),"invalid work source "+id);}
for(const r of C.releases){assert.ok(works.has(r.work_id),"orphan release");assert.match(r.date,/^\d{4}-\d{2}-\d{2}$/);assert.ok(r.source_ids.length);for(const id of r.source_ids)assert.ok(sources.has(id),"invalid release source "+id);if(r.date>C.meta.as_of)assert.equal(r.status,"scheduled");}
for(const t of C.chronology)assert.ok(sources.has(t.source_id),"orphan chronology citation");
for(const s of C.sources){assert.match(s.url,/^https:\/\//);assert.ok(["primary","retailer","community","secondary"].includes(s.evidence));}
assert.ok(C.works.some(w=>w.visibility==="restricted-context"),"missing restricted context records");
assert.ok(C.releases.some(r=>r.type==="compilation"),"compilation distinction missing");
assert.ok(C.releases.some(r=>r.type==="original_ova"),"original episode distinction missing");
assert.ok(C.releases.filter(r=>r.date.startsWith("2026")).length>=5);

const orgs=new Map(C.organizations.map(o=>[o.id,o])),creators=new Map(C.creators.map(p=>[p.id,p]));
unique([...orgs.keys()],"organization ids");unique([...creators.keys()],"creator ids");
assert.equal(orgs.size,C.organizations.length);assert.equal(creators.size,C.creators.length);
for(const e of [...C.organizations,...C.creators]){assert.ok(e.name&&e.summary&&e.source_ids?.length,"unsourced org/creator");for(const id of e.source_ids)assert.ok(sources.has(id),"unknown profile source "+id);}
unique(C.credits.map(x=>[x.work_id,x.entity_type,x.entity_id,x.role].join("|")),"credit edges");
for(const edge of C.credits){assert.ok(works.has(edge.work_id),"orphan credit work");assert.ok(edge.source_ids.length,"unattributed credit");for(const id of edge.source_ids)assert.ok(sources.has(id),"unknown credit source");
if(edge.entity_type==="organization")assert.ok(orgs.has(edge.entity_id),"unknown org "+edge.entity_id);else if(edge.entity_type==="creator")assert.ok(creators.has(edge.entity_id),"unknown creator "+edge.entity_id);else assert.fail("unexpected entity_type");}
for(const w of C.works){if(w.original?.source_ids)for(const id of w.original.source_ids)assert.ok(sources.has(id),"unknown origin citation");}
assert.ok(C.credits.some(c=>c.work_id==="W-KGB"&&c.entity_id==="ORG-TREX"&&c.role==="animation_production"));
assert.ok(C.credits.some(c=>c.work_id==="W-NS"&&c.entity_id==="CR-KUROZU"&&c.role==="original_artist"));


const relationIDs=C.relations.map(r=>r.id);unique(relationIDs,"relation IDs");
for(const r of C.relations){
 assert.ok(works.has(r.from_work_id)&&works.has(r.to_work_id),"orphan cross-media relation");
 assert.notEqual(r.from_work_id,r.to_work_id,"self relation");
 assert.equal(r.relation,"shared_original_artist","cannot imply unverified adaptation");
 assert.ok(creators.has(r.creator_id),"relation creator missing");
 for(const id of r.source_ids)assert.ok(sources.has(id),"unsourced relation");
 const a=C.credits.some(e=>e.work_id===r.from_work_id&&e.entity_id===r.creator_id&&e.role==="original_artist");
 const b=C.credits.some(e=>e.work_id===r.to_work_id&&e.entity_id===r.creator_id&&e.role==="original_artist");
 assert.ok(a&&b,"artist must be independently credited to BOTH works");
}
for(const w of C.works)for(const ch of w.characters||[]){
 if(ch.age_confidence){assert.ok(Number.isInteger(ch.age)&&ch.age>=18,"age assertions require explicit adult age");for(const id of ch.source_ids||[])assert.ok(sources.has(id),"unknown age source");}
}
const goldBear=C.releases.filter(r=>r.work_id==="W-KEDAMONO");
assert.equal(goldBear.length,2,"DVD and Blu-ray should be separate editions");
assert.ok(goldBear.every(r=>r.type==="compilation"&&r.date==="2026-01-30"),"compilation reissued, not original OVAs");
assert.equal(C.works.find(w=>w.id==="W-KEDAMONO").visibility,"context-only","unverified historical age content cannot be promoted");
const referenced=new Set(C.credits.filter(c=>c.work_id==="W-NETORAREIYA").map(x=>x.entity_id));
assert.ok(referenced.has("CR-MINAMOTO")&&referenced.has("ORG-TEAMBITTERS"),"2025 original game provenance missing");


/* v0.7 third-party leads must never manufacture series or episode identities */
const franchises=C.franchise_links||[],leadList=C.research_leads||[];
unique(franchises.map(x=>x.id),"franchise link IDs");
unique(leadList.map(x=>x.id),"research lead IDs");
for(const f of franchises){
 assert.ok(works.has(f.from_work_id)&&works.has(f.to_work_id)&&f.from_work_id!==f.to_work_id,"franchise relation invalid");
 assert.equal(f.type,"sequel","franchise link has unknown type");
 for(const sid of f.source_ids)assert.ok(sources.has(sid),"franchise citation missing");
}
for(const lead of leadList){assert.ok(lead.title&&lead.reason&&lead.source_ids.length);for(const sid of lead.source_ids)assert.ok(sources.has(sid),"unattributed source lead");}
for(const w of C.works){if(w.aliases){unique(w.aliases,"aliases in "+w.id);assert.ok(w.aliases.every(a=>typeof a==="string"&&a.length>0));}}
assert.equal(C.works.find(w=>w.id==="W-KANOCHI").visibility,"restricted-context","age-uncertain family work cannot be a public recommendation");
const queen25=C.releases.filter(r=>r.work_id==="W-BAKUNYU").sort((a,b)=>a.date.localeCompare(b.date));
assert.deepEqual(queen25.map(r=>[r.date,r.sku,r.type,r.confidence]),[
 ["2025-09-12","QNB-M163","original_ova","publisher"],
 ["2025-10-10","QNB-M165","original_ova","publisher"]
],"manufacturer SKU/date mismatch for two original Queen Bee OVAs");
const merry=C.releases.filter(r=>r.work_id==="W-AKOGARE").sort((a,b)=>a.date.localeCompare(b.date));
assert.deepEqual(merry.map(r=>[r.date,r.sku,r.confidence]),[
 ["2025-04-04","MJAD-395","retailer"],
 ["2025-06-06","MJAD-399","retailer"]
],"Merry Jane original episodes mistyped");
assert.equal(C.works.filter(w=>w.id==="W-NS").length,1,"Natsu Zuma must be an alias not a second series");
assert.ok(C.works.find(w=>w.id==="W-NS").aliases.includes("Natsu Zuma"));
assert.ok(C.works.find(w=>w.id==="W-KGB").aliases.some(a=>a.includes("episode")),"episode color aliases require review");
assert.ok(C.credits.some(c=>c.work_id==="W-BAKUNYU"&&c.entity_id==="ORG-QUEEN"&&c.role==="release_label"));
assert.ok(C.credits.some(c=>c.work_id==="W-BAKUNYU"&&c.entity_id==="CR-GAGARIN"&&c.role==="original_artist"));


/* Completion-first pipeline: records, normalized tag vocabulary, and source inventory */
const facets=new Map(C.taxonomy.facets.map(t=>[t.id,t]));
unique([...facets.keys()],"taxonomy facet ids");
assert.ok(facets.has("netorare")&&facets.has("netori")&&facets.has("netorase"),"missing fundamental genre distinctions");
assert.notEqual(facets.get("netorare").axis,facets.get("cheating").axis,"viewpoint tag must not equal relationship event");
for(const mapping of C.taxonomy.external_mappings){
 assert.ok(facets.has(mapping.facet_id),"unrecognized external taxonomy mapping");
 for(const id of mapping.source_ids)assert.ok(sources.has(id),"unverified external tag source "+id);
 if(mapping.platform==="UnderHentai")assert.equal(mapping.genre_page_verified,false,"genre URL not independently accessible");
}
unique(C.discovery_candidates.map(x=>x.id),"discovery candidate ids");
const allowedStatuses=new Set(["public-linked","candidate-public","internal-review","context-only"]);
for(const x of C.discovery_candidates){
 assert.ok(x.title&&Number.isInteger(x.year)&&x.source_ids.length,"incomplete discovery record");
 assert.ok(allowedStatuses.has(x.display_status),"illegal discovery status "+x.id);
 for(const id of x.source_ids)assert.ok(sources.has(id),"orphan discovery source "+x.id+": "+id);
 for(const id of x.candidate_tag_ids)assert.ok(facets.has(id),"unknown candidate tag "+id);
 if(x.matched_work_id)assert.ok(works.has(x.matched_work_id),"orphan normalized canonical work");
 assert.ok(!x.episode_hints.some(v=>!String(v).trim()),"blank episode date hint");
 if(x.age_context==="school-age-framing"||x.age_context==="age-uncertain-family")assert.equal(x.display_status,"context-only","age-sensitive discovery leak: "+x.id);
 if(x.display_status==="candidate-public")assert.ok(x.age_context==="adult-spouse-context","provisional public entry must be clearly adult-context: "+x.id);
 assert.ok(x.artwork_status.includes("no licensed image"),"copyright-provenance of candidate art missing");
}
unique(C.coverage_objectives.map(x=>x.id),"coverage objective ids");
for(const obj of C.coverage_objectives){assert.ok(["blocked","incomplete"].includes(obj.status),"unsupported completeness claim");for(const id of obj.source_ids)assert.ok(sources.has(id),"unlinked coverage source");}
for(const id of ["cov-netorare-genre","cov-netori-genre"])assert.equal(C.coverage_objectives.find(x=>x.id===id)?.status,"blocked","cannot claim inaccessible genre corpus complete");
assert.ok(C.discovery_candidates.length>=15,"insufficient breadth-first discovery sample");
assert.ok(C.discovery_candidates.filter(x=>x.matched_work_id).length>=8,"loss of canonical alias matches");


/* v0.9: source-window integrity and release deduplication */
unique(C.source_observations.map(x=>x.id),"publisher observation IDs");
for(const o of C.source_observations){
 assert.ok(sources.has(o.source_id),"orphan source inventory "+o.id);
 assert.ok(o.observed_items>0&&Number.isInteger(o.observed_items),"source window must be nonzero observed count");
 assert.equal(o.complete,false,"cannot mark sampled external catalog window complete");
 assert.match(o.as_of,/^\d{4}-\d{2}-\d{2}$/,"observation date");
 if(o.full_catalog_total_displayed!=null)assert.ok(o.full_catalog_total_displayed>=o.observed_items,"source catalog denominator suspicious");
}
const v2019=works.get("W-YUE");assert.ok(v2019&&v2019.visibility==="public"&&v2019.year===2019,"missing 2019 public wiki series");
const yue=C.releases.filter(r=>r.work_id==="W-YUE").sort((a,b)=>a.date.localeCompare(b.date));
assert.deepEqual(yue.map(x=>[x.date,x.sku,x.type,x.confidence]),[["2019-02-22","QNB-M058","original_ova","retailer"],["2019-04-12","QNB-M061","original_ova","retailer"]],"2019 Queen Bee SKU mismatch");
const sequel=C.releases.find(x=>x.id==="R26-05");
assert.ok(sequel&&sequel.sku==="QNB-M190"&&sequel.type==="original_ova"&&sequel.confidence==="publisher","2026 manufacturer sequel status inaccurate");
const skuIndex=new Map();
for(const r of C.releases){if(!r.sku)continue;const key=(r.confidence==="publisher"?"official:":"listed:")+r.sku;if(skuIndex.has(key))assert.fail("two release records reuse product identity "+key);skuIndex.set(key,r.id)}
for(const x of C.discovery_candidates){
 if(x.same_as_candidate_id){const other=C.discovery_candidates.find(y=>y.id===x.same_as_candidate_id);assert.ok(other&&other.id!==x.id,"alias candidate missing");}
}
assert.ok(C.discovery_candidates.some(x=>x.year===2019&&x.matched_work_id==="W-YUE"),"pre-2025 discovery frontier not backfilled");

const snapshot=readFileSync("src/catalog.js","utf8").trim();assert.ok(snapshot.startsWith("window.NetorariaCatalog = "),"client data wrapper missing");const mirrored=JSON.parse(snapshot.slice("window.NetorariaCatalog = ".length).replace(/;$/,""));assert.deepEqual(mirrored,C,"client-side catalog snapshot is out of sync");
const html=readFileSync("index.html","utf8");assert.ok(html.includes("src/lineage.js")&&html.includes("src/lineage.css"),"release explorer not loaded");assert.ok(html.includes("src/discovery.js")&&html.includes("src/discovery.css"),"discovery explorer not loaded");assert.ok(html.includes("src/coverage.js")&&html.includes("src/coverage.css"),"source coverage board not loaded");assert.ok(html.includes("src/catalog.js")&&html.indexOf("src/catalog.js")<html.indexOf("src/app.js"));
console.log("Validated",C.works.length,"works,",C.releases.length,"release/edition records,",C.sources.length,"sources,",C.chronology.length,"timeline nodes,",C.organizations.length,"organizations,",C.creators.length,"artists,",C.credits.length,"verified credit edges.");
