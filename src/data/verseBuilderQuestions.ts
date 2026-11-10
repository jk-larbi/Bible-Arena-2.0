// Verse Builder â€” 50 Levels Â· 250 Challenges Â· 10 Stages
// Curated Scripture reconstruction, word tile assembly, continuation, and forensic trap spotting.
import type { ChallengeItem } from './bibleContentBank';

export const VERSE_BUILDER_QUESTIONS: ChallengeItem[] = [
  {
    "id": "verse-builder-l1-c1",
    "game_slug": "verse-builder",
    "level": 1,
    "challenge_index": 1,
    "question_text": "Complete the missing word in the opening verse of Scripture: \"In the beginning God created the heaven and the ______.\"",
    "options": [
      "earth",
      "sea",
      "world",
      "stars"
    ],
    "correct_answer": "earth",
    "explanation": "Genesis 1:1 records the foundational origin of the universe: \"In the beginning God created the heaven and the earth.\"",
    "reference": "Genesis 1:1",
    "metadata": {
      "stage": 1,
      "stage_title": "Verse Building Foundations",
      "level_title": "Creation & First Words",
      "mechanic": "missing_words",
      "verse_text": "In the beginning God created the heaven and the earth.",
      "translation": "KJV",
      "testament": "Old Testament",
      "difficulty": "Easy",
      "timerSeconds": 30,
      "points": 50,
      "is_typed": false,
      "acceptedAlternatives": [
        "earth",
        "the earth"
      ],
      "hint1": "The terrestrial planet given to mankind.",
      "hint2": "Genesis 1:1: heaven and the...",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l1-c2",
    "game_slug": "verse-builder",
    "level": 1,
    "challenge_index": 2,
    "question_text": "Arrange these word tiles to form the divine command of Genesis 1:3: \"And God said, Let there be light: and there was light.\"",
    "options": [
      "light",
      "there",
      "God",
      "was",
      "and",
      "said,",
      "there",
      "And",
      "light:",
      "be",
      "Let"
    ],
    "correct_answer": "And God said, Let there be light: and there was light.",
    "explanation": "Genesis 1:3 establishes creation through the spoken Word of God: \"And God said, Let there be light: and there was light.\"",
    "reference": "Genesis 1:3",
    "metadata": {
      "stage": 1,
      "stage_title": "Verse Building Foundations",
      "level_title": "Creation & First Words",
      "mechanic": "arrange_words",
      "verse_text": "And God said, Let there be light: and there was light.",
      "translation": "KJV",
      "testament": "Old Testament",
      "difficulty": "Easy",
      "timerSeconds": 45,
      "points": 50,
      "is_tiles": true,
      "word_tiles": [
        "light",
        "there",
        "God",
        "was",
        "and",
        "said,",
        "there",
        "And",
        "light:",
        "be",
        "Let"
      ],
      "acceptedAlternatives": [
        "And God said, Let there be light: and there was light.",
        "And God said Let there be light and there was light"
      ],
      "hint1": "Begins with the divine decree: \"And God said...\"",
      "hint2": "Ends with the manifestation: \"...and there was light.\"",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l1-c3",
    "game_slug": "verse-builder",
    "level": 1,
    "challenge_index": 3,
    "question_text": "Complete the missing word in John 1:1: \"In the beginning was the Word, and the Word was with God, and the Word was ______.\"",
    "options": [
      "God",
      "holy",
      "spirit",
      "light"
    ],
    "correct_answer": "God",
    "explanation": "John 1:1 proclaims the absolute deity and pre-existence of the Logos: \"In the beginning was the Word, and the Word was with God, and the Word was God.\"",
    "reference": "John 1:1",
    "metadata": {
      "stage": 1,
      "stage_title": "Verse Building Foundations",
      "level_title": "Creation & First Words",
      "mechanic": "missing_words",
      "verse_text": "In the beginning was the Word, and the Word was with God, and the Word was God.",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Easy",
      "timerSeconds": 30,
      "points": 50,
      "is_typed": false,
      "acceptedAlternatives": [
        "God"
      ],
      "hint1": "The title of deity itself.",
      "hint2": "The Word was not merely like God, but was God.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l1-c4",
    "game_slug": "verse-builder",
    "level": 1,
    "challenge_index": 4,
    "question_text": "Type the missing single word in Psalm 100:3: \"Know ye that the LORD he is God: it is he that hath made us, and not we ______.\"",
    "options": [],
    "correct_answer": "ourselves",
    "explanation": "Psalm 100:3 teaches humility and creation truth: \"Know ye that the LORD he is God: it is he that hath made us, and not we ourselves; we are his people, and the sheep of his pasture.\"",
    "reference": "Psalm 100:3",
    "metadata": {
      "stage": 1,
      "stage_title": "Verse Building Foundations",
      "level_title": "Creation & First Words",
      "mechanic": "build_without_options",
      "verse_text": "Know ye that the LORD he is God: it is he that hath made us, and not we ourselves.",
      "translation": "KJV",
      "testament": "Old Testament",
      "difficulty": "Moderate",
      "timerSeconds": 45,
      "points": 75,
      "is_typed": true,
      "acceptedAlternatives": [
        "ourselves",
        "our selves"
      ],
      "hint1": "Refers to humanity not being self-created.",
      "hint2": "Plural reflexive pronoun of our.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l1-c5",
    "game_slug": "verse-builder",
    "level": 1,
    "challenge_index": 5,
    "question_text": "Reconstruct the four-word proclamation in 1 John 4:8: \"He that loveth not knoweth not God; for ______ ______ ______ ______.\"",
    "options": [
      "God is love",
      "love is of God",
      "God is light",
      "grace is of God"
    ],
    "correct_answer": "God is love",
    "explanation": "1 John 4:8 reveals God's fundamental essence: \"He that loveth not knoweth not God; for God is love.\"",
    "reference": "1 John 4:8",
    "metadata": {
      "stage": 1,
      "stage_title": "Verse Building Foundations",
      "level_title": "Creation & First Words",
      "mechanic": "missing_phrase",
      "verse_text": "He that loveth not knoweth not God; for God is love.",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Moderate",
      "timerSeconds": 30,
      "points": 100,
      "is_typed": false,
      "acceptedAlternatives": [
        "God is love",
        "god is love"
      ],
      "hint1": "A three-word phrase identifying God's nature with agape.",
      "hint2": "God is...",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l2-c1",
    "game_slug": "verse-builder",
    "level": 2,
    "challenge_index": 1,
    "question_text": "Complete the missing word in David's beloved Psalm: \"The LORD is my shepherd; I shall not ______.\"",
    "options": [
      "want",
      "fear",
      "stumble",
      "fall"
    ],
    "correct_answer": "want",
    "explanation": "Psalm 23:1 opens with David's total confidence in Jehovah Rohi: \"The LORD is my shepherd; I shall not want.\"",
    "reference": "Psalm 23:1",
    "metadata": {
      "stage": 1,
      "stage_title": "Verse Building Foundations",
      "level_title": "The Shepherd & Salvation",
      "mechanic": "missing_words",
      "verse_text": "The LORD is my shepherd; I shall not want.",
      "translation": "KJV",
      "testament": "Old Testament",
      "difficulty": "Easy",
      "timerSeconds": 25,
      "points": 50,
      "is_typed": false,
      "acceptedAlternatives": [
        "want",
        "lack"
      ],
      "hint1": "Means to lack or suffer deficit.",
      "hint2": "I shall not w...",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l2-c2",
    "game_slug": "verse-builder",
    "level": 2,
    "challenge_index": 2,
    "question_text": "Complete the golden verse of John 3:16: \"For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have ______ life.\"",
    "options": [
      "everlasting",
      "abundant",
      "heavenly",
      "righteous"
    ],
    "correct_answer": "everlasting",
    "explanation": "John 3:16 promises that believers receive eternal life through faith in the Son: \"...should not perish, but have everlasting life.\"",
    "reference": "John 3:16",
    "metadata": {
      "stage": 1,
      "stage_title": "Verse Building Foundations",
      "level_title": "The Shepherd & Salvation",
      "mechanic": "missing_words",
      "verse_text": "For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Easy",
      "timerSeconds": 30,
      "points": 50,
      "is_typed": false,
      "acceptedAlternatives": [
        "everlasting",
        "eternal"
      ],
      "hint1": "KJV specifies this word starting with \"ever-\".",
      "hint2": "Everlasting.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l2-c3",
    "game_slug": "verse-builder",
    "level": 2,
    "challenge_index": 3,
    "question_text": "Arrange the word tiles to form the contrast of Romans 6:23: \"For the wages of sin is death; but the gift of God is eternal life through Jesus Christ our Lord.\"",
    "options": [
      "God",
      "of",
      "eternal",
      "sin",
      "life",
      "is",
      "the",
      "gift",
      "through",
      "Christ",
      "death;",
      "is",
      "wages",
      "Lord.",
      "For",
      "our",
      "but",
      "Jesus"
    ],
    "correct_answer": "For the wages of sin is death; but the gift of God is eternal life through Jesus Christ our Lord.",
    "explanation": "Romans 6:23 contrasts what man earns (wages of sin) with what God gives (free gift of eternal life).",
    "reference": "Romans 6:23",
    "metadata": {
      "stage": 1,
      "stage_title": "Verse Building Foundations",
      "level_title": "The Shepherd & Salvation",
      "mechanic": "arrange_words",
      "verse_text": "For the wages of sin is death; but the gift of God is eternal life through Jesus Christ our Lord.",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Moderate",
      "timerSeconds": 60,
      "points": 100,
      "is_tiles": true,
      "word_tiles": [
        "God",
        "of",
        "eternal",
        "sin",
        "life",
        "is",
        "the",
        "gift",
        "through",
        "Christ",
        "death;",
        "is",
        "wages",
        "Lord.",
        "For",
        "our",
        "but",
        "Jesus"
      ],
      "acceptedAlternatives": [
        "For the wages of sin is death; but the gift of God is eternal life through Jesus Christ our Lord.",
        "For the wages of sin is death but the gift of God is eternal life through Jesus Christ our Lord"
      ],
      "hint1": "Starts with \"For the wages...\" and transitions with \"but the gift...\"",
      "hint2": "Ends with \"...through Jesus Christ our Lord.\"",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l2-c4",
    "game_slug": "verse-builder",
    "level": 2,
    "challenge_index": 4,
    "question_text": "Type the missing single word from Ephesians 2:8: \"For by ______ are ye saved through faith; and that not of yourselves: it is the gift of God.\"",
    "options": [],
    "correct_answer": "grace",
    "explanation": "Ephesians 2:8 grounds salvation wholly in God's unmerited favor received through faith: \"For by grace are ye saved through faith...\"",
    "reference": "Ephesians 2:8",
    "metadata": {
      "stage": 1,
      "stage_title": "Verse Building Foundations",
      "level_title": "The Shepherd & Salvation",
      "mechanic": "build_without_options",
      "verse_text": "For by grace are ye saved through faith; and that not of yourselves: it is the gift of God.",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Moderate",
      "timerSeconds": 30,
      "points": 100,
      "is_typed": true,
      "acceptedAlternatives": [
        "grace"
      ],
      "hint1": "Unmerited divine favor.",
      "hint2": "5-letter word beginning with g.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l2-c5",
    "game_slug": "verse-builder",
    "level": 2,
    "challenge_index": 5,
    "question_text": "Complete Jesus' gracious invitation in Matthew 11:28: \"Come unto me, all ye that labour and are heavy laden, and ______ ______ ______ ______.\"",
    "options": [
      "I will give you rest",
      "ye shall find comfort",
      "I will heal your sickness",
      "ye shall receive joy"
    ],
    "correct_answer": "I will give you rest",
    "explanation": "Matthew 11:28 records Christ's call to the weary: \"Come unto me, all ye that labour and are heavy laden, and I will give you rest.\"",
    "reference": "Matthew 11:28",
    "metadata": {
      "stage": 1,
      "stage_title": "Verse Building Foundations",
      "level_title": "The Shepherd & Salvation",
      "mechanic": "missing_phrase",
      "verse_text": "Come unto me, all ye that labour and are heavy laden, and I will give you rest.",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Moderate",
      "timerSeconds": 30,
      "points": 100,
      "is_typed": false,
      "acceptedAlternatives": [
        "I will give you rest",
        "i will give you rest"
      ],
      "hint1": "Jesus promises to provide Sabbath ease to souls.",
      "hint2": "I will give you r...",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l3-c1",
    "game_slug": "verse-builder",
    "level": 3,
    "challenge_index": 1,
    "question_text": "Complete the verse from Proverbs 3:5: \"Trust in the LORD with all thine heart; and lean not unto thine own ______.\"",
    "options": [
      "understanding",
      "wisdom",
      "strength",
      "imagination"
    ],
    "correct_answer": "understanding",
    "explanation": "Proverbs 3:5 instructs the believer not to depend upon fallen human rationalization: \"...and lean not unto thine own understanding.\"",
    "reference": "Proverbs 3:5",
    "metadata": {
      "stage": 1,
      "stage_title": "Verse Building Foundations",
      "level_title": "Wisdom & Trust",
      "mechanic": "missing_words",
      "verse_text": "Trust in the LORD with all thine heart; and lean not unto thine own understanding.",
      "translation": "KJV",
      "testament": "Old Testament",
      "difficulty": "Easy",
      "timerSeconds": 25,
      "points": 50,
      "is_typed": false,
      "acceptedAlternatives": [
        "understanding"
      ],
      "hint1": "Human discernment or comprehension.",
      "hint2": "Thine own under...",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l3-c2",
    "game_slug": "verse-builder",
    "level": 3,
    "challenge_index": 2,
    "question_text": "What is the beginning of wisdom according to Proverbs 9:10? \"The ______ of the LORD is the beginning of wisdom.\"",
    "options": [
      "fear",
      "love",
      "praise",
      "law"
    ],
    "correct_answer": "fear",
    "explanation": "Proverbs 9:10 teaches: \"The fear of the LORD is the beginning of wisdom: and the knowledge of the holy is understanding.\"",
    "reference": "Proverbs 9:10",
    "metadata": {
      "stage": 1,
      "stage_title": "Verse Building Foundations",
      "level_title": "Wisdom & Trust",
      "mechanic": "missing_words",
      "verse_text": "The fear of the LORD is the beginning of wisdom: and the knowledge of the holy is understanding.",
      "translation": "KJV",
      "testament": "Old Testament",
      "difficulty": "Easy",
      "timerSeconds": 25,
      "points": 50,
      "is_typed": false,
      "acceptedAlternatives": [
        "fear",
        "the fear"
      ],
      "hint1": "Reverential awe of Almighty God.",
      "hint2": "Four-letter word beginning with f.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l3-c3",
    "game_slug": "verse-builder",
    "level": 3,
    "challenge_index": 3,
    "question_text": "Arrange these word tiles to form Psalm 119:105: \"Thy word is a lamp unto my feet, and a light unto my path.\"",
    "options": [
      "light",
      "word",
      "feet,",
      "a",
      "is",
      "path.",
      "Thy",
      "unto",
      "and",
      "lamp",
      "my",
      "a",
      "my",
      "unto"
    ],
    "correct_answer": "Thy word is a lamp unto my feet, and a light unto my path.",
    "explanation": "Psalm 119:105 celebrates the illuminating guidance of God's Scriptures for every daily step: \"Thy word is a lamp unto my feet, and a light unto my path.\"",
    "reference": "Psalm 119:105",
    "metadata": {
      "stage": 1,
      "stage_title": "Verse Building Foundations",
      "level_title": "Wisdom & Trust",
      "mechanic": "arrange_words",
      "verse_text": "Thy word is a lamp unto my feet, and a light unto my path.",
      "translation": "KJV",
      "testament": "Old Testament",
      "difficulty": "Moderate",
      "timerSeconds": 50,
      "points": 100,
      "is_tiles": true,
      "word_tiles": [
        "light",
        "word",
        "feet,",
        "a",
        "is",
        "path.",
        "Thy",
        "unto",
        "and",
        "lamp",
        "my",
        "a",
        "my",
        "unto"
      ],
      "acceptedAlternatives": [
        "Thy word is a lamp unto my feet, and a light unto my path.",
        "Thy word is a lamp unto my feet and a light unto my path"
      ],
      "hint1": "First part: \"Thy word is a lamp...\"",
      "hint2": "Second part: \"...and a light unto my path.\"",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l3-c4",
    "game_slug": "verse-builder",
    "level": 3,
    "challenge_index": 4,
    "question_text": "Type the missing word preceding destruction in Proverbs 16:18: \"______ goeth before destruction, and an haughty spirit before a fall.\"",
    "options": [],
    "correct_answer": "Pride",
    "explanation": "Proverbs 16:18 gives the solemn warning: \"Pride goeth before destruction, and an haughty spirit before a fall.\"",
    "reference": "Proverbs 16:18",
    "metadata": {
      "stage": 1,
      "stage_title": "Verse Building Foundations",
      "level_title": "Wisdom & Trust",
      "mechanic": "build_without_options",
      "verse_text": "Pride goeth before destruction, and an haughty spirit before a fall.",
      "translation": "KJV",
      "testament": "Old Testament",
      "difficulty": "Moderate",
      "timerSeconds": 30,
      "points": 100,
      "is_typed": true,
      "acceptedAlternatives": [
        "Pride",
        "pride"
      ],
      "hint1": "Arrogance and self-exaltation.",
      "hint2": "Five letters, starts with P.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l3-c5",
    "game_slug": "verse-builder",
    "level": 3,
    "challenge_index": 5,
    "question_text": "Complete James 1:5: \"If any of you lack wisdom, let him ask of God, that giveth to all men liberally, and ______ ______; and it shall be given him.\"",
    "options": [
      "upbraideth not",
      "scoldeth not",
      "rebuketh none",
      "grudgeth never"
    ],
    "correct_answer": "upbraideth not",
    "explanation": "James 1:5 encourages believers to ask God for wisdom because He gives generously without reproach: \"...and upbraideth not; and it shall be given him.\"",
    "reference": "James 1:5",
    "metadata": {
      "stage": 1,
      "stage_title": "Verse Building Foundations",
      "level_title": "Wisdom & Trust",
      "mechanic": "missing_phrase",
      "verse_text": "If any of you lack wisdom, let him ask of God, that giveth to all men liberally, and upbraideth not; and it shall be given him.",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Difficult",
      "timerSeconds": 35,
      "points": 150,
      "is_typed": false,
      "acceptedAlternatives": [
        "upbraideth not",
        "upbraideth not;"
      ],
      "hint1": "Archaic KJV verb meaning does not reproach or scold.",
      "hint2": "upbraideth...",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l4-c1",
    "game_slug": "verse-builder",
    "level": 4,
    "challenge_index": 1,
    "question_text": "Complete the definition of faith in Hebrews 11:1: \"Now faith is the ______ of things hoped for, the evidence of things not seen.\"",
    "options": [
      "substance",
      "assurance",
      "promise",
      "foundation"
    ],
    "correct_answer": "substance",
    "explanation": "Hebrews 11:1 establishes faith as substantive reality: \"Now faith is the substance of things hoped for, the evidence of things not seen.\"",
    "reference": "Hebrews 11:1",
    "metadata": {
      "stage": 1,
      "stage_title": "Verse Building Foundations",
      "level_title": "Faith & Strength",
      "mechanic": "missing_words",
      "verse_text": "Now faith is the substance of things hoped for, the evidence of things not seen.",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Easy",
      "timerSeconds": 25,
      "points": 50,
      "is_typed": false,
      "acceptedAlternatives": [
        "substance"
      ],
      "hint1": "Greek hypostasis, rendered in KJV as tangible reality.",
      "hint2": "Starts with \"sub-\".",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l4-c2",
    "game_slug": "verse-builder",
    "level": 4,
    "challenge_index": 2,
    "question_text": "Complete Philippians 4:13: \"I can do all things through Christ which ______ me.\"",
    "options": [
      "strengtheneth",
      "empowereth",
      "upholdeth",
      "leadeth"
    ],
    "correct_answer": "strengtheneth",
    "explanation": "Philippians 4:13 expresses Paul's Christ-centered contentment: \"I can do all things through Christ which strengtheneth me.\"",
    "reference": "Philippians 4:13",
    "metadata": {
      "stage": 1,
      "stage_title": "Verse Building Foundations",
      "level_title": "Faith & Strength",
      "mechanic": "missing_words",
      "verse_text": "I can do all things through Christ which strengtheneth me.",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Easy",
      "timerSeconds": 25,
      "points": 50,
      "is_typed": false,
      "acceptedAlternatives": [
        "strengtheneth",
        "strengthens"
      ],
      "hint1": "The KJV form ending in -eth.",
      "hint2": "Strengtheneth.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l4-c3",
    "game_slug": "verse-builder",
    "level": 4,
    "challenge_index": 3,
    "question_text": "Arrange the word tiles for Isaiah 40:31: \"they shall mount up with wings as eagles\"",
    "options": [
      "as",
      "up",
      "mount",
      "wings",
      "shall",
      "with",
      "eagles",
      "they"
    ],
    "correct_answer": "they shall mount up with wings as eagles",
    "explanation": "Isaiah 40:31 promises renewal to those who wait upon the Lord: \"...they shall mount up with wings as eagles; they shall run, and not be weary...\"",
    "reference": "Isaiah 40:31",
    "metadata": {
      "stage": 1,
      "stage_title": "Verse Building Foundations",
      "level_title": "Faith & Strength",
      "mechanic": "arrange_words",
      "verse_text": "they shall mount up with wings as eagles",
      "translation": "KJV",
      "testament": "Old Testament",
      "difficulty": "Moderate",
      "timerSeconds": 40,
      "points": 100,
      "is_tiles": true,
      "word_tiles": [
        "as",
        "up",
        "mount",
        "wings",
        "shall",
        "with",
        "eagles",
        "they"
      ],
      "acceptedAlternatives": [
        "they shall mount up with wings as eagles"
      ],
      "hint1": "First words: \"they shall mount...\"",
      "hint2": "Ends with comparison: \"...as eagles\"",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l4-c4",
    "game_slug": "verse-builder",
    "level": 4,
    "challenge_index": 4,
    "question_text": "Type the missing word from Romans 8:28: \"And we know that all things work together for ______ to them that love God, to them who are the called according to his purpose.\"",
    "options": [],
    "correct_answer": "good",
    "explanation": "Romans 8:28 assures believers of God's sovereign providence: \"...all things work together for good to them that love God...\"",
    "reference": "Romans 8:28",
    "metadata": {
      "stage": 1,
      "stage_title": "Verse Building Foundations",
      "level_title": "Faith & Strength",
      "mechanic": "build_without_options",
      "verse_text": "And we know that all things work together for good to them that love God, to them who are the called according to his purpose.",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Moderate",
      "timerSeconds": 30,
      "points": 100,
      "is_typed": true,
      "acceptedAlternatives": [
        "good"
      ],
      "hint1": "Four letters, opposite of evil.",
      "hint2": "g-o-o-d.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l4-c5",
    "game_slug": "verse-builder",
    "level": 4,
    "challenge_index": 5,
    "question_text": "What three virtues replace fear in 2 Timothy 1:7? \"For God hath not given us the spirit of fear; but of power, and of love, and of ______ ______.\"",
    "options": [
      "a sound mind",
      "a clean heart",
      "holy boldness",
      "abundant peace"
    ],
    "correct_answer": "a sound mind",
    "explanation": "2 Timothy 1:7 describes the threefold spirit given by God: \"...but of power, and of love, and of a sound mind.\"",
    "reference": "2 Timothy 1:7",
    "metadata": {
      "stage": 1,
      "stage_title": "Verse Building Foundations",
      "level_title": "Faith & Strength",
      "mechanic": "missing_phrase",
      "verse_text": "For God hath not given us the spirit of fear; but of power, and of love, and of a sound mind.",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Moderate",
      "timerSeconds": 30,
      "points": 100,
      "is_typed": false,
      "acceptedAlternatives": [
        "a sound mind"
      ],
      "hint1": "Discipline, self-control, and healthy mental equilibrium.",
      "hint2": "a sound m...",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l5-c1",
    "game_slug": "verse-builder",
    "level": 5,
    "challenge_index": 1,
    "question_text": "Complete the final verse of the Psalter (Psalm 150:6): \"Let every thing that hath ______ praise the LORD. Praise ye the LORD.\"",
    "options": [
      "breath",
      "life",
      "voice",
      "spirit"
    ],
    "correct_answer": "breath",
    "explanation": "Psalm 150:6 climaxes the entire book of Psalms with universal praise: \"Let every thing that hath breath praise the LORD. Praise ye the LORD.\"",
    "reference": "Psalm 150:6",
    "metadata": {
      "stage": 1,
      "stage_title": "Verse Building Foundations",
      "level_title": "Praise & Prayer",
      "mechanic": "missing_words",
      "verse_text": "Let every thing that hath breath praise the LORD. Praise ye the LORD.",
      "translation": "KJV",
      "testament": "Old Testament",
      "difficulty": "Easy",
      "timerSeconds": 25,
      "points": 50,
      "is_typed": false,
      "acceptedAlternatives": [
        "breath"
      ],
      "hint1": "The respiration of living creatures.",
      "hint2": "b-r-e-a-t-h.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l5-c2",
    "game_slug": "verse-builder",
    "level": 5,
    "challenge_index": 2,
    "question_text": "What three words form the command in 1 Thessalonians 5:17? \"Pray without ______.\"",
    "options": [
      "ceasing",
      "fainting",
      "doubting",
      "fear"
    ],
    "correct_answer": "ceasing",
    "explanation": "1 Thessalonians 5:17 gives the famous concise mandate: \"Pray without ceasing.\"",
    "reference": "1 Thessalonians 5:17",
    "metadata": {
      "stage": 1,
      "stage_title": "Verse Building Foundations",
      "level_title": "Praise & Prayer",
      "mechanic": "missing_words",
      "verse_text": "Pray without ceasing.",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Easy",
      "timerSeconds": 20,
      "points": 50,
      "is_typed": false,
      "acceptedAlternatives": [
        "ceasing"
      ],
      "hint1": "Continuously or unceasingly.",
      "hint2": "c-e-a-s-i-n-g.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l5-c3",
    "game_slug": "verse-builder",
    "level": 5,
    "challenge_index": 3,
    "question_text": "Arrange these word tiles to form the opening invocation of the Lord's Prayer in Matthew 6:9: \"Our Father which art in heaven, Hallowed be thy name.\"",
    "options": [
      "thy",
      "be",
      "art",
      "Father",
      "in",
      "heaven,",
      "Hallowed",
      "which",
      "name.",
      "Our"
    ],
    "correct_answer": "Our Father which art in heaven, Hallowed be thy name.",
    "explanation": "Matthew 6:9 teaches believers to address the Father with reverent worship: \"After this manner therefore pray ye: Our Father which art in heaven, Hallowed be thy name.\"",
    "reference": "Matthew 6:9",
    "metadata": {
      "stage": 1,
      "stage_title": "Verse Building Foundations",
      "level_title": "Praise & Prayer",
      "mechanic": "arrange_words",
      "verse_text": "Our Father which art in heaven, Hallowed be thy name.",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Moderate",
      "timerSeconds": 45,
      "points": 100,
      "is_tiles": true,
      "word_tiles": [
        "thy",
        "be",
        "art",
        "Father",
        "in",
        "heaven,",
        "Hallowed",
        "which",
        "name.",
        "Our"
      ],
      "acceptedAlternatives": [
        "Our Father which art in heaven, Hallowed be thy name.",
        "Our Father which art in heaven Hallowed be thy name"
      ],
      "hint1": "Starts with \"Our Father which art in heaven...\"",
      "hint2": "Ends with petition of sanctification: \"Hallowed be thy name.\"",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l5-c4",
    "game_slug": "verse-builder",
    "level": 5,
    "challenge_index": 4,
    "question_text": "Type the missing word in Psalm 46:1: \"God is our refuge and strength, a very present ______ in trouble.\"",
    "options": [],
    "correct_answer": "help",
    "explanation": "Psalm 46:1 provides bedrock comfort: \"God is our refuge and strength, a very present help in trouble.\"",
    "reference": "Psalm 46:1",
    "metadata": {
      "stage": 1,
      "stage_title": "Verse Building Foundations",
      "level_title": "Praise & Prayer",
      "mechanic": "build_without_options",
      "verse_text": "God is our refuge and strength, a very present help in trouble.",
      "translation": "KJV",
      "testament": "Old Testament",
      "difficulty": "Moderate",
      "timerSeconds": 30,
      "points": 100,
      "is_typed": true,
      "acceptedAlternatives": [
        "help",
        "succour"
      ],
      "hint1": "Assistance or aid in time of distress.",
      "hint2": "h-e-l-p.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l5-c5",
    "game_slug": "verse-builder",
    "level": 5,
    "challenge_index": 5,
    "question_text": "Complete Jeremiah 29:11: \"For I know the thoughts that I think toward you, saith the LORD, thoughts of peace, and not of evil, to give you ______ ______ ______ ______.\"",
    "options": [
      "an expected end",
      "a glorious inheritance",
      "a great kingdom",
      "peace forevermore"
    ],
    "correct_answer": "an expected end",
    "explanation": "Jeremiah 29:11 promises a future and hope in the KJV phrase: \"...thoughts of peace, and not of evil, to give you an expected end.\"",
    "reference": "Jeremiah 29:11",
    "metadata": {
      "stage": 1,
      "stage_title": "Verse Building Foundations",
      "level_title": "Praise & Prayer",
      "mechanic": "missing_phrase",
      "verse_text": "For I know the thoughts that I think toward you, saith the LORD, thoughts of peace, and not of evil, to give you an expected end.",
      "translation": "KJV",
      "testament": "Old Testament",
      "difficulty": "Difficult",
      "timerSeconds": 35,
      "points": 150,
      "is_typed": false,
      "acceptedAlternatives": [
        "an expected end",
        "a future and a hope"
      ],
      "hint1": "The classic KJV rendering for a hopeful future outcome.",
      "hint2": "an expected e...",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l6-c1",
    "game_slug": "verse-builder",
    "level": 6,
    "challenge_index": 1,
    "question_text": "Complete the prophet Micah's requirement: \"He hath shewed thee, O man, what is good; and what doth the LORD require of thee, but to do justly, and to love ______, and to walk humbly with thy God?\"",
    "options": [
      "mercy",
      "truth",
      "peace",
      "righteousness"
    ],
    "correct_answer": "mercy",
    "explanation": "Micah 6:8 outlines true godliness: to do justly, to love mercy (Hebrew hesed), and to walk humbly with God.",
    "reference": "Micah 6:8",
    "metadata": {
      "stage": 2,
      "stage_title": "The Missing Word",
      "level_title": "Single Crucial Missing Word",
      "mechanic": "missing_words",
      "verse_text": "He hath shewed thee, O man, what is good; and what doth the LORD require of thee, but to do justly, and to love mercy, and to walk humbly with thy God?",
      "translation": "KJV",
      "testament": "Old Testament",
      "difficulty": "Moderate",
      "timerSeconds": 30,
      "points": 100,
      "is_typed": false,
      "acceptedAlternatives": [
        "mercy"
      ],
      "hint1": "Compassion and steadfast covenant lovingkindness.",
      "hint2": "m-e-r-c-y.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l6-c2",
    "game_slug": "verse-builder",
    "level": 6,
    "challenge_index": 2,
    "question_text": "Complete the Lord's charge to Joshua in Joshua 1:9: \"Have not I commanded thee? Be strong and of a good courage; be not afraid, neither be thou ______: for the LORD thy God is with thee whithersoever thou goest.\"",
    "options": [
      "dismayed",
      "troubled",
      "faint",
      "cast down"
    ],
    "correct_answer": "dismayed",
    "explanation": "Joshua 1:9 commands steadfastness: \"...be not afraid, neither be thou dismayed...\"",
    "reference": "Joshua 1:9",
    "metadata": {
      "stage": 2,
      "stage_title": "The Missing Word",
      "level_title": "Single Crucial Missing Word",
      "mechanic": "missing_words",
      "verse_text": "Have not I commanded thee? Be strong and of a good courage; be not afraid, neither be thou dismayed: for the LORD thy God is with thee whithersoever thou goest.",
      "translation": "KJV",
      "testament": "Old Testament",
      "difficulty": "Moderate",
      "timerSeconds": 30,
      "points": 100,
      "is_typed": false,
      "acceptedAlternatives": [
        "dismayed"
      ],
      "hint1": "Paralyzed with discouragement or fear.",
      "hint2": "d-i-s-m-a-y-e-d.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l6-c3",
    "game_slug": "verse-builder",
    "level": 6,
    "challenge_index": 3,
    "question_text": "Complete Paul's exhortation in Romans 12:2: \"And be not conformed to this world: but be ye ______ by the renewing of your mind...\"",
    "options": [
      "transformed",
      "reformed",
      "sanctified",
      "cleansed"
    ],
    "correct_answer": "transformed",
    "explanation": "Romans 12:2 calls for radical inner metamorphosis through Scripture: \"...but be ye transformed by the renewing of your mind...\"",
    "reference": "Romans 12:2",
    "metadata": {
      "stage": 2,
      "stage_title": "The Missing Word",
      "level_title": "Single Crucial Missing Word",
      "mechanic": "missing_words",
      "verse_text": "And be not conformed to this world: but be ye transformed by the renewing of your mind, that ye may prove what is that good, and acceptable, and perfect, will of God.",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Moderate",
      "timerSeconds": 30,
      "points": 100,
      "is_typed": false,
      "acceptedAlternatives": [
        "transformed"
      ],
      "hint1": "Greek metamorphousthe.",
      "hint2": "transformed.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l6-c4",
    "game_slug": "verse-builder",
    "level": 6,
    "challenge_index": 4,
    "question_text": "Type the missing single word from Psalm 34:8: \"O ______ and see that the LORD is good: blessed is the man that trusteth in him.\"",
    "options": [],
    "correct_answer": "taste",
    "explanation": "Psalm 34:8 invites personal, experiential relationship with God: \"O taste and see that the LORD is good...\"",
    "reference": "Psalm 34:8",
    "metadata": {
      "stage": 2,
      "stage_title": "The Missing Word",
      "level_title": "Single Crucial Missing Word",
      "mechanic": "build_without_options",
      "verse_text": "O taste and see that the LORD is good: blessed is the man that trusteth in him.",
      "translation": "KJV",
      "testament": "Old Testament",
      "difficulty": "Moderate",
      "timerSeconds": 30,
      "points": 100,
      "is_typed": true,
      "acceptedAlternatives": [
        "taste",
        "Taste"
      ],
      "hint1": "Sensory experience of flavor.",
      "hint2": "t-a-s-t-e.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l6-c5",
    "game_slug": "verse-builder",
    "level": 6,
    "challenge_index": 5,
    "question_text": "Which is the fourth fruit of the Spirit listed in Galatians 5:22? \"But the fruit of the Spirit is love, joy, peace, ______, gentleness, goodness, faith...\"",
    "options": [
      "longsuffering",
      "patience",
      "temperance",
      "meekness"
    ],
    "correct_answer": "longsuffering",
    "explanation": "Galatians 5:22 in the KJV translates the Greek makrothumia as \"longsuffering\", followed by gentleness and goodness.",
    "reference": "Galatians 5:22",
    "metadata": {
      "stage": 2,
      "stage_title": "The Missing Word",
      "level_title": "Single Crucial Missing Word",
      "mechanic": "missing_words",
      "verse_text": "But the fruit of the Spirit is love, joy, peace, longsuffering, gentleness, goodness, faith,",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Difficult",
      "timerSeconds": 30,
      "points": 150,
      "is_typed": false,
      "acceptedAlternatives": [
        "longsuffering"
      ],
      "hint1": "Compound word meaning enduring patient forbearance.",
      "hint2": "long-suffering.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l7-c1",
    "game_slug": "verse-builder",
    "level": 7,
    "challenge_index": 1,
    "question_text": "Complete the two missing titles in the Great Commission (Matthew 28:19): \"baptizing them in the name of the Father, and of the ______, and of the ______ ______.\"",
    "options": [
      "Son / Holy Ghost",
      "Christ / Holy Spirit",
      "Word / Comforter",
      "Son / Heavenly Dove"
    ],
    "correct_answer": "Son / Holy Ghost",
    "explanation": "Matthew 28:19 establishes the Trinitarian baptismal formula in KJV: \"...in the name of the Father, and of the Son, and of the Holy Ghost.\"",
    "reference": "Matthew 28:19",
    "metadata": {
      "stage": 2,
      "stage_title": "The Missing Word",
      "level_title": "Two Missing Words",
      "mechanic": "missing_words",
      "verse_text": "Go ye therefore, and teach all nations, baptizing them in the name of the Father, and of the Son, and of the Holy Ghost:",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Moderate",
      "timerSeconds": 35,
      "points": 100,
      "is_typed": false,
      "acceptedAlternatives": [
        "Son / Holy Ghost",
        "Son and Holy Ghost"
      ],
      "hint1": "Second and Third Persons of the Trinity in KJV language.",
      "hint2": "The Son, and of the Holy Ghost.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l7-c2",
    "game_slug": "verse-builder",
    "level": 7,
    "challenge_index": 2,
    "question_text": "Complete the two missing virtues in 1 Corinthians 13:13: \"And now abideth ______, ______, charity, these three; but the greatest of these is charity.\"",
    "options": [
      "faith, hope",
      "peace, joy",
      "truth, grace",
      "wisdom, knowledge"
    ],
    "correct_answer": "faith, hope",
    "explanation": "1 Corinthians 13:13 singles out the great theological triad: \"And now abideth faith, hope, charity, these three; but the greatest of these is charity.\"",
    "reference": "1 Corinthians 13:13",
    "metadata": {
      "stage": 2,
      "stage_title": "The Missing Word",
      "level_title": "Two Missing Words",
      "mechanic": "missing_words",
      "verse_text": "And now abideth faith, hope, charity, these three; but the greatest of these is charity.",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Moderate",
      "timerSeconds": 30,
      "points": 100,
      "is_typed": false,
      "acceptedAlternatives": [
        "faith, hope",
        "faith hope"
      ],
      "hint1": "Belief in God and joyful expectation of His promises.",
      "hint2": "f-a-i-t-h and h-o-p-e.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l7-c3",
    "game_slug": "verse-builder",
    "level": 7,
    "challenge_index": 3,
    "question_text": "Complete David's prayer in Psalm 19:14: \"Let the words of my mouth, and the ______ of my heart, be acceptable in thy sight, O LORD, my strength, and my ______.\"",
    "options": [
      "meditation / redeemer",
      "thoughts / saviour",
      "desires / keeper",
      "intentions / rock"
    ],
    "correct_answer": "meditation / redeemer",
    "explanation": "Psalm 19:14 concludes: \"Let the words of my mouth, and the meditation of my heart, be acceptable in thy sight, O LORD, my strength, and my redeemer.\"",
    "reference": "Psalm 19:14",
    "metadata": {
      "stage": 2,
      "stage_title": "The Missing Word",
      "level_title": "Two Missing Words",
      "mechanic": "missing_words",
      "verse_text": "Let the words of my mouth, and the meditation of my heart, be acceptable in thy sight, O LORD, my strength, and my redeemer.",
      "translation": "KJV",
      "testament": "Old Testament",
      "difficulty": "Moderate",
      "timerSeconds": 35,
      "points": 100,
      "is_typed": false,
      "acceptedAlternatives": [
        "meditation / redeemer",
        "meditation and redeemer"
      ],
      "hint1": "Inner contemplation and kinsman rescuer.",
      "hint2": "meditation... redeemer.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l7-c4",
    "game_slug": "verse-builder",
    "level": 7,
    "challenge_index": 4,
    "question_text": "Type the two missing verbs in 2 Chronicles 7:14: \"If my people, which are called by my name, shall ______ themselves, and ______...\"",
    "options": [],
    "correct_answer": "humble pray",
    "explanation": "2 Chronicles 7:14 lists four actions: \"shall humble themselves, and pray, and seek my face, and turn from their wicked ways...\"",
    "reference": "2 Chronicles 7:14",
    "metadata": {
      "stage": 2,
      "stage_title": "The Missing Word",
      "level_title": "Two Missing Words",
      "mechanic": "build_without_options",
      "verse_text": "If my people, which are called by my name, shall humble themselves, and pray, and seek my face, and turn from their wicked ways; then will I hear from heaven, and will forgive their sin, and will heal their land.",
      "translation": "KJV",
      "testament": "Old Testament",
      "difficulty": "Difficult",
      "timerSeconds": 45,
      "points": 150,
      "is_typed": true,
      "acceptedAlternatives": [
        "humble pray",
        "humble and pray",
        "humble, pray"
      ],
      "hint1": "Lowliness of heart followed by petitioning God.",
      "hint2": "humble... pray.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l7-c5",
    "game_slug": "verse-builder",
    "level": 7,
    "challenge_index": 5,
    "question_text": "Complete Jesus' threefold exclusive claim in John 14:6: \"Jesus saith unto him, I am the way, the ______, and the ______: no man cometh unto the Father, but by me.\"",
    "options": [
      "truth / life",
      "light / life",
      "truth / resurrection",
      "door / shepherd"
    ],
    "correct_answer": "truth / life",
    "explanation": "John 14:6 declares Christ's absolute exclusivity: \"I am the way, the truth, and the life: no man cometh unto the Father, but by me.\"",
    "reference": "John 14:6",
    "metadata": {
      "stage": 2,
      "stage_title": "The Missing Word",
      "level_title": "Two Missing Words",
      "mechanic": "missing_words",
      "verse_text": "Jesus saith unto him, I am the way, the truth, and the life: no man cometh unto the Father, but by me.",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Moderate",
      "timerSeconds": 30,
      "points": 100,
      "is_typed": false,
      "acceptedAlternatives": [
        "truth / life",
        "truth and life"
      ],
      "hint1": "Verity and vital spiritual existence.",
      "hint2": "truth and life.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l8-c1",
    "game_slug": "verse-builder",
    "level": 8,
    "challenge_index": 1,
    "question_text": "In Romans 10:9, what specific confession is required? \"That if thou shalt confess with thy mouth the ______ ______, and shalt believe in thine heart that God hath raised him from the dead, thou shalt be saved.\"",
    "options": [
      "Lord Jesus",
      "Christ Jesus",
      "Son of God",
      "Messiah Jesus"
    ],
    "correct_answer": "Lord Jesus",
    "explanation": "Romans 10:9 specifies: \"...confess with thy mouth the Lord Jesus...\" recognizing His supreme sovereign lordship.",
    "reference": "Romans 10:9",
    "metadata": {
      "stage": 2,
      "stage_title": "The Missing Word",
      "level_title": "Overlooked Small Words & Prepositions",
      "mechanic": "missing_words",
      "verse_text": "That if thou shalt confess with thy mouth the Lord Jesus, and shalt believe in thine heart that God hath raised him from the dead, thou shalt be saved.",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Moderate",
      "timerSeconds": 30,
      "points": 100,
      "is_typed": false,
      "acceptedAlternatives": [
        "Lord Jesus"
      ],
      "hint1": "Title of sovereignty followed by His earthly name.",
      "hint2": "the Lord J...",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l8-c2",
    "game_slug": "verse-builder",
    "level": 8,
    "challenge_index": 2,
    "question_text": "Identify the exact two prepositions in Colossians 3:2: \"Set your affection ______ things above, not ______ things on the earth.\"",
    "options": [
      "on / on",
      "in / upon",
      "unto / towards",
      "for / on"
    ],
    "correct_answer": "on / on",
    "explanation": "Colossians 3:2 uses the exact preposition \"on\" in both clauses: \"Set your affection on things above, not on things on the earth.\"",
    "reference": "Colossians 3:2",
    "metadata": {
      "stage": 2,
      "stage_title": "The Missing Word",
      "level_title": "Overlooked Small Words & Prepositions",
      "mechanic": "missing_words",
      "verse_text": "Set your affection on things above, not on things on the earth.",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Difficult",
      "timerSeconds": 30,
      "points": 150,
      "is_typed": false,
      "acceptedAlternatives": [
        "on / on",
        "on and on",
        "on"
      ],
      "hint1": "A two-letter preposition repeated in both phrases.",
      "hint2": "o-n.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l8-c3",
    "game_slug": "verse-builder",
    "level": 8,
    "challenge_index": 3,
    "question_text": "Complete the direction in Hebrews 12:2: \"Looking ______ Jesus the author and finisher of our faith...\"",
    "options": [
      "unto",
      "to",
      "upon",
      "toward"
    ],
    "correct_answer": "unto",
    "explanation": "Hebrews 12:2 in the KJV uses the archaic preposition \"unto\": \"Looking unto Jesus the author and finisher of our faith...\"",
    "reference": "Hebrews 12:2",
    "metadata": {
      "stage": 2,
      "stage_title": "The Missing Word",
      "level_title": "Overlooked Small Words & Prepositions",
      "mechanic": "missing_words",
      "verse_text": "Looking unto Jesus the author and finisher of our faith; who for the joy that was set before him endured the cross, despising the shame, and is set down at the right hand of the throne of God.",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Moderate",
      "timerSeconds": 30,
      "points": 100,
      "is_typed": false,
      "acceptedAlternatives": [
        "unto"
      ],
      "hint1": "Four-letter preposition characteristic of KJV.",
      "hint2": "u-n-t-o.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l8-c4",
    "game_slug": "verse-builder",
    "level": 8,
    "challenge_index": 4,
    "question_text": "Type the missing verb in Psalm 37:4: \"______ thyself also in the LORD; and he shall give thee the desires of thine heart.\"",
    "options": [],
    "correct_answer": "Delight",
    "explanation": "Psalm 37:4 instructs believers where to find joy: \"Delight thyself also in the LORD; and he shall give thee the desires of thine heart.\"",
    "reference": "Psalm 37:4",
    "metadata": {
      "stage": 2,
      "stage_title": "The Missing Word",
      "level_title": "Overlooked Small Words & Prepositions",
      "mechanic": "build_without_options",
      "verse_text": "Delight thyself also in the LORD; and he shall give thee the desires of thine heart.",
      "translation": "KJV",
      "testament": "Old Testament",
      "difficulty": "Moderate",
      "timerSeconds": 30,
      "points": 100,
      "is_typed": true,
      "acceptedAlternatives": [
        "Delight",
        "delight"
      ],
      "hint1": "Take great pleasure or satisfaction in God.",
      "hint2": "D-e-l-i-g-h-t.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l8-c5",
    "game_slug": "verse-builder",
    "level": 8,
    "challenge_index": 5,
    "question_text": "What exact word completes 1 Peter 5:7? \"Casting all your ______ upon him; for he careth for you.\"",
    "options": [
      "care",
      "burdens",
      "anxieties",
      "worries"
    ],
    "correct_answer": "care",
    "explanation": "1 Peter 5:7 uses the singular noun in KJV: \"Casting all your care upon him; for he careth for you.\"",
    "reference": "1 Peter 5:7",
    "metadata": {
      "stage": 2,
      "stage_title": "The Missing Word",
      "level_title": "Overlooked Small Words & Prepositions",
      "mechanic": "missing_words",
      "verse_text": "Casting all your care upon him; for he careth for you.",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Difficult",
      "timerSeconds": 30,
      "points": 150,
      "is_typed": false,
      "acceptedAlternatives": [
        "care"
      ],
      "hint1": "Singular noun matching the verb \"careth\".",
      "hint2": "c-a-r-e.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l9-c1",
    "game_slug": "verse-builder",
    "level": 9,
    "challenge_index": 1,
    "question_text": "Complete the theological phrase in Titus 3:5: \"Not by works of righteousness which we have done, but according to his mercy he saved us, by the washing of ______ and renewing of the Holy Ghost.\"",
    "options": [
      "regeneration",
      "sanctification",
      "redemption",
      "justification"
    ],
    "correct_answer": "regeneration",
    "explanation": "Titus 3:5 highlights the new birth: \"...by the washing of regeneration, and renewing of the Holy Ghost.\"",
    "reference": "Titus 3:5",
    "metadata": {
      "stage": 2,
      "stage_title": "The Missing Word",
      "level_title": "Key Theological Terms",
      "mechanic": "missing_words",
      "verse_text": "Not by works of righteousness which we have done, but according to his mercy he saved us, by the washing of regeneration, and renewing of the Holy Ghost;",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Moderate",
      "timerSeconds": 30,
      "points": 100,
      "is_typed": false,
      "acceptedAlternatives": [
        "regeneration"
      ],
      "hint1": "The spiritual rebirth of the soul.",
      "hint2": "re-generation.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l9-c2",
    "game_slug": "verse-builder",
    "level": 9,
    "challenge_index": 2,
    "question_text": "Complete Romans 5:1: \"Therefore being justified by ______, we have peace with God through our Lord Jesus Christ.\"",
    "options": [
      "faith",
      "grace",
      "works",
      "blood"
    ],
    "correct_answer": "faith",
    "explanation": "Romans 5:1 establishes justification: \"Therefore being justified by faith, we have peace with God through our Lord Jesus Christ.\"",
    "reference": "Romans 5:1",
    "metadata": {
      "stage": 2,
      "stage_title": "The Missing Word",
      "level_title": "Key Theological Terms",
      "mechanic": "missing_words",
      "verse_text": "Therefore being justified by faith, we have peace with God through our Lord Jesus Christ:",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Moderate",
      "timerSeconds": 25,
      "points": 100,
      "is_typed": false,
      "acceptedAlternatives": [
        "faith"
      ],
      "hint1": "The instrument of justification.",
      "hint2": "f-a-i-t-h.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l9-c3",
    "game_slug": "verse-builder",
    "level": 9,
    "challenge_index": 3,
    "question_text": "Complete the doctrine of imputation in 2 Corinthians 5:21: \"For he hath made him to be ______ for us, who knew no sin; that we might be made the righteousness of God in him.\"",
    "options": [
      "sin",
      "a curse",
      "an offering",
      "a sacrifice"
    ],
    "correct_answer": "sin",
    "explanation": "2 Corinthians 5:21 states the great exchange: \"For he hath made him to be sin for us, who knew no sin; that we might be made the righteousness of God in him.\"",
    "reference": "2 Corinthians 5:21",
    "metadata": {
      "stage": 2,
      "stage_title": "The Missing Word",
      "level_title": "Key Theological Terms",
      "mechanic": "missing_words",
      "verse_text": "For he hath made him to be sin for us, who knew no sin; that we might be made the righteousness of God in him.",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Moderate",
      "timerSeconds": 30,
      "points": 100,
      "is_typed": false,
      "acceptedAlternatives": [
        "sin"
      ],
      "hint1": "Three-letter word denoting moral transgression.",
      "hint2": "s-i-n.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l9-c4",
    "game_slug": "verse-builder",
    "level": 9,
    "challenge_index": 4,
    "question_text": "Type the missing theological motive in Ephesians 4:32: \"And be ye kind one to another, tenderhearted, forgiving one another, even as God for ______ sake hath forgiven you.\"",
    "options": [],
    "correct_answer": "Christ's",
    "explanation": "Ephesians 4:32 specifies our standard of forgiveness: \"...even as God for Christ's sake hath forgiven you.\"",
    "reference": "Ephesians 4:32",
    "metadata": {
      "stage": 2,
      "stage_title": "The Missing Word",
      "level_title": "Key Theological Terms",
      "mechanic": "build_without_options",
      "verse_text": "And be ye kind one to another, tenderhearted, forgiving one another, even as God for Christ's sake hath forgiven you.",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Difficult",
      "timerSeconds": 35,
      "points": 150,
      "is_typed": true,
      "acceptedAlternatives": [
        "Christ's",
        "Christs",
        "Christ"
      ],
      "hint1": "Possessive form of the Anointed One.",
      "hint2": "Christ's.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l9-c5",
    "game_slug": "verse-builder",
    "level": 9,
    "challenge_index": 5,
    "question_text": "Complete Romans 3:23: \"For all have sinned, and come ______ of the glory of God.\"",
    "options": [
      "short",
      "destitute",
      "bereft",
      "fallen"
    ],
    "correct_answer": "short",
    "explanation": "Romans 3:23 universally diagnoses humanity: \"For all have sinned, and come short of the glory of God.\"",
    "reference": "Romans 3:23",
    "metadata": {
      "stage": 2,
      "stage_title": "The Missing Word",
      "level_title": "Key Theological Terms",
      "mechanic": "missing_words",
      "verse_text": "For all have sinned, and come short of the glory of God;",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Moderate",
      "timerSeconds": 25,
      "points": 100,
      "is_typed": false,
      "acceptedAlternatives": [
        "short"
      ],
      "hint1": "Failing to reach the required mark.",
      "hint2": "s-h-o-r-t.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l10-c1",
    "game_slug": "verse-builder",
    "level": 10,
    "challenge_index": 1,
    "question_text": "Complete the Shema devotion in Deuteronomy 6:5: \"And thou shalt love the LORD thy God with all thine ______, and with all thy ______, and with all thy ______.\"",
    "options": [
      "heart / soul / might",
      "mind / heart / strength",
      "spirit / soul / body",
      "heart / mind / power"
    ],
    "correct_answer": "heart / soul / might",
    "explanation": "Deuteronomy 6:5 commands total devotion: \"...with all thine heart, and with all thy soul, and with all thy might.\"",
    "reference": "Deuteronomy 6:5",
    "metadata": {
      "stage": 2,
      "stage_title": "The Missing Word",
      "level_title": "Multi-Blank Memory Test",
      "mechanic": "missing_words",
      "verse_text": "And thou shalt love the LORD thy God with all thine heart, and with all thy soul, and with all thy might.",
      "translation": "KJV",
      "testament": "Old Testament",
      "difficulty": "Moderate",
      "timerSeconds": 35,
      "points": 100,
      "is_typed": false,
      "acceptedAlternatives": [
        "heart / soul / might",
        "heart soul might"
      ],
      "hint1": "KJV uses \"might\" for the third element in Deuteronomy.",
      "hint2": "heart, soul, might.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l10-c2",
    "game_slug": "verse-builder",
    "level": 10,
    "challenge_index": 2,
    "question_text": "How does Matthew 28:20 conclude the Gospel of Matthew? \"and, lo, I am with you ______, even unto the ______ of the world. Amen.\"",
    "options": [
      "alway / end",
      "always / destruction",
      "evermore / completion",
      "forever / close"
    ],
    "correct_answer": "alway / end",
    "explanation": "Matthew 28:20 in the KJV uses the archaic spelling \"alway\": \"...and, lo, I am with you alway, even unto the end of the world. Amen.\"",
    "reference": "Matthew 28:20",
    "metadata": {
      "stage": 2,
      "stage_title": "The Missing Word",
      "level_title": "Multi-Blank Memory Test",
      "mechanic": "missing_words",
      "verse_text": "Teaching them to observe all things whatsoever I have commanded you: and, lo, I am with you alway, even unto the end of the world. Amen.",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Difficult",
      "timerSeconds": 35,
      "points": 150,
      "is_typed": false,
      "acceptedAlternatives": [
        "alway / end",
        "always / end",
        "alway end"
      ],
      "hint1": "Note KJV singular form \"alway\" without the final s.",
      "hint2": "alway... end.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l10-c3",
    "game_slug": "verse-builder",
    "level": 10,
    "challenge_index": 3,
    "question_text": "Identify the three descending steps in Psalm 1:1: \"walketh not in the counsel of the ______, nor standeth in the way of ______, nor sitteth in the seat of the ______.\"",
    "options": [
      "ungodly / sinners / scornful",
      "wicked / transgressors / mockers",
      "fools / proud / idolaters",
      "evil / violent / unbelievers"
    ],
    "correct_answer": "ungodly / sinners / scornful",
    "explanation": "Psalm 1:1 outlines the progressive descent of worldly alignment: counsel of ungodly, way of sinners, seat of scornful.",
    "reference": "Psalm 1:1",
    "metadata": {
      "stage": 2,
      "stage_title": "The Missing Word",
      "level_title": "Multi-Blank Memory Test",
      "mechanic": "missing_words",
      "verse_text": "Blessed is the man that walketh not in the counsel of the ungodly, nor standeth in the way of sinners, nor sitteth in the seat of the scornful.",
      "translation": "KJV",
      "testament": "Old Testament",
      "difficulty": "Difficult",
      "timerSeconds": 40,
      "points": 150,
      "is_typed": false,
      "acceptedAlternatives": [
        "ungodly / sinners / scornful",
        "ungodly sinners scornful"
      ],
      "hint1": "Begins with ungodly, progresses to sinners, ends with scornful.",
      "hint2": "ungodly / sinners / scornful.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l10-c4",
    "game_slug": "verse-builder",
    "level": 10,
    "challenge_index": 4,
    "question_text": "Type the missing five titles in Isaiah 9:6 separated by spaces or commas: \"and his name shall be called Wonderful, ______, The mighty ______, The everlasting ______, The Prince of ______.\"",
    "options": [],
    "correct_answer": "Counsellor God Father Peace",
    "explanation": "Isaiah 9:6 proclaims the royal messianic titles: \"Wonderful, Counsellor, The mighty God, The everlasting Father, The Prince of Peace.\"",
    "reference": "Isaiah 9:6",
    "metadata": {
      "stage": 2,
      "stage_title": "The Missing Word",
      "level_title": "Multi-Blank Memory Test",
      "mechanic": "build_without_options",
      "verse_text": "For unto us a child is born, unto us a son is given: and the government shall be upon his shoulder: and his name shall be called Wonderful, Counsellor, The mighty God, The everlasting Father, The Prince of Peace.",
      "translation": "KJV",
      "testament": "Old Testament",
      "difficulty": "Expert",
      "timerSeconds": 60,
      "points": 200,
      "is_typed": true,
      "acceptedAlternatives": [
        "Counsellor God Father Peace",
        "Counsellor, God, Father, Peace",
        "Counselor God Father Peace"
      ],
      "hint1": "Advisor, Deity, Eternal Parent, Ruler of Shalom.",
      "hint2": "Counsellor... God... Father... Peace.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l10-c5",
    "game_slug": "verse-builder",
    "level": 10,
    "challenge_index": 5,
    "question_text": "Complete the incarnation declaration in John 1:14: \"And the Word was made ______, and dwelt among us, (and we beheld his glory, the glory as of the only begotten of the Father,) full of ______ and ______.\"",
    "options": [
      "flesh / grace / truth",
      "man / light / love",
      "servant / mercy / peace",
      "human / power / righteousness"
    ],
    "correct_answer": "flesh / grace / truth",
    "explanation": "John 1:14 declares: \"And the Word was made flesh, and dwelt among us... full of grace and truth.\"",
    "reference": "John 1:14",
    "metadata": {
      "stage": 2,
      "stage_title": "The Missing Word",
      "level_title": "Multi-Blank Memory Test",
      "mechanic": "missing_words",
      "verse_text": "And the Word was made flesh, and dwelt among us, (and we beheld his glory, the glory as of the only begotten of the Father,) full of grace and truth.",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Very Difficult",
      "timerSeconds": 40,
      "points": 200,
      "is_typed": false,
      "acceptedAlternatives": [
        "flesh / grace / truth",
        "flesh grace truth"
      ],
      "hint1": "Human bodily nature, unmerited favor, and absolute verity.",
      "hint2": "flesh... grace and truth.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l11-c1",
    "game_slug": "verse-builder",
    "level": 11,
    "challenge_index": 1,
    "question_text": "Arrange these word tiles to form the shortest verse in the English Bible: \"Jesus wept.\"",
    "options": [
      "wept.",
      "Jesus"
    ],
    "correct_answer": "Jesus wept.",
    "explanation": "John 11:35 records the concise, profound grief and compassion of the Savior at Lazarus' tomb: \"Jesus wept.\"",
    "reference": "John 11:35",
    "metadata": {
      "stage": 3,
      "stage_title": "Word Arrangement",
      "level_title": "Short Verse Tiles",
      "mechanic": "arrange_words",
      "verse_text": "Jesus wept.",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Easy",
      "timerSeconds": 20,
      "points": 50,
      "is_tiles": true,
      "word_tiles": [
        "wept.",
        "Jesus"
      ],
      "acceptedAlternatives": [
        "Jesus wept.",
        "Jesus wept"
      ],
      "hint1": "Subject followed by past-tense verb.",
      "hint2": "Jesus wept.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l11-c2",
    "game_slug": "verse-builder",
    "level": 11,
    "challenge_index": 2,
    "question_text": "Arrange these word tiles to form the joyful mandate in 1 Thessalonians 5:16: \"Rejoice evermore.\"",
    "options": [
      "evermore.",
      "Rejoice"
    ],
    "correct_answer": "Rejoice evermore.",
    "explanation": "1 Thessalonians 5:16 gives the perpetual command of Christian joy: \"Rejoice evermore.\"",
    "reference": "1 Thessalonians 5:16",
    "metadata": {
      "stage": 3,
      "stage_title": "Word Arrangement",
      "level_title": "Short Verse Tiles",
      "mechanic": "arrange_words",
      "verse_text": "Rejoice evermore.",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Easy",
      "timerSeconds": 20,
      "points": 50,
      "is_tiles": true,
      "word_tiles": [
        "evermore.",
        "Rejoice"
      ],
      "acceptedAlternatives": [
        "Rejoice evermore.",
        "Rejoice evermore"
      ],
      "hint1": "Imperative verb followed by adverb of permanence.",
      "hint2": "Rejoice evermore.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l11-c3",
    "game_slug": "verse-builder",
    "level": 11,
    "challenge_index": 3,
    "question_text": "Arrange these word tiles for 1 John 4:19: \"We love him, because he first loved us.\"",
    "options": [
      "first",
      "him,",
      "us.",
      "he",
      "love",
      "We",
      "because",
      "loved"
    ],
    "correct_answer": "We love him, because he first loved us.",
    "explanation": "1 John 4:19 establishes the divine initiative of all redemptive love: \"We love him, because he first loved us.\"",
    "reference": "1 John 4:19",
    "metadata": {
      "stage": 3,
      "stage_title": "Word Arrangement",
      "level_title": "Short Verse Tiles",
      "mechanic": "arrange_words",
      "verse_text": "We love him, because he first loved us.",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Moderate",
      "timerSeconds": 40,
      "points": 100,
      "is_tiles": true,
      "word_tiles": [
        "first",
        "him,",
        "us.",
        "he",
        "love",
        "We",
        "because",
        "loved"
      ],
      "acceptedAlternatives": [
        "We love him, because he first loved us.",
        "We love him because he first loved us"
      ],
      "hint1": "Starts with \"We love him...\"",
      "hint2": "Cause: \"...because he first loved us.\"",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l11-c4",
    "game_slug": "verse-builder",
    "level": 11,
    "challenge_index": 4,
    "question_text": "Arrange these word tiles to form David's refuge song in Psalm 56:3: \"What time I am afraid, I will trust in thee.\"",
    "options": [
      "trust",
      "am",
      "time",
      "thee.",
      "afraid,",
      "What",
      "I",
      "in",
      "will",
      "I"
    ],
    "correct_answer": "What time I am afraid, I will trust in thee.",
    "explanation": "Psalm 56:3 models turning natural fear into conscious faith: \"What time I am afraid, I will trust in thee.\"",
    "reference": "Psalm 56:3",
    "metadata": {
      "stage": 3,
      "stage_title": "Word Arrangement",
      "level_title": "Short Verse Tiles",
      "mechanic": "arrange_words",
      "verse_text": "What time I am afraid, I will trust in thee.",
      "translation": "KJV",
      "testament": "Old Testament",
      "difficulty": "Moderate",
      "timerSeconds": 45,
      "points": 100,
      "is_tiles": true,
      "word_tiles": [
        "trust",
        "am",
        "time",
        "thee.",
        "afraid,",
        "What",
        "I",
        "in",
        "will",
        "I"
      ],
      "acceptedAlternatives": [
        "What time I am afraid, I will trust in thee.",
        "What time I am afraid I will trust in thee"
      ],
      "hint1": "Opening temporal clause: \"What time I am afraid...\"",
      "hint2": "Resolution: \"...I will trust in thee.\"",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l11-c5",
    "game_slug": "verse-builder",
    "level": 11,
    "challenge_index": 5,
    "question_text": "Arrange these word tiles to form the celebration of Psalm 118:24: \"This is the day which the LORD hath made; we will rejoice and be glad in it.\"",
    "options": [
      "day",
      "glad",
      "LORD",
      "rejoice",
      "This",
      "made;",
      "the",
      "be",
      "in",
      "hath",
      "is",
      "it.",
      "and",
      "will",
      "which",
      "the",
      "we"
    ],
    "correct_answer": "This is the day which the LORD hath made; we will rejoice and be glad in it.",
    "explanation": "Psalm 118:24 invites daily celebration in God's sovereign providence: \"This is the day which the LORD hath made; we will rejoice and be glad in it.\"",
    "reference": "Psalm 118:24",
    "metadata": {
      "stage": 3,
      "stage_title": "Word Arrangement",
      "level_title": "Short Verse Tiles",
      "mechanic": "arrange_words",
      "verse_text": "This is the day which the LORD hath made; we will rejoice and be glad in it.",
      "translation": "KJV",
      "testament": "Old Testament",
      "difficulty": "Difficult",
      "timerSeconds": 60,
      "points": 150,
      "is_tiles": true,
      "word_tiles": [
        "day",
        "glad",
        "LORD",
        "rejoice",
        "This",
        "made;",
        "the",
        "be",
        "in",
        "hath",
        "is",
        "it.",
        "and",
        "will",
        "which",
        "the",
        "we"
      ],
      "acceptedAlternatives": [
        "This is the day which the LORD hath made; we will rejoice and be glad in it.",
        "This is the day which the LORD hath made we will rejoice and be glad in it"
      ],
      "hint1": "First statement declares the day's creator: \"This is the day which the LORD hath made;\"",
      "hint2": "Response: \"we will rejoice and be glad in it.\"",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l12-c1",
    "game_slug": "verse-builder",
    "level": 12,
    "challenge_index": 1,
    "question_text": "Arrange these word tiles to form Proverbs 18:10: \"The name of the LORD is a strong tower: the righteous runneth into it, and is safe.\"",
    "options": [
      "safe.",
      "name",
      "strong",
      "runneth",
      "tower:",
      "is",
      "a",
      "righteous",
      "it,",
      "the",
      "LORD",
      "into",
      "is",
      "and",
      "of",
      "The"
    ],
    "correct_answer": "The name of the LORD is a strong tower: the righteous runneth into it, and is safe.",
    "explanation": "Proverbs 18:10 portrays the sovereign character of God as a fortified stronghold for the righteous.",
    "reference": "Proverbs 18:10",
    "metadata": {
      "stage": 3,
      "stage_title": "Word Arrangement",
      "level_title": "Ten-to-Twelve Word Tiles",
      "mechanic": "arrange_words",
      "verse_text": "The name of the LORD is a strong tower: the righteous runneth into it, and is safe.",
      "translation": "KJV",
      "testament": "Old Testament",
      "difficulty": "Moderate",
      "timerSeconds": 60,
      "points": 100,
      "is_tiles": true,
      "word_tiles": [
        "safe.",
        "name",
        "strong",
        "runneth",
        "tower:",
        "is",
        "a",
        "righteous",
        "it,",
        "the",
        "LORD",
        "into",
        "is",
        "and",
        "of",
        "The"
      ],
      "acceptedAlternatives": [
        "The name of the LORD is a strong tower: the righteous runneth into it, and is safe.",
        "The name of the LORD is a strong tower the righteous runneth into it and is safe"
      ],
      "hint1": "Begins: \"The name of the LORD is a strong tower:\"",
      "hint2": "Concludes: \"...the righteous runneth into it, and is safe.\"",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l12-c2",
    "game_slug": "verse-builder",
    "level": 12,
    "challenge_index": 2,
    "question_text": "Arrange these word tiles to form Jesus' words in Matthew 5:14: \"Ye are the light of the world. A city that is set on an hill cannot be hid.\"",
    "options": [
      "light",
      "cannot",
      "is",
      "set",
      "an",
      "Ye",
      "city",
      "on",
      "hid.",
      "the",
      "be",
      "of",
      "that",
      "A",
      "world.",
      "hill",
      "are",
      "the"
    ],
    "correct_answer": "Ye are the light of the world. A city that is set on an hill cannot be hid.",
    "explanation": "Matthew 5:14 commissions believers to be unhidden witnesses for the kingdom of God.",
    "reference": "Matthew 5:14",
    "metadata": {
      "stage": 3,
      "stage_title": "Word Arrangement",
      "level_title": "Ten-to-Twelve Word Tiles",
      "mechanic": "arrange_words",
      "verse_text": "Ye are the light of the world. A city that is set on an hill cannot be hid.",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Moderate",
      "timerSeconds": 60,
      "points": 100,
      "is_tiles": true,
      "word_tiles": [
        "light",
        "cannot",
        "is",
        "set",
        "an",
        "Ye",
        "city",
        "on",
        "hid.",
        "the",
        "be",
        "of",
        "that",
        "A",
        "world.",
        "hill",
        "are",
        "the"
      ],
      "acceptedAlternatives": [
        "Ye are the light of the world. A city that is set on an hill cannot be hid.",
        "Ye are the light of the world A city that is set on an hill cannot be hid"
      ],
      "hint1": "First sentence: \"Ye are the light of the world.\"",
      "hint2": "Second sentence: \"A city that is set on an hill cannot be hid.\"",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l12-c3",
    "game_slug": "verse-builder",
    "level": 12,
    "challenge_index": 3,
    "question_text": "Arrange these word tiles to form David's triumph in Psalm 27:1: \"The LORD is my light and my salvation; whom shall I fear?\"",
    "options": [
      "my",
      "light",
      "fear?",
      "shall",
      "my",
      "LORD",
      "salvation;",
      "I",
      "The",
      "and",
      "whom",
      "is"
    ],
    "correct_answer": "The LORD is my light and my salvation; whom shall I fear?",
    "explanation": "Psalm 27:1 banishes fear through the divine presence: \"The LORD is my light and my salvation; whom shall I fear?\"",
    "reference": "Psalm 27:1",
    "metadata": {
      "stage": 3,
      "stage_title": "Word Arrangement",
      "level_title": "Ten-to-Twelve Word Tiles",
      "mechanic": "arrange_words",
      "verse_text": "The LORD is my light and my salvation; whom shall I fear?",
      "translation": "KJV",
      "testament": "Old Testament",
      "difficulty": "Moderate",
      "timerSeconds": 50,
      "points": 100,
      "is_tiles": true,
      "word_tiles": [
        "my",
        "light",
        "fear?",
        "shall",
        "my",
        "LORD",
        "salvation;",
        "I",
        "The",
        "and",
        "whom",
        "is"
      ],
      "acceptedAlternatives": [
        "The LORD is my light and my salvation; whom shall I fear?",
        "The LORD is my light and my salvation whom shall I fear"
      ],
      "hint1": "Starts with \"The LORD is my light...\"",
      "hint2": "Ends with rhetorical question: \"...whom shall I fear?\"",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l12-c4",
    "game_slug": "verse-builder",
    "level": 12,
    "challenge_index": 4,
    "question_text": "Arrange these word tiles to form Paul's victorious conclusion in Romans 8:31: \"What shall we then say to these things? If God be for us, who can be against us?\"",
    "options": [
      "for",
      "say",
      "we",
      "things?",
      "be",
      "these",
      "to",
      "What",
      "us?",
      "against",
      "can",
      "God",
      "be",
      "who",
      "If",
      "us,",
      "then",
      "shall"
    ],
    "correct_answer": "What shall we then say to these things? If God be for us, who can be against us?",
    "explanation": "Romans 8:31 anchors the believer in divine omnipotence: \"What shall we then say to these things? If God be for us, who can be against us?\"",
    "reference": "Romans 8:31",
    "metadata": {
      "stage": 3,
      "stage_title": "Word Arrangement",
      "level_title": "Ten-to-Twelve Word Tiles",
      "mechanic": "arrange_words",
      "verse_text": "What shall we then say to these things? If God be for us, who can be against us?",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Difficult",
      "timerSeconds": 65,
      "points": 150,
      "is_tiles": true,
      "word_tiles": [
        "for",
        "say",
        "we",
        "things?",
        "be",
        "these",
        "to",
        "What",
        "us?",
        "against",
        "can",
        "God",
        "be",
        "who",
        "If",
        "us,",
        "then",
        "shall"
      ],
      "acceptedAlternatives": [
        "What shall we then say to these things? If God be for us, who can be against us?",
        "What shall we then say to these things If God be for us who can be against us"
      ],
      "hint1": "First question: \"What shall we then say to these things?\"",
      "hint2": "Second question: \"If God be for us, who can be against us?\"",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l12-c5",
    "game_slug": "verse-builder",
    "level": 12,
    "challenge_index": 5,
    "question_text": "Type the missing three words from Proverbs 15:1: \"A soft answer turneth away wrath: but ______ ______ ______ ______.\"",
    "options": [
      "grievous words stir up anger",
      "harsh words provoke fight",
      "proud speech causeth strife",
      "evil talk kindleth fury"
    ],
    "correct_answer": "grievous words stir up anger",
    "explanation": "Proverbs 15:1 provides wisdom on communication: \"A soft answer turneth away wrath: but grievous words stir up anger.\"",
    "reference": "Proverbs 15:1",
    "metadata": {
      "stage": 3,
      "stage_title": "Word Arrangement",
      "level_title": "Ten-to-Twelve Word Tiles",
      "mechanic": "missing_phrase",
      "verse_text": "A soft answer turneth away wrath: but grievous words stir up anger.",
      "translation": "KJV",
      "testament": "Old Testament",
      "difficulty": "Difficult",
      "timerSeconds": 35,
      "points": 150,
      "is_typed": false,
      "acceptedAlternatives": [
        "grievous words stir up anger"
      ],
      "hint1": "Pain-inflicting words that excite rage.",
      "hint2": "grievous words stir up anger.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l13-c1",
    "game_slug": "verse-builder",
    "level": 13,
    "challenge_index": 1,
    "question_text": "Arrange these word tiles to form Romans 12:12: \"Rejoicing in hope; patient in tribulation; continuing instant in prayer;\"",
    "options": [
      "hope;",
      "prayer;",
      "instant",
      "in",
      "patient",
      "Rejoicing",
      "in",
      "continuing",
      "tribulation;",
      "in"
    ],
    "correct_answer": "Rejoicing in hope; patient in tribulation; continuing instant in prayer;",
    "explanation": "Romans 12:12 sets forth the Christian rhythm of spiritual stamina: joy in hope, endurance in trials, devotion in prayer.",
    "reference": "Romans 12:12",
    "metadata": {
      "stage": 3,
      "stage_title": "Word Arrangement",
      "level_title": "Fifteen-Word Reconstructions",
      "mechanic": "arrange_words",
      "verse_text": "Rejoicing in hope; patient in tribulation; continuing instant in prayer;",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Moderate",
      "timerSeconds": 50,
      "points": 100,
      "is_tiles": true,
      "word_tiles": [
        "hope;",
        "prayer;",
        "instant",
        "in",
        "patient",
        "Rejoicing",
        "in",
        "continuing",
        "tribulation;",
        "in"
      ],
      "acceptedAlternatives": [
        "Rejoicing in hope; patient in tribulation; continuing instant in prayer;",
        "Rejoicing in hope patient in tribulation continuing instant in prayer"
      ],
      "hint1": "Three parallel clauses with \"in\": hope, tribulation, prayer.",
      "hint2": "Rejoicing... patient... continuing instant...",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l13-c2",
    "game_slug": "verse-builder",
    "level": 13,
    "challenge_index": 2,
    "question_text": "Arrange these word tiles to form Psalm 37:5: \"Commit thy way unto the LORD; trust also in him; and he shall bring it to pass.\"",
    "options": [
      "way",
      "unto",
      "pass.",
      "to",
      "trust",
      "it",
      "Commit",
      "also",
      "bring",
      "LORD;",
      "in",
      "thy",
      "the",
      "shall",
      "he",
      "him;",
      "and"
    ],
    "correct_answer": "Commit thy way unto the LORD; trust also in him; and he shall bring it to pass.",
    "explanation": "Psalm 37:5 instructs the believer to roll burdens onto Yahweh, with the promise that He will act.",
    "reference": "Psalm 37:5",
    "metadata": {
      "stage": 3,
      "stage_title": "Word Arrangement",
      "level_title": "Fifteen-Word Reconstructions",
      "mechanic": "arrange_words",
      "verse_text": "Commit thy way unto the LORD; trust also in him; and he shall bring it to pass.",
      "translation": "KJV",
      "testament": "Old Testament",
      "difficulty": "Difficult",
      "timerSeconds": 65,
      "points": 150,
      "is_tiles": true,
      "word_tiles": [
        "way",
        "unto",
        "pass.",
        "to",
        "trust",
        "it",
        "Commit",
        "also",
        "bring",
        "LORD;",
        "in",
        "thy",
        "the",
        "shall",
        "he",
        "him;",
        "and"
      ],
      "acceptedAlternatives": [
        "Commit thy way unto the LORD; trust also in him; and he shall bring it to pass.",
        "Commit thy way unto the LORD trust also in him and he shall bring it to pass"
      ],
      "hint1": "Opening: \"Commit thy way unto the LORD;\"",
      "hint2": "Followed by: \"trust also in him; and he shall bring it to pass.\"",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l13-c3",
    "game_slug": "verse-builder",
    "level": 13,
    "challenge_index": 3,
    "question_text": "Arrange these word tiles to form 1 Corinthians 10:31: \"Whether therefore ye eat, or drink, or whatsoever ye do, do all to the glory of God.\"",
    "options": [
      "eat,",
      "do,",
      "glory",
      "Whether",
      "all",
      "do",
      "of",
      "drink,",
      "to",
      "whatsoever",
      "ye",
      "the",
      "God.",
      "therefore",
      "or",
      "ye",
      "or"
    ],
    "correct_answer": "Whether therefore ye eat, or drink, or whatsoever ye do, do all to the glory of God.",
    "explanation": "1 Corinthians 10:31 establishes the comprehensive goal of every human action: the supreme glory of God.",
    "reference": "1 Corinthians 10:31",
    "metadata": {
      "stage": 3,
      "stage_title": "Word Arrangement",
      "level_title": "Fifteen-Word Reconstructions",
      "mechanic": "arrange_words",
      "verse_text": "Whether therefore ye eat, or drink, or whatsoever ye do, do all to the glory of God.",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Difficult",
      "timerSeconds": 65,
      "points": 150,
      "is_tiles": true,
      "word_tiles": [
        "eat,",
        "do,",
        "glory",
        "Whether",
        "all",
        "do",
        "of",
        "drink,",
        "to",
        "whatsoever",
        "ye",
        "the",
        "God.",
        "therefore",
        "or",
        "ye",
        "or"
      ],
      "acceptedAlternatives": [
        "Whether therefore ye eat, or drink, or whatsoever ye do, do all to the glory of God.",
        "Whether therefore ye eat or drink or whatsoever ye do do all to the glory of God"
      ],
      "hint1": "Starts with \"Whether therefore ye eat, or drink...\"",
      "hint2": "Culminates in \"...do all to the glory of God.\"",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l13-c4",
    "game_slug": "verse-builder",
    "level": 13,
    "challenge_index": 4,
    "question_text": "Arrange these word tiles to form James 1:19: \"Wherefore, my beloved brethren, let every man be swift to hear, slow to speak, slow to wrath:\"",
    "options": [
      "to",
      "hear,",
      "Wherefore,",
      "slow",
      "beloved",
      "man",
      "wrath:",
      "slow",
      "every",
      "my",
      "brethren,",
      "speak,",
      "let",
      "be",
      "to",
      "swift"
    ],
    "correct_answer": "Wherefore, my beloved brethren, let every man be swift to hear, slow to speak, slow to wrath:",
    "explanation": "James 1:19 gives practical wisdom for peacemaking: swift to listen, measured in speech, slow to anger.",
    "reference": "James 1:19",
    "metadata": {
      "stage": 3,
      "stage_title": "Word Arrangement",
      "level_title": "Fifteen-Word Reconstructions",
      "mechanic": "arrange_words",
      "verse_text": "Wherefore, my beloved brethren, let every man be swift to hear, slow to speak, slow to wrath:",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Difficult",
      "timerSeconds": 65,
      "points": 150,
      "is_tiles": true,
      "word_tiles": [
        "to",
        "hear,",
        "Wherefore,",
        "slow",
        "beloved",
        "man",
        "wrath:",
        "slow",
        "every",
        "my",
        "brethren,",
        "speak,",
        "let",
        "be",
        "to",
        "swift"
      ],
      "acceptedAlternatives": [
        "Wherefore, my beloved brethren, let every man be swift to hear, slow to speak, slow to wrath:",
        "Wherefore my beloved brethren let every man be swift to hear slow to speak slow to wrath"
      ],
      "hint1": "Address: \"Wherefore, my beloved brethren...\"",
      "hint2": "Threefold rule: \"swift to hear, slow to speak, slow to wrath:\"",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l13-c5",
    "game_slug": "verse-builder",
    "level": 13,
    "challenge_index": 5,
    "question_text": "Type the missing four words from 2 Timothy 4:7: \"I have fought a good fight, I have ______ ______ ______, I have kept the faith:\"",
    "options": [],
    "correct_answer": "finished my course",
    "explanation": "2 Timothy 4:7 records Paul's triumphant finish: \"I have fought a good fight, I have finished my course, I have kept the faith:\"",
    "reference": "2 Timothy 4:7",
    "metadata": {
      "stage": 3,
      "stage_title": "Word Arrangement",
      "level_title": "Fifteen-Word Reconstructions",
      "mechanic": "build_without_options",
      "verse_text": "I have fought a good fight, I have finished my course, I have kept the faith:",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Very Difficult",
      "timerSeconds": 40,
      "points": 200,
      "is_typed": true,
      "acceptedAlternatives": [
        "finished my course",
        "finished the course"
      ],
      "hint1": "Athletic race metaphor of completing one's track.",
      "hint2": "finished my course.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l14-c1",
    "game_slug": "verse-builder",
    "level": 14,
    "challenge_index": 1,
    "question_text": "Arrange these word tiles to form Philippians 2:5: \"Let this mind be in you, which was also in Christ Jesus:\"",
    "options": [
      "Christ",
      "this",
      "you,",
      "also",
      "in",
      "Let",
      "be",
      "mind",
      "which",
      "was",
      "in",
      "Jesus:"
    ],
    "correct_answer": "Let this mind be in you, which was also in Christ Jesus:",
    "explanation": "Philippians 2:5 introduces the Kenosis passage, urging Christians to adopt the humble self-emptying attitude of Christ.",
    "reference": "Philippians 2:5",
    "metadata": {
      "stage": 3,
      "stage_title": "Word Arrangement",
      "level_title": "Complex Sentence Structures",
      "mechanic": "arrange_words",
      "verse_text": "Let this mind be in you, which was also in Christ Jesus:",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Moderate",
      "timerSeconds": 50,
      "points": 100,
      "is_tiles": true,
      "word_tiles": [
        "Christ",
        "this",
        "you,",
        "also",
        "in",
        "Let",
        "be",
        "mind",
        "which",
        "was",
        "in",
        "Jesus:"
      ],
      "acceptedAlternatives": [
        "Let this mind be in you, which was also in Christ Jesus:",
        "Let this mind be in you which was also in Christ Jesus"
      ],
      "hint1": "Begins with imperative: \"Let this mind be in you...\"",
      "hint2": "Relative clause: \"...which was also in Christ Jesus:\"",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l14-c2",
    "game_slug": "verse-builder",
    "level": 14,
    "challenge_index": 2,
    "question_text": "Arrange these word tiles to form Ephesians 6:11: \"Put on the whole armour of God, that ye may be able to stand against the wiles of the devil.\"",
    "options": [
      "wiles",
      "armour",
      "devil.",
      "whole",
      "against",
      "the",
      "be",
      "able",
      "ye",
      "of",
      "stand",
      "to",
      "that",
      "the",
      "Put",
      "on",
      "God,",
      "may",
      "the"
    ],
    "correct_answer": "Put on the whole armour of God, that ye may be able to stand against the wiles of the devil.",
    "explanation": "Ephesians 6:11 charges believers to don divine spiritual equipment against demonic strategies.",
    "reference": "Ephesians 6:11",
    "metadata": {
      "stage": 3,
      "stage_title": "Word Arrangement",
      "level_title": "Complex Sentence Structures",
      "mechanic": "arrange_words",
      "verse_text": "Put on the whole armour of God, that ye may be able to stand against the wiles of the devil.",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Difficult",
      "timerSeconds": 70,
      "points": 150,
      "is_tiles": true,
      "word_tiles": [
        "wiles",
        "armour",
        "devil.",
        "whole",
        "against",
        "the",
        "be",
        "able",
        "ye",
        "of",
        "stand",
        "to",
        "that",
        "the",
        "Put",
        "on",
        "God,",
        "may",
        "the"
      ],
      "acceptedAlternatives": [
        "Put on the whole armour of God, that ye may be able to stand against the wiles of the devil.",
        "Put on the whole armour of God that ye may be able to stand against the wiles of the devil"
      ],
      "hint1": "Opening military command: \"Put on the whole armour of God,\"",
      "hint2": "Purpose: \"that ye may be able to stand against the wiles of the devil.\"",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l14-c3",
    "game_slug": "verse-builder",
    "level": 14,
    "challenge_index": 3,
    "question_text": "Arrange these word tiles to form Psalm 121:1-2: \"I will lift up mine eyes unto the hills, from whence cometh my help. My help cometh from the LORD, which made heaven and earth.\"",
    "options": [
      "mine",
      "whence",
      "help.",
      "earth.",
      "hills,",
      "My",
      "from",
      "help",
      "made",
      "cometh",
      "the",
      "which",
      "and",
      "LORD,",
      "up",
      "unto",
      "from",
      "I",
      "cometh",
      "heaven",
      "will",
      "lift",
      "eyes",
      "my",
      "the"
    ],
    "correct_answer": "I will lift up mine eyes unto the hills, from whence cometh my help. My help cometh from the LORD, which made heaven and earth.",
    "explanation": "Psalm 121:1-2 directs the pilgrim's gaze beyond the hills to the Maker of heaven and earth.",
    "reference": "Psalm 121:1-2",
    "metadata": {
      "stage": 3,
      "stage_title": "Word Arrangement",
      "level_title": "Complex Sentence Structures",
      "mechanic": "arrange_words",
      "verse_text": "I will lift up mine eyes unto the hills, from whence cometh my help. My help cometh from the LORD, which made heaven and earth.",
      "translation": "KJV",
      "testament": "Old Testament",
      "difficulty": "Very Difficult",
      "timerSeconds": 85,
      "points": 200,
      "is_tiles": true,
      "word_tiles": [
        "mine",
        "whence",
        "help.",
        "earth.",
        "hills,",
        "My",
        "from",
        "help",
        "made",
        "cometh",
        "the",
        "which",
        "and",
        "LORD,",
        "up",
        "unto",
        "from",
        "I",
        "cometh",
        "heaven",
        "will",
        "lift",
        "eyes",
        "my",
        "the"
      ],
      "acceptedAlternatives": [
        "I will lift up mine eyes unto the hills, from whence cometh my help. My help cometh from the LORD, which made heaven and earth.",
        "I will lift up mine eyes unto the hills from whence cometh my help My help cometh from the LORD which made heaven and earth"
      ],
      "hint1": "Question/journey: \"I will lift up mine eyes unto the hills, from whence cometh my help.\"",
      "hint2": "Answer: \"My help cometh from the LORD, which made heaven and earth.\"",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l14-c4",
    "game_slug": "verse-builder",
    "level": 14,
    "challenge_index": 4,
    "question_text": "Arrange these word tiles to form Paul's gospel banner in Romans 1:16: \"For I am not ashamed of the gospel of Christ: for it is the power of God unto salvation to every one that believeth; to the Jew first, and also to the Greek.\"",
    "options": [
      "first,",
      "ashamed",
      "God",
      "also",
      "to",
      "power",
      "not",
      "salvation",
      "Jew",
      "is",
      "the",
      "believeth;",
      "unto",
      "Greek.",
      "am",
      "it",
      "I",
      "the",
      "Christ:",
      "for",
      "of",
      "and",
      "to",
      "For",
      "every",
      "the",
      "one",
      "of",
      "that",
      "gospel"
    ],
    "correct_answer": "For I am not ashamed of the gospel of Christ: for it is the power of God unto salvation to every one that believeth; to the Jew first, and also to the Greek.",
    "explanation": "Romans 1:16 presents the thesis statement of Romans: the gospel as God's dynamite unto salvation.",
    "reference": "Romans 1:16",
    "metadata": {
      "stage": 3,
      "stage_title": "Word Arrangement",
      "level_title": "Complex Sentence Structures",
      "mechanic": "arrange_words",
      "verse_text": "For I am not ashamed of the gospel of Christ: for it is the power of God unto salvation to every one that believeth; to the Jew first, and also to the Greek.",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Expert",
      "timerSeconds": 90,
      "points": 200,
      "is_tiles": true,
      "word_tiles": [
        "first,",
        "ashamed",
        "God",
        "also",
        "to",
        "power",
        "not",
        "salvation",
        "Jew",
        "is",
        "the",
        "believeth;",
        "unto",
        "Greek.",
        "am",
        "it",
        "I",
        "the",
        "Christ:",
        "for",
        "of",
        "and",
        "to",
        "For",
        "every",
        "the",
        "one",
        "of",
        "that",
        "gospel"
      ],
      "acceptedAlternatives": [
        "For I am not ashamed of the gospel of Christ: for it is the power of God unto salvation to every one that believeth; to the Jew first, and also to the Greek."
      ],
      "hint1": "Bold confession: \"For I am not ashamed of the gospel of Christ:\"",
      "hint2": "Universality: \"...to every one that believeth; to the Jew first, and also to the Greek.\"",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l14-c5",
    "game_slug": "verse-builder",
    "level": 14,
    "challenge_index": 5,
    "question_text": "Complete the climax of Hebrews 12:1: \"Wherefore seeing we also are compassed about with so great a cloud of witnesses, let us lay aside every weight, and the sin which doth so easily beset us, and ______ ______ ______ ______ ______ ______ ______ ______ ______.\"",
    "options": [
      "let us run with patience the race that is set before us",
      "let us look steadfastly unto the heavenly prize",
      "let us press toward the mark for the prize",
      "let us strive with all our might to finish well"
    ],
    "correct_answer": "let us run with patience the race that is set before us",
    "explanation": "Hebrews 12:1 calls for enduring perseverance in the Christian race: \"...let us run with patience the race that is set before us.\"",
    "reference": "Hebrews 12:1",
    "metadata": {
      "stage": 3,
      "stage_title": "Word Arrangement",
      "level_title": "Complex Sentence Structures",
      "mechanic": "missing_phrase",
      "verse_text": "Wherefore seeing we also are compassed about with so great a cloud of witnesses, let us lay aside every weight, and the sin which doth so easily beset us, and let us run with patience the race that is set before us,",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Very Difficult",
      "timerSeconds": 45,
      "points": 200,
      "is_typed": false,
      "acceptedAlternatives": [
        "let us run with patience the race that is set before us"
      ],
      "hint1": "Running a marathon with perseverance toward a designated course.",
      "hint2": "let us run with patience...",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l15-c1",
    "game_slug": "verse-builder",
    "level": 15,
    "challenge_index": 1,
    "question_text": "Arrange these word tiles to form Proverbs 3:6: \"In all thy ways acknowledge him, and he shall direct thy paths.\"",
    "options": [
      "shall",
      "acknowledge",
      "he",
      "ways",
      "and",
      "thy",
      "direct",
      "all",
      "In",
      "paths.",
      "thy",
      "him,"
    ],
    "correct_answer": "In all thy ways acknowledge him, and he shall direct thy paths.",
    "explanation": "Proverbs 3:6 promises divine guidance when every sphere of life honors God.",
    "reference": "Proverbs 3:6",
    "metadata": {
      "stage": 3,
      "stage_title": "Word Arrangement",
      "level_title": "Master Word Scramble",
      "mechanic": "arrange_words",
      "verse_text": "In all thy ways acknowledge him, and he shall direct thy paths.",
      "translation": "KJV",
      "testament": "Old Testament",
      "difficulty": "Moderate",
      "timerSeconds": 50,
      "points": 100,
      "is_tiles": true,
      "word_tiles": [
        "shall",
        "acknowledge",
        "he",
        "ways",
        "and",
        "thy",
        "direct",
        "all",
        "In",
        "paths.",
        "thy",
        "him,"
      ],
      "acceptedAlternatives": [
        "In all thy ways acknowledge him, and he shall direct thy paths.",
        "In all thy ways acknowledge him and he shall direct thy paths"
      ],
      "hint1": "Condition: \"In all thy ways acknowledge him,\"",
      "hint2": "Promise: \"and he shall direct thy paths.\"",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l15-c2",
    "game_slug": "verse-builder",
    "level": 15,
    "challenge_index": 2,
    "question_text": "Arrange these word tiles to form Matthew 6:33: \"But seek ye first the kingdom of God, and his righteousness; and all these things shall be added unto you.\"",
    "options": [
      "kingdom",
      "unto",
      "and",
      "first",
      "all",
      "righteousness;",
      "be",
      "these",
      "seek",
      "God,",
      "things",
      "But",
      "you.",
      "the",
      "shall",
      "his",
      "of",
      "added",
      "ye"
    ],
    "correct_answer": "But seek ye first the kingdom of God, and his righteousness; and all these things shall be added unto you.",
    "explanation": "Matthew 6:33 reorders human priorities: seek God's reign first, and material needs will be provided.",
    "reference": "Matthew 6:33",
    "metadata": {
      "stage": 3,
      "stage_title": "Word Arrangement",
      "level_title": "Master Word Scramble",
      "mechanic": "arrange_words",
      "verse_text": "But seek ye first the kingdom of God, and his righteousness; and all these things shall be added unto you.",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Difficult",
      "timerSeconds": 70,
      "points": 150,
      "is_tiles": true,
      "word_tiles": [
        "kingdom",
        "unto",
        "and",
        "first",
        "all",
        "righteousness;",
        "be",
        "these",
        "seek",
        "God,",
        "things",
        "But",
        "you.",
        "the",
        "shall",
        "his",
        "of",
        "added",
        "ye"
      ],
      "acceptedAlternatives": [
        "But seek ye first the kingdom of God, and his righteousness; and all these things shall be added unto you.",
        "But seek ye first the kingdom of God and his righteousness and all these things shall be added unto you"
      ],
      "hint1": "Command: \"But seek ye first the kingdom of God, and his righteousness;\"",
      "hint2": "Promise: \"and all these things shall be added unto you.\"",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l15-c3",
    "game_slug": "verse-builder",
    "level": 15,
    "challenge_index": 3,
    "question_text": "Arrange these word tiles to form the substitutionary atonement of Isaiah 53:5: \"But he was wounded for our transgressions, he was bruised for our iniquities: the chastisement of our peace was upon him; and with his stripes we are healed.\"",
    "options": [
      "for",
      "was",
      "our",
      "chastisement",
      "peace",
      "are",
      "bruised",
      "our",
      "he",
      "we",
      "with",
      "iniquities:",
      "upon",
      "for",
      "transgressions,",
      "him;",
      "he",
      "stripes",
      "healed.",
      "the",
      "wounded",
      "our",
      "his",
      "and",
      "of",
      "was",
      "was",
      "But"
    ],
    "correct_answer": "But he was wounded for our transgressions, he was bruised for our iniquities: the chastisement of our peace was upon him; and with his stripes we are healed.",
    "explanation": "Isaiah 53:5 prophesies Christ's substitutionary sacrifice: wounded for transgressions, bruised for iniquities, bringing us peace and healing.",
    "reference": "Isaiah 53:5",
    "metadata": {
      "stage": 3,
      "stage_title": "Word Arrangement",
      "level_title": "Master Word Scramble",
      "mechanic": "arrange_words",
      "verse_text": "But he was wounded for our transgressions, he was bruised for our iniquities: the chastisement of our peace was upon him; and with his stripes we are healed.",
      "translation": "KJV",
      "testament": "Old Testament",
      "difficulty": "Expert",
      "timerSeconds": 90,
      "points": 250,
      "is_tiles": true,
      "word_tiles": [
        "for",
        "was",
        "our",
        "chastisement",
        "peace",
        "are",
        "bruised",
        "our",
        "he",
        "we",
        "with",
        "iniquities:",
        "upon",
        "for",
        "transgressions,",
        "him;",
        "he",
        "stripes",
        "healed.",
        "the",
        "wounded",
        "our",
        "his",
        "and",
        "of",
        "was",
        "was",
        "But"
      ],
      "acceptedAlternatives": [
        "But he was wounded for our transgressions, he was bruised for our iniquities: the chastisement of our peace was upon him; and with his stripes we are healed."
      ],
      "hint1": "Four poetic clauses of vicarious suffering.",
      "hint2": "Ends with: \"...and with his stripes we are healed.\"",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l15-c4",
    "game_slug": "verse-builder",
    "level": 15,
    "challenge_index": 4,
    "question_text": "Arrange these word tiles to form the divine promise to Paul in 2 Corinthians 12:9: \"And he said unto me, My grace is sufficient for thee: for my strength is made perfect in weakness.\"",
    "options": [
      "grace",
      "is",
      "thee:",
      "he",
      "weakness.",
      "in",
      "My",
      "unto",
      "for",
      "said",
      "perfect",
      "And",
      "made",
      "my",
      "is",
      "for",
      "strength",
      "me,",
      "sufficient"
    ],
    "correct_answer": "And he said unto me, My grace is sufficient for thee: for my strength is made perfect in weakness.",
    "explanation": "2 Corinthians 12:9 reveals how God's power shines through human weakness through sufficient grace.",
    "reference": "2 Corinthians 12:9",
    "metadata": {
      "stage": 3,
      "stage_title": "Word Arrangement",
      "level_title": "Master Word Scramble",
      "mechanic": "arrange_words",
      "verse_text": "And he said unto me, My grace is sufficient for thee: for my strength is made perfect in weakness.",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Difficult",
      "timerSeconds": 75,
      "points": 150,
      "is_tiles": true,
      "word_tiles": [
        "grace",
        "is",
        "thee:",
        "he",
        "weakness.",
        "in",
        "My",
        "unto",
        "for",
        "said",
        "perfect",
        "And",
        "made",
        "my",
        "is",
        "for",
        "strength",
        "me,",
        "sufficient"
      ],
      "acceptedAlternatives": [
        "And he said unto me, My grace is sufficient for thee: for my strength is made perfect in weakness.",
        "And he said unto me My grace is sufficient for thee for my strength is made perfect in weakness"
      ],
      "hint1": "Dialogue: \"And he said unto me, My grace is sufficient for thee:\"",
      "hint2": "Reason: \"for my strength is made perfect in weakness.\"",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l15-c5",
    "game_slug": "verse-builder",
    "level": 15,
    "challenge_index": 5,
    "question_text": "Type the missing climactic phrase from Romans 8:39: \"Nor height, nor depth, nor any other creature, shall be able to separate us from ______ ______ ______ ______, which is in Christ Jesus our Lord.\"",
    "options": [],
    "correct_answer": "the love of God",
    "explanation": "Romans 8:39 seals the unbreakable bond between believers and God: \"...separate us from the love of God, which is in Christ Jesus our Lord.\"",
    "reference": "Romans 8:39",
    "metadata": {
      "stage": 3,
      "stage_title": "Word Arrangement",
      "level_title": "Master Word Scramble",
      "mechanic": "build_without_options",
      "verse_text": "Nor height, nor depth, nor any other creature, shall be able to separate us from the love of God, which is in Christ Jesus our Lord.",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Expert",
      "timerSeconds": 45,
      "points": 200,
      "is_typed": true,
      "acceptedAlternatives": [
        "the love of God"
      ],
      "hint1": "Four words describing God's eternal affection.",
      "hint2": "the love of God.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l16-c1",
    "game_slug": "verse-builder",
    "level": 16,
    "challenge_index": 1,
    "question_text": "Identify the incorrect trap word in this verse and choose the correct KJV replacement: \"For God so loved the world, that he gave his only begotten FRIEND, that whosoever believeth in him should not perish, but have everlasting life.\"",
    "options": [
      "Trap word is FRIEND -> Correct word is SON",
      "Trap word is BEGOTTEN -> Correct word is CHOSEN",
      "Trap word is PERISH -> Correct word is SUFFER",
      "Trap word is EVERLASTING -> Correct word is HEAVENLY"
    ],
    "correct_answer": "Trap word is FRIEND -> Correct word is SON",
    "explanation": "John 3:16 specifically declares that God gave His only begotten Son (Greek monogenes Huios), not friend.",
    "reference": "John 3:16",
    "metadata": {
      "stage": 4,
      "stage_title": "The Word Trap",
      "level_title": "Famous Verse Traps",
      "mechanic": "word_trap",
      "verse_text": "For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Moderate",
      "timerSeconds": 30,
      "points": 100,
      "trap_word": "FRIEND",
      "acceptedAlternatives": [
        "Trap word is FRIEND -> Correct word is SON",
        "FRIEND / SON",
        "Son"
      ],
      "hint1": "Look at the relation God gave for the world.",
      "hint2": "He gave His only begotten Son.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l16-c2",
    "game_slug": "verse-builder",
    "level": 16,
    "challenge_index": 2,
    "question_text": "Identify the incorrect trap word in this verse and choose the correct KJV replacement: \"The LORD is my KING; I shall not want.\"",
    "options": [
      "Trap word is KING -> Correct word is SHEPHERD",
      "Trap word is WANT -> Correct word is FEAR",
      "Trap word is SHALL -> Correct word is WILL",
      "Trap word is LORD -> Correct word is MASTER"
    ],
    "correct_answer": "Trap word is KING -> Correct word is SHEPHERD",
    "explanation": "Psalm 23:1 specifically uses the pastoral title: \"The LORD is my shepherd; I shall not want.\"",
    "reference": "Psalm 23:1",
    "metadata": {
      "stage": 4,
      "stage_title": "The Word Trap",
      "level_title": "Famous Verse Traps",
      "mechanic": "word_trap",
      "verse_text": "The LORD is my shepherd; I shall not want.",
      "translation": "KJV",
      "testament": "Old Testament",
      "difficulty": "Moderate",
      "timerSeconds": 30,
      "points": 100,
      "trap_word": "KING",
      "acceptedAlternatives": [
        "Trap word is KING -> Correct word is SHEPHERD",
        "KING / SHEPHERD",
        "shepherd"
      ],
      "hint1": "David was a shepherd boy and used that exact pastoral image.",
      "hint2": "The LORD is my shepherd.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l16-c3",
    "game_slug": "verse-builder",
    "level": 16,
    "challenge_index": 3,
    "question_text": "Identify the incorrect trap word in Romans 6:23: \"For the wages of DISOBEDIENCE is death; but the gift of God is eternal life through Jesus Christ our Lord.\"",
    "options": [
      "Trap word is DISOBEDIENCE -> Correct word is SIN",
      "Trap word is WAGES -> Correct word is FRUIT",
      "Trap word is GIFT -> Correct word is REWARD",
      "Trap word is ETERNAL -> Correct word is ABUNDANT"
    ],
    "correct_answer": "Trap word is DISOBEDIENCE -> Correct word is SIN",
    "explanation": "Romans 6:23 specifically uses the word \"sin\": \"For the wages of sin is death...\"",
    "reference": "Romans 6:23",
    "metadata": {
      "stage": 4,
      "stage_title": "The Word Trap",
      "level_title": "Famous Verse Traps",
      "mechanic": "word_trap",
      "verse_text": "For the wages of sin is death; but the gift of God is eternal life through Jesus Christ our Lord.",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Moderate",
      "timerSeconds": 30,
      "points": 100,
      "trap_word": "DISOBEDIENCE",
      "acceptedAlternatives": [
        "Trap word is DISOBEDIENCE -> Correct word is SIN",
        "sin"
      ],
      "hint1": "A three-letter word for moral rebellion against God.",
      "hint2": "Wages of sin.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l16-c4",
    "game_slug": "verse-builder",
    "level": 16,
    "challenge_index": 4,
    "question_text": "Identify the incorrect trap word in Proverbs 3:5: \"Trust in the LORD with all thine MIND; and lean not unto thine own understanding.\"",
    "options": [
      "Trap word is MIND -> Correct word is HEART",
      "Trap word is UNDERSTANDING -> Correct word is WISDOM",
      "Trap word is LEAN -> Correct word is DEPEND",
      "Trap word is TRUST -> Correct word is BELIEVE"
    ],
    "correct_answer": "Trap word is MIND -> Correct word is HEART",
    "explanation": "Proverbs 3:5 requires wholehearted reliance: \"Trust in the LORD with all thine heart; and lean not unto thine own understanding.\"",
    "reference": "Proverbs 3:5",
    "metadata": {
      "stage": 4,
      "stage_title": "The Word Trap",
      "level_title": "Famous Verse Traps",
      "mechanic": "word_trap",
      "verse_text": "Trust in the LORD with all thine heart; and lean not unto thine own understanding.",
      "translation": "KJV",
      "testament": "Old Testament",
      "difficulty": "Moderate",
      "timerSeconds": 30,
      "points": 100,
      "trap_word": "MIND",
      "acceptedAlternatives": [
        "Trap word is MIND -> Correct word is HEART",
        "heart"
      ],
      "hint1": "Hebrew lev refers to the inner core of man, translated \"heart\".",
      "hint2": "All thine heart.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l16-c5",
    "game_slug": "verse-builder",
    "level": 16,
    "challenge_index": 5,
    "question_text": "Identify the incorrect trap word in Genesis 1:1: \"In the beginning God created the heavens and HELL.\"",
    "options": [
      "Trap word is HELL -> Correct word is THE EARTH",
      "Trap word is BEGINNING -> Correct word is ORIGIN",
      "Trap word is HEAVENS -> Correct word is FIRMAMENT",
      "Trap word is CREATED -> Correct word is FORMED"
    ],
    "correct_answer": "Trap word is HELL -> Correct word is THE EARTH",
    "explanation": "Genesis 1:1 says: \"In the beginning God created the heaven and the earth.\"",
    "reference": "Genesis 1:1",
    "metadata": {
      "stage": 4,
      "stage_title": "The Word Trap",
      "level_title": "Famous Verse Traps",
      "mechanic": "word_trap",
      "verse_text": "In the beginning God created the heaven and the earth.",
      "translation": "KJV",
      "testament": "Old Testament",
      "difficulty": "Difficult",
      "timerSeconds": 30,
      "points": 150,
      "trap_word": "HELL",
      "acceptedAlternatives": [
        "Trap word is HELL -> Correct word is THE EARTH",
        "earth",
        "the earth"
      ],
      "hint1": "The original creation mentions heaven and earth, not hell.",
      "hint2": "heaven and the earth.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l17-c1",
    "game_slug": "verse-builder",
    "level": 17,
    "challenge_index": 1,
    "question_text": "Spot the false word substituted in Ephesians 2:8: \"For by WORKS are ye saved through faith; and that not of yourselves: it is the gift of God:\"",
    "options": [
      "Trap word is WORKS -> Correct word is GRACE",
      "Trap word is FAITH -> Correct word is HOPE",
      "Trap word is GIFT -> Correct word is BLESSING",
      "Trap word is SAVED -> Correct word is JUSTIFIED"
    ],
    "correct_answer": "Trap word is WORKS -> Correct word is GRACE",
    "explanation": "Ephesians 2:8 explicitly contradicts works-salvation: \"For by grace are ye saved through faith...\" Works are excluded in verse 9.",
    "reference": "Ephesians 2:8",
    "metadata": {
      "stage": 4,
      "stage_title": "The Word Trap",
      "level_title": "Theological Subtle Traps",
      "mechanic": "word_trap",
      "verse_text": "For by grace are ye saved through faith; and that not of yourselves: it is the gift of God:",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Moderate",
      "timerSeconds": 30,
      "points": 100,
      "trap_word": "WORKS",
      "acceptedAlternatives": [
        "Trap word is WORKS -> Correct word is GRACE",
        "grace"
      ],
      "hint1": "Unmerited divine favor, not human achievement.",
      "hint2": "By grace are ye saved.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l17-c2",
    "game_slug": "verse-builder",
    "level": 17,
    "challenge_index": 2,
    "question_text": "Spot the false word in Romans 5:8: \"But God commendeth his love toward us, in that, while we were yet RIGHTEOUS, Christ died for us.\"",
    "options": [
      "Trap word is RIGHTEOUS -> Correct word is SINNERS",
      "Trap word is LOVE -> Correct word is MERCY",
      "Trap word is DIED -> Correct word is SUFFERED",
      "Trap word is COMMENDETH -> Correct word is SHOWED"
    ],
    "correct_answer": "Trap word is RIGHTEOUS -> Correct word is SINNERS",
    "explanation": "Romans 5:8 emphasizes that Christ died for ungodly sinners, not righteous people: \"...while we were yet sinners, Christ died for us.\"",
    "reference": "Romans 5:8",
    "metadata": {
      "stage": 4,
      "stage_title": "The Word Trap",
      "level_title": "Theological Subtle Traps",
      "mechanic": "word_trap",
      "verse_text": "But God commendeth his love toward us, in that, while we were yet sinners, Christ died for us.",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Moderate",
      "timerSeconds": 30,
      "points": 100,
      "trap_word": "RIGHTEOUS",
      "acceptedAlternatives": [
        "Trap word is RIGHTEOUS -> Correct word is SINNERS",
        "sinners"
      ],
      "hint1": "Christ came not to call the righteous, but sinners to repentance.",
      "hint2": "While we were yet sinners.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l17-c3",
    "game_slug": "verse-builder",
    "level": 17,
    "challenge_index": 3,
    "question_text": "Spot the false word in 1 Timothy 2:5: \"For there is one God, and THREE mediators between God and men, the man Christ Jesus;\"",
    "options": [
      "Trap word is THREE -> Correct word is ONE",
      "Trap word is MAN -> Correct word is PROPHET",
      "Trap word is GOD -> Correct word is CREATOR",
      "Trap word is MEDIATORS -> Correct word is INTERCESSORS"
    ],
    "correct_answer": "Trap word is THREE -> Correct word is ONE",
    "explanation": "1 Timothy 2:5 asserts absolute monotheism and sole mediatorship: \"For there is one God, and one mediator between God and men, the man Christ Jesus;\"",
    "reference": "1 Timothy 2:5",
    "metadata": {
      "stage": 4,
      "stage_title": "The Word Trap",
      "level_title": "Theological Subtle Traps",
      "mechanic": "word_trap",
      "verse_text": "For there is one God, and one mediator between God and men, the man Christ Jesus;",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Moderate",
      "timerSeconds": 30,
      "points": 100,
      "trap_word": "THREE",
      "acceptedAlternatives": [
        "Trap word is THREE -> Correct word is ONE",
        "one"
      ],
      "hint1": "There is only a single mediator between holy God and man.",
      "hint2": "one mediator.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l17-c4",
    "game_slug": "verse-builder",
    "level": 17,
    "challenge_index": 4,
    "question_text": "Spot the subtle alteration in John 14:6: \"Jesus saith unto him, I am A way, A truth, and A life: no man cometh unto the Father, but by me.\"",
    "options": [
      "Trap is the indefinite article \"A\" -> Correct KJV uses the definite article \"THE\"",
      "Trap is \"NO MAN\" -> Correct KJV uses \"FEW MEN\"",
      "Trap is \"FATHER\" -> Correct KJV uses \"HEAVEN\"",
      "Trap is \"COMETH\" -> Correct KJV uses \"ASCENDETH\""
    ],
    "correct_answer": "Trap is the indefinite article \"A\" -> Correct KJV uses the definite article \"THE\"",
    "explanation": "John 14:6 asserts exclusive definiteness: \"I am the way, the truth, and the life,\" rejecting pluralistic claims.",
    "reference": "John 14:6",
    "metadata": {
      "stage": 4,
      "stage_title": "The Word Trap",
      "level_title": "Theological Subtle Traps",
      "mechanic": "word_trap",
      "verse_text": "Jesus saith unto him, I am the way, the truth, and the life: no man cometh unto the Father, but by me.",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Difficult",
      "timerSeconds": 35,
      "points": 150,
      "trap_word": "A",
      "acceptedAlternatives": [
        "Trap is the indefinite article \"A\" -> Correct KJV uses the definite article \"THE\"",
        "the",
        "THE"
      ],
      "hint1": "Notice the definite articles in Greek and KJV.",
      "hint2": "THE way, THE truth, and THE life.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l17-c5",
    "game_slug": "verse-builder",
    "level": 17,
    "challenge_index": 5,
    "question_text": "Identify the incorrect trap word in Hebrews 11:1: \"Now HOPE is the substance of things hoped for, the evidence of things not seen.\"",
    "options": [
      "Trap word is HOPE -> Correct word is FAITH",
      "Trap word is EVIDENCE -> Correct word is PROOF",
      "Trap word is SUBSTANCE -> Correct word is ASSURANCE",
      "Trap word is SEEN -> Correct word is KNOWN"
    ],
    "correct_answer": "Trap word is HOPE -> Correct word is FAITH",
    "explanation": "Hebrews 11:1 defines faith, not hope: \"Now faith is the substance of things hoped for, the evidence of things not seen.\"",
    "reference": "Hebrews 11:1",
    "metadata": {
      "stage": 4,
      "stage_title": "The Word Trap",
      "level_title": "Theological Subtle Traps",
      "mechanic": "word_trap",
      "verse_text": "Now faith is the substance of things hoped for, the evidence of things not seen.",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Difficult",
      "timerSeconds": 35,
      "points": 150,
      "trap_word": "HOPE",
      "acceptedAlternatives": [
        "Trap word is HOPE -> Correct word is FAITH",
        "faith"
      ],
      "hint1": "The great chapter of faith begins with this definition.",
      "hint2": "Now faith is the substance.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l18-c1",
    "game_slug": "verse-builder",
    "level": 18,
    "challenge_index": 1,
    "question_text": "Which modern synonym has replaced the exact KJV verb in Philippians 4:13: \"I can do all things through Christ which EMPOWERETH me.\"",
    "options": [
      "Trap word is EMPOWERETH -> Correct KJV word is STRENGTHENETH",
      "Trap word is DO -> Correct KJV word is BEAR",
      "Trap word is ALL -> Correct KJV word is GREAT",
      "Trap word is THROUGH -> Correct KJV word is IN"
    ],
    "correct_answer": "Trap word is EMPOWERETH -> Correct KJV word is STRENGTHENETH",
    "explanation": "Philippians 4:13 in the KJV specifically renders the Greek endunamounti as \"strengtheneth me\".",
    "reference": "Philippians 4:13",
    "metadata": {
      "stage": 4,
      "stage_title": "The Word Trap",
      "level_title": "Synonyms vs Exact KJV",
      "mechanic": "word_trap",
      "verse_text": "I can do all things through Christ which strengtheneth me.",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Moderate",
      "timerSeconds": 30,
      "points": 100,
      "trap_word": "EMPOWERETH",
      "acceptedAlternatives": [
        "Trap word is EMPOWERETH -> Correct KJV word is STRENGTHENETH",
        "strengtheneth"
      ],
      "hint1": "KJV uses the root \"strength\" with the archaic suffix -eth.",
      "hint2": "strengtheneth me.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l18-c2",
    "game_slug": "verse-builder",
    "level": 18,
    "challenge_index": 2,
    "question_text": "Which word in Proverbs 16:18 has been substituted with an incorrect synonym? \"Pride goeth before A FALL, and an haughty spirit before DESTRUCTION.\"",
    "options": [
      "The two outcomes are inverted: Pride goes before DESTRUCTION, haughty spirit before a FALL",
      "Trap is PRIDE -> Correct word is VAINGLORY",
      "Trap is HAUGHTY -> Correct word is ARROGANT",
      "Trap is SPIRIT -> Correct word is HEART"
    ],
    "correct_answer": "The two outcomes are inverted: Pride goes before DESTRUCTION, haughty spirit before a FALL",
    "explanation": "In Proverbs 16:18: \"Pride goeth before destruction, and an haughty spirit before a fall.\" Destruction accompanies pride, and fall accompanies the haughty spirit.",
    "reference": "Proverbs 16:18",
    "metadata": {
      "stage": 4,
      "stage_title": "The Word Trap",
      "level_title": "Synonyms vs Exact KJV",
      "mechanic": "word_trap",
      "verse_text": "Pride goeth before destruction, and an haughty spirit before a fall.",
      "translation": "KJV",
      "testament": "Old Testament",
      "difficulty": "Difficult",
      "timerSeconds": 35,
      "points": 150,
      "trap_word": "INVERTED",
      "acceptedAlternatives": [
        "The two outcomes are inverted: Pride goes before DESTRUCTION, haughty spirit before a FALL",
        "destruction... fall"
      ],
      "hint1": "Notice the exact sequence: destruction comes first in the verse.",
      "hint2": "Pride goeth before destruction.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l18-c3",
    "game_slug": "verse-builder",
    "level": 18,
    "challenge_index": 3,
    "question_text": "What exact KJV phrase was replaced in Matthew 5:3? \"Blessed are the HUMBLE: for theirs is the kingdom of heaven.\"",
    "options": [
      "Trap is HUMBLE -> Correct KJV phrase is POOR IN SPIRIT",
      "Trap is HEAVEN -> Correct KJV phrase is GOD",
      "Trap is THEIRS -> Correct KJV phrase is OURS",
      "Trap is BLESSED -> Correct KJV phrase is HAPPY"
    ],
    "correct_answer": "Trap is HUMBLE -> Correct KJV phrase is POOR IN SPIRIT",
    "explanation": "Matthew 5:3 says: \"Blessed are the poor in spirit: for theirs is the kingdom of heaven.\" \"Poor in spirit\" acknowledges utter spiritual bankruptcy before God.",
    "reference": "Matthew 5:3",
    "metadata": {
      "stage": 4,
      "stage_title": "The Word Trap",
      "level_title": "Synonyms vs Exact KJV",
      "mechanic": "word_trap",
      "verse_text": "Blessed are the poor in spirit: for theirs is the kingdom of heaven.",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Moderate",
      "timerSeconds": 30,
      "points": 100,
      "trap_word": "HUMBLE",
      "acceptedAlternatives": [
        "Trap is HUMBLE -> Correct KJV phrase is POOR IN SPIRIT",
        "poor in spirit"
      ],
      "hint1": "Three words conveying spiritual poverty.",
      "hint2": "poor in spirit.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l18-c4",
    "game_slug": "verse-builder",
    "level": 18,
    "challenge_index": 4,
    "question_text": "Identify the synonym replacement in Psalm 119:105: \"Thy word is a CANDLE unto my feet, and a light unto my path.\"",
    "options": [
      "Trap word is CANDLE -> Correct KJV word is LAMP",
      "Trap word is FEET -> Correct KJV word is STEPS",
      "Trap word is LIGHT -> Correct KJV word is TORCH",
      "Trap word is PATH -> Correct KJV word is WAY"
    ],
    "correct_answer": "Trap word is CANDLE -> Correct KJV word is LAMP",
    "explanation": "Psalm 119:105 uses \"lamp\" (Hebrew ner): \"Thy word is a lamp unto my feet, and a light unto my path.\"",
    "reference": "Psalm 119:105",
    "metadata": {
      "stage": 4,
      "stage_title": "The Word Trap",
      "level_title": "Synonyms vs Exact KJV",
      "mechanic": "word_trap",
      "verse_text": "Thy word is a lamp unto my feet, and a light unto my path.",
      "translation": "KJV",
      "testament": "Old Testament",
      "difficulty": "Moderate",
      "timerSeconds": 30,
      "points": 100,
      "trap_word": "CANDLE",
      "acceptedAlternatives": [
        "Trap word is CANDLE -> Correct KJV word is LAMP",
        "lamp"
      ],
      "hint1": "Four-letter oil vessel.",
      "hint2": "lamp unto my feet.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l18-c5",
    "game_slug": "verse-builder",
    "level": 18,
    "challenge_index": 5,
    "question_text": "Spot the trap in Galatians 2:20: \"I am EXECUTED with Christ: nevertheless I live; yet not I, but Christ liveth in me...\"",
    "options": [
      "Trap word is EXECUTED -> Correct KJV word is CRUCIFIED",
      "Trap word is LIVE -> Correct KJV word is ABIDE",
      "Trap word is LIVETH -> Correct KJV word is REIGNETH",
      "Trap word is NEVERTHELESS -> Correct KJV word is HOWBEIT"
    ],
    "correct_answer": "Trap word is EXECUTED -> Correct KJV word is CRUCIFIED",
    "explanation": "Galatians 2:20 specifically speaks of co-crucifixion: \"I am crucified with Christ: nevertheless I live; yet not I, but Christ liveth in me...\"",
    "reference": "Galatians 2:20",
    "metadata": {
      "stage": 4,
      "stage_title": "The Word Trap",
      "level_title": "Synonyms vs Exact KJV",
      "mechanic": "word_trap",
      "verse_text": "I am crucified with Christ: nevertheless I live; yet not I, but Christ liveth in me: and the life which I now live in the flesh I live by the faith of the Son of God, who loved me, and gave himself for me.",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Difficult",
      "timerSeconds": 35,
      "points": 150,
      "trap_word": "EXECUTED",
      "acceptedAlternatives": [
        "Trap word is EXECUTED -> Correct KJV word is CRUCIFIED",
        "crucified"
      ],
      "hint1": "The specific Roman execution method of Jesus Christ.",
      "hint2": "I am crucified with Christ.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l19-c1",
    "game_slug": "verse-builder",
    "level": 19,
    "challenge_index": 1,
    "question_text": "Spot the false word in the First Commandment (Exodus 20:3): \"Thou shalt have no other gods BEFORE MY FACE.\"",
    "options": [
      "Trap is \"BEFORE MY FACE\" -> Correct KJV is \"BEFORE ME\"",
      "Trap is \"OTHER\" -> Correct KJV is \"STRANGE\"",
      "Trap is \"SHALT\" -> Correct KJV is \"MAYEST\"",
      "Trap is \"GODS\" -> Correct KJV is \"IDOLS\""
    ],
    "correct_answer": "Trap is \"BEFORE MY FACE\" -> Correct KJV is \"BEFORE ME\"",
    "explanation": "Exodus 20:3 gives the concise command: \"Thou shalt have no other gods before me.\"",
    "reference": "Exodus 20:3",
    "metadata": {
      "stage": 4,
      "stage_title": "The Word Trap",
      "level_title": "Difficult Narrative Traps",
      "mechanic": "word_trap",
      "verse_text": "Thou shalt have no other gods before me.",
      "translation": "KJV",
      "testament": "Old Testament",
      "difficulty": "Moderate",
      "timerSeconds": 30,
      "points": 100,
      "trap_word": "BEFORE MY FACE",
      "acceptedAlternatives": [
        "Trap is \"BEFORE MY FACE\" -> Correct KJV is \"BEFORE ME\"",
        "before me"
      ],
      "hint1": "KJV uses just two words: preposition + pronoun.",
      "hint2": "before me.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l19-c2",
    "game_slug": "verse-builder",
    "level": 19,
    "challenge_index": 2,
    "question_text": "Identify the altered word in Joshua's covenant declaration (Joshua 24:15): \"but as for me and my TRIBE, we will serve the LORD.\"",
    "options": [
      "Trap word is TRIBE -> Correct KJV word is HOUSE",
      "Trap word is SERVE -> Correct KJV word is WORSHIP",
      "Trap word is LORD -> Correct KJV word is GOD",
      "Trap word is BUT -> Correct KJV word is YET"
    ],
    "correct_answer": "Trap word is TRIBE -> Correct KJV word is HOUSE",
    "explanation": "Joshua 24:15 commits Joshua's household: \"...but as for me and my house, we will serve the LORD.\"",
    "reference": "Joshua 24:15",
    "metadata": {
      "stage": 4,
      "stage_title": "The Word Trap",
      "level_title": "Difficult Narrative Traps",
      "mechanic": "word_trap",
      "verse_text": "And if it seem evil unto you to serve the LORD, choose you this day whom ye will serve; whether the gods which your fathers served that were on the other side of the flood, or the gods of the Amorites, in whose land ye dwell: but as for me and my house, we will serve the LORD.",
      "translation": "KJV",
      "testament": "Old Testament",
      "difficulty": "Moderate",
      "timerSeconds": 30,
      "points": 100,
      "trap_word": "TRIBE",
      "acceptedAlternatives": [
        "Trap word is TRIBE -> Correct KJV word is HOUSE",
        "house"
      ],
      "hint1": "Refers to immediate domestic family.",
      "hint2": "me and my house.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l19-c3",
    "game_slug": "verse-builder",
    "level": 19,
    "challenge_index": 3,
    "question_text": "Spot the trap in Micah 6:8: \"to do justly, and to love mercy, and to walk PROUDLY with thy God.\"",
    "options": [
      "Trap word is PROUDLY -> Correct KJV word is HUMBLY",
      "Trap word is JUSTLY -> Correct KJV word is RIGHTEOUSLY",
      "Trap word is LOVE -> Correct KJV word is CHERISH",
      "Trap word is MERCY -> Correct KJV word is GRACE"
    ],
    "correct_answer": "Trap word is PROUDLY -> Correct KJV word is HUMBLY",
    "explanation": "Micah 6:8 demands: \"...and to walk humbly with thy God.\"",
    "reference": "Micah 6:8",
    "metadata": {
      "stage": 4,
      "stage_title": "The Word Trap",
      "level_title": "Difficult Narrative Traps",
      "mechanic": "word_trap",
      "verse_text": "He hath shewed thee, O man, what is good; and what doth the LORD require of thee, but to do justly, and to love mercy, and to walk humbly with thy God?",
      "translation": "KJV",
      "testament": "Old Testament",
      "difficulty": "Moderate",
      "timerSeconds": 30,
      "points": 100,
      "trap_word": "PROUDLY",
      "acceptedAlternatives": [
        "Trap word is PROUDLY -> Correct KJV word is HUMBLY",
        "humbly"
      ],
      "hint1": "Opposite of pride and arrogance.",
      "hint2": "walk humbly.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l19-c4",
    "game_slug": "verse-builder",
    "level": 19,
    "challenge_index": 4,
    "question_text": "Spot the trap in 1 Peter 5:8: \"Be sober, be vigilant; because your adversary the devil, as a roaring BEAR, walketh about, seeking whom he may devour:\"",
    "options": [
      "Trap word is BEAR -> Correct KJV word is LION",
      "Trap word is DEVIL -> Correct KJV word is SATAN",
      "Trap word is VIGILANT -> Correct KJV word is WATCHFUL",
      "Trap word is DEVOUR -> Correct KJV word is DESTROY"
    ],
    "correct_answer": "Trap word is BEAR -> Correct KJV word is LION",
    "explanation": "1 Peter 5:8 uses the roaring predator metaphor: \"...as a roaring lion, walketh about, seeking whom he may devour:\"",
    "reference": "1 Peter 5:8",
    "metadata": {
      "stage": 4,
      "stage_title": "The Word Trap",
      "level_title": "Difficult Narrative Traps",
      "mechanic": "word_trap",
      "verse_text": "Be sober, be vigilant; because your adversary the devil, as a roaring lion, walketh about, seeking whom he may devour:",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Moderate",
      "timerSeconds": 30,
      "points": 100,
      "trap_word": "BEAR",
      "acceptedAlternatives": [
        "Trap word is BEAR -> Correct KJV word is LION",
        "lion"
      ],
      "hint1": "The king of beasts.",
      "hint2": "as a roaring lion.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l19-c5",
    "game_slug": "verse-builder",
    "level": 19,
    "challenge_index": 5,
    "question_text": "Spot the trap in Revelation 3:20: \"Behold, I stand at the WINDOW, and knock: if any man hear my voice, and open the door, I will come in to him...\"",
    "options": [
      "Trap word is WINDOW -> Correct KJV word is DOOR",
      "Trap word is KNOCK -> Correct KJV word is CALL",
      "Trap word is VOICE -> Correct KJV word is CRY",
      "Trap word is OPEN -> Correct KJV word is UNLOCK"
    ],
    "correct_answer": "Trap word is WINDOW -> Correct KJV word is DOOR",
    "explanation": "Revelation 3:20 says: \"Behold, I stand at the door, and knock: if any man hear my voice, and open the door, I will come in to him...\"",
    "reference": "Revelation 3:20",
    "metadata": {
      "stage": 4,
      "stage_title": "The Word Trap",
      "level_title": "Difficult Narrative Traps",
      "mechanic": "word_trap",
      "verse_text": "Behold, I stand at the door, and knock: if any man hear my voice, and open the door, I will come in to him, and will sup with him, and he with me.",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Difficult",
      "timerSeconds": 35,
      "points": 150,
      "trap_word": "WINDOW",
      "acceptedAlternatives": [
        "Trap word is WINDOW -> Correct KJV word is DOOR",
        "door"
      ],
      "hint1": "Entrance of a house where one knocks.",
      "hint2": "stand at the door.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l20-c1",
    "game_slug": "verse-builder",
    "level": 20,
    "challenge_index": 1,
    "question_text": "Spot the trap in Isaiah 53:6: \"All we like CATTLE have gone astray; we have turned every one to his own way; and the LORD hath laid on him the iniquity of us all.\"",
    "options": [
      "Trap word is CATTLE -> Correct KJV word is SHEEP",
      "Trap word is ASTRAY -> Correct KJV word is ASIDE",
      "Trap word is INIQUITY -> Correct KJV word is SINS",
      "Trap word is TURNED -> Correct KJV word is WANDERED"
    ],
    "correct_answer": "Trap word is CATTLE -> Correct KJV word is SHEEP",
    "explanation": "Isaiah 53:6 compares human waywardness to sheep: \"All we like sheep have gone astray...\"",
    "reference": "Isaiah 53:6",
    "metadata": {
      "stage": 4,
      "stage_title": "The Word Trap",
      "level_title": "Forensic Trap Buster",
      "mechanic": "word_trap",
      "verse_text": "All we like sheep have gone astray; we have turned every one to his own way; and the LORD hath laid on him the iniquity of us all.",
      "translation": "KJV",
      "testament": "Old Testament",
      "difficulty": "Difficult",
      "timerSeconds": 35,
      "points": 150,
      "trap_word": "CATTLE",
      "acceptedAlternatives": [
        "Trap word is CATTLE -> Correct KJV word is SHEEP",
        "sheep"
      ],
      "hint1": "Flock animals prone to wander without a shepherd.",
      "hint2": "All we like sheep.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l20-c2",
    "game_slug": "verse-builder",
    "level": 20,
    "challenge_index": 2,
    "question_text": "Spot the trap in Romans 8:1: \"There is therefore now no condemnation to them which are in JERUSALEM, who walk not after the flesh, but after the Spirit.\"",
    "options": [
      "Trap word is JERUSALEM -> Correct KJV phrase is CHRIST JESUS",
      "Trap word is CONDEMNATION -> Correct KJV word is JUDGMENT",
      "Trap word is FLESH -> Correct KJV word is WORLD",
      "Trap word is SPIRIT -> Correct KJV word is LAW"
    ],
    "correct_answer": "Trap word is JERUSALEM -> Correct KJV phrase is CHRIST JESUS",
    "explanation": "Romans 8:1 grounds believers' freedom from condemnation in Christ: \"...to them which are in Christ Jesus, who walk not after the flesh, but after the Spirit.\"",
    "reference": "Romans 8:1",
    "metadata": {
      "stage": 4,
      "stage_title": "The Word Trap",
      "level_title": "Forensic Trap Buster",
      "mechanic": "word_trap",
      "verse_text": "There is therefore now no condemnation to them which are in Christ Jesus, who walk not after the flesh, but after the Spirit.",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Difficult",
      "timerSeconds": 35,
      "points": 150,
      "trap_word": "JERUSALEM",
      "acceptedAlternatives": [
        "Trap word is JERUSALEM -> Correct KJV phrase is CHRIST JESUS",
        "Christ Jesus"
      ],
      "hint1": "The spiritual location of believers is in our Lord.",
      "hint2": "in Christ Jesus.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l20-c3",
    "game_slug": "verse-builder",
    "level": 20,
    "challenge_index": 3,
    "question_text": "Spot the trap in 2 Timothy 3:16: \"All scripture is INSPIRED BY APOSTLES, and is profitable for doctrine, for reproof, for correction, for instruction in righteousness:\"",
    "options": [
      "Trap phrase is INSPIRED BY APOSTLES -> Correct KJV is GIVEN BY INSPIRATION OF GOD",
      "Trap word is DOCTRINE -> Correct KJV word is TEACHING",
      "Trap word is REPROOF -> Correct KJV word is WARNING",
      "Trap word is PROFITABLE -> Correct KJV word is USEFUL"
    ],
    "correct_answer": "Trap phrase is INSPIRED BY APOSTLES -> Correct KJV is GIVEN BY INSPIRATION OF GOD",
    "explanation": "2 Timothy 3:16 in the KJV renders the Greek theopneustos as \"given by inspiration of God\".",
    "reference": "2 Timothy 3:16",
    "metadata": {
      "stage": 4,
      "stage_title": "The Word Trap",
      "level_title": "Forensic Trap Buster",
      "mechanic": "word_trap",
      "verse_text": "All scripture is given by inspiration of God, and is profitable for doctrine, for reproof, for correction, for instruction in righteousness:",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Expert",
      "timerSeconds": 40,
      "points": 200,
      "trap_word": "INSPIRED BY APOSTLES",
      "acceptedAlternatives": [
        "Trap phrase is INSPIRED BY APOSTLES -> Correct KJV is GIVEN BY INSPIRATION OF GOD",
        "given by inspiration of God"
      ],
      "hint1": "God-breathed divine origin of all Holy Scripture.",
      "hint2": "given by inspiration of God.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l20-c4",
    "game_slug": "verse-builder",
    "level": 20,
    "challenge_index": 4,
    "question_text": "Spot the trap in 1 Corinthians 15:55: \"O death, where is thy sting? O grave, where is thy CROWN?\"",
    "options": [
      "Trap word is CROWN -> Correct KJV word is VICTORY",
      "Trap word is STING -> Correct KJV word is DART",
      "Trap word is DEATH -> Correct KJV word is SATAN",
      "Trap word is GRAVE -> Correct KJV word is HADES"
    ],
    "correct_answer": "Trap word is CROWN -> Correct KJV word is VICTORY",
    "explanation": "1 Corinthians 15:55 quotes the prophetic taunt: \"O death, where is thy sting? O grave, where is thy victory?\"",
    "reference": "1 Corinthians 15:55",
    "metadata": {
      "stage": 4,
      "stage_title": "The Word Trap",
      "level_title": "Forensic Trap Buster",
      "mechanic": "word_trap",
      "verse_text": "O death, where is thy sting? O grave, where is thy victory?",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Difficult",
      "timerSeconds": 35,
      "points": 150,
      "trap_word": "CROWN",
      "acceptedAlternatives": [
        "Trap word is CROWN -> Correct KJV word is VICTORY",
        "victory"
      ],
      "hint1": "Greek nikos, rendered victory.",
      "hint2": "where is thy victory?",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l20-c5",
    "game_slug": "verse-builder",
    "level": 20,
    "challenge_index": 5,
    "question_text": "Spot the trap in Malachi 3:10: \"Bring ye all the GOLD into the storehouse, that there may be meat in mine house, and prove me now herewith, saith the LORD of hosts...\"",
    "options": [
      "Trap word is GOLD -> Correct KJV word is TITHES",
      "Trap word is STOREHOUSE -> Correct KJV word is TEMPLE",
      "Trap word is MEAT -> Correct KJV word is BREAD",
      "Trap word is PROVE -> Correct KJV word is TEST"
    ],
    "correct_answer": "Trap word is GOLD -> Correct KJV word is TITHES",
    "explanation": "Malachi 3:10 challenges Israel concerning their offerings: \"Bring ye all the tithes into the storehouse, that there may be meat in mine house...\"",
    "reference": "Malachi 3:10",
    "metadata": {
      "stage": 4,
      "stage_title": "The Word Trap",
      "level_title": "Forensic Trap Buster",
      "mechanic": "word_trap",
      "verse_text": "Bring ye all the tithes into the storehouse, that there may be meat in mine house, and prove me now herewith, saith the LORD of hosts, if I will not open you the windows of heaven, and pour you out a blessing, that there shall not be room enough to receive it.",
      "translation": "KJV",
      "testament": "Old Testament",
      "difficulty": "Expert",
      "timerSeconds": 40,
      "points": 200,
      "trap_word": "GOLD",
      "acceptedAlternatives": [
        "Trap word is GOLD -> Correct KJV word is TITHES",
        "tithes"
      ],
      "hint1": "Tenth part consecrated to the Lord and the Levites.",
      "hint2": "Bring ye all the tithes.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l21-c1",
    "game_slug": "verse-builder",
    "level": 21,
    "challenge_index": 1,
    "question_text": "What phrase continues Proverbs 3:5? \"Trust in the LORD with all thine heart; and lean not...\"",
    "options": [
      "unto thine own understanding.",
      "upon the arm of flesh.",
      "into the counsel of the ungodly.",
      "toward the deceit of riches."
    ],
    "correct_answer": "unto thine own understanding.",
    "explanation": "Proverbs 3:5 instructs the believer: \"Trust in the LORD with all thine heart; and lean not unto thine own understanding.\"",
    "reference": "Proverbs 3:5",
    "metadata": {
      "stage": 5,
      "stage_title": "Scripture Continuation",
      "level_title": "Proverbial Continuations",
      "mechanic": "what_comes_next",
      "verse_text": "Trust in the LORD with all thine heart; and lean not unto thine own understanding.",
      "translation": "KJV",
      "testament": "Old Testament",
      "difficulty": "Moderate",
      "timerSeconds": 30,
      "points": 100,
      "is_typed": false,
      "acceptedAlternatives": [
        "unto thine own understanding.",
        "unto thine own understanding"
      ],
      "hint1": "Warns against depending on human rationale.",
      "hint2": "unto thine own...",
      "curated": true
    }
  },
    {
    "id": "verse-builder-l21-c2",
    "game_slug": "verse-builder",
    "level": 21,
    "challenge_index": 2,
    "question_text": "What phrase completes Psalm 34:18? \"The LORD is nigh unto them that are of a broken heart; and...\"",
    "options": [
      "saveth such as be of a contrite spirit",
      "giveth grace unto the humble",
      "heareth the prayer of the righteous",
      "delivereth them from all their fears"
    ],
    "correct_answer": "saveth such as be of a contrite spirit",
    "explanation": "Psalm 34:18 (KJV) says that the LORD is near to the broken-hearted and saves those with a contrite spirit.",
    "reference": "Psalm 34:18",
    "metadata": {
      "stage": 5,
      "stage_title": "Scripture Continuation",
      "level_title": "Proverbial Continuations",
      "mechanic": "what_comes_next",
      "verse_text": "The LORD is nigh unto them that are of a broken heart; and saveth such as be of a contrite spirit.",
      "translation": "KJV",
      "testament": "Old Testament",
      "difficulty": "Moderate",
      "timerSeconds": 30,
      "points": 100,
      "is_typed": false,
      "acceptedAlternatives": [
        "saveth such as be of a contrite spirit"
      ],
      "hint1": "Those whose hearts are contrite.",
      "hint2": "The phrase follows the semicolon in Psalm 34:18.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l21-c3",
    "game_slug": "verse-builder",
    "level": 21,
    "challenge_index": 3,
    "question_text": "What phrase completes Proverbs 27:17? \"Iron sharpeneth iron; so a man...\"",
    "options": [
      "sharpeneth the countenance of his friend.",
      "increaseth in wisdom through counsel.",
      "buildeth up his brother in love.",
      "strengtheneth the hands of his neighbor."
    ],
    "correct_answer": "sharpeneth the countenance of his friend.",
    "explanation": "Proverbs 27:17 uses the blacksmith metaphor: \"Iron sharpeneth iron; so a man sharpeneth the countenance of his friend.\"",
    "reference": "Proverbs 27:17",
    "metadata": {
      "stage": 5,
      "stage_title": "Scripture Continuation",
      "level_title": "Proverbial Continuations",
      "mechanic": "what_comes_next",
      "verse_text": "Iron sharpeneth iron; so a man sharpeneth the countenance of his friend.",
      "translation": "KJV",
      "testament": "Old Testament",
      "difficulty": "Moderate",
      "timerSeconds": 35,
      "points": 100,
      "is_typed": false,
      "acceptedAlternatives": [
        "sharpeneth the countenance of his friend."
      ],
      "hint1": "The face and mutual fellowship of friends.",
      "hint2": "sharpeneth the countenance...",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l21-c4",
    "game_slug": "verse-builder",
    "level": 21,
    "challenge_index": 4,
    "question_text": "Type the phrase that completes Proverbs 16:3: \"Commit thy works unto the LORD, and thy ______ ______ ______ ______.\"",
    "options": [],
    "correct_answer": "thoughts shall be established",
    "explanation": "Proverbs 16:3 links committed deeds with established plans: \"Commit thy works unto the LORD, and thy thoughts shall be established.\"",
    "reference": "Proverbs 16:3",
    "metadata": {
      "stage": 5,
      "stage_title": "Scripture Continuation",
      "level_title": "Proverbial Continuations",
      "mechanic": "build_without_options",
      "verse_text": "Commit thy works unto the LORD, and thy thoughts shall be established.",
      "translation": "KJV",
      "testament": "Old Testament",
      "difficulty": "Difficult",
      "timerSeconds": 40,
      "points": 150,
      "is_typed": true,
      "acceptedAlternatives": [
        "thoughts shall be established",
        "thoughts shall be established."
      ],
      "hint1": "Your plans and deliberations will be set firm.",
      "hint2": "thoughts shall be established.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l21-c5",
    "game_slug": "verse-builder",
    "level": 21,
    "challenge_index": 5,
    "question_text": "What continuation completes Proverbs 22:1? \"A good name is rather to be chosen than great riches, and...\"",
    "options": [
      "loving favour rather than silver and gold.",
      "wisdom rather than jewels of price.",
      "an upright heart rather than fine pearls.",
      "honour rather than all treasures."
    ],
    "correct_answer": "loving favour rather than silver and gold.",
    "explanation": "Proverbs 22:1 values character and grace over precious metals: \"A good name is rather to be chosen than great riches, and loving favour rather than silver and gold.\"",
    "reference": "Proverbs 22:1",
    "metadata": {
      "stage": 5,
      "stage_title": "Scripture Continuation",
      "level_title": "Proverbial Continuations",
      "mechanic": "what_comes_next",
      "verse_text": "A good name is rather to be chosen than great riches, and loving favour rather than silver and gold.",
      "translation": "KJV",
      "testament": "Old Testament",
      "difficulty": "Difficult",
      "timerSeconds": 35,
      "points": 150,
      "is_typed": false,
      "acceptedAlternatives": [
        "loving favour rather than silver and gold."
      ],
      "hint1": "Warm regard from God and man over silver and gold.",
      "hint2": "loving favour rather than...",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l22-c1",
    "game_slug": "verse-builder",
    "level": 22,
    "challenge_index": 1,
    "question_text": "What command continues Jesus' words in Matthew 5:44? \"Love your enemies, bless them that curse you, do good to them that hate you, and...\"",
    "options": [
      "pray for them which despitefully use you, and persecute you;",
      "forgive them seventy times seven in your heart;",
      "overcome their evil with loving kindness;",
      "turn to them the other cheek also;"
    ],
    "correct_answer": "pray for them which despitefully use you, and persecute you;",
    "explanation": "Matthew 5:44 commands intercessory love for abusers: \"...and pray for them which despitefully use you, and persecute you;\"",
    "reference": "Matthew 5:44",
    "metadata": {
      "stage": 5,
      "stage_title": "Scripture Continuation",
      "level_title": "Gospel Continuations",
      "mechanic": "what_comes_next",
      "verse_text": "But I say unto you, Love your enemies, bless them that curse you, do good to them that hate you, and pray for them which despitefully use you, and persecute you;",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Moderate",
      "timerSeconds": 35,
      "points": 100,
      "is_typed": false,
      "acceptedAlternatives": [
        "pray for them which despitefully use you, and persecute you;",
        "pray for them which despitefully use you and persecute you"
      ],
      "hint1": "Intercession for spiteful persecutors.",
      "hint2": "pray for them which despitefully use you...",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l22-c2",
    "game_slug": "verse-builder",
    "level": 22,
    "challenge_index": 2,
    "question_text": "What completes the tri-fold promise in Matthew 7:7? \"Ask, and it shall be given you; seek, and ye shall find; knock, and...\"",
    "options": [
      "it shall be opened unto you:",
      "ye shall enter into life:",
      "the door shall be made wide:",
      "God shall answer from heaven:"
    ],
    "correct_answer": "it shall be opened unto you:",
    "explanation": "Matthew 7:7 gives the three rising verbs of prayer: Ask (given), Seek (find), Knock (opened unto you).",
    "reference": "Matthew 7:7",
    "metadata": {
      "stage": 5,
      "stage_title": "Scripture Continuation",
      "level_title": "Gospel Continuations",
      "mechanic": "what_comes_next",
      "verse_text": "Ask, and it shall be given you; seek, and ye shall find; knock, and it shall be opened unto you:",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Moderate",
      "timerSeconds": 30,
      "points": 100,
      "is_typed": false,
      "acceptedAlternatives": [
        "it shall be opened unto you:",
        "it shall be opened unto you"
      ],
      "hint1": "Door opening to the knocker.",
      "hint2": "it shall be opened...",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l22-c3",
    "game_slug": "verse-builder",
    "level": 22,
    "challenge_index": 3,
    "question_text": "What phrase continues Luke 19:10? \"For the Son of man is come to seek and...\"",
    "options": [
      "to save that which was lost.",
      "to heal the brokenhearted.",
      "to proclaim the kingdom of God.",
      "to give his life a ransom for many."
    ],
    "correct_answer": "to save that which was lost.",
    "explanation": "Luke 19:10 states Jesus' mission in Zacchaeus' home: \"For the Son of man is come to seek and to save that which was lost.\"",
    "reference": "Luke 19:10",
    "metadata": {
      "stage": 5,
      "stage_title": "Scripture Continuation",
      "level_title": "Gospel Continuations",
      "mechanic": "what_comes_next",
      "verse_text": "For the Son of man is come to seek and to save that which was lost.",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Moderate",
      "timerSeconds": 30,
      "points": 100,
      "is_typed": false,
      "acceptedAlternatives": [
        "to save that which was lost."
      ],
      "hint1": "Rescuing the lost.",
      "hint2": "to save that which was lost.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l22-c4",
    "game_slug": "verse-builder",
    "level": 22,
    "challenge_index": 4,
    "question_text": "Type the phrase that completes John 8:32: \"And ye shall know the truth, and the ______ ______ ______ ______ ______.\"",
    "options": [],
    "correct_answer": "truth shall make you free",
    "explanation": "John 8:32 links true spiritual freedom with knowing Christ's truth: \"And ye shall know the truth, and the truth shall make you free.\"",
    "reference": "John 8:32",
    "metadata": {
      "stage": 5,
      "stage_title": "Scripture Continuation",
      "level_title": "Gospel Continuations",
      "mechanic": "build_without_options",
      "verse_text": "And ye shall know the truth, and the truth shall make you free.",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Difficult",
      "timerSeconds": 35,
      "points": 150,
      "is_typed": true,
      "acceptedAlternatives": [
        "truth shall make you free",
        "truth shall make you free."
      ],
      "hint1": "Liberation through truth.",
      "hint2": "truth shall make you free.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l22-c5",
    "game_slug": "verse-builder",
    "level": 22,
    "challenge_index": 5,
    "question_text": "What continuation follows Jesus' yoke invitation in Matthew 11:29? \"Take my yoke upon you, and learn of me; for I am meek and lowly in heart: and...\"",
    "options": [
      "ye shall find rest unto your souls.",
      "my burden shall be light upon you.",
      "ye shall inherit the kingdom of heaven.",
      "peace shall abide with you forever."
    ],
    "correct_answer": "ye shall find rest unto your souls.",
    "explanation": "Matthew 11:29 promises deep inward tranquility: \"Take my yoke upon you, and learn of me; for I am meek and lowly in heart: and ye shall find rest unto your souls.\"",
    "reference": "Matthew 11:29",
    "metadata": {
      "stage": 5,
      "stage_title": "Scripture Continuation",
      "level_title": "Gospel Continuations",
      "mechanic": "what_comes_next",
      "verse_text": "Take my yoke upon you, and learn of me; for I am meek and lowly in heart: and ye shall find rest unto your souls.",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Difficult",
      "timerSeconds": 35,
      "points": 150,
      "is_typed": false,
      "acceptedAlternatives": [
        "ye shall find rest unto your souls."
      ],
      "hint1": "Spiritual rest for the inner man.",
      "hint2": "ye shall find rest...",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l23-c1",
    "game_slug": "verse-builder",
    "level": 23,
    "challenge_index": 1,
    "question_text": "What phrase continues 1 Corinthians 13:4? \"Charity suffereth long, and is kind; charity envieth not; charity vaunteth not itself, is not...\"",
    "options": [
      "puffed up,",
      "easily provoked,",
      "unseemly,",
      "self-seeking,"
    ],
    "correct_answer": "puffed up,",
    "explanation": "1 Corinthians 13:4 describes genuine biblical love: \"...charity vaunteth not itself, is not puffed up,\"",
    "reference": "1 Corinthians 13:4",
    "metadata": {
      "stage": 5,
      "stage_title": "Scripture Continuation",
      "level_title": "Pauline Epistles Continuations",
      "mechanic": "what_comes_next",
      "verse_text": "Charity suffereth long, and is kind; charity envieth not; charity vaunteth not itself, is not puffed up,",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Moderate",
      "timerSeconds": 30,
      "points": 100,
      "is_typed": false,
      "acceptedAlternatives": [
        "puffed up,",
        "puffed up"
      ],
      "hint1": "Inflated with arrogant pride.",
      "hint2": "p-u-f-f-e-d up.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l23-c2",
    "game_slug": "verse-builder",
    "level": 23,
    "challenge_index": 2,
    "question_text": "What continuation completes Galatians 6:9? \"And let us not be weary in well doing: for in due season we shall reap, if...\"",
    "options": [
      "we faint not.",
      "we continue in faith.",
      "we abide in him.",
      "we keep his commandments."
    ],
    "correct_answer": "we faint not.",
    "explanation": "Galatians 6:9 encourages spiritual stamina: \"for in due season we shall reap, if we faint not.\"",
    "reference": "Galatians 6:9",
    "metadata": {
      "stage": 5,
      "stage_title": "Scripture Continuation",
      "level_title": "Pauline Epistles Continuations",
      "mechanic": "what_comes_next",
      "verse_text": "And let us not be weary in well doing: for in due season we shall reap, if we faint not.",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Moderate",
      "timerSeconds": 30,
      "points": 100,
      "is_typed": false,
      "acceptedAlternatives": [
        "we faint not.",
        "we faint not"
      ],
      "hint1": "Condition of not collapsing or losing heart.",
      "hint2": "if we faint not.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l23-c3",
    "game_slug": "verse-builder",
    "level": 23,
    "challenge_index": 3,
    "question_text": "What phrase continues Philippians 1:6? \"Being confident of this very thing, that he which hath begun a good work in you will...\"",
    "options": [
      "perform it until the day of Jesus Christ:",
      "preserve you blameless unto the end:",
      "give you strength in every trial:",
      "manifest his glory in your mortal body:"
    ],
    "correct_answer": "perform it until the day of Jesus Christ:",
    "explanation": "Philippians 1:6 guarantees the completion of sanctification: \"...will perform it until the day of Jesus Christ:\"",
    "reference": "Philippians 1:6",
    "metadata": {
      "stage": 5,
      "stage_title": "Scripture Continuation",
      "level_title": "Pauline Epistles Continuations",
      "mechanic": "what_comes_next",
      "verse_text": "Being confident of this very thing, that he which hath begun a good work in you will perform it until the day of Jesus Christ:",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Difficult",
      "timerSeconds": 35,
      "points": 150,
      "is_typed": false,
      "acceptedAlternatives": [
        "perform it until the day of Jesus Christ:"
      ],
      "hint1": "KJV uses the verb \"perform\" meaning to bring to completion.",
      "hint2": "perform it until...",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l23-c4",
    "game_slug": "verse-builder",
    "level": 23,
    "challenge_index": 4,
    "question_text": "Type the phrase completing Colossians 3:12: \"Put on therefore, as the elect of God, holy and beloved, bowels of mercies, kindness, ______ ______ ______, meekness, longsuffering;\"",
    "options": [],
    "correct_answer": "humbleness of mind",
    "explanation": "Colossians 3:12 lists Christian virtues including \"humbleness of mind\" (Greek tapeinophrosune).",
    "reference": "Colossians 3:12",
    "metadata": {
      "stage": 5,
      "stage_title": "Scripture Continuation",
      "level_title": "Pauline Epistles Continuations",
      "mechanic": "build_without_options",
      "verse_text": "Put on therefore, as the elect of God, holy and beloved, bowels of mercies, kindness, humbleness of mind, meekness, longsuffering;",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Very Difficult",
      "timerSeconds": 40,
      "points": 200,
      "is_typed": true,
      "acceptedAlternatives": [
        "humbleness of mind"
      ],
      "hint1": "Three words for intellectual and heart humility.",
      "hint2": "humbleness of mind.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l23-c5",
    "game_slug": "verse-builder",
    "level": 23,
    "challenge_index": 5,
    "question_text": "What completes Paul's doxology in Ephesians 3:20-21? \"Now unto him that is able to do exceeding abundantly above all that we ask or think, according to the power that worketh in us, unto him be...\"",
    "options": [
      "glory in the church by Christ Jesus throughout all ages, world without end. Amen.",
      "praise and honor and dominion forever and ever. Amen.",
      "blessing and wisdom and power and thanksgiving. Amen.",
      "majesty and power both now and ever. Amen."
    ],
    "correct_answer": "glory in the church by Christ Jesus throughout all ages, world without end. Amen.",
    "explanation": "Ephesians 3:21 ascribes eternal ecclesial glory to God: \"Unto him be glory in the church by Christ Jesus throughout all ages, world without end. Amen.\"",
    "reference": "Ephesians 3:20-21",
    "metadata": {
      "stage": 5,
      "stage_title": "Scripture Continuation",
      "level_title": "Pauline Epistles Continuations",
      "mechanic": "what_comes_next",
      "verse_text": "Now unto him that is able to do exceeding abundantly above all that we ask or think, according to the power that worketh in us, Unto him be glory in the church by Christ Jesus throughout all ages, world without end. Amen.",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Expert",
      "timerSeconds": 45,
      "points": 200,
      "is_typed": false,
      "acceptedAlternatives": [
        "glory in the church by Christ Jesus throughout all ages, world without end. Amen."
      ],
      "hint1": "Glory located in the church by Christ Jesus.",
      "hint2": "glory in the church by Christ Jesus...",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l24-c1",
    "game_slug": "verse-builder",
    "level": 24,
    "challenge_index": 1,
    "question_text": "What phrase continues Jeremiah 33:3? \"Call unto me, and I will answer thee, and...\"",
    "options": [
      "shew thee great and mighty things, which thou knowest not.",
      "deliver thee out of all thine afflictions.",
      "establish thy goings in righteousness.",
      "make thee a light unto the nations."
    ],
    "correct_answer": "shew thee great and mighty things, which thou knowest not.",
    "explanation": "Jeremiah 33:3 promises revelation of hidden mysteries to earnest prayer: \"...and shew thee great and mighty things, which thou knowest not.\"",
    "reference": "Jeremiah 33:3",
    "metadata": {
      "stage": 5,
      "stage_title": "Scripture Continuation",
      "level_title": "Prophetic Continuations",
      "mechanic": "what_comes_next",
      "verse_text": "Call unto me, and I will answer thee, and shew thee great and mighty things, which thou knowest not.",
      "translation": "KJV",
      "testament": "Old Testament",
      "difficulty": "Moderate",
      "timerSeconds": 35,
      "points": 100,
      "is_typed": false,
      "acceptedAlternatives": [
        "shew thee great and mighty things, which thou knowest not."
      ],
      "hint1": "God showing inaccessible knowledge.",
      "hint2": "shew thee great and mighty...",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l24-c2",
    "game_slug": "verse-builder",
    "level": 24,
    "challenge_index": 2,
    "question_text": "What continues Zechariah 4:6? \"This is the word of the LORD unto Zerubbabel, saying, Not by might, nor by power, but...\"",
    "options": [
      "by my spirit, saith the LORD of hosts.",
      "by the word of truth and holiness.",
      "by the covenant of your fathers.",
      "by faith in the God of Israel."
    ],
    "correct_answer": "by my spirit, saith the LORD of hosts.",
    "explanation": "Zechariah 4:6 reminds Zerubbabel that temple rebuilding succeeded through the Holy Spirit: \"...Not by might, nor by power, but by my spirit, saith the LORD of hosts.\"",
    "reference": "Zechariah 4:6",
    "metadata": {
      "stage": 5,
      "stage_title": "Scripture Continuation",
      "level_title": "Prophetic Continuations",
      "mechanic": "what_comes_next",
      "verse_text": "Then he answered and spake unto me, saying, This is the word of the LORD unto Zerubbabel, saying, Not by might, nor by power, but by my spirit, saith the LORD of hosts.",
      "translation": "KJV",
      "testament": "Old Testament",
      "difficulty": "Moderate",
      "timerSeconds": 30,
      "points": 100,
      "is_typed": false,
      "acceptedAlternatives": [
        "by my spirit, saith the LORD of hosts."
      ],
      "hint1": "Agency of the Ruach / Holy Spirit.",
      "hint2": "by my spirit, saith...",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l24-c3",
    "game_slug": "verse-builder",
    "level": 24,
    "challenge_index": 3,
    "question_text": "What phrase continues Hosea 6:3? \"Then shall we know, if we follow on to know the LORD: his going forth is prepared as the morning; and he shall come unto us...\"",
    "options": [
      "as the rain, as the latter and former rain unto the earth.",
      "as the dew of Hermon upon the dry mountains.",
      "as a bridegroom rejoicing over his bride.",
      "as the sun in his strength over the valleys."
    ],
    "correct_answer": "as the rain, as the latter and former rain unto the earth.",
    "explanation": "Hosea 6:3 promises refreshing restoration: \"...and he shall come unto us as the rain, as the latter and former rain unto the earth.\"",
    "reference": "Hosea 6:3",
    "metadata": {
      "stage": 5,
      "stage_title": "Scripture Continuation",
      "level_title": "Prophetic Continuations",
      "mechanic": "what_comes_next",
      "verse_text": "Then shall we know, if we follow on to know the LORD: his going forth is prepared as the morning; and he shall come unto us as the rain, as the latter and former rain unto the earth.",
      "translation": "KJV",
      "testament": "Old Testament",
      "difficulty": "Difficult",
      "timerSeconds": 40,
      "points": 150,
      "is_typed": false,
      "acceptedAlternatives": [
        "as the rain, as the latter and former rain unto the earth."
      ],
      "hint1": "Agricultural metaphor of seasonal rains.",
      "hint2": "as the latter and former rain...",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l24-c4",
    "game_slug": "verse-builder",
    "level": 24,
    "challenge_index": 4,
    "question_text": "Type the phrase that continues Habakkuk 3:19: \"The LORD God is my strength, and he will make my feet like ______ ______, and he will make me to walk upon mine high places.\"",
    "options": [],
    "correct_answer": "hinds' feet",
    "explanation": "Habakkuk 3:19 concludes the prophet's psalm with agility on rocky heights: \"...and he will make my feet like hinds' feet...\"",
    "reference": "Habakkuk 3:19",
    "metadata": {
      "stage": 5,
      "stage_title": "Scripture Continuation",
      "level_title": "Prophetic Continuations",
      "mechanic": "build_without_options",
      "verse_text": "The LORD God is my strength, and he will make my feet like hinds' feet, and he will make me to walk upon mine high places.",
      "translation": "KJV",
      "testament": "Old Testament",
      "difficulty": "Difficult",
      "timerSeconds": 40,
      "points": 150,
      "is_typed": true,
      "acceptedAlternatives": [
        "hinds' feet",
        "hinds feet",
        "hind feet"
      ],
      "hint1": "Female deer known for sure-footedness.",
      "hint2": "hinds' feet.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l24-c5",
    "game_slug": "verse-builder",
    "level": 24,
    "challenge_index": 5,
    "question_text": "What phrase continues Isaiah 40:31? \"But they that wait upon the LORD shall renew their strength; they shall mount up with wings as eagles; they shall run, and not be weary; and...\"",
    "options": [
      "they shall walk, and not faint.",
      "they shall overcome every foe.",
      "their path shall shine as the noonday.",
      "their youth shall be renewed like gold."
    ],
    "correct_answer": "they shall walk, and not faint.",
    "explanation": "Isaiah 40:31 moves from soaring and running to steady daily walking: \"...and they shall walk, and not faint.\"",
    "reference": "Isaiah 40:31",
    "metadata": {
      "stage": 5,
      "stage_title": "Scripture Continuation",
      "level_title": "Prophetic Continuations",
      "mechanic": "what_comes_next",
      "verse_text": "But they that wait upon the LORD shall renew their strength; they shall mount up with wings as eagles; they shall run, and not be weary; and they shall walk, and not faint.",
      "translation": "KJV",
      "testament": "Old Testament",
      "difficulty": "Moderate",
      "timerSeconds": 30,
      "points": 100,
      "is_typed": false,
      "acceptedAlternatives": [
        "they shall walk, and not faint."
      ],
      "hint1": "The final, everyday persistence.",
      "hint2": "they shall walk, and not faint.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l25-c1",
    "game_slug": "verse-builder",
    "level": 25,
    "challenge_index": 1,
    "question_text": "What continues David's heart plea in Psalm 139:23-24? \"Search me, O God, and know my heart: try me, and know my thoughts: And see if there be any wicked way in me, and...\"",
    "options": [
      "lead me in the way everlasting.",
      "blot out all my transgressions.",
      "create in me a clean heart, O Lord.",
      "uphold me with thy free spirit."
    ],
    "correct_answer": "lead me in the way everlasting.",
    "explanation": "Psalm 139:24 concludes: \"And see if there be any wicked way in me, and lead me in the way everlasting.\"",
    "reference": "Psalm 139:23-24",
    "metadata": {
      "stage": 5,
      "stage_title": "Scripture Continuation",
      "level_title": "Master What Comes Next",
      "mechanic": "what_comes_next",
      "verse_text": "Search me, O God, and know my heart: try me, and know my thoughts: And see if there be any wicked way in me, and lead me in the way everlasting.",
      "translation": "KJV",
      "testament": "Old Testament",
      "difficulty": "Difficult",
      "timerSeconds": 40,
      "points": 150,
      "is_typed": false,
      "acceptedAlternatives": [
        "lead me in the way everlasting."
      ],
      "hint1": "Guiding onto the eternal path.",
      "hint2": "lead me in the way everlasting.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l25-c2",
    "game_slug": "verse-builder",
    "level": 25,
    "challenge_index": 2,
    "question_text": "What crown follows Paul's finished race in 2 Timothy 4:8? \"Henceforth there is laid up for me a crown of righteousness, which the Lord, the righteous judge, shall give me at that day: and not to me only, but...\"",
    "options": [
      "unto all them also that love his appearing.",
      "unto every faithful servant in his vineyard.",
      "unto them that endure unto the end.",
      "unto all the saints that keep his word."
    ],
    "correct_answer": "unto all them also that love his appearing.",
    "explanation": "2 Timothy 4:8 broadens the reward: \"...and not to me only, but unto all them also that love his appearing.\"",
    "reference": "2 Timothy 4:8",
    "metadata": {
      "stage": 5,
      "stage_title": "Scripture Continuation",
      "level_title": "Master What Comes Next",
      "mechanic": "what_comes_next",
      "verse_text": "Henceforth there is laid up for me a crown of righteousness, which the Lord, the righteous judge, shall give me at that day: and not to me only, but unto all them also that love his appearing.",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Difficult",
      "timerSeconds": 40,
      "points": 150,
      "is_typed": false,
      "acceptedAlternatives": [
        "unto all them also that love his appearing."
      ],
      "hint1": "Shared with believers eagerly longing for Christ's return.",
      "hint2": "love his appearing.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l25-c3",
    "game_slug": "verse-builder",
    "level": 25,
    "challenge_index": 3,
    "question_text": "What phrase continues Revelation 21:4? \"And God shall wipe away all tears from their eyes; and there shall be no more death, neither sorrow, nor crying, neither shall there be any more pain: for...\"",
    "options": [
      "the former things are passed away.",
      "the Lamb is the light thereof.",
      "the tabernacle of God is with men.",
      "all things are made new in Christ."
    ],
    "correct_answer": "the former things are passed away.",
    "explanation": "Revelation 21:4 proclaims the banishment of cursed mortality: \"...for the former things are passed away.\"",
    "reference": "Revelation 21:4",
    "metadata": {
      "stage": 5,
      "stage_title": "Scripture Continuation",
      "level_title": "Master What Comes Next",
      "mechanic": "what_comes_next",
      "verse_text": "And God shall wipe away all tears from their eyes; and there shall be no more death, neither sorrow, nor crying, neither shall there be any more pain: for the former things are passed away.",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Difficult",
      "timerSeconds": 40,
      "points": 150,
      "is_typed": false,
      "acceptedAlternatives": [
        "the former things are passed away."
      ],
      "hint1": "Old fallen conditions vanished forever.",
      "hint2": "former things are passed away.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l25-c4",
    "game_slug": "verse-builder",
    "level": 25,
    "challenge_index": 4,
    "question_text": "Type the phrase that continues Hebrews 4:12: \"For the word of God is quick, and powerful, and sharper than any twoedged sword, piercing even to the dividing asunder of soul and spirit, and of the joints and marrow, and is a ______ ______ ______ ______ ______ ______ ______.\"",
    "options": [],
    "correct_answer": "discerner of the thoughts and intents of the heart",
    "explanation": "Hebrews 4:12 concludes with the penetrating discernment of Scripture: \"...and is a discerner of the thoughts and intents of the heart.\"",
    "reference": "Hebrews 4:12",
    "metadata": {
      "stage": 5,
      "stage_title": "Scripture Continuation",
      "level_title": "Master What Comes Next",
      "mechanic": "build_without_options",
      "verse_text": "For the word of God is quick, and powerful, and sharper than any twoedged sword, piercing even to the dividing asunder of soul and spirit, and of the joints and marrow, and is a discerner of the thoughts and intents of the heart.",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Expert",
      "timerSeconds": 60,
      "points": 250,
      "is_typed": true,
      "acceptedAlternatives": [
        "discerner of the thoughts and intents of the heart",
        "a discerner of the thoughts and intents of the heart"
      ],
      "hint1": "Examines inner motives and meditations.",
      "hint2": "discerner of the thoughts and intents...",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l25-c5",
    "game_slug": "verse-builder",
    "level": 25,
    "challenge_index": 5,
    "question_text": "What completes John 10:10? \"The thief cometh not, but for to steal, and to kill, and to destroy: I am come that they might have life, and that...\"",
    "options": [
      "they might have it more abundantly.",
      "they might dwell in the house of the Lord.",
      "they might walk in the light of the living.",
      "their joy might be full forevermore."
    ],
    "correct_answer": "they might have it more abundantly.",
    "explanation": "John 10:10 contrasts the thief's destruction with Christ's gift: \"...I am come that they might have life, and that they might have it more abundantly.\"",
    "reference": "John 10:10",
    "metadata": {
      "stage": 5,
      "stage_title": "Scripture Continuation",
      "level_title": "Master What Comes Next",
      "mechanic": "what_comes_next",
      "verse_text": "The thief cometh not, but for to steal, and to kill, and to destroy: I am come that they might have life, and that they might have it more abundantly.",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Moderate",
      "timerSeconds": 30,
      "points": 100,
      "is_typed": false,
      "acceptedAlternatives": [
        "they might have it more abundantly."
      ],
      "hint1": "Superabundant quality of spiritual life.",
      "hint2": "more abundantly.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l26-c1",
    "game_slug": "verse-builder",
    "level": 26,
    "challenge_index": 1,
    "question_text": "Put these 3 sections of Psalm 23:1-2 into their correct biblical sequence: [1] \"The LORD is my shepherd; I shall not want.\" [2] \"He leadeth me beside the still waters.\" [3] \"He maketh me to lie down in green pastures:\"",
    "options": [
      "1 -> 3 -> 2",
      "1 -> 2 -> 3",
      "3 -> 1 -> 2",
      "2 -> 1 -> 3"
    ],
    "correct_answer": "1 -> 3 -> 2",
    "explanation": "Psalm 23:1-2 flows: [1] The LORD is my shepherd; I shall not want. [3] He maketh me to lie down in green pastures: [2] he leadeth me beside the still waters.",
    "reference": "Psalm 23:1-2",
    "metadata": {
      "stage": 6,
      "stage_title": "Passage Reconstruction",
      "level_title": "Two-to-Three Clause Sequencing",
      "mechanic": "passage_reconstruction",
      "verse_text": "The LORD is my shepherd; I shall not want. He maketh me to lie down in green pastures: he leadeth me beside the still waters.",
      "translation": "KJV",
      "testament": "Old Testament",
      "difficulty": "Moderate",
      "timerSeconds": 45,
      "points": 100,
      "sections": [
        "The LORD is my shepherd; I shall not want.",
        "He maketh me to lie down in green pastures:",
        "he leadeth me beside the still waters."
      ],
      "acceptedAlternatives": [
        "1 -> 3 -> 2",
        "1, 3, 2",
        "1-3-2"
      ],
      "hint1": "Shepherd first, green pastures second, still waters third.",
      "hint2": "1 -> 3 -> 2",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l26-c2",
    "game_slug": "verse-builder",
    "level": 26,
    "challenge_index": 2,
    "question_text": "Arrange the 3 requirements of Micah 6:8 in their exact biblical order: [1] \"and to walk humbly with thy God?\" [2] \"but to do justly,\" [3] \"and to love mercy,\"",
    "options": [
      "2 -> 3 -> 1",
      "3 -> 2 -> 1",
      "2 -> 1 -> 3",
      "1 -> 2 -> 3"
    ],
    "correct_answer": "2 -> 3 -> 1",
    "explanation": "Micah 6:8 requires: [2] to do justly, [3] and to love mercy, [1] and to walk humbly with thy God.",
    "reference": "Micah 6:8",
    "metadata": {
      "stage": 6,
      "stage_title": "Passage Reconstruction",
      "level_title": "Two-to-Three Clause Sequencing",
      "mechanic": "passage_reconstruction",
      "verse_text": "He hath shewed thee, O man, what is good; and what doth the LORD require of thee, but to do justly, and to love mercy, and to walk humbly with thy God?",
      "translation": "KJV",
      "testament": "Old Testament",
      "difficulty": "Moderate",
      "timerSeconds": 40,
      "points": 100,
      "sections": [
        "to do justly,",
        "and to love mercy,",
        "and to walk humbly with thy God?"
      ],
      "acceptedAlternatives": [
        "2 -> 3 -> 1",
        "2, 3, 1",
        "2-3-1"
      ],
      "hint1": "Justice, then mercy, then humble walk.",
      "hint2": "2 -> 3 -> 1",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l26-c3",
    "game_slug": "verse-builder",
    "level": 26,
    "challenge_index": 3,
    "question_text": "Arrange the sequence of Ecclesiastes 3:1-2 in order: [1] \"A time to be born, and a time to die;\" [2] \"To every thing there is a season,\" [3] \"a time to plant, and a time to pluck up that which is planted;\" [4] \"and a time to every purpose under the heaven:\"",
    "options": [
      "2 -> 4 -> 1 -> 3",
      "1 -> 2 -> 4 -> 3",
      "2 -> 1 -> 4 -> 3",
      "4 -> 2 -> 1 -> 3"
    ],
    "correct_answer": "2 -> 4 -> 1 -> 3",
    "explanation": "Ecclesiastes 3:1-2 opens: [2] To every thing there is a season, [4] and a time to every purpose under the heaven: [1] A time to be born, and a time to die; [3] a time to plant, and a time to pluck up that which is planted;",
    "reference": "Ecclesiastes 3:1-2",
    "metadata": {
      "stage": 6,
      "stage_title": "Passage Reconstruction",
      "level_title": "Two-to-Three Clause Sequencing",
      "mechanic": "passage_reconstruction",
      "verse_text": "To every thing there is a season, and a time to every purpose under the heaven: A time to be born, and a time to die; a time to plant, and a time to pluck up that which is planted;",
      "translation": "KJV",
      "testament": "Old Testament",
      "difficulty": "Difficult",
      "timerSeconds": 60,
      "points": 150,
      "sections": [
        "To every thing there is a season,",
        "and a time to every purpose under the heaven:",
        "A time to be born, and a time to die;",
        "a time to plant, and a time to pluck up that which is planted;"
      ],
      "acceptedAlternatives": [
        "2 -> 4 -> 1 -> 3",
        "2, 4, 1, 3",
        "2-4-1-3"
      ],
      "hint1": "General statement (season and purpose) before specific pairs (birth/death, planting).",
      "hint2": "2 -> 4 -> 1 -> 3",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l26-c4",
    "game_slug": "verse-builder",
    "level": 26,
    "challenge_index": 4,
    "question_text": "Arrange the opening petitions of the Lord's Prayer in Matthew 6:9-10: [1] \"Thy kingdom come.\" [2] \"Our Father which art in heaven, Hallowed be thy name.\" [3] \"Thy will be done in earth, as it is in heaven.\"",
    "options": [
      "2 -> 1 -> 3",
      "1 -> 2 -> 3",
      "2 -> 3 -> 1",
      "3 -> 2 -> 1"
    ],
    "correct_answer": "2 -> 1 -> 3",
    "explanation": "Matthew 6:9-10 proceeds: [2] Our Father which art in heaven, Hallowed be thy name. [1] Thy kingdom come. [3] Thy will be done in earth, as it is in heaven.",
    "reference": "Matthew 6:9-10",
    "metadata": {
      "stage": 6,
      "stage_title": "Passage Reconstruction",
      "level_title": "Two-to-Three Clause Sequencing",
      "mechanic": "passage_reconstruction",
      "verse_text": "Our Father which art in heaven, Hallowed be thy name. Thy kingdom come. Thy will be done in earth, as it is in heaven.",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Moderate",
      "timerSeconds": 40,
      "points": 100,
      "sections": [
        "Our Father which art in heaven, Hallowed be thy name.",
        "Thy kingdom come.",
        "Thy will be done in earth, as it is in heaven."
      ],
      "acceptedAlternatives": [
        "2 -> 1 -> 3",
        "2, 1, 3",
        "2-1-3"
      ],
      "hint1": "Hallowed name -> Kingdom come -> Will be done.",
      "hint2": "2 -> 1 -> 3",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l26-c5",
    "game_slug": "verse-builder",
    "level": 26,
    "challenge_index": 5,
    "question_text": "Arrange the triad of James 1:19 in correct order: [1] \"slow to wrath:\" [2] \"swift to hear,\" [3] \"slow to speak,\"",
    "options": [
      "2 -> 3 -> 1",
      "3 -> 2 -> 1",
      "1 -> 2 -> 3",
      "2 -> 1 -> 3"
    ],
    "correct_answer": "2 -> 3 -> 1",
    "explanation": "James 1:19 prescribes: [2] swift to hear, [3] slow to speak, [1] slow to wrath.",
    "reference": "James 1:19",
    "metadata": {
      "stage": 6,
      "stage_title": "Passage Reconstruction",
      "level_title": "Two-to-Three Clause Sequencing",
      "mechanic": "passage_reconstruction",
      "verse_text": "Wherefore, my beloved brethren, let every man be swift to hear, slow to speak, slow to wrath:",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Moderate",
      "timerSeconds": 30,
      "points": 100,
      "sections": [
        "swift to hear,",
        "slow to speak,",
        "slow to wrath:"
      ],
      "acceptedAlternatives": [
        "2 -> 3 -> 1",
        "2, 3, 1",
        "2-3-1"
      ],
      "hint1": "Ears first (hear), mouth second (speak), emotions third (wrath).",
      "hint2": "2 -> 3 -> 1",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l27-c1",
    "game_slug": "verse-builder",
    "level": 27,
    "challenge_index": 1,
    "question_text": "Arrange the first four Beatitudes of Matthew 5:3-6 in their correct biblical order: [1] \"Blessed are the meek: for they shall inherit the earth.\" [2] \"Blessed are the poor in spirit: for theirs is the kingdom of heaven.\" [3] \"Blessed are they which do hunger and thirst after righteousness: for they shall be filled.\" [4] \"Blessed are they that mourn: for they shall be comforted.\"",
    "options": [
      "2 -> 4 -> 1 -> 3",
      "2 -> 1 -> 4 -> 3",
      "4 -> 2 -> 1 -> 3",
      "1 -> 2 -> 4 -> 3"
    ],
    "correct_answer": "2 -> 4 -> 1 -> 3",
    "explanation": "Matthew 5:3-6 unfolds: [2] Poor in spirit (v.3), [4] Mourn (v.4), [1] Meek (v.5), [3] Hunger and thirst after righteousness (v.6).",
    "reference": "Matthew 5:3-6",
    "metadata": {
      "stage": 6,
      "stage_title": "Passage Reconstruction",
      "level_title": "Four-Part Beatitudes & Commandments",
      "mechanic": "passage_reconstruction",
      "verse_text": "Blessed are the poor in spirit: for theirs is the kingdom of heaven. Blessed are they that mourn: for they shall be comforted. Blessed are the meek: for they shall inherit the earth. Blessed are they which do hunger and thirst after righteousness: for they shall be filled.",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Difficult",
      "timerSeconds": 60,
      "points": 150,
      "sections": [
        "Blessed are the poor in spirit: for theirs is the kingdom of heaven.",
        "Blessed are they that mourn: for they shall be comforted.",
        "Blessed are the meek: for they shall inherit the earth.",
        "Blessed are they which do hunger and thirst after righteousness: for they shall be filled."
      ],
      "acceptedAlternatives": [
        "2 -> 4 -> 1 -> 3",
        "2, 4, 1, 3",
        "2-4-1-3"
      ],
      "hint1": "Poor in spirit -> Mourn -> Meek -> Hunger and thirst.",
      "hint2": "2 -> 4 -> 1 -> 3",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l27-c2",
    "game_slug": "verse-builder",
    "level": 27,
    "challenge_index": 2,
    "question_text": "Arrange the Golden Chain of Redemption in Romans 8:29-30 into biblical order: [1] \"them he also called:\" [2] \"For whom he did foreknow, he also did predestinate\" [3] \"and whom he justified, them he also glorified.\" [4] \"and whom he called, them he also justified:\"",
    "options": [
      "2 -> 1 -> 4 -> 3",
      "1 -> 2 -> 4 -> 3",
      "2 -> 4 -> 1 -> 3",
      "4 -> 2 -> 1 -> 3"
    ],
    "correct_answer": "2 -> 1 -> 4 -> 3",
    "explanation": "Romans 8:29-30 presents God's sovereign order of salvation: [2] Foreknew / Predestinated -> [1] Called -> [4] Justified -> [3] Glorified.",
    "reference": "Romans 8:29-30",
    "metadata": {
      "stage": 6,
      "stage_title": "Passage Reconstruction",
      "level_title": "Four-Part Beatitudes & Commandments",
      "mechanic": "passage_reconstruction",
      "verse_text": "For whom he did foreknow, he also did predestinate to be conformed to the image of his Son... Moreover whom he did predestinate, them he also called: and whom he called, them he also justified: and whom he justified, them he also glorified.",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Very Difficult",
      "timerSeconds": 65,
      "points": 200,
      "sections": [
        "whom he did foreknow, he also did predestinate",
        "them he also called:",
        "and whom he called, them he also justified:",
        "and whom he justified, them he also glorified."
      ],
      "acceptedAlternatives": [
        "2 -> 1 -> 4 -> 3",
        "2, 1, 4, 3",
        "2-1-4-3"
      ],
      "hint1": "Foreknown -> Called -> Justified -> Glorified.",
      "hint2": "2 -> 1 -> 4 -> 3",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l27-c3",
    "game_slug": "verse-builder",
    "level": 27,
    "challenge_index": 3,
    "question_text": "Arrange the cluster of four fruits of the Spirit in Galatians 5:22: [1] \"gentleness,\" [2] \"longsuffering,\" [3] \"goodness,\" [4] \"love, joy, peace,\"",
    "options": [
      "4 -> 2 -> 1 -> 3",
      "4 -> 1 -> 2 -> 3",
      "2 -> 4 -> 1 -> 3",
      "4 -> 3 -> 2 -> 1"
    ],
    "correct_answer": "4 -> 2 -> 1 -> 3",
    "explanation": "Galatians 5:22 lists: [4] love, joy, peace, [2] longsuffering, [1] gentleness, [3] goodness.",
    "reference": "Galatians 5:22",
    "metadata": {
      "stage": 6,
      "stage_title": "Passage Reconstruction",
      "level_title": "Four-Part Beatitudes & Commandments",
      "mechanic": "passage_reconstruction",
      "verse_text": "But the fruit of the Spirit is love, joy, peace, longsuffering, gentleness, goodness, faith,",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Moderate",
      "timerSeconds": 45,
      "points": 100,
      "sections": [
        "love, joy, peace,",
        "longsuffering,",
        "gentleness,",
        "goodness,"
      ],
      "acceptedAlternatives": [
        "4 -> 2 -> 1 -> 3",
        "4, 2, 1, 3",
        "4-2-1-3"
      ],
      "hint1": "Love/joy/peace -> longsuffering -> gentleness -> goodness.",
      "hint2": "4 -> 2 -> 1 -> 3",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l27-c4",
    "game_slug": "verse-builder",
    "level": 27,
    "challenge_index": 4,
    "question_text": "Arrange the four aspects of charity in 1 Corinthians 13:7 into order: [1] \"believeth all things,\" [2] \"hopeth all things,\" [3] \"Beareth all things,\" [4] \"endureth all things.\"",
    "options": [
      "3 -> 1 -> 2 -> 4",
      "1 -> 3 -> 2 -> 4",
      "3 -> 2 -> 1 -> 4",
      "4 -> 3 -> 1 -> 2"
    ],
    "correct_answer": "3 -> 1 -> 2 -> 4",
    "explanation": "1 Corinthians 13:7 lists: [3] Beareth all things, [1] believeth all things, [2] hopeth all things, [4] endureth all things.",
    "reference": "1 Corinthians 13:7",
    "metadata": {
      "stage": 6,
      "stage_title": "Passage Reconstruction",
      "level_title": "Four-Part Beatitudes & Commandments",
      "mechanic": "passage_reconstruction",
      "verse_text": "Beareth all things, believeth all things, hopeth all things, endureth all things.",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Difficult",
      "timerSeconds": 50,
      "points": 150,
      "sections": [
        "Beareth all things,",
        "believeth all things,",
        "hopeth all things,",
        "endureth all things."
      ],
      "acceptedAlternatives": [
        "3 -> 1 -> 2 -> 4",
        "3, 1, 2, 4",
        "3-1-2-4"
      ],
      "hint1": "Beareth -> Believeth -> Hopeth -> Endureth.",
      "hint2": "3 -> 1 -> 2 -> 4",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l27-c5",
    "game_slug": "verse-builder",
    "level": 27,
    "challenge_index": 5,
    "question_text": "Arrange the four opening Ten Commandments (Exodus 20:3-11) by subject: [1] \"Remember the sabbath day, to keep it holy.\" [2] \"Thou shalt not take the name of the LORD thy God in vain;\" [3] \"Thou shalt have no other gods before me.\" [4] \"Thou shalt not make unto thee any graven image,\"",
    "options": [
      "3 -> 4 -> 2 -> 1",
      "4 -> 3 -> 2 -> 1",
      "3 -> 2 -> 4 -> 1",
      "1 -> 3 -> 4 -> 2"
    ],
    "correct_answer": "3 -> 4 -> 2 -> 1",
    "explanation": "Exodus 20 presents: [3] First Commandment: no other gods (v.3); [4] Second: no graven image (v.4); [2] Third: name in vain (v.7); [1] Fourth: remember sabbath (v.8).",
    "reference": "Exodus 20:3-11",
    "metadata": {
      "stage": 6,
      "stage_title": "Passage Reconstruction",
      "level_title": "Four-Part Beatitudes & Commandments",
      "mechanic": "passage_reconstruction",
      "verse_text": "Thou shalt have no other gods before me. Thou shalt not make unto thee any graven image... Thou shalt not take the name of the LORD thy God in vain... Remember the sabbath day, to keep it holy.",
      "translation": "KJV",
      "testament": "Old Testament",
      "difficulty": "Difficult",
      "timerSeconds": 55,
      "points": 150,
      "sections": [
        "Thou shalt have no other gods before me.",
        "Thou shalt not make unto thee any graven image,",
        "Thou shalt not take the name of the LORD thy God in vain;",
        "Remember the sabbath day, to keep it holy."
      ],
      "acceptedAlternatives": [
        "3 -> 4 -> 2 -> 1",
        "3, 4, 2, 1",
        "3-4-2-1"
      ],
      "hint1": "No other gods (1st) -> No graven images (2nd) -> Name in vain (3rd) -> Sabbath (4th).",
      "hint2": "3 -> 4 -> 2 -> 1",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l28-c1",
    "game_slug": "verse-builder",
    "level": 28,
    "challenge_index": 1,
    "question_text": "Arrange the 4 soils in Jesus' Parable of the Sower (Matthew 13:3-8) in biblical sequence: [1] \"good ground\" [2] \"way side\" [3] \"among thorns\" [4] \"stony places\"",
    "options": [
      "2 -> 4 -> 3 -> 1",
      "2 -> 3 -> 4 -> 1",
      "4 -> 2 -> 3 -> 1",
      "1 -> 2 -> 4 -> 3"
    ],
    "correct_answer": "2 -> 4 -> 3 -> 1",
    "explanation": "Matthew 13:3-8 narrates: [2] way side (v.4), [4] stony places (v.5), [3] among thorns (v.7), [1] good ground (v.8).",
    "reference": "Matthew 13:3-8",
    "metadata": {
      "stage": 6,
      "stage_title": "Passage Reconstruction",
      "level_title": "Parable & Teaching Sequences",
      "mechanic": "passage_reconstruction",
      "verse_text": "Some seeds fell by the way side... Some fell upon stony places... And some fell among thorns... But other fell into good ground...",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Moderate",
      "timerSeconds": 45,
      "points": 100,
      "sections": [
        "way side",
        "stony places",
        "among thorns",
        "good ground"
      ],
      "acceptedAlternatives": [
        "2 -> 4 -> 3 -> 1",
        "2, 4, 3, 1",
        "2-4-3-1"
      ],
      "hint1": "Way side -> Stony places -> Among thorns -> Good ground.",
      "hint2": "2 -> 4 -> 3 -> 1",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l28-c2",
    "game_slug": "verse-builder",
    "level": 28,
    "challenge_index": 2,
    "question_text": "Arrange the steps of Christ's humiliation and exaltation in Philippians 2:7-9: [1] \"and became obedient unto death, even the death of the cross.\" [2] \"Wherefore God also hath highly exalted him, and given him a name which is above every name:\" [3] \"But made himself of no reputation, and took upon him the form of a servant,\" [4] \"and was made in the likeness of men:\"",
    "options": [
      "3 -> 4 -> 1 -> 2",
      "3 -> 1 -> 4 -> 2",
      "4 -> 3 -> 1 -> 2",
      "1 -> 3 -> 4 -> 2"
    ],
    "correct_answer": "3 -> 4 -> 1 -> 2",
    "explanation": "Philippians 2:7-9 outlines: [3] Made himself of no reputation / servant -> [4] Likeness of men -> [1] Obedient unto death of the cross -> [2] Highly exalted by God.",
    "reference": "Philippians 2:7-9",
    "metadata": {
      "stage": 6,
      "stage_title": "Passage Reconstruction",
      "level_title": "Parable & Teaching Sequences",
      "mechanic": "passage_reconstruction",
      "verse_text": "But made himself of no reputation, and took upon him the form of a servant, and was made in the likeness of men: And being found in fashion as a man, he humbled himself, and became obedient unto death, even the death of the cross. Wherefore God also hath highly exalted him, and given him a name which is above every name:",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Very Difficult",
      "timerSeconds": 70,
      "points": 200,
      "sections": [
        "But made himself of no reputation, and took upon him the form of a servant,",
        "and was made in the likeness of men:",
        "and became obedient unto death, even the death of the cross.",
        "Wherefore God also hath highly exalted him, and given him a name which is above every name:"
      ],
      "acceptedAlternatives": [
        "3 -> 4 -> 1 -> 2",
        "3, 4, 1, 2",
        "3-4-1-2"
      ],
      "hint1": "Servant form -> human likeness -> cross death -> exalted name.",
      "hint2": "3 -> 4 -> 1 -> 2",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l28-c3",
    "game_slug": "verse-builder",
    "level": 28,
    "challenge_index": 3,
    "question_text": "Arrange these four stages of the Prodigal Son's journey (Luke 15:13-20): [1] \"And he arose, and came to his father.\" [2] \"he would fain have filled his belly with the husks that the swine did eat:\" [3] \"took his journey into a far country, and there wasted his substance\" [4] \"And when he came to himself, he said, How many hired servants of my father's have bread enough\"",
    "options": [
      "3 -> 2 -> 4 -> 1",
      "3 -> 4 -> 2 -> 1",
      "2 -> 3 -> 4 -> 1",
      "4 -> 3 -> 2 -> 1"
    ],
    "correct_answer": "3 -> 2 -> 4 -> 1",
    "explanation": "Luke 15:13-20 moves: [3] Departure to far country and waste -> [2] Feeding swine and husks -> [4] Coming to his senses -> [1] Arising and returning to his father.",
    "reference": "Luke 15:13-20",
    "metadata": {
      "stage": 6,
      "stage_title": "Passage Reconstruction",
      "level_title": "Parable & Teaching Sequences",
      "mechanic": "passage_reconstruction",
      "verse_text": "wasted his substance with riotous living... filled his belly with the husks... came to himself... arose, and came to his father.",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Difficult",
      "timerSeconds": 60,
      "points": 150,
      "sections": [
        "took his journey into a far country, and there wasted his substance",
        "he would fain have filled his belly with the husks that the swine did eat:",
        "And when he came to himself, he said, How many hired servants of my father's have bread enough",
        "And he arose, and came to his father."
      ],
      "acceptedAlternatives": [
        "3 -> 2 -> 4 -> 1",
        "3, 2, 4, 1",
        "3-2-4-1"
      ],
      "hint1": "Waste -> Swine pen -> Came to himself -> Arose and returned.",
      "hint2": "3 -> 2 -> 4 -> 1",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l28-c4",
    "game_slug": "verse-builder",
    "level": 28,
    "challenge_index": 4,
    "question_text": "Arrange the sequence of Jesus' teaching on the True Vine in John 15:1-5: [1] \"He that abideth in me, and I in him, the same bringeth forth much fruit: for without me ye can do nothing.\" [2] \"I am the true vine, and my Father is the husbandman.\" [3] \"Abide in me, and I in you. As the branch cannot bear fruit of itself, except it abide in the vine;\" [4] \"Every branch in me that beareth not fruit he taketh away: and every branch that beareth fruit, he purgeth it,\"",
    "options": [
      "2 -> 4 -> 3 -> 1",
      "2 -> 3 -> 4 -> 1",
      "4 -> 2 -> 3 -> 1",
      "1 -> 2 -> 3 -> 4"
    ],
    "correct_answer": "2 -> 4 -> 3 -> 1",
    "explanation": "John 15:1-5 sequence: [2] True vine / husbandman (v.1) -> [4] Purging branches (v.2) -> [3] Command to abide (v.4) -> [1] Much fruit / without me ye can do nothing (v.5).",
    "reference": "John 15:1-5",
    "metadata": {
      "stage": 6,
      "stage_title": "Passage Reconstruction",
      "level_title": "Parable & Teaching Sequences",
      "mechanic": "passage_reconstruction",
      "verse_text": "I am the true vine... Every branch that beareth fruit he purgeth it... Abide in me... for without me ye can do nothing.",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Very Difficult",
      "timerSeconds": 70,
      "points": 200,
      "sections": [
        "I am the true vine, and my Father is the husbandman.",
        "Every branch in me that beareth not fruit he taketh away: and every branch that beareth fruit, he purgeth it,",
        "Abide in me, and I in you. As the branch cannot bear fruit of itself, except it abide in the vine;",
        "He that abideth in me, and I in him, the same bringeth forth much fruit: for without me ye can do nothing."
      ],
      "acceptedAlternatives": [
        "2 -> 4 -> 3 -> 1",
        "2, 4, 3, 1",
        "2-4-3-1"
      ],
      "hint1": "Identity (v.1) -> Branch care (v.2) -> Abiding condition (v.4) -> Fruitfulness and total dependence (v.5).",
      "hint2": "2 -> 4 -> 3 -> 1",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l28-c5",
    "game_slug": "verse-builder",
    "level": 28,
    "challenge_index": 5,
    "question_text": "Arrange the progression of Faith in Hebrews 11:1-3: [1] \"Through faith we understand that the worlds were framed by the word of God,\" [2] \"For by it the elders obtained a good report.\" [3] \"Now faith is the substance of things hoped for, the evidence of things not seen.\"",
    "options": [
      "3 -> 2 -> 1",
      "1 -> 2 -> 3",
      "3 -> 1 -> 2",
      "2 -> 3 -> 1"
    ],
    "correct_answer": "3 -> 2 -> 1",
    "explanation": "Hebrews 11:1-3 opens: [3] Definition of faith (v.1) -> [2] Elders' good report (v.2) -> [1] Creation framed by the word of God (v.3).",
    "reference": "Hebrews 11:1-3",
    "metadata": {
      "stage": 6,
      "stage_title": "Passage Reconstruction",
      "level_title": "Parable & Teaching Sequences",
      "mechanic": "passage_reconstruction",
      "verse_text": "Now faith is the substance of things hoped for, the evidence of things not seen. For by it the elders obtained a good report. Through faith we understand that the worlds were framed by the word of God, so that things which are seen were not made of things which do appear.",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Difficult",
      "timerSeconds": 50,
      "points": 150,
      "sections": [
        "Now faith is the substance of things hoped for, the evidence of things not seen.",
        "For by it the elders obtained a good report.",
        "Through faith we understand that the worlds were framed by the word of God,"
      ],
      "acceptedAlternatives": [
        "3 -> 2 -> 1",
        "3, 2, 1",
        "3-2-1"
      ],
      "hint1": "Definition -> Elders -> Creation.",
      "hint2": "3 -> 2 -> 1",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l29-c1",
    "game_slug": "verse-builder",
    "level": 29,
    "challenge_index": 1,
    "question_text": "Arrange the five links of Paul's preaching chain in Romans 10:14-15: [1] \"and how shall they hear without a preacher?\" [2] \"how then shall they call on him in whom they have not believed?\" [3] \"and how shall they believe in him of whom they have not heard?\" [4] \"And how shall they preach, except they be sent?\"",
    "options": [
      "2 -> 3 -> 1 -> 4",
      "2 -> 1 -> 3 -> 4",
      "3 -> 2 -> 1 -> 4",
      "4 -> 1 -> 3 -> 2"
    ],
    "correct_answer": "2 -> 3 -> 1 -> 4",
    "explanation": "Romans 10:14-15 steps backward: [2] Call on whom not believed? -> [3] Believe without hearing? -> [1] Hear without preacher? -> [4] Preach except sent?",
    "reference": "Romans 10:14-15",
    "metadata": {
      "stage": 6,
      "stage_title": "Passage Reconstruction",
      "level_title": "Deep Theological Arguments",
      "mechanic": "passage_reconstruction",
      "verse_text": "How then shall they call on him in whom they have not believed? and how shall they believe in him of whom they have not heard? and how shall they hear without a preacher? And how shall they preach, except they be sent? as it is written, How beautiful are the feet of them that preach the gospel of peace...",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Expert",
      "timerSeconds": 75,
      "points": 200,
      "sections": [
        "how then shall they call on him in whom they have not believed?",
        "and how shall they believe in him of whom they have not heard?",
        "and how shall they hear without a preacher?",
        "And how shall they preach, except they be sent?"
      ],
      "acceptedAlternatives": [
        "2 -> 3 -> 1 -> 4",
        "2, 3, 1, 4",
        "2-3-1-4"
      ],
      "hint1": "Call -> Believe -> Hear -> Preacher -> Sent.",
      "hint2": "2 -> 3 -> 1 -> 4",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l29-c2",
    "game_slug": "verse-builder",
    "level": 29,
    "challenge_index": 2,
    "question_text": "Arrange the progression of Christian growth in 2 Peter 1:5-7: [1] \"and to temperance patience; and to patience godliness;\" [2] \"and to godliness brotherly kindness; and to brotherly kindness charity.\" [3] \"add to your faith virtue; and to virtue knowledge;\" [4] \"And to knowledge temperance;\"",
    "options": [
      "3 -> 4 -> 1 -> 2",
      "3 -> 1 -> 4 -> 2",
      "4 -> 3 -> 1 -> 2",
      "1 -> 3 -> 4 -> 2"
    ],
    "correct_answer": "3 -> 4 -> 1 -> 2",
    "explanation": "2 Peter 1:5-7 ascends: [3] Faith -> Virtue -> Knowledge -> [4] Temperance -> [1] Patience -> Godliness -> [2] Brotherly kindness -> Charity.",
    "reference": "2 Peter 1:5-7",
    "metadata": {
      "stage": 6,
      "stage_title": "Passage Reconstruction",
      "level_title": "Deep Theological Arguments",
      "mechanic": "passage_reconstruction",
      "verse_text": "add to your faith virtue; and to virtue knowledge; And to knowledge temperance; and to temperance patience; and to patience godliness; And to godliness brotherly kindness; and to brotherly kindness charity.",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Expert",
      "timerSeconds": 80,
      "points": 200,
      "sections": [
        "add to your faith virtue; and to virtue knowledge;",
        "And to knowledge temperance;",
        "and to temperance patience; and to patience godliness;",
        "And to godliness brotherly kindness; and to brotherly kindness charity."
      ],
      "acceptedAlternatives": [
        "3 -> 4 -> 1 -> 2",
        "3, 4, 1, 2",
        "3-4-1-2"
      ],
      "hint1": "Faith/virtue/knowledge -> temperance -> patience/godliness -> brotherly kindness/charity.",
      "hint2": "3 -> 4 -> 1 -> 2",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l29-c3",
    "game_slug": "verse-builder",
    "level": 29,
    "challenge_index": 3,
    "question_text": "Arrange the steps in Romans 5:1-4: [1] \"knowing that tribulation worketh patience;\" [2] \"Therefore being justified by faith, we have peace with God through our Lord Jesus Christ:\" [3] \"And not only so, but we glory in tribulations also:\" [4] \"And patience, experience; and experience, hope:\"",
    "options": [
      "2 -> 3 -> 1 -> 4",
      "2 -> 1 -> 3 -> 4",
      "3 -> 1 -> 4 -> 2",
      "2 -> 4 -> 1 -> 3"
    ],
    "correct_answer": "2 -> 3 -> 1 -> 4",
    "explanation": "Romans 5:1-4 connects: [2] Justified by faith / peace with God (v.1) -> [3] Glory in tribulations (v.3a) -> [1] Tribulation worketh patience (v.3b) -> [4] Patience / experience / hope (v.4).",
    "reference": "Romans 5:1-4",
    "metadata": {
      "stage": 6,
      "stage_title": "Passage Reconstruction",
      "level_title": "Deep Theological Arguments",
      "mechanic": "passage_reconstruction",
      "verse_text": "Therefore being justified by faith, we have peace with God through our Lord Jesus Christ... And not only so, but we glory in tribulations also: knowing that tribulation worketh patience; And patience, experience; and experience, hope:",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Difficult",
      "timerSeconds": 65,
      "points": 150,
      "sections": [
        "Therefore being justified by faith, we have peace with God through our Lord Jesus Christ:",
        "And not only so, but we glory in tribulations also:",
        "knowing that tribulation worketh patience;",
        "And patience, experience; and experience, hope:"
      ],
      "acceptedAlternatives": [
        "2 -> 3 -> 1 -> 4",
        "2, 3, 1, 4",
        "2-3-1-4"
      ],
      "hint1": "Justified -> glory in tribulations -> tribulation produces patience -> patience/experience/hope.",
      "hint2": "2 -> 3 -> 1 -> 4",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l29-c4",
    "game_slug": "verse-builder",
    "level": 29,
    "challenge_index": 4,
    "question_text": "Arrange Ephesians 2:1-5 in logical flow: [1] \"Even when we were dead in sins, hath quickened us together with Christ,\" [2] \"And you hath he quickened, who were dead in trespasses and sins;\" [3] \"But God, who is rich in mercy, for his great love wherewith he loved us,\" [4] \"Wherein in time past ye walked according to the course of this world,\"",
    "options": [
      "2 -> 4 -> 3 -> 1",
      "2 -> 3 -> 4 -> 1",
      "4 -> 2 -> 3 -> 1",
      "3 -> 1 -> 2 -> 4"
    ],
    "correct_answer": "2 -> 4 -> 3 -> 1",
    "explanation": "Ephesians 2:1-5 transitions: [2] Dead in trespasses (v.1) -> [4] Walked according to world (v.2) -> [3] But God rich in mercy (v.4) -> [1] Quickened us together with Christ (v.5).",
    "reference": "Ephesians 2:1-5",
    "metadata": {
      "stage": 6,
      "stage_title": "Passage Reconstruction",
      "level_title": "Deep Theological Arguments",
      "mechanic": "passage_reconstruction",
      "verse_text": "And you hath he quickened, who were dead in trespasses and sins; Wherein in time past ye walked according to the course of this world... But God, who is rich in mercy, for his great love wherewith he loved us, Even when we were dead in sins, hath quickened us together with Christ, (by grace ye are saved;)",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Very Difficult",
      "timerSeconds": 70,
      "points": 200,
      "sections": [
        "And you hath he quickened, who were dead in trespasses and sins;",
        "Wherein in time past ye walked according to the course of this world,",
        "But God, who is rich in mercy, for his great love wherewith he loved us,",
        "Even when we were dead in sins, hath quickened us together with Christ,"
      ],
      "acceptedAlternatives": [
        "2 -> 4 -> 3 -> 1",
        "2, 4, 3, 1",
        "2-4-3-1"
      ],
      "hint1": "State of death -> Past walk -> \"But God\" turning point -> Resurrection with Christ.",
      "hint2": "2 -> 4 -> 3 -> 1",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l29-c5",
    "game_slug": "verse-builder",
    "level": 29,
    "challenge_index": 5,
    "question_text": "Arrange Peter's inheritance description in 1 Peter 1:3-4: [1] \"To an inheritance incorruptible, and undefiled, and that fadeth not away, reserved in heaven for you,\" [2] \"Blessed be the God and Father of our Lord Jesus Christ,\" [3] \"by the resurrection of Jesus Christ from the dead,\" [4] \"which according to his abundant mercy hath begotten us again unto a lively hope\"",
    "options": [
      "2 -> 4 -> 3 -> 1",
      "2 -> 3 -> 4 -> 1",
      "4 -> 2 -> 3 -> 1",
      "1 -> 2 -> 4 -> 3"
    ],
    "correct_answer": "2 -> 4 -> 3 -> 1",
    "explanation": "1 Peter 1:3-4 flows: [2] Blessed be God (v.3a) -> [4] begotten us again unto lively hope (v.3b) -> [3] by resurrection of Christ (v.3c) -> [1] To an inheritance incorruptible (v.4).",
    "reference": "1 Peter 1:3-4",
    "metadata": {
      "stage": 6,
      "stage_title": "Passage Reconstruction",
      "level_title": "Deep Theological Arguments",
      "mechanic": "passage_reconstruction",
      "verse_text": "Blessed be the God and Father of our Lord Jesus Christ, which according to his abundant mercy hath begotten us again unto a lively hope by the resurrection of Jesus Christ from the dead, To an inheritance incorruptible, and undefiled, and that fadeth not away, reserved in heaven for you,",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Very Difficult",
      "timerSeconds": 70,
      "points": 200,
      "sections": [
        "Blessed be the God and Father of our Lord Jesus Christ,",
        "which according to his abundant mercy hath begotten us again unto a lively hope",
        "by the resurrection of Jesus Christ from the dead,",
        "To an inheritance incorruptible, and undefiled, and that fadeth not away, reserved in heaven for you,"
      ],
      "acceptedAlternatives": [
        "2 -> 4 -> 3 -> 1",
        "2, 4, 3, 1",
        "2-4-3-1"
      ],
      "hint1": "Praise to Father -> Begotten to living hope -> Resurrection basis -> Heavenly inheritance.",
      "hint2": "2 -> 4 -> 3 -> 1",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l30-c1",
    "game_slug": "verse-builder",
    "level": 30,
    "challenge_index": 1,
    "question_text": "Arrange Psalm 1:1-3 into proper scriptural sequence: [1] \"And he shall be like a tree planted by the rivers of water, that bringeth forth his fruit in his season;\" [2] \"Blessed is the man that walketh not in the counsel of the ungodly,\" [3] \"his leaf also shall not wither; and whatsoever he doeth shall prosper.\" [4] \"But his delight is in the law of the LORD; and in his law doth he meditate day and night.\"",
    "options": [
      "2 -> 4 -> 1 -> 3",
      "2 -> 1 -> 4 -> 3",
      "4 -> 2 -> 1 -> 3",
      "1 -> 2 -> 4 -> 3"
    ],
    "correct_answer": "2 -> 4 -> 1 -> 3",
    "explanation": "Psalm 1:1-3 follows: [2] Avoid ungodly counsel (v.1) -> [4] Delight in LORD's law (v.2) -> [1] Tree by rivers bringing fruit (v.3a) -> [3] Unwithering leaf and prosperity (v.3b).",
    "reference": "Psalm 1:1-3",
    "metadata": {
      "stage": 6,
      "stage_title": "Passage Reconstruction",
      "level_title": "Master Passage Rebuilder",
      "mechanic": "passage_reconstruction",
      "verse_text": "Blessed is the man that walketh not in the counsel of the ungodly... But his delight is in the law of the LORD... And he shall be like a tree planted by the rivers of water... whatsoever he doeth shall prosper.",
      "translation": "KJV",
      "testament": "Old Testament",
      "difficulty": "Expert",
      "timerSeconds": 85,
      "points": 250,
      "sections": [
        "Blessed is the man that walketh not in the counsel of the ungodly,",
        "But his delight is in the law of the LORD; and in his law doth he meditate day and night.",
        "And he shall be like a tree planted by the rivers of water, that bringeth forth his fruit in his season;",
        "his leaf also shall not wither; and whatsoever he doeth shall prosper."
      ],
      "acceptedAlternatives": [
        "2 -> 4 -> 1 -> 3",
        "2, 4, 1, 3",
        "2-4-1-3"
      ],
      "hint1": "Separation from wickedness -> Meditation on Torah -> Tree planted -> Unwithering leaf.",
      "hint2": "2 -> 4 -> 1 -> 3",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l30-c2",
    "game_slug": "verse-builder",
    "level": 30,
    "challenge_index": 2,
    "question_text": "Arrange Isaiah 53:3-5 into biblical order: [1] \"the chastisement of our peace was upon him; and with his stripes we are healed.\" [2] \"Surely he hath borne our griefs, and carried our sorrows:\" [3] \"He is despised and rejected of men; a man of sorrows, and acquainted with grief:\" [4] \"But he was wounded for our transgressions, he was bruised for our iniquities:\"",
    "options": [
      "3 -> 2 -> 4 -> 1",
      "3 -> 4 -> 2 -> 1",
      "2 -> 3 -> 4 -> 1",
      "4 -> 2 -> 3 -> 1"
    ],
    "correct_answer": "3 -> 2 -> 4 -> 1",
    "explanation": "Isaiah 53:3-5 unfolds: [3] Despised / Man of sorrows (v.3) -> [2] Borne griefs / carried sorrows (v.4) -> [4] Wounded for transgressions (v.5a) -> [1] Chastisement of peace / healed by stripes (v.5b).",
    "reference": "Isaiah 53:3-5",
    "metadata": {
      "stage": 6,
      "stage_title": "Passage Reconstruction",
      "level_title": "Master Passage Rebuilder",
      "mechanic": "passage_reconstruction",
      "verse_text": "He is despised and rejected of men; a man of sorrows, and acquainted with grief... Surely he hath borne our griefs, and carried our sorrows... But he was wounded for our transgressions, he was bruised for our iniquities: the chastisement of our peace was upon him; and with his stripes we are healed.",
      "translation": "KJV",
      "testament": "Old Testament",
      "difficulty": "Master",
      "timerSeconds": 90,
      "points": 250,
      "sections": [
        "He is despised and rejected of men; a man of sorrows, and acquainted with grief:",
        "Surely he hath borne our griefs, and carried our sorrows:",
        "But he was wounded for our transgressions, he was bruised for our iniquities:",
        "the chastisement of our peace was upon him; and with his stripes we are healed."
      ],
      "acceptedAlternatives": [
        "3 -> 2 -> 4 -> 1",
        "3, 2, 4, 1",
        "3-2-4-1"
      ],
      "hint1": "Despised -> Borne our griefs -> Wounded for our transgressions -> Chastisement of peace.",
      "hint2": "3 -> 2 -> 4 -> 1",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l30-c3",
    "game_slug": "verse-builder",
    "level": 30,
    "challenge_index": 3,
    "question_text": "Arrange Paul's creedal summary of the Resurrection in 1 Corinthians 15:3-5: [1] \"and that he rose again the third day according to the scriptures:\" [2] \"And that he was seen of Cephas, then of the twelve:\" [3] \"how that Christ died for our sins according to the scriptures;\" [4] \"And that he was buried,\"",
    "options": [
      "3 -> 4 -> 1 -> 2",
      "3 -> 1 -> 4 -> 2",
      "4 -> 3 -> 1 -> 2",
      "1 -> 3 -> 4 -> 2"
    ],
    "correct_answer": "3 -> 4 -> 1 -> 2",
    "explanation": "1 Corinthians 15:3-5 gives the fourfold gospel confession: [3] Christ died for our sins -> [4] He was buried -> [1] Rose again the third day -> [2] Seen of Cephas and the twelve.",
    "reference": "1 Corinthians 15:3-5",
    "metadata": {
      "stage": 6,
      "stage_title": "Passage Reconstruction",
      "level_title": "Master Passage Rebuilder",
      "mechanic": "passage_reconstruction",
      "verse_text": "Christ died for our sins according to the scriptures; And that he was buried, and that he rose again the third day according to the scriptures: And that he was seen of Cephas, then of the twelve:",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Expert",
      "timerSeconds": 70,
      "points": 200,
      "sections": [
        "how that Christ died for our sins according to the scriptures;",
        "And that he was buried,",
        "and that he rose again the third day according to the scriptures:",
        "And that he was seen of Cephas, then of the twelve:"
      ],
      "acceptedAlternatives": [
        "3 -> 4 -> 1 -> 2",
        "3, 4, 1, 2",
        "3-4-1-2"
      ],
      "hint1": "Died -> Buried -> Rose -> Seen.",
      "hint2": "3 -> 4 -> 1 -> 2",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l30-c4",
    "game_slug": "verse-builder",
    "level": 30,
    "challenge_index": 4,
    "question_text": "Arrange the river of life vision in Revelation 22:1-2: [1] \"proceeding out of the throne of God and of the Lamb.\" [2] \"In the midst of the street of it, and on either side of the river, was there the tree of life,\" [3] \"which bare twelve manner of fruits, and yielded her fruit every month: and the leaves of the tree were for the healing of the nations.\" [4] \"And he shewed me a pure river of water of life, clear as crystal,\"",
    "options": [
      "4 -> 1 -> 2 -> 3",
      "4 -> 2 -> 1 -> 3",
      "1 -> 4 -> 2 -> 3",
      "2 -> 4 -> 1 -> 3"
    ],
    "correct_answer": "4 -> 1 -> 2 -> 3",
    "explanation": "Revelation 22:1-2 moves: [4] River clear as crystal -> [1] Out of throne of God and Lamb -> [2] Tree of life on either side -> [3] Twelve fruits and leaves for healing.",
    "reference": "Revelation 22:1-2",
    "metadata": {
      "stage": 6,
      "stage_title": "Passage Reconstruction",
      "level_title": "Master Passage Rebuilder",
      "mechanic": "passage_reconstruction",
      "verse_text": "And he shewed me a pure river of water of life, clear as crystal, proceeding out of the throne of God and of the Lamb. In the midst of the street of it, and on either side of the river, was there the tree of life, which bare twelve manner of fruits, and yielded her fruit every month: and the leaves of the tree were for the healing of the nations.",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Master",
      "timerSeconds": 90,
      "points": 250,
      "sections": [
        "And he shewed me a pure river of water of life, clear as crystal,",
        "proceeding out of the throne of God and of the Lamb.",
        "In the midst of the street of it, and on either side of the river, was there the tree of life,",
        "which bare twelve manner of fruits, and yielded her fruit every month: and the leaves of the tree were for the healing of the nations."
      ],
      "acceptedAlternatives": [
        "4 -> 1 -> 2 -> 3",
        "4, 1, 2, 3",
        "4-1-2-3"
      ],
      "hint1": "River described -> Source at throne -> Tree of life location -> Fruits and leaves.",
      "hint2": "4 -> 1 -> 2 -> 3",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l30-c5",
    "game_slug": "verse-builder",
    "level": 30,
    "challenge_index": 5,
    "question_text": "Arrange Paul's inseparable love climax in Romans 8:35-37: [1] \"Nay, in all these things we are more than conquerors through him that loved us.\" [2] \"Who shall separate us from the love of Christ?\" [3] \"shall tribulation, or distress, or persecution, or famine, or nakedness, or peril, or sword?\" [4] \"As it is written, For thy sake we are killed all the day long; we are accounted as sheep for the slaughter.\"",
    "options": [
      "2 -> 3 -> 4 -> 1",
      "2 -> 4 -> 3 -> 1",
      "3 -> 2 -> 4 -> 1",
      "1 -> 2 -> 3 -> 4"
    ],
    "correct_answer": "2 -> 3 -> 4 -> 1",
    "explanation": "Romans 8:35-37 builds: [2] Who shall separate us? -> [3] Seven perils listed -> [4] Scripture citation (sheep for slaughter) -> [1] More than conquerors through Him.",
    "reference": "Romans 8:35-37",
    "metadata": {
      "stage": 6,
      "stage_title": "Passage Reconstruction",
      "level_title": "Master Passage Rebuilder",
      "mechanic": "passage_reconstruction",
      "verse_text": "Who shall separate us from the love of Christ? shall tribulation, or distress, or persecution, or famine, or nakedness, or peril, or sword? As it is written, For thy sake we are killed all the day long; we are accounted as sheep for the slaughter. Nay, in all these things we are more than conquerors through him that loved us.",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Master",
      "timerSeconds": 90,
      "points": 250,
      "sections": [
        "Who shall separate us from the love of Christ?",
        "shall tribulation, or distress, or persecution, or famine, or nakedness, or peril, or sword?",
        "As it is written, For thy sake we are killed all the day long; we are accounted as sheep for the slaughter.",
        "Nay, in all these things we are more than conquerors through him that loved us."
      ],
      "acceptedAlternatives": [
        "2 -> 3 -> 4 -> 1",
        "2, 3, 4, 1",
        "2-3-4-1"
      ],
      "hint1": "Challenge -> 7 sufferings -> Psalm citation -> More than conquerors victory.",
      "hint2": "2 -> 3 -> 4 -> 1",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l31-c1",
    "game_slug": "verse-builder",
    "level": 31,
    "challenge_index": 1,
    "question_text": "Complete the foundation of the second great commandment in Leviticus 19:18: \"Thou shalt not avenge, nor bear any grudge against the children of thy people, but thou shalt ______ ______ ______ ______: I am the LORD.\"",
    "options": [
      "love thy neighbour as thyself",
      "judge thy brother in righteousness",
      "deal kindly with the stranger",
      "walk with an upright heart"
    ],
    "correct_answer": "love thy neighbour as thyself",
    "explanation": "Leviticus 19:18 is the Old Testament source quoted by Jesus and Paul: \"...thou shalt love thy neighbour as thyself: I am the LORD.\"",
    "reference": "Leviticus 19:18",
    "metadata": {
      "stage": 7,
      "stage_title": "Forgotten Scripture",
      "level_title": "Pentateuch Obscure Ordinances",
      "mechanic": "missing_phrase",
      "verse_text": "Thou shalt not avenge, nor bear any grudge against the children of thy people, but thou shalt love thy neighbour as thyself: I am the LORD.",
      "translation": "KJV",
      "testament": "Old Testament",
      "difficulty": "Moderate",
      "timerSeconds": 30,
      "points": 100,
      "is_typed": false,
      "acceptedAlternatives": [
        "love thy neighbour as thyself"
      ],
      "hint1": "The royal law of loving one's fellow man.",
      "hint2": "love thy neighbour as thyself.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l31-c2",
    "game_slug": "verse-builder",
    "level": 31,
    "challenge_index": 2,
    "question_text": "Complete the ordinance honoring elders in Leviticus 19:32: \"Thou shalt rise up before the ______ head, and honour the face of the old man, and fear thy God: I am the LORD.\"",
    "options": [
      "hoary",
      "aged",
      "gray",
      "ancient"
    ],
    "correct_answer": "hoary",
    "explanation": "Leviticus 19:32 commands reverence for gray-headed seniors: \"Thou shalt rise up before the hoary head...\"",
    "reference": "Leviticus 19:32",
    "metadata": {
      "stage": 7,
      "stage_title": "Forgotten Scripture",
      "level_title": "Pentateuch Obscure Ordinances",
      "mechanic": "missing_words",
      "verse_text": "Thou shalt rise up before the hoary head, and honour the face of the old man, and fear thy God: I am the LORD.",
      "translation": "KJV",
      "testament": "Old Testament",
      "difficulty": "Difficult",
      "timerSeconds": 35,
      "points": 150,
      "is_typed": false,
      "acceptedAlternatives": [
        "hoary"
      ],
      "hint1": "Archaic English word for gray or white hair.",
      "hint2": "h-o-a-r-y.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l31-c3",
    "game_slug": "verse-builder",
    "level": 31,
    "challenge_index": 3,
    "question_text": "Arrange these word tiles to form the priestly Aaronic blessing of Numbers 6:24-26: \"The LORD bless thee, and keep thee: The LORD make his face shine upon thee, and be gracious unto thee: The LORD lift up his countenance upon thee, and give thee peace.\"",
    "options": [
      "face",
      "LORD",
      "bless",
      "countenance",
      "thee:",
      "shine",
      "thee:",
      "keep",
      "his",
      "upon",
      "be",
      "up",
      "The",
      "peace.",
      "thee,",
      "The",
      "thee,",
      "unto",
      "give",
      "and",
      "make",
      "lift",
      "LORD",
      "and",
      "LORD",
      "gracious",
      "his",
      "The",
      "and"
    ],
    "correct_answer": "The LORD bless thee, and keep thee: The LORD make his face shine upon thee, and be gracious unto thee: The LORD lift up his countenance upon thee, and give thee peace.",
    "explanation": "Numbers 6:24-26 is the classic threefold Aaronic benediction over Israel.",
    "reference": "Numbers 6:24-26",
    "metadata": {
      "stage": 7,
      "stage_title": "Forgotten Scripture",
      "level_title": "Pentateuch Obscure Ordinances",
      "mechanic": "arrange_words",
      "verse_text": "The LORD bless thee, and keep thee: The LORD make his face shine upon thee, and be gracious unto thee: The LORD lift up his countenance upon thee, and give thee peace.",
      "translation": "KJV",
      "testament": "Old Testament",
      "difficulty": "Master",
      "timerSeconds": 120,
      "points": 250,
      "is_tiles": true,
      "word_tiles": [
        "face",
        "LORD",
        "bless",
        "countenance",
        "thee:",
        "shine",
        "thee:",
        "keep",
        "his",
        "upon",
        "be",
        "up",
        "The",
        "peace.",
        "thee,",
        "The",
        "thee,",
        "unto",
        "give",
        "and",
        "make",
        "lift",
        "LORD",
        "and",
        "LORD",
        "gracious",
        "his",
        "The",
        "and"
      ],
      "acceptedAlternatives": [
        "The LORD bless thee, and keep thee: The LORD make his face shine upon thee, and be gracious unto thee: The LORD lift up his countenance upon thee, and give thee peace."
      ],
      "hint1": "Three repetitions of \"The LORD\": bless/keep -> face shine/gracious -> countenance lift/peace.",
      "hint2": "Threefold priestly benediction.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l31-c4",
    "game_slug": "verse-builder",
    "level": 31,
    "challenge_index": 4,
    "question_text": "Complete Balaam's inspired oracle in Numbers 23:19: \"God is not a man, that he should lie; neither the son of man, that he should ______: hath he said, and shall he not do it? or hath he spoken, and shall he not make it good?\"",
    "options": [
      "repent",
      "change",
      "turn",
      "fail"
    ],
    "correct_answer": "repent",
    "explanation": "Numbers 23:19 states God's absolute immutability: \"God is not a man, that he should lie; neither the son of man, that he should repent...\"",
    "reference": "Numbers 23:19",
    "metadata": {
      "stage": 7,
      "stage_title": "Forgotten Scripture",
      "level_title": "Pentateuch Obscure Ordinances",
      "mechanic": "missing_words",
      "verse_text": "God is not a man, that he should lie; neither the son of man, that he should repent: hath he said, and shall he not do it? or hath he spoken, and shall he not make it good?",
      "translation": "KJV",
      "testament": "Old Testament",
      "difficulty": "Difficult",
      "timerSeconds": 35,
      "points": 150,
      "is_typed": false,
      "acceptedAlternatives": [
        "repent"
      ],
      "hint1": "KJV word for turning back or changing divine determination.",
      "hint2": "r-e-p-e-n-t.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l31-c5",
    "game_slug": "verse-builder",
    "level": 31,
    "challenge_index": 5,
    "question_text": "Type the opening phrase of Deuteronomy 29:29: \"______ ______ ______ belong unto the LORD our God: but those things which are revealed belong unto us and to our children for ever, that we may do all the words of this law.\"",
    "options": [],
    "correct_answer": "The secret things",
    "explanation": "Deuteronomy 29:29 balances hidden divine mysteries with revealed moral commandments: \"The secret things belong unto the LORD our God...\"",
    "reference": "Deuteronomy 29:29",
    "metadata": {
      "stage": 7,
      "stage_title": "Forgotten Scripture",
      "level_title": "Pentateuch Obscure Ordinances",
      "mechanic": "build_without_options",
      "verse_text": "The secret things belong unto the LORD our God: but those things which are revealed belong unto us and to our children for ever, that we may do all the words of this law.",
      "translation": "KJV",
      "testament": "Old Testament",
      "difficulty": "Expert",
      "timerSeconds": 45,
      "points": 200,
      "is_typed": true,
      "acceptedAlternatives": [
        "The secret things",
        "secret things"
      ],
      "hint1": "Three words for concealed divine matters.",
      "hint2": "The secret things.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l32-c1",
    "game_slug": "verse-builder",
    "level": 32,
    "challenge_index": 1,
    "question_text": "Complete 1 Chronicles 16:22: \"Saying, Touch not mine anointed, and do my ______ no harm.\"",
    "options": [
      "prophets",
      "servants",
      "priests",
      "saints"
    ],
    "correct_answer": "prophets",
    "explanation": "1 Chronicles 16:22 protects God's messengers: \"Saying, Touch not mine anointed, and do my prophets no harm.\"",
    "reference": "1 Chronicles 16:22",
    "metadata": {
      "stage": 7,
      "stage_title": "Forgotten Scripture",
      "level_title": "Historical Books Less Familiar Verses",
      "mechanic": "missing_words",
      "verse_text": "Saying, Touch not mine anointed, and do my prophets no harm.",
      "translation": "KJV",
      "testament": "Old Testament",
      "difficulty": "Moderate",
      "timerSeconds": 30,
      "points": 100,
      "is_typed": false,
      "acceptedAlternatives": [
        "prophets"
      ],
      "hint1": "Spokesmen of God.",
      "hint2": "do my prophets no harm.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l32-c2",
    "game_slug": "verse-builder",
    "level": 32,
    "challenge_index": 2,
    "question_text": "Complete David's reflection on human frailty in 1 Chronicles 29:15: \"For we are strangers before thee, and sojourners, as were all our fathers: our days on the earth are as a ______, and there is none abiding.\"",
    "options": [
      "shadow",
      "vapour",
      "dream",
      "wind"
    ],
    "correct_answer": "shadow",
    "explanation": "1 Chronicles 29:15 compares transient human life to a fleeting shadow: \"...our days on the earth are as a shadow, and there is none abiding.\"",
    "reference": "1 Chronicles 29:15",
    "metadata": {
      "stage": 7,
      "stage_title": "Forgotten Scripture",
      "level_title": "Historical Books Less Familiar Verses",
      "mechanic": "missing_words",
      "verse_text": "For we are strangers before thee, and sojourners, as were all our fathers: our days on the earth are as a shadow, and there is none abiding.",
      "translation": "KJV",
      "testament": "Old Testament",
      "difficulty": "Difficult",
      "timerSeconds": 35,
      "points": 150,
      "is_typed": false,
      "acceptedAlternatives": [
        "shadow"
      ],
      "hint1": "Dark outline cast when light is blocked.",
      "hint2": "s-h-a-d-o-w.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l32-c3",
    "game_slug": "verse-builder",
    "level": 32,
    "challenge_index": 3,
    "question_text": "Complete Hanani's declaration in 2 Chronicles 16:9: \"For the eyes of the LORD run to and fro throughout the whole earth, to shew himself strong in the behalf of them whose heart is ______ toward him.\"",
    "options": [
      "perfect",
      "faithful",
      "upright",
      "clean"
    ],
    "correct_answer": "perfect",
    "explanation": "2 Chronicles 16:9 in the KJV uses the word \"perfect\" (Hebrew shalem, undivided): \"...whose heart is perfect toward him.\"",
    "reference": "2 Chronicles 16:9",
    "metadata": {
      "stage": 7,
      "stage_title": "Forgotten Scripture",
      "level_title": "Historical Books Less Familiar Verses",
      "mechanic": "missing_words",
      "verse_text": "For the eyes of the LORD run to and fro throughout the whole earth, to shew himself strong in the behalf of them whose heart is perfect toward him.",
      "translation": "KJV",
      "testament": "Old Testament",
      "difficulty": "Difficult",
      "timerSeconds": 35,
      "points": 150,
      "is_typed": false,
      "acceptedAlternatives": [
        "perfect"
      ],
      "hint1": "Whole, undivided, completely loyal.",
      "hint2": "p-e-r-f-e-c-t.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l32-c4",
    "game_slug": "verse-builder",
    "level": 32,
    "challenge_index": 4,
    "question_text": "Type the famous exclamation from Nehemiah 8:10: \"neither be ye sorry; for the ______ ______ ______ ______ is your strength.\"",
    "options": [],
    "correct_answer": "joy of the LORD",
    "explanation": "Nehemiah 8:10 comforted the weeping remnant: \"...for the joy of the LORD is your strength.\"",
    "reference": "Nehemiah 8:10",
    "metadata": {
      "stage": 7,
      "stage_title": "Forgotten Scripture",
      "level_title": "Historical Books Less Familiar Verses",
      "mechanic": "build_without_options",
      "verse_text": "Then he said unto them, Go your way, eat the fat, and drink the sweet, and send portions unto them for whom nothing is prepared: for this day is holy unto our Lord: neither be ye sorry; for the joy of the LORD is your strength.",
      "translation": "KJV",
      "testament": "Old Testament",
      "difficulty": "Moderate",
      "timerSeconds": 35,
      "points": 100,
      "is_typed": true,
      "acceptedAlternatives": [
        "joy of the LORD",
        "joy of the Lord"
      ],
      "hint1": "Four words describing divine gladness providing fortitude.",
      "hint2": "joy of the LORD.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l32-c5",
    "game_slug": "verse-builder",
    "level": 32,
    "challenge_index": 5,
    "question_text": "Complete Mordecai's providential challenge to Esther in Esther 4:14: \"and who knoweth whether thou art come to the kingdom for ______ ______ ______ ______?\"",
    "options": [
      "such a time as this",
      "the deliverance of Israel",
      "thy people's salvation",
      "the glory of God"
    ],
    "correct_answer": "such a time as this",
    "explanation": "Esther 4:14 records Mordecai's call to courage: \"...and who knoweth whether thou art come to the kingdom for such a time as this?\"",
    "reference": "Esther 4:14",
    "metadata": {
      "stage": 7,
      "stage_title": "Forgotten Scripture",
      "level_title": "Historical Books Less Familiar Verses",
      "mechanic": "missing_phrase",
      "verse_text": "For if thou altogether holdest thy peace at this time, then shall there enlargement and deliverance arise to the Jews from another place; but thou and thy father's house shall be destroyed: and who knoweth whether thou art come to the kingdom for such a time as this?",
      "translation": "KJV",
      "testament": "Old Testament",
      "difficulty": "Moderate",
      "timerSeconds": 30,
      "points": 100,
      "is_typed": false,
      "acceptedAlternatives": [
        "such a time as this"
      ],
      "hint1": "This exact critical historical juncture.",
      "hint2": "such a time as this.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l33-c1",
    "game_slug": "verse-builder",
    "level": 33,
    "challenge_index": 1,
    "question_text": "Complete the conclusion of the whole matter in Ecclesiastes 12:13: \"Fear God, and keep his commandments: for this is the ______ ______ ______ ______.\"",
    "options": [
      "whole duty of man",
      "purpose of all creation",
      "way of everlasting life",
      "wisdom of the righteous"
    ],
    "correct_answer": "whole duty of man",
    "explanation": "Ecclesiastes 12:13 summarizes human purpose: \"Fear God, and keep his commandments: for this is the whole duty of man.\"",
    "reference": "Ecclesiastes 12:13",
    "metadata": {
      "stage": 7,
      "stage_title": "Forgotten Scripture",
      "level_title": "Wisdom & Poetic Rarities",
      "mechanic": "missing_phrase",
      "verse_text": "Let us hear the conclusion of the whole matter: Fear God, and keep his commandments: for this is the whole duty of man.",
      "translation": "KJV",
      "testament": "Old Testament",
      "difficulty": "Moderate",
      "timerSeconds": 30,
      "points": 100,
      "is_typed": false,
      "acceptedAlternatives": [
        "whole duty of man"
      ],
      "hint1": "The comprehensive obligation of every human being.",
      "hint2": "whole duty of man.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l33-c2",
    "game_slug": "verse-builder",
    "level": 33,
    "challenge_index": 2,
    "question_text": "Complete Song of Solomon 2:4: \"He brought me to the banqueting house, and his ______ over me was love.\"",
    "options": [
      "banner",
      "covering",
      "shield",
      "canopy"
    ],
    "correct_answer": "banner",
    "explanation": "Song of Solomon 2:4 speaks of royal covenant favor: \"He brought me to the banqueting house, and his banner over me was love.\"",
    "reference": "Song of Solomon 2:4",
    "metadata": {
      "stage": 7,
      "stage_title": "Forgotten Scripture",
      "level_title": "Wisdom & Poetic Rarities",
      "mechanic": "missing_words",
      "verse_text": "He brought me to the banqueting house, and his banner over me was love.",
      "translation": "KJV",
      "testament": "Old Testament",
      "difficulty": "Moderate",
      "timerSeconds": 30,
      "points": 100,
      "is_typed": false,
      "acceptedAlternatives": [
        "banner"
      ],
      "hint1": "A military flag or standard displaying identity.",
      "hint2": "b-a-n-n-e-r.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l33-c3",
    "game_slug": "verse-builder",
    "level": 33,
    "challenge_index": 3,
    "question_text": "Complete the comparison in Song of Solomon 8:6: \"Set me as a seal upon thine heart, as a seal upon thine arm: for love is strong as ______, jealousy is cruel as the grave...\"",
    "options": [
      "death",
      "iron",
      "flame",
      "storms"
    ],
    "correct_answer": "death",
    "explanation": "Song of Solomon 8:6 declares: \"...for love is strong as death; jealousy is cruel as the grave...\"",
    "reference": "Song of Solomon 8:6",
    "metadata": {
      "stage": 7,
      "stage_title": "Forgotten Scripture",
      "level_title": "Wisdom & Poetic Rarities",
      "mechanic": "missing_words",
      "verse_text": "Set me as a seal upon thine heart, as a seal upon thine arm: for love is strong as death; jealousy is cruel as the grave: the coals thereof are coals of fire, which hath a most vehement flame.",
      "translation": "KJV",
      "testament": "Old Testament",
      "difficulty": "Difficult",
      "timerSeconds": 35,
      "points": 150,
      "is_typed": false,
      "acceptedAlternatives": [
        "death"
      ],
      "hint1": "The universal physical end that conquers all men.",
      "hint2": "strong as death.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l33-c4",
    "game_slug": "verse-builder",
    "level": 33,
    "challenge_index": 4,
    "question_text": "Type the famous confession of Job in Job 19:25: \"For I know that my ______ liveth, and that he shall stand at the latter day upon the earth:\"",
    "options": [],
    "correct_answer": "redeemer",
    "explanation": "Job 19:25 triumphs through suffering: \"For I know that my redeemer liveth, and that he shall stand at the latter day upon the earth:\"",
    "reference": "Job 19:25",
    "metadata": {
      "stage": 7,
      "stage_title": "Forgotten Scripture",
      "level_title": "Wisdom & Poetic Rarities",
      "mechanic": "build_without_options",
      "verse_text": "For I know that my redeemer liveth, and that he shall stand at the latter day upon the earth:",
      "translation": "KJV",
      "testament": "Old Testament",
      "difficulty": "Moderate",
      "timerSeconds": 35,
      "points": 100,
      "is_typed": true,
      "acceptedAlternatives": [
        "redeemer",
        "Redeemer"
      ],
      "hint1": "Hebrew goel, kinsman vindicator.",
      "hint2": "r-e-d-e-e-m-e-r.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l33-c5",
    "game_slug": "verse-builder",
    "level": 33,
    "challenge_index": 5,
    "question_text": "Complete Ecclesiastes 7:1: \"A good name is better than precious ______; and the day of death than the day of one's birth.\"",
    "options": [
      "ointment",
      "jewels",
      "rubies",
      "treasure"
    ],
    "correct_answer": "ointment",
    "explanation": "Ecclesiastes 7:1 compares reputation to costly perfume: \"A good name is better than precious ointment; and the day of death than the day of one's birth.\"",
    "reference": "Ecclesiastes 7:1",
    "metadata": {
      "stage": 7,
      "stage_title": "Forgotten Scripture",
      "level_title": "Wisdom & Poetic Rarities",
      "mechanic": "missing_words",
      "verse_text": "A good name is better than precious ointment; and the day of death than the day of one's birth.",
      "translation": "KJV",
      "testament": "Old Testament",
      "difficulty": "Difficult",
      "timerSeconds": 35,
      "points": 150,
      "is_typed": false,
      "acceptedAlternatives": [
        "ointment"
      ],
      "hint1": "Fragrant oil used for anointing.",
      "hint2": "o-i-n-t-m-e-n-t.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l34-c1",
    "game_slug": "verse-builder",
    "level": 34,
    "challenge_index": 1,
    "question_text": "Complete the foundational doctrine in Habakkuk 2:4: \"Behold, his soul which is lifted up is not upright in him: but the just shall live by his ______.\"",
    "options": [
      "faith",
      "righteousness",
      "integrity",
      "prayer"
    ],
    "correct_answer": "faith",
    "explanation": "Habakkuk 2:4 is the text of the Protestant Reformation quoted in Romans, Galatians, and Hebrews: \"...but the just shall live by his faith.\"",
    "reference": "Habakkuk 2:4",
    "metadata": {
      "stage": 7,
      "stage_title": "Forgotten Scripture",
      "level_title": "Minor Prophets Jewels",
      "mechanic": "missing_words",
      "verse_text": "Behold, his soul which is lifted up is not upright in him: but the just shall live by his faith.",
      "translation": "KJV",
      "testament": "Old Testament",
      "difficulty": "Moderate",
      "timerSeconds": 30,
      "points": 100,
      "is_typed": false,
      "acceptedAlternatives": [
        "faith"
      ],
      "hint1": "Trust and steadfast loyalty toward God.",
      "hint2": "f-a-i-t-h.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l34-c2",
    "game_slug": "verse-builder",
    "level": 34,
    "challenge_index": 2,
    "question_text": "Complete Zephaniah 3:17: \"The LORD thy God in the midst of thee is mighty; he will save, he will rejoice over thee with joy; he will rest in his love, he will ______ ______ ______ ______ ______.\"",
    "options": [
      "joy over thee with singing",
      "wipe away all thy tears",
      "bless thee with abundant peace",
      "lead thee unto living fountains"
    ],
    "correct_answer": "joy over thee with singing",
    "explanation": "Zephaniah 3:17 portrays God singing over His redeemed people: \"...he will rest in his love, he will joy over thee with singing.\"",
    "reference": "Zephaniah 3:17",
    "metadata": {
      "stage": 7,
      "stage_title": "Forgotten Scripture",
      "level_title": "Minor Prophets Jewels",
      "mechanic": "missing_phrase",
      "verse_text": "The LORD thy God in the midst of thee is mighty; he will save, he will rejoice over thee with joy; he will rest in his love, he will joy over thee with singing.",
      "translation": "KJV",
      "testament": "Old Testament",
      "difficulty": "Difficult",
      "timerSeconds": 40,
      "points": 150,
      "is_typed": false,
      "acceptedAlternatives": [
        "joy over thee with singing"
      ],
      "hint1": "God expressing vocal delight through song.",
      "hint2": "joy over thee with singing.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l34-c3",
    "game_slug": "verse-builder",
    "level": 34,
    "challenge_index": 3,
    "question_text": "Complete the temple prophecy in Haggai 2:9: \"The glory of this latter house shall be greater than of the former, saith the LORD of hosts: and in this place will I ______ ______, saith the LORD of hosts.\"",
    "options": [
      "give peace",
      "manifest my name",
      "dwell forever",
      "shew mercy"
    ],
    "correct_answer": "give peace",
    "explanation": "Haggai 2:9 promises: \"...and in this place will I give peace, saith the LORD of hosts.\"",
    "reference": "Haggai 2:9",
    "metadata": {
      "stage": 7,
      "stage_title": "Forgotten Scripture",
      "level_title": "Minor Prophets Jewels",
      "mechanic": "missing_phrase",
      "verse_text": "The glory of this latter house shall be greater than of the former, saith the LORD of hosts: and in this place will I give peace, saith the LORD of hosts.",
      "translation": "KJV",
      "testament": "Old Testament",
      "difficulty": "Difficult",
      "timerSeconds": 35,
      "points": 150,
      "is_typed": false,
      "acceptedAlternatives": [
        "give peace"
      ],
      "hint1": "Granting shalom in the temple.",
      "hint2": "give peace.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l34-c4",
    "game_slug": "verse-builder",
    "level": 34,
    "challenge_index": 4,
    "question_text": "Type the missing three words in Zechariah 8:16: \"These are the things that ye shall do; Speak ye every man the ______ to his neighbour; execute the judgment of ______ and ______ in your gates:\"",
    "options": [],
    "correct_answer": "truth truth peace",
    "explanation": "Zechariah 8:16 commands honesty and justice: \"Speak ye every man the truth to his neighbour; execute the judgment of truth and peace in your gates:\"",
    "reference": "Zechariah 8:16",
    "metadata": {
      "stage": 7,
      "stage_title": "Forgotten Scripture",
      "level_title": "Minor Prophets Jewels",
      "mechanic": "build_without_options",
      "verse_text": "These are the things that ye shall do; Speak ye every man the truth to his neighbour; execute the judgment of truth and peace in your gates:",
      "translation": "KJV",
      "testament": "Old Testament",
      "difficulty": "Expert",
      "timerSeconds": 45,
      "points": 200,
      "is_typed": true,
      "acceptedAlternatives": [
        "truth truth peace",
        "truth, truth, peace",
        "truth and peace"
      ],
      "hint1": "Verity spoken, followed by judgments of verity and shalom.",
      "hint2": "truth... truth and peace.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l34-c5",
    "game_slug": "verse-builder",
    "level": 34,
    "challenge_index": 5,
    "question_text": "Complete Malachi 4:2: \"But unto you that fear my name shall the Sun of righteousness arise with ______ in his wings; and ye shall go forth, and grow up as calves of the stall.\"",
    "options": [
      "healing",
      "light",
      "glory",
      "salvation"
    ],
    "correct_answer": "healing",
    "explanation": "Malachi 4:2 prophesies the rising of the Messiah: \"...shall the Sun of righteousness arise with healing in his wings...\"",
    "reference": "Malachi 4:2",
    "metadata": {
      "stage": 7,
      "stage_title": "Forgotten Scripture",
      "level_title": "Minor Prophets Jewels",
      "mechanic": "missing_words",
      "verse_text": "But unto you that fear my name shall the Sun of righteousness arise with healing in his wings; and ye shall go forth, and grow up as calves of the stall.",
      "translation": "KJV",
      "testament": "Old Testament",
      "difficulty": "Moderate",
      "timerSeconds": 30,
      "points": 100,
      "is_typed": false,
      "acceptedAlternatives": [
        "healing"
      ],
      "hint1": "Restoration, cure, and wellness.",
      "hint2": "h-e-a-l-i-n-g.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l35-c1",
    "game_slug": "verse-builder",
    "level": 35,
    "challenge_index": 1,
    "question_text": "Complete the opening of Jude's famous doxology (Jude 1:24): \"Now unto him that is able to keep you from ______...\"",
    "options": [
      "falling",
      "evil",
      "stumbling",
      "deceit"
    ],
    "correct_answer": "falling",
    "explanation": "Jude 1:24 praises God's preserving power: \"Now unto him that is able to keep you from falling, and to present you faultless before the presence of his glory with exceeding joy,\"",
    "reference": "Jude 1:24",
    "metadata": {
      "stage": 7,
      "stage_title": "Forgotten Scripture",
      "level_title": "General Epistles Gems",
      "mechanic": "missing_words",
      "verse_text": "Now unto him that is able to keep you from falling, and to present you faultless before the presence of his glory with exceeding joy,",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Moderate",
      "timerSeconds": 30,
      "points": 100,
      "is_typed": false,
      "acceptedAlternatives": [
        "falling"
      ],
      "hint1": "Apostasy or collapse.",
      "hint2": "keep you from falling.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l35-c2",
    "game_slug": "verse-builder",
    "level": 35,
    "challenge_index": 2,
    "question_text": "Complete Paul's prayer for Philemon in Philemon 1:6: \"That the communication of thy faith may become effectual by the acknowledging of every ______ ______ which is in you in Christ Jesus.\"",
    "options": [
      "good thing",
      "holy gift",
      "spiritual grace",
      "righteous work"
    ],
    "correct_answer": "good thing",
    "explanation": "Philemon 1:6 encourages the recognition of grace: \"...by the acknowledging of every good thing which is in you in Christ Jesus.\"",
    "reference": "Philemon 1:6",
    "metadata": {
      "stage": 7,
      "stage_title": "Forgotten Scripture",
      "level_title": "General Epistles Gems",
      "mechanic": "missing_phrase",
      "verse_text": "That the communication of thy faith may become effectual by the acknowledging of every good thing which is in you in Christ Jesus.",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Difficult",
      "timerSeconds": 35,
      "points": 150,
      "is_typed": false,
      "acceptedAlternatives": [
        "good thing"
      ],
      "hint1": "Two words indicating virtuous endowments.",
      "hint2": "every good thing.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l35-c3",
    "game_slug": "verse-builder",
    "level": 35,
    "challenge_index": 3,
    "question_text": "Complete 2 Peter 3:9: \"The Lord is not slack concerning his promise, as some men count slackness; but is longsuffering to us-ward, not willing that any should perish, but that all should come to ______.\"",
    "options": [
      "repentance",
      "faith",
      "truth",
      "salvation"
    ],
    "correct_answer": "repentance",
    "explanation": "2 Peter 3:9 reveals God's patient desire for sinners: \"...not willing that any should perish, but that all should come to repentance.\"",
    "reference": "2 Peter 3:9",
    "metadata": {
      "stage": 7,
      "stage_title": "Forgotten Scripture",
      "level_title": "General Epistles Gems",
      "mechanic": "missing_words",
      "verse_text": "The Lord is not slack concerning his promise, as some men count slackness; but is longsuffering to us-ward, not willing that any should perish, but that all should come to repentance.",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Moderate",
      "timerSeconds": 30,
      "points": 100,
      "is_typed": false,
      "acceptedAlternatives": [
        "repentance"
      ],
      "hint1": "Turning from sin toward God.",
      "hint2": "r-e-p-e-n-t-a-n-c-e.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l35-c4",
    "game_slug": "verse-builder",
    "level": 35,
    "challenge_index": 4,
    "question_text": "Complete 2 John 1:6: \"And this is love, that we walk after his commandments. This is the commandment, That, as ye have heard from the beginning, ye should ______ ______ ______.\"",
    "options": [
      "walk in it",
      "abide therein",
      "keep the truth",
      "love one another"
    ],
    "correct_answer": "walk in it",
    "explanation": "2 John 1:6 defines love through obedience: \"...as ye have heard from the beginning, ye should walk in it.\"",
    "reference": "2 John 1:6",
    "metadata": {
      "stage": 7,
      "stage_title": "Forgotten Scripture",
      "level_title": "General Epistles Gems",
      "mechanic": "missing_phrase",
      "verse_text": "And this is love, that we walk after his commandments. This is the commandment, That, as ye have heard from the beginning, ye should walk in it.",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Difficult",
      "timerSeconds": 35,
      "points": 150,
      "is_typed": false,
      "acceptedAlternatives": [
        "walk in it"
      ],
      "hint1": "Three words for active conduct in love.",
      "hint2": "walk in it.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l35-c5",
    "game_slug": "verse-builder",
    "level": 35,
    "challenge_index": 5,
    "question_text": "Type John's greatest pastoral joy in 3 John 1:4: \"I have no greater joy than to hear that my children ______ ______ ______.\"",
    "options": [],
    "correct_answer": "walk in truth",
    "explanation": "3 John 1:4 records the elder's profound delight: \"I have no greater joy than to hear that my children walk in truth.\"",
    "reference": "3 John 1:4",
    "metadata": {
      "stage": 7,
      "stage_title": "Forgotten Scripture",
      "level_title": "General Epistles Gems",
      "mechanic": "build_without_options",
      "verse_text": "I have no greater joy than to hear that my children walk in truth.",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Difficult",
      "timerSeconds": 35,
      "points": 150,
      "is_typed": true,
      "acceptedAlternatives": [
        "walk in truth",
        "walk in the truth"
      ],
      "hint1": "Living in accordance with God's verity.",
      "hint2": "walk in truth.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l36-c1",
    "game_slug": "verse-builder",
    "level": 36,
    "challenge_index": 1,
    "question_text": "Which exact Scripture citation matches: \"Trust in the LORD with all thine heart; and lean not unto thine own understanding. In all thy ways acknowledge him, and he shall direct thy paths.\"",
    "options": [
      "Proverbs 3:5-6",
      "Proverbs 4:5-6",
      "Proverbs 16:3-4",
      "Proverbs 28:26"
    ],
    "correct_answer": "Proverbs 3:5-6",
    "explanation": "Proverbs 3:5-6 is Solomon's famous counsel on wholehearted trust and divine guidance.",
    "reference": "Proverbs 3:5-6",
    "metadata": {
      "stage": 8,
      "stage_title": "The Reference Test",
      "level_title": "Exact Citation Matching",
      "mechanic": "find_version",
      "verse_text": "Trust in the LORD with all thine heart; and lean not unto thine own understanding. In all thy ways acknowledge him, and he shall direct thy paths.",
      "translation": "KJV",
      "testament": "Old Testament",
      "difficulty": "Moderate",
      "timerSeconds": 30,
      "points": 100,
      "is_typed": false,
      "acceptedAlternatives": [
        "Proverbs 3:5-6"
      ],
      "hint1": "Third chapter of Proverbs, verses 5 and 6.",
      "hint2": "Proverbs 3:5-6.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l36-c2",
    "game_slug": "verse-builder",
    "level": 36,
    "challenge_index": 2,
    "question_text": "Which citation contains: \"And we know that all things work together for good to them that love God, to them who are the called according to his purpose.\"",
    "options": [
      "Romans 8:28",
      "Romans 8:31",
      "Romans 12:2",
      "1 Corinthians 2:9"
    ],
    "correct_answer": "Romans 8:28",
    "explanation": "Romans 8:28 provides the anchor promise of God's sovereign goodness.",
    "reference": "Romans 8:28",
    "metadata": {
      "stage": 8,
      "stage_title": "The Reference Test",
      "level_title": "Exact Citation Matching",
      "mechanic": "find_version",
      "verse_text": "And we know that all things work together for good to them that love God, to them who are the called according to his purpose.",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Moderate",
      "timerSeconds": 30,
      "points": 100,
      "is_typed": false,
      "acceptedAlternatives": [
        "Romans 8:28"
      ],
      "hint1": "Romans chapter 8, verse 28.",
      "hint2": "Romans 8:28.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l36-c3",
    "game_slug": "verse-builder",
    "level": 36,
    "challenge_index": 3,
    "question_text": "Where is this eagle-winged promise found? \"But they that wait upon the LORD shall renew their strength; they shall mount up with wings as eagles; they shall run, and not be weary; and they shall walk, and not faint.\"",
    "options": [
      "Isaiah 40:31",
      "Isaiah 41:10",
      "Isaiah 43:2",
      "Jeremiah 29:11"
    ],
    "correct_answer": "Isaiah 40:31",
    "explanation": "Isaiah 40:31 concludes Isaiah's magnificent chapter on the majesty of God.",
    "reference": "Isaiah 40:31",
    "metadata": {
      "stage": 8,
      "stage_title": "The Reference Test",
      "level_title": "Exact Citation Matching",
      "mechanic": "find_version",
      "verse_text": "But they that wait upon the LORD shall renew their strength; they shall mount up with wings as eagles; they shall run, and not be weary; and they shall walk, and not faint.",
      "translation": "KJV",
      "testament": "Old Testament",
      "difficulty": "Moderate",
      "timerSeconds": 30,
      "points": 100,
      "is_typed": false,
      "acceptedAlternatives": [
        "Isaiah 40:31"
      ],
      "hint1": "Isaiah chapter 40, final verse.",
      "hint2": "Isaiah 40:31.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l36-c4",
    "game_slug": "verse-builder",
    "level": 36,
    "challenge_index": 4,
    "question_text": "Where is the declaration: \"The LORD is my shepherd; I shall not want. He maketh me to lie down in green pastures: he leadeth me beside the still waters.\"",
    "options": [
      "Psalm 23:1-2",
      "Psalm 24:1-2",
      "Psalm 27:1-2",
      "Psalm 91:1-2"
    ],
    "correct_answer": "Psalm 23:1-2",
    "explanation": "Psalm 23:1-2 begins David's shepherd psalm.",
    "reference": "Psalm 23:1-2",
    "metadata": {
      "stage": 8,
      "stage_title": "The Reference Test",
      "level_title": "Exact Citation Matching",
      "mechanic": "find_version",
      "verse_text": "The LORD is my shepherd; I shall not want. He maketh me to lie down in green pastures: he leadeth me beside the still waters.",
      "translation": "KJV",
      "testament": "Old Testament",
      "difficulty": "Easy",
      "timerSeconds": 25,
      "points": 50,
      "is_typed": false,
      "acceptedAlternatives": [
        "Psalm 23:1-2"
      ],
      "hint1": "Psalm 23.",
      "hint2": "Psalm 23:1-2.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l36-c5",
    "game_slug": "verse-builder",
    "level": 36,
    "challenge_index": 5,
    "question_text": "Identify the exact citation: \"For the word of God is quick, and powerful, and sharper than any twoedged sword, piercing even to the dividing asunder of soul and spirit, and of the joints and marrow...\"",
    "options": [
      "Hebrews 4:12",
      "Hebrews 11:1",
      "Ephesians 6:17",
      "2 Timothy 3:16"
    ],
    "correct_answer": "Hebrews 4:12",
    "explanation": "Hebrews 4:12 compares the living Word of God to a sharp two-edged sword.",
    "reference": "Hebrews 4:12",
    "metadata": {
      "stage": 8,
      "stage_title": "The Reference Test",
      "level_title": "Exact Citation Matching",
      "mechanic": "find_version",
      "verse_text": "For the word of God is quick, and powerful, and sharper than any twoedged sword, piercing even to the dividing asunder of soul and spirit, and of the joints and marrow, and is a discerner of the thoughts and intents of the heart.",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Moderate",
      "timerSeconds": 30,
      "points": 100,
      "is_typed": false,
      "acceptedAlternatives": [
        "Hebrews 4:12"
      ],
      "hint1": "Hebrews chapter 4.",
      "hint2": "Hebrews 4:12.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l37-c1",
    "game_slug": "verse-builder",
    "level": 37,
    "challenge_index": 1,
    "question_text": "Reconstruct Philippians 4:4 from memory: \"______ in the Lord alway: and again I say, ______.\"",
    "options": [
      "Rejoice / Rejoice",
      "Praise / Praise",
      "Rest / Rest",
      "Pray / Pray"
    ],
    "correct_answer": "Rejoice / Rejoice",
    "explanation": "Philippians 4:4 commands twice: \"Rejoice in the Lord alway: and again I say, Rejoice.\"",
    "reference": "Philippians 4:4",
    "metadata": {
      "stage": 8,
      "stage_title": "The Reference Test",
      "level_title": "Build Verse from Reference Alone",
      "mechanic": "missing_words",
      "verse_text": "Rejoice in the Lord alway: and again I say, Rejoice.",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Moderate",
      "timerSeconds": 30,
      "points": 100,
      "is_typed": false,
      "acceptedAlternatives": [
        "Rejoice / Rejoice",
        "Rejoice Rejoice"
      ],
      "hint1": "Repeated verb of Christian gladness.",
      "hint2": "Rejoice.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l37-c2",
    "game_slug": "verse-builder",
    "level": 37,
    "challenge_index": 2,
    "question_text": "Type the full text of John 14:6: \"Jesus saith unto him, I am the way, the truth, and the life: no man cometh unto the Father, ______ ______ ______.\"",
    "options": [],
    "correct_answer": "but by me",
    "explanation": "John 14:6 establishes sole access to God: \"...no man cometh unto the Father, but by me.\"",
    "reference": "John 14:6",
    "metadata": {
      "stage": 8,
      "stage_title": "The Reference Test",
      "level_title": "Build Verse from Reference Alone",
      "mechanic": "build_without_options",
      "verse_text": "Jesus saith unto him, I am the way, the truth, and the life: no man cometh unto the Father, but by me.",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Moderate",
      "timerSeconds": 35,
      "points": 100,
      "is_typed": true,
      "acceptedAlternatives": [
        "but by me",
        "but by me."
      ],
      "hint1": "Three words establishing exclusive mediation through Jesus.",
      "hint2": "but by me.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l37-c3",
    "game_slug": "verse-builder",
    "level": 37,
    "challenge_index": 3,
    "question_text": "Reconstruct Romans 3:23: \"For all have ______ and come ______ of the ______ of God.\"",
    "options": [
      "sinned / short / glory",
      "fallen / short / grace",
      "erred / far / kingdom",
      "failed / lacking / holiness"
    ],
    "correct_answer": "sinned / short / glory",
    "explanation": "Romans 3:23 states: \"For all have sinned, and come short of the glory of God.\"",
    "reference": "Romans 3:23",
    "metadata": {
      "stage": 8,
      "stage_title": "The Reference Test",
      "level_title": "Build Verse from Reference Alone",
      "mechanic": "missing_words",
      "verse_text": "For all have sinned, and come short of the glory of God;",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Moderate",
      "timerSeconds": 30,
      "points": 100,
      "is_typed": false,
      "acceptedAlternatives": [
        "sinned / short / glory",
        "sinned short glory"
      ],
      "hint1": "Sinned -> short -> glory.",
      "hint2": "sinned / short / glory.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l37-c4",
    "game_slug": "verse-builder",
    "level": 37,
    "challenge_index": 4,
    "question_text": "Type the exact words of Proverbs 16:18: \"______ goeth before destruction, and an ______ spirit before a fall.\"",
    "options": [],
    "correct_answer": "Pride haughty",
    "explanation": "Proverbs 16:18 cautions: \"Pride goeth before destruction, and an haughty spirit before a fall.\"",
    "reference": "Proverbs 16:18",
    "metadata": {
      "stage": 8,
      "stage_title": "The Reference Test",
      "level_title": "Build Verse from Reference Alone",
      "mechanic": "build_without_options",
      "verse_text": "Pride goeth before destruction, and an haughty spirit before a fall.",
      "translation": "KJV",
      "testament": "Old Testament",
      "difficulty": "Difficult",
      "timerSeconds": 40,
      "points": 150,
      "is_typed": true,
      "acceptedAlternatives": [
        "Pride haughty",
        "Pride, haughty",
        "pride haughty"
      ],
      "hint1": "Two words: arrogance and a proud demeanor.",
      "hint2": "Pride... haughty.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l37-c5",
    "game_slug": "verse-builder",
    "level": 37,
    "challenge_index": 5,
    "question_text": "Reconstruct Psalm 119:105: \"Thy word is a ______ unto my feet, and a ______ unto my path.\"",
    "options": [
      "lamp / light",
      "light / guide",
      "lantern / lamp",
      "torch / light"
    ],
    "correct_answer": "lamp / light",
    "explanation": "Psalm 119:105: \"Thy word is a lamp unto my feet, and a light unto my path.\"",
    "reference": "Psalm 119:105",
    "metadata": {
      "stage": 8,
      "stage_title": "The Reference Test",
      "level_title": "Build Verse from Reference Alone",
      "mechanic": "missing_words",
      "verse_text": "Thy word is a lamp unto my feet, and a light unto my path.",
      "translation": "KJV",
      "testament": "Old Testament",
      "difficulty": "Moderate",
      "timerSeconds": 25,
      "points": 100,
      "is_typed": false,
      "acceptedAlternatives": [
        "lamp / light",
        "lamp light"
      ],
      "hint1": "A portable oil lamp, then general illumination.",
      "hint2": "lamp and light.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l38-c1",
    "game_slug": "verse-builder",
    "level": 38,
    "challenge_index": 1,
    "question_text": "Distinguish Genesis 1:26 from 1:27: Which verse records God saying: \"Let us make man in our image, after our likeness: and let them have dominion...\"",
    "options": [
      "Genesis 1:26",
      "Genesis 1:27",
      "Genesis 1:28",
      "Genesis 2:7"
    ],
    "correct_answer": "Genesis 1:26",
    "explanation": "Genesis 1:26 records the divine counsel (\"Let us make man in our image...\"), whereas verse 27 records the execution (\"So God created man in his own image...\").",
    "reference": "Genesis 1:26",
    "metadata": {
      "stage": 8,
      "stage_title": "The Reference Test",
      "level_title": "Chapter & Verse Precision",
      "mechanic": "find_version",
      "verse_text": "And God said, Let us make man in our image, after our likeness: and let them have dominion over the fish of the sea, and over the fowl of the air...",
      "translation": "KJV",
      "testament": "Old Testament",
      "difficulty": "Difficult",
      "timerSeconds": 35,
      "points": 150,
      "is_typed": false,
      "acceptedAlternatives": [
        "Genesis 1:26"
      ],
      "hint1": "The divine deliberation before the act in verse 27.",
      "hint2": "Genesis 1:26.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l38-c2",
    "game_slug": "verse-builder",
    "level": 38,
    "challenge_index": 2,
    "question_text": "Distinguish Romans 12:1 from Romans 12:2: Which verse specifically commands: \"present your bodies a living sacrifice, holy, acceptable unto God, which is your reasonable service.\"",
    "options": [
      "Romans 12:1",
      "Romans 12:2",
      "Romans 12:3",
      "Romans 12:9"
    ],
    "correct_answer": "Romans 12:1",
    "explanation": "Romans 12:1 calls for bodily consecration; verse 2 commands mind renewal (\"be not conformed to this world\").",
    "reference": "Romans 12:1",
    "metadata": {
      "stage": 8,
      "stage_title": "The Reference Test",
      "level_title": "Chapter & Verse Precision",
      "mechanic": "find_version",
      "verse_text": "I beseech you therefore, brethren, by the mercies of God, that ye present your bodies a living sacrifice, holy, acceptable unto God, which is your reasonable service.",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Difficult",
      "timerSeconds": 35,
      "points": 150,
      "is_typed": false,
      "acceptedAlternatives": [
        "Romans 12:1"
      ],
      "hint1": "The opening verse of Romans 12.",
      "hint2": "Romans 12:1.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l38-c3",
    "game_slug": "verse-builder",
    "level": 38,
    "challenge_index": 3,
    "question_text": "Which verse states: \"He that dwelleth in the secret place of the most High shall abide under the shadow of the Almighty.\"",
    "options": [
      "Psalm 91:1",
      "Psalm 91:2",
      "Psalm 91:4",
      "Psalm 91:9"
    ],
    "correct_answer": "Psalm 91:1",
    "explanation": "Psalm 91:1 opens the psalm of divine shelter.",
    "reference": "Psalm 91:1",
    "metadata": {
      "stage": 8,
      "stage_title": "The Reference Test",
      "level_title": "Chapter & Verse Precision",
      "mechanic": "find_version",
      "verse_text": "He that dwelleth in the secret place of the most High shall abide under the shadow of the Almighty.",
      "translation": "KJV",
      "testament": "Old Testament",
      "difficulty": "Moderate",
      "timerSeconds": 30,
      "points": 100,
      "is_typed": false,
      "acceptedAlternatives": [
        "Psalm 91:1"
      ],
      "hint1": "Opening verse of Psalm 91.",
      "hint2": "Psalm 91:1.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l38-c4",
    "game_slug": "verse-builder",
    "level": 38,
    "challenge_index": 4,
    "question_text": "Which verse in Matthew 28 contains: \"Go ye therefore, and teach all nations, baptizing them in the name of the Father, and of the Son, and of the Holy Ghost:\"",
    "options": [
      "Matthew 28:19",
      "Matthew 28:18",
      "Matthew 28:20",
      "Matthew 28:16"
    ],
    "correct_answer": "Matthew 28:19",
    "explanation": "Matthew 28:19 contains the command to teach and baptize; verse 20 adds \"Teaching them to observe all things...\"",
    "reference": "Matthew 28:19",
    "metadata": {
      "stage": 8,
      "stage_title": "The Reference Test",
      "level_title": "Chapter & Verse Precision",
      "mechanic": "find_version",
      "verse_text": "Go ye therefore, and teach all nations, baptizing them in the name of the Father, and of the Son, and of the Holy Ghost:",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Moderate",
      "timerSeconds": 30,
      "points": 100,
      "is_typed": false,
      "acceptedAlternatives": [
        "Matthew 28:19"
      ],
      "hint1": "The next-to-last verse of Matthew.",
      "hint2": "Matthew 28:19.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l38-c5",
    "game_slug": "verse-builder",
    "level": 38,
    "challenge_index": 5,
    "question_text": "Type the reference for: \"For God sent not his Son into the world to condemn the world; but that the world through him might be saved.\"",
    "options": [],
    "correct_answer": "John 3:17",
    "explanation": "John 3:17 immediately follows John 3:16, emphasizing Christ's mission of redemption rather than immediate condemnation.",
    "reference": "John 3:17",
    "metadata": {
      "stage": 8,
      "stage_title": "The Reference Test",
      "level_title": "Chapter & Verse Precision",
      "mechanic": "build_without_options",
      "verse_text": "For God sent not his Son into the world to condemn the world; but that the world through him might be saved.",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Difficult",
      "timerSeconds": 35,
      "points": 150,
      "is_typed": true,
      "acceptedAlternatives": [
        "John 3:17",
        "Jn 3:17"
      ],
      "hint1": "The verse immediately following John 3:16.",
      "hint2": "John 3:17.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l39-c1",
    "game_slug": "verse-builder",
    "level": 39,
    "challenge_index": 1,
    "question_text": "Identify the exact King James Version wording of Psalm 46:10:",
    "options": [
      "Be still, and know that I am God: I will be exalted among the heathen, I will be exalted in the earth.",
      "Be still, and know that I am God: I will be exalted among the nations, I will be exalted in the earth.",
      "Cease striving and know that I am God; I will be exalted among the nations.",
      "Be quiet, and understand that I am God: I will rule over the heathen."
    ],
    "correct_answer": "Be still, and know that I am God: I will be exalted among the heathen, I will be exalted in the earth.",
    "explanation": "KJV Psalm 46:10 specifically uses the term \"the heathen\" rather than modern translations' \"the nations\".",
    "reference": "Psalm 46:10",
    "metadata": {
      "stage": 8,
      "stage_title": "The Reference Test",
      "level_title": "Translation Forensic Test",
      "mechanic": "find_version",
      "verse_text": "Be still, and know that I am God: I will be exalted among the heathen, I will be exalted in the earth.",
      "translation": "KJV",
      "testament": "Old Testament",
      "difficulty": "Difficult",
      "timerSeconds": 40,
      "points": 150,
      "is_typed": false,
      "acceptedAlternatives": [
        "Be still, and know that I am God: I will be exalted among the heathen, I will be exalted in the earth."
      ],
      "hint1": "KJV specifically preserves \"among the heathen\".",
      "hint2": "exalted among the heathen.",
      "curated": true
    }
  },
    {
    "id": "verse-builder-l39-c2",
    "game_slug": "verse-builder",
    "level": 39,
    "challenge_index": 2,
    "question_text": "Identify the exact King James Version wording of Nahum 1:7:",
    "options": [
      "The LORD is good, a strong hold in the day of trouble; and he knoweth them that trust in him.",
      "The LORD is gracious and full of compassion, slow to anger, and of great mercy.",
      "God is our refuge and strength, a very present help in trouble.",
      "The name of the LORD is a strong tower: the righteous runneth into it, and is safe."
    ],
    "correct_answer": "The LORD is good, a strong hold in the day of trouble; and he knoweth them that trust in him.",
    "explanation": "Nahum 1:7 (KJV) describes the LORD as good, a stronghold in trouble, and one who knows those who trust in Him.",
    "reference": "Nahum 1:7",
    "metadata": {
      "stage": 8,
      "stage_title": "The Reference Test",
      "level_title": "Translation Forensic Test",
      "mechanic": "find_version",
      "verse_text": "The LORD is good, a strong hold in the day of trouble; and he knoweth them that trust in him.",
      "translation": "KJV",
      "testament": "Old Testament",
      "difficulty": "Difficult",
      "timerSeconds": 40,
      "points": 150,
      "is_typed": false,
      "acceptedAlternatives": [
        "The LORD is good, a strong hold in the day of trouble; and he knoweth them that trust in him."
      ],
      "hint1": "Begins by describing the LORD as good.",
      "hint2": "It ends with those who trust in Him.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l39-c3",
    "game_slug": "verse-builder",
    "level": 39,
    "challenge_index": 3,
    "question_text": "Identify the exact KJV wording in 1 Corinthians 10:13:",
    "options": [
      "There hath no temptation taken you but such as is common to man: but God is faithful, who will not suffer you to be tempted above that ye are able;",
      "No temptation has overtaken you except what is common to mankind. And God is faithful; he will not let you be tempted beyond what you can bear.",
      "No trial has seized you that is not common to men; but God will keep you from being tested too much;",
      "There is no temptation fallen upon you but such as belongs to humanity: for God is true and will preserve you;"
    ],
    "correct_answer": "There hath no temptation taken you but such as is common to man: but God is faithful, who will not suffer you to be tempted above that ye are able;",
    "explanation": "KJV uses archaic verbs: \"There hath no temptation taken you\", \"will not suffer you\", and \"above that ye are able\".",
    "reference": "1 Corinthians 10:13",
    "metadata": {
      "stage": 8,
      "stage_title": "The Reference Test",
      "level_title": "Translation Forensic Test",
      "mechanic": "find_version",
      "verse_text": "There hath no temptation taken you but such as is common to man: but God is faithful, who will not suffer you to be tempted above that ye are able; but will with the temptation also make a way to escape, that ye may be able to bear it.",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Expert",
      "timerSeconds": 45,
      "points": 200,
      "is_typed": false,
      "acceptedAlternatives": [
        "There hath no temptation taken you but such as is common to man: but God is faithful, who will not suffer you to be tempted above that ye are able;"
      ],
      "hint1": "Look for \"hath... taken you\" and \"will not suffer you\".",
      "hint2": "KJV archaic verbs.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l39-c4",
    "game_slug": "verse-builder",
    "level": 39,
    "challenge_index": 4,
    "question_text": "Which version represents the exact KJV of Hebrews 11:6?",
    "options": [
      "But without faith it is impossible to please him: for he that cometh to God must believe that he is, and that he is a rewarder of them that diligently seek him.",
      "And without faith it is impossible to please God, because anyone who comes to him must believe that he exists and that he rewards those who earnestly seek him.",
      "Without faith no one can please God; for whoever approaches him must acknowledge his being and trust his reward.",
      "For without faith none can find favour: he that approacheth God must know that he liveth and giveth recompense."
    ],
    "correct_answer": "But without faith it is impossible to please him: for he that cometh to God must believe that he is, and that he is a rewarder of them that diligently seek him.",
    "explanation": "Hebrews 11:6 in KJV features: \"must believe that he is, and that he is a rewarder of them that diligently seek him.\"",
    "reference": "Hebrews 11:6",
    "metadata": {
      "stage": 8,
      "stage_title": "The Reference Test",
      "level_title": "Translation Forensic Test",
      "mechanic": "find_version",
      "verse_text": "But without faith it is impossible to please him: for he that cometh to God must believe that he is, and that he is a rewarder of them that diligently seek him.",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Expert",
      "timerSeconds": 45,
      "points": 200,
      "is_typed": false,
      "acceptedAlternatives": [
        "But without faith it is impossible to please him: for he that cometh to God must believe that he is, and that he is a rewarder of them that diligently seek him."
      ],
      "hint1": "KJV reads: \"believe that he is\" (not \"that he exists\") and \"diligently seek him\".",
      "hint2": "he is a rewarder of them that diligently seek him.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l39-c5",
    "game_slug": "verse-builder",
    "level": 39,
    "challenge_index": 5,
    "question_text": "Identify the exact KJV wording of Romans 12:21:",
    "options": [
      "Be not overcome of evil, but overcome evil with good.",
      "Do not be overcome by evil, but overcome evil with good.",
      "Let not evil conquer you, but conquer evil through righteousness.",
      "Be not defeated by wickedness, but defeat wickedness with goodness."
    ],
    "correct_answer": "Be not overcome of evil, but overcome evil with good.",
    "explanation": "KJV Romans 12:21 uses the preposition \"of\": \"Be not overcome of evil, but overcome evil with good.\"",
    "reference": "Romans 12:21",
    "metadata": {
      "stage": 8,
      "stage_title": "The Reference Test",
      "level_title": "Translation Forensic Test",
      "mechanic": "find_version",
      "verse_text": "Be not overcome of evil, but overcome evil with good.",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Moderate",
      "timerSeconds": 30,
      "points": 100,
      "is_typed": false,
      "acceptedAlternatives": [
        "Be not overcome of evil, but overcome evil with good."
      ],
      "hint1": "KJV uses \"of evil\" rather than modern \"by evil\".",
      "hint2": "overcome of evil.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l40-c1",
    "game_slug": "verse-builder",
    "level": 40,
    "challenge_index": 1,
    "question_text": "Where is the call to holiness found: \"For I am the LORD your God: ye shall therefore sanctify yourselves, and ye shall be holy; for I am holy...\"",
    "options": [
      "Leviticus 11:44",
      "Exodus 19:6",
      "Leviticus 19:2",
      "Deuteronomy 7:6"
    ],
    "correct_answer": "Leviticus 11:44",
    "explanation": "Leviticus 11:44 anchors dietary holiness in God's character, quoted later by Peter (1 Peter 1:16).",
    "reference": "Leviticus 11:44",
    "metadata": {
      "stage": 8,
      "stage_title": "The Reference Test",
      "level_title": "Obscure Reference Mastery",
      "mechanic": "find_version",
      "verse_text": "For I am the LORD your God: ye shall therefore sanctify yourselves, and ye shall be holy; for I am holy: neither shall ye defile yourselves with any manner of creeping thing that creepeth upon the earth.",
      "translation": "KJV",
      "testament": "Old Testament",
      "difficulty": "Expert",
      "timerSeconds": 40,
      "points": 200,
      "is_typed": false,
      "acceptedAlternatives": [
        "Leviticus 11:44"
      ],
      "hint1": "Leviticus chapter on clean and unclean animals.",
      "hint2": "Leviticus 11:44.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l40-c2",
    "game_slug": "verse-builder",
    "level": 40,
    "challenge_index": 2,
    "question_text": "Which prophetic chapter concludes with this barren fig-tree faith? \"Although the fig tree shall not blossom, neither shall fruit be in the vines; the labour of the olive shall fail... Yet I will rejoice in the LORD...\"",
    "options": [
      "Habakkuk 3:17-18",
      "Haggai 1:9-10",
      "Joel 1:10-12",
      "Zephaniah 1:12-13"
    ],
    "correct_answer": "Habakkuk 3:17-18",
    "explanation": "Habakkuk 3:17-18 is the triumphant climax of Habakkuk's prayer.",
    "reference": "Habakkuk 3:17-18",
    "metadata": {
      "stage": 8,
      "stage_title": "The Reference Test",
      "level_title": "Obscure Reference Mastery",
      "mechanic": "find_version",
      "verse_text": "Although the fig tree shall not blossom, neither shall fruit be in the vines; the labour of the olive shall fail, and the fields shall yield no meat; the flock shall be cut off from the fold, and there shall be no herd in the stalls: Yet I will rejoice in the LORD, I will joy in the God of my salvation.",
      "translation": "KJV",
      "testament": "Old Testament",
      "difficulty": "Difficult",
      "timerSeconds": 40,
      "points": 150,
      "is_typed": false,
      "acceptedAlternatives": [
        "Habakkuk 3:17-18"
      ],
      "hint1": "The third chapter of Habakkuk.",
      "hint2": "Habakkuk 3:17-18.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l40-c3",
    "game_slug": "verse-builder",
    "level": 40,
    "challenge_index": 3,
    "question_text": "Where is the \"blessed hope\" described: \"Looking for that blessed hope, and the glorious appearing of the great God and our Saviour Jesus Christ;\"",
    "options": [
      "Titus 2:13",
      "1 Thessalonians 4:16",
      "2 Timothy 4:8",
      "Hebrews 9:28"
    ],
    "correct_answer": "Titus 2:13",
    "explanation": "Titus 2:13 links Christian conduct with longing for Christ's glorious return.",
    "reference": "Titus 2:13",
    "metadata": {
      "stage": 8,
      "stage_title": "The Reference Test",
      "level_title": "Obscure Reference Mastery",
      "mechanic": "find_version",
      "verse_text": "Looking for that blessed hope, and the glorious appearing of the great God and our Saviour Jesus Christ;",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Moderate",
      "timerSeconds": 30,
      "points": 100,
      "is_typed": false,
      "acceptedAlternatives": [
        "Titus 2:13"
      ],
      "hint1": "Paul's epistle to Titus, chapter 2.",
      "hint2": "Titus 2:13.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l40-c4",
    "game_slug": "verse-builder",
    "level": 40,
    "challenge_index": 4,
    "question_text": "Type the reference for this spiritual warfare command: \"Submit yourselves therefore to God. Resist the devil, and he will flee from you.\"",
    "options": [],
    "correct_answer": "James 4:7",
    "explanation": "James 4:7 balances submission to God with spiritual resistance against Satan.",
    "reference": "James 4:7",
    "metadata": {
      "stage": 8,
      "stage_title": "The Reference Test",
      "level_title": "Obscure Reference Mastery",
      "mechanic": "build_without_options",
      "verse_text": "Submit yourselves therefore to God. Resist the devil, and he will flee from you.",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Moderate",
      "timerSeconds": 35,
      "points": 100,
      "is_typed": true,
      "acceptedAlternatives": [
        "James 4:7",
        "Jas 4:7"
      ],
      "hint1": "Epistle of James, fourth chapter, verse 7.",
      "hint2": "James 4:7.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l40-c5",
    "game_slug": "verse-builder",
    "level": 40,
    "challenge_index": 5,
    "question_text": "Where does the exalted Lord declare: \"I am Alpha and Omega, the beginning and the ending, saith the Lord, which is, and which was, and which is to come, the Almighty.\"",
    "options": [
      "Revelation 1:8",
      "Revelation 21:6",
      "Revelation 22:13",
      "Isaiah 44:6"
    ],
    "correct_answer": "Revelation 1:8",
    "explanation": "Revelation 1:8 is the Lord's self-revelation in the prologue of the Apocalypse.",
    "reference": "Revelation 1:8",
    "metadata": {
      "stage": 8,
      "stage_title": "The Reference Test",
      "level_title": "Obscure Reference Mastery",
      "mechanic": "find_version",
      "verse_text": "I am Alpha and Omega, the beginning and the ending, saith the Lord, which is, and which was, and which is to come, the Almighty.",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Difficult",
      "timerSeconds": 35,
      "points": 150,
      "is_typed": false,
      "acceptedAlternatives": [
        "Revelation 1:8"
      ],
      "hint1": "First chapter of Revelation, verse 8.",
      "hint2": "Revelation 1:8.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l41-c1",
    "game_slug": "verse-builder",
    "level": 41,
    "challenge_index": 1,
    "question_text": "Complete the trial formula in James 1:2-3: \"My brethren, count it all joy when ye fall into divers temptations; Knowing this, that the trying of your faith worketh ______.\"",
    "options": [
      "patience",
      "experience",
      "hope",
      "righteousness"
    ],
    "correct_answer": "patience",
    "explanation": "James 1:2-3 establishes that the testing of faith produces spiritual endurance (Greek hupomone, rendered \"patience\").",
    "reference": "James 1:2-3",
    "metadata": {
      "stage": 9,
      "stage_title": "Expert Verse Builder",
      "level_title": "James Chapter 1 Deep Study",
      "mechanic": "missing_words",
      "verse_text": "My brethren, count it all joy when ye fall into divers temptations; Knowing this, that the trying of your faith worketh patience.",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Difficult",
      "timerSeconds": 40,
      "points": 150,
      "study_passage": "James 1:2-8",
      "acceptedAlternatives": [
        "patience"
      ],
      "hint1": "Enduring perseverance under pressure.",
      "hint2": "p-a-t-i-e-n-c-e.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l41-c2",
    "game_slug": "verse-builder",
    "level": 41,
    "challenge_index": 2,
    "question_text": "Complete the warning against doubting in James 1:6: \"But let him ask in faith, nothing wavering. For he that wavereth is like ______ ______ ______ ______ driven with the wind and tossed.\"",
    "options": [
      "a wave of the sea",
      "a leaf in the storm",
      "a ship without sail",
      "a reed in the tempest"
    ],
    "correct_answer": "a wave of the sea",
    "explanation": "James 1:6 compares the unstable mind to oceanic billows: \"...is like a wave of the sea driven with the wind and tossed.\"",
    "reference": "James 1:6",
    "metadata": {
      "stage": 9,
      "stage_title": "Expert Verse Builder",
      "level_title": "James Chapter 1 Deep Study",
      "mechanic": "missing_phrase",
      "verse_text": "But let him ask in faith, nothing wavering. For he that wavereth is like a wave of the sea driven with the wind and tossed.",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Difficult",
      "timerSeconds": 40,
      "points": 150,
      "study_passage": "James 1:2-8",
      "acceptedAlternatives": [
        "a wave of the sea"
      ],
      "hint1": "Maritime image of surging seawater.",
      "hint2": "a wave of the sea.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l41-c3",
    "game_slug": "verse-builder",
    "level": 41,
    "challenge_index": 3,
    "question_text": "What crown is promised to the tested believer in James 1:12? \"Blessed is the man that endureth temptation: for when he is tried, he shall receive the ______ ______ ______, which the Lord hath promised to them that love him.\"",
    "options": [
      "crown of life",
      "crown of glory",
      "crown of righteousness",
      "crown of rejoicing"
    ],
    "correct_answer": "crown of life",
    "explanation": "James 1:12 promises the \"crown of life\" (stephanos tes zoes) to those who endure trials loving God.",
    "reference": "James 1:12",
    "metadata": {
      "stage": 9,
      "stage_title": "Expert Verse Builder",
      "level_title": "James Chapter 1 Deep Study",
      "mechanic": "missing_phrase",
      "verse_text": "Blessed is the man that endureth temptation: for when he is tried, he shall receive the crown of life, which the Lord hath promised to them that love him.",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Difficult",
      "timerSeconds": 40,
      "points": 150,
      "study_passage": "James 1:12-18",
      "acceptedAlternatives": [
        "crown of life"
      ],
      "hint1": "The victor's garland representing vital eternal existence.",
      "hint2": "crown of life.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l41-c4",
    "game_slug": "verse-builder",
    "level": 41,
    "challenge_index": 4,
    "question_text": "Arrange these word tiles to form James 1:17: \"Every good gift and every perfect gift is from above, and cometh down from the Father of lights, with whom is no variableness, neither shadow of turning.\"",
    "options": [
      "is",
      "lights,",
      "of",
      "and",
      "from",
      "gift",
      "above,",
      "is",
      "down",
      "turning.",
      "Father",
      "gift",
      "Every",
      "no",
      "variableness,",
      "good",
      "cometh",
      "the",
      "perfect",
      "every",
      "neither",
      "shadow",
      "from",
      "with",
      "whom",
      "of"
    ],
    "correct_answer": "Every good gift and every perfect gift is from above, and cometh down from the Father of lights, with whom is no variableness, neither shadow of turning.",
    "explanation": "James 1:17 emphasizes God's unchangeable goodness and celestial paternity: \"...Father of lights, with whom is no variableness, neither shadow of turning.\"",
    "reference": "James 1:17",
    "metadata": {
      "stage": 9,
      "stage_title": "Expert Verse Builder",
      "level_title": "James Chapter 1 Deep Study",
      "mechanic": "arrange_words",
      "verse_text": "Every good gift and every perfect gift is from above, and cometh down from the Father of lights, with whom is no variableness, neither shadow of turning.",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Expert",
      "timerSeconds": 90,
      "points": 250,
      "is_tiles": true,
      "word_tiles": [
        "is",
        "lights,",
        "of",
        "and",
        "from",
        "gift",
        "above,",
        "is",
        "down",
        "turning.",
        "Father",
        "gift",
        "Every",
        "no",
        "variableness,",
        "good",
        "cometh",
        "the",
        "perfect",
        "every",
        "neither",
        "shadow",
        "from",
        "with",
        "whom",
        "of"
      ],
      "acceptedAlternatives": [
        "Every good gift and every perfect gift is from above, and cometh down from the Father of lights, with whom is no variableness, neither shadow of turning."
      ],
      "hint1": "Source: \"Every good gift and every perfect gift is from above,\"",
      "hint2": "God's character: \"with whom is no variableness, neither shadow of turning.\"",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l41-c5",
    "game_slug": "verse-builder",
    "level": 41,
    "challenge_index": 5,
    "question_text": "Type the exact words of James 1:22: \"But be ye ______ of the word, and not ______ only, deceiving your own selves.\"",
    "options": [],
    "correct_answer": "doers hearers",
    "explanation": "James 1:22 warns against mere auditory reception without obedient action: \"But be ye doers of the word, and not hearers only, deceiving your own selves.\"",
    "reference": "James 1:22",
    "metadata": {
      "stage": 9,
      "stage_title": "Expert Verse Builder",
      "level_title": "James Chapter 1 Deep Study",
      "mechanic": "build_without_options",
      "verse_text": "But be ye doers of the word, and not hearers only, deceiving your own selves.",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Expert",
      "timerSeconds": 45,
      "points": 200,
      "is_typed": true,
      "acceptedAlternatives": [
        "doers hearers",
        "doers, hearers",
        "doers and hearers"
      ],
      "hint1": "Practitioners of Scripture vs passive listeners.",
      "hint2": "doers... hearers.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l42-c1",
    "game_slug": "verse-builder",
    "level": 42,
    "challenge_index": 1,
    "question_text": "Complete the opening freedom declaration of Romans 8:1: \"There is therefore now no condemnation to them which are in Christ Jesus, who walk not after the flesh, but ______ ______ ______.\"",
    "options": [
      "after the Spirit",
      "in the light",
      "by holy faith",
      "under divine grace"
    ],
    "correct_answer": "after the Spirit",
    "explanation": "Romans 8:1 concludes in the KJV text: \"...who walk not after the flesh, but after the Spirit.\"",
    "reference": "Romans 8:1",
    "metadata": {
      "stage": 9,
      "stage_title": "Expert Verse Builder",
      "level_title": "Romans Chapter 8 Pinnacle",
      "mechanic": "missing_phrase",
      "verse_text": "There is therefore now no condemnation to them which are in Christ Jesus, who walk not after the flesh, but after the Spirit.",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Moderate",
      "timerSeconds": 30,
      "points": 100,
      "study_passage": "Romans 8:1-17",
      "acceptedAlternatives": [
        "after the Spirit"
      ],
      "hint1": "Conduct guided by the Third Person of the Trinity.",
      "hint2": "after the Spirit.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l42-c2",
    "game_slug": "verse-builder",
    "level": 42,
    "challenge_index": 2,
    "question_text": "Complete Romans 8:16: \"The Spirit itself beareth witness with our spirit, that we are the ______ ______ ______:\"",
    "options": [
      "children of God",
      "heirs of promise",
      "saints of the Lord",
      "servants of Christ"
    ],
    "correct_answer": "children of God",
    "explanation": "Romans 8:16 gives inner assurance of adoption: \"The Spirit itself beareth witness with our spirit, that we are the children of God:\"",
    "reference": "Romans 8:16",
    "metadata": {
      "stage": 9,
      "stage_title": "Expert Verse Builder",
      "level_title": "Romans Chapter 8 Pinnacle",
      "mechanic": "missing_phrase",
      "verse_text": "The Spirit itself beareth witness with our spirit, that we are the children of God:",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Moderate",
      "timerSeconds": 30,
      "points": 100,
      "study_passage": "Romans 8:1-17",
      "acceptedAlternatives": [
        "children of God"
      ],
      "hint1": "Sons and daughters of the heavenly Father.",
      "hint2": "children of God.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l42-c3",
    "game_slug": "verse-builder",
    "level": 42,
    "challenge_index": 3,
    "question_text": "Complete the Spirit's intercession in Romans 8:26: \"Likewise the Spirit also helpeth our infirmities: for we know not what we should pray for as we ought: but the Spirit itself maketh intercession for us with ______ ______ ______ ______ ______.\"",
    "options": [
      "groanings which cannot be uttered",
      "prayers of heavenly power",
      "words of unsearchable wisdom",
      "sighs of endless mercy"
    ],
    "correct_answer": "groanings which cannot be uttered",
    "explanation": "Romans 8:26 speaks of unutterable sighs: \"...maketh intercession for us with groanings which cannot be uttered.\"",
    "reference": "Romans 8:26",
    "metadata": {
      "stage": 9,
      "stage_title": "Expert Verse Builder",
      "level_title": "Romans Chapter 8 Pinnacle",
      "mechanic": "missing_phrase",
      "verse_text": "Likewise the Spirit also helpeth our infirmities: for we know not what we should pray for as we ought: but the Spirit itself maketh intercession for us with groanings which cannot be uttered.",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Difficult",
      "timerSeconds": 40,
      "points": 150,
      "study_passage": "Romans 8:18-30",
      "acceptedAlternatives": [
        "groanings which cannot be uttered"
      ],
      "hint1": "Inexpressible spiritual yearnings beyond human language.",
      "hint2": "groanings which cannot be uttered.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l42-c4",
    "game_slug": "verse-builder",
    "level": 42,
    "challenge_index": 4,
    "question_text": "Type the phrase completing Romans 8:32: \"He that spared not his own Son, but delivered him up for us all, how shall he not with him also ______ ______ ______ ______?\"",
    "options": [],
    "correct_answer": "freely give us all things",
    "explanation": "Romans 8:32 presents the logic from the greater to the lesser: \"...how shall he not with him also freely give us all things?\"",
    "reference": "Romans 8:32",
    "metadata": {
      "stage": 9,
      "stage_title": "Expert Verse Builder",
      "level_title": "Romans Chapter 8 Pinnacle",
      "mechanic": "build_without_options",
      "verse_text": "He that spared not his own Son, but delivered him up for us all, how shall he not with him also freely give us all things?",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Expert",
      "timerSeconds": 45,
      "points": 200,
      "is_typed": true,
      "study_passage": "Romans 8:31-39",
      "acceptedAlternatives": [
        "freely give us all things",
        "freely give us all things?"
      ],
      "hint1": "Generous bestowal of every blessing without charge.",
      "hint2": "freely give us all things.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l42-c5",
    "game_slug": "verse-builder",
    "level": 42,
    "challenge_index": 5,
    "question_text": "Arrange these word tiles to form the triumphant conclusion of Romans 8:38-39: \"For I am persuaded, that neither death, nor life, nor angels, nor principalities, nor powers, nor things present, nor things to come, Nor height, nor depth, nor any other creature, shall be able to separate us from the love of God, which is in Christ Jesus our Lord.\"",
    "options": [
      "powers,",
      "to",
      "separate",
      "angels,",
      "in",
      "nor",
      "For",
      "from",
      "nor",
      "principalities,",
      "death,",
      "neither",
      "Lord.",
      "is",
      "the",
      "things",
      "nor",
      "our",
      "creature,",
      "present,",
      "depth,",
      "nor",
      "things",
      "us",
      "any",
      "nor",
      "persuaded,",
      "which",
      "be",
      "love",
      "Nor",
      "life,",
      "come,",
      "able",
      "height,",
      "God,",
      "Jesus",
      "am",
      "other",
      "of",
      "Christ",
      "shall",
      "that",
      "I"
    ],
    "correct_answer": "For I am persuaded, that neither death, nor life, nor angels, nor principalities, nor powers, nor things present, nor things to come, Nor height, nor depth, nor any other creature, shall be able to separate us from the love of God, which is in Christ Jesus our Lord.",
    "explanation": "Romans 8:38-39 is the supreme apostolic anthem of eternal security in the love of God.",
    "reference": "Romans 8:38-39",
    "metadata": {
      "stage": 9,
      "stage_title": "Expert Verse Builder",
      "level_title": "Romans Chapter 8 Pinnacle",
      "mechanic": "arrange_words",
      "verse_text": "For I am persuaded, that neither death, nor life, nor angels, nor principalities, nor powers, nor things present, nor things to come, Nor height, nor depth, nor any other creature, shall be able to separate us from the love of God, which is in Christ Jesus our Lord.",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Master",
      "timerSeconds": 150,
      "points": 250,
      "study_passage": "Romans 8:31-39",
      "is_tiles": true,
      "word_tiles": [
        "powers,",
        "to",
        "separate",
        "angels,",
        "in",
        "nor",
        "For",
        "from",
        "nor",
        "principalities,",
        "death,",
        "neither",
        "Lord.",
        "is",
        "the",
        "things",
        "nor",
        "our",
        "creature,",
        "present,",
        "depth,",
        "nor",
        "things",
        "us",
        "any",
        "nor",
        "persuaded,",
        "which",
        "be",
        "love",
        "Nor",
        "life,",
        "come,",
        "able",
        "height,",
        "God,",
        "Jesus",
        "am",
        "other",
        "of",
        "Christ",
        "shall",
        "that",
        "I"
      ],
      "acceptedAlternatives": [
        "For I am persuaded, that neither death, nor life, nor angels, nor principalities, nor powers, nor things present, nor things to come, Nor height, nor depth, nor any other creature, shall be able to separate us from the love of God, which is in Christ Jesus our Lord."
      ],
      "hint1": "Paul's persuasion: neither death nor life, angels nor powers.",
      "hint2": "Ends: \"...love of God, which is in Christ Jesus our Lord.\"",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l43-c1",
    "game_slug": "verse-builder",
    "level": 43,
    "challenge_index": 1,
    "question_text": "Complete Isaiah 53:3: \"He is despised and rejected of men; a man of sorrows, and acquainted with grief: and we hid as it were our ______ from him; he was despised, and we esteemed him not.\"",
    "options": [
      "faces",
      "eyes",
      "hearts",
      "glances"
    ],
    "correct_answer": "faces",
    "explanation": "Isaiah 53:3 records humanity turning away in revulsion: \"...and we hid as it were our faces from him...\"",
    "reference": "Isaiah 53:3",
    "metadata": {
      "stage": 9,
      "stage_title": "Expert Verse Builder",
      "level_title": "Isaiah Chapter 53 Suffering Servant",
      "mechanic": "missing_words",
      "verse_text": "He is despised and rejected of men; a man of sorrows, and acquainted with grief: and we hid as it were our faces from him; he was despised, and we esteemed him not.",
      "translation": "KJV",
      "testament": "Old Testament",
      "difficulty": "Difficult",
      "timerSeconds": 35,
      "points": 150,
      "study_passage": "Isaiah 53",
      "acceptedAlternatives": [
        "faces"
      ],
      "hint1": "Physical countenances turned aside.",
      "hint2": "f-a-c-e-s.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l43-c2",
    "game_slug": "verse-builder",
    "level": 43,
    "challenge_index": 2,
    "question_text": "Complete Isaiah 53:4: \"Surely he hath borne our griefs, and carried our sorrows: yet we did esteem him stricken, ______ ______ ______, and afflicted.\"",
    "options": [
      "smitten of God",
      "cursed of heaven",
      "judged for sin",
      "forsaken of all"
    ],
    "correct_answer": "smitten of God",
    "explanation": "Isaiah 53:4 notes the mistaken human judgment: \"...yet we did esteem him stricken, smitten of God, and afflicted.\"",
    "reference": "Isaiah 53:4",
    "metadata": {
      "stage": 9,
      "stage_title": "Expert Verse Builder",
      "level_title": "Isaiah Chapter 53 Suffering Servant",
      "mechanic": "missing_phrase",
      "verse_text": "Surely he hath borne our griefs, and carried our sorrows: yet we did esteem him stricken, smitten of God, and afflicted.",
      "translation": "KJV",
      "testament": "Old Testament",
      "difficulty": "Difficult",
      "timerSeconds": 40,
      "points": 150,
      "study_passage": "Isaiah 53",
      "acceptedAlternatives": [
        "smitten of God"
      ],
      "hint1": "Struck down by divine hand.",
      "hint2": "smitten of God.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l43-c3",
    "game_slug": "verse-builder",
    "level": 43,
    "challenge_index": 3,
    "question_text": "What two terms complete the substitution in Isaiah 53:5? \"But he was wounded for our ______, he was bruised for our ______: the chastisement of our peace was upon him; and with his stripes we are healed.\"",
    "options": [
      "transgressions / iniquities",
      "sins / trespasses",
      "rebellion / faults",
      "iniquities / sins"
    ],
    "correct_answer": "transgressions / iniquities",
    "explanation": "Isaiah 53:5 pairs \"transgressions\" (rebellions) and \"iniquities\" (moral guilt).",
    "reference": "Isaiah 53:5",
    "metadata": {
      "stage": 9,
      "stage_title": "Expert Verse Builder",
      "level_title": "Isaiah Chapter 53 Suffering Servant",
      "mechanic": "missing_words",
      "verse_text": "But he was wounded for our transgressions, he was bruised for our iniquities: the chastisement of our peace was upon him; and with his stripes we are healed.",
      "translation": "KJV",
      "testament": "Old Testament",
      "difficulty": "Difficult",
      "timerSeconds": 40,
      "points": 150,
      "study_passage": "Isaiah 53",
      "acceptedAlternatives": [
        "transgressions / iniquities",
        "transgressions iniquities"
      ],
      "hint1": "Transgressions first, iniquities second.",
      "hint2": "transgressions... iniquities.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l43-c4",
    "game_slug": "verse-builder",
    "level": 43,
    "challenge_index": 4,
    "question_text": "Type the phrase concluding Isaiah 53:6: \"All we like sheep have gone astray; we have turned every one to his own way; and the LORD hath ______ ______ ______ ______ ______ ______ ______.\"",
    "options": [],
    "correct_answer": "laid on him the iniquity of us all",
    "explanation": "Isaiah 53:6 presents vicarious atonement: \"...and the LORD hath laid on him the iniquity of us all.\"",
    "reference": "Isaiah 53:6",
    "metadata": {
      "stage": 9,
      "stage_title": "Expert Verse Builder",
      "level_title": "Isaiah Chapter 53 Suffering Servant",
      "mechanic": "build_without_options",
      "verse_text": "All we like sheep have gone astray; we have turned every one to his own way; and the LORD hath laid on him the iniquity of us all.",
      "translation": "KJV",
      "testament": "Old Testament",
      "difficulty": "Expert",
      "timerSeconds": 60,
      "points": 200,
      "is_typed": true,
      "study_passage": "Isaiah 53",
      "acceptedAlternatives": [
        "laid on him the iniquity of us all"
      ],
      "hint1": "God transferring our collective guilt onto the Servant.",
      "hint2": "laid on him the iniquity of us all.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l43-c5",
    "game_slug": "verse-builder",
    "level": 43,
    "challenge_index": 5,
    "question_text": "Complete the silent submission of Isaiah 53:7: \"He was oppressed, and he was afflicted, yet he opened not his mouth: he is brought as a lamb to the slaughter, and as a sheep before her shearers is dumb, so he ______ ______ ______ ______.\"",
    "options": [
      "openeth not his mouth",
      "spake not a word",
      "yielded up his soul",
      "committed his cause to God"
    ],
    "correct_answer": "openeth not his mouth",
    "explanation": "Isaiah 53:7 repeats the silent lamb imagery: \"...so he openeth not his mouth.\"",
    "reference": "Isaiah 53:7",
    "metadata": {
      "stage": 9,
      "stage_title": "Expert Verse Builder",
      "level_title": "Isaiah Chapter 53 Suffering Servant",
      "mechanic": "missing_phrase",
      "verse_text": "He was oppressed, and he was afflicted, yet he opened not his mouth: he is brought as a lamb to the slaughter, and as a sheep before her shearers is dumb, so he openeth not his mouth.",
      "translation": "KJV",
      "testament": "Old Testament",
      "difficulty": "Expert",
      "timerSeconds": 40,
      "points": 200,
      "study_passage": "Isaiah 53",
      "acceptedAlternatives": [
        "openeth not his mouth"
      ],
      "hint1": "KJV present-tense form ending in -eth.",
      "hint2": "openeth not his mouth.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l44-c1",
    "game_slug": "verse-builder",
    "level": 44,
    "challenge_index": 1,
    "question_text": "Complete the youth purity question in Psalm 119:9: \"Wherewithal shall a young man cleanse his way? by taking heed thereto ______ ______ ______.\"",
    "options": [
      "according to thy word",
      "in the fear of God",
      "with an upright heart",
      "by walking in truth"
    ],
    "correct_answer": "according to thy word",
    "explanation": "Psalm 119:9 gives the divine standard for moral purity: \"...by taking heed thereto according to thy word.\"",
    "reference": "Psalm 119:9",
    "metadata": {
      "stage": 9,
      "stage_title": "Expert Verse Builder",
      "level_title": "Psalm 119 Acrostic Heights",
      "mechanic": "missing_phrase",
      "verse_text": "Wherewithal shall a young man cleanse his way? by taking heed thereto according to thy word.",
      "translation": "KJV",
      "testament": "Old Testament",
      "difficulty": "Moderate",
      "timerSeconds": 30,
      "points": 100,
      "study_passage": "Psalm 119:9-16 (Beth section)",
      "acceptedAlternatives": [
        "according to thy word"
      ],
      "hint1": "Conforming one's life to God's revealed Scriptures.",
      "hint2": "according to thy word.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l44-c2",
    "game_slug": "verse-builder",
    "level": 44,
    "challenge_index": 2,
    "question_text": "Complete Psalm 119:11: \"Thy word have I hid in mine heart, that I ______ ______ ______ ______ ______.\"",
    "options": [
      "might not sin against thee",
      "may walk in thy righteousness",
      "might understand thy precepts",
      "may glorify thy holy name"
    ],
    "correct_answer": "might not sin against thee",
    "explanation": "Psalm 119:11 treasures Scripture within to prevent sin: \"Thy word have I hid in mine heart, that I might not sin against thee.\"",
    "reference": "Psalm 119:11",
    "metadata": {
      "stage": 9,
      "stage_title": "Expert Verse Builder",
      "level_title": "Psalm 119 Acrostic Heights",
      "mechanic": "missing_phrase",
      "verse_text": "Thy word have I hid in mine heart, that I might not sin against thee.",
      "translation": "KJV",
      "testament": "Old Testament",
      "difficulty": "Moderate",
      "timerSeconds": 30,
      "points": 100,
      "study_passage": "Psalm 119:9-16 (Beth section)",
      "acceptedAlternatives": [
        "might not sin against thee"
      ],
      "hint1": "Purpose of hiding God's word: avoiding transgression.",
      "hint2": "might not sin against thee.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l44-c3",
    "game_slug": "verse-builder",
    "level": 44,
    "challenge_index": 3,
    "question_text": "Complete the prayer for illumination in Psalm 119:18: \"Open thou mine eyes, that I may behold ______ ______ out of thy law.\"",
    "options": [
      "wondrous things",
      "secret mysteries",
      "glorious truths",
      "righteous ways"
    ],
    "correct_answer": "wondrous things",
    "explanation": "Psalm 119:18 prays for spiritual sight: \"Open thou mine eyes, that I may behold wondrous things out of thy law.\"",
    "reference": "Psalm 119:18",
    "metadata": {
      "stage": 9,
      "stage_title": "Expert Verse Builder",
      "level_title": "Psalm 119 Acrostic Heights",
      "mechanic": "missing_phrase",
      "verse_text": "Open thou mine eyes, that I may behold wondrous things out of thy law.",
      "translation": "KJV",
      "testament": "Old Testament",
      "difficulty": "Difficult",
      "timerSeconds": 35,
      "points": 150,
      "study_passage": "Psalm 119:17-24 (Gimel section)",
      "acceptedAlternatives": [
        "wondrous things"
      ],
      "hint1": "Marvellous divine wonders.",
      "hint2": "wondrous things.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l44-c4",
    "game_slug": "verse-builder",
    "level": 44,
    "challenge_index": 4,
    "question_text": "Type the famous verse Psalm 119:89: \"For ever, O LORD, thy word is ______ in heaven.\"",
    "options": [],
    "correct_answer": "settled",
    "explanation": "Psalm 119:89 proclaims eternal scriptural preservation: \"For ever, O LORD, thy word is settled in heaven.\"",
    "reference": "Psalm 119:89",
    "metadata": {
      "stage": 9,
      "stage_title": "Expert Verse Builder",
      "level_title": "Psalm 119 Acrostic Heights",
      "mechanic": "build_without_options",
      "verse_text": "For ever, O LORD, thy word is settled in heaven.",
      "translation": "KJV",
      "testament": "Old Testament",
      "difficulty": "Difficult",
      "timerSeconds": 35,
      "points": 150,
      "is_typed": true,
      "study_passage": "Psalm 119:89-96 (Lamed section)",
      "acceptedAlternatives": [
        "settled",
        "established"
      ],
      "hint1": "Firmly fixed, permanent, unshakeable.",
      "hint2": "s-e-t-t-l-e-d.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l44-c5",
    "game_slug": "verse-builder",
    "level": 44,
    "challenge_index": 5,
    "question_text": "Complete Psalm 119:130: \"The entrance of thy words giveth light; it giveth ______ unto the simple.\"",
    "options": [
      "understanding",
      "wisdom",
      "knowledge",
      "counsel"
    ],
    "correct_answer": "understanding",
    "explanation": "Psalm 119:130 reveals the enlightening power of Scripture: \"The entrance of thy words giveth light; it giveth understanding unto the simple.\"",
    "reference": "Psalm 119:130",
    "metadata": {
      "stage": 9,
      "stage_title": "Expert Verse Builder",
      "level_title": "Psalm 119 Acrostic Heights",
      "mechanic": "missing_words",
      "verse_text": "The entrance of thy words giveth light; it giveth understanding unto the simple.",
      "translation": "KJV",
      "testament": "Old Testament",
      "difficulty": "Expert",
      "timerSeconds": 40,
      "points": 200,
      "study_passage": "Psalm 119:129-136 (Pe section)",
      "acceptedAlternatives": [
        "understanding"
      ],
      "hint1": "Spiritual discernment and insight.",
      "hint2": "understanding unto the simple.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l45-c1",
    "game_slug": "verse-builder",
    "level": 45,
    "challenge_index": 1,
    "question_text": "Complete Hebrews 11:3: \"Through faith we understand that the worlds were framed by the word of God, so that things which are seen were not made of ______ ______ ______ ______.\"",
    "options": [
      "things which do appear",
      "corruptible dust of earth",
      "the elements of this world",
      "that which is visible"
    ],
    "correct_answer": "things which do appear",
    "explanation": "Hebrews 11:3 affirms creation ex nihilo: \"...so that things which are seen were not made of things which do appear.\"",
    "reference": "Hebrews 11:3",
    "metadata": {
      "stage": 9,
      "stage_title": "Expert Verse Builder",
      "level_title": "Hebrews Chapter 11 Heroes of Faith",
      "mechanic": "missing_phrase",
      "verse_text": "Through faith we understand that the worlds were framed by the word of God, so that things which are seen were not made of things which do appear.",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Difficult",
      "timerSeconds": 40,
      "points": 150,
      "study_passage": "Hebrews 11",
      "acceptedAlternatives": [
        "things which do appear"
      ],
      "hint1": "Visible pre-existing materials.",
      "hint2": "things which do appear.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l45-c2",
    "game_slug": "verse-builder",
    "level": 45,
    "challenge_index": 2,
    "question_text": "Complete the twofold requirement of faith in Hebrews 11:6: \"he that cometh to God must believe that he is, and that he is a ______ of them that ______ seek him.\"",
    "options": [
      "rewarder / diligently",
      "keeper / faithfully",
      "redeemer / earnestly",
      "judge / humbly"
    ],
    "correct_answer": "rewarder / diligently",
    "explanation": "Hebrews 11:6 specifies: \"...he is a rewarder of them that diligently seek him.\"",
    "reference": "Hebrews 11:6",
    "metadata": {
      "stage": 9,
      "stage_title": "Expert Verse Builder",
      "level_title": "Hebrews Chapter 11 Heroes of Faith",
      "mechanic": "missing_words",
      "verse_text": "But without faith it is impossible to please him: for he that cometh to God must believe that he is, and that he is a rewarder of them that diligently seek him.",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Difficult",
      "timerSeconds": 40,
      "points": 150,
      "study_passage": "Hebrews 11",
      "acceptedAlternatives": [
        "rewarder / diligently",
        "rewarder diligently"
      ],
      "hint1": "Recompenser of persistent seekers.",
      "hint2": "rewarder... diligently.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l45-c3",
    "game_slug": "verse-builder",
    "level": 45,
    "challenge_index": 3,
    "question_text": "Complete Abraham's faith obedience in Hebrews 11:8: \"By faith Abraham, when he was called to go out into a place which he should after receive for an inheritance, obeyed; and he went out, ______ ______ ______ ______.\"",
    "options": [
      "not knowing whither he went",
      "trusting in the promise of God",
      "leaving all his father's house",
      "seeking a city with foundations"
    ],
    "correct_answer": "not knowing whither he went",
    "explanation": "Hebrews 11:8 highlights blind faith in God's guidance: \"...and he went out, not knowing whither he went.\"",
    "reference": "Hebrews 11:8",
    "metadata": {
      "stage": 9,
      "stage_title": "Expert Verse Builder",
      "level_title": "Hebrews Chapter 11 Heroes of Faith",
      "mechanic": "missing_phrase",
      "verse_text": "By faith Abraham, when he was called to go out into a place which he should after receive for an inheritance, obeyed; and he went out, not knowing whither he went.",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Difficult",
      "timerSeconds": 40,
      "points": 150,
      "study_passage": "Hebrews 11",
      "acceptedAlternatives": [
        "not knowing whither he went"
      ],
      "hint1": "Departing without knowledge of geographic destination.",
      "hint2": "not knowing whither he went.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l45-c4",
    "game_slug": "verse-builder",
    "level": 45,
    "challenge_index": 4,
    "question_text": "Type the phrase in Hebrews 11:10 describing the heavenly city: \"For he looked for a city which hath foundations, whose ______ and ______ is God.\"",
    "options": [],
    "correct_answer": "builder maker",
    "explanation": "Hebrews 11:10 reveals Abraham's pilgrim focus: \"For he looked for a city which hath foundations, whose builder and maker is God.\"",
    "reference": "Hebrews 11:10",
    "metadata": {
      "stage": 9,
      "stage_title": "Expert Verse Builder",
      "level_title": "Hebrews Chapter 11 Heroes of Faith",
      "mechanic": "build_without_options",
      "verse_text": "For he looked for a city which hath foundations, whose builder and maker is God.",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Expert",
      "timerSeconds": 45,
      "points": 200,
      "is_typed": true,
      "study_passage": "Hebrews 11",
      "acceptedAlternatives": [
        "builder maker",
        "builder and maker"
      ],
      "hint1": "Architect and divine craftsman.",
      "hint2": "builder... maker.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l45-c5",
    "game_slug": "verse-builder",
    "level": 45,
    "challenge_index": 5,
    "question_text": "Complete the pilgrim testimony of the patriarchs in Hebrews 11:13: \"These all died in faith, not having received the promises, but having seen them afar off, and were persuaded of them, and embraced them, and confessed that they were ______ and ______ on the earth.\"",
    "options": [
      "strangers / pilgrims",
      "servants / sojourners",
      "witnesses / wanderers",
      "strangers / aliens"
    ],
    "correct_answer": "strangers / pilgrims",
    "explanation": "Hebrews 11:13 records their earthly status: \"...confessed that they were strangers and pilgrims on the earth.\"",
    "reference": "Hebrews 11:13",
    "metadata": {
      "stage": 9,
      "stage_title": "Expert Verse Builder",
      "level_title": "Hebrews Chapter 11 Heroes of Faith",
      "mechanic": "missing_words",
      "verse_text": "These all died in faith, not having received the promises, but having seen them afar off, and were persuaded of them, and embraced them, and confessed that they were strangers and pilgrims on the earth.",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Expert",
      "timerSeconds": 45,
      "points": 200,
      "study_passage": "Hebrews 11",
      "acceptedAlternatives": [
        "strangers / pilgrims",
        "strangers pilgrims"
      ],
      "hint1": "Foreigners and traveling wayfarers.",
      "hint2": "strangers and pilgrims.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l46-c1",
    "game_slug": "verse-builder",
    "level": 46,
    "challenge_index": 1,
    "question_text": "Reconstruct the 6 great mystery clauses of 1 Timothy 3:16: \"God was manifest in the ______, justified in the ______, seen of ______, preached unto the ______, believed on in the ______, received up into ______.\"",
    "options": [
      "flesh / Spirit / angels / Gentiles / world / glory",
      "body / Spirit / saints / nations / church / heaven",
      "flesh / truth / apostles / world / earth / majesty",
      "likeness / power / men / nations / heart / glory"
    ],
    "correct_answer": "flesh / Spirit / angels / Gentiles / world / glory",
    "explanation": "1 Timothy 3:16 contains the ancient creed: \"God was manifest in the flesh, justified in the Spirit, seen of angels, preached unto the Gentiles, believed on in the world, received up into glory.\"",
    "reference": "1 Timothy 3:16",
    "metadata": {
      "stage": 10,
      "stage_title": "Ultimate Verse Builder",
      "level_title": "Multi-Blank Theological Monoliths",
      "mechanic": "master_builder",
      "verse_text": "And without controversy great is the mystery of godliness: God was manifest in the flesh, justified in the Spirit, seen of angels, preached unto the Gentiles, believed on in the world, received up into glory.",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Master",
      "timerSeconds": 90,
      "points": 250,
      "acceptedAlternatives": [
        "flesh / Spirit / angels / Gentiles / world / glory"
      ],
      "hint1": "Flesh -> Spirit -> Angels -> Gentiles -> World -> Glory.",
      "hint2": "Sixfold rhythmic Christological confession.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l46-c2",
    "game_slug": "verse-builder",
    "level": 46,
    "challenge_index": 2,
    "question_text": "Complete the Christology of Colossians 1:15-17: \"Who is the image of the invisible God, the firstborn of every creature: For by him were all things created... And he is before all things, and by him all things ______.\"",
    "options": [
      "consist",
      "abide",
      "endure",
      "were made"
    ],
    "correct_answer": "consist",
    "explanation": "Colossians 1:17 in the KJV uses \"consist\" (Greek sunesteken, held together coherently): \"...and by him all things consist.\"",
    "reference": "Colossians 1:15-17",
    "metadata": {
      "stage": 10,
      "stage_title": "Ultimate Verse Builder",
      "level_title": "Multi-Blank Theological Monoliths",
      "mechanic": "missing_words",
      "verse_text": "And he is before all things, and by him all things consist.",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Expert",
      "timerSeconds": 40,
      "points": 200,
      "acceptedAlternatives": [
        "consist"
      ],
      "hint1": "Held together in continuous cosmic cohesion.",
      "hint2": "c-o-n-s-i-s-t.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l46-c3",
    "game_slug": "verse-builder",
    "level": 46,
    "challenge_index": 3,
    "question_text": "Complete the universal exaltation in Philippians 2:10-11: \"That at the name of Jesus every knee should bow... And that every tongue should confess that Jesus Christ is Lord, to the ______ ______ ______ ______.\"",
    "options": [
      "glory of God the Father",
      "praise of his glorious grace",
      "honour of his holy kingdom",
      "exaltation of the Most High"
    ],
    "correct_answer": "glory of God the Father",
    "explanation": "Philippians 2:11 concludes that Christ's lordship redounds: \"...to the glory of God the Father.\"",
    "reference": "Philippians 2:10-11",
    "metadata": {
      "stage": 10,
      "stage_title": "Ultimate Verse Builder",
      "level_title": "Multi-Blank Theological Monoliths",
      "mechanic": "missing_phrase",
      "verse_text": "That at the name of Jesus every knee should bow, of things in heaven, and things in earth, and things under the earth; And that every tongue should confess that Jesus Christ is Lord, to the glory of God the Father.",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Expert",
      "timerSeconds": 45,
      "points": 200,
      "acceptedAlternatives": [
        "glory of God the Father"
      ],
      "hint1": "Ultimate goal of all worship.",
      "hint2": "glory of God the Father.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l46-c4",
    "game_slug": "verse-builder",
    "level": 46,
    "challenge_index": 4,
    "question_text": "Type the phrase in Titus 2:14 describing Christ's purchased people: \"Who gave himself for us, that he might redeem us from all iniquity, and purify unto himself a ______ ______, zealous of good works.\"",
    "options": [],
    "correct_answer": "peculiar people",
    "explanation": "Titus 2:14 in the KJV describes the redeemed as a \"peculiar people\" (special treasured possession).",
    "reference": "Titus 2:14",
    "metadata": {
      "stage": 10,
      "stage_title": "Ultimate Verse Builder",
      "level_title": "Multi-Blank Theological Monoliths",
      "mechanic": "build_without_options",
      "verse_text": "Who gave himself for us, that he might redeem us from all iniquity, and purify unto himself a peculiar people, zealous of good works.",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Master",
      "timerSeconds": 45,
      "points": 250,
      "is_typed": true,
      "acceptedAlternatives": [
        "peculiar people",
        "a peculiar people"
      ],
      "hint1": "Classic KJV term meaning a distinct, uniquely owned nation.",
      "hint2": "peculiar people.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l46-c5",
    "game_slug": "verse-builder",
    "level": 46,
    "challenge_index": 5,
    "question_text": "Complete the redemption phrase in Ephesians 1:7: \"In whom we have redemption through his blood, the forgiveness of sins, according to the ______ ______ ______ ______;\"",
    "options": [
      "riches of his grace",
      "counsel of his will",
      "exceeding greatness of his power",
      "purpose of his good pleasure"
    ],
    "correct_answer": "riches of his grace",
    "explanation": "Ephesians 1:7 measures forgiveness: \"...according to the riches of his grace;\"",
    "reference": "Ephesians 1:7",
    "metadata": {
      "stage": 10,
      "stage_title": "Ultimate Verse Builder",
      "level_title": "Multi-Blank Theological Monoliths",
      "mechanic": "missing_phrase",
      "verse_text": "In whom we have redemption through his blood, the forgiveness of sins, according to the riches of his grace;",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Expert",
      "timerSeconds": 40,
      "points": 200,
      "acceptedAlternatives": [
        "riches of his grace"
      ],
      "hint1": "Wealth of divine unmerited favor.",
      "hint2": "riches of his grace.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l47-c1",
    "game_slug": "verse-builder",
    "level": 47,
    "challenge_index": 1,
    "question_text": "Arrange these word tiles to form Psalm 19:7: \"The law of the LORD is perfect, converting the soul: the testimony of the LORD is sure, making wise the simple.\"",
    "options": [
      "soul:",
      "LORD",
      "of",
      "converting",
      "The",
      "making",
      "the",
      "is",
      "law",
      "the",
      "perfect,",
      "sure,",
      "LORD",
      "simple.",
      "the",
      "is",
      "wise",
      "testimony",
      "of",
      "the"
    ],
    "correct_answer": "The law of the LORD is perfect, converting the soul: the testimony of the LORD is sure, making wise the simple.",
    "explanation": "Psalm 19:7 pairs God's perfect law (converting soul) with His sure testimony (making wise simple).",
    "reference": "Psalm 19:7",
    "metadata": {
      "stage": 10,
      "stage_title": "Ultimate Verse Builder",
      "level_title": "Unforgiving Word Assembly",
      "mechanic": "arrange_words",
      "verse_text": "The law of the LORD is perfect, converting the soul: the testimony of the LORD is sure, making wise the simple.",
      "translation": "KJV",
      "testament": "Old Testament",
      "difficulty": "Expert",
      "timerSeconds": 85,
      "points": 250,
      "is_tiles": true,
      "word_tiles": [
        "soul:",
        "LORD",
        "of",
        "converting",
        "The",
        "making",
        "the",
        "is",
        "law",
        "the",
        "perfect,",
        "sure,",
        "LORD",
        "simple.",
        "the",
        "is",
        "wise",
        "testimony",
        "of",
        "the"
      ],
      "acceptedAlternatives": [
        "The law of the LORD is perfect, converting the soul: the testimony of the LORD is sure, making wise the simple."
      ],
      "hint1": "First half: \"The law of the LORD is perfect, converting the soul:\"",
      "hint2": "Second half: \"the testimony of the LORD is sure, making wise the simple.\"",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l47-c2",
    "game_slug": "verse-builder",
    "level": 47,
    "challenge_index": 2,
    "question_text": "Arrange these word tiles to form Proverbs 30:5: \"Every word of God is pure: he is a shield unto them that put their trust in him.\"",
    "options": [
      "God",
      "word",
      "trust",
      "unto",
      "Every",
      "put",
      "shield",
      "is",
      "him.",
      "in",
      "pure:",
      "their",
      "he",
      "a",
      "them",
      "is",
      "that",
      "of"
    ],
    "correct_answer": "Every word of God is pure: he is a shield unto them that put their trust in him.",
    "explanation": "Proverbs 30:5 declares the flawless purity of every word of God and His protection for believers.",
    "reference": "Proverbs 30:5",
    "metadata": {
      "stage": 10,
      "stage_title": "Ultimate Verse Builder",
      "level_title": "Unforgiving Word Assembly",
      "mechanic": "arrange_words",
      "verse_text": "Every word of God is pure: he is a shield unto them that put their trust in him.",
      "translation": "KJV",
      "testament": "Old Testament",
      "difficulty": "Difficult",
      "timerSeconds": 70,
      "points": 200,
      "is_tiles": true,
      "word_tiles": [
        "God",
        "word",
        "trust",
        "unto",
        "Every",
        "put",
        "shield",
        "is",
        "him.",
        "in",
        "pure:",
        "their",
        "he",
        "a",
        "them",
        "is",
        "that",
        "of"
      ],
      "acceptedAlternatives": [
        "Every word of God is pure: he is a shield unto them that put their trust in him."
      ],
      "hint1": "Starts with \"Every word of God is pure:\"",
      "hint2": "Ends with \"...unto them that put their trust in him.\"",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l47-c3",
    "game_slug": "verse-builder",
    "level": 47,
    "challenge_index": 3,
    "question_text": "Arrange these word tiles to form 2 Peter 1:21: \"For the prophecy came not in old time by the will of man: but holy men of God spake as they were moved by the Holy Ghost.\"",
    "options": [
      "time",
      "the",
      "were",
      "man:",
      "came",
      "moved",
      "in",
      "Holy",
      "not",
      "holy",
      "by",
      "as",
      "Ghost.",
      "will",
      "of",
      "by",
      "the",
      "prophecy",
      "men",
      "they",
      "For",
      "old",
      "spake",
      "of",
      "but",
      "God"
    ],
    "correct_answer": "For the prophecy came not in old time by the will of man: but holy men of God spake as they were moved by the Holy Ghost.",
    "explanation": "2 Peter 1:21 defines divine inspiration: men carried along (moved) by the Holy Spirit.",
    "reference": "2 Peter 1:21",
    "metadata": {
      "stage": 10,
      "stage_title": "Ultimate Verse Builder",
      "level_title": "Unforgiving Word Assembly",
      "mechanic": "arrange_words",
      "verse_text": "For the prophecy came not in old time by the will of man: but holy men of God spake as they were moved by the Holy Ghost.",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Master",
      "timerSeconds": 95,
      "points": 250,
      "is_tiles": true,
      "word_tiles": [
        "time",
        "the",
        "were",
        "man:",
        "came",
        "moved",
        "in",
        "Holy",
        "not",
        "holy",
        "by",
        "as",
        "Ghost.",
        "will",
        "of",
        "by",
        "the",
        "prophecy",
        "men",
        "they",
        "For",
        "old",
        "spake",
        "of",
        "but",
        "God"
      ],
      "acceptedAlternatives": [
        "For the prophecy came not in old time by the will of man: but holy men of God spake as they were moved by the Holy Ghost."
      ],
      "hint1": "Negation: \"For the prophecy came not in old time by the will of man:\"",
      "hint2": "Affirmation: \"but holy men of God spake as they were moved by the Holy Ghost.\"",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l47-c4",
    "game_slug": "verse-builder",
    "level": 47,
    "challenge_index": 4,
    "question_text": "Complete 1 Corinthians 15:51-52: \"Behold, I shew you a mystery; We shall not all sleep, but we shall all be changed, In a moment, in the ______ ______ ______ ______, at the last trump...\"",
    "options": [
      "twinkling of an eye",
      "blink of an eye",
      "flash of heaven's light",
      "breath of divine power"
    ],
    "correct_answer": "twinkling of an eye",
    "explanation": "1 Corinthians 15:52 in KJV describes instantaneous translation: \"...in the twinkling of an eye, at the last trump...\"",
    "reference": "1 Corinthians 15:51-52",
    "metadata": {
      "stage": 10,
      "stage_title": "Ultimate Verse Builder",
      "level_title": "Unforgiving Word Assembly",
      "mechanic": "missing_phrase",
      "verse_text": "Behold, I shew you a mystery; We shall not all sleep, but we shall all be changed, In a moment, in the twinkling of an eye, at the last trump: for the trumpet shall sound, and the dead shall be raised incorruptible, and we shall be changed.",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Expert",
      "timerSeconds": 40,
      "points": 200,
      "acceptedAlternatives": [
        "twinkling of an eye"
      ],
      "hint1": "Instantaneous eye movement.",
      "hint2": "twinkling of an eye.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l47-c5",
    "game_slug": "verse-builder",
    "level": 47,
    "challenge_index": 5,
    "question_text": "Type the 7 heavenly attributes ascribed to the slain Lamb in Revelation 5:12 separated by spaces or commas: \"Worthy is the Lamb that was slain to receive power, and ______, and ______, and ______, and ______, and ______, and ______.\"",
    "options": [],
    "correct_answer": "riches wisdom strength honour glory blessing",
    "explanation": "Revelation 5:12 ascribes sevenfold praise: power, riches, wisdom, strength, honour, glory, blessing.",
    "reference": "Revelation 5:12",
    "metadata": {
      "stage": 10,
      "stage_title": "Ultimate Verse Builder",
      "level_title": "Unforgiving Word Assembly",
      "mechanic": "build_without_options",
      "verse_text": "Saying with a loud voice, Worthy is the Lamb that was slain to receive power, and riches, and wisdom, and strength, and honour, and glory, and blessing.",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Master",
      "timerSeconds": 80,
      "points": 250,
      "is_typed": true,
      "acceptedAlternatives": [
        "riches wisdom strength honour glory blessing",
        "riches, wisdom, strength, honour, glory, blessing",
        "riches wisdom strength honor glory blessing"
      ],
      "hint1": "Wealth, understanding, might, reverence, splendour, benediction.",
      "hint2": "riches, wisdom, strength, honour, glory, blessing.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l48-c1",
    "game_slug": "verse-builder",
    "level": 48,
    "challenge_index": 1,
    "question_text": "Complete Paul's prayer in Ephesians 1:17: \"That the God of our Lord Jesus Christ, the Father of glory, may give unto you the spirit of ______ and ______ in the knowledge of him:\"",
    "options": [
      "wisdom / revelation",
      "grace / truth",
      "power / understanding",
      "faith / love"
    ],
    "correct_answer": "wisdom / revelation",
    "explanation": "Ephesians 1:17 petitions for: \"...the spirit of wisdom and revelation in the knowledge of him:\"",
    "reference": "Ephesians 1:17",
    "metadata": {
      "stage": 10,
      "stage_title": "Ultimate Verse Builder",
      "level_title": "The Longest & Densest Sentences",
      "mechanic": "missing_words",
      "verse_text": "That the God of our Lord Jesus Christ, the Father of glory, may give unto you the spirit of wisdom and revelation in the knowledge of him:",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Difficult",
      "timerSeconds": 40,
      "points": 150,
      "acceptedAlternatives": [
        "wisdom / revelation",
        "wisdom and revelation"
      ],
      "hint1": "Divine sagacity and apocalyptic uncovering.",
      "hint2": "wisdom and revelation.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l48-c2",
    "game_slug": "verse-builder",
    "level": 48,
    "challenge_index": 2,
    "question_text": "Arrange these word tiles to form the majestic prologue of Hebrews 1:1-2: \"God, who at sundry times and in divers manners spake in time past unto the fathers by the prophets, Hath in these last days spoken unto us by his Son,\"",
    "options": [
      "last",
      "fathers",
      "in",
      "times",
      "the",
      "sundry",
      "prophets,",
      "by",
      "days",
      "in",
      "Hath",
      "spoke",
      "his",
      "by",
      "and",
      "at",
      "Son,",
      "who",
      "past",
      "the",
      "us",
      "time",
      "God,",
      "manners",
      "these",
      "spake",
      "divers",
      "unto"
    ],
    "correct_answer": "God, who at sundry times and in divers manners spake in time past unto the fathers by the prophets, Hath in these last days spoken unto us by his Son,",
    "explanation": "Hebrews 1:1-2 compares the fragmentary prophetic disclosures with the final supreme revelation in the Son.",
    "reference": "Hebrews 1:1-2",
    "metadata": {
      "stage": 10,
      "stage_title": "Ultimate Verse Builder",
      "level_title": "The Longest & Densest Sentences",
      "mechanic": "arrange_words",
      "verse_text": "God, who at sundry times and in divers manners spake in time past unto the fathers by the prophets, Hath in these last days spoken unto us by his Son,",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Master",
      "timerSeconds": 120,
      "points": 250,
      "is_tiles": true,
      "word_tiles": [
        "last",
        "fathers",
        "in",
        "times",
        "the",
        "sundry",
        "prophets,",
        "by",
        "days",
        "in",
        "Hath",
        "spoke",
        "his",
        "by",
        "and",
        "at",
        "Son,",
        "who",
        "past",
        "the",
        "us",
        "time",
        "God,",
        "manners",
        "these",
        "spake",
        "divers",
        "unto"
      ],
      "acceptedAlternatives": [
        "God, who at sundry times and in divers manners spake in time past unto the fathers by the prophets, Hath in these last days spoken unto us by his Son,"
      ],
      "hint1": "Old Covenant: \"sundry times and in divers manners... by the prophets\"",
      "hint2": "New Covenant: \"in these last days spoken unto us by his Son\"",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l48-c3",
    "game_slug": "verse-builder",
    "level": 48,
    "challenge_index": 3,
    "question_text": "Complete 2 Corinthians 4:17: \"For our light affliction, which is but for a moment, worketh for us a far more ______ and ______ ______ of glory;\"",
    "options": [
      "exceeding / eternal weight",
      "abundant / everlasting crown",
      "glorious / endless reward",
      "heavenly / permanent measure"
    ],
    "correct_answer": "exceeding / eternal weight",
    "explanation": "2 Corinthians 4:17 contrasts temporary affliction with an \"exceeding and eternal weight of glory\".",
    "reference": "2 Corinthians 4:17",
    "metadata": {
      "stage": 10,
      "stage_title": "Ultimate Verse Builder",
      "level_title": "The Longest & Densest Sentences",
      "mechanic": "missing_phrase",
      "verse_text": "For our light affliction, which is but for a moment, worketh for us a far more exceeding and eternal weight of glory;",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Difficult",
      "timerSeconds": 40,
      "points": 150,
      "acceptedAlternatives": [
        "exceeding / eternal weight",
        "exceeding and eternal weight"
      ],
      "hint1": "Superlative weightiness of future heavenly glory.",
      "hint2": "exceeding and eternal weight.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l48-c4",
    "game_slug": "verse-builder",
    "level": 48,
    "challenge_index": 4,
    "question_text": "Type the price of redemption in 1 Peter 1:18-19: \"ye were not redeemed with corruptible things, as silver and gold... But with the ______ ______ ______ ______, as of a lamb without blemish and without spot:\"",
    "options": [],
    "correct_answer": "precious blood of Christ",
    "explanation": "1 Peter 1:18-19 designates the atonement price as: \"...the precious blood of Christ, as of a lamb without blemish and without spot:\"",
    "reference": "1 Peter 1:18-19",
    "metadata": {
      "stage": 10,
      "stage_title": "Ultimate Verse Builder",
      "level_title": "The Longest & Densest Sentences",
      "mechanic": "build_without_options",
      "verse_text": "Forasmuch as ye know that ye were not redeemed with corruptible things, as silver and gold, from your vain conversation received by tradition from your fathers; But with the precious blood of Christ, as of a lamb without blemish and without spot:",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Expert",
      "timerSeconds": 45,
      "points": 200,
      "is_typed": true,
      "acceptedAlternatives": [
        "precious blood of Christ"
      ],
      "hint1": "Four words describing Jesus' life poured out on Calvary.",
      "hint2": "precious blood of Christ.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l48-c5",
    "game_slug": "verse-builder",
    "level": 48,
    "challenge_index": 5,
    "question_text": "Complete Paul's prayer goal in Colossians 1:10: \"That ye might walk worthy of the Lord unto all pleasing, being fruitful in every good work, and increasing in ______ ______ ______ ______;\"",
    "options": [
      "the knowledge of God",
      "faith and love",
      "holy righteousness",
      "spiritual power"
    ],
    "correct_answer": "the knowledge of God",
    "explanation": "Colossians 1:10 connects pleasing conduct with: \"...increasing in the knowledge of God;\"",
    "reference": "Colossians 1:10",
    "metadata": {
      "stage": 10,
      "stage_title": "Ultimate Verse Builder",
      "level_title": "The Longest & Densest Sentences",
      "mechanic": "missing_phrase",
      "verse_text": "That ye might walk worthy of the Lord unto all pleasing, being fruitful in every good work, and increasing in the knowledge of God;",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Expert",
      "timerSeconds": 40,
      "points": 200,
      "acceptedAlternatives": [
        "the knowledge of God"
      ],
      "hint1": "Epignosis of the Almighty.",
      "hint2": "the knowledge of God.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l49-c1",
    "game_slug": "verse-builder",
    "level": 49,
    "challenge_index": 1,
    "question_text": "Complete the Lord's self-proclamation of His Name to Moses in Exodus 34:6: \"The LORD, The LORD God, merciful and gracious, longsuffering, and abundant in ______ and ______,\"",
    "options": [
      "goodness / truth",
      "mercy / peace",
      "lovingkindness / justice",
      "faithfulness / truth"
    ],
    "correct_answer": "goodness / truth",
    "explanation": "Exodus 34:6 reveals Yahweh's foundational attributes in KJV: \"...abundant in goodness and truth,\"",
    "reference": "Exodus 34:6",
    "metadata": {
      "stage": 10,
      "stage_title": "Ultimate Verse Builder",
      "level_title": "Contextual & Master Reconstruction",
      "mechanic": "missing_words",
      "verse_text": "And the LORD passed by before him, and proclaimed, The LORD, The LORD God, merciful and gracious, longsuffering, and abundant in goodness and truth,",
      "translation": "KJV",
      "testament": "Old Testament",
      "difficulty": "Difficult",
      "timerSeconds": 35,
      "points": 150,
      "acceptedAlternatives": [
        "goodness / truth",
        "goodness and truth"
      ],
      "hint1": "Hebrew hesed and emeth.",
      "hint2": "goodness and truth.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l49-c2",
    "game_slug": "verse-builder",
    "level": 49,
    "challenge_index": 2,
    "question_text": "Complete Moses' song in Deuteronomy 32:4: \"He is the Rock, his work is perfect: for all his ways are judgment: a God of truth and without iniquity, ______ and ______ is he.\"",
    "options": [
      "just / right",
      "holy / righteous",
      "true / faithful",
      "righteous / upright"
    ],
    "correct_answer": "just / right",
    "explanation": "Deuteronomy 32:4 concludes with two monosyllables: \"...just and right is he.\"",
    "reference": "Deuteronomy 32:4",
    "metadata": {
      "stage": 10,
      "stage_title": "Ultimate Verse Builder",
      "level_title": "Contextual & Master Reconstruction",
      "mechanic": "missing_words",
      "verse_text": "He is the Rock, his work is perfect: for all his ways are judgment: a God of truth and without iniquity, just and right is he.",
      "translation": "KJV",
      "testament": "Old Testament",
      "difficulty": "Expert",
      "timerSeconds": 40,
      "points": 200,
      "acceptedAlternatives": [
        "just / right",
        "just and right"
      ],
      "hint1": "Two concise four-letter and five-letter words of righteousness.",
      "hint2": "just and right.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l49-c3",
    "game_slug": "verse-builder",
    "level": 49,
    "challenge_index": 3,
    "question_text": "Complete Solomon's temple prayer in 1 Kings 8:23: \"LORD God of Israel, there is no God like thee, in heaven above, or on earth beneath, who keepest covenant and mercy with thy servants that walk before thee with ______ ______ ______:\"",
    "options": [
      "all their heart",
      "holy integrity",
      "humble minds",
      "fear and trembling"
    ],
    "correct_answer": "all their heart",
    "explanation": "1 Kings 8:23 praises covenant fidelity to those who walk: \"...with all their heart:\"",
    "reference": "1 Kings 8:23",
    "metadata": {
      "stage": 10,
      "stage_title": "Ultimate Verse Builder",
      "level_title": "Contextual & Master Reconstruction",
      "mechanic": "missing_phrase",
      "verse_text": "And he said, LORD God of Israel, there is no God like thee, in heaven above, or on earth beneath, who keepest covenant and mercy with thy servants that walk before thee with all their heart:",
      "translation": "KJV",
      "testament": "Old Testament",
      "difficulty": "Difficult",
      "timerSeconds": 40,
      "points": 150,
      "acceptedAlternatives": [
        "all their heart"
      ],
      "hint1": "Wholehearted devotion.",
      "hint2": "all their heart.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l49-c4",
    "game_slug": "verse-builder",
    "level": 49,
    "challenge_index": 4,
    "question_text": "Type the distance in Psalm 103:12: \"As far as the ______ is from the ______, so far hath he removed our transgressions from us.\"",
    "options": [],
    "correct_answer": "east west",
    "explanation": "Psalm 103:12 uses the infinite directional distance: \"As far as the east is from the west...\"",
    "reference": "Psalm 103:12",
    "metadata": {
      "stage": 10,
      "stage_title": "Ultimate Verse Builder",
      "level_title": "Contextual & Master Reconstruction",
      "mechanic": "build_without_options",
      "verse_text": "As far as the east is from the west, so far hath he removed our transgressions from us.",
      "translation": "KJV",
      "testament": "Old Testament",
      "difficulty": "Moderate",
      "timerSeconds": 30,
      "points": 100,
      "is_typed": true,
      "acceptedAlternatives": [
        "east west",
        "east from the west"
      ],
      "hint1": "Opposite compass directions.",
      "hint2": "east... west.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l49-c5",
    "game_slug": "verse-builder",
    "level": 49,
    "challenge_index": 5,
    "question_text": "Complete Daniel's confessional invocation in Daniel 9:4: \"O Lord, the great and dreadful God, keeping the covenant and mercy to them that ______ ______ and to them that ______ ______ ______;\"",
    "options": [
      "love him / keep his commandments",
      "fear him / walk in truth",
      "seek him / obey his voice",
      "trust him / serve his name"
    ],
    "correct_answer": "love him / keep his commandments",
    "explanation": "Daniel 9:4 confesses: \"...keeping the covenant and mercy to them that love him, and to them that keep his commandments;\"",
    "reference": "Daniel 9:4",
    "metadata": {
      "stage": 10,
      "stage_title": "Ultimate Verse Builder",
      "level_title": "Contextual & Master Reconstruction",
      "mechanic": "missing_words",
      "verse_text": "And I prayed unto the LORD my God, and made my confession, and said, O Lord, the great and dreadful God, keeping the covenant and mercy to them that love him, and to them that keep his commandments;",
      "translation": "KJV",
      "testament": "Old Testament",
      "difficulty": "Expert",
      "timerSeconds": 45,
      "points": 200,
      "acceptedAlternatives": [
        "love him / keep his commandments",
        "love him keep his commandments"
      ],
      "hint1": "Affections for God paired with covenant obedience.",
      "hint2": "love him... keep his commandments.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l50-c1",
    "game_slug": "verse-builder",
    "level": 50,
    "challenge_index": 1,
    "question_text": "Arrange the Genesis 1:1-3 narrative sequence into perfect biblical order: [1] \"And God said, Let there be light: and there was light.\" [2] \"In the beginning God created the heaven and the earth.\" [3] \"And the Spirit of God moved upon the face of the waters.\" [4] \"And the earth was without form, and void; and darkness was upon the face of the deep.\"",
    "options": [
      "2 -> 4 -> 3 -> 1",
      "2 -> 3 -> 4 -> 1",
      "4 -> 2 -> 3 -> 1",
      "1 -> 2 -> 4 -> 3"
    ],
    "correct_answer": "2 -> 4 -> 3 -> 1",
    "explanation": "Genesis 1:1-3 unfolds: [2] Creation (v.1) -> [4] Formless/void/darkness (v.2a) -> [3] Spirit moving over waters (v.2b) -> [1] Let there be light (v.3).",
    "reference": "Genesis 1:1-3",
    "metadata": {
      "stage": 10,
      "stage_title": "Ultimate Verse Builder",
      "level_title": "Alpha to Omega Master Builder",
      "mechanic": "passage_reconstruction",
      "verse_text": "In the beginning God created the heaven and the earth. And the earth was without form, and void; and darkness was upon the face of the deep. And the Spirit of God moved upon the face of the waters. And God said, Let there be light: and there was light.",
      "translation": "KJV",
      "testament": "Old Testament",
      "difficulty": "Master",
      "timerSeconds": 80,
      "points": 250,
      "sections": [
        "In the beginning God created the heaven and the earth.",
        "And the earth was without form, and void; and darkness was upon the face of the deep.",
        "And the Spirit of God moved upon the face of the waters.",
        "And God said, Let there be light: and there was light."
      ],
      "acceptedAlternatives": [
        "2 -> 4 -> 3 -> 1",
        "2, 4, 3, 1",
        "2-4-3-1"
      ],
      "hint1": "In the beginning -> formless/void -> Spirit moved -> Let there be light.",
      "hint2": "2 -> 4 -> 3 -> 1",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l50-c2",
    "game_slug": "verse-builder",
    "level": 50,
    "challenge_index": 2,
    "question_text": "Arrange the prologue of John 1:1-5 in order: [1] \"And the light shineth in darkness; and the darkness comprehended it not.\" [2] \"In the beginning was the Word, and the Word was with God, and the Word was God.\" [3] \"All things were made by him; and without him was not any thing made that was made.\" [4] \"In him was life; and the life was the light of men.\"",
    "options": [
      "2 -> 3 -> 4 -> 1",
      "2 -> 4 -> 3 -> 1",
      "3 -> 2 -> 4 -> 1",
      "1 -> 2 -> 3 -> 4"
    ],
    "correct_answer": "2 -> 3 -> 4 -> 1",
    "explanation": "John 1:1-5 sequence: [2] Pre-existence of the Word (v.1) -> [3] All things made by Him (v.3) -> [4] In Him was life / light of men (v.4) -> [1] Light shineth in darkness (v.5).",
    "reference": "John 1:1-5",
    "metadata": {
      "stage": 10,
      "stage_title": "Ultimate Verse Builder",
      "level_title": "Alpha to Omega Master Builder",
      "mechanic": "passage_reconstruction",
      "verse_text": "In the beginning was the Word... All things were made by him... In him was life; and the life was the light of men. And the light shineth in darkness; and the darkness comprehended it not.",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Master",
      "timerSeconds": 90,
      "points": 250,
      "sections": [
        "In the beginning was the Word, and the Word was with God, and the Word was God.",
        "All things were made by him; and without him was not any thing made that was made.",
        "In him was life; and the life was the light of men.",
        "And the light shineth in darkness; and the darkness comprehended it not."
      ],
      "acceptedAlternatives": [
        "2 -> 3 -> 4 -> 1",
        "2, 3, 4, 1",
        "2-3-4-1"
      ],
      "hint1": "Word was God -> Creation by Him -> Life and Light -> Light shines in darkness.",
      "hint2": "2 -> 3 -> 4 -> 1",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l50-c3",
    "game_slug": "verse-builder",
    "level": 50,
    "challenge_index": 3,
    "question_text": "Complete the cosmic new creation declaration in Revelation 21:5: \"And he that sat upon the throne said, Behold, ______ ______ ______ ______ ______.\"",
    "options": [
      "I make all things new.",
      "all former things are ended.",
      "my kingdom is established forever.",
      "I come quickly, and my reward is with me."
    ],
    "correct_answer": "I make all things new.",
    "explanation": "Revelation 21:5 records the divine decree from the throne: \"And he that sat upon the throne said, Behold, I make all things new.\"",
    "reference": "Revelation 21:5",
    "metadata": {
      "stage": 10,
      "stage_title": "Ultimate Verse Builder",
      "level_title": "Alpha to Omega Master Builder",
      "mechanic": "missing_phrase",
      "verse_text": "And he that sat upon the throne said, Behold, I make all things new. And he said unto me, Write: for these words are true and faithful.",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Master",
      "timerSeconds": 40,
      "points": 250,
      "acceptedAlternatives": [
        "I make all things new.",
        "I make all things new"
      ],
      "hint1": "Total renewal of all creation.",
      "hint2": "I make all things new.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l50-c4",
    "game_slug": "verse-builder",
    "level": 50,
    "challenge_index": 4,
    "question_text": "Type the title given by Christ to Himself in Revelation 22:13: \"I am ______ and ______, the beginning and the end, the first and the last.\"",
    "options": [],
    "correct_answer": "Alpha Omega",
    "explanation": "Revelation 22:13 identifies Jesus with the eternal Godhead: \"I am Alpha and Omega, the beginning and the end, the first and the last.\"",
    "reference": "Revelation 22:13",
    "metadata": {
      "stage": 10,
      "stage_title": "Ultimate Verse Builder",
      "level_title": "Alpha to Omega Master Builder",
      "mechanic": "build_without_options",
      "verse_text": "I am Alpha and Omega, the beginning and the end, the first and the last.",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Master",
      "timerSeconds": 45,
      "points": 250,
      "is_typed": true,
      "acceptedAlternatives": [
        "Alpha Omega",
        "Alpha and Omega"
      ],
      "hint1": "First and last letters of the Greek alphabet.",
      "hint2": "Alpha and Omega.",
      "curated": true
    }
  },
  {
    "id": "verse-builder-l50-c5",
    "game_slug": "verse-builder",
    "level": 50,
    "challenge_index": 5,
    "question_text": "Reconstruct the very final words of the Holy Bible in Revelation 22:20-21: \"He which testifieth these things saith, Surely I come quickly. Amen. Even so, come, Lord Jesus. ______ ______ ______ ______ ______ ______ ______ ______ ______.\"",
    "options": [
      "The grace of our Lord Jesus Christ be with you all. Amen.",
      "The peace of God which passeth all understanding abide with you. Amen.",
      "Unto him that loved us be glory and dominion for ever. Amen.",
      "The blessing of Almighty God remain upon his saints for evermore. Amen."
    ],
    "correct_answer": "The grace of our Lord Jesus Christ be with you all. Amen.",
    "explanation": "Revelation 22:21 closes the entire sixty-six book canon of Scripture with grace: \"The grace of our Lord Jesus Christ be with you all. Amen.\"",
    "reference": "Revelation 22:20-21",
    "metadata": {
      "stage": 10,
      "stage_title": "Ultimate Verse Builder",
      "level_title": "Alpha to Omega Master Builder",
      "mechanic": "master_builder",
      "verse_text": "He which testifieth these things saith, Surely I come quickly. Amen. Even so, come, Lord Jesus. The grace of our Lord Jesus Christ be with you all. Amen.",
      "translation": "KJV",
      "testament": "New Testament",
      "difficulty": "Master",
      "timerSeconds": 60,
      "points": 250,
      "acceptedAlternatives": [
        "The grace of our Lord Jesus Christ be with you all. Amen."
      ],
      "hint1": "Apostolic benediction of grace sealing the canon.",
      "hint2": "The grace of our Lord Jesus Christ be with you all. Amen.",
      "curated": true
    }
  }
];
