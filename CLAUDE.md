# CLAUDE.md

## What this project is

An iPhone-first (Android second) video game walkthrough and play-along companion app, built with Expo (React Native) and TypeScript. Owner: Tim, who is not a software developer. Explain steps in plain language, prefer small increments he can see in Expo Go, and ask before adding paid services or accounts.

See `docs/RESEARCH.md` for the competitor research and the ranked gaps this app targets.

## Rules

- Never copy or scrape guide text, maps or marker data from GamerGuides, IGN, Map Genie, Game8, Fextralife or any other site. Content must be original, licensed, or properly attributed CC BY-SA.
- `src/data/games.ts` holds a made-up sample game (Lanternfall) for demos.
- Offline first: guides and progress must work with no network.
- Accessibility: touch targets at least 44 pt, text contrast at least 4.5:1, every control labelled.
- Stay with libraries that work in Expo Go and on the web until Tim approves a custom build.

## Roadmap

1. **Phase 1 (done):** library, chapters with tiered spoiler-safe hints, collectible checklist with missable warnings, play mode (screen stays awake, big type, resume), and saved progress on the device.
2. **Phase 2:** read-aloud and voice (expo-speech), a game catalogue from the RAWG API with attribution, downloadable guide packs, and search.
3. **Phase 3:** accounts and cloud sync, and grounded AI Q&A that answers only from our own guide text, with citations.
4. **Phase 4:** a guide-writing tool, community corrections, pricing, and App Store release.
