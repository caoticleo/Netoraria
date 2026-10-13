# Netoraria v0.6 — Creative Lineage & Release Explorer

Research completed: 2026-10-13. Branch: `feat/lineage-explorer-v06`. Parent: `feat/studio-artist-network-v05` (draft PR #5). This is a non-graphic educational encyclopedia of adult-animation history, not a content-hosting or piracy platform.

## Key verified discoveries

### Minamoto: same original artist, different projects

In its 2023 announcement, the official Rune/Lune publisher confirms that Minamoto's adult-marriage NTR comic was adapted into two 2023 animated episodes, and announced another NTR game collaboration with Minamoto and scenario writer シャア専用◎. Citation: https://www.lune-soft.jp/news/26424 .

A separate original **PC game** (`Netorareiyā: Kaijō-hen`) launched **2025-12-19** under **Rune TeamBitters** and credits Minamoto for original artwork and シャア専用◎ for scenario. Source: https://www.lune-soft.jp/game/30243 . Official character biographies explicitly state principal adult characters' ages, and this version records the source-backed ages **27, 27, and 23** without sexual descriptions or character images.

The game is **not an adaptation of the 2023 OVA**. The work graph therefore encodes `shared_original_artist` rather than `adaptation_of`. This is an example of the project's artist-first discovery strategy expanding beyond animation carefully and accurately.

### GOLD BEAR and 2026 physical-edition reissues

Manufacturer Media Bank's **GOLD BEAR** label catalog identifies a *Kedamono (Kazoku)-tachi no Sumu Ie* **complete edition** on **January 30, 2026**, in **DVD** (GBR-036) and **Blu-ray** (GBR-B008) versions. First-party catalog: https://www.mediabank.co.jp/label.php?id=14 .

These are two physical reissues of an existing animation: **zero new original episodes are established by this evidence**. Production studio, original episode date, source media, and character-age context are unresolved; the records are retained in contextual bibliography rather than promoted in series recommendations. Adding a second label must not inflate the count of new works.

### Context for what is already verified

- T-REX animation-production work, Antekinussu release labels, and original source circles remain distinct entities.
- The 2026 Media Bank Queen Bee compilation line also remains an edition rather than counted as original animation: https://www.mediabank.co.jp/label.php?id=22&pg=1&stat=0 .
- Netoraria does not automatically classify cheating, netori, or nonmonogamy as equivalent to NTR without narrative and production evidence.

## Implemented user experience

- **Release Explorer:** compact chart/timeline with year selection, source-backed original-episode vs compilation/reissue and retailer filters, mobile-friendly results and per-series navigation. Only public display-eligible animation is counted here; chart totals are **sample totals**, not industry totals.
- **Creative Lineage:** a connected artist-based narrative connecting the 2023 OVA and independently released 2025 game, with an explicit warning that they are not adaptations.
- **Non-graphic adult bios:** optional expandable text-only dossier records for 2025 game characters with publisher-verified ages and citation links.
- All links to outside providers open in a new tab without embedded explicit content. All internal labels are escaped before HTML rendering.
- **QA:** JavaScript syntax checks; work/credit/artist-relation cross-references; no under-18 age assertions in publicly displayed age-confirmed bios; typed edition consistency; client-side catalog/JSON sync; no duplicate stable IDs.

## Known limitations

- Catalog spans a small primary-source-audited slice, not a complete NTR filmography.
- This release adds one source-backed adult-game context work and one historical 2026 reissue work, **not two newly produced anime series**.
- Commercial cover images are not licensed for display and remain replaced by typographic graphic treatments.
- The manuscript contains in-sample label histories only, not definitive corporate founding dates.
- The actual mobile UI still needs physical browser/device visual QA.
- No public deployment, user accounts or social system is part of this branch.

## Next research targets

1. Backfill original OVA episode dates and staff for GOLD BEAR's 2026 collection, verify age context before any public linking.
2. Check other Minamoto and Rune TeamBitters animation/game cross-credits without confusing adaptations and shared-artist collaborations.
3. Add 2026 original episodes from other independent studios rather than boosting database size with format reissues.
4. Build a rights-reviewed image manifest and replace placeholder tiles with legally displayable, non-explicit art.
5. Improve localized Japanese romaji aliases, series-to-episode permalinks and accessibility.
