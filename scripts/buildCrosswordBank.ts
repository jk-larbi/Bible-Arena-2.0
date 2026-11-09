import { writeFileSync } from 'fs';
import { buildBibleCrosswordLayout, CrosswordEntry } from '../src/components/game/BibleCrosswordBoard';
import { MASTER_CLUES, RawClue } from './buildCrosswordStagePools';

interface LevelMeta {
  level: number;
  stage: number;
  stageTitle: string;
  levelTitle: string;
  questionText: string;
  category: string;
  difficulty: string;
  timerSeconds: number;
  preferredTags: string[];
}

const LEVEL_DEFS: LevelMeta[] = [
  // Stage 1
  { level: 1, stage: 1, stageTitle: 'Crossword Foundations', levelTitle: 'First Crossword', questionText: 'Complete the foundational Bible crossword with key people, places, and events.', category: 'Crossword Foundations', difficulty: 'Medium', timerSeconds: 240, preferredTags: ['core', 'general'] },
  { level: 2, stage: 1, stageTitle: 'Crossword Foundations', levelTitle: 'Book Finder', questionText: 'Identify canonical books and their themes across the Old and New Testaments.', category: 'Crossword Foundations', difficulty: 'Medium', timerSeconds: 240, preferredTags: ['book', 'scripture'] },
  { level: 3, stage: 1, stageTitle: 'Crossword Foundations', levelTitle: 'People of Scripture', questionText: 'Solve Across and Down clues identifying essential biblical figures.', category: 'Crossword Foundations', difficulty: 'Medium', timerSeconds: 240, preferredTags: ['people', 'character'] },
  { level: 4, stage: 1, stageTitle: 'Crossword Foundations', levelTitle: 'Places in the Bible', questionText: 'Navigate ancient cities, holy mountains, and sacred waterways in the grid.', category: 'Crossword Foundations', difficulty: 'Medium', timerSeconds: 240, preferredTags: ['place', 'geography'] },
  { level: 5, stage: 1, stageTitle: 'Crossword Foundations', levelTitle: 'Mixed Crossword', questionText: 'Demonstrate breadth across both Testaments in this fast-paced mixed crossword.', category: 'Crossword Foundations', difficulty: 'Medium', timerSeconds: 220, preferredTags: ['general', 'words'] },

  // Stage 2
  { level: 6, stage: 2, stageTitle: 'Biblical People', levelTitle: 'Patriarch Crossword', questionText: 'Trace the covenant families from Abraham, Isaac, and Jacob to the twelve tribes.', category: 'Biblical People', difficulty: 'Medium-Hard', timerSeconds: 220, preferredTags: ['patriarch', 'ot', 'people'] },
  { level: 7, stage: 2, stageTitle: 'Biblical People', levelTitle: 'Kings and Queens', questionText: 'Identify the monarchs, queens, and royal court figures of Scripture.', category: 'Biblical People', difficulty: 'Medium-Hard', timerSeconds: 220, preferredTags: ['monarch', 'king', 'queen', 'people'] },
  { level: 8, stage: 2, stageTitle: 'Biblical People', levelTitle: 'Prophets\' Puzzle', questionText: 'Decipher clues describing major and minor prophets, their visions, and oracles.', category: 'Biblical People', difficulty: 'Medium-Hard', timerSeconds: 220, preferredTags: ['prophet', 'people'] },
  { level: 9, stage: 2, stageTitle: 'Biblical People', levelTitle: 'Apostles and Disciples', questionText: 'Connect the Twelve, early witnesses, and apostolic co-workers in the grid.', category: 'Biblical People', difficulty: 'Medium-Hard', timerSeconds: 220, preferredTags: ['apostle', 'disciple', 'nt', 'people'] },
  { level: 10, stage: 2, stageTitle: 'Biblical People', levelTitle: 'Character Crossword Boss', questionText: 'Stage 2 Boss: Overcome deep character riddles linking both Testaments.', category: 'Biblical People', difficulty: 'Hard', timerSeconds: 200, preferredTags: ['people', 'uncommon'] },

  // Stage 3
  { level: 11, stage: 3, stageTitle: 'Places and Events', levelTitle: 'Ancient Cities', questionText: 'Locate ancient capitals, border strongholds, and centers of apostolic ministry.', category: 'Places and Events', difficulty: 'Hard', timerSeconds: 200, preferredTags: ['place', 'city'] },
  { level: 12, stage: 3, stageTitle: 'Places and Events', levelTitle: 'Journeys and Destinations', questionText: 'Chart the wilderness wandering, prophetic missions, and sea voyages of Paul.', category: 'Places and Events', difficulty: 'Hard', timerSeconds: 200, preferredTags: ['journey', 'place'] },
  { level: 13, stage: 3, stageTitle: 'Places and Events', levelTitle: 'Battles and Deliverance', questionText: 'Solve clues from historical battlefields, divine interventions, and deliverances.', category: 'Places and Events', difficulty: 'Hard', timerSeconds: 200, preferredTags: ['warrior', 'battle', 'deliverance', 'ot'] },
  { level: 14, stage: 3, stageTitle: 'Places and Events', levelTitle: 'Miracles and Wonders', questionText: 'Identify supernatural demonstrations of divine power throughout redemptive history.', category: 'Places and Events', difficulty: 'Hard', timerSeconds: 200, preferredTags: ['miracle', 'wonder', 'general'] },
  { level: 15, stage: 3, stageTitle: 'Places and Events', levelTitle: 'Events Crossword Boss', questionText: 'Stage 3 Boss: Master watershed historical transitions and covenant moments.', category: 'Places and Events', difficulty: 'Hard', timerSeconds: 180, preferredTags: ['event', 'place', 'people'] },

  // Stage 4
  { level: 16, stage: 4, stageTitle: 'Forgotten Details', levelTitle: 'Unusual Names', questionText: 'Test your knowledge on rarely-mentioned individuals and unfamiliar names in Scripture.', category: 'Forgotten Details', difficulty: 'Hard', timerSeconds: 180, preferredTags: ['uncommon', 'people'] },
  { level: 17, stage: 4, stageTitle: 'Forgotten Details', levelTitle: 'Family Connections', questionText: 'Untangle in-laws, cousins, mothers, and uncles from complex biblical households.', category: 'Forgotten Details', difficulty: 'Hard', timerSeconds: 180, preferredTags: ['family', 'people', 'women'] },
  { level: 18, stage: 4, stageTitle: 'Forgotten Details', levelTitle: 'Objects and Symbols', questionText: 'Identify sacred implements, priestly vestments, and prophetic emblems.', category: 'Forgotten Details', difficulty: 'Hard', timerSeconds: 180, preferredTags: ['object', 'sacred', 'symbol'] },
  { level: 19, stage: 4, stageTitle: 'Forgotten Details', levelTitle: 'Who Was There?', questionText: 'Recall the eyewitnesses, gatekeepers, and servants present at pivotal biblical moments.', category: 'Forgotten Details', difficulty: 'Hard', timerSeconds: 180, preferredTags: ['witness', 'people', 'uncommon'] },
  { level: 20, stage: 4, stageTitle: 'Forgotten Details', levelTitle: 'Forgotten Details Boss', questionText: 'Stage 4 Boss: Uncover minute textual details that challenge casual Bible readers.', category: 'Forgotten Details', difficulty: 'Very Hard', timerSeconds: 160, preferredTags: ['uncommon', 'detail'] },

  // Stage 5
  { level: 21, stage: 5, stageTitle: 'Scripture Knowledge', levelTitle: 'Old Testament Challenge', questionText: 'Delve into the Torah, historical accounts, wisdom literature, and prophets.', category: 'Scripture Knowledge', difficulty: 'Very Hard', timerSeconds: 180, preferredTags: ['ot'] },
  { level: 22, stage: 5, stageTitle: 'Scripture Knowledge', levelTitle: 'New Testament Challenge', questionText: 'Fill in Across and Down answers spanning the Gospels, Acts, Epistles, and Revelation.', category: 'Scripture Knowledge', difficulty: 'Very Hard', timerSeconds: 180, preferredTags: ['nt'] },
  { level: 23, stage: 5, stageTitle: 'Scripture Knowledge', levelTitle: 'Similar Names', questionText: 'Distinguish figures sharing identical names across biblical history.', category: 'Scripture Knowledge', difficulty: 'Very Hard', timerSeconds: 170, preferredTags: ['trap', 'similar', 'people'] },
  { level: 24, stage: 5, stageTitle: 'Scripture Knowledge', levelTitle: 'Scripture Detective', questionText: 'Follow chapter-and-verse textual leads to deduce each interlocking word.', category: 'Scripture Knowledge', difficulty: 'Very Hard', timerSeconds: 170, preferredTags: ['detective', 'scripture'] },
  { level: 25, stage: 5, stageTitle: 'Scripture Knowledge', levelTitle: 'Scripture Crossword Boss', questionText: 'Stage 5 Boss: Connect dense cross-testament scriptural themes against the clock.', category: 'Scripture Knowledge', difficulty: 'Very Hard', timerSeconds: 150, preferredTags: ['ot', 'nt', 'uncommon'] },

  // Stage 6
  { level: 26, stage: 6, stageTitle: 'The Forgotten People', levelTitle: 'Women of the Bible', questionText: 'Celebrate the prophetesses, judges, benefactresses, and faithful women of Scripture.', category: 'The Forgotten People', difficulty: 'Difficult', timerSeconds: 160, preferredTags: ['women', 'people'] },
  { level: 27, stage: 6, stageTitle: 'The Forgotten People', levelTitle: 'Minor Characters', questionText: 'Spot the overlooked messengers, cupbearers, and soldiers who shaped history.', category: 'The Forgotten People', difficulty: 'Difficult', timerSeconds: 160, preferredTags: ['uncommon', 'minor'] },
  { level: 28, stage: 6, stageTitle: 'The Forgotten People', levelTitle: 'Paul\'s Companions', questionText: 'Identify the faithful co-workers, couriers, and fellow prisoners named in Paul\'s epistles.', category: 'The Forgotten People', difficulty: 'Difficult', timerSeconds: 160, preferredTags: ['companion', 'nt'] },
  { level: 29, stage: 6, stageTitle: 'The Forgotten People', levelTitle: 'Genealogy Challenge', questionText: 'Navigate generational lists, ancestral houses, and tribal allotments in the grid.', category: 'The Forgotten People', difficulty: 'Difficult', timerSeconds: 150, preferredTags: ['genealogy', 'ancestry', 'people'] },
  { level: 30, stage: 6, stageTitle: 'The Forgotten People', levelTitle: 'Forgotten People Boss', questionText: 'Stage 6 Boss: Conquer a formidable grid of obscure biblical men and women.', category: 'The Forgotten People', difficulty: 'Difficult', timerSeconds: 140, preferredTags: ['uncommon', 'people'] },

  // Stage 7
  { level: 31, stage: 7, stageTitle: 'Difficult Crossword', levelTitle: 'Long Biblical Names', questionText: 'Fit intricate, multisyllabic biblical names into precision crossword intersections.', category: 'Difficult Crossword', difficulty: 'Difficult', timerSeconds: 150, preferredTags: ['long', 'uncommon'] },
  { level: 32, stage: 7, stageTitle: 'Difficult Crossword', levelTitle: 'Ancient Vocabulary', questionText: 'Translate ancient transliterated Hebrew, Aramaic, and Greek expressions.', category: 'Difficult Crossword', difficulty: 'Difficult', timerSeconds: 150, preferredTags: ['vocabulary', 'hebrew', 'aramaic'] },
  { level: 33, stage: 7, stageTitle: 'Difficult Crossword', levelTitle: 'Prophets and Their Assignments', questionText: 'Match prophetic messengers to their specific geographical and moral assignments.', category: 'Difficult Crossword', difficulty: 'Difficult', timerSeconds: 140, preferredTags: ['prophet', 'assignment'] },
  { level: 34, stage: 7, stageTitle: 'Difficult Crossword', levelTitle: 'Hidden Connections', questionText: 'Examine subtle typological relationships linking shadows of the Law to Christ.', category: 'Difficult Crossword', difficulty: 'Difficult', timerSeconds: 140, preferredTags: ['hidden', 'connection', 'uncommon'] },
  { level: 35, stage: 7, stageTitle: 'Difficult Crossword', levelTitle: 'Difficult Crossword Boss', questionText: 'Stage 7 Boss: High complexity intersections demanding instant biblical recall.', category: 'Difficult Crossword', difficulty: 'Expert', timerSeconds: 130, preferredTags: ['uncommon', 'difficult'] },

  // Stage 8
  { level: 36, stage: 8, stageTitle: 'Bible Investigator', levelTitle: 'Reference Detective', questionText: 'Investigate cryptic biblical citations to uncover the concealed answer.', category: 'Bible Investigator', difficulty: 'Expert', timerSeconds: 140, preferredTags: ['detective', 'reference'] },
  { level: 37, stage: 8, stageTitle: 'Bible Investigator', levelTitle: 'Who Said It?', questionText: 'Trace memorable declarations and obscure quotations back to the exact speaker.', category: 'Bible Investigator', difficulty: 'Expert', timerSeconds: 140, preferredTags: ['quote', 'said', 'people'] },
  { level: 38, stage: 8, stageTitle: 'Bible Investigator', levelTitle: 'Who Was Related?', questionText: 'Investigate intricate tribal kinship, obscure parentage, and brotherly ties.', category: 'Bible Investigator', difficulty: 'Expert', timerSeconds: 130, preferredTags: ['related', 'family', 'people'] },
  { level: 39, stage: 8, stageTitle: 'Bible Investigator', levelTitle: 'The Unusual Detail', questionText: 'Deduce bizarre measurements, curious habits, and remarkable physical traits.', category: 'Bible Investigator', difficulty: 'Expert', timerSeconds: 130, preferredTags: ['detail', 'unusual', 'uncommon'] },
  { level: 40, stage: 8, stageTitle: 'Bible Investigator', levelTitle: 'Investigator Boss', questionText: 'Stage 8 Boss: Synthesize diverse scriptural clues across a demanding grid.', category: 'Bible Investigator', difficulty: 'Expert', timerSeconds: 120, preferredTags: ['detective', 'uncommon'] },

  // Stage 9
  { level: 41, stage: 9, stageTitle: 'Expert Crossword', levelTitle: 'Forgotten Names Trial', questionText: 'Confront the most obscure figures listed in the Pauline greetings and Chronicles.', category: 'Expert Crossword', difficulty: 'Expert', timerSeconds: 130, preferredTags: ['uncommon', 'rare'] },
  { level: 42, stage: 9, stageTitle: 'Expert Crossword', levelTitle: 'Difficult Places', questionText: 'Chart obscure boundary markers, desert encampments, and ancient ruins.', category: 'Expert Crossword', difficulty: 'Expert', timerSeconds: 130, preferredTags: ['place', 'obscure'] },
  { level: 43, stage: 9, stageTitle: 'Expert Crossword', levelTitle: 'Bible Knowledge Trap', questionText: 'Beware of deceptive traps where surface familiarity masks nuanced biblical truth.', category: 'Expert Crossword', difficulty: 'Expert', timerSeconds: 120, preferredTags: ['trap', 'deep'] },
  { level: 44, stage: 9, stageTitle: 'Expert Crossword', levelTitle: 'No Easy Clues', questionText: 'Crack concise, unforgiving clues with zero extraneous hints.', category: 'Expert Crossword', difficulty: 'Expert', timerSeconds: 120, preferredTags: ['cryptic', 'concise', 'uncommon'] },
  { level: 45, stage: 9, stageTitle: 'Expert Crossword', levelTitle: 'Expert Crossword Boss', questionText: 'Stage 9 Boss: Penultimate championship trial reserved for consummate Bible scholars.', category: 'Expert Crossword', difficulty: 'Master', timerSeconds: 110, preferredTags: ['expert', 'uncommon'] },

  // Stage 10
  { level: 46, stage: 10, stageTitle: 'Ultimate Bible Crossword', levelTitle: 'The Final Detective', questionText: 'Piece together obscure evidence gathered from across the full biblical canon.', category: 'Ultimate Bible Crossword', difficulty: 'Master', timerSeconds: 120, preferredTags: ['detective', 'uncommon'] },
  { level: 47, stage: 10, stageTitle: 'Ultimate Bible Crossword', levelTitle: 'Old Meets New', questionText: 'Harmonize ancient covenants with New Testament apostolates and prophecies.', category: 'Ultimate Bible Crossword', difficulty: 'Master', timerSeconds: 110, preferredTags: ['ot', 'nt', 'typology'] },
  { level: 48, stage: 10, stageTitle: 'Ultimate Bible Crossword', levelTitle: 'The Bible Scholar', questionText: 'Deploy rigorous canonical, historical, and linguistic mastery to complete the grid.', category: 'Ultimate Bible Crossword', difficulty: 'Master', timerSeconds: 110, preferredTags: ['scholar', 'uncommon', 'vocabulary'] },
  { level: 49, stage: 10, stageTitle: 'Ultimate Bible Crossword', levelTitle: 'The Ultimate Grid', questionText: 'Complete a densely interlocking 10-word puzzle of supreme scriptural depth.', category: 'Ultimate Bible Crossword', difficulty: 'Master', timerSeconds: 100, preferredTags: ['ultimate', 'uncommon'] },
  { level: 50, stage: 10, stageTitle: 'Ultimate Bible Crossword', levelTitle: 'Bible Crossword Master', questionText: 'Grand Finale: Achieve biblical crossword mastery in this ultimate fast-paced test.', category: 'Ultimate Bible Crossword', difficulty: 'Master', timerSeconds: 90, preferredTags: ['master', 'uncommon'] },
];

const usedPuzzleKeys = new Set<string>();

// Helper to solve unique 10-word layout
function solveUniqueLayout(pool: RawClue[], seedBase: number): CrosswordEntry[] | null {
  for (let attempt = 0; attempt < 800; attempt++) {
    const seed = seedBase + attempt * 97;
    // Permute pool with pseudo-random seed
    const shuffled = [...pool].sort((a, b) => {
      const hA = (seed * 37 + a.answer.charCodeAt(0) * 13 + a.answer.length * 31) % 10007;
      const hB = (seed * 43 + b.answer.charCodeAt(0) * 17 + b.answer.length * 29) % 10007;
      return hA - hB;
    });

    const chosen: RawClue[] = [];
    const usedAnswers = new Set<string>();

    for (const item of shuffled) {
      if (usedAnswers.has(item.answer)) continue;
      // Overlap check with at least one existing word
      if (chosen.length > 0) {
        const hasOverlap = chosen.some(c => {
          for (let i = 0; i < c.answer.length; i++) {
            if (item.answer.includes(c.answer[i])) return true;
          }
          return false;
        });
        if (!hasOverlap) continue;
      }
      chosen.push(item);
      usedAnswers.add(item.answer);
      if (chosen.length === 10) break;
    }

    if (chosen.length === 10) {
      const key = [...chosen.map(c => c.answer)].sort().join('|');
      if (usedPuzzleKeys.has(key)) {
        continue;
      }

      const candidateEntries: CrosswordEntry[] = chosen.map((c, idx) => ({
        number: idx + 1,
        answer: c.answer,
        clue: c.clue,
        reference: c.reference,
        direction: idx % 2 === 0 ? 'across' : 'down'
      }));

      const layout = buildBibleCrosswordLayout(candidateEntries);
      if (layout.placed.length === 10) {
        usedPuzzleKeys.add(key);
        // Return entries with their actual placed direction
        return candidateEntries.map((e) => {
          const placed = layout.placed.find(p => p.answer === e.answer);
          return {
            ...e,
            direction: placed ? placed.direction : e.direction
          };
        });
      }
    }
  }
  return null;
}

console.log('Generating 250 completely UNIQUE Crossword Challenges across 50 Levels...');

const allChallenges: any[] = [];
let challengeCount = 0;

for (const levelMeta of LEVEL_DEFS) {
  const preferredPool = MASTER_CLUES.filter(c =>
    c.tags && c.tags.some(t => levelMeta.preferredTags.includes(t))
  );

  // Combine preferred pool with full master pool for rich variety
  const candidatePool = [...preferredPool];
  const poolAnswers = new Set(candidatePool.map(c => c.answer));
  for (const c of MASTER_CLUES) {
    if (!poolAnswers.has(c.answer)) {
      candidatePool.push(c);
      poolAnswers.add(c.answer);
    }
    if (candidatePool.length >= 120) break;
  }

  for (let cIdx = 1; cIdx <= 5; cIdx++) {
    const seed = levelMeta.level * 1000 + cIdx * 73;
    let solved = solveUniqueLayout(candidatePool, seed);
    if (!solved) {
      // Fallback to broader master clue pool
      solved = solveUniqueLayout(MASTER_CLUES, seed + 5000);
    }

    if (!solved || solved.length !== 10) {
      throw new Error(`Failed to generate unique 10-word layout for Level ${levelMeta.level} Challenge ${cIdx}`);
    }

    // Double check layout passes buildBibleCrosswordLayout
    const verification = buildBibleCrosswordLayout(solved);
    if (verification.placed.length !== 10) {
      throw new Error(`Verification failed for Level ${levelMeta.level} Challenge ${cIdx}: placed ${verification.placed.length}/10`);
    }

    const id = `bible-crossword-l${levelMeta.level}-c${cIdx}`;
    const question_text = levelMeta.questionText;
    const options = solved.map(e => e.answer);
    const correct_answer = solved.map(e => e.answer).join('|');
    const explanation = solved.map(e => `${e.number}. ${e.answer}: ${e.clue} (${e.reference})`).join(' ');
    const reference = [...new Set(solved.map(e => e.reference))].join('; ');

    allChallenges.push({
      id,
      game_slug: 'bible-crossword',
      level: levelMeta.level,
      challenge_index: cIdx,
      question_text,
      options,
      correct_answer,
      explanation,
      reference,
      metadata: {
        entries: solved,
        crosswordVersion: 5,
        category: levelMeta.category,
        stage: levelMeta.stage,
        stage_title: levelMeta.stageTitle,
        level_theme: levelMeta.levelTitle,
        difficulty: levelMeta.difficulty,
        timerSeconds: levelMeta.timerSeconds,
        clueCount: 10,
        curated: true
      }
    });
    challengeCount++;
  }
}

console.log(`Generated and verified ${challengeCount} completely distinct puzzles (usedKeys: ${usedPuzzleKeys.size})!`);

const fileContent = `// Bible Crossword — 50 Levels · 250 Questions (10 Intersecting Clues Each)
// Generated and verified with buildBibleCrosswordLayout: 100% 10/10 placed words and 100% distinct puzzle sets.
import type { ChallengeItem } from './bibleContentBank';

export const BIBLE_CROSSWORD_QUESTIONS: ChallengeItem[] = ${JSON.stringify(allChallenges, null, 2)};
`;

writeFileSync('src/data/bibleCrosswordQuestions.ts', fileContent, 'utf-8');
console.log('Successfully written to src/data/bibleCrosswordQuestions.ts');
