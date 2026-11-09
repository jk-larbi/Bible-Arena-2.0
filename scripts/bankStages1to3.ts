export interface QuestionData {
  level: number;
  index: number;
  text: string;
  options: [string, string, string, string];
  answer: string;
  reference: string;
  explanation: string;
  clues?: [string, string, string];
}

export const STAGES_1_TO_3: QuestionData[] = [
  // ==========================================
  // STAGE 1 — THE IDENTITY TEST (LEVELS 1–5)
  // ==========================================

  // Level 1: Who Am I? (Identify a character from three clues)
  {
    level: 1, index: 1,
    text: "• I was a judge in Israel.\n• I was left-handed.\n• I killed Eglon, king of Moab, with an eighteen-inch double-edged dagger.\nWho am I?",
    options: ["Ehud", "Gideon", "Jephthah", "Samson"],
    answer: "Ehud",
    reference: "Judges 3:15-22",
    explanation: "Ehud son of Gera, a Benjamite, was left-handed and used a concealed short sword to deliver Israel from Eglon king of Moab.",
    clues: ["I was a judge in Israel.", "I was left-handed.", "I killed Eglon, king of Moab, with a concealed double-edged dagger."]
  },
  {
    level: 1, index: 2,
    text: "• I was a tax collector in Jericho.\n• I was short in stature.\n• I climbed a sycamore tree to see Jesus over the crowd.\nWho am I?",
    options: ["Zacchaeus", "Matthew", "Bartimaeus", "Nicodemus"],
    answer: "Zacchaeus",
    reference: "Luke 19:1-10",
    explanation: "Zacchaeus was a chief tax collector in Jericho who climbed a sycamore tree; Jesus stayed at his house and declared salvation had come to it.",
    clues: ["I was a tax collector in Jericho.", "I was short in stature.", "I climbed a sycamore tree to see Jesus over the crowd."]
  },
  {
    level: 1, index: 3,
    text: "• I was a prophetess who judged Israel under a palm tree.\n• I summoned Barak to take ten thousand men to Mount Tabor.\n• I sang a victory song with Barak after Sisera’s defeat.\nWho am I?",
    options: ["Deborah", "Huldah", "Miriam", "Anna"],
    answer: "Deborah",
    reference: "Judges 4:4-14; 5:1-31",
    explanation: "Deborah, the wife of Lapidoth, was a prophetess who judged Israel beneath the Palm of Deborah between Ramah and Bethel.",
    clues: ["I was a prophetess who judged Israel under a palm tree.", "I summoned Barak to take ten thousand men to Mount Tabor.", "I sang a victory song after Sisera's defeat."]
  },
  {
    level: 1, index: 4,
    text: "• I was an early Christian disciple from Cyprus.\n• My original name was Joseph, but the apostles gave me a new name meaning 'Son of Encouragement'.\n• I sold a field and laid the money at the apostles' feet.\nWho am I?",
    options: ["Barnabas", "Silas", "Matthias", "Barsabbas"],
    answer: "Barnabas",
    reference: "Acts 4:36-37",
    explanation: "Joseph, a Levite from Cyprus whom the apostles nicknamed Barnabas ('Son of Encouragement'), sold a field he owned and brought the proceeds.",
    clues: ["I was an early Christian disciple from Cyprus.", "The apostles gave me a surname meaning 'Son of Encouragement'.", "I sold a field and laid the proceeds at the apostles' feet."]
  },
  {
    level: 1, index: 5,
    text: "• I was a valiant commander from Kabzeel.\n• I went down into a pit on a snowy day and killed a lion.\n• I struck down an Egyptian giant by snatching his own spear from his hand.\nWho am I?",
    options: ["Benaiah son of Jehoiada", "Abishai", "Asahel", "Josheb-basshebeth"],
    answer: "Benaiah son of Jehoiada",
    reference: "2 Samuel 23:20-23",
    explanation: "Benaiah son of Jehoiada slew a lion in a pit on a snowy day and snatched the spear out of an Egyptian giant's hand to kill him with his own staff.",
    clues: ["I was a valiant warrior from Kabzeel.", "I went down into a pit on a snowy day and killed a lion.", "I snatched an Egyptian giant's spear from his hand and slew him."]
  },

  // Level 2: The Name Trap (Distinguish characters with similar or identical names)
  {
    level: 2, index: 1,
    text: "Two prominent men in the New Testament bore the name James. Which one was the brother of the apostle John and the first of the Twelve to be martyred?",
    options: ["James son of Zebedee", "James son of Alphaeus", "James the brother of Jesus", "James the father of Judas (not Iscariot)"],
    answer: "James son of Zebedee",
    reference: "Matthew 4:21; Acts 12:1-2",
    explanation: "King Herod Agrippa I killed James the brother of John with the sword (Acts 12:2), distinguishing him from James son of Alphaeus and James the Lord's brother.",
  },
  {
    level: 2, index: 2,
    text: "Two men in Genesis were named Lamech. Which Lamech was the father of Noah and declared that his son would bring comfort from their toil?",
    options: ["Lamech son of Methuselah", "Lamech son of Methushael", "Lamech of the line of Cain", "Lamech husband of Adah and Zillah"],
    answer: "Lamech son of Methuselah",
    reference: "Genesis 5:28-29",
    explanation: "Lamech of the godly line of Seth (son of Methuselah) lived 777 years and fathered Noah, unlike the polygamist Lamech of Cain's line in Genesis 4.",
  },
  {
    level: 2, index: 3,
    text: "Two prominent apostles were named Simon. Which Simon was also designated as 'the Zealot' or 'the Cananaean'?",
    options: ["Simon the Zealot", "Simon Peter", "Simon the tanner", "Simon of Cyrene"],
    answer: "Simon the Zealot",
    reference: "Luke 6:15; Matthew 10:4",
    explanation: "Simon the Zealot (also called the Cananaean) is distinguished in apostolic lists from Simon Peter (Cephas).",
  },
  {
    level: 2, index: 4,
    text: "Two different biblical figures were named Saul. Which statement correctly distinguishes Saul of Gibeah from Saul of Tarsus?",
    options: ["Saul of Gibeah was Israel's first king; Saul of Tarsus became the apostle Paul", "Saul of Tarsus was king of Israel; Saul of Gibeah was a Pharisee", "Both Sauls were kings of the northern kingdom of Israel", "Both Sauls were high priests serving in the Jerusalem temple"],
    answer: "Saul of Gibeah was Israel's first king; Saul of Tarsus became the apostle Paul",
    reference: "1 Samuel 10:21-26; Acts 9:1-11; 13:9",
    explanation: "King Saul came from Gibeah in Benjamin; Saul of Tarsus was also from the tribe of Benjamin but became the apostle Paul after encountering Christ on the Damascus road.",
  },
  {
    level: 2, index: 5,
    text: "Three men in the New Testament are called Ananias. Which Ananias was the high priest who ordered Paul to be struck on the mouth during his hearing before the Sanhedrin?",
    options: ["Ananias son of Nedebaeus", "Ananias the husband of Sapphira", "Ananias the disciple in Damascus", "Ananias the son of Onias"],
    answer: "Ananias son of Nedebaeus",
    reference: "Acts 23:1-3",
    explanation: "Ananias the high priest commanded those standing by Paul to strike him on the mouth; he is distinct from Ananias of Damascus (Acts 9) and the husband of Sapphira (Acts 5).",
  },

  // Level 3: Family Connections (Identify family relationships)
  {
    level: 3, index: 1,
    text: "Which prominent sister of Moses and Aaron watched over baby Moses in the Nile and later led Israel's women in song at the Red Sea?",
    options: ["Miriam", "Zipporah", "Jochebed", "Elisheba"],
    answer: "Miriam",
    reference: "Exodus 2:4; 15:20-21; Numbers 26:59",
    explanation: "Miriam was the older sister of Moses and Aaron, identified in Exodus 15:20 as Miriam the prophetess, Aaron's sister.",
  },
  {
    level: 3, index: 2,
    text: "Paul commends Timothy's unfeigned faith and explicitly mentions two faithful women in his immediate family. Who were they?",
    options: ["His mother Eunice and grandmother Lois", "His mother Lois and grandmother Priscilla", "His mother Lydia and grandmother Eunice", "His mother Phoebe and grandmother Chloe"],
    answer: "His mother Eunice and grandmother Lois",
    reference: "2 Timothy 1:5",
    explanation: "Paul recalls the genuine faith that dwelt first in Timothy’s grandmother Lois and his mother Eunice.",
  },
  {
    level: 3, index: 3,
    text: "Which priest was the father of Phinehas, who succeeded Aaron as high priest atop Mount Hor?",
    options: ["Eleazar", "Ithamar", "Nadab", "Abihu"],
    answer: "Eleazar",
    reference: "Exodus 6:25; Numbers 20:25-28",
    explanation: "Eleazar, Aaron's son, married one of Putiel's daughters and fathered Phinehas; Eleazar was invested with Aaron's high priestly vestments on Mount Hor.",
  },
  {
    level: 3, index: 4,
    text: "Which wife of David was the former wife of the harsh rancher Nabal, who acted with wisdom to prevent David from shedding blood?",
    options: ["Abigail", "Ahinoam", "Michal", "Maacah"],
    answer: "Abigail",
    reference: "1 Samuel 25:3, 39-42",
    explanation: "Abigail was a woman of good understanding and beautiful appearance; after Nabal died, David sent and proposed to take her as his wife.",
  },
  {
    level: 3, index: 5,
    text: "Which brother of Joab and Asahel was chief of the Thirty champions and once slew 300 enemy warriors with his spear?",
    options: ["Abishai", "Benaiah", "Elhanan", "Ittai"],
    answer: "Abishai",
    reference: "2 Samuel 23:18-19; 1 Chronicles 11:20-21",
    explanation: "Abishai the brother of Joab, son of Zeruiah, was chief of the Thirty; he lifted up his spear against three hundred men and killed them.",
  },

  // Level 4: The Unusual Detail (Recognise characters from overlooked details)
  {
    level: 4, index: 1,
    text: "Which young man at Troas sat in a third-story window while Paul preached past midnight, fell into a deep sleep, and plunged to the ground?",
    options: ["Eutychus", "Trophimus", "Secundus", "Aristarchus"],
    answer: "Eutychus",
    reference: "Acts 20:9-12",
    explanation: "Eutychus sank into a deep sleep as Paul talked on and fell down from the third story; Paul embraced him and he was brought up alive.",
  },
  {
    level: 4, index: 2,
    text: "Which patriarch's nurse died upon Jacob’s return from Paddan-aram and was buried beneath the oak of Bethel, called Allon-bacuth ('Oak of Weeping')?",
    options: ["Deborah", "Bilhah", "Zilpah", "Puah"],
    answer: "Deborah",
    reference: "Genesis 35:8",
    explanation: "Genesis 35:8 explicitly names Deborah, Rebekah's nurse, who died and was buried beneath Bethel under an oak tree named Allon-bacuth.",
  },
  {
    level: 4, index: 3,
    text: "Which servant girl was so overjoyed when she recognized Peter’s voice at Mary's house that she ran inside without opening the gate?",
    options: ["Rhoda", "Tabitha", "Priscilla", "Lydia"],
    answer: "Rhoda",
    reference: "Acts 12:13-16",
    explanation: "A servant girl named Rhoda came to answer the door; recognizing Peter's voice, in her joy she ran back inside without opening the gate, announcing Peter was outside.",
  },
  {
    level: 4, index: 4,
    text: "Which wealthy eighty-year-old Gileadite supplied David with wheat, barley, cheese, and beds while David was fleeing Absalom at Mahanaim?",
    options: ["Barzillai", "Machir", "Shobi", "Chimham"],
    answer: "Barzillai",
    reference: "2 Samuel 17:27-29; 19:31-37",
    explanation: "Barzillai the Gileadite of Rogelim provided for King David while he stayed at Mahanaim, for he was a very wealthy man; he sent his son Chimham with the king.",
  },
  {
    level: 4, index: 5,
    text: "Which Bedouin ancestor commanded his descendants never to drink wine, build houses, or sow fields, winning divine commendation in Jeremiah 35?",
    options: ["Jonadab (Jehonadab) son of Rechab", "Jethro the Midianite", "Hobab the Kenite", "Kedar son of Ishmael"],
    answer: "Jonadab (Jehonadab) son of Rechab",
    reference: "Jeremiah 35:6-10, 18-19",
    explanation: "Jonadab son of Rechab gave his descendants strict nomadic instructions, which they faithfully preserved for centuries, drawing God's lasting blessing.",
  },

  // Level 5: One Clue Too Many (Find the false clue among four statements)
  {
    level: 5, index: 1,
    text: "Four statements are given below concerning Mephibosheth (Merib-baal). Three are accurate biblical facts, and ONE is false. Which statement is FALSE?",
    options: [
      "He was the son of Absalom",
      "He was lame in both feet after his nurse dropped him when he was five years old",
      "David invited him to eat continually at the king’s table",
      "He lived in obscurity in Lo-debar before David summoned him"
    ],
    answer: "He was the son of Absalom",
    reference: "2 Samuel 4:4; 9:1-13",
    explanation: "Mephibosheth was the son of Jonathan (Saul’s son), NOT Absalom. David restored to him all of Saul's land for Jonathan's sake.",
  },
  {
    level: 5, index: 2,
    text: "Four statements are given below concerning the apostle Peter. Three are biblically accurate, and ONE is false. Which statement is FALSE?",
    options: [
      "He was born in Tarsus of Cilicia",
      "He was originally named Simon son of Jonah",
      "He was a fisherman on the Sea of Galilee with his brother Andrew",
      "He raised Dorcas (Tabitha) from the dead at Joppa"
    ],
    answer: "He was born in Tarsus of Cilicia",
    reference: "John 1:44; Acts 9:36-42; Acts 22:3",
    explanation: "Peter was from Bethsaida in Galilee. It was Paul who was born in Tarsus of Cilicia.",
  },
  {
    level: 5, index: 3,
    text: "Four statements are given below concerning King Saul. Three are biblically accurate, and ONE is false. Which statement is FALSE?",
    options: [
      "He belonged to the royal tribe of Judah",
      "He was anointed king by the prophet Samuel",
      "He spared Agag king of the Amalekites contrary to God’s command",
      "He consulted a medium at Endor on the eve of his final battle"
    ],
    answer: "He belonged to the royal tribe of Judah",
    reference: "1 Samuel 9:1-2; 15:8-9; 28:7-14",
    explanation: "Saul belonged to the tribe of Benjamin (son of Kish), not the tribe of Judah.",
  },
  {
    level: 5, index: 4,
    text: "Four statements are given below concerning Priscilla (Prisca). Three are biblically accurate, and ONE is false. Which statement is FALSE?",
    options: [
      "She was struck blind by Paul for opposing the gospel on Cyprus",
      "She and her husband Aquila were tentmakers who hosted Paul in Corinth",
      "They had left Rome because Emperor Claudius commanded all Jews to leave",
      "They instructed Apollos in the way of God more accurately at Ephesus"
    ],
    answer: "She was struck blind by Paul for opposing the gospel on Cyprus",
    reference: "Acts 13:8-11; 18:1-3, 26; Romans 16:3",
    explanation: "It was Elymas (Bar-Jesus) the sorcerer who was struck blind on Cyprus (Acts 13:8-11). Priscilla was a beloved co-worker of Paul.",
  },
  {
    level: 5, index: 5,
    text: "Four statements are given below concerning Jael. Three are biblically accurate, and ONE is false. Which statement is FALSE?",
    options: [
      "She was an Israelite queen who reigned in Samaria",
      "She was the wife of Heber the Kenite",
      "She gave milk to Sisera when he fled to her tent",
      "She killed Sisera by driving a wooden tent peg into his temple"
    ],
    answer: "She was an Israelite queen who reigned in Samaria",
    reference: "Judges 4:17-22; 5:24-27",
    explanation: "Jael was not an Israelite queen; she was a Kenite woman (the wife of Heber the Kenite) whose tent was pitched near Kedesh.",
  },

  // ==========================================
  // STAGE 2 — THE PEOPLE OF THE BIBLE (LEVELS 6–10)
  // ==========================================

  // Level 6: The First Families (Identify characters from biblical families)
  {
    level: 6, index: 1,
    text: "Which daughter-in-law of Judah disguised herself at the entrance to Enaim, bearing the twin sons Perez and Zerah?",
    options: ["Tamar", "Shua", "Dinah", "Asenath"],
    answer: "Tamar",
    reference: "Genesis 38:13-30",
    explanation: "Tamar was the daughter-in-law of Judah who bore Perez and Zerah; Perez is recorded in the lineage of King David and Jesus Christ.",
  },
  {
    level: 6, index: 2,
    text: "Which wife did Abraham take after Sarah’s death, who bore him Zimran, Jokshan, Medan, Midian, Ishbak, and Shuah?",
    options: ["Keturah", "Hagar", "Milcah", "Basemath"],
    answer: "Keturah",
    reference: "Genesis 25:1-2",
    explanation: "After Sarah died, Abraham married Keturah, who became mother to six sons sent away eastward with gifts.",
  },
  {
    level: 6, index: 3,
    text: "Which cousin of Barnabas accompanied Paul on his first journey, departed at Perga, and later wrote the second Gospel?",
    options: ["John Mark", "Silas", "Luke", "Timothy"],
    answer: "John Mark",
    reference: "Acts 12:12, 25; 13:13; Colossians 4:10",
    explanation: "John Mark was the cousin of Barnabas (Colossians 4:10) and son of Mary of Jerusalem; he later became a valuable co-worker to Paul and Peter.",
  },
  {
    level: 6, index: 4,
    text: "Which brother-in-law of Moses did Moses urge to travel with Israel through the wilderness to serve as 'eyes for us'?",
    options: ["Hobab son of Reuel", "Jethro", "Balaam", "Phinehas"],
    answer: "Hobab son of Reuel",
    reference: "Numbers 10:29-32",
    explanation: "Moses urged Hobab son of Reuel the Midianite: 'Do not leave us, for you know where we are to camp in the wilderness, and you will be eyes for us.'",
  },
  {
    level: 6, index: 5,
    text: "Which husband and wife were both struck dead within three hours of each other for lying to the Holy Spirit about their land proceeds?",
    options: ["Ananias and Sapphira", "Aquila and Priscilla", "Philemon and Apphia", "Zacharias and Elizabeth"],
    answer: "Ananias and Sapphira",
    reference: "Acts 5:1-10",
    explanation: "Ananias sold a property and kept back part of the money with his wife Sapphira's knowledge; both fell down and breathed their last when confronted by Peter.",
  },

  // Level 7: The Patriarch Files (Identify patriarchs and their relatives)
  {
    level: 7, index: 1,
    text: "Which nephew of Abraham was rescued from four invading Mesopotamian kings in the Valley of Siddim?",
    options: ["Lot", "Eliezer", "Nahor", "Bethuel"],
    answer: "Lot",
    reference: "Genesis 14:11-16",
    explanation: "Lot was taken captive when Sodom was plundered; Abram heard his kinsman was taken, armed his 318 trained men, and recovered Lot and his goods.",
  },
  {
    level: 7, index: 2,
    text: "Which Hittite elder of Hebron sold the field and cave of Machpelah to Abraham for four hundred shekels of silver?",
    options: ["Ephron son of Zohar", "Mamre the Amorite", "Hamor the Hivite", "Abimelech"],
    answer: "Ephron son of Zohar",
    reference: "Genesis 23:8-16",
    explanation: "Ephron the Hittite sold the cave of Machpelah to Abraham as a family burial ground, witnessed before the sons of Heth at the city gate.",
  },
  {
    level: 7, index: 3,
    text: "Which mother of Jacob and Esau helped Jacob secure Isaac's patriarchal blessing using goat skins on his hands and neck?",
    options: ["Rebekah", "Sarah", "Leah", "Rachel"],
    answer: "Rebekah",
    reference: "Genesis 27:5-17",
    explanation: "Rebekah overheard Isaac speaking to Esau, prepared savory food, and clothed Jacob in Esau's garments and goat skins to obtain the blessing.",
  },
  {
    level: 7, index: 4,
    text: "Which uncle and father-in-law of Jacob substituted his older daughter Leah for Rachel on Jacob's wedding night in Paddan-aram?",
    options: ["Laban", "Bethuel", "Kemuel", "Nahor"],
    answer: "Laban",
    reference: "Genesis 29:21-26",
    explanation: "Laban deceived Jacob by giving him Leah instead of Rachel, justifying the act by saying it was not the custom of the country to give the younger before the firstborn.",
  },
  {
    level: 7, index: 5,
    text: "Which Aramean father of Rebekah and Laban acknowledged God’s hand when Abraham’s servant asked for Rebekah as Isaac’s bride?",
    options: ["Bethuel", "Nahor", "Terah", "Lot"],
    answer: "Bethuel",
    reference: "Genesis 24:15, 50",
    explanation: "Bethuel, son of Milcah and Nahor (Abraham's brother), was Rebekah's father; he and Laban answered: 'The thing proceeds from the LORD.'",
  },

  // Level 8: The Story Behind the Name (Identify characters through important life events)
  {
    level: 8, index: 1,
    text: "Who was given the name Israel after wrestling with a divine Messenger until daybreak at the ford of the Jabbok River?",
    options: ["Jacob", "Abraham", "Isaac", "Joseph"],
    answer: "Jacob",
    reference: "Genesis 32:24-28",
    explanation: "The Angel said: 'Your name shall no longer be called Jacob, but Israel; for you have striven with God and with men, and have prevailed.'",
  },
  {
    level: 8, index: 2,
    text: "Which New Testament believer was named 'Peter' (Cephas / Rock) by Jesus after confessing Him as 'the Christ, the Son of the living God'?",
    options: ["Simon son of Jonah", "Andrew", "John son of Zebedee", "Nathaniel"],
    answer: "Simon son of Jonah",
    reference: "Matthew 16:16-18; John 1:42",
    explanation: "Jesus declared: 'You are Simon the son of Jonah. You shall be called Cephas' (which is translated Peter / stone).",
  },
  {
    level: 8, index: 3,
    text: "What Egyptian title of honor did Pharaoh bestow upon Joseph when appointing him prime minister over the granaries of Egypt?",
    options: ["Zaphenath-paneah", "Potiphera", "Pashhur", "Sheshbazzar"],
    answer: "Zaphenath-paneah",
    reference: "Genesis 41:45",
    explanation: "Pharaoh named Joseph Zaphenath-paneah and gave him Asenath daughter of Potiphera priest of On to be his wife.",
  },
  {
    level: 8, index: 4,
    text: "Which son did the dying Rachel name Ben-oni ('Son of my sorrow'), but his father Jacob renamed Benjamin ('Son of my right hand')?",
    options: ["Benjamin", "Joseph", "Manasseh", "Ephraim"],
    answer: "Benjamin",
    reference: "Genesis 35:18",
    explanation: "As Rachel’s soul was departing, she called his name Ben-oni; but his father called him Benjamin.",
  },
  {
    level: 8, index: 5,
    text: "Which newborn infant in Shiloh was named Ichabod ('Where is the glory?'), because the ark of God had been taken and his father Phinehas was dead?",
    options: ["Ichabod", "Ahitub", "Ahijah", "Phinehas"],
    answer: "Ichabod",
    reference: "1 Samuel 4:19-22",
    explanation: "Phinehas's wife gave birth and named the child Ichabod, declaring, 'The glory has departed from Israel, for the ark of God has been captured.'",
  },

  // Level 9: The Forgotten Names (Identify lesser-known biblical people)
  {
    level: 9, index: 1,
    text: "Which Cushite royal official in King Zedekiah’s palace boldly petitioned the king and used rags and ropes to pull Jeremiah out of the muddy cistern?",
    options: ["Ebed-Melech", "Baruch", "Pashhur", "Gedaliah"],
    answer: "Ebed-Melech",
    reference: "Jeremiah 38:7-13",
    explanation: "Ebed-Melech the Cushite took thirty men and old cloths, dropped them to Jeremiah with ropes, and pulled the prophet out of the pit of Malchijah.",
  },
  {
    level: 9, index: 2,
    text: "Which Roman official and city treasurer of Corinth sent greetings to the Roman Christians at the conclusion of Paul's epistle to the Romans?",
    options: ["Erastus", "Quartus", "Tertius", "Gaius"],
    answer: "Erastus",
    reference: "Romans 16:23",
    explanation: "Romans 16:23 records: 'Erastus, the city treasurer, greets you, and Quartus, a brother.'",
  },
  {
    level: 9, index: 3,
    text: "Which scribe actually penned the words of the Epistle to the Romans as Paul dictated them, adding his own personal greeting in chapter 16?",
    options: ["Tertius", "Tychicus", "Onesimus", "Silas"],
    answer: "Tertius",
    reference: "Romans 16:22",
    explanation: "Romans 16:22 states: 'I, Tertius, who wrote this epistle, greet you in the Lord.'",
  },
  {
    level: 9, index: 4,
    text: "Which daughter of Zelophehad was one of five sisters who stood before Moses to claim land rights in Canaan when their father died without sons?",
    options: ["Mahlah", "Keturah", "Zipporah", "Deborah"],
    answer: "Mahlah",
    reference: "Numbers 27:1-7; 36:11",
    explanation: "Numbers 27:1 names the five daughters of Zelophehad: Mahlah, Noah, Hoglah, Milcah, and Tirzah, who successfully secured an inheritance in Israel.",
  },
  {
    level: 9, index: 5,
    text: "Which Christian brother in Ephesus repeatedly refreshed the imprisoned apostle Paul in Rome, not being ashamed of his chains?",
    options: ["Onesiphorus", "Epaphras", "Tychicus", "Philemon"],
    answer: "Onesiphorus",
    reference: "2 Timothy 1:16-18",
    explanation: "Paul prayed: 'The Lord grant mercy to the household of Onesiphorus, for he often refreshed me and was not ashamed of my chain.'",
  },

  // Level 10: Family Boss Round (Face difficult family and character questions, 25s)
  {
    level: 10, index: 1,
    text: "Which master craftsman of the tribe of Judah was the son of Uri, son of Hur, appointed by God to build the ark of the covenant and tabernacle furnishings?",
    options: ["Bezalel", "Oholiab", "Hiram", "Ithamar"],
    answer: "Bezalel",
    reference: "Exodus 31:1-5; 35:30",
    explanation: "Exodus 31:2 identifies Bezalel son of Uri, son of Hur, of the tribe of Judah, filled with the Spirit for artistic craftsmanship.",
  },
  {
    level: 10, index: 2,
    text: "Which Hebrew midwife was named alongside Shiphrah for defying Pharaoh's order to kill infant boys?",
    options: ["Puah", "Jochebed", "Miriam", "Elisheba"],
    answer: "Puah",
    reference: "Exodus 1:15-17",
    explanation: "Exodus 1:15 names the two Hebrew midwives as Shiphrah and Puah, who feared God and preserved the male babies.",
  },
  {
    level: 10, index: 3,
    text: "Which prominent sister of Joab and Abishai was mother to Asahel, her sons frequently known as 'the sons of Zeruiah'?",
    options: ["Zeruiah", "Abigail", "Michal", "Tamar"],
    answer: "Zeruiah",
    reference: "1 Chronicles 2:16; 2 Samuel 2:18",
    explanation: "Zeruiah was a sister of David and mother of David’s three top military leaders: Joab, Abishai, and Asahel.",
  },
  {
    level: 10, index: 4,
    text: "Which wife of King Herod’s household steward Chuza provided financial support and food for Jesus and His disciples during His Galilean ministry?",
    options: ["Joanna", "Susanna", "Mary Magdalene", "Salome"],
    answer: "Joanna",
    reference: "Luke 8:3; 24:10",
    explanation: "Luke 8:3 names Joanna, the wife of Chuza, Herod’s business manager, who ministered to Jesus out of her personal substance.",
  },
  {
    level: 10, index: 5,
    text: "Which prophetess and wife of Shallum keeper of the wardrobe was consulted by King Josiah’s royal delegation when the Book of the Law was found in the temple?",
    options: ["Huldah", "Deborah", "Miriam", "Anna"],
    answer: "Huldah",
    reference: "2 Kings 22:14-20; 2 Chronicles 34:22",
    explanation: "The high priest Hilkiah and Josiah's officials went to Huldah the prophetess, who lived in Jerusalem in the Second Quarter, to inquire of the LORD.",
  },

  // ==========================================
  // STAGE 3 — LEADERS, DELIVERERS AND JUDGES (LEVELS 11–15)
  // ==========================================

  // Level 11: Leaders and Their Circles (Identify people connected to biblical leaders)
  {
    level: 11, index: 1,
    text: "Which Amorite king of Jerusalem formed a five-king southern alliance to attack Gibeon after Gibeon made peace with Joshua?",
    options: ["Adoni-zedek", "Hoham of Hebron", "Piram of Jarmuth", "Debir of Eglon"],
    answer: "Adoni-zedek",
    reference: "Joshua 10:1-5",
    explanation: "Adoni-zedek king of Jerusalem heard that Joshua had taken Ai and made peace with Gibeon, so he rallied four fellow kings to besiege Gibeon.",
  },
  {
    level: 11, index: 2,
    text: "Which craftsman of the tribe of Dan served as chief assistant alongside Bezalel during the construction of the tabernacle?",
    options: ["Oholiab son of Ahisamach", "Hur of Judah", "Ithamar son of Aaron", "Eleazar"],
    answer: "Oholiab son of Ahisamach",
    reference: "Exodus 31:6; 38:23",
    explanation: "Oholiab son of Ahisamach of the tribe of Dan was appointed as an engraver, designer, and embroiderer working with Bezalel.",
  },
  {
    level: 11, index: 3,
    text: "Which faithful co-worker was sent by Paul to Philippi, described as his 'brother, fellow worker, and fellow soldier', who risked his life for Christ's work?",
    options: ["Epaphroditus", "Timothy", "Silas", "Tychicus"],
    answer: "Epaphroditus",
    reference: "Philippians 2:25-30",
    explanation: "Paul praised Epaphroditus as his brother and fellow soldier who came close to death for the work of Christ to supply what was lacking in service.",
  },
  {
    level: 11, index: 4,
    text: "Which nephew of Caleb conquered Kiriath-sepher (Debir) to win Caleb's daughter Achsah and later became Israel's very first judge?",
    options: ["Othniel son of Kenaz", "Ehud son of Gera", "Shamgar son of Anath", "Barak"],
    answer: "Othniel son of Kenaz",
    reference: "Joshua 15:16-17; Judges 3:9-11",
    explanation: "Othniel captured Kiriath-sepher, married Achsah, and later delivered Israel from the oppression of Cushan-rishathaim.",
  },
  {
    level: 11, index: 5,
    text: "Which elder in Jerusalem and doctor of the law stood up in the Sanhedrin, counseling restraint against executing Peter and the apostles?",
    options: ["Gamaliel", "Nicodemus", "Caiaphas", "Alexander"],
    answer: "Gamaliel",
    reference: "Acts 5:34-39",
    explanation: "Gamaliel, a Pharisee and respected teacher of the law (who had taught Saul of Tarsus), advised that if the work was of God, they could not overthrow it.",
  },

  // Level 12: The Wilderness People (Identify characters through their wilderness experiences)
  {
    level: 12, index: 1,
    text: "Which Levite led a famous wilderness rebellion with 250 well-known community leaders, claiming that all the congregation was holy?",
    options: ["Korah", "Dathan", "Abiram", "On"],
    answer: "Korah",
    reference: "Numbers 16:1-3, 31-35",
    explanation: "Korah son of Izhar rose up against Moses and Aaron; the earth opened its mouth and swallowed Korah, Dathan, Abiram, and their households.",
  },
  {
    level: 12, index: 2,
    text: "Which two elders remained in the camp and prophesied when the Holy Spirit rested upon them, despite not going out to the tabernacle?",
    options: ["Eldad and Medad", "Nadab and Abihu", "Hophni and Phinehas", "Dathan and Abiram"],
    answer: "Eldad and Medad",
    reference: "Numbers 11:26-29",
    explanation: "Eldad and Medad prophesied in the camp; when Joshua asked Moses to forbid them, Moses replied, 'Are you zealous for my sake? Oh, that all the LORD’s people were prophets!'",
  },
  {
    level: 12, index: 3,
    text: "Which Midianite woman, daughter of tribal chief Zur, was executed by Phinehas alongside the Simeonite prince Zimri at Peor?",
    options: ["Cozbi", "Zipporah", "Shelomith", "Hoglah"],
    answer: "Cozbi",
    reference: "Numbers 25:15-18",
    explanation: "Numbers 25:15 identifies Cozbi, daughter of Zur, a leader of an ancestral house in Midian, slain during the plague at Baal-peor.",
  },
  {
    level: 12, index: 4,
    text: "Which giant Amorite king of Bashan was defeated at Edrei, whose famous iron bedstead measured nine cubits long?",
    options: ["Og", "Sihon", "Balak", "Adoni-zedek"],
    answer: "Og",
    reference: "Numbers 21:33-35; Deuteronomy 3:11",
    explanation: "Og king of Bashan was the last remnant of the giant Rephaim; Moses and the Israelites conquered his sixty fortified cities in the Argob region.",
  },
  {
    level: 12, index: 5,
    text: "Which Moabite king hired the Mesopotamian seer Balaam to put a curse upon the children of Israel camping on the plains of Moab?",
    options: ["Balak son of Zippor", "Eglon", "Mesha", "Hadad"],
    answer: "Balak son of Zippor",
    reference: "Numbers 22:2-6",
    explanation: "Balak king of Moab sent elders to Balaam with fees for divination, but God forbade Balaam from cursing the people whom He had blessed.",
  },

  // Level 13: Judges' Arena (Identify judges, their actions and their enemies)
  {
    level: 13, index: 1,
    text: "Which judge delivered Israel from the Philistines by killing six hundred men with an oxgoad?",
    options: ["Shamgar son of Anath", "Ehud son of Gera", "Othniel son of Kenaz", "Tola"],
    answer: "Shamgar son of Anath",
    reference: "Judges 3:31",
    explanation: "After Ehud came Shamgar son of Anath, who struck down six hundred Philistines with an oxgoad and delivered Israel.",
  },
  {
    level: 13, index: 2,
    text: "Which Kenite woman invited Canaanite general Sisera into her tent, gave him milk, and drove a tent peg through his temple?",
    options: ["Jael", "Deborah", "Achsah", "Manoah's wife"],
    answer: "Jael",
    reference: "Judges 4:17-22; 5:24-27",
    explanation: "Jael, wife of Heber the Kenite, covered the exhausted Sisera with a rug, gave him curdled milk, and killed him with a tent peg and hammer.",
  },
  {
    level: 13, index: 3,
    text: "Which servant of Gideon accompanied him down into the Midianite camp to overhear the dream of the tumbling loaf of barley bread?",
    options: ["Purah", "Joash", "Jether", "Phinehas"],
    answer: "Purah",
    reference: "Judges 7:9-11",
    explanation: "God told Gideon: 'If you are afraid to go down, go down to the camp with Purah your servant,' where they overheard the enemy dream.",
  },
  {
    level: 13, index: 4,
    text: "Which judge of Gilead made a solemn vow before the battle with the Ammonites that resulted in his daughter coming out first to meet him?",
    options: ["Jephthah", "Gideon", "Samson", "Barak"],
    answer: "Jephthah",
    reference: "Judges 11:30-40",
    explanation: "Jephthah the Gileadite vowed that whatever came out of the doors of his house to meet him on his return would be offered to the LORD.",
  },
  {
    level: 13, index: 5,
    text: "Which ruler from Pirathon in Ephraim had forty sons and thirty grandsons who rode on seventy donkeys?",
    options: ["Abdon son of Hillel", "Jair the Gileadite", "Ibzan of Bethlehem", "Elon the Zebulunite"],
    answer: "Abdon son of Hillel",
    reference: "Judges 12:13-15",
    explanation: "Abdon son of Hillel the Pirathonite judged Israel eight years; his family's seventy riding donkeys symbolized wealth and prestige.",
  },

  // Level 14: Unexpected Heroes (Identify people with surprising roles)
  {
    level: 14, index: 1,
    text: "Which Canaanite innkeeper of Jericho hid Joshua's two spies on her roof beneath stalks of flax and hung a scarlet cord from her window?",
    options: ["Rahab", "Tamar", "Jael", "Ruth"],
    answer: "Rahab",
    reference: "Joshua 2:1-21; Hebrews 11:31",
    explanation: "Rahab the harlot received the spies in peace, placed her faith in the God of Israel, hung a scarlet thread in her window, and was spared.",
  },
  {
    level: 14, index: 2,
    text: "Which Moabite widow chose to cling to her mother-in-law Naomi, saying, 'Your people shall be my people, and your God my God'?",
    options: ["Ruth", "Orpah", "Cozbi", "Zeresh"],
    answer: "Ruth",
    reference: "Ruth 1:14-17; 4:13-17",
    explanation: "Ruth left her homeland in Moab, gleaned in the fields of Boaz in Bethlehem, and became the great-grandmother of King David.",
  },
  {
    level: 14, index: 3,
    text: "Which Roman centurion stationed in Caesarea was directed by an angel to send for Peter at Joppa, becoming the first Gentile convert in Acts 10?",
    options: ["Cornelius", "Julius", "Claudius Lysias", "Sergius Paulus"],
    answer: "Cornelius",
    reference: "Acts 10:1-8, 44-48",
    explanation: "Cornelius was a centurion of the Italian Cohort, a devout man who feared God with all his household; Peter baptized him after the Holy Spirit fell.",
  },
  {
    level: 14, index: 4,
    text: "Which high official of Candace queen of the Ethiopians was reading Isaiah 53 in his chariot when Philip the evangelist joined him?",
    options: ["The Ethiopian eunuch", "Ebed-Melech", "Blastus", "Manaen"],
    answer: "The Ethiopian eunuch",
    reference: "Acts 8:26-39",
    explanation: "The Ethiopian treasurer was returning from worshiping in Jerusalem; Philip explained the gospel of Jesus from Isaiah, and baptized him in water beside the road.",
  },
  {
    level: 14, index: 5,
    text: "Which wealthy resident of Arimathea and member of the Sanhedrin went boldly to Pilate to ask for the body of Jesus for burial in his own new tomb?",
    options: ["Joseph of Arimathea", "Nicodemus", "Gamaliel", "Simon of Cyrene"],
    answer: "Joseph of Arimathea",
    reference: "Matthew 27:57-60; Mark 15:43; John 19:38",
    explanation: "Joseph of Arimathea was a rich disciple and council member who had not consented to their counsel; he wrapped Jesus' body in clean linen and placed it in his own rock-hewn tomb.",
  },

  // Level 15: Deliverer Showdown (Match leaders to their defining events, 25s)
  {
    level: 15, index: 1,
    text: "Which Danite judge was born to Manoah and his barren wife, tore a young lion with his bare hands, and pushed down the pillars of the Philistine temple of Dagon?",
    options: ["Samson", "Gideon", "Jephthah", "Barak"],
    answer: "Samson",
    reference: "Judges 13:2-5; 14:5-6; 16:28-30",
    explanation: "Samson was a lifelong Nazirite of extraordinary strength who judged Israel twenty years and brought down the Philistine temple in Gaza at his death.",
  },
  {
    level: 15, index: 2,
    text: "Which son of Joash the Abiezrite tore down his father’s altar of Baal, reduced his army from 32,000 to 300 men, and attacked with torches in clay pitchers?",
    options: ["Gideon (Jerubbaal)", "Barak", "Othniel", "Jotham"],
    answer: "Gideon (Jerubbaal)",
    reference: "Judges 6:25-32; 7:1-22",
    explanation: "Gideon was named Jerubbaal after contending with Baal's altar; with three hundred men blowing trumpets and breaking pitchers, he routed the Midianites.",
  },
  {
    level: 15, index: 3,
    text: "Which apostle was miraculously freed from Herod Agrippa’s inner prison by an angel who struck his side, while the church prayed earnestly at Mary’s house?",
    options: ["Peter", "John", "Paul", "James"],
    answer: "Peter",
    reference: "Acts 12:5-11",
    explanation: "Peter was sleeping between two soldiers bound with two chains when an angel woke him, the chains fell off, and the iron gate leading into the city opened by itself.",
  },
  {
    level: 15, index: 4,
    text: "Which missionary companion was stripped, beaten with rods, and imprisoned in stocks alongside Paul at Philippi, singing hymns to God at midnight?",
    options: ["Silas", "Barnabas", "Timothy", "Luke"],
    answer: "Silas",
    reference: "Acts 16:22-25",
    explanation: "Paul and Silas were fastened in the stocks in Philippi; at midnight they were praying and singing hymns when a violent earthquake shook the prison foundations.",
  },
  {
    level: 15, index: 5,
    text: "Which loyal warrior from Gath brought six hundred soldiers to David’s side during Absalom’s rebellion, declaring he would stay with David in life or death?",
    options: ["Ittai the Gittite", "Benaiah", "Hushai", "Barzillai"],
    answer: "Ittai the Gittite",
    reference: "2 Samuel 15:19-22; 18:2",
    explanation: "Ittai the Gittite was an exile from Philistine Gath who swore unwavering loyalty to David and was appointed to command a third of David’s army.",
  },
];
