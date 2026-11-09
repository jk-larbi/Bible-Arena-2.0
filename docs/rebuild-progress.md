# BibleArena 2.0 — Rebuild Progress

Last verified: 2026-11-09  
Repository: `jk-larbi/Bible-Arena-2.0`  
Branch: `hosting/cloudflare-github-pages`  
Supabase project: `cbbtqsjcsttguukfgnvw`  
Live site: https://jk-larbi.github.io/Bible-Arena-2.0/

## Latest Bible Chain investigation update — 2026-11-09

- Source commits: dossier display fix `59f7fd879cb1043bb97fac4b08f66d67f0d2f582`; progress/audit note `ee0af30497910e66886bc8f49b15adf97dffd7ea`.
- GitHub Actions content-audit run `42623126459` passed its 4,750-slot audit.
- GitHub Pages build/deploy run `42623210036` passed TypeScript, quiz accuracy/scoring, all-level/game-mechanics, staged-batch, multiplayer/catalogue, build, artifact upload and deploy steps.
- Direct fetch of the public Pages URL could not be completed from this run, so the workflow is confirmed successful but the live page response is not independently verified here.
- This is a dossier-rendering and audit correction only. Bible Chain Challenge is still not content-complete and must not be counted as rebuilt.

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

## Bible Detective — content and database complete; live-page verification pending

- Source batches `bibleDetectiveBatch01.ts` through `bibleDetectiveBatch05.ts` now contain the canonical 150-question bank for Levels 1–30. The first two case details were corrected (the alabaster flask is not described as broken, and the royal official's son was near death rather than already dead).
- Replaced repeated or colliding cases with distinct passages, including Jotham's parable, Samuel's call at Shiloh, the Rechabites, the Rechabites' refusal of wine, the Siloam healing, Tabitha's restoration, and other separate accounts. Difficulty metadata aligns with the existing level map: Levels 1–10 beginner, 11–20 easy, 21–30 intermediate.
- Source validation: 150 questions; exactly five per level; 150 unique normalized question wordings, 150 unique passage references, 150 unique fact keys; all rows have four distinct options including the answer, explanations, references and three evidence clues. The staged-batch CI audit passed.
- Cross-bank audit before import compared normalized question wording, exact normalized passage reference, reference-answer facts and fact keys against every other `game_content` row, including hidden Levels 31–50 and previously rebuilt games. No collisions remained.
- Supabase import updated exactly 150 existing rows in place for `bible-detective` Levels 1–30; row identities and the 100 hidden legacy rows were preserved. Post-import checks returned: five questions in every level; zero duplicate wording, references or reference-answer facts; zero option, missing explanation/reference/clue or fact-key failures; zero cross-game wording/reference/fact collisions.
- Publication checks: 30 levels published and 20 unpublished; all levels have five challenge slots. `game_content_public` exposes exactly 150 rows across Levels 1–30 and none above Level 30.
- Runtime check: Bible Detective is not in `LOCAL_CONTENT_GAMES`; `getLevelChallenges` reads `game_content_public`. The shared frontend has `MAX_PUBLISHED_LEVELS = 30`, the remote/local publication merge requires both local and remote publication, and `startLevel` rejects levels above 30.
- CI: staged-batch audit run [42627739526](https://github.com/jk-larbi/Bible-Arena-2.0/actions/runs/42627739526) passed. GitHub Pages build/deploy run [42627739601](https://github.com/jk-larbi/Bible-Arena-2.0/actions/runs/42627739601) passed TypeScript, quiz accuracy/scoring, all-50-level/game-mechanics tests, staged-batch validation, multiplayer/catalogue checks, build, artifact upload and deployment.
- **Not yet marked fully complete:** the direct live Pages URL could not be independently fetched by the available browser/network tools in this run (cache miss / inaccessible URL), so the deployed page response itself remains unverified. The successful GitHub Pages deploy job is confirmed, but a direct live-site check is still required before moving this game into the fully verified list.

## Next game — Bible Chain Challenge (not complete)

- Runtime intentionally generates this game locally rather than loading its challenge rows from Supabase. The 250 legacy database rows are not the live question source for this game.
- Fresh audit of the current source pool: 40 curated seed records plus 32 established character records produce 72 unique people. The deterministic Level 1–30 sample has 150 different chain sequences, but only 27 distinct final-person reference/answer facts and 27 distinct dossier wordings. The target clue facts repeat heavily (for example, Nahum appears as the answer 37 times, Sarah 13 times, Solomon 13 times, Nicanor 13 times, and Maher-shalal-hash-baz 11 times). Distinct chain sequences alone do not meet the no-repeated-facts requirement.
- Cross-game fact audit: combining the current 40 seed identities and the 96 established character clues gives 135 distinct normalized reference/answer candidates. Comparing them against every other game's existing `game_content` rows found 44 collisions. Of the 91 clean facts remaining, only 49 currently have a valid four-person chain path and enough same-initial answer choices in the current name graph.
- A second gameplay defect was found: the chain-specific UI showed the linked names and required letter but did not render `question_text`, so the identity dossier was hidden. The latest source update now renders the dossier in a matching card under the chain, without changing the chain rules or option layout. The generator now supplies the concise identity clue as the dossier text, and its paid hints provide category and passage guidance.
- Still required before completion: expand the fact/name bank to at least 150 clean, distinct answer facts; ensure each target has a valid four-name chain and four distinct same-initial choices; balance difficulty across Levels 1–30; generate and persist the same 150-question canonical bank for audit; compare normalized wording and reference-answer facts against all games; validate all chain mechanics; verify Levels 31–50 remain unpublished; and confirm the final deployment.
- Do not mark this game complete based on the chain-sequence count or the UI correction alone.


## Other games awaiting completion

1. Bible Crossword
2. Bible Geography Quest
3. Bible Match Up
4. Bible Memory Challenge
5. Bible Puzzles
6. Bible Timeline
7. Bible Word Search
8. Complete the Scripture
9. Find the Bible Book
10. Guess the Emoji
11. Old vs New Testament
12. Scripture Challenge
13. Scripture Scramble
14. Verse Builder
15. Who Said It

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
