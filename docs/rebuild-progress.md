# BibleArena 2.0 — Rebuild Progress

Last verified: 2026-11-10  
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

- Canonical runtime source: `src/data/bibleCharacterQuestQuestions.ts`, consumed by `buildLocalChallengesForLevel`. The game remains in `LOCAL_CONTENT_GAMES` to preserve its established client-side grading and mechanic behaviour; its Supabase rows are kept in sync as the published content mirror.
- Published bank: exactly 150 challenges, five at each of Levels 1–30. The source retains Levels 31–50, but they remain unpublished and blocked by the shared 30-level start guard.
- Corrected eight recycled facts in the playable bank after checking against all other `game_content` rows, including this game's hidden Levels 31–50:
  - Level 1, Challenge 2: Zacchaeus → Manoah (Judges 13:2–24).
  - Level 8, Challenge 5: Ichabod → Maher-shalal-hash-baz (Isaiah 8:1–4).
  - Level 9, Challenge 1: Ebed-Melech → Shobi (2 Samuel 17:27–29).
  - Level 9, Challenge 5: Onesiphorus → Hushai the Archite (2 Samuel 15:32–37; 17:5–14).
  - Level 16, Challenge 4: Manaen → Shimei son of Gera (2 Samuel 16:5–13; 1 Kings 2:8–9, 36–46).
  - Level 20, Challenge 1: Jehoiada → Zechariah son of Jehoiada (2 Chronicles 24:20–22).
  - Level 21, Challenge 5: Huldah → Jehu son of Hanani (1 Kings 16:1–4).
  - Level 23, Challenge 1: Ebed-Melech → Micaiah son of Imlah (1 Kings 22:13–28).
- Source validation: 150 rows; exactly five per level; no repeated normalized question wording or normalized reference-answer fact within the published bank; every row has a reference, explanation, and four distinct options including the correct answer.
- Cross-bank validation: zero normalized reference-answer or question-wording collisions against every other database row, including hidden Levels 31–50 and the other games.
- Supabase: updated exactly 150 existing rows in place. A source-to-database comparison returned 150 source rows, zero missing rows, and zero mismatched question/options/answer/explanation/reference fields. Stable row UUIDs and question keys were preserved. Post-update database checks returned 150 complete rows, 150 valid four-option rows, five per level, and zero duplicate or cross-bank fact collisions.
- Publication: 30 levels published and 20 unpublished; every level retains five challenge slots. The shared frontend still requires both local and remote publication flags, and `startLevel` rejects levels above 30.
- Difficulty progresses by level: Levels 1–3 easy, 4–12 moderate, 13–28 hard, and 29–30 very hard. The existing Character Quest clue-based mechanics, stage labels, and per-question timers are retained.
- Unfinished-attempt refresh: `BaseGame.tsx` content version was advanced to `bible-character-quest-v3` so an old partial attempt does not resume against changed questions.
- CI: build and deploy run [42821685713](https://github.com/jk-larbi/Bible-Arena-2.0/actions/runs/42821685713) passed for source commit `6e2f4a223461809eae817162efb5906dd32c1ea4`. Both build and deploy jobs succeeded. A subsequent documentation-only workflow also passed: [42821709928](https://github.com/jk-larbi/Bible-Arena-2.0/actions/runs/42821709928).
- The live Pages URL could not be independently fetched from this environment (web fetch returned a cache miss). GitHub Actions confirms successful Pages deployment, but independent browser/visual verification remains unavailable here.

### Bible Detective

- Source batches `bibleDetectiveBatch01.ts` through `bibleDetectiveBatch05.ts` now contain the canonical 150-question bank for Levels 1–30. The first two case details were corrected (the alabaster flask is not described as broken, and the royal official's son was near death rather than already dead).
- Replaced repeated or colliding cases with distinct passages, including Jotham's parable, Samuel's call at Shiloh, Ziba's report, the Rechabites' refusal of wine, the Siloam healing, Tabitha's restoration, and other separate accounts. Difficulty metadata aligns with the existing level map: Levels 1–10 beginner, 11–20 easy, 21–30 intermediate.
- Source validation: 150 questions; exactly five per level; 150 unique normalized question wordings, 150 unique passage references, 150 unique fact keys; all rows have four distinct options including the answer, explanations, references and three evidence clues. The staged-batch CI audit passed.
- Cross-bank audit before import compared normalized question wording, exact normalized passage reference, reference-answer facts and fact keys against every other `game_content` row, including hidden Levels 31–50 and previously rebuilt games. No collisions remained.
- Supabase import updated exactly 150 existing rows in place for `bible-detective` Levels 1–30; row identities and the 100 hidden legacy rows were preserved. Post-import checks returned: five questions in every level; zero duplicate wording, references or reference-answer facts; zero option, missing explanation/reference/clue or fact-key failures; zero cross-game wording/reference/fact collisions.
- Publication checks: 30 levels published and 20 unpublished; all levels have five challenge slots. `game_content_public` exposes exactly 150 rows across Levels 1–30 and none above Level 30.
- Runtime check: Bible Detective is not in `LOCAL_CONTENT_GAMES`; `getLevelChallenges` reads `game_content_public`. The shared frontend has `MAX_PUBLISHED_LEVELS = 30`, the remote/local publication merge requires both local and remote publication, and `startLevel` rejects levels above 30.
- CI: staged-batch audit run [42627739526](https://github.com/jk-larbi/Bible-Arena-2.0/actions/runs/42627739526) passed. GitHub Pages build/deploy run [42627739601](https://github.com/jk-larbi/Bible-Arena-2.0/actions/runs/42627739601) passed TypeScript, quiz accuracy/scoring, all-50-level/game-mechanics tests, staged-batch validation, multiplayer/catalogue checks, build, artifact upload and deployment.
- Final documentation deployment run [42628372365](https://github.com/jk-larbi/Bible-Arena-2.0/actions/runs/42628372365) also completed successfully. The `actions/deploy-pages` step polled GitHub Pages status, reported success for commit `1aaa22a477fbca559e3c10f1ef0476070e66af96`, and returned the configured environment URL. The browser fetch tool could not render the live URL from this environment, so a manual visual inspection was unavailable; the official Pages deployment status is confirmed.

## Bible Chain Challenge — verified complete and deployed (2026-11-10)

- Canonical source: `src/data/bibleChainQuestions.ts`. The file retains its 250-item catalogue; Levels 1–30 now have a verified playable bank of exactly 150 challenges (five per level). The 30 typed-input challenges keep typed mode; the remaining 120 retain four-option multiple choice.
- Runtime: `buildLocalChallengesForLevel('bible-chain-challenge', level)` reads the curated `BIBLE_CHAIN_QUESTIONS` bank for the game. The existing chain-specific question formats and typed/choice mechanics were preserved.
- Replaced three repeated/colliding facts in the playable bank:
  - Level 5, Challenge 3: Philip (John 1:43–46) → Amittai, Jonah's father (Jonah 1:1; 2 Kings 14:25).
  - Level 26, Challenge 1: Gehazi (2 Kings 5:20–27) → Hanamel, Jeremiah's cousin who offered the Anathoth field (Jeremiah 32:6–12).
  - Level 29, Challenge 3: Haran (Genesis 11:31–32; Acts 7:4) → Tattenai, governor Beyond the River who questioned the temple rebuilding (Ezra 5:3–6; 6:6–7).
- Source-bank validation: 150 playable rows; exactly five at each Level 1–30; 150 unique normalized question wordings; 150 unique normalized reference+answer facts; no missing question, answer, explanation or reference; all multiple-choice rows have four distinct options including the correct answer.
- Cross-bank audit compared normalized wording and normalized reference+answer keys against every other `game_content` row, including the hidden Levels 31–50 and other games. After the three replacements, collisions = 0.
- Supabase import updated exactly 150 existing `bible-chain-challenge` rows in place. Post-import validation: 150 rows, 150 distinct slots, five per level, 150 unique wordings, 150 unique facts, zero missing fields, zero multiple-choice option failures and zero cross-game collisions.
- Publication verification: 30 levels published and 20 unpublished; no level above 30 is published. `game_content_public` exposes exactly 150 chain challenges and none above Level 30. A project-wide check also confirmed all 19 games have 30 published levels, 20 Coming Soon levels and 150 public content rows.
- Frontend publication boundary remains consistent: `MAX_PUBLISHED_LEVELS = 30`; `startLevel` rejects Levels 31–50; the local/remote level-map merge requires both local and remote publication flags.
- CI for source commit `b540a1d94f6707caaadb95bc2234579c0c6dd528`: build and validation passed. Its first deploy attempt failed: [run 42817168215](https://github.com/jk-larbi/Bible-Arena-2.0/actions/runs/42817168215).
- A subsequent build-and-deploy run completed successfully for commit `8e9be6167ddacb85cce1bd5f4d47a77e6eab4a79`, whose tree includes the Bible Chain source changes: [run 42818623312](https://github.com/jk-larbi/Bible-Arena-2.0/actions/runs/42818623312). Both build and deploy jobs, including the GitHub Pages deployment step, succeeded.
- The public Pages URL could not be independently fetched from this environment (web fetch returned a cache miss). Deployment is therefore confirmed by the official GitHub Actions deployment job; manual visual/browser verification remains unavailable here.

## Bible Crossword — audit blocked; not complete (2026-11-10)

- Runtime source: `src/data/bibleCrosswordQuestions.ts`; `buildLocalChallengesForLevel` returns this curated bank for `bible-crossword`. The game is in `LOCAL_CONTENT_GAMES`, so the 10-entry crossword puzzles are client-generated/local content, not loaded from the current public Supabase feed.
- Existing source structure: 250 total puzzles, with exactly five puzzles at each of Levels 1–50. Levels 1–30 contain 150 playable puzzles; each puzzle has 10 Across/Down entries (1,500 clue slots total). This is the existing crossword mechanic and must be preserved; four MCQ choices are not appropriate for this grid-entry format.
- **Blocking content-quality audit:** the 1,500 playable clue slots contain only 251 unique normalized reference+answer fact keys and 269 unique normalized clue wordings. There are 1,249 repeated fact occurrences (186 duplicate fact groups) and 1,231 repeated clue-wording occurrences (200 duplicate wording groups). The generator's `usedPuzzleKeys` prevents identical complete answer sets, but does not prevent individual clues/facts from being reused across different puzzles.
- The current generator's `MASTER_CLUES` pool contains 459 entries and only 425 unique normalized reference+answer keys before cross-game exclusions. It cannot currently supply 1,500 unique clue facts. A normalized cross-game comparison against every other `game_content` row (including hidden Levels 31–50) found 89 of the 251 source fact keys already used by another game; only 162 of the current source facts are non-colliding. The bank is therefore not safe to import as a rebuilt bank.
- Supabase mismatch: `public.game_content` has 150 crossword rows (five per level) but these are an older two-clue Across/Down format, not the current local 10-entry puzzle structure. The old rows also repeat clue-level facts. Do not overwrite/import until the canonical 10-entry bank is rebuilt and audited.
- Publication settings remain correct: 30 published levels and 20 unpublished levels. The shared frontend boundary is still `MAX_PUBLISHED_LEVELS = 30`; local content is guarded by `startLevel`.
- **No crossword source or Supabase rows were changed in this run.** Do not mark Bible Crossword complete. Required next work: expand the canonical clue pool with at least 1,500 genuinely distinct, passage-verified clue facts not already used by other games; regenerate 150 puzzles while reserving each clue/fact globally across Levels 1–30; validate grid placement, 10 clues per puzzle, unique clue wording and reference-answer facts, and cross-game collisions; then sync the 150 existing Supabase rows in place, validate publication, and deploy.

## Next game

- Bible Crossword — rebuild blocked pending expansion of the unique clue-fact pool.

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
