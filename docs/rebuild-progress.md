# BibleArena 2.0 — Rebuild Progress

Last verified: 2026-11-09  
Repository: `jk-larbi/Bible-Arena-2.0`  
Branch: `hosting/cloudflare-github-pages`  
Supabase project: `cbbtqsjcsttguukfgnvw`  
Live site: https://jk-larbi.github.io/Bible-Arena-2.0/

## Publication boundary — applied to all 19 games

- The catalogue retains 50 level slots so Levels 31–50 can display as Coming Soon.
- Only Levels 1–30 are published and playable.
- Supabase `public.game_levels` was updated and verified: every game has 30 published levels and 20 unpublished levels.
- Frontend `src/lib/levels.ts` now separates `DEFAULT_TOTAL_LEVELS = 50` from `MAX_PUBLISHED_LEVELS = 30`. Local level maps show all 50 slots, but level starts above 30 are rejected as Coming Soon.
- `public.game_content_public` now joins `game_levels` and exposes only content for published levels. Verified result: exactly 150 public rows per game and no public rows above Level 30. Migration: `supabase/migrations/20261109000100_filter_unpublished_game_content.sql`.
- `scripts/testAll50Levels.ts` checks all 50 catalogue slots, the 30-level publication flags, and that Level 31 cannot start for any of the 19 games.

## Verified complete

### Bible Riddles
- Retained as the user's completed reference game.
- Do not modify its question bank during the remaining rebuild.

### Bible Character Quest
- Verified 150 playable challenges: exactly five in each of Levels 1–30.
- Database checks: 150 distinct level/challenge slots, 150 unique normalized question wordings, 150 unique normalized reference-answer keys, 150 four-option rows, 150 rows with four distinct choices including the correct answer, and 150 rows with non-empty explanations and Bible references.
- Cross-game normalized question-wording and reference-answer checks returned no collisions against the other 18 game banks.
- Replaced a repeated Hagar/Ishmael fact in Level 1, Challenge 3 with the distinct Cain-and-Abel fact (Genesis 4:1–16). Updated both the staged source batch and the live Supabase row; the stable question key was retained.
- Difficulty metadata rises from beginner/easy in early levels through medium, advanced, expert and master by Levels 28–30.
- Runtime uses the Supabase public challenge feed. The public feed now enforces publication flags, so this game exposes exactly 150 questions to players; the 100 legacy rows in Levels 31–50 remain unavailable.
- Deployment verification: GitHub Actions run `42619134947` completed successfully for commit `0d9d7f3d84450c078dd9ded18c5020116036b82a`. TypeScript, quiz accuracy/scoring, all-level/game-mechanics tests, staged-batch validation, multiplayer/catalogue checks, build, and the GitHub Pages deploy step all passed.

## Next game — Bible Chain Challenge (not complete)

- Runtime intentionally generates this game locally rather than loading its challenge rows from Supabase.
- Current generator uses a curated people-only catalogue combined with the established character bank. It constructs five-name chains: four linked names plus a multiple-choice final name; every link follows the final-letter/first-letter rule.
- A deterministic audit of the current 30-level generation produced 150 distinct chain sequences, 150 distinct composite reference-answer keys, four distinct final choices, and no repeated person within any one chain. The CI quiz and all-level tests also passed the current chain structural checks.
- Still required before completion: review all names and passages, verify no repeated underlying identity clue across challenges or collisions with other games, inspect the actual player-facing chain presentation, and decide whether the generated bank should also be persisted in Supabase for auditing. Do not mark complete based only on the structural generator tests.

## Other games awaiting completion

1. Bible Crossword
2. Bible Detective
3. Bible Geography Quest
4. Bible Match Up
5. Bible Memory Challenge
6. Bible Puzzles
7. Bible Timeline
8. Bible Word Search
9. Complete the Scripture
10. Find the Bible Book
11. Guess the Emoji
12. Old vs New Testament
13. Scripture Challenge
14. Scripture Scramble
15. Verse Builder
16. Who Said It

Some of these have partial staged batches or prior content work. None should be marked complete until it has 150 verified playable challenges, game-specific mechanics preserved, cross-game duplicate checks, publication checks, and a successful deployment.

## Project-wide quality warning

- A previous full-bank content-quality audit failed because of duplicate wording and reference-answer facts in the wider legacy corpus. Bible Character Quest's own Levels 1–30 passed the exact normalized duplicate checks above, but this does not mean the other game banks are clean.
- Keep checking both normalized question wording and normalized reference-answer facts against all other game banks before importing each new game.
- Human review of Bible meaning and passage context remains necessary; structural tests do not prove every interpretation is correct.

## Reward and gameplay invariants

- Five challenges per level.
- Correct answers award 10 marks; incorrect answers award 0.
- Level completion and XP are separate from the marks balance.
- Preserve each game's existing mechanic, UI and visual design while replacing content only.
