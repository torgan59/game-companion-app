# Development plan: Game Companion

Date: 16 October 2026. Written for Tim in plain language. Facts checked on the web today are marked with a link. Anything I could not confirm is marked **unverified**.

Hard rule (from CLAUDE.md): never copy or scrape guide text, maps or marker data from GamerGuides, IGN, Map Genie, Game8, Fextralife or any other site. Sites like Steam, SteamDB, IGN, PC Gamer, Metacritic and OpenCritic are used here **only** to judge which games are popular. Walkthrough content must be original, licensed, or CC BY-SA with attribution.

---

## 1. Game shortlist (Tim's priority order)

How the 20 were chosen: big-budget games from major studios only, in the five allowed genres (large open world, RPG, action-adventure, soulslike, open-world racing). Each was cross-checked against at least three popularity sources: Steam player counts (SteamDB), Steam's own "Best of 2025" revenue tiers, Circana US sales charts, Metacritic/OpenCritic scores, and PC Gamer / IGN lists. Ranking favours games that are both popular *and* still played in 2026.

How the "content route" column was checked:
- **StrategyWiki** (licence: CC BY-SA 4.0, confirmed in the site footer today). I fetched each game's page and counted its sub-pages. "Stub" means the page exists but has 0–5 sub-pages, so there is no real walkthrough to adapt. Only Skyrim (26 sub-pages) and Tears of the Kingdom (20) have usable depth.
- **Fandom** (default licence CC BY-SA 3.0 for text; images excluded; some wikis opt out to non-commercial, so every wiki's footer must be checked before use: https://www.fandom.com/Licensing). Fandom blocks automated checks (HTTP 403 and 402 on every request today), so I could only confirm wikis that showed up in search. Others are marked unverified.
- Conclusion: **for 18 of 20 games the realistic route is original writing.** CC BY-SA wikis give facts (item names, quest lists, chapter names) you can cross-check against, not a finished walkthrough.

| # | Title | Genre | Platforms | Year | Popularity evidence | Content route |
|---|---|---|---|---|---|---|
| 1 | Elden Ring | Soulslike / open world | PC, PS4/5, Xbox | 2022 | 30M+ sold ([VGC](https://www.videogameschronicle.com/news/elden-ring-has-sold-over-30-million-copies-fromsoftware-says/)); Steam peak 953k ([SteamDB via Gfinity](https://www.gfinityesports.com/article/monster-hunter-wilds-surpasses-elden-ring-concurrent-user-record)); PC Gamer best open world #1 ([PC Gamer](https://www.pcgamer.com/best-open-world-games/)) | StrategyWiki: stub (1 sub-page). Fandom: eldenring.fandom.com exists (CC BY-SA 3.0). **Original writing.** |
| 2 | Baldur's Gate 3 | RPG | PC, PS5, Xbox, Mac | 2023 | Steam peak 875k ([SteamDB via Gfinity](https://www.gfinityesports.com/article/monster-hunter-wilds-surpasses-elden-ring-concurrent-user-record)); Steam Best of 2025 Gold tier ([FullCleared](https://fullcleared.com/news/steams-best-of-2025-revealed-including-top-sellers/)); OpenCritic 96, all-time top 10 ([Outlook](https://respawn.outlookindia.com/gaming/gaming-news/hades-2-opencritic-score-hits-95-joins-in-elite-tier)) | StrategyWiki: stub. bg3.wiki: content after 20 July 2024 is dual CC BY-SA 4.0 / BY-NC-SA 4.0, older content non-commercial only ([bg3.wiki](https://bg3.wiki/wiki/bg3wiki:Copyright)). Fandom: unverified. **Original writing**; bg3.wiki facts usable page-by-page with date check. |
| 3 | Forza Horizon 6 | Open-world racing | PC, Xbox Series (PS5 Jan 2027) | 2026 | Metacritic 92, highest of 2026 ([Pure Xbox](https://www.purexbox.com/news/2026/07/metacritic-unveils-its-top-20-games-for-the-first-half-of-2026)); 6M players first week ([Traxion](https://traxion.gg/forza-horizon-6-surpasses-six-million-players-in-first-week/)); Circana May 2026 #2 ([GamesBeat](https://gamesbeat.com/james-bond-shakes-up-may-video-game-sales-like-a-vodka-martini-circana/)) | StrategyWiki: none. Fandom forza.fandom.com: unverified. **Original writing** (checklists: cars, roads, boards, events). |
| 4 | Crimson Desert | Open-world action-adventure | PC, PS5, Xbox Series | 2026 | 6M sold in 83 days ([Generación Xbox](https://en.generacionxbox.com/crimson-desert-already-surpasses-4-million-copies-and-confirms-a-historic-launch/)); Circana 2026 year-to-date #2 ([GamesBeat](https://gamesbeat.com/james-bond-shakes-up-may-video-game-sales-like-a-vodka-martini-circana/)); OpenCritic 79–80, Steam Very Positive ([AOL](https://www.aol.com/lifestyle/long-awaited-ps5-open-world-173447965.html)) | StrategyWiki: none. Fandom: none found. **Original writing.** |
| 5 | Monster Hunter Wilds | Action RPG | PC, PS5, Xbox Series | 2025 | Steam peak 1.38M, 5th biggest ever ([WN Hub](https://wnhub.io/news/stores-and-publishing/item-47232)); 10M+ sold ([Insider Gaming](https://insider-gaming.com/monster-hunter-wilds-is-still-2025s-best-selling-game/)); Steam Best of 2025 Platinum ([FullCleared](https://fullcleared.com/news/steams-best-of-2025-revealed-including-top-sellers/)); Metacritic 88 ([ixbt](https://ixbt.games/en/news/2025/12/30/nazvany-lucsie-igry-2025-goda-dlia-playstation-i-xbox-po-versii-metacritic.html)) | StrategyWiki: stub (0 sub-pages). Fandom monsterhunter.fandom.com: unverified. **Original writing.** |
| 6 | Cyberpunk 2077 | Open-world RPG | PC, PS5, Xbox, Switch 2, Mac | 2020 | Steam all-time peak 1.05M ([Dexerto](https://www.dexerto.com/gaming/monster-hunter-wilds-player-count-3152389)); Steam Best of 2025 Gold ([FullCleared](https://fullcleared.com/news/steams-best-of-2025-revealed-including-top-sellers/)); 13.7M sold first month ([Den of Geek](https://www.denofgeek.com/games/hogwarts-legacys-sales-numbers-records-revenue/)) | StrategyWiki: stub (2). Fandom cyberpunk.fandom.com exists ([Fandom Q&A](https://www.fandom.com/articles/cyberpunk-wiki-qa-cd-projekt-red)). **Original writing.** |
| 7 | Kingdom Come: Deliverance II | Open-world RPG | PC, PS5, Xbox Series | 2025 | Steam Best of 2025 Gold ([FullCleared](https://fullcleared.com/news/steams-best-of-2025-revealed-including-top-sellers/)); $118.9M Steam revenue Feb 2025 ([Mezha](https://mezha.ua/en/news/kingdom-come-deliverance-ii-is-the-highest-grossing-game-on-steam-in-february-2025-300185/amp/)); Metacritic 88 ([ixbt](https://ixbt.games/en/news/2025/12/30/nazvany-lucsie-igry-2025-goda-dlia-playstation-i-xbox-po-versii-metacritic.html)); on PC Gamer open-world list | StrategyWiki: none. Fandom Kingdom Come wiki exists, 6,865 pages ([archive notice](https://kingdomcomedeliverance-archive.fandom.com/wiki/Kingdom_Come:_Deliverance_Wiki)); licence footer unverified. **Original writing.** |
| 8 | Red Dead Redemption 2 | Open world | PC, PS4, Xbox One | 2018 | Steam Best of 2025 Gold ([FullCleared](https://fullcleared.com/news/steams-best-of-2025-revealed-including-top-sellers/)); on Steam top-100 chart ([SteamDB](https://www.steamdb.com/en/tools/steam-charts)); GamePressure full guide exists (shows demand) | StrategyWiki: stub (2). Fandom Red Dead wiki ~4,646 articles ([mirror](https://breezewiki.discard.no/reddead/wiki)). **Original writing.** |
| 9 | Zelda: Tears of the Kingdom | Open-world action-adventure | Switch, Switch 2 | 2023 | 20.28M sold ([Shacknews](https://www.shacknews.com/article/138620/nintendo-ntdoy-zelda-totk-20-million)); Switch 2 edition Metacritic 95 ([Multiplayer.it](https://multiplayer.it/notizie/laggregatore-opencritic-stila-la-classifica-dei-migliori-giochi-del-2025.html)); IGN/Fortune "fastest-selling Zelda" ([Fortune](https://fortune.com/2023/05/17/nintendo-legend-of-zelda-tears-of-the-kingdom-sales)) | StrategyWiki: **real guide, 20 sub-pages, CC BY-SA 4.0.** Fandom zelda.fandom.com: unverified. **CC BY-SA adaptation possible** (with attribution and share-alike). |
| 10 | Ghost of Yōtei | Open-world action-adventure | PS5 | 2025 | 3.3M first month ([TechRadar](https://www.techradar.com/gaming/gaming-industry/ghost-of-yotei-sold-over-3-3-million-units-in-its-first-month-sony-describes-the-sequel-as-a-major-hit)); 4.8M est. ([OpenCritic news](https://opencritic.com/news/33006/ghost-of-yotei-sold-almost-three-times-more-copies-than-death-stranding-2)); Metacritic 86 ([ixbt](https://ixbt.games/en/news/2025/12/30/nazvany-lucsie-igry-2025-goda-dlia-playstation-i-xbox-po-versii-metacritic.html)) | StrategyWiki: none. Fandom: none found. **Original writing.** |
| 11 | Hogwarts Legacy | Open-world action RPG | PC, PS, Xbox, Switch | 2023 | 12M in two weeks, $850M ([Den of Geek](https://www.denofgeek.com/games/hogwarts-legacys-sales-numbers-records-revenue/)); WBD record ([Dark Horizons](https://www.darkhorizons.com/?p=163209)); Steam top seller at launch ([3DJuegos](https://www.3djuegos.com/juegos/hogwarts-legacy/noticias/hogwarts-legacy-superventas-steam-antes-su-lanzamiento-lidera-top-semana-delante-todos-juegos-publicados)) | StrategyWiki: stub (1). Fandom hogwartslegacy.fandom.com: unverified. **Original writing.** |
| 12 | Assassin's Creed Shadows | Open world | PC, PS5, Xbox Series, Mac | 2025 | 3M+ players ([Insider Gaming](https://insider-gaming.com/?p=112637)); PCGamesN top PC open world ([PCGamesN](https://www.pcgamesn.com/best-open-world-games)); Ubisoft "largest PS Store launch" (same source) | StrategyWiki: stub (1). Fandom assassinscreed.fandom.com: unverified. **Original writing.** |
| 13 | Elder Scrolls IV: Oblivion Remastered | RPG | PC, PS5, Xbox Series | 2025 | Steam Best of 2025 Gold ([FullCleared](https://fullcleared.com/news/steams-best-of-2025-revealed-including-top-sellers/)); Circana #3 first week, #2 May 2025 ([WN Hub](https://wnhub.io/news/other/item-47714)); PCGamesN #1 PC open world ([PCGamesN](https://www.pcgamesn.com/best-open-world-games)) | StrategyWiki: none for Remastered. **UESP** covers Oblivion fully under CC BY-SA 2.5 ([UESP](https://app.uesp.net/wiki/UESPWiki:Copyrights)). **CC BY-SA adaptation possible** (quest facts), new Remastered changes need original notes. |
| 14 | 007 First Light | Action-adventure | PC, PS5, Xbox Series, Switch 2 | 2026 | Circana May 2026 #1, year-to-date #4 ([GamesBeat](https://gamesbeat.com/james-bond-shakes-up-may-video-game-sales-like-a-vodka-martini-circana/)); Metacritic 84–88 by platform ([Feedbagel](https://feedbagel.com/post/roundup-the-first-reviews-have-arrived-for-007-first-light)); OpenCritic 88 ([OpenCritic](https://opencritic.com/game/19224/-/reviews)) | StrategyWiki: stub (0). Fandom: none found. **Original writing.** |
| 15 | Pragmata | Action-adventure | PC, PS5, Xbox Series, Switch 2 | 2026 | Metacritic 85–88 ([Inven](https://www.invenglobal.com/articles/20850/capcom-strikes-gold-with-new-ip-pragmata-earns-critical-acclaim-metacritic-85)); OpenCritic 87, 95% recommend ([PC Games DE](https://www.pcgames.de/Pragmata-Spiel-72805/News/Wertungen-Fans-Kritiken-Capcom-1525866/)); 1M+ sold ([WN Hub](https://wnhub.io/news/investment/item-50614)); Circana April #2 ([Wccftech](https://wccftech.com/tomodachi-life-pragmata-tops-april-2026-us-sales-charts-circana-new-method/amp/)) | StrategyWiki: stub (0). Fandom: none found. **Original writing.** |
| 16 | Black Myth: Wukong | Soulslike action | PC, PS5, Xbox Series | 2024 | 10M first week ([Lemmy repost of analyst](https://lemmy.dbzer0.com/post/26562353/12948070)); Steam discussions remain active ([Steam](https://steamcommunity.com/app/2358720/discussions/0/6149189044495073085/?l=spanish)); third source **unverified** this session | StrategyWiki: none. Fandom: unverified. **Original writing.** |
| 17 | Elder Scrolls V: Skyrim | RPG | PC, PS, Xbox, Switch | 2011 | IGN top-100 RPGs #7 ([Nexus Mods report](https://www.nexusmods.com/panicore/news/68)); perennial Steam top-100 ([SteamDB](https://www.steamdb.com/en/tools/steam-charts)); Everything Edinburgh ranked list ([link](https://everythingedinburgh.com/games/gaming/best-rpg-games/)) | StrategyWiki: **real guide, 26 sub-pages, CC BY-SA 4.0.** UESP: CC BY-SA 2.5. **CC BY-SA adaptation possible.** |
| 18 | Grand Theft Auto V | Open world | PC, PS, Xbox | 2013 | Steam top-100 perennial ([SteamDB](https://www.steamdb.com/en/tools/steam-charts)); GTA Wiki ~independent since Mar 2026 ([Gfinity](https://www.gfinityesports.com/article/gta-wiki-goes-independent-and-ditches-fandoms-ad-infested-platform)); third source **unverified** | StrategyWiki: 5 sub-pages (thin). gta.wiki: "reuse with attribution", licence not named ([gta.wiki](https://gta.wiki/w/GTA_Wiki:About)) — **unverified**. **Original writing.** GTA VI (19 Nov 2026) will replace this slot. |
| 19 | Death Stranding 2: On the Beach | Open-world action-adventure | PS5 (PC 2026) | 2025 | Metacritic 89, #7 of 2025 on PS ([gagadget](https://gagadget.com/en/690138-metacritic-the-best-games-for-xbox-and-playstation-are-split-fiction-and-clair-obscur-expedition-33-amp/)); ~1/3 of Yōtei's sales ([OpenCritic news](https://opencritic.com/news/33006/ghost-of-yotei-sold-almost-three-times-more-copies-than-death-stranding-2)); third source **unverified** | StrategyWiki: none. Fandom deathstranding.fandom.com: unverified. **Original writing.** |
| 20 | Forza Horizon 5 | Open-world racing | PC, Xbox, PS5 | 2021 | Metacritic 92 (PS5 2025 list, [gagadget](https://gagadget.com/en/690138-metacritic-the-best-games-for-xbox-and-playstation-are-split-fiction-and-clair-obscur-expedition-33-amp/)); Steam top-100 ([SteamDB](https://www.steamdb.com/en/tools/steam-charts)); third source **unverified** | StrategyWiki: stub (1). Fandom: unverified. **Original writing.** |

Excluded on purpose: Resident Evil Requiem (2026's best seller, but survival horror is outside the genre list), Clair Obscur: Expedition 33 and Hades 2 (small studios), Elden Ring Nightreign (co-op roguelike; weak fit for a walkthrough), Saros (roguelike; see 2026 backlog).

---

## 2. Backlog by release year

After the 20 above, the routine works **by release year, newest first: 2026, then 2025, 2024 … down to 2010.** Same filter: big-budget AAA only, no indie or low-budget titles. **Update 2026-10-23:** Tim widened this to all AAA games in any genre (horror, shooters, roguelikes and so on). Online-only multiplayer games and annual sports titles stay out, because they have nothing to walk through.

### Ordering rule
1. Year descending. A game's year is its first full release (remasters count in the remaster's year).
2. Inside a year, order by popularity using the same three-source check: (a) sales or player counts from a publisher statement, Circana, or SteamDB; (b) a critic aggregate (Metacritic or OpenCritic); (c) a presence on an editorial best-of list (IGN, PC Gamer, PCGamesN, GamesRadar). A game needs evidence from at least two of the three to be eligible; a game with only one source goes to the end of its year marked "needs evidence".
3. Skip a game that is already in `research/state.json` as done, skipped or in the top 20.
4. A game not yet released (for example GTA VI) is "queued" with its date and only becomes eligible after release.

### State file design: `research/state.json`
One file in the repo, updated and pushed every run, so a run can crash or be restarted and the next run carries on.

```json
{
  "version": 1,
  "updated": "2026-10-16T03:07:00Z",
  "currentYear": 2026,
  "queue": [
    { "slug": "forza-horizon-6", "title": "Forza Horizon 6", "year": 2026, "status": "done", "evidence": 3, "route": "original", "packPath": "packs/forza-horizon-6.json" },
    { "slug": "crimson-desert", "year": 2026, "status": "in-progress", "step": "steam-achievements", "evidence": 3 },
    { "slug": "grand-theft-auto-vi", "year": 2026, "status": "queued", "releaseDate": "2026-11-19" }
  ],
  "yearsCompleted": [],
  "errors": [{ "slug": "nioh-3", "step": "rawg", "message": "not found", "at": "..." }]
}
```
Rules: `status` is one of `queued`, `in-progress`, `done`, `skipped`, `needs-evidence`. Each run picks the first `in-progress` item, else the first `queued` item whose year equals `currentYear` (sorted by evidence then title). When no queued items remain for a year, the run builds the candidate list for the next year down and appends it, then moves `currentYear`. The run writes the file after every step, not only at the end.

### 2026 candidates (titles only; evidence; route)
| Title | Evidence | Route |
|---|---|---|
| Forza Horizon 6, Crimson Desert, 007 First Light, Pragmata | In top 20 above | — |
| Saros (Housemarque, PS5, 30 Apr) | Metacritic 88, OpenCritic 91 ([Players](https://players.com.ua/en/news/saros-a-ps5-exclusive-receives-high-praise-from-critics/)); Metacritic top-10 of 2026 ([Outlook](https://respawn.outlookindia.com/gaming/gaming-news/metacritic-reveals-the-top-10-highest-rated-games-of-2026-so-far)) | Original. Genre fit is loose (roguelike action); Tim decides. |
| Marvel's Wolverine (PS5, 15 Sep) | Release date confirmed ([TheSixthAxis](https://www.thesixthaxis.com/2026/02/24/marvels-wolverine-launches-this-september/)); reviews/sales **unverified** | Original. Needs evidence. |
| Grand Theft Auto VI (PS5/Xbox, 19 Nov) | Date confirmed by Take-Two ([PCWorld](https://www.pcworld.com/article/3052217/gta-6s-release-date-confirmed-for-real-this-time-seriously.html)) | Queued until release. Expect the biggest demand of the decade. |
| Nioh 3 (PS5/PC, 6 Feb) | Date only ([GamesRadar](https://www.gamesradar.com/uk/test-7)); **unverified** | Original. Needs evidence. |
| Onimusha: Way of the Sword; Control Resonant; The Blood of the Dawnwalker; Assassin's Creed Black Flag Resynced | Named as 2026 releases ([VGC](https://www.videogameschronicle.com/news/new-game-release-dates/)); dates/scores **unverified** | Needs evidence. |
| Resident Evil Requiem | 2026's best seller ([GamesBeat](https://gamesbeat.com/james-bond-shakes-up-may-video-game-sales-like-a-vodka-martini-circana/)) | Excluded: horror. Tim may override. |
| Fable | Moved to Feb 2027 ([MP1st](https://mp1st.com/news/fable-officially-pushed-back-to-february-2027)) | Queued for 2027. |

### 2025 candidates
| Title | Evidence | Route |
|---|---|---|
| Monster Hunter Wilds, Kingdom Come II, Ghost of Yōtei, AC Shadows, Oblivion Remastered, Death Stranding 2 | In top 20 above | — |
| Elden Ring Nightreign | Steam Best of 2025 Gold ([FullCleared](https://fullcleared.com/news/steams-best-of-2025-revealed-including-top-sellers/)) | Original; co-op roguelike, weak walkthrough fit. |
| Avowed; Mafia: The Old Country; Dying Light: The Beast; Metal Gear Solid Delta; Pokémon Legends Z-A; Indiana Jones (Dec 2024, PS5 2025) | Known 2025 AAA releases; scores/sales **unverified** this session | Needs evidence. StrategyWiki: Mafia and Indiana Jones pages exist but are stubs; Avowed and Dying Light have none. |
| Clair Obscur: Expedition 33 | Metacritic 92 ([ixbt](https://ixbt.games/en/news/2025/12/30/nazvany-lucsie-igry-2025-goda-dlia-playstation-i-xbox-po-versii-metacritic.html)) | Excluded as a small studio (about 30 people). Tim may override: it is one of 2025's most-wanted guides. |

2024 and earlier: the routine fills these in using the ordering rule. Likely 2024 leaders: Black Myth: Wukong (in top 20), Final Fantasy VII Rebirth (StrategyWiki stub), Dragon's Dogma 2, Star Wars Outlaws, Metaphor: ReFantazio (StrategyWiki stub), Indiana Jones and the Great Circle.

---

## 3. Content strategy: how guides get made legally

**The honest picture.** A full walkthrough for one AAA open-world game is 50–300 pages of text written by someone who played the game with notes open. GamerGuides' Elden Ring guide is 282 pages and still "work in progress" after two years (docs/RESEARCH.md). No wiki gives this away under a licence we can use. Plan for original writing as the main route and treat the other routes as accelerators.

### Route A: original writing (main route)
- **Who writes:** (1) Tim or a paid guide writer who plays the game; (2) a Claude session that drafts *structure* (chapter list, collectible categories, missable warnings) from public facts, then a human fills in the step text from play. An AI must never write step-by-step directions it cannot verify; wrong directions are the number-one complaint about AI guide apps (docs/RESEARCH.md).
- **Review process:** every pack goes through: draft → "played it" check by a second person → schema validation (automatic) → spoiler tagging check → publish. Each step gets a `verifiedOn` date and `gameVersion` so stale guides are flagged after patches.
- **Effort per game:** a "core path" guide (main story plus missables, 60–150 steps) is about 2–4 weeks of one person's part-time play and writing. A 100% guide is 2–3 months. Checklists only (collectibles, achievements) are 2–5 days.
- **Cost:** freelance guide writers are typically paid per word or per guide; expect low thousands of pounds for a core-path guide. **Ask Tim before hiring anyone.**

### Route B: CC BY-SA adaptation
- Usable sources found today: StrategyWiki (CC BY-SA 4.0; real depth only for Skyrim and Tears of the Kingdom), UESP (CC BY-SA 2.5; Elder Scrolls), Fandom text (CC BY-SA 3.0 by default, check each wiki's footer; images not included), bg3.wiki (CC BY-SA 4.0 only for content after 20 July 2024).
- **What it means for the app:** attribution is mandatory on every screen that shows adapted text: source wiki, page link, licence link, and a note that the text was changed. **Share-alike means the adapted guide pack itself must be published under the same CC BY-SA licence.** That pack cannot be "exclusive" to the app. Keep adapted packs separate from original packs (a `licence` field on each pack) so Tim can sell original packs and give adapted ones away.
- Effort per game: 1–2 weeks to restructure wiki pages into steps with hints, plus a play-through to verify. Rewrite wording into the app's three-tier hint style; do not paste pages.
- Do not use MediaWiki pages of wikis whose footer says NC (non-commercial), such as some wiki.gg sites.

### Route C: licensing
- **GamerGuides** sells EPUB guides to readers; that is a personal-use purchase, not a right to republish. I could not find any commercial licensing terms on their site (**unverified**). If Tim wants this route, email them for a redistribution licence; expect a revenue share or a fee. Same for GamePressure (PDF/ePUB guides) and PowerPyx.
- **Publisher deals:** Sony's PS5 "Game Help" shows publishers do make official help content. A small app is unlikely to get a deal before it has users. Park this until Phase 4.

### Route D: achievement and trophy lists via Steam Web API
- `ISteamUserStats/GetSchemaForGame` returns the achievement names, descriptions and icons for a Steam app ID. These are facts about the game and fine to show; still credit "Data from Steam".
- `GetGlobalAchievementPercentagesForApp` gives "how many players got this", useful for a difficulty hint.
- Needs a free key (see section 4). Covers PC versions only; Nintendo and PlayStation-only games (Tears of the Kingdom, Ghost of Yōtei) have no Steam list, so those need manual trophy lists.
- Effort: minutes per game once the routine exists.

### Route E: community corrections (Phase 4)
Readers submit a fix; a maintainer approves it. Contributors must tick a box granting the app a licence to their text (and CC BY-SA if the pack is CC BY-SA). This is the only way to keep 20+ guides current after patches.

---

## 4. Data sources and keys

| Service | What it gives | Key? | Cost | Tim must do |
|---|---|---|---|---|
| RAWG API | Game catalogue: titles, cover art, platforms, release dates, genres | **Yes, required on every request**; otherwise requests can be banned ([RAWG docs mirror](https://api.apis.guru/v2/specs/rawg.io/v1.0.json)) | Free for commercial use under 100,000 monthly users or 500,000 page views/month; above that email api@rawg.io | Sign up at https://rawg.io/apidocs with an email. Attribution: "Data from RAWG" with a link on every screen that shows RAWG data. |
| Steam Web API | Achievement lists, global unlock %, app list | **Yes** ([Steam dev page](https://steamcommunity.com/dev)): "All use of the Steam Web API requires the use of an API Key" | Free. Commonly cited limit of 100,000 calls/day (**unverified** in the official terms) | Needs a Steam account. Get key at https://steamcommunity.com/dev/apikey; agree to the Steam API Terms of Use. |
| StrategyWiki / UESP / Fandom | CC BY-SA text facts (see section 3) | No key. Use the MediaWiki API, not page scraping, and send a polite User-Agent | Free | Nothing, but note Fandom blocks bots; fetch via its API from a cloud routine and expect refusals. |
| OpenCritic / Metacritic / SteamDB / Circana | Popularity evidence only | None used; links only | Free | Nothing. |
| Expo EAS (builds, updates) | Cloud builds for TestFlight and App Store | Expo account | Free plan: 15 iOS + 15 Android builds/month, updates to 1,000 users ([Expo pricing](https://expo.dev/pricing.md)); Starter $19/month | Create an Expo account (free). **Ask before any paid plan.** |
| Apple Developer Program | Required to put the app on TestFlight and the App Store | Apple ID | US$99 per year (from memory; **confirm on developer.apple.com**) | Tim enrols personally. Paid: **needs Tim's yes.** |
| Supabase or similar (Phase 3) | Accounts and sync database | Project keys | Free tier exists; paid above it | **Ask Tim before creating.** |
| Anthropic API (Phase 3 AI Q&A) | Grounded answers from our own guide text | API key | Pay per use | **Ask Tim before enabling.** Alternative: ship Q&A as a server feature only for paying users. |

Security note for the phone app: a key inside the app can be extracted. RAWG and Steam keys are low-risk (free, read-only), acceptable in Phase 2. Before App Store release, move all keys behind a tiny server (Phase 3 milestone 3.1) so the app never holds them.

---

## 5. Development roadmap (Phases 2–4)

Every milestone is something Tim can open in Expo Go and check. Sizes: S = a day or two, M = about a week, L = two weeks or more. Typecheck and lint (`npx tsc --noEmit`, `npx expo lint`) run before each milestone is called done.

### Phase 2: content pipeline, offline packs, voice, search

| # | Milestone | What gets built | Acceptance check (Tim does this) | Size |
|---|---|---|---|---|
| 2.1 | Guide-pack format v1 | A JSON file format for one game: `id`, `title`, `version`, `gameVersion`, `licence` (original / CC-BY-SA / licensed), `attribution` block, `chapters[]`, `steps[]` with nudge/more/text/spoiler, `collectibles[]`. Matches today's `src/data/types.ts` plus the new fields. A validator script (`npm run validate-packs`) rejects bad packs. Lanternfall becomes the first pack file in `packs/`. | Run the validator; it passes for Lanternfall and fails for a pack with a deliberate typo. App looks unchanged. | S |
| 2.2 | Offline pack storage | Packs download to the phone's document folder (expo-file-system, works in Expo Go) and an index lives in AsyncStorage. Library screen gains "Download" and "Remove" buttons, a size readout, and an "Updated" date. Packs are served as plain files from the GitHub repo (free) for now. | Turn on Airplane Mode; the downloaded guide, checklist and play mode still open. Deleting a pack frees space; progress is kept. | M |
| 2.3 | Pack updates and licence display | Checks for a newer pack version when online; shows "Update available". An "About this guide" screen shows licence, attribution links and the game version it was checked against. | Bump a pack's version on GitHub; the app offers the update. CC BY-SA attribution shows for a CC BY-SA pack. | S |
| 2.4 | Read-aloud | expo-speech (included in Expo Go, confirmed for SDK 57). Play mode gets a "Read step" button, a stop button, a voice and speed picker in Settings, and "read the next step automatically" toggle. Respects the hint tier: reads only what is revealed. | In play mode, tap Read; the phone speaks the step. Spoiler text is not read while hidden. Works with the screen locked? (iOS may stop it; note the result.) | M |
| 2.5 | Search | In-pack search over step titles, text and collectible names, with results that respect the spoiler level (hidden text is matched but shown as "spoiler, tap to reveal"). Pure JavaScript index (for example MiniSearch), built when a pack is installed, so it works offline. | Search "letter" in Lanternfall and get both Keeper's Letters. Search works in Airplane Mode. | M |
| 2.6 | RAWG catalogue | A "Find a game" screen that searches RAWG, shows cover art and platforms, and marks which games have a guide pack. Attribution "Data from RAWG" with link. Key stored in an `.env` file not committed to git. | Search "Elden Ring"; cover and platforms appear; tapping a game with no pack shows "No guide yet, request it". | M |
| 2.7 | First real guide pack | One original "core path" pack for a top-20 game Tim owns and can play (suggest Forza Horizon 6 or 007 First Light: shorter, checklists are factual). Steam achievement list pulled by the routine. | Play the first hour with the app beside you; every step matches what is on screen. | L |
| 2.8 | Voice questions (optional) | Push-to-talk needs speech recognition, which is **not** in Expo Go. Defer to Phase 3 or a custom build after Tim approves. | — | — |

### Phase 3: accounts, sync, grounded AI Q&A

| # | Milestone | What gets built | Acceptance check | Size |
|---|---|---|---|---|
| 3.1 | Tiny server | A small hosted function (Supabase Edge or Cloudflare Worker, free tiers) that holds the RAWG and Steam keys and serves pack files. The app stops holding keys. | App still works; keys are gone from the app bundle. **Needs Tim's approval of the hosting account.** | M |
| 3.2 | Accounts | Sign in with Apple (required by Apple if any login is offered) and email magic link. Guest mode stays the default; nothing is locked behind login. | Sign in on the phone; sign out; app still works as guest. | M |
| 3.3 | Progress sync | Progress saved on device first (unchanged), then merged to the account when online. Merge rule: a step is done if done on any device. Never deletes local progress. | Tick steps on phone A, open phone B (or web), same ticks appear. Airplane Mode ticks sync later. | L |
| 3.4 | Grounded Q&A | "Ask the guide" box. The server finds the most relevant steps in the installed pack text (our own or licensed text only), sends only those to Claude with the rule "answer only from these; otherwise say I'm not sure", and returns the answer with tap-able citations to step IDs. Spoiler level is enforced: cited steps beyond the reader's current position are blurred. | Ask "where is the second letter?" in Lanternfall: answer cites the right step. Ask something not in the guide: it says "I'm not sure". | L |
| 3.5 | Q&A limits and cost control | Per-user daily limit, cost dashboard, off switch. | Hit the limit; see a friendly message. | S |

### Phase 4: guide-writing tool, community, pricing, App Store

| # | Milestone | What gets built | Acceptance check | Size |
|---|---|---|---|---|
| 4.1 | Guide-writing tool | A web page (Expo web build, same codebase) with a form editor for chapters, steps, hints and collectibles, live preview on a phone frame, schema validation, licence/attribution fields, and "Export pack" / "Open pull request" buttons. | Tim writes a three-step chapter without touching code and sees it in Expo Go after merge. | L |
| 4.2 | Community corrections | "Suggest a fix" on every step; a review queue in the writing tool; contributor licence tick-box. | Submit a fix from the phone; approve it in the tool; the pack version bumps. | M |
| 4.3 | Pricing | Recommendation from RESEARCH.md: free app, free checklists, one-time price per guide pack or a single yearly subscription; no ad tiers. In-app purchases via Apple (RevenueCat or expo-iap; needs a custom build, not Expo Go). | Buy a test pack in TestFlight sandbox. **Tim decides prices.** | L |
| 4.4 | App Store release | Apple Developer enrolment, app icon and screenshots, privacy policy page, EAS build, TestFlight round with 5–10 testers, App Store submission. Android later via the same EAS pipeline. | App appears on TestFlight, then the App Store. | L |

---

## 6. Automation plan

Claude Code routines (cloud, [docs](https://code.claude.com/docs/en/routines)) clone `torgan59/game-companion-app` fresh each run, run without asking for permission, push to a `claude/…` branch, and can run **at most hourly** (the minimum interval is one hour). Routines use Tim's claude.ai subscription usage and are available on Pro and Max plans.

### Can run as scheduled routines
| Routine | Schedule | What it does | Output |
|---|---|---|---|
| **game-researcher** (redesigned, below) | Daily at 03:07 (a few minutes past the hour starts more reliably) | One game per run: RAWG metadata, Steam achievement list, StrategyWiki/UESP licence and depth check, candidate chapter skeleton, attribution record | Pull request with `research/<slug>.json`, updated `research/state.json` |
| **pack-validator** | On every pull request (GitHub trigger) | Runs `npm run validate-packs`, typecheck and lint; comments on the PR | PR comment |
| **year-backfill** | Weekly | When the queue for `currentYear` is empty, builds the next year's candidate list with the three-source check (section 2) | PR updating `research/state.json` |
| **staleness check** | Weekly | Compares each pack's `gameVersion` with the latest patch note date it can find; flags packs needing re-verification | Issue per stale pack |

### Needs Tim (cannot be automated)
- Playing the game and verifying every step of an original guide.
- Creating keys and accounts (RAWG, Steam, Expo, Apple, hosting, Anthropic), and any spend.
- Approving licences: using a CC BY-SA source (share-alike applies), any publisher or GamerGuides deal, contributor terms.
- Merging routine pull requests (routines push to `claude/` branches; keep `main` protected).
- App Store submission, pricing, screenshots, privacy policy sign-off.

### Redesign of the paused `game-researcher` routine
Problems found in `.claude/agents/game-researcher.md`:
1. It says "RAWG: no key needed for basic queries". **Wrong**: RAWG requires a key on every request and may ban keyless callers. The routine failed for exactly this reason.
2. It tries to do 20 games in one run across four phases. A cloud run that hits one error loses everything after it.
3. It picks games by RAWG "top rating", which surfaces old classics and indies, not Tim's genre-filtered AAA list.
4. It mentions "public scraping allowed for content listing" on StrategyWiki and Fandom. Replace with: use the MediaWiki API, take facts and structure only, record licence and page URL for attribution, never paste guide prose.

Redesign:
- **One game per run.** Read `research/state.json`, pick the next item (rule in section 2), do all steps for that one game, write the state file after every step, push, open a PR, stop.
- **State file** as designed in section 2. The 20 games in section 1 are pre-loaded as the first queue entries in priority order; the year-based backlog follows.
- **Keys as secrets, not in files.** In the routine's cloud environment: set network access to **Custom** with `api.rawg.io`, `api.steampowered.com`, `strategywiki.org`, `en.uesp.net`, and `*.fandom.com` added to the default list. RAWG and Steam take the key as a URL parameter (`?key=`), which the environment's "network secret" header feature cannot inject, so store them as environment variables `RAWG_API_KEY` and `STEAM_API_KEY` on an environment only Tim uses (the docs warn environment variables are visible to anyone who uses that environment; that is only Tim here). Never commit keys; the routine must fail loudly if a key is missing instead of continuing keyless.
- **Verify push works** on the first run: the prompt ends with "push branch `claude/research-<slug>` and open a PR; if push fails, print the error and stop". Tim checks the run's transcript (a green status only means the session ran, not that the task succeeded, per the docs) and that a PR exists before enabling the daily schedule.
- **Prompt must be self-contained:** include the genre filter, the no-scrape rule, the state-file rules, and the exact output file shapes. Keep it in the repo as `.claude/agents/game-researcher.md` so changes are reviewed like code.
- **Budget:** one game per day is 20 games in three weeks. Raise to twice daily only if runs are clean and usage allows.

---

## 7. Risks and open decisions for Tim

1. **Content is the real cost, not code.** Eighteen of the top 20 games need original writing. Decide: Tim writes core-path guides himself for games he plays, hire a writer, or start with checklists plus achievements only and add full walkthroughs for 3–5 games.
2. **CC BY-SA share-alike.** Any pack adapted from StrategyWiki, UESP or Fandom must itself be CC BY-SA, so it cannot be an exclusive paid pack. Decide whether to use this route at all (it helps Skyrim, Oblivion and Tears of the Kingdom most).
3. **Which game gets the first real guide?** Suggest Forza Horizon 6 or 007 First Light (shorter, checklist-heavy, 2026-fresh). Needs a game Tim owns and will play with notes.
4. **Keys and accounts to create now (all free):** RAWG key, Steam Web API key, Expo account. Paid later: Apple Developer (US$99/year, unverified), hosting and Anthropic API (pay per use). Say yes/no to each.
5. **GTA VI on 19 November 2026** will be the biggest guide demand in years. Decide whether to clear the schedule to write that guide first; it would displace the top-20 order.
6. **Genre borderline cases:** Resident Evil Requiem (horror, best seller of 2026), Clair Obscur (small studio, Metacritic 92), Saros (roguelike). Include or exclude?
7. **Fandom verification gap.** Fandom blocks automated checks, so wiki existence and licence for 12 games are unverified. Either Tim checks the footers in a browser, or we treat Fandom as unavailable.
8. **Voice questions and in-app purchases need a custom build** (not Expo Go). Decide when to leave Expo Go; it means EAS builds and a development build on Tim's phone.
9. **AI answers must never be wrong with confidence.** The Q&A design answers only from our own text and says "I'm not sure" otherwise. Agree this rule is non-negotiable even if it makes the feature feel limited.
10. **Routine spend.** Daily routine runs use subscription usage. Agree a cadence (daily suggested) and a review habit (Tim merges or closes each PR within a week so the queue does not stall).
11. **Stale guides after patches.** Every pack carries a `gameVersion`; decide who re-verifies and how often (suggest: on every major patch for the five most-read packs).
12. **Platform coverage.** Several top games are PlayStation- or Switch-only (Ghost of Yōtei, Tears of the Kingdom, Death Stranding 2), so no Steam achievement data. Accept manual trophy lists for those.
