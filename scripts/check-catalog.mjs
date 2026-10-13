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
const html=readFileSync("index.html","utf8");assert.ok(html.includes("src/catalog.js")&&html.indexOf("src/catalog.js")<html.indexOf("src/app.js"));
console.log("Validated",C.works.length,"works,",C.releases.length,"release/edition records,",C.sources.length,"sources,",C.chronology.length,"timeline nodes.");
