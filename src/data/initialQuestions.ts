export interface ChallengeQuestion {
  id: string;
  level: number;
  difficulty: 'Easy' | 'Medium' | 'Hard' | 'Expert';
  question: string;
  options: string[];
  correctAnswer: string;
  reference: string;
  explanation: string;
}

export const SCRIPTURE_CHALLENGE_QUESTIONS: ChallengeQuestion[] = [
  {
    id: 'sc-001',
    level: 1,
    difficulty: 'Easy',
    question: 'In the beginning, God created the heavens and the earth. What was created on the first day?',
    options: ['Sun and Moon', 'Light', 'Animals and Creatures', 'Dry Land'],
    correctAnswer: 'Light',
    reference: 'Genesis 1:3-5',
    explanation: 'God spoke saying "Let there be light," and there was light. He separated the light from the darkness, calling the light Day.'
  },
  {
    id: 'sc-002',
    level: 2,
    difficulty: 'Easy',
    question: 'Who built an ark to save his family and animals from the great flood?',
    options: ['Abraham', 'Moses', 'Noah', 'David'],
    correctAnswer: 'Noah',
    reference: 'Genesis 6:14',
    explanation: 'God instructed Noah to build an ark of gopher wood, three hundred cubits long, to preserve life through the deluge.'
  },
  {
    id: 'sc-003',
    level: 3,
    difficulty: 'Medium',
    question: 'Which prophet was swallowed by a great fish after fleeing from the Lord’s command to go to Nineveh?',
    options: ['Elijah', 'Jonah', 'Isaiah', 'Jeremiah'],
    correctAnswer: 'Jonah',
    reference: 'Jonah 1:17',
    explanation: 'The Lord provided a huge fish to swallow Jonah, and Jonah was inside the fish three days and three nights.'
  },
  {
    id: 'sc-004',
    level: 4,
    difficulty: 'Medium',
    question: 'What is the shortest chapter in the Bible?',
    options: ['Psalm 117', 'Psalm 23', 'John 11', 'Malachi 4'],
    correctAnswer: 'Psalm 117',
    reference: 'Psalm 117:1-2',
    explanation: 'Psalm 117 has only two verses, making it both the shortest chapter and the middle chapter of the Bible.'
  },
  {
    id: 'sc-005',
    level: 5,
    difficulty: 'Hard',
    question: 'On the road to Damascus, Saul of Tarsus encountered a blinding light and the voice of Jesus. Who laid hands on him to restore his sight in Damascus?',
    options: ['Barnabas', 'Ananias', 'Stephen', 'Peter'],
    correctAnswer: 'Ananias',
    reference: 'Acts 9:17',
    explanation: 'Ananias went to the house, placed his hands on Saul and said, "Brother Saul, the Lord Jesus... has sent me so that you may see again and be filled with the Holy Spirit."'
  },
  {
    id: 'sc-006',
    level: 6,
    difficulty: 'Hard',
    question: 'Which king of Judah requested fifteen more years of life and was healed after a poultice of figs was applied to his boil?',
    options: ['Hezekiah', 'Josiah', 'Uzziah', 'Jehoshaphat'],
    correctAnswer: 'Hezekiah',
    reference: '2 Kings 20:5-7',
    explanation: 'Isaiah told Hezekiah to apply a cake of figs to the boil, and he recovered, receiving fifteen additional years.'
  },
  {
    id: 'sc-007',
    level: 7,
    difficulty: 'Expert',
    question: 'In the Book of Revelation, which of the seven churches of Asia was rebuked for being neither cold nor hot, but lukewarm?',
    options: ['Ephesus', 'Smyrna', 'Laodicea', 'Philadelphia'],
    correctAnswer: 'Laodicea',
    reference: 'Revelation 3:15-16',
    explanation: 'Because you are lukewarm—neither hot nor cold—I am about to spit you out of my mouth, says the Spirit to the church in Laodicea.'
  }
];

export interface ScrambleItem {
  id: string;
  level: number;
  word: string;
  hint: string;
  reference: string;
}

export const SCRABBLE_ITEMS: ScrambleItem[] = [
  { id: 'scr-1', level: 1, word: 'GENESIS', hint: 'First book of the Bible', reference: 'Genesis 1:1' },
  { id: 'scr-2', level: 2, word: 'EXODUS', hint: 'The journey out of Egypt', reference: 'Exodus 12:51' },
  { id: 'scr-3', level: 3, word: 'MESSIAH', hint: 'The anointed savior', reference: 'John 1:41' },
  { id: 'scr-4', level: 4, word: 'GOLGATHA', hint: 'The place of the skull', reference: 'Matthew 27:33' },
  { id: 'scr-5', level: 5, word: 'TABERNACLE', hint: 'The movable sanctuary in the wilderness', reference: 'Exodus 25:9' }
];

export interface VerseBuilderItem {
  id: string;
  level: number;
  reference: string;
  words: string[];
}

export const VERSE_BUILDER_ITEMS: VerseBuilderItem[] = [
  {
    id: 'vb-1',
    level: 1,
    reference: 'John 3:16',
    words: ['For', 'God', 'so', 'loved', 'the', 'world', 'that', 'he', 'gave', 'his', 'one', 'and', 'only', 'Son']
  },
  {
    id: 'vb-2',
    level: 2,
    reference: 'Psalm 23:1',
    words: ['The', 'Lord', 'is', 'my', 'shepherd;', 'I', 'shall', 'not', 'want.']
  },
  {
    id: 'vb-3',
    level: 3,
    reference: 'Proverbs 3:5',
    words: ['Trust', 'in', 'the', 'Lord', 'with', 'all', 'your', 'heart', 'and', 'lean', 'not', 'on', 'your', 'own', 'understanding']
  }
];

export interface TimelineEvent {
  id: string;
  year: number;
  title: string;
  description: string;
  reference: string;
}

export const TIMELINE_EVENTS: TimelineEvent[] = [
  { id: 'te-1', year: 4000, title: 'Creation of Heavens & Earth', description: 'God speaks the cosmos and humanity into existence.', reference: 'Genesis 1' },
  { id: 'te-2', year: 2348, title: 'The Great Flood & Ark', description: 'Noah and his family ride out the deluge.', reference: 'Genesis 7' },
  { id: 'te-3', year: 1446, title: 'The Exodus from Egypt', description: 'Moses leads Israel across the Red Sea.', reference: 'Exodus 14' },
  { id: 'te-4', year: 1010, title: 'David Anointed King over Israel', description: 'The shepherd boy of Bethlehem takes the throne in Jerusalem.', reference: '2 Samuel 5' },
  { id: 'te-5', year: 586, title: 'Fall of Jerusalem & Babylonian Exile', description: 'Nebuchadnezzar destroys the temple and takes captives to Babylon.', reference: '2 Kings 25' },
  { id: 'te-6', year: 4, title: 'Birth of Jesus in Bethlehem', description: 'The Messiah is born in the City of David.', reference: 'Luke 2' },
  { id: 'te-7', year: 30, title: 'Crucifixion & Resurrection', description: 'Jesus atones for humanity and rises on the third day.', reference: 'Luke 24' }
];
