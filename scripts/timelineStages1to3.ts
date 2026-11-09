// Bible Timeline — Stages 1–3 (Levels 1–15, 75 Questions)
// Strictly verified biblical chronological sequences with exact Scripture references.

export interface RawTimelinePuzzle {
  level: number;
  challengeIndex: number;
  stage: number;
  stageTitle: string;
  levelTitle: string;
  mode: string;
  questionText: string;
  difficulty: string;
  timerSeconds: number;
  events: [string, string][]; // [title, ref] in correct chronological order
}

export const TIMELINE_STAGES_1_TO_3: RawTimelinePuzzle[] = [
  {
    "level": 1,
    "challengeIndex": 1,
    "stage": 1,
    "stageTitle": "First Steps in Bible History",
    "levelTitle": "First Events",
    "mode": "Primeval History",
    "questionText": "Arrange these foundational events from Genesis in chronological order:",
    "difficulty": "Accessible",
    "timerSeconds": 30,
    "events": [
      [
        "Creation of the heavens and the earth",
        "Genesis 1:1"
      ],
      [
        "The fall of man in the Garden of Eden",
        "Genesis 3:6-7"
      ],
      [
        "Cain slays his brother Abel",
        "Genesis 4:8"
      ],
      [
        "Noah enters the Ark with his family",
        "Genesis 7:7"
      ]
    ]
  },
  {
    "level": 1,
    "challengeIndex": 2,
    "stage": 1,
    "stageTitle": "First Steps in Bible History",
    "levelTitle": "First Events",
    "mode": "Early Genesis",
    "questionText": "Arrange these ancient biblical milestones in chronological order:",
    "difficulty": "Accessible",
    "timerSeconds": 30,
    "events": [
      [
        "God establishes the covenant with Noah after the Flood",
        "Genesis 9:11-13"
      ],
      [
        "The building and confusion of tongues at Tower of Babel",
        "Genesis 11:4-9"
      ],
      [
        "Abram called to leave Ur of the Chaldees",
        "Genesis 12:1-4"
      ],
      [
        "Melchizedek blesses Abram after the rescue of Lot",
        "Genesis 14:18-20"
      ]
    ]
  },
  {
    "level": 1,
    "challengeIndex": 3,
    "stage": 1,
    "stageTitle": "First Steps in Bible History",
    "levelTitle": "First Events",
    "mode": "The Life of Christ",
    "questionText": "Arrange these events in the early life and ministry of Jesus in chronological order:",
    "difficulty": "Accessible",
    "timerSeconds": 30,
    "events": [
      [
        "The angel Gabriel appears to Mary in Nazareth",
        "Luke 1:26-31"
      ],
      [
        "The birth of Jesus in Bethlehem of Judea",
        "Luke 2:4-7"
      ],
      [
        "The baptism of Jesus in the Jordan River by John",
        "Matthew 3:13-17"
      ],
      [
        "Jesus calls His first disciples beside Sea of Galilee",
        "Matthew 4:18-22"
      ]
    ]
  },
  {
    "level": 1,
    "challengeIndex": 4,
    "stage": 1,
    "stageTitle": "First Steps in Bible History",
    "levelTitle": "First Events",
    "mode": "Exodus Milestones",
    "questionText": "Arrange these pivotal events from the Exodus in chronological order:",
    "difficulty": "Accessible",
    "timerSeconds": 30,
    "events": [
      [
        "Moses encounters God at the burning bush in Horeb",
        "Exodus 3:2-5"
      ],
      [
        "The first Passover instituted on night of the tenth plague",
        "Exodus 12:1-13, 29"
      ],
      [
        "Israel crosses through the midst of the Red Sea on dry land",
        "Exodus 14:21-22"
      ],
      [
        "God gives the Ten Commandments upon Mount Sinai",
        "Exodus 20:1-17"
      ]
    ]
  },
  {
    "level": 1,
    "challengeIndex": 5,
    "stage": 1,
    "stageTitle": "First Steps in Bible History",
    "levelTitle": "First Events",
    "mode": "Gospel Finale",
    "questionText": "Arrange these final events of Jesus' earthly ministry in chronological order:",
    "difficulty": "Accessible",
    "timerSeconds": 30,
    "events": [
      [
        "The Triumphal Entry into Jerusalem riding an ass",
        "Matthew 21:7-11"
      ],
      [
        "The Last Supper with the Twelve in the upper room",
        "Matthew 26:26-29"
      ],
      [
        "The crucifixion and burial of Jesus Christ",
        "Matthew 27:35, 59-60"
      ],
      [
        "The bodily resurrection of Jesus on the third day",
        "Matthew 28:5-7"
      ]
    ]
  },
  {
    "level": 2,
    "challengeIndex": 1,
    "stage": 1,
    "stageTitle": "First Steps in Bible History",
    "levelTitle": "Patriarch Timeline",
    "mode": "Abraham's Journey",
    "questionText": "Arrange these major events from the life of Abraham in chronological order:",
    "difficulty": "Moderate",
    "timerSeconds": 30,
    "events": [
      [
        "God promises Abraham an heir from his own body",
        "Genesis 15:4-5"
      ],
      [
        "Ishmael is born unto Abram by Hagar",
        "Genesis 16:15"
      ],
      [
        "Destruction of Sodom and Gomorrah with fire and brimstone",
        "Genesis 19:24-25"
      ],
      [
        "Abraham offers Isaac upon the altar on Mount Moriah",
        "Genesis 22:9-12"
      ]
    ]
  },
  {
    "level": 2,
    "challengeIndex": 2,
    "stage": 1,
    "stageTitle": "First Steps in Bible History",
    "levelTitle": "Patriarch Timeline",
    "mode": "Isaac & Sons",
    "questionText": "Arrange these moments in the story of Isaac and his sons in chronological order:",
    "difficulty": "Moderate",
    "timerSeconds": 30,
    "events": [
      [
        "Abraham's servant finds Rebekah at the well in Nahor",
        "Genesis 24:15-20"
      ],
      [
        "Rebekah gives birth to twin brothers Esau and Jacob",
        "Genesis 25:24-26"
      ],
      [
        "Esau sells his birthright to Jacob for red pottage",
        "Genesis 25:31-34"
      ],
      [
        "Jacob receives the firstborn blessing disguised in Esau's clothes",
        "Genesis 27:22-29"
      ]
    ]
  },
  {
    "level": 2,
    "challengeIndex": 3,
    "stage": 1,
    "stageTitle": "First Steps in Bible History",
    "levelTitle": "Patriarch Timeline",
    "mode": "Jacob's Sojourn",
    "questionText": "Arrange these milestones from Jacob's life in chronological order:",
    "difficulty": "Moderate",
    "timerSeconds": 30,
    "events": [
      [
        "Jacob has vision of the ladder reaching to heaven at Bethel",
        "Genesis 28:12-19"
      ],
      [
        "Jacob serves Laban seven years for Rachel but receives Leah",
        "Genesis 29:20-25"
      ],
      [
        "Jacob wrestles with the angel until dawn at Peniel",
        "Genesis 32:24-30"
      ],
      [
        "Jacob meets and reconciles with his brother Esau",
        "Genesis 33:1-4"
      ]
    ]
  },
  {
    "level": 2,
    "challengeIndex": 4,
    "stage": 1,
    "stageTitle": "First Steps in Bible History",
    "levelTitle": "Patriarch Timeline",
    "mode": "Joseph's Journey",
    "questionText": "Arrange these events in the life of Joseph in chronological order:",
    "difficulty": "Moderate",
    "timerSeconds": 30,
    "events": [
      [
        "Joseph receives the coat of many colors and dreams of sheaves",
        "Genesis 37:3-7"
      ],
      [
        "Joseph sold into slavery and bought by Potiphar in Egypt",
        "Genesis 37:28; 39:1"
      ],
      [
        "Joseph interprets Pharaoh's dreams of seven fat and lean kine",
        "Genesis 41:25-32"
      ],
      [
        "Joseph reveals his true identity to his weeping brothers",
        "Genesis 45:1-4"
      ]
    ]
  },
  {
    "level": 2,
    "challengeIndex": 5,
    "stage": 1,
    "stageTitle": "First Steps in Bible History",
    "levelTitle": "Patriarch Timeline",
    "mode": "Patriarchal Close",
    "questionText": "Arrange these concluding events of the patriarchal era in chronological order:",
    "difficulty": "Moderate",
    "timerSeconds": 25,
    "events": [
      [
        "Jacob relocates with all his household into the land of Egypt",
        "Genesis 46:5-7"
      ],
      [
        "Jacob blesses Ephraim and Manasseh crossing his hands",
        "Genesis 48:13-14"
      ],
      [
        "Jacob dies and is buried in the cave of Machpelah",
        "Genesis 49:33; 50:13"
      ],
      [
        "Joseph dies in Egypt making mention of the departing of Israel",
        "Genesis 50:24-26; Hebrews 11:22"
      ]
    ]
  },
  {
    "level": 3,
    "challengeIndex": 1,
    "stage": 1,
    "stageTitle": "First Steps in Bible History",
    "levelTitle": "Moses' Journey",
    "mode": "Early Moses",
    "questionText": "Arrange these events from Moses' youth and early life in chronological order:",
    "difficulty": "Moderate",
    "timerSeconds": 30,
    "events": [
      [
        "Infant Moses hidden in ark of bulrushes by the river's brink",
        "Exodus 2:3"
      ],
      [
        "Pharaoh's daughter finds and adopts Moses as her son",
        "Exodus 2:5-10"
      ],
      [
        "Moses slays the Egyptian taskmaster and flees to Midian",
        "Exodus 2:11-15"
      ],
      [
        "Moses marries Zipporah daughter of Reuel priest of Midian",
        "Exodus 2:21"
      ]
    ]
  },
  {
    "level": 3,
    "challengeIndex": 2,
    "stage": 1,
    "stageTitle": "First Steps in Bible History",
    "levelTitle": "Moses' Journey",
    "mode": "The Plagues of Egypt",
    "questionText": "Arrange these plagues of Egypt in the order they occurred:",
    "difficulty": "Moderate",
    "timerSeconds": 30,
    "events": [
      [
        "The waters of the Nile turned into blood",
        "Exodus 7:20"
      ],
      [
        "The plague of frogs covering all the land of Egypt",
        "Exodus 8:6"
      ],
      [
        "The plague of thunder and hail mingled with fire",
        "Exodus 9:23-24"
      ],
      [
        "The plague of darkness over Egypt for three days",
        "Exodus 10:22-23"
      ]
    ]
  },
  {
    "level": 3,
    "challengeIndex": 3,
    "stage": 1,
    "stageTitle": "First Steps in Bible History",
    "levelTitle": "Moses' Journey",
    "mode": "Wilderness Beginnings",
    "questionText": "Arrange these early wilderness events in chronological order:",
    "difficulty": "Moderate",
    "timerSeconds": 30,
    "events": [
      [
        "Bitter waters of Marah sweetened by casting in a tree",
        "Exodus 15:23-25"
      ],
      [
        "God first sends manna and quails in the Wilderness of Sin",
        "Exodus 16:13-15"
      ],
      [
        "Water flows from the rock struck by Moses in Horeb (Rephidim)",
        "Exodus 17:6"
      ],
      [
        "Aaron and Hur hold up Moses' arms during battle with Amalek",
        "Exodus 17:10-12"
      ]
    ]
  },
  {
    "level": 3,
    "challengeIndex": 4,
    "stage": 1,
    "stageTitle": "First Steps in Bible History",
    "levelTitle": "Moses' Journey",
    "mode": "Sinai Tabernacle",
    "questionText": "Arrange these events at Mount Sinai in chronological order:",
    "difficulty": "Moderate",
    "timerSeconds": 30,
    "events": [
      [
        "Moses ascends Mount Sinai to receive the two tables of stone",
        "Exodus 24:12-18"
      ],
      [
        "Israel worships the golden calf made by Aaron",
        "Exodus 32:4-6"
      ],
      [
        "Moses breaks the two tables of stone at foot of the mount",
        "Exodus 32:19"
      ],
      [
        "The Tabernacle is reared up and filled with the glory of God",
        "Exodus 40:17, 34-35"
      ]
    ]
  },
  {
    "level": 3,
    "challengeIndex": 5,
    "stage": 1,
    "stageTitle": "First Steps in Bible History",
    "levelTitle": "Moses' Journey",
    "mode": "Moses' Final Days",
    "questionText": "Arrange these final milestones in the leadership of Moses in chronological order:",
    "difficulty": "Difficult",
    "timerSeconds": 25,
    "events": [
      [
        "Twelve spies sent from Kadesh-barnea to search Canaan",
        "Numbers 13:1-3, 26"
      ],
      [
        "Moses strikes the rock at Meribah in anger instead of speaking",
        "Numbers 20:8-12"
      ],
      [
        "Moses lifts up the brazen serpent upon a pole for bitten Israelites",
        "Numbers 21:8-9"
      ],
      [
        "Moses views the Promised Land from Mount Nebo and dies",
        "Deuteronomy 34:1-5"
      ]
    ]
  },
  {
    "level": 4,
    "challengeIndex": 1,
    "stage": 1,
    "stageTitle": "First Steps in Bible History",
    "levelTitle": "The Life of Jesus",
    "mode": "Ministry Beginnings",
    "questionText": "Arrange these early events in Jesus' life in chronological order:",
    "difficulty": "Moderate",
    "timerSeconds": 30,
    "events": [
      [
        "Wise Men visit infant Jesus and offer gold, frankincense, and myrrh",
        "Matthew 2:1-11"
      ],
      [
        "Twelve-year-old Jesus in the temple among the doctors",
        "Luke 2:42-49"
      ],
      [
        "Jesus tempted forty days in the wilderness by the devil",
        "Matthew 4:1-11"
      ],
      [
        "Jesus turns water into wine at the marriage feast in Cana",
        "John 2:1-11"
      ]
    ]
  },
  {
    "level": 4,
    "challengeIndex": 2,
    "stage": 1,
    "stageTitle": "First Steps in Bible History",
    "levelTitle": "The Life of Jesus",
    "mode": "Galilean Ministry",
    "questionText": "Arrange these events from Jesus' Galilean ministry in chronological order:",
    "difficulty": "Moderate",
    "timerSeconds": 30,
    "events": [
      [
        "Jesus delivers the Sermon on the Mount",
        "Matthew 5:1-2"
      ],
      [
        "Jesus calms the storm on the Sea of Galilee",
        "Matthew 8:23-27"
      ],
      [
        "Jesus feeds the five thousand with five loaves and two fishes",
        "Matthew 14:15-21"
      ],
      [
        "The Transfiguration on the high mountain before Peter, James, and John",
        "Matthew 17:1-2"
      ]
    ]
  },
  {
    "level": 4,
    "challengeIndex": 3,
    "stage": 1,
    "stageTitle": "First Steps in Bible History",
    "levelTitle": "The Life of Jesus",
    "mode": "Later Ministry",
    "questionText": "Arrange these events in the later ministry of Jesus in chronological order:",
    "difficulty": "Moderate",
    "timerSeconds": 30,
    "events": [
      [
        "Jesus raises Lazarus from the dead at Bethany after four days",
        "John 11:43-44"
      ],
      [
        "Mary of Bethany anoints Jesus' feet with costly spikenard",
        "John 12:1-3"
      ],
      [
        "Jesus washes the feet of the disciples at the Last Supper",
        "John 13:4-5"
      ],
      [
        "Jesus agonizes in prayer in the Garden of Gethsemane",
        "Matthew 26:36-46"
      ]
    ]
  },
  {
    "level": 4,
    "challengeIndex": 4,
    "stage": 1,
    "stageTitle": "First Steps in Bible History",
    "levelTitle": "The Life of Jesus",
    "mode": "The Passion Narrative",
    "questionText": "Arrange these events of Jesus' trial and crucifixion in chronological order:",
    "difficulty": "Moderate",
    "timerSeconds": 30,
    "events": [
      [
        "Judas betrays Jesus with a kiss in Gethsemane",
        "Matthew 26:47-49"
      ],
      [
        "Peter denies Jesus three times before the cock crows",
        "Matthew 26:69-75"
      ],
      [
        "Pontius Pilate releases Barabbas and sentences Jesus",
        "Matthew 27:26"
      ],
      [
        "Jesus is laid in Joseph of Arimathaea's new rock tomb",
        "Matthew 27:57-60"
      ]
    ]
  },
  {
    "level": 4,
    "challengeIndex": 5,
    "stage": 1,
    "stageTitle": "First Steps in Bible History",
    "levelTitle": "The Life of Jesus",
    "mode": "Resurrection to Ascension",
    "questionText": "Arrange these post-resurrection events in chronological order:",
    "difficulty": "Difficult",
    "timerSeconds": 25,
    "events": [
      [
        "Jesus appears to Mary Magdalene outside the garden tomb",
        "John 20:14-16"
      ],
      [
        "Jesus walks and explains the Scriptures to two disciples on road to Emmaus",
        "Luke 24:13-27"
      ],
      [
        "Thomas touches Jesus' hands and side declaring \"My Lord and my God\"",
        "John 20:26-28"
      ],
      [
        "Jesus ascends into heaven from Mount of Olives",
        "Acts 1:9-12"
      ]
    ]
  },
  {
    "level": 5,
    "challengeIndex": 1,
    "stage": 1,
    "stageTitle": "First Steps in Bible History",
    "levelTitle": "Mixed Bible Timeline",
    "mode": "Epoch Sequencing",
    "questionText": "Arrange these foundational biblical eras from earliest to latest:",
    "difficulty": "Accessible",
    "timerSeconds": 30,
    "events": [
      [
        "The Great Flood of Noah",
        "Genesis 7:17-24"
      ],
      [
        "The Exodus of Israel from Egypt",
        "Exodus 14:30-31"
      ],
      [
        "The reign of King Solomon over united Israel",
        "1 Kings 4:1"
      ],
      [
        "The preaching of John the Baptist in wilderness of Judea",
        "Matthew 3:1-2"
      ]
    ]
  },
  {
    "level": 5,
    "challengeIndex": 2,
    "stage": 1,
    "stageTitle": "First Steps in Bible History",
    "levelTitle": "Mixed Bible Timeline",
    "mode": "Epoch Sequencing",
    "questionText": "Arrange these major biblical milestones in chronological order:",
    "difficulty": "Moderate",
    "timerSeconds": 30,
    "events": [
      [
        "Abraham departs Haran to enter Canaan",
        "Genesis 12:4-5"
      ],
      [
        "Joshua leads Israel across the dry riverbed of Jordan",
        "Joshua 3:14-17"
      ],
      [
        "David slays Goliath in the Valley of Elah",
        "1 Samuel 17:48-50"
      ],
      [
        "The Day of Pentecost and outpouring of the Holy Ghost",
        "Acts 2:1-4"
      ]
    ]
  },
  {
    "level": 5,
    "challengeIndex": 3,
    "stage": 1,
    "stageTitle": "First Steps in Bible History",
    "levelTitle": "Mixed Bible Timeline",
    "mode": "Epoch Sequencing",
    "questionText": "Arrange these monumental biblical sanctuaries in chronological order:",
    "difficulty": "Moderate",
    "timerSeconds": 30,
    "events": [
      [
        "Erection of Moses' Tabernacle in the wilderness",
        "Exodus 40:17"
      ],
      [
        "Dedication of Solomon's Temple with descent of divine glory",
        "1 Kings 8:10-11"
      ],
      [
        "Zerubbabel rebuilds the second Temple after return from Babylon",
        "Ezra 6:15"
      ],
      [
        "Jesus cleanses Herod's Temple driving out moneychangers",
        "Matthew 21:12-13"
      ]
    ]
  },
  {
    "level": 5,
    "challengeIndex": 4,
    "stage": 1,
    "stageTitle": "First Steps in Bible History",
    "levelTitle": "Mixed Bible Timeline",
    "mode": "Epoch Sequencing",
    "questionText": "Arrange these momentous divine deliverances in chronological order:",
    "difficulty": "Moderate",
    "timerSeconds": 30,
    "events": [
      [
        "Israel delivered from Pharaoh's chariots at the Red Sea",
        "Exodus 14:27-30"
      ],
      [
        "Gideon's 300 defeat the host of Midian with trumpets and pitchers",
        "Judges 7:19-22"
      ],
      [
        "Daniel delivered unharmed from the lions' den under Darius",
        "Daniel 6:21-23"
      ],
      [
        "Peter miraculously led out of Herod's prison by an angel",
        "Acts 12:7-10"
      ]
    ]
  },
  {
    "level": 5,
    "challengeIndex": 5,
    "stage": 1,
    "stageTitle": "First Steps in Bible History",
    "levelTitle": "Mixed Bible Timeline",
    "mode": "Epoch Sequencing",
    "questionText": "Stage 1 Finale: Arrange these overarching biblical dispensations in chronological order:",
    "difficulty": "Mini-boss",
    "timerSeconds": 25,
    "events": [
      [
        "God calls Abraham establishing the covenant of circumcision",
        "Genesis 17:1-10"
      ],
      [
        "The Law given through Moses at Mount Sinai",
        "Exodus 20:1-17"
      ],
      [
        "The Babylonian captivity and destruction of Jerusalem by Nebuchadnezzar",
        "2 Kings 25:8-11"
      ],
      [
        "Apostle John receives Revelation on the Isle of Patmos",
        "Revelation 1:9-10"
      ]
    ]
  },
  {
    "level": 6,
    "challengeIndex": 1,
    "stage": 2,
    "stageTitle": "Leaders and Kingdoms",
    "levelTitle": "The Judges",
    "mode": "Judges Chronology",
    "questionText": "Arrange these early judges of Israel in the chronological order of their rule:",
    "difficulty": "Moderate",
    "timerSeconds": 30,
    "events": [
      [
        "Othniel son of Kenaz delivers Israel from King of Mesopotamia",
        "Judges 3:9-11"
      ],
      [
        "Ehud the left-handed Benjamite slays Eglon king of Moab",
        "Judges 3:15-22"
      ],
      [
        "Deborah and Barak defeat Sisera at the River Kishon",
        "Judges 4:14-16"
      ],
      [
        "Gideon destroys the altar of Baal and routes the Midianites",
        "Judges 6:27; 7:21"
      ]
    ]
  },
  {
    "level": 6,
    "challengeIndex": 2,
    "stage": 2,
    "stageTitle": "Leaders and Kingdoms",
    "levelTitle": "The Judges",
    "mode": "Judges Chronology",
    "questionText": "Arrange these subsequent judges of Israel in the chronological order they judged:",
    "difficulty": "Moderate",
    "timerSeconds": 30,
    "events": [
      [
        "Gideon refuses kingship and judges Israel forty years",
        "Judges 8:22-28"
      ],
      [
        "Abimelech usurps power and slays his 70 brothers at Ophrah",
        "Judges 9:1-5"
      ],
      [
        "Jephthah delivers Gilead from Ammonites following solemn vow",
        "Judges 11:32-34"
      ],
      [
        "Samson begins judging Israel against the Philistines",
        "Judges 13:24-25; 15:20"
      ]
    ]
  },
  {
    "level": 6,
    "challengeIndex": 3,
    "stage": 2,
    "stageTitle": "Leaders and Kingdoms",
    "levelTitle": "The Judges",
    "mode": "Samson's Chronology",
    "questionText": "Arrange these events from Samson's life in chronological order:",
    "difficulty": "Moderate",
    "timerSeconds": 30,
    "events": [
      [
        "Samson kills a young lion with bare hands on way to Timnath",
        "Judges 14:5-6"
      ],
      [
        "Samson slays 1,000 Philistines with the jawbone of an ass",
        "Judges 15:15-16"
      ],
      [
        "Samson carries away the city gates of Gaza to top of hill",
        "Judges 16:3"
      ],
      [
        "Samson pulls down the pillars of Dagon's temple dying with Philistines",
        "Judges 16:29-30"
      ]
    ]
  },
  {
    "level": 6,
    "challengeIndex": 4,
    "stage": 2,
    "stageTitle": "Leaders and Kingdoms",
    "levelTitle": "The Judges",
    "mode": "Late Judges",
    "questionText": "Arrange these events at the close of the era of the Judges in chronological order:",
    "difficulty": "Moderate",
    "timerSeconds": 30,
    "events": [
      [
        "Child Samuel called by God in the tabernacle at Shiloh",
        "1 Samuel 3:4-10"
      ],
      [
        "The Philistines capture the Ark of God and Eli falls backward dead",
        "1 Samuel 4:11, 18"
      ],
      [
        "The Philistines return the Ark to Beth-shemesh on a new cart",
        "1 Samuel 6:10-12"
      ],
      [
        "Samuel leads Israel to victory over Philistines setting up Ebenezer",
        "1 Samuel 7:10-12"
      ]
    ]
  },
  {
    "level": 6,
    "challengeIndex": 5,
    "stage": 2,
    "stageTitle": "Leaders and Kingdoms",
    "levelTitle": "The Judges",
    "mode": "Transition to Monarchy",
    "questionText": "Arrange these events marking the transition from judges to monarchy in chronological order:",
    "difficulty": "Difficult",
    "timerSeconds": 25,
    "events": [
      [
        "Elders of Israel demand a king at Ramah saying \"make us a king\"",
        "1 Samuel 8:4-5"
      ],
      [
        "Samuel secretly anoints Saul son of Kish with vial of oil",
        "1 Samuel 10:1"
      ],
      [
        "Saul confirmed king before all the people at Gilgal",
        "1 Samuel 11:15"
      ],
      [
        "Samuel delivers farewell address renewing the kingdom at Gilgal",
        "1 Samuel 12:1-25"
      ]
    ]
  },
  {
    "level": 7,
    "challengeIndex": 1,
    "stage": 2,
    "stageTitle": "Leaders and Kingdoms",
    "levelTitle": "Israel's First Kings",
    "mode": "Saul's Reign",
    "questionText": "Arrange these milestones from King Saul's life in chronological order:",
    "difficulty": "Moderate",
    "timerSeconds": 30,
    "events": [
      [
        "Saul defeats Nahash the Ammonite rescuing Jabesh-gilead",
        "1 Samuel 11:11-13"
      ],
      [
        "Jonathan and armor-bearer scale the rock pass defeating Philistine garrison",
        "1 Samuel 14:13-14"
      ],
      [
        "Saul disobeys God regarding Agag and cattle of Amalek",
        "1 Samuel 15:8-9, 23"
      ],
      [
        "David plays the harp to soothe Saul tormented by an evil spirit",
        "1 Samuel 16:21-23"
      ]
    ]
  },
  {
    "level": 7,
    "challengeIndex": 2,
    "stage": 2,
    "stageTitle": "Leaders and Kingdoms",
    "levelTitle": "Israel's First Kings",
    "mode": "David's Rise",
    "questionText": "Arrange these moments from young David's rise in chronological order:",
    "difficulty": "Moderate",
    "timerSeconds": 30,
    "events": [
      [
        "Samuel anoints David at Bethlehem among his elder brothers",
        "1 Samuel 16:12-13"
      ],
      [
        "David slays Goliath of Gath with sling and stone",
        "1 Samuel 17:49-50"
      ],
      [
        "Jonathan makes a covenant of friendship with David giving his armor",
        "1 Samuel 18:3-4"
      ],
      [
        "David flees from Saul to the Cave of Adullam gathering 400 men",
        "1 Samuel 22:1-2"
      ]
    ]
  },
  {
    "level": 7,
    "challengeIndex": 3,
    "stage": 2,
    "stageTitle": "Leaders and Kingdoms",
    "levelTitle": "Israel's First Kings",
    "mode": "David's Fugitive Years",
    "questionText": "Arrange these wilderness events while David fled from Saul in chronological order:",
    "difficulty": "Moderate",
    "timerSeconds": 30,
    "events": [
      [
        "David eats the shewbread from Ahimelech the priest at Nob",
        "1 Samuel 21:1-6"
      ],
      [
        "David spares Saul's life in cave of Engedi cutting skirt of robe",
        "1 Samuel 24:3-7"
      ],
      [
        "David marries Abigail following the sudden death of foolish Nabal",
        "1 Samuel 25:39-42"
      ],
      [
        "David takes Saul's spear and cruse of water in Wilderness of Ziph",
        "1 Samuel 26:11-12"
      ]
    ]
  },
  {
    "level": 7,
    "challengeIndex": 4,
    "stage": 2,
    "stageTitle": "Leaders and Kingdoms",
    "levelTitle": "Israel's First Kings",
    "mode": "Saul's Fall & David's Throne",
    "questionText": "Arrange these pivotal events surrounding the death of Saul in chronological order:",
    "difficulty": "Moderate",
    "timerSeconds": 30,
    "events": [
      [
        "Saul consults the woman with a familiar spirit at En-dor",
        "1 Samuel 28:7-14"
      ],
      [
        "Saul and Jonathan die in battle against Philistines on Mount Gilboa",
        "1 Samuel 31:1-6"
      ],
      [
        "David anointed king over Judah in Hebron",
        "2 Samuel 2:4"
      ],
      [
        "All tribes of Israel come to Hebron anointing David king over all Israel",
        "2 Samuel 5:1-3"
      ]
    ]
  },
  {
    "level": 7,
    "challengeIndex": 5,
    "stage": 2,
    "stageTitle": "Leaders and Kingdoms",
    "levelTitle": "Israel's First Kings",
    "mode": "David's Golden Age",
    "questionText": "Arrange these triumphs of King David in chronological order:",
    "difficulty": "Difficult",
    "timerSeconds": 25,
    "events": [
      [
        "David captures the fortress of Zion renaming it the City of David",
        "2 Samuel 5:7-9"
      ],
      [
        "David brings the Ark of God to Jerusalem dancing with all his might",
        "2 Samuel 6:14-17"
      ],
      [
        "God makes an everlasting covenant with David through Nathan",
        "2 Samuel 7:11-16"
      ],
      [
        "David shows kindness to Mephibosheth for Jonathan's sake",
        "2 Samuel 9:6-7"
      ]
    ]
  },
  {
    "level": 8,
    "challengeIndex": 1,
    "stage": 2,
    "stageTitle": "Leaders and Kingdoms",
    "levelTitle": "The Kingdom Divides",
    "mode": "Solomon's Ascension",
    "questionText": "Arrange these events in the rise of King Solomon in chronological order:",
    "difficulty": "Moderate",
    "timerSeconds": 30,
    "events": [
      [
        "Adonijah exalts himself to be king at En-rogel",
        "1 Kings 1:5, 9"
      ],
      [
        "Solomon anointed king at Gihon riding David's royal mule",
        "1 Kings 1:38-39"
      ],
      [
        "God appears to Solomon in dream at Gibeon granting him wisdom",
        "1 Kings 3:5-12"
      ],
      [
        "Solomon judges between two mothers claiming the living child",
        "1 Kings 3:16-27"
      ]
    ]
  },
  {
    "level": 8,
    "challengeIndex": 2,
    "stage": 2,
    "stageTitle": "Leaders and Kingdoms",
    "levelTitle": "The Kingdom Divides",
    "mode": "Solomon's Glory & Decay",
    "questionText": "Arrange these developments of Solomon's reign in chronological order:",
    "difficulty": "Moderate",
    "timerSeconds": 30,
    "events": [
      [
        "Solomon builds and dedicates the Temple in Jerusalem in seven years",
        "1 Kings 6:38; 8:1-2"
      ],
      [
        "The Queen of Sheba visits Solomon testing him with hard questions",
        "1 Kings 10:1-3"
      ],
      [
        "Solomon's foreign wives turn his heart after Ashtoreth and Chemosh",
        "1 Kings 11:4-7"
      ],
      [
        "Prophet Ahijah tears his new garment into twelve pieces for Jeroboam",
        "1 Kings 11:29-31"
      ]
    ]
  },
  {
    "level": 8,
    "challengeIndex": 3,
    "stage": 2,
    "stageTitle": "Leaders and Kingdoms",
    "levelTitle": "The Kingdom Divides",
    "mode": "The Great Schism",
    "questionText": "Arrange these events of the division of the kingdom in chronological order:",
    "difficulty": "Moderate",
    "timerSeconds": 30,
    "events": [
      [
        "Rehoboam rejects the old men's counsel threatening scorpions",
        "1 Kings 12:13-14"
      ],
      [
        "Ten northern tribes rebel crying \"To your tents, O Israel\"",
        "1 Kings 12:16"
      ],
      [
        "Jeroboam sets up golden calves at Bethel and Dan",
        "1 Kings 12:28-29"
      ],
      [
        "A man of God from Judah cries out against the altar at Bethel",
        "1 Kings 13:1-3"
      ]
    ]
  },
  {
    "level": 8,
    "challengeIndex": 4,
    "stage": 2,
    "stageTitle": "Leaders and Kingdoms",
    "levelTitle": "The Kingdom Divides",
    "mode": "Judah's Early Kings",
    "questionText": "Arrange the reigns of these first four kings of Judah in chronological order:",
    "difficulty": "Moderate",
    "timerSeconds": 30,
    "events": [
      [
        "Rehoboam rules over Judah and Shishak king of Egypt invades",
        "1 Kings 14:21, 25"
      ],
      [
        "Abijam (Abijah) succeeds Rehoboam and wars with Jeroboam",
        "1 Kings 15:1-2"
      ],
      [
        "Asa reforms Judah removing idols and defeating Zerah the Ethiopian",
        "1 Kings 15:9-12; 2 Chronicles 14:9-12"
      ],
      [
        "Jehoshaphat walks in David's ways sending Levites with the Law",
        "1 Kings 22:41-43; 2 Chronicles 17:7-9"
      ]
    ]
  },
  {
    "level": 8,
    "challengeIndex": 5,
    "stage": 2,
    "stageTitle": "Leaders and Kingdoms",
    "levelTitle": "The Kingdom Divides",
    "mode": "Northern Dynasties",
    "questionText": "Arrange these kings of the Northern Kingdom of Israel in chronological order:",
    "difficulty": "Difficult",
    "timerSeconds": 25,
    "events": [
      [
        "Jeroboam I son of Nebat establishes northern kingdom",
        "1 Kings 12:20"
      ],
      [
        "Baasha smites Nadab son of Jeroboam taking the throne",
        "1 Kings 15:27-28"
      ],
      [
        "Omri buys the hill of Samaria and builds Israel's capital city",
        "1 Kings 16:23-24"
      ],
      [
        "Ahab son of Omri marries Jezebel of Sidon serving Baal",
        "1 Kings 16:30-31"
      ]
    ]
  },
  {
    "level": 9,
    "challengeIndex": 1,
    "stage": 2,
    "stageTitle": "Leaders and Kingdoms",
    "levelTitle": "Kings and Prophets",
    "mode": "Elijah & Ahab",
    "questionText": "Arrange these encounters between Elijah and King Ahab in chronological order:",
    "difficulty": "Moderate",
    "timerSeconds": 30,
    "events": [
      [
        "Elijah announces the three-year drought to Ahab",
        "1 Kings 17:1"
      ],
      [
        "Elijah confronts Ahab on Mount Carmel summoning 450 prophets of Baal",
        "1 Kings 18:19-20"
      ],
      [
        "Elijah rebukes Ahab in Naboth's vineyard for Naboth's murder",
        "1 Kings 21:17-20"
      ],
      [
        "Prophet Micaiah foretells Ahab's death at battle of Ramoth-gilead",
        "1 Kings 22:19-28"
      ]
    ]
  },
  {
    "level": 9,
    "challengeIndex": 2,
    "stage": 2,
    "stageTitle": "Leaders and Kingdoms",
    "levelTitle": "Kings and Prophets",
    "mode": "Elisha & Royalty",
    "questionText": "Arrange these events during Elisha's ministry to kings in chronological order:",
    "difficulty": "Moderate",
    "timerSeconds": 30,
    "events": [
      [
        "Elisha secures water without rain for allied kings against Moab",
        "2 Kings 3:16-20"
      ],
      [
        "Naaman captain of Syrian army dipped seven times in Jordan and healed",
        "2 Kings 5:10-14"
      ],
      [
        "Elisha reveals Syrian military ambushes to king of Israel",
        "2 Kings 6:8-12"
      ],
      [
        "Elisha sends a young prophet to anoint Jehu king over Israel",
        "2 Kings 9:1-6"
      ]
    ]
  },
  {
    "level": 9,
    "challengeIndex": 3,
    "stage": 2,
    "stageTitle": "Leaders and Kingdoms",
    "levelTitle": "Kings and Prophets",
    "mode": "Jehu's Purge to Joash",
    "questionText": "Arrange these dramatic political events in Israel and Judah in chronological order:",
    "difficulty": "Difficult",
    "timerSeconds": 30,
    "events": [
      [
        "Jehu executes Joram of Israel, Ahaziah of Judah, and Jezebel",
        "2 Kings 9:24, 27, 33"
      ],
      [
        "Wicked Athaliah usurps Judah's throne destroying royal seed",
        "2 Kings 11:1-3"
      ],
      [
        "Jehoiada the high priest anoints seven-year-old Joash king",
        "2 Kings 11:11-12"
      ],
      [
        "King Joash repairs the Temple of the LORD with collection chest",
        "2 Kings 12:4-10"
      ]
    ]
  },
  {
    "level": 9,
    "challengeIndex": 4,
    "stage": 2,
    "stageTitle": "Leaders and Kingdoms",
    "levelTitle": "Kings and Prophets",
    "mode": "Hezekiah & Isaiah",
    "questionText": "Arrange these historic events of King Hezekiah's reign in chronological order:",
    "difficulty": "Difficult",
    "timerSeconds": 30,
    "events": [
      [
        "Hezekiah removes high places and destroys Moses' brass serpent",
        "2 Kings 18:4"
      ],
      [
        "Sennacherib king of Assyria sends Rabshakeh defying the living God",
        "2 Kings 18:17, 28-35"
      ],
      [
        "Angel of the LORD smites 185,000 Assyrian troops in one night",
        "2 Kings 19:35"
      ],
      [
        "Isaiah promises Hezekiah 15 more years and shadow moves back 10 degrees",
        "2 Kings 20:5-11"
      ]
    ]
  },
  {
    "level": 9,
    "challengeIndex": 5,
    "stage": 2,
    "stageTitle": "Leaders and Kingdoms",
    "levelTitle": "Kings and Prophets",
    "mode": "Josiah & Jeremiah",
    "questionText": "Arrange these final reform events in Judah's monarchy in chronological order:",
    "difficulty": "Difficult",
    "timerSeconds": 25,
    "events": [
      [
        "Hilkiah the high priest discovers the Book of the Law in the Temple",
        "2 Kings 22:8"
      ],
      [
        "Huldah the prophetess confirms coming judgment but promises peace to Josiah",
        "2 Kings 22:14-20"
      ],
      [
        "Josiah reads covenant, destroys idolatry, and holds great Passover",
        "2 Kings 23:2-3, 21-22"
      ],
      [
        "Josiah slain in battle at Megiddo by Pharaoh-nechoh king of Egypt",
        "2 Kings 23:29-30"
      ]
    ]
  },
  {
    "level": 10,
    "challengeIndex": 1,
    "stage": 2,
    "stageTitle": "Leaders and Kingdoms",
    "levelTitle": "Kingdom Timeline Boss",
    "mode": "Monarchy Boss",
    "questionText": "Boss Round 1: Arrange these four kings of united Israel in chronological order:",
    "difficulty": "Mini-boss",
    "timerSeconds": 25,
    "events": [
      [
        "Saul reigning forty years as first anointed king of Israel",
        "Acts 13:21"
      ],
      [
        "David reigning forty years over Judah and all Israel",
        "2 Samuel 5:4-5"
      ],
      [
        "Solomon reigning forty years over all Israel in Jerusalem",
        "1 Kings 11:42"
      ],
      [
        "Rehoboam presiding over the historic division into two kingdoms",
        "1 Kings 12:19-21"
      ]
    ]
  },
  {
    "level": 10,
    "challengeIndex": 2,
    "stage": 2,
    "stageTitle": "Leaders and Kingdoms",
    "levelTitle": "Kingdom Timeline Boss",
    "mode": "Monarchy Boss",
    "questionText": "Boss Round 2: Arrange these notable kings of Judah in chronological order:",
    "difficulty": "Mini-boss",
    "timerSeconds": 25,
    "events": [
      [
        "Jehoshaphat establishing judicial reforms throughout Judah",
        "2 Chronicles 19:4-7"
      ],
      [
        "Uzziah (Azariah) struck with leprosy for burning incense in Temple",
        "2 Chronicles 26:16-20"
      ],
      [
        "Hezekiah opening the Temple doors and celebrating the great Passover",
        "2 Chronicles 29:3; 30:1"
      ],
      [
        "Josiah cleansing the land of idols after hearing the Book of the Law",
        "2 Chronicles 34:3-8, 14"
      ]
    ]
  },
  {
    "level": 10,
    "challengeIndex": 3,
    "stage": 2,
    "stageTitle": "Leaders and Kingdoms",
    "levelTitle": "Kingdom Timeline Boss",
    "mode": "Monarchy Boss",
    "questionText": "Boss Round 3: Arrange these catastrophic invasions of Israel and Judah in chronological order:",
    "difficulty": "Mini-boss",
    "timerSeconds": 25,
    "events": [
      [
        "Shishak king of Egypt takes treasures of the Temple under Rehoboam",
        "1 Kings 14:25-26"
      ],
      [
        "Shalmaneser of Assyria besieges Samaria and carries Northern Kingdom captive",
        "2 Kings 17:5-6"
      ],
      [
        "Sennacherib of Assyria invades Judah during reign of Hezekiah",
        "2 Kings 18:13"
      ],
      [
        "Nebuchadnezzar of Babylon destroys Jerusalem and burns Solomon's Temple",
        "2 Kings 25:8-10"
      ]
    ]
  },
  {
    "level": 10,
    "challengeIndex": 4,
    "stage": 2,
    "stageTitle": "Leaders and Kingdoms",
    "levelTitle": "Kingdom Timeline Boss",
    "mode": "Monarchy Boss",
    "questionText": "Boss Round 4: Arrange these Old Testament prophets in the chronological order of their ministry:",
    "difficulty": "Mini-boss",
    "timerSeconds": 25,
    "events": [
      [
        "Samuel ministering at Shiloh, Bethel, Gilgal, and Mizpeh",
        "1 Samuel 7:15-16"
      ],
      [
        "Nathan advising King David regarding the Temple and rebuking his sin",
        "2 Samuel 7:2; 12:1"
      ],
      [
        "Elijah confronting the prophets of Baal on Mount Carmel",
        "1 Kings 18:21-40"
      ],
      [
        "Elisha receiving the double portion of Elijah's spirit at the Jordan",
        "2 Kings 2:9-12"
      ]
    ]
  },
  {
    "level": 10,
    "challengeIndex": 5,
    "stage": 2,
    "stageTitle": "Leaders and Kingdoms",
    "levelTitle": "Kingdom Timeline Boss",
    "mode": "Monarchy Boss",
    "questionText": "Stage 2 Finale: Arrange these final four kings of Judah in chronological order:",
    "difficulty": "Mini-boss",
    "timerSeconds": 20,
    "events": [
      [
        "Jehoahaz (Shallum) reigning three months before carried to Egypt",
        "2 Kings 23:31-34"
      ],
      [
        "Jehoiakim (Eliakim) cutting and burning Jeremiah's scroll in the fire",
        "2 Kings 23:36; Jeremiah 36:23"
      ],
      [
        "Jehoiachin (Jeconiah) carried captive to Babylon with all craftsmen",
        "2 Kings 24:8-15"
      ],
      [
        "Zedekiah (Mattaniah) reigning eleven years until eyes put out by Babylon",
        "2 Kings 24:17; 25:7"
      ]
    ]
  },
  {
    "level": 11,
    "challengeIndex": 1,
    "stage": 3,
    "stageTitle": "Prophets and Their Times",
    "levelTitle": "Elijah's Ministry",
    "mode": "Elijah's Chronology",
    "questionText": "Arrange these events from Elijah's early ministry in chronological order:",
    "difficulty": "Moderate",
    "timerSeconds": 30,
    "events": [
      [
        "Elijah fed by ravens at the Brook Cherith morning and evening",
        "1 Kings 17:3-6"
      ],
      [
        "Elijah sustains the widow of Zarephath with unfailing meal and oil",
        "1 Kings 17:9-16"
      ],
      [
        "Elijah raises the widow's son to life praying three times over the child",
        "1 Kings 17:21-22"
      ],
      [
        "Elijah meets Obadiah the governor of Ahab's house hiding 100 prophets",
        "1 Kings 18:3-7"
      ]
    ]
  },
  {
    "level": 11,
    "challengeIndex": 2,
    "stage": 3,
    "stageTitle": "Prophets and Their Times",
    "levelTitle": "Elijah's Ministry",
    "mode": "Elijah's Chronology",
    "questionText": "Arrange the sequence of events on Mount Carmel in chronological order:",
    "difficulty": "Moderate",
    "timerSeconds": 30,
    "events": [
      [
        "Prophets of Baal leap upon their altar crying from morning until noon",
        "1 Kings 18:26"
      ],
      [
        "Elijah repairs the altar of the LORD with twelve stones and digs a trench",
        "1 Kings 18:30-32"
      ],
      [
        "Fire of the LORD falls consuming the sacrifice, wood, stones, and water",
        "1 Kings 18:38"
      ],
      [
        "Elijah prays on top of Carmel and a cloud like a man's hand rises from sea",
        "1 Kings 18:42-44"
      ]
    ]
  },
  {
    "level": 11,
    "challengeIndex": 3,
    "stage": 3,
    "stageTitle": "Prophets and Their Times",
    "levelTitle": "Elijah's Ministry",
    "mode": "Elijah's Chronology",
    "questionText": "Arrange these events during Elijah's journey to Mount Horeb in chronological order:",
    "difficulty": "Moderate",
    "timerSeconds": 30,
    "events": [
      [
        "Jezebel threatens Elijah's life causing him to flee into wilderness",
        "1 Kings 19:1-3"
      ],
      [
        "An angel wakes sleeping Elijah under juniper tree feeding him cake and water",
        "1 Kings 19:5-7"
      ],
      [
        "Elijah travels forty days on strength of that food unto Mount Horeb",
        "1 Kings 19:8"
      ],
      [
        "God speaks to Elijah not in wind, earthquake, or fire, but in still small voice",
        "1 Kings 19:11-12"
      ]
    ]
  },
  {
    "level": 11,
    "challengeIndex": 4,
    "stage": 3,
    "stageTitle": "Prophets and Their Times",
    "levelTitle": "Elijah's Ministry",
    "mode": "Elijah's Chronology",
    "questionText": "Arrange these commissions given to Elijah at Horeb in chronological order:",
    "difficulty": "Difficult",
    "timerSeconds": 30,
    "events": [
      [
        "God tells Elijah 7,000 in Israel have not bowed knees to Baal",
        "1 Kings 19:18"
      ],
      [
        "Elijah finds Elisha plowing with twelve yoke of oxen casting mantle on him",
        "1 Kings 19:19"
      ],
      [
        "Elijah pronounces doom upon Ahab and Jezebel in Naboth's vineyard",
        "1 Kings 21:17-24"
      ],
      [
        "Fire from heaven consumes two captains of fifty sent by King Ahaziah",
        "2 Kings 1:9-12"
      ]
    ]
  },
  {
    "level": 11,
    "challengeIndex": 5,
    "stage": 3,
    "stageTitle": "Prophets and Their Times",
    "levelTitle": "Elijah's Ministry",
    "mode": "Elijah's Departure",
    "questionText": "Arrange the final stages of Elijah's earthly departure in chronological order:",
    "difficulty": "Difficult",
    "timerSeconds": 25,
    "events": [
      [
        "Elijah and Elisha journey from Gilgal to Bethel and on to Jericho",
        "2 Kings 2:1-4"
      ],
      [
        "Elijah strikes the Jordan River with his mantle parting the waters",
        "2 Kings 2:8"
      ],
      [
        "Chariot of fire and horses of fire part them and Elijah taken up by whirlwind",
        "2 Kings 2:11"
      ],
      [
        "Elisha takes up Elijah's fallen mantle and strikes the Jordan",
        "2 Kings 2:13-14"
      ]
    ]
  },
  {
    "level": 12,
    "challengeIndex": 1,
    "stage": 3,
    "stageTitle": "Prophets and Their Times",
    "levelTitle": "Elisha's Ministry",
    "mode": "Elisha's Miracles",
    "questionText": "Arrange these initial miracles of Elisha in chronological order:",
    "difficulty": "Moderate",
    "timerSeconds": 30,
    "events": [
      [
        "Elisha heals the unwholesome waters of Jericho with a cruise of salt",
        "2 Kings 2:19-22"
      ],
      [
        "Two bears tear forty-two youth mocking the prophet near Bethel",
        "2 Kings 2:23-24"
      ],
      [
        "Elisha fills the barren valley with ditches of water saving allied armies",
        "2 Kings 3:16-20"
      ],
      [
        "Elisha multiplies the poor prophet's widow's single pot of oil",
        "2 Kings 4:1-7"
      ]
    ]
  },
  {
    "level": 12,
    "challengeIndex": 2,
    "stage": 3,
    "stageTitle": "Prophets and Their Times",
    "levelTitle": "Elisha's Ministry",
    "mode": "Elisha's Miracles",
    "questionText": "Arrange these events in Elisha's ministry to the Shunammite woman in chronological order:",
    "difficulty": "Moderate",
    "timerSeconds": 30,
    "events": [
      [
        "Shunammite woman prepares a furnished prophet's chamber on the wall",
        "2 Kings 4:8-10"
      ],
      [
        "Elisha promises her a son born the following year",
        "2 Kings 4:16-17"
      ],
      [
        "The child dies of head pain in field and mother lays him on prophet's bed",
        "2 Kings 4:18-21"
      ],
      [
        "Elisha stretches upon the child and child sneezes seven times alive",
        "2 Kings 4:32-35"
      ]
    ]
  },
  {
    "level": 12,
    "challengeIndex": 3,
    "stage": 3,
    "stageTitle": "Prophets and Their Times",
    "levelTitle": "Elisha's Ministry",
    "mode": "Elisha's Miracles",
    "questionText": "Arrange the events of Naaman's healing in chronological order:",
    "difficulty": "Moderate",
    "timerSeconds": 30,
    "events": [
      [
        "Little captive maid tells Naaman's wife of prophet in Samaria",
        "2 Kings 5:2-3"
      ],
      [
        "Elisha sends messenger telling Naaman to wash in Jordan seven times",
        "2 Kings 5:10"
      ],
      [
        "Naaman dips seven times in Jordan and his flesh becomes like a little child",
        "2 Kings 5:14"
      ],
      [
        "Gehazi pursues Naaman for silver and garments and is struck with leprosy",
        "2 Kings 5:20-27"
      ]
    ]
  },
  {
    "level": 12,
    "challengeIndex": 4,
    "stage": 3,
    "stageTitle": "Prophets and Their Times",
    "levelTitle": "Elisha's Ministry",
    "mode": "Elisha & Syrian Wars",
    "questionText": "Arrange these dramatic wartime episodes in Elisha's life in chronological order:",
    "difficulty": "Difficult",
    "timerSeconds": 30,
    "events": [
      [
        "Elisha causes borrowed iron ax head to float on the Jordan River",
        "2 Kings 6:5-7"
      ],
      [
        "Young servant's eyes opened to see mountain full of horses and chariots of fire",
        "2 Kings 6:15-17"
      ],
      [
        "Elisha strikes Syrian army with blindness leading them into Samaria",
        "2 Kings 6:18-20"
      ],
      [
        "Four lepers discover deserted Syrian camp ending severe famine in Samaria",
        "2 Kings 7:3-8"
      ]
    ]
  },
  {
    "level": 12,
    "challengeIndex": 5,
    "stage": 3,
    "stageTitle": "Prophets and Their Times",
    "levelTitle": "Elisha's Ministry",
    "mode": "Elisha's Legacy",
    "questionText": "Arrange these concluding events of Elisha's life and legacy in chronological order:",
    "difficulty": "Difficult",
    "timerSeconds": 25,
    "events": [
      [
        "Elisha weeps foretelling Hazael the cruel king he will become in Syria",
        "2 Kings 8:11-13"
      ],
      [
        "Elisha directs young prophet to anoint Jehu king at Ramoth-gilead",
        "2 Kings 9:1-3"
      ],
      [
        "Elisha on deathbed commands King Joash to shoot arrow of LORD's deliverance",
        "2 Kings 13:14-19"
      ],
      [
        "Dead man cast into Elisha's sepulchre revives on touching prophet's bones",
        "2 Kings 13:20-21"
      ]
    ]
  },
  {
    "level": 13,
    "challengeIndex": 1,
    "stage": 3,
    "stageTitle": "Prophets and Their Times",
    "levelTitle": "Major Prophets",
    "mode": "Major Prophets Chronology",
    "questionText": "Arrange these calls of the four Major Prophets in chronological order:",
    "difficulty": "Moderate",
    "timerSeconds": 30,
    "events": [
      [
        "Isaiah sees the LORD high and lifted up in the year King Uzziah died",
        "Isaiah 6:1"
      ],
      [
        "Jeremiah called as a youth before formed in belly during Josiah's reign",
        "Jeremiah 1:4-5"
      ],
      [
        "Ezekiel sees visions of God by the River Chebar in fifth year of captivity",
        "Ezekiel 1:1-3"
      ],
      [
        "Daniel interprets Nebuchadnezzar's dream of the great colossus in Babylon",
        "Daniel 2:1, 19"
      ]
    ]
  },
  {
    "level": 13,
    "challengeIndex": 2,
    "stage": 3,
    "stageTitle": "Prophets and Their Times",
    "levelTitle": "Major Prophets",
    "mode": "Isaiah's Historical Setting",
    "questionText": "Arrange these historical milestones recorded in Isaiah in chronological order:",
    "difficulty": "Difficult",
    "timerSeconds": 30,
    "events": [
      [
        "Isaiah gives Ahaz the sign of Immanuel born of a virgin during Syro-Ephraimite war",
        "Isaiah 7:1-14"
      ],
      [
        "Isaiah walks naked and barefoot three years as a sign against Egypt",
        "Isaiah 20:2-4"
      ],
      [
        "Hezekiah spreads Sennacherib's blasphemous letter before the LORD",
        "Isaiah 37:14-20"
      ],
      [
        "Hezekiah unwisely shows all palace treasures to ambassadors of Babylon",
        "Isaiah 39:1-4"
      ]
    ]
  },
  {
    "level": 13,
    "challengeIndex": 3,
    "stage": 3,
    "stageTitle": "Prophets and Their Times",
    "levelTitle": "Major Prophets",
    "mode": "Jeremiah's Tribulations",
    "questionText": "Arrange these persecutions of Jeremiah in chronological order:",
    "difficulty": "Difficult",
    "timerSeconds": 30,
    "events": [
      [
        "Pashur smites Jeremiah putting him in the stocks at temple gate",
        "Jeremiah 20:1-2"
      ],
      [
        "King Jehoiakim cuts Jeremiah's scroll with penknife burning it in the hearth",
        "Jeremiah 36:22-23"
      ],
      [
        "Jeremiah cast into the miry dungeon of Malchiah during final siege",
        "Jeremiah 38:6"
      ],
      [
        "Ebed-melech the Ethiopian draws Jeremiah out of the dungeon with cords and rags",
        "Jeremiah 38:11-13"
      ]
    ]
  },
  {
    "level": 13,
    "challengeIndex": 4,
    "stage": 3,
    "stageTitle": "Prophets and Their Times",
    "levelTitle": "Major Prophets",
    "mode": "Ezekiel's Visions",
    "questionText": "Arrange these profound visions of Ezekiel in the chronological order received:",
    "difficulty": "Difficult",
    "timerSeconds": 30,
    "events": [
      [
        "Ezekiel sees the glory of God depart in stages from the Temple threshold",
        "Ezekiel 10:4, 18; 11:23"
      ],
      [
        "Ezekiel receives word that Jerusalem has fallen: \"The city is smitten\"",
        "Ezekiel 33:21"
      ],
      [
        "Ezekiel prophesies over the Valley of Dry Bones until they stand as living host",
        "Ezekiel 37:1-10"
      ],
      [
        "Ezekiel measures the visionary restored Temple and the river of healing waters",
        "Ezekiel 40:1-4; 47:1-5"
      ]
    ]
  },
  {
    "level": 13,
    "challengeIndex": 5,
    "stage": 3,
    "stageTitle": "Prophets and Their Times",
    "levelTitle": "Major Prophets",
    "mode": "Daniel's Royal Encounters",
    "questionText": "Arrange these events from the book of Daniel in chronological order:",
    "difficulty": "Difficult",
    "timerSeconds": 25,
    "events": [
      [
        "Three Hebrew youths delivered from Nebuchadnezzar's burning fiery furnace",
        "Daniel 3:19-26"
      ],
      [
        "Nebuchadnezzar eats grass like oxen for seven times until humbled",
        "Daniel 4:31-34"
      ],
      [
        "Handwriting on the wall \"MENE, MENE, TEKEL, UPHARSIN\" during Belshazzar's feast",
        "Daniel 5:5, 25-30"
      ],
      [
        "Daniel delivered from the lions' den under decree of Darius the Mede",
        "Daniel 6:16-23"
      ]
    ]
  },
  {
    "level": 14,
    "challengeIndex": 1,
    "stage": 3,
    "stageTitle": "Prophets and Their Times",
    "levelTitle": "Minor Prophets",
    "mode": "Pre-Exilic Minor Prophets",
    "questionText": "Arrange these pre-exilic prophets to Northern Israel in chronological order:",
    "difficulty": "Difficult",
    "timerSeconds": 30,
    "events": [
      [
        "Jonah sent to Nineveh preaching repentance during Jeroboam II's era",
        "Jonah 1:1-2; 2 Kings 14:25"
      ],
      [
        "Amos the herdsman of Tekoa denounces sins of Bethel under Jeroboam II",
        "Amos 1:1; 7:10-14"
      ],
      [
        "Hosea commanded to take Gomer as wife illustrating Israel's spiritual adultery",
        "Hosea 1:2-3"
      ],
      [
        "Micah foretells that the Messiah will be born in Bethlehem Ephratah",
        "Micah 5:2"
      ]
    ]
  },
  {
    "level": 14,
    "challengeIndex": 2,
    "stage": 3,
    "stageTitle": "Prophets and Their Times",
    "levelTitle": "Minor Prophets",
    "mode": "Prophets of the Assyrian & Babylonian Eras",
    "questionText": "Arrange these prophets of the late kingdom era in chronological order:",
    "difficulty": "Difficult",
    "timerSeconds": 30,
    "events": [
      [
        "Nahum prophesies the complete and final overthrow of bloody Nineveh",
        "Nahum 1:1; 3:1"
      ],
      [
        "Zephaniah proclaims the Day of the LORD during youth of King Josiah",
        "Zephaniah 1:1, 14"
      ],
      [
        "Habakkuk questions God about the rising Chaldean menace from his watchtower",
        "Habakkuk 1:5-6; 2:1"
      ],
      [
        "Obadiah pronounces doom upon Edom for gloating over brother Jacob's calamity",
        "Obadiah 1:1, 10-14"
      ]
    ]
  },
  {
    "level": 14,
    "challengeIndex": 3,
    "stage": 3,
    "stageTitle": "Prophets and Their Times",
    "levelTitle": "Minor Prophets",
    "mode": "Post-Exilic Minor Prophets",
    "questionText": "Arrange the post-exilic prophets and events in chronological order:",
    "difficulty": "Difficult",
    "timerSeconds": 30,
    "events": [
      [
        "Haggai stirs Zerubbabel and Joshua to rebuild the neglected Temple house",
        "Haggai 1:1-4"
      ],
      [
        "Zechariah sees visions of night horsemen, four horns, and golden candlestick",
        "Zechariah 1:7-8; 4:2"
      ],
      [
        "Second Temple completed and dedicated with joy in sixth year of Darius",
        "Ezra 6:15-16"
      ],
      [
        "Malachi delivers final prophetic rebuke regarding tithes and coming Messenger",
        "Malachi 3:1, 8-10; 4:5-6"
      ]
    ]
  },
  {
    "level": 14,
    "challengeIndex": 4,
    "stage": 3,
    "stageTitle": "Prophets and Their Times",
    "levelTitle": "Minor Prophets",
    "mode": "Messianic Predictions in Minor Prophets",
    "questionText": "Arrange these famous prophecies from Minor Prophets in their historical sequence:",
    "difficulty": "Difficult",
    "timerSeconds": 30,
    "events": [
      [
        "Joel prophesies \"I will pour out my spirit upon all flesh\"",
        "Joel 2:28"
      ],
      [
        "Micah prophesies Bethlehem Ephratah as birthplace of the Everlasting Ruler",
        "Micah 5:2"
      ],
      [
        "Zechariah prophesies Zion's King coming meek and riding upon an ass",
        "Zechariah 9:9"
      ],
      [
        "Malachi prophesies Sun of Righteousness arising with healing in His wings",
        "Malachi 4:2"
      ]
    ]
  },
  {
    "level": 14,
    "challengeIndex": 5,
    "stage": 3,
    "stageTitle": "Prophets and Their Times",
    "levelTitle": "Minor Prophets",
    "mode": "Prophetic Milestones",
    "questionText": "Arrange these prophetic book climaxes in chronological order of delivery:",
    "difficulty": "Very Difficult",
    "timerSeconds": 25,
    "events": [
      [
        "Jonah sulking under gourd outside Nineveh rebuked by God",
        "Jonah 4:5-11"
      ],
      [
        "Habakkuk's prayer: \"Although the fig tree shall not blossom, yet I will rejoice\"",
        "Habakkuk 3:17-18"
      ],
      [
        "Zechariah foretells thirty pieces of silver cast to the potter in LORD's house",
        "Zechariah 11:12-13"
      ],
      [
        "Malachi foretells Elijah the prophet sent before great and dreadful day of LORD",
        "Malachi 4:5"
      ]
    ]
  },
  {
    "level": 15,
    "challengeIndex": 1,
    "stage": 3,
    "stageTitle": "Prophets and Their Times",
    "levelTitle": "Prophetic Timeline Boss",
    "mode": "Prophetic Boss",
    "questionText": "Boss Round 1: Arrange these landmark prophetic moments in chronological order:",
    "difficulty": "Mini-boss",
    "timerSeconds": 25,
    "events": [
      [
        "Elijah taken up to heaven in a fiery chariot and whirlwind",
        "2 Kings 2:11"
      ],
      [
        "Isaiah prophesies the virgin birth of Immanuel to King Ahaz",
        "Isaiah 7:14"
      ],
      [
        "Jeremiah purchases a field in Anathoth as a pledge of future return from exile",
        "Jeremiah 32:6-15"
      ],
      [
        "Daniel sees vision of the Seventy Weeks determining history of Jerusalem",
        "Daniel 9:24-27"
      ]
    ]
  },
  {
    "level": 15,
    "challengeIndex": 2,
    "stage": 3,
    "stageTitle": "Prophets and Their Times",
    "levelTitle": "Prophetic Timeline Boss",
    "mode": "Prophetic Boss",
    "questionText": "Boss Round 2: Arrange these symbolic prophetic actions in chronological order:",
    "difficulty": "Mini-boss",
    "timerSeconds": 25,
    "events": [
      [
        "Ahijah tears garment in twelve pieces giving ten to Jeroboam",
        "1 Kings 11:30-31"
      ],
      [
        "Jeremiah hides a linen girdle in a hole of a rock by Euphrates until marred",
        "Jeremiah 13:1-7"
      ],
      [
        "Ezekiel lies on his left side 390 days bearing iniquity of house of Israel",
        "Ezekiel 4:4-5"
      ],
      [
        "Zechariah crowns high priest Joshua with crowns of silver and gold",
        "Zechariah 6:11-12"
      ]
    ]
  },
  {
    "level": 15,
    "challengeIndex": 3,
    "stage": 3,
    "stageTitle": "Prophets and Their Times",
    "levelTitle": "Prophetic Timeline Boss",
    "mode": "Prophetic Boss",
    "questionText": "Boss Round 3: Arrange these divine confrontations between prophets and false prophets:",
    "difficulty": "Mini-boss",
    "timerSeconds": 25,
    "events": [
      [
        "Micaiah withstands Zedekiah son of Chenaanah who made iron horns",
        "1 Kings 22:11-14, 24"
      ],
      [
        "Amos confronted by Amaziah priest of Bethel telling him to flee to Judah",
        "Amos 7:10-13"
      ],
      [
        "Jeremiah confronted by Hananiah who breaks wooden yoke from his neck",
        "Jeremiah 28:10-17"
      ],
      [
        "Ezekiel prophesies against false prophets saying peace when there is no peace",
        "Ezekiel 13:1-10"
      ]
    ]
  },
  {
    "level": 15,
    "challengeIndex": 4,
    "stage": 3,
    "stageTitle": "Prophets and Their Times",
    "levelTitle": "Prophetic Timeline Boss",
    "mode": "Prophetic Boss",
    "questionText": "Boss Round 4: Arrange these momentous Old Testament temple events in chronological order:",
    "difficulty": "Mini-boss",
    "timerSeconds": 20,
    "events": [
      [
        "Solomon's temple dedicated and filled with divine cloud of glory",
        "1 Kings 8:10-11"
      ],
      [
        "Isaiah sees heavenly temple with seraphim crying \"Holy, holy, holy\"",
        "Isaiah 6:1-3"
      ],
      [
        "Ezekiel sees the glory of the God of Israel lift from Jerusalem temple",
        "Ezekiel 10:18-19"
      ],
      [
        "Haggai promises: \"The glory of this latter house shall be greater than of former\"",
        "Haggai 2:9"
      ]
    ]
  },
  {
    "level": 15,
    "challengeIndex": 5,
    "stage": 3,
    "stageTitle": "Prophets and Their Times",
    "levelTitle": "Prophetic Timeline Boss",
    "mode": "Prophetic Boss",
    "questionText": "Stage 3 Finale: Arrange the historical completion of these prophetic ministries in chronological order:",
    "difficulty": "Mini-boss",
    "timerSeconds": 20,
    "events": [
      [
        "Elijah ends ministry on earth transferred to heaven in whirlwind",
        "2 Kings 2:11"
      ],
      [
        "Elisha dies during reign of Joash of Israel and is buried",
        "2 Kings 13:20"
      ],
      [
        "Jeremiah delivers his final messages to remnant in Egypt at Tahpanhes",
        "Jeremiah 43:7-10"
      ],
      [
        "Malachi seals the Old Testament prophetic canon 400 years before Christ",
        "Malachi 4:4-6"
      ]
    ]
  }
];
