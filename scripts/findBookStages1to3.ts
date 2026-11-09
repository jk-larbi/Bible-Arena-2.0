// Find the Bible Book — Stages 1–3 (Levels 1–15, 75 Questions)
// Verified challenging Bible book identification with both MC and typed book modes.

export interface RawFindBookQuestion {
  level: number;
  challengeIndex: number;
  stage: number;
  stageTitle: string;
  levelTitle: string;
  questionType: string;
  isTyped: boolean;
  questionText: string;
  clues?: string[];
  options: string[];
  correctAnswer: string;
  acceptedAlternatives?: string[];
  reference: string;
  explanation: string;
  hint: string;
  testament: 'Old Testament' | 'New Testament' | 'Both';
  difficulty: 'easy' | 'medium' | 'hard' | 'expert' | 'master';
  timerSeconds: number;
}

export const FIND_BOOK_STAGES_1_TO_3: RawFindBookQuestion[] = [
  {
    "level": 1,
    "challengeIndex": 1,
    "stage": 1,
    "stageTitle": "Book Foundations",
    "levelTitle": "Pentateuch Foundations",
    "questionType": "Identify the Book from the Story",
    "isTyped": false,
    "questionText": "In which book of the Bible do we read the account of God commanding a father to journey to the land of Moriah and offer his only beloved son as a burnt offering?",
    "clues": [
      "Contains the primeval history and lives of the patriarchs.",
      "The father saw a ram caught in a thicket by its horns and called the place \"The Lord Will Provide\".",
      "The first book of the Pentateuch."
    ],
    "options": [
      "Genesis",
      "Exodus",
      "Leviticus",
      "Deuteronomy"
    ],
    "correctAnswer": "Genesis",
    "acceptedAlternatives": [
      "Gen"
    ],
    "reference": "Genesis 22:1–14",
    "explanation": "Genesis 22 records the binding of Isaac (the Akedah) on Mount Moriah, where Abraham was tested and the Lord provided the ram.",
    "hint": "The foundational book of beginnings; first book of the Old Testament.",
    "testament": "Old Testament",
    "difficulty": "easy",
    "timerSeconds": 30
  },
  {
    "level": 1,
    "challengeIndex": 2,
    "stage": 1,
    "stageTitle": "Book Foundations",
    "levelTitle": "Pentateuch Foundations",
    "questionType": "Identify the Book from the Story",
    "isTyped": false,
    "questionText": "Which book details the miraculous midnight institution of the Passover, where blood on the doorposts caused the destroyer to pass over the houses of Israel?",
    "clues": [
      "Narrates the departure of Israel from Egyptian slavery.",
      "Includes the crossing of the Red Sea and the giving of the Law at Mount Sinai.",
      "Second book of Moses."
    ],
    "options": [
      "Exodus",
      "Leviticus",
      "Numbers",
      "Joshua"
    ],
    "correctAnswer": "Exodus",
    "acceptedAlternatives": [
      "Exod"
    ],
    "reference": "Exodus 12:1–28",
    "explanation": "Exodus 12 records the original Passover night in Egypt before the departure of the Israelites from Goshen.",
    "hint": "Named for the historic \"exit\" or departure of Israel from Egypt.",
    "testament": "Old Testament",
    "difficulty": "easy",
    "timerSeconds": 30
  },
  {
    "level": 1,
    "challengeIndex": 3,
    "stage": 1,
    "stageTitle": "Book Foundations",
    "levelTitle": "Pentateuch Foundations",
    "questionType": "Type the Book",
    "isTyped": true,
    "questionText": "TYPE THE BIBLE BOOK:\nWhich book contains detailed statutes for the annual Day of Atonement (Yom Kippur), where the High Priest casts lots over two goats—one slain as a sin offering and one sent into the wilderness as the scapegoat?",
    "clues": [
      "Focuses primarily on the holiness of God, priesthood, and sacrificial offerings.",
      "Includes the command: \"You shall be holy, for I the Lord your God am holy.\"",
      "Contains the phrase: \"Love your neighbor as yourself\" (Lev 19:18)."
    ],
    "options": [
      "Leviticus",
      "Numbers",
      "Deuteronomy",
      "Exodus"
    ],
    "correctAnswer": "Leviticus",
    "acceptedAlternatives": [
      "Lev"
    ],
    "reference": "Leviticus 16:1–34",
    "explanation": "Leviticus 16 details the complete ritual of Yom Kippur, the scapegoat (Azazel), and the High Priest entering the Holy of Holies.",
    "hint": "The central book of the Torah, named after the priestly tribe of Levi.",
    "testament": "Old Testament",
    "difficulty": "medium",
    "timerSeconds": 30
  },
  {
    "level": 1,
    "challengeIndex": 4,
    "stage": 1,
    "stageTitle": "Book Foundations",
    "levelTitle": "Pentateuch Foundations",
    "questionType": "Identify the Book from the Story",
    "isTyped": false,
    "questionText": "Which book records the sending of twelve tribal spies from Kadesh-barnea into Canaan, the rebellion of Korah, and the bronze serpent raised on a pole?",
    "clues": [
      "Opens with a census of the fighting men of Israel in the wilderness.",
      "Records forty years of wandering between Sinai and the plains of Moab.",
      "Hebrew title is Bemidbar (\"In the wilderness\")."
    ],
    "options": [
      "Numbers",
      "Deuteronomy",
      "Joshua",
      "Judges"
    ],
    "correctAnswer": "Numbers",
    "acceptedAlternatives": [
      "Num"
    ],
    "reference": "Numbers 13–14; 16; 21:4–9",
    "explanation": "The Book of Numbers documents the wilderness wanderings, the failure of faith at Kadesh-barnea, and the bronze serpent.",
    "hint": "Named in English for the censuses (numbering) taken of Israel's tribes.",
    "testament": "Old Testament",
    "difficulty": "medium",
    "timerSeconds": 30
  },
  {
    "level": 1,
    "challengeIndex": 5,
    "stage": 1,
    "stageTitle": "Book Foundations",
    "levelTitle": "Pentateuch Foundations",
    "questionType": "Type the Book",
    "isTyped": true,
    "questionText": "TYPE THE BIBLE BOOK:\nIn which book does Moses deliver his monumental farewell addresses on the plains of Moab, proclaiming the supreme Shema: \"Hear, O Israel: The Lord our God, the Lord is one\"?",
    "clues": [
      "Its name in Greek means \"second law\" (a repetition and covenant renewal of the Law).",
      "Jesus quoted all three of His wilderness temptation answers directly from this book.",
      "Concludes with Moses viewing Canaan from Mount Nebo and his burial by God."
    ],
    "options": [
      "Deuteronomy",
      "Leviticus",
      "Joshua",
      "Numbers"
    ],
    "correctAnswer": "Deuteronomy",
    "acceptedAlternatives": [
      "Deut"
    ],
    "reference": "Deuteronomy 6:4–9; 34:1–6; Matthew 4:4–10",
    "explanation": "Deuteronomy contains Moses' farewell speeches, the Shema (Deut 6:4), and Moses' death on Mount Nebo.",
    "hint": "Fifth book of the Bible; begins with \"Deut-\".",
    "testament": "Old Testament",
    "difficulty": "hard",
    "timerSeconds": 25
  },
  {
    "level": 2,
    "challengeIndex": 1,
    "stage": 1,
    "stageTitle": "Book Foundations",
    "levelTitle": "Historical Books",
    "questionType": "Identify the Book from the Story",
    "isTyped": false,
    "questionText": "Which historical book recounts the miraculous collapse of the walls of Jericho after the priests blew trumpets and marched around the city for seven days?",
    "clues": [
      "Opens with the divine charge: \"Be strong and courageous; do not be frightened.\"",
      "Covers the crossing of the Jordan on dry ground and the allotment of tribal territories.",
      "Named after Moses' faithful military successor."
    ],
    "options": [
      "Joshua",
      "Judges",
      "1 Samuel",
      "Nehemiah"
    ],
    "correctAnswer": "Joshua",
    "acceptedAlternatives": [
      "Josh"
    ],
    "reference": "Joshua 1:9; 6:1–21",
    "explanation": "The Book of Joshua details the conquest of Canaan, the miraculous fall of Jericho, and the covenant renewal at Shechem.",
    "hint": "Named for the leader who led Israel across the Jordan River into Canaan.",
    "testament": "Old Testament",
    "difficulty": "easy",
    "timerSeconds": 30
  },
  {
    "level": 2,
    "challengeIndex": 2,
    "stage": 1,
    "stageTitle": "Book Foundations",
    "levelTitle": "Historical Books",
    "questionType": "Identify the Book from the Story",
    "isTyped": false,
    "questionText": "In which book do we read repeated cycles of apostasy, foreign oppression, cries for mercy, and military deliverers such as Deborah, Gideon, and Samson?",
    "clues": [
      "Concludes with the famous refrain: \"In those days there was no king in Israel; everyone did what was right in his own eyes.\"",
      "Contains the stories of Ehud's dagger and Jael's tent peg.",
      "Covers the chaotic era before Israel's first king."
    ],
    "options": [
      "Judges",
      "1 Samuel",
      "1 Kings",
      "Joshua"
    ],
    "correctAnswer": "Judges",
    "acceptedAlternatives": [
      "Judg"
    ],
    "reference": "Judges 2:16–19; 21:25",
    "explanation": "Judges recounts Israel's dark spiral during the era of charismatic tribal deliverers (shophetim).",
    "hint": "Plural title referring to the charismatic leaders raised up by God.",
    "testament": "Old Testament",
    "difficulty": "easy",
    "timerSeconds": 30
  },
  {
    "level": 2,
    "challengeIndex": 3,
    "stage": 1,
    "stageTitle": "Book Foundations",
    "levelTitle": "Historical Books",
    "questionType": "Type the Book",
    "isTyped": true,
    "questionText": "TYPE THE BIBLE BOOK:\nWhich four-chapter book tells of a widowed Moabite woman who declared to her mother-in-law: \"Where you go I will go, and where you lodge I will lodge. Your people shall be my people, and your God my God\"?",
    "clues": [
      "Set \"in the days when the judges ruled\".",
      "The heroine gleans in the barley fields of Boaz in Bethlehem.",
      "Ends with a royal genealogy leading directly to King David."
    ],
    "options": [
      "Ruth",
      "Esther",
      "Song of Solomon",
      "Judges"
    ],
    "correctAnswer": "Ruth",
    "acceptedAlternatives": [
      "Rth"
    ],
    "reference": "Ruth 1:16–17; 4:18–22",
    "explanation": "The Book of Ruth narrates the loyalty of Ruth to Naomi, her marriage to Boaz as kinsman-redeemer, and her inclusion in David's ancestry.",
    "hint": "Four-letter book named after the faithful Moabite great-grandmother of David.",
    "testament": "Old Testament",
    "difficulty": "easy",
    "timerSeconds": 30
  },
  {
    "level": 2,
    "challengeIndex": 4,
    "stage": 1,
    "stageTitle": "Book Foundations",
    "levelTitle": "Historical Books",
    "questionType": "Identify the Book from the Story",
    "isTyped": false,
    "questionText": "In which book does young shepherd David confront and defeat Goliath of Gath with a sling and a single stone in the Valley of Elah?",
    "clues": [
      "Opens with the prayer of barren Hannah at Shiloh and the birth of Samuel.",
      "Records the anointing and tragic downfall of King Saul.",
      "Details Jonathan and David's covenant of friendship."
    ],
    "options": [
      "1 Samuel",
      "2 Samuel",
      "1 Chronicles",
      "1 Kings"
    ],
    "correctAnswer": "1 Samuel",
    "acceptedAlternatives": [
      "First Samuel",
      "1Sam"
    ],
    "reference": "1 Samuel 17:40–51",
    "explanation": "1 Samuel 17 describes David slaying Goliath, David's rise in Saul's court, and Saul's jealousy.",
    "hint": "First book bearing the name of the great prophet-judge Samuel.",
    "testament": "Old Testament",
    "difficulty": "medium",
    "timerSeconds": 30
  },
  {
    "level": 2,
    "challengeIndex": 5,
    "stage": 1,
    "stageTitle": "Book Foundations",
    "levelTitle": "Historical Books",
    "questionType": "Type the Book",
    "isTyped": true,
    "questionText": "TYPE THE BIBLE BOOK:\nWhich book is entirely devoted to the forty-year reign of King David over all Israel, including the capture of Jerusalem, the Davidic Covenant in chapter 7, and David's sin with Bathsheba?",
    "clues": [
      "Opens with David mourning the deaths of Saul and Jonathan at Mount Gilboa.",
      "Nathan confronts the king: \"You are the man!\"",
      "Includes Absalom's rebellion and David's flight from Jerusalem."
    ],
    "options": [
      "2 Samuel",
      "1 Samuel",
      "1 Kings",
      "1 Chronicles"
    ],
    "correctAnswer": "2 Samuel",
    "acceptedAlternatives": [
      "Second Samuel",
      "2Sam"
    ],
    "reference": "2 Samuel 1:1; 7:1–17; 12:1–15",
    "explanation": "2 Samuel covers the reign of David exclusively, from his lament over Saul to the closing numbering of the people.",
    "hint": "Second book bearing the name of Samuel; starts with \"2\".",
    "testament": "Old Testament",
    "difficulty": "hard",
    "timerSeconds": 25
  },
  {
    "level": 3,
    "challengeIndex": 1,
    "stage": 1,
    "stageTitle": "Book Foundations",
    "levelTitle": "Poetry & Wisdom",
    "questionType": "Identify the Book from the Story",
    "isTyped": false,
    "questionText": "In which poetic book does a righteous patriarch in the land of Uz lose his wealth, servants, and children in a single day, declaring: \"The Lord gave, and the Lord has taken away; blessed be the name of the Lord\"?",
    "clues": [
      "Features extended theological debates with three friends: Eliphaz, Bildad, and Zophar.",
      "God answers out of the whirlwind with majesties of creation.",
      "Contains the declaration: \"I know that my Redeemer lives\" (Job 19:25)."
    ],
    "options": [
      "Job",
      "Ecclesiastes",
      "Psalms",
      "Habakkuk"
    ],
    "correctAnswer": "Job",
    "acceptedAlternatives": [
      "Jb"
    ],
    "reference": "Job 1:21; 19:25; 38:1–4",
    "explanation": "The Book of Job examines the profound problem of innocent suffering, divine sovereignty, and unshakeable trust.",
    "hint": "Three-letter book name beginning with J.",
    "testament": "Old Testament",
    "difficulty": "easy",
    "timerSeconds": 30
  },
  {
    "level": 3,
    "challengeIndex": 2,
    "stage": 1,
    "stageTitle": "Book Foundations",
    "levelTitle": "Poetry & Wisdom",
    "questionType": "Identify the Book from the Story",
    "isTyped": false,
    "questionText": "Which book contains 150 sacred Hebrew hymns and prayers, divided into five books, opening with: \"Blessed is the man who walks not in the counsel of the wicked\"?",
    "clues": [
      "The ancient prayer book and hymnal of Israel.",
      "Includes Psalm 23 (\"The Lord is my shepherd\") and Psalm 51.",
      "The most frequently quoted Old Testament book in the New Testament."
    ],
    "options": [
      "Psalms",
      "Proverbs",
      "Lamentations",
      "Song of Solomon"
    ],
    "correctAnswer": "Psalms",
    "acceptedAlternatives": [
      "Psalm",
      "Psa"
    ],
    "reference": "Psalm 1:1; 23:1; 150:6",
    "explanation": "The Book of Psalms comprises 150 inspired songs and prayers composed by David, Asaph, the sons of Korah, Moses, and Solomon.",
    "hint": "Collection of 150 poetic chapters; begins with Ps-.",
    "testament": "Old Testament",
    "difficulty": "easy",
    "timerSeconds": 30
  },
  {
    "level": 3,
    "challengeIndex": 3,
    "stage": 1,
    "stageTitle": "Book Foundations",
    "levelTitle": "Poetry & Wisdom",
    "questionType": "Type the Book",
    "isTyped": true,
    "questionText": "TYPE THE BIBLE BOOK:\nWhich book opens with the motto: \"The fear of the Lord is the beginning of knowledge; fools despise wisdom and instruction\", and concludes with the famous acrostic tribute to the woman of valor (chayil) in chapter 31?",
    "clues": [
      "Primarily written and collected by King Solomon.",
      "Contains practical aphorisms on speech, diligence, wealth, and moral purity.",
      "Personifies Divine Wisdom crying out in the public square."
    ],
    "options": [
      "Proverbs",
      "Ecclesiastes",
      "Job",
      "James"
    ],
    "correctAnswer": "Proverbs",
    "acceptedAlternatives": [
      "Prov"
    ],
    "reference": "Proverbs 1:7; 31:10–31",
    "explanation": "The Book of Proverbs is Solomon's collection of inspired wisdom for godly daily living.",
    "hint": "Plural word meaning concise wise sayings; begins with Prov-.",
    "testament": "Old Testament",
    "difficulty": "medium",
    "timerSeconds": 30
  },
  {
    "level": 3,
    "challengeIndex": 4,
    "stage": 1,
    "stageTitle": "Book Foundations",
    "levelTitle": "Poetry & Wisdom",
    "questionType": "Identify the Book from the Story",
    "isTyped": false,
    "questionText": "In which wisdom book does the Preacher (Qoheleth), son of David, king in Jerusalem, investigate earthly endeavors and declare: \"Vanity of vanities! All is vanity... To everything there is a season, and a time to every purpose under heaven\"?",
    "clues": [
      "Reflects on labor, pleasure, wisdom, and wealth \"under the sun\".",
      "Concludes: \"Fear God and keep his commandments, for this is the whole duty of man.\"",
      "Name comes from the Greek word for assembly or church."
    ],
    "options": [
      "Ecclesiastes",
      "Proverbs",
      "Job",
      "Song of Solomon"
    ],
    "correctAnswer": "Ecclesiastes",
    "acceptedAlternatives": [
      "Eccl"
    ],
    "reference": "Ecclesiastes 1:2; 3:1; 12:13",
    "explanation": "Ecclesiastes explores the futility of life apart from God (\"under the sun\") and summons humanity to reverence the Creator.",
    "hint": "Begins with Eccl-; translates the Hebrew Qoheleth.",
    "testament": "Old Testament",
    "difficulty": "medium",
    "timerSeconds": 30
  },
  {
    "level": 3,
    "challengeIndex": 5,
    "stage": 1,
    "stageTitle": "Book Foundations",
    "levelTitle": "Poetry & Wisdom",
    "questionType": "Type the Book",
    "isTyped": true,
    "questionText": "TYPE THE BIBLE BOOK:\nWhich eight-chapter lyrical dialogue celebrates marital romance and covenant love between a royal bridegroom and a Shulammite bride, declaring: \"Love is strong as death, jealousy is fierce as the grave\"?",
    "clues": [
      "Also known in Latin as Canticles.",
      "Attributed to King Solomon.",
      "Refrain: \"I adjure you, O daughters of Jerusalem, that you not stir up or awaken love until it pleases.\""
    ],
    "options": [
      "Song of Solomon",
      "Song of Songs",
      "Canticles",
      "Ruth"
    ],
    "correctAnswer": "Song of Solomon",
    "acceptedAlternatives": [
      "Song of Songs",
      "Canticles",
      "Song"
    ],
    "reference": "Song of Solomon 1:1; 8:6",
    "explanation": "Song of Solomon (or Song of Songs) is a poetic song cycle celebrating pure romantic marital intimacy.",
    "hint": "Often called \"Song of Songs\" or \"Song of Solomon\".",
    "testament": "Old Testament",
    "difficulty": "hard",
    "timerSeconds": 25
  },
  {
    "level": 4,
    "challengeIndex": 1,
    "stage": 1,
    "stageTitle": "Book Foundations",
    "levelTitle": "Gospels & Acts",
    "questionType": "Identify the Book from the Story",
    "isTyped": false,
    "questionText": "Which Gospel opens with the royal genealogy of Jesus traced through Abraham and David, features five major discourses (including the Sermon on the Mount), and closes with the Great Commission?",
    "clues": [
      "Written by a former Jewish tax collector (Levi).",
      "Frequently uses the phrase \"kingdom of heaven\" rather than \"kingdom of God\".",
      "First book of the New Testament."
    ],
    "options": [
      "Matthew",
      "Mark",
      "Luke",
      "John"
    ],
    "correctAnswer": "Matthew",
    "acceptedAlternatives": [
      "Matt"
    ],
    "reference": "Matthew 1:1; 5–7; 28:18–20",
    "explanation": "Matthew presents Jesus as the promised Messianic King of Israel who fulfills the Old Testament covenants.",
    "hint": "First book of the New Testament; starts with M.",
    "testament": "New Testament",
    "difficulty": "easy",
    "timerSeconds": 30
  },
  {
    "level": 4,
    "challengeIndex": 2,
    "stage": 1,
    "stageTitle": "Book Foundations",
    "levelTitle": "Gospels & Acts",
    "questionType": "Identify the Book from the Story",
    "isTyped": false,
    "questionText": "Which fast-paced Gospel frequently uses the Greek adverb \"euthus\" (immediately), presents Jesus as the Suffering Servant who \"came not to be served but to serve\", and is the shortest of the four Gospels?",
    "clues": [
      "Traditionally associated with the preaching of Simon Peter.",
      "Focuses heavily on Jesus' deeds, authority, and miracles rather than long speeches.",
      "Contains 16 chapters."
    ],
    "options": [
      "Mark",
      "Matthew",
      "Luke",
      "John"
    ],
    "correctAnswer": "Mark",
    "acceptedAlternatives": [
      "Mk"
    ],
    "reference": "Mark 1:12; 10:45",
    "explanation": "Mark is the shortest and most action-packed Gospel, emphasizing Jesus as the powerful yet suffering Servant of God.",
    "hint": "Four-letter name; shortest Gospel.",
    "testament": "New Testament",
    "difficulty": "easy",
    "timerSeconds": 30
  },
  {
    "level": 4,
    "challengeIndex": 3,
    "stage": 1,
    "stageTitle": "Book Foundations",
    "levelTitle": "Gospels & Acts",
    "questionType": "Type the Book",
    "isTyped": true,
    "questionText": "TYPE THE BIBLE BOOK:\nWhich Gospel, addressed to \"most excellent Theophilus\" by a Gentile physician, uniquely contains the parables of the Good Samaritan, the Prodigal Son, and the encounter with Zacchaeus?",
    "clues": [
      "Emphasizes Jesus' compassion for outcasts, women, the poor, and repentant tax collectors.",
      "Contains the detailed nativity hymns of Mary (Magnificat) and Zechariah (Benedictus).",
      "Author was Paul's traveling companion and also wrote Acts."
    ],
    "options": [
      "Luke",
      "Acts",
      "John",
      "Matthew"
    ],
    "correctAnswer": "Luke",
    "acceptedAlternatives": [
      "Lk"
    ],
    "reference": "Luke 1:1–4; 10:25–37; 15:11–32; 19:1–10",
    "explanation": "Luke, written by the \"beloved physician\", highlights Jesus' universal humanity and salvation for all nations.",
    "hint": "Four-letter name of the physician author.",
    "testament": "New Testament",
    "difficulty": "medium",
    "timerSeconds": 30
  },
  {
    "level": 4,
    "challengeIndex": 4,
    "stage": 1,
    "stageTitle": "Book Foundations",
    "levelTitle": "Gospels & Acts",
    "questionType": "Identify the Book from the Story",
    "isTyped": false,
    "questionText": "Which Gospel opens with the cosmic prologue: \"In the beginning was the Word, and the Word was with God, and the Word was God\", and features seven \"I AM\" statements and seven miracle \"signs\"?",
    "clues": [
      "Written that \"you may believe that Jesus is the Christ, the Son of God, and that by believing you may have life in his name.\"",
      "Contains Jesus' nocturnal dialogue with Nicodemus (\"You must be born again\").",
      "Authored by the \"disciple whom Jesus loved\"."
    ],
    "options": [
      "John",
      "Luke",
      "Hebrews",
      "Romans"
    ],
    "correctAnswer": "John",
    "acceptedAlternatives": [
      "Jn"
    ],
    "reference": "John 1:1, 14; 3:1–16; 20:30–31",
    "explanation": "The Fourth Gospel, John, emphasizes the divine identity, preexistence, and glory of Jesus Christ.",
    "hint": "Four-letter Gospel name; beloved disciple.",
    "testament": "New Testament",
    "difficulty": "easy",
    "timerSeconds": 30
  },
  {
    "level": 4,
    "challengeIndex": 5,
    "stage": 1,
    "stageTitle": "Book Foundations",
    "levelTitle": "Gospels & Acts",
    "questionType": "Type the Book",
    "isTyped": true,
    "questionText": "TYPE THE BIBLE BOOK:\nWhich New Testament historical book documents the Day of Pentecost, the stoning of Stephen, the conversion of Cornelius, and Paul's three missionary journeys carrying the gospel from Jerusalem to Rome?",
    "clues": [
      "Opens with Jesus' ascension from the Mount of Olives and promise: \"You will be my witnesses... to the end of the earth.\"",
      "The sole narrative historical bridge between the Gospels and the Epistles.",
      "Second treatise addressed to Theophilus by Luke."
    ],
    "options": [
      "Acts",
      "Luke",
      "Romans",
      "Galatians"
    ],
    "correctAnswer": "Acts",
    "acceptedAlternatives": [
      "Acts of the Apostles",
      "Act"
    ],
    "reference": "Acts 2:1–4; Acts 1:8; Acts 28:30–31",
    "explanation": "Acts of the Apostles records the birth and expansion of the Christian church empowered by the Holy Spirit.",
    "hint": "Four-letter book title: \"Acts\" (of the Apostles).",
    "testament": "New Testament",
    "difficulty": "hard",
    "timerSeconds": 25
  },
  {
    "level": 5,
    "challengeIndex": 1,
    "stage": 1,
    "stageTitle": "Book Foundations",
    "levelTitle": "Epistles & Apocalypse",
    "questionType": "Identify the Book from the Story",
    "isTyped": false,
    "questionText": "In which monumental epistle does the apostle Paul set forth the righteousness of God revealed through faith in Christ, declaring in chapter 8 that \"there is now no condemnation for those who are in Christ Jesus\"?",
    "clues": [
      "Contains chapters 9–11 discussing the mystery of Israel's election and future restoration.",
      "Written from Corinth to the imperial capital's congregation.",
      "Presents justification by grace alone through faith."
    ],
    "options": [
      "Romans",
      "Galatians",
      "Ephesians",
      "Hebrews"
    ],
    "correctAnswer": "Romans",
    "acceptedAlternatives": [
      "Rom"
    ],
    "reference": "Romans 1:16–17; 8:1, 38–39",
    "explanation": "Romans is Paul's grand theological masterpiece outlining the universal reign of sin, justification by faith, sanctification, and Christian ethics.",
    "hint": "Addressed to the church in the capital of the Roman Empire.",
    "testament": "New Testament",
    "difficulty": "easy",
    "timerSeconds": 30
  },
  {
    "level": 5,
    "challengeIndex": 2,
    "stage": 1,
    "stageTitle": "Book Foundations",
    "levelTitle": "Epistles & Apocalypse",
    "questionType": "Identify the Book from the Story",
    "isTyped": false,
    "questionText": "Which epistle contains the famous \"Love Chapter\" (chapter 13: \"Love is patient and kind; love does not envy or boast\") and the definitive theological exposition of Christ's resurrection in chapter 15?",
    "clues": [
      "Written to address severe factions, lawsuits, marriage questions, and misuse of spiritual gifts in a Greek seaport city.",
      "Opens with Paul rebuking divisions: \"I follow Paul, or I follow Apollos, or I follow Cephas.\"",
      "First letter to this troubled church."
    ],
    "options": [
      "1 Corinthians",
      "2 Corinthians",
      "Galatians",
      "Philippians"
    ],
    "correctAnswer": "1 Corinthians",
    "acceptedAlternatives": [
      "First Corinthians",
      "1Cor"
    ],
    "reference": "1 Corinthians 13:1–13; 15:1–26",
    "explanation": "1 Corinthians addresses church order, the nature of Christian love (ch. 13), and the bodily resurrection of Christ and believers (ch. 15).",
    "hint": "First letter to the Corinthians.",
    "testament": "New Testament",
    "difficulty": "easy",
    "timerSeconds": 30
  },
  {
    "level": 5,
    "challengeIndex": 3,
    "stage": 1,
    "stageTitle": "Book Foundations",
    "levelTitle": "Epistles & Apocalypse",
    "questionType": "Type the Book",
    "isTyped": true,
    "questionText": "TYPE THE BIBLE BOOK:\nWhich fiery six-chapter epistle by Paul forcefully defends justification by faith against legalistic Judaizers, declaring: \"For freedom Christ has set us free... the fruit of the Spirit is love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, self-control\"?",
    "clues": [
      "Paul rebukes them: \"O foolish..., who has bewitched you?\"",
      "Recounts Paul opposing Peter to his face in Antioch.",
      "Often called the \"Magna Carta of Christian Liberty\"."
    ],
    "options": [
      "Galatians",
      "Ephesians",
      "Colossians",
      "Romans"
    ],
    "correctAnswer": "Galatians",
    "acceptedAlternatives": [
      "Gal"
    ],
    "reference": "Galatians 3:1; 5:1, 22–23",
    "explanation": "Galatians was written to churches in Asia Minor to refute the false doctrine that Gentile believers must be circumcised to be saved.",
    "hint": "Begins with Gal-; addressed to believers in central Asia Minor.",
    "testament": "New Testament",
    "difficulty": "medium",
    "timerSeconds": 30
  },
  {
    "level": 5,
    "challengeIndex": 4,
    "stage": 1,
    "stageTitle": "Book Foundations",
    "levelTitle": "Epistles & Apocalypse",
    "questionType": "Identify the Book from the Story",
    "isTyped": false,
    "questionText": "In which prison epistle does Paul outline the spiritual blessings in heavenly places, the mystery of the Church as one new man, and the full Armor of God (belt of truth, breastplate of righteousness, shield of faith)?",
    "clues": [
      "Written from Roman imprisonment to a major commercial capital in Asia Minor.",
      "Contains the declaration: \"For by grace you have been saved through faith. And this is not your own doing; it is the gift of God, not a result of works.\"",
      "Includes practical instructions for husbands, wives, children, and masters."
    ],
    "options": [
      "Ephesians",
      "Colossians",
      "Philippians",
      "1 Thessalonians"
    ],
    "correctAnswer": "Ephesians",
    "acceptedAlternatives": [
      "Eph"
    ],
    "reference": "Ephesians 2:8–9; 6:10–18",
    "explanation": "Ephesians expounds the eternal purpose of God, unity in the body of Christ, and spiritual warfare with the Armor of God.",
    "hint": "Addressed to the believers in the city of Ephesus.",
    "testament": "New Testament",
    "difficulty": "medium",
    "timerSeconds": 30
  },
  {
    "level": 5,
    "challengeIndex": 5,
    "stage": 1,
    "stageTitle": "Book Foundations",
    "levelTitle": "Epistles & Apocalypse",
    "questionType": "Type the Book",
    "isTyped": true,
    "questionText": "TYPE THE BIBLE BOOK:\nWhich prophetic book, written by John from exile on the island of Patmos, closes the biblical canon with apocalyptic visions of seven seals, seven trumpets, the defeat of Babylon, and the descent of the New Jerusalem?",
    "clues": [
      "Opens: \"The revelation of Jesus Christ, which God gave him to show to his servants the things that must soon take place.\"",
      "Contains seven specific letters to the churches of Asia Minor in chapters 2–3.",
      "Final chapter promises: \"He who testifies to these things says, 'Surely I am coming soon.' Amen. Come, Lord Jesus!\""
    ],
    "options": [
      "Revelation",
      "Apocalypse",
      "Daniel",
      "Hebrews"
    ],
    "correctAnswer": "Revelation",
    "acceptedAlternatives": [
      "The Revelation of John",
      "Apocalypse",
      "Rev"
    ],
    "reference": "Revelation 1:1, 9; 21:1–4; 22:20",
    "explanation": "The Book of Revelation (the Apocalypse) is the climactic finale of the Christian Bible, revealing Christ's total triumph over evil.",
    "hint": "The final, 66th book of the Bible; begins with Rev-.",
    "testament": "New Testament",
    "difficulty": "hard",
    "timerSeconds": 25
  },
  {
    "level": 6,
    "challengeIndex": 1,
    "stage": 2,
    "stageTitle": "Story and Book",
    "levelTitle": "Miracles & Deliverances",
    "questionType": "Which Book Contains This Event?",
    "isTyped": false,
    "questionText": "In which book do we read of an iron axe head falling into the Jordan River while the sons of the prophets were cutting timber, and the prophet throwing in a stick to make the iron float?",
    "clues": [
      "The workman cried: \"Alas, my master! It was borrowed.\"",
      "Performed by the successor of the prophet Elijah.",
      "Contains Naaman's cleansing from leprosy and the fiery chariots at Dothan."
    ],
    "options": [
      "2 Kings",
      "1 Kings",
      "2 Chronicles",
      "Joshua"
    ],
    "correctAnswer": "2 Kings",
    "acceptedAlternatives": [
      "Second Kings",
      "2Kgs"
    ],
    "reference": "2 Kings 6:1–7",
    "explanation": "2 Kings 6:1–7 records Elisha making the borrowed iron axe head float in the Jordan River.",
    "hint": "Second volume of the book of Kings.",
    "testament": "Old Testament",
    "difficulty": "medium",
    "timerSeconds": 30
  },
  {
    "level": 6,
    "challengeIndex": 2,
    "stage": 2,
    "stageTitle": "Story and Book",
    "levelTitle": "Miracles & Deliverances",
    "questionType": "Which Book Contains This Event?",
    "isTyped": false,
    "questionText": "Which book records Joshua commanding the sun to stand still over Gibeon and the moon in the Valley of Aijalon during battle against the five Amorite kings?",
    "clues": [
      "The text notes: \"There has been no day like it before or since, when the Lord heeded the voice of a man.\"",
      "Recorded also in the Book of Jashar.",
      "Details the conquest of southern and northern Canaan."
    ],
    "options": [
      "Joshua",
      "Judges",
      "1 Samuel",
      "Deuteronomy"
    ],
    "correctAnswer": "Joshua",
    "acceptedAlternatives": [
      "Josh"
    ],
    "reference": "Joshua 10:12–14",
    "explanation": "Joshua 10:12–14 records the miracle of the sun and moon standing still during the battle of Gibeon.",
    "hint": "Named for the commander who succeeded Moses.",
    "testament": "Old Testament",
    "difficulty": "medium",
    "timerSeconds": 30
  },
  {
    "level": 6,
    "challengeIndex": 3,
    "stage": 2,
    "stageTitle": "Story and Book",
    "levelTitle": "Miracles & Deliverances",
    "questionType": "Type the Book",
    "isTyped": true,
    "questionText": "TYPE THE BIBLE BOOK:\nIn which book does King Hezekiah receive a miraculous sign confirming fifteen years added to his life: the sundial shadow going backward ten steps on the stairway of Ahaz?",
    "clues": [
      "Hezekiah was sick unto death, but wept and prayed.",
      "A cake of figs was applied to his boil for healing.",
      "Recorded in both 2 Kings and in this major prophetic book in chapter 38."
    ],
    "options": [
      "Isaiah",
      "2 Kings",
      "2 Chronicles",
      "Jeremiah"
    ],
    "correctAnswer": "Isaiah",
    "acceptedAlternatives": [
      "2 Kings",
      "Isa"
    ],
    "reference": "Isaiah 38:1–8; 2 Kings 20:8–11",
    "explanation": "Isaiah 38 records Hezekiah's sickness, prayer, and the sign of the shadow turning back ten steps on the sundial of Ahaz.",
    "hint": "Major prophet of 66 chapters who ministered to King Hezekiah.",
    "testament": "Old Testament",
    "difficulty": "hard",
    "timerSeconds": 25
  },
  {
    "level": 6,
    "challengeIndex": 4,
    "stage": 2,
    "stageTitle": "Story and Book",
    "levelTitle": "Miracles & Deliverances",
    "questionType": "Which Book Contains This Event?",
    "isTyped": false,
    "questionText": "In which book do we read of a bronze serpent constructed by Moses and placed on a pole so that anyone bitten by fiery serpents could look and live?",
    "clues": [
      "Israel had murmured against God and Moses in the desert: \"Why have you brought us up out of Egypt to die?\"",
      "Later called \"Nehushtan\" and destroyed by King Hezekiah when abused as an idol.",
      "Jesus references this event in John 3:14."
    ],
    "options": [
      "Numbers",
      "Exodus",
      "Leviticus",
      "Deuteronomy"
    ],
    "correctAnswer": "Numbers",
    "acceptedAlternatives": [
      "Num"
    ],
    "reference": "Numbers 21:4–9",
    "explanation": "Numbers 21 records the bronze serpent episode on the way from Mount Hor around the land of Edom.",
    "hint": "Fourth book of the Old Testament.",
    "testament": "Old Testament",
    "difficulty": "medium",
    "timerSeconds": 30
  },
  {
    "level": 6,
    "challengeIndex": 5,
    "stage": 2,
    "stageTitle": "Story and Book",
    "levelTitle": "Miracles & Deliverances",
    "questionType": "Type the Book",
    "isTyped": true,
    "questionText": "TYPE THE BIBLE BOOK:\nWhich book records an apostle being bitten by a poisonous viper on the island of Malta after a shipwreck, shaking the snake off into the fire with no ill effects, leading locals to believe he was a god?",
    "clues": [
      "The apostle was being transported under military guard to Rome.",
      "He healed the father of Publius, the chief man of the island.",
      "Final chapter of this New Testament history."
    ],
    "options": [
      "Acts",
      "Acts of the Apostles",
      "Romans",
      "2 Timothy"
    ],
    "correctAnswer": "Acts",
    "acceptedAlternatives": [
      "Acts of the Apostles",
      "Act"
    ],
    "reference": "Acts 28:1–6",
    "explanation": "Acts 28:1–6 describes Paul shaking the viper into the fire on Malta without suffering harm, fulfilling Jesus' promise in Mark 16:18.",
    "hint": "New Testament book of church history; ends with Paul in Rome.",
    "testament": "New Testament",
    "difficulty": "hard",
    "timerSeconds": 25
  },
  {
    "level": 7,
    "challengeIndex": 1,
    "stage": 2,
    "stageTitle": "Story and Book",
    "levelTitle": "Catastrophes & Judgments",
    "questionType": "Which Book Contains This Event?",
    "isTyped": false,
    "questionText": "In which book do mysterious fingers of a human hand appear during a royal drunken banquet and write \"MENE, MENE, TEKEL, PARSIN\" upon the palace plaster?",
    "clues": [
      "King Belshazzar had desecrated golden goblets looted from the temple in Jerusalem.",
      "A captive Jewish sage was summoned to interpret the inscription.",
      "That very night the Babylonian king was slain and the empire fell to Darius the Mede."
    ],
    "options": [
      "Daniel",
      "Ezekiel",
      "Jeremiah",
      "Esther"
    ],
    "correctAnswer": "Daniel",
    "acceptedAlternatives": [
      "Dan"
    ],
    "reference": "Daniel 5:1–30",
    "explanation": "Daniel 5 recounts Belshazzar's feast and Daniel interpreting the handwriting on the wall.",
    "hint": "Major prophetic book containing the lion's den story.",
    "testament": "Old Testament",
    "difficulty": "easy",
    "timerSeconds": 30
  },
  {
    "level": 7,
    "challengeIndex": 2,
    "stage": 2,
    "stageTitle": "Story and Book",
    "levelTitle": "Catastrophes & Judgments",
    "questionType": "Which Book Contains This Event?",
    "isTyped": false,
    "questionText": "Which book records the earth opening its mouth and swallowing Korah, Dathan, and Abiram along with their households, followed by fire consuming 250 men offering unauthorized incense?",
    "clues": [
      "They had challenged the unique priesthood of Moses and Aaron: \"You have gone too far! For all in the congregation are holy.\"",
      "Moses declared: \"If the Lord creates something new, and the ground opens its mouth... you shall know that these men have despised the Lord.\"",
      "Aaron ran into the midst of the plague with his censer to make atonement."
    ],
    "options": [
      "Numbers",
      "Leviticus",
      "Exodus",
      "Deuteronomy"
    ],
    "correctAnswer": "Numbers",
    "acceptedAlternatives": [
      "Num"
    ],
    "reference": "Numbers 16:1–35, 41–50",
    "explanation": "Numbers 16 narrates Korah's rebellion and the divine judgment where the ground split open beneath the rebels.",
    "hint": "Fourth book of Moses; contains the censuses.",
    "testament": "Old Testament",
    "difficulty": "medium",
    "timerSeconds": 30
  },
  {
    "level": 7,
    "challengeIndex": 3,
    "stage": 2,
    "stageTitle": "Story and Book",
    "levelTitle": "Catastrophes & Judgments",
    "questionType": "Type the Book",
    "isTyped": true,
    "questionText": "TYPE THE BIBLE BOOK:\nIn which book is the weeping prophet commanded to buy an earthen flask, take elders of the people to the Valley of the Son of Hinnom (Topheth), and smash the flask as a sign of Jerusalem's coming devastation?",
    "clues": [
      "Known as the \"Weeping Prophet\" who suffered in a muddy cistern.",
      "Prophesied the exact 70-year duration of the Babylonian exile.",
      "Scribe Baruch wrote his prophecies on a scroll burned by King Jehoiakim."
    ],
    "options": [
      "Jeremiah",
      "Lamentations",
      "Ezekiel",
      "Isaiah"
    ],
    "correctAnswer": "Jeremiah",
    "acceptedAlternatives": [
      "Jer"
    ],
    "reference": "Jeremiah 19:1–11; 25:11–12",
    "explanation": "Jeremiah 19 records the smashed earthen flask in the Valley of Hinnom illustrating the destruction of Jerusalem.",
    "hint": "Major prophet whose book comes right before Lamentations.",
    "testament": "Old Testament",
    "difficulty": "hard",
    "timerSeconds": 25
  },
  {
    "level": 7,
    "challengeIndex": 4,
    "stage": 2,
    "stageTitle": "Story and Book",
    "levelTitle": "Catastrophes & Judgments",
    "questionType": "Which Book Contains This Event?",
    "isTyped": false,
    "questionText": "Which five-chapter book of funeral dirges mourns the catastrophic destruction of Jerusalem and the burning of Solomon's temple by the Babylonians in 586 BC, featuring an acrostic structure where chapters 1, 2, 4, and 5 have 22 verses?",
    "clues": [
      "Opens: \"How lonely sits the city that was full of people! How like a widow has she become.\"",
      "Contains the central comfort: \"The steadfast love of the Lord never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness.\"",
      "Traditionally attributed to Jeremiah."
    ],
    "options": [
      "Lamentations",
      "Jeremiah",
      "Ezekiel",
      "Habakkuk"
    ],
    "correctAnswer": "Lamentations",
    "acceptedAlternatives": [
      "Lam"
    ],
    "reference": "Lamentations 1:1; 3:22–24",
    "explanation": "The Book of Lamentations expresses profound national grief over the destruction of Zion and God's righteous judgment.",
    "hint": "Begins with Lam-; a book of sorrowful dirges.",
    "testament": "Old Testament",
    "difficulty": "medium",
    "timerSeconds": 30
  },
  {
    "level": 7,
    "challengeIndex": 5,
    "stage": 2,
    "stageTitle": "Story and Book",
    "levelTitle": "Catastrophes & Judgments",
    "questionType": "Type the Book",
    "isTyped": true,
    "questionText": "TYPE THE BIBLE BOOK:\nWhich book records the dramatic sudden deaths of a married couple named Ananias and Sapphira, who conspired to lie to the Holy Spirit regarding the proceeds of a sold piece of property?",
    "clues": [
      "Peter confronted them: \"You have not lied to man but to God.\"",
      "Both fell down dead within three hours of each other at Peter's feet.",
      "Great fear fell upon the entire early church as young men carried them out and buried them."
    ],
    "options": [
      "Acts",
      "Acts of the Apostles",
      "Romans",
      "1 Corinthians"
    ],
    "correctAnswer": "Acts",
    "acceptedAlternatives": [
      "Acts of the Apostles",
      "Act"
    ],
    "reference": "Acts 5:1–11",
    "explanation": "Acts 5:1–11 describes the judgment of Ananias and Sapphira for lying to the Holy Spirit about their gift.",
    "hint": "The fifth book of the New Testament.",
    "testament": "New Testament",
    "difficulty": "hard",
    "timerSeconds": 25
  },
  {
    "level": 8,
    "challengeIndex": 1,
    "stage": 2,
    "stageTitle": "Story and Book",
    "levelTitle": "Conversions & Callings",
    "questionType": "Which Book Contains This Event?",
    "isTyped": false,
    "questionText": "In which book does a persecutor named Saul see a blinding light from heaven on the road to Damascus, hear Jesus ask \"Saul, Saul, why are you persecuting me?\", and regain his sight through Ananias of Damascus?",
    "clues": [
      "The pivotal conversion that turned the church's chief adversary into the apostle to the Gentiles.",
      "Recounted three separate times in this same book (chapters 9, 22, and 26).",
      "Opens with Jesus' ascension and Pentecost."
    ],
    "options": [
      "Acts",
      "Galatians",
      "Romans",
      "2 Corinthians"
    ],
    "correctAnswer": "Acts",
    "acceptedAlternatives": [
      "Acts of the Apostles",
      "Act"
    ],
    "reference": "Acts 9:1–19; 22:6–16; 26:12–18",
    "explanation": "Acts 9 narrates Saul's Damascus road conversion, commissioning, and baptism.",
    "hint": "Book of church history; fifth book of New Testament.",
    "testament": "New Testament",
    "difficulty": "easy",
    "timerSeconds": 30
  },
  {
    "level": 8,
    "challengeIndex": 2,
    "stage": 2,
    "stageTitle": "Story and Book",
    "levelTitle": "Conversions & Callings",
    "questionType": "Which Book Contains This Event?",
    "isTyped": false,
    "questionText": "In which prophetic book does the author see the Lord seated on a high throne, seraphim crying \"Holy, holy, holy!\", and an angel touch his lips with a burning coal from the altar?",
    "clues": [
      "Dated: \"In the year that King Uzziah died.\"",
      "When the Lord asked, \"Whom shall I send?\", the prophet answered: \"Here I am! Send me.\"",
      "Contains 66 chapters, often called a miniature Bible."
    ],
    "options": [
      "Isaiah",
      "Ezekiel",
      "Jeremiah",
      "Daniel"
    ],
    "correctAnswer": "Isaiah",
    "acceptedAlternatives": [
      "Isa"
    ],
    "reference": "Isaiah 6:1–8",
    "explanation": "Isaiah 6 describes the prophet's vision of the thrice-holy God and his commissioning with the live coal.",
    "hint": "Major prophet of 66 chapters; starts with I.",
    "testament": "Old Testament",
    "difficulty": "medium",
    "timerSeconds": 30
  },
  {
    "level": 8,
    "challengeIndex": 3,
    "stage": 2,
    "stageTitle": "Story and Book",
    "levelTitle": "Conversions & Callings",
    "questionType": "Type the Book",
    "isTyped": true,
    "questionText": "TYPE THE BIBLE BOOK:\nIn which book is a priest by the Chebar canal in Babylon overwhelmed by a fiery chariot-throne with wheels full of eyes, falling on his face before the glory of the Lord and being commanded to eat a scroll with words of lamentation?",
    "clues": [
      "The prophet was appointed a watchman for the house of Israel.",
      "Contains the vision of the valley of dry bones (chapter 37).",
      "Wife died as a prophetic sign, and he lay on his side for 390 days."
    ],
    "options": [
      "Ezekiel",
      "Daniel",
      "Jeremiah",
      "Zechariah"
    ],
    "correctAnswer": "Ezekiel",
    "acceptedAlternatives": [
      "Ezek"
    ],
    "reference": "Ezekiel 1:1–28; 2:8–3:3",
    "explanation": "Ezekiel 1–3 describes the calling of the prophet Ezekiel among the exiles in Babylon by the Chebar canal.",
    "hint": "Begins with Ezek-; priest-prophet of the exilic period.",
    "testament": "Old Testament",
    "difficulty": "hard",
    "timerSeconds": 25
  },
  {
    "level": 8,
    "challengeIndex": 4,
    "stage": 2,
    "stageTitle": "Story and Book",
    "levelTitle": "Conversions & Callings",
    "questionType": "Which Book Contains This Event?",
    "isTyped": false,
    "questionText": "Which book records the calling of young Samuel at the tabernacle in Shiloh, where the Lord called his name three times while he slept near the Ark, and Eli told him to answer: \"Speak, Lord, for your servant hears\"?",
    "clues": [
      "The word of the Lord was rare in those days, with no frequent vision.",
      "Samuel was given a message of judgment concerning the household of High Priest Eli.",
      "Opens with the vow of Hannah."
    ],
    "options": [
      "1 Samuel",
      "2 Samuel",
      "Judges",
      "1 Kings"
    ],
    "correctAnswer": "1 Samuel",
    "acceptedAlternatives": [
      "First Samuel",
      "1Sam"
    ],
    "reference": "1 Samuel 3:1–18",
    "explanation": "1 Samuel 3 recounts God calling the boy Samuel in the sanctuary at Shiloh.",
    "hint": "First book of Samuel; begins with 1.",
    "testament": "Old Testament",
    "difficulty": "easy",
    "timerSeconds": 30
  },
  {
    "level": 8,
    "challengeIndex": 5,
    "stage": 2,
    "stageTitle": "Story and Book",
    "levelTitle": "Conversions & Callings",
    "questionType": "Type the Book",
    "isTyped": true,
    "questionText": "TYPE THE BIBLE BOOK:\nIn which book does Jesus see a tax collector sitting at his tax collection booth in Capernaum and say to him, \"Follow me,\" whereupon he rose and left everything to follow Him, subsequently hosting a great banquet in his house for tax collectors and sinners?",
    "clues": [
      "Luke refers to this man by his other name: Levi.",
      "In this Gospel, the author explicitly names himself with his apostolic name in chapter 9.",
      "First Gospel in the New Testament."
    ],
    "options": [
      "Matthew",
      "Luke",
      "Mark",
      "John"
    ],
    "correctAnswer": "Matthew",
    "acceptedAlternatives": [
      "Matt"
    ],
    "reference": "Matthew 9:9–13; Luke 5:27–32",
    "explanation": "Matthew 9:9 records Jesus calling Matthew at the receipt of custom. The author humbly records his own calling and banquet.",
    "hint": "First Gospel of the New Testament; starts with M.",
    "testament": "New Testament",
    "difficulty": "hard",
    "timerSeconds": 25
  },
  {
    "level": 9,
    "challengeIndex": 1,
    "stage": 2,
    "stageTitle": "Story and Book",
    "levelTitle": "Unlikely Military Triumphs",
    "questionType": "Which Book Contains This Event?",
    "isTyped": false,
    "questionText": "In which book does Gideon reduce his army from thirty-two thousand men down to a modest force of three hundred using a water-lapping test, routing the Midianite army with trumpets, empty clay jars, and burning torches?",
    "clues": [
      "They shouted the battle cry: \"A sword for the Lord and for Gideon!\"",
      "The Midianites turned their swords against one another in panic.",
      "Gideon had previously tested God with a fleece of wool."
    ],
    "options": [
      "Judges",
      "Joshua",
      "1 Samuel",
      "2 Kings"
    ],
    "correctAnswer": "Judges",
    "acceptedAlternatives": [
      "Judg"
    ],
    "reference": "Judges 7:1–22",
    "explanation": "Judges 7 narrates Gideon's miraculous victory over the vast Midianite host with just 300 men.",
    "hint": "Book describing the era of tribal judges before Saul.",
    "testament": "Old Testament",
    "difficulty": "easy",
    "timerSeconds": 30
  },
  {
    "level": 9,
    "challengeIndex": 2,
    "stage": 2,
    "stageTitle": "Story and Book",
    "levelTitle": "Unlikely Military Triumphs",
    "questionType": "Which Book Contains This Event?",
    "isTyped": false,
    "questionText": "Which book records King Jehoshaphat appointing temple singers to march in holy attire at the head of the army singing: \"Give thanks to the Lord, for his steadfast love endures forever\", where the enemy armies of Moab and Ammon destroyed one another before Israel arrived?",
    "clues": [
      "The prophet Jahaziel prophesied: \"Do not be afraid... for the battle is not yours but God's.\"",
      "The place was called the Valley of Beracah (Blessing) because they blessed the Lord there.",
      "Focuses heavily on the Davidic line, temple worship, and levitical choirs."
    ],
    "options": [
      "2 Chronicles",
      "1 Kings",
      "2 Kings",
      "1 Chronicles"
    ],
    "correctAnswer": "2 Chronicles",
    "acceptedAlternatives": [
      "Second Chronicles",
      "2Chr"
    ],
    "reference": "2 Chronicles 20:1–30",
    "explanation": "2 Chronicles 20 describes Jehoshaphat's choir leading the army to victory in the wilderness of Tekoa.",
    "hint": "Second book of Chronicles; highlights temple singers.",
    "testament": "Old Testament",
    "difficulty": "medium",
    "timerSeconds": 30
  },
  {
    "level": 9,
    "challengeIndex": 3,
    "stage": 2,
    "stageTitle": "Story and Book",
    "levelTitle": "Unlikely Military Triumphs",
    "questionType": "Type the Book",
    "isTyped": true,
    "questionText": "TYPE THE BIBLE BOOK:\nIn which book does Jael, the wife of Heber the Kenite, offer a fugitive Canaanite general named Sisera hospitality and curdled milk, and drive a wooden tent peg through his temple into the ground while he slept?",
    "clues": [
      "Deborah the prophetess had foretold: \"The Lord will sell Sisera into the hand of a woman.\"",
      "Barak chased the nine hundred chariots of iron to Harosheth-hagoyim.",
      "Celebrated in the ancient victory song of chapter 5."
    ],
    "options": [
      "Judges",
      "Joshua",
      "1 Samuel",
      "Ruth"
    ],
    "correctAnswer": "Judges",
    "acceptedAlternatives": [
      "Judg"
    ],
    "reference": "Judges 4:17–22; 5:24–27",
    "explanation": "Judges 4–5 describes the defeat of Sisera by Barak and Deborah, culminating in Jael eliminating Sisera in her tent.",
    "hint": "Book containing Gideon, Samson, and Deborah; starts with J.",
    "testament": "Old Testament",
    "difficulty": "hard",
    "timerSeconds": 25
  },
  {
    "level": 9,
    "challengeIndex": 4,
    "stage": 2,
    "stageTitle": "Story and Book",
    "levelTitle": "Unlikely Military Triumphs",
    "questionType": "Which Book Contains This Event?",
    "isTyped": false,
    "questionText": "In which book does an angel of the Lord enter the camp of King Sennacherib of Assyria by night and strike down 185,000 soldiers after King Hezekiah spread Sennacherib's mocking letter before God in the temple?",
    "clues": [
      "Isaiah the prophet assured Hezekiah that Assyria would not shoot an arrow into Jerusalem.",
      "Sennacherib withdrew to Nineveh where he was assassinated by his sons while worshiping his god Nisroch.",
      "Found in both Isaiah and this historical narrative in chapter 19."
    ],
    "options": [
      "2 Kings",
      "1 Kings",
      "1 Chronicles",
      "Joshua"
    ],
    "correctAnswer": "2 Kings",
    "acceptedAlternatives": [
      "Second Kings",
      "2Kgs",
      "Isaiah"
    ],
    "reference": "2 Kings 19:14–37; Isaiah 37:14–38",
    "explanation": "2 Kings 19 recounts the night the angel of the Lord destroyed 185,000 Assyrian invaders besieging Jerusalem.",
    "hint": "Second book of Kings; covers the divided monarchy to the exile.",
    "testament": "Old Testament",
    "difficulty": "medium",
    "timerSeconds": 30
  },
  {
    "level": 9,
    "challengeIndex": 5,
    "stage": 2,
    "stageTitle": "Story and Book",
    "levelTitle": "Unlikely Military Triumphs",
    "questionType": "Type the Book",
    "isTyped": true,
    "questionText": "TYPE THE BIBLE BOOK:\nWhich book records Jonathan and his young armor-bearer climbing on their hands and feet up a steep rocky cliff between the passes of Bozez and Seneh to attack a Philistine outpost, declaring: \"Nothing can hinder the Lord from saving by many or by few\"?",
    "clues": [
      "They struck down about twenty Philistine men within half an acre.",
      "God sent an earthquake that threw the entire Philistine camp into panic.",
      "King Saul had foolishly bound the army with a curse not to eat food until evening."
    ],
    "options": [
      "1 Samuel",
      "2 Samuel",
      "Judges",
      "1 Kings"
    ],
    "correctAnswer": "1 Samuel",
    "acceptedAlternatives": [
      "First Samuel",
      "1Sam"
    ],
    "reference": "1 Samuel 14:1–23",
    "explanation": "1 Samuel 14 describes Jonathan's heroic faith-filled raid on the Philistine garrison at Michmash.",
    "hint": "First Samuel; chapter 14.",
    "testament": "Old Testament",
    "difficulty": "hard",
    "timerSeconds": 25
  },
  {
    "level": 10,
    "challengeIndex": 1,
    "stage": 2,
    "stageTitle": "Story and Book",
    "levelTitle": "Story Master Boss",
    "questionType": "The Book Detective",
    "isTyped": false,
    "questionText": "THE BOOK DETECTIVE:\nI contain an account of a Syrian military commander who suffered from leprosy. A captured Hebrew slave girl told his wife of a prophet in Samaria. When he arrived with horses and chariots, the prophet did not even come out to greet him, but sent a messenger telling him to wash seven times in the Jordan River. In which book is this recorded?",
    "clues": [
      "Naaman was initially enraged, preferring the rivers of Damascus (Abana and Pharpar).",
      "His servants persuaded him to obey; when he dipped seven times, his flesh was restored like that of a little child.",
      "Gehazi, the prophet's servant, chased down the commander for silver and was struck with leprosy."
    ],
    "options": [
      "2 Kings",
      "1 Kings",
      "2 Chronicles",
      "Leviticus"
    ],
    "correctAnswer": "2 Kings",
    "acceptedAlternatives": [
      "Second Kings",
      "2Kgs"
    ],
    "reference": "2 Kings 5:1–27",
    "explanation": "2 Kings 5 describes the healing of Naaman the Syrian through Elisha's command to wash seven times in the Jordan.",
    "hint": "Second Kings chapter 5.",
    "testament": "Old Testament",
    "difficulty": "hard",
    "timerSeconds": 25
  },
  {
    "level": 10,
    "challengeIndex": 2,
    "stage": 2,
    "stageTitle": "Story and Book",
    "levelTitle": "Story Master Boss",
    "questionType": "Two Books, One Story",
    "isTyped": false,
    "questionText": "TWO BOOKS, ONE STORY:\nWhich TWO books contain the parallel historical accounts of King David's sinful census of Israel, the resulting three days of pestilence, and David's purchase of the threshing floor of Araunah (Ornan) the Jebusite where he built an altar?",
    "clues": [
      "One book attributes the provocation to God's anger against Israel: \"he incited David against them.\"",
      "The other book records: \"Then Satan stood against Israel and incited David to number Israel.\"",
      "Both culminate at the exact site where Solomon's temple was built on Mount Moriah."
    ],
    "options": [
      "2 Samuel and 1 Chronicles",
      "1 Kings and 2 Kings",
      "Joshua and Judges",
      "Ezra and Nehemiah"
    ],
    "correctAnswer": "2 Samuel and 1 Chronicles",
    "acceptedAlternatives": [
      "2 Samuel & 1 Chronicles",
      "2 Sam and 1 Chron"
    ],
    "reference": "2 Samuel 24:1–25; 1 Chronicles 21:1–30",
    "explanation": "David's numbering of Israel and purchase of the threshing floor are recorded in 2 Samuel 24 and 1 Chronicles 21.",
    "hint": "2 Samuel (ch 24) and 1 Chronicles (ch 21).",
    "testament": "Old Testament",
    "difficulty": "hard",
    "timerSeconds": 25
  },
  {
    "level": 10,
    "challengeIndex": 3,
    "stage": 2,
    "stageTitle": "Story and Book",
    "levelTitle": "Story Master Boss",
    "questionType": "Type the Book",
    "isTyped": true,
    "questionText": "TYPE THE BIBLE BOOK:\nWhich book describes a midnight earthquake shaking a Roman colony's prison, opening all the doors, breaking all the prisoners' chains, and causing a suicidal jailer to ask: \"Sirs, what must I do to be saved?\"",
    "clues": [
      "Paul and Silas were praying and singing hymns in the inner stocks.",
      "The jailer washed their wounds and was baptized with his whole household that night.",
      "Occurred in the Macedonian city of Philippi."
    ],
    "options": [
      "Acts",
      "Acts of the Apostles",
      "Philippians",
      "Romans"
    ],
    "correctAnswer": "Acts",
    "acceptedAlternatives": [
      "Acts of the Apostles",
      "Act"
    ],
    "reference": "Acts 16:25–34",
    "explanation": "Acts 16 records the conversion of the Philippian jailer after the miraculous prison earthquake.",
    "hint": "The Book of Acts, chapter 16.",
    "testament": "New Testament",
    "difficulty": "medium",
    "timerSeconds": 25
  },
  {
    "level": 10,
    "challengeIndex": 4,
    "stage": 2,
    "stageTitle": "Story and Book",
    "levelTitle": "Story Master Boss",
    "questionType": "The Book Detective",
    "isTyped": false,
    "questionText": "THE BOOK DETECTIVE:\nI contain an account of a young prophet sent from Judah to Bethel to cry out against King Jeroboam's golden calf altar. When Jeroboam stretched out his hand to seize him, the king's hand withered, and the altar was torn down. God commanded the prophet not to eat bread or drink water or return by the way he came. However, an old prophet in Bethel deceived him into eating at his house, and on his way home a lion killed him and stood beside his donkey without eating the carcass. In which book is this recorded?",
    "clues": [
      "A dramatic warning against disobeying the clear command of God.",
      "The king's hand was restored when the man of God entreated the Lord.",
      "Recorded in chapter 13 of this book."
    ],
    "options": [
      "1 Kings",
      "2 Kings",
      "1 Samuel",
      "2 Chronicles"
    ],
    "correctAnswer": "1 Kings",
    "acceptedAlternatives": [
      "First Kings",
      "1Kgs"
    ],
    "reference": "1 Kings 13:1–32",
    "explanation": "1 Kings 13 records the man of God from Judah confronting Jeroboam's altar at Bethel and his tragic demise through deception.",
    "hint": "First Kings, chapter 13.",
    "testament": "Old Testament",
    "difficulty": "master",
    "timerSeconds": 20
  },
  {
    "level": 10,
    "challengeIndex": 5,
    "stage": 2,
    "stageTitle": "Story and Book",
    "levelTitle": "Story Master Boss",
    "questionType": "Type the Book",
    "isTyped": true,
    "questionText": "TYPE THE BIBLE BOOK:\nIn which Gospel does a blind man healed by Jesus wash in the Pool of Siloam (\"which means Sent\"), face interrogation by the Pharisees, and when cast out of the synagogue, meet Jesus again and declare: \"Lord, I believe,\" worshiping Him?",
    "clues": [
      "Jesus spat on the ground, made mud with saliva, and anointed the man's eyes.",
      "The man responded to the council: \"One thing I do know, that though I was blind, now I see.\"",
      "Recorded exclusively in chapter 9 of this Gospel."
    ],
    "options": [
      "John",
      "Luke",
      "Mark",
      "Matthew"
    ],
    "correctAnswer": "John",
    "acceptedAlternatives": [
      "Jn"
    ],
    "reference": "John 9:1–38",
    "explanation": "John 9 exclusively records the story of the man born blind who washed in the Pool of Siloam.",
    "hint": "Fourth Gospel; four letters; starts with J.",
    "testament": "New Testament",
    "difficulty": "hard",
    "timerSeconds": 20
  },
  {
    "level": 11,
    "challengeIndex": 1,
    "stage": 3,
    "stageTitle": "Character and Book",
    "levelTitle": "Obscure OT Figures",
    "questionType": "Identify the Book from an Unfamiliar Character",
    "isTyped": false,
    "questionText": "In which book does Huldah the prophetess live in Jerusalem in the Second Quarter, consulted by the high priest Hilkiah and royal officials when the Book of the Law was rediscovered in the temple?",
    "clues": [
      "Her husband Shallum was keeper of the royal wardrobe.",
      "She verified the authenticity of the Deuteronomy scroll and prophesied covenant judgment on Judah.",
      "Promised young King Josiah peace because his heart was penitent."
    ],
    "options": [
      "2 Kings",
      "1 Kings",
      "Nehemiah",
      "Ezra"
    ],
    "correctAnswer": "2 Kings",
    "acceptedAlternatives": [
      "Second Kings",
      "2Kgs",
      "2 Chronicles"
    ],
    "reference": "2 Kings 22:14–20; 2 Chronicles 34:22–28",
    "explanation": "2 Kings 22 records King Josiah's delegation consulting Huldah the prophetess after Hilkiah found the Law in the temple.",
    "hint": "Second Kings, during King Josiah's temple renovation.",
    "testament": "Old Testament",
    "difficulty": "medium",
    "timerSeconds": 30
  },
  {
    "level": 11,
    "challengeIndex": 2,
    "stage": 3,
    "stageTitle": "Character and Book",
    "levelTitle": "Obscure OT Figures",
    "questionType": "Identify the Book from an Unfamiliar Character",
    "isTyped": false,
    "questionText": "Which book mentions Ebed-Melech, the Cushite court official in King Zedekiah's palace who used ropes and decayed rags under armpits to pull the prophet Jeremiah out of a muddy cistern?",
    "clues": [
      "He boldly confronted the king at the Gate of Benjamin.",
      "God sent a personal promise to spare Ebed-Melech's life when the Babylonians sacked Jerusalem because he trusted in the Lord.",
      "Named after the prophet he rescued."
    ],
    "options": [
      "Jeremiah",
      "Ezekiel",
      "2 Kings",
      "Daniel"
    ],
    "correctAnswer": "Jeremiah",
    "acceptedAlternatives": [
      "Jer"
    ],
    "reference": "Jeremiah 38:7–13; 39:15–18",
    "explanation": "Ebed-Melech the Ethiopian eunuch delivered Jeremiah from Malkijah's muddy dungeon in Jeremiah 38.",
    "hint": "The major prophetic book named after Jeremiah.",
    "testament": "Old Testament",
    "difficulty": "medium",
    "timerSeconds": 30
  },
  {
    "level": 11,
    "challengeIndex": 3,
    "stage": 3,
    "stageTitle": "Character and Book",
    "levelTitle": "Obscure OT Figures",
    "questionType": "Type the Book",
    "isTyped": true,
    "questionText": "TYPE THE BIBLE BOOK:\nIn which book does Bezalel, son of Uri of the tribe of Judah, receive divine inspiration and craftsmanship from the Spirit of God to construct the wilderness Tabernacle and the Ark of the Covenant?",
    "clues": [
      "Appointed alongside Oholiab of the tribe of Dan.",
      "Filled with wisdom, understanding, and knowledge in gold, silver, bronze, and stone-cutting.",
      "Second book of Moses."
    ],
    "options": [
      "Exodus",
      "Leviticus",
      "Numbers",
      "1 Kings"
    ],
    "correctAnswer": "Exodus",
    "acceptedAlternatives": [
      "Exod"
    ],
    "reference": "Exodus 31:1–6; 35:30–35",
    "explanation": "Exodus 31 and 35 describe God calling Bezalel by name to build the Tabernacle and its sacred furniture.",
    "hint": "Second book of the Old Testament; starts with Ex-.",
    "testament": "Old Testament",
    "difficulty": "hard",
    "timerSeconds": 25
  },
  {
    "level": 11,
    "challengeIndex": 4,
    "stage": 3,
    "stageTitle": "Character and Book",
    "levelTitle": "Obscure OT Figures",
    "questionType": "Identify the Book from an Unfamiliar Character",
    "isTyped": false,
    "questionText": "Which book records the five daughters of Zelophehad (Mahlah, Noah, Hoglah, Milcah, and Tirzah) successfully petitioning Moses for a legal right to inherit their deceased father's ancestral land?",
    "clues": [
      "Their father had died in the wilderness without sons.",
      "Established the permanent statute of female inheritance in Israel.",
      "Covers the wilderness census and tribal allotments."
    ],
    "options": [
      "Numbers",
      "Joshua",
      "Deuteronomy",
      "Leviticus"
    ],
    "correctAnswer": "Numbers",
    "acceptedAlternatives": [
      "Num"
    ],
    "reference": "Numbers 27:1–11; 36:1–12",
    "explanation": "Numbers 27 introduces the daughters of Zelophehad and established Israel's inheritance laws.",
    "hint": "Fourth book of the Bible.",
    "testament": "Old Testament",
    "difficulty": "medium",
    "timerSeconds": 30
  },
  {
    "level": 11,
    "challengeIndex": 5,
    "stage": 3,
    "stageTitle": "Character and Book",
    "levelTitle": "Obscure OT Figures",
    "questionType": "Type the Book",
    "isTyped": true,
    "questionText": "TYPE THE BIBLE BOOK:\nIn which book does Rizpah, the concubine of Saul, spread sackcloth upon a rock at Gibeah and heroically guard the impaled bodies of her sons day and night from birds and wild beasts for months until David gives them honorable burial?",
    "clues": [
      "Daughter of Aiah; mother of Armoni and Mephibosheth.",
      "The Gibeonites demanded seven descendants of Saul to avenge Saul's zeal.",
      "David was moved by her devotion and collected the bones of Saul and Jonathan from Jabesh-gilead."
    ],
    "options": [
      "2 Samuel",
      "1 Samuel",
      "1 Kings",
      "1 Chronicles"
    ],
    "correctAnswer": "2 Samuel",
    "acceptedAlternatives": [
      "Second Samuel",
      "2Sam"
    ],
    "reference": "2 Samuel 21:8–14",
    "explanation": "2 Samuel 21 details Rizpah's devotion in protecting the bodies of her slain sons.",
    "hint": "Second book of Samuel.",
    "testament": "Old Testament",
    "difficulty": "hard",
    "timerSeconds": 25
  },
  {
    "level": 12,
    "challengeIndex": 1,
    "stage": 3,
    "stageTitle": "Character and Book",
    "levelTitle": "Obscure NT Figures",
    "questionType": "Identify the Book from an Unfamiliar Character",
    "isTyped": false,
    "questionText": "In which epistle does Paul praise Onesiphorus, praying that the Lord grant mercy to his household because \"he often refreshed me and was not ashamed of my chains, but when he arrived in Rome he searched for me earnestly and found me\"?",
    "clues": [
      "Paul's final, deeply personal pastoral letter written from a cold Roman dungeon.",
      "Paul notes that all who are in Asia turned away from him (Phygelus and Hermogenes).",
      "Urges Timothy to bring the cloak left at Troas and the parchments."
    ],
    "options": [
      "2 Timothy",
      "1 Timothy",
      "Titus",
      "Philippians"
    ],
    "correctAnswer": "2 Timothy",
    "acceptedAlternatives": [
      "Second Timothy",
      "2Tim"
    ],
    "reference": "2 Timothy 1:16–18; 4:19",
    "explanation": "2 Timothy 1:16–18 commemorates Onesiphorus who searched diligently for Paul in Rome.",
    "hint": "Paul's second letter to young pastor Timothy.",
    "testament": "New Testament",
    "difficulty": "medium",
    "timerSeconds": 30
  },
  {
    "level": 12,
    "challengeIndex": 2,
    "stage": 3,
    "stageTitle": "Character and Book",
    "levelTitle": "Obscure NT Figures",
    "questionType": "Identify the Book from an Unfamiliar Character",
    "isTyped": false,
    "questionText": "Which book contains the personal greeting of Tertius: \"I Tertius, who wrote this letter, greet you in the Lord\"?",
    "clues": [
      "Tertius was the professional amanuensis (scribe) who penned the letter as Paul dictated.",
      "Found in chapter 16 alongside greetings to Phoebe, Priscilla, Aquila, and Andronicus.",
      "Paul's premier theological treatise on justification."
    ],
    "options": [
      "Romans",
      "Galatians",
      "1 Corinthians",
      "Colossians"
    ],
    "correctAnswer": "Romans",
    "acceptedAlternatives": [
      "Rom"
    ],
    "reference": "Romans 16:22",
    "explanation": "Romans 16:22 contains Tertius' greeting as the scribe who wrote down Paul's epistle to the Romans.",
    "hint": "Addressed to the Christians in Rome.",
    "testament": "New Testament",
    "difficulty": "medium",
    "timerSeconds": 30
  },
  {
    "level": 12,
    "challengeIndex": 3,
    "stage": 3,
    "stageTitle": "Character and Book",
    "levelTitle": "Obscure NT Figures",
    "questionType": "Type the Book",
    "isTyped": true,
    "questionText": "TYPE THE BIBLE BOOK:\nIn which book does Paul commend Phoebe, a deaconess / servant of the church at Cenchreae and patron of many, who carried Paul's letter across the sea?",
    "clues": [
      "Cenchreae was the eastern port of Corinth.",
      "Paul asks the believers to welcome her in the Lord in a way worthy of the saints.",
      "Found in the opening verses of chapter 16."
    ],
    "options": [
      "Romans",
      "1 Corinthians",
      "2 Corinthians",
      "Philippians"
    ],
    "correctAnswer": "Romans",
    "acceptedAlternatives": [
      "Rom"
    ],
    "reference": "Romans 16:1–2",
    "explanation": "Romans 16:1–2 commends Phoebe of Cenchreae as a trusted servant who delivered the letter to Rome.",
    "hint": "Paul's epistle to the Romans.",
    "testament": "New Testament",
    "difficulty": "hard",
    "timerSeconds": 25
  },
  {
    "level": 12,
    "challengeIndex": 4,
    "stage": 3,
    "stageTitle": "Character and Book",
    "levelTitle": "Obscure NT Figures",
    "questionType": "Identify the Book from an Unfamiliar Character",
    "isTyped": false,
    "questionText": "Which prison letter mentions Epaphras, praising him as a native of the city who originally evangelized them and who \"is always wrestling on your behalf in his prayers, that you may stand mature and fully assured in all the will of God\"?",
    "clues": [
      "Written to a city in the Lycus Valley of Phrygia alongside Hierapolis and Laodicea.",
      "Combats a syncretistic heresy that diminished the supreme preeminence of Christ.",
      "Paul calls Epaphras his \"beloved fellow servant\"."
    ],
    "options": [
      "Colossians",
      "Ephesians",
      "Philippians",
      "Galatians"
    ],
    "correctAnswer": "Colossians",
    "acceptedAlternatives": [
      "Col"
    ],
    "reference": "Colossians 1:7; 4:12–13",
    "explanation": "Colossians 1:7 and 4:12 describe Epaphras, the faithful minister who planted and prayed for the Colossian church.",
    "hint": "Written to the church at Colossae.",
    "testament": "New Testament",
    "difficulty": "medium",
    "timerSeconds": 30
  },
  {
    "level": 12,
    "challengeIndex": 5,
    "stage": 3,
    "stageTitle": "Character and Book",
    "levelTitle": "Obscure NT Figures",
    "questionType": "Type the Book",
    "isTyped": true,
    "questionText": "TYPE THE BIBLE BOOK:\nIn which book does Sosthenes appear as a co-sender with Paul in the opening greeting: \"Paul, called by the will of God to be an apostle of Christ Jesus, and our brother Sosthenes\"?",
    "clues": [
      "Sosthenes had previously been ruler of the synagogue in Corinth who was beaten before Gallio's tribunal in Acts 18:17.",
      "He had evidently become a Christian leader working with Paul.",
      "First letter to this divided Greek congregation."
    ],
    "options": [
      "1 Corinthians",
      "2 Corinthians",
      "Romans",
      "Galatians"
    ],
    "correctAnswer": "1 Corinthians",
    "acceptedAlternatives": [
      "First Corinthians",
      "1Cor"
    ],
    "reference": "1 Corinthians 1:1; Acts 18:17",
    "explanation": "1 Corinthians 1:1 names Sosthenes as co-sender alongside the apostle Paul.",
    "hint": "Paul's first letter to the Corinthians; begins with 1.",
    "testament": "New Testament",
    "difficulty": "hard",
    "timerSeconds": 25
  },
  {
    "level": 13,
    "challengeIndex": 1,
    "stage": 3,
    "stageTitle": "Character and Book",
    "levelTitle": "Royal Courts & Foreign Rulers",
    "questionType": "Which Book Contains This Event?",
    "isTyped": false,
    "questionText": "Which book opens with the royal proclamation of King Cyrus of Persia throughout his kingdom: \"The Lord, the God of heaven, has given me all the kingdoms of the earth, and he has charged me to build him a house at Jerusalem, which is in Judah\"?",
    "clues": [
      "Fulfills Jeremiah's 70-year prophecy.",
      "Records Zerubbabel leading the first wave of Jewish exiles back to rebuild the temple altar.",
      "Contains royal decrees from Cyrus, Darius, and Artaxerxes."
    ],
    "options": [
      "Ezra",
      "Nehemiah",
      "Esther",
      "Daniel"
    ],
    "correctAnswer": "Ezra",
    "acceptedAlternatives": [
      "Ezr"
    ],
    "reference": "Ezra 1:1–4; 2 Chronicles 36:22–23",
    "explanation": "Ezra 1 opens with Cyrus' historic decree permitting the return of Jewish exiles to rebuild the temple in Jerusalem.",
    "hint": "Named after the godly priest and scribe of the Law.",
    "testament": "Old Testament",
    "difficulty": "medium",
    "timerSeconds": 30
  },
  {
    "level": 13,
    "challengeIndex": 2,
    "stage": 3,
    "stageTitle": "Character and Book",
    "levelTitle": "Royal Courts & Foreign Rulers",
    "questionType": "Which Book Contains This Event?",
    "isTyped": false,
    "questionText": "In which book does King Ahasuerus (Xerxes) depose Queen Vashti during a lavish 180-day feast in the citadel of Susa, prompting a search throughout the Persian empire for a new queen?",
    "clues": [
      "The Jewish orphan Hadassah is chosen as queen.",
      "Haman the Agagite plots the extermination of all Jews in the empire.",
      "The name of God is never explicitly mentioned in the entire text."
    ],
    "options": [
      "Esther",
      "Daniel",
      "Ezra",
      "Nehemiah"
    ],
    "correctAnswer": "Esther",
    "acceptedAlternatives": [
      "Esth"
    ],
    "reference": "Esther 1:1–2:17",
    "explanation": "The Book of Esther describes the Persian court of Ahasuerus in Susa and Esther's courage in saving her people.",
    "hint": "Named after the Jewish queen of Persia.",
    "testament": "Old Testament",
    "difficulty": "easy",
    "timerSeconds": 30
  },
  {
    "level": 13,
    "challengeIndex": 3,
    "stage": 3,
    "stageTitle": "Character and Book",
    "levelTitle": "Royal Courts & Foreign Rulers",
    "questionType": "Type the Book",
    "isTyped": true,
    "questionText": "TYPE THE BIBLE BOOK:\nWhich book mentions Candace, queen of the Ethiopians, whose court treasurer was reading the scroll of Isaiah in his chariot when Philip the Evangelist was directed by the Spirit to join his carriage?",
    "clues": [
      "The official had traveled over a thousand miles to worship in Jerusalem.",
      "He was baptized in roadside water on the desert road to Gaza.",
      "Recorded in chapter 8."
    ],
    "options": [
      "Acts",
      "Acts of the Apostles",
      "Luke",
      "Romans"
    ],
    "correctAnswer": "Acts",
    "acceptedAlternatives": [
      "Acts of the Apostles",
      "Act"
    ],
    "reference": "Acts 8:26–39",
    "explanation": "Acts 8 introduces the Ethiopian eunuch, chief officer of Queen Candace, baptized by Philip.",
    "hint": "Fifth book of the New Testament; church history.",
    "testament": "New Testament",
    "difficulty": "medium",
    "timerSeconds": 30
  },
  {
    "level": 13,
    "challengeIndex": 4,
    "stage": 3,
    "stageTitle": "Character and Book",
    "levelTitle": "Royal Courts & Foreign Rulers",
    "questionType": "Which Book Contains This Event?",
    "isTyped": false,
    "questionText": "In which book is Paul brought before Gallio, the Roman proconsul of Achaia, who dismisses Jewish religious accusations against Paul, refusing to be a judge of Jewish internal law?",
    "clues": [
      "Gallio was the brother of famous Roman philosopher Seneca.",
      "Occurred in the commercial Greek metropolis of Corinth.",
      "Provides a secure historical benchmark (AD 51–52) for New Testament chronology."
    ],
    "options": [
      "Acts",
      "1 Corinthians",
      "2 Corinthians",
      "Romans"
    ],
    "correctAnswer": "Acts",
    "acceptedAlternatives": [
      "Acts of the Apostles",
      "Act"
    ],
    "reference": "Acts 18:12–17",
    "explanation": "Acts 18 records Paul appearing before Proconsul Gallio in Corinth.",
    "hint": "Historical book describing Paul's missionary travels.",
    "testament": "New Testament",
    "difficulty": "medium",
    "timerSeconds": 30
  },
  {
    "level": 13,
    "challengeIndex": 5,
    "stage": 3,
    "stageTitle": "Character and Book",
    "levelTitle": "Royal Courts & Foreign Rulers",
    "questionType": "Type the Book",
    "isTyped": true,
    "questionText": "TYPE THE BIBLE BOOK:\nIn which book does King Nebuchadnezzar construct a 90-foot golden image on the plain of Dura and cast three faithful Hebrew captives (Shadrach, Meshach, and Abednego) into a superheated fiery furnace when they refuse to bow?",
    "clues": [
      "They declared: \"Our God whom we serve is able to deliver us... but if not, be it known to you, O king, that we will not serve your gods.\"",
      "The king saw four men unbound walking in the midst of the fire, the fourth resembling \"a son of the gods.\"",
      "Their hair was not singed, their cloaks were not harmed, and no smell of fire was upon them."
    ],
    "options": [
      "Daniel",
      "Ezekiel",
      "Jeremiah",
      "Esther"
    ],
    "correctAnswer": "Daniel",
    "acceptedAlternatives": [
      "Dan"
    ],
    "reference": "Daniel 3:1–30",
    "explanation": "Daniel 3 describes the three Hebrew youths in Nebuchadnezzar's fiery furnace.",
    "hint": "Old Testament prophetic book; six letters; begins with D.",
    "testament": "Old Testament",
    "difficulty": "hard",
    "timerSeconds": 25
  },
  {
    "level": 14,
    "challengeIndex": 1,
    "stage": 3,
    "stageTitle": "Character and Book",
    "levelTitle": "Prophets & Priests",
    "questionType": "Identify the Book from an Unfamiliar Character",
    "isTyped": false,
    "questionText": "In which book does the prophet Micaiah son of Imlah stand alone against four hundred state prophets, accurately foretelling King Ahab's death at Ramoth-gilead while Ahab orders him fed with rations of bread and water?",
    "clues": [
      "Ahab told Jehoshaphat: \"There is yet one man... but I hate him, for he never prophesies good concerning me, but evil.\"",
      "Micaiah saw Israel scattered like sheep having no shepherd.",
      "Ahab disguised himself, but a Syrian archer drew his bow at random and struck the king between the joints of his armor."
    ],
    "options": [
      "1 Kings",
      "2 Kings",
      "1 Chronicles",
      "Amos"
    ],
    "correctAnswer": "1 Kings",
    "acceptedAlternatives": [
      "First Kings",
      "1Kgs",
      "2 Chronicles"
    ],
    "reference": "1 Kings 22:7–38; 2 Chronicles 18:6–34",
    "explanation": "1 Kings 22 recounts Micaiah prophesying Ahab's defeat and death at Ramoth-gilead.",
    "hint": "First Kings, in the closing chapter.",
    "testament": "Old Testament",
    "difficulty": "medium",
    "timerSeconds": 30
  },
  {
    "level": 14,
    "challengeIndex": 2,
    "stage": 3,
    "stageTitle": "Character and Book",
    "levelTitle": "Prophets & Priests",
    "questionType": "Identify the Book from an Unfamiliar Character",
    "isTyped": false,
    "questionText": "Which book highlights the godly High Priest Jehoiada, who hid baby prince Joash in the temple for six years, organized a military coup against the usurping queen Athaliah, and restored pure covenant worship in Judah?",
    "clues": [
      "Athaliah tore her clothes and cried: \"Treason! Treason!\" before being executed at the horse gate.",
      "Jehoiada died at the ripe age of 130 and was buried among the kings in the city of David.",
      "Narrates the temple repairs under Joash."
    ],
    "options": [
      "2 Kings",
      "1 Kings",
      "1 Chronicles",
      "Ezra"
    ],
    "correctAnswer": "2 Kings",
    "acceptedAlternatives": [
      "Second Kings",
      "2Kgs",
      "2 Chronicles"
    ],
    "reference": "2 Kings 11:4–21; 2 Chronicles 23:1–24:16",
    "explanation": "2 Kings 11 describes Jehoiada the priest guarding young Joash and executing Athaliah.",
    "hint": "Second Kings, chapter 11.",
    "testament": "Old Testament",
    "difficulty": "medium",
    "timerSeconds": 30
  },
  {
    "level": 14,
    "challengeIndex": 3,
    "stage": 3,
    "stageTitle": "Character and Book",
    "levelTitle": "Prophets & Priests",
    "questionType": "Type the Book",
    "isTyped": true,
    "questionText": "TYPE THE BIBLE BOOK:\nIn which book does Baruch the son of Neriah serve as the faithful scribe who wrote down from the prophet's dictation all the words of the Lord upon a scroll, which was subsequently read in the temple and burned by King Jehoiakim with a penknife?",
    "clues": [
      "God commanded the prophet and Baruch to take another scroll and rewrite all the original words with many additions.",
      "Chapter 45 contains a personal message from God to Baruch: \"Do you seek great things for yourself? Seek them not... but I will give you your life as a prize of war.\"",
      "Major prophetic book of 52 chapters."
    ],
    "options": [
      "Jeremiah",
      "Ezekiel",
      "Isaiah",
      "Lamentations"
    ],
    "correctAnswer": "Jeremiah",
    "acceptedAlternatives": [
      "Jer"
    ],
    "reference": "Jeremiah 36:4–32; 45:1–5",
    "explanation": "Jeremiah 36 recounts Baruch writing and reading the prophetic scroll.",
    "hint": "Book bearing the name of the weeping prophet Jeremiah.",
    "testament": "Old Testament",
    "difficulty": "hard",
    "timerSeconds": 25
  },
  {
    "level": 14,
    "challengeIndex": 4,
    "stage": 3,
    "stageTitle": "Character and Book",
    "levelTitle": "Prophets & Priests",
    "questionType": "Identify the Book from an Unfamiliar Character",
    "isTyped": false,
    "questionText": "Which New Testament book features the Judean prophet Agabus, who first foretold a severe worldwide famine during the reign of Claudius, and later bound his own hands and feet with Paul's belt at Caesarea, prophesying Paul's arrest in Jerusalem?",
    "clues": [
      "Spoke by the Holy Spirit to the church in Syrian Antioch and in Caesarea.",
      "The disciples sent relief to the brothers living in Judea in response to his first prophecy.",
      "Historical book detailing the early church."
    ],
    "options": [
      "Acts",
      "Romans",
      "Galatians",
      "Hebrews"
    ],
    "correctAnswer": "Acts",
    "acceptedAlternatives": [
      "Acts of the Apostles",
      "Act"
    ],
    "reference": "Acts 11:27–30; 21:10–11",
    "explanation": "Acts 11 and 21 mention the prophet Agabus and his two vivid prophecies.",
    "hint": "Fifth book of the New Testament.",
    "testament": "New Testament",
    "difficulty": "medium",
    "timerSeconds": 30
  },
  {
    "level": 14,
    "challengeIndex": 5,
    "stage": 3,
    "stageTitle": "Character and Book",
    "levelTitle": "Prophets & Priests",
    "questionType": "Type the Book",
    "isTyped": true,
    "questionText": "TYPE THE BIBLE BOOK:\nIn which New Testament epistle does the author devote chapters 5, 6, and 7 to proving that Jesus Christ is our eternal High Priest after the superior order of Melchizedek, rather than the temporary Levitical priesthood of Aaron?",
    "clues": [
      "Points out that Melchizedek was king of Salem and priest of God Most High, receiving tithes from Abraham.",
      "Notes that Jesus has an indestructible life and ministers in the true heavenly sanctuary.",
      "Opens: \"Long ago, at many times and in many ways, God spoke to our fathers by the prophets, but in these last days he has spoken to us by his Son.\""
    ],
    "options": [
      "Hebrews",
      "Romans",
      "Galatians",
      "Ephesians"
    ],
    "correctAnswer": "Hebrews",
    "acceptedAlternatives": [
      "Heb"
    ],
    "reference": "Hebrews 1:1–2; 5:6; 7:1–28",
    "explanation": "Hebrews 7 expounds the superior, eternal priesthood of Jesus after the order of Melchizedek.",
    "hint": "Epistle written to Jewish Christians; seven letters; begins with Heb-.",
    "testament": "New Testament",
    "difficulty": "hard",
    "timerSeconds": 25
  },
  {
    "level": 15,
    "challengeIndex": 1,
    "stage": 3,
    "stageTitle": "Character and Book",
    "levelTitle": "Character Master Boss",
    "questionType": "The Book Detective",
    "isTyped": false,
    "questionText": "THE BOOK DETECTIVE:\nI mention two female workers named Tryphaena and Tryphosa, as well as a beloved sister named Persis, describing them as faithful women who \"worked hard in the Lord.\" I also mention Gaius, who was host to the entire church, and Erastus, the city treasurer. Which book am I?",
    "clues": [
      "All these individuals are greeted in the famous closing chapter.",
      "Written by Paul from Corinth.",
      "Contains 16 chapters."
    ],
    "options": [
      "Romans",
      "1 Corinthians",
      "Philippians",
      "Colossians"
    ],
    "correctAnswer": "Romans",
    "acceptedAlternatives": [
      "Rom"
    ],
    "reference": "Romans 16:12, 23",
    "explanation": "Romans 16:12–23 contains Paul's extensive personal greetings to coworkers in Rome.",
    "hint": "Paul's monumental letter to the church at Rome.",
    "testament": "New Testament",
    "difficulty": "hard",
    "timerSeconds": 25
  },
  {
    "level": 15,
    "challengeIndex": 2,
    "stage": 3,
    "stageTitle": "Character and Book",
    "levelTitle": "Character Master Boss",
    "questionType": "The Book Detective",
    "isTyped": false,
    "questionText": "THE BOOK DETECTIVE:\nI record the story of an intelligent and beautiful woman named Abigail, who quickly loaded two hundred loaves of bread, two skins of wine, five sheep, and cakes of raisins onto donkeys to intercept David's armed men after her foolish husband Nabal insulted them. In which book is this recorded?",
    "clues": [
      "She bowed with her face to the ground, pleading: \"Let not my lord regard this worthless fellow, Nabal, for as his name is, so is he; Nabal is his name, and folly is with him.\"",
      "Ten days later, the Lord struck Nabal and he died, whereupon David took Abigail as his wife.",
      "Found in chapter 25 of this book."
    ],
    "options": [
      "1 Samuel",
      "2 Samuel",
      "1 Kings",
      "Judges"
    ],
    "correctAnswer": "1 Samuel",
    "acceptedAlternatives": [
      "First Samuel",
      "1Sam"
    ],
    "reference": "1 Samuel 25:1–42",
    "explanation": "1 Samuel 25 details Abigail's wise diplomacy averting bloodshed from David and his men.",
    "hint": "First Samuel chapter 25.",
    "testament": "Old Testament",
    "difficulty": "medium",
    "timerSeconds": 25
  },
  {
    "level": 15,
    "challengeIndex": 3,
    "stage": 3,
    "stageTitle": "Character and Book",
    "levelTitle": "Character Master Boss",
    "questionType": "Type the Book",
    "isTyped": true,
    "questionText": "TYPE THE BIBLE BOOK:\nWhich book mentions a runaway slave named Onesimus, whom Paul calls \"my child, whom I fathered in my imprisonment,\" urging his master to welcome him back no longer as a bondservant, but as a beloved brother?",
    "clues": [
      "A single-chapter personal letter of 25 verses.",
      "Paul promises: \"If he has wronged you at all, or owes you anything, charge that to my account.\"",
      "Named after the Christian slave-owner residing in Colossae."
    ],
    "options": [
      "Philemon",
      "Colossians",
      "Titus",
      "Philippians"
    ],
    "correctAnswer": "Philemon",
    "acceptedAlternatives": [
      "Phlm",
      "Phm"
    ],
    "reference": "Philemon 1:10–18",
    "explanation": "The Epistle to Philemon is Paul's intercession for the runaway slave Onesimus.",
    "hint": "Single-chapter letter named after Philemon.",
    "testament": "New Testament",
    "difficulty": "hard",
    "timerSeconds": 25
  },
  {
    "level": 15,
    "challengeIndex": 4,
    "stage": 3,
    "stageTitle": "Character and Book",
    "levelTitle": "Character Master Boss",
    "questionType": "The Book Detective",
    "isTyped": false,
    "questionText": "THE BOOK DETECTIVE:\nI contain the story of a royal cupbearer to King Artaxerxes in the Persian winter capital of Susa. When informed of the broken walls and burned gates of Jerusalem, he wept, fasted, prayed, and obtained royal letters and timber to rebuild the city walls in fifty-two days despite violent opposition from Sanballat, Tobiah, and Geshem. Which book am I?",
    "clues": [
      "Written in the first person: \"In the month of Nisan, in the twentieth year of King Artaxerxes...\"",
      "The workers built the wall with a trowel in one hand and a weapon in the other.",
      "Carried out a public reading of the Law alongside Ezra the scribe."
    ],
    "options": [
      "Nehemiah",
      "Ezra",
      "Esther",
      "Haggai"
    ],
    "correctAnswer": "Nehemiah",
    "acceptedAlternatives": [
      "Neh"
    ],
    "reference": "Nehemiah 1:1–11; 4:16–18; 6:15; 8:1–8",
    "explanation": "The Book of Nehemiah records Nehemiah's memoirs as governor rebuilding Jerusalem's fortifications in 52 days.",
    "hint": "Named after the cupbearer governor who rebuilt the walls.",
    "testament": "Old Testament",
    "difficulty": "medium",
    "timerSeconds": 25
  },
  {
    "level": 15,
    "challengeIndex": 5,
    "stage": 3,
    "stageTitle": "Character and Book",
    "levelTitle": "Character Master Boss",
    "questionType": "Type the Book",
    "isTyped": true,
    "questionText": "TYPE THE BIBLE BOOK:\nIn which book does young Timothy's sincere Christian heritage receive tribute through the faith of two godly family matriarchs: his grandmother Lois and his mother Eunice?",
    "clues": [
      "Paul reminds Timothy that from childhood he has been acquainted with the sacred writings.",
      "Contains the declaration: \"All Scripture is breathed out by God and profitable for teaching, for reproof, for correction, and for training in righteousness.\"",
      "Paul's final epistle."
    ],
    "options": [
      "2 Timothy",
      "1 Timothy",
      "Titus",
      "Philippians"
    ],
    "correctAnswer": "2 Timothy",
    "acceptedAlternatives": [
      "Second Timothy",
      "2Tim"
    ],
    "reference": "2 Timothy 1:5; 3:14–16",
    "explanation": "2 Timothy 1:5 commends the unfeigned faith of Lois and Eunice who nurtured Timothy in the Scriptures.",
    "hint": "Paul's second letter to Timothy.",
    "testament": "New Testament",
    "difficulty": "master",
    "timerSeconds": 20
  }
];
