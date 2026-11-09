// Find the Bible Book — Complete 50 Levels · 250 Questions Bank
// 10 Stages × 5 Levels × 5 Challenges
// Curated with forensic Bible book challenges, obscure clues, canonical sequencing, and type-the-book challenges.

export interface FindBookChallengeItem {
  id: string;
  game_slug: 'find-the-bible-book';
  level: number;
  challenge_index: number;
  question_text: string;
  options: string[];
  correct_answer: string;
  explanation: string;
  reference: string;
  metadata: {
    question_type: string;
    is_typed: boolean;
    clues?: string[];
    hint?: string;
    testament?: 'Old Testament' | 'New Testament' | 'Both';
    acceptedAlternatives?: string[];
    stage?: number;
    stage_title?: string;
    level_theme?: string;
    difficulty?: string;
    timerSeconds?: number;
    curated: true;
  };
}

export const FIND_THE_BIBLE_BOOK_QUESTIONS: FindBookChallengeItem[] = [
  {
    "id": "find-the-bible-book-l1-c1",
    "game_slug": "find-the-bible-book",
    "level": 1,
    "challenge_index": 1,
    "question_text": "In which book of the Bible do we read the account of God commanding a father to journey to the land of Moriah and offer his only beloved son as a burnt offering?",
    "options": [
      "Genesis",
      "Exodus",
      "Leviticus",
      "Deuteronomy"
    ],
    "correct_answer": "Genesis",
    "explanation": "Genesis 22 records the binding of Isaac (the Akedah) on Mount Moriah, where Abraham was tested and the Lord provided the ram.",
    "reference": "Genesis 22:1–14",
    "metadata": {
      "question_type": "Identify the Book from the Story",
      "is_typed": false,
      "clues": [
        "Contains the primeval history and lives of the patriarchs.",
        "The father saw a ram caught in a thicket by its horns and called the place \"The Lord Will Provide\".",
        "The first book of the Pentateuch."
      ],
      "hint": "The foundational book of beginnings; first book of the Old Testament.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Gen"
      ],
      "stage": 1,
      "stage_title": "Book Foundations",
      "level_theme": "Pentateuch Foundations",
      "difficulty": "easy",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l1-c2",
    "game_slug": "find-the-bible-book",
    "level": 1,
    "challenge_index": 2,
    "question_text": "Which book details the miraculous midnight institution of the Passover, where blood on the doorposts caused the destroyer to pass over the houses of Israel?",
    "options": [
      "Exodus",
      "Leviticus",
      "Numbers",
      "Joshua"
    ],
    "correct_answer": "Exodus",
    "explanation": "Exodus 12 records the original Passover night in Egypt before the departure of the Israelites from Goshen.",
    "reference": "Exodus 12:1–28",
    "metadata": {
      "question_type": "Identify the Book from the Story",
      "is_typed": false,
      "clues": [
        "Narrates the departure of Israel from Egyptian slavery.",
        "Includes the crossing of the Red Sea and the giving of the Law at Mount Sinai.",
        "Second book of Moses."
      ],
      "hint": "Named for the historic \"exit\" or departure of Israel from Egypt.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Exod"
      ],
      "stage": 1,
      "stage_title": "Book Foundations",
      "level_theme": "Pentateuch Foundations",
      "difficulty": "easy",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l1-c3",
    "game_slug": "find-the-bible-book",
    "level": 1,
    "challenge_index": 3,
    "question_text": "TYPE THE BIBLE BOOK:\nWhich book contains detailed statutes for the annual Day of Atonement (Yom Kippur), where the High Priest casts lots over two goats—one slain as a sin offering and one sent into the wilderness as the scapegoat?",
    "options": [
      "Leviticus",
      "Numbers",
      "Deuteronomy",
      "Exodus"
    ],
    "correct_answer": "Leviticus",
    "explanation": "Leviticus 16 details the complete ritual of Yom Kippur, the scapegoat (Azazel), and the High Priest entering the Holy of Holies.",
    "reference": "Leviticus 16:1–34",
    "metadata": {
      "question_type": "Type the Book",
      "is_typed": true,
      "clues": [
        "Focuses primarily on the holiness of God, priesthood, and sacrificial offerings.",
        "Includes the command: \"You shall be holy, for I the Lord your God am holy.\"",
        "Contains the phrase: \"Love your neighbor as yourself\" (Lev 19:18)."
      ],
      "hint": "The central book of the Torah, named after the priestly tribe of Levi.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Lev"
      ],
      "stage": 1,
      "stage_title": "Book Foundations",
      "level_theme": "Pentateuch Foundations",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l1-c4",
    "game_slug": "find-the-bible-book",
    "level": 1,
    "challenge_index": 4,
    "question_text": "Which book records the sending of twelve tribal spies from Kadesh-barnea into Canaan, the rebellion of Korah, and the bronze serpent raised on a pole?",
    "options": [
      "Numbers",
      "Deuteronomy",
      "Joshua",
      "Judges"
    ],
    "correct_answer": "Numbers",
    "explanation": "The Book of Numbers documents the wilderness wanderings, the failure of faith at Kadesh-barnea, and the bronze serpent.",
    "reference": "Numbers 13–14; 16; 21:4–9",
    "metadata": {
      "question_type": "Identify the Book from the Story",
      "is_typed": false,
      "clues": [
        "Opens with a census of the fighting men of Israel in the wilderness.",
        "Records forty years of wandering between Sinai and the plains of Moab.",
        "Hebrew title is Bemidbar (\"In the wilderness\")."
      ],
      "hint": "Named in English for the censuses (numbering) taken of Israel's tribes.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Num"
      ],
      "stage": 1,
      "stage_title": "Book Foundations",
      "level_theme": "Pentateuch Foundations",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l1-c5",
    "game_slug": "find-the-bible-book",
    "level": 1,
    "challenge_index": 5,
    "question_text": "TYPE THE BIBLE BOOK:\nIn which book does Moses deliver his monumental farewell addresses on the plains of Moab, proclaiming the supreme Shema: \"Hear, O Israel: The Lord our God, the Lord is one\"?",
    "options": [
      "Deuteronomy",
      "Leviticus",
      "Joshua",
      "Numbers"
    ],
    "correct_answer": "Deuteronomy",
    "explanation": "Deuteronomy contains Moses' farewell speeches, the Shema (Deut 6:4), and Moses' death on Mount Nebo.",
    "reference": "Deuteronomy 6:4–9; 34:1–6; Matthew 4:4–10",
    "metadata": {
      "question_type": "Type the Book",
      "is_typed": true,
      "clues": [
        "Its name in Greek means \"second law\" (a repetition and covenant renewal of the Law).",
        "Jesus quoted all three of His wilderness temptation answers directly from this book.",
        "Concludes with Moses viewing Canaan from Mount Nebo and his burial by God."
      ],
      "hint": "Fifth book of the Bible; begins with \"Deut-\".",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Deut"
      ],
      "stage": 1,
      "stage_title": "Book Foundations",
      "level_theme": "Pentateuch Foundations",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l2-c1",
    "game_slug": "find-the-bible-book",
    "level": 2,
    "challenge_index": 1,
    "question_text": "Which historical book recounts the miraculous collapse of the walls of Jericho after the priests blew trumpets and marched around the city for seven days?",
    "options": [
      "Joshua",
      "Judges",
      "1 Samuel",
      "Nehemiah"
    ],
    "correct_answer": "Joshua",
    "explanation": "The Book of Joshua details the conquest of Canaan, the miraculous fall of Jericho, and the covenant renewal at Shechem.",
    "reference": "Joshua 1:9; 6:1–21",
    "metadata": {
      "question_type": "Identify the Book from the Story",
      "is_typed": false,
      "clues": [
        "Opens with the divine charge: \"Be strong and courageous; do not be frightened.\"",
        "Covers the crossing of the Jordan on dry ground and the allotment of tribal territories.",
        "Named after Moses' faithful military successor."
      ],
      "hint": "Named for the leader who led Israel across the Jordan River into Canaan.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Josh"
      ],
      "stage": 1,
      "stage_title": "Book Foundations",
      "level_theme": "Historical Books",
      "difficulty": "easy",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l2-c2",
    "game_slug": "find-the-bible-book",
    "level": 2,
    "challenge_index": 2,
    "question_text": "In which book do we read repeated cycles of apostasy, foreign oppression, cries for mercy, and military deliverers such as Deborah, Gideon, and Samson?",
    "options": [
      "Judges",
      "1 Samuel",
      "1 Kings",
      "Joshua"
    ],
    "correct_answer": "Judges",
    "explanation": "Judges recounts Israel's dark spiral during the era of charismatic tribal deliverers (shophetim).",
    "reference": "Judges 2:16–19; 21:25",
    "metadata": {
      "question_type": "Identify the Book from the Story",
      "is_typed": false,
      "clues": [
        "Concludes with the famous refrain: \"In those days there was no king in Israel; everyone did what was right in his own eyes.\"",
        "Contains the stories of Ehud's dagger and Jael's tent peg.",
        "Covers the chaotic era before Israel's first king."
      ],
      "hint": "Plural title referring to the charismatic leaders raised up by God.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Judg"
      ],
      "stage": 1,
      "stage_title": "Book Foundations",
      "level_theme": "Historical Books",
      "difficulty": "easy",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l2-c3",
    "game_slug": "find-the-bible-book",
    "level": 2,
    "challenge_index": 3,
    "question_text": "TYPE THE BIBLE BOOK:\nWhich four-chapter book tells of a widowed Moabite woman who declared to her mother-in-law: \"Where you go I will go, and where you lodge I will lodge. Your people shall be my people, and your God my God\"?",
    "options": [
      "Ruth",
      "Esther",
      "Song of Solomon",
      "Judges"
    ],
    "correct_answer": "Ruth",
    "explanation": "The Book of Ruth narrates the loyalty of Ruth to Naomi, her marriage to Boaz as kinsman-redeemer, and her inclusion in David's ancestry.",
    "reference": "Ruth 1:16–17; 4:18–22",
    "metadata": {
      "question_type": "Type the Book",
      "is_typed": true,
      "clues": [
        "Set \"in the days when the judges ruled\".",
        "The heroine gleans in the barley fields of Boaz in Bethlehem.",
        "Ends with a royal genealogy leading directly to King David."
      ],
      "hint": "Four-letter book named after the faithful Moabite great-grandmother of David.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Rth"
      ],
      "stage": 1,
      "stage_title": "Book Foundations",
      "level_theme": "Historical Books",
      "difficulty": "easy",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l2-c4",
    "game_slug": "find-the-bible-book",
    "level": 2,
    "challenge_index": 4,
    "question_text": "In which book does young shepherd David confront and defeat Goliath of Gath with a sling and a single stone in the Valley of Elah?",
    "options": [
      "1 Samuel",
      "2 Samuel",
      "1 Chronicles",
      "1 Kings"
    ],
    "correct_answer": "1 Samuel",
    "explanation": "1 Samuel 17 describes David slaying Goliath, David's rise in Saul's court, and Saul's jealousy.",
    "reference": "1 Samuel 17:40–51",
    "metadata": {
      "question_type": "Identify the Book from the Story",
      "is_typed": false,
      "clues": [
        "Opens with the prayer of barren Hannah at Shiloh and the birth of Samuel.",
        "Records the anointing and tragic downfall of King Saul.",
        "Details Jonathan and David's covenant of friendship."
      ],
      "hint": "First book bearing the name of the great prophet-judge Samuel.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "First Samuel",
        "1Sam"
      ],
      "stage": 1,
      "stage_title": "Book Foundations",
      "level_theme": "Historical Books",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l2-c5",
    "game_slug": "find-the-bible-book",
    "level": 2,
    "challenge_index": 5,
    "question_text": "TYPE THE BIBLE BOOK:\nWhich book is entirely devoted to the forty-year reign of King David over all Israel, including the capture of Jerusalem, the Davidic Covenant in chapter 7, and David's sin with Bathsheba?",
    "options": [
      "2 Samuel",
      "1 Samuel",
      "1 Kings",
      "1 Chronicles"
    ],
    "correct_answer": "2 Samuel",
    "explanation": "2 Samuel covers the reign of David exclusively, from his lament over Saul to the closing numbering of the people.",
    "reference": "2 Samuel 1:1; 7:1–17; 12:1–15",
    "metadata": {
      "question_type": "Type the Book",
      "is_typed": true,
      "clues": [
        "Opens with David mourning the deaths of Saul and Jonathan at Mount Gilboa.",
        "Nathan confronts the king: \"You are the man!\"",
        "Includes Absalom's rebellion and David's flight from Jerusalem."
      ],
      "hint": "Second book bearing the name of Samuel; starts with \"2\".",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Second Samuel",
        "2Sam"
      ],
      "stage": 1,
      "stage_title": "Book Foundations",
      "level_theme": "Historical Books",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l3-c1",
    "game_slug": "find-the-bible-book",
    "level": 3,
    "challenge_index": 1,
    "question_text": "In which poetic book does a righteous patriarch in the land of Uz lose his wealth, servants, and children in a single day, declaring: \"The Lord gave, and the Lord has taken away; blessed be the name of the Lord\"?",
    "options": [
      "Job",
      "Ecclesiastes",
      "Psalms",
      "Habakkuk"
    ],
    "correct_answer": "Job",
    "explanation": "The Book of Job examines the profound problem of innocent suffering, divine sovereignty, and unshakeable trust.",
    "reference": "Job 1:21; 19:25; 38:1–4",
    "metadata": {
      "question_type": "Identify the Book from the Story",
      "is_typed": false,
      "clues": [
        "Features extended theological debates with three friends: Eliphaz, Bildad, and Zophar.",
        "God answers out of the whirlwind with majesties of creation.",
        "Contains the declaration: \"I know that my Redeemer lives\" (Job 19:25)."
      ],
      "hint": "Three-letter book name beginning with J.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Jb"
      ],
      "stage": 1,
      "stage_title": "Book Foundations",
      "level_theme": "Poetry & Wisdom",
      "difficulty": "easy",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l3-c2",
    "game_slug": "find-the-bible-book",
    "level": 3,
    "challenge_index": 2,
    "question_text": "Which book contains 150 sacred Hebrew hymns and prayers, divided into five books, opening with: \"Blessed is the man who walks not in the counsel of the wicked\"?",
    "options": [
      "Psalms",
      "Proverbs",
      "Lamentations",
      "Song of Solomon"
    ],
    "correct_answer": "Psalms",
    "explanation": "The Book of Psalms comprises 150 inspired songs and prayers composed by David, Asaph, the sons of Korah, Moses, and Solomon.",
    "reference": "Psalm 1:1; 23:1; 150:6",
    "metadata": {
      "question_type": "Identify the Book from the Story",
      "is_typed": false,
      "clues": [
        "The ancient prayer book and hymnal of Israel.",
        "Includes Psalm 23 (\"The Lord is my shepherd\") and Psalm 51.",
        "The most frequently quoted Old Testament book in the New Testament."
      ],
      "hint": "Collection of 150 poetic chapters; begins with Ps-.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Psalm",
        "Psa"
      ],
      "stage": 1,
      "stage_title": "Book Foundations",
      "level_theme": "Poetry & Wisdom",
      "difficulty": "easy",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l3-c3",
    "game_slug": "find-the-bible-book",
    "level": 3,
    "challenge_index": 3,
    "question_text": "TYPE THE BIBLE BOOK:\nWhich book opens with the motto: \"The fear of the Lord is the beginning of knowledge; fools despise wisdom and instruction\", and concludes with the famous acrostic tribute to the woman of valor (chayil) in chapter 31?",
    "options": [
      "Proverbs",
      "Ecclesiastes",
      "Job",
      "James"
    ],
    "correct_answer": "Proverbs",
    "explanation": "The Book of Proverbs is Solomon's collection of inspired wisdom for godly daily living.",
    "reference": "Proverbs 1:7; 31:10–31",
    "metadata": {
      "question_type": "Type the Book",
      "is_typed": true,
      "clues": [
        "Primarily written and collected by King Solomon.",
        "Contains practical aphorisms on speech, diligence, wealth, and moral purity.",
        "Personifies Divine Wisdom crying out in the public square."
      ],
      "hint": "Plural word meaning concise wise sayings; begins with Prov-.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Prov"
      ],
      "stage": 1,
      "stage_title": "Book Foundations",
      "level_theme": "Poetry & Wisdom",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l3-c4",
    "game_slug": "find-the-bible-book",
    "level": 3,
    "challenge_index": 4,
    "question_text": "In which wisdom book does the Preacher (Qoheleth), son of David, king in Jerusalem, investigate earthly endeavors and declare: \"Vanity of vanities! All is vanity... To everything there is a season, and a time to every purpose under heaven\"?",
    "options": [
      "Ecclesiastes",
      "Proverbs",
      "Job",
      "Song of Solomon"
    ],
    "correct_answer": "Ecclesiastes",
    "explanation": "Ecclesiastes explores the futility of life apart from God (\"under the sun\") and summons humanity to reverence the Creator.",
    "reference": "Ecclesiastes 1:2; 3:1; 12:13",
    "metadata": {
      "question_type": "Identify the Book from the Story",
      "is_typed": false,
      "clues": [
        "Reflects on labor, pleasure, wisdom, and wealth \"under the sun\".",
        "Concludes: \"Fear God and keep his commandments, for this is the whole duty of man.\"",
        "Name comes from the Greek word for assembly or church."
      ],
      "hint": "Begins with Eccl-; translates the Hebrew Qoheleth.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Eccl"
      ],
      "stage": 1,
      "stage_title": "Book Foundations",
      "level_theme": "Poetry & Wisdom",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l3-c5",
    "game_slug": "find-the-bible-book",
    "level": 3,
    "challenge_index": 5,
    "question_text": "TYPE THE BIBLE BOOK:\nWhich eight-chapter lyrical dialogue celebrates marital romance and covenant love between a royal bridegroom and a Shulammite bride, declaring: \"Love is strong as death, jealousy is fierce as the grave\"?",
    "options": [
      "Song of Solomon",
      "Song of Songs",
      "Canticles",
      "Ruth"
    ],
    "correct_answer": "Song of Solomon",
    "explanation": "Song of Solomon (or Song of Songs) is a poetic song cycle celebrating pure romantic marital intimacy.",
    "reference": "Song of Solomon 1:1; 8:6",
    "metadata": {
      "question_type": "Type the Book",
      "is_typed": true,
      "clues": [
        "Also known in Latin as Canticles.",
        "Attributed to King Solomon.",
        "Refrain: \"I adjure you, O daughters of Jerusalem, that you not stir up or awaken love until it pleases.\""
      ],
      "hint": "Often called \"Song of Songs\" or \"Song of Solomon\".",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Song of Songs",
        "Canticles",
        "Song"
      ],
      "stage": 1,
      "stage_title": "Book Foundations",
      "level_theme": "Poetry & Wisdom",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l4-c1",
    "game_slug": "find-the-bible-book",
    "level": 4,
    "challenge_index": 1,
    "question_text": "Which Gospel opens with the royal genealogy of Jesus traced through Abraham and David, features five major discourses (including the Sermon on the Mount), and closes with the Great Commission?",
    "options": [
      "Matthew",
      "Mark",
      "Luke",
      "John"
    ],
    "correct_answer": "Matthew",
    "explanation": "Matthew presents Jesus as the promised Messianic King of Israel who fulfills the Old Testament covenants.",
    "reference": "Matthew 1:1; 5–7; 28:18–20",
    "metadata": {
      "question_type": "Identify the Book from the Story",
      "is_typed": false,
      "clues": [
        "Written by a former Jewish tax collector (Levi).",
        "Frequently uses the phrase \"kingdom of heaven\" rather than \"kingdom of God\".",
        "First book of the New Testament."
      ],
      "hint": "First book of the New Testament; starts with M.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Matt"
      ],
      "stage": 1,
      "stage_title": "Book Foundations",
      "level_theme": "Gospels & Acts",
      "difficulty": "easy",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l4-c2",
    "game_slug": "find-the-bible-book",
    "level": 4,
    "challenge_index": 2,
    "question_text": "Which fast-paced Gospel frequently uses the Greek adverb \"euthus\" (immediately), presents Jesus as the Suffering Servant who \"came not to be served but to serve\", and is the shortest of the four Gospels?",
    "options": [
      "Mark",
      "Matthew",
      "Luke",
      "John"
    ],
    "correct_answer": "Mark",
    "explanation": "Mark is the shortest and most action-packed Gospel, emphasizing Jesus as the powerful yet suffering Servant of God.",
    "reference": "Mark 1:12; 10:45",
    "metadata": {
      "question_type": "Identify the Book from the Story",
      "is_typed": false,
      "clues": [
        "Traditionally associated with the preaching of Simon Peter.",
        "Focuses heavily on Jesus' deeds, authority, and miracles rather than long speeches.",
        "Contains 16 chapters."
      ],
      "hint": "Four-letter name; shortest Gospel.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Mk"
      ],
      "stage": 1,
      "stage_title": "Book Foundations",
      "level_theme": "Gospels & Acts",
      "difficulty": "easy",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l4-c3",
    "game_slug": "find-the-bible-book",
    "level": 4,
    "challenge_index": 3,
    "question_text": "TYPE THE BIBLE BOOK:\nWhich Gospel, addressed to \"most excellent Theophilus\" by a Gentile physician, uniquely contains the parables of the Good Samaritan, the Prodigal Son, and the encounter with Zacchaeus?",
    "options": [
      "Luke",
      "Acts",
      "John",
      "Matthew"
    ],
    "correct_answer": "Luke",
    "explanation": "Luke, written by the \"beloved physician\", highlights Jesus' universal humanity and salvation for all nations.",
    "reference": "Luke 1:1–4; 10:25–37; 15:11–32; 19:1–10",
    "metadata": {
      "question_type": "Type the Book",
      "is_typed": true,
      "clues": [
        "Emphasizes Jesus' compassion for outcasts, women, the poor, and repentant tax collectors.",
        "Contains the detailed nativity hymns of Mary (Magnificat) and Zechariah (Benedictus).",
        "Author was Paul's traveling companion and also wrote Acts."
      ],
      "hint": "Four-letter name of the physician author.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Lk"
      ],
      "stage": 1,
      "stage_title": "Book Foundations",
      "level_theme": "Gospels & Acts",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l4-c4",
    "game_slug": "find-the-bible-book",
    "level": 4,
    "challenge_index": 4,
    "question_text": "Which Gospel opens with the cosmic prologue: \"In the beginning was the Word, and the Word was with God, and the Word was God\", and features seven \"I AM\" statements and seven miracle \"signs\"?",
    "options": [
      "John",
      "Luke",
      "Hebrews",
      "Romans"
    ],
    "correct_answer": "John",
    "explanation": "The Fourth Gospel, John, emphasizes the divine identity, preexistence, and glory of Jesus Christ.",
    "reference": "John 1:1, 14; 3:1–16; 20:30–31",
    "metadata": {
      "question_type": "Identify the Book from the Story",
      "is_typed": false,
      "clues": [
        "Written that \"you may believe that Jesus is the Christ, the Son of God, and that by believing you may have life in his name.\"",
        "Contains Jesus' nocturnal dialogue with Nicodemus (\"You must be born again\").",
        "Authored by the \"disciple whom Jesus loved\"."
      ],
      "hint": "Four-letter Gospel name; beloved disciple.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Jn"
      ],
      "stage": 1,
      "stage_title": "Book Foundations",
      "level_theme": "Gospels & Acts",
      "difficulty": "easy",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l4-c5",
    "game_slug": "find-the-bible-book",
    "level": 4,
    "challenge_index": 5,
    "question_text": "TYPE THE BIBLE BOOK:\nWhich New Testament historical book documents the Day of Pentecost, the stoning of Stephen, the conversion of Cornelius, and Paul's three missionary journeys carrying the gospel from Jerusalem to Rome?",
    "options": [
      "Acts",
      "Luke",
      "Romans",
      "Galatians"
    ],
    "correct_answer": "Acts",
    "explanation": "Acts of the Apostles records the birth and expansion of the Christian church empowered by the Holy Spirit.",
    "reference": "Acts 2:1–4; Acts 1:8; Acts 28:30–31",
    "metadata": {
      "question_type": "Type the Book",
      "is_typed": true,
      "clues": [
        "Opens with Jesus' ascension from the Mount of Olives and promise: \"You will be my witnesses... to the end of the earth.\"",
        "The sole narrative historical bridge between the Gospels and the Epistles.",
        "Second treatise addressed to Theophilus by Luke."
      ],
      "hint": "Four-letter book title: \"Acts\" (of the Apostles).",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Acts of the Apostles",
        "Act"
      ],
      "stage": 1,
      "stage_title": "Book Foundations",
      "level_theme": "Gospels & Acts",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l5-c1",
    "game_slug": "find-the-bible-book",
    "level": 5,
    "challenge_index": 1,
    "question_text": "In which monumental epistle does the apostle Paul set forth the righteousness of God revealed through faith in Christ, declaring in chapter 8 that \"there is now no condemnation for those who are in Christ Jesus\"?",
    "options": [
      "Romans",
      "Galatians",
      "Ephesians",
      "Hebrews"
    ],
    "correct_answer": "Romans",
    "explanation": "Romans is Paul's grand theological masterpiece outlining the universal reign of sin, justification by faith, sanctification, and Christian ethics.",
    "reference": "Romans 1:16–17; 8:1, 38–39",
    "metadata": {
      "question_type": "Identify the Book from the Story",
      "is_typed": false,
      "clues": [
        "Contains chapters 9–11 discussing the mystery of Israel's election and future restoration.",
        "Written from Corinth to the imperial capital's congregation.",
        "Presents justification by grace alone through faith."
      ],
      "hint": "Addressed to the church in the capital of the Roman Empire.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Rom"
      ],
      "stage": 1,
      "stage_title": "Book Foundations",
      "level_theme": "Epistles & Apocalypse",
      "difficulty": "easy",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l5-c2",
    "game_slug": "find-the-bible-book",
    "level": 5,
    "challenge_index": 2,
    "question_text": "Which epistle contains the famous \"Love Chapter\" (chapter 13: \"Love is patient and kind; love does not envy or boast\") and the definitive theological exposition of Christ's resurrection in chapter 15?",
    "options": [
      "1 Corinthians",
      "2 Corinthians",
      "Galatians",
      "Philippians"
    ],
    "correct_answer": "1 Corinthians",
    "explanation": "1 Corinthians addresses church order, the nature of Christian love (ch. 13), and the bodily resurrection of Christ and believers (ch. 15).",
    "reference": "1 Corinthians 13:1–13; 15:1–26",
    "metadata": {
      "question_type": "Identify the Book from the Story",
      "is_typed": false,
      "clues": [
        "Written to address severe factions, lawsuits, marriage questions, and misuse of spiritual gifts in a Greek seaport city.",
        "Opens with Paul rebuking divisions: \"I follow Paul, or I follow Apollos, or I follow Cephas.\"",
        "First letter to this troubled church."
      ],
      "hint": "First letter to the Corinthians.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "First Corinthians",
        "1Cor"
      ],
      "stage": 1,
      "stage_title": "Book Foundations",
      "level_theme": "Epistles & Apocalypse",
      "difficulty": "easy",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l5-c3",
    "game_slug": "find-the-bible-book",
    "level": 5,
    "challenge_index": 3,
    "question_text": "TYPE THE BIBLE BOOK:\nWhich fiery six-chapter epistle by Paul forcefully defends justification by faith against legalistic Judaizers, declaring: \"For freedom Christ has set us free... the fruit of the Spirit is love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, self-control\"?",
    "options": [
      "Galatians",
      "Ephesians",
      "Colossians",
      "Romans"
    ],
    "correct_answer": "Galatians",
    "explanation": "Galatians was written to churches in Asia Minor to refute the false doctrine that Gentile believers must be circumcised to be saved.",
    "reference": "Galatians 3:1; 5:1, 22–23",
    "metadata": {
      "question_type": "Type the Book",
      "is_typed": true,
      "clues": [
        "Paul rebukes them: \"O foolish..., who has bewitched you?\"",
        "Recounts Paul opposing Peter to his face in Antioch.",
        "Often called the \"Magna Carta of Christian Liberty\"."
      ],
      "hint": "Begins with Gal-; addressed to believers in central Asia Minor.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Gal"
      ],
      "stage": 1,
      "stage_title": "Book Foundations",
      "level_theme": "Epistles & Apocalypse",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l5-c4",
    "game_slug": "find-the-bible-book",
    "level": 5,
    "challenge_index": 4,
    "question_text": "In which prison epistle does Paul outline the spiritual blessings in heavenly places, the mystery of the Church as one new man, and the full Armor of God (belt of truth, breastplate of righteousness, shield of faith)?",
    "options": [
      "Ephesians",
      "Colossians",
      "Philippians",
      "1 Thessalonians"
    ],
    "correct_answer": "Ephesians",
    "explanation": "Ephesians expounds the eternal purpose of God, unity in the body of Christ, and spiritual warfare with the Armor of God.",
    "reference": "Ephesians 2:8–9; 6:10–18",
    "metadata": {
      "question_type": "Identify the Book from the Story",
      "is_typed": false,
      "clues": [
        "Written from Roman imprisonment to a major commercial capital in Asia Minor.",
        "Contains the declaration: \"For by grace you have been saved through faith. And this is not your own doing; it is the gift of God, not a result of works.\"",
        "Includes practical instructions for husbands, wives, children, and masters."
      ],
      "hint": "Addressed to the believers in the city of Ephesus.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Eph"
      ],
      "stage": 1,
      "stage_title": "Book Foundations",
      "level_theme": "Epistles & Apocalypse",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l5-c5",
    "game_slug": "find-the-bible-book",
    "level": 5,
    "challenge_index": 5,
    "question_text": "TYPE THE BIBLE BOOK:\nWhich prophetic book, written by John from exile on the island of Patmos, closes the biblical canon with apocalyptic visions of seven seals, seven trumpets, the defeat of Babylon, and the descent of the New Jerusalem?",
    "options": [
      "Revelation",
      "Apocalypse",
      "Daniel",
      "Hebrews"
    ],
    "correct_answer": "Revelation",
    "explanation": "The Book of Revelation (the Apocalypse) is the climactic finale of the Christian Bible, revealing Christ's total triumph over evil.",
    "reference": "Revelation 1:1, 9; 21:1–4; 22:20",
    "metadata": {
      "question_type": "Type the Book",
      "is_typed": true,
      "clues": [
        "Opens: \"The revelation of Jesus Christ, which God gave him to show to his servants the things that must soon take place.\"",
        "Contains seven specific letters to the churches of Asia Minor in chapters 2–3.",
        "Final chapter promises: \"He who testifies to these things says, 'Surely I am coming soon.' Amen. Come, Lord Jesus!\""
      ],
      "hint": "The final, 66th book of the Bible; begins with Rev-.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "The Revelation of John",
        "Apocalypse",
        "Rev"
      ],
      "stage": 1,
      "stage_title": "Book Foundations",
      "level_theme": "Epistles & Apocalypse",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l6-c1",
    "game_slug": "find-the-bible-book",
    "level": 6,
    "challenge_index": 1,
    "question_text": "In which book do we read of an iron axe head falling into the Jordan River while the sons of the prophets were cutting timber, and the prophet throwing in a stick to make the iron float?",
    "options": [
      "2 Kings",
      "1 Kings",
      "2 Chronicles",
      "Joshua"
    ],
    "correct_answer": "2 Kings",
    "explanation": "2 Kings 6:1–7 records Elisha making the borrowed iron axe head float in the Jordan River.",
    "reference": "2 Kings 6:1–7",
    "metadata": {
      "question_type": "Which Book Contains This Event?",
      "is_typed": false,
      "clues": [
        "The workman cried: \"Alas, my master! It was borrowed.\"",
        "Performed by the successor of the prophet Elijah.",
        "Contains Naaman's cleansing from leprosy and the fiery chariots at Dothan."
      ],
      "hint": "Second volume of the book of Kings.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Second Kings",
        "2Kgs"
      ],
      "stage": 2,
      "stage_title": "Story and Book",
      "level_theme": "Miracles & Deliverances",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l6-c2",
    "game_slug": "find-the-bible-book",
    "level": 6,
    "challenge_index": 2,
    "question_text": "Which book records Joshua commanding the sun to stand still over Gibeon and the moon in the Valley of Aijalon during battle against the five Amorite kings?",
    "options": [
      "Joshua",
      "Judges",
      "1 Samuel",
      "Deuteronomy"
    ],
    "correct_answer": "Joshua",
    "explanation": "Joshua 10:12–14 records the miracle of the sun and moon standing still during the battle of Gibeon.",
    "reference": "Joshua 10:12–14",
    "metadata": {
      "question_type": "Which Book Contains This Event?",
      "is_typed": false,
      "clues": [
        "The text notes: \"There has been no day like it before or since, when the Lord heeded the voice of a man.\"",
        "Recorded also in the Book of Jashar.",
        "Details the conquest of southern and northern Canaan."
      ],
      "hint": "Named for the commander who succeeded Moses.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Josh"
      ],
      "stage": 2,
      "stage_title": "Story and Book",
      "level_theme": "Miracles & Deliverances",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l6-c3",
    "game_slug": "find-the-bible-book",
    "level": 6,
    "challenge_index": 3,
    "question_text": "TYPE THE BIBLE BOOK:\nIn which book does King Hezekiah receive a miraculous sign confirming fifteen years added to his life: the sundial shadow going backward ten steps on the stairway of Ahaz?",
    "options": [
      "Isaiah",
      "2 Kings",
      "2 Chronicles",
      "Jeremiah"
    ],
    "correct_answer": "Isaiah",
    "explanation": "Isaiah 38 records Hezekiah's sickness, prayer, and the sign of the shadow turning back ten steps on the sundial of Ahaz.",
    "reference": "Isaiah 38:1–8; 2 Kings 20:8–11",
    "metadata": {
      "question_type": "Type the Book",
      "is_typed": true,
      "clues": [
        "Hezekiah was sick unto death, but wept and prayed.",
        "A cake of figs was applied to his boil for healing.",
        "Recorded in both 2 Kings and in this major prophetic book in chapter 38."
      ],
      "hint": "Major prophet of 66 chapters who ministered to King Hezekiah.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "2 Kings",
        "Isa"
      ],
      "stage": 2,
      "stage_title": "Story and Book",
      "level_theme": "Miracles & Deliverances",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l6-c4",
    "game_slug": "find-the-bible-book",
    "level": 6,
    "challenge_index": 4,
    "question_text": "In which book do we read of a bronze serpent constructed by Moses and placed on a pole so that anyone bitten by fiery serpents could look and live?",
    "options": [
      "Numbers",
      "Exodus",
      "Leviticus",
      "Deuteronomy"
    ],
    "correct_answer": "Numbers",
    "explanation": "Numbers 21 records the bronze serpent episode on the way from Mount Hor around the land of Edom.",
    "reference": "Numbers 21:4–9",
    "metadata": {
      "question_type": "Which Book Contains This Event?",
      "is_typed": false,
      "clues": [
        "Israel had murmured against God and Moses in the desert: \"Why have you brought us up out of Egypt to die?\"",
        "Later called \"Nehushtan\" and destroyed by King Hezekiah when abused as an idol.",
        "Jesus references this event in John 3:14."
      ],
      "hint": "Fourth book of the Old Testament.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Num"
      ],
      "stage": 2,
      "stage_title": "Story and Book",
      "level_theme": "Miracles & Deliverances",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l6-c5",
    "game_slug": "find-the-bible-book",
    "level": 6,
    "challenge_index": 5,
    "question_text": "TYPE THE BIBLE BOOK:\nWhich book records an apostle being bitten by a poisonous viper on the island of Malta after a shipwreck, shaking the snake off into the fire with no ill effects, leading locals to believe he was a god?",
    "options": [
      "Acts",
      "Acts of the Apostles",
      "Romans",
      "2 Timothy"
    ],
    "correct_answer": "Acts",
    "explanation": "Acts 28:1–6 describes Paul shaking the viper into the fire on Malta without suffering harm, fulfilling Jesus' promise in Mark 16:18.",
    "reference": "Acts 28:1–6",
    "metadata": {
      "question_type": "Type the Book",
      "is_typed": true,
      "clues": [
        "The apostle was being transported under military guard to Rome.",
        "He healed the father of Publius, the chief man of the island.",
        "Final chapter of this New Testament history."
      ],
      "hint": "New Testament book of church history; ends with Paul in Rome.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Acts of the Apostles",
        "Act"
      ],
      "stage": 2,
      "stage_title": "Story and Book",
      "level_theme": "Miracles & Deliverances",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l7-c1",
    "game_slug": "find-the-bible-book",
    "level": 7,
    "challenge_index": 1,
    "question_text": "In which book do mysterious fingers of a human hand appear during a royal drunken banquet and write \"MENE, MENE, TEKEL, PARSIN\" upon the palace plaster?",
    "options": [
      "Daniel",
      "Ezekiel",
      "Jeremiah",
      "Esther"
    ],
    "correct_answer": "Daniel",
    "explanation": "Daniel 5 recounts Belshazzar's feast and Daniel interpreting the handwriting on the wall.",
    "reference": "Daniel 5:1–30",
    "metadata": {
      "question_type": "Which Book Contains This Event?",
      "is_typed": false,
      "clues": [
        "King Belshazzar had desecrated golden goblets looted from the temple in Jerusalem.",
        "A captive Jewish sage was summoned to interpret the inscription.",
        "That very night the Babylonian king was slain and the empire fell to Darius the Mede."
      ],
      "hint": "Major prophetic book containing the lion's den story.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Dan"
      ],
      "stage": 2,
      "stage_title": "Story and Book",
      "level_theme": "Catastrophes & Judgments",
      "difficulty": "easy",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l7-c2",
    "game_slug": "find-the-bible-book",
    "level": 7,
    "challenge_index": 2,
    "question_text": "Which book records the earth opening its mouth and swallowing Korah, Dathan, and Abiram along with their households, followed by fire consuming 250 men offering unauthorized incense?",
    "options": [
      "Numbers",
      "Leviticus",
      "Exodus",
      "Deuteronomy"
    ],
    "correct_answer": "Numbers",
    "explanation": "Numbers 16 narrates Korah's rebellion and the divine judgment where the ground split open beneath the rebels.",
    "reference": "Numbers 16:1–35, 41–50",
    "metadata": {
      "question_type": "Which Book Contains This Event?",
      "is_typed": false,
      "clues": [
        "They had challenged the unique priesthood of Moses and Aaron: \"You have gone too far! For all in the congregation are holy.\"",
        "Moses declared: \"If the Lord creates something new, and the ground opens its mouth... you shall know that these men have despised the Lord.\"",
        "Aaron ran into the midst of the plague with his censer to make atonement."
      ],
      "hint": "Fourth book of Moses; contains the censuses.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Num"
      ],
      "stage": 2,
      "stage_title": "Story and Book",
      "level_theme": "Catastrophes & Judgments",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l7-c3",
    "game_slug": "find-the-bible-book",
    "level": 7,
    "challenge_index": 3,
    "question_text": "TYPE THE BIBLE BOOK:\nIn which book is the weeping prophet commanded to buy an earthen flask, take elders of the people to the Valley of the Son of Hinnom (Topheth), and smash the flask as a sign of Jerusalem's coming devastation?",
    "options": [
      "Jeremiah",
      "Lamentations",
      "Ezekiel",
      "Isaiah"
    ],
    "correct_answer": "Jeremiah",
    "explanation": "Jeremiah 19 records the smashed earthen flask in the Valley of Hinnom illustrating the destruction of Jerusalem.",
    "reference": "Jeremiah 19:1–11; 25:11–12",
    "metadata": {
      "question_type": "Type the Book",
      "is_typed": true,
      "clues": [
        "Known as the \"Weeping Prophet\" who suffered in a muddy cistern.",
        "Prophesied the exact 70-year duration of the Babylonian exile.",
        "Scribe Baruch wrote his prophecies on a scroll burned by King Jehoiakim."
      ],
      "hint": "Major prophet whose book comes right before Lamentations.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Jer"
      ],
      "stage": 2,
      "stage_title": "Story and Book",
      "level_theme": "Catastrophes & Judgments",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l7-c4",
    "game_slug": "find-the-bible-book",
    "level": 7,
    "challenge_index": 4,
    "question_text": "Which five-chapter book of funeral dirges mourns the catastrophic destruction of Jerusalem and the burning of Solomon's temple by the Babylonians in 586 BC, featuring an acrostic structure where chapters 1, 2, 4, and 5 have 22 verses?",
    "options": [
      "Lamentations",
      "Jeremiah",
      "Ezekiel",
      "Habakkuk"
    ],
    "correct_answer": "Lamentations",
    "explanation": "The Book of Lamentations expresses profound national grief over the destruction of Zion and God's righteous judgment.",
    "reference": "Lamentations 1:1; 3:22–24",
    "metadata": {
      "question_type": "Which Book Contains This Event?",
      "is_typed": false,
      "clues": [
        "Opens: \"How lonely sits the city that was full of people! How like a widow has she become.\"",
        "Contains the central comfort: \"The steadfast love of the Lord never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness.\"",
        "Traditionally attributed to Jeremiah."
      ],
      "hint": "Begins with Lam-; a book of sorrowful dirges.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Lam"
      ],
      "stage": 2,
      "stage_title": "Story and Book",
      "level_theme": "Catastrophes & Judgments",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l7-c5",
    "game_slug": "find-the-bible-book",
    "level": 7,
    "challenge_index": 5,
    "question_text": "TYPE THE BIBLE BOOK:\nWhich book records the dramatic sudden deaths of a married couple named Ananias and Sapphira, who conspired to lie to the Holy Spirit regarding the proceeds of a sold piece of property?",
    "options": [
      "Acts",
      "Acts of the Apostles",
      "Romans",
      "1 Corinthians"
    ],
    "correct_answer": "Acts",
    "explanation": "Acts 5:1–11 describes the judgment of Ananias and Sapphira for lying to the Holy Spirit about their gift.",
    "reference": "Acts 5:1–11",
    "metadata": {
      "question_type": "Type the Book",
      "is_typed": true,
      "clues": [
        "Peter confronted them: \"You have not lied to man but to God.\"",
        "Both fell down dead within three hours of each other at Peter's feet.",
        "Great fear fell upon the entire early church as young men carried them out and buried them."
      ],
      "hint": "The fifth book of the New Testament.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Acts of the Apostles",
        "Act"
      ],
      "stage": 2,
      "stage_title": "Story and Book",
      "level_theme": "Catastrophes & Judgments",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l8-c1",
    "game_slug": "find-the-bible-book",
    "level": 8,
    "challenge_index": 1,
    "question_text": "In which book does a persecutor named Saul see a blinding light from heaven on the road to Damascus, hear Jesus ask \"Saul, Saul, why are you persecuting me?\", and regain his sight through Ananias of Damascus?",
    "options": [
      "Acts",
      "Galatians",
      "Romans",
      "2 Corinthians"
    ],
    "correct_answer": "Acts",
    "explanation": "Acts 9 narrates Saul's Damascus road conversion, commissioning, and baptism.",
    "reference": "Acts 9:1–19; 22:6–16; 26:12–18",
    "metadata": {
      "question_type": "Which Book Contains This Event?",
      "is_typed": false,
      "clues": [
        "The pivotal conversion that turned the church's chief adversary into the apostle to the Gentiles.",
        "Recounted three separate times in this same book (chapters 9, 22, and 26).",
        "Opens with Jesus' ascension and Pentecost."
      ],
      "hint": "Book of church history; fifth book of New Testament.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Acts of the Apostles",
        "Act"
      ],
      "stage": 2,
      "stage_title": "Story and Book",
      "level_theme": "Conversions & Callings",
      "difficulty": "easy",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l8-c2",
    "game_slug": "find-the-bible-book",
    "level": 8,
    "challenge_index": 2,
    "question_text": "In which prophetic book does the author see the Lord seated on a high throne, seraphim crying \"Holy, holy, holy!\", and an angel touch his lips with a burning coal from the altar?",
    "options": [
      "Isaiah",
      "Ezekiel",
      "Jeremiah",
      "Daniel"
    ],
    "correct_answer": "Isaiah",
    "explanation": "Isaiah 6 describes the prophet's vision of the thrice-holy God and his commissioning with the live coal.",
    "reference": "Isaiah 6:1–8",
    "metadata": {
      "question_type": "Which Book Contains This Event?",
      "is_typed": false,
      "clues": [
        "Dated: \"In the year that King Uzziah died.\"",
        "When the Lord asked, \"Whom shall I send?\", the prophet answered: \"Here I am! Send me.\"",
        "Contains 66 chapters, often called a miniature Bible."
      ],
      "hint": "Major prophet of 66 chapters; starts with I.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Isa"
      ],
      "stage": 2,
      "stage_title": "Story and Book",
      "level_theme": "Conversions & Callings",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l8-c3",
    "game_slug": "find-the-bible-book",
    "level": 8,
    "challenge_index": 3,
    "question_text": "TYPE THE BIBLE BOOK:\nIn which book is a priest by the Chebar canal in Babylon overwhelmed by a fiery chariot-throne with wheels full of eyes, falling on his face before the glory of the Lord and being commanded to eat a scroll with words of lamentation?",
    "options": [
      "Ezekiel",
      "Daniel",
      "Jeremiah",
      "Zechariah"
    ],
    "correct_answer": "Ezekiel",
    "explanation": "Ezekiel 1–3 describes the calling of the prophet Ezekiel among the exiles in Babylon by the Chebar canal.",
    "reference": "Ezekiel 1:1–28; 2:8–3:3",
    "metadata": {
      "question_type": "Type the Book",
      "is_typed": true,
      "clues": [
        "The prophet was appointed a watchman for the house of Israel.",
        "Contains the vision of the valley of dry bones (chapter 37).",
        "Wife died as a prophetic sign, and he lay on his side for 390 days."
      ],
      "hint": "Begins with Ezek-; priest-prophet of the exilic period.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Ezek"
      ],
      "stage": 2,
      "stage_title": "Story and Book",
      "level_theme": "Conversions & Callings",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l8-c4",
    "game_slug": "find-the-bible-book",
    "level": 8,
    "challenge_index": 4,
    "question_text": "Which book records the calling of young Samuel at the tabernacle in Shiloh, where the Lord called his name three times while he slept near the Ark, and Eli told him to answer: \"Speak, Lord, for your servant hears\"?",
    "options": [
      "1 Samuel",
      "2 Samuel",
      "Judges",
      "1 Kings"
    ],
    "correct_answer": "1 Samuel",
    "explanation": "1 Samuel 3 recounts God calling the boy Samuel in the sanctuary at Shiloh.",
    "reference": "1 Samuel 3:1–18",
    "metadata": {
      "question_type": "Which Book Contains This Event?",
      "is_typed": false,
      "clues": [
        "The word of the Lord was rare in those days, with no frequent vision.",
        "Samuel was given a message of judgment concerning the household of High Priest Eli.",
        "Opens with the vow of Hannah."
      ],
      "hint": "First book of Samuel; begins with 1.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "First Samuel",
        "1Sam"
      ],
      "stage": 2,
      "stage_title": "Story and Book",
      "level_theme": "Conversions & Callings",
      "difficulty": "easy",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l8-c5",
    "game_slug": "find-the-bible-book",
    "level": 8,
    "challenge_index": 5,
    "question_text": "TYPE THE BIBLE BOOK:\nIn which book does Jesus see a tax collector sitting at his tax collection booth in Capernaum and say to him, \"Follow me,\" whereupon he rose and left everything to follow Him, subsequently hosting a great banquet in his house for tax collectors and sinners?",
    "options": [
      "Matthew",
      "Luke",
      "Mark",
      "John"
    ],
    "correct_answer": "Matthew",
    "explanation": "Matthew 9:9 records Jesus calling Matthew at the receipt of custom. The author humbly records his own calling and banquet.",
    "reference": "Matthew 9:9–13; Luke 5:27–32",
    "metadata": {
      "question_type": "Type the Book",
      "is_typed": true,
      "clues": [
        "Luke refers to this man by his other name: Levi.",
        "In this Gospel, the author explicitly names himself with his apostolic name in chapter 9.",
        "First Gospel in the New Testament."
      ],
      "hint": "First Gospel of the New Testament; starts with M.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Matt"
      ],
      "stage": 2,
      "stage_title": "Story and Book",
      "level_theme": "Conversions & Callings",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l9-c1",
    "game_slug": "find-the-bible-book",
    "level": 9,
    "challenge_index": 1,
    "question_text": "In which book does Gideon reduce his army from thirty-two thousand men down to a modest force of three hundred using a water-lapping test, routing the Midianite army with trumpets, empty clay jars, and burning torches?",
    "options": [
      "Judges",
      "Joshua",
      "1 Samuel",
      "2 Kings"
    ],
    "correct_answer": "Judges",
    "explanation": "Judges 7 narrates Gideon's miraculous victory over the vast Midianite host with just 300 men.",
    "reference": "Judges 7:1–22",
    "metadata": {
      "question_type": "Which Book Contains This Event?",
      "is_typed": false,
      "clues": [
        "They shouted the battle cry: \"A sword for the Lord and for Gideon!\"",
        "The Midianites turned their swords against one another in panic.",
        "Gideon had previously tested God with a fleece of wool."
      ],
      "hint": "Book describing the era of tribal judges before Saul.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Judg"
      ],
      "stage": 2,
      "stage_title": "Story and Book",
      "level_theme": "Unlikely Military Triumphs",
      "difficulty": "easy",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l9-c2",
    "game_slug": "find-the-bible-book",
    "level": 9,
    "challenge_index": 2,
    "question_text": "Which book records King Jehoshaphat appointing temple singers to march in holy attire at the head of the army singing: \"Give thanks to the Lord, for his steadfast love endures forever\", where the enemy armies of Moab and Ammon destroyed one another before Israel arrived?",
    "options": [
      "2 Chronicles",
      "1 Kings",
      "2 Kings",
      "1 Chronicles"
    ],
    "correct_answer": "2 Chronicles",
    "explanation": "2 Chronicles 20 describes Jehoshaphat's choir leading the army to victory in the wilderness of Tekoa.",
    "reference": "2 Chronicles 20:1–30",
    "metadata": {
      "question_type": "Which Book Contains This Event?",
      "is_typed": false,
      "clues": [
        "The prophet Jahaziel prophesied: \"Do not be afraid... for the battle is not yours but God's.\"",
        "The place was called the Valley of Beracah (Blessing) because they blessed the Lord there.",
        "Focuses heavily on the Davidic line, temple worship, and levitical choirs."
      ],
      "hint": "Second book of Chronicles; highlights temple singers.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Second Chronicles",
        "2Chr"
      ],
      "stage": 2,
      "stage_title": "Story and Book",
      "level_theme": "Unlikely Military Triumphs",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l9-c3",
    "game_slug": "find-the-bible-book",
    "level": 9,
    "challenge_index": 3,
    "question_text": "TYPE THE BIBLE BOOK:\nIn which book does Jael, the wife of Heber the Kenite, offer a fugitive Canaanite general named Sisera hospitality and curdled milk, and drive a wooden tent peg through his temple into the ground while he slept?",
    "options": [
      "Judges",
      "Joshua",
      "1 Samuel",
      "Ruth"
    ],
    "correct_answer": "Judges",
    "explanation": "Judges 4–5 describes the defeat of Sisera by Barak and Deborah, culminating in Jael eliminating Sisera in her tent.",
    "reference": "Judges 4:17–22; 5:24–27",
    "metadata": {
      "question_type": "Type the Book",
      "is_typed": true,
      "clues": [
        "Deborah the prophetess had foretold: \"The Lord will sell Sisera into the hand of a woman.\"",
        "Barak chased the nine hundred chariots of iron to Harosheth-hagoyim.",
        "Celebrated in the ancient victory song of chapter 5."
      ],
      "hint": "Book containing Gideon, Samson, and Deborah; starts with J.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Judg"
      ],
      "stage": 2,
      "stage_title": "Story and Book",
      "level_theme": "Unlikely Military Triumphs",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l9-c4",
    "game_slug": "find-the-bible-book",
    "level": 9,
    "challenge_index": 4,
    "question_text": "In which book does an angel of the Lord enter the camp of King Sennacherib of Assyria by night and strike down 185,000 soldiers after King Hezekiah spread Sennacherib's mocking letter before God in the temple?",
    "options": [
      "2 Kings",
      "1 Kings",
      "1 Chronicles",
      "Joshua"
    ],
    "correct_answer": "2 Kings",
    "explanation": "2 Kings 19 recounts the night the angel of the Lord destroyed 185,000 Assyrian invaders besieging Jerusalem.",
    "reference": "2 Kings 19:14–37; Isaiah 37:14–38",
    "metadata": {
      "question_type": "Which Book Contains This Event?",
      "is_typed": false,
      "clues": [
        "Isaiah the prophet assured Hezekiah that Assyria would not shoot an arrow into Jerusalem.",
        "Sennacherib withdrew to Nineveh where he was assassinated by his sons while worshiping his god Nisroch.",
        "Found in both Isaiah and this historical narrative in chapter 19."
      ],
      "hint": "Second book of Kings; covers the divided monarchy to the exile.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Second Kings",
        "2Kgs",
        "Isaiah"
      ],
      "stage": 2,
      "stage_title": "Story and Book",
      "level_theme": "Unlikely Military Triumphs",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l9-c5",
    "game_slug": "find-the-bible-book",
    "level": 9,
    "challenge_index": 5,
    "question_text": "TYPE THE BIBLE BOOK:\nWhich book records Jonathan and his young armor-bearer climbing on their hands and feet up a steep rocky cliff between the passes of Bozez and Seneh to attack a Philistine outpost, declaring: \"Nothing can hinder the Lord from saving by many or by few\"?",
    "options": [
      "1 Samuel",
      "2 Samuel",
      "Judges",
      "1 Kings"
    ],
    "correct_answer": "1 Samuel",
    "explanation": "1 Samuel 14 describes Jonathan's heroic faith-filled raid on the Philistine garrison at Michmash.",
    "reference": "1 Samuel 14:1–23",
    "metadata": {
      "question_type": "Type the Book",
      "is_typed": true,
      "clues": [
        "They struck down about twenty Philistine men within half an acre.",
        "God sent an earthquake that threw the entire Philistine camp into panic.",
        "King Saul had foolishly bound the army with a curse not to eat food until evening."
      ],
      "hint": "First Samuel; chapter 14.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "First Samuel",
        "1Sam"
      ],
      "stage": 2,
      "stage_title": "Story and Book",
      "level_theme": "Unlikely Military Triumphs",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l10-c1",
    "game_slug": "find-the-bible-book",
    "level": 10,
    "challenge_index": 1,
    "question_text": "THE BOOK DETECTIVE:\nI contain an account of a Syrian military commander who suffered from leprosy. A captured Hebrew slave girl told his wife of a prophet in Samaria. When he arrived with horses and chariots, the prophet did not even come out to greet him, but sent a messenger telling him to wash seven times in the Jordan River. In which book is this recorded?",
    "options": [
      "2 Kings",
      "1 Kings",
      "2 Chronicles",
      "Leviticus"
    ],
    "correct_answer": "2 Kings",
    "explanation": "2 Kings 5 describes the healing of Naaman the Syrian through Elisha's command to wash seven times in the Jordan.",
    "reference": "2 Kings 5:1–27",
    "metadata": {
      "question_type": "The Book Detective",
      "is_typed": false,
      "clues": [
        "Naaman was initially enraged, preferring the rivers of Damascus (Abana and Pharpar).",
        "His servants persuaded him to obey; when he dipped seven times, his flesh was restored like that of a little child.",
        "Gehazi, the prophet's servant, chased down the commander for silver and was struck with leprosy."
      ],
      "hint": "Second Kings chapter 5.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Second Kings",
        "2Kgs"
      ],
      "stage": 2,
      "stage_title": "Story and Book",
      "level_theme": "Story Master Boss",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l10-c2",
    "game_slug": "find-the-bible-book",
    "level": 10,
    "challenge_index": 2,
    "question_text": "TWO BOOKS, ONE STORY:\nWhich TWO books contain the parallel historical accounts of King David's sinful census of Israel, the resulting three days of pestilence, and David's purchase of the threshing floor of Araunah (Ornan) the Jebusite where he built an altar?",
    "options": [
      "2 Samuel and 1 Chronicles",
      "1 Kings and 2 Kings",
      "Joshua and Judges",
      "Ezra and Nehemiah"
    ],
    "correct_answer": "2 Samuel and 1 Chronicles",
    "explanation": "David's numbering of Israel and purchase of the threshing floor are recorded in 2 Samuel 24 and 1 Chronicles 21.",
    "reference": "2 Samuel 24:1–25; 1 Chronicles 21:1–30",
    "metadata": {
      "question_type": "Two Books, One Story",
      "is_typed": false,
      "clues": [
        "One book attributes the provocation to God's anger against Israel: \"he incited David against them.\"",
        "The other book records: \"Then Satan stood against Israel and incited David to number Israel.\"",
        "Both culminate at the exact site where Solomon's temple was built on Mount Moriah."
      ],
      "hint": "2 Samuel (ch 24) and 1 Chronicles (ch 21).",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "2 Samuel & 1 Chronicles",
        "2 Sam and 1 Chron"
      ],
      "stage": 2,
      "stage_title": "Story and Book",
      "level_theme": "Story Master Boss",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l10-c3",
    "game_slug": "find-the-bible-book",
    "level": 10,
    "challenge_index": 3,
    "question_text": "TYPE THE BIBLE BOOK:\nWhich book describes a midnight earthquake shaking a Roman colony's prison, opening all the doors, breaking all the prisoners' chains, and causing a suicidal jailer to ask: \"Sirs, what must I do to be saved?\"",
    "options": [
      "Acts",
      "Acts of the Apostles",
      "Philippians",
      "Romans"
    ],
    "correct_answer": "Acts",
    "explanation": "Acts 16 records the conversion of the Philippian jailer after the miraculous prison earthquake.",
    "reference": "Acts 16:25–34",
    "metadata": {
      "question_type": "Type the Book",
      "is_typed": true,
      "clues": [
        "Paul and Silas were praying and singing hymns in the inner stocks.",
        "The jailer washed their wounds and was baptized with his whole household that night.",
        "Occurred in the Macedonian city of Philippi."
      ],
      "hint": "The Book of Acts, chapter 16.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Acts of the Apostles",
        "Act"
      ],
      "stage": 2,
      "stage_title": "Story and Book",
      "level_theme": "Story Master Boss",
      "difficulty": "medium",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l10-c4",
    "game_slug": "find-the-bible-book",
    "level": 10,
    "challenge_index": 4,
    "question_text": "THE BOOK DETECTIVE:\nI contain an account of a young prophet sent from Judah to Bethel to cry out against King Jeroboam's golden calf altar. When Jeroboam stretched out his hand to seize him, the king's hand withered, and the altar was torn down. God commanded the prophet not to eat bread or drink water or return by the way he came. However, an old prophet in Bethel deceived him into eating at his house, and on his way home a lion killed him and stood beside his donkey without eating the carcass. In which book is this recorded?",
    "options": [
      "1 Kings",
      "2 Kings",
      "1 Samuel",
      "2 Chronicles"
    ],
    "correct_answer": "1 Kings",
    "explanation": "1 Kings 13 records the man of God from Judah confronting Jeroboam's altar at Bethel and his tragic demise through deception.",
    "reference": "1 Kings 13:1–32",
    "metadata": {
      "question_type": "The Book Detective",
      "is_typed": false,
      "clues": [
        "A dramatic warning against disobeying the clear command of God.",
        "The king's hand was restored when the man of God entreated the Lord.",
        "Recorded in chapter 13 of this book."
      ],
      "hint": "First Kings, chapter 13.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "First Kings",
        "1Kgs"
      ],
      "stage": 2,
      "stage_title": "Story and Book",
      "level_theme": "Story Master Boss",
      "difficulty": "master",
      "timerSeconds": 20,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l10-c5",
    "game_slug": "find-the-bible-book",
    "level": 10,
    "challenge_index": 5,
    "question_text": "TYPE THE BIBLE BOOK:\nIn which Gospel does a blind man healed by Jesus wash in the Pool of Siloam (\"which means Sent\"), face interrogation by the Pharisees, and when cast out of the synagogue, meet Jesus again and declare: \"Lord, I believe,\" worshiping Him?",
    "options": [
      "John",
      "Luke",
      "Mark",
      "Matthew"
    ],
    "correct_answer": "John",
    "explanation": "John 9 exclusively records the story of the man born blind who washed in the Pool of Siloam.",
    "reference": "John 9:1–38",
    "metadata": {
      "question_type": "Type the Book",
      "is_typed": true,
      "clues": [
        "Jesus spat on the ground, made mud with saliva, and anointed the man's eyes.",
        "The man responded to the council: \"One thing I do know, that though I was blind, now I see.\"",
        "Recorded exclusively in chapter 9 of this Gospel."
      ],
      "hint": "Fourth Gospel; four letters; starts with J.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Jn"
      ],
      "stage": 2,
      "stage_title": "Story and Book",
      "level_theme": "Story Master Boss",
      "difficulty": "hard",
      "timerSeconds": 20,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l11-c1",
    "game_slug": "find-the-bible-book",
    "level": 11,
    "challenge_index": 1,
    "question_text": "In which book does Huldah the prophetess live in Jerusalem in the Second Quarter, consulted by the high priest Hilkiah and royal officials when the Book of the Law was rediscovered in the temple?",
    "options": [
      "2 Kings",
      "1 Kings",
      "Nehemiah",
      "Ezra"
    ],
    "correct_answer": "2 Kings",
    "explanation": "2 Kings 22 records King Josiah's delegation consulting Huldah the prophetess after Hilkiah found the Law in the temple.",
    "reference": "2 Kings 22:14–20; 2 Chronicles 34:22–28",
    "metadata": {
      "question_type": "Identify the Book from an Unfamiliar Character",
      "is_typed": false,
      "clues": [
        "Her husband Shallum was keeper of the royal wardrobe.",
        "She verified the authenticity of the Deuteronomy scroll and prophesied covenant judgment on Judah.",
        "Promised young King Josiah peace because his heart was penitent."
      ],
      "hint": "Second Kings, during King Josiah's temple renovation.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Second Kings",
        "2Kgs",
        "2 Chronicles"
      ],
      "stage": 3,
      "stage_title": "Character and Book",
      "level_theme": "Obscure OT Figures",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l11-c2",
    "game_slug": "find-the-bible-book",
    "level": 11,
    "challenge_index": 2,
    "question_text": "Which book mentions Ebed-Melech, the Cushite court official in King Zedekiah's palace who used ropes and decayed rags under armpits to pull the prophet Jeremiah out of a muddy cistern?",
    "options": [
      "Jeremiah",
      "Ezekiel",
      "2 Kings",
      "Daniel"
    ],
    "correct_answer": "Jeremiah",
    "explanation": "Ebed-Melech the Ethiopian eunuch delivered Jeremiah from Malkijah's muddy dungeon in Jeremiah 38.",
    "reference": "Jeremiah 38:7–13; 39:15–18",
    "metadata": {
      "question_type": "Identify the Book from an Unfamiliar Character",
      "is_typed": false,
      "clues": [
        "He boldly confronted the king at the Gate of Benjamin.",
        "God sent a personal promise to spare Ebed-Melech's life when the Babylonians sacked Jerusalem because he trusted in the Lord.",
        "Named after the prophet he rescued."
      ],
      "hint": "The major prophetic book named after Jeremiah.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Jer"
      ],
      "stage": 3,
      "stage_title": "Character and Book",
      "level_theme": "Obscure OT Figures",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l11-c3",
    "game_slug": "find-the-bible-book",
    "level": 11,
    "challenge_index": 3,
    "question_text": "TYPE THE BIBLE BOOK:\nIn which book does Bezalel, son of Uri of the tribe of Judah, receive divine inspiration and craftsmanship from the Spirit of God to construct the wilderness Tabernacle and the Ark of the Covenant?",
    "options": [
      "Exodus",
      "Leviticus",
      "Numbers",
      "1 Kings"
    ],
    "correct_answer": "Exodus",
    "explanation": "Exodus 31 and 35 describe God calling Bezalel by name to build the Tabernacle and its sacred furniture.",
    "reference": "Exodus 31:1–6; 35:30–35",
    "metadata": {
      "question_type": "Type the Book",
      "is_typed": true,
      "clues": [
        "Appointed alongside Oholiab of the tribe of Dan.",
        "Filled with wisdom, understanding, and knowledge in gold, silver, bronze, and stone-cutting.",
        "Second book of Moses."
      ],
      "hint": "Second book of the Old Testament; starts with Ex-.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Exod"
      ],
      "stage": 3,
      "stage_title": "Character and Book",
      "level_theme": "Obscure OT Figures",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l11-c4",
    "game_slug": "find-the-bible-book",
    "level": 11,
    "challenge_index": 4,
    "question_text": "Which book records the five daughters of Zelophehad (Mahlah, Noah, Hoglah, Milcah, and Tirzah) successfully petitioning Moses for a legal right to inherit their deceased father's ancestral land?",
    "options": [
      "Numbers",
      "Joshua",
      "Deuteronomy",
      "Leviticus"
    ],
    "correct_answer": "Numbers",
    "explanation": "Numbers 27 introduces the daughters of Zelophehad and established Israel's inheritance laws.",
    "reference": "Numbers 27:1–11; 36:1–12",
    "metadata": {
      "question_type": "Identify the Book from an Unfamiliar Character",
      "is_typed": false,
      "clues": [
        "Their father had died in the wilderness without sons.",
        "Established the permanent statute of female inheritance in Israel.",
        "Covers the wilderness census and tribal allotments."
      ],
      "hint": "Fourth book of the Bible.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Num"
      ],
      "stage": 3,
      "stage_title": "Character and Book",
      "level_theme": "Obscure OT Figures",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l11-c5",
    "game_slug": "find-the-bible-book",
    "level": 11,
    "challenge_index": 5,
    "question_text": "TYPE THE BIBLE BOOK:\nIn which book does Rizpah, the concubine of Saul, spread sackcloth upon a rock at Gibeah and heroically guard the impaled bodies of her sons day and night from birds and wild beasts for months until David gives them honorable burial?",
    "options": [
      "2 Samuel",
      "1 Samuel",
      "1 Kings",
      "1 Chronicles"
    ],
    "correct_answer": "2 Samuel",
    "explanation": "2 Samuel 21 details Rizpah's devotion in protecting the bodies of her slain sons.",
    "reference": "2 Samuel 21:8–14",
    "metadata": {
      "question_type": "Type the Book",
      "is_typed": true,
      "clues": [
        "Daughter of Aiah; mother of Armoni and Mephibosheth.",
        "The Gibeonites demanded seven descendants of Saul to avenge Saul's zeal.",
        "David was moved by her devotion and collected the bones of Saul and Jonathan from Jabesh-gilead."
      ],
      "hint": "Second book of Samuel.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Second Samuel",
        "2Sam"
      ],
      "stage": 3,
      "stage_title": "Character and Book",
      "level_theme": "Obscure OT Figures",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l12-c1",
    "game_slug": "find-the-bible-book",
    "level": 12,
    "challenge_index": 1,
    "question_text": "In which epistle does Paul praise Onesiphorus, praying that the Lord grant mercy to his household because \"he often refreshed me and was not ashamed of my chains, but when he arrived in Rome he searched for me earnestly and found me\"?",
    "options": [
      "2 Timothy",
      "1 Timothy",
      "Titus",
      "Philippians"
    ],
    "correct_answer": "2 Timothy",
    "explanation": "2 Timothy 1:16–18 commemorates Onesiphorus who searched diligently for Paul in Rome.",
    "reference": "2 Timothy 1:16–18; 4:19",
    "metadata": {
      "question_type": "Identify the Book from an Unfamiliar Character",
      "is_typed": false,
      "clues": [
        "Paul's final, deeply personal pastoral letter written from a cold Roman dungeon.",
        "Paul notes that all who are in Asia turned away from him (Phygelus and Hermogenes).",
        "Urges Timothy to bring the cloak left at Troas and the parchments."
      ],
      "hint": "Paul's second letter to young pastor Timothy.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Second Timothy",
        "2Tim"
      ],
      "stage": 3,
      "stage_title": "Character and Book",
      "level_theme": "Obscure NT Figures",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l12-c2",
    "game_slug": "find-the-bible-book",
    "level": 12,
    "challenge_index": 2,
    "question_text": "Which book contains the personal greeting of Tertius: \"I Tertius, who wrote this letter, greet you in the Lord\"?",
    "options": [
      "Romans",
      "Galatians",
      "1 Corinthians",
      "Colossians"
    ],
    "correct_answer": "Romans",
    "explanation": "Romans 16:22 contains Tertius' greeting as the scribe who wrote down Paul's epistle to the Romans.",
    "reference": "Romans 16:22",
    "metadata": {
      "question_type": "Identify the Book from an Unfamiliar Character",
      "is_typed": false,
      "clues": [
        "Tertius was the professional amanuensis (scribe) who penned the letter as Paul dictated.",
        "Found in chapter 16 alongside greetings to Phoebe, Priscilla, Aquila, and Andronicus.",
        "Paul's premier theological treatise on justification."
      ],
      "hint": "Addressed to the Christians in Rome.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Rom"
      ],
      "stage": 3,
      "stage_title": "Character and Book",
      "level_theme": "Obscure NT Figures",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l12-c3",
    "game_slug": "find-the-bible-book",
    "level": 12,
    "challenge_index": 3,
    "question_text": "TYPE THE BIBLE BOOK:\nIn which book does Paul commend Phoebe, a deaconess / servant of the church at Cenchreae and patron of many, who carried Paul's letter across the sea?",
    "options": [
      "Romans",
      "1 Corinthians",
      "2 Corinthians",
      "Philippians"
    ],
    "correct_answer": "Romans",
    "explanation": "Romans 16:1–2 commends Phoebe of Cenchreae as a trusted servant who delivered the letter to Rome.",
    "reference": "Romans 16:1–2",
    "metadata": {
      "question_type": "Type the Book",
      "is_typed": true,
      "clues": [
        "Cenchreae was the eastern port of Corinth.",
        "Paul asks the believers to welcome her in the Lord in a way worthy of the saints.",
        "Found in the opening verses of chapter 16."
      ],
      "hint": "Paul's epistle to the Romans.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Rom"
      ],
      "stage": 3,
      "stage_title": "Character and Book",
      "level_theme": "Obscure NT Figures",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l12-c4",
    "game_slug": "find-the-bible-book",
    "level": 12,
    "challenge_index": 4,
    "question_text": "Which prison letter mentions Epaphras, praising him as a native of the city who originally evangelized them and who \"is always wrestling on your behalf in his prayers, that you may stand mature and fully assured in all the will of God\"?",
    "options": [
      "Colossians",
      "Ephesians",
      "Philippians",
      "Galatians"
    ],
    "correct_answer": "Colossians",
    "explanation": "Colossians 1:7 and 4:12 describe Epaphras, the faithful minister who planted and prayed for the Colossian church.",
    "reference": "Colossians 1:7; 4:12–13",
    "metadata": {
      "question_type": "Identify the Book from an Unfamiliar Character",
      "is_typed": false,
      "clues": [
        "Written to a city in the Lycus Valley of Phrygia alongside Hierapolis and Laodicea.",
        "Combats a syncretistic heresy that diminished the supreme preeminence of Christ.",
        "Paul calls Epaphras his \"beloved fellow servant\"."
      ],
      "hint": "Written to the church at Colossae.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Col"
      ],
      "stage": 3,
      "stage_title": "Character and Book",
      "level_theme": "Obscure NT Figures",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l12-c5",
    "game_slug": "find-the-bible-book",
    "level": 12,
    "challenge_index": 5,
    "question_text": "TYPE THE BIBLE BOOK:\nIn which book does Sosthenes appear as a co-sender with Paul in the opening greeting: \"Paul, called by the will of God to be an apostle of Christ Jesus, and our brother Sosthenes\"?",
    "options": [
      "1 Corinthians",
      "2 Corinthians",
      "Romans",
      "Galatians"
    ],
    "correct_answer": "1 Corinthians",
    "explanation": "1 Corinthians 1:1 names Sosthenes as co-sender alongside the apostle Paul.",
    "reference": "1 Corinthians 1:1; Acts 18:17",
    "metadata": {
      "question_type": "Type the Book",
      "is_typed": true,
      "clues": [
        "Sosthenes had previously been ruler of the synagogue in Corinth who was beaten before Gallio's tribunal in Acts 18:17.",
        "He had evidently become a Christian leader working with Paul.",
        "First letter to this divided Greek congregation."
      ],
      "hint": "Paul's first letter to the Corinthians; begins with 1.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "First Corinthians",
        "1Cor"
      ],
      "stage": 3,
      "stage_title": "Character and Book",
      "level_theme": "Obscure NT Figures",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l13-c1",
    "game_slug": "find-the-bible-book",
    "level": 13,
    "challenge_index": 1,
    "question_text": "Which book opens with the royal proclamation of King Cyrus of Persia throughout his kingdom: \"The Lord, the God of heaven, has given me all the kingdoms of the earth, and he has charged me to build him a house at Jerusalem, which is in Judah\"?",
    "options": [
      "Ezra",
      "Nehemiah",
      "Esther",
      "Daniel"
    ],
    "correct_answer": "Ezra",
    "explanation": "Ezra 1 opens with Cyrus' historic decree permitting the return of Jewish exiles to rebuild the temple in Jerusalem.",
    "reference": "Ezra 1:1–4; 2 Chronicles 36:22–23",
    "metadata": {
      "question_type": "Which Book Contains This Event?",
      "is_typed": false,
      "clues": [
        "Fulfills Jeremiah's 70-year prophecy.",
        "Records Zerubbabel leading the first wave of Jewish exiles back to rebuild the temple altar.",
        "Contains royal decrees from Cyrus, Darius, and Artaxerxes."
      ],
      "hint": "Named after the godly priest and scribe of the Law.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Ezr"
      ],
      "stage": 3,
      "stage_title": "Character and Book",
      "level_theme": "Royal Courts & Foreign Rulers",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l13-c2",
    "game_slug": "find-the-bible-book",
    "level": 13,
    "challenge_index": 2,
    "question_text": "In which book does King Ahasuerus (Xerxes) depose Queen Vashti during a lavish 180-day feast in the citadel of Susa, prompting a search throughout the Persian empire for a new queen?",
    "options": [
      "Esther",
      "Daniel",
      "Ezra",
      "Nehemiah"
    ],
    "correct_answer": "Esther",
    "explanation": "The Book of Esther describes the Persian court of Ahasuerus in Susa and Esther's courage in saving her people.",
    "reference": "Esther 1:1–2:17",
    "metadata": {
      "question_type": "Which Book Contains This Event?",
      "is_typed": false,
      "clues": [
        "The Jewish orphan Hadassah is chosen as queen.",
        "Haman the Agagite plots the extermination of all Jews in the empire.",
        "The name of God is never explicitly mentioned in the entire text."
      ],
      "hint": "Named after the Jewish queen of Persia.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Esth"
      ],
      "stage": 3,
      "stage_title": "Character and Book",
      "level_theme": "Royal Courts & Foreign Rulers",
      "difficulty": "easy",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l13-c3",
    "game_slug": "find-the-bible-book",
    "level": 13,
    "challenge_index": 3,
    "question_text": "TYPE THE BIBLE BOOK:\nWhich book mentions Candace, queen of the Ethiopians, whose court treasurer was reading the scroll of Isaiah in his chariot when Philip the Evangelist was directed by the Spirit to join his carriage?",
    "options": [
      "Acts",
      "Acts of the Apostles",
      "Luke",
      "Romans"
    ],
    "correct_answer": "Acts",
    "explanation": "Acts 8 introduces the Ethiopian eunuch, chief officer of Queen Candace, baptized by Philip.",
    "reference": "Acts 8:26–39",
    "metadata": {
      "question_type": "Type the Book",
      "is_typed": true,
      "clues": [
        "The official had traveled over a thousand miles to worship in Jerusalem.",
        "He was baptized in roadside water on the desert road to Gaza.",
        "Recorded in chapter 8."
      ],
      "hint": "Fifth book of the New Testament; church history.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Acts of the Apostles",
        "Act"
      ],
      "stage": 3,
      "stage_title": "Character and Book",
      "level_theme": "Royal Courts & Foreign Rulers",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l13-c4",
    "game_slug": "find-the-bible-book",
    "level": 13,
    "challenge_index": 4,
    "question_text": "In which book is Paul brought before Gallio, the Roman proconsul of Achaia, who dismisses Jewish religious accusations against Paul, refusing to be a judge of Jewish internal law?",
    "options": [
      "Acts",
      "1 Corinthians",
      "2 Corinthians",
      "Romans"
    ],
    "correct_answer": "Acts",
    "explanation": "Acts 18 records Paul appearing before Proconsul Gallio in Corinth.",
    "reference": "Acts 18:12–17",
    "metadata": {
      "question_type": "Which Book Contains This Event?",
      "is_typed": false,
      "clues": [
        "Gallio was the brother of famous Roman philosopher Seneca.",
        "Occurred in the commercial Greek metropolis of Corinth.",
        "Provides a secure historical benchmark (AD 51–52) for New Testament chronology."
      ],
      "hint": "Historical book describing Paul's missionary travels.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Acts of the Apostles",
        "Act"
      ],
      "stage": 3,
      "stage_title": "Character and Book",
      "level_theme": "Royal Courts & Foreign Rulers",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l13-c5",
    "game_slug": "find-the-bible-book",
    "level": 13,
    "challenge_index": 5,
    "question_text": "TYPE THE BIBLE BOOK:\nIn which book does King Nebuchadnezzar construct a 90-foot golden image on the plain of Dura and cast three faithful Hebrew captives (Shadrach, Meshach, and Abednego) into a superheated fiery furnace when they refuse to bow?",
    "options": [
      "Daniel",
      "Ezekiel",
      "Jeremiah",
      "Esther"
    ],
    "correct_answer": "Daniel",
    "explanation": "Daniel 3 describes the three Hebrew youths in Nebuchadnezzar's fiery furnace.",
    "reference": "Daniel 3:1–30",
    "metadata": {
      "question_type": "Type the Book",
      "is_typed": true,
      "clues": [
        "They declared: \"Our God whom we serve is able to deliver us... but if not, be it known to you, O king, that we will not serve your gods.\"",
        "The king saw four men unbound walking in the midst of the fire, the fourth resembling \"a son of the gods.\"",
        "Their hair was not singed, their cloaks were not harmed, and no smell of fire was upon them."
      ],
      "hint": "Old Testament prophetic book; six letters; begins with D.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Dan"
      ],
      "stage": 3,
      "stage_title": "Character and Book",
      "level_theme": "Royal Courts & Foreign Rulers",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l14-c1",
    "game_slug": "find-the-bible-book",
    "level": 14,
    "challenge_index": 1,
    "question_text": "In which book does the prophet Micaiah son of Imlah stand alone against four hundred state prophets, accurately foretelling King Ahab's death at Ramoth-gilead while Ahab orders him fed with rations of bread and water?",
    "options": [
      "1 Kings",
      "2 Kings",
      "1 Chronicles",
      "Amos"
    ],
    "correct_answer": "1 Kings",
    "explanation": "1 Kings 22 recounts Micaiah prophesying Ahab's defeat and death at Ramoth-gilead.",
    "reference": "1 Kings 22:7–38; 2 Chronicles 18:6–34",
    "metadata": {
      "question_type": "Identify the Book from an Unfamiliar Character",
      "is_typed": false,
      "clues": [
        "Ahab told Jehoshaphat: \"There is yet one man... but I hate him, for he never prophesies good concerning me, but evil.\"",
        "Micaiah saw Israel scattered like sheep having no shepherd.",
        "Ahab disguised himself, but a Syrian archer drew his bow at random and struck the king between the joints of his armor."
      ],
      "hint": "First Kings, in the closing chapter.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "First Kings",
        "1Kgs",
        "2 Chronicles"
      ],
      "stage": 3,
      "stage_title": "Character and Book",
      "level_theme": "Prophets & Priests",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l14-c2",
    "game_slug": "find-the-bible-book",
    "level": 14,
    "challenge_index": 2,
    "question_text": "Which book highlights the godly High Priest Jehoiada, who hid baby prince Joash in the temple for six years, organized a military coup against the usurping queen Athaliah, and restored pure covenant worship in Judah?",
    "options": [
      "2 Kings",
      "1 Kings",
      "1 Chronicles",
      "Ezra"
    ],
    "correct_answer": "2 Kings",
    "explanation": "2 Kings 11 describes Jehoiada the priest guarding young Joash and executing Athaliah.",
    "reference": "2 Kings 11:4–21; 2 Chronicles 23:1–24:16",
    "metadata": {
      "question_type": "Identify the Book from an Unfamiliar Character",
      "is_typed": false,
      "clues": [
        "Athaliah tore her clothes and cried: \"Treason! Treason!\" before being executed at the horse gate.",
        "Jehoiada died at the ripe age of 130 and was buried among the kings in the city of David.",
        "Narrates the temple repairs under Joash."
      ],
      "hint": "Second Kings, chapter 11.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Second Kings",
        "2Kgs",
        "2 Chronicles"
      ],
      "stage": 3,
      "stage_title": "Character and Book",
      "level_theme": "Prophets & Priests",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l14-c3",
    "game_slug": "find-the-bible-book",
    "level": 14,
    "challenge_index": 3,
    "question_text": "TYPE THE BIBLE BOOK:\nIn which book does Baruch the son of Neriah serve as the faithful scribe who wrote down from the prophet's dictation all the words of the Lord upon a scroll, which was subsequently read in the temple and burned by King Jehoiakim with a penknife?",
    "options": [
      "Jeremiah",
      "Ezekiel",
      "Isaiah",
      "Lamentations"
    ],
    "correct_answer": "Jeremiah",
    "explanation": "Jeremiah 36 recounts Baruch writing and reading the prophetic scroll.",
    "reference": "Jeremiah 36:4–32; 45:1–5",
    "metadata": {
      "question_type": "Type the Book",
      "is_typed": true,
      "clues": [
        "God commanded the prophet and Baruch to take another scroll and rewrite all the original words with many additions.",
        "Chapter 45 contains a personal message from God to Baruch: \"Do you seek great things for yourself? Seek them not... but I will give you your life as a prize of war.\"",
        "Major prophetic book of 52 chapters."
      ],
      "hint": "Book bearing the name of the weeping prophet Jeremiah.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Jer"
      ],
      "stage": 3,
      "stage_title": "Character and Book",
      "level_theme": "Prophets & Priests",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l14-c4",
    "game_slug": "find-the-bible-book",
    "level": 14,
    "challenge_index": 4,
    "question_text": "Which New Testament book features the Judean prophet Agabus, who first foretold a severe worldwide famine during the reign of Claudius, and later bound his own hands and feet with Paul's belt at Caesarea, prophesying Paul's arrest in Jerusalem?",
    "options": [
      "Acts",
      "Romans",
      "Galatians",
      "Hebrews"
    ],
    "correct_answer": "Acts",
    "explanation": "Acts 11 and 21 mention the prophet Agabus and his two vivid prophecies.",
    "reference": "Acts 11:27–30; 21:10–11",
    "metadata": {
      "question_type": "Identify the Book from an Unfamiliar Character",
      "is_typed": false,
      "clues": [
        "Spoke by the Holy Spirit to the church in Syrian Antioch and in Caesarea.",
        "The disciples sent relief to the brothers living in Judea in response to his first prophecy.",
        "Historical book detailing the early church."
      ],
      "hint": "Fifth book of the New Testament.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Acts of the Apostles",
        "Act"
      ],
      "stage": 3,
      "stage_title": "Character and Book",
      "level_theme": "Prophets & Priests",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l14-c5",
    "game_slug": "find-the-bible-book",
    "level": 14,
    "challenge_index": 5,
    "question_text": "TYPE THE BIBLE BOOK:\nIn which New Testament epistle does the author devote chapters 5, 6, and 7 to proving that Jesus Christ is our eternal High Priest after the superior order of Melchizedek, rather than the temporary Levitical priesthood of Aaron?",
    "options": [
      "Hebrews",
      "Romans",
      "Galatians",
      "Ephesians"
    ],
    "correct_answer": "Hebrews",
    "explanation": "Hebrews 7 expounds the superior, eternal priesthood of Jesus after the order of Melchizedek.",
    "reference": "Hebrews 1:1–2; 5:6; 7:1–28",
    "metadata": {
      "question_type": "Type the Book",
      "is_typed": true,
      "clues": [
        "Points out that Melchizedek was king of Salem and priest of God Most High, receiving tithes from Abraham.",
        "Notes that Jesus has an indestructible life and ministers in the true heavenly sanctuary.",
        "Opens: \"Long ago, at many times and in many ways, God spoke to our fathers by the prophets, but in these last days he has spoken to us by his Son.\""
      ],
      "hint": "Epistle written to Jewish Christians; seven letters; begins with Heb-.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Heb"
      ],
      "stage": 3,
      "stage_title": "Character and Book",
      "level_theme": "Prophets & Priests",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l15-c1",
    "game_slug": "find-the-bible-book",
    "level": 15,
    "challenge_index": 1,
    "question_text": "THE BOOK DETECTIVE:\nI mention two female workers named Tryphaena and Tryphosa, as well as a beloved sister named Persis, describing them as faithful women who \"worked hard in the Lord.\" I also mention Gaius, who was host to the entire church, and Erastus, the city treasurer. Which book am I?",
    "options": [
      "Romans",
      "1 Corinthians",
      "Philippians",
      "Colossians"
    ],
    "correct_answer": "Romans",
    "explanation": "Romans 16:12–23 contains Paul's extensive personal greetings to coworkers in Rome.",
    "reference": "Romans 16:12, 23",
    "metadata": {
      "question_type": "The Book Detective",
      "is_typed": false,
      "clues": [
        "All these individuals are greeted in the famous closing chapter.",
        "Written by Paul from Corinth.",
        "Contains 16 chapters."
      ],
      "hint": "Paul's monumental letter to the church at Rome.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Rom"
      ],
      "stage": 3,
      "stage_title": "Character and Book",
      "level_theme": "Character Master Boss",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l15-c2",
    "game_slug": "find-the-bible-book",
    "level": 15,
    "challenge_index": 2,
    "question_text": "THE BOOK DETECTIVE:\nI record the story of an intelligent and beautiful woman named Abigail, who quickly loaded two hundred loaves of bread, two skins of wine, five sheep, and cakes of raisins onto donkeys to intercept David's armed men after her foolish husband Nabal insulted them. In which book is this recorded?",
    "options": [
      "1 Samuel",
      "2 Samuel",
      "1 Kings",
      "Judges"
    ],
    "correct_answer": "1 Samuel",
    "explanation": "1 Samuel 25 details Abigail's wise diplomacy averting bloodshed from David and his men.",
    "reference": "1 Samuel 25:1–42",
    "metadata": {
      "question_type": "The Book Detective",
      "is_typed": false,
      "clues": [
        "She bowed with her face to the ground, pleading: \"Let not my lord regard this worthless fellow, Nabal, for as his name is, so is he; Nabal is his name, and folly is with him.\"",
        "Ten days later, the Lord struck Nabal and he died, whereupon David took Abigail as his wife.",
        "Found in chapter 25 of this book."
      ],
      "hint": "First Samuel chapter 25.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "First Samuel",
        "1Sam"
      ],
      "stage": 3,
      "stage_title": "Character and Book",
      "level_theme": "Character Master Boss",
      "difficulty": "medium",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l15-c3",
    "game_slug": "find-the-bible-book",
    "level": 15,
    "challenge_index": 3,
    "question_text": "TYPE THE BIBLE BOOK:\nWhich book mentions a runaway slave named Onesimus, whom Paul calls \"my child, whom I fathered in my imprisonment,\" urging his master to welcome him back no longer as a bondservant, but as a beloved brother?",
    "options": [
      "Philemon",
      "Colossians",
      "Titus",
      "Philippians"
    ],
    "correct_answer": "Philemon",
    "explanation": "The Epistle to Philemon is Paul's intercession for the runaway slave Onesimus.",
    "reference": "Philemon 1:10–18",
    "metadata": {
      "question_type": "Type the Book",
      "is_typed": true,
      "clues": [
        "A single-chapter personal letter of 25 verses.",
        "Paul promises: \"If he has wronged you at all, or owes you anything, charge that to my account.\"",
        "Named after the Christian slave-owner residing in Colossae."
      ],
      "hint": "Single-chapter letter named after Philemon.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Phlm",
        "Phm"
      ],
      "stage": 3,
      "stage_title": "Character and Book",
      "level_theme": "Character Master Boss",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l15-c4",
    "game_slug": "find-the-bible-book",
    "level": 15,
    "challenge_index": 4,
    "question_text": "THE BOOK DETECTIVE:\nI contain the story of a royal cupbearer to King Artaxerxes in the Persian winter capital of Susa. When informed of the broken walls and burned gates of Jerusalem, he wept, fasted, prayed, and obtained royal letters and timber to rebuild the city walls in fifty-two days despite violent opposition from Sanballat, Tobiah, and Geshem. Which book am I?",
    "options": [
      "Nehemiah",
      "Ezra",
      "Esther",
      "Haggai"
    ],
    "correct_answer": "Nehemiah",
    "explanation": "The Book of Nehemiah records Nehemiah's memoirs as governor rebuilding Jerusalem's fortifications in 52 days.",
    "reference": "Nehemiah 1:1–11; 4:16–18; 6:15; 8:1–8",
    "metadata": {
      "question_type": "The Book Detective",
      "is_typed": false,
      "clues": [
        "Written in the first person: \"In the month of Nisan, in the twentieth year of King Artaxerxes...\"",
        "The workers built the wall with a trowel in one hand and a weapon in the other.",
        "Carried out a public reading of the Law alongside Ezra the scribe."
      ],
      "hint": "Named after the cupbearer governor who rebuilt the walls.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Neh"
      ],
      "stage": 3,
      "stage_title": "Character and Book",
      "level_theme": "Character Master Boss",
      "difficulty": "medium",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l15-c5",
    "game_slug": "find-the-bible-book",
    "level": 15,
    "challenge_index": 5,
    "question_text": "TYPE THE BIBLE BOOK:\nIn which book does young Timothy's sincere Christian heritage receive tribute through the faith of two godly family matriarchs: his grandmother Lois and his mother Eunice?",
    "options": [
      "2 Timothy",
      "1 Timothy",
      "Titus",
      "Philippians"
    ],
    "correct_answer": "2 Timothy",
    "explanation": "2 Timothy 1:5 commends the unfeigned faith of Lois and Eunice who nurtured Timothy in the Scriptures.",
    "reference": "2 Timothy 1:5; 3:14–16",
    "metadata": {
      "question_type": "Type the Book",
      "is_typed": true,
      "clues": [
        "Paul reminds Timothy that from childhood he has been acquainted with the sacred writings.",
        "Contains the declaration: \"All Scripture is breathed out by God and profitable for teaching, for reproof, for correction, and for training in righteousness.\"",
        "Paul's final epistle."
      ],
      "hint": "Paul's second letter to Timothy.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Second Timothy",
        "2Tim"
      ],
      "stage": 3,
      "stage_title": "Character and Book",
      "level_theme": "Character Master Boss",
      "difficulty": "master",
      "timerSeconds": 20,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l16-c1",
    "game_slug": "find-the-bible-book",
    "level": 16,
    "challenge_index": 1,
    "question_text": "MISSING BOOK SEQUENCE:\nIdentify the missing book in this canonical sequence of the Pentateuch:\nGenesis → Exodus → Leviticus → [ ? ] → Deuteronomy",
    "options": [
      "Numbers",
      "Joshua",
      "Judges",
      "Deuteronomy"
    ],
    "correct_answer": "Numbers",
    "explanation": "Numbers is the fourth book of the Pentateuch, situated between Leviticus and Deuteronomy.",
    "reference": "Numbers 1:1–3; 26:1–4",
    "metadata": {
      "question_type": "The Missing Book",
      "is_typed": false,
      "clues": [
        "Contains two national censuses of the tribes of Israel.",
        "Documents forty years of wilderness wandering from Sinai to the plains of Moab.",
        "Hebrew title is Bemidbar (\"In the wilderness\")."
      ],
      "hint": "Fourth book of the Bible.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Num"
      ],
      "stage": 4,
      "stage_title": "Missing Book Challenge",
      "level_theme": "Pentateuch & History Order",
      "difficulty": "easy",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l16-c2",
    "game_slug": "find-the-bible-book",
    "level": 16,
    "challenge_index": 2,
    "question_text": "Which Old Testament historical book comes IMMEDIATELY AFTER 2 Chronicles in the standard Protestant canon?",
    "options": [
      "Ezra",
      "Nehemiah",
      "Esther",
      "Job"
    ],
    "correct_answer": "Ezra",
    "explanation": "Ezra immediately follows 2 Chronicles, continuing the history of the restoration of Jerusalem.",
    "reference": "2 Chronicles 36:22–23; Ezra 1:1–3",
    "metadata": {
      "question_type": "The Book Before and After",
      "is_typed": false,
      "clues": [
        "Opens with the exact same decree of King Cyrus of Persia that closes 2 Chronicles.",
        "Documents the return of exiles under Zerubbabel and the rebuilding of the temple altar.",
        "Precedes Nehemiah."
      ],
      "hint": "Four-letter book named after the priest-scribe.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Ezr"
      ],
      "stage": 4,
      "stage_title": "Missing Book Challenge",
      "level_theme": "Pentateuch & History Order",
      "difficulty": "easy",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l16-c3",
    "game_slug": "find-the-bible-book",
    "level": 16,
    "challenge_index": 3,
    "question_text": "TYPE THE BIBLE BOOK:\nWhich book comes IMMEDIATELY BEFORE the Book of Ruth in the canonical order of Old Testament history?",
    "options": [
      "Judges",
      "Joshua",
      "1 Samuel",
      "Deuteronomy"
    ],
    "correct_answer": "Judges",
    "explanation": "Judges immediately precedes Ruth in the historical section of the Old Testament canon.",
    "reference": "Ruth 1:1; Judges 21:25",
    "metadata": {
      "question_type": "Type the Book",
      "is_typed": true,
      "clues": [
        "Ruth opens with the words: \"In the days when the... ruled, there was a famine in the land.\"",
        "Contains the stories of Gideon, Samson, and Jephthah.",
        "Precedes the story of Boaz and Ruth in Bethlehem."
      ],
      "hint": "Plural title referring to Israel's charismatic deliverers.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Judg"
      ],
      "stage": 4,
      "stage_title": "Missing Book Challenge",
      "level_theme": "Pentateuch & History Order",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l16-c4",
    "game_slug": "find-the-bible-book",
    "level": 16,
    "challenge_index": 4,
    "question_text": "MISSING BOOK SEQUENCE:\nIdentify the missing book in this post-exilic historical sequence:\nEzra → Nehemiah → [ ? ] → Job",
    "options": [
      "Esther",
      "Ruth",
      "Daniel",
      "Malachi"
    ],
    "correct_answer": "Esther",
    "explanation": "Esther is the 17th book of the Old Testament, concluding the historical books right before Job.",
    "reference": "Esther 1:1–2; 9:26–28",
    "metadata": {
      "question_type": "The Missing Book",
      "is_typed": false,
      "clues": [
        "Set in the Persian citadel of Susa during the reign of Ahasuerus (Xerxes).",
        "The final historical narrative book of the Old Testament before the Poetic books begin.",
        "Origin of the Jewish festival of Purim."
      ],
      "hint": "Named after the Jewish orphan who became Queen of Persia.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Esth"
      ],
      "stage": 4,
      "stage_title": "Missing Book Challenge",
      "level_theme": "Pentateuch & History Order",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l16-c5",
    "game_slug": "find-the-bible-book",
    "level": 16,
    "challenge_index": 5,
    "question_text": "TYPE THE BIBLE BOOK:\nWhich book stands between 2 Kings and 2 Chronicles in the canonical arrangement of the Old Testament?",
    "options": [
      "1 Chronicles",
      "2 Chronicles",
      "Ezra",
      "Nehemiah"
    ],
    "correct_answer": "1 Chronicles",
    "explanation": "1 Chronicles stands between 2 Kings and 2 Chronicles in canonical order.",
    "reference": "1 Chronicles 1:1; 10:14; 29:26–30",
    "metadata": {
      "question_type": "Type the Book",
      "is_typed": true,
      "clues": [
        "Opens with extensive nine-chapter genealogies tracing Israel's lineage from Adam to the post-exilic community.",
        "Devotes its entire narrative focus to the reign of King David and preparation for the temple.",
        "First volume of the two-part Chronicles history."
      ],
      "hint": "First Chronicles; begins with \"1\".",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "First Chronicles",
        "1Chr"
      ],
      "stage": 4,
      "stage_title": "Missing Book Challenge",
      "level_theme": "Pentateuch & History Order",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l17-c1",
    "game_slug": "find-the-bible-book",
    "level": 17,
    "challenge_index": 1,
    "question_text": "Which single-chapter Minor Prophet comes IMMEDIATELY BEFORE Jonah in the canonical arrangement of the Twelve Prophets?",
    "options": [
      "Obadiah",
      "Amos",
      "Joel",
      "Micah"
    ],
    "correct_answer": "Obadiah",
    "explanation": "Obadiah is the fourth of the Minor Prophets, situated directly between Amos and Jonah.",
    "reference": "Obadiah 1:1–3; Jonah 1:1",
    "metadata": {
      "question_type": "The Book Before and After",
      "is_typed": false,
      "clues": [
        "Shortest book in the Old Testament (only 21 verses).",
        "Pronounces divine judgment upon the nation of Edom for gloating over Jerusalem's destruction: \"The pride of your heart has deceived you, you who dwell in the clefts of the rock.\"",
        "Precedes Jonah's journey to Nineveh."
      ],
      "hint": "Single-chapter prophecy against Edom; starts with O.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Obad"
      ],
      "stage": 4,
      "stage_title": "Missing Book Challenge",
      "level_theme": "Major & Minor Prophets Order",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l17-c2",
    "game_slug": "find-the-bible-book",
    "level": 17,
    "challenge_index": 2,
    "question_text": "Which two-chapter post-exilic prophetic book comes IMMEDIATELY AFTER Zephaniah, challenging the returnees: \"Is it a time for you yourselves to dwell in your paneled houses, while this house lies in ruins?\"",
    "options": [
      "Haggai",
      "Zechariah",
      "Malachi",
      "Habakkuk"
    ],
    "correct_answer": "Haggai",
    "explanation": "Haggai is the tenth of the Minor Prophets, positioned between Zephaniah and Zechariah.",
    "reference": "Haggai 1:1–4; Zechariah 1:1",
    "metadata": {
      "question_type": "The Book Before and After",
      "is_typed": false,
      "clues": [
        "Rebukes the community for delaying the rebuilding of the temple in Jerusalem.",
        "Dated precisely to the second year of King Darius (520 BC).",
        "Directly precedes Zechariah."
      ],
      "hint": "Two-chapter book; begins with H.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Hag"
      ],
      "stage": 4,
      "stage_title": "Missing Book Challenge",
      "level_theme": "Major & Minor Prophets Order",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l17-c3",
    "game_slug": "find-the-bible-book",
    "level": 17,
    "challenge_index": 3,
    "question_text": "TYPE THE BIBLE BOOK:\nWhich book of the Minor Prophets stands IMMEDIATELY BETWEEN Joel and Obadiah in the Old Testament?",
    "options": [
      "Amos",
      "Hosea",
      "Jonah",
      "Micah"
    ],
    "correct_answer": "Amos",
    "explanation": "Amos is the third of the Minor Prophets, standing between Joel and Obadiah.",
    "reference": "Amos 1:1; 5:24",
    "metadata": {
      "question_type": "Type the Book",
      "is_typed": true,
      "clues": [
        "Written by a herdsman and dresser of sycamore figs from Tekoa in Judah.",
        "Contains eight oracles of judgment against foreign nations and Israel: \"For three transgressions... and for four, I will not turn away punishment.\"",
        "Famous for the demand: \"Let justice roll down like waters, and righteousness like an ever-flowing stream\" (Amos 5:24)."
      ],
      "hint": "Four-letter book named after the prophet from Tekoa.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Am"
      ],
      "stage": 4,
      "stage_title": "Missing Book Challenge",
      "level_theme": "Major & Minor Prophets Order",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l17-c4",
    "game_slug": "find-the-bible-book",
    "level": 17,
    "challenge_index": 4,
    "question_text": "MISSING BOOK SEQUENCE:\nIdentify the missing book in this sequence of the Major Prophets:\nIsaiah → Jeremiah → [ ? ] → Ezekiel → Daniel",
    "options": [
      "Lamentations",
      "Hosea",
      "Song of Solomon",
      "Habakkuk"
    ],
    "correct_answer": "Lamentations",
    "explanation": "Lamentations sits between Jeremiah and Ezekiel in the Major Prophets section of the Christian Old Testament.",
    "reference": "Lamentations 1:1; 3:23",
    "metadata": {
      "question_type": "The Missing Book",
      "is_typed": false,
      "clues": [
        "A five-chapter poetic book of funeral dirges weeping over the fall of Jerusalem.",
        "Features the great hymn passage: \"Great is your faithfulness\" (ch 3).",
        "Placed between Jeremiah and Ezekiel."
      ],
      "hint": "Book of sorrowful laments attributed to Jeremiah.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Lam"
      ],
      "stage": 4,
      "stage_title": "Missing Book Challenge",
      "level_theme": "Major & Minor Prophets Order",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l17-c5",
    "game_slug": "find-the-bible-book",
    "level": 17,
    "challenge_index": 5,
    "question_text": "TYPE THE BIBLE BOOK:\nWhich book stands between Micah and Habakkuk in the Minor Prophets, delivering a ferocious three-chapter oracle of doom against the bloody city of Nineveh?",
    "options": [
      "Nahum",
      "Habakkuk",
      "Zephaniah",
      "Obadiah"
    ],
    "correct_answer": "Nahum",
    "explanation": "Nahum is the seventh of the Minor Prophets, located directly between Micah and Habakkuk.",
    "reference": "Nahum 1:1–3; 3:1–7",
    "metadata": {
      "question_type": "Type the Book",
      "is_typed": true,
      "clues": [
        "Opens: \"The Lord is a jealous and avenging God... He makes an end of Nineveh.\"",
        "Describes chariot wheels flashing like torches and charging like lightning through the streets.",
        "Contrasts with Jonah, who saw Nineveh repent a century earlier."
      ],
      "hint": "Five-letter book name beginning with N.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Nah"
      ],
      "stage": 4,
      "stage_title": "Missing Book Challenge",
      "level_theme": "Major & Minor Prophets Order",
      "difficulty": "master",
      "timerSeconds": 20,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l18-c1",
    "game_slug": "find-the-bible-book",
    "level": 18,
    "challenge_index": 1,
    "question_text": "Which epistle comes IMMEDIATELY AFTER 2 Thessalonians in the canonical arrangement of Paul's letters?",
    "options": [
      "1 Timothy",
      "2 Timothy",
      "Titus",
      "Galatians"
    ],
    "correct_answer": "1 Timothy",
    "explanation": "1 Timothy immediately follows 2 Thessalonians, inaugurating the Pastoral Epistles.",
    "reference": "2 Thessalonians 3:18; 1 Timothy 1:1–2",
    "metadata": {
      "question_type": "The Book Before and After",
      "is_typed": false,
      "clues": [
        "Marks the transition from letters written to churches to Pastoral Epistles written to individual coworkers.",
        "Contains qualifications for overseers (elders) and deacons in chapter 3.",
        "First letter to Paul's young delegate in Ephesus."
      ],
      "hint": "First letter to Timothy; begins with 1.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "First Timothy",
        "1Tim"
      ],
      "stage": 4,
      "stage_title": "Missing Book Challenge",
      "level_theme": "Pauline Epistles Order",
      "difficulty": "easy",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l18-c2",
    "game_slug": "find-the-bible-book",
    "level": 18,
    "challenge_index": 2,
    "question_text": "Which short three-chapter Pastoral Epistle comes IMMEDIATELY BEFORE Philemon, addressing a coworker left behind on the island of Crete to appoint elders in every town?",
    "options": [
      "Titus",
      "2 Timothy",
      "Colossians",
      "Hebrews"
    ],
    "correct_answer": "Titus",
    "explanation": "Titus immediately precedes Philemon in the canonical sequence of Paul's epistles.",
    "reference": "Titus 1:5, 12; 2:11; Philemon 1:1",
    "metadata": {
      "question_type": "The Book Before and After",
      "is_typed": false,
      "clues": [
        "Warns: \"One of the Cretans, a prophet of their own, said, 'Cretans are always liars, evil beasts, lazy gluttons.'\"",
        "Contains the declaration: \"For the grace of God has appeared, bringing salvation for all people\" (ch 2:11).",
        "Precedes Paul's single-chapter letter concerning Onesimus."
      ],
      "hint": "Five-letter name of Paul's coworker on Crete; starts with T.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Tit"
      ],
      "stage": 4,
      "stage_title": "Missing Book Challenge",
      "level_theme": "Pauline Epistles Order",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l18-c3",
    "game_slug": "find-the-bible-book",
    "level": 18,
    "challenge_index": 3,
    "question_text": "TYPE THE BIBLE BOOK:\nWhich prison epistle stands IMMEDIATELY BETWEEN Galatians and Philippians in the New Testament canon?",
    "options": [
      "Ephesians",
      "Colossians",
      "Philippians",
      "Romans"
    ],
    "correct_answer": "Ephesians",
    "explanation": "Ephesians stands between Galatians and Philippians in the traditional canon order.",
    "reference": "Ephesians 1:1; 6:10–18",
    "metadata": {
      "question_type": "Type the Book",
      "is_typed": true,
      "clues": [
        "Six chapters addressing the mystery of the Church as the Body of Christ.",
        "Contains famous prayers in chapters 1 and 3, and the Armor of God in chapter 6.",
        "Written to the major church where Paul ministered for three years in Asia Minor."
      ],
      "hint": "Addressed to the church at Ephesus; begins with Eph-.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Eph"
      ],
      "stage": 4,
      "stage_title": "Missing Book Challenge",
      "level_theme": "Pauline Epistles Order",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l18-c4",
    "game_slug": "find-the-bible-book",
    "level": 18,
    "challenge_index": 4,
    "question_text": "MISSING BOOK SEQUENCE:\nIdentify the missing epistle in this sequence of Paul's prison and missionary letters:\nEphesians → Philippians → [ ? ] → 1 Thessalonians",
    "options": [
      "Colossians",
      "Galatians",
      "2 Thessalonians",
      "Philemon"
    ],
    "correct_answer": "Colossians",
    "explanation": "Colossians stands between Philippians and 1 Thessalonians.",
    "reference": "Colossians 1:1, 15; 4:7–9",
    "metadata": {
      "question_type": "The Missing Book",
      "is_typed": false,
      "clues": [
        "Four chapters exalting Christ: \"He is the image of the invisible God, the firstborn of all creation.\"",
        "Written to a city in the Lycus Valley near Hierapolis and Laodicea.",
        "Carried by Tychicus alongside Onesimus."
      ],
      "hint": "Addressed to the Colossians; starts with Col-.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Col"
      ],
      "stage": 4,
      "stage_title": "Missing Book Challenge",
      "level_theme": "Pauline Epistles Order",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l18-c5",
    "game_slug": "find-the-bible-book",
    "level": 18,
    "challenge_index": 5,
    "question_text": "TYPE THE BIBLE BOOK:\nWhich book stands between 1 Thessalonians and 1 Timothy, warning about the \"man of lawlessness\" and commanding: \"If anyone is not willing to work, let him not eat\"?",
    "options": [
      "2 Thessalonians",
      "1 Thessalonians",
      "1 Timothy",
      "Titus"
    ],
    "correct_answer": "2 Thessalonians",
    "explanation": "2 Thessalonians stands between 1 Thessalonians and 1 Timothy in canonical arrangement.",
    "reference": "2 Thessalonians 2:1–4; 3:10",
    "metadata": {
      "question_type": "Type the Book",
      "is_typed": true,
      "clues": [
        "Three chapters addressing misunderstandings regarding the Day of the Lord.",
        "Paul assures believers that Christ's coming will not happen until the rebellion comes first.",
        "Second letter to this Macedonian congregation."
      ],
      "hint": "Second letter to the Thessalonians; begins with 2.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Second Thessalonians",
        "2Thess"
      ],
      "stage": 4,
      "stage_title": "Missing Book Challenge",
      "level_theme": "Pauline Epistles Order",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l19-c1",
    "game_slug": "find-the-bible-book",
    "level": 19,
    "challenge_index": 1,
    "question_text": "Which epistle comes IMMEDIATELY AFTER the Epistle to the Hebrews in the canonical arrangement of the New Testament?",
    "options": [
      "James",
      "1 Peter",
      "1 John",
      "Jude"
    ],
    "correct_answer": "James",
    "explanation": "James immediately follows Hebrews, opening the collection of General (Catholic) Epistles.",
    "reference": "Hebrews 13:25; James 1:1; 2:17",
    "metadata": {
      "question_type": "The Book Before and After",
      "is_typed": false,
      "clues": [
        "Addressed to \"the twelve tribes in the Dispersion\".",
        "Practical wisdom epistle emphasizing that \"faith without works is dead.\"",
        "Contains teachings on the taming of the tongue, trials, and prayer for the sick."
      ],
      "hint": "Five-letter name of the Lord's brother; starts with J.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Jas"
      ],
      "stage": 4,
      "stage_title": "Missing Book Challenge",
      "level_theme": "General Epistles Order",
      "difficulty": "easy",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l19-c2",
    "game_slug": "find-the-bible-book",
    "level": 19,
    "challenge_index": 2,
    "question_text": "Which single-chapter General Epistle comes IMMEDIATELY BEFORE Revelation, urging believers to \"contend for the faith that was once for all delivered to the saints\"?",
    "options": [
      "Jude",
      "3 John",
      "2 Peter",
      "James"
    ],
    "correct_answer": "Jude",
    "explanation": "Jude is the 65th book of the Bible, situated directly before Revelation.",
    "reference": "Jude 1:1, 3, 14, 24; Revelation 1:1",
    "metadata": {
      "question_type": "The Book Before and After",
      "is_typed": false,
      "clues": [
        "Written by a brother of James and half-brother of the Lord.",
        "Quotes the ancient prophecy of Enoch: \"Behold, the Lord comes with ten thousands of his holy ones.\"",
        "Concludes with the famous doxology: \"Now to him who is able to keep you from stumbling...\""
      ],
      "hint": "Four-letter book name; starts with J.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Jud"
      ],
      "stage": 4,
      "stage_title": "Missing Book Challenge",
      "level_theme": "General Epistles Order",
      "difficulty": "easy",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l19-c3",
    "game_slug": "find-the-bible-book",
    "level": 19,
    "challenge_index": 3,
    "question_text": "TYPE THE BIBLE BOOK:\nWhich book stands IMMEDIATELY BETWEEN 2 Peter and 2 John in the New Testament canon?",
    "options": [
      "1 John",
      "2 John",
      "3 John",
      "Jude"
    ],
    "correct_answer": "1 John",
    "explanation": "1 John stands directly between 2 Peter and 2 John.",
    "reference": "1 John 1:5; 4:8; 5:13",
    "metadata": {
      "question_type": "Type the Book",
      "is_typed": true,
      "clues": [
        "Five chapters emphasizing tests of genuine fellowship: walking in the light, loving the brethren, and confessing Jesus in the flesh.",
        "Declares: \"God is light, and in him is no darkness at all... God is love.\"",
        "Written by the Apostle John that \"you who believe in the name of the Son of God may know that you have eternal life.\""
      ],
      "hint": "First Epistle of John; begins with 1.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "First John",
        "1Jn"
      ],
      "stage": 4,
      "stage_title": "Missing Book Challenge",
      "level_theme": "General Epistles Order",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l19-c4",
    "game_slug": "find-the-bible-book",
    "level": 19,
    "challenge_index": 4,
    "question_text": "MISSING BOOK SEQUENCE:\nIdentify the missing epistle in this sequence of the General Epistles:\nJames → 1 Peter → [ ? ] → 1 John",
    "options": [
      "2 Peter",
      "2 John",
      "Jude",
      "Hebrews"
    ],
    "correct_answer": "2 Peter",
    "explanation": "2 Peter stands between 1 Peter and 1 John in the canon.",
    "reference": "2 Peter 1:1, 14; 3:8",
    "metadata": {
      "question_type": "The Missing Book",
      "is_typed": false,
      "clues": [
        "Three chapters warning against corrupt false teachers who scoff at Christ's second coming.",
        "Notes that \"with the Lord one day is as a thousand years, and a thousand years as one day.\"",
        "Peter's final letter anticipating his own impending martyrdom."
      ],
      "hint": "Second letter of Peter; begins with 2.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Second Peter",
        "2Pet"
      ],
      "stage": 4,
      "stage_title": "Missing Book Challenge",
      "level_theme": "General Epistles Order",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l19-c5",
    "game_slug": "find-the-bible-book",
    "level": 19,
    "challenge_index": 5,
    "question_text": "TYPE THE BIBLE BOOK:\nWhich 14-verse epistle comes IMMEDIATELY AFTER 2 John, addressed to \"the beloved Gaius, whom I love in truth\", commending Demetrius while rebuking Diotrephes \"who likes to put himself first\"?",
    "options": [
      "3 John",
      "2 John",
      "Jude",
      "Philemon"
    ],
    "correct_answer": "3 John",
    "explanation": "3 John stands between 2 John and Jude in the New Testament canon.",
    "reference": "3 John 1:1, 4, 9, 12",
    "metadata": {
      "question_type": "Type the Book",
      "is_typed": true,
      "clues": [
        "The shortest book in the New Testament by Greek word count.",
        "John states: \"I have no greater joy than to hear that my children are walking in the truth.\"",
        "Directly precedes the Epistle of Jude."
      ],
      "hint": "Third letter of John; begins with 3.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Third John",
        "3Jn"
      ],
      "stage": 4,
      "stage_title": "Missing Book Challenge",
      "level_theme": "General Epistles Order",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l20-c1",
    "game_slug": "find-the-bible-book",
    "level": 20,
    "challenge_index": 1,
    "question_text": "MISSING BOOK BOSS:\nIdentify the missing Old Testament prophetic book in this canonical sequence:\nNahum → Habakkuk → [ ? ] → Haggai → Zechariah",
    "options": [
      "Zephaniah",
      "Obadiah",
      "Malachi",
      "Micah"
    ],
    "correct_answer": "Zephaniah",
    "explanation": "Zephaniah is the ninth of the Minor Prophets, situated directly between Habakkuk and Haggai.",
    "reference": "Zephaniah 1:1, 14; 3:17",
    "metadata": {
      "question_type": "The Missing Book",
      "is_typed": false,
      "clues": [
        "Three chapters focusing intensely on the approaching \"great Day of the Lord.\"",
        "Traces his royal pedigree back four generations to King Hezekiah.",
        "Contains the promise: \"The Lord your God is in your midst, a mighty one who will save; he will rejoice over you with gladness; he will quiet you by his love; he will exult over you with loud singing.\""
      ],
      "hint": "Nine-letter name starting with Z; precedes Haggai.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Zeph"
      ],
      "stage": 4,
      "stage_title": "Missing Book Challenge",
      "level_theme": "Missing Book Boss",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l20-c2",
    "game_slug": "find-the-bible-book",
    "level": 20,
    "challenge_index": 2,
    "question_text": "MISSING BOOK BOSS:\nWhich book stands IMMEDIATELY BEFORE the Gospel of Matthew in the Christian Bible, concluding the Old Testament with the prophecy that God will send Elijah the prophet before the great and dreadful day of the Lord?",
    "options": [
      "Malachi",
      "Zechariah",
      "Haggai",
      "Nehemiah"
    ],
    "correct_answer": "Malachi",
    "explanation": "Malachi is the final book of the Old Testament, standing directly before Matthew.",
    "reference": "Malachi 3:10; 4:5–6; Matthew 1:1",
    "metadata": {
      "question_type": "The Book Before and After",
      "is_typed": false,
      "clues": [
        "Four chapters using a disputation format where priests and people ask: \"How have we despised your name?\"",
        "Contains the famous command: \"Bring the full tithe into the storehouse, that there may be food in my house.\"",
        "The 39th and final book of the Old Testament."
      ],
      "hint": "Final book of the Old Testament; starts with M.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Mal"
      ],
      "stage": 4,
      "stage_title": "Missing Book Challenge",
      "level_theme": "Missing Book Boss",
      "difficulty": "medium",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l20-c3",
    "game_slug": "find-the-bible-book",
    "level": 20,
    "challenge_index": 3,
    "question_text": "TYPE THE BIBLE BOOK:\nIn the traditional Hebrew Tanakh arrangement (Torah, Nevi'im, Ketuvim), what is the very LAST book that concludes the entire Hebrew Bible, ending with King Cyrus' decree: \"Whoever is among you of all his people... let him go up\"?",
    "options": [
      "2 Chronicles",
      "1 Chronicles",
      "Malachi",
      "Ezra"
    ],
    "correct_answer": "2 Chronicles",
    "explanation": "In the Jewish Tanakh, 2 Chronicles (Divrei Hayamim) is the final book of Ketuvim (Writings), concluding the Hebrew Bible.",
    "reference": "2 Chronicles 36:22–23; Luke 11:51",
    "metadata": {
      "question_type": "Type the Book",
      "is_typed": true,
      "clues": [
        "In the Christian canon it is placed in the historical section.",
        "Covers the spiritual history of Judah from the creation of Adam to the decree of Cyrus.",
        "Second part of the Chronicles."
      ],
      "hint": "Second Chronicles; last book of the Hebrew Tanakh.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Second Chronicles",
        "2Chr"
      ],
      "stage": 4,
      "stage_title": "Missing Book Challenge",
      "level_theme": "Missing Book Boss",
      "difficulty": "master",
      "timerSeconds": 20,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l20-c4",
    "game_slug": "find-the-bible-book",
    "level": 20,
    "challenge_index": 4,
    "question_text": "MISSING BOOK BOSS:\nWhich of the following books is NOT part of the Major Prophets in the Christian Old Testament canon?",
    "options": [
      "Hosea",
      "Daniel",
      "Lamentations",
      "Ezekiel"
    ],
    "correct_answer": "Hosea",
    "explanation": "Hosea is the first of the 12 Minor Prophets, not one of the Major Prophets.",
    "reference": "Hosea 1:1–2",
    "metadata": {
      "question_type": "The Missing Book",
      "is_typed": false,
      "clues": [
        "The Major Prophets include Isaiah, Jeremiah, Lamentations, Ezekiel, and Daniel.",
        "This excluded book is the first of the Twelve Minor Prophets.",
        "Written by the prophet commanded to marry Gomer."
      ],
      "hint": "Prophet whose unfaithful wife was Gomer; first of the Minor Prophets.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Hos"
      ],
      "stage": 4,
      "stage_title": "Missing Book Challenge",
      "level_theme": "Missing Book Boss",
      "difficulty": "medium",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l20-c5",
    "game_slug": "find-the-bible-book",
    "level": 20,
    "challenge_index": 5,
    "question_text": "TYPE THE BIBLE BOOK:\nWhich book stands precisely 27th in the order of the 66 canonical books of the Bible, serving as the middle book of the Major Prophets?",
    "options": [
      "Daniel",
      "Ezekiel",
      "Lamentations",
      "Jeremiah"
    ],
    "correct_answer": "Daniel",
    "explanation": "Counting from Genesis (1) through the OT: Gen (1) to 2 Chron (14), Ezra to Song (15–22), Isaiah (23), Jeremiah (24), Lamentations (25), Ezekiel (26), Daniel (27). Daniel is the 27th book of the Bible.",
    "reference": "Daniel 1:1; Daniel 12:13",
    "metadata": {
      "question_type": "Type the Book",
      "is_typed": true,
      "clues": [
        "Total books in Protestant Bible: 66 (39 OT + 27 NT).",
        "The 27th book of the Old Testament.",
        "Written by the prophet who wept over Jerusalem's ruins."
      ],
      "hint": "Book containing Nebuchadnezzar's dream and the lion's den; 27th book.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Dan"
      ],
      "stage": 4,
      "stage_title": "Missing Book Challenge",
      "level_theme": "Missing Book Boss",
      "difficulty": "master",
      "timerSeconds": 20,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l21-c1",
    "game_slug": "find-the-bible-book",
    "level": 21,
    "challenge_index": 1,
    "question_text": "Which Old Testament book contains the immortal theological statement that ignited the Protestant Reformation: \"Behold, his soul is puffed up; it is not upright within him, but the righteous shall live by his faith\"?",
    "options": [
      "Habakkuk",
      "Zephaniah",
      "Micah",
      "Nahum"
    ],
    "correct_answer": "Habakkuk",
    "explanation": "Habakkuk 2:4 is the seminal verse: \"The righteous shall live by his faith\", cited three times in the New Testament.",
    "reference": "Habakkuk 2:4; Romans 1:17; Galatians 3:11; Hebrews 10:38",
    "metadata": {
      "question_type": "Find the Book from a Scripture Clue",
      "is_typed": false,
      "clues": [
        "The prophet stood upon his watchtower questioning God about using the wicked Chaldeans (Babylonians) to punish Judah.",
        "Quoted directly in Romans 1:17, Galatians 3:11, and Hebrews 10:38.",
        "Three-chapter Minor Prophet."
      ],
      "hint": "Eight-letter Minor Prophet beginning with Hab-.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Hab"
      ],
      "stage": 5,
      "stage_title": "Scripture Detective",
      "level_theme": "Famous Words from Unlikely Books",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l21-c2",
    "game_slug": "find-the-bible-book",
    "level": 21,
    "challenge_index": 2,
    "question_text": "In which book does Samuel rebuke King Saul after Saul spared King Agag and the best of the Amalekite livestock: \"Has the Lord as great delight in burnt offerings and sacrifices, as in obeying the voice of the Lord? Behold, to obey is better than sacrifice, and to listen than the fat of rams\"?",
    "options": [
      "1 Samuel",
      "2 Samuel",
      "1 Kings",
      "Judges"
    ],
    "correct_answer": "1 Samuel",
    "explanation": "1 Samuel 15:22 contains Samuel's famous rebuke: \"To obey is better than sacrifice.\"",
    "reference": "1 Samuel 15:22–23",
    "metadata": {
      "question_type": "Find the Book from a Scripture Clue",
      "is_typed": false,
      "clues": [
        "Saul made excuses that the people spared the animals to sacrifice to God in Gilgal.",
        "Samuel announced that the Lord had rejected Saul from being king over Israel.",
        "Found in chapter 15 of this historical narrative."
      ],
      "hint": "First Samuel; chapter 15.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "First Samuel",
        "1Sam"
      ],
      "stage": 5,
      "stage_title": "Scripture Detective",
      "level_theme": "Famous Words from Unlikely Books",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l21-c3",
    "game_slug": "find-the-bible-book",
    "level": 21,
    "challenge_index": 3,
    "question_text": "TYPE THE BIBLE BOOK:\nWhich book contains the magnificent confession of triumphant faith amidst physical torment: \"For I know that my Redeemer lives, and at the last he will stand upon the earth. And after my skin has been thus destroyed, yet in my flesh I shall see God\"?",
    "options": [
      "Job",
      "Psalms",
      "Isaiah",
      "Lamentations"
    ],
    "correct_answer": "Job",
    "explanation": "Job 19:25–26 contains Job's prophetic confession of his living Redeemer and bodily resurrection.",
    "reference": "Job 19:25–26",
    "metadata": {
      "question_type": "Type the Book",
      "is_typed": true,
      "clues": [
        "The speaker sat in ashes scraping sores with a piece of broken pottery.",
        "Spoken in response to the accusatory speeches of Bildad the Shuhite in chapter 19.",
        "Explores the mystery of human suffering and divine sovereignty."
      ],
      "hint": "Three-letter book name; starts with J.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Jb"
      ],
      "stage": 5,
      "stage_title": "Scripture Detective",
      "level_theme": "Famous Words from Unlikely Books",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l21-c4",
    "game_slug": "find-the-bible-book",
    "level": 21,
    "challenge_index": 4,
    "question_text": "Which Minor Prophet declared the famous moral summary: \"He has told you, O man, what is good; and what does the Lord require of you but to do justice, and to love kindness, and to walk humbly with your God\"?",
    "options": [
      "Micah",
      "Amos",
      "Hosea",
      "Malachi"
    ],
    "correct_answer": "Micah",
    "explanation": "Micah 6:8 is one of the Old Testament's most renowned summaries of godly living.",
    "reference": "Micah 6:8; 5:2",
    "metadata": {
      "question_type": "Find the Book from a Scripture Clue",
      "is_typed": false,
      "clues": [
        "A contemporary of Isaiah who prophesied in Judah.",
        "Also prophesied that the eternal ruler in Israel would be born in Bethlehem Ephrathah (Micah 5:2).",
        "Seven chapters located between Jonah and Nahum."
      ],
      "hint": "Five-letter prophet name; prophesied Bethlehem birth.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Mic"
      ],
      "stage": 5,
      "stage_title": "Scripture Detective",
      "level_theme": "Famous Words from Unlikely Books",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l21-c5",
    "game_slug": "find-the-bible-book",
    "level": 21,
    "challenge_index": 5,
    "question_text": "TYPE THE BIBLE BOOK:\nIn which book does an angel proclaim to Zerubbabel the governor the famous spiritual axiom: \"Not by might, nor by power, but by my Spirit, says the Lord of hosts\"?",
    "options": [
      "Zechariah",
      "Haggai",
      "Malachi",
      "Ezra"
    ],
    "correct_answer": "Zechariah",
    "explanation": "Zechariah 4:6 contains the famous declaration: \"Not by might, nor by power, but by my Spirit, says the Lord.\"",
    "reference": "Zechariah 4:6–7",
    "metadata": {
      "question_type": "Type the Book",
      "is_typed": true,
      "clues": [
        "Given in explanation of a vision of a solid gold lampstand flanked by two olive trees.",
        "Promises that the capstone of the second temple will be brought out with shouts of \"Grace, grace to it!\"",
        "The penultimate book of the Old Testament."
      ],
      "hint": "Nine-letter post-exilic prophet; starts with Zech-.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Zech"
      ],
      "stage": 5,
      "stage_title": "Scripture Detective",
      "level_theme": "Famous Words from Unlikely Books",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l22-c1",
    "game_slug": "find-the-bible-book",
    "level": 22,
    "challenge_index": 1,
    "question_text": "In which book does King Solomon kneel before the altar with hands spread to heaven and pray: \"Will God indeed dwell on the earth? Behold, heaven and the highest heaven cannot contain you; how much less this house that I have built!\" during the temple dedication?",
    "options": [
      "1 Kings",
      "2 Kings",
      "1 Samuel",
      "Ezra"
    ],
    "correct_answer": "1 Kings",
    "explanation": "1 Kings 8 records Solomon's great dedicatory prayer over the newly completed temple in Jerusalem.",
    "reference": "1 Kings 8:22–53; 2 Chronicles 6:12–42",
    "metadata": {
      "question_type": "Find the Book from a Scripture Clue",
      "is_typed": false,
      "clues": [
        "Followed by fire coming down from heaven to consume the sacrifices in 2 Chronicles.",
        "Contains detailed petitions for when Israel faces drought, enemy defeat, or exile.",
        "Found in chapter 8 of this book."
      ],
      "hint": "First Kings, chapter 8.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "First Kings",
        "1Kgs",
        "2 Chronicles"
      ],
      "stage": 5,
      "stage_title": "Scripture Detective",
      "level_theme": "Great Prayers of the Bible",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l22-c2",
    "game_slug": "find-the-bible-book",
    "level": 22,
    "challenge_index": 2,
    "question_text": "Which book records a prophet praying from inside the belly of a great fish: \"I called out to the Lord, out of my distress, and he answered me; out of the belly of Sheol I cried, and you heard my voice... Salvation belongs to the Lord!\"?",
    "options": [
      "Jonah",
      "Nahum",
      "Micah",
      "Habakkuk"
    ],
    "correct_answer": "Jonah",
    "explanation": "Jonah 2 is Jonah's psalm of thanksgiving prayed from the belly of the great fish.",
    "reference": "Jonah 2:1–10",
    "metadata": {
      "question_type": "Find the Book from a Scripture Clue",
      "is_typed": false,
      "clues": [
        "The prophet had fled on a ship to Tarshish from Joppa.",
        "At the end of the prayer, the Lord spoke to the fish, and it vomited the prophet onto dry land.",
        "Four-chapter narrative book."
      ],
      "hint": "Prophet swallowed by a great fish; five letters.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Jon"
      ],
      "stage": 5,
      "stage_title": "Scripture Detective",
      "level_theme": "Great Prayers of the Bible",
      "difficulty": "easy",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l22-c3",
    "game_slug": "find-the-bible-book",
    "level": 22,
    "challenge_index": 3,
    "question_text": "TYPE THE BIBLE BOOK:\nIn which Gospel does Jesus offer His magnificent High Priestly Prayer on the night of His betrayal, praying for His disciples and all future believers: \"Father, the hour has come; glorify your Son that the Son may glorify you... that they may all be one, just as you, Father, are in me, and I in you\"?",
    "options": [
      "John",
      "Luke",
      "Matthew",
      "Mark"
    ],
    "correct_answer": "John",
    "explanation": "John 17 is Jesus' sublime High Priestly Prayer for His disciples' sanctification and eternal unity.",
    "reference": "John 17:1–26",
    "metadata": {
      "question_type": "Type the Book",
      "is_typed": true,
      "clues": [
        "Takes place in the Upper Room discourse right before crossing the Kidron brook to Gethsemane.",
        "Defines eternal life: \"that they know you, the only true God, and Jesus Christ whom you have sent.\"",
        "Recorded exclusively in chapter 17 of this Gospel."
      ],
      "hint": "Fourth Gospel; four letters; starts with J.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Jn"
      ],
      "stage": 5,
      "stage_title": "Scripture Detective",
      "level_theme": "Great Prayers of the Bible",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l22-c4",
    "game_slug": "find-the-bible-book",
    "level": 22,
    "challenge_index": 4,
    "question_text": "Which book records the heartbreaking prayer of Moses on Mount Sinai after the golden calf apostasy, interceding for Israel: \"Alas, this people has sinned a great sin... But now, if you will forgive their sin—but if not, please blot me out of your book that you have written\"?",
    "options": [
      "Exodus",
      "Deuteronomy",
      "Leviticus",
      "Numbers"
    ],
    "correct_answer": "Exodus",
    "explanation": "Exodus 32:32 contains Moses' self-sacrificial prayer pleading for Israel's forgiveness.",
    "reference": "Exodus 32:30–34",
    "metadata": {
      "question_type": "Find the Book from a Scripture Clue",
      "is_typed": false,
      "clues": [
        "Moses had just smashed the two stone tablets of the testimony at the foot of the mountain.",
        "God responded: \"Whoever has sinned against me, him I will blot out of my book.\"",
        "Second book of Moses."
      ],
      "hint": "Second book of the Old Testament.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Exod"
      ],
      "stage": 5,
      "stage_title": "Scripture Detective",
      "level_theme": "Great Prayers of the Bible",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l22-c5",
    "game_slug": "find-the-bible-book",
    "level": 22,
    "challenge_index": 5,
    "question_text": "TYPE THE BIBLE BOOK:\nIn which prophetic book does the author pray in chapter 9 while reading Jeremiah's 70-year prophecy, confessing the sins of his nation in sackcloth and ashes, whereupon the angel Gabriel flies swiftly to him at the time of the evening sacrifice to reveal the prophecy of the \"Seventy Weeks\"?",
    "options": [
      "Daniel",
      "Jeremiah",
      "Ezekiel",
      "Nehemiah"
    ],
    "correct_answer": "Daniel",
    "explanation": "Daniel 9 records Daniel's great prayer of confession and Gabriel's revelation of the Seventy Weeks.",
    "reference": "Daniel 9:1–27",
    "metadata": {
      "question_type": "Type the Book",
      "is_typed": true,
      "clues": [
        "The prophet was an exiled statesman in Babylon.",
        "Gabriel calls him \"greatly loved\" (man of high esteem).",
        "The prophecy outlines seventy weeks decreed for your people and holy city."
      ],
      "hint": "Old Testament prophetic book of 12 chapters; starts with D.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Dan"
      ],
      "stage": 5,
      "stage_title": "Scripture Detective",
      "level_theme": "Great Prayers of the Bible",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l23-c1",
    "game_slug": "find-the-bible-book",
    "level": 23,
    "challenge_index": 1,
    "question_text": "Which book foretells the precise price of thirty pieces of silver for the shepherd of Israel, which were cast into the house of the Lord to the potter: \"So they weighed out as my wages thirty pieces of silver. Then the Lord said to me, 'Throw it to the potter'—the lordly price at which I was priced by them\"?",
    "options": [
      "Zechariah",
      "Malachi",
      "Jeremiah",
      "Micah"
    ],
    "correct_answer": "Zechariah",
    "explanation": "Zechariah 11:12–13 prophesies the 30 pieces of silver thrown to the potter in the temple.",
    "reference": "Zechariah 11:12–13; 12:10; Matthew 27:9–10",
    "metadata": {
      "question_type": "Find the Book from a Scripture Clue",
      "is_typed": false,
      "clues": [
        "Cited by Matthew 27:9–10 at the suicide of Judas Iscariot.",
        "Also foretells: \"They will look on me, on him whom they have pierced.\"",
        "Eleventh of the twelve Minor Prophets."
      ],
      "hint": "Minor Prophet beginning with Zech-.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Zech"
      ],
      "stage": 5,
      "stage_title": "Scripture Detective",
      "level_theme": "Prophetic Messianic Oracles",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l23-c2",
    "game_slug": "find-the-bible-book",
    "level": 23,
    "challenge_index": 2,
    "question_text": "In which book do we read the Fourth Servant Song describing the Suffering Messiah: \"Surely he has borne our griefs and carried our sorrows... he was pierced for our transgressions; he was crushed for our iniquities; upon him was the chastisement that brought us peace, and with his wounds we are healed\"?",
    "options": [
      "Isaiah",
      "Jeremiah",
      "Psalms",
      "Zechariah"
    ],
    "correct_answer": "Isaiah",
    "explanation": "Isaiah 53 is the supreme Old Testament prophecy of Christ's substitutionary atonement on the cross.",
    "reference": "Isaiah 53:4–7; Acts 8:32–35",
    "metadata": {
      "question_type": "Find the Book from a Scripture Clue",
      "is_typed": false,
      "clues": [
        "Philip the Evangelist explained this exact passage to the Ethiopian eunuch in Acts 8.",
        "Describes the Messiah as a silent sheep led to slaughter.",
        "Found in chapter 53 of this major prophet."
      ],
      "hint": "Major prophet containing 66 chapters.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Isa"
      ],
      "stage": 5,
      "stage_title": "Scripture Detective",
      "level_theme": "Prophetic Messianic Oracles",
      "difficulty": "easy",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l23-c3",
    "game_slug": "find-the-bible-book",
    "level": 23,
    "challenge_index": 3,
    "question_text": "TYPE THE BIBLE BOOK:\nWhich book opens with the cry of agonizing abandonment: \"My God, my God, why have you forsaken me?\", and describes the executioners piercing hands and feet and dividing garments by casting lots a thousand years before Roman crucifixion existed?",
    "options": [
      "Psalms",
      "Psalm",
      "Isaiah",
      "Job"
    ],
    "correct_answer": "Psalms",
    "explanation": "Psalm 22 is David's prophetic psalm depicting the physical and spiritual suffering of the crucified Messiah.",
    "reference": "Psalm 22:1, 16, 18; Matthew 27:46; John 19:24",
    "metadata": {
      "question_type": "Type the Book",
      "is_typed": true,
      "clues": [
        "Jesus quoted its opening line from the cross in Matthew 27:46.",
        "Details: \"They divide my garments among them, and for my clothing they cast lots.\"",
        "Composed by King David."
      ],
      "hint": "Book containing Psalm 22.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Psalm",
        "Psa"
      ],
      "stage": 5,
      "stage_title": "Scripture Detective",
      "level_theme": "Prophetic Messianic Oracles",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l23-c4",
    "game_slug": "find-the-bible-book",
    "level": 23,
    "challenge_index": 4,
    "question_text": "Which prophetic book foretold that the Messiah would be born in Bethlehem Ephrathah: \"But you, O Bethlehem Ephrathah, who are too little to be among the clans of Judah, from you shall come forth for me one who is to be ruler in Israel, whose coming forth is from of old, from ancient days\"?",
    "options": [
      "Micah",
      "Malachi",
      "Hosea",
      "Habakkuk"
    ],
    "correct_answer": "Micah",
    "explanation": "Micah 5:2 explicitly names Bethlehem Ephrathah as the birthplace of the Messiah.",
    "reference": "Micah 5:2; Matthew 2:5–6",
    "metadata": {
      "question_type": "Find the Book from a Scripture Clue",
      "is_typed": false,
      "clues": [
        "The chief priests quoted this verse to King Herod when the Magi arrived in Matthew 2.",
        "Contemporary of the prophet Isaiah.",
        "Minor Prophet of seven chapters."
      ],
      "hint": "Five-letter Minor Prophet starting with M.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Mic"
      ],
      "stage": 5,
      "stage_title": "Scripture Detective",
      "level_theme": "Prophetic Messianic Oracles",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l23-c5",
    "game_slug": "find-the-bible-book",
    "level": 23,
    "challenge_index": 5,
    "question_text": "TYPE THE BIBLE BOOK:\nIn which book is the Messiah revealed as the \"Son of Man\" coming with the clouds of heaven before the Ancient of Days, receiving an everlasting dominion, glory, and kingdom that all peoples, nations, and languages should serve Him?",
    "options": [
      "Daniel",
      "Ezekiel",
      "Zechariah",
      "Revelation"
    ],
    "correct_answer": "Daniel",
    "explanation": "Daniel 7:13–14 is the foundational prophecy of the Son of Man receiving universal and eternal dominion.",
    "reference": "Daniel 7:13–14; Matthew 26:64",
    "metadata": {
      "question_type": "Type the Book",
      "is_typed": true,
      "clues": [
        "Jesus adopted this specific \"Son of Man\" title throughout His earthly ministry.",
        "Jesus quoted this exact scene before High Priest Caiaphas at His trial in Matthew 26:64.",
        "Recorded in chapter 7 of this apocalyptic book."
      ],
      "hint": "Six-letter prophetic book; starts with D.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Dan"
      ],
      "stage": 5,
      "stage_title": "Scripture Detective",
      "level_theme": "Prophetic Messianic Oracles",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l24-c1",
    "game_slug": "find-the-bible-book",
    "level": 24,
    "challenge_index": 1,
    "question_text": "In which book does God promise to make a New Covenant with the house of Israel and the house of Judah: \"I will put my law within them, and I will write it on their hearts. And I will be their God, and they shall be my people... for I will forgive their iniquity, and I will remember their sin no more\"?",
    "options": [
      "Jeremiah",
      "Ezekiel",
      "Isaiah",
      "Hosea"
    ],
    "correct_answer": "Jeremiah",
    "explanation": "Jeremiah 31:31–34 is the classic Old Testament announcement of the New Covenant.",
    "reference": "Jeremiah 31:31–34; Hebrews 8:8–12",
    "metadata": {
      "question_type": "Find the Book from a Scripture Clue",
      "is_typed": false,
      "clues": [
        "Contrasted with the broken Sinai covenant made when God took them by the hand out of Egypt.",
        "Quoted verbatim in Hebrews 8:8–12 and Hebrews 10:16–17 as fulfilled in Christ.",
        "Found in chapter 31 of this major prophet."
      ],
      "hint": "The weeping prophet Jeremiah in chapter 31.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Jer"
      ],
      "stage": 5,
      "stage_title": "Scripture Detective",
      "level_theme": "Covenant Inscriptions & Decrees",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l24-c2",
    "game_slug": "find-the-bible-book",
    "level": 24,
    "challenge_index": 2,
    "question_text": "In which book does God pronounce the foundational Davidic Covenant: \"When your days are fulfilled and you lie down with your fathers, I will raise up your offspring after you... and I will establish the throne of his kingdom forever. I will be to him a father, and he shall be to me a son\"?",
    "options": [
      "2 Samuel",
      "1 Samuel",
      "1 Kings",
      "1 Chronicles"
    ],
    "correct_answer": "2 Samuel",
    "explanation": "2 Samuel 7 is the historical locus of the unconditional Davidic Covenant.",
    "reference": "2 Samuel 7:12–16; 1 Chronicles 17:11–14",
    "metadata": {
      "question_type": "Find the Book from a Scripture Clue",
      "is_typed": false,
      "clues": [
        "Announced through the prophet Nathan after David expressed desire to build a house of cedar for the Ark.",
        "God promised: \"Your house and your kingdom shall be made sure forever before me.\"",
        "Recorded in chapter 7."
      ],
      "hint": "Second Samuel, chapter 7.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Second Samuel",
        "2Sam"
      ],
      "stage": 5,
      "stage_title": "Scripture Detective",
      "level_theme": "Covenant Inscriptions & Decrees",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l24-c3",
    "game_slug": "find-the-bible-book",
    "level": 24,
    "challenge_index": 3,
    "question_text": "TYPE THE BIBLE BOOK:\nIn which book does God promise: \"I will sprinkle clean water on you, and you shall be clean... And I will give you a new heart, and a new spirit I will put within you. And I will remove the heart of stone from your flesh and give you a heart of flesh\"?",
    "options": [
      "Ezekiel",
      "Jeremiah",
      "Isaiah",
      "Daniel"
    ],
    "correct_answer": "Ezekiel",
    "explanation": "Ezekiel 36:25–27 describes the spiritual regeneration of God's covenant people with a new heart and Spirit.",
    "reference": "Ezekiel 36:25–27",
    "metadata": {
      "question_type": "Type the Book",
      "is_typed": true,
      "clues": [
        "Followed immediately in chapter 37 by the vision of the valley of dry bones.",
        "Addressed to the exiles in Babylon.",
        "Recorded in chapter 36 of this priestly prophetic book."
      ],
      "hint": "Major prophet of 48 chapters; begins with Ezek-.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Ezek"
      ],
      "stage": 5,
      "stage_title": "Scripture Detective",
      "level_theme": "Covenant Inscriptions & Decrees",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l24-c4",
    "game_slug": "find-the-bible-book",
    "level": 24,
    "challenge_index": 4,
    "question_text": "Which book records the first delivery of the Ten Commandments spoken by God Himself amidst thunder, lightning, thick cloud, and trumpet sound from Mount Sinai?",
    "options": [
      "Exodus",
      "Deuteronomy",
      "Leviticus",
      "Numbers"
    ],
    "correct_answer": "Exodus",
    "explanation": "Exodus 20 records the initial proclamation of the Decalogue (Ten Commandments) at Mount Sinai.",
    "reference": "Exodus 20:1–17",
    "metadata": {
      "question_type": "Find the Book from a Scripture Clue",
      "is_typed": false,
      "clues": [
        "Opens: \"I am the Lord your God, who brought you out of the land of Egypt, out of the house of slavery.\"",
        "Found in chapter 20 of this foundational book.",
        "Later repeated and expounded in Deuteronomy 5."
      ],
      "hint": "Second book of the Bible; chapter 20.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Exod"
      ],
      "stage": 5,
      "stage_title": "Scripture Detective",
      "level_theme": "Covenant Inscriptions & Decrees",
      "difficulty": "easy",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l24-c5",
    "game_slug": "find-the-bible-book",
    "level": 24,
    "challenge_index": 5,
    "question_text": "TYPE THE BIBLE BOOK:\nIn which book does Joshua summon all the tribes of Israel to Shechem for their final covenant renewal, challenging them: \"Choose this day whom you will serve... But as for me and my house, we will serve the Lord\"?",
    "options": [
      "Joshua",
      "Judges",
      "Deuteronomy",
      "1 Samuel"
    ],
    "correct_answer": "Joshua",
    "explanation": "Joshua 24 records the farewell assembly at Shechem and Joshua's famous covenant charge.",
    "reference": "Joshua 24:14–28",
    "metadata": {
      "question_type": "Type the Book",
      "is_typed": true,
      "clues": [
        "Joshua set up a great stone under the terebinth tree by the sanctuary of the Lord as a witness.",
        "The book closes with the deaths of Joshua and Eleazar, and the burial of Joseph's bones in Shechem.",
        "The 24th and final chapter of this book."
      ],
      "hint": "Book bearing the name of Joshua; chapter 24.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Josh"
      ],
      "stage": 5,
      "stage_title": "Scripture Detective",
      "level_theme": "Covenant Inscriptions & Decrees",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l25-c1",
    "game_slug": "find-the-bible-book",
    "level": 25,
    "challenge_index": 1,
    "question_text": "THE BOOK DETECTIVE:\nI contain this solemn warning: \"The pride of your heart has deceived you, you who live in the clefts of the rock, in your lofty dwelling, who say in your heart, 'Who will bring me down to the ground?' Though you soar aloft like the eagle, though your nest is set among the stars, from there I will bring you down, declares the Lord.\" Which book am I?",
    "options": [
      "Obadiah",
      "Nahum",
      "Habakkuk",
      "Zephaniah"
    ],
    "correct_answer": "Obadiah",
    "explanation": "Obadiah 1:3–4 pronounces doom on the rocky pride of Edom.",
    "reference": "Obadiah 1:3–4, 21",
    "metadata": {
      "question_type": "The Book Detective",
      "is_typed": false,
      "clues": [
        "A single-chapter prophecy of 21 verses aimed at the proud mountain fortress of Edom (Petra/Sela).",
        "Condemns Edom for standing aloof on the day Jerusalem fell and looting their brothers.",
        "Ends: \"Saviors shall go up to Mount Zion to rule Mount Esau, and the kingdom shall be the Lord's.\""
      ],
      "hint": "The shortest book in the Old Testament; begins with O.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Obad"
      ],
      "stage": 5,
      "stage_title": "Scripture Detective",
      "level_theme": "Scripture Detective Boss",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l25-c2",
    "game_slug": "find-the-bible-book",
    "level": 25,
    "challenge_index": 2,
    "question_text": "THE BOOK DETECTIVE:\nI contain this dramatic apocalyptic vision: \"I looked, and behold, a white cloud, and seated on the cloud one like a son of man, with a golden crown on his head, and a sharp sickle in his hand... And another angel came out from the altar, the angel who has authority over the fire, and he called with a loud voice to the one who had the sharp sickle, 'Put in your sickle and gather the clusters from the vine of the earth, for its grapes are ripe.'\" Which book am I?",
    "options": [
      "Revelation",
      "Daniel",
      "Ezekiel",
      "Zechariah"
    ],
    "correct_answer": "Revelation",
    "explanation": "Revelation 14:14–20 describes the harvest of the earth and the great winepress of God's wrath.",
    "reference": "Revelation 14:14–20",
    "metadata": {
      "question_type": "The Book Detective",
      "is_typed": false,
      "clues": [
        "Describes the great winepress of the wrath of God trodden outside the city.",
        "Features 144,000 on Mount Zion singing a new song before the throne.",
        "The 66th book of the Bible."
      ],
      "hint": "The final book of the New Testament.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Apocalypse",
        "Rev"
      ],
      "stage": 5,
      "stage_title": "Scripture Detective",
      "level_theme": "Scripture Detective Boss",
      "difficulty": "medium",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l25-c3",
    "game_slug": "find-the-bible-book",
    "level": 25,
    "challenge_index": 3,
    "question_text": "TYPE THE BIBLE BOOK:\nIn which book does the author write this rare canonical description of Holy Scripture: \"And count the patience of our Lord as salvation, just as our beloved brother Paul also wrote to you according to the wisdom given him, as he does in all his letters... which the ignorant and unstable twist to their own destruction, as they do the other Scriptures\"?",
    "options": [
      "2 Peter",
      "1 Peter",
      "Jude",
      "Acts"
    ],
    "correct_answer": "2 Peter",
    "explanation": "2 Peter 3:15–16 is Peter's explicit confirmation of Paul's writings as \"Scripture\" (graphe).",
    "reference": "2 Peter 3:15–16",
    "metadata": {
      "question_type": "Type the Book",
      "is_typed": true,
      "clues": [
        "A supreme New Testament witness recognizing Paul's epistles as inspired Scripture on par with the Old Testament.",
        "Written by Simon Peter shortly before his death.",
        "Contains 3 chapters."
      ],
      "hint": "Second letter of Peter.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Second Peter",
        "2Pet"
      ],
      "stage": 5,
      "stage_title": "Scripture Detective",
      "level_theme": "Scripture Detective Boss",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l25-c4",
    "game_slug": "find-the-bible-book",
    "level": 25,
    "challenge_index": 4,
    "question_text": "THE BOOK DETECTIVE:\nI open with a devastated agrarian economy wiped out by successive waves of locusts: \"What the cutting locust left, the swarming locust has eaten. What the swarming locust left, the hopping locust has eaten, and what the hopping locust left, the destroying locust has eaten.\" I then call the priests to weep between the vestibule and the altar, and promise the ultimate outpouring of the Holy Spirit on all flesh. Which book am I?",
    "options": [
      "Joel",
      "Amos",
      "Hosea",
      "Habakkuk"
    ],
    "correct_answer": "Joel",
    "explanation": "The Book of Joel depicts the devastating locust plague and the promise of the Holy Spirit.",
    "reference": "Joel 1:4; 2:13, 28–32; Acts 2:16–21",
    "metadata": {
      "question_type": "The Book Detective",
      "is_typed": false,
      "clues": [
        "Peter cited chapter 2 verbatim on the Day of Pentecost in Acts 2.",
        "Three-chapter prophecy addressed to the southern kingdom of Judah.",
        "Declares: \"Return to the Lord your God, for he is gracious and merciful, slow to anger, and abounding in steadfast love.\""
      ],
      "hint": "Four-letter Minor Prophet beginning with J.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Jl"
      ],
      "stage": 5,
      "stage_title": "Scripture Detective",
      "level_theme": "Scripture Detective Boss",
      "difficulty": "medium",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l25-c5",
    "game_slug": "find-the-bible-book",
    "level": 25,
    "challenge_index": 5,
    "question_text": "TYPE THE BIBLE BOOK:\nWhich book contains this celebrated concluding hymn of unflinching confidence: \"Though the fig tree should not blossom, nor fruit be on the vines, the produce of the olive fail and the fields yield no food... yet I will rejoice in the Lord; I will take joy in the God of my salvation. God, the Lord, is my strength; he makes my feet like the deer's; he makes me tread on my high places\"?",
    "options": [
      "Habakkuk",
      "Zephaniah",
      "Nahum",
      "Micah"
    ],
    "correct_answer": "Habakkuk",
    "explanation": "Habakkuk 3:17–19 is the triumphant prayer song concluding Habakkuk's spiritual journey.",
    "reference": "Habakkuk 3:17–19",
    "metadata": {
      "question_type": "Type the Book",
      "is_typed": true,
      "clues": [
        "The book ends with the musical notation: \"To the choirmaster: with stringed instruments.\"",
        "Begins with agonizing perplexity over God's silence and Chaldean brutality.",
        "Three chapters; the prophet stood on the watchtower."
      ],
      "hint": "Minor Prophet beginning with Hab-; ends with deer's feet on high places.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Hab"
      ],
      "stage": 5,
      "stage_title": "Scripture Detective",
      "level_theme": "Scripture Detective Boss",
      "difficulty": "master",
      "timerSeconds": 20,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l26-c1",
    "game_slug": "find-the-bible-book",
    "level": 26,
    "challenge_index": 1,
    "question_text": "TWO BOOKS, ONE STORY:\nWhich TWO Old Testament books contain nearly identical, word-for-word historical accounts of King Sennacherib's invasion of Judah, the Rabshakeh's blasphemous speech at the conduit of the upper pool, and the miraculous destruction of 185,000 Assyrian soldiers?",
    "options": [
      "2 Kings and Isaiah",
      "1 Kings and Jeremiah",
      "Joshua and Judges",
      "Ezra and Nehemiah"
    ],
    "correct_answer": "2 Kings and Isaiah",
    "explanation": "2 Kings 18–19 and Isaiah 36–37 contain parallel, almost verbatim accounts of Sennacherib's siege and Hezekiah's deliverance.",
    "reference": "2 Kings 18–19; Isaiah 36–37",
    "metadata": {
      "question_type": "Two Books, One Story",
      "is_typed": false,
      "clues": [
        "One is the second volume of the history of Israel's kings (chapter 18–19).",
        "The other is a major 66-chapter prophetic book (chapters 36–37).",
        "Both detail King Hezekiah spreading the Assyrian letter before the Lord."
      ],
      "hint": "2 Kings and the Book of Isaiah.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "2 Kings & Isaiah",
        "2Kgs and Isa"
      ],
      "stage": 6,
      "stage_title": "Book Connections",
      "level_theme": "Parallel Historical Accounts",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l26-c2",
    "game_slug": "find-the-bible-book",
    "level": 26,
    "challenge_index": 2,
    "question_text": "TWO BOOKS, ONE STORY:\nWhich TWO books record the momentous rediscovery of the Book of the Law by Hilkiah the high priest during the 18th year of King Josiah's reign, the consultation of Huldah the prophetess, and Josiah's thorough purge of pagan altars across the land?",
    "options": [
      "2 Kings and 2 Chronicles",
      "1 Kings and 1 Chronicles",
      "Ezra and Nehemiah",
      "Deuteronomy and Joshua"
    ],
    "correct_answer": "2 Kings and 2 Chronicles",
    "explanation": "Josiah's temple renovation and covenant renewal are recorded in 2 Kings 22–23 and 2 Chronicles 34–35.",
    "reference": "2 Kings 22–23; 2 Chronicles 34–35",
    "metadata": {
      "question_type": "Two Books, One Story",
      "is_typed": false,
      "clues": [
        "Both books narrate Josiah tearing his clothes upon hearing the words of the Law.",
        "One is in the Kings corpus (2 Kings 22–23).",
        "The other is in the Chronicles corpus (2 Chronicles 34–35)."
      ],
      "hint": "The second volumes of Kings and Chronicles.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "2 Kings & 2 Chronicles",
        "2Kgs and 2Chr"
      ],
      "stage": 6,
      "stage_title": "Book Connections",
      "level_theme": "Parallel Historical Accounts",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l26-c3",
    "game_slug": "find-the-bible-book",
    "level": 26,
    "challenge_index": 3,
    "question_text": "TYPE THE BIBLE BOOK:\nWhile 2 Kings 21 records King Manasseh as the most wicked king in Judah's history without mentioning any repentance, which OTHER historical book uniquely records Manasseh's capture with hooks to Babylon, his humble prayer of repentance, and God's restoration of him to his throne in Jerusalem?",
    "options": [
      "2 Chronicles",
      "1 Chronicles",
      "Ezra",
      "Nehemiah"
    ],
    "correct_answer": "2 Chronicles",
    "explanation": "2 Chronicles 33 uniquely preserves the account of Manasseh's captivity, repentance, and spiritual restoration.",
    "reference": "2 Chronicles 33:10–17; 2 Kings 21:1–18",
    "metadata": {
      "question_type": "Type the Book",
      "is_typed": true,
      "clues": [
        "Focuses heavily on repentance and divine retribution.",
        "Records Manasseh removing the foreign gods and the idol from the house of the Lord upon his return.",
        "Second volume of the post-exilic priestly history."
      ],
      "hint": "Second Chronicles, chapter 33.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Second Chronicles",
        "2Chr"
      ],
      "stage": 6,
      "stage_title": "Book Connections",
      "level_theme": "Parallel Historical Accounts",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l26-c4",
    "game_slug": "find-the-bible-book",
    "level": 26,
    "challenge_index": 4,
    "question_text": "TWO BOOKS, ONE STORY:\nWhich TWO books conclude their narratives with the exact same identical historical paragraph detailing King Cyrus of Persia's decree in 538 BC: \"The Lord, the God of heaven, has given me all the kingdoms of the earth, and he has charged me to build him a house at Jerusalem, which is in Judah\"?",
    "options": [
      "2 Chronicles and Ezra",
      "1 Kings and 2 Kings",
      "Ezra and Nehemiah",
      "Jeremiah and Lamentations"
    ],
    "correct_answer": "2 Chronicles and Ezra",
    "explanation": "2 Chronicles 36:22–23 and Ezra 1:1–3 share the identical text of Cyrus' decree.",
    "reference": "2 Chronicles 36:22–23; Ezra 1:1–3",
    "metadata": {
      "question_type": "Two Books, One Story",
      "is_typed": false,
      "clues": [
        "The end of one book serves as the exact opening verses of the next book in canonical order.",
        "Demonstrates the continuity between the pre-exilic monarchy and post-exilic restoration.",
        "One closes the Chronicles; the other opens the rebuilding of the temple."
      ],
      "hint": "The end of 2 Chronicles and the beginning of Ezra.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "2 Chronicles & Ezra",
        "2Chr and Ezr"
      ],
      "stage": 6,
      "stage_title": "Book Connections",
      "level_theme": "Parallel Historical Accounts",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l26-c5",
    "game_slug": "find-the-bible-book",
    "level": 26,
    "challenge_index": 5,
    "question_text": "TYPE THE BIBLE BOOK:\nIn 2 Samuel 11–12, David's sin with Bathsheba and the murder of Uriah the Hittite are recorded in full, tragic detail. In which parallel historical book is the entire Bathsheba and Uriah narrative completely OMITTED, jumping straight from David's foreign wars to his military preparations for the temple?",
    "options": [
      "1 Chronicles",
      "2 Chronicles",
      "1 Kings",
      "Ezra"
    ],
    "correct_answer": "1 Chronicles",
    "explanation": "1 Chronicles 20:1 skips directly over the Bathsheba episode found in 2 Samuel 11–12, focusing on David's public covenant role.",
    "reference": "1 Chronicles 20:1–3; 2 Samuel 11:1–12:25",
    "metadata": {
      "question_type": "Type the Book",
      "is_typed": true,
      "clues": [
        "Written from a post-exilic priestly perspective emphasizing the idealized Davidic dynasty and temple worship.",
        "Omits David's internal family scandals (Amnon, Absalom, Adonijah).",
        "First volume of this two-part work."
      ],
      "hint": "First Chronicles; begins with 1.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "First Chronicles",
        "1Chr"
      ],
      "stage": 6,
      "stage_title": "Book Connections",
      "level_theme": "Parallel Historical Accounts",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l27-c1",
    "game_slug": "find-the-bible-book",
    "level": 27,
    "challenge_index": 1,
    "question_text": "TWO BOOKS, ONE STORY:\nWhich TWO books are connected by the apostolic citation on Pentecost: \"And in the last days it shall be, God declares, that I will pour out my Spirit on all flesh, and your sons and your daughters shall prophesy\"?",
    "options": [
      "Joel and Acts",
      "Amos and Luke",
      "Hosea and Romans",
      "Isaiah and Matthew"
    ],
    "correct_answer": "Joel and Acts",
    "explanation": "Peter in Acts 2:16–21 quotes Joel 2:28–32 to explain the outpouring of the Holy Spirit.",
    "reference": "Joel 2:28–32; Acts 2:16–21",
    "metadata": {
      "question_type": "Two Books, One Story",
      "is_typed": false,
      "clues": [
        "One is the Old Testament Minor Prophet who warned of the locust invasion.",
        "The other is the New Testament book recording Peter's Pentecost sermon in chapter 2.",
        "Identifies the miraculous speaking in tongues with ancient prophetic promise."
      ],
      "hint": "The prophet Joel and the Book of Acts.",
      "testament": "Both",
      "acceptedAlternatives": [
        "Joel & Acts"
      ],
      "stage": 6,
      "stage_title": "Book Connections",
      "level_theme": "Prophecy & Fulfillment",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l27-c2",
    "game_slug": "find-the-bible-book",
    "level": 27,
    "challenge_index": 2,
    "question_text": "TWO BOOKS, ONE STORY:\nWhich TWO books are linked by the quotation: \"Out of Egypt I called my son\", connecting Israel's national exodus to infant Jesus' safe return from Egypt after King Herod's death?",
    "options": [
      "Hosea and Matthew",
      "Micah and Luke",
      "Jeremiah and John",
      "Exodus and Mark"
    ],
    "correct_answer": "Hosea and Matthew",
    "explanation": "Matthew 2:15 quotes Hosea 11:1 (\"Out of Egypt I called my son\") regarding the Holy Family's return from Egypt.",
    "reference": "Hosea 11:1; Matthew 2:15",
    "metadata": {
      "question_type": "Two Books, One Story",
      "is_typed": false,
      "clues": [
        "One is an Old Testament prophet whose opening chapters deal with his marriage to Gomer (Hosea 11:1).",
        "The other is the opening Gospel of the New Testament citing the fulfillment in chapter 2:15.",
        "Demonstrates the typological relationship between Israel and the Messiah."
      ],
      "hint": "The prophet Hosea and the Gospel of Matthew.",
      "testament": "Both",
      "acceptedAlternatives": [
        "Hosea & Matthew"
      ],
      "stage": 6,
      "stage_title": "Book Connections",
      "level_theme": "Prophecy & Fulfillment",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l27-c3",
    "game_slug": "find-the-bible-book",
    "level": 27,
    "challenge_index": 3,
    "question_text": "TYPE THE BIBLE BOOK:\nIn Matthew 21 and John 12, Jesus' Triumphal Entry into Jerusalem riding on a donkey's colt is cited as fulfilling the prophecy: \"Rejoice greatly, O daughter of Zion! Shout aloud, O daughter of Jerusalem! Behold, your king is coming to you... humble and mounted on a donkey.\" In which Old Testament book was this prophecy originally recorded?",
    "options": [
      "Zechariah",
      "Malachi",
      "Haggai",
      "Micah"
    ],
    "correct_answer": "Zechariah",
    "explanation": "Zechariah 9:9 contains the prophecy of the humble King riding on a colt into Jerusalem.",
    "reference": "Zechariah 9:9; Matthew 21:4–5; John 12:14–15",
    "metadata": {
      "question_type": "Type the Book",
      "is_typed": true,
      "clues": [
        "Written by the prophet who also foretold the 30 pieces of silver.",
        "Found in chapter 9 verse 9.",
        "Penultimate book of the Old Testament."
      ],
      "hint": "Nine-letter post-exilic prophet; begins with Zech-.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Zech"
      ],
      "stage": 6,
      "stage_title": "Book Connections",
      "level_theme": "Prophecy & Fulfillment",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l27-c4",
    "game_slug": "find-the-bible-book",
    "level": 27,
    "challenge_index": 4,
    "question_text": "TWO BOOKS, ONE STORY:\nWhich TWO books are connected by the quotation: \"A voice is heard in Ramah, lamentation and bitter weeping. Rachel is weeping for her children; she refuses to be comforted... because they are no more\"?",
    "options": [
      "Jeremiah and Matthew",
      "Isaiah and Luke",
      "Ezekiel and Mark",
      "Lamentations and John"
    ],
    "correct_answer": "Jeremiah and Matthew",
    "explanation": "Matthew 2:17–18 quotes Jeremiah 31:15 regarding the slaughter of the innocents in Bethlehem.",
    "reference": "Jeremiah 31:15; Matthew 2:17–18",
    "metadata": {
      "question_type": "Two Books, One Story",
      "is_typed": false,
      "clues": [
        "One is an Old Testament major prophet speaking of the exiles passing Ramah on their way to Babylon (ch 31).",
        "The other is a New Testament Gospel citing the fulfillment when King Herod slaughtered male infants in Bethlehem (ch 2).",
        "Both connect maternal weeping with divine redemptive purpose."
      ],
      "hint": "The prophet Jeremiah and the Gospel of Matthew.",
      "testament": "Both",
      "acceptedAlternatives": [
        "Jeremiah & Matthew"
      ],
      "stage": 6,
      "stage_title": "Book Connections",
      "level_theme": "Prophecy & Fulfillment",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l27-c5",
    "game_slug": "find-the-bible-book",
    "level": 27,
    "challenge_index": 5,
    "question_text": "TYPE THE BIBLE BOOK:\nIn Acts 1:20, Peter quotes two different psalms to justify choosing a successor to Judas Iscariot: \"Let his encampment become desolate, and let there be no one to dwell in it\" and \"Let another take his office.\" In which Old Testament book are these original royal and imprecatory prayers found?",
    "options": [
      "Psalms",
      "Psalm",
      "Proverbs",
      "Isaiah"
    ],
    "correct_answer": "Psalms",
    "explanation": "Peter in Acts 1:20 cites Psalm 69:25 and Psalm 109:8 concerning Judas Iscariot and Matthias' appointment.",
    "reference": "Psalm 69:25; 109:8; Acts 1:20",
    "metadata": {
      "question_type": "Type the Book",
      "is_typed": true,
      "clues": [
        "The primary prayer book of the Old Testament.",
        "Taken from Psalm 69:25 and Psalm 109:8.",
        "Contains 150 chapters."
      ],
      "hint": "The Book of Psalms.",
      "testament": "Both",
      "acceptedAlternatives": [
        "Psalm",
        "Psa"
      ],
      "stage": 6,
      "stage_title": "Book Connections",
      "level_theme": "Prophecy & Fulfillment",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l28-c1",
    "game_slug": "find-the-bible-book",
    "level": 28,
    "challenge_index": 1,
    "question_text": "Melchizedek appears as a living historical king-priest in Genesis 14, and as an eternal messianic prototype in Psalm 110. Which New Testament epistle devotes extensive chapters (5–7) to developing his theological significance as a type of Christ's priesthood?",
    "options": [
      "Hebrews",
      "Romans",
      "Galatians",
      "Ephesians"
    ],
    "correct_answer": "Hebrews",
    "explanation": "Hebrews 7 provides the comprehensive New Testament theological exposition of Melchizedek.",
    "reference": "Genesis 14:18–20; Psalm 110:4; Hebrews 7:1–17",
    "metadata": {
      "question_type": "Find the Book from a Scripture Clue",
      "is_typed": false,
      "clues": [
        "Notes that Melchizedek has no recorded genealogy, beginning of days, or end of life.",
        "Demonstrates that Levi paid tithes to Melchizedek while still in the loins of Abraham.",
        "Epistle written to Jewish believers tempted to retreat to temple sacrifices."
      ],
      "hint": "Epistle to the Hebrews.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Heb"
      ],
      "stage": 6,
      "stage_title": "Book Connections",
      "level_theme": "Shared Characters",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l28-c2",
    "game_slug": "find-the-bible-book",
    "level": 28,
    "challenge_index": 2,
    "question_text": "Elijah the prophet lived in 1 & 2 Kings, but appears prominently across the New Testament. In which New Testament epistle is Elijah held up as an example of earnest prayer: \"Elijah was a man with a nature like ours, and he prayed fervently that it might not rain, and for three years and six months it did not rain on the earth\"?",
    "options": [
      "James",
      "Hebrews",
      "1 Peter",
      "1 John"
    ],
    "correct_answer": "James",
    "explanation": "James 5:17–18 cites Elijah's prayers concerning drought and rain to encourage persistent Christian prayer.",
    "reference": "James 5:17–18; 1 Kings 17:1; 18:41–45",
    "metadata": {
      "question_type": "Find the Book from a Scripture Clue",
      "is_typed": false,
      "clues": [
        "Followed by: \"Then he prayed again, and heaven gave rain, and the earth bore its fruit.\"",
        "Contains the promise: \"The prayer of a righteous person has great power as it is working.\"",
        "Five-chapter practical wisdom epistle."
      ],
      "hint": "Five-letter epistle of James; chapter 5.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Jas"
      ],
      "stage": 6,
      "stage_title": "Book Connections",
      "level_theme": "Shared Characters",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l28-c3",
    "game_slug": "find-the-bible-book",
    "level": 28,
    "challenge_index": 3,
    "question_text": "TYPE THE BIBLE BOOK:\nBalaam the pagan diviner who loved gain is introduced in Numbers 22–24. In which New Testament epistle does the author warn against false teachers who \"have followed the way of Balaam, the son of Beor, who loved gain from wrongdoing, but was rebuked for his own transgression; a speechless donkey spoke with human voice and restrained the prophet's madness\"?",
    "options": [
      "2 Peter",
      "1 Peter",
      "Jude",
      "Revelation"
    ],
    "correct_answer": "2 Peter",
    "explanation": "2 Peter 2:15–16 explicitly refers to Balaam and his speaking donkey as a warning against greed.",
    "reference": "2 Peter 2:15–16; Numbers 22:21–35",
    "metadata": {
      "question_type": "Type the Book",
      "is_typed": true,
      "clues": [
        "Peter's final three-chapter epistle.",
        "Also discusses Noah and Lot as examples of deliverance from judgment.",
        "Chapter 2 deals with false teachers."
      ],
      "hint": "Second Epistle of Peter; chapter 2.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Second Peter",
        "2Pet"
      ],
      "stage": 6,
      "stage_title": "Book Connections",
      "level_theme": "Shared Characters",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l28-c4",
    "game_slug": "find-the-bible-book",
    "level": 28,
    "challenge_index": 4,
    "question_text": "In which prophetic book does God conclude the Old Testament by promising: \"Behold, I will send you Elijah the prophet before the great and awesome day of the Lord comes. And he will turn the hearts of fathers to their children and the hearts of children to their fathers\"?",
    "options": [
      "Malachi",
      "Zechariah",
      "Haggai",
      "Micah"
    ],
    "correct_answer": "Malachi",
    "explanation": "Malachi 4:5–6 foretells the return of Elijah, fulfilling in John the Baptist's ministry.",
    "reference": "Malachi 4:5–6; Matthew 11:14; Luke 1:17",
    "metadata": {
      "question_type": "Find the Book from a Scripture Clue",
      "is_typed": false,
      "clues": [
        "Jesus identified John the Baptist as the fulfillment of this prophecy in Matthew 11:14.",
        "The angel Gabriel quoted this exact verse to Zechariah in the temple in Luke 1:17.",
        "The final book of the Old Testament."
      ],
      "hint": "Last book of the Old Testament; starts with M.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Mal"
      ],
      "stage": 6,
      "stage_title": "Book Connections",
      "level_theme": "Shared Characters",
      "difficulty": "easy",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l28-c5",
    "game_slug": "find-the-bible-book",
    "level": 28,
    "challenge_index": 5,
    "question_text": "TYPE THE BIBLE BOOK:\nIn which New Testament epistle does the author contrast two mountains and two covenant women, using Hagar and Sarah as an allegory for the Old Covenant of Sinai leading to slavery versus the Jerusalem above which is free and is our mother?",
    "options": [
      "Galatians",
      "Romans",
      "Hebrews",
      "Ephesians"
    ],
    "correct_answer": "Galatians",
    "explanation": "Galatians 4:21–31 is Paul's famous allegory of Hagar and Sarah representing law versus grace.",
    "reference": "Galatians 4:21–31; Genesis 16; 21",
    "metadata": {
      "question_type": "Type the Book",
      "is_typed": true,
      "clues": [
        "Paul writes: \"Now Hagar is Mount Sinai in Arabia; she corresponds to the present Jerusalem, for she is in slavery with her children.\"",
        "Concludes: \"So, brothers, we are not children of the slave but of the free woman.\"",
        "Found in chapter 4 of this letter."
      ],
      "hint": "Epistle to the Galatians; chapter 4.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Gal"
      ],
      "stage": 6,
      "stage_title": "Book Connections",
      "level_theme": "Shared Characters",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l29-c1",
    "game_slug": "find-the-bible-book",
    "level": 29,
    "challenge_index": 1,
    "question_text": "TWO BOOKS, ONE STORY:\nWhich TWO Pauline epistles are known as close \"sister epistles\", written around the same time during Paul's first Roman imprisonment, carried by the courier Tychicus, and sharing dozens of nearly identical phrases concerning the Body of Christ, marriage, and household relationships?",
    "options": [
      "Ephesians and Colossians",
      "Romans and Galatians",
      "1 Timothy and Titus",
      "Philippians and Philemon"
    ],
    "correct_answer": "Ephesians and Colossians",
    "explanation": "Ephesians and Colossians share remarkable structural, verbal, and thematic parallels, carried together by Tychicus.",
    "reference": "Ephesians 6:21–22; Colossians 4:7–8",
    "metadata": {
      "question_type": "Two Books, One Story",
      "is_typed": false,
      "clues": [
        "One emphasizes Christ as the Head of the Church (ch 1:18).",
        "The other emphasizes the Church as the Body of Christ (ch 1:22–23).",
        "Both address cities in Asia Minor (one coastal, one in the Lycus Valley)."
      ],
      "hint": "Ephesians and Colossians.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Ephesians & Colossians",
        "Eph and Col"
      ],
      "stage": 6,
      "stage_title": "Book Connections",
      "level_theme": "Sister Epistles",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l29-c2",
    "game_slug": "find-the-bible-book",
    "level": 29,
    "challenge_index": 2,
    "question_text": "TWO BOOKS, ONE STORY:\nWhich TWO General Epistles share extraordinary verbal parallels and shared themes, both warning against sensual false teachers who crept in unnoticed, citing the fallen angels kept in gloomy darkness, the judgment of Sodom and Gomorrah, and the way of Balaam?",
    "options": [
      "2 Peter and Jude",
      "1 Peter and 2 Peter",
      "James and 1 Peter",
      "1 John and 2 John"
    ],
    "correct_answer": "2 Peter and Jude",
    "explanation": "2 Peter 2 and the Epistle of Jude share striking parallels in vocabulary, structure, and historical illustrations.",
    "reference": "2 Peter 2:1–22; Jude 1:4–16",
    "metadata": {
      "question_type": "Two Books, One Story",
      "is_typed": false,
      "clues": [
        "One is a three-chapter letter by the Apostle Peter.",
        "The other is a single-chapter letter by the brother of James.",
        "One predicts false teachers will arise; the other states they have already crept in."
      ],
      "hint": "2 Peter (chapter 2) and the Book of Jude.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "2 Peter & Jude",
        "2Pet and Jud"
      ],
      "stage": 6,
      "stage_title": "Book Connections",
      "level_theme": "Sister Epistles",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l29-c3",
    "game_slug": "find-the-bible-book",
    "level": 29,
    "challenge_index": 3,
    "question_text": "TYPE THE BIBLE BOOK:\n1 Timothy and Titus are sister Pastoral Epistles outlining qualifications for overseers (elders). While 1 Timothy addresses a coworker ministering in the major metropolis of Ephesus, which island's rugged churches was Titus assigned to organize: \"This is why I left you in..., so that you might put what remained into order and appoint elders in every town\"?",
    "options": [
      "Titus",
      "1 Timothy",
      "Philemon",
      "Colossians"
    ],
    "correct_answer": "Titus",
    "explanation": "The Epistle to Titus was written to Paul's delegate Titus on the island of Crete.",
    "reference": "Titus 1:5, 12",
    "metadata": {
      "question_type": "Type the Book",
      "is_typed": true,
      "clues": [
        "A famous Mediterranean island.",
        "Home to the proverb: \"Cretans are always liars, evil beasts, lazy gluttons.\"",
        "Epistle named after Titus."
      ],
      "hint": "Paul's letter to Titus.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Tit"
      ],
      "stage": 6,
      "stage_title": "Book Connections",
      "level_theme": "Sister Epistles",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l29-c4",
    "game_slug": "find-the-bible-book",
    "level": 29,
    "challenge_index": 4,
    "question_text": "TWO BOOKS, ONE STORY:\nWhich TWO consecutive single-chapter Johannine epistles open with the author identifying himself simply as \"the elder\" (ho presbyteros), one written to \"the elect lady and her children\", and the other written to \"the beloved Gaius\"?",
    "options": [
      "2 John and 3 John",
      "1 John and 2 John",
      "Philemon and Jude",
      "1 Peter and 2 Peter"
    ],
    "correct_answer": "2 John and 3 John",
    "explanation": "2 John and 3 John are short companion letters by the Apostle John, sharing the opening title \"the elder\" and closing greetings.",
    "reference": "2 John 1:1, 12; 3 John 1:1, 13–14",
    "metadata": {
      "question_type": "Two Books, One Story",
      "is_typed": false,
      "clues": [
        "Both warn against deceivers who do not confess the coming of Jesus Christ in the flesh.",
        "Both conclude: \"Though I have much to write to you, I would rather not use paper and ink. Instead I hope to come to you and talk face to face.\"",
        "Located directly before Jude."
      ],
      "hint": "Second and Third John.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "2 John & 3 John",
        "2Jn and 3Jn"
      ],
      "stage": 6,
      "stage_title": "Book Connections",
      "level_theme": "Sister Epistles",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l29-c5",
    "game_slug": "find-the-bible-book",
    "level": 29,
    "challenge_index": 5,
    "question_text": "TYPE THE BIBLE BOOK:\nIn Colossians 4:16, Paul instructs: \"And when this letter has been read among you, have it also read in the church of the Laodiceans; and see that you also read the letter from Laodicea.\" Many scholars identify the \"letter from Laodicea\" as a circular letter known in our canon by which title?",
    "options": [
      "Ephesians",
      "Philippians",
      "Galatians",
      "Philemon"
    ],
    "correct_answer": "Ephesians",
    "explanation": "Most scholars identify the encyclical letter mentioned in Colossians 4:16 with the Epistle to the Ephesians.",
    "reference": "Colossians 4:16; Ephesians 1:1",
    "metadata": {
      "question_type": "Type the Book",
      "is_typed": true,
      "clues": [
        "Carried to Asia Minor by Tychicus along with Colossians.",
        "Earliest manuscripts omit the phrase \"in Ephesus\" in verse 1:1, showing it was circulated among all regional churches.",
        "Six chapters outlining the spiritual blessings in heavenly places."
      ],
      "hint": "The Epistle to the Ephesians.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Eph"
      ],
      "stage": 6,
      "stage_title": "Sister Epistles",
      "level_theme": "Sister Epistles",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l30-c1",
    "game_slug": "find-the-bible-book",
    "level": 30,
    "challenge_index": 1,
    "question_text": "BOOK CONNECTIONS BOSS:\nI contain an account of the prophet Jeremiah purchasing an ancestral field in Anathoth from his cousin Hanamel for seventeen shekels of silver while the Babylonian army was actively besieging Jerusalem. God commanded me to put the deeds in an earthenware vessel so they would last a long time, promising: \"Houses and fields and vineyards shall again be bought in this land.\" In which book is this recorded?",
    "options": [
      "Jeremiah",
      "Ezekiel",
      "Isaiah",
      "2 Kings"
    ],
    "correct_answer": "Jeremiah",
    "explanation": "Jeremiah 32 describes Jeremiah buying the field at Anathoth as an act of prophetic confidence in God's restoration.",
    "reference": "Jeremiah 32:6–15",
    "metadata": {
      "question_type": "The Book Detective",
      "is_typed": false,
      "clues": [
        "A supreme demonstration of prophetic faith in Israel's future restoration after the exile.",
        "Baruch son of Neriah sealed and preserved the purchase deed.",
        "Found in chapter 32 of this major prophetic book."
      ],
      "hint": "Book bearing the name of Jeremiah; chapter 32.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Jer"
      ],
      "stage": 6,
      "stage_title": "Book Connections",
      "level_theme": "Book Connections Boss",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l30-c2",
    "game_slug": "find-the-bible-book",
    "level": 30,
    "challenge_index": 2,
    "question_text": "TWO BOOKS, ONE STORY:\nWhich TWO books provide parallel narrative accounts of King Uzziah (Azariah) of Judah reigning 52 years, prospering in agriculture and military fortifications, but being struck with leprosy on his forehead in the temple after arrogantly attempting to burn incense on the golden altar?",
    "options": [
      "2 Kings and 2 Chronicles",
      "1 Kings and 1 Chronicles",
      "2 Samuel and 1 Kings",
      "Ezra and Nehemiah"
    ],
    "correct_answer": "2 Kings and 2 Chronicles",
    "explanation": "Uzziah's reign and his temple leprosy are recorded in 2 Kings 15 and 2 Chronicles 26.",
    "reference": "2 Kings 15:1–7; 2 Chronicles 26:16–21",
    "metadata": {
      "question_type": "Two Books, One Story",
      "is_typed": false,
      "clues": [
        "One book notes he was quarantined in a separate house until death (2 Kings 15).",
        "The other book provides the detailed scene of eighty valiant priests opposing him (2 Chronicles 26).",
        "Isaiah saw his throne room vision in the year this king died."
      ],
      "hint": "Second Kings and Second Chronicles.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "2 Kings & 2 Chronicles",
        "2Kgs and 2Chr"
      ],
      "stage": 6,
      "stage_title": "Book Connections",
      "level_theme": "Book Connections Boss",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l30-c3",
    "game_slug": "find-the-bible-book",
    "level": 30,
    "challenge_index": 3,
    "question_text": "TYPE THE BIBLE BOOK:\nIn Matthew 27:9, Matthew attributes the purchase of the potter's field for thirty pieces of silver to the prophet Jeremiah: \"Then was fulfilled what had been spoken by the prophet Jeremiah...\" Which Old Testament book contains Jeremiah's visit to the potter's house and his purchase of the earthenware flask in the Valley of Hinnom that provided the conceptual background for Matthew's composite citation?",
    "options": [
      "Jeremiah",
      "Zechariah",
      "Isaiah",
      "Ezekiel"
    ],
    "correct_answer": "Jeremiah",
    "explanation": "Matthew 27:9 cites Jeremiah because Jeremiah 18–19 (the potter and the flask of blood) and Jeremiah 32 (buying the field with silver) provided the typological foundation.",
    "reference": "Jeremiah 18:1–6; 19:1–11; 32:6–9; Matthew 27:9–10",
    "metadata": {
      "question_type": "Type the Book",
      "is_typed": true,
      "clues": [
        "Chapter 18: \"Arise, and go down to the potter's house, and there I will let you hear my words.\"",
        "Chapter 19: Buying the potter's earthenware flask to smash at Topheth.",
        "Chapter 32: Purchasing the ancestral field with silver.",
        "Major prophet of 52 chapters."
      ],
      "hint": "The Book of Jeremiah.",
      "testament": "Both",
      "acceptedAlternatives": [
        "Jer"
      ],
      "stage": 6,
      "stage_title": "Book Connections",
      "level_theme": "Book Connections Boss",
      "difficulty": "master",
      "timerSeconds": 20,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l30-c4",
    "game_slug": "find-the-bible-book",
    "level": 30,
    "challenge_index": 4,
    "question_text": "THE BOOK DETECTIVE:\nI contain an account of two royal princes, Sharezer and Adrammelech, who struck down their father King Sennacherib of Assyria with the sword while he was worshiping in the house of Nisroch his god, after which their brother Esarhaddon reigned in his place. In which book is this recorded?",
    "options": [
      "2 Kings",
      "1 Kings",
      "1 Chronicles",
      "2 Chronicles"
    ],
    "correct_answer": "2 Kings",
    "explanation": "2 Kings 19:37 records Sennacherib's assassination by his sons in Nineveh.",
    "reference": "2 Kings 19:36–37; Isaiah 37:37–38",
    "metadata": {
      "question_type": "The Book Detective",
      "is_typed": false,
      "clues": [
        "Fulfilled the prophecy of Isaiah that God would put a spirit in Sennacherib so that he would return to his own land and fall by the sword.",
        "Occurred after the angel of the Lord destroyed his army of 185,000.",
        "Found in chapter 19 of this book."
      ],
      "hint": "Second Kings, chapter 19.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Second Kings",
        "2Kgs",
        "Isaiah"
      ],
      "stage": 6,
      "stage_title": "Book Connections",
      "level_theme": "Book Connections Boss",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l30-c5",
    "game_slug": "find-the-bible-book",
    "level": 30,
    "challenge_index": 5,
    "question_text": "TYPE THE BIBLE BOOK:\nIn Revelation 2:14, Jesus warns the church at Pergamum: \"You have some there who hold the teaching of Balaam, who taught Balak to put a stumbling block before the sons of Israel, so that they might eat food sacrificed to idols and practice sexual immorality.\" Which Old Testament book contains the original narrative of the women of Moab seducing Israel at Baal-peor through Balaam's counsel?",
    "options": [
      "Numbers",
      "Deuteronomy",
      "Exodus",
      "Joshua"
    ],
    "correct_answer": "Numbers",
    "explanation": "Numbers 25 and 31:16 record the sin of Baal-peor instigated by Balaam, referenced by Christ in Revelation 2:14.",
    "reference": "Numbers 25:1–9; 31:16; Revelation 2:14",
    "metadata": {
      "question_type": "Type the Book",
      "is_typed": true,
      "clues": [
        "Occurred at Shittim near the end of the wilderness journey.",
        "Phinehas the priest took a spear and ended the plague.",
        "Fourth book of the Pentateuch, chapter 25 and 31:16."
      ],
      "hint": "Fourth book of Moses; starts with Num-.",
      "testament": "Both",
      "acceptedAlternatives": [
        "Num"
      ],
      "stage": 6,
      "stage_title": "Book Connections",
      "level_theme": "Book Connections Boss",
      "difficulty": "master",
      "timerSeconds": 20,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l31-c1",
    "game_slug": "find-the-bible-book",
    "level": 31,
    "challenge_index": 1,
    "question_text": "THE BOOK DETECTIVE:\nI am the shortest book in the entire Old Testament, containing exactly 21 verses. I proclaim the total downfall of the mountain kingdom of Edom for their violence and gloating against their brother Jacob when foreigners entered Jerusalem's gates. Which book am I?",
    "options": [
      "Obadiah",
      "Nahum",
      "Habakkuk",
      "Haggai"
    ],
    "correct_answer": "Obadiah",
    "explanation": "Obadiah contains 21 verses condemning Edom and proclaiming the triumph of Mount Zion.",
    "reference": "Obadiah 1:1, 15, 21",
    "metadata": {
      "question_type": "The Book Detective",
      "is_typed": false,
      "clues": [
        "Pronounces judgment on Mount Seir (Esau).",
        "Declares: \"As you have done, it shall be done to you; your deeds shall return on your own head.\"",
        "Concludes: \"And the kingdom shall be the Lord's.\"",
        "Fourth of the Twelve Minor Prophets."
      ],
      "hint": "Shortest book of the Old Testament; seven letters; begins with O.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Obad"
      ],
      "stage": 7,
      "stage_title": "Forgotten Books",
      "level_theme": "Obadiah & Nahum",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l31-c2",
    "game_slug": "find-the-bible-book",
    "level": 31,
    "challenge_index": 2,
    "question_text": "THE BOOK DETECTIVE:\nI deliver a graphic oracle concerning the final destruction of the bloody Assyrian capital of Nineveh: \"Woe to the bloody city, all full of lies and plunder—no end to the prey! The crack of the whip, and rumble of the wheel, galloping horse and bounding chariot! Horsemen charging, flashing sword and glittering spear, hosts of slain, heaps of corpses.\" Which book am I?",
    "options": [
      "Nahum",
      "Jonah",
      "Zephaniah",
      "Habakkuk"
    ],
    "correct_answer": "Nahum",
    "explanation": "Nahum vividly foretells the military destruction of Nineveh in 612 BC.",
    "reference": "Nahum 1:1; 3:1–3",
    "metadata": {
      "question_type": "The Book Detective",
      "is_typed": false,
      "clues": [
        "Opens: \"An oracle concerning Nineveh. The book of the vision of... of Elkosh.\"",
        "Written approximately a century after Jonah's ministry when Nineveh had relapsed into brutality.",
        "Three chapters in the Minor Prophets."
      ],
      "hint": "Five-letter prophet of Elkosh; starts with N.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Nah"
      ],
      "stage": 7,
      "stage_title": "Forgotten Books",
      "level_theme": "Obadiah & Nahum",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l31-c3",
    "game_slug": "find-the-bible-book",
    "level": 31,
    "challenge_index": 3,
    "question_text": "TYPE THE BIBLE BOOK:\nWhich book contains this celebrated messianic herald verse cited by both Isaiah and the Apostle Paul: \"Behold, upon the mountains, the feet of him who brings good news, who publishes peace! Keep your feasts, O Judah; fulfill your vows, for never again shall the worthless pass through you; he is utterly cut off\"?",
    "options": [
      "Nahum",
      "Isaiah",
      "Romans",
      "Micah"
    ],
    "correct_answer": "Nahum",
    "explanation": "Nahum 1:15 proclaims the good news of peace upon the mountains of Judah.",
    "reference": "Nahum 1:15; Isaiah 52:7; Romans 10:15",
    "metadata": {
      "question_type": "Type the Book",
      "is_typed": true,
      "clues": [
        "Occurs at the end of chapter 1 of this three-chapter prophetic book.",
        "Announces relief to Judah following the downfall of the Assyrian oppressor.",
        "Written by the prophet from Elkosh."
      ],
      "hint": "Five-letter book name; starts with N; ends with -hum.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Nah"
      ],
      "stage": 7,
      "stage_title": "Forgotten Books",
      "level_theme": "Obadiah & Nahum",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l31-c4",
    "game_slug": "find-the-bible-book",
    "level": 31,
    "challenge_index": 4,
    "question_text": "THE BOOK DETECTIVE:\nI compare the proud imperial fortress of Nineveh to the ancient Egyptian city of Thebes (No-Amon), asking: \"Are you better than Thebes that sat by the Nile, with water around her, her rampart a sea, and water her wall? Cush was her strength; Egypt too, and that without limit... Yet she became an exile; she went into captivity.\" Which book am I?",
    "options": [
      "Nahum",
      "Ezekiel",
      "Jeremiah",
      "Zephaniah"
    ],
    "correct_answer": "Nahum",
    "explanation": "Nahum 3:8 cites the fall of Thebes (No-Amon) to prove Nineveh cannot escape divine judgment.",
    "reference": "Nahum 3:8–10",
    "metadata": {
      "question_type": "The Book Detective",
      "is_typed": false,
      "clues": [
        "Refers to the historical Assyrian sack of Thebes in 663 BC.",
        "Warns that the conqueror Nineveh will suffer the exact same fate.",
        "Found in chapter 3 of this book."
      ],
      "hint": "Minor Prophet of three chapters; starts with N.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Nah"
      ],
      "stage": 7,
      "stage_title": "Forgotten Books",
      "level_theme": "Obadiah & Nahum",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l31-c5",
    "game_slug": "find-the-bible-book",
    "level": 31,
    "challenge_index": 5,
    "question_text": "TYPE THE BIBLE BOOK:\nWhich single-chapter book contains this specific geographic detail: \"The house of Jacob shall be a fire, and the house of Joseph a flame, and the house of Esau stubble... Those of the Negeb shall possess Mount Esau, and those of the Shephelah shall possess the land of the Philistines... and saviors shall go up to Mount Zion\"?",
    "options": [
      "Obadiah",
      "Haggai",
      "Zephaniah",
      "Malachi"
    ],
    "correct_answer": "Obadiah",
    "explanation": "Obadiah 1:18–21 concludes with Israel's territorial recovery and the sovereignty of the Lord.",
    "reference": "Obadiah 1:18–21",
    "metadata": {
      "question_type": "Type the Book",
      "is_typed": true,
      "clues": [
        "Focuses entirely on the destruction of Edom and the triumph of the Kingdom of God.",
        "Written by a prophet whose Hebrew name means \"Servant of the Lord\" (Yahweh).",
        "Placed fourth among the Twelve Minor Prophets."
      ],
      "hint": "Seven letters; starts with Ob-; shortest Old Testament book.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Obad"
      ],
      "stage": 7,
      "stage_title": "Forgotten Books",
      "level_theme": "Obadiah & Nahum",
      "difficulty": "master",
      "timerSeconds": 20,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l32-c1",
    "game_slug": "find-the-bible-book",
    "level": 32,
    "challenge_index": 1,
    "question_text": "THE BOOK DETECTIVE:\nI open with a bold theological wrestling match: \"O Lord, how long shall I cry for help, and you will not hear? Or cry to you 'Violence!' and you will not save?\" When God replies that He is raising up the bitter and hasty Chaldeans whose horses are swifter than leopards, I take my stand at my watchpost to await His second answer. Which book am I?",
    "options": [
      "Habakkuk",
      "Zephaniah",
      "Micah",
      "Nahum"
    ],
    "correct_answer": "Habakkuk",
    "explanation": "The Book of Habakkuk documents the prophet's dialogue with God regarding divine justice and the Babylonian invasion.",
    "reference": "Habakkuk 1:1–6; 2:1–4; 3:1–19",
    "metadata": {
      "question_type": "The Book Detective",
      "is_typed": false,
      "clues": [
        "Contains five prophetic \"woes\" against greedy extortion, unjust gain, building cities with blood, drunkenness, and trusting carved idols.",
        "Features the vision written plainly on tablets: \"The righteous shall live by his faith.\"",
        "Concludes with an ecstatic psalm set to stringed instruments."
      ],
      "hint": "Minor Prophet beginning with Hab-.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Hab"
      ],
      "stage": 7,
      "stage_title": "Forgotten Books",
      "level_theme": "Habakkuk & Zephaniah",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l32-c2",
    "game_slug": "find-the-bible-book",
    "level": 32,
    "challenge_index": 2,
    "question_text": "THE BOOK DETECTIVE:\nI trace my ancestry four generations back to King Hezekiah, prophesying in the days of Josiah: \"The great day of the Lord is near, near and hastening fast... A day of wrath is that day, a day of distress and anguish, a day of ruin and devastation, a day of darkness and gloom, a day of clouds and thick darkness.\" Which book am I?",
    "options": [
      "Zephaniah",
      "Habakkuk",
      "Haggai",
      "Zechariah"
    ],
    "correct_answer": "Zephaniah",
    "explanation": "Zephaniah proclaims the universal and imminent Day of the Lord against Judah and surrounding nations.",
    "reference": "Zephaniah 1:1, 12, 14–15; 2:3",
    "metadata": {
      "question_type": "The Book Detective",
      "is_typed": false,
      "clues": [
        "Warns those who say in their hearts: \"The Lord will not do good, nor will he do ill.\"",
        "Commands: \"Seek the Lord, all you humble of the land... seek righteousness; seek humility; perhaps you may be hidden on the day of the anger of the Lord.\"",
        "Ninth of the Twelve Minor Prophets."
      ],
      "hint": "Nine-letter name starting with Z; precedes Haggai.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Zeph"
      ],
      "stage": 7,
      "stage_title": "Forgotten Books",
      "level_theme": "Habakkuk & Zephaniah",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l32-c3",
    "game_slug": "find-the-bible-book",
    "level": 32,
    "challenge_index": 3,
    "question_text": "TYPE THE BIBLE BOOK:\nWhich book contains this tender prophecy of divine joy over the redeemed remnant: \"The Lord your God is in your midst, a mighty one who will save; he will rejoice over you with gladness; he will quiet you by his love; he will exult over you with loud singing\"?",
    "options": [
      "Zephaniah",
      "Habakkuk",
      "Micah",
      "Hosea"
    ],
    "correct_answer": "Zephaniah",
    "explanation": "Zephaniah 3:17 portrays God exulting over His redeemed people with singing.",
    "reference": "Zephaniah 3:9, 14–17",
    "metadata": {
      "question_type": "Type the Book",
      "is_typed": true,
      "clues": [
        "Found in chapter 3 verse 17.",
        "Promises to change the speech of the peoples to a pure speech that all may call upon the name of the Lord.",
        "Three-chapter Minor Prophet whose author was a great-great-grandson of King Hezekiah."
      ],
      "hint": "Starts with Z; nine letters.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Zeph"
      ],
      "stage": 7,
      "stage_title": "Forgotten Books",
      "level_theme": "Habakkuk & Zephaniah",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l32-c4",
    "game_slug": "find-the-bible-book",
    "level": 32,
    "challenge_index": 4,
    "question_text": "THE BOOK DETECTIVE:\nI contain this majestic description of God's theophany: \"God came from Teman, and the Holy One from Mount Paran. His splendor covered the heavens, and the earth was full of his praise. His brightness was like the light; rays flashed from his hand; and there he veiled his power. Before him went pestilence, and plague followed at his heels.\" Which book am I?",
    "options": [
      "Habakkuk",
      "Zephaniah",
      "Nahum",
      "Micah"
    ],
    "correct_answer": "Habakkuk",
    "explanation": "Habakkuk 3 describes the sublime appearance of the Lord marching from Teman and Paran in majesty.",
    "reference": "Habakkuk 3:3–5, 11",
    "metadata": {
      "question_type": "The Book Detective",
      "is_typed": false,
      "clues": [
        "Describes the eternal mountains scattered and the sun and moon standing still in their place.",
        "Spoken as a prayer of the prophet upon Shigionoth in chapter 3.",
        "Concludes with deer's feet upon high places."
      ],
      "hint": "Book containing Habakkuk's prayer song.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Hab"
      ],
      "stage": 7,
      "stage_title": "Forgotten Books",
      "level_theme": "Habakkuk & Zephaniah",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l32-c5",
    "game_slug": "find-the-bible-book",
    "level": 32,
    "challenge_index": 5,
    "question_text": "TYPE THE BIBLE BOOK:\nIn which book does God pronounce judgment upon those who swear by the Lord and also swear by Milcom (Molech), and upon \"the men who are complacent, those who say in their hearts, 'The Lord will not do good, nor will he do ill'\"?",
    "options": [
      "Zephaniah",
      "Habakkuk",
      "Haggai",
      "Nahum"
    ],
    "correct_answer": "Zephaniah",
    "explanation": "Zephaniah 1 condemns syncretism with Milcom and practical atheism among Jerusalem's elite.",
    "reference": "Zephaniah 1:5, 10–12",
    "metadata": {
      "question_type": "Type the Book",
      "is_typed": true,
      "clues": [
        "Pronounces judgment on the fish gate, the second quarter, and the Mortar district of Jerusalem.",
        "Names the prophet who was contemporary with young King Josiah.",
        "Contains 3 chapters; situated right before Haggai."
      ],
      "hint": "Begins with Z; nine letters.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Zeph"
      ],
      "stage": 7,
      "stage_title": "Forgotten Books",
      "level_theme": "Habakkuk & Zephaniah",
      "difficulty": "master",
      "timerSeconds": 20,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l33-c1",
    "game_slug": "find-the-bible-book",
    "level": 33,
    "challenge_index": 1,
    "question_text": "THE BOOK DETECTIVE:\nI contain four short, dated sermons preached in 520 BC to Governor Zerubbabel and High Priest Joshua. I confront the community: \"Consider your ways. You have sown much, and harvested little. You eat, but you never have enough... and he who earns wages does so to put them into a bag with holes. Go up to the hills and bring wood and build the house, that I may take pleasure in it.\" Which book am I?",
    "options": [
      "Haggai",
      "Zechariah",
      "Malachi",
      "Ezra"
    ],
    "correct_answer": "Haggai",
    "explanation": "Haggai motivated the returned Jewish exiles to rebuild the neglected temple of the Lord.",
    "reference": "Haggai 1:5–8; 2:9, 23",
    "metadata": {
      "question_type": "The Book Detective",
      "is_typed": false,
      "clues": [
        "Two chapters in length.",
        "Promises that \"The latter glory of this house shall be greater than the former.\"",
        "Concludes with God promising to make Zerubbabel \"like a signet ring, for I have chosen you.\""
      ],
      "hint": "Two-chapter post-exilic book; starts with H.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Hag"
      ],
      "stage": 7,
      "stage_title": "Forgotten Books",
      "level_theme": "Haggai & Malachi",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l33-c2",
    "game_slug": "find-the-bible-book",
    "level": 33,
    "challenge_index": 2,
    "question_text": "THE BOOK DETECTIVE:\nI am the final voice of the Old Testament, delivering a four-chapter oracle structured around six sharp disputations where priests and people challenge God: \"How have you loved us?\", \"How have we despised your name?\", and \"How have we robbed you?\" In which book is this recorded?",
    "options": [
      "Malachi",
      "Haggai",
      "Zechariah",
      "Nehemiah"
    ],
    "correct_answer": "Malachi",
    "explanation": "Malachi uses a disputation method to confront cold ritualism, divorce, and social apathy.",
    "reference": "Malachi 1:2, 6–8; 3:6–10",
    "metadata": {
      "question_type": "The Book Detective",
      "is_typed": false,
      "clues": [
        "Rebukes the priests for offering blind, lame, and sick animals on the altar.",
        "Pronounces: \"For I the Lord do not change; therefore you, O children of Jacob, are not consumed.\"",
        "Famous for the storehouse tithe command (ch 3:10)."
      ],
      "hint": "39th and final book of the Old Testament.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Mal"
      ],
      "stage": 7,
      "stage_title": "Forgotten Books",
      "level_theme": "Haggai & Malachi",
      "difficulty": "easy",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l33-c3",
    "game_slug": "find-the-bible-book",
    "level": 33,
    "challenge_index": 3,
    "question_text": "TYPE THE BIBLE BOOK:\nWhich book declares: \"For from the rising of the sun to its setting my name will be great among the nations, and in every place incense will be offered to my name, and a pure offering. For my name will be great among the nations, says the Lord of hosts\"?",
    "options": [
      "Malachi",
      "Haggai",
      "Zechariah",
      "Isaiah"
    ],
    "correct_answer": "Malachi",
    "explanation": "Malachi 1:11 prophesies universal global worship of God's holy name among all nations.",
    "reference": "Malachi 1:11",
    "metadata": {
      "question_type": "Type the Book",
      "is_typed": true,
      "clues": [
        "Contrasts the faithless offerings of Jerusalem's priesthood with universal Gentile worship.",
        "Found in chapter 1 verse 11 of this final prophetic book.",
        "Hebrew title means \"My Messenger\"."
      ],
      "hint": "Final book of the Old Testament; seven letters.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Mal"
      ],
      "stage": 7,
      "stage_title": "Forgotten Books",
      "level_theme": "Haggai & Malachi",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l33-c4",
    "game_slug": "find-the-bible-book",
    "level": 33,
    "challenge_index": 4,
    "question_text": "THE BOOK DETECTIVE:\nIn which book does God ask the priests questions regarding ritual holiness: \"If someone carries holy meat in the fold of his garment and touches with his fold bread or stew or wine or oil, does it become holy?\" and \"If one who is unclean by reason of a dead body touches any of these, does it become unclean?\"",
    "options": [
      "Haggai",
      "Leviticus",
      "Numbers",
      "Zechariah"
    ],
    "correct_answer": "Haggai",
    "explanation": "Haggai 2:11–14 uses a priestly ruling on defilement to teach that empty ritual without obedience is impure.",
    "reference": "Haggai 2:11–14",
    "metadata": {
      "question_type": "The Book Detective",
      "is_typed": false,
      "clues": [
        "The priests correctly answered that holiness is not contagious, but defilement is contagious.",
        "God applied this to their delayed building: whatever they offered on their ruined altar was defiled.",
        "Dated to the 24th day of the ninth month in the second year of Darius."
      ],
      "hint": "Two-chapter book; begins with H.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Hag"
      ],
      "stage": 7,
      "stage_title": "Forgotten Books",
      "level_theme": "Haggai & Malachi",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l33-c5",
    "game_slug": "find-the-bible-book",
    "level": 33,
    "challenge_index": 5,
    "question_text": "TYPE THE BIBLE BOOK:\nWhich book mentions a \"book of remembrance\" written before the Lord for those who feared the Lord and esteemed His name, promising: \"They shall be mine, says the Lord of hosts, in the day when I make up my treasured possession, and I will spare them as a man spares his son who serves him\"?",
    "options": [
      "Malachi",
      "Zechariah",
      "Daniel",
      "Revelation"
    ],
    "correct_answer": "Malachi",
    "explanation": "Malachi 3:16–17 describes the book of remembrance for the faithful remnant in Israel.",
    "reference": "Malachi 3:16–17; 4:2",
    "metadata": {
      "question_type": "Type the Book",
      "is_typed": true,
      "clues": [
        "Precedes the promise: \"For behold, the day is coming, burning like an oven.\"",
        "Promises that \"the sun of righteousness shall rise with healing in its wings.\"",
        "Recorded in chapter 3 of this final Old Testament book."
      ],
      "hint": "Book of Malachi; chapter 3.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Mal"
      ],
      "stage": 7,
      "stage_title": "Forgotten Books",
      "level_theme": "Haggai & Malachi",
      "difficulty": "master",
      "timerSeconds": 20,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l34-c1",
    "game_slug": "find-the-bible-book",
    "level": 34,
    "challenge_index": 1,
    "question_text": "THE BOOK DETECTIVE:\nI am a personal letter of only 25 verses written by the Apostle Paul in chains to a fellow worker in Colossae. I intercede on behalf of a runaway slave who became a believer in Rome, appealing not on the basis of apostolic authority, but for love's sake: \"If you consider me your partner, receive him as you would receive me.\" Which book am I?",
    "options": [
      "Philemon",
      "Colossians",
      "Titus",
      "Philippians"
    ],
    "correct_answer": "Philemon",
    "explanation": "The Epistle to Philemon is Paul's shortest extant letter, appealing for the reconciliation of Onesimus.",
    "reference": "Philemon 1:1, 11, 17",
    "metadata": {
      "question_type": "The Book Detective",
      "is_typed": false,
      "clues": [
        "Addressed also to Apphia our sister and Archippus our fellow soldier.",
        "Puns on the slave's name (Onesimus, meaning \"useful\"): \"Formerly he was useless to you, but now he is indeed useful to you and to me.\"",
        "Single chapter located between Titus and Hebrews."
      ],
      "hint": "Single-chapter letter named after the slave-owner.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Phlm",
        "Phm"
      ],
      "stage": 7,
      "stage_title": "Forgotten Books",
      "level_theme": "Philemon, 2 John, & 3 John",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l34-c2",
    "game_slug": "find-the-bible-book",
    "level": 34,
    "challenge_index": 2,
    "question_text": "THE BOOK DETECTIVE:\nI am a single-chapter letter of 13 verses addressed by \"the elder\" to \"the elect lady and her children.\" I warn against deceivers who do not confess the coming of Jesus Christ in the flesh, commanding: \"If anyone comes to you and does not bring this teaching, do not receive him into your house or give him any greeting.\" Which book am I?",
    "options": [
      "2 John",
      "3 John",
      "1 John",
      "Jude"
    ],
    "correct_answer": "2 John",
    "explanation": "2 John addresses \"the elect lady\" (a local church), warning against providing hospitality to itinerant heretics.",
    "reference": "2 John 1:1, 5, 8, 10",
    "metadata": {
      "question_type": "The Book Detective",
      "is_typed": false,
      "clues": [
        "Emphasizes walking in truth and obeying the commandment: \"that we love one another.\"",
        "Warns: \"Watch yourselves, so that you may not lose what we have worked for, but may win a full reward.\"",
        "Situated directly between 1 John and 3 John."
      ],
      "hint": "Second letter of John; 13 verses.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Second John",
        "2Jn"
      ],
      "stage": 7,
      "stage_title": "Forgotten Books",
      "level_theme": "Philemon, 2 John, & 3 John",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l34-c3",
    "game_slug": "find-the-bible-book",
    "level": 34,
    "challenge_index": 3,
    "question_text": "TYPE THE BIBLE BOOK:\nWhich single-chapter epistle rebukes an arrogant local church leader named Diotrephes, \"who likes to put himself first, does not acknowledge our authority... talking wicked nonsense against us, refuses to welcome the brothers, and stops those who want to and puts them out of the church\"?",
    "options": [
      "3 John",
      "2 John",
      "Jude",
      "Philemon"
    ],
    "correct_answer": "3 John",
    "explanation": "3 John contrasts the generous hospitality of Gaius with the domineering pride of Diotrephes.",
    "reference": "3 John 1:1, 9–10, 12",
    "metadata": {
      "question_type": "Type the Book",
      "is_typed": true,
      "clues": [
        "Written to \"the beloved Gaius\" commending him for showing hospitality to traveling missionaries.",
        "Commends Demetrius who has received a good testimony from everyone.",
        "Comprises 14 verses; stands directly before Jude."
      ],
      "hint": "Third letter of John; begins with 3.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Third John",
        "3Jn"
      ],
      "stage": 7,
      "stage_title": "Forgotten Books",
      "level_theme": "Philemon, 2 John, & 3 John",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l34-c4",
    "game_slug": "find-the-bible-book",
    "level": 34,
    "challenge_index": 4,
    "question_text": "THE BOOK DETECTIVE:\nI contain this personal, intimate offer from Paul: \"I, Paul, write this with my own hand: I will repay it—to say nothing of your owing me even your own self. Yes, brother, I want some benefit from you in the Lord. Refresh my heart in Christ. Confident of your obedience, I write to you, knowing that you will do even more than I say.\" Which book am I?",
    "options": [
      "Philemon",
      "Colossians",
      "Titus",
      "Philippians"
    ],
    "correct_answer": "Philemon",
    "explanation": "Philemon 1:19–22 is Paul's promissory note written in his own hand to secure Onesimus' full pardon.",
    "reference": "Philemon 1:19–22",
    "metadata": {
      "question_type": "The Book Detective",
      "is_typed": false,
      "clues": [
        "Paul asks for a guest room to be prepared, hoping through their prayers to be released.",
        "Sends greetings from Epaphras, Mark, Aristarchus, Demas, and Luke.",
        "Contains only 25 verses."
      ],
      "hint": "Epistle to Philemon.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Phlm",
        "Phm"
      ],
      "stage": 7,
      "stage_title": "Forgotten Books",
      "level_theme": "Philemon, 2 John, & 3 John",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l34-c5",
    "game_slug": "find-the-bible-book",
    "level": 34,
    "challenge_index": 5,
    "question_text": "TYPE THE BIBLE BOOK:\nWhich single-chapter epistle opens with the warm pastoral prayer: \"Beloved, I pray that all may go well with you and that you may be in good health, as it goes well with your soul. For I rejoiced greatly when the brothers came and testified to your truth, as indeed you are walking in the truth\"?",
    "options": [
      "3 John",
      "2 John",
      "Philemon",
      "Jude"
    ],
    "correct_answer": "3 John",
    "explanation": "3 John 1:2–4 opens with John's blessing over Gaius' spiritual and physical well-being.",
    "reference": "3 John 1:2–4",
    "metadata": {
      "question_type": "Type the Book",
      "is_typed": true,
      "clues": [
        "Addressed to Gaius by \"the elder\".",
        "Declares: \"I have no greater joy than to hear that my children are walking in the truth.\"",
        "Shortest book in the New Testament by total Greek words."
      ],
      "hint": "Third Epistle of John; begins with 3.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Third John",
        "3Jn"
      ],
      "stage": 7,
      "stage_title": "Forgotten Books",
      "level_theme": "Philemon, 2 John, & 3 John",
      "difficulty": "master",
      "timerSeconds": 20,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l35-c1",
    "game_slug": "find-the-bible-book",
    "level": 35,
    "challenge_index": 1,
    "question_text": "FORGOTTEN BOOKS BOSS:\nI cite an extraordinary extra-biblical dispute: \"When the archangel Michael, contending with the devil, was disputing about the body of Moses, he did not presume to pronounce a blasphemous judgment, but said, 'The Lord rebuke you.'\" Which book am I?",
    "options": [
      "Jude",
      "2 Peter",
      "Revelation",
      "Hebrews"
    ],
    "correct_answer": "Jude",
    "explanation": "Jude 1:9 exclusively records the archangel Michael disputing with Satan over the body of Moses.",
    "reference": "Jude 1:1, 9, 14, 24–25",
    "metadata": {
      "question_type": "The Book Detective",
      "is_typed": false,
      "clues": [
        "Cites also the ancient Jewish work the Assumption of Moses and the prophecy of Enoch.",
        "Identifies the author as \"a servant of Jesus Christ and brother of James.\"",
        "Concludes with one of the most famous doxologies in the entire Bible: \"Now to him who is able to keep you from stumbling...\""
      ],
      "hint": "Single-chapter epistle before Revelation; four letters; starts with J.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Jud"
      ],
      "stage": 7,
      "stage_title": "Forgotten Books",
      "level_theme": "Forgotten Books Boss",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l35-c2",
    "game_slug": "find-the-bible-book",
    "level": 35,
    "challenge_index": 2,
    "question_text": "FORGOTTEN BOOKS BOSS:\nIn which Minor Prophet does God challenge Israel regarding their withheld tithes: \"Will man rob God? Yet you are robbing me. But you say, 'How have we robbed you?' In your tithes and contributions. You are cursed with a curse, for you are robbing me, the whole nation of you. Bring the full tithe into the storehouse... and thereby put me to the test, says the Lord of hosts, if I will not open the windows of heaven for you\"?",
    "options": [
      "Malachi",
      "Haggai",
      "Zechariah",
      "Micah"
    ],
    "correct_answer": "Malachi",
    "explanation": "Malachi 3:8–10 contains God's famous challenge concerning the storehouse tithe.",
    "reference": "Malachi 3:8–10",
    "metadata": {
      "question_type": "The Book Detective",
      "is_typed": false,
      "clues": [
        "Promises that God will rebuke the devourer for their sake.",
        "Final book before the 400 years of intertestamental silence.",
        "Four chapters."
      ],
      "hint": "Final book of the Old Testament.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Mal"
      ],
      "stage": 7,
      "stage_title": "Forgotten Books",
      "level_theme": "Forgotten Books Boss",
      "difficulty": "medium",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l35-c3",
    "game_slug": "find-the-bible-book",
    "level": 35,
    "challenge_index": 3,
    "question_text": "TYPE THE BIBLE BOOK:\nWhich book contains this cosmic shaking prophecy quoted in Hebrews 12:26: \"For thus says the Lord of hosts: Yet once more, in a little while, I will shake the heavens and the earth and the sea and the dry land. And I will shake all nations, so that the treasures of all nations shall come in, and I will fill this house with glory\"?",
    "options": [
      "Haggai",
      "Zechariah",
      "Malachi",
      "Joel"
    ],
    "correct_answer": "Haggai",
    "explanation": "Haggai 2:6–7 is the prophecy of God shaking the heavens and earth, cited in Hebrews 12:26.",
    "reference": "Haggai 2:6–7; Hebrews 12:26",
    "metadata": {
      "question_type": "Type the Book",
      "is_typed": true,
      "clues": [
        "Addressed to the returnees rebuilding the second temple.",
        "Dated to the second year of King Darius.",
        "Two-chapter post-exilic prophetic book."
      ],
      "hint": "Two-chapter book; begins with H.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Hag"
      ],
      "stage": 7,
      "stage_title": "Forgotten Books",
      "level_theme": "Forgotten Books Boss",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l35-c4",
    "game_slug": "find-the-bible-book",
    "level": 35,
    "challenge_index": 4,
    "question_text": "FORGOTTEN BOOKS BOSS:\nI describe corrupt apostates with vivid cosmic metaphors: \"These are hidden reefs at your love feasts, as they feast with you without fear, shepherds feeding themselves; waterless clouds, swept along by winds; fruitless trees in late autumn, twice dead, uprooted; wild waves of the sea, casting up the foam of their own shame; wandering stars, for whom the gloom of utter darkness has been reserved forever.\" Which book am I?",
    "options": [
      "Jude",
      "2 Peter",
      "James",
      "Revelation"
    ],
    "correct_answer": "Jude",
    "explanation": "Jude 1:12–13 employs vivid poetic imagery (clouds without water, wild waves, wandering stars) to depict false teachers.",
    "reference": "Jude 1:12–13, 20–23",
    "metadata": {
      "question_type": "The Book Detective",
      "is_typed": false,
      "clues": [
        "Urges believers: \"Build yourselves up in your most holy faith and pray in the Holy Spirit; keep yourselves in the love of God.\"",
        "Calls for mercy on those who doubt and snatching others out of the fire.",
        "Penultimate book of the Christian Bible."
      ],
      "hint": "The single-chapter Epistle of Jude.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Jud"
      ],
      "stage": 7,
      "stage_title": "Forgotten Books",
      "level_theme": "Forgotten Books Boss",
      "difficulty": "master",
      "timerSeconds": 20,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l35-c5",
    "game_slug": "find-the-bible-book",
    "level": 35,
    "challenge_index": 5,
    "question_text": "TYPE THE BIBLE BOOK:\nIn which book does the author warn: \"Everyone who goes on ahead and does not abide in the teaching of Christ, does not have God. Whoever abides in the teaching has both the Father and the Son. If anyone comes to you and does not bring this teaching, do not receive him into your house or give him any greeting, for whoever greets him takes part in his wicked works\"?",
    "options": [
      "2 John",
      "3 John",
      "1 John",
      "Jude"
    ],
    "correct_answer": "2 John",
    "explanation": "2 John 1:9–11 commands strict separation from teachers who deny Christ's true incarnation.",
    "reference": "2 John 1:9–11",
    "metadata": {
      "question_type": "Type the Book",
      "is_typed": true,
      "clues": [
        "Written by \"the elder\" to \"the elect lady and her children.\"",
        "Contains exactly 13 verses.",
        "Second epistle bearing the Apostle John's name."
      ],
      "hint": "Second Epistle of John; begins with 2.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Second John",
        "2Jn"
      ],
      "stage": 7,
      "stage_title": "Forgotten Books",
      "level_theme": "Forgotten Books Boss",
      "difficulty": "master",
      "timerSeconds": 20,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l36-c1",
    "game_slug": "find-the-bible-book",
    "level": 36,
    "challenge_index": 1,
    "question_text": "THE BOOK TRAP:\nElijah the Tishbite challenges 450 prophets of Baal on Mount Carmel, calls down fire from heaven, slaughters the false prophets at the brook Kishon, and runs ahead of Ahab's chariot to Jezreel. In which book is this recorded?",
    "options": [
      "1 Kings",
      "1 Chronicles",
      "2 Kings",
      "2 Chronicles"
    ],
    "correct_answer": "1 Kings",
    "explanation": "Elijah on Mount Carmel is recorded exclusively in 1 Kings 18. Chronicles omits northern prophetic narratives.",
    "reference": "1 Kings 18:17–46",
    "metadata": {
      "question_type": "The Book Detective",
      "is_typed": false,
      "clues": [
        "The Chronicles omit the ministries of Elijah and Elisha in the northern kingdom entirely.",
        "Found in chapter 18 of this historical book.",
        "First volume of this two-part history."
      ],
      "hint": "First Kings, chapter 18.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "First Kings",
        "1Kgs"
      ],
      "stage": 8,
      "stage_title": "The Book Trap",
      "level_theme": "Kings vs Chronicles",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l36-c2",
    "game_slug": "find-the-bible-book",
    "level": 36,
    "challenge_index": 2,
    "question_text": "THE BOOK TRAP:\nIn which book do we read of King Asa of Judah deposing his grandmother Maacah from being queen mother because she made an abominable image for Asherah, cutting down her image, and burning it at the brook Kidron?",
    "options": [
      "1 Kings",
      "2 Kings",
      "1 Samuel",
      "2 Samuel"
    ],
    "correct_answer": "1 Kings",
    "explanation": "1 Kings 15:13 details King Asa removing Maacah for her Asherah idol.",
    "reference": "1 Kings 15:13; 2 Chronicles 15:16",
    "metadata": {
      "question_type": "The Book Detective",
      "is_typed": false,
      "clues": [
        "Recorded in both 1 Kings 15 and 2 Chronicles 15.",
        "Asa's heart was wholly true to the Lord all his days, yet in his old age he was diseased in his feet.",
        "Choose the primary source in Kings."
      ],
      "hint": "First Kings, chapter 15.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "First Kings",
        "1Kgs",
        "2 Chronicles"
      ],
      "stage": 8,
      "stage_title": "The Book Trap",
      "level_theme": "Kings vs Chronicles",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l36-c3",
    "game_slug": "find-the-bible-book",
    "level": 36,
    "challenge_index": 3,
    "question_text": "TYPE THE BIBLE BOOK:\nWhile 1 & 2 Kings emphasize political and prophetic history of both Israel and Judah, which two-volume biblical book focuses almost exclusively on the southern Kingdom of Judah, the Davidic lineage, and detailed Levitical temple worship arrangements?",
    "options": [
      "2 Chronicles",
      "1 Chronicles",
      "Ezra",
      "Nehemiah"
    ],
    "correct_answer": "2 Chronicles",
    "explanation": "2 Chronicles documents the history of Judah's kings from Solomon to the Babylonian exile through a priestly lens.",
    "reference": "2 Chronicles 1:1; 36:23",
    "metadata": {
      "question_type": "Type the Book",
      "is_typed": true,
      "clues": [
        "Opens with nine chapters of genealogies from Adam.",
        "Hebrew title is Divrei Hayamim (\"The events of the days\").",
        "First volume is 1 Chronicles; second volume is this book."
      ],
      "hint": "Second volume of Chronicles.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Second Chronicles",
        "2Chr",
        "1 Chronicles"
      ],
      "stage": 8,
      "stage_title": "The Book Trap",
      "level_theme": "Kings vs Chronicles",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l36-c4",
    "game_slug": "find-the-bible-book",
    "level": 36,
    "challenge_index": 4,
    "question_text": "THE BOOK TRAP:\nIn which book is King Hezekiah's magnificent national Passover celebration detailed, where messengers ran with letters from Dan to Beersheba inviting even the northern tribes of Ephraim and Manasseh to return to Jerusalem?",
    "options": [
      "2 Chronicles",
      "2 Kings",
      "Ezra",
      "Nehemiah"
    ],
    "correct_answer": "2 Chronicles",
    "explanation": "2 Chronicles 30 exclusively preserves the narrative of Hezekiah's great national Passover.",
    "reference": "2 Chronicles 30:1–27",
    "metadata": {
      "question_type": "The Book Detective",
      "is_typed": false,
      "clues": [
        "This lavish, nationwide Passover revival is completely omitted in 2 Kings.",
        "The priests and Levites were ashamed, consecrated themselves, and slaughtered the Passover lambs.",
        "Found in chapter 30 of this book."
      ],
      "hint": "Second Chronicles, chapter 30.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Second Chronicles",
        "2Chr"
      ],
      "stage": 8,
      "stage_title": "The Book Trap",
      "level_theme": "Kings vs Chronicles",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l36-c5",
    "game_slug": "find-the-bible-book",
    "level": 36,
    "challenge_index": 5,
    "question_text": "TYPE THE BIBLE BOOK:\nIn which book does the prophet Jehu son of Hanani confront King Jehoshaphat upon his return to Jerusalem after surviving the battle of Ramoth-gilead, asking: \"Should you help the wicked and love those who hate the Lord? Because of this, wrath has gone out against you from the Lord\"?",
    "options": [
      "2 Chronicles",
      "1 Kings",
      "2 Kings",
      "1 Chronicles"
    ],
    "correct_answer": "2 Chronicles",
    "explanation": "2 Chronicles 19:2 records Jehu the seer rebuking Jehoshaphat for his military alliance with wicked King Ahab.",
    "reference": "2 Chronicles 19:1–4",
    "metadata": {
      "question_type": "Type the Book",
      "is_typed": true,
      "clues": [
        "Jehoshaphat then appointed judges throughout all the fortified cities of Judah.",
        "Unique to this priestly historical narrative in chapter 19.",
        "Second volume of this work."
      ],
      "hint": "Second Chronicles, chapter 19.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Second Chronicles",
        "2Chr"
      ],
      "stage": 8,
      "stage_title": "The Book Trap",
      "level_theme": "Kings vs Chronicles",
      "difficulty": "master",
      "timerSeconds": 20,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l37-c1",
    "game_slug": "find-the-bible-book",
    "level": 37,
    "challenge_index": 1,
    "question_text": "THE BOOK TRAP:\nIn which Gospel do we find the unique parables of the Good Samaritan, the Prodigal Son, the Rich Man and Lazarus, and the Pharisee and the Tax Collector?",
    "options": [
      "Luke",
      "Matthew",
      "Mark",
      "John"
    ],
    "correct_answer": "Luke",
    "explanation": "All four of these parables are unique to Luke's Gospel (the \"L\" source).",
    "reference": "Luke 10:25–37; 15:11–32; 16:19–31; 18:9–14",
    "metadata": {
      "question_type": "The Book Detective",
      "is_typed": false,
      "clues": [
        "None of these four famous parables appear in Matthew, Mark, or John.",
        "Written by the \"beloved physician\" who traveled with Paul.",
        "Features the journey toward Jerusalem in chapters 9–19."
      ],
      "hint": "Third Gospel; physician author.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Lk"
      ],
      "stage": 8,
      "stage_title": "The Book Trap",
      "level_theme": "Distinguishing Gospels",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l37-c2",
    "game_slug": "find-the-bible-book",
    "level": 37,
    "challenge_index": 2,
    "question_text": "THE BOOK TRAP:\nIn which Gospel does Jesus perform the seven public \"signs\", including turning water into wine at Cana, healing the official's son, healing the paralytic at Bethesda, and raising Lazarus after four days in the tomb?",
    "options": [
      "John",
      "Luke",
      "Matthew",
      "Mark"
    ],
    "correct_answer": "John",
    "explanation": "These distinct miracle signs are unique to the Gospel of John, written that readers might believe Jesus is the Christ.",
    "reference": "John 2:1–11; 4:46–54; 5:1–9; 11:1–44",
    "metadata": {
      "question_type": "The Book Detective",
      "is_typed": false,
      "clues": [
        "None of these four miracles appear in the Synoptic Gospels (Matthew, Mark, Luke).",
        "Emphasizes Jesus' divine identity and \"I AM\" declarations.",
        "Fourth Gospel."
      ],
      "hint": "Fourth Gospel; starts with J.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Jn"
      ],
      "stage": 8,
      "stage_title": "The Book Trap",
      "level_theme": "Distinguishing Gospels",
      "difficulty": "easy",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l37-c3",
    "game_slug": "find-the-bible-book",
    "level": 37,
    "challenge_index": 3,
    "question_text": "TYPE THE BIBLE BOOK:\nWhich Gospel uniquely contains the parables of the Wheat and the Tares, the Hidden Treasure, the Pearl of Great Price, the Unforgiving Servant, the Workers in the Vineyard, and the Ten Virgins?",
    "options": [
      "Matthew",
      "Luke",
      "Mark",
      "John"
    ],
    "correct_answer": "Matthew",
    "explanation": "These parables are unique to the Gospel of Matthew (the \"M\" material).",
    "reference": "Matthew 13:24–50; 18:23–35; 20:1–16; 25:1–13",
    "metadata": {
      "question_type": "Type the Book",
      "is_typed": true,
      "clues": [
        "Emphasizes the \"kingdom of heaven\" in five major discourses.",
        "Presents Jesus as the new Moses and Messianic King fulfilling prophecy.",
        "Written by the former tax collector."
      ],
      "hint": "First book of the New Testament; starts with M.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Matt"
      ],
      "stage": 8,
      "stage_title": "The Book Trap",
      "level_theme": "Distinguishing Gospels",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l37-c4",
    "game_slug": "find-the-bible-book",
    "level": 37,
    "challenge_index": 4,
    "question_text": "THE BOOK TRAP:\nWhich Gospel uniquely contains the Parable of the Growing Seed (\"The earth produces by itself, first the blade, then the ear, then the full grain in the ear\"), and the two-stage healing of the blind man at Bethsaida who first saw men like walking trees?",
    "options": [
      "Mark",
      "Matthew",
      "Luke",
      "John"
    ],
    "correct_answer": "Mark",
    "explanation": "The Parable of the Growing Seed (Mark 4:26–29) and the two-stage blind man healing (Mark 8:22–26) are unique to Mark.",
    "reference": "Mark 4:26–29; 8:22–26",
    "metadata": {
      "question_type": "The Book Detective",
      "is_typed": false,
      "clues": [
        "Neither of these two accounts appears in Matthew, Luke, or John.",
        "The shortest Gospel, featuring 16 chapters.",
        "Fast-paced narrative emphasizing Jesus' authority."
      ],
      "hint": "Shortest Gospel; four letters; starts with M.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Mk"
      ],
      "stage": 8,
      "stage_title": "The Book Trap",
      "level_theme": "Distinguishing Gospels",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l37-c5",
    "game_slug": "find-the-bible-book",
    "level": 37,
    "challenge_index": 5,
    "question_text": "TYPE THE BIBLE BOOK:\nIn which Gospel does the resurrected Jesus appear on the shore of the Sea of Tiberias at dawn, provide a miraculous catch of 153 large fish, cook a breakfast of bread and roasted fish on charcoal coals, and three times restore Peter: \"Feed my sheep\"?",
    "options": [
      "John",
      "Luke",
      "Matthew",
      "Mark"
    ],
    "correct_answer": "John",
    "explanation": "John 21 exclusively recounts the breakfast on the shore of Galilee, the 153 fish, and Peter's three-fold restoration.",
    "reference": "John 21:1–19",
    "metadata": {
      "question_type": "Type the Book",
      "is_typed": true,
      "clues": [
        "Recorded exclusively in the closing epilogue (chapter 21).",
        "Jesus prophecies Peter's future martyrdom: \"When you are old, you will stretch out your hands, and another will dress you...\"",
        "Written by the beloved disciple."
      ],
      "hint": "Fourth Gospel; four letters; begins with J.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Jn"
      ],
      "stage": 8,
      "stage_title": "The Book Trap",
      "level_theme": "Distinguishing Gospels",
      "difficulty": "master",
      "timerSeconds": 20,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l38-c1",
    "game_slug": "find-the-bible-book",
    "level": 38,
    "challenge_index": 1,
    "question_text": "THE BOOK TRAP:\nIn which book is James the brother of John (son of Zebedee) executed with the sword by King Herod Agrippa I, becoming the first of the Twelve Apostles to suffer martyrdom?",
    "options": [
      "Acts",
      "James",
      "Matthew",
      "Galatians"
    ],
    "correct_answer": "Acts",
    "explanation": "Acts 12:2 records the martyrdom of James the son of Zebedee under Herod Agrippa I.",
    "reference": "Acts 12:1–3",
    "metadata": {
      "question_type": "The Book Detective",
      "is_typed": false,
      "clues": [
        "Herod saw that this pleased the Jews, so he proceeded to arrest Peter during the Days of Unleavened Bread.",
        "Recorded in chapter 12 of this New Testament history.",
        "Not to be confused with the Epistle of James written by Jesus' brother."
      ],
      "hint": "Fifth book of the New Testament.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Acts of the Apostles",
        "Act"
      ],
      "stage": 8,
      "stage_title": "The Book Trap",
      "level_theme": "Identical Names",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l38-c2",
    "game_slug": "find-the-bible-book",
    "level": 38,
    "challenge_index": 2,
    "question_text": "THE BOOK TRAP:\nKing Saul, Israel's first monarch, consults a medium at En-dor on the eve of the battle of Mount Gilboa to summon the spirit of the deceased prophet Samuel. In which book is this recorded?",
    "options": [
      "1 Samuel",
      "2 Samuel",
      "1 Kings",
      "1 Chronicles"
    ],
    "correct_answer": "1 Samuel",
    "explanation": "1 Samuel 28 recounts King Saul visiting the medium of En-dor before his fatal defeat at Gilboa.",
    "reference": "1 Samuel 28:7–20",
    "metadata": {
      "question_type": "The Book Detective",
      "is_typed": false,
      "clues": [
        "The medium cried with a loud voice when she saw Samuel ascending out of the earth.",
        "Samuel announced: \"Tomorrow you and your sons shall be with me.\"",
        "First volume of the Samuel history."
      ],
      "hint": "First Samuel, chapter 28.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "First Samuel",
        "1Sam"
      ],
      "stage": 8,
      "stage_title": "The Book Trap",
      "level_theme": "Identical Names",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l38-c3",
    "game_slug": "find-the-bible-book",
    "level": 38,
    "challenge_index": 3,
    "question_text": "TYPE THE BIBLE BOOK:\nIn which book does King Saul of Tarsus (the Apostle Paul) describe his credentials before conversion: \"circumcised on the eighth day, of the people of Israel, of the tribe of Benjamin, a Hebrew of Hebrews; as to the law, a Pharisee; as to zeal, a persecutor of the church\"?",
    "options": [
      "Philippians",
      "Romans",
      "Galatians",
      "Acts"
    ],
    "correct_answer": "Philippians",
    "explanation": "Philippians 3:5–7 contains Paul's famous autobiographical pedigree of his pre-Christian heritage.",
    "reference": "Philippians 3:5–7",
    "metadata": {
      "question_type": "Type the Book",
      "is_typed": true,
      "clues": [
        "Contains the declaration: \"Whatever gain I had, I counted as loss for the sake of Christ.\"",
        "Four chapters of joyful thanksgiving written from prison.",
        "Addressed to the church in Philippi."
      ],
      "hint": "Epistle to the Philippians; chapter 3.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Phil"
      ],
      "stage": 8,
      "stage_title": "The Book Trap",
      "level_theme": "Identical Names",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l38-c4",
    "game_slug": "find-the-bible-book",
    "level": 38,
    "challenge_index": 4,
    "question_text": "THE BOOK TRAP:\nIn which book does John the Baptist send two disciples from prison to ask Jesus: \"Are you the one who is to come, or shall we look for another?\", prompting Jesus to cite His miracles from Isaiah and commend John as \"more than a prophet\"?",
    "options": [
      "Matthew",
      "John",
      "Mark",
      "Acts"
    ],
    "correct_answer": "Matthew",
    "explanation": "Matthew 11:2–15 records John the Baptist sending messengers from prison to Jesus.",
    "reference": "Matthew 11:2–15; Luke 7:18–28",
    "metadata": {
      "question_type": "The Book Detective",
      "is_typed": false,
      "clues": [
        "Jesus declares: \"Among those born of women there has arisen no one greater than John the Baptist.\"",
        "Recorded in chapter 11 of this opening Gospel.",
        "Also recorded in parallel in Luke 7."
      ],
      "hint": "First Gospel of the New Testament; starts with M.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Matt",
        "Luke"
      ],
      "stage": 8,
      "stage_title": "The Book Trap",
      "level_theme": "Identical Names",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l38-c5",
    "game_slug": "find-the-bible-book",
    "level": 38,
    "challenge_index": 5,
    "question_text": "TYPE THE BIBLE BOOK:\nWhich book mentions John Mark withdrawing from Paul and Barnabas at Perga in Pamphylia and returning to Jerusalem, sparking a sharp disagreement between Paul and Barnabas in chapter 15 that caused them to separate?",
    "options": [
      "Acts",
      "Acts of the Apostles",
      "Galatians",
      "Colossians"
    ],
    "correct_answer": "Acts",
    "explanation": "Acts 13:13 and 15:37–40 describe John Mark's departure and the resulting contention between Paul and Barnabas.",
    "reference": "Acts 13:13; 15:36–41",
    "metadata": {
      "question_type": "Type the Book",
      "is_typed": true,
      "clues": [
        "Barnabas took Mark and sailed to Cyprus.",
        "Paul chose Silas and departed, commended by the brothers to the grace of the Lord.",
        "Fifth book of the New Testament."
      ],
      "hint": "Book of Acts, chapters 13 and 15.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Acts of the Apostles",
        "Act"
      ],
      "stage": 8,
      "stage_title": "The Book Trap",
      "level_theme": "Identical Names",
      "difficulty": "master",
      "timerSeconds": 20,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l39-c1",
    "game_slug": "find-the-bible-book",
    "level": 39,
    "challenge_index": 1,
    "question_text": "THE BOOK TRAP:\nWhich book contains this controversial challenge: \"Was not Abraham our father justified by works when he offered up his son Isaac on the altar? You see that faith was active along with his works, and faith was completed by his works... You see that a person is justified by works and not by faith alone\"?",
    "options": [
      "James",
      "Romans",
      "Galatians",
      "Hebrews"
    ],
    "correct_answer": "James",
    "explanation": "James 2:21–26 emphasizes that genuine justifying faith is demonstrated and vindicated through obedience.",
    "reference": "James 2:21–26",
    "metadata": {
      "question_type": "The Book Detective",
      "is_typed": false,
      "clues": [
        "Often mistakenly thought to contradict Paul's teaching in Romans 4.",
        "Concludes: \"For as the body apart from the spirit is dead, so also faith apart from works is dead.\"",
        "Five-chapter General Epistle."
      ],
      "hint": "Epistle of James; chapter 2.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Jas"
      ],
      "stage": 8,
      "stage_title": "The Book Trap",
      "level_theme": "Deceptive Theological Clues",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l39-c2",
    "game_slug": "find-the-bible-book",
    "level": 39,
    "challenge_index": 2,
    "question_text": "THE BOOK TRAP:\nIn which book does Paul write: \"For what does the Scripture say? 'Abraham believed God, and it was counted to him as righteousness.' Now to the one who works, his wages are not counted as a gift but as his due. And to the one who does not work but believes in him who justifies the ungodly, his faith is counted as righteousness\"?",
    "options": [
      "Romans",
      "Galatians",
      "James",
      "Hebrews"
    ],
    "correct_answer": "Romans",
    "explanation": "Romans 4:3–5 proves justification by grace through faith apart from meritorious works of the Law.",
    "reference": "Romans 4:3–5",
    "metadata": {
      "question_type": "The Book Detective",
      "is_typed": false,
      "clues": [
        "Quotes Genesis 15:6 and Psalm 32:1–2.",
        "Argues that Abraham was justified before he was circumcised.",
        "Found in chapter 4 of this letter."
      ],
      "hint": "Paul's epistle to the Romans; chapter 4.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Rom"
      ],
      "stage": 8,
      "stage_title": "The Book Trap",
      "level_theme": "Deceptive Theological Clues",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l39-c3",
    "game_slug": "find-the-bible-book",
    "level": 39,
    "challenge_index": 3,
    "question_text": "TYPE THE BIBLE BOOK:\nWhile Ephesians 6 outlines the spiritual Armor of God for believers, in which Old Testament book is the Lord Himself described as putting on divine armor to judge evil: \"He put on righteousness as a breastplate, and a helmet of salvation on his head; he put on garments of vengeance for clothing, and wrapped himself in zeal as a cloak\"?",
    "options": [
      "Isaiah",
      "Jeremiah",
      "Ezekiel",
      "Psalms"
    ],
    "correct_answer": "Isaiah",
    "explanation": "Isaiah 59:17 describes the Lord putting on the armor of righteousness and salvation, the prophetic source for Paul's metaphor in Ephesians 6.",
    "reference": "Isaiah 59:17–20",
    "metadata": {
      "question_type": "Type the Book",
      "is_typed": true,
      "clues": [
        "Follows the confession: \"Our transgressions are multiplied before you, and our sins testify against us.\"",
        "Promises that \"a Redeemer will come to Zion, to those in Jacob who turn from transgression.\"",
        "Major prophetic book of 66 chapters, chapter 59."
      ],
      "hint": "Major prophet Isaiah; chapter 59.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Isa"
      ],
      "stage": 8,
      "stage_title": "The Book Trap",
      "level_theme": "Deceptive Theological Clues",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l39-c4",
    "game_slug": "find-the-bible-book",
    "level": 39,
    "challenge_index": 4,
    "question_text": "THE BOOK TRAP:\nIn which book does Jesus explicitly command: \"Do not think that I have come to abolish the Law or the Prophets; I have not come to abolish them but to fulfill them. For truly, I say to you, until heaven and earth pass away, not an iota, not a dot, will pass from the Law until all is accomplished\"?",
    "options": [
      "Matthew",
      "Luke",
      "John",
      "Mark"
    ],
    "correct_answer": "Matthew",
    "explanation": "Matthew 5:17–18 records Jesus' definitive statement on the Law and Prophets in the Sermon on the Mount.",
    "reference": "Matthew 5:17–18",
    "metadata": {
      "question_type": "The Book Detective",
      "is_typed": false,
      "clues": [
        "Found in the Sermon on the Mount.",
        "Followed by six antitheses: \"You have heard that it was said... but I say to you.\"",
        "First Gospel."
      ],
      "hint": "First Gospel of the New Testament; starts with M.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Matt"
      ],
      "stage": 8,
      "stage_title": "The Book Trap",
      "level_theme": "Deceptive Theological Clues",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l39-c5",
    "game_slug": "find-the-bible-book",
    "level": 39,
    "challenge_index": 5,
    "question_text": "TYPE THE BIBLE BOOK:\nWhich book contains this celebrated definition: \"Now faith is the assurance of things hoped for, the conviction of things not seen,\" followed by the great Hall of Faith in chapter 11 detailing Abel, Enoch, Noah, Abraham, Moses, and Rahab?",
    "options": [
      "Hebrews",
      "Romans",
      "James",
      "Galatians"
    ],
    "correct_answer": "Hebrews",
    "explanation": "Hebrews 11 is the renowned Hall of Faith defining faith and commemorating biblical heroes.",
    "reference": "Hebrews 11:1; 12:1–2",
    "metadata": {
      "question_type": "Type the Book",
      "is_typed": true,
      "clues": [
        "Urges believers: \"Let us run with endurance the race that is set before us, looking to Jesus, the founder and perfecter of our faith.\"",
        "Contrasts the earthly tabernacle with the heavenly sanctuary.",
        "Thirteen chapters; anonymous author."
      ],
      "hint": "Epistle to the Hebrews; chapter 11.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Heb"
      ],
      "stage": 8,
      "stage_title": "The Book Trap",
      "level_theme": "Deceptive Theological Clues",
      "difficulty": "master",
      "timerSeconds": 20,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l40-c1",
    "game_slug": "find-the-bible-book",
    "level": 40,
    "challenge_index": 1,
    "question_text": "THE BOOK TRAP BOSS:\nI contain this historical event: King Saul slaughters eighty-five priests of Nob wearing the linen ephod through Doeg the Edomite, because the high priest Ahimelech had given David the showbread and the sword of Goliath. Only Abiathar son of Ahimelech escapes to tell David. In which book is this recorded?",
    "options": [
      "1 Samuel",
      "2 Samuel",
      "1 Kings",
      "1 Chronicles"
    ],
    "correct_answer": "1 Samuel",
    "explanation": "1 Samuel 22 records Doeg the Edomite executing the priests of Nob on Saul's command.",
    "reference": "1 Samuel 22:11–23; Psalm 52",
    "metadata": {
      "question_type": "The Book Detective",
      "is_typed": false,
      "clues": [
        "David replies to Abiathar: \"I knew on that day, when Doeg the Edomite was there, that he would surely tell Saul. I have occasioned the death of all the persons of your father's house.\"",
        "David wrote Psalm 52 in response to this atrocity.",
        "Found in chapter 22 of this book."
      ],
      "hint": "First Samuel, chapter 22.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "First Samuel",
        "1Sam"
      ],
      "stage": 8,
      "stage_title": "The Book Trap",
      "level_theme": "Book Trap Boss",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l40-c2",
    "game_slug": "find-the-bible-book",
    "level": 40,
    "challenge_index": 2,
    "question_text": "THE BOOK TRAP BOSS:\nWhich TWO books record the famous royal visit of the Queen of Sheba, who came from the ends of the earth with a vast caravan of camels bearing spices, gold, and precious stones to test Solomon with hard questions, proclaiming: \"The half was not told me; your wisdom and prosperity surpass the report that I heard\"?",
    "options": [
      "1 Kings and 2 Chronicles",
      "2 Kings and 1 Chronicles",
      "1 Samuel and 2 Samuel",
      "Ezra and Nehemiah"
    ],
    "correct_answer": "1 Kings and 2 Chronicles",
    "explanation": "The Queen of Sheba's visit is documented in 1 Kings 10 and 2 Chronicles 9.",
    "reference": "1 Kings 10:1–13; 2 Chronicles 9:1–12",
    "metadata": {
      "question_type": "Two Books, One Story",
      "is_typed": false,
      "clues": [
        "Recorded in nearly parallel detail in both Old Testament historical corpuses.",
        "One is in 1 Kings 10.",
        "The other is in 2 Chronicles 9."
      ],
      "hint": "1 Kings and 2 Chronicles.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "1 Kings & 2 Chronicles",
        "1Kgs and 2Chr"
      ],
      "stage": 8,
      "stage_title": "The Book Trap",
      "level_theme": "Book Trap Boss",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l40-c3",
    "game_slug": "find-the-bible-book",
    "level": 40,
    "challenge_index": 3,
    "question_text": "TYPE THE BIBLE BOOK:\nWhich book contains this forensic dialogue: \"And they came to him and said, 'Teacher, we know that you are true and do not care about anyone's opinion... Is it lawful to pay taxes to Caesar, or not? Should we pay them, or should we not?' But, knowing their hypocrisy, he said to them, 'Why put me to the test? Bring me a denarius and let me look at it'\"?",
    "options": [
      "Mark",
      "Matthew",
      "Luke",
      "John"
    ],
    "correct_answer": "Mark",
    "explanation": "Mark 12:13–17 records the question concerning the tax to Caesar and the denarius.",
    "reference": "Mark 12:13–17; Matthew 22:15–22; Luke 20:20–26",
    "metadata": {
      "question_type": "Type the Book",
      "is_typed": true,
      "clues": [
        "Jesus answered: \"Render to Caesar the things that are Caesar's, and to God the things that are God's.\"",
        "Recorded in chapter 12 of this shortest, fastest Gospel.",
        "Contains 16 chapters."
      ],
      "hint": "Gospel of Mark, chapter 12.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Mk"
      ],
      "stage": 8,
      "stage_title": "The Book Trap",
      "level_theme": "Book Trap Boss",
      "difficulty": "master",
      "timerSeconds": 20,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l40-c4",
    "game_slug": "find-the-bible-book",
    "level": 40,
    "challenge_index": 4,
    "question_text": "THE BOOK TRAP BOSS:\nIn which book does the angel of the Lord appear to Gideon while he was beating out wheat in a winepress to hide it from the Midianites, greeting him: \"The Lord is with you, O mighty man of valor\"?",
    "options": [
      "Judges",
      "Joshua",
      "1 Samuel",
      "Ruth"
    ],
    "correct_answer": "Judges",
    "explanation": "Judges 6 records the call of Gideon threshing wheat in the winepress at Ophrah.",
    "reference": "Judges 6:11–24",
    "metadata": {
      "question_type": "The Book Detective",
      "is_typed": false,
      "clues": [
        "Gideon asked: \"Please, my lord, if the Lord is with us, why then has all this happened to us? And where are all his wonderful deeds...?\"",
        "Gideon prepared a young goat and unleavened cakes; the angel touched them with his staff and fire sprang from the rock.",
        "Found in chapter 6."
      ],
      "hint": "Book of Judges, chapter 6.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Judg"
      ],
      "stage": 8,
      "stage_title": "The Book Trap",
      "level_theme": "Book Trap Boss",
      "difficulty": "medium",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l40-c5",
    "game_slug": "find-the-bible-book",
    "level": 40,
    "challenge_index": 5,
    "question_text": "TYPE THE BIBLE BOOK:\nIn which book does King David, fleeing barefoot and weeping up the Mount of Olives during Absalom's rebellion, hear Shimei the son of Gera pelt him with stones and curse him as a \"man of blood,\" while David commands Abishai: \"Leave him alone, and let him curse, for the Lord has told him to\"?",
    "options": [
      "2 Samuel",
      "1 Samuel",
      "1 Kings",
      "1 Chronicles"
    ],
    "correct_answer": "2 Samuel",
    "explanation": "2 Samuel 16 describes David enduring the curses of Shimei during his flight from Jerusalem.",
    "reference": "2 Samuel 16:5–14",
    "metadata": {
      "question_type": "Type the Book",
      "is_typed": true,
      "clues": [
        "Shimei was of the clan of the house of Saul.",
        "David confessed: \"Behold, my own son seeks my life; how much more now may this Benjaminite!\"",
        "Recorded in chapter 16 of this book."
      ],
      "hint": "Second Samuel; chapter 16.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Second Samuel",
        "2Sam"
      ],
      "stage": 8,
      "stage_title": "The Book Trap",
      "level_theme": "Book Trap Boss",
      "difficulty": "master",
      "timerSeconds": 20,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l41-c1",
    "game_slug": "find-the-bible-book",
    "level": 41,
    "challenge_index": 1,
    "question_text": "EXPERT MULTI-STEP DEDUCTION:\nDeduce the Bible book from three distinct forensic checkpoints:\n1. It records a contest on Mount Carmel between one prophet and 450 pagan prophets.\n2. It recounts King Ahab coveting Naboth's vineyard in Jezreel and Jezebel having Naboth stoned on false blasphemy charges.\n3. It concludes with the prophetic translation of Elijah in chapter 2 of its companion book.\nWhich book contains checkpoints 1 and 2?",
    "options": [
      "1 Kings",
      "2 Kings",
      "1 Chronicles",
      "2 Chronicles"
    ],
    "correct_answer": "1 Kings",
    "explanation": "1 Kings contains Mount Carmel (ch 18) and Naboth's vineyard (ch 21).",
    "reference": "1 Kings 18:20–40; 21:1–16",
    "metadata": {
      "question_type": "The Book Detective",
      "is_typed": false,
      "clues": [
        "Covers the reign of Solomon, the division of the monarchy into Israel and Judah, and King Ahab.",
        "Contains chapters 1 to 22.",
        "First volume of the Kings narrative."
      ],
      "hint": "First Kings.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "First Kings",
        "1Kgs"
      ],
      "stage": 9,
      "stage_title": "Expert Book Challenge",
      "level_theme": "Multi-Step Book Deduction",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l41-c2",
    "game_slug": "find-the-bible-book",
    "level": 41,
    "challenge_index": 2,
    "question_text": "EXPERT MULTI-STEP DEDUCTION:\nDeduce the Bible book from three distinct forensic checkpoints:\n1. It mentions a disciple named Tabitha (Dorcas) raised from the dead in Joppa.\n2. It describes a Roman centurion named Cornelius seeing an angel in Caesarea.\n3. It documents the Jerusalem Council debating Gentile circumcision in chapter 15.",
    "options": [
      "Acts",
      "Acts of the Apostles",
      "Romans",
      "Galatians"
    ],
    "correct_answer": "Acts",
    "explanation": "Acts contains Dorcas (ch 9), Cornelius (ch 10), and the Jerusalem Council (ch 15).",
    "reference": "Acts 9:36–42; 10:1–8; 15:1–29",
    "metadata": {
      "question_type": "The Book Detective",
      "is_typed": false,
      "clues": [
        "Documents the expansion of the church from Judea to Samaria and the Gentiles.",
        "Written by the physician Luke.",
        "Contains 28 chapters."
      ],
      "hint": "Book of Acts.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Acts of the Apostles",
        "Act"
      ],
      "stage": 9,
      "stage_title": "Expert Book Challenge",
      "level_theme": "Multi-Step Book Deduction",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l41-c3",
    "game_slug": "find-the-bible-book",
    "level": 41,
    "challenge_index": 3,
    "question_text": "TYPE THE BIBLE BOOK:\nDeduce the Bible book from three distinct forensic checkpoints:\n1. It contains the riddle of the two great eagles, the cedar sprig, and the fruitful vine in chapter 17.\n2. It describes the dramatic departure of God's Shekinah glory from the threshold of the temple over the Mount of Olives in chapters 10–11.\n3. It concludes with nine chapters detailing the vision of the restored temple and the river flowing from the sanctuary to sweeten the Dead Sea.",
    "options": [
      "Ezekiel",
      "Daniel",
      "Jeremiah",
      "Zechariah"
    ],
    "correct_answer": "Ezekiel",
    "explanation": "Ezekiel contains the departure of God's glory, the eagle riddle, and the temple river of life.",
    "reference": "Ezekiel 10:18–19; 17:1–10; 47:1–12",
    "metadata": {
      "question_type": "Type the Book",
      "is_typed": true,
      "clues": [
        "The prophet was a priest exiled in Babylon by the river Chebar.",
        "Addressed as \"Son of man\" over ninety times.",
        "Major prophet of 48 chapters."
      ],
      "hint": "Major prophet Ezekiel; starts with Ezek-.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Ezek"
      ],
      "stage": 9,
      "stage_title": "Expert Book Challenge",
      "level_theme": "Multi-Step Book Deduction",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l41-c4",
    "game_slug": "find-the-bible-book",
    "level": 41,
    "challenge_index": 4,
    "question_text": "EXPERT MULTI-STEP DEDUCTION:\nDeduce the Bible book from three distinct forensic checkpoints:\n1. It contains the parable of the trees choosing the thorny bramble as king.\n2. It recounts the story of a judge making a rash vow concerning whatever came out of his door to meet him after victory over the Ammonites (Jephthah).\n3. It describes a left-handed judge who made a double-edged dagger to execute the obese king Eglon of Moab.",
    "options": [
      "Judges",
      "Joshua",
      "1 Samuel",
      "Ruth"
    ],
    "correct_answer": "Judges",
    "explanation": "Judges records Ehud (ch 3), Jotham's bramble fable (ch 9), and Jephthah's vow (ch 11).",
    "reference": "Judges 3:15–22; 9:7–15; 11:30–40",
    "metadata": {
      "question_type": "The Book Detective",
      "is_typed": false,
      "clues": [
        "Spans the chaotic era between the death of Joshua and the rise of Samuel.",
        "Refrain: \"Everyone did what was right in his own eyes.\"",
        "Contains 21 chapters."
      ],
      "hint": "Book of Judges.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Judg"
      ],
      "stage": 9,
      "stage_title": "Expert Book Challenge",
      "level_theme": "Multi-Step Book Deduction",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l41-c5",
    "game_slug": "find-the-bible-book",
    "level": 41,
    "challenge_index": 5,
    "question_text": "TYPE THE BIBLE BOOK:\nDeduce the Bible book from three distinct forensic checkpoints:\n1. It contains the historical account of the four Lepers discovering the abandoned Syrian camp outside Samaria during a catastrophic siege famine.\n2. It recounts the translation of Elijah into heaven in a chariot and whirlwind of fire.\n3. It concludes with the Babylonian siege of Jerusalem, the blinding of King Zedekiah, and the destruction of the temple in 586 BC.",
    "options": [
      "2 Kings",
      "1 Kings",
      "2 Chronicles",
      "Jeremiah"
    ],
    "correct_answer": "2 Kings",
    "explanation": "2 Kings contains Elijah's ascension (ch 2), the four lepers at Samaria (ch 7), and the fall of Jerusalem (ch 25).",
    "reference": "2 Kings 2:11; 7:3–10; 25:1–11",
    "metadata": {
      "question_type": "Type the Book",
      "is_typed": true,
      "clues": [
        "Second volume of the Kings history.",
        "Documents the downfall of the northern kingdom to Assyria in chapter 17.",
        "Contains 25 chapters."
      ],
      "hint": "Second Kings.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Second Kings",
        "2Kgs"
      ],
      "stage": 9,
      "stage_title": "Expert Book Challenge",
      "level_theme": "Multi-Step Book Deduction",
      "difficulty": "master",
      "timerSeconds": 20,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l42-c1",
    "game_slug": "find-the-bible-book",
    "level": 42,
    "challenge_index": 1,
    "question_text": "Which book contains the unique ordinance of the Red Heifer without blemish, slaughtered outside the camp and burned with cedarwood, hyssop, and scarlet yarn to produce the water of cleansing for defilement by contact with a dead body?",
    "options": [
      "Numbers",
      "Leviticus",
      "Deuteronomy",
      "Exodus"
    ],
    "correct_answer": "Numbers",
    "explanation": "Numbers 19 details the ritual of the Red Heifer for purification from corpse defilement.",
    "reference": "Numbers 19:1–22",
    "metadata": {
      "question_type": "The Book Detective",
      "is_typed": false,
      "clues": [
        "Found in chapter 19 of this Pentateuch book.",
        "Precedes Moses striking the rock in anger at Meribah in chapter 20.",
        "Hebrew title means \"In the wilderness\"."
      ],
      "hint": "Fourth book of Moses; starts with Num-.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Num"
      ],
      "stage": 9,
      "stage_title": "Expert Book Challenge",
      "level_theme": "Ceremonial & Legal Books",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l42-c2",
    "game_slug": "find-the-bible-book",
    "level": 42,
    "challenge_index": 2,
    "question_text": "In which book do we find the law of the \"Sotah\" (the trial of jealousy), where a woman suspected of infidelity by her husband drinks bitter water mixed with holy water and dust from the tabernacle floor before the priest?",
    "options": [
      "Numbers",
      "Leviticus",
      "Deuteronomy",
      "Exodus"
    ],
    "correct_answer": "Numbers",
    "explanation": "Numbers 5 outlines the jealousy ordeal involving the bitter water and tabernacle dust.",
    "reference": "Numbers 5:11–31; 6:1–21",
    "metadata": {
      "question_type": "The Book Detective",
      "is_typed": false,
      "clues": [
        "Found in chapter 5 of this book.",
        "Covers the consecration of the Nazirite vow in chapter 6.",
        "Follows the first wilderness census."
      ],
      "hint": "Fourth book of the Bible; Numbers.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Num"
      ],
      "stage": 9,
      "stage_title": "Expert Book Challenge",
      "level_theme": "Ceremonial & Legal Books",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l42-c3",
    "game_slug": "find-the-bible-book",
    "level": 42,
    "challenge_index": 3,
    "question_text": "TYPE THE BIBLE BOOK:\nWhich book contains the exact legislation for the Year of Jubilee (Yovel) every fiftieth year, when liberty was proclaimed across the land, debts were released, ancestral land returned to original families, and Hebrew indentured servants were freed?",
    "options": [
      "Leviticus",
      "Deuteronomy",
      "Numbers",
      "Exodus"
    ],
    "correct_answer": "Leviticus",
    "explanation": "Leviticus 25 contains the complete legislation for the Sabbatical Year and 50th Year of Jubilee.",
    "reference": "Leviticus 25:8–24",
    "metadata": {
      "question_type": "Type the Book",
      "is_typed": true,
      "clues": [
        "Inaugurated on the Day of Atonement with the loud blast of the ram's horn (shofar).",
        "Contains the declaration: \"The land shall not be sold in perpetuity, for the land is mine. For you are strangers and sojourners with me.\"",
        "Found in chapter 25."
      ],
      "hint": "Third book of the Pentateuch; begins with Lev-.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Lev"
      ],
      "stage": 9,
      "stage_title": "Expert Book Challenge",
      "level_theme": "Ceremonial & Legal Books",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l42-c4",
    "game_slug": "find-the-bible-book",
    "level": 42,
    "challenge_index": 4,
    "question_text": "In which book do we find the tragic death of Nadab and Abihu, the two eldest sons of Aaron, who offered unauthorized (\"strange\") fire before the Lord which He had not commanded them, whereupon fire came out from the Lord and consumed them?",
    "options": [
      "Leviticus",
      "Numbers",
      "Exodus",
      "Deuteronomy"
    ],
    "correct_answer": "Leviticus",
    "explanation": "Leviticus 10 records the judgment on Nadab and Abihu for offering unauthorized incense fire.",
    "reference": "Leviticus 10:1–7",
    "metadata": {
      "question_type": "The Book Detective",
      "is_typed": false,
      "clues": [
        "Moses said to Aaron: \"This is what the Lord has said: 'Among those who are near me I will be sanctified, and before all the people I will be glorified.' And Aaron held his peace.\"",
        "Aaron and his remaining sons were forbidden to dishevel their hair or tear their clothes.",
        "Found in chapter 10 of this priestly book."
      ],
      "hint": "Third book of Moses; deals with priestly regulations.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Lev"
      ],
      "stage": 9,
      "stage_title": "Expert Book Challenge",
      "level_theme": "Ceremonial & Legal Books",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l42-c5",
    "game_slug": "find-the-bible-book",
    "level": 42,
    "challenge_index": 5,
    "question_text": "TYPE THE BIBLE BOOK:\nWhich book contains the legal statute requiring an unworked heifer's neck to be broken in a rugged valley with running water by the city elders when an unsolved murder victim is found in an open field, after which they wash their hands over the heifer and declare: \"Our hands did not shed this blood, nor did our eyes see it\"?",
    "options": [
      "Deuteronomy",
      "Leviticus",
      "Numbers",
      "Exodus"
    ],
    "correct_answer": "Deuteronomy",
    "explanation": "Deuteronomy 21:1–9 outlines the ritual of the unbroken heifer for atonement of an unsolved murder.",
    "reference": "Deuteronomy 21:1–9",
    "metadata": {
      "question_type": "Type the Book",
      "is_typed": true,
      "clues": [
        "Found in chapter 21 of this book.",
        "A covenant law book delivered on the plains of Moab.",
        "Fifth book of the Bible."
      ],
      "hint": "Fifth book of Moses; begins with Deut-.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Deut"
      ],
      "stage": 9,
      "stage_title": "Expert Book Challenge",
      "level_theme": "Ceremonial & Legal Books",
      "difficulty": "master",
      "timerSeconds": 20,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l43-c1",
    "game_slug": "find-the-bible-book",
    "level": 43,
    "challenge_index": 1,
    "question_text": "In which prophetic book does Amaziah, the idolatrous court priest of Bethel, send a message to King Jeroboam II of Israel saying: \"Amos has conspired against you in the midst of the house of Israel,\" and ordering the prophet: \"O seer, go, flee away to the land of Judah, and eat bread there, and prophesy there; but never again prophesy at Bethel, for it is the king's sanctuary\"?",
    "options": [
      "Amos",
      "Hosea",
      "Micah",
      "Jonah"
    ],
    "correct_answer": "Amos",
    "explanation": "Amos 7:10–15 records Amaziah the priest of Bethel trying to banish Amos back to Judah.",
    "reference": "Amos 7:10–15",
    "metadata": {
      "question_type": "The Book Detective",
      "is_typed": false,
      "clues": [
        "The prophet replied: \"I was no prophet, nor a prophet's son, but I was a herdsman and a dresser of sycamore figs. But the Lord took me from following the flock.\"",
        "Recorded in chapter 7.",
        "Third of the Minor Prophets."
      ],
      "hint": "Four-letter Minor Prophet from Tekoa.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Am"
      ],
      "stage": 9,
      "stage_title": "Expert Book Challenge",
      "level_theme": "Minor Prophet History",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l43-c2",
    "game_slug": "find-the-bible-book",
    "level": 43,
    "challenge_index": 2,
    "question_text": "In which book is the prophet commanded to give prophetic names to three children: Jezreel (\"for yet a little while, and I will punish the house of Jehu\"), No Mercy (Lo-ruhamah), and Not My People (Lo-ammi: \"for you are not my people, and I am not your God\")?",
    "options": [
      "Hosea",
      "Amos",
      "Joel",
      "Micah"
    ],
    "correct_answer": "Hosea",
    "explanation": "Hosea 1 details the prophetic naming of Jezreel, Lo-ruhamah, and Lo-ammi.",
    "reference": "Hosea 1:2–9",
    "metadata": {
      "question_type": "The Book Detective",
      "is_typed": false,
      "clues": [
        "The mother of these children was Gomer daughter of Diblaim.",
        "Symbolized Israel's covenant infidelity and God's ultimate restorative mercy.",
        "First of the Twelve Minor Prophets."
      ],
      "hint": "Prophet commanded to marry Gomer; five letters.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Hos"
      ],
      "stage": 9,
      "stage_title": "Expert Book Challenge",
      "level_theme": "Minor Prophet History",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l43-c3",
    "game_slug": "find-the-bible-book",
    "level": 43,
    "challenge_index": 3,
    "question_text": "TYPE THE BIBLE BOOK:\nWhich book contains eight night visions including horses among the myrtle trees, four horns and four craftsmen, a man with a measuring line, and Satan standing at the right hand of Joshua the high priest to accuse him as Joshua stands clothed in filthy garments?",
    "options": [
      "Zechariah",
      "Haggai",
      "Malachi",
      "Daniel"
    ],
    "correct_answer": "Zechariah",
    "explanation": "Zechariah 1–6 contains the famous eight night visions including Joshua the high priest before Satan.",
    "reference": "Zechariah 1:7–6:8; 3:1–5",
    "metadata": {
      "question_type": "Type the Book",
      "is_typed": true,
      "clues": [
        "An angel removes Joshua's filthy garments and puts clean vestments and a clean turban on his head.",
        "Foretells the coming of God's servant \"the Branch\".",
        "Fourteen chapters; post-exilic prophet contemporary with Haggai."
      ],
      "hint": "Zechariah; starts with Zech-.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Zech"
      ],
      "stage": 9,
      "stage_title": "Expert Book Challenge",
      "level_theme": "Minor Prophet History",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l43-c4",
    "game_slug": "find-the-bible-book",
    "level": 43,
    "challenge_index": 4,
    "question_text": "In which book does Jonah sit in a booth east of Nineveh waiting to see what would become of the city, where God appoints a plant (castor oil plant / gourd) to shade his head, then appoints a worm at dawn to attack the plant so that it withers, and finally appoints a scorching east wind?",
    "options": [
      "Jonah",
      "Nahum",
      "Micah",
      "Habakkuk"
    ],
    "correct_answer": "Jonah",
    "explanation": "Jonah 4 concludes with the object lesson of the withered plant and God's mercy on Nineveh.",
    "reference": "Jonah 4:1–11",
    "metadata": {
      "question_type": "The Book Detective",
      "is_typed": false,
      "clues": [
        "Jonah pitied the plant for which he did not labor, yet was angry that Nineveh was spared.",
        "God asks: \"Should not I pity Nineveh, that great city, in which there are more than 120,000 persons who do not know their right hand from their left, and also much cattle?\"",
        "Final chapter of this four-chapter book."
      ],
      "hint": "Book of Jonah; chapter 4.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Jon"
      ],
      "stage": 9,
      "stage_title": "Expert Book Challenge",
      "level_theme": "Minor Prophet History",
      "difficulty": "easy",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l43-c5",
    "game_slug": "find-the-bible-book",
    "level": 43,
    "challenge_index": 5,
    "question_text": "TYPE THE BIBLE BOOK:\nIn which book does God pronounce judgment upon the cities of Philistia: \"Gaza shall be deserted, and Ashkelon shall become a desolation; Ashdod's people shall be driven out at noon, and Ekron shall be uprooted. Woe to the inhabitants of the seacoast, the nation of the Cherethites!\"?",
    "options": [
      "Zephaniah",
      "Habakkuk",
      "Nahum",
      "Obadiah"
    ],
    "correct_answer": "Zephaniah",
    "explanation": "Zephaniah 2:4–7 foretells the desolation of Philistine coastal cities.",
    "reference": "Zephaniah 2:4–7",
    "metadata": {
      "question_type": "Type the Book",
      "is_typed": true,
      "clues": [
        "Written by a prophet whose genealogy is traced back to King Hezekiah.",
        "Contains 3 chapters; situated right before Haggai.",
        "Pronounces doom on Moab, Ammon, Cush, and Assyria."
      ],
      "hint": "Starts with Z; nine letters.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Zeph"
      ],
      "stage": 9,
      "stage_title": "Expert Book Challenge",
      "level_theme": "Minor Prophet History",
      "difficulty": "master",
      "timerSeconds": 20,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l44-c1",
    "game_slug": "find-the-bible-book",
    "level": 44,
    "challenge_index": 1,
    "question_text": "In which book does Stephen the deacon deliver his sweeping historical defense before the Sanhedrin, tracing salvation history from Abraham in Mesopotamia, Joseph in Egypt, Moses at the burning bush, to Solomon's temple, before crying: \"You stiff-necked people... you always resist the Holy Spirit\"?",
    "options": [
      "Acts",
      "Acts of the Apostles",
      "Hebrews",
      "Romans"
    ],
    "correct_answer": "Acts",
    "explanation": "Acts 7 is Stephen's speech before the Sanhedrin preceding his martyrdom.",
    "reference": "Acts 7:1–60",
    "metadata": {
      "question_type": "The Book Detective",
      "is_typed": false,
      "clues": [
        "They were enraged and ground their teeth at him.",
        "Stephen looked up into heaven and saw the glory of God, and Jesus standing at the right hand of God.",
        "Found in chapter 7."
      ],
      "hint": "Fifth book of the New Testament; chapter 7.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Acts of the Apostles",
        "Act"
      ],
      "stage": 9,
      "stage_title": "Expert Book Challenge",
      "level_theme": "Forgotten Monologues",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l44-c2",
    "game_slug": "find-the-bible-book",
    "level": 44,
    "challenge_index": 2,
    "question_text": "In which epistle does Peter send greetings from Rome using the symbolic code name: \"She who is at Babylon, who is likewise chosen, sends you greetings, and so does Mark, my son. Greet one another with the kiss of love\"?",
    "options": [
      "1 Peter",
      "2 Peter",
      "Revelation",
      "Jude"
    ],
    "correct_answer": "1 Peter",
    "explanation": "1 Peter 5:13 mentions \"She who is at Babylon\" (the church in Rome) and Mark.",
    "reference": "1 Peter 1:1; 5:13–14",
    "metadata": {
      "question_type": "The Book Detective",
      "is_typed": false,
      "clues": [
        "Addressed to elect exiles of the Dispersion in Pontus, Galatia, Cappadocia, Asia, and Bithynia.",
        "Emphasizes enduring suffering for righteousness' sake.",
        "First letter bearing Peter's name."
      ],
      "hint": "First Epistle of Peter; chapter 5.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "First Peter",
        "1Pet"
      ],
      "stage": 9,
      "stage_title": "Expert Book Challenge",
      "level_theme": "Forgotten Monologues",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l44-c3",
    "game_slug": "find-the-bible-book",
    "level": 44,
    "challenge_index": 3,
    "question_text": "TYPE THE BIBLE BOOK:\nIn which Pastoral Epistle does Paul instruct his coworker to teach sound doctrine to older men, older women, younger women, and young men, commanding: \"Show yourself in all respects to be a model of good works... Remind them to be submissive to rulers and authorities, to be obedient, to be ready for every good work\"?",
    "options": [
      "Titus",
      "1 Timothy",
      "2 Timothy",
      "Philemon"
    ],
    "correct_answer": "Titus",
    "explanation": "Titus 2–3 outlines practical Christian discipleship across age groups for the churches of Crete.",
    "reference": "Titus 2:1–8; 3:1–2",
    "metadata": {
      "question_type": "Type the Book",
      "is_typed": true,
      "clues": [
        "Written to a coworker stationed on the island of Crete.",
        "Three chapters in length; stands between 2 Timothy and Philemon.",
        "Warns against Jewish myths and foolish controversies about the law."
      ],
      "hint": "Five-letter name; Paul's delegate on Crete.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Tit"
      ],
      "stage": 9,
      "stage_title": "Expert Book Challenge",
      "level_theme": "Forgotten Monologues",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l44-c4",
    "game_slug": "find-the-bible-book",
    "level": 44,
    "challenge_index": 4,
    "question_text": "In which book does the Apostle Paul deliver his emotional farewell address to the Ephesian elders at Miletus: \"And now, behold, I know that none of you among whom I have gone about proclaiming the kingdom will see my face again... I know that after my departure fierce wolves will come in among you, not sparing the flock\"?",
    "options": [
      "Acts",
      "Ephesians",
      "1 Timothy",
      "2 Timothy"
    ],
    "correct_answer": "Acts",
    "explanation": "Acts 20:17–38 records Paul's moving farewell charge to the Ephesian elders at Miletus.",
    "reference": "Acts 20:17–38",
    "metadata": {
      "question_type": "The Book Detective",
      "is_typed": false,
      "clues": [
        "He quotes Jesus: \"It is more blessed to give than to receive.\"",
        "They knelt down, wept loudly, and embraced and kissed him, grieving especially over his statement that they would not see his face again.",
        "Found in chapter 20."
      ],
      "hint": "Book of Acts, chapter 20.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Acts of the Apostles",
        "Act"
      ],
      "stage": 9,
      "stage_title": "Expert Book Challenge",
      "level_theme": "Forgotten Monologues",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l44-c5",
    "game_slug": "find-the-bible-book",
    "level": 44,
    "challenge_index": 5,
    "question_text": "TYPE THE BIBLE BOOK:\nIn which book does Paul write of his mysterious heavenly experience fourteen years earlier: \"I know a man in Christ who fourteen years ago was caught up to the third heaven... into paradise—and he heard things that cannot be told, which man may not utter\", followed by his \"thorn in the flesh\"?",
    "options": [
      "2 Corinthians",
      "1 Corinthians",
      "Galatians",
      "Ephesians"
    ],
    "correct_answer": "2 Corinthians",
    "explanation": "2 Corinthians 12 records Paul's vision of the third heaven and his thorn in the flesh.",
    "reference": "2 Corinthians 12:1–10",
    "metadata": {
      "question_type": "Type the Book",
      "is_typed": true,
      "clues": [
        "The Lord replied to him: \"My grace is sufficient for you, for my power is made perfect in weakness.\"",
        "Thirteen chapters; written from Macedonia defending his apostolic ministry.",
        "Second letter to this Greek church."
      ],
      "hint": "Second Corinthians, chapter 12.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Second Corinthians",
        "2Cor"
      ],
      "stage": 9,
      "stage_title": "Expert Book Challenge",
      "level_theme": "Forgotten Monologues",
      "difficulty": "master",
      "timerSeconds": 20,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l45-c1",
    "game_slug": "find-the-bible-book",
    "level": 45,
    "challenge_index": 1,
    "question_text": "EXPERT BOOK BOSS:\nI contain this chilling description of King Herod Agrippa I: \"On an appointed day Herod put on his royal robes, took his seat upon the throne, and delivered an oration to them. And the people were shouting, 'The voice of a god, and not of a man!' Immediately an angel of the Lord struck him down, because he did not give God the glory, and he was eaten by worms and breathed his last.\" Which book am I?",
    "options": [
      "Acts",
      "Acts of the Apostles",
      "Luke",
      "Matthew"
    ],
    "correct_answer": "Acts",
    "explanation": "Acts 12:21–23 records the gruesome death of Herod Agrippa I at Caesarea after accepting divine praise.",
    "reference": "Acts 12:21–24",
    "metadata": {
      "question_type": "The Book Detective",
      "is_typed": false,
      "clues": [
        "Followed immediately by: \"But the word of God increased and multiplied.\"",
        "Recorded in chapter 12 after the miraculous deliverance of Peter from prison.",
        "Occurred in the seaside administrative capital of Caesarea."
      ],
      "hint": "Book of Acts, chapter 12.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Acts of the Apostles",
        "Act"
      ],
      "stage": 9,
      "stage_title": "Expert Book Challenge",
      "level_theme": "Expert Book Boss",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l45-c2",
    "game_slug": "find-the-bible-book",
    "level": 45,
    "challenge_index": 2,
    "question_text": "EXPERT BOOK BOSS:\nWhich TWO books record the terrifying execution of Queen Jezebel in Jezreel, where General Jehu commands two or three eunuchs to throw her down from the upper palace window, horses trample her, and stray dogs devour her flesh so that nothing remained except her skull, feet, and the palms of her hands?",
    "options": [
      "1 Kings and 2 Kings",
      "2 Kings and 2 Chronicles",
      "1 Samuel and 2 Samuel",
      "Judges and Ruth"
    ],
    "correct_answer": "1 Kings and 2 Kings",
    "explanation": "Elijah's prophecy of Jezebel's death is in 1 Kings 21, and its gruesome fulfillment is in 2 Kings 9.",
    "reference": "1 Kings 21:23; 2 Kings 9:30–37",
    "metadata": {
      "question_type": "Two Books, One Story",
      "is_typed": false,
      "clues": [
        "Fulfills the prophecy of Elijah: \"The dogs shall eat the flesh of Jezebel within the walls of Jezreel.\"",
        "One book narrates the event in real time (chapter 9).",
        "The companion preceding book contains Elijah's original prophecy in chapter 21."
      ],
      "hint": "1 Kings and 2 Kings.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "1 Kings & 2 Kings",
        "1Kgs and 2Kgs"
      ],
      "stage": 9,
      "stage_title": "Expert Book Challenge",
      "level_theme": "Expert Book Boss",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l45-c3",
    "game_slug": "find-the-bible-book",
    "level": 45,
    "challenge_index": 3,
    "question_text": "TYPE THE BIBLE BOOK:\nIn which book does the author write this severe warning against apostasy: \"For it is impossible, in the case of those who have once been enlightened, who have tasted the heavenly gift, and have shared in the Holy Spirit, and have tasted the goodness of the word of God... and then have fallen away, to restore them again to repentance, since they are crucifying once again the Son of God to their own harm\"?",
    "options": [
      "Hebrews",
      "Romans",
      "Galatians",
      "2 Peter"
    ],
    "correct_answer": "Hebrews",
    "explanation": "Hebrews 6:4–6 is the famous warning passage concerning apostasy and spiritual maturity.",
    "reference": "Hebrews 6:4–6",
    "metadata": {
      "question_type": "Type the Book",
      "is_typed": true,
      "clues": [
        "Found in chapter 6 of this epistle.",
        "Urges believers to leave the elementary doctrine of Christ and go on to maturity.",
        "Contains 13 chapters."
      ],
      "hint": "Epistle to the Hebrews, chapter 6.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Heb"
      ],
      "stage": 9,
      "stage_title": "Expert Book Challenge",
      "level_theme": "Expert Book Boss",
      "difficulty": "master",
      "timerSeconds": 20,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l45-c4",
    "game_slug": "find-the-bible-book",
    "level": 45,
    "challenge_index": 4,
    "question_text": "EXPERT BOOK BOSS:\nI record the account of King Asa putting Hanani the seer in stocks in prison because Hanani rebuked him for relying on the King of Syria instead of the Lord: \"For the eyes of the Lord run to and fro throughout the whole earth, to give strong support to those whose heart is blameless toward him. You have done foolishly in this; for from now on you will have wars.\" In which book is this recorded?",
    "options": [
      "2 Chronicles",
      "1 Kings",
      "2 Kings",
      "1 Chronicles"
    ],
    "correct_answer": "2 Chronicles",
    "explanation": "2 Chronicles 16:9 contains the famous verse about God's eyes running to and fro throughout the earth.",
    "reference": "2 Chronicles 16:7–10",
    "metadata": {
      "question_type": "The Book Detective",
      "is_typed": false,
      "clues": [
        "Unique to this priestly historical narrative in chapter 16.",
        "Asa became angry with the seer and enraged with him because of this.",
        "Second volume of this work."
      ],
      "hint": "Second Chronicles, chapter 16.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Second Chronicles",
        "2Chr"
      ],
      "stage": 9,
      "stage_title": "Expert Book Challenge",
      "level_theme": "Expert Book Boss",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l45-c5",
    "game_slug": "find-the-bible-book",
    "level": 45,
    "challenge_index": 5,
    "question_text": "TYPE THE BIBLE BOOK:\nIn which prophetic book does God command the prophet to act out the siege of Jerusalem by taking a brick, carving Jerusalem upon it, putting an iron griddle between himself and the brick, and lying on his left side for 390 days to bear the punishment of Israel, then on his right side for 40 days to bear the punishment of Judah?",
    "options": [
      "Ezekiel",
      "Jeremiah",
      "Daniel",
      "Isaiah"
    ],
    "correct_answer": "Ezekiel",
    "explanation": "Ezekiel 4 details the dramatic symbolic enactment of Jerusalem's siege and the prophet lying on his sides.",
    "reference": "Ezekiel 4:1–17",
    "metadata": {
      "question_type": "Type the Book",
      "is_typed": true,
      "clues": [
        "Commended to bake barley cakes using cow's dung as fuel.",
        "Priest-prophet living in Babylon by the Chebar canal.",
        "Found in chapter 4."
      ],
      "hint": "Major prophet Ezekiel; chapter 4.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Ezek"
      ],
      "stage": 9,
      "stage_title": "Expert Book Challenge",
      "level_theme": "Expert Book Boss",
      "difficulty": "master",
      "timerSeconds": 20,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l46-c1",
    "game_slug": "find-the-bible-book",
    "level": 46,
    "challenge_index": 1,
    "question_text": "FORENSIC MASTER DOSSIER:\nI contain this historical detail: King Joash of Judah commands Zechariah the son of Jehoiada the priest to be stoned to death in the courtyard of the house of the Lord because Zechariah confronted the nation's apostasy, dying with the cry: \"May the Lord see and avenge!\" Jesus referenced this murder as marking the final martyr of the Hebrew canon. In which book is this recorded?",
    "options": [
      "2 Chronicles",
      "2 Kings",
      "1 Kings",
      "Nehemiah"
    ],
    "correct_answer": "2 Chronicles",
    "explanation": "2 Chronicles 24:20–22 records the martyrdom of Zechariah son of Jehoiada, concluding the martyrology of the Hebrew canon.",
    "reference": "2 Chronicles 24:20–22; Luke 11:51",
    "metadata": {
      "question_type": "The Book Detective",
      "is_typed": false,
      "clues": [
        "Joash forgot the steadfast love which Jehoiada had shown him and killed his son.",
        "Jesus cites: \"from the blood of Abel to the blood of Zechariah who perished between the altar and the sanctuary\" (Luke 11:51).",
        "Found in chapter 24."
      ],
      "hint": "Second Chronicles, chapter 24.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Second Chronicles",
        "2Chr"
      ],
      "stage": 10,
      "stage_title": "Ultimate Book Master",
      "level_theme": "Forensic Master Dossiers",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l46-c2",
    "game_slug": "find-the-bible-book",
    "level": 46,
    "challenge_index": 2,
    "question_text": "FORENSIC MASTER DOSSIER:\nI contain this unique incident: A young man named Eutychus was sitting on the windowsill of a third-story room in Troas during Paul's prolonged farewell sermon. As Paul talked on until midnight, Eutychus was overcome by deep sleep, fell down from the third story, and was picked up dead. Paul went down, fell upon him, embraced him, and said, \"Do not be alarmed, for his life is in him.\" In which book is this recorded?",
    "options": [
      "Acts",
      "Acts of the Apostles",
      "Romans",
      "2 Timothy"
    ],
    "correct_answer": "Acts",
    "explanation": "Acts 20:7–12 records Paul raising young Eutychus from the dead at Troas.",
    "reference": "Acts 20:7–12",
    "metadata": {
      "question_type": "The Book Detective",
      "is_typed": false,
      "clues": [
        "Written by Luke, who was present (a \"we\" passage in chapter 20).",
        "They took the youth away alive and were not a little comforted.",
        "Fifth book of the New Testament."
      ],
      "hint": "Book of Acts, chapter 20.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Acts of the Apostles",
        "Act"
      ],
      "stage": 10,
      "stage_title": "Ultimate Book Master",
      "level_theme": "Forensic Master Dossiers",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l46-c3",
    "game_slug": "find-the-bible-book",
    "level": 46,
    "challenge_index": 3,
    "question_text": "TYPE THE BIBLE BOOK:\nIn which book does God command the prophet to take a massive iron cooking griddle, shave his head and beard with a sharp barber's sword, divide his hair into three parts by weight—burning one third in the fire, striking one third with the sword around the city, and scattering one third to the wind, binding only a few hairs in his coat skirts?",
    "options": [
      "Ezekiel",
      "Jeremiah",
      "Daniel",
      "Isaiah"
    ],
    "correct_answer": "Ezekiel",
    "explanation": "Ezekiel 5:1–4 records Ezekiel shaving his hair and dividing it into three portions to symbolize Jerusalem's destruction.",
    "reference": "Ezekiel 5:1–4",
    "metadata": {
      "question_type": "Type the Book",
      "is_typed": true,
      "clues": [
        "Symbolized the three fates of the citizens of Jerusalem during the Babylonian destruction.",
        "Found in chapter 5 of this exilic book.",
        "Priest-prophet Ezekiel."
      ],
      "hint": "Major prophet Ezekiel; chapter 5.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Ezek"
      ],
      "stage": 10,
      "stage_title": "Ultimate Book Master",
      "level_theme": "Forensic Master Dossiers",
      "difficulty": "master",
      "timerSeconds": 20,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l46-c4",
    "game_slug": "find-the-bible-book",
    "level": 46,
    "challenge_index": 4,
    "question_text": "FORENSIC MASTER DOSSIER:\nI contain this dramatic moment: King Jehoiakim sat in his winter house by a burning hearth fire during the ninth month. As Jehudi read three or four columns of the prophet's scroll, the king cut it with a penknife and threw it into the fire until the entire scroll was consumed, refusing to show fear or tear his clothes. In which book is this recorded?",
    "options": [
      "Jeremiah",
      "2 Kings",
      "2 Chronicles",
      "Isaiah"
    ],
    "correct_answer": "Jeremiah",
    "explanation": "Jeremiah 36 recounts King Jehoiakim cutting and burning the prophetic scroll in his winter hearth.",
    "reference": "Jeremiah 36:20–32",
    "metadata": {
      "question_type": "The Book Detective",
      "is_typed": false,
      "clues": [
        "Jeremiah and his scribe Baruch went into hiding.",
        "God commanded Jeremiah to dictate another scroll containing all the original words plus many more.",
        "Found in chapter 36."
      ],
      "hint": "Book of Jeremiah, chapter 36.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Jer"
      ],
      "stage": 10,
      "stage_title": "Ultimate Book Master",
      "level_theme": "Forensic Master Dossiers",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l46-c5",
    "game_slug": "find-the-bible-book",
    "level": 46,
    "challenge_index": 5,
    "question_text": "TYPE THE BIBLE BOOK:\nWhich book mentions a Christian woman named Lydia from the city of Thyatira, a seller of expensive purple fabrics in Philippi, who worshipped God and whose heart the Lord opened to pay attention to Paul's preaching, resulting in her baptism and opening her home to the mission team?",
    "options": [
      "Acts",
      "Acts of the Apostles",
      "Philippians",
      "Romans"
    ],
    "correct_answer": "Acts",
    "explanation": "Acts 16:14–15 records Lydia's conversion and baptism in Philippi.",
    "reference": "Acts 16:14–15",
    "metadata": {
      "question_type": "Type the Book",
      "is_typed": true,
      "clues": [
        "The first recorded European convert to Christianity.",
        "She said: \"If you have judged me to be faithful to the Lord, come to my house and stay.\"",
        "Recorded in chapter 16."
      ],
      "hint": "Book of Acts, chapter 16.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Acts of the Apostles",
        "Act"
      ],
      "stage": 10,
      "stage_title": "Ultimate Book Master",
      "level_theme": "Forensic Master Dossiers",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l47-c1",
    "game_slug": "find-the-bible-book",
    "level": 47,
    "challenge_index": 1,
    "question_text": "CANON ARCHITECT:\nHow many total books comprise the traditional Protestant biblical canon, how many are in the Old Testament, and how many are in the New Testament?",
    "options": [
      "66 books total (39 Old Testament + 27 New Testament)",
      "70 books total (40 Old Testament + 30 New Testament)",
      "73 books total (46 Old Testament + 27 New Testament)",
      "60 books total (36 Old Testament + 24 New Testament)"
    ],
    "correct_answer": "66 books total (39 Old Testament + 27 New Testament)",
    "explanation": "The Protestant Bible consists of exactly 66 books: 39 in the Old Testament and 27 in the New Testament.",
    "reference": "Standard Protestant Biblical Canon",
    "metadata": {
      "question_type": "Book Classification Challenge",
      "is_typed": false,
      "clues": [
        "39 books from Genesis to Malachi.",
        "27 books from Matthew to Revelation.",
        "39 + 27 = 66."
      ],
      "hint": "66 books: 39 Old and 27 New.",
      "testament": "Both",
      "acceptedAlternatives": [
        "66",
        "66 books"
      ],
      "stage": 10,
      "stage_title": "Ultimate Book Master",
      "level_theme": "The Canon Architect",
      "difficulty": "easy",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l47-c2",
    "game_slug": "find-the-bible-book",
    "level": 47,
    "challenge_index": 2,
    "question_text": "CANON ARCHITECT:\nWhich of the following books is classified as one of the Five Megillot (the Five Festive Scrolls read on major Jewish holidays in the Ketuvim/Writings section of the Hebrew Bible)?",
    "options": [
      "Ruth",
      "Job",
      "Daniel",
      "Ezra"
    ],
    "correct_answer": "Ruth",
    "explanation": "Ruth is one of the Five Megillot, traditionally read at Shavuot (Pentecost) celebrating the grain harvest.",
    "reference": "Ruth 1–4; Jewish Liturgical Tradition (Five Megillot)",
    "metadata": {
      "question_type": "Book Classification Challenge",
      "is_typed": false,
      "clues": [
        "The Five Megillot are Song of Solomon (Passover), Ruth (Shavuot/Pentecost), Lamentations (Tisha B'Av), Ecclesiastes (Sukkot), and Esther (Purim).",
        "This book celebrates covenant love and loyalty in Bethlehem.",
        "Four chapters."
      ],
      "hint": "Four-letter book named after David's great-grandmother.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Rth"
      ],
      "stage": 10,
      "stage_title": "Ultimate Book Master",
      "level_theme": "The Canon Architect",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l47-c3",
    "game_slug": "find-the-bible-book",
    "level": 47,
    "challenge_index": 3,
    "question_text": "TYPE THE BIBLE BOOK:\nWhich book contains the longest chapter in the entire Bible (chapter 119), structured as an elaborate 22-section Hebrew alphabetical acrostic of 176 verses celebrating the glory, perfection, and life-giving power of God's Word?",
    "options": [
      "Psalms",
      "Psalm",
      "Proverbs",
      "Lamentations"
    ],
    "correct_answer": "Psalms",
    "explanation": "The Book of Psalms contains Psalm 119, the longest chapter in Scripture with 176 verses in a 22-letter acrostic.",
    "reference": "Psalm 119:1–176",
    "metadata": {
      "question_type": "Type the Book",
      "is_typed": true,
      "clues": [
        "Each of the 22 eight-verse stanzas begins with a successive letter of the Hebrew alphabet (Aleph to Tav).",
        "Features terms: law, testimonies, precepts, statutes, commandments, rules, and word.",
        "The central book of the Old Testament."
      ],
      "hint": "Book containing Psalm 119.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Psalm",
        "Psa"
      ],
      "stage": 10,
      "stage_title": "Ultimate Book Master",
      "level_theme": "The Canon Architect",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l47-c4",
    "game_slug": "find-the-bible-book",
    "level": 47,
    "challenge_index": 4,
    "question_text": "CANON ARCHITECT:\nWhich group comprises the four distinct New Testament epistles traditionally known as Paul's \"Pastoral Epistles\", written to trusted coworkers providing pastoral directives for church oversight and ministry?",
    "options": [
      "1 Timothy, 2 Timothy, Titus, and Philemon",
      "Romans, Galatians, Ephesians, and Colossians",
      "1 Thessalonians, 2 Thessalonians, 1 Corinthians, and 2 Corinthians",
      "Hebrews, James, 1 Peter, and 2 Peter"
    ],
    "correct_answer": "1 Timothy, 2 Timothy, Titus, and Philemon",
    "explanation": "Paul's personal letters to individuals include the Pastoral Epistles (1 & 2 Tim, Titus) and the personal appeal to Philemon.",
    "reference": "1 Timothy, 2 Timothy, Titus, Philemon",
    "metadata": {
      "question_type": "Book Classification Challenge",
      "is_typed": false,
      "clues": [
        "Addressed to individual delegates, not entire regional churches.",
        "Two letters addressed to Timothy in Ephesus, one to Titus in Crete, and one to Philemon.",
        "Focus on church leadership, sound doctrine, and pastoral duties."
      ],
      "hint": "1 & 2 Timothy, Titus, and Philemon.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "1 & 2 Timothy, Titus, Philemon"
      ],
      "stage": 10,
      "stage_title": "Ultimate Book Master",
      "level_theme": "The Canon Architect",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l47-c5",
    "game_slug": "find-the-bible-book",
    "level": 47,
    "challenge_index": 5,
    "question_text": "TYPE THE BIBLE BOOK:\nWhat is the EXACT middle book of the entire 66-book Protestant Bible, located directly between the 33rd book (Micah) and the 35th book (Habakkuk)?",
    "options": [
      "Nahum",
      "Micah",
      "Habakkuk",
      "Zephaniah"
    ],
    "correct_answer": "Nahum",
    "explanation": "In a 66-book Bible, Nahum is the 34th book, standing directly in the center between the 33rd book (Micah) and the 35th book (Habakkuk).",
    "reference": "Nahum 1:1",
    "metadata": {
      "question_type": "Type the Book",
      "is_typed": true,
      "clues": [
        "The 34th book of the Bible.",
        "A three-chapter prophecy against Nineveh.",
        "Author was from Elkosh."
      ],
      "hint": "Five-letter prophet of Elkosh; begins with N.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Nah"
      ],
      "stage": 10,
      "stage_title": "Ultimate Book Master",
      "level_theme": "The Canon Architect",
      "difficulty": "master",
      "timerSeconds": 20,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l48-c1",
    "game_slug": "find-the-bible-book",
    "level": 48,
    "challenge_index": 1,
    "question_text": "TYPE THE BIBLE BOOK:\nWhich book records an account of an army marching with empty clay pitchers, trumpets, and torches, shouting \"A sword for the Lord and for Gideon!\"?",
    "options": [
      "Judges",
      "Joshua",
      "1 Samuel",
      "Ruth"
    ],
    "correct_answer": "Judges",
    "explanation": "Judges 7 narrates Gideon's battle with 300 men, pitchers, torches, and trumpets.",
    "reference": "Judges 7:16–22",
    "metadata": {
      "question_type": "Type the Book",
      "is_typed": true,
      "clues": [
        "The army was reduced to 300 men by a water test at the spring of Harod.",
        "Contains also the stories of Samson, Deborah, and Jephthah.",
        "Precedes the Book of Ruth."
      ],
      "hint": "Book of Judges.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Judg"
      ],
      "stage": 10,
      "stage_title": "Ultimate Book Master",
      "level_theme": "Type-the-Book Gauntlet",
      "difficulty": "easy",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l48-c2",
    "game_slug": "find-the-bible-book",
    "level": 48,
    "challenge_index": 2,
    "question_text": "TYPE THE BIBLE BOOK:\nWhich book contains the vision of four chariots coming out from between two mountains of bronze, pulled by red, black, white, and dappled steeds that patrol the earth?",
    "options": [
      "Zechariah",
      "Daniel",
      "Ezekiel",
      "Revelation"
    ],
    "correct_answer": "Zechariah",
    "explanation": "Zechariah 6 describes the four chariots coming from between the bronze mountains.",
    "reference": "Zechariah 6:1–8",
    "metadata": {
      "question_type": "Type the Book",
      "is_typed": true,
      "clues": [
        "Recorded in chapter 6 of this post-exilic prophetic book.",
        "Followed by the symbolic coronation of Joshua the high priest with crowns of silver and gold.",
        "Penultimate book of the Old Testament."
      ],
      "hint": "Nine letters; starts with Zech-.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Zech"
      ],
      "stage": 10,
      "stage_title": "Ultimate Book Master",
      "level_theme": "Type-the-Book Gauntlet",
      "difficulty": "master",
      "timerSeconds": 20,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l48-c3",
    "game_slug": "find-the-bible-book",
    "level": 48,
    "challenge_index": 3,
    "question_text": "TYPE THE BIBLE BOOK:\nWhich book records the dramatic scene of King Uzziah stricken with leprosy in his forehead while holding a censer of incense in the Holy Place of the temple, when Azariah the high priest and eighty valiant priests confronted his transgression?",
    "options": [
      "2 Chronicles",
      "2 Kings",
      "1 Kings",
      "1 Chronicles"
    ],
    "correct_answer": "2 Chronicles",
    "explanation": "2 Chronicles 26 gives the detailed narrative of Uzziah's arrogance and temple leprosy.",
    "reference": "2 Chronicles 26:16–21",
    "metadata": {
      "question_type": "Type the Book",
      "is_typed": true,
      "clues": [
        "He was hurried out of the temple, and he himself hurried to get out, because the Lord had struck him.",
        "Quarantined in a separate house as a leper until his death.",
        "Found in chapter 26 of this book."
      ],
      "hint": "Second Chronicles; chapter 26.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Second Chronicles",
        "2Chr"
      ],
      "stage": 10,
      "stage_title": "Ultimate Book Master",
      "level_theme": "Type-the-Book Gauntlet",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l48-c4",
    "game_slug": "find-the-bible-book",
    "level": 48,
    "challenge_index": 4,
    "question_text": "TYPE THE BIBLE BOOK:\nIn which book does Jesus raise a widow's only son from the dead in the town of Nain when He touches the funeral bier and commands: \"Young man, I say to you, arise,\" causing fear to seize everyone as they glorify God saying: \"A great prophet has arisen among us!\"?",
    "options": [
      "Luke",
      "Matthew",
      "Mark",
      "John"
    ],
    "correct_answer": "Luke",
    "explanation": "The raising of the widow's son at Nain is unique to the Gospel of Luke (ch 7:11–17).",
    "reference": "Luke 7:11–17",
    "metadata": {
      "question_type": "Type the Book",
      "is_typed": true,
      "clues": [
        "Recorded exclusively in chapter 7 of this Gospel.",
        "Written by the Gentile physician.",
        "Precedes the story of the sinful woman anointing Jesus' feet with tears and alabaster ointment at Simon the Pharisee's house."
      ],
      "hint": "Four-letter Gospel; starts with L.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Lk"
      ],
      "stage": 10,
      "stage_title": "Ultimate Book Master",
      "level_theme": "Type-the-Book Gauntlet",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l48-c5",
    "game_slug": "find-the-bible-book",
    "level": 48,
    "challenge_index": 5,
    "question_text": "TYPE THE BIBLE BOOK:\nWhich book contains this rare prophetic oracle: \"I will make the sun go down at noon and darken the earth in broad daylight... I will send a famine on the land—not a famine of bread, nor a thirst for water, but of hearing the words of the Lord. They shall wander from sea to sea... seeking the word of the Lord, but they shall not find it\"?",
    "options": [
      "Amos",
      "Hosea",
      "Joel",
      "Micah"
    ],
    "correct_answer": "Amos",
    "explanation": "Amos 8:9–12 contains the prophecy of the sun setting at noon and the famine of hearing God's word.",
    "reference": "Amos 8:9–12",
    "metadata": {
      "question_type": "Type the Book",
      "is_typed": true,
      "clues": [
        "Spoken by the shepherd from Tekoa.",
        "Given in explanation of a basket of summer fruit in chapter 8.",
        "Third of the Minor Prophets."
      ],
      "hint": "Four-letter Minor Prophet beginning with A.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Am"
      ],
      "stage": 10,
      "stage_title": "Ultimate Book Master",
      "level_theme": "Type-the-Book Gauntlet",
      "difficulty": "master",
      "timerSeconds": 20,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l49-c1",
    "game_slug": "find-the-bible-book",
    "level": 49,
    "challenge_index": 1,
    "question_text": "GRAND BIBLICAL SYNTHESIS:\nI am the only New Testament book that contains direct citations from non-canonical Jewish pseudepigraphal literature: the Assumption of Moses (Michael contending for Moses' body) and 1 Enoch (Enoch's prophecy of the Lord coming with ten thousands of His holy ones). Which book am I?",
    "options": [
      "Jude",
      "2 Peter",
      "Revelation",
      "Hebrews"
    ],
    "correct_answer": "Jude",
    "explanation": "Jude uniquely cites traditions found in the Assumption of Moses (v. 9) and 1 Enoch (vv. 14–15).",
    "reference": "Jude 1:9, 14–15",
    "metadata": {
      "question_type": "The Book Detective",
      "is_typed": false,
      "clues": [
        "Written by a brother of James and half-brother of Jesus.",
        "Consists of 25 verses.",
        "Immediately precedes the Apocalypse."
      ],
      "hint": "Single-chapter epistle of Jude.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Jud"
      ],
      "stage": 10,
      "stage_title": "Ultimate Book Master",
      "level_theme": "Grand Biblical Synthesis",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l49-c2",
    "game_slug": "find-the-bible-book",
    "level": 49,
    "challenge_index": 2,
    "question_text": "GRAND BIBLICAL SYNTHESIS:\nIn which book does Jesus rebuke the smug and lukewarm church of Laodicea: \"Because you say, 'I am rich, I have prospered, and I need nothing,' not realizing that you are wretched, pitiable, poor, blind, and naked. I counsel you to buy from me gold refined by fire... Behold, I stand at the door and knock\"?",
    "options": [
      "Revelation",
      "Colossians",
      "Ephesians",
      "2 Peter"
    ],
    "correct_answer": "Revelation",
    "explanation": "Revelation 3:14–22 is the letter to the church in Laodicea.",
    "reference": "Revelation 3:14–22",
    "metadata": {
      "question_type": "The Book Detective",
      "is_typed": false,
      "clues": [
        "The final of the seven letters to the churches of Asia Minor.",
        "Jesus condemns them: \"Because you are lukewarm, and neither hot nor cold, I will spit you out of my mouth.\"",
        "Recorded in chapter 3 of this apocalyptic finale."
      ],
      "hint": "The Book of Revelation; chapter 3.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Apocalypse",
        "Rev"
      ],
      "stage": 10,
      "stage_title": "Ultimate Book Master",
      "level_theme": "Grand Biblical Synthesis",
      "difficulty": "easy",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l49-c3",
    "game_slug": "find-the-bible-book",
    "level": 49,
    "challenge_index": 3,
    "question_text": "TYPE THE BIBLE BOOK:\nWhich book contains the account of King Jehoiachin of Judah being released from prison in Babylon in the 37th year of his exile by King Evil-merodach, who spoke kindly to him, gave him a seat above the other kings, changed his prison clothes, and gave him a regular daily allowance for the rest of his life?",
    "options": [
      "2 Kings",
      "Jeremiah",
      "2 Chronicles",
      "Daniel"
    ],
    "correct_answer": "2 Kings",
    "explanation": "2 Kings 25:27–30 concludes the history of Israel's kings with Jehoiachin's elevation in Babylon.",
    "reference": "2 Kings 25:27–30; Jeremiah 52:31–34",
    "metadata": {
      "question_type": "Type the Book",
      "is_typed": true,
      "clues": [
        "Marks the final historical note of hope concluding this two-volume royal history.",
        "Also preserved verbatim at the very end of the Book of Jeremiah (ch 52).",
        "The 25th chapter of this historical book."
      ],
      "hint": "Second Kings, chapter 25.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Second Kings",
        "2Kgs",
        "Jeremiah"
      ],
      "stage": 10,
      "stage_title": "Ultimate Book Master",
      "level_theme": "Grand Biblical Synthesis",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l49-c4",
    "game_slug": "find-the-bible-book",
    "level": 49,
    "challenge_index": 4,
    "question_text": "GRAND BIBLICAL SYNTHESIS:\nIn which book do we find the story of an intelligent scribe named Ezra, who \"had set his heart to study the Law of the Lord, and to do it and to teach his statutes and rules in Israel,\" leading a second return of exiles from Babylon with a royal decree from King Artaxerxes?",
    "options": [
      "Ezra",
      "Nehemiah",
      "Esther",
      "1 Chronicles"
    ],
    "correct_answer": "Ezra",
    "explanation": "The Book of Ezra (ch 7–10) documents Ezra's arrival and leadership in restoring the community.",
    "reference": "Ezra 7:1–10; 8:1–36; 9–10",
    "metadata": {
      "question_type": "The Book Detective",
      "is_typed": false,
      "clues": [
        "Documents the arrival of 1,500 exiles, the safe delivery of silver and gold temple vessels, and a national repentance over intermarriage.",
        "Contains authentic Persian royal Aramaic documents in chapters 4–7.",
        "Named after the scribe-priest."
      ],
      "hint": "Four-letter book named after Ezra.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Ezr"
      ],
      "stage": 10,
      "stage_title": "Ultimate Book Master",
      "level_theme": "Grand Biblical Synthesis",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l49-c5",
    "game_slug": "find-the-bible-book",
    "level": 49,
    "challenge_index": 5,
    "question_text": "TYPE THE BIBLE BOOK:\nWhich book contains this rare prophetic oracle of God's covenant restoration: \"And I will put my Spirit within you, and you shall live, and I will place you in your own land. Then you shall know that I am the Lord; I have spoken, and I will do it, declares the Lord\", given in explanation of two wooden sticks joined together to represent the reunification of Ephraim and Judah under one shepherd?",
    "options": [
      "Ezekiel",
      "Jeremiah",
      "Isaiah",
      "Zechariah"
    ],
    "correct_answer": "Ezekiel",
    "explanation": "Ezekiel 37:15–24 describes the sign of the two sticks joined into one representing the united kingdom under the Davidic King.",
    "reference": "Ezekiel 37:14–24",
    "metadata": {
      "question_type": "Type the Book",
      "is_typed": true,
      "clues": [
        "Follows the valley of dry bones vision.",
        "Identifies the one king over them all as \"my servant David shall be king over them.\"",
        "Found in chapter 37."
      ],
      "hint": "Major prophet Ezekiel; chapter 37.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Ezek"
      ],
      "stage": 10,
      "stage_title": "Ultimate Book Master",
      "level_theme": "Grand Biblical Synthesis",
      "difficulty": "master",
      "timerSeconds": 20,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l50-c1",
    "game_slug": "find-the-bible-book",
    "level": 50,
    "challenge_index": 1,
    "question_text": "GRANDMASTER FINALE:\nI am the only book in the entire Holy Bible that explicitly describes the death and burial of Moses: \"So Moses the servant of the Lord died there in the land of Moab, according to the word of the Lord, and he buried him in the valley in the land of Moab opposite Beth-peor; but no one knows the place of his burial to this day.\" Which book am I?",
    "options": [
      "Deuteronomy",
      "Joshua",
      "Numbers",
      "Exodus"
    ],
    "correct_answer": "Deuteronomy",
    "explanation": "Deuteronomy 34 describes the death and burial of Moses by the hand of God on Mount Nebo.",
    "reference": "Deuteronomy 34:5–10",
    "metadata": {
      "question_type": "The Book Detective",
      "is_typed": false,
      "clues": [
        "Moses died at age 120, yet his eye was undimmed and his natural force unabated.",
        "Concludes: \"And there has not arisen a prophet since in Israel like Moses, whom the Lord knew face to face.\"",
        "The final book of the Torah / Pentateuch."
      ],
      "hint": "Fifth book of the Bible; Deuteronomy.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Deut"
      ],
      "stage": 10,
      "stage_title": "Ultimate Book Master",
      "level_theme": "Grandmaster Finale",
      "difficulty": "medium",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l50-c2",
    "game_slug": "find-the-bible-book",
    "level": 50,
    "challenge_index": 2,
    "question_text": "GRANDMASTER FINALE:\nI contain the monumental Upper Room discourse (chapters 13–16), where Jesus washes His disciples' feet, commands them to love one another as He loved them, reveals Himself as \"the way, the truth, and the life,\" promises the Counselor (Holy Spirit), and teaches the metaphor of the True Vine: \"I am the vine; you are the branches. Whoever abides in me and I in him, he it is that bears much fruit.\" Which book am I?",
    "options": [
      "John",
      "Luke",
      "Matthew",
      "Mark"
    ],
    "correct_answer": "John",
    "explanation": "John 13–16 constitutes the beloved Upper Room Discourse unique to John's Gospel.",
    "reference": "John 13:1–16:33",
    "metadata": {
      "question_type": "The Book Detective",
      "is_typed": false,
      "clues": [
        "None of this extensive discourse appears in Matthew, Mark, or Luke.",
        "Concludes: \"In the world you will have tribulation. But take heart; I have overcome the world.\"",
        "Precedes Jesus' High Priestly prayer in chapter 17."
      ],
      "hint": "Fourth Gospel; four letters; begins with J.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Jn"
      ],
      "stage": 10,
      "stage_title": "Ultimate Book Master",
      "level_theme": "Grandmaster Finale",
      "difficulty": "easy",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l50-c3",
    "game_slug": "find-the-bible-book",
    "level": 50,
    "challenge_index": 3,
    "question_text": "TYPE THE BIBLE BOOK:\nWhich book opens with the sublime cosmic prologue: \"Long ago, at many times and in many ways, God spoke to our fathers by the prophets, but in these last days he has spoken to us by his Son, whom he appointed the heir of all things, through whom also he created the world. He is the radiance of the glory of God and the exact imprint of his nature, and he upholds the universe by the word of his power\"?",
    "options": [
      "Hebrews",
      "Romans",
      "Colossians",
      "Ephesians"
    ],
    "correct_answer": "Hebrews",
    "explanation": "Hebrews 1:1–3 opens with one of the greatest Christological statements in the New Testament.",
    "reference": "Hebrews 1:1–3",
    "metadata": {
      "question_type": "Type the Book",
      "is_typed": true,
      "clues": [
        "Demonstrates the supreme superiority of Christ over angels, Moses, Joshua, Aaron, and the animal sacrifices.",
        "Written to believers tempted to retreat back into the shadows of the old sacrificial covenant.",
        "Thirteen chapters; anonymous authorship."
      ],
      "hint": "Epistle to the Hebrews.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Heb"
      ],
      "stage": 10,
      "stage_title": "Ultimate Book Master",
      "level_theme": "Grandmaster Finale",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l50-c4",
    "game_slug": "find-the-bible-book",
    "level": 50,
    "challenge_index": 4,
    "question_text": "GRANDMASTER FINALE:\nIn which book does King Nebuchadnezzar have a troubled dream of a colossal statue made of four metals (head of gold, chest and arms of silver, middle and thighs of bronze, legs of iron, and feet of iron and clay), which is struck and pulverized by a stone cut without human hands that becomes a great mountain filling the whole earth?",
    "options": [
      "Daniel",
      "Ezekiel",
      "Jeremiah",
      "Isaiah"
    ],
    "correct_answer": "Daniel",
    "explanation": "Daniel 2 records Nebuchadnezzar's dream of the great statue and Daniel's divine interpretation.",
    "reference": "Daniel 2:31–45",
    "metadata": {
      "question_type": "The Book Detective",
      "is_typed": false,
      "clues": [
        "The young Hebrew captive explains: \"You, O king, are the head of gold... but the God of heaven will set up a kingdom that shall never be destroyed.\"",
        "The king falls on his face and pays homage to the prophet, confessing: \"Truly, your God is God of gods and Lord of kings.\"",
        "Recorded in chapter 2 of this book."
      ],
      "hint": "Six-letter prophetic book; starts with D.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Dan"
      ],
      "stage": 10,
      "stage_title": "Ultimate Book Master",
      "level_theme": "Grandmaster Finale",
      "difficulty": "easy",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "find-the-bible-book-l50-c5",
    "game_slug": "find-the-bible-book",
    "level": 50,
    "challenge_index": 5,
    "question_text": "TYPE THE BIBLE BOOK:\nWhich book closes the entire biblical canon of Holy Scripture with the vision of the River of the Water of Life flowing from the throne of God and of the Lamb, the Tree of Life bearing twelve kinds of fruit, the total abolition of the curse, and the eternal invitation: \"The Spirit and the Bride say, 'Come.' And let the one who hears say, 'Come'\"?",
    "options": [
      "Revelation",
      "Apocalypse",
      "Hebrews",
      "Jude"
    ],
    "correct_answer": "Revelation",
    "explanation": "The Book of Revelation concludes the sacred Scriptures with the New Jerusalem and Christ's imminent return.",
    "reference": "Revelation 22:1–21",
    "metadata": {
      "question_type": "Type the Book",
      "is_typed": true,
      "clues": [
        "The 66th book of the Christian Bible.",
        "Written by John from Patmos.",
        "Ends with: \"He who testifies to these things says, 'Surely I am coming soon.' Amen. Come, Lord Jesus! The grace of the Lord Jesus be with all. Amen.\""
      ],
      "hint": "The final, 66th book of the Bible: Revelation.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "The Revelation of John",
        "Apocalypse",
        "Rev"
      ],
      "stage": 10,
      "stage_title": "Ultimate Book Master",
      "level_theme": "Grandmaster Finale",
      "difficulty": "medium",
      "timerSeconds": 25,
      "curated": true
    }
  }
];
