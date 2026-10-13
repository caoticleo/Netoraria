# Netoraria Competitive Intelligence · NTRDB (Oct 13, 2026)
**Status:** manually reviewed public pages; not a dataset clone.  
**Reference:** https://vocesabianime.com/en/ntr-database-netorare-anime-games/  
**Competitor:** https://ntrdb.com/ — Hangover Cat Purrroduction.

## Executive finding

NTRDB has a major head start in **horizontal breadth and community product functionality**. Its website currently displays 20,351 work entries across media, 8,000 characters, 5,963 producer/circle profiles, 982 work tags, 150 public lists, and 13 public proposals. The October 2026 calendar displays 211 entries **across mixed formats and update types**, not 211 original animated OVAs. Its sale page reports 2,669 marketplace results. These are *provider-displayed, changing public counts*, not independent audits or proof that entries are all unique or genuinely NTR.

**Netoraria has 16 cataloged work-level records on the v0.9 branch**, some non-animation, contextual or restricted. We cannot pretend to compete on raw catalog volume today. The correct near-term wedge is a **high-quality, mobile-first, source-audited animation-specific wiki**, strong at episode and edition identity, Japanese title reconciliation, creator/source-material genealogy and calendar evidence—with broad *candidate* discovery kept separate from verified works.

## Legal/data-access finding — a hard gate, not a technical obstacle

NTRDB Terms (last updated April 2026): https://ntrdb.com/terms **§4 prohibits scraping, mirroring or systematically copying the database without permission**. Its user-uploaded data and covers are not an open licensed dataset. Its content policy: https://ntrdb.com/content-policy says they do not host original videos; they moderate records and covers before publication, exclude imagery portraying minors in sexual contexts, and link to official sources only. We should NOT circumvent access controls, imitate an API, run a bulk crawler, extract all 20k titles / 982 terms / 8k biographies / user ratings, or hotlink/republish proprietary images. The acceptable research performed here consists of reading the public pages and *originally summarizing factual capabilities and very small illustrative examples*. Any systematic data reuse requires NTRDB operator consent or a suitable separate license.

**Recommended outreach (not sent):** ask Hangover Cat Purrroduction whether they offer a permissioned, attribution-required export of non-graphic anime identifiers/title aliases (title, source URL, external ID, release medium) and a right to cache periodic changes, with explicit limitations on community prose, user data, image licenses, rate limits and removal requests. Ask about collaboration/link-out rather than assuming an adversarial relationship. If declined, follow Japanese publishers and legal independent catalog sources. NTRDB's prohibition remains binding regardless of technical accessibility.

## Competitive feature matrix: actual public evidence

Structured, source-linked 21-feature benchmark is in `data/competitive-benchmark-2026-10.json`. The matrix here groups capability themes rather than reproducing the site's UI, submissions or tag list.

| Domain | NTRDB observed | Netoraria v0.9 | What to do |
| --- | --- | --- | --- |
| Media | VNs, games, doujinshi, manga/illustrations, novels, voiced/audio, animated works | Wiki currently animated works first + some original games | Own **animation-first** focus; later link other formats |
| Volume | 20,351 all-format entries | 16 work-level items, not all publicly eligible | Publisher-led breadth expansion; report actual animation-only denominator |
| People | 8,000 character, 5,963 producer/circle entries | Early studio and artist credit graph | Roles and citations at episode/work level, history timelines |
| Search | Format, subtype, language, translation quality, NTR category, subgenre, status, year, hidden filters | Search, year, starter taxonomy | Faceted search + shareable permalinks |
| Taxonomy | 982 work tags: 35 Sub-genre, 82 Means, 414 Content, 140 Technical, 298 Setting, 13 Outcome | 12 authored non-graphic conceptual facets | Own independent **orthogonal** viewpoint / agreement / motive / consent / narrative outcome / technology / setting hierarchy |
| Personal control | Tag blacklist; spoiler-hidden screenshots and character roles | No session preference before this branch | **Added session-only exclusion** to Discovery; add spoiler-level data marking and no-user-data privacy |
| Calendar | Release/upcoming/update types, month view, 211 entries in October snapshot | Verified originals and editions, timeline | Real date grid with release status, sources, timezone and reissues distinguished |
| Character profiles | Roles, aliases, tags, ratings | Sparse sourced bios | Link character→media→episode with age certainty and coercion-vs-choice attribution |
| Titles | Product IDs, original date, language, edition, duration, developer, external legal store links, AniList | Some titles, sources and SKUs | Field-level source + confidence and correction log |
| Recommendations | Similar works and author suggestions | Credited-work graph | Deterministic source/creator graph; adult-safe, explain why |
| Reviews | Scores, intensity votes, reviews, follows and reactions | Not built | Moderated ratings and editorial/community distinction later |
| Lists | 150, formats Collection / Ranked / Tier List / Grid; works/characters/creators | Not built | Local private collections first; social review later |
| Suggestions | 13 publicly visible proposals, type/status/voting, moderator decisions | GitHub issues | Transparent editorial correction requests before full social |
| Gamification | Levels, points, coins, achievements, mascot outfits/wallpapers | Long-term quests only | **Do not replicate exploitation incentive:** reward citation fixes, corrections, high-quality reviews and literacy quests |
| Publisher/creator participation | Claim developer page, follow, staff profiles, developer feed | Absent | Rights and identity attestation, creator relations after moderation |
| Multilingual | English and Japanese, translated other languages claimed in May announcement | English UI, Japanese titles; PT-BR planned | PT-BR, EN, Japanese, transliteration-aware search |
| External links / commerce | Official stores, AniList and store discounts | First-party citations | Legal official links, provenance, labeled referral links only if adopted |
| Safety/governance | Explicit 18+ terms, prepublication review, reporting/DMCA, no prohibited images | Editorial safeguards in source/code, no actual social moderation infra | Public-launch blocking requirement, not optional polish |
| User-perceived performance | One independent article reports slow browsing on their machine | No performance measurement yet | Measure and optimize low-end Android performance, not claim NTRDB is universally slow |

Sources: 
- Index: https://ntrdb.com/works 
- Characters: https://ntrdb.com/characters 
- Producers: https://ntrdb.com/producers 
- Tags: https://ntrdb.com/tags 
- Lists: https://ntrdb.com/lists 
- Calendar: https://ntrdb.com/calendar 
- Proposals: https://ntrdb.com/proposals
- Rated: https://ntrdb.com/top 
- News: https://ntrdb.com/announcements
- Feed: https://ntrdb.com/feed
- Sale: https://ntrdb.com/on-sale
- Detailed example: https://ntrdb.com/works/himawari-wa-yoru-ni-saku-2
- TOS: https://ntrdb.com/terms
- Safety: https://ntrdb.com/content-policy

## Representative individual work-page structure (design study only)

A publicly visible **2021 animation example** ("Sunflowers are blooming at night"/`Himawari wa Yoru ni Saku`) demonstrates why work pages are more important than flat lists. Its page includes title/alternative-title, animated OVA medium, release/date/status, original language, episode runtime, publisher/store references, product code, concealed spoilers, tags grouped by axis, intensity *votes*, character/producer references, edition information, source adaptation, creator's other works, related recommendations, ratings and reviews. **These are interface/metadata fields to design against, not content to mirror.**

NTRDB producer pages can link to multiple releases, yet producer role labels can be more generic than our first-party role-specific credit model. Our opportunity: distinguish `actual_animation_production`, `OVA_release_label`, `original_comic_circle`, `original_game_brand`, `publisher` and individually verified creative staff and episode roles.

NTRDB's community proposals already request better broad-list display and a separate "NonTR" category for works having cheating subplots without NTR as their main genre. Our `candidate_tag_ids`, `narrative_importance` and `tag_basis` model should allow `adjacent-subplot` without falsely forcing a story into NTR. (See https://ntrdb.com/proposals, proposal subjects.)

## A differentiated Netoraria architecture

Six independent questions per catalog record:

1. **Existence:** Is there a sourced title/episode, alias, year, edition and source ID?
2. **Identity:** Is this a new *original animation*, reissue/compilation, format SKU, localized naming variant, or cross-media source?
3. **Genre/perspective:** Is the title predominantly netorare, netori, netorase or merely has an adjacent subplot, and whose perspective is represented?
4. **Narrative/consent:** Are loss, deception, coercion, freely negotiated nonmonogamy and women’s decisions accurately distinguished? Coercion never equals consensual cheating.
5. **Rights and age:** Is a visual legally licensed; is age appropriate/verified? Age-sensitive scholarly bibliography isn't promotable media discovery.
6. **Confidence:** Which primary/retailer/community reference supports EACH factual field, what conflicts exist, and when was it last reviewed?

Recommended schema additions for later PRs: `work_aliases`, `external_identifiers`, `release_variants`, `episode_credit_edges`, `field_assertions`, `evidence_reviews`, `safety_reviews`, `spoiler_level`, `community_tag_votes`, `correction_requests`, `reader_preferences`. Do not build user data storage until privacy is designed.

**v0.10 code increment now on this branch:** Session-only **Hide themes** preferences on the Discovery Frontier, based only on Netoraria's *own* 12-tag taxonomy. It changes displayed candidates immediately, has accessible labeled checkboxes, requires no login or cookies, stores nothing across sessions, and does not alter research data.

## Roadmap: no false parity claims

### P0 — Beat on trust, episode detail and immediate usability
- Normalize all animation works through a repeatable, publisher-first import pipeline.
- Add accessible trust badges/field-level source evidence and a release-classification guide in each work and episode page.
- Add spoiler tiers, personal theme exclusion, precise animation episode/source-work cross-links, aliases and mobile filters.
- Mobile UX/performance budget and browser-based QA, with licensed image manifest.
- Publish only when rights, adult-age gate appropriate to jurisdiction, moderation/takedown and hosting policies are ready.

### P1 — Achieve user-utility parity in the animation vertical
- Truly browsable animated-series/episode catalog covering a **measurable permitted source universe**.
- Exportable private watch/read lists and shareable searches, age-appropriate creator/series follow features.
- Community reviews, lists, rated works and helpful correction requests only with moderation, privacy and anti-gaming design.
- PT-BR/EN localization and Japanese alias support.
- Optional explainer "Why is this NTR?" cross-character interpretation panels, source-backed and spoiler-safe.

### P2 — Long-term moat, not low-value mimicry
- Editorially reviewed historical chronology of origins and genres; academic/critical essay connections and primary source citations.
- Adult-only educational quests with opt-in, non-instrumental social skills and media literacy.
- Publisher participation and correction tools; release watches and RSS.
- Social community, recommendations, badges, cosmetics, creator/shop integration **only once** operational infrastructure exists.

## Measurable success (no vanity metrics)

- `audited_animation_works`, with numerator: unique canonical animated series with at least one source-backed original episode.
- `candidate_completeness_per_permitted_source`, denominator: only an explicitly enumerated permission-compatible catalog. Unknown otherwise.
- `work_provenance_coverage`, field-by-field confidence and date coverage.
- `false_merges_per_1000` (aliases/editions incorrectly conflated) and `false_splits_per_1000` (same work duplicated).
- `first_answer_time_seconds`: how quickly a mobile user finds episode, studio, source manga and release date.
- `mobile_lcp_inp_cls` measured on real devices.
- `consent_semantics_error_rate` of published analyses (e.g. treating coercion as freely chosen adultery).

## Follow-up checkpoints

- **Ask for NTRDB data partnership/export permission**; do not claim it exists or that it can legally be extracted.
- Independently build permitted primary manufacturer catalog windows and verify whether the existing NTRDB animation benchmark differs in date or studio identity.
- Make a dedicated animated-works dashboard with source trust levels (instead of competing on all 20,351 mixed-media entries).
- Store future competitor snapshots as manually observed aggregate facts, with dates and citation URLs. Do NOT access or store NTRDB user data or copy creator prose.

**Scope honesty:** competitor numbers and features reflect publicly visible site snapshots on October 13, 2026. No login-only features were independently exercised. No competitive performance benchmark was measured. No copyrighted covers, fan-written descriptions, site taxonomy terms or data corpus were imported.
