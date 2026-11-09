export interface ScrambleLevelSpec {
  level: number;
  stageNum: number;
  stageTitle: string;
  levelName: string;
  mechanic: string;
  difficulty: 'easy' | 'moderate' | 'hard' | 'very-hard' | 'expert' | 'master';
  timerSeconds: number;
}

export const SCRAMBLE_LEVEL_SPECS: ScrambleLevelSpec[] = [
  // Stage 1 — Warm-Up Scramble (Levels 1–5 · Easy to Moderate)
  { level: 1, stageNum: 1, stageTitle: 'Warm-Up Scramble', levelName: 'The First Shuffle', mechanic: 'letter-scramble', difficulty: 'easy', timerSeconds: 30 },
  { level: 2, stageNum: 1, stageTitle: 'Warm-Up Scramble', levelName: 'Book of Letters', mechanic: 'book-scramble', difficulty: 'easy', timerSeconds: 30 },
  { level: 3, stageNum: 1, stageTitle: 'Warm-Up Scramble', levelName: 'Missing Letters', mechanic: 'missing-letters', difficulty: 'easy', timerSeconds: 30 },
  { level: 4, stageNum: 1, stageTitle: 'Warm-Up Scramble', levelName: 'Word Detective', mechanic: 'word-detective', difficulty: 'moderate', timerSeconds: 30 },
  { level: 5, stageNum: 1, stageTitle: 'Warm-Up Scramble', levelName: 'Mixed-Up Challenge', mechanic: 'mixed-challenge', difficulty: 'moderate', timerSeconds: 25 },

  // Stage 2 — Names and People (Levels 6–10 · Moderate)
  { level: 6, stageNum: 2, stageTitle: 'Names and People', levelName: 'Character Shuffle', mechanic: 'character-shuffle', difficulty: 'moderate', timerSeconds: 30 },
  { level: 7, stageNum: 2, stageTitle: 'Names and People', levelName: 'The Uncommon Names', mechanic: 'uncommon-names', difficulty: 'moderate', timerSeconds: 30 },
  { level: 8, stageNum: 2, stageTitle: 'Names and People', levelName: 'Name Twins', mechanic: 'name-twins', difficulty: 'moderate', timerSeconds: 30 },
  { level: 9, stageNum: 2, stageTitle: 'Names and People', levelName: 'Family Name Puzzle', mechanic: 'family-names', difficulty: 'moderate', timerSeconds: 30 },
  { level: 10, stageNum: 2, stageTitle: 'Names and People', levelName: 'Character Scramble Boss', mechanic: 'character-boss', difficulty: 'moderate', timerSeconds: 25 },

  // Stage 3 — Places and Journeys (Levels 11–15 · Moderate to Hard)
  { level: 11, stageNum: 3, stageTitle: 'Places and Journeys', levelName: 'City Shuffle', mechanic: 'city-shuffle', difficulty: 'moderate', timerSeconds: 30 },
  { level: 12, stageNum: 3, stageTitle: 'Places and Journeys', levelName: 'Land and Regions', mechanic: 'lands-regions', difficulty: 'moderate', timerSeconds: 30 },
  { level: 13, stageNum: 3, stageTitle: 'Places and Journeys', levelName: 'Rivers and Mountains', mechanic: 'rivers-mountains', difficulty: 'hard', timerSeconds: 30 },
  { level: 14, stageNum: 3, stageTitle: 'Places and Journeys', levelName: 'Journey Puzzle', mechanic: 'journey-puzzle', difficulty: 'hard', timerSeconds: 30 },
  { level: 15, stageNum: 3, stageTitle: 'Places and Journeys', levelName: 'Geography Scramble Boss', mechanic: 'geography-boss', difficulty: 'hard', timerSeconds: 25 },

  // Stage 4 — Biblical Words and Objects (Levels 16–20 · Hard)
  { level: 16, stageNum: 4, stageTitle: 'Biblical Words and Objects', levelName: 'Sacred Objects', mechanic: 'sacred-objects', difficulty: 'hard', timerSeconds: 30 },
  { level: 17, stageNum: 4, stageTitle: 'Biblical Words and Objects', levelName: 'Tools and Weapons', mechanic: 'tools-weapons', difficulty: 'hard', timerSeconds: 30 },
  { level: 18, stageNum: 4, stageTitle: 'Biblical Words and Objects', levelName: 'Signs and Symbols', mechanic: 'signs-symbols', difficulty: 'hard', timerSeconds: 30 },
  { level: 19, stageNum: 4, stageTitle: 'Biblical Words and Objects', levelName: 'The Forgotten Vocabulary', mechanic: 'forgotten-vocabulary', difficulty: 'hard', timerSeconds: 30 },
  { level: 20, stageNum: 4, stageTitle: 'Biblical Words and Objects', levelName: 'Object Scramble Boss', mechanic: 'object-boss', difficulty: 'hard', timerSeconds: 25 },

  // Stage 5 — Books and Scripture (Levels 21–25 · Hard)
  { level: 21, stageNum: 5, stageTitle: 'Books and Scripture', levelName: 'Old Testament Shuffle', mechanic: 'ot-books', difficulty: 'hard', timerSeconds: 30 },
  { level: 22, stageNum: 5, stageTitle: 'Books and Scripture', levelName: 'New Testament Shuffle', mechanic: 'nt-books', difficulty: 'hard', timerSeconds: 30 },
  { level: 23, stageNum: 5, stageTitle: 'Books and Scripture', levelName: 'The Book Trap', mechanic: 'book-trap', difficulty: 'hard', timerSeconds: 30 },
  { level: 24, stageNum: 5, stageTitle: 'Books and Scripture', levelName: 'Scripture Phrase Puzzle', mechanic: 'scripture-phrase', difficulty: 'hard', timerSeconds: 30 },
  { level: 25, stageNum: 5, stageTitle: 'Books and Scripture', levelName: 'Scripture Scramble Boss', mechanic: 'scripture-boss', difficulty: 'hard', timerSeconds: 25 },

  // Stage 6 — The Word Order Challenge (Levels 26–30 · Hard to Very Hard)
  { level: 26, stageNum: 6, stageTitle: 'The Word Order Challenge', levelName: 'Rearrange the Words', mechanic: 'word-order', difficulty: 'hard', timerSeconds: 25 },
  { level: 27, stageNum: 6, stageTitle: 'The Word Order Challenge', levelName: 'Complete the Phrase', mechanic: 'complete-phrase', difficulty: 'hard', timerSeconds: 25 },
  { level: 28, stageNum: 6, stageTitle: 'The Word Order Challenge', levelName: 'The Mixed-Up Verse', mechanic: 'mixed-verse', difficulty: 'very-hard', timerSeconds: 25 },
  { level: 29, stageNum: 6, stageTitle: 'The Word Order Challenge', levelName: 'Which Comes First?', mechanic: 'which-comes-first', difficulty: 'very-hard', timerSeconds: 25 },
  { level: 30, stageNum: 6, stageTitle: 'The Word Order Challenge', levelName: 'Word Order Boss', mechanic: 'word-order-boss', difficulty: 'very-hard', timerSeconds: 25 },

  // Stage 7 — The Unfamiliar Challenge (Levels 31–35 · Very Hard)
  { level: 31, stageNum: 7, stageTitle: 'The Unfamiliar Challenge', levelName: 'Forgotten Names', mechanic: 'unfamiliar-names', difficulty: 'very-hard', timerSeconds: 25 },
  { level: 32, stageNum: 7, stageTitle: 'The Unfamiliar Challenge', levelName: 'Difficult Book Names', mechanic: 'difficult-books', difficulty: 'very-hard', timerSeconds: 25 },
  { level: 33, stageNum: 7, stageTitle: 'The Unfamiliar Challenge', levelName: 'Rare Places', mechanic: 'rare-places', difficulty: 'very-hard', timerSeconds: 25 },
  { level: 34, stageNum: 7, stageTitle: 'The Unfamiliar Challenge', levelName: 'Ancient Vocabulary', mechanic: 'ancient-vocabulary', difficulty: 'very-hard', timerSeconds: 25 },
  { level: 35, stageNum: 7, stageTitle: 'The Unfamiliar Challenge', levelName: 'The Unfamiliar Boss', mechanic: 'unfamiliar-boss', difficulty: 'very-hard', timerSeconds: 20 },

  // Stage 8 — The Scripture Investigator (Levels 36–40 · Very Hard)
  { level: 36, stageNum: 8, stageTitle: 'The Scripture Investigator', levelName: 'Clue and Scramble', mechanic: 'clue-scramble', difficulty: 'very-hard', timerSeconds: 25 },
  { level: 37, stageNum: 8, stageTitle: 'The Scripture Investigator', levelName: 'Reference Detective', mechanic: 'reference-detective', difficulty: 'very-hard', timerSeconds: 25 },
  { level: 38, stageNum: 8, stageTitle: 'The Scripture Investigator', levelName: 'One Letter Changes', mechanic: 'one-letter-changes', difficulty: 'very-hard', timerSeconds: 25 },
  { level: 39, stageNum: 8, stageTitle: 'The Scripture Investigator', levelName: 'Hidden Word Challenge', mechanic: 'hidden-word', difficulty: 'very-hard', timerSeconds: 25 },
  { level: 40, stageNum: 8, stageTitle: 'The Scripture Investigator', levelName: 'Investigator Boss', mechanic: 'investigator-boss', difficulty: 'very-hard', timerSeconds: 20 },

  // Stage 9 — Expert Scramble (Levels 41–45 · Expert)
  { level: 41, stageNum: 9, stageTitle: 'Expert Scramble', levelName: 'Long Name Challenge', mechanic: 'long-names', difficulty: 'expert', timerSeconds: 25 },
  { level: 42, stageNum: 9, stageTitle: 'Expert Scramble', levelName: 'The Genealogy Shuffle', mechanic: 'genealogy-shuffle', difficulty: 'expert', timerSeconds: 25 },
  { level: 43, stageNum: 9, stageTitle: 'Expert Scramble', levelName: 'The Phrase Master', mechanic: 'phrase-master', difficulty: 'expert', timerSeconds: 25 },
  { level: 44, stageNum: 9, stageTitle: 'Expert Scramble', levelName: 'The Triple Scramble', mechanic: 'triple-scramble', difficulty: 'expert', timerSeconds: 25 },
  { level: 45, stageNum: 9, stageTitle: 'Expert Scramble', levelName: 'Expert Scramble Boss', mechanic: 'expert-boss', difficulty: 'expert', timerSeconds: 20 },

  // Stage 10 — Ultimate Scripture Scramble (Levels 46–50 · Master)
  { level: 46, stageNum: 10, stageTitle: 'Ultimate Scripture Scramble', levelName: 'No Clue Scramble', mechanic: 'no-clue', difficulty: 'master', timerSeconds: 20 },
  { level: 47, stageNum: 10, stageTitle: 'Ultimate Scripture Scramble', levelName: 'The Speed Scramble', mechanic: 'speed-scramble', difficulty: 'master', timerSeconds: 20 },
  { level: 48, stageNum: 10, stageTitle: 'Ultimate Scripture Scramble', levelName: 'The Bible Expert', mechanic: 'bible-expert', difficulty: 'master', timerSeconds: 20 },
  { level: 49, stageNum: 10, stageTitle: 'Ultimate Scripture Scramble', levelName: 'The Ultimate Word Puzzle', mechanic: 'ultimate-puzzle', difficulty: 'master', timerSeconds: 20 },
  { level: 50, stageNum: 10, stageTitle: 'Ultimate Scripture Scramble', levelName: 'Scripture Scramble Master', mechanic: 'scramble-master', difficulty: 'master', timerSeconds: 15 },
];
