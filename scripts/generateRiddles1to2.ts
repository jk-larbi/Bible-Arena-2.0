import fs from 'fs';
import path from 'path';

export interface RawRiddleQuestion {
  level: number;
  challengeIndex: number;
  stage: number;
  stageTitle: string;
  levelTitle: string;
  riddleType: string;
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

const batch1Questions: RawRiddleQuestion[] = [
  // ==========================================
  // STAGE 1: RIDDLE FOUNDATIONS (Levels 1–5)
  // ==========================================

  // Level 1: Foundations of Faith & Mystery
  {
    level: 1,
    challengeIndex: 1,
    stage: 1,
    stageTitle: 'Riddle Foundations',
    levelTitle: 'Foundations of Faith & Mystery',
    riddleType: 'Who Am I?',
    isTyped: false,
    questionText: 'WHO AM I?\nMy assignment concerned a foreign city of great wickedness, but my first recorded instinct was to board a ship heading across the sea in the opposite direction. Even after my mission succeeded and thousands repented, my own reaction became the subject of a divine lesson involving a scorching wind, a worm, and a withered leafy plant. Who am I?',
    clues: [
      'Fled towards Tarshish from the presence of the Lord.',
      'Spent three days and three nights in the belly of a great fish.',
      'Angered because Nineveh received mercy.'
    ],
    options: ['Jonah', 'Amos', 'Nahum', 'Micah'],
    correctAnswer: 'Jonah',
    acceptedAlternatives: ['Jonas'],
    reference: 'Jonah 1:1–3; 3:1–10; 4:5–11',
    explanation: 'Jonah fled to Tarshish, was swallowed by a great fish, preached repentance to Nineveh, and was reproved through the withered plant.',
    hint: 'Reluctant prophet to Nineveh whose book ends with God’s compassion.',
    testament: 'Old Testament',
    difficulty: 'easy',
    timerSeconds: 30
  },
  {
    level: 1,
    challengeIndex: 2,
    stage: 1,
    stageTitle: 'Riddle Foundations',
    levelTitle: 'Foundations of Faith & Mystery',
    riddleType: 'What Am I?',
    isTyped: false,
    questionText: 'WHAT AM I?\nI was crafted from bronze and hoisted upon a pole in the wilderness so that venomous bites would not prove fatal to those who looked upon me in faith. Centuries later, an upright king of Judah shattered me to pieces because Israel burned incense to me as an idol and named me Nehushtan. What am I?',
    clues: [
      'Commissioned during fiery serpent attacks in the desert of Edom.',
      'Jesus compared His own crucifixion to my being lifted up (John 3:14).',
      'Destroyed during Hezekiah’s religious reforms.'
    ],
    options: ['The Bronze Serpent', 'The Golden Calf', 'The Bronze Altar', 'The Bronze Basin'],
    correctAnswer: 'The Bronze Serpent',
    acceptedAlternatives: ['Bronze Serpent', 'Brazen Serpent', 'Nehushtan', 'Copper Serpent'],
    reference: 'Numbers 21:8–9; 2 Kings 18:4; John 3:14',
    explanation: 'Moses made a bronze serpent; King Hezekiah later broke it in pieces when Israel turned it into an idol named Nehushtan.',
    hint: 'Mounted on a wilderness pole to cure fiery serpent bites.',
    testament: 'Old Testament',
    difficulty: 'easy',
    timerSeconds: 30
  },
  {
    level: 1,
    challengeIndex: 3,
    stage: 1,
    stageTitle: 'Riddle Foundations',
    levelTitle: 'Foundations of Faith & Mystery',
    riddleType: 'Where Am I?',
    isTyped: false,
    questionText: 'WHERE AM I?\nI was a fortified city whose downfall was brought about by neither battering rams nor siege ramps, but by seven priests carrying ram’s horn trumpets before the Ark, daily circumambulations, and a unified shout of triumph on the seventh day. Only the household of an innkeeper displaying a scarlet cord was spared. What city am I?',
    clues: [
      'Located in the Jordan Valley north of the Dead Sea.',
      'Walls fell flat after seven days of marching.',
      'Rahab the harlot and her family survived within my ruins.'
    ],
    options: ['Jericho', 'Ai', 'Gibeon', 'Hazor'],
    correctAnswer: 'Jericho',
    acceptedAlternatives: ['City of Palm Trees'],
    reference: 'Joshua 6:1–25; Hebrews 11:30',
    explanation: 'Jericho fell when Joshua’s army marched around it for seven days and shouted; Rahab was saved by the scarlet cord.',
    hint: 'First fortified Canaanite city conquered by Joshua.',
    testament: 'Old Testament',
    difficulty: 'easy',
    timerSeconds: 30
  },
  {
    level: 1,
    challengeIndex: 4,
    stage: 1,
    stageTitle: 'Riddle Foundations',
    levelTitle: 'Foundations of Faith & Mystery',
    riddleType: 'The Three-Clue Riddle',
    isTyped: false,
    questionText: 'THE THREE-CLUE RIDDLE:\nClue 1: I was a foreigner living in Moab until grief and covenant devotion compelled me to leave my homeland.\nClue 2: I gleaned barley behind the reapers in the field of a wealthy landowner.\nClue 3: Through the law of the kinsman-redeemer, I became the great-grandmother of King David. Who am I?',
    clues: [
      'Clue 1: Cleaved to Naomi when Orpah turned back.',
      'Clue 2: Laid at the feet of Boaz on the threshing floor.',
      'Clue 3: Bore Obed, father of Jesse, father of David.'
    ],
    options: ['Ruth', 'Orpah', 'Naomi', 'Tamar'],
    correctAnswer: 'Ruth',
    acceptedAlternatives: ['Ruth the Moabitess'],
    reference: 'Ruth 1:16–17; 3:1–9; 4:13–22',
    explanation: 'Ruth the Moabitess declared "Your people shall be my people", married Boaz, and became ancestral mother to King David and Christ.',
    hint: 'Moabite daughter-in-law of Naomi.',
    testament: 'Old Testament',
    difficulty: 'easy',
    timerSeconds: 30
  },
  {
    level: 1,
    challengeIndex: 5,
    stage: 1,
    stageTitle: 'Riddle Foundations',
    levelTitle: 'Foundations of Faith & Mystery',
    riddleType: 'Type the Name',
    isTyped: true,
    questionText: 'TYPE THE NAME — MINI-BOSS RIDDLE:\nI was a left-handed Benjamite whom God raised up as a deliverer when Israel was oppressed by Moab. Having concealed an eighteen-inch double-edged dagger under my clothing on my right thigh, I secured a private audience with the obese King Eglon under the pretext of delivering a secret message from God, and dispatched him in his cool roof chamber. Who am I?',
    clues: [
      'Son of Gera, from the tribe of Benjamin.',
      'Took advantage of being left-handed to bypass normal weapon inspections.',
      'Escaped through the porch after locking the doors of the roof chamber.'
    ],
    options: ['Ehud', 'Shamgar', 'Othniel', 'Gideon'],
    correctAnswer: 'Ehud',
    acceptedAlternatives: ['Ehud son of Gera', 'Ehud ben Gera'],
    reference: 'Judges 3:15–26',
    explanation: 'Ehud the left-handed Benjamite killed Eglon king of Moab with a double-edged dagger strapped to his right thigh.',
    hint: 'Left-handed judge of Israel; assassinated King Eglon.',
    testament: 'Old Testament',
    difficulty: 'medium',
    timerSeconds: 25
  },

  // Level 2: Kings, Prophets & Curiosities
  {
    level: 2,
    challengeIndex: 1,
    stage: 1,
    stageTitle: 'Riddle Foundations',
    levelTitle: 'Kings, Prophets & Curiosities',
    riddleType: 'Who Am I?',
    isTyped: false,
    questionText: 'WHO AM I?\nI possessed unequaled wisdom, built a temple adorned with gold and cedar of Lebanon, and was visited by a wealthy queen from the south who arrived with camels bearing spices and precious stones to test me with hard questions. Who am I?',
    clues: [
      'Asked God for an understanding heart rather than long life or riches.',
      'Proposed dividing a baby with a sword to discover the true mother.',
      'Authored proverbs and songs, but was led astray by foreign wives.'
    ],
    options: ['Solomon', 'David', 'Hezekiah', 'Josiah'],
    correctAnswer: 'Solomon',
    acceptedAlternatives: ['Jedidiah', 'King Solomon'],
    reference: '1 Kings 3:5–12; 4:29–34; 10:1–13',
    explanation: 'King Solomon built the Jerusalem Temple, judged wisely with the two mothers, and was visited by the Queen of Sheba.',
    hint: 'Son of David and Bathsheba famed for wisdom.',
    testament: 'Old Testament',
    difficulty: 'easy',
    timerSeconds: 30
  },
  {
    level: 2,
    challengeIndex: 2,
    stage: 1,
    stageTitle: 'Riddle Foundations',
    levelTitle: 'Kings, Prophets & Curiosities',
    riddleType: 'What Am I?',
    isTyped: false,
    questionText: 'WHAT AM I?\nCarried by a Levite woman in secret for three months, I was coated with pitch and bitumen to float among the reeds along the bank of the Nile. My tiny crying passenger was discovered by a bathing princess and nursed by his own mother. What am I?',
    clues: [
      'Made of papyrus reeds (bulrushes).',
      'Placed near the riverbank where Pharaoh’s daughter came down to wash.',
      'Watched from afar by Miriam, the child’s older sister.'
    ],
    options: ['Moses’ Papyrus Basket', 'The Ark of the Covenant', 'Noah’s Ark', 'The Golden Censer'],
    correctAnswer: 'Moses’ Papyrus Basket',
    acceptedAlternatives: ['Papyrus Basket', 'Ark of Bulrushes', 'Basket of Bulrushes', 'Moses Basket'],
    reference: 'Exodus 2:1–10',
    explanation: 'Jochebed placed baby Moses in an ark of bulrushes daubed with pitch along the Nile, where Pharaoh’s daughter rescued him.',
    hint: 'Reed vessel that preserved baby Moses in the Nile.',
    testament: 'Old Testament',
    difficulty: 'easy',
    timerSeconds: 30
  },
  {
    level: 2,
    challengeIndex: 3,
    stage: 1,
    stageTitle: 'Riddle Foundations',
    levelTitle: 'Kings, Prophets & Curiosities',
    riddleType: 'Where Am I?',
    isTyped: false,
    questionText: 'WHERE AM I?\nI was a dramatic coastal mountain ridge where a lone prophet of Yahweh confronted 450 prophets of Baal and 400 prophets of Asherah. Fire fell from heaven to consume a water-drenched sacrifice, after which the false prophets were slaughtered in the Kishon valley below. What mountain am I?',
    clues: [
      'Overlooks the Mediterranean Sea and the Jezreel Valley.',
      'Site where Elijah asked: "How long will you go limping between two different opinions?"',
      'Prophet’s servant saw a small cloud the size of a man’s hand rising from the sea.'
    ],
    options: ['Mount Carmel', 'Mount Sinai', 'Mount Horeb', 'Mount Nebo'],
    correctAnswer: 'Mount Carmel',
    acceptedAlternatives: ['Carmel'],
    reference: '1 Kings 18:19–40',
    explanation: 'Mount Carmel was the site of Elijah’s altar contest with the prophets of Baal, where fire fell from heaven to consume the wet offering.',
    hint: 'Mountain of Elijah’s fire contest with the prophets of Baal.',
    testament: 'Old Testament',
    difficulty: 'easy',
    timerSeconds: 30
  },
  {
    level: 2,
    challengeIndex: 4,
    stage: 1,
    stageTitle: 'Riddle Foundations',
    levelTitle: 'Kings, Prophets & Curiosities',
    riddleType: 'The Three-Clue Riddle',
    isTyped: false,
    questionText: 'THE THREE-CLUE RIDDLE:\nClue 1: I was an upright tax collector in Jericho who was short of stature.\nClue 2: I climbed up into a sycamore-fig tree to see Jesus passing by.\nClue 3: Jesus invited Himself to my house, and I pledged half my goods to the poor and fourfold restitution. Who am I?',
    clues: [
      'Chief tax collector in Jericho.',
      'Jesus said to me: "Today salvation has come to this house."',
      'Name begins with Z.'
    ],
    options: ['Zacchaeus', 'Matthew', 'Nicodemus', 'Bartimaeus'],
    correctAnswer: 'Zacchaeus',
    acceptedAlternatives: ['Zaccheus'],
    reference: 'Luke 19:1–10',
    explanation: 'Zacchaeus was the wealthy chief tax collector in Jericho who climbed a sycamore tree to see Jesus.',
    hint: 'Short tax collector who climbed a sycamore tree.',
    testament: 'New Testament',
    difficulty: 'easy',
    timerSeconds: 30
  },
  {
    level: 2,
    challengeIndex: 5,
    stage: 1,
    stageTitle: 'Riddle Foundations',
    levelTitle: 'Kings, Prophets & Curiosities',
    riddleType: 'Type the Name',
    isTyped: true,
    questionText: 'TYPE THE NAME — MINI-BOSS RIDDLE:\nI was an Ethiopian court eunuch and high official in charge of the treasury of Candace, queen of the Ethiopians. I had traveled to Jerusalem to worship and was sitting in my chariot on the desert road to Gaza reading the prophet Isaiah when an evangelist joined me and explained the suffering servant passage. Who was the evangelist who baptized me in roadside water?',
    clues: [
      'One of the seven chosen to serve tables in Jerusalem (Acts 6).',
      'Preached Christ in Samaria with great signs before being directed to the desert.',
      'Carried away by the Spirit of the Lord to Azotus after the baptism.'
    ],
    options: ['Philip', 'Stephen', 'Barnabas', 'Silas'],
    correctAnswer: 'Philip',
    acceptedAlternatives: ['Philip the Evangelist', 'Philip the Deacon'],
    reference: 'Acts 8:26–40',
    explanation: 'Philip the Evangelist ran alongside the chariot, preached Jesus from Isaiah 53, and baptized the Ethiopian eunuch.',
    hint: 'Evangelist who met the Ethiopian eunuch on the Gaza road.',
    testament: 'New Testament',
    difficulty: 'medium',
    timerSeconds: 25
  },

  // Level 3: Shadows of Sinai & The Sanctuary
  {
    level: 3,
    challengeIndex: 1,
    stage: 1,
    stageTitle: 'Riddle Foundations',
    levelTitle: 'Shadows of Sinai & The Sanctuary',
    riddleType: 'What Am I?',
    isTyped: false,
    questionText: 'WHAT AM I?\nI was an acacia-wood chest overlaid inside and out with pure gold, crowned by a solid gold mercy seat flanked by two overshadowing cherubim. Carried by Levites on poles, I contained the two stone tablets of the testimony, a golden pot of manna, and a rod that miraculously blossomed. What am I?',
    clues: [
      'Stood in the Holy of Holies behind the veil.',
      'Sprinkled with blood once a year on the Day of Atonement (Yom Kippur).',
      'Captured by the Philistines at Ebenezer and placed in Dagon’s temple.'
    ],
    options: ['The Ark of the Covenant', 'The Altar of Incense', 'The Table of Showbread', 'The Golden Lampstand'],
    correctAnswer: 'The Ark of the Covenant',
    acceptedAlternatives: ['Ark of the Covenant', 'Ark of the Testimony', 'Ark of God'],
    reference: 'Exodus 25:10–22; Hebrews 9:4–5',
    explanation: 'The Ark of the Covenant was the centerpiece of the sanctuary, overlaid with gold and topped with the mercy seat.',
    hint: 'Golden chest in the Holy of Holies topped by the mercy seat.',
    testament: 'Old Testament',
    difficulty: 'easy',
    timerSeconds: 30
  },
  {
    level: 3,
    challengeIndex: 2,
    stage: 1,
    stageTitle: 'Riddle Foundations',
    levelTitle: 'Shadows of Sinai & The Sanctuary',
    riddleType: 'Who Am I?',
    isTyped: false,
    questionText: 'WHO AM I?\nI was chosen by God by name from the tribe of Judah and filled with the Spirit of God, with ability, intelligence, and knowledge in all crafts—to devise artistic designs, to work in gold, silver, and bronze, and to cut stones for setting in the construction of the wilderness Tabernacle. Who am I?',
    clues: [
      'Son of Uri, son of Hur, of the tribe of Judah.',
      'Partnered with Oholiab of the tribe of Dan.',
      'Master architect and craftsman of the sacred furniture.'
    ],
    options: ['Bezalel', 'Oholiab', 'Hiram', 'Hur'],
    correctAnswer: 'Bezalel',
    acceptedAlternatives: ['Bezaleel'],
    reference: 'Exodus 31:1–5; 35:30–35',
    explanation: 'Bezalel was specially endowed by the Holy Spirit with artistic craftsmanship to construct the Tabernacle and its sacred utensils.',
    hint: 'Chief Tabernacle artisan from the tribe of Judah.',
    testament: 'Old Testament',
    difficulty: 'medium',
    timerSeconds: 30
  },
  {
    level: 3,
    challengeIndex: 3,
    stage: 1,
    stageTitle: 'Riddle Foundations',
    levelTitle: 'Shadows of Sinai & The Sanctuary',
    riddleType: 'What Am I?',
    isTyped: false,
    questionText: 'WHAT AM I?\nI was a dry almond rod belonging to the head of the house of Levi. Placed in the tent of the testimony before the Lord alongside eleven other tribal rods to settle a rebellion against the priesthood, I was the only rod found the next morning to have budded, blossomed, and yielded ripe almonds overnight. What am I?',
    clues: [
      'Settled the rebellion of Korah, Dathan, and Abiram regarding Aaron’s priestly authority.',
      'Preserved in the Ark as a perpetual sign against the rebellious.',
      'Sprouted life without soil, roots, or water.'
    ],
    options: ['Aaron’s Rod', 'Moses’ Staff', 'David’s Scepter', 'Elisha’s Walking Stick'],
    correctAnswer: 'Aaron’s Rod',
    acceptedAlternatives: ['Aarons Rod', 'The Rod of Aaron'],
    reference: 'Numbers 17:1–10; Hebrews 9:4',
    explanation: 'Aaron’s rod blossomed and bore almonds overnight to vindicate Aaron’s God-given high priestly authority.',
    hint: 'Priestly rod that budded with ripe almonds.',
    testament: 'Old Testament',
    difficulty: 'easy',
    timerSeconds: 30
  },
  {
    level: 3,
    challengeIndex: 4,
    stage: 1,
    stageTitle: 'Riddle Foundations',
    levelTitle: 'Shadows of Sinai & The Sanctuary',
    riddleType: 'The Three-Clue Riddle',
    isTyped: false,
    questionText: 'THE THREE-CLUE RIDDLE:\nClue 1: I was a woman who sat under my own palm tree in Ephraim while the sons of Israel came up to me for judgment.\nClue 2: I summoned Barak to lead ten thousand men against Jabin’s general Sisera.\nClue 3: I sang a famous victory song celebrating the downfall of Canaanite oppressors and declared Jael blessed. Who am I?',
    clues: [
      'Wife of Lappidoth, prophetess and judge.',
      'Referred to myself as "a mother in Israel."',
      'Told Barak that the glory of the battle would go to a woman.'
    ],
    options: ['Deborah', 'Jael', 'Huldah', 'Miriam'],
    correctAnswer: 'Deborah',
    acceptedAlternatives: ['Debora'],
    reference: 'Judges 4:4–14; 5:1–31',
    explanation: 'Deborah was a prophetess, judge of Israel, and mother in Israel who commanded Barak and sang a victory anthem over Sisera.',
    hint: 'Prophetess and female judge who held court under a palm tree.',
    testament: 'Old Testament',
    difficulty: 'easy',
    timerSeconds: 30
  },
  {
    level: 3,
    challengeIndex: 5,
    stage: 1,
    stageTitle: 'Riddle Foundations',
    levelTitle: 'Shadows of Sinai & The Sanctuary',
    riddleType: 'Type the Name',
    isTyped: true,
    questionText: 'TYPE THE NAME — MINI-BOSS RIDDLE:\nI was the Kenite woman, wife of Heber, whose tent was pitched near Kedesh. When Sisera fled on foot after the rout of his nine hundred iron chariots, I invited him into my tent, gave him milk from a skin to drink, covered him with a rug, and drove a wooden tent peg through his temple into the ground while he was asleep. Who am I?',
    clues: [
      'Fulfills Deborah’s prophecy that the Lord would sell Sisera into the hand of a woman.',
      'Wife of Heber the Kenite, descendant of Hobab, Moses’ father-in-law.',
      'Praised in Judges 5: "Most blessed of women be Jael."'
    ],
    options: ['Jael', 'Deborah', 'Rahab', 'Athaliah'],
    correctAnswer: 'Jael',
    acceptedAlternatives: ['Ya’el'],
    reference: 'Judges 4:17–22; 5:24–27',
    explanation: 'Jael offered Sisera hospitality and milk, then assassinated the Canaanite commander with a tent peg and mallet.',
    hint: 'Heroine who killed Sisera with a tent peg and hammer.',
    testament: 'Old Testament',
    difficulty: 'medium',
    timerSeconds: 25
  },

  // Level 4: Miracles of Elijah & Elisha
  {
    level: 4,
    challengeIndex: 1,
    stage: 1,
    stageTitle: 'Riddle Foundations',
    levelTitle: 'Miracles of Elijah & Elisha',
    riddleType: 'What Am I?',
    isTyped: false,
    questionText: 'WHAT AM I?\nI was an animal pelt mantle that once belonged to a Tishbite prophet who was caught up to heaven in a whirlwind. When his grieving disciple struck the waters of the Jordan River with me and cried, "Where is the Lord, the God of Elijah?", the waters parted to the left and to the right. What am I?',
    clues: [
      'Cast upon Elisha while he was plowing with twelve yoke of oxen.',
      'Fell to earth as Elijah was taken up by fiery horses and a chariot.',
      'Symbol of a double portion of the prophetic spirit.'
    ],
    options: ['Elijah’s Cloak', 'Aaron’s Ephod', 'Joseph’s Coat of Many Colors', 'Samuel’s Robe'],
    correctAnswer: 'Elijah’s Cloak',
    acceptedAlternatives: ['Elijahs Mantle', 'Elijah’s Mantle', 'The Mantle of Elijah', 'Elijahs Cloak'],
    reference: '1 Kings 19:19; 2 Kings 2:8–14',
    explanation: 'Elijah’s mantle parted the Jordan River and symbolized the transfer of prophetic power and a double portion of his spirit to Elisha.',
    hint: 'Prophetic mantle that fell from Elijah as he ascended in a whirlwind.',
    testament: 'Old Testament',
    difficulty: 'easy',
    timerSeconds: 30
  },
  {
    level: 4,
    challengeIndex: 2,
    stage: 1,
    stageTitle: 'Riddle Foundations',
    levelTitle: 'Miracles of Elijah & Elisha',
    riddleType: 'Who Am I?',
    isTyped: false,
    questionText: 'WHO AM I?\nI was the commander of the Syrian royal army, a mighty man of valor who had won great victories, but I was struck with leprosy. Following the recommendation of an abducted young Israelite slave girl, I visited a prophet in Samaria who refused even to come out of his house, instructing me to dip seven times in the muddy Jordan River. Who am I?',
    clues: [
      'Expected the prophet to wave his hand over the spot and call on Yahweh.',
      'Preferred the rivers of Damascus, Abana and Pharpar, over all the waters of Israel.',
      'Flesh was restored like the flesh of a little child after washing seven times.'
    ],
    options: ['Naaman', 'Hazael', 'Ben-Hadad', 'Gehazi'],
    correctAnswer: 'Naaman',
    acceptedAlternatives: ['Naaman the Syrian'],
    reference: '2 Kings 5:1–14',
    explanation: 'Naaman, commander of the army of the king of Syria, was cleansed of leprosy after dipping seven times in the Jordan River on Elisha’s instruction.',
    hint: 'Syrian army commander cleansed of leprosy in the Jordan River.',
    testament: 'Old Testament',
    difficulty: 'easy',
    timerSeconds: 30
  },
  {
    level: 4,
    challengeIndex: 3,
    stage: 1,
    stageTitle: 'Riddle Foundations',
    levelTitle: 'Miracles of Elijah & Elisha',
    riddleType: 'What Am I?',
    isTyped: false,
    questionText: 'WHAT AM I?\nI was a heavy iron tool borrowed by one of the sons of the prophets while felling timber along the Jordan River to expand their dwelling. I slipped from my wooden handle and sank to the river bottom, but when a man of God threw a carved stick into the water at that exact spot, I defied gravity and floated to the surface. What am I?',
    clues: [
      'The workman cried: "Alas, my master! For it was borrowed."',
      'Elisha threw a stick into the water and caused me to float.',
      'The workman reached out his hand and picked me up from the water.'
    ],
    options: ['The Floating Axe Head', 'The Bronze Basin', 'David’s Iron Scepter', 'Gideon’s Iron Sickle'],
    correctAnswer: 'The Floating Axe Head',
    acceptedAlternatives: ['Floating Axe Head', 'Axe Head', 'Iron Axe Head'],
    reference: '2 Kings 6:1–7',
    explanation: 'When a borrowed iron axe head fell into the Jordan, Elisha threw a stick in and caused the heavy iron to swim or float to the top.',
    hint: 'Borrowed iron cutting tool that miraculously floated in the Jordan River.',
    testament: 'Old Testament',
    difficulty: 'medium',
    timerSeconds: 30
  },
  {
    level: 4,
    challengeIndex: 4,
    stage: 1,
    stageTitle: 'Riddle Foundations',
    levelTitle: 'Miracles of Elijah & Elisha',
    riddleType: 'The Three-Clue Riddle',
    isTyped: false,
    questionText: 'THE THREE-CLUE RIDDLE:\nClue 1: I was the servant of the prophet Elisha who was blinded by greed.\nClue 2: I secretly pursued Naaman the Syrian after he was healed and lied to extort two talents of silver and two changes of clothing.\nClue 3: When I lied to my master about where I had gone, the leprosy of Naaman clung to me and my descendants forever. Who am I?',
    clues: [
      'Served the prophet Elisha.',
      'Stashed stolen treasures in the citadel tower.',
      'Went out from Elisha’s presence a leper as white as snow.'
    ],
    options: ['Gehazi', 'Baruch', 'Ziba', 'Hazael'],
    correctAnswer: 'Gehazi',
    acceptedAlternatives: ['Gehasi'],
    reference: '2 Kings 5:20–27',
    explanation: 'Gehazi, servant of Elisha, greedily solicited gifts from Naaman and was cursed with Naaman’s incurable leprosy.',
    hint: 'Greedy servant of Elisha cursed with white leprosy.',
    testament: 'Old Testament',
    difficulty: 'medium',
    timerSeconds: 30
  },
  {
    level: 4,
    challengeIndex: 5,
    stage: 1,
    stageTitle: 'Riddle Foundations',
    levelTitle: 'Miracles of Elijah & Elisha',
    riddleType: 'Type the Name',
    isTyped: true,
    questionText: 'TYPE THE NAME — MINI-BOSS RIDDLE:\nI was a wealthy and hospitable woman of a city in the territory of Issachar who perceived that Elisha was a holy man of God. Together with my husband, I built a small roof chamber furnished with a bed, a table, a chair, and a lampstand for him to stay whenever he visited. When my promised son later died in my lap from a sunstroke, I laid him on the prophet’s bed, rode an ass to Mount Carmel, and saw him raised back to life. Who am I (by my biblical title/designation)?',
    clues: [
      'A notable woman of Shunem.',
      'Clung to Elisha’s feet on Mount Carmel and said: "Did I ask a son of my lord?"',
      'Child sneezed seven times and opened his eyes.'
    ],
    options: ['The Shunammite Woman', 'The Widow of Zarephath', 'Huldah the Prophetess', 'Abigail'],
    correctAnswer: 'The Shunammite Woman',
    acceptedAlternatives: ['Shunammite', 'Shunammite Woman', 'Woman of Shunem', 'The Shunammite'],
    reference: '2 Kings 4:8–37',
    explanation: 'The Shunammite woman built a prophet’s chamber for Elisha; her son later died and was raised to life after Elisha stretched himself over the boy.',
    hint: 'Notable woman who built a furnished upper room for Elisha in Shunem.',
    testament: 'Old Testament',
    difficulty: 'hard',
    timerSeconds: 25
  },

  // Level 5: Apostolic Mysteries & Early Church
  {
    level: 5,
    challengeIndex: 1,
    stage: 1,
    stageTitle: 'Riddle Foundations',
    levelTitle: 'Apostolic Mysteries & Early Church',
    riddleType: 'Who Am I?',
    isTyped: false,
    questionText: 'WHO AM I?\nI was a disciple in Damascus whom the Lord addressed in a vision, sending me to a house on Straight Street to lay hands on a notorious persecutor of the church named Saul of Tarsus so that he might regain his sight. Terrified at his reputation, I protested, but obeyed when the Lord declared him a chosen instrument to carry His name before Gentiles and kings. Who am I?',
    clues: [
      'Resident of Damascus, highly regarded by all Jews living there.',
      'Greeted Saul with the words: "Brother Saul, the Lord Jesus... has sent me."',
      'Scales fell from Saul’s eyes and he was baptized.'
    ],
    options: ['Ananias of Damascus', 'Ananias the High Priest', 'Barnabas', 'Silas'],
    correctAnswer: 'Ananias of Damascus',
    acceptedAlternatives: ['Ananias', 'Ananias of Syria'],
    reference: 'Acts 9:10–19; 22:12–16',
    explanation: 'Ananias was the faithful Damascus disciple instructed by Christ to restore Saul’s sight and baptize him on Straight Street.',
    hint: 'Damascus disciple sent to restore Saul’s sight on Straight Street.',
    testament: 'New Testament',
    difficulty: 'medium',
    timerSeconds: 30
  },
  {
    level: 5,
    challengeIndex: 2,
    stage: 1,
    stageTitle: 'Riddle Foundations',
    levelTitle: 'Apostolic Mysteries & Early Church',
    riddleType: 'Where Am I?',
    isTyped: false,
    questionText: 'WHERE AM I?\nI was a Roman colony in Macedonia that Paul visited after seeing a vision of a man crying, "Come over to Macedonia and help us." Outside our city gate by a river on the Sabbath, Paul spoke to women gathered for prayer, converting a purple-cloth merchant named Lydia; later, a midnight prison earthquake opened all our jail doors. What city am I?',
    clues: [
      'Leading city of the district of Macedonia.',
      'Paul and Silas were beaten with rods and placed in inner stocks here.',
      'The Roman jailer and his entire household believed and were baptized at midnight.'
    ],
    options: ['Philippi', 'Thessalonica', 'Berea', 'Corinth'],
    correctAnswer: 'Philippi',
    acceptedAlternatives: ['City of Philippi'],
    reference: 'Acts 16:11–40; Philippians 1:1',
    explanation: 'Philippi was the Macedonian city where Lydia was converted by the Gangites river and the jailer was converted after the midnight earthquake.',
    hint: 'First European city where Paul preached; home of Lydia and the converted jailer.',
    testament: 'New Testament',
    difficulty: 'medium',
    timerSeconds: 30
  },
  {
    level: 5,
    challengeIndex: 3,
    stage: 1,
    stageTitle: 'Riddle Foundations',
    levelTitle: 'Apostolic Mysteries & Early Church',
    riddleType: 'What Am I?',
    isTyped: false,
    questionText: 'WHAT AM I?\nI was a piece of cloth or work apron that had touched the skin of the Apostle Paul in Ephesus. When carried away and placed upon the sick, diseases departed from them and evil spirits flew out of them, causing the name of the Lord Jesus to be magnified throughout Asia Minor. What am I?',
    clues: [
      'Known in the Greek text as sudaria and semicinctia.',
      'Transferred extraordinary miracles (Acts 19:11–12) without Paul being physically present.',
      'Contrasted with the failed exorcisms of the seven sons of Sceva.'
    ],
    options: ['Paul’s Handkerchiefs and Aprons', 'Peter’s Shadow', 'The Hem of Jesus’ Garment', 'Elijah’s Mantle'],
    correctAnswer: 'Paul’s Handkerchiefs and Aprons',
    acceptedAlternatives: ['Handkerchiefs and Aprons', 'Pauls Handkerchief', 'Handkerchiefs of Paul'],
    reference: 'Acts 19:11–12',
    explanation: 'In Ephesus, handkerchiefs or aprons touched to Paul’s skin healed diseases and expelled evil spirits through extraordinary miracles.',
    hint: 'Cloth garments and sweat rags carried from Paul’s body to heal the sick.',
    testament: 'New Testament',
    difficulty: 'medium',
    timerSeconds: 30
  },
  {
    level: 5,
    challengeIndex: 4,
    stage: 1,
    stageTitle: 'Riddle Foundations',
    levelTitle: 'Apostolic Mysteries & Early Church',
    riddleType: 'The Three-Clue Riddle',
    isTyped: false,
    questionText: 'THE THREE-CLUE RIDDLE:\nClue 1: I was a young man in Troas who sat on a third-story window sill during an extraordinarily long discourse by Paul.\nClue 2: Sinking into a deep sleep as Paul talked until midnight, I fell down from the third story and was picked up dead.\nClue 3: Paul went down, fell upon me, embraced me, and said, "Do not be alarmed, for his life is in him," and I was brought home alive. Who am I?',
    clues: [
      'Name means "fortunate" or "lucky."',
      'Overcome by sleep due to many lamps burning in the upper room.',
      'Resurrected at midnight before Paul broke bread and departed at daybreak.'
    ],
    options: ['Eutychus', 'Trophimus', 'Erastus', 'Epaphroditus'],
    correctAnswer: 'Eutychus',
    acceptedAlternatives: ['Eutyches'],
    reference: 'Acts 20:7–12',
    explanation: 'Eutychus fell asleep during Paul’s long sermon in Troas, fell from a third-story window, died, and was revived by Paul.',
    hint: 'Young man in Troas who fell from a third-story window during Paul’s midnight sermon.',
    testament: 'New Testament',
    difficulty: 'medium',
    timerSeconds: 30
  },
  {
    level: 5,
    challengeIndex: 5,
    stage: 1,
    stageTitle: 'Riddle Foundations',
    levelTitle: 'Apostolic Mysteries & Early Church',
    riddleType: 'Type the Name',
    isTyped: true,
    questionText: 'TYPE THE NAME — MINI-BOSS RIDDLE:\nI was a Christian disciple in Joppa whose Aramaic name is Tabitha. Scripture commends me as being full of good works and acts of charity, constantly making tunics and cloaks for poor widows. When I fell ill and died, the disciples summoned the Apostle Peter from nearby Lydda; he put everyone out of the upper room, knelt down in prayer, and commanded, "Tabitha, arise!" Who am I by my Greek name?',
    clues: [
      'Greek name means "gazelle" or "doe."',
      'Peter presented me alive to the saints and widows.',
      'Resurrection caused many throughout Joppa to believe in the Lord.'
    ],
    options: ['Dorcas', 'Tabitha', 'Rhoda', 'Priscilla'],
    correctAnswer: 'Dorcas',
    acceptedAlternatives: ['Tabitha', 'Dorcas/Tabitha'],
    reference: 'Acts 9:36–42',
    explanation: 'Dorcas (Tabitha) of Joppa made garments for widows; when she died, Peter raised her back to life in the upper chamber.',
    hint: 'Joppa woman famous for making coats for widows; raised by Peter (Greek name).',
    testament: 'New Testament',
    difficulty: 'hard',
    timerSeconds: 25
  },

  // ==========================================
  // STAGE 2: MYSTERY OF THE PEOPLE (Levels 6–10)
  // ==========================================

  // Level 6: Judges, Warriors & Secret Agents
  {
    level: 6,
    challengeIndex: 1,
    stage: 2,
    stageTitle: 'Mystery of the People',
    levelTitle: 'Judges, Warriors & Secret Agents',
    riddleType: 'Who Am I?',
    isTyped: false,
    questionText: 'WHO AM I?\nI was a warrior judge in Israel who struck down six hundred Philistines with nothing more than an oxgoad, delivering Israel from oppression between the days of Ehud and Deborah. Who am I?',
    clues: [
      'Son of Anath.',
      'Used an agricultural cattle prod (oxgoad) as a lethal weapon.',
      'Mentioned in both Judges 3:31 and the song of Deborah (Judges 5:6).'
    ],
    options: ['Shamgar', 'Othniel', 'Tola', 'Jair'],
    correctAnswer: 'Shamgar',
    acceptedAlternatives: ['Shamgar son of Anath'],
    reference: 'Judges 3:31; 5:6',
    explanation: 'Shamgar son of Anath killed 600 Philistines with an oxgoad, single-handedly delivering Israel.',
    hint: 'Judge who killed 600 Philistines with an oxgoad.',
    testament: 'Old Testament',
    difficulty: 'medium',
    timerSeconds: 30
  },
  {
    level: 6,
    challengeIndex: 2,
    stage: 2,
    stageTitle: 'Mystery of the People',
    levelTitle: 'Judges, Warriors & Secret Agents',
    riddleType: 'The Biblical Relationship Riddle',
    isTyped: false,
    questionText: 'THE BIBLICAL RELATIONSHIP RIDDLE:\nI was the younger brother of Caleb who captured the fortified city of Kiriath-sepher (Debir) to win the hand of Caleb’s daughter Achsah in marriage. Years later, when Israel fell under the dominion of Cushan-rishathaim king of Mesopotamia, the Spirit of the Lord came upon me as the very first recorded judge of Israel. Who am I?',
    clues: [
      'Son of Kenaz, Caleb’s younger brother.',
      'Defeated Cushan-rishathaim of Mesopotamia (Aram-naharaim).',
      'Secured forty years of rest for the land.'
    ],
    options: ['Othniel', 'Ehud', 'Kenaz', 'Jephthah'],
    correctAnswer: 'Othniel',
    acceptedAlternatives: ['Othniel son of Kenaz'],
    reference: 'Joshua 15:15–17; Judges 3:9–11',
    explanation: 'Othniel son of Kenaz was Caleb’s nephew/son-in-law and the very first judge of Israel.',
    hint: 'First judge of Israel; Caleb’s nephew and son-in-law.',
    testament: 'Old Testament',
    difficulty: 'hard',
    timerSeconds: 30
  },
  {
    level: 6,
    challengeIndex: 3,
    stage: 2,
    stageTitle: 'Mystery of the People',
    levelTitle: 'Judges, Warriors & Secret Agents',
    riddleType: 'The Impossible Description',
    isTyped: false,
    questionText: 'THE IMPOSSIBLE DESCRIPTION:\nI was an outlaw son of a harlot driven from my father’s house by my brothers, yet the elders of Gilead begged me to return as their head and commander. Before defeating the Ammonites, I made a rash vow to offer as a burnt offering whatever came out of my house to meet me—and my only child, an unmarried daughter, walked through the door dancing with tambourines. Who am I?',
    clues: [
      'Gileadite warrior who dwelt in the land of Tob with worthless fellows.',
      'Sent ambassadors to the king of the Ammonites with an extensive historical defense.',
      'Daughter spent two months on the mountains bewailing her virginity.'
    ],
    options: ['Jephthah', 'Gideon', 'Samson', 'Barak'],
    correctAnswer: 'Jephthah',
    acceptedAlternatives: ['Jephthe'],
    reference: 'Judges 11:1–40; Hebrews 11:32',
    explanation: 'Jephthah made a tragic vow before battle, which cost him his only daughter when she came out to greet his victory.',
    hint: 'Judge of Gilead who made a rash vow concerning his only daughter.',
    testament: 'Old Testament',
    difficulty: 'medium',
    timerSeconds: 30
  },
  {
    level: 6,
    challengeIndex: 4,
    stage: 2,
    stageTitle: 'Mystery of the People',
    levelTitle: 'Judges, Warriors & Secret Agents',
    riddleType: 'The Three-Clue Riddle',
    isTyped: false,
    questionText: 'THE THREE-CLUE RIDDLE:\nClue 1: I was an illegitimate son of Gideon (Jerubbaal) who slaughtered seventy of my half-brothers upon a single stone in Ophrah.\nClue 2: The citizens of Shechem made me king beside the terebinth tree, fulfilling Jotham’s parable of the bramble.\nClue 3: While besieging the tower of Thebez, a woman dropped an upper millstone on my head, fracturing my skull; to avoid the shame of dying by a woman, I ordered my armor-bearer to run me through with a sword. Who am I?',
    clues: [
      'Son of Gideon by his concubine in Shechem.',
      'Only Jotham, the youngest brother, escaped the massacre at Ophrah.',
      'Killed at Thebez by a woman’s millstone.'
    ],
    options: ['Abimelech', 'Absalom', 'Adonijah', 'Ahaziah'],
    correctAnswer: 'Abimelech',
    acceptedAlternatives: ['Abimelek'],
    reference: 'Judges 9:1–54',
    explanation: 'Abimelech murdered his 70 brothers to seize power in Shechem, and died when a woman dropped a millstone on his head at Thebez.',
    hint: 'Usurper son of Gideon struck on the head by a millstone at Thebez.',
    testament: 'Old Testament',
    difficulty: 'medium',
    timerSeconds: 30
  },
  {
    level: 6,
    challengeIndex: 5,
    stage: 2,
    stageTitle: 'Mystery of the People',
    levelTitle: 'Judges, Warriors & Secret Agents',
    riddleType: 'Type the Name',
    isTyped: true,
    questionText: 'TYPE THE NAME — MINI-BOSS RIDDLE:\nI was the chief of David’s "Three Mighty Men" (the Tachmonite). In a single encounter, I lifted up my spear and slaughtered eight hundred (or three hundred in Chronicles) seasoned enemy warriors at one time. Who am I?',
    clues: [
      'Also called Adino the Eznite in 2 Samuel 23:8.',
      'Ranked above Eleazar son of Dodo and Shammah son of Agee.',
      'Chief among the captains of David’s elite royal champions.'
    ],
    options: ['Josheb-basshebeth', 'Benaiah', 'Abishai', 'Joab'],
    correctAnswer: 'Josheb-basshebeth',
    acceptedAlternatives: ['Josheb-Basshebeth', 'Jashobeam', 'Adino', 'Adino the Eznite'],
    reference: '2 Samuel 23:8; 1 Chronicles 11:11',
    explanation: 'Josheb-basshebeth the Tachmonite (Jashobeam) was the chief of David’s Three, slaying 800 men with his spear in one battle.',
    hint: 'Chief of David’s Three mighty men who slew 800 with his spear.',
    testament: 'Old Testament',
    difficulty: 'master',
    timerSeconds: 25
  },

  // Level 7: Royal Encounters & Palace Coups
  {
    level: 7,
    challengeIndex: 1,
    stage: 2,
    stageTitle: 'Mystery of the People',
    levelTitle: 'Royal Encounters & Palace Coups',
    riddleType: 'Who Am I?',
    isTyped: false,
    questionText: 'WHO AM I?\nI was the commander of King Saul’s army and the king’s first cousin. Following Saul’s death on Mount Gilboa, I made Saul’s son Ish-bosheth king over northern Israel. Later, after an accusation concerning Saul’s concubine Rizpah, I transferred my loyalty to David, only to be assassinated deceitfully at the gate of Hebron by Joab. Who am I?',
    clues: [
      'Son of Ner, Saul’s uncle.',
      'Killed Joab’s brother Asahel with the butt of his spear during a pursuit.',
      'David wept at my grave in Hebron and sang: "Should Abner die as a fool dies?"'
    ],
    options: ['Abner', 'Joab', 'Amasa', 'Benaiah'],
    correctAnswer: 'Abner',
    acceptedAlternatives: ['Abner son of Ner'],
    reference: '1 Samuel 14:50; 2 Samuel 2:8–23; 3:6–39',
    explanation: 'Abner son of Ner was Saul’s general who defected to David and was murdered by Joab at Hebron in revenge for Asahel.',
    hint: 'General of Saul’s army murdered by Joab at the gate of Hebron.',
    testament: 'Old Testament',
    difficulty: 'medium',
    timerSeconds: 30
  },
  {
    level: 7,
    challengeIndex: 2,
    stage: 2,
    stageTitle: 'Mystery of the People',
    levelTitle: 'Royal Encounters & Palace Coups',
    riddleType: 'The Biblical Relationship Riddle',
    isTyped: false,
    questionText: 'THE BIBLICAL RELATIONSHIP RIDDLE:\nI was a five-year-old royal grandson living in Gibeah when news arrived that my father Jonathan and grandfather King Saul were slain on Mount Gilboa. My nurse panicked, picked me up to flee, and accidentally dropped me, causing me to be lame in both feet for the rest of my life. Years later, King David searched for any survivor of Jonathan’s line to show the kindness of God, and restored to me all of Saul’s land, seating me at his own royal table. Who am I?',
    clues: [
      'Lived in obscurity in Lo-debar at the house of Machir son of Ammiel.',
      'Referred to myself as a "dead dog" before King David.',
      'Ziba was appointed to steward my vast agricultural estates.'
    ],
    options: ['Mephibosheth', 'Ish-bosheth', 'Armoni', 'Michal'],
    correctAnswer: 'Mephibosheth',
    acceptedAlternatives: ['Merib-baal', 'Meribbaal'],
    reference: '2 Samuel 4:4; 9:1–13',
    explanation: 'Mephibosheth, lame son of Jonathan, was summoned from Lo-debar by King David and given an honored seat at the royal banquet table.',
    hint: 'Lame son of Jonathan who ate continually at King David’s table.',
    testament: 'Old Testament',
    difficulty: 'medium',
    timerSeconds: 30
  },
  {
    level: 7,
    challengeIndex: 3,
    stage: 2,
    stageTitle: 'Mystery of the People',
    levelTitle: 'Royal Encounters & Palace Coups',
    riddleType: 'Who Am I?',
    isTyped: false,
    questionText: 'WHO AM I?\nI was David’s most esteemed counselor whose advice was regarded as though one consulted the oracle of God. When David’s son Absalom rebelled, I joined the conspiracy and counseled him to pursue David immediately with twelve thousand men. However, when Hushai the Archite defeated my advice and Absalom rejected my counsel, I set my house in order and hanged myself. Who am I?',
    clues: [
      'Grandfather of Bathsheba (father of Eliam, one of David’s Thirty).',
      'Counseled Absalom to sleep with David’s concubines in the sight of all Israel.',
      'Only counselor in the Old Testament recorded as hanging himself.'
    ],
    options: ['Ahithophel', 'Hushai', 'Ittai', 'Zadok'],
    correctAnswer: 'Ahithophel',
    acceptedAlternatives: ['Ahithophel the Gilonite', 'Achitophel'],
    reference: '2 Samuel 15:12, 31; 16:20–23; 17:1–23',
    explanation: 'Ahithophel was David’s brilliant counselor who defected to Absalom; when his military advice was rejected for Hushai’s, he hanged himself.',
    hint: 'David’s trusted counselor who defected to Absalom and hanged himself.',
    testament: 'Old Testament',
    difficulty: 'hard',
    timerSeconds: 30
  },
  {
    level: 7,
    challengeIndex: 4,
    stage: 2,
    stageTitle: 'Mystery of the People',
    levelTitle: 'Royal Encounters & Palace Coups',
    riddleType: 'The Three-Clue Riddle',
    isTyped: false,
    questionText: 'THE THREE-CLUE RIDDLE:\nClue 1: I was the bloodthirsty daughter of King Ahab and Jezebel who married King Jehoram of Judah.\nClue 2: When my son King Ahaziah was assassinated by Jehu, I arose to exterminate the entire royal seed of the house of David and seized the throne of Judah for six years.\nClue 3: I was overthrown when the high priest Jehoiada brought out the hidden child-king Joash; I tore my clothes crying "Treason! Treason!" and was put to death at the horse gate of the palace. Who am I?',
    clues: [
      'Only reigning queen to rule over Judah in Jerusalem.',
      'My daughter/sister Jehosheba stole away baby Joash from the massacre.',
      'Brought Baal worship into the southern kingdom of Judah.'
    ],
    options: ['Athaliah', 'Jezebel', 'Maacah', 'Herodias'],
    correctAnswer: 'Athaliah',
    acceptedAlternatives: ['Queen Athaliah'],
    reference: '2 Kings 11:1–16; 2 Chronicles 22:10–23:15',
    explanation: 'Athaliah murdered the royal heirs of Judah to rule as queen for six years until overthrown by Jehoiada on behalf of Joash.',
    hint: 'Usurper queen of Judah who attempted to wipe out the line of David.',
    testament: 'Old Testament',
    difficulty: 'hard',
    timerSeconds: 30
  },
  {
    level: 7,
    challengeIndex: 5,
    stage: 2,
    stageTitle: 'Mystery of the People',
    levelTitle: 'Royal Encounters & Palace Coups',
    riddleType: 'Type the Name',
    isTyped: true,
    questionText: 'TYPE THE NAME — MINI-BOSS RIDDLE:\nI was an Ethiopian court official (an officer in the royal palace) during the final siege of Jerusalem under King Zedekiah. Hearing that the princes had cast the prophet Jeremiah into the muddy cistern of Malchiah to die of starvation, I confronted the king at the Benjamin Gate, obtained thirty men, and rescued Jeremiah using old rags and worn-out clothes under his armpits with ropes. Because I trusted in Yahweh, God gave me a personal promise through Jeremiah that my life would be spared when the city fell to the Babylonians. Who am I?',
    clues: [
      'Name literally means "servant of the king."',
      'Rushed to King Zedekiah declaring: "These men have done evil in all that they have done to Jeremiah the prophet."',
      'Promised: "Your life shall be for a prize to you, because you have put your trust in me" (Jeremiah 39:18).'
    ],
    options: ['Ebed-Melech', 'Baruch', 'Gedaliah', 'Pashhur'],
    correctAnswer: 'Ebed-Melech',
    acceptedAlternatives: ['Ebedmelech', 'Ebed-melech the Ethiopian', 'Ebed Melech'],
    reference: 'Jeremiah 38:7–13; 39:15–18',
    explanation: 'Ebed-Melech the Ethiopian eunuch delivered Jeremiah from the miry cistern with ropes and rags and was granted divine protection.',
    hint: 'Ethiopian royal officer who rescued Jeremiah from the muddy cistern.',
    testament: 'Old Testament',
    difficulty: 'master',
    timerSeconds: 25
  },

  // Level 8: Forgotten Epistolary Figures
  {
    level: 8,
    challengeIndex: 1,
    stage: 2,
    stageTitle: 'Mystery of the People',
    levelTitle: 'Forgotten Epistolary Figures',
    riddleType: 'Who Am I?',
    isTyped: false,
    questionText: 'WHO AM I?\nI am the amanuensis (scribe) who physically put pen to parchment to write down Paul’s grand theological masterpiece to the church in the capital of the empire. Right before the final doxology, I inserted my own personal greeting: "I, [...], who wrote down this letter, greet you in the Lord." Who am I?',
    clues: [
      'Recorded in Romans 16:22.',
      'Name is a Latin ordinal meaning "third."',
      'Greeted the church alongside Gaius, Erastus, and Quartus.'
    ],
    options: ['Tertius', 'Quartus', 'Tychicus', 'Silvanus'],
    correctAnswer: 'Tertius',
    acceptedAlternatives: ['Tertius of Iconium'],
    reference: 'Romans 16:22',
    explanation: 'Tertius was Paul’s secretary/amanuensis who wrote down the Epistle to the Romans and added his own greeting in 16:22.',
    hint: 'Paul’s amanuensis who wrote down the Epistle to the Romans.',
    testament: 'New Testament',
    difficulty: 'medium',
    timerSeconds: 30
  },
  {
    level: 8,
    challengeIndex: 2,
    stage: 2,
    stageTitle: 'Mystery of the People',
    levelTitle: 'Forgotten Epistolary Figures',
    riddleType: 'Who Am I?',
    isTyped: false,
    questionText: 'WHO AM I?\nWhen all the believers in the Roman province of Asia turned away from Paul during his second imprisonment in Rome, I was not ashamed of his chains. I searched for him diligently in the imperial capital until I found him in his cold dungeon and frequently refreshed his spirit. Paul prayed that the Lord would grant mercy to my household and that I might find mercy from the Lord on that Day. Who am I?',
    clues: [
      'Contrasted with Phygelus and Hermogenes who deserted Paul.',
      'Faithful resident of Ephesus whose household was repeatedly blessed.',
      'Mentioned in 2 Timothy 1:16–18 and 4:19.'
    ],
    options: ['Onesiphorus', 'Epaphras', 'Tychicus', 'Philemon'],
    correctAnswer: 'Onesiphorus',
    acceptedAlternatives: ['Onesiforos'],
    reference: '2 Timothy 1:16–18; 4:19',
    explanation: 'Onesiphorus searched diligently for Paul in Rome, refreshed him in prison, and was not ashamed of his chains.',
    hint: 'Faithful disciple who searched Rome to refresh imprisoned Paul.',
    testament: 'New Testament',
    difficulty: 'hard',
    timerSeconds: 30
  },
  {
    level: 8,
    challengeIndex: 3,
    stage: 2,
    stageTitle: 'Mystery of the People',
    levelTitle: 'Forgotten Epistolary Figures',
    riddleType: 'The Biblical Relationship Riddle',
    isTyped: false,
    questionText: 'THE BIBLICAL RELATIONSHIP RIDDLE:\nI was a runaway bondservant who robbed my wealthy Christian master in Colossae and fled across the Mediterranean to Rome. There in prison, I encountered the Apostle Paul, who led me to Christ and referred to me as "my child, whom I have begotten in my chains." Paul sent me back to my master carrying a personal letter that pleaded for me to be received no longer as a slave, but as a beloved brother. Who am I?',
    clues: [
      'Name literally means "profitable" or "useful."',
      'Sent back to Philemon accompanied by Tychicus.',
      'Paul wrote: "If he has wronged you or owes anything, charge that to my account."'
    ],
    options: ['Onesimus', 'Trophimus', 'Epaphras', 'Archippus'],
    correctAnswer: 'Onesimus',
    acceptedAlternatives: ['Onesimos'],
    reference: 'Philemon 1:10–19; Colossians 4:9',
    explanation: 'Onesimus was the runaway slave of Philemon who was converted under Paul’s imprisonment and returned as a beloved Christian brother.',
    hint: 'Runaway slave converted by Paul and returned to Philemon.',
    testament: 'New Testament',
    difficulty: 'easy',
    timerSeconds: 30
  },
  {
    level: 8,
    challengeIndex: 4,
    stage: 2,
    stageTitle: 'Mystery of the People',
    levelTitle: 'Forgotten Epistolary Figures',
    riddleType: 'The Three-Clue Riddle',
    isTyped: false,
    questionText: 'THE THREE-CLUE RIDDLE:\nClue 1: I was a native of Colossae who planted churches in the Lycus Valley—Colossae, Laodicea, and Hierapolis.\nClue 2: Paul called me "our beloved fellow servant" and "a faithful minister of Christ on our behalf."\nClue 3: I was sharing Paul’s imprisonment in Rome, always wrestling in prayer that the believers might stand mature and fully assured in all the will of God. Who am I?',
    clues: [
      'Founder and pastor of the church in Colossae.',
      'Brought report of the Colossian church’s love in the Spirit to Paul in Rome.',
      'Mentioned in Colossians 1:7; 4:12–13; Philemon 1:23.'
    ],
    options: ['Epaphras', 'Epaphroditus', 'Archippus', 'Tychicus'],
    correctAnswer: 'Epaphras',
    acceptedAlternatives: ['Epaphras of Colossae'],
    reference: 'Colossians 1:7–8; 4:12–13; Philemon 1:23',
    explanation: 'Epaphras was the evangelist who founded the Colossian church and was imprisoned with Paul in Rome, noted for fervent intercession.',
    hint: 'Founder of the Colossian church who wrestled in prayer for them.',
    testament: 'New Testament',
    difficulty: 'hard',
    timerSeconds: 30
  },
  {
    level: 8,
    challengeIndex: 5,
    stage: 2,
    stageTitle: 'Mystery of the People',
    levelTitle: 'Forgotten Epistolary Figures',
    riddleType: 'Type Two Answers',
    isTyped: true,
    questionText: 'TYPE TWO ANSWERS — MINI-BOSS RIDDLE:\nIn Romans 16:12, the Apostle Paul sends affectionate greetings to two Christian women in the Roman church whose names sound remarkably alike—both derived from a Greek root meaning "delicate" or "luxurious"—and notes that they "work hard in the Lord." What are the names of these two hardworking women?',
    clues: [
      'Mentioned together in Romans 16:12 before Persis the beloved.',
      'Names begin with Try- and sound like twin or sister names.',
      'Greek names: Τρύφαινα and Τρυφῶσα.'
    ],
    options: [
      'Tryphena and Tryphosa',
      'Euodia and Syntyche',
      'Priscilla and Aquila',
      'Martha and Mary'
    ],
    correctAnswer: 'Tryphena and Tryphosa',
    acceptedAlternatives: [
      'Tryphaena and Tryphosa',
      'Tryphena & Tryphosa',
      'Tryphosa and Tryphena',
      'Tryphena, Tryphosa'
    ],
    reference: 'Romans 16:12',
    explanation: 'Paul greets Tryphena and Tryphosa in Romans 16:12, identifying them as women who labored diligently in the Lord.',
    hint: 'Two women with rhyming names greeted together in Romans 16:12.',
    testament: 'New Testament',
    difficulty: 'master',
    timerSeconds: 25
  },

  // Level 9: Unusual Prophets & Ancient Seers
  {
    level: 9,
    challengeIndex: 1,
    stage: 2,
    stageTitle: 'Mystery of the People',
    levelTitle: 'Unusual Prophets & Ancient Seers',
    riddleType: 'Who Am I?',
    isTyped: false,
    questionText: 'WHO AM I?\nI was a prophetess who lived in Jerusalem in the Second Quarter (Mishneh) of the city, wife of Shallum keeper of the royal wardrobe. When King Josiah’s high priest Hilkiah discovered the lost Book of the Law in the temple, the king sent an official delegation not to Jeremiah or Zephaniah, but to me, to inquire of Yahweh concerning the impending wrath against Judah. Who am I?',
    clues: [
      'Wife of Shallum son of Tikvah.',
      'Prophesied disaster upon Jerusalem for its idolatry, but promised Josiah peace for his tender heart.',
      'Consulted by Hilkiah, Shaphan, and the royal officials.'
    ],
    options: ['Huldah', 'Miriam', 'Deborah', 'Anna'],
    correctAnswer: 'Huldah',
    acceptedAlternatives: ['Huldah the prophetess', 'Holda'],
    reference: '2 Kings 22:14–20; 2 Chronicles 34:22–28',
    explanation: 'Huldah was the revered prophetess in Jerusalem consulted by King Josiah’s delegation upon finding the Book of the Law.',
    hint: 'Prophetess consulted by King Josiah when the Book of the Law was found.',
    testament: 'Old Testament',
    difficulty: 'hard',
    timerSeconds: 30
  },
  {
    level: 9,
    challengeIndex: 2,
    stage: 2,
    stageTitle: 'Mystery of the People',
    levelTitle: 'Unusual Prophets & Ancient Seers',
    riddleType: 'The Impossible Description',
    isTyped: false,
    questionText: 'THE IMPOSSIBLE DESCRIPTION:\nI was a non-Israelite diviner from Pethor near the Euphrates River, hired by Balak king of Moab with fees of divination to place an inescapable curse upon the advancing Israelites. Yet three times on mountain heights, as the Spirit of God overtook me, I opened my mouth to curse them, and only sublime poetic blessings poured forth from my lips, concluding with a vision of a Star rising from Jacob and a Scepter out of Israel. Who am I?',
    clues: [
      'Rode a donkey that spoke with a man’s voice to rebuke my madness.',
      'Encountered the Angel of the Lord with a drawn sword in a narrow path between vineyards.',
      'Later counseled the Midianites to seduce Israel with the daughters of Moab at Baal-peor.'
    ],
    options: ['Balaam', 'Balak', 'Jethro', 'Melchizedek'],
    correctAnswer: 'Balaam',
    acceptedAlternatives: ['Balaam son of Beor', 'Bileam'],
    reference: 'Numbers 22:1–24:25; 31:16; 2 Peter 2:15–16',
    explanation: 'Balaam son of Beor was hired by Balak to curse Israel, but God compelled him to pronounce blessings and prophecies of the Messiah.',
    hint: 'Pagan prophet whose donkey rebuked him before he blessed Israel.',
    testament: 'Old Testament',
    difficulty: 'medium',
    timerSeconds: 30
  },
  {
    level: 9,
    challengeIndex: 3,
    stage: 2,
    stageTitle: 'Mystery of the People',
    levelTitle: 'Unusual Prophets & Ancient Seers',
    riddleType: 'Who Am I?',
    isTyped: false,
    questionText: 'WHO AM I?\nI was a prophet of Shiloh who met Jeroboam along the road outside Jerusalem while wearing a brand-new cloak. I grabbed my own garment, tore it into twelve pieces, and told Jeroboam to take ten pieces, symbolizing that God was tearing the kingdom out of the hand of Solomon’s son and giving ten tribes to him. Who am I?',
    clues: [
      'Ahijah the Shilonite.',
      'Later blind in his old age when Jeroboam’s disguised wife came to inquire about their sick child.',
      'Pronounced the doom of the dynasty of Jeroboam.'
    ],
    options: ['Ahijah', 'Shemaiah', 'Iddo', 'Micaiah'],
    correctAnswer: 'Ahijah',
    acceptedAlternatives: ['Ahijah the Shilonite', 'Ahiyah'],
    reference: '1 Kings 11:29–39; 14:1–18',
    explanation: 'Ahijah the Shilonite tore his new garment into twelve pieces and gave ten to Jeroboam to prophesy the division of the kingdom.',
    hint: 'Prophet who tore his new cloak into twelve pieces for Jeroboam.',
    testament: 'Old Testament',
    difficulty: 'hard',
    timerSeconds: 30
  },
  {
    level: 9,
    challengeIndex: 4,
    stage: 2,
    stageTitle: 'Mystery of the People',
    levelTitle: 'Unusual Prophets & Ancient Seers',
    riddleType: 'The Three-Clue Riddle',
    isTyped: false,
    questionText: 'THE THREE-CLUE RIDDLE:\nClue 1: I was a lone prophet of Yahweh summoned before King Ahab of Israel and King Jehoshaphat of Judah before their expedition against Ramoth-gilead.\nClue 2: Four hundred court prophets had predicted absolute triumph, and King Ahab remarked, "I hate him, for he never prophesies good concerning me, but evil."\nClue 3: I revealed a heavenly vision of the Lord seated on His throne, sending a lying spirit into the mouth of Ahab’s prophets, and predicted Ahab would not return alive. Who am I?',
    clues: [
      'Son of Imlah.',
      'Slapped on the cheek by Zedekiah son of Chenaanah.',
      'Imprisoned and fed on meager rations of bread and water until Ahab fell in battle.'
    ],
    options: ['Micaiah', 'Elijah', 'Elisha', 'Hanani'],
    correctAnswer: 'Micaiah',
    acceptedAlternatives: ['Micaiah son of Imlah', 'Michaiah'],
    reference: '1 Kings 22:8–28; 2 Chronicles 18:7–27',
    explanation: 'Micaiah son of Imlah was Ahab’s hated prophet who truthfully foretold Ahab’s death at Ramoth-gilead despite 400 lying prophets.',
    hint: 'Prophet hated by Ahab who saw the heavenly vision of the lying spirit.',
    testament: 'Old Testament',
    difficulty: 'hard',
    timerSeconds: 30
  },
  {
    level: 9,
    challengeIndex: 5,
    stage: 2,
    stageTitle: 'Mystery of the People',
    levelTitle: 'Unusual Prophets & Ancient Seers',
    riddleType: 'Type the Name',
    isTyped: true,
    questionText: 'TYPE THE NAME — MINI-BOSS RIDDLE:\nI was a New Testament Christian prophet from Judea who visited Antioch and accurately predicted by the Holy Spirit that a severe famine would sweep over the entire Greco-Roman world (which occurred during the reign of Claudius Caesar). Years later in Caesarea, I met the Apostle Paul at Philip’s house, took Paul’s belt, bound my own hands and feet, and prophesied that the owner of the belt would be delivered into the hands of the Gentiles in Jerusalem. Who am I?',
    clues: [
      'Prophet from Jerusalem named Agabus.',
      'Famine prophecy in Acts 11:27–28 prompted relief funds from Antioch to Judea.',
      'Enacted a dramatic visual prophecy using Paul’s belt in Acts 21:10–11.'
    ],
    options: ['Agabus', 'Silas', 'Judas Barsabbas', 'Barnabas'],
    correctAnswer: 'Agabus',
    acceptedAlternatives: ['Prophet Agabus'],
    reference: 'Acts 11:27–28; 21:10–11',
    explanation: 'Agabus was the early church prophet who foretold the worldwide famine under Claudius and bound himself with Paul’s belt.',
    hint: 'Prophet who took Paul’s belt and bound his own hands and feet.',
    testament: 'New Testament',
    difficulty: 'hard',
    timerSeconds: 25
  },

  // Level 10: Enigmas of the Gospels & Passion Week
  {
    level: 10,
    challengeIndex: 1,
    stage: 2,
    stageTitle: 'Mystery of the People',
    levelTitle: 'Enigmas of the Gospels & Passion Week',
    riddleType: 'Who Am I?',
    isTyped: false,
    questionText: 'WHO AM I?\nI was a wealthy member of the Jewish Sanhedrin from a town in Judea, an honorable counselor who was secretly a disciple of Jesus for fear of the Jews and had not consented to their counsel and deed. After the crucifixion, I boldly approached Pontius Pilate to request the body of Jesus, wrapped Him in clean linen, and laid Him in my own newly hewn rock tomb where no one had ever been laid. Who am I?',
    clues: [
      'A native of Arimathea.',
      'Fulfilled Isaiah 53:9: "He made his grave with the wicked, and with a rich man in his death."',
      'Joined by Nicodemus bearing seventy-five pounds of myrrh and aloes.'
    ],
    options: ['Joseph of Arimathea', 'Nicodemus', 'Simon of Cyrene', 'Jairus'],
    correctAnswer: 'Joseph of Arimathea',
    acceptedAlternatives: ['Joseph of Arimathea', 'Joseph from Arimathea'],
    reference: 'Matthew 27:57–60; John 19:38–42',
    explanation: 'Joseph of Arimathea, a rich Sanhedrin member and secret disciple, claimed Jesus’ body from Pilate and buried Him in his private garden tomb.',
    hint: 'Wealthy council member who donated his new rock tomb for Jesus.',
    testament: 'New Testament',
    difficulty: 'easy',
    timerSeconds: 30
  },
  {
    level: 10,
    challengeIndex: 2,
    stage: 2,
    stageTitle: 'Mystery of the People',
    levelTitle: 'Enigmas of the Gospels & Passion Week',
    riddleType: 'Who Am I?',
    isTyped: false,
    questionText: 'WHO AM I?\nI was a traveler from North Africa coming in from the country outside Jerusalem on the day of Passover when Roman soldiers conscripted me by force to carry the crossbeam of Jesus behind Him along the Via Dolorosa to Golgotha. Mark’s Gospel identifies me as the father of two early church believers, Alexander and Rufus. Who am I?',
    clues: [
      'A native of Cyrene in modern Libya.',
      'Compelled (Greek: aggareuo) by Roman soldiers to carry Jesus’ cross.',
      'Sons Alexander and Rufus were well known in the early church.'
    ],
    options: ['Simon of Cyrene', 'Lucius of Cyrene', 'Simon the Zealot', 'Cleopas'],
    correctAnswer: 'Simon of Cyrene',
    acceptedAlternatives: ['Simon the Cyrenian', 'Simon of Cyrene'],
    reference: 'Matthew 27:32; Mark 15:21; Luke 23:26',
    explanation: 'Simon of Cyrene was compelled by Roman soldiers to carry Jesus’ cross on the way to Golgotha.',
    hint: 'Man from Cyrene compelled by Roman soldiers to carry Jesus’ cross.',
    testament: 'New Testament',
    difficulty: 'easy',
    timerSeconds: 30
  },
  {
    level: 10,
    challengeIndex: 3,
    stage: 2,
    stageTitle: 'Mystery of the People',
    levelTitle: 'Enigmas of the Gospels & Passion Week',
    riddleType: 'The Event Riddle',
    isTyped: false,
    questionText: 'THE EVENT RIDDLE:\nIn the Garden of Gethsemane on the night of Jesus’ betrayal, an unnamed young man was following Jesus wearing nothing but a linen cloth over his naked body. When the arresting officers seized him, he slipped out of the linen cloth and fled into the dark night completely naked. Which Gospel is the ONLY one to record this unusual incident?',
    clues: [
      'Traditionally thought to be an autobiographical signature of the author.',
      'Recorded immediately after all the disciples deserted Jesus and fled.',
      'Appears in chapter 14, verses 51–52.'
    ],
    options: ['Gospel of Mark', 'Gospel of Matthew', 'Gospel of Luke', 'Gospel of John'],
    correctAnswer: 'Gospel of Mark',
    acceptedAlternatives: ['Mark', 'Gospel according to Mark'],
    reference: 'Mark 14:51–52',
    explanation: 'The young man who fled naked leaving his linen cloth in Gethsemane is recorded solely in Mark 14:51–52.',
    hint: 'Second Gospel; shortest Gospel.',
    testament: 'New Testament',
    difficulty: 'medium',
    timerSeconds: 30
  },
  {
    level: 10,
    challengeIndex: 4,
    stage: 2,
    stageTitle: 'Mystery of the People',
    levelTitle: 'Enigmas of the Gospels & Passion Week',
    riddleType: 'The Three-Clue Riddle',
    isTyped: false,
    questionText: 'THE THREE-CLUE RIDDLE:\nClue 1: I was the personal servant of the high priest Caiaphas who went with the cohort to arrest Jesus in Gethsemane.\nClue 2: In the confusion of the arrest, Simon Peter drew a sword and struck me, cutting off my right ear completely.\nClue 3: Jesus rebuked Peter, touched my bleeding ear, and healed me on the spot—the very last healing miracle Jesus performed before His crucifixion. Who am I?',
    clues: [
      'Named specifically only in the Gospel of John (18:10).',
      'Healing is recorded specifically only in the Gospel of Luke (22:51).',
      'Relative of mine later questioned Peter in the high priest’s courtyard.'
    ],
    options: ['Malchus', 'Barabbas', 'Alexander', 'Demetrius'],
    correctAnswer: 'Malchus',
    acceptedAlternatives: ['Malchos'],
    reference: 'John 18:10–11; Luke 22:50–51',
    explanation: 'Malchus was the servant of Caiaphas whose severed right ear was healed by Jesus in the Garden of Gethsemane.',
    hint: 'High priest’s servant whose severed ear Jesus healed in Gethsemane.',
    testament: 'New Testament',
    difficulty: 'medium',
    timerSeconds: 30
  },
  {
    level: 10,
    challengeIndex: 5,
    stage: 2,
    stageTitle: 'Mystery of the People',
    levelTitle: 'Enigmas of the Gospels & Passion Week',
    riddleType: 'Type the Name',
    isTyped: true,
    questionText: 'TYPE THE NAME — MINI-BOSS RIDDLE:\nOn the afternoon of the resurrection, two disciples were walking from Jerusalem to a village about seven miles away named Emmaus, mourning the crucifixion. A resurrected stranger drew near and walked with them, rebuking them for being slow of heart to believe all that the prophets had spoken, and expounded to them in all the Scriptures the things concerning Himself. While one disciple remains anonymous, what is the specific name of the other disciple recorded in Luke 24:18?',
    clues: [
      'Asked Jesus: "Are you the only visitor to Jerusalem who does not know the things that have happened there in these days?"',
      'Eyes were opened when Jesus broke the bread at the dinner table.',
      'Hastened back to Jerusalem that same night to report to the eleven.'
    ],
    options: ['Cleopas', 'Clopas', 'Barnabas', 'Nathanael'],
    correctAnswer: 'Cleopas',
    acceptedAlternatives: ['Cleophas'],
    reference: 'Luke 24:13–35',
    explanation: 'Cleopas was named in Luke 24:18 as one of the two Emmaus disciples whose eyes were opened at the breaking of bread.',
    hint: 'One of the two disciples on the road to Emmaus whose name is recorded in Luke 24.',
    testament: 'New Testament',
    difficulty: 'hard',
    timerSeconds: 25
  }
];

fs.writeFileSync(
  path.join(process.cwd(), 'scripts', 'riddlesStages1to2.ts'),
  `// Bible Riddles — Stages 1 & 2 (Levels 1–10, 50 Riddles)
import type { RawRiddleQuestion } from './riddlesStages1to2';

export interface RawRiddleQuestion {
  level: number;
  challengeIndex: number;
  stage: number;
  stageTitle: string;
  levelTitle: string;
  riddleType: string;
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

export const RIDDLES_STAGES_1_TO_2: RawRiddleQuestion[] = ${JSON.stringify(
    batch1Questions,
    null,
    2
  )};
`
);

console.log(`Generated ${batch1Questions.length} riddles for Stages 1–2 (Batch 1).`);
