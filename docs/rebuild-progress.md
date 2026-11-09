# BibleArena 2.0 Content Rebuild Progress

Branch: `hosting/cloudflare-github-pages`  
Supabase project: `cbbtqsjcsttguukfgnvw`  
Live site: https://jk-larbi.github.io/Bible-Arena-2.0/

## Rules

- Each game targets 50 levels, five challenges per level (250 total).
- Levels 1–30 are published; Levels 31–50 remain Coming Soon until approved.
- Preserve each game's actual mechanic, not just its theme.
- Scripture references and wording must be checked against the passage and chosen translation. For Scripture-memory formats, include both missing-phrase completion and full-verse-to-reference multiple-choice.
- Distractors should be plausible but fair, including close book distinctions such as 1 Timothy versus 2 Timothy where relevant.
- Image puzzle levels need relevant, legible original or properly licensed artwork in the actual gameplay.
- A game is complete only after source review, cross-game duplicate checks, database verification, frontend/runtime testing, and successful deployment.

## Completed / database-integrated

### Bible Riddles
- Previously reported as rebuilt with 250 questions. Re-audit source quality and live integration if required before treating as fully verified under the current standards.

### Bible Character Quest
- Five original replacement batches cover Levels 1–50, 250 questions total, five per level.
- Automated audit across the batches: 250 unique question wordings; 250 unique normalized reference-answer keys; four distinct options including the answer for every row; non-empty reference and explanation on every row; exactly five questions per level.
- Compared normalized reference-answer keys against other existing game banks; collisions found during the first check were replaced. The repeat query returned no cross-game matches.
- Imported all 250 rows into `public.game_content`, replacing the previous Character Quest bank. Populated stable `question_key` values for answer RPC validation.
- Published Levels 1–30 and kept Levels 31–50 unpublished. Database verification returned 250 rows, 250 unique question wordings/facts, 250 four-option rows and 250 referenced/explained rows. The public view exposes all 150 published questions.
- Reward check: 10 marks per correct answer (maximum 50 marks per five-question level). The Supabase level-completion function awards 100 XP per correct answer (maximum 500 XP on a perfect level); XP is separate from the marks balance.
- Remaining verification: browser-level authenticated playthrough and successful Pages deployment for the latest documentation commit. Do not label fully live until these pass.

## Current game in progress: Bible Detective

- Research direction checked against Focus on the Family's Bible Detectives kit, Kids Sunday School's tiered investigation cards, Bible Academy's historical/contextual trivia approach, and Bible Quest's Mystery of the Dig. These are design research only; BibleArena cases are original and Scripture-checked, not copied.
- Preserve the actual investigation mechanic: staged evidence, case title, four plausible suspect/event options, explanation and Bible references. Focus on contextual clues and multi-passage reasoning as difficulty rises.
- Batch 01: 25 original cases for Levels 1–5. Batch 02: 25 original, harder cases for Levels 6–10. Each case has three staged evidence clues, four distinct answer options, an explanation and Bible references.
- Batches 01–03: 75 original cases imported for Levels 1–15, five per level. Batch 03 adds expert cases involving temple protocol, prophetic signs, exile-era events, Acts and early church history. The 25 new reference-answer keys were checked against other games and the existing Detective bank; no collisions were returned. Cross-game normalized reference-answer collision checks returned no matches for these batches. One duplicate within the Detective bank in Batch 02 was replaced before import.
- Database verification: Levels 1–15 each contain five rows and five distinct normalized question/fact keys. All 250 game rows have four distinct options and evidence metadata. However, the whole bank currently has only 83 distinct normalized facts/wordings because Levels 16–50 still contain repeated legacy content. Detective is NOT complete.
- Gameplay already renders the staged evidence in the case panel and reveals further clues through the existing paid-hint flow. The five-question level/reward system remains unchanged.
- Next: replace Levels 16–50 (175 cases) with original, increasingly difficult investigations, then run global semantic and normalized duplicate checks and verify deployment.

## Other games awaiting rebuild

- Bible Chain Challenge — currently generated locally; its source pool/matching constraints need expansion and validation before it can supply 150 unique playable challenges.
- Bible Crossword
- Bible Geography Quest
- Bible Match-Up
- Bible Memory Challenge
- Bible Puzzles
- Bible Timeline
- Bible Word Search
- Complete the Scripture
- Find the Bible Book
- Guess the Emoji
- Old vs New Testament
- Scripture Challenge
- Scripture Scramble
- Verse Builder
- Who Said It

## Question and reward rules

- Shared gameplay constant: `CHALLENGES_PER_LEVEL = 5`.
- Supabase `submit_challenge_answer` records five ordered answers and awards 10 marks for each correct answer through an idempotent ledger.
- Supabase `finish_level` rejects a level unless all five answers are submitted. It calculates percentage from five results and result points at 100 per correct answer (maximum 500).
- Marks and result-points/XP are separate measures.

## Deployment

- GitHub Pages workflow for the latest progress commit: https://github.com/jk-larbi/Bible-Arena-2.0/actions/runs/42545002400
- At last check this workflow was still in progress. Database changes are live in Supabase, but do not claim the latest Pages deployment succeeded until the workflow reports success.

## Bible Chain Challenge — fresh audit and design decision (2026-11-09)

- User-approved design: chain biblical **people's names only** (not Bible book titles). Each next person's name must begin with the previous person's final letter. Do not repeat a person within one chain; distinguish people who share a name; accept documented spelling variants; every person needs a Scripture reference and a short identity note.
- Difficulty is mixed within every level, including Level 1: familiar names, less familiar characters, judges/kings/prophets, obscure people, and long or difficult names. Add optional themed rounds (prophets, kings, women of Scripture, no-hint and rare-name rounds) without changing the five-challenge level structure.
- Audit found the current implementation is not suitable for publication: `getLevelChallenges()` deliberately bypasses Supabase for this game and calls `buildLocalChallengesForLevel()`; the local generator mixes Bible books with people, generates only a single link per question, and currently supplies three choices rather than four. It draws from a small hard-coded character pool, so it repeats targets (e.g. Song of Solomon) and cannot meet the requested name-only rules. Supabase currently contains 250 legacy rows (five per level), but these are not the gameplay source and are not evidence of 250 valid chain challenges.
- Do not simply import 250 rows and claim the game is rebuilt. Next implementation: create a curated, reference-backed people catalogue with explicit identity distinctions and spelling aliases; validate each entry against Scripture; build five-link name chains with no repeated person within a chain; create plausible distractor chains that obey the same letter rule where appropriate; add tests for every link, uniqueness within each chain, answer inclusion, exactly four choices, and reference presence. Preserve the five-question level/reward system.
- Research sources for discovery and cross-checking (do not copy their quiz wording or proprietary question banks):
  - Bible Knowledge Quiz character list and three-clue model: https://bibleknowledgequiz.com/
  - Bible Academy character quizzes and verse-backed explanations: https://bibleacademyapp.com/quiz/
  - StudyLight Bible People catalogue (disambiguates shared names): https://www.studylight.org/research-tools/bible-people.html
  - Begat A–Z people index for name discovery: https://begat.app/people/all/
  - Bible Explorer people catalogue: https://bibleexplorer.app/people/
  - Name-chain activity example and rule: https://cdn.ministerialassociation.org/cdn/ministerialassociation.org/assets/spouses/sij-archives-en/2020/sij-en-2020-1b.pdf
- Research confirms the discovery pool can be much larger than the current local list: StudyLight reports 1,837 personal names; Begat reports 3,050 people. These are discovery indexes, not automatic approval lists; each playable entry still requires manual Scripture verification and distinction of namesakes.
- Current status: audit complete; no new chain content published yet. Do not claim the new mechanic or bank is live until the local source, runtime path, tests, database and deployment are all verified.

## Bible Chain Challenge — implementation update (2026-11-09)

- Added `src/data/bibleChainPeople.ts`: curated people-only seed with Scripture references, identity notes, testament/category/difficulty fields and spelling aliases.
- Updated the local challenge generator to combine the curated seed with existing character entries, exclude group/couple labels and Bible-book titles, normalize names, enforce the final-letter/first-letter rule, and create four distinct options that all begin with the required letter.
- Runtime remains locally generated by design; Supabase legacy rows are not yet the source of truth. Do not claim Supabase import or 250 unique pre-authored chains. The existing UI still uses one name-link challenge per slot; full multi-link chain sequences and no-repeat-within-sequence behavior require a dedicated UI/data-model change.
- Latest code commit: `c064189fbb61e9ef8673b338098d5fd762e7d7f1`. GitHub Pages build and content audit are queued/in progress; final status must be checked before claiming deployment.
- Outstanding before game completion: run TS/build and content audit; expand and verify the people catalogue; test every level produces five challenges and four valid options; add a five-name chain sequence UI if retaining the user's illustrated five-person chain design; decide and implement Supabase publication only if the runtime is switched to consume it; verify Levels 31–50 remain Coming Soon.
