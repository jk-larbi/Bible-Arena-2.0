# BibleArena 2.0 — Multiplayer Bible Gaming Platform

**BibleArena 2.0** is an interactive, multiplayer Bible gaming platform designed with an editorial gaming aesthetic. Built with **Vite, React, TypeScript, and Tailwind CSS**, BibleArena offers 19 distinct biblical games, live competitive rooms, leaderboards, and daily scripture quests.

---

## 🌟 Key Features

* **19 Featured Illustrated Games**: From letter scrambles and timeline builders to interactive emoji decoding and multi-choice quizzes.
* **Live Multiplayer Arenas**: Create or join competitive waiting rooms using 4-digit room codes, Web Share API (`navigator.share`), or instant invite links.
* **Editorial Gaming Aesthetic**: Clean, solid surfaces featuring Midnight Ink (`#171B24`), Warm Parchment (`#F3EBDD`), Burnt Orange (`#D66B3D`), and Cobalt Blue (`#3156C9`) with Fraunces serif typography.
* **Strict Launch-Day Zero State**: Real database statistics only—no fake ratings, fake player counts, or sample scores.
* **Mobile-First & Touch-Optimized**: Designed for phones, tablets, and desktop with `100dvh` viewportToolbar protection, 44x44px minimum tap targets, and mobile bottom sheet modals.
* **Dual Database Architecture**: Supports both **Supabase** (PostgreSQL with Row Level Security) and **Firebase Firestore** persistence.

---

## 🎮 Game Catalog (19 Games)

| # | Game Title | Category | Description | Asset File |
|---|------------|----------|-------------|------------|
| 1 | **Scripture Challenge** | Quiz | Timed multi-choice theological quiz with instant commentary & references | `scripture-challenge.png` |
| 2 | **Bible Character Quest** | Character Quest | Relive pivotal decisions of Abraham, Moses, Esther, and Paul | `bible-character-quest.png` |
| 3 | **Scripture Scramble** | Word Games | Rearrange scrambled letters to form sacred terms against the clock | `scripture-scramble.png` |
| 4 | **Bible Word Search** | Word Games | Hunt for patriarchs, cities, and tribes in letter grids | `bible-word-search.png` |
| 5 | **Bible Crossword** | Word Games | Classical crossword puzzles themed from Genesis to Revelation | `bible-crossword.png` |
| 6 | **Who Said It?** | Quiz | Attribute famous biblical quotes to prophets, kings, or Jesus | `who-said-it.png` |
| 7 | **Complete the Scripture** | Word Games | Fill in missing key words from famous Bible passages | `complete-the-scripture.png` |
| 8 | **Bible Match-Up** | Memory | Pair figures with their defining acts, miracles, or symbols | `bible-match-up.png` |
| 9 | **Bible Timeline** | Puzzles | Arrange historical biblical events into chronological order | `bible-timeline.png` |
| 10 | **Bible Puzzles** | Puzzles | Reconstruct historical mosaics of sacred masterpieces | `bible-puzzles.png` |
| 11 | **Find the Bible Book** | Quiz | Identify the correct Bible book from chapter and verse clues | `find-the-bible-book.png` |
| 12 | **Bible Riddles** | Quiz | Solve ancient parables, Samson’s riddles, and wisdom allegories | `bible-riddles.png` |
| 13 | **Bible Geography Quest** | Geography | Map out biblical lands from Ur to Jerusalem, Antioch, and Rome | `bible-geography-quest.png` |
| 14 | **Bible Memory Challenge** | Memory | Card pair matching for scripture verses and book references | `bible-memory-challenge.png` |
| 15 | **Old vs New Testament** | Quiz | Classify laws, covenants, and epistles in lightning rounds | `old-vs-new-testament.png` |
| 16 | **Bible Detective** | Character Quest | Unearth manuscript fragments and archaeological mysteries | `bible-detective.png` |
| 17 | **Bible Chain Challenge** | Word Games | Link biblical terms by final and initial letters | `bible-chain-challenge.png` |
| 18 | **Verse Builder** | Word Games | Tap or drag word tiles to reconstruct full Bible verses | `verse-builder.png` |
| 19 | **Guess the Emoji: Bible Edition** | Word Games | Decipher scriptural stories & characters from emoji clues across 100 levels | `guess-the-emoji.png` |

---

## 🛠️ Tech Stack & Structure

```text
/
├── public/
│   ├── assets/
│   │   ├── games/            # 19 game illustration assets
│   │   ├── battle-of-the-prophets.png
│   │   └── scripture-challenge-hero.jpg
│   └── manifest.json         # PWA Manifest
├── src/
│   ├── components/           # Button, Pill, GameCard, HeroBanner, TopNav, BottomNav, Modal, TimerRing, LevelMap
│   ├── data/                 # gamesList.ts, initialQuestions.ts, emojiQuestions.ts, sqlSchema.ts
│   ├── games/                # ScriptureScramble, VerseBuilder, BibleTimeline, ScriptureChallenge, GuessTheEmoji
│   ├── lib/                  # supabase.ts, firebase.ts
│   ├── pages/                # HomePage, MultiplayerPage, LeaderboardPage, ChallengesPage, ProfilePage
│   ├── App.tsx               # Primary router & state manager
│   ├── main.tsx
│   └── index.css             # Tailwind CSS tokens & mobile 100dvh rules
├── firestore.rules           # Firebase security rules
├── firebase-blueprint.json   # Intermediate database schema
├── supabase_schema.sql       # Supabase SQL Schema with RLS Policies
└── vite.config.ts
```

---

## 🚀 Getting Started

### 1. Installation

```bash
npm install
```

### 2. Environment Variables Setup (`.env`)

To connect your Supabase database, create a `.env` file in the project root:

```env
VITE_SUPABASE_URL="https://your-project-id.supabase.co"
VITE_SUPABASE_PUBLISHABLE_KEY="your-supabase-publishable-key"
```

*(Note: If no keys are provided, BibleArena automatically operates in local demo mode with zero-state fallbacks).*

### 3. Database Setup (Supabase)

Copy and execute `/supabase_schema.sql` in your **Supabase SQL Editor** to create the required tables:
* `profiles`
* `game_progress`
* `question_history`
* `achievements`
* `rooms` & `room_players`
* `challenges`
* `scores`

### 4. Running the Dev Server

```bash
npm run dev
```

The application runs on `http://localhost:3000`.

### 5. Production Build

```bash
npm run build
```

---

## 📱 Mobile Compatibility & Standards

* **Responsive Viewport**: Configured with `viewport-fit=cover` and `100dvh` for toolbar-safe mobile viewports.
* **Touch-First UI**: 44x44px tap target enforcement, tap-to-place word sequence builders, and automatic bottom sheet modals.
* **Form Safety**: 16px minimum font size on inputs to prevent auto-zooming on iOS Safari.

---

## 📜 License

Apache-2.0 License. Built for BibleArena 2.0.
