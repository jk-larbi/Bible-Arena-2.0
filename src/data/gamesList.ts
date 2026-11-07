export interface GameInfo {
  id: string;
  title: string;
  category: 'Quiz' | 'Word Games' | 'Puzzles' | 'Memory' | 'Geography' | 'Character Quest' | 'Multiplayer' | 'Trending';
  subtitle: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Hard' | 'Expert';
  levelsCount: number;
  playerLevel: number;
  colorScheme: {
    bg: string;
    accent: string;
    text: string;
    gradient: string;
  };
  imageFile: string;
  isFirstPlayable: boolean;
  rating?: number;
  playsCount?: number;
}

export const GAMES_LIST: GameInfo[] = [
  {
    id: 'scripture-challenge',
    title: 'Scripture Challenge',
    category: 'Quiz',
    subtitle: 'Timed multi-choice theological quiz',
    description: 'Test your knowledge of prophets, kings, parables, and epistles with instant verse references and commentary.',
    difficulty: 'Medium',
    levelsCount: 100,
    playerLevel: 1,
    colorScheme: {
      bg: 'bg-rose-950',
      accent: '#D66B3D',
      text: 'text-rose-100',
      gradient: 'from-rose-900 to-red-950'
    },
    imageFile: 'scripture-challenge.png',
    isFirstPlayable: true
  },
  {
    id: 'scripture-scramble',
    title: 'Scripture Scramble',
    category: 'Word Games',
    subtitle: 'Rearrange letters to form sacred words & verses',
    description: 'Unscramble mixed-up biblical words and phrases against the clock to unlock deeper scriptural mysteries.',
    difficulty: 'Medium',
    levelsCount: 100,
    playerLevel: 1,
    colorScheme: {
      bg: 'bg-amber-950',
      accent: '#D66B3D',
      text: 'text-amber-100',
      gradient: 'from-amber-700 to-orange-900'
    },
    imageFile: 'scripture-scramble.png',
    isFirstPlayable: true
  },
  {
    id: 'verse-builder',
    title: 'Verse Builder',
    category: 'Word Games',
    subtitle: 'Assemble scattered words into complete verses',
    description: 'Tap or drag words into their correct chronological place to reconstruct famous passages of scripture.',
    difficulty: 'Easy',
    levelsCount: 100,
    playerLevel: 1,
    colorScheme: {
      bg: 'bg-blue-900',
      accent: '#3156C9',
      text: 'text-blue-100',
      gradient: 'from-blue-800 to-indigo-950'
    },
    imageFile: 'verse-builder.png',
    isFirstPlayable: true
  },
  {
    id: 'bible-timeline',
    title: 'Bible Timeline',
    category: 'Puzzles',
    subtitle: 'Chronicle pivotal biblical epochs & events',
    description: 'Drag and drop historical events from Creation to Revelation into absolute chronological order.',
    difficulty: 'Hard',
    levelsCount: 100,
    playerLevel: 1,
    colorScheme: {
      bg: 'bg-emerald-900',
      accent: '#A7B49A',
      text: 'text-emerald-100',
      gradient: 'from-emerald-800 to-teal-950'
    },
    imageFile: 'bible-timeline.png',
    isFirstPlayable: true
  },
  {
    id: 'guess-the-emoji',
    title: 'Guess the Emoji: Bible Edition',
    category: 'Word Games',
    subtitle: 'Decipher scriptural stories & characters from emojis',
    description: 'Interpret combinations of emojis representing Bible characters, stories, miracles, and places across 100 levels.',
    difficulty: 'Medium',
    levelsCount: 100,
    playerLevel: 1,
    colorScheme: {
      bg: 'bg-amber-950',
      accent: '#D66B3D',
      text: 'text-amber-100',
      gradient: 'from-amber-900 to-orange-950'
    },
    imageFile: 'guess-the-emoji.png',
    isFirstPlayable: true
  },
  {
    id: 'bible-character-quest',
    title: 'Bible Character Quest',
    category: 'Character Quest',
    subtitle: 'Step into the sandals of biblical heroes',
    description: 'Relive pivotal decisions and moral trials faced by Abraham, Moses, Esther, and Paul.',
    difficulty: 'Medium',
    levelsCount: 80,
    playerLevel: 1,
    colorScheme: {
      bg: 'bg-amber-900',
      accent: '#D66B3D',
      text: 'text-amber-100',
      gradient: 'from-amber-800 to-orange-950'
    },
    imageFile: 'bible-character-quest.png',
    isFirstPlayable: false
  },
  {
    id: 'bible-word-search',
    title: 'Bible Word Search',
    category: 'Word Games',
    subtitle: 'Hunt for hidden scriptural terms in grids',
    description: 'Locate patriarchs, cities, mountains, and tribes hidden vertically, horizontally, and diagonally.',
    difficulty: 'Easy',
    levelsCount: 100,
    playerLevel: 1,
    colorScheme: {
      bg: 'bg-blue-900',
      accent: '#3156C9',
      text: 'text-blue-100',
      gradient: 'from-blue-800 to-indigo-950'
    },
    imageFile: 'bible-word-search.png',
    isFirstPlayable: false
  },
  {
    id: 'bible-crossword',
    title: 'Bible Crossword',
    category: 'Word Games',
    subtitle: 'Intersecting clues from Genesis to Revelation',
    description: 'Solve classical crossword puzzles crafted entirely around biblical history, geography, and theology.',
    difficulty: 'Hard',
    levelsCount: 90,
    playerLevel: 1,
    colorScheme: {
      bg: 'bg-stone-900',
      accent: '#D66B3D',
      text: 'text-stone-100',
      gradient: 'from-stone-800 to-neutral-950'
    },
    imageFile: 'bible-crossword.png',
    isFirstPlayable: false
  },
  {
    id: 'who-said-it',
    title: 'Who Said It?',
    category: 'Quiz',
    subtitle: 'Attribute famous biblical quotes & pronouncements',
    description: 'Identify whether a verse or proclamation was spoken by Jesus, Paul, Moses, a prophet, or a king.',
    difficulty: 'Medium',
    levelsCount: 100,
    playerLevel: 1,
    colorScheme: {
      bg: 'bg-teal-950',
      accent: '#A7B49A',
      text: 'text-teal-100',
      gradient: 'from-teal-900 to-emerald-950'
    },
    imageFile: 'who-said-it.png',
    isFirstPlayable: false
  },
  {
    id: 'complete-the-scripture',
    title: 'Complete the Scripture',
    category: 'Word Games',
    subtitle: 'Fill in the missing words of well-known verses',
    description: 'Test your memory of famous Bible verses by selecting the exact missing words.',
    difficulty: 'Easy',
    levelsCount: 100,
    playerLevel: 1,
    colorScheme: {
      bg: 'bg-indigo-950',
      accent: '#3156C9',
      text: 'text-indigo-100',
      gradient: 'from-indigo-900 to-slate-950'
    },
    imageFile: 'complete-the-scripture.png',
    isFirstPlayable: false
  },
  {
    id: 'bible-match-up',
    title: 'Bible Match-Up',
    category: 'Memory',
    subtitle: 'Pair figures with their defining acts or symbols',
    description: 'Match biblical characters with their corresponding miracles, plagues, offerings, or epistles.',
    difficulty: 'Medium',
    levelsCount: 60,
    playerLevel: 1,
    colorScheme: {
      bg: 'bg-yellow-950',
      accent: '#D66B3D',
      text: 'text-yellow-100',
      gradient: 'from-amber-900 to-yellow-950'
    },
    imageFile: 'bible-match-up.png',
    isFirstPlayable: false
  },
  {
    id: 'bible-puzzles',
    title: 'Bible Puzzles',
    category: 'Puzzles',
    subtitle: 'Mosaic assembly of sacred masterpieces',
    description: 'Reconstruct stunning historical mosaics depicting the Tabernacle, Creation, and the New Jerusalem.',
    difficulty: 'Medium',
    levelsCount: 50,
    playerLevel: 1,
    colorScheme: {
      bg: 'bg-sky-950',
      accent: '#3156C9',
      text: 'text-sky-100',
      gradient: 'from-sky-900 to-blue-950'
    },
    imageFile: 'bible-puzzles.png',
    isFirstPlayable: false
  },
  {
    id: 'find-the-bible-book',
    title: 'Find the Bible Book',
    category: 'Quiz',
    subtitle: 'Locate books by chapter and verse clues',
    description: 'Quickly identify whether a given verse belongs to Old Testament history, poetry, minor prophets, or epistles.',
    difficulty: 'Medium',
    levelsCount: 100,
    playerLevel: 1,
    colorScheme: {
      bg: 'bg-purple-950',
      accent: '#3156C9',
      text: 'text-purple-100',
      gradient: 'from-purple-900 to-indigo-950'
    },
    imageFile: 'find-the-bible-book.png',
    isFirstPlayable: false
  },
  {
    id: 'bible-riddles',
    title: 'Bible Riddles',
    category: 'Quiz',
    subtitle: 'Delve into ancient parables & allegories',
    description: 'Unravel Samson’s riddle, royal allegories from Ezekiel, and wisdom sayings from Solomon.',
    difficulty: 'Hard',
    levelsCount: 60,
    playerLevel: 1,
    colorScheme: {
      bg: 'bg-rose-900',
      accent: '#D66B3D',
      text: 'text-rose-100',
      gradient: 'from-rose-800 to-red-950'
    },
    imageFile: 'bible-riddles.png',
    isFirstPlayable: false
  },
  {
    id: 'bible-geography-quest',
    title: 'Bible Geography Quest',
    category: 'Geography',
    subtitle: 'Map out the lands of patriarchs & apostles',
    description: 'Explore ancient topography from Ur of the Chaldeans to Jerusalem, Antioch, and Rome.',
    difficulty: 'Hard',
    levelsCount: 70,
    playerLevel: 1,
    colorScheme: {
      bg: 'bg-orange-950',
      accent: '#D66B3D',
      text: 'text-orange-100',
      gradient: 'from-amber-900 to-orange-950'
    },
    imageFile: 'bible-geography-quest.png',
    isFirstPlayable: false
  },
  {
    id: 'bible-memory-challenge',
    title: 'Bible Memory Challenge',
    category: 'Memory',
    subtitle: 'Card pair matching for scripture verses',
    description: 'Flip matching tiles to pair verses with their corresponding book references and chapter themes.',
    difficulty: 'Medium',
    levelsCount: 50,
    playerLevel: 1,
    colorScheme: {
      bg: 'bg-emerald-950',
      accent: '#A7B49A',
      text: 'text-emerald-100',
      gradient: 'from-emerald-900 to-teal-950'
    },
    imageFile: 'bible-memory-challenge.png',
    isFirstPlayable: false
  },
  {
    id: 'old-vs-new-testament',
    title: 'Old vs New Testament',
    category: 'Quiz',
    subtitle: 'Categorize laws, covenants & eras',
    description: 'Distinguish between Levitical ordinances and New Covenant epistles in lightning-fast classification rounds.',
    difficulty: 'Easy',
    levelsCount: 100,
    playerLevel: 1,
    colorScheme: {
      bg: 'bg-blue-950',
      accent: '#3156C9',
      text: 'text-blue-100',
      gradient: 'from-blue-900 to-slate-950'
    },
    imageFile: 'old-vs-new-testament.png',
    isFirstPlayable: false
  },
  {
    id: 'bible-detective',
    title: 'Bible Detective',
    category: 'Character Quest',
    subtitle: 'Unearth archaeological clues & biblical mysteries',
    description: 'Examine manuscript fragments, seals, and historical artifacts to solve theological mysteries.',
    difficulty: 'Expert',
    levelsCount: 40,
    playerLevel: 1,
    colorScheme: {
      bg: 'bg-zinc-900',
      accent: '#D66B3D',
      text: 'text-zinc-100',
      gradient: 'from-zinc-800 to-zinc-950'
    },
    imageFile: 'bible-detective.png',
    isFirstPlayable: false
  },
  {
    id: 'bible-chain-challenge',
    title: 'Bible Chain Challenge',
    category: 'Word Games',
    subtitle: 'Link words by final and initial letters',
    description: 'Build continuous chains of biblical names and terms where each word begins with the last letter of the previous.',
    difficulty: 'Medium',
    levelsCount: 60,
    playerLevel: 1,
    colorScheme: {
      bg: 'bg-stone-950',
      accent: '#D66B3D',
      text: 'text-stone-100',
      gradient: 'from-stone-900 to-neutral-950'
    },
    imageFile: 'bible-chain-challenge.png',
    isFirstPlayable: false
  }
];

export function getGameById(id: string): GameInfo | undefined {
  return GAMES_LIST.find((g) => g.id === id);
}

export const CATEGORIES = [
  'Trending',
  'Quiz',
  'Word Games',
  'Puzzles',
  'Memory',
  'Geography',
  'Character Quest',
  'Multiplayer'
] as const;
