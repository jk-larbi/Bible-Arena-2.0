// Bible Puzzles — Stages 1–3 (Levels 1–15, 75 Questions)
// Verified biblical brain teasers and multi-step deduction puzzles across diverse mechanics.

export interface RawBiblePuzzle {
  level: number;
  challengeIndex: number;
  stage: number;
  stageTitle: string;
  levelTitle: string;
  puzzleType: string;
  questionText: string;
  clues?: string[];
  options: string[];
  correctAnswer: string;
  reference: string;
  explanation: string;
  hint: string;
  difficulty: string;
  timerSeconds: number;
}

export const PUZZLES_STAGES_1_TO_3: RawBiblePuzzle[] = [
  {
    "level": 1,
    "challengeIndex": 1,
    "stage": 1,
    "stageTitle": "Puzzle Foundations",
    "levelTitle": "Odd One Out Foundations",
    "puzzleType": "Odd One Out",
    "questionText": "ODD ONE OUT:\nWhich of these four individuals does NOT belong with the other three regarding their family relation?",
    "clues": [
      "Three of these individuals were full biological siblings.",
      "Their parents were Amram and Jochebed of the tribe of Levi.",
      "One of these men was from the tribe of Ephraim and served as Moses' minister."
    ],
    "options": [
      "Aaron",
      "Miriam",
      "Moses",
      "Joshua"
    ],
    "correctAnswer": "Joshua",
    "reference": "Exodus 6:20; Numbers 26:59; Exodus 33:11",
    "explanation": "Aaron, Miriam, and Moses were children of Amram and Jochebed (siblings). Joshua was the son of Nun from the tribe of Ephraim.",
    "hint": "Look for the one who was Moses' faithful general rather than his sibling.",
    "difficulty": "Accessible",
    "timerSeconds": 30
  },
  {
    "level": 1,
    "challengeIndex": 2,
    "stage": 1,
    "stageTitle": "Puzzle Foundations",
    "levelTitle": "Odd One Out Foundations",
    "puzzleType": "Odd One Out",
    "questionText": "ODD ONE OUT:\nWhich of these biblical items does NOT belong with the others inside the Ark of the Covenant?",
    "clues": [
      "The Ark of the Covenant contained sacred memorials kept before God.",
      "Hebrews 9:4 lists three specific items within the holiest of all.",
      "One of these items was worn on the high priest's forehead, not placed in the Ark."
    ],
    "options": [
      "Golden pot that had manna",
      "Aaron's rod that budded",
      "Tables of the covenant",
      "Golden plate engraved HOLINESS TO THE LORD"
    ],
    "correctAnswer": "Golden plate engraved HOLINESS TO THE LORD",
    "reference": "Exodus 28:36; Hebrews 9:4",
    "explanation": "Hebrews 9:4 explicitly states the Ark contained the golden pot of manna, Aaron's rod that budded, and the tables of the covenant. The golden plate was worn upon Aaron's mitre.",
    "hint": "Check Hebrews 9:4 for the three specific holy items preserved within the Ark.",
    "difficulty": "Accessible",
    "timerSeconds": 30
  },
  {
    "level": 1,
    "challengeIndex": 3,
    "stage": 1,
    "stageTitle": "Puzzle Foundations",
    "levelTitle": "Odd One Out Foundations",
    "puzzleType": "Odd One Out",
    "questionText": "ODD ONE OUT:\nWhich of these disciples was NOT among the inner three present at both the Transfiguration and the raising of Jairus' daughter?",
    "clues": [
      "Jesus permitted only three disciples to witness His greatest private miracles.",
      "Two were sons of thunder (Zebedee's sons).",
      "One was Peter's brother who originally brought Peter to Jesus."
    ],
    "options": [
      "Peter",
      "James",
      "John",
      "Andrew"
    ],
    "correctAnswer": "Andrew",
    "reference": "Mark 5:37; 9:2; Matthew 17:1",
    "explanation": "Peter, James, and John were the exclusive inner three chosen for the Transfiguration, Jairus' daughter, and Gethsemane agony. Andrew was Simon Peter's brother but was not part of this inner circle.",
    "hint": "Identify Simon Peter's brother who introduced him to Jesus.",
    "difficulty": "Accessible",
    "timerSeconds": 30
  },
  {
    "level": 1,
    "challengeIndex": 4,
    "stage": 1,
    "stageTitle": "Puzzle Foundations",
    "levelTitle": "Odd One Out Foundations",
    "puzzleType": "Odd One Out",
    "questionText": "ODD ONE OUT:\nWhich of these sons of Jacob was NOT born to Leah?",
    "clues": [
      "Leah was Jacob's first wife and bore him six sons and one daughter.",
      "Her maidservant was Zilpah who bore two sons.",
      "Rachel had a maidservant named Bilhah who bore Dan and Naphtali."
    ],
    "options": [
      "Reuben",
      "Simeon",
      "Dan",
      "Judah"
    ],
    "correctAnswer": "Dan",
    "reference": "Genesis 29:32–35; 30:4–6",
    "explanation": "Reuben, Simeon, Levi, and Judah were Leah's first four sons. Dan was born to Bilhah, Rachel's handmaid.",
    "hint": "Rachel named this child saying, \"God hath judged me.\"",
    "difficulty": "Accessible",
    "timerSeconds": 30
  },
  {
    "level": 1,
    "challengeIndex": 5,
    "stage": 1,
    "stageTitle": "Puzzle Foundations",
    "levelTitle": "Odd One Out Foundations",
    "puzzleType": "Odd One Out",
    "questionText": "ODD ONE OUT:\nWhich of these four New Testament epistles is NOT classified as a Prison Epistle written during Paul's first Roman imprisonment?",
    "clues": [
      "Paul wrote four letters while bound in Roman chains sent with Tychicus and Onesimus.",
      "Three were addressed to churches in Ephesus, Philippi, and Colossae.",
      "One epistle was written earlier from Corinth during his third missionary journey."
    ],
    "options": [
      "Ephesians",
      "Philippians",
      "Colossians",
      "Romans"
    ],
    "correctAnswer": "Romans",
    "reference": "Romans 15:25–26; Ephesians 3:1; Philippians 1:13",
    "explanation": "Ephesians, Philippians, Colossians, and Philemon are the four Prison Epistles written from Rome. Romans was written earlier from Corinth on Paul's third journey.",
    "hint": "Identify the letter Paul sent to a church he had not yet visited.",
    "difficulty": "Moderate",
    "timerSeconds": 25
  },
  {
    "level": 2,
    "challengeIndex": 1,
    "stage": 1,
    "stageTitle": "Puzzle Foundations",
    "levelTitle": "Hidden Connections",
    "puzzleType": "Find the Hidden Connection",
    "questionText": "FIND THE HIDDEN CONNECTION:\nWhat specific biblical truth unites Shiphrah and Puah?",
    "clues": [
      "They lived in Egypt during the oppression before the birth of Moses.",
      "Pharaoh gave them a direct royal command regarding newborn Hebrew infants.",
      "They feared God above the king of Egypt and God dealt well with them."
    ],
    "options": [
      "They were the Hebrew midwives who saved baby boys from Pharaoh",
      "They were the two daughters of Aaron who ministered in the tabernacle",
      "They were the prophetesses who sang at the crossing of the Red Sea",
      "They were the two spies sent by Joshua into the city of Jericho"
    ],
    "correctAnswer": "They were the Hebrew midwives who saved baby boys from Pharaoh",
    "reference": "Exodus 1:15–21",
    "explanation": "Shiphrah and Puah were the faithful Hebrew midwives who feared God and refused Pharaoh's murderous decree to kill male infants, for which God made them households.",
    "hint": "Their courageous civil disobedience preserved the Hebrew baby boys in Egypt.",
    "difficulty": "Accessible",
    "timerSeconds": 30
  },
  {
    "level": 2,
    "challengeIndex": 2,
    "stage": 1,
    "stageTitle": "Puzzle Foundations",
    "levelTitle": "Hidden Connections",
    "puzzleType": "Find the Hidden Connection",
    "questionText": "FIND THE HIDDEN CONNECTION:\nWhat unique miracle connects Elijah at Cherith, Samson at Lehi, and Jesus in the wilderness?",
    "clues": [
      "All three were in desperate, desolate conditions without natural sustenance.",
      "God sent supernatural physical nourishment or hydration directly to sustain life.",
      "One involved ravens, one a jawbone hollow, and one angelic ministering spirits."
    ],
    "options": [
      "Supernatural provision of food or water in solitary wilderness desolation",
      "Parting the waters of the Jordan River with a mantle",
      "Calling down consuming fire from heaven upon their adversaries",
      "Raising an only child from the dead through earnest prayer"
    ],
    "correctAnswer": "Supernatural provision of food or water in solitary wilderness desolation",
    "reference": "1 Kings 17:6; Judges 15:19; Matthew 4:11",
    "explanation": "In all three cases, God miraculously sustained His servant with nourishment in extreme wilderness isolation: Elijah by ravens, Samson by water from En-hakkore, and Jesus by angels.",
    "hint": "Focus on how their physical bodies were miraculously sustained when isolated.",
    "difficulty": "Moderate",
    "timerSeconds": 30
  },
  {
    "level": 2,
    "challengeIndex": 3,
    "stage": 1,
    "stageTitle": "Puzzle Foundations",
    "levelTitle": "Hidden Connections",
    "puzzleType": "Find the Hidden Connection",
    "questionText": "FIND THE HIDDEN CONNECTION:\nWhat links Melchizedek, Moses, and Elijah in relation to Mount Sinai / Horeb?",
    "clues": [
      "Think about their encounters with God and the sacred locations of Scripture.",
      "Examine who actually traveled to Mount Sinai (Horeb) in the Bible."
    ],
    "options": [
      "Moses and Elijah spent forty days on Horeb, while Melchizedek never visited it",
      "All three received the written stone tablets of the Ten Commandments on Horeb",
      "All three were priests of the order of Levi officiating before the Ark",
      "All three were fed by ravens on the peak of the mountain"
    ],
    "correctAnswer": "Moses and Elijah spent forty days on Horeb, while Melchizedek never visited it",
    "reference": "Exodus 24:18; 1 Kings 19:8; Genesis 14:18",
    "explanation": "Moses (Exodus 24) and Elijah (1 Kings 19) are the two Old Testament figures who fasted forty days and encountered God at Mount Horeb/Sinai. Melchizedek was king of Salem (Jerusalem) with no record of visiting Sinai.",
    "hint": "Consider the parallel 40-day fasts on the holy mountain in Exodus and 1 Kings.",
    "difficulty": "Moderate",
    "timerSeconds": 30
  },
  {
    "level": 2,
    "challengeIndex": 4,
    "stage": 1,
    "stageTitle": "Puzzle Foundations",
    "levelTitle": "Hidden Connections",
    "puzzleType": "Find the Hidden Connection",
    "questionText": "FIND THE HIDDEN CONNECTION:\nWhat profound link connects Rahab of Jericho and Ruth the Moabitess in Matthew 1?",
    "clues": [
      "Both were Gentile women who exercised faith in the God of Israel.",
      "Both abandoned their pagan backgrounds to join God's covenant people.",
      "Both are explicitly named in the genealogy of Jesus Christ."
    ],
    "options": [
      "Both are Gentile women named in the royal genealogy of Jesus Christ",
      "Both were prophetesses who judged Israel during foreign oppression",
      "Both lived in Bethlehem at the exact same historical time under Boaz",
      "Both hid Israelite spies under the roof of their homes"
    ],
    "correctAnswer": "Both are Gentile women named in the royal genealogy of Jesus Christ",
    "reference": "Matthew 1:5; Ruth 4:21–22",
    "explanation": "Matthew 1:5 records: \"Salmon begat Booz of Rachab; and Booz begat Obed of Ruth.\" Both were foreign Gentile women included in the royal line of the Messiah.",
    "hint": "Look at the opening chapter of the New Testament.",
    "difficulty": "Moderate",
    "timerSeconds": 30
  },
  {
    "level": 2,
    "challengeIndex": 5,
    "stage": 1,
    "stageTitle": "Puzzle Foundations",
    "levelTitle": "Hidden Connections",
    "puzzleType": "Find the Hidden Connection",
    "questionText": "FIND THE HIDDEN CONNECTION:\nWhat connects the deaths of Abimelech (Judges 9) and Sisera (Judges 4)?",
    "clues": [
      "Both were proud military rulers or tyrants who fought against Israel.",
      "Both met an unexpected and shameful death on the battlefield.",
      "Both were struck dead by the hands of a woman."
    ],
    "options": [
      "Both were killed through the decisive actions of a woman",
      "Both fell in battle upon their own swords like King Saul",
      "Both were eaten of worms after failing to give God glory",
      "Both were struck down by lightning from heaven at Megiddo"
    ],
    "correctAnswer": "Both were killed through the decisive actions of a woman",
    "reference": "Judges 4:21; 9:53–54",
    "explanation": "Sisera was killed by Jael driving a tent pin into his temple (Judges 4:21). Abimelech's skull was crushed by a woman dropping an upper millstone from the tower of Thebez (Judges 9:53).",
    "hint": "Abimelech begged his armor-bearer to slay him \"that men say not of me, A woman slew him.\"",
    "difficulty": "Difficult",
    "timerSeconds": 25
  },
  {
    "level": 3,
    "challengeIndex": 1,
    "stage": 1,
    "stageTitle": "Puzzle Foundations",
    "levelTitle": "Who or What Is Missing?",
    "puzzleType": "Who or What Is Missing?",
    "questionText": "WHO IS MISSING?\nIn the lineage of the three great Hebrew Patriarchs:\nAbraham → Isaac → ? → The Twelve Tribes",
    "clues": [
      "He was the younger twin born holding his brother's heel.",
      "His name was changed to Israel after wrestling with God at Peniel.",
      "His twelve sons became the patriarchs of the twelve tribes of Israel."
    ],
    "options": [
      "Esau",
      "Jacob",
      "Joseph",
      "Moses"
    ],
    "correctAnswer": "Jacob",
    "reference": "Genesis 28:13–14; 32:28; 35:22–26",
    "explanation": "The three foundational patriarchs of Israel are Abraham, Isaac, and Jacob (whose name was changed to Israel, father of the twelve tribes).",
    "hint": "His twelve sons formed the foundation of the tribes of Israel.",
    "difficulty": "Accessible",
    "timerSeconds": 30
  },
  {
    "level": 3,
    "challengeIndex": 2,
    "stage": 1,
    "stageTitle": "Puzzle Foundations",
    "levelTitle": "Who or What Is Missing?",
    "puzzleType": "Who or What Is Missing?",
    "questionText": "WHAT IS MISSING?\nIn 1 Corinthians 13:13: \"And now abideth faith, ____, charity, these three; but the greatest of these is charity.\"",
    "clues": [
      "It is one of the three enduring theological virtues.",
      "Romans 8:24 says it is an anchor of the soul: \"For we are saved by ____.\"",
      "It completes the triad: Faith, ____, and Love."
    ],
    "options": [
      "Peace",
      "Grace",
      "Hope",
      "Joy"
    ],
    "correctAnswer": "Hope",
    "reference": "1 Corinthians 13:13",
    "explanation": "Paul crowns 1 Corinthians 13 with: \"And now abideth faith, hope, charity, these three; but the greatest of these is charity.\"",
    "hint": "It is the confident expectation of God's promises.",
    "difficulty": "Accessible",
    "timerSeconds": 30
  },
  {
    "level": 3,
    "challengeIndex": 3,
    "stage": 1,
    "stageTitle": "Puzzle Foundations",
    "levelTitle": "Who or What Is Missing?",
    "puzzleType": "Who or What Is Missing?",
    "questionText": "WHO IS MISSING?\nFour young Hebrews trained in the palace of Nebuchadnezzar in Babylon:\nDaniel, Hananiah, Mishael, and ?",
    "clues": [
      "He was given the Babylonian name Abed-nego.",
      "Together with Shadrach and Meshach, he stood firm against the golden image.",
      "He was cast into the burning fiery furnace and delivered by God."
    ],
    "options": [
      "Azariah",
      "Shealtiel",
      "Zerubbabel",
      "Mordecai"
    ],
    "correctAnswer": "Azariah",
    "reference": "Daniel 1:6–7; 3:12–26",
    "explanation": "Daniel 1:6 lists the four youths of Judah: Daniel, Hananiah, Mishael, and Azariah (who were given the Chaldean names Belteshazzar, Shadrach, Meshach, and Abed-nego).",
    "hint": "His Hebrew name means \"The LORD has helped\"; renamed Abed-nego.",
    "difficulty": "Moderate",
    "timerSeconds": 30
  },
  {
    "level": 3,
    "challengeIndex": 4,
    "stage": 1,
    "stageTitle": "Puzzle Foundations",
    "levelTitle": "Who or What Is Missing?",
    "puzzleType": "Who or What Is Missing?",
    "questionText": "WHAT IS MISSING?\nIn the Armor of God in Ephesians 6:\nGirdle of Truth, Breastplate of Righteousness, Gospel Shoes, Shield of Faith, Helmet of Salvation, and ?",
    "clues": [
      "It is the only offensive weapon explicitly named in the whole armor of God.",
      "Paul describes it as \"the sword of the Spirit, which is the ____.\"",
      "Hebrews 4:12 describes it as quick, powerful, and sharper than any two-edged blade."
    ],
    "options": [
      "Spear of Victory",
      "Sword of the Spirit",
      "Bow of Promise",
      "Chariot of Fire"
    ],
    "correctAnswer": "Sword of the Spirit",
    "reference": "Ephesians 6:14–17; Hebrews 4:12",
    "explanation": "Ephesians 6:17 concludes the armor with: \"And take the helmet of salvation, and the sword of the Spirit, which is the word of God.\"",
    "hint": "It is \"the word of God\" operating as the blade of the Holy Ghost.",
    "difficulty": "Moderate",
    "timerSeconds": 30
  },
  {
    "level": 3,
    "challengeIndex": 5,
    "stage": 1,
    "stageTitle": "Puzzle Foundations",
    "levelTitle": "Who or What Is Missing?",
    "puzzleType": "Who or What Is Missing?",
    "questionText": "WHO IS MISSING?\nThe first four kings of the united monarchy of Israel in chronological order:\nSaul → David → Solomon → ?",
    "clues": [
      "He was Solomon's son by Naamah the Ammonitess.",
      "His harsh answer to the elders caused the ten northern tribes to rebel.",
      "He ruled over the southern kingdom of Judah while Jeroboam ruled Israel."
    ],
    "options": [
      "Jeroboam",
      "Rehoboam",
      "Asa",
      "Jehoshaphat"
    ],
    "correctAnswer": "Rehoboam",
    "reference": "1 Kings 11:43; 12:1–17",
    "explanation": "Saul, David, and Solomon each ruled forty years over all twelve tribes. Solomon was succeeded by his son Rehoboam, during whose reign the kingdom permanently fractured.",
    "hint": "He rejected the old men's counsel and told Israel he would chastise them with scorpions.",
    "difficulty": "Moderate",
    "timerSeconds": 25
  },
  {
    "level": 4,
    "challengeIndex": 1,
    "stage": 1,
    "stageTitle": "Puzzle Foundations",
    "levelTitle": "Spot the Mistake",
    "puzzleType": "Spot the Biblical Mistake",
    "questionText": "SPOT THE BIBLICAL MISTAKE:\n\"David ran toward Goliath, drew his sharp sword from his sheath, and struck the giant down with a fatal sword stroke to the heart.\"",
    "clues": [
      "Read 1 Samuel 17:49–51 carefully.",
      "Examine how David actually struck Goliath in the forehead.",
      "Note when David actually drew a sword."
    ],
    "options": [
      "David struck Goliath with a sling and a stone; he only drew Goliath's own sword afterward to behead him",
      "David never touched a sword; Goliath died entirely from the impact of the stone",
      "David used Jonathan's royal bronze sword, not his own sheath",
      "David shot Goliath from a distance with five smooth arrows from his bow"
    ],
    "correctAnswer": "David struck Goliath with a sling and a stone; he only drew Goliath's own sword afterward to behead him",
    "reference": "1 Samuel 17:49–51",
    "explanation": "1 Samuel 17:50 explicitly notes: \"there was no sword in the hand of David.\" David struck the giant with a sling and a stone, and only after Goliath fell did David draw Goliath's own sword from its sheath to slay him and cut off his head.",
    "hint": "Look closely at the weapon in David's hand when Goliath fell to the earth.",
    "difficulty": "Accessible",
    "timerSeconds": 30
  },
  {
    "level": 4,
    "challengeIndex": 2,
    "stage": 1,
    "stageTitle": "Puzzle Foundations",
    "levelTitle": "Spot the Mistake",
    "puzzleType": "Spot the Biblical Mistake",
    "questionText": "SPOT THE BIBLICAL MISTAKE:\n\"Three kings visited the newborn baby Jesus while He was lying in the manger in the stable at Bethlehem.\"",
    "clues": [
      "Read Matthew 2:1–11 and Luke 2:7–16.",
      "Notice whether Matthew calls them \"kings\" or gives a number.",
      "Notice where the wise men actually found the young child."
    ],
    "options": [
      "Scripture calls them Wise Men (Magi), does not specify their number as three, and they found Jesus in a house",
      "The visitors were Roman centurions, not eastern travelers",
      "Jesus was born in Nazareth, not Bethlehem of Judea",
      "The gifts were copper, silver, and precious stones, not gold and frankincense"
    ],
    "correctAnswer": "Scripture calls them Wise Men (Magi), does not specify their number as three, and they found Jesus in a house",
    "reference": "Matthew 2:1, 11",
    "explanation": "Matthew 2 calls them \"wise men from the east\" (not kings) and never specifies their number (tradition assumed three from the three gifts). Furthermore, Matthew 2:11 states: \"when they were come into the house, they saw the young child.\"",
    "hint": "Popular Christmas tradition adds numbers and royal titles not found in Matthew 2.",
    "difficulty": "Moderate",
    "timerSeconds": 30
  },
  {
    "level": 4,
    "challengeIndex": 3,
    "stage": 1,
    "stageTitle": "Puzzle Foundations",
    "levelTitle": "Spot the Mistake",
    "puzzleType": "Spot the Biblical Mistake",
    "questionText": "SPOT THE BIBLICAL MISTAKE:\n\"In the Garden of Eden, the serpent tempted Eve with an apple, telling her that eating it would make her like God.\"",
    "clues": [
      "Read Genesis 3:1–6 carefully.",
      "Look at the botanical description of the forbidden food in Genesis."
    ],
    "options": [
      "The Bible never names the fruit as an apple, describing it only as the \"fruit of the tree\"",
      "The serpent spoke directly to Adam first, not to Eve",
      "The forbidden tree was called the Tree of Life, not the Tree of Knowledge",
      "Eve refused the fruit and only Adam tasted of the food"
    ],
    "correctAnswer": "The Bible never names the fruit as an apple, describing it only as the \"fruit of the tree\"",
    "reference": "Genesis 2:17; 3:3, 6",
    "explanation": "Genesis nowhere mentions an apple. The text speaks only of the \"fruit of the tree of the knowledge of good and evil.\" The popular \"apple\" tradition arose from the Latin word malum (meaning both \"evil\" and \"apple\").",
    "hint": "Check the exact wording of Genesis 3:6: \"the fruit thereof.\"",
    "difficulty": "Moderate",
    "timerSeconds": 30
  },
  {
    "level": 4,
    "challengeIndex": 4,
    "stage": 1,
    "stageTitle": "Puzzle Foundations",
    "levelTitle": "Spot the Mistake",
    "puzzleType": "Spot the Biblical Mistake",
    "questionText": "SPOT THE BIBLICAL MISTAKE:\n\"Jonah was swallowed by a massive white whale that kept him in its belly for three days and three nights.\"",
    "clues": [
      "Read Jonah 1:17 and Matthew 12:40.",
      "Examine how the original Hebrew text in Jonah identifies the sea creature."
    ],
    "options": [
      "The Hebrew text of Jonah 1:17 states the LORD prepared a \"great fish,\" not specifically a whale",
      "Jonah spent forty days inside the creature, not three days and three nights",
      "Jonah died immediately and was only brought to life on the shore",
      "Jonah was thrown into the Red Sea, not the Mediterranean Sea"
    ],
    "correctAnswer": "The Hebrew text of Jonah 1:17 states the LORD prepared a \"great fish,\" not specifically a whale",
    "reference": "Jonah 1:17; Matthew 12:40",
    "explanation": "Jonah 1:17 states: \"Now the LORD had prepared a great fish (dag gadol) to swallow up Jonah.\" While Jesus used the Greek ketos in Matthew 12:40, the Old Testament narrative specifies a specially prepared great fish.",
    "hint": "Examine the exact translation of Jonah 1:17 in the Hebrew scriptures.",
    "difficulty": "Moderate",
    "timerSeconds": 30
  },
  {
    "level": 4,
    "challengeIndex": 5,
    "stage": 1,
    "stageTitle": "Puzzle Foundations",
    "levelTitle": "Spot the Mistake",
    "puzzleType": "Spot the Biblical Mistake",
    "questionText": "SPOT THE BIBLICAL MISTAKE:\n\"Delilah personally shaved off the seven locks of Samson's hair with a razor while he slept upon her knees.\"",
    "clues": [
      "Read Judges 16:19 very carefully.",
      "Check who actually handled the razor to cut Samson's hair."
    ],
    "options": [
      "Delilah called for a man, and she caused him to shave off the seven locks of Samson's head",
      "Samson cut his own hair after Delilah bound him with green withs",
      "The Philistine lords cut Samson's hair with golden shears in Gaza",
      "Samson had only three locks of hair, not seven"
    ],
    "correctAnswer": "Delilah called for a man, and she caused him to shave off the seven locks of Samson's head",
    "reference": "Judges 16:19",
    "explanation": "Judges 16:19 states: \"And she made him sleep upon her knees; and she called for a man, and she caused him to shave off the seven locks of his head.\" Delilah did not shave him herself; an unnamed accomplice did.",
    "hint": "Judges 16:19 explicitly mentions another person called into the room.",
    "difficulty": "Difficult",
    "timerSeconds": 25
  },
  {
    "level": 5,
    "challengeIndex": 1,
    "stage": 1,
    "stageTitle": "Puzzle Foundations",
    "levelTitle": "Bible Detective",
    "puzzleType": "The Bible Detective",
    "questionText": "BIBLE DETECTIVE:\nUncover the identity of this Old Testament deliverer from these clues:\n1. I was an Ethiopian court official in Jerusalem.\n2. I spoke to King Zedekiah at the gate of Benjamin.\n3. I used old cast clouts and rotten rags to lift a prophet out of a muddy pit.\n4. God promised to protect my life because I trusted in Him.",
    "clues": [
      "I was a eunuch in the king's house.",
      "I rescued prophet Jeremiah from the dungeon of Malchiah.",
      "Jeremiah 39:18 contains God's special promise of preservation for me."
    ],
    "options": [
      "Ebed-Melech",
      "Baruch",
      "Gedaliah",
      "Pashur"
    ],
    "correctAnswer": "Ebed-Melech",
    "reference": "Jeremiah 38:7–13; 39:15–18",
    "explanation": "Ebed-Melech the Ethiopian eunuch boldly appealed to King Zedekiah and used ropes with soft rags under Jeremiah's armpits to draw him up out of the muddy cistern. God promised to preserve his life because he trusted in Him.",
    "hint": "His name literally means \"servant of the king\" in Hebrew.",
    "difficulty": "Accessible",
    "timerSeconds": 30
  },
  {
    "level": 5,
    "challengeIndex": 2,
    "stage": 1,
    "stageTitle": "Puzzle Foundations",
    "levelTitle": "Bible Detective",
    "puzzleType": "The Bible Detective",
    "questionText": "BIBLE DETECTIVE:\nUncover the identity of this New Testament minister from these clues:\n1. I was from Colossae and a faithful minister of Christ on their behalf.\n2. Paul calls me a \"fellowprisoner\" in Philemon.\n3. In Colossians 4:12, Paul says I always labor fervently for you in prayers.\n4. I first declared the Gospel of grace to the believers in the Lycus Valley.",
    "clues": [
      "I was the founder of the church at Colossae.",
      "Paul praises my wrestling prayer life in Colossians 4.",
      "My name begins with the letter E."
    ],
    "options": [
      "Epaphras",
      "Epaphroditus",
      "Eutychus",
      "Erastus"
    ],
    "correctAnswer": "Epaphras",
    "reference": "Colossians 1:7; 4:12; Philemon 1:23",
    "explanation": "Epaphras brought the Gospel to Colossae and was praised by Paul as a faithful minister who always labored fervently in prayer for the Colossian believers. (Not to be confused with Epaphroditus of Philippi).",
    "hint": "Colossians 4:12: \"one of you, a servant of Christ, saluteth you, always labouring fervently for you in prayers.\"",
    "difficulty": "Moderate",
    "timerSeconds": 30
  },
  {
    "level": 5,
    "challengeIndex": 3,
    "stage": 1,
    "stageTitle": "Puzzle Foundations",
    "levelTitle": "Bible Detective",
    "puzzleType": "The Bible Detective",
    "questionText": "BIBLE DETECTIVE:\nUncover the identity of this courageous Old Testament artisan:\n1. I was the grandson of Hur of the tribe of Judah.\n2. God called me by name and filled me with the Spirit of God.\n3. I was granted divine wisdom and understanding in all manner of workmanship.\n4. I fashioned the Ark of the Covenant, the golden table, and the candlestick.",
    "clues": [
      "My companion was Aholiab of the tribe of Dan.",
      "Exodus 31:2–5 introduces my divine commission.",
      "I was the master craftsman of the wilderness Tabernacle."
    ],
    "options": [
      "Bezalel",
      "Hiram of Tyre",
      "Adoniram",
      "Jubal"
    ],
    "correctAnswer": "Bezalel",
    "reference": "Exodus 31:2–5; 37:1",
    "explanation": "Bezalel son of Uri, grandson of Hur, was filled with the Spirit of God to devise cunning works in gold, silver, brass, cutting of stones, and carving of timber for the Tabernacle.",
    "hint": "Exodus 31:2: \"See, I have called by name Bezalel the son of Uri.\"",
    "difficulty": "Moderate",
    "timerSeconds": 30
  },
  {
    "level": 5,
    "challengeIndex": 4,
    "stage": 1,
    "stageTitle": "Puzzle Foundations",
    "levelTitle": "Bible Detective",
    "puzzleType": "The Bible Detective",
    "questionText": "BIBLE DETECTIVE:\nUncover the identity of this faithful New Testament co-worker:\n1. I was a Christian believer from Ephesus.\n2. When Paul was imprisoned in chains in Rome, I sought him out diligently and found him.\n3. Paul writes that I \"oft refreshed me, and was not ashamed of my chain.\"\n4. Paul prayed that the Lord would grant mercy unto my household at the last day.",
    "clues": [
      "I ministered to Paul both in Ephesus and in Rome.",
      "Paul commends me in 2 Timothy 1:16–18.",
      "My name means \"bringing profit or benefit.\""
    ],
    "options": [
      "Onesiphorus",
      "Onesimus",
      "Tychicus",
      "Philemon"
    ],
    "correctAnswer": "Onesiphorus",
    "reference": "2 Timothy 1:16–18; 4:19",
    "explanation": "Onesiphorus of Ephesus journeyed to Rome, sought out Paul in his dungeon chains diligently until he found him, and frequently refreshed the apostle.",
    "hint": "2 Timothy 1:16: \"The Lord give mercy unto the house of Onesiphorus; for he oft refreshed me.\"",
    "difficulty": "Difficult",
    "timerSeconds": 25
  },
  {
    "level": 5,
    "challengeIndex": 5,
    "stage": 1,
    "stageTitle": "Puzzle Foundations",
    "levelTitle": "Bible Detective",
    "puzzleType": "The Bible Detective",
    "questionText": "BIBLE DETECTIVE (Stage 1 Finale):\nUncover the identity of this royal Old Testament prophetess:\n1. I lived in Jerusalem in the college (second quarter).\n2. My husband was Shallum, keeper of the royal wardrobe.\n3. King Josiah's high priest Hilkiah came to consult me when the Book of the Law was found.\n4. I prophesied divine judgment on Judah but promised King Josiah peace in his grave.",
    "clues": [
      "I ministered during the religious reformation of King Josiah.",
      "2 Kings 22:14 introduces my office and husband.",
      "My name means \"weasel\" in ancient Hebrew."
    ],
    "options": [
      "Huldah",
      "Deborah",
      "Miriam",
      "Athaliah"
    ],
    "correctAnswer": "Huldah",
    "reference": "2 Kings 22:14–20; 2 Chronicles 34:22–28",
    "explanation": "Huldah the prophetess, wife of Shallum keeper of the wardrobe, was consulted by Hilkiah and the royal delegation after the Book of the Law was found in the Temple.",
    "hint": "2 Kings 22:14: \"So Hilkiah the priest... went unto Huldah the prophetess, the wife of Shallum.\"",
    "difficulty": "Mini-boss",
    "timerSeconds": 25
  },
  {
    "level": 6,
    "challengeIndex": 1,
    "stage": 2,
    "stageTitle": "People and Connections",
    "levelTitle": "Family Connections",
    "puzzleType": "Family Puzzle",
    "questionText": "FAMILY PUZZLE:\nWhat is the exact biological family relationship between Joab, Abishai, Asahel, and King David?",
    "clues": [
      "Joab, Abishai, and Asahel were brothers, sons of a woman named Zeruiah.",
      "1 Chronicles 2:16 identifies Zeruiah as a sister of King David.",
      "Therefore, David was their maternal uncle."
    ],
    "options": [
      "David was their maternal uncle (their mother Zeruiah was David's sister)",
      "David was their father through three different concubines",
      "David was their cousin through his uncle Shimea",
      "David was their younger brother born to Jesse's second wife"
    ],
    "correctAnswer": "David was their maternal uncle (their mother Zeruiah was David's sister)",
    "reference": "1 Chronicles 2:15–16; 2 Samuel 2:18",
    "explanation": "1 Chronicles 2:16 states that Zeruiah and Abigail were the sisters of David, and the sons of Zeruiah were Abishai, Joab, and Asahel, three. David was their uncle.",
    "hint": "Zeruiah was David's sister; her three mighty sons were David's nephews.",
    "difficulty": "Moderate",
    "timerSeconds": 30
  },
  {
    "level": 6,
    "challengeIndex": 2,
    "stage": 2,
    "stageTitle": "People and Connections",
    "levelTitle": "Family Connections",
    "puzzleType": "Family Puzzle",
    "questionText": "FAMILY PUZZLE:\nWho was Mephibosheth's father, and why did King David invite him to eat perpetually at the royal table?",
    "clues": [
      "Mephibosheth was lame on both his feet from a childhood fall at Jezreel.",
      "David sought out if there were any left of the house of Saul for his covenant friend's sake.",
      "David restored all the land of his grandfather Saul to him."
    ],
    "options": [
      "Jonathan; David honored him because of his sacred covenant of love with Jonathan",
      "King Saul; David honored him because Saul was the first anointed king",
      "Abner; David honored him because Abner was commander of the army",
      "Ish-bosheth; David honored him to make peace between Judah and Israel"
    ],
    "correctAnswer": "Jonathan; David honored him because of his sacred covenant of love with Jonathan",
    "reference": "2 Samuel 9:1, 6–13",
    "explanation": "2 Samuel 9:1: \"And David said, Is there yet any that is left of the house of Saul, that I may shew him kindness for Jonathan's sake?\" Mephibosheth was Jonathan's son.",
    "hint": "David and Jonathan had sworn an eternal covenant of kindness between their households.",
    "difficulty": "Moderate",
    "timerSeconds": 30
  },
  {
    "level": 6,
    "challengeIndex": 3,
    "stage": 2,
    "stageTitle": "People and Connections",
    "levelTitle": "Family Connections",
    "puzzleType": "Family Puzzle",
    "questionText": "FAMILY PUZZLE:\nIn 2 Timothy 1:5, Paul commends the \"unfeigned faith\" that dwelt first in young Timothy's family. What was the exact relationship between Lois, Eunice, and Timothy?",
    "clues": [
      "2 Timothy 1:5 names three generations of genuine faith.",
      "One was the grandmother, one was the mother, and one was the young minister."
    ],
    "options": [
      "Lois was Timothy's grandmother and Eunice was his mother",
      "Eunice was Timothy's grandmother and Lois was his mother",
      "Lois and Eunice were Timothy's two older sisters in Lystra",
      "Lois was Timothy's mother and Eunice was his aunt"
    ],
    "correctAnswer": "Lois was Timothy's grandmother and Eunice was his mother",
    "reference": "2 Timothy 1:5; Acts 16:1",
    "explanation": "Paul writes: \"when I call to remembrance the unfeigned faith that is in thee, which dwelt first in thy grandmother Lois, and thy mother Eunice; and I am persuaded that in thee also.\"",
    "hint": "Lois was the grandmother; Eunice was the believing Jewish mother married to a Greek.",
    "difficulty": "Moderate",
    "timerSeconds": 30
  },
  {
    "level": 6,
    "challengeIndex": 4,
    "stage": 2,
    "stageTitle": "People and Connections",
    "levelTitle": "Family Connections",
    "puzzleType": "Family Puzzle",
    "questionText": "FAMILY PUZZLE:\nWho was the father of King Saul, and what event led to Saul first meeting the prophet Samuel?",
    "clues": [
      "His father was a mighty man of wealth from the tribe of Benjamin.",
      "Saul was sent out with a servant to search for lost family animals.",
      "After traveling through Mount Ephraim, they sought the seer in Zuph."
    ],
    "options": [
      "Kish; searching for his father's lost donkeys (asses)",
      "Ner; searching for stolen sheep taken by Philistines",
      "Abiel; taking provisions to his brothers in the army",
      "Jesse; looking for stray cattle in the hill country"
    ],
    "correctAnswer": "Kish; searching for his father's lost donkeys (asses)",
    "reference": "1 Samuel 9:1–4, 15–19",
    "explanation": "1 Samuel 9:1–3 states Kish was a mighty man of power whose donkeys were lost. Saul and a servant went to seek them, which providentially led Saul to Samuel who anointed him king.",
    "hint": "Kish sent Saul saying: \"Take now one of the servants with thee, and arise, go seek the asses.\"",
    "difficulty": "Moderate",
    "timerSeconds": 30
  },
  {
    "level": 6,
    "challengeIndex": 5,
    "stage": 2,
    "stageTitle": "People and Connections",
    "levelTitle": "Family Connections",
    "puzzleType": "Family Puzzle",
    "questionText": "FAMILY PUZZLE:\nWhat is the relationship between Caleb son of Jephunneh, Othniel son of Kenaz, and Achsah?",
    "clues": [
      "Caleb promised his daughter in marriage to whomever conquered Kirjath-sepher.",
      "Othniel took the city and married her, later becoming Israel's first judge.",
      "Kenaz was Caleb's younger brother."
    ],
    "options": [
      "Caleb was Achsah's father; Othniel was Caleb's nephew (and Achsah's husband)",
      "Caleb and Othniel were twin brothers who co-ruled Hebron",
      "Othniel was Achsah's father and Caleb was her husband",
      "Achsah was Othniel's mother who gave him springs of water"
    ],
    "correctAnswer": "Caleb was Achsah's father; Othniel was Caleb's nephew (and Achsah's husband)",
    "reference": "Joshua 15:16–17; Judges 1:12–13; 3:9",
    "explanation": "Joshua 15:17 states: \"And Othniel the son of Kenaz, the brother of Caleb, took it: and he gave him Achsah his daughter to wife.\" Othniel was Caleb's nephew.",
    "hint": "Achsah was Caleb's daughter, and Othniel was the son of Caleb's younger brother Kenaz.",
    "difficulty": "Difficult",
    "timerSeconds": 25
  },
  {
    "level": 7,
    "challengeIndex": 1,
    "stage": 2,
    "stageTitle": "People and Connections",
    "levelTitle": "Strange Partnerships",
    "puzzleType": "Partnership Puzzle",
    "questionText": "PARTNERSHIP PUZZLE:\nAquila and Priscilla are repeatedly mentioned as a ministry team across the New Testament. What trade did they share with Apostle Paul in Corinth?",
    "clues": [
      "Paul lodged with them in Corinth because they were of the same craft.",
      "They had recently come from Italy because Emperor Claudius commanded all Jews to depart Rome.",
      "They worked with leather and fabrics."
    ],
    "options": [
      "Tentmakers",
      "Fishermen",
      "Potters",
      "Silversmiths"
    ],
    "correctAnswer": "Tentmakers",
    "reference": "Acts 18:2–3",
    "explanation": "Acts 18:3: \"And because he was of the same craft, he abode with them, and wrought: for by their occupation they were tentmakers.\"",
    "hint": "They fashioned temporary dwellings from cloth and leather.",
    "difficulty": "Accessible",
    "timerSeconds": 30
  },
  {
    "level": 7,
    "challengeIndex": 2,
    "stage": 2,
    "stageTitle": "People and Connections",
    "levelTitle": "Strange Partnerships",
    "puzzleType": "Partnership Puzzle",
    "questionText": "PARTNERSHIP PUZZLE:\nIn Exodus 17, when Israel fought against Amalek at Rephidim, who stood beside Moses on the hilltop holding up his weary hands until sundown?",
    "clues": [
      "When Moses held up his hand, Israel prevailed; when he let down his hand, Amalek prevailed.",
      "Two men put a stone under Moses to sit on and supported his hands on either side.",
      "One was Moses' brother and the other was Hur of the tribe of Judah."
    ],
    "options": [
      "Aaron and Hur",
      "Joshua and Caleb",
      "Eleazar and Phinehas",
      "Nadab and Abihu"
    ],
    "correctAnswer": "Aaron and Hur",
    "reference": "Exodus 17:10–12",
    "explanation": "Exodus 17:12: \"Moses' hands were heavy... and Aaron and Hur stayed up his hands, the one on the one side, and the other on the other side; and his hands were steady until the going down of the sun.\"",
    "hint": "His high priest brother and the grandfather of craftsman Bezalel.",
    "difficulty": "Accessible",
    "timerSeconds": 30
  },
  {
    "level": 7,
    "challengeIndex": 3,
    "stage": 2,
    "stageTitle": "People and Connections",
    "levelTitle": "Strange Partnerships",
    "puzzleType": "Partnership Puzzle",
    "questionText": "PARTNERSHIP PUZZLE:\nWhy did Deborah the prophetess tell Barak that the journey he took would not be for his personal honour?",
    "clues": [
      "Barak refused to go to battle against Sisera unless Deborah accompanied him.",
      "Deborah agreed to go, but delivered a prophetic limitation on his glory.",
      "The LORD would sell Sisera into the hand of a woman."
    ],
    "options": [
      "Because the LORD would sell Sisera into the hand of a woman (Jael)",
      "Because Barak's chariots would sink in the mud of the River Kishon",
      "Because the glory belonged exclusively to the tribe of Zebulun",
      "Because King Jabin would escape safely into Syria"
    ],
    "correctAnswer": "Because the LORD would sell Sisera into the hand of a woman (Jael)",
    "reference": "Judges 4:8–9, 17–21",
    "explanation": "Deborah told Barak: \"I will surely go with thee: notwithstanding the journey that thou takest shall not be for thine honour; for the LORD shall sell Sisera into the hand of a woman\" (fulfilled by Jael).",
    "hint": "Judges 4:9 points to the fatal tent pin wielded by Jael.",
    "difficulty": "Moderate",
    "timerSeconds": 30
  },
  {
    "level": 7,
    "challengeIndex": 4,
    "stage": 2,
    "stageTitle": "People and Connections",
    "levelTitle": "Strange Partnerships",
    "puzzleType": "Partnership Puzzle",
    "questionText": "PARTNERSHIP PUZZLE:\nWhen Apollos, an eloquent Alexandrian speaker mighty in the Scriptures, preached at Ephesus knowing only the baptism of John, who took him aside and expounded the way of God more perfectly?",
    "clues": [
      "A married couple heard him speaking boldly in the synagogue.",
      "They invited him to their home for deeper theological instruction.",
      "They are the famed tentmaking companions of Paul."
    ],
    "options": [
      "Aquila and Priscilla",
      "Zacharias and Elisabeth",
      "Ananias and Sapphira",
      "Andronicus and Junia"
    ],
    "correctAnswer": "Aquila and Priscilla",
    "reference": "Acts 18:24–26",
    "explanation": "Acts 18:26: \"whom when Aquila and Priscilla had heard, they took him unto them, and expounded unto him the way of God more perfectly.\"",
    "hint": "The faithful tentmaker couple who laid down their own necks for Paul's life.",
    "difficulty": "Moderate",
    "timerSeconds": 30
  },
  {
    "level": 7,
    "challengeIndex": 5,
    "stage": 2,
    "stageTitle": "People and Connections",
    "levelTitle": "Strange Partnerships",
    "puzzleType": "Partnership Puzzle",
    "questionText": "PARTNERSHIP PUZZLE:\nIn Luke 23:12, what sudden reconciliation took place on the day of Jesus' trial?\n\"And the same day ____ and ____ were made friends together: for before they were at enmity between themselves.\"",
    "clues": [
      "One was the Roman governor of Judea.",
      "One was the tetrarch of Galilee who had executed John the Baptist.",
      "They united in their handling and mockery of Jesus Christ."
    ],
    "options": [
      "Pilate and Herod Antipas",
      "Annas and Caiaphas",
      "Felix and Festus",
      "Agrippa and Bernice"
    ],
    "correctAnswer": "Pilate and Herod Antipas",
    "reference": "Luke 23:6–12",
    "explanation": "Pilate sent Jesus to Herod Antipas (tetrarch of Galilee). Herod questioned and mocked Him, sending Him back in a gorgeous robe, and that very day Pilate and Herod became friends.",
    "hint": "The Roman procurator and the Galilean ruler who questioned Jesus.",
    "difficulty": "Difficult",
    "timerSeconds": 25
  },
  {
    "level": 8,
    "challengeIndex": 1,
    "stage": 2,
    "stageTitle": "People and Connections",
    "levelTitle": "Biblical Contrasts & Opposites",
    "puzzleType": "Contrast Puzzle",
    "questionText": "CONTRAST PUZZLE:\nIn Jesus' parable of the Pharisee and the Publican (Luke 18:9–14), what was the decisive contrast that caused the tax collector to go down to his house justified rather than the other?",
    "clues": [
      "The Pharisee stood and prayed thus with himself bragging of his fasting and tithes.",
      "The publican would not lift up so much as his eyes unto heaven.",
      "The publican smote upon his breast crying for divine mercy upon a sinner."
    ],
    "options": [
      "The publican humbled himself confessing his sin, while the Pharisee boasted of his righteous works",
      "The publican gave all his possessions to the temple treasury while the Pharisee gave nothing",
      "The publican was a Levite who offered a lamb, while the Pharisee offered incense",
      "The publican fasted three days while the Pharisee fasted only once"
    ],
    "correctAnswer": "The publican humbled himself confessing his sin, while the Pharisee boasted of his righteous works",
    "reference": "Luke 18:13–14",
    "explanation": "Luke 18:14: \"for every one that exalteth himself shall be abased; and he that humbleth himself shall be exalted.\" The publican cried: \"God be merciful to me a sinner.\"",
    "hint": "Jesus emphasized humility and confession versus self-righteous pride.",
    "difficulty": "Accessible",
    "timerSeconds": 30
  },
  {
    "level": 8,
    "challengeIndex": 2,
    "stage": 2,
    "stageTitle": "People and Connections",
    "levelTitle": "Biblical Contrasts & Opposites",
    "puzzleType": "Contrast Puzzle",
    "questionText": "CONTRAST PUZZLE:\nWhat is the sharp contrast drawn in Hebrews 11:4 between the sacrifices of Abel and Cain?",
    "clues": [
      "Both brothers brought offerings unto the LORD at the end of days.",
      "Cain brought of the fruit of the ground.",
      "Abel brought of the firstlings of his flock and the fat thereof by faith."
    ],
    "options": [
      "Abel offered by faith a more excellent sacrifice obtaining witness that he was righteous",
      "Abel offered incense from Lebanon while Cain offered wild grapes",
      "Cain offered a bullock while Abel offered an unleavened cake",
      "Abel built an altar on Mount Moriah while Cain built no altar"
    ],
    "correctAnswer": "Abel offered by faith a more excellent sacrifice obtaining witness that he was righteous",
    "reference": "Genesis 4:3–5; Hebrews 11:4",
    "explanation": "Hebrews 11:4: \"By faith Abel offered unto God a more excellent sacrifice than Cain, by which he obtained witness that he was righteous, God testifying of his gifts.\"",
    "hint": "Hebrews 11:4 stresses that Abel offered \"by faith.\"",
    "difficulty": "Moderate",
    "timerSeconds": 30
  },
  {
    "level": 8,
    "challengeIndex": 3,
    "stage": 2,
    "stageTitle": "People and Connections",
    "levelTitle": "Biblical Contrasts & Opposites",
    "puzzleType": "Contrast Puzzle",
    "questionText": "CONTRAST PUZZLE:\nIn Matthew 25, what single difference separated the five wise virgins from the five foolish virgins when the bridegroom tarried?",
    "clues": [
      "All ten took their lamps and went forth to meet the bridegroom.",
      "All ten slumbered and slept while the bridegroom tarried.",
      "Only the wise brought extra reserve oil in their vessels with their lamps."
    ],
    "options": [
      "The wise took oil in their vessels with their lamps, while the foolish took no reserve oil",
      "The wise stayed awake praying while the foolish fell asleep",
      "The wise had white linen garments while the foolish wore common clothes",
      "The wise arrived at the door first while the foolish went to buy bread"
    ],
    "correctAnswer": "The wise took oil in their vessels with their lamps, while the foolish took no reserve oil",
    "reference": "Matthew 25:3–4",
    "explanation": "Matthew 25:3–4: \"They that were foolish took their lamps, and took no oil with them: But the wise took oil in their vessels with their lamps.\"",
    "hint": "They all slept; the only distinction was the extra oil vessels.",
    "difficulty": "Moderate",
    "timerSeconds": 30
  },
  {
    "level": 8,
    "challengeIndex": 4,
    "stage": 2,
    "stageTitle": "People and Connections",
    "levelTitle": "Biblical Contrasts & Opposites",
    "puzzleType": "Contrast Puzzle",
    "questionText": "CONTRAST PUZZLE:\nWhat tragic contrast is recorded in 2 Timothy 4 between Demas and Luke regarding Paul's final imprisonment?",
    "clues": [
      "Paul was cold, lonely, and awaiting execution in a Roman dungeon.",
      "One companion abandoned Paul out of worldly affection.",
      "One companion remained faithfully by his side."
    ],
    "options": [
      "Demas forsook Paul having loved this present world, while only Luke remained with him",
      "Demas was martyred by Nero while Luke escaped safely to Athens",
      "Demas carried the collection to Jerusalem while Luke sailed to Alexandria",
      "Demas became bishop of Antioch while Luke retired to Troas"
    ],
    "correctAnswer": "Demas forsook Paul having loved this present world, while only Luke remained with him",
    "reference": "2 Timothy 4:10–11",
    "explanation": "2 Timothy 4:10–11: \"For Demas hath forsaken me, having loved this present world, and is departed unto Thessalonica... Only Luke is with me.\"",
    "hint": "2 Timothy 4:10 explicitly blames love for \"this present world.\"",
    "difficulty": "Moderate",
    "timerSeconds": 30
  },
  {
    "level": 8,
    "challengeIndex": 5,
    "stage": 2,
    "stageTitle": "People and Connections",
    "levelTitle": "Biblical Contrasts & Opposites",
    "puzzleType": "Contrast Puzzle",
    "questionText": "CONTRAST PUZZLE:\nIn 1 Samuel 25, how does Scripture contrast the character of Nabal with that of his wife Abigail?",
    "clues": [
      "Nabal was wealthy with 3,000 sheep and 1,000 goats in Carmel.",
      "1 Samuel 25:3 contrasts both their intellect and their appearance/temperament."
    ],
    "options": [
      "Abigail was a woman of good understanding and beautiful countenance, while Nabal was churlish and evil in his doings",
      "Abigail was from the royal house of Saul, while Nabal was an uncircumcised Philistine",
      "Nabal was a generous judge in Israel, while Abigail was reclusive and fearful",
      "Abigail refused to feed the poor, while Nabal gave feasts like a king"
    ],
    "correctAnswer": "Abigail was a woman of good understanding and beautiful countenance, while Nabal was churlish and evil in his doings",
    "reference": "1 Samuel 25:3, 17, 25",
    "explanation": "1 Samuel 25:3: \"she was a woman of good understanding, and of a beautiful countenance: but the man was churlish and evil in his doings; and he was of the house of Caleb.\"",
    "hint": "Nabal's own servants warned that he was such a son of Belial that no man could speak to him.",
    "difficulty": "Difficult",
    "timerSeconds": 25
  },
  {
    "level": 9,
    "challengeIndex": 1,
    "stage": 2,
    "stageTitle": "People and Connections",
    "levelTitle": "Uncommon Names & Roles",
    "puzzleType": "Uncommon Figure Puzzle",
    "questionText": "UNCOMMON FIGURE:\nWho was Tertius in Romans 16:22, and what specific personal greeting did he write into the epistle?",
    "clues": [
      "Paul typically used an amanuensis (scribe) to write his dictated letters.",
      "In Romans 16:22, the writer breaks in with his own first-person greeting.",
      "He writes: \"I ____, who wrote this epistle, salute you in the Lord.\""
    ],
    "options": [
      "Tertius; the scribe who penned down Paul's dictated epistle to the Romans",
      "Tertius; the bishop of Corinth who funded the letter's parchment",
      "Tertius; the Roman soldier guarding Paul during house arrest",
      "Tertius; the courier who carried the scroll by ship to Rome"
    ],
    "correctAnswer": "Tertius; the scribe who penned down Paul's dictated epistle to the Romans",
    "reference": "Romans 16:22",
    "explanation": "Romans 16:22: \"I Tertius, who wrote this epistle, salute you in the Lord.\" Tertius was Paul's faithful Christian secretary/scribe who transcribed Romans.",
    "hint": "Romans 16:22: \"I Tertius, who wrote this epistle...\"",
    "difficulty": "Moderate",
    "timerSeconds": 30
  },
  {
    "level": 9,
    "challengeIndex": 2,
    "stage": 2,
    "stageTitle": "People and Connections",
    "levelTitle": "Uncommon Names & Roles",
    "puzzleType": "Uncommon Figure Puzzle",
    "questionText": "UNCOMMON FIGURE:\nIn Romans 16:1–2, Paul commends Phoebe to the church in Rome. What was her ministerial role and hometown church?",
    "clues": [
      "She was a servant/deaconess of the church at Cenchrea (the eastern port of Corinth).",
      "Paul asks the Romans to receive her in the Lord as becometh saints.",
      "She had been a helper (succourer) of many, and of Paul also."
    ],
    "options": [
      "Deaconess / servant of the church at Cenchrea; a succourer of many and of Paul",
      "Prophetess from Antioch who foretold the Roman famine",
      "Widow of Philippi who hosted the missionary team in Europe",
      "Seller of purple in Thyatira who founded the Macedonian assembly"
    ],
    "correctAnswer": "Deaconess / servant of the church at Cenchrea; a succourer of many and of Paul",
    "reference": "Romans 16:1–2",
    "explanation": "Romans 16:1–2 commends Phoebe as \"a servant of the church which is at Cenchrea\" who \"hath been a succourer of many, and of myself also.\"",
    "hint": "Cenchrea was the seaport of Corinth; Phoebe carried Paul's letter to Rome.",
    "difficulty": "Moderate",
    "timerSeconds": 30
  },
  {
    "level": 9,
    "challengeIndex": 3,
    "stage": 2,
    "stageTitle": "People and Connections",
    "levelTitle": "Uncommon Names & Roles",
    "puzzleType": "Uncommon Figure Puzzle",
    "questionText": "UNCOMMON FIGURE:\nIn Romans 16:12, Paul sends salutations to two women describing their labor: \"Salute ____ and ____, who labour in the Lord.\"",
    "clues": [
      "Their names are Greek and sound very similar, like twins.",
      "Both were dedicated Christian women serving the church at Rome.",
      "Their names start with \"Try-\"."
    ],
    "options": [
      "Tryphena and Tryphosa",
      "Euodias and Syntyche",
      "Martha and Mary",
      "Lois and Eunice"
    ],
    "correctAnswer": "Tryphena and Tryphosa",
    "reference": "Romans 16:12",
    "explanation": "Romans 16:12: \"Salute Tryphena and Tryphosa, who labour in the Lord. Salute the beloved Persis, which laboured much in the Lord.\"",
    "hint": "Romans 16:12 pairs these two rhyming names.",
    "difficulty": "Difficult",
    "timerSeconds": 30
  },
  {
    "level": 9,
    "challengeIndex": 4,
    "stage": 2,
    "stageTitle": "People and Connections",
    "levelTitle": "Uncommon Names & Roles",
    "puzzleType": "Uncommon Figure Puzzle",
    "questionText": "UNCOMMON FIGURE:\nWho was Sosthenes in Acts 18:17 and 1 Corinthians 1:1?",
    "clues": [
      "In Corinth, the Greeks took him and beat him before Gallio's judgment seat.",
      "He was the ruler of the synagogue in Corinth who later became a Christian believer.",
      "Paul opens 1 Corinthians calling him \"Sosthenes our brother.\""
    ],
    "options": [
      "Chief ruler of the Corinthian synagogue beaten before Gallio, later co-sender of 1 Corinthians",
      "The Roman centurion who commanded the garrison at Corinthian acropolis",
      "The silversmith who manufactured silver shrines of Diana in Ephesus",
      "The high priest's orator who accused Paul before Governor Felix"
    ],
    "correctAnswer": "Chief ruler of the Corinthian synagogue beaten before Gallio, later co-sender of 1 Corinthians",
    "reference": "Acts 18:17; 1 Corinthians 1:1",
    "explanation": "In Acts 18:17, Sosthenes ruler of the synagogue was beaten before Gallio. He subsequently converted to Christ and was with Paul in Ephesus when 1 Corinthians 1:1 was penned: \"Paul... and Sosthenes our brother.\"",
    "hint": "From persecuted synagogue ruler in Acts 18 to Christian \"brother\" in 1 Corinthians 1:1.",
    "difficulty": "Difficult",
    "timerSeconds": 30
  },
  {
    "level": 9,
    "challengeIndex": 5,
    "stage": 2,
    "stageTitle": "People and Connections",
    "levelTitle": "Uncommon Names & Roles",
    "puzzleType": "Uncommon Figure Puzzle",
    "questionText": "UNCOMMON FIGURE:\nWho was Baruch son of Neriah, and what dangerous task did prophet Jeremiah assign to him?",
    "clues": [
      "Jeremiah was shut up and could not go into the house of the LORD.",
      "Jeremiah dictated all the words of the LORD onto a roll of a book.",
      "Baruch had to stand in the Temple court on a fasting day and read the scroll publicly."
    ],
    "options": [
      "Jeremiah's faithful scribe who wrote down his dictated prophecies and read them in the Temple",
      "The high priest who anointed Josiah king over Judah",
      "The captain of the guard who led the Jewish exiles to Babylon",
      "The prophet who confronted King Jehoiakim in the upper chamber"
    ],
    "correctAnswer": "Jeremiah's faithful scribe who wrote down his dictated prophecies and read them in the Temple",
    "reference": "Jeremiah 36:4–10; 45:1–5",
    "explanation": "Jeremiah 36:4: \"Then Jeremiah called Baruch the son of Neriah: and Baruch wrote from the mouth of Jeremiah all the words of the LORD... upon a roll of a book\" and read it boldly in the Temple.",
    "hint": "He is the famed scribe of Jeremiah who recorded the prophetic roll cut by Jehoiakim.",
    "difficulty": "Difficult",
    "timerSeconds": 25
  },
  {
    "level": 10,
    "challengeIndex": 1,
    "stage": 2,
    "stageTitle": "People and Connections",
    "levelTitle": "People & Connections Boss",
    "puzzleType": "Boss Connection Puzzle",
    "questionText": "BOSS PUZZLE 1:\nConnect these four pairs of biblical in-laws to their correct scriptural descriptions:",
    "clues": [
      "Moses and Jethro (Exodus 18).",
      "Ruth and Naomi (Ruth 1).",
      "David and Saul (1 Samuel 18).",
      "Jacob and Laban (Genesis 29)."
    ],
    "options": [
      "All four are famous biblical son-in-law / daughter-in-law relationships recorded in Scripture",
      "All four were biological siblings born to the same mother",
      "All four pairs were kings and high priests co-ruling Jerusalem",
      "All four pairs traveled together on the Ark of Noah"
    ],
    "correctAnswer": "All four are famous biblical son-in-law / daughter-in-law relationships recorded in Scripture",
    "reference": "Exodus 18:1; Ruth 1:16; 1 Samuel 18:27; Genesis 29:21",
    "explanation": "Moses married Jethro's daughter Zipporah; Ruth was daughter-in-law to Naomi; David married Saul's daughter Michal; Jacob married Laban's daughters Leah and Rachel.",
    "hint": "They represent pivotal biblical in-law bonds (sons-in-law and daughters-in-law).",
    "difficulty": "Mini-boss",
    "timerSeconds": 25
  },
  {
    "level": 10,
    "challengeIndex": 2,
    "stage": 2,
    "stageTitle": "People and Connections",
    "levelTitle": "People & Connections Boss",
    "puzzleType": "Boss Connection Puzzle",
    "questionText": "BOSS PUZZLE 2:\nIn 1 Kings 22, King Ahab of Israel had 400 prophets promising victory, but King Jehoshaphat asked: \"Is there not here a prophet of the LORD besides?\" Who was the solitary true prophet summoned, and what was his opening reply?",
    "clues": [
      "Ahab hated him because he never prophesied good concerning Ahab, but always evil.",
      "His name was Micaiah son of Imlah.",
      "He saw all Israel scattered upon the hills, as sheep that have not a shepherd."
    ],
    "options": [
      "Micaiah son of Imlah; foretold Ahab would fall at Ramoth-gilead",
      "Elijah the Tishbite; called down fire upon Ahab's fifty soldiers",
      "Ahijah the Shilonite; tore his garment into twelve pieces",
      "Jehu son of Hanani; rebuked Jehoshaphat for helping the ungodly"
    ],
    "correctAnswer": "Micaiah son of Imlah; foretold Ahab would fall at Ramoth-gilead",
    "reference": "1 Kings 22:7–14, 17–28",
    "explanation": "Micaiah son of Imlah spoke truth to power despite Zedekiah's iron horns and Ahab's threats. He declared: \"I saw all Israel scattered upon the hills, as sheep that have not a shepherd,\" accurately predicting Ahab's death.",
    "hint": "1 Kings 22:8: \"There is yet one man, Micaiah the son of Imlah, by whom we may enquire of the LORD.\"",
    "difficulty": "Mini-boss",
    "timerSeconds": 25
  },
  {
    "level": 10,
    "challengeIndex": 3,
    "stage": 2,
    "stageTitle": "People and Connections",
    "levelTitle": "People & Connections Boss",
    "puzzleType": "Boss Connection Puzzle",
    "questionText": "BOSS PUZZLE 3:\nIn Numbers 27, the five daughters of Zelophehad approached Moses, Eleazar the priest, and the princes at the tabernacle door. What were the names of all five sisters who successfully petitioned for land inheritance rights?",
    "clues": [
      "Their father Zelophehad of the tribe of Manasseh died in the wilderness having no sons.",
      "They argued that their father's name should not be done away from his family.",
      "God affirmed their plea saying: \"The daughters of Zelophehad speak right.\""
    ],
    "options": [
      "Mahlah, Noah, Hoglah, Milcah, and Tirzah",
      "Miriam, Deborah, Huldah, Anna, and Phoebe",
      "Rachel, Leah, Bilhah, Zilpah, and Dinah",
      "Elisabeth, Mary, Salome, Joanna, and Susanna"
    ],
    "correctAnswer": "Mahlah, Noah, Hoglah, Milcah, and Tirzah",
    "reference": "Numbers 27:1–7; Joshua 17:3",
    "explanation": "Numbers 27:1 lists the five daughters: Mahlah, Noah, Hoglah, Milcah, and Tirzah. God confirmed their case establishing a permanent statute of inheritance for Israel.",
    "hint": "Numbers 27:1: \"and these are the names of his daughters; Mahlah, Noah, and Hoglah, and Milcah, and Tirzah.\"",
    "difficulty": "Mini-boss",
    "timerSeconds": 25
  },
  {
    "level": 10,
    "challengeIndex": 4,
    "stage": 2,
    "stageTitle": "People and Connections",
    "levelTitle": "People & Connections Boss",
    "puzzleType": "Boss Connection Puzzle",
    "questionText": "BOSS PUZZLE 4:\nIn 2 Samuel 17, when David fled from Absalom across Jordan to Mahanaim, three men brought beds, basins, earthen vessels, wheat, barley, honey, and cheese to sustain David's exhausted army. Who were these three loyal benefactors?",
    "clues": [
      "One was Shobi son of Nahash of Rabbah of Ammon.",
      "One was Machir son of Ammiel of Lo-debar (who had sheltered Mephibosheth).",
      "One was eighty-year-old wealthy Barzillai the Gileadite of Rogelim."
    ],
    "options": [
      "Shobi, Machir, and Barzillai",
      "Joab, Abishai, and Asahel",
      "Hushai, Ahimaaz, and Jonathan",
      "Zadok, Abiathar, and Benaiah"
    ],
    "correctAnswer": "Shobi, Machir, and Barzillai",
    "reference": "2 Samuel 17:27–29",
    "explanation": "2 Samuel 17:27–29 names Shobi of Ammon, Machir of Lo-debar, and Barzillai the Gileadite who brought generous beds and food for David and his people in the wilderness.",
    "hint": "Barzillai was the venerable 80-year-old Gileadite who later escorted David back across Jordan.",
    "difficulty": "Mini-boss",
    "timerSeconds": 20
  },
  {
    "level": 10,
    "challengeIndex": 5,
    "stage": 2,
    "stageTitle": "People and Connections",
    "levelTitle": "People & Connections Boss",
    "puzzleType": "Boss Connection Puzzle",
    "questionText": "BOSS PUZZLE 5 (Stage 2 Finale):\nIn Colossians 4:7–14, Paul names seven New Testament co-workers sending personal greetings. Match these four individuals to their exact scriptural descriptions:\n1. Tychicus\n2. Onesimus\n3. Aristarchus\n4. Luke",
    "clues": [
      "Tychicus: beloved brother and faithful minister who delivered the epistle.",
      "Onesimus: faithful and beloved brother who is one of you (Philemon's runaway slave).",
      "Aristarchus: Paul's fellowprisoner from Thessalonica.",
      "Luke: the beloved physician."
    ],
    "options": [
      "Tychicus (faithful minister), Onesimus (beloved brother), Aristarchus (fellowprisoner), Luke (beloved physician)",
      "Tychicus (physician), Onesimus (fellowprisoner), Aristarchus (scribe), Luke (synagogue ruler)",
      "Tychicus (silversmith), Onesimus (centurion), Aristarchus (apostle), Luke (tanner)",
      "Tychicus (prophet), Onesimus (king), Aristarchus (judge), Luke (priest)"
    ],
    "correctAnswer": "Tychicus (faithful minister), Onesimus (beloved brother), Aristarchus (fellowprisoner), Luke (beloved physician)",
    "reference": "Colossians 4:7–14; Philemon 1:24",
    "explanation": "Colossians 4 explicitly characterizes Tychicus as \"a beloved brother, and a faithful minister,\" Onesimus as \"a faithful and beloved brother,\" Aristarchus as \"my fellowprisoner,\" and Luke as \"the beloved physician.\"",
    "hint": "Check Colossians 4:7, 9, 10, 14.",
    "difficulty": "Mini-boss",
    "timerSeconds": 20
  },
  {
    "level": 11,
    "challengeIndex": 1,
    "stage": 3,
    "stageTitle": "Stories and Events",
    "levelTitle": "Story Sequence Puzzles",
    "puzzleType": "Story Sequence Puzzle",
    "questionText": "STORY SEQUENCE:\nReconstruct the exact chronological order of Naaman's healing in 2 Kings 5:\n1. Elisha sends a messenger saying wash in Jordan seven times.\n2. Naaman becomes wroth and turns away in a rage.\n3. Naaman's servants urge him: \"If the prophet had bid thee do some great thing...\"\n4. Naaman dips seven times in Jordan and his flesh becomes clean like a little child.",
    "clues": [
      "Notice that Elisha did not even come out to greet Naaman in person.",
      "Naaman was furious because he expected a grand waving of the hand over the leprosy.",
      "His wise servants persuaded him to obey the simple command."
    ],
    "options": [
      "Elisha sends messenger → Naaman becomes angry → Servants urge obedience → Naaman dips and is healed",
      "Naaman dips in Jordan → Naaman becomes angry → Elisha sends messenger → Servants urge obedience",
      "Servants urge obedience → Elisha sends messenger → Naaman dips and is healed → Naaman becomes angry",
      "Naaman becomes angry → Servants urge obedience → Naaman dips and is healed → Elisha sends messenger"
    ],
    "correctAnswer": "Elisha sends messenger → Naaman becomes angry → Servants urge obedience → Naaman dips and is healed",
    "reference": "2 Kings 5:10–14",
    "explanation": "2 Kings 5:10–14: Elisha sent a messenger telling him to wash seven times; Naaman was wroth and turned away; his servants reasoned with him; he went down and dipped seven times and his flesh was restored.",
    "hint": "The messenger came first, anger followed, servants counseled, and dipping brought healing.",
    "difficulty": "Moderate",
    "timerSeconds": 30
  },
  {
    "level": 11,
    "challengeIndex": 2,
    "stage": 3,
    "stageTitle": "Stories and Events",
    "levelTitle": "Story Sequence Puzzles",
    "puzzleType": "Story Sequence Puzzle",
    "questionText": "STORY SEQUENCE:\nReconstruct the sequence of Peter's miraculous escape from Herod's prison in Acts 12:\n1. An angel shines in prison, strikes Peter's side, and chains fall off.\n2. Peter passes two guards and the iron city gate opens of its own accord.\n3. Peter knocks at Mary's gate and maid Rhoda forgets to open in joy.\n4. Peter enters, declares how the Lord brought him out, and departs.",
    "clues": [
      "Peter thought he saw a vision while following the angel through the gates.",
      "He only came to himself when left alone in the street.",
      "He then walked to the house of Mary where disciples were praying."
    ],
    "options": [
      "Angel wakes Peter and chains fall → Iron gate opens → Rhoda hears knock at gate → Peter testifies to believers",
      "Rhoda hears knock at gate → Angel wakes Peter → Peter testifies to believers → Iron gate opens",
      "Iron gate opens → Rhoda hears knock at gate → Angel wakes Peter → Peter testifies to believers",
      "Peter testifies to believers → Angel wakes Peter → Iron gate opens → Rhoda hears knock at gate"
    ],
    "correctAnswer": "Angel wakes Peter and chains fall → Iron gate opens → Rhoda hears knock at gate → Peter testifies to believers",
    "reference": "Acts 12:7–17",
    "explanation": "Acts 12:7–17 records the angelic awakening and falling chains, passing through the iron gate, knocking at Mary's door with Rhoda's glad reaction, and Peter's testimony to the astonished prayer meeting.",
    "hint": "Chains fall first in prison, gate opens to the city, knocking at Mary's house follows.",
    "difficulty": "Moderate",
    "timerSeconds": 30
  },
  {
    "level": 11,
    "challengeIndex": 3,
    "stage": 3,
    "stageTitle": "Stories and Events",
    "levelTitle": "Story Sequence Puzzles",
    "puzzleType": "Story Sequence Puzzle",
    "questionText": "STORY SEQUENCE:\nReconstruct the sequence of Gideon's night attack on the Midianite camp in Judges 7:\n1. 300 men blow trumpets and break pitchers concealing torches.\n2. Men shout: \"The sword of the LORD, and of Gideon!\"\n3. The LORD sets every Midianite's sword against his fellow in confusion.\n4. Midianite army flees to Beth-shittah and Abel-meholah.",
    "clues": [
      "Gideon divided his 300 men into three companies holding torches inside pitchers.",
      "At the beginning of the middle watch they blew trumpets and smashed pitchers.",
      "The sudden noise and blaze caused the enemy to slaughter each other."
    ],
    "options": [
      "Blow trumpets & break pitchers → Shout \"Sword of the LORD & Gideon\" → Enemy turns swords on each other → Midian army flees",
      "Enemy turns swords on each other → Midian army flees → Blow trumpets & break pitchers → Shout \"Sword of the LORD & Gideon\"",
      "Shout \"Sword of the LORD & Gideon\" → Enemy turns swords on each other → Midian army flees → Blow trumpets & break pitchers",
      "Midian army flees → Blow trumpets & break pitchers → Shout \"Sword of the LORD & Gideon\" → Enemy turns swords on each other"
    ],
    "correctAnswer": "Blow trumpets & break pitchers → Shout \"Sword of the LORD & Gideon\" → Enemy turns swords on each other → Midian army flees",
    "reference": "Judges 7:19–22",
    "explanation": "Judges 7:19–22: The pitchers were broken revealing flaming torches; the trumpet blast and shout rang out; God threw the camp into panic turning each man's sword against his fellow; the host fled.",
    "hint": "Pitchers broke first to reveal the torches, followed by the battle cry.",
    "difficulty": "Moderate",
    "timerSeconds": 30
  },
  {
    "level": 11,
    "challengeIndex": 4,
    "stage": 3,
    "stageTitle": "Stories and Events",
    "levelTitle": "Story Sequence Puzzles",
    "puzzleType": "Story Sequence Puzzle",
    "questionText": "STORY SEQUENCE:\nReconstruct the sequence of the healing of the man born blind in John 9:\n1. Jesus spat on the ground and made clay of the spittle.\n2. Jesus anointed the blind man's eyes with the clay.\n3. Jesus said: \"Go, wash in the pool of Siloam.\"\n4. The man went his way, washed, and came seeing.",
    "clues": [
      "The disciples originally asked who sinned: this man or his parents.",
      "Jesus declared it was that the works of God should be made manifest.",
      "Siloam is translated \"Sent.\""
    ],
    "options": [
      "Made clay with spittle → Anointed eyes with clay → Bidden to wash in Siloam → Washed and came seeing",
      "Bidden to wash in Siloam → Washed and came seeing → Made clay with spittle → Anointed eyes with clay",
      "Anointed eyes with clay → Made clay with spittle → Washed and came seeing → Bidden to wash in Siloam",
      "Washed and came seeing → Made clay with spittle → Anointed eyes with clay → Bidden to wash in Siloam"
    ],
    "correctAnswer": "Made clay with spittle → Anointed eyes with clay → Bidden to wash in Siloam → Washed and came seeing",
    "reference": "John 9:6–7",
    "explanation": "John 9:6–7: \"he spat on the ground, and made clay of the spittle, and he anointed the eyes of the blind man with the clay, And said unto him, Go, wash in the pool of Siloam... He went his way therefore, and washed, and came seeing.\"",
    "hint": "Spittle made clay, eyes were anointed, Siloam washing completed the miracle.",
    "difficulty": "Moderate",
    "timerSeconds": 30
  },
  {
    "level": 11,
    "challengeIndex": 5,
    "stage": 3,
    "stageTitle": "Stories and Events",
    "levelTitle": "Story Sequence Puzzles",
    "puzzleType": "Story Sequence Puzzle",
    "questionText": "STORY SEQUENCE:\nReconstruct the sequence of the Fall of Jericho in Joshua 6:\n1. March around city once a day for six days with the Ark and seven trumpets.\n2. On the seventh day, compass the city seven times.\n3. Priests blow a long blast with ram's horn and all the people shout with a great shout.\n4. The wall of the city falls down flat and each soldier marches straight ahead.",
    "clues": [
      "Silence was maintained until Joshua gave the command to shout.",
      "On the final day the circuits were multiplied to seven.",
      "The wall collapsed straight down under its own foundation."
    ],
    "options": [
      "March once daily for 6 days → Compass 7 times on 7th day → Long blast & great shout → Wall falls flat",
      "Compass 7 times on 7th day → Wall falls flat → March once daily for 6 days → Long blast & great shout",
      "Long blast & great shout → Wall falls flat → March once daily for 6 days → Compass 7 times on 7th day",
      "Wall falls flat → March once daily for 6 days → Compass 7 times on 7th day → Long blast & great shout"
    ],
    "correctAnswer": "March once daily for 6 days → Compass 7 times on 7th day → Long blast & great shout → Wall falls flat",
    "reference": "Joshua 6:3–5, 14–20",
    "explanation": "Joshua 6 details the 6-day once-daily march, the 7th-day sevenfold circuit, the priests' trumpet blast followed by the universal shout, and the immediate flattening of Jericho's walls.",
    "hint": "Six daily marches, seven marches on day seven, trumpet shout, then wall collapse.",
    "difficulty": "Difficult",
    "timerSeconds": 25
  },
  {
    "level": 12,
    "challengeIndex": 1,
    "stage": 3,
    "stageTitle": "Stories and Events",
    "levelTitle": "The Missing Catalyst",
    "puzzleType": "Missing Catalyst Puzzle",
    "questionText": "MISSING CATALYST:\nWhat specific event caused King Josiah to rend his clothes and initiate Judah's sweeping national revival in 2 Kings 22?",
    "clues": [
      "Temple repairs were being carried out by workmen under Shaphan the scribe.",
      "Hilkiah the high priest made an unexpected discovery in the house of the LORD.",
      "Shaphan read the discovered scroll aloud before the king."
    ],
    "options": [
      "Hilkiah found the lost Book of the Law in the Temple and Shaphan read it to the king",
      "An invading army of Babylon surrounded Jerusalem's walls",
      "An earthquake split the altar of Bethel during the feast",
      "A vision of angels appeared over the threshingfloor of Araunah"
    ],
    "correctAnswer": "Hilkiah found the lost Book of the Law in the Temple and Shaphan read it to the king",
    "reference": "2 Kings 22:8–11",
    "explanation": "2 Kings 22:11: \"And it came to pass, when the king had heard the words of the book of the law, that he rent his clothes.\" The finding and reading of the Book of the Law sparked the great reformation.",
    "hint": "The lost scroll of Scripture discovered during temple maintenance.",
    "difficulty": "Moderate",
    "timerSeconds": 30
  },
  {
    "level": 12,
    "challengeIndex": 2,
    "stage": 3,
    "stageTitle": "Stories and Events",
    "levelTitle": "The Missing Catalyst",
    "puzzleType": "Missing Catalyst Puzzle",
    "questionText": "MISSING CATALYST:\nWhat caused the sudden division of the kingdom of Israel into two nations in 1 Kings 12?",
    "clues": [
      "Jeroboam and the assembly of Israel petitioned King Rehoboam to lighten Solomon's heavy yoke.",
      "Rehoboam consulted both the old counselors and the young men who grew up with him.",
      "He answered the people roughly threatening chastisement with scorpions."
    ],
    "options": [
      "Rehoboam rejected the elders' counsel and threatened heavier taxation and scorpions",
      "An Egyptian army invaded and forcibly established two separate governors",
      "Jeroboam assassinated Solomon during a temple feast",
      "A severe seven-year famine forced ten tribes to migrate permanently"
    ],
    "correctAnswer": "Rehoboam rejected the elders' counsel and threatened heavier taxation and scorpions",
    "reference": "1 Kings 12:13–16",
    "explanation": "1 Kings 12:13–16: Rehoboam answered the people roughly, saying his father chastised with whips but he would chastise with scorpions, provoking the cry: \"To your tents, O Israel!\"",
    "hint": "Rehoboam listened to his youthful peers instead of the wise elders.",
    "difficulty": "Moderate",
    "timerSeconds": 30
  },
  {
    "level": 12,
    "challengeIndex": 3,
    "stage": 3,
    "stageTitle": "Stories and Events",
    "levelTitle": "The Missing Catalyst",
    "puzzleType": "Missing Catalyst Puzzle",
    "questionText": "MISSING CATALYST:\nIn Numbers 21, what caused the fiery serpents to bite the children of Israel in the wilderness?",
    "clues": [
      "The soul of the people was much discouraged because of the way compassing Edom.",
      "The people spake against God and against Moses.",
      "They loathed the light bread (manna) and complained of having no water."
    ],
    "options": [
      "The people spoke against God and Moses, complaining and loathing the heavenly manna",
      "Israel refused to offer the morning and evening burnt sacrifice",
      "Korah built a golden calf near Mount Hor",
      "The spies refused to circumcise their sons at Kadesh"
    ],
    "correctAnswer": "The people spoke against God and Moses, complaining and loathing the heavenly manna",
    "reference": "Numbers 21:4–6",
    "explanation": "Numbers 21:5: \"And the people spake against God, and against Moses... our soul loatheth this light bread. And the LORD sent fiery serpents among the people, and they bit the people.\"",
    "hint": "Vocal grumbling against God and contempt for the daily manna.",
    "difficulty": "Moderate",
    "timerSeconds": 30
  },
  {
    "level": 12,
    "challengeIndex": 4,
    "stage": 3,
    "stageTitle": "Stories and Events",
    "levelTitle": "The Missing Catalyst",
    "puzzleType": "Missing Catalyst Puzzle",
    "questionText": "MISSING CATALYST:\nWhat caused the catastrophic defeat of Israel at Ai in Joshua 7 after their mighty victory at Jericho?",
    "clues": [
      "Joshua sent 3,000 men to take Ai expecting an easy conquest, but 36 Israelites were slain.",
      "Joshua fell to the earth on his face before the Ark.",
      "God told him: \"Israel hath sinned, and they have also transgressed my covenant... taken of the accursed thing.\""
    ],
    "options": [
      "Achan took a Babylonian garment, 200 shekels of silver, and a wedge of gold from Jericho",
      "Israel forgot to blow the seven rams' horns before the gate of Ai",
      "The Gibeonites betrayed Israel's battle plan to the king of Ai",
      "The priests refused to carry the Ark of the Covenant into battle"
    ],
    "correctAnswer": "Achan took a Babylonian garment, 200 shekels of silver, and a wedge of gold from Jericho",
    "reference": "Joshua 7:1, 11, 20–21",
    "explanation": "Joshua 7:1, 21: Achan of the tribe of Judah saw and coveted a goodly Babylonish garment, silver, and a wedge of gold, hiding them in his tent, bringing guilt and defeat upon the entire camp.",
    "hint": "Achan's covetous theft of the devoted spoil at Jericho.",
    "difficulty": "Moderate",
    "timerSeconds": 30
  },
  {
    "level": 12,
    "challengeIndex": 5,
    "stage": 3,
    "stageTitle": "Stories and Events",
    "levelTitle": "The Missing Catalyst",
    "puzzleType": "Missing Catalyst Puzzle",
    "questionText": "MISSING CATALYST:\nIn Acts 16, what triggered the great earthquake that opened the prison doors and loosened every prisoner's bands at midnight in Philippi?",
    "clues": [
      "Paul and Silas were beaten with many stripes and thrust into the inner prison with feet in stocks.",
      "At midnight, they were not weeping or complaining.",
      "They prayed and sang praises unto God, and the prisoners heard them."
    ],
    "options": [
      "Paul and Silas prayed and sang praises unto God at midnight",
      "The church in Jerusalem fasted forty days for their release",
      "Lydia brought bail money to the Roman magistrates",
      "An angel appeared with a drawn sword commanding the jailer to open the doors"
    ],
    "correctAnswer": "Paul and Silas prayed and sang praises unto God at midnight",
    "reference": "Acts 16:25–26",
    "explanation": "Acts 16:25–26: \"And at midnight Paul and Silas prayed, and sang praises unto God: and the prisoners heard them. And suddenly there was a great earthquake, so that the foundations of the prison were shaken.\"",
    "hint": "Midnight prayers and hymns of praise in the inner dungeon.",
    "difficulty": "Difficult",
    "timerSeconds": 25
  },
  {
    "level": 13,
    "challengeIndex": 1,
    "stage": 3,
    "stageTitle": "Stories and Events",
    "levelTitle": "Miracle Mechanics",
    "puzzleType": "Miracle Mechanics Puzzle",
    "questionText": "MIRACLE MECHANICS:\nIn Exodus 15:23–25, how did Moses transform the bitter, undrinkable waters of Marah into sweet water for the thirsty Israelites?",
    "clues": [
      "The people murmured against Moses saying, \"What shall we drink?\"",
      "Moses cried unto the LORD, and the LORD showed him a specific natural object.",
      "When he cast this object into the waters, the waters were made sweet."
    ],
    "options": [
      "Moses cast a tree shown to him by the LORD into the waters",
      "Moses poured a cruse of new salt into the fountain spring",
      "Moses struck the water three times with Aaron's budding rod",
      "Moses built an altar of twelve unhewn stones in the stream"
    ],
    "correctAnswer": "Moses cast a tree shown to him by the LORD into the waters",
    "reference": "Exodus 15:23–25",
    "explanation": "Exodus 15:25: \"And he cried unto the LORD; and the LORD shewed him a tree, which when he had cast into the waters, the waters were made sweet.\"",
    "hint": "Exodus 15:25 explicitly names a tree cast into the spring.",
    "difficulty": "Moderate",
    "timerSeconds": 30
  },
  {
    "level": 13,
    "challengeIndex": 2,
    "stage": 3,
    "stageTitle": "Stories and Events",
    "levelTitle": "Miracle Mechanics",
    "puzzleType": "Miracle Mechanics Puzzle",
    "questionText": "MIRACLE MECHANICS:\nIn 2 Kings 2:19–22, how did Elisha permanently heal the poisonous, barren waters of Jericho?",
    "clues": [
      "The men of the city said the situation was pleasant but the water was bad and ground barren.",
      "Elisha asked for a new cruse with a specific mineral placed within it.",
      "He went forth to the spring of the waters and cast it in."
    ],
    "options": [
      "Elisha cast salt from a new cruse into the spring of the waters",
      "Elisha cast a branch of wild olive into the riverbed",
      "Elisha poured holy anointing oil from the Tabernacle upon the stream",
      "Elisha struck the waters with Elijah's fallen mantle"
    ],
    "correctAnswer": "Elisha cast salt from a new cruse into the spring of the waters",
    "reference": "2 Kings 2:20–22",
    "explanation": "2 Kings 2:20–21: \"And he said, Bring me a new cruse, and put salt therein... And he went forth unto the spring of the waters, and cast the salt in there, and said, Thus saith the LORD, I have healed these waters.\"",
    "hint": "A new cruse containing salt.",
    "difficulty": "Moderate",
    "timerSeconds": 30
  },
  {
    "level": 13,
    "challengeIndex": 3,
    "stage": 3,
    "stageTitle": "Stories and Events",
    "levelTitle": "Miracle Mechanics",
    "puzzleType": "Miracle Mechanics Puzzle",
    "questionText": "MIRACLE MECHANICS:\nIn 2 Kings 4:38–41, during a famine in Gilgal, one of the sons of the prophets gathered poisonous wild gourds into the stew pot causing the men to cry: \"O thou man of God, there is death in the pot.\" How did Elisha neutralize the poison?",
    "clues": [
      "They could not eat thereof due to the noxious wild vine.",
      "Elisha called for a common kitchen ingredient.",
      "He cast it into the pot and said: \"Pour out for the people, that they may eat.\""
    ],
    "options": [
      "Elisha cast meal (flour) into the pot",
      "Elisha poured fresh milk from a heifer into the stew",
      "Elisha threw hyssop dipped in oil into the cauldron",
      "Elisha stirred the pot with an almond branch"
    ],
    "correctAnswer": "Elisha cast meal (flour) into the pot",
    "reference": "2 Kings 4:40–41",
    "explanation": "2 Kings 4:41: \"But he said, Then bring meal. And he cast it into the pot; and he said, Pour out for the people, that they may eat. And there was no harm in the pot.\"",
    "hint": "2 Kings 4:41 specifies bringing meal (flour).",
    "difficulty": "Moderate",
    "timerSeconds": 30
  },
  {
    "level": 13,
    "challengeIndex": 4,
    "stage": 3,
    "stageTitle": "Stories and Events",
    "levelTitle": "Miracle Mechanics",
    "puzzleType": "Miracle Mechanics Puzzle",
    "questionText": "MIRACLE MECHANICS:\nIn 2 Kings 6:1–7, when a son of the prophets was felling timber by Jordan and his borrowed iron ax head fell into deep water, how did Elisha recover it?",
    "clues": [
      "The man cried, \"Alas, master! for it was borrowed.\"",
      "Elisha asked where it fell, cut down a stick, and cast it into that place.",
      "The heavy iron did something physically impossible."
    ],
    "options": [
      "Elisha cast a cut stick into the water and the iron did swim to the surface",
      "Elisha commanded an angel to dive into Jordan and retrieve the iron",
      "Elisha parted the Jordan River waters with his mantle exposing the riverbed",
      "Elisha pulled the iron up with a fishing line and bronze hook"
    ],
    "correctAnswer": "Elisha cast a cut stick into the water and the iron did swim to the surface",
    "reference": "2 Kings 6:5–7",
    "explanation": "2 Kings 6:6: \"And the man of God said, Where fell it? And he shewed him the place. And he cut down a stick, and cast it in thither; and the iron did swim.\"",
    "hint": "A piece of wood caused the heavy iron ax head to swim.",
    "difficulty": "Moderate",
    "timerSeconds": 30
  },
  {
    "level": 13,
    "challengeIndex": 5,
    "stage": 3,
    "stageTitle": "Stories and Events",
    "levelTitle": "Miracle Mechanics",
    "puzzleType": "Miracle Mechanics Puzzle",
    "questionText": "MIRACLE MECHANICS:\nIn 2 Kings 20:7 and Isaiah 38:21, what physical remedy did the prophet Isaiah prescribe to heal King Hezekiah's fatal boil so he could recover?",
    "clues": [
      "Hezekiah was sick unto death with a life-threatening inflamed boil.",
      "Isaiah told the attendants to prepare a poultice from a dried fruit.",
      "They laid it for a plaister upon the boil and he recovered."
    ],
    "options": [
      "A lump of figs laid as a plaster upon the boil",
      "An ointment of myrrh and aloes from Mount Gilead",
      "A washing with water from the Pool of Siloam seven times",
      "A sprinkling with water mingled with ashes of a red heifer"
    ],
    "correctAnswer": "A lump of figs laid as a plaster upon the boil",
    "reference": "2 Kings 20:7; Isaiah 38:21",
    "explanation": "2 Kings 20:7: \"And Isaiah said, Take a lump of figs. And they took and laid it on the boil, and he recovered.\"",
    "hint": "A medicinal poultice of dried figs.",
    "difficulty": "Difficult",
    "timerSeconds": 25
  },
  {
    "level": 14,
    "challengeIndex": 1,
    "stage": 3,
    "stageTitle": "Stories and Events",
    "levelTitle": "Decisive Battles & Strategies",
    "puzzleType": "Battle Strategy Puzzle",
    "questionText": "BATTLE STRATEGY:\nIn 2 Samuel 5:22–25, when the Philistines spread themselves in the Valley of Rephaim, what divine battle signal did God give King David before attacking?",
    "clues": [
      "God told David not to go straight up against them, but to fetch a compass behind them.",
      "David was to wait beside the mulberry trees.",
      "He was to attack when he heard a specific sound in the tops of the trees."
    ],
    "options": [
      "The sound of a going (marching) in the tops of the mulberry trees",
      "A sudden solar eclipse over the Valley of Rephaim",
      "A pillar of fire descending upon the Philistine camp",
      "A loud trumpet blast echoing from Mount Zion"
    ],
    "correctAnswer": "The sound of a going (marching) in the tops of the mulberry trees",
    "reference": "2 Samuel 5:23–24; 1 Chronicles 14:14–15",
    "explanation": "2 Samuel 5:24: \"And let it be, when thou hearest the sound of a going in the tops of the mulberry trees, that then thou shalt bestir thyself: for then shall the LORD go out before thee, to smite the host of the Philistines.\"",
    "hint": "A rustling sound of supernatural marching in the treetops.",
    "difficulty": "Moderate",
    "timerSeconds": 30
  },
  {
    "level": 14,
    "challengeIndex": 2,
    "stage": 3,
    "stageTitle": "Stories and Events",
    "levelTitle": "Decisive Battles & Strategies",
    "puzzleType": "Battle Strategy Puzzle",
    "questionText": "BATTLE STRATEGY:\nIn 2 Chronicles 20, when a massive coalition of Moab, Ammon, and Mount Seir invaded Judah, what unprecedented military front-line strategy did King Jehoshaphat appoint?",
    "clues": [
      "Jahaziel the Levite prophesied: \"The battle is not yours, but God's.\"",
      "Jehoshaphat consulted the people and placed a group before the armed army.",
      "They went out praising the beauty of holiness singing: \"Praise the LORD; for his mercy endureth for ever.\""
    ],
    "options": [
      "He appointed singers to go before the army singing praises to the LORD",
      "He deployed 500 iron scythed chariots imported from Egypt",
      "He dug deep camouflaged pitfall trenches outside Tekoa",
      "He ordered a midnight arson attack on the enemy supply trains"
    ],
    "correctAnswer": "He appointed singers to go before the army singing praises to the LORD",
    "reference": "2 Chronicles 20:21–23",
    "explanation": "2 Chronicles 20:21–22: Jehoshaphat appointed singers unto the LORD to go out before the army. When they began to sing and to praise, the LORD set ambushments and the enemy destroyed one another.",
    "hint": "A choir leading the frontline of the armed soldiers.",
    "difficulty": "Moderate",
    "timerSeconds": 30
  },
  {
    "level": 14,
    "challengeIndex": 3,
    "stage": 3,
    "stageTitle": "Stories and Events",
    "levelTitle": "Decisive Battles & Strategies",
    "puzzleType": "Battle Strategy Puzzle",
    "questionText": "BATTLE STRATEGY:\nIn Judges 3:31, with what single agricultural implement did Shamgar son of Anath slay 600 Philistines and deliver Israel?",
    "clues": [
      "Israel had been disarmed under Philistine oppression without swords or spears.",
      "Shamgar used a long wooden cattle pole with an iron point used by farmers.",
      "It is called an ox goad."
    ],
    "options": [
      "An ox goad",
      "A threshing sledge",
      "A pruning hook",
      "A wooden plowshare"
    ],
    "correctAnswer": "An ox goad",
    "reference": "Judges 3:31",
    "explanation": "Judges 3:31: \"And after him was Shamgar the son of Anath, which slew of the Philistines six hundred men with an ox goad: and he also delivered Israel.\"",
    "hint": "Judges 3:31 explicitly names an ox goad.",
    "difficulty": "Moderate",
    "timerSeconds": 30
  },
  {
    "level": 14,
    "challengeIndex": 4,
    "stage": 3,
    "stageTitle": "Stories and Events",
    "levelTitle": "Decisive Battles & Strategies",
    "puzzleType": "Battle Strategy Puzzle",
    "questionText": "BATTLE STRATEGY:\nIn Joshua 8, what tactical maneuver enabled Joshua to capture and burn the fortified city of Ai after the earlier defeat?",
    "clues": [
      "Joshua placed an ambush of 5,000 men between Bethel and Ai on the west.",
      "Joshua and the main body marched before the city and feigned retreat as before.",
      "When Ai's army abandoned the city to pursue, Joshua held up his spear toward Ai."
    ],
    "options": [
      "A feigned retreat drawing defenders away while a hidden ambush seized the city",
      "A seven-day silent march blowing rams' horns until the walls fell",
      "Tunneling under the city water system from the north",
      "Shooting fire arrows from the surrounding hills of Bethel"
    ],
    "correctAnswer": "A feigned retreat drawing defenders away while a hidden ambush seized the city",
    "reference": "Joshua 8:14–21",
    "explanation": "Joshua 8:14–21 details the tactical double-ambush: Joshua drew the garrison out by pretending to flee; the ambush entered the deserted city and set it on fire.",
    "hint": "A classic tactical feigned retreat combined with a concealed rear ambush.",
    "difficulty": "Moderate",
    "timerSeconds": 30
  },
  {
    "level": 14,
    "challengeIndex": 5,
    "stage": 3,
    "stageTitle": "Stories and Events",
    "levelTitle": "Decisive Battles & Strategies",
    "puzzleType": "Battle Strategy Puzzle",
    "questionText": "BATTLE STRATEGY:\nIn Judges 15:14–17, how did Samson defeat 1,000 Philistines at Lehi after the men of Judah bound him with two new cords?",
    "clues": [
      "The Spirit of the LORD came mightily upon him and the cords melted like flax.",
      "He found a fresh, moist bone of an animal on the ground.",
      "He called the place Ramath-lehi (the lifting up of the jawbone)."
    ],
    "options": [
      "He slew 1,000 men with a new jawbone of an ass",
      "He overturned two central stone pillars of their garrison",
      "He directed 300 foxes with firebrands into their ranks",
      "He threw great hailstones from the rock Etam"
    ],
    "correctAnswer": "He slew 1,000 men with a new jawbone of an ass",
    "reference": "Judges 15:14–17",
    "explanation": "Judges 15:15: \"And he found a new jawbone of an ass, and put forth his hand, and took it, and slew a thousand men therewith.\"",
    "hint": "Judges 15:15: \"a new jawbone of an ass.\"",
    "difficulty": "Difficult",
    "timerSeconds": 25
  },
  {
    "level": 15,
    "challengeIndex": 1,
    "stage": 3,
    "stageTitle": "Stories and Events",
    "levelTitle": "Stories & Events Boss",
    "puzzleType": "Boss Narrative Puzzle",
    "questionText": "BOSS PUZZLE 1:\nIn 1 Kings 18:41–45, after the fire fell on Mount Carmel, how many times did Elijah send his servant toward the sea to look for rain before a small cloud appeared, and what did it look like?",
    "clues": [
      "Elijah cast himself down upon the earth putting his face between his knees in prayer.",
      "He instructed his servant: \"Go up now, look toward the sea.\"",
      "The servant returned multiple times saying, \"There is nothing.\""
    ],
    "options": [
      "Seven times; a little cloud like a man's hand arising out of the sea",
      "Three times; a dark storm cloud covering the whole horizon",
      "Twelve times; a glowing rainbow over the Mediterranean",
      "Forty times; a flock of doves flying toward Jezreel"
    ],
    "correctAnswer": "Seven times; a little cloud like a man's hand arising out of the sea",
    "reference": "1 Kings 18:43–44",
    "explanation": "1 Kings 18:43–44: Elijah told him to go seven times. On the seventh time, the servant reported: \"Behold, there ariseth a little cloud out of the sea, like a man's hand.\"",
    "hint": "Seven prayers produced a cloud the size of a man's hand.",
    "difficulty": "Mini-boss",
    "timerSeconds": 25
  },
  {
    "level": 15,
    "challengeIndex": 2,
    "stage": 3,
    "stageTitle": "Stories and Events",
    "levelTitle": "Stories & Events Boss",
    "puzzleType": "Boss Narrative Puzzle",
    "questionText": "BOSS PUZZLE 2:\nIn 2 Kings 7:3–8, who were the unlikely individuals who first discovered that the besieging Syrian army had abandoned their tents, horses, and food outside famine-stricken Samaria?",
    "clues": [
      "They sat at the entering in of the city gate because of their diseased condition.",
      "They reasoned: \"Why sit we here until we die? If we enter the city, famine is there; if we sit here, we die also.\"",
      "They resolved to surrender to the Syrian camp and found it completely deserted."
    ],
    "options": [
      "Four leprous men sitting at the entering in of the city gate",
      "Two young royal cupbearers sent by King Jehoram",
      "Elisha's servant Gehazi accompanied by sons of the prophets",
      "A band of Roman merchants traveling from Damascus"
    ],
    "correctAnswer": "Four leprous men sitting at the entering in of the city gate",
    "reference": "2 Kings 7:3–8",
    "explanation": "2 Kings 7:3–8: Four leprous men at the city gate entered the Syrian camp at twilight discovering that the LORD had made the Syrians hear the noise of chariots, causing them to flee and leave all their riches.",
    "hint": "Four outcast lepers at the entrance of Samaria.",
    "difficulty": "Mini-boss",
    "timerSeconds": 25
  },
  {
    "level": 15,
    "challengeIndex": 3,
    "stage": 3,
    "stageTitle": "Stories and Events",
    "levelTitle": "Stories & Events Boss",
    "puzzleType": "Boss Narrative Puzzle",
    "questionText": "BOSS PUZZLE 3:\nIn Genesis 22:1–14, what was the name Abraham gave to the mountain where God provided the ram caught in a thicket instead of Isaac, and what does the name mean?",
    "clues": [
      "Abraham stretched forth his hand and took the knife to slay his son.",
      "The angel of the LORD stopped him calling from heaven.",
      "Abraham lifted up his eyes and saw behind him a ram caught by its horns."
    ],
    "options": [
      "Jehovah-jireh (\"The LORD will provide / In the mount of the LORD it shall be seen\")",
      "Jehovah-nissi (\"The LORD is my banner\")",
      "Jehovah-shalom (\"The LORD our peace\")",
      "El-bethel (\"God of the house of God\")"
    ],
    "correctAnswer": "Jehovah-jireh (\"The LORD will provide / In the mount of the LORD it shall be seen\")",
    "reference": "Genesis 22:13–14",
    "explanation": "Genesis 22:14: \"And Abraham called the name of that place Jehovah-jireh: as it is said to this day, In the mount of the LORD it shall be seen.\"",
    "hint": "Genesis 22:14: \"Jehovah-jireh.\"",
    "difficulty": "Mini-boss",
    "timerSeconds": 20
  },
  {
    "level": 15,
    "challengeIndex": 4,
    "stage": 3,
    "stageTitle": "Stories and Events",
    "levelTitle": "Stories & Events Boss",
    "puzzleType": "Boss Narrative Puzzle",
    "questionText": "BOSS PUZZLE 4:\nIn Acts 20:7–12, at what city was Paul preaching a farewell sermon until midnight when a young man named Eutychus fell asleep in the third-story window and fell down dead?",
    "clues": [
      "The believers were gathered on the first day of the week to break bread.",
      "There were many lights in the upper chamber.",
      "Paul went down, fell on him, embraced him, and said: \"Trouble not yourselves; for his life is in him.\""
    ],
    "options": [
      "Troas",
      "Ephesus",
      "Miletus",
      "Philippi"
    ],
    "correctAnswer": "Troas",
    "reference": "Acts 20:6–10",
    "explanation": "Acts 20:6–9 records that Paul tarried seven days at Troas, preaching in an upper chamber until midnight when Eutychus fell from the third loft and was raised alive.",
    "hint": "Acts 20:6: \"and came unto them to Troas in five days; where we abode seven days.\"",
    "difficulty": "Mini-boss",
    "timerSeconds": 20
  },
  {
    "level": 15,
    "challengeIndex": 5,
    "stage": 3,
    "stageTitle": "Stories and Events",
    "levelTitle": "Stories & Events Boss",
    "puzzleType": "Boss Narrative Puzzle",
    "questionText": "BOSS PUZZLE 5 (Stage 3 Finale):\nIn 1 Kings 13:1–5, when King Jeroboam stood by the altar in Bethel to burn incense, an unnamed man of God from Judah cried out against the altar. What two immediate signs occurred when Jeroboam reached out his hand shouting \"Lay hold on him\"?",
    "clues": [
      "The king's outstretched hand immediately dried up so that he could not pull it in again.",
      "The stone altar was violently rent and the ashes poured out according to the sign.",
      "The humbled king begged the man of God to entreat the LORD to restore his hand."
    ],
    "options": [
      "Jeroboam's hand withered stiff and the altar rent spilling its ashes",
      "Fire consumed Jeroboam's royal guard and the temple doors melted",
      "A swarm of locusts devoured the sacrifice and an eclipse occurred",
      "The earth opened swallowing the priests of the golden calf"
    ],
    "correctAnswer": "Jeroboam's hand withered stiff and the altar rent spilling its ashes",
    "reference": "1 Kings 13:4–6",
    "explanation": "1 Kings 13:4–5: Jeroboam's hand dried up so that he could not pull it back, and the altar was rent and ashes poured out, exactly as the prophet had foretold.",
    "hint": "A withered paralyzed arm and a shattered altar spilling ashes.",
    "difficulty": "Mini-boss",
    "timerSeconds": 20
  }
];
