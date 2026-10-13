# Netoraria v0.9 — 2019 backfill and bounded manufacturer-source audit

**Research cutoff: 2026-10-13.** Branch: `feat/catalog-backfill-2019-v09`, stacked on v0.8. This is a new **research-and-browsing iteration**, not a production deployment or proof of worldwide completeness.

## Concrete research and corrections

### Backfill: 2019 adult-wife NTR animation and earlier original manga

The 2019 Queen Bee animated series `故に人妻は寝取られた。` (*Yue ni Hitozuma wa Netorareta.*) has two separate original OVA product records, NOT 2019 reissues:

- **February 22, 2019**, volume 1, **QNB-M058**, Japanese specialist retailer: https://www.suruga-ya.jp/product/detail/128072214
- **April 12, 2019**, volume 2, **QNB-M061**, Japanese specialist retailer: https://www.suruga-ya.jp/product/detail/128072679
- Its commercial original printed adult-wife manga appeared from **Core Magazine**, **September 29, 2018**, artist **Arakure (あらくれ)**, bibliographic retailer: https://www.suruga-ya.jp/product/detail/XA20507

Entity model: `W-YUE` (one original animation series), `R19-YUE-01` and `R19-YUE-02` (two original-video products), `CR-ARAKURE` (the distinct comic artist), `ORG-CORE` (original manga publisher), `ORG-QUEEN` (release label). Physical animation production studio is still **unconfirmed**—a Queen Bee label doesn't establish its animation subcontractor. No individual character ages were invented; the premise is a married adult.

### Correction: 2026 Queen Bee sequel manufacturer evidence

The official manufacturer **Media Bank**, Queen Bee catalog page 1, lists **`寝取られた爆乳妻たち2 前編`**, dated **September 18, 2026**, SKU **QNB-M190**, artist **Gagarin Kichi**. Manufacturer listing: https://www.mediabank.co.jp/label.php?id=22&pg=0&stat=0

Thus existing release ID `R26-05` is now a verified **original_ova** with `confidence: publisher` and SKU QNB-M190. It was formerly retailer-based and merely described as a first DVD. This is one episode, not a newly imported franchise. A later October 16 index entry remains **future** as of this audit; do not report it released or infer a manufacturer SKU.

## Bound source inventory: what was actually viewed

Each record carries the exact catalog page URL, **source window**, observation date, number of visible entries, and whether the full genre corpus was enumerated.

| Observed source | Visible entries | Context | What this proves |
| --- | ---: | --- | --- |
| Media Bank Queen Bee first page `pg=0` | 10 | Official label-wide products, all genres | Sept 2026 QNB-M190; 10 inspected label entries, not 10 NTR titles |
| Media Bank Queen Bee second page `pg=1` | 10 | Official label-wide products, all genres | 2026 `Sakuramiya Shimai` complete edition QNB-M178 on March 6 is a **compilation**, not new OVA animation |
| Media Bank Queen Bee third page `pg=2` | 10 | Official label-wide products, all genres | Two original 2025 `Netorareta Bakunyuu` episodes QNB-M163/M165, separately from November 2025 `Hitozuma, Mitsu to Niku` two complete-edition products QNB-M169/M170 |
| Rune/Lune NTR official keyword index, inspected 2025–26 portion | 12 | First-party NTR-tagged videos in visible index window | Keyword list itself mixes original animated products and older-work compilations. Does **not** prove each product’s narrative POV or adult age. |

Relevant primary pages:

- https://www.mediabank.co.jp/label.php?id=22&pg=0&stat=0
- https://www.mediabank.co.jp/label.php?id=22&pg=1&stat=0
- https://www.mediabank.co.jp/label.php?id=22&pg=2&stat=0
- https://www.lune-soft.jp/ova/type_ova/%E5%AF%9D%E5%8F%96%E3%82%8A%E3%83%BB%E5%AF%9D%E5%8F%96%E3%82%89%E3%82%8C%EF%BC%88ntr%EF%BC%89

Media Bank currently shows 210 items across its full Queen Bee label listings; that is **not** a denominator for NTR animation. The four inspected windows total 42 catalog-item observations, many not NTR; neither 42 nor 210 is a count of newly discovered works. Each window is explicitly `complete:false`. The site is copyrighted; we store independently summarized bibliographic facts, not commercial text/media/images copied en masse.

## Work-identity reconciliation and unverified candidates

- `D19-SAKU`: *Sakuramiya Shimai no Netorare Kiroku* has a 2019 second-volume retailer listing, **QNB-M065, Sept 27**, and a distinct **2026** publisher complete-edition **QNB-M178**. Source-age ambiguities mean this stays in restricted neutral bibliography rather than commercial/promotional discovery. The 2019 original date of part 1 is NOT yet independently verified.
- `D26-SAKU-COMP` explicitly points back to the same candidate via `same_as_candidate_id`, not treated as a second distinct series.
- `D19-HITO`: *Hitozuma, Mitsu to Niku* source manga by **Tsukino Jougi**, Core Magazine **July 25, 2019**, retailer record https://www.suruga-ya.jp/product/detail/XA21143 . Queen Bee lists **November 7, 2025** original-series compilations QNB-M169/M170; exact NTR perspective and original animation release timeline are not established. No original-OVA episodes were invented.
- `D26-HITO-REMIX` points back to `D19-HITO`; a sequel, subtitle or physical reissue cannot inflate unique series counts.
- `D25-MOTHER`, `D25-FAMILYCOMP` and `D26-STEP` are publisher **NTR-tagged compilation leads**. Only the category association and product date are known. Age-risk or unverified age leads are not promoted into public fan discovery.
- The v0.8 UnderHentai-specific Netorare/Netori genre inventories remain **inaccessible**; source-wide counts and percentage of genre completeness are still unknown.

## UX / UI changes

- Discovery year selector is now **derived from candidate years**, so 2019 records appear; it is not hard-coded to 2025 and 2026.
- New responsive **Coverage** board with 4 source-window panels, provenance links, observed-entry totals and strong warning against comparing generic publisher-label totals to genre totals.
- All works and candidates still use authored typographic tiles, not commercial hentai cover art. Content remains non-graphic, with work and source lineage.
- CI now verifies original 2019 retailer SKUs, upgraded 2026 manufacturer confidence, nonduplicate manufacturer SKU identities, alias/duplicate candidate relationships, and that all source windows are `complete:false`.

## Outcome and explicit limits

Canonical dataset after v0.9: **16 works total** (includes context-only and restricted), **29 release/game/edition records**, **13 organizations**, **14 creators**, **62 source entries**, **27 discovery lead records**, **4 source-window observation records**, and historical chronology extended through 2019.

The 27 discovery leads are **not 27 additional NTR series**; some represent existing works, aliases, reissues, or unverified genres. The meaningful canonical breadth increment is **one older animated NTR series and two original 2019 episodes**, plus a manufacturer-grade 2026 record correction.

This project remains far from complete. The next research pass should enumerate more permitted original release products from 2018–2024 Queen Bee, Merry Jane and other publishers, including adult-character source-media and creator credits, while preserving tag-vs-content and age uncertainty.

## Next investigation order

1. First-party Queen Bee historical series *Yue ni Hitozuma...* additional editions, studio contractor evidence, and Arakure's later animated adult-wife titles, avoiding invented adaptation relationships.
2. Complete the accessible Rune/Lune NTR-tagged archive **by permitted page windows**, not generic 210-item Queen Bee collection, with one set of `work`, `release`, `source` IDs and labels for original/compilation.
3. Distinguish whether the 2026 Oct 16 *Netorareta Bakunyuu Tsuma-tachi 2* listing was an actual new video release when that date arrives.
4. Increase unique eligible animated candidate count, then deepen manga/doujin/game ancestry, staff, character and licensed visual metadata.
5. Test the coverage and discovery UI on mobile, then complete PR review/merge chain and public deployment safety/rights checks.
