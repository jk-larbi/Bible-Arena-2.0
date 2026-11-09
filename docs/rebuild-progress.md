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

## Current next game: Bible Detective

- Existing implementation currently contains only eight fixed case templates in `DETECTIVE_CASES`.
- `buildLocalChallengesForLevel` selects a case using modulo indexing, so the same small set repeats across levels. That does not meet the 250-question target.
- Preserve the investigation mechanic: a case title, multiple evidence clues/witness statements, and a final identification from four plausible case options. Do not flatten Detective into generic trivia.
- Next: build 250 distinct case files with five per level, progressively harder evidence, accurate references and explanations, then integrate the case bank with the gameplay loader and verify the public levels.

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
