# Competitor research: video game walkthrough and play-along apps

Date: 15 October 2026. **[F]** marks a sourced fact. **[I]** marks an inference.

## How the research was done

- **Reverse engineering (REA).** A separate, isolated headless Chrome browser loaded gamerguides.com. REA read it passively and did not log in or click.
  - Home page bundle analysis, evidence ID `ev_526c176e4e62e95fd44e5b754de6e35f09f3eea1cd80ddc9f96f52eb58f5af63`.
  - Elden Ring guide page inspection, evidence ID `ev_2a192d5283b60777196dff581cc3fac36b1c1d9c59fadc2d38b6720d18a46357`.
- **Web research.** Covered GamerGuides, IGN and Map Genie, GameSpot, PC Gamer, Game8, Fextralife, Fandom, PowerPyx, TrueAchievements, PSNProfiles, PS5 Game Help, Steam guides, Microsoft Gaming Copilot, Nvidia G-Assist, Overwolf and generic AI guide apps.

## What REA observed on GamerGuides

**Observed:**
- The site is server-rendered pages. The home page loads 12 small first-party scripts (about 115 KB), with no large app framework.
- Sign-in is through Google and Apple. Script endpoints include `/auth/google-code` and `/auth/beleaguered-fruit-company`, which is Apple sign-in.
- There is a "follow" system (`/user/follow`, `/user/follow-intent`), live search (`/search-results`) and Cloudflare bot protection.
- The Elden Ring guide is "Guide and Walkthrough · 282 Pages". It is labelled "Updated 2 yrs ago" and "work-in-progress", and the Maps and Database sections are tagged "WIP".
- Each game has these tabs: Maps, Guide, Database, Achievements, Videos, Clips, Routes, Checklists, Tier Lists, Reviews, Previews and Download.
- Ads appear in the page content. Text reads "Scroll down to continue reading" and "Close ad", with a "Subscribe Now to Remove Ads" upsell.

**Inferred:**
- It is a web-first product. The app is a reader and map shell over the same content.
- Some guides go stale after game patches.

**Unknown:**
- The app internals. No iOS build was analysed.

## GamerGuides summary

- **Features [F]:** Deep numbered guides, interactive maps with tick-off markers and private notes, checklists synced across devices, trophy roadmaps, item databases, a "My Games" library with Steam import, a reader with themes, and offline, EPUB and PDF downloads.
- **Pricing [F]:**
  - Free, with ads and a limit of 50 map markers.
  - Ad Free: $2.99 a month.
  - Map Explorer: $3.99 a month.
  - Premium: $9.99 a month or $59.99 a year.
  - Legend: $199.99 one time.
  - Per-game Map Pass: $4.99–$12.99.
- **App [F]:** The iOS app was rebuilt as v2 in August 2026 and its rating was reset. Android is unconfirmed.
- **Gaps [F/I]:**
  - No spoiler control.
  - No in-play or hands-free mode, no AI Q&A, and no patch-version flags.
  - Five overlapping price tiers.
  - Offline access is locked to the most expensive tier.

## Market-wide complaints [F]

- Ad and autoplay overload, worst on mobile. Fextralife and Fandom are the most criticised.
- Inaccurate or unmoderated wiki edits.
- Map Genie loses ticked-off progress, shows a blank map offline and resets filters. Its iOS price is higher than on the web.
- No offline mode, SEO padding, and video-only answers with long intros.
- Generic AI guide apps give confident wrong answers.
- Platform tools are locked to their own ecosystems: PS5 Game Help needs developer support, and Gaming Copilot is Xbox only.

## Gaps and opportunities (ranked) [I]

1. **Spoiler control.** Tiered hints for every step: a nudge, then more help, then the full answer.
2. **Play mode for a second screen.** The phone stays awake, uses big type and has one step per screen, and it remembers where you are.
3. **Progress that never resets.** Saved on the device first, then synced.
4. **Offline packs.** Free, not locked behind the top tier.
5. **Hands-free voice.** Read the step aloud, with push-to-talk questions.
6. **Grounded AI Q&A.** Answers only from our own or licensed guide text, with citations and an "I'm not sure" reply.
7. **Missable warnings and collectible checklists.** For example, "last chance before chapter 5".
8. **Clean, ad-light design with simple, fair pricing.** For example, a one-time price per game or a single subscription.
9. **Short clips inline with text.** Never video-only answers.
10. **Coverage of every platform.** Switch, PlayStation, Xbox and PC.

## Legal constraints

- Do not copy or scrape competitor guide text, maps or marker sets. Do not train or ground AI on them without a licence.
- Content options:
  - Original writing.
  - Licensed guides, for example from GamerGuides, which sells EPUBs.
  - Community contributions under clear terms.
  - CC BY-SA wiki content with attribution.
  - Publisher partnerships.
- Game metadata APIs:
  - RAWG has a free commercial tier with required attribution.
  - IGDB likely needs a partnership for commercial use. Confirm this before relying on it.

## Sources

- https://www.gamerguides.com/premium
- https://apps.apple.com/app/id599410871
- https://justuseapp.com/en/app/1618843254/mapgenie-elden-ring-map/reviews
- https://uk.trustpilot.com/review/mapgenie.io
- https://exmove.substack.com/p/one-of-the-most-hated-sites-on-the
- https://www.gfinityesports.com/article/gta-wiki-goes-independent-and-ditches-fandoms-ad-infested-platform
- https://blog.playstation.com/2021/06/11/a-closer-look-at-ps5s-game-help-feature
- https://engadget.com/ai/microsofts-gaming-copilot-ai-assistant-is-coming-to-windows-pcs-and-the-xbox-mobile-app-185452965.html
- https://www.gamefile.news/p/google-ai-overview-false-tips-trash-goblin
- https://www.powerpyx.com/about/
- https://steamcommunity.com/guides/
