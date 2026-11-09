// Bible Chain Challenge — Stages 5 & 6 (Levels 21–30: 50 Challenges)
import type { ChainChallengeItem } from './generateChain1to2';

export const CHAIN_STAGES_5_TO_6: ChainChallengeItem[] = [
  {
    "id": "bible-chain-l21-c1",
    "game_slug": "bible-chain-challenge",
    "level": 21,
    "challenge_index": 1,
    "question_text": "Follow the patriarchal exodus continuation: In Genesis 50:24-25, dying Joseph made the children of Israel swear to carry his bones up from Egypt. In which subsequent book does Moses take Joseph’s bones with him as Israel marches out?",
    "options": [
      "Exodus",
      "Leviticus",
      "Numbers",
      "Joshua"
    ],
    "correct_answer": "Exodus",
    "explanation": "Genesis 50:25 records Joseph’s oath: \"God will surely visit you, and ye shall carry up my bones from hence.\" Exodus 13:19 connects this directly: \"And Moses took the bones of Joseph with him: for he had straitly sworn the children of Israel.\"",
    "reference": "Genesis 50:25; Exodus 13:19; Joshua 24:32",
    "metadata": {
      "stage": 5,
      "stage_title": "Book-to-Book Connections",
      "level_title": "Historical Continuations",
      "chain_type": "book_to_book",
      "chain_nodes": [
        "Genesis 50:25 (Joseph’s oath)",
        "Joseph’s bones carried",
        "?",
        "Succoth march"
      ],
      "is_typed": false,
      "difficulty": "Easy",
      "timerSeconds": 30,
      "points": 50,
      "testament": "Old Testament",
      "hint1": "The second book of the Pentateuch, detailing the departure from Egypt.",
      "hint2": "Exodus 13:19: \"And Moses took the bones of Joseph with him.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l21-c2",
    "game_slug": "bible-chain-challenge",
    "level": 21,
    "challenge_index": 2,
    "question_text": "Follow the conquest transition: The Book of Joshua closes with Joshua dying at age 110 and being buried at Timnath-serah. Which subsequent book opens with the exact words: \"Now after the death of Joshua it came to pass...\"?",
    "options": [
      "Judges",
      "Ruth",
      "1 Samuel",
      "1 Kings"
    ],
    "correct_answer": "Judges",
    "explanation": "Joshua 24:29-30 records Joshua’s death at 110 years. Judges 1:1 immediately connects to this moment: \"Now after the death of Joshua it came to pass, that the children of Israel asked the LORD, saying, Who shall go up for us against the Canaanites first, to fight against them?\"",
    "reference": "Joshua 24:29; Judges 1:1",
    "metadata": {
      "stage": 5,
      "stage_title": "Book-to-Book Connections",
      "level_title": "Historical Continuations",
      "chain_type": "book_to_book",
      "chain_nodes": [
        "Joshua 24:29 (Death of Joshua)",
        "Burial in Timnath-serah",
        "?",
        "Who shall go up first?"
      ],
      "is_typed": false,
      "difficulty": "Easy",
      "timerSeconds": 30,
      "points": 50,
      "testament": "Old Testament",
      "hint1": "The book covering the era of Othniel, Deborah, Gideon, and Samson.",
      "hint2": "Judges 1:1: \"Now after the death of Joshua it came to pass, that the children of Israel asked the LORD...\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l21-c3",
    "game_slug": "bible-chain-challenge",
    "level": 21,
    "challenge_index": 3,
    "question_text": "Type the name of the post-exilic book that opens with the exact proclamation of King Cyrus of Persia that concludes the Book of 2 Chronicles (2 Chron 36:22-23):",
    "options": [
      "Ezra",
      "Nehemiah",
      "Esther",
      "Daniel"
    ],
    "correct_answer": "Ezra",
    "explanation": "2 Chronicles 36:22-23 ends with Cyrus’ proclamation to rebuild the temple in Jerusalem. Ezra 1:1-3 repeats this royal edict verbatim: \"The LORD God of heaven hath given me all the kingdoms of the earth; and he hath charged me to build him an house at Jerusalem.\"",
    "reference": "2 Chronicles 36:22-23; Ezra 1:1-3",
    "metadata": {
      "stage": 5,
      "stage_title": "Book-to-Book Connections",
      "level_title": "Historical Continuations",
      "chain_type": "book_to_book",
      "chain_nodes": [
        "2 Chronicles 36:22 (Cyrus proclamation)",
        "Rebuilding of Jerusalem temple",
        "Verbatim opening",
        "?"
      ],
      "is_typed": true,
      "acceptedAlternatives": [
        "Book of Ezra"
      ],
      "difficulty": "Moderate",
      "timerSeconds": 45,
      "points": 100,
      "testament": "Old Testament",
      "hint1": "Named after the ready scribe in the law of Moses.",
      "hint2": "Ezra 1:1: \"Now in the first year of Cyrus king of Persia... the LORD stirred up the spirit of Cyrus king of Persia.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l21-c4",
    "game_slug": "bible-chain-challenge",
    "level": 21,
    "challenge_index": 4,
    "question_text": "Follow Luke’s two-volume narrative chain: Luke dedicated his Gospel to a nobleman named Theophilus. Which subsequent New Testament book opens with: \"The former treatise have I made, O Theophilus, of all that Jesus began both to do and teach\"?",
    "options": [
      "Acts of the Apostles",
      "Romans",
      "Hebrews",
      "Galatians"
    ],
    "correct_answer": "Acts of the Apostles",
    "explanation": "Luke 1:3 dedicates the Gospel account to \"most excellent Theophilus\". Acts 1:1-2 picks up the historical continuation: \"The former treatise have I made, O Theophilus, of all that Jesus began both to do and teach, until the day in which he was taken up.\"",
    "reference": "Luke 1:3; Acts 1:1-2",
    "metadata": {
      "stage": 5,
      "stage_title": "Book-to-Book Connections",
      "level_title": "Historical Continuations",
      "chain_type": "book_to_book",
      "chain_nodes": [
        "Luke 1:3 (Theophilus)",
        "Gospel of Luke finished",
        "Ascension of Christ",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Easy",
      "timerSeconds": 30,
      "points": 50,
      "testament": "New Testament",
      "hint1": "The fifth book of the New Testament recording the Day of Pentecost and the spread of the early church.",
      "hint2": "Acts 1:1: \"The former treatise have I made, O Theophilus, of all that Jesus began both to do and teach.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l21-c5",
    "game_slug": "bible-chain-challenge",
    "level": 21,
    "challenge_index": 5,
    "question_text": "Follow the royal succession transition: 1 Kings closes with King Ahab dying at Ramoth-gilead and his son Ahaziah reigning in his stead. 2 Kings opens immediately with Moab rebelling and King Ahaziah falling through a lattice in Samaria. Which prophet confronted him?",
    "options": [
      "Elijah the Tishbite",
      "Elisha",
      "Micaiah",
      "Jehu the prophet"
    ],
    "correct_answer": "Elijah the Tishbite",
    "explanation": "1 Kings 22:51 introduces Ahaziah son of Ahab. 2 Kings 1:2-4 immediately connects: Ahaziah falls through his lattice in Samaria and sends to inquire of Baal-zebub the god of Ekron; the angel of the LORD sends Elijah to pronounce his death (2 Kings 1:3-4).",
    "reference": "1 Kings 22:51; 2 Kings 1:2-4",
    "metadata": {
      "stage": 5,
      "stage_title": "Book-to-Book Connections",
      "level_title": "Historical Continuations",
      "chain_type": "character_chain",
      "chain_nodes": [
        "1 Kings 22 (Ahaziah reigns)",
        "Falls through lattice",
        "Inquires of Baal-zebub in Ekron",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Moderate",
      "timerSeconds": 45,
      "points": 100,
      "testament": "Old Testament",
      "hint1": "The hairy man girt with a girdle of leather about his loins.",
      "hint2": "2 Kings 1:3: \"But the angel of the LORD said to Elijah the Tishbite, Arise, go up to meet the messengers of the king of Samaria.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l22-c1",
    "game_slug": "bible-chain-challenge",
    "level": 22,
    "challenge_index": 1,
    "question_text": "Follow the Bethlehem prophecy chain: Micah 5:2 prophesied: \"But thou, Beth-lehem Ephratah, though thou be little among the thousands of Judah, yet out of thee shall he come forth unto me that is to be ruler in Israel.\" In which Gospel does Herod’s chief priests cite this exact verse to locate Christ’s birth?",
    "options": [
      "Matthew",
      "Mark",
      "Luke",
      "John"
    ],
    "correct_answer": "Matthew",
    "explanation": "Micah 5:2 foretells the Messiah’s birthplace. In Matthew 2:4-6, King Herod demanded of the chief priests and scribes where Christ should be born, and they replied: \"In Bethlehem of Judaea: for thus it is written by the prophet, And thou Bethlehem...\"",
    "reference": "Micah 5:2; Matthew 2:4-6",
    "metadata": {
      "stage": 5,
      "stage_title": "Book-to-Book Connections",
      "level_title": "Prophecy & Fulfillment",
      "chain_type": "scripture_chain",
      "chain_nodes": [
        "Micah 5:2",
        "Beth-lehem Ephratah",
        "Herod consults priests",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Easy",
      "timerSeconds": 30,
      "points": 50,
      "testament": "New Testament",
      "hint1": "The first Gospel in the New Testament.",
      "hint2": "Matthew 2:5: \"And they said unto him, In Bethlehem of Judaea: for thus it is written by the prophet.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l22-c2",
    "game_slug": "bible-chain-challenge",
    "level": 22,
    "challenge_index": 2,
    "question_text": "Follow the Suffering Servant cross-link: In Isaiah 53:7, the prophet writes: \"He was led as a sheep to the slaughter; and like a lamb dumb before his shearer, so opened he not his mouth.\" In which chapter of Acts is an Ethiopian eunuch reading this exact passage when Philip evangelizes him?",
    "options": [
      "Acts 8",
      "Acts 2",
      "Acts 10",
      "Acts 16"
    ],
    "correct_answer": "Acts 8",
    "explanation": "Isaiah 53:7-8 is quoted in Acts 8:32-35. The Ethiopian treasurer was reading this exact passage in his chariot on the road to Gaza; Philip began at that same scripture and preached unto him Jesus.",
    "reference": "Isaiah 53:7-8; Acts 8:32-35",
    "metadata": {
      "stage": 5,
      "stage_title": "Book-to-Book Connections",
      "level_title": "Prophecy & Fulfillment",
      "chain_type": "scripture_chain",
      "chain_nodes": [
        "Isaiah 53:7",
        "Chariot on Gaza road",
        "Philip joins chariot",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Easy",
      "timerSeconds": 30,
      "points": 50,
      "testament": "New Testament",
      "hint1": "The chapter recording Philip in Samaria and on the desert road.",
      "hint2": "Acts 8:32: \"The place of the scripture which he read was this, He was led as a sheep to the slaughter...\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l22-c3",
    "game_slug": "bible-chain-challenge",
    "level": 22,
    "challenge_index": 3,
    "question_text": "Type the name of the Old Testament prophetic book that foretold the Triumphal Entry on an ass: \"Rejoice greatly, O daughter of Zion... behold, thy King cometh unto thee: he is just, and having salvation; lowly, and riding upon an ass\":",
    "options": [
      "Zechariah",
      "Malachi",
      "Hosea",
      "Amos"
    ],
    "correct_answer": "Zechariah",
    "explanation": "Zechariah 9:9 prophesied the Messiah entering Jerusalem riding upon a colt, the foal of an ass. Matthew 21:4-5 and John 12:14-15 quote Zechariah to establish the fulfillment of this prophecy during the Triumphal Entry.",
    "reference": "Zechariah 9:9; Matthew 21:4-5; John 12:15",
    "metadata": {
      "stage": 5,
      "stage_title": "Book-to-Book Connections",
      "level_title": "Prophecy & Fulfillment",
      "chain_type": "scripture_chain",
      "chain_nodes": [
        "Riding upon an ass",
        "Daughter of Zion rejoice",
        "Matthew 21 Triumphal Entry",
        "?"
      ],
      "is_typed": true,
      "acceptedAlternatives": [
        "Book of Zechariah",
        "Zacharias"
      ],
      "difficulty": "Moderate",
      "timerSeconds": 45,
      "points": 100,
      "testament": "Old Testament",
      "hint1": "The penultimate book of the Old Testament.",
      "hint2": "Zechariah 9:9: \"behold, thy King cometh unto thee... lowly, and riding upon an ass, and upon a colt the foal of an ass.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l22-c4",
    "game_slug": "bible-chain-challenge",
    "level": 22,
    "challenge_index": 4,
    "question_text": "Follow the Virgin Birth prophecy chain: In Isaiah 7:14, the prophet proclaims: \"Behold, a virgin shall conceive, and bear a son, and shall call his name Immanuel.\" In which Gospel chapter is this prophecy cited as fulfilled by the angel to Joseph in a dream?",
    "options": [
      "Matthew 1",
      "Luke 1",
      "Mark 1",
      "John 1"
    ],
    "correct_answer": "Matthew 1",
    "explanation": "Isaiah 7:14 is quoted in Matthew 1:22-23: \"Now all this was done, that it might be fulfilled which was spoken of the Lord by the prophet, saying, Behold, a virgin shall be with child, and shall bring forth a son, and they shall call his name Emmanuel, which being interpreted is, God with us.\"",
    "reference": "Isaiah 7:14; Matthew 1:22-23",
    "metadata": {
      "stage": 5,
      "stage_title": "Book-to-Book Connections",
      "level_title": "Prophecy & Fulfillment",
      "chain_type": "scripture_chain",
      "chain_nodes": [
        "Isaiah 7:14",
        "Immanuel sign",
        "Angel speaks to Joseph",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Easy",
      "timerSeconds": 30,
      "points": 50,
      "testament": "New Testament",
      "hint1": "The very first chapter of the New Testament canon.",
      "hint2": "Matthew 1:23: \"Behold, a virgin shall be with child, and shall bring forth a son, and they shall call his name Emmanuel.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l22-c5",
    "game_slug": "bible-chain-challenge",
    "level": 22,
    "challenge_index": 5,
    "question_text": "Follow the Elijah forerunner chain: The final prophecy of the Old Testament in Malachi 4:5 declares: \"Behold, I will send you Elijah the prophet before the coming of the great and dreadful day of the LORD.\" In Luke 1:17, of whom does the angel Gabriel state: \"he shall go before him in the spirit and power of Elias\"?",
    "options": [
      "John the Baptist",
      "Simon Peter",
      "Stephen",
      "Paul"
    ],
    "correct_answer": "John the Baptist",
    "explanation": "Malachi 4:5-6 predicts Elijah returning to turn hearts. Gabriel applies this directly to John the Baptist in Luke 1:17: \"And he shall go before him in the spirit and power of Elias, to turn the hearts of the fathers to the children... to make ready a people prepared for the Lord.\"",
    "reference": "Malachi 4:5-6; Luke 1:17; Matthew 11:14",
    "metadata": {
      "stage": 5,
      "stage_title": "Book-to-Book Connections",
      "level_title": "Prophecy & Fulfillment",
      "chain_type": "scripture_chain",
      "chain_nodes": [
        "Malachi 4:5",
        "Elijah before the dreadful day",
        "Gabriel to Zechariah",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Easy",
      "timerSeconds": 30,
      "points": 50,
      "testament": "New Testament",
      "hint1": "The son of Zechariah and Elizabeth who preached in the wilderness.",
      "hint2": "Luke 1:17: \"And he shall go before him in the spirit and power of Elias.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l23-c1",
    "game_slug": "bible-chain-challenge",
    "level": 23,
    "challenge_index": 1,
    "question_text": "Follow Melchizedek across three biblical books: He first appears in Genesis 14 bringing bread and wine to Abram. David prophesies in Psalm 110: \"Thou art a priest for ever after the order of Melchizedek.\" Which New Testament Epistle devotes three chapters (chapters 5, 6, and 7) to expounding this royal priesthood?",
    "options": [
      "Hebrews",
      "Romans",
      "Galatians",
      "Ephesians"
    ],
    "correct_answer": "Hebrews",
    "explanation": "Melchizedek’s chain spans the canon: Genesis 14:18-20 (King of Salem, priest of the Most High God) → Psalm 110:4 (Messianic prophetic priest) → Hebrews 5:6, 6:20, and 7:1-28 (Christ’s eternal priesthood superseding Aaron).",
    "reference": "Genesis 14:18-20; Psalm 110:4; Hebrews 7:1-17",
    "metadata": {
      "stage": 5,
      "stage_title": "Book-to-Book Connections",
      "level_title": "Shared Characters Across Disparate Books",
      "chain_type": "book_to_book",
      "chain_nodes": [
        "Genesis 14:18 (Bread and wine)",
        "Psalm 110:4 (Royal Priest)",
        "Order of Melchizedek expounded",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Easy",
      "timerSeconds": 30,
      "points": 50,
      "testament": "New Testament",
      "hint1": "The epistle emphasizing Christ as High Priest better than angels, Moses, and Aaron.",
      "hint2": "Hebrews 7:1: \"For this Melchisedec, king of Salem, priest of the most high God, who met Abraham returning from the slaughter of the kings...\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l23-c2",
    "game_slug": "bible-chain-challenge",
    "level": 23,
    "challenge_index": 2,
    "question_text": "Follow Enoch across three biblical books: In Genesis 5:24, \"Enoch walked with God: and he was not; for God took him.\" Hebrews 11:5 commemorates that by faith Enoch was translated that he should not see death. Which one-chapter General Epistle quotes Enoch prophesying: \"Behold, the Lord cometh with ten thousands of his saints\"?",
    "options": [
      "Jude",
      "James",
      "2 Peter",
      "3 John"
    ],
    "correct_answer": "Jude",
    "explanation": "Enoch in Genesis 5:24 → Hebrews 11:5 → Jude 1:14-15: \"And Enoch also, the seventh from Adam, prophesied of these, saying, Behold, the Lord cometh with ten thousands of his saints, to execute judgment upon all.\"",
    "reference": "Genesis 5:24; Hebrews 11:5; Jude 1:14-15",
    "metadata": {
      "stage": 5,
      "stage_title": "Book-to-Book Connections",
      "level_title": "Shared Characters Across Disparate Books",
      "chain_type": "book_to_book",
      "chain_nodes": [
        "Genesis 5:24 (Walked with God)",
        "Hebrews 11:5 (Translated by faith)",
        "Prophesied second coming with 10,000 saints",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Easy",
      "timerSeconds": 30,
      "points": 50,
      "testament": "New Testament",
      "hint1": "The 25-verse epistle directly preceding the Book of Revelation.",
      "hint2": "Jude 1:14: \"And Enoch also, the seventh from Adam, prophesied of these...\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l23-c3",
    "game_slug": "bible-chain-challenge",
    "level": 23,
    "challenge_index": 3,
    "question_text": "Type the name of the wicked Mesopotamian seer from Pethor who was hired by Balak in Numbers 22, whose donkey spoke, and who is rebuked in 2 Peter 2, Jude 1, and Revelation 2 for teaching the way of unrighteousness:",
    "options": [
      "Balaam",
      "Balak",
      "Korah",
      "Doeg"
    ],
    "correct_answer": "Balaam",
    "explanation": "Balaam son of Beor: Numbers 22-24 (Balak hires him; ass rebukes the madness of the prophet) → 2 Peter 2:15 (\"loved the wages of unrighteousness\") → Jude 1:11 (\"ran greedily after the error of Balaam\") → Revelation 2:14 (\"taught Balac to cast a stumblingblock\").",
    "reference": "Numbers 22:5-7; 2 Peter 2:15-16; Jude 1:11; Revelation 2:14",
    "metadata": {
      "stage": 5,
      "stage_title": "Book-to-Book Connections",
      "level_title": "Shared Characters Across Disparate Books",
      "chain_type": "character_chain",
      "chain_nodes": [
        "Numbers 22 (Balak’s hire)",
        "Dumb ass speaks",
        "2 Peter 2 & Jude",
        "?"
      ],
      "is_typed": true,
      "acceptedAlternatives": [
        "Balaam son of Beor"
      ],
      "difficulty": "Moderate",
      "timerSeconds": 45,
      "points": 100,
      "testament": "Old Testament",
      "hint1": "Six-letter name beginning with B, son of Beor.",
      "hint2": "2 Peter 2:15: \"following the way of Balaam the son of Bosor, who loved the wages of unrighteousness.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l23-c4",
    "game_slug": "bible-chain-challenge",
    "level": 23,
    "challenge_index": 4,
    "question_text": "Follow Queen Jezebel’s shadow: She introduced Baal worship and slew the LORD’s prophets in 1 & 2 Kings. In which New Testament book is a false prophetess in the church of Thyatira rebuked under the symbolic name \"that woman Jezebel\"?",
    "options": [
      "Revelation",
      "1 Corinthians",
      "Galatians",
      "2 Thessalonians"
    ],
    "correct_answer": "Revelation",
    "explanation": "1 Kings 16:31–2 Kings 9:36 (Jezebel of Zidon corrupts Israel) connects directly to Revelation 2:20: \"Notwithstanding I have a few things against thee, because thou sufferest that woman Jezebel, which calleth herself a prophetess, to teach and to seduce my servants to commit fornication, and to eat things sacrificed unto idols.\"",
    "reference": "1 Kings 16:31; Revelation 2:20",
    "metadata": {
      "stage": 5,
      "stage_title": "Book-to-Book Connections",
      "level_title": "Shared Characters Across Disparate Books",
      "chain_type": "book_to_book",
      "chain_nodes": [
        "1 Kings 16 (Ahab’s wife)",
        "Dogs eat flesh in Jezreel",
        "Letter to church at Thyatira",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Easy",
      "timerSeconds": 30,
      "points": 50,
      "testament": "New Testament",
      "hint1": "The final book of the New Testament, featuring the letters to the seven churches in Asia.",
      "hint2": "Revelation 2:20: \"because thou sufferest that woman Jezebel, which calleth herself a prophetess.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l23-c5",
    "game_slug": "bible-chain-challenge",
    "level": 23,
    "challenge_index": 5,
    "question_text": "Follow Rahab’s legacy across the canon: In Joshua 2 & 6, Rahab the harlot sheltered the Hebrew spies and hung a scarlet thread from her window. Which New Testament epistle cites Rahab alongside Abraham to prove that faith without works is dead?",
    "options": [
      "James",
      "Romans",
      "Galatians",
      "1 Peter"
    ],
    "correct_answer": "James",
    "explanation": "Rahab’s chain spans Joshua 2 → Matthew 1:5 → Hebrews 11:31 (saved by faith) → James 2:25: \"Likewise also was not Rahab the harlot justified by works, when she had received the messengers, and had sent them out another way?\"",
    "reference": "Joshua 2:1-21; Hebrews 11:31; James 2:25",
    "metadata": {
      "stage": 5,
      "stage_title": "Book-to-Book Connections",
      "level_title": "Shared Characters Across Disparate Books",
      "chain_type": "book_to_book",
      "chain_nodes": [
        "Joshua 2 (Scarlet cord)",
        "Hebrews 11:31 (By faith perished not)",
        "Justified by works proof",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Moderate",
      "timerSeconds": 45,
      "points": 100,
      "testament": "New Testament",
      "hint1": "The practical epistle emphasizing faith demonstrated through works in chapter 2.",
      "hint2": "James 2:25: \"Likewise also was not Rahab the harlot justified by works...\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l24-c1",
    "game_slug": "bible-chain-challenge",
    "level": 24,
    "challenge_index": 1,
    "question_text": "Follow the Last Adam chain: Genesis 2:7 records: \"And the LORD God formed man of the dust of the ground, and breathed into his nostrils the breath of life; and man became a living soul.\" In which chapter of 1 Corinthians does Paul contrast the first Adam with Christ, the \"last Adam\" who was made a quickening spirit?",
    "options": [
      "1 Corinthians 15",
      "1 Corinthians 13",
      "1 Corinthians 10",
      "1 Corinthians 11"
    ],
    "correct_answer": "1 Corinthians 15",
    "explanation": "Genesis 2:7 is contrasted in 1 Corinthians 15:45: \"And so it is written, The first man Adam was made a living soul; the last Adam was made a quickening spirit. Howbeit that was not first which is spiritual, but that which is natural; and afterward that which is spiritual.\"",
    "reference": "Genesis 2:7; 1 Corinthians 15:45-47",
    "metadata": {
      "stage": 5,
      "stage_title": "Book-to-Book Connections",
      "level_title": "Epistles & Gospel Cross-Links",
      "chain_type": "scripture_chain",
      "chain_nodes": [
        "Genesis 2:7 (Living soul)",
        "First Adam earthy",
        "Last Adam quickening spirit",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Easy",
      "timerSeconds": 30,
      "points": 50,
      "testament": "New Testament",
      "hint1": "The great resurrection chapter of the New Testament.",
      "hint2": "1 Corinthians 15:45: \"The first man Adam was made a living soul; the last Adam was made a quickening spirit.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l24-c2",
    "game_slug": "bible-chain-challenge",
    "level": 24,
    "challenge_index": 2,
    "question_text": "Follow the Sarah and Hagar allegory chain: In Genesis 16 & 21, Sarah bare Isaac, while the Egyptian bondwoman Hagar bare Ishmael. In which epistle does Paul explain that these two women represent two covenants — one from Mount Sinai which gendereth to bondage, and the other Jerusalem which is above and free?",
    "options": [
      "Galatians",
      "Ephesians",
      "Colossians",
      "Philippians"
    ],
    "correct_answer": "Galatians",
    "explanation": "Genesis 16/21 connects directly to Galatians 4:22-26: \"Which things are an allegory: for these are the two covenants; the one from the mount Sinai, which gendereth to bondage, which is Agar... But Jerusalem which is above is free, which is the mother of us all.\"",
    "reference": "Genesis 16:1-4; 21:1-12; Galatians 4:22-31",
    "metadata": {
      "stage": 5,
      "stage_title": "Book-to-Book Connections",
      "level_title": "Epistles & Gospel Cross-Links",
      "chain_type": "book_to_book",
      "chain_nodes": [
        "Genesis 16 & 21 (Hagar & Sarah)",
        "Bondwoman vs Freewoman",
        "Two covenants allegory",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Easy",
      "timerSeconds": 30,
      "points": 50,
      "testament": "New Testament",
      "hint1": "Paul’s letter written to correct the legalistic agitation in Galatia.",
      "hint2": "Galatians 4:24: \"Which things are an allegory: for these are the two covenants.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l24-c3",
    "game_slug": "bible-chain-challenge",
    "level": 24,
    "challenge_index": 3,
    "question_text": "Type the name of the apostle who wrote in his first epistle that the ark of Noah, wherein eight souls were saved by water, was a prophetic figure (like figure) pointing to Christian baptism:",
    "options": [
      "Peter",
      "Paul",
      "John",
      "Jude"
    ],
    "correct_answer": "Peter",
    "explanation": "Genesis 7:7 (Noah, his sons, his wife, and sons’ wives enter ark) connects to 1 Peter 3:20-21: \"wherein few, that is, eight souls were saved by water. The like figure whereunto even baptism doth also now save us.\"",
    "reference": "Genesis 7:7; 1 Peter 3:20-21",
    "metadata": {
      "stage": 5,
      "stage_title": "Book-to-Book Connections",
      "level_title": "Epistles & Gospel Cross-Links",
      "chain_type": "scripture_chain",
      "chain_nodes": [
        "Genesis 7:7 (Noah’s ark)",
        "Eight souls saved by water",
        "Baptism like figure",
        "?"
      ],
      "is_typed": true,
      "acceptedAlternatives": [
        "Simon Peter",
        "Cephas"
      ],
      "difficulty": "Moderate",
      "timerSeconds": 45,
      "points": 100,
      "testament": "New Testament",
      "hint1": "Five-letter name, the lead apostle who held the keys of the kingdom.",
      "hint2": "1 Peter 3:20: \"while the ark was a preparing, wherein few, that is, eight souls were saved by water.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l24-c4",
    "game_slug": "bible-chain-challenge",
    "level": 24,
    "challenge_index": 4,
    "question_text": "Follow the Eden serpent to the Dragon chain: In Genesis 3:1-15, the serpent deceived Eve in the Garden of Eden and God pronounced enmity between its seed and her seed. In which chapter of Revelation is the devil explicitly unmasked with four identical titles: \"that old serpent, called the Devil, and Satan\"?",
    "options": [
      "Revelation 12",
      "Revelation 1",
      "Revelation 6",
      "Revelation 18"
    ],
    "correct_answer": "Revelation 12",
    "explanation": "Genesis 3:1-15 finds its canonical culmination in Revelation 12:9 and 20:2: \"And the great dragon was cast out, that old serpent, called the Devil, and Satan, which deceiveth the whole world.\"",
    "reference": "Genesis 3:1-15; Revelation 12:9; 20:2",
    "metadata": {
      "stage": 5,
      "stage_title": "Book-to-Book Connections",
      "level_title": "Epistles & Gospel Cross-Links",
      "chain_type": "scripture_chain",
      "chain_nodes": [
        "Genesis 3:1 (Subtle serpent)",
        "Seed of the woman bruised",
        "War in heaven: Dragon cast out",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Easy",
      "timerSeconds": 30,
      "points": 50,
      "testament": "New Testament",
      "hint1": "The chapter depicting the woman clothed with the sun, the man child, and Michael fighting the dragon.",
      "hint2": "Revelation 12:9: \"And the great dragon was cast out, that old serpent, called the Devil, and Satan.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l24-c5",
    "game_slug": "bible-chain-challenge",
    "level": 24,
    "challenge_index": 5,
    "question_text": "Follow the justification text across the canon: Habakkuk 2:4 famously states: \"the just shall live by his faith.\" How many New Testament epistles quote this exact five-word phrase as their central theological pillar (Romans 1:17, Galatians 3:11, and Hebrews 10:38)?",
    "options": [
      "Three epistles",
      "One epistle",
      "Two epistles",
      "Four epistles"
    ],
    "correct_answer": "Three epistles",
    "explanation": "Habakkuk 2:4 (\"the just shall live by his faith\") is quoted in three New Testament books: Romans 1:17 (emphasizing \"the just\"), Galatians 3:11 (emphasizing \"shall live\"), and Hebrews 10:38 (emphasizing \"by faith\").",
    "reference": "Habakkuk 2:4; Romans 1:17; Galatians 3:11; Hebrews 10:38",
    "metadata": {
      "stage": 5,
      "stage_title": "Book-to-Book Connections",
      "level_title": "Epistles & Gospel Cross-Links",
      "chain_type": "scripture_chain",
      "chain_nodes": [
        "Habakkuk 2:4",
        "Romans 1:17",
        "Galatians 3:11",
        "Hebrews 10:38"
      ],
      "is_typed": false,
      "difficulty": "Moderate",
      "timerSeconds": 45,
      "points": 100,
      "testament": "New Testament",
      "hint1": "A trio of epistles: Romans, Galatians, and Hebrews.",
      "hint2": "Romans 1:17: \"As it is written, The just shall live by faith.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l25-c1",
    "game_slug": "bible-chain-challenge",
    "level": 25,
    "challenge_index": 1,
    "question_text": "DEEP SCRIPTURE STUDY: Read Ezra 3:1-8 & Nehemiah 8:1-8.\nIn the seventh month after the return from Babylon, who were the two leaders who built the altar of the God of Israel to offer burnt offerings before the temple foundation was even laid?",
    "options": [
      "Jeshua son of Jozadak and Zerubbabel son of Shealtiel",
      "Ezra and Nehemiah",
      "Haggai and Zechariah",
      "Sanballat and Tobiah"
    ],
    "correct_answer": "Jeshua son of Jozadak and Zerubbabel son of Shealtiel",
    "explanation": "Ezra 3:2 explicitly names: \"Then stood up Jeshua the son of Jozadak, and his brethren the priests, and Zerubbabel the son of Shealtiel, and his brethren, and builded the altar of the God of Israel, to offer burnt offerings thereon.\"",
    "reference": "Ezra 3:2-3; Haggai 1:1",
    "metadata": {
      "stage": 5,
      "stage_title": "Book-to-Book Connections",
      "level_title": "Deep Scripture Study: Ezra & Nehemiah Restoration",
      "chain_type": "character_chain",
      "chain_nodes": [
        "Return under Cyrus",
        "Seventh month assembly",
        "Altar built before foundation",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Moderate",
      "timerSeconds": 90,
      "points": 100,
      "testament": "Old Testament",
      "dossier": "Ezra 3 & Nehemiah 8 recount the spiritual restoration of Jerusalem: first the altar, then the temple, then the city walls, and finally the public reading of the Law.",
      "study_mode": true,
      "hint1": "The high priest and the governor of Judah descended from David.",
      "hint2": "Ezra 3:2: \"Then stood up Jeshua the son of Jozadak... and Zerubbabel the son of Shealtiel.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l25-c2",
    "game_slug": "bible-chain-challenge",
    "level": 25,
    "challenge_index": 2,
    "question_text": "DEEP SCRIPTURE STUDY: In Ezra 3:11-13, when the builders laid the foundation of the second temple, the young shouted with a great shout of joy, while many ancient men wept with a loud voice. Why did the ancient priests and Levites weep?",
    "options": [
      "They had seen the first temple built by Solomon and remembered its former glory",
      "They had run out of stones",
      "Enemy armies attacked them",
      "The altar was broken"
    ],
    "correct_answer": "They had seen the first temple built by Solomon and remembered its former glory",
    "explanation": "Ezra 3:12 records: \"many of the priests and Levites and chief of the fathers, who were ancient men, that had seen the first house, when the foundation of this house was laid before their eyes, wept with a loud voice; and many shouted aloud for joy.\"",
    "reference": "Ezra 3:12; Haggai 2:3",
    "metadata": {
      "stage": 5,
      "stage_title": "Book-to-Book Connections",
      "level_title": "Deep Scripture Study: Ezra & Nehemiah Restoration",
      "chain_type": "name_to_event",
      "chain_nodes": [
        "Second Temple foundation laid",
        "Trumpets and cymbals praise",
        "Ancient men weep loudly",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Moderate",
      "timerSeconds": 75,
      "points": 100,
      "testament": "Old Testament",
      "dossier": "Haggai 2:3: \"Who is left among you that saw this house in her first glory? and how do ye see it now? is it not in your eyes in comparison of it as nothing?\"",
      "study_mode": true,
      "hint1": "They recalled the splendor of Solomon’s sanctuary which Nebuchadnezzar burned.",
      "hint2": "Ezra 3:12: \"ancient men, that had seen the first house, when the foundation of this house was laid before their eyes, wept.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l25-c3",
    "game_slug": "bible-chain-challenge",
    "level": 25,
    "challenge_index": 3,
    "question_text": "Type the name of the gate in Jerusalem before which all the people gathered as one man in Nehemiah 8:1, asking Ezra the scribe to bring the Book of the Law of Moses:",
    "options": [
      "Water gate",
      "Sheep gate",
      "Fish gate",
      "Dung gate"
    ],
    "correct_answer": "Water gate",
    "explanation": "Nehemiah 8:1: \"And all the people gathered themselves together as one man into the street that was before the water gate; and they spake unto Ezra the scribe to bring the book of the law of Moses, which the LORD had commanded to Israel.\"",
    "reference": "Nehemiah 8:1, 3",
    "metadata": {
      "stage": 5,
      "stage_title": "Book-to-Book Connections",
      "level_title": "Deep Scripture Study: Ezra & Nehemiah Restoration",
      "chain_type": "name_to_event",
      "chain_nodes": [
        "Wall completed in 52 days",
        "All people gathered as one man",
        "Pulpit of wood erected",
        "?"
      ],
      "is_typed": true,
      "acceptedAlternatives": [
        "Water Gate",
        "the water gate"
      ],
      "difficulty": "Moderate",
      "timerSeconds": 60,
      "points": 100,
      "testament": "Old Testament",
      "hint1": "Named after the essential liquid used for ritual cleansing and drinking.",
      "hint2": "Nehemiah 8:1: \"into the street that was before the water gate.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l25-c4",
    "game_slug": "bible-chain-challenge",
    "level": 25,
    "challenge_index": 4,
    "question_text": "DEEP SCRIPTURE STUDY: In Nehemiah 8:7-8, the Levites helped the people understand the law. Complete this foundational verse on biblical exposition: \"So they read in the book in the law of God distinctly, and gave the sense, and...\"",
    "options": [
      "caused them to understand the reading",
      "demanded thirty pieces of silver",
      "commanded them to depart",
      "closed the book and burned incense"
    ],
    "correct_answer": "caused them to understand the reading",
    "explanation": "Nehemiah 8:8 is the biblical definition of exposition: \"So they read in the book in the law of God distinctly, and gave the sense, and caused them to understand the reading.\"",
    "reference": "Nehemiah 8:7-8",
    "metadata": {
      "stage": 5,
      "stage_title": "Book-to-Book Connections",
      "level_title": "Deep Scripture Study: Ezra & Nehemiah Restoration",
      "chain_type": "scripture_chain",
      "chain_nodes": [
        "Read in the book distinctly",
        "Gave the sense",
        "Result in the hearts of the people",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Easy",
      "timerSeconds": 60,
      "points": 100,
      "testament": "Old Testament",
      "dossier": "Nehemiah 8:8 provides the classic pattern for translating, explaining, and applying Scripture to the congregation.",
      "study_mode": true,
      "hint1": "The phrase focuses on comprehension of the words spoken.",
      "hint2": "Nehemiah 8:8: \"and gave the sense, and caused them to understand the reading.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l25-c5",
    "game_slug": "bible-chain-challenge",
    "level": 25,
    "challenge_index": 5,
    "question_text": "DEEP SCRIPTURE STUDY: In Nehemiah 8:14-17, when Ezra read the law, the people discovered that they should dwell in booths during the seventh month. Which great feast did Israel celebrate, which had not been kept in such a manner since the days of Joshua son of Nun?",
    "options": [
      "The Feast of Tabernacles (Booths)",
      "The Feast of Passover",
      "The Feast of Pentecost (Weeks)",
      "The Feast of Purim"
    ],
    "correct_answer": "The Feast of Tabernacles (Booths)",
    "explanation": "Nehemiah 8:14-17: They found written in the Law that children of Israel should dwell in booths in the feast of the seventh month → They went to the mount and brought olive, pine, myrtle, and palm branches → Made booths upon roofs and courts → Kept the Feast of Tabernacles with great gladness, unprecedented since Joshua’s days.",
    "reference": "Nehemiah 8:14-17; Leviticus 23:34-43",
    "metadata": {
      "stage": 5,
      "stage_title": "Book-to-Book Connections",
      "level_title": "Deep Scripture Study: Ezra & Nehemiah Restoration",
      "chain_type": "five_link",
      "chain_nodes": [
        "Altar restored (Ezra 3)",
        "Temple finished (Ezra 6)",
        "Wall rebuilt (Nehemiah 6)",
        "Law expounded at Water Gate (Nehemiah 8)",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Easy",
      "timerSeconds": 75,
      "points": 100,
      "testament": "Old Testament",
      "dossier": "Nehemiah 8:17: \"And all the congregation of them that were come again out of the captivity made booths, and sat under the booths: for since the days of Jeshua the son of Nun unto that day had not the children of Israel done so.\"",
      "study_mode": true,
      "hint1": "Celebrated by making shelters from branches of palm and myrtle trees.",
      "hint2": "Nehemiah 8:14: \"that the children of Israel should dwell in booths in the feast of the seventh month.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l26-c1",
    "game_slug": "bible-chain-challenge",
    "level": 26,
    "challenge_index": 1,
    "question_text": "Identify the missing link in this chain of covetous deception from 2 Kings 5:\nElisha refuses gifts → [ ? ] runs after Syrian chariot → Naaman gives two talents and garments → Leprosy of Naaman clings forever",
    "options": [
      "Gehazi",
      "Obadiah",
      "Hazael",
      "Micaiah"
    ],
    "correct_answer": "Gehazi",
    "explanation": "Elisha refused Naaman’s gifts, but Gehazi his servant coveted the wealth, pursued Naaman, fabricated a story about two sons of the prophets, and hid the silver and garments. Elisha declared that Naaman’s leprosy would cleave unto Gehazi and his seed for ever (2 Kings 5:16, 20-27).",
    "reference": "2 Kings 5:20-27",
    "metadata": {
      "stage": 6,
      "stage_title": "The Missing Link",
      "level_title": "Missing Mediators & Intermediaries",
      "chain_type": "missing_link",
      "chain_nodes": [
        "Elisha refuses gift",
        "?",
        "Naaman gives two talents of silver",
        "Leprosy of Naaman clings forever"
      ],
      "is_typed": false,
      "difficulty": "Easy",
      "timerSeconds": 30,
      "points": 50,
      "testament": "Old Testament",
      "hint1": "Elisha’s servant who went out from his presence a leper as white as snow.",
      "hint2": "2 Kings 5:20: \"But Gehazi, the servant of Elisha the man of God, said, Behold, my master hath spared Naaman this Syrian.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l26-c2",
    "game_slug": "bible-chain-challenge",
    "level": 26,
    "challenge_index": 2,
    "question_text": "Identify the missing link in this tragic royal conspiracy:\nDavid in palace roof → Sees woman bathing → Inquires of her identity → Discovers she is wife of [ ? ] → Commands Joab to set him in forefront of battle",
    "options": [
      "Uriah the Hittite",
      "Ahithophel",
      "Eliam",
      "Benaiah"
    ],
    "correct_answer": "Uriah the Hittite",
    "explanation": "David walks on roof → Sees Bathsheba → Told: \"Is not this Bathsheba, the daughter of Eliam, the wife of Uriah the Hittite?\" → David sends for Uriah, tries to conceal sin, and sends Uriah back to Joab carrying his own death warrant (2 Samuel 11:2-15).",
    "reference": "2 Samuel 11:3, 14-17",
    "metadata": {
      "stage": 6,
      "stage_title": "The Missing Link",
      "level_title": "Missing Mediators & Intermediaries",
      "chain_type": "missing_link",
      "chain_nodes": [
        "David on palace roof",
        "Bathsheba identified",
        "Husband carrying death letter",
        "Joab leaves him in battle"
      ],
      "is_typed": false,
      "difficulty": "Easy",
      "timerSeconds": 30,
      "points": 50,
      "testament": "Old Testament",
      "hint1": "A faithful Hittite warrior who refused to sleep in his house while the Ark and soldiers were encamped in open fields.",
      "hint2": "2 Samuel 11:3: \"the wife of Uriah the Hittite.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l26-c3",
    "game_slug": "bible-chain-challenge",
    "level": 26,
    "challenge_index": 3,
    "question_text": "Type the name of the missing runaway slave in this Pauline reconciliation chain:\nPhilemon of Colosse → [ ? ] flees and meets Paul in Roman chains → Converted and becomes a beloved brother → Sent back with Paul’s personal letter:",
    "options": [
      "Onesimus",
      "Tychicus",
      "Epaphras",
      "Archippus"
    ],
    "correct_answer": "Onesimus",
    "explanation": "Philemon’s enslaved servant Onesimus departed/stole from him → Met Paul in Rome and was spiritually begotten in chains → Paul sends him back: \"not now as a servant, but above a servant, a brother beloved\" (Philemon 10-16).",
    "reference": "Philemon 10-16; Colossians 4:9",
    "metadata": {
      "stage": 6,
      "stage_title": "The Missing Link",
      "level_title": "Missing Mediators & Intermediaries",
      "chain_type": "missing_link",
      "chain_nodes": [
        "Philemon of Colosse",
        "Runaway bondservant",
        "?",
        "Begotten in Paul’s bonds"
      ],
      "is_typed": true,
      "acceptedAlternatives": [
        "Onesimos"
      ],
      "difficulty": "Moderate",
      "timerSeconds": 45,
      "points": 100,
      "testament": "New Testament",
      "hint1": "His name means \"profitable\" or \"useful\", prompting Paul’s wordplay in verse 11.",
      "hint2": "Philemon 10: \"I beseech thee for my son Onesimus, whom I have begotten in my bonds.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l26-c4",
    "game_slug": "bible-chain-challenge",
    "level": 26,
    "challenge_index": 4,
    "question_text": "Identify the missing royal mediator in the salvation of the Jews:\nDecree of Haman to destroy all Jews → Mordecai weeps in sackcloth at king’s gate → Mordecai appeals: \"Who knoweth whether thou art come to the kingdom for such a time as this?\" → [ ? ] touches golden sceptre → Haman hanged on his own gallows",
    "options": [
      "Esther (Hadassah)",
      "Vashti",
      "Zeresh",
      "Hegai"
    ],
    "correct_answer": "Esther (Hadassah)",
    "explanation": "Haman plots genocide → Mordecai challenges Queen Esther: \"who knoweth whether thou art come to the kingdom for such a time as this?\" → Esther fasts 3 days, enters uninvited (\"If I perish, I perish\"), touches golden sceptre, and exposes Haman (Esther 4:14-16; 5:2; 7:6-10).",
    "reference": "Esther 4:14-16; 5:2; 7:6-10",
    "metadata": {
      "stage": 6,
      "stage_title": "The Missing Link",
      "level_title": "Missing Mediators & Intermediaries",
      "chain_type": "missing_link",
      "chain_nodes": [
        "Haman’s genocide decree",
        "Mordecai’s appeal",
        "?",
        "Touches golden sceptre",
        "Haman hanged"
      ],
      "is_typed": false,
      "difficulty": "Easy",
      "timerSeconds": 30,
      "points": 50,
      "testament": "Old Testament",
      "hint1": "Cousin and adopted daughter of Mordecai who succeeded Queen Vashti.",
      "hint2": "Esther 5:2: \"she obtained favour in his sight: and the king held out to Esther the golden sceptre.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l26-c5",
    "game_slug": "bible-chain-challenge",
    "level": 26,
    "challenge_index": 5,
    "question_text": "Identify the missing link in this wilderness family reunion:\nMoses at Mount Sinai → Jethro priest of Midian comes to visit → Brings Moses’ two sons Gershom and Eliezer and Moses’ wife [ ? ] whom Moses had sent back",
    "options": [
      "Zipporah",
      "Cozbi",
      "Asenath",
      "Keturah"
    ],
    "correct_answer": "Zipporah",
    "explanation": "Exodus 18:2-3 connects the missing family member: \"Then Jethro, Moses’ father in law, took Zipporah, Moses’ wife, after he had sent her back, and her two sons; of which the name of the one was Gershom... and the name of the other was Eliezer.\"",
    "reference": "Exodus 18:2-4",
    "metadata": {
      "stage": 6,
      "stage_title": "The Missing Link",
      "level_title": "Missing Mediators & Intermediaries",
      "chain_type": "missing_link",
      "chain_nodes": [
        "Moses at Mount of God",
        "Jethro arrives",
        "Two sons Gershom & Eliezer",
        "Wife sent back",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Moderate",
      "timerSeconds": 45,
      "points": 100,
      "testament": "Old Testament",
      "hint1": "Daughter of Reuel/Jethro who had earlier circumcised her son on the journey.",
      "hint2": "Exodus 18:2: \"Then Jethro, Moses’ father in law, took Zipporah, Moses’ wife.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l27-c1",
    "game_slug": "bible-chain-challenge",
    "level": 27,
    "challenge_index": 1,
    "question_text": "Identify the missing ruler between Saul’s death and David’s reign over all Israel:\nDeath of Saul on Mount Gilboa → David reigns in Hebron over Judah → Saul’s general Abner crowns Saul’s son [ ? ] to reign two years over the northern tribes → Slain in his bed by Rechab and Baanah",
    "options": [
      "Ish-bosheth (Esh-baal)",
      "Mephibosheth",
      "Armoni",
      "Jonathan"
    ],
    "correct_answer": "Ish-bosheth (Esh-baal)",
    "explanation": "After Saul and Jonathan died, Abner took Ish-bosheth the son of Saul and made him king over Gilead, Ashurites, and all Israel for two years while David reigned seven and a half years over Judah in Hebron (2 Samuel 2:8-10; 4:5-7).",
    "reference": "2 Samuel 2:8-10; 4:5-8",
    "metadata": {
      "stage": 6,
      "stage_title": "The Missing Link",
      "level_title": "Missing Chronological Links",
      "chain_type": "missing_link",
      "chain_nodes": [
        "Saul dies at Gilboa",
        "Abner makes him king at Mahanaim",
        "?",
        "Reigns two years over Israel"
      ],
      "is_typed": false,
      "difficulty": "Moderate",
      "timerSeconds": 45,
      "points": 100,
      "testament": "Old Testament",
      "hint1": "Son of Saul whose name means \"man of shame\", called Esh-baal in 1 Chronicles 8:33.",
      "hint2": "2 Samuel 2:8: \"Abner the son of Ner... took Ish-bosheth the son of Saul, and brought him over to Mahanaim.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l27-c2",
    "game_slug": "bible-chain-challenge",
    "level": 27,
    "challenge_index": 2,
    "question_text": "Identify the missing link in the conquest transition:\nMoses dies on Mount Nebo → [ ? ] leads Israel across Jordan and captures Jericho → Elders outlive him → Era of the Judges begins",
    "options": [
      "Joshua",
      "Caleb",
      "Eleazar",
      "Othniel"
    ],
    "correct_answer": "Joshua",
    "explanation": "Moses dies on Mount Nebo/Pisgah → Joshua son of Nun takes command, crosses the Jordan river on dry ground, captures Jericho and Ai, and divides the land among the twelve tribes (Deuteronomy 34:5-9; Joshua 1–24; Judges 2:6-7).",
    "reference": "Deuteronomy 34:9; Joshua 1:1-3; Judges 2:7",
    "metadata": {
      "stage": 6,
      "stage_title": "The Missing Link",
      "level_title": "Missing Chronological Links",
      "chain_type": "missing_link",
      "chain_nodes": [
        "Moses dies on Mount Nebo",
        "?",
        "Jordan parted",
        "Conquest of Canaan",
        "Era of Judges"
      ],
      "is_typed": false,
      "difficulty": "Easy",
      "timerSeconds": 30,
      "points": 50,
      "testament": "Old Testament",
      "hint1": "Moses’ general who commanded the sun and moon to stand still at Gibeon.",
      "hint2": "Joshua 1:1: \"the LORD spake unto Joshua the son of Nun, Moses’ minister.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l27-c3",
    "game_slug": "bible-chain-challenge",
    "level": 27,
    "challenge_index": 3,
    "question_text": "Type the name of the missing prophetic successor in this ninth-century northern dynasty purge:\nElijah on Mount Horeb commanded to anoint successors → [ ? ] dispatches a young prophet to Ramoth-gilead → Jehu anointed king with oil → Purges house of Ahab and slays Jezebel:",
    "options": [
      "Elisha",
      "Micaiah",
      "Obadiah",
      "Jonah"
    ],
    "correct_answer": "Elisha",
    "explanation": "God told Elijah at Horeb that Jehu would be anointed king over Israel (1 Kings 19:16). Elisha fulfilled this in 2 Kings 9:1-6 by sending a young prophet to Ramoth-gilead to pour the box of oil upon Jehu’s head.",
    "reference": "1 Kings 19:16; 2 Kings 9:1-6",
    "metadata": {
      "stage": 6,
      "stage_title": "The Missing Link",
      "level_title": "Missing Chronological Links",
      "chain_type": "missing_link",
      "chain_nodes": [
        "Elijah commanded to anoint Jehu",
        "Whirlwind translation",
        "?",
        "Sends young prophet to Ramoth-gilead",
        "Jehu anointed with box of oil"
      ],
      "is_typed": true,
      "acceptedAlternatives": [
        "Eliseus"
      ],
      "difficulty": "Moderate",
      "timerSeconds": 45,
      "points": 100,
      "testament": "Old Testament",
      "hint1": "Elijah’s successor who held the double portion of his spirit.",
      "hint2": "2 Kings 9:1: \"And Elisha the prophet called one of the children of the prophets, and said unto him, Gird up thy loins, and take this box of oil in thine hand, and go to Ramoth-gilead.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l27-c4",
    "game_slug": "bible-chain-challenge",
    "level": 27,
    "challenge_index": 4,
    "question_text": "Identify the missing event between the Ministry of John the Baptist and the Day of Pentecost in Acts 2:\nPreaching and baptism of John in Jordan → [ ? ] → Day of Pentecost Holy Ghost outpouring",
    "options": [
      "Earthly ministry, death, resurrection, and ascension of Jesus Christ",
      "Rebuilding of the temple under Ezra",
      "Reign of King David in Jerusalem",
      "Babylonian exile under Nebuchadnezzar"
    ],
    "correct_answer": "Earthly ministry, death, resurrection, and ascension of Jesus Christ",
    "explanation": "Acts 1:21-22 explicitly defines the apostolic succession criteria: \"Beginning from the baptism of John, unto that same day that he was taken up from us, must one be ordained to be a witness with us of his resurrection.\" The earthly ministry, cross, resurrection, and ascension connect John to Pentecost.",
    "reference": "Acts 1:21-22; 2:1-4",
    "metadata": {
      "stage": 6,
      "stage_title": "The Missing Link",
      "level_title": "Missing Chronological Links",
      "chain_type": "missing_link",
      "chain_nodes": [
        "Baptism of John",
        "?",
        "Great Commission & Ascension",
        "Day of Pentecost"
      ],
      "is_typed": false,
      "difficulty": "Easy",
      "timerSeconds": 30,
      "points": 50,
      "testament": "New Testament",
      "hint1": "The life and redemptive sacrifice of the Messiah.",
      "hint2": "Acts 1:22: \"Beginning from the baptism of John, unto that same day that he was taken up from us.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l27-c5",
    "game_slug": "bible-chain-challenge",
    "level": 27,
    "challenge_index": 5,
    "question_text": "Follow the return from exile leadership chain: In 538 BC, King Cyrus issued his decree. Who was the royal prince of the house of David who led the first return of 42,360 exiles and laid the foundation of the second temple?",
    "options": [
      "Zerubbabel",
      "Nehemiah",
      "Ezra",
      "Mordecai"
    ],
    "correct_answer": "Zerubbabel",
    "explanation": "Cyrus decree → Zerubbabel (governor) and Jeshua (high priest) lead first return → Temple foundations laid → Opposed by Samaritans → Completed under Darius (Ezra 1:8; 2:2; 3:8; Zechariah 4:6-9).",
    "reference": "Ezra 2:2; 3:8; Zechariah 4:6-9",
    "metadata": {
      "stage": 6,
      "stage_title": "The Missing Link",
      "level_title": "Missing Chronological Links",
      "chain_type": "missing_link",
      "chain_nodes": [
        "Cyrus decree",
        "?",
        "Second Temple foundation",
        "Completed under Darius"
      ],
      "is_typed": false,
      "difficulty": "Easy",
      "timerSeconds": 30,
      "points": 50,
      "testament": "Old Testament",
      "hint1": "Grandson of King Jeconiah, mentioned in Matthew’s genealogy.",
      "hint2": "Zechariah 4:9: \"The hands of Zerubbabel have laid the foundation of this house; his hands shall also finish it.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l28-c1",
    "game_slug": "bible-chain-challenge",
    "level": 28,
    "challenge_index": 1,
    "question_text": "Identify the missing covenant patriarch in this three-generation promise chain:\nAbraham called out of Ur → [ ? ] born to Sarah at age ninety → Jacob wrestles at Peniel and receives name Israel",
    "options": [
      "Isaac",
      "Ishmael",
      "Esau",
      "Lot"
    ],
    "correct_answer": "Isaac",
    "explanation": "God declared: \"in Isaac shall thy seed be called.\" The foundational patriarchal triad of the covenant repeated throughout Scripture is \"the God of Abraham, of Isaac, and of Jacob\" (Genesis 21:12; 26:2-5; Exodus 3:6).",
    "reference": "Genesis 21:1-3, 12; Exodus 3:6",
    "metadata": {
      "stage": 6,
      "stage_title": "The Missing Link",
      "level_title": "Missing Covenant Links",
      "chain_type": "missing_link",
      "chain_nodes": [
        "Abraham",
        "?",
        "Jacob / Israel",
        "Twelve Tribes of Israel"
      ],
      "is_typed": false,
      "difficulty": "Easy",
      "timerSeconds": 30,
      "points": 50,
      "testament": "Old Testament",
      "hint1": "The son of laughter who carried the wood up Mount Moriah.",
      "hint2": "Genesis 21:3: \"And Abraham called the name of his son that was born unto him... Isaac.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l28-c2",
    "game_slug": "bible-chain-challenge",
    "level": 28,
    "challenge_index": 2,
    "question_text": "Identify the missing high priest in this golden age priestly succession:\nAaron first high priest → [ ? ] invested on Mount Hor → Phinehas turns away God’s wrath at Peor",
    "options": [
      "Eleazar",
      "Ithamar",
      "Nadab",
      "Abihu"
    ],
    "correct_answer": "Eleazar",
    "explanation": "Aaron dies on Mount Hor → Succeeded by his third son Eleazar, who wore Aaron’s sacred vestments → Eleazar’s son Phinehas executes judgment with a javelin at Shittim/Peor (Numbers 20:25-28; 25:7-13).",
    "reference": "Numbers 20:25-28; 25:11",
    "metadata": {
      "stage": 6,
      "stage_title": "The Missing Link",
      "level_title": "Missing Covenant Links",
      "chain_type": "missing_link",
      "chain_nodes": [
        "Aaron",
        "?",
        "Phinehas",
        "Everlasting priesthood covenant"
      ],
      "is_typed": false,
      "difficulty": "Easy",
      "timerSeconds": 30,
      "points": 50,
      "testament": "Old Testament",
      "hint1": "Father of Phinehas who divided Canaan alongside Joshua.",
      "hint2": "Numbers 20:28: \"and put them upon Eleazar his son.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l28-c3",
    "game_slug": "bible-chain-challenge",
    "level": 28,
    "challenge_index": 3,
    "question_text": "Type the name of the missing link in this Davidic covenant chain:\nJesse of Bethlehem → [ ? ] anointed by Samuel in Bethlehem → Solomon builds the Temple in Jerusalem:",
    "options": [
      "David",
      "Eliab",
      "Saul",
      "Jonathan"
    ],
    "correct_answer": "David",
    "explanation": "Jesse → David (anointed king, established kingdom, conquered Zion, received the everlasting Davidic covenant in 2 Samuel 7) → Solomon (David’s son who built the temple) (1 Samuel 16:11-13; 2 Samuel 7:12-16).",
    "reference": "1 Samuel 16:11-13; 2 Samuel 7:12-16",
    "metadata": {
      "stage": 6,
      "stage_title": "The Missing Link",
      "level_title": "Missing Covenant Links",
      "chain_type": "missing_link",
      "chain_nodes": [
        "Jesse of Bethlehem",
        "?",
        "2 Samuel 7 Davidic Covenant",
        "Solomon builds Temple"
      ],
      "is_typed": true,
      "acceptedAlternatives": [
        "King David"
      ],
      "difficulty": "Easy",
      "timerSeconds": 30,
      "points": 50,
      "testament": "Old Testament",
      "hint1": "Five-letter name, author of many Psalms and slayer of Goliath.",
      "hint2": "1 Samuel 16:13: \"Then Samuel took the horn of oil, and anointed him in the midst of his brethren: and the Spirit of the LORD came upon David.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l28-c4",
    "game_slug": "bible-chain-challenge",
    "level": 28,
    "challenge_index": 4,
    "question_text": "Identify the missing grandmother-mother-son transmission link in 2 Timothy 1:5:\nGrandmother Lois has unfeigned faith → Mother [ ? ] teaches young son sacred scriptures → Son Timothy becomes Paul’s beloved companion and apostolic delegate",
    "options": [
      "Eunice",
      "Phoebe",
      "Priscilla",
      "Lydia"
    ],
    "correct_answer": "Eunice",
    "explanation": "2 Timothy 1:5 outlines the generational legacy: \"When I call to remembrance the unfeigned faith that is in thee, which dwelt first in thy grandmother Lois, and thy mother Eunice; and I am persuaded that in thee also.\"",
    "reference": "2 Timothy 1:5; 3:15; Acts 16:1",
    "metadata": {
      "stage": 6,
      "stage_title": "The Missing Link",
      "level_title": "Missing Covenant Links",
      "chain_type": "missing_link",
      "chain_nodes": [
        "Grandmother Lois",
        "?",
        "Timothy",
        "From a child known holy scriptures"
      ],
      "is_typed": false,
      "difficulty": "Easy",
      "timerSeconds": 30,
      "points": 50,
      "testament": "New Testament",
      "hint1": "Six-letter Greek name meaning \"good victory\", married to a Greek husband.",
      "hint2": "2 Timothy 1:5: \"and thy mother Eunice; and I am persuaded that in thee also.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l28-c5",
    "game_slug": "bible-chain-challenge",
    "level": 28,
    "challenge_index": 5,
    "question_text": "Follow the Bethlehem lineage chain: In Ruth 4:21-22, Salmon begat Boaz. Boaz begat [ ? ]. [ ? ] begat Jesse. Jesse begat David. Who is this son of Boaz and Ruth who was nursed by Naomi?",
    "options": [
      "Obed",
      "Elimelech",
      "Mahlon",
      "Chilion"
    ],
    "correct_answer": "Obed",
    "explanation": "Boaz & Ruth marry in Bethlehem → Naomi took the child and laid it in her bosom and became nurse unto it → Women said: \"There is a son born to Naomi; and they called his name Obed: he is the father of Jesse, the father of David\" (Ruth 4:16-17, 21-22).",
    "reference": "Ruth 4:17, 21-22; Matthew 1:5",
    "metadata": {
      "stage": 6,
      "stage_title": "The Missing Link",
      "level_title": "Missing Covenant Links",
      "chain_type": "missing_link",
      "chain_nodes": [
        "Boaz & Ruth",
        "?",
        "Jesse of Bethlehem",
        "King David"
      ],
      "is_typed": false,
      "difficulty": "Easy",
      "timerSeconds": 30,
      "points": 50,
      "testament": "Old Testament",
      "hint1": "Four-letter name meaning \"servant\" or \"worshipper\".",
      "hint2": "Ruth 4:17: \"and they called his name Obed: he is the father of Jesse, the father of David.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l29-c1",
    "game_slug": "bible-chain-challenge",
    "level": 29,
    "challenge_index": 1,
    "question_text": "Identify the missing European port city on Paul’s route into Macedonia:\nTroas Aegean port → Island of Samothracia → [ ? ] seaport → Philippi Roman colony",
    "options": [
      "Neapolis",
      "Thessalonica",
      "Berea",
      "Corinth"
    ],
    "correct_answer": "Neapolis",
    "explanation": "Acts 16:11-12 traces the maritime entry into Europe: \"Therefore loosing from Troas, we came with a straight course to Samothracia, and the next day to Neapolis; and from thence to Philippi, which is the chief city of that part of Macedonia.\"",
    "reference": "Acts 16:11-12",
    "metadata": {
      "stage": 6,
      "stage_title": "The Missing Link",
      "level_title": "Missing Geographic Steps",
      "chain_type": "missing_link",
      "chain_nodes": [
        "Troas (vision received)",
        "Samothracia island",
        "?",
        "Philippi (first European convert)"
      ],
      "is_typed": false,
      "difficulty": "Moderate",
      "timerSeconds": 45,
      "points": 100,
      "testament": "New Testament",
      "hint1": "Greek name meaning \"New City\", modern Kavala.",
      "hint2": "Acts 16:11: \"and the next day to Neapolis; and from thence to Philippi.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l29-c2",
    "game_slug": "bible-chain-challenge",
    "level": 29,
    "challenge_index": 2,
    "question_text": "Identify the missing stop in Jonah’s disobedient flight from the presence of the LORD:\nJonah commanded to go to Nineveh → Flees to seaport of [ ? ] → Finds ship going to Tarshish → Pays fare and goes down into it → Storm in Mediterranean",
    "options": [
      "Joppa",
      "Tyre",
      "Sidon",
      "Caesarea"
    ],
    "correct_answer": "Joppa",
    "explanation": "Jonah 1:3 records: \"But Jonah rose up to flee unto Tarshish from the presence of the LORD, and went down to Joppa; and he found a ship going to Tarshish: so he paid the fare thereof, and went down into it.\"",
    "reference": "Jonah 1:3",
    "metadata": {
      "stage": 6,
      "stage_title": "The Missing Link",
      "level_title": "Missing Geographic Steps",
      "chain_type": "missing_link",
      "chain_nodes": [
        "Nineveh commission refused",
        "?",
        "Ship going to Tarshish",
        "Great tempest in the sea"
      ],
      "is_typed": false,
      "difficulty": "Easy",
      "timerSeconds": 30,
      "points": 50,
      "testament": "Old Testament",
      "hint1": "The ancient port near modern Tel Aviv, also where Peter had his housetop vision.",
      "hint2": "Jonah 1:3: \"and went down to Joppa; and he found a ship going to Tarshish.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l29-c3",
    "game_slug": "bible-chain-challenge",
    "level": 29,
    "challenge_index": 3,
    "question_text": "Type the name of the missing northern Mesopotamian city where Terah halted with Abram and Sarai on the journey from Ur to Canaan, where Terah died at age 205:",
    "options": [
      "Haran",
      "Damascus",
      "Nineveh",
      "Babylon"
    ],
    "correct_answer": "Haran",
    "explanation": "Genesis 11:31: Terah took Abram and Lot and Sarai from Ur of the Chaldees to go into the land of Canaan, but they came unto Haran and dwelt there until Terah died, whereupon Abram was called to depart (Genesis 11:31-32; 12:4-5; Acts 7:4).",
    "reference": "Genesis 11:31-32; Acts 7:4",
    "metadata": {
      "stage": 6,
      "stage_title": "The Missing Link",
      "level_title": "Missing Geographic Steps",
      "chain_type": "missing_link",
      "chain_nodes": [
        "Ur of the Chaldees",
        "?",
        "Terah dies at 205",
        "Canaan entry"
      ],
      "is_typed": true,
      "acceptedAlternatives": [
        "Charran"
      ],
      "difficulty": "Easy",
      "timerSeconds": 30,
      "points": 50,
      "testament": "Old Testament",
      "hint1": "Five-letter city in Paddan-aram, spelled Charran by Stephen in Acts 7:4.",
      "hint2": "Genesis 11:31: \"and they came unto Haran, and dwelt there.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l29-c4",
    "game_slug": "bible-chain-challenge",
    "level": 29,
    "challenge_index": 4,
    "question_text": "Identify the missing desert route: In Acts 8:26, an angel of the Lord spake unto Philip: \"Arise, and go toward the south unto the way that goeth down from Jerusalem unto [ ? ], which is desert.\"",
    "options": [
      "Gaza",
      "Jericho",
      "Hebron",
      "Damascus"
    ],
    "correct_answer": "Gaza",
    "explanation": "Acts 8:26 records the exact itinerary: \"Arise, and go toward the south unto the way that goeth down from Jerusalem unto Gaza, which is desert.\" Philip obeyed, met the Ethiopian eunuch, baptized him, and was caught away by the Spirit to Azotus.",
    "reference": "Acts 8:26-40",
    "metadata": {
      "stage": 6,
      "stage_title": "The Missing Link",
      "level_title": "Missing Geographic Steps",
      "chain_type": "missing_link",
      "chain_nodes": [
        "Samaria revival",
        "Angel commands south",
        "Jerusalem down to [ ? ] which is desert",
        "Ethiopian chariot encountered"
      ],
      "is_typed": false,
      "difficulty": "Easy",
      "timerSeconds": 30,
      "points": 50,
      "testament": "New Testament",
      "hint1": "Ancient Philistine southwestern coastal city.",
      "hint2": "Acts 8:26: \"unto the way that goeth down from Jerusalem unto Gaza, which is desert.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l29-c5",
    "game_slug": "bible-chain-challenge",
    "level": 29,
    "challenge_index": 5,
    "question_text": "Identify the missing Macedonian city between Philippi and Athens on Paul’s second journey:\nPhilippi prison deliverance → Amphipolis & Apollonia passed → [ ? ] (mob assaults Jason’s house) → Berea (searching scriptures) → Athens (Mars’ Hill)",
    "options": [
      "Thessalonica",
      "Corinth",
      "Cenchrea",
      "Troas"
    ],
    "correct_answer": "Thessalonica",
    "explanation": "Acts 17:1: \"Now when they had passed through Amphipolis and Apollonia, they came to Thessalonica, where was a synagogue of the Jews.\" Paul reasoned three sabbaths; hostile Jews set the city in an uproar and dragged Jason before the rulers.",
    "reference": "Acts 17:1-9; 1 Thessalonians 1:1",
    "metadata": {
      "stage": 6,
      "stage_title": "The Missing Link",
      "level_title": "Missing Geographic Steps",
      "chain_type": "missing_link",
      "chain_nodes": [
        "Philippi",
        "Amphipolis & Apollonia",
        "?",
        "Berea",
        "Athens"
      ],
      "is_typed": false,
      "difficulty": "Moderate",
      "timerSeconds": 45,
      "points": 100,
      "testament": "New Testament",
      "hint1": "Major capital of Macedonia to which Paul addressed two canonical epistles.",
      "hint2": "Acts 17:1: \"they came to Thessalonica, where was a synagogue of the Jews.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l30-c1",
    "game_slug": "bible-chain-challenge",
    "level": 30,
    "challenge_index": 1,
    "question_text": "DEEP SCRIPTURE STUDY: Read 2 Kings 5:1-5.\nNaaman was captain of the host of the king of Syria, a mighty man in valour, but he was a leper. Who was the humble person captured out of Israel who said to her mistress: \"Would God my lord were with the prophet that is in Samaria! for he would recover him of his leprosy\"?",
    "options": [
      "A little maid captured in a Syrian raid",
      "Gehazi the servant of Elisha",
      "The king of Israel",
      "The wife of Naaman"
    ],
    "correct_answer": "A little maid captured in a Syrian raid",
    "explanation": "2 Kings 5:2-3 explicitly notes: \"the Syrians had gone out by companies, and had brought away captive out of the land of Israel a little maid; and she waited on Naaman’s wife. And she said unto her mistress, Would God my lord were with the prophet that is in Samaria!\"",
    "reference": "2 Kings 5:2-3",
    "metadata": {
      "stage": 6,
      "stage_title": "The Missing Link",
      "level_title": "Deep Scripture Study: The Naaman Chain",
      "chain_type": "character_chain",
      "chain_nodes": [
        "Naaman Syrian leper",
        "Syrian raid into Israel",
        "Witness in mistress’s home",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Easy",
      "timerSeconds": 90,
      "points": 100,
      "testament": "Old Testament",
      "dossier": "2 Kings 5 records Naaman’s search for cleansing, moving from Damascus to Samaria, the Jordan, and the judgment upon Gehazi.",
      "study_mode": true,
      "hint1": "A young female captive serving Naaman’s wife.",
      "hint2": "2 Kings 5:2: \"brought away captive out of the land of Israel a little maid.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l30-c2",
    "game_slug": "bible-chain-challenge",
    "level": 30,
    "challenge_index": 2,
    "question_text": "DEEP SCRIPTURE STUDY: In 2 Kings 5:10-12, when Naaman arrived at Elisha’s house with horses and chariot, Elisha sent a messenger commanding him to wash in Jordan seven times. In his rage, which two rivers of Damascus did Naaman praise as better than all the waters of Israel?",
    "options": [
      "Abana and Pharpar",
      "Tigris and Euphrates",
      "Nile and Jordan",
      "Kishon and Kidron"
    ],
    "correct_answer": "Abana and Pharpar",
    "explanation": "2 Kings 5:12: Naaman was wroth and said: \"Are not Abana and Pharpar, rivers of Damascus, better than all the waters of Israel? may I not wash in them, and be clean? So he turned and went away in a rage.\"",
    "reference": "2 Kings 5:10-12",
    "metadata": {
      "stage": 6,
      "stage_title": "The Missing Link",
      "level_title": "Deep Scripture Study: The Naaman Chain",
      "chain_type": "name_to_event",
      "chain_nodes": [
        "Elisha’s messenger commands Jordan washing",
        "Naaman turned away in rage",
        "Two Damascus rivers named",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Moderate",
      "timerSeconds": 75,
      "points": 100,
      "testament": "Old Testament",
      "dossier": "2 Kings 5:12: \"Are not Abana and Pharpar, rivers of Damascus, better than all the waters of Israel?\"",
      "study_mode": true,
      "hint1": "Two Syrian rivers beginning with A and P.",
      "hint2": "2 Kings 5:12: \"Are not Abana and Pharpar, rivers of Damascus, better than all the waters of Israel?\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l30-c3",
    "game_slug": "bible-chain-challenge",
    "level": 30,
    "challenge_index": 3,
    "question_text": "Type the exact number of times Naaman’s servants persuaded him to dip in Jordan, whereupon his flesh came again like unto the flesh of a little child, and he was clean:",
    "options": [
      "Seven",
      "Three",
      "Ten",
      "Twelve"
    ],
    "correct_answer": "Seven",
    "explanation": "2 Kings 5:14: \"Then went he down, and dipped himself seven times in Jordan, according to the saying of the man of God: and his flesh came again like unto the flesh of a little child, and he was clean.\"",
    "reference": "2 Kings 5:14",
    "metadata": {
      "stage": 6,
      "stage_title": "The Missing Link",
      "level_title": "Deep Scripture Study: The Naaman Chain",
      "chain_type": "name_to_event",
      "chain_nodes": [
        "Servants advise: My father, if the prophet had bid thee do some great thing",
        "Dipped in Jordan",
        "Flesh like a little child",
        "?"
      ],
      "is_typed": true,
      "acceptedAlternatives": [
        "7",
        "seven times"
      ],
      "difficulty": "Easy",
      "timerSeconds": 45,
      "points": 50,
      "testament": "Old Testament",
      "hint1": "The biblical number of perfection, identical to Elisha’s command.",
      "hint2": "2 Kings 5:14: \"and dipped himself seven times in Jordan.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l30-c4",
    "game_slug": "bible-chain-challenge",
    "level": 30,
    "challenge_index": 4,
    "question_text": "DEEP SCRIPTURE STUDY: In 2 Kings 5:15-16, when cleansed Naaman returned and offered a blessing/gift, Elisha swore: \"As the LORD liveth, before whom I stand, I will receive none.\" What question did Elisha ask Gehazi when Gehazi returned from taking silver and garments?",
    "options": [
      "Whence comest thou, Gehazi?",
      "Why didst thou take the silver?",
      "Where hast thou hidden the garments?",
      "Did not my servant run well?"
    ],
    "correct_answer": "Whence comest thou, Gehazi?",
    "explanation": "2 Kings 5:25: \"And Elisha said unto him, Whence comest thou, Gehazi? And he said, Thy servant went no whither. And he said unto him, Went not mine heart with thee, when the man turned again from his chariot to meet thee?\"",
    "reference": "2 Kings 5:25-26",
    "metadata": {
      "stage": 6,
      "stage_title": "The Missing Link",
      "level_title": "Deep Scripture Study: The Naaman Chain",
      "chain_type": "scripture_chain",
      "chain_nodes": [
        "Gehazi takes 2 talents and 2 garments",
        "Hides them in the tower",
        "Stands before his master",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Moderate",
      "timerSeconds": 75,
      "points": 100,
      "testament": "Old Testament",
      "dossier": "2 Kings 5:25-27 exposes the omniscient prophetic insight of Elisha over his lying servant.",
      "study_mode": true,
      "hint1": "A four-word archaic question asking where he had come from.",
      "hint2": "2 Kings 5:25: \"And Elisha said unto him, Whence comest thou, Gehazi?\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l30-c5",
    "game_slug": "bible-chain-challenge",
    "level": 30,
    "challenge_index": 5,
    "question_text": "DEEP SCRIPTURE STUDY: In Luke 4:27, Jesus references Naaman to convict the citizens of Nazareth. What startling historical fact did Jesus highlight about the many lepers in Israel in the time of Eliseus the prophet?",
    "options": [
      "None of them was cleansed, saving Naaman the Syrian",
      "All of them were healed at Jordan",
      "They were all priests",
      "They built a grand synagogue in Damascus"
    ],
    "correct_answer": "None of them was cleansed, saving Naaman the Syrian",
    "explanation": "Luke 4:27 connects 2 Kings 5 to Christ’s gospel: \"And many lepers were in Israel in the time of Eliseus the prophet; and none of them was cleansed, saving Naaman the Syrian.\" This enraged the men in the Nazareth synagogue because it demonstrated God’s grace extending to a Gentile over unbelieving Israel.",
    "reference": "2 Kings 5:1-14; Luke 4:27-28",
    "metadata": {
      "stage": 6,
      "stage_title": "The Missing Link",
      "level_title": "Deep Scripture Study: The Naaman Chain",
      "chain_type": "old_to_new",
      "chain_nodes": [
        "2 Kings 5 (Naaman cleansed)",
        "Centuries of Israeli lepers unhealed",
        "Jesus in Nazareth synagogue",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Moderate",
      "timerSeconds": 90,
      "points": 100,
      "testament": "New Testament",
      "dossier": "Luke 4:27: \"And many lepers were in Israel in the time of Eliseus the prophet; and none of them was cleansed, saving Naaman the Syrian.\"",
      "study_mode": true,
      "hint1": "Only the foreign Syrian general received divine healing.",
      "hint2": "Luke 4:27: \"and none of them was cleansed, saving Naaman the Syrian.\"",
      "curated": true
    }
  }
];
