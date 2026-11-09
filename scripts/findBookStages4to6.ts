// Find the Bible Book — Stages 4–6 (Levels 16–30, 75 Questions)
// Verified challenging Bible book identification covering canon sequencing, scripture detection, and inter-book links.

import type { RawFindBookQuestion } from './findBookStages1to3';

export const FIND_BOOK_STAGES_4_TO_6: RawFindBookQuestion[] = [
  {
    "level": 16,
    "challengeIndex": 1,
    "stage": 4,
    "stageTitle": "Missing Book Challenge",
    "levelTitle": "Pentateuch & History Order",
    "questionType": "The Missing Book",
    "isTyped": false,
    "questionText": "MISSING BOOK SEQUENCE:\nIdentify the missing book in this canonical sequence of the Pentateuch:\nGenesis → Exodus → Leviticus → [ ? ] → Deuteronomy",
    "clues": [
      "Contains two national censuses of the tribes of Israel.",
      "Documents forty years of wilderness wandering from Sinai to the plains of Moab.",
      "Hebrew title is Bemidbar (\"In the wilderness\")."
    ],
    "options": [
      "Numbers",
      "Joshua",
      "Judges",
      "Deuteronomy"
    ],
    "correctAnswer": "Numbers",
    "acceptedAlternatives": [
      "Num"
    ],
    "reference": "Numbers 1:1–3; 26:1–4",
    "explanation": "Numbers is the fourth book of the Pentateuch, situated between Leviticus and Deuteronomy.",
    "hint": "Fourth book of the Bible.",
    "testament": "Old Testament",
    "difficulty": "easy",
    "timerSeconds": 30
  },
  {
    "level": 16,
    "challengeIndex": 2,
    "stage": 4,
    "stageTitle": "Missing Book Challenge",
    "levelTitle": "Pentateuch & History Order",
    "questionType": "The Book Before and After",
    "isTyped": false,
    "questionText": "Which Old Testament historical book comes IMMEDIATELY AFTER 2 Chronicles in the standard Protestant canon?",
    "clues": [
      "Opens with the exact same decree of King Cyrus of Persia that closes 2 Chronicles.",
      "Documents the return of exiles under Zerubbabel and the rebuilding of the temple altar.",
      "Precedes Nehemiah."
    ],
    "options": [
      "Ezra",
      "Nehemiah",
      "Esther",
      "Job"
    ],
    "correctAnswer": "Ezra",
    "acceptedAlternatives": [
      "Ezr"
    ],
    "reference": "2 Chronicles 36:22–23; Ezra 1:1–3",
    "explanation": "Ezra immediately follows 2 Chronicles, continuing the history of the restoration of Jerusalem.",
    "hint": "Four-letter book named after the priest-scribe.",
    "testament": "Old Testament",
    "difficulty": "easy",
    "timerSeconds": 30
  },
  {
    "level": 16,
    "challengeIndex": 3,
    "stage": 4,
    "stageTitle": "Missing Book Challenge",
    "levelTitle": "Pentateuch & History Order",
    "questionType": "Type the Book",
    "isTyped": true,
    "questionText": "TYPE THE BIBLE BOOK:\nWhich book comes IMMEDIATELY BEFORE the Book of Ruth in the canonical order of Old Testament history?",
    "clues": [
      "Ruth opens with the words: \"In the days when the... ruled, there was a famine in the land.\"",
      "Contains the stories of Gideon, Samson, and Jephthah.",
      "Precedes the story of Boaz and Ruth in Bethlehem."
    ],
    "options": [
      "Judges",
      "Joshua",
      "1 Samuel",
      "Deuteronomy"
    ],
    "correctAnswer": "Judges",
    "acceptedAlternatives": [
      "Judg"
    ],
    "reference": "Ruth 1:1; Judges 21:25",
    "explanation": "Judges immediately precedes Ruth in the historical section of the Old Testament canon.",
    "hint": "Plural title referring to Israel's charismatic deliverers.",
    "testament": "Old Testament",
    "difficulty": "medium",
    "timerSeconds": 30
  },
  {
    "level": 16,
    "challengeIndex": 4,
    "stage": 4,
    "stageTitle": "Missing Book Challenge",
    "levelTitle": "Pentateuch & History Order",
    "questionType": "The Missing Book",
    "isTyped": false,
    "questionText": "MISSING BOOK SEQUENCE:\nIdentify the missing book in this post-exilic historical sequence:\nEzra → Nehemiah → [ ? ] → Job",
    "clues": [
      "Set in the Persian citadel of Susa during the reign of Ahasuerus (Xerxes).",
      "The final historical narrative book of the Old Testament before the Poetic books begin.",
      "Origin of the Jewish festival of Purim."
    ],
    "options": [
      "Esther",
      "Ruth",
      "Daniel",
      "Malachi"
    ],
    "correctAnswer": "Esther",
    "acceptedAlternatives": [
      "Esth"
    ],
    "reference": "Esther 1:1–2; 9:26–28",
    "explanation": "Esther is the 17th book of the Old Testament, concluding the historical books right before Job.",
    "hint": "Named after the Jewish orphan who became Queen of Persia.",
    "testament": "Old Testament",
    "difficulty": "medium",
    "timerSeconds": 30
  },
  {
    "level": 16,
    "challengeIndex": 5,
    "stage": 4,
    "stageTitle": "Missing Book Challenge",
    "levelTitle": "Pentateuch & History Order",
    "questionType": "Type the Book",
    "isTyped": true,
    "questionText": "TYPE THE BIBLE BOOK:\nWhich book stands between 2 Kings and 2 Chronicles in the canonical arrangement of the Old Testament?",
    "clues": [
      "Opens with extensive nine-chapter genealogies tracing Israel's lineage from Adam to the post-exilic community.",
      "Devotes its entire narrative focus to the reign of King David and preparation for the temple.",
      "First volume of the two-part Chronicles history."
    ],
    "options": [
      "1 Chronicles",
      "2 Chronicles",
      "Ezra",
      "Nehemiah"
    ],
    "correctAnswer": "1 Chronicles",
    "acceptedAlternatives": [
      "First Chronicles",
      "1Chr"
    ],
    "reference": "1 Chronicles 1:1; 10:14; 29:26–30",
    "explanation": "1 Chronicles stands between 2 Kings and 2 Chronicles in canonical order.",
    "hint": "First Chronicles; begins with \"1\".",
    "testament": "Old Testament",
    "difficulty": "hard",
    "timerSeconds": 25
  },
  {
    "level": 17,
    "challengeIndex": 1,
    "stage": 4,
    "stageTitle": "Missing Book Challenge",
    "levelTitle": "Major & Minor Prophets Order",
    "questionType": "The Book Before and After",
    "isTyped": false,
    "questionText": "Which single-chapter Minor Prophet comes IMMEDIATELY BEFORE Jonah in the canonical arrangement of the Twelve Prophets?",
    "clues": [
      "Shortest book in the Old Testament (only 21 verses).",
      "Pronounces divine judgment upon the nation of Edom for gloating over Jerusalem's destruction: \"The pride of your heart has deceived you, you who dwell in the clefts of the rock.\"",
      "Precedes Jonah's journey to Nineveh."
    ],
    "options": [
      "Obadiah",
      "Amos",
      "Joel",
      "Micah"
    ],
    "correctAnswer": "Obadiah",
    "acceptedAlternatives": [
      "Obad"
    ],
    "reference": "Obadiah 1:1–3; Jonah 1:1",
    "explanation": "Obadiah is the fourth of the Minor Prophets, situated directly between Amos and Jonah.",
    "hint": "Single-chapter prophecy against Edom; starts with O.",
    "testament": "Old Testament",
    "difficulty": "medium",
    "timerSeconds": 30
  },
  {
    "level": 17,
    "challengeIndex": 2,
    "stage": 4,
    "stageTitle": "Missing Book Challenge",
    "levelTitle": "Major & Minor Prophets Order",
    "questionType": "The Book Before and After",
    "isTyped": false,
    "questionText": "Which two-chapter post-exilic prophetic book comes IMMEDIATELY AFTER Zephaniah, challenging the returnees: \"Is it a time for you yourselves to dwell in your paneled houses, while this house lies in ruins?\"",
    "clues": [
      "Rebukes the community for delaying the rebuilding of the temple in Jerusalem.",
      "Dated precisely to the second year of King Darius (520 BC).",
      "Directly precedes Zechariah."
    ],
    "options": [
      "Haggai",
      "Zechariah",
      "Malachi",
      "Habakkuk"
    ],
    "correctAnswer": "Haggai",
    "acceptedAlternatives": [
      "Hag"
    ],
    "reference": "Haggai 1:1–4; Zechariah 1:1",
    "explanation": "Haggai is the tenth of the Minor Prophets, positioned between Zephaniah and Zechariah.",
    "hint": "Two-chapter book; begins with H.",
    "testament": "Old Testament",
    "difficulty": "medium",
    "timerSeconds": 30
  },
  {
    "level": 17,
    "challengeIndex": 3,
    "stage": 4,
    "stageTitle": "Missing Book Challenge",
    "levelTitle": "Major & Minor Prophets Order",
    "questionType": "Type the Book",
    "isTyped": true,
    "questionText": "TYPE THE BIBLE BOOK:\nWhich book of the Minor Prophets stands IMMEDIATELY BETWEEN Joel and Obadiah in the Old Testament?",
    "clues": [
      "Written by a herdsman and dresser of sycamore figs from Tekoa in Judah.",
      "Contains eight oracles of judgment against foreign nations and Israel: \"For three transgressions... and for four, I will not turn away punishment.\"",
      "Famous for the demand: \"Let justice roll down like waters, and righteousness like an ever-flowing stream\" (Amos 5:24)."
    ],
    "options": [
      "Amos",
      "Hosea",
      "Jonah",
      "Micah"
    ],
    "correctAnswer": "Amos",
    "acceptedAlternatives": [
      "Am"
    ],
    "reference": "Amos 1:1; 5:24",
    "explanation": "Amos is the third of the Minor Prophets, standing between Joel and Obadiah.",
    "hint": "Four-letter book named after the prophet from Tekoa.",
    "testament": "Old Testament",
    "difficulty": "hard",
    "timerSeconds": 25
  },
  {
    "level": 17,
    "challengeIndex": 4,
    "stage": 4,
    "stageTitle": "Missing Book Challenge",
    "levelTitle": "Major & Minor Prophets Order",
    "questionType": "The Missing Book",
    "isTyped": false,
    "questionText": "MISSING BOOK SEQUENCE:\nIdentify the missing book in this sequence of the Major Prophets:\nIsaiah → Jeremiah → [ ? ] → Ezekiel → Daniel",
    "clues": [
      "A five-chapter poetic book of funeral dirges weeping over the fall of Jerusalem.",
      "Features the great hymn passage: \"Great is your faithfulness\" (ch 3).",
      "Placed between Jeremiah and Ezekiel."
    ],
    "options": [
      "Lamentations",
      "Hosea",
      "Song of Solomon",
      "Habakkuk"
    ],
    "correctAnswer": "Lamentations",
    "acceptedAlternatives": [
      "Lam"
    ],
    "reference": "Lamentations 1:1; 3:23",
    "explanation": "Lamentations sits between Jeremiah and Ezekiel in the Major Prophets section of the Christian Old Testament.",
    "hint": "Book of sorrowful laments attributed to Jeremiah.",
    "testament": "Old Testament",
    "difficulty": "medium",
    "timerSeconds": 30
  },
  {
    "level": 17,
    "challengeIndex": 5,
    "stage": 4,
    "stageTitle": "Missing Book Challenge",
    "levelTitle": "Major & Minor Prophets Order",
    "questionType": "Type the Book",
    "isTyped": true,
    "questionText": "TYPE THE BIBLE BOOK:\nWhich book stands between Micah and Habakkuk in the Minor Prophets, delivering a ferocious three-chapter oracle of doom against the bloody city of Nineveh?",
    "clues": [
      "Opens: \"The Lord is a jealous and avenging God... He makes an end of Nineveh.\"",
      "Describes chariot wheels flashing like torches and charging like lightning through the streets.",
      "Contrasts with Jonah, who saw Nineveh repent a century earlier."
    ],
    "options": [
      "Nahum",
      "Habakkuk",
      "Zephaniah",
      "Obadiah"
    ],
    "correctAnswer": "Nahum",
    "acceptedAlternatives": [
      "Nah"
    ],
    "reference": "Nahum 1:1–3; 3:1–7",
    "explanation": "Nahum is the seventh of the Minor Prophets, located directly between Micah and Habakkuk.",
    "hint": "Five-letter book name beginning with N.",
    "testament": "Old Testament",
    "difficulty": "master",
    "timerSeconds": 20
  },
  {
    "level": 18,
    "challengeIndex": 1,
    "stage": 4,
    "stageTitle": "Missing Book Challenge",
    "levelTitle": "Pauline Epistles Order",
    "questionType": "The Book Before and After",
    "isTyped": false,
    "questionText": "Which epistle comes IMMEDIATELY AFTER 2 Thessalonians in the canonical arrangement of Paul's letters?",
    "clues": [
      "Marks the transition from letters written to churches to Pastoral Epistles written to individual coworkers.",
      "Contains qualifications for overseers (elders) and deacons in chapter 3.",
      "First letter to Paul's young delegate in Ephesus."
    ],
    "options": [
      "1 Timothy",
      "2 Timothy",
      "Titus",
      "Galatians"
    ],
    "correctAnswer": "1 Timothy",
    "acceptedAlternatives": [
      "First Timothy",
      "1Tim"
    ],
    "reference": "2 Thessalonians 3:18; 1 Timothy 1:1–2",
    "explanation": "1 Timothy immediately follows 2 Thessalonians, inaugurating the Pastoral Epistles.",
    "hint": "First letter to Timothy; begins with 1.",
    "testament": "New Testament",
    "difficulty": "easy",
    "timerSeconds": 30
  },
  {
    "level": 18,
    "challengeIndex": 2,
    "stage": 4,
    "stageTitle": "Missing Book Challenge",
    "levelTitle": "Pauline Epistles Order",
    "questionType": "The Book Before and After",
    "isTyped": false,
    "questionText": "Which short three-chapter Pastoral Epistle comes IMMEDIATELY BEFORE Philemon, addressing a coworker left behind on the island of Crete to appoint elders in every town?",
    "clues": [
      "Warns: \"One of the Cretans, a prophet of their own, said, 'Cretans are always liars, evil beasts, lazy gluttons.'\"",
      "Contains the declaration: \"For the grace of God has appeared, bringing salvation for all people\" (ch 2:11).",
      "Precedes Paul's single-chapter letter concerning Onesimus."
    ],
    "options": [
      "Titus",
      "2 Timothy",
      "Colossians",
      "Hebrews"
    ],
    "correctAnswer": "Titus",
    "acceptedAlternatives": [
      "Tit"
    ],
    "reference": "Titus 1:5, 12; 2:11; Philemon 1:1",
    "explanation": "Titus immediately precedes Philemon in the canonical sequence of Paul's epistles.",
    "hint": "Five-letter name of Paul's coworker on Crete; starts with T.",
    "testament": "New Testament",
    "difficulty": "medium",
    "timerSeconds": 30
  },
  {
    "level": 18,
    "challengeIndex": 3,
    "stage": 4,
    "stageTitle": "Missing Book Challenge",
    "levelTitle": "Pauline Epistles Order",
    "questionType": "Type the Book",
    "isTyped": true,
    "questionText": "TYPE THE BIBLE BOOK:\nWhich prison epistle stands IMMEDIATELY BETWEEN Galatians and Philippians in the New Testament canon?",
    "clues": [
      "Six chapters addressing the mystery of the Church as the Body of Christ.",
      "Contains famous prayers in chapters 1 and 3, and the Armor of God in chapter 6.",
      "Written to the major church where Paul ministered for three years in Asia Minor."
    ],
    "options": [
      "Ephesians",
      "Colossians",
      "Philippians",
      "Romans"
    ],
    "correctAnswer": "Ephesians",
    "acceptedAlternatives": [
      "Eph"
    ],
    "reference": "Ephesians 1:1; 6:10–18",
    "explanation": "Ephesians stands between Galatians and Philippians in the traditional canon order.",
    "hint": "Addressed to the church at Ephesus; begins with Eph-.",
    "testament": "New Testament",
    "difficulty": "medium",
    "timerSeconds": 30
  },
  {
    "level": 18,
    "challengeIndex": 4,
    "stage": 4,
    "stageTitle": "Missing Book Challenge",
    "levelTitle": "Pauline Epistles Order",
    "questionType": "The Missing Book",
    "isTyped": false,
    "questionText": "MISSING BOOK SEQUENCE:\nIdentify the missing epistle in this sequence of Paul's prison and missionary letters:\nEphesians → Philippians → [ ? ] → 1 Thessalonians",
    "clues": [
      "Four chapters exalting Christ: \"He is the image of the invisible God, the firstborn of all creation.\"",
      "Written to a city in the Lycus Valley near Hierapolis and Laodicea.",
      "Carried by Tychicus alongside Onesimus."
    ],
    "options": [
      "Colossians",
      "Galatians",
      "2 Thessalonians",
      "Philemon"
    ],
    "correctAnswer": "Colossians",
    "acceptedAlternatives": [
      "Col"
    ],
    "reference": "Colossians 1:1, 15; 4:7–9",
    "explanation": "Colossians stands between Philippians and 1 Thessalonians.",
    "hint": "Addressed to the Colossians; starts with Col-.",
    "testament": "New Testament",
    "difficulty": "medium",
    "timerSeconds": 30
  },
  {
    "level": 18,
    "challengeIndex": 5,
    "stage": 4,
    "stageTitle": "Missing Book Challenge",
    "levelTitle": "Pauline Epistles Order",
    "questionType": "Type the Book",
    "isTyped": true,
    "questionText": "TYPE THE BIBLE BOOK:\nWhich book stands between 1 Thessalonians and 1 Timothy, warning about the \"man of lawlessness\" and commanding: \"If anyone is not willing to work, let him not eat\"?",
    "clues": [
      "Three chapters addressing misunderstandings regarding the Day of the Lord.",
      "Paul assures believers that Christ's coming will not happen until the rebellion comes first.",
      "Second letter to this Macedonian congregation."
    ],
    "options": [
      "2 Thessalonians",
      "1 Thessalonians",
      "1 Timothy",
      "Titus"
    ],
    "correctAnswer": "2 Thessalonians",
    "acceptedAlternatives": [
      "Second Thessalonians",
      "2Thess"
    ],
    "reference": "2 Thessalonians 2:1–4; 3:10",
    "explanation": "2 Thessalonians stands between 1 Thessalonians and 1 Timothy in canonical arrangement.",
    "hint": "Second letter to the Thessalonians; begins with 2.",
    "testament": "New Testament",
    "difficulty": "hard",
    "timerSeconds": 25
  },
  {
    "level": 19,
    "challengeIndex": 1,
    "stage": 4,
    "stageTitle": "Missing Book Challenge",
    "levelTitle": "General Epistles Order",
    "questionType": "The Book Before and After",
    "isTyped": false,
    "questionText": "Which epistle comes IMMEDIATELY AFTER the Epistle to the Hebrews in the canonical arrangement of the New Testament?",
    "clues": [
      "Addressed to \"the twelve tribes in the Dispersion\".",
      "Practical wisdom epistle emphasizing that \"faith without works is dead.\"",
      "Contains teachings on the taming of the tongue, trials, and prayer for the sick."
    ],
    "options": [
      "James",
      "1 Peter",
      "1 John",
      "Jude"
    ],
    "correctAnswer": "James",
    "acceptedAlternatives": [
      "Jas"
    ],
    "reference": "Hebrews 13:25; James 1:1; 2:17",
    "explanation": "James immediately follows Hebrews, opening the collection of General (Catholic) Epistles.",
    "hint": "Five-letter name of the Lord's brother; starts with J.",
    "testament": "New Testament",
    "difficulty": "easy",
    "timerSeconds": 30
  },
  {
    "level": 19,
    "challengeIndex": 2,
    "stage": 4,
    "stageTitle": "Missing Book Challenge",
    "levelTitle": "General Epistles Order",
    "questionType": "The Book Before and After",
    "isTyped": false,
    "questionText": "Which single-chapter General Epistle comes IMMEDIATELY BEFORE Revelation, urging believers to \"contend for the faith that was once for all delivered to the saints\"?",
    "clues": [
      "Written by a brother of James and half-brother of the Lord.",
      "Quotes the ancient prophecy of Enoch: \"Behold, the Lord comes with ten thousands of his holy ones.\"",
      "Concludes with the famous doxology: \"Now to him who is able to keep you from stumbling...\""
    ],
    "options": [
      "Jude",
      "3 John",
      "2 Peter",
      "James"
    ],
    "correctAnswer": "Jude",
    "acceptedAlternatives": [
      "Jud"
    ],
    "reference": "Jude 1:1, 3, 14, 24; Revelation 1:1",
    "explanation": "Jude is the 65th book of the Bible, situated directly before Revelation.",
    "hint": "Four-letter book name; starts with J.",
    "testament": "New Testament",
    "difficulty": "easy",
    "timerSeconds": 30
  },
  {
    "level": 19,
    "challengeIndex": 3,
    "stage": 4,
    "stageTitle": "Missing Book Challenge",
    "levelTitle": "General Epistles Order",
    "questionType": "Type the Book",
    "isTyped": true,
    "questionText": "TYPE THE BIBLE BOOK:\nWhich book stands IMMEDIATELY BETWEEN 2 Peter and 2 John in the New Testament canon?",
    "clues": [
      "Five chapters emphasizing tests of genuine fellowship: walking in the light, loving the brethren, and confessing Jesus in the flesh.",
      "Declares: \"God is light, and in him is no darkness at all... God is love.\"",
      "Written by the Apostle John that \"you who believe in the name of the Son of God may know that you have eternal life.\""
    ],
    "options": [
      "1 John",
      "2 John",
      "3 John",
      "Jude"
    ],
    "correctAnswer": "1 John",
    "acceptedAlternatives": [
      "First John",
      "1Jn"
    ],
    "reference": "1 John 1:5; 4:8; 5:13",
    "explanation": "1 John stands directly between 2 Peter and 2 John.",
    "hint": "First Epistle of John; begins with 1.",
    "testament": "New Testament",
    "difficulty": "medium",
    "timerSeconds": 30
  },
  {
    "level": 19,
    "challengeIndex": 4,
    "stage": 4,
    "stageTitle": "Missing Book Challenge",
    "levelTitle": "General Epistles Order",
    "questionType": "The Missing Book",
    "isTyped": false,
    "questionText": "MISSING BOOK SEQUENCE:\nIdentify the missing epistle in this sequence of the General Epistles:\nJames → 1 Peter → [ ? ] → 1 John",
    "clues": [
      "Three chapters warning against corrupt false teachers who scoff at Christ's second coming.",
      "Notes that \"with the Lord one day is as a thousand years, and a thousand years as one day.\"",
      "Peter's final letter anticipating his own impending martyrdom."
    ],
    "options": [
      "2 Peter",
      "2 John",
      "Jude",
      "Hebrews"
    ],
    "correctAnswer": "2 Peter",
    "acceptedAlternatives": [
      "Second Peter",
      "2Pet"
    ],
    "reference": "2 Peter 1:1, 14; 3:8",
    "explanation": "2 Peter stands between 1 Peter and 1 John in the canon.",
    "hint": "Second letter of Peter; begins with 2.",
    "testament": "New Testament",
    "difficulty": "medium",
    "timerSeconds": 30
  },
  {
    "level": 19,
    "challengeIndex": 5,
    "stage": 4,
    "stageTitle": "Missing Book Challenge",
    "levelTitle": "General Epistles Order",
    "questionType": "Type the Book",
    "isTyped": true,
    "questionText": "TYPE THE BIBLE BOOK:\nWhich 14-verse epistle comes IMMEDIATELY AFTER 2 John, addressed to \"the beloved Gaius, whom I love in truth\", commending Demetrius while rebuking Diotrephes \"who likes to put himself first\"?",
    "clues": [
      "The shortest book in the New Testament by Greek word count.",
      "John states: \"I have no greater joy than to hear that my children are walking in the truth.\"",
      "Directly precedes the Epistle of Jude."
    ],
    "options": [
      "3 John",
      "2 John",
      "Jude",
      "Philemon"
    ],
    "correctAnswer": "3 John",
    "acceptedAlternatives": [
      "Third John",
      "3Jn"
    ],
    "reference": "3 John 1:1, 4, 9, 12",
    "explanation": "3 John stands between 2 John and Jude in the New Testament canon.",
    "hint": "Third letter of John; begins with 3.",
    "testament": "New Testament",
    "difficulty": "hard",
    "timerSeconds": 25
  },
  {
    "level": 20,
    "challengeIndex": 1,
    "stage": 4,
    "stageTitle": "Missing Book Challenge",
    "levelTitle": "Missing Book Boss",
    "questionType": "The Missing Book",
    "isTyped": false,
    "questionText": "MISSING BOOK BOSS:\nIdentify the missing Old Testament prophetic book in this canonical sequence:\nNahum → Habakkuk → [ ? ] → Haggai → Zechariah",
    "clues": [
      "Three chapters focusing intensely on the approaching \"great Day of the Lord.\"",
      "Traces his royal pedigree back four generations to King Hezekiah.",
      "Contains the promise: \"The Lord your God is in your midst, a mighty one who will save; he will rejoice over you with gladness; he will quiet you by his love; he will exult over you with loud singing.\""
    ],
    "options": [
      "Zephaniah",
      "Obadiah",
      "Malachi",
      "Micah"
    ],
    "correctAnswer": "Zephaniah",
    "acceptedAlternatives": [
      "Zeph"
    ],
    "reference": "Zephaniah 1:1, 14; 3:17",
    "explanation": "Zephaniah is the ninth of the Minor Prophets, situated directly between Habakkuk and Haggai.",
    "hint": "Nine-letter name starting with Z; precedes Haggai.",
    "testament": "Old Testament",
    "difficulty": "hard",
    "timerSeconds": 25
  },
  {
    "level": 20,
    "challengeIndex": 2,
    "stage": 4,
    "stageTitle": "Missing Book Challenge",
    "levelTitle": "Missing Book Boss",
    "questionType": "The Book Before and After",
    "isTyped": false,
    "questionText": "MISSING BOOK BOSS:\nWhich book stands IMMEDIATELY BEFORE the Gospel of Matthew in the Christian Bible, concluding the Old Testament with the prophecy that God will send Elijah the prophet before the great and dreadful day of the Lord?",
    "clues": [
      "Four chapters using a disputation format where priests and people ask: \"How have we despised your name?\"",
      "Contains the famous command: \"Bring the full tithe into the storehouse, that there may be food in my house.\"",
      "The 39th and final book of the Old Testament."
    ],
    "options": [
      "Malachi",
      "Zechariah",
      "Haggai",
      "Nehemiah"
    ],
    "correctAnswer": "Malachi",
    "acceptedAlternatives": [
      "Mal"
    ],
    "reference": "Malachi 3:10; 4:5–6; Matthew 1:1",
    "explanation": "Malachi is the final book of the Old Testament, standing directly before Matthew.",
    "hint": "Final book of the Old Testament; starts with M.",
    "testament": "Old Testament",
    "difficulty": "medium",
    "timerSeconds": 25
  },
  {
    "level": 20,
    "challengeIndex": 3,
    "stage": 4,
    "stageTitle": "Missing Book Challenge",
    "levelTitle": "Missing Book Boss",
    "questionType": "Type the Book",
    "isTyped": true,
    "questionText": "TYPE THE BIBLE BOOK:\nIn the traditional Hebrew Tanakh arrangement (Torah, Nevi'im, Ketuvim), what is the very LAST book that concludes the entire Hebrew Bible, ending with King Cyrus' decree: \"Whoever is among you of all his people... let him go up\"?",
    "clues": [
      "In the Christian canon it is placed in the historical section.",
      "Covers the spiritual history of Judah from the creation of Adam to the decree of Cyrus.",
      "Second part of the Chronicles."
    ],
    "options": [
      "2 Chronicles",
      "1 Chronicles",
      "Malachi",
      "Ezra"
    ],
    "correctAnswer": "2 Chronicles",
    "acceptedAlternatives": [
      "Second Chronicles",
      "2Chr"
    ],
    "reference": "2 Chronicles 36:22–23; Luke 11:51",
    "explanation": "In the Jewish Tanakh, 2 Chronicles (Divrei Hayamim) is the final book of Ketuvim (Writings), concluding the Hebrew Bible.",
    "hint": "Second Chronicles; last book of the Hebrew Tanakh.",
    "testament": "Old Testament",
    "difficulty": "master",
    "timerSeconds": 20
  },
  {
    "level": 20,
    "challengeIndex": 4,
    "stage": 4,
    "stageTitle": "Missing Book Challenge",
    "levelTitle": "Missing Book Boss",
    "questionType": "The Missing Book",
    "isTyped": false,
    "questionText": "MISSING BOOK BOSS:\nWhich of the following books is NOT part of the Major Prophets in the Christian Old Testament canon?",
    "clues": [
      "The Major Prophets include Isaiah, Jeremiah, Lamentations, Ezekiel, and Daniel.",
      "This excluded book is the first of the Twelve Minor Prophets.",
      "Written by the prophet commanded to marry Gomer."
    ],
    "options": [
      "Hosea",
      "Daniel",
      "Lamentations",
      "Ezekiel"
    ],
    "correctAnswer": "Hosea",
    "acceptedAlternatives": [
      "Hos"
    ],
    "reference": "Hosea 1:1–2",
    "explanation": "Hosea is the first of the 12 Minor Prophets, not one of the Major Prophets.",
    "hint": "Prophet whose unfaithful wife was Gomer; first of the Minor Prophets.",
    "testament": "Old Testament",
    "difficulty": "medium",
    "timerSeconds": 25
  },
  {
    "level": 20,
    "challengeIndex": 5,
    "stage": 4,
    "stageTitle": "Missing Book Challenge",
    "levelTitle": "Missing Book Boss",
    "questionType": "Type the Book",
    "isTyped": true,
    "questionText": "TYPE THE BIBLE BOOK:\nWhich book stands precisely 27th in the order of the 66 canonical books of the Bible, serving as the middle book of the Major Prophets?",
    "clues": [
      "Total books in Protestant Bible: 66 (39 OT + 27 NT).",
      "The 27th book of the Old Testament.",
      "Written by the prophet who wept over Jerusalem's ruins."
    ],
    "options": [
      "Daniel",
      "Ezekiel",
      "Lamentations",
      "Jeremiah"
    ],
    "correctAnswer": "Daniel",
    "acceptedAlternatives": [
      "Dan"
    ],
    "reference": "Daniel 1:1; Daniel 12:13",
    "explanation": "Counting from Genesis (1) through the OT: Gen (1) to 2 Chron (14), Ezra to Song (15–22), Isaiah (23), Jeremiah (24), Lamentations (25), Ezekiel (26), Daniel (27). Daniel is the 27th book of the Bible.",
    "hint": "Book containing Nebuchadnezzar's dream and the lion's den; 27th book.",
    "testament": "Old Testament",
    "difficulty": "master",
    "timerSeconds": 20
  },
  {
    "level": 21,
    "challengeIndex": 1,
    "stage": 5,
    "stageTitle": "Scripture Detective",
    "levelTitle": "Famous Words from Unlikely Books",
    "questionType": "Find the Book from a Scripture Clue",
    "isTyped": false,
    "questionText": "Which Old Testament book contains the immortal theological statement that ignited the Protestant Reformation: \"Behold, his soul is puffed up; it is not upright within him, but the righteous shall live by his faith\"?",
    "clues": [
      "The prophet stood upon his watchtower questioning God about using the wicked Chaldeans (Babylonians) to punish Judah.",
      "Quoted directly in Romans 1:17, Galatians 3:11, and Hebrews 10:38.",
      "Three-chapter Minor Prophet."
    ],
    "options": [
      "Habakkuk",
      "Zephaniah",
      "Micah",
      "Nahum"
    ],
    "correctAnswer": "Habakkuk",
    "acceptedAlternatives": [
      "Hab"
    ],
    "reference": "Habakkuk 2:4; Romans 1:17; Galatians 3:11; Hebrews 10:38",
    "explanation": "Habakkuk 2:4 is the seminal verse: \"The righteous shall live by his faith\", cited three times in the New Testament.",
    "hint": "Eight-letter Minor Prophet beginning with Hab-.",
    "testament": "Old Testament",
    "difficulty": "medium",
    "timerSeconds": 30
  },
  {
    "level": 21,
    "challengeIndex": 2,
    "stage": 5,
    "stageTitle": "Scripture Detective",
    "levelTitle": "Famous Words from Unlikely Books",
    "questionType": "Find the Book from a Scripture Clue",
    "isTyped": false,
    "questionText": "In which book does Samuel rebuke King Saul after Saul spared King Agag and the best of the Amalekite livestock: \"Has the Lord as great delight in burnt offerings and sacrifices, as in obeying the voice of the Lord? Behold, to obey is better than sacrifice, and to listen than the fat of rams\"?",
    "clues": [
      "Saul made excuses that the people spared the animals to sacrifice to God in Gilgal.",
      "Samuel announced that the Lord had rejected Saul from being king over Israel.",
      "Found in chapter 15 of this historical narrative."
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
    "reference": "1 Samuel 15:22–23",
    "explanation": "1 Samuel 15:22 contains Samuel's famous rebuke: \"To obey is better than sacrifice.\"",
    "hint": "First Samuel; chapter 15.",
    "testament": "Old Testament",
    "difficulty": "medium",
    "timerSeconds": 30
  },
  {
    "level": 21,
    "challengeIndex": 3,
    "stage": 5,
    "stageTitle": "Scripture Detective",
    "levelTitle": "Famous Words from Unlikely Books",
    "questionType": "Type the Book",
    "isTyped": true,
    "questionText": "TYPE THE BIBLE BOOK:\nWhich book contains the magnificent confession of triumphant faith amidst physical torment: \"For I know that my Redeemer lives, and at the last he will stand upon the earth. And after my skin has been thus destroyed, yet in my flesh I shall see God\"?",
    "clues": [
      "The speaker sat in ashes scraping sores with a piece of broken pottery.",
      "Spoken in response to the accusatory speeches of Bildad the Shuhite in chapter 19.",
      "Explores the mystery of human suffering and divine sovereignty."
    ],
    "options": [
      "Job",
      "Psalms",
      "Isaiah",
      "Lamentations"
    ],
    "correctAnswer": "Job",
    "acceptedAlternatives": [
      "Jb"
    ],
    "reference": "Job 19:25–26",
    "explanation": "Job 19:25–26 contains Job's prophetic confession of his living Redeemer and bodily resurrection.",
    "hint": "Three-letter book name; starts with J.",
    "testament": "Old Testament",
    "difficulty": "hard",
    "timerSeconds": 25
  },
  {
    "level": 21,
    "challengeIndex": 4,
    "stage": 5,
    "stageTitle": "Scripture Detective",
    "levelTitle": "Famous Words from Unlikely Books",
    "questionType": "Find the Book from a Scripture Clue",
    "isTyped": false,
    "questionText": "Which Minor Prophet declared the famous moral summary: \"He has told you, O man, what is good; and what does the Lord require of you but to do justice, and to love kindness, and to walk humbly with your God\"?",
    "clues": [
      "A contemporary of Isaiah who prophesied in Judah.",
      "Also prophesied that the eternal ruler in Israel would be born in Bethlehem Ephrathah (Micah 5:2).",
      "Seven chapters located between Jonah and Nahum."
    ],
    "options": [
      "Micah",
      "Amos",
      "Hosea",
      "Malachi"
    ],
    "correctAnswer": "Micah",
    "acceptedAlternatives": [
      "Mic"
    ],
    "reference": "Micah 6:8; 5:2",
    "explanation": "Micah 6:8 is one of the Old Testament's most renowned summaries of godly living.",
    "hint": "Five-letter prophet name; prophesied Bethlehem birth.",
    "testament": "Old Testament",
    "difficulty": "medium",
    "timerSeconds": 30
  },
  {
    "level": 21,
    "challengeIndex": 5,
    "stage": 5,
    "stageTitle": "Scripture Detective",
    "levelTitle": "Famous Words from Unlikely Books",
    "questionType": "Type the Book",
    "isTyped": true,
    "questionText": "TYPE THE BIBLE BOOK:\nIn which book does an angel proclaim to Zerubbabel the governor the famous spiritual axiom: \"Not by might, nor by power, but by my Spirit, says the Lord of hosts\"?",
    "clues": [
      "Given in explanation of a vision of a solid gold lampstand flanked by two olive trees.",
      "Promises that the capstone of the second temple will be brought out with shouts of \"Grace, grace to it!\"",
      "The penultimate book of the Old Testament."
    ],
    "options": [
      "Zechariah",
      "Haggai",
      "Malachi",
      "Ezra"
    ],
    "correctAnswer": "Zechariah",
    "acceptedAlternatives": [
      "Zech"
    ],
    "reference": "Zechariah 4:6–7",
    "explanation": "Zechariah 4:6 contains the famous declaration: \"Not by might, nor by power, but by my Spirit, says the Lord.\"",
    "hint": "Nine-letter post-exilic prophet; starts with Zech-.",
    "testament": "Old Testament",
    "difficulty": "hard",
    "timerSeconds": 25
  },
  {
    "level": 22,
    "challengeIndex": 1,
    "stage": 5,
    "stageTitle": "Scripture Detective",
    "levelTitle": "Great Prayers of the Bible",
    "questionType": "Find the Book from a Scripture Clue",
    "isTyped": false,
    "questionText": "In which book does King Solomon kneel before the altar with hands spread to heaven and pray: \"Will God indeed dwell on the earth? Behold, heaven and the highest heaven cannot contain you; how much less this house that I have built!\" during the temple dedication?",
    "clues": [
      "Followed by fire coming down from heaven to consume the sacrifices in 2 Chronicles.",
      "Contains detailed petitions for when Israel faces drought, enemy defeat, or exile.",
      "Found in chapter 8 of this book."
    ],
    "options": [
      "1 Kings",
      "2 Kings",
      "1 Samuel",
      "Ezra"
    ],
    "correctAnswer": "1 Kings",
    "acceptedAlternatives": [
      "First Kings",
      "1Kgs",
      "2 Chronicles"
    ],
    "reference": "1 Kings 8:22–53; 2 Chronicles 6:12–42",
    "explanation": "1 Kings 8 records Solomon's great dedicatory prayer over the newly completed temple in Jerusalem.",
    "hint": "First Kings, chapter 8.",
    "testament": "Old Testament",
    "difficulty": "medium",
    "timerSeconds": 30
  },
  {
    "level": 22,
    "challengeIndex": 2,
    "stage": 5,
    "stageTitle": "Scripture Detective",
    "levelTitle": "Great Prayers of the Bible",
    "questionType": "Find the Book from a Scripture Clue",
    "isTyped": false,
    "questionText": "Which book records a prophet praying from inside the belly of a great fish: \"I called out to the Lord, out of my distress, and he answered me; out of the belly of Sheol I cried, and you heard my voice... Salvation belongs to the Lord!\"?",
    "clues": [
      "The prophet had fled on a ship to Tarshish from Joppa.",
      "At the end of the prayer, the Lord spoke to the fish, and it vomited the prophet onto dry land.",
      "Four-chapter narrative book."
    ],
    "options": [
      "Jonah",
      "Nahum",
      "Micah",
      "Habakkuk"
    ],
    "correctAnswer": "Jonah",
    "acceptedAlternatives": [
      "Jon"
    ],
    "reference": "Jonah 2:1–10",
    "explanation": "Jonah 2 is Jonah's psalm of thanksgiving prayed from the belly of the great fish.",
    "hint": "Prophet swallowed by a great fish; five letters.",
    "testament": "Old Testament",
    "difficulty": "easy",
    "timerSeconds": 30
  },
  {
    "level": 22,
    "challengeIndex": 3,
    "stage": 5,
    "stageTitle": "Scripture Detective",
    "levelTitle": "Great Prayers of the Bible",
    "questionType": "Type the Book",
    "isTyped": true,
    "questionText": "TYPE THE BIBLE BOOK:\nIn which Gospel does Jesus offer His magnificent High Priestly Prayer on the night of His betrayal, praying for His disciples and all future believers: \"Father, the hour has come; glorify your Son that the Son may glorify you... that they may all be one, just as you, Father, are in me, and I in you\"?",
    "clues": [
      "Takes place in the Upper Room discourse right before crossing the Kidron brook to Gethsemane.",
      "Defines eternal life: \"that they know you, the only true God, and Jesus Christ whom you have sent.\"",
      "Recorded exclusively in chapter 17 of this Gospel."
    ],
    "options": [
      "John",
      "Luke",
      "Matthew",
      "Mark"
    ],
    "correctAnswer": "John",
    "acceptedAlternatives": [
      "Jn"
    ],
    "reference": "John 17:1–26",
    "explanation": "John 17 is Jesus' sublime High Priestly Prayer for His disciples' sanctification and eternal unity.",
    "hint": "Fourth Gospel; four letters; starts with J.",
    "testament": "New Testament",
    "difficulty": "medium",
    "timerSeconds": 30
  },
  {
    "level": 22,
    "challengeIndex": 4,
    "stage": 5,
    "stageTitle": "Scripture Detective",
    "levelTitle": "Great Prayers of the Bible",
    "questionType": "Find the Book from a Scripture Clue",
    "isTyped": false,
    "questionText": "Which book records the heartbreaking prayer of Moses on Mount Sinai after the golden calf apostasy, interceding for Israel: \"Alas, this people has sinned a great sin... But now, if you will forgive their sin—but if not, please blot me out of your book that you have written\"?",
    "clues": [
      "Moses had just smashed the two stone tablets of the testimony at the foot of the mountain.",
      "God responded: \"Whoever has sinned against me, him I will blot out of my book.\"",
      "Second book of Moses."
    ],
    "options": [
      "Exodus",
      "Deuteronomy",
      "Leviticus",
      "Numbers"
    ],
    "correctAnswer": "Exodus",
    "acceptedAlternatives": [
      "Exod"
    ],
    "reference": "Exodus 32:30–34",
    "explanation": "Exodus 32:32 contains Moses' self-sacrificial prayer pleading for Israel's forgiveness.",
    "hint": "Second book of the Old Testament.",
    "testament": "Old Testament",
    "difficulty": "medium",
    "timerSeconds": 30
  },
  {
    "level": 22,
    "challengeIndex": 5,
    "stage": 5,
    "stageTitle": "Scripture Detective",
    "levelTitle": "Great Prayers of the Bible",
    "questionType": "Type the Book",
    "isTyped": true,
    "questionText": "TYPE THE BIBLE BOOK:\nIn which prophetic book does the author pray in chapter 9 while reading Jeremiah's 70-year prophecy, confessing the sins of his nation in sackcloth and ashes, whereupon the angel Gabriel flies swiftly to him at the time of the evening sacrifice to reveal the prophecy of the \"Seventy Weeks\"?",
    "clues": [
      "The prophet was an exiled statesman in Babylon.",
      "Gabriel calls him \"greatly loved\" (man of high esteem).",
      "The prophecy outlines seventy weeks decreed for your people and holy city."
    ],
    "options": [
      "Daniel",
      "Jeremiah",
      "Ezekiel",
      "Nehemiah"
    ],
    "correctAnswer": "Daniel",
    "acceptedAlternatives": [
      "Dan"
    ],
    "reference": "Daniel 9:1–27",
    "explanation": "Daniel 9 records Daniel's great prayer of confession and Gabriel's revelation of the Seventy Weeks.",
    "hint": "Old Testament prophetic book of 12 chapters; starts with D.",
    "testament": "Old Testament",
    "difficulty": "hard",
    "timerSeconds": 25
  },
  {
    "level": 23,
    "challengeIndex": 1,
    "stage": 5,
    "stageTitle": "Scripture Detective",
    "levelTitle": "Prophetic Messianic Oracles",
    "questionType": "Find the Book from a Scripture Clue",
    "isTyped": false,
    "questionText": "Which book foretells the precise price of thirty pieces of silver for the shepherd of Israel, which were cast into the house of the Lord to the potter: \"So they weighed out as my wages thirty pieces of silver. Then the Lord said to me, 'Throw it to the potter'—the lordly price at which I was priced by them\"?",
    "clues": [
      "Cited by Matthew 27:9–10 at the suicide of Judas Iscariot.",
      "Also foretells: \"They will look on me, on him whom they have pierced.\"",
      "Eleventh of the twelve Minor Prophets."
    ],
    "options": [
      "Zechariah",
      "Malachi",
      "Jeremiah",
      "Micah"
    ],
    "correctAnswer": "Zechariah",
    "acceptedAlternatives": [
      "Zech"
    ],
    "reference": "Zechariah 11:12–13; 12:10; Matthew 27:9–10",
    "explanation": "Zechariah 11:12–13 prophesies the 30 pieces of silver thrown to the potter in the temple.",
    "hint": "Minor Prophet beginning with Zech-.",
    "testament": "Old Testament",
    "difficulty": "hard",
    "timerSeconds": 25
  },
  {
    "level": 23,
    "challengeIndex": 2,
    "stage": 5,
    "stageTitle": "Scripture Detective",
    "levelTitle": "Prophetic Messianic Oracles",
    "questionType": "Find the Book from a Scripture Clue",
    "isTyped": false,
    "questionText": "In which book do we read the Fourth Servant Song describing the Suffering Messiah: \"Surely he has borne our griefs and carried our sorrows... he was pierced for our transgressions; he was crushed for our iniquities; upon him was the chastisement that brought us peace, and with his wounds we are healed\"?",
    "clues": [
      "Philip the Evangelist explained this exact passage to the Ethiopian eunuch in Acts 8.",
      "Describes the Messiah as a silent sheep led to slaughter.",
      "Found in chapter 53 of this major prophet."
    ],
    "options": [
      "Isaiah",
      "Jeremiah",
      "Psalms",
      "Zechariah"
    ],
    "correctAnswer": "Isaiah",
    "acceptedAlternatives": [
      "Isa"
    ],
    "reference": "Isaiah 53:4–7; Acts 8:32–35",
    "explanation": "Isaiah 53 is the supreme Old Testament prophecy of Christ's substitutionary atonement on the cross.",
    "hint": "Major prophet containing 66 chapters.",
    "testament": "Old Testament",
    "difficulty": "easy",
    "timerSeconds": 30
  },
  {
    "level": 23,
    "challengeIndex": 3,
    "stage": 5,
    "stageTitle": "Scripture Detective",
    "levelTitle": "Prophetic Messianic Oracles",
    "questionType": "Type the Book",
    "isTyped": true,
    "questionText": "TYPE THE BIBLE BOOK:\nWhich book opens with the cry of agonizing abandonment: \"My God, my God, why have you forsaken me?\", and describes the executioners piercing hands and feet and dividing garments by casting lots a thousand years before Roman crucifixion existed?",
    "clues": [
      "Jesus quoted its opening line from the cross in Matthew 27:46.",
      "Details: \"They divide my garments among them, and for my clothing they cast lots.\"",
      "Composed by King David."
    ],
    "options": [
      "Psalms",
      "Psalm",
      "Isaiah",
      "Job"
    ],
    "correctAnswer": "Psalms",
    "acceptedAlternatives": [
      "Psalm",
      "Psa"
    ],
    "reference": "Psalm 22:1, 16, 18; Matthew 27:46; John 19:24",
    "explanation": "Psalm 22 is David's prophetic psalm depicting the physical and spiritual suffering of the crucified Messiah.",
    "hint": "Book containing Psalm 22.",
    "testament": "Old Testament",
    "difficulty": "medium",
    "timerSeconds": 30
  },
  {
    "level": 23,
    "challengeIndex": 4,
    "stage": 5,
    "stageTitle": "Scripture Detective",
    "levelTitle": "Prophetic Messianic Oracles",
    "questionType": "Find the Book from a Scripture Clue",
    "isTyped": false,
    "questionText": "Which prophetic book foretold that the Messiah would be born in Bethlehem Ephrathah: \"But you, O Bethlehem Ephrathah, who are too little to be among the clans of Judah, from you shall come forth for me one who is to be ruler in Israel, whose coming forth is from of old, from ancient days\"?",
    "clues": [
      "The chief priests quoted this verse to King Herod when the Magi arrived in Matthew 2.",
      "Contemporary of the prophet Isaiah.",
      "Minor Prophet of seven chapters."
    ],
    "options": [
      "Micah",
      "Malachi",
      "Hosea",
      "Habakkuk"
    ],
    "correctAnswer": "Micah",
    "acceptedAlternatives": [
      "Mic"
    ],
    "reference": "Micah 5:2; Matthew 2:5–6",
    "explanation": "Micah 5:2 explicitly names Bethlehem Ephrathah as the birthplace of the Messiah.",
    "hint": "Five-letter Minor Prophet starting with M.",
    "testament": "Old Testament",
    "difficulty": "medium",
    "timerSeconds": 30
  },
  {
    "level": 23,
    "challengeIndex": 5,
    "stage": 5,
    "stageTitle": "Scripture Detective",
    "levelTitle": "Prophetic Messianic Oracles",
    "questionType": "Type the Book",
    "isTyped": true,
    "questionText": "TYPE THE BIBLE BOOK:\nIn which book is the Messiah revealed as the \"Son of Man\" coming with the clouds of heaven before the Ancient of Days, receiving an everlasting dominion, glory, and kingdom that all peoples, nations, and languages should serve Him?",
    "clues": [
      "Jesus adopted this specific \"Son of Man\" title throughout His earthly ministry.",
      "Jesus quoted this exact scene before High Priest Caiaphas at His trial in Matthew 26:64.",
      "Recorded in chapter 7 of this apocalyptic book."
    ],
    "options": [
      "Daniel",
      "Ezekiel",
      "Zechariah",
      "Revelation"
    ],
    "correctAnswer": "Daniel",
    "acceptedAlternatives": [
      "Dan"
    ],
    "reference": "Daniel 7:13–14; Matthew 26:64",
    "explanation": "Daniel 7:13–14 is the foundational prophecy of the Son of Man receiving universal and eternal dominion.",
    "hint": "Six-letter prophetic book; starts with D.",
    "testament": "Old Testament",
    "difficulty": "hard",
    "timerSeconds": 25
  },
  {
    "level": 24,
    "challengeIndex": 1,
    "stage": 5,
    "stageTitle": "Scripture Detective",
    "levelTitle": "Covenant Inscriptions & Decrees",
    "questionType": "Find the Book from a Scripture Clue",
    "isTyped": false,
    "questionText": "In which book does God promise to make a New Covenant with the house of Israel and the house of Judah: \"I will put my law within them, and I will write it on their hearts. And I will be their God, and they shall be my people... for I will forgive their iniquity, and I will remember their sin no more\"?",
    "clues": [
      "Contrasted with the broken Sinai covenant made when God took them by the hand out of Egypt.",
      "Quoted verbatim in Hebrews 8:8–12 and Hebrews 10:16–17 as fulfilled in Christ.",
      "Found in chapter 31 of this major prophet."
    ],
    "options": [
      "Jeremiah",
      "Ezekiel",
      "Isaiah",
      "Hosea"
    ],
    "correctAnswer": "Jeremiah",
    "acceptedAlternatives": [
      "Jer"
    ],
    "reference": "Jeremiah 31:31–34; Hebrews 8:8–12",
    "explanation": "Jeremiah 31:31–34 is the classic Old Testament announcement of the New Covenant.",
    "hint": "The weeping prophet Jeremiah in chapter 31.",
    "testament": "Old Testament",
    "difficulty": "medium",
    "timerSeconds": 30
  },
  {
    "level": 24,
    "challengeIndex": 2,
    "stage": 5,
    "stageTitle": "Scripture Detective",
    "levelTitle": "Covenant Inscriptions & Decrees",
    "questionType": "Find the Book from a Scripture Clue",
    "isTyped": false,
    "questionText": "In which book does God pronounce the foundational Davidic Covenant: \"When your days are fulfilled and you lie down with your fathers, I will raise up your offspring after you... and I will establish the throne of his kingdom forever. I will be to him a father, and he shall be to me a son\"?",
    "clues": [
      "Announced through the prophet Nathan after David expressed desire to build a house of cedar for the Ark.",
      "God promised: \"Your house and your kingdom shall be made sure forever before me.\"",
      "Recorded in chapter 7."
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
    "reference": "2 Samuel 7:12–16; 1 Chronicles 17:11–14",
    "explanation": "2 Samuel 7 is the historical locus of the unconditional Davidic Covenant.",
    "hint": "Second Samuel, chapter 7.",
    "testament": "Old Testament",
    "difficulty": "medium",
    "timerSeconds": 30
  },
  {
    "level": 24,
    "challengeIndex": 3,
    "stage": 5,
    "stageTitle": "Scripture Detective",
    "levelTitle": "Covenant Inscriptions & Decrees",
    "questionType": "Type the Book",
    "isTyped": true,
    "questionText": "TYPE THE BIBLE BOOK:\nIn which book does God promise: \"I will sprinkle clean water on you, and you shall be clean... And I will give you a new heart, and a new spirit I will put within you. And I will remove the heart of stone from your flesh and give you a heart of flesh\"?",
    "clues": [
      "Followed immediately in chapter 37 by the vision of the valley of dry bones.",
      "Addressed to the exiles in Babylon.",
      "Recorded in chapter 36 of this priestly prophetic book."
    ],
    "options": [
      "Ezekiel",
      "Jeremiah",
      "Isaiah",
      "Daniel"
    ],
    "correctAnswer": "Ezekiel",
    "acceptedAlternatives": [
      "Ezek"
    ],
    "reference": "Ezekiel 36:25–27",
    "explanation": "Ezekiel 36:25–27 describes the spiritual regeneration of God's covenant people with a new heart and Spirit.",
    "hint": "Major prophet of 48 chapters; begins with Ezek-.",
    "testament": "Old Testament",
    "difficulty": "hard",
    "timerSeconds": 25
  },
  {
    "level": 24,
    "challengeIndex": 4,
    "stage": 5,
    "stageTitle": "Scripture Detective",
    "levelTitle": "Covenant Inscriptions & Decrees",
    "questionType": "Find the Book from a Scripture Clue",
    "isTyped": false,
    "questionText": "Which book records the first delivery of the Ten Commandments spoken by God Himself amidst thunder, lightning, thick cloud, and trumpet sound from Mount Sinai?",
    "clues": [
      "Opens: \"I am the Lord your God, who brought you out of the land of Egypt, out of the house of slavery.\"",
      "Found in chapter 20 of this foundational book.",
      "Later repeated and expounded in Deuteronomy 5."
    ],
    "options": [
      "Exodus",
      "Deuteronomy",
      "Leviticus",
      "Numbers"
    ],
    "correctAnswer": "Exodus",
    "acceptedAlternatives": [
      "Exod"
    ],
    "reference": "Exodus 20:1–17",
    "explanation": "Exodus 20 records the initial proclamation of the Decalogue (Ten Commandments) at Mount Sinai.",
    "hint": "Second book of the Bible; chapter 20.",
    "testament": "Old Testament",
    "difficulty": "easy",
    "timerSeconds": 30
  },
  {
    "level": 24,
    "challengeIndex": 5,
    "stage": 5,
    "stageTitle": "Scripture Detective",
    "levelTitle": "Covenant Inscriptions & Decrees",
    "questionType": "Type the Book",
    "isTyped": true,
    "questionText": "TYPE THE BIBLE BOOK:\nIn which book does Joshua summon all the tribes of Israel to Shechem for their final covenant renewal, challenging them: \"Choose this day whom you will serve... But as for me and my house, we will serve the Lord\"?",
    "clues": [
      "Joshua set up a great stone under the terebinth tree by the sanctuary of the Lord as a witness.",
      "The book closes with the deaths of Joshua and Eleazar, and the burial of Joseph's bones in Shechem.",
      "The 24th and final chapter of this book."
    ],
    "options": [
      "Joshua",
      "Judges",
      "Deuteronomy",
      "1 Samuel"
    ],
    "correctAnswer": "Joshua",
    "acceptedAlternatives": [
      "Josh"
    ],
    "reference": "Joshua 24:14–28",
    "explanation": "Joshua 24 records the farewell assembly at Shechem and Joshua's famous covenant charge.",
    "hint": "Book bearing the name of Joshua; chapter 24.",
    "testament": "Old Testament",
    "difficulty": "hard",
    "timerSeconds": 25
  },
  {
    "level": 25,
    "challengeIndex": 1,
    "stage": 5,
    "stageTitle": "Scripture Detective",
    "levelTitle": "Scripture Detective Boss",
    "questionType": "The Book Detective",
    "isTyped": false,
    "questionText": "THE BOOK DETECTIVE:\nI contain this solemn warning: \"The pride of your heart has deceived you, you who live in the clefts of the rock, in your lofty dwelling, who say in your heart, 'Who will bring me down to the ground?' Though you soar aloft like the eagle, though your nest is set among the stars, from there I will bring you down, declares the Lord.\" Which book am I?",
    "clues": [
      "A single-chapter prophecy of 21 verses aimed at the proud mountain fortress of Edom (Petra/Sela).",
      "Condemns Edom for standing aloof on the day Jerusalem fell and looting their brothers.",
      "Ends: \"Saviors shall go up to Mount Zion to rule Mount Esau, and the kingdom shall be the Lord's.\""
    ],
    "options": [
      "Obadiah",
      "Nahum",
      "Habakkuk",
      "Zephaniah"
    ],
    "correctAnswer": "Obadiah",
    "acceptedAlternatives": [
      "Obad"
    ],
    "reference": "Obadiah 1:3–4, 21",
    "explanation": "Obadiah 1:3–4 pronounces doom on the rocky pride of Edom.",
    "hint": "The shortest book in the Old Testament; begins with O.",
    "testament": "Old Testament",
    "difficulty": "hard",
    "timerSeconds": 25
  },
  {
    "level": 25,
    "challengeIndex": 2,
    "stage": 5,
    "stageTitle": "Scripture Detective",
    "levelTitle": "Scripture Detective Boss",
    "questionType": "The Book Detective",
    "isTyped": false,
    "questionText": "THE BOOK DETECTIVE:\nI contain this dramatic apocalyptic vision: \"I looked, and behold, a white cloud, and seated on the cloud one like a son of man, with a golden crown on his head, and a sharp sickle in his hand... And another angel came out from the altar, the angel who has authority over the fire, and he called with a loud voice to the one who had the sharp sickle, 'Put in your sickle and gather the clusters from the vine of the earth, for its grapes are ripe.'\" Which book am I?",
    "clues": [
      "Describes the great winepress of the wrath of God trodden outside the city.",
      "Features 144,000 on Mount Zion singing a new song before the throne.",
      "The 66th book of the Bible."
    ],
    "options": [
      "Revelation",
      "Daniel",
      "Ezekiel",
      "Zechariah"
    ],
    "correctAnswer": "Revelation",
    "acceptedAlternatives": [
      "Apocalypse",
      "Rev"
    ],
    "reference": "Revelation 14:14–20",
    "explanation": "Revelation 14:14–20 describes the harvest of the earth and the great winepress of God's wrath.",
    "hint": "The final book of the New Testament.",
    "testament": "New Testament",
    "difficulty": "medium",
    "timerSeconds": 25
  },
  {
    "level": 25,
    "challengeIndex": 3,
    "stage": 5,
    "stageTitle": "Scripture Detective",
    "levelTitle": "Scripture Detective Boss",
    "questionType": "Type the Book",
    "isTyped": true,
    "questionText": "TYPE THE BIBLE BOOK:\nIn which book does the author write this rare canonical description of Holy Scripture: \"And count the patience of our Lord as salvation, just as our beloved brother Paul also wrote to you according to the wisdom given him, as he does in all his letters... which the ignorant and unstable twist to their own destruction, as they do the other Scriptures\"?",
    "clues": [
      "A supreme New Testament witness recognizing Paul's epistles as inspired Scripture on par with the Old Testament.",
      "Written by Simon Peter shortly before his death.",
      "Contains 3 chapters."
    ],
    "options": [
      "2 Peter",
      "1 Peter",
      "Jude",
      "Acts"
    ],
    "correctAnswer": "2 Peter",
    "acceptedAlternatives": [
      "Second Peter",
      "2Pet"
    ],
    "reference": "2 Peter 3:15–16",
    "explanation": "2 Peter 3:15–16 is Peter's explicit confirmation of Paul's writings as \"Scripture\" (graphe).",
    "hint": "Second letter of Peter.",
    "testament": "New Testament",
    "difficulty": "hard",
    "timerSeconds": 25
  },
  {
    "level": 25,
    "challengeIndex": 4,
    "stage": 5,
    "stageTitle": "Scripture Detective",
    "levelTitle": "Scripture Detective Boss",
    "questionType": "The Book Detective",
    "isTyped": false,
    "questionText": "THE BOOK DETECTIVE:\nI open with a devastated agrarian economy wiped out by successive waves of locusts: \"What the cutting locust left, the swarming locust has eaten. What the swarming locust left, the hopping locust has eaten, and what the hopping locust left, the destroying locust has eaten.\" I then call the priests to weep between the vestibule and the altar, and promise the ultimate outpouring of the Holy Spirit on all flesh. Which book am I?",
    "clues": [
      "Peter cited chapter 2 verbatim on the Day of Pentecost in Acts 2.",
      "Three-chapter prophecy addressed to the southern kingdom of Judah.",
      "Declares: \"Return to the Lord your God, for he is gracious and merciful, slow to anger, and abounding in steadfast love.\""
    ],
    "options": [
      "Joel",
      "Amos",
      "Hosea",
      "Habakkuk"
    ],
    "correctAnswer": "Joel",
    "acceptedAlternatives": [
      "Jl"
    ],
    "reference": "Joel 1:4; 2:13, 28–32; Acts 2:16–21",
    "explanation": "The Book of Joel depicts the devastating locust plague and the promise of the Holy Spirit.",
    "hint": "Four-letter Minor Prophet beginning with J.",
    "testament": "Old Testament",
    "difficulty": "medium",
    "timerSeconds": 25
  },
  {
    "level": 25,
    "challengeIndex": 5,
    "stage": 5,
    "stageTitle": "Scripture Detective",
    "levelTitle": "Scripture Detective Boss",
    "questionType": "Type the Book",
    "isTyped": true,
    "questionText": "TYPE THE BIBLE BOOK:\nWhich book contains this celebrated concluding hymn of unflinching confidence: \"Though the fig tree should not blossom, nor fruit be on the vines, the produce of the olive fail and the fields yield no food... yet I will rejoice in the Lord; I will take joy in the God of my salvation. God, the Lord, is my strength; he makes my feet like the deer's; he makes me tread on my high places\"?",
    "clues": [
      "The book ends with the musical notation: \"To the choirmaster: with stringed instruments.\"",
      "Begins with agonizing perplexity over God's silence and Chaldean brutality.",
      "Three chapters; the prophet stood on the watchtower."
    ],
    "options": [
      "Habakkuk",
      "Zephaniah",
      "Nahum",
      "Micah"
    ],
    "correctAnswer": "Habakkuk",
    "acceptedAlternatives": [
      "Hab"
    ],
    "reference": "Habakkuk 3:17–19",
    "explanation": "Habakkuk 3:17–19 is the triumphant prayer song concluding Habakkuk's spiritual journey.",
    "hint": "Minor Prophet beginning with Hab-; ends with deer's feet on high places.",
    "testament": "Old Testament",
    "difficulty": "master",
    "timerSeconds": 20
  },
  {
    "level": 26,
    "challengeIndex": 1,
    "stage": 6,
    "stageTitle": "Book Connections",
    "levelTitle": "Parallel Historical Accounts",
    "questionType": "Two Books, One Story",
    "isTyped": false,
    "questionText": "TWO BOOKS, ONE STORY:\nWhich TWO Old Testament books contain nearly identical, word-for-word historical accounts of King Sennacherib's invasion of Judah, the Rabshakeh's blasphemous speech at the conduit of the upper pool, and the miraculous destruction of 185,000 Assyrian soldiers?",
    "clues": [
      "One is the second volume of the history of Israel's kings (chapter 18–19).",
      "The other is a major 66-chapter prophetic book (chapters 36–37).",
      "Both detail King Hezekiah spreading the Assyrian letter before the Lord."
    ],
    "options": [
      "2 Kings and Isaiah",
      "1 Kings and Jeremiah",
      "Joshua and Judges",
      "Ezra and Nehemiah"
    ],
    "correctAnswer": "2 Kings and Isaiah",
    "acceptedAlternatives": [
      "2 Kings & Isaiah",
      "2Kgs and Isa"
    ],
    "reference": "2 Kings 18–19; Isaiah 36–37",
    "explanation": "2 Kings 18–19 and Isaiah 36–37 contain parallel, almost verbatim accounts of Sennacherib's siege and Hezekiah's deliverance.",
    "hint": "2 Kings and the Book of Isaiah.",
    "testament": "Old Testament",
    "difficulty": "medium",
    "timerSeconds": 30
  },
  {
    "level": 26,
    "challengeIndex": 2,
    "stage": 6,
    "stageTitle": "Book Connections",
    "levelTitle": "Parallel Historical Accounts",
    "questionType": "Two Books, One Story",
    "isTyped": false,
    "questionText": "TWO BOOKS, ONE STORY:\nWhich TWO books record the momentous rediscovery of the Book of the Law by Hilkiah the high priest during the 18th year of King Josiah's reign, the consultation of Huldah the prophetess, and Josiah's thorough purge of pagan altars across the land?",
    "clues": [
      "Both books narrate Josiah tearing his clothes upon hearing the words of the Law.",
      "One is in the Kings corpus (2 Kings 22–23).",
      "The other is in the Chronicles corpus (2 Chronicles 34–35)."
    ],
    "options": [
      "2 Kings and 2 Chronicles",
      "1 Kings and 1 Chronicles",
      "Ezra and Nehemiah",
      "Deuteronomy and Joshua"
    ],
    "correctAnswer": "2 Kings and 2 Chronicles",
    "acceptedAlternatives": [
      "2 Kings & 2 Chronicles",
      "2Kgs and 2Chr"
    ],
    "reference": "2 Kings 22–23; 2 Chronicles 34–35",
    "explanation": "Josiah's temple renovation and covenant renewal are recorded in 2 Kings 22–23 and 2 Chronicles 34–35.",
    "hint": "The second volumes of Kings and Chronicles.",
    "testament": "Old Testament",
    "difficulty": "medium",
    "timerSeconds": 30
  },
  {
    "level": 26,
    "challengeIndex": 3,
    "stage": 6,
    "stageTitle": "Book Connections",
    "levelTitle": "Parallel Historical Accounts",
    "questionType": "Type the Book",
    "isTyped": true,
    "questionText": "TYPE THE BIBLE BOOK:\nWhile 2 Kings 21 records King Manasseh as the most wicked king in Judah's history without mentioning any repentance, which OTHER historical book uniquely records Manasseh's capture with hooks to Babylon, his humble prayer of repentance, and God's restoration of him to his throne in Jerusalem?",
    "clues": [
      "Focuses heavily on repentance and divine retribution.",
      "Records Manasseh removing the foreign gods and the idol from the house of the Lord upon his return.",
      "Second volume of the post-exilic priestly history."
    ],
    "options": [
      "2 Chronicles",
      "1 Chronicles",
      "Ezra",
      "Nehemiah"
    ],
    "correctAnswer": "2 Chronicles",
    "acceptedAlternatives": [
      "Second Chronicles",
      "2Chr"
    ],
    "reference": "2 Chronicles 33:10–17; 2 Kings 21:1–18",
    "explanation": "2 Chronicles 33 uniquely preserves the account of Manasseh's captivity, repentance, and spiritual restoration.",
    "hint": "Second Chronicles, chapter 33.",
    "testament": "Old Testament",
    "difficulty": "hard",
    "timerSeconds": 25
  },
  {
    "level": 26,
    "challengeIndex": 4,
    "stage": 6,
    "stageTitle": "Book Connections",
    "levelTitle": "Parallel Historical Accounts",
    "questionType": "Two Books, One Story",
    "isTyped": false,
    "questionText": "TWO BOOKS, ONE STORY:\nWhich TWO books conclude their narratives with the exact same identical historical paragraph detailing King Cyrus of Persia's decree in 538 BC: \"The Lord, the God of heaven, has given me all the kingdoms of the earth, and he has charged me to build him a house at Jerusalem, which is in Judah\"?",
    "clues": [
      "The end of one book serves as the exact opening verses of the next book in canonical order.",
      "Demonstrates the continuity between the pre-exilic monarchy and post-exilic restoration.",
      "One closes the Chronicles; the other opens the rebuilding of the temple."
    ],
    "options": [
      "2 Chronicles and Ezra",
      "1 Kings and 2 Kings",
      "Ezra and Nehemiah",
      "Jeremiah and Lamentations"
    ],
    "correctAnswer": "2 Chronicles and Ezra",
    "acceptedAlternatives": [
      "2 Chronicles & Ezra",
      "2Chr and Ezr"
    ],
    "reference": "2 Chronicles 36:22–23; Ezra 1:1–3",
    "explanation": "2 Chronicles 36:22–23 and Ezra 1:1–3 share the identical text of Cyrus' decree.",
    "hint": "The end of 2 Chronicles and the beginning of Ezra.",
    "testament": "Old Testament",
    "difficulty": "medium",
    "timerSeconds": 30
  },
  {
    "level": 26,
    "challengeIndex": 5,
    "stage": 6,
    "stageTitle": "Book Connections",
    "levelTitle": "Parallel Historical Accounts",
    "questionType": "Type the Book",
    "isTyped": true,
    "questionText": "TYPE THE BIBLE BOOK:\nIn 2 Samuel 11–12, David's sin with Bathsheba and the murder of Uriah the Hittite are recorded in full, tragic detail. In which parallel historical book is the entire Bathsheba and Uriah narrative completely OMITTED, jumping straight from David's foreign wars to his military preparations for the temple?",
    "clues": [
      "Written from a post-exilic priestly perspective emphasizing the idealized Davidic dynasty and temple worship.",
      "Omits David's internal family scandals (Amnon, Absalom, Adonijah).",
      "First volume of this two-part work."
    ],
    "options": [
      "1 Chronicles",
      "2 Chronicles",
      "1 Kings",
      "Ezra"
    ],
    "correctAnswer": "1 Chronicles",
    "acceptedAlternatives": [
      "First Chronicles",
      "1Chr"
    ],
    "reference": "1 Chronicles 20:1–3; 2 Samuel 11:1–12:25",
    "explanation": "1 Chronicles 20:1 skips directly over the Bathsheba episode found in 2 Samuel 11–12, focusing on David's public covenant role.",
    "hint": "First Chronicles; begins with 1.",
    "testament": "Old Testament",
    "difficulty": "hard",
    "timerSeconds": 25
  },
  {
    "level": 27,
    "challengeIndex": 1,
    "stage": 6,
    "stageTitle": "Book Connections",
    "levelTitle": "Prophecy & Fulfillment",
    "questionType": "Two Books, One Story",
    "isTyped": false,
    "questionText": "TWO BOOKS, ONE STORY:\nWhich TWO books are connected by the apostolic citation on Pentecost: \"And in the last days it shall be, God declares, that I will pour out my Spirit on all flesh, and your sons and your daughters shall prophesy\"?",
    "clues": [
      "One is the Old Testament Minor Prophet who warned of the locust invasion.",
      "The other is the New Testament book recording Peter's Pentecost sermon in chapter 2.",
      "Identifies the miraculous speaking in tongues with ancient prophetic promise."
    ],
    "options": [
      "Joel and Acts",
      "Amos and Luke",
      "Hosea and Romans",
      "Isaiah and Matthew"
    ],
    "correctAnswer": "Joel and Acts",
    "acceptedAlternatives": [
      "Joel & Acts"
    ],
    "reference": "Joel 2:28–32; Acts 2:16–21",
    "explanation": "Peter in Acts 2:16–21 quotes Joel 2:28–32 to explain the outpouring of the Holy Spirit.",
    "hint": "The prophet Joel and the Book of Acts.",
    "testament": "Both",
    "difficulty": "medium",
    "timerSeconds": 30
  },
  {
    "level": 27,
    "challengeIndex": 2,
    "stage": 6,
    "stageTitle": "Book Connections",
    "levelTitle": "Prophecy & Fulfillment",
    "questionType": "Two Books, One Story",
    "isTyped": false,
    "questionText": "TWO BOOKS, ONE STORY:\nWhich TWO books are linked by the quotation: \"Out of Egypt I called my son\", connecting Israel's national exodus to infant Jesus' safe return from Egypt after King Herod's death?",
    "clues": [
      "One is an Old Testament prophet whose opening chapters deal with his marriage to Gomer (Hosea 11:1).",
      "The other is the opening Gospel of the New Testament citing the fulfillment in chapter 2:15.",
      "Demonstrates the typological relationship between Israel and the Messiah."
    ],
    "options": [
      "Hosea and Matthew",
      "Micah and Luke",
      "Jeremiah and John",
      "Exodus and Mark"
    ],
    "correctAnswer": "Hosea and Matthew",
    "acceptedAlternatives": [
      "Hosea & Matthew"
    ],
    "reference": "Hosea 11:1; Matthew 2:15",
    "explanation": "Matthew 2:15 quotes Hosea 11:1 (\"Out of Egypt I called my son\") regarding the Holy Family's return from Egypt.",
    "hint": "The prophet Hosea and the Gospel of Matthew.",
    "testament": "Both",
    "difficulty": "hard",
    "timerSeconds": 25
  },
  {
    "level": 27,
    "challengeIndex": 3,
    "stage": 6,
    "stageTitle": "Book Connections",
    "levelTitle": "Prophecy & Fulfillment",
    "questionType": "Type the Book",
    "isTyped": true,
    "questionText": "TYPE THE BIBLE BOOK:\nIn Matthew 21 and John 12, Jesus' Triumphal Entry into Jerusalem riding on a donkey's colt is cited as fulfilling the prophecy: \"Rejoice greatly, O daughter of Zion! Shout aloud, O daughter of Jerusalem! Behold, your king is coming to you... humble and mounted on a donkey.\" In which Old Testament book was this prophecy originally recorded?",
    "clues": [
      "Written by the prophet who also foretold the 30 pieces of silver.",
      "Found in chapter 9 verse 9.",
      "Penultimate book of the Old Testament."
    ],
    "options": [
      "Zechariah",
      "Malachi",
      "Haggai",
      "Micah"
    ],
    "correctAnswer": "Zechariah",
    "acceptedAlternatives": [
      "Zech"
    ],
    "reference": "Zechariah 9:9; Matthew 21:4–5; John 12:14–15",
    "explanation": "Zechariah 9:9 contains the prophecy of the humble King riding on a colt into Jerusalem.",
    "hint": "Nine-letter post-exilic prophet; begins with Zech-.",
    "testament": "Old Testament",
    "difficulty": "medium",
    "timerSeconds": 30
  },
  {
    "level": 27,
    "challengeIndex": 4,
    "stage": 6,
    "stageTitle": "Book Connections",
    "levelTitle": "Prophecy & Fulfillment",
    "questionType": "Two Books, One Story",
    "isTyped": false,
    "questionText": "TWO BOOKS, ONE STORY:\nWhich TWO books are connected by the quotation: \"A voice is heard in Ramah, lamentation and bitter weeping. Rachel is weeping for her children; she refuses to be comforted... because they are no more\"?",
    "clues": [
      "One is an Old Testament major prophet speaking of the exiles passing Ramah on their way to Babylon (ch 31).",
      "The other is a New Testament Gospel citing the fulfillment when King Herod slaughtered male infants in Bethlehem (ch 2).",
      "Both connect maternal weeping with divine redemptive purpose."
    ],
    "options": [
      "Jeremiah and Matthew",
      "Isaiah and Luke",
      "Ezekiel and Mark",
      "Lamentations and John"
    ],
    "correctAnswer": "Jeremiah and Matthew",
    "acceptedAlternatives": [
      "Jeremiah & Matthew"
    ],
    "reference": "Jeremiah 31:15; Matthew 2:17–18",
    "explanation": "Matthew 2:17–18 quotes Jeremiah 31:15 regarding the slaughter of the innocents in Bethlehem.",
    "hint": "The prophet Jeremiah and the Gospel of Matthew.",
    "testament": "Both",
    "difficulty": "hard",
    "timerSeconds": 25
  },
  {
    "level": 27,
    "challengeIndex": 5,
    "stage": 6,
    "stageTitle": "Book Connections",
    "levelTitle": "Prophecy & Fulfillment",
    "questionType": "Type the Book",
    "isTyped": true,
    "questionText": "TYPE THE BIBLE BOOK:\nIn Acts 1:20, Peter quotes two different psalms to justify choosing a successor to Judas Iscariot: \"Let his encampment become desolate, and let there be no one to dwell in it\" and \"Let another take his office.\" In which Old Testament book are these original royal and imprecatory prayers found?",
    "clues": [
      "The primary prayer book of the Old Testament.",
      "Taken from Psalm 69:25 and Psalm 109:8.",
      "Contains 150 chapters."
    ],
    "options": [
      "Psalms",
      "Psalm",
      "Proverbs",
      "Isaiah"
    ],
    "correctAnswer": "Psalms",
    "acceptedAlternatives": [
      "Psalm",
      "Psa"
    ],
    "reference": "Psalm 69:25; 109:8; Acts 1:20",
    "explanation": "Peter in Acts 1:20 cites Psalm 69:25 and Psalm 109:8 concerning Judas Iscariot and Matthias' appointment.",
    "hint": "The Book of Psalms.",
    "testament": "Both",
    "difficulty": "hard",
    "timerSeconds": 25
  },
  {
    "level": 28,
    "challengeIndex": 1,
    "stage": 6,
    "stageTitle": "Book Connections",
    "levelTitle": "Shared Characters",
    "questionType": "Find the Book from a Scripture Clue",
    "isTyped": false,
    "questionText": "Melchizedek appears as a living historical king-priest in Genesis 14, and as an eternal messianic prototype in Psalm 110. Which New Testament epistle devotes extensive chapters (5–7) to developing his theological significance as a type of Christ's priesthood?",
    "clues": [
      "Notes that Melchizedek has no recorded genealogy, beginning of days, or end of life.",
      "Demonstrates that Levi paid tithes to Melchizedek while still in the loins of Abraham.",
      "Epistle written to Jewish believers tempted to retreat to temple sacrifices."
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
    "reference": "Genesis 14:18–20; Psalm 110:4; Hebrews 7:1–17",
    "explanation": "Hebrews 7 provides the comprehensive New Testament theological exposition of Melchizedek.",
    "hint": "Epistle to the Hebrews.",
    "testament": "New Testament",
    "difficulty": "medium",
    "timerSeconds": 30
  },
  {
    "level": 28,
    "challengeIndex": 2,
    "stage": 6,
    "stageTitle": "Book Connections",
    "levelTitle": "Shared Characters",
    "questionType": "Find the Book from a Scripture Clue",
    "isTyped": false,
    "questionText": "Elijah the prophet lived in 1 & 2 Kings, but appears prominently across the New Testament. In which New Testament epistle is Elijah held up as an example of earnest prayer: \"Elijah was a man with a nature like ours, and he prayed fervently that it might not rain, and for three years and six months it did not rain on the earth\"?",
    "clues": [
      "Followed by: \"Then he prayed again, and heaven gave rain, and the earth bore its fruit.\"",
      "Contains the promise: \"The prayer of a righteous person has great power as it is working.\"",
      "Five-chapter practical wisdom epistle."
    ],
    "options": [
      "James",
      "Hebrews",
      "1 Peter",
      "1 John"
    ],
    "correctAnswer": "James",
    "acceptedAlternatives": [
      "Jas"
    ],
    "reference": "James 5:17–18; 1 Kings 17:1; 18:41–45",
    "explanation": "James 5:17–18 cites Elijah's prayers concerning drought and rain to encourage persistent Christian prayer.",
    "hint": "Five-letter epistle of James; chapter 5.",
    "testament": "New Testament",
    "difficulty": "medium",
    "timerSeconds": 30
  },
  {
    "level": 28,
    "challengeIndex": 3,
    "stage": 6,
    "stageTitle": "Book Connections",
    "levelTitle": "Shared Characters",
    "questionType": "Type the Book",
    "isTyped": true,
    "questionText": "TYPE THE BIBLE BOOK:\nBalaam the pagan diviner who loved gain is introduced in Numbers 22–24. In which New Testament epistle does the author warn against false teachers who \"have followed the way of Balaam, the son of Beor, who loved gain from wrongdoing, but was rebuked for his own transgression; a speechless donkey spoke with human voice and restrained the prophet's madness\"?",
    "clues": [
      "Peter's final three-chapter epistle.",
      "Also discusses Noah and Lot as examples of deliverance from judgment.",
      "Chapter 2 deals with false teachers."
    ],
    "options": [
      "2 Peter",
      "1 Peter",
      "Jude",
      "Revelation"
    ],
    "correctAnswer": "2 Peter",
    "acceptedAlternatives": [
      "Second Peter",
      "2Pet"
    ],
    "reference": "2 Peter 2:15–16; Numbers 22:21–35",
    "explanation": "2 Peter 2:15–16 explicitly refers to Balaam and his speaking donkey as a warning against greed.",
    "hint": "Second Epistle of Peter; chapter 2.",
    "testament": "New Testament",
    "difficulty": "hard",
    "timerSeconds": 25
  },
  {
    "level": 28,
    "challengeIndex": 4,
    "stage": 6,
    "stageTitle": "Book Connections",
    "levelTitle": "Shared Characters",
    "questionType": "Find the Book from a Scripture Clue",
    "isTyped": false,
    "questionText": "In which prophetic book does God conclude the Old Testament by promising: \"Behold, I will send you Elijah the prophet before the great and awesome day of the Lord comes. And he will turn the hearts of fathers to their children and the hearts of children to their fathers\"?",
    "clues": [
      "Jesus identified John the Baptist as the fulfillment of this prophecy in Matthew 11:14.",
      "The angel Gabriel quoted this exact verse to Zechariah in the temple in Luke 1:17.",
      "The final book of the Old Testament."
    ],
    "options": [
      "Malachi",
      "Zechariah",
      "Haggai",
      "Micah"
    ],
    "correctAnswer": "Malachi",
    "acceptedAlternatives": [
      "Mal"
    ],
    "reference": "Malachi 4:5–6; Matthew 11:14; Luke 1:17",
    "explanation": "Malachi 4:5–6 foretells the return of Elijah, fulfilling in John the Baptist's ministry.",
    "hint": "Last book of the Old Testament; starts with M.",
    "testament": "Old Testament",
    "difficulty": "easy",
    "timerSeconds": 30
  },
  {
    "level": 28,
    "challengeIndex": 5,
    "stage": 6,
    "stageTitle": "Book Connections",
    "levelTitle": "Shared Characters",
    "questionType": "Type the Book",
    "isTyped": true,
    "questionText": "TYPE THE BIBLE BOOK:\nIn which New Testament epistle does the author contrast two mountains and two covenant women, using Hagar and Sarah as an allegory for the Old Covenant of Sinai leading to slavery versus the Jerusalem above which is free and is our mother?",
    "clues": [
      "Paul writes: \"Now Hagar is Mount Sinai in Arabia; she corresponds to the present Jerusalem, for she is in slavery with her children.\"",
      "Concludes: \"So, brothers, we are not children of the slave but of the free woman.\"",
      "Found in chapter 4 of this letter."
    ],
    "options": [
      "Galatians",
      "Romans",
      "Hebrews",
      "Ephesians"
    ],
    "correctAnswer": "Galatians",
    "acceptedAlternatives": [
      "Gal"
    ],
    "reference": "Galatians 4:21–31; Genesis 16; 21",
    "explanation": "Galatians 4:21–31 is Paul's famous allegory of Hagar and Sarah representing law versus grace.",
    "hint": "Epistle to the Galatians; chapter 4.",
    "testament": "New Testament",
    "difficulty": "hard",
    "timerSeconds": 25
  },
  {
    "level": 29,
    "challengeIndex": 1,
    "stage": 6,
    "stageTitle": "Book Connections",
    "levelTitle": "Sister Epistles",
    "questionType": "Two Books, One Story",
    "isTyped": false,
    "questionText": "TWO BOOKS, ONE STORY:\nWhich TWO Pauline epistles are known as close \"sister epistles\", written around the same time during Paul's first Roman imprisonment, carried by the courier Tychicus, and sharing dozens of nearly identical phrases concerning the Body of Christ, marriage, and household relationships?",
    "clues": [
      "One emphasizes Christ as the Head of the Church (ch 1:18).",
      "The other emphasizes the Church as the Body of Christ (ch 1:22–23).",
      "Both address cities in Asia Minor (one coastal, one in the Lycus Valley)."
    ],
    "options": [
      "Ephesians and Colossians",
      "Romans and Galatians",
      "1 Timothy and Titus",
      "Philippians and Philemon"
    ],
    "correctAnswer": "Ephesians and Colossians",
    "acceptedAlternatives": [
      "Ephesians & Colossians",
      "Eph and Col"
    ],
    "reference": "Ephesians 6:21–22; Colossians 4:7–8",
    "explanation": "Ephesians and Colossians share remarkable structural, verbal, and thematic parallels, carried together by Tychicus.",
    "hint": "Ephesians and Colossians.",
    "testament": "New Testament",
    "difficulty": "medium",
    "timerSeconds": 30
  },
  {
    "level": 29,
    "challengeIndex": 2,
    "stage": 6,
    "stageTitle": "Book Connections",
    "levelTitle": "Sister Epistles",
    "questionType": "Two Books, One Story",
    "isTyped": false,
    "questionText": "TWO BOOKS, ONE STORY:\nWhich TWO General Epistles share extraordinary verbal parallels and shared themes, both warning against sensual false teachers who crept in unnoticed, citing the fallen angels kept in gloomy darkness, the judgment of Sodom and Gomorrah, and the way of Balaam?",
    "clues": [
      "One is a three-chapter letter by the Apostle Peter.",
      "The other is a single-chapter letter by the brother of James.",
      "One predicts false teachers will arise; the other states they have already crept in."
    ],
    "options": [
      "2 Peter and Jude",
      "1 Peter and 2 Peter",
      "James and 1 Peter",
      "1 John and 2 John"
    ],
    "correctAnswer": "2 Peter and Jude",
    "acceptedAlternatives": [
      "2 Peter & Jude",
      "2Pet and Jud"
    ],
    "reference": "2 Peter 2:1–22; Jude 1:4–16",
    "explanation": "2 Peter 2 and the Epistle of Jude share striking parallels in vocabulary, structure, and historical illustrations.",
    "hint": "2 Peter (chapter 2) and the Book of Jude.",
    "testament": "New Testament",
    "difficulty": "medium",
    "timerSeconds": 30
  },
  {
    "level": 29,
    "challengeIndex": 3,
    "stage": 6,
    "stageTitle": "Book Connections",
    "levelTitle": "Sister Epistles",
    "questionType": "Type the Book",
    "isTyped": true,
    "questionText": "TYPE THE BIBLE BOOK:\n1 Timothy and Titus are sister Pastoral Epistles outlining qualifications for overseers (elders). While 1 Timothy addresses a coworker ministering in the major metropolis of Ephesus, which island's rugged churches was Titus assigned to organize: \"This is why I left you in..., so that you might put what remained into order and appoint elders in every town\"?",
    "clues": [
      "A famous Mediterranean island.",
      "Home to the proverb: \"Cretans are always liars, evil beasts, lazy gluttons.\"",
      "Epistle named after Titus."
    ],
    "options": [
      "Titus",
      "1 Timothy",
      "Philemon",
      "Colossians"
    ],
    "correctAnswer": "Titus",
    "acceptedAlternatives": [
      "Tit"
    ],
    "reference": "Titus 1:5, 12",
    "explanation": "The Epistle to Titus was written to Paul's delegate Titus on the island of Crete.",
    "hint": "Paul's letter to Titus.",
    "testament": "New Testament",
    "difficulty": "medium",
    "timerSeconds": 30
  },
  {
    "level": 29,
    "challengeIndex": 4,
    "stage": 6,
    "stageTitle": "Book Connections",
    "levelTitle": "Sister Epistles",
    "questionType": "Two Books, One Story",
    "isTyped": false,
    "questionText": "TWO BOOKS, ONE STORY:\nWhich TWO consecutive single-chapter Johannine epistles open with the author identifying himself simply as \"the elder\" (ho presbyteros), one written to \"the elect lady and her children\", and the other written to \"the beloved Gaius\"?",
    "clues": [
      "Both warn against deceivers who do not confess the coming of Jesus Christ in the flesh.",
      "Both conclude: \"Though I have much to write to you, I would rather not use paper and ink. Instead I hope to come to you and talk face to face.\"",
      "Located directly before Jude."
    ],
    "options": [
      "2 John and 3 John",
      "1 John and 2 John",
      "Philemon and Jude",
      "1 Peter and 2 Peter"
    ],
    "correctAnswer": "2 John and 3 John",
    "acceptedAlternatives": [
      "2 John & 3 John",
      "2Jn and 3Jn"
    ],
    "reference": "2 John 1:1, 12; 3 John 1:1, 13–14",
    "explanation": "2 John and 3 John are short companion letters by the Apostle John, sharing the opening title \"the elder\" and closing greetings.",
    "hint": "Second and Third John.",
    "testament": "New Testament",
    "difficulty": "medium",
    "timerSeconds": 30
  },
  {
    "level": 29,
    "challengeIndex": 5,
    "stage": 6,
    "stageTitle": "Sister Epistles",
    "levelTitle": "Sister Epistles",
    "questionType": "Type the Book",
    "isTyped": true,
    "questionText": "TYPE THE BIBLE BOOK:\nIn Colossians 4:16, Paul instructs: \"And when this letter has been read among you, have it also read in the church of the Laodiceans; and see that you also read the letter from Laodicea.\" Many scholars identify the \"letter from Laodicea\" as a circular letter known in our canon by which title?",
    "clues": [
      "Carried to Asia Minor by Tychicus along with Colossians.",
      "Earliest manuscripts omit the phrase \"in Ephesus\" in verse 1:1, showing it was circulated among all regional churches.",
      "Six chapters outlining the spiritual blessings in heavenly places."
    ],
    "options": [
      "Ephesians",
      "Philippians",
      "Galatians",
      "Philemon"
    ],
    "correctAnswer": "Ephesians",
    "acceptedAlternatives": [
      "Eph"
    ],
    "reference": "Colossians 4:16; Ephesians 1:1",
    "explanation": "Most scholars identify the encyclical letter mentioned in Colossians 4:16 with the Epistle to the Ephesians.",
    "hint": "The Epistle to the Ephesians.",
    "testament": "New Testament",
    "difficulty": "hard",
    "timerSeconds": 25
  },
  {
    "level": 30,
    "challengeIndex": 1,
    "stage": 6,
    "stageTitle": "Book Connections",
    "levelTitle": "Book Connections Boss",
    "questionType": "The Book Detective",
    "isTyped": false,
    "questionText": "BOOK CONNECTIONS BOSS:\nI contain an account of the prophet Jeremiah purchasing an ancestral field in Anathoth from his cousin Hanamel for seventeen shekels of silver while the Babylonian army was actively besieging Jerusalem. God commanded me to put the deeds in an earthenware vessel so they would last a long time, promising: \"Houses and fields and vineyards shall again be bought in this land.\" In which book is this recorded?",
    "clues": [
      "A supreme demonstration of prophetic faith in Israel's future restoration after the exile.",
      "Baruch son of Neriah sealed and preserved the purchase deed.",
      "Found in chapter 32 of this major prophetic book."
    ],
    "options": [
      "Jeremiah",
      "Ezekiel",
      "Isaiah",
      "2 Kings"
    ],
    "correctAnswer": "Jeremiah",
    "acceptedAlternatives": [
      "Jer"
    ],
    "reference": "Jeremiah 32:6–15",
    "explanation": "Jeremiah 32 describes Jeremiah buying the field at Anathoth as an act of prophetic confidence in God's restoration.",
    "hint": "Book bearing the name of Jeremiah; chapter 32.",
    "testament": "Old Testament",
    "difficulty": "hard",
    "timerSeconds": 25
  },
  {
    "level": 30,
    "challengeIndex": 2,
    "stage": 6,
    "stageTitle": "Book Connections",
    "levelTitle": "Book Connections Boss",
    "questionType": "Two Books, One Story",
    "isTyped": false,
    "questionText": "TWO BOOKS, ONE STORY:\nWhich TWO books provide parallel narrative accounts of King Uzziah (Azariah) of Judah reigning 52 years, prospering in agriculture and military fortifications, but being struck with leprosy on his forehead in the temple after arrogantly attempting to burn incense on the golden altar?",
    "clues": [
      "One book notes he was quarantined in a separate house until death (2 Kings 15).",
      "The other book provides the detailed scene of eighty valiant priests opposing him (2 Chronicles 26).",
      "Isaiah saw his throne room vision in the year this king died."
    ],
    "options": [
      "2 Kings and 2 Chronicles",
      "1 Kings and 1 Chronicles",
      "2 Samuel and 1 Kings",
      "Ezra and Nehemiah"
    ],
    "correctAnswer": "2 Kings and 2 Chronicles",
    "acceptedAlternatives": [
      "2 Kings & 2 Chronicles",
      "2Kgs and 2Chr"
    ],
    "reference": "2 Kings 15:1–7; 2 Chronicles 26:16–21",
    "explanation": "Uzziah's reign and his temple leprosy are recorded in 2 Kings 15 and 2 Chronicles 26.",
    "hint": "Second Kings and Second Chronicles.",
    "testament": "Old Testament",
    "difficulty": "hard",
    "timerSeconds": 25
  },
  {
    "level": 30,
    "challengeIndex": 3,
    "stage": 6,
    "stageTitle": "Book Connections",
    "levelTitle": "Book Connections Boss",
    "questionType": "Type the Book",
    "isTyped": true,
    "questionText": "TYPE THE BIBLE BOOK:\nIn Matthew 27:9, Matthew attributes the purchase of the potter's field for thirty pieces of silver to the prophet Jeremiah: \"Then was fulfilled what had been spoken by the prophet Jeremiah...\" Which Old Testament book contains Jeremiah's visit to the potter's house and his purchase of the earthenware flask in the Valley of Hinnom that provided the conceptual background for Matthew's composite citation?",
    "clues": [
      "Chapter 18: \"Arise, and go down to the potter's house, and there I will let you hear my words.\"",
      "Chapter 19: Buying the potter's earthenware flask to smash at Topheth.",
      "Chapter 32: Purchasing the ancestral field with silver.",
      "Major prophet of 52 chapters."
    ],
    "options": [
      "Jeremiah",
      "Zechariah",
      "Isaiah",
      "Ezekiel"
    ],
    "correctAnswer": "Jeremiah",
    "acceptedAlternatives": [
      "Jer"
    ],
    "reference": "Jeremiah 18:1–6; 19:1–11; 32:6–9; Matthew 27:9–10",
    "explanation": "Matthew 27:9 cites Jeremiah because Jeremiah 18–19 (the potter and the flask of blood) and Jeremiah 32 (buying the field with silver) provided the typological foundation.",
    "hint": "The Book of Jeremiah.",
    "testament": "Both",
    "difficulty": "master",
    "timerSeconds": 20
  },
  {
    "level": 30,
    "challengeIndex": 4,
    "stage": 6,
    "stageTitle": "Book Connections",
    "levelTitle": "Book Connections Boss",
    "questionType": "The Book Detective",
    "isTyped": false,
    "questionText": "THE BOOK DETECTIVE:\nI contain an account of two royal princes, Sharezer and Adrammelech, who struck down their father King Sennacherib of Assyria with the sword while he was worshiping in the house of Nisroch his god, after which their brother Esarhaddon reigned in his place. In which book is this recorded?",
    "clues": [
      "Fulfilled the prophecy of Isaiah that God would put a spirit in Sennacherib so that he would return to his own land and fall by the sword.",
      "Occurred after the angel of the Lord destroyed his army of 185,000.",
      "Found in chapter 19 of this book."
    ],
    "options": [
      "2 Kings",
      "1 Kings",
      "1 Chronicles",
      "2 Chronicles"
    ],
    "correctAnswer": "2 Kings",
    "acceptedAlternatives": [
      "Second Kings",
      "2Kgs",
      "Isaiah"
    ],
    "reference": "2 Kings 19:36–37; Isaiah 37:37–38",
    "explanation": "2 Kings 19:37 records Sennacherib's assassination by his sons in Nineveh.",
    "hint": "Second Kings, chapter 19.",
    "testament": "Old Testament",
    "difficulty": "hard",
    "timerSeconds": 25
  },
  {
    "level": 30,
    "challengeIndex": 5,
    "stage": 6,
    "stageTitle": "Book Connections",
    "levelTitle": "Book Connections Boss",
    "questionType": "Type the Book",
    "isTyped": true,
    "questionText": "TYPE THE BIBLE BOOK:\nIn Revelation 2:14, Jesus warns the church at Pergamum: \"You have some there who hold the teaching of Balaam, who taught Balak to put a stumbling block before the sons of Israel, so that they might eat food sacrificed to idols and practice sexual immorality.\" Which Old Testament book contains the original narrative of the women of Moab seducing Israel at Baal-peor through Balaam's counsel?",
    "clues": [
      "Occurred at Shittim near the end of the wilderness journey.",
      "Phinehas the priest took a spear and ended the plague.",
      "Fourth book of the Pentateuch, chapter 25 and 31:16."
    ],
    "options": [
      "Numbers",
      "Deuteronomy",
      "Exodus",
      "Joshua"
    ],
    "correctAnswer": "Numbers",
    "acceptedAlternatives": [
      "Num"
    ],
    "reference": "Numbers 25:1–9; 31:16; Revelation 2:14",
    "explanation": "Numbers 25 and 31:16 record the sin of Baal-peor instigated by Balaam, referenced by Christ in Revelation 2:14.",
    "hint": "Fourth book of Moses; starts with Num-.",
    "testament": "Both",
    "difficulty": "master",
    "timerSeconds": 20
  }
];
