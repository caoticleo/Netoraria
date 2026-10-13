# Netoraria

**A visual, mobile-first, source-audited encyclopedia of netorare animation and adjacent Japanese media.**

The initial fan-wiki experience prioritizes series discovery, episodes, original material, characters, publishers, studios and release chronology. Scholarly history, relational analysis, and optional educational quests complement that primary experience.

## Preview

Open `index.html` in a browser (no build required). Current sample covers three research-backed title groups, NOT a comprehensive genre directory. The graphical cover tiles are original editorial placeholders, not publisher artwork. Any commercial cover must have a verified license/use basis and provenance.

## Research standards

Use first-party publishers for dates, credits and editions; cross-check third-party hentai databases for leads, not unrestricted duplication. Keep original works, OVAs, reissues, characters, source adaptations and rights metadata distinct. **Never assume every animated hentai is based on a doujinshi**.

## Current research catalog (v0.4 draft)

The catalog in `data/catalog.json` contains 10 work-level records, 20 release/edition metadata records, 23 source-ledger entries and 24 historical milestones. The app uses the generated offline snapshot at `src/catalog.js`, validated against the canonical JSON in CI. Six display-eligible NTR-themed animated series groups are presently browsable; game-only and age-sensitive historical records are held as context rather than fan recommendations.

Open `index.html` for mobile-first cover-led search. Wiki detail tabs show release chronology, verified and unverified character biography fields, original manga/game/doujin relationships and producer/retailer citations. All covers are designed typographic placeholders; commercial artwork needs appropriate rights review. Read `docs/RESEARCH_TAGGED_2026.md` for source accuracy and release distinctions.

## v0.5 draft — production network

This branch adds **Studio / Label** and **Creator / Artist** mobile-friendly directories, linked detail pages, dated credited releases, small relationship graphs and source citations. They distinguish the animation studio from the distributor label, source-game developer, original comic circle, and individual artists. URLs like `#/studio/ORG-TREX` and `#/artist/CR-SATOU` open the corresponding wiki profiles. Series overviews link back to verified creative participants. The current research snapshot has 10 organization profiles, 11 creator profiles, and 44 attributed work-level role edges, with age-sensitive titles hidden from public promotional discovery. See `docs/STUDIOS_AND_CREATORS_v05.md` for detailed evidence and limitations.

## v0.6 draft — Release Explorer & Creator Lineage

- Browse an **interactive year-by-year animation release chart**, filter to original OVAs versus compilations, and open the associated series record.
- Follow the shared original artist **Minamoto** from the 2023 animated adaptation to a distinct 2025 Rune TeamBitters PC game. The game is *not* an adaptation of the animation. Its non-graphic character bios include three adults with publisher-verified ages.
- The historical research ledger also has two format editions of a 2026 GOLD BEAR reissue (DVD and Blu-ray). Its origin, character ages and studio are not confirmed, so it is **not** promoted or counted as new episodes.
- Current data: **12 works**, **23 release/edition/game entries**, **11 organizations**, **12 creators**, **49 work-credit links**, **36 sources**, **26 history nodes** and **1 directly sourced cross-media relationship**. These are research-sample counts, not global industry totals.
- All versions preserve the non-graphic, cover-licensed-only policy. See `docs/LINEAGE_AND_2026_v06.md`.

## v0.7 research pass — 2025 calendar cross-check

Using the [UnderHentai 2025 release calendar](https://www.underhentai.net/releases/2025/) **only for discovery leads**, a manually verified research pass adds two 2025 animation work records and four original episodes, plus one sensitive context-only source-game adaptation record. Critical details are checked against Japanese **Media Bank**, **Suruga-ya**, **Toranoana**, and the national book bibliography. The 2025 Queen Bee work has first-party product SKUs QNB-M163 / QNB-M165; the Merry Jane two-part title has retailer-backed codes MJAD-395 / MJAD-399. Production studios, adaptation credits and character ages are not inferred without verification. The Gagarin Kichi original manga volume has a separately sourced publisher, date and ISBN.

Research adds aliases for `Natsu Zuma` → `Natsuzuma` while holding UnderHentai's `Kegareboshi` episode ordinals for reconciliation with publisher `Blue/Red` titles. The age-ambiguous POISON-family adaptation remains **restricted bibliographic context**, never promoted as an adult-animation recommendation. No copyrighted images, video embeds, unauthorized scraped dataset, or external streaming links are copied.

See **[2025 source audit](docs/UNDERHENTAI_2025_RESEARCH_v07.md)** for verified/manufacturer-vs-retailer provenance, candidate triage, content policy and research backlog. Catalog now has **15 works (including restricted/context-only)**, **27 release/edition/game records**, **12 organizations**, **13 creators**, **55 credit links**, **49 documented sources** and **31 historical anchors**. Not all work records represent animation, and only approved adult-oriented animation appears in the public directory.

## v0.8 draft — Completion-first genre discovery

A new mobile-friendly **Discovery Frontier** lets readers filter source-led candidates by year and relationship tags (Netorare, Netori, Netorase, infidelity, cheating and related themes) and inspect clearly labeled evidence/coverage status. The canonical verified **Series Directory** remains separate. A candidate is **not** a verified animation, genre assignment, episode count, released listing, age classification, or official art license.

- **19** 2025–26 candidate records, including aliases to existing series; **12** distinct taxonomy facets; **4** evidence-tracked source coverage objectives.
- UnderHentai's menu confirms separate Netorare/Netori links, but their individual genre pages were not accessible. **No source-wide member count or percentage is claimed.**
- Context-only historical/age-sensitive candidates are omitted from the promotional web discovery UI. Adult-premise provisional dossiers are visibly labeled, not presented as recommended streaming content.
- Source-indexed entries dated after **2026-10-13** are future listings until independently confirmed as released.
- The 15 works and 27 entries from v0.7 are **not** multiplied by this broader candidate inventory; existing known titles link to the same IDs.
- The visual interface keeps original graphic placeholders instead of redistributing publisher cover files.

Read [completion-first methodology](docs/COMPLETION_FIRST_v08.md) before interpreting counts or importing further candidate feeds.

## v0.9 draft — 2019 backfill & observed-source coverage

- New 2019 Queen Bee adult-marriage NTR animation series **Yue ni Hitozuma wa Netorareta.**, with its two retailer-backed original episodes (QNB-M058 / QNB-M061), plus Arakure's earlier 2018 Core Magazine manga connection.
- An existing 2026 original OVA sequel entry now has its manufacturer-confirmed original episode identity and SKU **QNB-M190** (Sept 18, 2026).
- **27 stage-classified discovery leads**, including duplicate-candidate references that do not count as new series. Added publisher-tagged compilation leads to internal/contextual queues until genre and age context are verified.
- **Dynamic Discovery year filter** now supports 2019 alongside 2025–2026. New mobile-responsive **Coverage** screen records which publisher pages were inspected, including the misleading distinction between a 210-product label-wide catalog and a much smaller NTR subset.
- Verified counts now include **16 total work records, 29 release records, 13 organizations, 14 creators, and 62 source references**. These are sampled bibliographic data, not claims of worldwide genre completeness.
- CI expands to cover SKU uniqueness, original-versus-edition semantics, alias link integrity and source-window observation dates.

See [v0.9 research and source-window report](docs/BACKFILL_AND_COVERAGE_v09.md). Commercial publisher imagery remains unlicensed and is not mirrored; age-sensitive entries are neutral internal research only.

## Competitive audit v0.10 (October 2026)

The leading cross-media competitor [NTRDB](https://ntrdb.com/) publicly lists **20,351 works** across media, **8,000 characters**, **5,963 producers and circles**, **982 structured work tags**, ratings, a calendar, lists, community proposals, a feed, spoilers and personalized tag blacklisting. Those are its own dynamic published metrics, not animation-only audited totals. Netoraria does **not** claim feature or catalog parity today. [Read the structured 21-capability benchmark](data/competitive-benchmark-2026-10.json) and [editorial audit and roadmap](docs/NTRDB_COMPETITIVE_AUDIT_2026-10-13.md).

NTRDB's [terms](https://ntrdb.com/terms) expressly forbid systematic copying without permission. This project will **not** bulk import its 20k+ records, fan-added tags, imagery, ratings or user content. Instead: independently gather publisher-approved anime/episode metadata and seek a documented data partnership if permissioned interoperability would help.

Immediate user-facing improvement: an accessible **Hide themes** panel in Discovery, based solely on Netoraria's own taxonomy. It suppresses matching discovery results for the current browsing session, requires no account, and writes no preferences to server/browser storage. It is **not** persistent or account-synced. Public site remains non-graphic, not commercially deployed.

## Next development

- Import the complete v0.3/v0.3.1 database with source attribution and validation tests.
- Add individual wiki routes for works, episodes, characters, studios, original manga/doujinshi/games and inter-work adaptations.
- Add episode timelines, relationship graphs, cover rights ledger, structured search, accessibility and responsive navigation.
- Configure authorized private deployment previews after CI. No automatic public deployment.

## Safety / editorial

Neutral, non-graphic documentation of contentious historical topics, including verified age-related metadata, is allowed for scholarship; no sexualized depictions involving minors, discovery shortcuts, unlicensed covers or streaming media. Social systems require later privacy, age assurance, moderation and user consent design.

See AGENTS.md. The prior H·ARCHIVE / Netoraria v0.3.1 research material remains in the ChatGPT Library and must be reconciled before any claim of complete migration.
