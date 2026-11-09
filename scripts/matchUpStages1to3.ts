// Bible Match-Up — Stages 1–3 (Levels 1–15, 75 Matching Puzzles)
// Exactly 4 pairs per puzzle, each with verified Scripture reference.

export interface RawMatchUpPuzzle {
  level: number;
  challengeIndex: number;
  stage: number;
  stageTitle: string;
  levelTitle: string;
  mode: string;
  leftLabel: string;
  rightLabel: string;
  questionText: string;
  difficulty: string;
  timerSeconds: number;
  pairs: [string, string, string][]; // [left, right, ref]
}

export const MATCH_UP_STAGES_1_TO_3: RawMatchUpPuzzle[] = [
  // =========================================================================
  // STAGE 1 — BASIC CONNECTIONS (Levels 1–5 · Easy to moderate)
  // =========================================================================

  // Level 1: First Match (Familiar people & descriptions)
  {
    level: 1, challengeIndex: 1,
    stage: 1, stageTitle: 'Basic Connections', levelTitle: 'First Match',
    mode: 'Character & Identity', leftLabel: 'Biblical Person', rightLabel: 'Defining Scriptural Fact',
    questionText: 'Match each foundational biblical figure with their scriptural description:',
    difficulty: 'Accessible', timerSeconds: 30,
    pairs: [
      ['Noah', 'Built an ark of gopher wood to preserve life', 'Genesis 6:14'],
      ['Abraham', 'Father of the faithful who left Ur of the Chaldees', 'Genesis 12:1-4'],
      ['Moses', 'Led Israel out of Egyptian bondage through the Red Sea', 'Exodus 14:21-31'],
      ['David', 'Shepherd boy anointed king who slew Goliath', '1 Samuel 17:49-50']
    ]
  },
  {
    level: 1, challengeIndex: 2,
    stage: 1, stageTitle: 'Basic Connections', levelTitle: 'First Match',
    mode: 'Character & Identity', leftLabel: 'Biblical Person', rightLabel: 'Defining Scriptural Fact',
    questionText: 'Match each prominent figure to their key biblical work:',
    difficulty: 'Moderate', timerSeconds: 30,
    pairs: [
      ['Solomon', 'Constructed the glorious first temple in Jerusalem', '1 Kings 6:1-14'],
      ['Elijah', 'Called down fire from heaven on Mount Carmel', '1 Kings 18:36-39'],
      ['Peter', 'Fisherman who confessed Jesus as the Christ', 'Matthew 16:16'],
      ['Paul', 'Apostle to the Gentiles who wrote numerous epistles', 'Romans 11:13']
    ]
  },
  {
    level: 1, challengeIndex: 3,
    stage: 1, stageTitle: 'Basic Connections', levelTitle: 'First Match',
    mode: 'Character & Identity', leftLabel: 'Biblical Person', rightLabel: 'Defining Scriptural Fact',
    questionText: 'Match each servant of God with their recorded calling:',
    difficulty: 'Difficult', timerSeconds: 30,
    pairs: [
      ['Joshua', 'Led Israel across the Jordan to conquer Jericho', 'Joshua 6:1-20'],
      ['Gideon', 'Reduced his army to three hundred men with trumpets and torches', 'Judges 7:7-16'],
      ['Samuel', 'Dedicated at Shiloh as a boy and anointed Saul and David', '1 Samuel 3:1-19; 16:13'],
      ['John the Baptist', 'Forerunner crying in the wilderness to prepare the Lord\'s way', 'Mark 1:3-4']
    ]
  },
  {
    level: 1, challengeIndex: 4,
    stage: 1, stageTitle: 'Basic Connections', levelTitle: 'First Match',
    mode: 'Character & Identity', leftLabel: 'Biblical Person', rightLabel: 'Defining Scriptural Fact',
    questionText: 'Match each historic figure to their decisive action:',
    difficulty: 'Very Difficult', timerSeconds: 30,
    pairs: [
      ['Daniel', 'Interpreted Nebuchadnezzar\'s dream and was spared in lions\' den', 'Daniel 2:19; 6:22'],
      ['Nehemiah', 'Cupbearer to the king who led rebuilding of Jerusalem\'s walls', 'Nehemiah 2:1-18'],
      ['Esther', 'Jewish queen of Persia who risked her life saying "If I perish, I perish"', 'Esther 4:16'],
      ['Stephen', 'First Christian martyr who prayed for his stoners\' forgiveness', 'Acts 7:59-60']
    ]
  },
  {
    level: 1, challengeIndex: 5,
    stage: 1, stageTitle: 'Basic Connections', levelTitle: 'First Match',
    mode: 'Character & Identity', leftLabel: 'Biblical Person', rightLabel: 'Defining Scriptural Fact',
    questionText: 'Level 1 Mini-boss: Connect these notable witnesses to their biblical deeds:',
    difficulty: 'Mini-boss', timerSeconds: 25,
    pairs: [
      ['Isaiah', 'Saw the Lord seated on a throne high and lifted up', 'Isaiah 6:1-3'],
      ['Jeremiah', 'Prophet who wept over Jerusalem and dictated to Baruch', 'Jeremiah 36:4'],
      ['Mary of Bethany', 'Anointed Jesus\' feet with costly spikenard before His burial', 'John 12:3'],
      ['Barnabas', 'Son of encouragement who accompanied Paul on his first journey', 'Acts 4:36; 13:2']
    ]
  },

  // Level 2: Bible Books (Books & Classification / Key Themes)
  {
    level: 2, challengeIndex: 1,
    stage: 1, stageTitle: 'Basic Connections', levelTitle: 'Bible Books',
    mode: 'Book & Theme', leftLabel: 'Book of Scripture', rightLabel: 'Primary Subject or Message',
    questionText: 'Match each book with its central theme:',
    difficulty: 'Accessible', timerSeconds: 30,
    pairs: [
      ['Genesis', 'Book of origins: Creation, Fall, and Abrahamic Covenant', 'Genesis 1:1; 12:1'],
      ['Exodus', 'Deliverance from Egypt, Red Sea crossing, and Sinai Law', 'Exodus 12:31; 20:1'],
      ['Leviticus', 'Sacrificial system, holiness code, and Day of Atonement', 'Leviticus 16:1; 19:2'],
      ['Numbers', 'Wilderness wanderings and census of Israel\'s twelve tribes', 'Numbers 1:1; 14:33']
    ]
  },
  {
    level: 2, challengeIndex: 2,
    stage: 1, stageTitle: 'Basic Connections', levelTitle: 'Bible Books',
    mode: 'Book & Theme', leftLabel: 'Book of Scripture', rightLabel: 'Primary Subject or Message',
    questionText: 'Connect these historical and poetic books to their content:',
    difficulty: 'Moderate', timerSeconds: 30,
    pairs: [
      ['Deuteronomy', 'Moses\' farewell discourses rehearsing the Law for Canaan', 'Deuteronomy 1:1-5'],
      ['Psalms', 'Inspired prayers, hymns of praise, and Messianic prophecies', 'Psalm 22:1; 150:6'],
      ['Proverbs', 'Practical divine wisdom for righteous living and discernment', 'Proverbs 1:1-7'],
      ['Ecclesiastes', 'The Preacher\'s examination of vanity under the sun versus fear of God', 'Ecclesiastes 1:2; 12:13']
    ]
  },
  {
    level: 2, challengeIndex: 3,
    stage: 1, stageTitle: 'Basic Connections', levelTitle: 'Bible Books',
    mode: 'Book & Theme', leftLabel: 'Book of Scripture', rightLabel: 'Primary Subject or Message',
    questionText: 'Match each Gospel to its distinctive portrait of Jesus:',
    difficulty: 'Difficult', timerSeconds: 30,
    pairs: [
      ['Matthew', 'Presents Jesus as the Promised King and Son of David', 'Matthew 1:1'],
      ['Mark', 'Depicts Jesus as the active, suffering Servant of the Lord', 'Mark 10:45'],
      ['Luke', 'Emphasizes Jesus as the compassionate Son of Man seeking the lost', 'Luke 19:10'],
      ['John', 'Reveals Jesus as the eternal Word and divine Son of God', 'John 1:1, 14']
    ]
  },
  {
    level: 2, challengeIndex: 4,
    stage: 1, stageTitle: 'Basic Connections', levelTitle: 'Bible Books',
    mode: 'Book & Theme', leftLabel: 'Book of Scripture', rightLabel: 'Primary Subject or Message',
    questionText: 'Match each New Testament letter to its doctrinal emphasis:',
    difficulty: 'Very Difficult', timerSeconds: 30,
    pairs: [
      ['Romans', 'Systematic presentation of justification by faith and sovereign grace', 'Romans 1:16-17; 3:24'],
      ['Galatians', 'Defense of Christian liberty against legalistic circumcision', 'Galatians 5:1'],
      ['Ephesians', 'The mystery of the church as Christ\'s body and spiritual warfare', 'Ephesians 1:22-23; 6:10-18'],
      ['Philippians', 'Apostolic joy and contentment in Christ amidst imprisonment', 'Philippians 4:4, 11-13']
    ]
  },
  {
    level: 2, challengeIndex: 5,
    stage: 1, stageTitle: 'Basic Connections', levelTitle: 'Bible Books',
    mode: 'Book & Theme', leftLabel: 'Book of Scripture', rightLabel: 'Primary Subject or Message',
    questionText: 'Level 2 Mini-boss: Connect these diverse canonical writings to their message:',
    difficulty: 'Mini-boss', timerSeconds: 25,
    pairs: [
      ['Hebrews', 'The absolute superiority of Christ and His eternal priesthood', 'Hebrews 1:1-4; 7:25'],
      ['James', 'Living faith demonstrated through active good works and speech control', 'James 2:17; 3:2'],
      ['1 Peter', 'Standing firm in suffering with hope grounded in the resurrection', '1 Peter 1:3; 4:12-19'],
      ['Revelation', 'Apocalyptic triumph of the slain Lamb and the New Jerusalem', 'Revelation 5:5-10; 21:1-4']
    ]
  },

  // Level 3: People and Places (Characters & Locations)
  {
    level: 3, challengeIndex: 1,
    stage: 1, stageTitle: 'Basic Connections', levelTitle: 'People and Places',
    mode: 'Person & Place', leftLabel: 'Biblical Character', rightLabel: 'Pivotal Associated Location',
    questionText: 'Match each person to their famous biblical location:',
    difficulty: 'Accessible', timerSeconds: 30,
    pairs: [
      ['Adam and Eve', 'Garden of Eden where the Fall occurred', 'Genesis 2:8; 3:6'],
      ['Noah', 'Mount Ararat where the ark rested after the flood', 'Genesis 8:4'],
      ['Moses', 'Mount Sinai where the Ten Commandments were given', 'Exodus 19:20'],
      ['Jonah', 'Nineveh where he was sent to preach repentance', 'Jonah 3:1-4']
    ]
  },
  {
    level: 3, challengeIndex: 2,
    stage: 1, stageTitle: 'Basic Connections', levelTitle: 'People and Places',
    mode: 'Person & Place', leftLabel: 'Biblical Character', rightLabel: 'Pivotal Associated Location',
    questionText: 'Connect these Old Testament figures to their places of encounter:',
    difficulty: 'Moderate', timerSeconds: 30,
    pairs: [
      ['Abraham', 'Hebron (Mamre) where he pitched his tent and bought a burial cave', 'Genesis 13:18; 23:19'],
      ['Jacob', 'Bethel where he dreamed of a ladder reaching to heaven', 'Genesis 28:10-19'],
      ['Ruth', 'Bethlehem where she gleaned in Boaz\'s fields and married him', 'Ruth 1:19; 2:2'],
      ['Elijah', 'Brook Cherith where ravens brought him bread and meat', '1 Kings 17:3-6']
    ]
  },
  {
    level: 3, challengeIndex: 3,
    stage: 1, stageTitle: 'Basic Connections', levelTitle: 'People and Places',
    mode: 'Person & Place', leftLabel: 'Biblical Character', rightLabel: 'Pivotal Associated Location',
    questionText: 'Match these New Testament ministers to their recorded cities:',
    difficulty: 'Difficult', timerSeconds: 30,
    pairs: [
      ['Paul', 'Damascus on the road to which the risen Christ blinded him', 'Acts 9:3-8'],
      ['Peter', 'Joppa on a rooftop where he received the vision of clean beasts', 'Acts 10:9-16'],
      ['Lydia', 'Philippi by the river where she heard Paul and was baptized', 'Acts 16:13-15'],
      ['Apollos', 'Ephesus and Corinth where he eloquently debated and watered churches', 'Acts 18:24-28; 1 Corinthians 3:6']
    ]
  },
  {
    level: 3, challengeIndex: 4,
    stage: 1, stageTitle: 'Basic Connections', levelTitle: 'People and Places',
    mode: 'Person & Place', leftLabel: 'Biblical Character', rightLabel: 'Pivotal Associated Location',
    questionText: 'Connect these servants of God to significant geographic regions:',
    difficulty: 'Very Difficult', timerSeconds: 30,
    pairs: [
      ['Joseph', 'Egypt where he rose from prison to governor second to Pharaoh', 'Genesis 41:39-44'],
      ['Nehemiah', 'Susa (Shushan) where he served as royal cupbearer to Artaxerxes', 'Nehemiah 1:1; 2:1'],
      ['Cornelius', 'Caesarea where the Roman centurion welcomed Peter to preach', 'Acts 10:1, 24'],
      ['John the Apostle', 'Isle of Patmos where he was exiled and saw the Apocalypse', 'Revelation 1:9']
    ]
  },
  {
    level: 3, challengeIndex: 5,
    stage: 1, stageTitle: 'Basic Connections', levelTitle: 'People and Places',
    mode: 'Person & Place', leftLabel: 'Biblical Character', rightLabel: 'Pivotal Associated Location',
    questionText: 'Level 3 Mini-boss: Link these figures to specific scriptural settings:',
    difficulty: 'Mini-boss', timerSeconds: 25,
    pairs: [
      ['Zacchaeus', 'Jericho where he climbed a sycomore tree to see Jesus', 'Luke 19:1-4'],
      ['Cleopas', 'Emmaus to which he walked while Jesus opened the Scriptures', 'Luke 24:13-27'],
      ['Philip the Evangelist', 'Gaza desert road where he explained Isaiah to the Ethiopian eunuch', 'Acts 8:26-38'],
      ['Timothy', 'Lystra where Paul selected him as a young traveling companion', 'Acts 16:1-3']
    ]
  },

  // Level 4: Objects and Purposes (Sacred Items & Functions)
  {
    level: 4, challengeIndex: 1,
    stage: 1, stageTitle: 'Basic Connections', levelTitle: 'Objects and Purposes',
    mode: 'Object & Purpose', leftLabel: 'Biblical Object', rightLabel: 'Designated Use or Purpose',
    questionText: 'Match each sacred tabernacle implement to its scriptural function:',
    difficulty: 'Accessible', timerSeconds: 30,
    pairs: [
      ['Ark of the Covenant', 'Contained the Ten Commandments under the golden mercy seat', 'Exodus 25:16-21'],
      ['Golden Candlestick (Menorah)', 'Provided seven-branched light in the Holy Place before the veil', 'Exodus 25:31-37'],
      ['Altar of Incense', 'Burned sweet incense morning and evening before the veil', 'Exodus 30:1-8'],
      ['Brazen Altar', 'Burnt offerings were sacrificed outside in the court for atonement', 'Exodus 27:1-8']
    ]
  },
  {
    level: 4, challengeIndex: 2,
    stage: 1, stageTitle: 'Basic Connections', levelTitle: 'Objects and Purposes',
    mode: 'Object & Purpose', leftLabel: 'Biblical Object', rightLabel: 'Designated Use or Purpose',
    questionText: 'Connect these historical biblical items to their miracle or role:',
    difficulty: 'Moderate', timerSeconds: 30,
    pairs: [
      ['Aaron\'s Rod', 'Budded, blossomed, and yielded almonds confirming Aaron\'s priesthood', 'Numbers 17:8'],
      ['Bronze Serpent', 'Set upon a pole so bitten Israelites looking upon it lived', 'Numbers 21:8-9'],
      ['Pot of Manna', 'Preserved an omer of wilderness bread inside the Holy of Holies', 'Exodus 16:32-34; Hebrews 9:4'],
      ['Gideon\'s Fleece', 'Used with morning dew as a divine sign to confirm God\'s deliverance', 'Judges 6:36-40']
    ]
  },
  {
    level: 4, challengeIndex: 3,
    stage: 1, stageTitle: 'Basic Connections', levelTitle: 'Objects and Purposes',
    mode: 'Object & Purpose', leftLabel: 'Biblical Object', rightLabel: 'Designated Use or Purpose',
    questionText: 'Match each scriptural article with its dramatic biblical event:',
    difficulty: 'Difficult', timerSeconds: 30,
    pairs: [
      ['Scarlet Cord', 'Hung from Rahab\'s window to spare her house at Jericho\'s fall', 'Joshua 2:18-21; 6:23'],
      ['David\'s Sling and Stones', 'Used by the youth David to strike down the champion Goliath', '1 Samuel 17:40, 49'],
      ['Widow\'s Cruse of Oil', 'Multiplied continuously to fill all borrowed vessels and pay debt', '2 Kings 4:1-7'],
      ['Elijah\'s Mantle', 'Smote the Jordan river to part the waters for Elijah and Elisha', '2 Kings 2:8, 14']
    ]
  },
  {
    level: 4, challengeIndex: 4,
    stage: 1, stageTitle: 'Basic Connections', levelTitle: 'Objects and Purposes',
    mode: 'Object & Purpose', leftLabel: 'Biblical Object', rightLabel: 'Designated Use or Purpose',
    questionText: 'Connect these priestly and royal articles to their function:',
    difficulty: 'Very Difficult', timerSeconds: 30,
    pairs: [
      ['Urim and Thummim', 'Cast or consulted by the high priest to determine divine decisions', 'Exodus 28:30; 1 Samuel 28:6'],
      ['High Priest\'s Breastpiece', 'Mounted with twelve engraved gemstones representing the twelve tribes', 'Exodus 28:15-21'],
      ['Silver Shofars (Trumpets)', 'Sounded to assemble the congregation and signal wilderness camp journeys', 'Numbers 10:1-10'],
      ['Writing Tablet', 'Zechariah asked for it to write "His name is John"', 'Luke 1:63']
    ]
  },
  {
    level: 4, challengeIndex: 5,
    stage: 1, stageTitle: 'Basic Connections', levelTitle: 'Objects and Purposes',
    mode: 'Object & Purpose', leftLabel: 'Biblical Object', rightLabel: 'Designated Use or Purpose',
    questionText: 'Level 4 Mini-boss: Link these New Testament items to their recorded story:',
    difficulty: 'Mini-boss', timerSeconds: 25,
    pairs: [
      ['Alabaster Box of Ointment', 'Broken to pour precious spikenard upon Jesus in Bethany', 'Mark 14:3'],
      ['Paul\'s Parchments and Cloak', 'Left at Troas with Carpus and requested while in Rome prison', '2 Timothy 4:13'],
      ['Handkerchiefs and Aprons', 'Carried from Paul\'s skin to heal the sick in Ephesus', 'Acts 19:11-12'],
      ['Scroll with Seven Seals', 'Given to the slain Lamb of the tribe of Judah to open in heaven', 'Revelation 5:1-7']
    ]
  },

  // Level 5: Mixed Connections (Fast-paced cross-testament synthesis)
  {
    level: 5, challengeIndex: 1,
    stage: 1, stageTitle: 'Basic Connections', levelTitle: 'Mixed Connections',
    mode: 'Cross-Testament Mix', leftLabel: 'Biblical Entity', rightLabel: 'Scripture Association',
    questionText: 'Match each mixed biblical subject with its correct biblical counterpart:',
    difficulty: 'Accessible', timerSeconds: 30,
    pairs: [
      ['Methuselah', 'Oldest recorded man in Scripture, living 969 years', 'Genesis 5:27'],
      ['Balaam\'s Donkey', 'Spoke with human voice to rebuke the mad prophet', 'Numbers 22:28-30'],
      ['Zacchaeus', 'Short chief tax collector who repaid fourfold after Jesus visited', 'Luke 19:2-8'],
      ['Patmos', 'Island where the Apostle John received the visions of Revelation', 'Revelation 1:9']
    ]
  },
  {
    level: 5, challengeIndex: 2,
    stage: 1, stageTitle: 'Basic Connections', levelTitle: 'Mixed Connections',
    mode: 'Cross-Testament Mix', leftLabel: 'Biblical Entity', rightLabel: 'Scripture Association',
    questionText: 'Connect these diverse biblical records to their accurate descriptions:',
    difficulty: 'Moderate', timerSeconds: 30,
    pairs: [
      ['Mount Carmel', 'Site of the contest between Elijah and 450 prophets of Baal', '1 Kings 18:19'],
      ['Dorcas (Tabitha)', 'Disciple full of good works and alms raised by Peter at Joppa', 'Acts 9:36-41'],
      ['Boaz', 'Kinsman-redeemer of Bethlehem who married the Moabitess Ruth', 'Ruth 4:9-10'],
      ['Gamaliel', 'Respected doctor of the Law who advised the Sanhedrin regarding the apostles', 'Acts 5:34-39']
    ]
  },
  {
    level: 5, challengeIndex: 3,
    stage: 1, stageTitle: 'Basic Connections', levelTitle: 'Mixed Connections',
    mode: 'Cross-Testament Mix', leftLabel: 'Biblical Entity', rightLabel: 'Scripture Association',
    questionText: 'Match these figures and articles across both Testaments:',
    difficulty: 'Difficult', timerSeconds: 30,
    pairs: [
      ['Melchizedek', 'King of Salem and priest of the Most High God who blessed Abram', 'Genesis 14:18-20'],
      ['Huldah', 'Prophetess consulted by King Josiah\'s delegation after finding the Law', '2 Kings 22:14'],
      ['Ebed-Melech', 'Ethiopian official who pulled Jeremiah out of the miry cistern', 'Jeremiah 38:7-13'],
      ['Onesiphorus', 'Ephesian disciple who often refreshed Paul in his Roman chains', '2 Timothy 1:16']
    ]
  },
  {
    level: 5, challengeIndex: 4,
    stage: 1, stageTitle: 'Basic Connections', levelTitle: 'Mixed Connections',
    mode: 'Cross-Testament Mix', leftLabel: 'Biblical Entity', rightLabel: 'Scripture Association',
    questionText: 'Connect these people and historic markers:',
    difficulty: 'Very Difficult', timerSeconds: 30,
    pairs: [
      ['Bezalel', 'Artisan called by name and filled with God\'s Spirit to build the tabernacle', 'Exodus 31:1-5'],
      ['Jael', 'Wife of Heber the Kenite who struck a tent pin through Sisera', 'Judges 4:17-21'],
      ['Tertius', 'Scribe who transcribed Paul\'s Epistle to the Romans', 'Romans 16:22'],
      ['Tychicus', 'Paul\'s faithful minister and courier sent to Ephesus and Colossae', 'Ephesians 6:21; Colossians 4:7']
    ]
  },
  {
    level: 5, challengeIndex: 5,
    stage: 1, stageTitle: 'Basic Connections', levelTitle: 'Mixed Connections',
    mode: 'Cross-Testament Mix', leftLabel: 'Biblical Entity', rightLabel: 'Scripture Association',
    questionText: 'Stage 1 Finale Boss: Master these crucial scriptural connections:',
    difficulty: 'Mini-boss', timerSeconds: 25,
    pairs: [
      ['Shiphrah', 'Hebrew midwife who feared God and spared newborn baby boys', 'Exodus 1:15-17'],
      ['Barzillai', 'Elderly Gileadite who brought food and bedding to David at Mahanaim', '2 Samuel 17:27-29'],
      ['Epaphras', 'Colossian servant of Christ who wrestled fervently in prayer for believers', 'Colossians 4:12'],
      ['Sosthenes', 'Ruler of the Corinthian synagogue beaten before Gallio\'s judgment seat', 'Acts 18:17; 1 Corinthians 1:1']
    ]
  },

  // =========================================================================
  // STAGE 2 — BIBLICAL FAMILIES (Levels 6–10 · Moderate)
  // =========================================================================

  // Level 6: Patriarch Families (Abraham, Isaac, Jacob lines)
  {
    level: 6, challengeIndex: 1,
    stage: 2, stageTitle: 'Biblical Families', levelTitle: 'Patriarch Families',
    mode: 'Family & Kinship', leftLabel: 'Patriarchal Figure', rightLabel: 'Immediate Family Connection',
    questionText: 'Match each patriarch to his family relationship:',
    difficulty: 'Accessible', timerSeconds: 30,
    pairs: [
      ['Terah', 'Father of Abraham, Nahor, and Haran who lived in Ur', 'Genesis 11:26-27'],
      ['Sarah', 'Wife of Abraham who gave birth to Isaac in her old age', 'Genesis 17:19; 21:2'],
      ['Hagar', 'Egyptian handmaid of Sarah who bore Ishmael to Abraham', 'Genesis 16:1-3, 15'],
      ['Lot', 'Nephew of Abraham who journeyed with him and settled near Sodom', 'Genesis 11:31; 13:12']
    ]
  },
  {
    level: 6, challengeIndex: 2,
    stage: 2, stageTitle: 'Biblical Families', levelTitle: 'Patriarch Families',
    mode: 'Family & Kinship', leftLabel: 'Patriarchal Figure', rightLabel: 'Immediate Family Connection',
    questionText: 'Match each relative in Isaac and Jacob\'s household:',
    difficulty: 'Moderate', timerSeconds: 30,
    pairs: [
      ['Rebekah', 'Sister of Laban who became the beloved wife of Isaac', 'Genesis 24:29, 67'],
      ['Esau', 'Firstborn twin of Isaac and Rebekah who sold his birthright for pottage', 'Genesis 25:24-34'],
      ['Laban', 'Uncle and father-in-law of Jacob who tricked him with Leah', 'Genesis 29:16-25'],
      ['Rachel', 'Jacob\'s favoured wife for whom he served Laban fourteen years', 'Genesis 29:18, 30']
    ]
  },
  {
    level: 6, challengeIndex: 3,
    stage: 2, stageTitle: 'Biblical Families', levelTitle: 'Patriarch Families',
    mode: 'Family & Kinship', leftLabel: 'Patriarchal Figure', rightLabel: 'Immediate Family Connection',
    questionText: 'Connect these mothers in Jacob\'s family to their sons:',
    difficulty: 'Difficult', timerSeconds: 30,
    pairs: [
      ['Leah', 'Bore Reuben, Simeon, Levi, Judah, Issachar, and Zebulun to Jacob', 'Genesis 29:32-35; 30:17-20'],
      ['Bilhah', 'Rachel\'s handmaid who bore Dan and Naphtali to Jacob', 'Genesis 30:4-8'],
      ['Zilpah', 'Leah\'s handmaid who bore Gad and Asher to Jacob', 'Genesis 30:9-13'],
      ['Rachel', 'Bore Joseph and Benjamin, dying at Ephrath during childbirth', 'Genesis 30:22-24; 35:16-18']
    ]
  },
  {
    level: 6, challengeIndex: 4,
    stage: 2, stageTitle: 'Biblical Families', levelTitle: 'Patriarch Families',
    mode: 'Family & Kinship', leftLabel: 'Patriarchal Figure', rightLabel: 'Immediate Family Connection',
    questionText: 'Match each son of Jacob to his biblical distinction:',
    difficulty: 'Very Difficult', timerSeconds: 30,
    pairs: [
      ['Reuben', 'Firstborn who prevented his brothers from slaying Joseph in the pit', 'Genesis 37:21-22'],
      ['Judah', 'Offered himself as surety for Benjamin and line of the Messiah', 'Genesis 43:8-9; 49:10'],
      ['Joseph', 'Coat of many colors, sold into Egypt, and saved his family from famine', 'Genesis 37:3, 28; 50:20'],
      ['Benjamin', 'Youngest son of Jacob whom Jacob called "son of my right hand"', 'Genesis 35:18']
    ]
  },
  {
    level: 6, challengeIndex: 5,
    stage: 2, stageTitle: 'Biblical Families', levelTitle: 'Patriarch Families',
    mode: 'Family & Kinship', leftLabel: 'Patriarchal Figure', rightLabel: 'Immediate Family Connection',
    questionText: 'Level 6 Mini-boss: Connect these extended patriarchal relatives:',
    difficulty: 'Mini-boss', timerSeconds: 25,
    pairs: [
      ['Keturah', 'Wife taken by Abraham after Sarah died, bearing Zimran and Midian', 'Genesis 25:1-2'],
      ['Bethuel', 'Son of Nahor and Milcah, and father of Rebekah and Laban', 'Genesis 24:15, 29'],
      ['Dinah', 'Daughter of Jacob and Leah whose defilement provoked Simeon and Levi', 'Genesis 30:21; 34:1-26'],
      ['Manasseh and Ephraim', 'Sons of Joseph born in Egypt adopted by Jacob with crossed hands', 'Genesis 41:50-52; 48:13-19']
    ]
  },

  // Level 7: Mothers and Children (Maternal Ties)
  {
    level: 7, challengeIndex: 1,
    stage: 2, stageTitle: 'Biblical Families', levelTitle: 'Mothers and Children',
    mode: 'Mother & Child', leftLabel: 'Biblical Mother', rightLabel: 'Recorded Child or Children',
    questionText: 'Match each mother to her famous child:',
    difficulty: 'Accessible', timerSeconds: 30,
    pairs: [
      ['Eve', 'Mother of Cain, Abel, and Seth', 'Genesis 4:1-2, 25'],
      ['Jochebed', 'Mother of Moses, Aaron, and Miriam who hid baby Moses in an ark of bulrushes', 'Exodus 2:1-3; Numbers 26:59'],
      ['Hannah', 'Prayed at Shiloh in bitterness of soul and gave birth to the prophet Samuel', '1 Samuel 1:10, 20'],
      ['Mary', 'Virgin of Nazareth who conceived by the Holy Ghost and bore Jesus', 'Luke 1:26-35; 2:7']
    ]
  },
  {
    level: 7, challengeIndex: 2,
    stage: 2, stageTitle: 'Biblical Families', levelTitle: 'Mothers and Children',
    mode: 'Mother & Child', leftLabel: 'Biblical Mother', rightLabel: 'Recorded Child or Children',
    questionText: 'Connect these mothers to their children in the biblical record:',
    difficulty: 'Moderate', timerSeconds: 30,
    pairs: [
      ['Elizabeth', 'Wife of Zacharias who gave birth to John the Baptist in old age', 'Luke 1:5, 57-60'],
      ['Eunice', 'Faithful Jewish mother of Timothy who taught him Holy Scriptures', '2 Timothy 1:5; 3:15'],
      ['Bathsheba', 'Wife of Uriah who later bore King Solomon to David', '2 Samuel 12:24'],
      ['Naomi', 'Mother of Mahlon and Chilion, later loving nurse to Boaz and Ruth\'s son Obed', 'Ruth 1:2; 4:16-17']
    ]
  },
  {
    level: 7, challengeIndex: 3,
    stage: 2, stageTitle: 'Biblical Families', levelTitle: 'Mothers and Children',
    mode: 'Mother & Child', leftLabel: 'Biblical Mother', rightLabel: 'Recorded Child or Children',
    questionText: 'Match these royal and matriarchal mothers:',
    difficulty: 'Difficult', timerSeconds: 30,
    pairs: [
      ['Rizpah', 'Saul\'s concubine who guarded the bodies of her sons Armoni and Mephibosheth', '2 Samuel 21:8-10'],
      ['Athaliah', 'Mother of King Ahaziah of Judah who massacred her own royal grandchildren', '2 Kings 11:1'],
      ['Salome (wife of Zebedee)', 'Mother of the apostles James and John who asked for places at Christ\'s throne', 'Matthew 20:20-21; 27:56'],
      ['Milcah', 'Daughter of Haran who bore Bethuel, the father of Rebekah', 'Genesis 22:20-23']
    ]
  },
  {
    level: 7, challengeIndex: 4,
    stage: 2, stageTitle: 'Biblical Families', levelTitle: 'Mothers and Children',
    mode: 'Mother & Child', leftLabel: 'Biblical Mother', rightLabel: 'Recorded Child or Children',
    questionText: 'Connect these mothers to their scriptural offspring:',
    difficulty: 'Very Difficult', timerSeconds: 30,
    pairs: [
      ['Peninnah', 'Wife of Elkanah who had children and provoked childless Hannah', '1 Samuel 1:2, 6'],
      ['Hagar', 'Bore Ishmael whom God promised would become a great nation', 'Genesis 16:15; 21:18'],
      ['Asenath', 'Egyptian daughter of Potipherah priest of On who bore Manasseh and Ephraim to Joseph', 'Genesis 41:50-52'],
      ['Zeruiah', 'Sister of King David and mother of Joab, Abishai, and Asahel', '1 Chronicles 2:16; 2 Samuel 2:18']
    ]
  },
  {
    level: 7, challengeIndex: 5,
    stage: 2, stageTitle: 'Biblical Families', levelTitle: 'Mothers and Children',
    mode: 'Mother & Child', leftLabel: 'Biblical Mother', rightLabel: 'Recorded Child or Children',
    questionText: 'Level 7 Mini-boss: Link these less common mothers to their descendants:',
    difficulty: 'Mini-boss', timerSeconds: 25,
    pairs: [
      ['Maachah', 'Mother of King Abijam of Judah who made an abominable idol in a grove', '1 Kings 15:1-2, 13'],
      ['Shelomith', 'Daughter of Dibri whose son blasphemed the Name in the camp', 'Leviticus 24:11'],
      ['Abigail', 'David\'s wife who bore him Chileab (Daniel), his second-born son', '2 Samuel 3:3; 1 Chronicles 3:1'],
      ['Lois', 'Grandmother of Timothy commended for unfeigned faith', '2 Timothy 1:5']
    ]
  },

  // Level 8: Siblings and Relatives (Kinship Ties)
  {
    level: 8, challengeIndex: 1,
    stage: 2, stageTitle: 'Biblical Families', levelTitle: 'Siblings and Relatives',
    mode: 'Sibling & Kin', leftLabel: 'Biblical Person', rightLabel: 'Brother, Sister or Relative',
    questionText: 'Match each person to their immediate sibling:',
    difficulty: 'Accessible', timerSeconds: 30,
    pairs: [
      ['Cain', 'Older brother who slew Abel out of envy in the field', 'Genesis 4:8'],
      ['Moses', 'Brother of Aaron the high priest and Miriam the prophetess', 'Exodus 4:14; 15:20'],
      ['Jacob', 'Twin brother who held Esau\'s heel at birth', 'Genesis 25:26'],
      ['Andrew', 'Brother of Simon Peter who brought him to Jesus', 'John 1:40-42']
    ]
  },
  {
    level: 8, challengeIndex: 2,
    stage: 2, stageTitle: 'Biblical Families', levelTitle: 'Siblings and Relatives',
    mode: 'Sibling & Kin', leftLabel: 'Biblical Person', rightLabel: 'Brother, Sister or Relative',
    questionText: 'Connect these biblical brothers and sisters:',
    difficulty: 'Moderate', timerSeconds: 30,
    pairs: [
      ['Martha and Mary', 'Sisters of Lazarus of Bethany whom Jesus raised from the dead', 'John 11:1-44'],
      ['James and John', 'Sons of Zebedee and partners in fishing whom Jesus called Boanerges', 'Mark 1:19-20; 3:17'],
      ['Jonathan', 'Brother of Michal and Merab, and son of King Saul', '1 Samuel 14:49'],
      ['Absalom', 'Brother of Tamar who killed Amnon for violating her', '2 Samuel 13:20-29']
    ]
  },
  {
    level: 8, challengeIndex: 3,
    stage: 2, stageTitle: 'Biblical Families', levelTitle: 'Siblings and Relatives',
    mode: 'Sibling & Kin', leftLabel: 'Biblical Person', rightLabel: 'Brother, Sister or Relative',
    questionText: 'Match these uncle, nephew, and cousin relationships:',
    difficulty: 'Difficult', timerSeconds: 30,
    pairs: [
      ['Barnabas', 'Cousin (or uncle) to John Mark who traveled on mission', 'Colossians 4:10'],
      ['Mordecai', 'Cousin who adopted orphaned Hadassah (Esther) as his daughter', 'Esther 2:7'],
      ['Caleb', 'Uncle of Othniel who gave him his daughter Achsah in marriage', 'Joshua 15:17'],
      ['Joab', 'Nephew of King David, being the son of David\'s sister Zeruiah', '2 Samuel 2:18']
    ]
  },
  {
    level: 8, challengeIndex: 4,
    stage: 2, stageTitle: 'Biblical Families', levelTitle: 'Siblings and Relatives',
    mode: 'Sibling & Kin', leftLabel: 'Biblical Person', rightLabel: 'Brother, Sister or Relative',
    questionText: 'Connect these complex biblical relatives:',
    difficulty: 'Very Difficult', timerSeconds: 30,
    pairs: [
      ['Nadab and Abihu', 'Eldest brothers of Eleazar and Ithamar consumed by strange fire', 'Leviticus 10:1-2'],
      ['Abner', 'Cousin of King Saul and commander of his army', '1 Samuel 14:50'],
      ['Ahaziah of Judah', 'Nephew of King Joram of Israel through his mother Athaliah', '2 Kings 8:25-26'],
      ['Elisabeth', 'Cousin (kinswoman) of Mary the mother of Jesus', 'Luke 1:36']
    ]
  },
  {
    level: 8, challengeIndex: 5,
    stage: 2, stageTitle: 'Biblical Families', levelTitle: 'Siblings and Relatives',
    mode: 'Sibling & Kin', leftLabel: 'Biblical Person', rightLabel: 'Brother, Sister or Relative',
    questionText: 'Level 8 Mini-boss: Link these obscure sibling groups:',
    difficulty: 'Mini-boss', timerSeconds: 25,
    pairs: [
      ['Mahlah, Noah, Hoglah, Milcah, and Tirzah', 'Five daughters of Zelophehad who stood before Moses for their inheritance', 'Numbers 27:1-7'],
      ['Shammah', 'Third son of Jesse and older brother of David who fought Philistines', '1 Samuel 16:9; 17:13'],
      ['Amnon', 'Firstborn son of David slain by his half-brother Absalom', '2 Samuel 3:2; 13:28-29'],
      ['Jehosheba', 'Sister of King Ahaziah who hid baby Joash in the house of the Lord', '2 Kings 11:2']
    ]
  },

  // Level 9: Royal Families (Dynasties of Israel & Judah)
  {
    level: 9, challengeIndex: 1,
    stage: 2, stageTitle: 'Biblical Families', levelTitle: 'Royal Families',
    mode: 'Monarch & Lineage', leftLabel: 'Royal Figure', rightLabel: 'Dynastic Connection or Successor',
    questionText: 'Match each king to his royal relationship:',
    difficulty: 'Accessible', timerSeconds: 30,
    pairs: [
      ['Saul', 'Son of Kish of Benjamin and first anointed king over all Israel', '1 Samuel 9:1-2; 10:1'],
      ['David', 'Eighth son of Jesse of Bethlehem who succeeded Saul over all Israel', '1 Samuel 16:10-13; 2 Samuel 5:3'],
      ['Solomon', 'Son of David and Bathsheba whose reign was marked by gold and peace', '2 Samuel 12:24; 1 Kings 4:20-25'],
      ['Rehoboam', 'Son of Solomon whose harsh tax answer fractured Israel into two kingdoms', '1 Kings 12:1-17']
    ]
  },
  {
    level: 9, challengeIndex: 2,
    stage: 2, stageTitle: 'Biblical Families', levelTitle: 'Royal Families',
    mode: 'Monarch & Lineage', leftLabel: 'Royal Figure', rightLabel: 'Dynastic Connection or Successor',
    questionText: 'Connect these divided monarchy kings to their fathers or successors:',
    difficulty: 'Moderate', timerSeconds: 30,
    pairs: [
      ['Jeroboam I', 'Son of Nebat who set up golden calves at Dan and Bethel', '1 Kings 11:26; 12:28-29'],
      ['Asa', 'King of Judah who removed idols and relied on God against the Ethiopians', '1 Kings 15:8-14; 2 Chronicles 14:9-12'],
      ['Jehoshaphat', 'Son of Asa who appointed singers to praise the Lord before Judah\'s army', '1 Kings 22:41-43; 2 Chronicles 20:21'],
      ['Ahab', 'Son of Omri who married Jezebel of Sidon and served Baal in Samaria', '1 Kings 16:29-31']
    ]
  },
  {
    level: 9, challengeIndex: 3,
    stage: 2, stageTitle: 'Biblical Families', levelTitle: 'Royal Families',
    mode: 'Monarch & Lineage', leftLabel: 'Royal Figure', rightLabel: 'Dynastic Connection or Successor',
    questionText: 'Match these kings of Judah to their historic accounts:',
    difficulty: 'Difficult', timerSeconds: 30,
    pairs: [
      ['Uzziah (Azariah)', 'King struck with leprosy after unlawfully burning incense in the temple', '2 Chronicles 26:16-21'],
      ['Hezekiah', 'Son of Ahaz who removed high places and trusted God against Sennacherib', '2 Kings 18:1-5; 19:35'],
      ['Manasseh', 'Son of Hezekiah who reigned fifty-five years and filled Jerusalem with blood', '2 Kings 21:1-16'],
      ['Josiah', 'Boy king eight years old who repaired the temple and renewed the covenant', '2 Kings 22:1-3; 23:1-3']
    ]
  },
  {
    level: 9, challengeIndex: 4,
    stage: 2, stageTitle: 'Biblical Families', levelTitle: 'Royal Families',
    mode: 'Monarch & Lineage', leftLabel: 'Royal Figure', rightLabel: 'Dynastic Connection or Successor',
    questionText: 'Connect these tragic monarchs of the final years of Judah:',
    difficulty: 'Very Difficult', timerSeconds: 30,
    pairs: [
      ['Jehoiakim', 'Son of Josiah who cut Jeremiah\'s scroll with a penknife and cast it into the fire', 'Jeremiah 36:23'],
      ['Jehoiachin', 'Carried to Babylon after three months\' reign and later released by Evil-Merodach', '2 Kings 24:8-15; 25:27'],
      ['Zedekiah', 'Last reigning king of Judah whose eyes were put out at Riblah after his sons were slain', '2 Kings 25:6-7'],
      ['Gedaliah', 'Governor appointed by Nebuchadnezzar over Judah\'s remnant, murdered by Ishmael', '2 Kings 25:22-25']
    ]
  },
  {
    level: 9, challengeIndex: 5,
    stage: 2, stageTitle: 'Biblical Families', levelTitle: 'Royal Families',
    mode: 'Monarch & Lineage', leftLabel: 'Royal Figure', rightLabel: 'Dynastic Connection or Successor',
    questionText: 'Level 9 Mini-boss: Link these Northern and foreign rulers:',
    difficulty: 'Mini-boss', timerSeconds: 25,
    pairs: [
      ['Jehu', 'Anointed by Elisha\'s young prophet to wipe out the house of Ahab', '2 Kings 9:1-10'],
      ['Hoshea', 'Last king of Israel before Shalmaneser carried the northern tribes to Assyria', '2 Kings 17:1-6'],
      ['Cyrus', 'Persian king prophesied by Isaiah who issued decree allowing Jews to rebuild temple', 'Isaiah 44:28; Ezra 1:1-3'],
      ['Herod the Great', 'Idumean king who slaughtered the infants of Bethlehem seeking the Messiah', 'Matthew 2:1-16']
    ]
  },

  // Level 10: Family Tree Boss (Complex genealogical ties)
  {
    level: 10, challengeIndex: 1,
    stage: 2, stageTitle: 'Biblical Families', levelTitle: 'Family Tree Boss',
    mode: 'Family & Kinship', leftLabel: 'Biblical Person', rightLabel: 'Exact Scriptural Relationship',
    questionText: 'Match each person to their exact family connection:',
    difficulty: 'Accessible', timerSeconds: 30,
    pairs: [
      ['Mephibosheth', 'Lame son of Jonathan welcomed to David\'s royal table for Jonathan\'s sake', '2 Samuel 9:6-7'],
      ['Jethro (Reuel)', 'Priest of Midian and father-in-law of Moses', 'Exodus 3:1; 18:1'],
      ['Boaz', 'Son of Salmon and Rahab who married Ruth', 'Matthew 1:5; Ruth 4:21'],
      ['Obed', 'Son of Boaz and Ruth, father of Jesse, and grandfather of David', 'Ruth 4:17']
    ]
  },
  {
    level: 10, challengeIndex: 2,
    stage: 2, stageTitle: 'Biblical Families', levelTitle: 'Family Tree Boss',
    mode: 'Family & Kinship', leftLabel: 'Biblical Person', rightLabel: 'Exact Scriptural Relationship',
    questionText: 'Connect these priests and royal in-laws:',
    difficulty: 'Moderate', timerSeconds: 30,
    pairs: [
      ['Phinehas', 'Son of Eleazar who made atonement with a javelin at Peor', 'Numbers 25:7-13'],
      ['Eli', 'High priest and judge of Shiloh whose corrupt sons were Hophni and Phinehas', '1 Samuel 1:3; 2:12'],
      ['Ahimelech', 'Priest of Nob who gave David the shewbread and Goliath\'s sword', '1 Samuel 17:54; 21:1-9'],
      ['Abiathar', 'Son of Ahimelech who escaped Doeg\'s slaughter at Nob and joined David', '1 Samuel 22:20-23']
    ]
  },
  {
    level: 10, challengeIndex: 3,
    stage: 2, stageTitle: 'Biblical Families', levelTitle: 'Family Tree Boss',
    mode: 'Family & Kinship', leftLabel: 'Biblical Person', rightLabel: 'Exact Scriptural Relationship',
    questionText: 'Match these Davidic family figures:',
    difficulty: 'Difficult', timerSeconds: 30,
    pairs: [
      ['Jesse', 'Bethlehemite father of eight sons, whose youngest was King David', '1 Samuel 16:10-13'],
      ['Adonijah', 'Eldest living son of David who exalted himself to be king before Solomon', '1 Kings 1:5-6'],
      ['Nathan the Prophet', 'Rebuked David for his sin with Bathsheba using the parable of the ewe lamb', '2 Samuel 12:1-7'],
      ['Benaiah son of Jehoiada', 'Mighty warrior who struck down Adonijah and Joab at Solomon\'s command', '1 Kings 2:25, 34']
    ]
  },
  {
    level: 10, challengeIndex: 4,
    stage: 2, stageTitle: 'Biblical Families', levelTitle: 'Family Tree Boss',
    mode: 'Family & Kinship', leftLabel: 'Biblical Person', rightLabel: 'Exact Scriptural Relationship',
    questionText: 'Connect these New Testament relatives:',
    difficulty: 'Very Difficult', timerSeconds: 30,
    pairs: [
      ['Zacharias', 'Priest of the course of Abia struck mute until John was named', 'Luke 1:5, 20, 64'],
      ['Salome', 'Daughter of Herodias who danced before Herod Antipas to demand Baptist\'s head', 'Matthew 14:6-8'],
      ['Philip the Tetrarch', 'Brother of Herod Antipas whose wife Herodias was unlawfully taken', 'Mark 6:17'],
      ['Bernice', 'Sister of King Agrippa II who accompanied him to hear Paul at Caesarea', 'Acts 25:13, 23']
    ]
  },
  {
    level: 10, challengeIndex: 5,
    stage: 2, stageTitle: 'Biblical Families', levelTitle: 'Family Tree Boss',
    mode: 'Family & Kinship', leftLabel: 'Biblical Person', rightLabel: 'Exact Scriptural Relationship',
    questionText: 'Stage 2 Finale Boss: Master these difficult genealogical ties:',
    difficulty: 'Mini-boss', timerSeconds: 25,
    pairs: [
      ['Zelophehad', 'Man of Manasseh who died in the wilderness leaving five daughters and no son', 'Numbers 27:1-3'],
      ['Kish', 'Mighty man of Benjamin whose lost asses led his son Saul to Samuel', '1 Samuel 9:1-3'],
      ['Chimham', 'Son of Barzillai the Gileadite taken by David into royal favor at Jerusalem', '2 Samuel 19:37-40'],
      ['Lois and Eunice', 'Grandmother and mother who instilled unfeigned faith into young Timothy', '2 Timothy 1:5']
    ]
  },

  // =========================================================================
  // STAGE 3 — PEOPLE AND THEIR ACTIONS (Levels 11–15 · Moderate to hard)
  // =========================================================================

  // Level 11: Heroes and Their Deeds (Courageous acts)
  {
    level: 11, challengeIndex: 1,
    stage: 3, stageTitle: 'People and Their Actions', levelTitle: 'Heroes and Their Deeds',
    mode: 'Person & Action', leftLabel: 'Biblical Hero', rightLabel: 'Recorded Exploit or Valor',
    questionText: 'Match each hero to their courageous deed:',
    difficulty: 'Accessible', timerSeconds: 30,
    pairs: [
      ['Shamgar son of Anath', 'Slew six hundred Philistines with an oxgoad to deliver Israel', 'Judges 3:31'],
      ['Jonathan', 'Scaled the rocky crag of Bozez with his armourbearer to rout Philistines', '1 Samuel 14:4-15'],
      ['Eleazar son of Dodo', 'Stood his ground in a field of barley until his hand clave unto sword', '2 Samuel 23:9-10; 1 Chronicles 11:12-14'],
      ['Shammah son of Agee', 'Defended a plot full of lentiles single-handedly against Philistines', '2 Samuel 23:11-12']
    ]
  },
  {
    level: 11, challengeIndex: 2,
    stage: 3, stageTitle: 'People and Their Actions', levelTitle: 'Heroes and Their Deeds',
    mode: 'Person & Action', leftLabel: 'Biblical Hero', rightLabel: 'Recorded Exploit or Valor',
    questionText: 'Connect these biblical figures to their bold actions:',
    difficulty: 'Moderate', timerSeconds: 30,
    pairs: [
      ['Benaiah', 'Went down into a pit on a snowy day and slew a lion', '2 Samuel 23:20'],
      ['Abishai', 'Slipped into Saul\'s camp with David and took spear and cruse of water', '1 Samuel 26:6-12'],
      ['Jashobeam', 'Chief of David\'s captains who lifted spear against three hundred slain at once', '1 Chronicles 11:11'],
      ['Three Mighty Men', 'Broke through Philistine host to draw water from Bethlehem\'s gate for David', '2 Samuel 23:15-17']
    ]
  },
  {
    level: 11, challengeIndex: 3,
    stage: 3, stageTitle: 'People and Their Actions', levelTitle: 'Heroes and Their Deeds',
    mode: 'Person & Action', leftLabel: 'Biblical Hero', rightLabel: 'Recorded Exploit or Valor',
    questionText: 'Match each deliverer to their remarkable deed:',
    difficulty: 'Difficult', timerSeconds: 30,
    pairs: [
      ['Ehud', 'Left-handed judge who plunged a double-edged dagger into King Eglon of Moab', 'Judges 3:16-22'],
      ['Jael', 'Gave fleeing general Sisera milk and drove a tent nail into his temples', 'Judges 4:18-21'],
      ['Samson', 'Slaughtered one thousand Philistines with the fresh jawbone of an ass', 'Judges 15:15-16'],
      ['Nehemiah', 'Stationed builders on Jerusalem\'s wall holding a tool in one hand and weapon in the other', 'Nehemiah 4:17-18']
    ]
  },
  {
    level: 11, challengeIndex: 4,
    stage: 3, stageTitle: 'People and Their Actions', levelTitle: 'Heroes and Their Deeds',
    mode: 'Person & Action', leftLabel: 'Biblical Hero', rightLabel: 'Recorded Exploit or Valor',
    questionText: 'Connect these heroic believers to their scriptural acts of mercy:',
    difficulty: 'Very Difficult', timerSeconds: 30,
    pairs: [
      ['Ebed-Melech', 'Obtained king\'s permission and lowered old rags under cords to rescue Jeremiah', 'Jeremiah 38:7-13'],
      ['Obadiah (Ahab\'s steward)', 'Hid one hundred of the Lord\'s prophets in caves by fifties and fed them bread and water', '1 Kings 18:3-4'],
      ['Jehosheba', 'Stole away infant Joash from amongst slain royal heirs to preserve David\'s line', '2 Kings 11:2-3'],
      ['Shiphrah and Puah', 'Defied the murderous decree of Pharaoh by preserving Hebrew newborn sons alive', 'Exodus 1:15-17']
    ]
  },
  {
    level: 11, challengeIndex: 5,
    stage: 3, stageTitle: 'People and Their Actions', levelTitle: 'Heroes and Their Deeds',
    mode: 'Person & Action', leftLabel: 'Biblical Hero', rightLabel: 'Recorded Exploit or Valor',
    questionText: 'Level 11 Mini-boss: Link these New Testament witnesses to their bold stands:',
    difficulty: 'Mini-boss', timerSeconds: 25,
    pairs: [
      ['Peter and John', 'Replied to Sanhedrin: "Whether it be right in the sight of God to hearken unto you more than unto God, judge ye"', 'Acts 4:19-20'],
      ['Stephen', 'Full of faith and power, saw heaven opened and Jesus standing at God\'s right hand', 'Acts 6:8; 7:55-56'],
      ['Paul and Silas', 'Sang praises unto God at midnight while locked in inner stocks in Philippi prison', 'Acts 16:24-25'],
      ['Priscilla and Aquila', 'Risked their own necks for Paul\'s life and instructed Apollos more accurately', 'Romans 16:3-4; Acts 18:26']
    ]
  },

  // Level 12: Prophets and Their Messages
  {
    level: 12, challengeIndex: 1,
    stage: 3, stageTitle: 'People and Their Actions', levelTitle: 'Prophets and Their Messages',
    mode: 'Prophet & Oracle', leftLabel: 'Prophet of God', rightLabel: 'Distinctive Prophetic Oracle or Act',
    questionText: 'Match each prophet to his dramatic prophetic message:',
    difficulty: 'Accessible', timerSeconds: 30,
    pairs: [
      ['Nathan', 'Confronted David with the ewe lamb parable saying "Thou art the man"', '2 Samuel 12:1-7'],
      ['Elijah', 'Pronounced three years of drought and mocked Baal\'s silent priests on Carmel', '1 Kings 17:1; 18:27'],
      ['Elisha', 'Healed Naaman the Syrian leper by commanding him to dip seven times in Jordan', '2 Kings 5:10-14'],
      ['Isaiah', 'Prophesied of the virgin birth and the Suffering Servant wounded for our transgressions', 'Isaiah 7:14; 53:5']
    ]
  },
  {
    level: 12, challengeIndex: 2,
    stage: 3, stageTitle: 'People and Their Actions', levelTitle: 'Prophets and Their Messages',
    mode: 'Prophet & Oracle', leftLabel: 'Prophet of God', rightLabel: 'Distinctive Prophetic Oracle or Act',
    questionText: 'Connect these major and minor prophets to their burdens:',
    difficulty: 'Moderate', timerSeconds: 30,
    pairs: [
      ['Jeremiah', 'Wore wooden yoke around neck to symbolize submission to Babylon\'s king', 'Jeremiah 27:2; 28:10'],
      ['Ezekiel', 'Saw vision of dry bones in the valley coming together with breath of life', 'Ezekiel 37:1-10'],
      ['Daniel', 'Interpreted mysterious handwriting Mene, Mene, Tekel, Upharsin for Belshazzar', 'Daniel 5:25-28'],
      ['Hosea', 'Commisioned to marry Gomer to symbolize God\'s unswerving love to faithless Israel', 'Hosea 1:2-3; 3:1']
    ]
  },
  {
    level: 12, challengeIndex: 3,
    stage: 3, stageTitle: 'People and Their Actions', levelTitle: 'Prophets and Their Messages',
    mode: 'Prophet & Oracle', leftLabel: 'Prophet of God', rightLabel: 'Distinctive Prophetic Oracle or Act',
    questionText: 'Match each prophetic messenger to his specific oracle:',
    difficulty: 'Difficult', timerSeconds: 30,
    pairs: [
      ['Joel', 'Proclaimed the day of the Lord with locust armies and promised Spirit outpouring', 'Joel 1:4; 2:28-29'],
      ['Amos', 'Herdsman of Tekoa who cried: "Let judgment run down as waters, and righteousness as a mighty stream"', 'Amos 1:1; 5:24'],
      ['Micah', 'Foretold the Messiah ruler would come forth out of Bethlehem Ephratah', 'Micah 5:2'],
      ['Nahum', 'Announced the complete fall and destruction of Nineveh\'s bloody city', 'Nahum 1:1; 3:1']
    ]
  },
  {
    level: 12, challengeIndex: 4,
    stage: 3, stageTitle: 'People and Their Actions', levelTitle: 'Prophets and Their Messages',
    mode: 'Prophet & Oracle', leftLabel: 'Prophet of God', rightLabel: 'Distinctive Prophetic Oracle or Act',
    questionText: 'Connect these post-exilic and minor prophets:',
    difficulty: 'Very Difficult', timerSeconds: 30,
    pairs: [
      ['Habakkuk', 'Wrestled on watchtower and sang: "The just shall live by his faith"', 'Habakkuk 2:1-4; 3:18-19'],
      ['Zephaniah', 'Warned of the great day of the Lord and sang of God rejoicing over Zion with singing', 'Zephaniah 1:14; 3:17'],
      ['Haggai', 'Urged returned exiles to consider their ways and finish rebuilding God\'s house', 'Haggai 1:4-8'],
      ['Malachi', 'Foretold the Sun of righteousness arising with healing in His wings and Elijah\'s arrival', 'Malachi 4:2, 5']
    ]
  },
  {
    level: 12, challengeIndex: 5,
    stage: 3, stageTitle: 'People and Their Actions', levelTitle: 'Prophets and Their Messages',
    mode: 'Prophet & Oracle', leftLabel: 'Prophet of God', rightLabel: 'Distinctive Prophetic Oracle or Act',
    questionText: 'Level 12 Mini-boss: Link these less-quoted prophets to their prophecies:',
    difficulty: 'Mini-boss', timerSeconds: 25,
    pairs: [
      ['Micaiah son of Imlah', 'Predicted Ahab would fall at Ramoth-Gilead despite 400 prophets of false peace', '1 Kings 22:14-28'],
      ['Ahijah the Shilonite', 'Tore his new garment into twelve pieces and gave ten to Jeroboam', '1 Kings 11:29-31'],
      ['Shemaiah', 'Warned King Rehoboam not to fight against his northern brethren of Israel', '1 Kings 12:22-24'],
      ['Agabus', 'Bound his own hands and feet with Paul\'s girdle to prophesy his arrest in Jerusalem', 'Acts 21:10-11']
    ]
  },

  // Level 13: Judges and Deliverers
  {
    level: 13, challengeIndex: 1,
    stage: 3, stageTitle: 'People and Their Actions', levelTitle: 'Judges and Deliverers',
    mode: 'Judge & Deliverance', leftLabel: 'Judge of Israel', rightLabel: 'Oppressor or Distinctive Exploit',
    questionText: 'Match each judge to their defining victory:',
    difficulty: 'Accessible', timerSeconds: 30,
    pairs: [
      ['Othniel', 'Nephew of Caleb who defeated Cushan-Rishathaim of Mesopotamia', 'Judges 3:9-11'],
      ['Ehud', 'Benjaminite who defeated Moab after slaying King Eglon', 'Judges 3:15, 29'],
      ['Deborah', 'Prophetess who summoned Barak to defeat Sisera at River Kishon', 'Judges 4:4-15'],
      ['Gideon (Jerubbaal)', 'Destroyed altar of Baal and routed Midian with three hundred men', 'Judges 6:25-32; 7:19-22']
    ]
  },
  {
    level: 13, challengeIndex: 2,
    stage: 3, stageTitle: 'People and Their Actions', levelTitle: 'Judges and Deliverers',
    mode: 'Judge & Deliverance', leftLabel: 'Judge of Israel', rightLabel: 'Oppressor or Distinctive Exploit',
    questionText: 'Connect these judges to their recorded history:',
    difficulty: 'Moderate', timerSeconds: 30,
    pairs: [
      ['Jephthah', 'Gileadite mighty warrior who defeated Ammon and made a rash vow', 'Judges 11:1, 30-33'],
      ['Samson', 'Nazirite who carried away the gates of Gaza and pulled down Dagon\'s temple', 'Judges 16:3, 29-30'],
      ['Shamgar', 'Delivered Israel from Philistines by killing 600 with an oxgoad', 'Judges 3:31'],
      ['Abdon', 'Judge of Pirathon whose forty sons and thirty nephews rode seventy ass colts', 'Judges 12:13-14']
    ]
  },
  {
    level: 13, challengeIndex: 3,
    stage: 3, stageTitle: 'People and Their Actions', levelTitle: 'Judges and Deliverers',
    mode: 'Judge & Deliverance', leftLabel: 'Judge of Israel', rightLabel: 'Oppressor or Distinctive Exploit',
    questionText: 'Match these lesser-known judges of Israel:',
    difficulty: 'Difficult', timerSeconds: 30,
    pairs: [
      ['Tola', 'Man of Issachar who rose up after Abimelech and judged Israel twenty-three years', 'Judges 10:1-2'],
      ['Jair', 'Gileadite judge who had thirty sons that rode on thirty ass colts over thirty cities', 'Judges 10:3-4'],
      ['Ibzan', 'Judge of Bethlehem who had thirty sons and thirty daughters married outside clan', 'Judges 12:8-9'],
      ['Elon', 'Zebulunite judge who led Israel for ten years and was buried in Aijalon', 'Judges 12:11-12']
    ]
  },
  {
    level: 13, challengeIndex: 4,
    stage: 3, stageTitle: 'People and Their Actions', levelTitle: 'Judges and Deliverers',
    mode: 'Judge & Deliverance', leftLabel: 'Judge of Israel', rightLabel: 'Oppressor or Distinctive Exploit',
    questionText: 'Connect these leaders and their adversaries during the judges\' era:',
    difficulty: 'Very Difficult', timerSeconds: 30,
    pairs: [
      ['Barak', 'General who refused to go to battle against Jabin\'s 900 iron chariots without Deborah', 'Judges 4:6-8'],
      ['Jotham', 'Youngest son of Gideon who stood on Mount Gerizim and spoke the fable of the trees', 'Judges 9:5, 7-20'],
      ['Manoah', 'Father of Samson from Zorah of the Danites who offered a kid on a rock', 'Judges 13:2, 19-20'],
      ['Eli', 'Priest and judge for forty years who fell backward off his seat when the ark was taken', '1 Samuel 4:18']
    ]
  },
  {
    level: 13, challengeIndex: 5,
    stage: 3, stageTitle: 'People and Their Actions', levelTitle: 'Judges and Deliverers',
    mode: 'Judge & Deliverance', leftLabel: 'Judge of Israel', rightLabel: 'Oppressor or Distinctive Exploit',
    questionText: 'Level 13 Mini-boss: Master these dramatic conflicts under the judges:',
    difficulty: 'Mini-boss', timerSeconds: 25,
    pairs: [
      ['Sisera', 'Captain of Jabin\'s host whose army was swept away by the river Kishon', 'Judges 4:2, 15; 5:21'],
      ['Eglon', 'Very fat king of Moab who oppressed Israel eighteen years until slain by Ehud', 'Judges 3:14, 17'],
      ['Zebah and Zalmunna', 'Kings of Midian pursued across Jordan and executed by Gideon for killing his brethren', 'Judges 8:10-21'],
      ['Abimelech', 'Gideon\'s son who slew his seventy brothers on one stone and had skull broken by woman with millstone', 'Judges 9:5, 53']
    ]
  },

  // Level 14: Apostles and Their Missions
  {
    level: 14, challengeIndex: 1,
    stage: 3, stageTitle: 'People and Their Actions', levelTitle: 'Apostles and Their Missions',
    mode: 'Apostle & Calling', leftLabel: 'Apostle or Disciple', rightLabel: 'Distinctive Commission or Field',
    questionText: 'Match each apostle to his recorded ministry calling:',
    difficulty: 'Accessible', timerSeconds: 30,
    pairs: [
      ['Simon Peter', 'Apostle to the circumcision entrusted with keys of the kingdom at Pentecost', 'Galatians 2:7-8; Acts 2:14'],
      ['John', 'Beloved disciple who cared for Mary and was exiled to Patmos', 'John 19:26-27; Revelation 1:9'],
      ['Paul', 'Chosen vessel commissioned by Christ to bear His name before Gentiles and kings', 'Acts 9:15'],
      ['Matthew (Levi)', 'Publican who left his receipt of custom to follow Christ and authored the first Gospel', 'Matthew 9:9']
    ]
  },
  {
    level: 14, challengeIndex: 2,
    stage: 3, stageTitle: 'People and Their Actions', levelTitle: 'Apostles and Their Missions',
    mode: 'Apostle & Calling', leftLabel: 'Apostle or Disciple', rightLabel: 'Distinctive Commission or Field',
    questionText: 'Connect these members of the Twelve to their recorded acts:',
    difficulty: 'Moderate', timerSeconds: 30,
    pairs: [
      ['Thomas', 'Demanded to see nail prints and thrust hand into side before confessing "My Lord and my God"', 'John 20:25-28'],
      ['Philip', 'Brought Nathanael to Jesus saying "We have found him... Come and see"', 'John 1:45-46'],
      ['Nathanael (Bartholomew)', 'Guileless Israelite whom Jesus saw sitting under the fig tree', 'John 1:47-49'],
      ['James the son of Zebedee', 'First apostle martyred, slain with the sword by Herod Agrippa I', 'Acts 12:1-2']
    ]
  },
  {
    level: 14, challengeIndex: 3,
    stage: 3, stageTitle: 'People and Their Actions', levelTitle: 'Apostles and Their Missions',
    mode: 'Apostle & Calling', leftLabel: 'Apostle or Disciple', rightLabel: 'Distinctive Commission or Field',
    questionText: 'Match these apostolic leaders and co-laborers:',
    difficulty: 'Difficult', timerSeconds: 30,
    pairs: [
      ['Matthias', 'Chosen by lot among believers to take the apostleship vacated by Judas', 'Acts 1:23-26'],
      ['James the Lord\'s brother', 'Pillar of the Jerusalem church who presided over the Jerusalem Council', 'Galatians 1:19; Acts 15:13'],
      ['Barnabas', 'Levite from Cyprus who sold land, welcomed Saul of Tarsus, and led mission to Antioch', 'Acts 4:36-37; 9:27; 11:22'],
      ['Silas (Silvanus)', 'Prophet and Roman citizen chosen by Paul to replace Barnabas on second mission', 'Acts 15:32, 40']
    ]
  },
  {
    level: 14, challengeIndex: 4,
    stage: 3, stageTitle: 'People and Their Actions', levelTitle: 'Apostles and Their Missions',
    mode: 'Apostle & Calling', leftLabel: 'Apostle or Disciple', rightLabel: 'Distinctive Commission or Field',
    questionText: 'Connect these apostolic delegates to their assigned regions:',
    difficulty: 'Very Difficult', timerSeconds: 30,
    pairs: [
      ['Timothy', 'Stationed at Ephesus to instruct against false teachers and ordain elders', '1 Timothy 1:3; 3:1'],
      ['Titus', 'Left in Crete to set in order things wanting and ordain elders in every city', 'Titus 1:5'],
      ['Luke', 'The beloved physician who accompanied Paul on his sea journeys and penned Acts', 'Colossians 4:14; 2 Timothy 4:11'],
      ['John Mark', 'Left Paul and Barnabas at Perga, later restored as profitable for the ministry', 'Acts 13:13; 2 Timothy 4:11']
    ]
  },
  {
    level: 14, challengeIndex: 5,
    stage: 3, stageTitle: 'People and Their Actions', levelTitle: 'Apostles and Their Missions',
    mode: 'Apostle & Calling', leftLabel: 'Apostle or Disciple', rightLabel: 'Distinctive Commission or Field',
    questionText: 'Level 14 Mini-boss: Link these seven appointed deacons and evangelists:',
    difficulty: 'Mini-boss', timerSeconds: 25,
    pairs: [
      ['Stephen', 'First deacon martyr who did great wonders and spoke with wisdom none could resist', 'Acts 6:5, 8-10'],
      ['Philip the Evangelist', 'Preached Christ in Samaria with great joy and baptized the Ethiopian eunuch', 'Acts 8:5, 38'],
      ['Prochorus and Nicanor', 'Two of the seven godly men ordained by laying on of hands in Jerusalem', 'Acts 6:5-6'],
      ['Nicolaus of Antioch', 'Proselyte from Antioch appointed among the seven to serve tables', 'Acts 6:5']
    ]
  },

  // Level 15: Action Match Boss
  {
    level: 15, challengeIndex: 1,
    stage: 3, stageTitle: 'People and Their Actions', levelTitle: 'Action Match Boss',
    mode: 'Person & Exploit', leftLabel: 'Biblical Character', rightLabel: 'Decisive Dramatic Action',
    questionText: 'Match each character to their defining biblical exploit:',
    difficulty: 'Accessible', timerSeconds: 30,
    pairs: [
      ['Bezalel', 'Artisan called by God to construct the ark, lampstand, and priestly garments', 'Exodus 31:1-11'],
      ['Huldah', 'Jerusalem prophetess who declared judgment upon Judah but peace to humble Josiah', '2 Kings 22:14-20'],
      ['Onesiphorus', 'Traveled to Rome, searched diligently for prisoner Paul, and was not ashamed of his chains', '2 Timothy 1:16-17'],
      ['Ebed-Melech', 'Appealed to King Zedekiah to rescue Jeremiah from sinking in the cistern mire', 'Jeremiah 38:8-13']
    ]
  },
  {
    level: 15, challengeIndex: 2,
    stage: 3, stageTitle: 'People and Their Actions', levelTitle: 'Action Match Boss',
    mode: 'Person & Exploit', leftLabel: 'Biblical Character', rightLabel: 'Decisive Dramatic Action',
    questionText: 'Connect these figures to their bold deeds:',
    difficulty: 'Moderate', timerSeconds: 30,
    pairs: [
      ['Jael', 'Welcomed tired general Sisera into her tent and drove tent pin through his head', 'Judges 4:17-21'],
      ['Tertius', 'Inscribed the words of Paul\'s masterpiece letter to the Romans', 'Romans 16:22'],
      ['Epaphras', 'Planted or nurtured the church at Colossae and wrestled in prayer for them', 'Colossians 1:7; 4:12'],
      ['Tychicus', 'Sent by Paul to Ephesus and Colossae as a beloved brother and faithful minister', 'Ephesians 6:21-22; Colossians 4:7-8']
    ]
  },
  {
    level: 15, challengeIndex: 3,
    stage: 3, stageTitle: 'People and Their Actions', levelTitle: 'Action Match Boss',
    mode: 'Person & Exploit', leftLabel: 'Biblical Character', rightLabel: 'Decisive Dramatic Action',
    questionText: 'Match each historic figure to their recorded work:',
    difficulty: 'Difficult', timerSeconds: 30,
    pairs: [
      ['Sosthenes', 'Ruler of the Corinthian synagogue beaten before Gallio, co-sender of 1 Corinthians', 'Acts 18:17; 1 Corinthians 1:1'],
      ['Barzillai', 'Eighty-year-old Gileadite who provided food and beds for David at Mahanaim', '2 Samuel 19:32'],
      ['Shiphrah and Puah', 'Midwives who preserved Hebrew boys because they feared God above Pharaoh', 'Exodus 1:17, 21'],
      ['Micaiah', 'Prophesied Ahab would not return alive from battle, imprisoned with bread and water of affliction', '1 Kings 22:26-28']
    ]
  },
  {
    level: 15, challengeIndex: 4,
    stage: 3, stageTitle: 'People and Their Actions', levelTitle: 'Action Match Boss',
    mode: 'Person & Exploit', leftLabel: 'Biblical Character', rightLabel: 'Decisive Dramatic Action',
    questionText: 'Connect these courageous biblical actors:',
    difficulty: 'Very Difficult', timerSeconds: 30,
    pairs: [
      ['Jehosheba', 'King\'s daughter who hid young Joash for six years in the house of the Lord', '2 Kings 11:2-3'],
      ['Rizpah', 'Sat on sackcloth on rock from harvest until rain, preventing birds and beasts from tearing Saul\'s sons', '2 Samuel 21:10'],
      ['Gaius', 'Host of Paul and of the whole church at Corinth commended in Romans and 3 John', 'Romans 16:23; 3 John 1:1'],
      ['Erastus', 'City treasurer (chamberlain) of Corinth who sent greetings in Paul\'s epistle', 'Romans 16:23']
    ]
  },
  {
    level: 15, challengeIndex: 5,
    stage: 3, stageTitle: 'People and Their Actions', levelTitle: 'Action Match Boss',
    mode: 'Person & Exploit', leftLabel: 'Biblical Character', rightLabel: 'Decisive Dramatic Action',
    questionText: 'Stage 3 Finale Boss: Match these exceptional servants to their scriptural records:',
    difficulty: 'Mini-boss', timerSeconds: 25,
    pairs: [
      ['Aristarchus', 'Macedonian of Thessalonica dragged into Ephesian theatre and fellow prisoner with Paul', 'Acts 19:29; Colossians 4:10'],
      ['Epaphroditus', 'Philippian messenger who brought aid to Paul in prison and nearly died of sickness', 'Philippians 2:25-30'],
      ['Onesimus', 'Runaway slave of Philemon who was converted through Paul in prison and sent back as a brother', 'Philemon 1:10-16'],
      ['Archippus', 'Fellow soldier instructed by Paul: "Take heed to the ministry which thou hast received in the Lord"', 'Colossians 4:17; Philemon 1:2']
    ]
  },
];
