# Netoraria Research Pass v0.7 — Independent 2025 Release Calendar Audit

**Audit date:** 2026-10-13. **Scope:** non-graphic metadata for Japanese adult animation with credible NTR/infidelity themes. **Source-ledger branch:** `research/underhentai-2025-crosscheck-v07` extending v0.6, stacked on all prior draft PRs.

## Why the reference matters

The user-provided reference **UnderHentai — 2025 releases** is a useful *discovery calendar*, not a definitive original-release authority: https://www.underhentai.net/releases/2025/ .

**Observed information architecture (not content to copy):**
- One year, month-sectioned, day/date episode records.
- Repeat a single series across nonconsecutive months with explicit EP numbers.
- Date-based discovery, last/next-year navigation and a separate genre taxonomy.
- Individual preview links, which are **not suitable for Netoraria** without explicit artwork rights, user protections and compliance.
- Terms such as *Netorare* and *Netori* coexist with many unrelated content tags; the existence of a genre sidebar does not establish that every listed title is NTR.

**Netoraria improvement:** run an auditable pipeline `third-party episode lead → original Japanese title / aliases → dated original product → publisher/label vs physical animation studio → source material, creators → age-related editorial classification → public listing or held research record`. Record whether a date corresponds to first publication in Japan, a local streaming/translation upload, a reissue, an episode, or a 2026 installment. Never treat a generic streaming-site episode count as proof of a manufacturer release identity.

This audit manually inspected relevant *textual index entries only*: did not follow video/preview links, collect sexual images, or bulk-scrape UnderHentai.

## Confirmed and newly cataloged: two 2025 NTR-themed OVA series

### 1. 寝取られた爆乳妻たち — Netorareta Bakunyuu Tsuma-tachi (Queen Bee / Media Bank)

**2025 originals:**
- **September 12, 2025:** *first part*, manufacturer product **QNB-M163**.
- **October 10, 2025:** *second part*, manufacturer product **QNB-M165**.

**Highest-priority primary source:** Media Bank's own Queen Bee listing:
https://www.mediabank.co.jp/label.php?id=22&pg=2&stat=0

**Independent corroboration:** specialist retailers list the same dates:
https://ec.toranoana.jp/tora_r/ec/item/210006662452/
https://ec.toranoana.jp/tora_r/ec/item/210006663143/

**Original printed work:** author **ガガーリン吉 (Gagarin Kichi)**, **Core Magazine**, ISBN **9784866538365**, published **December 25, 2024**. Independent national bibliographic listing: https://www.books.or.jp/book-details/9784866538365

**Entity identities:** Queen Bee is the **release label**; Media Bank is the **publisher**. Fan databases attribute the physical animation production to Blue Bread, but a first-party episode-specific production credit has **not yet been independently verified**. Therefore **do not add a confirmed Blue Bread production-studio edge**. Media Bank's footer mentioning Blue Bread's trademark by itself is not a production credit.

**Franchise caution:** its separately numbered **2026 “2”** series already exists as another work-level record (`W-QUEEN2`). Neither the 2025 two original episodes nor 2026 sequel/release should be counted twice under competing spelling/edition aliases. Character ages are not invented.

### 2. 憧れの女上司が、相部屋出張の隣のベッドで絶倫男に寝取られている — Akogare no Onna Joushi… (Merry Jane)

**2025 originals:**
- **April 4, 2025:** OVA episode 1, retailer product **MJAD-395**.
- **June 6, 2025:** OVA episode 2, retailer product **MJAD-399**.

**Japanese retail corroboration:**
https://www.suruga-ya.jp/product/detail/128086735
https://www.suruga-ya.jp/kaitori/kaitori_detail/128086875

The publisher label / manufacturer field is **メリー・ジェーン (Merry Jane)**. Its production contractor is **not yet verified**; do not identify a studio merely by the label. The retail description documents an **adult office / publishing-company scenario**, differentiating it from age-ambiguous school settings.

**Possible original material:** Bangumi associates the animation with a novel by **逢川かえで (Aikawa Kaede)**, **France Shoin**. Link: https://bangumi.tv/subject/626937/relations . This is currently **community-supported, not directly authenticated with France Shoin**, so record it with explicit qualification, no invented original ISBN or writer credit edges.

## Important provenance checks and other leads

| Candidate (index spelling) | Calendar entry | Comparison | Editorial decision |
| --- | --- | --- | --- |
| **Natsu Zuma** | Oct 31 EP 1 + 2 | Same two episodes as manufacturer **夏妻 / Natsuzuma**, previously cataloged | **Alias, not another work**; add alias for search |
| **Kegareboshi** | Dec 26 EP 1 + 2 | Japanese publisher calls them **Blue / Red**, with Purple / Black released in Mar 2026 | **Map ordinal to color only when verified**, no duplication |
| **Kanochi x Netorare Kazoku** | Mar 21 + May 30 2025 | Japanese retailer confirms WHITE BEAR DVD part 2 **May 30, 2025**; animated adaptation of earlier POISON game; 2023 origin game documentation | **Research-only** until family-character ages resolved. No public promotional links |
| **Kyou wa Yubiwa o Hazusu kara** | Jul 25 EP1 + Dec 26 EP2 | Community catalogs credit a Circle Hemoglobin work; original studio/age context require evidence | **Queue for publisher verification** |
| **Yume Miru Otome** | Mar 28 EP 3 (index) | Publisher describes 2025 related OVA *Tonari no Kanojo* and *Yogoreta Kanojo* in June; identity mapping unclear | **Don't unify episodes or publish sensitive promotional information** |
| **Fuuki Iin to Fuuzoku Katsudou** | Apr 25 EP 1/2 | School-associated premise with unverified ages | **Age-review hold** |
| **Honey Blonde 2** | Oct 24 EP1 + Dec 5 EP2 | Media Bank Queen Bee catalog includes original episodes and later continuations | **Non-NTR pending storyline evidence**; shared label alone is not a genre tag |

## Source reliability standard

- **A: manufacturer primary** — dated original episode, product SKU, label and illustrator attribution on Japanese publishing site. Evidence: Media Bank catalog.
- **B: specialist Japanese retailer** — dates, product numbering, manufacturer fields; still a second-party assertion. Evidence: Suruga-ya, Toranoana.
- **C: national book bibliography** — original printed-work title, author, publisher, ISBN, date; does not alone prove a specific animation adaptation staff.
- **D: community/third-party catalog** — useful for transliteration, discovering creators, finding candidate original novels and matching release calendars. May conflate original release, update/reupload, or arbitrary tagging.

In the schema, source `evidence` uses the existing four values `primary`, `retailer`, `secondary`, `community`. Release `confidence` stores the narrower source status. New Queen Bee source records were **upgraded to A** after the official Media Bank listing was found. Merry Jane remains at **B** until its official episode catalog is verified. UnderHentai is an index lead, not an automatic importer.

## Why not mirror its images, metadata or download links?

- The UnderHentai archive contains commercial preview thumbnails, off-platform advertising and adult streaming links. These don't carry a license for copying to Netoraria.
- Media Bank explicitly asserts copyright over its text, videos and imagery on the official product catalog; a product listing supports brief original paraphrased metadata, not republication of publisher visual assets.
- Netoraria can legitimately create its **own** covers, title typography, infographics, episode timelines, credited-work relationships and structured source references.
- Any eventual cover-image pipeline needs affirmative clearance, rights metadata, safe content review and attribution as appropriate. No copying of explicit or minor-related images.

## Concrete integration in Netoraria v0.7

- `W-BAKUNYU` 2025 original Queen Bee series, and `W-AKOGARE` 2025 Merry Jane series are now display-eligible, non-graphic encyclopedia records.
- Four manufacturer/retailer-backed `original_ova` episode records and catalog-level identity links.
- Separate `W-KANOCHI` **restricted-context** historical record; no public fan discovery.
- A new label profile for Merry Jane, a Gagarin Kichi creator profile with cross-2025/2026 credits, and a separate origin manga (ISBN source).
- A typed `franchise_links` field connecting 2025 original with an independently identified 2026 successor, not treating them as a single release.
- Structured `research_leads` queue and series alias fields with no duplication of Natsuzuma or Kegareboshi.
- 2025 manufacturer SKUs QNB-M163 / QNB-M165 independently corroborated by two retailers.
- Chronology entries for manga publication and verified OVA releases.

## Next priority research

1. **2026 Queen Bee sequel:** corroborate its September and October 2026 parts as original OVAs, not compilations, with Media Bank primary SKUs and dates. The second episode is scheduled shortly after this audit; don't mark it released before confirmation.
2. Find Merry Jane's **official** title and studio/production credits; then verify original novel and publisher.
3. Verify animation contractor **Blue Bread** from direct staff/credit material rather than fan databases or corporate footer trademark.
4. Trace Gagarin Kichi and original fiction creators to other animated works and adult-character metadata only; avoid inferring NTR from a shared studio alone.
5. Expand publisher-first 2025/26 archive coverage without bulk copying, and document franchise and edition aliases.
6. Build an interactive source-backed **2025 month chronology** without thumbnails from unlicensed websites; ensure mobile UI prioritizes episode dates and IDs.

**Outcome:** a substantially richer, higher-confidence database with two additional 2025 series and useful new credit chains. Not a complete 2025 adult animation catalog or production-studio history.
