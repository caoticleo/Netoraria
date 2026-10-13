# Netoraria v0.8 — Completion-First Discovery Architecture
Research cutoff: **2026-10-13** · Canonical application: `caoticleo/Netoraria` · Draft branch `feat/completion-first-discovery-v08`

## Product thesis

Netoraria should be the **broadest useful non-streaming, mobile-first catalog of NTR/netori/netorase and closely adjacent animated fiction**. The user has deliberately prioritized **completionism before verification and depth**, without collapsing these into a misleading claim of authority.

Therefore **two independent levels of catalog knowledge are necessary**:

1. **DISCOVERY INDEX:** Capture a candidate's existence, neutral spelling/alias, source of discovery, indexed year and episode hints, proposed tags and status. These are *leads*, not verified canonical anime. Conservative age/rights/editorial gating applies at this stage.
2. **CANONICAL WIKI:** Promote a candidate only after establishing work identity, independent source(s), adult-focused editorial eligibility, actual episodes/releases (vs compilation/physical format), genre-vs-perspective support and no duplicative aliases. Rich staff credits, original-media graphs, related artists and episode history then follow progressively.

A title can be broadly discovered yet remain under primary verification or editorial review. A title counted as "found" does not mean the animation was released, that the site verified the genre, or that a publisher’s image is licensed. **Coverage counts must not substitute for validation.**

## UnderHentai comparison and constraints

The user's Google share redirect `https://share.google/8z4xrYuQmwCetgIJd` could not be resolved by the current research browser; UnderHentai's official homepage **does publicly display both Netorare and Netori as separate genre links**:
https://www.underhentai.net/

Direct tag-page URLs `https://www.underhentai.net/genre/netorare/` and `https://www.underhentai.net/genre/netori/` were **not retrievable** by the browser. This means:
- We have **not** scraped, enumerated, or established the completeness of either tag category.
- We cannot make a truthful source-total count, identify all UnderHentai tagged works, or calculate a recall/completeness percentage.
- We did **not** copy or link to UnderHentai's copyrighted covers, streaming pages, or playback functionality.

The independently accessible [2025 calendar](https://www.underhentai.net/releases/2025/) and [2026 calendar](https://www.underhentai.net/releases/2026/) can supply **a small manually selected list of candidate titles**, indexed dates and aliases. Their calendar dates may be publication, episode, update, translation or scheduled dates; use Japanese manufacturer and bibliographic sources to determine which before merging into the canonical episode table.

### Why the 2026 calendar needs discipline

On **October 13, 2026**, an UnderHentai entry for `Netorareta Bakunyuu Tsuma-tachi 2` dated **October 16** is **in the future**, not a verified released episode. Its `Hitori Tsuma` entry scheduled for October 30 and `NTR Kishi` continuation scheduled November 27 are likewise **future listings**, not released originals. The index may change.

The 2025 calendar uses **Natsu Zuma** where the publisher uses **Natsuzuma**, and ordinal episode labels `Kegareboshi EP01/EP02` where primary publisher releases have distinct **Blue / Red** color product names. This is why de-duplication and explicit alias evidence outrank raw counting.

## NTR family taxonomy: never collapse axes

| Term | Japanese | What it primarily describes | Equivalencies to avoid |
|---|---|---|---|
| Netorare | 寝取られ | Viewpoint of losing/betrayal | Not automatically all adultery or coercion |
| Netori | 寝取り | Pursuer/taker viewpoint | Not netorare purely because another relationship exists |
| Netorase | 寝取らせ | Partner-arranged third-party involvement | Not automatically nonconsensual infidelity |
| BSS | 僕が先に好きだったのに | Losing an unrealized romantic opportunity | An actual pre-existing relationship is not required |
| Cheating | 浮気 | Violation of relationship agreement | Not an automatic NTR perspective |
| Infidelity | 不倫 | Affair/adultery, depending on context | Not interchangeable with coercion |
| Jealousy | 嫉妬 | Emotional theme | Can exist with no infidelity |
| Consensual nonmonogamy | — | Relationship agreement | Not betrayal by default |

Separate facets for emotional response, perspective, event, consent/agreement, gender, source-medium and content warnings. A source's external tags need their own `platform + original tag + date + evidence` attribution. Never infer tags solely from publisher labels.

## v0.8 concrete delivery

- **19 manually authored research candidate records** across 2025/2026, all with source IDs, neutral stage, media, time hints, proposed tag basis, alias/canonical linkage, display gating, and no commercial cover art.
- **12 explicit independent taxonomy facets**, with 4 external mapping entries (including UnderHentai Netorare, UnderHentai Netori, observed absence of a Cheating menu item, and ambiguous generic NTR usage).
- **4 scoped coverage objectives:** 2025 and 2026 selectively indexed; UnderHentai Netorare and Netori genre pages marked *blocked* and **not falsely complete**.
- Existing canonical wiki remains at **15 works, 27 release/edition/game records** from v0.7. **Do not add 19 + 15**: nine candidates link to existing works and some candidate entries refer to the same series across years.
- Public preview includes only `public-linked` existing adult-series and `candidate-public` clearly adult-premise provisional textual dossiers. Internal age-review records are **not in the public candidate UI**. Full research JSON retains only neutral bibliography and warning notes for sensitive entries.
- A browseable `Discovery frontier` adds year filters, NTR/Netori/infidelity perspective facets, keyword search, candidate-status cards, proof/coverage disclosures and text-only bibliography provenance.
- Explicit empty state under Netori filters: **no qualified records yet**, not proof that no Netori media exists. No fake market-share, completion percentage, stars, user ratings or scraped covers.

## Publishing and QA gates

The prototype is editorial bibliographic research, no video player, explicit screenshots, unlicensed covers, or links to sexual material involving minors. The tag source pages were not accessed, so no tag membership is asserted as firsthand evidence. Date hints after Oct 13 are future *source-indexed* listings until publisher and actual date verified.

CI validates stable identifiers, source links, candidate tag IDs, assigned canonical IDs, stage status, restricted-material exclusions, blocked source scopes, client JSON parity, JavaScript syntax, and presence of the responsive discovery interface.

## Next completionist sprint

1. Enumerate first-party and licensed/permission-compatible **genre-tagged textual title inventories** across years, starting with Netorare and Netori separately. Find a compliant official API/export or get usage permission; do **not** bypass site access controls or unlawfully bulk clone.
2. For every title in the source universe: create a minimal **candidate**, normalize Japanese title + aliases + year, source URL and when first observed. Existing aliases match existing work IDs.
3. Run a triage classifier: `NTR-tag evidence`, `relationship narrative`, `adult/age eligibility`, `work identity`, `manufacturer release type`.
4. Count progress against **known permitted source lists**, keeping denominator unknown until sourced. Never claim global completeness across Japanese anime, games or all hentai portals.
5. Add verified studio/creator credits, original manga/doujin/game ancestry, and dates **after** discovery coverage, without holding up the backlog process.
6. Capture rights-cleared original graphic placeholders and permissible editorial designs. Maintain the modern mobile-app-first UI and studio/artist browsing as permanent requirements.

**Product metric:** broadly *findable with honest confidence* first, richly verified and reviewed later.
