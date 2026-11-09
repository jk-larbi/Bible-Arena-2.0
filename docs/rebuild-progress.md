# BibleArena 2.0 Content Rebuild Progress

Branch: `hosting/cloudflare-github-pages`  
Supabase project: `cbbtqsjcsttguukfgnvw`  
Live site: https://jk-larbi.github.io/Bible-Arena-2.0/

## Publication rule

- Target: all 50 levels playable for each game.
- Each completed game requires five verified challenges per level (250 total), game-specific mechanics preserved, and cross-game duplicate checks.
- Scripture questions must use accurate translation-aware wording and include close but fair reference distractors where appropriate (for example, 1 Timothy versus 2 Timothy).
- Scripture-memory challenges must include both completion prompts and full-verse-to-reference selection questions.
- Image-based puzzle levels must use relevant, legible, properly licensed or original artwork as part of the actual puzzle.
- A game is not complete until its content, database publication flags, frontend behaviour, validation, and deployment have all been verified.

## Completed

- **Bible Riddles** — previously rebuilt and reported as 250 updated questions, with Levels 1–50 originally populated. The current project-wide 30-level publication cap is applied separately.

## Current investigation

- **Bible Chain Challenge — not complete; no content was changed in this run.**
- The game bypasses Supabase content in `getLevelChallenges` and calls `buildLocalChallengesForLevel` in `src/data/bibleContentBank.ts`.
- The existing generator builds a chain by matching the final letter of one entry to the first letter of another. Its current source pool has 66 Bible books and 32 character entries (98 entries total).
- A deterministic maximum bipartite matching check over those source entries found only 39 unique valid source-to-target links. That pool cannot safely supply 150 distinct chain challenges without expanding and reviewing the underlying Bible-entry source bank.
- Existing generated rows repeat the same targets/facts (for example, several different source books point to Song of Solomon). Replacing only Supabase rows would not affect gameplay while the local-generation bypass remains.
- Safe next work: expand and validate the Bible Chain entry pool sufficiently, build 150 unique valid chain links while retaining the letter-link mechanic, then route gameplay to the validated bank and verify the deployed build.

## Remaining games

- Bible Chain Challenge (in progress; blocked on source-pool expansion)
- Bible Character Quest
- Bible Crossword
- Bible Detective
- Bible Geography Quest
- Bible Match Up
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

## Deployment

- The project-wide Levels 1–30 publication restriction was confirmed deployed by successful GitHub Actions run:
  https://github.com/jk-larbi/Bible-Arena-2.0/actions/runs/42522016145
- This does not mean the remaining games' question banks have been rebuilt.

## Bible Character Quest — audit in progress

- Supabase currently contains 250 rows across Levels 1–50, but the rows are not a valid completed bank: an audit found only 25 distinct question wordings and 32 distinct normalized reference/answer pairs across all 250 rows.
- The existing staged Batch 01 has weak repeated distractors and generic explanation templates; Batch 02 also contains questionable distractors and explanations that merely restate the reference. Neither batch is approved for publication.
- Gameplay reads five rows per level from `game_content_public` when Supabase is configured and otherwise falls back to `buildLocalChallengesForLevel` in `src/data/bibleContentBank.ts`. The Character Quest therefore needs a complete replacement bank, not just a frontend restyle.
- **Replacement batches staged:** 100 original questions for Levels 1–20 (five per level) in `bibleCharacterVerifiedBatch01.ts` and `bibleCharacterVerifiedBatch02.ts`. Each record has four distinct options, an explanation, a Scripture reference and a unique fact key.
- Batch 02 was researched using the people/character categories and Bible passage references from the previously shared research sites. The questions are rewritten in original wording; the websites are not copied verbatim.
- Normalized reference-plus-answer checks found **zero duplicates within the 100 staged Character Quest facts** and, after replacing overlapping facts, **zero collisions against the current live banks of the other games**.
- Both batches are included in `validate:rebuild`. The structural validator checks five entries per level and four distinct options, but it does not independently prove theological interpretation or every reference.
- The CI audit caught additional reference/answer collisions against older staged banks; those records were replaced with different passages/facts. The latest correction is in commit `93ce4b0`; re-run the staged audit on the updated branch before considering the 100-question milestone accepted.
- **Not published:** all 100 questions remain staged only. The existing 250 database rows have not been replaced. Next: perform passage-by-passage human review, prepare Levels 21–50 (150 more questions), then replace the database rows and verify the live game.
