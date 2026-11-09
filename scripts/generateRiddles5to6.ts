import fs from 'fs';
import path from 'path';
import type { RawRiddleQuestion } from './riddlesStages1to2';

const batch3Questions: RawRiddleQuestion[] = [
  // ==========================================
  // STAGE 5: THE THREE-CLUE CHALLENGE (Levels 21–25)
  // ==========================================

  // Level 21: Patriarchs & Matriarchs
  {
    level: 21,
    challengeIndex: 1,
    stage: 5,
    stageTitle: 'The Three-Clue Challenge',
    levelTitle: 'Patriarchs & Matriarchs',
    riddleType: 'The Three-Clue Riddle',
    isTyped: false,
    questionText: 'THE THREE-CLUE CHALLENGE:\nClue 1: I was the seventh generation from Adam through Seth, father of the longest-living man recorded in Scripture.\nClue 2: I walked faithfully with God in a wicked generation for three hundred years.\nClue 3: I did not taste physical death, for Scripture records simply: "and he was not, for God took him." Who am I?',
    clues: [
      'Father of Methuselah who lived 969 years.',
      'Hebrews 11:5 commends me for having pleased God before being taken up.',
      'Jude 14–15 quotes my ancient prophecy concerning the Lord coming with ten thousands of holy ones.'
    ],
    options: ['Enoch', 'Noah', 'Lamech', 'Seth'],
    correctAnswer: 'Enoch',
    acceptedAlternatives: ['Henoch'],
    reference: 'Genesis 5:21–24; Hebrews 11:5; Jude 1:14–15',
    explanation: 'Enoch walked with God for 300 years and was taken directly into heaven without experiencing death.',
    hint: 'Seventh from Adam who walked with God and did not see death.',
    testament: 'Old Testament',
    difficulty: 'easy',
    timerSeconds: 30
  },
  {
    level: 21,
    challengeIndex: 2,
    stage: 5,
    stageTitle: 'The Three-Clue Challenge',
    levelTitle: 'Patriarchs & Matriarchs',
    riddleType: 'The Three-Clue Riddle',
    isTyped: false,
    questionText: 'THE THREE-CLUE CHALLENGE:\nClue 1: I was both a king and a priest of the Most High God in ancient Canaan before the Levitical priesthood existed.\nClue 2: I met Abraham after his victory over Chedorlaomer and the Mesopotamian kings, bringing out bread and wine to refresh him.\nClue 3: I pronounced a divine blessing upon Abraham, and the patriarch gave me a tenth (tithe) of all the spoils. Who am I?',
    clues: [
      'King of Salem (peace) and priest of El Elyon.',
      'Described in Hebrews 7 as without recorded father, mother, or genealogy, resembling the Son of God.',
      'Jesus is declared an eternal High Priest after my order in Psalm 110:4.'
    ],
    options: ['Melchizedek', 'Abimelech', 'Jethro', 'Balaam'],
    correctAnswer: 'Melchizedek',
    acceptedAlternatives: ['Melchisedec', 'Malki-Tzedek'],
    reference: 'Genesis 14:18–20; Psalm 110:4; Hebrews 7:1–17',
    explanation: 'Melchizedek, king of Salem and priest of God Most High, blessed Abraham with bread and wine and received his tithes.',
    hint: 'King of Salem and priest of God Most High to whom Abraham gave a tithe.',
    testament: 'Old Testament',
    difficulty: 'medium',
    timerSeconds: 30
  },
  {
    level: 21,
    challengeIndex: 3,
    stage: 5,
    stageTitle: 'The Three-Clue Challenge',
    levelTitle: 'Patriarchs & Matriarchs',
    riddleType: 'The Three-Clue Riddle',
    isTyped: false,
    questionText: 'THE THREE-CLUE CHALLENGE:\nClue 1: I was approached by an elderly servant at a well outside the city of Nahor in Aram-naharaim.\nClue 2: When asked for a sip of water from my pitcher, I immediately drew enough water to quench the thirst of all ten of his thirsty camels.\nClue 3: The servant gave me a gold nose ring and two gold bracelets, realizing God had appointed me as the bride for his master’s son Isaac. Who am I?',
    clues: [
      'Daughter of Bethuel, sister of Laban.',
      'Traveled on camels to Canaan and veiled myself when seeing Isaac in the field at evening.',
      'Mother of twin brothers Jacob and Esau.'
    ],
    options: ['Rebekah', 'Rachel', 'Leah', 'Keturah'],
    correctAnswer: 'Rebekah',
    acceptedAlternatives: ['Rebecca'],
    reference: 'Genesis 24:10–67; 25:21–26',
    explanation: 'Rebekah fulfilled Eliezer’s prayer by watering all ten camels at the well and became the beloved wife of Isaac.',
    hint: 'Bride of Isaac chosen at the well after watering ten camels.',
    testament: 'Old Testament',
    difficulty: 'easy',
    timerSeconds: 30
  },
  {
    level: 21,
    challengeIndex: 4,
    stage: 5,
    stageTitle: 'The Three-Clue Challenge',
    levelTitle: 'Patriarchs & Matriarchs',
    riddleType: 'The Three-Clue Riddle',
    isTyped: false,
    questionText: 'THE THREE-CLUE CHALLENGE:\nClue 1: I was the older daughter of Laban who had tender, delicate eyes, while my younger sister was beautiful in form and face.\nClue 2: My father substituted me under the wedding veil by night, causing Jacob to wake up in the morning and realize he was married to me.\nClue 3: Though unloved by my husband, God opened my womb to bear six of Israel’s twelve tribes, including Judah (the royal messianic tribe) and Levi (the priestly tribe). Who am I?',
    clues: [
      'Mother of Reuben, Simeon, Levi, Judah, Issachar, and Zebulun.',
      'Named my fourth son Judah, declaring: "This time I will praise the Lord."',
      'Buried in the cave of Machpelah alongside Abraham, Sarah, Isaac, and Rebekah.'
    ],
    options: ['Leah', 'Rachel', 'Bilhah', 'Zilpah'],
    correctAnswer: 'Leah',
    acceptedAlternatives: ['Lia'],
    reference: 'Genesis 29:16–35; 49:31',
    explanation: 'Leah was Jacob’s unloved first wife who bore him six sons including Judah and Levi, and was buried in the family tomb at Machpelah.',
    hint: 'Jacob’s first wife, older sister of Rachel, mother of Judah and Levi.',
    testament: 'Old Testament',
    difficulty: 'easy',
    timerSeconds: 30
  },
  {
    level: 21,
    challengeIndex: 5,
    stage: 5,
    stageTitle: 'The Three-Clue Challenge',
    levelTitle: 'Patriarchs & Matriarchs',
    riddleType: 'Type Two Answers',
    isTyped: true,
    questionText: 'TYPE TWO ANSWERS — MINI-BOSS RIDDLE:\nWhen dying Jacob blessed the two Egyptian-born sons of Joseph in Genesis 48, Joseph placed the firstborn on Jacob’s right hand and the younger on his left. However, Jacob deliberately crossed his hands, laying his right hand on the younger brother and his left on the firstborn, prophesying that the younger would become greater and his offspring a multitude of nations. What are the names of these two sons of Joseph (firstborn and younger)?',
    clues: [
      'Born in Egypt to Joseph by Asenath, daughter of Potiphera priest of On.',
      'Older son’s name means "God has made me forget all my hardship."',
      'Younger son’s name means "God has made me fruitful in the land of my affliction."',
      'Their two names became major tribal territories in Israel replacing Joseph.'
    ],
    options: [
      'Manasseh and Ephraim',
      'Ephraim and Manasseh',
      'Gershom and Eliezer',
      'Perez and Zerah'
    ],
    correctAnswer: 'Manasseh and Ephraim',
    acceptedAlternatives: [
      'Ephraim and Manasseh',
      'Manasseh & Ephraim',
      'Ephraim & Manasseh',
      'Manasseh, Ephraim'
    ],
    reference: 'Genesis 41:50–52; 48:1–20',
    explanation: 'Joseph’s two sons were Manasseh (firstborn) and Ephraim (younger); Jacob crossed his hands to bestow the firstborn blessing on Ephraim.',
    hint: 'Two sons of Joseph over whom Jacob crossed his hands to give the primary blessing to the younger.',
    testament: 'Old Testament',
    difficulty: 'medium',
    timerSeconds: 25
  },

  // Level 22: Judges & Deliverers
  {
    level: 22,
    challengeIndex: 1,
    stage: 5,
    stageTitle: 'The Three-Clue Challenge',
    levelTitle: 'Judges & Deliverers',
    riddleType: 'The Three-Clue Riddle',
    isTyped: false,
    questionText: 'THE THREE-CLUE CHALLENGE:\nClue 1: I was beating out wheat in a winepress in Ophrah to hide it from Midianite raiders when an angel greeted me: "The Lord is with you, O mighty man of valor!"\nClue 2: I tore down my father’s altar of Baal and the Asherah beside it by night, earning the nickname Jerubbaal ("Let Baal contend against him").\nClue 3: I confirmed God’s calling through a fleece of wool that was soaked while the ground was dry, and then dry while the ground was wet. Who am I?',
    clues: [
      'Son of Joash the Abiezrite.',
      'Led 300 men with trumpets and torches in empty jars.',
      'Refused the crown of Israel, saying: "The Lord will rule over you."'
    ],
    options: ['Gideon', 'Jephthah', 'Barak', 'Samson'],
    correctAnswer: 'Gideon',
    acceptedAlternatives: ['Jerubbaal', 'Gedeon'],
    reference: 'Judges 6:11–40; 7:1–25; 8:22–23',
    explanation: 'Gideon was the reluctant judge who tested God with the fleece of wool, destroyed Baal’s altar, and routed Midian with 300 men.',
    hint: 'Judge who hid wheat in a winepress and used the fleece of wool.',
    testament: 'Old Testament',
    difficulty: 'easy',
    timerSeconds: 30
  },
  {
    level: 22,
    challengeIndex: 2,
    stage: 5,
    stageTitle: 'The Three-Clue Challenge',
    levelTitle: 'Judges & Deliverers',
    riddleType: 'The Three-Clue Riddle',
    isTyped: false,
    questionText: 'THE THREE-CLUE CHALLENGE:\nClue 1: I was a Danite man of Zorah whose wife was barren and had borne no children.\nClue 2: The Angel of the Lord appeared to my wife and later to both of us, giving instructions that our promised son must be a Nazirite from the womb.\nClue 3: When I offered a young goat on a rock altar to the Lord, the Angel did a wondrous thing and ascended to heaven in the very flame of the altar, causing my wife and me to fall on our faces. Who am I?',
    clues: [
      'Father of Samson.',
      'Asked the Angel of the Lord: "What is your name, so that when your words come true we may honor you?"',
      'Said in terror: "We shall surely die, for we have seen God."'
    ],
    options: ['Manoah', 'Elkanah', 'Kish', 'Jesse'],
    correctAnswer: 'Manoah',
    acceptedAlternatives: ['Manoe'],
    reference: 'Judges 13:2–24',
    explanation: 'Manoah was Samson’s father who witnessed the Angel of the Lord ascend to heaven in the sacrificial altar flame.',
    hint: 'Father of Samson who saw the Angel of the Lord ascend in the altar flame.',
    testament: 'Old Testament',
    difficulty: 'medium',
    timerSeconds: 30
  },
  {
    level: 22,
    challengeIndex: 3,
    stage: 5,
    stageTitle: 'The Three-Clue Challenge',
    levelTitle: 'Judges & Deliverers',
    riddleType: 'The Three-Clue Riddle',
    isTyped: false,
    questionText: 'THE THREE-CLUE CHALLENGE:\nClue 1: I was a military general summoned by the prophetess Deborah to assemble ten thousand men of Naphtali and Zebulun at Mount Tabor.\nClue 2: I hesitated and told Deborah, "If you will go with me, I will go; but if you will not go with me, I will not go."\nClue 3: Because of my hesitation, Deborah prophesied that the honor of the day would not be mine, for the Lord would sell the opposing commander Sisera into the hand of a woman. Who am I?',
    clues: [
      'Son of Abinoam of Kedesh-naphtali.',
      'Celebrated in the victory song of Judges 5.',
      'Listed among the heroes of faith in Hebrews 11:32.'
    ],
    options: ['Barak', 'Gideon', 'Jephthah', 'Abdon'],
    correctAnswer: 'Barak',
    acceptedAlternatives: ['Barac'],
    reference: 'Judges 4:6–16; Hebrews 11:32',
    explanation: 'Barak was the general who defeated Sisera’s army at Mount Tabor after insisting that Deborah accompany him.',
    hint: 'Commander who refused to go to battle without Deborah.',
    testament: 'Old Testament',
    difficulty: 'medium',
    timerSeconds: 30
  },
  {
    level: 22,
    challengeIndex: 4,
    stage: 5,
    stageTitle: 'The Three-Clue Challenge',
    levelTitle: 'Judges & Deliverers',
    riddleType: 'The Three-Clue Riddle',
    isTyped: false,
    questionText: 'THE THREE-CLUE CHALLENGE:\nClue 1: I was a Nazarite from birth endowed with supernatural physical strength whenever the Spirit of the Lord rushed upon me.\nClue 2: I tore a young lion apart with my bare hands, carried away the city gates of Gaza on my shoulders, and slew a thousand men with a donkey’s jawbone.\nClue 3: Blinded and mocked in the temple of Dagon after my hair was shorn, I prayed for one final surge of strength, pushed against the two middle pillars, and killed more at my death than in my entire life. Who am I?',
    clues: [
      'Betrayed by Delilah in the Valley of Sorek for eleven hundred pieces of silver from each Philistine lord.',
      'Judged Israel for twenty years in the days of the Philistines.',
      'Pushed the central pillars of Dagon’s temple, bringing down the roof on 3,000 Philistines.'
    ],
    options: ['Samson', 'Ehud', 'Gideon', 'Jephthah'],
    correctAnswer: 'Samson',
    acceptedAlternatives: ['Shimshon'],
    reference: 'Judges 13:24–16:31; Hebrews 11:32',
    explanation: 'Samson was the mighty Nazirite judge who brought down the temple of Dagon upon the Philistines at his death.',
    hint: 'Nazirite judge of superhuman strength who brought down Dagon’s temple.',
    testament: 'Old Testament',
    difficulty: 'easy',
    timerSeconds: 30
  },
  {
    level: 22,
    challengeIndex: 5,
    stage: 5,
    stageTitle: 'The Three-Clue Challenge',
    levelTitle: 'Judges & Deliverers',
    riddleType: 'Type the Name',
    isTyped: true,
    questionText: 'TYPE THE NAME — MINI-BOSS RIDDLE:\nI was a judge of Israel from Pirathon in the land of Ephraim. Scripture highlights my prominent patriarchal status and wealth by noting that I had forty sons and thirty grandsons who rode on seventy donkeys (colts). I led Israel for eight years before dying and being buried in my native hill country of Ephraim, in the hill country of the Amalekites. Who am I?',
    clues: [
      'Son of Hillel the Pirathonite.',
      'Judged Israel for eight peaceful years.',
      'Described in Judges 12:13–15.'
    ],
    options: ['Abdon', 'Ibzan', 'Elon', 'Tola'],
    correctAnswer: 'Abdon',
    acceptedAlternatives: ['Abdon son of Hillel'],
    reference: 'Judges 12:13–15',
    explanation: 'Abdon son of Hillel the Pirathonite judged Israel eight years and had 40 sons and 30 grandsons who rode on 70 donkeys.',
    hint: 'Minor judge whose 40 sons and 30 grandsons rode on seventy donkeys.',
    testament: 'Old Testament',
    difficulty: 'master',
    timerSeconds: 25
  },

  // Level 23: Kings of the Divided Monarchy
  {
    level: 23,
    challengeIndex: 1,
    stage: 5,
    stageTitle: 'The Three-Clue Challenge',
    levelTitle: 'Kings of the Divided Monarchy',
    riddleType: 'The Three-Clue Riddle',
    isTyped: false,
    questionText: 'THE THREE-CLUE CHALLENGE:\nClue 1: I was Solomon’s son who traveled to Shechem to be crowned king over all Israel.\nClue 2: When the northern tribes asked for relief from heavy taxes, I rejected the counsel of the older elders and listened to the young men who grew up with me, boasting: "My father made your yoke heavy, but I will add to your yoke; my father disciplined you with whips, but I will discipline you with scorpions."\nClue 3: Ten tribes revolted under Jeroboam, leaving me to rule over only Judah and Benjamin. Who am I?',
    clues: [
      'Son of Solomon by Naamah the Ammonitess.',
      'Sent Adoram who was over the forced labor, and Israel stoned him to death.',
      'Fled in his chariot to Jerusalem as the kingdom permanently fractured.'
    ],
    options: ['Rehoboam', 'Jeroboam', 'Abijah', 'Asa'],
    correctAnswer: 'Rehoboam',
    acceptedAlternatives: ['Roboam'],
    reference: '1 Kings 12:1–24; 2 Chronicles 10:1–19',
    explanation: 'Rehoboam, son of Solomon, foolishly threatened the people with heavier yokes, precipitating the division of the kingdom.',
    hint: 'Solomon’s son whose harsh answer caused ten tribes to break away.',
    testament: 'Old Testament',
    difficulty: 'easy',
    timerSeconds: 30
  },
  {
    level: 23,
    challengeIndex: 2,
    stage: 5,
    stageTitle: 'The Three-Clue Challenge',
    levelTitle: 'Kings of the Divided Monarchy',
    riddleType: 'The Three-Clue Riddle',
    isTyped: false,
    questionText: 'THE THREE-CLUE CHALLENGE:\nClue 1: I was an Ephraimite servant of Solomon whose industry won me charge of all the forced labor of the house of Joseph.\nClue 2: Promised ten tribes by the prophet Ahijah, I became the first king of the northern kingdom of Israel.\nClue 3: Fearing that my subjects would return their loyalty to the house of David if they went to Jerusalem to worship, I forged two golden calves and set them up at Bethel and Dan, declaring: "Behold your gods, O Israel, who brought you up out of the land of Egypt!" Who am I?',
    clues: [
      'Son of Nebat.',
      'Instituted a non-Levitical priesthood and an unbiblical feast in the eighth month.',
      'Every subsequent wicked northern king was said to have walked "in the way of [...], son of Nebat, who made Israel to sin."'
    ],
    options: ['Jeroboam', 'Rehoboam', 'Baasha', 'Omri'],
    correctAnswer: 'Jeroboam',
    acceptedAlternatives: ['Jeroboam I', 'Jeroboam son of Nebat'],
    reference: '1 Kings 11:26–40; 12:25–33',
    explanation: 'Jeroboam I, son of Nebat, built golden calves at Bethel and Dan to prevent his northern subjects from worshiping in Jerusalem.',
    hint: 'First king of northern Israel who erected golden calves at Bethel and Dan.',
    testament: 'Old Testament',
    difficulty: 'easy',
    timerSeconds: 30
  },
  {
    level: 23,
    challengeIndex: 3,
    stage: 5,
    stageTitle: 'The Three-Clue Challenge',
    levelTitle: 'Kings of the Divided Monarchy',
    riddleType: 'The Three-Clue Riddle',
    isTyped: false,
    questionText: 'THE THREE-CLUE CHALLENGE:\nClue 1: I was a godly king of Judah who shattered the bronze serpent Nehushtan, smashed pagan pillars, and cleansed the temple.\nClue 2: When Sennacherib king of Assyria besieged Jerusalem, I spread his blasphemous letter before the Lord in the temple and prayed; that night, the Angel of the Lord struck down 185,000 Assyrian soldiers in their camp.\nClue 3: When struck with a fatal illness, I wept bitterly, and Isaiah returned with the promise of fifteen more years of life, confirmed by the shadow going backward ten steps on the sundial of Ahaz. Who am I?',
    clues: [
      'Son of King Ahaz.',
      'Built the famous subterranean water conduit in Jerusalem from Gihon to Siloam.',
      'Showed all the royal palace treasures to ambassadors from Babylon.'
    ],
    options: ['Hezekiah', 'Josiah', 'Jehoshaphat', 'Uzziah'],
    correctAnswer: 'Hezekiah',
    acceptedAlternatives: ['Ezekias'],
    reference: '2 Kings 18:1–20:21; Isaiah 36:1–39:8; 2 Chronicles 29:1–32:33',
    explanation: 'King Hezekiah trusted God against Sennacherib, saw 185,000 Assyrians slain by an angel, and was granted 15 extra years of life.',
    hint: 'Good king granted 15 extra years whose sundial went backward ten steps.',
    testament: 'Old Testament',
    difficulty: 'easy',
    timerSeconds: 30
  },
  {
    level: 23,
    challengeIndex: 4,
    stage: 5,
    stageTitle: 'The Three-Clue Challenge',
    levelTitle: 'Kings of the Divided Monarchy',
    riddleType: 'The Three-Clue Riddle',
    isTyped: false,
    questionText: 'THE THREE-CLUE CHALLENGE:\nClue 1: I was crowned king of Judah at eight years old after my father Amon was assassinated.\nClue 2: During temple renovations in my eighteenth year, Hilkiah the high priest discovered the long-lost Book of the Law; when it was read to me, I tore my clothes in deep repentance.\nClue 3: I led the greatest covenant renewal and Passover celebration since the days of Samuel, destroying altars at Bethel and grinding pagan idols to dust. Who am I?',
    clues: [
      'Prophesied by name three centuries earlier by an unnamed prophet at Jeroboam’s altar (1 Kings 13:2).',
      'Consulted the prophetess Huldah concerning the judgment against Judah.',
      'Fatally wounded by archers at the Battle of Megiddo while opposing Pharaoh Neco of Egypt.'
    ],
    options: ['Josiah', 'Hezekiah', 'Joash', 'Asa'],
    correctAnswer: 'Josiah',
    acceptedAlternatives: ['Josias'],
    reference: '2 Kings 22:1–23:30; 2 Chronicles 34:1–35:27',
    explanation: 'Josiah became king at eight, rediscovered the Book of the Law, purged idolatry, and held an unprecedented Passover.',
    hint: 'Boy king of Judah who rediscovered the Law and launched nationwide reform.',
    testament: 'Old Testament',
    difficulty: 'easy',
    timerSeconds: 30
  },
  {
    level: 23,
    challengeIndex: 5,
    stage: 5,
    stageTitle: 'The Three-Clue Challenge',
    levelTitle: 'Kings of the Divided Monarchy',
    riddleType: 'Type the Name',
    isTyped: true,
    questionText: 'TYPE THE NAME — MINI-BOSS RIDDLE:\nI was the longest-reigning monarch in the history of Judah, ruling for fifty-five years in Jerusalem. I rebuilt the high places my father Hezekiah had torn down, erected altars for Baal, sacrificed my own son in the fire in the Valley of Ben-Hinnom, practiced sorcery, set up a carved idol in the house of the Lord, and shed very much innocent blood. Captured by the king of Assyria with hooks and bronze chains and dragged to Babylon, I humbled myself greatly before God in my distress, prayed, and was miraculously restored to my throne in Jerusalem, where I removed foreign gods from the temple. Who am I?',
    clues: [
      'Son of King Hezekiah.',
      'Succeeded by his son Amon, father of Josiah.',
      'His remarkable repentance in exile is detailed specifically in 2 Chronicles 33:10–19.'
    ],
    options: ['Manasseh', 'Amon', 'Jehoram', 'Ahaz'],
    correctAnswer: 'Manasseh',
    acceptedAlternatives: ['Manasses'],
    reference: '2 Kings 21:1–18; 2 Chronicles 33:1–20',
    explanation: 'Manasseh ruled 55 wicked years in Judah, was led into Babylonian captivity with hooks, repented in agony, and was restored by God.',
    hint: 'Judah’s longest-reigning king (55 years) who repented after being taken with hooks to Babylon.',
    testament: 'Old Testament',
    difficulty: 'hard',
    timerSeconds: 25
  },

  // Level 24: Exilic & Post-Exilic Figures
  {
    level: 24,
    challengeIndex: 1,
    stage: 5,
    stageTitle: 'The Three-Clue Challenge',
    levelTitle: 'Exilic & Post-Exilic Figures',
    riddleType: 'The Three-Clue Riddle',
    isTyped: false,
    questionText: 'THE THREE-CLUE CHALLENGE:\nClue 1: I was taken captive from Judah to Babylon as a youth of noble birth and given the Babylonian name Belteshazzar.\nClue 2: I resolved not to defile myself with the king’s royal food and wine, thriving on vegetables and water.\nClue 3: God gave me understanding in all visions and dreams; I interpreted Nebuchadnezzar’s forgotten dream of the colossal statue and spent a night untouched in a den of hungry lions. Who am I?',
    clues: [
      'Survived the rise and fall of both the Babylonian and Medo-Persian empires.',
      'Interpreted the supernatural handwriting on the wall for Belshazzar.',
      'Prophesied the seventy weeks and the timeline of the Messiah.'
    ],
    options: ['Daniel', 'Ezekiel', 'Nehemiah', 'Mordecai'],
    correctAnswer: 'Daniel',
    acceptedAlternatives: ['Belteshazzar'],
    reference: 'Daniel 1:1–21; 2:1–49; 5:1–30; 6:1–28',
    explanation: 'Daniel was the noble Hebrew captive in Babylon who interpreted royal dreams and survived the lions’ den unharmed.',
    hint: 'Hebrew prophet in Babylon who survived the lions’ den.',
    testament: 'Old Testament',
    difficulty: 'easy',
    timerSeconds: 30
  },
  {
    level: 24,
    challengeIndex: 2,
    stage: 5,
    stageTitle: 'The Three-Clue Challenge',
    levelTitle: 'Exilic & Post-Exilic Figures',
    riddleType: 'The Three-Clue Riddle',
    isTyped: false,
    questionText: 'THE THREE-CLUE CHALLENGE:\nClue 1: I served as cupbearer to King Artaxerxes in the Persian winter palace at Susa.\nClue 2: When I wept over news that the walls of Jerusalem were broken down and its gates burned with fire, the king granted me letters and timber to rebuild the city.\nClue 3: Despite armed threats and mockery from Sanballat, Tobiah, and Geshem, my builders labored with a trowel in one hand and a weapon in the other, completing the broken walls in just fifty-two days. Who am I?',
    clues: [
      'Served as governor of Judah for twelve years without taking the governor’s food tax.',
      'Enforced debt relief for poor Jewish farmers.',
      'Purged the temple chambers of Tobiah the Ammonite.'
    ],
    options: ['Nehemiah', 'Ezra', 'Zerubbabel', 'Sanballat'],
    correctAnswer: 'Nehemiah',
    acceptedAlternatives: ['Nehemias'],
    reference: 'Nehemiah 1:1–11; 2:1–20; 4:1–23; 6:15–16',
    explanation: 'Nehemiah was Artaxerxes’ cupbearer who rebuilt Jerusalem’s walls in 52 days and served as governor of Judah.',
    hint: 'Persian cupbearer who rebuilt the walls of Jerusalem in 52 days.',
    testament: 'Old Testament',
    difficulty: 'easy',
    timerSeconds: 30
  },
  {
    level: 24,
    challengeIndex: 3,
    stage: 5,
    stageTitle: 'The Three-Clue Challenge',
    levelTitle: 'Exilic & Post-Exilic Figures',
    riddleType: 'The Three-Clue Riddle',
    isTyped: false,
    questionText: 'THE THREE-CLUE CHALLENGE:\nClue 1: I was a Benjamite living in Susa who adopted and raised my orphaned younger cousin Hadassah (Esther).\nClue 2: While sitting at the king’s gate, I uncovered an assassination plot by Bigthan and Teresh against King Ahasuerus.\nClue 3: I refused to bow down or pay homage to the proud Agagite prime minister Haman, and urged Esther: "Who knows whether you have not come to the kingdom for such a time as this?" Who am I?',
    clues: [
      'Son of Jair, son of Shimei, son of Kish, a Benjamite.',
      'Paraded through the city square on the king’s horse wearing royal robes led by Haman.',
      'Promoted to second in rank to King Ahasuerus and instituted the Feast of Purim.'
    ],
    options: ['Mordecai', 'Haman', 'Hegai', 'Memucan'],
    correctAnswer: 'Mordecai',
    acceptedAlternatives: ['Mordechai'],
    reference: 'Esther 2:5–23; 3:1–6; 4:12–14; 6:10–11; 10:2–3',
    explanation: 'Mordecai raised Esther, exposed a royal plot, refused to bow to Haman, and was elevated to second in command in Persia.',
    hint: 'Esther’s cousin who refused to bow to Haman and instituted Purim.',
    testament: 'Old Testament',
    difficulty: 'easy',
    timerSeconds: 30
  },
  {
    level: 24,
    challengeIndex: 4,
    stage: 5,
    stageTitle: 'The Three-Clue Challenge',
    levelTitle: 'Exilic & Post-Exilic Figures',
    riddleType: 'The Three-Clue Riddle',
    isTyped: false,
    questionText: 'THE THREE-CLUE CHALLENGE:\nClue 1: I was a grandson of King Jehoiachin (Jeconiah) of the Davidic royal line who was appointed governor of Judah by Cyrus the Great.\nClue 2: I led the first wave of 42,360 Jewish exiles returning from Babylon to Jerusalem in 538 BC and laid the foundations of the Second Temple.\nClue 3: Through the prophets Haggai and Zechariah, God declared that the mountain of opposition would become a plain before me, "Not by might, nor by power, but by my Spirit," and promised to make me like a signet ring. Who am I?',
    clues: [
      'Son of Shealtiel (Pedaiah).',
      'Partnered with Joshua son of Jehozadak the high priest.',
      'Brought out the temple capstone amid shouts of "Grace, grace to it!"'
    ],
    options: ['Zerubbabel', 'Ezra', 'Nehemiah', 'Sheshbazzar'],
    correctAnswer: 'Zerubbabel',
    acceptedAlternatives: ['Zorobabel'],
    reference: 'Ezra 2:1–2; 3:8–10; Haggai 2:20–23; Zechariah 4:6–10',
    explanation: 'Zerubbabel of the Davidic line led the first return from Babylon, laid the temple foundation, and completed the Second Temple.',
    hint: 'Davidic governor who led the first return from exile and built the Second Temple.',
    testament: 'Old Testament',
    difficulty: 'medium',
    timerSeconds: 30
  },
  {
    level: 24,
    challengeIndex: 5,
    stage: 5,
    stageTitle: 'The Three-Clue Challenge',
    levelTitle: 'Exilic & Post-Exilic Figures',
    riddleType: 'Type the Name',
    isTyped: true,
    questionText: 'TYPE THE NAME — MINI-BOSS RIDDLE:\nI was a descendant of Aaron the high priest and a priest-scribe skilled in the Law of Moses that Yahweh had given. In 458 BC, King Artaxerxes granted me a royal decree to lead a second return of Jewish exiles from Babylon to Jerusalem. Scripture records that I had set my heart to study the Law of the Lord, and to do it and to teach his statutes and rules in Israel. When I discovered pervasive intermarriage with foreign idolaters, I tore my tunic and mantle, pulled hair from my head and beard, and sat down appalled until the evening sacrifice. Who am I?',
    clues: [
      'Descendant of Phinehas and Zadok.',
      'Refused a royal military escort across the desert, declaring: "The hand of our God is for good on all who seek him."',
      'Stood upon a wooden pulpit reading the Law of Moses to all the people from daybreak until midday (Nehemiah 8).'
    ],
    options: ['Ezra', 'Nehemiah', 'Zadok', 'Hilkiah'],
    correctAnswer: 'Ezra',
    acceptedAlternatives: ['Esdras', 'Ezra the Scribe', 'Ezra the Priest'],
    reference: 'Ezra 7:1–10, 27–28; 8:21–23; 9:1–15; Nehemiah 8:1–8',
    explanation: 'Ezra was the priestly scribe who led the second return from Babylon, instituted national repentance, and taught God’s Law.',
    hint: 'Priest and scribe who set his heart to study, practice, and teach the Law of God.',
    testament: 'Old Testament',
    difficulty: 'hard',
    timerSeconds: 25
  },

  // Level 25: Apostolic Witnesses & Martyrs
  {
    level: 25,
    challengeIndex: 1,
    stage: 5,
    stageTitle: 'The Three-Clue Challenge',
    levelTitle: 'Apostolic Witnesses & Martyrs',
    riddleType: 'The Three-Clue Riddle',
    isTyped: false,
    questionText: 'THE THREE-CLUE CHALLENGE:\nClue 1: I was one of the seven men full of the Spirit and wisdom chosen to oversee daily food distribution to Hellenistic widows in Jerusalem.\nClue 2: Full of grace and power, I did great wonders and signs, and when brought before the Sanhedrin, my face shone like the face of an angel.\nClue 3: After delivering a sweeping survey of Israel’s history of resisting the Holy Spirit, I looked up into heaven, saw Jesus standing at the right hand of God, prayed for my executioners, and became the first Christian martyr. Who am I?',
    clues: [
      'Witnesses laid down their garments at the feet of a young man named Saul.',
      'Cried with a loud voice: "Lord, do not hold this sin against them," and fell asleep.',
      'Devout men buried me and made great lamentation over me.'
    ],
    options: ['Stephen', 'Philip', 'Prochorus', 'Nicanor'],
    correctAnswer: 'Stephen',
    acceptedAlternatives: ['Stephanos', 'Saint Stephen'],
    reference: 'Acts 6:1–15; 7:1–60; 8:1–2',
    explanation: 'Stephen was the first Christian martyr, stoned outside Jerusalem while seeing Christ standing at the right hand of God.',
    hint: 'First Christian deacon and martyr whose face shone like an angel.',
    testament: 'New Testament',
    difficulty: 'easy',
    timerSeconds: 30
  },
  {
    level: 25,
    challengeIndex: 2,
    stage: 5,
    stageTitle: 'The Three-Clue Challenge',
    levelTitle: 'Apostolic Witnesses & Martyrs',
    riddleType: 'The Three-Clue Riddle',
    isTyped: false,
    questionText: 'THE THREE-CLUE CHALLENGE:\nClue 1: I was a Levite from Cyprus whose original name was Joseph, but the Apostles renamed me with a title meaning "Son of Encouragement."\nClue 2: I sold a field I owned and brought the money and laid it at the Apostles’ feet, modeling radical generosity.\nClue 3: When the Jerusalem church feared the newly converted persecutor Saul, I vouched for him; later, I traveled to Antioch, retrieved Saul from Tarsus, and set off with him on the First Missionary Journey. Who am I?',
    clues: [
      'Cousin of John Mark.',
      'Parted company with Paul over taking John Mark on the second journey.',
      'Described in Acts 11:24 as "a good man, full of the Holy Spirit and of faith."'
    ],
    options: ['Barnabas', 'Silas', 'Timothy', 'Titus'],
    correctAnswer: 'Barnabas',
    acceptedAlternatives: ['Joseph Barnabas'],
    reference: 'Acts 4:36–37; 9:26–27; 11:22–26; 13:1–4; 15:36–40',
    explanation: 'Barnabas (Joseph of Cyprus, the Son of Encouragement) sponsored Paul before the apostles and partnered in the First Missionary Journey.',
    hint: 'Levite from Cyprus nicknamed the "Son of Encouragement."',
    testament: 'New Testament',
    difficulty: 'easy',
    timerSeconds: 30
  },
  {
    level: 25,
    challengeIndex: 3,
    stage: 5,
    stageTitle: 'The Three-Clue Challenge',
    levelTitle: 'Apostolic Witnesses & Martyrs',
    riddleType: 'The Three-Clue Riddle',
    isTyped: false,
    questionText: 'THE THREE-CLUE CHALLENGE:\nClue 1: I was a leading brother and prophet in the Jerusalem church chosen to carry the apostolic decree of the Jerusalem Council to Antioch.\nClue 2: When Paul and Barnabas separated over John Mark, Paul selected me as his companion for his Second Missionary Journey.\nClue 3: In Philippi, I was beaten with rods, imprisoned in inner stocks, and sang hymns of praise to God alongside Paul at midnight before an earthquake opened the prison doors. Who am I?',
    clues: [
      'Also known by my Roman name Silvanus in the Epistles.',
      'Held Roman citizenship alongside Paul (Acts 16:37).',
      'Co-authored 1 & 2 Thessalonians and served as amanuensis for 1 Peter 5:12.'
    ],
    options: ['Silas', 'Barnabas', 'Timothy', 'Luke'],
    correctAnswer: 'Silas',
    acceptedAlternatives: ['Silvanus'],
    reference: 'Acts 15:22, 32, 40; 16:19–40; 1 Thessalonians 1:1; 1 Peter 5:12',
    explanation: 'Silas (Silvanus) accompanied Paul on the Second Missionary Journey and sang hymns at midnight in the Philippian jail.',
    hint: 'Paul’s companion beaten and imprisoned in Philippi who sang at midnight.',
    testament: 'New Testament',
    difficulty: 'medium',
    timerSeconds: 30
  },
  {
    level: 25,
    challengeIndex: 4,
    stage: 5,
    stageTitle: 'The Three-Clue Challenge',
    levelTitle: 'Apostolic Witnesses & Martyrs',
    riddleType: 'The Three-Clue Riddle',
    isTyped: false,
    questionText: 'THE THREE-CLUE CHALLENGE:\nClue 1: I was a native of Alexandria, Egypt, who arrived in Ephesus described as an eloquent man, mighty in the Scriptures.\nClue 2: Fervent in spirit, I taught accurately the things concerning Jesus, though I knew only the baptism of John.\nClue 3: Priscilla and Aquila heard me speaking boldly in the synagogue, took me aside, and explained to me the way of God more accurately; I then crossed to Corinth and powerfully refuted Jewish opponents in public, showing by the Scriptures that Jesus was the Christ. Who am I?',
    clues: [
      'Believers in Corinth formed factions around Paul, Cephas, Christ, and me.',
      'Paul wrote in 1 Corinthians 3:6: "I planted, [...] watered, but God gave the growth."',
      'Titus 3:13 urges believers to speed me on my journey.'
    ],
    options: ['Apollos', 'Barnabas', 'Timothy', 'Tychicus'],
    correctAnswer: 'Apollos',
    acceptedAlternatives: ['Apollo'],
    reference: 'Acts 18:24–28; 1 Corinthians 3:4–6; 4:6; Titus 3:13',
    explanation: 'Apollos was the eloquent Alexandrian orator instructed more accurately by Priscilla and Aquila who watered the church in Corinth.',
    hint: 'Eloquent Alexandrian preacher instructed more accurately by Priscilla and Aquila.',
    testament: 'New Testament',
    difficulty: 'easy',
    timerSeconds: 30
  },
  {
    level: 25,
    challengeIndex: 5,
    stage: 5,
    stageTitle: 'The Three-Clue Challenge',
    levelTitle: 'Apostolic Witnesses & Martyrs',
    riddleType: 'Type the Name',
    isTyped: true,
    questionText: 'TYPE THE NAME — MINI-BOSS RIDDLE:\nI was an earthly half-brother of Jesus who did not believe in Him during His earthly ministry. Following His resurrection, Jesus appeared personally to me (1 Corinthians 15:7), and I became the foremost leader and pillar of the early church in Jerusalem. I presided over the historic Jerusalem Council in Acts 15, declaring the final consensus regarding Gentile converts, authored a practical New Testament epistle on living faith and trials, and was nicknamed "the Just" and "Camel Knees" for my ceaseless intercession. Who am I?',
    clues: [
      'Referred to by Paul in Galatians 1:19 as "James the Lord’s brother."',
      'Referred to as a pillar alongside Cephas and John in Galatians 2:9.',
      'Martyred in Jerusalem by high priest Ananus around 62 AD according to Josephus.'
    ],
    options: ['James the Lord’s Brother', 'James the Son of Zebedee', 'James the Son of Alphaeus', 'Jude'],
    correctAnswer: 'James the Lord’s Brother',
    acceptedAlternatives: [
      'James',
      'James the Just',
      'James the Brother of Jesus',
      'James the Brother of the Lord'
    ],
    reference: 'Matthew 13:55; Acts 15:13–21; 1 Corinthians 15:7; Galatians 1:19; James 1:1',
    explanation: 'James the brother of Jesus was converted by the resurrected Christ, led the Jerusalem Council, and wrote the Epistle of James.',
    hint: 'Half-brother of Jesus who led the Jerusalem Council and wrote the Epistle of James.',
    testament: 'New Testament',
    difficulty: 'medium',
    timerSeconds: 25
  },

  // ==========================================
  // STAGE 6: FORGOTTEN NAMES (Levels 26–30)
  // ==========================================

  // Level 26: Forgotten Pentateuch & History Names
  {
    level: 26,
    challengeIndex: 1,
    stage: 6,
    stageTitle: 'Forgotten Names',
    levelTitle: 'Forgotten Pentateuch & History Names',
    riddleType: 'Type Two Answers',
    isTyped: true,
    questionText: 'TYPE TWO ANSWERS:\nWe were two Hebrew midwives operating in Egypt during the Pharaoh’s decree of genocide against infant Hebrew boys. Because we feared God more than the king of Egypt, we defied Pharaoh’s direct command and allowed the male babies to live, telling the king that Hebrew women were vigorous and gave birth before the midwife arrived. Scripture notes that God dealt well with us and gave us our own families. What are our two biblical names?',
    clues: [
      'Names recorded in Exodus 1:15.',
      'Hebrew names: שִׁפְרָה (meaning "beautiful") and פּוּעָה (meaning "splendid/crying out").',
      'Exemplified godly civil disobedience against tyranny.'
    ],
    options: [
      'Shiphrah and Puah',
      'Jochebed and Miriam',
      'Tryphena and Tryphosa',
      'Leah and Rachel'
    ],
    correctAnswer: 'Shiphrah and Puah',
    acceptedAlternatives: [
      'Shiphrah & Puah',
      'Puah and Shiphrah',
      'Shiphrah, Puah',
      'Siphrah and Puah'
    ],
    reference: 'Exodus 1:15–21',
    explanation: 'Shiphrah and Puah were the courageous Hebrew midwives who feared God and spared baby boys from Pharaoh’s murderous decree.',
    hint: 'Two courageous midwives in Exodus 1 who saved Hebrew male babies.',
    testament: 'Old Testament',
    difficulty: 'hard',
    timerSeconds: 25
  },
  {
    level: 26,
    challengeIndex: 2,
    stage: 6,
    stageTitle: 'Forgotten Names',
    levelTitle: 'Forgotten Pentateuch & History Names',
    riddleType: 'Who Am I?',
    isTyped: false,
    questionText: 'WHO AM I?\nI was the father of five daughters from the tribe of Manasseh who died in the wilderness during the forty years of wandering. Because I had no sons, my daughters boldly approached Moses, Eleazar the priest, the chiefs, and the congregation at the entrance of the tent of meeting, asking why my family name should disappear. God ruled in their favor, instituting a permanent legal statute that daughters inherit when a man has no sons. Who am I?',
    clues: [
      'Daughters: Mahlah, Noah, Hoglah, Milcah, and Tirzah.',
      'Died for his own sins in the wilderness, not participating in Korah’s rebellion.',
      'Case established female inheritance law in Israel (Numbers 27:1–11).'
    ],
    options: ['Zelophehad', 'Hepher', 'Gilead', 'Machir'],
    correctAnswer: 'Zelophehad',
    acceptedAlternatives: ['Zelophehad of Manasseh', 'Salphad'],
    reference: 'Numbers 27:1–11; 36:1–12',
    explanation: 'Zelophehad of the tribe of Manasseh had five daughters whose historic legal appeal secured property inheritance rights for daughters.',
    hint: 'Father of five daughters whose legal appeal established female inheritance rights.',
    testament: 'Old Testament',
    difficulty: 'medium',
    timerSeconds: 30
  },
  {
    level: 26,
    challengeIndex: 3,
    stage: 6,
    stageTitle: 'Forgotten Names',
    levelTitle: 'Forgotten Pentateuch & History Names',
    riddleType: 'Who Am I?',
    isTyped: false,
    questionText: 'WHO AM I?\nI was the spirited daughter of the great explorer Caleb who was offered as a bride to whoever would attack and capture the Canaanite fortress of Kiriath-sepher (Debir). When my cousin Othniel captured the city and married me, I dismounted from my donkey before my father and requested a wedding blessing: "You have given me the land of the Negeb; give me also springs of water." And Caleb gave me the upper and lower springs. Who am I?',
    clues: [
      'Daughter of Caleb son of Jephunneh.',
      'Wife of Othniel, Israel’s first judge.',
      'Secured both northern and southern freshwater springs.'
    ],
    options: ['Achsah', 'Deborah', 'Jael', 'Hoglah'],
    correctAnswer: 'Achsah',
    acceptedAlternatives: ['Acsa'],
    reference: 'Joshua 15:16–19; Judges 1:12–15',
    explanation: 'Achsah was Caleb’s daughter who married Othniel and petitioned her father for upper and lower water springs in the dry Negeb.',
    hint: 'Caleb’s daughter who asked her father for springs of water.',
    testament: 'Old Testament',
    difficulty: 'hard',
    timerSeconds: 30
  },
  {
    level: 26,
    challengeIndex: 4,
    stage: 6,
    stageTitle: 'Forgotten Names',
    levelTitle: 'Forgotten Pentateuch & History Names',
    riddleType: 'Who Am I?',
    isTyped: false,
    questionText: 'WHO AM I?\nI was a valiant warrior from Kabzeel, son of Jehoiada the priest, who commanded David’s personal bodyguard of Cherethites and Pelethites. Among my legendary exploits: I struck down two royal champions of Moab, went down into a pit on a snowy day and killed a lion with my bare hands, and wrested a spear like a weaver’s beam out of an eight-foot Egyptian giant’s hand and killed him with his own spear. Under King Solomon, I executed Adonijah, Joab, and Shimei, becoming supreme commander of the royal army. Who am I?',
    clues: [
      'Son of Jehoiada of Kabzeel.',
      'Killed a lion in a pit on a snowy day.',
      'Succeeded Joab as supreme commander of Solomon’s military.'
    ],
    options: ['Benaiah', 'Abishai', 'Asahel', 'Ittai'],
    correctAnswer: 'Benaiah',
    acceptedAlternatives: ['Benaiah son of Jehoiada'],
    reference: '2 Samuel 23:20–23; 1 Kings 2:25–46',
    explanation: 'Benaiah son of Jehoiada was David’s bodyguard commander who killed a lion in a snowy pit and became Solomon’s top general.',
    hint: 'Warrior who killed a lion in a snowy pit and became Solomon’s army commander.',
    testament: 'Old Testament',
    difficulty: 'medium',
    timerSeconds: 30
  },
  {
    level: 26,
    challengeIndex: 5,
    stage: 6,
    stageTitle: 'Forgotten Names',
    levelTitle: 'Forgotten Pentateuch & History Names',
    riddleType: 'Type the Name',
    isTyped: true,
    questionText: 'TYPE THE NAME — MINI-BOSS RIDDLE:\nI was a concubine of King Saul, daughter of Aiah, who bore him two sons, Armoni and Mephibosheth. When a three-year famine struck Israel because Saul had broken the ancient covenant by slaughtering the Gibeonites, David delivered seven sons of Saul to the Gibeonites, who hanged them on the mountain before the Lord. In an extraordinary vigil of maternal devotion, I spread sackcloth upon a rock from the beginning of harvest until the autumn rains poured from the sky, suffering neither the birds of the air to rest on their corpses by day nor the beasts of the field by night. Moved by my grief, David retrieved their bones and gave them honorable royal burial. Who am I?',
    clues: [
      'Daughter of Aiah; Saul’s royal concubine.',
      'Guarded seven hanging corpses from scavengers for nearly six months.',
      'Her name is recorded in 2 Samuel 3:7 and 21:8–14.'
    ],
    options: ['Rizpah', 'Michal', 'Merab', 'Abigail'],
    correctAnswer: 'Rizpah',
    acceptedAlternatives: ['Rizpah daughter of Aiah', 'Rispa'],
    reference: '2 Samuel 3:7; 21:8–14',
    explanation: 'Rizpah daughter of Aiah kept a heroic vigil over the exposed bodies of her sons and relatives, guarding them from vultures and wild beasts.',
    hint: 'Saul’s concubine who kept a heroic vigil on sackcloth over her dead sons.',
    testament: 'Old Testament',
    difficulty: 'master',
    timerSeconds: 25
  },

  // Level 27: Obscure Monarchy & Prophet Associates
  {
    level: 27,
    challengeIndex: 1,
    stage: 6,
    stageTitle: 'Forgotten Names',
    levelTitle: 'Obscure Monarchy & Prophet Associates',
    riddleType: 'Who Am I?',
    isTyped: false,
    questionText: 'WHO AM I?\nI was the devoted personal scribe and disciple of the prophet Jeremiah. When Jeremiah was barred from the temple, I wrote down all the words of the Lord from his dictation onto a leather scroll and read them aloud to all the people in the temple on a fast day. When King Jehoiakim cut the scroll with a penknife and threw it into his brazier fire, Jeremiah and I hid, and I penned an expanded second scroll at Jeremiah’s dictation. Who am I?',
    clues: [
      'Son of Neriah, grandson of Mahseiah.',
      'Lamented: "Woe is me! For the Lord has added sorrow to my pain" (Jeremiah 45:3).',
      'God gave him a personal promise that his life would be spared wherever he went.'
    ],
    options: ['Baruch', 'Gedaliah', 'Ebed-Melech', 'Seraiah'],
    correctAnswer: 'Baruch',
    acceptedAlternatives: ['Baruch son of Neriah'],
    reference: 'Jeremiah 36:1–32; 45:1–5',
    explanation: 'Baruch son of Neriah was Jeremiah’s faithful scribe who penned the prophetic scroll that King Jehoiakim burned.',
    hint: 'Jeremiah’s faithful scribe who wrote down his dictated scrolls.',
    testament: 'Old Testament',
    difficulty: 'medium',
    timerSeconds: 30
  },
  {
    level: 27,
    challengeIndex: 2,
    stage: 6,
    stageTitle: 'Forgotten Names',
    levelTitle: 'Obscure Monarchy & Prophet Associates',
    riddleType: 'Who Am I?',
    isTyped: false,
    questionText: 'WHO AM I?\nI was appointed governor of the destitute Jewish remnant remaining in Judah by Nebuchadnezzar king of Babylon after the destruction of Jerusalem in 586 BC. Setting up my administrative capital at Mizpah, I encouraged the frightened people to stay, harvest summer fruits, and serve the king of Babylon in peace. Despite being warned by Johanan that Baalis king of the Ammonites had sent an assassin, I refused to believe it, and was murdered at a banquet in Mizpah by Ishmael son of Nethaniah. Who am I?',
    clues: [
      'Son of Ahikam, son of Shaphan.',
      'His father Ahikam had previously protected Jeremiah from execution (Jeremiah 26:24).',
      'His assassination prompted the Fast of Gedaliah in the Jewish calendar.'
    ],
    options: ['Gedaliah', 'Ishmael', 'Johanan', 'Pashhur'],
    correctAnswer: 'Gedaliah',
    acceptedAlternatives: ['Gedaliah son of Ahikam', 'Godolias'],
    reference: '2 Kings 25:22–25; Jeremiah 40:5–41:3',
    explanation: 'Gedaliah son of Ahikam was the Babylonian-appointed governor of Judah assassinated at Mizpah by Ishmael.',
    hint: 'Governor of Judah after Jerusalem’s fall murdered at Mizpah by Ishmael.',
    testament: 'Old Testament',
    difficulty: 'hard',
    timerSeconds: 30
  },
  {
    level: 27,
    challengeIndex: 3,
    stage: 6,
    stageTitle: 'Forgotten Names',
    levelTitle: 'Obscure Monarchy & Prophet Associates',
    riddleType: 'Who Am I?',
    isTyped: false,
    questionText: 'WHO AM I?\nI was an ascetic nomad, son of Rechab, who met King Jehu riding in his chariot toward Samaria to purge the dynasty of Ahab. When Jehu asked, "Is your heart right with my heart, as my heart is with yours?", I answered, "It is." Jehu gave me his hand, pulled me up into his chariot, and said, "Come with me, and see my zeal for the Lord." Two centuries later, Jeremiah commended my descendants because they strictly obeyed my commands never to drink wine, build houses, sow seed, or plant vineyards. Who am I?',
    clues: [
      'Jonadab (Jehonadab) son of Rechab.',
      'Helped Jehu eradicate Baal worship from Samaria.',
      'God promised that a descendant of Rechab would never lack a man to stand before Him forever.'
    ],
    options: ['Jehonadab', 'Rechab', 'Obadiah', 'Jehu'],
    correctAnswer: 'Jehonadab',
    acceptedAlternatives: ['Jonadab', 'Jehonadab son of Rechab', 'Jonadab son of Rechab'],
    reference: '2 Kings 10:15–23; Jeremiah 35:1–19',
    explanation: 'Jehonadab son of Rechab joined Jehu in wiping out Baal worship, and his nomadic descendants the Rechabites were praised for steadfast fidelity.',
    hint: 'Founder of the wine-abstaining Rechabites who rode with King Jehu.',
    testament: 'Old Testament',
    difficulty: 'master',
    timerSeconds: 30
  },
  {
    level: 27,
    challengeIndex: 4,
    stage: 6,
    stageTitle: 'Forgotten Names',
    levelTitle: 'Obscure Monarchy & Prophet Associates',
    riddleType: 'The Biblical Relationship Riddle',
    isTyped: false,
    questionText: 'THE BIBLICAL RELATIONSHIP RIDDLE:\nI was the brother of the scribe Baruch and the royal quartermaster of King Zedekiah. When the last king of Judah traveled to Babylon in the fourth year of his reign, the prophet Jeremiah gave me a scroll containing all the divine judgments destined against Babylon. Jeremiah instructed me that upon arriving in Babylon, I must read the scroll aloud, tie a heavy stone to it, cast it into the midst of the Euphrates River, and declare: "Thus shall Babylon sink, and never rise again!" Who am I?',
    clues: [
      'Son of Neriah, son of Mahseiah.',
      'Royal quartermaster (officer of the rest).',
      'Enacted the prophetic sinking of Babylon in Jeremiah 51:59–64.'
    ],
    options: ['Seraiah', 'Baruch', 'Pashhur', 'Hananiah'],
    correctAnswer: 'Seraiah',
    acceptedAlternatives: ['Seraiah son of Neriah', 'Saraias'],
    reference: 'Jeremiah 51:59–64',
    explanation: 'Seraiah, brother of Baruch, threw the scroll of doom into the Euphrates to enact Babylon’s permanent sinking.',
    hint: 'Baruch’s brother who threw the prophecy scroll tied to a stone into the Euphrates.',
    testament: 'Old Testament',
    difficulty: 'master',
    timerSeconds: 30
  },
  {
    level: 27,
    challengeIndex: 5,
    stage: 6,
    stageTitle: 'Forgotten Names',
    levelTitle: 'Obscure Monarchy & Prophet Associates',
    riddleType: 'Type the Name',
    isTyped: true,
    questionText: 'TYPE THE NAME — MINI-BOSS RIDDLE:\nI was a prominent prince of Judah, son of Shaphan the royal scribe. When my son Micaiah reported that Baruch was reading Jeremiah’s forbidden scroll of judgment in the temple, I invited Baruch to read it in my scribe’s chamber before all the officials. Alarmed, we reported the words to King Jehoiakim. When the king began slicing the scroll and burning it in the fire, I along with Elnathan and Delaiah desperately begged the king not to burn the scroll, though he refused to listen. Who am I?',
    clues: [
      'Son of Shaphan the chancellor.',
      'His son Micaiah reported Jeremiah’s words from the temple chamber.',
      'Opposed Jehoiakim’s burning of the sacred scroll in Jeremiah 36:10–25.'
    ],
    options: ['Gemariah', 'Ahikam', 'Elnathan', 'Delaiah'],
    correctAnswer: 'Gemariah',
    acceptedAlternatives: ['Gemariah son of Shaphan'],
    reference: 'Jeremiah 36:10–25',
    explanation: 'Gemariah son of Shaphan provided his temple room for Baruch’s reading and pleaded with King Jehoiakim not to burn the scroll.',
    hint: 'Scribe’s son who urged King Jehoiakim not to burn Jeremiah’s scroll.',
    testament: 'Old Testament',
    difficulty: 'master',
    timerSeconds: 25
  },

  // Level 28: Minor Prophets & Their Circumstances
  {
    level: 28,
    challengeIndex: 1,
    stage: 6,
    stageTitle: 'Forgotten Names',
    levelTitle: 'Minor Prophets & Their Circumstances',
    riddleType: 'Who Am I?',
    isTyped: false,
    questionText: 'WHO AM I?\nI was not a professional prophet nor the son of a prophet, but a rural herdsman and a nipper (grower) of sycamore-fig trees from Tekoa in Judah. God called me to leave my sheep and travel north to the royal sanctuary of Bethel in Israel to proclaim divine judgment against economic injustice and empty religious ritual during the prosperous reign of Jeroboam II. Amaziah the priest of Bethel told me to flee back to Judah, but I prophesied the collapse of his house and the exile of Israel. Who am I?',
    clues: [
      'Proclaimed: "Let justice roll down like waters, and righteousness like an ever-flowing stream."',
      'Saw five visions of judgment including a swarm of locusts, devouring fire, a plumb line, and a basket of summer fruit.',
      'Third of the Twelve Minor Prophets.'
    ],
    options: ['Amos', 'Hosea', 'Micah', 'Habakkuk'],
    correctAnswer: 'Amos',
    acceptedAlternatives: ['Prophet Amos'],
    reference: 'Amos 1:1; 5:24; 7:10–17; 8:1–2',
    explanation: 'Amos was the shepherd and dresser of sycamore figs from Tekoa who denounced injustice at Bethel.',
    hint: 'Herdsman and dresser of sycamore figs from Tekoa called to prophesy.',
    testament: 'Old Testament',
    difficulty: 'easy',
    timerSeconds: 30
  },
  {
    level: 28,
    challengeIndex: 2,
    stage: 6,
    stageTitle: 'Forgotten Names',
    levelTitle: 'Minor Prophets & Their Circumstances',
    riddleType: 'The Biblical Relationship Riddle',
    isTyped: false,
    questionText: 'THE BIBLICAL RELATIONSHIP RIDDLE:\nI was commanded by the Lord to take "a wife of whoredom and have children of whoredom," marrying a promiscuous woman named Gomer daughter of Diblaim, as a living parabolic dramatization of Israel’s spiritual adultery against Yahweh. Even after she deserted me for other lovers, God commanded me: "Go again, love a woman who is loved by another man and is an adulteress," and I bought her back for fifteen shekels of silver and a homer and a lethech of barley. Who am I?',
    clues: [
      'Named my children Jezreel, Lo-ruhamah ("No Mercy"), and Lo-ammi ("Not My People").',
      'Prophesied: "My people are destroyed for lack of knowledge."',
      'First of the Twelve Minor Prophets.'
    ],
    options: ['Hosea', 'Amos', 'Joel', 'Zechariah'],
    correctAnswer: 'Hosea',
    acceptedAlternatives: ['Osee'],
    reference: 'Hosea 1:1–9; 3:1–3; 4:6',
    explanation: 'Hosea married unfaithful Gomer and later redeemed her from slavery to illustrate God’s unconditional covenant love for apostate Israel.',
    hint: 'Prophet commanded to marry an unfaithful wife named Gomer.',
    testament: 'Old Testament',
    difficulty: 'easy',
    timerSeconds: 30
  },
  {
    level: 28,
    challengeIndex: 3,
    stage: 6,
    stageTitle: 'Forgotten Names',
    levelTitle: 'Minor Prophets & Their Circumstances',
    riddleType: 'Who Am I?',
    isTyped: false,
    questionText: 'WHO AM I?\nI was an introspective prophet of Judah who wrestled deeply with God concerning why the righteous suffer while the wicked flourish. Stationing myself upon my watchtower to see what God would speak to me, I was told: "Write the vision; make it plain on tablets, so he may run who reads it... the righteous shall live by his faith." My book concludes with a triumphant hymn of trust even if the fig tree does not blossom and there are no cattle in the stalls. Who am I?',
    clues: [
      'Wrestled with God’s use of the ruthless Babylonians (Chaldeans) as an instrument of judgment.',
      'Key verse Habakkuk 2:4 quoted in Romans 1:17, Galatians 3:11, and Hebrews 10:38.',
      'Concludes: "God, the Lord, is my strength; he makes my feet like the deer’s."'
    ],
    options: ['Habakkuk', 'Zephaniah', 'Nahum', 'Malachi'],
    correctAnswer: 'Habakkuk',
    acceptedAlternatives: ['Habacuc'],
    reference: 'Habakkuk 1:1–2:4; 3:17–19',
    explanation: 'Habakkuk stood on his watchtower questioning God’s providence, receiving the revelation that "the righteous shall live by his faith."',
    hint: 'Prophet on the watchtower who declared "the righteous shall live by faith."',
    testament: 'Old Testament',
    difficulty: 'medium',
    timerSeconds: 30
  },
  {
    level: 28,
    challengeIndex: 4,
    stage: 6,
    stageTitle: 'Forgotten Names',
    levelTitle: 'Minor Prophets & Their Circumstances',
    riddleType: 'Who Am I?',
    isTyped: false,
    questionText: 'WHO AM I?\nI was a post-exilic prophet who arrived in Jerusalem in 520 BC when work on the Second Temple had been stalled for sixteen years while the returnees built their own paneled homes. I rebuked the nation: "Is it a time for you yourselves to dwell in your paneled houses, while this house lies in ruins? Consider your ways!" My four concise sermons inspired Zerubbabel and Joshua to resume construction within twenty-three days. Who am I?',
    clues: [
      'Tenth of the Twelve Minor Prophets.',
      'Prophesied: "The latter glory of this house shall be greater than the former."',
      'Delivered all four messages within a four-month period during the second year of King Darius.'
    ],
    options: ['Haggai', 'Zechariah', 'Malachi', 'Obadiah'],
    correctAnswer: 'Haggai',
    acceptedAlternatives: ['Aggaeus'],
    reference: 'Haggai 1:1–15; 2:1–9, 20–23',
    explanation: 'Haggai urged the returned Jewish community to "consider your ways" and rebuild the neglected temple.',
    hint: 'Post-exilic prophet who challenged the people to stop building paneled houses and finish the Temple.',
    testament: 'Old Testament',
    difficulty: 'medium',
    timerSeconds: 30
  },
  {
    level: 28,
    challengeIndex: 5,
    stage: 6,
    stageTitle: 'Forgotten Names',
    levelTitle: 'Minor Prophets & Their Circumstances',
    riddleType: 'Type the Name',
    isTyped: true,
    questionText: 'TYPE THE NAME — MINI-BOSS RIDDLE:\nI was the post-exilic prophet, son of Berechiah, son of Iddo, who prophesied alongside Haggai. In a single night, I received eight vivid apocalyptic night visions—including four horsemen among myrtle trees, four horns and four craftsmen, a man with a measuring line, a flying scroll thirty feet long, a woman named Wickedness sitting inside an ephah basket carried to Babylon, and four chariots between bronze mountains. I crowned the high priest Joshua with a golden crown as a type of the Branch. Who am I?',
    clues: [
      'Prophesied the triumphal entry: "Behold, your king is coming to you... humble and mounted on a donkey" (9:9).',
      'Prophesied the betrayal price: "thirty pieces of silver" (11:12–13).',
      'Prophesied: "They will look on me, him whom they have pierced" (12:10).'
    ],
    options: ['Zechariah', 'Haggai', 'Malachi', 'Joel'],
    correctAnswer: 'Zechariah',
    acceptedAlternatives: ['Zacharias', 'Zechariah son of Berechiah'],
    reference: 'Zechariah 1:1–8; 4:1–14; 5:1–11; 6:9–15; 9:9',
    explanation: 'Zechariah received eight night visions of Israel’s restoration, crowned the high priest Joshua, and foretold Christ’s triumphal entry.',
    hint: 'Prophet of eight night visions, the thirty pieces of silver, and the King riding on a donkey.',
    testament: 'Old Testament',
    difficulty: 'hard',
    timerSeconds: 25
  },

  // Level 29: Obscure Gospel & Acts Characters
  {
    level: 29,
    challengeIndex: 1,
    stage: 6,
    stageTitle: 'Forgotten Names',
    levelTitle: 'Obscure Gospel & Acts Characters',
    riddleType: 'Who Am I?',
    isTyped: false,
    questionText: 'WHO AM I?\nI was a righteous and devout elderly man living in Jerusalem waiting for the consolation of Israel, upon whom the Holy Spirit rested. It had been revealed to me by the Spirit that I would not see death before I had seen the Lord’s Christ. Guided by the Spirit into the temple when Mary and Joseph brought in the infant Jesus, I took the child into my arms, blessed God, and sang the Nunc Dimittis: "Lord, now you are letting your servant depart in peace." Who am I?',
    clues: [
      'Prophesied to Mary that a sword would pierce her own soul also.',
      'Declared Jesus to be "a light for revelation to the Gentiles, and for glory to your people Israel."',
      'Recorded solely in Luke 2:25–35.'
    ],
    options: ['Simeon', 'Zacharias', 'Nicodemus', 'Cleopas'],
    correctAnswer: 'Simeon',
    acceptedAlternatives: ['Simon the Devout'],
    reference: 'Luke 2:25–35',
    explanation: 'Simeon was the devout Jerusalem elder promised by the Holy Spirit that he would not die before holding the infant Messiah.',
    hint: 'Righteous elder who held baby Jesus in the temple and sang the Nunc Dimittis.',
    testament: 'New Testament',
    difficulty: 'easy',
    timerSeconds: 30
  },
  {
    level: 29,
    challengeIndex: 2,
    stage: 6,
    stageTitle: 'Forgotten Names',
    levelTitle: 'Obscure Gospel & Acts Characters',
    riddleType: 'Who Am I?',
    isTyped: false,
    questionText: 'WHO AM I?\nI was an elderly prophetess of the tribe of Asher, daughter of Phanuel. Having been widowed after seven years of marriage, I lived as a widow until the age of eighty-four, never departing from the temple, worshiping with fasting and prayer night and day. Coming up at that very hour when Simeon held baby Jesus, I began to give thanks to God and speak of Him to all who were waiting for the redemption of Jerusalem. Who am I?',
    clues: [
      'Recorded in Luke 2:36–38.',
      'Daughter of Phanuel, of the tribe of Asher.',
      'Faithful temple intercessor for over six decades.'
    ],
    options: ['Anna', 'Elizabeth', 'Dorcas', 'Lydia'],
    correctAnswer: 'Anna',
    acceptedAlternatives: ['Anna the Prophetess'],
    reference: 'Luke 2:36–38',
    explanation: 'Anna was the 84-year-old prophetess of the tribe of Asher who praised God for baby Jesus in the temple.',
    hint: '84-year-old widow prophetess in the temple who gave thanks for baby Jesus.',
    testament: 'New Testament',
    difficulty: 'medium',
    timerSeconds: 30
  },
  {
    level: 29,
    challengeIndex: 3,
    stage: 6,
    stageTitle: 'Forgotten Names',
    levelTitle: 'Obscure Gospel & Acts Characters',
    riddleType: 'Who Am I?',
    isTyped: false,
    questionText: 'WHO AM I?\nI was a blind beggar sitting by the roadside outside Jericho. When I heard the commotion that Jesus of Nazareth was passing by, I cried out loudly: "Jesus, Son of David, have mercy on me!" Though many strictly rebuked me to keep quiet, I cried out all the more. When Jesus stopped and summoned me, I threw off my cloak, sprang up, and came to Him; when He asked what I wanted, I replied: "Rabboni, let me recover my sight." Who am I?',
    clues: [
      'Name literally translates as "son of Timaeus."',
      'Recorded in Mark 10:46–52.',
      'Immediately received his sight and followed Jesus on the way.'
    ],
    options: ['Bartimaeus', 'Zacchaeus', 'Malchus', 'Lazarus'],
    correctAnswer: 'Bartimaeus',
    acceptedAlternatives: ['Blind Bartimaeus', 'Bar-Timaeus'],
    reference: 'Mark 10:46–52',
    explanation: 'Bartimaeus son of Timaeus was the persistent blind beggar outside Jericho healed by Jesus after crying out to the "Son of David."',
    hint: 'Blind beggar outside Jericho who cast off his cloak when Jesus called him.',
    testament: 'New Testament',
    difficulty: 'easy',
    timerSeconds: 30
  },
  {
    level: 29,
    challengeIndex: 4,
    stage: 6,
    stageTitle: 'Forgotten Names',
    levelTitle: 'Obscure Gospel & Acts Characters',
    riddleType: 'The Three-Clue Riddle',
    isTyped: false,
    questionText: 'THE THREE-CLUE RIDDLE:\nClue 1: I was a young servant girl in the home of Mary, the mother of John Mark, in Jerusalem.\nClue 2: While the church was gathered inside praying fervently through the night for the imprisoned Apostle Peter, Peter was freed by an angel and knocked on the outer courtyard gate.\nClue 3: I ran to answer the knock, recognized Peter’s voice, but in sheer joy failed to open the door, running inside to announce Peter was standing at the gate; the praying disciples told me, "You are out of your mind!" Who am I?',
    clues: [
      'Name means "rose" in Greek.',
      'Left the Apostle Peter standing locked outside on the street.',
      'Her account is preserved in Acts 12:12–16.'
    ],
    options: ['Rhoda', 'Tabitha', 'Phoebe', 'Claudia'],
    correctAnswer: 'Rhoda',
    acceptedAlternatives: ['Roda'],
    reference: 'Acts 12:12–16',
    explanation: 'Rhoda was the servant girl who recognized Peter’s voice at the gate but left him outside while she ran to tell the astonished prayer meeting.',
    hint: 'Maid who was so overjoyed to hear Peter’s voice that she forgot to unlock the door.',
    testament: 'New Testament',
    difficulty: 'easy',
    timerSeconds: 30
  },
  {
    level: 29,
    challengeIndex: 5,
    stage: 6,
    stageTitle: 'Forgotten Names',
    levelTitle: 'Obscure Gospel & Acts Characters',
    riddleType: 'Type the Name',
    isTyped: true,
    questionText: 'TYPE THE NAME — MINI-BOSS RIDDLE:\nI was a prominent synagogue ruler in Corinth who, along with my entire household, believed in the Lord after hearing Paul preach. When Sosthenes succeeded me and an anti-Christian mob dragged Sosthenes before the Roman proconsul Gallio, Gallio refused to judge Jewish religious matters. Paul personally baptized me in Corinth, as he specifically recalls in 1 Corinthians 1:14: "I thank God that I baptized none of you except [...] and Gaius." Who am I?',
    clues: [
      'Ruler of the Corinthian synagogue who converted to Christ.',
      'Recorded in Acts 18:8 and 1 Corinthians 1:14.',
      'One of the very few individuals Paul personally baptized.'
    ],
    options: ['Crispus', 'Sosthenes', 'Gaius', 'Stephanas'],
    correctAnswer: 'Crispus',
    acceptedAlternatives: ['Crispos'],
    reference: 'Acts 18:8; 1 Corinthians 1:14',
    explanation: 'Crispus was the ruler of the Corinthian synagogue who believed in Christ with his whole family and was baptized personally by Paul.',
    hint: 'Ruler of the Corinthian synagogue converted and baptized personally by Paul.',
    testament: 'New Testament',
    difficulty: 'hard',
    timerSeconds: 25
  },

  // Level 30: Unfamiliar Epistolary Saints
  {
    level: 30,
    challengeIndex: 1,
    stage: 6,
    stageTitle: 'Forgotten Names',
    levelTitle: 'Unfamiliar Epistolary Saints',
    riddleType: 'Who Am I?',
    isTyped: false,
    questionText: 'WHO AM I?\nI was a deaconess/servant of the church at Cenchreae, the eastern port of Corinth. In Romans 16:1–2, the Apostle Paul formally commends me to the Roman church, urging them to receive me in the Lord in a manner worthy of the saints and assist me in whatever matter I might need, for I had been a patron and helper of many, including Paul himself. Church tradition identifies me as the courier who carried Paul’s Epistle to the Romans across the sea to Rome. Who am I?',
    clues: [
      'Served the seaport church of Cenchreae.',
      'Designated by Paul as a diakonos (servant/deacon) and prostatis (patron/benefactor).',
      'First person commended in Romans 16.'
    ],
    options: ['Phoebe', 'Priscilla', 'Lydia', 'Chloe'],
    correctAnswer: 'Phoebe',
    acceptedAlternatives: ['Phebe'],
    reference: 'Romans 16:1–2',
    explanation: 'Phoebe was the deaconess of Cenchreae commended by Paul who carried the Epistle to the Romans to its destination.',
    hint: 'Deaconess of Cenchreae who carried Paul’s Epistle to the Romans.',
    testament: 'New Testament',
    difficulty: 'medium',
    timerSeconds: 30
  },
  {
    level: 30,
    challengeIndex: 2,
    stage: 6,
    stageTitle: 'Forgotten Names',
    levelTitle: 'Unfamiliar Epistolary Saints',
    riddleType: 'Who Am I?',
    isTyped: false,
    questionText: 'WHO AM I?\nI am mentioned in Romans 16:23 alongside Erastus, the city treasurer of Corinth. While Tertius had just introduced himself as the scribe who wrote down the letter and Gaius as the host of the whole church, I am simply and tenderly described by Paul with a Latin name meaning "Fourth": "[...] a brother greets you." Who am I?',
    clues: [
      'Recorded in Romans 16:23.',
      'Name is a Latin ordinal number corresponding to 4.',
      'One of the believers sending greetings from Corinth to Rome.'
    ],
    options: ['Quartus', 'Tertius', 'Secundus', 'Fortunatus'],
    correctAnswer: 'Quartus',
    acceptedAlternatives: ['Quartus a brother', 'Quartos'],
    reference: 'Romans 16:23',
    explanation: 'Quartus was a Christian in Corinth whose name means "Fourth," warmly designated by Paul as "a brother" in Romans 16:23.',
    hint: 'Corinthian believer whose name means "Fourth" greeted in Romans 16:23.',
    testament: 'New Testament',
    difficulty: 'hard',
    timerSeconds: 30
  },
  {
    level: 30,
    challengeIndex: 3,
    stage: 6,
    stageTitle: 'Forgotten Names',
    levelTitle: 'Unfamiliar Epistolary Saints',
    riddleType: 'The Biblical Relationship Riddle',
    isTyped: false,
    questionText: 'THE BIBLICAL RELATIONSHIP RIDDLE:\nIn Romans 16:13, Paul writes: "Greet [...], chosen in the Lord; also his mother, who has been a mother to me as well." Many biblical scholars identify me as the same son of Simon of Cyrene (who carried Jesus’ cross) mentioned alongside my brother Alexander in Mark 15:21, which was written for the church in Rome. Who am I?',
    clues: [
      'Brother of Alexander, son of Simon of Cyrene.',
      'Greeted in Romans 16:13.',
      'Paul affectionately refers to his mother as "a mother to me as well."'
    ],
    options: ['Rufus', 'Alexander', 'Jason', 'Urbanus'],
    correctAnswer: 'Rufus',
    acceptedAlternatives: ['Rufus the chosen'],
    reference: 'Mark 15:21; Romans 16:13',
    explanation: 'Rufus, son of Simon of Cyrene, was greeted in Romans 16:13 as "chosen in the Lord," with his mother honored as a spiritual mother to Paul.',
    hint: 'Son of Simon of Cyrene greeted in Romans 16 whose mother was like a mother to Paul.',
    testament: 'New Testament',
    difficulty: 'hard',
    timerSeconds: 30
  },
  {
    level: 30,
    challengeIndex: 4,
    stage: 6,
    stageTitle: 'Forgotten Names',
    levelTitle: 'Unfamiliar Epistolary Saints',
    riddleType: 'Who Am I?',
    isTyped: false,
    questionText: 'WHO AM I?\nI was an Asian Christian from Ephesus or the province of Asia whom Paul called "the beloved brother and faithful minister and fellow servant in the Lord." Paul entrusted me to carry his circular epistle to the Ephesians and his letter to the Colossians across the Mediterranean from his Roman imprisonment, and later sent me to Crete to relieve Titus and to Ephesus to relieve Timothy. Who am I?',
    clues: [
      'Carried Ephesians (6:21–22) and Colossians (4:7–8).',
      'Accompanied the returning runaway slave Onesimus.',
      'Sent to Ephesus in 2 Timothy 4:12.'
    ],
    options: ['Tychicus', 'Trophimus', 'Aristarchus', 'Epaphras'],
    correctAnswer: 'Tychicus',
    acceptedAlternatives: ['Tychicos'],
    reference: 'Acts 20:4; Ephesians 6:21–22; Colossians 4:7–8; 2 Timothy 4:12; Titus 3:12',
    explanation: 'Tychicus was Paul’s trusted courier who delivered the epistles to the Ephesians and Colossians and served as pastoral relief.',
    hint: 'Paul’s trusted courier who carried the letters to the Ephesians and Colossians.',
    testament: 'New Testament',
    difficulty: 'hard',
    timerSeconds: 30
  },
  {
    level: 30,
    challengeIndex: 5,
    stage: 6,
    stageTitle: 'Forgotten Names',
    levelTitle: 'Unfamiliar Epistolary Saints',
    riddleType: 'Type the Name',
    isTyped: true,
    questionText: 'TYPE THE NAME — MINI-BOSS RIDDLE:\nI was a Macedonian Christian from Thessalonica who traveled faithfully with Paul throughout his third missionary journey. In Ephesus, during the riot in the great theater sparked by Demetrius the silversmith, the enraged mob dragged me into the theater alongside Gaius. Later, I boarded the grain ship with Paul on his fateful voyage to Rome, surviving the terrifying Mediterranean storm and shipwreck, and Paul explicitly identifies me in Colossians 4:10 and Philemon 1:24 as my "fellow prisoner." Who am I?',
    clues: [
      'Thessalonian believer dragged into the Ephesian theater (Acts 19:29).',
      'Accompanied Paul on the voyage to Rome (Acts 27:2).',
      'Paul calls him: "Aristarchus my fellow prisoner greets you" (Colossians 4:10).'
    ],
    options: ['Aristarchus', 'Secundus', 'Sopater', 'Erastus'],
    correctAnswer: 'Aristarchus',
    acceptedAlternatives: ['Aristarchus of Thessalonica', 'Aristarchos'],
    reference: 'Acts 19:29; 20:4; 27:2; Colossians 4:10; Philemon 1:24',
    explanation: 'Aristarchus of Thessalonica was dragged into the Ephesian theater, accompanied Paul to Rome, and was his faithful "fellow prisoner."',
    hint: 'Thessalonian dragged into the Ephesian amphitheater who became Paul’s fellow prisoner in Rome.',
    testament: 'New Testament',
    difficulty: 'master',
    timerSeconds: 25
  }
];

fs.writeFileSync(
  path.join(process.cwd(), 'scripts', 'riddlesStages5to6.ts'),
  `// Bible Riddles — Stages 5 & 6 (Levels 21–30, 50 Riddles)
import type { RawRiddleQuestion } from './riddlesStages1to2';

export const RIDDLES_STAGES_5_TO_6: RawRiddleQuestion[] = ${JSON.stringify(
    batch3Questions,
    null,
    2
  )};
`
);

console.log(`Generated ${batch3Questions.length} riddles for Stages 5–6 (Batch 3).`);
