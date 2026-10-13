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

const snapshot=readFileSync("src/catalog.js","utf8").trim();assert.ok(snapshot.startsWith("window.NetorariaCatalog = "),"client data wrapper missing");const mirrored=JSON.parse(snapshot.slice("window.NetorariaCatalog = ".length).replace(/;$/,""));assert.deepEqual(mirrored,C,"client-side catalog snapshot is out of sync");
const html=readFileSync("index.html","utf8");assert.ok(html.includes("src/catalog.js")&&html.indexOf("src/catalog.js")<html.indexOf("src/app.js"));
console.log("Validated",C.works.length,"works,",C.releases.length,"release/edition records,",C.sources.length,"sources,",C.chronology.length,"timeline nodes,",C.organizations.length,"organizations,",C.creators.length,"artists,",C.credits.length,"verified credit edges.");
