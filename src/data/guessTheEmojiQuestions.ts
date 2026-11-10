// Guess The Emoji Master Question Bank
// 50 Levels x 5 Challenges = 250 Curated Scripture Challenges
// Advanced Difficulty Upgrade with 10 Stages, Forensic Investigation Dossiers, Dynamic Timers, and Typed Challenges

export interface EmojiChallengeItem {
  id: string;
  game_slug: 'guess-the-emoji';
  level: number;
  challenge_index: number;
  question_text: string;
  options: string[];
  correct_answer: string;
  explanation: string;
  reference: string;
  metadata: {
    stage: number;
    stage_title: string;
    level_title: string;
    puzzle_type: 'no_obvious_clues' | 'forgotten_person' | 'five_detail_mystery' | 'similar_story_trap' | 'exact_person' | 'cross_testament' | 'scripture_detective';
    emojis: string;
    prompt?: string;
    testament: 'Old Testament' | 'New Testament' | 'Cross-Testament';
    difficulty: 'Moderate' | 'Difficult' | 'Very Difficult' | 'Expert' | 'Master' | 'Extreme Master';
    timerSeconds: number;
    points: number;
    is_typed?: boolean;
    dossier?: string;
    acceptedAlternatives?: string[];
    hint1?: string;
    hint2?: string;
    curated: true;
  };
}

export const GUESS_THE_EMOJI_QUESTIONS: EmojiChallengeItem[] = [
  {
    "id": "guess-the-emoji-l1-c1",
    "game_slug": "guess-the-emoji",
    "level": 1,
    "challenge_index": 1,
    "question_text": "🧂 👀 🏙️ 🏃‍♀️",
    "options": [
      "Lot's wife looking back",
      "Destruction of Jericho",
      "Sarah laughing in tent",
      "Miriam watching the river"
    ],
    "correct_answer": "Lot's wife looking back",
    "explanation": "Genesis 19:26 records: \"But his wife looked back from behind him, and she became a pillar of salt.\"",
    "reference": "Genesis 19:26",
    "metadata": {
      "stage": 1,
      "stage_title": "Moderate Foundations",
      "level_title": "Patriarchal & Pentateuch Puzzles",
      "puzzle_type": "no_obvious_clues",
      "emojis": "🧂 👀 🏙️ 🏃‍♀️",
      "prompt": "Identify the tragic judgment from Genesis:",
      "testament": "Old Testament",
      "difficulty": "Moderate",
      "timerSeconds": 45,
      "points": 100,
      "is_typed": false,
      "acceptedAlternatives": [
        "Lot's wife looking back",
        "Lot's wife",
        "Pillar of salt"
      ],
      "hint1": "A backward glance at a doomed burning city.",
      "hint2": "Genesis 19:26: became a pillar of salt.",
      "curated": true
    }
  },
  {
    "id": "guess-the-emoji-l1-c2",
    "game_slug": "guess-the-emoji",
    "level": 1,
    "challenge_index": 2,
    "question_text": "🪜 👼 🪨 😴 🌌",
    "options": [
      "Jacob's ladder at Bethel",
      "Moses receiving the Law",
      "Elijah's vision at Horeb",
      "Daniel's night vision"
    ],
    "correct_answer": "Jacob's ladder at Bethel",
    "explanation": "Genesis 28:12 records Jacob dreaming of a ladder reaching to heaven with angels of God ascending and descending upon it.",
    "reference": "Genesis 28:10-19",
    "metadata": {
      "stage": 1,
      "stage_title": "Moderate Foundations",
      "level_title": "Patriarchal & Pentateuch Puzzles",
      "puzzle_type": "five_detail_mystery",
      "emojis": "🪜 👼 🪨 😴 🌌",
      "prompt": "Identify the vision and stone pillow:",
      "testament": "Old Testament",
      "difficulty": "Moderate",
      "timerSeconds": 45,
      "points": 100,
      "is_typed": false,
      "acceptedAlternatives": [
        "Jacob's ladder at Bethel",
        "Jacob's ladder",
        "Bethel"
      ],
      "hint1": "A fleeing patriarch sleeping on a stone pillow.",
      "hint2": "Genesis 28: angels ascending on a stairway.",
      "curated": true
    }
  },
  {
    "id": "guess-the-emoji-l1-c3",
    "game_slug": "guess-the-emoji",
    "level": 1,
    "challenge_index": 3,
    "question_text": "🧥 🎨 🩸 🐐 💔",
    "options": [
      "Joseph's coat dipped in blood",
      "Tamar's garment of diverse colours",
      "Jonathan giving David his robe",
      "Aaron's holy garments"
    ],
    "correct_answer": "Joseph's coat dipped in blood",
    "explanation": "Genesis 37:31 records that Joseph's brothers killed a kid of the goats and dipped his coat of many colours in the blood to deceive Jacob.",
    "reference": "Genesis 37:31-33",
    "metadata": {
      "stage": 1,
      "stage_title": "Moderate Foundations",
      "level_title": "Patriarchal & Pentateuch Puzzles",
      "puzzle_type": "no_obvious_clues",
      "emojis": "🧥 🎨 🩸 🐐 💔",
      "prompt": "Identify the deceptive evidence presented to a father:",
      "testament": "Old Testament",
      "difficulty": "Moderate",
      "timerSeconds": 45,
      "points": 100,
      "is_typed": false,
      "acceptedAlternatives": [
        "Joseph's coat dipped in blood",
        "Joseph's coat",
        "Coat of many colors"
      ],
      "hint1": "Tunic of many colours stained with goat blood.",
      "hint2": "Genesis 37:31.",
      "curated": true
    }
  },
  {
    "id": "guess-the-emoji-l1-c4",
    "game_slug": "guess-the-emoji",
    "level": 1,
    "challenge_index": 4,
    "question_text": "🔥 🌿 👟 🏔️ 🗣️",
    "options": [
      "The burning bush at Horeb",
      "Mount Sinai giving of the Law",
      "Elijah at Mount Carmel",
      "Abraham on Mount Moriah"
    ],
    "correct_answer": "The burning bush at Horeb",
    "explanation": "Exodus 3:2-5 records the angel of the LORD in a flame of fire out of the midst of a bush that burned but was not consumed, commanding Moses to put off his shoes.",
    "reference": "Exodus 3:1-5",
    "metadata": {
      "stage": 1,
      "stage_title": "Moderate Foundations",
      "level_title": "Patriarchal & Pentateuch Puzzles",
      "puzzle_type": "five_detail_mystery",
      "emojis": "🔥 🌿 👟 🏔️ 🗣️",
      "prompt": "Identify the miraculous encounter requiring removed footwear:",
      "testament": "Old Testament",
      "difficulty": "Moderate",
      "timerSeconds": 45,
      "points": 100,
      "is_typed": false,
      "acceptedAlternatives": [
        "The burning bush at Horeb",
        "The burning bush",
        "Burning bush"
      ],
      "hint1": "A plant on fire that is not consumed.",
      "hint2": "Exodus 3: put off thy shoes from off thy feet.",
      "curated": true
    }
  },
  {
    "id": "guess-the-emoji-l1-c5",
    "game_slug": "guess-the-emoji",
    "level": 1,
    "challenge_index": 5,
    "question_text": "🚶‍♂️ 🤝 ☁️ ✨ 🚫⚰️",
    "options": [
      "Enoch translated without dying",
      "Elijah taken up in chariot",
      "Moses buried by God",
      "Melchizedek without genealogy"
    ],
    "correct_answer": "Enoch translated without dying",
    "explanation": "Genesis 5:24 and Hebrews 11:5 declare: \"And Enoch walked with God: and he was not; for God took him... that he should not see death.\"",
    "reference": "Genesis 5:24; Hebrews 11:5",
    "metadata": {
      "stage": 1,
      "stage_title": "Moderate Foundations",
      "level_title": "Patriarchal & Pentateuch Puzzles",
      "puzzle_type": "forgotten_person",
      "emojis": "🚶‍♂️ 🤝 ☁️ ✨ 🚫⚰️",
      "prompt": "Identify the antediluvian patriarch who bypassed death:",
      "testament": "Old Testament",
      "difficulty": "Difficult",
      "timerSeconds": 60,
      "points": 150,
      "is_typed": false,
      "acceptedAlternatives": [
        "Enoch translated without dying",
        "Enoch",
        "Translation of Enoch"
      ],
      "hint1": "The seventh from Adam who walked with God.",
      "hint2": "Genesis 5:24: he was not; for God took him.",
      "curated": true
    }
  },
  {
    "id": "guess-the-emoji-l2-c1",
    "game_slug": "guess-the-emoji",
    "level": 2,
    "challenge_index": 1,
    "question_text": "🍞 🌅 🫙 🪱 🚫",
    "options": [
      "The daily manna in the wilderness",
      "The showbread of the tabernacle",
      "The feast of unleavened bread",
      "Elijah's cake of meal"
    ],
    "correct_answer": "The daily manna in the wilderness",
    "explanation": "Exodus 16:14-20 describes the morning dew yielding manna that bred worms if kept overnight contrary to command.",
    "reference": "Exodus 16:14-20",
    "metadata": {
      "stage": 1,
      "stage_title": "Moderate Foundations",
      "level_title": "Exodus & Wilderness Details",
      "puzzle_type": "no_obvious_clues",
      "emojis": "🍞 🌅 🫙 🪱 🚫",
      "prompt": "Identify the heavenly food with strict gathering rules:",
      "testament": "Old Testament",
      "difficulty": "Moderate",
      "timerSeconds": 45,
      "points": 100,
      "is_typed": false,
      "acceptedAlternatives": [
        "The daily manna in the wilderness",
        "Manna",
        "The manna"
      ],
      "hint1": "Bread from heaven gathered daily each morning.",
      "hint2": "Exodus 16:20: it bred worms, and stank.",
      "curated": true
    }
  },
  {
    "id": "guess-the-emoji-l2-c2",
    "game_slug": "guess-the-emoji",
    "level": 2,
    "challenge_index": 2,
    "question_text": "🐍 🪵 🪙 👀 🩺",
    "options": [
      "The bronze serpent on a pole",
      "Moses' rod turning into a serpent",
      "Aaron's rod swallowing magicians' rods",
      "Paul's viper on Malta"
    ],
    "correct_answer": "The bronze serpent on a pole",
    "explanation": "Numbers 21:8-9 records Moses making a serpent of brass and putting it upon a pole; when bitten people looked upon it, they lived.",
    "reference": "Numbers 21:8-9",
    "metadata": {
      "stage": 1,
      "stage_title": "Moderate Foundations",
      "level_title": "Exodus & Wilderness Details",
      "puzzle_type": "five_detail_mystery",
      "emojis": "🐍 🪵 🪙 👀 🩺",
      "prompt": "Identify the remedy for venomous serpent bites:",
      "testament": "Old Testament",
      "difficulty": "Moderate",
      "timerSeconds": 45,
      "points": 100,
      "is_typed": false,
      "acceptedAlternatives": [
        "The bronze serpent on a pole",
        "Bronze serpent",
        "Brazen serpent"
      ],
      "hint1": "Look and live: metal serpent elevated on wood.",
      "hint2": "Numbers 21:9.",
      "curated": true
    }
  },
  {
    "id": "guess-the-emoji-l2-c3",
    "game_slug": "guess-the-emoji",
    "level": 2,
    "challenge_index": 3,
    "question_text": "👩 🗣️ 😡 ❄️ ⛺",
    "options": [
      "Miriam struck with leprosy for murmuring",
      "Sarah casting out Hagar",
      "Zipporah circumcising Moses' son",
      "Michal despising David"
    ],
    "correct_answer": "Miriam struck with leprosy for murmuring",
    "explanation": "Numbers 12:1-10 records Miriam and Aaron speaking against Moses regarding his Ethiopian wife; Miriam became leprous, white as snow.",
    "reference": "Numbers 12:1-10",
    "metadata": {
      "stage": 1,
      "stage_title": "Moderate Foundations",
      "level_title": "Exodus & Wilderness Details",
      "puzzle_type": "exact_person",
      "emojis": "👩 🗣️ 😡 ❄️ ⛺",
      "prompt": "Identify the prophetess struck white as snow:",
      "testament": "Old Testament",
      "difficulty": "Difficult",
      "timerSeconds": 60,
      "points": 150,
      "is_typed": false,
      "acceptedAlternatives": [
        "Miriam struck with leprosy for murmuring",
        "Miriam",
        "Leprosy of Miriam"
      ],
      "hint1": "Moses' sister excluded from camp for 7 days.",
      "hint2": "Numbers 12:10: Miriam became leprous, white as snow.",
      "curated": true
    }
  },
  {
    "id": "guess-the-emoji-l2-c4",
    "game_slug": "guess-the-emoji",
    "level": 2,
    "challenge_index": 4,
    "question_text": "🕳️ 👥 ⛺ 😱 📉",
    "options": [
      "Korah's rebellion swallowed by the earth",
      "Fall of Jericho walls",
      "Destruction of Sodom",
      "Achan buried under stones"
    ],
    "correct_answer": "Korah's rebellion swallowed by the earth",
    "explanation": "Numbers 16:31-33 records the earth opening her mouth and swallowing Korah, Dathan, Abiram, their tents, and their households alive into the pit.",
    "reference": "Numbers 16:31-33",
    "metadata": {
      "stage": 1,
      "stage_title": "Moderate Foundations",
      "level_title": "Exodus & Wilderness Details",
      "puzzle_type": "no_obvious_clues",
      "emojis": "🕳️ 👥 ⛺ 😱 📉",
      "prompt": "Identify the sudden chasm swallowing rebels:",
      "testament": "Old Testament",
      "difficulty": "Difficult",
      "timerSeconds": 60,
      "points": 150,
      "is_typed": false,
      "acceptedAlternatives": [
        "Korah's rebellion swallowed by the earth",
        "Rebellion of Korah",
        "Korah"
      ],
      "hint1": "The earth opens its mouth beneath tents.",
      "hint2": "Numbers 16:32.",
      "curated": true
    }
  },
  {
    "id": "guess-the-emoji-l2-c5",
    "game_slug": "guess-the-emoji",
    "level": 2,
    "challenge_index": 5,
    "question_text": "Type the name of the rock-water site from Exodus 17 where Israel tempted the LORD saying, \"Is the LORD among us, or not?\"",
    "options": [],
    "correct_answer": "Massah and Meribah",
    "explanation": "Exodus 17:7 states: \"And he called the name of the place Massah, and Meribah, because of the chiding of the children of Israel, and because they tempted the LORD.\"",
    "reference": "Exodus 17:1-7",
    "metadata": {
      "stage": 1,
      "stage_title": "Moderate Foundations",
      "level_title": "Exodus & Wilderness Details",
      "puzzle_type": "scripture_detective",
      "emojis": "🪨 🦯 🌊 😠 🏷️",
      "prompt": "Type the dual biblical name of this strife/testing location:",
      "testament": "Old Testament",
      "difficulty": "Difficult",
      "timerSeconds": 60,
      "points": 150,
      "is_typed": true,
      "acceptedAlternatives": [
        "Massah and Meribah",
        "Meribah",
        "Massah",
        "Meribah and Massah"
      ],
      "hint1": "Names meaning Temptation and Strife.",
      "hint2": "Exodus 17:7.",
      "curated": true
    }
  },
  {
    "id": "guess-the-emoji-l3-c1",
    "game_slug": "guess-the-emoji",
    "level": 3,
    "challenge_index": 1,
    "question_text": "🐶 🌊 👅 3️⃣0️⃣0️⃣ 📯",
    "options": [
      "Gideon's 300 men lapping water",
      "Samson's 300 foxes with torches",
      "Saul's 300 chosen warriors",
      "David's mighty men at Bethlehem well"
    ],
    "correct_answer": "Gideon's 300 men lapping water",
    "explanation": "Judges 7:5-7 recounts God sifting Gideon's army down to 300 men who lapped water with their tongue as a dog lappeth.",
    "reference": "Judges 7:4-7",
    "metadata": {
      "stage": 1,
      "stage_title": "Moderate Foundations",
      "level_title": "Judges & Deliverers",
      "puzzle_type": "five_detail_mystery",
      "emojis": "🐶 🌊 👅 3️⃣0️⃣0️⃣ 📯",
      "prompt": "Identify the water-lapping test that selected an army:",
      "testament": "Old Testament",
      "difficulty": "Moderate",
      "timerSeconds": 45,
      "points": 100,
      "is_typed": false,
      "acceptedAlternatives": [
        "Gideon's 300 men lapping water",
        "Gideon's 300",
        "Gideon"
      ],
      "hint1": "Soldiers drinking from the brook Harod.",
      "hint2": "Judges 7:5: as a dog lappeth.",
      "curated": true
    }
  },
  {
    "id": "guess-the-emoji-l3-c2",
    "game_slug": "guess-the-emoji",
    "level": 3,
    "challenge_index": 2,
    "question_text": "🦁 💀 🐝 🍯 ❓",
    "options": [
      "Samson's riddle of honey in the lion carcass",
      "David slaying the lion and bear",
      "Daniel in the lions' den",
      "The disobedient prophet killed by a lion"
    ],
    "correct_answer": "Samson's riddle of honey in the lion carcass",
    "explanation": "Judges 14:8-14 tells of Samson finding a swarm of bees and honey in the carcase of the young lion he tore, prompting his famous riddle.",
    "reference": "Judges 14:8-14",
    "metadata": {
      "stage": 1,
      "stage_title": "Moderate Foundations",
      "level_title": "Judges & Deliverers",
      "puzzle_type": "no_obvious_clues",
      "emojis": "🦁 💀 🐝 🍯 ❓",
      "prompt": "Identify the sweet discovery inside a predator carcass:",
      "testament": "Old Testament",
      "difficulty": "Moderate",
      "timerSeconds": 45,
      "points": 100,
      "is_typed": false,
      "acceptedAlternatives": [
        "Samson's riddle of honey in the lion carcass",
        "Samson's riddle",
        "Samson lion honey"
      ],
      "hint1": "\"Out of the eater came forth meat, and out of the strong came forth sweetness.\"",
      "hint2": "Judges 14:14.",
      "curated": true
    }
  },
  {
    "id": "guess-the-emoji-l3-c3",
    "game_slug": "guess-the-emoji",
    "level": 3,
    "challenge_index": 3,
    "question_text": "🗡️ 🦿 👑 🚪 🐖",
    "options": [
      "Ehud assassinating fat King Eglon",
      "Joab killing Abner at gate",
      "Jehu shooting King Joram",
      "David sparing Saul in the cave"
    ],
    "correct_answer": "Ehud assassinating fat King Eglon",
    "explanation": "Judges 3:15-22 details Ehud the left-handed Benjamite hiding a dagger on his right thigh and slaying Eglon king of Moab in his summer parlour.",
    "reference": "Judges 3:15-25",
    "metadata": {
      "stage": 1,
      "stage_title": "Moderate Foundations",
      "level_title": "Judges & Deliverers",
      "puzzle_type": "no_obvious_clues",
      "emojis": "🗡️ 🦿 👑 🚪 🐖",
      "prompt": "Identify the covert summer chamber assassination:",
      "testament": "Old Testament",
      "difficulty": "Difficult",
      "timerSeconds": 60,
      "points": 150,
      "is_typed": false,
      "acceptedAlternatives": [
        "Ehud assassinating fat King Eglon",
        "Ehud and Eglon",
        "Ehud"
      ],
      "hint1": "A dagger concealed on the right thigh of a left-handed judge.",
      "hint2": "Judges 3:17: Eglon was a very fat man.",
      "curated": true
    }
  },
  {
    "id": "guess-the-emoji-l3-c4",
    "game_slug": "guess-the-emoji",
    "level": 3,
    "challenge_index": 4,
    "question_text": "⛺ 🥛 🔨 📌 😴",
    "options": [
      "Jael defeating Sisera with tent nail and hammer",
      "Delilah cutting Samson's hair",
      "Rebekah giving water at well",
      "Rahab hiding spies under flax"
    ],
    "correct_answer": "Jael defeating Sisera with tent nail and hammer",
    "explanation": "Judges 4:18-21 records Jael giving Sisera milk and driving a tent nail into his temples with a hammer while he slept soundly.",
    "reference": "Judges 4:17-22",
    "metadata": {
      "stage": 1,
      "stage_title": "Moderate Foundations",
      "level_title": "Judges & Deliverers",
      "puzzle_type": "five_detail_mystery",
      "emojis": "⛺ 🥛 🔨 📌 😴",
      "prompt": "Identify the woman who slew the Canaanite general:",
      "testament": "Old Testament",
      "difficulty": "Difficult",
      "timerSeconds": 60,
      "points": 150,
      "is_typed": false,
      "acceptedAlternatives": [
        "Jael defeating Sisera with tent nail and hammer",
        "Jael and Sisera",
        "Jael"
      ],
      "hint1": "A bottle of milk, a tent pin, and a slumbering general.",
      "hint2": "Judges 4:21: took a nail of the tent, and took an hammer in her hand.",
      "curated": true
    }
  },
  {
    "id": "guess-the-emoji-l3-c5",
    "game_slug": "guess-the-emoji",
    "level": 3,
    "challenge_index": 5,
    "question_text": "Type the name of the female judge who dwelt under the palm tree between Ramah and Bethel:",
    "options": [],
    "correct_answer": "Deborah",
    "explanation": "Judges 4:4-5 states: \"And Deborah, a prophetess, the wife of Lapidoth, she judged Israel at that time. And she dwelt under the palm tree of Deborah.\"",
    "reference": "Judges 4:4-5",
    "metadata": {
      "stage": 1,
      "stage_title": "Moderate Foundations",
      "level_title": "Judges & Deliverers",
      "puzzle_type": "forgotten_person",
      "emojis": "🌴 👩‍⚖️ 📜 ⚔️ 🇮🇱",
      "prompt": "Type the name of this prophetess and judge under the palm tree:",
      "testament": "Old Testament",
      "difficulty": "Difficult",
      "timerSeconds": 60,
      "points": 150,
      "is_typed": true,
      "acceptedAlternatives": [
        "Deborah"
      ],
      "hint1": "Wife of Lapidoth who summoned Barak.",
      "hint2": "Judges 4:4.",
      "curated": true
    }
  },
  {
    "id": "guess-the-emoji-l4-c1",
    "game_slug": "guess-the-emoji",
    "level": 4,
    "challenge_index": 1,
    "question_text": "🏹 🪨 🏃‍♂️ 👦 🗣️",
    "options": [
      "Jonathan's arrow signal to David at the stone Ezel",
      "David shooting stones at Goliath",
      "Saul casting javelin at David",
      "Jehu shooting arrow at Jehoram"
    ],
    "correct_answer": "Jonathan's arrow signal to David at the stone Ezel",
    "explanation": "1 Samuel 20:19-42 describes Jonathan shooting three arrows by the stone Ezel and sending a lad to find them, secretly communicating Saul's deadly wrath.",
    "reference": "1 Samuel 20:19-42",
    "metadata": {
      "stage": 1,
      "stage_title": "Moderate Foundations",
      "level_title": "Early Kings & Prophets",
      "puzzle_type": "no_obvious_clues",
      "emojis": "🏹 🪨 🏃‍♂️ 👦 🗣️",
      "prompt": "Identify the archery code between covenant friends:",
      "testament": "Old Testament",
      "difficulty": "Moderate",
      "timerSeconds": 45,
      "points": 100,
      "is_typed": false,
      "acceptedAlternatives": [
        "Jonathan's arrow signal to David at the stone Ezel",
        "Jonathan's arrow signal",
        "Jonathan and David"
      ],
      "hint1": "\"Is not the arrow beyond thee?\"",
      "hint2": "1 Samuel 20:36-37.",
      "curated": true
    }
  },
  {
    "id": "guess-the-emoji-l4-c2",
    "game_slug": "guess-the-emoji",
    "level": 4,
    "challenge_index": 2,
    "question_text": "👑 👶 🗡️ 👩 👩",
    "options": [
      "Solomon judging the two mothers and baby",
      "Moses hidden by Jochebed and Miriam",
      "Athaliah killing royal children",
      "Rebekah with Jacob and Esau"
    ],
    "correct_answer": "Solomon judging the two mothers and baby",
    "explanation": "1 Kings 3:16-28 recounts Solomon commanding a sword to divide the living child, revealing the true mother by her compassionate plea.",
    "reference": "1 Kings 3:16-28",
    "metadata": {
      "stage": 1,
      "stage_title": "Moderate Foundations",
      "level_title": "Early Kings & Prophets",
      "puzzle_type": "no_obvious_clues",
      "emojis": "👑 👶 🗡️ 👩 👩",
      "prompt": "Identify the judicial test with a sword:",
      "testament": "Old Testament",
      "difficulty": "Moderate",
      "timerSeconds": 45,
      "points": 100,
      "is_typed": false,
      "acceptedAlternatives": [
        "Solomon judging the two mothers and baby",
        "Judgment of Solomon",
        "Solomon's judgment"
      ],
      "hint1": "A decree to divide a living child in two.",
      "hint2": "1 Kings 3:25.",
      "curated": true
    }
  },
  {
    "id": "guess-the-emoji-l4-c3",
    "game_slug": "guess-the-emoji",
    "level": 4,
    "challenge_index": 3,
    "question_text": "🪓 🌊 🪵 😰 🪶",
    "options": [
      "The floating iron axe head at Jordan",
      "Moses sweetening Marah waters with tree",
      "Noah building the ark with gopher wood",
      "Jesus walking on the sea"
    ],
    "correct_answer": "The floating iron axe head at Jordan",
    "explanation": "2 Kings 6:5-7 narrates how a son of the prophets lost a borrowed axe head into Jordan; Elisha cast in a stick, and the iron did swim.",
    "reference": "2 Kings 6:1-7",
    "metadata": {
      "stage": 1,
      "stage_title": "Moderate Foundations",
      "level_title": "Early Kings & Prophets",
      "puzzle_type": "five_detail_mystery",
      "emojis": "🪓 🌊 🪵 😰 🪶",
      "prompt": "Identify the borrowed tool that defied gravity:",
      "testament": "Old Testament",
      "difficulty": "Difficult",
      "timerSeconds": 60,
      "points": 150,
      "is_typed": false,
      "acceptedAlternatives": [
        "The floating iron axe head at Jordan",
        "Floating axe head",
        "The floating axe head"
      ],
      "hint1": "\"Alas, master! for it was borrowed.\"",
      "hint2": "2 Kings 6:6: the iron did swim.",
      "curated": true
    }
  },
  {
    "id": "guess-the-emoji-l4-c4",
    "game_slug": "guess-the-emoji",
    "level": 4,
    "challenge_index": 4,
    "question_text": "🐦‍⬛ 🍞 🥩 🏞️ 🧔",
    "options": [
      "Elijah fed by ravens at brook Cherith",
      "Noah sending raven from the ark",
      "Elisha fed by angels in wilderness",
      "David in the cave of Adullam"
    ],
    "correct_answer": "Elijah fed by ravens at brook Cherith",
    "explanation": "1 Kings 17:4-6 tells how ravens brought Elijah bread and flesh in the morning and evening, and he drank of the brook Cherith.",
    "reference": "1 Kings 17:2-6",
    "metadata": {
      "stage": 1,
      "stage_title": "Moderate Foundations",
      "level_title": "Early Kings & Prophets",
      "puzzle_type": "five_detail_mystery",
      "emojis": "🐦‍⬛ 🍞 🥩 🏞️ 🧔",
      "prompt": "Identify the prophet provisioned by black birds:",
      "testament": "Old Testament",
      "difficulty": "Moderate",
      "timerSeconds": 45,
      "points": 100,
      "is_typed": false,
      "acceptedAlternatives": [
        "Elijah fed by ravens at brook Cherith",
        "Elijah fed by ravens",
        "Elijah at Cherith"
      ],
      "hint1": "Birds providing morning and evening meat during drought.",
      "hint2": "1 Kings 17:6.",
      "curated": true
    }
  },
  {
    "id": "guess-the-emoji-l4-c5",
    "game_slug": "guess-the-emoji",
    "level": 4,
    "challenge_index": 5,
    "question_text": "Type the name of the Syrian general who washed seven times in Jordan to cleanse his leprosy:",
    "options": [],
    "correct_answer": "Naaman",
    "explanation": "2 Kings 5:1-14 tells of Naaman, captain of the host of Syria, dipping seven times in Jordan and his flesh returning like a little child.",
    "reference": "2 Kings 5:1-14",
    "metadata": {
      "stage": 1,
      "stage_title": "Moderate Foundations",
      "level_title": "Early Kings & Prophets",
      "puzzle_type": "exact_person",
      "emojis": "⚔️ 🇸🇾 7️⃣ 🌊 👶",
      "prompt": "Type the name of this healed Syrian commander:",
      "testament": "Old Testament",
      "difficulty": "Difficult",
      "timerSeconds": 60,
      "points": 150,
      "is_typed": true,
      "acceptedAlternatives": [
        "Naaman",
        "Naaman the Syrian"
      ],
      "hint1": "He had leprosy and initially despised the Jordan river.",
      "hint2": "2 Kings 5:1.",
      "curated": true
    }
  },
  {
    "id": "guess-the-emoji-l5-c1",
    "game_slug": "guess-the-emoji",
    "level": 5,
    "challenge_index": 1,
    "question_text": "⛵ 💨 🌊 😴 🤫",
    "options": [
      "Jesus calming the storm on Galilee",
      "Jonah sleeping in the ship",
      "Paul in shipwreck at Melita",
      "Disciples seeing Jesus walk on water"
    ],
    "correct_answer": "Jesus calming the storm on Galilee",
    "explanation": "Mark 4:37-39 recounts Jesus asleep in the hinder part of the ship on a pillow, then arising to rebuke the wind: \"Peace, be still.\"",
    "reference": "Mark 4:37-39",
    "metadata": {
      "stage": 1,
      "stage_title": "Moderate Foundations",
      "level_title": "Gospel Foundations & Acts Beginnings",
      "puzzle_type": "no_obvious_clues",
      "emojis": "⛵ 💨 🌊 😴 🤫",
      "prompt": "Identify the sea crossing quieted by three words:",
      "testament": "New Testament",
      "difficulty": "Moderate",
      "timerSeconds": 45,
      "points": 100,
      "is_typed": false,
      "acceptedAlternatives": [
        "Jesus calming the storm on Galilee",
        "Calming the storm",
        "Jesus rebuking the storm"
      ],
      "hint1": "\"Peace, be still.\"",
      "hint2": "Mark 4:39.",
      "curated": true
    }
  },
  {
    "id": "guess-the-emoji-l5-c2",
    "game_slug": "guess-the-emoji",
    "level": 5,
    "challenge_index": 2,
    "question_text": "🌳 🪜 💰 🏠 🍽️",
    "options": [
      "Zacchaeus in the sycomore tree",
      "Matthew's feast for tax collectors",
      "The rich young ruler",
      "The rich fool's barns"
    ],
    "correct_answer": "Zacchaeus in the sycomore tree",
    "explanation": "Luke 19:1-10 records Zacchaeus climbing a sycomore tree to see Jesus, who invited Himself to lodge in his house.",
    "reference": "Luke 19:1-10",
    "metadata": {
      "stage": 1,
      "stage_title": "Moderate Foundations",
      "level_title": "Gospel Foundations & Acts Beginnings",
      "puzzle_type": "no_obvious_clues",
      "emojis": "🌳 🪜 💰 🏠 🍽️",
      "prompt": "Identify the short tax collector host:",
      "testament": "New Testament",
      "difficulty": "Moderate",
      "timerSeconds": 45,
      "points": 100,
      "is_typed": false,
      "acceptedAlternatives": [
        "Zacchaeus in the sycomore tree",
        "Zacchaeus",
        "Zaccheus"
      ],
      "hint1": "He was little of stature and climbed a tree in Jericho.",
      "hint2": "Luke 19:4.",
      "curated": true
    }
  },
  {
    "id": "guess-the-emoji-l5-c3",
    "game_slug": "guess-the-emoji",
    "level": 5,
    "challenge_index": 3,
    "question_text": "💨 🏠 🔥 🗣️ 🌍",
    "options": [
      "Pentecost rushing wind and tongues of fire",
      "Tower of Babel confusion of tongues",
      "Mount Sinai giving of the Law",
      "Elijah and the prophets of Baal"
    ],
    "correct_answer": "Pentecost rushing wind and tongues of fire",
    "explanation": "Acts 2:1-4 describes a sound from heaven as of a rushing mighty wind, cloven tongues like as of fire, and speaking with other tongues.",
    "reference": "Acts 2:1-4",
    "metadata": {
      "stage": 1,
      "stage_title": "Moderate Foundations",
      "level_title": "Gospel Foundations & Acts Beginnings",
      "puzzle_type": "five_detail_mystery",
      "emojis": "💨 🏠 🔥 🗣️ 🌍",
      "prompt": "Identify the apostolic outpouring in the Upper Room:",
      "testament": "New Testament",
      "difficulty": "Moderate",
      "timerSeconds": 45,
      "points": 100,
      "is_typed": false,
      "acceptedAlternatives": [
        "Pentecost rushing wind and tongues of fire",
        "Pentecost",
        "Day of Pentecost"
      ],
      "hint1": "Sound as of a rushing mighty wind and cloven tongues of fire.",
      "hint2": "Acts 2:2-3.",
      "curated": true
    }
  },
  {
    "id": "guess-the-emoji-l5-c4",
    "game_slug": "guess-the-emoji",
    "level": 5,
    "challenge_index": 4,
    "question_text": "🚶‍♂️ 👥 🛌 👤 🩺",
    "options": [
      "Peter's shadow healing the sick on beds in the street",
      "Paul's handkerchiefs healing the sick",
      "Jesus healing at the pool of Bethesda",
      "The paralytic lowered through the roof"
    ],
    "correct_answer": "Peter's shadow healing the sick on beds in the street",
    "explanation": "Acts 5:15 records: \"Insomuch that they brought forth the sick into the streets, and laid them on beds and couches, that at the least the shadow of Peter passing by might overshadow some of them.\"",
    "reference": "Acts 5:15-16",
    "metadata": {
      "stage": 1,
      "stage_title": "Moderate Foundations",
      "level_title": "Gospel Foundations & Acts Beginnings",
      "puzzle_type": "no_obvious_clues",
      "emojis": "🚶‍♂️ 👥 🛌 👤 🩺",
      "prompt": "Identify the shadow-miracle in Jerusalem streets:",
      "testament": "New Testament",
      "difficulty": "Difficult",
      "timerSeconds": 60,
      "points": 150,
      "is_typed": false,
      "acceptedAlternatives": [
        "Peter's shadow healing the sick on beds in the street",
        "Peter's shadow",
        "Shadow of Peter"
      ],
      "hint1": "Sick people laid on couches hoping an apostle's silhouette would fall on them.",
      "hint2": "Acts 5:15.",
      "curated": true
    }
  },
  {
    "id": "guess-the-emoji-l5-c5",
    "game_slug": "guess-the-emoji",
    "level": 5,
    "challenge_index": 5,
    "question_text": "Type the name of the apostle who sank when walking on water toward Jesus after seeing the wind boisterous:",
    "options": [],
    "correct_answer": "Peter",
    "explanation": "Matthew 14:28-30 records Peter walking on the water to go to Jesus, but when he saw the wind boisterous, he was afraid and cried, \"Lord, save me.\"",
    "reference": "Matthew 14:28-31",
    "metadata": {
      "stage": 1,
      "stage_title": "Moderate Foundations",
      "level_title": "Gospel Foundations & Acts Beginnings",
      "puzzle_type": "exact_person",
      "emojis": "🌊 🚶‍♂️ 💨 😨 🤿",
      "prompt": "Type the name of this water-walking disciple:",
      "testament": "New Testament",
      "difficulty": "Moderate",
      "timerSeconds": 45,
      "points": 100,
      "is_typed": true,
      "acceptedAlternatives": [
        "Peter",
        "Simon Peter",
        "Simon"
      ],
      "hint1": "The disciple who said, \"Bid me come unto thee on the water.\"",
      "hint2": "Matthew 14:29.",
      "curated": true
    }
  },
  {
    "id": "guess-the-emoji-l6-c1",
    "game_slug": "guess-the-emoji",
    "level": 6,
    "challenge_index": 1,
    "question_text": "🏰 🪢 🧺 🕳️ 👤",
    "options": [
      "Ebed-Melech rescuing Jeremiah from the cistern",
      "Joseph pulled out of the pit",
      "Daniel taken out of the lions den",
      "Paul let down by the wall in a basket"
    ],
    "correct_answer": "Ebed-Melech rescuing Jeremiah from the cistern",
    "explanation": "Jeremiah 38:7-13 recounts Ebed-Melech the Ethiopian using old cast clouts and rotten rags with cords under Jeremiah's armholes to pull him out of the muddy mire.",
    "reference": "Jeremiah 38:7-13",
    "metadata": {
      "stage": 2,
      "stage_title": "Lesser-Known People & Events",
      "level_title": "Rescued and Relieved",
      "puzzle_type": "forgotten_person",
      "emojis": "🏰 🪢 🧺 🕳️ 👤",
      "prompt": "Identify the Ethiopian official who rescued a prophet from a mire:",
      "testament": "Old Testament",
      "difficulty": "Difficult",
      "timerSeconds": 60,
      "points": 150,
      "is_typed": false,
      "acceptedAlternatives": [
        "Ebed-Melech rescuing Jeremiah from the cistern",
        "Ebed-Melech",
        "Ebedmelech"
      ],
      "hint1": "Old rags and cords under armholes in Malchiah's dungeon.",
      "hint2": "Jeremiah 38:11-12.",
      "curated": true
    }
  },
  {
    "id": "guess-the-emoji-l6-c2",
    "game_slug": "guess-the-emoji",
    "level": 6,
    "challenge_index": 2,
    "question_text": "🧵 🏠 👩‍🦰 🚪 🗣️",
    "options": [
      "Rhoda leaving Peter at the gate in excitement",
      "Mary Magdalene at the empty tomb",
      "Lydia hosting Paul in Philippi",
      "Phoebe carrying letter to Rome"
    ],
    "correct_answer": "Rhoda leaving Peter at the gate in excitement",
    "explanation": "Acts 12:13-14 records Rhoda the damsel hearing Peter knock; she knew his voice, opened not the gate for gladness, but ran in and told that Peter stood before the gate.",
    "reference": "Acts 12:12-16",
    "metadata": {
      "stage": 2,
      "stage_title": "Lesser-Known People & Events",
      "level_title": "Rescued and Relieved",
      "puzzle_type": "forgotten_person",
      "emojis": "🧵 🏠 👩‍🦰 🚪 🗣️",
      "prompt": "Identify the maid who failed to open the door for joy:",
      "testament": "New Testament",
      "difficulty": "Difficult",
      "timerSeconds": 60,
      "points": 150,
      "is_typed": false,
      "acceptedAlternatives": [
        "Rhoda leaving Peter at the gate in excitement",
        "Rhoda",
        "Rhoda the maid"
      ],
      "hint1": "A damsel in Mary the mother of Mark's house during Peter's prison prayer vigil.",
      "hint2": "Acts 12:13-14.",
      "curated": true
    }
  },
  {
    "id": "guess-the-emoji-l6-c3",
    "game_slug": "guess-the-emoji",
    "level": 6,
    "challenge_index": 3,
    "question_text": "🧱 🪟 🧶 🔴 👥",
    "options": [
      "Rahab binding the scarlet thread in the window",
      "Tamar's twin with scarlet thread on hand",
      "David escaping Michal's window",
      "Paul let down in basket at Damascus"
    ],
    "correct_answer": "Rahab binding the scarlet thread in the window",
    "explanation": "Joshua 2:18-21 recounts the spies commanding Rahab: \"thou shalt bind this line of scarlet thread in the window which thou didst let us down by.\"",
    "reference": "Joshua 2:18-21",
    "metadata": {
      "stage": 2,
      "stage_title": "Lesser-Known People & Events",
      "level_title": "Rescued and Relieved",
      "puzzle_type": "no_obvious_clues",
      "emojis": "🧱 🪟 🧶 🔴 👥",
      "prompt": "Identify the covenant marker on Jericho walls:",
      "testament": "Old Testament",
      "difficulty": "Moderate",
      "timerSeconds": 45,
      "points": 100,
      "is_typed": false,
      "acceptedAlternatives": [
        "Rahab binding the scarlet thread in the window",
        "Rahab",
        "Scarlet thread"
      ],
      "hint1": "A red cord hanging from a window on the city wall.",
      "hint2": "Joshua 2:18.",
      "curated": true
    }
  },
  {
    "id": "guess-the-emoji-l6-c4",
    "game_slug": "guess-the-emoji",
    "level": 6,
    "challenge_index": 4,
    "question_text": "🪨 🧗‍♂️ 🗡️ 🛡️ 2️⃣",
    "options": [
      "Jonathan and his armourbearer climbing between Bozez and Seneh",
      "David and Abishai entering Saul's camp",
      "Caleb taking Hebron",
      "Gideon and Phurah scouting Midian"
    ],
    "correct_answer": "Jonathan and his armourbearer climbing between Bozez and Seneh",
    "explanation": "1 Samuel 14:4-14 details Jonathan and his armourbearer climbing on hands and feet up the sharp rocks Bozez and Seneh to smite twenty Philistines.",
    "reference": "1 Samuel 14:4-14",
    "metadata": {
      "stage": 2,
      "stage_title": "Lesser-Known People & Events",
      "level_title": "Rescued and Relieved",
      "puzzle_type": "five_detail_mystery",
      "emojis": "🪨 🧗‍♂️ 🗡️ 🛡️ 2️⃣",
      "prompt": "Identify the two-man scaling of a garrison rock:",
      "testament": "Old Testament",
      "difficulty": "Difficult",
      "timerSeconds": 60,
      "points": 150,
      "is_typed": false,
      "acceptedAlternatives": [
        "Jonathan and his armourbearer climbing between Bozez and Seneh",
        "Jonathan and his armourbearer",
        "Bozez and Seneh"
      ],
      "hint1": "\"There is no restraint to the LORD to save by many or by few.\"",
      "hint2": "1 Samuel 14:6.",
      "curated": true
    }
  },
  {
    "id": "guess-the-emoji-l6-c5",
    "game_slug": "guess-the-emoji",
    "level": 6,
    "challenge_index": 5,
    "question_text": "Type the name of Ahab's governor who hid 100 prophets by fifty in a cave and fed them with bread and water:",
    "options": [],
    "correct_answer": "Obadiah",
    "explanation": "1 Kings 18:3-4 records: \"Now Obadiah feared the LORD greatly: For it was so, when Jezebel cut off the prophets of the LORD, that Obadiah took an hundred prophets, and hid them by fifty in a cave, and fed them with bread and water.\"",
    "reference": "1 Kings 18:3-4",
    "metadata": {
      "stage": 2,
      "stage_title": "Lesser-Known People & Events",
      "level_title": "Rescued and Relieved",
      "puzzle_type": "forgotten_person",
      "emojis": "👑 ⛰️ 🕳️ 5️⃣0️⃣ 🍞",
      "prompt": "Type the name of this cave-sheltering royal governor:",
      "testament": "Old Testament",
      "difficulty": "Very Difficult",
      "timerSeconds": 90,
      "points": 200,
      "is_typed": true,
      "acceptedAlternatives": [
        "Obadiah"
      ],
      "hint1": "Governor of Ahab's palace who feared the LORD greatly.",
      "hint2": "1 Kings 18:3.",
      "curated": true
    }
  },
  {
    "id": "guess-the-emoji-l7-c1",
    "game_slug": "guess-the-emoji",
    "level": 7,
    "challenge_index": 1,
    "question_text": "🐻 🌳 👦 🤬 2️⃣",
    "options": [
      "Two she bears mauling 42 youth who mocked Elisha",
      "David killing the bear to protect sheep",
      "Daniel and the bear vision",
      "Amos warning of a bear attack"
    ],
    "correct_answer": "Two she bears mauling 42 youth who mocked Elisha",
    "explanation": "2 Kings 2:23-24 recounts youth mocking Elisha (\"Go up, thou bald head\"); two she bears came forth out of the wood and tare forty and two children of them.",
    "reference": "2 Kings 2:23-24",
    "metadata": {
      "stage": 2,
      "stage_title": "Lesser-Known People & Events",
      "level_title": "Strange & Miraculous Deliverances",
      "puzzle_type": "no_obvious_clues",
      "emojis": "🐻 🌳 👦 🤬 2️⃣",
      "prompt": "Identify the sudden forest retribution for mocking a prophet:",
      "testament": "Old Testament",
      "difficulty": "Difficult",
      "timerSeconds": 60,
      "points": 150,
      "is_typed": false,
      "acceptedAlternatives": [
        "Two she bears mauling 42 youth who mocked Elisha",
        "Two she bears",
        "Elisha and the bears"
      ],
      "hint1": "\"Go up, thou bald head; go up, thou bald head.\"",
      "hint2": "2 Kings 2:24: two she bears out of the wood.",
      "curated": true
    }
  },
  {
    "id": "guess-the-emoji-l7-c2",
    "game_slug": "guess-the-emoji",
    "level": 7,
    "challenge_index": 2,
    "question_text": "🦴 ⚰️ 👤 ⚡ 🏃‍♂️",
    "options": [
      "A dead man revived by touching Elisha's bones",
      "Ezekiel's vision of dry bones",
      "The bones of Joseph carried out of Egypt",
      "Lazarus coming out of the tomb"
    ],
    "correct_answer": "A dead man revived by touching Elisha's bones",
    "explanation": "2 Kings 13:20-21 tells how men burying a corpse cast him into Elisha's sepulchre; when the dead man touched the bones of Elisha, he revived and stood up on his feet.",
    "reference": "2 Kings 13:20-21",
    "metadata": {
      "stage": 2,
      "stage_title": "Lesser-Known People & Events",
      "level_title": "Strange & Miraculous Deliverances",
      "puzzle_type": "no_obvious_clues",
      "emojis": "🦴 ⚰️ 👤 ⚡ 🏃‍♂️",
      "prompt": "Identify the posthumous bone-resurrection miracle:",
      "testament": "Old Testament",
      "difficulty": "Difficult",
      "timerSeconds": 60,
      "points": 150,
      "is_typed": false,
      "acceptedAlternatives": [
        "A dead man revived by touching Elisha's bones",
        "Elisha's bones",
        "Resurrection at Elisha sepulchre"
      ],
      "hint1": "A Moabite invasion interrupts a burial; corpse touches prophet skeletal remains.",
      "hint2": "2 Kings 13:21: touched the bones of Elisha, he revived.",
      "curated": true
    }
  },
  {
    "id": "guess-the-emoji-l7-c3",
    "game_slug": "guess-the-emoji",
    "level": 7,
    "challenge_index": 3,
    "question_text": "🪟 🧺 🪢 🌙 🏙️",
    "options": [
      "Paul escaping Damascus in a basket through a window",
      "The spies escaping Jericho from Rahab",
      "David escaping Saul through Michal's window",
      "Jeremiah pulled from cistern"
    ],
    "correct_answer": "Paul escaping Damascus in a basket through a window",
    "explanation": "2 Corinthians 11:32-33 and Acts 9:25 recount Paul being let down by the disciples in a basket through a window by the Damascus wall to escape King Aretas' governor.",
    "reference": "2 Corinthians 11:32-33; Acts 9:25",
    "metadata": {
      "stage": 2,
      "stage_title": "Lesser-Known People & Events",
      "level_title": "Strange & Miraculous Deliverances",
      "puzzle_type": "five_detail_mystery",
      "emojis": "🪟 🧺 🪢 🌙 🏙️",
      "prompt": "Identify the nocturnal basket escape from a governor:",
      "testament": "New Testament",
      "difficulty": "Difficult",
      "timerSeconds": 60,
      "points": 150,
      "is_typed": false,
      "acceptedAlternatives": [
        "Paul escaping Damascus in a basket through a window",
        "Paul in a basket",
        "Damascus basket escape"
      ],
      "hint1": "Lowered in a hamper by night over the city wall.",
      "hint2": "2 Corinthians 11:33.",
      "curated": true
    }
  },
  {
    "id": "guess-the-emoji-l7-c4",
    "game_slug": "guess-the-emoji",
    "level": 7,
    "challenge_index": 4,
    "question_text": "🐍 🪵 🔥 ✋ 🏝️",
    "options": [
      "A viper fastening on Paul's hand on Malta",
      "Moses' rod turning to serpent before Pharaoh",
      "The bronze serpent in the desert",
      "John seeing the fiery serpent in Revelation"
    ],
    "correct_answer": "A viper fastening on Paul's hand on Malta",
    "explanation": "Acts 28:3-6 describes a viper coming out of the heat of sticks and fastening on Paul's hand; the islanders expected him to drop dead, but he shook the beast into the fire without harm.",
    "reference": "Acts 28:3-6",
    "metadata": {
      "stage": 2,
      "stage_title": "Lesser-Known People & Events",
      "level_title": "Strange & Miraculous Deliverances",
      "puzzle_type": "five_detail_mystery",
      "emojis": "🐍 🪵 🔥 ✋ 🏝️",
      "prompt": "Identify the venomous encounter shaken into the fire:",
      "testament": "New Testament",
      "difficulty": "Difficult",
      "timerSeconds": 60,
      "points": 150,
      "is_typed": false,
      "acceptedAlternatives": [
        "A viper fastening on Paul's hand on Malta",
        "Paul and the viper on Malta",
        "Viper on Malta"
      ],
      "hint1": "Shipwrecked apostle warming himself by a fire.",
      "hint2": "Acts 28:3.",
      "curated": true
    }
  },
  {
    "id": "guess-the-emoji-l7-c5",
    "game_slug": "guess-the-emoji",
    "level": 7,
    "challenge_index": 5,
    "question_text": "Type the name of the prophet whose donkey saw the angel of the LORD with a drawn sword and spoke with a man's voice:",
    "options": [],
    "correct_answer": "Balaam",
    "explanation": "Numbers 22:28-30 records the LORD opening the mouth of the ass, rebuking Balaam for striking her three times.",
    "reference": "Numbers 22:21-35; 2 Peter 2:16",
    "metadata": {
      "stage": 2,
      "stage_title": "Lesser-Known People & Events",
      "level_title": "Strange & Miraculous Deliverances",
      "puzzle_type": "exact_person",
      "emojis": "🫏 🗣️ 👼 🗡️ 😡",
      "prompt": "Type the name of this prophet rebuked by his own mount:",
      "testament": "Old Testament",
      "difficulty": "Difficult",
      "timerSeconds": 60,
      "points": 150,
      "is_typed": true,
      "acceptedAlternatives": [
        "Balaam",
        "Balaam son of Beor"
      ],
      "hint1": "Son of Beor hired by Balak to curse Israel.",
      "hint2": "Numbers 22:28.",
      "curated": true
    }
  },
  {
    "id": "guess-the-emoji-l8-c1",
    "game_slug": "guess-the-emoji",
    "level": 8,
    "challenge_index": 1,
    "question_text": "🏕️ 🪙 🔨 🧵 💡",
    "options": [
      "Bezalel appointed for Tabernacle craftsmanship",
      "Solomon building the Temple",
      "Hiram the bronze worker",
      "Nehemiah rebuilding the wall"
    ],
    "correct_answer": "Bezalel appointed for Tabernacle craftsmanship",
    "explanation": "Exodus 31:1-5 records the LORD filling Bezalel son of Uri with the Spirit of God in wisdom and workmanship in gold, silver, brass, cutting stones, and carving timber.",
    "reference": "Exodus 31:1-5",
    "metadata": {
      "stage": 2,
      "stage_title": "Lesser-Known People & Events",
      "level_title": "Forgotten Faithful Servants",
      "puzzle_type": "forgotten_person",
      "emojis": "🏕️ 🪙 🔨 🧵 💡",
      "prompt": "Identify the Spirit-filled chief craftsman of the Tabernacle:",
      "testament": "Old Testament",
      "difficulty": "Very Difficult",
      "timerSeconds": 90,
      "points": 200,
      "is_typed": false,
      "acceptedAlternatives": [
        "Bezalel appointed for Tabernacle craftsmanship",
        "Bezalel",
        "Bezaleel"
      ],
      "hint1": "Son of Uri, of the tribe of Judah, paired with Oholiab.",
      "hint2": "Exodus 31:2: I have called by name Bezaleel.",
      "curated": true
    }
  },
  {
    "id": "guess-the-emoji-l8-c2",
    "game_slug": "guess-the-emoji",
    "level": 8,
    "challenge_index": 2,
    "question_text": "📜 👑 🔍 🏛️ 👵",
    "options": [
      "Huldah the prophetess consulted after Law found",
      "Deborah under the palm tree",
      "Anna in the temple",
      "Miriam leading the dancers"
    ],
    "correct_answer": "Huldah the prophetess consulted after Law found",
    "explanation": "2 Kings 22:14-20 recounts Hilkiah the priest and royal officials consulting Huldah the prophetess who dwelt in the college in Jerusalem concerning the scroll of the Law.",
    "reference": "2 Kings 22:14-20",
    "metadata": {
      "stage": 2,
      "stage_title": "Lesser-Known People & Events",
      "level_title": "Forgotten Faithful Servants",
      "puzzle_type": "forgotten_person",
      "emojis": "📜 👑 🔍 🏛️ 👵",
      "prompt": "Identify the prophetess consulted by King Josiah's emissaries:",
      "testament": "Old Testament",
      "difficulty": "Very Difficult",
      "timerSeconds": 90,
      "points": 200,
      "is_typed": false,
      "acceptedAlternatives": [
        "Huldah the prophetess consulted after Law found",
        "Huldah",
        "Huldah the prophetess"
      ],
      "hint1": "Wife of Shallum, keeper of the wardrobe, living in the second quarter.",
      "hint2": "2 Kings 22:14.",
      "curated": true
    }
  },
  {
    "id": "guess-the-emoji-l8-c3",
    "game_slug": "guess-the-emoji",
    "level": 8,
    "challenge_index": 3,
    "question_text": "🔗 🏙️ 🤝 ✉️ 🧊",
    "options": [
      "Onesiphorus searching diligently for Paul in Rome",
      "Timothy bringing Paul his cloak",
      "Epaphroditus delivering Philippian gift",
      "Tychicus carrying epistles"
    ],
    "correct_answer": "Onesiphorus searching diligently for Paul in Rome",
    "explanation": "2 Timothy 1:16-18 commends Onesiphorus: \"he oft refreshed me, and was not ashamed of my chain: But, when he was in Rome, he sought me out very diligently, and found me.\"",
    "reference": "2 Timothy 1:16-18",
    "metadata": {
      "stage": 2,
      "stage_title": "Lesser-Known People & Events",
      "level_title": "Forgotten Faithful Servants",
      "puzzle_type": "forgotten_person",
      "emojis": "🔗 🏙️ 🤝 ✉️ 🧊",
      "prompt": "Identify the faithful friend who refreshed Paul's chains in Rome:",
      "testament": "New Testament",
      "difficulty": "Very Difficult",
      "timerSeconds": 90,
      "points": 200,
      "is_typed": false,
      "acceptedAlternatives": [
        "Onesiphorus searching diligently for Paul in Rome",
        "Onesiphorus"
      ],
      "hint1": "Paul prays for the household of this man who was not ashamed of his chain.",
      "hint2": "2 Timothy 1:16.",
      "curated": true
    }
  },
  {
    "id": "guess-the-emoji-l8-c4",
    "game_slug": "guess-the-emoji",
    "level": 8,
    "challenge_index": 4,
    "question_text": "Type the names of the two Hebrew midwives who feared God and disobeyed Pharaoh's order to kill infant boys (separated by space or \"and\"):",
    "options": [],
    "correct_answer": "Shiphrah and Puah",
    "explanation": "Exodus 1:15-21 honors the Hebrew midwives Shiphrah and Puah who preserved the male children alive because they feared God.",
    "reference": "Exodus 1:15-21",
    "metadata": {
      "stage": 2,
      "stage_title": "Lesser-Known People & Events",
      "level_title": "Forgotten Faithful Servants",
      "puzzle_type": "scripture_detective",
      "emojis": "👶 🩸 🚫 👑 👩‍⚕️",
      "prompt": "Type the names of these two righteous midwives:",
      "testament": "Old Testament",
      "difficulty": "Very Difficult",
      "timerSeconds": 90,
      "points": 200,
      "is_typed": true,
      "acceptedAlternatives": [
        "Shiphrah and Puah",
        "Shiphrah Puah",
        "Puah and Shiphrah"
      ],
      "hint1": "God made them houses because they feared Him rather than Pharaoh.",
      "hint2": "Exodus 1:15.",
      "curated": true
    }
  },
  {
    "id": "guess-the-emoji-l8-c5",
    "game_slug": "guess-the-emoji",
    "level": 8,
    "challenge_index": 5,
    "question_text": "Type the name of the elderly Gileadite of Rogelim who provided beds, basins, and food for David at Mahanaim during Absalom's rebellion:",
    "options": [],
    "correct_answer": "Barzillai",
    "explanation": "2 Samuel 17:27-29 and 19:31-39 describe Barzillai the Gileadite of Rogelim, an eighty-year-old wealthy man who sustained King David.",
    "reference": "2 Samuel 17:27-29; 19:31-39",
    "metadata": {
      "stage": 2,
      "stage_title": "Lesser-Known People & Events",
      "level_title": "Forgotten Faithful Servants",
      "puzzle_type": "forgotten_person",
      "emojis": "👴 🛏️ 🥣 🍞 👑",
      "prompt": "Type the name of this 80-year-old hospitable loyalist:",
      "testament": "Old Testament",
      "difficulty": "Very Difficult",
      "timerSeconds": 90,
      "points": 200,
      "is_typed": true,
      "acceptedAlternatives": [
        "Barzillai",
        "Barzillai the Gileadite"
      ],
      "hint1": "He declined David's invitation to live in royal Jerusalem due to old age, sending Chimham instead.",
      "hint2": "2 Samuel 19:32.",
      "curated": true
    }
  },
  {
    "id": "guess-the-emoji-l9-c1",
    "game_slug": "guess-the-emoji",
    "level": 9,
    "challenge_index": 1,
    "question_text": "🦁 🕳️ ❄️ 🗡️ 👤",
    "options": [
      "Benaiah slaying a lion in a pit on a snowy day",
      "Samson killing lion at Timnath",
      "David killing lion in pasture",
      "Daniel in the lions' den"
    ],
    "correct_answer": "Benaiah slaying a lion in a pit on a snowy day",
    "explanation": "2 Samuel 23:20 records: \"Benaiah the son of Jehoiada... went down also and slew a lion in the midst of a pit in time of snow.\"",
    "reference": "2 Samuel 23:20",
    "metadata": {
      "stage": 2,
      "stage_title": "Lesser-Known People & Events",
      "level_title": "Warriors & Odd Battles",
      "puzzle_type": "five_detail_mystery",
      "emojis": "🦁 🕳️ ❄️ 🗡️ 👤",
      "prompt": "Identify the snowy subterranean lion slayer:",
      "testament": "Old Testament",
      "difficulty": "Difficult",
      "timerSeconds": 60,
      "points": 150,
      "is_typed": false,
      "acceptedAlternatives": [
        "Benaiah slaying a lion in a pit on a snowy day",
        "Benaiah",
        "Benaiah son of Jehoiada"
      ],
      "hint1": "Son of Jehoiada of Kabzeel, one of David's mightiest captains.",
      "hint2": "2 Samuel 23:20.",
      "curated": true
    }
  },
  {
    "id": "guess-the-emoji-l9-c2",
    "game_slug": "guess-the-emoji",
    "level": 9,
    "challenge_index": 2,
    "question_text": "🫘 🌾 🛡️ ⚔️ 🏆",
    "options": [
      "Shammah defending the field of lentils",
      "David fighting Goliath in Valley of Elah",
      "Gideon threshing wheat in winepress",
      "Boaz measuring barley for Ruth"
    ],
    "correct_answer": "Shammah defending the field of lentils",
    "explanation": "2 Samuel 23:11-12 describes Shammah son of Agee the Hararite standing in the midst of a piece of ground full of lentiles and defending it when the Philistines gathered.",
    "reference": "2 Samuel 23:11-12",
    "metadata": {
      "stage": 2,
      "stage_title": "Lesser-Known People & Events",
      "level_title": "Warriors & Odd Battles",
      "puzzle_type": "no_obvious_clues",
      "emojis": "🫘 🌾 🛡️ ⚔️ 🏆",
      "prompt": "Identify the lone stand in a field of legumes:",
      "testament": "Old Testament",
      "difficulty": "Very Difficult",
      "timerSeconds": 90,
      "points": 200,
      "is_typed": false,
      "acceptedAlternatives": [
        "Shammah defending the field of lentils",
        "Shammah",
        "Shammah the Hararite"
      ],
      "hint1": "One of David's top three mighty men defending a crop of lentils.",
      "hint2": "2 Samuel 23:11.",
      "curated": true
    }
  },
  {
    "id": "guess-the-emoji-l9-c3",
    "game_slug": "guess-the-emoji",
    "level": 9,
    "challenge_index": 3,
    "question_text": "🗡️ ✋ 🩹 🌾 8️⃣0️⃣0️⃣",
    "options": [
      "Eleazar whose hand clave unto the sword",
      "Adino the Eznite lifting spear against 800",
      "Jonathan smiting Philistines",
      "Shamgar with his oxgoad"
    ],
    "correct_answer": "Eleazar whose hand clave unto the sword",
    "explanation": "2 Samuel 23:9-10 details Eleazar son of Dodo the Ahohite smiting the Philistines until his hand was weary, and his hand clave unto the sword.",
    "reference": "2 Samuel 23:9-10",
    "metadata": {
      "stage": 2,
      "stage_title": "Lesser-Known People & Events",
      "level_title": "Warriors & Odd Battles",
      "puzzle_type": "exact_person",
      "emojis": "🗡️ ✋ 🩹 🌾 8️⃣0️⃣0️⃣",
      "prompt": "Identify the warrior whose hand froze locked to his weapon:",
      "testament": "Old Testament",
      "difficulty": "Very Difficult",
      "timerSeconds": 90,
      "points": 200,
      "is_typed": false,
      "acceptedAlternatives": [
        "Eleazar whose hand clave unto the sword",
        "Eleazar son of Dodo",
        "Eleazar"
      ],
      "hint1": "Hand frozen in cramp around the hilt after a great slaughter.",
      "hint2": "2 Samuel 23:10: hand clave unto the sword.",
      "curated": true
    }
  },
  {
    "id": "guess-the-emoji-l9-c4",
    "game_slug": "guess-the-emoji",
    "level": 9,
    "challenge_index": 4,
    "question_text": "Type the name of David's nephew who rescued David and slew the Philistine giant Ishbi-benob:",
    "options": [],
    "correct_answer": "Abishai",
    "explanation": "2 Samuel 21:16-17 records Ishbi-benob intending to kill David when faint; Abishai the son of Zeruiah succoured him, and smote the Philistine.",
    "reference": "2 Samuel 21:16-17",
    "metadata": {
      "stage": 2,
      "stage_title": "Lesser-Known People & Events",
      "level_title": "Warriors & Odd Battles",
      "puzzle_type": "forgotten_person",
      "emojis": "🤴 👴 🛡️ 🤺 👹",
      "prompt": "Type the name of Zeruiah's son who saved an exhausted King David:",
      "testament": "Old Testament",
      "difficulty": "Very Difficult",
      "timerSeconds": 90,
      "points": 200,
      "is_typed": true,
      "acceptedAlternatives": [
        "Abishai",
        "Abishai son of Zeruiah"
      ],
      "hint1": "Brother of Joab and Asahel.",
      "hint2": "2 Samuel 21:17.",
      "curated": true
    }
  },
  {
    "id": "guess-the-emoji-l9-c5",
    "game_slug": "guess-the-emoji",
    "level": 9,
    "challenge_index": 5,
    "question_text": "Type the name of the Tachmonite chief among the captains who lifted up his spear against eight hundred slain at one time:",
    "options": [],
    "correct_answer": "Adino",
    "explanation": "2 Samuel 23:8 states: \"The Tachmonite that sat in the seat, chief among the captains; the same was Adino the Eznite: he lift up his spear against eight hundred, whom he slew at one time.\"",
    "reference": "2 Samuel 23:8",
    "metadata": {
      "stage": 2,
      "stage_title": "Lesser-Known People & Events",
      "level_title": "Warriors & Odd Battles",
      "puzzle_type": "forgotten_person",
      "emojis": "🔱 👑 8️⃣0️⃣0️⃣ ⚔️ 🏆",
      "prompt": "Type the name of this premier captain among David's mighty men:",
      "testament": "Old Testament",
      "difficulty": "Expert",
      "timerSeconds": 120,
      "points": 250,
      "is_typed": true,
      "acceptedAlternatives": [
        "Adino",
        "Adino the Eznite",
        "Josheb-basshebeth"
      ],
      "hint1": "The Eznite who holds the record of 800 slain at once.",
      "hint2": "2 Samuel 23:8.",
      "curated": true
    }
  },
  {
    "id": "guess-the-emoji-l10-c1",
    "game_slug": "guess-the-emoji",
    "level": 10,
    "challenge_index": 1,
    "question_text": "👑 🩸 👶 🛏️ 🏛️",
    "options": [
      "Jehosheba hiding baby Joash from Athaliah",
      "Moses hidden in ark of bulrushes",
      "Solomon anointed at Gihon",
      "Mephibosheth dropped by nurse"
    ],
    "correct_answer": "Jehosheba hiding baby Joash from Athaliah",
    "explanation": "2 Kings 11:1-3 tells how Jehosheba, daughter of King Joram and sister of Ahaziah, took Joash from among the king's sons slain by Athaliah and hid him in a bedchamber.",
    "reference": "2 Kings 11:1-3",
    "metadata": {
      "stage": 2,
      "stage_title": "Lesser-Known People & Events",
      "level_title": "Royal Intrigues and Rescues",
      "puzzle_type": "forgotten_person",
      "emojis": "👑 🩸 👶 🛏️ 🏛️",
      "prompt": "Identify the royal aunt who preserved the Davidic line:",
      "testament": "Old Testament",
      "difficulty": "Difficult",
      "timerSeconds": 60,
      "points": 150,
      "is_typed": false,
      "acceptedAlternatives": [
        "Jehosheba hiding baby Joash from Athaliah",
        "Jehosheba",
        "Jehoshabeath"
      ],
      "hint1": "A princess and wife of Jehoiada the priest hiding an infant in the temple.",
      "hint2": "2 Kings 11:2.",
      "curated": true
    }
  },
  {
    "id": "guess-the-emoji-l10-c2",
    "game_slug": "guess-the-emoji",
    "level": 10,
    "challenge_index": 2,
    "question_text": "👑 👑 🐑 🏔️ 💥",
    "options": [
      "Micaiah son of Imlah prophesying Ahab's death",
      "Elijah on Mount Carmel",
      "Nathan rebuking David",
      "Jeremiah prophesying to Zedekiah"
    ],
    "correct_answer": "Micaiah son of Imlah prophesying Ahab's death",
    "explanation": "1 Kings 22:13-28 recounts Micaiah son of Imlah standing before Ahab and Jehoshaphat, seeing all Israel scattered as sheep without a shepherd, and predicting Ahab will not return in peace.",
    "reference": "1 Kings 22:13-28",
    "metadata": {
      "stage": 2,
      "stage_title": "Lesser-Known People & Events",
      "level_title": "Royal Intrigues and Rescues",
      "puzzle_type": "forgotten_person",
      "emojis": "👑 👑 🐑 🏔️ 💥",
      "prompt": "Identify the solitary faithful prophet struck on the cheek:",
      "testament": "Old Testament",
      "difficulty": "Very Difficult",
      "timerSeconds": 90,
      "points": 200,
      "is_typed": false,
      "acceptedAlternatives": [
        "Micaiah son of Imlah prophesying Ahab's death",
        "Micaiah",
        "Micaiah son of Imlah"
      ],
      "hint1": "\"I saw all Israel scattered upon the hills, as sheep that have not a shepherd.\"",
      "hint2": "1 Kings 22:17.",
      "curated": true
    }
  },
  {
    "id": "guess-the-emoji-l10-c3",
    "game_slug": "guess-the-emoji",
    "level": 10,
    "challenge_index": 3,
    "question_text": "🧠 💡 🚫 🪢 💀",
    "options": [
      "Ahithophel hanging himself after counsel rejected",
      "Judas hanging himself after betrayal",
      "Haman hanged on his gallows",
      "Zimri burning king's house over him"
    ],
    "correct_answer": "Ahithophel hanging himself after counsel rejected",
    "explanation": "2 Samuel 17:23 records that when Ahithophel saw his counsel was not followed, he saddled his ass, put his household in order, and hanged himself.",
    "reference": "2 Samuel 17:23",
    "metadata": {
      "stage": 2,
      "stage_title": "Lesser-Known People & Events",
      "level_title": "Royal Intrigues and Rescues",
      "puzzle_type": "forgotten_person",
      "emojis": "🧠 💡 🚫 🪢 💀",
      "prompt": "Identify the brilliant royal counsellor who committed suicide:",
      "testament": "Old Testament",
      "difficulty": "Very Difficult",
      "timerSeconds": 90,
      "points": 200,
      "is_typed": false,
      "acceptedAlternatives": [
        "Ahithophel hanging himself after counsel rejected",
        "Ahithophel",
        "Ahithophel suicide"
      ],
      "hint1": "David prayed that the LORD would turn his counsel into foolishness.",
      "hint2": "2 Samuel 17:23.",
      "curated": true
    }
  },
  {
    "id": "guess-the-emoji-l10-c4",
    "game_slug": "guess-the-emoji",
    "level": 10,
    "challenge_index": 4,
    "question_text": "Type the name of the Philistine exile from Gath who pledged loyalty to David during Absalom's revolt saying, \"in what place my lord the king shall be, whether in death or life, even there also will thy servant be\":",
    "options": [],
    "correct_answer": "Ittai",
    "explanation": "2 Samuel 15:19-22 records Ittai the Gittite's steadfast devotion to the exiled king David.",
    "reference": "2 Samuel 15:19-22",
    "metadata": {
      "stage": 2,
      "stage_title": "Lesser-Known People & Events",
      "level_title": "Royal Intrigues and Rescues",
      "puzzle_type": "forgotten_person",
      "emojis": "🛡️ 🧳 🤝 👑 💔",
      "prompt": "Type the name of this foreign commander loyal unto death:",
      "testament": "Old Testament",
      "difficulty": "Very Difficult",
      "timerSeconds": 90,
      "points": 200,
      "is_typed": true,
      "acceptedAlternatives": [
        "Ittai",
        "Ittai the Gittite"
      ],
      "hint1": "A Gittite exile commanding 600 men who marched with David across the Kidron.",
      "hint2": "2 Samuel 15:21.",
      "curated": true
    }
  },
  {
    "id": "guess-the-emoji-l10-c5",
    "game_slug": "guess-the-emoji",
    "level": 10,
    "challenge_index": 5,
    "question_text": "Type the name of the proud treasurer condemned in Isaiah 22 for carving a sepulchre in the rock, replaced by Eliakim:",
    "options": [],
    "correct_answer": "Shebna",
    "explanation": "Isaiah 22:15-19 prophesies against Shebna, who was over the house, for hewing out a sepulchre on high, warning that God would toss him like a ball into a large country.",
    "reference": "Isaiah 22:15-19",
    "metadata": {
      "stage": 2,
      "stage_title": "Lesser-Known People & Events",
      "level_title": "Royal Intrigues and Rescues",
      "puzzle_type": "forgotten_person",
      "emojis": "🪨 ⚰️ 👑 🔑 ⚽",
      "prompt": "Type the name of this deposed treasurer tossed like a ball:",
      "testament": "Old Testament",
      "difficulty": "Expert",
      "timerSeconds": 120,
      "points": 250,
      "is_typed": true,
      "acceptedAlternatives": [
        "Shebna",
        "Shebna the scribe"
      ],
      "hint1": "He had the key of the house of David removed from his shoulder and given to Eliakim.",
      "hint2": "Isaiah 22:15.",
      "curated": true
    }
  },
  {
    "id": "guess-the-emoji-l11-c1",
    "game_slug": "guess-the-emoji",
    "level": 11,
    "challenge_index": 1,
    "question_text": "🏺 🫗 🛢️ 🚪 🪙",
    "options": [
      "Elisha multiplying the widow's vessels of oil behind closed doors",
      "Elijah providing inexhaustible flour and jar of oil at Zarephath",
      "Woman pouring alabaster jar of costly ointment on Jesus",
      "Wise virgins carrying extra oil in vessels with lamps"
    ],
    "correct_answer": "Elisha multiplying the widow's vessels of oil behind closed doors",
    "explanation": "2 Kings 4:1–7 recounts the prophet’s widow who gathered empty vessels from all her neighbours, shut the door, and poured oil until every jar was filled to pay the creditor.",
    "reference": "2 Kings 4:1–7",
    "metadata": {
      "stage": 3,
      "stage_title": "Similar Stories & Forgotten Figures",
      "level_title": "Similar Story Traps",
      "puzzle_type": "similar_story_trap",
      "emojis": "🏺 🫗 🛢️ 🚪 🪙",
      "prompt": "Beware similar widow miracles! Identify the exact miracle depicted.",
      "testament": "Old Testament",
      "difficulty": "Difficult",
      "timerSeconds": 60,
      "points": 150,
      "curated": true,
      "hint1": "Notice the shut door and multiple vessels gathered from neighbours.",
      "hint2": "This prophet told her to sell the oil and live off the rest."
    }
  },
  {
    "id": "guess-the-emoji-l11-c2",
    "game_slug": "guess-the-emoji",
    "level": 11,
    "challenge_index": 2,
    "question_text": "🌊 🧺 🥖 🫗 💀",
    "options": [
      "Elijah sustaining the widow of Zarephath with cake and cruse",
      "Elisha multiplying twenty barley loaves at Gilgal",
      "Abigail bringing bread, wine, and sheep to David",
      "Ruth gathering leftover barley sheaves in Boaz's field"
    ],
    "correct_answer": "Elijah sustaining the widow of Zarephath with cake and cruse",
    "explanation": "1 Kings 17:8–16 records Elijah asking the destitute widow of Zarephath to bake him a little cake first, promising the barrel of meal and cruse of oil would not fail.",
    "reference": "1 Kings 17:8–16",
    "metadata": {
      "stage": 3,
      "stage_title": "Similar Stories & Forgotten Figures",
      "level_title": "Similar Story Traps",
      "puzzle_type": "similar_story_trap",
      "emojis": "🌊 🧺 🥖 🫗 💀",
      "prompt": "Do not confuse with Elisha! Which prophet and widow are these?",
      "testament": "Old Testament",
      "difficulty": "Difficult",
      "timerSeconds": 60,
      "points": 150,
      "curated": true,
      "hint1": "She had only a handful of meal in a barrel and a little oil in a cruse.",
      "hint2": "Occurred during the severe drought in the territory of Sidon."
    }
  },
  {
    "id": "guess-the-emoji-l11-c3",
    "game_slug": "guess-the-emoji",
    "level": 11,
    "challenge_index": 3,
    "question_text": "🌊 🚶‍♂️🚶‍♀️ 📦 👣 🪨",
    "options": [
      "Priests carrying the Ark standing firm while Jordan river parts",
      "Moses stretching his rod over the Red Sea to divide waters",
      "Elijah striking the waters of Jordan with his folded mantle",
      "Peter stepping out onto the stormy Sea of Galilee"
    ],
    "correct_answer": "Priests carrying the Ark standing firm while Jordan river parts",
    "explanation": "Joshua 3:14–17 describes the priests bearing the Ark of the Covenant stepping into Jordan, and the waters cut off in a heap while all Israel passed on dry ground.",
    "reference": "Joshua 3:14–17",
    "metadata": {
      "stage": 3,
      "stage_title": "Similar Stories & Forgotten Figures",
      "level_title": "Similar Story Traps",
      "puzzle_type": "similar_story_trap",
      "emojis": "🌊 🚶‍♂️🚶‍♀️ 📦 👣 🪨",
      "prompt": "Water dividing miracle: Look closely at the priests bearing the Ark.",
      "testament": "Old Testament",
      "difficulty": "Difficult",
      "timerSeconds": 60,
      "points": 150,
      "curated": true,
      "hint1": "The priests feet dipped in the brim of the overflowing water during harvest.",
      "hint2": "Twelve stones were later set up as a memorial of the crossing."
    }
  },
  {
    "id": "guess-the-emoji-l11-c4",
    "game_slug": "guess-the-emoji",
    "level": 11,
    "challenge_index": 4,
    "question_text": "🦯 🧙‍♂️ 👁️‍🗨️ 🌑 🏝️",
    "options": [
      "Paul pronouncing blindness upon Elymas the sorcerer in Paphos",
      "Paul being blinded by the heavenly light on Damascus road",
      "Samson grinding grain in Gaza prison after eyes gouged",
      "King Zedekiah blinded by Nebuchadnezzar at Riblah"
    ],
    "correct_answer": "Paul pronouncing blindness upon Elymas the sorcerer in Paphos",
    "explanation": "Acts 13:6–12 records Paul rebuking Elymas (Bar-Jesus) for turning the proconsul Sergius Paulus from the faith: a mist and darkness fell on him, and he sought someone to lead him by the hand.",
    "reference": "Acts 13:6–12",
    "metadata": {
      "stage": 3,
      "stage_title": "Similar Stories & Forgotten Figures",
      "level_title": "Similar Story Traps",
      "puzzle_type": "similar_story_trap",
      "emojis": "🦯 🧙‍♂️ 👁️‍🗨️ 🌑 🏝️",
      "prompt": "A New Testament blindness event: Is this Paul or someone Paul rebuked?",
      "testament": "New Testament",
      "difficulty": "Difficult",
      "timerSeconds": 60,
      "points": 150,
      "curated": true,
      "hint1": "Took place on the island of Cyprus before governor Sergius Paulus.",
      "hint2": "The sorcerer was struck blind for a season."
    }
  },
  {
    "id": "guess-the-emoji-l11-c5",
    "game_slug": "guess-the-emoji",
    "level": 11,
    "challenge_index": 5,
    "question_text": "🪨 🦯 💥 💧 😠",
    "options": [
      "Moses striking the rock twice in anger at Kadesh (Meribah)",
      "Moses striking the rock in Horeb with divine command",
      "Samson quenching thirst with water from Ramath-lehi jawbone",
      "Elijah calling down fire on Mount Carmel stones"
    ],
    "correct_answer": "Moses striking the rock twice in anger at Kadesh (Meribah)",
    "explanation": "Numbers 20:8–12 records God commanding Moses to speak to the rock, but Moses struck the rock twice with his rod and rebuked the rebels, forfeiting entry into Canaan.",
    "reference": "Numbers 20:8–12",
    "metadata": {
      "stage": 3,
      "stage_title": "Similar Stories & Forgotten Figures",
      "level_title": "Similar Story Traps",
      "puzzle_type": "similar_story_trap",
      "emojis": "🪨 🦯 💥 💧 😠",
      "prompt": "Notice the anger and repeated strike—which exact rock incident is this?",
      "testament": "Old Testament",
      "difficulty": "Difficult",
      "timerSeconds": 60,
      "points": 150,
      "curated": true,
      "hint1": "Moses said: \"Hear now, ye rebels; must we fetch you water out of this rock?\"",
      "hint2": "God told Moses and Aaron they would not lead the congregation into the promised land."
    }
  },
  {
    "id": "guess-the-emoji-l12-c1",
    "game_slug": "guess-the-emoji",
    "level": 12,
    "challenge_index": 1,
    "question_text": "👩‍👧‍👧 📜 🏞️ ⚖️ ⛺",
    "options": [
      "Daughters of Zelophehad petitioning for inheritance",
      "Daughters of Job receiving inheritances among brethren",
      "Daughters of Philip prophesying in Caesarea",
      "Daughters of Jerusalem mourning on the Via Dolorosa"
    ],
    "correct_answer": "Daughters of Zelophehad petitioning for inheritance",
    "explanation": "Numbers 27:1–7 tells how Mahlah, Noah, Hoglah, Milcah, and Tirzah approached Moses and Eleazar to claim their deceased father’s possession, establishing biblical inheritance law.",
    "reference": "Numbers 27:1–7",
    "metadata": {
      "stage": 3,
      "stage_title": "Similar Stories & Forgotten Figures",
      "level_title": "Forgotten Old Testament Women",
      "puzzle_type": "forgotten_person",
      "emojis": "👩‍👧‍👧 📜 🏞️ ⚖️ ⛺",
      "prompt": "Five sisters who changed Israelite legal precedence regarding family land.",
      "testament": "Old Testament",
      "difficulty": "Difficult",
      "timerSeconds": 60,
      "points": 150,
      "curated": true,
      "hint1": "Their father died in the wilderness without leaving sons.",
      "hint2": "The Lord ruled: \"The daughters of Zelophehad speak right.\""
    }
  },
  {
    "id": "guess-the-emoji-l12-c2",
    "game_slug": "guess-the-emoji",
    "level": 12,
    "challenge_index": 2,
    "question_text": "🪨 🦅 🦁 🌾 😭",
    "options": [
      "Rizpah guarding sons' hanged bodies from birds and beasts",
      "Ruth sleeping at the feet of Boaz on the threshing floor",
      "Hannah weeping at Shiloh tabernacle before Eli",
      "Naomi returning bitter to Bethlehem with Ruth"
    ],
    "correct_answer": "Rizpah guarding sons' hanged bodies from birds and beasts",
    "explanation": "2 Samuel 21:8–14 records Rizpah daughter of Aiah spreading sackcloth upon the rock from harvest until rain, suffering neither the birds of the air nor beasts of the field to touch the corpses.",
    "reference": "2 Samuel 21:8–14",
    "metadata": {
      "stage": 3,
      "stage_title": "Similar Stories & Forgotten Figures",
      "level_title": "Forgotten Old Testament Women",
      "puzzle_type": "forgotten_person",
      "emojis": "🪨 🦅 🦁 🌾 😭",
      "prompt": "A mother on sackcloth guarding the bodies of executed royal descendants.",
      "testament": "Old Testament",
      "difficulty": "Difficult",
      "timerSeconds": 60,
      "points": 150,
      "curated": true,
      "hint1": "She protected the seven sons and grandsons of Saul executed by the Gibeonites.",
      "hint2": "David was moved by her devotion and gave the bones honourable burial."
    }
  },
  {
    "id": "guess-the-emoji-l12-c3",
    "game_slug": "guess-the-emoji",
    "level": 12,
    "challenge_index": 3,
    "question_text": "🍞 🍇 🥩 🫏 🙇‍♀️",
    "options": [
      "Abigail intercepting David with provisions to avert bloodshed",
      "The Queen of Sheba bringing spices and gold to Solomon",
      "Esther preparing a banquet of wine for King Ahasuerus",
      "Ziba bringing asses loaded with bread and summer fruit"
    ],
    "correct_answer": "Abigail intercepting David with provisions to avert bloodshed",
    "explanation": "1 Samuel 25:18–24 recounts Abigail hastening with two hundred loaves, wine, sheep, parched corn, raisins, and figs to pacify David after Nabal insulted his men.",
    "reference": "1 Samuel 25:18–24",
    "metadata": {
      "stage": 3,
      "stage_title": "Similar Stories & Forgotten Figures",
      "level_title": "Forgotten Old Testament Women",
      "puzzle_type": "forgotten_person",
      "emojis": "🍞 🍇 🥩 🫏 🙇‍♀️",
      "prompt": "A wise wife riding an ass to stop an imminent massacre.",
      "testament": "Old Testament",
      "difficulty": "Difficult",
      "timerSeconds": 60,
      "points": 150,
      "curated": true,
      "hint1": "Her churlish husband was named Nabal.",
      "hint2": "David praised her advice for keeping him from shedding blood."
    }
  },
  {
    "id": "guess-the-emoji-l12-c4",
    "game_slug": "guess-the-emoji",
    "level": 12,
    "challenge_index": 4,
    "question_text": "👶 🏛️ 🛏️ 🗡️ 👑",
    "options": [
      "Jehosheba hiding infant Joash in the bedchamber from Athaliah",
      "Jochebed hiding baby Moses in the bulrush ark",
      "Michal putting an idol in David's bed to deceive Saul's messengers",
      "Bathsheba securing Solomon's succession before elderly David"
    ],
    "correct_answer": "Jehosheba hiding infant Joash in the bedchamber from Athaliah",
    "explanation": "2 Kings 11:1–3 records Jehosheba taking Joash the son of Ahaziah and stealing him from among the king’s slain sons, hiding him and his nurse in the bedchamber for six years.",
    "reference": "2 Kings 11:1–3",
    "metadata": {
      "stage": 3,
      "stage_title": "Similar Stories & Forgotten Figures",
      "level_title": "Forgotten Old Testament Women",
      "puzzle_type": "forgotten_person",
      "emojis": "👶 🏛️ 🛏️ 🗡️ 👑",
      "prompt": "Identify the brave princess who saved the Davidic royal lineage from eradication.",
      "testament": "Old Testament",
      "difficulty": "Difficult",
      "timerSeconds": 60,
      "points": 150,
      "curated": true,
      "hint1": "Daughter of King Joram and wife of Jehoiada the priest.",
      "hint2": "She hid infant Joash in the temple while Queen Athaliah reigned."
    }
  },
  {
    "id": "guess-the-emoji-l12-c5",
    "game_slug": "guess-the-emoji",
    "level": 12,
    "challenge_index": 5,
    "question_text": "👶 ⚖️ 👑 🚫 🏠",
    "options": [
      "Shiphrah and Puah defying Pharaoh's infanticide decree",
      "Rachel weeping for her children in Ramah",
      "Potiphar's wife framing Joseph with his garment",
      "Manoah's wife receiving angel's dietary instructions"
    ],
    "correct_answer": "Shiphrah and Puah defying Pharaoh's infanticide decree",
    "explanation": "Exodus 1:15–21 records the Hebrew midwives Shiphrah and Puah fearing God and refusing to drown male Hebrew babies, so God established households for them.",
    "reference": "Exodus 1:15–21",
    "metadata": {
      "stage": 3,
      "stage_title": "Similar Stories & Forgotten Figures",
      "level_title": "Forgotten Old Testament Women",
      "puzzle_type": "forgotten_person",
      "emojis": "👶 ⚖️ 👑 🚫 🏠",
      "prompt": "Two midwives whose sacred civil disobedience preserved a generation.",
      "testament": "Old Testament",
      "difficulty": "Difficult",
      "timerSeconds": 60,
      "points": 150,
      "curated": true,
      "hint1": "They told Pharaoh the Hebrew women delivered quickly before midwives arrived.",
      "hint2": "Because they feared God, He made them houses."
    }
  },
  {
    "id": "guess-the-emoji-l13-c1",
    "game_slug": "guess-the-emoji",
    "level": 13,
    "challenge_index": 1,
    "question_text": "✍️ 📜 🏛️ 🕊️ 👤",
    "options": [],
    "correct_answer": "Tertius",
    "explanation": "Romans 16:22 states: \"I Tertius, who wrote this epistle, salute you in the Lord.\" He was Paul’s amanuensis (scribe) for the Epistle to the Romans.",
    "reference": "Romans 16:22",
    "metadata": {
      "stage": 3,
      "stage_title": "Similar Stories & Forgotten Figures",
      "level_title": "Unsung Apostolic Companions",
      "puzzle_type": "exact_person",
      "emojis": "✍️ 📜 🏛️ 🕊️ 👤",
      "prompt": "Type the exact name of the scribe who penned the Epistle to the Romans.",
      "testament": "New Testament",
      "difficulty": "Difficult",
      "timerSeconds": 60,
      "points": 150,
      "is_typed": true,
      "acceptedAlternatives": [
        "tertius"
      ],
      "curated": true,
      "hint1": "His personal greeting appears in Romans 16:22.",
      "hint2": "His Latin name translates to \"Third\"."
    }
  },
  {
    "id": "guess-the-emoji-l13-c2",
    "game_slug": "guess-the-emoji",
    "level": 13,
    "challenge_index": 2,
    "question_text": "🙏 ⛓️ 🏔️ 💌 🏛️",
    "options": [
      "Epaphras",
      "Tychicus",
      "Aristarchus",
      "Onesimus"
    ],
    "correct_answer": "Epaphras",
    "explanation": "Colossians 4:12 describes Epaphras as \"a servant of Christ, saluteth you, always labouring fervently for you in prayers, that ye may stand perfect and complete in all the will of God.\"",
    "reference": "Colossians 4:12; Philemon 1:23",
    "metadata": {
      "stage": 3,
      "stage_title": "Similar Stories & Forgotten Figures",
      "level_title": "Unsung Apostolic Companions",
      "puzzle_type": "forgotten_person",
      "emojis": "🙏 ⛓️ 🏔️ 💌 🏛️",
      "prompt": "A Colossian leader noted for agonising, fervent prayers for his home assembly.",
      "testament": "New Testament",
      "difficulty": "Difficult",
      "timerSeconds": 60,
      "points": 150,
      "curated": true,
      "hint1": "Paul called him \"my fellow-prisoner in Christ Jesus\" in Philemon.",
      "hint2": "He had a great zeal for believers in Colossae, Laodicea, and Hierapolis."
    }
  },
  {
    "id": "guess-the-emoji-l13-c3",
    "game_slug": "guess-the-emoji",
    "level": 13,
    "challenge_index": 3,
    "question_text": "🚢 ⛓️ 🏛️ 🗣️ 👥",
    "options": [
      "Aristarchus of Thessalonica",
      "Erastus of Corinth",
      "Demas of Thessalonica",
      "Gaius of Derbe"
    ],
    "correct_answer": "Aristarchus of Thessalonica",
    "explanation": "Acts 19:29; 27:2; Colossians 4:10 identify Aristarchus, a Macedonian from Thessalonica, who was seized in Ephesus, accompanied Paul on his voyage to Rome, and shared his imprisonment.",
    "reference": "Acts 27:2; Colossians 4:10",
    "metadata": {
      "stage": 3,
      "stage_title": "Similar Stories & Forgotten Figures",
      "level_title": "Unsung Apostolic Companions",
      "puzzle_type": "forgotten_person",
      "emojis": "🚢 ⛓️ 🏛️ 🗣️ 👥",
      "prompt": "Paul’s Macedonian companion who braved the Ephesus mob and shared Roman chains.",
      "testament": "New Testament",
      "difficulty": "Difficult",
      "timerSeconds": 60,
      "points": 150,
      "curated": true,
      "hint1": "Traveled with Paul on the voyage that ended in Malta shipwreck.",
      "hint2": "Paul explicitly calls him \"my fellowprisoner\" in Colossians 4:10."
    }
  },
  {
    "id": "guess-the-emoji-l13-c4",
    "game_slug": "guess-the-emoji",
    "level": 13,
    "challenge_index": 4,
    "question_text": "💌 🚶‍♂️ 🏛️ 🤝 🛡️",
    "options": [
      "Tychicus",
      "Epaphroditus",
      "Silvanus",
      "Titus"
    ],
    "correct_answer": "Tychicus",
    "explanation": "Ephesians 6:21–22 and Colossians 4:7–8 describe Tychicus as \"a beloved brother and faithful minister and fellowservant in the Lord,\" sent to carry Paul’s epistles and comfort their hearts.",
    "reference": "Ephesians 6:21–22; Colossians 4:7",
    "metadata": {
      "stage": 3,
      "stage_title": "Similar Stories & Forgotten Figures",
      "level_title": "Unsung Apostolic Companions",
      "puzzle_type": "forgotten_person",
      "emojis": "💌 🚶‍♂️ 🏛️ 🤝 🛡️",
      "prompt": "The trusted Asian messenger chosen to carry the letters to Ephesus and Colossae.",
      "testament": "New Testament",
      "difficulty": "Difficult",
      "timerSeconds": 60,
      "points": 150,
      "curated": true,
      "hint1": "Also sent by Paul to relieve Titus in Crete and Timothy in Ephesus.",
      "hint2": "Described as \"a beloved brother, and a faithful minister and fellowservant\"."
    }
  },
  {
    "id": "guess-the-emoji-l13-c5",
    "game_slug": "guess-the-emoji",
    "level": 13,
    "challenge_index": 5,
    "question_text": "4️⃣ 👨 🏛️ 📜 🤝",
    "options": [],
    "correct_answer": "Quartus",
    "explanation": "Romans 16:23 records: \"Erastus the chamberlain of the city saluteth you, and Quartus a brother.\" Quartus’s name means \"Fourth\" in Latin.",
    "reference": "Romans 16:23",
    "metadata": {
      "stage": 3,
      "stage_title": "Similar Stories & Forgotten Figures",
      "level_title": "Unsung Apostolic Companions",
      "puzzle_type": "exact_person",
      "emojis": "4️⃣ 👨 🏛️ 📜 🤝",
      "prompt": "Type the name of the brother mentioned alongside Erastus in Romans 16:23.",
      "testament": "New Testament",
      "difficulty": "Difficult",
      "timerSeconds": 60,
      "points": 150,
      "is_typed": true,
      "acceptedAlternatives": [
        "quartus"
      ],
      "curated": true,
      "hint1": "His name means \"fourth\" in Latin, just as Tertius means \"third\".",
      "hint2": "Greeted immediately after Erastus the chamberlain of Corinth."
    }
  },
  {
    "id": "guess-the-emoji-l14-c1",
    "game_slug": "guess-the-emoji",
    "level": 14,
    "challenge_index": 1,
    "question_text": "🐂 📦 🖐️ ⚡ 💀",
    "options": [
      "Uzzah touching the Ark of the Covenant at Perez-uzzah",
      "Nadab and Abihu offering profane incense fire",
      "Philistines placing gold tumors on the cart returning Ark",
      "David dancing with all his might before the Ark"
    ],
    "correct_answer": "Uzzah touching the Ark of the Covenant at Perez-uzzah",
    "explanation": "2 Samuel 6:6–7 recounts how the oxen stumbled at Nachon’s threshing floor, and Uzzah put forth his hand to the ark of God; God struck him dead for his error.",
    "reference": "2 Samuel 6:6–7",
    "metadata": {
      "stage": 3,
      "stage_title": "Similar Stories & Forgotten Figures",
      "level_title": "Overlooked & Strange Incidents",
      "puzzle_type": "no_obvious_clues",
      "emojis": "🐂 📦 🖐️ ⚡ 💀",
      "prompt": "An unauthorized hand reaches out to steady a sacred object when oxen stumble.",
      "testament": "Old Testament",
      "difficulty": "Difficult",
      "timerSeconds": 60,
      "points": 150,
      "curated": true,
      "hint1": "Took place near Nachon’s threshing floor.",
      "hint2": "The place was named Perez-uzzah because the Lord made a breach upon him."
    }
  },
  {
    "id": "guess-the-emoji-l14-c2",
    "game_slug": "guess-the-emoji",
    "level": 14,
    "challenge_index": 2,
    "question_text": "🌿 🏃‍♂️ 🪢 👕 🌑",
    "options": [
      "Young man fleeing naked leaving linen sheet in Gethsemane",
      "Joseph leaving his cloak in Potiphar's wife's hand",
      "Peter shedding his fisher's coat and diving into Galilee",
      "Paul shaking the viper from his hand into the fire"
    ],
    "correct_answer": "Young man fleeing naked leaving linen sheet in Gethsemane",
    "explanation": "Mark 14:51–52 mentions a young follower with a linen cloth cast about his naked body; when the arresting mob seized him, he left the linen cloth and fled naked.",
    "reference": "Mark 14:51–52",
    "metadata": {
      "stage": 3,
      "stage_title": "Similar Stories & Forgotten Figures",
      "level_title": "Overlooked & Strange Incidents",
      "puzzle_type": "no_obvious_clues",
      "emojis": "🌿 🏃‍♂️ 🪢 👕 🌑",
      "prompt": "A mysterious Gethsemane escape recorded only in the Gospel of Mark.",
      "testament": "New Testament",
      "difficulty": "Difficult",
      "timerSeconds": 60,
      "points": 150,
      "curated": true,
      "hint1": "Happened immediately after the arrest of Jesus in the garden.",
      "hint2": "Tradition often associates this anonymous youth with John Mark himself."
    }
  },
  {
    "id": "guess-the-emoji-l14-c3",
    "game_slug": "guess-the-emoji",
    "level": 14,
    "challenge_index": 3,
    "question_text": "🪟 😴 🗣️ 🪜 💀",
    "options": [
      "Eutychus falling from 3rd-story window during Paul's sermon",
      "Ahaziah falling through the lattice in his upper chamber",
      "Jezebel thrown down from the palace window by eunuchs",
      "Rahab letting the Hebrew spies down by a cord through window"
    ],
    "correct_answer": "Eutychus falling from 3rd-story window during Paul's sermon",
    "explanation": "Acts 20:9–12 tells of a young man named Eutychus sitting in a window in Troas who fell into a deep sleep while Paul preached until midnight, fell from the third loft, and was taken up dead.",
    "reference": "Acts 20:9–12",
    "metadata": {
      "stage": 3,
      "stage_title": "Similar Stories & Forgotten Figures",
      "level_title": "Overlooked & Strange Incidents",
      "puzzle_type": "no_obvious_clues",
      "emojis": "🪟 😴 🗣️ 🪜 💀",
      "prompt": "A midnight sermon, a third-story window, a heavy slumber, and a fatal fall.",
      "testament": "New Testament",
      "difficulty": "Difficult",
      "timerSeconds": 60,
      "points": 150,
      "curated": true,
      "hint1": "Paul went down, fell on him, and said \"Trouble not yourselves; for his life is in him.\"",
      "hint2": "Occurred in an upper chamber in Troas where many lights were burning."
    }
  },
  {
    "id": "guess-the-emoji-l14-c4",
    "game_slug": "guess-the-emoji",
    "level": 14,
    "challenge_index": 4,
    "question_text": "7️⃣ 👨‍👦 👹 🩸 🏃‍♂️",
    "options": [
      "Seven sons of Sceva overpowered and stripped by demoniac",
      "Seven sons of Jesse passing before Samuel at Bethlehem",
      "Seven sons of Saul hanged before the Lord at Gibeah",
      "Seven sons of Job feasting in their elder brother's house"
    ],
    "correct_answer": "Seven sons of Sceva overpowered and stripped by demoniac",
    "explanation": "Acts 19:14–16 recounts the seven sons of Jewish chief priest Sceva trying to cast out demons by \"Jesus whom Paul preacheth\"; the evil spirit replied \"Jesus I know, and Paul I know; but who are ye?\" and beat them naked.",
    "reference": "Acts 19:14–16",
    "metadata": {
      "stage": 3,
      "stage_title": "Similar Stories & Forgotten Figures",
      "level_title": "Overlooked & Strange Incidents",
      "puzzle_type": "no_obvious_clues",
      "emojis": "7️⃣ 👨‍👦 👹 🩸 🏃‍♂️",
      "prompt": "Seven fraudulent exorcists in Ephesus fleeing wounded and naked.",
      "testament": "New Testament",
      "difficulty": "Difficult",
      "timerSeconds": 60,
      "points": 150,
      "curated": true,
      "hint1": "The evil spirit claimed acquaintance with Jesus and Paul, but denied theirs.",
      "hint2": "Their father was a Jewish chief priest named Sceva."
    }
  },
  {
    "id": "guess-the-emoji-l14-c5",
    "game_slug": "guess-the-emoji",
    "level": 14,
    "challenge_index": 5,
    "question_text": "🏛️ 👨‍⚖️ 👊 📜 🤷‍♂️",
    "options": [
      "Sosthenes beaten before Gallio's judgment seat in Corinth",
      "Paul and Silas beaten with rods in Philippi marketplace",
      "Stephen stoned outside Jerusalem gates by the council",
      "Paul struck on the mouth by order of Ananias high priest"
    ],
    "correct_answer": "Sosthenes beaten before Gallio's judgment seat in Corinth",
    "explanation": "Acts 18:12–17 records the Greeks seizing Sosthenes, the chief ruler of the synagogue, and beating him before the judgment seat, while Gallio proconsul of Achaia cared for none of these things.",
    "reference": "Acts 18:12–17",
    "metadata": {
      "stage": 3,
      "stage_title": "Similar Stories & Forgotten Figures",
      "level_title": "Overlooked & Strange Incidents",
      "puzzle_type": "no_obvious_clues",
      "emojis": "🏛️ 👨‍⚖️ 👊 📜 🤷‍♂️",
      "prompt": "A synagogue ruler assaulted in court while an indifferent Roman governor looked away.",
      "testament": "New Testament",
      "difficulty": "Difficult",
      "timerSeconds": 60,
      "points": 150,
      "curated": true,
      "hint1": "Took place before the proconsul Gallio in Corinth.",
      "hint2": "Gallio dismissed the Jewish complaint as a dispute of words and names."
    }
  },
  {
    "id": "guess-the-emoji-l15-c1",
    "game_slug": "guess-the-emoji",
    "level": 15,
    "challenge_index": 1,
    "question_text": "🏰 🪢 🧺 🕳️ 👤",
    "options": [],
    "correct_answer": "Ebed-Melech",
    "explanation": "Jeremiah 38:7–13 records Ebed-Melech the Ethiopian official appealing to King Zedekiah and lowering old rotten rags and cord ropes under Jeremiah’s armpits to haul him out of the muddy pit.",
    "reference": "Jeremiah 38:7–13",
    "metadata": {
      "stage": 3,
      "stage_title": "Similar Stories & Forgotten Figures",
      "level_title": "Exact Person Investigations",
      "puzzle_type": "exact_person",
      "emojis": "🏰 🪢 🧺 🕳️ 👤",
      "prompt": "Type the exact name of the Ethiopian royal official who rescued Jeremiah from the cistern.",
      "testament": "Old Testament",
      "difficulty": "Difficult",
      "timerSeconds": 60,
      "points": 150,
      "is_typed": true,
      "acceptedAlternatives": [
        "ebedmelech",
        "ebed-melech",
        "ebed melech"
      ],
      "curated": true,
      "hint1": "His name translates to \"servant of the king\".",
      "hint2": "God promised him protection from the Babylonian conquerors because he put his trust in Him."
    }
  },
  {
    "id": "guess-the-emoji-l15-c2",
    "game_slug": "guess-the-emoji",
    "level": 15,
    "challenge_index": 2,
    "question_text": "🏕️ 🪙 🔨 🧵 🕊️",
    "options": [],
    "correct_answer": "Bezalel",
    "explanation": "Exodus 31:1–5 tells how the Lord called Bezalel son of Uri and filled him with the Spirit of God in wisdom, understanding, and knowledge to design gold, silver, bronze, and stone for the Tabernacle.",
    "reference": "Exodus 31:1–5; 36:1",
    "metadata": {
      "stage": 3,
      "stage_title": "Similar Stories & Forgotten Figures",
      "level_title": "Exact Person Investigations",
      "puzzle_type": "exact_person",
      "emojis": "🏕️ 🪙 🔨 🧵 🕊️",
      "prompt": "Type the name of the master craftsman of Judah chosen to construct the Tabernacle.",
      "testament": "Old Testament",
      "difficulty": "Difficult",
      "timerSeconds": 60,
      "points": 150,
      "is_typed": true,
      "acceptedAlternatives": [
        "bezaleel",
        "bezalel"
      ],
      "curated": true,
      "hint1": "Son of Uri, son of Hur, of the tribe of Judah.",
      "hint2": "Appointed alongside Oholiab of Dan."
    }
  },
  {
    "id": "guess-the-emoji-l15-c3",
    "game_slug": "guess-the-emoji",
    "level": 15,
    "challenge_index": 3,
    "question_text": "📜 🏛️ 👵 👑 🔮",
    "options": [],
    "correct_answer": "Huldah",
    "explanation": "2 Kings 22:14–20 recounts King Josiah sending Hilkiah the priest and Shaphan the scribe to Huldah the prophetess, who resided in the second quarter of Jerusalem, to inquire regarding the discovered Law scroll.",
    "reference": "2 Kings 22:14–20",
    "metadata": {
      "stage": 3,
      "stage_title": "Similar Stories & Forgotten Figures",
      "level_title": "Exact Person Investigations",
      "puzzle_type": "exact_person",
      "emojis": "📜 🏛️ 👵 👑 🔮",
      "prompt": "Type the name of the prophetess consulted by King Josiah’s delegation in Jerusalem.",
      "testament": "Old Testament",
      "difficulty": "Difficult",
      "timerSeconds": 60,
      "points": 150,
      "is_typed": true,
      "acceptedAlternatives": [
        "huldah"
      ],
      "curated": true,
      "hint1": "Wife of Shallum son of Tikvah, keeper of the wardrobe.",
      "hint2": "Prophesied judgment on Judah but peace for King Josiah in his grave."
    }
  },
  {
    "id": "guess-the-emoji-l15-c4",
    "game_slug": "guess-the-emoji",
    "level": 15,
    "challenge_index": 4,
    "question_text": "⛓️ 🏛️ 🔍 💧 👤",
    "options": [],
    "correct_answer": "Onesiphorus",
    "explanation": "2 Timothy 1:16–18 mentions Onesiphorus, who \"often refreshed me, and was not ashamed of my chain: but, when he was in Rome, he sought me out very diligently, and found me.\"",
    "reference": "2 Timothy 1:16–18",
    "metadata": {
      "stage": 3,
      "stage_title": "Similar Stories & Forgotten Figures",
      "level_title": "Exact Person Investigations",
      "puzzle_type": "exact_person",
      "emojis": "⛓️ 🏛️ 🔍 💧 👤",
      "prompt": "Type the name of the faithful brother who searched Rome diligently to refresh Paul in chains.",
      "testament": "New Testament",
      "difficulty": "Difficult",
      "timerSeconds": 60,
      "points": 150,
      "is_typed": true,
      "acceptedAlternatives": [
        "onesiphorus"
      ],
      "curated": true,
      "hint1": "Paul prayed that the Lord would show mercy unto his household.",
      "hint2": "Contrasted with all in Asia who turned away from Paul."
    }
  },
  {
    "id": "guess-the-emoji-l15-c5",
    "game_slug": "guess-the-emoji",
    "level": 15,
    "challenge_index": 5,
    "question_text": "👑 🧠 🪢 🏠 💀",
    "options": [],
    "correct_answer": "Ahithophel",
    "explanation": "2 Samuel 16:23; 17:23 records that the counsel of Ahithophel was as if a man inquired at the oracle of God; when his advice was rejected for Hushai’s, he put his house in order and hanged himself.",
    "reference": "2 Samuel 17:23",
    "metadata": {
      "stage": 3,
      "stage_title": "Similar Stories & Forgotten Figures",
      "level_title": "Exact Person Investigations",
      "puzzle_type": "exact_person",
      "emojis": "👑 🧠 🪢 🏠 💀",
      "prompt": "Type the name of David’s esteemed counselor who defected to Absalom and hanged himself.",
      "testament": "Old Testament",
      "difficulty": "Difficult",
      "timerSeconds": 60,
      "points": 150,
      "is_typed": true,
      "acceptedAlternatives": [
        "ahithophel",
        "achitophel"
      ],
      "curated": true,
      "hint1": "Grandfather of Bathsheba (daughter of Eliam).",
      "hint2": "David prayed: \"O Lord, I pray thee, turn the counsel of Ahithophel into foolishness.\""
    }
  },
  {
    "id": "guess-the-emoji-l16-c1",
    "game_slug": "guess-the-emoji",
    "level": 16,
    "challenge_index": 1,
    "question_text": "🐂 🦯 ⚔️ 6️⃣0️⃣0️⃣ 🛡️",
    "options": [
      "Shamgar son of Anath",
      "Samson of Zorah",
      "Gideon son of Joash",
      "Barak son of Abinoam"
    ],
    "correct_answer": "Shamgar son of Anath",
    "explanation": "Judges 3:31 records Shamgar the son of Anath who slew 600 Philistines with an ox goad and also delivered Israel.",
    "reference": "Judges 3:31",
    "metadata": {
      "stage": 4,
      "stage_title": "Priests, Prophets & Strange Judgments",
      "level_title": "Ancient Judges & Neglected Leaders",
      "puzzle_type": "no_obvious_clues",
      "emojis": "🐂 🦯 ⚔️ 6️⃣0️⃣0️⃣ 🛡️",
      "prompt": "Which deliverer single-handedly eliminated 600 invaders using an agricultural tool?",
      "testament": "Old Testament",
      "difficulty": "Very Difficult",
      "timerSeconds": 90,
      "points": 200,
      "curated": true,
      "hint1": "Weapon was an ox goad (sharp cattle spike).",
      "hint2": "Mentioned in the Song of Deborah (Judges 5:6)."
    }
  },
  {
    "id": "guess-the-emoji-l16-c2",
    "game_slug": "guess-the-emoji",
    "level": 16,
    "challenge_index": 2,
    "question_text": "🏰 🪨 👩 💥 👑",
    "options": [
      "Abimelech crushed by millstone dropped by a woman at Thebez",
      "Sisera killed by Jael driving tent peg into his temple",
      "Saul falling upon his own sword on Mount Gilboa",
      "Goliath struck in forehead by David's slung stone"
    ],
    "correct_answer": "Abimelech crushed by millstone dropped by a woman at Thebez",
    "explanation": "Judges 9:53–54 relates that an unnamed woman of Thebez cast an upper millstone upon Abimelech’s head and broke his skull; he commanded his armourbearer to run him through so men would not say a woman slew him.",
    "reference": "Judges 9:53–54",
    "metadata": {
      "stage": 4,
      "stage_title": "Priests, Prophets & Strange Judgments",
      "level_title": "Ancient Judges & Neglected Leaders",
      "puzzle_type": "no_obvious_clues",
      "emojis": "🏰 🪨 👩 💥 👑",
      "prompt": "A violent usurper fatally injured by domestic stone hurled from a fortress wall.",
      "testament": "Old Testament",
      "difficulty": "Very Difficult",
      "timerSeconds": 90,
      "points": 200,
      "curated": true,
      "hint1": "Son of Gideon who murdered his seventy brothers on one stone.",
      "hint2": "Ordered his armourbearer to finish him with a sword."
    }
  },
  {
    "id": "guess-the-emoji-l16-c3",
    "game_slug": "guess-the-emoji",
    "level": 16,
    "challenge_index": 3,
    "question_text": "🌊 🗣️ 🌾 👂 🗡️",
    "options": [
      "Gileadites executing Ephraimites over the password Shibboleth",
      "Ehud presenting tribute before assassinating King Eglon",
      "Samson tying foxes with firebrands through wheat fields",
      "Jonathan and his armourbearer climbing between steep rocks"
    ],
    "correct_answer": "Gileadites executing Ephraimites over the password Shibboleth",
    "explanation": "Judges 12:5–6 recounts the Gileadites holding Jordan river passages; Ephraimite fugitives unable to frame the sound correctly said \"Sibboleth\", and 42,000 were slaughtered.",
    "reference": "Judges 12:5–6",
    "metadata": {
      "stage": 4,
      "stage_title": "Priests, Prophets & Strange Judgments",
      "level_title": "Ancient Judges & Neglected Leaders",
      "puzzle_type": "no_obvious_clues",
      "emojis": "🌊 🗣️ 🌾 👂 🗡️",
      "prompt": "A deadly linguistic pronunciation test at river fords that cost thousands their lives.",
      "testament": "Old Testament",
      "difficulty": "Very Difficult",
      "timerSeconds": 90,
      "points": 200,
      "curated": true,
      "hint1": "The fugitive Ephraimites said \"Sibboleth\" instead of \"Shibboleth\".",
      "hint2": "Took place under the judgeship of Jephthah."
    }
  },
  {
    "id": "guess-the-emoji-l16-c4",
    "game_slug": "guess-the-emoji",
    "level": 16,
    "challenge_index": 4,
    "question_text": "👑 🦶 🩺 🚫 ⚰️",
    "options": [
      "King Asa of Judah",
      "King Hezekiah of Judah",
      "King Jeroboam of Israel",
      "King Jehoash of Israel"
    ],
    "correct_answer": "King Asa of Judah",
    "explanation": "2 Chronicles 16:12 records that Asa in the thirty-ninth year of his reign was diseased in his feet until his disease was exceedingly great; yet in his disease he sought not to the Lord, but to the physicians.",
    "reference": "2 Chronicles 16:12",
    "metadata": {
      "stage": 4,
      "stage_title": "Priests, Prophets & Strange Judgments",
      "level_title": "Ancient Judges & Neglected Leaders",
      "puzzle_type": "exact_person",
      "emojis": "👑 🦶 🩺 🚫 ⚰️",
      "prompt": "A reforming king who suffered a severe foot disease and sought physicians rather than God.",
      "testament": "Old Testament",
      "difficulty": "Very Difficult",
      "timerSeconds": 90,
      "points": 200,
      "curated": true,
      "hint1": "Reigned in Judah after Abijah.",
      "hint2": "Imprisoned Hanani the seer who rebuked his alliance with Syria."
    }
  },
  {
    "id": "guess-the-emoji-l16-c5",
    "game_slug": "guess-the-emoji",
    "level": 16,
    "challenge_index": 5,
    "question_text": "👑 🏛️ 🪔 ⚡ 🤍",
    "options": [
      "King Uzziah (Azariah)",
      "King Ahaz",
      "King Manasseh",
      "King Jeroboam"
    ],
    "correct_answer": "King Uzziah (Azariah)",
    "explanation": "2 Chronicles 26:16–21 states that King Uzziah’s heart was lifted up to trespass; he entered the temple to burn incense, and when rebuked by Azariah the priest, leprosy rose up in his forehead.",
    "reference": "2 Chronicles 26:16–21",
    "metadata": {
      "stage": 4,
      "stage_title": "Priests, Prophets & Strange Judgments",
      "level_title": "Ancient Judges & Neglected Leaders",
      "puzzle_type": "exact_person",
      "emojis": "👑 🏛️ 🪔 ⚡ 🤍",
      "prompt": "A powerful king who presumed to burn incense and was instantly struck with forehead leprosy.",
      "testament": "Old Testament",
      "difficulty": "Very Difficult",
      "timerSeconds": 90,
      "points": 200,
      "curated": true,
      "hint1": "Eighty priests opposed his unlawful entrance into the Holy Place.",
      "hint2": "Lived in an isolated house as a leper until his death."
    }
  },
  {
    "id": "guess-the-emoji-l17-c1",
    "game_slug": "guess-the-emoji",
    "level": 17,
    "challenge_index": 1,
    "question_text": "🛏️ 3️⃣9️⃣0️⃣ 💩 🥖 🧱",
    "options": [
      "Ezekiel lying on his side and baking defiled bread over dung",
      "Jeremiah wearing a wooden yoke through Jerusalem streets",
      "Isaiah walking barefoot and stripped for three years",
      "Hosea marrying Gomer as a sign of Israel's unfaithfulness"
    ],
    "correct_answer": "Ezekiel lying on his side and baking defiled bread over dung",
    "explanation": "Ezekiel 4:9–15 describes Ezekiel commanded to lie 390 days on his left side for Israel’s iniquity, measure out famine bread, and bake it over animal dung as a prophetic sign.",
    "reference": "Ezekiel 4:9–15",
    "metadata": {
      "stage": 4,
      "stage_title": "Priests, Prophets & Strange Judgments",
      "level_title": "Exile Prophets & Silent Signs",
      "puzzle_type": "no_obvious_clues",
      "emojis": "🛏️ 3️⃣9️⃣0️⃣ 💩 🥖 🧱",
      "prompt": "A prophet performing a 390-day physical siege enacted with coarse famine rations.",
      "testament": "Old Testament",
      "difficulty": "Very Difficult",
      "timerSeconds": 90,
      "points": 200,
      "curated": true,
      "hint1": "He pled with God not to use human waste, so cow dung was granted.",
      "hint2": "Portrayed the siege of Jerusalem with an iron pan and an engraved tile."
    }
  },
  {
    "id": "guess-the-emoji-l17-c2",
    "game_slug": "guess-the-emoji",
    "level": 17,
    "challenge_index": 2,
    "question_text": "📯 🦏 4️⃣ 🔨 4️⃣",
    "options": [
      "Zechariah's vision of four horns and four carpenters",
      "Daniel's vision of four great beasts rising from the sea",
      "Ezekiel's vision of four living creatures with four wheels",
      "Revelation's vision of four angels holding four winds"
    ],
    "correct_answer": "Zechariah's vision of four horns and four carpenters",
    "explanation": "Zechariah 1:18–21 records the prophet seeing four horns that scattered Judah, and four carpenters (craftsmen) sent to fray them and cast down the horns of the Gentiles.",
    "reference": "Zechariah 1:18–21",
    "metadata": {
      "stage": 4,
      "stage_title": "Priests, Prophets & Strange Judgments",
      "level_title": "Exile Prophets & Silent Signs",
      "puzzle_type": "no_obvious_clues",
      "emojis": "📯 🦏 4️⃣ 🔨 4️⃣",
      "prompt": "Four oppressive horns scattered the nation, but four divine workmen come to smash them.",
      "testament": "Old Testament",
      "difficulty": "Very Difficult",
      "timerSeconds": 90,
      "points": 200,
      "curated": true,
      "hint1": "The angel told the prophet: \"These are the horns which have scattered Judah.\"",
      "hint2": "The craftsmen came to cast down the horns of the nations."
    }
  },
  {
    "id": "guess-the-emoji-l17-c3",
    "game_slug": "guess-the-emoji",
    "level": 17,
    "challenge_index": 3,
    "question_text": "🥩 👗 🚫 💀 🌾",
    "options": [
      "Haggai questioning priests on ceremonial holiness versus defilement",
      "Malachi condemning diseased animal sacrifices on the altar",
      "Levitical priests inspecting leprosy in woven garments",
      "Amos beholding a basket of summer fruit in the sanctuary"
    ],
    "correct_answer": "Haggai questioning priests on ceremonial holiness versus defilement",
    "explanation": "Haggai 2:11–14 presents Haggai asking the priests whether holy flesh in a skirt makes touching other foods holy (no), but touching an unclean dead body defiles it (yes).",
    "reference": "Haggai 2:11–14",
    "metadata": {
      "stage": 4,
      "stage_title": "Priests, Prophets & Strange Judgments",
      "level_title": "Exile Prophets & Silent Signs",
      "puzzle_type": "no_obvious_clues",
      "emojis": "🥩 👗 🚫 💀 🌾",
      "prompt": "A post-exilic prophetic inquiry concerning ritual transmission of holiness and pollution.",
      "testament": "Old Testament",
      "difficulty": "Very Difficult",
      "timerSeconds": 90,
      "points": 200,
      "curated": true,
      "hint1": "The prophet deduced that unholy hands defiled the work of the temple builders.",
      "hint2": "Contrasted holy meat in a skirt with uncleanness from touching a dead body."
    }
  },
  {
    "id": "guess-the-emoji-l17-c4",
    "game_slug": "guess-the-emoji",
    "level": 17,
    "challenge_index": 4,
    "question_text": "🐴 🌑 🧱 🏰 🔍",
    "options": [
      "Nehemiah inspecting the broken Jerusalem walls by night on his beast",
      "Jeremiah buying the field of Anathoth during the siege",
      "Balaam riding his ass along the narrow vineyard wall",
      "Solomon riding the king's mule down to Gihon spring"
    ],
    "correct_answer": "Nehemiah inspecting the broken Jerusalem walls by night on his beast",
    "explanation": "Nehemiah 2:12–15 relates Nehemiah arising in the night with a few men, riding through the Valley Gate to inspect the charred and breached walls without telling anyone his mission.",
    "reference": "Nehemiah 2:12–15",
    "metadata": {
      "stage": 4,
      "stage_title": "Priests, Prophets & Strange Judgments",
      "level_title": "Exile Prophets & Silent Signs",
      "puzzle_type": "no_obvious_clues",
      "emojis": "🐴 🌑 🧱 🏰 🔍",
      "prompt": "A clandestine nighttime reconnaissance ride along charred and ruined fortifications.",
      "testament": "Old Testament",
      "difficulty": "Very Difficult",
      "timerSeconds": 90,
      "points": 200,
      "curated": true,
      "hint1": "He viewed the walls of Jerusalem which were broken down and gates consumed with fire.",
      "hint2": "There was no place for the beast that was under him to pass."
    }
  },
  {
    "id": "guess-the-emoji-l17-c5",
    "game_slug": "guess-the-emoji",
    "level": 17,
    "challenge_index": 5,
    "question_text": "🧔 ✂️ 😭 🏛️ 📜",
    "options": [
      "Ezra tearing his garment and plucking out hair over intermarriages",
      "Job shaving his head and falling upon the ground worshiping",
      "Samson losing his seven locks of hair to Delilah's shears",
      "Absalom caught by his heavy hair in the boughs of an oak"
    ],
    "correct_answer": "Ezra tearing his garment and plucking out hair over intermarriages",
    "explanation": "Ezra 9:3 records: \"And when I heard this thing, I rent my garment and my mantle, and plucked off the hair of my head and of my beard, and sat down astonied.\"",
    "reference": "Ezra 9:3–5",
    "metadata": {
      "stage": 4,
      "stage_title": "Priests, Prophets & Strange Judgments",
      "level_title": "Exile Prophets & Silent Signs",
      "puzzle_type": "no_obvious_clues",
      "emojis": "🧔 ✂️ 😭 🏛️ 📜",
      "prompt": "A priest-scribe reacting with grief by tearing his robes and plucking out his hair.",
      "testament": "Old Testament",
      "difficulty": "Very Difficult",
      "timerSeconds": 90,
      "points": 200,
      "curated": true,
      "hint1": "Occurred upon learning that princes and rulers had intermarried with pagan nations.",
      "hint2": "He fell upon his knees at the evening sacrifice with hands spread unto God."
    }
  },
  {
    "id": "guess-the-emoji-l18-c1",
    "game_slug": "guess-the-emoji",
    "level": 18,
    "challenge_index": 1,
    "question_text": "🤒 🏝️ 🚢 🏛️ 👤",
    "options": [
      "Trophimus",
      "Erastus",
      "Carpus",
      "Crescens"
    ],
    "correct_answer": "Trophimus",
    "explanation": "2 Timothy 4:20 states: \"Erastus abode at Corinth: but Trophimus have I left at Miletum sick.\" Trophimus was an Ephesian Gentile companion of Paul.",
    "reference": "2 Timothy 4:20; Acts 20:4; 21:29",
    "metadata": {
      "stage": 4,
      "stage_title": "Priests, Prophets & Strange Judgments",
      "level_title": "Paul's Final Circuit & Companions",
      "puzzle_type": "exact_person",
      "emojis": "🤒 🏝️ 🚢 🏛️ 👤",
      "prompt": "Identify the Ephesian disciple whom Paul had to leave behind sick at Miletus.",
      "testament": "New Testament",
      "difficulty": "Very Difficult",
      "timerSeconds": 90,
      "points": 200,
      "curated": true,
      "hint1": "Earlier in Jerusalem, Jews mistakenly thought Paul brought him into the temple.",
      "hint2": "Mentioned in Paul’s poignant farewell letter to Timothy."
    }
  },
  {
    "id": "guess-the-emoji-l18-c2",
    "game_slug": "guess-the-emoji",
    "level": 18,
    "challenge_index": 2,
    "question_text": "🔨 🪙 🗡️ 👿 👤",
    "options": [
      "Alexander the coppersmith",
      "Demetrius the silversmith",
      "Simon Magus",
      "Bar-Jesus the sorcerer"
    ],
    "correct_answer": "Alexander the coppersmith",
    "explanation": "2 Timothy 4:14–15 warns: \"Alexander the coppersmith did me much evil: the Lord reward him according to his works: of whom be thou ware also; for he hath greatly withstood our words.\"",
    "reference": "2 Timothy 4:14–15",
    "metadata": {
      "stage": 4,
      "stage_title": "Priests, Prophets & Strange Judgments",
      "level_title": "Paul's Final Circuit & Companions",
      "puzzle_type": "exact_person",
      "emojis": "🔨 🪙 🗡️ 👿 👤",
      "prompt": "Identify the metalworker who vigorously opposed apostolic preaching and harmed Paul.",
      "testament": "New Testament",
      "difficulty": "Very Difficult",
      "timerSeconds": 90,
      "points": 200,
      "curated": true,
      "hint1": "Not the Ephesus silversmith Demetrius.",
      "hint2": "Paul warned Timothy to beware of him because he withstood their words."
    }
  },
  {
    "id": "guess-the-emoji-l18-c3",
    "game_slug": "guess-the-emoji",
    "level": 18,
    "challenge_index": 3,
    "question_text": "💔 🌍 🚶‍♂️ 🏛️ 👤",
    "options": [
      "Demas",
      "John Mark",
      "Barnabas",
      "Phygellus"
    ],
    "correct_answer": "Demas",
    "explanation": "2 Timothy 4:10 records Paul’s sorrowful note: \"For Demas hath forsaken me, having loved this present world, and is departed unto Thessalonica.\"",
    "reference": "2 Timothy 4:10",
    "metadata": {
      "stage": 4,
      "stage_title": "Priests, Prophets & Strange Judgments",
      "level_title": "Paul's Final Circuit & Companions",
      "puzzle_type": "exact_person",
      "emojis": "💔 🌍 🚶‍♂️ 🏛️ 👤",
      "prompt": "Identify the co-laborer who abandoned Paul in his final imprisonment out of worldly love.",
      "testament": "New Testament",
      "difficulty": "Very Difficult",
      "timerSeconds": 90,
      "points": 200,
      "curated": true,
      "hint1": "Departed unto Thessalonica.",
      "hint2": "Earlier sent greetings as Paul’s fellow-worker in Colossians and Philemon."
    }
  },
  {
    "id": "guess-the-emoji-l18-c4",
    "game_slug": "guess-the-emoji",
    "level": 18,
    "challenge_index": 4,
    "question_text": "🤒 💀 🕊️ 🎁 💌",
    "options": [
      "Epaphroditus",
      "Epaphras",
      "Timothy",
      "Onesimus"
    ],
    "correct_answer": "Epaphroditus",
    "explanation": "Philippians 2:25–30 describes Epaphroditus as Paul’s brother, companion in labour, and fellow-soldier, who was sick nigh unto death for the work of Christ but God had mercy on him.",
    "reference": "Philippians 2:25–30",
    "metadata": {
      "stage": 4,
      "stage_title": "Priests, Prophets & Strange Judgments",
      "level_title": "Paul's Final Circuit & Companions",
      "puzzle_type": "exact_person",
      "emojis": "🤒 💀 🕊️ 🎁 💌",
      "prompt": "Identify the Philippian messenger who risked his life carrying financial relief to Paul.",
      "testament": "New Testament",
      "difficulty": "Very Difficult",
      "timerSeconds": 90,
      "points": 200,
      "curated": true,
      "hint1": "Distressed because the Philippians heard he had been near death.",
      "hint2": "Paul instructed the church to hold such in reputation."
    }
  },
  {
    "id": "guess-the-emoji-l18-c5",
    "game_slug": "guess-the-emoji",
    "level": 18,
    "challenge_index": 5,
    "question_text": "👴 🏝️ 🏠 🚶‍♂️ 🏛️",
    "options": [
      "Mnason of Cyprus",
      "Gaius of Macedonia",
      "Jason of Thessalonica",
      "Pudens of Rome"
    ],
    "correct_answer": "Mnason of Cyprus",
    "explanation": "Acts 21:16 records: \"There went with us also certain of the disciples of Caesarea, and brought with them one Mnason of Cyprus, an old disciple, with whom we should lodge.\"",
    "reference": "Acts 21:16",
    "metadata": {
      "stage": 4,
      "stage_title": "Priests, Prophets & Strange Judgments",
      "level_title": "Paul's Final Circuit & Companions",
      "puzzle_type": "exact_person",
      "emojis": "👴 🏝️ 🏠 🚶‍♂️ 🏛️",
      "prompt": "Identify the senior Cypriot believer with whom Paul and his company lodged in Jerusalem.",
      "testament": "New Testament",
      "difficulty": "Very Difficult",
      "timerSeconds": 90,
      "points": 200,
      "curated": true,
      "hint1": "Specifically introduced in Scripture as \"an old disciple\".",
      "hint2": "A native of Cyprus like Barnabas."
    }
  },
  {
    "id": "guess-the-emoji-l19-c1",
    "game_slug": "guess-the-emoji",
    "level": 19,
    "challenge_index": 1,
    "question_text": "🍲 🌿 ☠️ 🌾 😋",
    "options": [
      "Elisha purifying deadly wild gourd stew with flour",
      "Esau selling his birthright for Jacob's red lentil pottage",
      "Ezekiel cooking food over animal dung fuel",
      "Daniel and companions refusing royal meat for pulse"
    ],
    "correct_answer": "Elisha purifying deadly wild gourd stew with flour",
    "explanation": "2 Kings 4:38–41 records that someone shred wild gourds into the pot during famine; the sons of the prophets cried \"there is death in the pot!\" Elisha cast meal into the pot and neutralized the poison.",
    "reference": "2 Kings 4:38–41",
    "metadata": {
      "stage": 4,
      "stage_title": "Priests, Prophets & Strange Judgments",
      "level_title": "Strange Judgments & Instant Deaths",
      "puzzle_type": "no_obvious_clues",
      "emojis": "🍲 🌿 ☠️ 🌾 😋",
      "prompt": "A poisonous cauldron during famine made safe by throwing meal into the stew.",
      "testament": "Old Testament",
      "difficulty": "Very Difficult",
      "timerSeconds": 90,
      "points": 200,
      "curated": true,
      "hint1": "The diners shouted: \"O thou man of God, there is death in the pot!\"",
      "hint2": "Cast meal (flour) into the pot and there was no harm."
    }
  },
  {
    "id": "guess-the-emoji-l19-c2",
    "game_slug": "guess-the-emoji",
    "level": 19,
    "challenge_index": 2,
    "question_text": "⛺ 🗣️ ☁️ 🤍 7️⃣",
    "options": [
      "Miriam struck with leprous white skin and shut out for 7 days",
      "Gehazi cursed with Naaman's leprosy forever",
      "King Uzziah afflicted with leprosy before altar of incense",
      "Moses putting his hand into his bosom and pulling it out leprous"
    ],
    "correct_answer": "Miriam struck with leprous white skin and shut out for 7 days",
    "explanation": "Numbers 12:1–15 tells of Miriam and Aaron murmuring against Moses because of his Ethiopian wife; the cloud departed from the tabernacle, Miriam became leprous as snow, and was shut out of the camp seven days.",
    "reference": "Numbers 12:10–15",
    "metadata": {
      "stage": 4,
      "stage_title": "Priests, Prophets & Strange Judgments",
      "level_title": "Strange Judgments & Instant Deaths",
      "puzzle_type": "no_obvious_clues",
      "emojis": "⛺ 🗣️ ☁️ 🤍 7️⃣",
      "prompt": "A murmuring prophetess struck white with leprosy and quarantined outside camp for a week.",
      "testament": "Old Testament",
      "difficulty": "Very Difficult",
      "timerSeconds": 90,
      "points": 200,
      "curated": true,
      "hint1": "Moses cried unto the Lord: \"Heal her now, O God, I beseech thee.\"",
      "hint2": "The camp journeyed not until she was brought in again."
    }
  },
  {
    "id": "guess-the-emoji-l19-c3",
    "game_slug": "guess-the-emoji",
    "level": 19,
    "challenge_index": 3,
    "question_text": "🛕 🖐️ 💥 🍂 🦁",
    "options": [
      "Jeroboam's hand withering as he pointed against the man of God",
      "Uzziah's hand holding censer stricken with leprosy",
      "Belshazzar seeing fingers of a hand writing on palace wall",
      "Adoni-bezek having his thumbs and great toes cut off"
    ],
    "correct_answer": "Jeroboam's hand withering as he pointed against the man of God",
    "explanation": "1 Kings 13:4–6 recounts King Jeroboam putting forth his hand from the altar at Bethel, crying \"Lay hold on him,\" and his hand dried up so that he could not pull it in again until the prophet prayed.",
    "reference": "1 Kings 13:4–6",
    "metadata": {
      "stage": 4,
      "stage_title": "Priests, Prophets & Strange Judgments",
      "level_title": "Strange Judgments & Instant Deaths",
      "puzzle_type": "no_obvious_clues",
      "emojis": "🛕 🖐️ 💥 🍂 🦁",
      "prompt": "A royal hand outstretched to arrest a prophet instantly dries up like wood.",
      "testament": "Old Testament",
      "difficulty": "Very Difficult",
      "timerSeconds": 90,
      "points": 200,
      "curated": true,
      "hint1": "Took place at the golden calf altar in Bethel.",
      "hint2": "The altar was also rent and ashes poured out according to the sign."
    }
  },
  {
    "id": "guess-the-emoji-l19-c4",
    "game_slug": "guess-the-emoji",
    "level": 19,
    "challenge_index": 4,
    "question_text": "💰 📜 🤥 ⚡ 💀",
    "options": [
      "Ananias and Sapphira dropping dead for lying to the Holy Spirit",
      "Judas Iscariot casting down thirty silver pieces in temple",
      "Achan burying silver and gold under his tent in Jericho",
      "Gehazi taking two talents of silver from Naaman"
    ],
    "correct_answer": "Ananias and Sapphira dropping dead for lying to the Holy Spirit",
    "explanation": "Acts 5:1–11 records Ananias and Sapphira keeping back part of the land’s price while pretending to surrender all; Peter confronted their deceit, and both fell down dead instantly.",
    "reference": "Acts 5:1–11",
    "metadata": {
      "stage": 4,
      "stage_title": "Priests, Prophets & Strange Judgments",
      "level_title": "Strange Judgments & Instant Deaths",
      "puzzle_type": "no_obvious_clues",
      "emojis": "💰 📜 🤥 ⚡ 💀",
      "prompt": "A husband and wife buried within three hours of each other for spiritual deception.",
      "testament": "New Testament",
      "difficulty": "Very Difficult",
      "timerSeconds": 90,
      "points": 200,
      "curated": true,
      "hint1": "Peter said: \"Thou hast not lied unto men, but unto God.\"",
      "hint2": "Great fear came upon all the church and as many as heard these things."
    }
  },
  {
    "id": "guess-the-emoji-l19-c5",
    "game_slug": "guess-the-emoji",
    "level": 19,
    "challenge_index": 5,
    "question_text": "👑 🗣️ 🪑 🪱 💀",
    "options": [
      "Herod Agrippa I eaten of worms after accepting divine praise",
      "Nebuchadnezzar driven to eat grass like oxen for seven years",
      "King Jehoram stricken with incurable disease of the bowels",
      "King Antiochus Epiphanes plagued with foul worms in chariot"
    ],
    "correct_answer": "Herod Agrippa I eaten of worms after accepting divine praise",
    "explanation": "Acts 12:21–23 recounts Herod arrayed in royal apparel making an oration; the people shouted \"It is the voice of a god, and not of a man!\" Immediately the angel of the Lord smote him, and he was eaten of worms and gave up the ghost.",
    "reference": "Acts 12:21–23",
    "metadata": {
      "stage": 4,
      "stage_title": "Priests, Prophets & Strange Judgments",
      "level_title": "Strange Judgments & Instant Deaths",
      "puzzle_type": "no_obvious_clues",
      "emojis": "👑 🗣️ 🪑 🪱 💀",
      "prompt": "A glittering king accepts blasphemous adoration and is smitten from within by worms.",
      "testament": "New Testament",
      "difficulty": "Very Difficult",
      "timerSeconds": 90,
      "points": 200,
      "curated": true,
      "hint1": "Took place at Caesarea during an embassy with Tyre and Sidon.",
      "hint2": "Smitten because he gave not God the glory."
    }
  },
  {
    "id": "guess-the-emoji-l20-c1",
    "game_slug": "guess-the-emoji",
    "level": 20,
    "challenge_index": 1,
    "question_text": "🪔 🔥 🚫 ⚡ 💀",
    "options": [
      "Nadab and Abihu consumed by fire for offering strange fire",
      "Korah and 250 princes swallowed or consumed with fire",
      "Elijah consuming captain and fifty men with fire from heaven",
      "Solomon offering sacrifices as fire came down at temple dedication"
    ],
    "correct_answer": "Nadab and Abihu consumed by fire for offering strange fire",
    "explanation": "Leviticus 10:1–2 relates that Nadab and Abihu, the sons of Aaron, took their censers, put incense thereon, and offered strange fire before the Lord which He commanded them not; fire went out from the Lord and devoured them.",
    "reference": "Leviticus 10:1–2",
    "metadata": {
      "stage": 4,
      "stage_title": "Priests, Prophets & Strange Judgments",
      "level_title": "Tabernacle & Priestly Forensics",
      "puzzle_type": "no_obvious_clues",
      "emojis": "🪔 🔥 🚫 ⚡ 💀",
      "prompt": "Two newly consecrated priests obliterated by fire before the sanctuary for unauthorized incense.",
      "testament": "Old Testament",
      "difficulty": "Very Difficult",
      "timerSeconds": 90,
      "points": 200,
      "curated": true,
      "hint1": "Aaron held his peace when Moses explained God must be sanctified.",
      "hint2": "Their cousins carried their bodies in their coats outside the camp."
    }
  },
  {
    "id": "guess-the-emoji-l20-c2",
    "game_slug": "guess-the-emoji",
    "level": 20,
    "challenge_index": 2,
    "question_text": "🦯 🌸 🥜 📦 ⛺",
    "options": [
      "Aaron's dry almond rod budding, blossoming, and yielding nuts",
      "Moses' rod turning into a serpent before Pharaoh",
      "Elisha's staff laid upon the face of the dead child",
      "Jacob peeling white strakes in green poplar rods at troughs"
    ],
    "correct_answer": "Aaron's dry almond rod budding, blossoming, and yielding nuts",
    "explanation": "Numbers 17:8 records that on the morrow Moses entered the tabernacle of witness, and behold, the rod of Aaron for the house of Levi was budded, brought forth buds, bloomed blossoms, and yielded almonds.",
    "reference": "Numbers 17:8–10",
    "metadata": {
      "stage": 4,
      "stage_title": "Priests, Prophets & Strange Judgments",
      "level_title": "Tabernacle & Priestly Forensics",
      "puzzle_type": "no_obvious_clues",
      "emojis": "🦯 🌸 🥜 📦 ⛺",
      "prompt": "A dead wooden tribal staff miraculous sprouting flowers and ripe almonds overnight.",
      "testament": "Old Testament",
      "difficulty": "Very Difficult",
      "timerSeconds": 90,
      "points": 200,
      "curated": true,
      "hint1": "Settled the rebellion regarding who held God’s choice for the priesthood.",
      "hint2": "Kept before the testimony in the ark as a token against rebels."
    }
  },
  {
    "id": "guess-the-emoji-l20-c3",
    "game_slug": "guess-the-emoji",
    "level": 20,
    "challenge_index": 3,
    "question_text": "🔔 🍎 👗 🏛️ 👂",
    "options": [
      "Golden bells and pomegranates hemmed on high priest's robe",
      "Gideon making a gold ephod in Ophrah that became a snare",
      "Samuel's mother making him a little coat year by year",
      "King David dancing in a linen ephod before the Ark"
    ],
    "correct_answer": "Golden bells and pomegranates hemmed on high priest's robe",
    "explanation": "Exodus 28:33–35 specifies that on the hem of Aaron’s blue robe of the ephod were bells of gold and pomegranates of blue, purple, and scarlet, so his sound would be heard when entering the holy place lest he die.",
    "reference": "Exodus 28:33–35",
    "metadata": {
      "stage": 4,
      "stage_title": "Priests, Prophets & Strange Judgments",
      "level_title": "Tabernacle & Priestly Forensics",
      "puzzle_type": "no_obvious_clues",
      "emojis": "🔔 🍎 👗 🏛️ 👂",
      "prompt": "Audible acoustic safeguards woven along the skirt hem of Israel’s high priest.",
      "testament": "Old Testament",
      "difficulty": "Very Difficult",
      "timerSeconds": 90,
      "points": 200,
      "curated": true,
      "hint1": "A golden bell and a pomegranate alternating around the entire hem.",
      "hint2": "Sound was heard when he went into the holy place before the Lord."
    }
  },
  {
    "id": "guess-the-emoji-l20-c4",
    "game_slug": "guess-the-emoji",
    "level": 20,
    "challenge_index": 4,
    "question_text": "💎 1️⃣2️⃣ 📦 ⚖️ 💡",
    "options": [
      "Urim and Thummim set within the breastplate of judgment",
      "Twelve precious foundation stones of the New Jerusalem",
      "Twelve stones gathered from Jordan river bed by twelve men",
      "Breastplate worn by the King of Tyre described in Ezekiel"
    ],
    "correct_answer": "Urim and Thummim set within the breastplate of judgment",
    "explanation": "Exodus 28:30 commands: \"And thou shalt put in the breastplate of judgment the Urim and the Thummim; and they shall be upon Aaron's heart, when he goeth in before the Lord: and Aaron shall bear the judgment of the children of Israel.\"",
    "reference": "Exodus 28:30; Leviticus 8:8",
    "metadata": {
      "stage": 4,
      "stage_title": "Priests, Prophets & Strange Judgments",
      "level_title": "Tabernacle & Priestly Forensics",
      "puzzle_type": "no_obvious_clues",
      "emojis": "💎 1️⃣2️⃣ 📦 ⚖️ 💡",
      "prompt": "Sacred oracular stones of Lights and Perfections deposited inside the high priest’s breastplate.",
      "testament": "Old Testament",
      "difficulty": "Very Difficult",
      "timerSeconds": 90,
      "points": 200,
      "curated": true,
      "hint1": "Used to discern divine judgment and guidance for Israel’s leadership.",
      "hint2": "Their Hebrew names mean \"Lights\" and \"Perfections\"."
    }
  },
  {
    "id": "guess-the-emoji-l20-c5",
    "game_slug": "guess-the-emoji",
    "level": 20,
    "challenge_index": 5,
    "question_text": "🐐 🖐️ 🏜️ 🏃‍♂️ ⛺",
    "options": [
      "Scapegoat bearing Israel's sins led into the uninhabited wilderness",
      "Abraham offering ram caught in thicket instead of Isaac",
      "Passover lamb blood applied to doorposts and lintel in Egypt",
      "Gideon preparing young goat and unleavened cakes for the angel"
    ],
    "correct_answer": "Scapegoat bearing Israel's sins led into the uninhabited wilderness",
    "explanation": "Leviticus 16:21–22 instructs Aaron to lay both hands upon the head of the live goat (Azazel), confess all Israel’s iniquities, and send it away by a suitable man into the wilderness to a land not inhabited.",
    "reference": "Leviticus 16:21–22",
    "metadata": {
      "stage": 4,
      "stage_title": "Priests, Prophets & Strange Judgments",
      "level_title": "Tabernacle & Priestly Forensics",
      "puzzle_type": "no_obvious_clues",
      "emojis": "🐐 🖐️ 🏜️ 🏃‍♂️ ⛺",
      "prompt": "The Day of Atonement ritual where one animal carries all corporate transgressions away forever.",
      "testament": "Old Testament",
      "difficulty": "Very Difficult",
      "timerSeconds": 90,
      "points": 200,
      "curated": true,
      "hint1": "Chosen by lot between two goats: one for a sin offering, one for Azazel.",
      "hint2": "Sent away by the hand of a fit man into the uninhabited wilderness."
    }
  },
  {
    "id": "guess-the-emoji-l21-c1",
    "game_slug": "guess-the-emoji",
    "level": 21,
    "challenge_index": 1,
    "question_text": "🏔️ 🪵 🔥 🗡️ 🐏",
    "options": [
      "The Binding of Isaac on Mount Moriah with ram in thicket",
      "Gideon's sacrifice consumed by fire from the rock",
      "David offering sacrifice on Ornan's threshing floor",
      "Elijah building altar of twelve stones on Carmel"
    ],
    "correct_answer": "The Binding of Isaac on Mount Moriah with ram in thicket",
    "explanation": "Genesis 22:1–14 describes Abraham taking wood, fire, a knife, and his son Isaac up Mount Moriah; when his hand was stayed by the angel, he found a ram caught in a thicket by its horns.",
    "reference": "Genesis 22:1–14",
    "metadata": {
      "stage": 5,
      "stage_title": "Five-Detail Deep Mysteries",
      "level_title": "Patriarchal Forensic Puzzles",
      "puzzle_type": "five_detail_mystery",
      "emojis": "🏔️ 🪵 🔥 🗡️ 🐏",
      "prompt": "A five-element mountain trial: mountain, wood, fire, blade, and substitutionary ram.",
      "testament": "Old Testament",
      "difficulty": "Very Difficult",
      "timerSeconds": 120,
      "points": 250,
      "curated": true,
      "dossier": "Evidence: Mountain of Moriah, wood laid on the son, fire and knife carried in hand, altarpiece prepared, substitute ram caught in thorns.",
      "hint1": "Isaac asked: \"Where is the lamb for a burnt offering?\"",
      "hint2": "Abraham called the name of that place Jehovah-jireh."
    }
  },
  {
    "id": "guess-the-emoji-l21-c2",
    "game_slug": "guess-the-emoji",
    "level": 21,
    "challenge_index": 2,
    "question_text": "🦯 🌲 🤍 🐑 🥛",
    "options": [
      "Jacob peeling white stripes in poplar rods at drinking troughs",
      "Moses turning water of the Nile into blood with rod",
      "Aaron's staff budding with almond blossoms in Tabernacle",
      "David choosing five smooth stones from the brook"
    ],
    "correct_answer": "Jacob peeling white stripes in poplar rods at drinking troughs",
    "explanation": "Genesis 30:37–43 records Jacob peeling white strakes in rods of green poplar, hazel, and chestnut tree, setting them in water gutters before flocks to breed ringstraked, speckled, and spotted sheep.",
    "reference": "Genesis 30:37–43",
    "metadata": {
      "stage": 5,
      "stage_title": "Five-Detail Deep Mysteries",
      "level_title": "Patriarchal Forensic Puzzles",
      "puzzle_type": "five_detail_mystery",
      "emojis": "🦯 🌲 🤍 🐑 🥛",
      "prompt": "Peeled striped rods placed at water troughs to affect flock pigmentation.",
      "testament": "Old Testament",
      "difficulty": "Very Difficult",
      "timerSeconds": 120,
      "points": 250,
      "curated": true,
      "dossier": "Investigation: Green poplar, hazel, and chestnut rods peeled to expose inner white bark, positioned before mating flocks in Laban’s territory.",
      "hint1": "Done in Paddan-aram to counteract Laban’s wage changes.",
      "hint2": "Resulted in the feeble cattle being Laban’s and the stronger Jacob’s."
    }
  },
  {
    "id": "guess-the-emoji-l21-c3",
    "game_slug": "guess-the-emoji",
    "level": 21,
    "challenge_index": 3,
    "question_text": "🥈 🍷 🌾 👝 👦",
    "options": [
      "Joseph's silver divination cup planted in Benjamin's grain sack",
      "Pharaoh's baker dreaming of three white baskets on his head",
      "Ruth receiving six measures of barley from Boaz in apron",
      "David carrying parched corn and ten loaves to brothers"
    ],
    "correct_answer": "Joseph's silver divination cup planted in Benjamin's grain sack",
    "explanation": "Genesis 44:1–12 relates Joseph commanding his steward to put his personal silver cup into the sack’s mouth of the youngest brother Benjamin, setting up the ultimate trial of the brothers’ loyalty.",
    "reference": "Genesis 44:1–12",
    "metadata": {
      "stage": 5,
      "stage_title": "Five-Detail Deep Mysteries",
      "level_title": "Patriarchal Forensic Puzzles",
      "puzzle_type": "five_detail_mystery",
      "emojis": "🥈 🍷 🌾 👝 👦",
      "prompt": "A silver vessel concealed inside grain baggage to test fraternal love.",
      "testament": "Old Testament",
      "difficulty": "Very Difficult",
      "timerSeconds": 120,
      "points": 250,
      "curated": true,
      "dossier": "Forensic Case: A royal cup planted in the luggage of the youngest sibling leaving Egypt; search revealed the goblet in Benjamin’s sack.",
      "hint1": "Joseph’s steward asked: \"Wherefore have ye rewarded evil for good?\"",
      "hint2": "Judah stepped forward to offer himself as a bondman instead of the lad."
    }
  },
  {
    "id": "guess-the-emoji-l21-c4",
    "game_slug": "guess-the-emoji",
    "level": 21,
    "challenge_index": 4,
    "question_text": "💍 📿 🦯 🐐 ⚖️",
    "options": [
      "Judah's signet, bracelets, and staff held by Tamar as pledge",
      "Rebekah receiving golden ear ring and two bracelets for hands",
      "Achan concealing Babylonian garment and wedge of gold in tent",
      "Pharaoh giving Joseph his royal signet ring and gold chain"
    ],
    "correct_answer": "Judah's signet, bracelets, and staff held by Tamar as pledge",
    "explanation": "Genesis 38:17–26 tells of Tamar demanding Judah’s signet, bracelets, and staff as a pledge until he sent a kid; when accused of adultery she produced these tokens, and Judah confessed she was more righteous than he.",
    "reference": "Genesis 38:17–26",
    "metadata": {
      "stage": 5,
      "stage_title": "Five-Detail Deep Mysteries",
      "level_title": "Patriarchal Forensic Puzzles",
      "puzzle_type": "five_detail_mystery",
      "emojis": "💍 📿 🦯 🐐 ⚖️",
      "prompt": "Three unmistakable personal tokens produced in judgment to vindicate an expectant widow.",
      "testament": "Old Testament",
      "difficulty": "Very Difficult",
      "timerSeconds": 120,
      "points": 250,
      "curated": true,
      "dossier": "Clues: Signet ring, cord/bracelets, and walking staff given as a pledge for a promised kid of the goats by the roadside.",
      "hint1": "Tamar said: \"Discern, I pray thee, whose are these, the signet, and bracelets, and staff.\"",
      "hint2": "Judah acknowledged them and declared: \"She hath been more righteous than I.\""
    }
  },
  {
    "id": "guess-the-emoji-l21-c5",
    "game_slug": "guess-the-emoji",
    "level": 21,
    "challenge_index": 5,
    "question_text": "🕳️ 🌲 💰 4️⃣0️⃣0️⃣ ⚰️",
    "options": [
      "Abraham purchasing the cave of Machpelah from Ephron the Hittite",
      "David purchasing the threshing floor of Araunah the Jebusite",
      "Jeremiah buying the field in Anathoth for seventeen shekels",
      "Omri purchasing the hill of Samaria from Shemer for two talents"
    ],
    "correct_answer": "Abraham purchasing the cave of Machpelah from Ephron the Hittite",
    "explanation": "Genesis 23:14–20 recounts Abraham weighing out four hundred shekels of silver, current money with the merchant, to Ephron the Hittite for the field and cave of Machpelah as a burial buryingplace.",
    "reference": "Genesis 23:14–20",
    "metadata": {
      "stage": 5,
      "stage_title": "Five-Detail Deep Mysteries",
      "level_title": "Patriarchal Forensic Puzzles",
      "puzzle_type": "five_detail_mystery",
      "emojis": "🕳️ 🌲 💰 4️⃣0️⃣0️⃣ ⚰️",
      "prompt": "A legal land acquisition of a cave surrounded by trees for exactly 400 silver units.",
      "testament": "Old Testament",
      "difficulty": "Very Difficult",
      "timerSeconds": 120,
      "points": 250,
      "curated": true,
      "dossier": "Contract Details: Field, cave at the end of the field, all trees within borders, 400 shekels of silver weighed before the sons of Heth at the city gate.",
      "hint1": "Bought to bury Sarah who died in Kirjath-arba (Hebron).",
      "hint2": "Later became the burial ground for Abraham, Isaac, Rebekah, Leah, and Jacob."
    }
  },
  {
    "id": "guess-the-emoji-l22-c1",
    "game_slug": "guess-the-emoji",
    "level": 22,
    "challenge_index": 1,
    "question_text": "🌋 💨 🎺 ⚡ 📜",
    "options": [
      "Giving of the Ten Commandments on smoking Mount Sinai",
      "Elijah standing in cave entrance listening to still small voice",
      "Dedication of Solomon's temple filled with cloud and glory",
      "Transfiguration of Jesus on the holy mount before three disciples"
    ],
    "correct_answer": "Giving of the Ten Commandments on smoking Mount Sinai",
    "explanation": "Exodus 19:16–20:18 records Mount Sinai altogether on smoke with thunder, lightning, thick cloud, and the voice of a trumpet exceeding loud, as God delivered the Ten Commandments.",
    "reference": "Exodus 19:16–19; 20:1–18",
    "metadata": {
      "stage": 5,
      "stage_title": "Five-Detail Deep Mysteries",
      "level_title": "Wilderness & Covenant Mysteries",
      "puzzle_type": "five_detail_mystery",
      "emojis": "🌋 💨 🎺 ⚡ 📜",
      "prompt": "Smoke like a furnace, blaring ram’s horn, trembling mountain, and divine decalogue.",
      "testament": "Old Testament",
      "difficulty": "Very Difficult",
      "timerSeconds": 120,
      "points": 250,
      "curated": true,
      "dossier": "Auditory & Visual Evidence: Shofar trumpet growing louder, volcanic-like smoke, lightning flashing, boundary lines set around the perimeter.",
      "hint1": "The people stood afar off and said to Moses: \"Speak thou with us, and we will hear: but let not God speak with us, lest we die.\"",
      "hint2": "Took place on the third day of encampment."
    }
  },
  {
    "id": "guess-the-emoji-l22-c2",
    "game_slug": "guess-the-emoji",
    "level": 22,
    "challenge_index": 2,
    "question_text": "🐂 🔥 🔨 💧 🥤",
    "options": [
      "Moses burning golden calf, grinding it to dust, and making people drink",
      "Elijah slaying 450 prophets of Baal at brook Kishon",
      "Gideon breaking the altar of Baal and cutting down Asherah grove",
      "King Josiah burning vessels of Baal at the brook Kidron"
    ],
    "correct_answer": "Moses burning golden calf, grinding it to dust, and making people drink",
    "explanation": "Exodus 32:20 records: \"And he took the calf which they had made, and burnt it in the fire, and ground it to powder, and strawed it upon the water, and made the children of Israel drink of it.\"",
    "reference": "Exodus 32:20",
    "metadata": {
      "stage": 5,
      "stage_title": "Five-Detail Deep Mysteries",
      "level_title": "Wilderness & Covenant Mysteries",
      "puzzle_type": "five_detail_mystery",
      "emojis": "🐂 🔥 🔨 💧 🥤",
      "prompt": "A five-step destruction of an idol: molten gold burned, pulverized, dissolved, and consumed.",
      "testament": "Old Testament",
      "difficulty": "Very Difficult",
      "timerSeconds": 120,
      "points": 250,
      "curated": true,
      "dossier": "Chain of custody: Molten calf seized, burned in fire, hammered/ground to powder, scattered upon the mountain stream, forced drinking ritual.",
      "hint1": "Moses descended from Sinai with two tables of stone broken beneath the mount.",
      "hint2": "Aaron made the excuse: \"I cast it into the fire, and there came out this calf.\""
    }
  },
  {
    "id": "guess-the-emoji-l22-c3",
    "game_slug": "guess-the-emoji",
    "level": 22,
    "challenge_index": 3,
    "question_text": "🌅 ❄️ ☀️ 🪱 🛑",
    "options": [
      "Wilderness manna gathering, melting under sun, and worm decay",
      "Plague of hail mixed with fire devastating Egypt's crops",
      "Elisha throwing salt into the spring waters of Jericho",
      "Gideon's fleece wet with dew while ground remained dry"
    ],
    "correct_answer": "Wilderness manna gathering, melting under sun, and worm decay",
    "explanation": "Exodus 16:14–26 describes the small round hoarfrost substance gathered morning by morning; when the sun waxed hot it melted, and bread kept overnight bred worms and stank except on Sabbath.",
    "reference": "Exodus 16:14–26",
    "metadata": {
      "stage": 5,
      "stage_title": "Five-Detail Deep Mysteries",
      "level_title": "Wilderness & Covenant Mysteries",
      "puzzle_type": "five_detail_mystery",
      "emojis": "🌅 ❄️ ☀️ 🪱 🛑",
      "prompt": "Morning frost-like bread, midday thermal evaporation, nocturnal worm infestation, Sabbath preservation.",
      "testament": "Old Testament",
      "difficulty": "Very Difficult",
      "timerSeconds": 120,
      "points": 250,
      "curated": true,
      "dossier": "Scientific parameters: Fine flake like coriander seed, melted by noon heat, fermented with worms if hoarded, doubled without spoil on Day 6.",
      "hint1": "Israel said: \"Manna? For they wist not what it was.\"",
      "hint2": "A pot of it was preserved inside the Ark of the Covenant."
    }
  },
  {
    "id": "guess-the-emoji-l22-c4",
    "game_slug": "guess-the-emoji",
    "level": 22,
    "challenge_index": 4,
    "question_text": "7️⃣0️⃣ 🏔️ 👁️ 💎 🍷",
    "options": [
      "Seventy elders beholding God with sapphire pavement under His feet",
      "Seventy disciples returning with joy over spirits subject to them",
      "Seventy weeks decreed by Gabriel to Daniel in Babylon",
      "Seventy palm trees and twelve wells of water at Elim"
    ],
    "correct_answer": "Seventy elders beholding God with sapphire pavement under His feet",
    "explanation": "Exodus 24:9–11 states that Moses, Aaron, Nadab, Abihu, and seventy elders went up and saw the God of Israel, and under His feet was paved work of sapphire stone; they saw God, and did eat and drink.",
    "reference": "Exodus 24:9–11",
    "metadata": {
      "stage": 5,
      "stage_title": "Five-Detail Deep Mysteries",
      "level_title": "Wilderness & Covenant Mysteries",
      "puzzle_type": "five_detail_mystery",
      "emojis": "7️⃣0️⃣ 🏔️ 👁️ 💎 🍷",
      "prompt": "Seventy leaders ascend the holy mountain to dine upon celestial sapphire pavement.",
      "testament": "Old Testament",
      "difficulty": "Very Difficult",
      "timerSeconds": 120,
      "points": 250,
      "curated": true,
      "dossier": "Ascent Log: Moses, Aaron, 2 priests, 70 elders of Israel; pavement like sapphire body of heaven in clearness; communion meal without divine judgment.",
      "hint1": "Scripture notes: \"Upon the nobles of the children of Israel he laid not his hand.\"",
      "hint2": "Occurred immediately after ratification of the Covenant of Blood."
    }
  },
  {
    "id": "guess-the-emoji-l22-c5",
    "game_slug": "guess-the-emoji",
    "level": 22,
    "challenge_index": 5,
    "question_text": "🏔️ 📜 💡 🎭 😨",
    "options": [
      "Moses' radiant face veiled because Israel feared to approach",
      "Jesus transfigured with face shining like the sun",
      "Stephen's face appearing as the face of an angel before Sanhedrin",
      "Paul blinded by radiant heavenly light outside Damascus"
    ],
    "correct_answer": "Moses' radiant face veiled because Israel feared to approach",
    "explanation": "Exodus 34:29–35 describes Moses descending Sinai with the two tables; the skin of his face shone because he had talked with God, and Aaron and the children of Israel were afraid to come nigh, so Moses put on a vail.",
    "reference": "Exodus 34:29–35",
    "metadata": {
      "stage": 5,
      "stage_title": "Five-Detail Deep Mysteries",
      "level_title": "Wilderness & Covenant Mysteries",
      "puzzle_type": "five_detail_mystery",
      "emojis": "🏔️ 📜 💡 🎭 😨",
      "prompt": "A glowing visage after 40 days on the summit requiring a facial covering.",
      "testament": "Old Testament",
      "difficulty": "Very Difficult",
      "timerSeconds": 120,
      "points": 250,
      "curated": true,
      "dossier": "Phenomenon: Skin of countenance emitting blinding rays after divine communion; removed veil when speaking to God, replaced veil when addressing Israel.",
      "hint1": "Paul explains the typological significance of this veil in 2 Corinthians 3.",
      "hint2": "Occurred after Moses received the second set of stone tablets."
    }
  },
  {
    "id": "guess-the-emoji-l23-c1",
    "game_slug": "guess-the-emoji",
    "level": 23,
    "challenge_index": 1,
    "question_text": "👖 🌊 🪨 🍄 🗑️",
    "options": [
      "Jeremiah hiding his linen girdle in a rock by Euphrates until marred",
      "Ezekiel shaving hair and dividing it into three portions",
      "Zechariah taking two staves called Beauty and Bands",
      "Isaiah wearing sackcloth and walking barefoot three years"
    ],
    "correct_answer": "Jeremiah hiding his linen girdle in a rock by Euphrates until marred",
    "explanation": "Jeremiah 13:1–11 relates Jeremiah buying a linen girdle, wearing it, then burying it in a hole of the rock by Euphrates; when retrieved after many days, it was marred and profitable for nothing, picturing Judah’s pride.",
    "reference": "Jeremiah 13:1–11",
    "metadata": {
      "stage": 5,
      "stage_title": "Five-Detail Deep Mysteries",
      "level_title": "Prophetic Object Lessons",
      "puzzle_type": "five_detail_mystery",
      "emojis": "👖 🌊 🪨 🍄 🗑️",
      "prompt": "A pristine linen sash decayed in a distant river crag to symbolize national ruin.",
      "testament": "Old Testament",
      "difficulty": "Very Difficult",
      "timerSeconds": 120,
      "points": 250,
      "curated": true,
      "dossier": "Object Lesson: Unwashed linen waistcloth worn on loins, transported 300+ miles to Perath (Euphrates), concealed in damp rock fissure, excavated rotten.",
      "hint1": "God commanded him not to put it in water before wearing.",
      "hint2": "\"This evil people... shall even be as this girdle, which is good for nothing.\""
    }
  },
  {
    "id": "guess-the-emoji-l23-c2",
    "game_slug": "guess-the-emoji",
    "level": 23,
    "challenge_index": 2,
    "question_text": "🏺 👴 🏞️ 💥 🧱",
    "options": [
      "Jeremiah breaking potter's bottle in Valley of Hinnom before elders",
      "Gideon breaking clay pitchers with lamps at Midian camp",
      "Woman of Zarephath with empty barrel of meal and cruse",
      "Zechariah measuring Jerusalem with a measuring line"
    ],
    "correct_answer": "Jeremiah breaking potter's bottle in Valley of Hinnom before elders",
    "explanation": "Jeremiah 19:1–11 describes Jeremiah taking an earthen bottle with ancients of the people and priests to the Valley of the Son of Hinnom by the Potsherd Gate, and shattering it beyond repair as a prophecy of Jerusalem’s doom.",
    "reference": "Jeremiah 19:1–11",
    "metadata": {
      "stage": 5,
      "stage_title": "Five-Detail Deep Mysteries",
      "level_title": "Prophetic Object Lessons",
      "puzzle_type": "five_detail_mystery",
      "emojis": "🏺 👴 🏞️ 💥 🧱",
      "prompt": "Shattering a ceramic flask in Tophet to signify irreversible city destruction.",
      "testament": "Old Testament",
      "difficulty": "Very Difficult",
      "timerSeconds": 120,
      "points": 250,
      "curated": true,
      "dossier": "Scene: Valley of Ben-Hinnom / Tophet, elders and senior priests watching, earthen bottle shattered on stones so it cannot be made whole again.",
      "hint1": "Prophesied Tophet would become a slaughter valley for idolatry.",
      "hint2": "\"Even so will I break this people and this city, as one breaketh a potter’s vessel.\""
    }
  },
  {
    "id": "guess-the-emoji-l23-c3",
    "game_slug": "guess-the-emoji",
    "level": 23,
    "challenge_index": 3,
    "question_text": "🌾 🪙 1️⃣7️⃣ ⚖️ 🏺",
    "options": [
      "Jeremiah buying cousin's field in Anathoth for seventeen shekels",
      "Abraham buying cave of Machpelah for four hundred shekels",
      "Judas returning thirty pieces of silver to buying Potter's field",
      "David buying Ornan's threshing floor for six hundred shekels"
    ],
    "correct_answer": "Jeremiah buying cousin's field in Anathoth for seventeen shekels",
    "explanation": "Jeremiah 32:6–14 tells of Jeremiah imprisoned in court while Babylon besieged Jerusalem, buying his cousin Hanameel’s field in Anathoth for seventeen shekels of silver weighed in balances, sealing the deed in an earthen vessel.",
    "reference": "Jeremiah 32:6–14",
    "metadata": {
      "stage": 5,
      "stage_title": "Five-Detail Deep Mysteries",
      "level_title": "Prophetic Object Lessons",
      "puzzle_type": "five_detail_mystery",
      "emojis": "🌾 🪙 1️⃣7️⃣ ⚖️ 🏺",
      "prompt": "A real estate purchase during siege: 17 silver coins weighed and deeds preserved in clay.",
      "testament": "Old Testament",
      "difficulty": "Very Difficult",
      "timerSeconds": 120,
      "points": 250,
      "curated": true,
      "dossier": "Deed of Purchase: Sealed and open deeds, witnessed in court of the prison, weighed out on scales, buried in earthenware pot for future restoration.",
      "hint1": "His cousin’s name was Hanameel son of Shallum.",
      "hint2": "\"Houses and fields and vineyards shall be possessed again in this land.\""
    }
  },
  {
    "id": "guess-the-emoji-l23-c4",
    "game_slug": "guess-the-emoji",
    "level": 23,
    "challenge_index": 4,
    "question_text": "👰 💰 1️⃣5️⃣ 🌾 🐴",
    "options": [
      "Hosea redeeming Gomer for 15 silver pieces and barley homer",
      "Boaz redeeming Ruth and the parcel of Elimelech's land",
      "Jacob serving seven years each for Leah and Rachel",
      "Samson offering thirty sheets and changes of garments"
    ],
    "correct_answer": "Hosea redeeming Gomer for 15 silver pieces and barley homer",
    "explanation": "Hosea 3:1–2 recounts God telling Hosea to love a woman beloved of her friend yet an adulteress; Hosea bought her for fifteen pieces of silver, and an homer of barley, and an half homer of barley.",
    "reference": "Hosea 3:1–2",
    "metadata": {
      "stage": 5,
      "stage_title": "Five-Detail Deep Mysteries",
      "level_title": "Prophetic Object Lessons",
      "puzzle_type": "five_detail_mystery",
      "emojis": "👰 💰 1️⃣5️⃣ 🌾 🐴",
      "prompt": "Purchasing an unfaithful wife out of debt or bondage for 15 silver coins and 1.5 barley measures.",
      "testament": "Old Testament",
      "difficulty": "Very Difficult",
      "timerSeconds": 120,
      "points": 250,
      "curated": true,
      "dossier": "Redemption price: 15 pieces of silver + 1 homer of barley + 0.5 homer of barley; living demonstration of God’s persistent covenant redemption.",
      "hint1": "The prophet told her: \"Thou shalt abide for me many days; thou shalt not play the harlot.\"",
      "hint2": "Symbolized the children of Israel abiding many days without king or sacrifice."
    }
  },
  {
    "id": "guess-the-emoji-l23-c5",
    "game_slug": "guess-the-emoji",
    "level": 23,
    "challenge_index": 5,
    "question_text": "✍️ 📜 👶 🏃‍♂️ ⚔️",
    "options": [
      "Isaiah writing on a great roll: Maher-shalal-hash-baz",
      "Ezekiel eating the scroll lamentations and mourning",
      "Daniel reading the handwriting on Belshazzar's wall",
      "John eating the little book sweet in mouth bitter in belly"
    ],
    "correct_answer": "Isaiah writing on a great roll: Maher-shalal-hash-baz",
    "explanation": "Isaiah 8:1–4 records God telling Isaiah: \"Take thee a great roll, and write in it with a man’s pen concerning Maher-shalal-hash-baz\" (swift to the spoil), followed by the birth of his prophetically named son.",
    "reference": "Isaiah 8:1–4",
    "metadata": {
      "stage": 5,
      "stage_title": "Five-Detail Deep Mysteries",
      "level_title": "Prophetic Object Lessons",
      "puzzle_type": "five_detail_mystery",
      "emojis": "✍️ 📜 👶 🏃‍♂️ ⚔️",
      "prompt": "A large inscribed public placard preceding the birth of a boy with the longest prophetic name.",
      "testament": "Old Testament",
      "difficulty": "Very Difficult",
      "timerSeconds": 120,
      "points": 250,
      "curated": true,
      "dossier": "Public Notification: Inscribed with a man’s pen before faithful witnesses Uriah the priest and Zechariah; prophetic warning of Assyrian plunder.",
      "hint1": "Before the child could say \"My father\" or \"My mother\", Damascus and Samaria were spoiled.",
      "hint2": "Name means: \"Speed the spoil, hasten the booty.\""
    }
  },
  {
    "id": "guess-the-emoji-l24-c1",
    "game_slug": "guess-the-emoji",
    "level": 24,
    "challenge_index": 1,
    "question_text": "🥖 5️⃣ 🐟 2️⃣ 🧺 1️⃣2️⃣",
    "options": [
      "Feeding of the 5,000 on green grass with twelve baskets leftover",
      "Feeding of the 4,000 with seven loaves and seven baskets",
      "Elijah fed by ravens with bread and flesh at brook Cherith",
      "Elisha multiplying twenty barley loaves for one hundred men"
    ],
    "correct_answer": "Feeding of the 5,000 on green grass with twelve baskets leftover",
    "explanation": "John 6:9–13 / Matthew 14:17–20 recounts five barley loaves and two small fishes multiplying to feed five thousand men, leaving twelve baskets of fragments.",
    "reference": "John 6:9–13; Matthew 14:17–20",
    "metadata": {
      "stage": 5,
      "stage_title": "Five-Detail Deep Mysteries",
      "level_title": "Gospel Miracles & Forensic Clues",
      "puzzle_type": "five_detail_mystery",
      "emojis": "🥖 5️⃣ 🐟 2️⃣ 🧺 1️⃣2️⃣",
      "prompt": "Calculate the miracle numbers: 5 loaves, 2 fishes, 12 wicker baskets.",
      "testament": "New Testament",
      "difficulty": "Very Difficult",
      "timerSeconds": 120,
      "points": 250,
      "curated": true,
      "dossier": "Audit of Items: Provided by an unnamed lad; distributed to ranks of 50 and 100 on grass; gathered fragments exactly 12 cophinoi (wicker baskets).",
      "hint1": "Distinguish from the 4,000 where 7 loaves yielded 7 large hampers (spuris).",
      "hint2": "Andrew remarked: \"There is a lad here, which hath five barley loaves, and two small fishes.\""
    }
  },
  {
    "id": "guess-the-emoji-l24-c2",
    "game_slug": "guess-the-emoji",
    "level": 24,
    "challenge_index": 2,
    "question_text": "🎣 🌊 🐟 🪙 🏛️",
    "options": [
      "Peter catching fish with a shekel (stater) in its mouth for tribute",
      "Miraculous catch of 153 great fishes at Sea of Tiberias",
      "Miraculous draught of fishes breaking nets in Luke 5",
      "Tobias catching the great fish in river Tigris"
    ],
    "correct_answer": "Peter catching fish with a shekel (stater) in its mouth for tribute",
    "explanation": "Matthew 17:24–27 relates Jesus instructing Peter to cast an hook into the sea, open the mouth of the first fish that cometh up, find a piece of money (stater), and pay tax for them both.",
    "reference": "Matthew 17:24–27",
    "metadata": {
      "stage": 5,
      "stage_title": "Five-Detail Deep Mysteries",
      "level_title": "Gospel Miracles & Forensic Clues",
      "puzzle_type": "five_detail_mystery",
      "emojis": "🎣 🌊 🐟 🪙 🏛️",
      "prompt": "A hook line in Galilee producing currency from an aquatic creature’s jaws to settle taxes.",
      "testament": "New Testament",
      "difficulty": "Very Difficult",
      "timerSeconds": 120,
      "points": 250,
      "curated": true,
      "dossier": "Transaction: Temple didrachma collectors questioned Peter; Jesus dispatched him with hook; exact stater (4 drachmas) paid for two people.",
      "hint1": "Jesus asked: \"Of whom do the kings of the earth take custom or tribute? of their own children, or of strangers?\"",
      "hint2": "Exact instructions: \"take up the fish that first cometh up; and when thou hast opened his mouth, thou shalt find a piece of money.\""
    }
  },
  {
    "id": "guess-the-emoji-l24-c3",
    "game_slug": "guess-the-emoji",
    "level": 24,
    "challenge_index": 3,
    "question_text": "🦯 💦 🌲 🚶‍♂️ 👁️",
    "options": [
      "Two-stage healing of the blind man at Bethsaida (men as trees walking)",
      "Man born blind washing in Pool of Siloam after clay and spit",
      "Blind Bartimaeus casting off cloak and crying out by Jericho gate",
      "Healing of two blind men touching Jesus' garment in Galilee"
    ],
    "correct_answer": "Two-stage healing of the blind man at Bethsaida (men as trees walking)",
    "explanation": "Mark 8:22–26 records Jesus spitting on the blind man’s eyes and putting hands on him; the man looked up and said \"I see men as trees, walking.\" Jesus put hands again upon his eyes, and he saw clearly.",
    "reference": "Mark 8:22–26",
    "metadata": {
      "stage": 5,
      "stage_title": "Five-Detail Deep Mysteries",
      "level_title": "Gospel Miracles & Forensic Clues",
      "puzzle_type": "five_detail_mystery",
      "emojis": "🦯 💦 🌲 🚶‍♂️ 👁️",
      "prompt": "A progressive two-step restoration where humans first resembled walking timber.",
      "testament": "New Testament",
      "difficulty": "Very Difficult",
      "timerSeconds": 120,
      "points": 250,
      "curated": true,
      "dossier": "Medical Progression: Led out of the town of Bethsaida; spit applied to eyes; initial partial optics (\"men as trees, walking\"); second laying on of hands; complete clarity.",
      "hint1": "Recorded only in the Gospel of Mark.",
      "hint2": "Jesus instructed him: \"Neither go into the town, nor tell it to any in the town.\""
    }
  },
  {
    "id": "guess-the-emoji-l24-c4",
    "game_slug": "guess-the-emoji",
    "level": 24,
    "challenge_index": 4,
    "question_text": "1️⃣0️⃣ 🚶‍♂️ 🩸 1️⃣ 🙇‍♂️",
    "options": [
      "Ten lepers cleansed where only one Samaritan returned to give thanks",
      "Parable of the ten virgins waiting for the bridegroom",
      "Parable of the ten pounds delivered to ten servants",
      "Ten plagues poured out upon the land of Egypt"
    ],
    "correct_answer": "Ten lepers cleansed where only one Samaritan returned to give thanks",
    "explanation": "Luke 17:11–19 recounts ten men that were lepers crying for mercy; as they went to the priests they were cleansed, but only one, a Samaritan, turned back and fell down at Jesus’ feet giving thanks.",
    "reference": "Luke 17:11–19",
    "metadata": {
      "stage": 5,
      "stage_title": "Five-Detail Deep Mysteries",
      "level_title": "Gospel Miracles & Forensic Clues",
      "puzzle_type": "five_detail_mystery",
      "emojis": "1️⃣0️⃣ 🚶‍♂️ 🩸 1️⃣ 🙇‍♂️",
      "prompt": "A 90% deficit in gratitude: ten restored along border road, one solitary foreigner returning.",
      "testament": "New Testament",
      "difficulty": "Very Difficult",
      "timerSeconds": 120,
      "points": 250,
      "curated": true,
      "dossier": "Demographic breakdown: Encounter on border of Samaria and Galilee; 10 afflicted cleansed en route; 9 vanished without acknowledgment; 1 foreigner glorified God.",
      "hint1": "Jesus asked: \"Were there not ten cleansed? but where are the nine?\"",
      "hint2": "\"There are not found that returned to give glory to God, save this stranger.\""
    }
  },
  {
    "id": "guess-the-emoji-l24-c5",
    "game_slug": "guess-the-emoji",
    "level": 24,
    "challenge_index": 5,
    "question_text": "💒 6️⃣ 🪨 🏺 🍷",
    "options": [
      "Water transformed to wine in six stone waterpots at Cana wedding",
      "Pouring of the six golden vials of wrath in Revelation",
      "Six cities of refuge set apart across Jordan and Canaan",
      "Boaz giving Ruth six measures of barley before daybreak"
    ],
    "correct_answer": "Water transformed to wine in six stone waterpots at Cana wedding",
    "explanation": "John 2:1–11 describes six waterpots of stone after the manner of the purifying of the Jews, containing two or three firkins apiece, filled to the brim with water and drawn out as superior wine.",
    "reference": "John 2:1–11",
    "metadata": {
      "stage": 5,
      "stage_title": "Five-Detail Deep Mysteries",
      "level_title": "Gospel Miracles & Forensic Clues",
      "puzzle_type": "five_detail_mystery",
      "emojis": "💒 6️⃣ 🪨 🏺 🍷",
      "prompt": "Six stone ritual purification vessels holding 20-30 gallons each transformed at a feast.",
      "testament": "New Testament",
      "difficulty": "Very Difficult",
      "timerSeconds": 120,
      "points": 250,
      "curated": true,
      "dossier": "Vessel Specs: Six carved stone waterpots used for ceremonial washings; total volume ~120–180 gallons; filled to the brim before transmutation.",
      "hint1": "Governor of feast remarked: \"Thou hast kept the good wine until now.\"",
      "hint2": "Described as the \"beginning of miracles\" done in Cana of Galilee."
    }
  },
  {
    "id": "guess-the-emoji-l25-c1",
    "game_slug": "guess-the-emoji",
    "level": 25,
    "challenge_index": 1,
    "question_text": "⛓️ 2️⃣ 😴 👼 🚪 🗝️",
    "options": [
      "Peter sleeping between two soldiers freed by an angel from prison",
      "Paul and Silas singing hymns at midnight in Philippian stocks",
      "John receiving Revelation while exiled in Isle of Patmos",
      "Daniel sleeping peacefully in the lions' den in Babylon"
    ],
    "correct_answer": "Peter sleeping between two soldiers freed by an angel from prison",
    "explanation": "Acts 12:6–10 describes Peter sleeping between two soldiers bound with two chains; an angel appeared, a light shined, chains fell off, and the iron gate opened of its own accord.",
    "reference": "Acts 12:6–10",
    "metadata": {
      "stage": 5,
      "stage_title": "Five-Detail Deep Mysteries",
      "level_title": "Acts & Apostolic Forensic Mysteries",
      "puzzle_type": "five_detail_mystery",
      "emojis": "⛓️ 2️⃣ 😴 👼 🚪 🗝️",
      "prompt": "A condemned apostle bound between two sentries escorted past wards by celestial escort.",
      "testament": "New Testament",
      "difficulty": "Very Difficult",
      "timerSeconds": 120,
      "points": 250,
      "curated": true,
      "dossier": "Prison Security: Four quaternions of soldiers; two guards chained directly to prisoner; keepers before the door; automated iron gate to city.",
      "hint1": "Herod intended to execute him after Easter / Passover.",
      "hint2": "Peter thought he saw a vision until he walked past the first and second wards."
    }
  },
  {
    "id": "guess-the-emoji-l25-c2",
    "game_slug": "guess-the-emoji",
    "level": 25,
    "challenge_index": 2,
    "question_text": "🏝️ 🔥 🪵 🐍 🖐️",
    "options": [
      "Paul shaking the viper from his hand into the Malta bonfire",
      "Moses' bronze serpent set on pole in the wilderness",
      "Elijah summoning fire upon altar drenched in water",
      "Aaron's rod swallowing the rods of Egyptian magicians"
    ],
    "correct_answer": "Paul shaking the viper from his hand into the Malta bonfire",
    "explanation": "Acts 28:3–6 relates Paul gathering sticks for a fire on Malta when a viper came out of the heat and fastened on his hand; islanders expected him to drop dead, but he shook it into fire unharmed.",
    "reference": "Acts 28:3–6",
    "metadata": {
      "stage": 5,
      "stage_title": "Five-Detail Deep Mysteries",
      "level_title": "Acts & Apostolic Forensic Mysteries",
      "puzzle_type": "five_detail_mystery",
      "emojis": "🏝️ 🔥 🪵 🐍 🖐️",
      "prompt": "A venomous serpent latches onto an apostle’s hand in front of barbarian witnesses.",
      "testament": "New Testament",
      "difficulty": "Very Difficult",
      "timerSeconds": 120,
      "points": 250,
      "curated": true,
      "dossier": "Medical Toxicology: Venomous viper attached to wrist in cold rain on Melita; spectators declared him a murderer pursued by Justice, then changed minds to call him a god.",
      "hint1": "Occurred immediately after shipwreck on the island of Melita.",
      "hint2": "He felt no harm, fulfilling the promise of Mark 16:18."
    }
  },
  {
    "id": "guess-the-emoji-l25-c3",
    "game_slug": "guess-the-emoji",
    "level": 25,
    "challenge_index": 3,
    "question_text": "🧺 🪢 🧱 🪟 🏃‍♂️",
    "options": [
      "Paul lowered down Damascus city wall in a basket by night",
      "Rahab lowering the two spies down Jericho wall by red cord",
      "David escaping through the window with Michal's help",
      "Spies escaping Absalom by hiding in a well at Bahurim"
    ],
    "correct_answer": "Paul lowered down Damascus city wall in a basket by night",
    "explanation": "Acts 9:25 and 2 Corinthians 11:32–33 record how the governor under Aretas the king kept the city of Damascus with a garrison to apprehend Paul; through a window in a basket was he let down by the wall and escaped.",
    "reference": "Acts 9:25; 2 Corinthians 11:32–33",
    "metadata": {
      "stage": 5,
      "stage_title": "Five-Detail Deep Mysteries",
      "level_title": "Acts & Apostolic Forensic Mysteries",
      "puzzle_type": "five_detail_mystery",
      "emojis": "🧺 🪢 🧱 🪟 🏃‍♂️",
      "prompt": "A covert rope-and-hamper descent through a fortress embrasure to evade King Aretas’ garrison.",
      "testament": "New Testament",
      "difficulty": "Very Difficult",
      "timerSeconds": 120,
      "points": 250,
      "curated": true,
      "dossier": "Evasion Record: City gates guarded day and night by governor under King Aretas; disciples lowered him in a large braided basket (spuris) through wall window.",
      "hint1": "Mentioned by Paul as a boasting in his infirmities.",
      "hint2": "Took place shortly after his conversion in Damascus."
    }
  },
  {
    "id": "guess-the-emoji-l25-c4",
    "game_slug": "guess-the-emoji",
    "level": 25,
    "challenge_index": 4,
    "question_text": "🔮 👖 🪢 🦶 🖐️",
    "options": [
      "Agabus binding his own hands and feet with Paul's girdle",
      "Jeremiah wearing a wooden yoke before King Zedekiah",
      "Ezekiel bound with bands in his own house by divine order",
      "Samson bound with seven green withs by Delilah"
    ],
    "correct_answer": "Agabus binding his own hands and feet with Paul's girdle",
    "explanation": "Acts 21:10–11 records prophet Agabus coming down from Judea to Caesarea; he took Paul’s girdle, bound his own hands and feet, and said: \"So shall the Jews at Jerusalem bind the man that owneth this girdle.\"",
    "reference": "Acts 21:10–11",
    "metadata": {
      "stage": 5,
      "stage_title": "Five-Detail Deep Mysteries",
      "level_title": "Acts & Apostolic Forensic Mysteries",
      "puzzle_type": "five_detail_mystery",
      "emojis": "🔮 👖 🪢 🦶 🖐️",
      "prompt": "A traveling prophet uses another man’s belt to tie his own extremities as a prophetic warning.",
      "testament": "New Testament",
      "difficulty": "Very Difficult",
      "timerSeconds": 120,
      "points": 250,
      "curated": true,
      "dossier": "Prophetic Action: Caesarea residence of Philip the evangelist; Prophet Agabus borrowed Paul’s belt, self-immobilized hands and feet, delivered Holy Ghost oracle.",
      "hint1": "Disciples wept and begged Paul not to go up to Jerusalem.",
      "hint2": "Paul replied: \"I am ready not to be bound only, but also to die at Jerusalem.\""
    }
  },
  {
    "id": "guess-the-emoji-l25-c5",
    "game_slug": "guess-the-emoji",
    "level": 25,
    "challenge_index": 5,
    "question_text": "🚢 2️⃣7️⃣6️⃣ 🌊 🪵 🏝️",
    "options": [
      "Paul's shipwreck on Malta where all 276 souls escaped on boards",
      "Jesus calming the storm on Sea of Galilee with disciples",
      "Jonah cast into the sea by mariners bound for Tarshish",
      "Noah and his eight family members preserved in wooden ark"
    ],
    "correct_answer": "Paul's shipwreck on Malta where all 276 souls escaped on boards",
    "explanation": "Acts 27:37–44 specifies there were in all in the ship 276 souls; the ship ran aground where two seas met and broke of the violence of the waves, but all escaped safe to land on boards and broken pieces.",
    "reference": "Acts 27:37–44",
    "metadata": {
      "stage": 5,
      "stage_title": "Five-Detail Deep Mysteries",
      "level_title": "Acts & Apostolic Forensic Mysteries",
      "puzzle_type": "five_detail_mystery",
      "emojis": "🚢 2️⃣7️⃣6️⃣ 🌊 🪵 🏝️",
      "prompt": "An exact naval manifest of 276 passengers surviving catastrophic grounding on flotsam.",
      "testament": "New Testament",
      "difficulty": "Very Difficult",
      "timerSeconds": 120,
      "points": 250,
      "curated": true,
      "dossier": "Admiralty Log: Ship of Alexandria loaded with wheat; Euroclydon storm; struck sandbar where two seas met; centurion Julius prevented soldiers from killing prisoners.",
      "hint1": "An angel had assured Paul: \"Lo, God hath given thee all them that sail with thee.\"",
      "hint2": "The vessel was lightened by casting the wheat into the sea."
    }
  },
  {
    "id": "guess-the-emoji-l26-c1",
    "game_slug": "guess-the-emoji",
    "level": 26,
    "challenge_index": 1,
    "question_text": "🐑 🌳 🍈 👑 🗣️",
    "options": [
      "Amos of Tekoa",
      "Micah of Moresheth",
      "Joel son of Pethuel",
      "Zephaniah son of Cushi"
    ],
    "correct_answer": "Amos of Tekoa",
    "explanation": "Amos 7:14 states: \"I was no prophet, neither was I a prophet’s son; but I was an herdman, and a gatherer of sycomore fruit.\" Amos confronted Amaziah the priest of Bethel.",
    "reference": "Amos 7:14; 1:1",
    "metadata": {
      "stage": 6,
      "stage_title": "Minor Prophets, Restoration & Epistles",
      "level_title": "Minor Prophets Symbols",
      "puzzle_type": "exact_person",
      "emojis": "🐑 🌳 🍈 👑 🗣️",
      "prompt": "Identify the rustic prophet who pierced sycomore figs and tended sheep in Tekoa.",
      "testament": "Old Testament",
      "difficulty": "Expert",
      "timerSeconds": 90,
      "points": 200,
      "curated": true,
      "hint1": "Amaziah the priest warned him: \"O thou seer, go, flee thee away into the land of Judah.\"",
      "hint2": "Saw visions of a plumbline and a basket of summer fruit."
    }
  },
  {
    "id": "guess-the-emoji-l26-c2",
    "game_slug": "guess-the-emoji",
    "level": 26,
    "challenge_index": 2,
    "question_text": "🌿 🐛 ☀️ 💨 😡",
    "options": [
      "Jonah's withered gourd, destructive worm, and scorching east wind",
      "Elijah under the juniper tree requesting to die",
      "Job sitting in ashes scraping boils with a potsherd",
      "Amos beholding locusts eating grass of the land"
    ],
    "correct_answer": "Jonah's withered gourd, destructive worm, and scorching east wind",
    "explanation": "Jonah 4:6–9 describes God preparing a gourd to shade Jonah, then preparing a worm that smote the gourd, and a vehement east wind; Jonah fainted and said \"It is better for me to die than to live.\"",
    "reference": "Jonah 4:6–9",
    "metadata": {
      "stage": 6,
      "stage_title": "Minor Prophets, Restoration & Epistles",
      "level_title": "Minor Prophets Symbols",
      "puzzle_type": "no_obvious_clues",
      "emojis": "🌿 🐛 ☀️ 💨 😡",
      "prompt": "A leafy shelter eaten by an insect at sunrise provoking prophetic indignation.",
      "testament": "Old Testament",
      "difficulty": "Expert",
      "timerSeconds": 90,
      "points": 200,
      "curated": true,
      "hint1": "God challenged: \"Doest thou well to be angry for the gourd?\"",
      "hint2": "Used to teach compassion for the 120,000 citizens of Nineveh."
    }
  },
  {
    "id": "guess-the-emoji-l26-c3",
    "game_slug": "guess-the-emoji",
    "level": 26,
    "challenge_index": 3,
    "question_text": "🌾 🏠 👑 👶 ⏳",
    "options": [
      "Micah's prophecy of the Ruler originating in Bethlehem Ephratah",
      "Isaiah's prophecy of a virgin conceiving Immanuel",
      "Jeremiah's prophecy of Rachel weeping for her children",
      "Hosea's prophecy: Out of Egypt have I called my son"
    ],
    "correct_answer": "Micah's prophecy of the Ruler originating in Bethlehem Ephratah",
    "explanation": "Micah 5:2 declares: \"But thou, Beth-lehem Ephratah, though thou be little among the thousands of Judah, yet out of thee shall he come forth unto me that is to be ruler in Israel; whose goings forth have been from of old, from everlasting.\"",
    "reference": "Micah 5:2",
    "metadata": {
      "stage": 6,
      "stage_title": "Minor Prophets, Restoration & Epistles",
      "level_title": "Minor Prophets Symbols",
      "puzzle_type": "no_obvious_clues",
      "emojis": "🌾 🏠 👑 👶 ⏳",
      "prompt": "An ancient oracle predicting the eternal Sovereign born in Judah’s smallest hamlet.",
      "testament": "Old Testament",
      "difficulty": "Expert",
      "timerSeconds": 90,
      "points": 200,
      "curated": true,
      "hint1": "Quoted by chief priests and scribes to King Herod in Matthew 2.",
      "hint2": "Bethlehem means \"House of Bread\"."
    }
  },
  {
    "id": "guess-the-emoji-l26-c4",
    "game_slug": "guess-the-emoji",
    "level": 26,
    "challenge_index": 4,
    "question_text": "🏰 🔭 📜 🏃‍♂️ ⏳",
    "options": [
      "Habakkuk standing upon the watchtower to write the vision on tables",
      "Isaiah beholding the Lord high and lifted up in the temple",
      "Ezekiel set as a watchman over the house of Israel",
      "Jeremiah watching an almond rod and seething pot"
    ],
    "correct_answer": "Habakkuk standing upon the watchtower to write the vision on tables",
    "explanation": "Habakkuk 2:1–3 states: \"I will stand upon my watch, and set me upon the tower... And the Lord answered me, and said, Write the vision, and make it plain upon tables, that he may run that readeth it.\"",
    "reference": "Habakkuk 2:1–3",
    "metadata": {
      "stage": 6,
      "stage_title": "Minor Prophets, Restoration & Epistles",
      "level_title": "Minor Prophets Symbols",
      "puzzle_type": "no_obvious_clues",
      "emojis": "🏰 🔭 📜 🏃‍♂️ ⏳",
      "prompt": "A rampart sentinel instructed to chisel an urgent message so runners can read on the fly.",
      "testament": "Old Testament",
      "difficulty": "Expert",
      "timerSeconds": 90,
      "points": 200,
      "curated": true,
      "hint1": "Contains the seminal doctrine: \"The just shall live by his faith.\"",
      "hint2": "\"For the vision is yet for an appointed time, but at the end it shall speak, and not lie.\""
    }
  },
  {
    "id": "guess-the-emoji-l26-c5",
    "game_slug": "guess-the-emoji",
    "level": 26,
    "challenge_index": 5,
    "question_text": "📜 🕊️ 2️⃣0️⃣ 1️⃣0️⃣ 🏠",
    "options": [
      "Zechariah's flying roll measuring twenty cubits by ten cubits",
      "John's little open book sweet as honey in Revelation",
      "Ezekiel's roll written within and without with lamentations",
      "Jeremiah's scroll cut with penknife and burned in fireplace"
    ],
    "correct_answer": "Zechariah's flying roll measuring twenty cubits by ten cubits",
    "explanation": "Zechariah 5:1–4 describes a flying roll, the length thereof twenty cubits, and the breadth ten cubits, which is the curse that goeth forth over the face of the whole earth to consume thieves and perjurers.",
    "reference": "Zechariah 5:1–4",
    "metadata": {
      "stage": 6,
      "stage_title": "Minor Prophets, Restoration & Epistles",
      "level_title": "Minor Prophets Symbols",
      "puzzle_type": "no_obvious_clues",
      "emojis": "📜 🕊️ 2️⃣0️⃣ 1️⃣0️⃣ 🏠",
      "prompt": "A giant airborne manuscript with dimensions 20x10 cubits entering houses of thieves.",
      "testament": "Old Testament",
      "difficulty": "Expert",
      "timerSeconds": 90,
      "points": 200,
      "curated": true,
      "hint1": "Dimensions match exactly the Holy Place of the Tabernacle.",
      "hint2": "Consumes timber and stones of dishonest houses."
    }
  },
  {
    "id": "guess-the-emoji-l27-c1",
    "game_slug": "guess-the-emoji",
    "level": 27,
    "challenge_index": 1,
    "question_text": "🦊 🧱 💥 🗣️ 🏹",
    "options": [
      "Sanballat and Tobiah sneering that even a fox would break their stone wall",
      "Samson catching three hundred foxes and tying firebrands to tails",
      "Jesus referring to Herod Antipas as 'that fox'",
      "Song of Solomon catching the little foxes that spoil the vines"
    ],
    "correct_answer": "Sanballat and Tobiah sneering that even a fox would break their stone wall",
    "explanation": "Nehemiah 4:3 records Tobiah the Ammonite mocking: \"Even that which they build, if a fox go up, he shall even break down their stone wall.\" Nehemiah prayed and set armed guards.",
    "reference": "Nehemiah 4:3",
    "metadata": {
      "stage": 6,
      "stage_title": "Minor Prophets, Restoration & Epistles",
      "level_title": "Post-Exilic Restoration Puzzles",
      "puzzle_type": "no_obvious_clues",
      "emojis": "🦊 🧱 💥 🗣️ 🏹",
      "prompt": "A sarcastic taunt that an agile small carnivore could topple Jerusalem’s new masonry.",
      "testament": "Old Testament",
      "difficulty": "Expert",
      "timerSeconds": 90,
      "points": 200,
      "curated": true,
      "hint1": "Uttered by Tobiah the Ammonite alongside Sanballat the Horonite.",
      "hint2": "Builders continued with a trowel in one hand and a spear in the other."
    }
  },
  {
    "id": "guess-the-emoji-l27-c2",
    "game_slug": "guess-the-emoji",
    "level": 27,
    "challenge_index": 2,
    "question_text": "📜 👑 5️⃣4️⃣0️⃣0️⃣ 🪙 🏛️",
    "options": [
      "Cyrus issuing decree and returning 5,400 gold and silver temple vessels",
      "Solomon receiving 666 talents of gold in one year",
      "David preparing one hundred thousand talents of gold for temple",
      "Nebuchadnezzar looting sacred temple treasures to Babylon"
    ],
    "correct_answer": "Cyrus issuing decree and returning 5,400 gold and silver temple vessels",
    "explanation": "Ezra 1:7–11 states that Cyrus the king brought forth the vessels of the house of the Lord, counting out chargers, knives, and basons to Sheshbazzar; all vessels of gold and silver were 5,400.",
    "reference": "Ezra 1:7–11",
    "metadata": {
      "stage": 6,
      "stage_title": "Minor Prophets, Restoration & Epistles",
      "level_title": "Post-Exilic Restoration Puzzles",
      "puzzle_type": "no_obvious_clues",
      "emojis": "📜 👑 5️⃣4️⃣0️⃣0️⃣ 🪙 🏛️",
      "prompt": "A Persian imperial proclamation releasing 5,400 confiscated sacred liturgical artifacts.",
      "testament": "Old Testament",
      "difficulty": "Expert",
      "timerSeconds": 90,
      "points": 200,
      "curated": true,
      "hint1": "Delivered by Mithredath the treasurer to Sheshbazzar prince of Judah.",
      "hint2": "Fulfilled the prophecy of Jeremiah concerning the 70 years."
    }
  },
  {
    "id": "guess-the-emoji-l27-c3",
    "game_slug": "guess-the-emoji",
    "level": 27,
    "challenge_index": 3,
    "question_text": "🪨 👑 🕊️ 🗣️ 👏",
    "options": [
      "Zerubbabel bringing forth the headstone with shouts of Grace, grace",
      "Moses striking the rock at Horeb to bring forth water",
      "Joshua setting up great stone under oak by sanctuary of Shechem",
      "Builders laying foundation of second temple with weeping and joy"
    ],
    "correct_answer": "Zerubbabel bringing forth the headstone with shouts of Grace, grace",
    "explanation": "Zechariah 4:7 proclaims: \"Who art thou, O great mountain? before Zerubbabel thou shalt become a plain: and he shall bring forth the headstone thereof with shoutings, crying, Grace, grace unto it.\"",
    "reference": "Zechariah 4:7",
    "metadata": {
      "stage": 6,
      "stage_title": "Minor Prophets, Restoration & Epistles",
      "level_title": "Post-Exilic Restoration Puzzles",
      "puzzle_type": "no_obvious_clues",
      "emojis": "🪨 👑 🕊️ 🗣️ 👏",
      "prompt": "The governor places the final capstone to jubilant acclamations of unmerited favor.",
      "testament": "Old Testament",
      "difficulty": "Expert",
      "timerSeconds": 90,
      "points": 200,
      "curated": true,
      "hint1": "\"Not by might, nor by power, but by my spirit, saith the Lord of hosts.\"",
      "hint2": "Accompanied by the vision of the golden candlestick and two olive trees."
    }
  },
  {
    "id": "guess-the-emoji-l27-c4",
    "game_slug": "guess-the-emoji",
    "level": 27,
    "challenge_index": 4,
    "question_text": "🪵 5️⃣0️⃣ 🪢 👑 💀",
    "options": [
      "Haman hanged upon the fifty-cubit gallows prepared for Mordecai",
      "Absalom hanging by hair from great oak tree",
      "Seven sons of Saul hanged before the Lord at Gibeah",
      "King of Ai hanged on a tree until evening by Joshua"
    ],
    "correct_answer": "Haman hanged upon the fifty-cubit gallows prepared for Mordecai",
    "explanation": "Esther 7:9–10 describes Harbonah pointing out the gallows fifty cubits high in Haman’s house which he had made for Mordecai; King Ahasuerus commanded: \"Hang him thereon.\"",
    "reference": "Esther 7:9–10",
    "metadata": {
      "stage": 6,
      "stage_title": "Minor Prophets, Restoration & Epistles",
      "level_title": "Post-Exilic Restoration Puzzles",
      "puzzle_type": "no_obvious_clues",
      "emojis": "🪵 5️⃣0️⃣ 🪢 👑 💀",
      "prompt": "A 75-foot punitive scaffold turned against the architect who erected it.",
      "testament": "Old Testament",
      "difficulty": "Expert",
      "timerSeconds": 90,
      "points": 200,
      "curated": true,
      "hint1": "Unveiled by Queen Esther during her second banquet of wine.",
      "hint2": "Chamberlain Harbonah alerted the king to its existence."
    }
  },
  {
    "id": "guess-the-emoji-l27-c5",
    "game_slug": "guess-the-emoji",
    "level": 27,
    "challenge_index": 5,
    "question_text": "👑 🍷 👸 🚫 🚪",
    "options": [
      "Queen Vashti",
      "Queen Jezebel",
      "Queen Athaliah",
      "Queen Maachah"
    ],
    "correct_answer": "Queen Vashti",
    "explanation": "Esther 1:10–12 records King Ahasuerus commanding Queen Vashti to come with the royal crown to show the people and princes her beauty; but Queen Vashti refused to come at the king’s commandment.",
    "reference": "Esther 1:10–12",
    "metadata": {
      "stage": 6,
      "stage_title": "Minor Prophets, Restoration & Epistles",
      "level_title": "Post-Exilic Restoration Puzzles",
      "puzzle_type": "exact_person",
      "emojis": "👑 🍷 👸 🚫 🚪",
      "prompt": "Identify the Persian queen deposed for refusing to parade her beauty before drunken banquet lords.",
      "testament": "Old Testament",
      "difficulty": "Expert",
      "timerSeconds": 90,
      "points": 200,
      "curated": true,
      "hint1": "Memucan advised the king to banish her lest women despise their husbands.",
      "hint2": "Paved the way for Esther to be chosen queen."
    }
  },
  {
    "id": "guess-the-emoji-l28-c1",
    "game_slug": "guess-the-emoji",
    "level": 28,
    "challenge_index": 1,
    "question_text": "👑 🍞 🍷 ♾️ 🏛️",
    "options": [
      "Melchizedek",
      "Aaron the Levite",
      "Jethro priest of Midian",
      "Phinehas son of Eleazar"
    ],
    "correct_answer": "Melchizedek",
    "explanation": "Hebrews 7:1–3 describes Melchizedek, king of Salem and priest of the most high God, who met Abraham with bread and wine; without father, mother, or descent, having neither beginning of days nor end of life.",
    "reference": "Hebrews 7:1–3; Genesis 14:18",
    "metadata": {
      "stage": 6,
      "stage_title": "Minor Prophets, Restoration & Epistles",
      "level_title": "Epistolary Enigmas",
      "puzzle_type": "exact_person",
      "emojis": "👑 🍞 🍷 ♾️ 🏛️",
      "prompt": "King of Salem and eternal priest without genealogy who received tithes from Abraham.",
      "testament": "Cross-Testament",
      "difficulty": "Expert",
      "timerSeconds": 90,
      "points": 200,
      "curated": true,
      "hint1": "Name means \"King of righteousness\", and title means \"King of peace\".",
      "hint2": "Jesus is called a priest forever after his order in Psalm 110 and Hebrews."
    }
  },
  {
    "id": "guess-the-emoji-l28-c2",
    "game_slug": "guess-the-emoji",
    "level": 28,
    "challenge_index": 2,
    "question_text": "👼 👿 🗣️ 💀 📜",
    "options": [
      "Michael the archangel contending with the devil over body of Moses",
      "Angel Gabriel fighting the Prince of Persia twenty-one days",
      "Satan standing at Joshua the high priest's right hand to resist him",
      "Lucifer falling from heaven like lightning in Isaiah 14"
    ],
    "correct_answer": "Michael the archangel contending with the devil over body of Moses",
    "explanation": "Jude 1:9 states: \"Yet Michael the archangel, when contending with the devil he disputed about the body of Moses, durst not bring against him a railing accusation, but said, The Lord rebuke thee.\"",
    "reference": "Jude 1:9",
    "metadata": {
      "stage": 6,
      "stage_title": "Minor Prophets, Restoration & Epistles",
      "level_title": "Epistolary Enigmas",
      "puzzle_type": "no_obvious_clues",
      "emojis": "👼 👿 🗣️ 💀 📜",
      "prompt": "A cosmic dispute over the concealed physical remains of Israel’s lawgiver.",
      "testament": "New Testament",
      "difficulty": "Expert",
      "timerSeconds": 90,
      "points": 200,
      "curated": true,
      "hint1": "The archangel said: \"The Lord rebuke thee.\"",
      "hint2": "Recorded only in the Epistle of Jude."
    }
  },
  {
    "id": "guess-the-emoji-l28-c3",
    "game_slug": "guess-the-emoji",
    "level": 28,
    "challenge_index": 3,
    "question_text": "7️⃣ 👨 ☁️ 1️⃣0️⃣0️⃣0️⃣0️⃣ 👑",
    "options": [
      "Enoch the seventh from Adam prophesying the Lord's return with saints",
      "Noah preaching righteousness one hundred and twenty years",
      "Methuselah living nine hundred and sixty-nine years",
      "Lamech boasting of slaying a young man to his hurt"
    ],
    "correct_answer": "Enoch the seventh from Adam prophesying the Lord's return with saints",
    "explanation": "Jude 1:14–15 declares: \"And Enoch also, the seventh from Adam, prophesied of these, saying, Behold, the Lord cometh with ten thousands of his saints, to execute judgment upon all.\"",
    "reference": "Jude 1:14–15",
    "metadata": {
      "stage": 6,
      "stage_title": "Minor Prophets, Restoration & Epistles",
      "level_title": "Epistolary Enigmas",
      "puzzle_type": "no_obvious_clues",
      "emojis": "7️⃣ 👨 ☁️ 1️⃣0️⃣0️⃣0️⃣0️⃣ 👑",
      "prompt": "An antediluvian patriarch who walked with God prophecies the apocalypse with myriads of saints.",
      "testament": "New Testament",
      "difficulty": "Expert",
      "timerSeconds": 90,
      "points": 200,
      "curated": true,
      "hint1": "Specifically identified as \"the seventh from Adam\".",
      "hint2": "Did not see death, for God took him."
    }
  },
  {
    "id": "guess-the-emoji-l28-c4",
    "game_slug": "guess-the-emoji",
    "level": 28,
    "challenge_index": 4,
    "question_text": "🗣️ 📖 💦 👫 🏛️",
    "options": [
      "Apollos of Alexandria",
      "Barnabas of Cyprus",
      "Silas of Jerusalem",
      "Timothy of Lystra"
    ],
    "correct_answer": "Apollos of Alexandria",
    "explanation": "Acts 18:24–26 introduces Apollos, an eloquent man born at Alexandria, mighty in scriptures, knowing only the baptism of John, whom Aquila and Priscilla took and expounded the way of God more perfectly.",
    "reference": "Acts 18:24–26",
    "metadata": {
      "stage": 6,
      "stage_title": "Minor Prophets, Restoration & Epistles",
      "level_title": "Epistolary Enigmas",
      "puzzle_type": "exact_person",
      "emojis": "🗣️ 📖 💦 👫 🏛️",
      "prompt": "An eloquent Alexandrian scholar tutored in the complete gospel by a tentmaking couple.",
      "testament": "New Testament",
      "difficulty": "Expert",
      "timerSeconds": 90,
      "points": 200,
      "curated": true,
      "hint1": "Paul wrote: \"I have planted, Apollos watered; but God gave the increase.\"",
      "hint2": "Confounded the Jews publicly in Achaia showing from Scripture that Jesus was Christ."
    }
  },
  {
    "id": "guess-the-emoji-l28-c5",
    "game_slug": "guess-the-emoji",
    "level": 28,
    "challenge_index": 5,
    "question_text": "🧥 📜 📦 ❄️ 🏛️",
    "options": [
      "Paul requesting cloak, books, and parchments left at Troas with Carpus",
      "Elijah leaving mantle behind for Elisha at Jordan",
      "Samuel's mother bringing him a little coat to Shiloh",
      "Joseph leaving his goodly coat in Potiphar's house"
    ],
    "correct_answer": "Paul requesting cloak, books, and parchments left at Troas with Carpus",
    "explanation": "2 Timothy 4:13 requests: \"The cloke that I left at Troas with Carpus, when thou comest, bring with thee, and the books, but especially the parchments.\"",
    "reference": "2 Timothy 4:13",
    "metadata": {
      "stage": 6,
      "stage_title": "Minor Prophets, Restoration & Epistles",
      "level_title": "Epistolary Enigmas",
      "puzzle_type": "no_obvious_clues",
      "emojis": "🧥 📜 📦 ❄️ 🏛️",
      "prompt": "A chilling Roman dungeon request: an outer garment, scrolls, and animal-skin leaves.",
      "testament": "New Testament",
      "difficulty": "Expert",
      "timerSeconds": 90,
      "points": 200,
      "curated": true,
      "hint1": "Left behind in the city of Troas with brother Carpus.",
      "hint2": "Paul urged Timothy to do his diligence to come before winter."
    }
  },
  {
    "id": "guess-the-emoji-l29-c1",
    "game_slug": "guess-the-emoji",
    "level": 29,
    "challenge_index": 1,
    "question_text": "👑 🐂 🐑 🪨 📯",
    "options": [
      "Adonijah son of Haggith",
      "Absalom son of Maacah",
      "Amnon son of Ahinoam",
      "Sheba son of Bichri"
    ],
    "correct_answer": "Adonijah son of Haggith",
    "explanation": "1 Kings 1:5–10 records Adonijah exalting himself saying \"I will be king\", preparing chariots and horsemen, and slaying sheep and oxen by the stone of Zoheleth near En-rogel.",
    "reference": "1 Kings 1:5–10",
    "metadata": {
      "stage": 6,
      "stage_title": "Minor Prophets, Restoration & Epistles",
      "level_title": "Obscure Kings & Pretenders",
      "puzzle_type": "exact_person",
      "emojis": "👑 🐂 🐑 🪨 📯",
      "prompt": "David’s eldest surviving prince who usurped the throne with feasting at the Serpent’s Stone.",
      "testament": "Old Testament",
      "difficulty": "Expert",
      "timerSeconds": 90,
      "points": 200,
      "curated": true,
      "hint1": "Supported by general Joab and priest Abiathar, but not Zadok or Nathan.",
      "hint2": "Fled to hold the horns of the altar when Solomon was anointed at Gihon."
    }
  },
  {
    "id": "guess-the-emoji-l29-c2",
    "game_slug": "guess-the-emoji",
    "level": 29,
    "challenge_index": 2,
    "question_text": "7️⃣ 👑 🏰 🔥 💀",
    "options": [
      "Zimri of Israel",
      "Shallum of Israel",
      "Tibni of Israel",
      "Zechariah of Israel"
    ],
    "correct_answer": "Zimri of Israel",
    "explanation": "1 Kings 16:15–18 states Zimri reigned seven days in Tirzah; when Omri besieged the city, Zimri went into the palace of the king’s house and burnt the king’s house over him with fire, and died.",
    "reference": "1 Kings 16:15–18",
    "metadata": {
      "stage": 6,
      "stage_title": "Minor Prophets, Restoration & Epistles",
      "level_title": "Obscure Kings & Pretenders",
      "puzzle_type": "exact_person",
      "emojis": "7️⃣ 👑 🏰 🔥 💀",
      "prompt": "Identify the chariot captain who reigned only one week and committed palace self-immolation.",
      "testament": "Old Testament",
      "difficulty": "Expert",
      "timerSeconds": 90,
      "points": 200,
      "curated": true,
      "hint1": "Murdered King Elah while he was drinking himself drunk in Tirzah.",
      "hint2": "Jezebel later taunted Jehu: \"Had Zimri peace, who slew his master?\""
    }
  },
  {
    "id": "guess-the-emoji-l29-c3",
    "game_slug": "guess-the-emoji",
    "level": 29,
    "challenge_index": 3,
    "question_text": "👑 👶 🏛️ 📯 🗣️",
    "options": [
      "Queen Athaliah",
      "Queen Jezebel",
      "Queen Maachah",
      "Queen Vashti"
    ],
    "correct_answer": "Queen Athaliah",
    "explanation": "2 Kings 11:13–14 records Athaliah hearing the noise of the guard and people when 7-year-old Joash was crowned; she looked and saw the king standing by the pillar, rent her clothes, and cried \"Treason, Treason!\"",
    "reference": "2 Kings 11:13–14",
    "metadata": {
      "stage": 6,
      "stage_title": "Minor Prophets, Restoration & Epistles",
      "level_title": "Obscure Kings & Pretenders",
      "puzzle_type": "exact_person",
      "emojis": "👑 👶 🏛️ 📯 🗣️",
      "prompt": "Identify the usurping queen mother who cried \"Treason!\" when Joash was acclaimed.",
      "testament": "Old Testament",
      "difficulty": "Expert",
      "timerSeconds": 90,
      "points": 200,
      "curated": true,
      "hint1": "Daughter of Ahab and Jezebel who murdered all other royal seed of Judah.",
      "hint2": "Executed near the horse gate of the royal palace."
    }
  },
  {
    "id": "guess-the-emoji-l29-c4",
    "game_slug": "guess-the-emoji",
    "level": 29,
    "challenge_index": 4,
    "question_text": "🏰 🍷 🗡️ 🕳️ 💀",
    "options": [
      "Ishmael son of Nethaniah assassinating Gedaliah and dumping bodies into pit",
      "Absalom having Amnon killed at the sheep-shearing feast",
      "Jehu slaying seventy sons of Ahab in Samaria",
      "Baasha assassinating Nadab at Gibbethon"
    ],
    "correct_answer": "Ishmael son of Nethaniah assassinating Gedaliah and dumping bodies into pit",
    "explanation": "Jeremiah 41:1–9 recounts Ishmael son of Nethaniah coming with ten men to Mizpah, dining with governor Gedaliah, assassinating him, and casting eighty mourners’ bodies into King Asa’s pit.",
    "reference": "Jeremiah 41:1–9",
    "metadata": {
      "stage": 6,
      "stage_title": "Minor Prophets, Restoration & Epistles",
      "level_title": "Obscure Kings & Pretenders",
      "puzzle_type": "no_obvious_clues",
      "emojis": "🏰 🍷 🗡️ 🕳️ 💀",
      "prompt": "A treacherous banquet at Mizpah followed by eighty corpses cast into an ancient reservoir.",
      "testament": "Old Testament",
      "difficulty": "Expert",
      "timerSeconds": 90,
      "points": 200,
      "curated": true,
      "hint1": "Gedaliah had been appointed governor of Judah by Nebuchadnezzar.",
      "hint2": "The pit was originally dug by King Asa for fear of Baasha king of Israel."
    }
  },
  {
    "id": "guess-the-emoji-l29-c5",
    "game_slug": "guess-the-emoji",
    "level": 29,
    "challenge_index": 5,
    "question_text": "👑 1️⃣2️⃣0️⃣0️⃣0️⃣0️⃣ ⚔️ 1️⃣ 🩸",
    "options": [
      "Pekah son of Remaliah",
      "Rezin king of Syria",
      "Menahem son of Gadi",
      "Hoshea son of Elah"
    ],
    "correct_answer": "Pekah son of Remaliah",
    "explanation": "2 Chronicles 28:6 states: \"For Pekah the son of Remaliah slew in Judah an hundred and twenty thousand in one day, which were all valiant men; because they had forsaken the Lord God of their fathers.\"",
    "reference": "2 Chronicles 28:6",
    "metadata": {
      "stage": 6,
      "stage_title": "Minor Prophets, Restoration & Epistles",
      "level_title": "Obscure Kings & Pretenders",
      "puzzle_type": "exact_person",
      "emojis": "👑 1️⃣2️⃣0️⃣0️⃣0️⃣0️⃣ ⚔️ 1️⃣ 🩸",
      "prompt": "Identify the northern king who slaughtered 120,000 Judean warriors in a single day.",
      "testament": "Old Testament",
      "difficulty": "Expert",
      "timerSeconds": 90,
      "points": 200,
      "curated": true,
      "hint1": "Allied with Rezin king of Syria against King Ahaz of Judah.",
      "hint2": "Prophet Oded rebuked his army for taking captive their brethren."
    }
  },
  {
    "id": "guess-the-emoji-l30-c1",
    "game_slug": "guess-the-emoji",
    "level": 30,
    "challenge_index": 1,
    "question_text": "👧 🇸🇾 🗣️ 🌊 🤍",
    "options": [
      "Little captive Hebrew maid directing Naaman to prophet in Samaria",
      "Rhoda the maid running to report Peter at Mary's gate",
      "Widow of Zarephath gathering two sticks for her final meal",
      "Tamar daughter of David offering cakes to Amnon"
    ],
    "correct_answer": "Little captive Hebrew maid directing Naaman to prophet in Samaria",
    "explanation": "2 Kings 5:2–3 relates that Syrians brought away captive out of Israel a little maid who waited on Naaman’s wife; she said: \"Would God my lord were with the prophet that is in Samaria! for he would recover him of his leprosy.\"",
    "reference": "2 Kings 5:2–3",
    "metadata": {
      "stage": 6,
      "stage_title": "Minor Prophets, Restoration & Epistles",
      "level_title": "Unnamed Heroes & Key Antagonists",
      "puzzle_type": "no_obvious_clues",
      "emojis": "👧 🇸🇾 🗣️ 🌊 🤍",
      "prompt": "An enslaved Israeli girl in Damascus whose testimony cured a Syrian general.",
      "testament": "Old Testament",
      "difficulty": "Expert",
      "timerSeconds": 90,
      "points": 200,
      "curated": true,
      "hint1": "She waited upon the wife of Naaman, captain of the host of Syria.",
      "hint2": "Led to Naaman washing seven times in Jordan."
    }
  },
  {
    "id": "guess-the-emoji-l30-c2",
    "game_slug": "guess-the-emoji",
    "level": 30,
    "challenge_index": 2,
    "question_text": "👦 🌾 🥖 5️⃣ 🐟 2️⃣",
    "options": [
      "The lad who surrendered his five barley loaves and two fish",
      "Samuel ministering in linen ephod before Eli",
      "David carrying parched corn to his brothers in Elah",
      "The young man fleeing naked from Gethsemane"
    ],
    "correct_answer": "The lad who surrendered his five barley loaves and two fish",
    "explanation": "John 6:9 records Andrew saying: \"There is a lad here, which hath five barley loaves, and two small fishes: but what are they among so many?\"",
    "reference": "John 6:9",
    "metadata": {
      "stage": 6,
      "stage_title": "Minor Prophets, Restoration & Epistles",
      "level_title": "Unnamed Heroes & Key Antagonists",
      "puzzle_type": "no_obvious_clues",
      "emojis": "👦 🌾 🥖 5️⃣ 🐟 2️⃣",
      "prompt": "An anonymous young boy whose packed lunch fed thousands on the Galilean slopes.",
      "testament": "New Testament",
      "difficulty": "Expert",
      "timerSeconds": 90,
      "points": 200,
      "curated": true,
      "hint1": "Pointed out to Jesus by Simon Peter’s brother Andrew.",
      "hint2": "The bread was specifically made of coarse barley."
    }
  },
  {
    "id": "guess-the-emoji-l30-c3",
    "game_slug": "guess-the-emoji",
    "level": 30,
    "challenge_index": 3,
    "question_text": "👦 👂 4️⃣0️⃣ 🤬 🛡️",
    "options": [
      "Paul's sister's son warning the chief captain of 40 ambushers",
      "Jonathan's lad running to collect the signal arrows",
      "Elisha's servant Gehazi running to meet the Shunammite",
      "Young prophet sent by Elisha to anoint Jehu king"
    ],
    "correct_answer": "Paul's sister's son warning the chief captain of 40 ambushers",
    "explanation": "Acts 23:16–22 tells how Paul’s sister’s son heard of forty Jews lying in wait bound under a curse neither to eat nor drink till they killed Paul; he entered the castle and alerted chief captain Claudius Lysias.",
    "reference": "Acts 23:16–22",
    "metadata": {
      "stage": 6,
      "stage_title": "Minor Prophets, Restoration & Epistles",
      "level_title": "Unnamed Heroes & Key Antagonists",
      "puzzle_type": "no_obvious_clues",
      "emojis": "👦 👂 4️⃣0️⃣ 🤬 🛡️",
      "prompt": "A brave nephew overhearing an assassination conspiracy and thwarting forty zealots.",
      "testament": "New Testament",
      "difficulty": "Expert",
      "timerSeconds": 90,
      "points": 200,
      "curated": true,
      "hint1": "Resulted in 470 Roman soldiers escorting Paul safely to Caesarea by night.",
      "hint2": "The conspirators had bound themselves under a great curse."
    }
  },
  {
    "id": "guess-the-emoji-l30-c4",
    "game_slug": "guess-the-emoji",
    "level": 30,
    "challenge_index": 4,
    "question_text": "👵 🪙 2️⃣ 🏛️ 💖",
    "options": [
      "Poor widow casting her two mites (farthing) into temple treasury",
      "Anna the prophetess serving God with fastings and prayers",
      "Elizabeth rejoicing at Mary's greeting in the hill country",
      "Woman with issue of blood touching the border of Jesus' garment"
    ],
    "correct_answer": "Poor widow casting her two mites (farthing) into temple treasury",
    "explanation": "Mark 12:41–44 and Luke 21:1–4 observe a certain poor widow casting in two mites, which make a farthing; Jesus said she cast in more than all, even all her living.",
    "reference": "Mark 12:41–44; Luke 21:1–4",
    "metadata": {
      "stage": 6,
      "stage_title": "Minor Prophets, Restoration & Epistles",
      "level_title": "Unnamed Heroes & Key Antagonists",
      "puzzle_type": "no_obvious_clues",
      "emojis": "👵 🪙 2️⃣ 🏛️ 💖",
      "prompt": "Two copper coins constituting 100% of an impoverished worshiper’s remaining livelihood.",
      "testament": "New Testament",
      "difficulty": "Expert",
      "timerSeconds": 90,
      "points": 200,
      "curated": true,
      "hint1": "Two lepta valued together as one quadrans (farthing).",
      "hint2": "Jesus commended her for casting in \"all the living that she had.\""
    }
  },
  {
    "id": "guess-the-emoji-l30-c5",
    "game_slug": "guess-the-emoji",
    "level": 30,
    "challenge_index": 5,
    "question_text": "👨 🏺 💧 🚶‍♂️ 🏠",
    "options": [
      "Man bearing a pitcher of water leading Peter and John to Upper Room",
      "Servant of Abraham meeting Rebekah at the well of water",
      "Samaritan woman leaving her waterpot at Jacob's well",
      "Gideon testing his men by water drinking posture"
    ],
    "correct_answer": "Man bearing a pitcher of water leading Peter and John to Upper Room",
    "explanation": "Luke 22:10–12 records Jesus saying: \"Behold, when ye are entered into the city, there shall a man meet you, bearing a pitcher of water; follow him into the house where he entereth in,\" to prepare the Passover.",
    "reference": "Luke 22:10–12; Mark 14:13",
    "metadata": {
      "stage": 6,
      "stage_title": "Minor Prophets, Restoration & Epistles",
      "level_title": "Unnamed Heroes & Key Antagonists",
      "puzzle_type": "no_obvious_clues",
      "emojis": "👨 🏺 💧 🚶‍♂️ 🏠",
      "prompt": "A man performing uncommon women’s work carrying a jar, signaling the location of the Last Supper.",
      "testament": "New Testament",
      "difficulty": "Expert",
      "timerSeconds": 90,
      "points": 200,
      "curated": true,
      "hint1": "Carrying water jars in ancient Jerusalem was traditionally done by women.",
      "hint2": "Led Peter and John to a large upper room furnished and prepared."
    }
  },
  {
    "id": "guess-the-emoji-l31-c1",
    "game_slug": "guess-the-emoji",
    "level": 31,
    "challenge_index": 1,
    "question_text": "🐑 🩸 🚪 🌿 ✝️",
    "options": [
      "Passover lamb blood on doorposts fulfilled in Christ our Passover",
      "Abraham offering ram caught in thicket on Mount Moriah",
      "Day of Atonement scapegoat led into the uninhabited wilderness",
      "Red heifer burned without the camp for water of purification"
    ],
    "correct_answer": "Passover lamb blood on doorposts fulfilled in Christ our Passover",
    "explanation": "Exodus 12:7–13 and 1 Corinthians 5:7 connect the unblemished lamb whose blood was struck on lintel and two side posts with hyssop, fulfilled when \"Christ our passover is sacrificed for us.\"",
    "reference": "Exodus 12:7–13; 1 Corinthians 5:7",
    "metadata": {
      "stage": 7,
      "stage_title": "Cross-Testament Shadows",
      "level_title": "Shadows of the Cross & Atonement",
      "puzzle_type": "cross_testament",
      "emojis": "🐑 🩸 🚪 🌿 ✝️",
      "prompt": "Old Covenant blood on wooden doorposts fulfilled in Calvary’s ultimate sacrifice.",
      "testament": "Cross-Testament",
      "difficulty": "Expert",
      "timerSeconds": 90,
      "points": 200,
      "curated": true,
      "hint1": "Applied with a bunch of hyssop in Egypt so the destroyer would pass over.",
      "hint2": "Paul explicitly states: \"For even Christ our passover is sacrificed for us.\""
    }
  },
  {
    "id": "guess-the-emoji-l31-c2",
    "game_slug": "guess-the-emoji",
    "level": 31,
    "challenge_index": 2,
    "question_text": "🐍 🪵 🏜️ 👀 ✝️",
    "options": [
      "Bronze serpent on pole typifying the Son of Man lifted up",
      "Aaron's rod turning into a serpent before Pharaoh's court",
      "Paul shaking the viper into the fire on island of Malta",
      "Fiery flying serpents biting the murmuring Israelites"
    ],
    "correct_answer": "Bronze serpent on pole typifying the Son of Man lifted up",
    "explanation": "Numbers 21:8–9 and John 3:14–15 state: \"And as Moses lifted up the serpent in the wilderness, even so must the Son of man be lifted up: that whosoever believeth in him should not perish.\"",
    "reference": "Numbers 21:8–9; John 3:14–15",
    "metadata": {
      "stage": 7,
      "stage_title": "Cross-Testament Shadows",
      "level_title": "Shadows of the Cross & Atonement",
      "puzzle_type": "cross_testament",
      "emojis": "🐍 🪵 🏜️ 👀 ✝️",
      "prompt": "A wilderness metal emblem on a standard typifying redemption through looking and believing.",
      "testament": "Cross-Testament",
      "difficulty": "Expert",
      "timerSeconds": 90,
      "points": 200,
      "curated": true,
      "hint1": "Made of brass and set on a pole so bitten Israelites looking upon it lived.",
      "hint2": "Directly cited by Jesus in His midnight discourse with Nicodemus."
    }
  },
  {
    "id": "guess-the-emoji-l31-c3",
    "game_slug": "guess-the-emoji",
    "level": 31,
    "challenge_index": 3,
    "question_text": "🪨 🦯 💥 💧 ✝️",
    "options": [
      "The smitten rock in Horeb typifying Christ the source of living water",
      "Jacob resting his head on a stone at Bethel",
      "David gathering five smooth stones to slay Goliath",
      "Cornerstone rejected by builders becoming head of corner"
    ],
    "correct_answer": "The smitten rock in Horeb typifying Christ the source of living water",
    "explanation": "Exodus 17:6 and 1 Corinthians 10:4 reveal the mystery: \"And did all drink the same spiritual drink: for they drank of that spiritual Rock that followed them: and that Rock was Christ.\"",
    "reference": "Exodus 17:6; 1 Corinthians 10:4",
    "metadata": {
      "stage": 7,
      "stage_title": "Cross-Testament Shadows",
      "level_title": "Shadows of the Cross & Atonement",
      "puzzle_type": "cross_testament",
      "emojis": "🪨 🦯 💥 💧 ✝️",
      "prompt": "A struck granite crag producing gushing streams: Paul identifies the Rock as Christ.",
      "testament": "Cross-Testament",
      "difficulty": "Expert",
      "timerSeconds": 90,
      "points": 200,
      "curated": true,
      "hint1": "Moses struck the rock in Horeb before the elders of Israel.",
      "hint2": "Paul writes: \"and that Rock was Christ.\""
    }
  },
  {
    "id": "guess-the-emoji-l31-c4",
    "game_slug": "guess-the-emoji",
    "level": 31,
    "challenge_index": 4,
    "question_text": "👨 👦 🪵 🗡️ ✝️",
    "options": [
      "Abraham offering his only son Isaac foreshadowing God giving His Son",
      "Jephthah meeting his daughter returning from battle",
      "David mourning the death of his son Absalom",
      "Solomon deciding between two mothers claiming one infant"
    ],
    "correct_answer": "Abraham offering his only son Isaac foreshadowing God giving His Son",
    "explanation": "Genesis 22:2 and John 3:16 / Hebrews 11:17–19 reveal Isaac carrying the altar wood up Moriah as a type of the Father offering His only begotten Son at Calvary.",
    "reference": "Genesis 22:2; Hebrews 11:17–19",
    "metadata": {
      "stage": 7,
      "stage_title": "Cross-Testament Shadows",
      "level_title": "Shadows of the Cross & Atonement",
      "puzzle_type": "cross_testament",
      "emojis": "👨 👦 🪵 🗡️ ✝️",
      "prompt": "A father bearing the fire while his beloved son carries the execution timber up the hill.",
      "testament": "Cross-Testament",
      "difficulty": "Expert",
      "timerSeconds": 90,
      "points": 200,
      "curated": true,
      "hint1": "\"Take now thy son, thine only son Isaac, whom thou lovest.\"",
      "hint2": "Abraham accounted that God was able to raise him up even from the dead."
    }
  },
  {
    "id": "guess-the-emoji-l31-c5",
    "game_slug": "guess-the-emoji",
    "level": 31,
    "challenge_index": 5,
    "question_text": "⛺ 🚪 🐄 🔥 ✝️",
    "options": [
      "Red heifer burned without the camp foreshadowing Jesus suffering outside gate",
      "Passover lamb eaten roast with bitter herbs",
      "Daily morning and evening continual burnt offering",
      "Dedication sacrifice of twelve oxen at the Tabernacle"
    ],
    "correct_answer": "Red heifer burned without the camp foreshadowing Jesus suffering outside gate",
    "explanation": "Numbers 19:2–9 and Hebrews 13:11–13 connect the red heifer slain outside the camp with Jesus who \"that he might sanctify the people with his own blood, suffered without the gate.\"",
    "reference": "Numbers 19:2–9; Hebrews 13:11–13",
    "metadata": {
      "stage": 7,
      "stage_title": "Cross-Testament Shadows",
      "level_title": "Shadows of the Cross & Atonement",
      "puzzle_type": "cross_testament",
      "emojis": "⛺ 🚪 🐄 🔥 ✝️",
      "prompt": "An unblemished crimson heifer incinerated beyond perimeter walls typifying Christ’s rejection outside city walls.",
      "testament": "Cross-Testament",
      "difficulty": "Expert",
      "timerSeconds": 90,
      "points": 200,
      "curated": true,
      "hint1": "Cedar wood, hyssop, and scarlet were cast into the midst of the burning heifer.",
      "hint2": "Hebrews exhorts: \"Let us go forth therefore unto him without the camp, bearing his reproach.\""
    }
  },
  {
    "id": "guess-the-emoji-l32-c1",
    "game_slug": "guess-the-emoji",
    "level": 32,
    "challenge_index": 1,
    "question_text": "👑 🍞 🍷 🕊️ ✝️",
    "options": [
      "Melchizedek bringing bread and wine to Abraham typifying Christ's eternal priesthood",
      "Solomon offering a thousand burnt offerings at Gibeon",
      "David eating the shewbread at Nob with Ahimelech",
      "Ezekiel's vision of the prince eating bread before the Lord"
    ],
    "correct_answer": "Melchizedek bringing bread and wine to Abraham typifying Christ's eternal priesthood",
    "explanation": "Genesis 14:18–20 and Hebrews 7:1–17 present Melchizedek king of Salem bringing forth bread and wine, prefiguring Christ who is made an high priest for ever after the order of Melchisedec.",
    "reference": "Genesis 14:18–20; Hebrews 7:1–17",
    "metadata": {
      "stage": 7,
      "stage_title": "Cross-Testament Shadows",
      "level_title": "Typological Priests & Kings",
      "puzzle_type": "cross_testament",
      "emojis": "👑 🍞 🍷 🕊️ ✝️",
      "prompt": "A priest-king offering communion elements after victory, transcending the Levitical order.",
      "testament": "Cross-Testament",
      "difficulty": "Expert",
      "timerSeconds": 90,
      "points": 200,
      "curated": true,
      "hint1": "Both King of Righteousness and King of Salem (Peace).",
      "hint2": "Abraham gave him tithes of all the spoils."
    }
  },
  {
    "id": "guess-the-emoji-l32-c2",
    "game_slug": "guess-the-emoji",
    "level": 32,
    "challenge_index": 2,
    "question_text": "🕳️ 🪙 2️⃣0️⃣ 👑 🌾",
    "options": [
      "Joseph betrayed by brothers and exalted to reign over Egypt",
      "Jeremiah thrown into Malchiah's muddy cistern",
      "Daniel thrown into the den of lions in Babylon",
      "David hiding in the cave of Adullam with outlaws"
    ],
    "correct_answer": "Joseph betrayed by brothers and exalted to reign over Egypt",
    "explanation": "Genesis 37:28; 41:40–44 presents Joseph stripped of his coat, sold for twenty pieces of silver, cast into a pit, and exalted to Pharaoh’s right hand, prefiguring Jesus betrayed and exalted as Lord.",
    "reference": "Genesis 37:28; 41:40–44; Philippians 2:9–11",
    "metadata": {
      "stage": 7,
      "stage_title": "Cross-Testament Shadows",
      "level_title": "Typological Priests & Kings",
      "puzzle_type": "cross_testament",
      "emojis": "🕳️ 🪙 2️⃣0️⃣ 👑 🌾",
      "prompt": "A beloved son rejected by brethren, sold for silver, and elevated to preserve nations.",
      "testament": "Cross-Testament",
      "difficulty": "Expert",
      "timerSeconds": 90,
      "points": 200,
      "curated": true,
      "hint1": "Sold to Midianite merchantmen for 20 silver pieces.",
      "hint2": "Every knee bowed before his chariot as ruler of Egypt."
    }
  },
  {
    "id": "guess-the-emoji-l32-c3",
    "game_slug": "guess-the-emoji",
    "level": 32,
    "challenge_index": 3,
    "question_text": "🌊 🏔️ 😭 🦶 🌿",
    "options": [
      "David crossing Kidron weeping barefoot typifying Jesus entering Gethsemane",
      "Moses crossing the Red Sea with lifted rod",
      "Elijah fleeing from Jezebel to Mount Horeb",
      "Jesus walking across the stormy Sea of Galilee"
    ],
    "correct_answer": "David crossing Kidron weeping barefoot typifying Jesus entering Gethsemane",
    "explanation": "2 Samuel 15:23–30 and John 18:1 record David crossing the brook Kidron barefoot with covered head weeping after Ahithophel’s betrayal, prefiguring Jesus crossing Kidron to Gethsemane.",
    "reference": "2 Samuel 15:23–30; John 18:1",
    "metadata": {
      "stage": 7,
      "stage_title": "Cross-Testament Shadows",
      "level_title": "Typological Priests & Kings",
      "puzzle_type": "cross_testament",
      "emojis": "🌊 🏔️ 😭 🦶 🌿",
      "prompt": "A betrayed monarch weeping as he crosses the dark valley ravine toward the Mount of Olives.",
      "testament": "Cross-Testament",
      "difficulty": "Expert",
      "timerSeconds": 90,
      "points": 200,
      "curated": true,
      "hint1": "David ascended by the ascent of Mount Olivet weeping with head covered.",
      "hint2": "Jesus crossed the same brook Cedron to the garden where Judas betrayed Him."
    }
  },
  {
    "id": "guess-the-emoji-l32-c4",
    "game_slug": "guess-the-emoji",
    "level": 32,
    "challenge_index": 4,
    "question_text": "🐋 3️⃣ 🌊 ☀️ ✝️",
    "options": [
      "Jonah three days in whale's belly typifying Christ three days in the tomb",
      "Noah sailing through floodwaters for forty days",
      "Paul shipwrecked on Malta surviving fourteen days of storm",
      "Moses hidden three months in his parents' home"
    ],
    "correct_answer": "Jonah three days in whale's belly typifying Christ three days in the tomb",
    "explanation": "Jonah 1:17 and Matthew 12:40 state: \"For as Jonas was three days and three nights in the whale’s belly; so shall the Son of man be three days and three nights in the heart of the earth.\"",
    "reference": "Jonah 1:17; Matthew 12:40",
    "metadata": {
      "stage": 7,
      "stage_title": "Cross-Testament Shadows",
      "level_title": "Typological Priests & Kings",
      "puzzle_type": "cross_testament",
      "emojis": "🐋 3️⃣ 🌊 ☀️ ✝️",
      "prompt": "The \"Sign of the Prophet Jonas\": submerged in oceanic abyss three days before resurrection.",
      "testament": "Cross-Testament",
      "difficulty": "Expert",
      "timerSeconds": 90,
      "points": 200,
      "curated": true,
      "hint1": "Jesus declared no sign would be given to an evil generation except this one.",
      "hint2": "Three days and three nights followed by deliverance upon dry land."
    }
  },
  {
    "id": "guess-the-emoji-l32-c5",
    "game_slug": "guess-the-emoji",
    "level": 32,
    "challenge_index": 5,
    "question_text": "🏔️ 🖐️ 🪨 👥 ⚔️",
    "options": [
      "Moses' hands held high supported by Aaron and Hur during battle with Amalek",
      "Joshua commanding the sun and moon to stand still at Gibeon",
      "Gideon holding trumpets and torches against Midian",
      "David lifting Goliath's severed head before Saul"
    ],
    "correct_answer": "Moses' hands held high supported by Aaron and Hur during battle with Amalek",
    "explanation": "Exodus 17:11–13 recounts that when Moses held up his hand, Israel prevailed; Aaron and Hur stayed up his hands on either side until sunset, prefiguring perpetual intercession bringing total victory.",
    "reference": "Exodus 17:11–13",
    "metadata": {
      "stage": 7,
      "stage_title": "Cross-Testament Shadows",
      "level_title": "Typological Priests & Kings",
      "puzzle_type": "cross_testament",
      "emojis": "🏔️ 🖐️ 🪨 👥 ⚔️",
      "prompt": "Two companions steady outstretched arms upon a hill stone until sunset to guarantee triumph.",
      "testament": "Cross-Testament",
      "difficulty": "Expert",
      "timerSeconds": 90,
      "points": 200,
      "curated": true,
      "hint1": "Joshua discomfited Amalek and his people with the edge of the sword.",
      "hint2": "Moses built an altar and called it Jehovah-nissi (The Lord my banner)."
    }
  },
  {
    "id": "guess-the-emoji-l33-c1",
    "game_slug": "guess-the-emoji",
    "level": 33,
    "challenge_index": 1,
    "question_text": "🐑 🤫 🗡️ 🩸 🩹",
    "options": [
      "Isaiah 53: The Suffering Servant silent before shearers and wounded for our transgressions",
      "Abel offering the firstlings of his flock to God",
      "Gideon testing the Lord with fleece of wool on threshing floor",
      "David defending his father's sheep from lion and bear"
    ],
    "correct_answer": "Isaiah 53: The Suffering Servant silent before shearers and wounded for our transgressions",
    "explanation": "Isaiah 53:5–7 prophesies: \"He was wounded for our transgressions, he was bruised for our iniquities... as a sheep before her shearers is dumb, so he openeth not his mouth,\" fulfilled in Jesus.",
    "reference": "Isaiah 53:5–7; Acts 8:32–35",
    "metadata": {
      "stage": 7,
      "stage_title": "Cross-Testament Shadows",
      "level_title": "Prophetic Messianic Fulfillments",
      "puzzle_type": "cross_testament",
      "emojis": "🐑 🤫 🗡️ 🩸 🩹",
      "prompt": "Silent sacrificial lamb, striped back, vicarious wounds bearing the griefs of others.",
      "testament": "Cross-Testament",
      "difficulty": "Expert",
      "timerSeconds": 90,
      "points": 200,
      "curated": true,
      "hint1": "Read by the Ethiopian eunuch on the road to Gaza.",
      "hint2": "\"And with his stripes we are healed.\""
    }
  },
  {
    "id": "guess-the-emoji-l33-c2",
    "game_slug": "guess-the-emoji",
    "level": 33,
    "challenge_index": 2,
    "question_text": "🖐️ 🦶 🦴 🎲 👗",
    "options": [
      "Psalm 22: Pierced hands and feet, unbroken bones, and casting lots for vesture",
      "Samson bound with fresh cords pulled down Dagon's temple",
      "Ezekiel's vision of dry bones reconnected with sinews and flesh",
      "Joseph's coat of many colors stripped and dipped in goat blood"
    ],
    "correct_answer": "Psalm 22: Pierced hands and feet, unbroken bones, and casting lots for vesture",
    "explanation": "Psalm 22:16–18 foretells: \"They pierced my hands and my feet. I may tell all my bones... They part my garments among them, and cast lots upon my vesture,\" fulfilled at the crucifixion (Matthew 27:35).",
    "reference": "Psalm 22:16–18; Matthew 27:35",
    "metadata": {
      "stage": 7,
      "stage_title": "Cross-Testament Shadows",
      "level_title": "Prophetic Messianic Fulfillments",
      "puzzle_type": "cross_testament",
      "emojis": "🖐️ 🦶 🦴 🎲 👗",
      "prompt": "Pierced limbs, visible skeletal frame, and roman dice cast over seamless apparel.",
      "testament": "Cross-Testament",
      "difficulty": "Expert",
      "timerSeconds": 90,
      "points": 200,
      "curated": true,
      "hint1": "Begins with: \"My God, my God, why hast thou forsaken me?\"",
      "hint2": "Written by David a millennium before Roman crucifixion was practiced."
    }
  },
  {
    "id": "guess-the-emoji-l33-c3",
    "game_slug": "guess-the-emoji",
    "level": 33,
    "challenge_index": 3,
    "question_text": "🪙 3️⃣0️⃣ 🏛️ 🏺 🌾",
    "options": [
      "Zechariah 11: Thirty pieces of silver cast to the potter in house of Lord",
      "Joseph sold into Egypt for twenty pieces of silver",
      "Jeremiah buying field of Anathoth for seventeen shekels",
      "Micah's mother dedicating eleven hundred silver shekels for idol"
    ],
    "correct_answer": "Zechariah 11: Thirty pieces of silver cast to the potter in house of Lord",
    "explanation": "Zechariah 11:12–13 records: \"So they weighed for my price thirty pieces of silver... and I took the thirty pieces of silver, and cast them to the potter in the house of the Lord,\" fulfilled in Judas (Matthew 27:3–10).",
    "reference": "Zechariah 11:12–13; Matthew 27:3–10",
    "metadata": {
      "stage": 7,
      "stage_title": "Cross-Testament Shadows",
      "level_title": "Prophetic Messianic Fulfillments",
      "puzzle_type": "cross_testament",
      "emojis": "🪙 3️⃣0️⃣ 🏛️ 🏺 🌾",
      "prompt": "Prophetic valuation of the Good Shepherd: 30 silver shekels thrown into the temple for potter’s soil.",
      "testament": "Cross-Testament",
      "difficulty": "Expert",
      "timerSeconds": 90,
      "points": 200,
      "curated": true,
      "hint1": "Called \"a goodly price that I was prised at of them.\"",
      "hint2": "Used by the chief priests to buy the potter’s field to bury strangers in."
    }
  },
  {
    "id": "guess-the-emoji-l33-c4",
    "game_slug": "guess-the-emoji",
    "level": 33,
    "challenge_index": 4,
    "question_text": "👑 🫏 🌾 🌿 🗣️",
    "options": [
      "Zechariah 9: King coming lowly riding upon an ass and colt (Palm Sunday)",
      "Solomon riding king David's mule to Gihon spring to be anointed",
      "Abigail riding her ass with provisions to pacify David",
      "Balaam riding his ass confronted by the sword-bearing angel"
    ],
    "correct_answer": "Zechariah 9: King coming lowly riding upon an ass and colt (Palm Sunday)",
    "explanation": "Zechariah 9:9 prophesies: \"Rejoice greatly, O daughter of Zion... behold, thy King cometh unto thee: he is just, and having salvation; lowly, and riding upon an ass, and upon a colt the foal of an ass,\" fulfilled in Matthew 21:1–9.",
    "reference": "Zechariah 9:9; Matthew 21:1–9",
    "metadata": {
      "stage": 7,
      "stage_title": "Cross-Testament Shadows",
      "level_title": "Prophetic Messianic Fulfillments",
      "puzzle_type": "cross_testament",
      "emojis": "👑 🫏 🌾 🌿 🗣️",
      "prompt": "A gentle Monarch entering Zion mounted on an unridden beast of burden amid palm branches.",
      "testament": "Cross-Testament",
      "difficulty": "Expert",
      "timerSeconds": 90,
      "points": 200,
      "curated": true,
      "hint1": "Fulfilled during Jesus’ Triumphal Entry into Jerusalem.",
      "hint2": "The crowds cried: \"Hosanna to the son of David: Blessed is he that cometh in the name of the Lord.\""
    }
  },
  {
    "id": "guess-the-emoji-l33-c5",
    "game_slug": "guess-the-emoji",
    "level": 33,
    "challenge_index": 5,
    "question_text": "🇪🇬 👶 🚶‍♂️ 🕊️ 📜",
    "options": [
      "Hosea 11:1: 'Out of Egypt have I called my son' fulfilled in the Holy Family's return",
      "Moses fleeing Egypt after killing the Egyptian overseer",
      "Jacob and his sons migrating to Egypt to survive famine",
      "Jeremiah carried down to Tahpanhes in Egypt by Johanan"
    ],
    "correct_answer": "Hosea 11:1: 'Out of Egypt have I called my son' fulfilled in the Holy Family's return",
    "explanation": "Hosea 11:1 and Matthew 2:14–15 state that Joseph took young Jesus and Mary by night into Egypt until the death of Herod: \"that it might be fulfilled which was spoken of the Lord by the prophet, saying, Out of Egypt have I called my son.\"",
    "reference": "Hosea 11:1; Matthew 2:14–15",
    "metadata": {
      "stage": 7,
      "stage_title": "Cross-Testament Shadows",
      "level_title": "Prophetic Messianic Fulfillments",
      "puzzle_type": "cross_testament",
      "emojis": "🇪🇬 👶 🚶‍♂️ 🕊️ 📜",
      "prompt": "A geographic sanctuary in the Nile delta followed by prophetic summons: Son summoned out of Egypt.",
      "testament": "Cross-Testament",
      "difficulty": "Expert",
      "timerSeconds": 90,
      "points": 200,
      "curated": true,
      "hint1": "Joseph fled by night after being warned by an angel in a dream.",
      "hint2": "They remained in Egypt until the death of King Herod."
    }
  },
  {
    "id": "guess-the-emoji-l34-c1",
    "game_slug": "guess-the-emoji",
    "level": 34,
    "challenge_index": 1,
    "question_text": "🍞 ☁️ 🏜️ ✝️ ♾️",
    "options": [
      "Wilderness manna typifying Jesus as the True Bread from Heaven",
      "Shewbread cakes renewed every Sabbath on pure gold table",
      "Elijah sustained forty days by cake baked on coals",
      "Abigail bringing two hundred loaves of bread to David"
    ],
    "correct_answer": "Wilderness manna typifying Jesus as the True Bread from Heaven",
    "explanation": "Exodus 16 and John 6:31–35 contrast the fathers eating manna and dying with Jesus declaring: \"I am the bread of life: he that cometh to me shall never hunger... I am the living bread which came down from heaven.\"",
    "reference": "Exodus 16; John 6:31–51",
    "metadata": {
      "stage": 7,
      "stage_title": "Cross-Testament Shadows",
      "level_title": "Apostolic Types & Old Testament Shadows",
      "puzzle_type": "cross_testament",
      "emojis": "🍞 ☁️ 🏜️ ✝️ ♾️",
      "prompt": "Morning bread from the skies contrasting with the eternal living nourishment in John 6.",
      "testament": "Cross-Testament",
      "difficulty": "Expert",
      "timerSeconds": 90,
      "points": 200,
      "curated": true,
      "hint1": "Jesus told the crowd: \"Moses gave you not that bread from heaven; but my Father giveth you the true bread.\"",
      "hint2": "Whoever eats of this bread shall live forever."
    }
  },
  {
    "id": "guess-the-emoji-l34-c2",
    "game_slug": "guess-the-emoji",
    "level": 34,
    "challenge_index": 2,
    "question_text": "🚢 8️⃣ 🌊 🕊️ 💦",
    "options": [
      "Noah's ark preserving eight souls through water typifying baptism",
      "Paul's shipwreck on Malta where all 276 souls escaped",
      "Jonah cast overboard and swallowed by the great fish",
      "Moses' mother floating infant in reed basket on the Nile"
    ],
    "correct_answer": "Noah's ark preserving eight souls through water typifying baptism",
    "explanation": "Genesis 7:13 and 1 Peter 3:20–21 explain: \"wherein few, that is, eight souls were saved by water. The like figure whereunto even baptism doth also now save us... by the resurrection of Jesus Christ.\"",
    "reference": "Genesis 7:13; 1 Peter 3:20–21",
    "metadata": {
      "stage": 7,
      "stage_title": "Cross-Testament Shadows",
      "level_title": "Apostolic Types & Old Testament Shadows",
      "puzzle_type": "cross_testament",
      "emojis": "🚢 8️⃣ 🌊 🕊️ 💦",
      "prompt": "Eight antediluvian survivors carried through deluge waters as an antitype of spiritual immersion.",
      "testament": "Cross-Testament",
      "difficulty": "Expert",
      "timerSeconds": 90,
      "points": 200,
      "curated": true,
      "hint1": "Noah, his three sons, his wife, and three daughters-in-law.",
      "hint2": "Peter connects the water of the ark to the figure of baptism."
    }
  },
  {
    "id": "guess-the-emoji-l34-c3",
    "game_slug": "guess-the-emoji",
    "level": 34,
    "challenge_index": 3,
    "question_text": "👩‍🦰 👩‍🦱 📜 2️⃣ 🏔️",
    "options": [
      "Sarah and Hagar allegorized as the Two Covenants (Sinai and Jerusalem above)",
      "Rachel and Leah competing for children with Jacob",
      "Shiphrah and Puah defying Pharaoh's infanticide decree",
      "Martha and Mary hosting Jesus in Bethany"
    ],
    "correct_answer": "Sarah and Hagar allegorized as the Two Covenants (Sinai and Jerusalem above)",
    "explanation": "Galatians 4:21–31 allegorizes Abraham’s two wives: Hagar the bondmaid representing Mount Sinai in Arabia gendered to bondage, and Sarah the freewoman representing Jerusalem which is above and free.",
    "reference": "Galatians 4:21–31",
    "metadata": {
      "stage": 7,
      "stage_title": "Cross-Testament Shadows",
      "level_title": "Apostolic Types & Old Testament Shadows",
      "puzzle_type": "cross_testament",
      "emojis": "👩‍🦰 👩‍🦱 📜 2️⃣ 🏔️",
      "prompt": "Paul’s allegorical exposition of two matriarchs representing bondage under law vs freedom in grace.",
      "testament": "Cross-Testament",
      "difficulty": "Expert",
      "timerSeconds": 90,
      "points": 200,
      "curated": true,
      "hint1": "Hagar is Mount Sinai in Arabia answered to Jerusalem that now is.",
      "hint2": "\"Cast out the bondwoman and her son: for the son of the bondwoman shall not be heir with the son of the freewoman.\""
    }
  },
  {
    "id": "guess-the-emoji-l34-c4",
    "game_slug": "guess-the-emoji",
    "level": 34,
    "challenge_index": 4,
    "question_text": "🏛️ 🗣️ 🌍 💥 🕊️",
    "options": [
      "Tower of Babel language confusion reversed by Pentecost tongues of fire",
      "Joshua's trumpets bringing down the walls of Jericho",
      "Solomon speaking three thousand proverbs and trees from cedar to hyssop",
      "Paul speaking before the Areopagus philosophers in Athens"
    ],
    "correct_answer": "Tower of Babel language confusion reversed by Pentecost tongues of fire",
    "explanation": "Genesis 11:7–9 and Acts 2:1–11 show the fragmentation of human speech at Babel miraculously reversed when the Holy Spirit enabled disciples to speak so every nation heard the wonderful works of God.",
    "reference": "Genesis 11:7–9; Acts 2:1–11",
    "metadata": {
      "stage": 7,
      "stage_title": "Cross-Testament Shadows",
      "level_title": "Apostolic Types & Old Testament Shadows",
      "puzzle_type": "cross_testament",
      "emojis": "🏛️ 🗣️ 🌍 💥 🕊️",
      "prompt": "Pride fractured human dialect at Shinar; divine fire harmonized all languages in Jerusalem.",
      "testament": "Cross-Testament",
      "difficulty": "Expert",
      "timerSeconds": 90,
      "points": 200,
      "curated": true,
      "hint1": "At Babel, God confounded the speech of all the earth.",
      "hint2": "At Pentecost, Parthians, Medes, and Elamites heard in their own tongue."
    }
  },
  {
    "id": "guess-the-emoji-l34-c5",
    "game_slug": "guess-the-emoji",
    "level": 34,
    "challenge_index": 5,
    "question_text": "🏛️ 🧵 💥 ⬇️ ✝️",
    "options": [
      "Temple veil rent from top to bottom opening access through Christ's flesh",
      "Samson snapping seven green withs like a thread of tow",
      "Rehoboam listening to young men and dividing the kingdom",
      "Eli falling backward off his seat at the gate of Shiloh"
    ],
    "correct_answer": "Temple veil rent from top to bottom opening access through Christ's flesh",
    "explanation": "Matthew 27:51 and Hebrews 10:19–20 state that at Jesus’ death the veil of the temple was rent in twain from top to bottom, inaugurating a new and living way through the veil, that is to say, His flesh.",
    "reference": "Matthew 27:51; Hebrews 10:19–20",
    "metadata": {
      "stage": 7,
      "stage_title": "Cross-Testament Shadows",
      "level_title": "Apostolic Types & Old Testament Shadows",
      "puzzle_type": "cross_testament",
      "emojis": "🏛️ 🧵 💥 ⬇️ ✝️",
      "prompt": "A 60-foot thick woven partition torn from upper ceiling to floor at the 9th hour.",
      "testament": "Cross-Testament",
      "difficulty": "Expert",
      "timerSeconds": 90,
      "points": 200,
      "curated": true,
      "hint1": "Separated the Holy Place from the Holy of Holies.",
      "hint2": "Torn from top to bottom, signifying divine action rather than human hands."
    }
  },
  {
    "id": "guess-the-emoji-l35-c1",
    "game_slug": "guess-the-emoji",
    "level": 35,
    "challenge_index": 1,
    "question_text": "😭 👶 🔪 👑 📜",
    "options": [
      "Jeremiah 31: Rachel weeping for her children fulfilled in Herod's Bethlehem slaughter",
      "Pharaoh's command to cast newborn Hebrew boys into the Nile",
      "Athaliah destroying all the seed royal of the house of Judah",
      "Haman plotting the extermination of all Jews across 127 provinces"
    ],
    "correct_answer": "Jeremiah 31: Rachel weeping for her children fulfilled in Herod's Bethlehem slaughter",
    "explanation": "Jeremiah 31:15 and Matthew 2:16–18 record: \"A voice was heard in Ramah, lamentation, and bitter weeping; Rahel weeping for her children refused to be comforted... because they were not,\" fulfilled in Herod’s slaughter of the innocents.",
    "reference": "Jeremiah 31:15; Matthew 2:17–18",
    "metadata": {
      "stage": 7,
      "stage_title": "Cross-Testament Shadows",
      "level_title": "Cryptic Prophetic Echoes",
      "puzzle_type": "cross_testament",
      "emojis": "😭 👶 🔪 👑 📜",
      "prompt": "Lamentation in Ramah: a matriarch’s ancestral tears echoing across Bethlehem’s cradles.",
      "testament": "Cross-Testament",
      "difficulty": "Expert",
      "timerSeconds": 90,
      "points": 200,
      "curated": true,
      "hint1": "Rachel’s tomb was located near Bethlehem on the way to Ephrath.",
      "hint2": "Herod slew all children in Bethlehem from two years old and under."
    }
  },
  {
    "id": "guess-the-emoji-l35-c2",
    "game_slug": "guess-the-emoji",
    "level": 35,
    "challenge_index": 2,
    "question_text": "🔥 🧔 🧥 🍯 🦗",
    "options": [
      "Malachi 4: Promise of Elijah the prophet fulfilled in John the Baptist",
      "Elijah ascending to heaven in chariot of fire and horses of fire",
      "Elisha mocking forty-two youths coming up from Bethel",
      "Samson finding honey in the carcase of the dead lion"
    ],
    "correct_answer": "Malachi 4: Promise of Elijah the prophet fulfilled in John the Baptist",
    "explanation": "Malachi 4:5 and Matthew 11:14 / 17:11–13 connect the promise \"Behold, I will send you Elijah the prophet before the coming of the great and dreadful day of the Lord\" with John the Baptist who came in the spirit and power of Elias.",
    "reference": "Malachi 4:5; Matthew 11:14; Luke 1:17",
    "metadata": {
      "stage": 7,
      "stage_title": "Cross-Testament Shadows",
      "level_title": "Cryptic Prophetic Echoes",
      "puzzle_type": "cross_testament",
      "emojis": "🔥 🧔 🧥 🍯 🦗",
      "prompt": "Camel hair, leather girdle, locust diet: the final Old Testament prophet promised to precede the Messiah.",
      "testament": "Cross-Testament",
      "difficulty": "Expert",
      "timerSeconds": 90,
      "points": 200,
      "curated": true,
      "hint1": "Jesus said: \"If ye will receive it, this is Elias, which was for to come.\"",
      "hint2": "Turned the hearts of fathers to the children."
    }
  },
  {
    "id": "guess-the-emoji-l35-c3",
    "game_slug": "guess-the-emoji",
    "level": 35,
    "challenge_index": 3,
    "question_text": "🕊️ 👴 👵 👦 👧 🗣️",
    "options": [
      "Joel 2: Spirit poured on all flesh, sons and daughters prophesying (Pentecost)",
      "Ezekiel's vision of life breathed into the valley of dry bones",
      "Moses wishing that all the Lord's people were prophets",
      "Zechariah's prophecy of old men and women dwelling in Jerusalem"
    ],
    "correct_answer": "Joel 2: Spirit poured on all flesh, sons and daughters prophesying (Pentecost)",
    "explanation": "Joel 2:28–29 and Acts 2:16–18 declare: \"This is that which was spoken by the prophet Joel; And it shall come to pass in the last days, saith God, I will pour out of my Spirit upon all flesh: and your sons and your daughters shall prophesy.\"",
    "reference": "Joel 2:28–29; Acts 2:16–18",
    "metadata": {
      "stage": 7,
      "stage_title": "Cross-Testament Shadows",
      "level_title": "Cryptic Prophetic Echoes",
      "puzzle_type": "cross_testament",
      "emojis": "🕊️ 👴 👵 👦 👧 🗣️",
      "prompt": "Universal effusion of divine inspiration upon youths, elders, handmaidens, and servants alike.",
      "testament": "Cross-Testament",
      "difficulty": "Expert",
      "timerSeconds": 90,
      "points": 200,
      "curated": true,
      "hint1": "Peter quoted this passage on the Day of Pentecost in Jerusalem.",
      "hint2": "\"Your young men shall see visions, and your old men shall dream dreams.\""
    }
  },
  {
    "id": "guess-the-emoji-l35-c4",
    "game_slug": "guess-the-emoji",
    "level": 35,
    "challenge_index": 4,
    "question_text": "☀️ 🌑 🕛 3️⃣ ✝️",
    "options": [
      "Amos 8: 'Sun go down at noon' fulfilled in the three hours of darkness at Calvary",
      "Joshua's long day where the sun stood still over Gibeon",
      "Hezekiah's sundial turning back ten degrees for a sign",
      "Plague of thick darkness over Egypt for three days"
    ],
    "correct_answer": "Amos 8: 'Sun go down at noon' fulfilled in the three hours of darkness at Calvary",
    "explanation": "Amos 8:9 and Matthew 27:45 record: \"I will cause the sun to go down at noon, and I will darken the earth in the clear day,\" fulfilled when darkness fell over all the land from the sixth to ninth hour.",
    "reference": "Amos 8:9; Matthew 27:45",
    "metadata": {
      "stage": 7,
      "stage_title": "Cross-Testament Shadows",
      "level_title": "Cryptic Prophetic Echoes",
      "puzzle_type": "cross_testament",
      "emojis": "☀️ 🌑 🕛 3️⃣ ✝️",
      "prompt": "Midday solar eclipse during springtime Passover: darkness from the 6th to 9th hour.",
      "testament": "Cross-Testament",
      "difficulty": "Expert",
      "timerSeconds": 90,
      "points": 200,
      "curated": true,
      "hint1": "Sixth hour in Jewish reckoning corresponded to 12 noon.",
      "hint2": "Followed by Jesus crying: \"Eli, Eli, lama sabachthani?\""
    }
  },
  {
    "id": "guess-the-emoji-l35-c5",
    "game_slug": "guess-the-emoji",
    "level": 35,
    "challenge_index": 5,
    "question_text": "🗡️ 👁️ 💧 🩸 ✝️",
    "options": [
      "Zechariah 12: 'Look upon me whom they have pierced' fulfilled in spear piercing side",
      "Ezekiel marking foreheads of those who sigh and cry",
      "David mourning Uriah the Hittite slain by sword of Ammon",
      "Solomon's temple decorated with engraved palm trees and open flowers"
    ],
    "correct_answer": "Zechariah 12: 'Look upon me whom they have pierced' fulfilled in spear piercing side",
    "explanation": "Zechariah 12:10 and John 19:34–37 note: \"One of the soldiers with a spear pierced his side, and forthwith came there out blood and water... And again another scripture saith, They shall look on him whom they pierced.\"",
    "reference": "Zechariah 12:10; John 19:34–37",
    "metadata": {
      "stage": 7,
      "stage_title": "Cross-Testament Shadows",
      "level_title": "Cryptic Prophetic Echoes",
      "puzzle_type": "cross_testament",
      "emojis": "🗡️ 👁️ 💧 🩸 ✝️",
      "prompt": "A Roman lance ruptures pericardium; John verifies the ancient oracle of mourning.",
      "testament": "Cross-Testament",
      "difficulty": "Expert",
      "timerSeconds": 90,
      "points": 200,
      "curated": true,
      "hint1": "Forthwith came out blood and water.",
      "hint2": "Fulfilled so that not a bone of him should be broken."
    }
  },
  {
    "id": "guess-the-emoji-l36-c1",
    "game_slug": "guess-the-emoji",
    "level": 36,
    "challenge_index": 1,
    "question_text": "🌾 🥖 🏕️ 💥 ⚔️",
    "options": [
      "Gideon overhearing the Midianite dream of a rolling barley cake toppling a tent",
      "Ezekiel cooking barley cakes over animal dung fuel",
      "Ruth gleaning barley in the field of Boaz",
      "Elisha feeding one hundred men with twenty barley loaves"
    ],
    "correct_answer": "Gideon overhearing the Midianite dream of a rolling barley cake toppling a tent",
    "explanation": "Judges 7:13–15 tells of Gideon sneaking down to the Midian host and hearing a man recount a cake of barley bread tumbling into the host of Midian and overturning the tent; Gideon worshiped God and returned confident.",
    "reference": "Judges 7:13–15",
    "metadata": {
      "stage": 8,
      "stage_title": "Advanced Expert Traps",
      "level_title": "Indirect Clues & Hidden Signs",
      "puzzle_type": "no_obvious_clues",
      "emojis": "🌾 🥖 🏕️ 💥 ⚔️",
      "prompt": "A coarse rotating loaf of rough grain flattening a nomadic military marquee.",
      "testament": "Old Testament",
      "difficulty": "Master",
      "timerSeconds": 120,
      "points": 250,
      "curated": true,
      "hint1": "Overheard by Gideon and his servant Phurah at night.",
      "hint2": "The soldier’s companion interpreted: \"This is nothing else save the sword of Gideon son of Joash.\""
    }
  },
  {
    "id": "guess-the-emoji-l36-c2",
    "game_slug": "guess-the-emoji",
    "level": 36,
    "challenge_index": 2,
    "question_text": "🦯 🍯 🌲 👁️ ⚡",
    "options": [
      "Jonathan dipping rod in honeycomb and having his eyes enlightened during battle",
      "Samson scooping honey from the lion's carcass with his hands",
      "John the Baptist eating wild honey in the Judean wilderness",
      "Ezekiel eating the scroll that tasted sweet as honey"
    ],
    "correct_answer": "Jonathan dipping rod in honeycomb and having his eyes enlightened during battle",
    "explanation": "1 Samuel 14:27 relates that Jonathan heard not when his father charged the people with an oath; he put forth the end of the rod that was in his hand, dipped it in an honeycomb, put it to his mouth, and his eyes were enlightened.",
    "reference": "1 Samuel 14:27",
    "metadata": {
      "stage": 8,
      "stage_title": "Advanced Expert Traps",
      "level_title": "Indirect Clues & Hidden Signs",
      "puzzle_type": "no_obvious_clues",
      "emojis": "🦯 🍯 🌲 👁️ ⚡",
      "prompt": "Forest nectar tasted with a rod tip restores vision but violates an unknown royal death curse.",
      "testament": "Old Testament",
      "difficulty": "Master",
      "timerSeconds": 120,
      "points": 250,
      "curated": true,
      "hint1": "Saul had bound the army under a curse: \"Cursed be the man that eateth any food until evening.\"",
      "hint2": "The people rescued Jonathan from execution because he had wrought with God."
    }
  },
  {
    "id": "guess-the-emoji-l36-c3",
    "game_slug": "guess-the-emoji",
    "level": 36,
    "challenge_index": 3,
    "question_text": "⛺ 😴 🗡️ 🏺 💧",
    "options": [
      "David taking Saul's spear and cruse of water from his bolster while army slept",
      "Ehud taking dagger into King Eglon's summer parlor",
      "Jael driving tent peg into Sisera's temple while sleeping",
      "Gideon breaking pitchers with lamps around Midian camp"
    ],
    "correct_answer": "David taking Saul's spear and cruse of water from his bolster while army slept",
    "explanation": "1 Samuel 26:11–12 relates David and Abishai creeping into Saul’s camp where all were asleep in a deep sleep from the Lord; David refused to slay the Lord’s anointed, but took the spear and cruse of water from Saul’s bolster.",
    "reference": "1 Samuel 26:11–12",
    "metadata": {
      "stage": 8,
      "stage_title": "Advanced Expert Traps",
      "level_title": "Indirect Clues & Hidden Signs",
      "puzzle_type": "no_obvious_clues",
      "emojis": "⛺ 😴 🗡️ 🏺 💧",
      "prompt": "Two sovereign personal possessions confiscated from a sleeping king’s pillow to demonstrate restraint.",
      "testament": "Old Testament",
      "difficulty": "Master",
      "timerSeconds": 120,
      "points": 250,
      "curated": true,
      "hint1": "Took place in the trench in the wilderness of Ziph.",
      "hint2": "David shouted from an opposite hilltop to general Abner for failing to guard his master."
    }
  },
  {
    "id": "guess-the-emoji-l36-c4",
    "game_slug": "guess-the-emoji",
    "level": 36,
    "challenge_index": 4,
    "question_text": "🧥 ✂️ 1️⃣2️⃣ 1️⃣0️⃣ 👑",
    "options": [
      "Ahijah the Shilonite tearing his new garment into twelve pieces and giving ten to Jeroboam",
      "Samuel's mantle skirt torn by Saul in Gilgal",
      "Joseph's coat of many colors stripped and torn by wild beasts",
      "David cutting off the skirt of Saul's robe privily in cave"
    ],
    "correct_answer": "Ahijah the Shilonite tearing his new garment into twelve pieces and giving ten to Jeroboam",
    "explanation": "1 Kings 11:29–31 describes prophet Ahijah catching the new garment that was on him, rending it in twelve pieces, and telling Jeroboam: \"Take thee ten pieces: for thus saith the Lord... I will rend the kingdom out of the hand of Solomon, and will give ten tribes to thee.\"",
    "reference": "1 Kings 11:29–31",
    "metadata": {
      "stage": 8,
      "stage_title": "Advanced Expert Traps",
      "level_title": "Indirect Clues & Hidden Signs",
      "puzzle_type": "no_obvious_clues",
      "emojis": "🧥 ✂️ 1️⃣2️⃣ 1️⃣0️⃣ 👑",
      "prompt": "A brand-new robe ripped into twelve fabric remnants with ten surrendered as a dynastic charter.",
      "testament": "Old Testament",
      "difficulty": "Master",
      "timerSeconds": 120,
      "points": 250,
      "curated": true,
      "hint1": "Occurred on the highway outside Jerusalem.",
      "hint2": "Two tribes reserved for the house of David for Jerusalem’s sake."
    }
  },
  {
    "id": "guess-the-emoji-l36-c5",
    "game_slug": "guess-the-emoji",
    "level": 36,
    "challenge_index": 5,
    "question_text": "🏹 🪟 💨 3️⃣ 😡",
    "options": [
      "Elisha commanding King Joash to shoot arrow of deliverance and strike ground thrice",
      "Jonathan shooting three arrows beyond the stone Ezel for David",
      "Jehu drawing bow with full strength striking King Jehoram between arms",
      "Ahab struck by an arrow drawn at a venture between joints of harness"
    ],
    "correct_answer": "Elisha commanding King Joash to shoot arrow of deliverance and strike ground thrice",
    "explanation": "2 Kings 13:14–19 records dying Elisha laying hands on King Joash’s hands to shoot the arrow of the Lord’s deliverance eastward; when Joash smote the ground only three times and stayed, the prophet was wroth because Syria would only be smitten thrice.",
    "reference": "2 Kings 13:14–19",
    "metadata": {
      "stage": 8,
      "stage_title": "Advanced Expert Traps",
      "level_title": "Indirect Clues & Hidden Signs",
      "puzzle_type": "no_obvious_clues",
      "emojis": "🏹 🪟 💨 3️⃣ 😡",
      "prompt": "An eastward window arrow release followed by three timid ground strikes angering a dying seer.",
      "testament": "Old Testament",
      "difficulty": "Master",
      "timerSeconds": 120,
      "points": 250,
      "curated": true,
      "hint1": "The prophet said: \"Thou shouldest have smitten five or six times; then hadst thou smitten Syria till thou hadst consumed it.\"",
      "hint2": "Elisha’s final prophetic act before his death."
    }
  },
  {
    "id": "guess-the-emoji-l37-c1",
    "game_slug": "guess-the-emoji",
    "level": 37,
    "challenge_index": 1,
    "question_text": "🏛️ 🌊 💌 🤝 👩",
    "options": [
      "Phoebe of Cenchrea",
      "Priscilla of Corinth",
      "Chloe of Corinth",
      "Lydia of Thyatira"
    ],
    "correct_answer": "Phoebe of Cenchrea",
    "explanation": "Romans 16:1–2 commends Phoebe, \"our sister, which is a servant of the church which is at Cenchrea: That ye receive her in the Lord... for she hath been a succourer of many, and of myself also.\"",
    "reference": "Romans 16:1–2",
    "metadata": {
      "stage": 8,
      "stage_title": "Advanced Expert Traps",
      "level_title": "Obscure Women of Faith",
      "puzzle_type": "exact_person",
      "emojis": "🏛️ 🌊 💌 🤝 👩",
      "prompt": "Identify the deaconess / benefactor from Corinth’s eastern seaport who carried Romans.",
      "testament": "New Testament",
      "difficulty": "Master",
      "timerSeconds": 120,
      "points": 250,
      "curated": true,
      "hint1": "Described as a \"servant (diakonos) of the church at Cenchrea\".",
      "hint2": "Paul calls her \"a succourer of many, and of myself also.\""
    }
  },
  {
    "id": "guess-the-emoji-l37-c2",
    "game_slug": "guess-the-emoji",
    "level": 37,
    "challenge_index": 2,
    "question_text": "👭 🔨 🕊️ 🏛️ 🤝",
    "options": [
      "Tryphena and Tryphosa",
      "Euodias and Syntyche",
      "Martha and Mary",
      "Shiphrah and Puah"
    ],
    "correct_answer": "Tryphena and Tryphosa",
    "explanation": "Romans 16:12 records: \"Salute Tryphena and Tryphosa, who labour in the Lord.\" Likely sisters or twins whose names mean \"dainty\" and \"luxurious\", yet noted for hard spiritual labor.",
    "reference": "Romans 16:12",
    "metadata": {
      "stage": 8,
      "stage_title": "Advanced Expert Traps",
      "level_title": "Obscure Women of Faith",
      "puzzle_type": "exact_person",
      "emojis": "👭 🔨 🕊️ 🏛️ 🤝",
      "prompt": "Identify the twin/sister co-laborers warmly greeted together in Paul’s Roman epistle.",
      "testament": "New Testament",
      "difficulty": "Master",
      "timerSeconds": 120,
      "points": 250,
      "curated": true,
      "hint1": "Both names are derived from the Greek word for luxury, yet they labored tirelessly.",
      "hint2": "Greeted immediately before \"the beloved Persis\"."
    }
  },
  {
    "id": "guess-the-emoji-l37-c3",
    "game_slug": "guess-the-emoji",
    "level": 37,
    "challenge_index": 3,
    "question_text": "💖 👩 🔨 🌾 🏛️",
    "options": [],
    "correct_answer": "Persis",
    "explanation": "Romans 16:12 states: \"Salute the beloved Persis, which laboured much in the Lord.\" She is singled out with the tender title \"beloved\" and commended for abundant labor.",
    "reference": "Romans 16:12",
    "metadata": {
      "stage": 8,
      "stage_title": "Advanced Expert Traps",
      "level_title": "Obscure Women of Faith",
      "puzzle_type": "exact_person",
      "emojis": "💖 👩 🔨 🌾 🏛️",
      "prompt": "Type the exact name of the faithful sister greeted as \"the beloved\" who \"laboured much in the Lord\".",
      "testament": "New Testament",
      "difficulty": "Master",
      "timerSeconds": 120,
      "points": 250,
      "is_typed": true,
      "acceptedAlternatives": [
        "persis"
      ],
      "curated": true,
      "hint1": "Her name means \"a Persian woman\".",
      "hint2": "Mentioned in Romans 16:12 directly after Tryphena and Tryphosa."
    }
  },
  {
    "id": "guess-the-emoji-l37-c4",
    "game_slug": "guess-the-emoji",
    "level": 37,
    "challenge_index": 4,
    "question_text": "👵 👩 👶 📖 🕊️",
    "options": [
      "Lois and Eunice",
      "Elizabeth and Mary",
      "Naomi and Ruth",
      "Sarah and Rebekah"
    ],
    "correct_answer": "Lois and Eunice",
    "explanation": "2 Timothy 1:5 commemorates the unfeigned faith that dwelt first in Timothy’s grandmother Lois, and his mother Eunice, who instructed him in holy scriptures from childhood.",
    "reference": "2 Timothy 1:5; 3:15",
    "metadata": {
      "stage": 8,
      "stage_title": "Advanced Expert Traps",
      "level_title": "Obscure Women of Faith",
      "puzzle_type": "exact_person",
      "emojis": "👵 👩 👶 📖 🕊️",
      "prompt": "Identify the maternal lineage (grandmother and mother) praised for imparting unfeigned faith.",
      "testament": "New Testament",
      "difficulty": "Master",
      "timerSeconds": 120,
      "points": 250,
      "curated": true,
      "hint1": "From childhood they taught Timothy the holy scriptures.",
      "hint2": "Timothy’s mother was a Jewess who believed, but his father was a Greek."
    }
  },
  {
    "id": "guess-the-emoji-l37-c5",
    "game_slug": "guess-the-emoji",
    "level": 37,
    "challenge_index": 5,
    "question_text": "🏛️ 👗 👑 🕊️ 🤝",
    "options": [
      "Claudia",
      "Priscilla",
      "Damaris",
      "Apphia"
    ],
    "correct_answer": "Claudia",
    "explanation": "2 Timothy 4:21 includes greetings from Roman believers: \"Eubulus greeteth thee, and Pudens, and Linus, and Claudia, and all the brethren.\" Tradition identifies her as a British or Roman noblewoman.",
    "reference": "2 Timothy 4:21",
    "metadata": {
      "stage": 8,
      "stage_title": "Advanced Expert Traps",
      "level_title": "Obscure Women of Faith",
      "puzzle_type": "exact_person",
      "emojis": "🏛️ 👗 👑 🕊️ 🤝",
      "prompt": "Identify the Roman Christian woman whose final greeting to Timothy is recorded in 2 Timothy 4:21.",
      "testament": "New Testament",
      "difficulty": "Master",
      "timerSeconds": 120,
      "points": 250,
      "curated": true,
      "hint1": "Mentioned alongside Pudens and Linus.",
      "hint2": "The only woman sending personal greetings in Paul’s last chapter."
    }
  },
  {
    "id": "guess-the-emoji-l38-c1",
    "game_slug": "guess-the-emoji",
    "level": 38,
    "challenge_index": 1,
    "question_text": "🌍 🌾 🪵 ✝️ 🚶‍♂️",
    "options": [
      "Simon of Cyrene",
      "Joseph of Arimathaea",
      "Nicodemus",
      "Barabbas"
    ],
    "correct_answer": "Simon of Cyrene",
    "explanation": "Mark 15:21 tells how soldiers compelled Simon a Cyrenian, coming out of the country, the father of Alexander and Rufus, to pass by and bear Jesus’ cross.",
    "reference": "Mark 15:21; Luke 23:26",
    "metadata": {
      "stage": 8,
      "stage_title": "Advanced Expert Traps",
      "level_title": "Unsung Heroes & Defenders",
      "puzzle_type": "exact_person",
      "emojis": "🌍 🌾 🪵 ✝️ 🚶‍♂️",
      "prompt": "Identify the North African pilgrim commandeered to carry the cross beam up Golgotha.",
      "testament": "New Testament",
      "difficulty": "Master",
      "timerSeconds": 120,
      "points": 250,
      "curated": true,
      "hint1": "Father of Alexander and Rufus.",
      "hint2": "A native of Cyrene in modern Libya."
    }
  },
  {
    "id": "guess-the-emoji-l38-c2",
    "game_slug": "guess-the-emoji",
    "level": 38,
    "challenge_index": 2,
    "question_text": "🚶‍♂️🚶‍♂️ 🍞 👁️ 💨 📖",
    "options": [
      "Cleopas and companion on the Emmaus road recognizing Jesus at bread breaking",
      "Peter and John running to the empty tomb",
      "Philip explaining Isaiah to the Ethiopian eunuch",
      "Paul and Silas singing praises at midnight in prison"
    ],
    "correct_answer": "Cleopas and companion on the Emmaus road recognizing Jesus at bread breaking",
    "explanation": "Luke 24:13–35 describes two disciples walking seven miles to Emmaus; Jesus drew near, expounded the scriptures, and in the breaking of bread their eyes were opened and He vanished from sight.",
    "reference": "Luke 24:13–35",
    "metadata": {
      "stage": 8,
      "stage_title": "Advanced Expert Traps",
      "level_title": "Unsung Heroes & Defenders",
      "puzzle_type": "no_obvious_clues",
      "emojis": "🚶‍♂️🚶‍♂️ 🍞 👁️ 💨 📖",
      "prompt": "A seven-mile Resurrection stroll ending in opened eyes and a sudden vanishing act at supper.",
      "testament": "New Testament",
      "difficulty": "Master",
      "timerSeconds": 120,
      "points": 250,
      "curated": true,
      "hint1": "One of them was explicitly named Cleopas.",
      "hint2": "They asked: \"Did not our heart burn within us, while he talked with us by the way?\""
    }
  },
  {
    "id": "guess-the-emoji-l38-c3",
    "game_slug": "guess-the-emoji",
    "level": 38,
    "challenge_index": 3,
    "question_text": "🌿 🏺 1️⃣0️⃣0️⃣ ⚰️ 🌙",
    "options": [
      "Nicodemus",
      "Joseph of Arimathaea",
      "Lazarus of Bethany",
      "Zacchaeus"
    ],
    "correct_answer": "Nicodemus",
    "explanation": "John 19:39–40 records: \"And there came also Nicodemus, which at the first came to Jesus by night, and brought a mixture of myrrh and aloes, about an hundred pound weight,\" to prepare Jesus’ burial.",
    "reference": "John 19:39–40",
    "metadata": {
      "stage": 8,
      "stage_title": "Advanced Expert Traps",
      "level_title": "Unsung Heroes & Defenders",
      "puzzle_type": "exact_person",
      "emojis": "🌿 🏺 1️⃣0️⃣0️⃣ ⚰️ 🌙",
      "prompt": "Identify the ruler of the Jews who brought 100 Roman pounds of royal burial spices.",
      "testament": "New Testament",
      "difficulty": "Master",
      "timerSeconds": 120,
      "points": 250,
      "curated": true,
      "hint1": "Originally came to Jesus secretly by night in John 3.",
      "hint2": "Assisted Joseph of Arimathaea in winding the body in linen cloths."
    }
  },
  {
    "id": "guess-the-emoji-l38-c4",
    "game_slug": "guess-the-emoji",
    "level": 38,
    "challenge_index": 4,
    "question_text": "🏛️ 👨‍⚖️ 🗣️ ⏳ 🕊️",
    "options": [
      "Gamaliel",
      "Nicodemus",
      "Caiaphas",
      "Ananias"
    ],
    "correct_answer": "Gamaliel",
    "explanation": "Acts 5:34–40 tells how Gamaliel, a doctor of the law held in reputation among all the people, warned the council: \"Refrain from these men, and let them alone: for if this counsel or this work be of men, it will come to nought: But if it be of God, ye cannot overthrow it.\"",
    "reference": "Acts 5:34–40",
    "metadata": {
      "stage": 8,
      "stage_title": "Advanced Expert Traps",
      "level_title": "Unsung Heroes & Defenders",
      "puzzle_type": "exact_person",
      "emojis": "🏛️ 👨‍⚖️ 🗣️ ⏳ 🕊️",
      "prompt": "Identify the revered Pharisaic scholar whose wise counsel saved the apostles from execution.",
      "testament": "New Testament",
      "difficulty": "Master",
      "timerSeconds": 120,
      "points": 250,
      "curated": true,
      "hint1": "Cited the failed rebellions of Theudas and Judas of Galilee.",
      "hint2": "Paul was brought up at his feet in Jerusalem (Acts 22:3)."
    }
  },
  {
    "id": "guess-the-emoji-l38-c5",
    "game_slug": "guess-the-emoji",
    "level": 38,
    "challenge_index": 5,
    "question_text": "💰 🏛️ 🪨 ⚰️ 🌿",
    "options": [
      "Joseph of Arimathaea",
      "Nicodemus",
      "Simon the Leper",
      "Cornelius the Centurion"
    ],
    "correct_answer": "Joseph of Arimathaea",
    "explanation": "Matthew 27:57–60 describes Joseph of Arimathaea, a rich man and disciple of Jesus, who went to Pilate, begged the body of Jesus, wrapped it in clean linen, and laid it in his own new tomb hewn out of the rock.",
    "reference": "Matthew 27:57–60; John 19:38",
    "metadata": {
      "stage": 8,
      "stage_title": "Advanced Expert Traps",
      "level_title": "Unsung Heroes & Defenders",
      "puzzle_type": "exact_person",
      "emojis": "💰 🏛️ 🪨 ⚰️ 🌿",
      "prompt": "Identify the wealthy councillor who provided his own unused rock-hewn sepulchre for Jesus.",
      "testament": "New Testament",
      "difficulty": "Master",
      "timerSeconds": 120,
      "points": 250,
      "curated": true,
      "hint1": "An honourable counsellor who waited for the kingdom of God.",
      "hint2": "Fulfilled Isaiah 53:9: \"he made his grave with the wicked, and with the rich in his death.\""
    }
  },
  {
    "id": "guess-the-emoji-l39-c1",
    "game_slug": "guess-the-emoji",
    "level": 39,
    "challenge_index": 1,
    "question_text": "📯 🏔️ 🗣️ 🏰 👩",
    "options": [
      "Sheba son of Bichri blowing trumpet in rebellion against David",
      "Absalom stealing the hearts of the men of Israel",
      "Adonijah anointing himself king at En-rogel",
      "Jeroboam rebelling against Solomon with ten tribes"
    ],
    "correct_answer": "Sheba son of Bichri blowing trumpet in rebellion against David",
    "explanation": "2 Samuel 20:1–22 recounts Sheba son of Bichri blowing a trumpet saying \"We have no part in David\"; he fled into the city of Abel-beth-maachah, where a wise woman negotiated and had his head thrown over the wall.",
    "reference": "2 Samuel 20:1–22",
    "metadata": {
      "stage": 8,
      "stage_title": "Advanced Expert Traps",
      "level_title": "Treacheries & Fallen Leaders",
      "puzzle_type": "no_obvious_clues",
      "emojis": "📯 🏔️ 🗣️ 🏰 👩",
      "prompt": "A Benjamite rebel trumpet blast ending when a wise woman tosses his severed head over the ramparts.",
      "testament": "Old Testament",
      "difficulty": "Master",
      "timerSeconds": 120,
      "points": 250,
      "curated": true,
      "hint1": "He shouted: \"We have no part in David, neither have we inheritance in the son of Jesse.\"",
      "hint2": "The siege of Abel-beth-maachah ended immediately when his head fell."
    }
  },
  {
    "id": "guess-the-emoji-l39-c2",
    "game_slug": "guess-the-emoji",
    "level": 39,
    "challenge_index": 2,
    "question_text": "🧔 🗡️ 🤝 🩸 💀",
    "options": [
      "Joab deceitfully embracing and stabbing general Amasa",
      "David slaying Goliath in the Valley of Elah",
      "Ehud plunging dagger into King Eglon's belly",
      "Absalom having Amnon killed at the sheep shearing"
    ],
    "correct_answer": "Joab deceitfully embracing and stabbing general Amasa",
    "explanation": "2 Samuel 20:9–10 records Joab taking Amasa by the beard with his right hand to kiss him, asking \"Art thou in health, my brother?\", and striking him in the fifth rib with his sword so his bowels gushed out.",
    "reference": "2 Samuel 20:9–10",
    "metadata": {
      "stage": 8,
      "stage_title": "Advanced Expert Traps",
      "level_title": "Treacheries & Fallen Leaders",
      "puzzle_type": "no_obvious_clues",
      "emojis": "🧔 🗡️ 🤝 🩸 💀",
      "prompt": "A treacherous fraternal kiss concealing a left-handed blade strike into the 5th rib.",
      "testament": "Old Testament",
      "difficulty": "Master",
      "timerSeconds": 120,
      "points": 250,
      "curated": true,
      "hint1": "Joab used the identical treacherous tactic earlier against Abner son of Ner.",
      "hint2": "David charged Solomon to avenge these assassinations upon Joab."
    }
  },
  {
    "id": "guess-the-emoji-l39-c3",
    "game_slug": "guess-the-emoji",
    "level": 39,
    "challenge_index": 3,
    "question_text": "👑 📜 🔪 🔥 ❄️",
    "options": [
      "King Jehoiakim",
      "King Zedekiah",
      "King Manasseh",
      "King Ahaz"
    ],
    "correct_answer": "King Jehoiakim",
    "explanation": "Jeremiah 36:22–24 recounts King Jehoiakim sitting in the winterhouse with a fire burning on the hearth; as Jehudi read three or four leaves of Jeremiah’s scroll, the king cut it with a penknife and cast it into the fire until consumed.",
    "reference": "Jeremiah 36:22–24",
    "metadata": {
      "stage": 8,
      "stage_title": "Advanced Expert Traps",
      "level_title": "Treacheries & Fallen Leaders",
      "puzzle_type": "exact_person",
      "emojis": "👑 📜 🔪 🔥 ❄️",
      "prompt": "Identify the insolent king who shredded Jeremiah’s scroll page by page into a winter fireplace.",
      "testament": "Old Testament",
      "difficulty": "Master",
      "timerSeconds": 120,
      "points": 250,
      "curated": true,
      "hint1": "Son of good King Josiah who sat in the winterhouse.",
      "hint2": "Jeremiah was commanded to take another roll and rewrite all words with added judgments."
    }
  },
  {
    "id": "guess-the-emoji-l39-c4",
    "game_slug": "guess-the-emoji",
    "level": 39,
    "challenge_index": 4,
    "question_text": "🏃‍♂️ 💰 👗 🤥 🤍",
    "options": [
      "Gehazi",
      "Balaam",
      "Achan",
      "Judas Iscariot"
    ],
    "correct_answer": "Gehazi",
    "explanation": "2 Kings 5:20–27 tells of Gehazi, servant of Elisha, running after Naaman to extort two talents of silver and two changes of garments under a false story; Elisha cursed him, and he went out a leper as white as snow.",
    "reference": "2 Kings 5:20–27",
    "metadata": {
      "stage": 8,
      "stage_title": "Advanced Expert Traps",
      "level_title": "Treacheries & Fallen Leaders",
      "puzzle_type": "exact_person",
      "emojis": "🏃‍♂️ 💰 👗 🤥 🤍",
      "prompt": "Identify the covetous servant who traded prophetic integrity for silver and inherited snow-white leprosy.",
      "testament": "Old Testament",
      "difficulty": "Master",
      "timerSeconds": 120,
      "points": 250,
      "curated": true,
      "hint1": "Elisha asked: \"Went not mine heart with thee, when the man turned again from his chariot to meet thee?\"",
      "hint2": "Cursed with the leprosy of Naaman unto him and his seed forever."
    }
  },
  {
    "id": "guess-the-emoji-l39-c5",
    "game_slug": "guess-the-emoji",
    "level": 39,
    "challenge_index": 5,
    "question_text": "🏰 🧠 🗣️ 🚫 🪢",
    "options": [
      "Ahithophel the Gilonite",
      "Hushai the Archite",
      "Ziba servant of Saul",
      "Shimei son of Gera"
    ],
    "correct_answer": "Ahithophel the Gilonite",
    "explanation": "2 Samuel 17:1–23 records that when Ahithophel saw his strategic counsel to pursue David that very night was rejected for Hushai’s advice, he saddled his ass, went home to his city, put his household in order, and hanged himself.",
    "reference": "2 Samuel 17:1–23",
    "metadata": {
      "stage": 8,
      "stage_title": "Advanced Expert Traps",
      "level_title": "Treacheries & Fallen Leaders",
      "puzzle_type": "exact_person",
      "emojis": "🏰 🧠 🗣️ 🚫 🪢",
      "prompt": "Identify the mastermind whose counsel was revered as an oracle, who took his own life when outwitted.",
      "testament": "Old Testament",
      "difficulty": "Master",
      "timerSeconds": 120,
      "points": 250,
      "curated": true,
      "hint1": "Hushai defeated his counsel so the Lord might bring evil upon Absalom.",
      "hint2": "Foreshadows Judas Iscariot hanging himself after betraying his Lord."
    }
  },
  {
    "id": "guess-the-emoji-l40-c1",
    "game_slug": "guess-the-emoji",
    "level": 40,
    "challenge_index": 1,
    "question_text": "🐍 🪵 🔨 💥 👑",
    "options": [
      "King Hezekiah shattering the bronze serpent and naming it Nehushtan (a piece of brass)",
      "Moses setting up the bronze serpent in the wilderness",
      "Aaron's rod budding almond blossoms in the tabernacle",
      "Josiah smashing the images of Baal at Bethel"
    ],
    "correct_answer": "King Hezekiah shattering the bronze serpent and naming it Nehushtan (a piece of brass)",
    "explanation": "2 Kings 18:4 records that Hezekiah broke in pieces the brazen serpent that Moses had made, for unto those days the children of Israel did burn incense to it: and he called it Nehushtan (a mere piece of brass).",
    "reference": "2 Kings 18:4",
    "metadata": {
      "stage": 8,
      "stage_title": "Advanced Expert Traps",
      "level_title": "Forensic Sacred Artifacts",
      "puzzle_type": "no_obvious_clues",
      "emojis": "🐍 🪵 🔨 💥 👑",
      "prompt": "A sacred mosaic relic pulverized by a reforming king because it had degenerated into an idol.",
      "testament": "Old Testament",
      "difficulty": "Master",
      "timerSeconds": 120,
      "points": 250,
      "curated": true,
      "hint1": "The relic had survived from the wilderness wanderings for over 700 years.",
      "hint2": "He gave it a derogatory name meaning \"a piece of brass\"."
    }
  },
  {
    "id": "guess-the-emoji-l40-c2",
    "game_slug": "guess-the-emoji",
    "level": 40,
    "challenge_index": 2,
    "question_text": "🪙 🪵 🪔 ☁️ 👃",
    "options": [
      "The Golden Altar of Incense standing before the Holy of Holies",
      "The Brazen Altar of Burnt Offering in the outer court",
      "The Golden Candlestick with seven oil lamps",
      "The Ark of the Covenant with the Mercy Seat and Cherubim"
    ],
    "correct_answer": "The Golden Altar of Incense standing before the Holy of Holies",
    "explanation": "Exodus 30:1–10 describes the altar of shittim wood overlaid with pure gold, set before the veil by the ark, where Aaron burned sweet incense every morning when dressing the lamps.",
    "reference": "Exodus 30:1–10",
    "metadata": {
      "stage": 8,
      "stage_title": "Advanced Expert Traps",
      "level_title": "Forensic Sacred Artifacts",
      "puzzle_type": "no_obvious_clues",
      "emojis": "🪙 🪵 🪔 ☁️ 👃",
      "prompt": "A golden four-horned pedestal positioned directly before the sanctuary veil producing fragrant cloud.",
      "testament": "Old Testament",
      "difficulty": "Master",
      "timerSeconds": 120,
      "points": 250,
      "curated": true,
      "hint1": "Perpetual incense made of sweet spices: stacte, onycha, galbanum, and pure frankincense.",
      "hint2": "Atonement was made on its four horns once a year with blood on the Day of Atonement."
    }
  },
  {
    "id": "guess-the-emoji-l40-c3",
    "game_slug": "guess-the-emoji",
    "level": 40,
    "challenge_index": 3,
    "question_text": "🪙 🪵 🍞 1️⃣2️⃣ 🌿",
    "options": [
      "Table of Shewbread with twelve cakes set in two rows with frankincense",
      "Ark of the Covenant containing the pot of manna",
      "Golden Altar of Incense with four horns",
      "Brazen Altar for daily animal sacrifices"
    ],
    "correct_answer": "Table of Shewbread with twelve cakes set in two rows with frankincense",
    "explanation": "Leviticus 24:5–9 and Exodus 25:23–30 specify the golden table holding twelve cakes of fine flour in two rows of six, with pure frankincense on each row, renewed every Sabbath as the bread of the Presence.",
    "reference": "Leviticus 24:5–9; Exodus 25:23–30",
    "metadata": {
      "stage": 8,
      "stage_title": "Advanced Expert Traps",
      "level_title": "Forensic Sacred Artifacts",
      "puzzle_type": "no_obvious_clues",
      "emojis": "🪙 🪵 🍞 1️⃣2️⃣ 🌿",
      "prompt": "A gold-plated acacia table supporting twelve ceremonial loaves renewed weekly by priests.",
      "testament": "Old Testament",
      "difficulty": "Master",
      "timerSeconds": 120,
      "points": 250,
      "curated": true,
      "hint1": "Twelve cakes representing the twelve tribes of Israel.",
      "hint2": "Eaten only by Aaron and his sons in the holy place."
    }
  },
  {
    "id": "guess-the-emoji-l40-c4",
    "game_slug": "guess-the-emoji",
    "level": 40,
    "challenge_index": 4,
    "question_text": "🪞 👩 🔨 🪣 💧",
    "options": [
      "The Bronze Laver crafted from the looking-glasses of assembling women",
      "Solomon's molten sea resting on twelve bronze oxen",
      "The brazen altar made of shittim wood overlaid with brass",
      "Potter's earthen bottle broken at the Potsherd Gate"
    ],
    "correct_answer": "The Bronze Laver crafted from the looking-glasses of assembling women",
    "explanation": "Exodus 38:8 records: \"And he made the laver of brass, and the foot of it of brass, of the lookingglasses of the women assembling, which assembled at the door of the tabernacle of the congregation.\"",
    "reference": "Exodus 38:8",
    "metadata": {
      "stage": 8,
      "stage_title": "Advanced Expert Traps",
      "level_title": "Forensic Sacred Artifacts",
      "puzzle_type": "no_obvious_clues",
      "emojis": "🪞 👩 🔨 🪣 💧",
      "prompt": "Sanctuary ablution basin cast entirely from the donated polished bronze mirrors of female worshipers.",
      "testament": "Old Testament",
      "difficulty": "Master",
      "timerSeconds": 120,
      "points": 250,
      "curated": true,
      "hint1": "Located between the tabernacle of the congregation and the altar.",
      "hint2": "Priests washed their hands and feet there before ministering lest they die."
    }
  },
  {
    "id": "guess-the-emoji-l40-c5",
    "game_slug": "guess-the-emoji",
    "level": 40,
    "challenge_index": 5,
    "question_text": "💎 2️⃣ ✍️ 1️⃣2️⃣ 👔",
    "options": [
      "Two onyx shoulder stones engraved with names of the twelve tribes of Israel",
      "The two tables of stone written with the finger of God",
      "Urim and Thummim kept inside the breastplate",
      "Twelve stones gathered by twelve men from Jordan"
    ],
    "correct_answer": "Two onyx shoulder stones engraved with names of the twelve tribes of Israel",
    "explanation": "Exodus 28:9–12 commands to take two onyx stones and grave on them the names of the children of Israel (six names on one stone, six on the other according to birth), set in ouches of gold on the ephod shoulders.",
    "reference": "Exodus 28:9–12",
    "metadata": {
      "stage": 8,
      "stage_title": "Advanced Expert Traps",
      "level_title": "Forensic Sacred Artifacts",
      "puzzle_type": "no_obvious_clues",
      "emojis": "💎 2️⃣ ✍️ 1️⃣2️⃣ 👔",
      "prompt": "Twin signet-cut shoulder gems carrying six tribal names apiece on the high priest’s epaulets.",
      "testament": "Old Testament",
      "difficulty": "Master",
      "timerSeconds": 120,
      "points": 250,
      "curated": true,
      "hint1": "Engraved like signets with the work of an engraver in stone.",
      "hint2": "Aaron bore their names before the Lord upon his two shoulders for a memorial."
    }
  },
  {
    "id": "guess-the-emoji-l41-c1",
    "game_slug": "guess-the-emoji",
    "level": 41,
    "challenge_index": 1,
    "question_text": "🧥 🥈 2️⃣0️⃣0️⃣ 🪙 ⛺ 🕳️",
    "options": [
      "Achan concealing Babylonian garment, 200 shekels of silver, and wedge of gold in tent",
      "Gehazi hiding two talents of silver and changes of raiment in the tower",
      "Judah giving signet, bracelets, and staff to Tamar as pledge",
      "Joseph's brothers dipping his coat of many colors in goat blood"
    ],
    "correct_answer": "Achan concealing Babylonian garment, 200 shekels of silver, and wedge of gold in tent",
    "explanation": "Joshua 7:21 recounts Achan confessing: \"When I saw among the spoils a goodly Babylonish garment, and two hundred shekels of silver, and a wedge of gold of fifty shekels weight, then I coveted them, and took them; and, behold, they are hid in the earth in the midst of my tent.\"",
    "reference": "Joshua 7:21–24",
    "metadata": {
      "stage": 9,
      "stage_title": "Master Multi-Part Investigations",
      "level_title": "Forensic Crime Scenes of Scripture",
      "puzzle_type": "scripture_detective",
      "emojis": "🧥 🥈 2️⃣0️⃣0️⃣ 🪙 ⛺ 🕳️",
      "prompt": "Forensic inventory of contraband buried under tent floor that caused the defeat at Ai.",
      "testament": "Old Testament",
      "difficulty": "Master",
      "timerSeconds": 150,
      "points": 250,
      "curated": true,
      "dossier": "Stolen Loot: 1 Shinar/Babylonian embroidered robe, 200 silver shekels, 1 gold wedge (50 shekels weight); buried beneath earthen floor of family tent.",
      "hint1": "Discovered through tribal lot casting from Judah down to the family of Zabdi.",
      "hint2": "Led to judgment at the Valley of Achor."
    }
  },
  {
    "id": "guess-the-emoji-l41-c2",
    "game_slug": "guess-the-emoji",
    "level": 41,
    "challenge_index": 2,
    "question_text": "🍇 👑 📜 🤥 🪨 💀",
    "options": [
      "Jezebel using false witnesses to stone Naboth for his ancestral vineyard",
      "Absalom having Amnon assassinated at sheep-shearing banquet",
      "Stephen stoned outside Jerusalem gates by false witnesses",
      "David ordering Uriah the Hittite to the forefront of hottest battle"
    ],
    "correct_answer": "Jezebel using false witnesses to stone Naboth for his ancestral vineyard",
    "explanation": "1 Kings 21:8–14 describes Jezebel writing letters in Ahab’s name and sealing them with his seal, suborning two sons of Belial to falsely testify that Naboth blasphemed God and the king, so he was carried forth and stoned.",
    "reference": "1 Kings 21:8–14",
    "metadata": {
      "stage": 9,
      "stage_title": "Master Multi-Part Investigations",
      "level_title": "Forensic Crime Scenes of Scripture",
      "puzzle_type": "scripture_detective",
      "emojis": "🍇 👑 📜 🤥 🪨 💀",
      "prompt": "A forged royal dispatch and two perjured scoundrels judicial execution to seize real estate.",
      "testament": "Old Testament",
      "difficulty": "Master",
      "timerSeconds": 150,
      "points": 250,
      "curated": true,
      "dossier": "Conspiracy Details: Royal seal hijacked, fast proclaimed, two scoundrels hired to accuse the landholder of blasphemy, execution outside city by stoning.",
      "hint1": "Naboth refused Ahab: \"The Lord forbid it me, that I should give the inheritance of my fathers unto thee.\"",
      "hint2": "Elijah confronted Ahab: \"Hast thou killed, and also taken possession?\""
    }
  },
  {
    "id": "guess-the-emoji-l41-c3",
    "game_slug": "guess-the-emoji",
    "level": 41,
    "challenge_index": 3,
    "question_text": "🪙 🔨 🏛️ 🗣️ 📢 2️⃣",
    "options": [
      "Demetrius the silversmith inciting two-hour riot in Ephesus amphitheater",
      "Alexander the coppersmith doing much evil to Paul",
      "Aaron crafting the golden calf with a graving tool",
      "Zechariah's vision of four horns and four carpenters"
    ],
    "correct_answer": "Demetrius the silversmith inciting two-hour riot in Ephesus amphitheater",
    "explanation": "Acts 19:24–34 relates Demetrius the silversmith, who made silver shrines for Diana, gathering workmen whose craft was endangered by Paul; the whole city rushed into the theater crying for two hours: \"Great is Diana of the Ephesians!\"",
    "reference": "Acts 19:24–34",
    "metadata": {
      "stage": 9,
      "stage_title": "Master Multi-Part Investigations",
      "level_title": "Forensic Crime Scenes of Scripture",
      "puzzle_type": "scripture_detective",
      "emojis": "🪙 🔨 🏛️ 🗣️ 📢 2️⃣",
      "prompt": "An artisanal guild strike sparking a two-hour mass stadium chant against apostolic missions.",
      "testament": "New Testament",
      "difficulty": "Master",
      "timerSeconds": 150,
      "points": 250,
      "curated": true,
      "dossier": "Trade Union Riot: Trade in miniature silver temple shrines threatened; 25,000-seat outdoor auditorium filled; continuous unison chant for 120 minutes.",
      "hint1": "Gaius and Aristarchus, Paul’s companions, were dragged into the theater.",
      "hint2": "The townclerk finally appeased the multitude and dismissed the unlawful assembly."
    }
  },
  {
    "id": "guess-the-emoji-l41-c4",
    "game_slug": "guess-the-emoji",
    "level": 41,
    "challenge_index": 4,
    "question_text": "🪙 3️⃣0️⃣ 🏛️ 🪢 💥 🩸",
    "options": [
      "Judas casting thirty silver pieces into temple, hanging himself, and bursting asunder",
      "Achan burying silver and gold under his tent in Jericho",
      "Gehazi taking two talents of silver from Naaman",
      "Ananias and Sapphira holding back part of the land's price"
    ],
    "correct_answer": "Judas casting thirty silver pieces into temple, hanging himself, and bursting asunder",
    "explanation": "Matthew 27:3–5 and Acts 1:18 describe Judas throwing down the thirty pieces of silver in the sanctuary, departing, and hanging himself; falling headlong, he burst asunder in the midst, and all his bowels gushed out in Aceldama.",
    "reference": "Matthew 27:3–5; Acts 1:18–19",
    "metadata": {
      "stage": 9,
      "stage_title": "Master Multi-Part Investigations",
      "level_title": "Forensic Crime Scenes of Scripture",
      "puzzle_type": "scripture_detective",
      "emojis": "🪙 3️⃣0️⃣ 🏛️ 🪢 💥 🩸",
      "prompt": "Blood money tossed onto holy tiles, a noose, and a post-mortem rupture in the Field of Blood.",
      "testament": "New Testament",
      "difficulty": "Master",
      "timerSeconds": 150,
      "points": 250,
      "curated": true,
      "dossier": "Coroner Report: 30 shekels returned to chief priests; suicide by hanging; branch/rope broke causing fall into ravine; rupture of abdomen; field called Aceldama.",
      "hint1": "Judas confessed: \"I have sinned in that I have betrayed the innocent blood.\"",
      "hint2": "The priests declared it was not lawful to put the coins into the treasury because it was the price of blood."
    }
  },
  {
    "id": "guess-the-emoji-l41-c5",
    "game_slug": "guess-the-emoji",
    "level": 41,
    "challenge_index": 5,
    "question_text": "🌾 2️⃣ 🪓 👑 🩸 🛏️",
    "options": [
      "Baanah and Rechab assassinating King Ish-bosheth on his bed at noon",
      "Ehud plunging dagger into fat King Eglon in summer chamber",
      "Joab stabbing Abner under the fifth rib at Hebron gate",
      "Jehu ordering Jezebel thrown from palace window"
    ],
    "correct_answer": "Baanah and Rechab assassinating King Ish-bosheth on his bed at noon",
    "explanation": "2 Samuel 4:5–8 records Baanah and Rechab entering the house of Saul’s son Ish-bosheth as though they would fetch wheat while he lay on his bed at noon; they smote him, beheaded him, and brought his head to David, who executed them.",
    "reference": "2 Samuel 4:5–12",
    "metadata": {
      "stage": 9,
      "stage_title": "Master Multi-Part Investigations",
      "level_title": "Forensic Crime Scenes of Scripture",
      "puzzle_type": "scripture_detective",
      "emojis": "🌾 2️⃣ 🪓 👑 🩸 🛏️",
      "prompt": "Two captains feigning grain collection to decapitate a resting monarch in his bedchamber.",
      "testament": "Old Testament",
      "difficulty": "Master",
      "timerSeconds": 150,
      "points": 250,
      "curated": true,
      "dossier": "Crime Scene: Bedchamber of Saul’s royal heir at midday siesta; assassins posed as wheat merchants; decapitated victim; David ordered their hands and feet cut off and hanged over pool in Hebron.",
      "hint1": "The victim was Saul’s surviving son who reigned briefly over Israel.",
      "hint2": "Assassins expected a reward from David, but received capital justice."
    }
  },
  {
    "id": "guess-the-emoji-l42-c1",
    "game_slug": "guess-the-emoji",
    "level": 42,
    "challenge_index": 1,
    "question_text": "👑 🗡️ 8️⃣0️⃣0️⃣ 1️⃣ 🩸",
    "options": [
      "Adino the Eznite (Josheb-basshebeth)",
      "Eleazar son of Dodo",
      "Shammah son of Agee",
      "Abishai brother of Joab"
    ],
    "correct_answer": "Adino the Eznite (Josheb-basshebeth)",
    "explanation": "2 Samuel 23:8 declares: \"The Tachmonite that sat in the seat, chief among the captains; the same was Adino the Eznite: he lift up his spear against eight hundred, whom he slew at one time.\"",
    "reference": "2 Samuel 23:8",
    "metadata": {
      "stage": 9,
      "stage_title": "Master Multi-Part Investigations",
      "level_title": "David's Mighty Men Forensic Dossiers",
      "puzzle_type": "exact_person",
      "emojis": "👑 🗡️ 8️⃣0️⃣0️⃣ 1️⃣ 🩸",
      "prompt": "Identify the premier captain of David’s mighty men who eliminated 800 warriors in a single engagement.",
      "testament": "Old Testament",
      "difficulty": "Master",
      "timerSeconds": 150,
      "points": 250,
      "curated": true,
      "hint1": "Also known in 1 Chronicles 11:11 as Jashobeam an Hachmonite (300 slain).",
      "hint2": "Sat in the seat as chief of the three mighty men."
    }
  },
  {
    "id": "guess-the-emoji-l42-c2",
    "game_slug": "guess-the-emoji",
    "level": 42,
    "challenge_index": 2,
    "question_text": "🌾 ⚔️ 🖐️ 🗡️ 🩸",
    "options": [
      "Eleazar son of Dodo the Ahohite",
      "Adino the Eznite",
      "Shammah son of Agee",
      "Benaiah son of Jehoiada"
    ],
    "correct_answer": "Eleazar son of Dodo the Ahohite",
    "explanation": "2 Samuel 23:9–10 describes Eleazar, one of the three mighty men, who arose and smote the Philistines until his hand was weary, and his hand clave unto the sword; and the Lord wrought a great victory that day.",
    "reference": "2 Samuel 23:9–10",
    "metadata": {
      "stage": 9,
      "stage_title": "Master Multi-Part Investigations",
      "level_title": "David's Mighty Men Forensic Dossiers",
      "puzzle_type": "exact_person",
      "emojis": "🌾 ⚔️ 🖐️ 🗡️ 🩸",
      "prompt": "Identify the champion whose fingers locked in severe muscle spasm frozen to his sword hilt.",
      "testament": "Old Testament",
      "difficulty": "Master",
      "timerSeconds": 150,
      "points": 250,
      "curated": true,
      "hint1": "Stood with David at Pas-dammim when Israel’s men retreated.",
      "hint2": "The army returned after him only to spoil."
    }
  },
  {
    "id": "guess-the-emoji-l42-c3",
    "game_slug": "guess-the-emoji",
    "level": 42,
    "challenge_index": 3,
    "question_text": "🌱 🍲 🛡️ ⚔️ 🏃‍♂️",
    "options": [
      "Shammah son of Agee the Hararite",
      "Eleazar son of Dodo",
      "Abishai son of Zeruiah",
      "Ittai the Gittite"
    ],
    "correct_answer": "Shammah son of Agee the Hararite",
    "explanation": "2 Samuel 23:11–12 relates that Philistines gathered into a troop where was a piece of ground full of lentiles; the people fled, but Shammah stood in the midst of the ground, defended it, and slew the Philistines.",
    "reference": "2 Samuel 23:11–12",
    "metadata": {
      "stage": 9,
      "stage_title": "Master Multi-Part Investigations",
      "level_title": "David's Mighty Men Forensic Dossiers",
      "puzzle_type": "exact_person",
      "emojis": "🌱 🍲 🛡️ ⚔️ 🏃‍♂️",
      "prompt": "Identify the mighty man who took his solitary stand to defend an ordinary lentil patch.",
      "testament": "Old Testament",
      "difficulty": "Master",
      "timerSeconds": 150,
      "points": 250,
      "curated": true,
      "hint1": "The third of the original supreme three mighty men.",
      "hint2": "Defended a plot of lentils while all the people fled from the enemy."
    }
  },
  {
    "id": "guess-the-emoji-l42-c4",
    "game_slug": "guess-the-emoji",
    "level": 42,
    "challenge_index": 4,
    "question_text": "🦁 ❄️ 🕳️ 🦯 🗡️",
    "options": [
      "Benaiah son of Jehoiada",
      "Abishai brother of Joab",
      "Asahel brother of Joab",
      "Uriah the Hittite"
    ],
    "correct_answer": "Benaiah son of Jehoiada",
    "explanation": "2 Samuel 23:20–21 details Benaiah son of Jehoiada of Kabzeel, who slew two lionlike men of Moab, went down and slew a lion in a pit in a snowy day, and killed an Egyptian giant with the giant’s own spear.",
    "reference": "2 Samuel 23:20–21",
    "metadata": {
      "stage": 9,
      "stage_title": "Master Multi-Part Investigations",
      "level_title": "David's Mighty Men Forensic Dossiers",
      "puzzle_type": "exact_person",
      "emojis": "🦁 ❄️ 🕳️ 🦯 🗡️",
      "prompt": "Identify the valiant captain who climbed into a snowy pit to kill a predatory lion.",
      "testament": "Old Testament",
      "difficulty": "Master",
      "timerSeconds": 150,
      "points": 250,
      "curated": true,
      "hint1": "Commander of David’s elite Cherethites and Pelethites bodyguard.",
      "hint2": "Later executed Joab and Adonijah by Solomon’s decree."
    }
  },
  {
    "id": "guess-the-emoji-l42-c5",
    "game_slug": "guess-the-emoji",
    "level": 42,
    "challenge_index": 5,
    "question_text": "👴 👑 🗡️ 🛡️ 💀",
    "options": [
      "Abishai son of Zeruiah",
      "Joab son of Zeruiah",
      "Asahel son of Zeruiah",
      "Jonathan son of Shimea"
    ],
    "correct_answer": "Abishai son of Zeruiah",
    "explanation": "2 Samuel 21:15–17 tells how David waxed faint in battle, and giant Ishbi-benob (with a 300-shekel brass spear) thought to have slain him; but Abishai son of Zeruiah succoured him, smote the Philistine, and killed him.",
    "reference": "2 Samuel 21:15–17",
    "metadata": {
      "stage": 9,
      "stage_title": "Master Multi-Part Investigations",
      "level_title": "David's Mighty Men Forensic Dossiers",
      "puzzle_type": "exact_person",
      "emojis": "👴 👑 🗡️ 🛡️ 💀",
      "prompt": "Identify the fearless nephew who intervened to slay the bronze-speared giant Ishbi-benob as David collapsed.",
      "testament": "Old Testament",
      "difficulty": "Master",
      "timerSeconds": 150,
      "points": 250,
      "curated": true,
      "hint1": "Led to David’s men swearing: \"Thou shalt go no more out with us to battle, that thou quench not the light of Israel.\"",
      "hint2": "Chief among the thirty mighty men; wielded spear against three hundred."
    }
  },
  {
    "id": "guess-the-emoji-l43-c1",
    "game_slug": "guess-the-emoji",
    "level": 43,
    "challenge_index": 1,
    "question_text": "👩‍👧‍👧 5️⃣ 📜 🏞️ ⛺",
    "options": [
      "The Five Daughters of Zelophehad (Mahlah, Noah, Hoglah, Milcah, and Tirzah)",
      "The five foolish virgins carrying lamps with no oil",
      "The daughters of Job (Jemima, Kezia, and Keren-happuch)",
      "The four prophesying virgin daughters of Philip the evangelist"
    ],
    "correct_answer": "The Five Daughters of Zelophehad (Mahlah, Noah, Hoglah, Milcah, and Tirzah)",
    "explanation": "Numbers 26:33; 27:1–11 names the five daughters of Zelophehad: Mahlah, Noah, Hoglah, Milcah, and Tirzah, who petitioned Moses for legal land possession, securing inheritance rights for daughters.",
    "reference": "Numbers 27:1–11",
    "metadata": {
      "stage": 9,
      "stage_title": "Master Multi-Part Investigations",
      "level_title": "Obscure Women & Matriarchs",
      "puzzle_type": "no_obvious_clues",
      "emojis": "👩‍👧‍👧 5️⃣ 📜 🏞️ ⛺",
      "prompt": "Five sisters whose legal petition before the Tabernacle established biblical estate precedent.",
      "testament": "Old Testament",
      "difficulty": "Master",
      "timerSeconds": 150,
      "points": 250,
      "curated": true,
      "hint1": "Of the tribe of Manasseh son of Joseph.",
      "hint2": "God commanded Moses: \"Thou shalt surely give them a possession of an inheritance among their father’s brethren.\""
    }
  },
  {
    "id": "guess-the-emoji-l43-c2",
    "game_slug": "guess-the-emoji",
    "level": 43,
    "challenge_index": 2,
    "question_text": "🪨 🦅 7️⃣ 🌾 🌧️",
    "options": [
      "Rizpah daughter of Aiah vigil over seven sons' bodies from barley harvest till rain",
      "Ruth gathering barley sheaves in Boaz's field until end of wheat harvest",
      "Rahab sheltering the two spies under stalks of flax on the roof",
      "Tamar sitting in an open place on the way to Timnath"
    ],
    "correct_answer": "Rizpah daughter of Aiah vigil over seven sons' bodies from barley harvest till rain",
    "explanation": "2 Samuel 21:9–10 recounts Rizpah spreading sackcloth upon the rock from the beginning of barley harvest until water dropped upon them out of heaven, driving off birds by day and wild beasts by night.",
    "reference": "2 Samuel 21:9–10",
    "metadata": {
      "stage": 9,
      "stage_title": "Master Multi-Part Investigations",
      "level_title": "Obscure Women & Matriarchs",
      "puzzle_type": "no_obvious_clues",
      "emojis": "🪨 🦅 7️⃣ 🌾 🌧️",
      "prompt": "A mother’s six-month rocky vigil over seven hanging royal corpses against vultures and beasts.",
      "testament": "Old Testament",
      "difficulty": "Master",
      "timerSeconds": 150,
      "points": 250,
      "curated": true,
      "hint1": "Saul’s concubine whose two sons and five stepsons were executed by Gibeonites.",
      "hint2": "David was moved to gather their bones along with Saul and Jonathan for honorable burial."
    }
  },
  {
    "id": "guess-the-emoji-l43-c3",
    "game_slug": "guess-the-emoji",
    "level": 43,
    "challenge_index": 3,
    "question_text": "🎭 😭 💧 👑 🏹",
    "options": [
      "The wise woman of Tekoa posing as a mourning widow before David",
      "Abigail falling at David's feet with two hundred loaves",
      "Bathsheba petitioning David for Solomon's crown",
      "The Shunammite woman falling at Elisha's feet on Carmel"
    ],
    "correct_answer": "The wise woman of Tekoa posing as a mourning widow before David",
    "explanation": "2 Samuel 14:1–20 relates Joab sending for a wise woman of Tekoa to feign mourning and recite a parable of her two sons fighting to convince King David to recall banished Absalom.",
    "reference": "2 Samuel 14:1–20",
    "metadata": {
      "stage": 9,
      "stage_title": "Master Multi-Part Investigations",
      "level_title": "Obscure Women & Matriarchs",
      "puzzle_type": "no_obvious_clues",
      "emojis": "🎭 😭 💧 👑 🏹",
      "prompt": "An actress-advocate coached by Joab who used an allegorical family tragedy to reconcile a king.",
      "testament": "Old Testament",
      "difficulty": "Master",
      "timerSeconds": 150,
      "points": 250,
      "curated": true,
      "hint1": "David asked her: \"Is not the hand of Joab with thee in all this?\"",
      "hint2": "Famous quote: \"For we must needs die, and are as water spilt on the ground, which cannot be gathered up again.\""
    }
  },
  {
    "id": "guess-the-emoji-l43-c4",
    "game_slug": "guess-the-emoji",
    "level": 43,
    "challenge_index": 4,
    "question_text": "🏰 🪨 💥 👑 🗡️",
    "options": [
      "The woman of Thebez dropping a piece of a millstone on Abimelech's head",
      "Jael driving a tent peg into Sisera's temple",
      "Rahab lowering spies through the window on Jericho's wall",
      "The wise woman of Abel-beth-maachah tossing Sheba's head over the wall"
    ],
    "correct_answer": "The woman of Thebez dropping a piece of a millstone on Abimelech's head",
    "explanation": "Judges 9:53–54 relates: \"And a certain woman cast a piece of a millstone upon Abimelech’s head, and all to brake his skull,\" ending his tyrannical reign over Shechem.",
    "reference": "Judges 9:53–54",
    "metadata": {
      "stage": 9,
      "stage_title": "Master Multi-Part Investigations",
      "level_title": "Obscure Women & Matriarchs",
      "puzzle_type": "no_obvious_clues",
      "emojis": "🏰 🪨 💥 👑 🗡️",
      "prompt": "An unnamed female tower defender hurling a domestic grinder to crack a despot’s skull.",
      "testament": "Old Testament",
      "difficulty": "Master",
      "timerSeconds": 150,
      "points": 250,
      "curated": true,
      "hint1": "Abimelech begged his armor-bearer: \"Draw thy sword, and slay me, that men say not of me, A woman slew him.\"",
      "hint2": "Occurred at the fortress tower within Thebez."
    }
  },
  {
    "id": "guess-the-emoji-l43-c5",
    "game_slug": "guess-the-emoji",
    "level": 43,
    "challenge_index": 5,
    "question_text": "🔮 👻 👴 🧥 👑",
    "options": [
      "The medium (witch) of En-dor conjuring Samuel for terrified King Saul",
      "Huldah the prophetess consulting the Law scroll for King Josiah",
      "The slave girl possessed with a spirit of divination at Philippi",
      "Jezebel practicing sorceries and witchcrafts in Samaria"
    ],
    "correct_answer": "The medium (witch) of En-dor conjuring Samuel for terrified King Saul",
    "explanation": "1 Samuel 28:7–20 recounts King Saul disguising himself to visit a woman with a familiar spirit at En-dor; she brought up Samuel covered with a mantle, who foretold Saul’s death on Mount Gilboa.",
    "reference": "1 Samuel 28:7–20",
    "metadata": {
      "stage": 9,
      "stage_title": "Master Multi-Part Investigations",
      "level_title": "Obscure Women & Matriarchs",
      "puzzle_type": "no_obvious_clues",
      "emojis": "🔮 👻 👴 🧥 👑",
      "prompt": "A forbidden nocturnal necromancy consultation revealing tomorrow’s fatal battle on Gilboa.",
      "testament": "Old Testament",
      "difficulty": "Master",
      "timerSeconds": 150,
      "points": 250,
      "curated": true,
      "hint1": "The woman cried with a loud voice seeing \"gods ascending out of the earth.\"",
      "hint2": "Samuel said: \"To morrow shalt thou and thy sons be with me.\""
    }
  },
  {
    "id": "guess-the-emoji-l44-c1",
    "game_slug": "guess-the-emoji",
    "level": 44,
    "challenge_index": 1,
    "question_text": "👦 🏰 🗣️ 4️⃣7️⃣0️⃣ 🐴",
    "options": [
      "Paul's nephew foiling the 40 conspirators leading to 470-soldier Roman escort",
      "David's young men carrying greetings to Nabal in Carmel",
      "Jonathan's lad retrieving arrows at the stone Ezel",
      "The lad with five loaves and two fishes in Galilee"
    ],
    "correct_answer": "Paul's nephew foiling the 40 conspirators leading to 470-soldier Roman escort",
    "explanation": "Acts 23:16–24 describes Paul’s sister’s son alerting tribune Claudius Lysias of the ambush oath, who immediately ordered 200 soldiers, 70 horsemen, and 200 spearmen (470 total) to escort Paul to Caesarea.",
    "reference": "Acts 23:16–24",
    "metadata": {
      "stage": 9,
      "stage_title": "Master Multi-Part Investigations",
      "level_title": "Apostolic Enigmas & Deep Canonical Mysteries",
      "puzzle_type": "scripture_detective",
      "emojis": "👦 🏰 🗣️ 4️⃣7️⃣0️⃣ 🐴",
      "prompt": "A boy’s intelligence report triggering a massive 470-man midnight Roman military transfer.",
      "testament": "New Testament",
      "difficulty": "Master",
      "timerSeconds": 150,
      "points": 250,
      "curated": true,
      "dossier": "Military Escort Manifest: 200 infantry legates, 70 cavalry troopers, 200 auxiliary spearmen; dispatched at the third hour of the night (9:00 PM) to Governor Felix in Caesarea.",
      "hint1": "Overcame the conspiracy of forty men bound under a curse.",
      "hint2": "The Roman commander was Claudius Lysias."
    }
  },
  {
    "id": "guess-the-emoji-l44-c2",
    "game_slug": "guess-the-emoji",
    "level": 44,
    "challenge_index": 2,
    "question_text": "🌿 🏃‍♂️ 🪢 👕 🌑",
    "options": [
      "The young man in Gethsemane fleeing naked leaving his linen cloth in captors' hands",
      "Joseph fleeing from Potiphar's wife leaving his coat behind",
      "Peter taking off his fisher's coat and plunging into Galilee",
      "Lazarus coming out of the tomb wrapped in graveclothes"
    ],
    "correct_answer": "The young man in Gethsemane fleeing naked leaving his linen cloth in captors' hands",
    "explanation": "Mark 14:51–52 mentions: \"And there followed him a certain young man, having a linen cloth cast about his naked body; and the young men laid hold on him: And he left the linen cloth, and fled from them naked.\"",
    "reference": "Mark 14:51–52",
    "metadata": {
      "stage": 9,
      "stage_title": "Master Multi-Part Investigations",
      "level_title": "Apostolic Enigmas & Deep Canonical Mysteries",
      "puzzle_type": "no_obvious_clues",
      "emojis": "🌿 🏃‍♂️ 🪢 👕 🌑",
      "prompt": "A solitary nocturnal disciple slipping free from arresting temple guards minus his garment.",
      "testament": "New Testament",
      "difficulty": "Master",
      "timerSeconds": 150,
      "points": 250,
      "curated": true,
      "hint1": "Unique episode found exclusively in Mark’s Gospel.",
      "hint2": "Widely believed by scholars to be Mark’s modest signature."
    }
  },
  {
    "id": "guess-the-emoji-l44-c3",
    "game_slug": "guess-the-emoji",
    "level": 44,
    "challenge_index": 3,
    "question_text": "🪟 😴 3️⃣ 💀 🫂",
    "options": [
      "Eutychus falling from the third-story window during Paul's marathon sermon and revived",
      "Ahaziah falling through the lattice in his upper chamber",
      "Jezebel thrown down from the palace window in Jezreel",
      "Peter sleeping on the housetop in Joppa having a vision"
    ],
    "correct_answer": "Eutychus falling from the third-story window during Paul's marathon sermon and revived",
    "explanation": "Acts 20:9–10 recounts Eutychus sinking down with sleep as Paul was long preaching; he fell down from the third loft, and was taken up dead; Paul embraced him, saying: \"Trouble not yourselves; for his life is in him.\"",
    "reference": "Acts 20:9–10",
    "metadata": {
      "stage": 9,
      "stage_title": "Master Multi-Part Investigations",
      "level_title": "Apostolic Enigmas & Deep Canonical Mysteries",
      "puzzle_type": "no_obvious_clues",
      "emojis": "🪟 😴 3️⃣ 💀 🫂",
      "prompt": "A fatal midnight plunge from an upper sill restored by apostolic resuscitation.",
      "testament": "New Testament",
      "difficulty": "Master",
      "timerSeconds": 150,
      "points": 250,
      "curated": true,
      "hint1": "Took place on the first day of the week in Troas.",
      "hint2": "Paul preached until break of day after reviving the youth."
    }
  },
  {
    "id": "guess-the-emoji-l44-c4",
    "game_slug": "guess-the-emoji",
    "level": 44,
    "challenge_index": 4,
    "question_text": "👹 7️⃣ 🩸 👕 🏃‍♂️",
    "options": [
      "Seven sons of Sceva stripped, wounded, and chased out by an evil spirit",
      "Seven sons of Jesse rejected before David was anointed",
      "Seven sons of Saul hanged before the Lord at Gibeah",
      "Seven sons of Job struck by great wind from the wilderness"
    ],
    "correct_answer": "Seven sons of Sceva stripped, wounded, and chased out by an evil spirit",
    "explanation": "Acts 19:14–16 details the seven sons of Jewish priest Sceva invoking the name of Jesus; the evil spirit answered \"Jesus I know, and Paul I know; but who are ye?\" leaped on them, overcame them, and they fled naked and wounded.",
    "reference": "Acts 19:14–16",
    "metadata": {
      "stage": 9,
      "stage_title": "Master Multi-Part Investigations",
      "level_title": "Apostolic Enigmas & Deep Canonical Mysteries",
      "puzzle_type": "no_obvious_clues",
      "emojis": "👹 7️⃣ 🩸 👕 🏃‍♂️",
      "prompt": "Seven unauthorized exorcists beaten, disrobed, and routed from an Ephesian residence.",
      "testament": "New Testament",
      "difficulty": "Master",
      "timerSeconds": 150,
      "points": 250,
      "curated": true,
      "hint1": "Led to many in Ephesus burning their books of magical arts valued at 50,000 pieces of silver.",
      "hint2": "The name of the Lord Jesus was magnified."
    }
  },
  {
    "id": "guess-the-emoji-l44-c5",
    "game_slug": "guess-the-emoji",
    "level": 44,
    "challenge_index": 5,
    "question_text": "🙏 ⛓️ 🏛️ 💌 👤",
    "options": [],
    "correct_answer": "Epaphras",
    "explanation": "Colossians 4:12 commends Epaphras: \"who is one of you, a servant of Christ, saluteth you, always labouring fervently for you in prayers, that ye may stand perfect and complete in all the will of God.\"",
    "reference": "Colossians 4:12",
    "metadata": {
      "stage": 9,
      "stage_title": "Master Multi-Part Investigations",
      "level_title": "Apostolic Enigmas & Deep Canonical Mysteries",
      "puzzle_type": "exact_person",
      "emojis": "🙏 ⛓️ 🏛️ 💌 👤",
      "prompt": "Type the exact name of the faithful Colossian minister who wrestled continually in intercession for his flock.",
      "testament": "New Testament",
      "difficulty": "Master",
      "timerSeconds": 150,
      "points": 250,
      "is_typed": true,
      "acceptedAlternatives": [
        "epaphras"
      ],
      "curated": true,
      "hint1": "Called \"our dear fellowservant\" in Colossians 1:7.",
      "hint2": "Paul’s fellow-prisoner in Rome (Philemon 1:23)."
    }
  },
  {
    "id": "guess-the-emoji-l45-c1",
    "game_slug": "guess-the-emoji",
    "level": 45,
    "challenge_index": 1,
    "question_text": "🏺 👴 🏞️ 💥 🧱",
    "options": [
      "Jeremiah breaking potter's bottle in the Valley of Hinnom before elders",
      "Gideon breaking clay pitchers containing torches at Midian",
      "Zechariah taking the two staves Beauty and Bands",
      "Ezekiel taking a tile and portraying upon it the city of Jerusalem"
    ],
    "correct_answer": "Jeremiah breaking potter's bottle in the Valley of Hinnom before elders",
    "explanation": "Jeremiah 19:1–11 depicts Jeremiah taking ancients of people and priests to Tophet, preaching judgment against child sacrifice to Molech, and breaking the earthen flask so it could not be healed again.",
    "reference": "Jeremiah 19:1–11",
    "metadata": {
      "stage": 9,
      "stage_title": "Master Multi-Part Investigations",
      "level_title": "Prophetic Riddles & Forensic Signs",
      "puzzle_type": "no_obvious_clues",
      "emojis": "🏺 👴 🏞️ 💥 🧱",
      "prompt": "A ceramic vessel smashed in the incinerator ravine of Tophet as an irreversible omen.",
      "testament": "Old Testament",
      "difficulty": "Master",
      "timerSeconds": 150,
      "points": 250,
      "curated": true,
      "hint1": "Carried through the Potsherd Gate (East Gate).",
      "hint2": "\"Even so will I break this people and this city, as one breaketh a potter’s vessel, that cannot be made whole again.\""
    }
  },
  {
    "id": "guess-the-emoji-l45-c2",
    "game_slug": "guess-the-emoji",
    "level": 45,
    "challenge_index": 2,
    "question_text": "🛏️ 3️⃣9️⃣0️⃣ 💩 🥖 🧱",
    "options": [
      "Ezekiel lying 390 days on left side baking defiled bread over dung",
      "Jeremiah wearing wooden yoke bars in the temple court",
      "Hosea taking a wife of whoredoms as a living sign",
      "Isaiah walking barefoot and stripped for three years"
    ],
    "correct_answer": "Ezekiel lying 390 days on left side baking defiled bread over dung",
    "explanation": "Ezekiel 4:4–13 records Ezekiel instructed to lie 390 days on his left side to bear the iniquity of Israel, eating weighed multi-grain rations baked over cow’s dung as a sign of famine.",
    "reference": "Ezekiel 4:4–13",
    "metadata": {
      "stage": 9,
      "stage_title": "Master Multi-Part Investigations",
      "level_title": "Prophetic Riddles & Forensic Signs",
      "puzzle_type": "no_obvious_clues",
      "emojis": "🛏️ 3️⃣9️⃣0️⃣ 💩 🥖 🧱",
      "prompt": "A protracted bedridden symbolic siege enactment featuring coarse rationing and manure fuel.",
      "testament": "Old Testament",
      "difficulty": "Master",
      "timerSeconds": 150,
      "points": 250,
      "curated": true,
      "hint1": "Followed by lying 40 days on his right side for Judah’s iniquity.",
      "hint2": "A day appointed for each year of rebellion."
    }
  },
  {
    "id": "guess-the-emoji-l45-c3",
    "game_slug": "guess-the-emoji",
    "level": 45,
    "challenge_index": 3,
    "question_text": "📯 🦏 4️⃣ 🔨 4️⃣",
    "options": [
      "Zechariah's vision of four horns scattering Judah and four carpenters casting them down",
      "Daniel's vision of four beasts rising out of the Mediterranean Sea",
      "Ezekiel's vision of four living creatures with wheels within wheels",
      "Revelation's vision of four horsemen riding out from four seals"
    ],
    "correct_answer": "Zechariah's vision of four horns scattering Judah and four carpenters casting them down",
    "explanation": "Zechariah 1:18–21 describes the prophet seeing four horns that scattered Judah, Israel, and Jerusalem; the Lord then showed him four carpenters sent to fray and cast out the horns of the Gentiles.",
    "reference": "Zechariah 1:18–21",
    "metadata": {
      "stage": 9,
      "stage_title": "Master Multi-Part Investigations",
      "level_title": "Prophetic Riddles & Forensic Signs",
      "puzzle_type": "no_obvious_clues",
      "emojis": "📯 🦏 4️⃣ 🔨 4️⃣",
      "prompt": "Four oppressive horns that dispersed the covenant people confronted by four divine craftsmen.",
      "testament": "Old Testament",
      "difficulty": "Master",
      "timerSeconds": 150,
      "points": 250,
      "curated": true,
      "hint1": "The angel identified the horns as world empires that scattered Judah.",
      "hint2": "The carpenters represent divine agents raised up to dismantle their power."
    }
  },
  {
    "id": "guess-the-emoji-l45-c4",
    "game_slug": "guess-the-emoji",
    "level": 45,
    "challenge_index": 4,
    "question_text": "👰 💰 1️⃣5️⃣ 🌾 🐴",
    "options": [
      "Hosea purchasing back unfaithful Gomer for 15 silver pieces and barley",
      "Boaz acquiring the parcel of land and Ruth the Moabitess",
      "Jacob working additional seven years for Rachel",
      "Abraham weighing 400 silver shekels for Machpelah cave"
    ],
    "correct_answer": "Hosea purchasing back unfaithful Gomer for 15 silver pieces and barley",
    "explanation": "Hosea 3:1–2 records: \"So I bought her to me for fifteen pieces of silver, and for an homer of barley, and an half homer of barley,\" depicting God’s relentless redeeming love for wayward Israel.",
    "reference": "Hosea 3:1–2",
    "metadata": {
      "stage": 9,
      "stage_title": "Master Multi-Part Investigations",
      "level_title": "Prophetic Riddles & Forensic Signs",
      "puzzle_type": "no_obvious_clues",
      "emojis": "👰 💰 1️⃣5️⃣ 🌾 🐴",
      "prompt": "A prophetic repurchase of an unfaithful spouse: 15 silver coins plus 1.5 barley homers.",
      "testament": "Old Testament",
      "difficulty": "Master",
      "timerSeconds": 150,
      "points": 250,
      "curated": true,
      "hint1": "God said: \"Go yet, love a woman beloved of her friend, yet an adulteress.\"",
      "hint2": "A price equivalent to thirty shekels (the redemption price of a servant)."
    }
  },
  {
    "id": "guess-the-emoji-l45-c5",
    "game_slug": "guess-the-emoji",
    "level": 45,
    "challenge_index": 5,
    "question_text": "🥩 👗 🚫 💀 🌾",
    "options": [
      "Haggai interrogating the priests on ritual holiness transmission versus defilement",
      "Malachi denouncing blemish animal offerings on the temple altar",
      "Levitical priests inspecting clothing for greenish leprous plague",
      "Ezekiel commanded to shave head and beard with barber's razor"
    ],
    "correct_answer": "Haggai interrogating the priests on ritual holiness transmission versus defilement",
    "explanation": "Haggai 2:11–14 presents Haggai asking the priests: Does holy meat in a skirt make bread or oil holy? (No). Does touching a dead body make things unclean? (Yes). So is this people and their work defiled.",
    "reference": "Haggai 2:11–14",
    "metadata": {
      "stage": 9,
      "stage_title": "Master Multi-Part Investigations",
      "level_title": "Prophetic Riddles & Forensic Signs",
      "puzzle_type": "no_obvious_clues",
      "emojis": "🥩 👗 🚫 💀 🌾",
      "prompt": "A theological legal exam: holiness is not contagious by touch, but defilement spreads instantly.",
      "testament": "Old Testament",
      "difficulty": "Master",
      "timerSeconds": 150,
      "points": 250,
      "curated": true,
      "hint1": "Delivered on the four and twentieth day of the ninth month.",
      "hint2": "Demonstrated that working on the temple while spiritually unclean contaminated the offering."
    }
  },
    {
    "id": "guess-the-emoji-l46-c1",
    "game_slug": "guess-the-emoji",
    "level": 46,
    "challenge_index": 1,
    "question_text": "🛡️ ⚔️ 🩸 👑 🏃‍♂️",
    "options": [],
    "correct_answer": "Amasa",
    "explanation": "David appointed Amasa over the army. At the great stone in Gibeon, Joab approached him and killed him with his sword while pretending to greet him.",
    "reference": "2 Samuel 20:4–13",
    "metadata": {
      "stage": 10,
      "stage_title": "Extreme Master Canonical Challenge",
      "level_title": "Obscure Old Testament Figures",
      "puzzle_type": "exact_person",
      "emojis": "🛡️ ⚔️ 🩸 👑 🏃‍♂️",
      "prompt": "Type the exact name of David's nephew and army commander whom Joab killed during the pursuit of Sheba.",
      "testament": "Old Testament",
      "difficulty": "Extreme Master",
      "timerSeconds": 180,
      "points": 300,
      "is_typed": true,
      "acceptedAlternatives": [
        "amasa"
      ],
      "curated": true,
      "hint1": "He replaced Joab as commander of David's army.",
      "hint2": "Joab killed him at the great stone in Gibeon."
    }
  },
  {
    "id": "guess-the-emoji-l46-c2",
    "game_slug": "guess-the-emoji",
    "level": 46,
    "challenge_index": 2,
    "question_text": "🏕️ 🪙 🔨 🧵 🕊️",
    "options": [],
    "correct_answer": "Bezalel",
    "explanation": "Exodus 31:1–5 tells of Bezalel son of Uri, filled with the Spirit of God to devise cunning works in gold, silver, brass, cutting stones, and carving timber for the Tabernacle.",
    "reference": "Exodus 31:1–5",
    "metadata": {
      "stage": 10,
      "stage_title": "Extreme Master Canonical Challenge",
      "level_title": "Obscure Old Testament Figures",
      "puzzle_type": "exact_person",
      "emojis": "🏕️ 🪙 🔨 🧵 🕊️",
      "prompt": "Type the exact name of the Spirit-filled chief craftsman of Judah appointed to build the Tabernacle.",
      "testament": "Old Testament",
      "difficulty": "Extreme Master",
      "timerSeconds": 180,
      "points": 300,
      "is_typed": true,
      "acceptedAlternatives": [
        "bezaleel",
        "bezalel"
      ],
      "curated": true,
      "hint1": "Son of Uri, son of Hur, of the tribe of Judah.",
      "hint2": "Paired with Oholiab of the tribe of Dan."
    }
  },
  {
    "id": "guess-the-emoji-l46-c3",
    "game_slug": "guess-the-emoji",
    "level": 46,
    "challenge_index": 3,
    "question_text": "📜 🏛️ 👵 👑 🔮",
    "options": [],
    "correct_answer": "Huldah",
    "explanation": "2 Kings 22:14 states that Hilkiah the priest and royal scribes went unto Huldah the prophetess, wife of Shallum keeper of the wardrobe, who dwelt in Jerusalem in the college, to inquire of the Lord.",
    "reference": "2 Kings 22:14",
    "metadata": {
      "stage": 10,
      "stage_title": "Extreme Master Canonical Challenge",
      "level_title": "Obscure Old Testament Figures",
      "puzzle_type": "exact_person",
      "emojis": "📜 🏛️ 👵 👑 🔮",
      "prompt": "Type the exact name of the prophetess consulted by King Josiah’s officials regarding the Temple Law scroll.",
      "testament": "Old Testament",
      "difficulty": "Extreme Master",
      "timerSeconds": 180,
      "points": 300,
      "is_typed": true,
      "acceptedAlternatives": [
        "huldah",
        "hulda"
      ],
      "curated": true,
      "hint1": "Wife of Shallum, keeper of the royal wardrobe.",
      "hint2": "Prophesied judgment for Judah and peaceful burial for reformist King Josiah."
    }
  },
    {
    "id": "guess-the-emoji-l46-c4",
    "game_slug": "guess-the-emoji",
    "level": 46,
    "challenge_index": 4,
    "question_text": "3️⃣0️⃣ 👨 🫏 🏘️ 2️⃣2️⃣",
    "options": [],
    "correct_answer": "Jair",
    "explanation": "Jair the Gileadite judged Israel for twenty-two years. He had thirty sons who rode thirty donkeys and possessed thirty towns in Gilead.",
    "reference": "Judges 10:3–5",
    "metadata": {
      "stage": 10,
      "stage_title": "Extreme Master Canonical Challenge",
      "level_title": "Obscure Old Testament Figures",
      "puzzle_type": "exact_person",
      "emojis": "3️⃣0️⃣ 👨 🫏 🏘️ 2️⃣2️⃣",
      "prompt": "Type the name of the judge whose thirty sons rode thirty donkeys and controlled thirty towns in Gilead.",
      "testament": "Old Testament",
      "difficulty": "Extreme Master",
      "timerSeconds": 180,
      "points": 300,
      "is_typed": true,
      "acceptedAlternatives": [
        "jair"
      ],
      "curated": true,
      "hint1": "He was a judge from Gilead.",
      "hint2": "His thirty sons rode thirty donkeys and held thirty towns."
    }
  },
  {
    "id": "guess-the-emoji-l46-c5",
    "game_slug": "guess-the-emoji",
    "level": 46,
    "challenge_index": 5,
    "question_text": "🐂 🦯 ⚔️ 6️⃣0️⃣0️⃣ 🛡️",
    "options": [],
    "correct_answer": "Shamgar",
    "explanation": "Judges 3:31 records: \"And after him was Shamgar the son of Anath, which slew of the Philistines six hundred men with an ox goad: and he also delivered Israel.\"",
    "reference": "Judges 3:31",
    "metadata": {
      "stage": 10,
      "stage_title": "Extreme Master Canonical Challenge",
      "level_title": "Obscure Old Testament Figures",
      "puzzle_type": "exact_person",
      "emojis": "🐂 🦯 ⚔️ 6️⃣0️⃣0️⃣ 🛡️",
      "prompt": "Type the exact name of the deliverer who killed 600 Philistines with an ox goad.",
      "testament": "Old Testament",
      "difficulty": "Extreme Master",
      "timerSeconds": 180,
      "points": 300,
      "is_typed": true,
      "acceptedAlternatives": [
        "shamgar"
      ],
      "curated": true,
      "hint1": "Son of Anath.",
      "hint2": "Mentioned in the opening stanza of Deborah’s victory song."
    }
  },
  {
    "id": "guess-the-emoji-l47-c1",
    "game_slug": "guess-the-emoji",
    "level": 47,
    "challenge_index": 1,
    "question_text": "⛓️ 🏛️ 🔍 💧 👤",
    "options": [],
    "correct_answer": "Onesiphorus",
    "explanation": "2 Timothy 1:16–17 states: \"The Lord give mercy unto the house of Onesiphorus; for he oft refreshed me, and was not ashamed of my chain: But, when he was in Rome, he sought me out very diligently, and found me.\"",
    "reference": "2 Timothy 1:16–17",
    "metadata": {
      "stage": 10,
      "stage_title": "Extreme Master Canonical Challenge",
      "level_title": "Obscure New Testament Figures",
      "puzzle_type": "exact_person",
      "emojis": "⛓️ 🏛️ 🔍 💧 👤",
      "prompt": "Type the exact name of the brother who searched Rome diligently to find and refresh Paul in prison.",
      "testament": "New Testament",
      "difficulty": "Extreme Master",
      "timerSeconds": 180,
      "points": 300,
      "is_typed": true,
      "acceptedAlternatives": [
        "onesiphorus"
      ],
      "curated": true,
      "hint1": "His household in Ephesus was greeted in 2 Timothy 4:19.",
      "hint2": "His name means \"bringing profit\" or \"help-bringer\"."
    }
  },
    {
    "id": "guess-the-emoji-l47-c2",
    "game_slug": "guess-the-emoji",
    "level": 47,
    "challenge_index": 2,
    "question_text": "3️⃣0️⃣ 👦 3️⃣0️⃣ 👧 💍 🏙️",
    "options": [],
    "correct_answer": "Ibzan",
    "explanation": "Ibzan of Bethlehem judged Israel for seven years. He had thirty sons and thirty daughters, and he arranged marriages for his daughters outside his clan and brought in thirty women for his sons.",
    "reference": "Judges 12:8–10",
    "metadata": {
      "stage": 10,
      "stage_title": "Extreme Master Canonical Challenge",
      "level_title": "Obscure New Testament Figures",
      "puzzle_type": "exact_person",
      "emojis": "3️⃣0️⃣ 👦 3️⃣0️⃣ 👧 💍 🏙️",
      "prompt": "Type the name of the judge from Bethlehem who had thirty sons and thirty daughters.",
      "testament": "Old Testament",
      "difficulty": "Extreme Master",
      "timerSeconds": 180,
      "points": 300,
      "is_typed": true,
      "acceptedAlternatives": [
        "ibzan"
      ],
      "curated": true,
      "hint1": "He judged Israel after Jephthah.",
      "hint2": "He had thirty sons and thirty daughters."
    }
  },
    {
    "id": "guess-the-emoji-l47-c3",
    "game_slug": "guess-the-emoji",
    "level": 47,
    "challenge_index": 3,
    "question_text": "🍇 🏙️ 🗣️ ⚔️ 👑",
    "options": [],
    "correct_answer": "Gaal son of Ebed",
    "explanation": "Gaal son of Ebed came with his relatives to Shechem, gained the confidence of its leaders, and challenged Abimelech. Zebul informed Abimelech, who defeated Gaal's forces.",
    "reference": "Judges 9:26–41",
    "metadata": {
      "stage": 10,
      "stage_title": "Extreme Master Canonical Challenge",
      "level_title": "Obscure New Testament Figures",
      "puzzle_type": "exact_person",
      "emojis": "🍇 🏙️ 🗣️ ⚔️ 👑",
      "prompt": "Type the name of the man who led a revolt in Shechem against Abimelech and boasted of his strength.",
      "testament": "Old Testament",
      "difficulty": "Extreme Master",
      "timerSeconds": 180,
      "points": 300,
      "is_typed": true,
      "acceptedAlternatives": [
        "gaal son of ebed"
      ],
      "curated": true,
      "hint1": "He spoke boldly against Abimelech in Shechem.",
      "hint2": "Zebul reported his challenge, and Abimelech defeated his forces."
    }
  },
  {
    "id": "guess-the-emoji-l47-c4",
    "game_slug": "guess-the-emoji",
    "level": 47,
    "challenge_index": 4,
    "question_text": "👴 🏝️ 🏠 🚶‍♂️ 🏛️",
    "options": [],
    "correct_answer": "Mnason",
    "explanation": "Acts 21:16 records: \"There went with us also certain of the disciples of Caesarea, and brought with them one Mnason of Cyprus, an old disciple, with whom we should lodge.\"",
    "reference": "Acts 21:16",
    "metadata": {
      "stage": 10,
      "stage_title": "Extreme Master Canonical Challenge",
      "level_title": "Obscure New Testament Figures",
      "puzzle_type": "exact_person",
      "emojis": "👴 🏝️ 🏠 🚶‍♂️ 🏛️",
      "prompt": "Type the exact name of the elderly Cypriot disciple who provided lodging for Paul’s missionary team in Jerusalem.",
      "testament": "New Testament",
      "difficulty": "Extreme Master",
      "timerSeconds": 180,
      "points": 300,
      "is_typed": true,
      "acceptedAlternatives": [
        "mnason"
      ],
      "curated": true,
      "hint1": "Native of the island of Cyprus.",
      "hint2": "Explicitly characterized in Greek as an \"ancient / early disciple\"."
    }
  },
    {
    "id": "guess-the-emoji-l47-c5",
    "game_slug": "guess-the-emoji",
    "level": 47,
    "challenge_index": 5,
    "question_text": "📜 🏛️ 👑 📖 ✍️",
    "options": [],
    "correct_answer": "Shaphan",
    "explanation": "Shaphan was the scribe sent by Josiah to the high priest. He reported the temple funds and read the Book of the Law that Hilkiah had found.",
    "reference": "2 Kings 22:3–14; 2 Chronicles 34:8–20",
    "metadata": {
      "stage": 10,
      "stage_title": "Extreme Master Canonical Challenge",
      "level_title": "Obscure New Testament Figures",
      "puzzle_type": "exact_person",
      "emojis": "📜 🏛️ 👑 📖 ✍️",
      "prompt": "Type the name of King Josiah's royal scribe who reported the temple repairs and read the discovered Book of the Law to the king.",
      "testament": "Old Testament",
      "difficulty": "Extreme Master",
      "timerSeconds": 180,
      "points": 300,
      "is_typed": true,
      "acceptedAlternatives": [
        "shaphan"
      ],
      "curated": true,
      "hint1": "He served as a royal scribe under Josiah.",
      "hint2": "He read the discovered Book of the Law to the king."
    }
  },
    {
    "id": "guess-the-emoji-l48-c1",
    "game_slug": "guess-the-emoji",
    "level": 48,
    "challenge_index": 1,
    "question_text": "✅ ✝️ 👤 📜 🏛️",
    "options": [],
    "correct_answer": "Apelles",
    "explanation": "Paul sends greetings to Apelles, whom he calls approved in Christ, in his closing greetings to the believers in Rome.",
    "reference": "Romans 16:10",
    "metadata": {
      "stage": 10,
      "stage_title": "Extreme Master Canonical Challenge",
      "level_title": "The Valiant & Feats of War",
      "puzzle_type": "exact_person",
      "emojis": "✅ ✝️ 👤 📜 🏛️",
      "prompt": "Type the name of the believer whom Paul describes as approved in Christ.",
      "testament": "New Testament",
      "difficulty": "Extreme Master",
      "timerSeconds": 180,
      "points": 300,
      "is_typed": true,
      "acceptedAlternatives": [
        "apelles"
      ],
      "curated": true,
      "hint1": "His name appears in Paul's greetings in Romans 16.",
      "hint2": "Paul describes him as approved in Christ."
    }
  },
  {
    "id": "guess-the-emoji-l48-c2",
    "game_slug": "guess-the-emoji",
    "level": 48,
    "challenge_index": 2,
    "question_text": "🦁 ❄️ 🕳️ 🦯 🗡️",
    "options": [],
    "correct_answer": "Benaiah",
    "explanation": "2 Samuel 23:20 describes Benaiah son of Jehoiada: \"he went down also and slew a lion in the midst of a pit in time of snow,\" as well as two lionlike men of Moab and an Egyptian giant.",
    "reference": "2 Samuel 23:20–21",
    "metadata": {
      "stage": 10,
      "stage_title": "Extreme Master Canonical Challenge",
      "level_title": "The Valiant & Feats of War",
      "puzzle_type": "exact_person",
      "emojis": "🦁 ❄️ 🕳️ 🦯 🗡️",
      "prompt": "Type the exact name of the captain of the royal guard who slew a lion in a snowy pit.",
      "testament": "Old Testament",
      "difficulty": "Extreme Master",
      "timerSeconds": 180,
      "points": 300,
      "is_typed": true,
      "acceptedAlternatives": [
        "benaiah",
        "benaiah son of jehoiada"
      ],
      "curated": true,
      "hint1": "Son of Jehoiada of Kabzeel.",
      "hint2": "Commanded the Cherethites and Pelethites."
    }
  },
  {
    "id": "guess-the-emoji-l48-c3",
    "game_slug": "guess-the-emoji",
    "level": 48,
    "challenge_index": 3,
    "question_text": "🌱 🍲 🛡️ ⚔️ 🏃‍♂️",
    "options": [],
    "correct_answer": "Shammah",
    "explanation": "2 Samuel 23:11–12 relates Shammah son of Agee the Hararite standing in the midst of a piece of ground full of lentils, defending it single-handedly when all the people fled.",
    "reference": "2 Samuel 23:11–12",
    "metadata": {
      "stage": 10,
      "stage_title": "Extreme Master Canonical Challenge",
      "level_title": "The Valiant & Feats of War",
      "puzzle_type": "exact_person",
      "emojis": "🌱 🍲 🛡️ ⚔️ 🏃‍♂️",
      "prompt": "Type the exact name of the mighty man who defended the plot of lentils against a Philistine troop.",
      "testament": "Old Testament",
      "difficulty": "Extreme Master",
      "timerSeconds": 180,
      "points": 300,
      "is_typed": true,
      "acceptedAlternatives": [
        "shammah",
        "shammah son of agee"
      ],
      "curated": true,
      "hint1": "Son of Agee the Hararite.",
      "hint2": "The Lord wrought a great victory that day."
    }
  },
    {
    "id": "guess-the-emoji-l48-c4",
    "game_slug": "guess-the-emoji",
    "level": 48,
    "challenge_index": 4,
    "question_text": "🌱 🌏 ✝️ 🏠 👤",
    "options": [],
    "correct_answer": "Epaenetus",
    "explanation": "Paul greets Epaenetus, whom he describes as the firstfruits of Asia unto Christ, in his closing greetings to the Roman believers.",
    "reference": "Romans 16:5",
    "metadata": {
      "stage": 10,
      "stage_title": "Extreme Master Canonical Challenge",
      "level_title": "The Valiant & Feats of War",
      "puzzle_type": "exact_person",
      "emojis": "🌱 🌏 ✝️ 🏠 👤",
      "prompt": "Type the name of the person Paul calls the firstfruits of Asia unto Christ.",
      "testament": "New Testament",
      "difficulty": "Extreme Master",
      "timerSeconds": 180,
      "points": 300,
      "is_typed": true,
      "acceptedAlternatives": [
        "epaenetus"
      ],
      "curated": true,
      "hint1": "He is named in Romans 16:5.",
      "hint2": "Paul calls him the firstfruits of Asia unto Christ."
    }
  },
  {
    "id": "guess-the-emoji-l48-c5",
    "game_slug": "guess-the-emoji",
    "level": 48,
    "challenge_index": 5,
    "question_text": "👴 8️⃣0️⃣ 🍞 🐑 👑",
    "options": [],
    "correct_answer": "Barzillai",
    "explanation": "2 Samuel 17:27–29; 19:31–39 recounts Barzillai the Gileadite of Rogelim, an aged man of eighty years, who sustained David and his troops with beds, basins, wheat, honey, and sheep at Mahanaim.",
    "reference": "2 Samuel 19:31–39",
    "metadata": {
      "stage": 10,
      "stage_title": "Extreme Master Canonical Challenge",
      "level_title": "The Valiant & Feats of War",
      "puzzle_type": "exact_person",
      "emojis": "👴 8️⃣0️⃣ 🍞 🐑 👑",
      "prompt": "Type the exact name of the 80-year-old Gileadite noble who lavishly sustained David during Absalom’s rebellion.",
      "testament": "Old Testament",
      "difficulty": "Extreme Master",
      "timerSeconds": 180,
      "points": 300,
      "is_typed": true,
      "acceptedAlternatives": [
        "barzillai",
        "barzillai the gileadite"
      ],
      "curated": true,
      "hint1": "Declined David’s invitation to live in the palace at Jerusalem because of his advanced age.",
      "hint2": "Sent his son Chimham across the Jordan in his place."
    }
  },
  {
    "id": "guess-the-emoji-l49-c1",
    "game_slug": "guess-the-emoji",
    "level": 49,
    "challenge_index": 1,
    "question_text": "🐍 🪵 🔨 💥 🏷️",
    "options": [],
    "correct_answer": "Nehushtan",
    "explanation": "2 Kings 18:4 states that King Hezekiah broke in pieces the brazen serpent that Moses made, because Israel burned incense to it, \"and he called it Nehushtan\" (meaning a piece of brass).",
    "reference": "2 Kings 18:4",
    "metadata": {
      "stage": 10,
      "stage_title": "Extreme Master Canonical Challenge",
      "level_title": "Miraculous Relics & Canonical Terms",
      "puzzle_type": "exact_person",
      "emojis": "🐍 🪵 🔨 💥 🏷️",
      "prompt": "Type the exact derogatory Hebrew name given by King Hezekiah to the pulverized bronze serpent.",
      "testament": "Old Testament",
      "difficulty": "Extreme Master",
      "timerSeconds": 180,
      "points": 300,
      "is_typed": true,
      "acceptedAlternatives": [
        "nehushtan"
      ],
      "curated": true,
      "hint1": "Translates literally to \"a thing of brass\" or \"a copper trifle\".",
      "hint2": "Destroyed during Hezekiah’s iconoclastic religious reforms."
    }
  },
  {
    "id": "guess-the-emoji-l49-c2",
    "game_slug": "guess-the-emoji",
    "level": 49,
    "challenge_index": 2,
    "question_text": "🌊 🗣️ 🌾 👂 🗡️",
    "options": [],
    "correct_answer": "Shibboleth",
    "explanation": "Judges 12:6 records the Gileadite checkpoint password: \"Then said they unto him, Say now Shibboleth: and he said Sibboleth: for he could not frame to pronounce it right. Then they took him, and slew him.\"",
    "reference": "Judges 12:6",
    "metadata": {
      "stage": 10,
      "stage_title": "Extreme Master Canonical Challenge",
      "level_title": "Miraculous Relics & Canonical Terms",
      "puzzle_type": "exact_person",
      "emojis": "🌊 🗣️ 🌾 👂 🗡️",
      "prompt": "Type the exact biblical password at the Jordan river passages that Ephraimites mispronounced as \"Sibboleth\".",
      "testament": "Old Testament",
      "difficulty": "Extreme Master",
      "timerSeconds": 180,
      "points": 300,
      "is_typed": true,
      "acceptedAlternatives": [
        "shibboleth"
      ],
      "curated": true,
      "hint1": "Means \"an ear of corn\" or \"a rushing stream\".",
      "hint2": "Forty-two thousand Ephraimites perished for failing to pronounce the \"sh\" sound."
    }
  },
  {
    "id": "guess-the-emoji-l49-c3",
    "game_slug": "guess-the-emoji",
    "level": 49,
    "challenge_index": 3,
    "question_text": "💎 💡 📦 ⚖️ 🎽",
    "options": [],
    "correct_answer": "Urim",
    "explanation": "Exodus 28:30 commands to place the Urim and Thummim (Lights and Perfections) inside the breastplate of judgment over Aaron’s heart when he entered before the Lord.",
    "reference": "Exodus 28:30; Leviticus 8:8",
    "metadata": {
      "stage": 10,
      "stage_title": "Extreme Master Canonical Challenge",
      "level_title": "Miraculous Relics & Canonical Terms",
      "puzzle_type": "exact_person",
      "emojis": "💎 💡 📦 ⚖️ 🎽",
      "prompt": "Type the first word of the sacred high priestly oracular pair (___ and Thummim) signifying \"Lights\".",
      "testament": "Old Testament",
      "difficulty": "Extreme Master",
      "timerSeconds": 180,
      "points": 300,
      "is_typed": true,
      "acceptedAlternatives": [
        "urim",
        "the urim"
      ],
      "curated": true,
      "hint1": "Starts with the letter U.",
      "hint2": "Hebrew plural noun meaning \"Lights\"."
    }
  },
  {
    "id": "guess-the-emoji-l49-c4",
    "game_slug": "guess-the-emoji",
    "level": 49,
    "challenge_index": 4,
    "question_text": "💨 🌊 🚢 🧭 🌪️",
    "options": [],
    "correct_answer": "Euroclydon",
    "explanation": "Acts 27:14 records: \"But not long after there arose against it a tempestuous wind, called Euroclydon,\" which drove Paul’s ship across the Adria toward Malta.",
    "reference": "Acts 27:14",
    "metadata": {
      "stage": 10,
      "stage_title": "Extreme Master Canonical Challenge",
      "level_title": "Miraculous Relics & Canonical Terms",
      "puzzle_type": "exact_person",
      "emojis": "💨 🌊 🚢 🧭 🌪️",
      "prompt": "Type the exact name of the tempestuous cyclonic northeastern wind that wrecked Paul’s ship.",
      "testament": "New Testament",
      "difficulty": "Extreme Master",
      "timerSeconds": 180,
      "points": 300,
      "is_typed": true,
      "acceptedAlternatives": [
        "euroclydon",
        "euraquilo"
      ],
      "curated": true,
      "hint1": "A violent gale from the east-northeast in the Mediterranean Sea.",
      "hint2": "Trapped the Alexandrian grain ship for fourteen days without sun or stars."
    }
  },
  {
    "id": "guess-the-emoji-l49-c5",
    "game_slug": "guess-the-emoji",
    "level": 49,
    "challenge_index": 5,
    "question_text": "🏛️ 🗣️ 🪨 📜 🇬🇷",
    "options": [],
    "correct_answer": "Areopagus",
    "explanation": "Acts 17:19–22 tells how philosophers brought Paul unto Areopagus (Mars’ hill) in Athens, where he proclaimed the \"Unknown God\" and the resurrection of Christ.",
    "reference": "Acts 17:19–22",
    "metadata": {
      "stage": 10,
      "stage_title": "Extreme Master Canonical Challenge",
      "level_title": "Miraculous Relics & Canonical Terms",
      "puzzle_type": "exact_person",
      "emojis": "🏛️ 🗣️ 🪨 📜 🇬🇷",
      "prompt": "Type the exact name of the Athenian rocky council hill (Mars’ Hill) where Paul preached on the Unknown God.",
      "testament": "New Testament",
      "difficulty": "Extreme Master",
      "timerSeconds": 180,
      "points": 300,
      "is_typed": true,
      "acceptedAlternatives": [
        "areopagus",
        "mars' hill",
        "mars hill"
      ],
      "curated": true,
      "hint1": "Means \"Hill of Ares\".",
      "hint2": "Dionysius the Areopagite and a woman named Damaris believed his preaching there."
    }
  },
  {
    "id": "guess-the-emoji-l50-c1",
    "game_slug": "guess-the-emoji",
    "level": 50,
    "challenge_index": 1,
    "question_text": "👑 🍞 🍷 ♾️ 🏛️",
    "options": [],
    "correct_answer": "Melchizedek",
    "explanation": "Genesis 14:18 and Hebrews 7:1–3 describe Melchizedek, king of Salem and priest of the Most High God, who met Abraham returning from the slaughter of kings and blessed him.",
    "reference": "Genesis 14:18; Hebrews 7:1–3",
    "metadata": {
      "stage": 10,
      "stage_title": "Extreme Master Canonical Challenge",
      "level_title": "The Ultimate Canonical Mysteries",
      "puzzle_type": "exact_person",
      "emojis": "👑 🍞 🍷 ♾️ 🏛️",
      "prompt": "Type the exact name of the King of Salem and eternal priest to whom Abraham gave a tenth of all.",
      "testament": "Cross-Testament",
      "difficulty": "Extreme Master",
      "timerSeconds": 180,
      "points": 300,
      "is_typed": true,
      "acceptedAlternatives": [
        "melchizedek",
        "melchisedec"
      ],
      "curated": true,
      "hint1": "Without father, without mother, without descent, having neither beginning of days nor end of life.",
      "hint2": "Order of priesthood superior to Levi, after which Christ is ordained forever."
    }
  },
  {
    "id": "guess-the-emoji-l50-c2",
    "game_slug": "guess-the-emoji",
    "level": 50,
    "challenge_index": 2,
    "question_text": "🪟 😴 3️⃣ 💀 🫂",
    "options": [],
    "correct_answer": "Eutychus",
    "explanation": "Acts 20:9–12 tells of Eutychus sitting in a window loft at Troas, overcome by sleep during Paul’s long speech, falling from the third story, and restored to life.",
    "reference": "Acts 20:9–12",
    "metadata": {
      "stage": 10,
      "stage_title": "Extreme Master Canonical Challenge",
      "level_title": "The Ultimate Canonical Mysteries",
      "puzzle_type": "exact_person",
      "emojis": "🪟 😴 3️⃣ 💀 🫂",
      "prompt": "Type the exact name of the young man in Troas who fell asleep in a third-story window and fell to his death.",
      "testament": "New Testament",
      "difficulty": "Extreme Master",
      "timerSeconds": 180,
      "points": 300,
      "is_typed": true,
      "acceptedAlternatives": [
        "eutychus"
      ],
      "curated": true,
      "hint1": "His name ironically means \"fortunate\" or \"lucky\".",
      "hint2": "Paul went down, fell on him, embraced him, and said his life was in him."
    }
  },
  {
    "id": "guess-the-emoji-l50-c3",
    "game_slug": "guess-the-emoji",
    "level": 50,
    "challenge_index": 3,
    "question_text": "👶 🏛️ 🛏️ 🗡️ 👑",
    "options": [],
    "correct_answer": "Jehosheba",
    "explanation": "2 Kings 11:2 recounts that Jehosheba, daughter of King Joram and sister of Ahaziah, took Joash the son of Ahaziah and hid him from murderous Athaliah in the house of the Lord for six years.",
    "reference": "2 Kings 11:2",
    "metadata": {
      "stage": 10,
      "stage_title": "Extreme Master Canonical Challenge",
      "level_title": "The Ultimate Canonical Mysteries",
      "puzzle_type": "exact_person",
      "emojis": "👶 🏛️ 🛏️ 🗡️ 👑",
      "prompt": "Type the exact name of the courageous princess who concealed baby Joash from Queen Athaliah’s purge.",
      "testament": "Old Testament",
      "difficulty": "Extreme Master",
      "timerSeconds": 180,
      "points": 300,
      "is_typed": true,
      "acceptedAlternatives": [
        "jehosheba",
        "jehoshabeath"
      ],
      "curated": true,
      "hint1": "Wife of Jehoiada the high priest (called Jehoshabeath in 2 Chronicles 22:11).",
      "hint2": "Preserved the Davidic royal bloodline from total extermination."
    }
  },
  {
    "id": "guess-the-emoji-l50-c4",
    "game_slug": "guess-the-emoji",
    "level": 50,
    "challenge_index": 4,
    "question_text": "🔮 👖 🪢 🦶 🖐️",
    "options": [],
    "correct_answer": "Agabus",
    "explanation": "Acts 21:10–11 records the prophet Agabus arriving in Caesarea, taking Paul’s girdle, and binding his own hands and feet to dramatize Paul’s forthcoming arrest in Jerusalem.",
    "reference": "Acts 21:10–11; Acts 11:28",
    "metadata": {
      "stage": 10,
      "stage_title": "Extreme Master Canonical Challenge",
      "level_title": "The Ultimate Canonical Mysteries",
      "puzzle_type": "exact_person",
      "emojis": "🔮 👖 🪢 🦶 🖐️",
      "prompt": "Type the exact name of the Judean prophet who tied his own limbs with Paul’s belt as a sign.",
      "testament": "New Testament",
      "difficulty": "Extreme Master",
      "timerSeconds": 180,
      "points": 300,
      "is_typed": true,
      "acceptedAlternatives": [
        "agabus"
      ],
      "curated": true,
      "hint1": "Also foretold the great worldwide famine in the days of Claudius Caesar (Acts 11:28).",
      "hint2": "Visited Philip the evangelist’s home in Caesarea."
    }
  },
  {
    "id": "guess-the-emoji-l50-c5",
    "game_slug": "guess-the-emoji",
    "level": 50,
    "challenge_index": 5,
    "question_text": "✍️ 📜 👶 🏃‍♂️ ⚔️",
    "options": [],
    "correct_answer": "Maher-shalal-hash-baz",
    "explanation": "Isaiah 8:1–3 commands Isaiah to write with a man’s pen in a great roll concerning Maher-shalal-hash-baz; his prophetess wife conceived and bore a son of the same name.",
    "reference": "Isaiah 8:1–3",
    "metadata": {
      "stage": 10,
      "stage_title": "Extreme Master Canonical Challenge",
      "level_title": "The Ultimate Canonical Mysteries",
      "puzzle_type": "exact_person",
      "emojis": "✍️ 📜 👶 🏃‍♂️ ⚔️",
      "prompt": "Type the exact hyphenated prophetic name of Isaiah’s son (the longest personal name in the Bible).",
      "testament": "Old Testament",
      "difficulty": "Extreme Master",
      "timerSeconds": 180,
      "points": 300,
      "is_typed": true,
      "acceptedAlternatives": [
        "maher-shalal-hash-baz",
        "mahershalalhashbaz",
        "maher shalal hash baz"
      ],
      "curated": true,
      "hint1": "Eighteen letters with hyphens.",
      "hint2": "Signifies \"Swift to the spoil, hasten the booty\"."
    }
  }
];
