export interface ScrambleQuestionData {
  level: number;
  index: number;
  text: string;
  options: string[];
  answer: string;
  reference: string;
  explanation: string;
  testament: 'OT' | 'NT';
  acceptedAlternatives?: string[];
  hint1?: string;
  hint2?: string;
}

export const SCRAMBLE_STAGES_1_TO_3: ScrambleQuestionData[] = [
  // ==========================================
  // STAGE 1 — WARM-UP SCRAMBLE (LEVELS 1–5)
  // ==========================================

  // Level 1: The First Shuffle (Unscramble familiar biblical names)
  {
    level: 1, index: 1,
    text: "Unscramble the letters to reveal a righteous patriarch who built an ark to preserve life:",
    options: ["H", "A", "O", "N"],
    answer: "NOAH",
    reference: "Genesis 6:9; Genesis 7:1",
    explanation: "Noah was a righteous and blameless man who walked with God and built an ark to save his household.",
    testament: "OT",
    hint1: "Starts with N.",
    hint2: "Built an ark of gopher wood."
  },
  {
    level: 1, index: 2,
    text: "Unscramble the letters to reveal the deliverer called at the burning bush who led Israel out of Egypt:",
    options: ["S", "E", "O", "M", "S"],
    answer: "MOSES",
    reference: "Exodus 3:4-10; Exodus 14:21",
    explanation: "Moses encountered God at Horeb and led the Israelites through the parted waters of the Red Sea.",
    testament: "OT",
    hint1: "Starts with M.",
    hint2: "Carried the stone tablets of the Ten Commandments down Mount Sinai."
  },
  {
    level: 1, index: 3,
    text: "Unscramble the letters to reveal Abraham's wife who gave birth to Isaac in her old age:",
    options: ["R", "A", "S", "H", "A"],
    answer: "SARAH",
    reference: "Genesis 17:15-19; Genesis 21:1-3",
    explanation: "Sarah, whose name was changed from Sarai, received strength to conceive seed when she was past age.",
    testament: "OT",
    hint1: "Starts with S.",
    hint2: "Buried in the cave of Machpelah near Hebron."
  },
  {
    level: 1, index: 4,
    text: "Unscramble the letters to reveal the shepherd boy of Bethlehem who felled Goliath with a sling:",
    options: ["V", "A", "D", "I", "D"],
    answer: "DAVID",
    reference: "1 Samuel 16:13; 1 Samuel 17:49-50",
    explanation: "David, the youngest son of Jesse, was anointed by Samuel and became Israel's greatest king and psalmist.",
    testament: "OT",
    hint1: "Starts with D.",
    hint2: "Authored many of the Psalms and conquered Jerusalem."
  },
  {
    level: 1, index: 5,
    text: "Unscramble the letters to reveal the Galilean fisherman who boldly proclaimed Jesus as 'the Christ, the Son of the living God':",
    options: ["R", "E", "P", "E", "T"],
    answer: "PETER",
    reference: "Matthew 16:16; Acts 2:14",
    explanation: "Simon Peter, brother of Andrew, was surnamed Cephas/Peter by Jesus and preached the Pentecost sermon in Jerusalem.",
    testament: "NT",
    hint1: "Starts with P.",
    hint2: "Walked on the water to Jesus before sinking in doubt."
  },

  // Level 2: Book of Letters (Unscramble names of Bible books from both Testaments)
  {
    level: 2, index: 1,
    text: "Unscramble the letters to identify an Old Testament historical book celebrating loyalty and redemption:",
    options: ["T", "U", "R", "H"],
    answer: "RUTH",
    reference: "Ruth 1:16; Ruth 4:18-22",
    explanation: "The Book of Ruth tells the story of the faithful Moabitess who married Boaz and became great-grandmother to King David.",
    testament: "OT",
    hint1: "Starts with R.",
    hint2: "Famous for the phrase 'Where you go I will go, and where you lodge I will lodge'."
  },
  {
    level: 2, index: 2,
    text: "Unscramble the letters to identify the prophetic book written by a herdsman from Tekoa:",
    options: ["S", "O", "M", "A"],
    answer: "AMOS",
    reference: "Amos 1:1; Amos 5:24",
    explanation: "Amos was a shepherd and grower of sycamore figs who prophesied divine justice against social oppression in northern Israel.",
    testament: "OT",
    hint1: "Starts with A.",
    hint2: "Declared: 'Let justice roll down like waters, and righteousness like an ever-flowing stream'."
  },
  {
    level: 2, index: 3,
    text: "Unscramble the letters to identify Paul's pastoral epistle sent to his trusted co-worker in Crete:",
    options: ["U", "T", "T", "S", "I"],
    answer: "TITUS",
    reference: "Titus 1:4-5",
    explanation: "Paul wrote to Titus, whom he left in Crete to set in order things that were lacking and appoint elders in every town.",
    testament: "NT",
    hint1: "Starts with T.",
    hint2: "Contains instructions for young men, older women, and sound doctrine."
  },
  {
    level: 2, index: 4,
    text: "Unscramble the letters to identify the New Testament epistle emphasizing that faith without works is dead:",
    options: ["S", "M", "A", "E", "J"],
    answer: "JAMES",
    reference: "James 1:1; James 2:17",
    explanation: "Written by James the brother of the Lord, this epistle offers practical wisdom on trials, taming the tongue, and active faith.",
    testament: "NT",
    hint1: "Starts with J.",
    hint2: "Addresses the twelve tribes scattered among the nations."
  },
  {
    level: 2, index: 5,
    text: "Unscramble the letters to identify the prophetic book of the missionary swallowed by a great fish:",
    options: ["H", "N", "A", "O", "J"],
    answer: "JONAH",
    reference: "Jonah 1:1-3; Jonah 2:1",
    explanation: "Jonah fled toward Tarshish to evade preaching repentance to Nineveh, but was swallowed by a great fish prepared by the Lord.",
    testament: "OT",
    hint1: "Starts with J.",
    hint2: "Spent three days and three nights in the belly of the fish."
  },

  // Level 3: Missing Letters (Complete biblical names with missing letters)
  {
    level: 3, index: 1,
    text: "Unscramble all the letters to complete this patriarch's name: A B R _ H _ M",
    options: ["B", "R", "H", "A", "A", "M", "A"],
    answer: "ABRAHAM",
    reference: "Genesis 17:5; Genesis 12:1-3",
    explanation: "God renamed Abram to Abraham ('Father of a Multitude') in covenant anticipation of his nations of descendants.",
    testament: "OT",
    hint1: "Starts with A.",
    hint2: "Father of Isaac and friend of God."
  },
  {
    level: 3, index: 2,
    text: "Unscramble all the letters to complete this prophet's name: D _ N _ E L",
    options: ["N", "E", "D", "A", "I", "L"],
    answer: "DANIEL",
    reference: "Daniel 1:6; Daniel 6:16-22",
    explanation: "Daniel was taken into Babylonian exile, interpreted imperial visions, and was miraculously delivered from the lions' den.",
    testament: "OT",
    hint1: "Starts with D.",
    hint2: "Interpreted the handwriting on Belshazzar's wall."
  },
  {
    level: 3, index: 3,
    text: "Unscramble all the letters to complete this Bethany sister's name: M _ R T H _",
    options: ["T", "H", "M", "A", "A", "R"],
    answer: "MARTHA",
    reference: "Luke 10:38-42; John 11:21-27",
    explanation: "Martha of Bethany welcomed Jesus into her home, confessed Him as the resurrection and the life, and served the meals.",
    testament: "NT",
    hint1: "Starts with M.",
    hint2: "Sister to Mary and Lazarus."
  },
  {
    level: 3, index: 4,
    text: "Unscramble all the letters to complete this judge's name: G _ D E _ N",
    options: ["D", "O", "G", "I", "E", "N"],
    answer: "GIDEON",
    reference: "Judges 6:11-14; Judges 7:7",
    explanation: "Gideon son of Joash tested God with a fleece of wool and routed Midian's army with 300 men holding torches and clay jars.",
    testament: "OT",
    hint1: "Starts with G.",
    hint2: "Also called Jerubbaal after cutting down Baal's altar."
  },
  {
    level: 3, index: 5,
    text: "Unscramble all the letters to complete this wise monarch's name: S _ L O M _ N",
    options: ["L", "M", "S", "O", "O", "O", "N"],
    answer: "SOLOMON",
    reference: "1 Kings 3:5-12; 1 Kings 6:1",
    explanation: "Solomon asked God for an understanding heart to judge the people, built the magnificent first temple, and authored proverbs.",
    testament: "OT",
    hint1: "Starts with S.",
    hint2: "Queen of Sheba visited to marvel at his wisdom and wealth."
  },

  // Level 4: Word Detective (Unscramble familiar biblical words and objects)
  {
    level: 4, index: 1,
    text: "Unscramble the letters to reveal the miraculous bread from heaven that rained down in the wilderness:",
    options: ["N", "A", "M", "A", "N"],
    answer: "MANNA",
    reference: "Exodus 16:14-31; Numbers 11:7-8",
    explanation: "When dew evaporated, fine flakes like frost remained; the Israelites asked 'Man hu?' ('What is it?'), naming it manna.",
    testament: "OT",
    hint1: "Starts with M.",
    hint2: "Tasted like wafers made with honey."
  },
  {
    level: 4, index: 2,
    text: "Unscramble the letters to reveal the sacred elevated structure used for making offerings and sacrifices to God:",
    options: ["T", "L", "A", "A", "R"],
    answer: "ALTAR",
    reference: "Genesis 8:20; Exodus 27:1",
    explanation: "Noah built an altar after the flood; Moses built the bronze altar of burnt offering for the Tabernacle court.",
    testament: "OT",
    hint1: "Starts with A.",
    hint2: "Featured four horns at its four corners."
  },
  {
    level: 4, index: 3,
    text: "Unscramble the letters to reveal the royal garland or diadem promised to faithful believers in Christ:",
    options: ["W", "R", "C", "N", "O"],
    answer: "CROWN",
    reference: "2 Timothy 4:8; 1 Peter 5:4; Revelation 2:10",
    explanation: "Scripture describes the imperishable crown of righteousness, the crown of glory, and the crown of life given by the Lord.",
    testament: "NT",
    hint1: "Starts with C.",
    hint2: "Worn by kings and awarded to victorious athletes."
  },
  {
    level: 4, index: 4,
    text: "Unscramble the letters to reveal the celestial spirit messenger sent by God to guide, guard, and deliver:",
    options: ["L", "E", "A", "G", "N"],
    answer: "ANGEL",
    reference: "Luke 1:26; Hebrews 1:14",
    explanation: "Angels are ministering spirits sent out to serve for the sake of those who are to inherit salvation.",
    testament: "NT",
    hint1: "Starts with A.",
    hint2: "Gabriel and Michael are prominent named examples."
  },
  {
    level: 4, index: 5,
    text: "Unscramble the letters to reveal the peaceful tree whose freshly plucked leaf was carried by Noah's dove:",
    options: ["V", "E", "O", "L", "I"],
    answer: "OLIVE",
    reference: "Genesis 8:11; Romans 11:17",
    explanation: "The dove returned to Noah in the evening with a freshly plucked olive leaf, proving that floodwaters had receded.",
    testament: "OT",
    hint1: "Starts with O.",
    hint2: "Supplied the pure oil for the golden lampstand in the sanctuary."
  },

  // Level 5: Mixed-Up Challenge (Stage Boss Round: 25s timer · Names, books, places, objects)
  {
    level: 5, index: 1,
    text: "Unscramble the letters to identify the famous river in which Joshua crossed on dry ground and John baptized Jesus:",
    options: ["D", "R", "J", "O", "A", "N"],
    answer: "JORDAN",
    reference: "Joshua 3:17; Matthew 3:13-17",
    explanation: "The Jordan River stopped flowing at the city of Adam during Joshua's crossing and was the site of Christ's baptism.",
    testament: "OT",
    hint1: "Starts with J.",
    hint2: "Flows from Mount Hermon southward into the Dead Sea."
  },
  {
    level: 5, index: 2,
    text: "Unscramble the letters to identify the Pentateuch book whose name means 'departure' or 'going out':",
    options: ["D", "U", "E", "X", "O", "S"],
    answer: "EXODUS",
    reference: "Exodus 1:1; Exodus 12:40-41",
    explanation: "The Book of Exodus records the bondage of Israel in Egypt, the ten plagues, the Passover, and the Sinai covenant.",
    testament: "OT",
    hint1: "Starts with E.",
    hint2: "The second book of the Bible."
  },
  {
    level: 5, index: 3,
    text: "Unscramble the letters to reveal the Jewish queen of Persia who declared: 'If I perish, I perish':",
    options: ["T", "H", "E", "S", "E", "R"],
    answer: "ESTHER",
    reference: "Esther 2:17; Esther 4:16",
    explanation: "Hadassah (Esther), cousin to Mordecai, married King Ahasuerus and risked her life to thwart Haman's genocidal decree.",
    testament: "OT",
    hint1: "Starts with E.",
    hint2: "Her bravery established the annual Jewish festival of Purim."
  },
  {
    level: 5, index: 4,
    text: "Unscramble the letters to reveal the golden or bronze vessel used by priests to burn holy incense before God:",
    options: ["S", "E", "C", "E", "N", "R"],
    answer: "CENSER",
    reference: "Leviticus 16:12; Hebrews 9:4",
    explanation: "The high priest carried a censer filled with burning coals from the bronze altar into the Holy of Holies on the Day of Atonement.",
    testament: "OT",
    hint1: "Starts with C.",
    hint2: "Incense from it produced fragrant smoke covering the mercy seat."
  },
  {
    level: 5, index: 5,
    text: "Unscramble the letters to reveal the ancient Judean town prophesied in Micah as the birthplace of the eternal Ruler:",
    options: ["T", "L", "B", "E", "H", "E", "M", "H", "E"],
    answer: "BETHLEHEM",
    reference: "Micah 5:2; Luke 2:4-7",
    explanation: "Bethlehem Ephrathah ('House of Bread'), the city of David, was where the Savior of the world was born.",
    testament: "NT",
    hint1: "Starts with B.",
    hint2: "Located about six miles south of Jerusalem."
  },

  // ==========================================
  // STAGE 2 — NAMES AND PEOPLE (LEVELS 6–10)
  // ==========================================

  // Level 6: Character Shuffle (Unscramble biblical character names)
  {
    level: 6, index: 1,
    text: "Unscramble the letters to reveal the Old Testament judge who smashed Baal's altar and led 300 men to victory:",
    options: ["D", "O", "G", "I", "E", "N"],
    answer: "GIDEON",
    reference: "Judges 6:27; Judges 7:16-22",
    explanation: "Gideon equipped his 300 warriors with trumpets, empty pitchers, and flaming torches to confound the Midianites.",
    testament: "OT",
    hint1: "Starts with G.",
    hint2: "Threshed wheat secretly in a winepress to hide from Midian."
  },
  {
    level: 6, index: 2,
    text: "Unscramble the letters to reveal the prophetess who sat under a palm tree and accompanied Barak to battle:",
    options: ["R", "H", "D", "E", "B", "O", "A"],
    answer: "DEBORAH",
    reference: "Judges 4:4-9",
    explanation: "Deborah, wife of Lappidoth, was a prophetess judging Israel who sang a great victory song after defeating Sisera.",
    testament: "OT",
    hint1: "Starts with D.",
    hint2: "Her palm tree was situated between Ramah and Bethel in Ephraim."
  },
  {
    level: 6, index: 3,
    text: "Unscramble the letters to reveal one of the Twelve apostles, often identified with Nathanael of Cana:",
    options: ["T", "H", "B", "A", "R", "O", "L", "M", "O", "E", "W"],
    answer: "BARTHOLOMEW",
    reference: "Matthew 10:3; John 1:45-49",
    explanation: "Bartholomew is paired with Philip in apostolic lists; Jesus saw him under the fig tree before Philip called him.",
    testament: "NT",
    hint1: "Starts with B.",
    hint2: "Jesus praised him: 'Behold, an Israelite indeed, in whom is no deceit!'."
  },
  {
    level: 6, index: 4,
    text: "Unscramble the letters to reveal Isaac's wife who drew water for Abraham's servant and his ten camels:",
    options: ["B", "K", "R", "E", "E", "A", "H"],
    answer: "REBEKAH",
    reference: "Genesis 24:15-20; Genesis 25:21-26",
    explanation: "Rebekah, daughter of Bethuel, showed generous hospitality at the well in Nahor and became mother of Esau and Jacob.",
    testament: "OT",
    hint1: "Starts with R.",
    hint2: "Her brother was Laban of Paddan-aram."
  },
  {
    level: 6, index: 5,
    text: "Unscramble the letters to reveal the Sanhedrin member who visited Jesus under cover of darkness to ask about rebirth:",
    options: ["D", "M", "N", "I", "C", "O", "E", "U", "S"],
    answer: "NICODEMUS",
    reference: "John 3:1-9; John 19:39",
    explanation: "Nicodemus was told 'You must be born again' and later brought 100 Roman pounds of myrrh and aloes to bury Jesus.",
    testament: "NT",
    hint1: "Starts with N.",
    hint2: "Asked: 'How can a man be born when he is old?'."
  },

  // Level 7: The Uncommon Names (Less familiar names from both Testaments)
  {
    level: 7, index: 1,
    text: "Unscramble the letters to reveal the left-handed Benjamite judge who slew Eglon, king of Moab:",
    options: ["D", "U", "E", "H"],
    answer: "EHUD",
    reference: "Judges 3:15-22",
    explanation: "Ehud son of Gera crafted an 18-inch two-edged dagger, concealed it on his right thigh, and delivered Israel from Moab.",
    testament: "OT",
    hint1: "Starts with E.",
    hint2: "Left-handed deliverer from the tribe of Benjamin."
  },
  {
    level: 7, index: 2,
    text: "Unscramble the letters to reveal the honorable man of Judah who prayed that God would enlarge his border and keep him from evil:",
    options: ["B", "Z", "J", "A", "E"],
    answer: "JABEZ",
    reference: "1 Chronicles 4:9-10",
    explanation: "Jabez's mother named him with sorrow, but God granted his heartfelt prayer to keep him from pain and bless him.",
    testament: "OT",
    hint1: "Starts with J.",
    hint2: "His prayer is immortalized in 1 Chronicles 4."
  },
  {
    level: 7, index: 3,
    text: "Unscramble the letters to reveal Jeremiah's faithful amanuensis and scribe who wrote the prophecies on a scroll:",
    options: ["R", "H", "B", "A", "U", "C"],
    answer: "BARUCH",
    reference: "Jeremiah 36:4-8; Jeremiah 45:1-5",
    explanation: "Baruch son of Neriah wrote down Jeremiah's dictated words and read them publicly in the temple courts.",
    testament: "OT",
    hint1: "Starts with B.",
    hint2: "God promised his life would be spared as a prize of war."
  },
  {
    level: 7, index: 4,
    text: "Unscramble the letters to reveal the deaconess of Cenchreae who carried Paul's Epistle to the Romans:",
    options: ["E", "B", "P", "H", "O", "E"],
    answer: "PHOEBE",
    reference: "Romans 16:1-2",
    explanation: "Paul commended Phoebe as a servant of the church at Cenchreae and a patroness/benefactor of many believers.",
    testament: "NT",
    hint1: "Starts with P.",
    hint2: "Associated with the port city of Cenchreae near Corinth."
  },
  {
    level: 7, index: 5,
    text: "Unscramble the letters to reveal the prophet and missionary who sang hymns with Paul at midnight in the Philippian jail:",
    options: ["A", "L", "S", "I", "S"],
    answer: "SILAS",
    reference: "Acts 15:22; Acts 16:25",
    explanation: "Silas (Silvanus) accompanied Paul on his second missionary journey; the earthquake shook their cell while they sang praises.",
    testament: "NT",
    hint1: "Starts with S.",
    hint2: "Also known as Silvanus in Peter and Paul's epistles."
  },

  // Level 8: Name Twins (Distinguish similar names through scrambled letters and clues)
  {
    level: 8, index: 1,
    text: "Unscramble the letters to reveal the Pharisee of Tarsus whose Hebrew name was identical to Israel's first king:",
    options: ["U", "L", "S", "A"],
    answer: "SAUL",
    reference: "Acts 9:1-11; Philippians 3:5",
    explanation: "Saul of Tarsus, named after King Saul of Benjamin, breathed threats against the disciples before his Damascus conversion.",
    testament: "NT",
    hint1: "Starts with S.",
    hint2: "Trained under Gamaliel and later known as Paul."
  },
  {
    level: 8, index: 2,
    text: "Unscramble the letters to reveal the seventh from Adam who walked with God and did not see death (distinguished from Cain's son):",
    options: ["H", "O", "E", "N", "C"],
    answer: "ENOCH",
    reference: "Genesis 5:21-24; Hebrews 11:5",
    explanation: "Enoch walked with God for 300 years after fathering Methuselah; God took him directly to heaven without physical death.",
    testament: "OT",
    hint1: "Starts with E.",
    hint2: "Distinguished from Cain's son of the same name who had a city named after him."
  },
  {
    level: 8, index: 3,
    text: "Unscramble the letters to reveal the wealthy Sanhedrin member who gave his own unused tomb for Jesus (distinguished from Jacob's son):",
    options: ["H", "P", "J", "O", "S", "E"],
    answer: "JOSEPH",
    reference: "Matthew 27:57-60; Luke 23:50-53",
    explanation: "Joseph of Arimathea boldly requested Jesus' body from Pilate, wrapped it in clean linen, and laid it in his new rock tomb.",
    testament: "NT",
    hint1: "Starts with J.",
    hint2: "A secret disciple from the town of Arimathea."
  },
  {
    level: 8, index: 4,
    text: "Unscramble the letters to reveal Martha and Mary's brother who was dead four days in the tomb (distinguished from the beggar in Jesus' parable):",
    options: ["R", "U", "L", "A", "Z", "A", "S"],
    answer: "LAZARUS",
    reference: "John 11:1-44",
    explanation: "Jesus wept at his tomb in Bethany and commanded 'Lazarus, come out!', raising him to life after four days in the grave.",
    testament: "NT",
    hint1: "Starts with L.",
    hint2: "Lived in Bethany near Jerusalem with his two sisters."
  },
  {
    level: 8, index: 5,
    text: "Unscramble the letters to reveal the Bethany disciple who sat at Jesus' feet and anointed Him with nard (distinguished from Mary Magdalene):",
    options: ["R", "Y", "M", "A"],
    answer: "MARY",
    reference: "Luke 10:39; John 12:1-3",
    explanation: "Mary of Bethany chose the good portion by listening to Jesus and later poured a pound of pure nard over His feet.",
    testament: "NT",
    hint1: "Starts with M.",
    hint2: "Sister to Martha and Lazarus."
  },

  // Level 9: Family Name Puzzle (Genealogies and family names)
  {
    level: 9, index: 1,
    text: "Unscramble the letters to reveal the Levite mother of Aaron, Moses, and Miriam who hid baby Moses in a papyrus basket:",
    options: ["C", "B", "J", "O", "H", "E", "E", "D"],
    answer: "JOCHEBED",
    reference: "Exodus 6:20; Numbers 26:59",
    explanation: "Jochebed married Amram and bore Aaron, Moses, and Miriam; she hid Moses three months from Pharaoh's infanticide decree.",
    testament: "OT",
    hint1: "Starts with J.",
    hint2: "Daughter of Levi born to Levi in Egypt."
  },
  {
    level: 9, index: 2,
    text: "Unscramble the letters to reveal the Kohathite Levite father of Moses and Aaron:",
    options: ["M", "R", "A", "A", "M"],
    answer: "AMRAM",
    reference: "Exodus 6:18-20; 1 Chronicles 6:2-3",
    explanation: "Amram son of Kohath lived 137 years and fathered the priestly and prophetic leaders of the Exodus.",
    testament: "OT",
    hint1: "Starts with A.",
    hint2: "Husband of Jochebed."
  },
  {
    level: 9, index: 3,
    text: "Unscramble the letters to reveal the prominent landholder of Bethlehem who acted as kinsman-redeemer for Ruth:",
    options: ["Z", "A", "B", "O"],
    answer: "BOAZ",
    reference: "Ruth 2:1; Ruth 4:13-17",
    explanation: "Boaz son of Salmon married Ruth the Moabitess; their son Obed became father to Jesse and grandfather to David.",
    testament: "OT",
    hint1: "Starts with B.",
    hint2: "Allowed Ruth to glean among the sheaves in his barley fields."
  },
  {
    level: 9, index: 4,
    text: "Unscramble the letters to reveal Jonathan's crippled son whom David invited to dine permanently at the king's royal table:",
    options: ["H", "P", "M", "E", "I", "B", "O", "S", "H", "E", "T", "H"],
    answer: "MEPHIBOSHETH",
    reference: "2 Samuel 9:6-13; 2 Samuel 4:4",
    explanation: "Mephibosheth was dropped as a child and became lame in both feet; David restored Saul's land to him for Jonathan's sake.",
    testament: "OT",
    hint1: "Starts with M.",
    hint2: "Also known as Merib-baal in 1 Chronicles."
  },
  {
    level: 9, index: 5,
    text: "Unscramble the letters to reveal the Davidic governor of Judah who rebuilt the temple foundations after the Babylonian exile:",
    options: ["B", "R", "Z", "E", "U", "B", "A", "B", "E", "L"],
    answer: "ZERUBBABEL",
    reference: "Ezra 3:2-8; Zechariah 4:6-9",
    explanation: "Zerubbabel son of Shealtiel led the first return of exiles from Babylon; Zechariah prophesied: 'Not by might nor by power, but by my Spirit'.",
    testament: "OT",
    hint1: "Starts with Z.",
    hint2: "Laid the foundation stones of the Second Temple."
  },

  // Level 10: Character Scramble Boss (Stage Boss Round: 25s timer · Difficult character names)
  {
    level: 10, index: 1,
    text: "Unscramble the letters to reveal the classical courtroom orator hired by the high priest to prosecute Paul before Governor Felix:",
    options: ["T", "L", "T", "E", "R", "U", "U", "L", "S"],
    answer: "TERTULLUS",
    reference: "Acts 24:1-8",
    explanation: "Tertullus was an advocate who presented the Sanhedrin's case against Paul, calling him a plague and agitator of rebellions.",
    testament: "NT",
    hint1: "Starts with T.",
    hint2: "Opened his speech with excessive flattery toward Felix."
  },
  {
    level: 10, index: 2,
    text: "Unscramble the letters to reveal the wicked daughter of Ahab and Jezebel who usurped Judah's throne for six years:",
    options: ["H", "T", "A", "A", "L", "I", "A", "H"],
    answer: "ATHALIAH",
    reference: "2 Kings 11:1-3; 2 Chronicles 22:10",
    explanation: "Athaliah murdered all the royal heirs of David except baby Joash, who was secretly hidden in the temple by Jehosheba.",
    testament: "OT",
    hint1: "Starts with A.",
    hint2: "Cried 'Treason! Treason!' when young Joash was crowned."
  },
  {
    level: 10, index: 3,
    text: "Unscramble the letters to reveal the distinguished Pharisee and doctor of law whose wise counsel spared Peter and John before the council:",
    options: ["M", "L", "G", "A", "A", "I", "E", "L"],
    answer: "GAMALIEL",
    reference: "Acts 5:34-39; Acts 22:3",
    explanation: "Gamaliel reasoned that if the apostles' movement was of human origin it would fail, but if from God, it could not be overthrown.",
    testament: "NT",
    hint1: "Starts with G.",
    hint2: "Paul's venerable mentor in Jerusalem."
  },
  {
    level: 10, index: 4,
    text: "Unscramble the letters to reveal the Spirit-filled master artisan of Judah chosen by God to oversee the Tabernacle's construction:",
    options: ["Z", "L", "B", "E", "A", "E", "L"],
    answer: "BEZALEL",
    reference: "Exodus 31:1-5; Exodus 36:1",
    explanation: "Bezalel son of Uri was filled with the Spirit of God in wisdom, understanding, and craftsmanship to design gold, silver, and wood furnishings.",
    testament: "OT",
    hint1: "Starts with B.",
    hint2: "Constructed the Ark of the Covenant and the golden lampstand."
  },
  {
    level: 10, index: 5,
    text: "Unscramble the letters to reveal the ancient king of Salem and priest of God Most High who blessed Abraham with bread and wine:",
    options: ["L", "H", "M", "E", "C", "I", "Z", "E", "D", "E", "K"],
    answer: "MELCHIZEDEK",
    reference: "Genesis 14:18-20; Hebrews 7:1-4",
    explanation: "Melchizedek was king of Salem and priest of the Most High God; Abraham paid him a tithe of everything; Christ is a priest forever in his order.",
    testament: "OT",
    hint1: "Starts with M.",
    hint2: "Name means 'King of Righteousness' and 'King of Peace'."
  },

  // ==========================================
  // STAGE 3 — PLACES AND JOURNEYS (LEVELS 11–15)
  // ==========================================

  // Level 11: City Shuffle (Biblical city names)
  {
    level: 11, index: 1,
    text: "Unscramble the letters to reveal the fortified Canaanite city whose towering walls collapsed after Israel marched for seven days:",
    options: ["R", "C", "J", "E", "I", "H", "O"],
    answer: "JERICHO",
    reference: "Joshua 6:1-20; Luke 19:1",
    explanation: "Jericho was surrounded by Israel marching once daily for six days and seven times on the seventh day before its walls collapsed.",
    testament: "OT",
    hint1: "Starts with J.",
    hint2: "Known as the City of Palm Trees; site of Zacchaeus' sycamore tree."
  },
  {
    level: 11, index: 2,
    text: "Unscramble the letters to reveal the ancient Syrian capital on whose highway Saul was blinded by heavenly light:",
    options: ["M", "C", "D", "A", "A", "S", "U", "S"],
    answer: "DAMASCUS",
    reference: "Acts 9:1-8; Acts 22:6",
    explanation: "Saul traveled toward Damascus with arrest warrants when the glorified Lord spoke to him, sending him into the street called Straight.",
    testament: "NT",
    hint1: "Starts with D.",
    hint2: "Ananias restored Saul's sight in this city."
  },
  {
    level: 11, index: 3,
    text: "Unscramble the letters to reveal the Galilean hometown where Jesus grew up from childhood in Joseph and Mary's household:",
    options: ["Z", "R", "N", "A", "A", "E", "T", "H"],
    answer: "NAZARETH",
    reference: "Luke 2:39-51; Matthew 2:23",
    explanation: "Jesus lived in Nazareth of Galilee until His baptism, leading Nathanael to question: 'Can anything good come out of Nazareth?'.",
    testament: "NT",
    hint1: "Starts with N.",
    hint2: "Located in lower Galilee south of Cana."
  },
  {
    level: 11, index: 4,
    text: "Unscramble the letters to reveal the grand Assyrian imperial capital to which Jonah preached forty days of repentance:",
    options: ["N", "H", "N", "I", "E", "V", "E"],
    answer: "NINEVEH",
    reference: "Jonah 3:1-10; Matthew 12:41",
    explanation: "Nineveh was an exceeding great city of three days' journey; its king and citizens wore sackcloth and fasted, turning away God's anger.",
    testament: "OT",
    hint1: "Starts with N.",
    hint2: "Situated on the eastern bank of the Tigris River."
  },
  {
    level: 11, index: 5,
    text: "Unscramble the letters to reveal the ancient city of Judah where Abraham bought a burial cave and David reigned for his first seven years:",
    options: ["B", "N", "H", "E", "R", "O"],
    answer: "HEBRON",
    reference: "Genesis 23:2; 2 Samuel 2:1-4",
    explanation: "Hebron (Kiriath-arba) in the Judean hills was where Sarah, Abraham, Isaac, and Jacob were buried, and where David was first crowned king.",
    testament: "OT",
    hint1: "Starts with H.",
    hint2: "Site of the Cave of Machpelah."
  },

  // Level 12: Land and Regions (Identify lands, territories and regions)
  {
    level: 12, index: 1,
    text: "Unscramble the letters to reveal the northern district of Israel around the freshwater lake where Jesus conducted most of His public ministry:",
    options: ["L", "L", "G", "A", "I", "E", "E"],
    answer: "GALILEE",
    reference: "Matthew 4:12-16; Mark 1:14",
    explanation: "Galilee of the Gentiles was the northern region encompassing Nazareth, Capernaum, Bethsaida, and Cana.",
    testament: "NT",
    hint1: "Starts with G.",
    hint2: "Home to eleven of the twelve original disciples."
  },
  {
    level: 12, index: 2,
    text: "Unscramble the letters to reveal the mountainous pasture territory east of the Jordan famed for its cattle, forests, and healing balm:",
    options: ["L", "D", "G", "I", "E", "A"],
    answer: "GILEAD",
    reference: "Jeremiah 8:22; Genesis 31:21",
    explanation: "Gilead was the fertile upland region east of the Jordan river; Jeremiah cried: 'Is there no balm in Gilead? Is there no physician there?'.",
    testament: "OT",
    hint1: "Starts with G.",
    hint2: "Home country of the prophet Elijah the Tishbite."
  },
  {
    level: 12, index: 3,
    text: "Unscramble the letters to reveal the kingdom east of the Dead Sea descended from Lot's son, ruled by King Balak and home to Ruth:",
    options: ["A", "B", "M", "O"],
    answer: "MOAB",
    reference: "Genesis 19:37; Numbers 22:1-4; Ruth 1:4",
    explanation: "Moab was the mountainous plateau territory situated east of the Dead Sea, bordering Edom to the south.",
    testament: "OT",
    hint1: "Starts with M.",
    hint2: "Moses surveyed the Promised Land from its peak at Mount Nebo."
  },
  {
    level: 12, index: 4,
    text: "Unscramble the letters to reveal the coastal Roman province in Asia Minor whose capital Tarsus was Paul's birthplace:",
    options: ["I", "L", "C", "I", "C", "I", "A"],
    answer: "CILICIA",
    reference: "Acts 21:39; Acts 22:3",
    explanation: "Paul declared: 'I am a Jew, born in Tarsus of Cilicia, but brought up in this city at the feet of Gamaliel'.",
    testament: "NT",
    hint1: "Starts with C.",
    hint2: "Located in modern-day southern Turkey."
  },
  {
    level: 12, index: 5,
    text: "Unscramble the letters to reveal the central territory between Judea and Galilee where Jesus conversed with the woman at Jacob's well:",
    options: ["M", "R", "S", "A", "A", "I", "A"],
    answer: "SAMARIA",
    reference: "John 4:4-9; Luke 9:52",
    explanation: "John 4:4 notes Jesus 'had to pass through Samaria', where He ministered at Sychar near the ancient capital of the northern kingdom.",
    testament: "NT",
    hint1: "Starts with S.",
    hint2: "Home to Mount Gerizim and Mount Ebal."
  },

  // Level 13: Rivers and Mountains (Geographical features)
  {
    level: 13, index: 1,
    text: "Unscramble the letters to reveal the mighty Mesopotamian river named as one of the four rivers of Eden, bordering the Promised Land:",
    options: ["P", "R", "E", "U", "H", "A", "T", "S", "E"],
    answer: "EUPHRATES",
    reference: "Genesis 2:14; Genesis 15:18",
    explanation: "God promised Abraham all the land from the river of Egypt to the great river, the river Euphrates.",
    testament: "OT",
    hint1: "Starts with E.",
    hint2: "One of the two great rivers bounding the Fertile Crescent."
  },
  {
    level: 13, index: 2,
    text: "Unscramble the letters to reveal the mountain range in eastern Anatolia upon which Noah's ark came to rest as floodwaters receded:",
    options: ["R", "T", "A", "R", "A", "A"],
    answer: "ARARAT",
    reference: "Genesis 8:4",
    explanation: "On the seventeenth day of the seventh month, the ark came to rest upon the mountains of Ararat.",
    testament: "OT",
    hint1: "Starts with A.",
    hint2: "Located in the highlands near the modern borders of Armenia and Turkey."
  },
  {
    level: 13, index: 3,
    text: "Unscramble the letters to reveal the coastal mountain ridge overlooking the Mediterranean where Elijah contested the 450 prophets of Baal:",
    options: ["R", "M", "C", "A", "E", "L"],
    answer: "CARMEL",
    reference: "1 Kings 18:19-38",
    explanation: "At Mount Carmel, Elijah called down fire from heaven to consume the water-drenched sacrifice, proving Yahweh is God.",
    testament: "OT",
    hint1: "Starts with C.",
    hint2: "Its beauty and fruitfulness are celebrated in Isaiah and Song of Solomon."
  },
  {
    level: 13, index: 4,
    text: "Unscramble the letters to reveal the desert mountain of God (also called Sinai) where Moses saw the burning bush and received the Law:",
    options: ["B", "R", "H", "O", "E"],
    answer: "HOREB",
    reference: "Exodus 3:1; 1 Kings 19:8",
    explanation: "Mount Horeb is the mountain of God where Moses struck the rock for water and where Elijah sheltered in a cave to hear God's still small voice.",
    testament: "OT",
    hint1: "Starts with H.",
    hint2: "Alternative biblical name for Mount Sinai."
  },
  {
    level: 13, index: 5,
    text: "Unscramble the letters to reveal the snow-capped northern mountain ridge marking Israel's boundary, praised for its refreshing dew:",
    options: ["R", "M", "H", "E", "O", "N"],
    answer: "HERMON",
    reference: "Psalm 133:3; Deuteronomy 3:8",
    explanation: "Mount Hermon rises over 9,000 feet at the northern border; Psalm 133 compares brotherly unity to the fresh dew of Hermon.",
    testament: "OT",
    hint1: "Starts with H.",
    hint2: "Highest mountain peak in the region, feeding the headwaters of the Jordan."
  },

  // Level 14: Journey Puzzle (Places along biblical journeys)
  {
    level: 14, index: 1,
    text: "Unscramble the letters to reveal the Aegean port city where Paul received the nocturnal vision of the Macedonian man pleading 'Come over and help us':",
    options: ["S", "O", "T", "R", "A"],
    answer: "TROAS",
    reference: "Acts 16:8-10; 2 Timothy 4:13",
    explanation: "At Alexandria Troas, Paul received the Macedonian call to cross over into Europe, and later left his traveling cloak with Carpus here.",
    testament: "NT",
    hint1: "Starts with T.",
    hint2: "Site where young Eutychus fell from a third-story window."
  },
  {
    level: 14, index: 2,
    text: "Unscramble the letters to reveal the olive-ridge village near Jerusalem where Martha, Mary, and Lazarus lived and where Jesus ascended to heaven:",
    options: ["T", "H", "B", "A", "N", "E", "Y"],
    answer: "BETHANY",
    reference: "John 11:1; Luke 24:50-51",
    explanation: "Bethany lay two miles east of Jerusalem across the Mount of Olives; Jesus often lodged there and ascended to heaven nearby.",
    testament: "NT",
    hint1: "Starts with B.",
    hint2: "Home of Simon the Leper and site of Lazarus' resurrection."
  },
  {
    level: 14, index: 3,
    text: "Unscramble the letters to reveal the large Mediterranean island birthplace of Barnabas, visited on Paul's first missionary voyage:",
    options: ["P", "U", "C", "Y", "R", "S"],
    answer: "CYPRUS",
    reference: "Acts 4:36; Acts 13:4-12",
    explanation: "Paul and Barnabas landed at Salamis and crossed Cyprus to Paphos, where Roman Proconsul Sergius Paulus believed the gospel.",
    testament: "NT",
    hint1: "Starts with C.",
    hint2: "Island in the eastern Mediterranean Sea south of Cilicia."
  },
  {
    level: 14, index: 4,
    text: "Unscramble the letters to reveal the distant western port city on the Mediterranean to which Jonah booked passage to flee from God:",
    options: ["S", "H", "T", "A", "S", "H", "I", "R"],
    answer: "TARSHISH",
    reference: "Jonah 1:3; 1 Kings 10:22",
    explanation: "Jonah paid fare at Joppa for a merchant ship sailing to Tarshish, seeking to escape the presence and commission of the Lord.",
    testament: "OT",
    hint1: "Starts with T.",
    hint2: "Associated with ancient maritime merchant fleets in southwest Spain."
  },
  {
    level: 14, index: 5,
    text: "Unscramble the letters to reveal the rocky Aegean penal island where the Apostle John was banished and received the vision of Revelation:",
    options: ["M", "T", "P", "A", "O", "S"],
    answer: "PATMOS",
    reference: "Revelation 1:9",
    explanation: "John was on the island called Patmos for the word of God and testimony of Jesus when he heard a voice like a trumpet on the Lord's Day.",
    testament: "NT",
    hint1: "Starts with P.",
    hint2: "A small crescent-shaped Greek volcanic island."
  },

  // Level 15: Geography Scramble Boss (Stage Boss Round: 25s timer · Challenging locations)
  {
    level: 15, index: 1,
    text: "Unscramble the letters to reveal the Galilean lakeside town that served as Jesus' headquarters, called 'His own city':",
    options: ["P", "R", "C", "A", "A", "M", "E", "U", "N"],
    answer: "CAPERNAUM",
    reference: "Matthew 4:13; Matthew 9:1; Mark 2:1",
    explanation: "Jesus relocated from Nazareth to Capernaum on the northwest shore of Galilee, where He taught in the synagogue and healed the paralytic.",
    testament: "NT",
    hint1: "Starts with C.",
    hint2: "Home to Peter, Andrew, and the tax office of Matthew."
  },
  {
    level: 15, index: 2,
    text: "Unscramble the letters to reveal the Syrian metropolis on the Orontes river where believers were first called 'Christians':",
    options: ["T", "C", "A", "N", "I", "O", "H"],
    answer: "ANTIOCH",
    reference: "Acts 11:26; Acts 13:1-3",
    explanation: "In Syrian Antioch, Barnabas and Saul taught for a full year; the church there commissioned the first overseas missionary journey.",
    testament: "NT",
    hint1: "Starts with A.",
    hint2: "The third largest city in the Roman Empire."
  },
  {
    level: 15, index: 3,
    text: "Unscramble the letters to reveal the Macedonian town whose noble citizens examined the Scriptures daily to verify Paul's teachings:",
    options: ["E", "A", "B", "R", "E"],
    answer: "BEREA",
    reference: "Acts 17:10-11",
    explanation: "The Bereans were of more noble character than those in Thessalonica because they received the word with eagerness and daily investigated the Scriptures.",
    testament: "NT",
    hint1: "Starts with B.",
    hint2: "Sopater of Berea joined Paul's delegation."
  },
  {
    level: 15, index: 4,
    text: "Unscramble the letters to reveal the historic site east of the Jordan where Jacob saw two encampments of God's angels and named the place 'Two Camps':",
    options: ["H", "M", "M", "A", "A", "I", "N", "A"],
    answer: "MAHANAIM",
    reference: "Genesis 32:1-2; 2 Samuel 17:24",
    explanation: "Jacob met God's angels at Mahanaim; later, David took refuge in this fortified Transjordan city during Absalom's revolt.",
    testament: "OT",
    hint1: "Starts with M.",
    hint2: "Name literally means 'Two Camps' or 'Two Hosts'."
  },
  {
    level: 15, index: 5,
    text: "Unscramble the letters to reveal the secluded desert brook east of the Jordan where ravens brought bread and meat to the prophet Elijah:",
    options: ["H", "R", "C", "I", "T", "H", "E"],
    answer: "CHERITH",
    reference: "1 Kings 17:3-6",
    explanation: "God commanded Elijah to hide by the Brook Cherith; ravens brought him bread and meat in morning and evening while he drank from the brook.",
    testament: "OT",
    hint1: "Starts with C.",
    hint2: "Located east of the Jordan River."
  }
];
