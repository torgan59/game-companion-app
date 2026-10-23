---
name: game-researcher
description: Research one game per run. Fetch RAWG metadata, Steam achievements, wiki structure, and generate research data. Update state.json after every step, push to PR.
---

# Game Researcher Agent

**Goal:** Research one game per run. Collect metadata from RAWG, Steam achievements and global completion %, wiki structure and licence info, and generate a research JSON file. Update `research/state.json` after every step and every error so the next run never loses work.

## Why One Game Per Run

Batch workflows lose all progress after the first network error. One game per run means one successful PR or one logged error. The routine is designed to run daily (or more) on a schedule. Tim approves and merges PRs as they land, so the queue never stalls.

## Game Selection

Read `research/state.json` at the start. Pick the next game using this rule:

1. If any item has `status: "in-progress"`, resume that game.
2. Otherwise, find the first item where `status: "queued"` AND (`year == state.currentYear`).
3. Items are pre-sorted by evidence count (descending) and title (alphabetical).
4. If no queued items remain for `currentYear`, move `currentYear` down by 1 and continue.
5. Never pick a game already marked `done`, `skipped`, or `needs-evidence` in the queue.
6. **Never pick a game another run has already claimed** (see below).

### Avoiding duplicates

`state.json` on `main` only shows merged work. A game being researched in an open PR still looks `queued` there, so two runs (the daily routine and a manual batch, say) can pick the same game. Before picking, check every remote branch:

```bash
git fetch --prune origin
# Slugs that already have a research file on main or on any unmerged branch
for b in $(git branch -r --no-merged origin/main | grep -v HEAD) origin/main; do
  git ls-tree --name-only "$b" research/ | sed -n 's#^research/\(.*\)\.json$#\1#p'
done | grep -v '^state$' | sort -u
```

- Treat every slug in that list as claimed, and skip it even if `state.json` on `main` says `queued`. Also skip a slug marked `in-progress` or `done` in `research/state.json` on any unmerged branch.
- Exception: rule 1 (resume `in-progress`) applies only to a game that is in progress on your own branch.
- **Claim early.** Straight after picking, create the branch, mark the game `in-progress` in `state.json`, commit and push. That way a run starting a minute later sees the claim.
- If a duplicate still lands, keep the version already on `main`. Fold any genuinely new facts into it, then close the duplicate PR without merging.

The 20 games in `docs/PLAN.md` section 1 are pre-loaded in `research/state.json` at project start. The backlog from section 2 (2026 down to 2010) is appended by the `year-backfill` routine as years empty.

## Genre Filter

AAA games only (large studios, major publishers), in **any genre**: open world, RPG, action-adventure, soulslike, racing, shooters, horror, roguelikes, fighting, platformers, strategy and so on. Tim widened the filter from five genres to all AAA games on 2026-10-23.

Still excluded:
- Indie games, small studios and low-budget titles.
- Games with nothing to walk through: online-only multiplayer games with no story or solo content (battle royales, hero shooters, MMOs) and annual sports titles. A big-studio shooter with a single-player campaign is in; its multiplayer-only sibling is out.

## State File: `research/state.json`

Location: `research/state.json`

Structure (see `docs/PLAN.md` section 2 for full detail):

```json
{
  "version": 1,
  "updated": "2026-10-16T03:07:00Z",
  "currentYear": 2026,
  "queue": [
    {
      "slug": "forza-horizon-6",
      "title": "Forza Horizon 6",
      "year": 2026,
      "status": "done",
      "evidence": 3,
      "route": "original",
      "packPath": "packs/forza-horizon-6.json"
    },
    {
      "slug": "crimson-desert",
      "title": "Crimson Desert",
      "year": 2026,
      "status": "in-progress",
      "step": "steam-achievements",
      "evidence": 3,
      "route": "original"
    },
    {
      "slug": "grand-theft-auto-vi",
      "title": "Grand Theft Auto VI",
      "year": 2026,
      "status": "queued",
      "releaseDate": "2026-11-19",
      "evidence": 3,
      "route": "original"
    }
  ],
  "yearsCompleted": [],
  "errors": [
    {
      "slug": "nioh-3",
      "step": "rawg-fetch",
      "message": "not found",
      "at": "2026-10-15T08:32:00Z"
    }
  ]
}
```

Rules:
- `status`: one of `queued`, `in-progress`, `done`, `skipped`, `needs-evidence`.
- `step`: current step if `in-progress` (one of: `rawg-fetch`, `steam-achievements`, `wiki-structure`, `skeleton-gen`, `attribution-build`).
- `evidence`: count of sources (0–3) that confirm popularity.
- `route`: `original`, `cc-by-sa`, or `needs-research`.
- Write the file after every step, every error, and the final push.

## Routine Steps (One Game Per Run)

### 1. Load state and pick the next game
- Read `research/state.json`.
- Run the duplicate check under "Avoiding duplicates", then apply the selection rule above.
- Log the chosen game: `Researching [title] ([year], [evidence] sources, route: [route])`.
- Write state.json: set this item's `status` to `in-progress`, `step` to `rawg-fetch`.
- Commit and push the branch `claude/research-[slug]` now, before any API calls, so the claim is visible to other runs.

### 2. Fetch RAWG metadata
- **API:** `https://api.rawg.io/api/games` with filter `search=[exact-title]&key=[RAWG_API_KEY]`.
- **Fail loudly if `RAWG_API_KEY` is not set.** Do not continue keyless; the API bans keyless callers.
- Extract: title, slug, cover art (largest available), platforms, release date, playtime (average), genres, tags.
- If not found exactly, try search by slug (allow fuzzy match, pick highest score).
- If still not found: log error, set status to `skipped`, write state.json, stop.
- **Write state.json:** update `step` to `steam-achievements`.

### 3. Fetch Steam achievements (PC only)
- **Skip if this game has no Steam presence** (Tears of the Kingdom, Ghost of Yōtei, Death Stranding 2 PS5-only are N/A).
- **API:** Use Steam Web API: first call `IStoreService/GetAppList/v1/?key=[STEAM_API_KEY]&max_results=50000&include_games=true&last_appid=[N]` (paginated; repeat with the last appid until done) to find the app ID by matching against the game title. `ISteamApps/GetAppList/v2` is dead (404).
  - Then call `ISteamUserStats/GetSchemaForGame/v2/?appid=[ID]&key=[STEAM_API_KEY]` to fetch achievements. `GetSchemaForApp` is dead (404).
  - Then call `ISteamUserStats/GetGlobalAchievementPercentagesForApp?appid=[ID]` (key not required for this call).
- **Fail loudly if `STEAM_API_KEY` is missing.** Do not continue.
- Extract: achievement names, descriptions, unlock percentages (global %); count total achievements.
- If app not found or API returns 0 achievements, log and continue (not an error; game may have no achievements or Steam entry).
- **Write state.json:** update `step` to `wiki-structure`.

### 4. Check StrategyWiki and UESP for structure (via MediaWiki API)
- **Do not scrape.** Use the MediaWiki API.
- **For StrategyWiki:** API endpoint `https://strategywiki.org/w/api.php?action=query&titles=[game-title]&prop=pageprops|links&format=json&pllimit=500`.
  - Check if a page exists; if so, count immediate sub-pages (namespace 0, depth 1).
  - Extract page structure: chapter names, section count, estimated depth.
  - Record licence: StrategyWiki is CC BY-SA 4.0 ([confirmed in footer](https://strategywiki.org/wiki/Main_Page)).
- **For Elder Scrolls games:** query UESP (`https://en.uesp.net/w/api.php`) instead of or in addition to StrategyWiki.
  - UESP is CC BY-SA 2.5 ([confirmed in copyright notice](https://en.uesp.net/wiki/UESPWiki:Copyrights)).
  - Extract quest structure, location counts, NPC lists (facts, not full prose).
- **For Fandom:** try `https://[game-slug].fandom.com/w/api.php?action=query&titles=[game-title]&prop=pageprops|links&format=json`.
  - If HTTP 403 or 402, log "Fandom unavailable, marked unverified" and continue (do not retry).
  - If successful, extract page structure; record licence from the wiki's footer (usually CC BY-SA 3.0, but check).
- Log findings: "StrategyWiki: [depth/pages], UESP: [available/not], Fandom: [available/unavailable/unverified]".
- **Write state.json:** update `step` to `skeleton-gen`.

### 5. Generate chapter skeleton
- Read wiki data collected in step 4.
- If wiki has usable structure (3+ chapters or 10+ sub-pages), estimate chapter count and collectible categories.
- Generate `chapters: []` array (skeleton with title, summary, empty steps array).
- Generate `collectibles: []` array with inferred kinds: `relic`, `letter`, `upgrade`, `trophy` (from achievement or trophy list, or wiki structure).
- Match structure to `Game` type in `src/data/types.ts`: `id`, `title`, `platforms`, `blurb` (from RAWG playtime and genres), `accent` (hex color TBD), `chapters`, `collectibles`.
- **Write state.json:** update `step` to `attribution-build`.

### 6. Build attribution and write research/<slug>.json
- Collect all sources used: RAWG, Steam, StrategyWiki (if applicable), UESP (if applicable), Fandom (if applicable).
- Build attribution strings:
  - RAWG: "Data from [RAWG](https://rawg.io) — [link to game on RAWG]"
  - Steam: "Achievement data from Steam" (if applicable)
  - CC BY-SA wikis: "Wiki structure and facts from [wiki name] under CC BY-SA [version] — [link to page]"
- If Fandom was checked but unavailable, note: "Fandom unavailable (blocked by site)".
- Write `research/[slug].json` with this structure:

```json
{
  "id": "[slug]",
  "title": "[title]",
  "year": 2026,
  "platforms": ["PC", "PS5"],
  "rawgId": 123456,
  "rawgSlug": "forza-horizon-6",
  "playtime": 45,
  "genres": ["racing", "open-world"],
  "coverUrl": "https://...",
  "steamAppId": 1234567,
  "achievements": {
    "total": 42,
    "examples": [
      { "name": "First Win", "percent": 87.3 }
    ]
  },
  "wikiStructure": {
    "strategywiki": {
      "available": true,
      "pages": 15,
      "licence": "CC BY-SA 4.0",
      "url": "https://strategywiki.org/wiki/Forza_Horizon_6"
    },
    "fandom": {
      "available": false,
      "reason": "HTTP 403 blocked"
    }
  },
  "game": {
    "id": "[slug]",
    "title": "[title]",
    "platforms": ["PC", "PS5"],
    "blurb": "[auto-generated from RAWG: playtime, genres, summary]",
    "accent": "#FF6B35",
    "chapters": [
      {
        "id": "chapter-1",
        "title": "[skeleton from wiki or estimated]",
        "summary": "[auto-generated]",
        "steps": []
      }
    ],
    "collectibles": [
      {
        "id": "achievement-1",
        "name": "[from Steam]",
        "kind": "trophy",
        "chapterId": "[estimated or TBD]",
        "where": "[auto-generated]"
      }
    ]
  },
  "attribution": [
    "RAWG: Game metadata, cover art, platforms, release date — [link]",
    "Steam Web API: Achievement names and unlock percentages",
    "StrategyWiki: Chapter structure and quest facts, CC BY-SA 4.0 — [link]"
  ],
  "route": "original",
  "notes": "StrategyWiki has 15 pages; full adaptation possible. No Fandom access (blocked by site)."
}
```

- Write `research/[slug].json`.
- **Write state.json:** set this item's `status` to `done`, add `packPath` field (format: `packs/[slug].json` — placeholder, not created yet), clear `step` field.

### 7. Push branch and open PR
- Branch name: `claude/research-[slug]` (lowercase, hyphens).
- Commit message:
  ```
  Research: [title] metadata, achievements, wiki structure

  State: [completed count] of [total queue] complete, on year [currentYear].
  
  Co-Authored-By: Claude Haiku 4.5 <noreply@anthropic.com>
  ```
- **If push fails, print the error and stop.** Do not retry. Tim will check the transcript.
- **If push succeeds**, open a PR with title: `Research: [title] metadata, achievements, wiki structure`
  - PR body: `State: [completed count] of [total queue] complete, on year [currentYear]. Research file: research/[slug].json. Use this data to draft or adapt the guide pack.`
  - Assign to Tim (optional; depends on project settings).

## Network Access and Secrets

**Set in the routine's cloud environment (not in files):**

- **Network access:** Custom list: `api.rawg.io`, `api.steampowered.com`, `strategywiki.org`, `en.uesp.net`, `*.fandom.com`, plus defaults.
- **Environment variables** (Tim sets these in the environment, not in code):
  - `RAWG_API_KEY` — from https://rawg.io/apidocs (free sign-up). Required; fail loudly if missing.
  - `STEAM_API_KEY` — from https://steamcommunity.com/dev/apikey. Required for PC games; fail loudly if missing.

Never commit keys to git. Never attempt keyless requests. Log a clear error and stop if either key is missing at the start of step 1.

## Error Handling

- **Step fails:** log the error message, set status to `skipped` (if fatal, like RAWG not found) or `needs-evidence` (if transient, like Fandom blocked), write state.json, stop. Do not continue past the failed step.
- **Wiki blocked (403/402):** not an error; log "unavailable", mark in state and research JSON, continue.
- **Game already done/in-queue:** skip, continue to next unprocessed game.
- **No RAWG match:** skip, mark `skipped`.
- **Missing API key:** fail immediately with error message; do not continue.

## Output Files

Three files per run:

1. **`research/[slug].json`** — one file per game, with metadata, achievement counts, wiki structure, and skeleton Game object.
2. **`research/state.json`** — updated and pushed after every step (including errors), so the next run has full context.
3. **PR:** with branch `claude/research-[slug]` and commit message with attribution. If push fails, stop and report the error.

## Verification Before Scheduling

Before enabling the daily schedule:

1. Run the routine once manually.
2. Tim checks the transcript: no loud errors, keys were found, push succeeded.
3. Tim confirms a PR was created with the research file.
4. If all good, enable daily scheduling at 03:07 UTC.

## Budget

- One game per day = 20 games in 3 weeks (top 20 from section 1 of PLAN.md).
- Raise to twice daily only if runs are clean and no rate-limiting occurs.
