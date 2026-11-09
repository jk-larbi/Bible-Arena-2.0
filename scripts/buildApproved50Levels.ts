import fs from 'fs';
import path from 'path';

// Definition of the 10 stages and 50 levels from the approved specification
export interface LevelSpec {
  level: number;
  stageNum: number;
  stageTitle: string;
  levelName: string;
  mechanic: string;
  difficulty: string;
  timerSeconds: number;
}

export const LEVEL_SPECS: LevelSpec[] = [
  // Stage 1 — The Identity Test (Levels 1–5)
  { level: 1, stageNum: 1, stageTitle: 'The Identity Test', levelName: 'Who Am I?', mechanic: 'who-am-i', difficulty: 'easy', timerSeconds: 30 },
  { level: 2, stageNum: 1, stageTitle: 'The Identity Test', levelName: 'The Name Trap', mechanic: 'name-trap', difficulty: 'easy', timerSeconds: 30 },
  { level: 3, stageNum: 1, stageTitle: 'The Identity Test', levelName: 'Family Connections', mechanic: 'family-connections', difficulty: 'easy', timerSeconds: 30 },
  { level: 4, stageNum: 1, stageTitle: 'The Identity Test', levelName: 'The Unusual Detail', mechanic: 'unusual-detail', difficulty: 'moderate', timerSeconds: 30 },
  { level: 5, stageNum: 1, stageTitle: 'The Identity Test', levelName: 'One Clue Too Many', mechanic: 'one-clue-too-many', difficulty: 'moderate', timerSeconds: 25 },

  // Stage 2 — The People of the Bible (Levels 6–10)
  { level: 6, stageNum: 2, stageTitle: 'The People of the Bible', levelName: 'The First Families', mechanic: 'first-families', difficulty: 'moderate', timerSeconds: 30 },
  { level: 7, stageNum: 2, stageTitle: 'The Patriarch Files', levelName: 'The Patriarch Files', mechanic: 'patriarch-files', difficulty: 'moderate', timerSeconds: 30 },
  { level: 8, stageNum: 2, stageTitle: 'The People of the Bible', levelName: 'The Story Behind the Name', mechanic: 'story-behind-name', difficulty: 'moderate', timerSeconds: 30 },
  { level: 9, stageNum: 2, stageTitle: 'The People of the Bible', levelName: 'The Forgotten Names', mechanic: 'forgotten-names', difficulty: 'moderate', timerSeconds: 30 },
  { level: 10, stageNum: 2, stageTitle: 'The People of the Bible', levelName: 'Family Boss Round', mechanic: 'family-boss', difficulty: 'moderate', timerSeconds: 25 },

  // Stage 3 — Leaders, Deliverers and Judges (Levels 11–15)
  { level: 11, stageNum: 3, stageTitle: 'Leaders, Deliverers and Judges', levelName: 'Leaders and Their Circles', mechanic: 'leaders-and-circles', difficulty: 'moderate', timerSeconds: 30 },
  { level: 12, stageNum: 3, stageTitle: 'Leaders, Deliverers and Judges', levelName: 'The Wilderness People', mechanic: 'wilderness-people', difficulty: 'moderate', timerSeconds: 30 },
  { level: 13, stageNum: 3, stageTitle: 'Leaders, Deliverers and Judges', levelName: "Judges' Arena", mechanic: 'judges-arena', difficulty: 'hard', timerSeconds: 30 },
  { level: 14, stageNum: 3, stageTitle: 'Leaders, Deliverers and Judges', levelName: 'Unexpected Heroes', mechanic: 'unexpected-heroes', difficulty: 'hard', timerSeconds: 30 },
  { level: 15, stageNum: 3, stageTitle: 'Leaders, Deliverers and Judges', levelName: 'Deliverer Showdown', mechanic: 'deliverer-showdown', difficulty: 'hard', timerSeconds: 25 },

  // Stage 4 — Kings and Royal Families (Levels 16–20)
  { level: 16, stageNum: 4, stageTitle: 'Kings and Royal Families', levelName: 'The First Kings', mechanic: 'first-kings', difficulty: 'hard', timerSeconds: 30 },
  { level: 17, stageNum: 4, stageTitle: 'Kings and Royal Families', levelName: 'Thrones and Bloodlines', mechanic: 'thrones-bloodlines', difficulty: 'hard', timerSeconds: 30 },
  { level: 18, stageNum: 4, stageTitle: 'Kings and Royal Families', levelName: 'The Divided Kingdom', mechanic: 'divided-kingdom', difficulty: 'hard', timerSeconds: 30 },
  { level: 19, stageNum: 4, stageTitle: 'Kings and Royal Families', levelName: 'Royal Mistakes', mechanic: 'royal-mistakes', difficulty: 'hard', timerSeconds: 30 },
  { level: 20, stageNum: 4, stageTitle: 'Kings and Royal Families', levelName: "The Kingmaker's Trial", mechanic: 'kingmakers-trial', difficulty: 'hard', timerSeconds: 25 },

  // Stage 5 — Prophets and Their Encounters (Levels 21–25)
  { level: 21, stageNum: 5, stageTitle: 'Prophets and Their Encounters', levelName: 'Name That Prophet', mechanic: 'name-that-prophet', difficulty: 'hard', timerSeconds: 30 },
  { level: 22, stageNum: 5, stageTitle: 'Prophets and Their Encounters', levelName: 'Prophet or Someone Else?', mechanic: 'prophet-or-other', difficulty: 'hard', timerSeconds: 30 },
  { level: 23, stageNum: 5, stageTitle: 'Prophets and Their Encounters', levelName: 'Prophetic Encounters', mechanic: 'prophetic-encounters', difficulty: 'hard', timerSeconds: 30 },
  { level: 24, stageNum: 5, stageTitle: 'Prophets and Their Encounters', levelName: 'The Strange Assignment', mechanic: 'strange-assignment', difficulty: 'hard', timerSeconds: 30 },
  { level: 25, stageNum: 5, stageTitle: 'Prophets and Their Encounters', levelName: 'Prophet Boss Round', mechanic: 'prophet-boss', difficulty: 'hard', timerSeconds: 25 },

  // Stage 6 — The People Around Jesus (Levels 26–30)
  { level: 26, stageNum: 6, stageTitle: 'The People Around Jesus', levelName: 'The Birth Story', mechanic: 'birth-story', difficulty: 'hard', timerSeconds: 30 },
  { level: 27, stageNum: 6, stageTitle: 'The People Around Jesus', levelName: 'The Twelve', mechanic: 'the-twelve', difficulty: 'hard', timerSeconds: 30 },
  { level: 28, stageNum: 6, stageTitle: 'The People Around Jesus', levelName: 'Around the Master', mechanic: 'around-the-master', difficulty: 'hard', timerSeconds: 30 },
  { level: 29, stageNum: 6, stageTitle: 'The People Around Jesus', levelName: 'The Miracle Witnesses', mechanic: 'miracle-witnesses', difficulty: 'very-hard', timerSeconds: 30 },
  { level: 30, stageNum: 6, stageTitle: 'The People Around Jesus', levelName: 'The Gospel Identity Test', mechanic: 'gospel-identity', difficulty: 'very-hard', timerSeconds: 25 },

  // Stage 7 — Parables, Encounters and the Final Week (Levels 31–35)
  { level: 31, stageNum: 7, stageTitle: 'Parables, Encounters and the Final Week', levelName: 'The Parable Characters', mechanic: 'parable-characters', difficulty: 'very-hard', timerSeconds: 25 },
  { level: 32, stageNum: 7, stageTitle: 'Parables, Encounters and the Final Week', levelName: 'The Questioners', mechanic: 'the-questioners', difficulty: 'very-hard', timerSeconds: 25 },
  { level: 33, stageNum: 7, stageTitle: 'Parables, Encounters and the Final Week', levelName: 'The Final Week', mechanic: 'final-week', difficulty: 'very-hard', timerSeconds: 25 },
  { level: 34, stageNum: 7, stageTitle: 'Parables, Encounters and the Final Week', levelName: 'Resurrection Witnesses', mechanic: 'resurrection-witnesses', difficulty: 'very-hard', timerSeconds: 25 },
  { level: 35, stageNum: 7, stageTitle: 'Parables, Encounters and the Final Week', levelName: 'Gospel Character Boss', mechanic: 'gospel-boss', difficulty: 'very-hard', timerSeconds: 20 },

  // Stage 8 — The Early Church (Levels 36–40)
  { level: 36, stageNum: 8, stageTitle: 'The Early Church', levelName: 'Acts of the Apostles', mechanic: 'acts-apostles', difficulty: 'very-hard', timerSeconds: 25 },
  { level: 37, stageNum: 8, stageTitle: 'The Early Church', levelName: "Paul's Companions", mechanic: 'pauls-companions', difficulty: 'very-hard', timerSeconds: 25 },
  { level: 38, stageNum: 8, stageTitle: 'The Early Church', levelName: 'Early Church Leaders', mechanic: 'early-leaders', difficulty: 'very-hard', timerSeconds: 25 },
  { level: 39, stageNum: 8, stageTitle: 'The Early Church', levelName: 'Conversion Stories', mechanic: 'conversion-stories', difficulty: 'very-hard', timerSeconds: 25 },
  { level: 40, stageNum: 8, stageTitle: 'The Early Church', levelName: 'Missionary Challenge', mechanic: 'missionary-challenge', difficulty: 'very-hard', timerSeconds: 20 },

  // Stage 9 — The People You Might Have Forgotten (Levels 41–45)
  { level: 41, stageNum: 9, stageTitle: 'The People You Might Have Forgotten', levelName: 'Minor Character Test', mechanic: 'minor-characters', difficulty: 'expert', timerSeconds: 25 },
  { level: 42, stageNum: 9, stageTitle: 'The People You Might Have Forgotten', levelName: 'Women of the Bible', mechanic: 'women-of-bible', difficulty: 'expert', timerSeconds: 25 },
  { level: 43, stageNum: 9, stageTitle: 'The People You Might Have Forgotten', levelName: 'Unusual Names', mechanic: 'unusual-names', difficulty: 'expert', timerSeconds: 25 },
  { level: 44, stageNum: 9, stageTitle: 'The People You Might Have Forgotten', levelName: 'Hidden Connections', mechanic: 'hidden-connections', difficulty: 'expert', timerSeconds: 25 },
  { level: 45, stageNum: 9, stageTitle: 'The People You Might Have Forgotten', levelName: 'Forgotten People Boss', mechanic: 'forgotten-boss', difficulty: 'expert', timerSeconds: 20 },

  // Stage 10 — The Ultimate Character Quest (Levels 46–50)
  { level: 46, stageNum: 10, stageTitle: 'The Ultimate Character Quest', levelName: 'Three Clues, One Person', mechanic: 'three-clues', difficulty: 'master', timerSeconds: 20 },
  { level: 47, stageNum: 10, stageTitle: 'The Ultimate Character Quest', levelName: 'Family Tree Trap', mechanic: 'family-tree-trap', difficulty: 'master', timerSeconds: 20 },
  { level: 48, stageNum: 10, stageTitle: 'The Ultimate Character Quest', levelName: 'Life Story Puzzle', mechanic: 'life-story-puzzle', difficulty: 'master', timerSeconds: 20 },
  { level: 49, stageNum: 10, stageTitle: 'The Ultimate Character Quest', levelName: 'Bible Character Investigator', mechanic: 'character-investigator', difficulty: 'master', timerSeconds: 20 },
  { level: 50, stageNum: 10, stageTitle: 'The Ultimate Character Quest', levelName: 'Ultimate Character Master', mechanic: 'ultimate-master', difficulty: 'master', timerSeconds: 15 },
];
