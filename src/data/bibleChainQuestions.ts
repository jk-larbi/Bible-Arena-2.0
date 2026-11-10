// Bible Chain Challenge — 50 Levels · 250 Challenges · 10 Stages
// Curated with verified scripture links, cross-testament connections, and forensic broken chains.
import type { ChallengeItem } from './bibleContentBank';

export const BIBLE_CHAIN_QUESTIONS: ChallengeItem[] = [
  {
    "id": "bible-chain-l1-c1",
    "game_slug": "bible-chain-challenge",
    "level": 1,
    "challenge_index": 1,
    "question_text": "Follow the patriarchal chain: Abraham was the father of Isaac. Isaac was the father of Jacob. Who was the firstborn son of Jacob by Leah?",
    "options": [
      "Reuben",
      "Simeon",
      "Levi",
      "Judah"
    ],
    "correct_answer": "Reuben",
    "explanation": "Abraham begat Isaac; Isaac begat Jacob; and Jacob’s firstborn son by his wife Leah was Reuben (Genesis 29:32; 35:23).",
    "reference": "Genesis 21:3; 25:26; 29:32",
    "metadata": {
      "stage": 1,
      "stage_title": "Chain Foundations",
      "level_title": "Patriarchal Foundations",
      "chain_type": "character_chain",
      "chain_nodes": [
        "Abraham",
        "Isaac",
        "Jacob",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Easy",
      "timerSeconds": 30,
      "points": 50,
      "testament": "Old Testament",
      "hint1": "He was Jacob’s eldest son whose name means \"behold, a son\".",
      "hint2": "Genesis 29:32: \"And Leah conceived, and bare a son, and she called his name Reuben.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l1-c2",
    "game_slug": "bible-chain-challenge",
    "level": 1,
    "challenge_index": 2,
    "question_text": "Follow the lineage chain from Adam: Adam was the father of Seth. Seth was the father of Enos. Who was the son of Enos?",
    "options": [
      "Cainan",
      "Mahalaleel",
      "Jared",
      "Enoch"
    ],
    "correct_answer": "Cainan",
    "explanation": "Genesis 5 records the primeval generations: Adam begat Seth, Seth begat Enos, and Enos begat Cainan (Genesis 5:3-9; Luke 3:37-38).",
    "reference": "Genesis 5:6-9; Luke 3:37-38",
    "metadata": {
      "stage": 1,
      "stage_title": "Chain Foundations",
      "level_title": "Patriarchal Foundations",
      "chain_type": "character_chain",
      "chain_nodes": [
        "Adam",
        "Seth",
        "Enos",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Easy",
      "timerSeconds": 30,
      "points": 50,
      "testament": "Old Testament",
      "hint1": "His name begins with C (or K in Greek), father of Mahalaleel.",
      "hint2": "Genesis 5:9: \"And Enos lived ninety years, and begat Cainan.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l1-c3",
    "game_slug": "bible-chain-challenge",
    "level": 1,
    "challenge_index": 3,
    "question_text": "Type the missing link in the post-flood covenant chain: Noah was the father of Shem. Shem was the father of Arphaxad. Who was the son of Arphaxad?",
    "options": [
      "Salah",
      "Eber",
      "Peleg",
      "Reu"
    ],
    "correct_answer": "Salah",
    "explanation": "In the genealogy of Shem following the flood: Noah → Shem → Arphaxad → Salah (also spelled Shelah) → Eber (Genesis 11:10-14).",
    "reference": "Genesis 10:24; 11:12-14",
    "metadata": {
      "stage": 1,
      "stage_title": "Chain Foundations",
      "level_title": "Patriarchal Foundations",
      "chain_type": "character_chain",
      "chain_nodes": [
        "Noah",
        "Shem",
        "Arphaxad",
        "?"
      ],
      "is_typed": true,
      "acceptedAlternatives": [
        "Shelah",
        "Saleh"
      ],
      "difficulty": "Moderate",
      "timerSeconds": 45,
      "points": 100,
      "testament": "Old Testament",
      "hint1": "Father of Eber, he lived four hundred and three years after begatting Eber.",
      "hint2": "Genesis 11:12: \"And Arphaxad lived five and thirty years, and begat Salah.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l1-c4",
    "game_slug": "bible-chain-challenge",
    "level": 1,
    "challenge_index": 4,
    "question_text": "Connect the patriarchal call: Terah took his son Abram from Ur. At which city did Terah settle and die before Abram entered Canaan?",
    "options": [
      "Haran",
      "Damascus",
      "Shechem",
      "Bethel"
    ],
    "correct_answer": "Haran",
    "explanation": "Terah took Abram, Lot, and Sarai from Ur of the Chaldees to Haran, where Terah died at age 205 before Abram departed for Canaan (Genesis 11:31-32; 12:4-5).",
    "reference": "Genesis 11:31-32; Acts 7:4",
    "metadata": {
      "stage": 1,
      "stage_title": "Chain Foundations",
      "level_title": "Patriarchal Foundations",
      "chain_type": "name_to_event",
      "chain_nodes": [
        "Ur of the Chaldees",
        "Terah & Abram journey",
        "?",
        "Canaan"
      ],
      "is_typed": false,
      "difficulty": "Easy",
      "timerSeconds": 30,
      "points": 50,
      "testament": "Old Testament",
      "hint1": "Also known as the city of Nahor in northern Mesopotamia.",
      "hint2": "Genesis 11:31: \"and they came unto Haran, and dwelt there.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l1-c5",
    "game_slug": "bible-chain-challenge",
    "level": 1,
    "challenge_index": 5,
    "question_text": "Follow the royal succession chain: King David was succeeded by King Solomon. Solomon was succeeded by his son Rehoboam. Who succeeded Rehoboam as king of Judah?",
    "options": [
      "Abijam",
      "Asa",
      "Jehoshaphat",
      "Jehoram"
    ],
    "correct_answer": "Abijam",
    "explanation": "David → Solomon → Rehoboam → Abijam (also called Abijah). Abijam reigned three years over Judah in Jerusalem (1 Kings 14:31; 15:1; 2 Chronicles 12:16).",
    "reference": "1 Kings 14:31; 15:1-2",
    "metadata": {
      "stage": 1,
      "stage_title": "Chain Foundations",
      "level_title": "Patriarchal Foundations",
      "chain_type": "character_chain",
      "chain_nodes": [
        "David",
        "Solomon",
        "Rehoboam",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Moderate",
      "timerSeconds": 45,
      "points": 100,
      "testament": "Old Testament",
      "hint1": "His mother was Maachah the daughter of Abishalom.",
      "hint2": "1 Kings 14:31: \"And Rehoboam slept with his fathers... and Abijam his son reigned in his stead.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l2-c1",
    "game_slug": "bible-chain-challenge",
    "level": 2,
    "challenge_index": 1,
    "question_text": "Follow the priestly lineage: Levi was the father of Kohath. Kohath was the father of Amram. Who were the three famous children of Amram and Jochebed?",
    "options": [
      "Aaron, Moses, and Miriam",
      "Nadab, Abihu, and Eleazar",
      "Gershon, Kohath, and Merari",
      "Korah, Dathan, and Abiram"
    ],
    "correct_answer": "Aaron, Moses, and Miriam",
    "explanation": "Amram took Jochebed his father’s sister to wife, and she bare him Aaron, Moses, and their sister Miriam (Exodus 6:20; Numbers 26:59).",
    "reference": "Exodus 6:20; Numbers 26:59",
    "metadata": {
      "stage": 1,
      "stage_title": "Chain Foundations",
      "level_title": "Deliverers & Priests",
      "chain_type": "character_chain",
      "chain_nodes": [
        "Kohath",
        "Amram",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Easy",
      "timerSeconds": 30,
      "points": 50,
      "testament": "Old Testament",
      "hint1": "Two brothers who confronted Pharaoh and their prophetess sister.",
      "hint2": "Numbers 26:59: \"and she bare unto Amram Aaron and Moses, and Miriam their sister.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l2-c2",
    "game_slug": "bible-chain-challenge",
    "level": 2,
    "challenge_index": 2,
    "question_text": "Follow the high priestly succession: Aaron was the first high priest of Israel. Who succeeded Aaron as high priest upon Mount Hor?",
    "options": [
      "Eleazar",
      "Ithamar",
      "Phinehas",
      "Nadab"
    ],
    "correct_answer": "Eleazar",
    "explanation": "On Mount Hor, Moses stripped Aaron of his garments and put them upon Eleazar his son, and Aaron died there (Numbers 20:25-28).",
    "reference": "Numbers 20:25-28; Deuteronomy 10:6",
    "metadata": {
      "stage": 1,
      "stage_title": "Chain Foundations",
      "level_title": "Deliverers & Priests",
      "chain_type": "character_chain",
      "chain_nodes": [
        "Aaron",
        "Mount Hor Investiture",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Easy",
      "timerSeconds": 30,
      "points": 50,
      "testament": "Old Testament",
      "hint1": "Aaron’s third son who survived Nadab and Abihu.",
      "hint2": "Numbers 20:28: \"And Moses stripped Aaron of his garments, and put them upon Eleazar his son.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l2-c3",
    "game_slug": "bible-chain-challenge",
    "level": 2,
    "challenge_index": 3,
    "question_text": "Type the name of Eleazar’s zealous son who received an everlasting covenant of peace for turning away God’s wrath at Shittim:",
    "options": [
      "Phinehas",
      "Abishua",
      "Bukki",
      "Uzzi"
    ],
    "correct_answer": "Phinehas",
    "explanation": "Aaron → Eleazar → Phinehas. Phinehas son of Eleazar was zealous for his God and executed judgment at Peor, receiving God’s covenant of peace (Numbers 25:7-13).",
    "reference": "Numbers 25:7-13; Psalm 106:30-31",
    "metadata": {
      "stage": 1,
      "stage_title": "Chain Foundations",
      "level_title": "Deliverers & Priests",
      "chain_type": "character_chain",
      "chain_nodes": [
        "Aaron",
        "Eleazar",
        "?"
      ],
      "is_typed": true,
      "acceptedAlternatives": [
        "Phineas"
      ],
      "difficulty": "Moderate",
      "timerSeconds": 45,
      "points": 100,
      "testament": "Old Testament",
      "hint1": "He took a javelin in his hand and entered the tent.",
      "hint2": "Numbers 25:11: \"Phinehas, the son of Eleazar, the son of Aaron the priest, hath turned my wrath away.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l2-c4",
    "game_slug": "bible-chain-challenge",
    "level": 2,
    "challenge_index": 4,
    "question_text": "Follow Moses’ Midianite family chain: When Moses fled Egypt to Midian, he helped the seven daughters of the priest Reuel (Jethro). Which daughter became Moses’ wife?",
    "options": [
      "Zipporah",
      "Hagar",
      "Keturah",
      "Cozbi"
    ],
    "correct_answer": "Zipporah",
    "explanation": "Reuel (Jethro), priest of Midian, gave his daughter Zipporah to Moses to wife, and she bare him a son named Gershom (Exodus 2:16-22).",
    "reference": "Exodus 2:21-22; 18:2-3",
    "metadata": {
      "stage": 1,
      "stage_title": "Chain Foundations",
      "level_title": "Deliverers & Priests",
      "chain_type": "character_chain",
      "chain_nodes": [
        "Moses in Midian",
        "Reuel / Jethro",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Easy",
      "timerSeconds": 30,
      "points": 50,
      "testament": "Old Testament",
      "hint1": "She circumcised her son with a sharp stone on the journey to Egypt.",
      "hint2": "Exodus 2:21: \"and he gave Moses Zipporah his daughter.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l2-c5",
    "game_slug": "bible-chain-challenge",
    "level": 2,
    "challenge_index": 5,
    "question_text": "Connect the leadership transfer: Moses led Israel out of Egypt and through the wilderness to the plains of Moab. Who did the LORD appoint to succeed Moses and lead Israel across the Jordan?",
    "options": [
      "Joshua son of Nun",
      "Caleb son of Jephunneh",
      "Eleazar the priest",
      "Phinehas son of Eleazar"
    ],
    "correct_answer": "Joshua son of Nun",
    "explanation": "The LORD commanded Moses to lay his hands upon Joshua the son of Nun before Eleazar the priest and the whole congregation, appointing him to lead Israel into the Promised Land (Numbers 27:18-23; Joshua 1:1-2).",
    "reference": "Numbers 27:18-23; Joshua 1:1-2",
    "metadata": {
      "stage": 1,
      "stage_title": "Chain Foundations",
      "level_title": "Deliverers & Priests",
      "chain_type": "character_chain",
      "chain_nodes": [
        "Moses",
        "Plains of Moab Laying on of Hands",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Easy",
      "timerSeconds": 30,
      "points": 50,
      "testament": "Old Testament",
      "hint1": "Originally named Hoshea, Moses’ faithful minister and general.",
      "hint2": "Joshua 1:1-2: \"Moses my servant is dead; now therefore arise, go over this Jordan, thou, and all this people.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l3-c1",
    "game_slug": "bible-chain-challenge",
    "level": 3,
    "challenge_index": 1,
    "question_text": "Follow the military chain in Judges 4: Deborah the prophetess summoned Barak. Barak refused to march unless Deborah went with him. Who did Deborah prophesy would receive the honour of destroying Sisera?",
    "options": [
      "A woman (Jael)",
      "Barak himself",
      "Heber the Kenite",
      "Jabin king of Canaan"
    ],
    "correct_answer": "A woman (Jael)",
    "explanation": "Deborah told Barak: \"the journey that thou takest shall not be for thine honour; for the LORD shall sell Sisera into the hand of a woman\" — which was fulfilled by Jael, wife of Heber the Kenite (Judges 4:9, 17-22).",
    "reference": "Judges 4:9, 17-22",
    "metadata": {
      "stage": 1,
      "stage_title": "Chain Foundations",
      "level_title": "Judges & Early Prophets",
      "chain_type": "character_chain",
      "chain_nodes": [
        "Deborah",
        "Barak",
        "Sisera fleeing",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Easy",
      "timerSeconds": 30,
      "points": 50,
      "testament": "Old Testament",
      "hint1": "She offered him milk in a lordly dish and drove a tent nail into his temples.",
      "hint2": "Judges 4:9: \"for the LORD shall sell Sisera into the hand of a woman.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l3-c2",
    "game_slug": "bible-chain-challenge",
    "level": 3,
    "challenge_index": 2,
    "question_text": "Follow Gideon’s family chain: Gideon (Jerubbaal) defeated Midian with 300 men. After Gideon died, which ambitious son by his Shechemite concubine murdered his 70 brothers to make himself king?",
    "options": [
      "Abimelech",
      "Jotham",
      "Gaal",
      "Zebah"
    ],
    "correct_answer": "Abimelech",
    "explanation": "Abimelech, son of Jerubbaal by his concubine in Shechem, slew his seventy brothers upon one stone at Ophrah; only Jotham the youngest escaped (Judges 9:1-6).",
    "reference": "Judges 8:31; 9:1-6",
    "metadata": {
      "stage": 1,
      "stage_title": "Chain Foundations",
      "level_title": "Judges & Early Prophets",
      "chain_type": "character_chain",
      "chain_nodes": [
        "Gideon / Jerubbaal",
        "Shechem Concubine",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Moderate",
      "timerSeconds": 45,
      "points": 100,
      "testament": "Old Testament",
      "hint1": "He was later killed at Thebez when a woman dropped a piece of a millstone on his head.",
      "hint2": "Judges 9:5: \"And he went unto his father’s house at Ophrah, and slew his brethren the sons of Jerubbaal... three score and ten persons, upon one stone.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l3-c3",
    "game_slug": "bible-chain-challenge",
    "level": 3,
    "challenge_index": 3,
    "question_text": "Type the name of Gideon’s youngest son who escaped the massacre at Ophrah and proclaimed the famous parable of the trees on Mount Gerizim:",
    "options": [
      "Jotham",
      "Phurah",
      "Joash",
      "Zebul"
    ],
    "correct_answer": "Jotham",
    "explanation": "Gideon → Ophrah massacre → Jotham escapes → Mount Gerizim bramble fable (Judges 9:5, 7-21). Jotham rebuked the men of Shechem for crowning the bramble Abimelech.",
    "reference": "Judges 9:5, 7-21",
    "metadata": {
      "stage": 1,
      "stage_title": "Chain Foundations",
      "level_title": "Judges & Early Prophets",
      "chain_type": "character_chain",
      "chain_nodes": [
        "Gideon",
        "70 Brothers slain",
        "Mount Gerizim Parable",
        "?"
      ],
      "is_typed": true,
      "acceptedAlternatives": [
        "Jonathan"
      ],
      "difficulty": "Moderate",
      "timerSeconds": 45,
      "points": 100,
      "testament": "Old Testament",
      "hint1": "He stood on the top of Mount Gerizim and lifted up his voice.",
      "hint2": "Judges 9:7: \"And when they told it to Jotham, he went and stood in the top of mount Gerizim.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l3-c4",
    "game_slug": "bible-chain-challenge",
    "level": 3,
    "challenge_index": 4,
    "question_text": "Follow the Shiloh sanctuary chain: Eli was judge and high priest in Shiloh. His wicked sons corrupted the offerings and took the Ark into battle against the Philistines. Name Eli’s two sons:",
    "options": [
      "Hophni and Phinehas",
      "Nadab and Abihu",
      "Gershom and Eliezer",
      "Joel and Abiah"
    ],
    "correct_answer": "Hophni and Phinehas",
    "explanation": "Eli’s two sons were Hophni and Phinehas, priests of the LORD at Shiloh, who both died on the same day when the Ark of God was taken by the Philistines (1 Samuel 1:3; 2:12, 34; 4:11).",
    "reference": "1 Samuel 1:3; 4:11",
    "metadata": {
      "stage": 1,
      "stage_title": "Chain Foundations",
      "level_title": "Judges & Early Prophets",
      "chain_type": "character_chain",
      "chain_nodes": [
        "Eli at Shiloh",
        "Ark taken at Aphek",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Easy",
      "timerSeconds": 30,
      "points": 50,
      "testament": "Old Testament",
      "hint1": "When the messenger reported their death, Eli fell backward off his seat and broke his neck.",
      "hint2": "1 Samuel 4:11: \"And the ark of God was taken; and the two sons of Eli, Hophni and Phinehas, were slain.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l3-c5",
    "game_slug": "bible-chain-challenge",
    "level": 3,
    "challenge_index": 5,
    "question_text": "Follow the chain of prayer: Elkanah and barren Hannah prayed at Shiloh. Hannah vowed her child to the LORD. Who was the prophet born to Hannah who anointed Israel’s first two kings?",
    "options": [
      "Samuel",
      "Nathan",
      "Gad",
      "Ahijah"
    ],
    "correct_answer": "Samuel",
    "explanation": "Elkanah & Hannah → Hannah’s vow at Shiloh → Samuel born and ministered before Eli → Samuel anoints King Saul and King David (1 Samuel 1:19-28; 10:1; 16:13).",
    "reference": "1 Samuel 1:20; 10:1; 16:13",
    "metadata": {
      "stage": 1,
      "stage_title": "Chain Foundations",
      "level_title": "Judges & Early Prophets",
      "chain_type": "character_chain",
      "chain_nodes": [
        "Elkanah & Hannah",
        "Vow at Shiloh",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Easy",
      "timerSeconds": 30,
      "points": 50,
      "testament": "Old Testament",
      "hint1": "His name reflects: \"Because I have asked him of the LORD.\"",
      "hint2": "1 Samuel 1:20: \"she bare a son, and called his name Samuel, saying, Because I have asked him of the LORD.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l4-c1",
    "game_slug": "bible-chain-challenge",
    "level": 4,
    "challenge_index": 1,
    "question_text": "Follow the chain from Kish of Benjamin: Kish was the father of King Saul. Saul was the father of Jonathan. Who was Jonathan’s crippled son whom David restored and fed at his own table?",
    "options": [
      "Mephibosheth",
      "Ish-bosheth",
      "Armoni",
      "Michal"
    ],
    "correct_answer": "Mephibosheth",
    "explanation": "Kish → King Saul → Jonathan → Mephibosheth (also called Merib-baal). David showed kindness to Mephibosheth for Jonathan’s sake, restoring Saul’s lands and setting him at the king’s table (2 Samuel 9:1-13).",
    "reference": "1 Samuel 14:49, 51; 2 Samuel 9:6-13",
    "metadata": {
      "stage": 1,
      "stage_title": "Chain Foundations",
      "level_title": "Early Kingdom Links",
      "chain_type": "character_chain",
      "chain_nodes": [
        "Kish",
        "Saul",
        "Jonathan",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Easy",
      "timerSeconds": 30,
      "points": 50,
      "testament": "Old Testament",
      "hint1": "He was lame in both feet after his nurse dropped him when news of Saul and Jonathan arrived from Jezreel.",
      "hint2": "2 Samuel 9:6: \"Now when Mephibosheth, the son of Jonathan, the son of Saul, was come unto David...\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l4-c2",
    "game_slug": "bible-chain-challenge",
    "level": 4,
    "challenge_index": 2,
    "question_text": "Type the name of Mephibosheth’s deceiver and servant, who owned fifteen sons and twenty servants, and took charge of Saul’s estate:",
    "options": [
      "Ziba",
      "Shimei",
      "Doeg",
      "Cush"
    ],
    "correct_answer": "Ziba",
    "explanation": "Jonathan → Mephibosheth → Ziba. David commanded Ziba, a servant of the house of Saul, to farm the land for Mephibosheth (2 Samuel 9:2, 9-10).",
    "reference": "2 Samuel 9:2, 9-10; 16:1-4",
    "metadata": {
      "stage": 1,
      "stage_title": "Chain Foundations",
      "level_title": "Early Kingdom Links",
      "chain_type": "character_chain",
      "chain_nodes": [
        "Jonathan",
        "Mephibosheth",
        "?"
      ],
      "is_typed": true,
      "acceptedAlternatives": [
        "Siba"
      ],
      "difficulty": "Moderate",
      "timerSeconds": 45,
      "points": 100,
      "testament": "Old Testament",
      "hint1": "He brought David two asses saddled with bread, raisins, summer fruits, and wine on Mount Olivet.",
      "hint2": "2 Samuel 9:2: \"And there was of the house of Saul a servant whose name was Ziba.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l4-c3",
    "game_slug": "bible-chain-challenge",
    "level": 4,
    "challenge_index": 3,
    "question_text": "Follow David’s family commanders: Jesse of Bethlehem had eight sons and two daughters, Zeruiah and Abigail. Who were the three mighty sons of Zeruiah who led David’s military forces?",
    "options": [
      "Joab, Abishai, and Asahel",
      "Benaiah, Eleazar, and Shammah",
      "Amnon, Absalom, and Adonijah",
      "Elhanan, Jonathan, and Shimeah"
    ],
    "correct_answer": "Joab, Abishai, and Asahel",
    "explanation": "David’s sister Zeruiah bore three sons: Joab (the commander-in-chief), Abishai (the chief of the thirty), and Asahel (as light of foot as a wild roe) (2 Samuel 2:18; 1 Chronicles 2:16).",
    "reference": "2 Samuel 2:18; 1 Chronicles 2:16",
    "metadata": {
      "stage": 1,
      "stage_title": "Chain Foundations",
      "level_title": "Early Kingdom Links",
      "chain_type": "character_chain",
      "chain_nodes": [
        "Jesse",
        "Zeruiah (sister of David)",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Moderate",
      "timerSeconds": 45,
      "points": 100,
      "testament": "Old Testament",
      "hint1": "Three brothers, one of whom was pierced by Abner’s spear butt at Gibeon.",
      "hint2": "2 Samuel 2:18: \"And there were three sons of Zeruiah there, Joab, and Abishai, and Asahel.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l4-c4",
    "game_slug": "bible-chain-challenge",
    "level": 4,
    "challenge_index": 4,
    "question_text": "Connect the prophetic confrontation chain: David committed sin with Bathsheba and arranged the death of Uriah the Hittite. Which prophet was sent by God to confront David using the parable of the poor man’s ewe lamb?",
    "options": [
      "Nathan",
      "Gad",
      "Samuel",
      "Ahijah"
    ],
    "correct_answer": "Nathan",
    "explanation": "David & Bathsheba → Death of Uriah → Nathan the prophet sent → \"Thou art the man!\" → David repents and writes Psalm 51 (2 Samuel 12:1-13; Psalm 51 inscription).",
    "reference": "2 Samuel 12:1-13; Psalm 51:1",
    "metadata": {
      "stage": 1,
      "stage_title": "Chain Foundations",
      "level_title": "Early Kingdom Links",
      "chain_type": "character_chain",
      "chain_nodes": [
        "David & Bathsheba",
        "Death of Uriah",
        "Ewe lamb parable",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Easy",
      "timerSeconds": 30,
      "points": 50,
      "testament": "Old Testament",
      "hint1": "He later assisted Bathsheba in ensuring Solomon was anointed king over Adonijah.",
      "hint2": "2 Samuel 12:1: \"And the LORD sent Nathan unto David.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l4-c5",
    "game_slug": "bible-chain-challenge",
    "level": 4,
    "challenge_index": 5,
    "question_text": "Follow the temple construction chain: King David gathered materials for the Temple. Solomon partnered with which Phoenician king of Tyre who supplied cedar trees and skilled artisans?",
    "options": [
      "Hiram",
      "Ben-hadad",
      "Hazael",
      "Tiglath-pileser"
    ],
    "correct_answer": "Hiram",
    "explanation": "David → Solomon → King Hiram of Tyre. Hiram loved David and sent cedar and fir timber from Lebanon floated down to Joppa to build the temple in Jerusalem (1 Kings 5:1-12; 2 Chronicles 2:3-16).",
    "reference": "1 Kings 5:1-12; 2 Chronicles 2:3-16",
    "metadata": {
      "stage": 1,
      "stage_title": "Chain Foundations",
      "level_title": "Early Kingdom Links",
      "chain_type": "name_to_event",
      "chain_nodes": [
        "David prepares materials",
        "Solomon builds Temple",
        "Lebanon cedars",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Easy",
      "timerSeconds": 30,
      "points": 50,
      "testament": "Old Testament",
      "hint1": "Also called Huram in 2 Chronicles.",
      "hint2": "1 Kings 5:1: \"And Hiram king of Tyre sent his servants unto Solomon; for he had heard that they had anointed him king.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l5-c1",
    "game_slug": "bible-chain-challenge",
    "level": 5,
    "challenge_index": 1,
    "question_text": "Follow the forerunner chain: Priest Zechariah and Elizabeth were righteous in Judea. The angel Gabriel announced they would have a son. Who was this child who prepared the way for the Messiah?",
    "options": [
      "John the Baptist",
      "Nathanael",
      "Stephen",
      "Barnabas"
    ],
    "correct_answer": "John the Baptist",
    "explanation": "Zechariah & Elizabeth → Angel Gabriel in the temple → John the Baptist born → Preaching repentance in the wilderness of Judea → Baptizing Jesus in the Jordan (Luke 1:5-17, 57-66; Matthew 3:1-17).",
    "reference": "Luke 1:13, 57-60; Matthew 3:1-6",
    "metadata": {
      "stage": 1,
      "stage_title": "Chain Foundations",
      "level_title": "Apostolic & Gospel Foundations",
      "chain_type": "character_chain",
      "chain_nodes": [
        "Zechariah & Elizabeth",
        "Gabriel temple vision",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Easy",
      "timerSeconds": 30,
      "points": 50,
      "testament": "New Testament",
      "hint1": "He wore camel’s hair, ate locusts and wild honey, and baptized at Bethabara beyond Jordan.",
      "hint2": "Luke 1:13: \"thy wife Elisabeth shall bear thee a son, and thou shalt call his name John.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l5-c2",
    "game_slug": "bible-chain-challenge",
    "level": 5,
    "challenge_index": 2,
    "question_text": "Follow the apostolic brother chain: John the Baptist pointed two disciples to Jesus saying, \"Behold the Lamb of God!\" One was Andrew, Simon Peter’s brother. What was the name of their father?",
    "options": [
      "Jona (John)",
      "Zebedee",
      "Alphaeus",
      "Cleopas"
    ],
    "correct_answer": "Jona (John)",
    "explanation": "John the Baptist → Andrew → Simon Peter. Jesus addressed Simon as \"Simon son of Jona\" (or John in John 21:15), indicating their father’s name was Jona (Matthew 16:17; John 1:40-42).",
    "reference": "Matthew 16:17; John 1:40-42; 21:15",
    "metadata": {
      "stage": 1,
      "stage_title": "Chain Foundations",
      "level_title": "Apostolic & Gospel Foundations",
      "chain_type": "character_chain",
      "chain_nodes": [
        "Andrew & Simon Peter",
        "Capernaum fishermen",
        "Father of Peter",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Moderate",
      "timerSeconds": 45,
      "points": 100,
      "testament": "New Testament",
      "hint1": "Simon is called \"Bar-jona\" in Matthew 16:17.",
      "hint2": "John 1:42: \"Thou art Simon the son of Jona: thou shalt be called Cephas.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l5-c3",
    "game_slug": "bible-chain-challenge",
    "level": 5,
    "challenge_index": 3,
    "question_text": "Type the name of Jonah's father, identified when the word of the LORD first came to the prophet and again in the account of Israel's restored border:",
    "options": [
      "Amittai",
      "Amaziah",
      "Elijah",
      "Elisha"
    ],
    "correct_answer": "Amittai",
    "explanation": "The book of Jonah opens by identifying the prophet as Jonah, the son of Amittai. The account of Israel's restored border under Jeroboam II also names Jonah son of Amittai (Jonah 1:1; 2 Kings 14:25).",
    "reference": "Jonah 1:1; 2 Kings 14:25",
    "metadata": {
      "stage": 1,
      "stage_title": "Chain Foundations",
      "level_title": "Prophets & Their Lineages",
      "chain_type": "character_chain",
      "chain_nodes": [
        "Jonah the prophet",
        "son of ?",
        "prophetic call to Nineveh",
        "ministry under Jeroboam II"
      ],
      "is_typed": true,
      "acceptedAlternatives": [
        "Amitai"
      ],
      "difficulty": "Moderate",
      "timerSeconds": 45,
      "points": 100,
      "testament": "Old Testament",
      "hint1": "The opening verse of Jonah identifies the prophet as the son of this man.",
      "hint2": "Jonah 1:1 names him as Jonah, son of Amittai.",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l5-c4",
    "game_slug": "bible-chain-challenge",
    "level": 5,
    "challenge_index": 4,
    "question_text": "Follow the sons of thunder chain: James and John were brothers, partners with Simon Peter in fishing. What was the name of their father who was mending nets in the ship?",
    "options": [
      "Zebedee",
      "Alphaeus",
      "Joseph",
      "Nicodemus"
    ],
    "correct_answer": "Zebedee",
    "explanation": "Jesus called James and John, the sons of Zebedee, as they were in a ship with Zebedee their father mending their nets, and they immediately left the ship and their father (Matthew 4:21-22; Mark 1:19-20).",
    "reference": "Matthew 4:21-22; Mark 3:17",
    "metadata": {
      "stage": 1,
      "stage_title": "Chain Foundations",
      "level_title": "Apostolic & Gospel Foundations",
      "chain_type": "character_chain",
      "chain_nodes": [
        "James & John",
        "Boanerges",
        "Father in the fishing ship",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Easy",
      "timerSeconds": 30,
      "points": 50,
      "testament": "New Testament",
      "hint1": "Their mother Salome is referred to as \"the mother of Zebedee’s children.\"",
      "hint2": "Matthew 4:21: \"James the son of Zebedee, and John his brother, in a ship with Zebedee their father.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l5-c5",
    "game_slug": "bible-chain-challenge",
    "level": 5,
    "challenge_index": 5,
    "question_text": "Follow the road to Damascus conversion chain: Saul was struck down by blinding light on the road to Damascus. Who was the disciple in Damascus whom the Lord instructed in a vision to lay hands on Saul to restore his sight?",
    "options": [
      "Ananias",
      "Agabus",
      "Barnabas",
      "Silas"
    ],
    "correct_answer": "Ananias",
    "explanation": "Saul on Damascus Road → Blinded 3 days at the house of Judas on Straight Street → Ananias of Damascus sent by the Lord → Saul receives sight and is baptized (Acts 9:10-18).",
    "reference": "Acts 9:10-18; 22:12-16",
    "metadata": {
      "stage": 1,
      "stage_title": "Chain Foundations",
      "level_title": "Apostolic & Gospel Foundations",
      "chain_type": "name_to_event",
      "chain_nodes": [
        "Saul on Damascus Road",
        "Street called Straight",
        "Laying on of hands",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Easy",
      "timerSeconds": 30,
      "points": 50,
      "testament": "New Testament",
      "hint1": "A devout man according to the law, having a good report of all the Jews in Damascus.",
      "hint2": "Acts 9:17: \"And Ananias went his way, and entered into the house; and putting his hands on him said, Brother Saul...\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l6-c1",
    "game_slug": "bible-chain-challenge",
    "level": 6,
    "challenge_index": 1,
    "question_text": "Follow the matriarchal chain: Sarah was the wife of Abraham. Her son Isaac took a wife chosen by Abraham’s servant at the well of Nahor. Who was Isaac’s wife?",
    "options": [
      "Rebekah",
      "Rachel",
      "Leah",
      "Keturah"
    ],
    "correct_answer": "Rebekah",
    "explanation": "Abraham & Sarah → Isaac → Eliezer at the well of Haran/Nahor → Rebekah daughter of Bethuel becomes Isaac’s wife (Genesis 24:15, 67).",
    "reference": "Genesis 24:15, 67; 25:20",
    "metadata": {
      "stage": 2,
      "stage_title": "Family Connections",
      "level_title": "Matriarchs & Marriages",
      "chain_type": "character_chain",
      "chain_nodes": [
        "Sarah",
        "Isaac",
        "Well of Nahor",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Easy",
      "timerSeconds": 30,
      "points": 50,
      "testament": "Old Testament",
      "hint1": "Sister of Laban, mother of Esau and Jacob.",
      "hint2": "Genesis 24:67: \"and she became his wife; and he loved her: and Isaac was comforted after his mother’s death.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l6-c2",
    "game_slug": "bible-chain-challenge",
    "level": 6,
    "challenge_index": 2,
    "question_text": "Follow Jacob’s Padan-aram marriage chain: Jacob served Laban seven years for Rachel, but on the wedding night Laban substituted his tender-eyed elder daughter. What was her name?",
    "options": [
      "Leah",
      "Bilhah",
      "Zilpah",
      "Dinah"
    ],
    "correct_answer": "Leah",
    "explanation": "Jacob → Padan-aram → Laban’s deception → Leah given first, then Rachel one week later for another seven years of service (Genesis 29:21-30).",
    "reference": "Genesis 29:23-26",
    "metadata": {
      "stage": 2,
      "stage_title": "Family Connections",
      "level_title": "Matriarchs & Marriages",
      "chain_type": "character_chain",
      "chain_nodes": [
        "Jacob",
        "Laban of Haran",
        "Elder daughter given",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Easy",
      "timerSeconds": 30,
      "points": 50,
      "testament": "Old Testament",
      "hint1": "Mother of Reuben, Simeon, Levi, Judah, Issachar, Zebulun, and Dinah.",
      "hint2": "Genesis 29:25: \"And it came to pass, that in the morning, behold, it was Leah.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l6-c3",
    "game_slug": "bible-chain-challenge",
    "level": 6,
    "challenge_index": 3,
    "question_text": "Type the name of Rachel’s handmaid, whom Rachel gave to Jacob as a wife, bearing Dan and Naphtali:",
    "options": [
      "Bilhah",
      "Zilpah",
      "Hagar",
      "Keturah"
    ],
    "correct_answer": "Bilhah",
    "explanation": "Rachel being barren gave Jacob her handmaid Bilhah, who bare Dan (\"God hath judged me\") and Naphtali (\"With great wrestlings have I wrestled\") (Genesis 30:3-8).",
    "reference": "Genesis 30:3-8; 35:25",
    "metadata": {
      "stage": 2,
      "stage_title": "Family Connections",
      "level_title": "Matriarchs & Marriages",
      "chain_type": "character_chain",
      "chain_nodes": [
        "Rachel",
        "Handmaid to Jacob",
        "Mother of Dan & Naphtali",
        "?"
      ],
      "is_typed": true,
      "acceptedAlternatives": [
        "Bila"
      ],
      "difficulty": "Moderate",
      "timerSeconds": 45,
      "points": 100,
      "testament": "Old Testament",
      "hint1": "Her sons were named Dan and Naphtali.",
      "hint2": "Genesis 30:4: \"And she gave him Bilhah her handmaid to wife: and Jacob went in unto her.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l6-c4",
    "game_slug": "bible-chain-challenge",
    "level": 6,
    "challenge_index": 4,
    "question_text": "Follow the Bethlehem-Moab family tragedy: Elimelech and Naomi moved from Bethlehem-judah to the country of Moab. Name their two sons who married Moabite wives and died there:",
    "options": [
      "Mahlon and Chilion",
      "Phinehas and Hophni",
      "Nadab and Abihu",
      "Perez and Zerah"
    ],
    "correct_answer": "Mahlon and Chilion",
    "explanation": "Elimelech & Naomi → Move to Moab during famine → Sons Mahlon and Chilion marry Ruth and Orpah → Elimelech, Mahlon, and Chilion all die in Moab (Ruth 1:1-5).",
    "reference": "Ruth 1:2-5; 4:9-10",
    "metadata": {
      "stage": 2,
      "stage_title": "Family Connections",
      "level_title": "Matriarchs & Marriages",
      "chain_type": "character_chain",
      "chain_nodes": [
        "Elimelech & Naomi",
        "Famine in Bethlehem",
        "Two sons in Moab",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Easy",
      "timerSeconds": 30,
      "points": 50,
      "testament": "Old Testament",
      "hint1": "Their names mean \"sickly\" and \"pining/failing\".",
      "hint2": "Ruth 1:2: \"And the name of the man was Elimelech, and the name of his wife Naomi, and the name of his two sons Mahlon and Chilion.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l6-c5",
    "game_slug": "bible-chain-challenge",
    "level": 6,
    "challenge_index": 5,
    "question_text": "Complete the five-link lineage chain: Ruth married Boaz in Bethlehem. Boaz and Ruth had a son named Obed. Obed was the father of Jesse. Who was the youngest son of Jesse who was anointed king?",
    "options": [
      "David",
      "Eliab",
      "Abinadab",
      "Shammah"
    ],
    "correct_answer": "David",
    "explanation": "The royal messianic chain in Ruth 4: Ruth → Boaz → Obed → Jesse → King David (Ruth 4:17, 21-22; Matthew 1:5-6).",
    "reference": "Ruth 4:17, 21-22; 1 Chronicles 2:12-15",
    "metadata": {
      "stage": 2,
      "stage_title": "Family Connections",
      "level_title": "Matriarchs & Marriages",
      "chain_type": "five_link",
      "chain_nodes": [
        "Ruth",
        "Boaz",
        "Obed",
        "Jesse",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Easy",
      "timerSeconds": 30,
      "points": 50,
      "testament": "Old Testament",
      "hint1": "The shepherd boy who defeated Goliath and became king of Israel.",
      "hint2": "Ruth 4:22: \"And Obed begat Jesse, and Jesse begat David.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l7-c1",
    "game_slug": "bible-chain-challenge",
    "level": 7,
    "challenge_index": 1,
    "question_text": "Follow the Northern Kingdom Omride dynasty: General Omri bought the hill of Samaria and built the capital. Who was his notorious son who married Jezebel of Sidon and promoted Baal worship?",
    "options": [
      "Ahab",
      "Ahaziah",
      "Joram",
      "Jehu"
    ],
    "correct_answer": "Ahab",
    "explanation": "Omri built Samaria → Ahab succeeded Omri → Ahab married Jezebel daughter of Ethbaal king of the Zidonians → Built temple of Baal in Samaria and provoked the LORD more than all before him (1 Kings 16:24, 28-33).",
    "reference": "1 Kings 16:28-33",
    "metadata": {
      "stage": 2,
      "stage_title": "Family Connections",
      "level_title": "Royal Bloodlines & Dynasties",
      "chain_type": "character_chain",
      "chain_nodes": [
        "Omri",
        "Capital of Samaria",
        "Marriage to Jezebel",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Easy",
      "timerSeconds": 30,
      "points": 50,
      "testament": "Old Testament",
      "hint1": "King opposed by Elijah the Tishbite during the three-year drought.",
      "hint2": "1 Kings 16:29: \"And in the thirty and eighth year of Asa king of Judah began Ahab the son of Omri to reign over Israel.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l7-c2",
    "game_slug": "bible-chain-challenge",
    "level": 7,
    "challenge_index": 2,
    "question_text": "Follow the alliance chain: Ahab and Jezebel had a daughter who married Jehoram king of Judah. Upon her son Ahaziah’s death, she usurped the throne of Judah and attempted to massacre all the royal seed. What was her name?",
    "options": [
      "Athaliah",
      "Maachah",
      "Jezebel",
      "Jehosheba"
    ],
    "correct_answer": "Athaliah",
    "explanation": "Ahab & Jezebel → Daughter Athaliah marries Jehoram of Judah → Mother of Ahaziah of Judah → Athaliah destroys royal seed and usurps throne for six years (2 Kings 8:18, 26; 11:1-3).",
    "reference": "2 Kings 8:26; 11:1-3; 2 Chronicles 22:2-10",
    "metadata": {
      "stage": 2,
      "stage_title": "Family Connections",
      "level_title": "Royal Bloodlines & Dynasties",
      "chain_type": "character_chain",
      "chain_nodes": [
        "Ahab & Jezebel",
        "Jehoram of Judah",
        "Usurper queen who killed royal seed",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Moderate",
      "timerSeconds": 45,
      "points": 100,
      "testament": "Old Testament",
      "hint1": "Granddaughter of Omri, slain at the horse gate when Joash was crowned.",
      "hint2": "2 Kings 11:1: \"And when Athaliah the mother of Ahaziah saw that her son was dead, she arose and destroyed all the seed royal.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l7-c3",
    "game_slug": "bible-chain-challenge",
    "level": 7,
    "challenge_index": 3,
    "question_text": "Type the name of the courageous princess (sister of King Ahaziah and wife of Jehoiada the priest) who stole baby Joash away from the massacre and hid him in the temple:",
    "options": [
      "Jehosheba",
      "Huldah",
      "Abital",
      "Zibiah"
    ],
    "correct_answer": "Jehosheba",
    "explanation": "Athaliah’s massacre → Jehosheba (Jehoshabeath in 2 Chronicles) rescues baby Joash → Hid in the house of the LORD six years → Jehoiada crowns Joash at age seven (2 Kings 11:2-4; 2 Chronicles 22:11).",
    "reference": "2 Kings 11:2-3; 2 Chronicles 22:11",
    "metadata": {
      "stage": 2,
      "stage_title": "Family Connections",
      "level_title": "Royal Bloodlines & Dynasties",
      "chain_type": "character_chain",
      "chain_nodes": [
        "Athaliah’s massacre",
        "Joash stolen from dead princes",
        "Hidden in bedchamber",
        "?"
      ],
      "is_typed": true,
      "acceptedAlternatives": [
        "Jehoshabeath",
        "Josheba"
      ],
      "difficulty": "Difficult",
      "timerSeconds": 75,
      "points": 150,
      "testament": "Old Testament",
      "hint1": "Daughter of King Joram, sister of Ahaziah, wife of Jehoiada the high priest.",
      "hint2": "2 Kings 11:2: \"But Jehosheba, the daughter of king Joram, sister of Ahaziah, took Joash the son of Ahaziah, and stole him from among the king’s sons which were slain.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l7-c4",
    "game_slug": "bible-chain-challenge",
    "level": 7,
    "challenge_index": 4,
    "question_text": "Follow the godly succession chain: King Hezekiah fell sick unto death, wept, and God added fifteen years to his life. Which wicked son, born during those added years, succeeded him and reigned fifty-five years in Jerusalem?",
    "options": [
      "Manasseh",
      "Amon",
      "Josiah",
      "Jehoiakim"
    ],
    "correct_answer": "Manasseh",
    "explanation": "Hezekiah’s illness and 15-year extension → Manasseh born (reigned starting at age 12) → Reigned 55 years, built altars to host of heaven, repented in Babylonian captivity (2 Kings 20:6; 21:1-2; 2 Chronicles 33:1-13).",
    "reference": "2 Kings 20:6; 21:1-2; 2 Chronicles 33:1-13",
    "metadata": {
      "stage": 2,
      "stage_title": "Family Connections",
      "level_title": "Royal Bloodlines & Dynasties",
      "chain_type": "character_chain",
      "chain_nodes": [
        "Hezekiah",
        "15 years added to life",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Easy",
      "timerSeconds": 30,
      "points": 50,
      "testament": "Old Testament",
      "hint1": "Father of Amon and grandfather of the great reformer Josiah.",
      "hint2": "2 Kings 21:1: \"Manasseh was twelve years old when he began to reign, and reigned fifty and five years in Jerusalem.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l7-c5",
    "game_slug": "bible-chain-challenge",
    "level": 7,
    "challenge_index": 5,
    "question_text": "Follow the reformation succession: Manasseh begat Amon. Amon’s servants assassinated him in his house. The people of the land slew the conspirators and crowned his eight-year-old son. Who was this godly king who repaired the temple and rediscovered the Book of the Law?",
    "options": [
      "Josiah",
      "Jehoahaz",
      "Eliakim",
      "Zedekiah"
    ],
    "correct_answer": "Josiah",
    "explanation": "Manasseh → Amon → Josiah crowned at age 8 → Cleansed Judah of idols → Shaphan and Hilkiah find Book of the Law → Kept the greatest Passover since the days of Samuel (2 Kings 22:1-11; 23:21-25).",
    "reference": "2 Kings 21:26; 22:1-2; 2 Chronicles 34:1-8",
    "metadata": {
      "stage": 2,
      "stage_title": "Family Connections",
      "level_title": "Royal Bloodlines & Dynasties",
      "chain_type": "character_chain",
      "chain_nodes": [
        "Manasseh",
        "Amon slain",
        "Eight-year-old crowned",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Easy",
      "timerSeconds": 30,
      "points": 50,
      "testament": "Old Testament",
      "hint1": "Prophesied by name 300 years earlier by a man of God at Jeroboam’s altar in Bethel.",
      "hint2": "2 Kings 22:1: \"Josiah was eight years old when he began to reign, and he reigned thirty and one years in Jerusalem.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l8-c1",
    "game_slug": "bible-chain-challenge",
    "level": 8,
    "challenge_index": 1,
    "question_text": "Follow the primeval sibling tragedy: Adam and Eve had Cain and Abel. Cain murdered righteous Abel in the field. Which third son was born to Eve to replace Abel, through whose line men began to call upon the name of the LORD?",
    "options": [
      "Seth",
      "Enos",
      "Jared",
      "Methuselah"
    ],
    "correct_answer": "Seth",
    "explanation": "Cain & Abel → Abel slain → Eve bears Seth (\"For God, said she, hath appointed me another seed instead of Abel, whom Cain slew\") → Enos born (Genesis 4:25-26; Luke 3:38).",
    "reference": "Genesis 4:25-26; 5:3",
    "metadata": {
      "stage": 2,
      "stage_title": "Family Connections",
      "level_title": "Siblings & Relatives",
      "chain_type": "character_chain",
      "chain_nodes": [
        "Cain & Abel",
        "Abel slain in the field",
        "Seed appointed instead of Abel",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Easy",
      "timerSeconds": 30,
      "points": 50,
      "testament": "Old Testament",
      "hint1": "His name means \"appointed\" or \"compensation\".",
      "hint2": "Genesis 4:25: \"and she bare a son, and called his name Seth: For God, said she, hath appointed me another seed instead of Abel.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l8-c2",
    "game_slug": "bible-chain-challenge",
    "level": 8,
    "challenge_index": 2,
    "question_text": "Follow the Bethany sibling chain: In Bethany, near Jerusalem, Jesus stayed with a family of three siblings whom He deeply loved. Two were sisters named Martha and Mary. Who was their brother whom Jesus raised from the dead after four days in the tomb?",
    "options": [
      "Lazarus",
      "Simon the leper",
      "Nicodemus",
      "Zacchaeus"
    ],
    "correct_answer": "Lazarus",
    "explanation": "Mary & Martha of Bethany → Sickness and death of their brother → Tomb sealed four days → Jesus weeps → \"Lazarus, come forth!\" (John 11:1-44; 12:1-2).",
    "reference": "John 11:1-5, 43-44; 12:1-2",
    "metadata": {
      "stage": 2,
      "stage_title": "Family Connections",
      "level_title": "Siblings & Relatives",
      "chain_type": "character_chain",
      "chain_nodes": [
        "Martha",
        "Mary of Bethany",
        "Four days in the tomb",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Easy",
      "timerSeconds": 30,
      "points": 50,
      "testament": "New Testament",
      "hint1": "The chief priests consulted that they might put him to death also because many believed on Jesus on account of him.",
      "hint2": "John 11:1-2: \"Now a certain man was sick, named Lazarus, of Bethany, the town of Mary and her sister Martha.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l8-c3",
    "game_slug": "bible-chain-challenge",
    "level": 8,
    "challenge_index": 3,
    "question_text": "Type the name of David’s eldest brother, who rebuked young David when he arrived at the valley of Elah asking about Goliath:",
    "options": [
      "Eliab",
      "Abinadab",
      "Shammah",
      "Nethaneel"
    ],
    "correct_answer": "Eliab",
    "explanation": "Jesse of Bethlehem → Eliab (eldest brother) → Abinadab → Shammah → ... → David (youngest). Eliab scolded David in 1 Samuel 17:28: \"Why camest thou down hither? and with whom hast thou left those few sheep in the wilderness?\"",
    "reference": "1 Samuel 16:6; 1 Samuel 17:28",
    "metadata": {
      "stage": 2,
      "stage_title": "Family Connections",
      "level_title": "Siblings & Relatives",
      "chain_type": "character_chain",
      "chain_nodes": [
        "Jesse’s sons",
        "Valley of Elah rebuke",
        "Eldest brother",
        "?"
      ],
      "is_typed": true,
      "acceptedAlternatives": [
        "Elihu"
      ],
      "difficulty": "Moderate",
      "timerSeconds": 45,
      "points": 100,
      "testament": "Old Testament",
      "hint1": "When Samuel saw him, he thought: \"Surely the LORD’s anointed is before him.\"",
      "hint2": "1 Samuel 17:28: \"And Eliab his eldest brother heard when he spake unto the men; and Eliab’s anger was kindled against David.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l8-c4",
    "game_slug": "bible-chain-challenge",
    "level": 8,
    "challenge_index": 4,
    "question_text": "Follow Joseph’s full-brother chain: Jacob had twelve sons, but Rachel bare only two. One was Joseph who was sold into Egypt. Who was Joseph’s only full brother, born on the road to Ephrath (Bethlehem)?",
    "options": [
      "Benjamin",
      "Dan",
      "Naphtali",
      "Gad"
    ],
    "correct_answer": "Benjamin",
    "explanation": "Jacob & Rachel → Joseph born in Haran → Family journeys to Bethel and Ephrath → Rachel dies giving birth to Ben-oni, whom Jacob named Benjamin (Genesis 35:16-18; 43:29).",
    "reference": "Genesis 35:16-18; 43:29; 44:20",
    "metadata": {
      "stage": 2,
      "stage_title": "Family Connections",
      "level_title": "Siblings & Relatives",
      "chain_type": "character_chain",
      "chain_nodes": [
        "Rachel",
        "Joseph in Egypt",
        "Son of the right hand",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Easy",
      "timerSeconds": 30,
      "points": 50,
      "testament": "Old Testament",
      "hint1": "His mother called his name Ben-oni as her soul was departing, but his father called him Benjamin.",
      "hint2": "Genesis 35:18: \"and she called his name Benoni: but his father called him Benjamin.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l8-c5",
    "game_slug": "bible-chain-challenge",
    "level": 8,
    "challenge_index": 5,
    "question_text": "Follow the lineage of Moses and Aaron’s tribe: Levi had three sons whose families performed the sacred tabernacle duties. Name these three sons of Levi:",
    "options": [
      "Gershon, Kohath, and Merari",
      "Nadab, Abihu, and Eleazar",
      "Korah, Dathan, and Abiram",
      "Reuben, Simeon, and Levi"
    ],
    "correct_answer": "Gershon, Kohath, and Merari",
    "explanation": "Jacob → Levi → Gershon, Kohath, and Merari. In Numbers, the Levites were numbered by these three ancestral families to transport and serve the tabernacle (Genesis 46:11; Exodus 6:16; Numbers 3:17).",
    "reference": "Genesis 46:11; Exodus 6:16; Numbers 3:17-37",
    "metadata": {
      "stage": 2,
      "stage_title": "Family Connections",
      "level_title": "Siblings & Relatives",
      "chain_type": "character_chain",
      "chain_nodes": [
        "Levi",
        "Three Tabernacle divisions",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Moderate",
      "timerSeconds": 45,
      "points": 100,
      "testament": "Old Testament",
      "hint1": "The Kohathites carried the holy vessels, the Gershonites the curtains, the Merarites the boards and bars.",
      "hint2": "Exodus 6:16: \"And these are the names of the sons of Levi according to their generations; Gershon, and Kohath, and Merari.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l9-c1",
    "game_slug": "bible-chain-challenge",
    "level": 9,
    "challenge_index": 1,
    "question_text": "Follow the prophetic mentorship chain: The LORD instructed Elijah to cast his mantle upon a ploughman at Abel-meholah. Elijah parted Jordan with his mantle and was taken up in a whirlwind. Who was his disciple who received a double portion of his spirit?",
    "options": [
      "Elisha",
      "Gehazi",
      "Micaiah",
      "Obadiah"
    ],
    "correct_answer": "Elisha",
    "explanation": "Elijah casts mantle at Abel-meholah → Elisha leaves twelve yoke of oxen and follows him → Chariot of fire and whirlwind at Jordan → Elisha takes up Elijah’s fallen mantle and strikes the water (1 Kings 19:19-21; 2 Kings 2:8-15).",
    "reference": "1 Kings 19:19-21; 2 Kings 2:9-15",
    "metadata": {
      "stage": 2,
      "stage_title": "Family Connections",
      "level_title": "Mentors, Companions & In-laws",
      "chain_type": "character_chain",
      "chain_nodes": [
        "Elijah the Tishbite",
        "Abel-meholah 12 oxen",
        "Whirlwind and chariot of fire",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Easy",
      "timerSeconds": 30,
      "points": 50,
      "testament": "Old Testament",
      "hint1": "Son of Shaphat, who poured water on the hands of Elijah.",
      "hint2": "2 Kings 2:15: \"The spirit of Elijah doth rest on Elisha.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l9-c2",
    "game_slug": "bible-chain-challenge",
    "level": 9,
    "challenge_index": 2,
    "question_text": "Follow the tentmaking companionship chain: When Paul arrived in Corinth from Athens, he met a Jewish couple who had recently come from Italy because Claudius commanded all Jews to depart Rome. Name this husband and wife team who worked with Paul:",
    "options": [
      "Aquila and Priscilla",
      "Ananias and Sapphira",
      "Andronicus and Junia",
      "Philemon and Apphia"
    ],
    "correct_answer": "Aquila and Priscilla",
    "explanation": "Paul in Corinth → Meets Aquila and Priscilla (tentmakers) → They travel to Ephesus → They take eloquent Apollos aside and expound the way of God more perfectly (Acts 18:1-3, 18, 24-26; Romans 16:3-4).",
    "reference": "Acts 18:1-3, 24-26; Romans 16:3",
    "metadata": {
      "stage": 2,
      "stage_title": "Family Connections",
      "level_title": "Mentors, Companions & In-laws",
      "chain_type": "character_chain",
      "chain_nodes": [
        "Paul at Corinth",
        "Tentmakers from Italy",
        "Expounded way of God to Apollos",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Easy",
      "timerSeconds": 30,
      "points": 50,
      "testament": "New Testament",
      "hint1": "Priscilla is also called Prisca in Paul’s epistles.",
      "hint2": "Acts 18:2: \"And found a certain Jew named Aquila, born in Pontus, lately come from Italy, with his wife Priscilla.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l9-c3",
    "game_slug": "bible-chain-challenge",
    "level": 9,
    "challenge_index": 3,
    "question_text": "Type the name of Timothy’s godly grandmother, praised alongside his mother Eunice by Paul for her unfeigned faith:",
    "options": [
      "Lois",
      "Rhoda",
      "Claudia",
      "Syntyche"
    ],
    "correct_answer": "Lois",
    "explanation": "Paul’s spiritual son Timothy → Mother Eunice → Grandmother Lois. Paul remembered the genuine faith that dwelt first in grandmother Lois and mother Eunice (2 Timothy 1:5; 3:15).",
    "reference": "2 Timothy 1:5; 3:15",
    "metadata": {
      "stage": 2,
      "stage_title": "Family Connections",
      "level_title": "Mentors, Companions & In-laws",
      "chain_type": "character_chain",
      "chain_nodes": [
        "Timothy",
        "Mother Eunice",
        "Grandmother of unfeigned faith",
        "?"
      ],
      "is_typed": true,
      "acceptedAlternatives": [
        "Loys"
      ],
      "difficulty": "Moderate",
      "timerSeconds": 45,
      "points": 100,
      "testament": "New Testament",
      "hint1": "Four-letter Greek name starting with L.",
      "hint2": "2 Timothy 1:5: \"which dwelt first in thy grandmother Lois, and thy mother Eunice.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l9-c4",
    "game_slug": "bible-chain-challenge",
    "level": 9,
    "challenge_index": 4,
    "question_text": "Follow the Cypriot mission chain: The church at Antioch sent Paul and Barnabas on their first missionary journey. Which cousin of Barnabas accompanied them as their minister, but departed from them at Perga in Pamphylia?",
    "options": [
      "John Mark",
      "Silas",
      "Timothy",
      "Luke"
    ],
    "correct_answer": "John Mark",
    "explanation": "Antioch commissioning → Barnabas & Saul → John Mark assists in Cyprus → Mark turns back at Perga → Later causes sharp contention between Paul and Barnabas → Reconciled in 2 Timothy 4:11 (Acts 13:4-5, 13; 15:37-39; Colossians 4:10).",
    "reference": "Acts 13:5, 13; 15:37-39; Colossians 4:10",
    "metadata": {
      "stage": 2,
      "stage_title": "Family Connections",
      "level_title": "Mentors, Companions & In-laws",
      "chain_type": "character_chain",
      "chain_nodes": [
        "Barnabas & Paul",
        "Cyprus mission",
        "Departed at Perga",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Easy",
      "timerSeconds": 30,
      "points": 50,
      "testament": "New Testament",
      "hint1": "Author of the second Gospel; son of Mary whose house believers prayed in.",
      "hint2": "Acts 13:13: \"and John departing from them returned to Jerusalem.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l9-c5",
    "game_slug": "bible-chain-challenge",
    "level": 9,
    "challenge_index": 5,
    "question_text": "Follow the second missionary companion chain: After parting from Barnabas, Paul chose a leading brother from the Jerusalem church who was also a Roman citizen, accompanied Paul to Philippi, and sang hymns at midnight in prison. Who was this companion?",
    "options": [
      "Silas (Silvanus)",
      "Titus",
      "Tychicus",
      "Aristarchus"
    ],
    "correct_answer": "Silas (Silvanus)",
    "explanation": "Paul & Silas chosen at Antioch → Journey through Galatia and Philippi → Beaten and imprisoned at Philippi → Singing praises at midnight → Earthquake opens doors → Jailer converted (Acts 15:40; 16:19-34).",
    "reference": "Acts 15:40; 16:25-34",
    "metadata": {
      "stage": 2,
      "stage_title": "Family Connections",
      "level_title": "Mentors, Companions & In-laws",
      "chain_type": "character_chain",
      "chain_nodes": [
        "Paul at Antioch",
        "Replaces Barnabas",
        "Philippian jail singing at midnight",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Easy",
      "timerSeconds": 30,
      "points": 50,
      "testament": "New Testament",
      "hint1": "Also known as Silvanus in the epistles of Paul and Peter.",
      "hint2": "Acts 16:25: \"And at midnight Paul and Silas prayed, and sang praises unto God: and the prisoners heard them.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l10-c1",
    "game_slug": "bible-chain-challenge",
    "level": 10,
    "challenge_index": 1,
    "question_text": "DEEP SCRIPTURE STUDY: Read Ruth 4:18-22.\n\"Now these are the generations of Pharez: Pharez begat Hezron, and Hezron begat Ram, and Ram begat Amminadab, and Amminadab begat Nahshon, and Nahshon begat Salmon, and Salmon begat Boaz, and Boaz begat Obed, and Obed begat Jesse, and Jesse begat David.\"\nWho was the prince of the children of Judah who is listed between Amminadab and Salmon?",
    "options": [
      "Nahshon",
      "Hezron",
      "Ram",
      "Obed"
    ],
    "correct_answer": "Nahshon",
    "explanation": "Ruth 4:19-20 explicitly lists: Amminadab → Nahshon → Salmon. Nahshon was the captain and prince of the standard of Judah during the wilderness wanderings (Numbers 1:7; 2:3).",
    "reference": "Ruth 4:19-20; 1 Chronicles 2:10; Matthew 1:4",
    "metadata": {
      "stage": 2,
      "stage_title": "Family Connections",
      "level_title": "Deep Scripture Study: Covenant Lineages",
      "chain_type": "character_chain",
      "chain_nodes": [
        "Ram",
        "Amminadab",
        "?",
        "Salmon",
        "Boaz"
      ],
      "is_typed": false,
      "difficulty": "Moderate",
      "timerSeconds": 90,
      "points": 100,
      "testament": "Old Testament",
      "dossier": "Ruth 4:18-22 — The royal genealogy of Pharez to David preserved through the elders and gates of Bethlehem.",
      "study_mode": true,
      "hint1": "Prince of Judah whose sister Elisheba married Aaron the high priest (Exodus 6:23).",
      "hint2": "Ruth 4:20: \"and Amminadab begat Nahshon, and Nahshon begat Salmon.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l10-c2",
    "game_slug": "bible-chain-challenge",
    "level": 10,
    "challenge_index": 2,
    "question_text": "DEEP SCRIPTURE STUDY: In Matthew 1:5, which woman of Jericho who hid the two Hebrew spies is named as the wife of Salmon and the mother of Boaz?",
    "options": [
      "Rahab (Rachab)",
      "Ruth",
      "Tamar",
      "Bathsheba"
    ],
    "correct_answer": "Rahab (Rachab)",
    "explanation": "Matthew 1:5 links the Old Testament conquest and the genealogy of Christ: Salmon begat Boaz of Rahab (Rachab); Boaz begat Obed of Ruth; Obed begat Jesse; and Jesse begat David the king.",
    "reference": "Matthew 1:5; Joshua 2:1-21; 6:25",
    "metadata": {
      "stage": 2,
      "stage_title": "Family Connections",
      "level_title": "Deep Scripture Study: Covenant Lineages",
      "chain_type": "old_to_new",
      "chain_nodes": [
        "Jericho scarlet line",
        "Salmon of Judah",
        "Mother of Boaz",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Moderate",
      "timerSeconds": 60,
      "points": 100,
      "testament": "New Testament",
      "dossier": "Matthew 1:5 records: \"And Salmon begat Booz of Rachab; and Booz begat Obed of Ruth; and Obed begat Jesse.\"",
      "study_mode": true,
      "hint1": "Commended in Hebrews 11:31 and James 2:25 for her faith.",
      "hint2": "Matthew 1:5: \"And Salmon begat Booz of Rachab.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l10-c3",
    "game_slug": "bible-chain-challenge",
    "level": 10,
    "challenge_index": 3,
    "question_text": "Type the missing link in this five-link Messianic ancestor chain from Genesis 38 & Ruth 4:\nJudah → Tamar → Pharez → Hezron → [ ? ] → Amminadab",
    "options": [
      "Ram",
      "Nahshon",
      "Salmon",
      "Boaz"
    ],
    "correct_answer": "Ram",
    "explanation": "Judah & Tamar → Pharez → Hezron → Ram (also called Aram in Matthew 1:3-4) → Amminadab (Ruth 4:18-19; 1 Chronicles 2:9).",
    "reference": "Ruth 4:18-19; Matthew 1:3-4",
    "metadata": {
      "stage": 2,
      "stage_title": "Family Connections",
      "level_title": "Deep Scripture Study: Covenant Lineages",
      "chain_type": "five_link",
      "chain_nodes": [
        "Judah & Tamar",
        "Pharez",
        "Hezron",
        "?",
        "Amminadab"
      ],
      "is_typed": true,
      "acceptedAlternatives": [
        "Aram"
      ],
      "difficulty": "Difficult",
      "timerSeconds": 75,
      "points": 150,
      "testament": "Old Testament",
      "hint1": "Three-letter name, son of Hezron and brother of Jerahmeel and Chelubai.",
      "hint2": "Ruth 4:19: \"and Hezron begat Ram, and Ram begat Amminadab.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l10-c4",
    "game_slug": "bible-chain-challenge",
    "level": 10,
    "challenge_index": 4,
    "question_text": "DEEP SCRIPTURE STUDY: In 2 Samuel 9:12, after David restored Mephibosheth to his table for Jonathan’s sake, Mephibosheth had a young son through whom Jonathan’s line was preserved. What was his son’s name?",
    "options": [
      "Mica (Micah)",
      "Rehabiah",
      "Uriel",
      "Eliphaz"
    ],
    "correct_answer": "Mica (Micah)",
    "explanation": "Saul → Jonathan → Mephibosheth → Mica (spelled Micah in 1 Chronicles 8:34). 2 Samuel 9:12 states: \"And Mephibosheth had a young son, whose name was Micha. And all that dwelt in the house of Ziba were servants unto Mephibosheth.\"",
    "reference": "2 Samuel 9:12; 1 Chronicles 8:34-35",
    "metadata": {
      "stage": 2,
      "stage_title": "Family Connections",
      "level_title": "Deep Scripture Study: Covenant Lineages",
      "chain_type": "character_chain",
      "chain_nodes": [
        "King Saul",
        "Jonathan",
        "Mephibosheth",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Difficult",
      "timerSeconds": 75,
      "points": 150,
      "testament": "Old Testament",
      "dossier": "2 Samuel 9 records David fulfilling his oath of lovingkindness to Jonathan, maintaining Mephibosheth and his descendants.",
      "study_mode": true,
      "hint1": "A four-letter name, spelled Micha or Micah.",
      "hint2": "2 Samuel 9:12: \"And Mephibosheth had a young son, whose name was Micha.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l10-c5",
    "game_slug": "bible-chain-challenge",
    "level": 10,
    "challenge_index": 5,
    "question_text": "DEEP SCRIPTURE STUDY: In 1 Chronicles 3:10-12, inspect the royal succession of Judah:\n\"And Solomon’s son was Rehoboam, Abia his son, Asa his son, Jehoshaphat his son, Joram his son, Ahaziah his son, Joash his son, Amaziah his son, Azariah his son...\"\nWhich king ruled between Joram and Joash?",
    "options": [
      "Ahaziah",
      "Amaziah",
      "Azariah",
      "Asa"
    ],
    "correct_answer": "Ahaziah",
    "explanation": "Joram was succeeded by his youngest son Ahaziah (also called Jehoahaz in 2 Chronicles 21:17). Ahaziah was slain by Jehu, after which his baby son Joash was preserved in the temple from Athaliah (1 Chronicles 3:11; 2 Kings 8:24-25; 11:2).",
    "reference": "1 Chronicles 3:11; 2 Kings 8:24-25",
    "metadata": {
      "stage": 2,
      "stage_title": "Family Connections",
      "level_title": "Deep Scripture Study: Covenant Lineages",
      "chain_type": "five_link",
      "chain_nodes": [
        "Jehoshaphat",
        "Joram",
        "?",
        "Joash",
        "Amaziah"
      ],
      "is_typed": false,
      "difficulty": "Moderate",
      "timerSeconds": 90,
      "points": 100,
      "testament": "Old Testament",
      "dossier": "1 Chronicles 3:10-14 details the uninterrupted Davidic dynasty through all kings of Judah from Solomon to Josiah and Jeconiah.",
      "study_mode": true,
      "hint1": "Son of Athaliah, reigned only one year in Jerusalem.",
      "hint2": "1 Chronicles 3:11: \"Joram his son, Ahaziah his son, Joash his son.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l11-c1",
    "game_slug": "bible-chain-challenge",
    "level": 11,
    "challenge_index": 1,
    "question_text": "Follow Joseph’s chain of betrayal: Jacob gave Joseph a coat of many colours. His brothers envied him and plotted against him. At which location did Joseph find his brothers before they cast him into an empty pit?",
    "options": [
      "Dothan",
      "Shechem",
      "Hebron",
      "Bethel"
    ],
    "correct_answer": "Dothan",
    "explanation": "Joseph went from Hebron to Shechem seeking his brothers, and a man told him they had departed for Dothan. There his brothers saw him afar off and conspired against him (Genesis 37:14-17, 24).",
    "reference": "Genesis 37:17, 24",
    "metadata": {
      "stage": 3,
      "stage_title": "People and Events",
      "level_title": "Joseph’s Journey of Providence",
      "chain_type": "name_to_event",
      "chain_nodes": [
        "Coat of many colours",
        "Shechem search",
        "Empty pit",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Easy",
      "timerSeconds": 30,
      "points": 50,
      "testament": "Old Testament",
      "hint1": "A city north of Shechem where Elisha was later surrounded by Syrian chariots.",
      "hint2": "Genesis 37:17: \"And Joseph went after his brethren, and found them in Dothan.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l11-c2",
    "game_slug": "bible-chain-challenge",
    "level": 11,
    "challenge_index": 2,
    "question_text": "Follow the merchants chain: The brothers sat down to eat bread and lifted up their eyes. Which brother proposed selling Joseph to passing Ishmeelites/Midianites rather than shedding his blood?",
    "options": [
      "Judah",
      "Reuben",
      "Simeon",
      "Levi"
    ],
    "correct_answer": "Judah",
    "explanation": "Reuben intended to rid Joseph out of their hands to deliver him to his father, but Judah proposed: \"What profit is it if we slay our brother?... come, and let us sell him to the Ishmeelites\" (Genesis 37:21-27).",
    "reference": "Genesis 37:26-27",
    "metadata": {
      "stage": 3,
      "stage_title": "People and Events",
      "level_title": "Joseph’s Journey of Providence",
      "chain_type": "character_chain",
      "chain_nodes": [
        "Empty pit in Dothan",
        "Passing merchant caravan",
        "Proposal to sell for 20 silver pieces",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Easy",
      "timerSeconds": 30,
      "points": 50,
      "testament": "Old Testament",
      "hint1": "The brother whose tribe was later destined for royal scepter.",
      "hint2": "Genesis 37:26: \"And Judah said unto his brethren, What profit is it if we slay our brother, and conceal his blood?\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l11-c3",
    "game_slug": "bible-chain-challenge",
    "level": 11,
    "challenge_index": 3,
    "question_text": "Type the name of Pharaoh’s captain of the guard in Egypt, who purchased seventeen-year-old Joseph from the Ishmeelites:",
    "options": [
      "Potiphar",
      "Potipherah",
      "Asenath",
      "Zaphenath-paneah"
    ],
    "correct_answer": "Potiphar",
    "explanation": "Joseph in Egypt → Bought by Potiphar, an officer of Pharaoh, captain of the guard → Joseph made overseer over all Potiphar’s house and field (Genesis 37:36; 39:1-5).",
    "reference": "Genesis 37:36; 39:1",
    "metadata": {
      "stage": 3,
      "stage_title": "People and Events",
      "level_title": "Joseph’s Journey of Providence",
      "chain_type": "name_to_event",
      "chain_nodes": [
        "Sold for 20 silver pieces",
        "Arrives in Egypt",
        "Captain of the guard",
        "?"
      ],
      "is_typed": true,
      "acceptedAlternatives": [
        "Putiphar"
      ],
      "difficulty": "Easy",
      "timerSeconds": 30,
      "points": 50,
      "testament": "Old Testament",
      "hint1": "His wife falsely accused Joseph after Joseph fled leaving his garment.",
      "hint2": "Genesis 39:1: \"And Potiphar, an officer of Pharaoh, captain of the guard, an Egyptian, bought him.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l11-c4",
    "game_slug": "bible-chain-challenge",
    "level": 11,
    "challenge_index": 4,
    "question_text": "Follow the prison dreams chain: In Pharaoh’s prison, Joseph interpreted dreams for two royal officers. Which officer was restored to his office and squeezed grapes into Pharaoh’s cup?",
    "options": [
      "The Chief Butler (Cupbearer)",
      "The Chief Baker",
      "The Captain of the Guard",
      "The Taskmaster"
    ],
    "correct_answer": "The Chief Butler (Cupbearer)",
    "explanation": "In prison, Joseph interpreted the vine with three branches for the Chief Butler (restored in three days) and three white baskets for the Chief Baker (hanged in three days) (Genesis 40:1-22).",
    "reference": "Genesis 40:9-13, 21",
    "metadata": {
      "stage": 3,
      "stage_title": "People and Events",
      "level_title": "Joseph’s Journey of Providence",
      "chain_type": "name_to_event",
      "chain_nodes": [
        "Prison dungeon",
        "Vine with three branches",
        "Restored in three days",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Easy",
      "timerSeconds": 30,
      "points": 50,
      "testament": "Old Testament",
      "hint1": "He forgot Joseph for two full years until Pharaoh dreamed.",
      "hint2": "Genesis 40:21: \"And he restored the chief butler unto his butlership again; and he gave the cup into Pharaoh’s hand.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l11-c5",
    "game_slug": "bible-chain-challenge",
    "level": 11,
    "challenge_index": 5,
    "question_text": "Follow the promotion chain: Joseph interpreted Pharaoh’s dreams of seven fat and lean kine. Pharaoh put his signet ring on Joseph and gave him an Egyptian name. What name did Pharaoh bestow upon Joseph?",
    "options": [
      "Zaphnath-paaneah",
      "Potipherah",
      "Poti-phera",
      "Rameses"
    ],
    "correct_answer": "Zaphnath-paaneah",
    "explanation": "Joseph interprets dreams → Promoted to second ruler of Egypt → Pharaoh gave him his ring, fine linen, gold chain, and called his name Zaphnath-paaneah (meaning \"revealer of secrets\" or \"savior of the age\") (Genesis 41:39-45).",
    "reference": "Genesis 41:41-45",
    "metadata": {
      "stage": 3,
      "stage_title": "People and Events",
      "level_title": "Joseph’s Journey of Providence",
      "chain_type": "character_chain",
      "chain_nodes": [
        "Pharaoh’s dreams",
        "Second chariot of Egypt",
        "Signet ring",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Moderate",
      "timerSeconds": 45,
      "points": 100,
      "testament": "Old Testament",
      "hint1": "Hyphenated Egyptian name beginning with Z.",
      "hint2": "Genesis 41:45: \"And Pharaoh called Joseph’s name Zaphnath-paaneah.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l12-c1",
    "game_slug": "bible-chain-challenge",
    "level": 12,
    "challenge_index": 1,
    "question_text": "Follow the wilderness call chain: Moses kept the flock of his father-in-law Jethro in the desert. At which holy mountain did the angel of the LORD appear unto him in a flame of fire out of the midst of a bush?",
    "options": [
      "Horeb (Mount Sinai)",
      "Mount Nebo",
      "Mount Hor",
      "Mount Carmel"
    ],
    "correct_answer": "Horeb (Mount Sinai)",
    "explanation": "Moses led the flock to the backside of the desert and came to the mountain of God, even to Horeb, where the bush burned with fire and was not consumed (Exodus 3:1-4).",
    "reference": "Exodus 3:1-4; Acts 7:30",
    "metadata": {
      "stage": 3,
      "stage_title": "People and Events",
      "level_title": "Moses & The Exodus Cataclysms",
      "chain_type": "name_to_event",
      "chain_nodes": [
        "Jethro’s flock",
        "Backside of the desert",
        "Burning bush",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Easy",
      "timerSeconds": 30,
      "points": 50,
      "testament": "Old Testament",
      "hint1": "Also called the mountain of God where the Law was later given.",
      "hint2": "Exodus 3:1: \"and came to the mountain of God, even to Horeb.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l12-c2",
    "game_slug": "bible-chain-challenge",
    "level": 12,
    "challenge_index": 2,
    "question_text": "Follow the sign of the rod: When Moses hesitated, God commanded him to cast his rod upon the ground, and it became a serpent. What was the second physical miraculous sign given to Moses concerning his hand?",
    "options": [
      "Leprous hand turned white as snow",
      "Hand withered",
      "Water poured out of palm",
      "Hand shining like lightning"
    ],
    "correct_answer": "Leprous hand turned white as snow",
    "explanation": "God gave Moses three initial signs: 1) Rod into serpent, 2) Hand put into bosom became leprous as snow, then restored when put in again, 3) Water of Nile poured on dry land turning to blood (Exodus 4:1-9).",
    "reference": "Exodus 4:6-8",
    "metadata": {
      "stage": 3,
      "stage_title": "People and Events",
      "level_title": "Moses & The Exodus Cataclysms",
      "chain_type": "name_to_event",
      "chain_nodes": [
        "Burning Bush",
        "Rod becomes serpent",
        "Hand in bosom",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Easy",
      "timerSeconds": 30,
      "points": 50,
      "testament": "Old Testament",
      "hint1": "It turned white as snow upon removal from his cloak.",
      "hint2": "Exodus 4:6: \"and when he took it out, behold, his hand was leprous as snow.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l12-c3",
    "game_slug": "bible-chain-challenge",
    "level": 12,
    "challenge_index": 3,
    "question_text": "Type the name of the Egyptian region where the children of Israel dwelt, which was miraculously exempted and separated from the swarms of flies, hail, and darkness:",
    "options": [
      "Goshen",
      "Rameses",
      "Zoan",
      "Pithom"
    ],
    "correct_answer": "Goshen",
    "explanation": "Plagues upon Egypt → The land of Goshen was explicitly severed: no flies, no cattle died of murrain, no hail destroyed herbs, and children of Israel had light in their dwellings (Exodus 8:22; 9:26; 10:23).",
    "reference": "Exodus 8:22; 9:26; 10:23",
    "metadata": {
      "stage": 3,
      "stage_title": "People and Events",
      "level_title": "Moses & The Exodus Cataclysms",
      "chain_type": "name_to_event",
      "chain_nodes": [
        "Ten Plagues",
        "Severed from judgment",
        "Light in their dwellings",
        "?"
      ],
      "is_typed": true,
      "acceptedAlternatives": [
        "Gosen"
      ],
      "difficulty": "Easy",
      "timerSeconds": 30,
      "points": 50,
      "testament": "Old Testament",
      "hint1": "Six-letter pastoral land where Jacob’s family originally settled.",
      "hint2": "Exodus 8:22: \"And I will sever in that day the land of Goshen, in which my people dwell.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l12-c4",
    "game_slug": "bible-chain-challenge",
    "level": 12,
    "challenge_index": 4,
    "question_text": "Follow the Red Sea pursuit chain: Pharaoh pursued Israel with six hundred chosen chariots. Before the waters parted, what miraculous token moved from before the camp of Israel to stand behind them between Egypt and Israel?",
    "options": [
      "The pillar of the cloud",
      "The Ark of the Covenant",
      "The rod of Moses",
      "The camp of the Levites"
    ],
    "correct_answer": "The pillar of the cloud",
    "explanation": "The angel of God and the pillar of the cloud removed from before the camp of Israel and stood behind them, giving darkness to Egypt but light by night to Israel so one came not near the other all night (Exodus 14:19-20).",
    "reference": "Exodus 14:19-20",
    "metadata": {
      "stage": 3,
      "stage_title": "People and Events",
      "level_title": "Moses & The Exodus Cataclysms",
      "chain_type": "name_to_event",
      "chain_nodes": [
        "600 Egyptian chariots pursue",
        "Pi-hahiroth encampment",
        "Barrier between camps",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Moderate",
      "timerSeconds": 45,
      "points": 100,
      "testament": "Old Testament",
      "hint1": "It appeared as cloud by day and fire by night.",
      "hint2": "Exodus 14:19: \"and the pillar of the cloud went from before their face, and stood behind them.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l12-c5",
    "game_slug": "bible-chain-challenge",
    "level": 12,
    "challenge_index": 5,
    "question_text": "Follow the miraculous provision chain: When Israel came to Rephidim, there was no water for the people to drink, and they chided with Moses. Where did God instruct Moses to strike with his rod to bring forth water?",
    "options": [
      "The rock in Horeb",
      "The well of Marah",
      "The springs of Elim",
      "The river Jordan"
    ],
    "correct_answer": "The rock in Horeb",
    "explanation": "Exodus from Egypt → Red Sea crossed → Bitter waters of Marah sweetened by tree → At Rephidim, God commanded Moses to strike the rock in Horeb, and water gushed out for all Israel (Exodus 17:1-6; 1 Corinthians 10:4).",
    "reference": "Exodus 17:5-6; Psalm 78:15-16; 1 Corinthians 10:4",
    "metadata": {
      "stage": 3,
      "stage_title": "People and Events",
      "level_title": "Moses & The Exodus Cataclysms",
      "chain_type": "name_to_event",
      "chain_nodes": [
        "Rephidim thirst",
        "Chiding at Massah and Meribah",
        "Rod of God strikes",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Moderate",
      "timerSeconds": 45,
      "points": 100,
      "testament": "Old Testament",
      "hint1": "Paul explains in 1 Corinthians 10:4 that \"that Rock was Christ.\"",
      "hint2": "Exodus 17:6: \"Behold, I will stand before thee there upon the rock in Horeb; and thou shalt smite the rock, and there shall come water out of it.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l13-c1",
    "game_slug": "bible-chain-challenge",
    "level": 13,
    "challenge_index": 1,
    "question_text": "Follow Samson’s nativity chain: The Angel of the LORD appeared to the barren wife of a Danite man of Zorah, commanding that the child be a Nazarite from the womb. What was the name of Samson’s father?",
    "options": [
      "Manoah",
      "Elkanah",
      "Kish",
      "Gideon"
    ],
    "correct_answer": "Manoah",
    "explanation": "Angel of the LORD appears to Manoah’s wife → Manoah prays for the angel to return → Angel ascends in the flame of the altar → Samson born at Zorah (Judges 13:2-24).",
    "reference": "Judges 13:2, 8, 24",
    "metadata": {
      "stage": 3,
      "stage_title": "People and Events",
      "level_title": "Samson & The Philistine Exploits",
      "chain_type": "character_chain",
      "chain_nodes": [
        "Barren Danite woman",
        "Angel in altar flame",
        "Nazarite from the womb",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Easy",
      "timerSeconds": 30,
      "points": 50,
      "testament": "Old Testament",
      "hint1": "He said to his wife: \"We shall surely die, because we have seen God.\"",
      "hint2": "Judges 13:2: \"And there was a certain man of Zorah, of the family of the Danites, whose name was Manoah.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l13-c2",
    "game_slug": "bible-chain-challenge",
    "level": 13,
    "challenge_index": 2,
    "question_text": "Follow the Timnath riddle chain: Samson rent a young lion at Timnath. Later he found honey in the carcass. What was the famous riddle he posed to the thirty Philistine companions?",
    "options": [
      "Out of the eater came forth meat, and out of the strong came forth sweetness",
      "What is sweeter than honey? and what is stronger than a lion?",
      "If ye had not plowed with my heifer, ye had not found out my riddle",
      "A lion in the way, an adder in the path"
    ],
    "correct_answer": "Out of the eater came forth meat, and out of the strong came forth sweetness",
    "explanation": "Lion in vineyards of Timnath → Carcase with swarm of bees and honey → Samson’s riddle to 30 companions: \"Out of the eater came forth meat, and out of the strong came forth sweetness\" (Judges 14:5-14).",
    "reference": "Judges 14:14",
    "metadata": {
      "stage": 3,
      "stage_title": "People and Events",
      "level_title": "Samson & The Philistine Exploits",
      "chain_type": "name_to_event",
      "chain_nodes": [
        "Lion of Timnath rent",
        "Honey in carcass",
        "Riddle for 30 sheets and changes of garments",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Easy",
      "timerSeconds": 30,
      "points": 50,
      "testament": "Old Testament",
      "hint1": "The riddle contrasts the eater/strong lion with meat/sweet honey.",
      "hint2": "Judges 14:14: \"And he said unto them, Out of the eater came forth meat, and out of the strong came forth sweetness.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l13-c3",
    "game_slug": "bible-chain-challenge",
    "level": 13,
    "challenge_index": 3,
    "question_text": "Type the name of the valley where Samson loved a woman named Delilah, who was bribed by the lords of the Philistines with 1,100 pieces of silver each:",
    "options": [
      "Sorek",
      "Elah",
      "Eshcol",
      "Achor"
    ],
    "correct_answer": "Sorek",
    "explanation": "Samson in Gaza escapes with city gates → Loves Delilah in the valley of Sorek → Philistine lords bribe Delilah → Delilah presses him daily until he reveals his seven locks have never been shorn (Judges 16:4-17).",
    "reference": "Judges 16:4-5",
    "metadata": {
      "stage": 3,
      "stage_title": "People and Events",
      "level_title": "Samson & The Philistine Exploits",
      "chain_type": "name_to_event",
      "chain_nodes": [
        "Carrying gates of Gaza",
        "Love for Delilah",
        "1100 silver pieces bribe",
        "?"
      ],
      "is_typed": true,
      "acceptedAlternatives": [
        "Valley of Sorek"
      ],
      "difficulty": "Moderate",
      "timerSeconds": 45,
      "points": 100,
      "testament": "Old Testament",
      "hint1": "Five-letter name beginning with S.",
      "hint2": "Judges 16:4: \"And it came to pass afterward, that he loved a woman in the valley of Sorek, whose name was Delilah.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l13-c4",
    "game_slug": "bible-chain-challenge",
    "level": 13,
    "challenge_index": 4,
    "question_text": "Follow the tragic betrayal chain: Delilah had Samson’s seven locks shorn while he slept. The Philistines seized him and gouged out his eyes. To which city did they bring him bound in fetters of brass to grind in the prison house?",
    "options": [
      "Gaza",
      "Ashdod",
      "Ashkelon",
      "Gath"
    ],
    "correct_answer": "Gaza",
    "explanation": "Seven locks shorn → Strength departs → Eyes put out → Brought down to Gaza, bound with fetters of brass, and made to grind in the prison house (Judges 16:19-21).",
    "reference": "Judges 16:21",
    "metadata": {
      "stage": 3,
      "stage_title": "People and Events",
      "level_title": "Samson & The Philistine Exploits",
      "chain_type": "name_to_event",
      "chain_nodes": [
        "Delilah’s lap",
        "Seven locks shorn",
        "Eyes gouged out",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Easy",
      "timerSeconds": 30,
      "points": 50,
      "testament": "Old Testament",
      "hint1": "The same city whose gateposts and bar he had previously carried up the hill.",
      "hint2": "Judges 16:21: \"But the Philistines took him, and put out his eyes, and brought him down to Gaza.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l13-c5",
    "game_slug": "bible-chain-challenge",
    "level": 13,
    "challenge_index": 5,
    "question_text": "Follow the final triumph chain: The Philistines gathered in Gaza to offer sacrifice unto their fish-god for delivering Samson. What was the name of this Philistine god whose temple Samson collapsed?",
    "options": [
      "Dagon",
      "Baal-zebub",
      "Ashtoreth",
      "Chemosh"
    ],
    "correct_answer": "Dagon",
    "explanation": "Samson in Gaza prison → Temple of Dagon filled with 3,000 men and women → Samson positioned between the two middle pillars → \"Let me die with the Philistines!\" → Slays more at his death than in his life (Judges 16:23-30).",
    "reference": "Judges 16:23, 29-30",
    "metadata": {
      "stage": 3,
      "stage_title": "People and Events",
      "level_title": "Samson & The Philistine Exploits",
      "chain_type": "character_chain",
      "chain_nodes": [
        "Gaza prison house",
        "Two middle pillars",
        "Temple collapses",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Easy",
      "timerSeconds": 30,
      "points": 50,
      "testament": "Old Testament",
      "hint1": "The same god whose statue later toppled face-down before the Ark in Ashdod.",
      "hint2": "Judges 16:23: \"Then the lords of the Philistines gathered them together for to offer a great sacrifice unto Dagon their god.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l14-c1",
    "game_slug": "bible-chain-challenge",
    "level": 14,
    "challenge_index": 1,
    "question_text": "Follow Elijah’s drought refuge chain: Elijah announced to Ahab that there would be neither dew nor rain. God commanded Elijah to hide by a brook east of Jordan where ravens fed him bread and flesh. What was the name of this brook?",
    "options": [
      "Cherith",
      "Kishon",
      "Kidron",
      "Jabbok"
    ],
    "correct_answer": "Cherith",
    "explanation": "Drought announced to Ahab → Elijah sent to the brook Cherith before Jordan → Ravens brought him bread and flesh in the morning and evening, and he drank of the brook (1 Kings 17:1-6).",
    "reference": "1 Kings 17:2-6",
    "metadata": {
      "stage": 3,
      "stage_title": "People and Events",
      "level_title": "Elijah & Mount Carmel",
      "chain_type": "name_to_event",
      "chain_nodes": [
        "Drought declaration",
        "Fed by ravens morning and evening",
        "Brook dried up",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Easy",
      "timerSeconds": 30,
      "points": 50,
      "testament": "Old Testament",
      "hint1": "A brook east of Jordan, beginning with Ch.",
      "hint2": "1 Kings 17:3: \"Get thee hence, and turn thee eastward, and hide thyself by the brook Cherith, that is before Jordan.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l14-c2",
    "game_slug": "bible-chain-challenge",
    "level": 14,
    "challenge_index": 2,
    "question_text": "Follow the widow’s sustenance chain: When the brook dried up, God commanded Elijah to go to a Phoenician coastal town belonging to Zidon, where a widow woman would sustain him. What was the name of this town?",
    "options": [
      "Zarephath (Sarepta)",
      "Shunem",
      "Joppa",
      "Tyre"
    ],
    "correct_answer": "Zarephath (Sarepta)",
    "explanation": "Brook Cherith dries up → Sent to Zarephath → Widow gathering two sticks to bake last cake for herself and son → Barrel of meal wasted not, neither did cruse of oil fail → Elijah raises her son from death (1 Kings 17:8-24; Luke 4:26).",
    "reference": "1 Kings 17:8-16; Luke 4:26",
    "metadata": {
      "stage": 3,
      "stage_title": "People and Events",
      "level_title": "Elijah & Mount Carmel",
      "chain_type": "name_to_event",
      "chain_nodes": [
        "Brook Cherith dries up",
        "Widow gathering sticks",
        "Cruse of oil never fails",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Easy",
      "timerSeconds": 30,
      "points": 50,
      "testament": "Old Testament",
      "hint1": "Jesus mentions her as a widow of Sarepta in the days of Elias (Luke 4:26).",
      "hint2": "1 Kings 17:9: \"Arise, get thee to Zarephath, which belongeth to Zidon, and dwell there.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l14-c3",
    "game_slug": "bible-chain-challenge",
    "level": 14,
    "challenge_index": 3,
    "question_text": "Type the name of Ahab’s palace governor, who feared the LORD greatly and hid one hundred prophets of the LORD in caves by fifties, feeding them with bread and water:",
    "options": [
      "Obadiah",
      "Eliakim",
      "Naboth",
      "Micaiah"
    ],
    "correct_answer": "Obadiah",
    "explanation": "Ahab’s court → Obadiah governor of his house → Jezebel cut off the prophets of the LORD → Obadiah hid 100 prophets by fifties in caves → Elijah meets Obadiah on the road to summon Ahab (1 Kings 18:3-16).",
    "reference": "1 Kings 18:3-4, 7-16",
    "metadata": {
      "stage": 3,
      "stage_title": "People and Events",
      "level_title": "Elijah & Mount Carmel",
      "chain_type": "character_chain",
      "chain_nodes": [
        "Jezebel kills prophets",
        "100 prophets hidden by fifties",
        "Governor of Ahab’s palace",
        "?"
      ],
      "is_typed": true,
      "acceptedAlternatives": [
        "Abdias"
      ],
      "difficulty": "Moderate",
      "timerSeconds": 45,
      "points": 100,
      "testament": "Old Testament",
      "hint1": "Same name as the Minor Prophet whose book denounces Edom.",
      "hint2": "1 Kings 18:3: \"Now Obadiah feared the LORD greatly.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l14-c4",
    "game_slug": "bible-chain-challenge",
    "level": 14,
    "challenge_index": 4,
    "question_text": "Follow the Mount Carmel contest chain: On Mount Carmel, Elijah confronted 450 prophets of Baal and 400 prophets of the groves. After fire consumed the altar, to which brook did Elijah bring the prophets of Baal to execute them?",
    "options": [
      "Kishon",
      "Kidron",
      "Cherith",
      "Arnon"
    ],
    "correct_answer": "Kishon",
    "explanation": "Contest on Mount Carmel → Fire falls at evening sacrifice → \"The LORD, he is the God!\" → Elijah commands: \"Take the prophets of Baal; let not one of them escape\" → Slain at the brook Kishon (1 Kings 18:38-40).",
    "reference": "1 Kings 18:40",
    "metadata": {
      "stage": 3,
      "stage_title": "People and Events",
      "level_title": "Elijah & Mount Carmel",
      "chain_type": "name_to_event",
      "chain_nodes": [
        "Mount Carmel fire",
        "12 stones repaired",
        "Execution of 450 false prophets",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Easy",
      "timerSeconds": 30,
      "points": 50,
      "testament": "Old Testament",
      "hint1": "The ancient river Kishon swept away Sisera’s army in Judges 5.",
      "hint2": "1 Kings 18:40: \"and Elijah brought them down to the brook Kishon, and slew them there.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l14-c5",
    "game_slug": "bible-chain-challenge",
    "level": 14,
    "challenge_index": 5,
    "question_text": "Follow the rain answered chain: Elijah cast himself down upon the earth atop Carmel and prayed with his face between his knees. How many times did he send his servant to look toward the sea before a cloud the size of a man’s hand appeared?",
    "options": [
      "Seven times",
      "Three times",
      "Ten times",
      "Twelve times"
    ],
    "correct_answer": "Seven times",
    "explanation": "Elijah on Mount Carmel → Prays with head between knees → Sends servant to look toward the Mediterranean Sea seven times → At the seventh time: \"Behold, there ariseth a little cloud out of the sea, like a man’s hand\" → Heavy rain follows (1 Kings 18:42-45; James 5:17-18).",
    "reference": "1 Kings 18:43-44; James 5:18",
    "metadata": {
      "stage": 3,
      "stage_title": "People and Events",
      "level_title": "Elijah & Mount Carmel",
      "chain_type": "name_to_event",
      "chain_nodes": [
        "Carmel summit prayer",
        "Look toward the sea",
        "Cloud like a man’s hand",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Easy",
      "timerSeconds": 30,
      "points": 50,
      "testament": "Old Testament",
      "hint1": "The biblical number of completion and perfection.",
      "hint2": "1 Kings 18:43: \"And he said, Go again seven times.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l15-c1",
    "game_slug": "bible-chain-challenge",
    "level": 15,
    "challenge_index": 1,
    "question_text": "Follow Peter’s confession chain: Jesus came into the coasts of Caesarea Philippi and asked His disciples who they said He was. What was Simon Peter’s foundational confession?",
    "options": [
      "Thou art the Christ, the Son of the living God",
      "Thou art John the Baptist risen from the dead",
      "Thou art Elias or one of the old prophets",
      "Thou art the King of Israel that cometh in the name of the Lord"
    ],
    "correct_answer": "Thou art the Christ, the Son of the living God",
    "explanation": "Coasts of Caesarea Philippi → Jesus asks: \"Whom say ye that I am?\" → Simon Peter answers: \"Thou art the Christ, the Son of the living God\" → \"Flesh and blood hath not revealed it unto thee, but my Father which is in heaven\" (Matthew 16:13-17).",
    "reference": "Matthew 16:13-17",
    "metadata": {
      "stage": 3,
      "stage_title": "People and Events",
      "level_title": "Peter’s Apostolic Milestones",
      "chain_type": "name_to_event",
      "chain_nodes": [
        "Caesarea Philippi",
        "Whom say ye that I am?",
        "Revelation from the Father",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Easy",
      "timerSeconds": 30,
      "points": 50,
      "testament": "New Testament",
      "hint1": "The rock confession upon which Christ declared He would build His church.",
      "hint2": "Matthew 16:16: \"And Simon Peter answered and said, Thou art the Christ, the Son of the living God.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l15-c2",
    "game_slug": "bible-chain-challenge",
    "level": 15,
    "challenge_index": 2,
    "question_text": "Follow the Transfiguration chain: Six days later, Jesus took Peter, James, and John up into a high mountain apart. Which two Old Testament figures appeared talking with Jesus in dazzling glory?",
    "options": [
      "Moses and Elias (Elijah)",
      "Abraham and David",
      "Enoch and Noah",
      "Samuel and Isaiah"
    ],
    "correct_answer": "Moses and Elias (Elijah)",
    "explanation": "Holy Mount → Jesus transfigured; face shone as the sun → Moses (representing the Law) and Elias (representing the Prophets) appear talking with Him → Peter proposes three tabernacles → Father speaks from bright cloud: \"This is my beloved Son, in whom I am well pleased; hear ye him\" (Matthew 17:1-5).",
    "reference": "Matthew 17:1-5; Luke 9:28-36",
    "metadata": {
      "stage": 3,
      "stage_title": "People and Events",
      "level_title": "Peter’s Apostolic Milestones",
      "chain_type": "name_to_event",
      "chain_nodes": [
        "Inner circle taken up",
        "Face shines as sun",
        "Three tabernacles proposed",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Easy",
      "timerSeconds": 30,
      "points": 50,
      "testament": "New Testament",
      "hint1": "The great lawgiver of Sinai and the great prophet of Carmel.",
      "hint2": "Matthew 17:3: \"And, behold, there appeared unto them Moses and Elias talking with him.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l15-c3",
    "game_slug": "bible-chain-challenge",
    "level": 15,
    "challenge_index": 3,
    "question_text": "Type the name of the High Priest’s servant whose right ear Peter cut off with a sword in the Garden of Gethsemane, whom Jesus immediately touched and healed:",
    "options": [
      "Malchus",
      "Barabbas",
      "Alexander",
      "Caiaphas"
    ],
    "correct_answer": "Malchus",
    "explanation": "Gethsemane betrayal → Simon Peter draws sword and cuts off servant’s right ear → Name identified in John 18:10 as Malchus → Jesus says \"Put up thy sword\" and touches his ear, healing him (John 18:10-11; Luke 22:50-51).",
    "reference": "John 18:10; Luke 22:50-51",
    "metadata": {
      "stage": 3,
      "stage_title": "People and Events",
      "level_title": "Peter’s Apostolic Milestones",
      "chain_type": "character_chain",
      "chain_nodes": [
        "Gethsemane band of soldiers",
        "Peter draws sword",
        "Severed right ear healed",
        "?"
      ],
      "is_typed": true,
      "acceptedAlternatives": [
        "Malchos"
      ],
      "difficulty": "Moderate",
      "timerSeconds": 45,
      "points": 100,
      "testament": "New Testament",
      "hint1": "Seven-letter Greek/Semitic name beginning with M.",
      "hint2": "John 18:10: \"The servant’s name was Malchus.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l15-c4",
    "game_slug": "bible-chain-challenge",
    "level": 15,
    "challenge_index": 4,
    "question_text": "Follow the Gentile door opening chain: At Joppa, on the housetop of Simon the tanner, Peter saw a vision of a great sheet let down from heaven with all manner of fourfooted beasts. To which Roman centurion in Caesarea was Peter immediately sent?",
    "options": [
      "Cornelius",
      "Julius",
      "Claudius Lysias",
      "Centurion at the cross"
    ],
    "correct_answer": "Cornelius",
    "explanation": "Peter on housetop in Joppa → Vision of clean and unclean sheet 3 times → Sent to Caesarea → Preaches to Cornelius of the Italian band and his household → Holy Ghost falls on all who heard the word (Acts 10:1-48).",
    "reference": "Acts 10:1-5, 24-48",
    "metadata": {
      "stage": 3,
      "stage_title": "People and Events",
      "level_title": "Peter’s Apostolic Milestones",
      "chain_type": "character_chain",
      "chain_nodes": [
        "Joppa housetop vision",
        "Great sheet three times",
        "Centurion of Italian band",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Easy",
      "timerSeconds": 30,
      "points": 50,
      "testament": "New Testament",
      "hint1": "A devout man that feared God with all his house, gave much alms, and prayed alway.",
      "hint2": "Acts 10:1: \"There was a certain man in Caesarea called Cornelius, a centurion of the band called the Italian band.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l15-c5",
    "game_slug": "bible-chain-challenge",
    "level": 15,
    "challenge_index": 5,
    "question_text": "Follow the prison deliverance chain: King Herod Agrippa I imprisoned Peter between two soldiers with chains. An angel smote Peter, chains fell off, and the iron gate opened of its own accord. To whose house did Peter go, where many were gathered praying?",
    "options": [
      "Mary the mother of John Mark",
      "Lydia the seller of purple",
      "Simon the tanner",
      "The house of Martha and Mary"
    ],
    "correct_answer": "Mary the mother of John Mark",
    "explanation": "Herod imprisons Peter → Church makes prayer without ceasing → Angel delivers Peter from prison → Iron gate opens → Peter arrives at the house of Mary the mother of John whose surname was Mark → Damsel Rhoda comes to hearken (Acts 12:1-17).",
    "reference": "Acts 12:5-17",
    "metadata": {
      "stage": 3,
      "stage_title": "People and Events",
      "level_title": "Peter’s Apostolic Milestones",
      "chain_type": "name_to_event",
      "chain_nodes": [
        "Herod’s prison",
        "Angel strikes side",
        "Iron city gate opens",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Moderate",
      "timerSeconds": 45,
      "points": 100,
      "testament": "New Testament",
      "hint1": "The mother of the young disciple Mark who wrote the Gospel.",
      "hint2": "Acts 12:12: \"he came to the house of Mary the mother of John, whose surname was Mark; where many were gathered together praying.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l16-c1",
    "game_slug": "bible-chain-challenge",
    "level": 16,
    "challenge_index": 1,
    "question_text": "Follow Abram’s entry into Canaan: Departing Haran at age 75, Abram crossed into Canaan. At which first location, near the oak (plain) of Moreh, did the LORD appear to him and Abram built his first altar?",
    "options": [
      "Shechem",
      "Bethel",
      "Hebron",
      "Beersheba"
    ],
    "correct_answer": "Shechem",
    "explanation": "Abram leaves Haran → Passed through the land unto the place of Sichem (Shechem), unto the plain of Moreh → The Canaanite was then in the land → LORD promises: \"Unto thy seed will I give this land\" → Abram builds altar (Genesis 12:4-7).",
    "reference": "Genesis 12:6-7",
    "metadata": {
      "stage": 4,
      "stage_title": "Places and Journeys",
      "level_title": "Abraham’s Pilgrim Itinerary",
      "chain_type": "name_to_event",
      "chain_nodes": [
        "Leaves Haran",
        "Crosses into Canaan",
        "Plain of Moreh altar",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Easy",
      "timerSeconds": 30,
      "points": 50,
      "testament": "Old Testament",
      "hint1": "Located between Mount Ebal and Mount Gerizim.",
      "hint2": "Genesis 12:6: \"And Abram passed through the land unto the place of Sichem, unto the plain of Moreh.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l16-c2",
    "game_slug": "bible-chain-challenge",
    "level": 16,
    "challenge_index": 2,
    "question_text": "Follow Abram’s tent and altar path: From Shechem, Abram removed unto a mountain and pitched his tent with a famous city on the west and another city on the east. Between which two cities did Abram build this altar?",
    "options": [
      "Bethel and Hai (Ai)",
      "Jerusalem and Bethlehem",
      "Hebron and Beersheba",
      "Shiloh and Gibeah"
    ],
    "correct_answer": "Bethel and Hai (Ai)",
    "explanation": "From Shechem, Abram moved unto a mountain east of Bethel and pitched his tent, having Bethel on the west and Hai on the east, and there he builded an altar and called upon the name of the LORD (Genesis 12:8; 13:3-4).",
    "reference": "Genesis 12:8; 13:3-4",
    "metadata": {
      "stage": 4,
      "stage_title": "Places and Journeys",
      "level_title": "Abraham’s Pilgrim Itinerary",
      "chain_type": "name_to_event",
      "chain_nodes": [
        "Shechem",
        "Pitched tent on mountain",
        "West city and East city",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Moderate",
      "timerSeconds": 45,
      "points": 100,
      "testament": "Old Testament",
      "hint1": "One city means \"House of God\"; the other was the city Joshua fought after Jericho.",
      "hint2": "Genesis 12:8: \"having Bethel on the west, and Hai on the east: and there he builded an altar.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l16-c3",
    "game_slug": "bible-chain-challenge",
    "level": 16,
    "challenge_index": 3,
    "question_text": "Type the name of the valley and plain where Abram moved his tent after separating from Lot, where he dwelt by the oaks of Mamre and built an altar to the LORD:",
    "options": [
      "Hebron",
      "Zoar",
      "Siddim",
      "Gerar"
    ],
    "correct_answer": "Hebron",
    "explanation": "Lot chooses plain of Jordan toward Sodom → God renews covenant to Abram to walk through the length and breadth → Abram removes tent to the plain of Mamre in Hebron and builds altar (Genesis 13:14-18).",
    "reference": "Genesis 13:18; 18:1",
    "metadata": {
      "stage": 4,
      "stage_title": "Places and Journeys",
      "level_title": "Abraham’s Pilgrim Itinerary",
      "chain_type": "name_to_event",
      "chain_nodes": [
        "Separation from Lot",
        "Plain of Mamre",
        "Altar of covenant walk",
        "?"
      ],
      "is_typed": true,
      "acceptedAlternatives": [
        "Chebron"
      ],
      "difficulty": "Moderate",
      "timerSeconds": 45,
      "points": 100,
      "testament": "Old Testament",
      "hint1": "Also known anciently as Kirjath-arba, where Sarah died and was buried.",
      "hint2": "Genesis 13:18: \"Then Abram removed his tent, and came and dwelt in the plain of Mamre, which is in Hebron, and built there an altar unto the LORD.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l16-c4",
    "game_slug": "bible-chain-challenge",
    "level": 16,
    "challenge_index": 4,
    "question_text": "Follow Abraham’s burial purchase chain: Sarah died at Kirjath-arba (Hebron) at age 127. Abraham weighed four hundred shekels of silver to purchase a field and cave from Ephron the Hittite. What was the name of this famous cave?",
    "options": [
      "Machpelah",
      "Adullam",
      "Makkedah",
      "En-gedi"
    ],
    "correct_answer": "Machpelah",
    "explanation": "Death of Sarah at Hebron → Abraham weeps → Purchases field of Ephron before the sons of Heth for 400 shekels of silver → Buries Sarah in the cave of the field of Machpelah, where Abraham, Isaac, Rebekah, Leah, and Jacob were later laid (Genesis 23:9, 16-19; 49:29-31).",
    "reference": "Genesis 23:9, 17-19; 50:13",
    "metadata": {
      "stage": 4,
      "stage_title": "Places and Journeys",
      "level_title": "Abraham’s Pilgrim Itinerary",
      "chain_type": "name_to_event",
      "chain_nodes": [
        "Sarah dies at 127",
        "Ephron the Hittite",
        "400 shekels of silver",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Easy",
      "timerSeconds": 30,
      "points": 50,
      "testament": "Old Testament",
      "hint1": "Means \"double\" or \"portion\", cave before Mamre.",
      "hint2": "Genesis 23:19: \"And after this, Abraham buried Sarah his wife in the cave of the field of Machpelah before Mamre.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l16-c5",
    "game_slug": "bible-chain-challenge",
    "level": 16,
    "challenge_index": 5,
    "question_text": "Follow Abraham’s supreme test chain: God commanded Abraham to take his only son Isaac to the land of Moriah and offer him for a burnt offering upon one of the mountains. When God stayed his hand, what did Abraham see caught in a thicket by his horns?",
    "options": [
      "A ram",
      "A he-goat",
      "A bullock",
      "A young lamb"
    ],
    "correct_answer": "A ram",
    "explanation": "Land of Moriah → Three-day journey → Isaac asks: \"Where is the lamb for a burnt offering?\" → Abraham replies: \"God will provide himself a lamb\" → Angel stops sacrifice → Abraham spots a ram caught in a thicket by his horns and calls the name Jehovah-jireh (Genesis 22:1-14).",
    "reference": "Genesis 22:2, 7-14",
    "metadata": {
      "stage": 4,
      "stage_title": "Places and Journeys",
      "level_title": "Abraham’s Pilgrim Itinerary",
      "chain_type": "name_to_event",
      "chain_nodes": [
        "Mount Moriah",
        "Isaac bound on wood",
        "Angel calls from heaven",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Easy",
      "timerSeconds": 30,
      "points": 50,
      "testament": "Old Testament",
      "hint1": "A male sheep caught by his horns in the brushwood.",
      "hint2": "Genesis 22:13: \"and behold behind him a ram caught in a thicket by his horns.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l17-c1",
    "game_slug": "bible-chain-challenge",
    "level": 17,
    "challenge_index": 1,
    "question_text": "Follow the Red Sea departure chain: Israel journeyed three days into the wilderness of Shur and found no water. When they came to a place of bitter water, they could not drink, and murmured. What was the name of this place meaning \"bitterness\"?",
    "options": [
      "Marah",
      "Elim",
      "Dophkah",
      "Alush"
    ],
    "correct_answer": "Marah",
    "explanation": "Red Sea crossing → Wilderness of Shur three days without water → Come to Marah where waters were bitter → Moses cries unto the LORD → God shows him a tree which sweetened the waters (Exodus 15:22-25).",
    "reference": "Exodus 15:23-25; Numbers 33:8",
    "metadata": {
      "stage": 4,
      "stage_title": "Places and Journeys",
      "level_title": "Wilderness Stations",
      "chain_type": "name_to_event",
      "chain_nodes": [
        "Wilderness of Shur",
        "Three days without water",
        "Tree cast into bitter spring",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Easy",
      "timerSeconds": 30,
      "points": 50,
      "testament": "Old Testament",
      "hint1": "Naomi later used this same word when returning from Moab.",
      "hint2": "Exodus 15:23: \"they could not drink of the waters of Marah, for they were bitter: therefore the name of it was called Marah.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l17-c2",
    "game_slug": "bible-chain-challenge",
    "level": 17,
    "challenge_index": 2,
    "question_text": "Follow the oasis chain: Leaving Marah, Israel arrived at an abundant oasis station where there were twelve wells of water and threescore and ten (70) palm trees. What was the name of this station?",
    "options": [
      "Elim",
      "Rephidim",
      "Kibroth-hattaavah",
      "Hazeroth"
    ],
    "correct_answer": "Elim",
    "explanation": "From bitter Marah, Israel came to Elim, where were twelve wells of water (one for each tribe) and seventy palm trees (matching the elders of Israel), and they encamped there by the waters (Exodus 15:27; Numbers 33:9).",
    "reference": "Exodus 15:27; Numbers 33:9",
    "metadata": {
      "stage": 4,
      "stage_title": "Places and Journeys",
      "level_title": "Wilderness Stations",
      "chain_type": "name_to_event",
      "chain_nodes": [
        "Marah sweetened",
        "12 wells of water",
        "70 palm trees",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Easy",
      "timerSeconds": 30,
      "points": 50,
      "testament": "Old Testament",
      "hint1": "Four-letter oasis name beginning with E.",
      "hint2": "Exodus 15:27: \"And they came to Elim, where were twelve wells of water, and threescore and ten palm trees.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l17-c3",
    "game_slug": "bible-chain-challenge",
    "level": 17,
    "challenge_index": 3,
    "question_text": "Type the name of the pivotal southern oasis/wilderness base, from which Moses sent the twelve spies to search out Canaan and where Israel rebelled against entering:",
    "options": [
      "Kadesh-barnea",
      "Ezion-geber",
      "Punon",
      "Arad"
    ],
    "correct_answer": "Kadesh-barnea",
    "explanation": "Wilderness trek from Sinai through Paran → Kadesh-barnea (also called En-mishpat or Kadesh) → Twelve spies sent → Ten bring evil report → Israel sentenced to 40 years wandering (Numbers 13:26; 32:8; Deuteronomy 1:19-26).",
    "reference": "Numbers 13:26; 32:8; Deuteronomy 1:19",
    "metadata": {
      "stage": 4,
      "stage_title": "Places and Journeys",
      "level_title": "Wilderness Stations",
      "chain_type": "name_to_event",
      "chain_nodes": [
        "Wilderness of Paran",
        "Twelve spies dispatched",
        "Ten bring evil report",
        "?"
      ],
      "is_typed": true,
      "acceptedAlternatives": [
        "Kadesh",
        "Cadesh-barnea"
      ],
      "difficulty": "Moderate",
      "timerSeconds": 45,
      "points": 100,
      "testament": "Old Testament",
      "hint1": "Compound name beginning with Kadesh, meaning \"holy\".",
      "hint2": "Deuteronomy 1:19: \"and we came to Kadesh-barnea.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l17-c4",
    "game_slug": "bible-chain-challenge",
    "level": 17,
    "challenge_index": 4,
    "question_text": "Follow the high priest’s burial chain: Near the border of Edom, the congregation journeyed from Kadesh and came unto a mountain where Moses stripped Aaron of his garments and put them upon Eleazar. What was this mountain?",
    "options": [
      "Mount Hor",
      "Mount Nebo",
      "Mount Pisgah",
      "Mount Seir"
    ],
    "correct_answer": "Mount Hor",
    "explanation": "From Kadesh to Mount Hor by the coast of the land of Edom → Moses, Aaron, and Eleazar ascend in sight of all the congregation → Aaron dies on the top of Mount Hor at age 123 (Numbers 20:22-28; 33:38-39).",
    "reference": "Numbers 20:22-28; 33:38",
    "metadata": {
      "stage": 4,
      "stage_title": "Places and Journeys",
      "level_title": "Wilderness Stations",
      "chain_type": "name_to_event",
      "chain_nodes": [
        "Border of Edom",
        "Aaron stripped of garments",
        "Death of the first high priest",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Easy",
      "timerSeconds": 30,
      "points": 50,
      "testament": "Old Testament",
      "hint1": "A mountain with a three-letter name: H-O-R.",
      "hint2": "Numbers 20:28: \"and Aaron died there in the top of the mount: and Moses and Eleazar came down from the mount.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l17-c5",
    "game_slug": "bible-chain-challenge",
    "level": 17,
    "challenge_index": 5,
    "question_text": "Follow the fiery serpents chain: Discouraged because of the way around Edom, the people spake against God and Moses. The LORD sent fiery serpents. God commanded Moses to make a serpent of brass and put it on a pole. What happened when anyone who was bitten looked upon it?",
    "options": [
      "He lived",
      "His wounds turned to gold",
      "He was blinded",
      "He slept three days"
    ],
    "correct_answer": "He lived",
    "explanation": "Compass Edom by Red Sea road → Fiery serpents bite people → Moses makes serpent of brass on a pole → \"and it came to pass, that if a serpent had bitten any man, when he beheld the serpent of brass, he lived\" (Numbers 21:4-9; John 3:14-15).",
    "reference": "Numbers 21:8-9; John 3:14",
    "metadata": {
      "stage": 4,
      "stage_title": "Places and Journeys",
      "level_title": "Wilderness Stations",
      "chain_type": "name_to_event",
      "chain_nodes": [
        "Way of the Red Sea",
        "Fiery serpents bite",
        "Serpent of brass lifted on pole",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Easy",
      "timerSeconds": 30,
      "points": 50,
      "testament": "Old Testament",
      "hint1": "Jesus compared this in John 3:14 to the Son of man being lifted up.",
      "hint2": "Numbers 21:9: \"when he beheld the serpent of brass, he lived.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l18-c1",
    "game_slug": "bible-chain-challenge",
    "level": 18,
    "challenge_index": 1,
    "question_text": "Follow Paul’s First Missionary Journey launch: The Holy Ghost said at Antioch, \"Separate me Barnabas and Saul for the work whereunto I have called them.\" From which Mediterranean port city did they sail to Cyprus?",
    "options": [
      "Seleucia",
      "Caesarea",
      "Tarsus",
      "Joppa"
    ],
    "correct_answer": "Seleucia",
    "explanation": "Antioch church fasts and lays hands → Paul and Barnabas depart unto Seleucia (the seaport 16 miles west of Syrian Antioch) and sail directly to Cyprus (Acts 13:1-4).",
    "reference": "Acts 13:4",
    "metadata": {
      "stage": 4,
      "stage_title": "Places and Journeys",
      "level_title": "Paul’s First Missionary Journey",
      "chain_type": "name_to_event",
      "chain_nodes": [
        "Antioch commissioning",
        "Seaport of Antioch",
        "Sail to Cyprus",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Moderate",
      "timerSeconds": 45,
      "points": 100,
      "testament": "New Testament",
      "hint1": "Port named after Seleucus Nicator, general of Alexander the Great.",
      "hint2": "Acts 13:4: \"So they, being sent forth by the Holy Ghost, departed unto Seleucia; and from thence they sailed to Cyprus.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l18-c2",
    "game_slug": "bible-chain-challenge",
    "level": 18,
    "challenge_index": 2,
    "question_text": "Follow the Cypriot confrontation chain: At Paphos, the western capital of Cyprus, the Roman proconsul Sergius Paulus desired to hear the word of God. Which Jewish sorcerer and false prophet withstood them and was struck blind for a season?",
    "options": [
      "Elymas (Bar-jesus)",
      "Simon Magus",
      "Alexander the coppersmith",
      "Demetrius"
    ],
    "correct_answer": "Elymas (Bar-jesus)",
    "explanation": "Paphos in Cyprus → Proconsul Sergius Paulus seeks to hear the gospel → Elymas the sorcerer (Bar-jesus) withstands them → Saul (who is also called Paul) strikes him with blindness → Proconsul believes (Acts 13:6-12).",
    "reference": "Acts 13:6-11",
    "metadata": {
      "stage": 4,
      "stage_title": "Places and Journeys",
      "level_title": "Paul’s First Missionary Journey",
      "chain_type": "character_chain",
      "chain_nodes": [
        "Paphos capital",
        "Proconsul Sergius Paulus",
        "Struck blind for a season",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Easy",
      "timerSeconds": 30,
      "points": 50,
      "testament": "New Testament",
      "hint1": "Called by Paul a child of the devil, enemy of all righteousness.",
      "hint2": "Acts 13:8: \"But Elymas the sorcerer (for so is his name by interpretation) withstood them.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l18-c3",
    "game_slug": "bible-chain-challenge",
    "level": 18,
    "challenge_index": 3,
    "question_text": "Type the name of the mainland Asian city in Pamphylia where Paul’s company sailed from Paphos, and where John Mark departed from them and returned to Jerusalem:",
    "options": [
      "Perga",
      "Attalia",
      "Derbe",
      "Miletus"
    ],
    "correct_answer": "Perga",
    "explanation": "Paphos → Perga in Pamphylia → John Mark separates from Paul and Barnabas → Paul and Barnabas press inland over the Taurus mountains to Antioch in Pisidia (Acts 13:13-14).",
    "reference": "Acts 13:13-14",
    "metadata": {
      "stage": 4,
      "stage_title": "Places and Journeys",
      "level_title": "Paul’s First Missionary Journey",
      "chain_type": "name_to_event",
      "chain_nodes": [
        "Sails from Paphos",
        "Pamphylian coastal city",
        "John Mark departs",
        "?"
      ],
      "is_typed": true,
      "acceptedAlternatives": [
        "Perge"
      ],
      "difficulty": "Moderate",
      "timerSeconds": 45,
      "points": 100,
      "testament": "New Testament",
      "hint1": "Five-letter city in Pamphylia beginning with P.",
      "hint2": "Acts 13:13: \"Now when Paul and his company loosed from Paphos, they came to Perga in Pamphylia: and John departing from them returned to Jerusalem.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l18-c4",
    "game_slug": "bible-chain-challenge",
    "level": 18,
    "challenge_index": 4,
    "question_text": "Follow the Lystra miracle and persecution chain: In Lystra of Lycaonia, Paul healed a man crippled from his mother’s womb. The pagan crowd called Barnabas Jupiter and Paul Mercurius. But when Jews from Antioch and Iconium arrived, what did they do to Paul?",
    "options": [
      "Stoned him and dragged him out of the city, supposing he was dead",
      "Beheaded him with a sword",
      "Imprisoned him in stocks",
      "Burned his books"
    ],
    "correct_answer": "Stoned him and dragged him out of the city, supposing he was dead",
    "explanation": "Lystra cripple healed → Crowd attempts sacrifices to Jupiter & Mercury → Hostile Jews arrive from Antioch and Iconium → Stone Paul, drag him out of city supposing him dead → Disciples stand around him; he rises and re-enters the city (Acts 14:8-20).",
    "reference": "Acts 14:11-20; 2 Timothy 3:11",
    "metadata": {
      "stage": 4,
      "stage_title": "Places and Journeys",
      "level_title": "Paul’s First Missionary Journey",
      "chain_type": "name_to_event",
      "chain_nodes": [
        "Lystra cripple walks",
        "Called Jupiter and Mercurius",
        "Stoned outside city gate",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Easy",
      "timerSeconds": 30,
      "points": 50,
      "testament": "New Testament",
      "hint1": "As the disciples stood round about him, he rose up, and came into the city.",
      "hint2": "Acts 14:19: \"and, having stoned Paul, drew him out of the city, supposing he had been dead.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l18-c5",
    "game_slug": "bible-chain-challenge",
    "level": 18,
    "challenge_index": 5,
    "question_text": "Follow the return loop: From Lystra, Paul and Barnabas departed to Derbe and preached the gospel to that city. Instead of taking the shorter overland route home, what did they do on their return journey?",
    "options": [
      "Revisited Lystra, Iconium, and Antioch to confirm disciples and ordain elders",
      "Sailed straight to Rome",
      "Walked directly to Jerusalem",
      "Stayed two years in Tarsus"
    ],
    "correct_answer": "Revisited Lystra, Iconium, and Antioch to confirm disciples and ordain elders",
    "explanation": "From Derbe, Paul and Barnabas boldly retraced their steps through Lystra, Iconium, and Antioch, confirming the souls of the disciples, exhorting them to continue in the faith, and ordaining elders in every church before returning to Antioch in Syria (Acts 14:20-26).",
    "reference": "Acts 14:21-23",
    "metadata": {
      "stage": 4,
      "stage_title": "Places and Journeys",
      "level_title": "Paul’s First Missionary Journey",
      "chain_type": "name_to_event",
      "chain_nodes": [
        "Derbe reached",
        "Retrace steps through persecution cities",
        "Ordaining elders in every church",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Moderate",
      "timerSeconds": 45,
      "points": 100,
      "testament": "New Testament",
      "hint1": "Strengthening the disciples and warning that through much tribulation we enter the kingdom.",
      "hint2": "Acts 14:21: \"they returned again to Lystra, and to Iconium, and Antioch.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l19-c1",
    "game_slug": "bible-chain-challenge",
    "level": 19,
    "challenge_index": 1,
    "question_text": "Follow the European vision chain: On Paul’s second journey, the Spirit forbade them to preach in Asia or Bithynia. At Troas on the Aegean coast, what vision appeared to Paul in the night?",
    "options": [
      "A man of Macedonia crying, \"Come over into Macedonia, and help us\"",
      "A chariot of fire ascending into heaven",
      "A sheet let down with fourfooted beasts",
      "An angel holding seven golden candlesticks"
    ],
    "correct_answer": "A man of Macedonia crying, \"Come over into Macedonia, and help us\"",
    "explanation": "Troas night vision → A man of Macedonia stood and prayed him: \"Come over into Macedonia, and help us\" → Luke joins the company (\"we endeavoured to go\") → Sail straight across to Neapolis and Philippi (Acts 16:6-12).",
    "reference": "Acts 16:9-10",
    "metadata": {
      "stage": 4,
      "stage_title": "Places and Journeys",
      "level_title": "Paul’s Second & Third Journeys",
      "chain_type": "name_to_event",
      "chain_nodes": [
        "Forbidden in Asia/Bithynia",
        "Troas night vision",
        "Gospel enters Europe",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Easy",
      "timerSeconds": 30,
      "points": 50,
      "testament": "New Testament",
      "hint1": "The famous \"Macedonian Call\".",
      "hint2": "Acts 16:9: \"There stood a man of Macedonia, and prayed him, saying, Come over into Macedonia, and help us.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l19-c2",
    "game_slug": "bible-chain-challenge",
    "level": 19,
    "challenge_index": 2,
    "question_text": "Follow the Berean noble searchers chain: Leaving Thessalonica under night cover, Paul and Silas came to Berea. Why were the Bereans commended as more noble than those in Thessalonica?",
    "options": [
      "They received the word with all readiness of mind, and searched the scriptures daily",
      "They built a grand synagogue for Paul",
      "They gave large sums of money to the apostles",
      "They were all wealthy Greek nobles"
    ],
    "correct_answer": "They received the word with all readiness of mind, and searched the scriptures daily",
    "explanation": "Berea synagogue → Commended as more noble than Thessalonians: they received the word with readiness of mind and searched the scriptures daily whether those things were so → Many believed (Acts 17:10-12).",
    "reference": "Acts 17:10-12",
    "metadata": {
      "stage": 4,
      "stage_title": "Places and Journeys",
      "level_title": "Paul’s Second & Third Journeys",
      "chain_type": "name_to_event",
      "chain_nodes": [
        "Escape from Thessalonica",
        "Berea synagogue",
        "Daily scripture verification",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Easy",
      "timerSeconds": 30,
      "points": 50,
      "testament": "New Testament",
      "hint1": "They compared Paul’s teachings against the written Old Testament scriptures every single day.",
      "hint2": "Acts 17:11: \"These were more noble than those in Thessalonica, in that they received the word with all readiness of mind, and searched the scriptures daily.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l19-c3",
    "game_slug": "bible-chain-challenge",
    "level": 19,
    "challenge_index": 3,
    "question_text": "Type the name of the Athenian hill (the Areopagus) where Paul stood in the midst of philosophers and preached the True God whom they worshipped ignorantly as \"THE UNKNOWN GOD\":",
    "options": [
      "Mars’ Hill",
      "Acropolis",
      "Mount Zion",
      "Mount Olivet"
    ],
    "correct_answer": "Mars’ Hill",
    "explanation": "Athens wholly given to idolatry → Epicureans and Stoics encounter Paul → Brought unto Areopagus (Mars’ Hill) → Paul proclaims the God that made the world and all things therein, commanding all men everywhere to repent (Acts 17:16-34).",
    "reference": "Acts 17:19, 22-31",
    "metadata": {
      "stage": 4,
      "stage_title": "Places and Journeys",
      "level_title": "Paul’s Second & Third Journeys",
      "chain_type": "name_to_event",
      "chain_nodes": [
        "Athens altar to the Unknown God",
        "Epicurean and Stoic philosophers",
        "Resurrection proclaimed",
        "?"
      ],
      "is_typed": true,
      "acceptedAlternatives": [
        "Mars Hill",
        "Areopagus"
      ],
      "difficulty": "Moderate",
      "timerSeconds": 45,
      "points": 100,
      "testament": "New Testament",
      "hint1": "Two-word name named after the Roman god of war.",
      "hint2": "Acts 17:22: \"Then Paul stood in the midst of Mars’ hill, and said, Ye men of Athens, I perceive that in all things ye are too superstitious.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l19-c4",
    "game_slug": "bible-chain-challenge",
    "level": 19,
    "challenge_index": 4,
    "question_text": "Follow Paul’s Corinthian ministry chain: In Corinth, Paul dwelt with Aquila and Priscilla, reasoning in the synagogue every sabbath. When the Jews opposed him, the Lord comforted him in a night vision. How long did Paul continue teaching in Corinth?",
    "options": [
      "A year and six months (18 months)",
      "Three months",
      "Six months",
      "Three full years"
    ],
    "correct_answer": "A year and six months (18 months)",
    "explanation": "Corinthian opposition → Lord says in night vision: \"Be not afraid... for I have much people in this city\" → Paul settled there a year and six months (18 months) teaching the word of God among them (Acts 18:9-11).",
    "reference": "Acts 18:9-11",
    "metadata": {
      "stage": 4,
      "stage_title": "Places and Journeys",
      "level_title": "Paul’s Second & Third Journeys",
      "chain_type": "name_to_event",
      "chain_nodes": [
        "Corinthian opposition",
        "Night vision: I have much people in this city",
        "Teaching ministry duration",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Moderate",
      "timerSeconds": 45,
      "points": 100,
      "testament": "New Testament",
      "hint1": "Eighteen months in total.",
      "hint2": "Acts 18:11: \"And he continued there a year and six months, teaching the word of God among them.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l19-c5",
    "game_slug": "bible-chain-challenge",
    "level": 19,
    "challenge_index": 5,
    "question_text": "Follow the Ephesian farewell chain: On his return to Jerusalem at the close of his third journey, Paul bypassed Ephesus and summoned the elders of the church to meet him at a coastal port 30 miles south. Where did Paul deliver his poignant farewell address?",
    "options": [
      "Miletus",
      "Troas",
      "Patara",
      "Tyre"
    ],
    "correct_answer": "Miletus",
    "explanation": "Third journey return → Paul sails past Ephesus to reach Jerusalem by Pentecost → Summons Ephesian elders to Miletus → Warns of grievous wolves entering the flock → They weep sore, fell on Paul’s neck, and kissed him (Acts 20:16-38).",
    "reference": "Acts 20:16-17, 36-38",
    "metadata": {
      "stage": 4,
      "stage_title": "Places and Journeys",
      "level_title": "Paul’s Second & Third Journeys",
      "chain_type": "name_to_event",
      "chain_nodes": [
        "Bypassing Ephesus",
        "Summons elders to coast",
        "Grievous wolves warning and tearful embrace",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Moderate",
      "timerSeconds": 45,
      "points": 100,
      "testament": "New Testament",
      "hint1": "Seven-letter port city beginning with M.",
      "hint2": "Acts 20:17: \"And from Miletus he sent to Ephesus, and called the elders of the church.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l20-c1",
    "game_slug": "bible-chain-challenge",
    "level": 20,
    "challenge_index": 1,
    "question_text": "DEEP SCRIPTURE STUDY: In 1 Samuel 4:3-11, Israel took the Ark of the Covenant from Shiloh into battle against the Philistines at Ebenezer/Aphek. When the Philistines captured the Ark, to which Philistine city and temple did they first bring it?",
    "options": [
      "Ashdod (Temple of Dagon)",
      "Gath",
      "Ekron",
      "Gaza"
    ],
    "correct_answer": "Ashdod (Temple of Dagon)",
    "explanation": "Ark taken at Aphek → Brought to Ashdod into the temple of Dagon → Set by Dagon → Next morning Dagon fallen on his face → Next morning head and both hands cut off upon the threshold (1 Samuel 5:1-5).",
    "reference": "1 Samuel 5:1-5",
    "metadata": {
      "stage": 4,
      "stage_title": "Places and Journeys",
      "level_title": "Deep Scripture Study: The Ark’s Journey",
      "chain_type": "name_to_event",
      "chain_nodes": [
        "Shiloh tabernacle",
        "Captured at Aphek",
        "Dagon’s hands cut off",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Easy",
      "timerSeconds": 90,
      "points": 100,
      "testament": "Old Testament",
      "dossier": "1 Samuel 4–6 records the capture of the Ark by the Philistines and its terrifying judgment upon the five Philistine lords.",
      "study_mode": true,
      "hint1": "The first of the five Philistine cities to receive the Ark.",
      "hint2": "1 Samuel 5:1: \"And the Philistines took the ark of God, and brought it from Ebenezer unto Ashdod.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l20-c2",
    "game_slug": "bible-chain-challenge",
    "level": 20,
    "challenge_index": 2,
    "question_text": "DEEP SCRIPTURE STUDY: Follow the Philistine plague circuit: From Ashdod the Ark was carried to Gath, then to Ekron. What plague struck the men of every city until the Philistines resolved to send the Ark away with a trespass offering?",
    "options": [
      "Emerods (tumors) and a plague of mice",
      "Boils and fiery serpents",
      "Blindness and madness",
      "Locusts and murrain"
    ],
    "correct_answer": "Emerods (tumors) and a plague of mice",
    "explanation": "Ashdod, Gath, Ekron struck with deadly destruction → The hand of God was heavy on them, smiting them with emerods and mice marring the land → Priests advised returning the Ark with five golden emerods and five golden mice (1 Samuel 5:6-12; 6:4-5).",
    "reference": "1 Samuel 5:6, 9; 6:4-5",
    "metadata": {
      "stage": 4,
      "stage_title": "Places and Journeys",
      "level_title": "Deep Scripture Study: The Ark’s Journey",
      "chain_type": "name_to_event",
      "chain_nodes": [
        "Ashdod plague",
        "Gath plague",
        "Ekron plague",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Moderate",
      "timerSeconds": 60,
      "points": 100,
      "testament": "Old Testament",
      "dossier": "1 Samuel 6:4: \"Five golden emerods, and five golden mice, according to the number of the lords of the Philistines.\"",
      "study_mode": true,
      "hint1": "Painful tumors on the secret parts along with vermin ravaging the fields.",
      "hint2": "1 Samuel 5:9: \"and he smote the men of the city, both small and great, and they had emerods in their secret parts.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l20-c3",
    "game_slug": "bible-chain-challenge",
    "level": 20,
    "challenge_index": 3,
    "question_text": "Type the name of the border city of Judah where the new cart pulled by two milch kine brought the Ark, where the men were reaping their wheat harvest in the valley:",
    "options": [
      "Beth-shemesh",
      "Kirjath-jearim",
      "Gibeah",
      "Shiloh"
    ],
    "correct_answer": "Beth-shemesh",
    "explanation": "Two milch kine take the straight road without turning right or left, lowing as they went → Arrive in the field of Joshua the Beth-shemite at Beth-shemesh → Great stone of Abel receives the Ark (1 Samuel 6:10-14).",
    "reference": "1 Samuel 6:12-14",
    "metadata": {
      "stage": 4,
      "stage_title": "Places and Journeys",
      "level_title": "Deep Scripture Study: The Ark’s Journey",
      "chain_type": "name_to_event",
      "chain_nodes": [
        "New cart with 2 milch kine",
        "Lowing toward border of Judah",
        "Wheat harvest in valley",
        "?"
      ],
      "is_typed": true,
      "acceptedAlternatives": [
        "Bethshemesh"
      ],
      "difficulty": "Moderate",
      "timerSeconds": 60,
      "points": 100,
      "testament": "Old Testament",
      "hint1": "Compound name meaning \"House of the Sun\".",
      "hint2": "1 Samuel 6:13: \"And they of Beth-shemesh were reaping their wheat harvest in the valley: and they lifted up their eyes, and saw the ark, and rejoiced to see it.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l20-c4",
    "game_slug": "bible-chain-challenge",
    "level": 20,
    "challenge_index": 4,
    "question_text": "DEEP SCRIPTURE STUDY: After seventy men of Beth-shemesh were smitten for looking into the Ark, the Ark was brought into the house of Abinadab on the hill. In which town did the Ark abide for twenty years while all the house of Israel lamented after the LORD?",
    "options": [
      "Kirjath-jearim",
      "Gibeah",
      "Nob",
      "Hebron"
    ],
    "correct_answer": "Kirjath-jearim",
    "explanation": "Men of Beth-shemesh send messengers to Kirjath-jearim → Brought into the house of Abinadab in the hill; Eleazar consecrated to keep it → Abode there 20 years (1 Samuel 6:21; 7:1-2; 1 Chronicles 13:5-6).",
    "reference": "1 Samuel 7:1-2; 1 Chronicles 13:5-6",
    "metadata": {
      "stage": 4,
      "stage_title": "Places and Journeys",
      "level_title": "Deep Scripture Study: The Ark’s Journey",
      "chain_type": "name_to_event",
      "chain_nodes": [
        "Beth-shemesh smitten",
        "House of Abinadab in the hill",
        "Abode twenty years",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Moderate",
      "timerSeconds": 75,
      "points": 100,
      "testament": "Old Testament",
      "dossier": "1 Samuel 7:2 records: \"the ark abode in Kirjath-jearim, that the time was long; for it was twenty years: and all the house of Israel lamented after the LORD.\"",
      "study_mode": true,
      "hint1": "Also called Baale of Judah or Kiriath-baal, meaning \"City of Forests\".",
      "hint2": "1 Samuel 7:2: \"And it came to pass, while the ark abode in Kirjath-jearim, that the time was long; for it was twenty years.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l20-c5",
    "game_slug": "bible-chain-challenge",
    "level": 20,
    "challenge_index": 5,
    "question_text": "DEEP SCRIPTURE STUDY: In 2 Samuel 6, David attempted to move the Ark on a new cart. At Nachon’s threshingfloor, Uzzah put forth his hand to hold the Ark and died. David turned aside the Ark into whose house for three months, bringing great blessing on all his household?",
    "options": [
      "Obed-edom the Gittite",
      "Barzillai the Gileadite",
      "Hiram of Tyre",
      "Itai the Gittite"
    ],
    "correct_answer": "Obed-edom the Gittite",
    "explanation": "Perez-uzzah breach → David afraid to bring Ark to city of David → Carried aside into house of Obed-edom the Gittite three months → LORD blessed Obed-edom and all his household → David brings up Ark with shouting and dancing into Zion (2 Samuel 6:6-12; 1 Chronicles 13:13-14; 15:25).",
    "reference": "2 Samuel 6:10-12; 1 Chronicles 13:13-14",
    "metadata": {
      "stage": 4,
      "stage_title": "Places and Journeys",
      "level_title": "Deep Scripture Study: The Ark’s Journey",
      "chain_type": "five_link",
      "chain_nodes": [
        "Kirjath-jearim",
        "Perez-uzzah breach",
        "Three months of blessing",
        "City of David / Zion",
        "Solomon’s Temple"
      ],
      "is_typed": false,
      "difficulty": "Moderate",
      "timerSeconds": 90,
      "points": 100,
      "testament": "Old Testament",
      "dossier": "2 Samuel 6:11: \"And the ark of the LORD continued in the house of Obed-edom the Gittite three months: and the LORD blessed Obed-edom, and all his household.\"",
      "study_mode": true,
      "hint1": "A Levite gatekeeper whose family was appointed keepers of the door for the Ark.",
      "hint2": "2 Samuel 6:10: \"but David carried it aside into the house of Obed-edom the Gittite.\"",
      "curated": true
    }
  },
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
    "question_text": "Identify the missing link in Jeremiah's field-purchase chain from Anathoth:\nJeremiah receives the LORD's word that a relative will visit → [ ? ] asks Jeremiah to buy his field → the silver is weighed and the deed is sealed → witnesses confirm the purchase at the court of the guard",
    "options": [
      "Hanamel",
      "Baruch",
      "Shaphan",
      "Gedaliah"
    ],
    "correct_answer": "Hanamel",
    "explanation": "Hanamel, son of Shallum and Jeremiah's cousin, came to Jeremiah in the court of the guard and asked him to buy his field at Anathoth because the right of redemption belonged to him. Jeremiah weighed out the silver, signed the deed, and arranged for it to be witnessed (Jeremiah 32:6-12).",
    "reference": "Jeremiah 32:6-12",
    "metadata": {
      "stage": 6,
      "stage_title": "The Missing Link",
      "level_title": "The Anathoth Redemption Chain",
      "chain_type": "missing_link",
      "chain_nodes": [
        "Jeremiah receives the LORD's word",
        "kinsman arrives from Anathoth",
        "?",
        "field deed is sealed and witnessed"
      ],
      "is_typed": false,
      "difficulty": "Difficult",
      "timerSeconds": 75,
      "points": 150,
      "testament": "Old Testament",
      "hint1": "He was Jeremiah's cousin, the son of Shallum.",
      "hint2": "Jeremiah 32:7-8 records his visit and request to buy the field.",
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
    "question_text": "Type the name of the Persian governor of the province Beyond the River who challenged the rebuilding of the Jerusalem temple and whose report was sent to King Darius:",
    "options": [
      "Tattenai",
      "Rehum",
      "Shimshai",
      "Sanballat"
    ],
    "correct_answer": "Tattenai",
    "explanation": "Tattenai, governor of the province Beyond the River, came with Shethar-bozenai and their companions to question the temple rebuilding. Their report was sent to Darius, who ordered that the work not be hindered (Ezra 5:3-6; 6:6-7).",
    "reference": "Ezra 5:3-6; 6:6-7",
    "metadata": {
      "stage": 6,
      "stage_title": "The Missing Link",
      "level_title": "Persian Administration & Temple Restoration",
      "chain_type": "missing_link",
      "chain_nodes": [
        "Zerubbabel and Jeshua resume temple work",
        "Persian officials arrive to question the work",
        "?",
        "Darius orders the work not to be hindered"
      ],
      "is_typed": true,
      "acceptedAlternatives": [
        "Tattenai the governor"
      ],
      "difficulty": "Difficult",
      "timerSeconds": 75,
      "points": 150,
      "testament": "Old Testament",
      "hint1": "His title was governor of the province Beyond the River.",
      "hint2": "Ezra 5:3 names him with Shethar-bozenai.",
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
  },
  {
    "id": "bible-chain-l31-c1",
    "game_slug": "bible-chain-challenge",
    "level": 31,
    "challenge_index": 1,
    "question_text": "Follow the Passover Lamb chain across the Testaments: In Exodus 12:5, the sacrificial lamb must be without blemish, and not a bone was to be broken. In 1 Corinthians 5:7, which exact phrase does Paul use to identify Christ as the ultimate fulfillment?",
    "options": [
      "Christ our passover is sacrificed for us",
      "The Lamb slain from the foundation of the world",
      "Behold the Lamb of God",
      "A lamb without blemish and without spot"
    ],
    "correct_answer": "Christ our passover is sacrificed for us",
    "explanation": "Exodus 12:5-7 (institution of the Passover lamb in Egypt) finds its exact theological declaration in 1 Corinthians 5:7: \"Purge out therefore the old leaven, that ye may be a new lump, as ye are unleavened. For even Christ our passover is sacrificed for us.\"",
    "reference": "Exodus 12:5-7, 46; 1 Corinthians 5:7; John 19:36",
    "metadata": {
      "stage": 7,
      "stage_title": "Old Meets New",
      "level_title": "Types and Shadows",
      "chain_type": "old_to_new",
      "chain_nodes": [
        "Exodus 12 (Passover Lamb)",
        "No bone broken",
        "Blood on doorposts",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Easy",
      "timerSeconds": 30,
      "points": 50,
      "testament": "New Testament",
      "hint1": "Contains the words \"our passover is sacrificed\".",
      "hint2": "1 Corinthians 5:7: \"For even Christ our passover is sacrificed for us.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l31-c2",
    "game_slug": "bible-chain-challenge",
    "level": 31,
    "challenge_index": 2,
    "question_text": "Follow the Bronze Serpent typology chain: In Numbers 21:8-9, Moses lifted up a serpent of brass on a pole so that bitten Israelites looking upon it lived. In John 3:14, who does Jesus state must likewise be lifted up?",
    "options": [
      "The Son of man",
      "The prophet of Nazareth",
      "The King of the Jews",
      "The Angel of the LORD"
    ],
    "correct_answer": "The Son of man",
    "explanation": "Numbers 21:8-9 is quoted by Jesus in John 3:14-15: \"And as Moses lifted up the serpent in the wilderness, even so must the Son of man be lifted up: That whosoever believeth in him should not perish, but have eternal life.\"",
    "reference": "Numbers 21:8-9; John 3:14-15",
    "metadata": {
      "stage": 7,
      "stage_title": "Old Meets New",
      "level_title": "Types and Shadows",
      "chain_type": "old_to_new",
      "chain_nodes": [
        "Numbers 21:8 (Serpent on pole)",
        "Look and live",
        "Jesus to Nicodemus",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Easy",
      "timerSeconds": 30,
      "points": 50,
      "testament": "New Testament",
      "hint1": "Christ’s favorite self-designation derived from Daniel 7.",
      "hint2": "John 3:14: \"even so must the Son of man be lifted up.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l31-c3",
    "game_slug": "bible-chain-challenge",
    "level": 31,
    "challenge_index": 3,
    "question_text": "Type the prophetic name that Jesus uses in John 6:35 when the Jews cited the wilderness manna (\"He gave them bread from heaven to eat\"): \"I am the [ ? ]\":",
    "options": [
      "bread of life",
      "light of the world",
      "good shepherd",
      "true vine"
    ],
    "correct_answer": "bread of life",
    "explanation": "Exodus 16:15 (wilderness manna) connects to John 6:31-35: The crowd challenged Jesus with Moses giving manna in the desert; Jesus responded: \"My Father giveth you the true bread from heaven... I am the bread of life: he that cometh to me shall never hunger.\"",
    "reference": "Exodus 16:4, 15; Psalm 78:24-25; John 6:31-35",
    "metadata": {
      "stage": 7,
      "stage_title": "Old Meets New",
      "level_title": "Types and Shadows",
      "chain_type": "old_to_new",
      "chain_nodes": [
        "Exodus 16 (Wilderness manna)",
        "Bread of angels",
        "John 6 Capernaum discourse",
        "?"
      ],
      "is_typed": true,
      "acceptedAlternatives": [
        "Bread of Life",
        "Bread of life"
      ],
      "difficulty": "Easy",
      "timerSeconds": 30,
      "points": 50,
      "testament": "New Testament",
      "hint1": "Three words: bread of ____.",
      "hint2": "John 6:35: \"And Jesus said unto them, I am the bread of life.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l31-c4",
    "game_slug": "bible-chain-challenge",
    "level": 31,
    "challenge_index": 4,
    "question_text": "Follow the Smitten Rock chain: In Exodus 17:6, God commanded Moses to strike the rock in Horeb to bring forth living water. In 1 Corinthians 10:4, what startling typological declaration does the apostle Paul make concerning that spiritual Rock?",
    "options": [
      "And that Rock was Christ",
      "The rock was the Law of Moses",
      "The rock was Mount Sinai",
      "The rock was the temple altar"
    ],
    "correct_answer": "And that Rock was Christ",
    "explanation": "Exodus 17:6 connects directly to 1 Corinthians 10:4: \"And did all drink the same spiritual drink: for they drank of that spiritual Rock that followed them: and that Rock was Christ.\"",
    "reference": "Exodus 17:6; Numbers 20:8-11; 1 Corinthians 10:4",
    "metadata": {
      "stage": 7,
      "stage_title": "Old Meets New",
      "level_title": "Types and Shadows",
      "chain_type": "old_to_new",
      "chain_nodes": [
        "Exodus 17:6 (Smitten rock)",
        "Living water in desert",
        "1 Corinthians 10:4",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Easy",
      "timerSeconds": 30,
      "points": 50,
      "testament": "New Testament",
      "hint1": "A five-word declaration identifying the Rock with the Messiah.",
      "hint2": "1 Corinthians 10:4: \"and that Rock was Christ.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l31-c5",
    "game_slug": "bible-chain-challenge",
    "level": 31,
    "challenge_index": 5,
    "question_text": "Follow the Sign of the Prophet Jonas chain: Jonah was in the belly of the great fish three days and three nights. In Matthew 12:40, what exact resurrection timetable does Jesus declare this typified?",
    "options": [
      "The Son of man three days and three nights in the heart of the earth",
      "The temple destroyed and rebuilt in forty days",
      "The disciples fasting forty days in the wilderness",
      "The Holy Ghost tarrying ten days in Jerusalem"
    ],
    "correct_answer": "The Son of man three days and three nights in the heart of the earth",
    "explanation": "Jonah 1:17 connects to Matthew 12:40: \"For as Jonas was three days and three nights in the whale’s belly; so shall the Son of man be three days and three nights in the heart of the earth.\"",
    "reference": "Jonah 1:17; Matthew 12:39-40; 16:4",
    "metadata": {
      "stage": 7,
      "stage_title": "Old Meets New",
      "level_title": "Types and Shadows",
      "chain_type": "old_to_new",
      "chain_nodes": [
        "Jonah 1:17",
        "Three days and three nights in fish",
        "Scribes demand sign",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Easy",
      "timerSeconds": 30,
      "points": 50,
      "testament": "New Testament",
      "hint1": "Refers to the burial of the Messiah prior to His resurrection.",
      "hint2": "Matthew 12:40: \"so shall the Son of man be three days and three nights in the heart of the earth.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l32-c1",
    "game_slug": "bible-chain-challenge",
    "level": 32,
    "challenge_index": 1,
    "question_text": "Follow the Crucifixion psalm chain: Psalm 22:18 foretells: \"They part my garments among them, and cast lots upon my vesture.\" In which Gospel is this cited as fulfilled by the Roman soldiers at the cross when they refused to rend Christ’s seamless coat?",
    "options": [
      "John 19",
      "Mark 15",
      "Luke 23",
      "Matthew 26"
    ],
    "correct_answer": "John 19",
    "explanation": "Psalm 22:18 is fulfilled in John 19:23-24: The soldiers took His coat, which was without seam, woven from the top throughout, and said: \"Let us not rend it, but cast lots for it, whose it shall be: that the scripture might be fulfilled, which saith, They parted my raiment among them, and for my vesture they did cast lots.\"",
    "reference": "Psalm 22:18; John 19:23-24; Matthew 27:35",
    "metadata": {
      "stage": 7,
      "stage_title": "Old Meets New",
      "level_title": "Prophetic Fulfilments in Christ",
      "chain_type": "scripture_chain",
      "chain_nodes": [
        "Psalm 22:18",
        "Seamless coat",
        "Roman soldiers cast lots",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Moderate",
      "timerSeconds": 45,
      "points": 100,
      "testament": "New Testament",
      "hint1": "The fourth Gospel, chapter 19.",
      "hint2": "John 19:24: \"that the scripture might be fulfilled, which saith, They parted my raiment among them...\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l32-c2",
    "game_slug": "bible-chain-challenge",
    "level": 32,
    "challenge_index": 2,
    "question_text": "Follow the Resurrection proof chain: In Psalm 16:10, David wrote: \"For thou wilt not leave my soul in hell; neither wilt thou suffer thine Holy One to see corruption.\" On the Day of Pentecost in Acts 2, which apostle cites this verse to prove Christ’s resurrection?",
    "options": [
      "Peter",
      "Paul",
      "John",
      "James"
    ],
    "correct_answer": "Peter",
    "explanation": "Psalm 16:10 is quoted by Peter in Acts 2:25-31: Peter argues that David died and was buried, and his sepulchre is with us to this day, but being a prophet, he spoke of the resurrection of Christ, that His soul was not left in hell, neither His flesh did see corruption.",
    "reference": "Psalm 16:10; Acts 2:27-31; 13:35",
    "metadata": {
      "stage": 7,
      "stage_title": "Old Meets New",
      "level_title": "Prophetic Fulfilments in Christ",
      "chain_type": "scripture_chain",
      "chain_nodes": [
        "Psalm 16:10 (Holy One corruption)",
        "David’s sepulchre in Jerusalem",
        "Pentecost sermon",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Easy",
      "timerSeconds": 30,
      "points": 50,
      "testament": "New Testament",
      "hint1": "The apostle who preached the Pentecost sermon where 3,000 were converted.",
      "hint2": "Acts 2:31: \"He seeing this before spake of the resurrection of Christ, that his soul was not left in hell, neither his flesh did see corruption.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l32-c3",
    "game_slug": "bible-chain-challenge",
    "level": 32,
    "challenge_index": 3,
    "question_text": "Type the chapter number in Zechariah where the exact betrayal price of the Shepherd is prophesied: \"So they weighed for my price thirty pieces of silver... and cast them to the potter in the house of the LORD\":",
    "options": [
      "Zechariah 11",
      "Zechariah 9",
      "Zechariah 12",
      "Zechariah 14"
    ],
    "correct_answer": "Zechariah 11",
    "explanation": "Zechariah 11:12-13 prophesied: \"So they weighed for my price thirty pieces of silver... and I took the thirty pieces of silver, and cast them to the potter in the house of the LORD.\" This was fulfilled by Judas Iscariot in Matthew 26:15 and 27:3-10.",
    "reference": "Zechariah 11:12-13; Matthew 26:15; 27:3-10",
    "metadata": {
      "stage": 7,
      "stage_title": "Old Meets New",
      "level_title": "Prophetic Fulfilments in Christ",
      "chain_type": "scripture_chain",
      "chain_nodes": [
        "30 pieces of silver",
        "Cast to potter in house of LORD",
        "Judas Iscariot betrayal",
        "?"
      ],
      "is_typed": true,
      "acceptedAlternatives": [
        "11",
        "Chapter 11",
        "Zechariah 11"
      ],
      "difficulty": "Moderate",
      "timerSeconds": 45,
      "points": 100,
      "testament": "Old Testament",
      "hint1": "Chapter 11 of Zechariah.",
      "hint2": "Zechariah 11:12: \"So they weighed for my price thirty pieces of silver.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l32-c4",
    "game_slug": "bible-chain-challenge",
    "level": 32,
    "challenge_index": 4,
    "question_text": "Follow the Protoevangelium chain: In Genesis 3:15, God told the serpent: \"I will put enmity between thee and the woman, and between thy seed and her seed; it shall bruise thy head, and thou shalt bruise his heel.\" Which New Testament verse in Galatians declares this fulfillment: \"God sent forth his Son, made of a woman, made under the law\"?",
    "options": [
      "Galatians 4:4",
      "Galatians 3:16",
      "Galatians 2:20",
      "Galatians 5:1"
    ],
    "correct_answer": "Galatians 4:4",
    "explanation": "Genesis 3:15 (the seed of the woman) is fulfilled in Galatians 4:4-5: \"But when the fulness of the time was come, God sent forth his Son, made of a woman, made under the law, to redeem them that were under the law, that we might receive the adoption of sons.\"",
    "reference": "Genesis 3:15; Galatians 4:4-5; Hebrews 2:14",
    "metadata": {
      "stage": 7,
      "stage_title": "Old Meets New",
      "level_title": "Prophetic Fulfilments in Christ",
      "chain_type": "scripture_chain",
      "chain_nodes": [
        "Genesis 3:15 (Seed of the woman)",
        "Bruise serpent’s head",
        "Fulness of time",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Moderate",
      "timerSeconds": 45,
      "points": 100,
      "testament": "New Testament",
      "hint1": "Galatians chapter 4, verse 4.",
      "hint2": "Galatians 4:4: \"God sent forth his Son, made of a woman, made under the law.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l32-c5",
    "game_slug": "bible-chain-challenge",
    "level": 32,
    "challenge_index": 5,
    "question_text": "Follow the pierced Messiah prophecy: In Zechariah 12:10, the LORD declares: \"they shall look upon me whom they have pierced, and they shall mourn for him, as one mourneth for his only son.\" In which New Testament passage does John cite this when the Roman soldier pierced Jesus’ side with a spear?",
    "options": [
      "John 19:37",
      "John 20:27",
      "Revelation 1:7",
      "Matthew 27:49"
    ],
    "correct_answer": "John 19:37",
    "explanation": "Zechariah 12:10 is quoted in John 19:37: After a soldier with a spear pierced His side and forthwith came there out blood and water, John writes: \"And again another scripture saith, They shall look on him whom they pierced.\" It is also echoed in Revelation 1:7.",
    "reference": "Zechariah 12:10; John 19:34-37; Revelation 1:7",
    "metadata": {
      "stage": 7,
      "stage_title": "Old Meets New",
      "level_title": "Prophetic Fulfilments in Christ",
      "chain_type": "scripture_chain",
      "chain_nodes": [
        "Zechariah 12:10",
        "Look on me whom they have pierced",
        "Spear pierces side: blood and water",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Moderate",
      "timerSeconds": 45,
      "points": 100,
      "testament": "New Testament",
      "hint1": "Chapter 19 of the Gospel of John, verse 37.",
      "hint2": "John 19:37: \"And again another scripture saith, They shall look on him whom they pierced.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l33-c1",
    "game_slug": "bible-chain-challenge",
    "level": 33,
    "challenge_index": 1,
    "question_text": "Follow the justification by faith chain: Genesis 15:6 states: \"And he believed in the LORD; and he counted it to him for righteousness.\" In Romans 4, does Paul demonstrate that Abraham received this righteousness before or after he was circumcised?",
    "options": [
      "Before he was circumcised (in uncircumcision)",
      "After he was circumcised",
      "At the same hour he was circumcised",
      "When he offered Isaac on Mount Moriah"
    ],
    "correct_answer": "Before he was circumcised (in uncircumcision)",
    "explanation": "Romans 4:9-11 demonstrates the chronological link: \"How was it then reckoned? when he was in circumcision, or in uncircumcision? Not in circumcision, but in uncircumcision. And he received the sign of circumcision, a seal of the righteousness of the faith which he had yet being uncircumcised.\"",
    "reference": "Genesis 15:6; 17:10-24; Romans 4:9-11",
    "metadata": {
      "stage": 7,
      "stage_title": "Old Meets New",
      "level_title": "Abraham, Faith & the Law",
      "chain_type": "scripture_chain",
      "chain_nodes": [
        "Genesis 15:6 (Counted for righteousness)",
        "Genesis 17 (Circumcision given)",
        "Romans 4 question",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Easy",
      "timerSeconds": 30,
      "points": 50,
      "testament": "New Testament",
      "hint1": "He was still uncircumcised when God counted his faith for righteousness.",
      "hint2": "Romans 4:10: \"Not in circumcision, but in uncircumcision.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l33-c2",
    "game_slug": "bible-chain-challenge",
    "level": 33,
    "challenge_index": 2,
    "question_text": "Follow the Gospel preached to Abraham chain: In Genesis 12:3, God promised: \"in thee shall all families of the earth be blessed.\" In Galatians 3:8, what does Paul call this ancient promise given to Abraham?",
    "options": [
      "Preaching the gospel unto Abraham before",
      "The covenant of circumcision",
      "The law of works",
      "The mystery of the Gentiles"
    ],
    "correct_answer": "Preaching the gospel unto Abraham before",
    "explanation": "Galatians 3:8 connects Genesis 12:3 to New Testament salvation: \"And the scripture, foreseeing that God would justify the heathen through faith, preached before the gospel unto Abraham, saying, In thee shall all nations be blessed.\"",
    "reference": "Genesis 12:3; 18:18; Galatians 3:8-9",
    "metadata": {
      "stage": 7,
      "stage_title": "Old Meets New",
      "level_title": "Abraham, Faith & the Law",
      "chain_type": "scripture_chain",
      "chain_nodes": [
        "Genesis 12:3",
        "All families of earth blessed",
        "Justification of the heathen",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Easy",
      "timerSeconds": 30,
      "points": 50,
      "testament": "New Testament",
      "hint1": "Paul says the Scripture preached the gospel beforehand.",
      "hint2": "Galatians 3:8: \"preached before the gospel unto Abraham, saying, In thee shall all nations be blessed.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l33-c3",
    "game_slug": "bible-chain-challenge",
    "level": 33,
    "challenge_index": 3,
    "question_text": "Type the name of the patriarch whose seed Paul analyzes in Galatians 3:16: \"Now to Abraham and his seed were the promises made. He saith not, And to seeds, as of many; but as of one, And to thy seed, which is [ ? ]\":",
    "options": [
      "Christ",
      "Isaac",
      "Jacob",
      "David"
    ],
    "correct_answer": "Christ",
    "explanation": "Galatians 3:16 establishes the singular grammatical link: \"Now to Abraham and his seed were the promises made. He saith not, And to seeds, as of many; but as of one, And to thy seed, which is Christ.\"",
    "reference": "Genesis 22:18; Galatians 3:16",
    "metadata": {
      "stage": 7,
      "stage_title": "Old Meets New",
      "level_title": "Abraham, Faith & the Law",
      "chain_type": "scripture_chain",
      "chain_nodes": [
        "Genesis 22:18 (In thy seed blessed)",
        "Not of many seeds",
        "Singular seed",
        "?"
      ],
      "is_typed": true,
      "acceptedAlternatives": [
        "Jesus Christ",
        "Jesus"
      ],
      "difficulty": "Easy",
      "timerSeconds": 30,
      "points": 50,
      "testament": "New Testament",
      "hint1": "The Messiah Himself.",
      "hint2": "Galatians 3:16: \"And to thy seed, which is Christ.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l33-c4",
    "game_slug": "bible-chain-challenge",
    "level": 33,
    "challenge_index": 4,
    "question_text": "Follow the Law on the Tree curse chain: Deuteronomy 21:23 declares: \"he that is hanged is accursed of God.\" In Galatians 3:13, how does Paul connect this ancient Mosaic law to Christ’s atonement on the cross?",
    "options": [
      "Christ hath redeemed us from the curse of the law, being made a curse for us",
      "The law was abolished by Moses",
      "No cursed man could be a prophet",
      "The cross was identical to the bronze altar"
    ],
    "correct_answer": "Christ hath redeemed us from the curse of the law, being made a curse for us",
    "explanation": "Deuteronomy 21:22-23 connects to Galatians 3:13: \"Christ hath redeemed us from the curse of the law, being made a curse for us: for it is written, Cursed is every one that hangeth on a tree.\"",
    "reference": "Deuteronomy 21:22-23; Galatians 3:13",
    "metadata": {
      "stage": 7,
      "stage_title": "Old Meets New",
      "level_title": "Abraham, Faith & the Law",
      "chain_type": "scripture_chain",
      "chain_nodes": [
        "Deuteronomy 21:23 (Hanged on tree accursed)",
        "Calvary cross",
        "Redeemed from curse of the law",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Easy",
      "timerSeconds": 30,
      "points": 50,
      "testament": "New Testament",
      "hint1": "He became a curse for us so the blessing of Abraham might come on the Gentiles.",
      "hint2": "Galatians 3:13: \"Christ hath redeemed us from the curse of the law, being made a curse for us.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l33-c5",
    "game_slug": "bible-chain-challenge",
    "level": 33,
    "challenge_index": 5,
    "question_text": "Follow the Word is Nigh chain: In Deuteronomy 30:11-14, Moses says: \"It is not in heaven, that thou shouldest say, Who shall go up for us to heaven... But the word is very nigh unto thee, in thy mouth, and in thy heart.\" In Romans 10:8-9, what does Paul identify this word as?",
    "options": [
      "The word of faith, which we preach: that if thou shalt confess with thy mouth and believe in thine heart",
      "The ten commandments written on stone",
      "The scroll of the prophet Isaiah",
      "The rod of Aaron that budded"
    ],
    "correct_answer": "The word of faith, which we preach: that if thou shalt confess with thy mouth and believe in thine heart",
    "explanation": "Deuteronomy 30:12-14 is quoted in Romans 10:6-9: \"The word is nigh thee, even in thy mouth, and in thy heart: that is, the word of faith, which we preach; that if thou shalt confess with thy mouth the Lord Jesus, and shalt believe in thine heart that God hath raised him from the dead, thou shalt be saved.\"",
    "reference": "Deuteronomy 30:12-14; Romans 10:6-9",
    "metadata": {
      "stage": 7,
      "stage_title": "Old Meets New",
      "level_title": "Abraham, Faith & the Law",
      "chain_type": "scripture_chain",
      "chain_nodes": [
        "Deuteronomy 30:14",
        "Word nigh in mouth and heart",
        "Romans 10 application",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Moderate",
      "timerSeconds": 45,
      "points": 100,
      "testament": "New Testament",
      "hint1": "Confession with the mouth and belief in the heart unto salvation.",
      "hint2": "Romans 10:8: \"The word is nigh thee, even in thy mouth, and in thy heart: that is, the word of faith, which we preach.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l34-c1",
    "game_slug": "bible-chain-challenge",
    "level": 34,
    "challenge_index": 1,
    "question_text": "Follow the Day of Atonement blood chain: In Leviticus 16:14-15, the high priest took the blood of the bullock and the goat within the veil to sprinkle upon the mercy seat. In Hebrews 9:12, with what blood did Christ enter once into the holy place, having obtained eternal redemption?",
    "options": [
      "His own blood",
      "The blood of bulls and of goats",
      "The ashes of an heifer",
      "The blood of the Passover lamb"
    ],
    "correct_answer": "His own blood",
    "explanation": "Leviticus 16:14-15 contrasts with Hebrews 9:11-12: \"Neither by the blood of goats and calves, but by his own blood he entered in once into the holy place, having obtained eternal redemption for us.\"",
    "reference": "Leviticus 16:14-15; Hebrews 9:11-12, 24-26",
    "metadata": {
      "stage": 7,
      "stage_title": "Old Meets New",
      "level_title": "Priesthood, Blood & Sanctuary",
      "chain_type": "old_to_new",
      "chain_nodes": [
        "Leviticus 16 (Within the veil)",
        "Blood of bullock and goat",
        "Eternal redemption obtained",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Easy",
      "timerSeconds": 30,
      "points": 50,
      "testament": "New Testament",
      "hint1": "Not animal blood, but His own sacrificial life.",
      "hint2": "Hebrews 9:12: \"but by his own blood he entered in once into the holy place.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l34-c2",
    "game_slug": "bible-chain-challenge",
    "level": 34,
    "challenge_index": 2,
    "question_text": "Follow the Scapegoat typology: In Leviticus 16:21-22, Aaron laid both hands upon the head of the live goat and confessed over him all the iniquities of the children of Israel, and the goat bare upon him all their iniquities unto a land not inhabited. Which New Testament epistle echoes this: \"Who his own self bare our sins in his own body on the tree\"?",
    "options": [
      "1 Peter",
      "James",
      "Hebrews",
      "Romans"
    ],
    "correct_answer": "1 Peter",
    "explanation": "Leviticus 16:22 (the scapegoat bearing iniquities away) is reflected in 1 Peter 2:24: \"Who his own self bare our sins in his own body on the tree, that we, being dead to sins, should live unto righteousness: by whose stripes ye were healed.\"",
    "reference": "Leviticus 16:21-22; Isaiah 53:6, 12; 1 Peter 2:24",
    "metadata": {
      "stage": 7,
      "stage_title": "Old Meets New",
      "level_title": "Priesthood, Blood & Sanctuary",
      "chain_type": "old_to_new",
      "chain_nodes": [
        "Leviticus 16:22 (Scapegoat bears sins)",
        "Sent into the wilderness",
        "Cross of Christ",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Easy",
      "timerSeconds": 30,
      "points": 50,
      "testament": "New Testament",
      "hint1": "The first letter of the apostle Peter, chapter 2.",
      "hint2": "1 Peter 2:24: \"Who his own self bare our sins in his own body on the tree.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l34-c3",
    "game_slug": "bible-chain-challenge",
    "level": 34,
    "challenge_index": 3,
    "question_text": "Type the name of the inner sanctuary curtain that was rent in twain from the top to the bottom when Jesus died, which Hebrews 10:20 calls \"his flesh\":",
    "options": [
      "vail",
      "veil",
      "curtain",
      "screen"
    ],
    "correct_answer": "veil",
    "explanation": "Exodus 26:31-33 (the vail dividing Holy Place from Holy of Holies) connects to Matthew 27:51 and Hebrews 10:19-20: \"Having therefore, brethren, boldness to enter into the holiest by the blood of Jesus, by a new and living way, which he hath consecrated for us, through the veil, that is to say, his flesh.\"",
    "reference": "Exodus 26:31-33; Matthew 27:51; Hebrews 10:19-20",
    "metadata": {
      "stage": 7,
      "stage_title": "Old Meets New",
      "level_title": "Priesthood, Blood & Sanctuary",
      "chain_type": "old_to_new",
      "chain_nodes": [
        "Exodus 26:31 (Sanctuary divider)",
        "Matthew 27:51 (Rent top to bottom)",
        "Hebrews 10:20 (His flesh)",
        "?"
      ],
      "is_typed": true,
      "acceptedAlternatives": [
        "vail",
        "the veil",
        "the vail"
      ],
      "difficulty": "Easy",
      "timerSeconds": 30,
      "points": 50,
      "testament": "New Testament",
      "hint1": "Four-letter word (spelled veil or vail).",
      "hint2": "Hebrews 10:20: \"through the veil, that is to say, his flesh.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l34-c4",
    "game_slug": "bible-chain-challenge",
    "level": 34,
    "challenge_index": 4,
    "question_text": "Follow the Red Heifer purification chain: In Numbers 19:2-9, a red heifer without spot or blemish was slain without the camp, and its ashes mixed with water for the water of separation to purify from defilement of a dead body. In Hebrews 13:12, how does the author link this to Christ’s crucifixion?",
    "options": [
      "Jesus also, that he might sanctify the people with his own blood, suffered without the gate",
      "Christ was burned upon the altar",
      "Christ was baptized in the water of separation",
      "The red heifer was named after David"
    ],
    "correct_answer": "Jesus also, that he might sanctify the people with his own blood, suffered without the gate",
    "explanation": "Numbers 19:3 and Leviticus 16:27 (bodies of beasts burned without the camp) connect to Hebrews 13:11-13: \"Wherefore Jesus also, that he might sanctify the people with his own blood, suffered without the gate. Let us go forth therefore unto him without the camp, bearing his reproach.\"",
    "reference": "Numbers 19:2-9; Hebrews 9:13-14; 13:11-13",
    "metadata": {
      "stage": 7,
      "stage_title": "Old Meets New",
      "level_title": "Priesthood, Blood & Sanctuary",
      "chain_type": "old_to_new",
      "chain_nodes": [
        "Numbers 19 (Red heifer)",
        "Slain without the camp",
        "Hebrews 13:12",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Moderate",
      "timerSeconds": 45,
      "points": 100,
      "testament": "New Testament",
      "hint1": "Suffered outside the city walls of Jerusalem.",
      "hint2": "Hebrews 13:12: \"Wherefore Jesus also, that he might sanctify the people with his own blood, suffered without the gate.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l34-c5",
    "game_slug": "bible-chain-challenge",
    "level": 34,
    "challenge_index": 5,
    "question_text": "Follow the New Covenant prophecy chain: In Jeremiah 31:31-34, God promised: \"Behold, the days come... that I will make a new covenant with the house of Israel.\" At which momentous event in the Gospels did Jesus inaugurate this New Covenant?",
    "options": [
      "The Last Supper (\"This cup is the new testament in my blood\")",
      "The Sermon on the Mount",
      "The Triumphal Entry",
      "The Feeding of the 5,000"
    ],
    "correct_answer": "The Last Supper (\"This cup is the new testament in my blood\")",
    "explanation": "Jeremiah 31:31 is cited by Jesus in Luke 22:20 and 1 Corinthians 11:25: \"This cup is the new testament in my blood, which is shed for you.\" Hebrews 8:8-12 and 10:16-17 quote Jeremiah 31 in full to prove the Old Covenant is fulfilled.",
    "reference": "Jeremiah 31:31-34; Luke 22:20; Hebrews 8:8-13",
    "metadata": {
      "stage": 7,
      "stage_title": "Old Meets New",
      "level_title": "Priesthood, Blood & Sanctuary",
      "chain_type": "old_to_new",
      "chain_nodes": [
        "Jeremiah 31:31 (New Covenant)",
        "Law written on hearts",
        "Upper Room Passover",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Easy",
      "timerSeconds": 30,
      "points": 50,
      "testament": "New Testament",
      "hint1": "The institution of the Lord’s Supper in the Upper Room.",
      "hint2": "Luke 22:20: \"This cup is the new testament in my blood, which is shed for you.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l35-c1",
    "game_slug": "bible-chain-challenge",
    "level": 35,
    "challenge_index": 1,
    "question_text": "DEEP SCRIPTURE STUDY: Read Exodus 25:1-22 & Hebrews 9:1-5.\nIn the Holy Place (the first tabernacle), what were the three sacred items mentioned in Hebrews 9:2 that stood outside the veil?",
    "options": [
      "The candlestick, the table, and the shewbread",
      "The ark, the mercy seat, and the pot of manna",
      "The brazen altar, the laver, and the pillars",
      "The golden altar, the censer, and the cherubims"
    ],
    "correct_answer": "The candlestick, the table, and the shewbread",
    "explanation": "Hebrews 9:2 explicitly records: \"For there was a tabernacle made; the first, wherein was the candlestick, and the table, and the shewbread; which is called the sanctuary.\"",
    "reference": "Exodus 25:23-40; Hebrews 9:2",
    "metadata": {
      "stage": 7,
      "stage_title": "Old Meets New",
      "level_title": "Deep Scripture Study: The Tabernacle Typology",
      "chain_type": "old_to_new",
      "chain_nodes": [
        "Exodus 25 (Pattern on the Mount)",
        "Outer court to Holy Place",
        "First room furnishings",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Moderate",
      "timerSeconds": 90,
      "points": 100,
      "testament": "New Testament",
      "dossier": "Hebrews 9 contrasts the earthly tabernacle furnishings with Christ’s greater and more perfect tabernacle not made with hands.",
      "study_mode": true,
      "hint1": "The golden lampstand with seven lamps and the table with twelve loaves of bread.",
      "hint2": "Hebrews 9:2: \"wherein was the candlestick, and the table, and the shewbread.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l35-c2",
    "game_slug": "bible-chain-challenge",
    "level": 35,
    "challenge_index": 2,
    "question_text": "DEEP SCRIPTURE STUDY: In Hebrews 9:3-4, after the second veil was the Holy of Holies (Holiest of all). What three sacred items were placed inside or before the Ark of the Covenant overlaid round about with gold?",
    "options": [
      "The golden pot with manna, Aaron’s rod that budded, and the tables of the covenant",
      "The rod of Moses, the bronze serpent, and the ephod",
      "The breastplate, the Urim, and the Thummim",
      "The horn of oil, the censer, and the sword of Goliath"
    ],
    "correct_answer": "The golden pot with manna, Aaron’s rod that budded, and the tables of the covenant",
    "explanation": "Hebrews 9:4 lists: \"the ark of the covenant overlaid round about with gold, wherein was the golden pot that had manna, and Aaron’s rod that budded, and the tables of the covenant.\"",
    "reference": "Exodus 16:33; Numbers 17:10; Deuteronomy 10:2-5; Hebrews 9:4",
    "metadata": {
      "stage": 7,
      "stage_title": "Old Meets New",
      "level_title": "Deep Scripture Study: The Tabernacle Typology",
      "chain_type": "old_to_new",
      "chain_nodes": [
        "Holiest of all",
        "Ark overlaid with gold",
        "Three sacred covenant relics",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Moderate",
      "timerSeconds": 75,
      "points": 100,
      "testament": "New Testament",
      "dossier": "Hebrews 9:4 preserves the three foundational tokens of divine sustenance (manna), divine priesthood (budded rod), and divine righteousness (tables of the law).",
      "study_mode": true,
      "hint1": "Pot of wilderness bread, the budding almond rod, and the stone tablets.",
      "hint2": "Hebrews 9:4: \"the golden pot that had manna, and Aaron’s rod that budded, and the tables of the covenant.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l35-c3",
    "game_slug": "bible-chain-challenge",
    "level": 35,
    "challenge_index": 3,
    "question_text": "Type the name of the golden lid above the Ark, between the two cherubims of glory overshadowing it, which serves as the biblical throne of grace and atonement:",
    "options": [
      "mercy seat",
      "mercyseat",
      "propitiation",
      "hilasterion"
    ],
    "correct_answer": "mercy seat",
    "explanation": "Exodus 25:17-22 and Hebrews 9:5 describe: \"And over it the cherubims of glory shadowing the mercyseat; of which we cannot now speak particularly.\" The mercy seat (Greek hilasterion, Romans 3:25) is where blood was sprinkled on the Day of Atonement.",
    "reference": "Exodus 25:17-22; Leviticus 16:14; Romans 3:25; Hebrews 9:5",
    "metadata": {
      "stage": 7,
      "stage_title": "Old Meets New",
      "level_title": "Deep Scripture Study: The Tabernacle Typology",
      "chain_type": "old_to_new",
      "chain_nodes": [
        "Ark of the Covenant",
        "Cherubims of glory overshadowing",
        "Blood sprinkled on Atonement Day",
        "?"
      ],
      "is_typed": true,
      "acceptedAlternatives": [
        "mercyseat",
        "the mercy seat",
        "the mercyseat"
      ],
      "difficulty": "Easy",
      "timerSeconds": 45,
      "points": 50,
      "testament": "New Testament",
      "hint1": "Two words: mercy ____.",
      "hint2": "Hebrews 9:5: \"cherubims of glory shadowing the mercyseat.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l35-c4",
    "game_slug": "bible-chain-challenge",
    "level": 35,
    "challenge_index": 4,
    "question_text": "DEEP SCRIPTURE STUDY: In Hebrews 9:7, how often was the high priest alone permitted to enter into the second tabernacle (the Holy of Holies)?",
    "options": [
      "Once every year, not without blood",
      "Every Sabbath morning",
      "Once every month at the new moon",
      "Twice daily at morning and evening sacrifice"
    ],
    "correct_answer": "Once every year, not without blood",
    "explanation": "Hebrews 9:7: \"But into the second went the high priest alone once every year, not without blood, which he offered for himself, and for the errors of the people: the Holy Ghost this signifying, that the way into the holiest of all was not yet made manifest, while as the first tabernacle was yet standing.\"",
    "reference": "Leviticus 16:2, 34; Hebrews 9:7-8",
    "metadata": {
      "stage": 7,
      "stage_title": "Old Meets New",
      "level_title": "Deep Scripture Study: The Tabernacle Typology",
      "chain_type": "old_to_new",
      "chain_nodes": [
        "Behind the second veil",
        "High priest alone",
        "Frequency and requirement of blood",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Easy",
      "timerSeconds": 60,
      "points": 100,
      "testament": "New Testament",
      "dossier": "Hebrews 9:7 shows the restricted access of the Mosaic covenant, contrasted with Christ’s open access for all believers into the Holiest.",
      "study_mode": true,
      "hint1": "Only on the tenth day of the seventh month (Day of Atonement).",
      "hint2": "Hebrews 9:7: \"once every year, not without blood.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l35-c5",
    "game_slug": "bible-chain-challenge",
    "level": 35,
    "challenge_index": 5,
    "question_text": "DEEP SCRIPTURE STUDY: Connect the five links of the Tabernacle journey to its celestial fulfillment in Hebrews 9:\nBrazen Altar outside → Golden Candlestick & Table in Holy Place → Vail rent → Ark of Covenant in Holy of Holies → [ ? ]",
    "options": [
      "Christ entered into heaven itself, now to appear in the presence of God for us",
      "The earthly temple rebuilt in Babylon",
      "The return of the bronze serpent to Jerusalem",
      "The daily sacrifice of bulls and goats restored"
    ],
    "correct_answer": "Christ entered into heaven itself, now to appear in the presence of God for us",
    "explanation": "Hebrews 9:24 concludes this magnificent typological chain: \"For Christ is not entered into the holy places made with hands, which are the figures of the true; but into heaven itself, now to appear in the presence of God for us.\"",
    "reference": "Hebrews 9:11-12, 24; 10:19-22",
    "metadata": {
      "stage": 7,
      "stage_title": "Old Meets New",
      "level_title": "Deep Scripture Study: The Tabernacle Typology",
      "chain_type": "five_link",
      "chain_nodes": [
        "Brazen Altar (Cross)",
        "Holy Place (Church)",
        "Vail Rent (His Flesh)",
        "Holy of Holies (Throne)",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Moderate",
      "timerSeconds": 90,
      "points": 100,
      "testament": "New Testament",
      "dossier": "Hebrews 9:24 reveals the ultimate destination of the Tabernacle typology: heaven itself.",
      "study_mode": true,
      "hint1": "He entered heaven itself, the true holy place.",
      "hint2": "Hebrews 9:24: \"but into heaven itself, now to appear in the presence of God for us.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l36-c1",
    "game_slug": "bible-chain-challenge",
    "level": 36,
    "challenge_index": 1,
    "question_text": "BROKEN CHAIN DETECTIVE: Examine this father-to-son lineage chain:\nAbraham → Isaac → Jacob → Joseph → Moses\nWhich link breaks the direct parent-child relationship being tested?",
    "options": [
      "Moses (Moses was not Joseph’s son; he was of the tribe of Levi)",
      "Joseph",
      "Jacob",
      "Isaac"
    ],
    "correct_answer": "Moses (Moses was not Joseph’s son; he was of the tribe of Levi)",
    "explanation": "The chain tests immediate father-to-son generational descent. Joseph’s sons were Manasseh and Ephraim (Genesis 41:51-52). Moses was born generations later to Amram and Jochebed of the tribe of Levi (Exodus 2:1; 6:20). Moses is the false link!",
    "reference": "Genesis 41:51-52; Exodus 2:1-10; 6:20",
    "metadata": {
      "stage": 8,
      "stage_title": "The Broken Chain",
      "level_title": "Broken Family Chains",
      "chain_type": "wrong_chain",
      "chain_nodes": [
        "Abraham",
        "Isaac",
        "Jacob",
        "Joseph",
        "Moses [BROKEN]"
      ],
      "broken_link_index": 4,
      "is_typed": false,
      "difficulty": "Moderate",
      "timerSeconds": 45,
      "points": 100,
      "testament": "Old Testament",
      "hint1": "Look at the fifth person; who were his actual parents in Exodus 6?",
      "hint2": "Moses was a Levite (son of Amram), not a son of Joseph.",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l36-c2",
    "game_slug": "bible-chain-challenge",
    "level": 36,
    "challenge_index": 2,
    "question_text": "BROKEN CHAIN DETECTIVE: Examine this Davidic father-to-son lineage chain:\nJesse → David → Solomon → Rehoboam → Hezekiah\nWhich link breaks the direct father-son succession of Judah’s kings?",
    "options": [
      "Hezekiah (Rehoboam’s immediate son and successor was Abijam)",
      "Rehoboam",
      "Solomon",
      "David"
    ],
    "correct_answer": "Hezekiah (Rehoboam’s immediate son and successor was Abijam)",
    "explanation": "Jesse begat David; David begat Solomon; Solomon begat Rehoboam. But Rehoboam was succeeded by his son Abijam (1 Kings 14:31). Hezekiah reigned nearly two centuries later after Ahaz (2 Kings 18:1). Hezekiah is the broken link!",
    "reference": "1 Kings 14:31; 15:1; 2 Kings 16:20; 18:1",
    "metadata": {
      "stage": 8,
      "stage_title": "The Broken Chain",
      "level_title": "Broken Family Chains",
      "chain_type": "wrong_chain",
      "chain_nodes": [
        "Jesse",
        "David",
        "Solomon",
        "Rehoboam",
        "Hezekiah [BROKEN]"
      ],
      "broken_link_index": 4,
      "is_typed": false,
      "difficulty": "Moderate",
      "timerSeconds": 45,
      "points": 100,
      "testament": "Old Testament",
      "hint1": "Rehoboam’s son was Abijam, followed by Asa and Jehoshaphat.",
      "hint2": "1 Kings 14:31: \"and Abijam his son reigned in his stead.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l36-c3",
    "game_slug": "bible-chain-challenge",
    "level": 36,
    "challenge_index": 3,
    "question_text": "Type the name of the broken link in this Saulide dynastic chain:\nKish → Saul → Jonathan → [ David ] → Mica\n(Who was Jonathan’s actual crippled son whom David protected and who fathered Mica?)",
    "options": [
      "Mephibosheth",
      "Ish-bosheth",
      "Merib-baal",
      "Ziba"
    ],
    "correct_answer": "Mephibosheth",
    "explanation": "The chain shows Jonathan → David. David was Jonathan’s friend, not his son! Jonathan’s son was Mephibosheth, whose young son was Mica (2 Samuel 9:6, 12). Mephibosheth should replace David.",
    "reference": "2 Samuel 9:6, 12; 1 Chronicles 8:34",
    "metadata": {
      "stage": 8,
      "stage_title": "The Broken Chain",
      "level_title": "Broken Family Chains",
      "chain_type": "wrong_chain",
      "chain_nodes": [
        "Kish",
        "Saul",
        "Jonathan",
        "David [BROKEN]",
        "Mica"
      ],
      "broken_link_index": 3,
      "is_typed": true,
      "acceptedAlternatives": [
        "Meribbaal",
        "Merib-baal"
      ],
      "difficulty": "Difficult",
      "timerSeconds": 60,
      "points": 150,
      "testament": "Old Testament",
      "hint1": "Lame in both feet, ate at David’s table.",
      "hint2": "2 Samuel 9:6: \"Mephibosheth, the son of Jonathan, the son of Saul.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l36-c4",
    "game_slug": "bible-chain-challenge",
    "level": 36,
    "challenge_index": 4,
    "question_text": "BROKEN CHAIN DETECTIVE: Examine this Leah sibling chain (sons and daughters of Jacob by his wife Leah):\nReuben → Simeon → Levi → Judah → Dan\nWhich son does NOT belong to Leah?",
    "options": [
      "Dan (Dan was the son of Rachel’s handmaid Bilhah)",
      "Judah",
      "Levi",
      "Simeon"
    ],
    "correct_answer": "Dan (Dan was the son of Rachel’s handmaid Bilhah)",
    "explanation": "Leah bare Reuben, Simeon, Levi, Judah, Issachar, Zebulun, and daughter Dinah (Genesis 29:32-35; 30:17-21). Dan was the son of Bilhah, Rachel’s handmaid (Genesis 30:4-6). Dan is the broken link!",
    "reference": "Genesis 29:32-35; 30:5-6; 35:23-25",
    "metadata": {
      "stage": 8,
      "stage_title": "The Broken Chain",
      "level_title": "Broken Family Chains",
      "chain_type": "wrong_chain",
      "chain_nodes": [
        "Reuben",
        "Simeon",
        "Levi",
        "Judah",
        "Dan [BROKEN]"
      ],
      "broken_link_index": 4,
      "is_typed": false,
      "difficulty": "Moderate",
      "timerSeconds": 45,
      "points": 100,
      "testament": "Old Testament",
      "hint1": "Born to Rachel’s maid Bilhah, along with Naphtali.",
      "hint2": "Genesis 30:6: \"And Rachel said, God hath judged me... and she called his name Dan.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l36-c5",
    "game_slug": "bible-chain-challenge",
    "level": 36,
    "challenge_index": 5,
    "question_text": "BROKEN CHAIN DETECTIVE: Examine this Aaronite high priestly succession chain:\nAaron → Eleazar → Phinehas → Eli → Abishua\nWhich high priest breaks the straight line of descent recorded in 1 Chronicles 6:4-5?",
    "options": [
      "Eli (Eli belonged to the house of Ithamar, not the direct line of Phinehas)",
      "Phinehas",
      "Abishua",
      "Eleazar"
    ],
    "correct_answer": "Eli (Eli belonged to the house of Ithamar, not the direct line of Phinehas)",
    "explanation": "1 Chronicles 6:4-5 traces the direct Phinehas line: Eleazar begat Phinehas, and Phinehas begat Abishua, and Abishua begat Bukki. Eli was of the line of Ithamar, Aaron’s younger son, which held the high priesthood temporarily until Solomon deposed Abiathar (1 Kings 2:27). Eli is the foreign link!",
    "reference": "1 Chronicles 6:4-5; 1 Kings 2:27",
    "metadata": {
      "stage": 8,
      "stage_title": "The Broken Chain",
      "level_title": "Broken Family Chains",
      "chain_type": "wrong_chain",
      "chain_nodes": [
        "Aaron",
        "Eleazar",
        "Phinehas",
        "Eli [BROKEN]",
        "Abishua"
      ],
      "broken_link_index": 3,
      "is_typed": false,
      "difficulty": "Difficult",
      "timerSeconds": 60,
      "points": 150,
      "testament": "Old Testament",
      "hint1": "The judge in Shiloh whose house was cursed because his sons made themselves vile.",
      "hint2": "1 Chronicles 6:4-5: \"Phinehas begat Abishua.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l37-c1",
    "game_slug": "bible-chain-challenge",
    "level": 37,
    "challenge_index": 1,
    "question_text": "BROKEN CHAIN DETECTIVE: Trace Abram’s journey from Mesopotamia to Canaan:\nUr of the Chaldees → Haran → Nineveh → Shechem → Bethel\nWhich city breaks the correct historical itinerary of Abram?",
    "options": [
      "Nineveh (Abram traveled south directly into Canaan, not east to Assyria)",
      "Haran",
      "Shechem",
      "Bethel"
    ],
    "correct_answer": "Nineveh (Abram traveled south directly into Canaan, not east to Assyria)",
    "explanation": "Abram went from Ur to Haran in northwest Mesopotamia, and after Terah died, went directly south through Damascus into Canaan to Shechem and Bethel (Genesis 11:31; 12:4-8). He never traveled to Nineveh in Assyria! Nineveh is the broken link.",
    "reference": "Genesis 11:31; 12:4-8",
    "metadata": {
      "stage": 8,
      "stage_title": "The Broken Chain",
      "level_title": "Broken Geographic Chains",
      "chain_type": "wrong_chain",
      "chain_nodes": [
        "Ur",
        "Haran",
        "Nineveh [BROKEN]",
        "Shechem",
        "Bethel"
      ],
      "broken_link_index": 2,
      "is_typed": false,
      "difficulty": "Easy",
      "timerSeconds": 30,
      "points": 50,
      "testament": "Old Testament",
      "hint1": "The capital of Assyria where Jonah was sent.",
      "hint2": "Genesis 12:5-6: \"and into the land of Canaan they came. And Abram passed through the land unto the place of Sichem.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l37-c2",
    "game_slug": "bible-chain-challenge",
    "level": 37,
    "challenge_index": 2,
    "question_text": "BROKEN CHAIN DETECTIVE: Trace Paul and Barnabas on their First Missionary Journey:\nAntioch (Syria) → Seleucia → Rome → Salamis (Cyprus) → Paphos\nWhich city breaks their maritime route in Acts 13?",
    "options": [
      "Rome (They sailed directly from Seleucia to Cyprus, not across to Italy)",
      "Seleucia",
      "Salamis",
      "Paphos"
    ],
    "correct_answer": "Rome (They sailed directly from Seleucia to Cyprus, not across to Italy)",
    "explanation": "Acts 13:4-6 explicitly states: \"departed unto Seleucia; and from thence they sailed to Cyprus. And when they were at Salamis, they preached the word of God... and had gone through the isle unto Paphos.\" Rome was visited over a decade later. Rome is the broken link!",
    "reference": "Acts 13:4-6",
    "metadata": {
      "stage": 8,
      "stage_title": "The Broken Chain",
      "level_title": "Broken Geographic Chains",
      "chain_type": "wrong_chain",
      "chain_nodes": [
        "Antioch",
        "Seleucia",
        "Rome [BROKEN]",
        "Salamis",
        "Paphos"
      ],
      "broken_link_index": 2,
      "is_typed": false,
      "difficulty": "Easy",
      "timerSeconds": 30,
      "points": 50,
      "testament": "New Testament",
      "hint1": "The capital of the Roman Empire.",
      "hint2": "Acts 13:4: \"from thence they sailed to Cyprus.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l37-c3",
    "game_slug": "bible-chain-challenge",
    "level": 37,
    "challenge_index": 3,
    "question_text": "Type the name of the false city in this wilderness itinerary:\nEgypt → Red Sea → Mount Carmel → Mount Sinai → Kadesh-barnea\n(Which mountain is located in northern Israel by the Mediterranean, not in the Sinai wilderness?)",
    "options": [
      "Mount Carmel",
      "Mount Sinai",
      "Mount Horeb",
      "Mount Hor"
    ],
    "correct_answer": "Mount Carmel",
    "explanation": "The wilderness stations passed through the Sinai peninsula to Mount Sinai / Horeb. Mount Carmel is located in northwest Israel overlooking Haifa, where Elijah contested Baal hundreds of years later. Mount Carmel is the broken link!",
    "reference": "Exodus 14–19; 1 Kings 18:19",
    "metadata": {
      "stage": 8,
      "stage_title": "The Broken Chain",
      "level_title": "Broken Geographic Chains",
      "chain_type": "wrong_chain",
      "chain_nodes": [
        "Egypt",
        "Red Sea",
        "Mount Carmel [BROKEN]",
        "Mount Sinai",
        "Kadesh-barnea"
      ],
      "broken_link_index": 2,
      "is_typed": true,
      "acceptedAlternatives": [
        "Carmel",
        "Mt Carmel",
        "Mt. Carmel"
      ],
      "difficulty": "Moderate",
      "timerSeconds": 45,
      "points": 100,
      "testament": "Old Testament",
      "hint1": "The mountain where Elijah called down fire from heaven.",
      "hint2": "Exodus 19:1: \"In the third month... came they into the wilderness of Sinai.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l37-c4",
    "game_slug": "bible-chain-challenge",
    "level": 37,
    "challenge_index": 4,
    "question_text": "BROKEN CHAIN DETECTIVE: Trace Paul’s second journey through Macedonia and Greece in Acts 16-17:\nPhilippi → Amphipolis → Apollonia → Thessalonica → Alexandria → Berea → Athens\nWhich city breaks the Greek continental route?",
    "options": [
      "Alexandria (Alexandria was in Egypt, completely outside Paul’s Greek route)",
      "Thessalonica",
      "Berea",
      "Amphipolis"
    ],
    "correct_answer": "Alexandria (Alexandria was in Egypt, completely outside Paul’s Greek route)",
    "explanation": "From Thessalonica, the brethren immediately sent Paul and Silas away by night unto Berea, and from Berea to Athens (Acts 17:10, 14-15). Alexandria is in northern Egypt. Alexandria is the broken link!",
    "reference": "Acts 17:1, 10, 14-15",
    "metadata": {
      "stage": 8,
      "stage_title": "The Broken Chain",
      "level_title": "Broken Geographic Chains",
      "chain_type": "wrong_chain",
      "chain_nodes": [
        "Philippi",
        "Thessalonica",
        "Alexandria [BROKEN]",
        "Berea",
        "Athens"
      ],
      "broken_link_index": 2,
      "is_typed": false,
      "difficulty": "Easy",
      "timerSeconds": 30,
      "points": 50,
      "testament": "New Testament",
      "hint1": "The great Egyptian port city where Apollos was born.",
      "hint2": "Acts 17:10: \"And the brethren immediately sent away Paul and Silas by night unto Berea.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l37-c5",
    "game_slug": "bible-chain-challenge",
    "level": 37,
    "challenge_index": 5,
    "question_text": "BROKEN CHAIN DETECTIVE: Trace the Philistine captive Ark route in 1 Samuel 5–6:\nEbenezer/Aphek → Ashdod → Babylon → Gath → Ekron → Beth-shemesh\nWhich city was never visited by the Philistine cart bearing the Ark of God?",
    "options": [
      "Babylon (The Ark remained in the Philistine pentapolis before returning to Judah)",
      "Ashdod",
      "Gath",
      "Ekron"
    ],
    "correct_answer": "Babylon (The Ark remained in the Philistine pentapolis before returning to Judah)",
    "explanation": "1 Samuel 5–6 records the Ark carried from Ebenezer to Ashdod, from Ashdod to Gath, from Gath to Ekron, and then straight on the road to Beth-shemesh in Judah. Babylon was an empire hundreds of miles to the east! Babylon is the broken link.",
    "reference": "1 Samuel 5:1, 8, 10; 6:12",
    "metadata": {
      "stage": 8,
      "stage_title": "The Broken Chain",
      "level_title": "Broken Geographic Chains",
      "chain_type": "wrong_chain",
      "chain_nodes": [
        "Aphek",
        "Ashdod",
        "Babylon [BROKEN]",
        "Gath",
        "Ekron",
        "Beth-shemesh"
      ],
      "broken_link_index": 2,
      "is_typed": false,
      "difficulty": "Easy",
      "timerSeconds": 30,
      "points": 50,
      "testament": "Old Testament",
      "hint1": "The Mesopotamian empire of Nebuchadnezzar.",
      "hint2": "1 Samuel 5:8: \"Let the ark of the God of Israel be carried about unto Gath.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l38-c1",
    "game_slug": "bible-chain-challenge",
    "level": 38,
    "challenge_index": 1,
    "question_text": "BROKEN CHAIN DETECTIVE: Examine this Old Testament chronological sequence:\nCreation → Noah’s Flood → Exodus from Egypt → Fall of Jericho → Tower of Babel\nWhich event is placed completely out of chronological order?",
    "options": [
      "Tower of Babel (Babel occurred in Genesis 11, long before the Exodus and Jericho)",
      "Fall of Jericho",
      "Exodus from Egypt",
      "Noah’s Flood"
    ],
    "correct_answer": "Tower of Babel (Babel occurred in Genesis 11, long before the Exodus and Jericho)",
    "explanation": "The Tower of Babel took place in Genesis 11, shortly after Noah’s flood and prior to Abraham’s call in Genesis 12. Placing it after the Fall of Jericho violates centuries of biblical history. Tower of Babel is the broken link!",
    "reference": "Genesis 7; 11:1-9; Exodus 12; Joshua 6",
    "metadata": {
      "stage": 8,
      "stage_title": "The Broken Chain",
      "level_title": "Broken Chronological Chains",
      "chain_type": "wrong_chain",
      "chain_nodes": [
        "Creation",
        "Noah’s Flood",
        "Exodus",
        "Fall of Jericho",
        "Tower of Babel [BROKEN]"
      ],
      "broken_link_index": 4,
      "is_typed": false,
      "difficulty": "Easy",
      "timerSeconds": 30,
      "points": 50,
      "testament": "Old Testament",
      "hint1": "Where languages were confounded in Genesis 11.",
      "hint2": "Genesis 11:9: \"Therefore is the name of it called Babel.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l38-c2",
    "game_slug": "bible-chain-challenge",
    "level": 38,
    "challenge_index": 2,
    "question_text": "BROKEN CHAIN DETECTIVE: Examine this sequence of early monarchy events:\nSaul anointed by Samuel → David slays Goliath → Temple of Solomon built → David flees into wilderness from Saul\nWhich event breaks the historical timeline?",
    "options": [
      "Temple of Solomon built (Solomon’s temple was built decades later after David’s 40-year reign)",
      "Saul anointed",
      "David slays Goliath",
      "David flees into wilderness"
    ],
    "correct_answer": "Temple of Solomon built (Solomon’s temple was built decades later after David’s 40-year reign)",
    "explanation": "David fled from Saul in 1 Samuel 19–31 while Saul was still king. The Temple was not constructed until Solomon’s fourth year of reign (1 Kings 6:1), over forty years later! Temple of Solomon is the broken link.",
    "reference": "1 Samuel 17; 21–24; 1 Kings 6:1",
    "metadata": {
      "stage": 8,
      "stage_title": "The Broken Chain",
      "level_title": "Broken Chronological Chains",
      "chain_type": "wrong_chain",
      "chain_nodes": [
        "Saul anointed",
        "Goliath slain",
        "Temple of Solomon built [BROKEN]",
        "David flees from Saul"
      ],
      "broken_link_index": 2,
      "is_typed": false,
      "difficulty": "Easy",
      "timerSeconds": 30,
      "points": 50,
      "testament": "Old Testament",
      "hint1": "Built by David’s son, not during Saul’s pursuit of David.",
      "hint2": "1 Kings 6:1: \"in the fourth year of Solomon’s reign over Israel... he began to build the house of the LORD.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l38-c3",
    "game_slug": "bible-chain-challenge",
    "level": 38,
    "challenge_index": 3,
    "question_text": "Type the name of the out-of-order event in this life-of-Christ timeline:\nBirth in Bethlehem → Flight to Egypt → [ Triumphal Entry into Jerusalem ] → Baptism in Jordan by John → Crucifixion at Calvary\n(Which event occurred in the final week of Christ’s earthly ministry, not before His baptism?)",
    "options": [
      "Triumphal Entry into Jerusalem",
      "Baptism in Jordan",
      "Flight to Egypt",
      "Birth in Bethlehem"
    ],
    "correct_answer": "Triumphal Entry into Jerusalem",
    "explanation": "Jesus was baptized by John at age thirty at the commencement of His public ministry (Luke 3:21-23). The Triumphal Entry occurred at the very end of His ministry just days before the Passover crucifixion (Matthew 21:1-11). Triumphal Entry is the broken link!",
    "reference": "Matthew 2:13; 3:13-17; 21:1-11; 27:35",
    "metadata": {
      "stage": 8,
      "stage_title": "The Broken Chain",
      "level_title": "Broken Chronological Chains",
      "chain_type": "wrong_chain",
      "chain_nodes": [
        "Bethlehem birth",
        "Egypt flight",
        "Triumphal Entry [BROKEN]",
        "Jordan baptism",
        "Calvary cross"
      ],
      "broken_link_index": 2,
      "is_typed": true,
      "acceptedAlternatives": [
        "Triumphal Entry",
        "triumphal entry",
        "The Triumphal Entry"
      ],
      "difficulty": "Moderate",
      "timerSeconds": 45,
      "points": 100,
      "testament": "New Testament",
      "hint1": "Palm Sunday arrival riding on an ass.",
      "hint2": "Matthew 21:8: \"And a very great multitude spread their garments in the way.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l38-c4",
    "game_slug": "bible-chain-challenge",
    "level": 38,
    "challenge_index": 4,
    "question_text": "BROKEN CHAIN DETECTIVE: Examine this early church sequence in the Book of Acts:\nAscension from Mount Olivet → Day of Pentecost → Stephen martyred → Saul’s conversion on Damascus road → Council of Jerusalem (Acts 15) → Peter healing lame man at Beautiful Gate\nWhich event has been misplaced to the end instead of occurring in Acts 3?",
    "options": [
      "Peter healing lame man at Beautiful Gate (Occurred in Acts 3, long before the Council of Jerusalem in Acts 15)",
      "Ascension",
      "Stephen martyred",
      "Saul’s conversion"
    ],
    "correct_answer": "Peter healing lame man at Beautiful Gate (Occurred in Acts 3, long before the Council of Jerusalem in Acts 15)",
    "explanation": "The healing of the lame man at the Beautiful Gate of the Temple occurred in Acts 3:1-10, right after Pentecost. Placing it after the Jerusalem Council of Acts 15 is an error of nearly twenty years! Peter healing the lame man is the broken link.",
    "reference": "Acts 1:9; 2:1; 3:1-10; 7:58; 9:3; 15:1-29",
    "metadata": {
      "stage": 8,
      "stage_title": "The Broken Chain",
      "level_title": "Broken Chronological Chains",
      "chain_type": "wrong_chain",
      "chain_nodes": [
        "Ascension",
        "Pentecost",
        "Stephen martyred",
        "Council of Jerusalem",
        "Healing at Beautiful Gate [BROKEN]"
      ],
      "broken_link_index": 4,
      "is_typed": false,
      "difficulty": "Moderate",
      "timerSeconds": 45,
      "points": 100,
      "testament": "New Testament",
      "hint1": "Look at the miracle that prompted Peter’s second sermon in Acts 3.",
      "hint2": "Acts 3:2: \"laid daily at the gate of the temple which is called Beautiful.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l38-c5",
    "game_slug": "bible-chain-challenge",
    "level": 38,
    "challenge_index": 5,
    "question_text": "BROKEN CHAIN DETECTIVE: Examine this sequence of judges and deliverers in Israel:\nOthniel → Ehud → Deborah & Barak → Gideon → Nebuchadnezzar → Samson\nWhich name does NOT belong to the period of the Judges of Israel?",
    "options": [
      "Nebuchadnezzar (He was the pagan king of Babylon who destroyed Jerusalem eight centuries later)",
      "Gideon",
      "Deborah & Barak",
      "Ehud"
    ],
    "correct_answer": "Nebuchadnezzar (He was the pagan king of Babylon who destroyed Jerusalem eight centuries later)",
    "explanation": "Othniel, Ehud, Deborah, Gideon, and Samson were all judges raised up by God in the Book of Judges. Nebuchadnezzar was the king of the Neo-Babylonian Empire in 605–562 BC (2 Kings 24–25; Daniel 1–4). Nebuchadnezzar is the broken link!",
    "reference": "Judges 3:9, 15; 4:4; 6:11; 13:24; 2 Kings 24:1",
    "metadata": {
      "stage": 8,
      "stage_title": "The Broken Chain",
      "level_title": "Broken Chronological Chains",
      "chain_type": "wrong_chain",
      "chain_nodes": [
        "Othniel",
        "Ehud",
        "Deborah & Barak",
        "Gideon",
        "Nebuchadnezzar [BROKEN]",
        "Samson"
      ],
      "broken_link_index": 4,
      "is_typed": false,
      "difficulty": "Easy",
      "timerSeconds": 30,
      "points": 50,
      "testament": "Old Testament",
      "hint1": "The king who built the golden image on the plain of Dura.",
      "hint2": "Daniel 1:1: \"came Nebuchadnezzar king of Babylon unto Jerusalem, and besieged it.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l39-c1",
    "game_slug": "bible-chain-challenge",
    "level": 39,
    "challenge_index": 1,
    "question_text": "BROKEN CHAIN DETECTIVE: Examine this apostolic companion chain for the Apostle Paul:\nPaul → Barnabas → Silas → Timothy → Herod Antipas → Luke\nWhich person was NOT an apostolic co-worker of Paul?",
    "options": [
      "Herod Antipas (Herod was the tetrarch of Galilee who beheaded John the Baptist and mocked Jesus)",
      "Luke",
      "Timothy",
      "Silas"
    ],
    "correct_answer": "Herod Antipas (Herod was the tetrarch of Galilee who beheaded John the Baptist and mocked Jesus)",
    "explanation": "Barnabas, Silas, Timothy, and Luke the beloved physician were Paul’s trusted missionary partners. Herod Antipas was the corrupt Roman client ruler who beheaded John the Baptist (Matthew 14:1-12) and mocked Jesus in a gorgeous robe (Luke 23:7-11). Herod Antipas is the broken link!",
    "reference": "Acts 13:2; 15:40; 16:1-3; 2 Timothy 4:11; Luke 23:7-11",
    "metadata": {
      "stage": 8,
      "stage_title": "The Broken Chain",
      "level_title": "Broken Ministry & Succession",
      "chain_type": "wrong_chain",
      "chain_nodes": [
        "Paul",
        "Barnabas",
        "Silas",
        "Timothy",
        "Herod Antipas [BROKEN]",
        "Luke"
      ],
      "broken_link_index": 4,
      "is_typed": false,
      "difficulty": "Easy",
      "timerSeconds": 30,
      "points": 50,
      "testament": "New Testament",
      "hint1": "The ruler called \"that fox\" by Jesus.",
      "hint2": "Luke 23:11: \"And Herod with his men of war set him at nought, and mocked him.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l39-c2",
    "game_slug": "bible-chain-challenge",
    "level": 39,
    "challenge_index": 2,
    "question_text": "BROKEN CHAIN DETECTIVE: Examine this prophetic mantle transmission chain:\nMoses → Joshua → Elijah → Elisha → Gehazi (as double portion prophet)\nWhy does Gehazi break the true prophetic succession?",
    "options": [
      "Gehazi was smitten with incurable leprosy for his covetous greed and was never Elijah/Elisha’s prophetic heir",
      "Gehazi died in Egypt",
      "Gehazi became king of Judah",
      "Gehazi was not a Hebrew"
    ],
    "correct_answer": "Gehazi was smitten with incurable leprosy for his covetous greed and was never Elijah/Elisha’s prophetic heir",
    "explanation": "Elisha asked for and received a double portion of Elijah’s spirit (2 Kings 2:9-12). But Gehazi coveted Naaman’s silver, lied to Elisha, and was cursed: \"The leprosy therefore of Naaman shall cleave unto thee, and unto thy seed for ever\" (2 Kings 5:27). Gehazi is the broken link!",
    "reference": "2 Kings 2:9-12; 5:20-27",
    "metadata": {
      "stage": 8,
      "stage_title": "The Broken Chain",
      "level_title": "Broken Ministry & Succession",
      "chain_type": "wrong_chain",
      "chain_nodes": [
        "Moses",
        "Joshua",
        "Elijah",
        "Elisha",
        "Gehazi [BROKEN]"
      ],
      "broken_link_index": 4,
      "is_typed": false,
      "difficulty": "Moderate",
      "timerSeconds": 45,
      "points": 100,
      "testament": "Old Testament",
      "hint1": "He went out from Elisha’s presence a leper as white as snow.",
      "hint2": "2 Kings 5:27: \"And he went out from his presence a leper as white as snow.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l39-c3",
    "game_slug": "bible-chain-challenge",
    "level": 39,
    "challenge_index": 3,
    "question_text": "Type the name of the false author in this New Testament Epistle chain:\nJames (brother of the Lord) → Peter (First & Second Peter) → John (Three Epistles) → [ Judas Iscariot ] (General Epistle of Jude):\n(Who was the actual author of Jude who identifies himself as \"the servant of Jesus Christ, and brother of James\"?)",
    "options": [
      "Jude",
      "Judas brother of James",
      "Thaddaeus",
      "Lebbaeus"
    ],
    "correct_answer": "Jude",
    "explanation": "Judas Iscariot betrayed Christ and hanged himself before the crucifixion (Matthew 27:3-5). The General Epistle of Jude was written by Jude (Judas), the brother of James and half-brother of Jesus (Jude 1:1; Matthew 13:55). Judas Iscariot is the broken link!",
    "reference": "Matthew 27:3-5; Jude 1:1; Matthew 13:55",
    "metadata": {
      "stage": 8,
      "stage_title": "The Broken Chain",
      "level_title": "Broken Ministry & Succession",
      "chain_type": "wrong_chain",
      "chain_nodes": [
        "James",
        "Peter",
        "John",
        "Judas Iscariot [BROKEN]"
      ],
      "broken_link_index": 3,
      "is_typed": true,
      "acceptedAlternatives": [
        "Judas",
        "Jude the apostle",
        "Judas the brother of James"
      ],
      "difficulty": "Moderate",
      "timerSeconds": 45,
      "points": 100,
      "testament": "New Testament",
      "hint1": "Four-letter English name of the author of the 25-verse epistle.",
      "hint2": "Jude 1:1: \"Jude, the servant of Jesus Christ, and brother of James.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l39-c4",
    "game_slug": "bible-chain-challenge",
    "level": 39,
    "challenge_index": 4,
    "question_text": "BROKEN CHAIN DETECTIVE: Examine this United Monarchy royal line:\nSaul (40 years) → David (40 years) → Solomon (40 years) → Jeroboam son of Nebat (over all twelve tribes)\nWhy does Jeroboam break the chain of kings over a united Israel?",
    "options": [
      "Jeroboam rebelled and reigned only over the ten northern tribes; Rehoboam succeeded Solomon",
      "Jeroboam was a priest",
      "Jeroboam was killed by Goliath",
      "Jeroboam never became a king"
    ],
    "correct_answer": "Jeroboam rebelled and reigned only over the ten northern tribes; Rehoboam succeeded Solomon",
    "explanation": "Solomon’s immediate successor was his son Rehoboam (1 Kings 11:43). Jeroboam son of Nebat led the rebellion of the ten northern tribes, creating the divided northern kingdom of Israel with golden calves at Bethel and Dan (1 Kings 12:1-20, 26-30). Jeroboam is the broken link.",
    "reference": "1 Kings 11:43; 12:1-20, 26-30",
    "metadata": {
      "stage": 8,
      "stage_title": "The Broken Chain",
      "level_title": "Broken Ministry & Succession",
      "chain_type": "wrong_chain",
      "chain_nodes": [
        "Saul",
        "David",
        "Solomon",
        "Jeroboam over all 12 tribes [BROKEN]"
      ],
      "broken_link_index": 3,
      "is_typed": false,
      "difficulty": "Moderate",
      "timerSeconds": 45,
      "points": 100,
      "testament": "Old Testament",
      "hint1": "Solomon’s son was Rehoboam, whose harsh answer divided the kingdom.",
      "hint2": "1 Kings 12:16: \"What portion have we in David? neither have we inheritance in the son of Jesse.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l39-c5",
    "game_slug": "bible-chain-challenge",
    "level": 39,
    "challenge_index": 5,
    "question_text": "BROKEN CHAIN DETECTIVE: Examine this Major Prophets chronological chain:\nIsaiah (Hezekiah’s reign) → Jeremiah (Fall of Jerusalem) → Ezekiel (Chebar river in Babylon) → Daniel (Babylon & Persia) → Jonah\nWhy does Jonah break this Major Prophets sequence?",
    "options": [
      "Jonah was an 8th-century Minor Prophet to Nineveh, centuries before Daniel and Ezekiel",
      "Jonah was a king of Moab",
      "Jonah never wrote a book",
      "Jonah lived after Malachi"
    ],
    "correct_answer": "Jonah was an 8th-century Minor Prophet to Nineveh, centuries before Daniel and Ezekiel",
    "explanation": "Isaiah, Jeremiah, Ezekiel, and Daniel constitute the four Major Prophets in chronological order surrounding the exile. Jonah was a Minor Prophet who prophesied during the reign of Jeroboam II of Israel in the 8th century BC (2 Kings 14:25). Jonah is the broken link!",
    "reference": "2 Kings 14:25; Jonah 1:1; Daniel 1:1",
    "metadata": {
      "stage": 8,
      "stage_title": "The Broken Chain",
      "level_title": "Broken Ministry & Succession",
      "chain_type": "wrong_chain",
      "chain_nodes": [
        "Isaiah",
        "Jeremiah",
        "Ezekiel",
        "Daniel",
        "Jonah [BROKEN]"
      ],
      "broken_link_index": 4,
      "is_typed": false,
      "difficulty": "Moderate",
      "timerSeconds": 45,
      "points": 100,
      "testament": "Old Testament",
      "hint1": "Jonah ministered in Nineveh in 2 Kings 14, long before the Babylonian captivity.",
      "hint2": "2 Kings 14:25: \"according to the word of the LORD God of Israel, which he spake by the hand of his servant Jonah.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l40-c1",
    "game_slug": "bible-chain-challenge",
    "level": 40,
    "challenge_index": 1,
    "question_text": "DEEP SCRIPTURE STUDY: In Matthew 1:8, compare the royal genealogy with 1 Chronicles 3:11-12:\nMatthew 1:8: \"and Joram begat Ozias (Uzziah).\"\n1 Chronicles 3:11-12 reveals that THREE consecutive kings of Judah were intentionally omitted between Joram and Uzziah because of Athaliah’s idolatrous curse. Name these three omitted kings:",
    "options": [
      "Ahaziah, Joash, and Amaziah",
      "Hezekiah, Manasseh, and Amon",
      "Jehoahaz, Jehoiakim, and Zedekiah",
      "Asa, Jehoshaphat, and Joram"
    ],
    "correct_answer": "Ahaziah, Joash, and Amaziah",
    "explanation": "1 Chronicles 3:11-12 records: \"Joram his son, Ahaziah his son, Joash his son, Amaziah his son, Azariah (Uzziah) his son.\" Matthew deliberately compresses the royal line into three 14-generation periods, omitting Ahaziah, Joash, and Amaziah (the three generations descended from Ahab and Jezebel’s daughter Athaliah).",
    "reference": "Matthew 1:8; 1 Chronicles 3:11-12; 2 Kings 8:25; 11:2; 14:1",
    "metadata": {
      "stage": 8,
      "stage_title": "The Broken Chain",
      "level_title": "Deep Scripture Study: Forensic Genealogies",
      "chain_type": "wrong_chain",
      "chain_nodes": [
        "Joram",
        "Omitted generation 1",
        "Omitted generation 2",
        "Omitted generation 3",
        "Uzziah"
      ],
      "is_typed": false,
      "difficulty": "Difficult",
      "timerSeconds": 90,
      "points": 150,
      "testament": "New Testament",
      "dossier": "Matthew 1:8 omits three kings of Judah to structure the genealogy into three sets of 14 generations.",
      "study_mode": true,
      "hint1": "Slain by Jehu, hidden in the temple as a baby, and assassinated at Lachish.",
      "hint2": "1 Chronicles 3:11-12: \"Ahaziah his son, Joash his son, Amaziah his son.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l40-c2",
    "game_slug": "bible-chain-challenge",
    "level": 40,
    "challenge_index": 2,
    "question_text": "DEEP SCRIPTURE STUDY: In Jeremiah 22:24-30, God pronounced a permanent curse upon King Coniah (Jeconiah / Jehoiachin): \"Write ye this man childless, a man that shall not prosper in his days: for no man of his seed shall prosper, sitting upon the throne of David.\" How does the genealogy in Luke 3 bypass this blood curse while preserving Christ’s legal right to David’s throne?",
    "options": [
      "Luke traces Jesus through David’s son Nathan, rather than Solomon and Jeconiah",
      "Luke skips David completely",
      "Luke traces Jesus through Aaron the high priest",
      "Luke traces Jesus through King Saul"
    ],
    "correct_answer": "Luke traces Jesus through David’s son Nathan, rather than Solomon and Jeconiah",
    "explanation": "Matthew 1 traces Joseph’s royal legal line through Solomon and Jeconiah (establishing the royal title). Luke 3:31 traces Mary’s physical bloodline through Nathan the son of David (\"which was the son of Nathan, which was the son of David\"), completely bypassing Jeconiah’s blood curse in Jeremiah 22:30!",
    "reference": "Jeremiah 22:28-30; Matthew 1:11-12; Luke 3:23-31",
    "metadata": {
      "stage": 8,
      "stage_title": "The Broken Chain",
      "level_title": "Deep Scripture Study: Forensic Genealogies",
      "chain_type": "old_to_new",
      "chain_nodes": [
        "Jeremiah 22:30 (Coniah blood curse)",
        "Solomonic royal line in Matthew 1",
        "Luke 3 genealogy",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Difficult",
      "timerSeconds": 90,
      "points": 150,
      "testament": "New Testament",
      "dossier": "Jeremiah 22:30: \"for no man of his seed shall prosper, sitting upon the throne of David, and ruling any more in Judah.\"",
      "study_mode": true,
      "hint1": "David’s son Nathan, not the prophet Nathan.",
      "hint2": "Luke 3:31: \"which was the son of Nathan, which was the son of David.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l40-c3",
    "game_slug": "bible-chain-challenge",
    "level": 40,
    "challenge_index": 3,
    "question_text": "Type the name of the missing father in Luke 3:35-36 who appears in the Septuagint/Luke genealogy between Arphaxad and Sala, but is absent from the Hebrew Masoretic Genesis 11 text:",
    "options": [
      "Cainan",
      "Peleg",
      "Reu",
      "Serug"
    ],
    "correct_answer": "Cainan",
    "explanation": "Luke 3:35-36 records: \"which was the son of Sala, which was the son of Cainan, which was the son of Arphaxad.\" This second Cainan appears in the Greek Septuagint genealogy of Genesis 11:12, while the Hebrew Masoretic text moves directly from Arphaxad to Salah.",
    "reference": "Genesis 11:12 (LXX); Luke 3:35-36",
    "metadata": {
      "stage": 8,
      "stage_title": "The Broken Chain",
      "level_title": "Deep Scripture Study: Forensic Genealogies",
      "chain_type": "missing_link",
      "chain_nodes": [
        "Arphaxad",
        "?",
        "Sala",
        "Heber"
      ],
      "is_typed": true,
      "acceptedAlternatives": [
        "Kainan"
      ],
      "difficulty": "Difficult",
      "timerSeconds": 75,
      "points": 150,
      "testament": "New Testament",
      "hint1": "Six-letter name beginning with C (spelled with K in Greek).",
      "hint2": "Luke 3:36: \"which was the son of Cainan, which was the son of Arphaxad.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l40-c4",
    "game_slug": "bible-chain-challenge",
    "level": 40,
    "challenge_index": 4,
    "question_text": "DEEP SCRIPTURE STUDY: In 1 Chronicles 2:13-15, David is listed as the SEVENTH son of Jesse. But in 1 Samuel 16:10-11 and 17:12, how many sons did Jesse have when Samuel visited Bethlehem?",
    "options": [
      "Eight sons (one died without issue before the Chronicles records)",
      "Seven sons",
      "Twelve sons",
      "Ten sons"
    ],
    "correct_answer": "Eight sons (one died without issue before the Chronicles records)",
    "explanation": "1 Samuel 16:10 and 17:12 state that Jesse had eight sons (\"and Jesse had eight sons: and the man went among men for an old man in the days of Saul\"). In 1 Chronicles 2:13-15, only seven are numbered (Eliab, Abinadab, Shimma, Nethaneel, Raddai, Ozem, and David the seventh) because one son died childless, leaving no lineage for the post-exilic tribal registry.",
    "reference": "1 Samuel 16:10-11; 17:12; 1 Chronicles 2:13-15",
    "metadata": {
      "stage": 8,
      "stage_title": "The Broken Chain",
      "level_title": "Deep Scripture Study: Forensic Genealogies",
      "chain_type": "wrong_chain",
      "chain_nodes": [
        "1 Samuel 16 (Eight sons)",
        "Seven pass before Samuel",
        "David fetched from field",
        "1 Chronicles 2:15 numbers David 7th",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Difficult",
      "timerSeconds": 90,
      "points": 150,
      "testament": "Old Testament",
      "dossier": "1 Samuel 17:12: \"Now David was the son of that Ephrathite of Beth-lehem-judah, whose name was Jesse; and he had eight sons.\"",
      "study_mode": true,
      "hint1": "Jesse originally had eight sons in the narrative of 1 Samuel 16–17.",
      "hint2": "1 Samuel 17:12: \"and he had eight sons.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l40-c5",
    "game_slug": "bible-chain-challenge",
    "level": 40,
    "challenge_index": 5,
    "question_text": "DEEP SCRIPTURE STUDY: In Genesis 46:27, the souls of the house of Jacob which came into Egypt are counted as threescore and ten (70). Yet in Acts 7:14, Stephen testifies that Joseph called his father Jacob and all his kindred, \"threescore and fifteen (75) souls.\" Why does Stephen state 75 souls?",
    "options": [
      "Stephen quoted the Greek Septuagint (LXX), which added five grandsons/great-grandsons of Joseph",
      "Stephen made an arithmetic error",
      "Stephen included Moses and Aaron",
      "Stephen counted five Egyptian servants"
    ],
    "correct_answer": "Stephen quoted the Greek Septuagint (LXX), which added five grandsons/great-grandsons of Joseph",
    "explanation": "Genesis 46:27 in the Hebrew Masoretic text numbers 70 souls. However, the Septuagint (LXX) version of Genesis 46:20-27 and Exodus 1:5 explicitly adds the sons and grandsons of Manasseh and Ephraim (Machir, Gilead, Shuthelah, Tahath, and Eden), totaling 75. Stephen, a Hellenistic deacon, accurately quoted the inspired Septuagint text in common Greek circulation!",
    "reference": "Genesis 46:27; Exodus 1:5 (LXX); Acts 7:14",
    "metadata": {
      "stage": 8,
      "stage_title": "The Broken Chain",
      "level_title": "Deep Scripture Study: Forensic Genealogies",
      "chain_type": "old_to_new",
      "chain_nodes": [
        "Genesis 46:27 (Hebrew 70)",
        "Septuagint adds Joseph’s descendants",
        "Stephen’s speech in Acts 7:14",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Difficult",
      "timerSeconds": 90,
      "points": 150,
      "testament": "New Testament",
      "dossier": "Acts 7:14: \"Then sent Joseph, and called his father Jacob to him, and all his kindred, threescore and fifteen souls.\"",
      "study_mode": true,
      "hint1": "The Greek translation of the Old Testament used by early Christians.",
      "hint2": "Acts 7:14: \"threescore and fifteen souls.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l41-c1",
    "game_slug": "bible-chain-challenge",
    "level": 41,
    "challenge_index": 1,
    "question_text": "Follow the Ethiopian rescuer chain: In Jeremiah 38, the princes of Judah cast prophet Jeremiah into the dungeon of Malchiah where he sank in the mire. Which royal Ethiopian eunuch obtained permission from King Zedekiah to rescue Jeremiah using thirty men and old cast clouts and rotten rags?",
    "options": [
      "Ebed-melech",
      "Pashur",
      "Seraiah",
      "Gedaliah"
    ],
    "correct_answer": "Ebed-melech",
    "explanation": "Jeremiah in miry dungeon → Ebed-melech the Ethiopian appeals to King Zedekiah at the gate of Benjamin → Uses 30 men and old cords with rotten rags under armholes to draw Jeremiah up → God promises Ebed-melech his life for a prey because he put his trust in the LORD (Jeremiah 38:7-13; 39:15-18).",
    "reference": "Jeremiah 38:7-13; 39:15-18",
    "metadata": {
      "stage": 9,
      "stage_title": "Expert Chain Challenge",
      "level_title": "Obscure Old Testament Figures",
      "chain_type": "character_chain",
      "chain_nodes": [
        "Miry dungeon of Malchiah",
        "Old rags under armholes",
        "Promise of life for a prey",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Difficult",
      "timerSeconds": 75,
      "points": 150,
      "testament": "Old Testament",
      "hint1": "His name means \"servant of the king\".",
      "hint2": "Jeremiah 38:7: \"Now when Ebed-melech the Ethiopian, one of the eunuchs which was in the king’s house, heard that they had put Jeremiah in the dungeon...\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l41-c2",
    "game_slug": "bible-chain-challenge",
    "level": 41,
    "challenge_index": 2,
    "question_text": "Follow the Tabernacle master craftsmen chain: The LORD called by name a master artisan from the tribe of Judah and filled him with the Spirit of God in wisdom and workmanship to design the sanctuary. What was the name of this son of Uri, the son of Hur?",
    "options": [
      "Bezaleel (Bezalel)",
      "Aholiab",
      "Hiram",
      "Eleazar"
    ],
    "correct_answer": "Bezaleel (Bezalel)",
    "explanation": "Exodus 31:1-6 reveals the master artisan of the Tabernacle: Bezaleel the son of Uri, the son of Hur, of the tribe of Judah, assisted by Aholiab the son of Ahisamach, of the tribe of Dan.",
    "reference": "Exodus 31:1-6; 35:30-35",
    "metadata": {
      "stage": 9,
      "stage_title": "Expert Chain Challenge",
      "level_title": "Obscure Old Testament Figures",
      "chain_type": "character_chain",
      "chain_nodes": [
        "Tribe of Judah",
        "Son of Uri, son of Hur",
        "Spirit-filled craftsman of Ark",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Moderate",
      "timerSeconds": 60,
      "points": 100,
      "testament": "Old Testament",
      "hint1": "His name means \"in the shadow of God\".",
      "hint2": "Exodus 31:2: \"See, I have called by name Bezaleel the son of Uri, the son of Hur, of the tribe of Judah.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l41-c3",
    "game_slug": "bible-chain-challenge",
    "level": 41,
    "challenge_index": 3,
    "question_text": "Type the name of Bezaleel’s chief assistant from the tribe of Dan, appointed by God to engrave and embroider in blue, purple, scarlet, and fine linen:",
    "options": [
      "Aholiab",
      "Ahisamach",
      "Hur",
      "Ephron"
    ],
    "correct_answer": "Aholiab",
    "explanation": "Exodus 31:6 and 35:34: God appointed with Bezaleel \"Aholiab, the son of Ahisamach, of the tribe of Dan: and in the hearts of all that are wise hearted I have put wisdom, that they may make all that I have commanded thee.\"",
    "reference": "Exodus 31:6; 35:34; 38:23",
    "metadata": {
      "stage": 9,
      "stage_title": "Expert Chain Challenge",
      "level_title": "Obscure Old Testament Figures",
      "chain_type": "character_chain",
      "chain_nodes": [
        "Bezaleel of Judah",
        "Tribe of Dan assistant",
        "Son of Ahisamach",
        "?"
      ],
      "is_typed": true,
      "acceptedAlternatives": [
        "Oholiab"
      ],
      "difficulty": "Difficult",
      "timerSeconds": 75,
      "points": 150,
      "testament": "Old Testament",
      "hint1": "Seven-letter name beginning with A (or O in modern translations).",
      "hint2": "Exodus 31:6: \"And I, behold, I have given with him Aholiab, the son of Ahisamach, of the tribe of Dan.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l41-c4",
    "game_slug": "bible-chain-challenge",
    "level": 41,
    "challenge_index": 4,
    "question_text": "Follow the prophetess consultation chain: In 2 Kings 22, when Hilkiah the high priest found the Book of the Law in the temple, King Josiah commanded him to inquire of the LORD. Which prophetess, wife of Shallum keeper of the wardrobe, who dwelt in Jerusalem in the college, delivered the divine oracle?",
    "options": [
      "Huldah",
      "Deborah",
      "Miriam",
      "Noadiah"
    ],
    "correct_answer": "Huldah",
    "explanation": "2 Kings 22:14-20: Hilkiah, Ahikam, Achbor, Shaphan, and Asahiah went unto Huldah the prophetess, the wife of Shallum keeper of the wardrobe (she dwelt in Jerusalem in the college). She prophesied judgment upon Jerusalem, but promised Josiah peace because his heart was tender and he humbled himself before God.",
    "reference": "2 Kings 22:14-20; 2 Chronicles 34:22-28",
    "metadata": {
      "stage": 9,
      "stage_title": "Expert Chain Challenge",
      "level_title": "Obscure Old Testament Figures",
      "chain_type": "character_chain",
      "chain_nodes": [
        "Book of the Law found",
        "Hilkiah consults college",
        "Wife of Shallum keeper of wardrobe",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Moderate",
      "timerSeconds": 60,
      "points": 100,
      "testament": "Old Testament",
      "hint1": "Six-letter name beginning with H.",
      "hint2": "2 Kings 22:14: \"went unto Huldah the prophetess, the wife of Shallum.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l41-c5",
    "game_slug": "bible-chain-challenge",
    "level": 41,
    "challenge_index": 5,
    "question_text": "Follow the heroic midwives chain: In Exodus 1:15-21, Pharaoh ordered the Hebrew midwives to kill all newborn Hebrew boys on the birthstools. Name these two courageous midwives who feared God and preserved the male infants alive:",
    "options": [
      "Shiphrah and Puah",
      "Jochebed and Miriam",
      "Zilpah and Bilhah",
      "Mahlah and Noah"
    ],
    "correct_answer": "Shiphrah and Puah",
    "explanation": "Exodus 1:15-21: The king of Egypt spake to the Hebrew midwives, of which the name of the one was Shiphrah, and the name of the other Puah. Because they feared God and obeyed Him rather than Pharaoh, God dealt well with them and made them houses.",
    "reference": "Exodus 1:15-21",
    "metadata": {
      "stage": 9,
      "stage_title": "Expert Chain Challenge",
      "level_title": "Obscure Old Testament Figures",
      "chain_type": "character_chain",
      "chain_nodes": [
        "Pharaoh’s murderous decree",
        "Birthstools defied",
        "God makes them houses",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Moderate",
      "timerSeconds": 60,
      "points": 100,
      "testament": "Old Testament",
      "hint1": "Their names mean \"brightness/beauty\" and \"splendid/blooming\".",
      "hint2": "Exodus 1:15: \"the name of the one was Shiphrah, and the name of the other Puah.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l42-c1",
    "game_slug": "bible-chain-challenge",
    "level": 42,
    "challenge_index": 1,
    "question_text": "Follow the maternal vigil chain: In 2 Samuel 21, the Gibeonites demanded seven sons of Saul to hang them for Saul’s slaughter. Which concubine of Saul took sackcloth and spread it upon the rock, keeping vigil day and night to keep the birds of the air and beasts of the field from touching the bodies of her sons?",
    "options": [
      "Rizpah daughter of Aiah",
      "Tamar daughter of David",
      "Michal daughter of Saul",
      "Abigail"
    ],
    "correct_answer": "Rizpah daughter of Aiah",
    "explanation": "2 Samuel 21:8-14: Rizpah the daughter of Aiah took sackcloth, and spread it for her upon the rock, from the beginning of harvest until water dropped upon them out of heaven, suffering neither birds of the air to rest on them by day, nor the beasts of the field by night. David heard of her devotion and buried the bones honourably with Saul and Jonathan.",
    "reference": "2 Samuel 21:8-14; 3:7",
    "metadata": {
      "stage": 9,
      "stage_title": "Expert Chain Challenge",
      "level_title": "Forgotten Women of Faith & Valor",
      "chain_type": "character_chain",
      "chain_nodes": [
        "Gibeonite vengeance",
        "Seven sons hanged on hill",
        "Sackcloth on rock vigil",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Difficult",
      "timerSeconds": 75,
      "points": 150,
      "testament": "Old Testament",
      "hint1": "Daughter of Aiah and mother of Armoni and Mephibosheth.",
      "hint2": "2 Samuel 21:10: \"And Rizpah the daughter of Aiah took sackcloth, and spread it for her upon the rock.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l42-c2",
    "game_slug": "bible-chain-challenge",
    "level": 42,
    "challenge_index": 2,
    "question_text": "Follow the inheritance precedent chain: In Numbers 27, five sisters stood before Moses, Eleazar the priest, the princes, and all the congregation, arguing that their father’s name should not be done away because he had no son. Who was their father of the tribe of Manasseh?",
    "options": [
      "Zelophehad",
      "Hepher",
      "Gilead",
      "Machir"
    ],
    "correct_answer": "Zelophehad",
    "explanation": "Numbers 27:1-7: The daughters of Zelophehad, the son of Hepher, the son of Gilead, the son of Machir, the son of Manasseh (Mahlah, Noah, Hoglah, Milcah, and Tirzah) pleaded their case. The LORD told Moses: \"The daughters of Zelophehad speak right: thou shalt surely give them a possession of an inheritance.\"",
    "reference": "Numbers 27:1-7; Joshua 17:3-4",
    "metadata": {
      "stage": 9,
      "stage_title": "Expert Chain Challenge",
      "level_title": "Forgotten Women of Faith & Valor",
      "chain_type": "character_chain",
      "chain_nodes": [
        "Mahlah, Noah, Hoglah, Milcah, Tirzah",
        "Plea before door of tabernacle",
        "God commands inheritance law",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Moderate",
      "timerSeconds": 60,
      "points": 100,
      "testament": "Old Testament",
      "hint1": "A Manassite father whose five daughters established land rights for women in Israel.",
      "hint2": "Numbers 27:7: \"The daughters of Zelophehad speak right.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l42-c3",
    "game_slug": "bible-chain-challenge",
    "level": 42,
    "challenge_index": 3,
    "question_text": "Type the name of the northern city of Beth-maachah where a wise woman called out from the wall to General Joab, negotiating peace by delivering the head of the rebel Sheba son of Bichri:",
    "options": [
      "Abel",
      "Dan",
      "Hazor",
      "Tirzah"
    ],
    "correct_answer": "Abel",
    "explanation": "2 Samuel 20:14-22: Joab besieged Abel of Beth-maachah and battered the wall. A wise woman cried out: \"They were wont to speak in old time, saying, They shall surely ask counsel at Abel: and so they ended the matter.\" She persuaded the city to cut off Sheba’s head and throw it over the wall, saving the entire city.",
    "reference": "2 Samuel 20:15-22",
    "metadata": {
      "stage": 9,
      "stage_title": "Expert Chain Challenge",
      "level_title": "Forgotten Women of Faith & Valor",
      "chain_type": "name_to_event",
      "chain_nodes": [
        "Rebellion of Sheba",
        "Joab batters ramparts",
        "Wise woman negotiates head thrown over wall",
        "?"
      ],
      "is_typed": true,
      "acceptedAlternatives": [
        "Abel of Beth-maachah",
        "Abel-beth-maachah"
      ],
      "difficulty": "Difficult",
      "timerSeconds": 75,
      "points": 150,
      "testament": "Old Testament",
      "hint1": "Four-letter city name: A-B-E-L.",
      "hint2": "2 Samuel 20:15: \"and they came and besieged him in Abel of Beth-maachah.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l42-c4",
    "game_slug": "bible-chain-challenge",
    "level": 42,
    "challenge_index": 4,
    "question_text": "Follow the hospitable Shunammite chain: In 2 Kings 4, a prominent woman of Shunem urged her husband to build a small upper room on the wall for Elisha the holy man of God. Which four furnishings did she provide in that room?",
    "options": [
      "A bed, a table, a stool, and a candlestick",
      "An altar, an ark, a lamp, and incense",
      "A couch, a basin, a robe, and sandals",
      "A tent, a waterpot, an oven, and oil"
    ],
    "correct_answer": "A bed, a table, a stool, and a candlestick",
    "explanation": "2 Kings 4:9-10: \"Let us make a little chamber, I pray thee, on the wall; and let us set for him there a bed, and a table, and a stool, and a candlestick: and it shall be, when he cometh to us, that he shall turn in thither.\"",
    "reference": "2 Kings 4:8-10",
    "metadata": {
      "stage": 9,
      "stage_title": "Expert Chain Challenge",
      "level_title": "Forgotten Women of Faith & Valor",
      "chain_type": "name_to_event",
      "chain_nodes": [
        "Great woman of Shunem",
        "Chamber on the wall",
        "Four furnishings for Elisha",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Moderate",
      "timerSeconds": 60,
      "points": 100,
      "testament": "Old Testament",
      "hint1": "Four basic household items for rest, writing, sitting, and light.",
      "hint2": "2 Kings 4:10: \"a bed, and a table, and a stool, and a candlestick.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l42-c5",
    "game_slug": "bible-chain-challenge",
    "level": 42,
    "challenge_index": 5,
    "question_text": "Follow the Kenite tent deliverance: Sisera fled on foot to the tent of Jael, wife of Heber the Kenite. What drink did Jael give Sisera when he asked only for water, before driving the tent peg through his temples?",
    "options": [
      "Milk in a lordly dish (bottle of milk)",
      "Wine of Lebanon",
      "Honey and vinegar",
      "Olive oil"
    ],
    "correct_answer": "Milk in a lordly dish (bottle of milk)",
    "explanation": "Judges 4:19 and 5:25: \"He asked water, and she gave him milk; she brought forth butter in a lordly dish.\" She then covered him with a mantle, took a nail of the tent and a hammer, and smote the nail into his temples.",
    "reference": "Judges 4:17-21; 5:24-27",
    "metadata": {
      "stage": 9,
      "stage_title": "Expert Chain Challenge",
      "level_title": "Forgotten Women of Faith & Valor",
      "chain_type": "name_to_event",
      "chain_nodes": [
        "Sisera flees battle",
        "Tent of Heber the Kenite",
        "Bottle of milk and mantle",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Easy",
      "timerSeconds": 30,
      "points": 50,
      "testament": "Old Testament",
      "hint1": "Opened a bottle of milk and gave him drink.",
      "hint2": "Judges 4:19: \"And she opened a bottle of milk, and gave him drink, and covered him.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l43-c1",
    "game_slug": "bible-chain-challenge",
    "level": 43,
    "challenge_index": 1,
    "question_text": "Follow Paul’s Roman imprisonment refreshment chain: In 2 Timothy 1:16-18, all who were in Asia turned away from Paul. Which faithful believer did Paul pray mercy upon, testifying: \"he oft refreshed me, and was not ashamed of my chain: but, when he was in Rome, he sought me out very diligently, and found me\"?",
    "options": [
      "Onesiphorus",
      "Epaphras",
      "Tychicus",
      "Philemon"
    ],
    "correct_answer": "Onesiphorus",
    "explanation": "2 Timothy 1:16-18: \"The Lord give mercy unto the house of Onesiphorus; for he oft refreshed me, and was not ashamed of my chain: But, when he was in Rome, he sought me out very diligently, and found me. The Lord grant unto him that he may find mercy of the Lord in that day.\"",
    "reference": "2 Timothy 1:16-18; 4:19",
    "metadata": {
      "stage": 9,
      "stage_title": "Expert Chain Challenge",
      "level_title": "Obscure New Testament Figures",
      "chain_type": "character_chain",
      "chain_nodes": [
        "Asian believers turn away",
        "Not ashamed of Paul’s chain",
        "Sought Paul diligently in Rome",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Difficult",
      "timerSeconds": 75,
      "points": 150,
      "testament": "New Testament",
      "hint1": "His name means \"profit-bringer\", not to be confused with Onesimus.",
      "hint2": "2 Timothy 1:16: \"The Lord give mercy unto the house of Onesiphorus.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l43-c2",
    "game_slug": "bible-chain-challenge",
    "level": 43,
    "challenge_index": 2,
    "question_text": "Follow the intercessory giant chain: In Colossians 4:12, Paul commends a Colossian brother: \"who is one of you, a servant of Christ, saluteth you, always labouring fervently for you in prayers, that ye may stand perfect and complete in all the will of God.\" What was his name?",
    "options": [
      "Epaphras",
      "Tychicus",
      "Archippus",
      "Aristarchus"
    ],
    "correct_answer": "Epaphras",
    "explanation": "Colossians 1:7; 4:12-13 and Philemon 23 praise Epaphras, Paul’s dear fellowservant and fellowprisoner, who had great zeal for believers in Colosse, Laodicea, and Hierapolis.",
    "reference": "Colossians 1:7; 4:12-13; Philemon 23",
    "metadata": {
      "stage": 9,
      "stage_title": "Expert Chain Challenge",
      "level_title": "Obscure New Testament Figures",
      "chain_type": "character_chain",
      "chain_nodes": [
        "Founder of Colossian church",
        "Labouring fervently in prayers",
        "Zeal for Laodicea & Hierapolis",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Moderate",
      "timerSeconds": 60,
      "points": 100,
      "testament": "New Testament",
      "hint1": "Eight-letter Greek name starting with E.",
      "hint2": "Colossians 4:12: \"Epaphras, who is one of you, a servant of Christ, saluteth you.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l43-c3",
    "game_slug": "bible-chain-challenge",
    "level": 43,
    "challenge_index": 3,
    "question_text": "Type the name of the faithful amanuensis (scribe) who personally penned the Epistle to the Romans as Paul dictated it, adding his own greeting in Romans 16:22: \"I [ ? ], who wrote this epistle, salute you in the Lord\":",
    "options": [
      "Tertius",
      "Quartus",
      "Erastus",
      "Gaius"
    ],
    "correct_answer": "Tertius",
    "explanation": "Romans 16:22 preserves the unique personal voice of Paul’s secretary: \"I Tertius, who wrote this epistle, salute you in the Lord.\" His Latin name means \"third\".",
    "reference": "Romans 16:22",
    "metadata": {
      "stage": 9,
      "stage_title": "Expert Chain Challenge",
      "level_title": "Obscure New Testament Figures",
      "chain_type": "character_chain",
      "chain_nodes": [
        "Dictation of Romans in Corinth",
        "Personal greeting inserted",
        "Scribe of the epistle",
        "?"
      ],
      "is_typed": true,
      "acceptedAlternatives": [
        "Tertiou"
      ],
      "difficulty": "Moderate",
      "timerSeconds": 45,
      "points": 100,
      "testament": "New Testament",
      "hint1": "Latin name meaning \"the third\", seven letters: T-E-R-T-I-U-S.",
      "hint2": "Romans 16:22: \"I Tertius, who wrote this epistle, salute you in the Lord.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l43-c4",
    "game_slug": "bible-chain-challenge",
    "level": 43,
    "challenge_index": 4,
    "question_text": "Follow the Corinthian city official chain: In Romans 16:23, Paul sends greetings from his host Gaius and adds: \"[ ? ] the chamberlain (treasurer) of the city saluteth you, and Quartus a brother.\" Who was this civic official whose name was discovered in an ancient paving inscription in Corinth?",
    "options": [
      "Erastus",
      "Gallioc",
      "Crispus",
      "Sosthenes"
    ],
    "correct_answer": "Erastus",
    "explanation": "Romans 16:23 mentions \"Erastus the chamberlain of the city\" (public treasurer / aedile of Corinth). In 1929, an inscription was excavated at Corinth reading: \"Erastus in return for his aedileship laid this pavement at his own expense\" (confirming Romans 16:23; Acts 19:22; 2 Timothy 4:20).",
    "reference": "Romans 16:23; Acts 19:22; 2 Timothy 4:20",
    "metadata": {
      "stage": 9,
      "stage_title": "Expert Chain Challenge",
      "level_title": "Obscure New Testament Figures",
      "chain_type": "character_chain",
      "chain_nodes": [
        "Host Gaius in Corinth",
        "Chamberlain of the city",
        "Pavement inscription discovered",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Difficult",
      "timerSeconds": 75,
      "points": 150,
      "testament": "New Testament",
      "hint1": "Seven-letter Greek name starting with E.",
      "hint2": "Romans 16:23: \"Erastus the chamberlain of the city saluteth you, and Quartus a brother.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l43-c5",
    "game_slug": "bible-chain-challenge",
    "level": 43,
    "challenge_index": 5,
    "question_text": "Follow the Antioch prophets and teachers chain: In Acts 13:1, five leaders are named in the church at Antioch: Barnabas, Simeon that was called Niger, Lucius of Cyrene, and Saul. Who was the fifth leader, noted as having been brought up with Herod the tetrarch?",
    "options": [
      "Manaen",
      "Agabus",
      "Barsabas",
      "Alexander"
    ],
    "correct_answer": "Manaen",
    "explanation": "Acts 13:1 lists: \"Barnabas, and Simeon that was called Niger, and Lucius of Cyrene, and Manaen, which had been brought up with Herod the tetrarch, and Saul.\" Manaen (foster brother / childhood companion of Herod Antipas) turned to Christ while Herod murdered John the Baptist!",
    "reference": "Acts 13:1",
    "metadata": {
      "stage": 9,
      "stage_title": "Expert Chain Challenge",
      "level_title": "Obscure New Testament Figures",
      "chain_type": "character_chain",
      "chain_nodes": [
        "Church at Antioch",
        "Five prophets & teachers",
        "Brought up with Herod Antipas",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Difficult",
      "timerSeconds": 75,
      "points": 150,
      "testament": "New Testament",
      "hint1": "Six-letter name beginning with M: M-A-N-A-E-N.",
      "hint2": "Acts 13:1: \"and Manaen, which had been brought up with Herod the tetrarch.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l44-c1",
    "game_slug": "bible-chain-challenge",
    "level": 44,
    "challenge_index": 1,
    "question_text": "Follow the Macedonian companion chain: A faithful Christian of Thessalonica accompanied Paul on his third journey, was dragged into the violent mob in the theater at Ephesus, sailed with Paul on the voyage to Rome, and is called Paul’s \"fellowprisoner\" in Colossians 4:10. Who was he?",
    "options": [
      "Aristarchus",
      "Secundus",
      "Gaius of Derbe",
      "Trophimus"
    ],
    "correct_answer": "Aristarchus",
    "explanation": "Acts 19:29; 20:4; 27:2; Colossians 4:10 and Philemon 24 track Aristarchus: A Macedonian of Thessalonica seized during the Ephesian silversmith riot, sailed with Paul toward Rome, and shared Paul’s imprisonment.",
    "reference": "Acts 19:29; 20:4; 27:2; Colossians 4:10",
    "metadata": {
      "stage": 9,
      "stage_title": "Expert Chain Challenge",
      "level_title": "Apostolic Co-Laborers & Witnesses",
      "chain_type": "character_chain",
      "chain_nodes": [
        "Thessalonian believer",
        "Ephesian theater riot victim",
        "Voyage to Rome companion",
        "Colossians fellowprisoner",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Difficult",
      "timerSeconds": 75,
      "points": 150,
      "testament": "New Testament",
      "hint1": "Eleven-letter Greek name starting with Ar.",
      "hint2": "Colossians 4:10: \"Aristarchus my fellowprisoner saluteth you.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l44-c2",
    "game_slug": "bible-chain-challenge",
    "level": 44,
    "challenge_index": 2,
    "question_text": "Follow the Roman sisterhood of ministry chain: In Romans 16:12, Paul sends personal greetings to three hardworking women in the church at Rome. Two share rhyming names and \"labour in the Lord\", while the third is commended as \"the beloved [ ? ], which laboured much in the Lord.\" Who was she?",
    "options": [
      "Persis",
      "Tryphena",
      "Tryphosa",
      "Phoebe"
    ],
    "correct_answer": "Persis",
    "explanation": "Romans 16:12: \"Salute Tryphena and Tryphosa, who labour in the Lord. Salute the beloved Persis, which laboured much in the Lord.\" While Tryphena and Tryphosa laboured in the present, Persis is praised for having laboured much (past tense, indicating heroic long-term service).",
    "reference": "Romans 16:12",
    "metadata": {
      "stage": 9,
      "stage_title": "Expert Chain Challenge",
      "level_title": "Apostolic Co-Laborers & Witnesses",
      "chain_type": "character_chain",
      "chain_nodes": [
        "Tryphena & Tryphosa",
        "Labour in the Lord",
        "The beloved who laboured much",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Difficult",
      "timerSeconds": 75,
      "points": 150,
      "testament": "New Testament",
      "hint1": "Six-letter name meaning \"a Persian woman\".",
      "hint2": "Romans 16:12: \"Salute the beloved Persis, which laboured much in the Lord.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l44-c3",
    "game_slug": "bible-chain-challenge",
    "level": 44,
    "challenge_index": 3,
    "question_text": "Type the name of the ruler of the synagogue at Corinth who was beaten by the Greeks before the judgment seat of proconsul Gallio in Acts 18:17, and later appears as Paul’s co-sender in 1 Corinthians 1:1:",
    "options": [
      "Sosthenes",
      "Crispus",
      "Alexander",
      "Jason"
    ],
    "correct_answer": "Sosthenes",
    "explanation": "Acts 18:17 records that Greeks took Sosthenes, the chief ruler of the synagogue, and beat him before the judgment seat while Gallio cared for none of those things. In 1 Corinthians 1:1, this same Sosthenes is now a Christian brother co-sending the letter: \"Paul, called to be an apostle... and Sosthenes our brother.\"",
    "reference": "Acts 18:17; 1 Corinthians 1:1",
    "metadata": {
      "stage": 9,
      "stage_title": "Expert Chain Challenge",
      "level_title": "Apostolic Co-Laborers & Witnesses",
      "chain_type": "character_chain",
      "chain_nodes": [
        "Corinthian synagogue ruler",
        "Beaten before Gallio’s judgment seat",
        "Co-sender of 1 Corinthians",
        "?"
      ],
      "is_typed": true,
      "acceptedAlternatives": [
        "Sosthenes our brother"
      ],
      "difficulty": "Difficult",
      "timerSeconds": 75,
      "points": 150,
      "testament": "New Testament",
      "hint1": "Nine-letter Greek name starting with S.",
      "hint2": "1 Corinthians 1:1: \"Paul... and Sosthenes our brother.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l44-c4",
    "game_slug": "bible-chain-challenge",
    "level": 44,
    "challenge_index": 4,
    "question_text": "Follow the false accusation chain: In Acts 21, hostile Asian Jews stirred up the multitude in Jerusalem, crying out that Paul had brought Greeks into the temple and polluted the holy place. Which Ephesian disciple had they previously seen with Paul in the city and assumed was brought into the temple?",
    "options": [
      "Trophimus",
      "Tychicus",
      "Erastus",
      "Aristarchus"
    ],
    "correct_answer": "Trophimus",
    "explanation": "Acts 21:29: \"(For they had seen before with him in the city Trophimus an Ephesian, whom they supposed that Paul had brought into the temple.)\" Later in 2 Timothy 4:20, Paul notes: \"Trophimus have I left at Miletum sick.\"",
    "reference": "Acts 20:4; 21:29; 2 Timothy 4:20",
    "metadata": {
      "stage": 9,
      "stage_title": "Expert Chain Challenge",
      "level_title": "Apostolic Co-Laborers & Witnesses",
      "chain_type": "character_chain",
      "chain_nodes": [
        "Ephesian traveling companion",
        "Seen in Jerusalem streets",
        "Temple pollution accusation",
        "Left at Miletum sick",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Difficult",
      "timerSeconds": 75,
      "points": 150,
      "testament": "New Testament",
      "hint1": "Nine-letter name starting with Tr: T-R-O-P-H-I-M-U-S.",
      "hint2": "Acts 21:29: \"Trophimus an Ephesian, whom they supposed that Paul had brought into the temple.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l44-c5",
    "game_slug": "bible-chain-challenge",
    "level": 44,
    "challenge_index": 5,
    "question_text": "Follow the prophetic sign chain: A prophet from Judea named Agabus came to Antioch foretelling a worldwide drought. Years later at Caesarea, which dramatic prophetic act did Agabus perform using Paul’s girdle (belt)?",
    "options": [
      "Bound his own hands and feet, declaring the Jews at Jerusalem would so bind the owner of the girdle",
      "Cast it into the sea",
      "Burned it with fire on the hearth",
      "Cut it into twelve pieces"
    ],
    "correct_answer": "Bound his own hands and feet, declaring the Jews at Jerusalem would so bind the owner of the girdle",
    "explanation": "Acts 21:10-11: \"there came down from Judaea a certain prophet, named Agabus. And when he was come unto us, he took Paul’s girdle, and bound his own hands and feet, and said, Thus saith the Holy Ghost, So shall the Jews at Jerusalem bind the man that owneth this girdle, and shall deliver him into the hands of the Gentiles.\"",
    "reference": "Acts 11:27-28; 21:10-11",
    "metadata": {
      "stage": 9,
      "stage_title": "Expert Chain Challenge",
      "level_title": "Apostolic Co-Laborers & Witnesses",
      "chain_type": "name_to_event",
      "chain_nodes": [
        "Antioch famine foretold",
        "Caesarea visit",
        "Takes Paul’s girdle",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Moderate",
      "timerSeconds": 60,
      "points": 100,
      "testament": "New Testament",
      "hint1": "Acted out the binding of hands and feet.",
      "hint2": "Acts 21:11: \"he took Paul’s girdle, and bound his own hands and feet.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l45-c1",
    "game_slug": "bible-chain-challenge",
    "level": 45,
    "challenge_index": 1,
    "question_text": "DEEP SCRIPTURE STUDY: Read Acts 8:26-39.\nAn angel commands Philip to leave Samaria and go south to the desert road from Jerusalem to Gaza. Who was the high royal official in the chariot, who was chief treasurer under which Ethiopian queen?",
    "options": [
      "Candace",
      "Sheba",
      "Jezebel",
      "Athaliah"
    ],
    "correct_answer": "Candace",
    "explanation": "Acts 8:27 identifies the royal office: \"a man of Ethiopia, an eunuch of great authority under Candace queen of the Ethiopians, who had the charge of all her treasure, and had come to Jerusalem for to worship.\"",
    "reference": "Acts 8:27",
    "metadata": {
      "stage": 9,
      "stage_title": "Expert Chain Challenge",
      "level_title": "Deep Scripture Study: The Ethiopian Eunuch",
      "chain_type": "character_chain",
      "chain_nodes": [
        "Samaria revival departed",
        "Desert road to Gaza",
        "Chief treasurer of queen",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Moderate",
      "timerSeconds": 90,
      "points": 100,
      "testament": "New Testament",
      "dossier": "Acts 8:26-39 records the Spirit-led divine appointment between Philip the evangelist and the Ethiopian royal treasurer.",
      "study_mode": true,
      "hint1": "Seven-letter dynastic title/name of the queen of the Ethiopians: C-A-N-D-A-C-E.",
      "hint2": "Acts 8:27: \"under Candace queen of the Ethiopians.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l45-c2",
    "game_slug": "bible-chain-challenge",
    "level": 45,
    "challenge_index": 2,
    "question_text": "DEEP SCRIPTURE STUDY: In Acts 8:29-30, what did the Holy Spirit command Philip, and what question did Philip ask when he heard the eunuch reading Esaias (Isaiah)?",
    "options": [
      "\"Go near, and join thyself to this chariot\" — \"Understandest thou what thou readest?\"",
      "\"Flee into the desert\" — \"Who gave thee this book?\"",
      "\"Command him to halt\" — \"Why weepest thou?\"",
      "\"Anoint him with oil\" — \"Art thou a Hebrew?\""
    ],
    "correct_answer": "\"Go near, and join thyself to this chariot\" — \"Understandest thou what thou readest?\"",
    "explanation": "Acts 8:29-30: \"Then the Spirit said unto Philip, Go near, and join thyself to this chariot. And Philip ran thither to him, and heard him read the prophet Esaias, and said, Understandest thou what thou readest? And he said, How can I, except some man should guide me?\"",
    "reference": "Acts 8:29-31",
    "metadata": {
      "stage": 9,
      "stage_title": "Expert Chain Challenge",
      "level_title": "Deep Scripture Study: The Ethiopian Eunuch",
      "chain_type": "scripture_chain",
      "chain_nodes": [
        "Spirit speaks",
        "Chariot overtaken",
        "First question asked",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Moderate",
      "timerSeconds": 75,
      "points": 100,
      "testament": "New Testament",
      "dossier": "Acts 8:30: \"Understandest thou what thou readest? And he said, How can I, except some man should guide me?\"",
      "study_mode": true,
      "hint1": "A four-word Greek question inquiring about comprehension.",
      "hint2": "Acts 8:30: \"and said, Understandest thou what thou readest?\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l45-c3",
    "game_slug": "bible-chain-challenge",
    "level": 45,
    "challenge_index": 3,
    "question_text": "Type the famous confession of faith made by the Ethiopian eunuch in Acts 8:37 before Philip baptized him in the water: \"I believe that Jesus Christ is the [ ? ]\":",
    "options": [
      "Son of God",
      "Lord of all",
      "King of Israel",
      "Savior of the world"
    ],
    "correct_answer": "Son of God",
    "explanation": "Acts 8:37 preserves the great baptismal confession: \"And Philip said, If thou believest with all thine heart, thou mayest. And he answered and said, I believe that Jesus Christ is the Son of God.\"",
    "reference": "Acts 8:36-37",
    "metadata": {
      "stage": 9,
      "stage_title": "Expert Chain Challenge",
      "level_title": "Deep Scripture Study: The Ethiopian Eunuch",
      "chain_type": "scripture_chain",
      "chain_nodes": [
        "See, here is water",
        "If thou believest with all thine heart",
        "Confession of faith",
        "?"
      ],
      "is_typed": true,
      "acceptedAlternatives": [
        "son of God",
        "Son of God."
      ],
      "difficulty": "Easy",
      "timerSeconds": 45,
      "points": 50,
      "testament": "New Testament",
      "hint1": "Three words: Son of ____.",
      "hint2": "Acts 8:37: \"I believe that Jesus Christ is the Son of God.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l45-c4",
    "game_slug": "bible-chain-challenge",
    "level": 45,
    "challenge_index": 4,
    "question_text": "DEEP SCRIPTURE STUDY: In Acts 8:39-40, when they came up out of the water, the Spirit of the Lord caught away Philip so that the eunuch saw him no more and went on his way rejoicing. At which coastal city (ancient Philistine Ashdod) was Philip next found preaching?",
    "options": [
      "Azotus",
      "Caesarea",
      "Joppa",
      "Gaza"
    ],
    "correct_answer": "Azotus",
    "explanation": "Acts 8:39-40: \"And when they were come up out of the water, the Spirit of the Lord caught away Philip, that the eunuch saw him no more: and he went on his way rejoicing. But Philip was found at Azotus: and passing through he preached in all the cities, till he came to Caesarea.\"",
    "reference": "Acts 8:39-40",
    "metadata": {
      "stage": 9,
      "stage_title": "Expert Chain Challenge",
      "level_title": "Deep Scripture Study: The Ethiopian Eunuch",
      "chain_type": "name_to_event",
      "chain_nodes": [
        "Water baptism in desert",
        "Caught away by the Spirit",
        "Eunuch rejoices",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Moderate",
      "timerSeconds": 60,
      "points": 100,
      "testament": "New Testament",
      "dossier": "Acts 8:40: \"But Philip was found at Azotus: and passing through he preached in all the cities, till he came to Caesarea.\"",
      "study_mode": true,
      "hint1": "The Greek name for ancient Philistine Ashdod.",
      "hint2": "Acts 8:40: \"But Philip was found at Azotus.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l45-c5",
    "game_slug": "bible-chain-challenge",
    "level": 45,
    "challenge_index": 5,
    "question_text": "DEEP SCRIPTURE STUDY: Decades later in Acts 21:8-9, when Paul and Luke arrived at Caesarea, they entered into the house of this same Philip the evangelist. What remarkable prophetic gift is recorded concerning Philip’s four unmarried daughters?",
    "options": [
      "They were virgins who did prophesy",
      "They built a church in Antioch",
      "They spoke in Latin and Hebrew",
      "They were deaconesses in Rome"
    ],
    "correct_answer": "They were virgins who did prophesy",
    "explanation": "Acts 21:8-9: \"we that were of Paul’s company departed, and came unto Caesarea: and we entered into the house of Philip the evangelist, which was one of the seven; and abode with him. And the same man had four daughters, virgins, which did prophesy.\"",
    "reference": "Acts 21:8-9",
    "metadata": {
      "stage": 9,
      "stage_title": "Expert Chain Challenge",
      "level_title": "Deep Scripture Study: The Ethiopian Eunuch",
      "chain_type": "character_chain",
      "chain_nodes": [
        "Philip the deacon (Acts 6)",
        "Philip the evangelist (Acts 8)",
        "Caesarea household (Acts 21)",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Moderate",
      "timerSeconds": 60,
      "points": 100,
      "testament": "New Testament",
      "dossier": "Acts 21:8-9 brings Philip’s journey full circle, showcasing his godly household in Caesarea.",
      "study_mode": true,
      "hint1": "Four daughters possessed the spiritual gift of prophecy.",
      "hint2": "Acts 21:9: \"four daughters, virgins, which did prophesy.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l46-c1",
    "game_slug": "bible-chain-challenge",
    "level": 46,
    "challenge_index": 1,
    "question_text": "Type the missing fifth link in this royal coronation chain from 1 Kings 1–2:\nDavid aged → Adonijah exalts himself → Nathan & Bathsheba intervene → Solomon anointed at Gihon spring on king’s mule → [ ? ] (David’s mighty commander who had supported Adonijah and is executed at the horns of the altar):",
    "options": [
      "Joab",
      "Benaiah",
      "Zadok",
      "Abiathar"
    ],
    "correct_answer": "Joab",
    "explanation": "1 Kings 1–2: Adonijah usurped the throne with Joab and Abiathar. Nathan and Bathsheba urged David to crown Solomon. Solomon rode David’s mule to Gihon and was anointed by Zadok. Solomon then dispatched Benaiah to slay Joab at the horns of the altar for the murders of Abner and Amasa (1 Kings 2:28-34).",
    "reference": "1 Kings 1:5, 33-39; 2:28-34",
    "metadata": {
      "stage": 10,
      "stage_title": "Ultimate Bible Chain",
      "level_title": "Five-Link Royal Master Chains",
      "chain_type": "five_link",
      "chain_nodes": [
        "Adonijah rebellion",
        "Nathan & Bathsheba plea",
        "Solomon at Gihon spring",
        "Benaiah dispatched",
        "?"
      ],
      "is_typed": true,
      "acceptedAlternatives": [
        "General Joab"
      ],
      "difficulty": "Expert",
      "timerSeconds": 75,
      "points": 250,
      "testament": "Old Testament",
      "hint1": "David’s sister Zeruiah’s eldest son, commander of Israel’s armies.",
      "hint2": "1 Kings 2:28: \"Then tidings came to Joab... and Joab fled unto the tabernacle of the LORD, and caught hold on the horns of the altar.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l46-c2",
    "game_slug": "bible-chain-challenge",
    "level": 46,
    "challenge_index": 2,
    "question_text": "Follow the five-link southern reformation chain:\nAsa deposes idol-making grandmother Maachah → Jehoshaphat sends Levites with Book of Law through all cities → Hezekiah reopens temple doors and cleanses sanctuary → Josiah repairs temple and rediscovery of Law → Which final tragic king watched his sons slain before his eyes at Riblah and had his eyes put out by the king of Babylon?",
    "options": [
      "Zedekiah (Mattaniah)",
      "Jehoiakim",
      "Jehoiachin",
      "Jehoahaz"
    ],
    "correct_answer": "Zedekiah (Mattaniah)",
    "explanation": "Reformation chain culminates in the final tragic collapse: Asa → Jehoshaphat → Hezekiah → Josiah → Zedekiah, whose rebellion against Babylon resulted in the destruction of Solomon’s temple, the slaughter of his sons at Riblah, and his blinding (2 Kings 25:6-7; Jeremiah 52:10-11).",
    "reference": "2 Kings 25:6-7; Jeremiah 52:10-11",
    "metadata": {
      "stage": 10,
      "stage_title": "Ultimate Bible Chain",
      "level_title": "Five-Link Royal Master Chains",
      "chain_type": "five_link",
      "chain_nodes": [
        "Asa",
        "Jehoshaphat",
        "Hezekiah",
        "Josiah",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Very Difficult",
      "timerSeconds": 90,
      "points": 200,
      "testament": "Old Testament",
      "hint1": "The last king of Judah before the Babylonian captivity.",
      "hint2": "2 Kings 25:7: \"And they slew the sons of Zedekiah before his eyes, and put out the eyes of Zedekiah.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l46-c3",
    "game_slug": "bible-chain-challenge",
    "level": 46,
    "challenge_index": 3,
    "question_text": "Type the missing link in this 5-link Northern Kingdom regicide chain from 2 Kings 15:\nZechariah (slain by Shallum) → Shallum (slain after one month by Menahem) → Menahem → Pekahiah (slain by his captain Pekah) → [ ? ] (conspired against Pekah, slew him, and became the final king of Israel when Samaria fell to Assyria):",
    "options": [
      "Hoshea",
      "Jehu",
      "Omri",
      "Jeroboam II"
    ],
    "correct_answer": "Hoshea",
    "explanation": "2 Kings 15:30: \"And Hoshea the son of Elah made a conspiracy against Pekah the son of Remaliah, and smote him, and slew him, and reigned in his stead.\" Hoshea was the nineteenth and final king of the northern kingdom, imprisoned when Shalmaneser and Sargon captured Samaria in 722 BC (2 Kings 17:1-6).",
    "reference": "2 Kings 15:30; 17:1-6",
    "metadata": {
      "stage": 10,
      "stage_title": "Ultimate Bible Chain",
      "level_title": "Five-Link Royal Master Chains",
      "chain_type": "five_link",
      "chain_nodes": [
        "Shallum",
        "Menahem",
        "Pekahiah",
        "Pekah",
        "?"
      ],
      "is_typed": true,
      "acceptedAlternatives": [
        "Hosea"
      ],
      "difficulty": "Expert",
      "timerSeconds": 75,
      "points": 250,
      "testament": "Old Testament",
      "hint1": "Six-letter name starting with H, son of Elah.",
      "hint2": "2 Kings 17:1: \"began Hoshea the son of Elah to reign in Samaria over Israel nine years.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l46-c4",
    "game_slug": "bible-chain-challenge",
    "level": 46,
    "challenge_index": 4,
    "question_text": "Complete the five-link Messianic Kingly title chain:\nSeed of the woman (Genesis 3:15) → Ruler from Judah’s sceptre (Genesis 49:10) → Star out of Jacob (Numbers 24:17) → Rod out of the stem of Jesse (Isaiah 11:1) → Which apocalyptic title is given to Jesus Christ in Revelation 5:5?",
    "options": [
      "The Lion of the tribe of Juda, the Root of David",
      "The bright and morning star",
      "The Prince of the kings of the earth",
      "The Amen, the faithful and true witness"
    ],
    "correct_answer": "The Lion of the tribe of Juda, the Root of David",
    "explanation": "Revelation 5:5 unites this entire 5-link Messianic chain: \"Weep not: behold, the Lion of the tribe of Juda, the Root of David, hath prevailed to open the book, and to loose the seven seals thereof.\"",
    "reference": "Genesis 49:9-10; Isaiah 11:1, 10; Revelation 5:5",
    "metadata": {
      "stage": 10,
      "stage_title": "Ultimate Bible Chain",
      "level_title": "Five-Link Royal Master Chains",
      "chain_type": "five_link",
      "chain_nodes": [
        "Genesis 3:15",
        "Genesis 49:10 (Shiloh & Sceptre)",
        "Numbers 24:17 (Star of Jacob)",
        "Isaiah 11:1 (Stem of Jesse)",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Moderate",
      "timerSeconds": 60,
      "points": 100,
      "testament": "New Testament",
      "hint1": "Combining the lion imagery of Judah and the root of King David.",
      "hint2": "Revelation 5:5: \"the Lion of the tribe of Juda, the Root of David, hath prevailed.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l46-c5",
    "game_slug": "bible-chain-challenge",
    "level": 46,
    "challenge_index": 5,
    "question_text": "Follow the five-link chain of royal advisors:\nAhithophel’s counsel considered as the oracle of God → Joins Absalom’s rebellion → David prays: \"O LORD, I pray thee, turn the counsel of Ahithophel into foolishness\" → Hushai the Archite sent to defeat the counsel → What did Ahithophel do when he saw that his counsel was not followed?",
    "options": [
      "Put his household in order and hanged himself",
      "Fled to Egypt",
      "Fell upon his sword in battle",
      "Pleaded for mercy before David"
    ],
    "correct_answer": "Put his household in order and hanged himself",
    "explanation": "2 Samuel 15:31; 16:23; 17:14, 23: When Ahithophel saw that Hushai’s advice was chosen over his, he saddled his ass, arose, went home to his city, put his household in order, and hanged himself, and died, and was buried in the sepulchre of his father (a profound Old Testament type of Judas Iscariot).",
    "reference": "2 Samuel 15:31; 17:14, 23; Matthew 27:5",
    "metadata": {
      "stage": 10,
      "stage_title": "Ultimate Bible Chain",
      "level_title": "Five-Link Royal Master Chains",
      "chain_type": "five_link",
      "chain_nodes": [
        "Ahithophel joins Absalom",
        "David prays on Olivet",
        "Hushai defeats counsel",
        "Absalom delays",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Moderate",
      "timerSeconds": 60,
      "points": 100,
      "testament": "Old Testament",
      "hint1": "He set his affairs in order and committed suicide by hanging.",
      "hint2": "2 Samuel 17:23: \"and put his household in order, and hanged himself, and died.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l47-c1",
    "game_slug": "bible-chain-challenge",
    "level": 47,
    "challenge_index": 1,
    "question_text": "Type the missing covenant location in this five-link sacrifice chain across redemptive history:\nAbraham offers Isaac on Mount Moriah (Genesis 22) → David buys threshingfloor of Araunah the Jebusite (2 Samuel 24) → Solomon builds Temple on Mount Moriah (2 Chronicles 3:1) → Jesus crucified at [ ? ] outside the gate (Hebrews 13:12) → New Jerusalem descends from God:",
    "options": [
      "Golgotha",
      "Calvary",
      "Mount of Olives",
      "Gethsemane"
    ],
    "correct_answer": "Golgotha",
    "explanation": "The redemptive topography connects Mount Moriah through Araunah’s threshingfloor and Solomon’s temple to Golgotha (Calvary, \"the place of a skull\"), where Christ suffered outside the city gate (2 Chronicles 3:1; Matthew 27:33; John 19:17; Hebrews 13:12).",
    "reference": "Genesis 22:2; 2 Chronicles 3:1; John 19:17; Hebrews 13:12",
    "metadata": {
      "stage": 10,
      "stage_title": "Ultimate Bible Chain",
      "level_title": "Prophetic & Redemptive Master Chains",
      "chain_type": "five_link",
      "chain_nodes": [
        "Mount Moriah",
        "Araunah’s threshingfloor",
        "Solomon’s Temple",
        "?",
        "Heavenly Jerusalem"
      ],
      "is_typed": true,
      "acceptedAlternatives": [
        "Calvary",
        "Place of a skull"
      ],
      "difficulty": "Expert",
      "timerSeconds": 75,
      "points": 250,
      "testament": "New Testament",
      "hint1": "Aramaic name meaning \"the place of a skull\", eight letters: G-O-L-G-O-T-H-A.",
      "hint2": "John 19:17: \"went forth into a place called the place of a skull, which is called in the Hebrew Golgotha.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l47-c2",
    "game_slug": "bible-chain-challenge",
    "level": 47,
    "challenge_index": 2,
    "question_text": "Follow the five-link Holy Spirit descent chain:\nSpirit moves upon the face of the waters (Genesis 1:2) → Spirit comes upon Eldad and Medad prophesying in camp (Numbers 11) → Spirit departs from Saul and rushes upon David (1 Samuel 16) → Spirit descends like a dove upon Jesus at Jordan (Matthew 3) → What visible miraculous form did the Holy Spirit take upon the 120 disciples on the Day of Pentecost in Acts 2:3?",
    "options": [
      "Cloven tongues like as of fire sitting upon each of them",
      "A rushing cloud of incense",
      "A pillar of smoke",
      "A great earthquake shaking the room"
    ],
    "correct_answer": "Cloven tongues like as of fire sitting upon each of them",
    "explanation": "Acts 2:1-4: On Pentecost, \"there appeared unto them cloven tongues like as of fire, and it sat upon each of them. And they were all filled with the Holy Ghost, and began to speak with other tongues, as the Spirit gave them utterance.\"",
    "reference": "Genesis 1:2; Matthew 3:16; Acts 2:1-4",
    "metadata": {
      "stage": 10,
      "stage_title": "Ultimate Bible Chain",
      "level_title": "Prophetic & Redemptive Master Chains",
      "chain_type": "five_link",
      "chain_nodes": [
        "Creation hovering",
        "Old Testament prophets",
        "Jordan dove",
        "?",
        "Universal indwelling of believers"
      ],
      "is_typed": false,
      "difficulty": "Moderate",
      "timerSeconds": 60,
      "points": 100,
      "testament": "New Testament",
      "hint1": "Divided flames resting visibly upon their heads.",
      "hint2": "Acts 2:3: \"And there appeared unto them cloven tongues like as of fire, and it sat upon each of them.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l47-c3",
    "game_slug": "bible-chain-challenge",
    "level": 47,
    "challenge_index": 3,
    "question_text": "Type the missing prophetic animal in this five-link Daniel 7 & 8 prophetic empire chain:\nBabylon: Lion with eagle’s wings → Medo-Persia: Bear with 3 ribs / Ram with two horns → Greece: Leopard with 4 wings / He-goat with notable horn → Rome: Diverse beast with ten iron teeth → [ ? ] (The everlasting kingdom that shall never be destroyed):",
    "options": [
      "Kingdom of God",
      "Ancient of days",
      "Son of man",
      "Stone cut without hands"
    ],
    "correct_answer": "Kingdom of God",
    "explanation": "Daniel 2 and 7 trace the four world empires (Babylon, Medo-Persia, Greece, Rome) culminating in Daniel 7:13-14 & 27: the Son of man receiving an everlasting dominion and kingdom which shall not pass away — the Kingdom of God.",
    "reference": "Daniel 2:44; 7:13-14, 27",
    "metadata": {
      "stage": 10,
      "stage_title": "Ultimate Bible Chain",
      "level_title": "Prophetic & Redemptive Master Chains",
      "chain_type": "five_link",
      "chain_nodes": [
        "Lion (Babylon)",
        "Bear (Medo-Persia)",
        "Leopard (Greece)",
        "Beast with iron teeth (Rome)",
        "?"
      ],
      "is_typed": true,
      "acceptedAlternatives": [
        "Kingdom of Christ",
        "The Kingdom of God",
        "Kingdom of heaven"
      ],
      "difficulty": "Difficult",
      "timerSeconds": 75,
      "points": 150,
      "testament": "Old Testament",
      "hint1": "The divine kingdom proclaimed by Jesus in Mark 1:15.",
      "hint2": "Daniel 7:27: \"whose kingdom is an everlasting kingdom, and all dominions shall serve and obey him.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l47-c4",
    "game_slug": "bible-chain-challenge",
    "level": 47,
    "challenge_index": 4,
    "question_text": "Follow the five-link resurrection appearances chain in 1 Corinthians 15:3-8:\nChrist died for our sins → Buried → Rose third day → Seen of Cephas (Peter) → Seen of the twelve → Seen of above five hundred brethren at once → Seen of James → Seen of all the apostles → Last of all, as of one born out of due time, he was seen of whom?",
    "options": [
      "Paul himself on the road to Damascus",
      "Stephen before the Sanhedrin",
      "John on the isle of Patmos",
      "Timothy in Ephesus"
    ],
    "correct_answer": "Paul himself on the road to Damascus",
    "explanation": "1 Corinthians 15:8: \"And last of all he was seen of me also, as of one born out of due time. For I am the least of the apostles, that am not meet to be called an apostle, because I persecuted the church of God.\"",
    "reference": "1 Corinthians 15:5-9; Acts 9:3-5",
    "metadata": {
      "stage": 10,
      "stage_title": "Ultimate Bible Chain",
      "level_title": "Prophetic & Redemptive Master Chains",
      "chain_type": "five_link",
      "chain_nodes": [
        "Cephas",
        "The Twelve",
        "500 brethren",
        "James & all apostles",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Easy",
      "timerSeconds": 30,
      "points": 50,
      "testament": "New Testament",
      "hint1": "The author of 1 Corinthians who met the risen Christ near Damascus.",
      "hint2": "1 Corinthians 15:8: \"And last of all he was seen of me also, as of one born out of due time.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l47-c5",
    "game_slug": "bible-chain-challenge",
    "level": 47,
    "challenge_index": 5,
    "question_text": "Follow the five-link golden chain of redemption in Romans 8:29-30:\n\"For whom he did foreknow, he also did predestinate... Moreover whom he did predestinate, them he also called: and whom he called, them he also justified: and whom he justified, them he also [ ? ]\":",
    "options": [
      "glorified",
      "sanctified",
      "preserved",
      "crowned"
    ],
    "correct_answer": "glorified",
    "explanation": "Romans 8:30 articulates the unbroken 5-link golden chain of salvation: Foreknown → Predestinated → Called → Justified → Glorified: \"and whom he justified, them he also glorified.\"",
    "reference": "Romans 8:29-30",
    "metadata": {
      "stage": 10,
      "stage_title": "Ultimate Bible Chain",
      "level_title": "Prophetic & Redemptive Master Chains",
      "chain_type": "five_link",
      "chain_nodes": [
        "Foreknown",
        "Predestinated",
        "Called",
        "Justified",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Moderate",
      "timerSeconds": 45,
      "points": 100,
      "testament": "New Testament",
      "hint1": "Past-tense assurance of ultimate celestial glory, nine letters: g-l-o-r-i-f-i-e-d.",
      "hint2": "Romans 8:30: \"and whom he justified, them he also glorified.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l48-c1",
    "game_slug": "bible-chain-challenge",
    "level": 48,
    "challenge_index": 1,
    "question_text": "BROKEN CHAIN MASTER: Inspect this 5-link Genesis covenant blessing transmission:\nAbraham (Gen 12) → Isaac (Gen 26) → Jacob (Gen 28) → Esau (Gen 27) → Judah (Gen 49)\nWhich link broke the covenant succession by selling his birthright for a bowl of red pottage?",
    "options": [
      "Esau (Jacob received the covenant blessing; Esau was rejected as profane)",
      "Judah",
      "Jacob",
      "Isaac"
    ],
    "correct_answer": "Esau (Jacob received the covenant blessing; Esau was rejected as profane)",
    "explanation": "Hebrews 12:16-17 denounces Esau as a profane person who for one morsel of meat sold his birthright. When he would have inherited the blessing, he was rejected. The true covenant line flowed from Abraham to Isaac, to Jacob, and to Judah. Esau is the broken link!",
    "reference": "Genesis 25:29-34; 27:33-40; Hebrews 12:16-17",
    "metadata": {
      "stage": 10,
      "stage_title": "Ultimate Bible Chain",
      "level_title": "The Wrong Chain Master Gauntlet",
      "chain_type": "wrong_chain",
      "chain_nodes": [
        "Abraham",
        "Isaac",
        "Jacob",
        "Esau [BROKEN]",
        "Judah"
      ],
      "broken_link_index": 3,
      "is_typed": false,
      "difficulty": "Moderate",
      "timerSeconds": 60,
      "points": 100,
      "testament": "Old Testament",
      "hint1": "The twin brother who wept bitterly but found no place of repentance.",
      "hint2": "Hebrews 12:16: \"Lest there be any fornicator, or profane person, as Esau.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l48-c2",
    "game_slug": "bible-chain-challenge",
    "level": 48,
    "challenge_index": 2,
    "question_text": "BROKEN CHAIN MASTER: Inspect this post-exilic Jerusalem restoration chain:\nCyrus decree → Zerubbabel builds temple → Ezra teaches law → Alexander the Great rebuilds city walls → Nehemiah governors Jerusalem\nWhich link falsely attributes the rebuilding of Jerusalem’s broken-down walls?",
    "options": [
      "Alexander the Great (Nehemiah rebuilt the walls with trowel and sword, not Alexander)",
      "Zerubbabel",
      "Ezra",
      "Nehemiah"
    ],
    "correct_answer": "Alexander the Great (Nehemiah rebuilt the walls with trowel and sword, not Alexander)",
    "explanation": "Nehemiah was cupbearer to Artaxerxes and journeyed to Jerusalem specifically to rebuild the ruined walls and burnt gates in 52 days (Nehemiah 2–6). Alexander the Great was a Greek conqueror who entered Jerusalem over a century later in 332 BC. Alexander is the false link!",
    "reference": "Nehemiah 1:3; 2:1-18; 6:15",
    "metadata": {
      "stage": 10,
      "stage_title": "Ultimate Bible Chain",
      "level_title": "The Wrong Chain Master Gauntlet",
      "chain_type": "wrong_chain",
      "chain_nodes": [
        "Cyrus decree",
        "Zerubbabel temple",
        "Ezra law",
        "Alexander the Great [BROKEN]",
        "Nehemiah"
      ],
      "broken_link_index": 3,
      "is_typed": false,
      "difficulty": "Easy",
      "timerSeconds": 45,
      "points": 100,
      "testament": "Old Testament",
      "hint1": "The Macedonian conqueror who had no part in Nehemiah’s wall project.",
      "hint2": "Nehemiah 2:17: \"Come, and let us build up the wall of Jerusalem, that we be no more a reproach.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l48-c3",
    "game_slug": "bible-chain-challenge",
    "level": 48,
    "challenge_index": 3,
    "question_text": "Type the name of the false companion who broke his chain by abandoning Paul in 2 Timothy 4:10:\nPaul’s final imprisonment → Luke with him → Tychicus sent to Ephesus → [ ? ] (loved this present world and departed unto Thessalonica) → Mark requested as profitable:",
    "options": [
      "Demas",
      "Titus",
      "Crescens",
      "Carpus"
    ],
    "correct_answer": "Demas",
    "explanation": "2 Timothy 4:10: \"For Demas hath forsaken me, having loved this present world, and is departed unto Thessalonica.\" Demas had previously been praised in Colossians 4:14 and Philemon 24 as a fellowlabourer, but backslid under pressure in Paul’s final trial.",
    "reference": "2 Timothy 4:10; Colossians 4:14; Philemon 24",
    "metadata": {
      "stage": 10,
      "stage_title": "Ultimate Bible Chain",
      "level_title": "The Wrong Chain Master Gauntlet",
      "chain_type": "wrong_chain",
      "chain_nodes": [
        "Paul in chains",
        "Luke alone with me",
        "?",
        "Forsakes Paul for present world",
        "Mark summoned"
      ],
      "broken_link_index": 2,
      "is_typed": true,
      "acceptedAlternatives": [
        "Damas"
      ],
      "difficulty": "Moderate",
      "timerSeconds": 45,
      "points": 100,
      "testament": "New Testament",
      "hint1": "Five-letter name: D-E-M-A-S.",
      "hint2": "2 Timothy 4:10: \"For Demas hath forsaken me, having loved this present world.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l48-c4",
    "game_slug": "bible-chain-challenge",
    "level": 48,
    "challenge_index": 4,
    "question_text": "BROKEN CHAIN MASTER: Inspect this Old Testament translation/death chain (those who were taken without dying or had unusual deaths):\nEnoch (translated) → Elijah (whirlwind in chariot of fire) → Moses (died on Mount Nebo and God buried him) → Aaron (died on Mount Hor) → Methuselah (translated to heaven without dying)\nWhich link is factually false concerning his end in Genesis 5:27?",
    "options": [
      "Methuselah (Methuselah died in the year of the Flood at age 969; he was never translated)",
      "Enoch",
      "Elijah",
      "Moses"
    ],
    "correct_answer": "Methuselah (Methuselah died in the year of the Flood at age 969; he was never translated)",
    "explanation": "Genesis 5:27 states: \"And all the days of Methuselah were nine hundred sixty and nine years: and he died.\" Only Enoch and Elijah were translated without seeing death (Genesis 5:24; 2 Kings 2:11; Hebrews 11:5). Methuselah is the broken link!",
    "reference": "Genesis 5:24, 27; 2 Kings 2:11; Hebrews 11:5",
    "metadata": {
      "stage": 10,
      "stage_title": "Ultimate Bible Chain",
      "level_title": "The Wrong Chain Master Gauntlet",
      "chain_type": "wrong_chain",
      "chain_nodes": [
        "Enoch",
        "Elijah",
        "Moses",
        "Aaron",
        "Methuselah translated [BROKEN]"
      ],
      "broken_link_index": 4,
      "is_typed": false,
      "difficulty": "Moderate",
      "timerSeconds": 45,
      "points": 100,
      "testament": "Old Testament",
      "hint1": "The oldest man in Scripture, who died at age 969.",
      "hint2": "Genesis 5:27: \"and he died.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l48-c5",
    "game_slug": "bible-chain-challenge",
    "level": 48,
    "challenge_index": 5,
    "question_text": "BROKEN CHAIN MASTER: Inspect this chain of Paul’s trials before Roman authorities:\nArrested in Temple court → Before the Sanhedrin → Before Governor Felix in Caesarea → Before Governor Festus → Before King Herod the Great in Jericho → Before Emperor Nero in Rome\nWhich ruler died decades before Paul’s conversion and could never have tried Paul?",
    "options": [
      "Herod the Great (He died shortly after Jesus was born in 4 BC; Paul appeared before King Agrippa II)",
      "Felix",
      "Festus",
      "Nero"
    ],
    "correct_answer": "Herod the Great (He died shortly after Jesus was born in 4 BC; Paul appeared before King Agrippa II)",
    "explanation": "Acts 25–26 records that Festus conferred with King Agrippa II (great-grandson of Herod the Great) and his sister Bernice. Herod the Great died over 60 years earlier in 4 BC after the slaughter of the innocents in Bethlehem (Matthew 2:19). Herod the Great is the broken link!",
    "reference": "Matthew 2:1-19; Acts 24:24; 25:13; 26:1-28",
    "metadata": {
      "stage": 10,
      "stage_title": "Ultimate Bible Chain",
      "level_title": "The Wrong Chain Master Gauntlet",
      "chain_type": "wrong_chain",
      "chain_nodes": [
        "Sanhedrin",
        "Felix",
        "Festus",
        "Herod the Great [BROKEN]",
        "Nero in Rome"
      ],
      "broken_link_index": 3,
      "is_typed": false,
      "difficulty": "Moderate",
      "timerSeconds": 60,
      "points": 100,
      "testament": "New Testament",
      "hint1": "The king who ordered the slaughter of the children in Bethlehem in Matthew 2.",
      "hint2": "Acts 25:13: \"king Agrippa and Bernice came unto Caesarea to salute Festus.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l49-c1",
    "game_slug": "bible-chain-challenge",
    "level": 49,
    "challenge_index": 1,
    "question_text": "FORENSIC CHAIN: Connect the three biblical appearances of the mysterious King of Salem across 1,500 years:\nGenesis 14:18 (Blesses Abram with bread and wine) → Psalm 110:4 (Messianic Priest forever) → Hebrews 7:1-3 (Without father, mother, or descent, having neither beginning of days nor end of life). To whom did Abram give a tenth part (tithe) of all the spoils?",
    "options": [
      "Melchizedek",
      "The King of Sodom",
      "Eliezer of Damascus",
      "Amraphel king of Shinar"
    ],
    "correct_answer": "Melchizedek",
    "explanation": "Genesis 14:20 and Hebrews 7:2 record: \"And he gave him tithes of all... to whom also Abraham gave a tenth part of all; first being by interpretation King of righteousness, and after that also King of Salem, which is, King of peace.\"",
    "reference": "Genesis 14:18-20; Hebrews 7:1-4",
    "metadata": {
      "stage": 10,
      "stage_title": "Ultimate Bible Chain",
      "level_title": "Cross-Canon Forensic Investigation",
      "chain_type": "character_chain",
      "chain_nodes": [
        "Slaughter of the kings",
        "Valley of Shaveh",
        "Bread and wine brought",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Moderate",
      "timerSeconds": 60,
      "points": 100,
      "testament": "New Testament",
      "hint1": "His royal priesthood preceded Aaron and continues forever in Christ.",
      "hint2": "Hebrews 7:1: \"Melchisedec, king of Salem, priest of the most high God, who met Abraham.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l49-c2",
    "game_slug": "bible-chain-challenge",
    "level": 49,
    "challenge_index": 2,
    "question_text": "FORENSIC CHAIN: Follow the scarlet cord of redemption through three biblical books:\nJoshua 2:18 (Rahab binds scarlet thread in window) → Joshua 6:25 (Rahab and her father’s household saved alive) → Matthew 1:5 (Rachab marries Salmon of Judah and bears Boaz). In James 2:25 and Hebrews 11:31, what two virtues is Rahab commemorated for?",
    "options": [
      "Faith and justified works",
      "Patience and fasting",
      "Prophecy and wisdom",
      "Almsgiving and prayer"
    ],
    "correct_answer": "Faith and justified works",
    "explanation": "Hebrews 11:31 commends her faith (\"By faith the harlot Rahab perished not\"), while James 2:25 commends her works (\"Likewise also was not Rahab the harlot justified by works, when she had received the messengers, and had sent them out another way?\").",
    "reference": "Joshua 2:18; Hebrews 11:31; James 2:25",
    "metadata": {
      "stage": 10,
      "stage_title": "Ultimate Bible Chain",
      "level_title": "Cross-Canon Forensic Investigation",
      "chain_type": "scripture_chain",
      "chain_nodes": [
        "Joshua 2 (Scarlet thread)",
        "Matthew 1:5 (Mother of Boaz)",
        "Hebrews 11:31 (By faith)",
        "James 2:25 (By works)",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Moderate",
      "timerSeconds": 60,
      "points": 100,
      "testament": "New Testament",
      "hint1": "Faith in Hebrews 11 and works in James 2.",
      "hint2": "James 2:25: \"justified by works\"; Hebrews 11:31: \"By faith the harlot Rahab perished not.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l49-c3",
    "game_slug": "bible-chain-challenge",
    "level": 49,
    "challenge_index": 3,
    "question_text": "Type the name of the valley where David slew Goliath with a sling and a stone (1 Samuel 17), which provided five smooth stones from the brook:",
    "options": [
      "Elah",
      "Eshcol",
      "Sorek",
      "Achor"
    ],
    "correct_answer": "Elah",
    "explanation": "1 Samuel 17:2, 19, 40: \"And Saul and the men of Israel were gathered together, and pitched by the valley of Elah, and set the battle in array against the Philistines.\" David chose five smooth stones out of the brook in the valley of Elah.",
    "reference": "1 Samuel 17:2, 40",
    "metadata": {
      "stage": 10,
      "stage_title": "Ultimate Bible Chain",
      "level_title": "Cross-Canon Forensic Investigation",
      "chain_type": "name_to_event",
      "chain_nodes": [
        "Philistines on one mountain",
        "Israel on other mountain",
        "Brook with five smooth stones",
        "?"
      ],
      "is_typed": true,
      "acceptedAlternatives": [
        "Valley of Elah"
      ],
      "difficulty": "Easy",
      "timerSeconds": 30,
      "points": 50,
      "testament": "Old Testament",
      "hint1": "Four-letter valley name: E-L-A-H.",
      "hint2": "1 Samuel 17:2: \"pitched by the valley of Elah.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l49-c4",
    "game_slug": "bible-chain-challenge",
    "level": 49,
    "challenge_index": 4,
    "question_text": "FORENSIC CHAIN: Follow the Nehushtan destruction chain:\nNumbers 21:8-9 (Moses makes serpent of brass on pole) → Israel burns incense to it for centuries like an idol → In 2 Kings 18:4, which godly king of Judah broke in pieces the brazen serpent that Moses had made and called it \"Nehushtan\" (a piece of brass)?",
    "options": [
      "Hezekiah",
      "Josiah",
      "Asa",
      "Jehoshaphat"
    ],
    "correct_answer": "Hezekiah",
    "explanation": "2 Kings 18:4: King Hezekiah \"removed the high places, and brake the images, and cut down the groves, and brake in pieces the brasen serpent that Moses had made: for unto those days the children of Israel did burn incense to it: and he called it Nehushtan.\"",
    "reference": "Numbers 21:8-9; 2 Kings 18:4; John 3:14",
    "metadata": {
      "stage": 10,
      "stage_title": "Ultimate Bible Chain",
      "level_title": "Cross-Canon Forensic Investigation",
      "chain_type": "name_to_event",
      "chain_nodes": [
        "Wilderness serpent of brass",
        "Centuries of idolatrous incense",
        "Broken in pieces as Nehushtan",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Moderate",
      "timerSeconds": 60,
      "points": 100,
      "testament": "Old Testament",
      "hint1": "Son of Ahaz and father of Manasseh who trusted in the LORD God of Israel.",
      "hint2": "2 Kings 18:4: \"and brake in pieces the brasen serpent that Moses had made... and he called it Nehushtan.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l49-c5",
    "game_slug": "bible-chain-challenge",
    "level": 49,
    "challenge_index": 5,
    "question_text": "FORENSIC CHAIN: Follow the prophetic martyrdom chain in Matthew 23:35:\nJesus charges the religious leaders with all the righteous blood shed upon the earth: from the blood of righteous Abel in Genesis 4 unto the blood of which priest’s son who was slain between the temple and the altar in 2 Chronicles 24?",
    "options": [
      "Zacharias son of Barachias (Zechariah son of Jehoiada)",
      "Uriah son of Shemaiah",
      "Isaiah son of Amoz",
      "John the Baptist"
    ],
    "correct_answer": "Zacharias son of Barachias (Zechariah son of Jehoiada)",
    "explanation": "Matthew 23:35 spans the entire Hebrew Old Testament canon (Genesis to 2 Chronicles, the first and last books in the Hebrew Bible order): from the murder of Abel (Genesis 4:8) to the martyrdom of Zechariah the son of Jehoiada (2 Chronicles 24:20-22), stoned in the court of the house of the LORD.",
    "reference": "Genesis 4:8; 2 Chronicles 24:20-22; Matthew 23:35; Luke 11:51",
    "metadata": {
      "stage": 10,
      "stage_title": "Ultimate Bible Chain",
      "level_title": "Cross-Canon Forensic Investigation",
      "chain_type": "scripture_chain",
      "chain_nodes": [
        "Genesis 4:8 (Abel)",
        "Canon of martyrdoms",
        "Between the temple and the altar",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Difficult",
      "timerSeconds": 75,
      "points": 150,
      "testament": "New Testament",
      "hint1": "Stoned at the commandment of King Joash in the temple court.",
      "hint2": "Matthew 23:35: \"unto the blood of Zacharias son of Barachias, whom ye slew between the temple and the altar.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l50-c1",
    "game_slug": "bible-chain-challenge",
    "level": 50,
    "challenge_index": 1,
    "question_text": "MASTER CHAIN GAUNTLET: Type the missing name in this five-link Davidic fugitive network from 1 Samuel 22:\nDavid flees to cave of Adullam → 400 distressed men join him → Priest Ahimelech gives David shewbread and Goliath’s sword at Nob → Edomite chief herdsman [ ? ] slays eighty-five priests of Nob on Saul’s command → Abiathar escapes with ephod to David:",
    "options": [
      "Doeg",
      "Cush",
      "Shimei",
      "Nabal"
    ],
    "correct_answer": "Doeg",
    "explanation": "1 Samuel 21:7; 22:9-19: Doeg the Edomite, chiefest of the herdmen that belonged to Saul, informed Saul of Ahimelech’s assistance to David. When Saul’s footmen refused to fall upon the priests of the LORD, Doeg turned and fell upon the priests, slaying in that day fourscore and five persons that did wear a linen ephod (Psalm 52 inscription).",
    "reference": "1 Samuel 21:7; 22:9-19; Psalm 52:1-7",
    "metadata": {
      "stage": 10,
      "stage_title": "Ultimate Bible Chain",
      "level_title": "The Master Bible Detective Gauntlet",
      "chain_type": "five_link",
      "chain_nodes": [
        "Cave of Adullam",
        "Priests of Nob",
        "?",
        "85 priests slain",
        "Abiathar escapes to David"
      ],
      "is_typed": true,
      "acceptedAlternatives": [
        "Doeg the Edomite"
      ],
      "difficulty": "Expert",
      "timerSeconds": 90,
      "points": 250,
      "testament": "Old Testament",
      "hint1": "Four-letter name: D-O-E-G.",
      "hint2": "1 Samuel 22:18: \"And the king said to Doeg, Turn thou, and fall upon the priests. And Doeg the Edomite turned, and he fell upon the priests.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l50-c2",
    "game_slug": "bible-chain-challenge",
    "level": 50,
    "challenge_index": 2,
    "question_text": "MASTER CHAIN GAUNTLET: Follow the five-link resurrection authority chain:\nJonah in the whale 3 days (Jonah 1) → Psalm 16:10 Holy One sees no corruption → Christ declares: \"Destroy this temple, and in three days I will raise it up\" (John 2:19) → Peter proclaims resurrection at Pentecost (Acts 2) → In Revelation 1:18, what two keys does the glorified living Christ hold in His hand?",
    "options": [
      "The keys of hell and of death",
      "The keys of heaven and earth",
      "The keys of David and Solomon",
      "The keys of paradise and life"
    ],
    "correct_answer": "The keys of hell and of death",
    "explanation": "Revelation 1:18 crowns the triumphant chain of resurrection victory: \"I am he that liveth, and was dead; and, behold, I am alive for evermore, Amen; and have the keys of hell and of death.\"",
    "reference": "Jonah 1:17; Psalm 16:10; John 2:19; Revelation 1:18",
    "metadata": {
      "stage": 10,
      "stage_title": "Ultimate Bible Chain",
      "level_title": "The Master Bible Detective Gauntlet",
      "chain_type": "five_link",
      "chain_nodes": [
        "Jonah 3 days",
        "Psalm 16:10",
        "Empty tomb",
        "Pentecost witness",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Expert",
      "timerSeconds": 90,
      "points": 250,
      "testament": "New Testament",
      "hint1": "Authority over hades/the grave and mortality.",
      "hint2": "Revelation 1:18: \"and have the keys of hell and of death.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l50-c3",
    "game_slug": "bible-chain-challenge",
    "level": 50,
    "challenge_index": 3,
    "question_text": "MASTER CHAIN GAUNTLET: Type the missing five-letter name of the companion in Paul’s final letter:\n\"Only Luke is with me. Take [ ? ], and bring him with thee: for he is profitable to me for the ministry\" (2 Timothy 4:11):",
    "options": [
      "Mark",
      "John Mark",
      "Timothy",
      "Titus"
    ],
    "correct_answer": "Mark",
    "explanation": "In Acts 13:13, John Mark departed at Perga, causing sharp separation between Paul and Barnabas in Acts 15:37-39. But in 2 Timothy 4:11, Paul gloriously completes the reconciliation chain: \"Take Mark, and bring him with thee: for he is profitable to me for the ministry.\"",
    "reference": "Acts 13:13; 15:37-39; 2 Timothy 4:11",
    "metadata": {
      "stage": 10,
      "stage_title": "Ultimate Bible Chain",
      "level_title": "The Master Bible Detective Gauntlet",
      "chain_type": "character_chain",
      "chain_nodes": [
        "Perga abandonment (Acts 13)",
        "Sharp dispute with Barnabas (Acts 15)",
        "Restored sister’s son (Col 4)",
        "Profitable for ministry (2 Tim 4)",
        "?"
      ],
      "is_typed": true,
      "acceptedAlternatives": [
        "John Mark",
        "Marcus"
      ],
      "difficulty": "Moderate",
      "timerSeconds": 45,
      "points": 100,
      "testament": "New Testament",
      "hint1": "Four-letter name: M-A-R-K.",
      "hint2": "2 Timothy 4:11: \"Take Mark, and bring him with thee: for he is profitable to me for the ministry.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l50-c4",
    "game_slug": "bible-chain-challenge",
    "level": 50,
    "challenge_index": 4,
    "question_text": "MASTER CHAIN GAUNTLET: Connect the seven churches of Asia in Revelation 2–3 in their exact geographical and textual sequence:\nEphesus (First Love) → Smyrna (Faithful unto Death) → Pergamos (Balaam’s doctrine) → Thyatira (Jezebel tolerated) → Sardis (Name that thou livest, but art dead) → Philadelphia (Open Door) → Which lukewarm church is spued out of Christ’s mouth?",
    "options": [
      "Laodicea",
      "Colosse",
      "Hierapolis",
      "Troas"
    ],
    "correct_answer": "Laodicea",
    "explanation": "Revelation 2–3 traces the circular postal route through the seven churches of Asia: Ephesus → Smyrna → Pergamos → Thyatira → Sardis → Philadelphia → Laodicea. Laodicea was neither cold nor hot, claiming to be rich and increased with goods, but wretched, miserable, poor, blind, and naked (Revelation 3:14-17).",
    "reference": "Revelation 1:11; 2:1–3:22",
    "metadata": {
      "stage": 10,
      "stage_title": "Ultimate Bible Chain",
      "level_title": "The Master Bible Detective Gauntlet",
      "chain_type": "five_link",
      "chain_nodes": [
        "Ephesus",
        "Smyrna",
        "Pergamos",
        "Thyatira & Sardis",
        "Philadelphia",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Easy",
      "timerSeconds": 30,
      "points": 50,
      "testament": "New Testament",
      "hint1": "The city neighboring Colosse and Hierapolis.",
      "hint2": "Revelation 3:14: \"And unto the angel of the church of the Laodiceans write.\"",
      "curated": true
    }
  },
  {
    "id": "bible-chain-l50-c5",
    "game_slug": "bible-chain-challenge",
    "level": 50,
    "challenge_index": 5,
    "question_text": "MASTER CHAIN GAUNTLET: Connect the entire Canon of Scripture from Alpha to Omega:\nGenesis 1:1: \"In the beginning God created the heaven and the earth.\"\nGenesis 3: Tree of life lost through sin in Eden.\nRevelation 22:2: Tree of life restored bearing twelve manner of fruits by the river of water of life.\nWhat are the very last words of the New Testament canon in Revelation 22:21?",
    "options": [
      "The grace of our Lord Jesus Christ be with you all. Amen.",
      "Even so, come, Lord Jesus.",
      "He which testifieth these things saith, Surely I come quickly.",
      "Holy, holy, holy, Lord God Almighty, which was, and is, and is to come."
    ],
    "correct_answer": "The grace of our Lord Jesus Christ be with you all. Amen.",
    "explanation": "Revelation 22:21 seals the entire 66 books of the Bible with the triumphant final benediction: \"The grace of our Lord Jesus Christ be with you all. Amen.\" The chain that began with creation and the fall in Genesis culminates in grace and eternal life in Revelation.",
    "reference": "Genesis 1:1; 3:22-24; Revelation 22:2, 20-21",
    "metadata": {
      "stage": 10,
      "stage_title": "Ultimate Bible Chain",
      "level_title": "The Master Bible Detective Gauntlet",
      "chain_type": "five_link",
      "chain_nodes": [
        "Genesis 1:1 Creation",
        "Genesis 3 Fall & Tree lost",
        "Gospels Redemptive Cross",
        "Revelation 22 Tree restored",
        "?"
      ],
      "is_typed": false,
      "difficulty": "Moderate",
      "timerSeconds": 60,
      "points": 100,
      "testament": "New Testament",
      "hint1": "The apostolic benediction of grace with \"Amen\".",
      "hint2": "Revelation 22:21: \"The grace of our Lord Jesus Christ be with you all. Amen.\"",
      "curated": true
    }
  }
];
