// Bible Chain Challenge — Stages 1 & 2 (Levels 1–10: 50 Challenges)
import type { ChainChallengeItem } from './generateChain1to2';

export const CHAIN_STAGES_1_TO_2: ChainChallengeItem[] = [
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
    "question_text": "Type the name of the disciple from Bethsaida who found Nathanael and said, \"We have found him, of whom Moses in the law, and the prophets, did write\":",
    "options": [
      "Philip",
      "Bartholomew",
      "Thomas",
      "James"
    ],
    "correct_answer": "Philip",
    "explanation": "Jesus finds Philip of Bethsaida → Philip finds Nathanael under the fig tree → Nathanael confesses Jesus as Son of God and King of Israel (John 1:43-49).",
    "reference": "John 1:43-46",
    "metadata": {
      "stage": 1,
      "stage_title": "Chain Foundations",
      "level_title": "Apostolic & Gospel Foundations",
      "chain_type": "character_chain",
      "chain_nodes": [
        "Bethsaida",
        "Finds Nathanael",
        "Under the fig tree",
        "?"
      ],
      "is_typed": true,
      "acceptedAlternatives": [
        "Phillip"
      ],
      "difficulty": "Easy",
      "timerSeconds": 30,
      "points": 50,
      "testament": "New Testament",
      "hint1": "When Nathanael asked, \"Can there any good thing come out of Nazareth?\" he replied, \"Come and see.\"",
      "hint2": "John 1:45: \"Philip findeth Nathanael, and saith unto him, We have found him...\"",
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
  }
];
