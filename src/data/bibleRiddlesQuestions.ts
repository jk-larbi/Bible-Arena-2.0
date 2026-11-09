// Bible Riddles — Complete 50 Levels · 250 Riddles Bank
// 10 Stages × 5 Levels × 5 Challenges
// Curated with mysterious, indirect, scripture-faithful biblical riddles and type-the-answer support.

export interface BibleRiddleChallengeItem {
  id: string;
  game_slug: 'bible-riddles';
  level: number;
  challenge_index: number;
  question_text: string;
  options: string[];
  correct_answer: string;
  explanation: string;
  reference: string;
  metadata: {
    riddle_type: string;
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

export const BIBLE_RIDDLES_QUESTIONS: BibleRiddleChallengeItem[] = [
  {
    "id": "bible-riddles-l1-c1",
    "game_slug": "bible-riddles",
    "level": 1,
    "challenge_index": 1,
    "question_text": "WHO AM I?\nMy assignment concerned a foreign city of great wickedness, but my first recorded instinct was to board a ship heading across the sea in the opposite direction. Even after my mission succeeded and thousands repented, my own reaction became the subject of a divine lesson involving a scorching wind, a worm, and a withered leafy plant. Who am I?",
    "options": [
      "Jonah",
      "Amos",
      "Nahum",
      "Micah"
    ],
    "correct_answer": "Jonah",
    "explanation": "Jonah fled to Tarshish, was swallowed by a great fish, preached repentance to Nineveh, and was reproved through the withered plant.",
    "reference": "Jonah 1:1–3; 3:1–10; 4:5–11",
    "metadata": {
      "riddle_type": "Who Am I?",
      "is_typed": false,
      "clues": [
        "Fled towards Tarshish from the presence of the Lord.",
        "Spent three days and three nights in the belly of a great fish.",
        "Angered because Nineveh received mercy."
      ],
      "hint": "Reluctant prophet to Nineveh whose book ends with God’s compassion.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Jonas"
      ],
      "stage": 1,
      "stage_title": "Riddle Foundations",
      "level_theme": "Foundations of Faith & Mystery",
      "difficulty": "easy",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l1-c2",
    "game_slug": "bible-riddles",
    "level": 1,
    "challenge_index": 2,
    "question_text": "WHAT AM I?\nI was crafted from bronze and hoisted upon a pole in the wilderness so that venomous bites would not prove fatal to those who looked upon me in faith. Centuries later, an upright king of Judah shattered me to pieces because Israel burned incense to me as an idol and named me Nehushtan. What am I?",
    "options": [
      "The Bronze Serpent",
      "The Golden Calf",
      "The Bronze Altar",
      "The Bronze Basin"
    ],
    "correct_answer": "The Bronze Serpent",
    "explanation": "Moses made a bronze serpent; King Hezekiah later broke it in pieces when Israel turned it into an idol named Nehushtan.",
    "reference": "Numbers 21:8–9; 2 Kings 18:4; John 3:14",
    "metadata": {
      "riddle_type": "What Am I?",
      "is_typed": false,
      "clues": [
        "Commissioned during fiery serpent attacks in the desert of Edom.",
        "Jesus compared His own crucifixion to my being lifted up (John 3:14).",
        "Destroyed during Hezekiah’s religious reforms."
      ],
      "hint": "Mounted on a wilderness pole to cure fiery serpent bites.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Bronze Serpent",
        "Brazen Serpent",
        "Nehushtan",
        "Copper Serpent"
      ],
      "stage": 1,
      "stage_title": "Riddle Foundations",
      "level_theme": "Foundations of Faith & Mystery",
      "difficulty": "easy",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l1-c3",
    "game_slug": "bible-riddles",
    "level": 1,
    "challenge_index": 3,
    "question_text": "WHERE AM I?\nI was a fortified city whose downfall was brought about by neither battering rams nor siege ramps, but by seven priests carrying ram’s horn trumpets before the Ark, daily circumambulations, and a unified shout of triumph on the seventh day. Only the household of an innkeeper displaying a scarlet cord was spared. What city am I?",
    "options": [
      "Jericho",
      "Ai",
      "Gibeon",
      "Hazor"
    ],
    "correct_answer": "Jericho",
    "explanation": "Jericho fell when Joshua’s army marched around it for seven days and shouted; Rahab was saved by the scarlet cord.",
    "reference": "Joshua 6:1–25; Hebrews 11:30",
    "metadata": {
      "riddle_type": "Where Am I?",
      "is_typed": false,
      "clues": [
        "Located in the Jordan Valley north of the Dead Sea.",
        "Walls fell flat after seven days of marching.",
        "Rahab the harlot and her family survived within my ruins."
      ],
      "hint": "First fortified Canaanite city conquered by Joshua.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "City of Palm Trees"
      ],
      "stage": 1,
      "stage_title": "Riddle Foundations",
      "level_theme": "Foundations of Faith & Mystery",
      "difficulty": "easy",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l1-c4",
    "game_slug": "bible-riddles",
    "level": 1,
    "challenge_index": 4,
    "question_text": "THE THREE-CLUE RIDDLE:\nClue 1: I was a foreigner living in Moab until grief and covenant devotion compelled me to leave my homeland.\nClue 2: I gleaned barley behind the reapers in the field of a wealthy landowner.\nClue 3: Through the law of the kinsman-redeemer, I became the great-grandmother of King David. Who am I?",
    "options": [
      "Ruth",
      "Orpah",
      "Naomi",
      "Tamar"
    ],
    "correct_answer": "Ruth",
    "explanation": "Ruth the Moabitess declared \"Your people shall be my people\", married Boaz, and became ancestral mother to King David and Christ.",
    "reference": "Ruth 1:16–17; 3:1–9; 4:13–22",
    "metadata": {
      "riddle_type": "The Three-Clue Riddle",
      "is_typed": false,
      "clues": [
        "Clue 1: Cleaved to Naomi when Orpah turned back.",
        "Clue 2: Laid at the feet of Boaz on the threshing floor.",
        "Clue 3: Bore Obed, father of Jesse, father of David."
      ],
      "hint": "Moabite daughter-in-law of Naomi.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Ruth the Moabitess"
      ],
      "stage": 1,
      "stage_title": "Riddle Foundations",
      "level_theme": "Foundations of Faith & Mystery",
      "difficulty": "easy",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l1-c5",
    "game_slug": "bible-riddles",
    "level": 1,
    "challenge_index": 5,
    "question_text": "TYPE THE NAME — MINI-BOSS RIDDLE:\nI was a left-handed Benjamite whom God raised up as a deliverer when Israel was oppressed by Moab. Having concealed an eighteen-inch double-edged dagger under my clothing on my right thigh, I secured a private audience with the obese King Eglon under the pretext of delivering a secret message from God, and dispatched him in his cool roof chamber. Who am I?",
    "options": [
      "Ehud",
      "Shamgar",
      "Othniel",
      "Gideon"
    ],
    "correct_answer": "Ehud",
    "explanation": "Ehud the left-handed Benjamite killed Eglon king of Moab with a double-edged dagger strapped to his right thigh.",
    "reference": "Judges 3:15–26",
    "metadata": {
      "riddle_type": "Type the Name",
      "is_typed": true,
      "clues": [
        "Son of Gera, from the tribe of Benjamin.",
        "Took advantage of being left-handed to bypass normal weapon inspections.",
        "Escaped through the porch after locking the doors of the roof chamber."
      ],
      "hint": "Left-handed judge of Israel; assassinated King Eglon.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Ehud son of Gera",
        "Ehud ben Gera"
      ],
      "stage": 1,
      "stage_title": "Riddle Foundations",
      "level_theme": "Foundations of Faith & Mystery",
      "difficulty": "medium",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l2-c1",
    "game_slug": "bible-riddles",
    "level": 2,
    "challenge_index": 1,
    "question_text": "WHO AM I?\nI possessed unequaled wisdom, built a temple adorned with gold and cedar of Lebanon, and was visited by a wealthy queen from the south who arrived with camels bearing spices and precious stones to test me with hard questions. Who am I?",
    "options": [
      "Solomon",
      "David",
      "Hezekiah",
      "Josiah"
    ],
    "correct_answer": "Solomon",
    "explanation": "King Solomon built the Jerusalem Temple, judged wisely with the two mothers, and was visited by the Queen of Sheba.",
    "reference": "1 Kings 3:5–12; 4:29–34; 10:1–13",
    "metadata": {
      "riddle_type": "Who Am I?",
      "is_typed": false,
      "clues": [
        "Asked God for an understanding heart rather than long life or riches.",
        "Proposed dividing a baby with a sword to discover the true mother.",
        "Authored proverbs and songs, but was led astray by foreign wives."
      ],
      "hint": "Son of David and Bathsheba famed for wisdom.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Jedidiah",
        "King Solomon"
      ],
      "stage": 1,
      "stage_title": "Riddle Foundations",
      "level_theme": "Kings, Prophets & Curiosities",
      "difficulty": "easy",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l2-c2",
    "game_slug": "bible-riddles",
    "level": 2,
    "challenge_index": 2,
    "question_text": "WHAT AM I?\nCarried by a Levite woman in secret for three months, I was coated with pitch and bitumen to float among the reeds along the bank of the Nile. My tiny crying passenger was discovered by a bathing princess and nursed by his own mother. What am I?",
    "options": [
      "Moses’ Papyrus Basket",
      "The Ark of the Covenant",
      "Noah’s Ark",
      "The Golden Censer"
    ],
    "correct_answer": "Moses’ Papyrus Basket",
    "explanation": "Jochebed placed baby Moses in an ark of bulrushes daubed with pitch along the Nile, where Pharaoh’s daughter rescued him.",
    "reference": "Exodus 2:1–10",
    "metadata": {
      "riddle_type": "What Am I?",
      "is_typed": false,
      "clues": [
        "Made of papyrus reeds (bulrushes).",
        "Placed near the riverbank where Pharaoh’s daughter came down to wash.",
        "Watched from afar by Miriam, the child’s older sister."
      ],
      "hint": "Reed vessel that preserved baby Moses in the Nile.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Papyrus Basket",
        "Ark of Bulrushes",
        "Basket of Bulrushes",
        "Moses Basket"
      ],
      "stage": 1,
      "stage_title": "Riddle Foundations",
      "level_theme": "Kings, Prophets & Curiosities",
      "difficulty": "easy",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l2-c3",
    "game_slug": "bible-riddles",
    "level": 2,
    "challenge_index": 3,
    "question_text": "WHERE AM I?\nI was a dramatic coastal mountain ridge where a lone prophet of Yahweh confronted 450 prophets of Baal and 400 prophets of Asherah. Fire fell from heaven to consume a water-drenched sacrifice, after which the false prophets were slaughtered in the Kishon valley below. What mountain am I?",
    "options": [
      "Mount Carmel",
      "Mount Sinai",
      "Mount Horeb",
      "Mount Nebo"
    ],
    "correct_answer": "Mount Carmel",
    "explanation": "Mount Carmel was the site of Elijah’s altar contest with the prophets of Baal, where fire fell from heaven to consume the wet offering.",
    "reference": "1 Kings 18:19–40",
    "metadata": {
      "riddle_type": "Where Am I?",
      "is_typed": false,
      "clues": [
        "Overlooks the Mediterranean Sea and the Jezreel Valley.",
        "Site where Elijah asked: \"How long will you go limping between two different opinions?\"",
        "Prophet’s servant saw a small cloud the size of a man’s hand rising from the sea."
      ],
      "hint": "Mountain of Elijah’s fire contest with the prophets of Baal.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Carmel"
      ],
      "stage": 1,
      "stage_title": "Riddle Foundations",
      "level_theme": "Kings, Prophets & Curiosities",
      "difficulty": "easy",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l2-c4",
    "game_slug": "bible-riddles",
    "level": 2,
    "challenge_index": 4,
    "question_text": "THE THREE-CLUE RIDDLE:\nClue 1: I was an upright tax collector in Jericho who was short of stature.\nClue 2: I climbed up into a sycamore-fig tree to see Jesus passing by.\nClue 3: Jesus invited Himself to my house, and I pledged half my goods to the poor and fourfold restitution. Who am I?",
    "options": [
      "Zacchaeus",
      "Matthew",
      "Nicodemus",
      "Bartimaeus"
    ],
    "correct_answer": "Zacchaeus",
    "explanation": "Zacchaeus was the wealthy chief tax collector in Jericho who climbed a sycamore tree to see Jesus.",
    "reference": "Luke 19:1–10",
    "metadata": {
      "riddle_type": "The Three-Clue Riddle",
      "is_typed": false,
      "clues": [
        "Chief tax collector in Jericho.",
        "Jesus said to me: \"Today salvation has come to this house.\"",
        "Name begins with Z."
      ],
      "hint": "Short tax collector who climbed a sycamore tree.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Zaccheus"
      ],
      "stage": 1,
      "stage_title": "Riddle Foundations",
      "level_theme": "Kings, Prophets & Curiosities",
      "difficulty": "easy",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l2-c5",
    "game_slug": "bible-riddles",
    "level": 2,
    "challenge_index": 5,
    "question_text": "TYPE THE NAME — MINI-BOSS RIDDLE:\nI was an Ethiopian court eunuch and high official in charge of the treasury of Candace, queen of the Ethiopians. I had traveled to Jerusalem to worship and was sitting in my chariot on the desert road to Gaza reading the prophet Isaiah when an evangelist joined me and explained the suffering servant passage. Who was the evangelist who baptized me in roadside water?",
    "options": [
      "Philip",
      "Stephen",
      "Barnabas",
      "Silas"
    ],
    "correct_answer": "Philip",
    "explanation": "Philip the Evangelist ran alongside the chariot, preached Jesus from Isaiah 53, and baptized the Ethiopian eunuch.",
    "reference": "Acts 8:26–40",
    "metadata": {
      "riddle_type": "Type the Name",
      "is_typed": true,
      "clues": [
        "One of the seven chosen to serve tables in Jerusalem (Acts 6).",
        "Preached Christ in Samaria with great signs before being directed to the desert.",
        "Carried away by the Spirit of the Lord to Azotus after the baptism."
      ],
      "hint": "Evangelist who met the Ethiopian eunuch on the Gaza road.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Philip the Evangelist",
        "Philip the Deacon"
      ],
      "stage": 1,
      "stage_title": "Riddle Foundations",
      "level_theme": "Kings, Prophets & Curiosities",
      "difficulty": "medium",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l3-c1",
    "game_slug": "bible-riddles",
    "level": 3,
    "challenge_index": 1,
    "question_text": "WHAT AM I?\nI was an acacia-wood chest overlaid inside and out with pure gold, crowned by a solid gold mercy seat flanked by two overshadowing cherubim. Carried by Levites on poles, I contained the two stone tablets of the testimony, a golden pot of manna, and a rod that miraculously blossomed. What am I?",
    "options": [
      "The Ark of the Covenant",
      "The Altar of Incense",
      "The Table of Showbread",
      "The Golden Lampstand"
    ],
    "correct_answer": "The Ark of the Covenant",
    "explanation": "The Ark of the Covenant was the centerpiece of the sanctuary, overlaid with gold and topped with the mercy seat.",
    "reference": "Exodus 25:10–22; Hebrews 9:4–5",
    "metadata": {
      "riddle_type": "What Am I?",
      "is_typed": false,
      "clues": [
        "Stood in the Holy of Holies behind the veil.",
        "Sprinkled with blood once a year on the Day of Atonement (Yom Kippur).",
        "Captured by the Philistines at Ebenezer and placed in Dagon’s temple."
      ],
      "hint": "Golden chest in the Holy of Holies topped by the mercy seat.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Ark of the Covenant",
        "Ark of the Testimony",
        "Ark of God"
      ],
      "stage": 1,
      "stage_title": "Riddle Foundations",
      "level_theme": "Shadows of Sinai & The Sanctuary",
      "difficulty": "easy",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l3-c2",
    "game_slug": "bible-riddles",
    "level": 3,
    "challenge_index": 2,
    "question_text": "WHO AM I?\nI was chosen by God by name from the tribe of Judah and filled with the Spirit of God, with ability, intelligence, and knowledge in all crafts—to devise artistic designs, to work in gold, silver, and bronze, and to cut stones for setting in the construction of the wilderness Tabernacle. Who am I?",
    "options": [
      "Bezalel",
      "Oholiab",
      "Hiram",
      "Hur"
    ],
    "correct_answer": "Bezalel",
    "explanation": "Bezalel was specially endowed by the Holy Spirit with artistic craftsmanship to construct the Tabernacle and its sacred utensils.",
    "reference": "Exodus 31:1–5; 35:30–35",
    "metadata": {
      "riddle_type": "Who Am I?",
      "is_typed": false,
      "clues": [
        "Son of Uri, son of Hur, of the tribe of Judah.",
        "Partnered with Oholiab of the tribe of Dan.",
        "Master architect and craftsman of the sacred furniture."
      ],
      "hint": "Chief Tabernacle artisan from the tribe of Judah.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Bezaleel"
      ],
      "stage": 1,
      "stage_title": "Riddle Foundations",
      "level_theme": "Shadows of Sinai & The Sanctuary",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l3-c3",
    "game_slug": "bible-riddles",
    "level": 3,
    "challenge_index": 3,
    "question_text": "WHAT AM I?\nI was a dry almond rod belonging to the head of the house of Levi. Placed in the tent of the testimony before the Lord alongside eleven other tribal rods to settle a rebellion against the priesthood, I was the only rod found the next morning to have budded, blossomed, and yielded ripe almonds overnight. What am I?",
    "options": [
      "Aaron’s Rod",
      "Moses’ Staff",
      "David’s Scepter",
      "Elisha’s Walking Stick"
    ],
    "correct_answer": "Aaron’s Rod",
    "explanation": "Aaron’s rod blossomed and bore almonds overnight to vindicate Aaron’s God-given high priestly authority.",
    "reference": "Numbers 17:1–10; Hebrews 9:4",
    "metadata": {
      "riddle_type": "What Am I?",
      "is_typed": false,
      "clues": [
        "Settled the rebellion of Korah, Dathan, and Abiram regarding Aaron’s priestly authority.",
        "Preserved in the Ark as a perpetual sign against the rebellious.",
        "Sprouted life without soil, roots, or water."
      ],
      "hint": "Priestly rod that budded with ripe almonds.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Aarons Rod",
        "The Rod of Aaron"
      ],
      "stage": 1,
      "stage_title": "Riddle Foundations",
      "level_theme": "Shadows of Sinai & The Sanctuary",
      "difficulty": "easy",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l3-c4",
    "game_slug": "bible-riddles",
    "level": 3,
    "challenge_index": 4,
    "question_text": "THE THREE-CLUE RIDDLE:\nClue 1: I was a woman who sat under my own palm tree in Ephraim while the sons of Israel came up to me for judgment.\nClue 2: I summoned Barak to lead ten thousand men against Jabin’s general Sisera.\nClue 3: I sang a famous victory song celebrating the downfall of Canaanite oppressors and declared Jael blessed. Who am I?",
    "options": [
      "Deborah",
      "Jael",
      "Huldah",
      "Miriam"
    ],
    "correct_answer": "Deborah",
    "explanation": "Deborah was a prophetess, judge of Israel, and mother in Israel who commanded Barak and sang a victory anthem over Sisera.",
    "reference": "Judges 4:4–14; 5:1–31",
    "metadata": {
      "riddle_type": "The Three-Clue Riddle",
      "is_typed": false,
      "clues": [
        "Wife of Lappidoth, prophetess and judge.",
        "Referred to myself as \"a mother in Israel.\"",
        "Told Barak that the glory of the battle would go to a woman."
      ],
      "hint": "Prophetess and female judge who held court under a palm tree.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Debora"
      ],
      "stage": 1,
      "stage_title": "Riddle Foundations",
      "level_theme": "Shadows of Sinai & The Sanctuary",
      "difficulty": "easy",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l3-c5",
    "game_slug": "bible-riddles",
    "level": 3,
    "challenge_index": 5,
    "question_text": "TYPE THE NAME — MINI-BOSS RIDDLE:\nI was the Kenite woman, wife of Heber, whose tent was pitched near Kedesh. When Sisera fled on foot after the rout of his nine hundred iron chariots, I invited him into my tent, gave him milk from a skin to drink, covered him with a rug, and drove a wooden tent peg through his temple into the ground while he was asleep. Who am I?",
    "options": [
      "Jael",
      "Deborah",
      "Rahab",
      "Athaliah"
    ],
    "correct_answer": "Jael",
    "explanation": "Jael offered Sisera hospitality and milk, then assassinated the Canaanite commander with a tent peg and mallet.",
    "reference": "Judges 4:17–22; 5:24–27",
    "metadata": {
      "riddle_type": "Type the Name",
      "is_typed": true,
      "clues": [
        "Fulfills Deborah’s prophecy that the Lord would sell Sisera into the hand of a woman.",
        "Wife of Heber the Kenite, descendant of Hobab, Moses’ father-in-law.",
        "Praised in Judges 5: \"Most blessed of women be Jael.\""
      ],
      "hint": "Heroine who killed Sisera with a tent peg and hammer.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Ya’el"
      ],
      "stage": 1,
      "stage_title": "Riddle Foundations",
      "level_theme": "Shadows of Sinai & The Sanctuary",
      "difficulty": "medium",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l4-c1",
    "game_slug": "bible-riddles",
    "level": 4,
    "challenge_index": 1,
    "question_text": "WHAT AM I?\nI was an animal pelt mantle that once belonged to a Tishbite prophet who was caught up to heaven in a whirlwind. When his grieving disciple struck the waters of the Jordan River with me and cried, \"Where is the Lord, the God of Elijah?\", the waters parted to the left and to the right. What am I?",
    "options": [
      "Elijah’s Cloak",
      "Aaron’s Ephod",
      "Joseph’s Coat of Many Colors",
      "Samuel’s Robe"
    ],
    "correct_answer": "Elijah’s Cloak",
    "explanation": "Elijah’s mantle parted the Jordan River and symbolized the transfer of prophetic power and a double portion of his spirit to Elisha.",
    "reference": "1 Kings 19:19; 2 Kings 2:8–14",
    "metadata": {
      "riddle_type": "What Am I?",
      "is_typed": false,
      "clues": [
        "Cast upon Elisha while he was plowing with twelve yoke of oxen.",
        "Fell to earth as Elijah was taken up by fiery horses and a chariot.",
        "Symbol of a double portion of the prophetic spirit."
      ],
      "hint": "Prophetic mantle that fell from Elijah as he ascended in a whirlwind.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Elijahs Mantle",
        "Elijah’s Mantle",
        "The Mantle of Elijah",
        "Elijahs Cloak"
      ],
      "stage": 1,
      "stage_title": "Riddle Foundations",
      "level_theme": "Miracles of Elijah & Elisha",
      "difficulty": "easy",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l4-c2",
    "game_slug": "bible-riddles",
    "level": 4,
    "challenge_index": 2,
    "question_text": "WHO AM I?\nI was the commander of the Syrian royal army, a mighty man of valor who had won great victories, but I was struck with leprosy. Following the recommendation of an abducted young Israelite slave girl, I visited a prophet in Samaria who refused even to come out of his house, instructing me to dip seven times in the muddy Jordan River. Who am I?",
    "options": [
      "Naaman",
      "Hazael",
      "Ben-Hadad",
      "Gehazi"
    ],
    "correct_answer": "Naaman",
    "explanation": "Naaman, commander of the army of the king of Syria, was cleansed of leprosy after dipping seven times in the Jordan River on Elisha’s instruction.",
    "reference": "2 Kings 5:1–14",
    "metadata": {
      "riddle_type": "Who Am I?",
      "is_typed": false,
      "clues": [
        "Expected the prophet to wave his hand over the spot and call on Yahweh.",
        "Preferred the rivers of Damascus, Abana and Pharpar, over all the waters of Israel.",
        "Flesh was restored like the flesh of a little child after washing seven times."
      ],
      "hint": "Syrian army commander cleansed of leprosy in the Jordan River.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Naaman the Syrian"
      ],
      "stage": 1,
      "stage_title": "Riddle Foundations",
      "level_theme": "Miracles of Elijah & Elisha",
      "difficulty": "easy",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l4-c3",
    "game_slug": "bible-riddles",
    "level": 4,
    "challenge_index": 3,
    "question_text": "WHAT AM I?\nI was a heavy iron tool borrowed by one of the sons of the prophets while felling timber along the Jordan River to expand their dwelling. I slipped from my wooden handle and sank to the river bottom, but when a man of God threw a carved stick into the water at that exact spot, I defied gravity and floated to the surface. What am I?",
    "options": [
      "The Floating Axe Head",
      "The Bronze Basin",
      "David’s Iron Scepter",
      "Gideon’s Iron Sickle"
    ],
    "correct_answer": "The Floating Axe Head",
    "explanation": "When a borrowed iron axe head fell into the Jordan, Elisha threw a stick in and caused the heavy iron to swim or float to the top.",
    "reference": "2 Kings 6:1–7",
    "metadata": {
      "riddle_type": "What Am I?",
      "is_typed": false,
      "clues": [
        "The workman cried: \"Alas, my master! For it was borrowed.\"",
        "Elisha threw a stick into the water and caused me to float.",
        "The workman reached out his hand and picked me up from the water."
      ],
      "hint": "Borrowed iron cutting tool that miraculously floated in the Jordan River.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Floating Axe Head",
        "Axe Head",
        "Iron Axe Head"
      ],
      "stage": 1,
      "stage_title": "Riddle Foundations",
      "level_theme": "Miracles of Elijah & Elisha",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l4-c4",
    "game_slug": "bible-riddles",
    "level": 4,
    "challenge_index": 4,
    "question_text": "THE THREE-CLUE RIDDLE:\nClue 1: I was the servant of the prophet Elisha who was blinded by greed.\nClue 2: I secretly pursued Naaman the Syrian after he was healed and lied to extort two talents of silver and two changes of clothing.\nClue 3: When I lied to my master about where I had gone, the leprosy of Naaman clung to me and my descendants forever. Who am I?",
    "options": [
      "Gehazi",
      "Baruch",
      "Ziba",
      "Hazael"
    ],
    "correct_answer": "Gehazi",
    "explanation": "Gehazi, servant of Elisha, greedily solicited gifts from Naaman and was cursed with Naaman’s incurable leprosy.",
    "reference": "2 Kings 5:20–27",
    "metadata": {
      "riddle_type": "The Three-Clue Riddle",
      "is_typed": false,
      "clues": [
        "Served the prophet Elisha.",
        "Stashed stolen treasures in the citadel tower.",
        "Went out from Elisha’s presence a leper as white as snow."
      ],
      "hint": "Greedy servant of Elisha cursed with white leprosy.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Gehasi"
      ],
      "stage": 1,
      "stage_title": "Riddle Foundations",
      "level_theme": "Miracles of Elijah & Elisha",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l4-c5",
    "game_slug": "bible-riddles",
    "level": 4,
    "challenge_index": 5,
    "question_text": "TYPE THE NAME — MINI-BOSS RIDDLE:\nI was a wealthy and hospitable woman of a city in the territory of Issachar who perceived that Elisha was a holy man of God. Together with my husband, I built a small roof chamber furnished with a bed, a table, a chair, and a lampstand for him to stay whenever he visited. When my promised son later died in my lap from a sunstroke, I laid him on the prophet’s bed, rode an ass to the holy mountain of God, and saw him raised back to life. Who am I (by my biblical title/designation)?",
    "options": [
      "The Shunammite Woman",
      "The Widow of Zarephath",
      "Huldah the Prophetess",
      "Abigail"
    ],
    "correct_answer": "The Shunammite Woman",
    "explanation": "The Shunammite woman built a prophet’s chamber for Elisha; her son later died and was raised to life after Elisha stretched himself over the boy.",
    "reference": "2 Kings 4:8–37",
    "metadata": {
      "riddle_type": "Type the Name",
      "is_typed": true,
      "clues": [
        "A notable woman of Shunem.",
        "Clung to Elisha’s feet before the man of God and said: \"Did I ask a son of my lord?\"",
        "Child sneezed seven times and opened his eyes."
      ],
      "hint": "Notable woman who built a furnished upper room for Elisha in Shunem.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Shunammite",
        "Shunammite Woman",
        "Woman of Shunem",
        "The Shunammite"
      ],
      "stage": 1,
      "stage_title": "Riddle Foundations",
      "level_theme": "Miracles of Elijah & Elisha",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l5-c1",
    "game_slug": "bible-riddles",
    "level": 5,
    "challenge_index": 1,
    "question_text": "WHO AM I?\nI was a disciple in Damascus whom the Lord addressed in a vision, sending me to a house on Straight Street to lay hands on a notorious persecutor of the church named Saul of Tarsus so that he might regain his sight. Terrified at his reputation, I protested, but obeyed when the Lord declared him a chosen instrument to carry His name before Gentiles and kings. Who am I?",
    "options": [
      "Ananias of Damascus",
      "Ananias the High Priest",
      "Barnabas",
      "Silas"
    ],
    "correct_answer": "Ananias of Damascus",
    "explanation": "Ananias was the faithful Damascus disciple instructed by Christ to restore Saul’s sight and baptize him on Straight Street.",
    "reference": "Acts 9:10–19; 22:12–16",
    "metadata": {
      "riddle_type": "Who Am I?",
      "is_typed": false,
      "clues": [
        "Resident of Damascus, highly regarded by all Jews living there.",
        "Greeted Saul with the words: \"Brother Saul, the Lord Jesus... has sent me.\"",
        "Scales fell from Saul’s eyes and he was baptized."
      ],
      "hint": "Damascus disciple sent to restore Saul’s sight on Straight Street.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Ananias",
        "Ananias of Syria"
      ],
      "stage": 1,
      "stage_title": "Riddle Foundations",
      "level_theme": "Apostolic Mysteries & Early Church",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l5-c2",
    "game_slug": "bible-riddles",
    "level": 5,
    "challenge_index": 2,
    "question_text": "WHERE AM I?\nI was a Roman colony in Macedonia that Paul visited after seeing a vision of a man crying, \"Come over to Macedonia and help us.\" Outside our city gate by a river on the Sabbath, Paul spoke to women gathered for prayer, converting a purple-cloth merchant named Lydia; later, a midnight prison earthquake opened all our jail doors. What city am I?",
    "options": [
      "Philippi",
      "Thessalonica",
      "Berea",
      "Corinth"
    ],
    "correct_answer": "Philippi",
    "explanation": "Philippi was the Macedonian city where Lydia was converted by the Gangites river and the jailer was converted after the midnight earthquake.",
    "reference": "Acts 16:11–40; Philippians 1:1",
    "metadata": {
      "riddle_type": "Where Am I?",
      "is_typed": false,
      "clues": [
        "Leading city of the district of Macedonia.",
        "Paul and Silas were beaten with rods and placed in inner stocks here.",
        "The Roman jailer and his entire household believed and were baptized at midnight."
      ],
      "hint": "First European city where Paul preached; home of Lydia and the converted jailer.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "City of Philippi"
      ],
      "stage": 1,
      "stage_title": "Riddle Foundations",
      "level_theme": "Apostolic Mysteries & Early Church",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l5-c3",
    "game_slug": "bible-riddles",
    "level": 5,
    "challenge_index": 3,
    "question_text": "WHAT AM I?\nI was a piece of cloth or work apron that had touched the skin of the Apostle Paul in Ephesus. When carried away and placed upon the sick, diseases departed from them and evil spirits flew out of them, causing the name of the Lord Jesus to be magnified throughout Asia Minor. What am I?",
    "options": [
      "Paul’s Handkerchiefs and Aprons",
      "Peter’s Shadow",
      "The Hem of Jesus’ Garment",
      "Elijah’s Mantle"
    ],
    "correct_answer": "Paul’s Handkerchiefs and Aprons",
    "explanation": "In Ephesus, handkerchiefs or aprons touched to Paul’s skin healed diseases and expelled evil spirits through extraordinary miracles.",
    "reference": "Acts 19:11–12",
    "metadata": {
      "riddle_type": "What Am I?",
      "is_typed": false,
      "clues": [
        "Known in the Greek text as sudaria and semicinctia.",
        "Transferred extraordinary miracles (Acts 19:11–12) without Paul being physically present.",
        "Contrasted with the failed exorcisms of the seven sons of Sceva."
      ],
      "hint": "Cloth garments and sweat rags carried from Paul’s body to heal the sick.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Handkerchiefs and Aprons",
        "Pauls Handkerchief",
        "Handkerchiefs of Paul"
      ],
      "stage": 1,
      "stage_title": "Riddle Foundations",
      "level_theme": "Apostolic Mysteries & Early Church",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l5-c4",
    "game_slug": "bible-riddles",
    "level": 5,
    "challenge_index": 4,
    "question_text": "THE THREE-CLUE RIDDLE:\nClue 1: I was a young man in Troas who sat on a third-story window sill during an extraordinarily long discourse by Paul.\nClue 2: Sinking into a deep sleep as Paul talked until midnight, I fell down from the third story and was picked up dead.\nClue 3: Paul went down, fell upon me, embraced me, and said, \"Do not be alarmed, for his life is in him,\" and I was brought home alive. Who am I?",
    "options": [
      "Eutychus",
      "Trophimus",
      "Erastus",
      "Epaphroditus"
    ],
    "correct_answer": "Eutychus",
    "explanation": "Eutychus fell asleep during Paul’s long sermon in Troas, fell from a third-story window, died, and was revived by Paul.",
    "reference": "Acts 20:7–12",
    "metadata": {
      "riddle_type": "The Three-Clue Riddle",
      "is_typed": false,
      "clues": [
        "Name means \"fortunate\" or \"lucky.\"",
        "Overcome by sleep due to many lamps burning in the upper room.",
        "Resurrected at midnight before Paul broke bread and departed at daybreak."
      ],
      "hint": "Young man in Troas who fell from a third-story window during Paul’s midnight sermon.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Eutyches"
      ],
      "stage": 1,
      "stage_title": "Riddle Foundations",
      "level_theme": "Apostolic Mysteries & Early Church",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l5-c5",
    "game_slug": "bible-riddles",
    "level": 5,
    "challenge_index": 5,
    "question_text": "TYPE THE NAME — MINI-BOSS RIDDLE:\nI was a Christian disciple in Joppa whose Aramaic name is Tabitha. Scripture commends me as being full of good works and acts of charity, constantly making tunics and cloaks for poor widows. When I fell ill and died, the disciples summoned the Apostle Peter from nearby Lydda; he put everyone out of the upper room, knelt down in prayer, and commanded, \"Tabitha, arise!\" Who am I by my Greek name?",
    "options": [
      "Dorcas",
      "Tabitha",
      "Rhoda",
      "Priscilla"
    ],
    "correct_answer": "Dorcas",
    "explanation": "Dorcas (Tabitha) of Joppa made garments for widows; when she died, Peter raised her back to life in the upper chamber.",
    "reference": "Acts 9:36–42",
    "metadata": {
      "riddle_type": "Type the Name",
      "is_typed": true,
      "clues": [
        "Greek name means \"gazelle\" or \"doe.\"",
        "Peter presented me alive to the saints and widows.",
        "Resurrection caused many throughout Joppa to believe in the Lord."
      ],
      "hint": "Joppa woman famous for making coats for widows; raised by Peter (Greek name).",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Tabitha",
        "Dorcas/Tabitha"
      ],
      "stage": 1,
      "stage_title": "Riddle Foundations",
      "level_theme": "Apostolic Mysteries & Early Church",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l6-c1",
    "game_slug": "bible-riddles",
    "level": 6,
    "challenge_index": 1,
    "question_text": "WHO AM I?\nI was a warrior judge in Israel who struck down six hundred Philistines with nothing more than an oxgoad, delivering Israel from oppression between the days of Ehud and Deborah. Who am I?",
    "options": [
      "Shamgar",
      "Othniel",
      "Tola",
      "Jair"
    ],
    "correct_answer": "Shamgar",
    "explanation": "Shamgar son of Anath killed 600 Philistines with an oxgoad, single-handedly delivering Israel.",
    "reference": "Judges 3:31; 5:6",
    "metadata": {
      "riddle_type": "Who Am I?",
      "is_typed": false,
      "clues": [
        "Son of Anath.",
        "Used an agricultural cattle prod (oxgoad) as a lethal weapon.",
        "Mentioned in both Judges 3:31 and the song of Deborah (Judges 5:6)."
      ],
      "hint": "Judge who killed 600 Philistines with an oxgoad.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Shamgar son of Anath"
      ],
      "stage": 2,
      "stage_title": "Mystery of the People",
      "level_theme": "Judges, Warriors & Secret Agents",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l6-c2",
    "game_slug": "bible-riddles",
    "level": 6,
    "challenge_index": 2,
    "question_text": "THE BIBLICAL RELATIONSHIP RIDDLE:\nI was the younger brother of Caleb who captured the fortified city of Kiriath-sepher (Debir) to win the hand of Caleb’s daughter Achsah in marriage. Years later, when Israel fell under the dominion of Cushan-rishathaim king of Mesopotamia, the Spirit of the Lord came upon me as the very first recorded judge of Israel. Who am I?",
    "options": [
      "Othniel",
      "Ehud",
      "Kenaz",
      "Jephthah"
    ],
    "correct_answer": "Othniel",
    "explanation": "Othniel son of Kenaz was Caleb’s nephew/son-in-law and the very first judge of Israel.",
    "reference": "Joshua 15:15–17; Judges 3:9–11",
    "metadata": {
      "riddle_type": "The Biblical Relationship Riddle",
      "is_typed": false,
      "clues": [
        "Son of Kenaz, Caleb’s younger brother.",
        "Defeated Cushan-rishathaim of Mesopotamia (Aram-naharaim).",
        "Secured forty years of rest for the land."
      ],
      "hint": "First judge of Israel; Caleb’s nephew and son-in-law.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Othniel son of Kenaz"
      ],
      "stage": 2,
      "stage_title": "Mystery of the People",
      "level_theme": "Judges, Warriors & Secret Agents",
      "difficulty": "hard",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l6-c3",
    "game_slug": "bible-riddles",
    "level": 6,
    "challenge_index": 3,
    "question_text": "THE IMPOSSIBLE DESCRIPTION:\nI was an outlaw son of a harlot driven from my father’s house by my brothers, yet the elders of Gilead begged me to return as their head and commander. Before defeating the Ammonites, I made a rash vow to offer as a burnt offering whatever came out of my house to meet me—and my only child, an unmarried daughter, walked through the door dancing with tambourines. Who am I?",
    "options": [
      "Jephthah",
      "Gideon",
      "Samson",
      "Barak"
    ],
    "correct_answer": "Jephthah",
    "explanation": "Jephthah made a tragic vow before battle, which cost him his only daughter when she came out to greet his victory.",
    "reference": "Judges 11:1–40; Hebrews 11:32",
    "metadata": {
      "riddle_type": "The Impossible Description",
      "is_typed": false,
      "clues": [
        "Gileadite warrior who dwelt in the land of Tob with worthless fellows.",
        "Sent ambassadors to the king of the Ammonites with an extensive historical defense.",
        "Daughter spent two months on the mountains bewailing her virginity."
      ],
      "hint": "Judge of Gilead who made a rash vow concerning his only daughter.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Jephthe"
      ],
      "stage": 2,
      "stage_title": "Mystery of the People",
      "level_theme": "Judges, Warriors & Secret Agents",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l6-c4",
    "game_slug": "bible-riddles",
    "level": 6,
    "challenge_index": 4,
    "question_text": "THE THREE-CLUE RIDDLE:\nClue 1: I was an illegitimate son of Gideon (Jerubbaal) who slaughtered seventy of my half-brothers upon a single stone in Ophrah.\nClue 2: The citizens of Shechem made me king beside the terebinth tree, fulfilling Jotham’s parable of the bramble.\nClue 3: While besieging the tower of Thebez, a woman dropped an upper millstone on my head, fracturing my skull; to avoid the shame of dying by a woman, I ordered my armor-bearer to run me through with a sword. Who am I?",
    "options": [
      "Abimelech",
      "Absalom",
      "Adonijah",
      "Ahaziah"
    ],
    "correct_answer": "Abimelech",
    "explanation": "Abimelech murdered his 70 brothers to seize power in Shechem, and died when a woman dropped a millstone on his head at Thebez.",
    "reference": "Judges 9:1–54",
    "metadata": {
      "riddle_type": "The Three-Clue Riddle",
      "is_typed": false,
      "clues": [
        "Son of Gideon by his concubine in Shechem.",
        "Only Jotham, the youngest brother, escaped the massacre at Ophrah.",
        "Killed at Thebez by a woman’s millstone."
      ],
      "hint": "Usurper son of Gideon struck on the head by a millstone at Thebez.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Abimelek"
      ],
      "stage": 2,
      "stage_title": "Mystery of the People",
      "level_theme": "Judges, Warriors & Secret Agents",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l6-c5",
    "game_slug": "bible-riddles",
    "level": 6,
    "challenge_index": 5,
    "question_text": "TYPE THE NAME — MINI-BOSS RIDDLE:\nI was the chief of David’s \"Three Mighty Men\" (the Tachmonite). In a single encounter, I lifted up my spear and slaughtered eight hundred (or three hundred in Chronicles) seasoned enemy warriors at one time. Who am I?",
    "options": [
      "Josheb-basshebeth",
      "Benaiah",
      "Abishai",
      "Joab"
    ],
    "correct_answer": "Josheb-basshebeth",
    "explanation": "Josheb-basshebeth the Tachmonite (Jashobeam) was the chief of David’s Three, slaying 800 men with his spear in one battle.",
    "reference": "2 Samuel 23:8; 1 Chronicles 11:11",
    "metadata": {
      "riddle_type": "Type the Name",
      "is_typed": true,
      "clues": [
        "Also called Adino the Eznite in 2 Samuel 23:8.",
        "Ranked above Eleazar son of Dodo and Shammah son of Agee.",
        "Chief among the captains of David’s elite royal champions."
      ],
      "hint": "Chief of David’s Three mighty men who slew 800 with his spear.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Josheb-Basshebeth",
        "Jashobeam",
        "Adino",
        "Adino the Eznite"
      ],
      "stage": 2,
      "stage_title": "Mystery of the People",
      "level_theme": "Judges, Warriors & Secret Agents",
      "difficulty": "master",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l7-c1",
    "game_slug": "bible-riddles",
    "level": 7,
    "challenge_index": 1,
    "question_text": "WHO AM I?\nI was the commander of King Saul’s army and the king’s first cousin. Following Saul’s death on Mount Gilboa, I made Saul’s son Ish-bosheth king over northern Israel. Later, after an accusation concerning Saul’s concubine Rizpah, I transferred my loyalty to David, only to be assassinated deceitfully at the gate of Hebron by Joab. Who am I?",
    "options": [
      "Abner",
      "Joab",
      "Amasa",
      "Benaiah"
    ],
    "correct_answer": "Abner",
    "explanation": "Abner son of Ner was Saul’s general who defected to David and was murdered by Joab at Hebron in revenge for Asahel.",
    "reference": "1 Samuel 14:50; 2 Samuel 2:8–23; 3:6–39",
    "metadata": {
      "riddle_type": "Who Am I?",
      "is_typed": false,
      "clues": [
        "Son of Ner, Saul’s uncle.",
        "Killed Joab’s brother Asahel with the butt of his spear during a pursuit.",
        "David wept at my grave in Hebron and sang: \"Should Abner die as a fool dies?\""
      ],
      "hint": "General of Saul’s army murdered by Joab at the gate of Hebron.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Abner son of Ner"
      ],
      "stage": 2,
      "stage_title": "Mystery of the People",
      "level_theme": "Royal Encounters & Palace Coups",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l7-c2",
    "game_slug": "bible-riddles",
    "level": 7,
    "challenge_index": 2,
    "question_text": "THE BIBLICAL RELATIONSHIP RIDDLE:\nI was a five-year-old royal grandson living in Gibeah when news arrived that my father Jonathan and grandfather King Saul were slain on Mount Gilboa. My nurse panicked, picked me up to flee, and accidentally dropped me, causing me to be lame in both feet for the rest of my life. Years later, King David searched for any survivor of Jonathan’s line to show the kindness of God, and restored to me all of Saul’s land, seating me at his own royal table. Who am I?",
    "options": [
      "Mephibosheth",
      "Ish-bosheth",
      "Armoni",
      "Michal"
    ],
    "correct_answer": "Mephibosheth",
    "explanation": "Mephibosheth, lame son of Jonathan, was summoned from Lo-debar by King David and given an honored seat at the royal banquet table.",
    "reference": "2 Samuel 4:4; 9:1–13",
    "metadata": {
      "riddle_type": "The Biblical Relationship Riddle",
      "is_typed": false,
      "clues": [
        "Lived in obscurity in Lo-debar at the house of Machir son of Ammiel.",
        "Referred to myself as a \"dead dog\" before King David.",
        "Ziba was appointed to steward my vast agricultural estates."
      ],
      "hint": "Lame son of Jonathan who ate continually at King David’s table.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Merib-baal",
        "Meribbaal"
      ],
      "stage": 2,
      "stage_title": "Mystery of the People",
      "level_theme": "Royal Encounters & Palace Coups",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l7-c3",
    "game_slug": "bible-riddles",
    "level": 7,
    "challenge_index": 3,
    "question_text": "WHO AM I?\nI was David’s most esteemed counselor whose advice was regarded as though one consulted the oracle of God. When David’s son Absalom rebelled, I joined the conspiracy and counseled him to pursue David immediately with twelve thousand men. However, when Hushai the Archite defeated my advice and Absalom rejected my counsel, I set my house in order and hanged myself. Who am I?",
    "options": [
      "Ahithophel",
      "Hushai",
      "Ittai",
      "Zadok"
    ],
    "correct_answer": "Ahithophel",
    "explanation": "Ahithophel was David’s brilliant counselor who defected to Absalom; when his military advice was rejected for Hushai’s, he hanged himself.",
    "reference": "2 Samuel 15:12, 31; 16:20–23; 17:1–23",
    "metadata": {
      "riddle_type": "Who Am I?",
      "is_typed": false,
      "clues": [
        "Grandfather of Bathsheba (father of Eliam, one of David’s Thirty).",
        "Counseled Absalom to sleep with David’s concubines in the sight of all Israel.",
        "Only counselor in the Old Testament recorded as hanging himself."
      ],
      "hint": "David’s trusted counselor who defected to Absalom and hanged himself.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Ahithophel the Gilonite",
        "Achitophel"
      ],
      "stage": 2,
      "stage_title": "Mystery of the People",
      "level_theme": "Royal Encounters & Palace Coups",
      "difficulty": "hard",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l7-c4",
    "game_slug": "bible-riddles",
    "level": 7,
    "challenge_index": 4,
    "question_text": "THE THREE-CLUE RIDDLE:\nClue 1: I was the bloodthirsty daughter of King Ahab and Jezebel who married King Jehoram of Judah.\nClue 2: When my son King Ahaziah was assassinated by Jehu, I arose to exterminate the entire royal seed of the house of David and seized the throne of Judah for six years.\nClue 3: I was overthrown when the high priest Jehoiada brought out the hidden child-king Joash; I tore my clothes crying \"Treason! Treason!\" and was put to death at the horse gate of the palace. Who am I?",
    "options": [
      "Athaliah",
      "Jezebel",
      "Maacah",
      "Herodias"
    ],
    "correct_answer": "Athaliah",
    "explanation": "Athaliah murdered the royal heirs of Judah to rule as queen for six years until overthrown by Jehoiada on behalf of Joash.",
    "reference": "2 Kings 11:1–16; 2 Chronicles 22:10–23:15",
    "metadata": {
      "riddle_type": "The Three-Clue Riddle",
      "is_typed": false,
      "clues": [
        "Only reigning queen to rule over Judah in Jerusalem.",
        "My daughter/sister Jehosheba stole away baby Joash from the massacre.",
        "Brought Baal worship into the southern kingdom of Judah."
      ],
      "hint": "Usurper queen of Judah who attempted to wipe out the line of David.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Queen Athaliah"
      ],
      "stage": 2,
      "stage_title": "Mystery of the People",
      "level_theme": "Royal Encounters & Palace Coups",
      "difficulty": "hard",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l7-c5",
    "game_slug": "bible-riddles",
    "level": 7,
    "challenge_index": 5,
    "question_text": "TYPE THE NAME — MINI-BOSS RIDDLE:\nI was an Ethiopian court official (an officer in the royal palace) during the final siege of Jerusalem under King Zedekiah. Hearing that the princes had cast the prophet Jeremiah into the muddy cistern of Malchiah to die of starvation, I confronted the king at the Benjamin Gate, obtained thirty men, and rescued Jeremiah using old rags and worn-out clothes under his armpits with ropes. Because I trusted in Yahweh, God gave me a personal promise through Jeremiah that my life would be spared when the city fell to the Babylonians. Who am I?",
    "options": [
      "Ebed-Melech",
      "Baruch",
      "Gedaliah",
      "Pashhur"
    ],
    "correct_answer": "Ebed-Melech",
    "explanation": "Ebed-Melech the Ethiopian eunuch delivered Jeremiah from the miry cistern with ropes and rags and was granted divine protection.",
    "reference": "Jeremiah 38:7–13; 39:15–18",
    "metadata": {
      "riddle_type": "Type the Name",
      "is_typed": true,
      "clues": [
        "Name literally means \"servant of the king.\"",
        "Rushed to King Zedekiah declaring: \"These men have done evil in all that they have done to Jeremiah the prophet.\"",
        "Promised: \"Your life shall be for a prize to you, because you have put your trust in me\" (Jeremiah 39:18)."
      ],
      "hint": "Ethiopian royal officer who rescued Jeremiah from the muddy cistern.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Ebedmelech",
        "Ebed-melech the Ethiopian",
        "Ebed Melech"
      ],
      "stage": 2,
      "stage_title": "Mystery of the People",
      "level_theme": "Royal Encounters & Palace Coups",
      "difficulty": "master",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l8-c1",
    "game_slug": "bible-riddles",
    "level": 8,
    "challenge_index": 1,
    "question_text": "WHO AM I?\nI am the amanuensis (scribe) who physically put pen to parchment to write down Paul’s grand theological masterpiece to the church in the capital of the empire. Right before the final doxology, I inserted my own personal greeting: \"I, [...], who wrote down this letter, greet you in the Lord.\" Who am I?",
    "options": [
      "Tertius",
      "Quartus",
      "Tychicus",
      "Silvanus"
    ],
    "correct_answer": "Tertius",
    "explanation": "Tertius was Paul’s secretary/amanuensis who wrote down the Epistle to the Romans and added his own greeting in 16:22.",
    "reference": "Romans 16:22",
    "metadata": {
      "riddle_type": "Who Am I?",
      "is_typed": false,
      "clues": [
        "Recorded in Romans 16:22.",
        "Name is a Latin ordinal meaning \"third.\"",
        "Greeted the church alongside Gaius, Erastus, and Quartus."
      ],
      "hint": "Paul’s amanuensis who wrote down the Epistle to the Romans.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Tertius of Iconium"
      ],
      "stage": 2,
      "stage_title": "Mystery of the People",
      "level_theme": "Forgotten Epistolary Figures",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l8-c2",
    "game_slug": "bible-riddles",
    "level": 8,
    "challenge_index": 2,
    "question_text": "WHO AM I?\nWhen all the believers in the Roman province of Asia turned away from Paul during his second imprisonment in Rome, I was not ashamed of his chains. I searched for him diligently in the imperial capital until I found him in his cold dungeon and frequently refreshed his spirit. Paul prayed that the Lord would grant mercy to my household and that I might find mercy from the Lord on that Day. Who am I?",
    "options": [
      "Onesiphorus",
      "Epaphras",
      "Tychicus",
      "Philemon"
    ],
    "correct_answer": "Onesiphorus",
    "explanation": "Onesiphorus searched diligently for Paul in Rome, refreshed him in prison, and was not ashamed of his chains.",
    "reference": "2 Timothy 1:16–18; 4:19",
    "metadata": {
      "riddle_type": "Who Am I?",
      "is_typed": false,
      "clues": [
        "Contrasted with Phygelus and Hermogenes who deserted Paul.",
        "Faithful resident of Ephesus whose household was repeatedly blessed.",
        "Mentioned in 2 Timothy 1:16–18 and 4:19."
      ],
      "hint": "Faithful disciple who searched Rome to refresh imprisoned Paul.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Onesiforos"
      ],
      "stage": 2,
      "stage_title": "Mystery of the People",
      "level_theme": "Forgotten Epistolary Figures",
      "difficulty": "hard",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l8-c3",
    "game_slug": "bible-riddles",
    "level": 8,
    "challenge_index": 3,
    "question_text": "THE BIBLICAL RELATIONSHIP RIDDLE:\nI was a runaway bondservant who robbed my wealthy Christian master in Colossae and fled across the Mediterranean to Rome. There in prison, I encountered the Apostle Paul, who led me to Christ and referred to me as \"my child, whom I have begotten in my chains.\" Paul sent me back to my master carrying a personal letter that pleaded for me to be received no longer as a slave, but as a beloved brother. Who am I?",
    "options": [
      "Onesimus",
      "Trophimus",
      "Epaphras",
      "Archippus"
    ],
    "correct_answer": "Onesimus",
    "explanation": "Onesimus was the runaway slave of Philemon who was converted under Paul’s imprisonment and returned as a beloved Christian brother.",
    "reference": "Philemon 1:10–19; Colossians 4:9",
    "metadata": {
      "riddle_type": "The Biblical Relationship Riddle",
      "is_typed": false,
      "clues": [
        "Name literally means \"profitable\" or \"useful.\"",
        "Sent back to Philemon accompanied by Tychicus.",
        "Paul wrote: \"If he has wronged you or owes anything, charge that to my account.\""
      ],
      "hint": "Runaway slave converted by Paul and returned to Philemon.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Onesimos"
      ],
      "stage": 2,
      "stage_title": "Mystery of the People",
      "level_theme": "Forgotten Epistolary Figures",
      "difficulty": "easy",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l8-c4",
    "game_slug": "bible-riddles",
    "level": 8,
    "challenge_index": 4,
    "question_text": "THE THREE-CLUE RIDDLE:\nClue 1: I was a native of Colossae who planted churches in the Lycus Valley—Colossae, Laodicea, and Hierapolis.\nClue 2: Paul called me \"our beloved fellow servant\" and \"a faithful minister of Christ on our behalf.\"\nClue 3: I was sharing Paul’s imprisonment in Rome, always wrestling in prayer that the believers might stand mature and fully assured in all the will of God. Who am I?",
    "options": [
      "Epaphras",
      "Epaphroditus",
      "Archippus",
      "Tychicus"
    ],
    "correct_answer": "Epaphras",
    "explanation": "Epaphras was the evangelist who founded the Colossian church and was imprisoned with Paul in Rome, noted for fervent intercession.",
    "reference": "Colossians 1:7–8; 4:12–13; Philemon 1:23",
    "metadata": {
      "riddle_type": "The Three-Clue Riddle",
      "is_typed": false,
      "clues": [
        "Founder and pastor of the church in Colossae.",
        "Brought report of the Colossian church’s love in the Spirit to Paul in Rome.",
        "Mentioned in Colossians 1:7; 4:12–13; Philemon 1:23."
      ],
      "hint": "Founder of the Colossian church who wrestled in prayer for them.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Epaphras of Colossae"
      ],
      "stage": 2,
      "stage_title": "Mystery of the People",
      "level_theme": "Forgotten Epistolary Figures",
      "difficulty": "hard",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l8-c5",
    "game_slug": "bible-riddles",
    "level": 8,
    "challenge_index": 5,
    "question_text": "TYPE TWO ANSWERS — MINI-BOSS RIDDLE:\nIn Romans 16:12, the Apostle Paul sends affectionate greetings to two Christian women in the Roman church whose names sound remarkably alike—both derived from a Greek root meaning \"delicate\" or \"luxurious\"—and notes that they \"work hard in the Lord.\" What are the names of these two hardworking women?",
    "options": [
      "Tryphena and Tryphosa",
      "Euodia and Syntyche",
      "Priscilla and Aquila",
      "Martha and Mary"
    ],
    "correct_answer": "Tryphena and Tryphosa",
    "explanation": "Paul greets Tryphena and Tryphosa in Romans 16:12, identifying them as women who labored diligently in the Lord.",
    "reference": "Romans 16:12",
    "metadata": {
      "riddle_type": "Type Two Answers",
      "is_typed": true,
      "clues": [
        "Mentioned together in Romans 16:12 before Persis the beloved.",
        "Names begin with Try- and sound like twin or sister names.",
        "Greek names: Τρύφαινα and Τρυφῶσα."
      ],
      "hint": "Two women with rhyming names greeted together in Romans 16:12.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Tryphaena and Tryphosa",
        "Tryphena & Tryphosa",
        "Tryphosa and Tryphena",
        "Tryphena, Tryphosa"
      ],
      "stage": 2,
      "stage_title": "Mystery of the People",
      "level_theme": "Forgotten Epistolary Figures",
      "difficulty": "master",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l9-c1",
    "game_slug": "bible-riddles",
    "level": 9,
    "challenge_index": 1,
    "question_text": "WHO AM I?\nI was a prophetess who lived in Jerusalem in the Second Quarter (Mishneh) of the city, wife of Shallum keeper of the royal wardrobe. When King Josiah’s high priest Hilkiah discovered the lost Book of the Law in the temple, the king sent an official delegation not to Jeremiah or Zephaniah, but to me, to inquire of Yahweh concerning the impending wrath against Judah. Who am I?",
    "options": [
      "Huldah",
      "Miriam",
      "Deborah",
      "Anna"
    ],
    "correct_answer": "Huldah",
    "explanation": "Huldah was the revered prophetess in Jerusalem consulted by King Josiah’s delegation upon finding the Book of the Law.",
    "reference": "2 Kings 22:14–20; 2 Chronicles 34:22–28",
    "metadata": {
      "riddle_type": "Who Am I?",
      "is_typed": false,
      "clues": [
        "Wife of Shallum son of Tikvah.",
        "Prophesied disaster upon Jerusalem for its idolatry, but promised Josiah peace for his tender heart.",
        "Consulted by Hilkiah, Shaphan, and the royal officials."
      ],
      "hint": "Prophetess consulted by King Josiah when the Book of the Law was found.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Huldah the prophetess",
        "Holda"
      ],
      "stage": 2,
      "stage_title": "Mystery of the People",
      "level_theme": "Unusual Prophets & Ancient Seers",
      "difficulty": "hard",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l9-c2",
    "game_slug": "bible-riddles",
    "level": 9,
    "challenge_index": 2,
    "question_text": "THE IMPOSSIBLE DESCRIPTION:\nI was a non-Israelite diviner from Pethor near the Euphrates River, hired by Balak king of Moab with fees of divination to place an inescapable curse upon the advancing Israelites. Yet three times on mountain heights, as the Spirit of God overtook me, I opened my mouth to curse them, and only sublime poetic blessings poured forth from my lips, concluding with a vision of a Star rising from Jacob and a Scepter out of Israel. Who am I?",
    "options": [
      "Balaam",
      "Balak",
      "Jethro",
      "Melchizedek"
    ],
    "correct_answer": "Balaam",
    "explanation": "Balaam son of Beor was hired by Balak to curse Israel, but God compelled him to pronounce blessings and prophecies of the Messiah.",
    "reference": "Numbers 22:1–24:25; 31:16; 2 Peter 2:15–16",
    "metadata": {
      "riddle_type": "The Impossible Description",
      "is_typed": false,
      "clues": [
        "Rode a donkey that spoke with a man’s voice to rebuke my madness.",
        "Encountered the Angel of the Lord with a drawn sword in a narrow path between vineyards.",
        "Later counseled the Midianites to seduce Israel with the daughters of Moab at Baal-peor."
      ],
      "hint": "Pagan prophet whose donkey rebuked him before he blessed Israel.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Balaam son of Beor",
        "Bileam"
      ],
      "stage": 2,
      "stage_title": "Mystery of the People",
      "level_theme": "Unusual Prophets & Ancient Seers",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l9-c3",
    "game_slug": "bible-riddles",
    "level": 9,
    "challenge_index": 3,
    "question_text": "WHO AM I?\nI was a prophet of Shiloh who met Jeroboam along the road outside Jerusalem while wearing a brand-new cloak. I grabbed my own garment, tore it into twelve pieces, and told Jeroboam to take ten pieces, symbolizing that God was tearing the kingdom out of the hand of Solomon’s son and giving ten tribes to him. Who am I?",
    "options": [
      "Ahijah",
      "Shemaiah",
      "Iddo",
      "Micaiah"
    ],
    "correct_answer": "Ahijah",
    "explanation": "Ahijah the Shilonite tore his new garment into twelve pieces and gave ten to Jeroboam to prophesy the division of the kingdom.",
    "reference": "1 Kings 11:29–39; 14:1–18",
    "metadata": {
      "riddle_type": "Who Am I?",
      "is_typed": false,
      "clues": [
        "Ahijah the Shilonite.",
        "Later blind in his old age when Jeroboam’s disguised wife came to inquire about their sick child.",
        "Pronounced the doom of the dynasty of Jeroboam."
      ],
      "hint": "Prophet who tore his new cloak into twelve pieces for Jeroboam.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Ahijah the Shilonite",
        "Ahiyah"
      ],
      "stage": 2,
      "stage_title": "Mystery of the People",
      "level_theme": "Unusual Prophets & Ancient Seers",
      "difficulty": "hard",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l9-c4",
    "game_slug": "bible-riddles",
    "level": 9,
    "challenge_index": 4,
    "question_text": "THE THREE-CLUE RIDDLE:\nClue 1: I was a lone prophet of Yahweh summoned before King Ahab of Israel and King Jehoshaphat of Judah before their expedition against Ramoth-gilead.\nClue 2: Four hundred court prophets had predicted absolute triumph, and King Ahab remarked, \"I hate him, for he never prophesies good concerning me, but evil.\"\nClue 3: I revealed a heavenly vision of the Lord seated on His throne, sending a lying spirit into the mouth of Ahab’s prophets, and predicted Ahab would not return alive. Who am I?",
    "options": [
      "Micaiah",
      "Elijah",
      "Elisha",
      "Hanani"
    ],
    "correct_answer": "Micaiah",
    "explanation": "Micaiah son of Imlah was Ahab’s hated prophet who truthfully foretold Ahab’s death at Ramoth-gilead despite 400 lying prophets.",
    "reference": "1 Kings 22:8–28; 2 Chronicles 18:7–27",
    "metadata": {
      "riddle_type": "The Three-Clue Riddle",
      "is_typed": false,
      "clues": [
        "Son of Imlah.",
        "Slapped on the cheek by Zedekiah son of Chenaanah.",
        "Imprisoned and fed on meager rations of bread and water until Ahab fell in battle."
      ],
      "hint": "Prophet hated by Ahab who saw the heavenly vision of the lying spirit.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Micaiah son of Imlah",
        "Michaiah"
      ],
      "stage": 2,
      "stage_title": "Mystery of the People",
      "level_theme": "Unusual Prophets & Ancient Seers",
      "difficulty": "hard",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l9-c5",
    "game_slug": "bible-riddles",
    "level": 9,
    "challenge_index": 5,
    "question_text": "TYPE THE NAME — MINI-BOSS RIDDLE:\nI was a New Testament Christian prophet from Judea who visited Antioch and accurately predicted by the Holy Spirit that a severe famine would sweep over the entire Greco-Roman world (which occurred during the reign of Claudius Caesar). Years later in Caesarea, I met the Apostle Paul at Philip’s house, took Paul’s belt, bound my own hands and feet, and prophesied that the owner of the belt would be delivered into the hands of the Gentiles in Jerusalem. Who am I?",
    "options": [
      "Agabus",
      "Silas",
      "Judas Barsabbas",
      "Barnabas"
    ],
    "correct_answer": "Agabus",
    "explanation": "Agabus was the early church prophet who foretold the worldwide famine under Claudius and bound himself with Paul’s belt.",
    "reference": "Acts 11:27–28; 21:10–11",
    "metadata": {
      "riddle_type": "Type the Name",
      "is_typed": true,
      "clues": [
        "Prophet from Jerusalem named Agabus.",
        "Famine prophecy in Acts 11:27–28 prompted relief funds from Antioch to Judea.",
        "Enacted a dramatic visual prophecy using Paul’s belt in Acts 21:10–11."
      ],
      "hint": "Prophet who took Paul’s belt and bound his own hands and feet.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Prophet Agabus"
      ],
      "stage": 2,
      "stage_title": "Mystery of the People",
      "level_theme": "Unusual Prophets & Ancient Seers",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l10-c1",
    "game_slug": "bible-riddles",
    "level": 10,
    "challenge_index": 1,
    "question_text": "WHO AM I?\nI was a wealthy member of the Jewish Sanhedrin from a town in Judea, an honorable counselor who was secretly a disciple of Jesus for fear of the Jews and had not consented to their counsel and deed. After the crucifixion, I boldly approached Pontius Pilate to request the body of Jesus, wrapped Him in clean linen, and laid Him in my own newly hewn rock tomb where no one had ever been laid. Who am I?",
    "options": [
      "Joseph of Arimathea",
      "Nicodemus",
      "Simon of Cyrene",
      "Jairus"
    ],
    "correct_answer": "Joseph of Arimathea",
    "explanation": "Joseph of Arimathea, a rich Sanhedrin member and secret disciple, claimed Jesus’ body from Pilate and buried Him in his private garden tomb.",
    "reference": "Matthew 27:57–60; John 19:38–42",
    "metadata": {
      "riddle_type": "Who Am I?",
      "is_typed": false,
      "clues": [
        "A native of Arimathea.",
        "Fulfilled Isaiah 53:9: \"He made his grave with the wicked, and with a rich man in his death.\"",
        "Joined by Nicodemus bearing seventy-five pounds of myrrh and aloes."
      ],
      "hint": "Wealthy council member who donated his new rock tomb for Jesus.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Joseph of Arimathea",
        "Joseph from Arimathea"
      ],
      "stage": 2,
      "stage_title": "Mystery of the People",
      "level_theme": "Enigmas of the Gospels & Passion Week",
      "difficulty": "easy",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l10-c2",
    "game_slug": "bible-riddles",
    "level": 10,
    "challenge_index": 2,
    "question_text": "WHO AM I?\nI was a traveler from North Africa coming in from the country outside Jerusalem on the day of Passover when Roman soldiers conscripted me by force to carry the crossbeam of Jesus behind Him along the Via Dolorosa to Golgotha. Mark’s Gospel identifies me as the father of two early church believers, Alexander and Rufus. Who am I?",
    "options": [
      "Simon of Cyrene",
      "Lucius of Cyrene",
      "Simon the Zealot",
      "Cleopas"
    ],
    "correct_answer": "Simon of Cyrene",
    "explanation": "Simon of Cyrene was compelled by Roman soldiers to carry Jesus’ cross on the way to Golgotha.",
    "reference": "Matthew 27:32; Mark 15:21; Luke 23:26",
    "metadata": {
      "riddle_type": "Who Am I?",
      "is_typed": false,
      "clues": [
        "A native of Cyrene in modern Libya.",
        "Compelled (Greek: aggareuo) by Roman soldiers to carry Jesus’ cross.",
        "Sons Alexander and Rufus were well known in the early church."
      ],
      "hint": "Man from Cyrene compelled by Roman soldiers to carry Jesus’ cross.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Simon the Cyrenian",
        "Simon of Cyrene"
      ],
      "stage": 2,
      "stage_title": "Mystery of the People",
      "level_theme": "Enigmas of the Gospels & Passion Week",
      "difficulty": "easy",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l10-c3",
    "game_slug": "bible-riddles",
    "level": 10,
    "challenge_index": 3,
    "question_text": "THE EVENT RIDDLE:\nIn the Garden of Gethsemane on the night of Jesus’ betrayal, an unnamed young man was following Jesus wearing nothing but a linen cloth over his naked body. When the arresting officers seized him, he slipped out of the linen cloth and fled into the dark night completely naked. Which Gospel is the ONLY one to record this unusual incident?",
    "options": [
      "Gospel of Mark",
      "Gospel of Matthew",
      "Gospel of Luke",
      "Gospel of John"
    ],
    "correct_answer": "Gospel of Mark",
    "explanation": "The young man who fled naked leaving his linen cloth in Gethsemane is recorded solely in Mark 14:51–52.",
    "reference": "Mark 14:51–52",
    "metadata": {
      "riddle_type": "The Event Riddle",
      "is_typed": false,
      "clues": [
        "Traditionally thought to be an autobiographical signature of the author.",
        "Recorded immediately after all the disciples deserted Jesus and fled.",
        "Appears in chapter 14, verses 51–52."
      ],
      "hint": "Second Gospel; shortest Gospel.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Mark",
        "Gospel according to Mark"
      ],
      "stage": 2,
      "stage_title": "Mystery of the People",
      "level_theme": "Enigmas of the Gospels & Passion Week",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l10-c4",
    "game_slug": "bible-riddles",
    "level": 10,
    "challenge_index": 4,
    "question_text": "THE THREE-CLUE RIDDLE:\nClue 1: I was the personal servant of the high priest Caiaphas who went with the cohort to arrest Jesus in Gethsemane.\nClue 2: In the confusion of the arrest, Simon Peter drew a sword and struck me, cutting off my right ear completely.\nClue 3: Jesus rebuked Peter, touched my bleeding ear, and healed me on the spot—the very last healing miracle Jesus performed before His crucifixion. Who am I?",
    "options": [
      "Malchus",
      "Barabbas",
      "Alexander",
      "Demetrius"
    ],
    "correct_answer": "Malchus",
    "explanation": "Malchus was the servant of Caiaphas whose severed right ear was healed by Jesus in the Garden of Gethsemane.",
    "reference": "John 18:10–11; Luke 22:50–51",
    "metadata": {
      "riddle_type": "The Three-Clue Riddle",
      "is_typed": false,
      "clues": [
        "Named specifically only in the Gospel of John (18:10).",
        "Healing is recorded specifically only in the Gospel of Luke (22:51).",
        "Relative of mine later questioned Peter in the high priest’s courtyard."
      ],
      "hint": "High priest’s servant whose severed ear Jesus healed in Gethsemane.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Malchos"
      ],
      "stage": 2,
      "stage_title": "Mystery of the People",
      "level_theme": "Enigmas of the Gospels & Passion Week",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l10-c5",
    "game_slug": "bible-riddles",
    "level": 10,
    "challenge_index": 5,
    "question_text": "TYPE THE NAME — MINI-BOSS RIDDLE:\nOn the afternoon of the resurrection, two disciples were walking from Jerusalem to a village about seven miles away named Emmaus, mourning the crucifixion. A resurrected stranger drew near and walked with them, rebuking them for being slow of heart to believe all that the prophets had spoken, and expounded to them in all the Scriptures the things concerning Himself. While one disciple remains anonymous, what is the specific name of the other disciple recorded in Luke 24:18?",
    "options": [
      "Cleopas",
      "Clopas",
      "Barnabas",
      "Nathanael"
    ],
    "correct_answer": "Cleopas",
    "explanation": "Cleopas was named in Luke 24:18 as one of the two Emmaus disciples whose eyes were opened at the breaking of bread.",
    "reference": "Luke 24:13–35",
    "metadata": {
      "riddle_type": "Type the Name",
      "is_typed": true,
      "clues": [
        "Asked Jesus: \"Are you the only visitor to Jerusalem who does not know the things that have happened there in these days?\"",
        "Eyes were opened when Jesus broke the bread at the dinner table.",
        "Hastened back to Jerusalem that same night to report to the eleven."
      ],
      "hint": "One of the two disciples on the road to Emmaus whose name is recorded in Luke 24.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Cleophas"
      ],
      "stage": 2,
      "stage_title": "Mystery of the People",
      "level_theme": "Enigmas of the Gospels & Passion Week",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l11-c1",
    "game_slug": "bible-riddles",
    "level": 11,
    "challenge_index": 1,
    "question_text": "WHAT AM I?\nI was an ornate garment of gold, blue, purple, and scarlet yarns, and fine twisted linen, worn over the blue robe of the high priest. On my shoulder pieces were two onyx stones engraved with the names of the twelve sons of Israel, six on each stone according to their birth, so that the high priest bore their remembrance before the Lord continually. What am I?",
    "options": [
      "The Ephod",
      "The Tunic",
      "The Turban",
      "The Sash"
    ],
    "correct_answer": "The Ephod",
    "explanation": "The Ephod was the sacred vestment of the high priest made of gold and colorful twisted linen bearing two onyx shoulder stones with the twelve tribal names.",
    "reference": "Exodus 28:6–14; 39:2–7",
    "metadata": {
      "riddle_type": "What Am I?",
      "is_typed": false,
      "clues": [
        "Worn specifically by the Aaronic high priest.",
        "Girded with a skillfully woven band of the same materials.",
        "The breastplate of judgment was attached to me with gold rings and blue cords."
      ],
      "hint": "Sacred vestment bearing two engraved onyx shoulder stones.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Ephod",
        "The Priestly Ephod"
      ],
      "stage": 3,
      "stage_title": "Objects and Symbols",
      "level_theme": "Priestly Vestments & Sanctuary Symbols",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l11-c2",
    "game_slug": "bible-riddles",
    "level": 11,
    "challenge_index": 2,
    "question_text": "WHAT AM I?\nWe were two mysterious sacred lots or stones placed inside the breastplate of judgment over Aaron’s heart when he went in before the Lord. Our names translate from Hebrew as \"Lights\" and \"Perfections,\" and we were consulted by the high priest to discern the divine will on national questions. What are we?",
    "options": [
      "The Urim and Thummim",
      "The Two Stone Tablets",
      "The Onyx Stones",
      "The Golden Bells and Pomegranates"
    ],
    "correct_answer": "The Urim and Thummim",
    "explanation": "The Urim and Thummim were placed inside the high priest’s breastplate to determine God’s decisions and judgments.",
    "reference": "Exodus 28:30; Leviticus 8:8; 1 Samuel 28:6; Ezra 2:63",
    "metadata": {
      "riddle_type": "What Am I?",
      "is_typed": false,
      "clues": [
        "Placed inside the square pouch of the breastpiece.",
        "King Saul complained that the Lord answered him neither by dreams, nor by us, nor by prophets (1 Samuel 28:6).",
        "Ezra ruled that returning priests with uncertain genealogies could not eat holy food until a priest stood up with us."
      ],
      "hint": "Sacred lots in Aaron’s breastplate meaning Lights and Perfections.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Urim and Thummim",
        "Urim & Thummim",
        "The Urim and the Thummim"
      ],
      "stage": 3,
      "stage_title": "Objects and Symbols",
      "level_theme": "Priestly Vestments & Sanctuary Symbols",
      "difficulty": "hard",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l11-c3",
    "game_slug": "bible-riddles",
    "level": 11,
    "challenge_index": 3,
    "question_text": "WHAT AM I?\nI was an intricately woven hem ornament alternating with golden bells along the lower edge of the blue robe of the ephod worn by the high priest. As Aaron ministered in the Holy Place, the bells chimed between me so that his sound would be heard when he went into the holy place before the Lord and when he came out, so that he would not die. What am I?",
    "options": [
      "Pomegranates of Yarn",
      "Golden Cherubim",
      "Almond Blossoms",
      "Acacia Knots"
    ],
    "correct_answer": "Pomegranates of Yarn",
    "explanation": "Pomegranates of blue, purple, and scarlet yarn alternated with golden bells on the hem of the high priest’s robe to sound his movements in the sanctuary.",
    "reference": "Exodus 28:33–35; 39:24–26",
    "metadata": {
      "riddle_type": "What Am I?",
      "is_typed": false,
      "clues": [
        "Made of blue, purple, and scarlet yarns.",
        "Shaped like a fruit with many seeds.",
        "Alternated one-for-one with golden bells."
      ],
      "hint": "Fruit-shaped yarn ornaments alternating with bells on Aaron’s robe.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Pomegranates",
        "The Pomegranates",
        "Priestly Pomegranates"
      ],
      "stage": 3,
      "stage_title": "Objects and Symbols",
      "level_theme": "Priestly Vestments & Sanctuary Symbols",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l11-c4",
    "game_slug": "bible-riddles",
    "level": 11,
    "challenge_index": 4,
    "question_text": "WHAT AM I?\nI was a pure gold plate attached by a blue cord to the forefront of Aaron’s turban, shining prominently on his forehead. Engraved on me like the engravings of a signet were the solemn words: \"HOLY TO THE LORD.\" Through me, Aaron bore any guilt involved in the holy gifts that Israel consecrated. What am I?",
    "options": [
      "The Golden Plate on the Turban",
      "The Breastplate of Judgment",
      "The Golden Censer",
      "The Mercy Seat"
    ],
    "correct_answer": "The Golden Plate on the Turban",
    "explanation": "The golden plate engraved \"HOLY TO THE LORD\" was fastened to the front of the high priest’s turban so the gifts of Israel would be accepted.",
    "reference": "Exodus 28:36–38; 39:30–31",
    "metadata": {
      "riddle_type": "What Am I?",
      "is_typed": false,
      "clues": [
        "Also called the golden diadem or holy crown.",
        "Engraved with: \"HOLY TO THE LORD\" (Qodesh Le-Yahweh).",
        "Fastened with a blue lace on the high priest’s mitre/turban."
      ],
      "hint": "Forehead gold plate engraved with \"HOLY TO THE LORD\".",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "The Golden Plate",
        "Golden Plate",
        "The Golden Diadem",
        "Holy Crown"
      ],
      "stage": 3,
      "stage_title": "Objects and Symbols",
      "level_theme": "Priestly Vestments & Sanctuary Symbols",
      "difficulty": "hard",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l11-c5",
    "game_slug": "bible-riddles",
    "level": 11,
    "challenge_index": 5,
    "question_text": "TYPE THE OBJECT — MINI-BOSS RIDDLE:\nI was a gold-plated square pouch, nine inches by nine inches (a span), adorned with four rows of three precious stones each—twelve unique gems mounted in gold filigree settings, each engraved with the name of one of the twelve tribes of Israel. Two gold cords and blue ribbons fastened me securely to the ephod. What am I?",
    "options": [
      "The Breastplate of Judgment",
      "The Ephod",
      "The Ark of the Covenant",
      "The Table of Showbread"
    ],
    "correct_answer": "The Breastplate of Judgment",
    "explanation": "The Breastpiece (Breastplate) of Judgment held twelve engraved gemstones representing the twelve tribes of Israel over the high priest’s heart.",
    "reference": "Exodus 28:15–29; 39:8–21",
    "metadata": {
      "riddle_type": "Type the Object",
      "is_typed": true,
      "clues": [
        "Contained the Urim and Thummim within my fold.",
        "Row 1: carnelian, chrysolite, emerald; Row 4: beryl, onyx, jasper.",
        "Designated the \"Breastpiece of Judgment\" (Choshen Mishpat)."
      ],
      "hint": "Twelve-gem vestment worn over the high priest’s heart.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Breastplate of Judgment",
        "The Breastplate",
        "Breastplate",
        "Breastpiece",
        "The Breastpiece"
      ],
      "stage": 3,
      "stage_title": "Objects and Symbols",
      "level_theme": "Priestly Vestments & Sanctuary Symbols",
      "difficulty": "master",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l12-c1",
    "game_slug": "bible-riddles",
    "level": 12,
    "challenge_index": 1,
    "question_text": "WHAT AM I?\nWe were three hundred ordinary household vessels of clay, each containing a burning torch hidden within our hollow interior. At the beginning of the middle watch, when Gideon gave the signal around the Midianite camp in the valley of Jezreel, our owners shattered all of us simultaneously, held the blazing torches in their left hands, blew trumpets in their right hands, and shouted, \"A sword for the Lord and for Gideon!\" What are we?",
    "options": [
      "Gideon’s Pitchers and Jars",
      "Elijah’s Water Pots",
      "The Jars of Cana",
      "Jeremiah’s Clay Flask"
    ],
    "correct_answer": "Gideon’s Pitchers and Jars",
    "explanation": "Gideon equipped 300 men with trumpets, empty pitchers, and torches inside the pitchers to rout Midian.",
    "reference": "Judges 7:16–22",
    "metadata": {
      "riddle_type": "What Am I?",
      "is_typed": false,
      "clues": [
        "Clay jars or pitchers used by Gideon’s 300 men.",
        "Shattering created a sudden explosion of noise and light.",
        "Caused the vast Midianite army to panic and turn their swords against one another."
      ],
      "hint": "Clay jars shattered by Gideon’s 300 warriors to reveal hidden torches.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Gideons Pitchers",
        "Clay Pitchers",
        "Pitchers and Torches",
        "Gideons Jars"
      ],
      "stage": 3,
      "stage_title": "Objects and Symbols",
      "level_theme": "Instruments of War & Deliverance",
      "difficulty": "easy",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l12-c2",
    "game_slug": "bible-riddles",
    "level": 12,
    "challenge_index": 2,
    "question_text": "WHAT AM I?\nI was an unlikely, freshly discarded skeletal bone of a beast of burden that Samson grabbed from the ground at Lehi when the Spirit of the Lord rushed upon him. With me in his hand, he struck down one thousand Philistines and proclaimed a poetic riddle: \"With the jawbone of a donkey, heaps upon heaps, with the jawbone of a donkey have I struck down a thousand men.\" What am I?",
    "options": [
      "The Jawbone of a Donkey",
      "Shamgar’s Oxgoad",
      "David’s Sling",
      "Jael’s Tent Peg"
    ],
    "correct_answer": "The Jawbone of a Donkey",
    "explanation": "Samson slew 1,000 Philistines with a fresh jawbone of a donkey at Lehi and God quenched his thirst with spring water from the hollow place.",
    "reference": "Judges 15:14–19",
    "metadata": {
      "riddle_type": "What Am I?",
      "is_typed": false,
      "clues": [
        "A fresh jawbone (not dried or brittle).",
        "After the slaughter, Samson threw me away and named the place Ramath-lehi.",
        "God split open a hollow basin at Lehi and water gushed out to revive Samson’s thirst."
      ],
      "hint": "Bone weapon used by Samson to slay 1,000 Philistine soldiers.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Jawbone of an Ass",
        "Jawbone of a Donkey",
        "Donkey’s Jawbone",
        "The Jawbone"
      ],
      "stage": 3,
      "stage_title": "Objects and Symbols",
      "level_theme": "Instruments of War & Deliverance",
      "difficulty": "easy",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l12-c3",
    "game_slug": "bible-riddles",
    "level": 12,
    "challenge_index": 3,
    "question_text": "WHAT AM I?\nI was a secret projectile used in an open field near the stone Ezel by the crown prince of Israel to deliver life-or-death intelligence to David while King Saul sought his life. When I was shot beyond a boy, the prince called out, \"Is not the arrow beyond you? Hurry! Stay not!\", which was the prearranged code that David had to flee. What am I?",
    "options": [
      "Jonathan’s Signal Arrow",
      "Jehu’s Arrow",
      "Ahab’s Stray Arrow",
      "David’s Spear"
    ],
    "correct_answer": "Jonathan’s Signal Arrow",
    "explanation": "Jonathan shot three arrows past a boy as a prearranged signal to warn David that King Saul was determined to put him to death.",
    "reference": "1 Samuel 20:18–42",
    "metadata": {
      "riddle_type": "What Am I?",
      "is_typed": false,
      "clues": [
        "Shot by Jonathan with his bow.",
        "Retrieved by a young boy who knew nothing of the matter.",
        "Signaled that Saul had determined to kill David."
      ],
      "hint": "Arrow shot by Jonathan as a code to warn David to flee.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Jonathans Arrow",
        "The Arrow of Jonathan",
        "Jonathan’s Arrow"
      ],
      "stage": 3,
      "stage_title": "Objects and Symbols",
      "level_theme": "Instruments of War & Deliverance",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l12-c4",
    "game_slug": "bible-riddles",
    "level": 12,
    "challenge_index": 4,
    "question_text": "WHAT AM I?\nI was the massive, nine-foot-long weapon of a Philistine giant from Gath whose iron head weighed six hundred shekels (about fifteen pounds), and whose shaft was described as being like a weaver’s beam. Later, after my owner was beheaded, my blade was wrapped in a cloth behind the priestly ephod at Nob until David claimed me, declaring: \"There is none like that; give it to me.\" What am I?",
    "options": [
      "Goliath’s Sword",
      "Saul’s Spear",
      "Joab’s Dagger",
      "Benaiah’s Spear"
    ],
    "correct_answer": "Goliath’s Sword",
    "explanation": "The sword of Goliath was kept wrapped in a cloth behind the ephod at Nob until Ahimelech gave it to David.",
    "reference": "1 Samuel 17:7, 51; 21:8–9",
    "metadata": {
      "riddle_type": "What Am I?",
      "is_typed": false,
      "clues": [
        "Weapon of Goliath the Philistine champion.",
        "David took Goliath’s own sword from its sheath to cut off his head.",
        "Given to David by the priest Ahimelech at Nob."
      ],
      "hint": "Giant’s blade kept at Nob and claimed by David.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "The Sword of Goliath",
        "Goliaths Sword"
      ],
      "stage": 3,
      "stage_title": "Objects and Symbols",
      "level_theme": "Instruments of War & Deliverance",
      "difficulty": "easy",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l12-c5",
    "game_slug": "bible-riddles",
    "level": 12,
    "challenge_index": 5,
    "question_text": "TYPE THE OBJECT — MINI-BOSS RIDDLE:\nSelected by a young shepherd from the bed of the brook Elah, we were five smooth items placed carefully into a shepherd’s pouch. One of us was seated into a leather sling, hurled with lethal accuracy, and sank deep into the forehead of the nine-foot champion of the Philistines, causing him to fall face down on the earth. What are we?",
    "options": [
      "Five Smooth Stones",
      "Five Barley Loaves",
      "Five Shekels of Silver",
      "Five Golden Tumors"
    ],
    "correct_answer": "Five Smooth Stones",
    "explanation": "David chose five smooth stones from the brook; the first stone struck Goliath’s forehead and brought down the giant.",
    "reference": "1 Samuel 17:40–49",
    "metadata": {
      "riddle_type": "Type the Object",
      "is_typed": true,
      "clues": [
        "Picked from the valley brook by David before facing Goliath.",
        "Sank into Goliath’s forehead.",
        "Symbol of divine victory without sword or spear."
      ],
      "hint": "Five smooth brook projectiles picked by David to face Goliath.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Smooth Stones",
        "David’s Stones",
        "Davids Stones",
        "Five Stones"
      ],
      "stage": 3,
      "stage_title": "Objects and Symbols",
      "level_theme": "Instruments of War & Deliverance",
      "difficulty": "medium",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l13-c1",
    "game_slug": "bible-riddles",
    "level": 13,
    "challenge_index": 1,
    "question_text": "WHAT AM I?\nI was an awe-inspiring royal seat built of pure ivory overlaid with the finest gold. I had six ascending steps, a rounded back, armrests flanked by two sculpted lions, and twelve carved lions standing on the six steps—one on each end of every step. Scripture notes that \"nothing like it was ever made for any other kingdom.\" What am I?",
    "options": [
      "Solomon’s Ivory Throne",
      "Saul’s Seat at the Banquet",
      "David’s Couch",
      "Ahasuerus’ Golden Scepter"
    ],
    "correct_answer": "Solomon’s Ivory Throne",
    "explanation": "Solomon’s great throne of ivory and gold had six steps flanked by twelve lions, unique in the ancient world.",
    "reference": "1 Kings 10:18–20; 2 Chronicles 9:17–19",
    "metadata": {
      "riddle_type": "What Am I?",
      "is_typed": false,
      "clues": [
        "Built by King Solomon in Jerusalem.",
        "Featured twelve lions guarding six steps.",
        "Footstool of gold was attached to it."
      ],
      "hint": "Solomon’s majestic throne guarded by twelve carved lions on six steps.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "The Great Ivory Throne",
        "Solomons Throne",
        "Ivory Throne"
      ],
      "stage": 3,
      "stage_title": "Objects and Symbols",
      "level_theme": "Royal Relics & Prophetic Emblems",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l13-c2",
    "game_slug": "bible-riddles",
    "level": 13,
    "challenge_index": 2,
    "question_text": "WHAT AM I?\nI was a visual theatrical prop forged by the court prophet Zedekiah son of Chenaanah before the combined armies of King Ahab of Israel and King Jehoshaphat of Judah. My owner pushed through the crowd wearing me, declaring: \"With these you shall push the Syrians until they are destroyed!\"—only for Ahab to be struck by a random arrow shortly after. What am I?",
    "options": [
      "Horns of Iron",
      "Golden Calves",
      "Bronze Shields",
      "Iron Chariot Wheels"
    ],
    "correct_answer": "Horns of Iron",
    "explanation": "Zedekiah son of Chenaanah made horns of iron to falsely prophesy that Ahab would gore the Syrians to destruction.",
    "reference": "1 Kings 22:11; 2 Chronicles 18:10",
    "metadata": {
      "riddle_type": "What Am I?",
      "is_typed": false,
      "clues": [
        "Forged of iron.",
        "Worn or brandished by false prophet Zedekiah.",
        "Represented false military horns of victory."
      ],
      "hint": "Iron horns made by false prophet Zedekiah to deceive King Ahab.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Iron Horns",
        "Zedekiah’s Iron Horns",
        "The Horns of Iron"
      ],
      "stage": 3,
      "stage_title": "Objects and Symbols",
      "level_theme": "Royal Relics & Prophetic Emblems",
      "difficulty": "hard",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l13-c3",
    "game_slug": "bible-riddles",
    "level": 13,
    "challenge_index": 3,
    "question_text": "WHAT AM I?\nI was an earthenware flask purchased from a potter that the prophet Jeremiah was commanded to take into the Valley of the Son of Hinnom before the elders of the people and the priests. There, in Topheth, Jeremiah shattered me into irreparable pieces, announcing that Yahweh would break Jerusalem and its inhabitants just as one breaks a potter’s vessel so that it can never be mended again. What am I?",
    "options": [
      "The Broken Earthenware Flask",
      "The Golden Censer",
      "The Bronze Basin",
      "The Widow’s Oil Jar"
    ],
    "correct_answer": "The Broken Earthenware Flask",
    "explanation": "Jeremiah bought an earthenware flask and smashed it in the Valley of Ben-Hinnom to enact the irreversible judgment on Jerusalem.",
    "reference": "Jeremiah 19:1–13",
    "metadata": {
      "riddle_type": "What Am I?",
      "is_typed": false,
      "clues": [
        "A potter’s earthen flask (bottle).",
        "Broken at the Potsherd Gate (Harsith Gate).",
        "Prophesied the total destruction of Jerusalem by the Babylonians."
      ],
      "hint": "Potter’s jar smashed by Jeremiah in the valley of Ben-Hinnom.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Potter’s Flask",
        "Earthen Flask",
        "The Broken Jar",
        "Potter’s Earthen Bottle"
      ],
      "stage": 3,
      "stage_title": "Objects and Symbols",
      "level_theme": "Royal Relics & Prophetic Emblems",
      "difficulty": "hard",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l13-c4",
    "game_slug": "bible-riddles",
    "level": 13,
    "challenge_index": 4,
    "question_text": "WHAT AM I?\nI was a linen waistband (girdle) that the prophet Jeremiah was instructed to buy, wear on his loins without putting into water, and then take on a long journey to the river Euphrates (Perath) to bury in a cleft of the rock. When Jeremiah returned many days later to dig me up, I was ruined, spoiled, and completely profitable for nothing—symbolizing how God would ruin the pride of Judah. What am I?",
    "options": [
      "Jeremiah’s Linen Belt",
      "Elijah’s Leather Belt",
      "John the Baptist’s Girdle",
      "Aaron’s Sash"
    ],
    "correct_answer": "Jeremiah’s Linen Belt",
    "explanation": "Jeremiah hid a linen belt by the Euphrates; when retrieved spoiled, it demonstrated how pride had corrupted Judah.",
    "reference": "Jeremiah 13:1–11",
    "metadata": {
      "riddle_type": "What Am I?",
      "is_typed": false,
      "clues": [
        "Made of fine linen.",
        "Hidden in a rock crevice by the Euphrates.",
        "Showed that Israel was meant to cling to Yahweh as a belt clings to a man’s waist."
      ],
      "hint": "Linen belt buried by the Euphrates until it was ruined and worthless.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Linen Belt",
        "Jeremiahs Linen Belt",
        "The Linen Girdle",
        "Jeremiah’s Girdle"
      ],
      "stage": 3,
      "stage_title": "Objects and Symbols",
      "level_theme": "Royal Relics & Prophetic Emblems",
      "difficulty": "hard",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l13-c5",
    "game_slug": "bible-riddles",
    "level": 13,
    "challenge_index": 5,
    "question_text": "TYPE THE OBJECT — MINI-BOSS RIDDLE:\nI was a common construction brick (clay tablet) upon which the prophet Ezekiel was commanded to engrave a detailed diagram of the city of Jerusalem. The prophet then built miniature siege works, threw up an assault ramp, set camps around it, placed battering rams against it on all sides, and held an iron griddle (plate) between himself and the brick as an iron wall—serving as a dramatic prophetic sign to the house of Israel. What am I?",
    "options": [
      "Ezekiel’s Engraved Brick",
      "Solomon’s Foundation Stone",
      "Zerubbabel’s Capstone",
      "The Plumb Line"
    ],
    "correct_answer": "Ezekiel’s Engraved Brick",
    "explanation": "Ezekiel engraved Jerusalem on a clay brick and staged a miniature siege against it to signify the coming Babylonian destruction.",
    "reference": "Ezekiel 4:1–3",
    "metadata": {
      "riddle_type": "Type the Object",
      "is_typed": true,
      "clues": [
        "A clay brick or tile engraved with the blueprint of Jerusalem.",
        "Besieged with miniature ramps, camps, and battering rams.",
        "Prophet lay on his left side for 390 days and right side for 40 days."
      ],
      "hint": "Clay building brick upon which Ezekiel engraved Jerusalem under miniature siege.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Engraved Brick",
        "Ezekiel’s Brick",
        "Ezekiels Brick",
        "The Clay Brick",
        "Clay Tablet"
      ],
      "stage": 3,
      "stage_title": "Objects and Symbols",
      "level_theme": "Royal Relics & Prophetic Emblems",
      "difficulty": "master",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l14-c1",
    "game_slug": "bible-riddles",
    "level": 14,
    "challenge_index": 1,
    "question_text": "WHAT AM I?\nI was an exquisite vessel made of soft white stone, filled with a pound of pure nard of extraordinary value—worth more than three hundred denarii (a full year’s wages for a laborer). Brought into a banquet in Bethany, my owner broke my neck and poured my fragrant contents upon the head and feet of Jesus, wiping His feet with her hair until the entire house was filled with the fragrance. What am I?",
    "options": [
      "The Alabaster Flask of Nard",
      "The Golden Censer",
      "The Water Jar of Cana",
      "The Cup of Blessing"
    ],
    "correct_answer": "The Alabaster Flask of Nard",
    "explanation": "The alabaster flask containing costly pure nard was broken by Mary of Bethany to anoint Jesus beforehand for His burial.",
    "reference": "Matthew 26:6–13; Mark 14:3–9; John 12:1–8",
    "metadata": {
      "riddle_type": "What Am I?",
      "is_typed": false,
      "clues": [
        "Crafted from translucent white alabaster.",
        "Broke open by Mary of Bethany (sister of Martha and Lazarus).",
        "Jesus defended the woman: \"She has done it for my burial.\""
      ],
      "hint": "White stone jar of costly perfume broken over Jesus’ head and feet.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Alabaster Flask",
        "Alabaster Box",
        "Alabaster Jar of Perfume",
        "Alabaster Jar"
      ],
      "stage": 3,
      "stage_title": "Objects and Symbols",
      "level_theme": "New Testament Sacred Objects",
      "difficulty": "easy",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l14-c2",
    "game_slug": "bible-riddles",
    "level": 14,
    "challenge_index": 2,
    "question_text": "WHAT AM I?\nWe were thirty silver coins paid from the temple treasury to an apostle who agreed to betray his Master in a secluded olive grove. Consumed with remorse after Jesus was condemned, the traitor flung us across the sanctuary floor before hanging himself. Because we were blood money, the chief priests refused to put us into the treasury and used us to buy the Potter’s Field as a burial place for foreigners. What are we?",
    "options": [
      "The Thirty Pieces of Silver",
      "The Temple Shekel",
      "The Widow’s Two Mites",
      "The Stater in the Fish’s Mouth"
    ],
    "correct_answer": "The Thirty Pieces of Silver",
    "explanation": "Judas Iscariot betrayed Jesus for thirty pieces of silver; cast into the temple, the money purchased the Potter’s Field.",
    "reference": "Matthew 26:14–16; 27:3–10; Zechariah 11:12–13",
    "metadata": {
      "riddle_type": "What Am I?",
      "is_typed": false,
      "clues": [
        "Thirty pieces of silver (Tyrian shekels/tetradrachms).",
        "Fulfilled Zechariah 11:12–13: \"They weighed out as my price thirty pieces of silver.\"",
        "Bought the field called Akeldama, the Field of Blood."
      ],
      "hint": "Thirty silver coins paid to Judas to betray Christ.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Thirty Pieces of Silver",
        "30 Pieces of Silver",
        "The Blood Money"
      ],
      "stage": 3,
      "stage_title": "Objects and Symbols",
      "level_theme": "New Testament Sacred Objects",
      "difficulty": "easy",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l14-c3",
    "game_slug": "bible-riddles",
    "level": 14,
    "challenge_index": 3,
    "question_text": "WHAT AM I?\nI was an inner undergarment (chiton) worn by Jesus on the day of His crucifixion. Woven in one piece from the top down without any seam, the four Roman executioners chose not to tear me into four pieces like His other garments, but cast lots for me, fulfilling the ancient prophecy of Psalm 22:18: \"They divided my garments among them, and for my clothing they cast lots.\" What am I?",
    "options": [
      "The Seamless Tunic of Christ",
      "The Purple Robe",
      "The Linen Shroud",
      "The Veil of the Temple"
    ],
    "correct_answer": "The Seamless Tunic of Christ",
    "explanation": "Jesus’ seamless tunic was not torn by the soldiers at the cross; they cast lots to decide who would get it.",
    "reference": "John 19:23–24; Psalm 22:18",
    "metadata": {
      "riddle_type": "What Am I?",
      "is_typed": false,
      "clues": [
        "Woven seamless throughout.",
        "Sought intact by the Roman quaternion of soldiers at Golgotha.",
        "Regarded as a symbol of the undivided unity of Christ’s church."
      ],
      "hint": "Seamless woven tunic of Jesus for which Roman soldiers cast lots.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "The Seamless Tunic",
        "Seamless Robe",
        "Seamless Garment",
        "Seamless Tunic"
      ],
      "stage": 3,
      "stage_title": "Objects and Symbols",
      "level_theme": "New Testament Sacred Objects",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l14-c4",
    "game_slug": "bible-riddles",
    "level": 14,
    "challenge_index": 4,
    "question_text": "WHAT AM I?\nI was a massive, sixty-foot-high, beautifully woven curtain of blue, purple, and scarlet yarns that hung inside the Jerusalem Temple, dividing the Holy Place from the Holy of Holies. At the exact moment Jesus breathed His last on the cross and cried, \"It is finished!\", an invisible power tore me in two from top to bottom, demonstrating that the way into God’s presence was now thrown wide open to all believers. What am I?",
    "options": [
      "The Veil of the Temple",
      "The High Priest’s Robe",
      "The Tabernacle Curtains",
      "The Linen Shroud"
    ],
    "correct_answer": "The Veil of the Temple",
    "explanation": "The veil of the temple separating the Holy of Holies was torn in two from top to bottom when Jesus died, opening access to God.",
    "reference": "Matthew 27:51; Mark 15:38; Hebrews 10:19–20",
    "metadata": {
      "riddle_type": "What Am I?",
      "is_typed": false,
      "clues": [
        "The veil of the temple (katapetasma).",
        "Torn from top to bottom (indicating divine action, not human hands).",
        "Hebrews 10:19–20 describes Jesus’ flesh as this veil opened for us."
      ],
      "hint": "Temple curtain torn in two from top to bottom at Jesus’ death.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "The Temple Veil",
        "Veil of the Temple",
        "The Veil"
      ],
      "stage": 3,
      "stage_title": "Objects and Symbols",
      "level_theme": "New Testament Sacred Objects",
      "difficulty": "easy",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l14-c5",
    "game_slug": "bible-riddles",
    "level": 14,
    "challenge_index": 5,
    "question_text": "TYPE THE OBJECT — MINI-BOSS RIDDLE:\nI was a vision seen three times by the Apostle Peter while praying in a rooftop trance in Joppa at the sixth hour. Descending from heaven like a great linen sail held by four corners, I contained all kinds of four-footed animals, reptiles of the earth, and birds of the air. A voice commanded, \"Rise, Peter; kill and eat.\" When Peter protested that he had never eaten anything common or unclean, the voice answered: \"What God has made clean, do not call common.\" What am I?",
    "options": [
      "The Great Sheet Let Down by Four Corners",
      "The Ark of the Covenant",
      "The Cloud of Glory",
      "The Net Full of Fish"
    ],
    "correct_answer": "The Great Sheet Let Down by Four Corners",
    "explanation": "Peter saw a great sheet descending from heaven containing unclean animals, teaching that God has cleansed the Gentiles for salvation.",
    "reference": "Acts 10:9–16; 11:5–10",
    "metadata": {
      "riddle_type": "Type the Object",
      "is_typed": true,
      "clues": [
        "A great sheet let down from heaven by its four corners.",
        "Prepared Peter to receive the Gentile messengers from Cornelius in Caesarea.",
        "Signified that Gentiles were admitted into the covenant people of God without kosher dietary restrictions."
      ],
      "hint": "Great linen sheet let down from heaven by its four corners with animals.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Great Sheet",
        "The Great Sheet",
        "Sheet with Four Corners",
        "The Great Sheet with Animals"
      ],
      "stage": 3,
      "stage_title": "Objects and Symbols",
      "level_theme": "New Testament Sacred Objects",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l15-c1",
    "game_slug": "bible-riddles",
    "level": 15,
    "challenge_index": 1,
    "question_text": "WHAT AM I?\nIn Revelation 5, we are golden vessels held by the twenty-four elders as they fall down before the Lamb on the heavenly throne. We are full of aromatic burning incense, which the Apostle John explicitly interprets as the prayers of the saints ascending before God. What are we?",
    "options": [
      "Golden Bowls Full of Incense",
      "Seven Golden Lampstands",
      "Seven Golden Trumpets",
      "Seven Golden Vials of Wrath"
    ],
    "correct_answer": "Golden Bowls Full of Incense",
    "explanation": "The twenty-four elders held golden bowls full of incense, which represent the prayers of the saints before the throne of God.",
    "reference": "Revelation 5:8; 8:3–4",
    "metadata": {
      "riddle_type": "What Am I?",
      "is_typed": false,
      "clues": [
        "Golden bowls (or golden vials in the KJV).",
        "Filled with incense symbolizing the intercessions of God’s people.",
        "Held by the 24 elders along with harps."
      ],
      "hint": "Golden bowls filled with incense representing the prayers of the saints.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Golden Bowls",
        "Golden Vials",
        "Bowls of Incense",
        "Golden Bowls of Incense"
      ],
      "stage": 3,
      "stage_title": "Objects and Symbols",
      "level_theme": "Apocalyptic Symbols & Heavenly Vessels",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l15-c2",
    "game_slug": "bible-riddles",
    "level": 15,
    "challenge_index": 2,
    "question_text": "WHAT AM I?\nIn Revelation 1, the glorified Son of Man walks in the midst of seven of us, holding seven stars in His right hand. His eyes are like a flame of fire, His voice is like the roar of many waters, and He explicitly reveals our mystery: \"The seven stars are the angels of the seven churches, and the seven [...] are the seven churches.\" What are we?",
    "options": [
      "Seven Golden Lampstands",
      "Seven Golden Candlesticks",
      "Seven Stars",
      "Seven Golden Crowns"
    ],
    "correct_answer": "Seven Golden Lampstands",
    "explanation": "The seven golden lampstands represent the seven historical churches of Asia Minor among whom the glorified Christ walks.",
    "reference": "Revelation 1:12–20; 2:1, 5",
    "metadata": {
      "riddle_type": "What Am I?",
      "is_typed": false,
      "clues": [
        "Seven golden lampstands (or candlesticks).",
        "Represent the seven churches of Asia Minor (Ephesus, Smyrna, Pergamum, etc.).",
        "Christ warns Ephesus that He will remove their lampstand if they do not repent."
      ],
      "hint": "Seven golden light-bearing stands representing the seven churches.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Seven Golden Lampstands",
        "Seven Golden Candlesticks",
        "Golden Lampstands",
        "Seven Lampstands"
      ],
      "stage": 3,
      "stage_title": "Objects and Symbols",
      "level_theme": "Apocalyptic Symbols & Heavenly Vessels",
      "difficulty": "easy",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l15-c3",
    "game_slug": "bible-riddles",
    "level": 15,
    "challenge_index": 3,
    "question_text": "WHAT AM I?\nI was an open document held in the hand of a mighty angel who came down from heaven wrapped in a cloud with a rainbow over his head, whose right foot was on the sea and left foot on the land. When the Apostle John was told to take me from the angel’s hand and eat me, I tasted sweet as honey in his mouth, but made his stomach bitterly sour. What am I?",
    "options": [
      "The Little Scroll",
      "The Seven-Sealed Book",
      "The Lamb’s Book of Life",
      "The Measuring Rod"
    ],
    "correct_answer": "The Little Scroll",
    "explanation": "John took the little scroll from the mighty angel and ate it; it tasted sweet as honey in his mouth but became bitter in his stomach.",
    "reference": "Revelation 10:1–11",
    "metadata": {
      "riddle_type": "What Am I?",
      "is_typed": false,
      "clues": [
        "The \"little scroll\" (biblaridion) in Revelation 10.",
        "Echoes Ezekiel eating the scroll of lamentations (Ezekiel 3:1–3).",
        "Followed by the command: \"You must prophesy again about many peoples and nations and languages and kings.\""
      ],
      "hint": "Little scroll eaten by John that was sweet as honey but bitter in his stomach.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Little Scroll",
        "The Little Book",
        "Little Book"
      ],
      "stage": 3,
      "stage_title": "Objects and Symbols",
      "level_theme": "Apocalyptic Symbols & Heavenly Vessels",
      "difficulty": "hard",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l15-c4",
    "game_slug": "bible-riddles",
    "level": 15,
    "challenge_index": 4,
    "question_text": "WHAT AM I?\nI was a scroll in the right hand of Him who sat on the heavenly throne, written within and on the back, and sealed with seven unbroken wax seals. When a mighty angel proclaimed with a loud voice, \"Who is worthy to open the scroll and break its seals?\", no one in heaven or on earth or under the earth was able to open me or look into me, causing John to weep loudly until the Lion of the tribe of Judah prevailed to open me. What am I?",
    "options": [
      "The Seven-Sealed Scroll",
      "The Lamb’s Book of Life",
      "The Little Scroll",
      "The Title Deed of the Earth"
    ],
    "correct_answer": "The Seven-Sealed Scroll",
    "explanation": "The seven-sealed scroll in God’s right hand contained divine redemptive judgments and could only be opened by the slain Lamb.",
    "reference": "Revelation 5:1–7; 6:1",
    "metadata": {
      "riddle_type": "What Am I?",
      "is_typed": false,
      "clues": [
        "Written inside and on the back (opisthograph).",
        "Sealed with seven seals.",
        "Opened exclusively by the Lamb standing as though slain."
      ],
      "hint": "Heavenly scroll sealed with seven seals opened only by the Lamb.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Seven Sealed Scroll",
        "The Scroll with Seven Seals",
        "The Seven-Sealed Book",
        "Seven-Sealed Scroll"
      ],
      "stage": 3,
      "stage_title": "Objects and Symbols",
      "level_theme": "Apocalyptic Symbols & Heavenly Vessels",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l15-c5",
    "game_slug": "bible-riddles",
    "level": 15,
    "challenge_index": 5,
    "question_text": "TYPE THE OBJECT — MINI-BOSS RIDDLE:\nIn Revelation 2:17, Christ promises to the overcomer in the compromised church of Pergamum: \"To the one who conquers I will give some of the hidden manna, and I will give him a [...], with a new name written on the [...] that no one knows except the one who receives it.\" What is this reward object?",
    "options": [
      "A White Stone",
      "A Golden Crown",
      "A White Robe",
      "An Iron Rod"
    ],
    "correct_answer": "A White Stone",
    "explanation": "Christ promises the overcomer in Pergamum a white stone engraved with a new, secret name, symbolizing acquittal, honor, and intimacy.",
    "reference": "Revelation 2:17",
    "metadata": {
      "riddle_type": "Type the Object",
      "is_typed": true,
      "clues": [
        "In Greco-Roman courts, a white stone symbolized acquittal, whereas a black stone signaled condemnation.",
        "Used as an admission token (tessera) to celebratory banquets.",
        "Inscribed with a secret new name known only to the recipient."
      ],
      "hint": "Reward given to the overcomer in Pergamum inscribed with a secret new name.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "White Stone",
        "The White Stone"
      ],
      "stage": 3,
      "stage_title": "Objects and Symbols",
      "level_theme": "Apocalyptic Symbols & Heavenly Vessels",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l16-c1",
    "game_slug": "bible-riddles",
    "level": 16,
    "challenge_index": 1,
    "question_text": "WHERE AM I?\nI was an oasis in the wilderness of Shur where the thirsty Israelites arrived after three days of marching without water from the Red Sea. They could not drink my waters because they were bitterly foul, causing the people to grumble against Moses. When Moses cried to the Lord, God showed him a specific tree; when he threw it into the water, my bitter springs became sweet. What place am I?",
    "options": [
      "Marah",
      "Elim",
      "Massah",
      "Rephidim"
    ],
    "correct_answer": "Marah",
    "explanation": "Marah’s bitter waters were sweetened when Moses threw a tree shown by God into the spring, and God revealed Himself as Yahweh-Rapha.",
    "reference": "Exodus 15:22–26; Numbers 33:8–9",
    "metadata": {
      "riddle_type": "Where Am I?",
      "is_typed": false,
      "clues": [
        "Name literally means \"bitterness\" in Hebrew.",
        "Directly preceded Elim, where there were twelve springs and seventy palm trees.",
        "God revealed Himself here as Yahweh-Rapha: \"I am the Lord, your healer.\""
      ],
      "hint": "Wilderness oasis whose bitter waters were sweetened by a tree.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Waters of Marah"
      ],
      "stage": 4,
      "stage_title": "Places of Mystery",
      "level_theme": "Ancient Waters & Wilderness Waypoints",
      "difficulty": "easy",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l16-c2",
    "game_slug": "bible-riddles",
    "level": 16,
    "challenge_index": 2,
    "question_text": "WHERE AM I?\nI was a remote, steep ravine east of the Jordan River where the prophet Elijah was commanded to hide during the three-and-a-half-year drought he had declared over Israel. There, ravens brought the prophet bread and meat every morning and evening, and he drank from my bubbling brook until the water dried up because there was no rain in the land. What brook am I?",
    "options": [
      "Brook Cherith",
      "Brook Kishon",
      "Brook Kidron",
      "River Jabbok"
    ],
    "correct_answer": "Brook Cherith",
    "explanation": "Brook Cherith was the secluded wadi where Elijah was sustained by ravens and brook water until the stream dried up.",
    "reference": "1 Kings 17:2–7",
    "metadata": {
      "riddle_type": "Where Am I?",
      "is_typed": false,
      "clues": [
        "Brook that flows into the Jordan from the east.",
        "Elijah hid here before being directed to the widow of Zarephath in Sidon.",
        "Miraculous ravens served as God’s couriers here."
      ],
      "hint": "Secluded brook where ravens fed Elijah bread and meat.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Cherith",
        "The Brook Cherith",
        "Wadi Cherith"
      ],
      "stage": 4,
      "stage_title": "Places of Mystery",
      "level_theme": "Ancient Waters & Wilderness Waypoints",
      "difficulty": "easy",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l16-c3",
    "game_slug": "bible-riddles",
    "level": 16,
    "challenge_index": 3,
    "question_text": "WHERE AM I?\nI was a freshwater spring and pool in lower Jerusalem fed by the waters of the Gihon Spring via King Hezekiah’s underground tunnel. Jesus spat on the ground, made clay with the saliva, anointed the eyes of a man blind from birth, and said to him: \"Go, wash in the pool of [...].\" The man went, washed, and came back seeing. What pool am I?",
    "options": [
      "Pool of Siloam",
      "Pool of Bethesda",
      "Pool of Gibeon",
      "Pool of Samaria"
    ],
    "correct_answer": "Pool of Siloam",
    "explanation": "The Pool of Siloam (meaning \"Sent\") was where the blind man washed off Jesus’ clay and received his sight.",
    "reference": "John 9:6–11; Isaiah 8:6",
    "metadata": {
      "riddle_type": "Where Am I?",
      "is_typed": false,
      "clues": [
        "John’s Gospel notes that my name translates as \"Sent\" (Shiloach).",
        "Fed by the Gihon Spring through a 1,750-foot rock tunnel.",
        "Water was drawn from me during the Feast of Tabernacles for the water libation ceremony."
      ],
      "hint": "Jerusalem pool meaning \"Sent\" where a blind man washed and received sight.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Siloam",
        "The Pool of Siloam",
        "Shiloah"
      ],
      "stage": 4,
      "stage_title": "Places of Mystery",
      "level_theme": "Ancient Waters & Wilderness Waypoints",
      "difficulty": "easy",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l16-c4",
    "game_slug": "bible-riddles",
    "level": 16,
    "challenge_index": 4,
    "question_text": "THE THREE-CLUE RIDDLE:\nClue 1: I was a spring at the foot of Mount Gilboa where Gideon and his army camped.\nClue 2: My name in Hebrew translates to \"Trembling\" or \"Spring of Trembling.\"\nClue 3: At my waters, Gideon tested his men by watching how they drank—twenty-two thousand left because they were afraid, and from the remaining ten thousand, only three hundred who lapped water like a dog were selected. What spring am I?",
    "options": [
      "Spring of Harod",
      "Waters of Megiddo",
      "Brook Kishon",
      "Well of Beersheba"
    ],
    "correct_answer": "Spring of Harod",
    "explanation": "The Spring of Harod (\"Spring of Trembling\") was where Gideon sifted his army down to 300 men based on how they lapped water.",
    "reference": "Judges 7:1–7",
    "metadata": {
      "riddle_type": "The Three-Clue Riddle",
      "is_typed": false,
      "clues": [
        "Located opposite the hill of Moreh.",
        "Sifted Gideon’s army from 32,000 down to 300.",
        "Known as the Spring of Harod (Well of Harod)."
      ],
      "hint": "Spring of Trembling where Gideon chose his 300 men who lapped water.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Well of Harod",
        "Harod",
        "The Well of Harod",
        "En-harod"
      ],
      "stage": 4,
      "stage_title": "Places of Mystery",
      "level_theme": "Ancient Waters & Wilderness Waypoints",
      "difficulty": "hard",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l16-c5",
    "game_slug": "bible-riddles",
    "level": 16,
    "challenge_index": 5,
    "question_text": "TYPE THE PLACE — MINI-BOSS RIDDLE:\nI was a double-pool near the Sheep Gate in Jerusalem surrounded by five roofed colonnades (porches). In my waters lay a multitude of invalids—blind, lame, and paralyzed—waiting for the stirring of the water, believing the first one in would be healed. Jesus walked in on the Sabbath, encountered a man who had been an invalid for thirty-eight years, and said: \"Get up, take up your bed, and walk.\" What is the Hebrew name of this five-porched pool?",
    "options": [
      "Pool of Bethesda",
      "Pool of Siloam",
      "Pool of Hezekiah",
      "Pool of Solomon"
    ],
    "correct_answer": "Pool of Bethesda",
    "explanation": "The Pool of Bethesda with five porticoes by the Sheep Gate was where Jesus healed the man paralyzed for 38 years on the Sabbath.",
    "reference": "John 5:1–9",
    "metadata": {
      "riddle_type": "Type the Place",
      "is_typed": true,
      "clues": [
        "Aramaic name means \"House of Mercy\" (Bethesda) or \"House of Olives\" (Bethzatha).",
        "Excavations near St. Anne’s Church in Jerusalem confirmed its five porticoes.",
        "Contrasted with the Pool of Siloam in John’s Gospel."
      ],
      "hint": "Five-porched pool by the Sheep Gate in Jerusalem where Jesus healed a 38-year invalid.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Bethesda",
        "Pool of Bethzatha",
        "Bethzatha",
        "The Pool of Bethesda"
      ],
      "stage": 4,
      "stage_title": "Places of Mystery",
      "level_theme": "Ancient Waters & Wilderness Waypoints",
      "difficulty": "medium",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l17-c1",
    "game_slug": "bible-riddles",
    "level": 17,
    "challenge_index": 1,
    "question_text": "WHERE AM I?\nI was the mountain ridge in the land of Moriah where Abraham was directed by God to journey for three days to offer his only beloved son Isaac as a burnt offering. On my summit, the angel of the Lord halted the raised knife, a ram caught in a thicket by its horns was sacrificed instead, and Abraham named me Yahweh-Jireh (\"The Lord will provide\"). A millennium later, Solomon built the Temple upon my threshing floor. What mountain am I?",
    "options": [
      "Mount Moriah",
      "Mount Sinai",
      "Mount Carmel",
      "Mount Zion"
    ],
    "correct_answer": "Mount Moriah",
    "explanation": "Mount Moriah was where Abraham prepared to sacrifice Isaac, God provided the ram, and Solomon later constructed the Temple.",
    "reference": "Genesis 22:1–14; 2 Chronicles 3:1",
    "metadata": {
      "riddle_type": "Where Am I?",
      "is_typed": false,
      "clues": [
        "Site of the Akedah (binding of Isaac).",
        "Purchased by David as the threshing floor of Araunah the Jebusite.",
        "Site of Solomon’s Temple (2 Chronicles 3:1)."
      ],
      "hint": "Mountain where Abraham offered Isaac and Solomon built the Temple.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Moriah",
        "Mount of the Lord"
      ],
      "stage": 4,
      "stage_title": "Places of Mystery",
      "level_theme": "Sacred Mountains & Heights",
      "difficulty": "easy",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l17-c2",
    "game_slug": "bible-riddles",
    "level": 17,
    "challenge_index": 2,
    "question_text": "WHERE AM I?\nI was a prominent mountain on the border of the land of Edom where Moses was commanded to bring Aaron and his son Eleazar before the eyes of all the congregation. On my summit, Moses stripped Aaron of his sacred high priestly vestments and placed them upon Eleazar. Aaron died there on the mountain peak at the age of one hundred and twenty-three, and Israel mourned thirty days. What mountain am I?",
    "options": [
      "Mount Hor",
      "Mount Nebo",
      "Mount Pisgah",
      "Mount Seir"
    ],
    "correct_answer": "Mount Hor",
    "explanation": "Mount Hor on the border of Edom was where Aaron was stripped of his priestly robes, died, and was buried.",
    "reference": "Numbers 20:22–29; 33:38–39",
    "metadata": {
      "riddle_type": "Where Am I?",
      "is_typed": false,
      "clues": [
        "Burial site of Aaron, Israel’s first high priest.",
        "Located on the frontier of Edom.",
        "Elevation where the high priesthood passed from Aaron to Eleazar."
      ],
      "hint": "Mountain on the border of Edom where Aaron died and was buried.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Hor",
        "Hor ha-Har"
      ],
      "stage": 4,
      "stage_title": "Places of Mystery",
      "level_theme": "Sacred Mountains & Heights",
      "difficulty": "hard",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l17-c3",
    "game_slug": "bible-riddles",
    "level": 17,
    "challenge_index": 3,
    "question_text": "THE DOUBLE-MEANING RIDDLE:\nWe were two facing mountains in central Canaan framing the ancient city of Shechem. Six tribes stood on one mountain to pronounce blessings for obedience, while six tribes stood on the other to shout solemn curses for disobedience. Joshua built an altar of unhewn stones and wrote a copy of the Law on the mountain of the curse. What are the names of these twin covenant mountains?",
    "options": [
      "Mount Gerizim and Mount Ebal",
      "Mount Sinai and Mount Horeb",
      "Mount Carmel and Mount Tabor",
      "Mount Zion and Mount Moriah"
    ],
    "correct_answer": "Mount Gerizim and Mount Ebal",
    "explanation": "Mount Gerizim was designated for blessings and Mount Ebal for curses as Israel entered the Promised Land.",
    "reference": "Deuteronomy 11:29; 27:11–13; Joshua 8:30–35",
    "metadata": {
      "riddle_type": "The Double-Meaning Riddle",
      "is_typed": false,
      "clues": [
        "Mount Gerizim for blessing (Simeon, Levi, Judah, Issachar, Joseph, Benjamin).",
        "Mount Ebal for cursing (Reuben, Gad, Asher, Zebulun, Dan, Naphtali).",
        "Located in the heart of Samaria."
      ],
      "hint": "Twin mountains of blessing and curse framing Shechem.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Gerizim and Ebal",
        "Mount Ebal and Mount Gerizim",
        "Ebal and Gerizim",
        "Gerizim & Ebal"
      ],
      "stage": 4,
      "stage_title": "Places of Mystery",
      "level_theme": "Sacred Mountains & Heights",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l17-c4",
    "game_slug": "bible-riddles",
    "level": 17,
    "challenge_index": 4,
    "question_text": "WHERE AM I?\nI was an olive-tree-covered ridge east of Jerusalem, separated from the Temple Mount by the steep Kidron Valley. David wept barefoot with his head covered as he climbed me while fleeing Absalom. Jesus wept over Jerusalem from my crest during His triumphal entry, agonized in Gethsemane at my base, ascended into heaven from my slopes, and Zechariah prophesies that His feet will stand on me in the day of the Lord, splitting me in two from east to west. What ridge am I?",
    "options": [
      "Mount of Olives",
      "Mount Zion",
      "Mount Moriah",
      "Mount of Offense"
    ],
    "correct_answer": "Mount of Olives",
    "explanation": "The Mount of Olives overlooks Jerusalem, witnessed David’s flight, Christ’s agony and ascension, and is prophesied to split at His return.",
    "reference": "2 Samuel 15:30; Zechariah 14:4; Luke 19:37–41; Acts 1:9–12",
    "metadata": {
      "riddle_type": "Where Am I?",
      "is_typed": false,
      "clues": [
        "The Mount of Olives (Olivet).",
        "Site of the Olivet Discourse (Matthew 24).",
        "Zechariah 14:4 foretells it will split in two creating a great valley."
      ],
      "hint": "Olive-covered ridge east of Jerusalem where Jesus ascended.",
      "testament": "Both",
      "acceptedAlternatives": [
        "Mount Olivet",
        "The Mount of Olives",
        "Olivet"
      ],
      "stage": 4,
      "stage_title": "Places of Mystery",
      "level_theme": "Sacred Mountains & Heights",
      "difficulty": "easy",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l17-c5",
    "game_slug": "bible-riddles",
    "level": 17,
    "challenge_index": 5,
    "question_text": "TYPE THE PLACE — MINI-BOSS RIDDLE:\nI was the highest snow-capped mountain ridge in the far north of Israel, towering over nine thousand feet above sea level at the headwaters of the Jordan River. Psalm 133 compares fraternal unity among brethren to my sweet, heavy morning dew descending upon the mountains of Zion. Christian tradition often identifies my majestic heights as the probable location of the Transfiguration of Jesus Christ. What mountain am I?",
    "options": [
      "Mount Hermon",
      "Mount Tabor",
      "Mount Carmel",
      "Mount Lebanon"
    ],
    "correct_answer": "Mount Hermon",
    "explanation": "Mount Hermon is the northern snow-capped mountain famed for its heavy dew in Psalm 133:3 and the probable site of the Transfiguration.",
    "reference": "Deuteronomy 3:8–9; Psalm 133:3; Matthew 17:1–2",
    "metadata": {
      "riddle_type": "Type the Place",
      "is_typed": true,
      "clues": [
        "Known as Sirion by the Sidonians and Senir by the Amorites (Deuteronomy 3:9).",
        "Northern boundary of the Promised Land conquered by Joshua.",
        "Snowy peaks visible throughout Galilee and the Decapolis."
      ],
      "hint": "Snowy northern mountain famed in Psalm 133 for its refreshing dew.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Hermon",
        "The Mount Hermon"
      ],
      "stage": 4,
      "stage_title": "Places of Mystery",
      "level_theme": "Sacred Mountains & Heights",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l18-c1",
    "game_slug": "bible-riddles",
    "level": 18,
    "challenge_index": 1,
    "question_text": "WHERE AM I?\nI was a small Canaanite hill town east of Bethel whose name literally means \"The Ruin.\" When Joshua sent only three thousand men to capture me after the fall of Jericho, my defenders routed them and killed thirty-six Israelites, because Achan had stolen devoted treasures in secret. After Achan was stoned in the valley of Achor, Joshua set an ambush behind me, burned me to the ground, and turned me into a permanent heap of ruins. What city am I?",
    "options": [
      "Ai",
      "Jericho",
      "Bethel",
      "Gibeon"
    ],
    "correct_answer": "Ai",
    "explanation": "Ai was the city where Israel was initially defeated due to Achan’s sin, and subsequently conquered through an ambush strategy.",
    "reference": "Joshua 7:1–5; 8:1–29",
    "metadata": {
      "riddle_type": "Where Am I?",
      "is_typed": false,
      "clues": [
        "Joshua’s second military target in Canaan.",
        "Capture involved setting five thousand men in ambush between Bethel and me.",
        "City’s king was hanged on a tree until evening."
      ],
      "hint": "Small city where Israel was defeated before Joshua ambushed and burned it.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "The City of Ai",
        "Hai"
      ],
      "stage": 4,
      "stage_title": "Places of Mystery",
      "level_theme": "Conquered Cities & Ruins",
      "difficulty": "easy",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l18-c2",
    "game_slug": "bible-riddles",
    "level": 18,
    "challenge_index": 2,
    "question_text": "WHERE AM I?\nI was the city in Ephraim where the Tabernacle was pitched and the Ark of the Covenant rested for over three centuries after the conquest of Canaan. Hannah prayed silently here for a child, Samuel heard God’s call here at night while lying near the Ark, and Eli fell backward from his seat and broke his neck when news arrived that my Ark had been captured by Philistines. Jeremiah later warned Jerusalem: \"Go now to my place that was in [...], and see what I did to it for the evil of my people Israel.\" What city am I?",
    "options": [
      "Shiloh",
      "Shechem",
      "Bethel",
      "Mizpah"
    ],
    "correct_answer": "Shiloh",
    "explanation": "Shiloh was the sanctuary home of the Tabernacle during the Judges until the Ark was captured and God abandoned the city.",
    "reference": "Joshua 18:1; 1 Samuel 1:3; 3:1–21; 4:12–18; Jeremiah 7:12–14",
    "metadata": {
      "riddle_type": "Where Am I?",
      "is_typed": false,
      "clues": [
        "First permanent religious center for the Tabernacle in the Promised Land.",
        "Hophni and Phinehas corrupted the offerings here.",
        "Destroyed by Philistines after the battle of Ebenezer."
      ],
      "hint": "City where Samuel grew up in the Tabernacle and Eli died; later destroyed.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Silo"
      ],
      "stage": 4,
      "stage_title": "Places of Mystery",
      "level_theme": "Conquered Cities & Ruins",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l18-c3",
    "game_slug": "bible-riddles",
    "level": 18,
    "challenge_index": 3,
    "question_text": "WHERE AM I?\nOriginally called Luz, I was the place where Jacob slept on a stone pillow and dreamed of a ladder set up on earth with its top reaching to heaven, and the angels of God ascending and descending on it. Awaking in awe, Jacob exclaimed, \"How awesome is this place! This is none other than the house of God, and this is the gate of heaven,\" and poured oil upon the stone. Centuries later, Jeroboam turned me into a center of apostasy by erecting one of his golden calves here. What city am I?",
    "options": [
      "Bethel",
      "Peniel",
      "Shechem",
      "Beersheba"
    ],
    "correct_answer": "Bethel",
    "explanation": "Bethel (\"House of God\"), formerly Luz, was where Jacob saw the ladder to heaven and Jeroboam later erected a golden calf.",
    "reference": "Genesis 28:10–22; 35:1–7; 1 Kings 12:28–33",
    "metadata": {
      "riddle_type": "Where Am I?",
      "is_typed": false,
      "clues": [
        "Name means \"House of God\" in Hebrew.",
        "Jacob returned here by God’s command in Genesis 35.",
        "Condemned by the prophets as Beth-aven (\"House of Iniquity\") due to Jeroboam’s calf."
      ],
      "hint": "City where Jacob saw the ladder to heaven, meaning \"House of God.\"",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Beth-el",
        "House of God"
      ],
      "stage": 4,
      "stage_title": "Places of Mystery",
      "level_theme": "Conquered Cities & Ruins",
      "difficulty": "easy",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l18-c4",
    "game_slug": "bible-riddles",
    "level": 18,
    "challenge_index": 4,
    "question_text": "THE THREE-CLUE RIDDLE:\nClue 1: I was an ancient Hivite royal city whose inhabitants sent ambassadors to Joshua disguised in worn-out sacks, patched sandals, and moldy bread.\nClue 2: We tricked Israel into making a binding covenant of peace without inquiring of the Lord.\nClue 3: When the deception was discovered, Joshua spared our lives but made us woodcutters and water carriers for the house of God forever; later, the sun stood still over me during battle. What city am I?",
    "options": [
      "Gibeon",
      "Beeroth",
      "Kiriath-jearim",
      "Chephirah"
    ],
    "correct_answer": "Gibeon",
    "explanation": "Gibeon tricked Joshua into a covenant of peace using moldy bread and worn sandals, and was the site where the sun stood still in battle.",
    "reference": "Joshua 9:3–27; 10:1–14",
    "metadata": {
      "riddle_type": "The Three-Clue Riddle",
      "is_typed": false,
      "clues": [
        "City of the crafty Gibeonites.",
        "Five Amorite kings banded together to attack me for making peace with Joshua.",
        "Site of the legendary miraculous long day when the sun stood still."
      ],
      "hint": "City that deceived Joshua with moldy bread; where the sun stood still.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "City of Gibeon"
      ],
      "stage": 4,
      "stage_title": "Places of Mystery",
      "level_theme": "Conquered Cities & Ruins",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l18-c5",
    "game_slug": "bible-riddles",
    "level": 18,
    "challenge_index": 5,
    "question_text": "TYPE THE PLACE — MINI-BOSS RIDDLE:\nI was the capital city of the ruthless Assyrian Empire on the east bank of the Tigris River, described by the prophet Nahum as \"the bloody city, all full of lies and plunder.\" An ancient metropolis requiring three days to cross on foot, my king and people repented in sackcloth and ashes at the eight-word warning of a reluctant Hebrew prophet. However, a century later, Nahum and Zephaniah prophesied my final inundation and desolate ruin. What city am I?",
    "options": [
      "Nineveh",
      "Babylon",
      "Susa",
      "Calneh"
    ],
    "correct_answer": "Nineveh",
    "explanation": "Nineveh was the Assyrian capital that repented under Jonah’s preaching, but was later completely destroyed as prophesied by Nahum.",
    "reference": "Jonah 3:1–10; Nahum 1:1; 3:1–7; Zephaniah 2:13–15",
    "metadata": {
      "riddle_type": "Type the Place",
      "is_typed": true,
      "clues": [
        "Spared in the book of Jonah when 120,000 who could not discern their right hand from their left repented.",
        "Destroyed in 612 BC by a coalition of Medes and Babylonians fulfilling Nahum.",
        "Located opposite modern Mosul, Iraq."
      ],
      "hint": "Assyrian capital city that repented in sackcloth under Jonah’s preaching.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Nineve"
      ],
      "stage": 4,
      "stage_title": "Places of Mystery",
      "level_theme": "Conquered Cities & Ruins",
      "difficulty": "medium",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l19-c1",
    "game_slug": "bible-riddles",
    "level": 19,
    "challenge_index": 1,
    "question_text": "WHERE AM I?\nI was a Roman administrative city located at the foot of Mount Hermon near the headwaters of the Jordan River, rebuilt and renamed by the tetrarch Herod Philip in honor of Caesar. In our district, Jesus asked His disciples, \"Who do people say that the Son of Man is?\", prompting Simon Peter’s famous confession: \"You are the Christ, the Son of the living God.\" What city am I?",
    "options": [
      "Caesarea Philippi",
      "Caesarea Maritima",
      "Capernaum",
      "Bethsaida"
    ],
    "correct_answer": "Caesarea Philippi",
    "explanation": "Caesarea Philippi was the northern district where Peter confessed Jesus as the Christ, the Son of the Living God.",
    "reference": "Matthew 16:13–20; Mark 8:27–30",
    "metadata": {
      "riddle_type": "Where Am I?",
      "is_typed": false,
      "clues": [
        "Not to be confused with Caesarea Maritima on the Mediterranean coast.",
        "Site where Jesus declared: \"On this rock I will build my church, and the gates of hell shall not prevail against it.\"",
        "Ancient center of Pan worship (Paneas)."
      ],
      "hint": "Northern city where Peter declared: \"You are the Christ, the Son of the living God.\"",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Caesarea-Philippi",
        "Cesarea Philippi"
      ],
      "stage": 4,
      "stage_title": "Places of Mystery",
      "level_theme": "New Testament Waypoints & Ports",
      "difficulty": "easy",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l19-c2",
    "game_slug": "bible-riddles",
    "level": 19,
    "challenge_index": 2,
    "question_text": "WHERE AM I?\nI was a major port city on the Aegean Sea in northwest Asia Minor (Mysia) near ancient Troy. In this city, the Apostle Paul received his famous night vision of a man standing and urging him, \"Come over to Macedonia and help us,\" prompting the first European missionary journey. On a later visit, Paul preached here until midnight and raised the young man Eutychus from the dead. What port am I?",
    "options": [
      "Troas",
      "Miletus",
      "Ephesus",
      "Pergamum"
    ],
    "correct_answer": "Troas",
    "explanation": "Troas was the Aegean port where Paul saw the Macedonian vision and later raised Eutychus from the dead.",
    "reference": "Acts 16:8–10; 20:5–12; 2 Timothy 4:13",
    "metadata": {
      "riddle_type": "Where Am I?",
      "is_typed": false,
      "clues": [
        "Full name: Alexandria Troas.",
        "Luke joins the narrative here as indicated by the \"we\" passage in Acts 16:10.",
        "Paul left his winter cloak and parchments here with Carpus (2 Timothy 4:13)."
      ],
      "hint": "Aegean seaport where Paul saw the vision of the Macedonian man calling for help.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Alexandria Troas"
      ],
      "stage": 4,
      "stage_title": "Places of Mystery",
      "level_theme": "New Testament Waypoints & Ports",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l19-c3",
    "game_slug": "bible-riddles",
    "level": 19,
    "challenge_index": 3,
    "question_text": "WHERE AM I?\nI was a rocky hill northwest of the Acropolis in Athens where the supreme judicial council of the city convened. Epicurean and Stoic philosophers brought Paul to me, asking, \"May we know what this new teaching is that you are presenting?\" Standing in my midst, Paul addressed the council, declaring that he had found an altar with the inscription: \"TO THE UNKNOWN GOD.\" What place am I?",
    "options": [
      "The Areopagus / Mars Hill",
      "The Acropolis",
      "The Agora",
      "The Pnyx"
    ],
    "correct_answer": "The Areopagus / Mars Hill",
    "explanation": "The Areopagus (Mars Hill) in Athens was the council where Paul preached about the \"Unknown God\" and the resurrection of Christ.",
    "reference": "Acts 17:19–34",
    "metadata": {
      "riddle_type": "Where Am I?",
      "is_typed": false,
      "clues": [
        "Known in Greek as the Areopagus (Hill of Ares) and in Latin as Mars Hill.",
        "Paul quoted Greek poets here: \"In him we live and move and have our being.\"",
        "Dionysius the Areopagite and a woman named Damaris were converted here."
      ],
      "hint": "Athenian council hill where Paul preached concerning the \"Unknown God.\"",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Areopagus",
        "Mars Hill",
        "Mars’ Hill",
        "The Areopagus"
      ],
      "stage": 4,
      "stage_title": "Places of Mystery",
      "level_theme": "New Testament Waypoints & Ports",
      "difficulty": "easy",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l19-c4",
    "game_slug": "bible-riddles",
    "level": 19,
    "challenge_index": 4,
    "question_text": "THE THREE-CLUE RIDDLE:\nClue 1: I was an island in the central Mediterranean south of Sicily where a grain ship carrying 276 passengers was shipwrecked in a violent northeastern storm (Euroclydon).\nClue 2: My native inhabitants showed extraordinary kindness by kindling a fire in the rain and cold.\nClue 3: When a deadly viper latched onto Paul’s hand as he gathered sticks, he shook it into the fire unharmed; Paul then healed the father of Publius, the chief man of our island. What island am I?",
    "options": [
      "Malta / Melita",
      "Crete",
      "Cyprus",
      "Patmos"
    ],
    "correct_answer": "Malta / Melita",
    "explanation": "Melita (modern Malta) was the island where Paul was shipwrecked, shook off a poisonous viper into the fire, and healed Publius’ father.",
    "reference": "Acts 27:39–44; 28:1–11",
    "metadata": {
      "riddle_type": "The Three-Clue Riddle",
      "is_typed": false,
      "clues": [
        "Known in Acts as Melita (modern Malta).",
        "Island inhabitants first thought Paul was a murderer, then decided he was a god.",
        "Ship spent three months wintering here before boarding the Castor and Pollux."
      ],
      "hint": "Island where Paul was shipwrecked and shook off a viper into the fire.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Malta",
        "Melita",
        "Island of Malta",
        "Island of Melita"
      ],
      "stage": 4,
      "stage_title": "Places of Mystery",
      "level_theme": "New Testament Waypoints & Ports",
      "difficulty": "easy",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l19-c5",
    "game_slug": "bible-riddles",
    "level": 19,
    "challenge_index": 5,
    "question_text": "TYPE THE PLACE — MINI-BOSS RIDDLE:\nI was a prominent Greco-Roman metropolis on the Orontes River in Syria, the third largest city of the Roman Empire. When believers scattered after Stephen’s martyrdom began preaching the Lord Jesus to Greek-speaking Gentiles here, a great number believed. Barnabas brought Saul from Tarsus to teach the church for a whole year. In this city, the disciples were for the very first time called \"Christians.\" What city am I?",
    "options": [
      "Antioch in Syria",
      "Antioch of Pisidia",
      "Damascus",
      "Alexandria"
    ],
    "correct_answer": "Antioch in Syria",
    "explanation": "Antioch in Syria was the multicultural city where disciples were first called Christians and the launching pad for foreign missions.",
    "reference": "Acts 11:19–26; 13:1–3; Galatians 2:11",
    "metadata": {
      "riddle_type": "Type the Place",
      "is_typed": true,
      "clues": [
        "Antioch in Syria (Antioch on the Orontes).",
        "The home sending base for all three of Paul’s missionary journeys.",
        "Site of the dispute where Paul confronted Peter to his face over table fellowship with Gentiles (Galatians 2:11)."
      ],
      "hint": "Syrian city where the followers of Jesus were first called \"Christians.\"",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Antioch",
        "Syrian Antioch",
        "Antioch on the Orontes"
      ],
      "stage": 4,
      "stage_title": "Places of Mystery",
      "level_theme": "New Testament Waypoints & Ports",
      "difficulty": "medium",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l20-c1",
    "game_slug": "bible-riddles",
    "level": 20,
    "challenge_index": 1,
    "question_text": "WHERE AM I?\nI was a valley near Jericho whose name means \"Trouble.\" Here, Achan, who took devoted gold, silver, and a beautiful mantle from Shinar from Jericho, was stoned and burned with his household under a great heap of stones. In Hosea 2:15, God promises a future redemption, transforming me from a place of judgment into \"a door of hope.\" What valley am I?",
    "options": [
      "Valley of Achor",
      "Valley of Hinnom",
      "Valley of Elah",
      "Valley of Jezreel"
    ],
    "correct_answer": "Valley of Achor",
    "explanation": "The Valley of Achor (\"Valley of Trouble\") was where Achan was stoned, and which Hosea prophesied would become a \"door of hope.\"",
    "reference": "Joshua 7:24–26; Hosea 2:15; Isaiah 65:10",
    "metadata": {
      "riddle_type": "Where Am I?",
      "is_typed": false,
      "clues": [
        "Joshua said to Achan: \"Why have you brought trouble on us? The Lord will trouble you today.\"",
        "Named the Valley of Achor.",
        "Isaiah 65:10 promises it will become a resting place for herds."
      ],
      "hint": "Valley of Trouble where Achan was stoned, prophesied as a \"door of hope.\"",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Achor",
        "The Valley of Achor"
      ],
      "stage": 4,
      "stage_title": "Places of Mystery",
      "level_theme": "Mysterious Valleys & Graves",
      "difficulty": "hard",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l20-c2",
    "game_slug": "bible-riddles",
    "level": 20,
    "challenge_index": 2,
    "question_text": "WHERE AM I?\nI was an ominous valley in exile into which the hand of the Lord transported the prophet Ezekiel in the Spirit. The valley floor was covered with a vast multitude of skeletal bones that were \"very dry.\" When the prophet was commanded to prophesy to the dry bones and then to the four winds, breath entered them, and they came to life, standing on their feet as an exceedingly great army symbolizing the restoration of the house of Israel. What valley am I?",
    "options": [
      "Valley of Dry Bones",
      "Valley of Vision",
      "Valley of Decision",
      "Valley of the Shadow of Death"
    ],
    "correct_answer": "Valley of Dry Bones",
    "explanation": "The Valley of Dry Bones was where Ezekiel prophesied life and the Spirit of God into a field of dry bones representing dead Israel.",
    "reference": "Ezekiel 37:1–14",
    "metadata": {
      "riddle_type": "Where Am I?",
      "is_typed": false,
      "clues": [
        "The valley of dry bones in Ezekiel 37.",
        "The bones cried: \"Our bones are dried up, and our hope is lost; we are indeed cut off.\"",
        "God promised: \"I will open your graves and raise you from your graves, O my people.\""
      ],
      "hint": "Valley where Ezekiel saw dry skeletal bones come together and revive.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "The Valley of Dry Bones",
        "Valley of the Dry Bones"
      ],
      "stage": 4,
      "stage_title": "Places of Mystery",
      "level_theme": "Mysterious Valleys & Graves",
      "difficulty": "easy",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l20-c3",
    "game_slug": "bible-riddles",
    "level": 20,
    "challenge_index": 3,
    "question_text": "WHERE AM I?\nI was a broad valley in the desert of Tekoa where King Jehoshaphat and the people of Judah gathered after God miraculously threw the invading confederacy of Moab, Ammon, and Mount Seir into mutual self-destruction before a choir singing praises. It took three days to collect all the plunder of jewels, clothing, and precious vessels, and on the fourth day they assembled in me to bless Yahweh, giving me a name that means \"The Valley of Blessing.\" What valley am I?",
    "options": [
      "Valley of Beracah",
      "Valley of Achor",
      "Valley of Rephaim",
      "Valley of Jehoshaphat"
    ],
    "correct_answer": "Valley of Beracah",
    "explanation": "The Valley of Beracah (\"Valley of Blessing\") was named because Judah assembled there to bless the Lord after the miraculous defeat of Moab and Ammon.",
    "reference": "2 Chronicles 20:20–26",
    "metadata": {
      "riddle_type": "Where Am I?",
      "is_typed": false,
      "clues": [
        "The Valley of Beracah (Berakah).",
        "The choir sang: \"Give thanks to the Lord, for his steadfast love endures forever.\"",
        "Located in the Judean wilderness south of Bethlehem."
      ],
      "hint": "Valley of Blessing where Jehoshaphat’s army praised God after three days of gathering spoil.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Beracah",
        "Valley of Berakah",
        "The Valley of Blessing"
      ],
      "stage": 4,
      "stage_title": "Places of Mystery",
      "level_theme": "Mysterious Valleys & Graves",
      "difficulty": "hard",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l20-c4",
    "game_slug": "bible-riddles",
    "level": 20,
    "challenge_index": 4,
    "question_text": "WHERE AM I?\nI was an ominous ravine south and west of Jerusalem associated with child sacrifices by fire to Molech during the apostasy of Ahaz and Manasseh. King Josiah thoroughly defiled my high places of Topheth with human bones so no one could pass their child through the fire. Because perpetual fires burned city refuse and carcasses here, my Greek name Gehenna became the vivid New Testament metaphor used by Jesus for hellfire. What valley am I?",
    "options": [
      "Valley of Hinnom / Gehenna",
      "Valley of Kidron",
      "Valley of Achor",
      "Valley of Elah"
    ],
    "correct_answer": "Valley of Hinnom / Gehenna",
    "explanation": "The Valley of the Son of Hinnom (Gehenna) was the site of Topheth and child sacrifice, which Jesus used to depict the final judgment.",
    "reference": "Joshua 15:8; 2 Kings 23:10; Jeremiah 7:31–32; Mark 9:43–48",
    "metadata": {
      "riddle_type": "Where Am I?",
      "is_typed": false,
      "clues": [
        "The Valley of Hinnom (Gei-Hinnom / Gehenna).",
        "Jeremiah prophesied it would be renamed the Valley of Slaughter.",
        "Jesus spoke of Gehenna as a place where \"their worm does not die and the fire is not quenched.\""
      ],
      "hint": "Jerusalem valley of child sacrifice to Molech whose name became Gehenna (hell).",
      "testament": "Both",
      "acceptedAlternatives": [
        "Valley of Hinnom",
        "Gehenna",
        "Valley of Ben Hinnom",
        "Valley of Ben-Hinnom"
      ],
      "stage": 4,
      "stage_title": "Places of Mystery",
      "level_theme": "Mysterious Valleys & Graves",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l20-c5",
    "game_slug": "bible-riddles",
    "level": 20,
    "challenge_index": 5,
    "question_text": "TYPE THE PLACE — MINI-BOSS RIDDLE:\nI was a plot of clay land just outside Jerusalem originally known as the Potter’s Field. Purchased by the chief priests using the thirty pieces of silver that Judas Iscariot threw into the temple sanctuary, I was designated as a burial place for destitute strangers and foreigners who died in the holy city. What is my Aramaic name, explicitly recorded in Matthew 27:8 and Acts 1:19, which translates as \"The Field of Blood\"?",
    "options": [
      "Akeldama",
      "Golgotha",
      "Gethsemane",
      "Bethany"
    ],
    "correct_answer": "Akeldama",
    "explanation": "Akeldama (meaning \"Field of Blood\" in Aramaic) was the Potter’s Field bought with Judas’ betrayal money as a cemetery for foreigners.",
    "reference": "Matthew 27:7–8; Acts 1:18–19",
    "metadata": {
      "riddle_type": "Type the Place",
      "is_typed": true,
      "clues": [
        "Aramaic: Ἁκελδαμάχ (Akeldama).",
        "Acts 1:18–19 records that Judas bought a field and falling headlong, burst open in the middle.",
        "Matthew 27:7–10 links me to the prophecy of Jeremiah/Zechariah."
      ],
      "hint": "Aramaic name for the Field of Blood bought with Judas’ thirty pieces of silver.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Aceldama",
        "Hakeldama",
        "Field of Blood"
      ],
      "stage": 4,
      "stage_title": "Places of Mystery",
      "level_theme": "Mysterious Valleys & Graves",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l21-c1",
    "game_slug": "bible-riddles",
    "level": 21,
    "challenge_index": 1,
    "question_text": "THE THREE-CLUE CHALLENGE:\nClue 1: I was the seventh generation from Adam through Seth, father of the longest-living man recorded in Scripture.\nClue 2: I walked faithfully with God in a wicked generation for three hundred years.\nClue 3: I did not taste physical death, for Scripture records simply: \"and he was not, for God took him.\" Who am I?",
    "options": [
      "Enoch",
      "Noah",
      "Lamech",
      "Seth"
    ],
    "correct_answer": "Enoch",
    "explanation": "Enoch walked with God for 300 years and was taken directly into heaven without experiencing death.",
    "reference": "Genesis 5:21–24; Hebrews 11:5; Jude 1:14–15",
    "metadata": {
      "riddle_type": "The Three-Clue Riddle",
      "is_typed": false,
      "clues": [
        "Father of Methuselah who lived 969 years.",
        "Hebrews 11:5 commends me for having pleased God before being taken up.",
        "Jude 14–15 quotes my ancient prophecy concerning the Lord coming with ten thousands of holy ones."
      ],
      "hint": "Seventh from Adam who walked with God and did not see death.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Henoch"
      ],
      "stage": 5,
      "stage_title": "The Three-Clue Challenge",
      "level_theme": "Patriarchs & Matriarchs",
      "difficulty": "easy",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l21-c2",
    "game_slug": "bible-riddles",
    "level": 21,
    "challenge_index": 2,
    "question_text": "THE THREE-CLUE CHALLENGE:\nClue 1: I was both a king and a priest of the Most High God in ancient Canaan before the Levitical priesthood existed.\nClue 2: I met Abraham after his victory over Chedorlaomer and the Mesopotamian kings, bringing out bread and wine to refresh him.\nClue 3: I pronounced a divine blessing upon Abraham, and the patriarch gave me a tenth (tithe) of all the spoils. Who am I?",
    "options": [
      "Melchizedek",
      "Abimelech",
      "Jethro",
      "Balaam"
    ],
    "correct_answer": "Melchizedek",
    "explanation": "Melchizedek, king of Salem and priest of God Most High, blessed Abraham with bread and wine and received his tithes.",
    "reference": "Genesis 14:18–20; Psalm 110:4; Hebrews 7:1–17",
    "metadata": {
      "riddle_type": "The Three-Clue Riddle",
      "is_typed": false,
      "clues": [
        "King of Salem (peace) and priest of El Elyon.",
        "Described in Hebrews 7 as without recorded father, mother, or genealogy, resembling the Son of God.",
        "Jesus is declared an eternal High Priest after my order in Psalm 110:4."
      ],
      "hint": "King of Salem and priest of God Most High to whom Abraham gave a tithe.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Melchisedec",
        "Malki-Tzedek"
      ],
      "stage": 5,
      "stage_title": "The Three-Clue Challenge",
      "level_theme": "Patriarchs & Matriarchs",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l21-c3",
    "game_slug": "bible-riddles",
    "level": 21,
    "challenge_index": 3,
    "question_text": "THE THREE-CLUE CHALLENGE:\nClue 1: I was approached by an elderly servant at a well outside the city of Nahor in Aram-naharaim.\nClue 2: When asked for a sip of water from my pitcher, I immediately drew enough water to quench the thirst of all ten of his thirsty camels.\nClue 3: The servant gave me a gold nose ring and two gold bracelets, realizing God had appointed me as the bride for his master’s son Isaac. Who am I?",
    "options": [
      "Rebekah",
      "Rachel",
      "Leah",
      "Keturah"
    ],
    "correct_answer": "Rebekah",
    "explanation": "Rebekah fulfilled Eliezer’s prayer by watering all ten camels at the well and became the beloved wife of Isaac.",
    "reference": "Genesis 24:10–67; 25:21–26",
    "metadata": {
      "riddle_type": "The Three-Clue Riddle",
      "is_typed": false,
      "clues": [
        "Daughter of Bethuel, sister of Laban.",
        "Traveled on camels to Canaan and veiled myself when seeing Isaac in the field at evening.",
        "Mother of twin brothers Jacob and Esau."
      ],
      "hint": "Bride of Isaac chosen at the well after watering ten camels.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Rebecca"
      ],
      "stage": 5,
      "stage_title": "The Three-Clue Challenge",
      "level_theme": "Patriarchs & Matriarchs",
      "difficulty": "easy",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l21-c4",
    "game_slug": "bible-riddles",
    "level": 21,
    "challenge_index": 4,
    "question_text": "THE THREE-CLUE CHALLENGE:\nClue 1: I was the older daughter of Laban who had tender, delicate eyes, while my younger sister was beautiful in form and face.\nClue 2: My father substituted me under the wedding veil by night, causing Jacob to wake up in the morning and realize he was married to me.\nClue 3: Though unloved by my husband, God opened my womb to bear six of Israel’s twelve tribes, including Judah (the royal messianic tribe) and Levi (the priestly tribe). Who am I?",
    "options": [
      "Leah",
      "Rachel",
      "Bilhah",
      "Zilpah"
    ],
    "correct_answer": "Leah",
    "explanation": "Leah was Jacob’s unloved first wife who bore him six sons including Judah and Levi, and was buried in the family tomb at Machpelah.",
    "reference": "Genesis 29:16–35; 49:31",
    "metadata": {
      "riddle_type": "The Three-Clue Riddle",
      "is_typed": false,
      "clues": [
        "Mother of Reuben, Simeon, Levi, Judah, Issachar, and Zebulun.",
        "Named my fourth son Judah, declaring: \"This time I will praise the Lord.\"",
        "Buried in the cave of Machpelah alongside Abraham, Sarah, Isaac, and Rebekah."
      ],
      "hint": "Jacob’s first wife, older sister of Rachel, mother of Judah and Levi.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Lia"
      ],
      "stage": 5,
      "stage_title": "The Three-Clue Challenge",
      "level_theme": "Patriarchs & Matriarchs",
      "difficulty": "easy",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l21-c5",
    "game_slug": "bible-riddles",
    "level": 21,
    "challenge_index": 5,
    "question_text": "TYPE TWO ANSWERS — MINI-BOSS RIDDLE:\nWhen dying Jacob blessed the two Egyptian-born sons of Joseph in Genesis 48, Joseph placed the firstborn on Jacob’s right hand and the younger on his left. However, Jacob deliberately crossed his hands, laying his right hand on the younger brother and his left on the firstborn, prophesying that the younger would become greater and his offspring a multitude of nations. What are the names of these two sons of Joseph (firstborn and younger)?",
    "options": [
      "Manasseh and Ephraim",
      "Ephraim and Manasseh",
      "Gershom and Eliezer",
      "Perez and Zerah"
    ],
    "correct_answer": "Manasseh and Ephraim",
    "explanation": "Joseph’s two sons were Manasseh (firstborn) and Ephraim (younger); Jacob crossed his hands to bestow the firstborn blessing on Ephraim.",
    "reference": "Genesis 41:50–52; 48:1–20",
    "metadata": {
      "riddle_type": "Type Two Answers",
      "is_typed": true,
      "clues": [
        "Born in Egypt to Joseph by Asenath, daughter of Potiphera priest of On.",
        "Older son’s name means \"God has made me forget all my hardship.\"",
        "Younger son’s name means \"God has made me fruitful in the land of my affliction.\"",
        "Their two names became major tribal territories in Israel replacing Joseph."
      ],
      "hint": "Two sons of Joseph over whom Jacob crossed his hands to give the primary blessing to the younger.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Ephraim and Manasseh",
        "Manasseh & Ephraim",
        "Ephraim & Manasseh",
        "Manasseh, Ephraim"
      ],
      "stage": 5,
      "stage_title": "The Three-Clue Challenge",
      "level_theme": "Patriarchs & Matriarchs",
      "difficulty": "medium",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l22-c1",
    "game_slug": "bible-riddles",
    "level": 22,
    "challenge_index": 1,
    "question_text": "THE THREE-CLUE CHALLENGE:\nClue 1: I was beating out wheat in a winepress in Ophrah to hide it from Midianite raiders when an angel greeted me: \"The Lord is with you, O mighty man of valor!\"\nClue 2: I tore down my father’s altar of Baal and the Asherah beside it by night, earning the nickname Jerubbaal (\"Let Baal contend against him\").\nClue 3: I confirmed God’s calling through a fleece of wool that was soaked while the ground was dry, and then dry while the ground was wet. Who am I?",
    "options": [
      "Gideon",
      "Jephthah",
      "Barak",
      "Samson"
    ],
    "correct_answer": "Gideon",
    "explanation": "Gideon was the reluctant judge who tested God with the fleece of wool, destroyed Baal’s altar, and routed Midian with 300 men.",
    "reference": "Judges 6:11–40; 7:1–25; 8:22–23",
    "metadata": {
      "riddle_type": "The Three-Clue Riddle",
      "is_typed": false,
      "clues": [
        "Son of Joash the Abiezrite.",
        "Led 300 men with trumpets and torches in empty jars.",
        "Refused the crown of Israel, saying: \"The Lord will rule over you.\""
      ],
      "hint": "Judge who hid wheat in a winepress and used the fleece of wool.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Jerubbaal",
        "Gedeon"
      ],
      "stage": 5,
      "stage_title": "The Three-Clue Challenge",
      "level_theme": "Judges & Deliverers",
      "difficulty": "easy",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l22-c2",
    "game_slug": "bible-riddles",
    "level": 22,
    "challenge_index": 2,
    "question_text": "THE THREE-CLUE CHALLENGE:\nClue 1: I was a Danite man of Zorah whose wife was barren and had borne no children.\nClue 2: The Angel of the Lord appeared to my wife and later to both of us, giving instructions that our promised son must be a Nazirite from the womb.\nClue 3: When I offered a young goat on a rock altar to the Lord, the Angel did a wondrous thing and ascended to heaven in the very flame of the altar, causing my wife and me to fall on our faces. Who am I?",
    "options": [
      "Manoah",
      "Elkanah",
      "Kish",
      "Jesse"
    ],
    "correct_answer": "Manoah",
    "explanation": "Manoah was Samson’s father who witnessed the Angel of the Lord ascend to heaven in the sacrificial altar flame.",
    "reference": "Judges 13:2–24",
    "metadata": {
      "riddle_type": "The Three-Clue Riddle",
      "is_typed": false,
      "clues": [
        "Father of Samson.",
        "Asked the Angel of the Lord: \"What is your name, so that when your words come true we may honor you?\"",
        "Said in terror: \"We shall surely die, for we have seen God.\""
      ],
      "hint": "Father of Samson who saw the Angel of the Lord ascend in the altar flame.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Manoe"
      ],
      "stage": 5,
      "stage_title": "The Three-Clue Challenge",
      "level_theme": "Judges & Deliverers",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l22-c3",
    "game_slug": "bible-riddles",
    "level": 22,
    "challenge_index": 3,
    "question_text": "THE THREE-CLUE CHALLENGE:\nClue 1: I was a military general summoned by the prophetess Deborah to assemble ten thousand men of Naphtali and Zebulun at Mount Tabor.\nClue 2: I hesitated and told Deborah, \"If you will go with me, I will go; but if you will not go with me, I will not go.\"\nClue 3: Because of my hesitation, Deborah prophesied that the honor of the day would not be mine, for the Lord would sell the opposing commander Sisera into the hand of a woman. Who am I?",
    "options": [
      "Barak",
      "Gideon",
      "Jephthah",
      "Abdon"
    ],
    "correct_answer": "Barak",
    "explanation": "Barak was the general who defeated Sisera’s army at Mount Tabor after insisting that Deborah accompany him.",
    "reference": "Judges 4:6–16; Hebrews 11:32",
    "metadata": {
      "riddle_type": "The Three-Clue Riddle",
      "is_typed": false,
      "clues": [
        "Son of Abinoam of Kedesh-naphtali.",
        "Celebrated in the victory song of Judges 5.",
        "Listed among the heroes of faith in Hebrews 11:32."
      ],
      "hint": "Commander who refused to go to battle without Deborah.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Barac"
      ],
      "stage": 5,
      "stage_title": "The Three-Clue Challenge",
      "level_theme": "Judges & Deliverers",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l22-c4",
    "game_slug": "bible-riddles",
    "level": 22,
    "challenge_index": 4,
    "question_text": "THE THREE-CLUE CHALLENGE:\nClue 1: I was a Nazarite from birth endowed with supernatural physical strength whenever the Spirit of the Lord rushed upon me.\nClue 2: I tore a young lion apart with my bare hands, carried away the city gates of Gaza on my shoulders, and slew a thousand men with a donkey’s jawbone.\nClue 3: Blinded and mocked in the temple of Dagon after my hair was shorn, I prayed for one final surge of strength, pushed against the two middle pillars, and killed more at my death than in my entire life. Who am I?",
    "options": [
      "Samson",
      "Ehud",
      "Gideon",
      "Jephthah"
    ],
    "correct_answer": "Samson",
    "explanation": "Samson was the mighty Nazirite judge who brought down the temple of Dagon upon the Philistines at his death.",
    "reference": "Judges 13:24–16:31; Hebrews 11:32",
    "metadata": {
      "riddle_type": "The Three-Clue Riddle",
      "is_typed": false,
      "clues": [
        "Betrayed by Delilah in the Valley of Sorek for eleven hundred pieces of silver from each Philistine lord.",
        "Judged Israel for twenty years in the days of the Philistines.",
        "Pushed the central pillars of Dagon’s temple, bringing down the roof on 3,000 Philistines."
      ],
      "hint": "Nazirite judge of superhuman strength who brought down Dagon’s temple.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Shimshon"
      ],
      "stage": 5,
      "stage_title": "The Three-Clue Challenge",
      "level_theme": "Judges & Deliverers",
      "difficulty": "easy",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l22-c5",
    "game_slug": "bible-riddles",
    "level": 22,
    "challenge_index": 5,
    "question_text": "TYPE THE NAME — MINI-BOSS RIDDLE:\nI was a judge of Israel from Pirathon in the land of Ephraim. Scripture highlights my prominent patriarchal status and wealth by noting that I had forty sons and thirty grandsons who rode on seventy donkeys (colts). I led Israel for eight years before dying and being buried in my native hill country of Ephraim, in the hill country of the Amalekites. Who am I?",
    "options": [
      "Abdon",
      "Ibzan",
      "Elon",
      "Tola"
    ],
    "correct_answer": "Abdon",
    "explanation": "Abdon son of Hillel the Pirathonite judged Israel eight years and had 40 sons and 30 grandsons who rode on 70 donkeys.",
    "reference": "Judges 12:13–15",
    "metadata": {
      "riddle_type": "Type the Name",
      "is_typed": true,
      "clues": [
        "Son of Hillel the Pirathonite.",
        "Judged Israel for eight peaceful years.",
        "Described in Judges 12:13–15."
      ],
      "hint": "Minor judge whose 40 sons and 30 grandsons rode on seventy donkeys.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Abdon son of Hillel"
      ],
      "stage": 5,
      "stage_title": "The Three-Clue Challenge",
      "level_theme": "Judges & Deliverers",
      "difficulty": "master",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l23-c1",
    "game_slug": "bible-riddles",
    "level": 23,
    "challenge_index": 1,
    "question_text": "THE THREE-CLUE CHALLENGE:\nClue 1: I was Solomon’s son who traveled to Shechem to be crowned king over all Israel.\nClue 2: When the northern tribes asked for relief from heavy taxes, I rejected the counsel of the older elders and listened to the young men who grew up with me, boasting: \"My father made your yoke heavy, but I will add to your yoke; my father disciplined you with whips, but I will discipline you with scorpions.\"\nClue 3: Ten tribes revolted under Jeroboam, leaving me to rule over only Judah and Benjamin. Who am I?",
    "options": [
      "Rehoboam",
      "Jeroboam",
      "Abijah",
      "Asa"
    ],
    "correct_answer": "Rehoboam",
    "explanation": "Rehoboam, son of Solomon, foolishly threatened the people with heavier yokes, precipitating the division of the kingdom.",
    "reference": "1 Kings 12:1–24; 2 Chronicles 10:1–19",
    "metadata": {
      "riddle_type": "The Three-Clue Riddle",
      "is_typed": false,
      "clues": [
        "Son of Solomon by Naamah the Ammonitess.",
        "Sent Adoram who was over the forced labor, and Israel stoned him to death.",
        "Fled in his chariot to Jerusalem as the kingdom permanently fractured."
      ],
      "hint": "Solomon’s son whose harsh answer caused ten tribes to break away.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Roboam"
      ],
      "stage": 5,
      "stage_title": "The Three-Clue Challenge",
      "level_theme": "Kings of the Divided Monarchy",
      "difficulty": "easy",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l23-c2",
    "game_slug": "bible-riddles",
    "level": 23,
    "challenge_index": 2,
    "question_text": "THE THREE-CLUE CHALLENGE:\nClue 1: I was an Ephraimite servant of Solomon whose industry won me charge of all the forced labor of the house of Joseph.\nClue 2: Promised ten tribes by the prophet Ahijah, I became the first king of the northern kingdom of Israel.\nClue 3: Fearing that my subjects would return their loyalty to the house of David if they went to Jerusalem to worship, I forged two golden calves and set them up at Bethel and Dan, declaring: \"Behold your gods, O Israel, who brought you up out of the land of Egypt!\" Who am I?",
    "options": [
      "Jeroboam",
      "Rehoboam",
      "Baasha",
      "Omri"
    ],
    "correct_answer": "Jeroboam",
    "explanation": "Jeroboam I, son of Nebat, built golden calves at Bethel and Dan to prevent his northern subjects from worshiping in Jerusalem.",
    "reference": "1 Kings 11:26–40; 12:25–33",
    "metadata": {
      "riddle_type": "The Three-Clue Riddle",
      "is_typed": false,
      "clues": [
        "Son of Nebat.",
        "Instituted a non-Levitical priesthood and an unbiblical feast in the eighth month.",
        "Every subsequent wicked northern king was said to have walked \"in the way of [...], son of Nebat, who made Israel to sin.\""
      ],
      "hint": "First king of northern Israel who erected golden calves at Bethel and Dan.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Jeroboam I",
        "Jeroboam son of Nebat"
      ],
      "stage": 5,
      "stage_title": "The Three-Clue Challenge",
      "level_theme": "Kings of the Divided Monarchy",
      "difficulty": "easy",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l23-c3",
    "game_slug": "bible-riddles",
    "level": 23,
    "challenge_index": 3,
    "question_text": "THE THREE-CLUE CHALLENGE:\nClue 1: I was a godly king of Judah who shattered the bronze serpent Nehushtan, smashed pagan pillars, and cleansed the temple.\nClue 2: When Sennacherib king of Assyria besieged Jerusalem, I spread his blasphemous letter before the Lord in the temple and prayed; that night, the Angel of the Lord struck down 185,000 Assyrian soldiers in their camp.\nClue 3: When struck with a fatal illness, I wept bitterly, and Isaiah returned with the promise of fifteen more years of life, confirmed by the shadow going backward ten steps on the sundial of Ahaz. Who am I?",
    "options": [
      "Hezekiah",
      "Josiah",
      "Jehoshaphat",
      "Uzziah"
    ],
    "correct_answer": "Hezekiah",
    "explanation": "King Hezekiah trusted God against Sennacherib, saw 185,000 Assyrians slain by an angel, and was granted 15 extra years of life.",
    "reference": "2 Kings 18:1–20:21; Isaiah 36:1–39:8; 2 Chronicles 29:1–32:33",
    "metadata": {
      "riddle_type": "The Three-Clue Riddle",
      "is_typed": false,
      "clues": [
        "Son of King Ahaz.",
        "Built the famous subterranean water conduit in Jerusalem from Gihon to Siloam.",
        "Showed all the royal palace treasures to ambassadors from Babylon."
      ],
      "hint": "Good king granted 15 extra years whose sundial went backward ten steps.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Ezekias"
      ],
      "stage": 5,
      "stage_title": "The Three-Clue Challenge",
      "level_theme": "Kings of the Divided Monarchy",
      "difficulty": "easy",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l23-c4",
    "game_slug": "bible-riddles",
    "level": 23,
    "challenge_index": 4,
    "question_text": "THE THREE-CLUE CHALLENGE:\nClue 1: I was crowned king of Judah at eight years old after my father Amon was assassinated.\nClue 2: During temple renovations in my eighteenth year, Hilkiah the high priest discovered the long-lost Book of the Law; when it was read to me, I tore my clothes in deep repentance.\nClue 3: I led the greatest covenant renewal and Passover celebration since the days of Samuel, destroying altars at Bethel and grinding pagan idols to dust. Who am I?",
    "options": [
      "Josiah",
      "Hezekiah",
      "Joash",
      "Asa"
    ],
    "correct_answer": "Josiah",
    "explanation": "Josiah became king at eight, rediscovered the Book of the Law, purged idolatry, and held an unprecedented Passover.",
    "reference": "2 Kings 22:1–23:30; 2 Chronicles 34:1–35:27",
    "metadata": {
      "riddle_type": "The Three-Clue Riddle",
      "is_typed": false,
      "clues": [
        "Prophesied by name three centuries earlier by an unnamed prophet at Jeroboam’s altar (1 Kings 13:2).",
        "Consulted the prophetess Huldah concerning the judgment against Judah.",
        "Fatally wounded by archers at the Battle of Megiddo while opposing Pharaoh Neco of Egypt."
      ],
      "hint": "Boy king of Judah who rediscovered the Law and launched nationwide reform.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Josias"
      ],
      "stage": 5,
      "stage_title": "The Three-Clue Challenge",
      "level_theme": "Kings of the Divided Monarchy",
      "difficulty": "easy",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l23-c5",
    "game_slug": "bible-riddles",
    "level": 23,
    "challenge_index": 5,
    "question_text": "TYPE THE NAME — MINI-BOSS RIDDLE:\nI was the longest-reigning monarch in the history of Judah, ruling for fifty-five years in Jerusalem. I rebuilt the high places my father Hezekiah had torn down, erected altars for Baal, sacrificed my own son in the fire in the Valley of Ben-Hinnom, practiced sorcery, set up a carved idol in the house of the Lord, and shed very much innocent blood. Captured by the king of Assyria with hooks and bronze chains and dragged to Babylon, I humbled myself greatly before God in my distress, prayed, and was miraculously restored to my throne in Jerusalem, where I removed foreign gods from the temple. Who am I?",
    "options": [
      "Manasseh",
      "Amon",
      "Jehoram",
      "Ahaz"
    ],
    "correct_answer": "Manasseh",
    "explanation": "Manasseh ruled 55 wicked years in Judah, was led into Babylonian captivity with hooks, repented in agony, and was restored by God.",
    "reference": "2 Kings 21:1–18; 2 Chronicles 33:1–20",
    "metadata": {
      "riddle_type": "Type the Name",
      "is_typed": true,
      "clues": [
        "Son of King Hezekiah.",
        "Succeeded by his son Amon, father of Josiah.",
        "His remarkable repentance in exile is detailed specifically in 2 Chronicles 33:10–19."
      ],
      "hint": "Judah’s longest-reigning king (55 years) who repented after being taken with hooks to Babylon.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Manasses"
      ],
      "stage": 5,
      "stage_title": "The Three-Clue Challenge",
      "level_theme": "Kings of the Divided Monarchy",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l24-c1",
    "game_slug": "bible-riddles",
    "level": 24,
    "challenge_index": 1,
    "question_text": "THE THREE-CLUE CHALLENGE:\nClue 1: I was taken captive from Judah to Babylon as a youth of noble birth and given the Babylonian name Belteshazzar.\nClue 2: I resolved not to defile myself with the king’s royal food and wine, thriving on vegetables and water.\nClue 3: God gave me understanding in all visions and dreams; I interpreted Nebuchadnezzar’s forgotten dream of the colossal statue and spent a night untouched in a den of hungry lions. Who am I?",
    "options": [
      "Daniel",
      "Ezekiel",
      "Nehemiah",
      "Mordecai"
    ],
    "correct_answer": "Daniel",
    "explanation": "Daniel was the noble Hebrew captive in Babylon who interpreted royal dreams and survived the lions’ den unharmed.",
    "reference": "Daniel 1:1–21; 2:1–49; 5:1–30; 6:1–28",
    "metadata": {
      "riddle_type": "The Three-Clue Riddle",
      "is_typed": false,
      "clues": [
        "Survived the rise and fall of both the Babylonian and Medo-Persian empires.",
        "Interpreted the supernatural handwriting on the wall for Belshazzar.",
        "Prophesied the seventy weeks and the timeline of the Messiah."
      ],
      "hint": "Hebrew prophet in Babylon who survived the lions’ den.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Belteshazzar"
      ],
      "stage": 5,
      "stage_title": "The Three-Clue Challenge",
      "level_theme": "Exilic & Post-Exilic Figures",
      "difficulty": "easy",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l24-c2",
    "game_slug": "bible-riddles",
    "level": 24,
    "challenge_index": 2,
    "question_text": "THE THREE-CLUE CHALLENGE:\nClue 1: I served as cupbearer to King Artaxerxes in the Persian winter palace at Susa.\nClue 2: When I wept over news that the walls of Jerusalem were broken down and its gates burned with fire, the king granted me letters and timber to rebuild the city.\nClue 3: Despite armed threats and mockery from Sanballat, Tobiah, and Geshem, my builders labored with a trowel in one hand and a weapon in the other, completing the broken walls in just fifty-two days. Who am I?",
    "options": [
      "Nehemiah",
      "Ezra",
      "Zerubbabel",
      "Sanballat"
    ],
    "correct_answer": "Nehemiah",
    "explanation": "Nehemiah was Artaxerxes’ cupbearer who rebuilt Jerusalem’s walls in 52 days and served as governor of Judah.",
    "reference": "Nehemiah 1:1–11; 2:1–20; 4:1–23; 6:15–16",
    "metadata": {
      "riddle_type": "The Three-Clue Riddle",
      "is_typed": false,
      "clues": [
        "Served as governor of Judah for twelve years without taking the governor’s food tax.",
        "Enforced debt relief for poor Jewish farmers.",
        "Purged the temple chambers of Tobiah the Ammonite."
      ],
      "hint": "Persian cupbearer who rebuilt the walls of Jerusalem in 52 days.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Nehemias"
      ],
      "stage": 5,
      "stage_title": "The Three-Clue Challenge",
      "level_theme": "Exilic & Post-Exilic Figures",
      "difficulty": "easy",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l24-c3",
    "game_slug": "bible-riddles",
    "level": 24,
    "challenge_index": 3,
    "question_text": "THE THREE-CLUE CHALLENGE:\nClue 1: I was a Benjamite living in Susa who adopted and raised my orphaned younger cousin Hadassah (Esther).\nClue 2: While sitting at the king’s gate, I uncovered an assassination plot by Bigthan and Teresh against King Ahasuerus.\nClue 3: I refused to bow down or pay homage to the proud Agagite prime minister Haman, and urged Esther: \"Who knows whether you have not come to the kingdom for such a time as this?\" Who am I?",
    "options": [
      "Mordecai",
      "Haman",
      "Hegai",
      "Memucan"
    ],
    "correct_answer": "Mordecai",
    "explanation": "Mordecai raised Esther, exposed a royal plot, refused to bow to Haman, and was elevated to second in command in Persia.",
    "reference": "Esther 2:5–23; 3:1–6; 4:12–14; 6:10–11; 10:2–3",
    "metadata": {
      "riddle_type": "The Three-Clue Riddle",
      "is_typed": false,
      "clues": [
        "Son of Jair, son of Shimei, son of Kish, a Benjamite.",
        "Paraded through the city square on the king’s horse wearing royal robes led by Haman.",
        "Promoted to second in rank to King Ahasuerus and instituted the Feast of Purim."
      ],
      "hint": "Esther’s cousin who refused to bow to Haman and instituted Purim.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Mordechai"
      ],
      "stage": 5,
      "stage_title": "The Three-Clue Challenge",
      "level_theme": "Exilic & Post-Exilic Figures",
      "difficulty": "easy",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l24-c4",
    "game_slug": "bible-riddles",
    "level": 24,
    "challenge_index": 4,
    "question_text": "THE THREE-CLUE CHALLENGE:\nClue 1: I was a grandson of King Jehoiachin (Jeconiah) of the Davidic royal line who was appointed governor of Judah by Cyrus the Great.\nClue 2: I led the first wave of 42,360 Jewish exiles returning from Babylon to Jerusalem in 538 BC and laid the foundations of the Second Temple.\nClue 3: Through the prophets Haggai and Zechariah, God declared that the mountain of opposition would become a plain before me, \"Not by might, nor by power, but by my Spirit,\" and promised to make me like a signet ring. Who am I?",
    "options": [
      "Zerubbabel",
      "Ezra",
      "Nehemiah",
      "Sheshbazzar"
    ],
    "correct_answer": "Zerubbabel",
    "explanation": "Zerubbabel of the Davidic line led the first return from Babylon, laid the temple foundation, and completed the Second Temple.",
    "reference": "Ezra 2:1–2; 3:8–10; Haggai 2:20–23; Zechariah 4:6–10",
    "metadata": {
      "riddle_type": "The Three-Clue Riddle",
      "is_typed": false,
      "clues": [
        "Son of Shealtiel (Pedaiah).",
        "Partnered with Joshua son of Jehozadak the high priest.",
        "Brought out the temple capstone amid shouts of \"Grace, grace to it!\""
      ],
      "hint": "Davidic governor who led the first return from exile and built the Second Temple.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Zorobabel"
      ],
      "stage": 5,
      "stage_title": "The Three-Clue Challenge",
      "level_theme": "Exilic & Post-Exilic Figures",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l24-c5",
    "game_slug": "bible-riddles",
    "level": 24,
    "challenge_index": 5,
    "question_text": "TYPE THE NAME — MINI-BOSS RIDDLE:\nI was a descendant of Aaron the high priest and a priest-scribe skilled in the Law of Moses that Yahweh had given. In 458 BC, King Artaxerxes granted me a royal decree to lead a second return of Jewish exiles from Babylon to Jerusalem. Scripture records that I had set my heart to study the Law of the Lord, and to do it and to teach his statutes and rules in Israel. When I discovered pervasive intermarriage with foreign idolaters, I tore my tunic and mantle, pulled hair from my head and beard, and sat down appalled until the evening sacrifice. Who am I?",
    "options": [
      "Ezra",
      "Nehemiah",
      "Zadok",
      "Hilkiah"
    ],
    "correct_answer": "Ezra",
    "explanation": "Ezra was the priestly scribe who led the second return from Babylon, instituted national repentance, and taught God’s Law.",
    "reference": "Ezra 7:1–10, 27–28; 8:21–23; 9:1–15; Nehemiah 8:1–8",
    "metadata": {
      "riddle_type": "Type the Name",
      "is_typed": true,
      "clues": [
        "Descendant of Phinehas and Zadok.",
        "Refused a royal military escort across the desert, declaring: \"The hand of our God is for good on all who seek him.\"",
        "Stood upon a wooden pulpit reading the Law of Moses to all the people from daybreak until midday (Nehemiah 8)."
      ],
      "hint": "Priest and scribe who set his heart to study, practice, and teach the Law of God.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Esdras",
        "Ezra the Scribe",
        "Ezra the Priest"
      ],
      "stage": 5,
      "stage_title": "The Three-Clue Challenge",
      "level_theme": "Exilic & Post-Exilic Figures",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l25-c1",
    "game_slug": "bible-riddles",
    "level": 25,
    "challenge_index": 1,
    "question_text": "THE THREE-CLUE CHALLENGE:\nClue 1: I was one of the seven men full of the Spirit and wisdom chosen to oversee daily food distribution to Hellenistic widows in Jerusalem.\nClue 2: Full of grace and power, I did great wonders and signs, and when brought before the Sanhedrin, my face shone like the face of an angel.\nClue 3: After delivering a sweeping survey of Israel’s history of resisting the Holy Spirit, I looked up into heaven, saw Jesus standing at the right hand of God, prayed for my executioners, and became the first Christian martyr. Who am I?",
    "options": [
      "Stephen",
      "Philip",
      "Prochorus",
      "Nicanor"
    ],
    "correct_answer": "Stephen",
    "explanation": "Stephen was the first Christian martyr, stoned outside Jerusalem while seeing Christ standing at the right hand of God.",
    "reference": "Acts 6:1–15; 7:1–60; 8:1–2",
    "metadata": {
      "riddle_type": "The Three-Clue Riddle",
      "is_typed": false,
      "clues": [
        "Witnesses laid down their garments at the feet of a young man named Saul.",
        "Cried with a loud voice: \"Lord, do not hold this sin against them,\" and fell asleep.",
        "Devout men buried me and made great lamentation over me."
      ],
      "hint": "First Christian deacon and martyr whose face shone like an angel.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Stephanos",
        "Saint Stephen"
      ],
      "stage": 5,
      "stage_title": "The Three-Clue Challenge",
      "level_theme": "Apostolic Witnesses & Martyrs",
      "difficulty": "easy",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l25-c2",
    "game_slug": "bible-riddles",
    "level": 25,
    "challenge_index": 2,
    "question_text": "THE THREE-CLUE CHALLENGE:\nClue 1: I was a Levite from Cyprus whose original name was Joseph, but the Apostles renamed me with a title meaning \"Son of Encouragement.\"\nClue 2: I sold a field I owned and brought the money and laid it at the Apostles’ feet, modeling radical generosity.\nClue 3: When the Jerusalem church feared the newly converted persecutor Saul, I vouched for him; later, I traveled to Antioch, retrieved Saul from Tarsus, and set off with him on the First Missionary Journey. Who am I?",
    "options": [
      "Barnabas",
      "Silas",
      "Timothy",
      "Titus"
    ],
    "correct_answer": "Barnabas",
    "explanation": "Barnabas (Joseph of Cyprus, the Son of Encouragement) sponsored Paul before the apostles and partnered in the First Missionary Journey.",
    "reference": "Acts 4:36–37; 9:26–27; 11:22–26; 13:1–4; 15:36–40",
    "metadata": {
      "riddle_type": "The Three-Clue Riddle",
      "is_typed": false,
      "clues": [
        "Cousin of John Mark.",
        "Parted company with Paul over taking John Mark on the second journey.",
        "Described in Acts 11:24 as \"a good man, full of the Holy Spirit and of faith.\""
      ],
      "hint": "Levite from Cyprus nicknamed the \"Son of Encouragement.\"",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Joseph Barnabas"
      ],
      "stage": 5,
      "stage_title": "The Three-Clue Challenge",
      "level_theme": "Apostolic Witnesses & Martyrs",
      "difficulty": "easy",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l25-c3",
    "game_slug": "bible-riddles",
    "level": 25,
    "challenge_index": 3,
    "question_text": "THE THREE-CLUE CHALLENGE:\nClue 1: I was a leading brother and prophet in the Jerusalem church chosen to carry the apostolic decree of the Jerusalem Council to Antioch.\nClue 2: When Paul and Barnabas separated over John Mark, Paul selected me as his companion for his Second Missionary Journey.\nClue 3: In Philippi, I was beaten with rods, imprisoned in inner stocks, and sang hymns of praise to God alongside Paul at midnight before an earthquake opened the prison doors. Who am I?",
    "options": [
      "Silas",
      "Barnabas",
      "Timothy",
      "Luke"
    ],
    "correct_answer": "Silas",
    "explanation": "Silas (Silvanus) accompanied Paul on the Second Missionary Journey and sang hymns at midnight in the Philippian jail.",
    "reference": "Acts 15:22, 32, 40; 16:19–40; 1 Thessalonians 1:1; 1 Peter 5:12",
    "metadata": {
      "riddle_type": "The Three-Clue Riddle",
      "is_typed": false,
      "clues": [
        "Also known by my Roman name Silvanus in the Epistles.",
        "Held Roman citizenship alongside Paul (Acts 16:37).",
        "Co-authored 1 & 2 Thessalonians and served as amanuensis for 1 Peter 5:12."
      ],
      "hint": "Paul’s companion beaten and imprisoned in Philippi who sang at midnight.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Silvanus"
      ],
      "stage": 5,
      "stage_title": "The Three-Clue Challenge",
      "level_theme": "Apostolic Witnesses & Martyrs",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l25-c4",
    "game_slug": "bible-riddles",
    "level": 25,
    "challenge_index": 4,
    "question_text": "THE THREE-CLUE CHALLENGE:\nClue 1: I was a native of Alexandria, Egypt, who arrived in Ephesus described as an eloquent man, mighty in the Scriptures.\nClue 2: Fervent in spirit, I taught accurately the things concerning Jesus, though I knew only the baptism of John.\nClue 3: Priscilla and Aquila heard me speaking boldly in the synagogue, took me aside, and explained to me the way of God more accurately; I then crossed to Corinth and powerfully refuted Jewish opponents in public, showing by the Scriptures that Jesus was the Christ. Who am I?",
    "options": [
      "Apollos",
      "Barnabas",
      "Timothy",
      "Tychicus"
    ],
    "correct_answer": "Apollos",
    "explanation": "Apollos was the eloquent Alexandrian orator instructed more accurately by Priscilla and Aquila who watered the church in Corinth.",
    "reference": "Acts 18:24–28; 1 Corinthians 3:4–6; 4:6; Titus 3:13",
    "metadata": {
      "riddle_type": "The Three-Clue Riddle",
      "is_typed": false,
      "clues": [
        "Believers in Corinth formed factions around Paul, Cephas, Christ, and me.",
        "Paul wrote in 1 Corinthians 3:6: \"I planted, [...] watered, but God gave the growth.\"",
        "Titus 3:13 urges believers to speed me on my journey."
      ],
      "hint": "Eloquent Alexandrian preacher instructed more accurately by Priscilla and Aquila.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Apollo"
      ],
      "stage": 5,
      "stage_title": "The Three-Clue Challenge",
      "level_theme": "Apostolic Witnesses & Martyrs",
      "difficulty": "easy",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l25-c5",
    "game_slug": "bible-riddles",
    "level": 25,
    "challenge_index": 5,
    "question_text": "TYPE THE NAME — MINI-BOSS RIDDLE:\nI was an earthly half-brother of Jesus who did not believe in Him during His earthly ministry. Following His resurrection, Jesus appeared personally to me (1 Corinthians 15:7), and I became the foremost leader and pillar of the early church in Jerusalem. I presided over the historic Jerusalem Council in Acts 15, declaring the final consensus regarding Gentile converts, authored a practical New Testament epistle on living faith and trials, and was nicknamed \"the Just\" and \"Camel Knees\" for my ceaseless intercession. Who am I?",
    "options": [
      "James the Lord’s Brother",
      "James the Son of Zebedee",
      "James the Son of Alphaeus",
      "Jude"
    ],
    "correct_answer": "James the Lord’s Brother",
    "explanation": "James the brother of Jesus was converted by the resurrected Christ, led the Jerusalem Council, and wrote the Epistle of James.",
    "reference": "Matthew 13:55; Acts 15:13–21; 1 Corinthians 15:7; Galatians 1:19; James 1:1",
    "metadata": {
      "riddle_type": "Type the Name",
      "is_typed": true,
      "clues": [
        "Referred to by Paul in Galatians 1:19 as \"James the Lord’s brother.\"",
        "Referred to as a pillar alongside Cephas and John in Galatians 2:9.",
        "Martyred in Jerusalem by high priest Ananus around 62 AD according to Josephus."
      ],
      "hint": "Half-brother of Jesus who led the Jerusalem Council and wrote the Epistle of James.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "James",
        "James the Just",
        "James the Brother of Jesus",
        "James the Brother of the Lord"
      ],
      "stage": 5,
      "stage_title": "The Three-Clue Challenge",
      "level_theme": "Apostolic Witnesses & Martyrs",
      "difficulty": "medium",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l26-c1",
    "game_slug": "bible-riddles",
    "level": 26,
    "challenge_index": 1,
    "question_text": "TYPE TWO ANSWERS:\nWe were two Hebrew midwives operating in Egypt during the Pharaoh’s decree of genocide against infant Hebrew boys. Because we feared God more than the king of Egypt, we defied Pharaoh’s direct command and allowed the male babies to live, telling the king that Hebrew women were vigorous and gave birth before the midwife arrived. Scripture notes that God dealt well with us and gave us our own families. What are our two biblical names?",
    "options": [
      "Shiphrah and Puah",
      "Jochebed and Miriam",
      "Tryphena and Tryphosa",
      "Leah and Rachel"
    ],
    "correct_answer": "Shiphrah and Puah",
    "explanation": "Shiphrah and Puah were the courageous Hebrew midwives who feared God and spared baby boys from Pharaoh’s murderous decree.",
    "reference": "Exodus 1:15–21",
    "metadata": {
      "riddle_type": "Type Two Answers",
      "is_typed": true,
      "clues": [
        "Names recorded in Exodus 1:15.",
        "Hebrew names: שִׁפְרָה (meaning \"beautiful\") and פּוּעָה (meaning \"splendid/crying out\").",
        "Exemplified godly civil disobedience against tyranny."
      ],
      "hint": "Two courageous midwives in Exodus 1 who saved Hebrew male babies.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Shiphrah & Puah",
        "Puah and Shiphrah",
        "Shiphrah, Puah",
        "Siphrah and Puah"
      ],
      "stage": 6,
      "stage_title": "Forgotten Names",
      "level_theme": "Forgotten Pentateuch & History Names",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l26-c2",
    "game_slug": "bible-riddles",
    "level": 26,
    "challenge_index": 2,
    "question_text": "WHO AM I?\nI was the father of five daughters from the tribe of Manasseh who died in the wilderness during the forty years of wandering. Because I had no sons, my daughters boldly approached Moses, Eleazar the priest, the chiefs, and the congregation at the entrance of the tent of meeting, asking why my family name should disappear. God ruled in their favor, instituting a permanent legal statute that daughters inherit when a man has no sons. Who am I?",
    "options": [
      "Zelophehad",
      "Hepher",
      "Gilead",
      "Machir"
    ],
    "correct_answer": "Zelophehad",
    "explanation": "Zelophehad of the tribe of Manasseh had five daughters whose historic legal appeal secured property inheritance rights for daughters.",
    "reference": "Numbers 27:1–11; 36:1–12",
    "metadata": {
      "riddle_type": "Who Am I?",
      "is_typed": false,
      "clues": [
        "Daughters: Mahlah, Noah, Hoglah, Milcah, and Tirzah.",
        "Died for his own sins in the wilderness, not participating in Korah’s rebellion.",
        "Case established female inheritance law in Israel (Numbers 27:1–11)."
      ],
      "hint": "Father of five daughters whose legal appeal established female inheritance rights.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Zelophehad of Manasseh",
        "Salphad"
      ],
      "stage": 6,
      "stage_title": "Forgotten Names",
      "level_theme": "Forgotten Pentateuch & History Names",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l26-c3",
    "game_slug": "bible-riddles",
    "level": 26,
    "challenge_index": 3,
    "question_text": "WHO AM I?\nI was the spirited daughter of the great explorer Caleb who was offered as a bride to whoever would attack and capture the Canaanite fortress of Kiriath-sepher (Debir). When my cousin Othniel captured the city and married me, I dismounted from my donkey before my father and requested a wedding blessing: \"You have given me the land of the Negeb; give me also springs of water.\" And Caleb gave me the upper and lower springs. Who am I?",
    "options": [
      "Achsah",
      "Deborah",
      "Jael",
      "Hoglah"
    ],
    "correct_answer": "Achsah",
    "explanation": "Achsah was Caleb’s daughter who married Othniel and petitioned her father for upper and lower water springs in the dry Negeb.",
    "reference": "Joshua 15:16–19; Judges 1:12–15",
    "metadata": {
      "riddle_type": "Who Am I?",
      "is_typed": false,
      "clues": [
        "Daughter of Caleb son of Jephunneh.",
        "Wife of Othniel, Israel’s first judge.",
        "Secured both northern and southern freshwater springs."
      ],
      "hint": "Caleb’s daughter who asked her father for springs of water.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Acsa"
      ],
      "stage": 6,
      "stage_title": "Forgotten Names",
      "level_theme": "Forgotten Pentateuch & History Names",
      "difficulty": "hard",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l26-c4",
    "game_slug": "bible-riddles",
    "level": 26,
    "challenge_index": 4,
    "question_text": "WHO AM I?\nI was a valiant warrior from Kabzeel, son of Jehoiada the priest, who commanded David’s personal bodyguard of Cherethites and Pelethites. Among my legendary exploits: I struck down two royal champions of Moab, went down into a pit on a snowy day and killed a lion with my bare hands, and wrested a spear like a weaver’s beam out of an eight-foot Egyptian giant’s hand and killed him with his own spear. Under King Solomon, I executed Adonijah, Joab, and Shimei, becoming supreme commander of the royal army. Who am I?",
    "options": [
      "Benaiah",
      "Abishai",
      "Asahel",
      "Ittai"
    ],
    "correct_answer": "Benaiah",
    "explanation": "Benaiah son of Jehoiada was David’s bodyguard commander who killed a lion in a snowy pit and became Solomon’s top general.",
    "reference": "2 Samuel 23:20–23; 1 Kings 2:25–46",
    "metadata": {
      "riddle_type": "Who Am I?",
      "is_typed": false,
      "clues": [
        "Son of Jehoiada of Kabzeel.",
        "Killed a lion in a pit on a snowy day.",
        "Succeeded Joab as supreme commander of Solomon’s military."
      ],
      "hint": "Warrior who killed a lion in a snowy pit and became Solomon’s army commander.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Benaiah son of Jehoiada"
      ],
      "stage": 6,
      "stage_title": "Forgotten Names",
      "level_theme": "Forgotten Pentateuch & History Names",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l26-c5",
    "game_slug": "bible-riddles",
    "level": 26,
    "challenge_index": 5,
    "question_text": "TYPE THE NAME — MINI-BOSS RIDDLE:\nI was a concubine of King Saul, daughter of Aiah, who bore him two sons, Armoni and Mephibosheth. When a three-year famine struck Israel because Saul had broken the ancient covenant by slaughtering the Gibeonites, David delivered seven sons of Saul to the Gibeonites, who hanged them on the mountain before the Lord. In an extraordinary vigil of maternal devotion, I spread sackcloth upon a rock from the beginning of harvest until the autumn rains poured from the sky, suffering neither the birds of the air to rest on their corpses by day nor the beasts of the field by night. Moved by my grief, David retrieved their bones and gave them honorable royal burial. Who am I?",
    "options": [
      "Rizpah",
      "Michal",
      "Merab",
      "Abigail"
    ],
    "correct_answer": "Rizpah",
    "explanation": "Rizpah daughter of Aiah kept a heroic vigil over the exposed bodies of her sons and relatives, guarding them from vultures and wild beasts.",
    "reference": "2 Samuel 3:7; 21:8–14",
    "metadata": {
      "riddle_type": "Type the Name",
      "is_typed": true,
      "clues": [
        "Daughter of Aiah; Saul’s royal concubine.",
        "Guarded seven hanging corpses from scavengers for nearly six months.",
        "Her name is recorded in 2 Samuel 3:7 and 21:8–14."
      ],
      "hint": "Saul’s concubine who kept a heroic vigil on sackcloth over her dead sons.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Rizpah daughter of Aiah",
        "Rispa"
      ],
      "stage": 6,
      "stage_title": "Forgotten Names",
      "level_theme": "Forgotten Pentateuch & History Names",
      "difficulty": "master",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l27-c1",
    "game_slug": "bible-riddles",
    "level": 27,
    "challenge_index": 1,
    "question_text": "WHO AM I?\nI was the devoted personal scribe and disciple of the prophet Jeremiah. When Jeremiah was barred from the temple, I wrote down all the words of the Lord from his dictation onto a leather scroll and read them aloud to all the people in the temple on a fast day. When King Jehoiakim cut the scroll with a penknife and threw it into his brazier fire, Jeremiah and I hid, and I penned an expanded second scroll at Jeremiah’s dictation. Who am I?",
    "options": [
      "Baruch",
      "Gedaliah",
      "Ebed-Melech",
      "Seraiah"
    ],
    "correct_answer": "Baruch",
    "explanation": "Baruch son of Neriah was Jeremiah’s faithful scribe who penned the prophetic scroll that King Jehoiakim burned.",
    "reference": "Jeremiah 36:1–32; 45:1–5",
    "metadata": {
      "riddle_type": "Who Am I?",
      "is_typed": false,
      "clues": [
        "Son of Neriah, grandson of Mahseiah.",
        "Lamented: \"Woe is me! For the Lord has added sorrow to my pain\" (Jeremiah 45:3).",
        "God gave him a personal promise that his life would be spared wherever he went."
      ],
      "hint": "Jeremiah’s faithful scribe who wrote down his dictated scrolls.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Baruch son of Neriah"
      ],
      "stage": 6,
      "stage_title": "Forgotten Names",
      "level_theme": "Obscure Monarchy & Prophet Associates",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l27-c2",
    "game_slug": "bible-riddles",
    "level": 27,
    "challenge_index": 2,
    "question_text": "WHO AM I?\nI was appointed governor of the destitute Jewish remnant remaining in Judah by Nebuchadnezzar king of Babylon after the destruction of Jerusalem in 586 BC. Setting up my administrative capital at Mizpah, I encouraged the frightened people to stay, harvest summer fruits, and serve the king of Babylon in peace. Despite being warned by Johanan that Baalis king of the Ammonites had sent an assassin, I refused to believe it, and was murdered at a banquet in Mizpah by Ishmael son of Nethaniah. Who am I?",
    "options": [
      "Gedaliah",
      "Ishmael",
      "Johanan",
      "Pashhur"
    ],
    "correct_answer": "Gedaliah",
    "explanation": "Gedaliah son of Ahikam was the Babylonian-appointed governor of Judah assassinated at Mizpah by Ishmael.",
    "reference": "2 Kings 25:22–25; Jeremiah 40:5–41:3",
    "metadata": {
      "riddle_type": "Who Am I?",
      "is_typed": false,
      "clues": [
        "Son of Ahikam, son of Shaphan.",
        "His father Ahikam had previously protected Jeremiah from execution (Jeremiah 26:24).",
        "His assassination prompted the Fast of Gedaliah in the Jewish calendar."
      ],
      "hint": "Governor of Judah after Jerusalem’s fall murdered at Mizpah by Ishmael.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Gedaliah son of Ahikam",
        "Godolias"
      ],
      "stage": 6,
      "stage_title": "Forgotten Names",
      "level_theme": "Obscure Monarchy & Prophet Associates",
      "difficulty": "hard",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l27-c3",
    "game_slug": "bible-riddles",
    "level": 27,
    "challenge_index": 3,
    "question_text": "WHO AM I?\nI was an ascetic nomad, son of Rechab, who met King Jehu riding in his chariot toward Samaria to purge the dynasty of Ahab. When Jehu asked, \"Is your heart right with my heart, as my heart is with yours?\", I answered, \"It is.\" Jehu gave me his hand, pulled me up into his chariot, and said, \"Come with me, and see my zeal for the Lord.\" Two centuries later, Jeremiah commended my descendants because they strictly obeyed my commands never to drink wine, build houses, sow seed, or plant vineyards. Who am I?",
    "options": [
      "Jehonadab",
      "Rechab",
      "Obadiah",
      "Jehu"
    ],
    "correct_answer": "Jehonadab",
    "explanation": "Jehonadab son of Rechab joined Jehu in wiping out Baal worship, and his nomadic descendants the Rechabites were praised for steadfast fidelity.",
    "reference": "2 Kings 10:15–23; Jeremiah 35:1–19",
    "metadata": {
      "riddle_type": "Who Am I?",
      "is_typed": false,
      "clues": [
        "Jonadab (Jehonadab) son of Rechab.",
        "Helped Jehu eradicate Baal worship from Samaria.",
        "God promised that a descendant of Rechab would never lack a man to stand before Him forever."
      ],
      "hint": "Founder of the wine-abstaining Rechabites who rode with King Jehu.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Jonadab",
        "Jehonadab son of Rechab",
        "Jonadab son of Rechab"
      ],
      "stage": 6,
      "stage_title": "Forgotten Names",
      "level_theme": "Obscure Monarchy & Prophet Associates",
      "difficulty": "master",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l27-c4",
    "game_slug": "bible-riddles",
    "level": 27,
    "challenge_index": 4,
    "question_text": "THE BIBLICAL RELATIONSHIP RIDDLE:\nI was the brother of the scribe Baruch and the royal quartermaster of King Zedekiah. When the last king of Judah traveled to Babylon in the fourth year of his reign, the prophet Jeremiah gave me a scroll containing all the divine judgments destined against Babylon. Jeremiah instructed me that upon arriving in Babylon, I must read the scroll aloud, tie a heavy stone to it, cast it into the midst of the Euphrates River, and declare: \"Thus shall Babylon sink, and never rise again!\" Who am I?",
    "options": [
      "Seraiah",
      "Baruch",
      "Pashhur",
      "Hananiah"
    ],
    "correct_answer": "Seraiah",
    "explanation": "Seraiah, brother of Baruch, threw the scroll of doom into the Euphrates to enact Babylon’s permanent sinking.",
    "reference": "Jeremiah 51:59–64",
    "metadata": {
      "riddle_type": "The Biblical Relationship Riddle",
      "is_typed": false,
      "clues": [
        "Son of Neriah, son of Mahseiah.",
        "Royal quartermaster (officer of the rest).",
        "Enacted the prophetic sinking of Babylon in Jeremiah 51:59–64."
      ],
      "hint": "Baruch’s brother who threw the prophecy scroll tied to a stone into the Euphrates.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Seraiah son of Neriah",
        "Saraias"
      ],
      "stage": 6,
      "stage_title": "Forgotten Names",
      "level_theme": "Obscure Monarchy & Prophet Associates",
      "difficulty": "master",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l27-c5",
    "game_slug": "bible-riddles",
    "level": 27,
    "challenge_index": 5,
    "question_text": "TYPE THE NAME — MINI-BOSS RIDDLE:\nI was a prominent prince of Judah, son of Shaphan the royal scribe. When my son Micaiah reported that Baruch was reading Jeremiah’s forbidden scroll of judgment in the temple, I invited Baruch to read it in my scribe’s chamber before all the officials. Alarmed, we reported the words to King Jehoiakim. When the king began slicing the scroll and burning it in the fire, I along with Elnathan and Delaiah desperately begged the king not to burn the scroll, though he refused to listen. Who am I?",
    "options": [
      "Gemariah",
      "Ahikam",
      "Elnathan",
      "Delaiah"
    ],
    "correct_answer": "Gemariah",
    "explanation": "Gemariah son of Shaphan provided his temple room for Baruch’s reading and pleaded with King Jehoiakim not to burn the scroll.",
    "reference": "Jeremiah 36:10–25",
    "metadata": {
      "riddle_type": "Type the Name",
      "is_typed": true,
      "clues": [
        "Son of Shaphan the chancellor.",
        "His son Micaiah reported Jeremiah’s words from the temple chamber.",
        "Opposed Jehoiakim’s burning of the sacred scroll in Jeremiah 36:10–25."
      ],
      "hint": "Scribe’s son who urged King Jehoiakim not to burn Jeremiah’s scroll.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Gemariah son of Shaphan"
      ],
      "stage": 6,
      "stage_title": "Forgotten Names",
      "level_theme": "Obscure Monarchy & Prophet Associates",
      "difficulty": "master",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l28-c1",
    "game_slug": "bible-riddles",
    "level": 28,
    "challenge_index": 1,
    "question_text": "WHO AM I?\nI was not a professional prophet nor the son of a prophet, but a rural herdsman and a nipper (grower) of sycamore-fig trees from Tekoa in Judah. God called me to leave my sheep and travel north to the royal sanctuary of Bethel in Israel to proclaim divine judgment against economic injustice and empty religious ritual during the prosperous reign of Jeroboam II. Amaziah the priest of Bethel told me to flee back to Judah, but I prophesied the collapse of his house and the exile of Israel. Who am I?",
    "options": [
      "Amos",
      "Hosea",
      "Micah",
      "Habakkuk"
    ],
    "correct_answer": "Amos",
    "explanation": "Amos was the shepherd and dresser of sycamore figs from Tekoa who denounced injustice at Bethel.",
    "reference": "Amos 1:1; 5:24; 7:10–17; 8:1–2",
    "metadata": {
      "riddle_type": "Who Am I?",
      "is_typed": false,
      "clues": [
        "Proclaimed: \"Let justice roll down like waters, and righteousness like an ever-flowing stream.\"",
        "Saw five visions of judgment including a swarm of locusts, devouring fire, a plumb line, and a basket of summer fruit.",
        "Third of the Twelve Minor Prophets."
      ],
      "hint": "Herdsman and dresser of sycamore figs from Tekoa called to prophesy.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Prophet Amos"
      ],
      "stage": 6,
      "stage_title": "Forgotten Names",
      "level_theme": "Minor Prophets & Their Circumstances",
      "difficulty": "easy",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l28-c2",
    "game_slug": "bible-riddles",
    "level": 28,
    "challenge_index": 2,
    "question_text": "THE BIBLICAL RELATIONSHIP RIDDLE:\nI was commanded by the Lord to take \"a wife of whoredom and have children of whoredom,\" marrying a promiscuous woman named Gomer daughter of Diblaim, as a living parabolic dramatization of Israel’s spiritual adultery against Yahweh. Even after she deserted me for other lovers, God commanded me: \"Go again, love a woman who is loved by another man and is an adulteress,\" and I bought her back for fifteen shekels of silver and a homer and a lethech of barley. Who am I?",
    "options": [
      "Hosea",
      "Amos",
      "Joel",
      "Zechariah"
    ],
    "correct_answer": "Hosea",
    "explanation": "Hosea married unfaithful Gomer and later redeemed her from slavery to illustrate God’s unconditional covenant love for apostate Israel.",
    "reference": "Hosea 1:1–9; 3:1–3; 4:6",
    "metadata": {
      "riddle_type": "The Biblical Relationship Riddle",
      "is_typed": false,
      "clues": [
        "Named my children Jezreel, Lo-ruhamah (\"No Mercy\"), and Lo-ammi (\"Not My People\").",
        "Prophesied: \"My people are destroyed for lack of knowledge.\"",
        "First of the Twelve Minor Prophets."
      ],
      "hint": "Prophet commanded to marry an unfaithful wife named Gomer.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Osee"
      ],
      "stage": 6,
      "stage_title": "Forgotten Names",
      "level_theme": "Minor Prophets & Their Circumstances",
      "difficulty": "easy",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l28-c3",
    "game_slug": "bible-riddles",
    "level": 28,
    "challenge_index": 3,
    "question_text": "WHO AM I?\nI was an introspective prophet of Judah who wrestled deeply with God concerning why the righteous suffer while the wicked flourish. Stationing myself upon my watchtower to see what God would speak to me, I was told: \"Write the vision; make it plain on tablets, so he may run who reads it... the righteous shall live by his faith.\" My book concludes with a triumphant hymn of trust even if the fig tree does not blossom and there are no cattle in the stalls. Who am I?",
    "options": [
      "Habakkuk",
      "Zephaniah",
      "Nahum",
      "Malachi"
    ],
    "correct_answer": "Habakkuk",
    "explanation": "Habakkuk stood on his watchtower questioning God’s providence, receiving the revelation that \"the righteous shall live by his faith.\"",
    "reference": "Habakkuk 1:1–2:4; 3:17–19",
    "metadata": {
      "riddle_type": "Who Am I?",
      "is_typed": false,
      "clues": [
        "Wrestled with God’s use of the ruthless Babylonians (Chaldeans) as an instrument of judgment.",
        "Key verse Habakkuk 2:4 quoted in Romans 1:17, Galatians 3:11, and Hebrews 10:38.",
        "Concludes: \"God, the Lord, is my strength; he makes my feet like the deer’s.\""
      ],
      "hint": "Prophet on the watchtower who declared \"the righteous shall live by faith.\"",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Habacuc"
      ],
      "stage": 6,
      "stage_title": "Forgotten Names",
      "level_theme": "Minor Prophets & Their Circumstances",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l28-c4",
    "game_slug": "bible-riddles",
    "level": 28,
    "challenge_index": 4,
    "question_text": "WHO AM I?\nI was a post-exilic prophet who arrived in Jerusalem in 520 BC when work on the Second Temple had been stalled for sixteen years while the returnees built their own paneled homes. I rebuked the nation: \"Is it a time for you yourselves to dwell in your paneled houses, while this house lies in ruins? Consider your ways!\" My four concise sermons inspired Zerubbabel and Joshua to resume construction within twenty-three days. Who am I?",
    "options": [
      "Haggai",
      "Zechariah",
      "Malachi",
      "Obadiah"
    ],
    "correct_answer": "Haggai",
    "explanation": "Haggai urged the returned Jewish community to \"consider your ways\" and rebuild the neglected temple.",
    "reference": "Haggai 1:1–15; 2:1–9, 20–23",
    "metadata": {
      "riddle_type": "Who Am I?",
      "is_typed": false,
      "clues": [
        "Tenth of the Twelve Minor Prophets.",
        "Prophesied: \"The latter glory of this house shall be greater than the former.\"",
        "Delivered all four messages within a four-month period during the second year of King Darius."
      ],
      "hint": "Post-exilic prophet who challenged the people to stop building paneled houses and finish the Temple.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Aggaeus"
      ],
      "stage": 6,
      "stage_title": "Forgotten Names",
      "level_theme": "Minor Prophets & Their Circumstances",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l28-c5",
    "game_slug": "bible-riddles",
    "level": 28,
    "challenge_index": 5,
    "question_text": "TYPE THE NAME — MINI-BOSS RIDDLE:\nI was the post-exilic prophet, son of Berechiah, son of Iddo, who prophesied alongside Haggai. In a single night, I received eight vivid apocalyptic night visions—including four horsemen among myrtle trees, four horns and four craftsmen, a man with a measuring line, a flying scroll thirty feet long, a woman named Wickedness sitting inside an ephah basket carried to Babylon, and four chariots between bronze mountains. I crowned the high priest Joshua with a golden crown as a type of the Branch. Who am I?",
    "options": [
      "Zechariah",
      "Haggai",
      "Malachi",
      "Joel"
    ],
    "correct_answer": "Zechariah",
    "explanation": "Zechariah received eight night visions of Israel’s restoration, crowned the high priest Joshua, and foretold Christ’s triumphal entry.",
    "reference": "Zechariah 1:1–8; 4:1–14; 5:1–11; 6:9–15; 9:9",
    "metadata": {
      "riddle_type": "Type the Name",
      "is_typed": true,
      "clues": [
        "Prophesied the triumphal entry: \"Behold, your king is coming to you... humble and mounted on a donkey\" (9:9).",
        "Prophesied the betrayal price: \"thirty pieces of silver\" (11:12–13).",
        "Prophesied: \"They will look on me, him whom they have pierced\" (12:10)."
      ],
      "hint": "Prophet of eight night visions, the thirty pieces of silver, and the King riding on a donkey.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Zacharias",
        "Zechariah son of Berechiah"
      ],
      "stage": 6,
      "stage_title": "Forgotten Names",
      "level_theme": "Minor Prophets & Their Circumstances",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l29-c1",
    "game_slug": "bible-riddles",
    "level": 29,
    "challenge_index": 1,
    "question_text": "WHO AM I?\nI was a righteous and devout elderly man living in Jerusalem waiting for the consolation of Israel, upon whom the Holy Spirit rested. It had been revealed to me by the Spirit that I would not see death before I had seen the Lord’s Christ. Guided by the Spirit into the temple when Mary and Joseph brought in the infant Jesus, I took the child into my arms, blessed God, and sang the Nunc Dimittis: \"Lord, now you are letting your servant depart in peace.\" Who am I?",
    "options": [
      "Simeon",
      "Zacharias",
      "Nicodemus",
      "Cleopas"
    ],
    "correct_answer": "Simeon",
    "explanation": "Simeon was the devout Jerusalem elder promised by the Holy Spirit that he would not die before holding the infant Messiah.",
    "reference": "Luke 2:25–35",
    "metadata": {
      "riddle_type": "Who Am I?",
      "is_typed": false,
      "clues": [
        "Prophesied to Mary that a sword would pierce her own soul also.",
        "Declared Jesus to be \"a light for revelation to the Gentiles, and for glory to your people Israel.\"",
        "Recorded solely in Luke 2:25–35."
      ],
      "hint": "Righteous elder who held baby Jesus in the temple and sang the Nunc Dimittis.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Simon the Devout"
      ],
      "stage": 6,
      "stage_title": "Forgotten Names",
      "level_theme": "Obscure Gospel & Acts Characters",
      "difficulty": "easy",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l29-c2",
    "game_slug": "bible-riddles",
    "level": 29,
    "challenge_index": 2,
    "question_text": "WHO AM I?\nI was an elderly prophetess of the tribe of Asher, daughter of Phanuel. Having been widowed after seven years of marriage, I lived as a widow until the age of eighty-four, never departing from the temple, worshiping with fasting and prayer night and day. Coming up at that very hour when Simeon held baby Jesus, I began to give thanks to God and speak of Him to all who were waiting for the redemption of Jerusalem. Who am I?",
    "options": [
      "Anna",
      "Elizabeth",
      "Dorcas",
      "Lydia"
    ],
    "correct_answer": "Anna",
    "explanation": "Anna was the 84-year-old prophetess of the tribe of Asher who praised God for baby Jesus in the temple.",
    "reference": "Luke 2:36–38",
    "metadata": {
      "riddle_type": "Who Am I?",
      "is_typed": false,
      "clues": [
        "Recorded in Luke 2:36–38.",
        "Daughter of Phanuel, of the tribe of Asher.",
        "Faithful temple intercessor for over six decades."
      ],
      "hint": "84-year-old widow prophetess in the temple who gave thanks for baby Jesus.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Anna the Prophetess"
      ],
      "stage": 6,
      "stage_title": "Forgotten Names",
      "level_theme": "Obscure Gospel & Acts Characters",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l29-c3",
    "game_slug": "bible-riddles",
    "level": 29,
    "challenge_index": 3,
    "question_text": "WHO AM I?\nI was a blind beggar sitting by the roadside outside Jericho. When I heard the commotion that Jesus of Nazareth was passing by, I cried out loudly: \"Jesus, Son of David, have mercy on me!\" Though many strictly rebuked me to keep quiet, I cried out all the more. When Jesus stopped and summoned me, I threw off my cloak, sprang up, and came to Him; when He asked what I wanted, I replied: \"Rabboni, let me recover my sight.\" Who am I?",
    "options": [
      "Bartimaeus",
      "Zacchaeus",
      "Malchus",
      "Lazarus"
    ],
    "correct_answer": "Bartimaeus",
    "explanation": "Bartimaeus son of Timaeus was the persistent blind beggar outside Jericho healed by Jesus after crying out to the \"Son of David.\"",
    "reference": "Mark 10:46–52",
    "metadata": {
      "riddle_type": "Who Am I?",
      "is_typed": false,
      "clues": [
        "Name literally translates as \"son of Timaeus.\"",
        "Recorded in Mark 10:46–52.",
        "Immediately received his sight and followed Jesus on the way."
      ],
      "hint": "Blind beggar outside Jericho who cast off his cloak when Jesus called him.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Blind Bartimaeus",
        "Bar-Timaeus"
      ],
      "stage": 6,
      "stage_title": "Forgotten Names",
      "level_theme": "Obscure Gospel & Acts Characters",
      "difficulty": "easy",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l29-c4",
    "game_slug": "bible-riddles",
    "level": 29,
    "challenge_index": 4,
    "question_text": "THE THREE-CLUE RIDDLE:\nClue 1: I was a young servant girl in the home of Mary, the mother of John Mark, in Jerusalem.\nClue 2: While the church was gathered inside praying fervently through the night for the imprisoned Apostle Peter, Peter was freed by an angel and knocked on the outer courtyard gate.\nClue 3: I ran to answer the knock, recognized Peter’s voice, but in sheer joy failed to open the door, running inside to announce Peter was standing at the gate; the praying disciples told me, \"You are out of your mind!\" Who am I?",
    "options": [
      "Rhoda",
      "Tabitha",
      "Phoebe",
      "Claudia"
    ],
    "correct_answer": "Rhoda",
    "explanation": "Rhoda was the servant girl who recognized Peter’s voice at the gate but left him outside while she ran to tell the astonished prayer meeting.",
    "reference": "Acts 12:12–16",
    "metadata": {
      "riddle_type": "The Three-Clue Riddle",
      "is_typed": false,
      "clues": [
        "Name means \"rose\" in Greek.",
        "Left the Apostle Peter standing locked outside on the street.",
        "Her account is preserved in Acts 12:12–16."
      ],
      "hint": "Maid who was so overjoyed to hear Peter’s voice that she forgot to unlock the door.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Roda"
      ],
      "stage": 6,
      "stage_title": "Forgotten Names",
      "level_theme": "Obscure Gospel & Acts Characters",
      "difficulty": "easy",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l29-c5",
    "game_slug": "bible-riddles",
    "level": 29,
    "challenge_index": 5,
    "question_text": "TYPE THE NAME — MINI-BOSS RIDDLE:\nI was a prominent synagogue ruler in Corinth who, along with my entire household, believed in the Lord after hearing Paul preach. When Sosthenes succeeded me and an anti-Christian mob dragged Sosthenes before the Roman proconsul Gallio, Gallio refused to judge Jewish religious matters. Paul personally baptized me in Corinth, as he specifically recalls in 1 Corinthians 1:14: \"I thank God that I baptized none of you except [...] and Gaius.\" Who am I?",
    "options": [
      "Crispus",
      "Sosthenes",
      "Gaius",
      "Stephanas"
    ],
    "correct_answer": "Crispus",
    "explanation": "Crispus was the ruler of the Corinthian synagogue who believed in Christ with his whole family and was baptized personally by Paul.",
    "reference": "Acts 18:8; 1 Corinthians 1:14",
    "metadata": {
      "riddle_type": "Type the Name",
      "is_typed": true,
      "clues": [
        "Ruler of the Corinthian synagogue who converted to Christ.",
        "Recorded in Acts 18:8 and 1 Corinthians 1:14.",
        "One of the very few individuals Paul personally baptized."
      ],
      "hint": "Ruler of the Corinthian synagogue converted and baptized personally by Paul.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Crispos"
      ],
      "stage": 6,
      "stage_title": "Forgotten Names",
      "level_theme": "Obscure Gospel & Acts Characters",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l30-c1",
    "game_slug": "bible-riddles",
    "level": 30,
    "challenge_index": 1,
    "question_text": "WHO AM I?\nI was a deaconess/servant of the church at Cenchreae, the eastern port of Corinth. In Romans 16:1–2, the Apostle Paul formally commends me to the Roman church, urging them to receive me in the Lord in a manner worthy of the saints and assist me in whatever matter I might need, for I had been a patron and helper of many, including Paul himself. Church tradition identifies me as the courier who carried Paul’s Epistle to the Romans across the sea to Rome. Who am I?",
    "options": [
      "Phoebe",
      "Priscilla",
      "Lydia",
      "Chloe"
    ],
    "correct_answer": "Phoebe",
    "explanation": "Phoebe was the deaconess of Cenchreae commended by Paul who carried the Epistle to the Romans to its destination.",
    "reference": "Romans 16:1–2",
    "metadata": {
      "riddle_type": "Who Am I?",
      "is_typed": false,
      "clues": [
        "Served the seaport church of Cenchreae.",
        "Designated by Paul as a diakonos (servant/deacon) and prostatis (patron/benefactor).",
        "First person commended in Romans 16."
      ],
      "hint": "Deaconess of Cenchreae who carried Paul’s Epistle to the Romans.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Phebe"
      ],
      "stage": 6,
      "stage_title": "Forgotten Names",
      "level_theme": "Unfamiliar Epistolary Saints",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l30-c2",
    "game_slug": "bible-riddles",
    "level": 30,
    "challenge_index": 2,
    "question_text": "WHO AM I?\nI am mentioned in Romans 16:23 alongside Erastus, the city treasurer of Corinth. While Tertius had just introduced himself as the scribe who wrote down the letter and Gaius as the host of the whole church, I am simply and tenderly described by Paul with a Latin name meaning \"Fourth\": \"[...] a brother greets you.\" Who am I?",
    "options": [
      "Quartus",
      "Tertius",
      "Secundus",
      "Fortunatus"
    ],
    "correct_answer": "Quartus",
    "explanation": "Quartus was a Christian in Corinth whose name means \"Fourth,\" warmly designated by Paul as \"a brother\" in Romans 16:23.",
    "reference": "Romans 16:23",
    "metadata": {
      "riddle_type": "Who Am I?",
      "is_typed": false,
      "clues": [
        "Recorded in Romans 16:23.",
        "Name is a Latin ordinal number corresponding to 4.",
        "One of the believers sending greetings from Corinth to Rome."
      ],
      "hint": "Corinthian believer whose name means \"Fourth\" greeted in Romans 16:23.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Quartus a brother",
        "Quartos"
      ],
      "stage": 6,
      "stage_title": "Forgotten Names",
      "level_theme": "Unfamiliar Epistolary Saints",
      "difficulty": "hard",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l30-c3",
    "game_slug": "bible-riddles",
    "level": 30,
    "challenge_index": 3,
    "question_text": "THE BIBLICAL RELATIONSHIP RIDDLE:\nIn Romans 16:13, Paul writes: \"Greet [...], chosen in the Lord; also his mother, who has been a mother to me as well.\" Many biblical scholars identify me as the same son of Simon of Cyrene (who carried Jesus’ cross) mentioned alongside my brother Alexander in Mark 15:21, which was written for the church in Rome. Who am I?",
    "options": [
      "Rufus",
      "Alexander",
      "Jason",
      "Urbanus"
    ],
    "correct_answer": "Rufus",
    "explanation": "Rufus, son of Simon of Cyrene, was greeted in Romans 16:13 as \"chosen in the Lord,\" with his mother honored as a spiritual mother to Paul.",
    "reference": "Mark 15:21; Romans 16:13",
    "metadata": {
      "riddle_type": "The Biblical Relationship Riddle",
      "is_typed": false,
      "clues": [
        "Brother of Alexander, son of Simon of Cyrene.",
        "Greeted in Romans 16:13.",
        "Paul affectionately refers to his mother as \"a mother to me as well.\""
      ],
      "hint": "Son of Simon of Cyrene greeted in Romans 16 whose mother was like a mother to Paul.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Rufus the chosen"
      ],
      "stage": 6,
      "stage_title": "Forgotten Names",
      "level_theme": "Unfamiliar Epistolary Saints",
      "difficulty": "hard",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l30-c4",
    "game_slug": "bible-riddles",
    "level": 30,
    "challenge_index": 4,
    "question_text": "WHO AM I?\nI was an Asian Christian from Ephesus or the province of Asia whom Paul called \"the beloved brother and faithful minister and fellow servant in the Lord.\" Paul entrusted me to carry his circular epistle to the Ephesians and his letter to the Colossians across the Mediterranean from his Roman imprisonment, and later sent me to Crete to relieve Titus and to Ephesus to relieve Timothy. Who am I?",
    "options": [
      "Tychicus",
      "Trophimus",
      "Aristarchus",
      "Epaphras"
    ],
    "correct_answer": "Tychicus",
    "explanation": "Tychicus was Paul’s trusted courier who delivered the epistles to the Ephesians and Colossians and served as pastoral relief.",
    "reference": "Acts 20:4; Ephesians 6:21–22; Colossians 4:7–8; 2 Timothy 4:12; Titus 3:12",
    "metadata": {
      "riddle_type": "Who Am I?",
      "is_typed": false,
      "clues": [
        "Carried Ephesians (6:21–22) and Colossians (4:7–8).",
        "Accompanied the returning runaway slave Onesimus.",
        "Sent to Ephesus in 2 Timothy 4:12."
      ],
      "hint": "Paul’s trusted courier who carried the letters to the Ephesians and Colossians.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Tychicos"
      ],
      "stage": 6,
      "stage_title": "Forgotten Names",
      "level_theme": "Unfamiliar Epistolary Saints",
      "difficulty": "hard",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l30-c5",
    "game_slug": "bible-riddles",
    "level": 30,
    "challenge_index": 5,
    "question_text": "TYPE THE NAME — MINI-BOSS RIDDLE:\nI was a Macedonian Christian from Thessalonica who traveled faithfully with Paul throughout his third missionary journey. In Ephesus, during the riot in the great theater sparked by Demetrius the silversmith, the enraged mob dragged me into the theater alongside Gaius. Later, I boarded the grain ship with Paul on his fateful voyage to Rome, surviving the terrifying Mediterranean storm and shipwreck, and Paul explicitly identifies me in Colossians 4:10 and Philemon 1:24 as my \"fellow prisoner.\" Who am I?",
    "options": [
      "Aristarchus",
      "Secundus",
      "Sopater",
      "Erastus"
    ],
    "correct_answer": "Aristarchus",
    "explanation": "Aristarchus of Thessalonica was dragged into the Ephesian theater, accompanied Paul to Rome, and was his faithful \"fellow prisoner.\"",
    "reference": "Acts 19:29; 20:4; 27:2; Colossians 4:10; Philemon 1:24",
    "metadata": {
      "riddle_type": "Type the Name",
      "is_typed": true,
      "clues": [
        "Thessalonian believer dragged into the Ephesian theater (Acts 19:29).",
        "Accompanied Paul on the voyage to Rome (Acts 27:2).",
        "Paul calls him: \"Aristarchus my fellow prisoner greets you\" (Colossians 4:10)."
      ],
      "hint": "Thessalonian dragged into the Ephesian amphitheater who became Paul’s fellow prisoner in Rome.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Aristarchus of Thessalonica",
        "Aristarchos"
      ],
      "stage": 6,
      "stage_title": "Forgotten Names",
      "level_theme": "Unfamiliar Epistolary Saints",
      "difficulty": "master",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l31-c1",
    "game_slug": "bible-riddles",
    "level": 31,
    "challenge_index": 1,
    "question_text": "THE IMPOSSIBLE DESCRIPTION:\nI was an ancient riddle posed to thirty Philistine wedding companions in Timnah: \"Out of the eater came something to eat. Out of the strong came something sweet.\" The companions could not solve me for three days until they threatened the bride with fire to entice her husband. What was the physical origin of this paradoxical riddle?",
    "options": [
      "Honey in the Lion’s Carcass",
      "The Bronze Serpent",
      "Manna from Heaven",
      "Water from the Rock"
    ],
    "correct_answer": "Honey in the Lion’s Carcass",
    "explanation": "Samson’s riddle arose when he discovered a swarm of bees and sweet honey inside the carcass of the lion he had killed.",
    "reference": "Judges 14:5–18",
    "metadata": {
      "riddle_type": "The Impossible Description",
      "is_typed": false,
      "clues": [
        "Originated when Samson tore a young lion apart in the vineyards of Timnah.",
        "A swarm of bees and honey were found inside the carcass of the lion.",
        "Samson scraped honey into his hands and ate as he walked."
      ],
      "hint": "Samson’s riddle based on sweet honey inside a lion’s dead carcass.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Honey in the Lion",
        "Lion and Honey",
        "Samson’s Riddle",
        "Samsons Riddle"
      ],
      "stage": 7,
      "stage_title": "The Difficult Riddles",
      "level_theme": "Paradoxes & Impossible Puzzles",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l31-c2",
    "game_slug": "bible-riddles",
    "level": 31,
    "challenge_index": 2,
    "question_text": "THE IMPOSSIBLE DESCRIPTION:\nI was a deceased prophet whose dry skeletal bones possessed resurrection power even from beyond the grave. When an Israelite burial party was surprised by a band of invading Moabite raiders in the springtime, they hurriedly dumped a dead man’s corpse into my open tomb. As soon as the dead body touched my bones, the man revived, stood up on his feet, and walked out alive! Whose miracle-working bones were these?",
    "options": [
      "Elisha",
      "Elijah",
      "Samuel",
      "Moses"
    ],
    "correct_answer": "Elisha",
    "explanation": "When a dead body touched the bones of Elisha in his tomb, the deceased man came back to life and stood on his feet.",
    "reference": "2 Kings 13:20–21",
    "metadata": {
      "riddle_type": "The Impossible Description",
      "is_typed": false,
      "clues": [
        "Successor to Elijah who received a double portion of his spirit.",
        "Died of a lingering illness and was buried in a rock tomb.",
        "His posthumous miracle is recorded in 2 Kings 13:20–21."
      ],
      "hint": "Prophet whose dead bones resurrected a corpse that was thrown into his tomb.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Prophet Elisha",
        "Eliseus"
      ],
      "stage": 7,
      "stage_title": "The Difficult Riddles",
      "level_theme": "Paradoxes & Impossible Puzzles",
      "difficulty": "hard",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l31-c3",
    "game_slug": "bible-riddles",
    "level": 31,
    "challenge_index": 3,
    "question_text": "WHAT AM I?\nI was a sacred ritual sacrifice in Numbers 19 involving a female bovine without blemish or defect, upon which a yoke had never come. Slaughtered outside the camp before Eleazar the priest, my blood, hide, flesh, and dung were burned completely with cedarwood, hyssop, and scarlet yarn. My ashes were mixed with running water to create the \"water for impurity\" to cleanse those defiled by touching a corpse; yet paradoxically, the clean priest who burned me became ceremonially unclean until evening. What animal am I?",
    "options": [
      "The Red Heifer",
      "The Scapegoat",
      "The Passover Lamb",
      "The Ram of Consecration"
    ],
    "correct_answer": "The Red Heifer",
    "explanation": "The ashes of the red heifer mixed with water purified those defiled by death, yet paradoxically defiled the clean priest who prepared it.",
    "reference": "Numbers 19:1–13; Hebrews 9:13",
    "metadata": {
      "riddle_type": "What Am I?",
      "is_typed": false,
      "clues": [
        "The red heifer (Parah Adumah).",
        "Ashes preserved outside the camp in a clean place.",
        "Cited in Hebrews 9:13 as a type of the blood of Christ purifying the conscience."
      ],
      "hint": "Flawless red cow burned outside the camp to create cleansing ash-water.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Red Heifer",
        "The Red Cow",
        "Ashes of the Red Heifer"
      ],
      "stage": 7,
      "stage_title": "The Difficult Riddles",
      "level_theme": "Paradoxes & Impossible Puzzles",
      "difficulty": "hard",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l31-c4",
    "game_slug": "bible-riddles",
    "level": 31,
    "challenge_index": 4,
    "question_text": "THE EVENT RIDDLE:\nDuring the birth of twin sons to Tamar by Judah in Genesis 38, one baby put out his hand first. The midwife tied a scarlet thread around his wrist, declaring, \"This one came out first.\" However, he drew back his hand, and his twin brother breached the birth canal first, earning a name meaning \"Breach.\" The first baby then came out with the scarlet thread still on his wrist, and was named \"Bright\" or \"Dawn.\" What are the names of these twin boys?",
    "options": [
      "Perez and Zerah",
      "Jacob and Esau",
      "Ephraim and Manasseh",
      "Gershom and Eliezer"
    ],
    "correct_answer": "Perez and Zerah",
    "explanation": "Tamar bore twins Perez and Zerah; Zerah put his hand out first and received the scarlet cord, but Perez breached first to take the birthright.",
    "reference": "Genesis 38:27–30; Matthew 1:3",
    "metadata": {
      "riddle_type": "The Event Riddle",
      "is_typed": false,
      "clues": [
        "Recorded in Genesis 38:27–30.",
        "Perez (the breach) became the ancestor of King David and Jesus Christ (Matthew 1:3).",
        "Zerah was the twin with the scarlet thread."
      ],
      "hint": "Twin sons of Judah and Tamar where one put out a hand tied with a scarlet thread.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Perez & Zerah",
        "Pharez and Zarah",
        "Zerah and Perez",
        "Perez, Zerah"
      ],
      "stage": 7,
      "stage_title": "The Difficult Riddles",
      "level_theme": "Paradoxes & Impossible Puzzles",
      "difficulty": "hard",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l31-c5",
    "game_slug": "bible-riddles",
    "level": 31,
    "challenge_index": 5,
    "question_text": "TYPE THE NAME — MINI-BOSS RIDDLE:\nI was a wealthy, harsh, and ill-mannered Calebite pastoralist from Maon shearing three thousand sheep in Carmel. When David sent ten young men requesting customary hospitality during shearing festival for having protected my shepherds, I insolently replied: \"Who is David? Who is the son of Jesse? There are many servants these days who are breaking away from their masters.\" Enraged, David strapped on his sword with four hundred armed men to annihilate every male in my household. When my wife later told me how close I had come to destruction, my heart died within me and I became like a stone, dying ten days later when the Lord struck me. Who am I?",
    "options": [
      "Nabal",
      "Doeg",
      "Shimei",
      "Ahithophel"
    ],
    "correct_answer": "Nabal",
    "explanation": "Nabal was the wealthy fool whose insulting refusal of food to David nearly cost his entire house their lives until Abigail intervened.",
    "reference": "1 Samuel 25:2–38",
    "metadata": {
      "riddle_type": "Type the Name",
      "is_typed": true,
      "clues": [
        "Name literally means \"fool\" or \"senseless\" in Hebrew.",
        "Husband of the beautiful and discerning Abigail.",
        "After my death, David took Abigail to be his wife."
      ],
      "hint": "Foolish husband of Abigail whose heart died within him like a stone.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Nabal the Carmelite"
      ],
      "stage": 7,
      "stage_title": "The Difficult Riddles",
      "level_theme": "Paradoxes & Impossible Puzzles",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l32-c1",
    "game_slug": "bible-riddles",
    "level": 32,
    "challenge_index": 1,
    "question_text": "WHO AM I?\nI was a wise woman of the fortified city of Abel of Beth-maacah in northern Israel. When Joab besieged our city with siege ramps and battering rams pursuing the traitor Sheba son of Bichri, I called over the city wall: \"Listen! Tell Joab, ‘Come here, that I may speak to you!’\" I reminded Joab that our town was a peaceful and faithful mother in Israel, negotiated the preservation of the entire city, and convinced the townsfolk to cut off Sheba’s head and fling it over the wall to Joab, causing him to sound the trumpet and withdraw his troops. Who am I (by my biblical designation)?",
    "options": [
      "The Wise Woman of Abel",
      "The Wise Woman of Tekoa",
      "Abigail",
      "Huldah the Prophetess"
    ],
    "correct_answer": "The Wise Woman of Abel",
    "explanation": "The wise woman of Abel of Beth-maacah saved her city from destruction by convincing the citizens to throw Sheba’s severed head over the wall to Joab.",
    "reference": "2 Samuel 20:14–22",
    "metadata": {
      "riddle_type": "Who Am I?",
      "is_typed": false,
      "clues": [
        "A wise woman of Abel-beth-maacah.",
        "Saved an entire city by negotiating with Joab.",
        "Recorded in 2 Samuel 20:14–22."
      ],
      "hint": "Wise woman who saved her besieged city by throwing the traitor’s head over the wall.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Wise Woman of Abel",
        "The Wise Woman of Abel-beth-maacah",
        "Wise Woman of Abel-beth-maacah"
      ],
      "stage": 7,
      "stage_title": "The Difficult Riddles",
      "level_theme": "Unlikely Interventions & Rescues",
      "difficulty": "hard",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l32-c2",
    "game_slug": "bible-riddles",
    "level": 32,
    "challenge_index": 2,
    "question_text": "WHO AM I?\nI was a royal princess of Judah, daughter of King Jehoram, sister of King Ahaziah, and wife of Jehoiada the high priest. When the murderous Queen Mother Athaliah arose to butcher all the royal heirs of the house of David, I stole away one-year-old baby Joash from among the slaughtered princes and hid him with his nurse in a bedroom in the temple of the Lord for six years, preserving the messianic line of David from complete extinction. Who am I?",
    "options": [
      "Jehosheba",
      "Athaliah",
      "Maacah",
      "Huldah"
    ],
    "correct_answer": "Jehosheba",
    "explanation": "Jehosheba, daughter of King Jehoram, courageously rescued infant Prince Joash from Athaliah’s royal massacre, hiding him in the temple.",
    "reference": "2 Kings 11:1–3; 2 Chronicles 22:11–12",
    "metadata": {
      "riddle_type": "Who Am I?",
      "is_typed": false,
      "clues": [
        "Jehosheba (or Jehoshabeath in 2 Chronicles 22:11).",
        "Wife of Jehoiada the high priest.",
        "Bravery preserved the Davidic lineage unbroken."
      ],
      "hint": "Princess who hid infant King Joash in the temple for six years from Athaliah.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Jehoshabeath",
        "Josaba"
      ],
      "stage": 7,
      "stage_title": "The Difficult Riddles",
      "level_theme": "Unlikely Interventions & Rescues",
      "difficulty": "hard",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l32-c3",
    "game_slug": "bible-riddles",
    "level": 32,
    "challenge_index": 3,
    "question_text": "WHO AM I?\nI was an anonymous young Israelite girl abducted during a Syrian border raid and taken captive into a foreign land, where I was assigned as a domestic servant to the wife of Naaman, commander of the Syrian army. Witnessing my master’s tragic affliction with leprosy, I did not harbor bitterness or rejoice in his suffering, but boldly testified: \"Would that my lord were with the prophet who is in Samaria! He would cure him of his leprosy.\" My simple testimony set in motion Naaman’s miraculous healing in the Jordan River. Who am I?",
    "options": [
      "The Captive Maid of Israel",
      "The Widow of Zarephath",
      "The Shunammite Woman",
      "Achsah"
    ],
    "correct_answer": "The Captive Maid of Israel",
    "explanation": "The unnamed captive Israelite maid showed extraordinary faith and compassion by directing Naaman to Elisha for healing.",
    "reference": "2 Kings 5:1–4",
    "metadata": {
      "riddle_type": "Who Am I?",
      "is_typed": false,
      "clues": [
        "Known as the little captive maid from Israel.",
        "Spoke of the prophet Elisha in Samaria.",
        "Her faith led a Syrian commander to confess the God of Israel."
      ],
      "hint": "Young captive Israelite slave girl who told Naaman’s wife about Elisha.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "The Little Maid",
        "Captive Maid",
        "The Servant Girl of Naaman’s Wife",
        "The Little Hebrew Maid"
      ],
      "stage": 7,
      "stage_title": "The Difficult Riddles",
      "level_theme": "Unlikely Interventions & Rescues",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l32-c4",
    "game_slug": "bible-riddles",
    "level": 32,
    "challenge_index": 4,
    "question_text": "WHO AM I?\nI was an innkeeper and harlot living in the fortified outer wall of Jericho. When two Hebrew spies sent by Joshua arrived, I hid them under stalks of flax laid out on my flat roof and misled the king’s search party. Having heard how the Lord dried up the Red Sea, I declared: \"Yahweh your God, he is God in heaven above and on earth beneath.\" In return, the spies pledged my household’s safety on condition that I tie a scarlet cord in the window through which I lowered them by a rope. Who am I?",
    "options": [
      "Rahab",
      "Tamar",
      "Ruth",
      "Deborah"
    ],
    "correct_answer": "Rahab",
    "explanation": "Rahab the harlot sheltered Joshua’s spies in Jericho, hung the scarlet cord from her window, and was grafted into the royal genealogy of Jesus.",
    "reference": "Joshua 2:1–21; 6:22–25; Matthew 1:5; Hebrews 11:31",
    "metadata": {
      "riddle_type": "Who Am I?",
      "is_typed": false,
      "clues": [
        "Saved from Jericho’s total destruction.",
        "Married Salmon and became mother of Boaz, ancestor of King David and Jesus Christ (Matthew 1:5).",
        "Praised for faith in Hebrews 11:31 and James 2:25."
      ],
      "hint": "Jericho innkeeper who hid Joshua’s spies and hung a scarlet cord.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Rachab"
      ],
      "stage": 7,
      "stage_title": "The Difficult Riddles",
      "level_theme": "Unlikely Interventions & Rescues",
      "difficulty": "easy",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l32-c5",
    "game_slug": "bible-riddles",
    "level": 32,
    "challenge_index": 5,
    "question_text": "TYPE THE NAME — MINI-BOSS RIDDLE:\nWhen the Apostle Paul was held under armed guard in the Antonia Fortress in Jerusalem, more than forty Jewish conspirators bound themselves under a solemn curse with an oath neither to eat nor to drink until they had killed Paul. However, a young unnamed family member of Paul heard of their ambush, entered the Roman barracks, and reported the plot directly to the tribune Claudius Lysias. Lysias immediately dispatched two hundred soldiers, seventy horsemen, and two hundred spearmen at the third hour of the night to escort Paul safely to Governor Felix in Caesarea. What family relation was this heroic young man to Paul?",
    "options": [
      "Paul’s Nephew",
      "Paul’s Brother",
      "Paul’s Cousin",
      "Paul’s Son-in-law"
    ],
    "correct_answer": "Paul’s Nephew",
    "explanation": "Paul’s nephew (his sister’s son) uncovered the assassination plot of the forty conspirators and saved Paul’s life by informing the Roman commander.",
    "reference": "Acts 23:12–24",
    "metadata": {
      "riddle_type": "Type the Name",
      "is_typed": true,
      "clues": [
        "Acts 23:16 explicitly identifies him: \"the son of Paul’s sister.\"",
        "Bravely entered the Roman fortress to warn Paul.",
        "Paul told a centurion: \"Take this young man to the tribune, for he has something to tell him.\""
      ],
      "hint": "Paul’s young relative (sister’s son) who uncovered the 40-man assassination plot.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Pauls Nephew",
        "Son of Paul’s Sister",
        "His Sister’s Son",
        "The Nephew of Paul"
      ],
      "stage": 7,
      "stage_title": "The Difficult Riddles",
      "level_theme": "Unlikely Interventions & Rescues",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l33-c1",
    "game_slug": "bible-riddles",
    "level": 33,
    "challenge_index": 1,
    "question_text": "WHAT AM I?\nI was an ancient legal custom in Israel regarding redemption and exchange to confirm a transaction, famously illustrated in Ruth 4. When a closer kinsman refused to redeem the land of Elimelech and marry Ruth the Moabitess lest he impair his own inheritance, he performed a symbolic act: he pulled off his leather sandal and handed it to Boaz before the ten elders of the town gate as a binding public testimony. What legal custom am I?",
    "options": [
      "The Removal of the Sandal",
      "The Cutting of the Covenant",
      "The Year of Jubilee",
      "The Cities of Refuge"
    ],
    "correct_answer": "The Removal of the Sandal",
    "explanation": "Removing and transferring a sandal was the legal ratification of a property redemption and marriage right in ancient Israel.",
    "reference": "Deuteronomy 25:5–10; Ruth 4:7–10",
    "metadata": {
      "riddle_type": "What Am I?",
      "is_typed": false,
      "clues": [
        "The law of the kinsman-redeemer (Go’el).",
        "In Deuteronomy 25:9, a brother’s widow pulls off the sandal of a man who refuses levirate marriage and spits in his face.",
        "Symbolized transferring ownership and the right to tread upon the property."
      ],
      "hint": "Legal custom where a man drew off his shoe to confirm a transaction at the gate.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Removal of the Sandal",
        "Unloosing the Shoe",
        "Removing the Shoe",
        "Sandal Ceremony"
      ],
      "stage": 7,
      "stage_title": "The Difficult Riddles",
      "level_theme": "Obscure Legal Situations & Covenants",
      "difficulty": "hard",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l33-c2",
    "game_slug": "bible-riddles",
    "level": 33,
    "challenge_index": 2,
    "question_text": "WHAT AM I?\nWe were six Levite sanctuary cities appointed by Moses and Joshua—three on the east side of the Jordan and three in Canaan proper (Kedesh, Shechem, Hebron, Bezer, Ramoth, and Golan). An accidental manslayer who killed a neighbor without premeditation could flee into our gates to escape the avenger of blood. The manslayer had to remain within our boundaries until the death of the reigning high priest, after which he could return safely to his own land. What are we?",
    "options": [
      "Cities of Refuge",
      "Levitical Cities",
      "Cities of the Plain",
      "Royal Cities"
    ],
    "correct_answer": "Cities of Refuge",
    "explanation": "The six Cities of Refuge provided asylum for unintentional manslayers until the death of the high priest.",
    "reference": "Numbers 35:9–34; Joshua 20:1–9",
    "metadata": {
      "riddle_type": "What Am I?",
      "is_typed": false,
      "clues": [
        "Six cities of refuge (Arei Miklat).",
        "Roads leading to us had to be cleared and maintained with signposts reading \"Refuge.\"",
        "Protected only unintentional killers, not willful murderers."
      ],
      "hint": "Six designated sanctuary cities where an accidental manslayer was protected from the avenger of blood.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "The Cities of Refuge",
        "City of Refuge",
        "Cities of Refuge in Israel"
      ],
      "stage": 7,
      "stage_title": "The Difficult Riddles",
      "level_theme": "Obscure Legal Situations & Covenants",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l33-c3",
    "game_slug": "bible-riddles",
    "level": 33,
    "challenge_index": 3,
    "question_text": "WHAT AM I?\nI was an ancient covenant vow described in Numbers 6 taken by a man or woman who consecrated themselves specially to the Lord for a period of time. During the days of separation, three strict prohibitions applied: eating or drinking anything produced by the grapevine (from seeds to skin, including wine and vinegar), letting a razor touch the head, and going near any dead body, even that of a father or mother. What vow am I?",
    "options": [
      "The Nazirite Vow",
      "The Rechabite Vow",
      "The Priestly Vow",
      "The Levirate Vow"
    ],
    "correct_answer": "The Nazirite Vow",
    "explanation": "The Nazirite vow involved abstaining from wine, leaving hair uncut, and avoiding dead bodies during the period of special consecration to God.",
    "reference": "Numbers 6:1–21; Acts 18:18; 21:23–26",
    "metadata": {
      "riddle_type": "What Am I?",
      "is_typed": false,
      "clues": [
        "The Nazirite vow (from the Hebrew nazar, to separate).",
        "Samson, Samuel, and John the Baptist were lifelong Nazirites from the womb.",
        "Paul completed a temporary vow of this nature by shaving his head at Cenchreae (Acts 18:18)."
      ],
      "hint": "Vow of special separation prohibiting wine, haircuts, and touching corpses.",
      "testament": "Both",
      "acceptedAlternatives": [
        "Nazirite Vow",
        "Nazarite Vow",
        "The Nazarite Vow",
        "Vow of a Nazirite"
      ],
      "stage": 7,
      "stage_title": "The Difficult Riddles",
      "level_theme": "Obscure Legal Situations & Covenants",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l33-c4",
    "game_slug": "bible-riddles",
    "level": 33,
    "challenge_index": 4,
    "question_text": "WHAT AM I?\nI was a special legal festival occurring every fiftieth year in Israel, inaugurated by the blowing of the ram’s horn (shofar) throughout all the land on the Day of Atonement. During my celebration, all ancestral land that had been sold reverted back to its original family owners, all Hebrew slaves were set free without ransom, and the land lay fallow without sowing or pruning. Leviticus 25:10 proclaims my motto: \"Proclaim liberty throughout all the land to all its inhabitants.\" What year am I?",
    "options": [
      "The Year of Jubilee",
      "The Sabbatical Year",
      "The Feast of Tabernacles",
      "The Day of Atonement"
    ],
    "correct_answer": "The Year of Jubilee",
    "explanation": "The Year of Jubilee occurred every 50th year, proclaiming universal liberty, debt cancellation, release of slaves, and return of ancestral land.",
    "reference": "Leviticus 25:8–55; 27:16–25",
    "metadata": {
      "riddle_type": "What Am I?",
      "is_typed": false,
      "clues": [
        "The Year of Jubilee (Yovel).",
        "Inscribed on the Liberty Bell in Philadelphia.",
        "Occurred after seven cycles of seven sabbatical years (49 years + 1)."
      ],
      "hint": "Fiftieth-year liberation festival proclaimed by the trumpet on the Day of Atonement.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Year of Jubilee",
        "Jubilee",
        "The Jubilee Year",
        "Jubilee Year"
      ],
      "stage": 7,
      "stage_title": "The Difficult Riddles",
      "level_theme": "Obscure Legal Situations & Covenants",
      "difficulty": "easy",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l33-c5",
    "game_slug": "bible-riddles",
    "level": 33,
    "challenge_index": 5,
    "question_text": "TYPE THE NAME — MINI-BOSS RIDDLE:\nWhen Abraham made his oldest household servant swear an oath to travel back to Mesopotamia to find a wife for his son Isaac, he commanded the servant to place his hand under Abraham’s thigh. Scripture does not name this servant in Genesis 24, but earlier in Genesis 15:2, before Isaac was born, Abraham lamented that his sole heir was a steward from Syria. What was the name of this head servant of Abraham’s household from Damascus?",
    "options": [
      "Eliezer",
      "Eliezer of Damascus",
      "Abimelech",
      "Potiphar"
    ],
    "correct_answer": "Eliezer",
    "explanation": "Eliezer of Damascus was Abraham’s trusted head servant who managed his household and secured Rebekah as Isaac’s bride.",
    "reference": "Genesis 15:2; 24:2–4",
    "metadata": {
      "riddle_type": "Type the Name",
      "is_typed": true,
      "clues": [
        "Named in Genesis 15:2: \"the heir of my house is [...] of Damascus.\"",
        "Governed all that Abraham had and made the ten-camel journey to Haran.",
        "Prayed the famous fleece-like prayer at the well outside Nahor."
      ],
      "hint": "Abraham’s chief steward from Damascus who journeyed to find a bride for Isaac.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Eliezer of Damascus",
        "Damascus Eliezer"
      ],
      "stage": 7,
      "stage_title": "The Difficult Riddles",
      "level_theme": "Obscure Legal Situations & Covenants",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l34-c1",
    "game_slug": "bible-riddles",
    "level": 34,
    "challenge_index": 1,
    "question_text": "WHO AM I?\nI was an obscure biblical king mentioned only in the opening verse of Proverbs 31. My godly mother taught me solemn royal instructions: warning me against wasting strength on women, warning that wine and strong drink cause rulers to pervert justice, and commanding me to open my mouth for the mute and defend the rights of the poor and needy. She concluded by teaching me the celebrated acrostic poem of the virtuous wife (Eshet Chayil). Who am I?",
    "options": [
      "King Lemuel",
      "King Solomon",
      "King Agur",
      "King Hezekiah"
    ],
    "correct_answer": "King Lemuel",
    "explanation": "King Lemuel is the monarch addressed in Proverbs 31 whose mother taught him royal justice, temperance, and the noble wife acrostic.",
    "reference": "Proverbs 31:1–9",
    "metadata": {
      "riddle_type": "Who Am I?",
      "is_typed": false,
      "clues": [
        "Proverbs 31:1: \"The words of King [...]. An oracle that his mother taught him.\"",
        "Identified by Jewish tradition as an affectionate symbolic pseudonym for Solomon.",
        "Ruled as king and recorded his mother’s wisdom."
      ],
      "hint": "King in Proverbs 31 whose mother gave him royal wisdom and described the virtuous wife.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Lemuel",
        "King Lemuel of Massa"
      ],
      "stage": 7,
      "stage_title": "The Difficult Riddles",
      "level_theme": "Mysterious Royal Encounters",
      "difficulty": "hard",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l34-c2",
    "game_slug": "bible-riddles",
    "level": 34,
    "challenge_index": 2,
    "question_text": "WHO AM I?\nI was the author of Proverbs chapter 30, son of Jakeh, whose name means \"gatherer.\" I opened my oracle by confessing my own human ignorance: \"Surely I am too stupid to be a man. I have not the understanding of a man.\" I posed famous theological questions (\"Who has ascended to heaven and come down? Who has gathered the wind in his fists? What is his name, and what is his son’s name?\"), prayed for neither poverty nor riches, and observed sets of four mysterious things in nature. Who am I?",
    "options": [
      "Agur",
      "Lemuel",
      "Asaph",
      "Heman"
    ],
    "correct_answer": "Agur",
    "explanation": "Agur son of Jakeh authored Proverbs 30, famed for his humble self-assessment and fourfold numerical proverbs.",
    "reference": "Proverbs 30:1–33",
    "metadata": {
      "riddle_type": "Who Am I?",
      "is_typed": false,
      "clues": [
        "Proverbs 30:1: \"The words of [...], son of Jakeh. The oracle.\"",
        "Addressed Ithiel and Ucal.",
        "Contemplated the way of an eagle in the sky, a serpent on a rock, a ship on the high seas, and the way of a man with a maiden."
      ],
      "hint": "Wise man who wrote Proverbs 30 asking \"Who has gathered the wind in his fists?\"",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Agur son of Jakeh"
      ],
      "stage": 7,
      "stage_title": "The Difficult Riddles",
      "level_theme": "Mysterious Royal Encounters",
      "difficulty": "master",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l34-c3",
    "game_slug": "bible-riddles",
    "level": 34,
    "challenge_index": 3,
    "question_text": "THE EVENT RIDDLE:\nDuring a sleepless night in the royal palace of Susa, King Ahasuerus ordered the book of memorable deeds, the chronicles, to be brought and read before him. The reader happened upon the record where Mordecai had exposed the assassination plot of Bigthana and Teresh. When the king asked what honor or dignity had been bestowed on Mordecai, the servants replied, \"Nothing has been done for him.\" At that exact moment, who walked into the outer court seeking the king’s permission to hang Mordecai on a seventy-five-foot gallows?",
    "options": [
      "Haman",
      "Memucan",
      "Hegai",
      "Harbona"
    ],
    "correct_answer": "Haman",
    "explanation": "Haman entered the court at the exact moment the king learned of Mordecai’s unrewarded loyalty, resulting in Haman having to honor Mordecai.",
    "reference": "Esther 6:1–11",
    "metadata": {
      "riddle_type": "The Event Riddle",
      "is_typed": false,
      "clues": [
        "The proud Agagite prime minister.",
        "Was asked: \"What should be done to the man whom the king delights to honor?\"",
        "Ended up parading his bitter enemy Mordecai through the city on the king’s horse."
      ],
      "hint": "Persian villain who entered the court just as the king read about Mordecai’s unrewarded service.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Haman the Agagite"
      ],
      "stage": 7,
      "stage_title": "The Difficult Riddles",
      "level_theme": "Mysterious Royal Encounters",
      "difficulty": "easy",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l34-c4",
    "game_slug": "bible-riddles",
    "level": 34,
    "challenge_index": 4,
    "question_text": "WHO AM I?\nI was the desperate, rejected first king of Israel on the eve of the catastrophic battle of Mount Gilboa. Terrified by the vast Philistine army and receiving no answer from Yahweh by dreams, Urim, or prophets, I disguised myself, put on other garments, and traveled by night with two men to a necromancer (medium) at En-dor, asking her to conjure up the spirit of the deceased prophet Samuel. When an old man wrapped in a robe arose, I bowed to the earth, only to hear Samuel announce my death the following day. Who am I?",
    "options": [
      "King Saul",
      "King Ahab",
      "King Ahaziah",
      "King Jeroboam"
    ],
    "correct_answer": "King Saul",
    "explanation": "King Saul consulted the medium of En-dor to conjure Samuel’s spirit when God refused to answer him, sealing his doom.",
    "reference": "1 Samuel 28:3–25; 1 Chronicles 10:13–14",
    "metadata": {
      "riddle_type": "Who Am I?",
      "is_typed": false,
      "clues": [
        "King Saul.",
        "Had previously expelled mediums and necromancers from the land.",
        "Samuel said: \"Tomorrow you and your sons shall be with me.\""
      ],
      "hint": "First king of Israel who disguised himself to consult the medium of En-dor.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Saul",
        "King Saul of Israel"
      ],
      "stage": 7,
      "stage_title": "The Difficult Riddles",
      "level_theme": "Mysterious Royal Encounters",
      "difficulty": "easy",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l34-c5",
    "game_slug": "bible-riddles",
    "level": 34,
    "challenge_index": 5,
    "question_text": "TYPE THE NAME — MINI-BOSS RIDDLE:\nDuring a decadent feast for a thousand of his lords in Babylon, this co-regent king drank wine from the sacred gold and silver vessels looted from the Jerusalem Temple while praising gods of gold, silver, bronze, iron, wood, and stone. Suddenly, the fingers of a human hand appeared and wrote four mysterious Aramaic words on the plaster of the palace wall opposite the lampstand: MENE, MENE, TEKEL, UPHARSIN. His face turned pale, his thoughts terrified him, his hip joints shook, and his knees knocked against each other. Who was this Babylonian king slain that very night when Darius the Mede took the city?",
    "options": [
      "Belshazzar",
      "Nabonidus",
      "Nebuchadnezzar",
      "Evil-merodach"
    ],
    "correct_answer": "Belshazzar",
    "explanation": "Belshazzar held the sacrilegious banquet in Babylon where the supernatural hand wrote on the wall, and was killed that same night.",
    "reference": "Daniel 5:1–30",
    "metadata": {
      "riddle_type": "Type the Name",
      "is_typed": true,
      "clues": [
        "Grandson/successor of Nebuchadnezzar.",
        "Daniel interpreted the writing: \"You have been weighed in the balances and found wanting.\"",
        "Slain on the night of Babylon’s fall in 539 BC."
      ],
      "hint": "Babylonian king whose knees knocked together at the supernatural writing on the wall.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Baltasar",
        "King Belshazzar"
      ],
      "stage": 7,
      "stage_title": "The Difficult Riddles",
      "level_theme": "Mysterious Royal Encounters",
      "difficulty": "medium",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l35-c1",
    "game_slug": "bible-riddles",
    "level": 35,
    "challenge_index": 1,
    "question_text": "THE EVENT RIDDLE:\nWhile the Babylonian army was actively besieging Jerusalem and the prophet Jeremiah was locked in the court of the guard, his cousin Hanamel son of Shallum came and said: \"Buy my field at Anathoth in the land of Benjamin, for the right of redemption is yours.\" Jeremiah weighed out seventeen shekels of silver, signed and sealed the deed of purchase before witnesses, and placed both the sealed and open deeds into an earthenware jar to last a long time. What was the profound divine message of this seemingly foolish real estate investment during a siege?",
    "options": [
      "The Purchase of the Field of Anathoth",
      "The Purchase of the Potter’s Field",
      "The Vow of the Rechabites",
      "The Cleansing of the Temple"
    ],
    "correct_answer": "The Purchase of the Field of Anathoth",
    "explanation": "Jeremiah purchased a field at Anathoth while imprisoned during the siege as a prophetic guarantee that Israel would return to buy fields again.",
    "reference": "Jeremiah 32:6–15, 42–44",
    "metadata": {
      "riddle_type": "The Event Riddle",
      "is_typed": false,
      "clues": [
        "Jeremiah 32:6–15.",
        "The Lord declared: \"Houses and fields and vineyards shall again be bought in this land.\"",
        "A prophetic pledge that exile would not be permanent and Israel would return."
      ],
      "hint": "Jeremiah bought a family field in Anathoth during the siege to prove Israel would return.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Buying the Field at Anathoth",
        "Jeremiah’s Field",
        "Field of Anathoth",
        "Purchase of Anathoth"
      ],
      "stage": 7,
      "stage_title": "The Difficult Riddles",
      "level_theme": "Forensic Prophetic Dramas",
      "difficulty": "hard",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l35-c2",
    "game_slug": "bible-riddles",
    "level": 35,
    "challenge_index": 2,
    "question_text": "WHO AM I?\nI was an 8th-century BC prophet of Jerusalem commanded by Yahweh to enact an astonishing, humiliating prophetic street pageant. For three full years, I walked through the streets of Jerusalem \"naked and barefoot\" as a living sign and portent against Egypt and Cush, symbolizing that the king of Assyria would lead away the captives of Egypt and the exiles of Cush, both young and old, naked and barefoot, with buttocks uncovered, to the shame of Egypt. Who am I?",
    "options": [
      "Isaiah",
      "Jeremiah",
      "Ezekiel",
      "Micah"
    ],
    "correct_answer": "Isaiah",
    "explanation": "Isaiah walked naked and barefoot for three years as a prophetic sign of the coming humiliation and captivity of Egypt and Cush by Assyria.",
    "reference": "Isaiah 20:1–6",
    "metadata": {
      "riddle_type": "Who Am I?",
      "is_typed": false,
      "clues": [
        "Son of Amoz.",
        "Also prophesied the Virgin Birth (7:14) and the Suffering Servant (53:1–12).",
        "The dramatic pageant is recorded in Isaiah 20:1–6."
      ],
      "hint": "Major prophet who walked naked and barefoot for three years as a sign against Egypt.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Prophet Isaiah",
        "Esaias"
      ],
      "stage": 7,
      "stage_title": "The Difficult Riddles",
      "level_theme": "Forensic Prophetic Dramas",
      "difficulty": "hard",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l35-c3",
    "game_slug": "bible-riddles",
    "level": 35,
    "challenge_index": 3,
    "question_text": "WHAT AM I?\nIn Zechariah 11, the prophet acts as a shepherd of the flock doomed to slaughter and takes two shepherd’s staffs to pasture them. He names one staff \"Favor\" (or Beauty) and the other staff \"Union\" (or Binds). Later, when the prophet detests the flock and breaks the first staff, it annuls the covenant with all peoples; when he breaks the second staff, it shatters the brotherly covenant between Judah and Israel. What were the names of these two prophetic staffs?",
    "options": [
      "Favor and Union",
      "Mercy and Truth",
      "Justice and Peace",
      "Rod and Staff"
    ],
    "correct_answer": "Favor and Union",
    "explanation": "Zechariah named his two shepherd’s staffs Favor (Beauty) and Union (Bands), breaking both to symbolize broken divine covenants and fraternal unity.",
    "reference": "Zechariah 11:7–14",
    "metadata": {
      "riddle_type": "What Am I?",
      "is_typed": false,
      "clues": [
        "Zechariah 11:7, 10, 14.",
        "Staff 1: Favor (Beauty).",
        "Staff 2: Union (Bands / Binds)."
      ],
      "hint": "Two symbolic shepherd’s staffs in Zechariah 11 broken to depict broken covenants.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Beauty and Bands",
        "Favor & Union",
        "Beauty and Union",
        "Grace and Unity"
      ],
      "stage": 7,
      "stage_title": "The Difficult Riddles",
      "level_theme": "Forensic Prophetic Dramas",
      "difficulty": "master",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l35-c4",
    "game_slug": "bible-riddles",
    "level": 35,
    "challenge_index": 4,
    "question_text": "THE EVENT RIDDLE:\nIn Ezekiel 5, the priest-prophet is commanded to take a sharp sword and use it as a barber’s razor on his own head and beard. He must weigh the shorn hair in balances and divide it into three equal portions: burn one third in the center of the city, strike one third with the sword all around the city, and scatter one third to the wind, saving only a small fraction tucked into the hem of his robe. What did this dramatic hair-shaving ritual dramatize?",
    "options": [
      "The Threefold Fate of Jerusalem’s Citizens",
      "The Consecration of the Aaronic Priesthood",
      "The Nazirite Cleansing Ceremony",
      "The Cleansing of the Leper"
    ],
    "correct_answer": "The Threefold Fate of Jerusalem’s Citizens",
    "explanation": "Ezekiel’s divided beard hair symbolized the threefold judgment on Jerusalem: pestilence/famine, the sword, and exile among the nations.",
    "reference": "Ezekiel 5:1–12",
    "metadata": {
      "riddle_type": "The Event Riddle",
      "is_typed": false,
      "clues": [
        "One third dying of pestilence and famine in the siege of Jerusalem.",
        "One third falling by the sword around the city.",
        "One third scattered into exile among the nations."
      ],
      "hint": "Ezekiel’s razor prophecy dividing his beard into thirds to depict Jerusalem’s destruction.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Fate of Jerusalem",
        "Threefold Fate of Jerusalem",
        "Destruction of Jerusalem",
        "Ezekiel’s Hair Prophecy"
      ],
      "stage": 7,
      "stage_title": "The Difficult Riddles",
      "level_theme": "Forensic Prophetic Dramas",
      "difficulty": "hard",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l35-c5",
    "game_slug": "bible-riddles",
    "level": 35,
    "challenge_index": 5,
    "question_text": "TYPE THE BIBLE BOOK — MINI-BOSS RIDDLE:\nIn chapter 18 of this prophetic book, the prophet is directed to go down to the potter’s house. There, he watches the artisan working at his wheel. When the vessel he was making of clay was spoiled in the potter’s hand, he reworked it into another vessel, as seemed good to the potter to do. God then says: \"O house of Israel, can I not do with you as this potter has done? Behold, like the clay in the potter’s hand, so are you in my hand.\" In which Old Testament prophetic book is this famous lesson recorded?",
    "options": [
      "Jeremiah",
      "Isaiah",
      "Ezekiel",
      "Zechariah"
    ],
    "correct_answer": "Jeremiah",
    "explanation": "Jeremiah watched the potter rework spoiled clay on the wheel, illustrating God’s sovereign ability to reshape repenting nations.",
    "reference": "Jeremiah 18:1–10",
    "metadata": {
      "riddle_type": "Type the Book",
      "is_typed": true,
      "clues": [
        "Followed in chapter 19 by the breaking of an earthenware flask in Topheth.",
        "Author was known as the Weeping Prophet.",
        "Cited by Paul in Romans 9:20–21 concerning divine sovereignty."
      ],
      "hint": "Prophetic book containing the visit to the potter’s house in chapter 18.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Book of Jeremiah",
        "Jer"
      ],
      "stage": 7,
      "stage_title": "The Difficult Riddles",
      "level_theme": "Forensic Prophetic Dramas",
      "difficulty": "medium",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l36-c1",
    "game_slug": "bible-riddles",
    "level": 36,
    "challenge_index": 1,
    "question_text": "WHO AM I?\nDo not confuse me with the writing prophet of the same name or the father of John the Baptist. I was the son of Jehoiada the high priest during the reign of King Joash of Judah. When the Spirit of God clothed me, I stood above the people and rebuked the nation for forsaking Yahweh. By order of the king—who forgot the steadfast love my father Jehoiada had shown him—I was stoned to death with stones right in the sacred court of the house of the Lord, dying with the cry: \"May the Lord see and avenge!\" Jesus explicitly cited my martyrdom in Matthew 23:35. Who am I?",
    "options": [
      "Zechariah son of Jehoiada",
      "Zechariah the Prophet",
      "Zechariah father of John",
      "Uriah the Prophet"
    ],
    "correct_answer": "Zechariah son of Jehoiada",
    "explanation": "Zechariah son of Jehoiada was stoned in the temple court by ungrateful King Joash, remembered by Jesus as the climactic Old Testament martyr.",
    "reference": "2 Chronicles 24:20–22; Matthew 23:35; Luke 11:51",
    "metadata": {
      "riddle_type": "Who Am I?",
      "is_typed": false,
      "clues": [
        "Son of Jehoiada the high priest.",
        "Stoned in the temple court by King Joash.",
        "Jesus linked Abel (first martyr) with me (last martyr of the Hebrew canon)."
      ],
      "hint": "Priest stoned in the temple court by King Joash; cited by Jesus in Matthew 23.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Zechariah",
        "Zechariah ben Jehoiada",
        "Zacharias son of Barachias"
      ],
      "stage": 8,
      "stage_title": "The Scripture Trap",
      "level_theme": "Double Characters & Namesakes",
      "difficulty": "hard",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l36-c2",
    "game_slug": "bible-riddles",
    "level": 36,
    "challenge_index": 2,
    "question_text": "WHO AM I?\nDo not confuse me with the Apostle Philip from Bethsaida. I was one of the Seven chosen to serve tables in Jerusalem who pioneered the gospel in Samaria with astonishing miracles, casting out unclean spirits and baptizing the magician Simon Magus. Led by an angel to the desert road of Gaza, I joined an Ethiopian official’s chariot, preached Jesus from Isaiah 53, and baptized him in water before being snatched away by the Spirit to Azotus. Who am I?",
    "options": [
      "Philip the Evangelist",
      "Philip the Apostle",
      "Stephen",
      "Barnabas"
    ],
    "correct_answer": "Philip the Evangelist",
    "explanation": "Philip the Evangelist (one of the Seven) evangelized Samaria and the Ethiopian eunuch, distinct from Philip the Apostle.",
    "reference": "Acts 6:5; 8:4–40; 21:8–9",
    "metadata": {
      "riddle_type": "Who Am I?",
      "is_typed": false,
      "clues": [
        "Known specifically as Philip the Evangelist.",
        "Hosted Paul in Caesarea years later with four unmarried daughters who prophesied (Acts 21:8–9).",
        "One of the seven deacons of Acts 6."
      ],
      "hint": "Deacon and evangelist who preached in Samaria and baptized the Ethiopian eunuch.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Philip the Deacon",
        "Philip",
        "Evangelist Philip"
      ],
      "stage": 8,
      "stage_title": "The Scripture Trap",
      "level_theme": "Double Characters & Namesakes",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l36-c3",
    "game_slug": "bible-riddles",
    "level": 36,
    "challenge_index": 3,
    "question_text": "WHO AM I?\nDo not confuse me with the James who authored the New Testament Epistle or James the brother of Jesus. I was a Galilean fisherman, son of Zebedee and brother of John, whom Jesus nicknamed Boanerges (\"Sons of Thunder\"). I was part of Jesus’ intimate inner circle on the Mount of Transfiguration, at the raising of Jairus’ daughter, and in Gethsemane. Under King Herod Agrippa I in Acts 12, I became the very first of the Twelve Apostles to be martyred, executed by the sword in Jerusalem. Who am I?",
    "options": [
      "James son of Zebedee",
      "James the Lord’s Brother",
      "James son of Alphaeus",
      "John the Apostle"
    ],
    "correct_answer": "James son of Zebedee",
    "explanation": "James son of Zebedee (brother of John) was the first apostle martyred, beheaded by Herod Agrippa I in Acts 12.",
    "reference": "Matthew 4:21; Mark 3:17; Acts 12:1–2",
    "metadata": {
      "riddle_type": "Who Am I?",
      "is_typed": false,
      "clues": [
        "Son of Zebedee, brother of the Apostle John.",
        "Mother asked that my brother and I sit at Jesus’ right and left hands in His kingdom.",
        "Beheaded by Herod Agrippa I around 44 AD (Acts 12:2)."
      ],
      "hint": "Son of Zebedee and brother of John; the first apostle martyred by the sword.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "James the Apostle",
        "James the Son of Zebedee",
        "James the Greater"
      ],
      "stage": 8,
      "stage_title": "The Scripture Trap",
      "level_theme": "Double Characters & Namesakes",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l36-c4",
    "game_slug": "bible-riddles",
    "level": 36,
    "challenge_index": 4,
    "question_text": "WHO AM I?\nDo not confuse me with Simon Peter or Simon the Pharisee. I was one of the Twelve Apostles whose surname was the Zealot (or the Cananaean in Aramaic), reflecting my passionate former affiliation with the fiercely anti-Roman Jewish nationalist resistance movement. Remarkably, Jesus called me into the apostolic band to live and minister alongside Matthew, a former tax collector who had collected taxes for the Roman Empire! Who am I?",
    "options": [
      "Simon the Zealot",
      "Simon Peter",
      "Simon of Cyrene",
      "Simon the Magician"
    ],
    "correct_answer": "Simon the Zealot",
    "explanation": "Simon the Zealot was the apostle from the Jewish patriotic faction who served alongside former Roman tax collector Matthew.",
    "reference": "Matthew 10:4; Mark 3:18; Luke 6:15; Acts 1:13",
    "metadata": {
      "riddle_type": "Who Am I?",
      "is_typed": false,
      "clues": [
        "Listed in Luke 6:15 and Acts 1:13 as \"Simon who was called the Zealot.\"",
        "One of the Twelve Apostles.",
        "Aramaic nickname \"Cananaean\" derives from qan’ana (zealous)."
      ],
      "hint": "Apostle nicknamed the Zealot (or Cananaean) who served alongside Matthew.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Simon the Cananaean",
        "Simon the Canaanite",
        "Simon the Zealot/Cananaean"
      ],
      "stage": 8,
      "stage_title": "The Scripture Trap",
      "level_theme": "Double Characters & Namesakes",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l36-c5",
    "game_slug": "bible-riddles",
    "level": 36,
    "challenge_index": 5,
    "question_text": "TYPE THE NAME — MINI-BOSS RIDDLE:\nDo not confuse me with King Saul of Israel who fell on his sword on Mount Gilboa. I was born in Tarsus of Cilicia, circumcised on the eighth day, of the people of Israel, of the tribe of Benjamin, a Hebrew of Hebrews; as to the law, a Pharisee; as to zeal, a persecutor of the church. I guarded the coats of those who stoned Stephen and breathed out threats and murder against the disciples of the Lord until a blinding light struck me down on the road to Damascus. What was my original Hebrew name before I was known universally as the Apostle Paul?",
    "options": [
      "Saul",
      "Saul of Tarsus",
      "Shaul",
      "Paul"
    ],
    "correct_answer": "Saul of Tarsus",
    "explanation": "Saul of Tarsus, named after the Benjamite king Saul, was the fierce Pharisaic persecutor who became the Apostle Paul.",
    "reference": "Acts 7:58; 8:1–3; 9:1–19; Philippians 3:4–6",
    "metadata": {
      "riddle_type": "Type the Name",
      "is_typed": true,
      "clues": [
        "Shared the same tribe (Benjamin) as Israel’s first king Saul.",
        "Studied at the feet of Gamaliel in Jerusalem.",
        "Jesus addressed me twice by this name: \"Saul, Saul, why are you persecuting me?\""
      ],
      "hint": "Original Hebrew name of the Apostle Paul from the tribe of Benjamin.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Saul",
        "Shaul",
        "Saul of Tarsus (Paul)"
      ],
      "stage": 8,
      "stage_title": "The Scripture Trap",
      "level_theme": "Double Characters & Namesakes",
      "difficulty": "easy",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l37-c1",
    "game_slug": "bible-riddles",
    "level": 37,
    "challenge_index": 1,
    "question_text": "THE IMPOSSIBLE DESCRIPTION:\nBe careful not to confuse our two kingdoms: During the divided monarchy, two contemporary kings sharing the exact same name ruled at the same time—one over the northern kingdom of Israel (son of Ahab and Jezebel) and one over the southern kingdom of Judah (son of Jehoshaphat who married Ahab’s daughter Athaliah). What is this shared royal name?",
    "options": [
      "Jehoram / Joram",
      "Ahaziah",
      "Joash",
      "Jehoahaz"
    ],
    "correct_answer": "Jehoram / Joram",
    "explanation": "Jehoram (Joram) was the identical name shared simultaneously by the king of Israel (Ahab’s son) and the king of Judah (Jehoshaphat’s son).",
    "reference": "2 Kings 1:17; 3:1; 8:16–25; 2 Chronicles 21:1–20",
    "metadata": {
      "riddle_type": "The Impossible Description",
      "is_typed": false,
      "clues": [
        "Both kings were named Jehoram (or Joram).",
        "Jehoram of Israel was struck down by Jehu’s arrow at the vineyard of Naboth.",
        "Jehoram of Judah died of an incurable disease of the bowels and departed with no one’s regret (2 Chronicles 21:18–20)."
      ],
      "hint": "Shared name of two contemporary kings ruling over Judah and Israel simultaneously.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Jehoram",
        "Joram",
        "Jehoram or Joram"
      ],
      "stage": 8,
      "stage_title": "The Scripture Trap",
      "level_theme": "Misleading Kings & Usurpers",
      "difficulty": "hard",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l37-c2",
    "game_slug": "bible-riddles",
    "level": 37,
    "challenge_index": 2,
    "question_text": "WHO AM I?\nI was a chariot commander of King Elah of Israel who conspired against my royal master. While the king was getting drunk in the house of Arza in Tirzah, I entered, struck him down, and assassinated him, exterminating every single male of the house of Baasha. However, my reign was the shortest in the history of northern Israel—lasting only seven days! When the army made Omri king and besieged Tirzah, I retreated into the citadel of the royal palace, set the palace on fire over me, and burned to death. Who am I?",
    "options": [
      "Zimri",
      "Shallum",
      "Tibni",
      "Baasha"
    ],
    "correct_answer": "Zimri",
    "explanation": "Zimri assassinated King Elah and reigned only seven days in Tirzah before committing suicide by burning the royal palace over himself.",
    "reference": "1 Kings 16:9–20; 2 Kings 9:31",
    "metadata": {
      "riddle_type": "Who Am I?",
      "is_typed": false,
      "clues": [
        "Reigned exactly seven days in Tirzah.",
        "Jezebel later taunted Jehu: \"Is it peace, you Zimri, murderer of your master?\" (2 Kings 9:31).",
        "Died in his own palace inferno."
      ],
      "hint": "King of Israel who reigned only seven days and burned the palace over himself.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "King Zimri"
      ],
      "stage": 8,
      "stage_title": "The Scripture Trap",
      "level_theme": "Misleading Kings & Usurpers",
      "difficulty": "hard",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l37-c3",
    "game_slug": "bible-riddles",
    "level": 37,
    "challenge_index": 3,
    "question_text": "WHO AM I?\nI was a usurper, son of Jabesh, who conspired against King Zechariah (the last king of the dynasty of Jehu) and struck him down in public before the people in Samaria, bringing an end to Jehu’s four-generation dynasty. My reign over northern Israel lasted for exactly one full month. Menahem son of Gadi marched from Tirzah to Samaria, assassinated me, and seized the throne. Who am I?",
    "options": [
      "Shallum",
      "Zimri",
      "Pekahiah",
      "Pekah"
    ],
    "correct_answer": "Shallum",
    "explanation": "Shallum son of Jabesh assassinated Zechariah of the house of Jehu and reigned only one full month before Menahem killed him.",
    "reference": "2 Kings 15:10–15",
    "metadata": {
      "riddle_type": "Who Am I?",
      "is_typed": false,
      "clues": [
        "Reigned one month in Samaria in 752 BC.",
        "Son of Jabesh.",
        "Recorded in 2 Kings 15:10–15."
      ],
      "hint": "King of northern Israel who reigned for exactly one month.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Shallum son of Jabesh",
        "Sellum"
      ],
      "stage": 8,
      "stage_title": "The Scripture Trap",
      "level_theme": "Misleading Kings & Usurpers",
      "difficulty": "master",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l37-c4",
    "game_slug": "bible-riddles",
    "level": 37,
    "challenge_index": 4,
    "question_text": "THE THREE-CLUE RIDDLE:\nClue 1: I was the last reigning king of the northern ten-tribe kingdom of Israel (Samaria).\nClue 2: I conspired against Pekah son of Remaliah and assassinated him, reigning nine years.\nClue 3: When I stopped paying annual tribute to Shalmaneser king of Assyria and sent envoys to So, king of Egypt, the Assyrian king besieged Samaria for three years, captured the city, put me in prison bound in chains, and carried Israel into permanent exile to Assyria. Who am I?",
    "options": [
      "Hoshea",
      "Pekah",
      "Menahem",
      "Ahaz"
    ],
    "correct_answer": "Hoshea",
    "explanation": "Hoshea was the nineteenth and final king of northern Israel whose alliance with Egypt led to the Assyrian siege and exile of the ten tribes.",
    "reference": "2 Kings 15:30; 17:1–6",
    "metadata": {
      "riddle_type": "The Three-Clue Riddle",
      "is_typed": false,
      "clues": [
        "Son of Elah.",
        "Last monarch of the northern kingdom before its destruction in 722 BC.",
        "The book of 2 Kings 17 details his downfall."
      ],
      "hint": "Last king of the northern kingdom of Israel before the Assyrian exile.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Hoshea son of Elah",
        "Osee"
      ],
      "stage": 8,
      "stage_title": "The Scripture Trap",
      "level_theme": "Misleading Kings & Usurpers",
      "difficulty": "hard",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l37-c5",
    "game_slug": "bible-riddles",
    "level": 37,
    "challenge_index": 5,
    "question_text": "TYPE THE NAME — MINI-BOSS RIDDLE:\nI was an ambitious, third son of King David, born to Haggith in Hebron. After Absalom’s death, as David grew decrepit in his old age, I exalted myself, saying, \"I will be king.\" I prepared chariots, horsemen, and fifty men to run before me, winning over Joab the army commander and Abiathar the high priest. I threw a royal coronation feast at the Serpent’s Stone (En-rogel). However, Nathan the prophet and Bathsheba intervened before David, who ordered Solomon to be anointed on the royal mule at Gihon. Terrified by the shouts, my guests fled, and I ran to the altar in the sanctuary to cling to its horns for mercy. Who am I?",
    "options": [
      "Adonijah",
      "Absalom",
      "Amnon",
      "Shephatiah"
    ],
    "correct_answer": "Adonijah",
    "explanation": "Adonijah attempted to usurp David’s throne before Solomon’s coronation, but his coup collapsed and he clung to the altar horns.",
    "reference": "1 Kings 1:5–53; 2:13–25",
    "metadata": {
      "riddle_type": "Type the Name",
      "is_typed": true,
      "clues": [
        "David’s handsome son born after Absalom.",
        "Clung to the horns of the altar to escape execution.",
        "Later executed by Benaiah when he requested Abishag the Shunammite as wife."
      ],
      "hint": "David’s handsome son who attempted a royal coup at En-rogel before Solomon.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Adonijah son of Haggith",
        "Adonias"
      ],
      "stage": 8,
      "stage_title": "The Scripture Trap",
      "level_theme": "Misleading Kings & Usurpers",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l38-c1",
    "game_slug": "bible-riddles",
    "level": 38,
    "challenge_index": 1,
    "question_text": "THE EVENT RIDDLE:\nWhen King David attempted to bring the Ark of the Covenant from Kiriath-jearim to Jerusalem on a new wooden ox cart, the oxen stumbled at the threshing floor of Nacon (Chidon). A man named [...] put out his hand to steady the Ark of God, and the anger of the Lord was kindled against him, and God struck him down dead on the spot for his irreverence beside the Ark. David was angry and terrified, naming the place Perez-uzzah. Who was the man struck dead for touching the Ark?",
    "options": [
      "Uzzah",
      "Ahio",
      "Obed-edom",
      "Eleazar"
    ],
    "correct_answer": "Uzzah",
    "explanation": "Uzzah was struck dead for touching the Ark of God when the oxen stumbled, demonstrating God’s strict holiness regarding sacred items.",
    "reference": "2 Samuel 6:3–11; 1 Chronicles 13:7–14; Numbers 4:15",
    "metadata": {
      "riddle_type": "The Event Riddle",
      "is_typed": false,
      "clues": [
        "Son of Abinadab, brother of Ahio.",
        "Violated the law that only Kohathites could carry the Ark using golden poles, and that even they must not touch holy things lest they die (Numbers 4:15).",
        "The Ark was detoured to the house of Obed-edom the Gittite for three months."
      ],
      "hint": "Man struck dead by God for touching the Ark to steady it when the oxen stumbled.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Uzza"
      ],
      "stage": 8,
      "stage_title": "The Scripture Trap",
      "level_theme": "Deceptive Theological & Narrative Traps",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l38-c2",
    "game_slug": "bible-riddles",
    "level": 38,
    "challenge_index": 2,
    "question_text": "TYPE TWO ANSWERS:\nWe were the two oldest sons of Aaron the high priest who were consecrated as priests in the wilderness sanctuary. In Leviticus 10, right after God’s glory fell on the altar, we each took our censers, put fire in them, laid incense on them, and offered \"unauthorized fire\" (strange fire) before the Lord, which God had not commanded. Fire came out from before the Lord and instantly consumed both of us, and we died before the Lord. What are our two biblical names?",
    "options": [
      "Nadab and Abihu",
      "Hophni and Phinehas",
      "Eleazar and Ithamar",
      "Korah and Dathan"
    ],
    "correct_answer": "Nadab and Abihu",
    "explanation": "Nadab and Abihu were Aaron’s sons consumed by fire from the Lord for offering unauthorized (strange) fire on the altar.",
    "reference": "Leviticus 10:1–7; Numbers 3:4; 26:61",
    "metadata": {
      "riddle_type": "Type Two Answers",
      "is_typed": true,
      "clues": [
        "Oldest sons of Aaron; brothers of Eleazar and Ithamar.",
        "Moses said to Aaron: \"This is what the Lord has said: ‘Among those who are near me I will be sanctified.’\" And Aaron held his peace.",
        "Carried outside the camp in their tunics by Mishael and Elzaphan."
      ],
      "hint": "Two sons of Aaron struck down by fire for offering strange fire in the sanctuary.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Nadab & Abihu",
        "Abihu and Nadab",
        "Nadab, Abihu"
      ],
      "stage": 8,
      "stage_title": "The Scripture Trap",
      "level_theme": "Deceptive Theological & Narrative Traps",
      "difficulty": "medium",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l38-c3",
    "game_slug": "bible-riddles",
    "level": 38,
    "challenge_index": 3,
    "question_text": "THE EVENT RIDDLE:\nIn Acts 5, a husband and wife in the early church sold a piece of property and brought a portion of the proceeds to the Apostles’ feet, while secretly keeping back part of the price with full mutual conspiracy, pretending to give all. Peter confronted the husband: \"Why has Satan filled your heart to lie to the Holy Spirit?\" Hearing these words, the man fell down dead. Three hours later, his unaware wife repeated the lie and dropped dead instantly, being buried beside her husband. What are their two names?",
    "options": [
      "Ananias and Sapphira",
      "Aquila and Priscilla",
      "Zacharias and Elizabeth",
      "Simon and Rhoda"
    ],
    "correct_answer": "Ananias and Sapphira",
    "explanation": "Ananias and Sapphira fell down dead for lying to the Holy Spirit about their financial offering in the early Jerusalem church.",
    "reference": "Acts 5:1–11",
    "metadata": {
      "riddle_type": "The Event Riddle",
      "is_typed": false,
      "clues": [
        "Peter told the wife: \"How is it that you have agreed together to test the Spirit of the Lord?\"",
        "Young men carried them out and buried them.",
        "Great fear fell upon the entire church and all who heard."
      ],
      "hint": "Husband and wife struck dead in Acts 5 for lying to the Holy Spirit about land money.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Ananias & Sapphira",
        "Sapphira and Ananias",
        "Ananias, Sapphira"
      ],
      "stage": 8,
      "stage_title": "The Scripture Trap",
      "level_theme": "Deceptive Theological & Narrative Traps",
      "difficulty": "easy",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l38-c4",
    "game_slug": "bible-riddles",
    "level": 38,
    "challenge_index": 4,
    "question_text": "WHO AM I?\nI was an unnamed man of God from Judah who came to Bethel by the word of the Lord, cried out against Jeroboam’s golden calf altar, and withered the king’s outstretched arm. God strictly commanded me: \"You shall neither eat bread nor drink water nor return by the way that you came.\" However, an old prophet of Bethel pursued me on a donkey and lied, saying an angel had instructed him to bring me home to eat. I believed his lie and ate bread in his house; on my journey home, a lion met me on the road and killed me, leaving my body lying in the road beside the standing donkey and lion. Who am I (by my biblical title)?",
    "options": [
      "The Man of God from Judah",
      "Ahijah the Shilonite",
      "Micaiah son of Imlah",
      "Jehu son of Hanani"
    ],
    "correct_answer": "The Man of God from Judah",
    "explanation": "The unnamed man of God from Judah withered Jeroboam’s altar, but was deceived into eating bread by an old prophet and killed by a lion.",
    "reference": "1 Kings 13:1–32",
    "metadata": {
      "riddle_type": "Who Am I?",
      "is_typed": false,
      "clues": [
        "The Man of God from Judah (1 Kings 13).",
        "The lion did not eat his body nor maul the donkey.",
        "The old prophet of Bethel wept over his grave: \"Alas, my brother!\""
      ],
      "hint": "Unnamed prophet who withered Jeroboam’s altar and was later killed by a lion for eating bread.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Man of God from Judah",
        "The Prophet from Judah",
        "Unnamed Prophet of Judah"
      ],
      "stage": 7,
      "stage_title": "The Scripture Trap",
      "level_theme": "Deceptive Theological & Narrative Traps",
      "difficulty": "hard",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l38-c5",
    "game_slug": "bible-riddles",
    "level": 38,
    "challenge_index": 5,
    "question_text": "TYPE THE NAME — MINI-BOSS RIDDLE:\nWhen the prophet Elisha was going up from Jericho to Bethel, a gang of insolent young youths came out of the city and jeered at him with contempt, shouting repeatedly: \"Go up, you baldhead! Go up, you baldhead!\" (mocking both his physical baldness and the ascension of his master Elijah). Elisha turned around, looked at them, and cursed them in the name of the Lord. Immediately, two female predators came out of the woods and mauled forty-two of the mocking youths. What kind of wild animals were these two predators?",
    "options": [
      "Two She-Bears",
      "Two Lions",
      "Two Wolves",
      "Two Leopards"
    ],
    "correct_answer": "Two She-Bears",
    "explanation": "Two female bears came out of the woods and mauled 42 youths who mocked the prophet Elisha near Bethel.",
    "reference": "2 Kings 2:23–24",
    "metadata": {
      "riddle_type": "Type the Name",
      "is_typed": true,
      "clues": [
        "Two female bears (she-bears).",
        "Emerged from the forest near Bethel.",
        "Mauled forty-two of the disrespectful youths."
      ],
      "hint": "Two female forest predators that mauled forty-two youths who mocked Elisha.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "She-Bears",
        "Bears",
        "Two Bears",
        "Female Bears"
      ],
      "stage": 8,
      "stage_title": "The Scripture Trap",
      "level_theme": "Deceptive Theological & Narrative Traps",
      "difficulty": "medium",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l39-c1",
    "game_slug": "bible-riddles",
    "level": 39,
    "challenge_index": 1,
    "question_text": "WHAT AM I?\nGod challenged Job in chapter 40 to behold me, an enormous land creature \"which I made as I made you.\" I eat grass like an ox; my strength is in my loins and my power in the muscles of my belly; I move my tail stiff like a cedar; my bones are tubes of bronze, my limbs like bars of iron. I lie under the lotus plants in the covert of reeds, and even if a river becomes turbulent and rises to my mouth, I am confident. What creature am I?",
    "options": [
      "Behemoth",
      "Leviathan",
      "The Great Sea Monster",
      "Unicorn / Wild Ox"
    ],
    "correct_answer": "Behemoth",
    "explanation": "Behemoth is described in Job 40 as a gigantic grass-eating beast with bones like bronze tubes and a tail like a cedar.",
    "reference": "Job 40:15–24",
    "metadata": {
      "riddle_type": "What Am I?",
      "is_typed": false,
      "clues": [
        "Name in Job 40:15 is Behemoth (בְּהֵמוֹת).",
        "Described as the first of the works of God (chief of the creations of God).",
        "Traditional interpreters identify it with the hippopotamus or an extinct giant sauropod."
      ],
      "hint": "Colossal grass-eating creature in Job 40 with a tail like a cedar and bones like bronze tubes.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "The Behemoth"
      ],
      "stage": 8,
      "stage_title": "The Scripture Trap",
      "level_theme": "Obscure Biblical Animals & Creatures",
      "difficulty": "hard",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l39-c2",
    "game_slug": "bible-riddles",
    "level": 39,
    "challenge_index": 2,
    "question_text": "WHAT AM I?\nGod describes me in Job 41 as a terrifying marine predator of the deep whom no man can pull out with a fishhook or press down his tongue with a cord. My back is covered with rows of impenetrable shields shut up tightly as with a seal; my sneezings flash forth light, and out of my mouth go burning torches and sparks of fire. When I raise myself up, the mighty are afraid; iron is regarded by me as straw, and bronze as rotten wood. What formidable creature am I?",
    "options": [
      "Leviathan",
      "Behemoth",
      "Rahab the Dragon",
      "The Great Fish of Jonah"
    ],
    "correct_answer": "Leviathan",
    "explanation": "Leviathan is the terrifying sea monster described in Job 41 breathing fire and coated in impenetrable interlocking scales.",
    "reference": "Job 41:1–34; Psalm 104:26; Isaiah 27:1",
    "metadata": {
      "riddle_type": "What Am I?",
      "is_typed": false,
      "clues": [
        "Leviathan (Job 41; Psalm 74:14; 104:26; Isaiah 27:1).",
        "Makes the deep boil like a pot and leaves a shining white wake behind.",
        "King over all the sons of pride."
      ],
      "hint": "Fierce armored sea creature of Job 41 whose breath kindles coals.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "The Leviathan"
      ],
      "stage": 8,
      "stage_title": "The Scripture Trap",
      "level_theme": "Obscure Biblical Animals & Creatures",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l39-c3",
    "game_slug": "bible-riddles",
    "level": 39,
    "challenge_index": 3,
    "question_text": "WHAT AM I?\nOn the annual Day of Atonement (Yom Kippur) in Leviticus 16, Aaron took two male goats for a sin offering and cast lots over them—one lot for Yahweh, and the other lot for Azazel. The first goat was slaughtered and its blood sprinkled on the mercy seat. Over me, the second living goat, Aaron laid both hands, confessed all the iniquities, transgressions, and sins of the people of Israel, and sent me away into the solitary wilderness led by a designated man, bearing all their iniquities away to a remote area. What am I called in English translations?",
    "options": [
      "The Scapegoat",
      "The Passover Lamb",
      "The Red Heifer",
      "The Ram of Consecration"
    ],
    "correct_answer": "The Scapegoat",
    "explanation": "The Scapegoat (Azazel) received the confessed sins of Israel on the Day of Atonement and carried them away into the wilderness.",
    "reference": "Leviticus 16:7–10, 20–22",
    "metadata": {
      "riddle_type": "What Am I?",
      "is_typed": false,
      "clues": [
        "The Scapegoat (or Azazel goat).",
        "Symbolized the total removal and banishment of sin from the camp.",
        "Led into an uninhabited wilderness wasteland."
      ],
      "hint": "Day of Atonement goat led into the desert bearing all of Israel’s confessed sins.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Scapegoat",
        "The Goat for Azazel",
        "Azazel Goat",
        "Azazel"
      ],
      "stage": 8,
      "stage_title": "The Scripture Trap",
      "level_theme": "Obscure Biblical Animals & Creatures",
      "difficulty": "easy",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l39-c4",
    "game_slug": "bible-riddles",
    "level": 39,
    "challenge_index": 4,
    "question_text": "THE DOUBLE-MEANING RIDDLE:\nIn Ezekiel’s vision by the Chebar canal (chapter 1) and John’s apocalypse in Revelation 4, four magnificent living creatures (cherubim) surround the throne of God. Each creature has four distinct faces representing all created orders of life: one wild, one domesticated, one human, and one soaring in the heavens. What are the four faces of these living creatures?",
    "options": [
      "Lion, Ox, Man, Eagle",
      "Lion, Bear, Leopard, Dragon",
      "Eagle, Dove, Raven, Sparrow",
      "Ram, Goat, Bull, Lamb"
    ],
    "correct_answer": "Lion, Ox, Man, Eagle",
    "explanation": "The four living creatures around the heavenly throne have the faces of a lion, an ox (calf), a man, and a flying eagle.",
    "reference": "Ezekiel 1:10; 10:14; Revelation 4:7",
    "metadata": {
      "riddle_type": "The Double-Meaning Riddle",
      "is_typed": false,
      "clues": [
        "Historically associated with the Four Evangelists (Matthew, Mark, Luke, John).",
        "Face of a Lion, Face of an Ox (Calf), Face of a Man, Face of an Eagle.",
        "Represent royalty, service, humanity, and heavenly divinity."
      ],
      "hint": "The four faces of the living creatures: wild beast, domestic beast, human, and soaring bird.",
      "testament": "Both",
      "acceptedAlternatives": [
        "Lion, Calf, Man, Eagle",
        "Lion Ox Man Eagle",
        "Man, Lion, Ox, Eagle",
        "Lion, Ox, Human, Eagle"
      ],
      "stage": 8,
      "stage_title": "The Scripture Trap",
      "level_theme": "Obscure Biblical Animals & Creatures",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l39-c5",
    "game_slug": "bible-riddles",
    "level": 39,
    "challenge_index": 5,
    "question_text": "TYPE THE OBJECT — MINI-BOSS RIDDLE:\nWhen the Ark of the Covenant was captured by the Philistines and placed in the temple of Dagon in Ashdod, Dagon fell face down and broke his neck and hands, while the inhabitants of Ashdod, Gath, and Ekron were struck with painful tumors (hemorrhoids) and a plague of rodents ravaging their land. To return the Ark on a new cart pulled by two milk cows without a driver, the Philistine diviners commanded them to send a guilt offering of five golden models of the tumors and five golden models of another creature matching the five Philistine lords. What were these five golden creature models?",
    "options": [
      "Five Golden Mice",
      "Five Golden Frogs",
      "Five Golden Serpents",
      "Five Golden Flies"
    ],
    "correct_answer": "Five Golden Mice",
    "explanation": "The Philistines sent five golden tumors and five golden mice as a guilt offering when returning the Ark of the Covenant.",
    "reference": "1 Samuel 6:4–5, 11, 18",
    "metadata": {
      "riddle_type": "Type the Object",
      "is_typed": true,
      "clues": [
        "Golden mice (or rats).",
        "Represented the rodents that ravaged their crops and spread plague.",
        "Placed in a coffer beside the Ark (1 Samuel 6:4–5, 11, 18)."
      ],
      "hint": "Five golden rodent models sent by the Philistines with the Ark.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Golden Mice",
        "Five Golden Rats",
        "Golden Rats",
        "Mice of Gold"
      ],
      "stage": 8,
      "stage_title": "The Scripture Trap",
      "level_theme": "Obscure Biblical Animals & Creatures",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l40-c1",
    "game_slug": "bible-riddles",
    "level": 40,
    "challenge_index": 1,
    "question_text": "WHO AM I?\nDo not confuse me with Melchizedek the king of Salem who blessed Abraham. My name also incorporates the royal title \"Sedeq\" (righteousness), but I was a wicked Amorite king of Jerusalem centuries later during the conquest of Joshua. Hearing that Gibeon had made peace with Israel, I formed a five-king Amorite alliance to attack Gibeon. Joshua marched all night, routed us at Beth-horon, and chased us as hailstones fell from heaven. We hid in a cave at Makkedah, where Joshua rolled large stones over the mouth and later executed us. Who am I?",
    "options": [
      "Adoni-zedek",
      "Melchizedek",
      "Adoni-bezek",
      "Hiram"
    ],
    "correct_answer": "Adoni-zedek",
    "explanation": "Adoni-zedek was the Canaanite king of Jerusalem who led the five-king alliance against Joshua and was defeated at Beth-horon.",
    "reference": "Joshua 10:1–26",
    "metadata": {
      "riddle_type": "Who Am I?",
      "is_typed": false,
      "clues": [
        "Amorite king of Jerusalem in Joshua 10:1–26.",
        "Name means \"Lord of Righteousness.\"",
        "Led the five-king confederacy of Jerusalem, Hebron, Jarmuth, Lachish, and Eglon."
      ],
      "hint": "Canaanite king of Jerusalem defeated by Joshua when the sun stood still.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Adonizedek"
      ],
      "stage": 8,
      "stage_title": "The Scripture Trap",
      "level_theme": "Boss Level — The Ultimate Scripture Trap",
      "difficulty": "hard",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l40-c2",
    "game_slug": "bible-riddles",
    "level": 40,
    "challenge_index": 2,
    "question_text": "WHO AM I?\nDo not confuse me with Adoni-zedek of Jerusalem. I was a Canaanite king of Bezek captured by the tribes of Judah and Simeon in Judges 1. When captured, my captors cut off my thumbs and big toes. In bitter confession, I acknowledged divine retribution: \"Seventy kings with their thumbs and their big toes cut off used to pick up scraps under my table. As I have done, so God has repaid me.\" I was taken to Jerusalem and died there. Who am I?",
    "options": [
      "Adoni-bezek",
      "Adoni-zedek",
      "Eglon",
      "Jabin"
    ],
    "correct_answer": "Adoni-bezek",
    "explanation": "Adoni-bezek was the king of Bezek whose thumbs and big toes were cut off, mirroring his own mutilation of seventy rival kings.",
    "reference": "Judges 1:4–7",
    "metadata": {
      "riddle_type": "Who Am I?",
      "is_typed": false,
      "clues": [
        "King of Bezek.",
        "Had mutilated seventy kings by cutting off their thumbs and big toes.",
        "Suffered the exact poetic justice in Judges 1:5–7."
      ],
      "hint": "King who had his thumbs and big toes cut off after doing the same to seventy kings.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Adonibezek"
      ],
      "stage": 8,
      "stage_title": "The Scripture Trap",
      "level_theme": "Boss Level — The Ultimate Scripture Trap",
      "difficulty": "master",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l40-c3",
    "game_slug": "bible-riddles",
    "level": 40,
    "challenge_index": 3,
    "question_text": "WHO AM I?\nI was the priest of Midian who welcomed Moses when he fled Egypt after killing an Egyptian taskmaster. When my daughters were driven away from the well by local shepherds, Moses defended them and watered their flock. I gave Moses my daughter Zipporah as his wife. Scripture calls me by several interrelated names and titles throughout the Pentateuch, including Jethro, Reuel (\"Friend of God\"), and Hobab. What is my most famous and common biblical name?",
    "options": [
      "Jethro",
      "Reuel",
      "Hobab",
      "Balaam"
    ],
    "correct_answer": "Jethro",
    "explanation": "Jethro (also named Reuel) was the Midianite priest and Moses’ father-in-law who advised the delegation of judicial leadership.",
    "reference": "Exodus 2:16–22; 3:1; 18:1–27; Numbers 10:29",
    "metadata": {
      "riddle_type": "Who Am I?",
      "is_typed": false,
      "clues": [
        "Father-in-law of Moses.",
        "Advised Moses in Exodus 18 to delegate judicial cases to leaders of thousands, hundreds, fifties, and tens.",
        "Rejoiced and offered sacrifices to Yahweh upon hearing of the Exodus."
      ],
      "hint": "Midianite priest, father-in-law of Moses, also called Reuel.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Jethro the Priest of Midian",
        "Reuel",
        "Hobab"
      ],
      "stage": 8,
      "stage_title": "The Scripture Trap",
      "level_theme": "Boss Level — The Ultimate Scripture Trap",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l40-c4",
    "game_slug": "bible-riddles",
    "level": 40,
    "challenge_index": 4,
    "question_text": "WHO AM I?\nI was Abraham’s second wife whom he married after the death of Sarah. In Genesis 25, Scripture records that I bore Abraham six sons: Zimran, Jokshan, Medan, Midian, Ishbak, and Shuah. Before his death, Abraham gave all that he had to Isaac, but gave gifts to my sons and sent them eastward, away from Isaac, to the east country, where they became ancestors of various Arabian and Bedouin tribes. Who am I?",
    "options": [
      "Keturah",
      "Hagar",
      "Zilpah",
      "Bilhah"
    ],
    "correct_answer": "Keturah",
    "explanation": "Keturah was Abraham’s wife after Sarah’s death who bore him six sons including Midian.",
    "reference": "Genesis 25:1–6; 1 Chronicles 1:32",
    "metadata": {
      "riddle_type": "Who Am I?",
      "is_typed": false,
      "clues": [
        "Wife of Abraham after Sarah died.",
        "Mother of Midian, ancestral father of the Midianites.",
        "Recorded in Genesis 25:1–6 and 1 Chronicles 1:32."
      ],
      "hint": "Woman Abraham married after Sarah’s death who bore him six sons.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Cetura"
      ],
      "stage": 8,
      "stage_title": "The Scripture Trap",
      "level_theme": "Boss Level — The Ultimate Scripture Trap",
      "difficulty": "hard",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l40-c5",
    "game_slug": "bible-riddles",
    "level": 40,
    "challenge_index": 5,
    "question_text": "TYPE THE NAME — MINI-BOSS RIDDLE:\nI was a son of King David born to Bathsheba in Jerusalem. While Solomon was chosen to inherit the royal throne and built the magnificent temple, my own Davidic lineage ran through the quiet generations of history until it produced Mary, the virgin mother of Jesus (as recorded in the genealogy of Luke 3:31). Zechariah 12:12 specifically honors my clan alongside David and Levi in the end-times mourning. Who am I (the son of David from whom Luke traces Christ’s lineage)?",
    "options": [
      "Nathan",
      "Solomon",
      "Shimea",
      "Sobab"
    ],
    "correct_answer": "Nathan",
    "explanation": "Nathan was David and Bathsheba’s son through whom Luke 3 traces the physical lineage of Jesus Christ to King David.",
    "reference": "2 Samuel 5:14; 1 Chronicles 3:5; Zechariah 12:12; Luke 3:31",
    "metadata": {
      "riddle_type": "Type the Name",
      "is_typed": true,
      "clues": [
        "Third son born to David and Bathsheba (Bathshua) in Jerusalem (1 Chronicles 3:5).",
        "Named after the prophet Nathan who confronted David.",
        "Luke 3:31: \"...the son of Nathan, the son of David.\""
      ],
      "hint": "David’s son (brother of Solomon) through whom Jesus’ genealogy is traced in Luke 3.",
      "testament": "Both",
      "acceptedAlternatives": [
        "Nathan son of David",
        "Nathan the son of David"
      ],
      "stage": 8,
      "stage_title": "The Scripture Trap",
      "level_theme": "Boss Level — The Ultimate Scripture Trap",
      "difficulty": "master",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l41-c1",
    "game_slug": "bible-riddles",
    "level": 41,
    "challenge_index": 1,
    "question_text": "FORENSIC MONOLOGUE:\n\"When Israel yoked itself to Baal of Peor and wept at the doorway of the tent of meeting as a lethal plague devoured twenty-four thousand, a Simeonite prince brazenly escorted a Midianite princess into his family tent in the sight of Moses. Zealous with the holy jealousy of Yahweh, I rose up from the assembly, seized a javelin in my hand, followed them into the inner tent, and thrust both of them through the belly with a single spear strike. The plague was immediately halted, and God granted me His covenant of peace and an everlasting priesthood.\" Who am I?",
    "options": [
      "Phinehas",
      "Eleazar",
      "Ithamar",
      "Nadab"
    ],
    "correct_answer": "Phinehas",
    "explanation": "Phinehas son of Eleazar stopped the lethal plague at Baal-peor by executing Zimri and Cozbi with a spear, receiving an everlasting covenant of priesthood.",
    "reference": "Numbers 25:6–15; Psalm 106:30–31",
    "metadata": {
      "riddle_type": "Who Am I?",
      "is_typed": false,
      "clues": [
        "Son of Eleazar, grandson of Aaron the high priest.",
        "Slew Zimri son of Salu and Cozbi daughter of Zur (Numbers 25:6–15).",
        "Praised in Psalm 106:30–31: \"Then Phinehas stood up and intervened, and the plague was stayed. And that was counted to him as righteousness.\""
      ],
      "hint": "Aaron’s grandson who drove a spear through Zimri and Cozbi to halt the plague.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Phineas",
        "Phinehas son of Eleazar"
      ],
      "stage": 9,
      "stage_title": "Expert Riddle Chamber",
      "level_theme": "Forensic Monologues",
      "difficulty": "hard",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l41-c2",
    "game_slug": "bible-riddles",
    "level": 41,
    "challenge_index": 2,
    "question_text": "FORENSIC MONOLOGUE:\n\"When King David fled Jerusalem on foot from his rebel son Absalom, I came out from Bahurim of the clan of the house of Saul, shouting curses, throwing stones at David and his elite warriors, and throwing dirt into the air. I yelled: ‘Get out, get out, you man of blood, you worthless man! The Lord has avenged on you all the blood of the house of Saul!’ Abishai asked to take off my head, but David restrained him, saying the Lord may have told me to curse. When David returned triumphant across the Jordan, I fell at his feet begging for mercy.\" Who am I?",
    "options": [
      "Shimei",
      "Ziba",
      "Sheba",
      "Doeg"
    ],
    "correct_answer": "Shimei",
    "explanation": "Shimei son of Gera cursed David and pelted him with stones during his flight from Absalom, and was later executed under Solomon.",
    "reference": "2 Samuel 16:5–13; 19:16–23; 1 Kings 2:36–46",
    "metadata": {
      "riddle_type": "Who Am I?",
      "is_typed": false,
      "clues": [
        "Son of Gera, a Benjamite.",
        "Pelted King David with stones and curses at Bahurim.",
        "Executed by Solomon after violating his house arrest boundary at the brook Kidron (1 Kings 2:36–46)."
      ],
      "hint": "Benjamite who pelted fleeing David with stones and dirt at Bahurim.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Shimei son of Gera",
        "Semei"
      ],
      "stage": 9,
      "stage_title": "Expert Riddle Chamber",
      "level_theme": "Forensic Monologues",
      "difficulty": "hard",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l41-c3",
    "game_slug": "bible-riddles",
    "level": 41,
    "challenge_index": 3,
    "question_text": "FORENSIC MONOLOGUE:\n\"I was an eighty-year-old wealthy chieftain of Rogelim in Gilead. When King David arrived at Mahanaim exhausted and famished during Absalom’s rebellion, I along with Shobi and Machir brought beds, basins, earthenware vessels, wheat, barley, meal, parched grain, beans, lentils, honey, curds, sheep, and cheese to sustain the king and his army in the wilderness. When David invited me to cross the Jordan and live in royal honor at his table in Jerusalem, I declined because of my advanced age, asking that my son Chimham go in my place.\" Who am I?",
    "options": [
      "Barzillai",
      "Machir",
      "Shobi",
      "Hushai"
    ],
    "correct_answer": "Barzillai",
    "explanation": "Barzillai the Gileadite provided lavish provisions to David at Mahanaim and sent his son Chimham to receive the king’s royal favor.",
    "reference": "2 Samuel 17:27–29; 19:31–40",
    "metadata": {
      "riddle_type": "Who Am I?",
      "is_typed": false,
      "clues": [
        "An elderly Gileadite of Rogelim.",
        "Said: \"I am this day eighty years old. Can I discern what is pleasant and what is not?\"",
        "David kissed him, blessed him, and took Chimham to Jerusalem (2 Samuel 19:31–40)."
      ],
      "hint": "80-year-old Gileadite who lavishly provisioned David at Mahanaim.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Barzillai the Gileadite"
      ],
      "stage": 9,
      "stage_title": "Expert Riddle Chamber",
      "level_theme": "Forensic Monologues",
      "difficulty": "master",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l41-c4",
    "game_slug": "bible-riddles",
    "level": 41,
    "challenge_index": 4,
    "question_text": "FORENSIC MONOLOGUE:\n\"I was a foreign Philistine warrior from Gath who had arrived in Jerusalem with six hundred soldiers only yesterday. When David was fleeing into the wilderness from Absalom and urged me to return to my own country rather than wander with an exile, I swore a sacred oath by Yahweh: ‘As the Lord lives, and as my lord the king lives, wherever my lord the king shall be, whether for death or for life, there also will your servant be.’ David was so moved that he appointed me commander of one-third of his entire royal army in the decisive battle of the forest of Ephraim.\" Who am I?",
    "options": [
      "Ittai",
      "Benaiah",
      "Uriah",
      "Abner"
    ],
    "correct_answer": "Ittai",
    "explanation": "Ittai the Gittite, a foreigner from Gath, swore absolute loyalty to David in exile and commanded one-third of the royal army against Absalom.",
    "reference": "2 Samuel 15:19–22; 18:2",
    "metadata": {
      "riddle_type": "Who Am I?",
      "is_typed": false,
      "clues": [
        "Ittai the Gittite.",
        "Commanded one-third of David’s army alongside Joab and Abishai.",
        "Example of supreme Gentile loyalty to the anointed King of Israel."
      ],
      "hint": "Philistine commander from Gath who pledged absolute loyalty to exiled David.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Ittai the Gittite"
      ],
      "stage": 9,
      "stage_title": "Expert Riddle Chamber",
      "level_theme": "Forensic Monologues",
      "difficulty": "master",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l41-c5",
    "game_slug": "bible-riddles",
    "level": 41,
    "challenge_index": 5,
    "question_text": "TYPE THE NAME — MINI-BOSS RIDDLE:\nFORENSIC MONOLOGUE:\n\"I was David’s close companion and counselor who met the weeping king on the crest of the Mount of Olives with my coat torn and dirt on my head. David told me that if I accompanied him, I would be a burden, but if I returned to Jerusalem, I could infiltrate Absalom’s court and defeat the brilliant counsel of Ahithophel. I feigned loyalty to Absalom, flatteringly defeated Ahithophel’s plan of an immediate night attack by recommending a vast national levy led by Absalom in person, and sent secret intelligence to David through the priests Zadok and Abiathar. When Ahithophel saw his advice was rejected, he went home and hanged himself.\" Who am I?",
    "options": [
      "Hushai",
      "Ahithophel",
      "Zadok",
      "Abiathar"
    ],
    "correct_answer": "Hushai",
    "explanation": "Hushai the Archite infiltrated Absalom’s rebellion as David’s spy and cleverly defeated Ahithophel’s military strategy.",
    "reference": "2 Samuel 15:32–37; 16:15–19; 17:5–16",
    "metadata": {
      "riddle_type": "Type the Name",
      "is_typed": true,
      "clues": [
        "David’s friend (counselor), the Archite.",
        "Frustrated Ahithophel’s counsel in 2 Samuel 17.",
        "Saved David’s life by gaining him time to cross the Jordan."
      ],
      "hint": "David’s friend who infiltrated Absalom’s court and undermined Ahithophel’s counsel.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Hushai the Archite",
        "Chusai"
      ],
      "stage": 9,
      "stage_title": "Expert Riddle Chamber",
      "level_theme": "Forensic Monologues",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l42-c1",
    "game_slug": "bible-riddles",
    "level": 42,
    "challenge_index": 1,
    "question_text": "TYPE TWO ANSWERS:\nIn 2 Timothy 3:8, the Apostle Paul exposes false teachers in the last days by comparing them to two ancient Egyptian court sorcerers who opposed Moses before Pharaoh: \"Just as [...] and [...] opposed Moses, so these men also oppose the truth, men corrupted in mind and disqualified regarding the faith.\" Remarkably, these two specific names appear nowhere in the Old Testament text itself! What are the names of these two Egyptian magicians preserved by Jewish tradition and canonized by Paul?",
    "options": [
      "Jannes and Jambres",
      "Dathan and Abiram",
      "Hophni and Phinehas",
      "Sanballat and Tobiah"
    ],
    "correct_answer": "Jannes and Jambres",
    "explanation": "Jannes and Jambres are named by Paul in 2 Timothy 3:8 as Pharaoh’s court magicians who opposed Moses in Egypt.",
    "reference": "2 Timothy 3:8; Exodus 7:11–12",
    "metadata": {
      "riddle_type": "Type Two Answers",
      "is_typed": true,
      "clues": [
        "Names begin with J and sound like an ancient rhyming pair.",
        "Greek: Ἰαννῆς καὶ Ἰαμβρῆς.",
        "Egyptian magicians who replicated Moses’ rod-to-serpent and blood miracles before their power failed at the gnats."
      ],
      "hint": "Two Egyptian magicians who opposed Moses, named by Paul in 2 Timothy 3:8.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Jannes & Jambres",
        "Jambres and Jannes",
        "Jannes, Jambres"
      ],
      "stage": 9,
      "stage_title": "Expert Riddle Chamber",
      "level_theme": "Obscure Inter-Biblical Cross References",
      "difficulty": "master",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l42-c2",
    "game_slug": "bible-riddles",
    "level": 42,
    "challenge_index": 2,
    "question_text": "THE EVENT RIDDLE:\nIn Jude verse 9, the author illustrates respect for angelic authority by recounting an extraordinary celestial dispute found nowhere in the Old Testament: \"When the archangel [...] contended with the devil, disputing about the body of Moses, he did not presume to pronounce a blasphemous judgment, but said, ‘The Lord rebuke you.’\" Which archangel contended with the devil over the hidden burial site and physical body of Moses?",
    "options": [
      "Michael",
      "Gabriel",
      "Raphael",
      "Uriel"
    ],
    "correct_answer": "Michael",
    "explanation": "Michael the archangel disputed with Satan over the body of Moses, saying only: \"The Lord rebuke you.\"",
    "reference": "Jude 1:9; Deuteronomy 34:5–6; Revelation 12:7",
    "metadata": {
      "riddle_type": "The Event Riddle",
      "is_typed": false,
      "clues": [
        "Prince and guardian angel of Israel (Daniel 10:13, 21; 12:1).",
        "Led the heavenly armies against the dragon in Revelation 12:7.",
        "The only angel explicitly titled \"archangel\" in the New Testament."
      ],
      "hint": "Archangel who disputed with the devil over the body of Moses in Jude 9.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Archangel Michael",
        "Michael the Archangel"
      ],
      "stage": 9,
      "stage_title": "Expert Riddle Chamber",
      "level_theme": "Obscure Inter-Biblical Cross References",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l42-c3",
    "game_slug": "bible-riddles",
    "level": 42,
    "challenge_index": 3,
    "question_text": "WHAT AM I?\nI was a famous lost ancient Hebrew book of heroic poetry cited twice by name in the Old Testament: once in Joshua 10:13 to confirm the miraculous day the sun stood still over Gibeon (\"Is this not written in the Book of [...]?\"), and once in 2 Samuel 1:18 introducing David’s lament over Saul and Jonathan (\"The Song of the Bow; behold, it is written in the Book of [...]\"). My title translates from Hebrew as \"The Book of the Upright (or Righteous One).\" What lost book am I?",
    "options": [
      "The Book of Jashar",
      "The Book of the Wars of the Lord",
      "The Chronicles of the Kings of Israel",
      "The Book of Nathan the Prophet"
    ],
    "correct_answer": "The Book of Jashar",
    "explanation": "The Book of Jashar (\"The Book of the Upright\") was an ancient collection of Hebrew epic poetry cited in Joshua and 2 Samuel.",
    "reference": "Joshua 10:13; 2 Samuel 1:18",
    "metadata": {
      "riddle_type": "What Am I?",
      "is_typed": false,
      "clues": [
        "Hebrew: Sefer Ha-Yashar.",
        "Cited for Joshua’s long day and David’s lament over Jonathan.",
        "Contained national victory songs and heroic commemorations."
      ],
      "hint": "Lost book of ancient Hebrew poems cited for the sun standing still and David’s lament.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Book of Jashar",
        "Book of Jasher",
        "The Book of Jasher",
        "Sefer HaYashar"
      ],
      "stage": 9,
      "stage_title": "Expert Riddle Chamber",
      "level_theme": "Obscure Inter-Biblical Cross References",
      "difficulty": "hard",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l42-c4",
    "game_slug": "bible-riddles",
    "level": 42,
    "challenge_index": 4,
    "question_text": "WHO AM I?\nIn 2 Peter 2:5, the Apostle Peter uniquely honors this ancient patriarch with a title found nowhere in Genesis: calling him \"a preacher of righteousness\" when God spared him and seven others during the ancient world’s deluge. Hebrews 11:7 adds that he became an heir of the righteousness that comes by faith when he built an ark in reverent fear to save his household. Who am I?",
    "options": [
      "Noah",
      "Enoch",
      "Abraham",
      "Methuselah"
    ],
    "correct_answer": "Noah",
    "explanation": "Noah is designated by Peter as \"a herald (preacher) of righteousness\" who proclaimed God’s warning while building the ark.",
    "reference": "Genesis 6:9; 2 Peter 2:5; Hebrews 11:7",
    "metadata": {
      "riddle_type": "Who Am I?",
      "is_typed": false,
      "clues": [
        "Father of Shem, Ham, and Japheth.",
        "Described in Genesis 6:9 as a righteous man, blameless in his generation.",
        "Received the rainbow covenant after the flood."
      ],
      "hint": "Patriarch described in 2 Peter 2:5 as a \"preacher of righteousness.\"",
      "testament": "Both",
      "acceptedAlternatives": [
        "Noe"
      ],
      "stage": 9,
      "stage_title": "Expert Riddle Chamber",
      "level_theme": "Obscure Inter-Biblical Cross References",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l42-c5",
    "game_slug": "bible-riddles",
    "level": 42,
    "challenge_index": 5,
    "question_text": "TYPE THE NAME — MINI-BOSS RIDDLE:\nIn 1 Corinthians 10:4, the Apostle Paul makes an astonishing rabbinic-typological statement regarding the wilderness wandering: \"For they drank from the spiritual Rock that followed them, and the Rock was [...].\" What (or Who) was this spiritual Rock that followed Israel?",
    "options": [
      "Christ",
      "Moses",
      "Aaron",
      "The Angel of the Lord"
    ],
    "correct_answer": "Christ",
    "explanation": "Paul reveals in 1 Corinthians 10:4 that the spiritual rock providing water to Israel throughout the wilderness was Christ.",
    "reference": "1 Corinthians 10:4; Exodus 17:6; Numbers 20:11",
    "metadata": {
      "riddle_type": "Type the Name",
      "is_typed": true,
      "clues": [
        "Paul identifies the wilderness water-providing Rock as Christ Himself.",
        "Alluded to Moses striking the rock in Exodus 17 and Numbers 20.",
        "Explicitly declared: \"and the Rock was Christ.\""
      ],
      "hint": "In 1 Corinthians 10:4, Paul declares that the Rock that followed them was...",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Jesus",
        "Jesus Christ",
        "Messiah",
        "The Christ"
      ],
      "stage": 9,
      "stage_title": "Expert Riddle Chamber",
      "level_theme": "Obscure Inter-Biblical Cross References",
      "difficulty": "easy",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l43-c1",
    "game_slug": "bible-riddles",
    "level": 43,
    "challenge_index": 1,
    "question_text": "WHAT AM I?\nI was a colossal circular bronze water reservoir cast by master metalworker Hiram of Tyre for Solomon’s Temple. Measuring fifteen feet in diameter, seven and a half feet deep, and forty-five feet in circumference, with a brim carved like a lily blossom, I held over twelve thousand gallons of water for priestly ablutions. I rested upon the backs of twelve bronze oxen standing in groups of three facing north, west, south, and east, with all their hindquarters directed inward. What am I called in Scripture?",
    "options": [
      "The Molten / Bronze Sea",
      "The Bronze Altar",
      "The Bronze Laver",
      "The Golden Basin"
    ],
    "correct_answer": "The Molten / Bronze Sea",
    "explanation": "The Molten (Bronze) Sea was Solomon’s giant circular temple reservoir resting upon twelve bronze oxen facing the four compass points.",
    "reference": "1 Kings 7:23–26; 2 Chronicles 4:2–5",
    "metadata": {
      "riddle_type": "What Am I?",
      "is_typed": false,
      "clues": [
        "The Molten Sea (or Bronze Sea / Sea of cast metal).",
        "Stood in the southeast court of Solomon’s Temple.",
        "King Ahaz later removed it from the twelve oxen and placed it on a stone pavement."
      ],
      "hint": "Solomon’s giant circular bronze water reservoir resting upon twelve sculpted oxen.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "The Bronze Sea",
        "Molten Sea",
        "The Molten Sea",
        "Bronze Sea",
        "The Sea of Bronze"
      ],
      "stage": 9,
      "stage_title": "Expert Riddle Chamber",
      "level_theme": "Cryptic Objects & Architecture",
      "difficulty": "hard",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l43-c2",
    "game_slug": "bible-riddles",
    "level": 43,
    "challenge_index": 2,
    "question_text": "TYPE TWO ANSWERS:\nWe were two towering bronze pillars, each twenty-seven feet high and eighteen feet in circumference, crowned with elaborate nine-foot capitals decorated with network wreaths and two hundred bronze pomegranates. Forged by Hiram of Tyre, we stood prominently in the porch at the entrance of Solomon’s Temple. The king gave each of us a personal theological name: the south pillar was named [...], meaning \"He will establish,\" and the north pillar was named [...], meaning \"In Him is strength.\" What were our two names?",
    "options": [
      "Jachin and Boaz",
      "Urim and Thummim",
      "Ebal and Gerizim",
      "Perez and Zerah"
    ],
    "correct_answer": "Jachin and Boaz",
    "explanation": "Jachin (\"He will establish\") and Boaz (\"In Him is strength\") were the two iconic bronze pillars flanking the entrance to Solomon’s Temple.",
    "reference": "1 Kings 7:15–22; 2 Chronicles 3:15–17",
    "metadata": {
      "riddle_type": "Type Two Answers",
      "is_typed": true,
      "clues": [
        "1 Kings 7:15–22; 2 Chronicles 3:17.",
        "Stood at the front porch entrance to Solomon’s Temple.",
        "South pillar: Jachin; North pillar: Boaz."
      ],
      "hint": "Two famous bronze pillars at the entrance of Solomon’s Temple.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Jachin & Boaz",
        "Boaz and Jachin",
        "Jachin, Boaz",
        "Jakin and Boaz"
      ],
      "stage": 9,
      "stage_title": "Expert Riddle Chamber",
      "level_theme": "Cryptic Objects & Architecture",
      "difficulty": "medium",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l43-c3",
    "game_slug": "bible-riddles",
    "level": 43,
    "challenge_index": 3,
    "question_text": "WHAT AM I?\nIn Exodus 38:8, when Bezalel crafted the bronze basin (laver) and its bronze stand for the courtyard of the Tabernacle where priests washed their hands and feet before approaching the altar, what specific, personal bronze household items donated by Hebrew women were melted down to construct it?",
    "options": [
      "The Bronze Mirrors of the Women",
      "The Bronze Jewelry",
      "The Bronze Cooking Pots",
      "The Bronze Bracelets"
    ],
    "correct_answer": "The Bronze Mirrors of the Women",
    "explanation": "The bronze laver was forged from the polished bronze mirrors donated by the devout women ministering at the Tabernacle entrance.",
    "reference": "Exodus 38:8",
    "metadata": {
      "riddle_type": "What Am I?",
      "is_typed": false,
      "clues": [
        "Exodus 38:8: \"He made the basin of bronze and its stand of bronze from the [...] of the ministering women who served at the entrance of the tent of meeting.\"",
        "Ancient polished bronze sheets used by women to inspect their reflection.",
        "Symbolized exchanging worldly vanity for spiritual cleansing and purity before God."
      ],
      "hint": "Polished bronze personal reflection items donated by women to forge the Tabernacle laver.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Bronze Mirrors",
        "The Mirrors of the Women",
        "Looking Glasses",
        "Bronze Looking Glasses"
      ],
      "stage": 9,
      "stage_title": "Expert Riddle Chamber",
      "level_theme": "Cryptic Objects & Architecture",
      "difficulty": "master",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l43-c4",
    "game_slug": "bible-riddles",
    "level": 43,
    "challenge_index": 4,
    "question_text": "WHAT AM I?\nIn Zechariah 3:9 and 4:7, God set me before Joshua the high priest and promised Zerubbabel that he would bring me out amid jubilant shouts of \"Grace, grace to it!\" On my single stone face are engraved \"seven eyes\" representing the all-seeing omniscience of the eyes of the Lord which range through the whole earth. What architectural element am I?",
    "options": [
      "The Capstone with Seven Eyes",
      "The Altar of Incense",
      "The Ark of the Covenant",
      "The Plumb Line"
    ],
    "correct_answer": "The Capstone with Seven Eyes",
    "explanation": "The capstone (headstone) with seven eyes brought forth by Zerubbabel symbolized the completion of the temple empowered by the Spirit.",
    "reference": "Zechariah 3:9; 4:7–10",
    "metadata": {
      "riddle_type": "What Am I?",
      "is_typed": false,
      "clues": [
        "The cornerstone / capstone (top stone) of the temple.",
        "Bore seven eyes symbolizing the fullness of the Holy Spirit.",
        "God promised: \"I will remove the iniquity of this land in a single day.\""
      ],
      "hint": "Temple capstone bearing seven engraved eyes brought out amid shouts of \"Grace, grace to it!\"",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "The Capstone",
        "Capstone",
        "The Top Stone",
        "The Headstone with Seven Eyes"
      ],
      "stage": 9,
      "stage_title": "Expert Riddle Chamber",
      "level_theme": "Cryptic Objects & Architecture",
      "difficulty": "hard",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l43-c5",
    "game_slug": "bible-riddles",
    "level": 43,
    "challenge_index": 5,
    "question_text": "TYPE THE OBJECT — MINI-BOSS RIDDLE:\nI was an exquisite golden piece of sacred sanctuary furniture described in Exodus 30, measuring eighteen inches square and three feet high, with a horn projecting from each of my four corners. Overlaid with pure gold on my top, sides, and horns, and encircled by a decorative gold molding, Aaron burned fragrant sweet incense upon me every morning when he dressed the lamps, and every evening at twilight. No unauthorized incense, burnt offering, or grain offering could ever be placed upon me. What altar am I?",
    "options": [
      "The Golden Altar of Incense",
      "The Bronze Altar of Burnt Offering",
      "The Table of Showbread",
      "The Golden Lampstand"
    ],
    "correct_answer": "The Golden Altar of Incense",
    "explanation": "The Golden Altar of Incense stood before the veil in the Holy Place where aromatic incense was offered continually before the Lord.",
    "reference": "Exodus 30:1–10; Luke 1:11; Hebrews 9:4",
    "metadata": {
      "riddle_type": "Type the Object",
      "is_typed": true,
      "clues": [
        "Stood in the Holy Place directly in front of the veil before the Ark of the Covenant.",
        "Atonement was made upon my horns once a year with blood on the Day of Atonement.",
        "Zechariah was standing on my right side when the Angel Gabriel appeared to announce John the Baptist’s birth (Luke 1:11)."
      ],
      "hint": "Golden horned altar in front of the veil where morning and evening incense was burned.",
      "testament": "Both",
      "acceptedAlternatives": [
        "Altar of Incense",
        "Golden Altar of Incense",
        "The Altar of Incense",
        "The Golden Altar"
      ],
      "stage": 9,
      "stage_title": "Expert Riddle Chamber",
      "level_theme": "Cryptic Objects & Architecture",
      "difficulty": "medium",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l44-c1",
    "game_slug": "bible-riddles",
    "level": 44,
    "challenge_index": 1,
    "question_text": "WHO AM I?\nWhen Philip found me and announced, \"We have found him of whom Moses in the Law and also the prophets wrote, Jesus of Nazareth, the son of Joseph,\" I responded skeptically: \"Can anything good come out of Nazareth?\" When Jesus saw me approaching, He declared: \"Behold, an Israelite indeed, in whom there is no deceit!\" Astonished, I asked how He knew me, and He answered: \"Before Philip called you, when you were under the fig tree, I saw you.\" I immediately confessed: \"Rabbi, you are the Son of God! You are the King of Israel!\" Who am I?",
    "options": [
      "Nathanael",
      "Nicodemus",
      "Bartimaeus",
      "Zacchaeus"
    ],
    "correct_answer": "Nathanael",
    "explanation": "Nathanael from Cana confessed Jesus as Son of God and King of Israel after Jesus revealed He had seen him under the fig tree.",
    "reference": "John 1:45–51; 21:2",
    "metadata": {
      "riddle_type": "Who Am I?",
      "is_typed": false,
      "clues": [
        "From Cana in Galilee.",
        "Commonly identified as Bartholomew among the Twelve Apostles.",
        "Jesus promised he would see heaven open and angels ascending and descending upon the Son of Man."
      ],
      "hint": "Disciple who doubted anything good could come from Nazareth; seen under the fig tree.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Nathaniel",
        "Bartholomew"
      ],
      "stage": 9,
      "stage_title": "Expert Riddle Chamber",
      "level_theme": "Obscure New Testament Disciple Encounters",
      "difficulty": "easy",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l44-c2",
    "game_slug": "bible-riddles",
    "level": 44,
    "challenge_index": 2,
    "question_text": "WHO AM I?\nIn Acts 13:1, I am listed among the five prophets and teachers in the multicultural church at Antioch who fasted and prayed before laying hands on Barnabas and Saul. Scripture notes a fascinating royal biographical detail about my childhood: I was a syntrophos (foster-brother / companion brought up from infancy) with Herod Antipas the tetrarch (the very Herod who beheaded John the Baptist and mocked Jesus in His trials). While Herod chose corruption and cruelty, I chose Christ and prophetic ministry in the early church. Who am I?",
    "options": [
      "Manaen",
      "Lucius of Cyrene",
      "Simeon called Niger",
      "Jason"
    ],
    "correct_answer": "Manaen",
    "explanation": "Manaen was a leader in the church of Antioch who had been raised from childhood alongside Herod Antipas the tetrarch.",
    "reference": "Acts 13:1",
    "metadata": {
      "riddle_type": "Who Am I?",
      "is_typed": false,
      "clues": [
        "Mentioned in Acts 13:1.",
        "Foster brother / lifelong companion of Herod the Tetrarch.",
        "Prophet-teacher in the church of Antioch alongside Barnabas, Simeon called Niger, Lucius of Cyrene, and Saul."
      ],
      "hint": "Antioch prophet who grew up in the royal court with Herod the Tetrarch.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Manahen"
      ],
      "stage": 9,
      "stage_title": "Expert Riddle Chamber",
      "level_theme": "Obscure New Testament Disciple Encounters",
      "difficulty": "master",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l44-c3",
    "game_slug": "bible-riddles",
    "level": 44,
    "challenge_index": 3,
    "question_text": "THE EVENT RIDDLE:\nDuring the Passover festival in Jerusalem just after the Triumphal Entry, several Greek-speaking pilgrims who had come up to worship approached Philip of Bethsaida with an earnest and famous eight-word petition: \"Sir, we wish to see Jesus.\" Philip went and told Andrew; Andrew and Philip then came and told Jesus. Hearing that Greeks were seeking Him, Jesus announced: \"The hour has come for the Son of Man to be glorified. Truly, truly, I say to you, unless a grain of wheat falls into the earth and dies, it remains alone; but if it dies, it bears much fruit.\" Which Gospel alone records this encounter?",
    "options": [
      "Gospel of John",
      "Gospel of Luke",
      "Gospel of Matthew",
      "Gospel of Mark"
    ],
    "correct_answer": "Gospel of John",
    "explanation": "The request of the Greeks \"Sir, we wish to see Jesus\" is recorded uniquely in John 12:20–24, prompting the grain-of-wheat discourse.",
    "reference": "John 12:20–24",
    "metadata": {
      "riddle_type": "The Event Riddle",
      "is_typed": false,
      "clues": [
        "John 12:20–24.",
        "Marked the moment Jesus declared \"the hour has come.\"",
        "Jesus spoke of being lifted up from the earth to draw all people to Himself."
      ],
      "hint": "Gospel recording the Greeks asking Philip: \"Sir, we wish to see Jesus.\"",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "John",
        "Gospel according to John"
      ],
      "stage": 9,
      "stage_title": "Expert Riddle Chamber",
      "level_theme": "Obscure New Testament Disciple Encounters",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l44-c4",
    "game_slug": "bible-riddles",
    "level": 44,
    "challenge_index": 4,
    "question_text": "WHO AM I?\nI was a wealthy Christian merchant and host in Thessalonica who welcomed Paul and Silas into my home during the Second Missionary Journey. When jealous Jewish opponents formed a mob and set the city in an uproar, they attacked my house seeking the missionaries. Failing to find them, they dragged me and some other brothers before the city magistrates (politarchs), shouting: \"These men who have turned the world upside down have come here also, and [...] has received them!\" I was forced to post a hefty bail bond before being released. Who am I?",
    "options": [
      "Jason",
      "Gaius",
      "Aristarchus",
      "Secundus"
    ],
    "correct_answer": "Jason",
    "explanation": "Jason hosted Paul and Silas in Thessalonica and was dragged before city officials when the mob couldn’t find the missionaries.",
    "reference": "Acts 17:5–9; Romans 16:21",
    "metadata": {
      "riddle_type": "Who Am I?",
      "is_typed": false,
      "clues": [
        "Recorded in Acts 17:5–9.",
        "Accused of harboring those acting against Caesar’s decrees.",
        "Also greeted as Paul’s kinsman in Romans 16:21."
      ],
      "hint": "Thessalonian believer dragged before magistrates for hosting Paul and Silas.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Jason of Thessalonica"
      ],
      "stage": 9,
      "stage_title": "Expert Riddle Chamber",
      "level_theme": "Obscure New Testament Disciple Encounters",
      "difficulty": "hard",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l44-c5",
    "game_slug": "bible-riddles",
    "level": 44,
    "challenge_index": 5,
    "question_text": "TYPE THE NAME — MINI-BOSS RIDDLE:\nI was a prominent, wealthy Christian leader in Colossae in whose home the local church assembled. When the Apostle Paul wrote a deeply personal, single-chapter pastoral letter from his Roman imprisonment on behalf of my runaway slave Onesimus (whom Paul had led to Christ in chains), he addressed the letter directly to me, calling me \"our beloved fellow worker,\" as well as to Apphia our sister and Archippus our fellow soldier. Who am I?",
    "options": [
      "Philemon",
      "Onesimus",
      "Archippus",
      "Epaphras"
    ],
    "correct_answer": "Philemon",
    "explanation": "Philemon was the Colossian house-church host to whom Paul addressed his letter concerning the reconciliation of Onesimus.",
    "reference": "Philemon 1:1–21",
    "metadata": {
      "riddle_type": "Type the Name",
      "is_typed": true,
      "clues": [
        "Recipient of Paul’s shortest personal letter.",
        "Master of Onesimus.",
        "Paul wrote to him: \"Receive him as you would receive me.\""
      ],
      "hint": "Colossian believer to whom Paul wrote a letter requesting forgiveness for runaway slave Onesimus.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Philemon of Colossae"
      ],
      "stage": 9,
      "stage_title": "Expert Riddle Chamber",
      "level_theme": "Obscure New Testament Disciple Encounters",
      "difficulty": "easy",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l45-c1",
    "game_slug": "bible-riddles",
    "level": 45,
    "challenge_index": 1,
    "question_text": "WHO AM I?\nI am the Canaanite woman who married Er, the wicked firstborn son of Judah. When Er died under God’s judgment, Judah gave me to his second son Onan according to levirate duty, but Onan refused to father heirs and was also slain by the Lord. Denied the third son Shelah, I disguised myself as a veiled cult prostitute at the entrance to Enaim on the road to Timnah, where Judah took my pledge of his signet, cord, and staff. When sentenced to be burned for prostitution three months later, I sent out the items: \"By the man to whom these belong, I am pregnant.\" Judah acknowledged: \"She is more righteous than I.\" Who am I?",
    "options": [
      "Tamar",
      "Rahab",
      "Ruth",
      "Bathsheba"
    ],
    "correct_answer": "Tamar",
    "explanation": "Tamar secured the line of Judah through Perez and Zerah using Judah’s own signet and staff, and is named in Jesus’ genealogy.",
    "reference": "Genesis 38:6–26; Matthew 1:3",
    "metadata": {
      "riddle_type": "Who Am I?",
      "is_typed": false,
      "clues": [
        "Bore twin sons Perez and Zerah to Judah.",
        "First of five women named in the genealogy of Jesus in Matthew 1:3.",
        "Preserved the messianic seed of Judah."
      ],
      "hint": "Daughter-in-law of Judah who bore Perez and Zerah and is listed in Matthew’s genealogy.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Thamar"
      ],
      "stage": 9,
      "stage_title": "Expert Riddle Chamber",
      "level_theme": "Complex Genealogical & Hereditary Enigmas",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l45-c2",
    "game_slug": "bible-riddles",
    "level": 45,
    "challenge_index": 2,
    "question_text": "THE BIBLICAL RELATIONSHIP RIDDLE:\nIn Matthew’s genealogy of Jesus (chapter 1), only five women are specifically mentioned by name or relationship. Four are Tamar, Rahab, Ruth, and Mary. The fifth woman is deliberately not mentioned by her personal name, but identified strictly through her tragic former marriage: \"And David was the father of Solomon by [...].\" Who was this fifth woman?",
    "options": [
      "Bathsheba / The Wife of Uriah",
      "Abigail",
      "Michal",
      "Ahinoam"
    ],
    "correct_answer": "Bathsheba / The Wife of Uriah",
    "explanation": "Bathsheba is uniquely designated in Matthew 1:6 as \"the wife of Uriah\" to emphasize God’s grace over human sin and David’s great transgression.",
    "reference": "Matthew 1:6; 2 Samuel 11:3; 12:24",
    "metadata": {
      "riddle_type": "The Biblical Relationship Riddle",
      "is_typed": false,
      "clues": [
        "Mother of King Solomon and Nathan.",
        "Daughter of Eliam, granddaughter of Ahithophel.",
        "Matthew 1:6 identifies her as \"the wife of Uriah.\""
      ],
      "hint": "Mother of Solomon referred to in Matthew 1:6 as \"the wife of Uriah.\"",
      "testament": "Both",
      "acceptedAlternatives": [
        "Bathsheba",
        "Wife of Uriah",
        "The Wife of Uriah",
        "Bathshua"
      ],
      "stage": 9,
      "stage_title": "Expert Riddle Chamber",
      "level_theme": "Complex Genealogical & Hereditary Enigmas",
      "difficulty": "easy",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l45-c3",
    "game_slug": "bible-riddles",
    "level": 45,
    "challenge_index": 3,
    "question_text": "THE THREE-CLUE RIDDLE:\nClue 1: I was the righteous great-grandfather of King David living in Bethlehem-judah.\nClue 2: According to Matthew 1:5, my father was Salmon and my mother was the converted Jericho harlot Rahab.\nClue 3: I acted as a godly kinsman-redeemer (Go’el) for destitute Naomi and married her Moabite daughter-in-law Ruth on the threshing floor, fathering Obed. Who am I?",
    "options": [
      "Boaz",
      "Salmon",
      "Elimelech",
      "Obed"
    ],
    "correct_answer": "Boaz",
    "explanation": "Boaz, son of Salmon and Rahab, was the wealthy Bethlehem kinsman-redeemer who married Ruth and fathered Obed.",
    "reference": "Ruth 2:1–4; 4:13–22; Matthew 1:5",
    "metadata": {
      "riddle_type": "The Three-Clue Riddle",
      "is_typed": false,
      "clues": [
        "Husband of Ruth.",
        "Greeted his reapers: \"The Lord be with you!\" and they replied: \"The Lord bless you!\"",
        "Father of Obed, grandfather of Jesse, great-grandfather of David."
      ],
      "hint": "Bethlehem kinsman-redeemer who married Ruth; son of Rahab.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Booz"
      ],
      "stage": 9,
      "stage_title": "Expert Riddle Chamber",
      "level_theme": "Complex Genealogical & Hereditary Enigmas",
      "difficulty": "easy",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l45-c4",
    "game_slug": "bible-riddles",
    "level": 45,
    "challenge_index": 4,
    "question_text": "WHO AM I?\nI was the tragic king of Judah, also known as Coniah and Jeconiah, who reigned for only three months and ten days before surrendering to Nebuchadnezzar in 597 BC and being carried captive to Babylon. In Jeremiah 22:30, God pronounced a terrifying bloodline curse upon me: \"Write this man down as childless, a man who shall not succeed in his days, for none of his offspring shall succeed in sitting on the throne of David and ruling again in Judah.\" Because of this royal curse, Jesus could not be the biological son of Joseph (who descended from me in Matthew 1:11–12), but claimed the physical Davidic throne through Mary via David’s son Nathan! Who am I?",
    "options": [
      "Jehoiachin / Jeconiah",
      "Jehoiakim",
      "Zedekiah",
      "Jehoahaz"
    ],
    "correct_answer": "Jehoiachin / Jeconiah",
    "explanation": "Jehoiachin (Jeconiah/Coniah) was the cursed king of Judah whose biological descendants were barred from reigning on David’s throne.",
    "reference": "Jeremiah 22:24–30; 2 Kings 24:8–15; 25:27–30; Matthew 1:11–12",
    "metadata": {
      "riddle_type": "Who Am I?",
      "is_typed": false,
      "clues": [
        "Jehoiachin (Jeconiah / Coniah).",
        "Spent thirty-seven years in a Babylonian dungeon before Evil-merodach released him and gave him a seat of honor.",
        "Subject of the famous \"Bloodline Curse of Coniah\" in Jeremiah 22:24–30."
      ],
      "hint": "King of Judah cursed by Jeremiah that none of his physical offspring would sit on David’s throne.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Jehoiachin",
        "Jeconiah",
        "Coniah",
        "Jechonias"
      ],
      "stage": 9,
      "stage_title": "Expert Riddle Chamber",
      "level_theme": "Complex Genealogical & Hereditary Enigmas",
      "difficulty": "master",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l45-c5",
    "game_slug": "bible-riddles",
    "level": 45,
    "challenge_index": 5,
    "question_text": "TYPE THE NAME — MINI-BOSS RIDDLE:\nI was the priest of Midian whose seven daughters were rescued from aggressive shepherds by Moses at a desert well. When my daughters returned quickly, I asked why they had left the Egyptian standing outside, and invited him to eat bread. Moses agreed to dwell with me, and I gave him my daughter Zipporah in marriage. What is the specific name by which I am introduced in Exodus 2:18, meaning \"Friend of God,\" before I am called Jethro in Exodus 3:1?",
    "options": [
      "Reuel",
      "Jethro",
      "Hobab",
      "Pethor"
    ],
    "correct_answer": "Reuel",
    "explanation": "Reuel was Moses’ father-in-law, introduced by that name in Exodus 2:18 before also being called Jethro.",
    "reference": "Exodus 2:18; Numbers 10:29",
    "metadata": {
      "riddle_type": "Type the Name",
      "is_typed": true,
      "clues": [
        "Exodus 2:18: \"When they came home to their father [...], he said, ‘How is it that you have come back so soon today?’\"",
        "Name translates as \"friend of God\" or \"shepherd of God.\"",
        "Identical person as Jethro the priest of Midian."
      ],
      "hint": "Moses’ father-in-law introduced in Exodus 2:18 whose name means \"Friend of God.\"",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Raguel"
      ],
      "stage": 9,
      "stage_title": "Expert Riddle Chamber",
      "level_theme": "Complex Genealogical & Hereditary Enigmas",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l46-c1",
    "game_slug": "bible-riddles",
    "level": 46,
    "challenge_index": 1,
    "question_text": "THE ULTIMATE MASTER DOSSIER:\n\"I was a righteous king of Judah who instituted profound religious reforms, removing foreign altars and cutting down Asherim poles. In my fourteenth year, when Zerah the Ethiopian invaded with a million-man army and three hundred chariots, I cried out to Yahweh: ‘Lord, there is none like you to help, between the mighty and the weak. Help us, O Lord our God!’ God routed the million Ethiopians before us. However, in my old age, when Baasha king of Israel fortified Ramah against me, I panicked and sent silver and gold from the temple to Ben-hadad king of Syria to break his treaty. When the seer Hanani rebuked me for relying on Syria rather than God, I grew furious and threw the seer into prison stocks. In my thirty-ninth year, I developed a severe, fatal disease in my feet, yet even in my disease I sought not the Lord, but the physicians.\" Who am I?",
    "options": [
      "King Asa",
      "King Uzziah",
      "King Ahaz",
      "King Jehoram"
    ],
    "correct_answer": "King Asa",
    "explanation": "King Asa defeated a million Ethiopians by faith, but later relied on Syrian treaties and physicians for his diseased feet, dying without repenting.",
    "reference": "1 Kings 15:9–24; 2 Chronicles 14:1–16:14",
    "metadata": {
      "riddle_type": "Who Am I?",
      "is_typed": false,
      "clues": [
        "Third king of Judah after the division of the kingdom.",
        "Son of Abijah, father of Jehoshaphat.",
        "2 Chronicles 16:12: \"In the thirty-ninth year of his reign [...] became diseased in his feet... yet he did not seek the Lord, but the physicians.\""
      ],
      "hint": "Good king who defeated a million Ethiopians but sought physicians rather than God for his diseased feet.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Asa",
        "King Asa of Judah"
      ],
      "stage": 10,
      "stage_title": "The Ultimate Bible Riddle",
      "level_theme": "Forensic Master Dossiers",
      "difficulty": "hard",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l46-c2",
    "game_slug": "bible-riddles",
    "level": 46,
    "challenge_index": 2,
    "question_text": "THE ULTIMATE MASTER DOSSIER:\n\"I was crowned king of Judah at sixteen and reigned for fifty-two prosperous years. I fortified Jerusalem with towers, constructed war machines designed by skillful men to shoot arrows and great stones from the battlements, and dug many cisterns for vast cattle herds. But when I grew strong, I grew proud to my destruction. In flagrant violation of God’s law, I presumed to enter the temple of the Lord to burn incense on the Golden Altar. Azariah the high priest and eighty courageous priests confronted me, shouting: ‘It is not for you, [...], to burn incense to the Lord, but for the priests!’ While I stood raging with a censer in my hand, leprosy broke out on my forehead before their eyes, and I lived in isolation in a separate house until my death.\" Who am I?",
    "options": [
      "King Uzziah",
      "King Hezekiah",
      "King Josiah",
      "King Jehoshaphat"
    ],
    "correct_answer": "King Uzziah",
    "explanation": "King Uzziah was struck with forehead leprosy in the temple when he arrogantly attempted to usurp priestly duties by burning incense.",
    "reference": "2 Chronicles 26:1–23; Isaiah 6:1; 2 Kings 15:1–7",
    "metadata": {
      "riddle_type": "Who Am I?",
      "is_typed": false,
      "clues": [
        "Also called Azariah in 2 Kings 15:1–7.",
        "Father of Jotham.",
        "Isaiah saw his grand vision of the Lord on the throne \"in the year that King [...] died\" (Isaiah 6:1)."
      ],
      "hint": "Powerful king of Judah struck with leprosy on his forehead when he tried to burn incense.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Uzziah",
        "King Azariah",
        "Azariah"
      ],
      "stage": 10,
      "stage_title": "The Ultimate Bible Riddle",
      "level_theme": "Forensic Master Dossiers",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l46-c3",
    "game_slug": "bible-riddles",
    "level": 46,
    "challenge_index": 3,
    "question_text": "THE ULTIMATE MASTER DOSSIER:\n\"I was a prophet of Kiriath-jearim, son of Shemaiah, who prophesied in the name of the Lord against Jerusalem and the land of Judah in the exact same words as the prophet Jeremiah. When King Jehoiakim, his mighty men, and the princes heard my words, the king sought to put me to death. Hearing of the plot, I fled in terror to Egypt. However, King Jehoiakim dispatched Elnathan son of Achbor with men to Egypt; they extradited me from Egypt, brought me before King Jehoiakim, who executed me with the sword and cast my dead body into the burial place of the common people.\" Who was this martyr prophet whose courage is recorded in Jeremiah 26?",
    "options": [
      "Uriah son of Shemaiah",
      "Micaiah son of Imlah",
      "Hananiah son of Azzur",
      "Pashhur son of Immer"
    ],
    "correct_answer": "Uriah son of Shemaiah",
    "explanation": "Uriah son of Shemaiah prophesied like Jeremiah, fled to Egypt, but was extradited and executed by King Jehoiakim.",
    "reference": "Jeremiah 26:20–23",
    "metadata": {
      "riddle_type": "Who Am I?",
      "is_typed": false,
      "clues": [
        "Son of Shemaiah of Kiriath-jearim.",
        "Extradited from Egypt and slain with the sword by Jehoiakim.",
        "Contrasted with Jeremiah, who was protected by Ahikam son of Shaphan."
      ],
      "hint": "Martyr prophet extradited from Egypt and executed with the sword by King Jehoiakim.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Uriah",
        "Urijah",
        "Uriah the Prophet",
        "Urijah son of Shemaiah"
      ],
      "stage": 10,
      "stage_title": "The Ultimate Bible Riddle",
      "level_theme": "Forensic Master Dossiers",
      "difficulty": "master",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l46-c4",
    "game_slug": "bible-riddles",
    "level": 46,
    "challenge_index": 4,
    "question_text": "THE DOUBLE-MEANING RIDDLE:\nIn Exodus 17, when Moses held up the staff of God on the hill overlooking the battle against Amalek at Rephidim, as long as Moses held up his hand, Israel prevailed, but when he lowered his hand, Amalek prevailed. When Moses’ hands grew weary, two men took a stone for Moses to sit on and stood on either side of him, holding up his hands steadily until the going down of the sun, ensuring Joshua’s total victory. One of these men was Aaron the high priest. Who was the second man who held up Moses’ hand?",
    "options": [
      "Hur",
      "Joshua",
      "Caleb",
      "Eleazar"
    ],
    "correct_answer": "Hur",
    "explanation": "Hur, from the tribe of Judah, joined Aaron in holding up Moses’ weary arms to secure victory over Amalek at Rephidim.",
    "reference": "Exodus 17:10–12; 24:14; 31:2",
    "metadata": {
      "riddle_type": "The Double-Meaning Riddle",
      "is_typed": false,
      "clues": [
        "Grandfather of Bezalel, the master Tabernacle artisan (Exodus 31:2).",
        "Left in charge of Israel alongside Aaron when Moses ascended Mount Sinai (Exodus 24:14).",
        "From the royal tribe of Judah."
      ],
      "hint": "Man from Judah who held up Moses’ right hand alongside Aaron at Rephidim.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Hur of Judah"
      ],
      "stage": 10,
      "stage_title": "The Ultimate Bible Riddle",
      "level_theme": "Forensic Master Dossiers",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l46-c5",
    "game_slug": "bible-riddles",
    "level": 46,
    "challenge_index": 5,
    "question_text": "TYPE THE NAME — MINI-BOSS RIDDLE:\nI was an Edomite, the chief of King Saul’s herdsmen, who was detained before the Lord at the sanctuary of Nob when David arrived fleeing from Saul. I watched as Ahimelech the high priest gave David consecrated showbread and the wrapped sword of Goliath. Later, when Saul accused his servants of conspiring with David, I reported what I had witnessed. When Saul commanded his footmen to slaughter the priests of the Lord and they refused to lift their hands against the anointed priests, Saul turned to me and ordered, \"Turn and strike the priests!\" With savage brutality, I turned that day and slaughtered eighty-five men who wore the linen ephod, and put the priestly city of Nob to the sword, killing men, women, children, and infants. Who am I?",
    "options": [
      "Doeg",
      "Doeg the Edomite",
      "Cushan-rishathaim",
      "Hadad"
    ],
    "correct_answer": "Doeg",
    "explanation": "Doeg the Edomite was Saul’s ruthless chief herdsman who slaughtered eighty-five Aaronic priests and the city of Nob.",
    "reference": "1 Samuel 21:7; 22:9–19; Psalm 52:1–9",
    "metadata": {
      "riddle_type": "Type the Name",
      "is_typed": true,
      "clues": [
        "Chief herdsman of King Saul.",
        "Subject of David’s scathing denunciation in Psalm 52: \"Why do you boast of evil, O mighty man?\"",
        "Only Abiathar son of Ahimelech escaped his massacre."
      ],
      "hint": "Saul’s Edomite herdsman who slaughtered eighty-five priests of Nob.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Doeg the Edomite",
        "Doeg the Syrian"
      ],
      "stage": 10,
      "stage_title": "The Ultimate Bible Riddle",
      "level_theme": "Forensic Master Dossiers",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l47-c1",
    "game_slug": "bible-riddles",
    "level": 47,
    "challenge_index": 1,
    "question_text": "TYPE THE BIBLE BOOK:\nI am the only book in the entire sixty-six-book Protestant canon of Holy Scripture that does not contain the word \"God\" (Elohim) or \"Lord\" (Yahweh) even once in its original Hebrew text. Yet, my intricate plot of palace banquets, royal insomnia, hair’s-breadth timing, and poetic justice displays the invisible providence of God orchestrating the preservation of the Jewish people through a young queen and her cousin. Which book of the Bible am I?",
    "options": [
      "Esther",
      "Song of Solomon",
      "Ruth",
      "Ecclesiastes"
    ],
    "correct_answer": "Esther",
    "explanation": "The Book of Esther never once mentions the name of God, yet vividly demonstrates His sovereign providential care.",
    "reference": "Book of Esther (all chapters)",
    "metadata": {
      "riddle_type": "Type the Book",
      "is_typed": true,
      "clues": [
        "Set in the Persian capital of Susa.",
        "Instituted the annual Feast of Purim.",
        "Features King Ahasuerus, Haman, Mordecai, and Hadassah."
      ],
      "hint": "Old Testament book that never explicitly mentions the name of God.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Book of Esther",
        "Esth"
      ],
      "stage": 10,
      "stage_title": "The Ultimate Bible Riddle",
      "level_theme": "Obscure Canonical Traps",
      "difficulty": "easy",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l47-c2",
    "game_slug": "bible-riddles",
    "level": 47,
    "challenge_index": 2,
    "question_text": "TYPE THE BIBLE BOOK:\nI am the shortest book in the entire Old Testament, containing exactly one single chapter of twenty-one verses. I proclaim the utter destruction of the proud mountain kingdom of Edom (Mount Seir) because they gloated over the destruction of their brother Jacob and stood at the crossroads to cut off fugitives when Jerusalem fell. Which Minor Prophet book am I?",
    "options": [
      "Obadiah",
      "Nahum",
      "Haggai",
      "Habakkuk"
    ],
    "correct_answer": "Obadiah",
    "explanation": "Obadiah is the shortest book in the Old Testament (21 verses), devoted to pronouncing divine judgment on Edom.",
    "reference": "Obadiah 1:1–21",
    "metadata": {
      "riddle_type": "Type the Book",
      "is_typed": true,
      "clues": [
        "Proclaims: \"As you have done, it shall be done to you; your deeds shall return on your own head.\"",
        "Warns those who live in the clefts of the rock and say in their heart: \"Who will bring me down to the ground?\"",
        "Concludes: \"And the kingdom shall be the Lord’s.\""
      ],
      "hint": "Shortest Old Testament book (21 verses) prophesying doom on Edom.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Book of Obadiah",
        "Abdias",
        "Obad"
      ],
      "stage": 10,
      "stage_title": "The Ultimate Bible Riddle",
      "level_theme": "Obscure Canonical Traps",
      "difficulty": "medium",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l47-c3",
    "game_slug": "bible-riddles",
    "level": 47,
    "challenge_index": 3,
    "question_text": "TYPE THE BIBLE BOOK:\nMeasured by total Greek word count (only 245 words across 13 verses), I am the absolute shortest book in the entire New Testament canon—even shorter than 3 John or Philemon! Written by \"The elder\" to \"the elect lady and her children,\" I command love according to the commandments and strictly warn believers never to welcome or give a greeting to anyone who denies that Jesus Christ has come in the flesh. Which New Testament epistle am I?",
    "options": [
      "2 John",
      "3 John",
      "Philemon",
      "Jude"
    ],
    "correct_answer": "2 John",
    "explanation": "2 John is the shortest book in the New Testament by Greek word count (245 words), warning against welcoming false teachers.",
    "reference": "2 John 1:1–13",
    "metadata": {
      "riddle_type": "Type the Book",
      "is_typed": true,
      "clues": [
        "Shortest book in the New Testament by Greek words (245 words).",
        "Addressed to \"the elect lady and her children.\"",
        "Warns that whoever greets a deceiver takes part in his wicked works."
      ],
      "hint": "Shortest book in the New Testament by Greek word count, addressed to the elect lady.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Second John",
        "2nd John",
        "II John",
        "2Jn"
      ],
      "stage": 10,
      "stage_title": "The Ultimate Bible Riddle",
      "level_theme": "Obscure Canonical Traps",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l47-c4",
    "game_slug": "bible-riddles",
    "level": 47,
    "challenge_index": 4,
    "question_text": "TYPE THE BIBLE BOOK:\nI am a three-chapter prophetic book that reads like a dramatic, thunderous courtroom drama between Nineveh and God, written a century after the city repented under Jonah. I open with a majestic portrait of Yahweh whose way is in whirlwind and storm, declare that \"Nineveh is like a pool whose waters run away,\" and mock the bloody Assyrian capital: \"Where is the lions’ den, the feeding place of the young lions?\" Which Old Testament book am I?",
    "options": [
      "Nahum",
      "Jonah",
      "Micah",
      "Zephaniah"
    ],
    "correct_answer": "Nahum",
    "explanation": "Nahum prophesied the final, catastrophic fall and flooding of Nineveh, the bloody capital of Assyria.",
    "reference": "Nahum 1:1–3:19",
    "metadata": {
      "riddle_type": "Type the Book",
      "is_typed": true,
      "clues": [
        "Seventh of the Twelve Minor Prophets.",
        "Key verse 1:7: \"The Lord is good, a stronghold in the day of trouble; he knows those who take refuge in him.\"",
        "Author was an Elkoshite."
      ],
      "hint": "Prophetic book dedicated to the destruction of Nineveh, written by an Elkoshite.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Book of Nahum",
        "Nah"
      ],
      "stage": 10,
      "stage_title": "The Ultimate Bible Riddle",
      "level_theme": "Obscure Canonical Traps",
      "difficulty": "medium",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l47-c5",
    "game_slug": "bible-riddles",
    "level": 47,
    "challenge_index": 5,
    "question_text": "TYPE THE BIBLE BOOK — MINI-BOSS RIDDLE:\nIn chapter 3 of this prophetic book, the prophet offers a sublime musical liturgical prayer designated \"according to Shigionoth\" and marked three times with the musical pause \"Selah.\" The prayer depicts God coming from Teman and Mount Paran with brightness like the light and rays flashing from His hand, driving nations asunder, and concludes with an unshakeable confession of joy: \"Though the fig tree should not blossom, nor fruit be on the vines... yet I will rejoice in the Lord!\" In which book is this famous prayer recorded?",
    "options": [
      "Habakkuk",
      "Zephaniah",
      "Joel",
      "Haggai"
    ],
    "correct_answer": "Habakkuk",
    "explanation": "Habakkuk 3 is the famous liturgical prayer on Shigionoth celebrating God’s sovereign power and rejoicing even if the fig tree fails to blossom.",
    "reference": "Habakkuk 3:1–19",
    "metadata": {
      "riddle_type": "Type the Book",
      "is_typed": true,
      "clues": [
        "Contains the landmark verse: \"The righteous shall live by his faith\" (2:4).",
        "Addressed to the choirmaster with stringed instruments.",
        "Eighth of the Twelve Minor Prophets."
      ],
      "hint": "Book containing the chapter 3 prayer on Shigionoth and rejoicing though the fig tree fails.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Book of Habakkuk",
        "Hab",
        "Habacuc"
      ],
      "stage": 10,
      "stage_title": "The Ultimate Bible Riddle",
      "level_theme": "Obscure Canonical Traps",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l48-c1",
    "game_slug": "bible-riddles",
    "level": 48,
    "challenge_index": 1,
    "question_text": "TYPE THE NAME — GAUNTLET 1:\nI was an Ethiopian court official in the royal palace of King Zedekiah who heard that Jeremiah had been thrown into a miry dungeon cistern to starve. I took thirty men and old rags and ropes, lifted Jeremiah out of the mud, and was promised divine protection when Jerusalem fell to Babylon. Who am I?",
    "options": [
      "Ebed-Melech",
      "Baruch",
      "Gedaliah",
      "Pashhur"
    ],
    "correct_answer": "Ebed-Melech",
    "explanation": "Ebed-Melech the Ethiopian rescued Jeremiah from the cistern with rags and ropes and was granted divine deliverance.",
    "reference": "Jeremiah 38:7–13; 39:15–18",
    "metadata": {
      "riddle_type": "Type the Name",
      "is_typed": true,
      "clues": [
        "Name means \"servant of the king.\"",
        "Recorded in Jeremiah 38:7–13 and 39:15–18.",
        "Promised: \"You shall not be given into the hand of the men of whom you are afraid.\""
      ],
      "hint": "Ethiopian official who pulled Jeremiah out of the muddy cistern.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Ebedmelech",
        "Ebed Melech",
        "Ebed-melech the Ethiopian"
      ],
      "stage": 10,
      "stage_title": "The Ultimate Bible Riddle",
      "level_theme": "Pure Type-the-Answer Gauntlet",
      "difficulty": "master",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l48-c2",
    "game_slug": "bible-riddles",
    "level": 48,
    "challenge_index": 2,
    "question_text": "TYPE THE NAME — GAUNTLET 2:\nI am the amanuensis (scribe) who physically wrote down Paul’s Epistle to the Romans, inserting my own personal greeting in Romans 16:22: \"I, [...], who wrote this letter, greet you in the Lord.\" Who am I?",
    "options": [
      "Tertius",
      "Quartus",
      "Silas",
      "Tychicus"
    ],
    "correct_answer": "Tertius",
    "explanation": "Tertius was Paul’s secretary who penned Romans and added his own greeting.",
    "reference": "Romans 16:22",
    "metadata": {
      "riddle_type": "Type the Name",
      "is_typed": true,
      "clues": [
        "Name means \"third\" in Latin.",
        "Scribe of Paul’s greatest doctrinal letter.",
        "Recorded in Romans 16:22."
      ],
      "hint": "Paul’s scribe who wrote down Romans (name means \"Third\").",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Tertius of Iconium"
      ],
      "stage": 10,
      "stage_title": "The Ultimate Bible Riddle",
      "level_theme": "Pure Type-the-Answer Gauntlet",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l48-c3",
    "game_slug": "bible-riddles",
    "level": 48,
    "challenge_index": 3,
    "question_text": "TYPE THE NAME — GAUNTLET 3:\nI was the revered prophetess living in the Second Quarter of Jerusalem, wife of Shallum keeper of the royal wardrobe, who was consulted by King Josiah’s high priest and officials when the Book of the Law was rediscovered in the temple. Who am I?",
    "options": [
      "Huldah",
      "Deborah",
      "Miriam",
      "Anna"
    ],
    "correct_answer": "Huldah",
    "explanation": "Huldah the prophetess authenticated the rediscovered Book of the Law for King Josiah.",
    "reference": "2 Kings 22:14–20",
    "metadata": {
      "riddle_type": "Type the Name",
      "is_typed": true,
      "clues": [
        "Consulted instead of Jeremiah or Zephaniah.",
        "Prophesied peace for Josiah’s tender heart.",
        "Recorded in 2 Kings 22:14–20 and 2 Chronicles 34:22–28."
      ],
      "hint": "Prophetess consulted by King Josiah upon finding the Book of the Law.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Huldah the prophetess",
        "Holda"
      ],
      "stage": 10,
      "stage_title": "The Ultimate Bible Riddle",
      "level_theme": "Pure Type-the-Answer Gauntlet",
      "difficulty": "master",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l48-c4",
    "game_slug": "bible-riddles",
    "level": 48,
    "challenge_index": 4,
    "question_text": "TYPE THE NAME — GAUNTLET 4:\nI was the artisan from the tribe of Judah, son of Uri, son of Hur, whom God specifically filled with the Holy Spirit to design and construct the gold, silver, bronze, wood, and gemstone furniture of the wilderness Tabernacle. Who am I?",
    "options": [
      "Bezalel",
      "Oholiab",
      "Hiram",
      "Hur"
    ],
    "correct_answer": "Bezalel",
    "explanation": "Bezalel was the master craftsman filled with the Spirit to build the Tabernacle.",
    "reference": "Exodus 31:1–5",
    "metadata": {
      "riddle_type": "Type the Name",
      "is_typed": true,
      "clues": [
        "First person in Scripture specifically described as \"filled with the Spirit of God.\"",
        "Exodus 31:1–5.",
        "Partnered with Oholiab of Dan."
      ],
      "hint": "Master craftsman of the Tabernacle from the tribe of Judah.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "Bezaleel"
      ],
      "stage": 10,
      "stage_title": "The Ultimate Bible Riddle",
      "level_theme": "Pure Type-the-Answer Gauntlet",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l48-c5",
    "game_slug": "bible-riddles",
    "level": 48,
    "challenge_index": 5,
    "question_text": "TYPE THE NAME — GAUNTLET 5:\nI was the faithful Christian of Ephesus who was not ashamed of Paul’s chains. When Paul was imprisoned in a cold dungeon in Rome and deserted by all others in Asia, I searched diligently for him throughout the imperial city until I found him, and often refreshed his spirit. Paul prayed that the Lord would grant mercy to my household. Who am I?",
    "options": [
      "Onesiphorus",
      "Epaphras",
      "Tychicus",
      "Philemon"
    ],
    "correct_answer": "Onesiphorus",
    "explanation": "Onesiphorus searched diligently for Paul in Rome, refreshed him in prison, and was not ashamed of his chains.",
    "reference": "2 Timothy 1:16–18; 4:19",
    "metadata": {
      "riddle_type": "Type the Name",
      "is_typed": true,
      "clues": [
        "Commended in 2 Timothy 1:16–18.",
        "Searched Rome diligently to find Paul in prison.",
        "Contrasted with Phygelus and Hermogenes."
      ],
      "hint": "Faithful disciple who searched Rome to refresh imprisoned Paul.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Onesiforos"
      ],
      "stage": 10,
      "stage_title": "The Ultimate Bible Riddle",
      "level_theme": "Pure Type-the-Answer Gauntlet",
      "difficulty": "master",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l49-c1",
    "game_slug": "bible-riddles",
    "level": 49,
    "challenge_index": 1,
    "question_text": "THE IMPOSSIBLE DESCRIPTION:\nI was a priest who served as high priest in Israel after Eli died, yet King Solomon banished me to my family fields in Anathoth because I had supported Adonijah’s coup instead of Solomon. In 1 Kings 2:27, Scripture notes that Solomon’s banishment of me fulfilled the ancient curse that Yahweh had spoken at Shiloh against the house of Eli over a century earlier! Who was this high priest who escaped Saul’s massacre at Nob with an ephod, served David for decades, but was banished by Solomon?",
    "options": [
      "Abiathar",
      "Zadok",
      "Ahimelech",
      "Phinehas"
    ],
    "correct_answer": "Abiathar",
    "explanation": "Abiathar was the sole survivor of Nob who served as David’s high priest; his banishment by Solomon fulfilled the judgment against Eli’s house.",
    "reference": "1 Samuel 22:20–23; 23:6; 1 Kings 2:26–27",
    "metadata": {
      "riddle_type": "The Impossible Description",
      "is_typed": false,
      "clues": [
        "Son of Ahimelech; sole survivor of Doeg’s massacre at Nob.",
        "Carried the high priestly ephod to David in the cave of Adullam.",
        "Deposed by Solomon, transferring the high priesthood permanently to Zadok."
      ],
      "hint": "Sole survivor of Nob who was David’s high priest and was later banished by Solomon.",
      "testament": "Old Testament",
      "acceptedAlternatives": [
        "High Priest Abiathar"
      ],
      "stage": 10,
      "stage_title": "The Ultimate Bible Riddle",
      "level_theme": "Deep Scriptural Synthesis",
      "difficulty": "hard",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l49-c2",
    "game_slug": "bible-riddles",
    "level": 49,
    "challenge_index": 2,
    "question_text": "THE DOUBLE-MEANING RIDDLE:\nIn Zechariah 4 and Revelation 11, two prophetic figures are represented as \"two olive trees and two lampstands that stand before the Lord of the earth.\" In Zechariah, they pour golden oil from themselves to feed the seven-branched lampstand, identified as the two anointed ones (sons of oil)—representing Zerubbabel the royal governor and Joshua the high priest. In Revelation 11, who are these two figures with power to shut the sky against rain and turn waters into blood during their 1,260-day prophecy?",
    "options": [
      "The Two Witnesses",
      "The Two Archangels",
      "The Two Olive Branches",
      "The Two Cherubim"
    ],
    "correct_answer": "The Two Witnesses",
    "explanation": "The Two Witnesses in Revelation 11 are portrayed as the two olive trees and lampstands who prophesy with great power before being martyred and resurrected.",
    "reference": "Zechariah 4:1–14; Revelation 11:3–12",
    "metadata": {
      "riddle_type": "The Double-Meaning Riddle",
      "is_typed": false,
      "clues": [
        "The Two Witnesses of Revelation 11.",
        "Clothed in sackcloth, perform miracles echoing Elijah and Moses.",
        "Killed by the beast from the bottomless pit, their corpses lie in the street for three and a half days before being resurrected."
      ],
      "hint": "Prophetic pair in Revelation 11 depicted as the two olive trees and two lampstands.",
      "testament": "Both",
      "acceptedAlternatives": [
        "Two Witnesses",
        "The 2 Witnesses",
        "Two Prophets"
      ],
      "stage": 10,
      "stage_title": "The Ultimate Bible Riddle",
      "level_theme": "Deep Scriptural Synthesis",
      "difficulty": "hard",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l49-c3",
    "game_slug": "bible-riddles",
    "level": 49,
    "challenge_index": 3,
    "question_text": "WHO AM I?\nI was an Ethiopian court eunuch and high minister in charge of all the royal treasury of Candace, queen of the Ethiopians. Traveling on the desert road from Jerusalem to Gaza, I was reading Isaiah 53 in my chariot: \"Like a sheep he was led to the slaughter and like a lamb before its shearer is silent, so he opens not his mouth.\" When Philip ran to my chariot and asked, \"Do you understand what you are reading?\", I replied: \"How can I, unless someone guides me?\" Philip preached Jesus to me, and I was baptized in roadside water, going on my way rejoicing. Who am I (by my biblical title)?",
    "options": [
      "The Ethiopian Eunuch",
      "Ebed-Melech",
      "Simon of Cyrene",
      "Lucius of Cyrene"
    ],
    "correct_answer": "The Ethiopian Eunuch",
    "explanation": "The Ethiopian Eunuch was the royal treasurer of Queen Candace baptized by Philip after learning of Christ from Isaiah 53.",
    "reference": "Acts 8:26–39",
    "metadata": {
      "riddle_type": "Who Am I?",
      "is_typed": false,
      "clues": [
        "The Ethiopian Eunuch (or Royal Official of Candace).",
        "High finance minister of Nubia/Meroë.",
        "Acts 8:26–39."
      ],
      "hint": "Royal treasurer of Queen Candace baptized by Philip on the desert road.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Ethiopian Eunuch",
        "The Ethiopian Official",
        "Treasurer of Candace",
        "The Eunuch of Candace"
      ],
      "stage": 10,
      "stage_title": "The Ultimate Bible Riddle",
      "level_theme": "Deep Scriptural Synthesis",
      "difficulty": "easy",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l49-c4",
    "game_slug": "bible-riddles",
    "level": 49,
    "challenge_index": 4,
    "question_text": "THE EVENT RIDDLE:\nWhen the Apostle Paul met with the elders of the church of Ephesus at Miletus in Acts 20, he gave a tearful farewell discourse warning of fierce wolves arising from within the flock. He concluded his address by quoting a precious beatitude spoken by the Lord Jesus Christ that is found nowhere in any of the Four Gospels: \"In all things I have shown you that by working hard in this way we must help the weak and remember the words of the Lord Jesus, how he himself said, ‘[...]’\" What was this unwritten Gospel beatitude of Jesus?",
    "options": [
      "It is more blessed to give than to receive",
      "Blessed are the pure in heart, for they shall see God",
      "Blessed are those who have not seen and yet have believed",
      "Give, and it will be given to you"
    ],
    "correct_answer": "It is more blessed to give than to receive",
    "explanation": "Paul quoted an otherwise unrecorded beatitude of Jesus: \"It is more blessed to give than to receive\" in his farewell to the Ephesian elders.",
    "reference": "Acts 20:35",
    "metadata": {
      "riddle_type": "The Event Riddle",
      "is_typed": false,
      "clues": [
        "Acts 20:35.",
        "An agraphon (saying of Jesus outside the Gospels).",
        "Contrast between giving and receiving."
      ],
      "hint": "Famous saying of Jesus quoted by Paul in Acts 20:35: \"It is more blessed to...\"",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "It is more blessed to give than to receive.",
        "More blessed to give than to receive",
        "It is better to give than to receive"
      ],
      "stage": 10,
      "stage_title": "The Ultimate Bible Riddle",
      "level_theme": "Deep Scriptural Synthesis",
      "difficulty": "medium",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l49-c5",
    "game_slug": "bible-riddles",
    "level": 49,
    "challenge_index": 5,
    "question_text": "TYPE THE NAME — MINI-BOSS RIDDLE:\nI was a wealthy Christian merchant from Cyprus living in Jerusalem whose home served as the primary prayer and gathering headquarters for the early church in Jerusalem. It was to my home that Peter fled after being delivered by the angel from Herod’s prison in Acts 12. My cousin was Barnabas (the Son of Encouragement), and my son was the author of the second Gospel who traveled with Paul and Barnabas and was later restored as \"useful for ministry.\" What was my personal name (the mother of John Mark)?",
    "options": [
      "Mary",
      "Mary mother of John Mark",
      "Martha",
      "Salome"
    ],
    "correct_answer": "Mary mother of John Mark",
    "explanation": "Mary the mother of John Mark hosted the Jerusalem house-church where believers prayed for Peter’s release from prison.",
    "reference": "Acts 12:12",
    "metadata": {
      "riddle_type": "Type the Name",
      "is_typed": true,
      "clues": [
        "Acts 12:12: \"he went to the house of [...], the mother of John whose other name was Mark.\"",
        "Rhoda was her household maid.",
        "Held the midnight prayer meeting for imprisoned Peter."
      ],
      "hint": "Mother of Gospel writer John Mark whose Jerusalem house was the church’s prayer center.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Mary",
        "Mary the mother of John Mark",
        "Mary of Jerusalem"
      ],
      "stage": 10,
      "stage_title": "The Ultimate Bible Riddle",
      "level_theme": "Deep Scriptural Synthesis",
      "difficulty": "master",
      "timerSeconds": 25,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l50-c1",
    "game_slug": "bible-riddles",
    "level": 50,
    "challenge_index": 1,
    "question_text": "THE GRAND MASTER RIDDLE — 1 OF 5:\n\"I was foreshadowed as the Seed of the woman who would bruise the serpent’s head (Genesis 3:15), the Passover Lamb whose blood shielded Israel from death in Egypt, the Scapegoat bearing the nation’s sins into the wilderness, the Bronze Serpent lifted on a pole to heal all who look in faith, the Rock struck in the desert to gush living water, the Prophet like Moses from among their brethren, the Son of David whose throne endures forever, the Suffering Servant pierced for our transgressions in Isaiah 53, and the Lion of the tribe of Judah.\" Who am I?",
    "options": [
      "Jesus Christ",
      "Moses",
      "King David",
      "Elijah"
    ],
    "correct_answer": "Jesus Christ",
    "explanation": "Jesus Christ is the grand fulfillment of every shadow, covenant, prophecy, and sacrifice across all Scripture.",
    "reference": "Luke 24:27, 44–47; John 5:39; Hebrews 1:1–3",
    "metadata": {
      "riddle_type": "The Ultimate Bible Riddle",
      "is_typed": false,
      "clues": [
        "The central Person of all 66 books of the Bible.",
        "Jesus told the Emmaus disciples that all the Scriptures testify of Him.",
        "The Messiah, the Son of the Living God."
      ],
      "hint": "The central Messiah and Redeemer prophesied across all 66 books.",
      "testament": "Both",
      "acceptedAlternatives": [
        "Jesus",
        "Christ",
        "The Messiah",
        "Yeshua"
      ],
      "stage": 10,
      "stage_title": "The Ultimate Bible Riddle",
      "level_theme": "The Grand Master Final Boss",
      "difficulty": "master",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l50-c2",
    "game_slug": "bible-riddles",
    "level": 50,
    "challenge_index": 2,
    "question_text": "THE GRAND MASTER RIDDLE — 2 OF 5:\n\"In the opening chapter of Revelation, I appeared to the Apostle John in exile on the island of Patmos on the Lord’s Day. Clothed with a long robe and with a golden sash around my chest, my head and hairs were white like wool, white as snow; my eyes were like a flame of fire, my feet like burnished bronze refined in a furnace, my voice like the roar of many waters, and out of my mouth came a sharp two-edged sword. When John saw me, he fell at my feet as though dead. I laid my right hand on him, saying: ‘Fear not; I am the first and the last, and the living one. I died, and behold I am alive forevermore, and I have the keys of Death and Hades.’\" What title did I take in this vision?",
    "options": [
      "The Son of Man",
      "The Archangel Michael",
      "The Ancient of Days",
      "The Angel of the Covenant"
    ],
    "correct_answer": "The Son of Man",
    "explanation": "The glorified Christ revealed Himself to John on Patmos as the Son of Man holding the keys of Death and Hades.",
    "reference": "Revelation 1:12–18; Daniel 7:13",
    "metadata": {
      "riddle_type": "The Ultimate Bible Riddle",
      "is_typed": false,
      "clues": [
        "Revelation 1:12–18.",
        "Echoes Daniel 7:13–14.",
        "Identified as \"one like a son of man.\""
      ],
      "hint": "The glorified Christ who appeared to John on Patmos holding the keys of Death and Hades.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Son of Man",
        "One like a son of man",
        "The Glorified Christ"
      ],
      "stage": 10,
      "stage_title": "The Ultimate Bible Riddle",
      "level_theme": "The Grand Master Final Boss",
      "difficulty": "master",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l50-c3",
    "game_slug": "bible-riddles",
    "level": 50,
    "challenge_index": 3,
    "question_text": "THE GRAND MASTER RIDDLE — 3 OF 5:\n\"In Revelation 21–22, I am the holy city, the New Jerusalem, coming down out of heaven from God, prepared as a bride adorned for her husband. I have the glory of God, radiance like a most rare jewel, a great high wall with twelve gates guarded by twelve angels with the names of the twelve tribes of Israel inscribed, and twelve foundations bearing the names of the twelve apostles of the Lamb. My streets are pure gold transparent like glass, I have no temple for the Lord God the Almighty and the Lamb are my temple, and the river of the water of life flows from the throne down the middle of my street with the tree of life bearing twelve kinds of fruit.\" What am I designated as in Revelation 21:9?",
    "options": [
      "The Bride, the Wife of the Lamb",
      "The Earthly Jerusalem",
      "Solomon’s Temple",
      "The Garden of Eden"
    ],
    "correct_answer": "The Bride, the Wife of the Lamb",
    "explanation": "The New Jerusalem is explicitly introduced in Revelation 21:9 as \"the Bride, the wife of the Lamb,\" the radiant eternal dwelling of God with His people.",
    "reference": "Revelation 21:1–27; 22:1–5",
    "metadata": {
      "riddle_type": "The Ultimate Bible Riddle",
      "is_typed": false,
      "clues": [
        "The Bride, the wife of the Lamb.",
        "The New Jerusalem / Heavenly City.",
        "The eternal dwelling of God with redeemed humanity."
      ],
      "hint": "The New Jerusalem described as a bride adorned for her husband.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "The Bride of Christ",
        "The New Jerusalem",
        "The Wife of the Lamb",
        "New Jerusalem"
      ],
      "stage": 10,
      "stage_title": "The Ultimate Bible Riddle",
      "level_theme": "The Grand Master Final Boss",
      "difficulty": "master",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l50-c4",
    "game_slug": "bible-riddles",
    "level": 50,
    "challenge_index": 4,
    "question_text": "THE GRAND MASTER RIDDLE — 4 OF 5:\n\"In Revelation 19:11–16, heaven stands open and I appear riding upon a white horse. I am called Faithful and True, and in righteousness I judge and make war. My eyes are like a flame of fire, and on my head are many diadems; I am clothed in a robe dipped in blood, and the armies of heaven arrayed in fine linen, white and pure, follow me on white horses. From my mouth comes a sharp sword to strike down the nations, and I tread the winepress of the fury of the wrath of God the Almighty. On my robe and on my thigh I have a name written: ‘KING OF KINGS AND LORD OF LORDS.’ What is the title given to me in verse 13 as the eternal revelation of God?\"",
    "options": [
      "The Word of God",
      "The King of Glory",
      "The Prince of Peace",
      "The Ancient of Days"
    ],
    "correct_answer": "The Word of God",
    "explanation": "The rider on the white horse in Revelation 19:13 is named \"The Word of God,\" returning in triumph as King of Kings and Lord of Lords.",
    "reference": "Revelation 19:11–16; John 1:1, 14",
    "metadata": {
      "riddle_type": "The Ultimate Bible Riddle",
      "is_typed": false,
      "clues": [
        "Revelation 19:13.",
        "Echoes John 1:1 (\"In the beginning was the Word...\").",
        "Designated: \"The Word of God.\""
      ],
      "hint": "Title given to the conquering rider on the white horse in Revelation 19:13.",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "Word of God",
        "Logos of God",
        "The Logos"
      ],
      "stage": 10,
      "stage_title": "The Ultimate Bible Riddle",
      "level_theme": "The Grand Master Final Boss",
      "difficulty": "master",
      "timerSeconds": 30,
      "curated": true
    }
  },
  {
    "id": "bible-riddles-l50-c5",
    "game_slug": "bible-riddles",
    "level": 50,
    "challenge_index": 5,
    "question_text": "THE GRAND MASTER RIDDLE — 5 OF 5 (FINAL BOSS):\nIn the closing chapter of the entire Bible (Revelation 22:16), Jesus sends His angel to testify these things to the churches and proclaims His climactic twofold messianic title, uniting His eternal divine pre-existence as Creator with His human Davidic royalty, followed by His dawn-bringing promise: \"I, Jesus, have sent my angel to testify to you these things for the churches. I am the root and the offspring of David, the [...].\" What is this glorious three-word dawn title proclaimed by Jesus in Revelation 22:16?",
    "options": [
      "Bright and Morning Star",
      "Light of the World",
      "Sun of Righteousness",
      "Alpha and Omega"
    ],
    "correct_answer": "Bright and Morning Star",
    "explanation": "Jesus proclaims Himself \"the root and the offspring of David, the bright and morning star\" in Revelation 22:16, concluding the canon of Holy Scripture.",
    "reference": "Revelation 22:16",
    "metadata": {
      "riddle_type": "Type the Name",
      "is_typed": true,
      "clues": [
        "Revelation 22:16.",
        "Followed by: \"The Spirit and the Bride say, ‘Come.’\"",
        "Symbolizes the eternal dawn that banishes darkness forever."
      ],
      "hint": "Glorious dawn title of Jesus in Revelation 22:16: \"the bright and...\"",
      "testament": "New Testament",
      "acceptedAlternatives": [
        "The Bright and Morning Star",
        "Bright Morning Star",
        "The Morning Star",
        "Morning Star"
      ],
      "stage": 10,
      "stage_title": "The Ultimate Bible Riddle",
      "level_theme": "The Grand Master Final Boss",
      "difficulty": "master",
      "timerSeconds": 25,
      "curated": true
    }
  }
];
