# Coordinator Log

Hourly status from the `game-companion-coordinator` scheduled task. Newest entry first.
Tracks the 20-game research queue in `research/state.json` and files landing in `research/`.

---

## 2026-10-17 10:10 UTC

**Year / queue:** currentYear = 2026. On `main`, state.json unchanged: 20 queued, 0 in progress, 0 done, 0 errors (last updated 2026-10-16 20:30 UTC). On the PR #1 branch, `forza-horizon-6` is `done` (19 queued remain). No change since the 09:10 run.

**Progress:** 1/20 games researched (awaiting merge). 0/20 merged to main.

**Latest commits (origin/main):**
- `4d05b18` Coordinator log: 09:10 check (coordinator, 09:10 UTC)
- `3c46f4d` Coordinator log: 08:10 check (coordinator, 08:10 UTC)
- `f7db155` Coordinator log: 07:10 check, 05:10 and 06:10 runs missing (coordinator, 07:10 UTC)
- `74801d8` Coordinator log: 04:10 check (coordinator, 04:10 UTC)
- `ae52756` Coordinator log: 03:10 check (coordinator, 03:10 UTC)

No new commits from the game-researcher routine. Its last and only run was 21:33 UTC yesterday (PR #1, `abf057d`). Only coordinator log commits have landed since.

**Research files:** `research/` on `main` still contains only `state.json`. `research/forza-horizon-6.json` exists only on the PR #1 branch. Naming matches the slug. No stray or misnamed files. Branches on origin: `main`, `claude/research-forza-horizon-6` only.

**Quality check:** skipped, no new research files (forza-horizon-6.json passed at the 22:10 check).

**Blockers / errors / stale PRs:**
- **PR #1 is still open, now 12 h 35 min old, waiting for Tim to review and merge.** Head is still `abf057d`, no comments, reviews or new commits since it opened at 21:35 UTC (PR `updated_at` unchanged). The PR only touches `research/`, which no main commit has changed, so no conflict is expected.
- The `game-researcher-routine` scheduled task is **still disabled** (last fired 21:33 UTC, succeeded). Nothing new will be researched until Tim merges PR #1 and then re-enables it (merge first, otherwise the next run re-picks forza-horizon-6 from main's stale state.json).
- Still outstanding from PR #1's notes: `.claude/agents/game-researcher.md` names two dead Steam endpoints (`ISteamApps/GetAppList/v2`, `GetSchemaForApp`). Working replacements are `IStoreService/GetAppList/v1` and `ISteamUserStats/GetSchemaForGame/v2`.
- Coordinator schedule itself is healthy: 07:10 through 10:10 all ran on time.

**Next game in queue:** `crimson-desert` — Crimson Desert (2026, evidence 3, route original), once PR #1 merges. Remaining 2026 titles after it: `007-first-light`, `pragmata`.

---

## 2026-10-17 09:10 UTC

**Year / queue:** currentYear = 2026. On `main`, state.json unchanged: 20 queued, 0 in progress, 0 done, 0 errors (last updated 2026-10-16 20:30 UTC). On the PR #1 branch, `forza-horizon-6` is `done` (19 queued remain). No change since the 08:10 run.

**Progress:** 1/20 games researched (awaiting merge). 0/20 merged to main.

**Latest commits (origin/main):**
- `3c46f4d` Coordinator log: 08:10 check (coordinator, 08:10 UTC)
- `f7db155` Coordinator log: 07:10 check, 05:10 and 06:10 runs missing (coordinator, 07:10 UTC)
- `74801d8` Coordinator log: 04:10 check (coordinator, 04:10 UTC)
- `ae52756` Coordinator log: 03:10 check (coordinator, 03:10 UTC)
- `669e124` Coordinator log: 02:10 check (coordinator, 02:10 UTC)

No new commits from the game-researcher routine. Its last and only run was 21:33 UTC yesterday (PR #1, `abf057d`). Only coordinator log commits have landed since.

**Research files:** `research/` on `main` still contains only `state.json`. `research/forza-horizon-6.json` exists only on the PR #1 branch. Naming matches the slug. No stray or misnamed files. Branches on origin: `main`, `claude/research-forza-horizon-6` only.

**Quality check:** skipped, no new research files (forza-horizon-6.json passed at the 22:10 check).

**Blockers / errors / stale PRs:**
- **PR #1 is still open, now 11 h 34 min old, waiting for Tim to review and merge.** Head is still `abf057d`, no comments, reviews or new commits since it opened at 21:35 UTC. GitHub still reports mergeable state `unknown`; the PR only touches `research/`, which no main commit has changed, so no conflict is expected.
- The `game-researcher-routine` scheduled task is **still disabled** (last fired 21:33 UTC, succeeded). Nothing new will be researched until Tim merges PR #1 and then re-enables it (merge first, otherwise the next run re-picks forza-horizon-6 from main's stale state.json).
- Still outstanding from PR #1's notes: `.claude/agents/game-researcher.md` names two dead Steam endpoints (`ISteamApps/GetAppList/v2`, `GetSchemaForApp`). Working replacements are `IStoreService/GetAppList/v1` and `ISteamUserStats/GetSchemaForGame/v2`.
- The 05:10 and 06:10 gap has not recurred; 07:10, 08:10 and 09:10 all ran normally.

**Next game in queue:** `crimson-desert` — Crimson Desert (2026, evidence 3, route original), once PR #1 merges. Remaining 2026 titles after it: `007-first-light`, `pragmata`.

---

## 2026-10-17 08:10 UTC

**Year / queue:** currentYear = 2026. On `main`, state.json unchanged: 20 queued, 0 in progress, 0 done, 0 errors (last updated 2026-10-16 20:30 UTC). On the PR #1 branch, `forza-horizon-6` is `done` (19 queued remain). No change since the 07:10 run.

**Progress:** 1/20 games researched (awaiting merge). 0/20 merged to main.

**Latest commits (origin/main):**
- `f7db155` Coordinator log: 07:10 check, no change, PR #1 still awaiting merge, 05:10 and 06:10 runs missing (coordinator, 07:10 UTC)
- `74801d8` Coordinator log: 04:10 check (coordinator, 04:10 UTC)
- `ae52756` Coordinator log: 03:10 check (coordinator, 03:10 UTC)
- `669e124` Coordinator log: 02:10 check (coordinator, 02:10 UTC)
- `9906b45` Coordinator log: 01:10 check (coordinator, 01:10 UTC)

No new commits from the game-researcher routine. Its last and only run was 21:33 UTC yesterday (PR #1, `abf057d`). Only coordinator log commits have landed since.

**Research files:** `research/` on `main` still contains only `state.json`. `research/forza-horizon-6.json` exists only on the PR #1 branch. Naming matches the slug. No stray or misnamed files. Branches on origin: `main`, `claude/research-forza-horizon-6` only.

**Quality check:** skipped, no new research files (forza-horizon-6.json passed at the 22:10 check).

**Blockers / errors / stale PRs:**
- **PR #1 is still open, now 10 h 34 min old, waiting for Tim to review and merge.** Head is still `abf057d`, no comments, reviews or new commits since it opened at 21:35 UTC. GitHub reports mergeable state `unknown` this run (not recomputed since main moved); the PR only touches `research/`, which no main commit has changed, so no conflict is expected.
- The `game-researcher-routine` scheduled task is **still disabled** (last fired 21:33 UTC, succeeded). Nothing new will be researched until Tim merges PR #1 and then re-enables it (merge first, otherwise the next run re-picks forza-horizon-6 from main's stale state.json).
- The 05:10 and 06:10 coordinator runs still have no log entry; the 07:10 and 08:10 runs both completed normally, so this looks like a one-off gap rather than a recurring fault.
- Still outstanding: `.claude/agents/game-researcher.md` names two dead Steam endpoints (`ISteamApps/GetAppList/v2`, `GetSchemaForApp`). Working replacements are `IStoreService/GetAppList/v1` and `ISteamUserStats/GetSchemaForGame/v2`.

**Next game in queue:** once PR #1 merges, `crimson-desert` — Crimson Desert (2026, evidence 3, route original).

---

## 2026-10-17 07:10 UTC

**Year / queue:** currentYear = 2026. On `main`, state.json unchanged: 20 queued, 0 in progress, 0 done, 0 errors (last updated 2026-10-16 20:30 UTC). On the PR #1 branch, `forza-horizon-6` is `done` (19 queued remain). No change since the 04:10 run.

**Progress:** 1/20 games researched (awaiting merge). 0/20 merged to main.

**Latest commits (origin/main):**
- `74801d8` Coordinator log: 04:10 check, no change, PR #1 still awaiting merge, researcher off (coordinator, 04:10 UTC)
- `ae52756` Coordinator log: 03:10 check (coordinator, 03:10 UTC)
- `669e124` Coordinator log: 02:10 check (coordinator, 02:10 UTC)
- `9906b45` Coordinator log: 01:10 check (coordinator, 01:10 UTC)
- `46da85f` Coordinator log: 00:10 check (coordinator, 00:10 UTC)

No new commits from the game-researcher routine. Its last and only run was 21:33 UTC (PR #1, `abf057d`). Only coordinator log commits have landed since.

**Research files:** `research/` on `main` still contains only `state.json`. `research/forza-horizon-6.json` exists only on the PR #1 branch. Naming matches the slug. No stray or misnamed files. Branches on origin: `main`, `claude/research-forza-horizon-6` only.

**Quality check:** skipped, no new research files (forza-horizon-6.json passed at the 22:10 check).

**Blockers / errors / stale PRs:**
- **PR #1 is still open, now 9 h 35 min old, waiting for Tim to review and merge.** Head is still `abf057d`, mergeable state `clean`, no comments or reviews since it opened at 21:35 UTC.
- **Two coordinator runs left no log entry.** The coordinator schedule fires at :09 each hour, but there are no 05:10 or 06:10 entries or commits. Either those runs failed to start or they stopped before committing. Nothing on the repo looks broken, and this 07:10 run worked normally. Worth a glance at the scheduled-task run history if it happens again.
- The `game-researcher-routine` scheduled task is **still disabled** (last fired 21:33 UTC, succeeded). Nothing new will be researched until Tim merges PR #1 and then re-enables it (merge first, otherwise the next run re-picks forza-horizon-6 from main's stale state.json).
- Still outstanding: `.claude/agents/game-researcher.md` names two dead Steam endpoints (`ISteamApps/GetAppList/v2`, `GetSchemaForApp`). Working replacements are `IStoreService/GetAppList/v1` and `ISteamUserStats/GetSchemaForGame/v2`.

**Next game in queue:** once PR #1 merges, `crimson-desert` — Crimson Desert (2026, evidence 3, route original).

---

## 2026-10-17 04:10 UTC

**Year / queue:** currentYear = 2026. On `main`, state.json unchanged: 20 queued, 0 in progress, 0 done, 0 errors (last updated 2026-10-16 20:30 UTC). On the PR #1 branch, `forza-horizon-6` is `done` (19 queued remain). No change since the 03:10 run.

**Progress:** 1/20 games researched (awaiting merge). 0/20 merged to main.

**Latest commits (origin/main):**
- `ae52756` Coordinator log: 03:10 check, no change, PR #1 still awaiting merge, researcher off (coordinator, 03:10 UTC)
- `669e124` Coordinator log: 02:10 check, no change, PR #1 still awaiting merge, researcher off (coordinator, 02:10 UTC)
- `9906b45` Coordinator log: 01:10 check, no change, PR #1 still awaiting merge, researcher off (coordinator, 01:10 UTC)
- `46da85f` Coordinator log: 00:10 check, no change, PR #1 still awaiting merge, researcher off (coordinator, 00:10 UTC)
- `c848ff2` Coordinator log: 23:10 check, no change, PR #1 still awaiting merge (coordinator, 23:10 UTC)

No new commits from the game-researcher routine. Its last and only run was 21:33 UTC (PR #1, `abf057d`). Only coordinator log commits have landed since.

**Research files:** `research/` on `main` still contains only `state.json`. `research/forza-horizon-6.json` exists only on the PR #1 branch. Naming matches the slug. No stray or misnamed files. Branches on origin: `main`, `claude/research-forza-horizon-6` only.

**Quality check:** skipped, no new research files (forza-horizon-6.json passed at the 22:10 check).

**Blockers / errors / stale PRs:**
- **PR #1 is still open, now 6 h 35 min old, waiting for Tim to review and merge.** Head is still `abf057d`; no comments, reviews or new commits since it opened at 21:35 UTC. GitHub reports mergeable state as `unknown` this run (it was `clean` earlier); that usually just means GitHub has not recomputed it since main moved, and nothing on the PR touches the same files as the coordinator log commits.
- The `game-researcher-routine` scheduled task is **still disabled** (last fired 21:33 UTC, succeeded). Nothing new will be researched until Tim merges PR #1 and then re-enables it (merge first, otherwise the next run re-picks forza-horizon-6 from main's stale state.json).
- Still outstanding: `.claude/agents/game-researcher.md` names two dead Steam endpoints (`ISteamApps/GetAppList/v2`, `GetSchemaForApp`). Working replacements are `IStoreService/GetAppList/v1` and `ISteamUserStats/GetSchemaForGame/v2`.

**Next game in queue:** once PR #1 merges, `crimson-desert` — Crimson Desert (2026, evidence 3, route original).

---

## 2026-10-17 03:10 UTC

**Year / queue:** currentYear = 2026. On `main`, state.json unchanged: 20 queued, 0 in progress, 0 done, 0 errors (last updated 2026-10-16 20:30 UTC). On the PR #1 branch, `forza-horizon-6` is `done` (19 queued remain). No change since the 02:10 run.

**Progress:** 1/20 games researched (awaiting merge). 0/20 merged to main.

**Latest commits (origin/main):**
- `669e124` Coordinator log: 02:10 check, no change, PR #1 still awaiting merge, researcher off (coordinator, 02:10 UTC)
- `9906b45` Coordinator log: 01:10 check, no change, PR #1 still awaiting merge, researcher off (coordinator, 01:10 UTC)
- `46da85f` Coordinator log: 00:10 check, no change, PR #1 still awaiting merge, researcher off (coordinator, 00:10 UTC)
- `c848ff2` Coordinator log: 23:10 check, no change, PR #1 still awaiting merge (coordinator, 23:10 UTC)
- `63bc6d7` Coordinator log: PR #1 (Forza Horizon 6) open, 1/20 researched, researcher schedule still off (coordinator, 22:10 UTC)

No new commits from the game-researcher routine. Its last and only run was 21:33 UTC (PR #1, `abf057d`). Only coordinator log commits have landed since.

**Research files:** `research/` on `main` still contains only `state.json`. `research/forza-horizon-6.json` exists only on the PR #1 branch (2 files changed there: the research file and state.json). Naming matches the slug. No stray or misnamed files. Branches on origin: `main`, `claude/research-forza-horizon-6` only.

**Quality check:** skipped, no new research files (forza-horizon-6.json passed at the 22:10 check).

**Blockers / errors / stale PRs:**
- **PR #1 is still open, now 5 h 35 min old, waiting for Tim to review and merge.** Head is still `abf057d`; no comments, reviews or new commits since it opened at 21:35 UTC.
- The `game-researcher-routine` scheduled task is **still disabled** (last fired 21:33 UTC, succeeded). Nothing new will be researched until Tim merges PR #1 and then re-enables it (merge first, otherwise the next run re-picks forza-horizon-6 from main's stale state.json).
- Still outstanding: `.claude/agents/game-researcher.md` names two dead Steam endpoints (`ISteamApps/GetAppList/v2`, `GetSchemaForApp`). Working replacements are `IStoreService/GetAppList/v1` and `ISteamUserStats/GetSchemaForGame/v2`.

**Next game in queue:** once PR #1 merges, `crimson-desert` — Crimson Desert (2026, evidence 3, route original).

---

## 2026-10-17 02:10 UTC

**Year / queue:** currentYear = 2026. On `main`, state.json unchanged: 20 queued, 0 in progress, 0 done, 0 errors (last updated 2026-10-16 20:30 UTC). On the PR #1 branch, `forza-horizon-6` is `done` (19 queued remain). No change since the 01:10 run.

**Progress:** 1/20 games researched (awaiting merge). 0/20 merged to main.

**Latest commits (origin/main):**
- `9906b45` Coordinator log: 01:10 check, no change, PR #1 still awaiting merge, researcher off (coordinator, 01:10 UTC)
- `46da85f` Coordinator log: 00:10 check, no change, PR #1 still awaiting merge, researcher off (coordinator, 00:10 UTC)
- `c848ff2` Coordinator log: 23:10 check, no change, PR #1 still awaiting merge (coordinator, 23:10 UTC)
- `63bc6d7` Coordinator log: PR #1 (Forza Horizon 6) open, 1/20 researched, researcher schedule still off (coordinator, 22:10 UTC)
- `b296baa` Add coordinator log: first hourly status (coordinator, 21:10 UTC)

No new commits from the game-researcher routine. Its last and only run was 21:33 UTC (PR #1, `abf057d`). Only coordinator log commits have landed since.

**Research files:** `research/` on `main` still contains only `state.json`. `research/forza-horizon-6.json` exists only on the PR #1 branch. Naming matches the slug. No stray or misnamed files. Branches on origin: `main`, `claude/research-forza-horizon-6` only.

**Quality check:** skipped, no new research files (forza-horizon-6.json passed at the 22:10 check).

**Blockers / errors / stale PRs:**
- **PR #1 is still open, now 4 h 35 min old, waiting for Tim to review and merge.** Head is still `abf057d`; no comments, reviews or new commits since it opened at 21:35 UTC.
- The `game-researcher-routine` scheduled task is **still disabled** (last fired 21:33 UTC, succeeded). Nothing new will be researched until Tim merges PR #1 and then re-enables it (merge first, otherwise the next run re-picks forza-horizon-6 from main's stale state.json).
- Still outstanding: `.claude/agents/game-researcher.md` names two dead Steam endpoints (`ISteamApps/GetAppList/v2`, `GetSchemaForApp`). Working replacements are `IStoreService/GetAppList/v1` and `ISteamUserStats/GetSchemaForGame/v2`.

**Next game in queue:** once PR #1 merges, `crimson-desert` — Crimson Desert (2026, evidence 3, route original).

---

## 2026-10-17 01:10 UTC

**Year / queue:** currentYear = 2026. On `main`, state.json unchanged: 20 queued, 0 in progress, 0 done, 0 errors (last updated 2026-10-16 20:30 UTC). On the PR #1 branch, `forza-horizon-6` is `done` (19 queued remain). No change since the 00:10 run.

**Progress:** 1/20 games researched (awaiting merge). 0/20 merged to main.

**Latest commits (origin/main):**
- `46da85f` Coordinator log: 00:10 check, no change, PR #1 still awaiting merge, researcher off (coordinator, 00:10 UTC)
- `c848ff2` Coordinator log: 23:10 check, no change, PR #1 still awaiting merge (coordinator, 23:10 UTC)
- `63bc6d7` Coordinator log: PR #1 (Forza Horizon 6) open, 1/20 researched, researcher schedule still off (coordinator, 22:10 UTC)
- `b296baa` Add coordinator log: first hourly status (coordinator, 21:10 UTC)
- `febffc9` Redesign game researcher agent: one game per run, state.json, API keys as secrets (Tim, 20:38 UTC)

No new commits from the game-researcher routine. Its last and only run was 21:33 UTC (PR #1, `abf057d`). Only coordinator log commits have landed since.

**Research files:** `research/` on `main` still contains only `state.json`. `research/forza-horizon-6.json` exists only on the PR #1 branch. Naming matches the slug. No stray or misnamed files. Branches on origin: `main`, `claude/research-forza-horizon-6` only.

**Quality check:** skipped, no new research files (forza-horizon-6.json passed at the 22:10 check).

**Blockers / errors / stale PRs:**
- **PR #1 is still open, now 3 h 35 min old, waiting for Tim to review and merge.** No comments, reviews or new commits on it since it opened. A local test merge against the current `main` is still clean (no conflict markers).
- The `game-researcher-routine` scheduled task is **still disabled**. Nothing new will be researched until Tim merges PR #1 and then re-enables it (merge first, otherwise the next run re-picks forza-horizon-6 from main's stale state.json).
- Still outstanding: `.claude/agents/game-researcher.md` names two dead Steam endpoints (`ISteamApps/GetAppList/v2`, `GetSchemaForApp`). Working replacements are `IStoreService/GetAppList/v1` and `ISteamUserStats/GetSchemaForGame/v2`.

**Next game in queue:** once PR #1 merges, `crimson-desert` — Crimson Desert (2026, evidence 3, route original).

---

## 2026-10-17 00:10 UTC

**Year / queue:** currentYear = 2026. On `main`, state.json unchanged: 20 queued, 0 in progress, 0 done, 0 errors (last updated 2026-10-16 20:30 UTC). On the PR #1 branch, `forza-horizon-6` is `done` (19 queued remain). No change since the 23:10 run.

**Progress:** 1/20 games researched (awaiting merge). 0/20 merged to main.

**Latest commits (origin/main):**
- `c848ff2` Coordinator log: 23:10 check, no change, PR #1 still awaiting merge (coordinator, 23:10 UTC)
- `63bc6d7` Coordinator log: PR #1 (Forza Horizon 6) open, 1/20 researched, researcher schedule still off (coordinator, 22:10 UTC)
- `b296baa` Add coordinator log: first hourly status (coordinator, 21:10 UTC)
- `febffc9` Redesign game researcher agent: one game per run, state.json, API keys as secrets (Tim, 20:38 UTC)
- `adc2be6` Initial research queue: 20 games in priority order (Tim, 20:37 UTC)

No new commits from the game-researcher routine. Its last and only successful run was 21:33 UTC (PR #1, `abf057d`). Only coordinator log commits have landed since.

**Research files:** `research/` on `main` still contains only `state.json`. `research/forza-horizon-6.json` exists only on the PR #1 branch. Naming matches the slug. No stray or misnamed files. Branches on origin: `main`, `claude/research-forza-horizon-6` only.

**Quality check:** skipped, no new research files (forza-horizon-6.json passed at the 22:10 check).

**Blockers / errors / stale PRs:**
- **PR #1 is still open, now 2 h 35 min old, waiting for Tim to review and merge.** No comments, reviews or new commits on it. A local test merge against the current `main` is still clean (no conflict markers).
- The `game-researcher-routine` scheduled task is **still disabled**. Nothing new will be researched until Tim merges PR #1 and then re-enables it (merge first, otherwise the next run re-picks forza-horizon-6 from main's stale state.json).
- Still outstanding: `.claude/agents/game-researcher.md` names two dead Steam endpoints (`ISteamApps/GetAppList/v2`, `GetSchemaForApp`). Working replacements are `IStoreService/GetAppList/v1` and `ISteamUserStats/GetSchemaForGame/v2`.

**Next game in queue:** once PR #1 merges, `crimson-desert` — Crimson Desert (2026, evidence 3, route original).

---

## 2026-10-16 23:10 UTC

**Year / queue:** currentYear = 2026. On `main`, state.json still shows 20 queued, 0 in progress, 0 done, 0 errors. On the PR #1 branch, `forza-horizon-6` is `done` (19 queued remain). No change since the 22:10 run.

**Progress:** 1/20 games researched (awaiting merge). 0/20 merged to main.

**Latest commits (origin/main):**
- `63bc6d7` Coordinator log: PR #1 (Forza Horizon 6) open, 1/20 researched, researcher schedule still off (coordinator, 22:10 UTC)
- `b296baa` Add coordinator log: first hourly status (coordinator, 21:10 UTC)
- `febffc9` Redesign game researcher agent: one game per run, state.json, API keys as secrets (Tim, 20:38 UTC)
- `adc2be6` Initial research queue: 20 games in priority order (Tim, 20:37 UTC)
- `163d425` Plan: 20 games, content strategy, automation design (Tim, 20:35 UTC)

No new commits from the game-researcher routine since `abf057d` (21:35 UTC, PR #1). The routine has not fired since; its schedule is still disabled.

**Research files:** `research/` on `main` contains only `state.json`. The only research file in the repo is `research/forza-horizon-6.json` on the PR #1 branch. Naming matches the slug. No stray or misnamed files. No new branches on origin beyond `claude/research-forza-horizon-6`.

**Quality check:** skipped, no new research files since the 22:10 check (forza-horizon-6.json passed then).

**Blockers / errors / stale PRs:**
- **PR #1 is still open, 1 h 35 min old, waiting for Tim to review and merge.** A local test merge against the current `main` is clean (the branch predates COORDINATOR_LOG.md but does not touch it). GitHub reports mergeable state as "unknown" only because it has not recomputed since main moved; there is no conflict.
- The `game-researcher-routine` scheduled task is **still disabled**. Nothing new will be researched until Tim merges PR #1 and re-enables it (in that order, otherwise the next run re-picks forza-horizon-6 from main's stale state.json).
- Still outstanding from PR #1's notes: `.claude/agents/game-researcher.md` names two dead Steam endpoints (`ISteamApps/GetAppList/v2`, `GetSchemaForApp`). Working replacements are `IStoreService/GetAppList/v1` and `ISteamUserStats/GetSchemaForGame/v2`.

**Next game in queue:** `crimson-desert` — Crimson Desert (2026, evidence 3, route original), once PR #1 merges. Remaining 2026 titles after it: `007-first-light`, `pragmata`.

---

## 2026-10-16 22:10 UTC

**Year / queue:** currentYear = 2026. On `main`, state.json still shows 20 queued, 0 in progress, 0 done, 0 errors. On the open PR #1 branch, `forza-horizon-6` is marked `done` (19 queued remain). Main will catch up when PR #1 merges.

**Progress:** 1/20 games researched (awaiting merge). 0/20 merged to main.

**Latest commits:**
- `abf057d` Research: Forza Horizon 6 metadata, achievements, wiki structure (Claude, 21:35 UTC, branch `claude/research-forza-horizon-6`, PR #1)
- `b296baa` Add coordinator log: first hourly status (coordinator, 21:10 UTC)
- `febffc9` Redesign game researcher agent: one game per run, state.json, API keys as secrets (Tim, 20:38 UTC)
- `adc2be6` Initial research queue: 20 games in priority order (Tim, 20:37 UTC)
- `163d425` Plan: 20 games, content strategy, automation design (Tim, 20:35 UTC)

**Research files:** On `main`, `research/` still contains only `state.json`. PR #1 adds `research/forza-horizon-6.json` (520 lines) and updates `research/state.json`. Filename matches the slug. The `packPath: packs/forza-horizon-6.json` entry in state.json is a placeholder the agent spec asks for; no `packs/` directory exists yet, which is expected.

**Quality check (research/forza-horizon-6.json, from PR #1):** PASS.
- `id` = forza-horizon-6, `title` = Forza Horizon 6, `platforms` = Xbox Series X|S, PC.
- `game` object present with 5 chapters (id, title, summary, steps) and 57 collectibles (id, name, kind, chapterId, where).
- RAWG id and cover, Steam app 2483190 with 57 achievements, attribution list and route (`original`) all filled in.
- Caveat from the researcher: no wiki structure was found (StrategyWiki has no page, Fandom returned empty), so the chapters are an estimate grouped from achievements and will need original guide writing.

**Blockers / errors / stale PRs:**
- **PR #1 is open and waiting for Tim to review and merge.** Mergeable state is clean, 2 files changed, no conflicts. Opened 21:35 UTC. Not stale yet.
- The `game-researcher-routine` scheduled task is **still disabled**. Its one manual run at 21:33 UTC succeeded in about 2 minutes and produced PR #1, so the pipeline works end to end. Re-enabling the hourly schedule is Tim's call.
- The researcher reported that two Steam endpoints named in `.claude/agents/game-researcher.md` return 404 (`ISteamApps/GetAppList/v2`, `GetSchemaForApp`). It used `IStoreService/GetAppList/v1` and `ISteamUserStats/GetSchemaForGame/v2` instead. The agent file should be updated so future runs do not waste a retry on the dead endpoints.
- The researcher also noted `store.steampowered.com` is blocked by the environment network policy, and that state.json was re-saved with different formatting (larger diff than the real change).

**Next game in queue:** once PR #1 merges, `crimson-desert` — Crimson Desert (2026, evidence 3, route original). If the researcher runs before the merge, it will re-pick `forza-horizon-6` from main's stale state.json, so merge PR #1 before re-enabling the schedule.

---

## 2026-10-16 21:10 UTC

**Year / queue:** currentYear = 2026. 20 games queued, 0 in progress, 0 done, 0 errors in state.json.

**Progress:** 0/20 games done.

**Latest commits (origin/main):**
- `febffc9` Redesign game researcher agent: one game per run, state.json, API keys as secrets (Tim, 20:38 UTC)
- `adc2be6` Initial research queue: 20 games in priority order (Tim, 20:37 UTC)
- `163d425` Plan: 20 games, content strategy, automation design (Tim, 20:35 UTC)
- `da67742` Add game-researcher agent skill (Tim, 20:07 UTC)
- `0bd13f0` First slice: library, spoiler-safe guide, checklist, play mode (torgan59, Oct 15)

**Research files:** `research/` contains only `state.json`. No `research/[slug].json` files yet. No naming issues. No `claude/research-*` branches on origin. No pull requests (open or closed) in the repo.

**Blockers / errors / stale PRs:**
- The `game-researcher-routine` scheduled task is **disabled** (turned off 20:42 UTC). Its only run (20:07 UTC, before the redesign commit) finished in about 20 seconds and produced no branch, PR, or research file. Nothing will land until Tim runs it once manually, checks the transcript for loud errors (missing `RAWG_API_KEY` / `STEAM_API_KEY`), confirms a PR appears, then re-enables the hourly schedule.
- No stale PRs (none exist).

**Quality check:** skipped, no new research files.

**Next game in queue:** `forza-horizon-6` — Forza Horizon 6 (2026, evidence 3, route original). Other 2026 titles after it: `crimson-desert`, `007-first-light`, `pragmata`.
