# Tagged-release catalog expansion — October 13, 2026

## Goal and sourcing

Build the encyclopedia around adult-animation **works → releases/editions → creators/studios → source material → characters**. Preserve producer categorization separately from community descriptors such as cheating, netorare, netori and netorase. A publisher-label association does not by itself prove NTR content.

The existing H·ARCHIVE v0.3 research lineage contained 6 work records, 14 release/edition records and 22 chronology nodes. This branch expands the source-audited dataset, without claiming a comprehensive catalog. Data source of truth: `data/catalog.json`; `src/catalog.js` is the offline-friendly client snapshot of the same records. Changes must update both together until a generator replaces the duplication.

## Research findings

- Lune NTR category is a **publisher tag**: https://www.lune-soft.jp/ova/type_ova/%E5%AF%9D%E5%8F%96%E3%82%8A%E3%83%BB%E5%AF%9D%E5%8F%96%E3%82%89%E3%82%8C%EF%BC%88ntr%EF%BC%89 . It contains multiple compilation editions alongside original videos, so counts cannot be interpreted as series totals.
- `Kegareboshi`: December 26, 2025 Blue/Red and March 27, 2026 Purple/Black, source https://www.lune-soft.jp/ova/30170 . Credits include original illustrated work, animation studio T-REX and the publisher label.
- `Natsuzuma`: two OVAs dated October 31, 2025 based on Kurozu Gatari's work, per https://www.lune-soft.jp/news/30136 .
- `Yume Miru Otome`: publisher pages https://www.lune-soft.jp/ova/29228 and https://www.lune-soft.jp/ova/29230 identify two 2025 animations from Aijou Riku's commercial manga; **NOT** original doujinshi by default. Explicit school-age character presentation means these records are kept in restricted, non-graphic bibliographic context and removed from cover-led recommendations.
- `Netokano`: publisher https://www.lune-soft.jp/ova/21475 confirms 2021 date and the original V-Pan's Ecstasy comic, but youth-related framing also warrants restricted context only.
- `Netorareta Bakunyuu Tsuma-tachi 2`: retailer https://ec.toranoana.jp/tora_r/ec/item/210006667231/ confirms Queen Bee adult-animation first DVD for September 18, 2026. Community metadata https://bangumi.tv/anime/tag/NTR/airtime/2026 is only a discovery lead. Episode count, adaptation and credits require primary manufacturer check.
- `Otonari no Nie`: two original OVAs scheduled for November 27, 2026, per https://www.lune-soft.jp/ova/32419 and https://www.lune-soft.jp/ova/32437. Neither page carries the publisher's NTR tag, and both carry age/coercion red flags. Neutral upcoming-media bibliographic note is preserved; not recommended/discoverable from the public wiki.

## Data-quality rules

1. A **work** is a franchise/series-level entity, not an episode or compilation pack.
2. A **release** is its own dated record; `original_ova`, `compilation` and `retailer-confirmed edition` are not interchangeable.
3. Distinguish the creator's **original medium**—commercial manga, independent doujin comic, game, or original animation—only when publisher credits verify it.
4. Real publisher jacket images are not embedded until distribution/display rights are resolved and the imagery is appropriate; expressive typographic cards are authored placeholders.
5. Never republish sexualized depictions involving minors or use such content as a discovery/recommendation vector. Preserve its historical existence through neutral critical metadata and verified age uncertainty.
6. Generic hentai aggregators and community tags are research leads, never a substitute for a publisher or archival citation. No unauthorized bulk scraping.
7. No streaming, external explicit video embeds, user-uploaded covers, login or reviews in this iteration.

## Next sprint

Verify Queen Bee's September 2026 episode split and production credits, identify additional adult-character NTR originals from *other* labels, expand unverified original comic/doujin chains and adult-character biographies, and introduce licensed jacket previews under a rights ledger. CI should catch drift between JSON data and the client-side snapshot.
