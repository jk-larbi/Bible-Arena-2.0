import fs from 'fs';
import path from 'path';

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

const puzzles: RawBiblePuzzle[] = [
  // ==========================================
  // STAGE 4: THE MISSING DETAILS (Levels 16–20)
  // ==========================================

  // Level 16: Forgotten Objects
  {
    level: 16,
    challengeIndex: 1,
    stage: 4,
    stageTitle: 'The Missing Details',
    levelTitle: 'Forgotten Objects',
    puzzleType: 'Who or What Is Missing?',
    questionText: 'WHO OR WHAT IS MISSING?\nWhen the prophet Ahijah the Shilonite met Jeroboam outside Jerusalem, what object did Ahijah tear into twelve pieces to symbolize the division of Solomon\'s kingdom?',
    clues: [
      'It was a brand new garment worn by the prophet himself.',
      'He tore it into exactly twelve pieces in the open field.',
      'He gave ten pieces to Jeroboam son of Nebat as a prophetic token.'
    ],
    options: ['His new cloak', 'A linen girdle', 'A priestly turban', 'A wool blanket'],
    correctAnswer: 'His new cloak',
    reference: '1 Kings 11:29–31',
    explanation: 'Ahijah the Shilonite had wrapped himself with a new cloak (outer garment). When they were alone in the field, Ahijah caught hold of the new cloak and tore it into twelve pieces, telling Jeroboam to take ten for himself.',
    hint: 'It was an item of clothing Ahijah had recently put on before walking out into the countryside.',
    difficulty: 'medium',
    timerSeconds: 25
  },
  {
    level: 16,
    challengeIndex: 2,
    stage: 4,
    stageTitle: 'The Missing Details',
    levelTitle: 'Forgotten Objects',
    puzzleType: 'Who or What Is Missing?',
    questionText: 'WHO OR WHAT IS MISSING?\nWhen the sons of the prophets were cutting trees by the Jordan and an iron axe head slipped into deep water, what did Elisha cut and throw in to make the iron float?',
    clues: [
      'The workman cried out that the axe head was borrowed.',
      'The man of God asked: "Where did it fall?"',
      'Elisha threw this natural item onto the water to miraculously raise the heavy iron.'
    ],
    options: ['A stick of wood', 'A handful of salt', 'A bronze rod', 'An olive leaf branch'],
    correctAnswer: 'A stick of wood',
    reference: '2 Kings 6:5–7',
    explanation: 'When the borrowed iron axe head fell into the water, Elisha cut off a stick (piece of wood), threw it into the water at that exact spot, and made the iron float to the surface so the man could reach out and take it.',
    hint: 'Elisha harvested a simple piece of timber from the surrounding trees and tossed it into the current.',
    difficulty: 'medium',
    timerSeconds: 25
  },
  {
    level: 16,
    challengeIndex: 3,
    stage: 4,
    stageTitle: 'The Missing Details',
    levelTitle: 'Forgotten Objects',
    puzzleType: 'Who or What Is Missing?',
    questionText: 'WHO OR WHAT IS MISSING?\nWhen Peter was confronted at Capernaum regarding the two-drachma temple tax, Jesus instructed him to catch a fish. What specific object did Jesus say would be found inside the fish\'s mouth?',
    clues: [
      'Jesus told him to go to the sea and cast a hook.',
      'Take the first fish that comes up and open its mouth.',
      'The exact coin found inside was sufficient to pay the temple tax for both Jesus and Peter.'
    ],
    options: ['A four-drachma stater (shekel)', 'A Roman denarius', 'A gold sovereign daric', 'Two copper mites (leptons)'],
    correctAnswer: 'A four-drachma stater (shekel)',
    reference: 'Matthew 17:24–27',
    explanation: 'Jesus told Peter to take the first fish that came up, open its mouth, and find a stater (a four-drachma coin equivalent to a full shekel), which was the exact amount needed for two adult men\'s temple tax.',
    hint: 'It was a Greek silver coin equal to four drachmas, covering two adult tax obligations.',
    difficulty: 'hard',
    timerSeconds: 25
  },
  {
    level: 16,
    challengeIndex: 4,
    stage: 4,
    stageTitle: 'The Missing Details',
    levelTitle: 'Forgotten Objects',
    puzzleType: 'Who or What Is Missing?',
    questionText: 'WHO OR WHAT IS MISSING?\nWhen Samson was attacked by the Philistines at Lehi after being bound by the men of Judah, what makeshift weapon did he grab from the ground to strike down one thousand men?',
    clues: [
      'The Spirit of the Lord rushed upon him and his cords melted off his arms.',
      'He found a fresh, unbleached bone of a beast lying nearby.',
      'He composed a victory riddle celebrating his triumph with this animal bone.'
    ],
    options: ['The fresh jawbone of a donkey', 'The thigh bone of an ox', 'A bronze spearhead', 'A heavy wooden plowshare'],
    correctAnswer: 'The fresh jawbone of a donkey',
    reference: 'Judges 15:14–17',
    explanation: 'Samson found a fresh jawbone of a donkey, reached out his hand and took it, and struck down 1,000 men with it at Lehi, calling the place Ramath-lehi ("the hill of the jawbone").',
    hint: 'It belonged to an unburied beast of burden and had not yet dried out or turned brittle.',
    difficulty: 'medium',
    timerSeconds: 25
  },
  {
    level: 16,
    challengeIndex: 5,
    stage: 4,
    stageTitle: 'The Missing Details',
    levelTitle: 'Forgotten Objects',
    puzzleType: 'Who or What Is Missing?',
    questionText: 'WHO OR WHAT IS MISSING?\nInside the Most Holy Place of the wilderness tabernacle, what three sacred items were placed inside or right beside the Ark of the Covenant according to Hebrews 9:4?',
    clues: [
      'A golden pot holding miraculous wilderness bread.',
      'The priestly rod of Aaron that miraculously budded with blossoms and ripe almonds.',
      'Identify the third sacred item containing God\'s fundamental commandments.'
    ],
    options: ['The stone tablets of the covenant', 'The brass serpent Nehushtan', 'The golden anointing horn of oil', 'The silver trumpets of Moses'],
    correctAnswer: 'The stone tablets of the covenant',
    reference: 'Hebrews 9:4; Exodus 16:33–34; Numbers 17:10',
    explanation: 'Hebrews 9:4 records that the Ark contained a golden urn holding the manna, Aaron\'s staff that budded, and the two stone tablets of the covenant inscribed by the finger of God.',
    hint: 'They were carved at Mount Sinai and contained the Ten Commandments.',
    difficulty: 'medium',
    timerSeconds: 25
  },

  // Level 17: Overlooked Numbers
  {
    level: 17,
    challengeIndex: 1,
    stage: 4,
    stageTitle: 'The Missing Details',
    levelTitle: 'Overlooked Numbers',
    puzzleType: 'Find the Hidden Connection',
    questionText: 'OVERLOOKED NUMBERS:\nIn John 21, when Simon Peter hauled the unbroken net ashore on the Sea of Tiberias at Jesus\' command, what was the exact count of large fish recorded by the disciples?',
    clues: [
      'The disciples had caught nothing all night.',
      'Jesus told them: "Cast the net on the right side of the boat."',
      'Although there were so many large fish, the net was not torn.'
    ],
    options: ['153 large fish', '120 large fish', '70 large fish', '144 large fish'],
    correctAnswer: '153 large fish',
    reference: 'John 21:11',
    explanation: 'Simon Peter went aboard and hauled the net ashore, full of large fish, 153 of them. And although there were so many, the net was not torn.',
    hint: 'It is an odd number over one hundred and fifty, famously counted by the eyewitnesses.',
    difficulty: 'medium',
    timerSeconds: 25
  },
  {
    level: 17,
    challengeIndex: 2,
    stage: 4,
    stageTitle: 'The Missing Details',
    levelTitle: 'Overlooked Numbers',
    puzzleType: 'Find the Hidden Connection',
    questionText: 'OVERLOOKED NUMBERS:\nWhen Paul was shipwrecked on the island of Malta during his voyage to Rome, how many persons in total were safely aboard the grain ship according to Luke\'s exact record in Acts 27?',
    clues: [
      'Neither sun nor stars appeared for many days as Euroclydon battered the ship.',
      'Paul broke bread and encouraged everyone to eat after fasting fourteen days.',
      'Every single soul on board reached the shore safely without a single fatality.'
    ],
    options: ['276 persons', '120 persons', '318 persons', '400 persons'],
    correctAnswer: '276 persons',
    reference: 'Acts 27:37',
    explanation: 'Acts 27:37 explicitly notes: "We were in all two hundred and seventy-six persons in the ship." All reached land safely, fulfilling God\'s promise to Paul.',
    hint: 'Between 250 and 300 souls were numbered on the Alexandrian grain ship.',
    difficulty: 'hard',
    timerSeconds: 25
  },
  {
    level: 17,
    challengeIndex: 3,
    stage: 4,
    stageTitle: 'The Missing Details',
    levelTitle: 'Overlooked Numbers',
    puzzleType: 'Find the Hidden Connection',
    questionText: 'OVERLOOKED NUMBERS:\nWhen Gideon screened his army down at the spring of Harod, how many men passed the final water-lapping test to march against the Midianites?',
    clues: [
      'Originally twenty-two thousand fearful soldiers returned home from Mount Gilead.',
      'Ten thousand remained before the water test at the spring.',
      'Only the men who lapped water with their tongue as a dog laps were chosen.'
    ],
    options: ['300 men', '700 men', '1,000 men', '120 men'],
    correctAnswer: '300 men',
    reference: 'Judges 7:5–7',
    explanation: 'The number of those who lapped, putting their hand to their mouth, was 300 men. The Lord said to Gideon: "With the 300 men who lapped I will save you and deliver the Midianites into your hand."',
    hint: 'A compact force of three centuries armed with trumpets, empty jars, and torches.',
    difficulty: 'medium',
    timerSeconds: 25
  },
  {
    level: 17,
    challengeIndex: 4,
    stage: 4,
    stageTitle: 'The Missing Details',
    levelTitle: 'Overlooked Numbers',
    puzzleType: 'Find the Hidden Connection',
    questionText: 'OVERLOOKED NUMBERS:\nHow many foxes (or jackals) did Samson capture and tie tail-to-tail with burning torches to incinerate the standing grain and olive groves of the Philistines?',
    clues: [
      'He was avenging the loss of his Timnite wife to his companion.',
      'He went and caught this exact number of wild beasts.',
      'He turned them tail-to-tail and put a torch between each pair of tails.'
    ],
    options: ['300 foxes', '150 foxes', '70 foxes', '500 foxes'],
    correctAnswer: '300 foxes',
    reference: 'Judges 15:4–5',
    explanation: 'Samson went and caught 300 foxes and took torches. And he turned them tail to tail and put a torch between each pair of tails, setting the Philistine grain on fire.',
    hint: 'Exactly three hundred animals, making one hundred and fifty burning pairs.',
    difficulty: 'medium',
    timerSeconds: 25
  },
  {
    level: 17,
    challengeIndex: 5,
    stage: 4,
    stageTitle: 'The Missing Details',
    levelTitle: 'Overlooked Numbers',
    puzzleType: 'Find the Hidden Connection',
    questionText: 'OVERLOOKED NUMBERS:\nWhen Abraham gathered his trained men to rescue his nephew Lot after the battle of the kings in the Valley of Siddim, how many trained men born in his household went into pursuit?',
    clues: [
      'Lot had been taken captive by Chedorlaomer and his confederate kings.',
      'Abraham mobilized only servants born and trained under his own tent roof.',
      'They pursued the raiders all the way north past Damascus to Hobah.'
    ],
    options: ['318 trained men', '100 trained men', '400 trained men', '700 trained men'],
    correctAnswer: '318 trained men',
    reference: 'Genesis 14:14',
    explanation: 'When Abram heard that his kinsman had been taken captive, he led forth his trained men, born in his house, 318 of them, and went in pursuit as far as Dan.',
    hint: 'Three hundred plus eighteen loyal household warriors.',
    difficulty: 'hard',
    timerSeconds: 25
  },

  // Level 18: Specific Locations
  {
    level: 18,
    challengeIndex: 1,
    stage: 4,
    stageTitle: 'The Missing Details',
    levelTitle: 'Specific Locations',
    puzzleType: 'The Bible Detective',
    questionText: 'THE BIBLE DETECTIVE:\nDuring the great drought declared by Elijah, at which specific brook east of the Jordan did God command him to hide, where ravens brought him bread and meat morning and evening?',
    clues: [
      'It was a ravine located east of the Jordan River.',
      'Ravens brought him food every morning and evening while he drank from its water.',
      'When the brook dried up from lack of rain, God sent him to Zarephath of Sidon.'
    ],
    options: ['Brook Cherith', 'Brook Kishon', 'Brook Kidron', 'River Jabbok'],
    correctAnswer: 'Brook Cherith',
    reference: '1 Kings 17:3–6',
    explanation: 'God told Elijah: "Depart from here and turn eastward and hide yourself by the brook Cherith, which is east of the Jordan... and I have commanded the ravens to feed you there."',
    hint: 'Begins with Ch; an isolated wadi canyon east of the Jordan.',
    difficulty: 'medium',
    timerSeconds: 25
  },
  {
    level: 18,
    challengeIndex: 2,
    stage: 4,
    stageTitle: 'The Missing Details',
    levelTitle: 'Specific Locations',
    puzzleType: 'The Bible Detective',
    questionText: 'THE BIBLE DETECTIVE:\nIn which specific valley did the armies of Israel under Saul camp when young David picked five smooth stones from the stream to confront Goliath the Philistine champion?',
    clues: [
      'The Philistines stood on one mountain and Israel on the other mountain.',
      'A valley with a dry streambed separated the two hostile camps.',
      'Its Hebrew name \'Emek ha-Elah\' means valley of the terebinth tree.'
    ],
    options: ['Valley of Elah', 'Valley of Achor', 'Valley of Jezreel', 'Valley of Hinnom'],
    correctAnswer: 'Valley of Elah',
    reference: '1 Samuel 17:2, 19',
    explanation: 'Saul and the men of Israel were gathered and encamped in the Valley of Elah, and drew up in line of battle against the Philistines. It was from this valley\'s brook that David gathered five smooth stones.',
    hint: 'Named after the large terebinth trees common in the Judean foothills.',
    difficulty: 'medium',
    timerSeconds: 25
  },
  {
    level: 18,
    challengeIndex: 3,
    stage: 4,
    stageTitle: 'The Missing Details',
    levelTitle: 'Specific Locations',
    puzzleType: 'The Bible Detective',
    questionText: 'THE BIBLE DETECTIVE:\nIn Athens, on which rocky council hill overlooking the Agora did the apostle Paul deliver his famous discourse concerning the altar to the "Unknown God"?',
    clues: [
      'Philosophers of the Epicureans and Stoics conversed with him in the marketplace.',
      'They took him to this ancient judicial hill where council trials were held.',
      'Dionysius and a woman named Damaris believed his message there.'
    ],
    options: ['Areopagus (Mars\' Hill)', 'Mount Lycabettus', 'The Pnyx', 'The Acropolis Gateway'],
    correctAnswer: 'Areopagus (Mars\' Hill)',
    reference: 'Acts 17:19–34',
    explanation: 'Paul was brought to the Areopagus (literally "Hill of Ares", known in Latin as Mars\' Hill) in Athens, where he addressed the supreme council and gathered philosophical elite.',
    hint: 'The Greek name begins with \'Areo-\', referring to the ancient council venue.',
    difficulty: 'medium',
    timerSeconds: 25
  },
  {
    level: 18,
    challengeIndex: 4,
    stage: 4,
    stageTitle: 'The Missing Details',
    levelTitle: 'Specific Locations',
    puzzleType: 'The Bible Detective',
    questionText: 'THE BIBLE DETECTIVE:\nTo which pool in Jerusalem did Jesus send the man born blind to wash after spitting on the ground and anointing the man\'s eyes with mud, a name translated as "Sent"?',
    clues: [
      'Jesus made mud with saliva and spread it over the blind man\'s eyes.',
      'He instructed him: "Go, wash in the pool of...", which means "Sent".',
      'The man went, washed, and came back seeing.'
    ],
    options: ['Pool of Siloam', 'Pool of Bethesda', 'Pool of Gihon', 'Upper Pool of Shelah'],
    correctAnswer: 'Pool of Siloam',
    reference: 'John 9:6–7',
    explanation: 'Jesus told the blind man: "Go, wash in the pool of Siloam" (which means Sent). So he went and washed and came back seeing. Bethesda was the pool with five porches in John 5.',
    hint: 'Its Hebrew name Shiloah or Siloam explicitly means "Sent" in John\'s Gospel.',
    difficulty: 'medium',
    timerSeconds: 25
  },
  {
    level: 18,
    challengeIndex: 5,
    stage: 4,
    stageTitle: 'The Missing Details',
    levelTitle: 'Specific Locations',
    puzzleType: 'The Bible Detective',
    questionText: 'THE BIBLE DETECTIVE:\nAt which mountain cave in Horeb did Elijah lodge when God manifested His presence not in the wind, earthquake, or fire, but in a "sound of a low whisper" (still small voice)?',
    clues: [
      'Elijah fled forty days and forty nights on the strength of angel food.',
      'He arrived at the sacred mountain known as Horeb, the mount of God.',
      'He stood at the entrance of a cave wrapping his face in his mantle.'
    ],
    options: ['Mount Horeb (Sinai)', 'Mount Nebo', 'Mount Hermon', 'Mount Gerizim'],
    correctAnswer: 'Mount Horeb (Sinai)',
    reference: '1 Kings 19:8–13',
    explanation: 'Elijah arose and ate and drank, and went in the strength of that food forty days and forty nights to Horeb, the mount of God. There he came to a cave and lodged in it.',
    hint: 'The desert mountain where Moses had previously received the tablets of the Law.',
    difficulty: 'medium',
    timerSeconds: 25
  },

  // Level 19: Silent Witnesses (Uncommon Biblical Figures)
  {
    level: 19,
    challengeIndex: 1,
    stage: 4,
    stageTitle: 'The Missing Details',
    levelTitle: 'Silent Witnesses',
    puzzleType: 'The Bible Detective',
    questionText: 'THE BIBLE DETECTIVE:\nWho was the Cushite court official in King Zedekiah\'s palace who boldly intervened to rescue Jeremiah from drowning in the muddy cistern of Malkijah using old rags and cords?',
    clues: [
      'He was an Ethiopian / Cushite eunuch serving in the royal court of Judah.',
      'He appealed directly to King Zedekiah at the Gate of Benjamin.',
      'He took thirty men and lowering decayed rags under Jeremiah\'s armpits, pulled him out of the mire.'
    ],
    options: ['Ebed-Melech', 'Jehudi', 'Pashhur', 'Gedaliah'],
    correctAnswer: 'Ebed-Melech',
    reference: 'Jeremiah 38:7–13; 39:15–18',
    explanation: 'Ebed-Melech the Ethiopian heard that they had put Jeremiah into the cistern. He went from the king\'s palace, spoke to Zedekiah, and safely hauled Jeremiah out of the mud with ropes and cushioned rags. God promised to spare his life when Jerusalem fell.',
    hint: 'His name literally means "Servant of the King" in Hebrew.',
    difficulty: 'hard',
    timerSeconds: 25
  },
  {
    level: 19,
    challengeIndex: 2,
    stage: 4,
    stageTitle: 'The Missing Details',
    levelTitle: 'Silent Witnesses',
    puzzleType: 'The Bible Detective',
    questionText: 'THE BIBLE DETECTIVE:\nWho was the servant girl at the house of Mary the mother of John Mark who was so overjoyed at hearing Peter\'s voice after his prison escape that she ran in without opening the gate?',
    clues: [
      'The church had gathered at Mary\'s house to offer constant prayer for Peter.',
      'When Peter knocked at the outer gate, this girl came to answer.',
      'Recognizing his voice, in her joy she failed to open the door, leaving Peter knocking outside while others accused her of being out of her mind.'
    ],
    options: ['Rhode', 'Syntyche', 'Damaris', 'Euodia'],
    correctAnswer: 'Rhode',
    reference: 'Acts 12:13–16',
    explanation: 'Acts 12:13 records: "And when he knocked at the door of the gateway, a servant girl named Rhoda came to answer. Recognizing Peter\'s voice, in her joy she did not open the gate but ran in and reported that Peter was standing at the gate."',
    hint: 'Her Greek name Rhoda means "rose".',
    difficulty: 'medium',
    timerSeconds: 25
  },
  {
    level: 19,
    challengeIndex: 3,
    stage: 4,
    stageTitle: 'The Missing Details',
    levelTitle: 'Silent Witnesses',
    puzzleType: 'The Bible Detective',
    questionText: 'THE BIBLE DETECTIVE:\nWho served as the faithful scribe and companion of the prophet Jeremiah, writing down from Jeremiah\'s dictation the words of the Lord upon a scroll that was later burned by King Jehoiakim?',
    clues: [
      'He was the son of Neriah, son of Mahseiah.',
      'He read the prophetic scroll aloud in the temple chambers and before the royal princes.',
      'When the king cut and burned the scroll, he and Jeremiah rewrote it with many additional words.'
    ],
    options: ['Baruch', 'Gera', 'Seraiah', 'Hilkiah'],
    correctAnswer: 'Baruch',
    reference: 'Jeremiah 36:4–32; 45:1–5',
    explanation: 'Jeremiah called Baruch the son of Neriah, and Baruch wrote on a scroll at the dictation of Jeremiah all the words of the Lord. When King Jehoiakim cut it with a penknife and burned it in the hearth, Baruch rewrote the entire scroll at Jeremiah\'s direction.',
    hint: 'His name in Hebrew means "Blessed".',
    difficulty: 'medium',
    timerSeconds: 25
  },
  {
    level: 19,
    challengeIndex: 4,
    stage: 4,
    stageTitle: 'The Missing Details',
    levelTitle: 'Silent Witnesses',
    puzzleType: 'The Bible Detective',
    questionText: 'THE BIBLE DETECTIVE:\nWho was the servant of Elisha who ran after Naaman the Syrian commander to fraudulently claim silver and garments in Elisha\'s name, and was consequently struck with Naaman\'s leprosy?',
    clues: [
      'Elisha had refused to take any gift or payment from Naaman after his healing.',
      'This greedy servant swore by the Lord to chase down Naaman and take something.',
      'When Elisha asked: "Where have you been?", he lied, and leprosy clung to him and his descendants forever.'
    ],
    options: ['Gehazi', 'Benaiah', 'Adoram', 'Hazael'],
    correctAnswer: 'Gehazi',
    reference: '2 Kings 5:20–27',
    explanation: 'Gehazi, the servant of Elisha the man of God, pursued Naaman, lied to him to extract two talents of silver and two changes of clothing, and hid them in the house. Elisha exposed him: "The leprosy of Naaman shall cling to you and to your descendants forever."',
    hint: 'Begins with G; Elisha\'s right-hand assistant who fell into covetousness.',
    difficulty: 'medium',
    timerSeconds: 25
  },
  {
    level: 19,
    challengeIndex: 5,
    stage: 4,
    stageTitle: 'The Missing Details',
    levelTitle: 'Silent Witnesses',
    puzzleType: 'The Bible Detective',
    questionText: 'THE BIBLE DETECTIVE:\nWhich concubine of King Saul demonstrated remarkable maternal devotion by spreading sackcloth upon a rock and guarding the impaled bodies of her sons day and night from birds and wild beasts for months?',
    clues: [
      'She was the daughter of Aiah and a concubine of Saul.',
      'Her two sons, Armoni and Mephibosheth (not Jonathan\'s son), were given to the Gibeonites to be hanged.',
      'From the beginning of harvest until rain fell, she did not allow birds by day nor beasts of the field by night to touch them.'
    ],
    options: ['Rizpah', 'Abital', 'Ahinoam', 'Maacah'],
    correctAnswer: 'Rizpah',
    reference: '2 Samuel 21:8–14',
    explanation: 'Rizpah the daughter of Aiah took sackcloth and spread it on the rock for herself from the beginning of harvest until rain fell from the heavens on them. She kept birds of the air from landing on them by day and beasts of the field by night until David brought their bones for honorable burial.',
    hint: 'Her name is Rizpah, celebrated for guarding the bodies at Gibeah.',
    difficulty: 'hard',
    timerSeconds: 25
  },

  // Level 20: Missing Details Boss
  {
    level: 20,
    challengeIndex: 1,
    stage: 4,
    stageTitle: 'The Missing Details',
    levelTitle: 'Missing Details Boss',
    puzzleType: 'Bible Logic Grid',
    questionText: 'MISSING DETAILS BOSS:\nThree women in Scripture made historic covenants or pledges involving items of thread or fabric. Deduce which woman is matched with which specific fabric or cord:\n1. Rahab of Jericho\n2. Tamar daughter-in-law of Judah\n3. The Shunammite woman',
    clues: [
      'One tied a scarlet cord in her window to preserve her entire household from destruction.',
      'One received a signet, cord, and staff as a pledge until a young goat was sent.',
      'One made a furnished upper chamber with a bed, table, chair, and lampstand for God\'s prophet.'
    ],
    options: [
      'Rahab: scarlet cord; Tamar: signet and cord; Shunammite: prophet\'s furnished room',
      'Rahab: linen girdle; Tamar: purple veil; Shunammite: embroidered blanket',
      'Rahab: blue thread; Tamar: goatskin coat; Shunammite: tent canopy',
      'Rahab: scarlet cord; Tamar: gold ring; Shunammite: mantle of fleece'
    ],
    correctAnswer: 'Rahab: scarlet cord; Tamar: signet and cord; Shunammite: prophet\'s furnished room',
    reference: 'Joshua 2:18–21; Genesis 38:18; 2 Kings 4:10',
    explanation: 'Rahab tied the scarlet cord in her window in Joshua 2. Tamar asked for Judah\'s signet, cord, and staff in Genesis 38:18. The wealthy Shunammite woman prepared an upper room with bed, table, stool, and candlestick for Elisha in 2 Kings 4:10.',
    hint: 'Rahab used a scarlet rope; Tamar demanded Judah\'s identification cord and signet.',
    difficulty: 'master',
    timerSeconds: 20
  },
  {
    level: 20,
    challengeIndex: 2,
    stage: 4,
    stageTitle: 'The Missing Details',
    levelTitle: 'Missing Details Boss',
    puzzleType: 'Spot the Biblical Mistake',
    questionText: 'MISSING DETAILS BOSS:\nIdentify the ONE statement below that contains a factual biblical MISTAKE regarding Moses\' final days and burial:',
    clues: [
      'Moses went up from the plains of Moab to Mount Nebo, to the top of Pisgah.',
      'The Lord showed him the entire Promised Land from Gilead to Dan.',
      'One of the details regarding who buried him or his physical state is deliberately distorted.'
    ],
    options: [
      'Joshua and Eleazar prepared a tomb and inscribed Moses\' memorial stone on Nebo',
      'The Lord buried Moses in the valley in the land of Moab opposite Beth-peor',
      'Moses was 120 years old when he died, yet his eye was undimmed and his vigor unabated',
      'No man knows the place of Moses\' grave to this day'
    ],
    correctAnswer: 'Joshua and Eleazar prepared a tomb and inscribed Moses\' memorial stone on Nebo',
    reference: 'Deuteronomy 34:1–7',
    explanation: 'Deuteronomy 34:6 explicitly states that the Lord Himself buried Moses in the valley in Moab, and "no one knows the place of his burial to this day." Joshua and Eleazar did not build or inscribe any tomb for him.',
    hint: 'No human hands ever handled Moses\' burial or marked his grave.',
    difficulty: 'hard',
    timerSeconds: 20
  },
  {
    level: 20,
    challengeIndex: 3,
    stage: 4,
    stageTitle: 'The Missing Details',
    levelTitle: 'Missing Details Boss',
    puzzleType: 'The Impossible Detail',
    questionText: 'MISSING DETAILS BOSS:\nWhich of these detailed claims about the Ark of the Covenant is an IMPOSSIBLE HISTORICAL ERROR?',
    clues: [
      'The Ark was built of acacia wood overlaid inside and out with pure gold.',
      'It was captured by the Philistines at the battle of Aphek and placed in Dagon\'s temple.',
      'Examine its fate during the Babylonian exile under King Nebuchadnezzar.'
    ],
    options: [
      'King Nebuchadnezzar displayed the Ark of the Covenant inside Marduk\'s temple in Babylon along with Belshazzar\'s goblets',
      'The Ark was carried around the walls of Jericho once a day for six days and seven times on the seventh day',
      'Uzzah was struck dead when he touched the Ark after the oxen stumbled at the threshing floor of Nacon',
      'Solomon placed the Ark beneath the wings of the two olivewood cherubim in the inner sanctuary of the temple'
    ],
    correctAnswer: 'King Nebuchadnezzar displayed the Ark of the Covenant inside Marduk\'s temple in Babylon along with Belshazzar\'s goblets',
    reference: '2 Kings 25:13–17; Jeremiah 52:17–23; 2 Samuel 6:6–7',
    explanation: 'The Ark of the Covenant is never mentioned among the captured temple vessels taken to Babylon in 2 Kings 25 or Jeremiah 52 (which detail the bronze pillars, basins, and golden utensils). Scripture never states Nebuchadnezzar displayed the Ark in Marduk\'s temple.',
    hint: 'The Ark disappears from Old Testament historical narrative before the Babylonian looting inventory.',
    difficulty: 'master',
    timerSeconds: 20
  },
  {
    level: 20,
    challengeIndex: 4,
    stage: 4,
    stageTitle: 'The Missing Details',
    levelTitle: 'Missing Details Boss',
    puzzleType: 'Odd One Out',
    questionText: 'MISSING DETAILS BOSS:\nODD ONE OUT:\nWhich of these four men was NOT a high priest who opposed or tried Jesus or the early Apostles in the book of Acts?',
    clues: [
      'Three were historical High Priests of the Sadducean party mentioned in Luke and Acts.',
      'One was a righteous prophet and court priest during the reign of King David hundreds of years earlier.'
    ],
    options: ['Zadok', 'Annas', 'Caiaphas', 'Ananias son of Nedebaeus'],
    correctAnswer: 'Zadok',
    reference: 'Luke 3:2; Acts 4:6; Acts 23:2; 2 Samuel 15:24',
    explanation: 'Annas and Caiaphas presided at the trials of Jesus and the Apostles (Luke 3:2, Acts 4:6). Ananias was the high priest who ordered Paul struck on the mouth in Acts 23:2. Zadok was King David and Solomon\'s faithful high priest nearly a thousand years earlier.',
    hint: 'One belongs to the united monarchy of Israel, not the Roman first-century era.',
    difficulty: 'hard',
    timerSeconds: 20
  },
  {
    level: 20,
    challengeIndex: 5,
    stage: 4,
    stageTitle: 'The Missing Details',
    levelTitle: 'Missing Details Boss',
    puzzleType: 'Who or What Is Missing?',
    questionText: 'MISSING DETAILS BOSS:\nIn Revelation 1–3, the resurrected Christ walks among seven golden lampstands holding seven stars in His right hand. What are the seven stars explicitly revealed to be in Revelation 1:20?',
    clues: [
      'The mystery of the seven stars which you saw in My right hand.',
      'The seven lampstands are the seven churches of Asia Minor.',
      'What do the seven stars represent in Christ\'s divine explanation?'
    ],
    options: ['The angels (messengers) of the seven churches', 'The seven archangels before the throne', 'The seven crowns of the martyrs', 'The seven spirits of burning judgment'],
    correctAnswer: 'The angels (messengers) of the seven churches',
    reference: 'Revelation 1:20',
    explanation: 'Revelation 1:20 provides the direct divine interpretation: "As for the mystery of the seven stars that you saw in my right hand... the seven stars are the angels of the seven churches, and the seven lampstands are the seven churches."',
    hint: 'The heavenly or ministerial messengers assigned to Ephesus, Smyrna, Pergamum, etc.',
    difficulty: 'hard',
    timerSeconds: 20
  },

  // ==========================================
  // STAGE 5: BIBLE DETECTIVE (Levels 21–25)
  // ==========================================

  // Level 21: Old Testament Forensic Clues
  {
    level: 21,
    challengeIndex: 1,
    stage: 5,
    stageTitle: 'Bible Detective',
    levelTitle: 'OT Forensic Clues',
    puzzleType: 'The Bible Detective',
    questionText: 'THE BIBLE DETECTIVE:\nFORENSIC CLUES:\n- I was from the tribe of Benjamin.\n- I was left-handed and made a double-edged dagger a cubit long.\n- I concealed the dagger under my clothes on my right thigh.\n- I delivered a "secret message from God" to Eglon, the obese king of Moab, and locked the doors behind me.\nWho am I?',
    clues: [
      'Tribe of Benjamin.',
      'Left-handed judge of Israel.',
      'Executed King Eglon of Moab in his cool roof chamber.'
    ],
    options: ['Ehud son of Gera', 'Shamgar son of Anath', 'Othniel son of Kenaz', 'Abdon son of Hillel'],
    correctAnswer: 'Ehud son of Gera',
    reference: 'Judges 3:15–26',
    explanation: 'Ehud, the son of Gera the Benjaminite, was a left-handed man. He strapped a home-made double-edged dagger to his right thigh and assassinated the oppressive Moabite King Eglon in his upper room.',
    hint: 'The left-handed second judge of Israel.',
    difficulty: 'medium',
    timerSeconds: 25
  },
  {
    level: 21,
    challengeIndex: 2,
    stage: 5,
    stageTitle: 'Bible Detective',
    levelTitle: 'OT Forensic Clues',
    puzzleType: 'The Bible Detective',
    questionText: 'THE BIBLE DETECTIVE:\nFORENSIC CLUES:\n- I was the wife of Heber the Kenite.\n- When Sisera, the general of Jabin king of Hazor, fled on foot from Mount Tabor, he sought refuge in my tent.\n- I gave him a skin of milk to drink and covered him with a rug.\n- While he was sound asleep from exhaustion, I drove a tent peg through his temple into the ground.\nWho am I?',
    clues: [
      'Wife of Heber the Kenite.',
      'Offered hospitality and a bowl of curdled milk/cream.',
      'Used a hammer and tent peg to eliminate the Canaanite oppressor.'
    ],
    options: ['Jael', 'Deborah', 'Abigail', 'Manoah\'s wife'],
    correctAnswer: 'Jael',
    reference: 'Judges 4:17–22; 5:24–27',
    explanation: 'Jael the wife of Heber the Kenite welcomed Sisera into her tent, gave him milk from a skin, and while he was asleep, took a tent peg and hammer and drove the peg into his temple, fulfilling Deborah\'s prophecy.',
    hint: 'Celebrated in Deborah\'s victory song as "most blessed of women in tents".',
    difficulty: 'medium',
    timerSeconds: 25
  },
  {
    level: 21,
    challengeIndex: 3,
    stage: 5,
    stageTitle: 'Bible Detective',
    levelTitle: 'OT Forensic Clues',
    puzzleType: 'The Bible Detective',
    questionText: 'THE BIBLE DETECTIVE:\nFORENSIC CLUES:\n- I was a prophet of the Lord during the reign of King Ahab.\n- King Ahab hated me because I "never prophesy good concerning him, but always evil."\n- When four hundred prophets promised Ahab victory at Ramoth-gilead, I foresaw Israel scattered like sheep without a shepherd and Ahab struck down.\n- Ahab ordered me put in prison on rations of bread and water until he returned in peace, to which I replied: "If you return in peace, the Lord has not spoken by me!"\nWho am I?',
    clues: [
      'Son of Imlah.',
      'Stood alone against 400 court prophets of Ahab and Jehoshaphat.',
      'Zedekiah son of Chenaanah struck me on the cheek for prophesying truth.'
    ],
    options: ['Micaiah son of Imlah', 'Jehu son of Hanani', 'Hanani the seer', 'Ahijah the Shilonite'],
    correctAnswer: 'Micaiah son of Imlah',
    reference: '1 Kings 22:7–28',
    explanation: 'Micaiah the son of Imlah was summoned by Ahab and Jehoshaphat. Despite intense pressure, he truthfully revealed that a lying spirit filled Ahab\'s prophets and that Ahab would perish at Ramoth-gilead.',
    hint: 'His name begins with M; son of Imlah.',
    difficulty: 'hard',
    timerSeconds: 25
  },
  {
    level: 21,
    challengeIndex: 4,
    stage: 5,
    stageTitle: 'Bible Detective',
    levelTitle: 'OT Forensic Clues',
    puzzleType: 'The Bible Detective',
    questionText: 'THE BIBLE DETECTIVE:\nFORENSIC CLUES:\n- I was the crippled son of Jonathan and grandson of King Saul.\n- When news of Saul and Jonathan\'s death came from Jezreel, my nurse fled in haste and dropped me when I was five years old, leaving both my feet lame.\n- I was living in obscurity at Lo-debar in the house of Machir son of Ammiel.\n- David restored to me all the lands of Saul and granted me a permanent seat at the king\'s table.\nWho am I?',
    clues: [
      'Grandson of King Saul, son of Jonathan.',
      'Lame in both feet due to a childhood accident during a frantic escape.',
      'Brought from Lo-debar to eat at King David\'s royal table.'
    ],
    options: ['Mephibosheth (Merib-baal)', 'Ish-bosheth', 'Armoni', 'Michal'],
    correctAnswer: 'Mephibosheth (Merib-baal)',
    reference: '2 Samuel 4:4; 9:1–13',
    explanation: 'Jonathan son of Saul had a son named Mephibosheth who was lame in both feet from age five when his nurse dropped him in haste. David showed him kindness for Jonathan\'s sake and gave him a seat at his royal table.',
    hint: 'Jonathan\'s beloved lame son honored by David.',
    difficulty: 'medium',
    timerSeconds: 25
  },
  {
    level: 21,
    challengeIndex: 5,
    stage: 5,
    stageTitle: 'Bible Detective',
    levelTitle: 'OT Forensic Clues',
    puzzleType: 'The Bible Detective',
    questionText: 'THE BIBLE DETECTIVE:\nFORENSIC CLUES:\n- When Hilkiah the high priest found the Book of the Law in the temple during repairs under young King Josiah, the king sent his royal delegation to consult me.\n- I was a prophetess living in Jerusalem in the Second Quarter.\n- My husband Shallum was keeper of the royal wardrobe.\n- I prophesied covenant disaster on Judah, but promised Josiah peace because his heart was penitent.\nWho am I?',
    clues: [
      'Prophetess in Jerusalem.',
      'Wife of Shallum, keeper of the wardrobe.',
      'Consulted by King Josiah\'s top officers concerning the newly rediscovered scroll of Deuteronomy.'
    ],
    options: ['Huldah', 'Miriam', 'Deborah', 'Noadiah'],
    correctAnswer: 'Huldah',
    reference: '2 Kings 22:14–20; 2 Chronicles 34:22–28',
    explanation: 'The royal officials went to Huldah the prophetess, wife of Shallum keeper of the wardrobe, residing in Jerusalem in the Second Quarter, who verified the authenticity of the scroll and proclaimed God\'s word to King Josiah.',
    hint: 'She was the revered prophetess during Josiah\'s great temple reform.',
    difficulty: 'hard',
    timerSeconds: 25
  },

  // Level 22: New Testament Forensic Clues
  {
    level: 22,
    challengeIndex: 1,
    stage: 5,
    stageTitle: 'Bible Detective',
    levelTitle: 'NT Forensic Clues',
    puzzleType: 'The Bible Detective',
    questionText: 'THE BIBLE DETECTIVE:\nFORENSIC CLUES:\n- I was a native of Colossae and a "beloved fellow servant" of Paul.\n- I first preached the gospel of grace in Colossae, Hierapolis, and Laodicea.\n- Paul described me as wrestling intensely in prayer for the Colossian believers that they might stand mature and fully assured.\n- I was imprisoned with Paul in Rome.\nWho am I?',
    clues: [
      'Founder and minister to the Colossian church.',
      'Praised for laboring fervently in intercessory prayer.',
      'Called "my fellow prisoner in Christ Jesus" in Philemon 23.'
    ],
    options: ['Epaphras', 'Tychicus', 'Philemon', 'Archippus'],
    correctAnswer: 'Epaphras',
    reference: 'Colossians 1:7; 4:12–13; Philemon 23',
    explanation: 'Epaphras was a Colossian who originally brought the gospel to Colossae. Paul commends him in Colossians 4:12 as always wrestling in prayers for them and calls him "my fellow prisoner in Christ Jesus" in Philemon 23.',
    hint: 'Do not confuse with Epaphroditus of Philippi; this man was from Colossae.',
    difficulty: 'hard',
    timerSeconds: 25
  },
  {
    level: 22,
    challengeIndex: 2,
    stage: 5,
    stageTitle: 'Bible Detective',
    levelTitle: 'NT Forensic Clues',
    puzzleType: 'The Bible Detective',
    questionText: 'THE BIBLE DETECTIVE:\nFORENSIC CLUES:\n- I was a devoted believer from Ephesus.\n- When Paul was imprisoned in chains in Rome and many in Asia abandoned him, I was not ashamed of his chain.\n- I arrived in Rome and searched diligently for Paul until I found him in his cell.\n- Paul prayed that the Lord grant mercy to my household for refreshing him often.\nWho am I?',
    clues: [
      'Ephesian believer commended in 2 Timothy.',
      'Refreshed Paul repeatedly and was not ashamed of his chains.',
      'Searched through Rome until locating Paul\'s prison quarters.'
    ],
    options: ['Onesiphorus', 'Tychicus', 'Erastus', 'Carpus'],
    correctAnswer: 'Onesiphorus',
    reference: '2 Timothy 1:16–18; 4:19',
    explanation: 'In 2 Timothy 1:16–17, Paul writes: "May the Lord grant mercy to the household of Onesiphorus, for he often refreshed me and was not ashamed of my chains, but when he arrived in Rome he searched for me earnestly and found me."',
    hint: 'His name means "Profit-bearer"; a loyal friend in Paul\'s final imprisonment.',
    difficulty: 'hard',
    timerSeconds: 25
  },
  {
    level: 22,
    challengeIndex: 3,
    stage: 5,
    stageTitle: 'Bible Detective',
    levelTitle: 'NT Forensic Clues',
    puzzleType: 'The Bible Detective',
    questionText: 'THE BIBLE DETECTIVE:\nFORENSIC CLUES:\n- I was the ruler of the Jewish synagogue in Corinth.\n- When the Jews made a united attack against Paul and brought him before Gallio the Roman proconsul of Achaia, Gallio dismissed the religious complaint.\n- The crowd turned on me and beat me right in front of the judgment seat (bema), yet Gallio paid no attention.\n- Later, Paul opens 1 Corinthians writing: "Paul... and our brother...", suggesting I became a Christian leader.\nWho am I?',
    clues: [
      'Corinthian synagogue leader beaten before Gallio.',
      'Gallio the Roman proconsul showed total indifference to my beating.',
      'Named as co-sender with Paul in the opening greeting of 1 Corinthians.'
    ],
    options: ['Sosthenes', 'Crispus', 'Gaius', 'Stephanas'],
    correctAnswer: 'Sosthenes',
    reference: 'Acts 18:12–17; 1 Corinthians 1:1',
    explanation: 'Acts 18:17 records that the crowd seized Sosthenes, the ruler of the synagogue, and beat him in front of the tribunal of Gallio. In 1 Corinthians 1:1, Paul greets the Corinthians alongside "Sosthenes our brother," indicating his conversion and prominence.',
    hint: 'Begins with S; ruler of the Corinthian synagogue who became Paul\'s co-worker.',
    difficulty: 'hard',
    timerSeconds: 25
  },
  {
    level: 22,
    challengeIndex: 4,
    stage: 5,
    stageTitle: 'Bible Detective',
    levelTitle: 'NT Forensic Clues',
    puzzleType: 'The Bible Detective',
    questionText: 'THE BIBLE DETECTIVE:\nFORENSIC CLUES:\n- I was an amanuensis (scribe) employed by Paul.\n- As Paul dictated his monumental theological letter to the church at Rome, I wrote down every word on parchment.\n- In chapter 16, I was permitted to insert my own personal greeting to the believers: "I..., who wrote this letter, greet you in the Lord."\nWho am I?',
    clues: [
      'Professional scribe who penned the Epistle to the Romans.',
      'Inserted a direct first-person greeting in Romans 16:22.',
      'His name in Latin means "Third".'
    ],
    options: ['Tertius', 'Quartus', 'Erastus', 'Gaius'],
    correctAnswer: 'Tertius',
    reference: 'Romans 16:22',
    explanation: 'Romans 16:22 contains the famous scribe note: "I Tertius, who wrote this letter, greet you in the Lord." He was Paul\'s stenographer who wrote the epistle as Paul dictated.',
    hint: 'His Latin numerical name means the third.',
    difficulty: 'hard',
    timerSeconds: 25
  },
  {
    level: 22,
    challengeIndex: 5,
    stage: 5,
    stageTitle: 'Bible Detective',
    levelTitle: 'NT Forensic Clues',
    puzzleType: 'The Bible Detective',
    questionText: 'THE BIBLE DETECTIVE:\nFORENSIC CLUES:\n- I was a faithful deaconess / servant of the church at Cenchreae, the eastern port of Corinth.\n- Paul highly commended me to the church in Rome as a patron / benefactor of many and of himself as well.\n- It is historically recognized that I carried Paul\'s masterpiece Epistle to the Romans across the Mediterranean to its destination.\nWho am I?',
    clues: [
      'Leader/servant from the seaport of Cenchreae.',
      'Commended first in Romans 16:1–2.',
      'Entrusted with delivering Paul\'s letter to the Roman church.'
    ],
    options: ['Phoebe', 'Priscilla', 'Chloe', 'Lydia'],
    correctAnswer: 'Phoebe',
    reference: 'Romans 16:1–2',
    explanation: 'Paul introduces Phoebe in Romans 16:1–2: "I commend to you our sister Phoebe, a servant of the church at Cenchreae, that you may welcome her in the Lord... for she has been a patron of many and of myself as well." She carried the epistle to Rome.',
    hint: 'Her name means "radiant" or "pure", servant of Cenchreae.',
    difficulty: 'medium',
    timerSeconds: 25
  },

  // Level 23: Geographic Clues
  {
    level: 23,
    challengeIndex: 1,
    stage: 5,
    stageTitle: 'Bible Detective',
    levelTitle: 'Geographic Clues',
    puzzleType: 'The Bible Detective',
    questionText: 'GEOGRAPHIC CLUES:\nTrace the biblical sea voyage:\n- Embarked from Adramyttium, touching at Sidon.\n- Sailed under the lee of Cyprus because the winds were against them.\n- Changed ships at Myra in Lycia to an Alexandrian grain vessel sailing for Italy.\n- Passed Cnidus with difficulty and sailed under the lee of Crete off Salmone.\nWhat harbor on the southern coast of Crete did they reach, which Paul warned was unsafe to winter in?',
    clues: [
      'Located near the city of Lasea on the southern Cretan coast.',
      'The harbor was not suitable to spend the winter in.',
      'The centurion listened to the ship owner rather than Paul and set sail toward Phoenix.'
    ],
    options: ['Fair Havens', 'Phoenix', 'Syracuse', 'Rhegium'],
    correctAnswer: 'Fair Havens',
    reference: 'Acts 27:7–12',
    explanation: 'Acts 27:8 records: "Coasting along it with difficulty, we came to a place called Fair Havens, near which was the city of Lasea." The majority advised putting to sea from there to reach Phoenix to winter in.',
    hint: 'Translates Greek \'Kaloi Limenes\'; a scenic haven on Crete.',
    difficulty: 'medium',
    timerSeconds: 25
  },
  {
    level: 23,
    challengeIndex: 2,
    stage: 5,
    stageTitle: 'Bible Detective',
    levelTitle: 'Geographic Clues',
    puzzleType: 'The Bible Detective',
    questionText: 'GEOGRAPHIC CLUES:\nAfter crossing the Red Sea, the Israelites journeyed three days into the wilderness of Shur and found no water. When they came to a place with water, they could not drink it because it was bitter. What was the name of this bitter site, and to which oasis with twelve springs and seventy date palms did they travel immediately afterward?',
    clues: [
      'First location: water was undrinkable, so God directed Moses to throw a tree into it to sweeten it.',
      'Second location: an abundant oasis featuring exactly 12 water springs and 70 palm trees.'
    ],
    options: [
      'Bitter site: Marah; Oasis: Elim',
      'Bitter site: Massah; Oasis: Kadesh-barnea',
      'Bitter site: Rephidim; Oasis: Paran',
      'Bitter site: Kibroth-hattaavah; Oasis: Hazeroth'
    ],
    correctAnswer: 'Bitter site: Marah; Oasis: Elim',
    reference: 'Exodus 15:23–27',
    explanation: 'They came to Marah (meaning "Bitter") where the waters were sweetened by a tree. Exodus 15:27 then states: "Then they came to Elim, where there were twelve springs of water and seventy palm trees, and they encamped there by the water."',
    hint: 'Marah means bitter; Elim was the lush palm oasis.',
    difficulty: 'medium',
    timerSeconds: 25
  },
  {
    level: 23,
    challengeIndex: 3,
    stage: 5,
    stageTitle: 'Bible Detective',
    levelTitle: 'Geographic Clues',
    puzzleType: 'The Bible Detective',
    questionText: 'GEOGRAPHIC CLUES:\nWhen Jonah fled from the presence of the Lord rather than preaching to Nineveh, from which ancient Mediterranean port city did he pay the fare and embark on a ship bound for distant Tarshish?',
    clues: [
      'Ancient coastal port in the territory of Dan / Israel.',
      'Peter later lodged here at the house of Simon the tanner and raised Tabitha (Dorcas).',
      'The modern city is Jaffa / Tel Aviv.'
    ],
    options: ['Joppa (Jaffa)', 'Caesarea Maritima', 'Tyre', 'Acco (Ptolemais)'],
    correctAnswer: 'Joppa (Jaffa)',
    reference: 'Jonah 1:3; Acts 9:36–43',
    explanation: 'Jonah 1:3 says: "Jonah rose to flee to Tarshish from the presence of the Lord. He went down to Joppa and found a ship going to Tarshish. So he paid the fare and went on board."',
    hint: 'The coastal port of Joppa, also famous in Peter\'s ministry.',
    difficulty: 'medium',
    timerSeconds: 25
  },
  {
    level: 23,
    challengeIndex: 4,
    stage: 5,
    stageTitle: 'Bible Detective',
    levelTitle: 'Geographic Clues',
    puzzleType: 'The Bible Detective',
    questionText: 'GEOGRAPHIC CLUES:\nIn the trans-Jordanian territory of Gilead, at which mountain ridge did Laban overtake fleeing Jacob, where they set up a heap of stones as a boundary monument called Galeed and Mizpah ("The Lord watch between you and me when we are out of one another\'s sight")?',
    clues: [
      'Laban pursued Jacob seven days\' journey.',
      'He caught up with him in the hill country of Gilead.',
      'They ratified a non-aggression covenant over a cairn heap of witness stones.'
    ],
    options: ['Hill country of Gilead (Mizpah)', 'Mount Seir', 'Mount Hermon', 'Plains of Moab'],
    correctAnswer: 'Hill country of Gilead (Mizpah)',
    reference: 'Genesis 31:21–49',
    explanation: 'Jacob crossed the Euphrates and set his face toward the hill country of Gilead. Laban overtook him there, and they made a heap called Galeed and Mizpah ("Watchpost") as a witness boundary.',
    hint: 'The rugged highlands of Gilead east of the Jordan.',
    difficulty: 'hard',
    timerSeconds: 25
  },
  {
    level: 23,
    challengeIndex: 5,
    stage: 5,
    stageTitle: 'Bible Detective',
    levelTitle: 'Geographic Clues',
    puzzleType: 'The Bible Detective',
    questionText: 'GEOGRAPHIC CLUES:\nNear which northern town at the foot of Mount Hermon was Jesus when He asked His disciples, "Who do people say that the Son of Man is?" and Peter declared, "You are the Christ, the Son of the living God"?',
    clues: [
      'A northern region rebuilt and renamed by the tetrarch Philip in honor of Caesar.',
      'Famous for the springs forming one of the headwaters of the Jordan River.',
      'Jesus proclaimed: "On this rock I will build my church, and the gates of hell shall not prevail against it."'
    ],
    options: ['Caesarea Philippi', 'Capernaum', 'Bethsaida Julias', 'Chorazin'],
    correctAnswer: 'Caesarea Philippi',
    reference: 'Matthew 16:13–18',
    explanation: 'Matthew 16:13 records: "Now when Jesus came into the district of Caesarea Philippi, he asked his disciples, \'Who do people say that the Son of Man is?\'" Peter replied with his historic confession of Christ.',
    hint: 'Named after Caesar and the tetrarch Philip; located far north in the Golan/Hermon foothills.',
    difficulty: 'medium',
    timerSeconds: 25
  },

  // Level 24: What Event Is This?
  {
    level: 24,
    challengeIndex: 1,
    stage: 5,
    stageTitle: 'Bible Detective',
    levelTitle: 'What Event Is This?',
    puzzleType: 'The Bible Detective',
    questionText: 'WHAT EVENT IS THIS?\nFORENSIC OBSERVATIONS:\n- A chariot of fire and horses of fire appeared and separated two men as they walked.\n- One man was taken up by a whirlwind into heaven.\n- The other man tore his clothes in two and took up the fallen mantle of his master.\n- The remaining man struck the waters of the Jordan with the mantle, crying: "Where is the Lord, the God of Elijah?" and the river parted.',
    clues: [
      'Chariots and horses of fire appear in the desert near Jordan.',
      'Whirlwind takes a prophet alive into heaven.',
      'Fallen mantle taken up and waters divided.'
    ],
    options: [
      'The translation/ascension of Elijah into heaven',
      'Elisha\'s vision of the fiery army at Dothan',
      'The ascension of Jesus from the Mount of Olives',
      'Ezekiel\'s vision of the fiery chariot by the Chebar canal'
    ],
    correctAnswer: 'The translation/ascension of Elijah into heaven',
    reference: '2 Kings 2:11–14',
    explanation: '2 Kings 2:11–14 describes Elijah being taken up by a whirlwind into heaven in a chariot of fire, while Elisha took up Elijah\'s fallen cloak and parted the Jordan with it.',
    hint: 'The miraculous departure of the prophet Elijah witnessed by Elisha.',
    difficulty: 'medium',
    timerSeconds: 25
  },
  {
    level: 24,
    challengeIndex: 2,
    stage: 5,
    stageTitle: 'Bible Detective',
    levelTitle: 'What Event Is This?',
    puzzleType: 'The Bible Detective',
    questionText: 'WHAT EVENT IS THIS?\nFORENSIC OBSERVATIONS:\n- A great king had a feast for a thousand of his lords, drinking wine from the golden vessels looted from the temple in Jerusalem.\n- Suddenly the fingers of a human hand appeared and wrote upon the plaster of the palace wall opposite the lampstand.\n- The king\'s face grew pale, his thoughts terrified him, his limbs gave way, and his knees knocked together.\n- None of the Chaldean magicians could read the inscription until a captive Hebrew sage was summoned.',
    clues: [
      'Sacrilegious feast using stolen Jerusalem temple vessels.',
      'Mysterious disembodied fingers writing Mene, Mene, Tekel, Parsin on the wall.',
      'King Belshazzar struck with trembling terror.'
    ],
    options: [
      'Belshazzar\'s feast and the writing on the wall',
      'Nebuchadnezzar\'s golden image dedication on the plain of Dura',
      'King Ahasuerus\' banquet in Susa for Queen Vashti',
      'Herod Antipas\' birthday banquet in Galilee'
    ],
    correctAnswer: 'Belshazzar\'s feast and the writing on the wall',
    reference: 'Daniel 5:1–9',
    explanation: 'Daniel 5 describes King Belshazzar\'s feast where the fingers of a human hand wrote on the wall. Daniel was brought in to decipher the riddle: Babylon was weighed in the balances and given to the Medes and Persians.',
    hint: 'The dramatic final night of the Babylonian Empire in Daniel 5.',
    difficulty: 'medium',
    timerSeconds: 25
  },
  {
    level: 24,
    challengeIndex: 3,
    stage: 5,
    stageTitle: 'Bible Detective',
    levelTitle: 'What Event Is This?',
    puzzleType: 'The Bible Detective',
    questionText: 'WHAT EVENT IS THIS?\nFORENSIC OBSERVATIONS:\n- Around midnight, two prisoners with raw, beaten backs were praying and singing hymns to God while other prisoners listened.\n- Suddenly there was a violent earthquake that shook the foundations of the prison.\n- Immediately all the doors flew open and everyone\'s chains unfastened.\n- The prison keeper drew his sword to commit suicide thinking the prisoners had escaped, but a voice cried out: "Do not harm yourself, for we are all here!"',
    clues: [
      'Midnight hymns sung in an inner dungeon.',
      'Supernatural earthquake breaking chains and opening iron gates.',
      'The suicidal jailer led to faith and his entire household baptized before sunrise.'
    ],
    options: [
      'The miraculous midnight deliverance of Paul and Silas in Philippi',
      'Peter\'s angelic deliverance from Herod\'s prison in Jerusalem',
      'John\'s exile and vision on the Isle of Patmos',
      'Paul\'s trial before Felix and Festus in Caesarea'
    ],
    correctAnswer: 'The miraculous midnight deliverance of Paul and Silas in Philippi',
    reference: 'Acts 16:25–34',
    explanation: 'In Philippi, Paul and Silas were singing in stocks at midnight when an earthquake opened the jail. The Philippian jailer asked: "What must I do to be saved?" and believed on the Lord Jesus with all his house.',
    hint: 'Paul and Silas in the Macedonian Roman colony of Philippi.',
    difficulty: 'medium',
    timerSeconds: 25
  },
  {
    level: 24,
    challengeIndex: 4,
    stage: 5,
    stageTitle: 'Bible Detective',
    levelTitle: 'What Event Is This?',
    puzzleType: 'The Bible Detective',
    questionText: 'WHAT EVENT IS THIS?\nFORENSIC OBSERVATIONS:\n- A great contest was arranged on a coastal mountain ridge before all Israel.\n- One lone prophet challenged four hundred and fifty prophets of Baal to call down fire from heaven upon their sacrifice without setting a flame.\n- The pagan prophets leaped around their altar and cut themselves with swords from morning till evening with no answer.\n- The lone prophet repaired the altar with twelve stones, dug a deep trench, poured twelve jars of water over the wood, and prayed a sixty-word prayer.',
    clues: [
      'Mount Carmel summit confrontation.',
      '450 prophets of Baal cutting themselves in futile chanting.',
      'Fire fell from heaven and consumed the sacrifice, wood, stones, dust, and water.'
    ],
    options: [
      'Elijah\'s contest with the prophets of Baal on Mount Carmel',
      'Gideon\'s fleece and altar destruction at Ophrah',
      'Moses bringing water from the rock at Meribah',
      'Solomon\'s temple dedication fire in Jerusalem'
    ],
    correctAnswer: 'Elijah\'s contest with the prophets of Baal on Mount Carmel',
    reference: '1 Kings 18:20–40',
    explanation: '1 Kings 18 recounts Elijah\'s climactic contest on Mount Carmel. Fire from the Lord consumed the waterlogged sacrifice, causing all Israel to fall on their faces and confess: "The Lord, He is God!"',
    hint: 'Elijah\'s trial by fire on Mount Carmel against Ahab\'s state prophets.',
    difficulty: 'medium',
    timerSeconds: 25
  },
  {
    level: 24,
    challengeIndex: 5,
    stage: 5,
    stageTitle: 'Bible Detective',
    levelTitle: 'What Event Is This?',
    puzzleType: 'The Bible Detective',
    questionText: 'WHAT EVENT IS THIS?\nFORENSIC OBSERVATIONS:\n- Two disciples were walking seven miles from Jerusalem to a village on a Sunday afternoon, talking sorrowfully about recent executions.\n- A stranger drew near and walked with them, but their eyes were kept from recognizing Him.\n- Beginning with Moses and all the Prophets, He expounded to them in all the Scriptures the things concerning Himself.\n- When He sat at table with them in their home, He took bread, blessed and broke it, and gave it to them; their eyes were opened, and He vanished from their sight.',
    clues: [
      'Seven-mile journey from Jerusalem to Emmaus.',
      'The risen Christ opening the Old Testament Scriptures on the road.',
      'Recognized in the distinctive breaking of the bread.'
    ],
    options: [
      'The walk to Emmaus with the risen Christ',
      'The breakfast appearance on the shore of Galilee',
      'The encounter with Mary Magdalene outside the garden tomb',
      'The conversion of the Ethiopian eunuch on the road to Gaza'
    ],
    correctAnswer: 'The walk to Emmaus with the risen Christ',
    reference: 'Luke 24:13–35',
    explanation: 'Luke 24 tells of Cleopas and another disciple traveling to Emmaus. Jesus explained all the prophetic Scriptures to them and revealed Himself in the breaking of bread before vanishing.',
    hint: 'Cleopas and his companion on the road to Emmaus.',
    difficulty: 'medium',
    timerSeconds: 25
  },

  // Level 25: Detective Boss
  {
    level: 25,
    challengeIndex: 1,
    stage: 5,
    stageTitle: 'Bible Detective',
    levelTitle: 'Detective Boss',
    puzzleType: 'The Bible Detective',
    questionText: 'DETECTIVE BOSS:\nFORENSIC DOSSIER:\n- My mother was an Egyptian handmaid named Hagar.\n- My name was commanded by an angel of the Lord before my birth because "the Lord has listened to your affliction."\n- I was circumcised at age thirteen by my father.\n- I lived in the wilderness of Paran, became an expert archer, and my mother took a wife for me from Egypt.\n- I became the father of twelve princes according to God\'s promise to Abraham.\nWho am I?',
    clues: [
      'Son of Abraham by Hagar.',
      'Name means "God hears".',
      'Skilled archer in Paran who fathered 12 tribal chieftains.'
    ],
    options: ['Ishmael', 'Esau', 'Midian', 'Eliphaz'],
    correctAnswer: 'Ishmael',
    reference: 'Genesis 16:11–16; 17:25; 21:20–21; 25:12–16',
    explanation: 'Ishmael was Hagar\'s son. God named him before birth ("God hears"). He grew up in Paran as a bowman, married an Egyptian, and fathered twelve princes (Genesis 25:16).',
    hint: 'Abraham\'s firstborn son through Hagar.',
    difficulty: 'hard',
    timerSeconds: 20
  },
  {
    level: 25,
    challengeIndex: 2,
    stage: 5,
    stageTitle: 'Bible Detective',
    levelTitle: 'Detective Boss',
    puzzleType: 'The Bible Detective',
    questionText: 'DETECTIVE BOSS:\nFORENSIC DOSSIER:\n- I was a wealthy craftsman of the tribe of Judah, the son of Uri, the son of Hur.\n- The Lord specifically called me by name and filled me with the Spirit of God, with ability and intelligence, with knowledge and all craftsmanship.\n- I was appointed chief designer to construct the wilderness Tabernacle, the Ark of the Covenant, and all its sacred golden furniture.\n- Oholiab son of Ahisamach of the tribe of Dan was appointed as my chief assistant.\nWho am I?',
    clues: [
      'Filled with the Spirit of God for artistic craftsmanship in gold, silver, bronze, and stone.',
      'Son of Uri, grandson of Hur, tribe of Judah.',
      'Master builder of the wilderness tabernacle.'
    ],
    options: ['Bezalel', 'Hiram-abi', 'Aholiab', 'Jabal'],
    correctAnswer: 'Bezalel',
    reference: 'Exodus 31:1–6; 35:30–35',
    explanation: 'Bezalel son of Uri, son of Hur, of the tribe of Judah, was filled with the Spirit of God for all artistic craft to build the Tabernacle and its sacred utensils (Exodus 31:1–5).',
    hint: 'Chief architect of the Tabernacle; name begins with B.',
    difficulty: 'hard',
    timerSeconds: 20
  },
  {
    level: 25,
    challengeIndex: 3,
    stage: 5,
    stageTitle: 'Bible Detective',
    levelTitle: 'Detective Boss',
    puzzleType: 'The Bible Detective',
    questionText: 'DETECTIVE BOSS:\nFORENSIC DOSSIER:\n- In Romans 16, Paul greets two Christian women who share nearly identical names, describing them as "workers in the Lord."\n- Their names sound like twin sisters.\n- In the very next breath, Paul commends another beloved sister named Persis, "who has worked hard in the Lord."\nWhat are the exact names of these two fellow workers greeted together by Paul in Romans 16:12?',
    clues: [
      'Paired together in Romans 16:12.',
      'Greek names meaning "dainty/luxurious" and "delicate".',
      'Both commended as faithful female laborers in the Roman congregation.'
    ],
    options: [
      'Tryphaena and Tryphosa',
      'Euodia and Syntyche',
      'Martha and Mary',
      'Lois and Eunice'
    ],
    correctAnswer: 'Tryphaena and Tryphosa',
    reference: 'Romans 16:12',
    explanation: 'Romans 16:12 states: "Greet those workers in the Lord, Tryphaena and Tryphosa. Greet the beloved Persis, who has worked hard in the Lord." Euodia and Syntyche were in Philippi.',
    hint: 'Both names begin with Tryph- in the greeting list of Romans 16.',
    difficulty: 'master',
    timerSeconds: 20
  },
  {
    level: 25,
    challengeIndex: 4,
    stage: 5,
    stageTitle: 'Bible Detective',
    levelTitle: 'Detective Boss',
    puzzleType: 'The Bible Detective',
    questionText: 'DETECTIVE BOSS:\nFORENSIC DOSSIER:\n- I was an aged priest of the division of Abijah during the reign of King Herod the Great of Judea.\n- My wife Elizabeth was from the daughters of Aaron, and we were both righteous before God, walking blamelessly in all commandments, but had no child.\n- While serving in the temple burning incense, the angel Gabriel appeared on the right side of the altar of incense.\n- Because I doubted Gabriel\'s promise that my barren wife would bear a son in our old age, I was struck dumb and unable to speak until my son was circumcised and I wrote on a tablet: "His name is John."\nWho am I?',
    clues: [
      'Priest of the course of Abijah.',
      'Husband of Elizabeth, father of John the Baptist.',
      'Mute for nine months after doubting Gabriel in the temple sanctuary.'
    ],
    options: ['Zechariah', 'Simeon', 'Caiaphas', 'Nicodemus'],
    correctAnswer: 'Zechariah',
    reference: 'Luke 1:5–25, 57–66',
    explanation: 'Zechariah was the priest father of John the Baptist who was struck speechless in the Holy Place by Gabriel until his son\'s naming on the eighth day, whereupon he burst into prophetic praise (the Benedictus).',
    hint: 'Father of John the Baptist; struck silent in the temple.',
    difficulty: 'medium',
    timerSeconds: 20
  },
  {
    level: 25,
    challengeIndex: 5,
    stage: 5,
    stageTitle: 'Bible Detective',
    levelTitle: 'Detective Boss',
    puzzleType: 'The Bible Detective',
    questionText: 'DETECTIVE BOSS:\nFORENSIC DOSSIER:\n- I was an Amorite king of Bashan who ruled sixty fortified cities with high walls and bronze bars in the region of Argob.\n- I was the last of the remnant of the giant Rephaim.\n- My iron bedstead (sarcophagus) was preserved in Rabbah of the Ammonites; it was nine cubits long and four cubits wide (approx. 13.5 by 6 feet).\n- Moses and the Israelites defeated me and my sons at the battle of Edrei and took possession of my land.\nWho am I?',
    clues: [
      'Giant king of Bashan.',
      'Last survivor of the giant Rephaim.',
      'His massive iron bed measured over 13 feet in length.'
    ],
    options: ['Og king of Bashan', 'Sihon king of Heshbon', 'Balak king of Moab', 'Agag king of Amalek'],
    correctAnswer: 'Og king of Bashan',
    reference: 'Deuteronomy 3:1–11; Numbers 21:33–35',
    explanation: 'Deuteronomy 3:11 explicitly describes Og king of Bashan: "For only Og the king of Bashan was left of the remnant of the Rephaim. Behold, his bed was an iron bed... nine cubits was its length, and four cubits its breadth."',
    hint: 'The giant king of Bashan with the giant iron bed.',
    difficulty: 'hard',
    timerSeconds: 20
  },

  // ==========================================
  // STAGE 6: THE LOGIC CHAMBER (Levels 26–30)
  // ==========================================

  // Level 26: Logic Grid Deductions
  {
    level: 26,
    challengeIndex: 1,
    stage: 6,
    stageTitle: 'The Logic Chamber',
    levelTitle: 'Logic Grid Deductions',
    puzzleType: 'Bible Logic Grid',
    questionText: 'BIBLE LOGIC GRID:\nThree major biblical covenants were ratified with three distinct physical signs: a rainbow in the clouds, circumcision in the flesh, and the Sabbath day. Deduce which covenant mediator matches which sign:\n1. Noah\n2. Abraham\n3. Moses',
    clues: [
      'Noah was given a celestial sign never to destroy the earth with a flood again.',
      'Abraham was given a generational token in the flesh of every eight-day-old male.',
      'Moses was commanded that the covenant sign of perpetual rest be observed across generations.'
    ],
    options: [
      'Noah: Rainbow; Abraham: Circumcision; Moses: Sabbath',
      'Noah: Sabbath; Abraham: Rainbow; Moses: Circumcision',
      'Noah: Circumcision; Abraham: Sabbath; Moses: Rainbow',
      'Noah: Rainbow; Abraham: Sabbath; Moses: Circumcision'
    ],
    correctAnswer: 'Noah: Rainbow; Abraham: Circumcision; Moses: Sabbath',
    reference: 'Genesis 9:12–17; Genesis 17:10–14; Exodus 31:13–17',
    explanation: 'Noah received the rainbow as the token of the universal covenant (Genesis 9). Abraham received circumcision as the sign of the seed covenant (Genesis 17). Moses received the Sabbath as the perpetual covenant sign between God and Israel (Exodus 31).',
    hint: 'Noah = sky sign; Abraham = male flesh token; Moses = weekly holy day.',
    difficulty: 'medium',
    timerSeconds: 25
  },
  {
    level: 26,
    challengeIndex: 2,
    stage: 6,
    stageTitle: 'The Logic Chamber',
    levelTitle: 'Logic Grid Deductions',
    puzzleType: 'Bible Logic Grid',
    questionText: 'BIBLE LOGIC GRID:\nThree New Testament deacons chosen in Acts 6 had distinct historical journeys recorded in Scripture:\n- One preached the gospel in Samaria and baptized an Ethiopian dignitary.\n- One was full of grace and power, performed great wonders, and became the first Christian martyr.\n- One was a proselyte from Antioch.\nDeduce the correct matching of these three men:',
    clues: [
      'Preached in Samaria and on the road to Gaza: Philip.',
      'Stoned outside Jerusalem while gazing into heaven: Stephen.',
      'Proselyte from Antioch chosen among the seven: Nicolas.'
    ],
    options: [
      'Philip: Samaria & Ethiopian; Stephen: First martyr; Nicolas: Proselyte of Antioch',
      'Stephen: Samaria & Ethiopian; Philip: First martyr; Nicolas: Proselyte of Antioch',
      'Prochorus: Samaria; Nicanor: First martyr; Timon: Proselyte of Antioch',
      'Philip: Proselyte of Antioch; Stephen: Samaria; Parmenas: First martyr'
    ],
    correctAnswer: 'Philip: Samaria & Ethiopian; Stephen: First martyr; Nicolas: Proselyte of Antioch',
    reference: 'Acts 6:5; Acts 7:54–60; Acts 8:4–40',
    explanation: 'Acts 6:5 lists Stephen, Philip, and Nicolas a proselyte of Antioch. Stephen was martyred in Acts 7. Philip evangelized Samaria and the Ethiopian court official in Acts 8.',
    hint: 'Philip was the evangelist; Stephen was the first martyr; Nicolas was from Antioch.',
    difficulty: 'hard',
    timerSeconds: 25
  },
  {
    level: 26,
    challengeIndex: 3,
    stage: 6,
    stageTitle: 'The Logic Chamber',
    levelTitle: 'Logic Grid Deductions',
    puzzleType: 'Bible Logic Grid',
    questionText: 'BIBLE LOGIC GRID:\nThree Old Testament prophets received divine instructions regarding marriage or family symbolizing Israel\'s spiritual state:\n1. Hosea\n2. Isaiah\n3. Ezekiel\nMatch each prophet to his specific marital / familial sign:\n- Wife died suddenly as a sign when the Lord took "the delight of his eyes," but he was forbidden to weep.\n- Married Gomer, a woman of whoredom, whose unfaithfulness depicted Israel\'s idolatry.\n- Fathered sons whose prophetic names were Shear-jashub ("A remnant shall return") and Maher-shalal-hash-baz ("Hurry to the spoil").',
    clues: [
      'Hosea: Married unfaithful Gomer.',
      'Isaiah: Sons whose names served as prophetic signs and wonders.',
      'Ezekiel: Wife died suddenly, forbidden to mourn publicly.'
    ],
    options: [
      'Hosea: Married Gomer; Isaiah: Prophetic names for sons; Ezekiel: Forbidden to mourn wife\'s death',
      'Hosea: Forbidden to mourn wife; Isaiah: Married Gomer; Ezekiel: Sons\' prophetic names',
      'Hosea: Prophetic names for sons; Isaiah: Forbidden to mourn wife; Ezekiel: Married Gomer',
      'Hosea: Married Gomer; Isaiah: Forbidden to mourn wife; Ezekiel: Prophetic names for sons'
    ],
    correctAnswer: 'Hosea: Married Gomer; Isaiah: Prophetic names for sons; Ezekiel: Forbidden to mourn wife\'s death',
    reference: 'Hosea 1:2–3; Isaiah 8:1–4, 18; Ezekiel 24:15–24',
    explanation: 'Hosea was commanded to marry Gomer (Hosea 1). Isaiah\'s sons were signs in Israel (Isaiah 8:18). Ezekiel\'s wife died suddenly in Babylon and he was told not to mourn as a sign to the exiles (Ezekiel 24:16–18).',
    hint: 'Gomer = Hosea; Maher-shalal-hash-baz = Isaiah; sudden death of wife = Ezekiel.',
    difficulty: 'hard',
    timerSeconds: 25
  },
  {
    level: 26,
    challengeIndex: 4,
    stage: 6,
    stageTitle: 'The Logic Chamber',
    levelTitle: 'Logic Grid Deductions',
    puzzleType: 'Bible Logic Grid',
    questionText: 'BIBLE LOGIC GRID:\nThree kings in Judah died by assassination at the hands of their own royal servants / conspirators. Deduce the king from the place of his death:\n1. Joash\n2. Amaziah\n3. Amon\nLocations of death: in his own house by servants; at the house of Millo on the way down to Silla; fled to Lachish where conspirators pursued and struck him down.',
    clues: [
      'Joash was assassinated by his servants at Beth-millo on the road to Silla after being wounded by the Syrians.',
      'Amaziah fled to the fortified city of Lachish, but assassins were sent to murder him there.',
      'Amon (father of Josiah) was murdered by conspirators inside his own palace in Jerusalem.'
    ],
    options: [
      'Joash: Beth-millo on way to Silla; Amaziah: Lachish; Amon: In his own palace',
      'Joash: In his own palace; Amaziah: Beth-millo; Amon: Lachish',
      'Joash: Lachish; Amaziah: In his own palace; Amon: Beth-millo',
      'Joash: Beth-millo; Amaziah: In his own palace; Amon: Lachish'
    ],
    correctAnswer: 'Joash: Beth-millo on way to Silla; Amaziah: Lachish; Amon: In his own palace',
    reference: '2 Kings 12:20; 2 Kings 14:19; 2 Kings 21:23',
    explanation: 'Joash was slain at Beth-millo (2 Kings 12:20). Amaziah fled to Lachish where he was assassinated (2 Kings 14:19). Amon was assassinated by his servants in his own house (2 Kings 21:23).',
    hint: 'Amaziah fled far away to Lachish; Joash at Beth-millo; Amon in his palace.',
    difficulty: 'master',
    timerSeconds: 25
  },
  {
    level: 26,
    challengeIndex: 5,
    stage: 6,
    stageTitle: 'The Logic Chamber',
    levelTitle: 'Logic Grid Deductions',
    puzzleType: 'Bible Logic Grid',
    questionText: 'BIBLE LOGIC GRID:\nThree women in the Old Testament provided critical intelligence or shelter that saved men from imminent death:\n1. Rahab of Jericho\n2. Michal daughter of Saul\n3. The wise woman of Abel-beth-maacah\nMatch each woman to the method she used to deliver the men:\n- Put a household idol (teraphim) in bed with a quilt of goat hair to help her husband slip out through a window.\n- Hid two Israelite spies under stalks of flax on her roof and let them down by a scarlet rope outside the city wall.\n- Negotiated over the city wall with General Joab and had the rebel Sheba son of Bichri beheaded, saving her city.',
    clues: [
      'Rahab: Stalks of flax and scarlet rope.',
      'Michal: Teraphim idol in bed with goat-hair pillow to deceive Saul\'s messengers.',
      'Wise woman of Abel-beth-maacah: Negotiated with Joab, cutting off Sheba\'s head.'
    ],
    options: [
      'Rahab: Flax & scarlet rope; Michal: Teraphim in bed; Wise woman: Sheba\'s head to Joab',
      'Rahab: Teraphim in bed; Michal: Flax & rope; Wise woman: Sheba\'s head to Joab',
      'Rahab: Flax & scarlet rope; Michal: Sheba\'s head; Wise woman: Teraphim in bed',
      'Rahab: Bread in oven; Michal: Window basket; Wise woman: Flax on roof'
    ],
    correctAnswer: 'Rahab: Flax & scarlet rope; Michal: Teraphim in bed; Wise woman: Sheba\'s head to Joab',
    reference: 'Joshua 2:4–15; 1 Samuel 19:11–17; 2 Samuel 20:14–22',
    explanation: 'Rahab hid the spies under flax (Joshua 2). Michal helped David escape by placing teraphim in his bed (1 Samuel 19). The wise woman of Abel negotiated peace by tossing rebel Sheba\'s head to Joab (2 Samuel 20).',
    hint: 'Michal used the decoy bed idol; Rahab the roof flax; the wise woman pacified Joab.',
    difficulty: 'hard',
    timerSeconds: 25
  },

  // Level 27: Cross-Reference Logic
  {
    level: 27,
    challengeIndex: 1,
    stage: 6,
    stageTitle: 'The Logic Chamber',
    levelTitle: 'Cross-Reference Logic',
    puzzleType: 'Find the Hidden Connection',
    questionText: 'CROSS-REFERENCE LOGIC:\nIn Matthew 2, four Old Testament prophetic passages are cited as fulfilled in Jesus\' early life:\n1. "Out of Egypt I called my son"\n2. "Rachel weeping for her children"\n3. Born in Bethlehem of Ephrathah\n4. "He shall be called a Nazarene"\nWhich Old Testament prophet originally penned: "Out of Egypt I called my son"?',
    clues: [
      'Fulfilled when Joseph, Mary, and infant Jesus returned from Egypt after Herod\'s death.',
      'The original passage reads: "When Israel was a child, I loved him, and out of Egypt I called my son."',
      'Written by the minor prophet whose wife was Gomer.'
    ],
    options: ['Hosea (Hosea 11:1)', 'Micah (Micah 5:2)', 'Jeremiah (Jeremiah 31:15)', 'Zechariah (Zechariah 9:9)'],
    correctAnswer: 'Hosea (Hosea 11:1)',
    reference: 'Matthew 2:15; Hosea 11:1',
    explanation: 'Matthew 2:15 states: "This was to fulfill what the Lord had spoken by the prophet, \'Out of Egypt I called my son.\'" This is a direct quote of Hosea 11:1.',
    hint: 'The prophet Hosea in chapter 11.',
    difficulty: 'medium',
    timerSeconds: 25
  },
  {
    level: 27,
    challengeIndex: 2,
    stage: 6,
    stageTitle: 'The Logic Chamber',
    levelTitle: 'Cross-Reference Logic',
    puzzleType: 'Find the Hidden Connection',
    questionText: 'CROSS-REFERENCE LOGIC:\nOn the Day of Pentecost in Acts 2, Peter explained the miraculous outpouring of the Holy Spirit and speaking in tongues by citing which Old Testament prophet who foretold: "In the last days it shall be, God declares, that I will pour out my Spirit on all flesh"?',
    clues: [
      'Peter declared: "This is what was uttered through the prophet..."',
      'The prophecy mentions sons and daughters prophesying, young men seeing visions, and old men dreaming dreams.',
      'Written by the prophet who warned of a devastating locust invasion.'
    ],
    options: ['Joel (Joel 2:28–32)', 'Amos (Amos 8:11)', 'Habakkuk (Habakkuk 2:4)', 'Malachi (Malachi 4:2)'],
    correctAnswer: 'Joel (Joel 2:28–32)',
    reference: 'Acts 2:16–21; Joel 2:28–32',
    explanation: 'Acts 2:16 states: "But this is what was uttered through the prophet Joel: \'And in the last days it shall be, God declares, that I will pour out my Spirit on all flesh...\'" (quoting Joel 2:28–32).',
    hint: 'The book of Joel chapter 2.',
    difficulty: 'medium',
    timerSeconds: 25
  },
  {
    level: 27,
    challengeIndex: 3,
    stage: 6,
    stageTitle: 'The Logic Chamber',
    levelTitle: 'Cross-Reference Logic',
    puzzleType: 'Find the Hidden Connection',
    questionText: 'CROSS-REFERENCE LOGIC:\nWhen the Ethiopian eunuch sat in his chariot reading the prophet Isaiah, Philip asked: "Do you understand what you are reading?" The passage read: "Like a sheep he was led to the slaughter and like a lamb silent before its shearer, so he opens not his mouth." From which chapter of Isaiah was this passage taken?',
    clues: [
      'The great Fourth Servant Song.',
      'Describes the Suffering Servant bearing our griefs and carrying our sorrows.',
      'The central chapter in the second half of Isaiah.'
    ],
    options: ['Isaiah 53', 'Isaiah 40', 'Isaiah 61', 'Isaiah 9'],
    correctAnswer: 'Isaiah 53',
    reference: 'Acts 8:32–35; Isaiah 53:7–8',
    explanation: 'Acts 8:32 quotes Isaiah 53:7–8: "Now the passage of the Scripture that he was reading was this: \'Like a sheep he was led to the slaughter...\' And beginning with this Scripture Philip told him the good news about Jesus."',
    hint: 'Isaiah 53, the famous prophecy of the Suffering Messiah.',
    difficulty: 'medium',
    timerSeconds: 25
  },
  {
    level: 27,
    challengeIndex: 4,
    stage: 6,
    stageTitle: 'The Logic Chamber',
    levelTitle: 'Cross-Reference Logic',
    puzzleType: 'Find the Hidden Connection',
    questionText: 'CROSS-REFERENCE LOGIC:\nIn Hebrews 7, the author explains the eternal priesthood of Jesus Christ by cross-referencing an ancient historical narrative in Genesis 14 with a royal messianic psalm. Which Psalm declares: "The Lord has sworn and will not change his mind, \'You are a priest forever after the order of Melchizedek\'"?',
    clues: [
      'A Davidic royal psalm depicting Christ seated at God\'s right hand.',
      'Opens with: "The Lord says to my Lord: \'Sit at my right hand, until I make your enemies your footstool.\'"',
      'The most quoted psalm in the entire New Testament.'
    ],
    options: ['Psalm 110', 'Psalm 2', 'Psalm 22', 'Psalm 118'],
    correctAnswer: 'Psalm 110',
    reference: 'Hebrews 7:17–21; Psalm 110:1, 4',
    explanation: 'Psalm 110:4 explicitly states: "The Lord has sworn and will not change his mind, \'You are a priest forever after the order of Melchizedek.\'" Hebrews 7 relies fundamentally on this passage.',
    hint: 'Psalm 110 verse 4.',
    difficulty: 'hard',
    timerSeconds: 25
  },
  {
    level: 27,
    challengeIndex: 5,
    stage: 6,
    stageTitle: 'The Logic Chamber',
    levelTitle: 'Cross-Reference Logic',
    puzzleType: 'Find the Hidden Connection',
    questionText: 'CROSS-REFERENCE LOGIC:\nWhen Judas Iscariot threw down the thirty pieces of silver in the temple and hanged himself, the chief priests bought the potter\'s field (Akeldama). In Matthew 27:9, Matthew attributes this fulfillment to Jeremiah, though the thirty pieces of silver and potter are originally described in which minor prophet\'s book?',
    clues: [
      'The prophet was commanded to shepherd the flock doomed to slaughter.',
      'He asked for his wages, and they weighed out thirty pieces of silver, which the Lord called "the lordly price at which I was priced by them."',
      'The prophet threw the money into the house of the Lord to the potter.'
    ],
    options: ['Zechariah (Zechariah 11:12–13)', 'Malachi (Malachi 3:1)', 'Micah (Micah 6:8)', 'Haggai (Haggai 2:7)'],
    correctAnswer: 'Zechariah (Zechariah 11:12–13)',
    reference: 'Matthew 27:9–10; Zechariah 11:12–13',
    explanation: 'Zechariah 11:12–13 records: "So they weighed out as my wages thirty pieces of silver. Then the Lord said to me, \'Throw it to the potter\'... So I took the thirty pieces of silver and threw them into the house of the Lord to the potter."',
    hint: 'Zechariah chapter 11; the prophetic price of thirty silver pieces.',
    difficulty: 'hard',
    timerSeconds: 25
  },

  // Level 28: Conditional Sequences
  {
    level: 28,
    challengeIndex: 1,
    stage: 6,
    stageTitle: 'The Logic Chamber',
    levelTitle: 'Conditional Sequences',
    puzzleType: 'Bible Story Puzzle',
    questionText: 'CONDITIONAL SEQUENCES:\nExamine the chronological sequence of events during the night of Jesus\' arrest in Gethsemane:\n1. Jesus prays three times while the disciples sleep.\n2. Judas approaches and betrays Jesus with a kiss.\n3. Peter draws his sword and cuts off Malchus\' right ear.\n4. Jesus touches Malchus\' ear and heals him.\nWhat immediate event took place right AFTER Malchus was healed?',
    clues: [
      'Peter had struck the high priest\'s servant Malchus.',
      'Jesus commanded: "Put your sword back into its sheath."',
      'What did all the disciples do when the armed officers arrested Jesus?'
    ],
    options: [
      'All the disciples deserted Him and fled',
      'Peter openly denied Jesus in the high priest\'s courtyard',
      'Pilate washed his hands before the crowd',
      'The rooster crowed for the second time'
    ],
    correctAnswer: 'All the disciples deserted Him and fled',
    reference: 'Matthew 26:52–56; Mark 14:50',
    explanation: 'Immediately after Jesus rebuked the sword and healed Malchus\' ear, Mark 14:50 and Matthew 26:56 state: "Then all the disciples left him and fled." Peter\'s denials happened later in the courtyard.',
    hint: 'The disciples scattered into the darkness in panic.',
    difficulty: 'medium',
    timerSeconds: 25
  },
  {
    level: 28,
    challengeIndex: 2,
    stage: 6,
    stageTitle: 'The Logic Chamber',
    levelTitle: 'Conditional Sequences',
    puzzleType: 'Bible Story Puzzle',
    questionText: 'CONDITIONAL SEQUENCES:\nFollowing the fall of Jericho in Joshua 6, Israel suffered an unexpected and humiliating defeat at the small town of Ai. Why did this defeat occur according to God\'s revelation to Joshua?',
    clues: [
      'Israel sent only two or three thousand men thinking Ai was weak.',
      'The men of Ai routed Israel and struck down thirty-six men, causing Israel\'s heart to melt like water.',
      'God revealed that a man had violated the ban by stealing devoted things at Jericho.'
    ],
    options: [
      'Achan stole a beautiful cloak of Shinar, 200 shekels of silver, and a bar of gold',
      'Joshua forgot to seek the counsel of the high priest Eleazar with the Urim',
      'The Gibeonites deceived Joshua with dry bread and worn shoes',
      'The Ark of the Covenant was left behind in the camp at Gilgal'
    ],
    correctAnswer: 'Achan stole a beautiful cloak of Shinar, 200 shekels of silver, and a bar of gold',
    reference: 'Joshua 7:1–21',
    explanation: 'God told Joshua: "Israel has sinned; they have transgressed my covenant... they have taken some of the devoted things." Achan admitted taking a Babylonian cloak, silver, and gold bar, burying them in his tent.',
    hint: 'Achan\'s secret sin of covetousness at Jericho brought judgment on the entire nation.',
    difficulty: 'medium',
    timerSeconds: 25
  },
  {
    level: 28,
    challengeIndex: 3,
    stage: 6,
    stageTitle: 'The Logic Chamber',
    levelTitle: 'Conditional Sequences',
    puzzleType: 'Bible Story Puzzle',
    questionText: 'CONDITIONAL SEQUENCES:\nWhen King David committed adultery with Bathsheba, he attempted multiple sequential maneuvers to conceal his crime. What did David do FIRST before ordering Joab to have Uriah the Hittite killed in the front lines of battle?',
    clues: [
      'David sent for Uriah from the siege of Rabbah.',
      'David urged Uriah to go down to his house and wash his feet, sending a royal banquet portion after him.',
      'Uriah refused to sleep in his house while the Ark and his fellow soldiers slept in open tents.'
    ],
    options: [
      'David recalled Uriah home and tried to get him to sleep with his wife',
      'David sent Uriah with a secret sealed death warrant directly to Joab',
      'David confessed his sin immediately to Nathan the prophet',
      'David commanded Bathsheba to flee to her father Eliam\'s estate'
    ],
    correctAnswer: 'David recalled Uriah home and tried to get him to sleep with his wife',
    reference: '2 Samuel 11:6–13',
    explanation: 'David first recalled Uriah from the battlefield and tried repeatedly (even getting him drunk) to make him go home to Bathsheba to cover the pregnancy. Only when Uriah stubbornly slept at the palace door did David orchestrate his murder.',
    hint: 'David tried to make Uriah sleep at home so the child would appear to be Uriah\'s.',
    difficulty: 'medium',
    timerSeconds: 25
  },
  {
    level: 28,
    challengeIndex: 4,
    stage: 6,
    stageTitle: 'The Logic Chamber',
    levelTitle: 'Conditional Sequences',
    puzzleType: 'Bible Story Puzzle',
    questionText: 'CONDITIONAL SEQUENCES:\nDuring King Solomon\'s accession to the throne, his elder half-brother Adonijah made an initial grab for power. What specific action caused Solomon to ultimately execute Adonijah, ending his conditional clemency?',
    clues: [
      'Solomon had previously told Adonijah: "If he shows himself a worthy man, not one of his hairs shall fall to the earth."',
      'Adonijah approached the queen mother Bathsheba with a dangerous request.',
      'He asked for Abishag the Shunammite, King David\'s attendant concubine, to be given to him as his wife.'
    ],
    options: [
      'Adonijah requested David\'s concubine Abishag the Shunammite to be his wife',
      'Adonijah formed an army with Joab to storm Jerusalem',
      'Adonijah stole the royal crown of David from the palace',
      'Adonijah sacrificed oxen at the high place of Gibeon without Solomon\'s consent'
    ],
    correctAnswer: 'Adonijah requested David\'s concubine Abishag the Shunammite to be his wife',
    reference: '1 Kings 2:13–25',
    explanation: 'Adonijah asked Bathsheba to request Abishag the Shunammite as his wife. Solomon recognized this as a subtle claim on David\'s royal rights (as claiming a king\'s concubine was equivalent to claiming the throne) and ordered Benaiah to strike him down.',
    hint: 'Asking for the former king\'s maiden concubine Abishag signaled royal ambition.',
    difficulty: 'hard',
    timerSeconds: 25
  },
  {
    level: 28,
    challengeIndex: 5,
    stage: 6,
    stageTitle: 'The Logic Chamber',
    levelTitle: 'Conditional Sequences',
    puzzleType: 'Bible Story Puzzle',
    questionText: 'CONDITIONAL SEQUENCES:\nIn the book of Acts, what crucial event happened immediately BEFORE the Jerusalem Council in Acts 15 met to debate whether Gentile believers had to be circumcised?',
    clues: [
      'Paul and Barnabas had returned to Syrian Antioch and gathered the church to report all that God had done.',
      'Certain men came down from Judea to Antioch teaching: "Unless you are circumcised according to the custom of Moses, you cannot be saved."',
      'This ignited sharp dissension and debate in Antioch, leading the church to appoint Paul and Barnabas to go up to the apostles in Jerusalem.'
    ],
    options: [
      'Judaizers came from Judea to Antioch demanding that Gentiles be circumcised',
      'Peter had his vision of the unclean sheet of animals at Joppa',
      'Paul was stoned and dragged outside the gates of Lystra',
      'James the brother of John was executed with the sword by Herod Agrippa'
    ],
    correctAnswer: 'Judaizers came from Judea to Antioch demanding that Gentiles be circumcised',
    reference: 'Acts 15:1–2',
    explanation: 'Acts 15:1–2 records that men came down from Judea to Antioch teaching that circumcision was necessary for salvation, sparking intense controversy that caused Paul and Barnabas to be sent to Jerusalem for the Council.',
    hint: 'The arrival of strict legalists from Judea stirring controversy in Antioch.',
    difficulty: 'hard',
    timerSeconds: 25
  },

  // Level 29: Lineage Logic
  {
    level: 29,
    challengeIndex: 1,
    stage: 6,
    stageTitle: 'The Logic Chamber',
    levelTitle: 'Lineage Logic',
    puzzleType: 'Bible Logic Grid',
    questionText: 'LINEAGE LOGIC:\nZeruiah was King David\'s sister. Her three famous warrior sons served in David\'s military leadership. Who were the three sons of Zeruiah?',
    clues: [
      'One was commander-in-chief of David\'s army.',
      'One was a fierce warrior who accompanied David into Saul\'s camp by night and wanted to pin Saul with his spear.',
      'One was as fleet of foot as a wild gazelle, but was killed by Abner with the butt of his spear at the pool of Gibeon.'
    ],
    options: [
      'Joab, Abishai, and Asahel',
      'Benaiah, Eleazar, and Shammah',
      'Jonathan, Abinadab, and Malchi-shua',
      'Elhanan, Uriah, and Ittai'
    ],
    correctAnswer: 'Joab, Abishai, and Asahel',
    reference: '2 Samuel 2:18; 1 Chronicles 2:16',
    explanation: '1 Chronicles 2:16 records David\'s sisters Zeruiah and Abigail. The three sons of Zeruiah were Joab (the army commander), Abishai (the bold mighty man), and Asahel (swift runner slain by Abner).',
    hint: 'Joab and his two brothers; David\'s nephews.',
    difficulty: 'medium',
    timerSeconds: 25
  },
  {
    level: 29,
    challengeIndex: 2,
    stage: 6,
    stageTitle: 'The Logic Chamber',
    levelTitle: 'Lineage Logic',
    puzzleType: 'Bible Logic Grid',
    questionText: 'LINEAGE LOGIC:\nTimothy, the young pastoral protégé of the apostle Paul, was nurtured in sincere Christian faith by two women in his family. What were the names of Timothy\'s grandmother and mother recorded by Paul in 2 Timothy 1:5?',
    clues: [
      'Paul remembered their unfeigned faith that first dwelt in his grandmother, then in his mother, and now in Timothy.',
      'His mother was a Jewish believer, while his father was a Greek.',
      'They taught Timothy the sacred Scriptures from infancy.'
    ],
    options: [
      'Grandmother: Lois; Mother: Eunice',
      'Grandmother: Eunice; Mother: Lois',
      'Grandmother: Salome; Mother: Joanna',
      'Grandmother: Martha; Mother: Mary'
    ],
    correctAnswer: 'Grandmother: Lois; Mother: Eunice',
    reference: '2 Timothy 1:5; 3:15; Acts 16:1',
    explanation: '2 Timothy 1:5 states: "I am reminded of your sincere faith, a faith that dwelt first in your grandmother Lois and your mother Eunice and now, I am sure, dwells in you as well."',
    hint: 'Lois was the grandmother; Eunice was the mother.',
    difficulty: 'medium',
    timerSeconds: 25
  },
  {
    level: 29,
    challengeIndex: 3,
    stage: 6,
    stageTitle: 'The Logic Chamber',
    levelTitle: 'Lineage Logic',
    puzzleType: 'Bible Logic Grid',
    questionText: 'LINEAGE LOGIC:\nExamine the genealogical relationship between King Saul and Abner, the commander-in-chief of Israel\'s army:\n- Saul was the son of Kish.\n- Abner was the son of Ner.\n- Kish and Ner were brothers, sons of Abiel.\nWhat was the exact biological relationship between King Saul and General Abner?',
    clues: [
      'Their fathers (Kish and Ner) were full brothers.',
      'Saul and Abner belonged to the same generation of the Benjaminite clan.',
      'Abner was Saul\'s cousin (or uncle\'s son).'
    ],
    options: ['First cousins', 'Brothers', 'Uncle and nephew', 'Father and son'],
    correctAnswer: 'First cousins',
    reference: '1 Samuel 14:50–51',
    explanation: '1 Samuel 14:50–51 explains: "The name of the commander of his army was Abner the son of Ner, Saul\'s uncle. Kish was the father of Saul, and Ner the father of Abner was the son of Abiel." Thus, Saul and Abner were first cousins.',
    hint: 'Their fathers were brothers, making Saul and Abner first cousins.',
    difficulty: 'hard',
    timerSeconds: 25
  },
  {
    level: 29,
    challengeIndex: 4,
    stage: 6,
    stageTitle: 'The Logic Chamber',
    levelTitle: 'Lineage Logic',
    puzzleType: 'Bible Logic Grid',
    questionText: 'LINEAGE LOGIC:\nIn the royal genealogy of the kingdom of Judah, Athaliah seized the throne of Jerusalem and slaughtered all royal heirs except baby Joash. Who was Athaliah\'s father and who was her mother?',
    clues: [
      'Her father was the notoriously wicked king of Israel who married a Sidonian princess.',
      'Her mother introduced state-sponsored Baal and Asherah worship and killed God\'s prophets.',
      'Athaliah brought the murderous idolatry of the house of Omri into Judah through her marriage to King Jehoram.'
    ],
    options: [
      'Father: King Ahab; Mother: Jezebel',
      'Father: King Omri; Mother: Athaliah the elder',
      'Father: King Jeroboam; Mother: Zeruah',
      'Father: King Baasha; Mother: Tirzah'
    ],
    correctAnswer: 'Father: King Ahab; Mother: Jezebel',
    reference: '2 Kings 8:18, 26; 2 Chronicles 22:2',
    explanation: 'Athaliah was the daughter of King Ahab of Israel and Jezebel (called the granddaughter of Omri). She married Jehoram of Judah and brought the horrific corruptions of the house of Ahab to Jerusalem.',
    hint: 'The infamous northern royal couple Ahab and Jezebel.',
    difficulty: 'hard',
    timerSeconds: 25
  },
  {
    level: 29,
    challengeIndex: 5,
    stage: 6,
    stageTitle: 'The Logic Chamber',
    levelTitle: 'Lineage Logic',
    puzzleType: 'Bible Logic Grid',
    questionText: 'LINEAGE LOGIC:\nAaron, the first high priest of Israel, had four sons consecrated to the priesthood. Two were struck dead before the Lord for offering unauthorized fire. What were the names of Aaron\'s four sons, and which two survived to carry on the high priestly line?',
    clues: [
      'Nadab and Abihu died when fire came out from the Lord at the tabernacle.',
      'The remaining two younger sons preserved the priestly lineage throughout Israel\'s history.'
    ],
    options: [
      'All four: Nadab, Abihu, Eleazar, Ithamar; Survivors: Eleazar and Ithamar',
      'All four: Hophni, Phinehas, Eleazar, Ithamar; Survivors: Hophni and Phinehas',
      'All four: Gershon, Kohath, Merari, Eleazar; Survivors: Gershon and Kohath',
      'All four: Nadab, Abihu, Phinehas, Zadok; Survivors: Phinehas and Zadok'
    ],
    correctAnswer: 'All four: Nadab, Abihu, Eleazar, Ithamar; Survivors: Eleazar and Ithamar',
    reference: 'Leviticus 10:1–2; Numbers 3:1–4; Exodus 6:23',
    explanation: 'Aaron\'s four sons were Nadab, Abihu, Eleazar, and Ithamar. Nadab and Abihu died when they offered profane fire (Leviticus 10). Eleazar and Ithamar survived and served as priests under Aaron.',
    hint: 'Eleazar and Ithamar were the two surviving sons.',
    difficulty: 'medium',
    timerSeconds: 25
  },

  // Level 30: Logic Chamber Boss
  {
    level: 30,
    challengeIndex: 1,
    stage: 6,
    stageTitle: 'The Logic Chamber',
    levelTitle: 'Logic Chamber Boss',
    puzzleType: 'Bible Logic Grid',
    questionText: 'LOGIC CHAMBER BOSS:\nMASTER LOGIC PUZZLE:\nThree prominent kings of Israel and Judah experienced dramatic falls from grace involving disease, warfare, or madness. Deduce the correct match:\n1. King Uzziah (Azariah) of Judah\n2. King Asa of Judah\n3. King Nebuchadnezzar of Babylon',
    clues: [
      'One sought not the Lord but only physicians when severely diseased in his feet in his old age.',
      'One became arrogant, entered the temple sanctuary to burn incense, and was struck on the forehead with leprosy.',
      'One walked on the palace roof boasting of his majesty, lost his sanity, ate grass like an ox, and his hair grew like eagles\' feathers.'
    ],
    options: [
      'Uzziah: Leprosy in temple; Asa: Diseased in feet; Nebuchadnezzar: Grazed grass like an ox',
      'Uzziah: Diseased in feet; Asa: Leprosy in temple; Nebuchadnezzar: Grazed grass like an ox',
      'Uzziah: Grazed grass like an ox; Asa: Leprosy in temple; Nebuchadnezzar: Diseased in feet',
      'Uzziah: Leprosy in temple; Asa: Grazed grass like an ox; Nebuchadnezzar: Diseased in feet'
    ],
    correctAnswer: 'Uzziah: Leprosy in temple; Asa: Diseased in feet; Nebuchadnezzar: Grazed grass like an ox',
    reference: '2 Chronicles 26:16–21; 2 Chronicles 16:12; Daniel 4:28–33',
    explanation: 'Uzziah was struck with leprosy when trying to burn incense (2 Chron 26). Asa suffered severe foot disease and sought only doctors (2 Chron 16:12). Nebuchadnezzar suffered divine madness eating grass (Daniel 4).',
    hint: 'Uzziah = forehead leprosy; Asa = foot disease; Nebuchadnezzar = lycanthropic madness.',
    difficulty: 'master',
    timerSeconds: 20
  },
  {
    level: 30,
    challengeIndex: 2,
    stage: 6,
    stageTitle: 'The Logic Chamber',
    levelTitle: 'Logic Chamber Boss',
    puzzleType: 'Bible Logic Grid',
    questionText: 'LOGIC CHAMBER BOSS:\nThree men in the New Testament bore the name James. Deduce which James matches which historical identity:\n1. James the son of Zebedee\n2. James the son of Alphaeus\n3. James the brother of the Lord',
    clues: [
      'One was brother of John, member of Jesus\' inner circle, and was executed with the sword by King Herod Agrippa I.',
      'One was one of the Twelve apostles called "James the Less".',
      'One was leader of the Jerusalem church, author of the Epistle of James, and had a resurrection appearance from Jesus.'
    ],
    options: [
      'Son of Zebedee: Inner circle martyred by Herod; Son of Alphaeus: One of the 12 (James the Less); Brother of Lord: Jerusalem church leader',
      'Son of Zebedee: Jerusalem leader; Son of Alphaeus: Martyred by Herod; Brother of Lord: One of the 12',
      'Son of Zebedee: One of the 12; Son of Alphaeus: Jerusalem leader; Brother of Lord: Martyred by Herod',
      'Son of Zebedee: Author of epistle; Son of Alphaeus: Inner circle; Brother of Lord: Son of Zebedee'
    ],
    correctAnswer: 'Son of Zebedee: Inner circle martyred by Herod; Son of Alphaeus: One of the 12 (James the Less); Brother of Lord: Jerusalem church leader',
    reference: 'Matthew 10:2–3; Acts 12:1–2; Acts 15:13; Galatians 1:19',
    explanation: 'James son of Zebedee was executed in Acts 12. James son of Alphaeus was one of the Twelve. James the Lord\'s brother presided at the Jerusalem Council in Acts 15 and wrote the Epistle.',
    hint: 'Zebedee\'s son died first in Acts 12; the Lord\'s brother led the Jerusalem church.',
    difficulty: 'master',
    timerSeconds: 20
  },
  {
    level: 30,
    challengeIndex: 3,
    stage: 6,
    stageTitle: 'The Logic Chamber',
    levelTitle: 'Logic Chamber Boss',
    puzzleType: 'Spot the Biblical Mistake',
    questionText: 'LOGIC CHAMBER BOSS:\nExamine these four claims regarding the Ark of the Covenant\'s journey after being captured by the Philistines. Which ONE claim contains an inaccurate biblical error?',
    clues: [
      'The Philistines took the Ark from Ebenezer to Ashdod.',
      'The idol Dagon fell face down and had its head and hands snapped off.',
      'The Philistines returned the Ark on a new cart drawn by two milk cows with five golden tumors and five golden mice.',
      'Examine where the Ark was kept for decades before David brought it to Jerusalem.'
    ],
    options: [
      'The Ark remained at the city of Jericho inside Rahab\'s house for twenty years',
      'The men of Beth-shemesh were struck down because they looked inside the Ark of the Lord',
      'The Ark was brought to Kiriath-jearim to the house of Abinadab on the hill, where Eleazar was consecrated to guard it',
      'The Philistines sent a guilt offering of five golden tumors and five golden mice corresponding to their five lords'
    ],
    correctAnswer: 'The Ark remained at the city of Jericho inside Rahab\'s house for twenty years',
    reference: '1 Samuel 5:1–6:21; 7:1–2',
    explanation: '1 Samuel 7:1–2 explicitly states the Ark stayed at Kiriath-jearim in the house of Abinadab for twenty years until David retrieved it. It was never kept in Rahab\'s house in Jericho.',
    hint: 'The Ark was lodged at Kiriath-jearim, never in Jericho.',
    difficulty: 'hard',
    timerSeconds: 20
  },
  {
    level: 30,
    challengeIndex: 4,
    stage: 6,
    stageTitle: 'The Logic Chamber',
    levelTitle: 'Logic Chamber Boss',
    puzzleType: 'The Impossible Detail',
    questionText: 'LOGIC CHAMBER BOSS:\nWhich of the following events is an IMPOSSIBLE HISTORICAL ERROR regarding the ministry of the apostle Paul?',
    clues: [
      'Paul was born in Tarsus of Cilicia, a Roman citizen.',
      'He was educated in Jerusalem at the feet of Gamaliel.',
      'Examine his presence at early gospel events.'
    ],
    options: [
      'Paul was present as an eyewitness disciple at the feeding of the five thousand in Galilee',
      'Paul was consenting to the death of Stephen when the witnesses laid their coats at his feet',
      'Paul was let down over the city wall of Damascus in a basket through an opening in the wall',
      'Paul was bitten by a viper on the island of Malta and suffered no harm'
    ],
    correctAnswer: 'Paul was present as an eyewitness disciple at the feeding of the five thousand in Galilee',
    reference: 'Galatians 1:13–17; Acts 7:58; Acts 9:25; Acts 28:3–5',
    explanation: 'Paul was not a disciple during Jesus\' earthly Galilean ministry; he first appears in Acts 7–8 persecuting the church. He was not present at the feeding of the 5,000.',
    hint: 'Paul never followed Jesus during His earthly Galilean ministry before the crucifixion.',
    difficulty: 'master',
    timerSeconds: 20
  },
  {
    level: 30,
    challengeIndex: 5,
    stage: 6,
    stageTitle: 'The Logic Chamber',
    levelTitle: 'Logic Chamber Boss',
    puzzleType: 'Odd One Out',
    questionText: 'LOGIC CHAMBER BOSS:\nODD ONE OUT:\nWhich of these four men was NOT one of David\'s famous "Three Mighty Men" (the elite top tier of heroes described in 2 Samuel 23)?',
    clues: [
      'Three formed the supreme trio of David\'s warriors who broke through the Philistine camp to fetch David water from the well of Bethlehem.',
      'One was Josheb-basshebeth the Tahchemonite (who killed 800 with his spear).',
      'One was Eleazar son of Dodo the Ahohite (who fought until his hand froze to his sword).',
      'One was Shammah son of Agee the Hararite (who defended the field of lentils).'
    ],
    options: ['Abishai', 'Josheb-basshebeth (Adino)', 'Eleazar son of Dodo', 'Shammah son of Agee'],
    correctAnswer: 'Abishai',
    reference: '2 Samuel 23:8–19',
    explanation: 'The supreme "Three" were Josheb-basshebeth, Eleazar son of Dodo, and Shammah son of Agee (2 Samuel 23:8–12). Abishai was commander of "The Thirty" and most renowned of them, but 2 Samuel 23:19 explicitly states: "He did not attain to the Three."',
    hint: 'Scripture specifically notes that Abishai was chief of the Thirty, but did not attain to the elite Three.',
    difficulty: 'master',
    timerSeconds: 20
  }
];

fs.writeFileSync(
  path.join(process.cwd(), 'scripts', 'puzzlesStages4to6.ts'),
  `// Bible Puzzles — Stages 4–6 (Levels 16–30, 75 Questions)\n// Rigorously researched biblical logic, detective clues, and narrative puzzles.\n\nimport type { RawBiblePuzzle } from './puzzlesStages1to3';\n\nexport const PUZZLES_STAGES_4_TO_6: RawBiblePuzzle[] = ${JSON.stringify(
    puzzles,
    null,
    2
  )};\n`
);

console.log(`Generated ${puzzles.length} puzzles for Stages 4–6.`);
