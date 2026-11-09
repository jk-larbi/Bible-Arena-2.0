import fs from 'fs';
import path from 'path';

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

const questions: RawFindBookQuestion[] = [
  // ==========================================
  // STAGE 7: FORGOTTEN BOOKS (Levels 31–35)
  // ==========================================

  // Level 31: Obadiah & Nahum
  {
    level: 31,
    challengeIndex: 1,
    stage: 7,
    stageTitle: 'Forgotten Books',
    levelTitle: 'Obadiah & Nahum',
    questionType: 'The Book Detective',
    isTyped: false,
    questionText: 'THE BOOK DETECTIVE:\nI am the shortest book in the entire Old Testament, containing exactly 21 verses. I proclaim the total downfall of the mountain kingdom of Edom for their violence and gloating against their brother Jacob when foreigners entered Jerusalem\'s gates. Which book am I?',
    clues: [
      'Pronounces judgment on Mount Seir (Esau).',
      'Declares: "As you have done, it shall be done to you; your deeds shall return on your own head."',
      'Concludes: "And the kingdom shall be the Lord\'s."',
      'Fourth of the Twelve Minor Prophets.'
    ],
    options: ['Obadiah', 'Nahum', 'Habakkuk', 'Haggai'],
    correctAnswer: 'Obadiah',
    acceptedAlternatives: ['Obad'],
    reference: 'Obadiah 1:1, 15, 21',
    explanation: 'Obadiah contains 21 verses condemning Edom and proclaiming the triumph of Mount Zion.',
    hint: 'Shortest book of the Old Testament; seven letters; begins with O.',
    testament: 'Old Testament',
    difficulty: 'medium',
    timerSeconds: 30
  },
  {
    level: 31,
    challengeIndex: 2,
    stage: 7,
    stageTitle: 'Forgotten Books',
    levelTitle: 'Obadiah & Nahum',
    questionType: 'The Book Detective',
    isTyped: false,
    questionText: 'THE BOOK DETECTIVE:\nI deliver a graphic oracle concerning the final destruction of the bloody Assyrian capital of Nineveh: "Woe to the bloody city, all full of lies and plunder—no end to the prey! The crack of the whip, and rumble of the wheel, galloping horse and bounding chariot! Horsemen charging, flashing sword and glittering spear, hosts of slain, heaps of corpses." Which book am I?',
    clues: [
      'Opens: "An oracle concerning Nineveh. The book of the vision of... of Elkosh."',
      'Written approximately a century after Jonah\'s ministry when Nineveh had relapsed into brutality.',
      'Three chapters in the Minor Prophets.'
    ],
    options: ['Nahum', 'Jonah', 'Zephaniah', 'Habakkuk'],
    correctAnswer: 'Nahum',
    acceptedAlternatives: ['Nah'],
    reference: 'Nahum 1:1; 3:1–3',
    explanation: 'Nahum vividly foretells the military destruction of Nineveh in 612 BC.',
    hint: 'Five-letter prophet of Elkosh; starts with N.',
    testament: 'Old Testament',
    difficulty: 'medium',
    timerSeconds: 30
  },
  {
    level: 31,
    challengeIndex: 3,
    stage: 7,
    stageTitle: 'Forgotten Books',
    levelTitle: 'Obadiah & Nahum',
    questionType: 'Type the Book',
    isTyped: true,
    questionText: 'TYPE THE BIBLE BOOK:\nWhich book contains this celebrated messianic herald verse cited by both Isaiah and the Apostle Paul: "Behold, upon the mountains, the feet of him who brings good news, who publishes peace! Keep your feasts, O Judah; fulfill your vows, for never again shall the worthless pass through you; he is utterly cut off"?',
    clues: [
      'Occurs at the end of chapter 1 of this three-chapter prophetic book.',
      'Announces relief to Judah following the downfall of the Assyrian oppressor.',
      'Written by the prophet from Elkosh.'
    ],
    options: ['Nahum', 'Isaiah', 'Romans', 'Micah'],
    correctAnswer: 'Nahum',
    acceptedAlternatives: ['Nah'],
    reference: 'Nahum 1:15; Isaiah 52:7; Romans 10:15',
    explanation: 'Nahum 1:15 proclaims the good news of peace upon the mountains of Judah.',
    hint: 'Five-letter book name; starts with N; ends with -hum.',
    testament: 'Old Testament',
    difficulty: 'hard',
    timerSeconds: 25
  },
  {
    level: 31,
    challengeIndex: 4,
    stage: 7,
    stageTitle: 'Forgotten Books',
    levelTitle: 'Obadiah & Nahum',
    questionType: 'The Book Detective',
    isTyped: false,
    questionText: 'THE BOOK DETECTIVE:\nI compare the proud imperial fortress of Nineveh to the ancient Egyptian city of Thebes (No-Amon), asking: "Are you better than Thebes that sat by the Nile, with water around her, her rampart a sea, and water her wall? Cush was her strength; Egypt too, and that without limit... Yet she became an exile; she went into captivity." Which book am I?',
    clues: [
      'Refers to the historical Assyrian sack of Thebes in 663 BC.',
      'Warns that the conqueror Nineveh will suffer the exact same fate.',
      'Found in chapter 3 of this book.'
    ],
    options: ['Nahum', 'Ezekiel', 'Jeremiah', 'Zephaniah'],
    correctAnswer: 'Nahum',
    acceptedAlternatives: ['Nah'],
    reference: 'Nahum 3:8–10',
    explanation: 'Nahum 3:8 cites the fall of Thebes (No-Amon) to prove Nineveh cannot escape divine judgment.',
    hint: 'Minor Prophet of three chapters; starts with N.',
    testament: 'Old Testament',
    difficulty: 'hard',
    timerSeconds: 25
  },
  {
    level: 31,
    challengeIndex: 5,
    stage: 7,
    stageTitle: 'Forgotten Books',
    levelTitle: 'Obadiah & Nahum',
    questionType: 'Type the Book',
    isTyped: true,
    questionText: 'TYPE THE BIBLE BOOK:\nWhich single-chapter book contains this specific geographic detail: "The house of Jacob shall be a fire, and the house of Joseph a flame, and the house of Esau stubble... Those of the Negeb shall possess Mount Esau, and those of the Shephelah shall possess the land of the Philistines... and saviors shall go up to Mount Zion"?',
    clues: [
      'Focuses entirely on the destruction of Edom and the triumph of the Kingdom of God.',
      'Written by a prophet whose Hebrew name means "Servant of the Lord" (Yahweh).',
      'Placed fourth among the Twelve Minor Prophets.'
    ],
    options: ['Obadiah', 'Haggai', 'Zephaniah', 'Malachi'],
    correctAnswer: 'Obadiah',
    acceptedAlternatives: ['Obad'],
    reference: 'Obadiah 1:18–21',
    explanation: 'Obadiah 1:18–21 concludes with Israel\'s territorial recovery and the sovereignty of the Lord.',
    hint: 'Seven letters; starts with Ob-; shortest Old Testament book.',
    testament: 'Old Testament',
    difficulty: 'master',
    timerSeconds: 20
  },

  // Level 32: Habakkuk & Zephaniah
  {
    level: 32,
    challengeIndex: 1,
    stage: 7,
    stageTitle: 'Forgotten Books',
    levelTitle: 'Habakkuk & Zephaniah',
    questionType: 'The Book Detective',
    isTyped: false,
    questionText: 'THE BOOK DETECTIVE:\nI open with a bold theological wrestling match: "O Lord, how long shall I cry for help, and you will not hear? Or cry to you \'Violence!\' and you will not save?" When God replies that He is raising up the bitter and hasty Chaldeans whose horses are swifter than leopards, I take my stand at my watchpost to await His second answer. Which book am I?',
    clues: [
      'Contains five prophetic "woes" against greedy extortion, unjust gain, building cities with blood, drunkenness, and trusting carved idols.',
      'Features the vision written plainly on tablets: "The righteous shall live by his faith."',
      'Concludes with an ecstatic psalm set to stringed instruments.'
    ],
    options: ['Habakkuk', 'Zephaniah', 'Micah', 'Nahum'],
    correctAnswer: 'Habakkuk',
    acceptedAlternatives: ['Hab'],
    reference: 'Habakkuk 1:1–6; 2:1–4; 3:1–19',
    explanation: 'The Book of Habakkuk documents the prophet\'s dialogue with God regarding divine justice and the Babylonian invasion.',
    hint: 'Minor Prophet beginning with Hab-.',
    testament: 'Old Testament',
    difficulty: 'medium',
    timerSeconds: 30
  },
  {
    level: 32,
    challengeIndex: 2,
    stage: 7,
    stageTitle: 'Forgotten Books',
    levelTitle: 'Habakkuk & Zephaniah',
    questionType: 'The Book Detective',
    isTyped: false,
    questionText: 'THE BOOK DETECTIVE:\nI trace my ancestry four generations back to King Hezekiah, prophesying in the days of Josiah: "The great day of the Lord is near, near and hastening fast... A day of wrath is that day, a day of distress and anguish, a day of ruin and devastation, a day of darkness and gloom, a day of clouds and thick darkness." Which book am I?',
    clues: [
      'Warns those who say in their hearts: "The Lord will not do good, nor will he do ill."',
      'Commands: "Seek the Lord, all you humble of the land... seek righteousness; seek humility; perhaps you may be hidden on the day of the anger of the Lord."',
      'Ninth of the Twelve Minor Prophets.'
    ],
    options: ['Zephaniah', 'Habakkuk', 'Haggai', 'Zechariah'],
    correctAnswer: 'Zephaniah',
    acceptedAlternatives: ['Zeph'],
    reference: 'Zephaniah 1:1, 12, 14–15; 2:3',
    explanation: 'Zephaniah proclaims the universal and imminent Day of the Lord against Judah and surrounding nations.',
    hint: 'Nine-letter name starting with Z; precedes Haggai.',
    testament: 'Old Testament',
    difficulty: 'medium',
    timerSeconds: 30
  },
  {
    level: 32,
    challengeIndex: 3,
    stage: 7,
    stageTitle: 'Forgotten Books',
    levelTitle: 'Habakkuk & Zephaniah',
    questionType: 'Type the Book',
    isTyped: true,
    questionText: 'TYPE THE BIBLE BOOK:\nWhich book contains this tender prophecy of divine joy over the redeemed remnant: "The Lord your God is in your midst, a mighty one who will save; he will rejoice over you with gladness; he will quiet you by his love; he will exult over you with loud singing"?',
    clues: [
      'Found in chapter 3 verse 17.',
      'Promises to change the speech of the peoples to a pure speech that all may call upon the name of the Lord.',
      'Three-chapter Minor Prophet whose author was a great-great-grandson of King Hezekiah.'
    ],
    options: ['Zephaniah', 'Habakkuk', 'Micah', 'Hosea'],
    correctAnswer: 'Zephaniah',
    acceptedAlternatives: ['Zeph'],
    reference: 'Zephaniah 3:9, 14–17',
    explanation: 'Zephaniah 3:17 portrays God exulting over His redeemed people with singing.',
    hint: 'Starts with Z; nine letters.',
    testament: 'Old Testament',
    difficulty: 'hard',
    timerSeconds: 25
  },
  {
    level: 32,
    challengeIndex: 4,
    stage: 7,
    stageTitle: 'Forgotten Books',
    levelTitle: 'Habakkuk & Zephaniah',
    questionType: 'The Book Detective',
    isTyped: false,
    questionText: 'THE BOOK DETECTIVE:\nI contain this majestic description of God\'s theophany: "God came from Teman, and the Holy One from Mount Paran. His splendor covered the heavens, and the earth was full of his praise. His brightness was like the light; rays flashed from his hand; and there he veiled his power. Before him went pestilence, and plague followed at his heels." Which book am I?',
    clues: [
      'Describes the eternal mountains scattered and the sun and moon standing still in their place.',
      'Spoken as a prayer of the prophet upon Shigionoth in chapter 3.',
      'Concludes with deer\'s feet upon high places.'
    ],
    options: ['Habakkuk', 'Zephaniah', 'Nahum', 'Micah'],
    correctAnswer: 'Habakkuk',
    acceptedAlternatives: ['Hab'],
    reference: 'Habakkuk 3:3–5, 11',
    explanation: 'Habakkuk 3 describes the sublime appearance of the Lord marching from Teman and Paran in majesty.',
    hint: 'Book containing Habakkuk\'s prayer song.',
    testament: 'Old Testament',
    difficulty: 'hard',
    timerSeconds: 25
  },
  {
    level: 32,
    challengeIndex: 5,
    stage: 7,
    stageTitle: 'Forgotten Books',
    levelTitle: 'Habakkuk & Zephaniah',
    questionType: 'Type the Book',
    isTyped: true,
    questionText: 'TYPE THE BIBLE BOOK:\nIn which book does God pronounce judgment upon those who swear by the Lord and also swear by Milcom (Molech), and upon "the men who are complacent, those who say in their hearts, \'The Lord will not do good, nor will he do ill\'"?',
    clues: [
      'Pronounces judgment on the fish gate, the second quarter, and the Mortar district of Jerusalem.',
      'Names the prophet who was contemporary with young King Josiah.',
      'Contains 3 chapters; situated right before Haggai.'
    ],
    options: ['Zephaniah', 'Habakkuk', 'Haggai', 'Nahum'],
    correctAnswer: 'Zephaniah',
    acceptedAlternatives: ['Zeph'],
    reference: 'Zephaniah 1:5, 10–12',
    explanation: 'Zephaniah 1 condemns syncretism with Milcom and practical atheism among Jerusalem\'s elite.',
    hint: 'Begins with Z; nine letters.',
    testament: 'Old Testament',
    difficulty: 'master',
    timerSeconds: 20
  },

  // Level 33: Haggai & Malachi
  {
    level: 33,
    challengeIndex: 1,
    stage: 7,
    stageTitle: 'Forgotten Books',
    levelTitle: 'Haggai & Malachi',
    questionType: 'The Book Detective',
    isTyped: false,
    questionText: 'THE BOOK DETECTIVE:\nI contain four short, dated sermons preached in 520 BC to Governor Zerubbabel and High Priest Joshua. I confront the community: "Consider your ways. You have sown much, and harvested little. You eat, but you never have enough... and he who earns wages does so to put them into a bag with holes. Go up to the hills and bring wood and build the house, that I may take pleasure in it." Which book am I?',
    clues: [
      'Two chapters in length.',
      'Promises that "The latter glory of this house shall be greater than the former."',
      'Concludes with God promising to make Zerubbabel "like a signet ring, for I have chosen you."'
    ],
    options: ['Haggai', 'Zechariah', 'Malachi', 'Ezra'],
    correctAnswer: 'Haggai',
    acceptedAlternatives: ['Hag'],
    reference: 'Haggai 1:5–8; 2:9, 23',
    explanation: 'Haggai motivated the returned Jewish exiles to rebuild the neglected temple of the Lord.',
    hint: 'Two-chapter post-exilic book; starts with H.',
    testament: 'Old Testament',
    difficulty: 'medium',
    timerSeconds: 30
  },
  {
    level: 33,
    challengeIndex: 2,
    stage: 7,
    stageTitle: 'Forgotten Books',
    levelTitle: 'Haggai & Malachi',
    questionType: 'The Book Detective',
    isTyped: false,
    questionText: 'THE BOOK DETECTIVE:\nI am the final voice of the Old Testament, delivering a four-chapter oracle structured around six sharp disputations where priests and people challenge God: "How have you loved us?", "How have we despised your name?", and "How have we robbed you?" In which book is this recorded?',
    clues: [
      'Rebukes the priests for offering blind, lame, and sick animals on the altar.',
      'Pronounces: "For I the Lord do not change; therefore you, O children of Jacob, are not consumed."',
      'Famous for the storehouse tithe command (ch 3:10).'
    ],
    options: ['Malachi', 'Haggai', 'Zechariah', 'Nehemiah'],
    correctAnswer: 'Malachi',
    acceptedAlternatives: ['Mal'],
    reference: 'Malachi 1:2, 6–8; 3:6–10',
    explanation: 'Malachi uses a disputation method to confront cold ritualism, divorce, and social apathy.',
    hint: '39th and final book of the Old Testament.',
    testament: 'Old Testament',
    difficulty: 'easy',
    timerSeconds: 30
  },
  {
    level: 33,
    challengeIndex: 3,
    stage: 7,
    stageTitle: 'Forgotten Books',
    levelTitle: 'Haggai & Malachi',
    questionType: 'Type the Book',
    isTyped: true,
    questionText: 'TYPE THE BIBLE BOOK:\nWhich book declares: "For from the rising of the sun to its setting my name will be great among the nations, and in every place incense will be offered to my name, and a pure offering. For my name will be great among the nations, says the Lord of hosts"?',
    clues: [
      'Contrasts the faithless offerings of Jerusalem\'s priesthood with universal Gentile worship.',
      'Found in chapter 1 verse 11 of this final prophetic book.',
      'Hebrew title means "My Messenger".'
    ],
    options: ['Malachi', 'Haggai', 'Zechariah', 'Isaiah'],
    correctAnswer: 'Malachi',
    acceptedAlternatives: ['Mal'],
    reference: 'Malachi 1:11',
    explanation: 'Malachi 1:11 prophesies universal global worship of God\'s holy name among all nations.',
    hint: 'Final book of the Old Testament; seven letters.',
    testament: 'Old Testament',
    difficulty: 'hard',
    timerSeconds: 25
  },
  {
    level: 33,
    challengeIndex: 4,
    stage: 7,
    stageTitle: 'Forgotten Books',
    levelTitle: 'Haggai & Malachi',
    questionType: 'The Book Detective',
    isTyped: false,
    questionText: 'THE BOOK DETECTIVE:\nIn which book does God ask the priests questions regarding ritual holiness: "If someone carries holy meat in the fold of his garment and touches with his fold bread or stew or wine or oil, does it become holy?" and "If one who is unclean by reason of a dead body touches any of these, does it become unclean?"',
    clues: [
      'The priests correctly answered that holiness is not contagious, but defilement is contagious.',
      'God applied this to their delayed building: whatever they offered on their ruined altar was defiled.',
      'Dated to the 24th day of the ninth month in the second year of Darius.'
    ],
    options: ['Haggai', 'Leviticus', 'Numbers', 'Zechariah'],
    correctAnswer: 'Haggai',
    acceptedAlternatives: ['Hag'],
    reference: 'Haggai 2:11–14',
    explanation: 'Haggai 2:11–14 uses a priestly ruling on defilement to teach that empty ritual without obedience is impure.',
    hint: 'Two-chapter book; begins with H.',
    testament: 'Old Testament',
    difficulty: 'hard',
    timerSeconds: 25
  },
  {
    level: 33,
    challengeIndex: 5,
    stage: 7,
    stageTitle: 'Forgotten Books',
    levelTitle: 'Haggai & Malachi',
    questionType: 'Type the Book',
    isTyped: true,
    questionText: 'TYPE THE BIBLE BOOK:\nWhich book mentions a "book of remembrance" written before the Lord for those who feared the Lord and esteemed His name, promising: "They shall be mine, says the Lord of hosts, in the day when I make up my treasured possession, and I will spare them as a man spares his son who serves him"?',
    clues: [
      'Precedes the promise: "For behold, the day is coming, burning like an oven."',
      'Promises that "the sun of righteousness shall rise with healing in its wings."',
      'Recorded in chapter 3 of this final Old Testament book.'
    ],
    options: ['Malachi', 'Zechariah', 'Daniel', 'Revelation'],
    correctAnswer: 'Malachi',
    acceptedAlternatives: ['Mal'],
    reference: 'Malachi 3:16–17; 4:2',
    explanation: 'Malachi 3:16–17 describes the book of remembrance for the faithful remnant in Israel.',
    hint: 'Book of Malachi; chapter 3.',
    testament: 'Old Testament',
    difficulty: 'master',
    timerSeconds: 20
  },

  // Level 34: Philemon, 2 John, & 3 John
  {
    level: 34,
    challengeIndex: 1,
    stage: 7,
    stageTitle: 'Forgotten Books',
    levelTitle: 'Philemon, 2 John, & 3 John',
    questionType: 'The Book Detective',
    isTyped: false,
    questionText: 'THE BOOK DETECTIVE:\nI am a personal letter of only 25 verses written by the Apostle Paul in chains to a fellow worker in Colossae. I intercede on behalf of a runaway slave who became a believer in Rome, appealing not on the basis of apostolic authority, but for love\'s sake: "If you consider me your partner, receive him as you would receive me." Which book am I?',
    clues: [
      'Addressed also to Apphia our sister and Archippus our fellow soldier.',
      'Puns on the slave\'s name (Onesimus, meaning "useful"): "Formerly he was useless to you, but now he is indeed useful to you and to me."',
      'Single chapter located between Titus and Hebrews.'
    ],
    options: ['Philemon', 'Colossians', 'Titus', 'Philippians'],
    correctAnswer: 'Philemon',
    acceptedAlternatives: ['Phlm', 'Phm'],
    reference: 'Philemon 1:1, 11, 17',
    explanation: 'The Epistle to Philemon is Paul\'s shortest extant letter, appealing for the reconciliation of Onesimus.',
    hint: 'Single-chapter letter named after the slave-owner.',
    testament: 'New Testament',
    difficulty: 'medium',
    timerSeconds: 30
  },
  {
    level: 34,
    challengeIndex: 2,
    stage: 7,
    stageTitle: 'Forgotten Books',
    levelTitle: 'Philemon, 2 John, & 3 John',
    questionType: 'The Book Detective',
    isTyped: false,
    questionText: 'THE BOOK DETECTIVE:\nI am a single-chapter letter of 13 verses addressed by "the elder" to "the elect lady and her children." I warn against deceivers who do not confess the coming of Jesus Christ in the flesh, commanding: "If anyone comes to you and does not bring this teaching, do not receive him into your house or give him any greeting." Which book am I?',
    clues: [
      'Emphasizes walking in truth and obeying the commandment: "that we love one another."',
      'Warns: "Watch yourselves, so that you may not lose what we have worked for, but may win a full reward."',
      'Situated directly between 1 John and 3 John.'
    ],
    options: ['2 John', '3 John', '1 John', 'Jude'],
    correctAnswer: '2 John',
    acceptedAlternatives: ['Second John', '2Jn'],
    reference: '2 John 1:1, 5, 8, 10',
    explanation: '2 John addresses "the elect lady" (a local church), warning against providing hospitality to itinerant heretics.',
    hint: 'Second letter of John; 13 verses.',
    testament: 'New Testament',
    difficulty: 'medium',
    timerSeconds: 30
  },
  {
    level: 34,
    challengeIndex: 3,
    stage: 7,
    stageTitle: 'Forgotten Books',
    levelTitle: 'Philemon, 2 John, & 3 John',
    questionType: 'Type the Book',
    isTyped: true,
    questionText: 'TYPE THE BIBLE BOOK:\nWhich single-chapter epistle rebukes an arrogant local church leader named Diotrephes, "who likes to put himself first, does not acknowledge our authority... talking wicked nonsense against us, refuses to welcome the brothers, and stops those who want to and puts them out of the church"?',
    clues: [
      'Written to "the beloved Gaius" commending him for showing hospitality to traveling missionaries.',
      'Commends Demetrius who has received a good testimony from everyone.',
      'Comprises 14 verses; stands directly before Jude.'
    ],
    options: ['3 John', '2 John', 'Jude', 'Philemon'],
    correctAnswer: '3 John',
    acceptedAlternatives: ['Third John', '3Jn'],
    reference: '3 John 1:1, 9–10, 12',
    explanation: '3 John contrasts the generous hospitality of Gaius with the domineering pride of Diotrephes.',
    hint: 'Third letter of John; begins with 3.',
    testament: 'New Testament',
    difficulty: 'hard',
    timerSeconds: 25
  },
  {
    level: 34,
    challengeIndex: 4,
    stage: 7,
    stageTitle: 'Forgotten Books',
    levelTitle: 'Philemon, 2 John, & 3 John',
    questionType: 'The Book Detective',
    isTyped: false,
    questionText: 'THE BOOK DETECTIVE:\nI contain this personal, intimate offer from Paul: "I, Paul, write this with my own hand: I will repay it—to say nothing of your owing me even your own self. Yes, brother, I want some benefit from you in the Lord. Refresh my heart in Christ. Confident of your obedience, I write to you, knowing that you will do even more than I say." Which book am I?',
    clues: [
      'Paul asks for a guest room to be prepared, hoping through their prayers to be released.',
      'Sends greetings from Epaphras, Mark, Aristarchus, Demas, and Luke.',
      'Contains only 25 verses.'
    ],
    options: ['Philemon', 'Colossians', 'Titus', 'Philippians'],
    correctAnswer: 'Philemon',
    acceptedAlternatives: ['Phlm', 'Phm'],
    reference: 'Philemon 1:19–22',
    explanation: 'Philemon 1:19–22 is Paul\'s promissory note written in his own hand to secure Onesimus\' full pardon.',
    hint: 'Epistle to Philemon.',
    testament: 'New Testament',
    difficulty: 'medium',
    timerSeconds: 30
  },
  {
    level: 34,
    challengeIndex: 5,
    stage: 7,
    stageTitle: 'Forgotten Books',
    levelTitle: 'Philemon, 2 John, & 3 John',
    questionType: 'Type the Book',
    isTyped: true,
    questionText: 'TYPE THE BIBLE BOOK:\nWhich single-chapter epistle opens with the warm pastoral prayer: "Beloved, I pray that all may go well with you and that you may be in good health, as it goes well with your soul. For I rejoiced greatly when the brothers came and testified to your truth, as indeed you are walking in the truth"?',
    clues: [
      'Addressed to Gaius by "the elder".',
      'Declares: "I have no greater joy than to hear that my children are walking in the truth."',
      'Shortest book in the New Testament by total Greek words.'
    ],
    options: ['3 John', '2 John', 'Philemon', 'Jude'],
    correctAnswer: '3 John',
    acceptedAlternatives: ['Third John', '3Jn'],
    reference: '3 John 1:2–4',
    explanation: '3 John 1:2–4 opens with John\'s blessing over Gaius\' spiritual and physical well-being.',
    hint: 'Third Epistle of John; begins with 3.',
    testament: 'New Testament',
    difficulty: 'master',
    timerSeconds: 20
  },

  // Level 35: Forgotten Books Boss
  {
    level: 35,
    challengeIndex: 1,
    stage: 7,
    stageTitle: 'Forgotten Books',
    levelTitle: 'Forgotten Books Boss',
    questionType: 'The Book Detective',
    isTyped: false,
    questionText: 'FORGOTTEN BOOKS BOSS:\nI cite an extraordinary extra-biblical dispute: "When the archangel Michael, contending with the devil, was disputing about the body of Moses, he did not presume to pronounce a blasphemous judgment, but said, \'The Lord rebuke you.\'" Which book am I?',
    clues: [
      'Cites also the ancient Jewish work the Assumption of Moses and the prophecy of Enoch.',
      'Identifies the author as "a servant of Jesus Christ and brother of James."',
      'Concludes with one of the most famous doxologies in the entire Bible: "Now to him who is able to keep you from stumbling..."'
    ],
    options: ['Jude', '2 Peter', 'Revelation', 'Hebrews'],
    correctAnswer: 'Jude',
    acceptedAlternatives: ['Jud'],
    reference: 'Jude 1:1, 9, 14, 24–25',
    explanation: 'Jude 1:9 exclusively records the archangel Michael disputing with Satan over the body of Moses.',
    hint: 'Single-chapter epistle before Revelation; four letters; starts with J.',
    testament: 'New Testament',
    difficulty: 'hard',
    timerSeconds: 25
  },
  {
    level: 35,
    challengeIndex: 2,
    stage: 7,
    stageTitle: 'Forgotten Books',
    levelTitle: 'Forgotten Books Boss',
    questionType: 'The Book Detective',
    isTyped: false,
    questionText: 'FORGOTTEN BOOKS BOSS:\nIn which Minor Prophet does God challenge Israel regarding their withheld tithes: "Will man rob God? Yet you are robbing me. But you say, \'How have we robbed you?\' In your tithes and contributions. You are cursed with a curse, for you are robbing me, the whole nation of you. Bring the full tithe into the storehouse... and thereby put me to the test, says the Lord of hosts, if I will not open the windows of heaven for you"?',
    clues: [
      'Promises that God will rebuke the devourer for their sake.',
      'Final book before the 400 years of intertestamental silence.',
      'Four chapters.'
    ],
    options: ['Malachi', 'Haggai', 'Zechariah', 'Micah'],
    correctAnswer: 'Malachi',
    acceptedAlternatives: ['Mal'],
    reference: 'Malachi 3:8–10',
    explanation: 'Malachi 3:8–10 contains God\'s famous challenge concerning the storehouse tithe.',
    hint: 'Final book of the Old Testament.',
    testament: 'Old Testament',
    difficulty: 'medium',
    timerSeconds: 25
  },
  {
    level: 35,
    challengeIndex: 3,
    stage: 7,
    stageTitle: 'Forgotten Books',
    levelTitle: 'Forgotten Books Boss',
    questionType: 'Type the Book',
    isTyped: true,
    questionText: 'TYPE THE BIBLE BOOK:\nWhich book contains this cosmic shaking prophecy quoted in Hebrews 12:26: "For thus says the Lord of hosts: Yet once more, in a little while, I will shake the heavens and the earth and the sea and the dry land. And I will shake all nations, so that the treasures of all nations shall come in, and I will fill this house with glory"?',
    clues: [
      'Addressed to the returnees rebuilding the second temple.',
      'Dated to the second year of King Darius.',
      'Two-chapter post-exilic prophetic book.'
    ],
    options: ['Haggai', 'Zechariah', 'Malachi', 'Joel'],
    correctAnswer: 'Haggai',
    acceptedAlternatives: ['Hag'],
    reference: 'Haggai 2:6–7; Hebrews 12:26',
    explanation: 'Haggai 2:6–7 is the prophecy of God shaking the heavens and earth, cited in Hebrews 12:26.',
    hint: 'Two-chapter book; begins with H.',
    testament: 'Old Testament',
    difficulty: 'hard',
    timerSeconds: 25
  },
  {
    level: 35,
    challengeIndex: 4,
    stage: 7,
    stageTitle: 'Forgotten Books',
    levelTitle: 'Forgotten Books Boss',
    questionType: 'The Book Detective',
    isTyped: false,
    questionText: 'FORGOTTEN BOOKS BOSS:\nI describe corrupt apostates with vivid cosmic metaphors: "These are hidden reefs at your love feasts, as they feast with you without fear, shepherds feeding themselves; waterless clouds, swept along by winds; fruitless trees in late autumn, twice dead, uprooted; wild waves of the sea, casting up the foam of their own shame; wandering stars, for whom the gloom of utter darkness has been reserved forever." Which book am I?',
    clues: [
      'Urges believers: "Build yourselves up in your most holy faith and pray in the Holy Spirit; keep yourselves in the love of God."',
      'Calls for mercy on those who doubt and snatching others out of the fire.',
      'Penultimate book of the Christian Bible.'
    ],
    options: ['Jude', '2 Peter', 'James', 'Revelation'],
    correctAnswer: 'Jude',
    acceptedAlternatives: ['Jud'],
    reference: 'Jude 1:12–13, 20–23',
    explanation: 'Jude 1:12–13 employs vivid poetic imagery (clouds without water, wild waves, wandering stars) to depict false teachers.',
    hint: 'The single-chapter Epistle of Jude.',
    testament: 'New Testament',
    difficulty: 'master',
    timerSeconds: 20
  },
  {
    level: 35,
    challengeIndex: 5,
    stage: 7,
    stageTitle: 'Forgotten Books',
    levelTitle: 'Forgotten Books Boss',
    questionType: 'Type the Book',
    isTyped: true,
    questionText: 'TYPE THE BIBLE BOOK:\nIn which book does the author warn: "Everyone who goes on ahead and does not abide in the teaching of Christ, does not have God. Whoever abides in the teaching has both the Father and the Son. If anyone comes to you and does not bring this teaching, do not receive him into your house or give him any greeting, for whoever greets him takes part in his wicked works"?',
    clues: [
      'Written by "the elder" to "the elect lady and her children."',
      'Contains exactly 13 verses.',
      'Second epistle bearing the Apostle John\'s name.'
    ],
    options: ['2 John', '3 John', '1 John', 'Jude'],
    correctAnswer: '2 John',
    acceptedAlternatives: ['Second John', '2Jn'],
    reference: '2 John 1:9–11',
    explanation: '2 John 1:9–11 commands strict separation from teachers who deny Christ\'s true incarnation.',
    hint: 'Second Epistle of John; begins with 2.',
    testament: 'New Testament',
    difficulty: 'master',
    timerSeconds: 20
  }
];

fs.writeFileSync(
  path.join(process.cwd(), 'scripts', 'findBookStages7to10.ts'),
  `// Find the Bible Book — Stages 7–10 (Levels 31–50, 100 Questions)\n// Verified challenging Bible book identification covering forgotten books, book traps, and expert master challenges.\n\nimport type { RawFindBookQuestion } from './findBookStages1to3';\n\nexport const FIND_BOOK_STAGES_7_TO_10: RawFindBookQuestion[] = ${JSON.stringify(
    questions,
    null,
    2
  )};\n`
);

console.log(`Generated ${questions.length} questions for Stages 7–10.`);
