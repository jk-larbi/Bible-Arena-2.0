# BibleArena 2.0 Content Rebuild Progress

Branch: `hosting/cloudflare-github-pages`  
Supabase project: `cbbtqsjcsttguukfgnvw`  
Live site: https://jk-larbi.github.io/Bible-Arena-2.0/

## Publication rule

- Levels 1–30 are the maximum playable range.
- Levels 31–50 must remain unpublished / Coming Soon.
- Each completed game requires five verified challenges per level (150 total), game-specific mechanics preserved, and cross-game duplicate checks.
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
