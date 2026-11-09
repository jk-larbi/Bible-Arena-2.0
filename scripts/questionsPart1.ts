import type { QuestionEntry } from './generateDifficultCharacterBank';

export const PART1_QUESTIONS: QuestionEntry[] = [
  // ==========================================
  // STAGE 1: THE PATRIARCHS & THE EARLY WORLD (LEVELS 1–5)
  // ==========================================

  // LEVEL 1: Early World Pioneers (firsts-and-origins, 30s)
  {
    level: 1, index: 1,
    text: "Which son of Lamech and Zillah is recorded in Genesis as 'the forger of all instruments of bronze and iron'?",
    answer: "Tubal-cain",
    distractors: ["Jabal", "Jubal", "Methushael"],
    reference: "Genesis 4:22",
    explanation: "Genesis 4:22 identifies Tubal-cain as the instructor of every craftsman in bronze and iron. Jabal was the father of tent-dwellers with livestock, and Jubal the father of musicians.",
  },
  {
    level: 1, index: 2,
    text: "Which seventh-generation descendant from Adam walked with God for 300 years after fathering Methuselah, and then 'was not, for God took him'?",
    answer: "Enoch",
    distractors: ["Jared", "Mahalalel", "Enosh"],
    reference: "Genesis 5:21-24",
    explanation: "Enoch walked faithfully with God after fathering Methuselah, and God took him away without him seeing death.",
  },
  {
    level: 1, index: 3,
    text: "Which wife did Abraham marry after the death of Sarah, who bore him Zimran, Jokshan, Medan, Midian, Ishbak, and Shuah?",
    answer: "Keturah",
    distractors: ["Hagar", "Milcah", "Basemath"],
    reference: "Genesis 25:1-2",
    explanation: "After Sarah died, Abraham took another wife named Keturah, who bore him six sons who became fathers of eastern nomadic tribes.",
  },
  {
    level: 1, index: 4,
    text: "Before Isaac was born, who did Abraham name as the sole heir of his household, identifying him as 'a native of Damascus'?",
    answer: "Eliezer",
    distractors: ["Lot", "Abimelech", "Ephron"],
    reference: "Genesis 15:2-3",
    explanation: "Abraham lamented to God: 'Look, You have given me no offspring; indeed a servant born in my house is my heir!' God answered that Eliezer would not be his heir.",
  },
  {
    level: 1, index: 5,
    text: "Which king of Salem and priest of God Most High brought out bread and wine and pronounced a blessing upon Abram after the rescue of Lot?",
    answer: "Melchizedek",
    distractors: ["Bera of Sodom", "Birsha of Gomorrah", "Shinab of Admah"],
    reference: "Genesis 14:17-20",
    explanation: "Melchizedek king of Salem, priest of the Most High God, blessed Abram and received from him a tithe of everything.",
  },

  // LEVEL 2: Abraham & The Covenant (progressive-clues, 30s)
  {
    level: 2, index: 1,
    text: "Identify this Canaanite ruler from the progressive clues:",
    answer: "Abimelech",
    distractors: ["Phicol", "Aner", "Eshcol"],
    reference: "Genesis 20:1-18; 21:22-32",
    explanation: "Abimelech king of Gerar took Sarah believing she was Abraham’s sister, was warned by God in a dream, made restitution, and later made a covenant at Beersheba.",
    clues: [
      "Clue 1: King of the Philistines / Gerar who took Sarah into his palace after Abraham said, 'She is my sister.'",
      "Clue 2: Warned by God in a dream at night that he was a dead man because of the woman he took.",
      "Clue 3: Made an oath of peace with Abraham at Beersheba accompanied by his army commander Phicol."
    ],
  },
  {
    level: 2, index: 2,
    text: "Identify this Hittite citizen of Hebron from the progressive clues:",
    answer: "Ephron son of Zohar",
    distractors: ["Mamre the Amorite", "Hamor the Hivite", "Ahimelech the Hittite"],
    reference: "Genesis 23:8-16",
    explanation: "Ephron the Hittite owned the field and the cave of Machpelah, which Abraham weighed out four hundred shekels of silver to purchase as a permanent burying ground.",
    clues: [
      "Clue 1: A Hittite dwelling among the sons of Heth at the city gate of Hebron.",
      "Clue 2: Owned the field and double-cave of Machpelah facing Mamre.",
      "Clue 3: Sold the burial field to Abraham for 400 shekels of silver weighed out before the elders."
    ],
  },
  {
    level: 2, index: 3,
    text: "Identify this Mesopotamian king from the progressive clues:",
    answer: "Chedorlaomer",
    distractors: ["Amraphel", "Arioch of Ellasar", "Tidal of Goiim"],
    reference: "Genesis 14:1-12",
    explanation: "Chedorlaomer king of Elam subjugated the five cities of the Jordan plain for twelve years, crushed their rebellion in the fourteenth year, and captured Lot.",
    clues: [
      "Clue 1: King of Elam who ruled over the kings of the Jordan plain for twelve years.",
      "Clue 2: Led a northern four-king coalition to suppress the rebellion in the Valley of Siddim.",
      "Clue 3: Plundered Sodom and Gomorrah and carried away Abram's nephew Lot captive."
    ],
  },
  {
    level: 2, index: 4,
    text: "Identify this Amorite landowner from the progressive clues:",
    answer: "Mamre",
    distractors: ["Eshcol", "Aner", "Melchizedek"],
    reference: "Genesis 14:13, 24; 18:1",
    explanation: "Mamre the Amorite was an ally of Abram along with his brothers Eshcol and Aner; Abram pitched his tent by the terebinth trees of Mamre near Hebron.",
    clues: [
      "Clue 1: An Amorite chieftain who, along with his brothers Eshcol and Aner, was allied with Abram.",
      "Clue 2: Hosted Abram near Hebron, where Abram pitched his tent beneath his great oaks/terebinth trees.",
      "Clue 3: Took part in the recovery raid with Abram and received his portion of the recovered goods."
    ],
  },
  {
    level: 2, index: 5,
    text: "Identify this Aramean patriarch from the progressive clues:",
    answer: "Bethuel",
    distractors: ["Laban", "Kemuel", "Nahor"],
    reference: "Genesis 22:20-23; 24:50",
    explanation: "Bethuel was Abraham's nephew (son of Nahor and Milcah) and the father of Laban and Rebekah.",
    clues: [
      "Clue 1: Son of Nahor and Milcah born in Paddan-aram.",
      "Clue 2: Father of Laban and Rebekah.",
      "Clue 3: Answered Abraham's servant alongside Laban, declaring, 'The thing proceeds from the LORD.'"
    ],
  },

  // LEVEL 3: Isaac, Jacob & Esau (identity-by-deed, 30s)
  {
    level: 3, index: 1,
    text: "Which devoted family nurse died upon Jacob’s return from Paddan-aram and was buried beneath the oak below Bethel, named Allon-bacuth ('Oak of Weeping')?",
    answer: "Deborah",
    distractors: ["Bilhah", "Zilpah", "Puah"],
    reference: "Genesis 35:8",
    explanation: "Genesis 35:8 records that Deborah, Rebekah's nurse, died and was buried beneath Bethel under an oak tree named Allon-bacuth.",
  },
  {
    level: 3, index: 2,
    text: "Which Egyptian priest of On had his daughter Asenath given in marriage to Joseph by Pharaoh?",
    answer: "Potiphera",
    distractors: ["Potiphar", "Zaphenath-paneah", "Pashhur"],
    reference: "Genesis 41:45, 50",
    explanation: "Pharaoh gave Joseph Asenath, the daughter of Potiphera priest of On, who bore Manasseh and Ephraim.",
  },
  {
    level: 3, index: 3,
    text: "Which daughter-in-law of Judah disguised herself at the crossroads to Enaim, resulting in the birth of the twin sons Perez and Zerah?",
    answer: "Tamar",
    distractors: ["Shua", "Dinah", "Asenath"],
    reference: "Genesis 38:13-30",
    explanation: "Tamar bore Perez and Zerah to Judah after his sons Er and Onan died. Perez is listed in the ancestral line of David and Jesus Christ.",
  },
  {
    level: 3, index: 4,
    text: "Which Hivite ruler negotiated with Jacob’s sons at Shechem to intermarry after his prince violated Dinah?",
    answer: "Hamor",
    distractors: ["Shechem", "Abimelech", "Gaal"],
    reference: "Genesis 34:1-8",
    explanation: "Hamor the Hivite was ruler of the region of Shechem and sought a treaty of intermarriage with Jacob's household.",
  },
  {
    level: 3, index: 5,
    text: "Which Hittite wife of Esau, the daughter of Beeri the Hittite, caused bitter grief of mind to Isaac and Rebekah?",
    answer: "Judith",
    distractors: ["Basemath", "Mahalath", "Adah"],
    reference: "Genesis 26:34-35",
    explanation: "Esau took Judith daughter of Beeri the Hittite and Basemath daughter of Elon the Hittite, who were a grief of mind to Isaac and Rebekah.",
  },

  // LEVEL 4: Joseph & The Sons of Israel (family-connections, 30s)
  {
    level: 4, index: 1,
    text: "What Egyptian name did Pharaoh bestow upon Joseph when he set him over all the land of Egypt and gave him the royal signet ring?",
    answer: "Zaphenath-paneah",
    distractors: ["Potiphera", "Poti-pharaoh", "Paaneah-ra"],
    reference: "Genesis 41:41-45",
    explanation: "Pharaoh called Joseph's name Zaphenath-paneah (traditionally meaning 'revealer of hidden things' or 'God speaks and he lives').",
  },
  {
    level: 4, index: 2,
    text: "Which Canaanite man from Adullam was father to the daughter whom Judah married, bearing Er, Onan, and Shelah?",
    answer: "Shua",
    distractors: ["Hirah", "Eber", "Kenaz"],
    reference: "Genesis 38:1-5",
    explanation: "Genesis 38:2 notes that Judah saw there the daughter of a certain Canaanite whose name was Shua; he married her and she conceived.",
  },
  {
    level: 4, index: 3,
    text: "Which brother proposed throwing Joseph into an empty cistern in Dothan with the secret intention of rescuing him and returning him to his father?",
    answer: "Reuben",
    distractors: ["Judah", "Simeon", "Levi"],
    reference: "Genesis 37:21-22",
    explanation: "Reuben heard their plot to kill Joseph and said, 'Shed no blood; throw him into this pit,' intending to rescue him and deliver him back to Jacob.",
  },
  {
    level: 4, index: 4,
    text: "Which son of Joseph was blessed by Jacob with his right hand across his crossed arms, despite being the younger brother?",
    answer: "Ephraim",
    distractors: ["Manasseh", "Benjamin", "Gershom"],
    reference: "Genesis 48:13-19",
    explanation: "Jacob intentionally crossed his hands, putting his right hand on Ephraim, the younger son, prophesying that his descendants would become a multitude of nations.",
  },
  {
    level: 4, index: 5,
    text: "Which son of Manasseh was father to Gilead, and had his children brought up on Joseph’s knees before Joseph died in Egypt?",
    answer: "Machir",
    distractors: ["Jair", "Gershon", "Kohath"],
    reference: "Genesis 50:23",
    explanation: "Genesis 50:23 records that Joseph saw Ephraim's children to the third generation; the children of Machir son of Manasseh were also brought up on Joseph's knees.",
  },

  // LEVEL 5: Patriarchal Stage Boss (boss-quick-discernment, 25s)
  {
    level: 5, index: 1,
    text: "Which firstborn son of Esau fathered Teman, Omar, Zepho, Gatam, and Kenaz through his wife Adah?",
    answer: "Eliphaz",
    distractors: ["Reuel", "Jeush", "Jalam"],
    reference: "Genesis 36:4, 11",
    explanation: "Eliphaz was the firstborn son of Esau through his Canaanite wife Adah daughter of Elon the Hittite.",
  },
  {
    level: 5, index: 2,
    text: "Which three Amorite brothers were confederate with Abram and accompanied him in the night raid to defeat Chedorlaomer?",
    answer: "Aner, Eshcol, and Mamre",
    distractors: ["Hophni, Phinehas, and Eli", "Dathan, Abiram, and Korah", "Haran, Nahor, and Terah"],
    reference: "Genesis 14:13, 24",
    explanation: "Abram told the king of Sodom that he would take nothing except what his allies Aner, Eshcol, and Mamre had eaten, and their rightful portion.",
  },
  {
    level: 5, index: 3,
    text: "Which early king of Edom from Bozrah reigned before any king ruled over the Israelites?",
    answer: "Jobab son of Zerah",
    distractors: ["Bela son of Beor", "Husham of Teman", "Hadad son of Bedad"],
    reference: "Genesis 36:33-35",
    explanation: "Genesis 36:33 records Jobab son of Zerah of Bozrah as reigning in Edom when Bela son of Beor died.",
  },
  {
    level: 5, index: 4,
    text: "Which Adullamite shepherd and friend accompanied Judah when he went up to Timnah to shear his sheep?",
    answer: "Hirah",
    distractors: ["Shua", "Er", "Onan"],
    reference: "Genesis 38:1, 12",
    explanation: "Genesis 38:12 records that Judah went up to his sheepshearers at Timnah, he and his friend Hirah the Adullamite.",
  },
  {
    level: 5, index: 5,
    text: "Which king of Gerar did Isaac deceive regarding Rebekah, just as Abraham had done years earlier?",
    answer: "Abimelech",
    distractors: ["Phicol", "Hamor", "Chedorlaomer"],
    reference: "Genesis 26:6-11",
    explanation: "Isaac dwelt in Gerar and told the men of the place that Rebekah was his sister; King Abimelech looked out a window, saw Isaac caressing her, and rebuked him.",
  },

  // ==========================================
  // STAGE 2: EXODUS, WILDERNESS & THE LAW (LEVELS 6–10)
  // ==========================================

  // LEVEL 6: Moses & Deliverance Calling (progressive-clues, 30s)
  {
    level: 6, index: 1,
    text: "Identify this Hebrew midwife from the progressive clues:",
    answer: "Shiphrah",
    distractors: ["Puah", "Jochebed", "Miriam"],
    reference: "Exodus 1:15-21",
    explanation: "Shiphrah and Puah were the Hebrew midwives named in Exodus 1 who feared God and spared the male infants.",
    clues: [
      "Clue 1: Named alongside Puah as chief midwives serving the Hebrew women in Egypt.",
      "Clue 2: Defied Pharaoh's direct royal decree to drown all newborn baby boys in the Nile.",
      "Clue 3: Rewarded by God with households of her own because she feared the Lord."
    ],
  },
  {
    level: 6, index: 2,
    text: "Identify this priest of Midian from the progressive clues:",
    answer: "Jethro (Reuel)",
    distractors: ["Hobab", "Balaam", "Phinehas"],
    reference: "Exodus 2:16-22; 3:1; 18:1-24",
    explanation: "Jethro (also called Reuel) was priest of Midian, father-in-law of Moses, and advised Moses to institute tiered judges.",
    clues: [
      "Clue 1: A priest in the desert of Midian whose seven daughters drew water at the well.",
      "Clue 2: Welcomed Moses into his home and gave his daughter Zipporah to him in marriage.",
      "Clue 3: Visited the Hebrew camp at Sinai and counselled Moses to establish magistrates over tens, fifties, and hundreds."
    ],
  },
  {
    level: 6, index: 3,
    text: "Identify this Midianite woman from the progressive clues:",
    answer: "Zipporah",
    distractors: ["Cozbi", "Elisheba", "Keturah"],
    reference: "Exodus 2:21; 4:24-26",
    explanation: "Zipporah circumcised her son with a flint knife when the LORD met Moses at the lodging place, declaring 'Surely a bridegroom of blood you are to me!'",
    clues: [
      "Clue 1: Daughter of the priest of Midian who married Moses after he fled Pharaoh's court.",
      "Clue 2: Bore Moses two sons, Gershom and Eliezer, in exile.",
      "Clue 3: Cut off her son's foreskin with a sharp flint stone at the lodging place to save Moses' life."
    ],
  },
  {
    level: 6, index: 4,
    text: "Identify this Levite patriarch from the progressive clues:",
    answer: "Amram",
    distractors: ["Kohath", "Izhar", "Hebron"],
    reference: "Exodus 6:18-20",
    explanation: "Amram married his father’s sister Jochebed, and she bore him Aaron and Moses. Amram lived 137 years.",
    clues: [
      "Clue 1: Son of Kohath, belonging to the second generation of Levites in Egypt.",
      "Clue 2: Married his father's sister Jochebed during the harsh Egyptian bondage.",
      "Clue 3: Father of Miriam, Aaron, and Moses, living to the age of one hundred and thirty-seven."
    ],
  },
  {
    level: 6, index: 5,
    text: "Identify this son of Moses from the progressive clues:",
    answer: "Gershom",
    distractors: ["Eliezer", "Phinehas", "Ithamar"],
    reference: "Exodus 2:22; 18:3",
    explanation: "Moses named his firstborn Gershom, explaining, 'I have been a stranger in a foreign land.'",
    clues: [
      "Clue 1: Firstborn son born to Moses during his forty years in the wilderness of Midian.",
      "Clue 2: His name was given because his father said, 'I have been an alien in a foreign land.'",
      "Clue 3: Reunited with Moses along with his mother Zipporah and brother Eliezer at Mount Horeb."
    ],
  },

  // LEVEL 7: Plagues & Red Sea Deliverers (miracle-witnesses, 30s)
  {
    level: 7, index: 1,
    text: "Which woman of the tribe of Levi was mother to Aaron, Moses, and Miriam?",
    answer: "Jochebed",
    distractors: ["Elisheba", "Zipporah", "Shelomith"],
    reference: "Exodus 6:20; Numbers 26:59",
    explanation: "Numbers 26:59 states that Jochebed was born to Levi in Egypt, and she bore to Amram: Aaron, Moses, and Miriam their sister.",
  },
  {
    level: 7, index: 2,
    text: "Which brother-in-law of Aaron was the leader of the tribe of Judah who offered his dedication offering on the first day at the tabernacle?",
    answer: "Nahshon son of Amminadab",
    distractors: ["Hur", "Bezalel", "Caleb"],
    reference: "Numbers 2:3; 7:12; Exodus 6:23",
    explanation: "Aaron married Elisheba, daughter of Amminadab and sister of Nahshon; Nahshon was the prince of Judah who presented the very first offering.",
  },
  {
    level: 7, index: 3,
    text: "Which Kenite relative of Moses was urged by Moses to accompany Israel as 'eyes for us' through the wilderness?",
    answer: "Hobab son of Reuel",
    distractors: ["Jethro", "Jabal", "Balaam"],
    reference: "Numbers 10:29-32",
    explanation: "Moses said to Hobab son of Reuel the Midianite: 'Do not leave us, for you know how we are to camp in the wilderness, and you will be our eyes.'",
  },
  {
    level: 7, index: 4,
    text: "Which prominent elder of Judah, alongside Aaron, held up Moses’ arms until sunset during the battle against Amalek at Rephidim?",
    answer: "Hur",
    distractors: ["Caleb", "Joshua", "Phinehas"],
    reference: "Exodus 17:10-12",
    explanation: "Aaron and Hur held up Moses' hands, one on one side and one on the other, ensuring that Israel prevailed over Amalek.",
  },
  {
    level: 7, index: 5,
    text: "Which grandson of Aaron proved zealous for God at Shittim by executing Zimri and Cozbi with a spear?",
    answer: "Phinehas son of Eleazar",
    distractors: ["Ithamar", "Nadab", "Abihu"],
    reference: "Numbers 25:7-13",
    explanation: "Phinehas son of Eleazar, son of Aaron, turned away God's wrath and was given an everlasting covenant of peace and priesthood.",
  },

  // LEVEL 8: Tabernacle Builders & High Priests (sacred-roles, 30s)
  {
    level: 8, index: 1,
    text: "Which master craftsman of the tribe of Judah was explicitly filled with the Spirit of God in wisdom, understanding, and knowledge for all tabernacle metalwork?",
    answer: "Bezalel son of Uri",
    distractors: ["Oholiab", "Hiram of Tyre", "Hur"],
    reference: "Exodus 31:1-5",
    explanation: "The LORD said: 'See, I have called by name Bezalel the son of Uri, the son of Hur, of the tribe of Judah, and I have filled him with the Spirit of God.'",
  },
  {
    level: 8, index: 2,
    text: "Which craftsman of the tribe of Dan was appointed as chief associate alongside Bezalel to engrave and weave the sanctuary tapestries?",
    answer: "Oholiab son of Ahisamach",
    distractors: ["Ithamar", "Ahitub", "Bezalel"],
    reference: "Exodus 31:6; 35:34",
    explanation: "Exodus 31:6 notes that God appointed with Bezalel, Oholiab son of Ahisamach of the tribe of Dan, giving both the ability to teach others.",
  },
  {
    level: 8, index: 3,
    text: "Which youngest son of Aaron was placed in charge of the inventory of the tabernacle and directed the service of the Gershonites and Merarites?",
    answer: "Ithamar",
    distractors: ["Eleazar", "Nadab", "Abihu"],
    reference: "Exodus 38:21; Numbers 4:28, 33",
    explanation: "The inventory of the tabernacle was made at Moses’ command under the direction of Ithamar, son of Aaron the priest.",
  },
  {
    level: 8, index: 4,
    text: "Which sister of Nahshon and daughter of Amminadab was married to Aaron and became the mother of Israel’s first high priestly line?",
    answer: "Elisheba",
    distractors: ["Jochebed", "Zipporah", "Shelomith"],
    reference: "Exodus 6:23",
    explanation: "Exodus 6:23 states that Aaron took Elisheba, daughter of Amminadab, sister of Nahshon, as his wife, and she bore Nadab, Abihu, Eleazar, and Ithamar.",
  },
  {
    level: 8, index: 5,
    text: "Which two eldest sons of Aaron offered unauthorized fire before the LORD in the wilderness of Sinai and perished by fire?",
    answer: "Nadab and Abihu",
    distractors: ["Eleazar and Ithamar", "Hophni and Phinehas", "Korah and Dathan"],
    reference: "Leviticus 10:1-2",
    explanation: "Nadab and Abihu took their censers, put unauthorized fire in them, and fire came out from the presence of the LORD and consumed them.",
  },

  // LEVEL 9: Spies & Wilderness Leaders (court-fidelity, 30s)
  {
    level: 9, index: 1,
    text: "Which prince of the tribe of Reuben joined Dathan and Abiram in the rebellion that challenged Moses' leadership in the desert?",
    answer: "On son of Peleth",
    distractors: ["Korah son of Izhar", "Zimri son of Salu", "Elizur son of Shedeur"],
    reference: "Numbers 16:1-2",
    explanation: "Numbers 16:1 names Korah son of Izhar along with Dathan and Abiram sons of Eliab, and On son of Peleth, sons of Reuben, who rose up against Moses.",
  },
  {
    level: 9, index: 2,
    text: "Which Simeonite prince brought a Midianite woman into his tent in full view of the assembly while they wept at the door of the tabernacle?",
    answer: "Zimri son of Salu",
    distractors: ["Shelumiel son of Zurishaddai", "On son of Peleth", "Dathan son of Eliab"],
    reference: "Numbers 25:6, 14",
    explanation: "The name of the slain Israelite was Zimri son of Salu, a prince of a father’s house among the Simeonites.",
  },
  {
    level: 9, index: 3,
    text: "Which Midianite princess, daughter of tribal chief Zur, was slain alongside Zimri in the camp at Peor?",
    answer: "Cozbi",
    distractors: ["Zipporah", "Hoglah", "Tirzah"],
    reference: "Numbers 25:15, 18",
    explanation: "The Midianite woman slain by Phinehas was Cozbi daughter of Zur, who was head over an ancestral house in Midian.",
  },
  {
    level: 9, index: 4,
    text: "Which Danite woman was mother of the young man executed in the camp for blaspheming the sacred Name during a quarrel?",
    answer: "Shelomith daughter of Dibri",
    distractors: ["Elisheba", "Jochebed", "Milcah"],
    reference: "Leviticus 24:10-16",
    explanation: "Leviticus 24:11 records that the son of an Israelite woman whose name was Shelomith daughter of Dibri of the tribe of Dan blasphemed the Name.",
  },
  {
    level: 9, index: 5,
    text: "Which five sisters petitioned Moses at the tent of meeting for their deceased father’s tribal inheritance, establishing a lasting statutory law in Israel?",
    answer: "Mahlah, Noah, Hoglah, Milcah, and Tirzah",
    distractors: ["Miriam, Deborah, Jael, Huldah, and Anna", "Adah, Zillah, Basemath, Judith, and Mahalath", "Bilhah, Zilpah, Leah, Rachel, and Tamar"],
    reference: "Numbers 27:1-7; 36:11",
    explanation: "The daughters of Zelophehad (Mahlah, Noah, Hoglah, Milcah, and Tirzah) successfully petitioned Moses, Eleazar, and the leaders for their father’s land.",
  },

  // LEVEL 10: Wilderness Stage Boss (boss-quick-discernment, 25s)
  {
    level: 10, index: 1,
    text: "Which two of the seventy appointed elders remained in the camp and prophesied when the Spirit rested upon them, prompting Joshua to ask Moses to stop them?",
    answer: "Eldad and Medad",
    distractors: ["Nadab and Abihu", "Dathan and Abiram", "Hophni and Phinehas"],
    reference: "Numbers 11:26-29",
    explanation: "Eldad and Medad remained in the camp; the Spirit rested upon them and they prophesied. Moses replied, 'Would that all the LORD’s people were prophets!'",
  },
  {
    level: 10, index: 2,
    text: "Which giant Amorite king of Bashan had an iron bedstead measuring nine cubits by four cubits at Rabbah of the Ammonites?",
    answer: "Og",
    distractors: ["Sihon", "Balak", "Adoni-zedek"],
    reference: "Deuteronomy 3:11",
    explanation: "Only Og king of Bashan was left of the remnant of the Rephaim. His bedstead was made of iron and was nine cubits long and four cubits wide.",
  },
  {
    level: 10, index: 3,
    text: "Which Amorite king of Heshbon refused Israel peaceful passage along the King's Highway and was defeated at Jahaz?",
    answer: "Sihon",
    distractors: ["Og", "Balak", "Jabin"],
    reference: "Numbers 21:21-25",
    explanation: "Sihon gathered all his people together and went out against Israel into the wilderness, but Israel defeated him with the edge of the sword.",
  },
  {
    level: 10, index: 4,
    text: "Which king of Moab summoned the seer Balaam from Pethor to place a curse upon the encampment of Israel?",
    answer: "Balak son of Zippor",
    distractors: ["Eglon", "Mesha", "Hadad"],
    reference: "Numbers 22:2-6",
    explanation: "Balak son of Zippor was king of Moab at that time; he sent messengers to Balaam saying, 'A people has come out of Egypt... come curse them for me.'",
  },
  {
    level: 10, index: 5,
    text: "Which high priest died atop Mount Hor after Moses stripped him of his holy garments and placed them upon his son Eleazar?",
    answer: "Aaron",
    distractors: ["Hur", "Ithamar", "Phinehas"],
    reference: "Numbers 20:25-28",
    explanation: "Moses, Aaron, and Eleazar went up Mount Hor. Moses stripped Aaron of his garments and put them on Eleazar, and Aaron died there on the mountain peak.",
  },

  // ==========================================
  // STAGE 3: CONQUEST, DELIVERERS & JUDGES (LEVELS 11–15)
  // ==========================================

  // LEVEL 11: Joshua & Crossing Jordan (battle-of-faith, 30s)
  {
    level: 11, index: 1,
    text: "Which Amorite king of Jerusalem formed a five-king southern alliance to attack Gibeon after Gibeon made peace with Joshua?",
    answer: "Adoni-zedek",
    distractors: ["Hoham of Hebron", "Piram of Jarmuth", "Japhia of Lachish"],
    reference: "Joshua 10:1-5",
    explanation: "Adoni-zedek king of Jerusalem sent to Hoham of Hebron, Piram of Jarmuth, Japhia of Lachish, and Debir of Eglon to strike Gibeon.",
  },
  {
    level: 11, index: 2,
    text: "Which northern Canaanite king ruled from Hazor and organized the vast allied army defeated at the Waters of Merom?",
    answer: "Jabin",
    distractors: ["Jobab", "Sisera", "Sihon"],
    reference: "Joshua 11:1-5, 10",
    explanation: "Jabin king of Hazor summoned the northern kings; Joshua took Hazor and struck its king with the sword, for Hazor was formerly head of all those kingdoms.",
  },
  {
    level: 11, index: 3,
    text: "Which man of the tribe of Judah stole a beautiful cloak from Shinar, two hundred shekels of silver, and a bar of gold at Jericho, bringing defeat at Ai?",
    answer: "Achan son of Carmi",
    distractors: ["Zabdi son of Zerah", "Phinehas son of Eleazar", "Caleb son of Jephunneh"],
    reference: "Joshua 7:1, 18-21",
    explanation: "Achan confessed to Joshua that he covetted and hid the devoted spoil under his tent in the Valley of Achor.",
  },
  {
    level: 11, index: 4,
    text: "Which nephew of Caleb conquered Kiriath-sepher (Debir) to win Caleb’s daughter Achsah in marriage, later becoming Israel’s first judge?",
    answer: "Othniel son of Kenaz",
    distractors: ["Ehud son of Gera", "Shamgar son of Anath", "Phinehas son of Eleazar"],
    reference: "Joshua 15:16-17; Judges 3:9-11",
    explanation: "Caleb promised his daughter Achsah to whoever attacked and captured Kiriath-sepher; Othniel captured it and later became the first judge.",
  },
  {
    level: 11, index: 5,
    text: "Which daughter of Caleb requested upper and lower water springs from her father alongside her inheritance in the Negev?",
    answer: "Achsah",
    distractors: ["Deborah", "Jael", "Tamar"],
    reference: "Joshua 15:18-19; Judges 1:14-15",
    explanation: "Achsah dismounted from her donkey and urged her father: 'Give me a blessing... give me also springs of water.' Caleb gave her upper and lower springs.",
  },

  // LEVEL 12: Early Judges & Deliverers (who-am-i-deliverer, 30s)
  {
    level: 12, index: 1,
    text: "Which Mesopotamian ruler, whose name means 'doubly wicked Cushite', oppressed Israel for eight years until Othniel defeated him?",
    answer: "Cushan-rishathaim",
    distractors: ["Eglon", "Jabin", "Sisera"],
    reference: "Judges 3:8-10",
    explanation: "The wrath of the LORD burned against Israel and He sold them into the hand of Cushan-rishathaim king of Mesopotamia (Aram-naharaim) for eight years.",
  },
  {
    level: 12, index: 2,
    text: "Which Benjamite judge was left-handed and fashioned a double-edged dagger eighteen inches long to assassinate Eglon king of Moab?",
    answer: "Ehud son of Gera",
    distractors: ["Shamgar son of Anath", "Othniel son of Kenaz", "Tola son of Puah"],
    reference: "Judges 3:15-22",
    explanation: "Ehud son of Gera, a Benjamite, concealed his short sword on his right thigh under his garments and delivered a private message to King Eglon.",
  },
  {
    level: 12, index: 3,
    text: "Which deliverer struck down six hundred Philistine warriors with an oxgoad?",
    answer: "Shamgar son of Anath",
    distractors: ["Samson son of Manoah", "Ehud son of Gera", "Gideon son of Joash"],
    reference: "Judges 3:31",
    explanation: "After Ehud came Shamgar son of Anath, who killed six hundred Philistines with an oxgoad; he too delivered Israel.",
  },
  {
    level: 12, index: 4,
    text: "Which judge from the tribe of Issachar lived at Shamir in the hill country of Ephraim and judged Israel for twenty-three years?",
    answer: "Tola son of Puah",
    distractors: ["Jair the Gileadite", "Ibzan of Bethlehem", "Elon the Zebulunite"],
    reference: "Judges 10:1-2",
    explanation: "After Abimelech there arose to save Israel Tola son of Puah, son of Dodo, a man of Issachar, who judged Israel twenty-three years.",
  },
  {
    level: 12, index: 5,
    text: "Which Gileadite judge had thirty sons who rode on thirty donkeys and possessed thirty towns called Havvoth-jair?",
    answer: "Jair the Gileadite",
    distractors: ["Abdon son of Hillel", "Ibzan of Bethlehem", "Tola son of Puah"],
    reference: "Judges 10:3-4",
    explanation: "Jair the Gileadite judged Israel twenty-two years. He had thirty sons who rode on thirty donkeys and owned thirty towns in Gilead.",
  },

  // LEVEL 13: Deborah, Barak & Jael (progressive-clues, 30s)
  {
    level: 13, index: 1,
    text: "Identify this Canaanite general from the progressive clues:",
    answer: "Sisera",
    distractors: ["Jabin", "Barak", "Heber"],
    reference: "Judges 4:2-22",
    explanation: "Sisera was commander of Jabin's army based at Harosheth-hagoyim with 900 iron chariots; he fled on foot to Jael's tent and was killed.",
    clues: [
      "Clue 1: Supreme commander of Jabin king of Canaan's nine hundred chariots of iron.",
      "Clue 2: Terrified when the river Kishon swept away his forces in the torrential flood.",
      "Clue 3: Fled on foot to the tent of Heber the Kenite, where he was slain with a wooden tent peg."
    ],
  },
  {
    level: 13, index: 2,
    text: "Identify this heroic Kenite woman from the progressive clues:",
    answer: "Jael",
    distractors: ["Deborah", "Achsah", "Manoah's wife"],
    reference: "Judges 4:17-22; 5:24-27",
    explanation: "Jael, wife of Heber the Kenite, offered Sisera curdled milk/buttermilk, covered him with a rug, and drove a tent peg into his temple.",
    clues: [
      "Clue 1: Wife of Heber the Kenite whose tent was pitched near Kedesh in Naphtali.",
      "Clue 2: Covered an exhausted general with a rug and gave him curdled milk from a leather skin.",
      "Clue 3: Praised as 'most blessed of women' in song after driving a tent peg through her guest's temple."
    ],
  },
  {
    level: 13, index: 3,
    text: "Identify this Naphtalite military commander from the progressive clues:",
    answer: "Barak son of Abinoam",
    distractors: ["Gideon", "Othniel", "Jephthah"],
    reference: "Judges 4:6-14",
    explanation: "Barak son of Abinoam gathered 10,000 men on Mount Tabor after Deborah commanded him, but was told the journey would not be for his honor.",
    clues: [
      "Clue 1: Summoned from Kedesh-naphtali to deploy ten thousand soldiers on Mount Tabor.",
      "Clue 2: Refused to go down into battle unless the prophetess Deborah accompanied him.",
      "Clue 3: Warned that because of his hesitation, the LORD would sell the enemy general into the hands of a woman."
    ],
  },
  {
    level: 13, index: 4,
    text: "Identify this husband of Deborah from the progressive clues:",
    answer: "Lapidoth",
    distractors: ["Heber", "Abinoam", "Elimelech"],
    reference: "Judges 4:4",
    explanation: "Judges 4:4 introduces Deborah as a prophetess, the wife of Lapidoth, judging Israel beneath her palm tree.",
    clues: [
      "Clue 1: An Ephraimite whose wife was recognized as a prophetess across all the tribes.",
      "Clue 2: His wife held open court beneath a palm tree between Ramah and Bethel.",
      "Clue 3: Specifically identified in Scripture as the husband of Judge Deborah."
    ],
  },
  {
    level: 13, index: 5,
    text: "Identify this Kenite metalworker from the progressive clues:",
    answer: "Heber",
    distractors: ["Hobab", "Jethro", "Jabal"],
    reference: "Judges 4:11, 17",
    explanation: "Heber the Kenite separated from his fellow Kenites, pitched his tent by the oak of Zaanannim, and maintained peace with King Jabin of Hazor.",
    clues: [
      "Clue 1: Descendant of Hobab, Moses' brother-in-law, who separated from his clan in the south.",
      "Clue 2: Pitched his nomad's tent as far north as the oak in Zaanannim near Kedesh.",
      "Clue 3: Maintained a formal treaty of peace between his household and Jabin king of Hazor."
    ],
  },

  // LEVEL 14: Gideon, Jephthah & Samson (pivotal-vows, 30s)
  {
    level: 14, index: 1,
    text: "Which servant of Gideon accompanied him down into the outskirts of the Midianite camp to overhear the dream of the barley loaf tumbling into the tent?",
    answer: "Purah",
    distractors: ["Phinehas", "Joash", "Jether"],
    reference: "Judges 7:9-11",
    explanation: "The LORD told Gideon: 'If you are afraid to go down, go down to the camp with Purah your servant, and you shall hear what they say.'",
  },
  {
    level: 14, index: 2,
    text: "Which two kings of Midian were captured and slain by Gideon near Karkor after they confessed to killing Gideon's brothers at Tabor?",
    answer: "Zebah and Zalmunna",
    distractors: ["Oreb and Zeeb", "Sihon and Og", "Adoni-bezek and Eglon"],
    reference: "Judges 8:10-21",
    explanation: "Gideon pursued and took the two kings of Midian, Zebah and Zalmunna, and routed the entire host.",
  },
  {
    level: 14, index: 3,
    text: "Which youngest son of Gideon escaped the massacre of his seventy brothers by Abimelech and spoke the Parable of the Bramble from Mount Gerizim?",
    answer: "Jotham",
    distractors: ["Gaal", "Zebul", "Jether"],
    reference: "Judges 9:5-21",
    explanation: "Jotham hid himself when Abimelech killed his seventy brothers on one stone; he stood on top of Mount Gerizim and warned Shechem with the fable of the trees.",
  },
  {
    level: 14, index: 4,
    text: "Which rebel son of Ebed led the men of Shechem to boast in the house of their god Baal-berith against Abimelech?",
    answer: "Gaal",
    distractors: ["Zebul", "Jotham", "Ahimelech"],
    reference: "Judges 9:26-29",
    explanation: "Gaal son of Ebed came with his relatives and moved into Shechem, stirring up the city: 'Who is Abimelech, and who is Shechem, that we should serve him?'",
  },
  {
    level: 14, index: 5,
    text: "Which ruler of the city of Shechem secretly sent messengers to warn Abimelech of Gaal’s rebellion?",
    answer: "Zebul",
    distractors: ["Gaal", "Hamor", "Jotham"],
    reference: "Judges 9:30-38",
    explanation: "When Zebul the ruler of the city heard the words of Gaal son of Ebed, his anger was kindled and he sent messengers secretly to Abimelech.",
  },

  // LEVEL 15: Minor Judges & Ruth's Kinsmen Boss (boss-family-redeemer, 25s)
  {
    level: 15, index: 1,
    text: "Which judge of Bethlehem judged Israel for seven years, arranging thirty daughters to marry outside his clan and thirty daughters-in-law to marry in?",
    answer: "Ibzan of Bethlehem",
    distractors: ["Elon the Zebulunite", "Abdon the Pirathonite", "Tola of Issachar"],
    reference: "Judges 12:8-10",
    explanation: "After Jephthah, Ibzan of Bethlehem judged Israel. He had thirty sons and thirty daughters whom he gave in marriage outside his clan.",
  },
  {
    level: 15, index: 2,
    text: "Which judge of the tribe of Zebulun judged Israel for ten years and was buried at Aijalon?",
    answer: "Elon",
    distractors: ["Ibzan", "Abdon", "Jair"],
    reference: "Judges 12:11-12",
    explanation: "Judges 12:11 notes that Elon the Zebulunite judged Israel ten years, died, and was buried at Aijalon in the land of Zebulun.",
  },
  {
    level: 15, index: 3,
    text: "Which judge from Pirathon in Ephraim had forty sons and thirty grandsons who rode on seventy donkeys?",
    answer: "Abdon son of Hillel",
    distractors: ["Jair the Gileadite", "Ibzan of Bethlehem", "Tola son of Puah"],
    reference: "Judges 12:13-15",
    explanation: "Abdon son of Hillel the Pirathonite judged Israel eight years; he had forty sons and thirty grandsons who rode on seventy donkeys.",
  },
  {
    level: 15, index: 4,
    text: "Which two sons of Elimelech and Naomi married the Moabite women Orpah and Ruth before dying childless in Moab?",
    answer: "Mahlon and Chilion",
    distractors: ["Hophni and Phinehas", "Nadab and Abihu", "Gershom and Eliezer"],
    reference: "Ruth 1:2-5",
    explanation: "The name of the man was Elimelech, his wife Naomi, and the names of his two sons were Mahlon and Chilion, Ephrathites of Bethlehem in Judah.",
  },
  {
    level: 15, index: 5,
    text: "Which unnamed relative of Elimelech stepped aside at the city gate of Bethlehem, removing his sandal so Boaz could redeem Ruth and the family land?",
    answer: "The closer redeemer (Peloni-Almoni)",
    distractors: ["Obed", "Salmon", "Elimelech"],
    reference: "Ruth 4:1-8",
    explanation: "Boaz addressed the closer kinsman as 'friend' (in Hebrew Peloni-Almoni / 'so-and-so'); the man took off his sandal because he could not redeem without endangering his own inheritance.",
  },

  // ==========================================
  // STAGE 4: THE UNITED KINGDOM & EARLY KINGS (LEVELS 16–20)
  // ==========================================

  // LEVEL 16: Samuel & The Priests of Shiloh (prophet-commission, 30s)
  {
    level: 16, index: 1,
    text: "Which Levite from Ramathaim-zophim in the hill country of Ephraim had two wives named Hannah and Peninnah?",
    answer: "Elkanah son of Jeroham",
    distractors: ["Eli", "Kish", "Jesse"],
    reference: "1 Samuel 1:1-2",
    explanation: "Elkanah son of Jeroham travelled up every year from his city to worship and sacrifice to the LORD of hosts at Shiloh.",
  },
  {
    level: 16, index: 2,
    text: "Which mother named her newborn son Ichabod ('the glory has departed') upon hearing that the ark was taken and her husband Phinehas was dead?",
    answer: "The wife of Phinehas",
    distractors: ["Hannah", "Peninnah", "Rizpah"],
    reference: "1 Samuel 4:19-22",
    explanation: "Eli's daughter-in-law, the wife of Phinehas, was pregnant; when she heard the news that the ark was captured, she bowed down and gave birth, naming the child Ichabod.",
  },
  {
    level: 16, index: 3,
    text: "Which priest, wearing an ephod as grandson of Phinehas and great-grandson of Eli, was present with Saul under the pomegranate tree in Migron?",
    answer: "Ahijah son of Ahitub",
    distractors: ["Abiathar", "Ahimelech", "Zadok"],
    reference: "1 Samuel 14:2-3",
    explanation: "1 Samuel 14:3 identifies Ahijah, son of Ahitub, Ichabod's brother, son of Phinehas, son of Eli, the LORD’s priest in Shiloh, wearing an ephod.",
  },
  {
    level: 16, index: 4,
    text: "Which woman mocked King David from her palace window when she saw him leaping and dancing before the ark of the LORD?",
    answer: "Michal daughter of Saul",
    distractors: ["Abigail", "Ahinoam", "Bathsheba"],
    reference: "2 Samuel 6:16-23",
    explanation: "Michal saw King David dancing before the LORD and despised him in her heart; she had no child to the day of her death.",
  },
  {
    level: 16, index: 5,
    text: "Which high priest belonging to the line of Eleazar remained faithful to David during Absalom's revolt and later anointed Solomon at Gihon?",
    answer: "Zadok son of Ahitub",
    distractors: ["Abiathar", "Ahimelech", "Eli"],
    reference: "2 Samuel 15:24-29; 1 Kings 1:38-39",
    explanation: "Zadok the priest carried the ark back to Jerusalem, served faithfully, and anointed Solomon alongside Nathan the prophet.",
  },

  // LEVEL 17: Saul, Jonathan & Royal Tragedies (tragic-decisions, 30s)
  {
    level: 17, index: 1,
    text: "Which Edomite chief herdsman of Saul witnessed David receive consecrated bread from Ahimelech at Nob and later slaughtered eighty-five priests?",
    answer: "Doeg the Edomite",
    distractors: ["Cushan-rishathaim", "Hadad the Edomite", "Benaiah son of Jehoiada"],
    reference: "1 Samuel 21:7; 22:9, 18-19",
    explanation: "Doeg was detained before the LORD at Nob; when Saul’s guards refused to strike the priests, Doeg turned and killed eighty-five men who wore the linen ephod.",
  },
  {
    level: 17, index: 2,
    text: "Which only surviving son of Ahimelech escaped Doeg's massacre at Nob and fled to David with the priestly ephod?",
    answer: "Abiathar",
    distractors: ["Zadok", "Ahijah", "Jonathan"],
    reference: "1 Samuel 22:20-23; 23:6",
    explanation: "Abiathar son of Ahimelech escaped, reached David in the wilderness with an ephod, and served as David's priest throughout his fugitive years.",
  },
  {
    level: 17, index: 3,
    text: "Which concubine of Saul, daughter of Aiah, spread sackcloth on the rock of Gibeah and kept vultures and wild beasts from the bodies of her seven slain sons?",
    answer: "Rizpah",
    distractors: ["Tamar", "Abigail", "Bathsheba"],
    reference: "2 Samuel 21:8-11",
    explanation: "Rizpah daughter of Aiah took sackcloth and spread it on the rock from the beginning of harvest until the rains poured, suffering neither birds by day nor beasts by night to touch them.",
  },
  {
    level: 17, index: 4,
    text: "Which commander of Saul’s army set up Saul’s son Ish-bosheth as king over Israel at Mahanaim before defecting to David?",
    answer: "Abner son of Ner",
    distractors: ["Joab", "Amasa", "Benaiah"],
    reference: "2 Samuel 2:8-9; 3:12-27",
    explanation: "Abner was commander of Saul's army, proclaimed Ish-bosheth king, but later negotiated with David and was assassinated by Joab at Hebron.",
  },
  {
    level: 17, index: 5,
    text: "Which youngest brother of Joab was renown for being 'as swift-footed as a wild gazelle' but was slain by Abner with the butt of a spear?",
    answer: "Asahel",
    distractors: ["Abishai", "Ittai", "Benaiah"],
    reference: "2 Samuel 2:18-23",
    explanation: "Asahel pursued Abner relentlessly without turning left or right until Abner struck him backward through his stomach with the blunt end of his spear.",
  },

  // LEVEL 18: David the Fugitive & King (progressive-clues, 30s)
  {
    level: 18, index: 1,
    text: "Identify this commander of David's royal bodyguard from the progressive clues:",
    answer: "Benaiah son of Jehoiada",
    distractors: ["Abishai", "Joab", "Asahel"],
    reference: "2 Samuel 23:20-23; 1 Kings 1:38; 2:34",
    explanation: "Benaiah son of Jehoiada from Kabzeel struck down two lion-like men of Moab, slew a lion in a pit on a snowy day, and commanded the Cherethites and Pelethites.",
    clues: [
      "Clue 1: A valiant warrior from Kabzeel who commanded David's royal Cherethite and Pelethite bodyguard.",
      "Clue 2: Climbed down into a pit on a snowy day and killed a lion with his bare hands.",
      "Clue 3: Snapped an Egyptian giant's spear from his hand and slew him with his own staff."
    ],
  },
  {
    level: 18, index: 2,
    text: "Identify this chief of David's Three Mighty Men from the progressive clues:",
    answer: "Josheb-basshebeth (Adino the Eznite)",
    distractors: ["Eleazar son of Dodo", "Shammah son of Agee", "Abishai"],
    reference: "2 Samuel 23:8",
    explanation: "Josheb-basshebeth the Tahchemonite (called Adino the Eznite) was chief of the Three; he wielded his spear against 800 men slain at one time.",
    clues: [
      "Clue 1: A Tahchemonite identified in 2 Samuel as head of the Three mighty champions.",
      "Clue 2: Also called Adino the Eznite in the ancient Hebrew record.",
      "Clue 3: Lifted up his spear against eight hundred enemy warriors whom he struck down in a single encounter."
    ],
  },
  {
    level: 18, index: 3,
    text: "Identify this second champion of the Three from the progressive clues:",
    answer: "Eleazar son of Dodo",
    distractors: ["Shammah son of Agee", "Josheb-basshebeth", "Benaiah"],
    reference: "2 Samuel 23:9-10; 1 Chronicles 11:12-14",
    explanation: "Eleazar son of Dodo the Ahohite stood against the Philistines at Pas-dammim when the Israelites retreated, striking them until his hand froze to his sword.",
    clues: [
      "Clue 1: An Ahohite champion numbered as second among David's primary three mighty men.",
      "Clue 2: Stood firm with David when the Philistines gathered for battle and the men of Israel retreated.",
      "Clue 3: Struck the enemy until his hand grew weary and froze tight to the hilt of his sword."
    ],
  },
  {
    level: 18, index: 4,
    text: "Identify this third champion of the Three from the progressive clues:",
    answer: "Shammah son of Agee",
    distractors: ["Eleazar son of Dodo", "Abishai", "Ittai the Gittite"],
    reference: "2 Samuel 23:11-12",
    explanation: "Shammah son of Agee the Hararite took his stand in the middle of a plot full of lentils and defended it single-handedly.",
    clues: [
      "Clue 1: A Hararite warrior celebrated among the first three champions of David.",
      "Clue 2: Stood single-handedly in the middle of a field when all the people fled from the Philistines.",
      "Clue 3: Defended a plot of ground full of lentils and worked a great victory for the LORD."
    ],
  },
  {
    level: 18, index: 5,
    text: "Identify this Philistine loyalist from Gath from the progressive clues:",
    answer: "Ittai the Gittite",
    distractors: ["Hushai the Archite", "Ahithophel", "Barzillai"],
    reference: "2 Samuel 15:19-22; 18:2",
    explanation: "Ittai the Gittite was an exile from Gath who brought 600 warriors, swore total allegiance to David during Absalom's revolt, and commanded a third of David's army.",
    clues: [
      "Clue 1: A foreign commander from Gath who had arrived in Jerusalem only recently with 600 soldiers.",
      "Clue 2: Urged by David to turn back during Absalom's rebellion but replied, 'Wherever my lord the king shall be, there also will your servant be.'",
      "Clue 3: Appointed by David to command one-third of the entire royal army in the forest of Ephraim."
    ],
  },

  // LEVEL 19: Solomon’s Wisdom & Temple (wisdom-and-splendor, 30s)
  {
    level: 19, index: 1,
    text: "Which prominent counselor of David defected to Absalom, whose counsel was regarded as if a man had inquired at the oracle of God?",
    answer: "Ahithophel the Gilonite",
    distractors: ["Hushai the Archite", "Nathan the prophet", "Jonathan son of Abiathar"],
    reference: "2 Samuel 15:12, 31; 16:23; 17:23",
    explanation: "Ahithophel gave counsel that was like the oracle of God; when he saw his advice was defeated by Hushai, he saddled his donkey, went home, set his house in order, and hanged himself.",
  },
  {
    level: 19, index: 2,
    text: "Which loyal friend of David was sent back to Jerusalem with torn clothes and dust on his head to defeat the counsel of Ahithophel?",
    answer: "Hushai the Archite",
    distractors: ["Ahithophel", "Ittai", "Barzillai"],
    reference: "2 Samuel 15:32-37; 17:5-14",
    explanation: "David prayed, 'O LORD, turn the counsel of Ahithophel into foolishness,' and sent Hushai the Archite to offer alternative counsel to Absalom.",
  },
  {
    level: 19, index: 3,
    text: "Which eighty-year-old Gileadite of Rogelim supplied David’s famished troops with wheat, barley, cheese, and beds while they were in exile at Mahanaim?",
    answer: "Barzillai the Gileadite",
    distractors: ["Shobi son of Nahash", "Machir son of Ammiel", "Chimham"],
    reference: "2 Samuel 17:27-29; 19:31-39",
    explanation: "Barzillai was a very aged man who sustained David at Mahanaim; he declined David’s offer to live at court in Jerusalem, sending his son Chimham instead.",
  },
  {
    level: 19, index: 4,
    text: "Which Benjamite rebel blew the ram's horn proclaiming 'We have no portion in David!' prompting a second rebellion after Absalom was slain?",
    answer: "Sheba son of Bichri",
    distractors: ["Shimei son of Gera", "Adonijah", "Amasa"],
    reference: "2 Samuel 20:1-2, 22",
    explanation: "Sheba son of Bichri, a Benjamite, led northern tribes to rebel until a wise woman of Abel-beth-maacah had his head thrown over the city wall.",
  },
  {
    level: 19, index: 5,
    text: "Which master craftsman from Tyre, the son of a widow of Naphtali, cast the two bronze pillars Jachin and Boaz for Solomon's temple?",
    answer: "Hiram (Huram-abi)",
    distractors: ["Bezalel", "Oholiab", "Adoniram"],
    reference: "1 Kings 7:13-22; 2 Chronicles 2:13-14",
    explanation: "King Solomon fetched Hiram out of Tyre; he was a widow’s son of the tribe of Naphtali, filled with skill to cast the bronze pillars, capitals, and the molten Sea.",
  },

  // LEVEL 20: United Monarchy Stage Boss (boss-quick-discernment, 25s)
  {
    level: 20, index: 1,
    text: "Which fourth son of David by Haggith exalted himself before David died, procuring chariots, fifty runners, and holding a sacrificial coronation feast at En-rogel?",
    answer: "Adonijah",
    distractors: ["Absalom", "Amnon", "Chileab"],
    reference: "1 Kings 1:5-9",
    explanation: "Adonijah son of Haggith proclaimed 'I will be king,' securing the support of Joab and Abiathar, before Solomon was anointed at Gihon.",
  },
  {
    level: 20, index: 2,
    text: "Which Benjamite cursed David and pelted him with stones at Bahurim, and was later executed under Solomon after crossing the brook Kidron?",
    answer: "Shimei son of Gera",
    distractors: ["Sheba son of Bichri", "Ziba", "Doeg the Edomite"],
    reference: "2 Samuel 16:5-13; 1 Kings 2:36-46",
    explanation: "Shimei threw stones at David when he fled Jerusalem; Solomon confined him to Jerusalem, and when he left to find two runaway slaves in Gath, he was put to death.",
  },
  {
    level: 20, index: 3,
    text: "Which cousin of Joab was appointed commander of Judah’s army by David but was treacherously stabbed by Joab at the great stone in Gibeon?",
    answer: "Amasa",
    distractors: ["Abner", "Asahel", "Abishai"],
    reference: "2 Samuel 19:13; 20:9-10",
    explanation: "David offered Amasa command of his army in place of Joab; Joab met him, grabbed him by the beard with his right hand as if to kiss him, and struck him in the stomach.",
  },
  {
    level: 20, index: 4,
    text: "Which son of Jonathan was lame in both feet because his nurse dropped him when fleeing news of Saul's death, and was granted a seat at David's table?",
    answer: "Mephibosheth (Merib-baal)",
    distractors: ["Michal", "Ish-bosheth", "Mica"],
    reference: "2 Samuel 4:4; 9:6-13",
    explanation: "Mephibosheth was five years old when news came from Jezreel; his nurse fled and he fell, becoming lame; David showed him kindness for Jonathan's sake.",
  },
  {
    level: 20, index: 5,
    text: "Which prophet from Shiloh met Jeroboam on the road outside Jerusalem, tore his new garment into twelve pieces, and gave him ten?",
    answer: "Ahijah the Shilonite",
    distractors: ["Shemaiah", "Nathan", "Micaiah"],
    reference: "1 Kings 11:29-31",
    explanation: "The prophet Ahijah the Shilonite laid hold of his new cloak, tore it into twelve pieces, and said to Jeroboam: 'Take ten pieces for yourself, for thus says the LORD.'",
  },

  // ==========================================
  // STAGE 5: DIVIDED KINGDOM & ELIJAH/ELISHA (LEVELS 21–25)
  // ==========================================

  // LEVEL 21: Kings of Judah & Israel (kings-evaluation, 30s)
  {
    level: 21, index: 1,
    text: "Which prophet confronted King Rehoboam and the house of Judah as they prepared 180,000 men, saying, 'This thing is from Me'?",
    answer: "Shemaiah",
    distractors: ["Ahijah", "Iddo", "Hanani"],
    reference: "1 Kings 12:22-24; 2 Chronicles 11:1-4",
    explanation: "Shemaiah the man of God warned Rehoboam and Judah not to go up or fight against their brothers the house of Israel.",
  },
  {
    level: 21, index: 2,
    text: "Which king of Judah deposed his own grandmother Maacah from her royal status because she had made an obscene image for Asherah?",
    answer: "Asa",
    distractors: ["Rehoboam", "Abijam", "Jehoshaphat"],
    reference: "1 Kings 15:11-13; 2 Chronicles 15:16",
    explanation: "King Asa removed Maacah his grandmother from being queen mother because she made an abominable idol for Asherah, cutting down her idol and burning it at the brook Kidron.",
  },
  {
    level: 21, index: 3,
    text: "Which military commander assassinated King Nadab son of Jeroboam during the siege of Gibbethon, wiping out the entire lineage of Jeroboam?",
    answer: "Baasha son of Ahijah",
    distractors: ["Zimri", "Omri", "Jehu"],
    reference: "1 Kings 15:27-29",
    explanation: "Baasha of the tribe of Issachar conspired against Nadab, struck him at the Philistine city of Gibbethon, and reigned in Tirzah twenty-four years.",
  },
  {
    level: 21, index: 4,
    text: "Which commander of half of King Elah’s chariots reigned for only seven days in Tirzah before burning the royal palace over himself?",
    answer: "Zimri",
    distractors: ["Tibni", "Omri", "Baasha"],
    reference: "1 Kings 16:9-18",
    explanation: "Zimri killed King Elah while he was drinking himself drunk at Tirzah; when Omri besieged the city, Zimri entered the royal citadel and burned it over himself.",
  },
  {
    level: 21, index: 5,
    text: "Which man of Bethel rebuilt Jericho at the cost of his firstborn son Abiram and his youngest son Segub, fulfilling the ancient curse of Joshua?",
    answer: "Hiel of Bethel",
    distractors: ["Naboth", "Ethbaal", "Tibni"],
    reference: "1 Kings 16:34; Joshua 6:26",
    explanation: "In Ahab’s days, Hiel of Bethel laid the foundation of Jericho with the loss of Abiram his firstborn and set up its gates with the loss of Segub, fulfilling Joshua 6:26.",
  },

  // LEVEL 22: Elijah & Carmel Prophets (progressive-clues, 30s)
  {
    level: 22, index: 1,
    text: "Identify this faithful royal steward from the progressive clues:",
    answer: "Obadiah",
    distractors: ["Micaiah", "Naboth", "Elisha"],
    reference: "1 Kings 18:3-16",
    explanation: "Obadiah was over Ahab's palace and feared the LORD greatly, hiding one hundred prophets in caves by fifties and feeding them with bread and water.",
    clues: [
      "Clue 1: Chief household manager and royal administrator in King Ahab's palace.",
      "Clue 2: Feared the LORD greatly since his youth, even during widespread state apostasy.",
      "Clue 3: Hid one hundred prophets of the Lord in two separate caves by fifties and secretly sustained them with bread and water."
    ],
  },
  {
    level: 22, index: 2,
    text: "Identify this fearless prophet from the progressive clues:",
    answer: "Micaiah son of Imlah",
    distractors: ["Zedekiah son of Chenaanah", "Hanani", "Ahijah"],
    reference: "1 Kings 22:7-28",
    explanation: "Micaiah son of Imlah told Ahab that he saw Israel scattered like sheep without a shepherd; he was slapped by Zedekiah and imprisoned on bread and water.",
    clues: [
      "Clue 1: A prophet of the LORD despised by King Ahab because he never prophesied good concerning him, but always evil.",
      "Clue 2: Saw a vision of a lying spirit dispatched to deceive Ahab's four hundred court prophets.",
      "Clue 3: Struck on the cheek by Zedekiah son of Chenaanah and consigned to prison on rations of affliction."
    ],
  },
  {
    level: 22, index: 3,
    text: "Identify this righteous vineyard owner from the progressive clues:",
    answer: "Naboth the Jezreelite",
    distractors: ["Hiel", "Obadiah", "Jehu"],
    reference: "1 Kings 21:1-16",
    explanation: "Naboth owned an ancestral vineyard beside Ahab's palace in Jezreel; he refused to trade it, and Queen Jezebel arranged for false witnesses to stone him.",
    clues: [
      "Clue 1: Owned a cherished family vineyard adjoining King Ahab’s royal winter palace in Jezreel.",
      "Clue 2: Refused to sell his land or trade it for another, saying, 'The LORD forbid that I should give you the inheritance of my fathers.'",
      "Clue 3: Condemned on trumped-up charges of blasphemy orchestrated by Jezebel and stoned to death outside the city."
    ],
  },
  {
    level: 22, index: 4,
    text: "Identify this Sidonian princess and queen from the progressive clues:",
    answer: "Jezebel",
    distractors: ["Athaliah", "Maacah", "Gomer"],
    reference: "1 Kings 16:31; 18:4; 2 Kings 9:30-37",
    explanation: "Jezebel was daughter of Ethbaal king of the Sidonians, married Ahab, sponsored 450 prophets of Baal, and was thrown from a window in Jezreel.",
    clues: [
      "Clue 1: Daughter of Ethbaal, priest-king of the Sidonians, who married King Ahab of Israel.",
      "Clue 2: Instituted state-sponsored worship of Baal and Asherah, feeding eight hundred and fifty pagan prophets at her royal table.",
      "Clue 3: Defenestrated from her palace window in Jezreel at Jehu’s command, her remains consumed by dogs."
    ],
  },
  {
    level: 22, index: 5,
    text: "Identify this chariot officer and avenger from the progressive clues:",
    answer: "Jehu son of Nimshi",
    distractors: ["Bidkar", "Omri", "Baasha"],
    reference: "2 Kings 9:1-26; 10:1-28",
    explanation: "Jehu was anointed by an emissary of Elisha at Ramoth-gilead, drove his chariot furiously, assassinated Joram and Ahaziah, and wiped out Baal worship.",
    clues: [
      "Clue 1: A military commander at Ramoth-gilead anointed privately with a flask of oil by a young prophet.",
      "Clue 2: Renowned by watchmen for driving his royal war chariot furiously like a madman.",
      "Clue 3: Shot King Joram through the heart with an arrow and ordered his body cast into the field of Naboth."
    ],
  },

  // LEVEL 23: Elisha’s Double Portion (miracles-and-witnesses, 30s)
  {
    level: 23, index: 1,
    text: "Which prominent woman of Shunem built an upper room furnished with a bed, table, chair, and lampstand so Elisha could stay whenever he visited?",
    answer: "The Shunammite woman",
    distractors: ["The widow of Zarephath", "Huldah", "Athaliah"],
    reference: "2 Kings 4:8-10",
    explanation: "The Shunammite woman perceived that Elisha was a holy man of God and made a roof chamber for him; her son was later restored from death through Elisha's prayer.",
  },
  {
    level: 23, index: 2,
    text: "Which greedy servant of Elisha ran after Naaman to demand two talents of silver and garments, and was struck with Naaman’s leprosy?",
    answer: "Gehazi",
    distractors: ["Bidkar", "Hazael", "Obadiah"],
    reference: "2 Kings 5:20-27",
    explanation: "Gehazi swore by the LORD to take something from Naaman; Elisha rebuked him and declared that Naaman’s leprosy would cling to him and his descendants forever.",
  },
  {
    level: 23, index: 3,
    text: "Which Aramean courtier smothered King Ben-hadad with a wet thick cloth upon hearing Elisha’s prophecy and usurped the throne of Syria?",
    answer: "Hazael",
    distractors: ["Naaman", "Rezin", "Ben-hadad II"],
    reference: "2 Kings 8:7-15",
    explanation: "Hazael went to Elisha to ask if Ben-hadad would recover; Elisha wept knowing the evil Hazael would do. The next day Hazael took a bed-mat soaked in water and smothered the king.",
  },
  {
    level: 23, index: 4,
    text: "Which commander of the Syrian army dipped in the Jordan River seven times at Elisha's word, his flesh restored like that of a little child?",
    answer: "Naaman",
    distractors: ["Hazael", "Ben-hadad", "Rezin"],
    reference: "2 Kings 5:1-14",
    explanation: "Naaman was a great man and honorable commander, but he was a leper; he dipped in the Jordan seven times and was completely cleansed.",
  },
  {
    level: 23, index: 5,
    text: "Which young captive from Israel urged Naaman’s wife that if her master were with the prophet in Samaria, he would be healed of his leprosy?",
    answer: "The little Israelite maid",
    distractors: ["The Shunammite woman", "Jochebed", "Shiphrah"],
    reference: "2 Kings 5:2-3",
    explanation: "The Syrians had brought back captive from Israel a little girl who waited on Naaman’s wife and told her of the prophet in Samaria.",
  },

  // LEVEL 24: Queens, Conspirators & Priests (royal-alliances, 30s)
  {
    level: 24, index: 1,
    text: "Which daughter of Ahab and Jezebel seized the throne of Judah upon the death of her son Ahaziah, attempting to exterminate all royal heirs of the house of David?",
    answer: "Athaliah",
    distractors: ["Jehosheba", "Maacah", "Huldah"],
    reference: "2 Kings 11:1-3; 2 Chronicles 22:10-12",
    explanation: "Athaliah saw her son Ahaziah was dead and destroyed all the royal seed of the house of Judah, reigning over the land for six years.",
  },
  {
    level: 24, index: 2,
    text: "Which brave princess, daughter of King Joram and wife of Jehoiada the priest, stole away infant prince Joash from among the princes who were being slain?",
    answer: "Jehosheba (Jehoshabeath)",
    distractors: ["Athaliah", "Maacah", "Huldah"],
    reference: "2 Kings 11:2; 2 Chronicles 22:11",
    explanation: "Jehosheba took Joash the son of Ahaziah and hid him and his nurse in a bedroom in the house of the LORD for six years while Athaliah reigned.",
  },
  {
    level: 24, index: 3,
    text: "Which high priest orchestrated the armed coronation of seven-year-old Joash in the temple and directed the execution of Athaliah?",
    answer: "Jehoiada",
    distractors: ["Zadok", "Hilkiah", "Azariah"],
    reference: "2 Kings 11:4-16",
    explanation: "Jehoiada brought out the king’s son, put the crown on him, gave him the Testimony, anointed him, and commanded the guards to put Athaliah to death at the palace horse gate.",
  },
  {
    level: 24, index: 4,
    text: "Which son of Jehoiada the priest was filled with the Spirit, rebuked the apostasy of Judah, and was stoned in the temple court by order of King Joash?",
    answer: "Zechariah son of Jehoiada",
    distractors: ["Urijah", "Hanani", "Jahaziel"],
    reference: "2 Chronicles 24:20-22",
    explanation: "Zechariah son of Jehoiada stood above the people and rebuked their forsaking of God; King Joash forgot the kindness of Jehoiada and commanded him to be stoned in the temple courtyard.",
  },
  {
    level: 24, index: 5,
    text: "Which nomadic Rechabite leader did Jehu invite up into his chariot, asking, 'Is your heart right, as my heart is toward your heart? ... Come see my zeal for the LORD'?",
    answer: "Jehonadab (Jonadab) son of Rechab",
    distractors: ["Bidkar", "Hazael", "Obadiah"],
    reference: "2 Kings 10:15-16; Jeremiah 35:6",
    explanation: "Jehu met Jehonadab son of Rechab coming to meet him; he greeted him, gave him his hand, took him into his chariot, and went to slaughter the priests of Baal.",
  },

  // LEVEL 25: Divided Monarchy Stage Boss (boss-quick-discernment, 25s)
  {
    level: 25, index: 1,
    text: "Which seer rebuked King Asa for relying on the army of the king of Syria instead of the LORD, declaring, 'The eyes of the LORD run to and fro throughout the whole earth'?",
    answer: "Hanani the seer",
    distractors: ["Jehu son of Hanani", "Shemaiah", "Micaiah son of Imlah"],
    reference: "2 Chronicles 16:7-10",
    explanation: "Hanani the seer confronted Asa; Asa became enraged with the seer and put him in the stocks in prison.",
  },
  {
    level: 25, index: 2,
    text: "Which Levite of the sons of Asaph was moved by the Spirit in the midst of the assembly before Jehoshaphat, proclaiming, 'Do not be afraid... for the battle is not yours, but God’s'?",
    answer: "Jahaziel son of Zechariah",
    distractors: ["Eliezer son of Dodavahu", "Ethan the Ezrahite", "Heman the singer"],
    reference: "2 Chronicles 20:14-17",
    explanation: "Jahaziel, a Levite of the sons of Asaph, spoke in the temple assembly, directing the people to march against the Moabite-Ammonite alliance at the Ascent of Ziz without fighting.",
  },
  {
    level: 25, index: 3,
    text: "Which prophet from Mareshah rebuked King Jehoshaphat for allying with wicked King Ahaziah of Israel to build merchant ships at Ezion-geber?",
    answer: "Eliezer son of Dodavahu",
    distractors: ["Hanani", "Micaiah", "Jehu son of Hanani"],
    reference: "2 Chronicles 20:35-37",
    explanation: "Eliezer son of Dodavahu prophesied against Jehoshaphat: 'Because you have allied yourself with Ahaziah, the LORD has broken what you have made,' and the ships wrecked.",
  },
  {
    level: 25, index: 4,
    text: "Which high priest led eighty valiant priests into the temple to confront King Uzziah when the king attempted to burn incense on the golden altar?",
    answer: "Azariah",
    distractors: ["Hilkiah", "Jehoiada", "Zadok"],
    reference: "2 Chronicles 26:16-20",
    explanation: "Azariah the priest went in after Uzziah with eighty priests of the LORD, valiant men, who stood up against the king and drove him out when leprosy broke out on his forehead.",
  },
  {
    level: 25, index: 5,
    text: "Which king of Israel formed a military coalition with Rezin king of Syria against King Ahaz of Judah, invading Jerusalem in the Syro-Ephraimite war?",
    answer: "Pekah son of Remaliah",
    distractors: ["Pekahiah", "Hoshea", "Menahem"],
    reference: "2 Kings 15:37; 16:5; Isaiah 7:1-6",
    explanation: "Rezin king of Syria and Pekah son of Remaliah king of Israel marched against Jerusalem to conquer it and set up the son of Tabeel as king, prompting Isaiah's Immanuel prophecy.",
  },
];
