import fs from 'fs';
import path from 'path';
import type { RawRiddleQuestion } from './riddlesStages1to2';

const batch5Questions: RawRiddleQuestion[] = [
  // ==========================================
  // STAGE 9: EXPERT RIDDLE CHAMBER (Levels 41–45)
  // ==========================================

  // Level 41: Forensic Monologues
  {
    level: 41,
    challengeIndex: 1,
    stage: 9,
    stageTitle: 'Expert Riddle Chamber',
    levelTitle: 'Forensic Monologues',
    riddleType: 'Who Am I?',
    isTyped: false,
    questionText: 'FORENSIC MONOLOGUE:\n"When Israel yoked itself to Baal of Peor and wept at the doorway of the tent of meeting as a lethal plague devoured twenty-four thousand, a Simeonite prince brazenly escorted a Midianite princess into his family tent in the sight of Moses. Zealous with the holy jealousy of Yahweh, I rose up from the assembly, seized a javelin in my hand, followed them into the inner tent, and thrust both of them through the belly with a single spear strike. The plague was immediately halted, and God granted me His covenant of peace and an everlasting priesthood." Who am I?',
    clues: [
      'Son of Eleazar, grandson of Aaron the high priest.',
      'Slew Zimri son of Salu and Cozbi daughter of Zur (Numbers 25:6–15).',
      'Praised in Psalm 106:30–31: "Then Phinehas stood up and intervened, and the plague was stayed. And that was counted to him as righteousness."'
    ],
    options: ['Phinehas', 'Eleazar', 'Ithamar', 'Nadab'],
    correctAnswer: 'Phinehas',
    acceptedAlternatives: ['Phineas', 'Phinehas son of Eleazar'],
    reference: 'Numbers 25:6–15; Psalm 106:30–31',
    explanation: 'Phinehas son of Eleazar stopped the lethal plague at Baal-peor by executing Zimri and Cozbi with a spear, receiving an everlasting covenant of priesthood.',
    hint: 'Aaron’s grandson who drove a spear through Zimri and Cozbi to halt the plague.',
    testament: 'Old Testament',
    difficulty: 'hard',
    timerSeconds: 30
  },
  {
    level: 41,
    challengeIndex: 2,
    stage: 9,
    stageTitle: 'Expert Riddle Chamber',
    levelTitle: 'Forensic Monologues',
    riddleType: 'Who Am I?',
    isTyped: false,
    questionText: 'FORENSIC MONOLOGUE:\n"When King David fled Jerusalem on foot from his rebel son Absalom, I came out from Bahurim of the clan of the house of Saul, shouting curses, throwing stones at David and his elite warriors, and throwing dirt into the air. I yelled: ‘Get out, get out, you man of blood, you worthless man! The Lord has avenged on you all the blood of the house of Saul!’ Abishai asked to take off my head, but David restrained him, saying the Lord may have told me to curse. When David returned triumphant across the Jordan, I fell at his feet begging for mercy." Who am I?',
    clues: [
      'Son of Gera, a Benjamite.',
      'Pelted King David with stones and curses at Bahurim.',
      'Executed by Solomon after violating his house arrest boundary at the brook Kidron (1 Kings 2:36–46).'
    ],
    options: ['Shimei', 'Ziba', 'Sheba', 'Doeg'],
    correctAnswer: 'Shimei',
    acceptedAlternatives: ['Shimei son of Gera', 'Semei'],
    reference: '2 Samuel 16:5–13; 19:16–23; 1 Kings 2:36–46',
    explanation: 'Shimei son of Gera cursed David and pelted him with stones during his flight from Absalom, and was later executed under Solomon.',
    hint: 'Benjamite who pelted fleeing David with stones and dirt at Bahurim.',
    testament: 'Old Testament',
    difficulty: 'hard',
    timerSeconds: 30
  },
  {
    level: 41,
    challengeIndex: 3,
    stage: 9,
    stageTitle: 'Expert Riddle Chamber',
    levelTitle: 'Forensic Monologues',
    riddleType: 'Who Am I?',
    isTyped: false,
    questionText: 'FORENSIC MONOLOGUE:\n"I was an eighty-year-old wealthy chieftain of Rogelim in Gilead. When King David arrived at Mahanaim exhausted and famished during Absalom’s rebellion, I along with Shobi and Machir brought beds, basins, earthenware vessels, wheat, barley, meal, parched grain, beans, lentils, honey, curds, sheep, and cheese to sustain the king and his army in the wilderness. When David invited me to cross the Jordan and live in royal honor at his table in Jerusalem, I declined because of my advanced age, asking that my son Chimham go in my place." Who am I?',
    clues: [
      'An elderly Gileadite of Rogelim.',
      'Said: "I am this day eighty years old. Can I discern what is pleasant and what is not?"',
      'David kissed him, blessed him, and took Chimham to Jerusalem (2 Samuel 19:31–40).'
    ],
    options: ['Barzillai', 'Machir', 'Shobi', 'Hushai'],
    correctAnswer: 'Barzillai',
    acceptedAlternatives: ['Barzillai the Gileadite'],
    reference: '2 Samuel 17:27–29; 19:31–40',
    explanation: 'Barzillai the Gileadite provided lavish provisions to David at Mahanaim and sent his son Chimham to receive the king’s royal favor.',
    hint: '80-year-old Gileadite who lavishly provisioned David at Mahanaim.',
    testament: 'Old Testament',
    difficulty: 'master',
    timerSeconds: 30
  },
  {
    level: 41,
    challengeIndex: 4,
    stage: 9,
    stageTitle: 'Expert Riddle Chamber',
    levelTitle: 'Forensic Monologues',
    riddleType: 'Who Am I?',
    isTyped: false,
    questionText: 'FORENSIC MONOLOGUE:\n"I was a foreign Philistine warrior from Gath who had arrived in Jerusalem with six hundred soldiers only yesterday. When David was fleeing into the wilderness from Absalom and urged me to return to my own country rather than wander with an exile, I swore a sacred oath by Yahweh: ‘As the Lord lives, and as my lord the king lives, wherever my lord the king shall be, whether for death or for life, there also will your servant be.’ David was so moved that he appointed me commander of one-third of his entire royal army in the decisive battle of the forest of Ephraim." Who am I?',
    clues: [
      'Ittai the Gittite.',
      'Commanded one-third of David’s army alongside Joab and Abishai.',
      'Example of supreme Gentile loyalty to the anointed King of Israel.'
    ],
    options: ['Ittai', 'Benaiah', 'Uriah', 'Abner'],
    correctAnswer: 'Ittai',
    acceptedAlternatives: ['Ittai the Gittite'],
    reference: '2 Samuel 15:19–22; 18:2',
    explanation: 'Ittai the Gittite, a foreigner from Gath, swore absolute loyalty to David in exile and commanded one-third of the royal army against Absalom.',
    hint: 'Philistine commander from Gath who pledged absolute loyalty to exiled David.',
    testament: 'Old Testament',
    difficulty: 'master',
    timerSeconds: 30
  },
  {
    level: 41,
    challengeIndex: 5,
    stage: 9,
    stageTitle: 'Expert Riddle Chamber',
    levelTitle: 'Forensic Monologues',
    riddleType: 'Type the Name',
    isTyped: true,
    questionText: 'TYPE THE NAME — MINI-BOSS RIDDLE:\nFORENSIC MONOLOGUE:\n"I was David’s close companion and counselor who met the weeping king on the crest of the Mount of Olives with my coat torn and dirt on my head. David told me that if I accompanied him, I would be a burden, but if I returned to Jerusalem, I could infiltrate Absalom’s court and defeat the brilliant counsel of Ahithophel. I feigned loyalty to Absalom, flatteringly defeated Ahithophel’s plan of an immediate night attack by recommending a vast national levy led by Absalom in person, and sent secret intelligence to David through the priests Zadok and Abiathar. When Ahithophel saw his advice was rejected, he went home and hanged himself." Who am I?',
    clues: [
      'David’s friend (counselor), the Archite.',
      'Frustrated Ahithophel’s counsel in 2 Samuel 17.',
      'Saved David’s life by gaining him time to cross the Jordan.'
    ],
    options: ['Hushai', 'Ahithophel', 'Zadok', 'Abiathar'],
    correctAnswer: 'Hushai',
    acceptedAlternatives: ['Hushai the Archite', 'Chusai'],
    reference: '2 Samuel 15:32–37; 16:15–19; 17:5–16',
    explanation: 'Hushai the Archite infiltrated Absalom’s rebellion as David’s spy and cleverly defeated Ahithophel’s military strategy.',
    hint: 'David’s friend who infiltrated Absalom’s court and undermined Ahithophel’s counsel.',
    testament: 'Old Testament',
    difficulty: 'hard',
    timerSeconds: 25
  },

  // Level 42: Obscure Inter-Biblical Cross References
  {
    level: 42,
    challengeIndex: 1,
    stage: 9,
    stageTitle: 'Expert Riddle Chamber',
    levelTitle: 'Obscure Inter-Biblical Cross References',
    riddleType: 'Type Two Answers',
    isTyped: true,
    questionText: 'TYPE TWO ANSWERS:\nIn 2 Timothy 3:8, the Apostle Paul exposes false teachers in the last days by comparing them to two ancient Egyptian court sorcerers who opposed Moses before Pharaoh: "Just as [...] and [...] opposed Moses, so these men also oppose the truth, men corrupted in mind and disqualified regarding the faith." Remarkably, these two specific names appear nowhere in the Old Testament text itself! What are the names of these two Egyptian magicians preserved by Jewish tradition and canonized by Paul?',
    clues: [
      'Names begin with J and sound like an ancient rhyming pair.',
      'Greek: Ἰαννῆς καὶ Ἰαμβρῆς.',
      'Egyptian magicians who replicated Moses’ rod-to-serpent and blood miracles before their power failed at the gnats.'
    ],
    options: [
      'Jannes and Jambres',
      'Dathan and Abiram',
      'Hophni and Phinehas',
      'Sanballat and Tobiah'
    ],
    correctAnswer: 'Jannes and Jambres',
    acceptedAlternatives: [
      'Jannes & Jambres',
      'Jambres and Jannes',
      'Jannes, Jambres'
    ],
    reference: '2 Timothy 3:8; Exodus 7:11–12',
    explanation: 'Jannes and Jambres are named by Paul in 2 Timothy 3:8 as Pharaoh’s court magicians who opposed Moses in Egypt.',
    hint: 'Two Egyptian magicians who opposed Moses, named by Paul in 2 Timothy 3:8.',
    testament: 'New Testament',
    difficulty: 'master',
    timerSeconds: 25
  },
  {
    level: 42,
    challengeIndex: 2,
    stage: 9,
    stageTitle: 'Expert Riddle Chamber',
    levelTitle: 'Obscure Inter-Biblical Cross References',
    riddleType: 'The Event Riddle',
    isTyped: false,
    questionText: 'THE EVENT RIDDLE:\nIn Jude verse 9, the author illustrates respect for angelic authority by recounting an extraordinary celestial dispute found nowhere in the Old Testament: "When the archangel [...] contended with the devil, disputing about the body of Moses, he did not presume to pronounce a blasphemous judgment, but said, ‘The Lord rebuke you.’" Which archangel contended with the devil over the hidden burial site and physical body of Moses?',
    clues: [
      'Prince and guardian angel of Israel (Daniel 10:13, 21; 12:1).',
      'Led the heavenly armies against the dragon in Revelation 12:7.',
      'The only angel explicitly titled "archangel" in the New Testament.'
    ],
    options: ['Michael', 'Gabriel', 'Raphael', 'Uriel'],
    correctAnswer: 'Michael',
    acceptedAlternatives: ['Archangel Michael', 'Michael the Archangel'],
    reference: 'Jude 1:9; Deuteronomy 34:5–6; Revelation 12:7',
    explanation: 'Michael the archangel disputed with Satan over the body of Moses, saying only: "The Lord rebuke you."',
    hint: 'Archangel who disputed with the devil over the body of Moses in Jude 9.',
    testament: 'New Testament',
    difficulty: 'medium',
    timerSeconds: 30
  },
  {
    level: 42,
    challengeIndex: 3,
    stage: 9,
    stageTitle: 'Expert Riddle Chamber',
    levelTitle: 'Obscure Inter-Biblical Cross References',
    riddleType: 'What Am I?',
    isTyped: false,
    questionText: 'WHAT AM I?\nI was a famous lost ancient Hebrew book of heroic poetry cited twice by name in the Old Testament: once in Joshua 10:13 to confirm the miraculous day the sun stood still over Gibeon ("Is this not written in the Book of [...]?"), and once in 2 Samuel 1:18 introducing David’s lament over Saul and Jonathan ("The Song of the Bow; behold, it is written in the Book of [...]"). My title translates from Hebrew as "The Book of the Upright (or Righteous One)." What lost book am I?',
    clues: [
      'Hebrew: Sefer Ha-Yashar.',
      'Cited for Joshua’s long day and David’s lament over Jonathan.',
      'Contained national victory songs and heroic commemorations.'
    ],
    options: ['The Book of Jashar', 'The Book of the Wars of the Lord', 'The Chronicles of the Kings of Israel', 'The Book of Nathan the Prophet'],
    correctAnswer: 'The Book of Jashar',
    acceptedAlternatives: ['Book of Jashar', 'Book of Jasher', 'The Book of Jasher', 'Sefer HaYashar'],
    reference: 'Joshua 10:13; 2 Samuel 1:18',
    explanation: 'The Book of Jashar ("The Book of the Upright") was an ancient collection of Hebrew epic poetry cited in Joshua and 2 Samuel.',
    hint: 'Lost book of ancient Hebrew poems cited for the sun standing still and David’s lament.',
    testament: 'Old Testament',
    difficulty: 'hard',
    timerSeconds: 30
  },
  {
    level: 42,
    challengeIndex: 4,
    stage: 9,
    stageTitle: 'Expert Riddle Chamber',
    levelTitle: 'Obscure Inter-Biblical Cross References',
    riddleType: 'Who Am I?',
    isTyped: false,
    questionText: 'WHO AM I?\nIn 2 Peter 2:5, the Apostle Peter uniquely honors this ancient patriarch with a title found nowhere in Genesis: calling him "a preacher of righteousness" when God spared him and seven others during the ancient world’s deluge. Hebrews 11:7 adds that he became an heir of the righteousness that comes by faith when he built an ark in reverent fear to save his household. Who am I?',
    clues: [
      'Father of Shem, Ham, and Japheth.',
      'Described in Genesis 6:9 as a righteous man, blameless in his generation.',
      'Received the rainbow covenant after the flood.'
    ],
    options: ['Noah', 'Enoch', 'Abraham', 'Methuselah'],
    correctAnswer: 'Noah',
    acceptedAlternatives: ['Noe'],
    reference: 'Genesis 6:9; 2 Peter 2:5; Hebrews 11:7',
    explanation: 'Noah is designated by Peter as "a herald (preacher) of righteousness" who proclaimed God’s warning while building the ark.',
    hint: 'Patriarch described in 2 Peter 2:5 as a "preacher of righteousness."',
    testament: 'Both',
    difficulty: 'medium',
    timerSeconds: 30
  },
  {
    level: 42,
    challengeIndex: 5,
    stage: 9,
    stageTitle: 'Expert Riddle Chamber',
    levelTitle: 'Obscure Inter-Biblical Cross References',
    riddleType: 'Type the Name',
    isTyped: true,
    questionText: 'TYPE THE NAME — MINI-BOSS RIDDLE:\nIn 1 Corinthians 10:4, the Apostle Paul makes an astonishing rabbinic-typological statement regarding the wilderness wandering: "For they drank from the spiritual Rock that followed them, and the Rock was [...]." What (or Who) was this spiritual Rock that followed Israel?',
    clues: [
      'Paul identifies the wilderness water-providing Rock as Christ Himself.',
      'Alluded to Moses striking the rock in Exodus 17 and Numbers 20.',
      'Explicitly declared: "and the Rock was Christ."'
    ],
    options: ['Christ', 'Moses', 'Aaron', 'The Angel of the Lord'],
    correctAnswer: 'Christ',
    acceptedAlternatives: ['Jesus', 'Jesus Christ', 'Messiah', 'The Christ'],
    reference: '1 Corinthians 10:4; Exodus 17:6; Numbers 20:11',
    explanation: 'Paul reveals in 1 Corinthians 10:4 that the spiritual rock providing water to Israel throughout the wilderness was Christ.',
    hint: 'In 1 Corinthians 10:4, Paul declares that the Rock that followed them was...',
    testament: 'New Testament',
    difficulty: 'easy',
    timerSeconds: 25
  },

  // Level 43: Cryptic Objects & Architecture
  {
    level: 43,
    challengeIndex: 1,
    stage: 9,
    stageTitle: 'Expert Riddle Chamber',
    levelTitle: 'Cryptic Objects & Architecture',
    riddleType: 'What Am I?',
    isTyped: false,
    questionText: 'WHAT AM I?\nI was a colossal circular bronze water reservoir cast by master metalworker Hiram of Tyre for Solomon’s Temple. Measuring fifteen feet in diameter, seven and a half feet deep, and forty-five feet in circumference, with a brim carved like a lily blossom, I held over twelve thousand gallons of water for priestly ablutions. I rested upon the backs of twelve bronze oxen standing in groups of three facing north, west, south, and east, with all their hindquarters directed inward. What am I called in Scripture?',
    clues: [
      'The Molten Sea (or Bronze Sea / Sea of cast metal).',
      'Stood in the southeast court of Solomon’s Temple.',
      'King Ahaz later removed it from the twelve oxen and placed it on a stone pavement.'
    ],
    options: ['The Molten / Bronze Sea', 'The Bronze Altar', 'The Bronze Laver', 'The Golden Basin'],
    correctAnswer: 'The Molten / Bronze Sea',
    acceptedAlternatives: ['The Bronze Sea', 'Molten Sea', 'The Molten Sea', 'Bronze Sea', 'The Sea of Bronze'],
    reference: '1 Kings 7:23–26; 2 Chronicles 4:2–5',
    explanation: 'The Molten (Bronze) Sea was Solomon’s giant circular temple reservoir resting upon twelve bronze oxen facing the four compass points.',
    hint: 'Solomon’s giant circular bronze water reservoir resting upon twelve sculpted oxen.',
    testament: 'Old Testament',
    difficulty: 'hard',
    timerSeconds: 30
  },
  {
    level: 43,
    challengeIndex: 2,
    stage: 9,
    stageTitle: 'Expert Riddle Chamber',
    levelTitle: 'Cryptic Objects & Architecture',
    riddleType: 'Type Two Answers',
    isTyped: true,
    questionText: 'TYPE TWO ANSWERS:\nWe were two towering bronze pillars, each twenty-seven feet high and eighteen feet in circumference, crowned with elaborate nine-foot capitals decorated with network wreaths and two hundred bronze pomegranates. Forged by Hiram of Tyre, we stood prominently in the porch at the entrance of Solomon’s Temple. The king gave each of us a personal theological name: the south pillar was named [...], meaning "He will establish," and the north pillar was named [...], meaning "In Him is strength." What were our two names?',
    clues: [
      '1 Kings 7:15–22; 2 Chronicles 3:17.',
      'Stood at the front porch entrance to Solomon’s Temple.',
      'South pillar: Jachin; North pillar: Boaz.'
    ],
    options: [
      'Jachin and Boaz',
      'Urim and Thummim',
      'Ebal and Gerizim',
      'Perez and Zerah'
    ],
    correctAnswer: 'Jachin and Boaz',
    acceptedAlternatives: [
      'Jachin & Boaz',
      'Boaz and Jachin',
      'Jachin, Boaz',
      'Jakin and Boaz'
    ],
    reference: '1 Kings 7:15–22; 2 Chronicles 3:15–17',
    explanation: 'Jachin ("He will establish") and Boaz ("In Him is strength") were the two iconic bronze pillars flanking the entrance to Solomon’s Temple.',
    hint: 'Two famous bronze pillars at the entrance of Solomon’s Temple.',
    testament: 'Old Testament',
    difficulty: 'medium',
    timerSeconds: 25
  },
  {
    level: 43,
    challengeIndex: 3,
    stage: 9,
    stageTitle: 'Expert Riddle Chamber',
    levelTitle: 'Cryptic Objects & Architecture',
    riddleType: 'What Am I?',
    isTyped: false,
    questionText: 'WHAT AM I?\nIn Exodus 38:8, when Bezalel crafted the bronze basin (laver) and its bronze stand for the courtyard of the Tabernacle where priests washed their hands and feet before approaching the altar, what specific, personal bronze household items donated by Hebrew women were melted down to construct it?',
    clues: [
      'Exodus 38:8: "He made the basin of bronze and its stand of bronze from the [...] of the ministering women who served at the entrance of the tent of meeting."',
      'Ancient polished bronze sheets used by women to inspect their reflection.',
      'Symbolized exchanging worldly vanity for spiritual cleansing and purity before God.'
    ],
    options: ['The Bronze Mirrors of the Women', 'The Bronze Jewelry', 'The Bronze Cooking Pots', 'The Bronze Bracelets'],
    correctAnswer: 'The Bronze Mirrors of the Women',
    acceptedAlternatives: ['Bronze Mirrors', 'The Mirrors of the Women', 'Looking Glasses', 'Bronze Looking Glasses'],
    reference: 'Exodus 38:8',
    explanation: 'The bronze laver was forged from the polished bronze mirrors donated by the devout women ministering at the Tabernacle entrance.',
    hint: 'Polished bronze personal reflection items donated by women to forge the Tabernacle laver.',
    testament: 'Old Testament',
    difficulty: 'master',
    timerSeconds: 30
  },
  {
    level: 43,
    challengeIndex: 4,
    stage: 9,
    stageTitle: 'Expert Riddle Chamber',
    levelTitle: 'Cryptic Objects & Architecture',
    riddleType: 'What Am I?',
    isTyped: false,
    questionText: 'WHAT AM I?\nIn Zechariah 3:9 and 4:7, God set me before Joshua the high priest and promised Zerubbabel that he would bring me out amid jubilant shouts of "Grace, grace to it!" On my single stone face are engraved "seven eyes" representing the all-seeing omniscience of the eyes of the Lord which range through the whole earth. What architectural element am I?',
    clues: [
      'The cornerstone / capstone (top stone) of the temple.',
      'Bore seven eyes symbolizing the fullness of the Holy Spirit.',
      'God promised: "I will remove the iniquity of this land in a single day."'
    ],
    options: ['The Capstone with Seven Eyes', 'The Altar of Incense', 'The Ark of the Covenant', 'The Plumb Line'],
    correctAnswer: 'The Capstone with Seven Eyes',
    acceptedAlternatives: ['The Capstone', 'Capstone', 'The Top Stone', 'The Headstone with Seven Eyes'],
    reference: 'Zechariah 3:9; 4:7–10',
    explanation: 'The capstone (headstone) with seven eyes brought forth by Zerubbabel symbolized the completion of the temple empowered by the Spirit.',
    hint: 'Temple capstone bearing seven engraved eyes brought out amid shouts of "Grace, grace to it!"',
    testament: 'Old Testament',
    difficulty: 'hard',
    timerSeconds: 30
  },
  {
    level: 43,
    challengeIndex: 5,
    stage: 9,
    stageTitle: 'Expert Riddle Chamber',
    levelTitle: 'Cryptic Objects & Architecture',
    riddleType: 'Type the Object',
    isTyped: true,
    questionText: 'TYPE THE OBJECT — MINI-BOSS RIDDLE:\nI was an exquisite golden piece of sacred sanctuary furniture described in Exodus 30, measuring eighteen inches square and three feet high, with a horn projecting from each of my four corners. Overlaid with pure gold on my top, sides, and horns, and encircled by a decorative gold molding, Aaron burned fragrant sweet incense upon me every morning when he dressed the lamps, and every evening at twilight. No unauthorized incense, burnt offering, or grain offering could ever be placed upon me. What altar am I?',
    clues: [
      'Stood in the Holy Place directly in front of the veil before the Ark of the Covenant.',
      'Atonement was made upon my horns once a year with blood on the Day of Atonement.',
      'Zechariah was standing on my right side when the Angel Gabriel appeared to announce John the Baptist’s birth (Luke 1:11).'
    ],
    options: ['The Golden Altar of Incense', 'The Bronze Altar of Burnt Offering', 'The Table of Showbread', 'The Golden Lampstand'],
    correctAnswer: 'The Golden Altar of Incense',
    acceptedAlternatives: ['Altar of Incense', 'Golden Altar of Incense', 'The Altar of Incense', 'The Golden Altar'],
    reference: 'Exodus 30:1–10; Luke 1:11; Hebrews 9:4',
    explanation: 'The Golden Altar of Incense stood before the veil in the Holy Place where aromatic incense was offered continually before the Lord.',
    hint: 'Golden horned altar in front of the veil where morning and evening incense was burned.',
    testament: 'Both',
    difficulty: 'medium',
    timerSeconds: 25
  },

  // Level 44: Obscure New Testament Disciple Encounters
  {
    level: 44,
    challengeIndex: 1,
    stage: 9,
    stageTitle: 'Expert Riddle Chamber',
    levelTitle: 'Obscure New Testament Disciple Encounters',
    riddleType: 'Who Am I?',
    isTyped: false,
    questionText: 'WHO AM I?\nWhen Philip found me and announced, "We have found him of whom Moses in the Law and also the prophets wrote, Jesus of Nazareth, the son of Joseph," I responded skeptically: "Can anything good come out of Nazareth?" When Jesus saw me approaching, He declared: "Behold, an Israelite indeed, in whom there is no deceit!" Astonished, I asked how He knew me, and He answered: "Before Philip called you, when you were under the fig tree, I saw you." I immediately confessed: "Rabbi, you are the Son of God! You are the King of Israel!" Who am I?',
    clues: [
      'From Cana in Galilee.',
      'Commonly identified as Bartholomew among the Twelve Apostles.',
      'Jesus promised he would see heaven open and angels ascending and descending upon the Son of Man.'
    ],
    options: ['Nathanael', 'Nicodemus', 'Bartimaeus', 'Zacchaeus'],
    correctAnswer: 'Nathanael',
    acceptedAlternatives: ['Nathaniel', 'Bartholomew'],
    reference: 'John 1:45–51; 21:2',
    explanation: 'Nathanael from Cana confessed Jesus as Son of God and King of Israel after Jesus revealed He had seen him under the fig tree.',
    hint: 'Disciple who doubted anything good could come from Nazareth; seen under the fig tree.',
    testament: 'New Testament',
    difficulty: 'easy',
    timerSeconds: 30
  },
  {
    level: 44,
    challengeIndex: 2,
    stage: 9,
    stageTitle: 'Expert Riddle Chamber',
    levelTitle: 'Obscure New Testament Disciple Encounters',
    riddleType: 'Who Am I?',
    isTyped: false,
    questionText: 'WHO AM I?\nIn Acts 13:1, I am listed among the five prophets and teachers in the multicultural church at Antioch who fasted and prayed before laying hands on Barnabas and Saul. Scripture notes a fascinating royal biographical detail about my childhood: I was a syntrophos (foster-brother / companion brought up from infancy) with Herod Antipas the tetrarch (the very Herod who beheaded John the Baptist and mocked Jesus in His trials). While Herod chose corruption and cruelty, I chose Christ and prophetic ministry in the early church. Who am I?',
    clues: [
      'Mentioned in Acts 13:1.',
      'Foster brother / lifelong companion of Herod the Tetrarch.',
      'Prophet-teacher in the church of Antioch alongside Barnabas, Simeon called Niger, Lucius of Cyrene, and Saul.'
    ],
    options: ['Manaen', 'Lucius of Cyrene', 'Simeon called Niger', 'Jason'],
    correctAnswer: 'Manaen',
    acceptedAlternatives: ['Manahen'],
    reference: 'Acts 13:1',
    explanation: 'Manaen was a leader in the church of Antioch who had been raised from childhood alongside Herod Antipas the tetrarch.',
    hint: 'Antioch prophet who grew up in the royal court with Herod the Tetrarch.',
    testament: 'New Testament',
    difficulty: 'master',
    timerSeconds: 30
  },
  {
    level: 44,
    challengeIndex: 3,
    stage: 9,
    stageTitle: 'Expert Riddle Chamber',
    levelTitle: 'Obscure New Testament Disciple Encounters',
    riddleType: 'The Event Riddle',
    isTyped: false,
    questionText: 'THE EVENT RIDDLE:\nDuring the Passover festival in Jerusalem just after the Triumphal Entry, several Greek-speaking pilgrims who had come up to worship approached Philip of Bethsaida with an earnest and famous eight-word petition: "Sir, we wish to see Jesus." Philip went and told Andrew; Andrew and Philip then came and told Jesus. Hearing that Greeks were seeking Him, Jesus announced: "The hour has come for the Son of Man to be glorified. Truly, truly, I say to you, unless a grain of wheat falls into the earth and dies, it remains alone; but if it dies, it bears much fruit." Which Gospel alone records this encounter?',
    clues: [
      'John 12:20–24.',
      'Marked the moment Jesus declared "the hour has come."',
      'Jesus spoke of being lifted up from the earth to draw all people to Himself.'
    ],
    options: ['Gospel of John', 'Gospel of Luke', 'Gospel of Matthew', 'Gospel of Mark'],
    correctAnswer: 'Gospel of John',
    acceptedAlternatives: ['John', 'Gospel according to John'],
    reference: 'John 12:20–24',
    explanation: 'The request of the Greeks "Sir, we wish to see Jesus" is recorded uniquely in John 12:20–24, prompting the grain-of-wheat discourse.',
    hint: 'Gospel recording the Greeks asking Philip: "Sir, we wish to see Jesus."',
    testament: 'New Testament',
    difficulty: 'medium',
    timerSeconds: 30
  },
  {
    level: 44,
    challengeIndex: 4,
    stage: 9,
    stageTitle: 'Expert Riddle Chamber',
    levelTitle: 'Obscure New Testament Disciple Encounters',
    riddleType: 'Who Am I?',
    isTyped: false,
    questionText: 'WHO AM I?\nI was a wealthy Christian merchant and host in Thessalonica who welcomed Paul and Silas into my home during the Second Missionary Journey. When jealous Jewish opponents formed a mob and set the city in an uproar, they attacked my house seeking the missionaries. Failing to find them, they dragged me and some other brothers before the city magistrates (politarchs), shouting: "These men who have turned the world upside down have come here also, and [...] has received them!" I was forced to post a hefty bail bond before being released. Who am I?',
    clues: [
      'Recorded in Acts 17:5–9.',
      'Accused of harboring those acting against Caesar’s decrees.',
      'Also greeted as Paul’s kinsman in Romans 16:21.'
    ],
    options: ['Jason', 'Gaius', 'Aristarchus', 'Secundus'],
    correctAnswer: 'Jason',
    acceptedAlternatives: ['Jason of Thessalonica'],
    reference: 'Acts 17:5–9; Romans 16:21',
    explanation: 'Jason hosted Paul and Silas in Thessalonica and was dragged before city officials when the mob couldn’t find the missionaries.',
    hint: 'Thessalonian believer dragged before magistrates for hosting Paul and Silas.',
    testament: 'New Testament',
    difficulty: 'hard',
    timerSeconds: 30
  },
  {
    level: 44,
    challengeIndex: 5,
    stage: 9,
    stageTitle: 'Expert Riddle Chamber',
    levelTitle: 'Obscure New Testament Disciple Encounters',
    riddleType: 'Type the Name',
    isTyped: true,
    questionText: 'TYPE THE NAME — MINI-BOSS RIDDLE:\nI was a prominent, wealthy Christian leader in Colossae in whose home the local church assembled. When the Apostle Paul wrote a deeply personal, single-chapter pastoral letter from his Roman imprisonment on behalf of my runaway slave Onesimus (whom Paul had led to Christ in chains), he addressed the letter directly to me, calling me "our beloved fellow worker," as well as to Apphia our sister and Archippus our fellow soldier. Who am I?',
    clues: [
      'Recipient of Paul’s shortest personal letter.',
      'Master of Onesimus.',
      'Paul wrote to him: "Receive him as you would receive me."'
    ],
    options: ['Philemon', 'Onesimus', 'Archippus', 'Epaphras'],
    correctAnswer: 'Philemon',
    acceptedAlternatives: ['Philemon of Colossae'],
    reference: 'Philemon 1:1–21',
    explanation: 'Philemon was the Colossian house-church host to whom Paul addressed his letter concerning the reconciliation of Onesimus.',
    hint: 'Colossian believer to whom Paul wrote a letter requesting forgiveness for runaway slave Onesimus.',
    testament: 'New Testament',
    difficulty: 'easy',
    timerSeconds: 25
  },

  // Level 45: Complex Genealogical & Hereditary Enigmas
  {
    level: 45,
    challengeIndex: 1,
    stage: 9,
    stageTitle: 'Expert Riddle Chamber',
    levelTitle: 'Complex Genealogical & Hereditary Enigmas',
    riddleType: 'Who Am I?',
    isTyped: false,
    questionText: 'WHO AM I?\nI am the Canaanite woman who married Er, the wicked firstborn son of Judah. When Er died under God’s judgment, Judah gave me to his second son Onan according to levirate duty, but Onan refused to father heirs and was also slain by the Lord. Denied the third son Shelah, I disguised myself as a veiled cult prostitute at the entrance to Enaim on the road to Timnah, where Judah took my pledge of his signet, cord, and staff. When sentenced to be burned for prostitution three months later, I sent out the items: "By the man to whom these belong, I am pregnant." Judah acknowledged: "She is more righteous than I." Who am I?',
    clues: [
      'Bore twin sons Perez and Zerah to Judah.',
      'First of five women named in the genealogy of Jesus in Matthew 1:3.',
      'Preserved the messianic seed of Judah.'
    ],
    options: ['Tamar', 'Rahab', 'Ruth', 'Bathsheba'],
    correctAnswer: 'Tamar',
    acceptedAlternatives: ['Thamar'],
    reference: 'Genesis 38:6–26; Matthew 1:3',
    explanation: 'Tamar secured the line of Judah through Perez and Zerah using Judah’s own signet and staff, and is named in Jesus’ genealogy.',
    hint: 'Daughter-in-law of Judah who bore Perez and Zerah and is listed in Matthew’s genealogy.',
    testament: 'Old Testament',
    difficulty: 'medium',
    timerSeconds: 30
  },
  {
    level: 45,
    challengeIndex: 2,
    stage: 9,
    stageTitle: 'Expert Riddle Chamber',
    levelTitle: 'Complex Genealogical & Hereditary Enigmas',
    riddleType: 'The Biblical Relationship Riddle',
    isTyped: false,
    questionText: 'THE BIBLICAL RELATIONSHIP RIDDLE:\nIn Matthew’s genealogy of Jesus (chapter 1), only five women are specifically mentioned by name or relationship. Four are Tamar, Rahab, Ruth, and Mary. The fifth woman is deliberately not mentioned by her personal name, but identified strictly through her tragic former marriage: "And David was the father of Solomon by [...]." Who was this fifth woman?',
    clues: [
      'Mother of King Solomon and Nathan.',
      'Daughter of Eliam, granddaughter of Ahithophel.',
      'Matthew 1:6 identifies her as "the wife of Uriah."'
    ],
    options: ['Bathsheba / The Wife of Uriah', 'Abigail', 'Michal', 'Ahinoam'],
    correctAnswer: 'Bathsheba / The Wife of Uriah',
    acceptedAlternatives: ['Bathsheba', 'Wife of Uriah', 'The Wife of Uriah', 'Bathshua'],
    reference: 'Matthew 1:6; 2 Samuel 11:3; 12:24',
    explanation: 'Bathsheba is uniquely designated in Matthew 1:6 as "the wife of Uriah" to emphasize God’s grace over human sin and David’s great transgression.',
    hint: 'Mother of Solomon referred to in Matthew 1:6 as "the wife of Uriah."',
    testament: 'Both',
    difficulty: 'easy',
    timerSeconds: 30
  },
  {
    level: 45,
    challengeIndex: 3,
    stage: 9,
    stageTitle: 'Expert Riddle Chamber',
    levelTitle: 'Complex Genealogical & Hereditary Enigmas',
    riddleType: 'The Three-Clue Riddle',
    isTyped: false,
    questionText: 'THE THREE-CLUE RIDDLE:\nClue 1: I was the righteous great-grandfather of King David living in Bethlehem-judah.\nClue 2: According to Matthew 1:5, my father was Salmon and my mother was the converted Jericho harlot Rahab.\nClue 3: I acted as a godly kinsman-redeemer (Go’el) for destitute Naomi and married her Moabite daughter-in-law Ruth on the threshing floor, fathering Obed. Who am I?',
    clues: [
      'Husband of Ruth.',
      'Greeted his reapers: "The Lord be with you!" and they replied: "The Lord bless you!"',
      'Father of Obed, grandfather of Jesse, great-grandfather of David.'
    ],
    options: ['Boaz', 'Salmon', 'Elimelech', 'Obed'],
    correctAnswer: 'Boaz',
    acceptedAlternatives: ['Booz'],
    reference: 'Ruth 2:1–4; 4:13–22; Matthew 1:5',
    explanation: 'Boaz, son of Salmon and Rahab, was the wealthy Bethlehem kinsman-redeemer who married Ruth and fathered Obed.',
    hint: 'Bethlehem kinsman-redeemer who married Ruth; son of Rahab.',
    testament: 'Old Testament',
    difficulty: 'easy',
    timerSeconds: 30
  },
  {
    level: 45,
    challengeIndex: 4,
    stage: 9,
    stageTitle: 'Expert Riddle Chamber',
    levelTitle: 'Complex Genealogical & Hereditary Enigmas',
    riddleType: 'Who Am I?',
    isTyped: false,
    questionText: 'WHO AM I?\nI was the tragic king of Judah, also known as Coniah and Jeconiah, who reigned for only three months and ten days before surrendering to Nebuchadnezzar in 597 BC and being carried captive to Babylon. In Jeremiah 22:30, God pronounced a terrifying bloodline curse upon me: "Write this man down as childless, a man who shall not succeed in his days, for none of his offspring shall succeed in sitting on the throne of David and ruling again in Judah." Because of this royal curse, Jesus could not be the biological son of Joseph (who descended from me in Matthew 1:11–12), but claimed the physical Davidic throne through Mary via David’s son Nathan! Who am I?',
    clues: [
      'Jehoiachin (Jeconiah / Coniah).',
      'Spent thirty-seven years in a Babylonian dungeon before Evil-merodach released him and gave him a seat of honor.',
      'Subject of the famous "Bloodline Curse of Coniah" in Jeremiah 22:24–30.'
    ],
    options: ['Jehoiachin / Jeconiah', 'Jehoiakim', 'Zedekiah', 'Jehoahaz'],
    correctAnswer: 'Jehoiachin / Jeconiah',
    acceptedAlternatives: ['Jehoiachin', 'Jeconiah', 'Coniah', 'Jechonias'],
    reference: 'Jeremiah 22:24–30; 2 Kings 24:8–15; 25:27–30; Matthew 1:11–12',
    explanation: 'Jehoiachin (Jeconiah/Coniah) was the cursed king of Judah whose biological descendants were barred from reigning on David’s throne.',
    hint: 'King of Judah cursed by Jeremiah that none of his physical offspring would sit on David’s throne.',
    testament: 'Old Testament',
    difficulty: 'master',
    timerSeconds: 30
  },
  {
    level: 45,
    challengeIndex: 5,
    stage: 9,
    stageTitle: 'Expert Riddle Chamber',
    levelTitle: 'Complex Genealogical & Hereditary Enigmas',
    riddleType: 'Type the Name',
    isTyped: true,
    questionText: 'TYPE THE NAME — MINI-BOSS RIDDLE:\nI was the priest of Midian whose seven daughters were rescued from aggressive shepherds by Moses at a desert well. When my daughters returned quickly, I asked why they had left the Egyptian standing outside, and invited him to eat bread. Moses agreed to dwell with me, and I gave him my daughter Zipporah in marriage. What is the specific name by which I am introduced in Exodus 2:18, meaning "Friend of God," before I am called Jethro in Exodus 3:1?',
    clues: [
      'Exodus 2:18: "When they came home to their father [...], he said, ‘How is it that you have come back so soon today?’"',
      'Name translates as "friend of God" or "shepherd of God."',
      'Identical person as Jethro the priest of Midian.'
    ],
    options: ['Reuel', 'Jethro', 'Hobab', 'Pethor'],
    correctAnswer: 'Reuel',
    acceptedAlternatives: ['Raguel'],
    reference: 'Exodus 2:18; Numbers 10:29',
    explanation: 'Reuel was Moses’ father-in-law, introduced by that name in Exodus 2:18 before also being called Jethro.',
    hint: 'Moses’ father-in-law introduced in Exodus 2:18 whose name means "Friend of God."',
    testament: 'Old Testament',
    difficulty: 'hard',
    timerSeconds: 25
  },

  // ==========================================
  // STAGE 10: THE ULTIMATE BIBLE RIDDLE (Levels 46–50)
  // ==========================================

  // Level 46: Forensic Master Dossiers
  {
    level: 46,
    challengeIndex: 1,
    stage: 10,
    stageTitle: 'The Ultimate Bible Riddle',
    levelTitle: 'Forensic Master Dossiers',
    riddleType: 'Who Am I?',
    isTyped: false,
    questionText: 'THE ULTIMATE MASTER DOSSIER:\n"I was a righteous king of Judah who instituted profound religious reforms, removing foreign altars and cutting down Asherim poles. In my fourteenth year, when Zerah the Ethiopian invaded with a million-man army and three hundred chariots, I cried out to Yahweh: ‘Lord, there is none like you to help, between the mighty and the weak. Help us, O Lord our God!’ God routed the million Ethiopians before us. However, in my old age, when Baasha king of Israel fortified Ramah against me, I panicked and sent silver and gold from the temple to Ben-hadad king of Syria to break his treaty. When the seer Hanani rebuked me for relying on Syria rather than God, I grew furious and threw the seer into prison stocks. In my thirty-ninth year, I developed a severe, fatal disease in my feet, yet even in my disease I sought not the Lord, but the physicians." Who am I?',
    clues: [
      'Third king of Judah after the division of the kingdom.',
      'Son of Abijah, father of Jehoshaphat.',
      '2 Chronicles 16:12: "In the thirty-ninth year of his reign [...] became diseased in his feet... yet he did not seek the Lord, but the physicians."'
    ],
    options: ['King Asa', 'King Uzziah', 'King Ahaz', 'King Jehoram'],
    correctAnswer: 'King Asa',
    acceptedAlternatives: ['Asa', 'King Asa of Judah'],
    reference: '1 Kings 15:9–24; 2 Chronicles 14:1–16:14',
    explanation: 'King Asa defeated a million Ethiopians by faith, but later relied on Syrian treaties and physicians for his diseased feet, dying without repenting.',
    hint: 'Good king who defeated a million Ethiopians but sought physicians rather than God for his diseased feet.',
    testament: 'Old Testament',
    difficulty: 'hard',
    timerSeconds: 30
  },
  {
    level: 46,
    challengeIndex: 2,
    stage: 10,
    stageTitle: 'The Ultimate Bible Riddle',
    levelTitle: 'Forensic Master Dossiers',
    riddleType: 'Who Am I?',
    isTyped: false,
    questionText: 'THE ULTIMATE MASTER DOSSIER:\n"I was crowned king of Judah at sixteen and reigned for fifty-two prosperous years. I fortified Jerusalem with towers, constructed war machines designed by skillful men to shoot arrows and great stones from the battlements, and dug many cisterns for vast cattle herds. But when I grew strong, I grew proud to my destruction. In flagrant violation of God’s law, I presumed to enter the temple of the Lord to burn incense on the Golden Altar. Azariah the high priest and eighty courageous priests confronted me, shouting: ‘It is not for you, [...], to burn incense to the Lord, but for the priests!’ While I stood raging with a censer in my hand, leprosy broke out on my forehead before their eyes, and I lived in isolation in a separate house until my death." Who am I?',
    clues: [
      'Also called Azariah in 2 Kings 15:1–7.',
      'Father of Jotham.',
      'Isaiah saw his grand vision of the Lord on the throne "in the year that King [...] died" (Isaiah 6:1).'
    ],
    options: ['King Uzziah', 'King Hezekiah', 'King Josiah', 'King Jehoshaphat'],
    correctAnswer: 'King Uzziah',
    acceptedAlternatives: ['Uzziah', 'King Azariah', 'Azariah'],
    reference: '2 Chronicles 26:1–23; Isaiah 6:1; 2 Kings 15:1–7',
    explanation: 'King Uzziah was struck with forehead leprosy in the temple when he arrogantly attempted to usurp priestly duties by burning incense.',
    hint: 'Powerful king of Judah struck with leprosy on his forehead when he tried to burn incense.',
    testament: 'Old Testament',
    difficulty: 'medium',
    timerSeconds: 30
  },
  {
    level: 46,
    challengeIndex: 3,
    stage: 10,
    stageTitle: 'The Ultimate Bible Riddle',
    levelTitle: 'Forensic Master Dossiers',
    riddleType: 'Who Am I?',
    isTyped: false,
    questionText: 'THE ULTIMATE MASTER DOSSIER:\n"I was a prophet of Kiriath-jearim, son of Shemaiah, who prophesied in the name of the Lord against Jerusalem and the land of Judah in the exact same words as the prophet Jeremiah. When King Jehoiakim, his mighty men, and the princes heard my words, the king sought to put me to death. Hearing of the plot, I fled in terror to Egypt. However, King Jehoiakim dispatched Elnathan son of Achbor with men to Egypt; they extradited me from Egypt, brought me before King Jehoiakim, who executed me with the sword and cast my dead body into the burial place of the common people." Who was this martyr prophet whose courage is recorded in Jeremiah 26?',
    clues: [
      'Son of Shemaiah of Kiriath-jearim.',
      'Extradited from Egypt and slain with the sword by Jehoiakim.',
      'Contrasted with Jeremiah, who was protected by Ahikam son of Shaphan.'
    ],
    options: ['Uriah son of Shemaiah', 'Micaiah son of Imlah', 'Hananiah son of Azzur', 'Pashhur son of Immer'],
    correctAnswer: 'Uriah son of Shemaiah',
    acceptedAlternatives: ['Uriah', 'Urijah', 'Uriah the Prophet', 'Urijah son of Shemaiah'],
    reference: 'Jeremiah 26:20–23',
    explanation: 'Uriah son of Shemaiah prophesied like Jeremiah, fled to Egypt, but was extradited and executed by King Jehoiakim.',
    hint: 'Martyr prophet extradited from Egypt and executed with the sword by King Jehoiakim.',
    testament: 'Old Testament',
    difficulty: 'master',
    timerSeconds: 30
  },
  {
    level: 46,
    challengeIndex: 4,
    stage: 10,
    stageTitle: 'The Ultimate Bible Riddle',
    levelTitle: 'Forensic Master Dossiers',
    riddleType: 'The Double-Meaning Riddle',
    isTyped: false,
    questionText: 'THE DOUBLE-MEANING RIDDLE:\nIn Exodus 17, when Moses held up the staff of God on the hill overlooking the battle against Amalek at Rephidim, as long as Moses held up his hand, Israel prevailed, but when he lowered his hand, Amalek prevailed. When Moses’ hands grew weary, two men took a stone for Moses to sit on and stood on either side of him, holding up his hands steadily until the going down of the sun, ensuring Joshua’s total victory. One of these men was Aaron the high priest. Who was the second man who held up Moses’ hand?',
    clues: [
      'Grandfather of Bezalel, the master Tabernacle artisan (Exodus 31:2).',
      'Left in charge of Israel alongside Aaron when Moses ascended Mount Sinai (Exodus 24:14).',
      'From the royal tribe of Judah.'
    ],
    options: ['Hur', 'Joshua', 'Caleb', 'Eleazar'],
    correctAnswer: 'Hur',
    acceptedAlternatives: ['Hur of Judah'],
    reference: 'Exodus 17:10–12; 24:14; 31:2',
    explanation: 'Hur, from the tribe of Judah, joined Aaron in holding up Moses’ weary arms to secure victory over Amalek at Rephidim.',
    hint: 'Man from Judah who held up Moses’ right hand alongside Aaron at Rephidim.',
    testament: 'Old Testament',
    difficulty: 'medium',
    timerSeconds: 30
  },
  {
    level: 46,
    challengeIndex: 5,
    stage: 10,
    stageTitle: 'The Ultimate Bible Riddle',
    levelTitle: 'Forensic Master Dossiers',
    riddleType: 'Type the Name',
    isTyped: true,
    questionText: 'TYPE THE NAME — MINI-BOSS RIDDLE:\nI was an Edomite, the chief of King Saul’s herdsmen, who was detained before the Lord at the sanctuary of Nob when David arrived fleeing from Saul. I watched as Ahimelech the high priest gave David consecrated showbread and the wrapped sword of Goliath. Later, when Saul accused his servants of conspiring with David, I reported what I had witnessed. When Saul commanded his footmen to slaughter the priests of the Lord and they refused to lift their hands against the anointed priests, Saul turned to me and ordered, "Turn and strike the priests!" With savage brutality, I turned that day and slaughtered eighty-five men who wore the linen ephod, and put the priestly city of Nob to the sword, killing men, women, children, and infants. Who am I?',
    clues: [
      'Chief herdsman of King Saul.',
      'Subject of David’s scathing denunciation in Psalm 52: "Why do you boast of evil, O mighty man?"',
      'Only Abiathar son of Ahimelech escaped his massacre.'
    ],
    options: ['Doeg', 'Doeg the Edomite', 'Cushan-rishathaim', 'Hadad'],
    correctAnswer: 'Doeg',
    acceptedAlternatives: ['Doeg the Edomite', 'Doeg the Syrian'],
    reference: '1 Samuel 21:7; 22:9–19; Psalm 52:1–9',
    explanation: 'Doeg the Edomite was Saul’s ruthless chief herdsman who slaughtered eighty-five Aaronic priests and the city of Nob.',
    hint: 'Saul’s Edomite herdsman who slaughtered eighty-five priests of Nob.',
    testament: 'Old Testament',
    difficulty: 'hard',
    timerSeconds: 25
  },

  // Level 47: Obscure Canonical Traps
  {
    level: 47,
    challengeIndex: 1,
    stage: 10,
    stageTitle: 'The Ultimate Bible Riddle',
    levelTitle: 'Obscure Canonical Traps',
    riddleType: 'Type the Book',
    isTyped: true,
    questionText: 'TYPE THE BIBLE BOOK:\nI am the only book in the entire sixty-six-book Protestant canon of Holy Scripture that does not contain the word "God" (Elohim) or "Lord" (Yahweh) even once in its original Hebrew text. Yet, my intricate plot of palace banquets, royal insomnia, hair’s-breadth timing, and poetic justice displays the invisible providence of God orchestrating the preservation of the Jewish people through a young queen and her cousin. Which book of the Bible am I?',
    clues: [
      'Set in the Persian capital of Susa.',
      'Instituted the annual Feast of Purim.',
      'Features King Ahasuerus, Haman, Mordecai, and Hadassah.'
    ],
    options: ['Esther', 'Song of Solomon', 'Ruth', 'Ecclesiastes'],
    correctAnswer: 'Esther',
    acceptedAlternatives: ['Book of Esther', 'Esth'],
    reference: 'Book of Esther (all chapters)',
    explanation: 'The Book of Esther never once mentions the name of God, yet vividly demonstrates His sovereign providential care.',
    hint: 'Old Testament book that never explicitly mentions the name of God.',
    testament: 'Old Testament',
    difficulty: 'easy',
    timerSeconds: 25
  },
  {
    level: 47,
    challengeIndex: 2,
    stage: 10,
    stageTitle: 'The Ultimate Bible Riddle',
    levelTitle: 'Obscure Canonical Traps',
    riddleType: 'Type the Book',
    isTyped: true,
    questionText: 'TYPE THE BIBLE BOOK:\nI am the shortest book in the entire Old Testament, containing exactly one single chapter of twenty-one verses. I proclaim the utter destruction of the proud mountain kingdom of Edom (Mount Seir) because they gloated over the destruction of their brother Jacob and stood at the crossroads to cut off fugitives when Jerusalem fell. Which Minor Prophet book am I?',
    clues: [
      'Proclaims: "As you have done, it shall be done to you; your deeds shall return on your own head."',
      'Warns those who live in the clefts of the rock and say in their heart: "Who will bring me down to the ground?"',
      'Concludes: "And the kingdom shall be the Lord’s."'
    ],
    options: ['Obadiah', 'Nahum', 'Haggai', 'Habakkuk'],
    correctAnswer: 'Obadiah',
    acceptedAlternatives: ['Book of Obadiah', 'Abdias', 'Obad'],
    reference: 'Obadiah 1:1–21',
    explanation: 'Obadiah is the shortest book in the Old Testament (21 verses), devoted to pronouncing divine judgment on Edom.',
    hint: 'Shortest Old Testament book (21 verses) prophesying doom on Edom.',
    testament: 'Old Testament',
    difficulty: 'medium',
    timerSeconds: 25
  },
  {
    level: 47,
    challengeIndex: 3,
    stage: 10,
    stageTitle: 'The Ultimate Bible Riddle',
    levelTitle: 'Obscure Canonical Traps',
    riddleType: 'Type the Book',
    isTyped: true,
    questionText: 'TYPE THE BIBLE BOOK:\nMeasured by total Greek word count (only 245 words across 13 verses), I am the absolute shortest book in the entire New Testament canon—even shorter than 3 John or Philemon! Written by "The elder" to "the elect lady and her children," I command love according to the commandments and strictly warn believers never to welcome or give a greeting to anyone who denies that Jesus Christ has come in the flesh. Which New Testament epistle am I?',
    clues: [
      'Shortest book in the New Testament by Greek words (245 words).',
      'Addressed to "the elect lady and her children."',
      'Warns that whoever greets a deceiver takes part in his wicked works.'
    ],
    options: ['2 John', '3 John', 'Philemon', 'Jude'],
    correctAnswer: '2 John',
    acceptedAlternatives: ['Second John', '2nd John', 'II John', '2Jn'],
    reference: '2 John 1:1–13',
    explanation: '2 John is the shortest book in the New Testament by Greek word count (245 words), warning against welcoming false teachers.',
    hint: 'Shortest book in the New Testament by Greek word count, addressed to the elect lady.',
    testament: 'New Testament',
    difficulty: 'hard',
    timerSeconds: 25
  },
  {
    level: 47,
    challengeIndex: 4,
    stage: 10,
    stageTitle: 'The Ultimate Bible Riddle',
    levelTitle: 'Obscure Canonical Traps',
    riddleType: 'Type the Book',
    isTyped: true,
    questionText: 'TYPE THE BIBLE BOOK:\nI am a three-chapter prophetic book that reads like a dramatic, thunderous courtroom drama between Nineveh and God, written a century after the city repented under Jonah. I open with a majestic portrait of Yahweh whose way is in whirlwind and storm, declare that "Nineveh is like a pool whose waters run away," and mock the bloody Assyrian capital: "Where is the lions’ den, the feeding place of the young lions?" Which Old Testament book am I?',
    clues: [
      'Seventh of the Twelve Minor Prophets.',
      'Key verse 1:7: "The Lord is good, a stronghold in the day of trouble; he knows those who take refuge in him."',
      'Author was an Elkoshite.'
    ],
    options: ['Nahum', 'Jonah', 'Micah', 'Zephaniah'],
    correctAnswer: 'Nahum',
    acceptedAlternatives: ['Book of Nahum', 'Nah'],
    reference: 'Nahum 1:1–3:19',
    explanation: 'Nahum prophesied the final, catastrophic fall and flooding of Nineveh, the bloody capital of Assyria.',
    hint: 'Prophetic book dedicated to the destruction of Nineveh, written by an Elkoshite.',
    testament: 'Old Testament',
    difficulty: 'medium',
    timerSeconds: 25
  },
  {
    level: 47,
    challengeIndex: 5,
    stage: 10,
    stageTitle: 'The Ultimate Bible Riddle',
    levelTitle: 'Obscure Canonical Traps',
    riddleType: 'Type the Book',
    isTyped: true,
    questionText: 'TYPE THE BIBLE BOOK — MINI-BOSS RIDDLE:\nIn chapter 3 of this prophetic book, the prophet offers a sublime musical liturgical prayer designated "according to Shigionoth" and marked three times with the musical pause "Selah." The prayer depicts God coming from Teman and Mount Paran with brightness like the light and rays flashing from His hand, driving nations asunder, and concludes with an unshakeable confession of joy: "Though the fig tree should not blossom, nor fruit be on the vines... yet I will rejoice in the Lord!" In which book is this famous prayer recorded?',
    clues: [
      'Contains the landmark verse: "The righteous shall live by his faith" (2:4).',
      'Addressed to the choirmaster with stringed instruments.',
      'Eighth of the Twelve Minor Prophets.'
    ],
    options: ['Habakkuk', 'Zephaniah', 'Joel', 'Haggai'],
    correctAnswer: 'Habakkuk',
    acceptedAlternatives: ['Book of Habakkuk', 'Hab', 'Habacuc'],
    reference: 'Habakkuk 3:1–19',
    explanation: 'Habakkuk 3 is the famous liturgical prayer on Shigionoth celebrating God’s sovereign power and rejoicing even if the fig tree fails to blossom.',
    hint: 'Book containing the chapter 3 prayer on Shigionoth and rejoicing though the fig tree fails.',
    testament: 'Old Testament',
    difficulty: 'hard',
    timerSeconds: 25
  },

  // Level 48: Pure Type-the-Answer Gauntlet
  {
    level: 48,
    challengeIndex: 1,
    stage: 10,
    stageTitle: 'The Ultimate Bible Riddle',
    levelTitle: 'Pure Type-the-Answer Gauntlet',
    riddleType: 'Type the Name',
    isTyped: true,
    questionText: 'TYPE THE NAME — GAUNTLET 1:\nI was an Ethiopian court official in the royal palace of King Zedekiah who heard that Jeremiah had been thrown into a miry dungeon cistern to starve. I took thirty men and old rags and ropes, lifted Jeremiah out of the mud, and was promised divine protection when Jerusalem fell to Babylon. Who am I?',
    clues: [
      'Name means "servant of the king."',
      'Recorded in Jeremiah 38:7–13 and 39:15–18.',
      'Promised: "You shall not be given into the hand of the men of whom you are afraid."'
    ],
    options: ['Ebed-Melech', 'Baruch', 'Gedaliah', 'Pashhur'],
    correctAnswer: 'Ebed-Melech',
    acceptedAlternatives: ['Ebedmelech', 'Ebed Melech', 'Ebed-melech the Ethiopian'],
    reference: 'Jeremiah 38:7–13; 39:15–18',
    explanation: 'Ebed-Melech the Ethiopian rescued Jeremiah from the cistern with rags and ropes and was granted divine deliverance.',
    hint: 'Ethiopian official who pulled Jeremiah out of the muddy cistern.',
    testament: 'Old Testament',
    difficulty: 'master',
    timerSeconds: 25
  },
  {
    level: 48,
    challengeIndex: 2,
    stage: 10,
    stageTitle: 'The Ultimate Bible Riddle',
    levelTitle: 'Pure Type-the-Answer Gauntlet',
    riddleType: 'Type the Name',
    isTyped: true,
    questionText: 'TYPE THE NAME — GAUNTLET 2:\nI am the amanuensis (scribe) who physically wrote down Paul’s Epistle to the Romans, inserting my own personal greeting in Romans 16:22: "I, [...], who wrote this letter, greet you in the Lord." Who am I?',
    clues: [
      'Name means "third" in Latin.',
      'Scribe of Paul’s greatest doctrinal letter.',
      'Recorded in Romans 16:22.'
    ],
    options: ['Tertius', 'Quartus', 'Silas', 'Tychicus'],
    correctAnswer: 'Tertius',
    acceptedAlternatives: ['Tertius of Iconium'],
    reference: 'Romans 16:22',
    explanation: 'Tertius was Paul’s secretary who penned Romans and added his own greeting.',
    hint: 'Paul’s scribe who wrote down Romans (name means "Third").',
    testament: 'New Testament',
    difficulty: 'hard',
    timerSeconds: 25
  },
  {
    level: 48,
    challengeIndex: 3,
    stage: 10,
    stageTitle: 'The Ultimate Bible Riddle',
    levelTitle: 'Pure Type-the-Answer Gauntlet',
    riddleType: 'Type the Name',
    isTyped: true,
    questionText: 'TYPE THE NAME — GAUNTLET 3:\nI was the revered prophetess living in the Second Quarter of Jerusalem, wife of Shallum keeper of the royal wardrobe, who was consulted by King Josiah’s high priest and officials when the Book of the Law was rediscovered in the temple. Who am I?',
    clues: [
      'Consulted instead of Jeremiah or Zephaniah.',
      'Prophesied peace for Josiah’s tender heart.',
      'Recorded in 2 Kings 22:14–20 and 2 Chronicles 34:22–28.'
    ],
    options: ['Huldah', 'Deborah', 'Miriam', 'Anna'],
    correctAnswer: 'Huldah',
    acceptedAlternatives: ['Huldah the prophetess', 'Holda'],
    reference: '2 Kings 22:14–20',
    explanation: 'Huldah the prophetess authenticated the rediscovered Book of the Law for King Josiah.',
    hint: 'Prophetess consulted by King Josiah upon finding the Book of the Law.',
    testament: 'Old Testament',
    difficulty: 'master',
    timerSeconds: 25
  },
  {
    level: 48,
    challengeIndex: 4,
    stage: 10,
    stageTitle: 'The Ultimate Bible Riddle',
    levelTitle: 'Pure Type-the-Answer Gauntlet',
    riddleType: 'Type the Name',
    isTyped: true,
    questionText: 'TYPE THE NAME — GAUNTLET 4:\nI was the artisan from the tribe of Judah, son of Uri, son of Hur, whom God specifically filled with the Holy Spirit to design and construct the gold, silver, bronze, wood, and gemstone furniture of the wilderness Tabernacle. Who am I?',
    clues: [
      'First person in Scripture specifically described as "filled with the Spirit of God."',
      'Exodus 31:1–5.',
      'Partnered with Oholiab of Dan.'
    ],
    options: ['Bezalel', 'Oholiab', 'Hiram', 'Hur'],
    correctAnswer: 'Bezalel',
    acceptedAlternatives: ['Bezaleel'],
    reference: 'Exodus 31:1–5',
    explanation: 'Bezalel was the master craftsman filled with the Spirit to build the Tabernacle.',
    hint: 'Master craftsman of the Tabernacle from the tribe of Judah.',
    testament: 'Old Testament',
    difficulty: 'hard',
    timerSeconds: 25
  },
  {
    level: 48,
    challengeIndex: 5,
    stage: 10,
    stageTitle: 'The Ultimate Bible Riddle',
    levelTitle: 'Pure Type-the-Answer Gauntlet',
    riddleType: 'Type the Name',
    isTyped: true,
    questionText: 'TYPE THE NAME — GAUNTLET 5:\nI was the faithful Christian of Ephesus who was not ashamed of Paul’s chains. When Paul was imprisoned in a cold dungeon in Rome and deserted by all others in Asia, I searched diligently for him throughout the imperial city until I found him, and often refreshed his spirit. Paul prayed that the Lord would grant mercy to my household. Who am I?',
    clues: [
      'Commended in 2 Timothy 1:16–18.',
      'Searched Rome diligently to find Paul in prison.',
      'Contrasted with Phygelus and Hermogenes.'
    ],
    options: ['Onesiphorus', 'Epaphras', 'Tychicus', 'Philemon'],
    correctAnswer: 'Onesiphorus',
    acceptedAlternatives: ['Onesiforos'],
    reference: '2 Timothy 1:16–18; 4:19',
    explanation: 'Onesiphorus searched diligently for Paul in Rome, refreshed him in prison, and was not ashamed of his chains.',
    hint: 'Faithful disciple who searched Rome to refresh imprisoned Paul.',
    testament: 'New Testament',
    difficulty: 'master',
    timerSeconds: 25
  },

  // Level 49: Deep Scriptural Synthesis
  {
    level: 49,
    challengeIndex: 1,
    stage: 10,
    stageTitle: 'The Ultimate Bible Riddle',
    levelTitle: 'Deep Scriptural Synthesis',
    riddleType: 'The Impossible Description',
    isTyped: false,
    questionText: 'THE IMPOSSIBLE DESCRIPTION:\nI was a priest who served as high priest in Israel after Eli died, yet King Solomon banished me to my family fields in Anathoth because I had supported Adonijah’s coup instead of Solomon. In 1 Kings 2:27, Scripture notes that Solomon’s banishment of me fulfilled the ancient curse that Yahweh had spoken at Shiloh against the house of Eli over a century earlier! Who was this high priest who escaped Saul’s massacre at Nob with an ephod, served David for decades, but was banished by Solomon?',
    clues: [
      'Son of Ahimelech; sole survivor of Doeg’s massacre at Nob.',
      'Carried the high priestly ephod to David in the cave of Adullam.',
      'Deposed by Solomon, transferring the high priesthood permanently to Zadok.'
    ],
    options: ['Abiathar', 'Zadok', 'Ahimelech', 'Phinehas'],
    correctAnswer: 'Abiathar',
    acceptedAlternatives: ['High Priest Abiathar'],
    reference: '1 Samuel 22:20–23; 23:6; 1 Kings 2:26–27',
    explanation: 'Abiathar was the sole survivor of Nob who served as David’s high priest; his banishment by Solomon fulfilled the judgment against Eli’s house.',
    hint: 'Sole survivor of Nob who was David’s high priest and was later banished by Solomon.',
    testament: 'Old Testament',
    difficulty: 'hard',
    timerSeconds: 30
  },
  {
    level: 49,
    challengeIndex: 2,
    stage: 10,
    stageTitle: 'The Ultimate Bible Riddle',
    levelTitle: 'Deep Scriptural Synthesis',
    riddleType: 'The Double-Meaning Riddle',
    isTyped: false,
    questionText: 'THE DOUBLE-MEANING RIDDLE:\nIn Zechariah 4 and Revelation 11, two prophetic figures are represented as "two olive trees and two lampstands that stand before the Lord of the earth." In Zechariah, they pour golden oil from themselves to feed the seven-branched lampstand, identified as the two anointed ones (sons of oil)—representing Zerubbabel the royal governor and Joshua the high priest. In Revelation 11, who are these two figures with power to shut the sky against rain and turn waters into blood during their 1,260-day prophecy?',
    clues: [
      'The Two Witnesses of Revelation 11.',
      'Clothed in sackcloth, perform miracles echoing Elijah and Moses.',
      'Killed by the beast from the bottomless pit, their corpses lie in the street for three and a half days before being resurrected.'
    ],
    options: ['The Two Witnesses', 'The Two Archangels', 'The Two Olive Branches', 'The Two Cherubim'],
    correctAnswer: 'The Two Witnesses',
    acceptedAlternatives: ['Two Witnesses', 'The 2 Witnesses', 'Two Prophets'],
    reference: 'Zechariah 4:1–14; Revelation 11:3–12',
    explanation: 'The Two Witnesses in Revelation 11 are portrayed as the two olive trees and lampstands who prophesy with great power before being martyred and resurrected.',
    hint: 'Prophetic pair in Revelation 11 depicted as the two olive trees and two lampstands.',
    testament: 'Both',
    difficulty: 'hard',
    timerSeconds: 30
  },
  {
    level: 49,
    challengeIndex: 3,
    stage: 10,
    stageTitle: 'The Ultimate Bible Riddle',
    levelTitle: 'Deep Scriptural Synthesis',
    riddleType: 'Who Am I?',
    isTyped: false,
    questionText: 'WHO AM I?\nI was an Ethiopian court eunuch and high minister in charge of all the royal treasury of Candace, queen of the Ethiopians. Traveling on the desert road from Jerusalem to Gaza, I was reading Isaiah 53 in my chariot: "Like a sheep he was led to the slaughter and like a lamb before its shearer is silent, so he opens not his mouth." When Philip ran to my chariot and asked, "Do you understand what you are reading?", I replied: "How can I, unless someone guides me?" Philip preached Jesus to me, and I was baptized in roadside water, going on my way rejoicing. Who am I (by my biblical title)?',
    clues: [
      'The Ethiopian Eunuch (or Royal Official of Candace).',
      'High finance minister of Nubia/Meroë.',
      'Acts 8:26–39.'
    ],
    options: ['The Ethiopian Eunuch', 'Ebed-Melech', 'Simon of Cyrene', 'Lucius of Cyrene'],
    correctAnswer: 'The Ethiopian Eunuch',
    acceptedAlternatives: ['Ethiopian Eunuch', 'The Ethiopian Official', 'Treasurer of Candace', 'The Eunuch of Candace'],
    reference: 'Acts 8:26–39',
    explanation: 'The Ethiopian Eunuch was the royal treasurer of Queen Candace baptized by Philip after learning of Christ from Isaiah 53.',
    hint: 'Royal treasurer of Queen Candace baptized by Philip on the desert road.',
    testament: 'New Testament',
    difficulty: 'easy',
    timerSeconds: 30
  },
  {
    level: 49,
    challengeIndex: 4,
    stage: 10,
    stageTitle: 'The Ultimate Bible Riddle',
    levelTitle: 'Deep Scriptural Synthesis',
    riddleType: 'The Event Riddle',
    isTyped: false,
    questionText: 'THE EVENT RIDDLE:\nWhen the Apostle Paul met with the elders of the church of Ephesus at Miletus in Acts 20, he gave a tearful farewell discourse warning of fierce wolves arising from within the flock. He concluded his address by quoting a precious beatitude spoken by the Lord Jesus Christ that is found nowhere in any of the Four Gospels: "In all things I have shown you that by working hard in this way we must help the weak and remember the words of the Lord Jesus, how he himself said, ‘[...]’" What was this unwritten Gospel beatitude of Jesus?',
    clues: [
      'Acts 20:35.',
      'An agraphon (saying of Jesus outside the Gospels).',
      'Contrast between giving and receiving.'
    ],
    options: [
      'It is more blessed to give than to receive',
      'Blessed are the pure in heart, for they shall see God',
      'Blessed are those who have not seen and yet have believed',
      'Give, and it will be given to you'
    ],
    correctAnswer: 'It is more blessed to give than to receive',
    acceptedAlternatives: [
      'It is more blessed to give than to receive.',
      'More blessed to give than to receive',
      'It is better to give than to receive'
    ],
    reference: 'Acts 20:35',
    explanation: 'Paul quoted an otherwise unrecorded beatitude of Jesus: "It is more blessed to give than to receive" in his farewell to the Ephesian elders.',
    hint: 'Famous saying of Jesus quoted by Paul in Acts 20:35: "It is more blessed to..."',
    testament: 'New Testament',
    difficulty: 'medium',
    timerSeconds: 30
  },
  {
    level: 49,
    challengeIndex: 5,
    stage: 10,
    stageTitle: 'The Ultimate Bible Riddle',
    levelTitle: 'Deep Scriptural Synthesis',
    riddleType: 'Type the Name',
    isTyped: true,
    questionText: 'TYPE THE NAME — MINI-BOSS RIDDLE:\nI was a wealthy Christian merchant from Cyprus living in Jerusalem whose home served as the primary prayer and gathering headquarters for the early church in Jerusalem. It was to my home that Peter fled after being delivered by the angel from Herod’s prison in Acts 12. My cousin was Barnabas (the Son of Encouragement), and my son was the author of the second Gospel who traveled with Paul and Barnabas and was later restored as "useful for ministry." What was my personal name (the mother of John Mark)?',
    clues: [
      'Acts 12:12: "he went to the house of [...], the mother of John whose other name was Mark."',
      'Rhoda was her household maid.',
      'Held the midnight prayer meeting for imprisoned Peter.'
    ],
    options: ['Mary', 'Mary mother of John Mark', 'Martha', 'Salome'],
    correctAnswer: 'Mary mother of John Mark',
    acceptedAlternatives: ['Mary', 'Mary the mother of John Mark', 'Mary of Jerusalem'],
    reference: 'Acts 12:12',
    explanation: 'Mary the mother of John Mark hosted the Jerusalem house-church where believers prayed for Peter’s release from prison.',
    hint: 'Mother of Gospel writer John Mark whose Jerusalem house was the church’s prayer center.',
    testament: 'New Testament',
    difficulty: 'master',
    timerSeconds: 25
  },

  // Level 50: The Grand Master Final Boss
  {
    level: 50,
    challengeIndex: 1,
    stage: 10,
    stageTitle: 'The Ultimate Bible Riddle',
    levelTitle: 'The Grand Master Final Boss',
    riddleType: 'The Ultimate Bible Riddle',
    isTyped: false,
    questionText: 'THE GRAND MASTER RIDDLE — 1 OF 5:\n"I was foreshadowed as the Seed of the woman who would bruise the serpent’s head (Genesis 3:15), the Passover Lamb whose blood shielded Israel from death in Egypt, the Scapegoat bearing the nation’s sins into the wilderness, the Bronze Serpent lifted on a pole to heal all who look in faith, the Rock struck in the desert to gush living water, the Prophet like Moses from among their brethren, the Son of David whose throne endures forever, the Suffering Servant pierced for our transgressions in Isaiah 53, and the Lion of the tribe of Judah." Who am I?',
    clues: [
      'The central Person of all 66 books of the Bible.',
      'Jesus told the Emmaus disciples that all the Scriptures testify of Him.',
      'The Messiah, the Son of the Living God.'
    ],
    options: ['Jesus Christ', 'Moses', 'King David', 'Elijah'],
    correctAnswer: 'Jesus Christ',
    acceptedAlternatives: ['Jesus', 'Christ', 'The Messiah', 'Yeshua'],
    reference: 'Luke 24:27, 44–47; John 5:39; Hebrews 1:1–3',
    explanation: 'Jesus Christ is the grand fulfillment of every shadow, covenant, prophecy, and sacrifice across all Scripture.',
    hint: 'The central Messiah and Redeemer prophesied across all 66 books.',
    testament: 'Both',
    difficulty: 'master',
    timerSeconds: 30
  },
  {
    level: 50,
    challengeIndex: 2,
    stage: 10,
    stageTitle: 'The Ultimate Bible Riddle',
    levelTitle: 'The Grand Master Final Boss',
    riddleType: 'The Ultimate Bible Riddle',
    isTyped: false,
    questionText: 'THE GRAND MASTER RIDDLE — 2 OF 5:\n"In the opening chapter of Revelation, I appeared to the Apostle John in exile on the island of Patmos on the Lord’s Day. Clothed with a long robe and with a golden sash around my chest, my head and hairs were white like wool, white as snow; my eyes were like a flame of fire, my feet like burnished bronze refined in a furnace, my voice like the roar of many waters, and out of my mouth came a sharp two-edged sword. When John saw me, he fell at my feet as though dead. I laid my right hand on him, saying: ‘Fear not; I am the first and the last, and the living one. I died, and behold I am alive forevermore, and I have the keys of Death and Hades.’" What title did I take in this vision?',
    clues: [
      'Revelation 1:12–18.',
      'Echoes Daniel 7:13–14.',
      'Identified as "one like a son of man."'
    ],
    options: ['The Son of Man', 'The Archangel Michael', 'The Ancient of Days', 'The Angel of the Covenant'],
    correctAnswer: 'The Son of Man',
    acceptedAlternatives: ['Son of Man', 'One like a son of man', 'The Glorified Christ'],
    reference: 'Revelation 1:12–18; Daniel 7:13',
    explanation: 'The glorified Christ revealed Himself to John on Patmos as the Son of Man holding the keys of Death and Hades.',
    hint: 'The glorified Christ who appeared to John on Patmos holding the keys of Death and Hades.',
    testament: 'New Testament',
    difficulty: 'master',
    timerSeconds: 30
  },
  {
    level: 50,
    challengeIndex: 3,
    stage: 10,
    stageTitle: 'The Ultimate Bible Riddle',
    levelTitle: 'The Grand Master Final Boss',
    riddleType: 'The Ultimate Bible Riddle',
    isTyped: false,
    questionText: 'THE GRAND MASTER RIDDLE — 3 OF 5:\n"In Revelation 21–22, I am the holy city, the New Jerusalem, coming down out of heaven from God, prepared as a bride adorned for her husband. I have the glory of God, radiance like a most rare jewel, a great high wall with twelve gates guarded by twelve angels with the names of the twelve tribes of Israel inscribed, and twelve foundations bearing the names of the twelve apostles of the Lamb. My streets are pure gold transparent like glass, I have no temple for the Lord God the Almighty and the Lamb are my temple, and the river of the water of life flows from the throne down the middle of my street with the tree of life bearing twelve kinds of fruit." What am I designated as in Revelation 21:9?',
    clues: [
      'The Bride, the wife of the Lamb.',
      'The New Jerusalem / Heavenly City.',
      'The eternal dwelling of God with redeemed humanity.'
    ],
    options: ['The Bride, the Wife of the Lamb', 'The Earthly Jerusalem', 'Solomon’s Temple', 'The Garden of Eden'],
    correctAnswer: 'The Bride, the Wife of the Lamb',
    acceptedAlternatives: ['The Bride of Christ', 'The New Jerusalem', 'The Wife of the Lamb', 'New Jerusalem'],
    reference: 'Revelation 21:1–27; 22:1–5',
    explanation: 'The New Jerusalem is explicitly introduced in Revelation 21:9 as "the Bride, the wife of the Lamb," the radiant eternal dwelling of God with His people.',
    hint: 'The New Jerusalem described as a bride adorned for her husband.',
    testament: 'New Testament',
    difficulty: 'master',
    timerSeconds: 30
  },
  {
    level: 50,
    challengeIndex: 4,
    stage: 10,
    stageTitle: 'The Ultimate Bible Riddle',
    levelTitle: 'The Grand Master Final Boss',
    riddleType: 'The Ultimate Bible Riddle',
    isTyped: false,
    questionText: 'THE GRAND MASTER RIDDLE — 4 OF 5:\n"In Revelation 19:11–16, heaven stands open and I appear riding upon a white horse. I am called Faithful and True, and in righteousness I judge and make war. My eyes are like a flame of fire, and on my head are many diadems; I am clothed in a robe dipped in blood, and the armies of heaven arrayed in fine linen, white and pure, follow me on white horses. From my mouth comes a sharp sword to strike down the nations, and I tread the winepress of the fury of the wrath of God the Almighty. On my robe and on my thigh I have a name written: ‘KING OF KINGS AND LORD OF LORDS.’ What is the title given to me in verse 13 as the eternal revelation of God?"',
    clues: [
      'Revelation 19:13.',
      'Echoes John 1:1 ("In the beginning was the Word...").',
      'Designated: "The Word of God."'
    ],
    options: ['The Word of God', 'The King of Glory', 'The Prince of Peace', 'The Ancient of Days'],
    correctAnswer: 'The Word of God',
    acceptedAlternatives: ['Word of God', 'Logos of God', 'The Logos'],
    reference: 'Revelation 19:11–16; John 1:1, 14',
    explanation: 'The rider on the white horse in Revelation 19:13 is named "The Word of God," returning in triumph as King of Kings and Lord of Lords.',
    hint: 'Title given to the conquering rider on the white horse in Revelation 19:13.',
    testament: 'New Testament',
    difficulty: 'master',
    timerSeconds: 30
  },
  {
    level: 50,
    challengeIndex: 5,
    stage: 10,
    stageTitle: 'The Ultimate Bible Riddle',
    levelTitle: 'The Grand Master Final Boss',
    riddleType: 'Type the Name',
    isTyped: true,
    questionText: 'THE GRAND MASTER RIDDLE — 5 OF 5 (FINAL BOSS):\nIn the closing chapter of the entire Bible (Revelation 22:16), Jesus sends His angel to testify these things to the churches and proclaims His climactic twofold messianic title, uniting His eternal divine pre-existence as Creator with His human Davidic royalty, followed by His dawn-bringing promise: "I, Jesus, have sent my angel to testify to you these things for the churches. I am the root and the offspring of David, the [...]." What is this glorious three-word dawn title proclaimed by Jesus in Revelation 22:16?',
    clues: [
      'Revelation 22:16.',
      'Followed by: "The Spirit and the Bride say, ‘Come.’"',
      'Symbolizes the eternal dawn that banishes darkness forever.'
    ],
    options: ['Bright and Morning Star', 'Light of the World', 'Sun of Righteousness', 'Alpha and Omega'],
    correctAnswer: 'Bright and Morning Star',
    acceptedAlternatives: [
      'The Bright and Morning Star',
      'Bright Morning Star',
      'The Morning Star',
      'Morning Star'
    ],
    reference: 'Revelation 22:16',
    explanation: 'Jesus proclaims Himself "the root and the offspring of David, the bright and morning star" in Revelation 22:16, concluding the canon of Holy Scripture.',
    hint: 'Glorious dawn title of Jesus in Revelation 22:16: "the bright and..."',
    testament: 'New Testament',
    difficulty: 'master',
    timerSeconds: 25
  }
];

fs.writeFileSync(
  path.join(process.cwd(), 'scripts', 'riddlesStages9to10.ts'),
  `// Bible Riddles — Stages 9 & 10 (Levels 41–50, 50 Riddles)
import type { RawRiddleQuestion } from './riddlesStages1to2';

export const RIDDLES_STAGES_9_TO_10: RawRiddleQuestion[] = ${JSON.stringify(
    batch5Questions,
    null,
    2
  )};
`
);

console.log(`Generated ${batch5Questions.length} riddles for Stages 9–10 (Batch 5).`);
