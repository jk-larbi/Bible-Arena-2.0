import type { ChallengeItem } from './bibleContentBank';

/**
 * BibleArena 2.0 — Bible Character Quest
 * 30 Published Levels · 5 Questions Per Level · 150 Live Questions (Levels 31–50 remain unpublished)
 * 10 Stages with thematic progression, uncommon names, and level-specific challenge mechanics.
 */
export const BIBLE_CHARACTER_QUEST_QUESTIONS: ChallengeItem[] = [
  {
    "id": "bible-character-quest-l1-c1",
    "game_slug": "bible-character-quest",
    "level": 1,
    "challenge_index": 1,
    "question_text": "• I was a judge in Israel.\n• I was left-handed.\n• I killed Eglon, king of Moab, with an eighteen-inch double-edged dagger.\nWho am I?",
    "options": [
      "Ehud",
      "Gideon",
      "Jephthah",
      "Samson"
    ],
    "correct_answer": "Ehud",
    "reference": "Judges 3:15-22",
    "explanation": "Ehud son of Gera, a Benjamite, was left-handed and used a concealed short sword to deliver Israel from Eglon king of Moab.",
    "metadata": {
      "stage": 1,
      "stage_title": "The Identity Test",
      "level_theme": "Who Am I?",
      "category": "The Identity Test",
      "challengeType": "who-am-i",
      "mechanic": "who-am-i",
      "difficulty": "easy",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "I was a judge in Israel.",
        "I was left-handed.",
        "I killed Eglon, king of Moab, with a concealed double-edged dagger."
      ]
    }
  },
  {
    "id": "bible-character-quest-l1-c2",
    "game_slug": "bible-character-quest",
    "level": 1,
    "challenge_index": 2,
    "question_text": "• I was a Danite man from Zorah.\n• An angel announced to my wife that she would bear a son who would begin to deliver Israel from the Philistines.\n• I prepared an offering, and the angel ascended in its flame.\nWho am I?",
    "options": [
      "Manoah",
      "Elkanah",
      "Abdon",
      "Samson"
    ],
    "correct_answer": "Manoah",
    "reference": "Judges 13:2-24",
    "explanation": "Manoah and his wife were told that they would have a son who would begin to deliver Israel from the Philistines. Manoah later offered a sacrifice, and the angel of the LORD ascended in the flame of the altar.",
    "metadata": {
      "stage": 1,
      "stage_title": "The Identity Test",
      "level_theme": "Who Am I?",
      "category": "The Identity Test",
      "challengeType": "who-am-i",
      "mechanic": "who-am-i",
      "difficulty": "easy",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "I was from the tribe of Dan and lived in Zorah.",
        "An angel announced the birth of my son to my wife.",
        "I witnessed the angel ascend in the flame of the offering."
      ]
    },
    "clues": [
      "I was from the tribe of Dan and lived in Zorah.",
      "An angel announced the birth of my son to my wife.",
      "I witnessed the angel ascend in the flame of the offering."
    ]
  },
  {
    "id": "bible-character-quest-l1-c3",
    "game_slug": "bible-character-quest",
    "level": 1,
    "challenge_index": 3,
    "question_text": "• I was a prophetess who judged Israel under a palm tree.\n• I summoned Barak to take ten thousand men to Mount Tabor.\n• I sang a victory song with Barak after Sisera’s defeat.\nWho am I?",
    "options": [
      "Deborah",
      "Huldah",
      "Miriam",
      "Anna"
    ],
    "correct_answer": "Deborah",
    "reference": "Judges 4:4-14; 5:1-31",
    "explanation": "Deborah, the wife of Lapidoth, was a prophetess who judged Israel beneath the Palm of Deborah between Ramah and Bethel.",
    "metadata": {
      "stage": 1,
      "stage_title": "The Identity Test",
      "level_theme": "Who Am I?",
      "category": "The Identity Test",
      "challengeType": "who-am-i",
      "mechanic": "who-am-i",
      "difficulty": "easy",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "I was a prophetess who judged Israel under a palm tree.",
        "I summoned Barak to take ten thousand men to Mount Tabor.",
        "I sang a victory song after Sisera's defeat."
      ]
    }
  },
  {
    "id": "bible-character-quest-l1-c4",
    "game_slug": "bible-character-quest",
    "level": 1,
    "challenge_index": 4,
    "question_text": "• I was an early Christian disciple from Cyprus.\n• My original name was Joseph, but the apostles gave me a new name meaning 'Son of Encouragement'.\n• I sold a field and laid the money at the apostles' feet.\nWho am I?",
    "options": [
      "Barnabas",
      "Silas",
      "Matthias",
      "Barsabbas"
    ],
    "correct_answer": "Barnabas",
    "reference": "Acts 4:36-37",
    "explanation": "Joseph, a Levite from Cyprus whom the apostles nicknamed Barnabas ('Son of Encouragement'), sold a field he owned and brought the proceeds.",
    "metadata": {
      "stage": 1,
      "stage_title": "The Identity Test",
      "level_theme": "Who Am I?",
      "category": "The Identity Test",
      "challengeType": "who-am-i",
      "mechanic": "who-am-i",
      "difficulty": "easy",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "I was an early Christian disciple from Cyprus.",
        "The apostles gave me a surname meaning 'Son of Encouragement'.",
        "I sold a field and laid the proceeds at the apostles' feet."
      ]
    }
  },
  {
    "id": "bible-character-quest-l1-c5",
    "game_slug": "bible-character-quest",
    "level": 1,
    "challenge_index": 5,
    "question_text": "• I was a valiant commander from Kabzeel.\n• I went down into a pit on a snowy day and killed a lion.\n• I struck down an Egyptian giant by snatching his own spear from his hand.\nWho am I?",
    "options": [
      "Benaiah son of Jehoiada",
      "Abishai",
      "Asahel",
      "Josheb-basshebeth"
    ],
    "correct_answer": "Benaiah son of Jehoiada",
    "reference": "2 Samuel 23:20-23",
    "explanation": "Benaiah son of Jehoiada slew a lion in a pit on a snowy day and snatched the spear out of an Egyptian giant's hand to kill him with his own staff.",
    "metadata": {
      "stage": 1,
      "stage_title": "The Identity Test",
      "level_theme": "Who Am I?",
      "category": "The Identity Test",
      "challengeType": "who-am-i",
      "mechanic": "who-am-i",
      "difficulty": "easy",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "I was a valiant warrior from Kabzeel.",
        "I went down into a pit on a snowy day and killed a lion.",
        "I snatched an Egyptian giant's spear from his hand and slew him."
      ]
    }
  },
  {
    "id": "bible-character-quest-l2-c1",
    "game_slug": "bible-character-quest",
    "level": 2,
    "challenge_index": 1,
    "question_text": "Two prominent men in the New Testament bore the name James. Which one was the brother of the apostle John and the first of the Twelve to be martyred?",
    "options": [
      "James son of Zebedee",
      "James son of Alphaeus",
      "James the brother of Jesus",
      "James the father of Judas (not Iscariot)"
    ],
    "correct_answer": "James son of Zebedee",
    "reference": "Matthew 4:21; Acts 12:1-2",
    "explanation": "King Herod Agrippa I killed James the brother of John with the sword (Acts 12:2), distinguishing him from James son of Alphaeus and James the Lord's brother.",
    "metadata": {
      "stage": 1,
      "stage_title": "The Identity Test",
      "level_theme": "The Name Trap",
      "category": "The Identity Test",
      "challengeType": "name-trap",
      "mechanic": "name-trap",
      "difficulty": "easy",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "Clue 1: Relates to Matthew 4:21; Acts 12:1-2.",
        "Clue 2: King Herod Agrippa I killed James the brother of John with the sword (Acts 12:2)...",
        "Clue 3: The answer starts with \"J\"."
      ]
    }
  },
  {
    "id": "bible-character-quest-l2-c2",
    "game_slug": "bible-character-quest",
    "level": 2,
    "challenge_index": 2,
    "question_text": "Two men in Genesis were named Lamech. Which Lamech was the father of Noah and declared that his son would bring comfort from their toil?",
    "options": [
      "Lamech son of Methuselah",
      "Lamech son of Methushael",
      "Lamech of the line of Cain",
      "Lamech husband of Adah and Zillah"
    ],
    "correct_answer": "Lamech son of Methuselah",
    "reference": "Genesis 5:28-29",
    "explanation": "Lamech of the godly line of Seth (son of Methuselah) lived 777 years and fathered Noah, unlike the polygamist Lamech of Cain's line in Genesis 4.",
    "metadata": {
      "stage": 1,
      "stage_title": "The Identity Test",
      "level_theme": "The Name Trap",
      "category": "The Identity Test",
      "challengeType": "name-trap",
      "mechanic": "name-trap",
      "difficulty": "easy",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "Clue 1: Relates to Genesis 5:28-29.",
        "Clue 2: Lamech of the godly line of Seth (son of Methuselah) lived 777 years and fathere...",
        "Clue 3: The answer starts with \"L\"."
      ]
    }
  },
  {
    "id": "bible-character-quest-l2-c3",
    "game_slug": "bible-character-quest",
    "level": 2,
    "challenge_index": 3,
    "question_text": "Two prominent apostles were named Simon. Which Simon was also designated as 'the Zealot' or 'the Cananaean'?",
    "options": [
      "Simon the Zealot",
      "Simon Peter",
      "Simon the tanner",
      "Simon of Cyrene"
    ],
    "correct_answer": "Simon the Zealot",
    "reference": "Luke 6:15; Matthew 10:4",
    "explanation": "Simon the Zealot (also called the Cananaean) is distinguished in apostolic lists from Simon Peter (Cephas).",
    "metadata": {
      "stage": 1,
      "stage_title": "The Identity Test",
      "level_theme": "The Name Trap",
      "category": "The Identity Test",
      "challengeType": "name-trap",
      "mechanic": "name-trap",
      "difficulty": "easy",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "Clue 1: Relates to Luke 6:15; Matthew 10:4.",
        "Clue 2: Simon the Zealot (also called the Cananaean) is distinguished in apostolic lists...",
        "Clue 3: The answer starts with \"S\"."
      ]
    }
  },
  {
    "id": "bible-character-quest-l2-c4",
    "game_slug": "bible-character-quest",
    "level": 2,
    "challenge_index": 4,
    "question_text": "Two different biblical figures were named Saul. Which statement correctly distinguishes Saul of Gibeah from Saul of Tarsus?",
    "options": [
      "Saul of Gibeah was Israel's first king; Saul of Tarsus became the apostle Paul",
      "Saul of Tarsus was king of Israel; Saul of Gibeah was a Pharisee",
      "Both Sauls were kings of the northern kingdom of Israel",
      "Both Sauls were high priests serving in the Jerusalem temple"
    ],
    "correct_answer": "Saul of Gibeah was Israel's first king; Saul of Tarsus became the apostle Paul",
    "reference": "1 Samuel 10:21-26; Acts 9:1-11; 13:9",
    "explanation": "King Saul came from Gibeah in Benjamin; Saul of Tarsus was also from the tribe of Benjamin but became the apostle Paul after encountering Christ on the Damascus road.",
    "metadata": {
      "stage": 1,
      "stage_title": "The Identity Test",
      "level_theme": "The Name Trap",
      "category": "The Identity Test",
      "challengeType": "name-trap",
      "mechanic": "name-trap",
      "difficulty": "easy",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "Clue 1: Relates to 1 Samuel 10:21-26; Acts 9:1-11; 13:9.",
        "Clue 2: King Saul came from Gibeah in Benjamin; Saul of Tarsus was also from the tribe o...",
        "Clue 3: The answer starts with \"S\"."
      ]
    }
  },
  {
    "id": "bible-character-quest-l2-c5",
    "game_slug": "bible-character-quest",
    "level": 2,
    "challenge_index": 5,
    "question_text": "Three men in the New Testament are called Ananias. Which Ananias was the high priest who ordered Paul to be struck on the mouth during his hearing before the Sanhedrin?",
    "options": [
      "Ananias son of Nedebaeus",
      "Ananias the husband of Sapphira",
      "Ananias the disciple in Damascus",
      "Ananias the son of Onias"
    ],
    "correct_answer": "Ananias son of Nedebaeus",
    "reference": "Acts 23:1-3",
    "explanation": "Ananias the high priest commanded those standing by Paul to strike him on the mouth; he is distinct from Ananias of Damascus (Acts 9) and the husband of Sapphira (Acts 5).",
    "metadata": {
      "stage": 1,
      "stage_title": "The Identity Test",
      "level_theme": "The Name Trap",
      "category": "The Identity Test",
      "challengeType": "name-trap",
      "mechanic": "name-trap",
      "difficulty": "easy",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "Clue 1: Relates to Acts 23:1-3.",
        "Clue 2: Ananias the high priest commanded those standing by Paul to strike him on the mo...",
        "Clue 3: The answer starts with \"A\"."
      ]
    }
  },
  {
    "id": "bible-character-quest-l3-c1",
    "game_slug": "bible-character-quest",
    "level": 3,
    "challenge_index": 1,
    "question_text": "Which prominent sister of Moses and Aaron watched over baby Moses in the Nile and later led Israel's women in song at the Red Sea?",
    "options": [
      "Miriam",
      "Zipporah",
      "Jochebed",
      "Elisheba"
    ],
    "correct_answer": "Miriam",
    "reference": "Exodus 2:4; 15:20-21; Numbers 26:59",
    "explanation": "Miriam was the older sister of Moses and Aaron, identified in Exodus 15:20 as Miriam the prophetess, Aaron's sister.",
    "metadata": {
      "stage": 1,
      "stage_title": "The Identity Test",
      "level_theme": "Family Connections",
      "category": "The Identity Test",
      "challengeType": "family-connections",
      "mechanic": "family-connections",
      "difficulty": "easy",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "Clue 1: Relates to Exodus 2:4; 15:20-21; Numbers 26:59.",
        "Clue 2: Miriam was the older sister of Moses and Aaron, identified in Exodus 15:20 as Mi...",
        "Clue 3: The answer starts with \"M\"."
      ]
    }
  },
  {
    "id": "bible-character-quest-l3-c2",
    "game_slug": "bible-character-quest",
    "level": 3,
    "challenge_index": 2,
    "question_text": "Paul commends Timothy's unfeigned faith and explicitly mentions two faithful women in his immediate family. Who were they?",
    "options": [
      "His mother Eunice and grandmother Lois",
      "His mother Lois and grandmother Priscilla",
      "His mother Lydia and grandmother Eunice",
      "His mother Phoebe and grandmother Chloe"
    ],
    "correct_answer": "His mother Eunice and grandmother Lois",
    "reference": "2 Timothy 1:5",
    "explanation": "Paul recalls the genuine faith that dwelt first in Timothy’s grandmother Lois and his mother Eunice.",
    "metadata": {
      "stage": 1,
      "stage_title": "The Identity Test",
      "level_theme": "Family Connections",
      "category": "The Identity Test",
      "challengeType": "family-connections",
      "mechanic": "family-connections",
      "difficulty": "easy",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "Clue 1: Relates to 2 Timothy 1:5.",
        "Clue 2: Paul recalls the genuine faith that dwelt first in Timothy’s grandmother Lois an...",
        "Clue 3: The answer starts with \"H\"."
      ]
    }
  },
  {
    "id": "bible-character-quest-l3-c3",
    "game_slug": "bible-character-quest",
    "level": 3,
    "challenge_index": 3,
    "question_text": "Which priest was the father of Phinehas, who succeeded Aaron as high priest atop Mount Hor?",
    "options": [
      "Eleazar",
      "Ithamar",
      "Nadab",
      "Abihu"
    ],
    "correct_answer": "Eleazar",
    "reference": "Exodus 6:25; Numbers 20:25-28",
    "explanation": "Eleazar, Aaron's son, married one of Putiel's daughters and fathered Phinehas; Eleazar was invested with Aaron's high priestly vestments on Mount Hor.",
    "metadata": {
      "stage": 1,
      "stage_title": "The Identity Test",
      "level_theme": "Family Connections",
      "category": "The Identity Test",
      "challengeType": "family-connections",
      "mechanic": "family-connections",
      "difficulty": "easy",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "Clue 1: Relates to Exodus 6:25; Numbers 20:25-28.",
        "Clue 2: Eleazar, Aaron's son, married one of Putiel's daughters and fathered Phinehas; E...",
        "Clue 3: The answer starts with \"E\"."
      ]
    }
  },
  {
    "id": "bible-character-quest-l3-c4",
    "game_slug": "bible-character-quest",
    "level": 3,
    "challenge_index": 4,
    "question_text": "Which wife of David was the former wife of the harsh rancher Nabal, who acted with wisdom to prevent David from shedding blood?",
    "options": [
      "Abigail",
      "Ahinoam",
      "Michal",
      "Maacah"
    ],
    "correct_answer": "Abigail",
    "reference": "1 Samuel 25:3, 39-42",
    "explanation": "Abigail was a woman of good understanding and beautiful appearance; after Nabal died, David sent and proposed to take her as his wife.",
    "metadata": {
      "stage": 1,
      "stage_title": "The Identity Test",
      "level_theme": "Family Connections",
      "category": "The Identity Test",
      "challengeType": "family-connections",
      "mechanic": "family-connections",
      "difficulty": "easy",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "Clue 1: Relates to 1 Samuel 25:3, 39-42.",
        "Clue 2: Abigail was a woman of good understanding and beautiful appearance; after Nabal ...",
        "Clue 3: The answer starts with \"A\"."
      ]
    }
  },
  {
    "id": "bible-character-quest-l3-c5",
    "game_slug": "bible-character-quest",
    "level": 3,
    "challenge_index": 5,
    "question_text": "Which brother of Joab and Asahel was chief of the Thirty champions and once slew 300 enemy warriors with his spear?",
    "options": [
      "Abishai",
      "Benaiah",
      "Elhanan",
      "Ittai"
    ],
    "correct_answer": "Abishai",
    "reference": "2 Samuel 23:18-19; 1 Chronicles 11:20-21",
    "explanation": "Abishai the brother of Joab, son of Zeruiah, was chief of the Thirty; he lifted up his spear against three hundred men and killed them.",
    "metadata": {
      "stage": 1,
      "stage_title": "The Identity Test",
      "level_theme": "Family Connections",
      "category": "The Identity Test",
      "challengeType": "family-connections",
      "mechanic": "family-connections",
      "difficulty": "easy",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "Clue 1: Relates to 2 Samuel 23:18-19; 1 Chronicles 11:20-21.",
        "Clue 2: Abishai the brother of Joab, son of Zeruiah, was chief of the Thirty; he lifted ...",
        "Clue 3: The answer starts with \"A\"."
      ]
    }
  },
  {
    "id": "bible-character-quest-l4-c1",
    "game_slug": "bible-character-quest",
    "level": 4,
    "challenge_index": 1,
    "question_text": "Which young man at Troas sat in a third-story window while Paul preached past midnight, fell into a deep sleep, and plunged to the ground?",
    "options": [
      "Eutychus",
      "Trophimus",
      "Secundus",
      "Aristarchus"
    ],
    "correct_answer": "Eutychus",
    "reference": "Acts 20:9-12",
    "explanation": "Eutychus sank into a deep sleep as Paul talked on and fell down from the third story; Paul embraced him and he was brought up alive.",
    "metadata": {
      "stage": 1,
      "stage_title": "The Identity Test",
      "level_theme": "The Unusual Detail",
      "category": "The Identity Test",
      "challengeType": "unusual-detail",
      "mechanic": "unusual-detail",
      "difficulty": "moderate",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "Clue 1: Relates to Acts 20:9-12.",
        "Clue 2: Eutychus sank into a deep sleep as Paul talked on and fell down from the third s...",
        "Clue 3: The answer starts with \"E\"."
      ]
    }
  },
  {
    "id": "bible-character-quest-l4-c2",
    "game_slug": "bible-character-quest",
    "level": 4,
    "challenge_index": 2,
    "question_text": "Which patriarch's nurse died upon Jacob’s return from Paddan-aram and was buried beneath the oak of Bethel, called Allon-bacuth ('Oak of Weeping')?",
    "options": [
      "Deborah",
      "Bilhah",
      "Zilpah",
      "Puah"
    ],
    "correct_answer": "Deborah",
    "reference": "Genesis 35:8",
    "explanation": "Genesis 35:8 explicitly names Deborah, Rebekah's nurse, who died and was buried beneath Bethel under an oak tree named Allon-bacuth.",
    "metadata": {
      "stage": 1,
      "stage_title": "The Identity Test",
      "level_theme": "The Unusual Detail",
      "category": "The Identity Test",
      "challengeType": "unusual-detail",
      "mechanic": "unusual-detail",
      "difficulty": "moderate",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "Clue 1: Relates to Genesis 35:8.",
        "Clue 2: Genesis 35:8 explicitly names Deborah, Rebekah's nurse, who died and was buried ...",
        "Clue 3: The answer starts with \"D\"."
      ]
    }
  },
  {
    "id": "bible-character-quest-l4-c3",
    "game_slug": "bible-character-quest",
    "level": 4,
    "challenge_index": 3,
    "question_text": "Which servant girl was so overjoyed when she recognized Peter’s voice at Mary's house that she ran inside without opening the gate?",
    "options": [
      "Rhoda",
      "Tabitha",
      "Priscilla",
      "Lydia"
    ],
    "correct_answer": "Rhoda",
    "reference": "Acts 12:13-16",
    "explanation": "A servant girl named Rhoda came to answer the door; recognizing Peter's voice, in her joy she ran back inside without opening the gate, announcing Peter was outside.",
    "metadata": {
      "stage": 1,
      "stage_title": "The Identity Test",
      "level_theme": "The Unusual Detail",
      "category": "The Identity Test",
      "challengeType": "unusual-detail",
      "mechanic": "unusual-detail",
      "difficulty": "moderate",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "Clue 1: Relates to Acts 12:13-16.",
        "Clue 2: A servant girl named Rhoda came to answer the door; recognizing Peter's voice, i...",
        "Clue 3: The answer starts with \"R\"."
      ]
    }
  },
  {
    "id": "bible-character-quest-l4-c4",
    "game_slug": "bible-character-quest",
    "level": 4,
    "challenge_index": 4,
    "question_text": "Which wealthy eighty-year-old Gileadite supplied David with wheat, barley, cheese, and beds while David was fleeing Absalom at Mahanaim?",
    "options": [
      "Barzillai",
      "Machir",
      "Shobi",
      "Chimham"
    ],
    "correct_answer": "Barzillai",
    "reference": "2 Samuel 17:27-29; 19:31-37",
    "explanation": "Barzillai the Gileadite of Rogelim provided for King David while he stayed at Mahanaim, for he was a very wealthy man; he sent his son Chimham with the king.",
    "metadata": {
      "stage": 1,
      "stage_title": "The Identity Test",
      "level_theme": "The Unusual Detail",
      "category": "The Identity Test",
      "challengeType": "unusual-detail",
      "mechanic": "unusual-detail",
      "difficulty": "moderate",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "Clue 1: Relates to 2 Samuel 17:27-29; 19:31-37.",
        "Clue 2: Barzillai the Gileadite of Rogelim provided for King David while he stayed at Ma...",
        "Clue 3: The answer starts with \"B\"."
      ]
    }
  },
  {
    "id": "bible-character-quest-l4-c5",
    "game_slug": "bible-character-quest",
    "level": 4,
    "challenge_index": 5,
    "question_text": "Which Bedouin ancestor commanded his descendants never to drink wine, build houses, or sow fields, winning divine commendation in Jeremiah 35?",
    "options": [
      "Jonadab (Jehonadab) son of Rechab",
      "Jethro the Midianite",
      "Hobab the Kenite",
      "Kedar son of Ishmael"
    ],
    "correct_answer": "Jonadab (Jehonadab) son of Rechab",
    "reference": "Jeremiah 35:6-10, 18-19",
    "explanation": "Jonadab son of Rechab gave his descendants strict nomadic instructions, which they faithfully preserved for centuries, drawing God's lasting blessing.",
    "metadata": {
      "stage": 1,
      "stage_title": "The Identity Test",
      "level_theme": "The Unusual Detail",
      "category": "The Identity Test",
      "challengeType": "unusual-detail",
      "mechanic": "unusual-detail",
      "difficulty": "moderate",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "Clue 1: Relates to Jeremiah 35:6-10, 18-19.",
        "Clue 2: Jonadab son of Rechab gave his descendants strict nomadic instructions, which th...",
        "Clue 3: The answer starts with \"J\"."
      ]
    }
  },
  {
    "id": "bible-character-quest-l5-c1",
    "game_slug": "bible-character-quest",
    "level": 5,
    "challenge_index": 1,
    "question_text": "Four statements are given below concerning Mephibosheth (Merib-baal). Three are accurate biblical facts, and ONE is false. Which statement is FALSE?",
    "options": [
      "He was the son of Absalom",
      "He was lame in both feet after his nurse dropped him when he was five years old",
      "David invited him to eat continually at the king’s table",
      "He lived in obscurity in Lo-debar before David summoned him"
    ],
    "correct_answer": "He was the son of Absalom",
    "reference": "2 Samuel 4:4; 9:1-13",
    "explanation": "Mephibosheth was the son of Jonathan (Saul’s son), NOT Absalom. David restored to him all of Saul's land for Jonathan's sake.",
    "metadata": {
      "stage": 1,
      "stage_title": "The Identity Test",
      "level_theme": "One Clue Too Many",
      "category": "The Identity Test",
      "challengeType": "one-clue-too-many",
      "mechanic": "one-clue-too-many",
      "difficulty": "moderate",
      "timerSeconds": 25,
      "curated": true,
      "clues": [
        "Clue 1: Relates to 2 Samuel 4:4; 9:1-13.",
        "Clue 2: Mephibosheth was the son of Jonathan (Saul’s son), NOT Absalom. David restored t...",
        "Clue 3: The answer starts with \"H\"."
      ]
    }
  },
  {
    "id": "bible-character-quest-l5-c2",
    "game_slug": "bible-character-quest",
    "level": 5,
    "challenge_index": 2,
    "question_text": "Four statements are given below concerning the apostle Peter. Three are biblically accurate, and ONE is false. Which statement is FALSE?",
    "options": [
      "He was born in Tarsus of Cilicia",
      "He was originally named Simon son of Jonah",
      "He was a fisherman on the Sea of Galilee with his brother Andrew",
      "He raised Dorcas (Tabitha) from the dead at Joppa"
    ],
    "correct_answer": "He was born in Tarsus of Cilicia",
    "reference": "John 1:44; Acts 9:36-42; Acts 22:3",
    "explanation": "Peter was from Bethsaida in Galilee. It was Paul who was born in Tarsus of Cilicia.",
    "metadata": {
      "stage": 1,
      "stage_title": "The Identity Test",
      "level_theme": "One Clue Too Many",
      "category": "The Identity Test",
      "challengeType": "one-clue-too-many",
      "mechanic": "one-clue-too-many",
      "difficulty": "moderate",
      "timerSeconds": 25,
      "curated": true,
      "clues": [
        "Clue 1: Relates to John 1:44; Acts 9:36-42; Acts 22:3.",
        "Clue 2: Peter was from Bethsaida in Galilee. It was Paul who was born in Tarsus of Cilic...",
        "Clue 3: The answer starts with \"H\"."
      ]
    }
  },
  {
    "id": "bible-character-quest-l5-c3",
    "game_slug": "bible-character-quest",
    "level": 5,
    "challenge_index": 3,
    "question_text": "Four statements are given below concerning King Saul. Three are biblically accurate, and ONE is false. Which statement is FALSE?",
    "options": [
      "He belonged to the royal tribe of Judah",
      "He was anointed king by the prophet Samuel",
      "He spared Agag king of the Amalekites contrary to God’s command",
      "He consulted a medium at Endor on the eve of his final battle"
    ],
    "correct_answer": "He belonged to the royal tribe of Judah",
    "reference": "1 Samuel 9:1-2; 15:8-9; 28:7-14",
    "explanation": "Saul belonged to the tribe of Benjamin (son of Kish), not the tribe of Judah.",
    "metadata": {
      "stage": 1,
      "stage_title": "The Identity Test",
      "level_theme": "One Clue Too Many",
      "category": "The Identity Test",
      "challengeType": "one-clue-too-many",
      "mechanic": "one-clue-too-many",
      "difficulty": "moderate",
      "timerSeconds": 25,
      "curated": true,
      "clues": [
        "Clue 1: Relates to 1 Samuel 9:1-2; 15:8-9; 28:7-14.",
        "Clue 2: Saul belonged to the tribe of Benjamin (son of Kish), not the tribe of Judah....",
        "Clue 3: The answer starts with \"H\"."
      ]
    }
  },
  {
    "id": "bible-character-quest-l5-c4",
    "game_slug": "bible-character-quest",
    "level": 5,
    "challenge_index": 4,
    "question_text": "Four statements are given below concerning Priscilla (Prisca). Three are biblically accurate, and ONE is false. Which statement is FALSE?",
    "options": [
      "She was struck blind by Paul for opposing the gospel on Cyprus",
      "She and her husband Aquila were tentmakers who hosted Paul in Corinth",
      "They had left Rome because Emperor Claudius commanded all Jews to leave",
      "They instructed Apollos in the way of God more accurately at Ephesus"
    ],
    "correct_answer": "She was struck blind by Paul for opposing the gospel on Cyprus",
    "reference": "Acts 13:8-11; 18:1-3, 26; Romans 16:3",
    "explanation": "It was Elymas (Bar-Jesus) the sorcerer who was struck blind on Cyprus (Acts 13:8-11). Priscilla was a beloved co-worker of Paul.",
    "metadata": {
      "stage": 1,
      "stage_title": "The Identity Test",
      "level_theme": "One Clue Too Many",
      "category": "The Identity Test",
      "challengeType": "one-clue-too-many",
      "mechanic": "one-clue-too-many",
      "difficulty": "moderate",
      "timerSeconds": 25,
      "curated": true,
      "clues": [
        "Clue 1: Relates to Acts 13:8-11; 18:1-3, 26; Romans 16:3.",
        "Clue 2: It was Elymas (Bar-Jesus) the sorcerer who was struck blind on Cyprus (Acts 13:8...",
        "Clue 3: The answer starts with \"S\"."
      ]
    }
  },
  {
    "id": "bible-character-quest-l5-c5",
    "game_slug": "bible-character-quest",
    "level": 5,
    "challenge_index": 5,
    "question_text": "Four statements are given below concerning Jael. Three are biblically accurate, and ONE is false. Which statement is FALSE?",
    "options": [
      "She was an Israelite queen who reigned in Samaria",
      "She was the wife of Heber the Kenite",
      "She gave milk to Sisera when he fled to her tent",
      "She killed Sisera by driving a wooden tent peg into his temple"
    ],
    "correct_answer": "She was an Israelite queen who reigned in Samaria",
    "reference": "Judges 4:17-22; 5:24-27",
    "explanation": "Jael was not an Israelite queen; she was a Kenite woman (the wife of Heber the Kenite) whose tent was pitched near Kedesh.",
    "metadata": {
      "stage": 1,
      "stage_title": "The Identity Test",
      "level_theme": "One Clue Too Many",
      "category": "The Identity Test",
      "challengeType": "one-clue-too-many",
      "mechanic": "one-clue-too-many",
      "difficulty": "moderate",
      "timerSeconds": 25,
      "curated": true,
      "clues": [
        "Clue 1: Relates to Judges 4:17-22; 5:24-27.",
        "Clue 2: Jael was not an Israelite queen; she was a Kenite woman (the wife of Heber the K...",
        "Clue 3: The answer starts with \"S\"."
      ]
    }
  },
  {
    "id": "bible-character-quest-l6-c1",
    "game_slug": "bible-character-quest",
    "level": 6,
    "challenge_index": 1,
    "question_text": "Which daughter-in-law of Judah disguised herself at the entrance to Enaim, bearing the twin sons Perez and Zerah?",
    "options": [
      "Tamar",
      "Shua",
      "Dinah",
      "Asenath"
    ],
    "correct_answer": "Tamar",
    "reference": "Genesis 38:13-30",
    "explanation": "Tamar was the daughter-in-law of Judah who bore Perez and Zerah; Perez is recorded in the lineage of King David and Jesus Christ.",
    "metadata": {
      "stage": 2,
      "stage_title": "The People of the Bible",
      "level_theme": "The First Families",
      "category": "The People of the Bible",
      "challengeType": "first-families",
      "mechanic": "first-families",
      "difficulty": "moderate",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "Clue 1: Relates to Genesis 38:13-30.",
        "Clue 2: Tamar was the daughter-in-law of Judah who bore Perez and Zerah; Perez is record...",
        "Clue 3: The answer starts with \"T\"."
      ]
    }
  },
  {
    "id": "bible-character-quest-l6-c2",
    "game_slug": "bible-character-quest",
    "level": 6,
    "challenge_index": 2,
    "question_text": "Which wife did Abraham take after Sarah’s death, who bore him Zimran, Jokshan, Medan, Midian, Ishbak, and Shuah?",
    "options": [
      "Keturah",
      "Hagar",
      "Milcah",
      "Basemath"
    ],
    "correct_answer": "Keturah",
    "reference": "Genesis 25:1-2",
    "explanation": "After Sarah died, Abraham married Keturah, who became mother to six sons sent away eastward with gifts.",
    "metadata": {
      "stage": 2,
      "stage_title": "The People of the Bible",
      "level_theme": "The First Families",
      "category": "The People of the Bible",
      "challengeType": "first-families",
      "mechanic": "first-families",
      "difficulty": "moderate",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "Clue 1: Relates to Genesis 25:1-2.",
        "Clue 2: After Sarah died, Abraham married Keturah, who became mother to six sons sent aw...",
        "Clue 3: The answer starts with \"K\"."
      ]
    }
  },
  {
    "id": "bible-character-quest-l6-c3",
    "game_slug": "bible-character-quest",
    "level": 6,
    "challenge_index": 3,
    "question_text": "Which cousin of Barnabas accompanied Paul on his first journey, departed at Perga, and later wrote the second Gospel?",
    "options": [
      "John Mark",
      "Silas",
      "Luke",
      "Timothy"
    ],
    "correct_answer": "John Mark",
    "reference": "Acts 12:12, 25; 13:13; Colossians 4:10",
    "explanation": "John Mark was the cousin of Barnabas (Colossians 4:10) and son of Mary of Jerusalem; he later became a valuable co-worker to Paul and Peter.",
    "metadata": {
      "stage": 2,
      "stage_title": "The People of the Bible",
      "level_theme": "The First Families",
      "category": "The People of the Bible",
      "challengeType": "first-families",
      "mechanic": "first-families",
      "difficulty": "moderate",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "Clue 1: Relates to Acts 12:12, 25; 13:13; Colossians 4:10.",
        "Clue 2: John Mark was the cousin of Barnabas (Colossians 4:10) and son of Mary of Jerusa...",
        "Clue 3: The answer starts with \"J\"."
      ]
    }
  },
  {
    "id": "bible-character-quest-l6-c4",
    "game_slug": "bible-character-quest",
    "level": 6,
    "challenge_index": 4,
    "question_text": "Which brother-in-law of Moses did Moses urge to travel with Israel through the wilderness to serve as 'eyes for us'?",
    "options": [
      "Hobab son of Reuel",
      "Jethro",
      "Balaam",
      "Phinehas"
    ],
    "correct_answer": "Hobab son of Reuel",
    "reference": "Numbers 10:29-32",
    "explanation": "Moses urged Hobab son of Reuel the Midianite: 'Do not leave us, for you know where we are to camp in the wilderness, and you will be eyes for us.'",
    "metadata": {
      "stage": 2,
      "stage_title": "The People of the Bible",
      "level_theme": "The First Families",
      "category": "The People of the Bible",
      "challengeType": "first-families",
      "mechanic": "first-families",
      "difficulty": "moderate",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "Clue 1: Relates to Numbers 10:29-32.",
        "Clue 2: Moses urged Hobab son of Reuel the Midianite: 'Do not leave us, for you know whe...",
        "Clue 3: The answer starts with \"H\"."
      ]
    }
  },
  {
    "id": "bible-character-quest-l6-c5",
    "game_slug": "bible-character-quest",
    "level": 6,
    "challenge_index": 5,
    "question_text": "Which husband and wife were both struck dead within three hours of each other for lying to the Holy Spirit about their land proceeds?",
    "options": [
      "Ananias and Sapphira",
      "Aquila and Priscilla",
      "Philemon and Apphia",
      "Zacharias and Elizabeth"
    ],
    "correct_answer": "Ananias and Sapphira",
    "reference": "Acts 5:1-10",
    "explanation": "Ananias sold a property and kept back part of the money with his wife Sapphira's knowledge; both fell down and breathed their last when confronted by Peter.",
    "metadata": {
      "stage": 2,
      "stage_title": "The People of the Bible",
      "level_theme": "The First Families",
      "category": "The People of the Bible",
      "challengeType": "first-families",
      "mechanic": "first-families",
      "difficulty": "moderate",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "Clue 1: Relates to Acts 5:1-10.",
        "Clue 2: Ananias sold a property and kept back part of the money with his wife Sapphira's...",
        "Clue 3: The answer starts with \"A\"."
      ]
    }
  },
  {
    "id": "bible-character-quest-l7-c1",
    "game_slug": "bible-character-quest",
    "level": 7,
    "challenge_index": 1,
    "question_text": "Which nephew of Abraham was rescued from four invading Mesopotamian kings in the Valley of Siddim?",
    "options": [
      "Lot",
      "Eliezer",
      "Nahor",
      "Bethuel"
    ],
    "correct_answer": "Lot",
    "reference": "Genesis 14:11-16",
    "explanation": "Lot was taken captive when Sodom was plundered; Abram heard his kinsman was taken, armed his 318 trained men, and recovered Lot and his goods.",
    "metadata": {
      "stage": 2,
      "stage_title": "The Patriarch Files",
      "level_theme": "The Patriarch Files",
      "category": "The Patriarch Files",
      "challengeType": "patriarch-files",
      "mechanic": "patriarch-files",
      "difficulty": "moderate",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "Clue 1: Relates to Genesis 14:11-16.",
        "Clue 2: Lot was taken captive when Sodom was plundered; Abram heard his kinsman was take...",
        "Clue 3: The answer starts with \"L\"."
      ]
    }
  },
  {
    "id": "bible-character-quest-l7-c2",
    "game_slug": "bible-character-quest",
    "level": 7,
    "challenge_index": 2,
    "question_text": "Which Hittite elder of Hebron sold the field and cave of Machpelah to Abraham for four hundred shekels of silver?",
    "options": [
      "Ephron son of Zohar",
      "Mamre the Amorite",
      "Hamor the Hivite",
      "Abimelech"
    ],
    "correct_answer": "Ephron son of Zohar",
    "reference": "Genesis 23:8-16",
    "explanation": "Ephron the Hittite sold the cave of Machpelah to Abraham as a family burial ground, witnessed before the sons of Heth at the city gate.",
    "metadata": {
      "stage": 2,
      "stage_title": "The Patriarch Files",
      "level_theme": "The Patriarch Files",
      "category": "The Patriarch Files",
      "challengeType": "patriarch-files",
      "mechanic": "patriarch-files",
      "difficulty": "moderate",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "Clue 1: Relates to Genesis 23:8-16.",
        "Clue 2: Ephron the Hittite sold the cave of Machpelah to Abraham as a family burial grou...",
        "Clue 3: The answer starts with \"E\"."
      ]
    }
  },
  {
    "id": "bible-character-quest-l7-c3",
    "game_slug": "bible-character-quest",
    "level": 7,
    "challenge_index": 3,
    "question_text": "Which mother of Jacob and Esau helped Jacob secure Isaac's patriarchal blessing using goat skins on his hands and neck?",
    "options": [
      "Rebekah",
      "Sarah",
      "Leah",
      "Rachel"
    ],
    "correct_answer": "Rebekah",
    "reference": "Genesis 27:5-17",
    "explanation": "Rebekah overheard Isaac speaking to Esau, prepared savory food, and clothed Jacob in Esau's garments and goat skins to obtain the blessing.",
    "metadata": {
      "stage": 2,
      "stage_title": "The Patriarch Files",
      "level_theme": "The Patriarch Files",
      "category": "The Patriarch Files",
      "challengeType": "patriarch-files",
      "mechanic": "patriarch-files",
      "difficulty": "moderate",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "Clue 1: Relates to Genesis 27:5-17.",
        "Clue 2: Rebekah overheard Isaac speaking to Esau, prepared savory food, and clothed Jaco...",
        "Clue 3: The answer starts with \"R\"."
      ]
    }
  },
  {
    "id": "bible-character-quest-l7-c4",
    "game_slug": "bible-character-quest",
    "level": 7,
    "challenge_index": 4,
    "question_text": "Which uncle and father-in-law of Jacob substituted his older daughter Leah for Rachel on Jacob's wedding night in Paddan-aram?",
    "options": [
      "Laban",
      "Bethuel",
      "Kemuel",
      "Nahor"
    ],
    "correct_answer": "Laban",
    "reference": "Genesis 29:21-26",
    "explanation": "Laban deceived Jacob by giving him Leah instead of Rachel, justifying the act by saying it was not the custom of the country to give the younger before the firstborn.",
    "metadata": {
      "stage": 2,
      "stage_title": "The Patriarch Files",
      "level_theme": "The Patriarch Files",
      "category": "The Patriarch Files",
      "challengeType": "patriarch-files",
      "mechanic": "patriarch-files",
      "difficulty": "moderate",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "Clue 1: Relates to Genesis 29:21-26.",
        "Clue 2: Laban deceived Jacob by giving him Leah instead of Rachel, justifying the act by...",
        "Clue 3: The answer starts with \"L\"."
      ]
    }
  },
  {
    "id": "bible-character-quest-l7-c5",
    "game_slug": "bible-character-quest",
    "level": 7,
    "challenge_index": 5,
    "question_text": "Which Aramean father of Rebekah and Laban acknowledged God’s hand when Abraham’s servant asked for Rebekah as Isaac’s bride?",
    "options": [
      "Bethuel",
      "Nahor",
      "Terah",
      "Lot"
    ],
    "correct_answer": "Bethuel",
    "reference": "Genesis 24:15, 50",
    "explanation": "Bethuel, son of Milcah and Nahor (Abraham's brother), was Rebekah's father; he and Laban answered: 'The thing proceeds from the LORD.'",
    "metadata": {
      "stage": 2,
      "stage_title": "The Patriarch Files",
      "level_theme": "The Patriarch Files",
      "category": "The Patriarch Files",
      "challengeType": "patriarch-files",
      "mechanic": "patriarch-files",
      "difficulty": "moderate",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "Clue 1: Relates to Genesis 24:15, 50.",
        "Clue 2: Bethuel, son of Milcah and Nahor (Abraham's brother), was Rebekah's father; he a...",
        "Clue 3: The answer starts with \"B\"."
      ]
    }
  },
  {
    "id": "bible-character-quest-l8-c1",
    "game_slug": "bible-character-quest",
    "level": 8,
    "challenge_index": 1,
    "question_text": "Who was given the name Israel after wrestling with a divine Messenger until daybreak at the ford of the Jabbok River?",
    "options": [
      "Jacob",
      "Abraham",
      "Isaac",
      "Joseph"
    ],
    "correct_answer": "Jacob",
    "reference": "Genesis 32:24-28",
    "explanation": "The Angel said: 'Your name shall no longer be called Jacob, but Israel; for you have striven with God and with men, and have prevailed.'",
    "metadata": {
      "stage": 2,
      "stage_title": "The People of the Bible",
      "level_theme": "The Story Behind the Name",
      "category": "The People of the Bible",
      "challengeType": "story-behind-name",
      "mechanic": "story-behind-name",
      "difficulty": "moderate",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "Clue 1: Relates to Genesis 32:24-28.",
        "Clue 2: The Angel said: 'Your name shall no longer be called Jacob, but Israel; for you ...",
        "Clue 3: The answer starts with \"J\"."
      ]
    }
  },
  {
    "id": "bible-character-quest-l8-c2",
    "game_slug": "bible-character-quest",
    "level": 8,
    "challenge_index": 2,
    "question_text": "Which New Testament believer was named 'Peter' (Cephas / Rock) by Jesus after confessing Him as 'the Christ, the Son of the living God'?",
    "options": [
      "Simon son of Jonah",
      "Andrew",
      "John son of Zebedee",
      "Nathaniel"
    ],
    "correct_answer": "Simon son of Jonah",
    "reference": "Matthew 16:16-18; John 1:42",
    "explanation": "Jesus declared: 'You are Simon the son of Jonah. You shall be called Cephas' (which is translated Peter / stone).",
    "metadata": {
      "stage": 2,
      "stage_title": "The People of the Bible",
      "level_theme": "The Story Behind the Name",
      "category": "The People of the Bible",
      "challengeType": "story-behind-name",
      "mechanic": "story-behind-name",
      "difficulty": "moderate",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "Clue 1: Relates to Matthew 16:16-18; John 1:42.",
        "Clue 2: Jesus declared: 'You are Simon the son of Jonah. You shall be called Cephas' (wh...",
        "Clue 3: The answer starts with \"S\"."
      ]
    }
  },
  {
    "id": "bible-character-quest-l8-c3",
    "game_slug": "bible-character-quest",
    "level": 8,
    "challenge_index": 3,
    "question_text": "What Egyptian title of honor did Pharaoh bestow upon Joseph when appointing him prime minister over the granaries of Egypt?",
    "options": [
      "Zaphenath-paneah",
      "Potiphera",
      "Pashhur",
      "Sheshbazzar"
    ],
    "correct_answer": "Zaphenath-paneah",
    "reference": "Genesis 41:45",
    "explanation": "Pharaoh named Joseph Zaphenath-paneah and gave him Asenath daughter of Potiphera priest of On to be his wife.",
    "metadata": {
      "stage": 2,
      "stage_title": "The People of the Bible",
      "level_theme": "The Story Behind the Name",
      "category": "The People of the Bible",
      "challengeType": "story-behind-name",
      "mechanic": "story-behind-name",
      "difficulty": "moderate",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "Clue 1: Relates to Genesis 41:45.",
        "Clue 2: Pharaoh named Joseph Zaphenath-paneah and gave him Asenath daughter of Potiphera...",
        "Clue 3: The answer starts with \"Z\"."
      ]
    }
  },
  {
    "id": "bible-character-quest-l8-c4",
    "game_slug": "bible-character-quest",
    "level": 8,
    "challenge_index": 4,
    "question_text": "Which son did the dying Rachel name Ben-oni ('Son of my sorrow'), but his father Jacob renamed Benjamin ('Son of my right hand')?",
    "options": [
      "Benjamin",
      "Joseph",
      "Manasseh",
      "Ephraim"
    ],
    "correct_answer": "Benjamin",
    "reference": "Genesis 35:18",
    "explanation": "As Rachel’s soul was departing, she called his name Ben-oni; but his father called him Benjamin.",
    "metadata": {
      "stage": 2,
      "stage_title": "The People of the Bible",
      "level_theme": "The Story Behind the Name",
      "category": "The People of the Bible",
      "challengeType": "story-behind-name",
      "mechanic": "story-behind-name",
      "difficulty": "moderate",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "Clue 1: Relates to Genesis 35:18.",
        "Clue 2: As Rachel’s soul was departing, she called his name Ben-oni; but his father call...",
        "Clue 3: The answer starts with \"B\"."
      ]
    }
  },
  {
    "id": "bible-character-quest-l8-c5",
    "game_slug": "bible-character-quest",
    "level": 8,
    "challenge_index": 5,
    "question_text": "Which prophetic child was given a name meaning “swift is the booty, speedy is the prey” as a sign that Damascus and Samaria would soon be plundered?",
    "options": [
      "Maher-shalal-hash-baz",
      "Shear-jashub",
      "Lo-ammi",
      "Jezreel"
    ],
    "correct_answer": "Maher-shalal-hash-baz",
    "reference": "Isaiah 8:1-4",
    "explanation": "Isaiah was instructed to write the name Maher-shalal-hash-baz. Before the child could say “My father” or “My mother,” Assyria would carry away the wealth of Damascus and the spoil of Samaria.",
    "metadata": {
      "stage": 2,
      "stage_title": "The People of the Bible",
      "level_theme": "The Story Behind the Name",
      "category": "The People of the Bible",
      "challengeType": "story-behind-name",
      "mechanic": "story-behind-name",
      "difficulty": "moderate",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "A prophetic child received an unusually long name.",
        "The name announced the coming plunder of Damascus and Samaria.",
        "The sign concerned how quickly Assyria would take their wealth."
      ]
    },
    "clues": [
      "A prophetic child received an unusually long name.",
      "The name announced the coming plunder of Damascus and Samaria.",
      "The sign concerned how quickly Assyria would take their wealth."
    ]
  },
  {
    "id": "bible-character-quest-l9-c1",
    "game_slug": "bible-character-quest",
    "level": 9,
    "challenge_index": 1,
    "question_text": "Which son of Nahash from Rabbah of Ammon brought beds, food, and other supplies to David at Mahanaim while David was fleeing Absalom?",
    "options": [
      "Shobi",
      "Machir",
      "Barzillai",
      "Hanun"
    ],
    "correct_answer": "Shobi",
    "reference": "2 Samuel 17:27-29",
    "explanation": "Shobi son of Nahash from Rabbah, Machir from Lo-debar, and Barzillai from Rogelim supplied David and his people with provisions at Mahanaim.",
    "metadata": {
      "stage": 2,
      "stage_title": "The People of the Bible",
      "level_theme": "The Forgotten Names",
      "category": "The People of the Bible",
      "challengeType": "forgotten-names",
      "mechanic": "forgotten-names",
      "difficulty": "moderate",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "He was from Rabbah in Ammon.",
        "His father was named Nahash.",
        "He helped David's company with provisions at Mahanaim."
      ]
    },
    "clues": [
      "He was from Rabbah in Ammon.",
      "His father was named Nahash.",
      "He helped David's company with provisions at Mahanaim."
    ]
  },
  {
    "id": "bible-character-quest-l9-c2",
    "game_slug": "bible-character-quest",
    "level": 9,
    "challenge_index": 2,
    "question_text": "Which Roman official and city treasurer of Corinth sent greetings to the Roman Christians at the conclusion of Paul's epistle to the Romans?",
    "options": [
      "Erastus",
      "Quartus",
      "Tertius",
      "Gaius"
    ],
    "correct_answer": "Erastus",
    "reference": "Romans 16:23",
    "explanation": "Romans 16:23 records: 'Erastus, the city treasurer, greets you, and Quartus, a brother.'",
    "metadata": {
      "stage": 2,
      "stage_title": "The People of the Bible",
      "level_theme": "The Forgotten Names",
      "category": "The People of the Bible",
      "challengeType": "forgotten-names",
      "mechanic": "forgotten-names",
      "difficulty": "moderate",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "Clue 1: Relates to Romans 16:23.",
        "Clue 2: Romans 16:23 records: 'Erastus, the city treasurer, greets you, and Quartus, a b...",
        "Clue 3: The answer starts with \"E\"."
      ]
    }
  },
  {
    "id": "bible-character-quest-l9-c3",
    "game_slug": "bible-character-quest",
    "level": 9,
    "challenge_index": 3,
    "question_text": "Which scribe actually penned the words of the Epistle to the Romans as Paul dictated them, adding his own personal greeting in chapter 16?",
    "options": [
      "Tertius",
      "Tychicus",
      "Onesimus",
      "Silas"
    ],
    "correct_answer": "Tertius",
    "reference": "Romans 16:22",
    "explanation": "Romans 16:22 states: 'I, Tertius, who wrote this epistle, greet you in the Lord.'",
    "metadata": {
      "stage": 2,
      "stage_title": "The People of the Bible",
      "level_theme": "The Forgotten Names",
      "category": "The People of the Bible",
      "challengeType": "forgotten-names",
      "mechanic": "forgotten-names",
      "difficulty": "moderate",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "Clue 1: Relates to Romans 16:22.",
        "Clue 2: Romans 16:22 states: 'I, Tertius, who wrote this epistle, greet you in the Lord....",
        "Clue 3: The answer starts with \"T\"."
      ]
    }
  },
  {
    "id": "bible-character-quest-l9-c4",
    "game_slug": "bible-character-quest",
    "level": 9,
    "challenge_index": 4,
    "question_text": "Which daughter of Zelophehad was one of five sisters who stood before Moses to claim land rights in Canaan when their father died without sons?",
    "options": [
      "Mahlah",
      "Keturah",
      "Zipporah",
      "Deborah"
    ],
    "correct_answer": "Mahlah",
    "reference": "Numbers 27:1-7; 36:11",
    "explanation": "Numbers 27:1 names the five daughters of Zelophehad: Mahlah, Noah, Hoglah, Milcah, and Tirzah, who successfully secured an inheritance in Israel.",
    "metadata": {
      "stage": 2,
      "stage_title": "The People of the Bible",
      "level_theme": "The Forgotten Names",
      "category": "The People of the Bible",
      "challengeType": "forgotten-names",
      "mechanic": "forgotten-names",
      "difficulty": "moderate",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "Clue 1: Relates to Numbers 27:1-7; 36:11.",
        "Clue 2: Numbers 27:1 names the five daughters of Zelophehad: Mahlah, Noah, Hoglah, Milca...",
        "Clue 3: The answer starts with \"M\"."
      ]
    }
  },
  {
    "id": "bible-character-quest-l9-c5",
    "game_slug": "bible-character-quest",
    "level": 9,
    "challenge_index": 5,
    "question_text": "Which Archite counselled David and later returned to Jerusalem at David's request to frustrate Ahithophel's advice during Absalom's revolt?",
    "options": [
      "Hushai the Archite",
      "Ahithophel",
      "Joab",
      "Shimei son of Gera"
    ],
    "correct_answer": "Hushai the Archite",
    "reference": "2 Samuel 15:32-37; 17:5-14",
    "explanation": "David sent Hushai back to Jerusalem to counter Ahithophel's counsel. Hushai's advice was accepted by Absalom, giving David time to escape and regroup.",
    "metadata": {
      "stage": 2,
      "stage_title": "The People of the Bible",
      "level_theme": "The Forgotten Names",
      "category": "The People of the Bible",
      "challengeType": "forgotten-names",
      "mechanic": "forgotten-names",
      "difficulty": "moderate",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "I was known as an Archite and was loyal to David.",
        "David sent me back to Jerusalem during Absalom's rebellion.",
        "My counsel helped frustrate Ahithophel's plan."
      ]
    },
    "clues": [
      "I was known as an Archite and was loyal to David.",
      "David sent me back to Jerusalem during Absalom's rebellion.",
      "My counsel helped frustrate Ahithophel's plan."
    ]
  },
  {
    "id": "bible-character-quest-l10-c1",
    "game_slug": "bible-character-quest",
    "level": 10,
    "challenge_index": 1,
    "question_text": "Which master craftsman of the tribe of Judah was the son of Uri, son of Hur, appointed by God to build the ark of the covenant and tabernacle furnishings?",
    "options": [
      "Bezalel",
      "Oholiab",
      "Hiram",
      "Ithamar"
    ],
    "correct_answer": "Bezalel",
    "reference": "Exodus 31:1-5; 35:30",
    "explanation": "Exodus 31:2 identifies Bezalel son of Uri, son of Hur, of the tribe of Judah, filled with the Spirit for artistic craftsmanship.",
    "metadata": {
      "stage": 2,
      "stage_title": "The People of the Bible",
      "level_theme": "Family Boss Round",
      "category": "The People of the Bible",
      "challengeType": "family-boss",
      "mechanic": "family-boss",
      "difficulty": "moderate",
      "timerSeconds": 25,
      "curated": true,
      "clues": [
        "Clue 1: Relates to Exodus 31:1-5; 35:30.",
        "Clue 2: Exodus 31:2 identifies Bezalel son of Uri, son of Hur, of the tribe of Judah, fi...",
        "Clue 3: The answer starts with \"B\"."
      ]
    }
  },
  {
    "id": "bible-character-quest-l10-c2",
    "game_slug": "bible-character-quest",
    "level": 10,
    "challenge_index": 2,
    "question_text": "Which Hebrew midwife was named alongside Shiphrah for defying Pharaoh's order to kill infant boys?",
    "options": [
      "Puah",
      "Jochebed",
      "Miriam",
      "Elisheba"
    ],
    "correct_answer": "Puah",
    "reference": "Exodus 1:15-17",
    "explanation": "Exodus 1:15 names the two Hebrew midwives as Shiphrah and Puah, who feared God and preserved the male babies.",
    "metadata": {
      "stage": 2,
      "stage_title": "The People of the Bible",
      "level_theme": "Family Boss Round",
      "category": "The People of the Bible",
      "challengeType": "family-boss",
      "mechanic": "family-boss",
      "difficulty": "moderate",
      "timerSeconds": 25,
      "curated": true,
      "clues": [
        "Clue 1: Relates to Exodus 1:15-17.",
        "Clue 2: Exodus 1:15 names the two Hebrew midwives as Shiphrah and Puah, who feared God a...",
        "Clue 3: The answer starts with \"P\"."
      ]
    }
  },
  {
    "id": "bible-character-quest-l10-c3",
    "game_slug": "bible-character-quest",
    "level": 10,
    "challenge_index": 3,
    "question_text": "Which prominent sister of Joab and Abishai was mother to Asahel, her sons frequently known as 'the sons of Zeruiah'?",
    "options": [
      "Zeruiah",
      "Abigail",
      "Michal",
      "Tamar"
    ],
    "correct_answer": "Zeruiah",
    "reference": "1 Chronicles 2:16; 2 Samuel 2:18",
    "explanation": "Zeruiah was a sister of David and mother of David’s three top military leaders: Joab, Abishai, and Asahel.",
    "metadata": {
      "stage": 2,
      "stage_title": "The People of the Bible",
      "level_theme": "Family Boss Round",
      "category": "The People of the Bible",
      "challengeType": "family-boss",
      "mechanic": "family-boss",
      "difficulty": "moderate",
      "timerSeconds": 25,
      "curated": true,
      "clues": [
        "Clue 1: Relates to 1 Chronicles 2:16; 2 Samuel 2:18.",
        "Clue 2: Zeruiah was a sister of David and mother of David’s three top military leaders: ...",
        "Clue 3: The answer starts with \"Z\"."
      ]
    }
  },
  {
    "id": "bible-character-quest-l10-c4",
    "game_slug": "bible-character-quest",
    "level": 10,
    "challenge_index": 4,
    "question_text": "Which wife of King Herod’s household steward Chuza provided financial support and food for Jesus and His disciples during His Galilean ministry?",
    "options": [
      "Joanna",
      "Susanna",
      "Mary Magdalene",
      "Salome"
    ],
    "correct_answer": "Joanna",
    "reference": "Luke 8:3; 24:10",
    "explanation": "Luke 8:3 names Joanna, the wife of Chuza, Herod’s business manager, who ministered to Jesus out of her personal substance.",
    "metadata": {
      "stage": 2,
      "stage_title": "The People of the Bible",
      "level_theme": "Family Boss Round",
      "category": "The People of the Bible",
      "challengeType": "family-boss",
      "mechanic": "family-boss",
      "difficulty": "moderate",
      "timerSeconds": 25,
      "curated": true,
      "clues": [
        "Clue 1: Relates to Luke 8:3; 24:10.",
        "Clue 2: Luke 8:3 names Joanna, the wife of Chuza, Herod’s business manager, who minister...",
        "Clue 3: The answer starts with \"J\"."
      ]
    }
  },
  {
    "id": "bible-character-quest-l10-c5",
    "game_slug": "bible-character-quest",
    "level": 10,
    "challenge_index": 5,
    "question_text": "Which prophetess and wife of Shallum keeper of the wardrobe was consulted by King Josiah’s royal delegation when the Book of the Law was found in the temple?",
    "options": [
      "Huldah",
      "Deborah",
      "Miriam",
      "Anna"
    ],
    "correct_answer": "Huldah",
    "reference": "2 Kings 22:14-20; 2 Chronicles 34:22",
    "explanation": "The high priest Hilkiah and Josiah's officials went to Huldah the prophetess, who lived in Jerusalem in the Second Quarter, to inquire of the LORD.",
    "metadata": {
      "stage": 2,
      "stage_title": "The People of the Bible",
      "level_theme": "Family Boss Round",
      "category": "The People of the Bible",
      "challengeType": "family-boss",
      "mechanic": "family-boss",
      "difficulty": "moderate",
      "timerSeconds": 25,
      "curated": true,
      "clues": [
        "Clue 1: Relates to 2 Kings 22:14-20; 2 Chronicles 34:22.",
        "Clue 2: The high priest Hilkiah and Josiah's officials went to Huldah the prophetess, wh...",
        "Clue 3: The answer starts with \"H\"."
      ]
    }
  },
  {
    "id": "bible-character-quest-l11-c1",
    "game_slug": "bible-character-quest",
    "level": 11,
    "challenge_index": 1,
    "question_text": "Which Amorite king of Jerusalem formed a five-king southern alliance to attack Gibeon after Gibeon made peace with Joshua?",
    "options": [
      "Adoni-zedek",
      "Hoham of Hebron",
      "Piram of Jarmuth",
      "Debir of Eglon"
    ],
    "correct_answer": "Adoni-zedek",
    "reference": "Joshua 10:1-5",
    "explanation": "Adoni-zedek king of Jerusalem heard that Joshua had taken Ai and made peace with Gibeon, so he rallied four fellow kings to besiege Gibeon.",
    "metadata": {
      "stage": 3,
      "stage_title": "Leaders, Deliverers and Judges",
      "level_theme": "Leaders and Their Circles",
      "category": "Leaders, Deliverers and Judges",
      "challengeType": "leaders-and-circles",
      "mechanic": "leaders-and-circles",
      "difficulty": "moderate",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "Clue 1: Relates to Joshua 10:1-5.",
        "Clue 2: Adoni-zedek king of Jerusalem heard that Joshua had taken Ai and made peace with...",
        "Clue 3: The answer starts with \"A\"."
      ]
    }
  },
  {
    "id": "bible-character-quest-l11-c2",
    "game_slug": "bible-character-quest",
    "level": 11,
    "challenge_index": 2,
    "question_text": "Which craftsman of the tribe of Dan served as chief assistant alongside Bezalel during the construction of the tabernacle?",
    "options": [
      "Oholiab son of Ahisamach",
      "Hur of Judah",
      "Ithamar son of Aaron",
      "Eleazar"
    ],
    "correct_answer": "Oholiab son of Ahisamach",
    "reference": "Exodus 31:6; 38:23",
    "explanation": "Oholiab son of Ahisamach of the tribe of Dan was appointed as an engraver, designer, and embroiderer working with Bezalel.",
    "metadata": {
      "stage": 3,
      "stage_title": "Leaders, Deliverers and Judges",
      "level_theme": "Leaders and Their Circles",
      "category": "Leaders, Deliverers and Judges",
      "challengeType": "leaders-and-circles",
      "mechanic": "leaders-and-circles",
      "difficulty": "moderate",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "Clue 1: Relates to Exodus 31:6; 38:23.",
        "Clue 2: Oholiab son of Ahisamach of the tribe of Dan was appointed as an engraver, desig...",
        "Clue 3: The answer starts with \"O\"."
      ]
    }
  },
  {
    "id": "bible-character-quest-l11-c3",
    "game_slug": "bible-character-quest",
    "level": 11,
    "challenge_index": 3,
    "question_text": "Which faithful co-worker was sent by Paul to Philippi, described as his 'brother, fellow worker, and fellow soldier', who risked his life for Christ's work?",
    "options": [
      "Epaphroditus",
      "Timothy",
      "Silas",
      "Tychicus"
    ],
    "correct_answer": "Epaphroditus",
    "reference": "Philippians 2:25-30",
    "explanation": "Paul praised Epaphroditus as his brother and fellow soldier who came close to death for the work of Christ to supply what was lacking in service.",
    "metadata": {
      "stage": 3,
      "stage_title": "Leaders, Deliverers and Judges",
      "level_theme": "Leaders and Their Circles",
      "category": "Leaders, Deliverers and Judges",
      "challengeType": "leaders-and-circles",
      "mechanic": "leaders-and-circles",
      "difficulty": "moderate",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "Clue 1: Relates to Philippians 2:25-30.",
        "Clue 2: Paul praised Epaphroditus as his brother and fellow soldier who came close to de...",
        "Clue 3: The answer starts with \"E\"."
      ]
    }
  },
  {
    "id": "bible-character-quest-l11-c4",
    "game_slug": "bible-character-quest",
    "level": 11,
    "challenge_index": 4,
    "question_text": "Which nephew of Caleb conquered Kiriath-sepher (Debir) to win Caleb's daughter Achsah and later became Israel's very first judge?",
    "options": [
      "Othniel son of Kenaz",
      "Ehud son of Gera",
      "Shamgar son of Anath",
      "Barak"
    ],
    "correct_answer": "Othniel son of Kenaz",
    "reference": "Joshua 15:16-17; Judges 3:9-11",
    "explanation": "Othniel captured Kiriath-sepher, married Achsah, and later delivered Israel from the oppression of Cushan-rishathaim.",
    "metadata": {
      "stage": 3,
      "stage_title": "Leaders, Deliverers and Judges",
      "level_theme": "Leaders and Their Circles",
      "category": "Leaders, Deliverers and Judges",
      "challengeType": "leaders-and-circles",
      "mechanic": "leaders-and-circles",
      "difficulty": "moderate",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "Clue 1: Relates to Joshua 15:16-17; Judges 3:9-11.",
        "Clue 2: Othniel captured Kiriath-sepher, married Achsah, and later delivered Israel from...",
        "Clue 3: The answer starts with \"O\"."
      ]
    }
  },
  {
    "id": "bible-character-quest-l11-c5",
    "game_slug": "bible-character-quest",
    "level": 11,
    "challenge_index": 5,
    "question_text": "Which elder in Jerusalem and doctor of the law stood up in the Sanhedrin, counseling restraint against executing Peter and the apostles?",
    "options": [
      "Gamaliel",
      "Nicodemus",
      "Caiaphas",
      "Alexander"
    ],
    "correct_answer": "Gamaliel",
    "reference": "Acts 5:34-39",
    "explanation": "Gamaliel, a Pharisee and respected teacher of the law (who had taught Saul of Tarsus), advised that if the work was of God, they could not overthrow it.",
    "metadata": {
      "stage": 3,
      "stage_title": "Leaders, Deliverers and Judges",
      "level_theme": "Leaders and Their Circles",
      "category": "Leaders, Deliverers and Judges",
      "challengeType": "leaders-and-circles",
      "mechanic": "leaders-and-circles",
      "difficulty": "moderate",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "Clue 1: Relates to Acts 5:34-39.",
        "Clue 2: Gamaliel, a Pharisee and respected teacher of the law (who had taught Saul of Ta...",
        "Clue 3: The answer starts with \"G\"."
      ]
    }
  },
  {
    "id": "bible-character-quest-l12-c1",
    "game_slug": "bible-character-quest",
    "level": 12,
    "challenge_index": 1,
    "question_text": "Which Levite led a famous wilderness rebellion with 250 well-known community leaders, claiming that all the congregation was holy?",
    "options": [
      "Korah",
      "Dathan",
      "Abiram",
      "On"
    ],
    "correct_answer": "Korah",
    "reference": "Numbers 16:1-3, 31-35",
    "explanation": "Korah son of Izhar rose up against Moses and Aaron; the earth opened its mouth and swallowed Korah, Dathan, Abiram, and their households.",
    "metadata": {
      "stage": 3,
      "stage_title": "Leaders, Deliverers and Judges",
      "level_theme": "The Wilderness People",
      "category": "Leaders, Deliverers and Judges",
      "challengeType": "wilderness-people",
      "mechanic": "wilderness-people",
      "difficulty": "moderate",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "Clue 1: Relates to Numbers 16:1-3, 31-35.",
        "Clue 2: Korah son of Izhar rose up against Moses and Aaron; the earth opened its mouth a...",
        "Clue 3: The answer starts with \"K\"."
      ]
    }
  },
  {
    "id": "bible-character-quest-l12-c2",
    "game_slug": "bible-character-quest",
    "level": 12,
    "challenge_index": 2,
    "question_text": "Which two elders remained in the camp and prophesied when the Holy Spirit rested upon them, despite not going out to the tabernacle?",
    "options": [
      "Eldad and Medad",
      "Nadab and Abihu",
      "Hophni and Phinehas",
      "Dathan and Abiram"
    ],
    "correct_answer": "Eldad and Medad",
    "reference": "Numbers 11:26-29",
    "explanation": "Eldad and Medad prophesied in the camp; when Joshua asked Moses to forbid them, Moses replied, 'Are you zealous for my sake? Oh, that all the LORD’s people were prophets!'",
    "metadata": {
      "stage": 3,
      "stage_title": "Leaders, Deliverers and Judges",
      "level_theme": "The Wilderness People",
      "category": "Leaders, Deliverers and Judges",
      "challengeType": "wilderness-people",
      "mechanic": "wilderness-people",
      "difficulty": "moderate",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "Clue 1: Relates to Numbers 11:26-29.",
        "Clue 2: Eldad and Medad prophesied in the camp; when Joshua asked Moses to forbid them, ...",
        "Clue 3: The answer starts with \"E\"."
      ]
    }
  },
  {
    "id": "bible-character-quest-l12-c3",
    "game_slug": "bible-character-quest",
    "level": 12,
    "challenge_index": 3,
    "question_text": "Which Midianite woman, daughter of tribal chief Zur, was executed by Phinehas alongside the Simeonite prince Zimri at Peor?",
    "options": [
      "Cozbi",
      "Zipporah",
      "Shelomith",
      "Hoglah"
    ],
    "correct_answer": "Cozbi",
    "reference": "Numbers 25:15-18",
    "explanation": "Numbers 25:15 identifies Cozbi, daughter of Zur, a leader of an ancestral house in Midian, slain during the plague at Baal-peor.",
    "metadata": {
      "stage": 3,
      "stage_title": "Leaders, Deliverers and Judges",
      "level_theme": "The Wilderness People",
      "category": "Leaders, Deliverers and Judges",
      "challengeType": "wilderness-people",
      "mechanic": "wilderness-people",
      "difficulty": "moderate",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "Clue 1: Relates to Numbers 25:15-18.",
        "Clue 2: Numbers 25:15 identifies Cozbi, daughter of Zur, a leader of an ancestral house ...",
        "Clue 3: The answer starts with \"C\"."
      ]
    }
  },
  {
    "id": "bible-character-quest-l12-c4",
    "game_slug": "bible-character-quest",
    "level": 12,
    "challenge_index": 4,
    "question_text": "Which giant Amorite king of Bashan was defeated at Edrei, whose famous iron bedstead measured nine cubits long?",
    "options": [
      "Og",
      "Sihon",
      "Balak",
      "Adoni-zedek"
    ],
    "correct_answer": "Og",
    "reference": "Numbers 21:33-35; Deuteronomy 3:11",
    "explanation": "Og king of Bashan was the last remnant of the giant Rephaim; Moses and the Israelites conquered his sixty fortified cities in the Argob region.",
    "metadata": {
      "stage": 3,
      "stage_title": "Leaders, Deliverers and Judges",
      "level_theme": "The Wilderness People",
      "category": "Leaders, Deliverers and Judges",
      "challengeType": "wilderness-people",
      "mechanic": "wilderness-people",
      "difficulty": "moderate",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "Clue 1: Relates to Numbers 21:33-35; Deuteronomy 3:11.",
        "Clue 2: Og king of Bashan was the last remnant of the giant Rephaim; Moses and the Israe...",
        "Clue 3: The answer starts with \"O\"."
      ]
    }
  },
  {
    "id": "bible-character-quest-l12-c5",
    "game_slug": "bible-character-quest",
    "level": 12,
    "challenge_index": 5,
    "question_text": "Which Moabite king hired the Mesopotamian seer Balaam to put a curse upon the children of Israel camping on the plains of Moab?",
    "options": [
      "Balak son of Zippor",
      "Eglon",
      "Mesha",
      "Hadad"
    ],
    "correct_answer": "Balak son of Zippor",
    "reference": "Numbers 22:2-6",
    "explanation": "Balak king of Moab sent elders to Balaam with fees for divination, but God forbade Balaam from cursing the people whom He had blessed.",
    "metadata": {
      "stage": 3,
      "stage_title": "Leaders, Deliverers and Judges",
      "level_theme": "The Wilderness People",
      "category": "Leaders, Deliverers and Judges",
      "challengeType": "wilderness-people",
      "mechanic": "wilderness-people",
      "difficulty": "moderate",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "Clue 1: Relates to Numbers 22:2-6.",
        "Clue 2: Balak king of Moab sent elders to Balaam with fees for divination, but God forba...",
        "Clue 3: The answer starts with \"B\"."
      ]
    }
  },
  {
    "id": "bible-character-quest-l13-c1",
    "game_slug": "bible-character-quest",
    "level": 13,
    "challenge_index": 1,
    "question_text": "Which judge delivered Israel from the Philistines by killing six hundred men with an oxgoad?",
    "options": [
      "Shamgar son of Anath",
      "Ehud son of Gera",
      "Othniel son of Kenaz",
      "Tola"
    ],
    "correct_answer": "Shamgar son of Anath",
    "reference": "Judges 3:31",
    "explanation": "After Ehud came Shamgar son of Anath, who struck down six hundred Philistines with an oxgoad and delivered Israel.",
    "metadata": {
      "stage": 3,
      "stage_title": "Leaders, Deliverers and Judges",
      "level_theme": "Judges' Arena",
      "category": "Leaders, Deliverers and Judges",
      "challengeType": "judges-arena",
      "mechanic": "judges-arena",
      "difficulty": "hard",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "Clue 1: Relates to Judges 3:31.",
        "Clue 2: After Ehud came Shamgar son of Anath, who struck down six hundred Philistines wi...",
        "Clue 3: The answer starts with \"S\"."
      ]
    }
  },
  {
    "id": "bible-character-quest-l13-c2",
    "game_slug": "bible-character-quest",
    "level": 13,
    "challenge_index": 2,
    "question_text": "Which Kenite woman invited Canaanite general Sisera into her tent, gave him milk, and drove a tent peg through his temple?",
    "options": [
      "Jael",
      "Deborah",
      "Achsah",
      "Manoah's wife"
    ],
    "correct_answer": "Jael",
    "reference": "Judges 4:17-22; 5:24-27",
    "explanation": "Jael, wife of Heber the Kenite, covered the exhausted Sisera with a rug, gave him curdled milk, and killed him with a tent peg and hammer.",
    "metadata": {
      "stage": 3,
      "stage_title": "Leaders, Deliverers and Judges",
      "level_theme": "Judges' Arena",
      "category": "Leaders, Deliverers and Judges",
      "challengeType": "judges-arena",
      "mechanic": "judges-arena",
      "difficulty": "hard",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "Clue 1: Relates to Judges 4:17-22; 5:24-27.",
        "Clue 2: Jael, wife of Heber the Kenite, covered the exhausted Sisera with a rug, gave hi...",
        "Clue 3: The answer starts with \"J\"."
      ]
    }
  },
  {
    "id": "bible-character-quest-l13-c3",
    "game_slug": "bible-character-quest",
    "level": 13,
    "challenge_index": 3,
    "question_text": "Which servant of Gideon accompanied him down into the Midianite camp to overhear the dream of the tumbling loaf of barley bread?",
    "options": [
      "Purah",
      "Joash",
      "Jether",
      "Phinehas"
    ],
    "correct_answer": "Purah",
    "reference": "Judges 7:9-11",
    "explanation": "God told Gideon: 'If you are afraid to go down, go down to the camp with Purah your servant,' where they overheard the enemy dream.",
    "metadata": {
      "stage": 3,
      "stage_title": "Leaders, Deliverers and Judges",
      "level_theme": "Judges' Arena",
      "category": "Leaders, Deliverers and Judges",
      "challengeType": "judges-arena",
      "mechanic": "judges-arena",
      "difficulty": "hard",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "Clue 1: Relates to Judges 7:9-11.",
        "Clue 2: God told Gideon: 'If you are afraid to go down, go down to the camp with Purah y...",
        "Clue 3: The answer starts with \"P\"."
      ]
    }
  },
  {
    "id": "bible-character-quest-l13-c4",
    "game_slug": "bible-character-quest",
    "level": 13,
    "challenge_index": 4,
    "question_text": "Which judge of Gilead made a solemn vow before the battle with the Ammonites that resulted in his daughter coming out first to meet him?",
    "options": [
      "Jephthah",
      "Gideon",
      "Samson",
      "Barak"
    ],
    "correct_answer": "Jephthah",
    "reference": "Judges 11:30-40",
    "explanation": "Jephthah the Gileadite vowed that whatever came out of the doors of his house to meet him on his return would be offered to the LORD.",
    "metadata": {
      "stage": 3,
      "stage_title": "Leaders, Deliverers and Judges",
      "level_theme": "Judges' Arena",
      "category": "Leaders, Deliverers and Judges",
      "challengeType": "judges-arena",
      "mechanic": "judges-arena",
      "difficulty": "hard",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "Clue 1: Relates to Judges 11:30-40.",
        "Clue 2: Jephthah the Gileadite vowed that whatever came out of the doors of his house to...",
        "Clue 3: The answer starts with \"J\"."
      ]
    }
  },
  {
    "id": "bible-character-quest-l13-c5",
    "game_slug": "bible-character-quest",
    "level": 13,
    "challenge_index": 5,
    "question_text": "Which ruler from Pirathon in Ephraim had forty sons and thirty grandsons who rode on seventy donkeys?",
    "options": [
      "Abdon son of Hillel",
      "Jair the Gileadite",
      "Ibzan of Bethlehem",
      "Elon the Zebulunite"
    ],
    "correct_answer": "Abdon son of Hillel",
    "reference": "Judges 12:13-15",
    "explanation": "Abdon son of Hillel the Pirathonite judged Israel eight years; his family's seventy riding donkeys symbolized wealth and prestige.",
    "metadata": {
      "stage": 3,
      "stage_title": "Leaders, Deliverers and Judges",
      "level_theme": "Judges' Arena",
      "category": "Leaders, Deliverers and Judges",
      "challengeType": "judges-arena",
      "mechanic": "judges-arena",
      "difficulty": "hard",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "Clue 1: Relates to Judges 12:13-15.",
        "Clue 2: Abdon son of Hillel the Pirathonite judged Israel eight years; his family's seve...",
        "Clue 3: The answer starts with \"A\"."
      ]
    }
  },
  {
    "id": "bible-character-quest-l14-c1",
    "game_slug": "bible-character-quest",
    "level": 14,
    "challenge_index": 1,
    "question_text": "Which Canaanite innkeeper of Jericho hid Joshua's two spies on her roof beneath stalks of flax and hung a scarlet cord from her window?",
    "options": [
      "Rahab",
      "Tamar",
      "Jael",
      "Ruth"
    ],
    "correct_answer": "Rahab",
    "reference": "Joshua 2:1-21; Hebrews 11:31",
    "explanation": "Rahab the harlot received the spies in peace, placed her faith in the God of Israel, hung a scarlet thread in her window, and was spared.",
    "metadata": {
      "stage": 3,
      "stage_title": "Leaders, Deliverers and Judges",
      "level_theme": "Unexpected Heroes",
      "category": "Leaders, Deliverers and Judges",
      "challengeType": "unexpected-heroes",
      "mechanic": "unexpected-heroes",
      "difficulty": "hard",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "Clue 1: Relates to Joshua 2:1-21; Hebrews 11:31.",
        "Clue 2: Rahab the harlot received the spies in peace, placed her faith in the God of Isr...",
        "Clue 3: The answer starts with \"R\"."
      ]
    }
  },
  {
    "id": "bible-character-quest-l14-c2",
    "game_slug": "bible-character-quest",
    "level": 14,
    "challenge_index": 2,
    "question_text": "Which Moabite widow chose to cling to her mother-in-law Naomi, saying, 'Your people shall be my people, and your God my God'?",
    "options": [
      "Ruth",
      "Orpah",
      "Cozbi",
      "Zeresh"
    ],
    "correct_answer": "Ruth",
    "reference": "Ruth 1:14-17; 4:13-17",
    "explanation": "Ruth left her homeland in Moab, gleaned in the fields of Boaz in Bethlehem, and became the great-grandmother of King David.",
    "metadata": {
      "stage": 3,
      "stage_title": "Leaders, Deliverers and Judges",
      "level_theme": "Unexpected Heroes",
      "category": "Leaders, Deliverers and Judges",
      "challengeType": "unexpected-heroes",
      "mechanic": "unexpected-heroes",
      "difficulty": "hard",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "Clue 1: Relates to Ruth 1:14-17; 4:13-17.",
        "Clue 2: Ruth left her homeland in Moab, gleaned in the fields of Boaz in Bethlehem, and ...",
        "Clue 3: The answer starts with \"R\"."
      ]
    }
  },
  {
    "id": "bible-character-quest-l14-c3",
    "game_slug": "bible-character-quest",
    "level": 14,
    "challenge_index": 3,
    "question_text": "Which Roman centurion stationed in Caesarea was directed by an angel to send for Peter at Joppa, becoming the first Gentile convert in Acts 10?",
    "options": [
      "Cornelius",
      "Julius",
      "Claudius Lysias",
      "Sergius Paulus"
    ],
    "correct_answer": "Cornelius",
    "reference": "Acts 10:1-8, 44-48",
    "explanation": "Cornelius was a centurion of the Italian Cohort, a devout man who feared God with all his household; Peter baptized him after the Holy Spirit fell.",
    "metadata": {
      "stage": 3,
      "stage_title": "Leaders, Deliverers and Judges",
      "level_theme": "Unexpected Heroes",
      "category": "Leaders, Deliverers and Judges",
      "challengeType": "unexpected-heroes",
      "mechanic": "unexpected-heroes",
      "difficulty": "hard",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "Clue 1: Relates to Acts 10:1-8, 44-48.",
        "Clue 2: Cornelius was a centurion of the Italian Cohort, a devout man who feared God wit...",
        "Clue 3: The answer starts with \"C\"."
      ]
    }
  },
  {
    "id": "bible-character-quest-l14-c4",
    "game_slug": "bible-character-quest",
    "level": 14,
    "challenge_index": 4,
    "question_text": "Which high official of Candace queen of the Ethiopians was reading Isaiah 53 in his chariot when Philip the evangelist joined him?",
    "options": [
      "The Ethiopian eunuch",
      "Ebed-Melech",
      "Blastus",
      "Manaen"
    ],
    "correct_answer": "The Ethiopian eunuch",
    "reference": "Acts 8:26-39",
    "explanation": "The Ethiopian treasurer was returning from worshiping in Jerusalem; Philip explained the gospel of Jesus from Isaiah, and baptized him in water beside the road.",
    "metadata": {
      "stage": 3,
      "stage_title": "Leaders, Deliverers and Judges",
      "level_theme": "Unexpected Heroes",
      "category": "Leaders, Deliverers and Judges",
      "challengeType": "unexpected-heroes",
      "mechanic": "unexpected-heroes",
      "difficulty": "hard",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "Clue 1: Relates to Acts 8:26-39.",
        "Clue 2: The Ethiopian treasurer was returning from worshiping in Jerusalem; Philip expla...",
        "Clue 3: The answer starts with \"T\"."
      ]
    }
  },
  {
    "id": "bible-character-quest-l14-c5",
    "game_slug": "bible-character-quest",
    "level": 14,
    "challenge_index": 5,
    "question_text": "Which wealthy resident of Arimathea and member of the Sanhedrin went boldly to Pilate to ask for the body of Jesus for burial in his own new tomb?",
    "options": [
      "Joseph of Arimathea",
      "Nicodemus",
      "Gamaliel",
      "Simon of Cyrene"
    ],
    "correct_answer": "Joseph of Arimathea",
    "reference": "Matthew 27:57-60; Mark 15:43; John 19:38",
    "explanation": "Joseph of Arimathea was a rich disciple and council member who had not consented to their counsel; he wrapped Jesus' body in clean linen and placed it in his own rock-hewn tomb.",
    "metadata": {
      "stage": 3,
      "stage_title": "Leaders, Deliverers and Judges",
      "level_theme": "Unexpected Heroes",
      "category": "Leaders, Deliverers and Judges",
      "challengeType": "unexpected-heroes",
      "mechanic": "unexpected-heroes",
      "difficulty": "hard",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "Clue 1: Relates to Matthew 27:57-60; Mark 15:43; John 19:38.",
        "Clue 2: Joseph of Arimathea was a rich disciple and council member who had not consented...",
        "Clue 3: The answer starts with \"J\"."
      ]
    }
  },
  {
    "id": "bible-character-quest-l15-c1",
    "game_slug": "bible-character-quest",
    "level": 15,
    "challenge_index": 1,
    "question_text": "Which Danite judge was born to Manoah and his barren wife, tore a young lion with his bare hands, and pushed down the pillars of the Philistine temple of Dagon?",
    "options": [
      "Samson",
      "Gideon",
      "Jephthah",
      "Barak"
    ],
    "correct_answer": "Samson",
    "reference": "Judges 13:2-5; 14:5-6; 16:28-30",
    "explanation": "Samson was a lifelong Nazirite of extraordinary strength who judged Israel twenty years and brought down the Philistine temple in Gaza at his death.",
    "metadata": {
      "stage": 3,
      "stage_title": "Leaders, Deliverers and Judges",
      "level_theme": "Deliverer Showdown",
      "category": "Leaders, Deliverers and Judges",
      "challengeType": "deliverer-showdown",
      "mechanic": "deliverer-showdown",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true,
      "clues": [
        "Clue 1: Relates to Judges 13:2-5; 14:5-6; 16:28-30.",
        "Clue 2: Samson was a lifelong Nazirite of extraordinary strength who judged Israel twent...",
        "Clue 3: The answer starts with \"S\"."
      ]
    }
  },
  {
    "id": "bible-character-quest-l15-c2",
    "game_slug": "bible-character-quest",
    "level": 15,
    "challenge_index": 2,
    "question_text": "Which son of Joash the Abiezrite tore down his father’s altar of Baal, reduced his army from 32,000 to 300 men, and attacked with torches in clay pitchers?",
    "options": [
      "Gideon (Jerubbaal)",
      "Barak",
      "Othniel",
      "Jotham"
    ],
    "correct_answer": "Gideon (Jerubbaal)",
    "reference": "Judges 6:25-32; 7:1-22",
    "explanation": "Gideon was named Jerubbaal after contending with Baal's altar; with three hundred men blowing trumpets and breaking pitchers, he routed the Midianites.",
    "metadata": {
      "stage": 3,
      "stage_title": "Leaders, Deliverers and Judges",
      "level_theme": "Deliverer Showdown",
      "category": "Leaders, Deliverers and Judges",
      "challengeType": "deliverer-showdown",
      "mechanic": "deliverer-showdown",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true,
      "clues": [
        "Clue 1: Relates to Judges 6:25-32; 7:1-22.",
        "Clue 2: Gideon was named Jerubbaal after contending with Baal's altar; with three hundre...",
        "Clue 3: The answer starts with \"G\"."
      ]
    }
  },
  {
    "id": "bible-character-quest-l15-c3",
    "game_slug": "bible-character-quest",
    "level": 15,
    "challenge_index": 3,
    "question_text": "Which apostle was miraculously freed from Herod Agrippa’s inner prison by an angel who struck his side, while the church prayed earnestly at Mary’s house?",
    "options": [
      "Peter",
      "John",
      "Paul",
      "James"
    ],
    "correct_answer": "Peter",
    "reference": "Acts 12:5-11",
    "explanation": "Peter was sleeping between two soldiers bound with two chains when an angel woke him, the chains fell off, and the iron gate leading into the city opened by itself.",
    "metadata": {
      "stage": 3,
      "stage_title": "Leaders, Deliverers and Judges",
      "level_theme": "Deliverer Showdown",
      "category": "Leaders, Deliverers and Judges",
      "challengeType": "deliverer-showdown",
      "mechanic": "deliverer-showdown",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true,
      "clues": [
        "Clue 1: Relates to Acts 12:5-11.",
        "Clue 2: Peter was sleeping between two soldiers bound with two chains when an angel woke...",
        "Clue 3: The answer starts with \"P\"."
      ]
    }
  },
  {
    "id": "bible-character-quest-l15-c4",
    "game_slug": "bible-character-quest",
    "level": 15,
    "challenge_index": 4,
    "question_text": "Which missionary companion was stripped, beaten with rods, and imprisoned in stocks alongside Paul at Philippi, singing hymns to God at midnight?",
    "options": [
      "Silas",
      "Barnabas",
      "Timothy",
      "Luke"
    ],
    "correct_answer": "Silas",
    "reference": "Acts 16:22-25",
    "explanation": "Paul and Silas were fastened in the stocks in Philippi; at midnight they were praying and singing hymns when a violent earthquake shook the prison foundations.",
    "metadata": {
      "stage": 3,
      "stage_title": "Leaders, Deliverers and Judges",
      "level_theme": "Deliverer Showdown",
      "category": "Leaders, Deliverers and Judges",
      "challengeType": "deliverer-showdown",
      "mechanic": "deliverer-showdown",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true,
      "clues": [
        "Clue 1: Relates to Acts 16:22-25.",
        "Clue 2: Paul and Silas were fastened in the stocks in Philippi; at midnight they were pr...",
        "Clue 3: The answer starts with \"S\"."
      ]
    }
  },
  {
    "id": "bible-character-quest-l15-c5",
    "game_slug": "bible-character-quest",
    "level": 15,
    "challenge_index": 5,
    "question_text": "Which loyal warrior from Gath brought six hundred soldiers to David’s side during Absalom’s rebellion, declaring he would stay with David in life or death?",
    "options": [
      "Ittai the Gittite",
      "Benaiah",
      "Hushai",
      "Barzillai"
    ],
    "correct_answer": "Ittai the Gittite",
    "reference": "2 Samuel 15:19-22; 18:2",
    "explanation": "Ittai the Gittite was an exile from Philistine Gath who swore unwavering loyalty to David and was appointed to command a third of David’s army.",
    "metadata": {
      "stage": 3,
      "stage_title": "Leaders, Deliverers and Judges",
      "level_theme": "Deliverer Showdown",
      "category": "Leaders, Deliverers and Judges",
      "challengeType": "deliverer-showdown",
      "mechanic": "deliverer-showdown",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true,
      "clues": [
        "Clue 1: Relates to 2 Samuel 15:19-22; 18:2.",
        "Clue 2: Ittai the Gittite was an exile from Philistine Gath who swore unwavering loyalty...",
        "Clue 3: The answer starts with \"I\"."
      ]
    }
  },
  {
    "id": "bible-character-quest-l16-c1",
    "game_slug": "bible-character-quest",
    "level": 16,
    "challenge_index": 1,
    "question_text": "Which of King Saul's sons was killed alongside Saul and Jonathan by the Philistines on the slopes of Mount Gilboa?",
    "options": [
      "Malchi-shua",
      "Ish-bosheth",
      "Mephibosheth",
      "Armoni"
    ],
    "correct_answer": "Malchi-shua",
    "reference": "1 Samuel 31:2",
    "explanation": "The Philistines overtook Saul and his sons, killing Jonathan, Abinadab, and Malchi-shua on Mount Gilboa.",
    "metadata": {
      "stage": 4,
      "stage_title": "Kings and Royal Families",
      "level_theme": "The First Kings",
      "category": "Kings and Royal Families",
      "challengeType": "first-kings",
      "mechanic": "first-kings",
      "difficulty": "hard",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "I was a royal prince of Israel.",
        "My father was the first king of Israel.",
        "I died in battle on Mount Gilboa with my brother Jonathan."
      ]
    }
  },
  {
    "id": "bible-character-quest-l16-c2",
    "game_slug": "bible-character-quest",
    "level": 16,
    "challenge_index": 2,
    "question_text": "Which Roman emperor issued the royal decree that a census should be taken of the entire Roman world, leading Joseph and Mary to travel to Bethlehem?",
    "options": [
      "Caesar Augustus",
      "Tiberius Caesar",
      "Claudius Caesar",
      "Nero Caesar"
    ],
    "correct_answer": "Caesar Augustus",
    "reference": "Luke 2:1",
    "explanation": "Luke 2:1 records that in those days Caesar Augustus issued a decree that all the world should be registered.",
    "metadata": {
      "stage": 4,
      "stage_title": "Kings and Royal Families",
      "level_theme": "The First Kings",
      "category": "Kings and Royal Families",
      "challengeType": "first-kings",
      "mechanic": "first-kings",
      "difficulty": "hard",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "I was the supreme monarch of Rome.",
        "I ordered an imperial census of the known world.",
        "My decree brought Mary and Joseph to Bethlehem."
      ]
    }
  },
  {
    "id": "bible-character-quest-l16-c3",
    "game_slug": "bible-character-quest",
    "level": 16,
    "challenge_index": 3,
    "question_text": "Which Edomite of royal descent fled to Egypt as a child when Joab wiped out Edom's males, married Queen Tahpenes' sister, and returned to oppose King Solomon?",
    "options": [
      "Hadad the Edomite",
      "Rezon son of Eliada",
      "Genubath",
      "Benaiah"
    ],
    "correct_answer": "Hadad the Edomite",
    "reference": "1 Kings 11:14-22",
    "explanation": "God raised up Hadad the Edomite, from the royal house of Edom, as an adversary against Solomon after Solomon's heart turned away.",
    "metadata": {
      "stage": 4,
      "stage_title": "Kings and Royal Families",
      "level_theme": "The First Kings",
      "category": "Kings and Royal Families",
      "challengeType": "first-kings",
      "mechanic": "first-kings",
      "difficulty": "hard",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "I was of royal blood in Edom.",
        "Pharaoh gave me a house and the sister of Queen Tahpenes as wife.",
        "I became a sworn royal adversary to King Solomon."
      ]
    }
  },
  {
    "id": "bible-character-quest-l16-c4",
    "game_slug": "bible-character-quest",
    "level": 16,
    "challenge_index": 4,
    "question_text": "Which Benjaminite from Bahurim cursed David as the king fled from Absalom and was later placed under a strict restriction by Solomon?",
    "options": [
      "Shimei son of Gera",
      "Ziba",
      "Shimei son of Elah",
      "Adonijah"
    ],
    "correct_answer": "Shimei son of Gera",
    "reference": "2 Samuel 16:5-13; 1 Kings 2:8-9, 36-46",
    "explanation": "Shimei son of Gera cursed David during Absalom's revolt. David instructed Solomon to deal wisely with him, and Solomon later confined Shimei to Jerusalem before executing him when he broke the restriction.",
    "metadata": {
      "stage": 4,
      "stage_title": "Kings and Royal Families",
      "level_theme": "The First Kings",
      "category": "Kings and Royal Families",
      "challengeType": "first-kings",
      "mechanic": "first-kings",
      "difficulty": "hard",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "I was a Benjaminite from Bahurim.",
        "I cursed David as he fled from Absalom.",
        "Solomon later restricted me to Jerusalem, and I was executed after leaving the city."
      ]
    },
    "clues": [
      "Paul names me near the end of his letter to the Romans.",
      "I held a civic financial office in the city.",
      "My title is translated as city treasurer or city manager."
    ]
  },
  {
    "id": "bible-character-quest-l16-c5",
    "game_slug": "bible-character-quest",
    "level": 16,
    "challenge_index": 5,
    "question_text": "Who was Saul's commander-in-chief who crowned Saul's son Ish-bosheth king at Mahanaim, but was later stabbed to death by Joab at Hebron's city gate?",
    "options": [
      "Abner son of Ner",
      "Amasa",
      "Benaiah",
      "Asahel"
    ],
    "correct_answer": "Abner son of Ner",
    "reference": "2 Samuel 2:8; 2 Samuel 3:27",
    "explanation": "Abner son of Ner made Ish-bosheth king over Israel, but Joab assassinated him in revenge for killing Joab's brother Asahel in battle.",
    "metadata": {
      "stage": 4,
      "stage_title": "Kings and Royal Families",
      "level_theme": "The First Kings",
      "category": "Kings and Royal Families",
      "challengeType": "first-kings",
      "mechanic": "first-kings",
      "difficulty": "hard",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "I was Saul's cousin and general of the northern army.",
        "I installed Saul's son as king over Israel for two years.",
        "Joab murdered me deceptively at the city gate of Hebron."
      ]
    }
  },
  {
    "id": "bible-character-quest-l17-c1",
    "game_slug": "bible-character-quest",
    "level": 17,
    "challenge_index": 1,
    "question_text": "Which royal princess of Judah stole away baby prince Joash when Queen Mother Athaliah was slaughtering all royal heirs, hiding him in the temple?",
    "options": [
      "Jehosheba",
      "Shelomith",
      "Zibiah",
      "Huldah"
    ],
    "correct_answer": "Jehosheba",
    "reference": "2 Kings 11:2",
    "explanation": "Jehosheba (Jehoshabeath in Chronicles), daughter of King Joram and wife of Jehoiada the priest, hid baby Joash and preserved David's royal line.",
    "metadata": {
      "stage": 4,
      "stage_title": "Kings and Royal Families",
      "level_theme": "Thrones and Bloodlines",
      "category": "Kings and Royal Families",
      "challengeType": "thrones-bloodlines",
      "mechanic": "thrones-bloodlines",
      "difficulty": "hard",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "I was a daughter of King Joram of Judah.",
        "I risked my life against the murderous Queen Athaliah.",
        "I hid the baby crown prince Joash in the temple bedchamber for six years."
      ]
    }
  },
  {
    "id": "bible-character-quest-l17-c2",
    "game_slug": "bible-character-quest",
    "level": 17,
    "challenge_index": 2,
    "question_text": "Which Jewish royal woman, the daughter of Herod Agrippa I and sister of Bernice, was the wife of Roman Governor Felix when Paul spoke to them in Caesarea?",
    "options": [
      "Drusilla",
      "Bernice",
      "Herodias",
      "Salome"
    ],
    "correct_answer": "Drusilla",
    "reference": "Acts 24:24",
    "explanation": "Acts 24:24 states that Felix came with his wife Drusilla, who was Jewish, and sent for Paul to hear him about faith in Christ Jesus.",
    "metadata": {
      "stage": 4,
      "stage_title": "Kings and Royal Families",
      "level_theme": "Thrones and Bloodlines",
      "category": "Kings and Royal Families",
      "challengeType": "thrones-bloodlines",
      "mechanic": "thrones-bloodlines",
      "difficulty": "hard",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "I was a member of the Herodian royal dynasty.",
        "My father was struck down by an angel in Caesarea.",
        "I sat beside Governor Felix as Paul reasoned about righteousness and self-control."
      ]
    }
  },
  {
    "id": "bible-character-quest-l17-c3",
    "game_slug": "bible-character-quest",
    "level": 17,
    "challenge_index": 3,
    "question_text": "Which ambitious son of David by Haggith declared himself king at En-rogel when David was old, backed by General Joab and Priest Abiathar?",
    "options": [
      "Adonijah",
      "Absalom",
      "Amnon",
      "Shephatiah"
    ],
    "correct_answer": "Adonijah",
    "reference": "1 Kings 1:5-9",
    "explanation": "Adonijah son of Haggith exalted himself saying, 'I will be king,' but David immediately ordered Solomon anointed at Gihon spring.",
    "metadata": {
      "stage": 4,
      "stage_title": "Kings and Royal Families",
      "level_theme": "Thrones and Bloodlines",
      "category": "Kings and Royal Families",
      "challengeType": "thrones-bloodlines",
      "mechanic": "thrones-bloodlines",
      "difficulty": "hard",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "I was David's fourth-born son, handsome and never rebuked by my father.",
        "Joab and Abiathar supported my bid for the throne at En-rogel.",
        "My rebellion crumbled the moment Solomon was anointed king."
      ]
    }
  },
  {
    "id": "bible-character-quest-l17-c4",
    "game_slug": "bible-character-quest",
    "level": 17,
    "challenge_index": 4,
    "question_text": "Which royal title and name belonged to the queen of the Ethiopians whose chief court treasurer was baptized by Philip on the desert road?",
    "options": [
      "Candace",
      "Tahpenes",
      "Athaliah",
      "Vashti"
    ],
    "correct_answer": "Candace",
    "reference": "Acts 8:27",
    "explanation": "Philip met an Ethiopian eunuch of great authority under Candace, queen of the Ethiopians, who had charge of all her royal treasury.",
    "metadata": {
      "stage": 4,
      "stage_title": "Kings and Royal Families",
      "level_theme": "Thrones and Bloodlines",
      "category": "Kings and Royal Families",
      "challengeType": "thrones-bloodlines",
      "mechanic": "thrones-bloodlines",
      "difficulty": "hard",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "I was sovereign queen over an ancient African empire.",
        "My royal official traveled thousands of miles to worship in Jerusalem.",
        "My chief treasurer was converted through Isaiah's prophecy on the road to Gaza."
      ]
    }
  },
  {
    "id": "bible-character-quest-l17-c5",
    "game_slug": "bible-character-quest",
    "level": 17,
    "challenge_index": 5,
    "question_text": "Which queen mother (Gebirah) of Judah was stripped of her royal dignity by King Asa because she had erected an abominable image for Asherah?",
    "options": [
      "Maakah",
      "Azubah",
      "Naamah",
      "Athaliah"
    ],
    "correct_answer": "Maakah",
    "reference": "1 Kings 15:13",
    "explanation": "King Asa removed his grandmother Maakah from being queen mother because she had made an abominable image for Asherah, which Asa cut down and burned.",
    "metadata": {
      "stage": 4,
      "stage_title": "Kings and Royal Families",
      "level_theme": "Thrones and Bloodlines",
      "category": "Kings and Royal Families",
      "challengeType": "thrones-bloodlines",
      "mechanic": "thrones-bloodlines",
      "difficulty": "hard",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "I held the prestigious court title of Queen Mother in Judah.",
        "I worshipped pagan idols and set up an Asherah image.",
        "My grandson Asa dethroned me and crushed my idolatrous pole."
      ]
    }
  },
  {
    "id": "bible-character-quest-l18-c1",
    "game_slug": "bible-character-quest",
    "level": 18,
    "challenge_index": 1,
    "question_text": "Which military commander seized the throne of the northern kingdom of Israel and reigned for only seven days in Tirzah before setting fire to the palace over himself?",
    "options": [
      "Zimri",
      "Tibni",
      "Elah",
      "Shallum"
    ],
    "correct_answer": "Zimri",
    "reference": "1 Kings 16:15-18",
    "explanation": "Zimri reigned seven days in Tirzah; when Omri's army besieged the city, Zimri went into the royal palace citadel and burned it down around himself.",
    "metadata": {
      "stage": 4,
      "stage_title": "Kings and Royal Families",
      "level_theme": "The Divided Kingdom",
      "category": "Kings and Royal Families",
      "challengeType": "divided-kingdom",
      "mechanic": "divided-kingdom",
      "difficulty": "hard",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "I assassinated King Elah while he was drinking himself drunk.",
        "My reign was the shortest in Israel's history—just one week.",
        "When the capital fell to Omri, I perished in my own burning palace."
      ]
    }
  },
  {
    "id": "bible-character-quest-l18-c2",
    "game_slug": "bible-character-quest",
    "level": 18,
    "challenge_index": 2,
    "question_text": "Which son of Herod the Great ruled over Judea after Herod's death, whose cruel reputation caused Joseph to avoid Judea and take Jesus to Galilee?",
    "options": [
      "Archelaus",
      "Herod Antipas",
      "Herod Philip",
      "Lysanias"
    ],
    "correct_answer": "Archelaus",
    "reference": "Matthew 2:22",
    "explanation": "When Joseph heard that Archelaus was reigning over Judea in place of his father Herod, he was afraid to go there and settled in Nazareth.",
    "metadata": {
      "stage": 4,
      "stage_title": "Kings and Royal Families",
      "level_theme": "The Divided Kingdom",
      "category": "Kings and Royal Families",
      "challengeType": "divided-kingdom",
      "mechanic": "divided-kingdom",
      "difficulty": "hard",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "I was designated ethnarch of Judea, Samaria, and Idumea.",
        "My brutality at Passover resulted in thousands of deaths.",
        "Joseph steered the holy family away from my territory to Galilee."
      ]
    }
  },
  {
    "id": "bible-character-quest-l18-c3",
    "game_slug": "bible-character-quest",
    "level": 18,
    "challenge_index": 3,
    "question_text": "Following Zimri's death, which rival claimant divided Israel and battled Omri for four years before dying, leaving Omri sole monarch?",
    "options": [
      "Tibni son of Ginath",
      "Elah",
      "Pekah",
      "Nadab"
    ],
    "correct_answer": "Tibni son of Ginath",
    "reference": "1 Kings 16:21-22",
    "explanation": "Half the people of Israel followed Tibni son of Ginath to make him king, and half followed Omri; Omri prevailed and Tibni died.",
    "metadata": {
      "stage": 4,
      "stage_title": "Kings and Royal Families",
      "level_theme": "The Divided Kingdom",
      "category": "Kings and Royal Families",
      "challengeType": "divided-kingdom",
      "mechanic": "divided-kingdom",
      "difficulty": "hard",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "Half the northern tribes chose me as their monarch.",
        "I waged civil war against General Omri for control of the kingdom.",
        "After four years of struggle I died, leaving Omri undisputed king."
      ]
    }
  },
  {
    "id": "bible-character-quest-l18-c4",
    "game_slug": "bible-character-quest",
    "level": 18,
    "challenge_index": 4,
    "question_text": "Which king of Judah ruled for 52 years and prospered greatly, but was struck with leprosy in the temple after arrogantly trying to burn incense?",
    "options": [
      "Uzziah (Azariah)",
      "Amaziah",
      "Jotham",
      "Asa"
    ],
    "correct_answer": "Uzziah (Azariah)",
    "reference": "2 Chronicles 26:16-21",
    "explanation": "Uzziah grew proud and entered the sanctuary to burn incense; 80 brave priests opposed him, and leprosy broke out on his forehead.",
    "metadata": {
      "stage": 4,
      "stage_title": "Kings and Royal Families",
      "level_theme": "The Divided Kingdom",
      "category": "Kings and Royal Families",
      "challengeType": "divided-kingdom",
      "mechanic": "divided-kingdom",
      "difficulty": "hard",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "I was a military innovator and builder who reigned for 52 years.",
        "I intruded into the holy sanctuary to perform the duty of Aaron's sons.",
        "God struck my forehead with leprosy, forcing me into quarantine until death."
      ]
    }
  },
  {
    "id": "bible-character-quest-l18-c5",
    "game_slug": "bible-character-quest",
    "level": 18,
    "challenge_index": 5,
    "question_text": "Which regional ruler was tetrarch of Abilene during the fifteenth year of the reign of Tiberius Caesar, as recorded in Luke's historical synchronization?",
    "options": [
      "Lysanias",
      "Archelaus",
      "Quirinius",
      "Festus"
    ],
    "correct_answer": "Lysanias",
    "reference": "Luke 3:1",
    "explanation": "Luke 3:1 identifies Lysanias as tetrarch of Abilene alongside Pontius Pilate of Judea and Herod Antipas of Galilee.",
    "metadata": {
      "stage": 4,
      "stage_title": "Kings and Royal Families",
      "level_theme": "The Divided Kingdom",
      "category": "Kings and Royal Families",
      "challengeType": "divided-kingdom",
      "mechanic": "divided-kingdom",
      "difficulty": "hard",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "I was an imperial governor in the Syrian-Lebanon border region.",
        "My territory was the district of Abilene.",
        "Luke specifically dated the start of John the Baptist's ministry by my rule."
      ]
    }
  },
  {
    "id": "bible-character-quest-l19-c1",
    "game_slug": "bible-character-quest",
    "level": 19,
    "challenge_index": 1,
    "question_text": "Which royal supervisor of forced labor was dispatched by King Rehoboam to negotiate with the rebellious northern tribes, only to be stoned to death by all Israel?",
    "options": [
      "Adoniram (Hadoram)",
      "Ahijah",
      "Shemaiah",
      "Benaiah"
    ],
    "correct_answer": "Adoniram (Hadoram)",
    "reference": "1 Kings 12:18",
    "explanation": "Rehoboam foolishly sent Adoniram, taskmaster over forced labor, to the rebellious northern tribes, and all Israel stoned him to death.",
    "metadata": {
      "stage": 4,
      "stage_title": "Kings and Royal Families",
      "level_theme": "Royal Mistakes",
      "category": "Kings and Royal Families",
      "challengeType": "royal-mistakes",
      "mechanic": "royal-mistakes",
      "difficulty": "hard",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "I was the chief minister over royal conscript labor under David, Solomon, and Rehoboam.",
        "My presence infuriated the already overtaxed northern tribes.",
        "My mission ended instantly when the crowd stoned me to death."
      ]
    }
  },
  {
    "id": "bible-character-quest-l19-c2",
    "game_slug": "bible-character-quest",
    "level": 19,
    "challenge_index": 2,
    "question_text": "Which ruler foolishly bound himself with an oath before banquet guests to grant a dancing girl anything, resulting in the beheading of John the Baptist?",
    "options": [
      "Herod Antipas",
      "Herod the Great",
      "Herod Agrippa I",
      "Herod Philip"
    ],
    "correct_answer": "Herod Antipas",
    "reference": "Matthew 14:6-10",
    "explanation": "Herod Antipas the tetrarch made a rash oath to Salome and, because of his dinner guests, ordered John the Baptist beheaded in prison.",
    "metadata": {
      "stage": 4,
      "stage_title": "Kings and Royal Families",
      "level_theme": "Royal Mistakes",
      "category": "Kings and Royal Families",
      "challengeType": "royal-mistakes",
      "mechanic": "royal-mistakes",
      "difficulty": "hard",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "I ruled Galilee and Perea as tetrarch.",
        "I married my brother's former wife Herodias.",
        "A reckless birthday pledge compelled me to execute God's greatest prophet."
      ]
    }
  },
  {
    "id": "bible-character-quest-l19-c3",
    "game_slug": "bible-character-quest",
    "level": 19,
    "challenge_index": 3,
    "question_text": "Which king of Judah made the disastrous mistake of showing every treasure, storehouse, and weapon to envoys from Merodach-baladan king of Babylon?",
    "options": [
      "Hezekiah",
      "Josiah",
      "Jehoshaphat",
      "Manasseh"
    ],
    "correct_answer": "Hezekiah",
    "reference": "2 Kings 20:12-17",
    "explanation": "Hezekiah showed the Babylonian ambassadors all his royal armory and gold; Isaiah rebuked him and prophesied everything would be carried to Babylon.",
    "metadata": {
      "stage": 4,
      "stage_title": "Kings and Royal Families",
      "level_theme": "Royal Mistakes",
      "category": "Kings and Royal Families",
      "challengeType": "royal-mistakes",
      "mechanic": "royal-mistakes",
      "difficulty": "hard",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "I had just been miraculously healed from a fatal illness.",
        "I received a friendly delegation from the prince of Babylon.",
        "My prideful tour of the royal treasury sealed Judah's future exile."
      ]
    }
  },
  {
    "id": "bible-character-quest-l19-c4",
    "game_slug": "bible-character-quest",
    "level": 19,
    "challenge_index": 4,
    "question_text": "Which king donned magnificent royal robes, delivered an oration to the people of Tyre and Sidon, and was struck down and eaten by worms for not giving God the glory?",
    "options": [
      "Herod Agrippa I",
      "Herod Agrippa II",
      "Herod Antipas",
      "Herod the Great"
    ],
    "correct_answer": "Herod Agrippa I",
    "reference": "Acts 12:21-23",
    "explanation": "Herod Agrippa I accepted the crowd's shout 'The voice of a god, not of a man!' and an angel struck him down; he was eaten by worms and died.",
    "metadata": {
      "stage": 4,
      "stage_title": "Kings and Royal Families",
      "level_theme": "Royal Mistakes",
      "category": "Kings and Royal Families",
      "challengeType": "royal-mistakes",
      "mechanic": "royal-mistakes",
      "difficulty": "hard",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "I had earlier martyred James the apostle and imprisoned Peter.",
        "The crowd flattered me shouting that my voice was divine.",
        "I was immediately struck down by an angel and perished in agony."
      ]
    }
  },
  {
    "id": "bible-character-quest-l19-c5",
    "game_slug": "bible-character-quest",
    "level": 19,
    "challenge_index": 5,
    "question_text": "Which Babylonian co-regent monarch held a blasphemous feast using sacred golden goblets plundered from Jerusalem, during which a detached hand wrote his doom on the wall?",
    "options": [
      "Belshazzar",
      "Nebuchadnezzar",
      "Evil-Merodach",
      "Darius the Mede"
    ],
    "correct_answer": "Belshazzar",
    "reference": "Daniel 5:1-5, 30",
    "explanation": "Belshazzar toasted idols using sacred temple cups; divine fingers wrote on the plaster wall, and he was slain that very night when Babylon fell.",
    "metadata": {
      "stage": 4,
      "stage_title": "Kings and Royal Families",
      "level_theme": "Royal Mistakes",
      "category": "Kings and Royal Families",
      "challengeType": "royal-mistakes",
      "mechanic": "royal-mistakes",
      "difficulty": "hard",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "I hosted a lavish banquet for a thousand of my royal lords.",
        "We drank wine from the sacred vessels stolen from the Lord's house.",
        "A mysterious hand wrote MENE, MENE, TEKEL, PARSIN, and my kingdom fell that night."
      ]
    }
  },
  {
    "id": "bible-character-quest-l20-c1",
    "game_slug": "bible-character-quest",
    "level": 20,
    "challenge_index": 1,
    "question_text": "Which priestly son stood before the people by the Spirit of God and warned that Judah had forsaken the LORD, then was stoned in the temple court at King Joash's command?",
    "options": [
      "Zechariah son of Jehoiada",
      "Zechariah son of Berechiah",
      "Uriah son of Shemaiah",
      "Jehoiada"
    ],
    "correct_answer": "Zechariah son of Jehoiada",
    "reference": "2 Chronicles 24:20-22",
    "explanation": "Zechariah son of Jehoiada the priest rebuked the people for forsaking the LORD. At King Joash's command, the people stoned him in the court of the house of the LORD.",
    "metadata": {
      "stage": 4,
      "stage_title": "Kings and Royal Families",
      "level_theme": "The Kingmaker's Trial",
      "category": "Kings and Royal Families",
      "challengeType": "kingmakers-trial",
      "mechanic": "kingmakers-trial",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true,
      "clues": [
        "I was the son of Jehoiada the priest.",
        "I warned Judah that forsaking the LORD would bring consequences.",
        "I was stoned in the court of the LORD's house during Joash's reign."
      ]
    },
    "clues": [
      "I was the son of Jehoiada the priest.",
      "I warned Judah that forsaking the LORD would bring consequences.",
      "I was stoned in the court of the LORD's house during Joash's reign."
    ]
  },
  {
    "id": "bible-character-quest-l20-c2",
    "game_slug": "bible-character-quest",
    "level": 20,
    "challenge_index": 2,
    "question_text": "Which monarch sat with Roman Governor Festus to hear Paul's legal defense and famously interrupted: 'In a short time would you persuade me to be a Christian?'",
    "options": [
      "Herod Agrippa II",
      "Herod Agrippa I",
      "Herod Antipas",
      "Felix"
    ],
    "correct_answer": "Herod Agrippa II",
    "reference": "Acts 26:28",
    "explanation": "King Agrippa II (Marcus Julius Agrippa), great-grandson of Herod the Great, told Paul: 'Almost thou persuadest me to be a Christian.'",
    "metadata": {
      "stage": 4,
      "stage_title": "Kings and Royal Families",
      "level_theme": "The Kingmaker's Trial",
      "category": "Kings and Royal Families",
      "challengeType": "kingmakers-trial",
      "mechanic": "kingmakers-trial",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true,
      "clues": [
        "I was the last king of the Herodian line.",
        "I inspected Paul's case alongside my sister Bernice and Festus.",
        "I admitted Paul could have been freed had he not appealed to Caesar."
      ]
    }
  },
  {
    "id": "bible-character-quest-l20-c3",
    "game_slug": "bible-character-quest",
    "level": 20,
    "challenge_index": 3,
    "question_text": "Which Shilonite prophet met Jeroboam outside Jerusalem, ripped his new garment into twelve pieces, and handed Jeroboam ten pieces to symbolize ten divided tribes?",
    "options": [
      "Ahijah the Shilonite",
      "Shemaiah",
      "Micaiah",
      "Iddo the Seer"
    ],
    "correct_answer": "Ahijah the Shilonite",
    "reference": "1 Kings 11:29-31",
    "explanation": "Ahijah tore his new cloak into twelve pieces and gave ten to Jeroboam, announcing that God was rending the kingdom out of Solomon's hand.",
    "metadata": {
      "stage": 4,
      "stage_title": "Kings and Royal Families",
      "level_theme": "The Kingmaker's Trial",
      "category": "Kings and Royal Families",
      "challengeType": "kingmakers-trial",
      "mechanic": "kingmakers-trial",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true,
      "clues": [
        "I came from the ancient sanctuary town of Shiloh.",
        "I ambushed Solomon's officer Jeroboam in an open field.",
        "I tore my brand-new cloak into twelve pieces as a royal prophecy."
      ]
    }
  },
  {
    "id": "bible-character-quest-l20-c4",
    "game_slug": "bible-character-quest",
    "level": 20,
    "challenge_index": 4,
    "question_text": "Who was the royal household steward/administrator of Herod Antipas whose wife Joanna financed Jesus' itinerant ministry out of her private wealth?",
    "options": [
      "Chuza",
      "Blastus",
      "Manaen",
      "Theophilus"
    ],
    "correct_answer": "Chuza",
    "reference": "Luke 8:3",
    "explanation": "Luke 8:3 records that Joanna, the wife of Chuza, Herod's household manager, along with Susanna and others, provided for Jesus out of their resources.",
    "metadata": {
      "stage": 4,
      "stage_title": "Kings and Royal Families",
      "level_theme": "The Kingmaker's Trial",
      "category": "Kings and Royal Families",
      "challengeType": "kingmakers-trial",
      "mechanic": "kingmakers-trial",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true,
      "clues": [
        "I managed the royal estate and finances for the tetrarch of Galilee.",
        "My wife was a devoted follower of Jesus Christ.",
        "Our household funds helped finance the ministry of the Son of God."
      ]
    }
  },
  {
    "id": "bible-character-quest-l20-c5",
    "game_slug": "bible-character-quest",
    "level": 20,
    "challenge_index": 5,
    "question_text": "Which Babylonian monarch, upon succeeding Nebuchadnezzar, showed gracious kindness to exiled King Jehoiachin of Judah, releasing him from prison to eat at the royal table?",
    "options": [
      "Evil-Merodach (Amel-Marduk)",
      "Belshazzar",
      "Neriglissar",
      "Nabonidus"
    ],
    "correct_answer": "Evil-Merodach (Amel-Marduk)",
    "reference": "2 Kings 25:27-30",
    "explanation": "Evil-Merodach king of Babylon in the year he began to reign pardoned Jehoiachin king of Judah after 37 years of imprisonment and gave him a regular allowance.",
    "metadata": {
      "stage": 4,
      "stage_title": "Kings and Royal Families",
      "level_theme": "The Kingmaker's Trial",
      "category": "Kings and Royal Families",
      "challengeType": "kingmakers-trial",
      "mechanic": "kingmakers-trial",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true,
      "clues": [
        "I was the royal successor to King Nebuchadnezzar in Babylon.",
        "In my coronation year I opened the imperial dungeons.",
        "I seated the captive King of Judah at my own dinner table for life."
      ]
    }
  },
  {
    "id": "bible-character-quest-l21-c1",
    "game_slug": "bible-character-quest",
    "level": 21,
    "challenge_index": 1,
    "question_text": "• I stood before King Ahab and King Jehoshaphat.\n• Ahab hated me because I never prophesied good concerning him, only disaster.\n• I foretold Ahab's death at Ramoth-gilead while Zedekiah struck my cheek.\nWho am I?",
    "options": [
      "Micaiah son of Imlah",
      "Ahijah the Shilonite",
      "Hanani the Seer",
      "Jehu son of Hanani"
    ],
    "correct_answer": "Micaiah son of Imlah",
    "reference": "1 Kings 22:7-28",
    "explanation": "Micaiah son of Imlah told Ahab that a lying spirit had filled the mouths of his 400 prophets and that Ahab would not return alive from Ramoth-gilead.",
    "metadata": {
      "stage": 5,
      "stage_title": "Prophets and Their Encounters",
      "level_theme": "Name That Prophet",
      "category": "Prophets and Their Encounters",
      "challengeType": "name-that-prophet",
      "mechanic": "name-that-prophet",
      "difficulty": "hard",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "I was summoned only after Jehoshaphat insisted on an authentic prophet of the Lord.",
        "Ahab kept me imprisoned with scant rations of bread and water.",
        "I saw Israel scattered on the hills like sheep without a shepherd."
      ]
    }
  },
  {
    "id": "bible-character-quest-l21-c2",
    "game_slug": "bible-character-quest",
    "level": 21,
    "challenge_index": 2,
    "question_text": "• I was a prophet who came down from Judea to Antioch and Caesarea.\n• I predicted by the Holy Spirit a severe famine across the entire Roman empire under Emperor Claudius.\n• I tied my own hands and feet with Paul's belt to foretell his Jerusalem arrest.\nWho am I?",
    "options": [
      "Agabus",
      "Silas",
      "Judas Barsabbas",
      "Barnabas"
    ],
    "correct_answer": "Agabus",
    "reference": "Acts 11:27-28; Acts 21:10-11",
    "explanation": "Agabus foretold the great famine in the days of Claudius and later took Paul's belt to demonstrate how the Jews in Jerusalem would bind its owner.",
    "metadata": {
      "stage": 5,
      "stage_title": "Prophets and Their Encounters",
      "level_theme": "Name That Prophet",
      "category": "Prophets and Their Encounters",
      "challengeType": "name-that-prophet",
      "mechanic": "name-that-prophet",
      "difficulty": "hard",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "I was a recognized New Testament prophet in the apostolic church.",
        "I predicted an empire-wide food shortage that prompted relief to Judea.",
        "I performed an acted prophecy with Paul's waist belt in Philip's home."
      ]
    }
  },
  {
    "id": "bible-character-quest-l21-c3",
    "game_slug": "bible-character-quest",
    "level": 21,
    "challenge_index": 3,
    "question_text": "• The Spirit of the Lord came upon me in the middle of a national assembly in Jerusalem.\n• I was a Levite descended from Asaph.\n• I declared to King Jehoshaphat: 'Do not be afraid... for the battle is not yours, but God's.'\nWho am I?",
    "options": [
      "Jahaziel son of Zechariah",
      "Asaph",
      "Eliezer son of Dodavahu",
      "Benaiah"
    ],
    "correct_answer": "Jahaziel son of Zechariah",
    "reference": "2 Chronicles 20:14-17",
    "explanation": "Jahaziel, a Levite of the sons of Asaph, prophesied victory over Moab and Ammon without lifting a weapon, because God Himself would fight for Judah.",
    "metadata": {
      "stage": 5,
      "stage_title": "Prophets and Their Encounters",
      "level_theme": "Name That Prophet",
      "category": "Prophets and Their Encounters",
      "challengeType": "name-that-prophet",
      "mechanic": "name-that-prophet",
      "difficulty": "hard",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "I was a temple musician and Levite from the guild of Asaph.",
        "A massive three-nation invasion threatened to annihilate Judah.",
        "God used my voice to instruct the king to stand still and see the Lord's deliverance."
      ]
    }
  },
  {
    "id": "bible-character-quest-l21-c4",
    "game_slug": "bible-character-quest",
    "level": 21,
    "challenge_index": 4,
    "question_text": "• I was an elderly prophetess of the tribe of Asher.\n• I had lived as a widow for eighty-four years after seven years of marriage.\n• I never left the temple courts, fasting and praying, and gave thanks when the infant Messiah arrived.\nWho am I?",
    "options": [
      "Anna",
      "Huldah",
      "Elizabeth",
      "Deborah"
    ],
    "correct_answer": "Anna",
    "reference": "Luke 2:36-38",
    "explanation": "Anna, daughter of Phanuel, of the tribe of Asher, was an 84-year-old widow prophetess who spoke of the infant Jesus to all waiting for Jerusalem's redemption.",
    "metadata": {
      "stage": 5,
      "stage_title": "Prophets and Their Encounters",
      "level_theme": "Name That Prophet",
      "category": "Prophets and Their Encounters",
      "challengeType": "name-that-prophet",
      "mechanic": "name-that-prophet",
      "difficulty": "hard",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "My father was Phanuel and I belonged to the northern tribe of Asher.",
        "I spent over eight decades serving God night and day with prayers and fastings.",
        "I recognized the 40-day-old infant in the arms of Mary as the Redeemer of Israel."
      ]
    }
  },
  {
    "id": "bible-character-quest-l21-c5",
    "game_slug": "bible-character-quest",
    "level": 21,
    "challenge_index": 5,
    "question_text": "Which prophet delivered a message of judgment against Baasha, declaring that his house would be made like the house of Jeroboam because he provoked the LORD?",
    "options": [
      "Jehu son of Hanani",
      "Hanani",
      "Ahijah the Shilonite",
      "Micaiah son of Imlah"
    ],
    "correct_answer": "Jehu son of Hanani",
    "reference": "1 Kings 16:1-4",
    "explanation": "The word of the LORD came through Jehu son of Hanani against Baasha. Jehu announced judgment on Baasha's house because Baasha had followed Jeroboam's ways and provoked the LORD to anger.",
    "metadata": {
      "stage": 5,
      "stage_title": "Prophets and Their Encounters",
      "level_theme": "Name That Prophet",
      "category": "Prophets and Their Encounters",
      "challengeType": "name-that-prophet",
      "mechanic": "name-that-prophet",
      "difficulty": "hard",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "I was the son of a seer named Hanani.",
        "I delivered a prophetic judgment to King Baasha of Israel.",
        "My message compared Baasha's coming fate with Jeroboam's house."
      ]
    },
    "clues": [
      "I was the son of a seer named Hanani.",
      "I delivered a prophetic judgment to King Baasha of Israel.",
      "My message compared Baasha's coming fate with Jeroboam's house."
    ]
  },
  {
    "id": "bible-character-quest-l22-c1",
    "game_slug": "bible-character-quest",
    "level": 22,
    "challenge_index": 1,
    "question_text": "Which person was NOT a prophet, but the faithful personal scribe and amanuensis who wrote down Jeremiah's dictated scrolls and read them aloud in the temple?",
    "options": [
      "Baruch son of Neriah",
      "Hananiah",
      "Uriah son of Shemaiah",
      "Zephaniah"
    ],
    "correct_answer": "Baruch son of Neriah",
    "reference": "Jeremiah 36:4-10; Jeremiah 45:1",
    "explanation": "Baruch son of Neriah was Jeremiah's scribe who recorded the prophecies on a scroll and read them boldly in the Lord's house.",
    "metadata": {
      "stage": 5,
      "stage_title": "Prophets and Their Encounters",
      "level_theme": "Prophet or Someone Else?",
      "category": "Prophets and Their Encounters",
      "challengeType": "prophet-or-other",
      "mechanic": "prophet-or-other",
      "difficulty": "hard",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "I was an educated scribe from a distinguished noble family.",
        "I dipped ink on parchment while a weeping prophet spoke God's warnings.",
        "God addressed me personally in Jeremiah 45: 'Seekest thou great things for thyself? Seek them not.'"
      ]
    }
  },
  {
    "id": "bible-character-quest-l22-c2",
    "game_slug": "bible-character-quest",
    "level": 22,
    "challenge_index": 2,
    "question_text": "In Acts 15:32, which two leaders sent from Jerusalem to Antioch are explicitly described by Luke as 'being prophets themselves' who encouraged and strengthened the church?",
    "options": [
      "Judas Barsabbas and Silas",
      "Barnabas and John Mark",
      "Peter and John",
      "Paul and Timothy"
    ],
    "correct_answer": "Judas Barsabbas and Silas",
    "reference": "Acts 15:32",
    "explanation": "Acts 15:32 states: 'And Judas and Silas, who were themselves prophets, encouraged and strengthened the brothers with many words.'",
    "metadata": {
      "stage": 5,
      "stage_title": "Prophets and Their Encounters",
      "level_theme": "Prophet or Someone Else?",
      "category": "Prophets and Their Encounters",
      "challengeType": "prophet-or-other",
      "mechanic": "prophet-or-other",
      "difficulty": "hard",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "We were chosen by the Jerusalem council to deliver the apostolic decree.",
        "Luke specifically identifies both of us by the title of prophet.",
        "One of us subsequently became Paul's main companion on his second missionary journey."
      ]
    }
  },
  {
    "id": "bible-character-quest-l22-c3",
    "game_slug": "bible-character-quest",
    "level": 22,
    "challenge_index": 3,
    "question_text": "Which false prophet from Gibeon opposed Jeremiah in the temple, broke the wooden yoke from Jeremiah's neck, and died within seven months as God foretold?",
    "options": [
      "Hananiah son of Azzur",
      "Shemaiah the Nehelamite",
      "Zedekiah son of Chenaanah",
      "Pashhur son of Immer"
    ],
    "correct_answer": "Hananiah son of Azzur",
    "reference": "Jeremiah 28:1-17",
    "explanation": "Hananiah falsely promised deliverance from Babylon within two years; Jeremiah told him God would remove him from the earth, and he died that seventh month.",
    "metadata": {
      "stage": 5,
      "stage_title": "Prophets and Their Encounters",
      "level_theme": "Prophet or Someone Else?",
      "category": "Prophets and Their Encounters",
      "challengeType": "prophet-or-other",
      "mechanic": "prophet-or-other",
      "difficulty": "hard",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "I came from the priestly town of Gibeon.",
        "I publicly smashed Jeremiah's wooden ox yoke in front of the priests and people.",
        "Jeremiah declared I had taught rebellion against the Lord, and I died before the year ended."
      ]
    }
  },
  {
    "id": "bible-character-quest-l22-c4",
    "game_slug": "bible-character-quest",
    "level": 22,
    "challenge_index": 4,
    "question_text": "In Acts 21:8-9, who was the evangelist living in Caesarea who had four unmarried daughters who possessed the gift of prophecy?",
    "options": [
      "Philip the Evangelist",
      "Stephen the Martyr",
      "Barnabas",
      "Agabus"
    ],
    "correct_answer": "Philip the Evangelist",
    "reference": "Acts 21:8-9",
    "explanation": "Paul stayed at Caesarea in the house of Philip the evangelist, one of the seven, who had four virgin daughters who prophesied.",
    "metadata": {
      "stage": 5,
      "stage_title": "Prophets and Their Encounters",
      "level_theme": "Prophet or Someone Else?",
      "category": "Prophets and Their Encounters",
      "challengeType": "prophet-or-other",
      "mechanic": "prophet-or-other",
      "difficulty": "hard",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "I was one of the seven men appointed to distribute food to widows in Jerusalem.",
        "I spearheaded a massive revival in Samaria and baptized the Ethiopian.",
        "My household in Caesarea included four daughters gifted with prophecy."
      ]
    }
  },
  {
    "id": "bible-character-quest-l22-c5",
    "game_slug": "bible-character-quest",
    "level": 22,
    "challenge_index": 5,
    "question_text": "Which seer rebuked King Asa of Judah for relying on the Syrian army instead of the Lord, declaring 'the eyes of the Lord run to and fro', for which Asa threw him in prison?",
    "options": [
      "Hanani the Seer",
      "Jehu son of Hanani",
      "Jahaziel",
      "Iddo the Seer"
    ],
    "correct_answer": "Hanani the Seer",
    "reference": "2 Chronicles 16:7-10",
    "explanation": "Hanani the seer confronted Asa for bribing Ben-Hadad of Syria; an enraged Asa locked Hanani in the stocks.",
    "metadata": {
      "stage": 5,
      "stage_title": "Prophets and Their Encounters",
      "level_theme": "Prophet or Someone Else?",
      "category": "Prophets and Their Encounters",
      "challengeType": "prophet-or-other",
      "mechanic": "prophet-or-other",
      "difficulty": "hard",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "I uttered one of Scripture's most famous declarations of God's watchful eyes.",
        "I condemned the king for relying on foreign military treaties.",
        "Instead of repenting, the king put me into prison stocks in a rage."
      ]
    }
  },
  {
    "id": "bible-character-quest-l23-c1",
    "game_slug": "bible-character-quest",
    "level": 23,
    "challenge_index": 1,
    "question_text": "Which prophet told Ahab that he had seen Israel scattered on the hills like sheep without a shepherd, then was struck by Zedekiah son of Chenaanah?",
    "options": [
      "Micaiah son of Imlah",
      "Zedekiah son of Chenaanah",
      "Hanani",
      "Jehu son of Hanani"
    ],
    "correct_answer": "Micaiah son of Imlah",
    "reference": "1 Kings 22:13-28",
    "explanation": "Micaiah son of Imlah refused to echo the other prophets' favourable message. He described his vision of Israel scattered without a shepherd, after which Zedekiah struck him and Ahab ordered him imprisoned.",
    "metadata": {
      "stage": 5,
      "stage_title": "Prophets and Their Encounters",
      "level_theme": "Prophetic Encounters",
      "category": "Prophets and Their Encounters",
      "challengeType": "prophetic-encounters",
      "mechanic": "prophetic-encounters",
      "difficulty": "hard",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "Ahab summoned me after hearing the favourable predictions of other prophets.",
        "I described Israel as scattered sheep without a shepherd.",
        "Zedekiah son of Chenaanah struck me after I spoke."
      ]
    },
    "clues": [
      "Ahab summoned me after hearing the favourable predictions of other prophets.",
      "I described Israel as scattered sheep without a shepherd.",
      "Zedekiah son of Chenaanah struck me after I spoke."
    ]
  },
  {
    "id": "bible-character-quest-l23-c2",
    "game_slug": "bible-character-quest",
    "level": 23,
    "challenge_index": 2,
    "question_text": "Which righteous priest of the division of Abijah was burning incense in the Holy Place when the angel Gabriel announced his wife would bear a prophetic forerunner?",
    "options": [
      "Zechariah",
      "Simeon",
      "Caiaphas",
      "Nicodemus"
    ],
    "correct_answer": "Zechariah",
    "reference": "Luke 1:5-22",
    "explanation": "Zechariah, husband of Elizabeth and father of John the Baptist, was chosen by lot to burn incense in the temple sanctuary where Gabriel visited him.",
    "metadata": {
      "stage": 5,
      "stage_title": "Prophets and Their Encounters",
      "level_theme": "Prophetic Encounters",
      "category": "Prophets and Their Encounters",
      "challengeType": "prophetic-encounters",
      "mechanic": "prophetic-encounters",
      "difficulty": "hard",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "My wife and I were blameless in all the commandments of the Lord.",
        "I was serving in the temple during my priestly order's turn.",
        "I was rendered completely speechless for nine months due to questioning an angelic message."
      ]
    }
  },
  {
    "id": "bible-character-quest-l23-c3",
    "game_slug": "bible-character-quest",
    "level": 23,
    "challenge_index": 3,
    "question_text": "Which servant of Elisha chased after Naaman the Syrian commander to fraudulently demand silver and garments, resulting in Naaman's leprosy falling on him?",
    "options": [
      "Gehazi",
      "Baruch",
      "Ebed-Melech",
      "Ziba"
    ],
    "correct_answer": "Gehazi",
    "reference": "2 Kings 5:20-27",
    "explanation": "Gehazi ran after Naaman claiming Elisha requested money and garments; Elisha discerned his deceit and cursed Gehazi with Naaman's leprosy.",
    "metadata": {
      "stage": 5,
      "stage_title": "Prophets and Their Encounters",
      "level_theme": "Prophetic Encounters",
      "category": "Prophets and Their Encounters",
      "challengeType": "prophetic-encounters",
      "mechanic": "prophetic-encounters",
      "difficulty": "hard",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "I was the personal attendant and companion to prophet Elisha.",
        "Greed prompted me to lie and profit from a miraculous healing.",
        "I left my master's presence a leper, white as snow."
      ]
    }
  },
  {
    "id": "bible-character-quest-l23-c4",
    "game_slug": "bible-character-quest",
    "level": 23,
    "challenge_index": 4,
    "question_text": "Which Roman proconsul of Cyprus desired to hear the word of God and believed after seeing the false prophet and sorcerer Elymas struck blind by Paul?",
    "options": [
      "Sergius Paulus",
      "Cornelius",
      "Claudius Lysias",
      "Gallio"
    ],
    "correct_answer": "Sergius Paulus",
    "reference": "Acts 13:6-12",
    "explanation": "Sergius Paulus, an intelligent proconsul at Paphos, believed when he saw Elymas (Bar-Jesus) blinded for opposing Paul and Barnabas.",
    "metadata": {
      "stage": 5,
      "stage_title": "Prophets and Their Encounters",
      "level_theme": "Prophetic Encounters",
      "category": "Prophets and Their Encounters",
      "challengeType": "prophetic-encounters",
      "mechanic": "prophetic-encounters",
      "difficulty": "hard",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "I was the highest Roman imperial governor over the island of Cyprus.",
        "I had an intelligent mind and summoned Christian missionaries to investigate their message.",
        "I converted to faith in Christ after watching my resident court sorcerer struck blind."
      ]
    }
  },
  {
    "id": "bible-character-quest-l23-c5",
    "game_slug": "bible-character-quest",
    "level": 23,
    "challenge_index": 5,
    "question_text": "Which prominent woman in Shunem constructed and furnished a dedicated upper room for Elisha, and later had her deceased son resurrected by the prophet?",
    "options": [
      "The Shunammite woman",
      "The widow of Zarephath",
      "Rizpah",
      "Jehosheba"
    ],
    "correct_answer": "The Shunammite woman",
    "reference": "2 Kings 4:8-37",
    "explanation": "A wealthy woman of Shunem prepared a furnished roof chamber for Elisha; when her promised son died, Elisha stretched himself over the boy and revived him.",
    "metadata": {
      "stage": 5,
      "stage_title": "Prophets and Their Encounters",
      "level_theme": "Prophetic Encounters",
      "category": "Prophets and Their Encounters",
      "challengeType": "prophetic-encounters",
      "mechanic": "prophetic-encounters",
      "difficulty": "hard",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "I recognized Elisha as a holy man of God passing by our town.",
        "My husband and I built a brick room on the roof with a bed, table, chair, and lamp.",
        "When my son died suddenly of a head affliction, I rode urgently to Mount Carmel to find the prophet."
      ]
    }
  },
  {
    "id": "bible-character-quest-l24-c1",
    "game_slug": "bible-character-quest",
    "level": 24,
    "challenge_index": 1,
    "question_text": "Which prophet was commanded by the Lord to marry Gomer, a promiscuous woman, to vividly portray Israel's unfaithfulness to God?",
    "options": [
      "Hosea",
      "Amos",
      "Micah",
      "Habakkuk"
    ],
    "correct_answer": "Hosea",
    "reference": "Hosea 1:2-9; Hosea 3:1-3",
    "explanation": "God told Hosea son of Beeri to take a wife of whoredom; his marriage and children's names symbolized Israel's spiritual adultery and ultimate restoration.",
    "metadata": {
      "stage": 5,
      "stage_title": "Prophets and Their Encounters",
      "level_theme": "The Strange Assignment",
      "category": "Prophets and Their Encounters",
      "challengeType": "strange-assignment",
      "mechanic": "strange-assignment",
      "difficulty": "hard",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "I prophesied during the reigns of Uzziah, Jotham, Ahaz, and Jeroboam II.",
        "God ordered my domestic life to become a living parable of covenant heartbreak.",
        "I had to buy back my runaway wife from the slave block."
      ]
    }
  },
  {
    "id": "bible-character-quest-l24-c2",
    "game_slug": "bible-character-quest",
    "level": 24,
    "challenge_index": 2,
    "question_text": "Which prophet lived in the Judean wilderness clothed in camel's hair with a leather belt, ate locusts and wild honey, and baptized crowds in the Jordan?",
    "options": [
      "John the Baptist",
      "Agabus",
      "Silas",
      "Stephen"
    ],
    "correct_answer": "John the Baptist",
    "reference": "Matthew 3:1-4; Mark 1:4-6",
    "explanation": "John the Baptist came in the spirit and power of Elijah, living in the wilderness with rugged clothing and diet, heralding the arrival of the Lamb of God.",
    "metadata": {
      "stage": 5,
      "stage_title": "Prophets and Their Encounters",
      "level_theme": "The Strange Assignment",
      "category": "Prophets and Their Encounters",
      "challengeType": "strange-assignment",
      "mechanic": "strange-assignment",
      "difficulty": "hard",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "I was filled with the Holy Spirit while still in my mother's womb.",
        "I did no miraculous signs, but everything I said about Jesus was true.",
        "My garment was woven camel's hair and my food was locusts and wild honey."
      ]
    }
  },
  {
    "id": "bible-character-quest-l24-c3",
    "game_slug": "bible-character-quest",
    "level": 24,
    "challenge_index": 3,
    "question_text": "Which prophet was ordered to lie on his left side for 390 days and his right side for 40 days, eating bread baked over dung, to depict Jerusalem's siege and guilt?",
    "options": [
      "Ezekiel",
      "Jeremiah",
      "Daniel",
      "Zechariah"
    ],
    "correct_answer": "Ezekiel",
    "reference": "Ezekiel 4:1-17",
    "explanation": "Ezekiel lay bound by ropes on his side, drawing Jerusalem on a clay brick and eating rationed multigrain bread to depict the coming siege.",
    "metadata": {
      "stage": 5,
      "stage_title": "Prophets and Their Encounters",
      "level_theme": "The Strange Assignment",
      "category": "Prophets and Their Encounters",
      "challengeType": "strange-assignment",
      "mechanic": "strange-assignment",
      "difficulty": "hard",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "I was a priest living among the Jewish exiles by the river Chebar.",
        "God instructed me to draw a siege on a clay brick and lie on my sides for over a year.",
        "My mouth was repeatedly closed and opened as a dramatic sign to a rebellious house."
      ]
    }
  },
  {
    "id": "bible-character-quest-l24-c4",
    "game_slug": "bible-character-quest",
    "level": 24,
    "challenge_index": 4,
    "question_text": "Which major prophet walked stripped and barefoot through Jerusalem for three years as an enacted sign of the coming humiliation of Egypt and Cush by Assyria?",
    "options": [
      "Isaiah",
      "Jeremiah",
      "Ezekiel",
      "Amos"
    ],
    "correct_answer": "Isaiah",
    "reference": "Isaiah 20:1-4",
    "explanation": "The Lord commanded Isaiah son of Amoz to take off his sackcloth and sandals, walking stripped and barefoot for three years as a portent against Egypt.",
    "metadata": {
      "stage": 5,
      "stage_title": "Prophets and Their Encounters",
      "level_theme": "The Strange Assignment",
      "category": "Prophets and Their Encounters",
      "challengeType": "strange-assignment",
      "mechanic": "strange-assignment",
      "difficulty": "hard",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "I ministered in Jerusalem during the reigns of four kings of Judah.",
        "God instructed me to shed my sackcloth outer garment and walk barefoot.",
        "My strange three-year attire warned Judah against trusting military alliances with Egypt."
      ]
    }
  },
  {
    "id": "bible-character-quest-l24-c5",
    "game_slug": "bible-character-quest",
    "level": 24,
    "challenge_index": 5,
    "question_text": "In Revelation 10, which apostle on the island of Patmos was commanded by a mighty angel to take an open little scroll and eat it, making his belly bitter but tasting sweet as honey?",
    "options": [
      "John",
      "Peter",
      "Paul",
      "Jude"
    ],
    "correct_answer": "John",
    "reference": "Revelation 10:8-10",
    "explanation": "John took the little scroll from the angel's hand and ate it; it tasted sweet as honey in his mouth, but when he had eaten it, his stomach was made bitter.",
    "metadata": {
      "stage": 5,
      "stage_title": "Prophets and Their Encounters",
      "level_theme": "The Strange Assignment",
      "category": "Prophets and Their Encounters",
      "challengeType": "strange-assignment",
      "mechanic": "strange-assignment",
      "difficulty": "hard",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "I was exiled on a lonely Aegean island for the word of God and testimony of Jesus.",
        "A massive angel with a rainbow on his head handed me a celestial booklet.",
        "Eating God's prophetic message was sweet to my taste but bitter in my stomach."
      ]
    }
  },
  {
    "id": "bible-character-quest-l25-c1",
    "game_slug": "bible-character-quest",
    "level": 25,
    "challenge_index": 1,
    "question_text": "Which prophet from Mareshah rebuked King Jehoshaphat: 'Because you have allied yourself with Ahaziah, the Lord has destroyed what you made,' causing his fleet to wreck?",
    "options": [
      "Eliezer son of Dodavahu",
      "Jahaziel son of Zechariah",
      "Hanani the Seer",
      "Micaiah son of Imlah"
    ],
    "correct_answer": "Eliezer son of Dodavahu",
    "reference": "2 Chronicles 20:37",
    "explanation": "Eliezer son of Dodavahu prophesied against Jehoshaphat's commercial shipping venture with wicked King Ahaziah of Israel, and the ships were wrecked at Ezion-geber.",
    "metadata": {
      "stage": 5,
      "stage_title": "Prophets and Their Encounters",
      "level_theme": "Prophet Boss Round",
      "category": "Prophets and Their Encounters",
      "challengeType": "prophet-boss",
      "mechanic": "prophet-boss",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true,
      "clues": [
        "I hailed from the town of Mareshah in the foothills of Judah.",
        "I delivered a scathing divine critique of a royal shipping enterprise.",
        "Because of my prophecy, the commercial fleet at Ezion-geber was wrecked without sailing."
      ]
    }
  },
  {
    "id": "bible-character-quest-l25-c2",
    "game_slug": "bible-character-quest",
    "level": 25,
    "challenge_index": 2,
    "question_text": "In 1 Corinthians 14:32, what vital spiritual principle does the Apostle Paul declare concerning the exercise of prophetic utterance in Christian gatherings?",
    "options": [
      "The spirits of prophets are subject to the control of prophets",
      "Prophets are exempt from all human evaluation",
      "Prophecy can only be given by apostles",
      "Prophetic utterance must always be shouted"
    ],
    "correct_answer": "The spirits of prophets are subject to the control of prophets",
    "reference": "1 Corinthians 14:32",
    "explanation": "Paul established orderly worship by teaching that true prophetic inspiration does not involve uncontrollable ecstasy: 'The spirits of prophets are subject to prophets.'",
    "metadata": {
      "stage": 5,
      "stage_title": "Prophets and Their Encounters",
      "level_theme": "Prophet Boss Round",
      "category": "Prophets and Their Encounters",
      "challengeType": "prophet-boss",
      "mechanic": "prophet-boss",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true,
      "clues": [
        "This is a cornerstone rule for orderly charismatic worship in the New Testament.",
        "It demonstrates that prophets maintain moral responsibility and self-control.",
        "Paul wrote this to correct chaotic, ecstatic shouting in the church at Corinth."
      ]
    }
  },
  {
    "id": "bible-character-quest-l25-c3",
    "game_slug": "bible-character-quest",
    "level": 25,
    "challenge_index": 3,
    "question_text": "Which unnamed man of God from Judah cried out against Jeroboam's altar at Bethel, had his word confirmed by a lion that killed him without mauling the donkey, after an old prophet misled him?",
    "options": [
      "The unnamed Man of God from Judah",
      "Ahijah the Shilonite",
      "Shemaiah",
      "Iddo the Seer"
    ],
    "correct_answer": "The unnamed Man of God from Judah",
    "reference": "1 Kings 13:1-24",
    "explanation": "A man of God came from Judah and foretold Josiah by name; though Jeroboam's hand withered and was restored, the prophet disobeyed God's dietary command and was slain by a lion.",
    "metadata": {
      "stage": 5,
      "stage_title": "Prophets and Their Encounters",
      "level_theme": "Prophet Boss Round",
      "category": "Prophets and Their Encounters",
      "challengeType": "prophet-boss",
      "mechanic": "prophet-boss",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true,
      "clues": [
        "I accurately predicted King Josiah's desecration of Bethel's altar three centuries in advance.",
        "King Jeroboam's outstretched hand shriveled when he tried to arrest me.",
        "I was seduced into breaking my divine travel orders by an old local prophet."
      ]
    }
  },
  {
    "id": "bible-character-quest-l25-c4",
    "game_slug": "bible-character-quest",
    "level": 25,
    "challenge_index": 4,
    "question_text": "Which Old Testament prophet's scroll was the Ethiopian royal treasurer reading aloud when Philip approached his chariot and asked: 'Do you understand what you are reading?'",
    "options": [
      "Isaiah",
      "Jeremiah",
      "Daniel",
      "Zechariah"
    ],
    "correct_answer": "Isaiah",
    "reference": "Acts 8:30-35",
    "explanation": "The Ethiopian eunuch was reading Isaiah 53:7-8 ('As a sheep led to the slaughter...'); Philip began with that Scripture and told him the good news about Jesus.",
    "metadata": {
      "stage": 5,
      "stage_title": "Prophets and Their Encounters",
      "level_theme": "Prophet Boss Round",
      "category": "Prophets and Their Encounters",
      "challengeType": "prophet-boss",
      "mechanic": "prophet-boss",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true,
      "clues": [
        "I wrote the extensive 'Suffering Servant' prophecies in the Old Testament.",
        "My text depicted a sheep led silently to slaughter before its shearers.",
        "Philip used my 53rd chapter to bring the gospel to Africa."
      ]
    }
  },
  {
    "id": "bible-character-quest-l25-c5",
    "game_slug": "bible-character-quest",
    "level": 25,
    "challenge_index": 5,
    "question_text": "When King Jehoash (Joash) of Israel visited the dying prophet Elisha, why did the prophet become furious with the young king over his arrow-shooting assignment?",
    "options": [
      "The king struck the ground only three times instead of five or six",
      "The king refused to touch the sacred bow",
      "The king shot the arrow toward Jerusalem instead of Aram",
      "The king broke the bow of cedar in frustration"
    ],
    "correct_answer": "The king struck the ground only three times instead of five or six",
    "reference": "2 Kings 13:14-19",
    "explanation": "Elisha was angry because Joash struck the ground only three times, signifying he would defeat Syria only three times instead of totally destroying them.",
    "metadata": {
      "stage": 5,
      "stage_title": "Prophets and Their Encounters",
      "level_theme": "Prophet Boss Round",
      "category": "Prophets and Their Encounters",
      "challengeType": "prophet-boss",
      "mechanic": "prophet-boss",
      "difficulty": "hard",
      "timerSeconds": 25,
      "curated": true,
      "clues": [
        "The dying prophet laid his trembling hands upon the young king's hands on the bow.",
        "The king shot the 'arrow of the Lord's deliverance' through an eastern window.",
        "The king's lack of zeal and faith limited Israel's future military victories."
      ]
    }
  },
  {
    "id": "bible-character-quest-l26-c1",
    "game_slug": "bible-character-quest",
    "level": 26,
    "challenge_index": 1,
    "question_text": "Which devout and righteous man in Jerusalem was promised by the Holy Spirit that he would not die before seeing the Lord's Messiah, and held Jesus in his arms proclaiming peace?",
    "options": [
      "Simeon",
      "Zechariah",
      "Nicodemus",
      "Joseph of Arimathea"
    ],
    "correct_answer": "Simeon",
    "reference": "Luke 2:25-32",
    "explanation": "Simeon took the infant Jesus into his arms and praised God with the Nunc Dimittis, declaring Christ a light of revelation to the Gentiles and glory to Israel.",
    "metadata": {
      "stage": 6,
      "stage_title": "The People Around Jesus",
      "level_theme": "The Birth Story",
      "category": "The People Around Jesus",
      "challengeType": "birth-story",
      "mechanic": "birth-story",
      "difficulty": "hard",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "I was an elderly saint waiting expectantly for the consolation of Israel.",
        "The Holy Spirit rested upon me and promised I would gaze upon the Christ.",
        "I warned Mary that a sword would pierce her own soul also."
      ]
    }
  },
  {
    "id": "bible-character-quest-l26-c2",
    "game_slug": "bible-character-quest",
    "level": 26,
    "challenge_index": 2,
    "question_text": "When the angel Gabriel announced the virgin birth of Jesus to Mary in Nazareth, he stated that God would give Him the royal throne of which Old Testament king?",
    "options": [
      "David",
      "Abraham",
      "Solomon",
      "Judah"
    ],
    "correct_answer": "David",
    "reference": "Luke 1:32",
    "explanation": "Gabriel announced: 'He will be great and will be called the Son of the Most High. The Lord God will give him the throne of his father David.'",
    "metadata": {
      "stage": 6,
      "stage_title": "The People Around Jesus",
      "level_theme": "The Birth Story",
      "category": "The People Around Jesus",
      "challengeType": "birth-story",
      "mechanic": "birth-story",
      "difficulty": "hard",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "I was the shepherd boy who became Israel's greatest king.",
        "God made an everlasting covenant with my house and royal throne.",
        "Gabriel cited my ancient lineage when announcing Christ's eternal kingdom."
      ]
    }
  },
  {
    "id": "bible-character-quest-l26-c3",
    "game_slug": "bible-character-quest",
    "level": 26,
    "challenge_index": 3,
    "question_text": "Which Roman imperial administrator was serving as governor of Syria during the historic census that required Joseph and Mary to register in Bethlehem?",
    "options": [
      "Quirinius",
      "Pontius Pilate",
      "Felix",
      "Gallio"
    ],
    "correct_answer": "Quirinius",
    "reference": "Luke 2:2",
    "explanation": "Luke 2:2 explicitly notes: 'This was the first registration when Quirinius was governor of Syria.'",
    "metadata": {
      "stage": 6,
      "stage_title": "The People Around Jesus",
      "level_theme": "The Birth Story",
      "category": "The People Around Jesus",
      "challengeType": "birth-story",
      "mechanic": "birth-story",
      "difficulty": "hard",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "I was an experienced Roman military commander and senator.",
        "I oversaw the imperial province of Syria bordering Judea.",
        "Luke recorded my name to anchor the Savior's birth to secular world history."
      ]
    }
  },
  {
    "id": "bible-character-quest-l26-c4",
    "game_slug": "bible-character-quest",
    "level": 26,
    "challenge_index": 4,
    "question_text": "Which elderly relative of Mary, belonging to the priestly daughters of Aaron, conceived John the Baptist in her old age and exclaimed 'Blessed are you among women'?",
    "options": [
      "Elizabeth",
      "Anna",
      "Salome",
      "Joanna"
    ],
    "correct_answer": "Elizabeth",
    "reference": "Luke 1:36-42",
    "explanation": "Elizabeth, wife of Zechariah, was filled with the Holy Spirit when Mary greeted her, and the baby leaped in her womb for joy.",
    "metadata": {
      "stage": 6,
      "stage_title": "The People Around Jesus",
      "level_theme": "The Birth Story",
      "category": "The People Around Jesus",
      "challengeType": "birth-story",
      "mechanic": "birth-story",
      "difficulty": "hard",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "I had been barren for decades and was advanced in years.",
        "My unborn child leaped within my womb at the sound of Mary's voice.",
        "I was mother to the greatest prophet born of women."
      ]
    }
  },
  {
    "id": "bible-character-quest-l26-c5",
    "game_slug": "bible-character-quest",
    "level": 26,
    "challenge_index": 5,
    "question_text": "In Matthew 2:17-18, the horrific slaughter of infant boys in Bethlehem by Herod the Great is identified as fulfilling Jeremiah's prophecy of which biblical mother weeping?",
    "options": [
      "Rachel",
      "Leah",
      "Sarah",
      "Rebekah"
    ],
    "correct_answer": "Rachel",
    "reference": "Matthew 2:17-18; Jeremiah 31:15",
    "explanation": "Matthew cites Jeremiah 31:15: 'A voice was heard in Ramah, weeping and great mourning, Rachel weeping for her children and refusing to be comforted.'",
    "metadata": {
      "stage": 6,
      "stage_title": "The People Around Jesus",
      "level_theme": "The Birth Story",
      "category": "The People Around Jesus",
      "challengeType": "birth-story",
      "mechanic": "birth-story",
      "difficulty": "hard",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "I was Jacob's dearly loved wife who died giving birth near Bethlehem.",
        "My tomb stood along the ancient road to Ephrath (Bethlehem).",
        "Jeremiah portrayed me weeping for my children as they marched into captivity."
      ]
    }
  },
  {
    "id": "bible-character-quest-l27-c1",
    "game_slug": "bible-character-quest",
    "level": 27,
    "challenge_index": 1,
    "question_text": "Which of the twelve apostles is called 'the Cananite' in Matthew and Mark, and 'the Zealot' in Luke, to distinguish him from Simon Peter?",
    "options": [
      "Simon the Zealot",
      "Simon of Cyrene",
      "Simon the Leper",
      "Simon Magus"
    ],
    "correct_answer": "Simon the Zealot",
    "reference": "Matthew 10:4; Luke 6:15; Acts 1:13",
    "explanation": "Simon the Zealot (or Cananite, from Hebrew qanna meaning 'zealous') was one of the Twelve, distinguished from Simon Peter.",
    "metadata": {
      "stage": 6,
      "stage_title": "The People Around Jesus",
      "level_theme": "The Twelve",
      "category": "The People Around Jesus",
      "challengeType": "the-twelve",
      "mechanic": "the-twelve",
      "difficulty": "hard",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "I was one of the twelve chosen apostles.",
        "My surname designated my fervent Jewish patriotic zeal or former faction.",
        "I sat beside tax collector Matthew as a fellow disciple of the Prince of Peace."
      ]
    }
  },
  {
    "id": "bible-character-quest-l27-c2",
    "game_slug": "bible-character-quest",
    "level": 27,
    "challenge_index": 2,
    "question_text": "Which apostle from Bethsaida found Nathanael under a fig tree and declared: 'We have found Him of whom Moses in the law, and also the prophets, wrote'?",
    "options": [
      "Philip",
      "Andrew",
      "Thomas",
      "James son of Alphaeus"
    ],
    "correct_answer": "Philip",
    "reference": "John 1:43-45",
    "explanation": "Jesus found Philip and said 'Follow me'; Philip then found Nathanael and invited him saying, 'Come and see.'",
    "metadata": {
      "stage": 6,
      "stage_title": "The People Around Jesus",
      "level_theme": "The Twelve",
      "category": "The People Around Jesus",
      "challengeType": "the-twelve",
      "mechanic": "the-twelve",
      "difficulty": "hard",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "I hailed from the Galilean fishing town of Bethsaida.",
        "I invited a skeptical friend saying 'Come and see.'",
        "At the feeding of the 5,000, Jesus tested my faith regarding bread for the crowd."
      ]
    }
  },
  {
    "id": "bible-character-quest-l27-c3",
    "game_slug": "bible-character-quest",
    "level": 27,
    "challenge_index": 3,
    "question_text": "Which apostle was named Didymus (the Twin), famously offered to die with Jesus in Judea, and later proclaimed 'My Lord and my God!' after touching His wounds?",
    "options": [
      "Thomas",
      "Thaddaeus",
      "Bartholomew",
      "James son of Alphaeus"
    ],
    "correct_answer": "Thomas",
    "reference": "John 11:16; John 20:24-28",
    "explanation": "Thomas called Didymus showed fierce courage when Lazarus died and later uttered the highest confession of Christ's divinity upon seeing His risen scars.",
    "metadata": {
      "stage": 6,
      "stage_title": "The People Around Jesus",
      "level_theme": "The Twelve",
      "category": "The People Around Jesus",
      "challengeType": "the-twelve",
      "mechanic": "the-twelve",
      "difficulty": "hard",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "My Greek surname means 'the Twin.'",
        "I was not present on Easter Sunday evening when Jesus first appeared.",
        "I fell on my knees confessing 'My Lord and my God!' when examining the nail prints."
      ]
    }
  },
  {
    "id": "bible-character-quest-l27-c4",
    "game_slug": "bible-character-quest",
    "level": 27,
    "challenge_index": 4,
    "question_text": "Which apostle is identified in Luke 6:16 and Acts 1:13 as 'Judas son of James', also known in Matthew and Mark as Thaddaeus (or Lebbaeus)?",
    "options": [
      "Judas son of James (Thaddaeus)",
      "Judas Iscariot",
      "Judas Barsabbas",
      "Jude the brother of Jesus"
    ],
    "correct_answer": "Judas son of James (Thaddaeus)",
    "reference": "Luke 6:16; John 14:22",
    "explanation": "Judas (not Iscariot) asked Jesus at the Last Supper: 'Lord, how is it that you will manifest yourself to us, and not to the world?'",
    "metadata": {
      "stage": 6,
      "stage_title": "The People Around Jesus",
      "level_theme": "The Twelve",
      "category": "The People Around Jesus",
      "challengeType": "the-twelve",
      "mechanic": "the-twelve",
      "difficulty": "hard",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "I was one of the Twelve, often referred to by my alternate name Thaddaeus.",
        "Scripture specifically clarifies 'Judas, not Iscariot' when quoting me.",
        "I questioned Jesus in the upper room regarding how He would reveal Himself."
      ]
    }
  },
  {
    "id": "bible-character-quest-l27-c5",
    "game_slug": "bible-character-quest",
    "level": 27,
    "challenge_index": 5,
    "question_text": "In Matthew 19:28, what supreme eschatological reward did Jesus promise the Twelve when the Son of Man sits on His glorious throne?",
    "options": [
      "Sitting on twelve thrones, judging the twelve tribes of Israel",
      "Ruling over twelve Roman provinces",
      "Commanding twelve legions of archangels",
      "Receiving twelve golden crowns of martyrdom"
    ],
    "correct_answer": "Sitting on twelve thrones, judging the twelve tribes of Israel",
    "reference": "Matthew 19:28",
    "explanation": "Jesus promised the twelve apostles that in the regeneration when the Son of Man sits on His glorious throne, they also will sit on twelve thrones judging Israel's twelve tribes.",
    "metadata": {
      "stage": 6,
      "stage_title": "The People Around Jesus",
      "level_theme": "The Twelve",
      "category": "The People Around Jesus",
      "challengeType": "the-twelve",
      "mechanic": "the-twelve",
      "difficulty": "hard",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "This promise links the twelve New Testament apostles with Old Testament tribal heritage.",
        "It speaks of royal authority in the renewal and regeneration of all things.",
        "It promises judicial and governing seats over God's redeemed people."
      ]
    }
  },
  {
    "id": "bible-character-quest-l28-c1",
    "game_slug": "bible-character-quest",
    "level": 28,
    "challenge_index": 1,
    "question_text": "Which blind beggar sat by the road outside Jericho crying persistently: 'Jesus, Son of David, have mercy on me!', throwing off his cloak when summoned?",
    "options": [
      "Bartimaeus son of Timaeus",
      "Zacchaeus",
      "Malchus",
      "Cleopas"
    ],
    "correct_answer": "Bartimaeus son of Timaeus",
    "reference": "Mark 10:46-52",
    "explanation": "Bartimaeus, son of Timaeus, shouted for mercy; Jesus restored his sight, and he immediately followed Jesus on the road.",
    "metadata": {
      "stage": 6,
      "stage_title": "The People Around Jesus",
      "level_theme": "Around the Master",
      "category": "The People Around Jesus",
      "challengeType": "around-the-master",
      "mechanic": "around-the-master",
      "difficulty": "hard",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "Mark preserves both my personal name and my father's patronymic.",
        "The crowd rebuked me and told me to be quiet, but I shouted louder.",
        "I sprang up, cast aside my beggar's cloak, and received my sight."
      ]
    }
  },
  {
    "id": "bible-character-quest-l28-c2",
    "game_slug": "bible-character-quest",
    "level": 28,
    "challenge_index": 2,
    "question_text": "Alongside Mary Magdalene and Joanna, which other woman is explicitly mentioned by name in Luke 8:3 as providing for Jesus out of her personal financial means?",
    "options": [
      "Susanna",
      "Salome",
      "Martha",
      "Rhoda"
    ],
    "correct_answer": "Susanna",
    "reference": "Luke 8:3",
    "explanation": "Luke 8:2-3 names Mary Magdalene, Joanna wife of Chuza, and Susanna, and many others, who were ministering to Jesus and His disciples from their substance.",
    "metadata": {
      "stage": 6,
      "stage_title": "The People Around Jesus",
      "level_theme": "Around the Master",
      "category": "The People Around Jesus",
      "challengeType": "around-the-master",
      "mechanic": "around-the-master",
      "difficulty": "hard",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "I was an eyewitness disciple during Jesus' Galilean travels.",
        "I am honored by name in Luke's Gospel as a financial benefactor.",
        "My financial support sustained the traveling company of the Messiah."
      ]
    }
  },
  {
    "id": "bible-character-quest-l28-c3",
    "game_slug": "bible-character-quest",
    "level": 28,
    "challenge_index": 3,
    "question_text": "Which disciple was walking with an unnamed companion toward a village seven miles from Jerusalem on resurrection day when Jesus joined them unnoticed?",
    "options": [
      "Cleopas",
      "Nicodemus",
      "Joseph of Arimathea",
      "Barnabas"
    ],
    "correct_answer": "Cleopas",
    "reference": "Luke 24:18",
    "explanation": "Cleopas and his companion walked to Emmaus; their eyes were restrained until Jesus took bread, blessed it, broke it, and gave it to them.",
    "metadata": {
      "stage": 6,
      "stage_title": "The People Around Jesus",
      "level_theme": "Around the Master",
      "category": "The People Around Jesus",
      "challengeType": "around-the-master",
      "mechanic": "around-the-master",
      "difficulty": "hard",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "I was walking to Emmaus, deeply dejected after the crucifixion.",
        "I asked the stranger: 'Are you the only visitor to Jerusalem unaware of these things?'",
        "My heart burned within me as He opened the Scriptures along the road."
      ]
    }
  },
  {
    "id": "bible-character-quest-l28-c4",
    "game_slug": "bible-character-quest",
    "level": 28,
    "challenge_index": 4,
    "question_text": "In whose house in Bethany was Jesus reclining at table when a woman poured a costly alabaster flask of pure nard over His head?",
    "options": [
      "Simon the Leper",
      "Simon the Pharisee",
      "Simon the Tanner",
      "Lazarus"
    ],
    "correct_answer": "Simon the Leper",
    "reference": "Matthew 26:6; Mark 14:3",
    "explanation": "In Bethany, in the house of Simon the Leper, Mary poured precious ointment on Jesus, preparing His body beforehand for burial.",
    "metadata": {
      "stage": 6,
      "stage_title": "The People Around Jesus",
      "level_theme": "Around the Master",
      "category": "The People Around Jesus",
      "challengeType": "around-the-master",
      "mechanic": "around-the-master",
      "difficulty": "hard",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "I lived in the quiet village of Bethany near the Mount of Olives.",
        "My surname preserves the memory of a dreadful skin disease Jesus likely healed.",
        "My dining table became the setting for the fragrant anointing of the Messiah."
      ]
    }
  },
  {
    "id": "bible-character-quest-l28-c5",
    "game_slug": "bible-character-quest",
    "level": 28,
    "challenge_index": 5,
    "question_text": "When Jesus rested beside Jacob's well at Sychar in Samaria, John notes this plot of land had originally been given by patriarch Jacob to which beloved son?",
    "options": [
      "Joseph",
      "Judah",
      "Benjamin",
      "Levi"
    ],
    "correct_answer": "Joseph",
    "reference": "John 4:5; Genesis 48:22; Joshua 24:32",
    "explanation": "John 4:5 notes Sychar was near the parcel of ground Jacob gave to his son Joseph, where Joseph's bones were buried.",
    "metadata": {
      "stage": 6,
      "stage_title": "The People Around Jesus",
      "level_theme": "Around the Master",
      "category": "The People Around Jesus",
      "challengeType": "around-the-master",
      "mechanic": "around-the-master",
      "difficulty": "hard",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "I was the favored son with the coat of many colors.",
        "My bones were carried out of Egypt by Moses during the Exodus.",
        "I was buried in Shechem, near where Jesus spoke with the Samaritan woman."
      ]
    }
  },
  {
    "id": "bible-character-quest-l29-c1",
    "game_slug": "bible-character-quest",
    "level": 29,
    "challenge_index": 1,
    "question_text": "Which ruler of the Capernaum synagogue fell at Jesus' feet pleading for his dying twelve-year-old daughter, whom Jesus raised saying 'Talitha cumi'?",
    "options": [
      "Jairus",
      "Nicodemus",
      "Crispus",
      "Sosthenes"
    ],
    "correct_answer": "Jairus",
    "reference": "Mark 5:22-43; Luke 8:41",
    "explanation": "Jairus, a synagogue leader, trusted Jesus even after hearing his daughter had died; Jesus took the girl by the hand and raised her to life.",
    "metadata": {
      "stage": 6,
      "stage_title": "The People Around Jesus",
      "level_theme": "The Miracle Witnesses",
      "category": "The People Around Jesus",
      "challengeType": "miracle-witnesses",
      "mechanic": "miracle-witnesses",
      "difficulty": "very-hard",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "I held the prominent local office of synagogue president.",
        "My only twelve-year-old daughter was at the point of death.",
        "Jesus told me: 'Do not fear, only believe,' and raised my child from death."
      ]
    }
  },
  {
    "id": "bible-character-quest-l29-c2",
    "game_slug": "bible-character-quest",
    "level": 29,
    "challenge_index": 2,
    "question_text": "What was the exact personal name of the high priest's servant whose right ear was sliced off by Peter in Gethsemane and miraculously healed by Jesus?",
    "options": [
      "Malchus",
      "Alexander",
      "Rufus",
      "Chuza"
    ],
    "correct_answer": "Malchus",
    "reference": "John 18:10; Luke 22:51",
    "explanation": "John 18:10 identifies the servant of the high priest as Malchus; Luke 22:51 records that Jesus touched his ear and healed him.",
    "metadata": {
      "stage": 6,
      "stage_title": "The People Around Jesus",
      "level_theme": "The Miracle Witnesses",
      "category": "The People Around Jesus",
      "challengeType": "miracle-witnesses",
      "mechanic": "miracle-witnesses",
      "difficulty": "very-hard",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "I was the personal slave and agent of High Priest Caiaphas.",
        "I accompanied the armed mob into the dark Garden of Gethsemane.",
        "Jesus performed His final recorded healing miracle upon my severed right ear."
      ]
    }
  },
  {
    "id": "bible-character-quest-l29-c3",
    "game_slug": "bible-character-quest",
    "level": 29,
    "challenge_index": 3,
    "question_text": "At the city gates of which Galilean town did Jesus encounter a funeral bier, pity a weeping widow, and command her deceased only son: 'Young man, arise'?",
    "options": [
      "Nain",
      "Bethsaida",
      "Capernaum",
      "Chorazin"
    ],
    "correct_answer": "Nain",
    "reference": "Luke 7:11-15",
    "explanation": "At the town of Nain, Jesus had compassion on a widow whose only son was dead; He touched the coffin and the young man sat up and began to speak.",
    "metadata": {
      "stage": 6,
      "stage_title": "The People Around Jesus",
      "level_theme": "The Miracle Witnesses",
      "category": "The People Around Jesus",
      "challengeType": "miracle-witnesses",
      "mechanic": "miracle-witnesses",
      "difficulty": "very-hard",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "I was a small agricultural town in southern Galilee near Mount Moreh.",
        "A funeral procession carried a young man out toward the cemetery.",
        "Jesus stopped the open coffin and restored the son alive to his mother."
      ]
    }
  },
  {
    "id": "bible-character-quest-l29-c4",
    "game_slug": "bible-character-quest",
    "level": 29,
    "challenge_index": 4,
    "question_text": "Near which pool in Jerusalem, surrounded by five covered porticoes, did Jesus heal a man who had suffered from an infirmity for thirty-eight years?",
    "options": [
      "Bethesda",
      "Siloam",
      "Gihon",
      "En-rogel"
    ],
    "correct_answer": "Bethesda",
    "reference": "John 5:2-9",
    "explanation": "At the pool of Bethesda near the Sheep Gate, Jesus found an invalid who had been sick 38 years, commanded him to take up his mat, and healed him.",
    "metadata": {
      "stage": 6,
      "stage_title": "The People Around Jesus",
      "level_theme": "The Miracle Witnesses",
      "category": "The People Around Jesus",
      "challengeType": "miracle-witnesses",
      "mechanic": "miracle-witnesses",
      "difficulty": "very-hard",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "I was located near the historic Sheep Gate in Jerusalem.",
        "My perimeter featured five covered colonnades packed with invalids.",
        "Jesus bypassed the superstitions of stirred waters and healed a man paralyzed 38 years."
      ]
    }
  },
  {
    "id": "bible-character-quest-l29-c5",
    "game_slug": "bible-character-quest",
    "level": 29,
    "challenge_index": 5,
    "question_text": "After witnessing Jesus feed the five thousand with five loaves and two fish, the astonished crowd proclaimed Him to be 'The Prophet', fulfilling the prophecy of which leader in Deuteronomy 18?",
    "options": [
      "Moses",
      "Elijah",
      "Samuel",
      "Joshua"
    ],
    "correct_answer": "Moses",
    "reference": "John 6:14; Deuteronomy 18:15",
    "explanation": "Seeing the bread miracle in the wilderness, the people recognized Jesus as the prophet like unto Moses promised in Deuteronomy 18:15.",
    "metadata": {
      "stage": 6,
      "stage_title": "The People Around Jesus",
      "level_theme": "The Miracle Witnesses",
      "category": "The People Around Jesus",
      "challengeType": "miracle-witnesses",
      "mechanic": "miracle-witnesses",
      "difficulty": "very-hard",
      "timerSeconds": 30,
      "curated": true,
      "clues": [
        "I led Israel through the wilderness where bread fell from heaven.",
        "I foretold: 'The Lord your God will raise up for you a prophet like me from your brothers.'",
        "The crowds recognized the bread miracle as the arrival of my promised successor."
      ]
    }
  },
  {
    "id": "bible-character-quest-l30-c1",
    "game_slug": "bible-character-quest",
    "level": 30,
    "challenge_index": 1,
    "question_text": "Which prominent Sanhedrin member from Arimathea, who had not consented to the council's condemnation, boldly requested Jesus' body from Pilate and laid Him in his own new tomb?",
    "options": [
      "Joseph of Arimathea",
      "Joseph called Barsabbas",
      "Joseph the carpenter",
      "Joseph a Levite of Cyprus"
    ],
    "correct_answer": "Joseph of Arimathea",
    "reference": "Matthew 27:57-60; Mark 15:43; Luke 23:50-53",
    "explanation": "Joseph of Arimathea, a rich and honorable council member waiting for God's kingdom, took down Jesus' body, wrapped it in linen, and laid it in his personal rock tomb.",
    "metadata": {
      "stage": 6,
      "stage_title": "The People Around Jesus",
      "level_theme": "The Gospel Identity Test",
      "category": "The People Around Jesus",
      "challengeType": "gospel-identity",
      "mechanic": "gospel-identity",
      "difficulty": "very-hard",
      "timerSeconds": 25,
      "curated": true,
      "clues": [
        "I was a wealthy and respected member of the Jewish supreme council.",
        "I was secretly a disciple of Jesus for fear of the Jewish authorities.",
        "I went boldly before Pontius Pilate to claim and bury the Lord's crucified body."
      ]
    }
  },
  {
    "id": "bible-character-quest-l30-c2",
    "game_slug": "bible-character-quest",
    "level": 30,
    "challenge_index": 2,
    "question_text": "Distinguish these biblical Marys: Which Mary was the sister of Martha and Lazarus who sat at Jesus' feet listening to His words and later anointed His feet with costly spikenard?",
    "options": [
      "Mary of Bethany",
      "Mary Magdalene",
      "Mary of Clopas",
      "Mary mother of John Mark"
    ],
    "correct_answer": "Mary of Bethany",
    "reference": "Luke 10:38-42; John 11:1-2; John 12:1-3",
    "explanation": "Mary of Bethany chose the good portion by sitting at Jesus' feet; she later wiped His feet with her hair after pouring a pound of costly nard on Him.",
    "metadata": {
      "stage": 6,
      "stage_title": "The People Around Jesus",
      "level_theme": "The Gospel Identity Test",
      "category": "The People Around Jesus",
      "challengeType": "gospel-identity",
      "mechanic": "gospel-identity",
      "difficulty": "very-hard",
      "timerSeconds": 25,
      "curated": true,
      "clues": [
        "I lived with my brother and sister just east of Jerusalem.",
        "Jesus commended my spiritual priority over domestic hospitality busyness.",
        "I poured an entire alabaster container of nard worth a year's wages on my Lord."
      ]
    }
  },
  {
    "id": "bible-character-quest-l30-c3",
    "game_slug": "bible-character-quest",
    "level": 30,
    "challenge_index": 3,
    "question_text": "Distinguish these biblical Lazaruses: Which Lazarus was the beloved friend whom Jesus wept over and raised to life after being dead in a rock tomb for four days?",
    "options": [
      "Lazarus of Bethany",
      "Lazarus the beggar at the rich man's gate",
      "Eleazar the high priest",
      "Eliezer of Damascus"
    ],
    "correct_answer": "Lazarus of Bethany",
    "reference": "John 11:1-44",
    "explanation": "Lazarus of Bethany, brother of Martha and Mary, had been in the tomb four days until Jesus shouted: 'Lazarus, come out!'",
    "metadata": {
      "stage": 6,
      "stage_title": "The People Around Jesus",
      "level_theme": "The Gospel Identity Test",
      "category": "The People Around Jesus",
      "challengeType": "gospel-identity",
      "mechanic": "gospel-identity",
      "difficulty": "very-hard",
      "timerSeconds": 25,
      "curated": true,
      "clues": [
        "I was the subject of the shortest verse in Scripture: 'Jesus wept.'",
        "I was wrapped in graveclothes and decomposing in a limestone tomb for four days.",
        "The chief priests plotted to murder me because many believed in Jesus on my account."
      ]
    }
  },
  {
    "id": "bible-character-quest-l30-c4",
    "game_slug": "bible-character-quest",
    "level": 30,
    "challenge_index": 4,
    "question_text": "Distinguish these biblical Simons: Which Simon from North Africa was compelled by Roman soldiers to carry Jesus' heavy wooden cross-beam, whose sons were Alexander and Rufus?",
    "options": [
      "Simon of Cyrene",
      "Simon Peter",
      "Simon the Zealot",
      "Simon the Leper"
    ],
    "correct_answer": "Simon of Cyrene",
    "reference": "Matthew 27:32; Mark 15:21",
    "explanation": "A passerby coming in from the country, Simon of Cyrene, was conscripted by the Roman soldiers to bear Christ's cross behind Him.",
    "metadata": {
      "stage": 6,
      "stage_title": "The People Around Jesus",
      "level_theme": "The Gospel Identity Test",
      "category": "The People Around Jesus",
      "challengeType": "gospel-identity",
      "mechanic": "gospel-identity",
      "difficulty": "very-hard",
      "timerSeconds": 25,
      "curated": true,
      "clues": [
        "I was a pilgrim traveling thousands of miles from North Africa for Passover.",
        "Roman soldiers pressed me into compulsory cross-bearing service.",
        "My sons Alexander and Rufus became well-known believers in the early church."
      ]
    }
  },
  {
    "id": "bible-character-quest-l30-c5",
    "game_slug": "bible-character-quest",
    "level": 30,
    "challenge_index": 5,
    "question_text": "In John 3:14, Jesus told the inquiring Pharisee Nicodemus that just as which Old Testament leader lifted up the bronze serpent on a pole in the wilderness, so must the Son of Man be lifted up?",
    "options": [
      "Moses",
      "Aaron",
      "Joshua",
      "Eleazar"
    ],
    "correct_answer": "Moses",
    "reference": "John 3:14; Numbers 21:8-9",
    "explanation": "Jesus linked His coming crucifixion to Moses lifting the bronze serpent in Numbers 21, so that whoever looks upon Him in faith will have eternal life.",
    "metadata": {
      "stage": 6,
      "stage_title": "The People Around Jesus",
      "level_theme": "The Gospel Identity Test",
      "category": "The People Around Jesus",
      "challengeType": "gospel-identity",
      "mechanic": "gospel-identity",
      "difficulty": "very-hard",
      "timerSeconds": 25,
      "curated": true,
      "clues": [
        "I crafted a serpent of bronze and fastened it to a high pole.",
        "Those bitten by venomous vipers looked upon it in faith and were healed.",
        "Jesus used my wilderness action as the ultimate typological picture of the cross."
      ]
    }
  },
  {
    "id": "bible-character-quest-l31-c1",
    "game_slug": "bible-character-quest",
    "level": 31,
    "challenge_index": 1,
    "question_text": "In the Parable of the Good Samaritan, which two religious officials walked past the beaten traveler on the road from Jerusalem to Jericho before the Samaritan stopped?",
    "options": [
      "A Priest and a Levite",
      "A Pharisee and a Sadducee",
      "A Scribe and an Elder",
      "A Centurion and a Tax Collector"
    ],
    "correct_answer": "A Priest and a Levite",
    "reference": "Luke 10:31-32",
    "explanation": "Jesus described a priest and then a Levite who both came down that road, saw the wounded traveler, and crossed to pass by on the other side.",
    "metadata": {
      "stage": 7,
      "stage_title": "Parables, Encounters and the Final Week",
      "level_theme": "The Parable Characters",
      "category": "Parables, Encounters and the Final Week",
      "challengeType": "parable-characters",
      "mechanic": "parable-characters",
      "difficulty": "very-hard",
      "timerSeconds": 25,
      "curated": true,
      "clues": [
        "We held sacred hereditary offices in the Jerusalem temple system.",
        "We both observed a stripped and half-dead countryman in a ditch.",
        "We both crossed over to the opposite side of the road and kept walking."
      ]
    }
  },
  {
    "id": "bible-character-quest-l31-c2",
    "game_slug": "bible-character-quest",
    "level": 31,
    "challenge_index": 2,
    "question_text": "In the Parable of the Rich Man and Lazarus, what was the specific name of the poor beggar who lay at the rich man's gate covered with sores, longing for scraps?",
    "options": [
      "Lazarus",
      "Eleazar",
      "Bartimaeus",
      "Zacchaeus"
    ],
    "correct_answer": "Lazarus",
    "reference": "Luke 16:20",
    "explanation": "This is the only character given an individual personal name in any of Jesus' parables: Lazarus, meaning 'God is my helper'.",
    "metadata": {
      "stage": 7,
      "stage_title": "Parables, Encounters and the Final Week",
      "level_theme": "The Parable Characters",
      "category": "Parables, Encounters and the Final Week",
      "challengeType": "parable-characters",
      "mechanic": "parable-characters",
      "difficulty": "very-hard",
      "timerSeconds": 25,
      "curated": true,
      "clues": [
        "I was an impoverished, disabled outcast covered with ulcerated sores.",
        "The domestic dogs of the estate came and licked my wounds.",
        "I was carried away by the angels to Abraham's bosom."
      ]
    }
  },
  {
    "id": "bible-character-quest-l31-c3",
    "game_slug": "bible-character-quest",
    "level": 31,
    "challenge_index": 3,
    "question_text": "In the Parable of the Two Sons, which Old Testament prophet-like figure did Jesus say came showing the way of righteousness, whom tax collectors and prostitutes believed?",
    "options": [
      "John the Baptist",
      "Elijah",
      "Jeremiah",
      "Malachi"
    ],
    "correct_answer": "John the Baptist",
    "reference": "Matthew 21:31-32",
    "explanation": "Jesus told the chief priests: 'John came to you in the way of righteousness, and you did not believe him, but the tax collectors and the prostitutes believed him.'",
    "metadata": {
      "stage": 7,
      "stage_title": "Parables, Encounters and the Final Week",
      "level_theme": "The Parable Characters",
      "category": "Parables, Encounters and the Final Week",
      "challengeType": "parable-characters",
      "mechanic": "parable-characters",
      "difficulty": "very-hard",
      "timerSeconds": 25,
      "curated": true,
      "clues": [
        "I preached in the Judean wilderness heralding the kingdom.",
        "Outcasts repented at my preaching while the religious elite rejected me.",
        "Jesus cited my ministry when teaching the parable of the two sons."
      ]
    }
  },
  {
    "id": "bible-character-quest-l31-c4",
    "game_slug": "bible-character-quest",
    "level": 31,
    "challenge_index": 4,
    "question_text": "In the Parable of the Unjust Judge, who persistently came to him pleading: 'Give me justice against my adversary', causing the judge to finally grant her legal relief?",
    "options": [
      "A persistent widow",
      "A destitute orphan",
      "A runaway servant",
      "A grieving mother"
    ],
    "correct_answer": "A persistent widow",
    "reference": "Luke 18:2-5",
    "explanation": "Jesus told this parable that disciples ought always to pray and not lose heart: a widow wore down an uncaring judge by her continual coming.",
    "metadata": {
      "stage": 7,
      "stage_title": "Parables, Encounters and the Final Week",
      "level_theme": "The Parable Characters",
      "category": "Parables, Encounters and the Final Week",
      "challengeType": "parable-characters",
      "mechanic": "parable-characters",
      "difficulty": "very-hard",
      "timerSeconds": 25,
      "curated": true,
      "clues": [
        "I had neither social influence nor financial leverage in the municipal court.",
        "My relentless knocking and petitioning exhausted an unrighteous magistrate.",
        "Jesus used my tenacity to illustrate unwavering perseverance in prayer."
      ]
    }
  },
  {
    "id": "bible-character-quest-l31-c5",
    "game_slug": "bible-character-quest",
    "level": 31,
    "challenge_index": 5,
    "question_text": "In the Parable of the Prodigal Son, who became furiously angry, refused to enter the celebration banquet, and complained that a young goat was never given to him?",
    "options": [
      "The older brother",
      "The father's head steward",
      "The village elder",
      "The younger brother's creditor"
    ],
    "correct_answer": "The older brother",
    "reference": "Luke 15:28-30",
    "explanation": "The older brother became angry and refused to go inside; when his father came out to plead with him, he complained about his years of dutiful slaving.",
    "metadata": {
      "stage": 7,
      "stage_title": "Parables, Encounters and the Final Week",
      "level_theme": "The Parable Characters",
      "category": "Parables, Encounters and the Final Week",
      "challengeType": "parable-characters",
      "mechanic": "parable-characters",
      "difficulty": "very-hard",
      "timerSeconds": 25,
      "curated": true,
      "clues": [
        "I remained at home working the fields faithfully for years.",
        "I grew bitterly resentful when the fatted calf was killed for my wandering sibling.",
        "My father reminded me: 'You are always with me, and all that is mine is yours.'"
      ]
    }
  },
  {
    "id": "bible-character-quest-l32-c1",
    "game_slug": "bible-character-quest",
    "level": 32,
    "challenge_index": 1,
    "question_text": "Which religious group in Jerusalem, who denied the resurrection of the dead, challenged Jesus with the hypothetical problem of a woman married to seven brothers?",
    "options": [
      "The Sadducees",
      "The Pharisees",
      "The Essenes",
      "The Herodians"
    ],
    "correct_answer": "The Sadducees",
    "reference": "Matthew 22:23-28; Luke 20:27-33",
    "explanation": "The Sadducees, who say there is no resurrection, posed the riddle of Levirate marriage; Jesus replied they knew neither the Scriptures nor the power of God.",
    "metadata": {
      "stage": 7,
      "stage_title": "Parables, Encounters and the Final Week",
      "level_theme": "The Questioners",
      "category": "Parables, Encounters and the Final Week",
      "challengeType": "the-questioners",
      "mechanic": "the-questioners",
      "difficulty": "very-hard",
      "timerSeconds": 25,
      "curated": true,
      "clues": [
        "We were the wealthy aristocratic and high-priestly establishment.",
        "We rejected belief in angels, spirits, and the bodily resurrection.",
        "Jesus refuted our theological riddle using God's words to Moses at the burning bush."
      ]
    }
  },
  {
    "id": "bible-character-quest-l32-c2",
    "game_slug": "bible-character-quest",
    "level": 32,
    "challenge_index": 2,
    "question_text": "Which Jewish lawyer stood up to test Jesus by asking 'Teacher, what shall I do to inherit eternal life?' and subsequently asked 'And who is my neighbor?'",
    "options": [
      "An expert in the Mosaic Law",
      "Nicodemus the Pharisee",
      "Gamaliel the doctor of law",
      "Tertullus the orator"
    ],
    "correct_answer": "An expert in the Mosaic Law",
    "reference": "Luke 10:25-29",
    "explanation": "A certain lawyer (an expert in Torah) stood up to put Jesus to the test, prompting Jesus to tell the timeless Parable of the Good Samaritan.",
    "metadata": {
      "stage": 7,
      "stage_title": "Parables, Encounters and the Final Week",
      "level_theme": "The Questioners",
      "category": "Parables, Encounters and the Final Week",
      "challengeType": "the-questioners",
      "mechanic": "the-questioners",
      "difficulty": "very-hard",
      "timerSeconds": 25,
      "curated": true,
      "clues": [
        "I was professionally trained in the rabbinic interpretation of Torah jurisprudence.",
        "I sought to justify my own limited definition of communal charity.",
        "Jesus answered my second legal query with a piercing story about a traveling Samaritan."
      ]
    }
  },
  {
    "id": "bible-character-quest-l32-c3",
    "game_slug": "bible-character-quest",
    "level": 32,
    "challenge_index": 3,
    "question_text": "In John 12:20-22, which group of Gentile worshipers came up to Philip at the Passover festival with the earnest request: 'Sir, we wish to see Jesus'?",
    "options": [
      "Greeks",
      "Romans",
      "Ethiopians",
      "Syrians"
    ],
    "correct_answer": "Greeks",
    "reference": "John 12:20-22",
    "explanation": "Some Greeks who went up to worship at the feast came to Philip and said 'Sir, we wish to see Jesus.' Philip told Andrew, and together they told Jesus.",
    "metadata": {
      "stage": 7,
      "stage_title": "Parables, Encounters and the Final Week",
      "level_theme": "The Questioners",
      "category": "Parables, Encounters and the Final Week",
      "challengeType": "the-questioners",
      "mechanic": "the-questioners",
      "difficulty": "very-hard",
      "timerSeconds": 25,
      "curated": true,
      "clues": [
        "We were Hellenistic pilgrims traveling to Jerusalem for the Feast of Unleavened Bread.",
        "We approached Philip from Bethsaida because of his Greek name.",
        "Our inquiry signaled to Jesus that the hour had arrived for the Son of Man to be glorified."
      ]
    }
  },
  {
    "id": "bible-character-quest-l32-c4",
    "game_slug": "bible-character-quest",
    "level": 32,
    "challenge_index": 4,
    "question_text": "Which Roman procurator interrogated Jesus during His civil trial, asking 'Are you the King of the Jews?' and the cynical question 'What is truth?'",
    "options": [
      "Pontius Pilate",
      "Antonius Felix",
      "Porcius Festus",
      "Claudius Lysias"
    ],
    "correct_answer": "Pontius Pilate",
    "reference": "John 18:33-38",
    "explanation": "Pontius Pilate, prefect of Judea, repeatedly declared he found no guilt in Jesus, but delivered Him to be crucified to appease the mob.",
    "metadata": {
      "stage": 7,
      "stage_title": "Parables, Encounters and the Final Week",
      "level_theme": "The Questioners",
      "category": "Parables, Encounters and the Final Week",
      "challengeType": "the-questioners",
      "mechanic": "the-questioners",
      "difficulty": "very-hard",
      "timerSeconds": 25,
      "curated": true,
      "clues": [
        "I held the military and judicial authority of the Roman empire in Judea.",
        "I washed my hands in water before the crowd claiming innocence of His blood.",
        "I wrote the official trilingual title on the cross: 'Jesus of Nazareth, King of the Jews.'"
      ]
    }
  },
  {
    "id": "bible-character-quest-l32-c5",
    "game_slug": "bible-character-quest",
    "level": 32,
    "challenge_index": 5,
    "question_text": "When Pharisees asked Jesus if it was lawful to divorce for any cause, Jesus countered by citing God's original creation design of which first couple in Genesis?",
    "options": [
      "Adam and Eve",
      "Abraham and Sarah",
      "Isaac and Rebekah",
      "Jacob and Rachel"
    ],
    "correct_answer": "Adam and Eve",
    "reference": "Matthew 19:4-6; Genesis 1:27; Genesis 2:24",
    "explanation": "Jesus answered: 'He who made them at the beginning made them male and female... what therefore God has joined together, let not man separate.'",
    "metadata": {
      "stage": 7,
      "stage_title": "Parables, Encounters and the Final Week",
      "level_theme": "The Questioners",
      "category": "Parables, Encounters and the Final Week",
      "challengeType": "the-questioners",
      "mechanic": "the-questioners",
      "difficulty": "very-hard",
      "timerSeconds": 25,
      "curated": true,
      "clues": [
        "We were created directly by God in the pristine Garden of Eden.",
        "Scripture records that the two of us became one flesh before the fall.",
        "Jesus cited our original union to nullify easy divorce concessions."
      ]
    }
  },
  {
    "id": "bible-character-quest-l33-c1",
    "game_slug": "bible-character-quest",
    "level": 33,
    "challenge_index": 1,
    "question_text": "Which former high priest, the father-in-law of Caiaphas, had Jesus brought to him first for preliminary interrogation immediately following His arrest in Gethsemane?",
    "options": [
      "Annas",
      "Caiaphas",
      "Ananias son of Nedebaeus",
      "Theophilus"
    ],
    "correct_answer": "Annas",
    "reference": "John 18:13",
    "explanation": "The detachment bound Jesus and led Him first to Annas, who was the father-in-law of Caiaphas, the high priest that year.",
    "metadata": {
      "stage": 7,
      "stage_title": "Parables, Encounters and the Final Week",
      "level_theme": "The Final Week",
      "category": "Parables, Encounters and the Final Week",
      "challengeType": "final-week",
      "mechanic": "final-week",
      "difficulty": "very-hard",
      "timerSeconds": 25,
      "curated": true,
      "clues": [
        "I had previously held the high priesthood and retained enormous patriarchal control.",
        "Five of my sons and my son-in-law held the high priestly office.",
        "The temple police brought Jesus to my palace first for initial questioning."
      ]
    }
  },
  {
    "id": "bible-character-quest-l33-c2",
    "game_slug": "bible-character-quest",
    "level": 33,
    "challenge_index": 2,
    "question_text": "Which infamous prisoner and insurrectionist, who had committed murder in the uprising in Jerusalem, was released by Pilate instead of Jesus?",
    "options": [
      "Barabbas",
      "Simon of Cyrene",
      "Gestas",
      "Dismas"
    ],
    "correct_answer": "Barabbas",
    "reference": "Matthew 27:16-26; Mark 15:7",
    "explanation": "Barabbas was in prison with the insurrectionists who had committed murder; the crowd, incited by chief priests, demanded his release and Jesus' crucifixion.",
    "metadata": {
      "stage": 7,
      "stage_title": "Parables, Encounters and the Final Week",
      "level_theme": "The Final Week",
      "category": "Parables, Encounters and the Final Week",
      "challengeType": "final-week",
      "mechanic": "final-week",
      "difficulty": "very-hard",
      "timerSeconds": 25,
      "curated": true,
      "clues": [
        "My patronymic surname means 'son of the father.'",
        "I was a convicted violent revolutionary awaiting execution on a Roman cross.",
        "By custom of the festival, I walked out of death row a free man while Jesus took my cross."
      ]
    }
  },
  {
    "id": "bible-character-quest-l33-c3",
    "game_slug": "bible-character-quest",
    "level": 33,
    "challenge_index": 3,
    "question_text": "Who sent an urgent message to Pontius Pilate sitting on the judgment seat: 'Have nothing to do with that righteous man, for I have suffered much today in a dream because of him'?",
    "options": [
      "Pilate's wife",
      "Herodias",
      "Salome",
      "Bernice"
    ],
    "correct_answer": "Pilate's wife",
    "reference": "Matthew 27:19",
    "explanation": "While Pilate was sitting on the judgment seat, his wife sent him word warning him not to condemn that righteous man because of a terrifying dream.",
    "metadata": {
      "stage": 7,
      "stage_title": "Parables, Encounters and the Final Week",
      "level_theme": "The Final Week",
      "category": "Parables, Encounters and the Final Week",
      "challengeType": "final-week",
      "mechanic": "final-week",
      "difficulty": "very-hard",
      "timerSeconds": 25,
      "curated": true,
      "clues": [
        "I was the Roman aristocratic spouse of the governor of Judea.",
        "I experienced a deeply unsettling daytime dream concerning Jesus of Nazareth.",
        "I dispatched an urgent runner to interrupt formal courtroom proceedings with my warning."
      ]
    }
  },
  {
    "id": "bible-character-quest-l33-c4",
    "game_slug": "bible-character-quest",
    "level": 33,
    "challenge_index": 4,
    "question_text": "Which Roman military officer standing facing Jesus on the cross witnessed how He died and exclaimed: 'Truly this man was the Son of God!'?",
    "options": [
      "The Centurion at the cross",
      "Cornelius of Caesarea",
      "Julius of the Augustan Cohort",
      "Claudius Lysias"
    ],
    "correct_answer": "The Centurion at the cross",
    "reference": "Mark 15:39",
    "explanation": "When the centurion who stood facing Jesus saw the manner of His death, he declared: 'Truly this was the Son of God!'",
    "metadata": {
      "stage": 7,
      "stage_title": "Parables, Encounters and the Final Week",
      "level_theme": "The Final Week",
      "category": "Parables, Encounters and the Final Week",
      "challengeType": "final-week",
      "mechanic": "final-week",
      "difficulty": "very-hard",
      "timerSeconds": 25,
      "curated": true,
      "clues": [
        "I was a hardened Roman commander of eighty to a hundred legionaries.",
        "I supervised the agonizing executions on Golgotha.",
        "The way Jesus breathed His last tore through my pagan worldview and wrung out my confession."
      ]
    }
  },
  {
    "id": "bible-character-quest-l33-c5",
    "game_slug": "bible-character-quest",
    "level": 33,
    "challenge_index": 5,
    "question_text": "Which ruler of Galilee happened to be visiting Jerusalem for Passover, hoped to see Jesus perform a miraculous sign, and mocked Him in an elegant robe before sending Him back?",
    "options": [
      "Herod Antipas",
      "Herod Agrippa I",
      "Archelaus",
      "Philip the Tetrarch"
    ],
    "correct_answer": "Herod Antipas",
    "reference": "Luke 23:7-11",
    "explanation": "Pilate sent Jesus to Herod Antipas, who had long desired to see Him; Herod questioned Jesus with many words, but Jesus gave him no answer.",
    "metadata": {
      "stage": 7,
      "stage_title": "Parables, Encounters and the Final Week",
      "level_theme": "The Final Week",
      "category": "Parables, Encounters and the Final Week",
      "challengeType": "final-week",
      "mechanic": "final-week",
      "difficulty": "very-hard",
      "timerSeconds": 25,
      "curated": true,
      "clues": [
        "I was the tetrarch who had earlier executed John the Baptist.",
        "I was thrilled when Pilate transferred Jesus into my municipal jurisdiction.",
        "Jesus spoke not a single syllable to me, so I dressed Him in mock splendour and returned Him."
      ]
    }
  },
  {
    "id": "bible-character-quest-l34-c1",
    "game_slug": "bible-character-quest",
    "level": 34,
    "challenge_index": 1,
    "question_text": "Which woman came to the tomb while it was still dark, found the stone taken away, mistook the risen Lord for the gardener, and heard Him call her 'Mary'?",
    "options": [
      "Mary Magdalene",
      "Mary the mother of James",
      "Mary of Bethany",
      "Salome"
    ],
    "correct_answer": "Mary Magdalene",
    "reference": "John 20:1-16",
    "explanation": "Mary Magdalene wept outside the tomb; Jesus appeared to her first, called her by name, and sent her as the first witness to announce His resurrection to the apostles.",
    "metadata": {
      "stage": 7,
      "stage_title": "Parables, Encounters and the Final Week",
      "level_theme": "Resurrection Witnesses",
      "category": "Parables, Encounters and the Final Week",
      "challengeType": "resurrection-witnesses",
      "mechanic": "resurrection-witnesses",
      "difficulty": "very-hard",
      "timerSeconds": 25,
      "curated": true,
      "clues": [
        "Jesus had previously delivered me from seven tormenting demons.",
        "I stood weeping alone in the dawn mist outside the empty limestone tomb.",
        "When He called my name, I turned and cried out in Aramaic: 'Rabboni!'"
      ]
    }
  },
  {
    "id": "bible-character-quest-l34-c2",
    "game_slug": "bible-character-quest",
    "level": 34,
    "challenge_index": 2,
    "question_text": "Which disciple, absent when the risen Lord first appeared on Sunday evening, insisted he would never believe unless he placed his finger in the nail marks and hand in His side?",
    "options": [
      "Thomas",
      "Philip",
      "Bartholomew",
      "James son of Alphaeus"
    ],
    "correct_answer": "Thomas",
    "reference": "John 20:24-28",
    "explanation": "Eight days later Jesus appeared again and invited Thomas to put his finger into His hands and his hand into His side; Thomas fell in worship.",
    "metadata": {
      "stage": 7,
      "stage_title": "Parables, Encounters and the Final Week",
      "level_theme": "Resurrection Witnesses",
      "category": "Parables, Encounters and the Final Week",
      "challengeType": "resurrection-witnesses",
      "mechanic": "resurrection-witnesses",
      "difficulty": "very-hard",
      "timerSeconds": 25,
      "curated": true,
      "clues": [
        "I was not with the ten disciples behind locked doors on resurrection night.",
        "I demanded tangible empirical proof before accepting their testimony.",
        "One week later I uttered: 'My Lord and my God!'"
      ]
    }
  },
  {
    "id": "bible-character-quest-l34-c3",
    "game_slug": "bible-character-quest",
    "level": 34,
    "challenge_index": 3,
    "question_text": "In John 21:2, which seven disciples were gathered fishing on the Sea of Tiberias when the risen Jesus stood on the shore at dawn and prepared fish and bread?",
    "options": [
      "Peter, Thomas, Nathanael, the sons of Zebedee, and two other disciples",
      "All eleven remaining apostles together",
      "Peter, Andrew, James, John, and Matthew",
      "Peter, Cleopas, Barnabas, and four unnamed women"
    ],
    "correct_answer": "Peter, Thomas, Nathanael, the sons of Zebedee, and two other disciples",
    "reference": "John 21:1-4",
    "explanation": "John 21:2 enumerates: Simon Peter, Thomas called Didymus, Nathanael of Cana in Galilee, the sons of Zebedee (James and John), and two others of His disciples.",
    "metadata": {
      "stage": 7,
      "stage_title": "Parables, Encounters and the Final Week",
      "level_theme": "Resurrection Witnesses",
      "category": "Parables, Encounters and the Final Week",
      "challengeType": "resurrection-witnesses",
      "mechanic": "resurrection-witnesses",
      "difficulty": "very-hard",
      "timerSeconds": 25,
      "curated": true,
      "clues": [
        "We had toiled all night on the lake without netting a single fish.",
        "A figure on the shore directed us to cast our net on the right side of the boat.",
        "We dragged 153 large fish ashore and breakfasted on the beach with Jesus."
      ]
    }
  },
  {
    "id": "bible-character-quest-l34-c4",
    "game_slug": "bible-character-quest",
    "level": 34,
    "challenge_index": 4,
    "question_text": "In 1 Corinthians 15:6, the Apostle Paul reports that the risen Christ appeared in a single resurrection event to more than how many brothers at once?",
    "options": [
      "More than 500 brothers at one time",
      "Exactly 120 disciples",
      "More than 70 disciples",
      "Exactly 3,000 believers"
    ],
    "correct_answer": "More than 500 brothers at one time",
    "reference": "1 Corinthians 15:6",
    "explanation": "Paul wrote that Jesus appeared to more than 500 brothers at one time, most of whom were still alive when 1 Corinthians was written.",
    "metadata": {
      "stage": 7,
      "stage_title": "Parables, Encounters and the Final Week",
      "level_theme": "Resurrection Witnesses",
      "category": "Parables, Encounters and the Final Week",
      "challengeType": "resurrection-witnesses",
      "mechanic": "resurrection-witnesses",
      "difficulty": "very-hard",
      "timerSeconds": 25,
      "curated": true,
      "clues": [
        "This was the largest single mass sighting of the resurrected Christ.",
        "Paul noted that the majority of these eyewitnesses were still living when he penned his letter.",
        "It provided overwhelming legal and historical validation of the empty tomb."
      ]
    }
  },
  {
    "id": "bible-character-quest-l34-c5",
    "game_slug": "bible-character-quest",
    "level": 34,
    "challenge_index": 5,
    "question_text": "In 1 Corinthians 15:7, to which specific earthly brother of Jesus did the risen Lord appear individually, transforming him from a skeptic into a pillars-leader of the Jerusalem church?",
    "options": [
      "James the brother of the Lord",
      "Jude",
      "Joses",
      "Simon"
    ],
    "correct_answer": "James the brother of the Lord",
    "reference": "1 Corinthians 15:7; Galatians 1:19",
    "explanation": "Paul records: 'Then he appeared to James, then to all the apostles.' This appearance convinced James, who later presided over the Jerusalem Council.",
    "metadata": {
      "stage": 7,
      "stage_title": "Parables, Encounters and the Final Week",
      "level_theme": "Resurrection Witnesses",
      "category": "Parables, Encounters and the Final Week",
      "challengeType": "resurrection-witnesses",
      "mechanic": "resurrection-witnesses",
      "difficulty": "very-hard",
      "timerSeconds": 25,
      "curated": true,
      "clues": [
        "During Jesus' earthly ministry, my brothers and I did not believe in Him.",
        "The risen Christ met me personally and privately after His resurrection.",
        "I became the widely respected presiding overseer of the mother church in Jerusalem."
      ]
    }
  },
  {
    "id": "bible-character-quest-l35-c1",
    "game_slug": "bible-character-quest",
    "level": 35,
    "challenge_index": 1,
    "question_text": "Which prominent Pharisee and Sanhedrin ruler brought a lavish mixture of myrrh and aloes weighing about seventy-five Roman pounds to assist in burying Jesus?",
    "options": [
      "Nicodemus",
      "Joseph of Arimathea",
      "Gamaliel",
      "Simon the Pharisee"
    ],
    "correct_answer": "Nicodemus",
    "reference": "John 19:39-40",
    "explanation": "Nicodemus, who had at first come to Jesus by night, brought about seventy-five pounds of myrrh and aloes to wrap Jesus' body with spices according to Jewish burial custom.",
    "metadata": {
      "stage": 7,
      "stage_title": "Parables, Encounters and the Final Week",
      "level_theme": "Gospel Character Boss",
      "category": "Parables, Encounters and the Final Week",
      "challengeType": "gospel-boss",
      "mechanic": "gospel-boss",
      "difficulty": "very-hard",
      "timerSeconds": 20,
      "curated": true,
      "clues": [
        "I initially sought Jesus under cover of darkness to inquire about being born again.",
        "I had defended Jesus' right to a fair legal hearing before my hostile colleagues.",
        "I contributed a royal quantity of 100 Roman pounds of aromatic spices for His tomb."
      ]
    }
  },
  {
    "id": "bible-character-quest-l35-c2",
    "game_slug": "bible-character-quest",
    "level": 35,
    "challenge_index": 2,
    "question_text": "When Jesus cleansed the Jerusalem temple of money changers, which two Old Testament prophets did He combine: 'My house shall be called a house of prayer' and 'a den of robbers'?",
    "options": [
      "Isaiah and Jeremiah",
      "Elijah and Elisha",
      "Ezekiel and Daniel",
      "Hosea and Micah"
    ],
    "correct_answer": "Isaiah and Jeremiah",
    "reference": "Matthew 21:13; Isaiah 56:7; Jeremiah 7:11",
    "explanation": "Jesus combined Isaiah 56:7 ('for my house shall be called a house of prayer for all nations') with Jeremiah 7:11 ('has this house... become a den of robbers in your eyes?').",
    "metadata": {
      "stage": 7,
      "stage_title": "Parables, Encounters and the Final Week",
      "level_theme": "Gospel Character Boss",
      "category": "Parables, Encounters and the Final Week",
      "challengeType": "gospel-boss",
      "mechanic": "gospel-boss",
      "difficulty": "very-hard",
      "timerSeconds": 20,
      "curated": true,
      "clues": [
        "Our ancient prophetic scrolls exposed hypocritical sacrificial trade.",
        "One of us foretold a house of prayer for all Gentile nations.",
        "The other condemned Judeans who turned God's sanctuary into a cave of bandits."
      ]
    }
  },
  {
    "id": "bible-character-quest-l35-c3",
    "game_slug": "bible-character-quest",
    "level": 35,
    "challenge_index": 3,
    "question_text": "Which high priest made the unconscious prophetic statement to the Sanhedrin: 'It is better for you that one man should die for the people, and not that the whole nation perish'?",
    "options": [
      "Caiaphas",
      "Annas",
      "Jonathan son of Annas",
      "Theophilus son of Annas"
    ],
    "correct_answer": "Caiaphas",
    "reference": "John 11:49-52",
    "explanation": "Joseph Caiaphas, being high priest that fateful year, prophesied without realizing it that Jesus was about to die for the nation and gather God's scattered children.",
    "metadata": {
      "stage": 7,
      "stage_title": "Parables, Encounters and the Final Week",
      "level_theme": "Gospel Character Boss",
      "category": "Parables, Encounters and the Final Week",
      "challengeType": "gospel-boss",
      "mechanic": "gospel-boss",
      "difficulty": "very-hard",
      "timerSeconds": 20,
      "curated": true,
      "clues": [
        "I was the official high priest who presided over Jesus' trial.",
        "I presided over the Sanhedrin plot after the resurrection of Lazarus.",
        "John notes that being high priest that year, God spoke a profound substitutionary prophecy through my words."
      ]
    }
  },
  {
    "id": "bible-character-quest-l35-c4",
    "game_slug": "bible-character-quest",
    "level": 35,
    "challenge_index": 4,
    "question_text": "Which young man fled naked through the garden of Gethsemane on the night of Jesus' arrest, leaving behind his linen garment in the hands of the arresting mob?",
    "options": [
      "An unnamed young follower (traditionally John Mark)",
      "John the Apostle",
      "James son of Alphaeus",
      "Tychicus"
    ],
    "correct_answer": "An unnamed young follower (traditionally John Mark)",
    "reference": "Mark 14:51-52",
    "explanation": "Mark alone preserves the detail of a young man wearing only a linen cloth over his naked body who fled naked when seized by the temple guards.",
    "metadata": {
      "stage": 7,
      "stage_title": "Parables, Encounters and the Final Week",
      "level_theme": "Gospel Character Boss",
      "category": "Parables, Encounters and the Final Week",
      "challengeType": "gospel-boss",
      "mechanic": "gospel-boss",
      "difficulty": "very-hard",
      "timerSeconds": 20,
      "curated": true,
      "clues": [
        "I was roused from sleep wearing only a night linen wrapper.",
        "I trailed the armed detachment into the olive groves of Gethsemane.",
        "When the guards grabbed my cloth, I slipped free and sprinted into the darkness naked."
      ]
    }
  },
  {
    "id": "bible-character-quest-l35-c5",
    "game_slug": "bible-character-quest",
    "level": 35,
    "challenge_index": 5,
    "question_text": "Which woman is identified in Mark 15:40 and 16:1 as being at the crucifixion and empty tomb, identified elsewhere in Matthew as the mother of Zebedee's sons?",
    "options": [
      "Salome",
      "Joanna",
      "Susanna",
      "Martha"
    ],
    "correct_answer": "Salome",
    "reference": "Mark 15:40; Matthew 27:56",
    "explanation": "Comparing Mark 15:40 with Matthew 27:56 reveals that Salome is the mother of James and John, the sons of Zebedee.",
    "metadata": {
      "stage": 7,
      "stage_title": "Parables, Encounters and the Final Week",
      "level_theme": "Gospel Character Boss",
      "category": "Parables, Encounters and the Final Week",
      "challengeType": "gospel-boss",
      "mechanic": "gospel-boss",
      "difficulty": "very-hard",
      "timerSeconds": 20,
      "curated": true,
      "clues": [
        "I had followed and ministered to Jesus throughout His journeys in Galilee.",
        "I had once requested premier seats for my two sons on the right and left of His kingdom.",
        "I carried morning spices to the limestone garden tomb on the first Easter morning."
      ]
    }
  },
  {
    "id": "bible-character-quest-l36-c1",
    "game_slug": "bible-character-quest",
    "level": 36,
    "challenge_index": 1,
    "question_text": "Which disciple was chosen by lot to replace Judas Iscariot as the twelfth apostle after prayer, chosen over Joseph called Barsabbas (Justus)?",
    "options": [
      "Matthias",
      "Barnabas",
      "Silas",
      "Stephen"
    ],
    "correct_answer": "Matthias",
    "reference": "Acts 1:21-26",
    "explanation": "Two men were proposed: Joseph called Barsabbas and Matthias; after prayer, the lots fell on Matthias, and he was numbered with the eleven apostles.",
    "metadata": {
      "stage": 8,
      "stage_title": "The Early Church",
      "level_theme": "Acts of the Apostles",
      "category": "The Early Church",
      "challengeType": "acts-apostles",
      "mechanic": "acts-apostles",
      "difficulty": "very-hard",
      "timerSeconds": 25,
      "curated": true,
      "clues": [
        "I accompanied Jesus from John's baptism until His ascension.",
        "My qualifications matched Peter's requirement for a resurrection witness.",
        "The apostolic lot fell upon me in the upper room."
      ]
    }
  },
  {
    "id": "bible-character-quest-l36-c2",
    "game_slug": "bible-character-quest",
    "level": 36,
    "challenge_index": 2,
    "question_text": "Which respected Pharisee and doctor of the law in the Sanhedrin cautioned the council regarding Peter and John, citing the failed rebellions of Theudas and Judas the Galilean?",
    "options": [
      "Gamaliel",
      "Nicodemus",
      "Alexander",
      "Caiaphas"
    ],
    "correct_answer": "Gamaliel",
    "reference": "Acts 5:34-40",
    "explanation": "Gamaliel, a teacher of the law held in honor by all the people, advised: 'If this counsel or work is of men, it will fail; but if it is of God, you cannot overthrow it.'",
    "metadata": {
      "stage": 8,
      "stage_title": "The Early Church",
      "level_theme": "Acts of the Apostles",
      "category": "The Early Church",
      "challengeType": "acts-apostles",
      "mechanic": "acts-apostles",
      "difficulty": "very-hard",
      "timerSeconds": 25,
      "curated": true,
      "clues": [
        "I was the grandson of the famous Rabbi Hillel and leader of the School of Hillel.",
        "Saul of Tarsus had sat at my feet to be trained in the strict law.",
        "My calm judicial intervention saved the early apostles from immediate execution."
      ]
    }
  },
  {
    "id": "bible-character-quest-l36-c3",
    "game_slug": "bible-character-quest",
    "level": 36,
    "challenge_index": 3,
    "question_text": "Which sorcerer in Samaria had astonished the populace claiming to be 'that power of God which is called Great', yet offered Peter money to purchase the gift of the Holy Spirit?",
    "options": [
      "Simon Magus (the Sorcerer)",
      "Elymas",
      "Theudas",
      "Alexander"
    ],
    "correct_answer": "Simon Magus (the Sorcerer)",
    "reference": "Acts 8:9-24",
    "explanation": "Simon the sorcerer practiced magic in Samaria; after baptism, he attempted to buy apostolic power, prompting Peter to say his heart was not right before God.",
    "metadata": {
      "stage": 8,
      "stage_title": "The Early Church",
      "level_theme": "Acts of the Apostles",
      "category": "The Early Church",
      "challengeType": "acts-apostles",
      "mechanic": "acts-apostles",
      "difficulty": "very-hard",
      "timerSeconds": 25,
      "curated": true,
      "clues": [
        "The entire Samaritan public had venerated me as an embodiment of divine energy.",
        "Philip's authentic miracles completely shattered my magical prestige.",
        "Peter severely rebuked me for thinking the gift of God could be bought with silver."
      ]
    }
  },
  {
    "id": "bible-character-quest-l36-c4",
    "game_slug": "bible-character-quest",
    "level": 36,
    "challenge_index": 4,
    "question_text": "Which chief official of the island of Malta welcomed Paul and his shipmates hospitably, whose father Paul healed of fever and dysentery through prayer and laying on of hands?",
    "options": [
      "Publius",
      "Julius",
      "Theophilus",
      "Gallio"
    ],
    "correct_answer": "Publius",
    "reference": "Acts 28:7-8",
    "explanation": "Publius, the leading man of Malta, owned estates near the shipwreck site; Paul entered and healed his bedridden father, prompting all island sick to come.",
    "metadata": {
      "stage": 8,
      "stage_title": "The Early Church",
      "level_theme": "Acts of the Apostles",
      "category": "The Early Church",
      "challengeType": "acts-apostles",
      "mechanic": "acts-apostles",
      "difficulty": "very-hard",
      "timerSeconds": 25,
      "curated": true,
      "clues": [
        "I was the supreme magistrate and wealthiest landholder on the island of Malta.",
        "I opened my private estate to shelter 276 soaked shipwreck survivors for three days.",
        "Paul's miraculous healing of my father opened the entire island to the gospel."
      ]
    }
  },
  {
    "id": "bible-character-quest-l36-c5",
    "game_slug": "bible-character-quest",
    "level": 36,
    "challenge_index": 5,
    "question_text": "In Acts 7, whose speech to the Sanhedrin retells the entire Old Testament story from Abraham to Solomon before being stoned as the first Christian martyr?",
    "options": [
      "Stephen",
      "Philip",
      "Peter",
      "Paul"
    ],
    "correct_answer": "Stephen",
    "reference": "Acts 6:8-15; Acts 7:1-60",
    "explanation": "Stephen, a man full of grace and power, reviewed Israel's history of rejecting God's messengers and saw heaven opened with the Son of Man standing at God's right hand.",
    "metadata": {
      "stage": 8,
      "stage_title": "The Early Church",
      "level_theme": "Acts of the Apostles",
      "category": "The Early Church",
      "challengeType": "acts-apostles",
      "mechanic": "acts-apostles",
      "difficulty": "very-hard",
      "timerSeconds": 25,
      "curated": true,
      "clues": [
        "My face shone like the face of an angel before the Sanhedrin council.",
        "I delivered the longest theological address recorded in the Book of Acts.",
        "As jagged stones battered my body, I cried: 'Lord, do not hold this sin against them.'"
      ]
    }
  },
  {
    "id": "bible-character-quest-l37-c1",
    "game_slug": "bible-character-quest",
    "level": 37,
    "challenge_index": 1,
    "question_text": "Which Macedonian believer from Thessalonica was dragged into the Ephesus theater riot alongside Gaius and later accompanied Paul on his voyage to Rome as a fellow prisoner?",
    "options": [
      "Aristarchus",
      "Secundus",
      "Epaphras",
      "Tychicus"
    ],
    "correct_answer": "Aristarchus",
    "reference": "Acts 19:29; Acts 27:2; Colossians 4:10",
    "explanation": "Aristarchus of Thessalonica was seized in Ephesus, sailed with Paul on the prison ship to Rome, and is greeted by Paul as 'my fellow prisoner' in Colossians 4:10.",
    "metadata": {
      "stage": 8,
      "stage_title": "The Early Church",
      "level_theme": "Paul's Companions",
      "category": "The Early Church",
      "challengeType": "pauls-companions",
      "mechanic": "pauls-companions",
      "difficulty": "very-hard",
      "timerSeconds": 25,
      "curated": true,
      "clues": [
        "I hailed from the bustling Macedonian port city of Thessalonica.",
        "A screaming pagan mob hauled me into the 25,000-seat amphitheater at Ephesus.",
        "Paul specifically called me his fellow prisoner when writing from Roman custody."
      ]
    }
  },
  {
    "id": "bible-character-quest-l37-c2",
    "game_slug": "bible-character-quest",
    "level": 37,
    "challenge_index": 2,
    "question_text": "Which faithful minister from Colossae evangelized the Lycus Valley cities (Colossae, Laodicea, and Hierapolis) and was described by Paul as 'always laboring fervently for you in prayers'?",
    "options": [
      "Epaphras",
      "Philemon",
      "Archippus",
      "Trophimus"
    ],
    "correct_answer": "Epaphras",
    "reference": "Colossians 1:7; Colossians 4:12-13; Philemon 1:23",
    "explanation": "Epaphras founded the church in Colossae and shared Paul's imprisonment in Rome, constantly wrestling in prayer for his home congregations.",
    "metadata": {
      "stage": 8,
      "stage_title": "The Early Church",
      "level_theme": "Paul's Companions",
      "category": "The Early Church",
      "challengeType": "pauls-companions",
      "mechanic": "pauls-companions",
      "difficulty": "very-hard",
      "timerSeconds": 25,
      "curated": true,
      "clues": [
        "I was the local evangelist who planted the church in Colossae.",
        "I carried news of the Colossian heresy directly to Paul's prison quarters.",
        "Paul described me as a prayer warrior wrestling on my knees for your maturity."
      ]
    }
  },
  {
    "id": "bible-character-quest-l37-c3",
    "game_slug": "bible-character-quest",
    "level": 37,
    "challenge_index": 3,
    "question_text": "Which trusted emissary and 'beloved brother' from Asia was dispatched by Paul to deliver the circular letters to Ephesus and Colossae, carrying personal news of Paul's affairs?",
    "options": [
      "Tychicus",
      "Trophimus",
      "Erastus",
      "Artemas"
    ],
    "correct_answer": "Tychicus",
    "reference": "Ephesians 6:21-22; Colossians 4:7-8; 2 Timothy 4:12",
    "explanation": "Paul called Tychicus a beloved brother and faithful minister who would tell them all his news and encourage their hearts; he carried the letters to Ephesus and Colossae.",
    "metadata": {
      "stage": 8,
      "stage_title": "The Early Church",
      "level_theme": "Paul's Companions",
      "category": "The Early Church",
      "challengeType": "pauls-companions",
      "mechanic": "pauls-companions",
      "difficulty": "very-hard",
      "timerSeconds": 25,
      "curated": true,
      "clues": [
        "I was an Asian Christian delegate representing the churches during the famine collection.",
        "Paul trusted me with the physical manuscripts of the Ephesian and Colossian epistles.",
        "I served as Paul's reliable courier and replacement pastor for Titus and Timothy."
      ]
    }
  },
  {
    "id": "bible-character-quest-l37-c4",
    "game_slug": "bible-character-quest",
    "level": 37,
    "challenge_index": 4,
    "question_text": "Which Ephesian companion was mistakenly assumed by Jerusalem Jews to have been brought into the forbidden temple courts by Paul, triggering the riot that led to Paul's arrest?",
    "options": [
      "Trophimus",
      "Tychicus",
      "Alexander",
      "Sosthenes"
    ],
    "correct_answer": "Trophimus",
    "reference": "Acts 21:29; 2 Timothy 4:20",
    "explanation": "The mob rioted because they had seen Trophimus the Ephesian in the city with Paul and wrongly assumed Paul had brought a Gentile past the temple barrier.",
    "metadata": {
      "stage": 8,
      "stage_title": "The Early Church",
      "level_theme": "Paul's Companions",
      "category": "The Early Church",
      "challengeType": "pauls-companions",
      "mechanic": "pauls-companions",
      "difficulty": "very-hard",
      "timerSeconds": 25,
      "curated": true,
      "clues": [
        "I was a Gentile believer from the major metropolis of Ephesus.",
        "My casual stroll through the streets of Jerusalem sparked a wild riot.",
        "Later, Paul had to leave me behind ill at Miletus."
      ]
    }
  },
  {
    "id": "bible-character-quest-l37-c5",
    "game_slug": "bible-character-quest",
    "level": 37,
    "challenge_index": 5,
    "question_text": "Which runaway slave belonging to Philemon met Paul in Roman prison, was converted to Christ, and was sent back by Paul as 'a beloved brother' carrying a personal plea?",
    "options": [
      "Onesimus",
      "Tychicus",
      "Epaphroditus",
      "Tertius"
    ],
    "correct_answer": "Onesimus",
    "reference": "Philemon 1:10-16; Colossians 4:9",
    "explanation": "Onesimus, whose name means 'useful', had run away from Philemon; Paul led him to faith and sent him back not merely as a bondservant, but as a beloved brother.",
    "metadata": {
      "stage": 8,
      "stage_title": "The Early Church",
      "level_theme": "Paul's Companions",
      "category": "The Early Church",
      "challengeType": "pauls-companions",
      "mechanic": "pauls-companions",
      "difficulty": "very-hard",
      "timerSeconds": 25,
      "curated": true,
      "clues": [
        "My Greek name literally meant 'useful' or 'profitable.'",
        "I was a fugitive slave who escaped across the Mediterranean to imperial Rome.",
        "Paul became my spiritual father in chains and petitioned my master to welcome me as a brother."
      ]
    }
  },
  {
    "id": "bible-character-quest-l38-c1",
    "game_slug": "bible-character-quest",
    "level": 38,
    "challenge_index": 1,
    "question_text": "Which native of Alexandria was an eloquent speaker mighty in the Scriptures who accurately taught about Jesus, yet knew only the baptism of John until Priscilla and Aquila instructed him?",
    "options": [
      "Apollos",
      "Barnabas",
      "Stephen",
      "Titus"
    ],
    "correct_answer": "Apollos",
    "reference": "Acts 18:24-28",
    "explanation": "Apollos was eloquent and mighty in the Scriptures, but when Priscilla and Aquila heard him in Ephesus, they took him aside and explained the way of God more accurately.",
    "metadata": {
      "stage": 8,
      "stage_title": "The Early Church",
      "level_theme": "Early Church Leaders",
      "category": "The Early Church",
      "challengeType": "early-leaders",
      "mechanic": "early-leaders",
      "difficulty": "very-hard",
      "timerSeconds": 25,
      "curated": true,
      "clues": [
        "I came from the great intellectual center of Alexandria in Egypt.",
        "I was fervent in spirit and debated Jewish opponents forcefully in public.",
        "A tentmaking couple gently pulled me aside to complete my understanding of Christian baptism."
      ]
    }
  },
  {
    "id": "bible-character-quest-l38-c2",
    "game_slug": "bible-character-quest",
    "level": 38,
    "challenge_index": 2,
    "question_text": "Which deaconess (or servant) of the church in Cenchreae was commended by Paul to the Roman believers as a benefactor and courier of the Epistle to the Romans?",
    "options": [
      "Phoebe",
      "Priscilla",
      "Chloe",
      "Lydia"
    ],
    "correct_answer": "Phoebe",
    "reference": "Romans 16:1-2",
    "explanation": "Paul commended Phoebe, a deaconess of the church at Cenchreae (the eastern port of Corinth), who had been a patron of many and of Paul himself.",
    "metadata": {
      "stage": 8,
      "stage_title": "The Early Church",
      "level_theme": "Early Church Leaders",
      "category": "The Early Church",
      "challengeType": "early-leaders",
      "mechanic": "early-leaders",
      "difficulty": "very-hard",
      "timerSeconds": 25,
      "curated": true,
      "clues": [
        "I served the congregation in Cenchreae, the bustling eastern harbor of Corinth.",
        "Paul honored me with the title of diakonos and recognized me as a patron/benefactor.",
        "I had the historic honor of physically transporting Paul's theological masterpiece to Rome."
      ]
    }
  },
  {
    "id": "bible-character-quest-l38-c3",
    "game_slug": "bible-character-quest",
    "level": 38,
    "challenge_index": 3,
    "question_text": "Which tentmaking husband-and-wife team had fled Rome under Emperor Claudius' edict, welcomed Paul into their home and workshop in Corinth, and risked their necks for his life?",
    "options": [
      "Aquila and Priscilla",
      "Ananias and Sapphira",
      "Philemon and Apphia",
      "Andronicus and Junia"
    ],
    "correct_answer": "Aquila and Priscilla",
    "reference": "Acts 18:1-3; Romans 16:3-4",
    "explanation": "Aquila, a native of Pontus, and his wife Priscilla were leatherworkers/tentmakers like Paul; they hosted a church in their home and risked their lives for Paul.",
    "metadata": {
      "stage": 8,
      "stage_title": "The Early Church",
      "level_theme": "Early Church Leaders",
      "category": "The Early Church",
      "challengeType": "early-leaders",
      "mechanic": "early-leaders",
      "difficulty": "very-hard",
      "timerSeconds": 25,
      "curated": true,
      "clues": [
        "We were Jewish refugees expelled from the capital by the imperial decree of Claudius.",
        "We shared the identical trade of leatherworking and tent manufacturing with Paul.",
        "All the churches of the Gentiles give thanks for our courageous life-risking loyalty."
      ]
    }
  },
  {
    "id": "bible-character-quest-l38-c4",
    "game_slug": "bible-character-quest",
    "level": 38,
    "challenge_index": 4,
    "question_text": "Which Levite from Cyprus sold his field and laid the money at the apostles' feet, earning the nickname 'Son of Encouragement' from the Twelve?",
    "options": [
      "Barnabas (Joseph)",
      "Stephen",
      "Matthias",
      "Mnason"
    ],
    "correct_answer": "Barnabas (Joseph)",
    "reference": "Acts 4:36-37",
    "explanation": "Joseph, a Levite of Cypriot origin, was surnamed Barnabas ('Son of Encouragement') by the apostles after selling an agricultural tract and donating all proceeds.",
    "metadata": {
      "stage": 8,
      "stage_title": "The Early Church",
      "level_theme": "Early Church Leaders",
      "category": "The Early Church",
      "challengeType": "early-leaders",
      "mechanic": "early-leaders",
      "difficulty": "very-hard",
      "timerSeconds": 25,
      "curated": true,
      "clues": [
        "My birth name was Joseph, born of the priestly tribe of Levi in Cyprus.",
        "I sponsored the suspected persecutor Saul when all the Jerusalem disciples feared him.",
        "The apostles gave me an affectionate Aramaic surname celebrating my gift of encouragement."
      ]
    }
  },
  {
    "id": "bible-character-quest-l38-c5",
    "game_slug": "bible-character-quest",
    "level": 38,
    "challenge_index": 5,
    "question_text": "Which prominent Corinthian Christian is described in Romans 16:23 as 'host to me and to the whole church', whom Paul personally baptized along with Crispus?",
    "options": [
      "Gaius",
      "Erastus",
      "Stephanas",
      "Quartus"
    ],
    "correct_answer": "Gaius",
    "reference": "Romans 16:23; 1 Corinthians 1:14",
    "explanation": "Gaius was Paul's generous host in Corinth whose home was large enough to accommodate the entire assembled city church.",
    "metadata": {
      "stage": 8,
      "stage_title": "The Early Church",
      "level_theme": "Early Church Leaders",
      "category": "The Early Church",
      "challengeType": "early-leaders",
      "mechanic": "early-leaders",
      "difficulty": "very-hard",
      "timerSeconds": 25,
      "curated": true,
      "clues": [
        "I was one of the very few converts Paul personally baptized in Corinth.",
        "My home was spacious enough to host gatherings for the entire urban congregation.",
        "Paul wrote the final greeting of Romans while enjoying my gracious hospitality."
      ]
    }
  },
  {
    "id": "bible-character-quest-l39-c1",
    "game_slug": "bible-character-quest",
    "level": 39,
    "challenge_index": 1,
    "question_text": "Which Roman centurion of the Italian Cohort stationed in Caesarea was a devout God-fearer who gave alms generously, and was instructed by an angel to send for Peter at Joppa?",
    "options": [
      "Cornelius",
      "Julius",
      "Publius",
      "Sergius Paulus"
    ],
    "correct_answer": "Cornelius",
    "reference": "Acts 10:1-8, 44-48",
    "explanation": "Cornelius was a devout centurion whose prayers and alms ascended as a memorial before God; Peter preached to his household and the Holy Spirit fell on them.",
    "metadata": {
      "stage": 8,
      "stage_title": "The Early Church",
      "level_theme": "Conversion Stories",
      "category": "The Early Church",
      "challengeType": "conversion-stories",
      "mechanic": "conversion-stories",
      "difficulty": "very-hard",
      "timerSeconds": 25,
      "curated": true,
      "clues": [
        "I commanded a unit of one hundred soldiers in the prestigious Italian Cohort.",
        "An angel visited me at the ninth hour of prayer while I fasted.",
        "My home became the landmark site where Gentiles first received the Holy Spirit and baptism."
      ]
    }
  },
  {
    "id": "bible-character-quest-l39-c2",
    "game_slug": "bible-character-quest",
    "level": 39,
    "challenge_index": 2,
    "question_text": "Which wealthy businesswoman from Thyatira who sold expensive purple textiles in Philippi had her heart opened by the Lord to pay attention to Paul's message, and baptized her whole house?",
    "options": [
      "Lydia",
      "Phoebe",
      "Priscilla",
      "Chloe"
    ],
    "correct_answer": "Lydia",
    "reference": "Acts 16:14-15",
    "explanation": "Lydia was a worshiper of God from Thyatira; the Lord opened her heart, and she was baptized along with her household, urging Paul to lodge at her house.",
    "metadata": {
      "stage": 8,
      "stage_title": "The Early Church",
      "level_theme": "Conversion Stories",
      "category": "The Early Church",
      "challengeType": "conversion-stories",
      "mechanic": "conversion-stories",
      "difficulty": "very-hard",
      "timerSeconds": 25,
      "curated": true,
      "clues": [
        "I was an immigrant merchant originating from the textile hub of Thyatira.",
        "I was praying by a riverbank outside Philippi on the Sabbath when missionaries arrived.",
        "I became the very first recorded Christian convert on the continent of Europe."
      ]
    }
  },
  {
    "id": "bible-character-quest-l39-c3",
    "game_slug": "bible-character-quest",
    "level": 39,
    "challenge_index": 3,
    "question_text": "Which Roman civil official in Philippi drew his sword to commit suicide after a midnight earthquake flapped open all prison doors, before Paul shouted: 'Do not harm yourself, for we are all here!'?",
    "options": [
      "The Philippian Jailer",
      "The City Praetor",
      "The Chief Magistrate",
      "The Town Clerk"
    ],
    "correct_answer": "The Philippian Jailer",
    "reference": "Acts 16:27-34",
    "explanation": "The Philippian jailer fell trembling before Paul and Silas, asked 'What must I do to be saved?', washed their flogging stripes, and was baptized that night with his entire family.",
    "metadata": {
      "stage": 8,
      "stage_title": "The Early Church",
      "level_theme": "Conversion Stories",
      "category": "The Early Church",
      "challengeType": "conversion-stories",
      "mechanic": "conversion-stories",
      "difficulty": "very-hard",
      "timerSeconds": 25,
      "curated": true,
      "clues": [
        "Roman law held me personally liable on pain of death if any prisoner escaped.",
        "A violent midnight earthquake shattered cell walls and snapped iron fetters.",
        "I washed my prisoners' lacerated backs and shared a joyful midnight meal with them."
      ]
    }
  },
  {
    "id": "bible-character-quest-l39-c4",
    "game_slug": "bible-character-quest",
    "level": 39,
    "challenge_index": 4,
    "question_text": "Which member of the prestigious Athenian judicial council of the Areopagus believed Paul's gospel after hearing him address the altar 'To the Unknown God' on Mars Hill?",
    "options": [
      "Dionysius the Areopagite",
      "Theophilus",
      "Gallio",
      "Justus"
    ],
    "correct_answer": "Dionysius the Areopagite",
    "reference": "Acts 17:34",
    "explanation": "Acts 17:34 notes that among those who joined Paul in Athens and believed was Dionysius the Areopagite, alongside a prominent woman named Damaris.",
    "metadata": {
      "stage": 8,
      "stage_title": "The Early Church",
      "level_theme": "Conversion Stories",
      "category": "The Early Church",
      "challengeType": "conversion-stories",
      "mechanic": "conversion-stories",
      "difficulty": "very-hard",
      "timerSeconds": 25,
      "curated": true,
      "clues": [
        "I sat as an elite judicial magistrate on the supreme legal council of Athens.",
        "I listened to Paul critique Greek philosophy and announce the resurrection of the dead.",
        "While many mocked, I embraced the gospel of Christ along with a woman named Damaris."
      ]
    }
  },
  {
    "id": "bible-character-quest-l39-c5",
    "game_slug": "bible-character-quest",
    "level": 39,
    "challenge_index": 5,
    "question_text": "Which synagogue ruler in Corinth believed in the Lord with his entire household after hearing Paul preach, prompting many Corinthians to hear, believe, and be baptized?",
    "options": [
      "Crispus",
      "Sosthenes",
      "Jairus",
      "Alexander"
    ],
    "correct_answer": "Crispus",
    "reference": "Acts 18:8; 1 Corinthians 1:14",
    "explanation": "Crispus, the ruler of the synagogue, believed in the Lord together with his entire household; Paul noted in 1 Corinthians 1:14 that he personally baptized Crispus.",
    "metadata": {
      "stage": 8,
      "stage_title": "The Early Church",
      "level_theme": "Conversion Stories",
      "category": "The Early Church",
      "challengeType": "conversion-stories",
      "mechanic": "conversion-stories",
      "difficulty": "very-hard",
      "timerSeconds": 25,
      "curated": true,
      "clues": [
        "I was the highest presiding administrative officer of the Jewish synagogue in Corinth.",
        "My public conversion to Christ shook the entire local Jewish community.",
        "Paul personally baptized me with his own hands alongside Gaius."
      ]
    }
  },
  {
    "id": "bible-character-quest-l40-c1",
    "game_slug": "bible-character-quest",
    "level": 40,
    "challenge_index": 1,
    "question_text": "Which synagogue leader in Corinth was dragged before the judgment seat (bema) of Proconsul Gallio and beaten by the crowd when Gallio refused to judge Jewish religious laws?",
    "options": [
      "Sosthenes",
      "Crispus",
      "Alexander",
      "Jason"
    ],
    "correct_answer": "Sosthenes",
    "reference": "Acts 18:17; 1 Corinthians 1:1",
    "explanation": "The mob seized Sosthenes, the ruler of the synagogue, and beat him before the judgment seat, but Gallio paid no attention; Sosthenes later appears as Paul's brother in 1 Cor 1:1.",
    "metadata": {
      "stage": 8,
      "stage_title": "The Early Church",
      "level_theme": "Missionary Challenge",
      "category": "The Early Church",
      "challengeType": "missionary-challenge",
      "mechanic": "missionary-challenge",
      "difficulty": "very-hard",
      "timerSeconds": 20,
      "curated": true,
      "clues": [
        "I stepped into the synagogue leadership after Crispus converted to Christianity.",
        "Angry onlookers battered me publicly right in front of the Roman tribunal chair.",
        "I subsequently converted and co-authored the opening greeting of First Corinthians with Paul."
      ]
    }
  },
  {
    "id": "bible-character-quest-l40-c2",
    "game_slug": "bible-character-quest",
    "level": 40,
    "challenge_index": 2,
    "question_text": "Which silversmith in Ephesus manufactured silver shrines of the pagan goddess Artemis and ignited a massive citywide riot when Paul's preaching threatened his lucrative trade?",
    "options": [
      "Demetrius",
      "Alexander",
      "Hermogenes",
      "Philetus"
    ],
    "correct_answer": "Demetrius",
    "reference": "Acts 19:24-29",
    "explanation": "Demetrius gathered fellow craftsmen warning that Paul's message that man-made gods are not gods threatened their trade and Artemis' magnificence, sparking a two-hour riot.",
    "metadata": {
      "stage": 8,
      "stage_title": "The Early Church",
      "level_theme": "Missionary Challenge",
      "category": "The Early Church",
      "challengeType": "missionary-challenge",
      "mechanic": "missionary-challenge",
      "difficulty": "very-hard",
      "timerSeconds": 20,
      "curated": true,
      "clues": [
        "My guild created miniature silver souvenirs of one of the Seven Wonders of the World.",
        "I gathered unionized artisan craftsmen to defend our financial bottom line.",
        "My inflammatory speech filled the entire metropolis with hysterical chanting for Artemis."
      ]
    }
  },
  {
    "id": "bible-character-quest-l40-c3",
    "game_slug": "bible-character-quest",
    "level": 40,
    "challenge_index": 3,
    "question_text": "Which Roman military tribune in Jerusalem rescued Paul from a murderous mob in the temple courts, wrote a letter to Governor Felix, and transferred Paul by night with 470 soldiers?",
    "options": [
      "Claudius Lysias",
      "Julius",
      "Cornelius",
      "Publius"
    ],
    "correct_answer": "Claudius Lysias",
    "reference": "Acts 21:31-33; Acts 23:26",
    "explanation": "Claudius Lysias, the chiliarch (commander of 1,000 soldiers in the Antonia Fortress), rescued Paul from assassination and sent him under heavy military guard to Caesarea.",
    "metadata": {
      "stage": 8,
      "stage_title": "The Early Church",
      "level_theme": "Missionary Challenge",
      "category": "The Early Church",
      "challengeType": "missionary-challenge",
      "mechanic": "missionary-challenge",
      "difficulty": "very-hard",
      "timerSeconds": 20,
      "curated": true,
      "clues": [
        "I purchased my prized Roman citizenship for an exorbitant sum of money.",
        "I rushed down with legionary centurions to stop a public lynching in the temple.",
        "I drafted an official military dispatch to Governor Felix and assigned 470 troops to escort Paul."
      ]
    }
  },
  {
    "id": "bible-character-quest-l40-c4",
    "game_slug": "bible-character-quest",
    "level": 40,
    "challenge_index": 4,
    "question_text": "Which professional orator and trial lawyer was hired by High Priest Ananias and Jewish elders to present formal treason charges against Paul before Roman Governor Felix at Caesarea?",
    "options": [
      "Tertullus",
      "Gamaliel",
      "Gallio",
      "Alexander"
    ],
    "correct_answer": "Tertullus",
    "reference": "Acts 24:1-8",
    "explanation": "Ananias came down with elders and an orator named Tertullus, who flattered Felix and accused Paul of being a plague, an instigator of riots, and a ringleader of the Nazarene sect.",
    "metadata": {
      "stage": 8,
      "stage_title": "The Early Church",
      "level_theme": "Missionary Challenge",
      "category": "The Early Church",
      "challengeType": "missionary-challenge",
      "mechanic": "missionary-challenge",
      "difficulty": "very-hard",
      "timerSeconds": 20,
      "curated": true,
      "clues": [
        "I was an eloquent courtroom advocate skilled in Roman jurisprudence and classical rhetoric.",
        "I opened my case with lavish sycophantic flattery toward Governor Felix.",
        "I labeled Paul a biological plague and the ringleader of an illegal seditious sect."
      ]
    }
  },
  {
    "id": "bible-character-quest-l40-c5",
    "game_slug": "bible-character-quest",
    "level": 40,
    "challenge_index": 5,
    "question_text": "Which Roman centurion belonging to the prestigious Augustan Cohort was entrusted with transporting Paul and other imperial prisoners by sea from Caesarea to Rome?",
    "options": [
      "Julius",
      "Cornelius",
      "Publius",
      "Claudius Lysias"
    ],
    "correct_answer": "Julius",
    "reference": "Acts 27:1-3",
    "explanation": "Paul was delivered to a centurion of the Augustan Cohort named Julius, who treated Paul kindly, allowed his friends to attend him, and prevented the sailors from killing prisoners.",
    "metadata": {
      "stage": 8,
      "stage_title": "The Early Church",
      "level_theme": "Missionary Challenge",
      "category": "The Early Church",
      "challengeType": "missionary-challenge",
      "mechanic": "missionary-challenge",
      "difficulty": "very-hard",
      "timerSeconds": 20,
      "curated": true,
      "clues": [
        "I was an officer in the elite Augustan Cohort of the imperial army.",
        "I permitted Paul to visit Christian companions during a port stop in Sidon.",
        "During the shipwreck at Malta, I ordered the soldiers not to kill the prisoners to save Paul's life."
      ]
    }
  },
  {
    "id": "bible-character-quest-l41-c1",
    "game_slug": "bible-character-quest",
    "level": 41,
    "challenge_index": 1,
    "question_text": "Which eighty-year-old Gileadite nobleman from Rogelim provided beds, basins, wheat, barley, honey, and cheese to sustain King David and his troops when fleeing Absalom at Mahanaim?",
    "options": [
      "Barzillai the Gileadite",
      "Shobi son of Nahash",
      "Machir son of Ammiel",
      "Chimham"
    ],
    "correct_answer": "Barzillai the Gileadite",
    "reference": "2 Samuel 17:27-29; 2 Samuel 19:31-39",
    "explanation": "Barzillai was a very aged and wealthy Gileadite who provided King David food during Absalom's revolt; David invited him to Jerusalem, but he sent his son Chimham in his stead.",
    "metadata": {
      "stage": 9,
      "stage_title": "The People You Might Have Forgotten",
      "level_theme": "Minor Character Test",
      "category": "The People You Might Have Forgotten",
      "challengeType": "minor-characters",
      "mechanic": "minor-characters",
      "difficulty": "expert",
      "timerSeconds": 25,
      "curated": true,
      "clues": [
        "I was an eighty-year-old pastoral patriarch living beyond the Jordan in Rogelim.",
        "I hauled wagonloads of food, cheese, and supplies to David's exhausted forces at Mahanaim.",
        "When David offered me a permanent royal pension, I declined due to my advanced age."
      ]
    }
  },
  {
    "id": "bible-character-quest-l41-c2",
    "game_slug": "bible-character-quest",
    "level": 41,
    "challenge_index": 2,
    "question_text": "Which Philistine military exile from Gath arrived with 600 men and swore unwavering loyalty to King David during Absalom's rebellion, saying 'In whatever place my lord the king shall be... there will your servant be'?",
    "options": [
      "Ittai the Gittite",
      "Benaiah son of Jehoiada",
      "Uriah the Hittite",
      "Ahimelech"
    ],
    "correct_answer": "Ittai the Gittite",
    "reference": "2 Samuel 15:19-22; 2 Samuel 18:2",
    "explanation": "Ittai the Gittite, a foreigner from Goliath's hometown, refused David's offer to turn back and was given command of one-third of David's royal army in battle.",
    "metadata": {
      "stage": 9,
      "stage_title": "The People You Might Have Forgotten",
      "level_theme": "Minor Character Test",
      "category": "The People You Might Have Forgotten",
      "challengeType": "minor-characters",
      "mechanic": "minor-characters",
      "difficulty": "expert",
      "timerSeconds": 25,
      "curated": true,
      "clues": [
        "I was an alien commander from the Philistine stronghold of Gath.",
        "I had only recently arrived with 600 veteran warriors when civil war erupted.",
        "David placed one-third of his entire combat army under my strategic command."
      ]
    }
  },
  {
    "id": "bible-character-quest-l41-c3",
    "game_slug": "bible-character-quest",
    "level": 41,
    "challenge_index": 3,
    "question_text": "Which concubine of Saul, daughter of Aiah, took sackcloth and spread it for herself on a rock, guarding the hanging corpses of her two sons from birds and beasts from barley harvest until rain fell?",
    "options": [
      "Rizpah",
      "Merab",
      "Michal",
      "Abital"
    ],
    "correct_answer": "Rizpah",
    "reference": "2 Samuel 21:8-14",
    "explanation": "Rizpah watched vigilantly over the bodies of her sons Armoni and Mephibosheth whom the Gibeonites hanged, defending their remains until David gathered their bones for honorable burial.",
    "metadata": {
      "stage": 9,
      "stage_title": "The People You Might Have Forgotten",
      "level_theme": "Minor Character Test",
      "category": "The People You Might Have Forgotten",
      "challengeType": "minor-characters",
      "mechanic": "minor-characters",
      "difficulty": "expert",
      "timerSeconds": 25,
      "curated": true,
      "clues": [
        "I was a royal concubine in King Saul's household.",
        "Two of my sons were executed by the Gibeonites to avenge Saul's bloodguilt.",
        "I conducted a solitary five-month vigil on bare stone, chasing off vultures and hyenas."
      ]
    }
  },
  {
    "id": "bible-character-quest-l41-c4",
    "game_slug": "bible-character-quest",
    "level": 41,
    "challenge_index": 4,
    "question_text": "Which lame son of Jonathan was sought out by King David for Jonathan's sake, restored all Saul's family estates, and dined continuously at the royal palace table like a king's son?",
    "options": [
      "Mephibosheth (Merib-baal)",
      "Michal",
      "Ish-bosheth",
      "Armoni"
    ],
    "correct_answer": "Mephibosheth (Merib-baal)",
    "reference": "2 Samuel 9:6-13",
    "explanation": "David asked if any survived of Saul's house that he might show kindness for Jonathan's sake; Mephibosheth, lame in both feet from a nurse's fall, was brought from Lo-debar.",
    "metadata": {
      "stage": 9,
      "stage_title": "The People You Might Have Forgotten",
      "level_theme": "Minor Character Test",
      "category": "The People You Might Have Forgotten",
      "challengeType": "minor-characters",
      "mechanic": "minor-characters",
      "difficulty": "expert",
      "timerSeconds": 25,
      "curated": true,
      "clues": [
        "I was five years old when news came that my father and grandfather died on Gilboa.",
        "My nurse dropped me in panicked flight, leaving both my feet permanently crippled.",
        "David brought me from obscurity in Lo-debar to eat as family at the sovereign table."
      ]
    }
  },
  {
    "id": "bible-character-quest-l41-c5",
    "game_slug": "bible-character-quest",
    "level": 41,
    "challenge_index": 5,
    "question_text": "Which deceitful steward of Saul's estate told David that Mephibosheth was treasonously hoping to reclaim Saul's kingdom, deceiving David into granting him all his master's property?",
    "options": [
      "Ziba",
      "Doeg",
      "Shimei",
      "Ahithophel"
    ],
    "correct_answer": "Ziba",
    "reference": "2 Samuel 16:1-4; 2 Samuel 19:24-30",
    "explanation": "Ziba brought David bread and summer fruit while slandering Mephibosheth; when David returned victorious, Mephibosheth had not cared for his feet or clothes in mourning, exposing Ziba's deceit.",
    "metadata": {
      "stage": 9,
      "stage_title": "The People You Might Have Forgotten",
      "level_theme": "Minor Character Test",
      "category": "The People You Might Have Forgotten",
      "challengeType": "minor-characters",
      "mechanic": "minor-characters",
      "difficulty": "expert",
      "timerSeconds": 25,
      "curated": true,
      "clues": [
        "I had fifteen sons and twenty servants managing Saul's former farmland.",
        "I brought wine and provisions to David during his flight to curry opportunistic favor.",
        "I falsely accused my disabled master of celebrating the king's downfall."
      ]
    }
  },
  {
    "id": "bible-character-quest-l42-c1",
    "game_slug": "bible-character-quest",
    "level": 42,
    "challenge_index": 1,
    "question_text": "Which two Hebrew midwives feared God rather than the Egyptian monarch, defied Pharaoh's royal decree to murder male infants at birth, and were blessed by God with families of their own?",
    "options": [
      "Shiphrah and Puah",
      "Jochebed and Miriam",
      "Rachel and Leah",
      "Bilhah and Zilpah"
    ],
    "correct_answer": "Shiphrah and Puah",
    "reference": "Exodus 1:15-21",
    "explanation": "The king of Egypt ordered Hebrew midwives Shiphrah and Puah to kill male babies; because they feared God and preserved the boys, God gave them households.",
    "metadata": {
      "stage": 9,
      "stage_title": "The People You Might Have Forgotten",
      "level_theme": "Women of the Bible",
      "category": "The People You Might Have Forgotten",
      "challengeType": "women-of-bible",
      "mechanic": "women-of-bible",
      "difficulty": "expert",
      "timerSeconds": 25,
      "curated": true,
      "clues": [
        "Our names are preserved forever in Scripture while Pharaoh's name is forgotten.",
        "We practiced courageous civil disobedience against genocidal state legislation.",
        "We told Pharaoh that Hebrew women gave birth before the midwife arrived."
      ]
    }
  },
  {
    "id": "bible-character-quest-l42-c2",
    "game_slug": "bible-character-quest",
    "level": 42,
    "challenge_index": 2,
    "question_text": "Which five brave sisters from the tribe of Manasseh boldly approached Moses and the congregation claiming that their deceased father's inheritance should not be lost because he had no sons?",
    "options": [
      "Mahlah, Noah, Hoglah, Milcah, and Tirzah",
      "Miriam, Deborah, Huldah, Anna, and Phoebe",
      "Leah, Rachel, Bilhah, Zilpah, and Dinah",
      "Tryphena, Tryphosa, Persis, Junia, and Chloe"
    ],
    "correct_answer": "Mahlah, Noah, Hoglah, Milcah, and Tirzah",
    "reference": "Numbers 27:1-7; Joshua 17:3",
    "explanation": "The daughters of Zelophehad (Mahlah, Noah, Hoglah, Milcah, and Tirzah) successfully petitioned Moses for property rights, establishing landmark inheritance laws in Israel.",
    "metadata": {
      "stage": 9,
      "stage_title": "The People You Might Have Forgotten",
      "level_theme": "Women of the Bible",
      "category": "The People You Might Have Forgotten",
      "challengeType": "women-of-bible",
      "mechanic": "women-of-bible",
      "difficulty": "expert",
      "timerSeconds": 25,
      "curated": true,
      "clues": [
        "Our father Zelophehad died in the wilderness without having any sons.",
        "We stood together at the entrance of the Tabernacle before Moses and the elders.",
        "God affirmed our petition: 'The daughters of Zelophehad speak right; you shall give them possession.'"
      ]
    }
  },
  {
    "id": "bible-character-quest-l42-c3",
    "game_slug": "bible-character-quest",
    "level": 42,
    "challenge_index": 3,
    "question_text": "Which Midianite princess, daughter of Zur, was boldly brought into the camp of Israel by Zimri during the Baal of Peor crisis, and was executed by Phinehas with a javelin?",
    "options": [
      "Cozbi",
      "Zipporah",
      "Keturah",
      "Shelomith"
    ],
    "correct_answer": "Cozbi",
    "reference": "Numbers 25:6-18",
    "explanation": "Phinehas, grandson of Aaron, took a spear and pierced Zimri of Simeon and Cozbi, daughter of a Midianite prince, turning away God's fierce anger and ending the plague.",
    "metadata": {
      "stage": 9,
      "stage_title": "The People You Might Have Forgotten",
      "level_theme": "Women of the Bible",
      "category": "The People You Might Have Forgotten",
      "challengeType": "women-of-bible",
      "mechanic": "women-of-bible",
      "difficulty": "expert",
      "timerSeconds": 25,
      "curated": true,
      "clues": [
        "My father was Zur, a tribal chieftain and king of Midian.",
        "My brazen entry into Israel's camp with a Simeonite prince defied the weeping leaders.",
        "A priest's javelin pierced both of us, arresting a plague that had wiped out 24,000."
      ]
    }
  },
  {
    "id": "bible-character-quest-l42-c4",
    "game_slug": "bible-character-quest",
    "level": 42,
    "challenge_index": 4,
    "question_text": "In Romans 16:12, which two Christian women are singled out and greeted by Paul by name as having 'labored hard in the Lord'?",
    "options": [
      "Tryphena and Tryphosa",
      "Euodia and Syntyche",
      "Martha and Mary",
      "Lois and Eunice"
    ],
    "correct_answer": "Tryphena and Tryphosa",
    "reference": "Romans 16:12",
    "explanation": "Paul writes: 'Greet Tryphena and Tryphosa, those women who work hard in the Lord. Greet the beloved Persis, who has worked hard in the Lord.'",
    "metadata": {
      "stage": 9,
      "stage_title": "The People You Might Have Forgotten",
      "level_theme": "Women of the Bible",
      "category": "The People You Might Have Forgotten",
      "challengeType": "women-of-bible",
      "mechanic": "women-of-bible",
      "difficulty": "expert",
      "timerSeconds": 25,
      "curated": true,
      "clues": [
        "Our Greek names derived from words signifying luxurious delicacy.",
        "In contrast to our names, we worked until exhausted in Christian kingdom service.",
        "Paul sends personal apostolic salutations to both of us in Romans 16."
      ]
    }
  },
  {
    "id": "bible-character-quest-l42-c5",
    "game_slug": "bible-character-quest",
    "level": 42,
    "challenge_index": 5,
    "question_text": "In Romans 16:7, which prominent Jewish-Christian woman is greeted alongside Andronicus as Paul's fellow countryman and fellow prisoner, who was 'well known among the apostles'?",
    "options": [
      "Junia",
      "Phoebe",
      "Priscilla",
      "Chloe"
    ],
    "correct_answer": "Junia",
    "reference": "Romans 16:7",
    "explanation": "Paul greets Andronicus and Junia, 'my kinsmen and my fellow prisoners. They are well known to the apostles, and they were in Christ before me.'",
    "metadata": {
      "stage": 9,
      "stage_title": "The People You Might Have Forgotten",
      "level_theme": "Women of the Bible",
      "category": "The People You Might Have Forgotten",
      "challengeType": "women-of-bible",
      "mechanic": "women-of-bible",
      "difficulty": "expert",
      "timerSeconds": 25,
      "curated": true,
      "clues": [
        "I became a believer in Jesus Christ before Saul of Tarsus was converted.",
        "I endured incarceration in Roman prison alongside the Apostle Paul.",
        "Paul honored my partner Andronicus and me as outstanding among the messengers/apostles."
      ]
    }
  },
  {
    "id": "bible-character-quest-l43-c1",
    "game_slug": "bible-character-quest",
    "level": 43,
    "challenge_index": 1,
    "question_text": "Which craftsman from the tribe of Judah was filled with the Spirit of God in wisdom and craftsmanship to design and construct the Tabernacle and its sacred furniture?",
    "options": [
      "Bezalel son of Uri",
      "Oholiab son of Ahisamach",
      "Hiram-abi",
      "Hur"
    ],
    "correct_answer": "Bezalel son of Uri",
    "reference": "Exodus 31:1-5; Exodus 35:30",
    "explanation": "God specifically named Bezalel son of Uri, son of Hur, of Judah, filling him with divine skill to craft gold, silver, bronze, stones, and wood for the sanctuary.",
    "metadata": {
      "stage": 9,
      "stage_title": "The People You Might Have Forgotten",
      "level_theme": "Unusual Names",
      "category": "The People You Might Have Forgotten",
      "challengeType": "unusual-names",
      "mechanic": "unusual-names",
      "difficulty": "expert",
      "timerSeconds": 25,
      "curated": true,
      "clues": [
        "My name literally means 'in the shadow of God.'",
        "I was the first person in Scripture explicitly described as filled with the Spirit of God.",
        "I personally directed the casting and fabrication of the Ark of the Covenant."
      ]
    }
  },
  {
    "id": "bible-character-quest-l43-c2",
    "game_slug": "bible-character-quest",
    "level": 43,
    "challenge_index": 2,
    "question_text": "Which judge of Israel delivered the nation by striking down six hundred Philistine warriors using only an agricultural oxgoad?",
    "options": [
      "Shamgar son of Anath",
      "Ehud",
      "Othniel",
      "Tola"
    ],
    "correct_answer": "Shamgar son of Anath",
    "reference": "Judges 3:31",
    "explanation": "After Ehud came Shamgar son of Anath, who struck down 600 Philistines with an oxgoad; he also delivered Israel.",
    "metadata": {
      "stage": 9,
      "stage_title": "The People You Might Have Forgotten",
      "level_theme": "Unusual Names",
      "category": "The People You Might Have Forgotten",
      "challengeType": "unusual-names",
      "mechanic": "unusual-names",
      "difficulty": "expert",
      "timerSeconds": 25,
      "curated": true,
      "clues": [
        "I am mentioned in only two verses across the entire Old Testament.",
        "I wielded an eight-foot iron-tipped cattle stick instead of a military broadsword.",
        "I single-handedly slew six hundred hostile Philistine invaders."
      ]
    }
  },
  {
    "id": "bible-character-quest-l43-c3",
    "game_slug": "bible-character-quest",
    "level": 43,
    "challenge_index": 3,
    "question_text": "Which valiant commander of David's royal bodyguard struck down two lion-like champions of Moab, chased and killed a lion in a snowy pit, and slew an Egyptian giant?",
    "options": [
      "Benaiah son of Jehoiada",
      "Abishai",
      "Asahel",
      "Eleazar son of Dodo"
    ],
    "correct_answer": "Benaiah son of Jehoiada",
    "reference": "2 Samuel 23:20-23; 1 Kings 2:34-35",
    "explanation": "Benaiah son of Jehoiada from Kabzeel performed heroic feats including slaying a lion in a pit on a snowy day; Solomon promoted him to supreme commander of the army.",
    "metadata": {
      "stage": 9,
      "stage_title": "The People You Might Have Forgotten",
      "level_theme": "Unusual Names",
      "category": "The People You Might Have Forgotten",
      "challengeType": "unusual-names",
      "mechanic": "unusual-names",
      "difficulty": "expert",
      "timerSeconds": 25,
      "curated": true,
      "clues": [
        "I hailed from the southern town of Kabzeel in Judah.",
        "On a freezing winter day, I leapt into an underground cistern to battle a live lion.",
        "I snatched a spear like a weaver's beam out of an Egyptian giant's hands and killed him."
      ]
    }
  },
  {
    "id": "bible-character-quest-l43-c4",
    "game_slug": "bible-character-quest",
    "level": 43,
    "challenge_index": 4,
    "question_text": "Which symbolic child was fathered by the prophet Isaiah, whose name meant 'Quick to the plunder, swift to the spoil', signifying Damascus and Samaria's sudden fall?",
    "options": [
      "Maher-shalal-hash-baz",
      "Shear-jashub",
      "Immanuel",
      "Lo-Ammi"
    ],
    "correct_answer": "Maher-shalal-hash-baz",
    "reference": "Isaiah 8:1-4",
    "explanation": "God commanded Isaiah to write on a large tablet 'Maher-shalal-hash-baz' and name his newborn son this to show Assyria would plunder Damascus and Samaria.",
    "metadata": {
      "stage": 9,
      "stage_title": "The People You Might Have Forgotten",
      "level_theme": "Unusual Names",
      "category": "The People You Might Have Forgotten",
      "challengeType": "unusual-names",
      "mechanic": "unusual-names",
      "difficulty": "expert",
      "timerSeconds": 25,
      "curated": true,
      "clues": [
        "I bore the longest personal name found anywhere in the Bible.",
        "My father had to record my name on a legal billboard before reliable witnesses.",
        "Before I could speak 'my father' or 'my mother', Assyria pillaged Syria and Israel."
      ]
    }
  },
  {
    "id": "bible-character-quest-l43-c5",
    "game_slug": "bible-character-quest",
    "level": 43,
    "challenge_index": 5,
    "question_text": "In 2 Timothy 1:15, which two Christians from the province of Asia are named by Paul with sorrow as having abandoned and turned away from him during his final imprisonment?",
    "options": [
      "Phygelus and Hermogenes",
      "Hymenaeus and Philetus",
      "Alexander and Demas",
      "Euodia and Syntyche"
    ],
    "correct_answer": "Phygelus and Hermogenes",
    "reference": "2 Timothy 1:15",
    "explanation": "Paul wrote: 'You are aware that all who are in Asia turned away from me, among whom are Phygelus and Hermogenes.'",
    "metadata": {
      "stage": 9,
      "stage_title": "The People You Might Have Forgotten",
      "level_theme": "Unusual Names",
      "category": "The People You Might Have Forgotten",
      "challengeType": "unusual-names",
      "mechanic": "unusual-names",
      "difficulty": "expert",
      "timerSeconds": 25,
      "curated": true,
      "clues": [
        "We were prominent believers from the Roman province of Asia.",
        "When Paul was arrested and brought to the death row dungeon in Rome, we shunned him.",
        "Paul recorded our names in infamy in his final canonical letter."
      ]
    }
  },
  {
    "id": "bible-character-quest-l44-c1",
    "game_slug": "bible-character-quest",
    "level": 44,
    "challenge_index": 1,
    "question_text": "Which enigmatic king of Salem and priest of God Most High in Genesis 14 is highlighted in Hebrews 7 as a royal-priestly prototype of Jesus Christ without genealogy?",
    "options": [
      "Melchizedek",
      "Abimelech",
      "Jethro",
      "Balaam"
    ],
    "correct_answer": "Melchizedek",
    "reference": "Genesis 14:18-20; Psalm 110:4; Hebrews 7:1-17",
    "explanation": "Melchizedek brought out bread and wine to Abraham; Hebrews portrays his priesthood as perpetual, superior to Levi, foreshadowing Christ's eternal high priesthood.",
    "metadata": {
      "stage": 9,
      "stage_title": "The People You Might Have Forgotten",
      "level_theme": "Hidden Connections",
      "category": "The People You Might Have Forgotten",
      "challengeType": "hidden-connections",
      "mechanic": "hidden-connections",
      "difficulty": "expert",
      "timerSeconds": 25,
      "curated": true,
      "clues": [
        "My dual titles mean 'King of Righteousness' and 'King of Peace.'",
        "Abraham tithed one-tenth of all his battle spoils to me.",
        "The Messiah is sworn with an oath to be a priest forever according to my order."
      ]
    }
  },
  {
    "id": "bible-character-quest-l44-c2",
    "game_slug": "bible-character-quest",
    "level": 44,
    "challenge_index": 2,
    "question_text": "Which Mesopotamian diviner hired by Balak king of Moab to curse Israel is explicitly condemned in 2 Peter, Jude, and Revelation for teaching Balak to set a stumbling block?",
    "options": [
      "Balaam son of Beor",
      "Balaak",
      "Korah",
      "Sanballat"
    ],
    "correct_answer": "Balaam son of Beor",
    "reference": "Numbers 22-24; 2 Peter 2:15; Jude 1:11; Revelation 2:14",
    "explanation": "Balaam loved the wages of unrighteousness; Revelation 2:14 condemns the Nicolaitans who held the doctrine of Balaam, who taught Balak to entice Israel to eat idol meat and commit sexual immorality.",
    "metadata": {
      "stage": 9,
      "stage_title": "The People You Might Have Forgotten",
      "level_theme": "Hidden Connections",
      "category": "The People You Might Have Forgotten",
      "challengeType": "hidden-connections",
      "mechanic": "hidden-connections",
      "difficulty": "expert",
      "timerSeconds": 25,
      "curated": true,
      "clues": [
        "A speaking donkey saved my life from an angelic executioner with a drawn sword.",
        "God constrained my mouth to pronounce majestic blessings over Israel.",
        "I covertly orchestrated Israel's downfall through idolatrous seduction at Baal-peor."
      ]
    }
  },
  {
    "id": "bible-character-quest-l44-c3",
    "game_slug": "bible-character-quest",
    "level": 44,
    "challenge_index": 3,
    "question_text": "Which Levite rebel led 250 prominent community leaders against Moses and Aaron in Numbers 16, whose fatal rebellion is linked in Jude 11 with the error of Balaam?",
    "options": [
      "Korah son of Izhar",
      "Dathan son of Eliab",
      "Abiram son of Eliab",
      "On son of Peleth"
    ],
    "correct_answer": "Korah son of Izhar",
    "reference": "Numbers 16:1-35; Jude 1:11",
    "explanation": "Korah challenged the priestly monopoly of Aaron; the earth opened its mouth and swallowed him and his conspirators alive; Jude warns false teachers perish in Korah's rebellion.",
    "metadata": {
      "stage": 9,
      "stage_title": "The People You Might Have Forgotten",
      "level_theme": "Hidden Connections",
      "category": "The People You Might Have Forgotten",
      "challengeType": "hidden-connections",
      "mechanic": "hidden-connections",
      "difficulty": "expert",
      "timerSeconds": 25,
      "curated": true,
      "clues": [
        "I was Moses and Aaron's first cousin, belonging to the Kohathite clan of Levi.",
        "I organized a political mutiny claiming 'all the congregation are holy, every one of them.'",
        "The solid earth split apart under our tents, swallowing our households alive into Sheol."
      ]
    }
  },
  {
    "id": "bible-character-quest-l44-c4",
    "game_slug": "bible-character-quest",
    "level": 44,
    "challenge_index": 4,
    "question_text": "In 2 Timothy 3:8, which two traditional names does Paul reveal for the Egyptian magicians who opposed Moses before Pharaoh, comparing them to corrupt end-times teachers?",
    "options": [
      "Jannes and Jambres",
      "Hymenaeus and Philetus",
      "Dathan and Abiram",
      "Sanballat and Tobiah"
    ],
    "correct_answer": "Jannes and Jambres",
    "reference": "2 Timothy 3:8; Exodus 7:11",
    "explanation": "Paul writes: 'Just as Jannes and Jambres opposed Moses, so these men also oppose the truth, men of corrupt minds and disqualified regarding the faith.'",
    "metadata": {
      "stage": 9,
      "stage_title": "The People You Might Have Forgotten",
      "level_theme": "Hidden Connections",
      "category": "The People You Might Have Forgotten",
      "challengeType": "hidden-connections",
      "mechanic": "hidden-connections",
      "difficulty": "expert",
      "timerSeconds": 25,
      "curated": true,
      "clues": [
        "We utilized ancient Egyptian occult arts to replicate the early plagues of blood and frogs.",
        "Our enchantments collapsed completely when lice were summoned from dust.",
        "Paul revealed our specific personal names over a millennium after the Exodus."
      ]
    }
  },
  {
    "id": "bible-character-quest-l44-c5",
    "game_slug": "bible-character-quest",
    "level": 44,
    "challenge_index": 5,
    "question_text": "In Jude 1:14-15, which pre-flood patriarch, 'the seventh from Adam', is cited as prophesying: 'Behold, the Lord comes with ten thousands of His holy ones'?",
    "options": [
      "Enoch",
      "Methuselah",
      "Lamech",
      "Noah"
    ],
    "correct_answer": "Enoch",
    "reference": "Jude 1:14-15; Genesis 5:21-24",
    "explanation": "Jude quotes Enoch, the seventh from Adam, who prophesied the Lord's return in judgment upon all ungodly persons.",
    "metadata": {
      "stage": 9,
      "stage_title": "The People You Might Have Forgotten",
      "level_theme": "Hidden Connections",
      "category": "The People You Might Have Forgotten",
      "challengeType": "hidden-connections",
      "mechanic": "hidden-connections",
      "difficulty": "expert",
      "timerSeconds": 25,
      "curated": true,
      "clues": [
        "I was the father of Methuselah and walked intimately with God.",
        "I never experienced physical death because God took me away.",
        "Jude quotes my ancient apocalyptic prophecy of the Lord executing global judgment."
      ]
    }
  },
  {
    "id": "bible-character-quest-l45-c1",
    "game_slug": "bible-character-quest",
    "level": 45,
    "challenge_index": 1,
    "question_text": "In Romans 16:22, what is the personal name of the amanuensis (secretary) who actually penned the ink on the manuscript of Paul's Epistle to the Romans?",
    "options": [
      "Tertius",
      "Quartus",
      "Erastus",
      "Gaius"
    ],
    "correct_answer": "Tertius",
    "reference": "Romans 16:22",
    "explanation": "Romans 16:22 includes the scribe's direct greeting: 'I Tertius, who wrote down this letter, greet you in the Lord.'",
    "metadata": {
      "stage": 9,
      "stage_title": "The People You Might Have Forgotten",
      "level_theme": "Forgotten People Boss",
      "category": "The People You Might Have Forgotten",
      "challengeType": "forgotten-boss",
      "mechanic": "forgotten-boss",
      "difficulty": "expert",
      "timerSeconds": 20,
      "curated": true,
      "clues": [
        "I was the professional Christian scribe who transcribed Paul's dictation.",
        "My Latin name literally means 'the Third.'",
        "I inserted my own brief personal greeting right inside the closing doxology of Romans."
      ]
    }
  },
  {
    "id": "bible-character-quest-l45-c2",
    "game_slug": "bible-character-quest",
    "level": 45,
    "challenge_index": 2,
    "question_text": "Which Christian brother is briefly greeted right beside Tertius in Romans 16:23 with the simple, affectionate title 'Quartus, a brother'?",
    "options": [
      "Quartus",
      "Erastus",
      "Gaius",
      "Stephanas"
    ],
    "correct_answer": "Quartus",
    "reference": "Romans 16:23",
    "explanation": "Paul writes: 'Erastus, the city treasurer, greets you, and Quartus, a brother.'",
    "metadata": {
      "stage": 9,
      "stage_title": "The People You Might Have Forgotten",
      "level_theme": "Forgotten People Boss",
      "category": "The People You Might Have Forgotten",
      "challengeType": "forgotten-boss",
      "mechanic": "forgotten-boss",
      "difficulty": "expert",
      "timerSeconds": 20,
      "curated": true,
      "clues": [
        "My Latin name indicates I was likely named 'the Fourth.'",
        "I held no flashy ecclesiastical office or civic title.",
        "Scripture immortalized my name for two thousand years simply as 'a brother.'"
      ]
    }
  },
  {
    "id": "bible-character-quest-l45-c3",
    "game_slug": "bible-character-quest",
    "level": 45,
    "challenge_index": 3,
    "question_text": "Which civic official in Corinth is described in Romans 16:23 as the 'city treasurer' (or director of public works) whose name has been confirmed on a 1st-century pavement inscription in Corinth?",
    "options": [
      "Erastus",
      "Gaius",
      "Crispus",
      "Sosthenes"
    ],
    "correct_answer": "Erastus",
    "reference": "Romans 16:23; Acts 19:22",
    "explanation": "Erastus, the city treasurer (oikonomos), greeted Rome; archaeologists in Corinth excavated a limestone pavement reading 'Erastus in return for his aedileship paved it at his own expense.'",
    "metadata": {
      "stage": 9,
      "stage_title": "The People You Might Have Forgotten",
      "level_theme": "Forgotten People Boss",
      "category": "The People You Might Have Forgotten",
      "challengeType": "forgotten-boss",
      "mechanic": "forgotten-boss",
      "difficulty": "expert",
      "timerSeconds": 20,
      "curated": true,
      "clues": [
        "I held high political and fiscal office as treasurer of a major Roman commercial colony.",
        "I embraced the humble apostolic message and supported missionary journeys.",
        "My civic dedication was unearthed by modern archaeologists in Corinth in 1929."
      ]
    }
  },
  {
    "id": "bible-character-quest-l45-c4",
    "game_slug": "bible-character-quest",
    "level": 45,
    "challenge_index": 4,
    "question_text": "Which faithful believer from Ephesus repeatedly sought out Paul in chains in Rome, was not ashamed of his imprisonment, and refreshed his spirit?",
    "options": [
      "Onesiphorus",
      "Epaphras",
      "Tychicus",
      "Philemon"
    ],
    "correct_answer": "Onesiphorus",
    "reference": "2 Timothy 1:16-18",
    "explanation": "Paul prayed mercy on the household of Onesiphorus, for he often refreshed Paul, was not ashamed of his chains, and searched diligently for him in Rome until he found him.",
    "metadata": {
      "stage": 9,
      "stage_title": "The People You Might Have Forgotten",
      "level_theme": "Forgotten People Boss",
      "category": "The People You Might Have Forgotten",
      "challengeType": "forgotten-boss",
      "mechanic": "forgotten-boss",
      "difficulty": "expert",
      "timerSeconds": 20,
      "curated": true,
      "clues": [
        "While Asian believers abandoned Paul in imperial custody, I went hunting for his dungeon.",
        "I walked through the dangerous Roman streets until I discovered the apostle's cell.",
        "Paul prayed that the Lord would grant mercy to my household on the Day of Judgment."
      ]
    }
  },
  {
    "id": "bible-character-quest-l45-c5",
    "game_slug": "bible-character-quest",
    "level": 45,
    "challenge_index": 5,
    "question_text": "In 2 Timothy 4:13, in whose home at Troas did Paul leave his winter traveling cloak, books, and especially the parchments, asking Timothy to bring them before winter?",
    "options": [
      "Carpus",
      "Trophimus",
      "Erastus",
      "Philemon"
    ],
    "correct_answer": "Carpus",
    "reference": "2 Timothy 4:13",
    "explanation": "Paul instructed Timothy: 'When you come, bring the cloak that I left with Carpus at Troas, also the books, and above all the parchments.'",
    "metadata": {
      "stage": 9,
      "stage_title": "The People You Might Have Forgotten",
      "level_theme": "Forgotten People Boss",
      "category": "The People You Might Have Forgotten",
      "challengeType": "forgotten-boss",
      "mechanic": "forgotten-boss",
      "difficulty": "expert",
      "timerSeconds": 20,
      "curated": true,
      "clues": [
        "I resided in the Aegean maritime harbor city of Troas.",
        "Paul lodged in my home and left valuable personal belongings in my safekeeping.",
        "In his chilly death row cell, the apostle desperately requested the heavy mantle I was guarding."
      ]
    }
  },
  {
    "id": "bible-character-quest-l46-c1",
    "game_slug": "bible-character-quest",
    "level": 46,
    "challenge_index": 1,
    "question_text": "• I was David's premier counselor whose advice was esteemed like the oracle of God.\n• I defected to join Absalom's conspiracy against David.\n• When my battle advice was rejected in favor of Hushai, I went home, put my house in order, and hanged myself.\nWho am I?",
    "options": [
      "Ahithophel the Gilonite",
      "Hushai the Archite",
      "Abiathar the Priest",
      "Joab son of Zeruiah"
    ],
    "correct_answer": "Ahithophel the Gilonite",
    "reference": "2 Samuel 15:12; 2 Samuel 16:23; 2 Samuel 17:23",
    "explanation": "Ahithophel's strategic advice was regarded as God's word; when Absalom chose Hushai's plan instead, Ahithophel went home and hanged himself.",
    "metadata": {
      "stage": 10,
      "stage_title": "The Ultimate Character Quest",
      "level_theme": "Three Clues, One Person",
      "category": "The Ultimate Character Quest",
      "challengeType": "three-clues",
      "mechanic": "three-clues",
      "difficulty": "master",
      "timerSeconds": 20,
      "curated": true,
      "clues": [
        "I hailed from the town of Giloh in the hill country of Judah.",
        "I was the grandfather of Bathsheba, whom David wronged.",
        "I was David's close companion whose treason prefigured Judas Iscariot in Psalm 41."
      ]
    }
  },
  {
    "id": "bible-character-quest-l46-c2",
    "game_slug": "bible-character-quest",
    "level": 46,
    "challenge_index": 2,
    "question_text": "• I was the grandson of Aaron the high priest through Eleazar.\n• When an Israelite prince brought a Midianite woman into the camp, my righteous anger was kindled.\n• God made with me and my descendants an everlasting covenant of peace and priesthood.\nWho am I?",
    "options": [
      "Phinehas son of Eleazar",
      "Ithamar",
      "Abihu",
      "Nadab"
    ],
    "correct_answer": "Phinehas son of Eleazar",
    "reference": "Numbers 25:7-13; Psalm 106:30-31",
    "explanation": "Phinehas executed Zimri and Cozbi with a spear, turning away God's wrath; Psalm 106 records that this was counted to him as righteousness for all generations.",
    "metadata": {
      "stage": 10,
      "stage_title": "The Ultimate Character Quest",
      "level_theme": "Three Clues, One Person",
      "category": "The Ultimate Character Quest",
      "challengeType": "three-clues",
      "mechanic": "three-clues",
      "difficulty": "master",
      "timerSeconds": 20,
      "curated": true,
      "clues": [
        "I was the third high priest in Israel's history.",
        "I halted a deadly divine plague that had slaughtered 24,000 Israelites at Shittim.",
        "Scripture records that my righteous action was counted to me as righteousness forever."
      ]
    }
  },
  {
    "id": "bible-character-quest-l46-c3",
    "game_slug": "bible-character-quest",
    "level": 46,
    "challenge_index": 3,
    "question_text": "• I was an Egyptian-born Hebrew prince who murdered an overseer and fled into exile.\n• I spent forty years tending sheep for a Midianite priest at Mount Horeb.\n• I stood on the Mount of Transfiguration speaking with Jesus about His departure.\nWho am I?",
    "options": [
      "Moses",
      "Elijah",
      "Joshua",
      "Joseph"
    ],
    "correct_answer": "Moses",
    "reference": "Exodus 2:11-15; Exodus 3:1; Luke 9:30-31",
    "explanation": "Moses fled Egypt to Midian, served as shepherd 40 years, led Israel 40 years, and appeared in glory on the Mount of Transfiguration with Elijah talking to Jesus.",
    "metadata": {
      "stage": 10,
      "stage_title": "The Ultimate Character Quest",
      "level_theme": "Three Clues, One Person",
      "category": "The Ultimate Character Quest",
      "challengeType": "three-clues",
      "mechanic": "three-clues",
      "difficulty": "master",
      "timerSeconds": 20,
      "curated": true,
      "clues": [
        "I was hidden in a papyrus basket among the reeds of the Nile.",
        "I spoke with God face to face, as a man speaks to his intimate friend.",
        "I appeared in heavenly glory on a high mountain discussing Christ's coming exodus at Jerusalem."
      ]
    }
  },
  {
    "id": "bible-character-quest-l46-c4",
    "game_slug": "bible-character-quest",
    "level": 46,
    "challenge_index": 4,
    "question_text": "• I was born a Levite in Cyprus, yet sold my real estate to lay all proceeds at the apostles' feet.\n• I took the former persecutor Saul by the hand and introduced him to skeptical apostles in Jerusalem.\n• I later parted ways with Paul over giving my young cousin John Mark a second chance.\nWho am I?",
    "options": [
      "Barnabas",
      "Silas",
      "Luke",
      "Timothy"
    ],
    "correct_answer": "Barnabas",
    "reference": "Acts 4:36-37; Acts 9:27; Acts 15:37-39",
    "explanation": "Barnabas, son of encouragement, championed Saul when everyone doubted him, traveled on the first missionary journey, and mentored John Mark after separating from Paul.",
    "metadata": {
      "stage": 10,
      "stage_title": "The Ultimate Character Quest",
      "level_theme": "Three Clues, One Person",
      "category": "The Ultimate Character Quest",
      "challengeType": "three-clues",
      "mechanic": "three-clues",
      "difficulty": "master",
      "timerSeconds": 20,
      "curated": true,
      "clues": [
        "My real birth name was Joseph, born on the Mediterranean island of Cyprus.",
        "I traveled to Tarsus specifically to recruit Paul to co-pastor the church at Antioch.",
        "My willingness to restore fallen young workers preserved Mark for the Kingdom."
      ]
    }
  },
  {
    "id": "bible-character-quest-l46-c5",
    "game_slug": "bible-character-quest",
    "level": 46,
    "challenge_index": 5,
    "question_text": "• I was a king of Judah who ascended the throne at age eight.\n• When Hilkiah found the long-lost Book of the Law, I tore my clothes in sorrow.\n• I carried out the most thorough religious purge in Judah's history, destroying the high places and Bethel's altar.\nWho am I?",
    "options": [
      "Josiah",
      "Hezekiah",
      "Joash",
      "Manasseh"
    ],
    "correct_answer": "Josiah",
    "reference": "2 Kings 22:1-2; 2 Kings 23:15-25",
    "explanation": "Josiah reigned 31 years, repaired the temple, restored the Passover, and destroyed idolatrous shrines; the prophet from Judah had prophesied him by name 300 years earlier.",
    "metadata": {
      "stage": 10,
      "stage_title": "The Ultimate Character Quest",
      "level_theme": "Three Clues, One Person",
      "category": "The Ultimate Character Quest",
      "challengeType": "three-clues",
      "mechanic": "three-clues",
      "difficulty": "master",
      "timerSeconds": 20,
      "curated": true,
      "clues": [
        "A prophet from Judah predicted my exact name three centuries before I was born.",
        "I began to seek the God of my father David when I was only sixteen years old.",
        "There was no king before me or after me who turned to the Lord with all his heart like I did."
      ]
    }
  },
  {
    "id": "bible-character-quest-l47-c1",
    "game_slug": "bible-character-quest",
    "level": 47,
    "challenge_index": 1,
    "question_text": "Who were the father and mother of Moses, Aaron, and Miriam, both belonging to the tribe of Levi?",
    "options": [
      "Amram and Jochebed",
      "Elkanah and Hannah",
      "Kohath and Elisheba",
      "Zechariah and Elizabeth"
    ],
    "correct_answer": "Amram and Jochebed",
    "reference": "Exodus 6:20; Numbers 26:59",
    "explanation": "Amram married his father's sister Jochebed, and she bore him Aaron, Moses, and their sister Miriam.",
    "metadata": {
      "stage": 10,
      "stage_title": "The Ultimate Character Quest",
      "level_theme": "Family Tree Trap",
      "category": "The Ultimate Character Quest",
      "challengeType": "family-tree-trap",
      "mechanic": "family-tree-trap",
      "difficulty": "master",
      "timerSeconds": 20,
      "curated": true,
      "clues": [
        "Our household gave birth to the three foremost leaders of the Exodus.",
        "Our son Aaron was the first high priest, our son Moses was the lawgiver, and our daughter Miriam was a prophetess.",
        "Our names are recorded in the priestly genealogy of Exodus 6 and Numbers 26."
      ]
    }
  },
  {
    "id": "bible-character-quest-l47-c2",
    "game_slug": "bible-character-quest",
    "level": 47,
    "challenge_index": 2,
    "question_text": "According to 1 Samuel 14:50-51, what was the precise familial relationship between King Saul and his supreme military commander Abner?",
    "options": [
      "Saul and Abner were first cousins (Abner was son of Ner, Saul's uncle)",
      "Abner was Saul's brother-in-law",
      "Abner was Saul's nephew",
      "Saul and Abner were half-brothers"
    ],
    "correct_answer": "Saul and Abner were first cousins (Abner was son of Ner, Saul's uncle)",
    "reference": "1 Samuel 14:50-51",
    "explanation": "Kish was the father of Saul, and Ner the father of Abner was Saul's uncle (Ner was son of Abiel, making Saul and Abner first cousins).",
    "metadata": {
      "stage": 10,
      "stage_title": "The Ultimate Character Quest",
      "level_theme": "Family Tree Trap",
      "category": "The Ultimate Character Quest",
      "challengeType": "family-tree-trap",
      "mechanic": "family-tree-trap",
      "difficulty": "master",
      "timerSeconds": 20,
      "curated": true,
      "clues": [
        "Our fathers Kish and Ner were blood brothers, sons of Abiel.",
        "One of us was the anointed monarch and the other was his commanding general.",
        "Our shared Benjamite clan ties cemented our military coalition."
      ]
    }
  },
  {
    "id": "bible-character-quest-l47-c3",
    "game_slug": "bible-character-quest",
    "level": 47,
    "challenge_index": 3,
    "question_text": "Which of David's older brothers was the firstborn of Jesse, whose towering height and handsome appearance led the prophet Samuel to wrongly conclude: 'Surely the Lord's anointed is before Him'?",
    "options": [
      "Eliab",
      "Abinadab",
      "Shimea",
      "Nethanel"
    ],
    "correct_answer": "Eliab",
    "reference": "1 Samuel 16:6-7; 1 Samuel 17:28",
    "explanation": "When Samuel saw Eliab, he was impressed by his height; but God said: 'Do not look on his appearance... for man looks on the outward appearance, but the Lord looks on the heart.'",
    "metadata": {
      "stage": 10,
      "stage_title": "The Ultimate Character Quest",
      "level_theme": "Family Tree Trap",
      "category": "The Ultimate Character Quest",
      "challengeType": "family-tree-trap",
      "mechanic": "family-tree-trap",
      "difficulty": "master",
      "timerSeconds": 20,
      "curated": true,
      "clues": [
        "I was the tall, imposing firstborn son of Jesse of Bethlehem.",
        "I scolded young David when he arrived at the Valley of Elah with cheese and bread.",
        "The Lord rejected my outward regal bearing in favor of my shepherd little brother."
      ]
    }
  },
  {
    "id": "bible-character-quest-l47-c4",
    "game_slug": "bible-character-quest",
    "level": 47,
    "challenge_index": 4,
    "question_text": "According to Colossians 4:10, what was the exact family connection between John Mark (the author of Mark's Gospel) and the apostle Barnabas?",
    "options": [
      "John Mark was the cousin of Barnabas",
      "John Mark was the nephew of Barnabas",
      "John Mark was the younger brother of Barnabas",
      "John Mark was the son-in-law of Barnabas"
    ],
    "correct_answer": "John Mark was the cousin of Barnabas",
    "reference": "Colossians 4:10",
    "explanation": "Paul explicitly writes in Colossians 4:10: 'Mark the cousin of Barnabas (concerning whom you have received instructions).' (Greek: anepsios, cousin).",
    "metadata": {
      "stage": 10,
      "stage_title": "The Ultimate Character Quest",
      "level_theme": "Family Tree Trap",
      "category": "The Ultimate Character Quest",
      "challengeType": "family-tree-trap",
      "mechanic": "family-tree-trap",
      "difficulty": "master",
      "timerSeconds": 20,
      "curated": true,
      "clues": [
        "Our shared family had wealth and prominent homes in Jerusalem and Cyprus.",
        "My mother Mary hosted the prayer meeting when Peter was delivered from prison.",
        "My influential cousin Barnabas championed me even when Paul refused to travel with me."
      ]
    }
  },
  {
    "id": "bible-character-quest-l47-c5",
    "game_slug": "bible-character-quest",
    "level": 47,
    "challenge_index": 5,
    "question_text": "According to Mark 15:21 and Romans 16:13, which two brothers were the sons of Simon of Cyrene, one of whom was greeted by Paul as 'chosen in the Lord' along with his mother?",
    "options": [
      "Alexander and Rufus",
      "James and John",
      "Hermogenes and Philetus",
      "Tryphena and Tryphosa"
    ],
    "correct_answer": "Alexander and Rufus",
    "reference": "Mark 15:21; Romans 16:13",
    "explanation": "Mark identifies Simon of Cyrene as 'the father of Alexander and Rufus'; in Romans 16:13 Paul greets 'Rufus, chosen in the Lord, and his mother, who has been a mother to me, too.'",
    "metadata": {
      "stage": 10,
      "stage_title": "The Ultimate Character Quest",
      "level_theme": "Family Tree Trap",
      "category": "The Ultimate Character Quest",
      "challengeType": "family-tree-trap",
      "mechanic": "family-tree-trap",
      "difficulty": "master",
      "timerSeconds": 20,
      "curated": true,
      "clues": [
        "Our father was the North African pilgrim conscripted to carry Jesus' wooden cross.",
        "Our names were well known in the Roman congregation where Mark first published his Gospel.",
        "Paul sent special greetings to one of us, saying his mother had treated Paul as her own son."
      ]
    }
  },
  {
    "id": "bible-character-quest-l48-c1",
    "game_slug": "bible-character-quest",
    "level": 48,
    "challenge_index": 1,
    "question_text": "Which biblical figure experienced these life milestones in chronological order: Thrown into a pit at Dothan -> Sold to Potiphar -> Imprisoned on false charges -> Interpreted Pharaoh's dreams -> Became Prime Minister of Egypt?",
    "options": [
      "Joseph",
      "Daniel",
      "Moses",
      "David"
    ],
    "correct_answer": "Joseph",
    "reference": "Genesis 37-41",
    "explanation": "Joseph was sold at Dothan, worked in Potiphar's house, was falsely accused by Potiphar's wife, interpreted dreams in prison, and was elevated to second-in-command of Egypt at age thirty.",
    "metadata": {
      "stage": 10,
      "stage_title": "The Ultimate Character Quest",
      "level_theme": "Life Story Puzzle",
      "category": "The Ultimate Character Quest",
      "challengeType": "life-story-puzzle",
      "mechanic": "life-story-puzzle",
      "difficulty": "master",
      "timerSeconds": 20,
      "curated": true,
      "clues": [
        "I was my father's pampered favorite who wore an ornate multicolored robe.",
        "I went from a dry desert cistern to an Egyptian slave market to a royal palace.",
        "I told my weeping brothers: 'You meant evil against me, but God meant it for good.'"
      ]
    }
  },
  {
    "id": "bible-character-quest-l48-c2",
    "game_slug": "bible-character-quest",
    "level": 48,
    "challenge_index": 2,
    "question_text": "Which biblical figure experienced these life milestones in chronological order: Anointed as shepherd boy in Bethlehem -> Felled Goliath with a sling -> Fled as fugitive to Cave of Adullam -> Anointed king in Hebron -> Captured Jerusalem as national capital?",
    "options": [
      "David",
      "Saul",
      "Solomon",
      "Jehu"
    ],
    "correct_answer": "David",
    "reference": "1 Samuel 16-22; 2 Samuel 2-5",
    "explanation": "David was anointed by Samuel, slew Goliath, fled Saul to the Cave of Adullam, ruled over Judah in Hebron for seven years, and conquered the Jebusite fortress of Zion to make Jerusalem his capital.",
    "metadata": {
      "stage": 10,
      "stage_title": "The Ultimate Character Quest",
      "level_theme": "Life Story Puzzle",
      "category": "The Ultimate Character Quest",
      "challengeType": "life-story-puzzle",
      "mechanic": "life-story-puzzle",
      "difficulty": "master",
      "timerSeconds": 20,
      "curated": true,
      "clues": [
        "I played the harp to soothe a tormented monarch's soul.",
        "I was hunted across wilderness crags like a partridge on the mountains.",
        "God established an everlasting covenant with my royal lineage."
      ]
    }
  },
  {
    "id": "bible-character-quest-l48-c3",
    "game_slug": "bible-character-quest",
    "level": 48,
    "challenge_index": 3,
    "question_text": "Which biblical figure experienced these life milestones in chronological order: Called while mending nets at Sea of Galilee -> Confessed Christ at Caesarea Philippi -> Denied the Lord three times by a courtyard fire -> Preached the Pentecost sermon in Jerusalem -> Miraculously delivered from Herod's prison by an angel?",
    "options": [
      "Simon Peter",
      "John",
      "Andrew",
      "James"
    ],
    "correct_answer": "Simon Peter",
    "reference": "Matthew 4:18; Matthew 16:16; Matthew 26:69-75; Acts 2:14; Acts 12:6-11",
    "explanation": "Simon Peter was called from his nets, made the great confession of Jesus as the Messiah, wept bitterly after three denials, preached at Pentecost, and was chained in prison until an angel struck off his chains.",
    "metadata": {
      "stage": 10,
      "stage_title": "The Ultimate Character Quest",
      "level_theme": "Life Story Puzzle",
      "category": "The Ultimate Character Quest",
      "challengeType": "life-story-puzzle",
      "mechanic": "life-story-puzzle",
      "difficulty": "master",
      "timerSeconds": 20,
      "curated": true,
      "clues": [
        "I attempted to walk on the storm-tossed waters of Galilee.",
        "Jesus declared to me: 'Upon this rock I will build my church.'",
        "An angel escorted me past two guard posts right out of Herod's iron prison gates."
      ]
    }
  },
  {
    "id": "bible-character-quest-l48-c4",
    "game_slug": "bible-character-quest",
    "level": 48,
    "challenge_index": 4,
    "question_text": "Which biblical figure experienced these life milestones in chronological order: Consented to Stephen's stoning -> Struck blind on the road to Damascus -> Baptized by Ananias -> Lowered through a wall in a basket at Damascus -> Preached on Mars Hill in Athens?",
    "options": [
      "Paul (Saul of Tarsus)",
      "Barnabas",
      "Silas",
      "Philip"
    ],
    "correct_answer": "Paul (Saul of Tarsus)",
    "reference": "Acts 8:1; Acts 9:1-25; Acts 17:22",
    "explanation": "Saul guarded the coats of those stoning Stephen, saw the blinding light near Damascus, was healed and baptized by Ananias, escaped Damascus in a wicker basket, and confronted Athenian philosophers at the Areopagus.",
    "metadata": {
      "stage": 10,
      "stage_title": "The Ultimate Character Quest",
      "level_theme": "Life Story Puzzle",
      "category": "The Ultimate Character Quest",
      "challengeType": "life-story-puzzle",
      "mechanic": "life-story-puzzle",
      "difficulty": "master",
      "timerSeconds": 20,
      "curated": true,
      "clues": [
        "I was a Hebrew of Hebrews, a Pharisee born in Tarsus of Cilicia.",
        "A voice from heaven arrested me: 'Saul, Saul, why are you persecuting me?'",
        "I bore in my body the brand-marks of Jesus across the Roman empire."
      ]
    }
  },
  {
    "id": "bible-character-quest-l48-c5",
    "game_slug": "bible-character-quest",
    "level": 48,
    "challenge_index": 5,
    "question_text": "Which biblical figure experienced these life milestones in chronological order: Placed in a reed basket on the Nile -> Raised in Pharaoh's palace -> Fled to Midian after killing an Egyptian -> Encountered God at the burning bush -> Died atop Mount Nebo overlooking the Promised Land?",
    "options": [
      "Moses",
      "Aaron",
      "Joshua",
      "Joseph"
    ],
    "correct_answer": "Moses",
    "reference": "Exodus 2-3; Deuteronomy 34:1-5",
    "explanation": "Moses was saved in an ark of bulrushes, grew up as royalty in Egypt, spent 40 years as an exile shepherd, spoke with God at the burning bush, and died at age 120 on Mount Nebo.",
    "metadata": {
      "stage": 10,
      "stage_title": "The Ultimate Character Quest",
      "level_theme": "Life Story Puzzle",
      "category": "The Ultimate Character Quest",
      "challengeType": "life-story-puzzle",
      "mechanic": "life-story-puzzle",
      "difficulty": "master",
      "timerSeconds": 20,
      "curated": true,
      "clues": [
        "I was hidden three months by my parents because they saw I was a beautiful child.",
        "I chose to suffer affliction with the people of God rather than enjoy the pleasures of sin for a season.",
        "The Lord buried me with His own hand in an unknown valley in Moab."
      ]
    }
  },
  {
    "id": "bible-character-quest-l49-c1",
    "game_slug": "bible-character-quest",
    "level": 49,
    "challenge_index": 1,
    "question_text": "Which royal palace administrator in Samaria feared the Lord greatly, secretly hid one hundred prophets of the Lord by fifties in two caves, and fed them with bread and water during Jezebel's purge?",
    "options": [
      "Obadiah",
      "Adoniram",
      "Benaiah",
      "Ahijah"
    ],
    "correct_answer": "Obadiah",
    "reference": "1 Kings 18:3-16",
    "explanation": "Obadiah, steward of Ahab's palace, feared God from his youth; he hid 100 prophets from Jezebel and provided bread and water; Elijah met him while Obadiah was searching for grass for the royal mules.",
    "metadata": {
      "stage": 10,
      "stage_title": "The Ultimate Character Quest",
      "level_theme": "Bible Character Investigator",
      "category": "The Ultimate Character Quest",
      "challengeType": "character-investigator",
      "mechanic": "character-investigator",
      "difficulty": "master",
      "timerSeconds": 20,
      "curated": true,
      "clues": [
        "I worked at the very nerve center of Ahab and Jezebel's royal regime.",
        "I risked execution for high treason to run a secret underground logistics network for God's prophets.",
        "Elijah commanded me: 'Go, tell your master: Behold, Elijah is here!'"
      ]
    }
  },
  {
    "id": "bible-character-quest-l49-c2",
    "game_slug": "bible-character-quest",
    "level": 49,
    "challenge_index": 2,
    "question_text": "Which apostle was gathering a bundle of sticks on the cold, rainy island of Malta when a venomous viper fastened onto his hand, which he shook off into the fire suffering no ill effects?",
    "options": [
      "Paul",
      "Peter",
      "John",
      "Philip"
    ],
    "correct_answer": "Paul",
    "reference": "Acts 28:1-6",
    "explanation": "On Malta, a viper driven out by the heat fastened on Paul's hand; islanders expected him to swell up or drop dead, but when no harm came, they changed their minds and said he was a god.",
    "metadata": {
      "stage": 10,
      "stage_title": "The Ultimate Character Quest",
      "level_theme": "Bible Character Investigator",
      "category": "The Ultimate Character Quest",
      "challengeType": "character-investigator",
      "mechanic": "character-investigator",
      "difficulty": "master",
      "timerSeconds": 20,
      "curated": true,
      "clues": [
        "I was soaking wet and shivering beside a bonfire after our ship broke apart on the reefs.",
        "Pagan onlookers observed the venomous reptile dangling from my hand and declared I was a murderer pursued by Justice.",
        "I shook the beast into the flames and suffered neither swelling nor death, fulfilling Jesus' promise."
      ]
    }
  },
  {
    "id": "bible-character-quest-l49-c3",
    "game_slug": "bible-character-quest",
    "level": 49,
    "challenge_index": 3,
    "question_text": "Which desperate king disguised himself in common clothes, travelled by night to Endor with two men, and consulted a spiritist medium to conjure up the deceased prophet Samuel on the eve of his death?",
    "options": [
      "Saul",
      "Ahab",
      "Ahaziah",
      "Manasseh"
    ],
    "correct_answer": "Saul",
    "reference": "1 Samuel 28:7-20",
    "explanation": "Saul disguised himself and visited the witch of Endor; when Samuel appeared, he foretold that the Lord had departed from Saul and that tomorrow Saul and his sons would be with him.",
    "metadata": {
      "stage": 10,
      "stage_title": "The Ultimate Character Quest",
      "level_theme": "Bible Character Investigator",
      "category": "The Ultimate Character Quest",
      "challengeType": "character-investigator",
      "mechanic": "character-investigator",
      "difficulty": "master",
      "timerSeconds": 20,
      "curated": true,
      "clues": [
        "I had previously expelled all spiritists and mediums from the land of Israel.",
        "With the Philistine army massing at Shunem and heaven refusing to answer me, I sought forbidden necromancy.",
        "The ghostly appearance of the old mantle-wrapped prophet announced my impending death."
      ]
    }
  },
  {
    "id": "bible-character-quest-l49-c4",
    "game_slug": "bible-character-quest",
    "level": 49,
    "challenge_index": 4,
    "question_text": "Which devout Roman soldier stationed in Caesarea was on his knees praying at three in the afternoon when an angel appeared in bright clothes saying 'Your prayers and your alms have ascended as a memorial before God'?",
    "options": [
      "Cornelius",
      "Julius",
      "Publius",
      "Sergius Paulus"
    ],
    "correct_answer": "Cornelius",
    "reference": "Acts 10:1-4",
    "explanation": "Cornelius, centurion of the Italian band, was a generous and praying Gentile whose vision orchestrated Peter's journey to open the kingdom to non-Jewish nations.",
    "metadata": {
      "stage": 10,
      "stage_title": "The Ultimate Character Quest",
      "level_theme": "Bible Character Investigator",
      "category": "The Ultimate Character Quest",
      "challengeType": "character-investigator",
      "mechanic": "character-investigator",
      "difficulty": "master",
      "timerSeconds": 20,
      "curated": true,
      "clues": [
        "I was an uncircumcised Gentile officer commanding Roman troops.",
        "My consistent private prayer life and generous alms caught the attention of Almighty God.",
        "An angel gave me specific navigational instructions to send messengers to Simon the tanner's house in Joppa."
      ]
    }
  },
  {
    "id": "bible-character-quest-l49-c5",
    "game_slug": "bible-character-quest",
    "level": 49,
    "challenge_index": 5,
    "question_text": "Which Benjamite judge delivered Israel by assassinating King Eglon of Moab in his cool summer rooftop chamber with an eighteen-inch two-edged dagger strapped to his right thigh?",
    "options": [
      "Ehud son of Gera",
      "Shamgar son of Anath",
      "Gideon",
      "Othniel son of Kenaz"
    ],
    "correct_answer": "Ehud son of Gera",
    "reference": "Judges 3:15-26",
    "explanation": "Ehud, a left-handed Benjamite, crafted a two-edged short sword, strapped it to his right thigh, delivered tribute to obese King Eglon, locked the doors after killing him, and escaped.",
    "metadata": {
      "stage": 10,
      "stage_title": "The Ultimate Character Quest",
      "level_theme": "Bible Character Investigator",
      "category": "The Ultimate Character Quest",
      "challengeType": "character-investigator",
      "mechanic": "character-investigator",
      "difficulty": "master",
      "timerSeconds": 20,
      "curated": true,
      "clues": [
        "I was gifted with physical dexterity because I was left-handed.",
        "I informed the Moabite monarch: 'I have a secret message from God for you.'",
        "I slipped out through the roof porch and blew the ram's horn in the hill country of Ephraim."
      ]
    }
  },
  {
    "id": "bible-character-quest-l50-c1",
    "game_slug": "bible-character-quest",
    "level": 50,
    "challenge_index": 1,
    "question_text": "According to Judges 18:30, what was the exact name of the Levite priest who established an unauthorized idolatrous priesthood for the tribe of Dan, revealed to be the grandson of Moses?",
    "options": [
      "Jonathan son of Gershom, son of Moses",
      "Phinehas son of Eleazar",
      "Ahimelech son of Ahitub",
      "Zechariah son of Jehoiada"
    ],
    "correct_answer": "Jonathan son of Gershom, son of Moses",
    "reference": "Judges 18:30",
    "explanation": "Judges 18:30 explicitly states that Jonathan son of Gershom, son of Moses (often obscured in scribal tradition as Manasseh to protect Moses' honor), and his sons were priests to Dan until the captivity.",
    "metadata": {
      "stage": 10,
      "stage_title": "The Ultimate Character Quest",
      "level_theme": "Ultimate Character Master",
      "category": "The Ultimate Character Quest",
      "challengeType": "ultimate-master",
      "mechanic": "ultimate-master",
      "difficulty": "master",
      "timerSeconds": 15,
      "curated": true,
      "clues": [
        "I was a wandering young Levite from Bethlehem in Judah who sold my priestly services for ten shekels of silver and a suit of apparel.",
        "The Danites stole Micah's carved image and hired me away to be priest to an entire tribe.",
        "My grandfather was the greatest lawgiver and prophet in Israel's history."
      ]
    }
  },
  {
    "id": "bible-character-quest-l50-c2",
    "game_slug": "bible-character-quest",
    "level": 50,
    "challenge_index": 2,
    "question_text": "Which young missionary abandoned Paul and Barnabas at Perga in Pamphylia, caused a bitter rupture between them at Antioch, yet was later commended by Paul in Rome as 'useful to me for ministry'?",
    "options": [
      "John Mark",
      "Timothy",
      "Titus",
      "Demas"
    ],
    "correct_answer": "John Mark",
    "reference": "Acts 13:13; Acts 15:37-39; 2 Timothy 4:11",
    "explanation": "John Mark left the first missionary journey at Perga, prompting Paul to refuse him on the second; years later in Roman prison Paul wrote: 'Get Mark and bring him with you, for he is very useful to me for ministry.'",
    "metadata": {
      "stage": 10,
      "stage_title": "The Ultimate Character Quest",
      "level_theme": "Ultimate Character Master",
      "category": "The Ultimate Character Quest",
      "challengeType": "ultimate-master",
      "mechanic": "ultimate-master",
      "difficulty": "master",
      "timerSeconds": 15,
      "curated": true,
      "clues": [
        "I sailed with Paul and my cousin Barnabas across Cyprus during their earliest campaign.",
        "I deserted the missionary frontline when the team faced the rugged mountains of Pamphylia.",
        "In my mature years, I authored the earliest canonical Gospel and won Paul's highest praise."
      ]
    }
  },
  {
    "id": "bible-character-quest-l50-c3",
    "game_slug": "bible-character-quest",
    "level": 50,
    "challenge_index": 3,
    "question_text": "Which wicked queen mother, the daughter of King Ahab and Jezebel of Israel, usurped the throne of Judah for six years and systematically attempted to exterminate the entire royal lineage of David?",
    "options": [
      "Athaliah",
      "Maakah",
      "Jezebel",
      "Shelomith"
    ],
    "correct_answer": "Athaliah",
    "reference": "2 Kings 11:1-3; 2 Chronicles 22:10-12",
    "explanation": "When Athaliah saw her son King Ahaziah was dead, she arose and destroyed all the royal seed of the house of David, reigning six years until Jehoiada's temple revolt.",
    "metadata": {
      "stage": 10,
      "stage_title": "The Ultimate Character Quest",
      "level_theme": "Ultimate Character Master",
      "category": "The Ultimate Character Quest",
      "challengeType": "ultimate-master",
      "mechanic": "ultimate-master",
      "difficulty": "master",
      "timerSeconds": 15,
      "curated": true,
      "clues": [
        "I was the daughter of Israel's most notorious idolatrous royal couple.",
        "My marriage to King Jehoram of Judah poisoned the Davidic dynasty with Baal worship.",
        "When young Joash was crowned, I ripped my robes screaming 'Treason! Treason!' before being executed at the horse gate."
      ]
    }
  },
  {
    "id": "bible-character-quest-l50-c4",
    "game_slug": "bible-character-quest",
    "level": 50,
    "challenge_index": 4,
    "question_text": "Which courageous court prophet confronted King David after his adulterous murder of Uriah the Hittite, telling the piercing parable of a rich man who stole a poor man's single pet ewe lamb?",
    "options": [
      "Nathan",
      "Gad the Seer",
      "Ahijah",
      "Shemaiah"
    ],
    "correct_answer": "Nathan",
    "reference": "2 Samuel 12:1-15",
    "explanation": "Nathan confronted David with the story of the stolen ewe lamb; when David's anger burned against the rich man, Nathan boldly pointed: 'You are the man!'",
    "metadata": {
      "stage": 10,
      "stage_title": "The Ultimate Character Quest",
      "level_theme": "Ultimate Character Master",
      "category": "The Ultimate Character Quest",
      "challengeType": "ultimate-master",
      "mechanic": "ultimate-master",
      "difficulty": "master",
      "timerSeconds": 15,
      "curated": true,
      "clues": [
        "I served as court prophet and royal counselor during David's golden era.",
        "I narrated an evocative legal grievance about an impoverished man's cherished household pet.",
        "I looked Israel's most powerful warrior monarch in the eye and uttered four words: 'You are the man!'"
      ]
    }
  },
  {
    "id": "bible-character-quest-l50-c5",
    "game_slug": "bible-character-quest",
    "level": 50,
    "challenge_index": 5,
    "question_text": "Which beloved apostle was banished in elderly exile to the penal island of Patmos on the Lord's Day, heard a voice like a trumpet, and collapsed as though dead before the blazing glorified Son of Man?",
    "options": [
      "John the Apostle",
      "Simon Peter",
      "Paul",
      "James the brother of Jesus"
    ],
    "correct_answer": "John the Apostle",
    "reference": "Revelation 1:9-17",
    "explanation": "John was on the island called Patmos for the word of God and testimony of Jesus; he turned and saw the glorified Christ and fell at His feet like a dead man, but Jesus laid His right hand on him saying: 'Fear not, I am the first and the last.'",
    "metadata": {
      "stage": 10,
      "stage_title": "The Ultimate Character Quest",
      "level_theme": "Ultimate Character Master",
      "category": "The Ultimate Character Quest",
      "challengeType": "ultimate-master",
      "mechanic": "ultimate-master",
      "difficulty": "master",
      "timerSeconds": 15,
      "curated": true,
      "clues": [
        "I was the youngest of the original Twelve and leaned on Jesus' chest at the Last Supper.",
        "Roman authorities banished me to a rocky penal quarry in the Aegean Sea.",
        "I was in the Spirit on the Lord's Day when I beheld the Alpha and Omega holding the seven stars and the keys of Death and Hades."
      ]
    }
  }
];
