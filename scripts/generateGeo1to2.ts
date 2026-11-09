import fs from 'fs';
import path from 'path';

export interface RawGeoQuestion {
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
  region: string;
  testament: 'Old Testament' | 'New Testament' | 'Both';
  difficulty: 'easy' | 'medium' | 'hard' | 'expert' | 'master';
  timerSeconds: number;
}

const batch1Questions: RawGeoQuestion[] = [
  // ==========================================
  // STAGE 1: GEOGRAPHY FOUNDATIONS (Levels 1–5)
  // ==========================================

  // Level 1: Foundations of Canaan & Egypt
  {
    level: 1,
    challengeIndex: 1,
    stage: 1,
    stageTitle: 'Geography Foundations',
    levelTitle: 'Foundations of Canaan & Egypt',
    questionType: 'Identify the Biblical Location',
    isTyped: false,
    questionText: 'IDENTIFY THE LOCATION:\nI was an ancient, fortified oasis city situated in the Jordan Rift Valley roughly 820 feet below sea level, surrounded by groves of date palms. When Israel crossed the Jordan River under Joshua, my walls collapsed after seven days of liturgical procession by priests blowing ram’s horns, leaving only an innkeeper’s section intact. Which city am I?',
    clues: [
      'Often called "The City of Palm Trees" in Deuteronomy 34:3.',
      'Encountered by Israel as their first major military target in Canaan.',
      'Site where Jesus later encountered Zacchaeus and healed blind Bartimaeus.'
    ],
    options: ['Jericho', 'Ai', 'Gilgal', 'Hebron'],
    correctAnswer: 'Jericho',
    acceptedAlternatives: ['City of Palm Trees'],
    reference: 'Joshua 6:1–25; Luke 19:1',
    explanation: 'Jericho is one of the oldest inhabited cities on earth, situated in the Jordan Valley, conquered after its walls fell flat.',
    hint: 'Famous Jordan Valley oasis city whose walls fell after seven days of marching.',
    region: 'Jordan Valley',
    testament: 'Both',
    difficulty: 'easy',
    timerSeconds: 30
  },
  {
    level: 1,
    challengeIndex: 2,
    stage: 1,
    stageTitle: 'Geography Foundations',
    levelTitle: 'Foundations of Canaan & Egypt',
    questionType: 'Where Did This Happen?',
    isTyped: false,
    questionText: 'WHERE DID THIS HAPPEN?\nIn which ancient fertile agricultural district in the eastern Nile Delta of Egypt were the descendants of Jacob settled by Pharaoh during the seven-year famine, living in pasture lands suitable for livestock and spared from several of the catastrophic plagues of Exodus?',
    clues: [
      'Granted to Joseph’s family because shepherds were an abomination to the Egyptians.',
      'Remained completely shielded from the plagues of flies, hail, and darkness.',
      'The starting region for the Exodus departure.'
    ],
    options: ['Goshen', 'Memphis', 'Thebes', 'Tanis'],
    correctAnswer: 'Goshen',
    acceptedAlternatives: ['Land of Goshen', 'Rameses'],
    reference: 'Genesis 45:10; 47:5–6; Exodus 8:22; 9:26',
    explanation: 'Goshen was the fertile delta region in northeastern Egypt assigned to the Israelites where they prospered and were spared from plagues.',
    hint: 'Nile Delta region where Israel settled during the famine in Egypt.',
    region: 'Egypt',
    testament: 'Old Testament',
    difficulty: 'easy',
    timerSeconds: 30
  },
  {
    level: 1,
    challengeIndex: 3,
    stage: 1,
    stageTitle: 'Geography Foundations',
    levelTitle: 'Foundations of Canaan & Egypt',
    questionType: 'Identify the Biblical Location',
    isTyped: false,
    questionText: 'IDENTIFY THE LOCATION:\nI was an ancient Judean hill town located about five miles south of Jerusalem along the central ridge road. My Hebrew name translates to "House of Bread." Here Rachel died giving birth to Benjamin, Ruth gleaned in the barley fields of Boaz, David was anointed king by Samuel, and Micah prophesied that out of me would come the eternal Ruler of Israel. Which historic town am I?',
    clues: [
      'Also known anciently as Ephrath or Ephrathah.',
      'City of David where Jesus was born during the census of Caesar Augustus.',
      'Setting of Ruth 1–4 and Matthew 2:1–6.'
    ],
    options: ['Bethlehem', 'Hebron', 'Bethel', 'Tekoa'],
    correctAnswer: 'Bethlehem',
    acceptedAlternatives: ['Bethlehem of Judea', 'Bethlehem Ephrathah', 'Beit Lahm'],
    reference: 'Genesis 35:19; Ruth 1:19; Micah 5:2; Matthew 2:1',
    explanation: 'Bethlehem ("House of Bread") was the ancestral home of David and the prophesied birthplace of the Messiah.',
    hint: 'Judean town meaning "House of Bread," home of David and birthplace of Christ.',
    region: 'Judea',
    testament: 'Both',
    difficulty: 'easy',
    timerSeconds: 30
  },
  {
    level: 1,
    challengeIndex: 4,
    stage: 1,
    stageTitle: 'Geography Foundations',
    levelTitle: 'Foundations of Canaan & Egypt',
    questionType: 'Location and Character Match',
    isTyped: false,
    questionText: 'LOCATION AND CHARACTER MATCH:\nWhich venerable southern hill city, situated roughly twenty miles south of Jerusalem at over three thousand feet elevation, served as Abraham’s primary dwelling by the oaks of Mamre, was the site of the Machpelah cave tomb where Sarah, Abraham, Isaac, Rebekah, Leah, and Jacob were buried, and was the royal capital where David reigned over Judah for seven and a half years before taking Jerusalem?',
    clues: [
      'Anciently called Kiriath-arba after Arba, the greatest man among the Anakim.',
      'Granted to Caleb as an inheritance because he wholly followed the Lord.',
      'Capital of David’s early reign (2 Samuel 2:1–4).'
    ],
    options: ['Hebron', 'Beersheba', 'Debir', 'Gaza'],
    correctAnswer: 'Hebron',
    acceptedAlternatives: ['Kiriath-arba', 'Kirjath-arba'],
    reference: 'Genesis 13:18; 23:17–20; Joshua 14:13–15; 2 Samuel 2:1–4',
    explanation: 'Hebron (Kiriath-arba) was Abraham’s residence, site of the patriarchal tomb at Machpelah, and David’s initial royal capital for seven years.',
    hint: 'Ancient city of the cave of Machpelah where David first reigned as king.',
    region: 'Judean Hill Country',
    testament: 'Old Testament',
    difficulty: 'medium',
    timerSeconds: 30
  },
  {
    level: 1,
    challengeIndex: 5,
    stage: 1,
    stageTitle: 'Geography Foundations',
    levelTitle: 'Foundations of Canaan & Egypt',
    questionType: 'Type the Location Yourself',
    isTyped: true,
    questionText: 'TYPE THE LOCATION — MINI-BOSS:\nI was a Phoenician coastal village situated on the Mediterranean coast between Tyre and Sidon. During a severe three-and-a-half-year drought throughout Israel, the prophet Elijah was commanded to leave the dried-up brook Cherith and dwell in me, where a destitute widow fed him with an unceasing jar of flour and jug of oil, and where her deceased son was raised to life. What was the name of this coastal town (called Sarepta in the Greek of Luke 4:26)?',
    clues: [
      '1 Kings 17:8–10: "Arise, go to [...], which belongs to Sidon, and dwell there."',
      'Jesus cited this town in Luke 4:25–26: "to none of them was Elijah sent except to Sarepta, in the land of Sidon."',
      'Home of the widow whose oil and flour never ran out.'
    ],
    options: ['Zarephath', 'Sarepta', 'Sidon', 'Tyre'],
    correctAnswer: 'Zarephath',
    acceptedAlternatives: ['Sarepta', 'Zarepath'],
    reference: '1 Kings 17:8–24; Luke 4:25–26',
    explanation: 'Zarephath (Sarepta) was the Phoenician town where Elijah stayed with the widow whose jar of flour and jug of oil were miraculously multiplied.',
    hint: 'Phoenician coastal town where Elijah stayed with a widow during the drought.',
    region: 'Phoenicia',
    testament: 'Both',
    difficulty: 'hard',
    timerSeconds: 25
  },

  // Level 2: Northern Galilee & The Sea
  {
    level: 2,
    challengeIndex: 1,
    stage: 1,
    stageTitle: 'Geography Foundations',
    levelTitle: 'Northern Galilee & The Sea',
    questionType: 'Where Did This Happen?',
    isTyped: false,
    questionText: 'WHERE DID THIS HAPPEN?\nIn which village in the hills of Lower Galilee did Jesus perform the very first of His miraculous signs during a wedding feast, transforming six stone water jars containing twenty to thirty gallons each into choice wine when the wine ran out?',
    clues: [
      'Hometown of Nathanael (Bartholomew).',
      'John 2:11: "This, the first of his signs, Jesus did at [...] in Galilee, and manifested his glory."',
      'Later the site where Jesus healed an official’s dying son at Capernaum from a distance (John 4:46).'
    ],
    options: ['Cana in Galilee', 'Nazareth', 'Capernaum', 'Nain'],
    correctAnswer: 'Cana in Galilee',
    acceptedAlternatives: ['Cana', 'Cana of Galilee', 'Kafr Kanna'],
    reference: 'John 2:1–11; 4:46; 21:2',
    explanation: 'Cana in Galilee was the site of Jesus’ first miracle where He turned water into wine at a wedding banquet.',
    hint: 'Galilean village where Jesus performed His first miracle of turning water into wine.',
    region: 'Galilee',
    testament: 'New Testament',
    difficulty: 'easy',
    timerSeconds: 30
  },
  {
    level: 2,
    challengeIndex: 2,
    stage: 1,
    stageTitle: 'Geography Foundations',
    levelTitle: 'Northern Galilee & The Sea',
    questionType: 'Identify the Biblical Location',
    isTyped: false,
    questionText: 'IDENTIFY THE LOCATION:\nI was a bustling fishing town on the northwest shore of the Sea of Galilee that served as the primary operational headquarters for Jesus’ public ministry, earning me the Gospel title "His own city." In my synagogue, Jesus cast out an unclean spirit, healed a centurion’s paralyzed servant, restored Peter’s mother-in-law from fever, and healed a paralytic lowered through a roof. Which lakeside city am I?',
    clues: [
      'Name means "Village of Nahum" in Hebrew.',
      'Matthew 9:1 calls it "his own city."',
      'Rebuked by Jesus for unbelief despite seeing most of His mighty works (Matthew 11:23).'
    ],
    options: ['Capernaum', 'Bethsaida', 'Chorazin', 'Tiberias'],
    correctAnswer: 'Capernaum',
    acceptedAlternatives: ['Kefar Nahum', 'Capharnaum'],
    reference: 'Matthew 4:13; 9:1; Mark 1:21–28; 2:1–12; Luke 4:31–37',
    explanation: 'Capernaum was the central base of Jesus’ Galilean ministry where numerous miracles and major teachings occurred.',
    hint: 'Lakeside headquarters of Jesus’ Galilean ministry, called "His own city."',
    region: 'Sea of Galilee',
    testament: 'New Testament',
    difficulty: 'easy',
    timerSeconds: 30
  },
  {
    level: 2,
    challengeIndex: 3,
    stage: 1,
    stageTitle: 'Geography Foundations',
    levelTitle: 'Northern Galilee & The Sea',
    questionType: 'Identify the Biblical Location',
    isTyped: false,
    questionText: 'IDENTIFY THE LOCATION:\nI was a fishing village on the northern shore of the Sea of Galilee whose name translates to "House of Fish." I was the native hometown of the Apostle Philip, Andrew, and Simon Peter before they relocated their fishing operations to Capernaum. Jesus fed the five thousand in a desolate place belonging to my municipality, yet later rebuked me alongside Chorazin for remaining unrepentant. What city am I?',
    clues: [
      'John 1:44: "Now Philip was from [...], the city of Andrew and Peter."',
      'Site near which the feeding of the 5,000 occurred (Luke 9:10).',
      'Where Jesus healed a blind man in two stages, spitting on his eyes (Mark 8:22–26).'
    ],
    options: ['Bethsaida', 'Chorazin', 'Magdala', 'Hippos'],
    correctAnswer: 'Bethsaida',
    acceptedAlternatives: ['Bethsaida of Galilee', 'Bethsaida Julias'],
    reference: 'Mark 8:22–26; Luke 9:10; 10:13; John 1:44; 12:21',
    explanation: 'Bethsaida ("House of Fish") on the north shore of the lake was the hometown of Peter, Andrew, and Philip.',
    hint: 'Fishing village meaning "House of Fish," hometown of Peter, Andrew, and Philip.',
    region: 'Sea of Galilee',
    testament: 'New Testament',
    difficulty: 'medium',
    timerSeconds: 30
  },
  {
    level: 2,
    challengeIndex: 4,
    stage: 1,
    stageTitle: 'Geography Foundations',
    levelTitle: 'Northern Galilee & The Sea',
    questionType: 'Where Did This Happen?',
    isTyped: false,
    questionText: 'WHERE DID THIS HAPPEN?\nIn which secluded southern Galilean town, nestled at the foot of the Hill of Moreh roughly six miles south of Nazareth, was Jesus entering the city gate when He encountered a funeral procession carrying the deceased only son of a weeping widow, touched the bier, and commanded: "Young man, I say to you, arise!"?',
    clues: [
      'Recorded solely in the Gospel of Luke (7:11–17).',
      'The dead man sat up and began to speak, and Jesus gave him to his mother.',
      'Caused the crowd to fear and declare: "A great prophet has arisen among us!"'
    ],
    options: ['Nain', 'Nazareth', 'Cana', 'Shunem'],
    correctAnswer: 'Nain',
    acceptedAlternatives: ['City of Nain'],
    reference: 'Luke 7:11–17',
    explanation: 'Nain was the Galilean village where Jesus raised a widow’s only son from the dead outside the town gates.',
    hint: 'Village near Nazareth where Jesus resurrected a widow’s only son from a funeral bier.',
    region: 'Galilee',
    testament: 'New Testament',
    difficulty: 'medium',
    timerSeconds: 30
  },
  {
    level: 2,
    challengeIndex: 5,
    stage: 1,
    stageTitle: 'Geography Foundations',
    levelTitle: 'Northern Galilee & The Sea',
    questionType: 'Type the Location Yourself',
    isTyped: true,
    questionText: 'TYPE THE LOCATION — MINI-BOSS:\nI was a picturesque Lower Galilean basin town nestled in a natural bowl among limestone hills, where the angel Gabriel visited a virgin named Mary with the announcement of the Messiah’s conception. Jesus was brought up here from early childhood, working as a carpenter until His early thirties. However, when Jesus returned to my synagogue and read from Isaiah 61, declaring its fulfillment, my enraged townsfolk dragged Him to the brow of the hill to throw Him down headlong. What is my name?',
    clues: [
      'Home of Joseph and Mary.',
      'Nathanael asked: "Can anything good come out of [...]?" (John 1:46).',
      'Prophecy fulfilled: "He shall be called a Nazarene" (Matthew 2:23).'
    ],
    options: ['Nazareth', 'Capernaum', 'Cana', 'Bethlehem'],
    correctAnswer: 'Nazareth',
    acceptedAlternatives: ['Nazaret', 'Netzer'],
    reference: 'Matthew 2:23; Luke 1:26; 4:16–30; John 1:46',
    explanation: 'Nazareth was the hometown of Mary and Joseph where Jesus grew up from childhood into adulthood.',
    hint: 'Boyhood hometown of Jesus where townsfolk tried to throw Him off a cliff.',
    region: 'Galilee',
    testament: 'New Testament',
    difficulty: 'easy',
    timerSeconds: 25
  },

  // Level 3: Valleys & Wilderness Strongholds
  {
    level: 3,
    challengeIndex: 1,
    stage: 1,
    stageTitle: 'Geography Foundations',
    levelTitle: 'Valleys & Wilderness Strongholds',
    questionType: 'Identify the Biblical Location',
    isTyped: false,
    questionText: 'IDENTIFY THE LOCATION:\nI was a lush, spring-fed canyon oasis on the western shore of the Dead Sea where dramatic limestone cliffs rise over a thousand feet, famous for wild mountain ibex (goats), freshwater waterfalls, and hidden mountain caves. While King Saul pursued David with three thousand elite men, David hid in the innermost recesses of one of my caves and secretly cut off the hem of Saul’s royal robe while the king was relieving himself. What oasis am I?',
    clues: [
      'Hebrew name means "Spring of the Wild Goat."',
      '1 Samuel 23:29: "And David went up from there and lived in the strongholds of [...]."',
      'Celebrated in Song of Solomon 1:14 for clusters of henna blossoms in its vineyards.'
    ],
    options: ['En-Gedi', 'Masada', 'Qumran', 'Adullam'],
    correctAnswer: 'En-Gedi',
    acceptedAlternatives: ['Engedi', 'En Gedi', 'Ein Gedi', 'Hazazon-tamar'],
    reference: '1 Samuel 23:29; 24:1–22; Song of Solomon 1:14',
    explanation: 'En-Gedi ("Spring of the Wild Goat") was the Dead Sea canyon oasis where David spared King Saul’s life in a cave.',
    hint: 'Dead Sea cliff oasis where David cut off the corner of Saul’s robe in a cave.',
    region: 'Judean Wilderness',
    testament: 'Old Testament',
    difficulty: 'medium',
    timerSeconds: 30
  },
  {
    level: 3,
    challengeIndex: 2,
    stage: 1,
    stageTitle: 'Geography Foundations',
    levelTitle: 'Valleys & Wilderness Strongholds',
    questionType: 'Where Did This Happen?',
    isTyped: false,
    questionText: 'WHERE DID THIS HAPPEN?\nIn which broad, strategic east-west valley in the Judean Shephelah (foothills), separating the territory of Judah from Philistia, did the Philistine and Israelite armies face each other on opposite hills while the giant Goliath taunted Israel for forty days, before David picked five smooth stones from its dry brook bed and defeated him?',
    clues: [
      'Located between Socoh and Azekah at Ephes-dammim.',
      '1 Samuel 17:2: "Saul and the men of Israel were gathered, and encamped in the Valley of [...]."',
      'Named after the prominent terebinth (elah) trees that grew in the valley.'
    ],
    options: ['Valley of Elah', 'Valley of Sorek', 'Valley of Aijalon', 'Valley of Jezreel'],
    correctAnswer: 'Valley of Elah',
    acceptedAlternatives: ['Elah', 'Valley of Terebinths', 'Wadi es-Sant'],
    reference: '1 Samuel 17:1–19; 21:9',
    explanation: 'The Valley of Elah was the battlefield where teenage David slew the Philistine champion Goliath with a sling and stone.',
    hint: 'Valley where David defeated Goliath with a sling and smooth brook stone.',
    region: 'Shephelah',
    testament: 'Old Testament',
    difficulty: 'easy',
    timerSeconds: 30
  },
  {
    level: 3,
    challengeIndex: 3,
    stage: 1,
    stageTitle: 'Geography Foundations',
    levelTitle: 'Valleys & Wilderness Strongholds',
    questionType: 'Identify the Biblical Location',
    isTyped: false,
    questionText: 'IDENTIFY THE LOCATION:\nI was a fortified valley city and cave complex in the foothills of Judah southwest of Bethlehem. When David was an outlaw running from King Saul, he escaped to my cave stronghold. There, his brothers and all his father’s house joined him, along with everyone who was in distress, in debt, or bitter in soul—about four hundred men—and David became captain over them. What location am I?',
    clues: [
      'David’s famous wilderness guerrilla headquarters.',
      'Three of David’s mighty men broke through the Philistine garrison from here to draw water from the well of Bethlehem.',
      'David penned Psalm 57 and Psalm 142 while hiding in my cave.'
    ],
    options: ['Cave of Adullam', 'Stronghold of En-Gedi', 'Wilderness of Ziph', 'Cave of Machpelah'],
    correctAnswer: 'Cave of Adullam',
    acceptedAlternatives: ['Adullam', 'The Cave of Adullam'],
    reference: '1 Samuel 22:1–2; 2 Samuel 23:13–17; 1 Chronicles 11:15–19',
    explanation: 'The Cave of Adullam was David’s refuge where 400 distressed and indebted men gathered under his leadership.',
    hint: 'Cave where 400 distressed and indebted men rallied around fugitive David.',
    region: 'Shephelah',
    testament: 'Old Testament',
    difficulty: 'medium',
    timerSeconds: 30
  },
  {
    level: 3,
    challengeIndex: 4,
    stage: 1,
    stageTitle: 'Geography Foundations',
    levelTitle: 'Valleys & Wilderness Strongholds',
    questionType: 'Where Did This Happen?',
    isTyped: false,
    questionText: 'WHERE DID THIS HAPPEN?\nIn which ancient pastoral valley, located roughly sixty miles north of Hebron near Shechem, did seventeen-year-old Joseph find his older brothers pasturing their flocks after traveling from Shechem, only for them to conspire to kill him, strip off his robe of many colors, cast him into an empty cistern, and sell him for twenty shekels of silver to Ishmaelite camel traders on their way to Egypt?',
    clues: [
      'Genesis 37:17: "The man said, ‘They have gone away, for I heard them say, Let us go to [...].’ So Joseph went after his brothers and found them at [...]."',
      'Centuries later, the prophet Elisha was surrounded in this same town by a Syrian army with horses and chariots, and God opened his servant’s eyes to see the hills full of horses and chariots of fire (2 Kings 6:13–17).',
      'Located on the main caravan route between Damascus and Egypt.'
    ],
    options: ['Dothan', 'Shechem', 'Shiloh', 'Bethel'],
    correctAnswer: 'Dothan',
    acceptedAlternatives: ['Dotan'],
    reference: 'Genesis 37:17–28; 2 Kings 6:13–17',
    explanation: 'Dothan was where Joseph was sold into Egyptian slavery by his brothers, and later where Elisha saw the hills filled with fiery angelic chariots.',
    hint: 'Town where Joseph was thrown into a cistern and sold to Midianite traders.',
    region: 'Samaria',
    testament: 'Old Testament',
    difficulty: 'hard',
    timerSeconds: 30
  },
  {
    level: 3,
    challengeIndex: 5,
    stage: 1,
    stageTitle: 'Geography Foundations',
    levelTitle: 'Valleys & Wilderness Strongholds',
    questionType: 'Type the Location Yourself',
    isTyped: true,
    questionText: 'TYPE THE LOCATION — MINI-BOSS:\nI was a town in the Jordan Valley, located south of Beth-shean in the territory of Issachar/Manasseh, whose name translates from Hebrew as "Meadow of Dancing." I was the native hometown of the wealthy farmer Elisha son of Shaphat. Elijah journeyed from Mount Horeb to my fields and found Elisha plowing with twelve yoke of oxen, casting his prophetic mantle upon him. What was the name of this agricultural town?',
    clues: [
      '1 Kings 19:16: "And Elisha the son of Shaphat of [...] you shall anoint to be prophet in your place."',
      'Earlier mentioned in Judges 7:22 during the flight of the Midianite army after Gideon’s night attack.',
      'Birthplace of the prophet Elisha.'
    ],
    options: ['Abel-meholah', 'Shunem', 'Jezreel', 'Tirzah'],
    correctAnswer: 'Abel-meholah',
    acceptedAlternatives: ['Abel Meholah', 'Abel-Meholah', 'Abelmeholah'],
    reference: '1 Kings 19:16–21; Judges 7:22',
    explanation: 'Abel-meholah was the hometown of the prophet Elisha where Elijah found him plowing with twelve yoke of oxen.',
    hint: 'Hometown of Elisha in the Jordan Valley where Elijah cast his mantle upon him.',
    region: 'Jordan Valley',
    testament: 'Old Testament',
    difficulty: 'master',
    timerSeconds: 25
  },

  // Level 4: Apostolic Seaports of the Aegean
  {
    level: 4,
    challengeIndex: 1,
    stage: 1,
    stageTitle: 'Geography Foundations',
    levelTitle: 'Apostolic Seaports of the Aegean',
    questionType: 'Identify the Biblical Location',
    isTyped: false,
    questionText: 'IDENTIFY THE LOCATION:\nI was the capital metropolis of the Roman province of Asia, home to the magnificent Temple of Artemis (Diana), one of the Seven Wonders of the Ancient World. Paul ministered here for over two years in the lecture hall of Tyrannus, causing such a massive collapse in the pagan idol trade that Demetrius the silversmith incited a massive citywide riot in our 25,000-seat amphitheater. Which great city am I?',
    clues: [
      'Addressed as the first of the Seven Churches of Revelation (2:1–7).',
      'Timothy later served as pastor and overseer of my church.',
      'Site where sorcery books worth 50,000 pieces of silver were publicly burned in the square (Acts 19:19).'
    ],
    options: ['Ephesus', 'Smyrna', 'Miletus', 'Pergamum'],
    correctAnswer: 'Ephesus',
    acceptedAlternatives: ['City of Ephesus', 'Efes'],
    reference: 'Acts 19:1–41; 20:17; Revelation 2:1–7',
    explanation: 'Ephesus was the premier trade and religious metropolis of Asia Minor where Paul spent over two years and stirred a riot among silversmiths.',
    hint: 'Great Asian port city of the Temple of Artemis where Paul debated in Tyrannus’ hall.',
    region: 'Asia Minor',
    testament: 'New Testament',
    difficulty: 'easy',
    timerSeconds: 30
  },
  {
    level: 4,
    challengeIndex: 2,
    stage: 1,
    stageTitle: 'Geography Foundations',
    levelTitle: 'Apostolic Seaports of the Aegean',
    questionType: 'Where Did This Happen?',
    isTyped: false,
    questionText: 'WHERE DID THIS HAPPEN?\nIn which Aegean coastal port, situated roughly thirty miles south of Ephesus, did the Apostle Paul stop on his final voyage to Jerusalem, deciding to bypass Ephesus to save time, and summoned the elders of the Ephesian church to deliver his poignant, tearful farewell sermon warning them of "fierce wolves" and quoting Jesus: "It is more blessed to give than to receive"?',
    clues: [
      'Acts 20:15–17: "From [...] he sent to Ephesus and called the elders of the church to come to him."',
      'Ancient seaport at the mouth of the Maeander River.',
      'Paul later left his companion Trophimus sick here in 2 Timothy 4:20.'
    ],
    options: ['Miletus', 'Troas', 'Patara', 'Assos'],
    correctAnswer: 'Miletus',
    acceptedAlternatives: ['Miletos', 'City of Miletus'],
    reference: 'Acts 20:15–38; 2 Timothy 4:20',
    explanation: 'Miletus was the Aegean port where Paul delivered his emotional farewell speech to the Ephesian elders.',
    hint: 'Port south of Ephesus where Paul delivered his emotional farewell to the Ephesian elders.',
    region: 'Asia Minor',
    testament: 'New Testament',
    difficulty: 'medium',
    timerSeconds: 30
  },
  {
    level: 4,
    challengeIndex: 3,
    stage: 1,
    stageTitle: 'Geography Foundations',
    levelTitle: 'Apostolic Seaports of the Aegean',
    questionType: 'Identify the Biblical Location',
    isTyped: false,
    questionText: 'IDENTIFY THE LOCATION:\nI was a wealthy, strategic Greek isthmus city located between the Aegean and Ionian seas, hosting the famous biennial Isthmian athletic games. Paul lived and worked here as a tentmaker with Aquila and Priscilla for eighteen months, planted a major church, was brought before the Roman proconsul Gallio at the Bema judgment seat, and personally baptized Crispus, Gaius, and the household of Stephanas. Which cosmopolitan city am I?',
    clues: [
      'Capital of the Roman province of Achaia.',
      'Recipient of two major canonical epistles from Paul addressing divisions, lawsuits, and the resurrection.',
      'Known for its commercial wealth and widespread pagan indulgence.'
    ],
    options: ['Corinth', 'Athens', 'Thessalonica', 'Philippi'],
    correctAnswer: 'Corinth',
    acceptedAlternatives: ['City of Corinth', 'Korinthos'],
    reference: 'Acts 18:1–18; 1 Corinthians 1:1–2; 2 Corinthians 1:1',
    explanation: 'Corinth was the wealthy commercial hub of Greece where Paul ministered for a year and a half alongside tentmakers Aquila and Priscilla.',
    hint: 'Greek isthmus city where Paul made tents with Aquila and Priscilla for 18 months.',
    region: 'Achaia (Greece)',
    testament: 'New Testament',
    difficulty: 'easy',
    timerSeconds: 30
  },
  {
    level: 4,
    challengeIndex: 4,
    stage: 1,
    stageTitle: 'Geography Foundations',
    levelTitle: 'Apostolic Seaports of the Aegean',
    questionType: 'Neighbouring Places',
    isTyped: false,
    questionText: 'NEIGHBOURING PLACES:\nWhich eastern seaport of Corinth on the Saronic Gulf, located just six miles from the main city, served as Corinth’s commercial maritime gateway to Asia? Here, Paul cut his hair because he was under a vow, and here a faithful deaconess named Phoebe served the local church before carrying Paul’s Epistle to the Romans across the sea.',
    clues: [
      'Eastern harbor port of Corinth.',
      'Acts 18:18: "At [...] he had cut his hair, for he was under a vow."',
      'Romans 16:1: "I commend to you our sister Phoebe, a servant of the church at [...]."'
    ],
    options: ['Cenchreae', 'Lechaion', 'Salamis', 'Piraeus'],
    correctAnswer: 'Cenchreae',
    acceptedAlternatives: ['Cenchrea', 'Kenchreai', 'Cenchreas'],
    reference: 'Acts 18:18; Romans 16:1–2',
    explanation: 'Cenchreae was Corinth’s eastern seaport where Paul cut his hair under a vow and where Phoebe was deaconess.',
    hint: 'Eastern seaport of Corinth where Phoebe served and Paul shaved his head for a vow.',
    region: 'Achaia (Greece)',
    testament: 'New Testament',
    difficulty: 'hard',
    timerSeconds: 30
  },
  {
    level: 4,
    challengeIndex: 5,
    stage: 1,
    stageTitle: 'Geography Foundations',
    levelTitle: 'Apostolic Seaports of the Aegean',
    questionType: 'Type the Location Yourself',
    isTyped: true,
    questionText: 'TYPE THE LOCATION — MINI-BOSS:\nI was a small, rugged, rocky volcanic island in the Aegean Sea, about ten miles long and six miles wide, used by the Roman Empire as an imperial penal colony of exile. In approximately 95 AD, the elderly Apostle John was banished to my rocky shores "on account of the word of God and the testimony of Jesus." On the Lord’s Day, while in the Spirit, John heard a voice like a trumpet and wrote the Apocalypse (the Book of Revelation). What is the name of this Greek island?',
    clues: [
      'Revelation 1:9: "I, John, your brother... was on the island called [...]."',
      'Part of the Sporades / Dodecanese archipelago off the southwest coast of Asia Minor.',
      'Setting of John’s apocalyptic vision of the glorified Christ and the New Jerusalem.'
    ],
    options: ['Patmos', 'Crete', 'Cyprus', 'Rhodes'],
    correctAnswer: 'Patmos',
    acceptedAlternatives: ['Island of Patmos', 'Isle of Patmos'],
    reference: 'Revelation 1:9–11',
    explanation: 'Patmos was the Aegean penal island where the Apostle John was exiled and received the Book of Revelation.',
    hint: 'Aegean island of exile where the Apostle John wrote the Book of Revelation.',
    region: 'Aegean Sea',
    testament: 'New Testament',
    difficulty: 'easy',
    timerSeconds: 25
  },

  // Level 5: The Inland Cities of Paul’s First Journey
  {
    level: 5,
    challengeIndex: 1,
    stage: 1,
    stageTitle: 'Geography Foundations',
    levelTitle: 'Inland Cities of Paul’s First Journey',
    questionType: 'Where Did This Happen?',
    isTyped: false,
    questionText: 'WHERE DID THIS HAPPEN?\nIn which rugged mountain city of Lycaonia did the Apostle Paul heal a man crippled from birth who had never walked, prompting the astonished pagan crowd to shout in their native dialect: "The gods have come down to us in the likeness of men!", calling Barnabas Zeus and Paul Hermes? Shortly after, Jews from Antioch and Iconium arrived and stoned Paul, dragging his unconscious body outside the city wall assuming he was dead.',
    clues: [
      'The priest of Zeus brought oxen and garlands to the city gates to offer sacrifices.',
      'Hometown of young Timothy, who witnessed Paul’s sufferings here (2 Timothy 3:11).',
      'Acts 14:8–19.'
    ],
    options: ['Lystra', 'Derbe', 'Iconium', 'Perga'],
    correctAnswer: 'Lystra',
    acceptedAlternatives: ['City of Lystra'],
    reference: 'Acts 14:8–20; 16:1–2; 2 Timothy 3:10–11',
    explanation: 'Lystra was the Lycaonian city where Paul and Barnabas were hailed as Hermes and Zeus, and where Paul was subsequently stoned and left for dead.',
    hint: 'Lycaonian city where Paul was worshiped as Hermes and later stoned.',
    region: 'Galatia / Lycaonia',
    testament: 'New Testament',
    difficulty: 'medium',
    timerSeconds: 30
  },
  {
    level: 5,
    challengeIndex: 2,
    stage: 1,
    stageTitle: 'Geography Foundations',
    levelTitle: 'Inland Cities of Paul’s First Journey',
    questionType: 'Identify the Biblical Location',
    isTyped: false,
    questionText: 'IDENTIFY THE LOCATION:\nI was the easternmost city reached by Paul and Barnabas on their First Missionary Journey. After surviving his stoning at Lystra, Paul arose and walked thirty miles southeast to me the next day. Here, Paul and Barnabas preached the gospel, made many disciples, and experienced no persecution recorded in the text, before retracing their steps back through Lystra, Iconium, and Antioch to strengthen the newly planted churches. Gaius, one of Paul’s travelling companions, was a native of my city. Which city am I?',
    clues: [
      'Acts 14:20: "On the next day he went on with Barnabas to [...]."',
      'Acts 20:4 mentions "Gaius of [...]."',
      'Turnaround point of Paul’s First Missionary Journey.'
    ],
    options: ['Derbe', 'Lystra', 'Iconium', 'Tarsus'],
    correctAnswer: 'Derbe',
    acceptedAlternatives: ['City of Derbe'],
    reference: 'Acts 14:20–21; 20:4',
    explanation: 'Derbe was the peaceful turnaround city of Paul’s first missionary tour where many disciples were made.',
    hint: 'Easternmost turnaround city of Paul’s first journey, home of Gaius.',
    region: 'Galatia / Lycaonia',
    testament: 'New Testament',
    difficulty: 'hard',
    timerSeconds: 30
  },
  {
    level: 5,
    challengeIndex: 3,
    stage: 1,
    stageTitle: 'Geography Foundations',
    levelTitle: 'Inland Cities of Paul’s First Journey',
    questionType: 'The Journey Challenge',
    isTyped: false,
    questionText: 'THE JOURNEY CHALLENGE:\nAccording to the sequential itinerary recorded in Acts 13:4–14, after Paul and Barnabas were commissioned at Antioch in Syria and descended to the port of Seleucia, they sailed to Cyprus. After crossing the entire island from Salamis to Paphos, they sailed northwest to mainland Asia Minor. Which coastal city in the province of Pamphylia was their very first mainland port of call, where John Mark deserted the mission and returned to Jerusalem?',
    clues: [
      'Acts 13:13: "Now Paul and his companions set sail from Paphos and came to [...] in Pamphylia."',
      'Ancient port on the Cestrus River.',
      'John Mark left them here, sparking the later disagreement between Paul and Barnabas.'
    ],
    options: ['Perga', 'Attalia', 'Tarsus', 'Myra'],
    correctAnswer: 'Perga',
    acceptedAlternatives: ['Perga in Pamphylia', 'Perge'],
    reference: 'Acts 13:13–14; 14:25',
    explanation: 'Perga in Pamphylia was the first mainland destination after Cyprus where John Mark abandoned the mission.',
    hint: 'Mainland port in Pamphylia where John Mark left Paul and Barnabas.',
    region: 'Pamphylia',
    testament: 'New Testament',
    difficulty: 'medium',
    timerSeconds: 30
  },
  {
    level: 5,
    challengeIndex: 4,
    stage: 1,
    stageTitle: 'Geography Foundations',
    levelTitle: 'Inland Cities of Paul’s First Journey',
    questionType: 'The Geography Trap',
    isTyped: false,
    questionText: 'THE GEOGRAPHY TRAP:\nDo not confuse this city with the great metropolis on the Orontes River in Syria from which Paul was sent out! Located high on a plateau 3,600 feet above sea level in the southern Galatian highlands, I was a Roman military colony where Paul preached a magnificent sermon in the synagogue surveying Israel’s history and proving Jesus’ resurrection from Psalm 16. The Gentiles begged to hear more, and the next Sabbath almost the whole city gathered, stirring jealous Jewish leaders to drive Paul and Barnabas out of the district. Which city am I?',
    clues: [
      'Known as Pisidian Antioch (Antioch in Pisidia / Antioch of Galatia).',
      'Acts 13:14: "they went on from Perga and came to [...] in Pisidia."',
      'Paul and Barnabas shook the dust off their feet against this city before proceeding to Iconium.'
    ],
    options: ['Antioch in Pisidia', 'Antioch in Syria', 'Iconium', 'Lystra'],
    correctAnswer: 'Antioch in Pisidia',
    acceptedAlternatives: ['Pisidian Antioch', 'Antioch of Pisidia', 'Antiochia Pisidia'],
    reference: 'Acts 13:14–52',
    explanation: 'Antioch in Pisidia was the high Galatian Roman colony where Paul preached his major synagogue sermon and shook dust off his feet.',
    hint: 'Mountain Galatian colony where Paul preached in the synagogue; not the Syrian sending church.',
    region: 'Galatia / Pisidia',
    testament: 'New Testament',
    difficulty: 'medium',
    timerSeconds: 30
  },
  {
    level: 5,
    challengeIndex: 5,
    stage: 1,
    stageTitle: 'Geography Foundations',
    levelTitle: 'Inland Cities of Paul’s First Journey',
    questionType: 'Type the Location Yourself',
    isTyped: true,
    questionText: 'TYPE THE LOCATION — MINI-BOSS:\nAfter shaking the dust of Pisidian Antioch off their feet, Paul and Barnabas traveled eighty miles southeast along the royal road (Via Sebaste) to an ancient Phrygian cultural center situated on an expansive high plateau. Preaching boldly in the local synagogue, a great number of both Jews and Greeks believed. However, the city became sharply divided, and when an attempt was made by both Gentiles and Jews with their rulers to mistreat and stone them, the missionaries fled to Lystra and Derbe. What is the name of this ancient city (modern Konya, Turkey)?',
    clues: [
      'Acts 14:1: "Now at [...] they entered together into the Jewish synagogue and spoke in such a way that a great number believed."',
      'Capital of Lycaonia / Phrygia.',
      'Hostile agitators from this city followed Paul to Lystra to stone him.'
    ],
    options: ['Iconium', 'Lystra', 'Derbe', 'Perga'],
    correctAnswer: 'Iconium',
    acceptedAlternatives: ['Ikonion', 'Konya'],
    reference: 'Acts 13:51; 14:1–6; 2 Timothy 3:11',
    explanation: 'Iconium (modern Konya) was the prominent plateau city where Paul and Barnabas ministered with signs and wonders before fleeing a stoning plot.',
    hint: 'High plateau city visited after Pisidian Antioch where a stoning plot developed.',
    region: 'Galatia / Phrygia',
    testament: 'New Testament',
    difficulty: 'hard',
    timerSeconds: 25
  },

  // ==========================================
  // STAGE 2: CITIES OF SCRIPTURE (Levels 6–10)
  // ==========================================

  // Level 6: Ancient Capitals of the North & South
  {
    level: 6,
    challengeIndex: 1,
    stage: 2,
    stageTitle: 'Cities of Scripture',
    levelTitle: 'Ancient Capitals of the North & South',
    questionType: 'Identify the Biblical Location',
    isTyped: false,
    questionText: 'IDENTIFY THE LOCATION:\nI was purchased by King Omri of northern Israel from a man named Shemer for two talents of silver and built upon a strategic, isolated hill with steep natural defenses. I served as the royal capital of the northern kingdom of Israel for over a century, famed for Ahab’s "ivory house," until the Assyrians captured me in 722 BC after a brutal three-year siege. Centuries later, Philip the Evangelist preached Christ here with signs and great joy. Which historic capital city am I?',
    clues: [
      '1 Kings 16:24: "He bought the hill of [...] from Shemer for two talents of silver."',
      'Capital of northern Israel throughout the reigns of Ahab, Jehu, and Jeroboam II.',
      'Excavations uncovered the famous Samaria Ivories.'
    ],
    options: ['Samaria', 'Tirzah', 'Shechem', 'Jezreel'],
    correctAnswer: 'Samaria',
    acceptedAlternatives: ['City of Samaria', 'Sebaste', 'Shomron'],
    reference: '1 Kings 16:24; 22:39; 2 Kings 17:5–6; Acts 8:4–8',
    explanation: 'Samaria was the fortified royal capital of northern Israel built by Omri on a hill purchased from Shemer.',
    hint: 'Royal capital of northern Israel purchased by King Omri from Shemer.',
    region: 'Samaria',
    testament: 'Both',
    difficulty: 'easy',
    timerSeconds: 30
  },
  {
    level: 6,
    challengeIndex: 2,
    stage: 2,
    stageTitle: 'Cities of Scripture',
    levelTitle: 'Ancient Capitals of the North & South',
    questionType: 'Where Did This Happen?',
    isTyped: false,
    questionText: 'WHERE DID THIS HAPPEN?\nIn which beautiful Canaanite city, celebrated in Song of Solomon 6:4 ("You are beautiful as [...], my love"), did Jeroboam I, Baasha, Elah, and Zimri reside as the northern royal capital before Omri built Samaria? Here, King Elah was assassinated while getting drunk in his steward’s house, and Zimri committed suicide by setting the palace on fire over himself after reigning for only seven days.',
    clues: [
      'First permanent royal residence of the northern kingdom after Shechem.',
      'Joshua defeated its Canaanite king in Joshua 12:24.',
      'Known for its scenic beauty and orchards.'
    ],
    options: ['Tirzah', 'Samaria', 'Jezreel', 'Shechem'],
    correctAnswer: 'Tirzah',
    acceptedAlternatives: ['Thirza'],
    reference: '1 Kings 14:17; 15:21; 16:8–18; Song of Solomon 6:4',
    explanation: 'Tirzah was the northern royal capital famed for beauty where King Elah was assassinated and Zimri burned the palace.',
    hint: 'Early capital of northern Israel before Samaria, famed in Song of Solomon for beauty.',
    region: 'Samaria',
    testament: 'Old Testament',
    difficulty: 'hard',
    timerSeconds: 30
  },
  {
    level: 6,
    challengeIndex: 3,
    stage: 2,
    stageTitle: 'Cities of Scripture',
    levelTitle: 'Ancient Capitals of the North & South',
    questionType: 'Identify the Biblical Location',
    isTyped: false,
    questionText: 'IDENTIFY THE LOCATION:\nI was a prominent royal city in the fertile valley of Issachar where King Ahab maintained a winter palace. Beside my palace was a lush ancestral vineyard owned by a righteous man named Naboth. When Naboth refused to sell his inheritance, Queen Jezebel had him falsely accused of blasphemy and stoned outside my gates. God sent Elijah to declare to Ahab: "In the place where dogs licked up the blood of Naboth shall dogs lick your own blood." Years later, Jezebel was thrown from my palace window and eaten by dogs here. What city am I?',
    clues: [
      'Gave its name to the massive agricultural valley separating Galilee from Samaria.',
      'Jehu drove furiously toward my city gate to execute judgment on the house of Ahab.',
      'Site of the murder of Naboth in 1 Kings 21.'
    ],
    options: ['Jezreel', 'Megiddo', 'Beth-shan', 'Samaria'],
    correctAnswer: 'Jezreel',
    acceptedAlternatives: ['City of Jezreel'],
    reference: '1 Kings 21:1–23; 2 Kings 9:16–37',
    explanation: 'Jezreel was Ahab’s secondary palace city where Naboth was murdered for his vineyard and Jezebel was eaten by dogs.',
    hint: 'Palace city where Naboth was stoned for his vineyard and Jezebel was eaten by dogs.',
    region: 'Valley of Jezreel',
    testament: 'Old Testament',
    difficulty: 'medium',
    timerSeconds: 30
  },
  {
    level: 6,
    challengeIndex: 4,
    stage: 2,
    stageTitle: 'Cities of Scripture',
    levelTitle: 'Ancient Capitals of the North & South',
    questionType: 'Location and Character Match',
    isTyped: false,
    questionText: 'LOCATION AND CHARACTER MATCH:\nWhich heavily fortified Judahite city, located twenty-five miles southwest of Jerusalem commanding the coastal highway to Egypt, was besieged and conquered by Sennacherib king of Assyria with siege ramps and battering rams (commemorated on the famous palace stone reliefs of Nineveh)? King Amaziah of Judah fled here when conspirators assassinated him, and the city’s fall was poignantly lamented by the prophet Micah.',
    clues: [
      'Second most important fortified city in Judah after Jerusalem.',
      'Micah 1:13: "Harness the steeds to the chariots, inhabitants of [...]; it was the beginning of sin to the daughter of Zion."',
      'Famous clay ostraca ("Lachish Letters") written during the Babylonian siege were excavated here.'
    ],
    options: ['Lachish', 'Azekah', 'Libnah', 'Gezer'],
    correctAnswer: 'Lachish',
    acceptedAlternatives: ['City of Lachish', 'Tell ed-Duweir'],
    reference: '2 Kings 14:19; 18:14, 17; 19:8; 2 Chronicles 32:9; Micah 1:13',
    explanation: 'Lachish was Judah’s premier fortress city conquered by Sennacherib in 701 BC and the site of King Amaziah’s assassination.',
    hint: 'Judah’s second fortress city conquered by Sennacherib; where King Amaziah was murdered.',
    region: 'Shephelah',
    testament: 'Old Testament',
    difficulty: 'hard',
    timerSeconds: 30
  },
  {
    level: 6,
    challengeIndex: 5,
    stage: 2,
    stageTitle: 'Cities of Scripture',
    levelTitle: 'Ancient Capitals of the North & South',
    questionType: 'Type the Location Yourself',
    isTyped: true,
    questionText: 'TYPE THE LOCATION — MINI-BOSS:\nI was an ancient fortified Jebusite mountain stronghold situated on the narrow southeastern ridge between the Kidron and Tyropoeon valleys, deemed so impregnable by my inhabitants that they taunted David: "You will not come in here, but the blind and the lame will turn you back." However, David’s general Joab climbed up a water shaft (tsinnor), captured my fortress, and David made me his royal residence, naming me the City of David. What was the ancient name of this citadel fortress?',
    clues: [
      '2 Samuel 5:7: "Nevertheless, David took the stronghold of [...], that is, the city of David."',
      'Geographical heart of Mount Zion and ancient Jerusalem.',
      'Where the Ark of the Covenant was first brought under David’s tent.'
    ],
    options: ['Zion', 'Mount Zion', 'Jebus', 'Millo'],
    correctAnswer: 'Zion',
    acceptedAlternatives: ['Mount Zion', 'Stronghold of Zion', 'City of David', 'Jebus'],
    reference: '2 Samuel 5:6–9; 1 Chronicles 11:4–8',
    explanation: 'Zion was the fortified Jebusite stronghold captured by David through the water shaft, becoming the City of David.',
    hint: 'Jebusite stronghold captured by David, also known as the City of David.',
    region: 'Jerusalem',
    testament: 'Old Testament',
    difficulty: 'medium',
    timerSeconds: 25
  },

  // Level 7: Cities of Patriarchs & Judges
  {
    level: 7,
    challengeIndex: 1,
    stage: 2,
    stageTitle: 'Cities of Scripture',
    levelTitle: 'Cities of Patriarchs & Judges',
    questionType: 'Identify the Biblical Location',
    isTyped: false,
    questionText: 'IDENTIFY THE LOCATION:\nI was a prominent city in the pass between Mount Ebal and Mount Gerizim in the hill country of Ephraim. Abraham built his first altar in Canaan here under the oak of Moreh; Jacob bought a parcel of land here from the sons of Hamor and dug a famous well; the bones of Joseph carried out of Egypt were buried here; and Joshua assembled all Israel here for his final farewell covenant address: "Choose this day whom you will serve." What historic city am I?',
    clues: [
      'First capital of northern Israel under Jeroboam I (1 Kings 12:25).',
      'Where Abimelech slaughtered his seventy brothers upon a single stone.',
      'Setting of Jacob’s Well and Jesus’ dialogue with the Samaritan woman (near Sychar).'
    ],
    options: ['Shechem', 'Shiloh', 'Bethel', 'Samaria'],
    correctAnswer: 'Shechem',
    acceptedAlternatives: ['Sichem', 'Sychem', 'Nablus'],
    reference: 'Genesis 12:6; 33:18–20; Joshua 24:1–32; Judges 9:1–6; John 4:5',
    explanation: 'Shechem nestled between Mounts Ebal and Gerizim was where Abraham first built an altar, Joseph’s bones were buried, and Joshua renewed the covenant.',
    hint: 'City between Mount Ebal and Gerizim where Joseph’s bones were buried.',
    region: 'Samaria',
    testament: 'Both',
    difficulty: 'medium',
    timerSeconds: 30
  },
  {
    level: 7,
    challengeIndex: 2,
    stage: 2,
    stageTitle: 'Cities of Scripture',
    levelTitle: 'Cities of Patriarchs & Judges',
    questionType: 'Where Did This Happen?',
    isTyped: false,
    questionText: 'WHERE DID THIS HAPPEN?\nIn which southern desert town, marking the traditional southernmost boundary of the Promised Land ("from Dan to [...]"), did Abraham and the Philistine king Abimelech swear a covenant over a disputed water well with seven ewe lambs, planting a tamarisk tree and calling upon the name of the Lord, the Everlasting God (El Olam)?',
    clues: [
      'Hebrew name translates to "Well of the Seven" or "Well of the Oath."',
      'Hagar wandered in its wilderness with infant Ishmael (Genesis 21:14).',
      'Elijah fled here to escape Jezebel before heading forty days into Horeb (1 Kings 19:3).'
    ],
    options: ['Beersheba', 'Kadesh-barnea', 'Hebron', 'Gerar'],
    correctAnswer: 'Beersheba',
    acceptedAlternatives: ['Beer-sheba', 'Beersheba of Judah', 'Bir es-Saba'],
    reference: 'Genesis 21:22–34; 26:23–33; 1 Kings 19:3',
    explanation: 'Beersheba ("Well of the Oath") marked the southern border of Israel where Abraham and Isaac dug wells and made covenants with Abimelech.',
    hint: 'Southernmost boundary oasis of Israel meaning "Well of the Oath."',
    region: 'Negev',
    testament: 'Old Testament',
    difficulty: 'easy',
    timerSeconds: 30
  },
  {
    level: 7,
    challengeIndex: 3,
    stage: 2,
    stageTitle: 'Cities of Scripture',
    levelTitle: 'Cities of Patriarchs & Judges',
    questionType: 'Identify the Biblical Location',
    isTyped: false,
    questionText: 'IDENTIFY THE LOCATION:\nI was a town in the hill country of Ephraim where the Tabernacle stood and the Ark of the Covenant was housed for over three centuries from the days of Joshua to the time of Eli. Young Samuel ministered before the Lord here wearing a linen ephod and heard God call his name in the night. However, when the wicked priests Hophni and Phinehas carried the Ark into battle from my sanctuary, the Philistines captured the Ark and destroyed me, causing Jeremiah to warn Jerusalem to remember my fate. What sacred city am I?',
    clues: [
      'Joshua 18:1: "Then the whole congregation of the people of Israel assembled at [...], and set up the tent of meeting there."',
      'Hannah prayed for a son here and dedicated him to the Lord.',
      'God abandoned my sanctuary because of Israel’s wickedness (Psalm 78:60; Jeremiah 7:12).'
    ],
    options: ['Shiloh', 'Bethel', 'Mizpah', 'Gilgal'],
    correctAnswer: 'Shiloh',
    acceptedAlternatives: ['Silo'],
    reference: 'Joshua 18:1; 1 Samuel 1:3; 3:1–21; 4:10–18; Jeremiah 7:12',
    explanation: 'Shiloh was the central sanctuary where the Tabernacle remained throughout the Judges until the Ark was captured by Philistines.',
    hint: 'Central sanctuary city where Samuel was called as a boy and the Tabernacle stood.',
    region: 'Ephraim',
    testament: 'Old Testament',
    difficulty: 'medium',
    timerSeconds: 30
  },
  {
    level: 7,
    challengeIndex: 4,
    stage: 2,
    stageTitle: 'Cities of Scripture',
    levelTitle: 'Cities of Patriarchs & Judges',
    questionType: 'Location and Character Match',
    isTyped: false,
    questionText: 'LOCATION AND CHARACTER MATCH:\nWhich Benjamite hill town, located just three miles north of Jerusalem, was the native hometown, royal fortress residence, and administrative capital of King Saul of Israel throughout his forty-year reign, so closely identified with his dynasty that it was commonly called "[...] of Saul"?',
    clues: [
      '1 Samuel 10:26: "Saul also went to his home at [...], and there went with him men of valor."',
      'Earlier the scene of the horrific concubine incident in Judges 19–20 that nearly wiped out the tribe of Benjamin.',
      'Excavations at Tell el-Ful uncovered Saul’s rustic royal fortress tower.'
    ],
    options: ['Gibeah', 'Gibeon', 'Geba', 'Gilgal'],
    correctAnswer: 'Gibeah',
    acceptedAlternatives: ['Gibeah of Saul', 'Gibeah of Benjamin', 'Tell el-Ful'],
    reference: '1 Samuel 10:26; 11:4; 15:34; 22:6; Judges 19:12–16',
    explanation: 'Gibeah was the hometown and fortified royal capital of King Saul of Israel throughout his reign.',
    hint: 'Benjamite town that served as King Saul’s capital and royal headquarters.',
    region: 'Benjamin',
    testament: 'Old Testament',
    difficulty: 'hard',
    timerSeconds: 30
  },
  {
    level: 7,
    challengeIndex: 5,
    stage: 2,
    stageTitle: 'Cities of Scripture',
    levelTitle: 'Cities of Patriarchs & Judges',
    questionType: 'Type the Location Yourself',
    isTyped: true,
    questionText: 'TYPE THE LOCATION — MINI-BOSS:\nI was an ancient Hivite city of the Gibeonite league located eight miles northwest of Jerusalem, whose name means "City of Forests." When the Philistines returned the Ark of the Covenant on a driverless ox cart to Beth-shemesh, the men of that town sent messengers to my residents to fetch it. The Ark was brought up to the hill house of Abinadab in my town, and his son Eleazar was consecrated to guard it, where it rested quietly for twenty years until King David brought it up to Jerusalem with dancing. What was the name of this forest city?',
    clues: [
      '1 Samuel 7:1–2: "And the men of [...] came and took up the ark of the Lord and brought it to the house of Abinadab on the hill."',
      'Also known as Kiriath-baal or Baalah in Judah (Joshua 15:9, 60).',
      'Home of the Ark of the Covenant for decades before David’s reign.'
    ],
    options: ['Kiriath-jearim', 'Beth-shemesh', 'Shiloh', 'Nob'],
    correctAnswer: 'Kiriath-jearim',
    acceptedAlternatives: ['Kirjath-jearim', 'Kiriath Jearim', 'Kirjath Jearim', 'Baalah of Judah'],
    reference: '1 Samuel 6:21–7:2; 2 Samuel 6:2; 1 Chronicles 13:5–6',
    explanation: 'Kiriath-jearim ("City of Forests") was where the Ark of the Covenant was safely kept in the house of Abinadab for twenty years.',
    hint: 'City of Forests where the Ark of the Covenant rested for twenty years in Abinadab’s house.',
    region: 'Judah',
    testament: 'Old Testament',
    difficulty: 'hard',
    timerSeconds: 25
  },

  // Level 8: Cities of the Philistine Pentapolis
  {
    level: 8,
    challengeIndex: 1,
    stage: 2,
    stageTitle: 'Cities of Scripture',
    levelTitle: 'Cities of the Philistine Pentapolis',
    questionType: 'Identify the Biblical Location',
    isTyped: false,
    questionText: 'IDENTIFY THE LOCATION:\nI was the southernmost city of the Philistine Pentapolis and the gateway to the Sinai desert along the Mediterranean coast. Samson visited me, slept in the house of a harlot, and when my citizens surrounded the gate at midnight to kill him in the morning, Samson arose at midnight, grabbed the massive city gate doors with their two posts and bar, ripped them out of the ground, put them on his shoulders, and carried them forty miles uphill to the top of the ridge facing Hebron! Which ancient coastal city am I?',
    clues: [
      'Judges 16:1–3.',
      'Later the site where blinded Samson was bound in bronze shackles and ground grain in the prison house.',
      'Mentioned in Acts 8:26 when an angel told Philip: "Go toward the south to the road that goes down from Jerusalem to [...]. This is a desert place."'
    ],
    options: ['Gaza', 'Ashdod', 'Ashkelon', 'Gath'],
    correctAnswer: 'Gaza',
    acceptedAlternatives: ['City of Gaza', 'Azzah'],
    reference: 'Judges 16:1–3, 21; Acts 8:26',
    explanation: 'Gaza was the southernmost Philistine stronghold where Samson carried off the city gates and later pulled down Dagon’s temple.',
    hint: 'Philistine city whose massive gate doors Samson carried off on his shoulders.',
    region: 'Philistia',
    testament: 'Both',
    difficulty: 'easy',
    timerSeconds: 30
  },
  {
    level: 8,
    challengeIndex: 2,
    stage: 2,
    stageTitle: 'Cities of Scripture',
    levelTitle: 'Cities of the Philistine Pentapolis',
    questionType: 'Where Did This Happen?',
    isTyped: false,
    questionText: 'WHERE DID THIS HAPPEN?\nIn which prominent inland Philistine city, the native hometown of the giant Goliath and his brother Lahmi, did David seek political asylum from King Achish while fleeing King Saul, only to feel terrified when the king’s servants recognized him, feigning insanity by scratching marks on the city gates and letting saliva run down into his beard?',
    clues: [
      'Home of Goliath the champion (1 Samuel 17:4).',
      '1 Samuel 21:10: "And David rose and fled that day from Saul and went to Achish the king of [...]."',
      'David later took refuge here with 600 men and was given the town of Ziklag.'
    ],
    options: ['Gath', 'Ekron', 'Ashdod', 'Ashkelon'],
    correctAnswer: 'Gath',
    acceptedAlternatives: ['City of Gath', 'Tell es-Safi'],
    reference: '1 Samuel 17:4; 21:10–15; 27:1–6',
    explanation: 'Gath was the Philistine hometown of Goliath where David acted like a madman to escape King Achish.',
    hint: 'Hometown of Goliath where David pretended to be insane before King Achish.',
    region: 'Philistia',
    testament: 'Old Testament',
    difficulty: 'medium',
    timerSeconds: 30
  },
  {
    level: 8,
    challengeIndex: 3,
    stage: 2,
    stageTitle: 'Cities of Scripture',
    levelTitle: 'Cities of the Philistine Pentapolis',
    questionType: 'Identify the Biblical Location',
    isTyped: false,
    questionText: 'IDENTIFY THE LOCATION:\nI was a prominent coastal Philistine city centered around a temple to Dagon. When the Philistines captured the Ark of the Covenant at Ebenezer, they brought it into my city and placed it beside the statue of Dagon. The next morning, Dagon was found face down before the Ark; after being set back up, Dagon was found the second morning with his head and both hands broken off on the threshold. My citizens were struck with severe plagues of tumors, crying out that the Ark of the God of Israel must be removed. What city am I?',
    clues: [
      '1 Samuel 5:1–7.',
      'Known in the New Testament as Azotus, where Philip the Evangelist was found after baptizing the Ethiopian eunuch (Acts 8:40).',
      'One of the five royal cities of the Philistine lords.'
    ],
    options: ['Ashdod', 'Ashkelon', 'Ekron', 'Gaza'],
    correctAnswer: 'Ashdod',
    acceptedAlternatives: ['Azotus', 'Ashdod / Azotus'],
    reference: '1 Samuel 5:1–7; Acts 8:40',
    explanation: 'Ashdod (NT Azotus) was the Philistine city where the idol Dagon fell face down and shattered before the Ark of the Covenant.',
    hint: 'Philistine city where Dagon’s idol broke before the Ark; called Azotus in the New Testament.',
    region: 'Philistia',
    testament: 'Both',
    difficulty: 'medium',
    timerSeconds: 30
  },
  {
    level: 8,
    challengeIndex: 4,
    stage: 2,
    stageTitle: 'Cities of Scripture',
    levelTitle: 'Cities of the Philistine Pentapolis',
    questionType: 'Where Did This Happen?',
    isTyped: false,
    questionText: 'WHERE DID THIS HAPPEN?\nIn which northernmost city of the Philistine Pentapolis was the pagan god Baal-zebub ("Lord of Flies") worshiped? When King Ahaziah of Israel fell through the lattice of his upper chamber in Samaria and was injured, he sent royal messengers to inquire of this city’s god whether he would recover, prompting Elijah to intercept them with the rebuke: "Is it because there is no God in Israel that you are going to inquire of Baal-zebub, the god of [...]?"',
    clues: [
      '2 Kings 1:2–3.',
      'The last Philistine city to hold the captured Ark before sending it back on milk cows to Beth-shemesh (1 Samuel 5:10).',
      'Bordered the valley of Sorek.'
    ],
    options: ['Ekron', 'Gath', 'Ashdod', 'Ashkelon'],
    correctAnswer: 'Ekron',
    acceptedAlternatives: ['City of Ekron', 'Tel Miqne'],
    reference: '1 Samuel 5:10; 2 Kings 1:2–6',
    explanation: 'Ekron was the northernmost Philistine city where Baal-zebub was worshiped and where King Ahaziah sent messengers to inquire.',
    hint: 'Northern Philistine city of the god Baal-zebub where Ahaziah sent messengers.',
    region: 'Philistia',
    testament: 'Old Testament',
    difficulty: 'hard',
    timerSeconds: 30
  },
  {
    level: 8,
    challengeIndex: 5,
    stage: 2,
    stageTitle: 'Cities of Scripture',
    levelTitle: 'Cities of the Philistine Pentapolis',
    questionType: 'Type the Location Yourself',
    isTyped: true,
    questionText: 'TYPE THE LOCATION — MINI-BOSS:\nI was the only one of the five Philistine Pentapolis cities situated directly on the Mediterranean shoreline with an active natural seaport. When Samson’s wedding companions solved his riddle in Timnah, the Spirit of the Lord rushed upon him, and he marched twenty miles down to my city streets, struck down thirty Philistine men, took their garments, and gave the changes of clothing to those who had answered the riddle. In David’s famous lament over Saul and Jonathan, he cried: "Tell it not in Gath, publish it not in the streets of [...], lest the daughters of the Philistines rejoice." What city am I?',
    clues: [
      'Judges 14:19: "And the Spirit of the Lord rushed upon him, and he went down to [...] and struck down thirty men of the town."',
      '2 Samuel 1:20.',
      'One of the five Philistine capitals (along with Gaza, Gath, Ashdod, and Ekron).'
    ],
    options: ['Ashkelon', 'Gaza', 'Ashdod', 'Joppa'],
    correctAnswer: 'Ashkelon',
    acceptedAlternatives: ['Askelon', 'Ascalon', 'Ashqelon'],
    reference: 'Judges 14:19; 2 Samuel 1:20; Zechariah 9:5',
    explanation: 'Ashkelon was the seaport Philistine city where Samson slew thirty men for their garments and which David cited in his lament.',
    hint: 'Philistine seaport where Samson killed thirty men for their garments; cited in David’s lament.',
    region: 'Philistia',
    testament: 'Old Testament',
    difficulty: 'hard',
    timerSeconds: 25
  },

  // Level 9: Imperial Capitals & Exilic Fortresses
  {
    level: 9,
    challengeIndex: 1,
    stage: 2,
    stageTitle: 'Cities of Scripture',
    levelTitle: 'Imperial Capitals & Exilic Fortresses',
    questionType: 'Identify the Biblical Location',
    isTyped: false,
    questionText: 'IDENTIFY THE LOCATION:\nI was the winter capital of the Persian Empire located east of the Tigris River in the fertile plain of Elam. In my royal citadel, King Ahasuerus (Xerxes) held a lavish 180-day feast, deposed Queen Vashti, and made Hadassah (Esther) queen in her place. Nehemiah served as royal cupbearer in my palace, and Daniel received his vision of the ram and the goat while standing by the Ulai canal within my citadel. Which ancient Persian city am I?',
    clues: [
      'Esther 1:2: "King Ahasuerus sat on his royal throne in [...] the citadel."',
      'Nehemiah 1:1: "Now it happened... while I was in [...] the citadel."',
      'Modern Shush in southwestern Iran.'
    ],
    options: ['Susa', 'Babylon', 'Persepolis', 'Ecbatana'],
    correctAnswer: 'Susa',
    acceptedAlternatives: ['Shushan', 'Shushan the Citadel', 'Susa the Citadel'],
    reference: 'Esther 1:2; Nehemiah 1:1; Daniel 8:2',
    explanation: 'Susa (Shushan the citadel) was the Persian winter capital setting of the Book of Esther and Nehemiah’s royal service.',
    hint: 'Persian citadel capital where Esther became queen and Nehemiah served as cupbearer.',
    region: 'Persia / Elam',
    testament: 'Old Testament',
    difficulty: 'medium',
    timerSeconds: 30
  },
  {
    level: 9,
    challengeIndex: 2,
    stage: 2,
    stageTitle: 'Cities of Scripture',
    levelTitle: 'Imperial Capitals & Exilic Fortresses',
    questionType: 'Identify the Biblical Location',
    isTyped: false,
    questionText: 'IDENTIFY THE LOCATION:\nI was the colossal imperial capital of the Neo-Babylonian Empire straddling the Euphrates River, enclosed by massive double walls and the magnificent Ishtar Gate. King Nebuchadnezzar boasted from my palace roof: "Is not this great [...] which I have built by my mighty power as a royal residence and for the glory of my majesty?" I was the site of the Tower of Babel, the fiery furnace of the three Hebrew youths, and Belshazzar’s drunken feast where fingers wrote on the plaster wall. What city am I?',
    clues: [
      'Prophesied by Isaiah and Jeremiah to become an eternal heap of ruins, never to be inhabited.',
      'Fell in 539 BC when Cyrus the Persian diverted the Euphrates River and marched under the river gates.',
      'Symbol of worldly rebellion and false religious systems in the Book of Revelation.'
    ],
    options: ['Babylon', 'Nineveh', 'Susa', 'Ur of the Chaldees'],
    correctAnswer: 'Babylon',
    acceptedAlternatives: ['Babel', 'City of Babylon'],
    reference: 'Genesis 11:1–9; Daniel 4:30; 5:1–30; Revelation 17:5',
    explanation: 'Babylon on the Euphrates was the imperial capital of Nebuchadnezzar where Daniel ministered and Judah was exiled.',
    hint: 'Imperial capital on the Euphrates River where Nebuchadnezzar built the golden statue.',
    region: 'Babylonia (Mesopotamia)',
    testament: 'Both',
    difficulty: 'easy',
    timerSeconds: 30
  },
  {
    level: 9,
    challengeIndex: 3,
    stage: 2,
    stageTitle: 'Cities of Scripture',
    levelTitle: 'Imperial Capitals & Exilic Fortresses',
    questionType: 'Where Did This Happen?',
    isTyped: false,
    questionText: 'WHERE DID THIS HAPPEN?\nIn which ancient Sumerian river port city in southern Mesopotamia (Chaldea), located near the confluence of the Euphrates and Tigris rivers and renowned for its massive ziggurat dedicated to the moon god Nanna, did Terah live with his family until God called Abraham to leave his country, his kindred, and his father’s house for a land that God would show him?',
    clues: [
      'Genesis 11:28: "Haran died in the presence of his father Terah in the land of his kindred, in [...] of the Chaldeans."',
      'Abraham lived here before moving temporarily to Haran.',
      'Nehemiah 9:7: "You are the Lord, the God who chose Abram and brought him out of [...] of the Chaldeans."'
    ],
    options: ['Ur of the Chaldees', 'Haran', 'Erech', 'Nineveh'],
    correctAnswer: 'Ur of the Chaldees',
    acceptedAlternatives: ['Ur', 'Ur of the Chaldeans', 'Tell el-Muqayyar'],
    reference: 'Genesis 11:28–31; 15:7; Nehemiah 9:7; Acts 7:2–4',
    explanation: 'Ur of the Chaldees in southern Mesopotamia was the ancient polytheistic city from which God called Abraham.',
    hint: 'Sumerian city in southern Mesopotamia from which Abraham began his journey of faith.',
    region: 'Mesopotamia',
    testament: 'Old Testament',
    difficulty: 'easy',
    timerSeconds: 30
  },
  {
    level: 9,
    challengeIndex: 4,
    stage: 2,
    stageTitle: 'Cities of Scripture',
    levelTitle: 'Imperial Capitals & Exilic Fortresses',
    questionType: 'Identify the Biblical Location',
    isTyped: false,
    questionText: 'IDENTIFY THE LOCATION:\nI was an important commercial crossroads city in northern Mesopotamia on the Balikh River where Terah settled with Abram, Sarai, and Lot after leaving Ur of the Chaldees, and where Terah died at age 205. Decades later, Isaac sent Jacob back to my region (Paddan-aram) to escape Esau; here Jacob met Rachel at the well, served her father Laban for twenty years, and fathered eleven of his sons. What historic trading city am I?',
    clues: [
      'Genesis 12:4: "Abram was seventy-five years old when he departed from [...]."',
      'Where Rebekah grew up before being chosen as Isaac’s bride.',
      'Stephen recalls in Acts 7:4 that Abraham left Chaldea and lived in this city until his father died.'
    ],
    options: ['Haran', 'Ur', 'Nineveh', 'Carchemish'],
    correctAnswer: 'Haran',
    acceptedAlternatives: ['Charran', 'Carrhae'],
    reference: 'Genesis 11:31–32; 12:4–5; 28:10; 29:4; Acts 7:4',
    explanation: 'Haran in northern Mesopotamia was where Terah died, Abraham received his departure call, and Jacob served Laban for twenty years.',
    hint: 'Northern Mesopotamian trading city where Terah died and Jacob served Laban.',
    region: 'Paddan-aram (Mesopotamia)',
    testament: 'Old Testament',
    difficulty: 'medium',
    timerSeconds: 30
  },
  {
    level: 9,
    challengeIndex: 5,
    stage: 2,
    stageTitle: 'Cities of Scripture',
    levelTitle: 'Imperial Capitals & Exilic Fortresses',
    questionType: 'Type the Location Yourself',
    isTyped: true,
    questionText: 'TYPE THE LOCATION — MINI-BOSS:\nI was the ancient mountain summer capital of the Medes and Persians, located over six thousand feet high in the Zagros Mountains (modern Hamadan, Iran). When Tattenai, governor of the province Beyond the River, opposed the rebuilding of the Second Temple under Zerubbabel and asked King Darius to search the royal archives, a search was made in Babylon, but nothing was found; however, the original royal decree of Cyrus the Great commanding the rebuilding of God’s house in Jerusalem was discovered recorded on a scroll in my fortress archive. What is the Aramaic/biblical name of this capital (spelled Achmetha in Ezra 6:2)?',
    clues: [
      'Ezra 6:2: "And in [...], the capital that is in the province of Media, a scroll was found on which this was written: ‘A record...’"',
      'Ancient Greek name: Ecbatana.',
      'Summer fortress residence of the Persian kings.'
    ],
    options: ['Ecbatana', 'Achmetha', 'Susa', 'Persepolis'],
    correctAnswer: 'Ecbatana',
    acceptedAlternatives: ['Achmetha', 'Ecbatana (Achmetha)', 'Hamadan'],
    reference: 'Ezra 6:1–5',
    explanation: 'Ecbatana (Achmetha in Aramaic) was the Median capital where Cyrus’ original decree to rebuild the Jerusalem Temple was discovered.',
    hint: 'Median mountain fortress capital (Achmetha) where Cyrus’ temple decree was discovered.',
    region: 'Media / Persia',
    testament: 'Old Testament',
    difficulty: 'master',
    timerSeconds: 25
  },

  // Level 10: Roman Provincial Capitals of the New Testament
  {
    level: 10,
    challengeIndex: 1,
    stage: 2,
    stageTitle: 'Cities of Scripture',
    levelTitle: 'Roman Provincial Capitals of the New Testament',
    questionType: 'Identify the Biblical Location',
    isTyped: false,
    questionText: 'IDENTIFY THE LOCATION:\nDo not confuse me with Caesarea Philippi in northern Galilee! I was the grand Mediterranean deepwater harbor city built by King Herod the Great and named in honor of Augustus Caesar, serving as the official Roman administrative and military capital of Judea. Here, Cornelius the Roman centurion was converted under Peter’s preaching; Herod Agrippa I was struck by an angel and eaten by worms; and the Apostle Paul was imprisoned for two years under Governors Felix and Festus, giving his defense before King Agrippa II and Queen Bernice before sailing for Rome. What city am I?',
    clues: [
      'Acts 10:1: "At [...] there was a man named Cornelius, a centurion of what was known as the Italian Cohort."',
      'Home of Philip the Evangelist and his four prophesying daughters (Acts 21:8).',
      'Site of Paul’s two-year imprisonment where he appealed to Caesar.'
    ],
    options: ['Caesarea Maritima', 'Caesarea Philippi', 'Joppa', 'Ptolemais'],
    correctAnswer: 'Caesarea Maritima',
    acceptedAlternatives: ['Caesarea', 'Caesarea on the Sea', 'Caesarea Palaestinae'],
    reference: 'Acts 10:1–48; 12:19–23; 23:23–35; 25:1–26:32',
    explanation: 'Caesarea Maritima was the Roman capital of Judea where Cornelius was baptized and Paul was imprisoned for two years.',
    hint: 'Roman seaport capital of Judea where Cornelius was baptized and Paul was imprisoned for two years.',
    region: 'Judean Coast',
    testament: 'New Testament',
    difficulty: 'medium',
    timerSeconds: 30
  },
  {
    level: 10,
    challengeIndex: 2,
    stage: 2,
    stageTitle: 'Cities of Scripture',
    levelTitle: 'Roman Provincial Capitals of the New Testament',
    questionType: 'Where Did This Happen?',
    isTyped: false,
    questionText: 'WHERE DID THIS HAPPEN?\nIn which ancient Mediterranean seaport of Judea, located thirty-five miles northwest of Jerusalem, did the prophet Jonah board a ship sailing for Tarshish to flee from the presence of the Lord, and centuries later, did the Apostle Peter stay in the home of Simon a tanner by the seaside, where he raised Tabitha (Dorcas) from the dead and saw the rooftop trance of the great sheet with animals descending from heaven?',
    clues: [
      'Modern Jaffa (Yafo), now part of Tel Aviv.',
      'Cedars of Lebanon for Solomon’s Temple and Zerubbabel’s Temple were floated as rafts to this port.',
      'Jonah 1:3; Acts 9:36–43; 10:5–18.'
    ],
    options: ['Joppa', 'Caesarea', 'Tyre', 'Ptolemais'],
    correctAnswer: 'Joppa',
    acceptedAlternatives: ['Jaffa', 'Yafo', 'Joppe'],
    reference: 'Jonah 1:3; 2 Chronicles 2:16; Acts 9:36–43; 10:5–16',
    explanation: 'Joppa was the ancient seaport where Jonah boarded his ship for Tarshish and where Peter stayed with Simon the tanner.',
    hint: 'Seaport where Jonah boarded a ship for Tarshish and Peter saw the vision of the sheet.',
    region: 'Judean Coast',
    testament: 'Both',
    difficulty: 'easy',
    timerSeconds: 30
  },
  {
    level: 3,
    challengeIndex: 3,
    stage: 2,
    stageTitle: 'Cities of Scripture',
    levelTitle: 'Roman Provincial Capitals of the New Testament',
    questionType: 'Identify the Biblical Location',
    isTyped: false,
    questionText: 'IDENTIFY THE LOCATION:\nI was an ancient, bustling Syrian desert oasis city located on the Barada River, celebrated as one of the oldest continuously inhabited cities in world history. Saul of Tarsus was travelling toward me with arrest warrants for Jewish believers when a blinding light from heaven flashed around him and Jesus spoke: "Saul, Saul, why are you persecuting me?" Led by the hand into my gates, Saul stayed blind on Straight Street in the house of Judas until Ananias restored his sight and baptized him. What famous city am I?',
    clues: [
      'Abraham’s head servant Eliezer came from this city (Genesis 15:2).',
      'Naaman praised my rivers, Abana and Pharpar, as superior to all the waters of Israel (2 Kings 5:12).',
      'Paul later escaped an ambush here by being lowered through an opening in the city wall in a large basket (Acts 9:25; 2 Corinthians 11:32–33).'
    ],
    options: ['Damascus', 'Antioch', 'Aleppo', 'Hamat'],
    correctAnswer: 'Damascus',
    acceptedAlternatives: ['Damas', 'Dimashq'],
    reference: 'Genesis 15:2; 2 Kings 5:12; Acts 9:1–25; 2 Corinthians 11:32–33',
    explanation: 'Damascus was the ancient Syrian oasis city on the road to which Saul was converted and later escaped in a basket.',
    hint: 'Syrian oasis city on the road to which Saul saw the blinding light of Christ.',
    region: 'Syria',
    testament: 'Both',
    difficulty: 'easy',
    timerSeconds: 30
  },
  {
    level: 10,
    challengeIndex: 4,
    stage: 2,
    stageTitle: 'Cities of Scripture',
    levelTitle: 'Roman Provincial Capitals of the New Testament',
    questionType: 'Where Did This Happen?',
    isTyped: false,
    questionText: 'WHERE DID THIS HAPPEN?\nIn which premier Macedonian city, situated on the Thermaic Gulf along the Via Egnatia, did Paul preach for three Sabbaths in the synagogue, reasoning from the Scriptures that the Messiah had to suffer and rise from the dead? When a jealous mob set the city in an uproar and attacked the house of Jason, Paul and Silas were sent away by night to Berea, and Paul later sent two warm pastoral epistles to this persecuted congregation concerning the return of Christ and the dead in Christ.',
    clues: [
      'Capital of the Roman province of Macedonia.',
      'Acts 17:1: "Now when they had passed through Amphipolis and Apollonia, they came to [...], where there was a synagogue of the Jews."',
      'Home of Aristarchus and Secundus, faithful travelling companions of Paul.'
    ],
    options: ['Thessalonica', 'Philippi', 'Berea', 'Athens'],
    correctAnswer: 'Thessalonica',
    acceptedAlternatives: ['Thessaloniki', 'Salonica'],
    reference: 'Acts 17:1–9; 1 Thessalonians 1:1; 2 Thessalonians 1:1',
    explanation: 'Thessalonica was the Macedonian capital where Paul preached in the synagogue and later addressed two major epistles.',
    hint: 'Macedonian capital where Jason’s house was mobbed; recipient of two Pauline epistles.',
    region: 'Macedonia',
    testament: 'New Testament',
    difficulty: 'medium',
    timerSeconds: 30
  },
  {
    level: 10,
    challengeIndex: 5,
    stage: 2,
    stageTitle: 'Cities of Scripture',
    levelTitle: 'Roman Provincial Capitals of the New Testament',
    questionType: 'Type the Location Yourself',
    isTyped: true,
    questionText: 'TYPE THE LOCATION — MINI-BOSS:\nI was a town in southern Macedonia nestled at the eastern foot of Mount Vermion, roughly forty-five miles west of Thessalonica. When Paul and Silas were smuggled out of Thessalonica by night to escape the mob, they arrived in my synagogue. Scripture famously commends my Jewish citizens with enduring praise: "Now these Jews were more noble than those in Thessalonica; they received the word with all eagerness, examining the Scriptures daily to see if these things were so." What was the name of this noble Macedonian town?',
    clues: [
      'Acts 17:10–11: "The brothers immediately sent Paul and Silas away by night to [...]."',
      'Home of Sopater, son of Pyrrhus, who accompanied Paul to Asia (Acts 20:4).',
      'Agitators from Thessalonica arrived here and stirred up the crowds, forcing Paul to flee to Athens.'
    ],
    options: ['Berea', 'Philippi', 'Thessalonica', 'Amphipolis'],
    correctAnswer: 'Berea',
    acceptedAlternatives: ['Beroea', 'Veroia', 'Veria'],
    reference: 'Acts 17:10–14; 20:4',
    explanation: 'Berea was the Macedonian town whose residents were commended as "more noble" for examining the Scriptures daily.',
    hint: 'Macedonian town commended as "more noble" for searching the Scriptures daily.',
    region: 'Macedonia',
    testament: 'New Testament',
    difficulty: 'medium',
    timerSeconds: 25
  }
];

fs.writeFileSync(
  path.join(process.cwd(), 'scripts', 'geoStages1to2.ts'),
  `// Bible Geography Quest — Stages 1 & 2 (Levels 1–10, 50 Questions)
import type { RawGeoQuestion } from './geoStages1to2';

export interface RawGeoQuestion {
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
  region: string;
  testament: 'Old Testament' | 'New Testament' | 'Both';
  difficulty: 'easy' | 'medium' | 'hard' | 'expert' | 'master';
  timerSeconds: number;
}

export const GEO_STAGES_1_TO_2: RawGeoQuestion[] = ${JSON.stringify(
    batch1Questions,
    null,
    2
  )};
`
);

console.log(`Generated ${batch1Questions.length} questions for Stages 1–2 (Batch 1).`);
