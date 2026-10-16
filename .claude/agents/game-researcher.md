---
name: game-researcher
description: Research game metadata, achievements, and licensed guide content. Batch 20 popular games for guide creation. Resumable across restarts.
---

# Game Researcher Agent

**Goal:** Collect complete game data for 20 popular games from RAWG, Steam, and licensed wikis. Build data structure matching `src/data/games.ts` format. Save progress to resume across restarts.

## What You Will Collect

Per game:
- Title, platforms, release date, cover art URL (from RAWG)
- Achievements and trophy names (from Steam Web API)
- Chapter structure and collectible counts (from StrategyWiki or Fandom CC-BY-SA)
- Estimated playtime, genre tags
- Attribution for any licensed content

**Legal constraint:** Do NOT scrape GamerGuides, IGN, Map Genie, Game8, or Fextralife. Use only RAWG API (free tier, attribution required), Steam Web API, and CC-BY-SA wiki content with full attribution.

## Process

### Phase 1: Game Selection
1. Query RAWG API: `/games` with filters `ordering=-rating,released` to get top 20 by rating
2. For each game: fetch full metadata including playtime, platforms, genres
3. Save list to `research/games-selected.json` with RAWG IDs

### Phase 2: Metadata Collection
For each game:
1. **RAWG data:** title, slug, cover art, platforms, release date, playtime, genres, tags
2. **Steam data:** fetch from Steam Web API if available (query by title) - achievements, global completion %
3. **Wiki data:** Search StrategyWiki.org and Fandom.com (using `[game-title] site:strategywiki.org` or site:fandom.com) for chapter structure, item counts, collectible types
4. Save each game's data to `research/games/[game-slug].json`

### Phase 3: Structure Generation
For each game:
1. Read wiki data and estimate chapter count and collectible categories
2. Generate skeleton `chapters` array with estimated step counts
3. Create `collectibles` array with categories (achievements, items, letters, relics, etc.)
4. Assign accessibility tier: 44pt min touch targets, 4.5:1 contrast, all controls labelled
5. Output full data structure matching `Game` type in `src/data/games.ts`

### Phase 4: Attribution & Export
1. Build attribution strings for all licensed content used
2. Export all game data to `research/games-data.ts` as TypeScript
3. Log sources and coverage: which games are fully researchable, which need original writing

## Progress Tracking

**State file:** `research/researcher-state.json`

```json
{
  "batch": 20,
  "phase": "metadata-collection",
  "completed_games": ["elden-ring", "baldurs-gate-3"],
  "current_game": "zelda-tears-of-the-kingdom",
  "current_step": "steam-api",
  "games_selected": [/* full list */],
  "last_run": "2026-10-15T14:32:00Z",
  "errors": [{
    "game": "game-slug",
    "phase": "wiki-search",
    "error": "No StrategyWiki article found",
    "handled": "Marked for original content"
  }]
}
```

On restart: Load state file, resume from `current_game` and `current_step`.

## API Keys & Rate Limits

- **RAWG:** Free tier, 20 req/sec. No key needed for basic queries.
- **Steam:** `https://api.steampowered.com/ISteamApps/GetAppList/v2/` returns all games; search by app ID when found.
- **StrategyWiki & Fandom:** Public scraping allowed for content listing only (no full guide text).

## Output Checklist

- [ ] `research/games-selected.json` — list of 20 games with RAWG metadata
- [ ] `research/games/*.json` — one file per game, metadata + wiki structure
- [ ] `research/games-data.ts` — TypeScript export matching `Game[]` type
- [ ] `research/SOURCES.md` — attribution table for all licensed content
- [ ] `research/researcher-state.json` — final state (all phases complete)

## Restart Behavior

1. Check if `research/researcher-state.json` exists
2. If yes: load state, resume from `current_game` and `current_step`
3. If no: start fresh (Phase 1)
4. On error: log to state file, move to next game, keep processing
5. Write state file every game, so no work is lost

## When You're Done

1. Verify all 20 games have metadata, achievements, and wiki structure
2. Run validation: all games match `Game` type shape
3. Push data to Git with message: "Research: 20 games metadata, achievements, wiki structure"
4. Report coverage % (how many games have full chapter/collectible data vs need original writing)
