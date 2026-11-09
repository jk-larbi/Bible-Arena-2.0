import type { ChallengeItem } from '../bibleContentBank';

/** Verified Bible Detective cases. Five distinct evidence files per level, Levels 1–30. */
export const BIBLE_DETECTIVE_BATCH_01: ChallengeItem[] = [
  {
    "id": "bible-detective-case-l1-c1",
    "game_slug": "bible-detective",
    "level": 1,
    "challenge_index": 1,
    "question_text": "CASE FILE 01: The Broken Alabaster Jar\nInvestigate the testimony and identify the biblical event or person.",
    "correct_answer": "The Sinful Woman Who Anointed Jesus' Feet",
    "options": [
      "The Sinful Woman Who Anointed Jesus' Feet",
      "Mary of Bethany at Bethany",
      "The Woman with the Issue of Blood",
      "The Samaritan Woman"
    ],
    "reference": "Luke 7:36-50",
    "explanation": "Jesus contrasted the woman's love with Simon's lack of hospitality and declared her sins forgiven.",
    "metadata": {
      "difficulty": "beginner",
      "case_title": "The Broken Alabaster Jar",
      "clues": [
        "Evidence A — A woman entered a Pharisee's house while Jesus was reclining at the table.",
        "Evidence B — She stood behind him weeping; her tears wet his feet, which she wiped with her hair.",
        "Evidence C — The host silently questioned how Jesus could accept her touch; Jesus answered with a story about two debtors."
      ],
      "investigation_type": "multi_evidence_case",
      "fact_key": "detective-case-1"
    }
  },
  {
    "id": "bible-detective-case-l1-c2",
    "game_slug": "bible-detective",
    "level": 1,
    "challenge_index": 2,
    "question_text": "CASE FILE 02: The Missing Body and the Unburned Clothes\nInvestigate the testimony and identify the biblical event or person.",
    "correct_answer": "The Healing of the Royal Official's Son",
    "options": [
      "The Healing of the Royal Official's Son",
      "The Centurion's Servant",
      "Jairus' Daughter",
      "The Widow of Nain's Son"
    ],
    "reference": "John 4:46-54",
    "explanation": "The royal official's son was healed at the seventh hour, and the household believed.",
    "metadata": {
      "difficulty": "beginner",
      "case_title": "The Missing Body and the Unburned Clothes",
      "clues": [
        "Evidence A — A royal official's servant died, yet the official was told to go home because his son lived.",
        "Evidence B — The healing happened at the exact hour Jesus said the fever had left.",
        "Evidence C — The official learned the time from his servants and connected it to Jesus' word."
      ],
      "investigation_type": "multi_evidence_case",
      "fact_key": "detective-case-2"
    }
  },
  {
    "id": "bible-detective-case-l1-c3",
    "game_slug": "bible-detective",
    "level": 1,
    "challenge_index": 3,
    "question_text": "CASE FILE 03: The Unusual Witness at the City Gate\nInvestigate the testimony and identify the biblical event or person.",
    "correct_answer": "The Four Lepers Discover the Aramean Camp",
    "options": [
      "The Four Lepers Discover the Aramean Camp",
      "The Spies Return from Canaan",
      "Gideon's Night Raid",
      "The Gibeonites' Deception"
    ],
    "reference": "2 Kings 7:3-11",
    "explanation": "The four men with leprosy found the Aramean camp deserted and reported it to Samaria.",
    "metadata": {
      "difficulty": "beginner",
      "case_title": "The Unusual Witness at the City Gate",
      "clues": [
        "Evidence A — A famine-stricken capital had four men excluded from ordinary society at its gate.",
        "Evidence B — They discovered the enemy camp abandoned, with food and valuables left behind.",
        "Evidence C — They first hid supplies, then returned to report the news instead of keeping it secret."
      ],
      "investigation_type": "multi_evidence_case",
      "fact_key": "detective-case-3"
    }
  },
  {
    "id": "bible-detective-case-l1-c4",
    "game_slug": "bible-detective",
    "level": 1,
    "challenge_index": 4,
    "question_text": "CASE FILE 04: The Unclaimed Inheritance\nInvestigate the testimony and identify the biblical event or person.",
    "correct_answer": "The Daughters of Zelophehad",
    "options": [
      "The Daughters of Zelophehad",
      "The Daughters of Job",
      "The Daughters of Jethro",
      "The Daughters of Caleb"
    ],
    "reference": "Numbers 27:1-11; 36:1-12",
    "explanation": "Mahlah, Noah, Hoglah, Milcah and Tirzah received an inheritance ruling from the LORD.",
    "metadata": {
      "difficulty": "beginner",
      "case_title": "The Unclaimed Inheritance",
      "clues": [
        "Evidence A — A man died without sons, and his daughters approached the entrance of the tent of meeting.",
        "Evidence B — They asked why their father's name should disappear because he had no son.",
        "Evidence C — Moses brought their case before the LORD, and the ruling changed Israel's inheritance law."
      ],
      "investigation_type": "multi_evidence_case",
      "fact_key": "detective-case-4"
    }
  },
  {
    "id": "bible-detective-case-l1-c5",
    "game_slug": "bible-detective",
    "level": 1,
    "challenge_index": 5,
    "question_text": "CASE FILE 05: The Unusual Census Payment\nInvestigate the testimony and identify the biblical event or person.",
    "correct_answer": "The Half-Shekel Census Offering",
    "options": [
      "The Half-Shekel Census Offering",
      "The Temple Tax in Jesus' Day",
      "The Widow's Offering",
      "David's Census of Israel"
    ],
    "reference": "Exodus 30:11-16",
    "explanation": "Exodus prescribes a half-shekel ransom for each person counted in the census.",
    "metadata": {
      "difficulty": "beginner",
      "case_title": "The Unusual Census Payment",
      "clues": [
        "Evidence A — A census was ordered among Israel's men eligible for military service.",
        "Evidence B — Each counted person was to give the same half-shekel amount, regardless of wealth.",
        "Evidence C — The payment was called atonement money and was assigned to the service of the tent of meeting."
      ],
      "investigation_type": "multi_evidence_case",
      "fact_key": "detective-case-5"
    }
  },
  {
    "id": "bible-detective-case-l2-c1",
    "game_slug": "bible-detective",
    "level": 2,
    "challenge_index": 1,
    "question_text": "CASE FILE 006: The Trees Seeking a King\nInvestigate the evidence and identify the biblical event or person.",
    "correct_answer": "Jotham's Parable of the Trees",
    "options": [
      "Jotham's Parable of the Trees",
      "Nathan's Parable of the Ewe Lamb",
      "Gideon's Fleece",
      "Joash's Temple Chest"
    ],
    "reference": "Judges 9:7-21",
    "explanation": "Jotham told the people of Shechem a parable in which the olive, fig and vine declined kingship, while the bramble accepted it and warned of fire.",
    "metadata": {
      "difficulty": "beginner",
      "case_title": "The Trees Seeking a King",
      "clues": [
        "A surviving son of Gideon addressed the people from Mount Gerizim after a violent struggle over kingship.",
        "In his story, the olive tree, fig tree and vine each refused to abandon their useful work to rule the trees.",
        "A bramble accepted the offer and warned that fire could come from it and consume the cedars of Lebanon."
      ],
      "investigation_type": "multi_evidence_case",
      "fact_key": "detective-rebuilt-2-1"
    }
  },
  {
    "id": "bible-detective-case-l2-c2",
    "game_slug": "bible-detective",
    "level": 2,
    "challenge_index": 2,
    "question_text": "CASE FILE 07: The Prophetic Sign of Two Sticks\nInvestigate the testimony and identify the biblical event or person.",
    "correct_answer": "Ezekiel's Two Sticks",
    "options": [
      "Ezekiel's Two Sticks",
      "Aaron's Rod That Budded",
      "Moses' Two Tablets",
      "Zechariah's Two Olive Trees"
    ],
    "reference": "Ezekiel 37:15-28",
    "explanation": "The joined sticks symbolised the reunification of Israel under one king.",
    "metadata": {
      "difficulty": "beginner",
      "case_title": "The Prophetic Sign of Two Sticks",
      "clues": [
        "Evidence A — A prophet was told to write two names on separate pieces of wood.",
        "Evidence B — One stick represented Judah and its companions; the other represented Joseph/Ephraim.",
        "Evidence C — The pieces were joined in the prophet's hand as a sign of one reunited people."
      ],
      "investigation_type": "multi_evidence_case",
      "fact_key": "detective-case-7"
    }
  },
  {
    "id": "bible-detective-case-l2-c3",
    "game_slug": "bible-detective",
    "level": 2,
    "challenge_index": 3,
    "question_text": "CASE FILE 08: The Prisoner Who Sent Back a Runaway\nInvestigate the testimony and identify the biblical event or person.",
    "correct_answer": "Paul's Appeal for Onesimus",
    "options": [
      "Paul's Appeal for Onesimus",
      "Paul's Appeal for Mark",
      "Peter's Appeal for Silas",
      "John's Appeal for Demetrius"
    ],
    "reference": "Philemon 1:8-18",
    "explanation": "Paul appealed to Philemon to receive Onesimus as a brother, not merely as a servant.",
    "metadata": {
      "difficulty": "beginner",
      "case_title": "The Prisoner Who Sent Back a Runaway",
      "clues": [
        "Evidence A — A letter was written by a prisoner concerning a man who had become a Christian.",
        "Evidence B — The writer called the man his child, saying he had become his father while in chains.",
        "Evidence C — The request was not merely to receive him back, but to welcome him as a beloved brother."
      ],
      "investigation_type": "multi_evidence_case",
      "fact_key": "detective-case-8"
    }
  },
  {
    "id": "bible-detective-case-l2-c4",
    "game_slug": "bible-detective",
    "level": 2,
    "challenge_index": 4,
    "question_text": "CASE FILE 09: The Courtroom Split Over a Resurrection\nInvestigate the testimony and identify the biblical event or person.",
    "correct_answer": "Paul Before the Sanhedrin",
    "options": [
      "Paul Before the Sanhedrin",
      "Stephen Before the Sanhedrin",
      "Peter Before the Council",
      "Jesus Before Caiaphas"
    ],
    "reference": "Acts 23:1-10",
    "explanation": "Paul's statement about resurrection divided the Pharisees and Sadducees.",
    "metadata": {
      "difficulty": "beginner",
      "case_title": "The Courtroom Split Over a Resurrection",
      "clues": [
        "Evidence A — A prisoner stood before a council made up of two rival Jewish groups.",
        "Evidence B — He declared that he was being judged concerning the hope of the resurrection of the dead.",
        "Evidence C — The declaration divided the council because one group denied resurrection, angels and spirits."
      ],
      "investigation_type": "multi_evidence_case",
      "fact_key": "detective-case-9"
    }
  },
  {
    "id": "bible-detective-case-l2-c5",
    "game_slug": "bible-detective",
    "level": 2,
    "challenge_index": 5,
    "question_text": "CASE FILE 10: The Unknown Altar in Athens\nInvestigate the testimony and identify the biblical event or person.",
    "correct_answer": "Paul at the Areopagus",
    "options": [
      "Paul at the Areopagus",
      "Paul in Ephesus",
      "Peter at Pentecost",
      "Barnabas in Lystra"
    ],
    "reference": "Acts 17:16-31",
    "explanation": "Paul referred to the altar 'To the Unknown God' in his speech in Athens.",
    "metadata": {
      "difficulty": "beginner",
      "case_title": "The Unknown Altar in Athens",
      "clues": [
        "Evidence A — A travelling teacher examined religious objects in a Greek city.",
        "Evidence B — He found an altar bearing an inscription to an unknown deity.",
        "Evidence C — He used the inscription to introduce the Creator who does not live in temples made by hands."
      ],
      "investigation_type": "multi_evidence_case",
      "fact_key": "detective-case-10"
    }
  },
  {
    "id": "bible-detective-case-l3-c1",
    "game_slug": "bible-detective",
    "level": 3,
    "challenge_index": 1,
    "question_text": "CASE FILE 011: The Voice in the Night at Shiloh\nInvestigate the evidence and identify the biblical event or person.",
    "correct_answer": "Samuel's Call at Shiloh",
    "options": [
      "Samuel's Call at Shiloh",
      "Elijah's Call at Horeb",
      "Samuel Anoints Saul",
      "Micaiah's Vision of the Heavenly Court"
    ],
    "reference": "1 Samuel 3:1-18",
    "explanation": "The LORD called Samuel during the night; Eli eventually understood what was happening and instructed the boy to answer the LORD.",
    "metadata": {
      "difficulty": "beginner",
      "case_title": "The Voice in the Night at Shiloh",
      "clues": [
        "A young attendant served under an elderly priest while the word of the LORD was rare.",
        "He heard his name called during the night and repeatedly ran to the priest, thinking he had been summoned.",
        "The priest told him to answer, 'Speak, LORD, for your servant hears'; the message concerned judgment on the priest's household."
      ],
      "investigation_type": "multi_evidence_case",
      "fact_key": "detective-rebuilt-3-1"
    }
  },
  {
    "id": "bible-detective-case-l3-c2",
    "game_slug": "bible-detective",
    "level": 3,
    "challenge_index": 2,
    "question_text": "CASE FILE 12: The Man Who Was Not to Be Harmed\nInvestigate the testimony and identify the biblical event or person.",
    "correct_answer": "The Plot Against Paul",
    "options": [
      "The Plot Against Paul",
      "The Plot Against Peter",
      "The Plot Against Stephen",
      "The Plot Against Barnabas"
    ],
    "reference": "Acts 23:12-35",
    "explanation": "Paul's nephew warned the Roman commander of the ambush planned by conspirators.",
    "metadata": {
      "difficulty": "beginner",
      "case_title": "The Man Who Was Not to Be Harmed",
      "clues": [
        "Evidence A — A commander of the Roman cohort protected a prisoner from a plot.",
        "Evidence B — More than forty men had sworn not to eat or drink until they killed the prisoner.",
        "Evidence C — The prisoner's nephew heard the plot and reported it to the commander."
      ],
      "investigation_type": "multi_evidence_case",
      "fact_key": "detective-case-12"
    }
  },
  {
    "id": "bible-detective-case-l3-c3",
    "game_slug": "bible-detective",
    "level": 3,
    "challenge_index": 3,
    "question_text": "CASE FILE 13: The Prophet Who Challenged a Royal Wedding\nInvestigate the testimony and identify the biblical event or person.",
    "correct_answer": "John the Baptist and Herod Antipas",
    "options": [
      "John the Baptist and Herod Antipas",
      "Elijah and Ahab",
      "Micaiah and Ahab",
      "Nathan and David"
    ],
    "reference": "Mark 6:17-29",
    "explanation": "John rebuked Herod for marrying Herodias, his brother's wife, and was executed after Herod's oath.",
    "metadata": {
      "difficulty": "beginner",
      "case_title": "The Prophet Who Challenged a Royal Wedding",
      "clues": [
        "Evidence A — A prophet confronted a ruler for taking his brother's wife.",
        "Evidence B — The ruler imprisoned the prophet, but feared him because he knew him to be righteous and holy.",
        "Evidence C — At a birthday banquet, a promise made to a dancer led to the prophet's execution."
      ],
      "investigation_type": "multi_evidence_case",
      "fact_key": "detective-case-13"
    }
  },
  {
    "id": "bible-detective-case-l3-c4",
    "game_slug": "bible-detective",
    "level": 3,
    "challenge_index": 4,
    "question_text": "CASE FILE 14: The Contract Sealed Before Exile\nInvestigate the testimony and identify the biblical event or person.",
    "correct_answer": "Jeremiah Buys Hanamel's Field",
    "options": [
      "Jeremiah Buys Hanamel's Field",
      "Boaz Redeems Ruth's Land",
      "Abraham Buys Machpelah",
      "David Buys Araunah's Threshing Floor"
    ],
    "reference": "Jeremiah 32:6-15",
    "explanation": "Jeremiah bought his cousin Hanamel's field at Anathoth as a sign of future restoration.",
    "metadata": {
      "difficulty": "beginner",
      "case_title": "The Contract Sealed Before Exile",
      "clues": [
        "Evidence A — A prophet was told to buy a field while the city was under siege.",
        "Evidence B — The deed was signed, witnessed and sealed, with a copy left unsealed for reference.",
        "Evidence C — The documents were placed in an earthen vessel so they would last many days."
      ],
      "investigation_type": "multi_evidence_case",
      "fact_key": "detective-case-14"
    }
  },
  {
    "id": "bible-detective-case-l3-c5",
    "game_slug": "bible-detective",
    "level": 3,
    "challenge_index": 5,
    "question_text": "CASE FILE 15: The Man Who Refused to Strike the Ground Enough\nInvestigate the testimony and identify the biblical event or person.",
    "correct_answer": "Joash and Elisha's Arrows",
    "options": [
      "Joash and Elisha's Arrows",
      "Jehoash and the Bow of Jehu",
      "Hezekiah and the Assyrian Threat",
      "Amaziah and the Edomites"
    ],
    "reference": "2 Kings 13:14-19",
    "explanation": "Elisha rebuked Joash for striking the ground only three times after the arrow of deliverance.",
    "metadata": {
      "difficulty": "beginner",
      "case_title": "The Man Who Refused to Strike the Ground Enough",
      "clues": [
        "Evidence A — A dying prophet told a king to take a bow and arrows and strike the ground.",
        "Evidence B — The king struck the ground three times and stopped.",
        "Evidence C — The prophet became angry because the king would now defeat Aram only three times rather than completely."
      ],
      "investigation_type": "multi_evidence_case",
      "fact_key": "detective-case-15"
    }
  },
  {
    "id": "bible-detective-case-l4-c1",
    "game_slug": "bible-detective",
    "level": 4,
    "challenge_index": 1,
    "question_text": "CASE FILE 16: The Two Prophets and the Disputed Burial\nInvestigate the testimony and identify the biblical event or person.",
    "correct_answer": "The Man of God from Judah",
    "options": [
      "The Man of God from Judah",
      "Elijah at Cherith",
      "Micaiah son of Imlah",
      "Hanani the Seer"
    ],
    "reference": "1 Kings 13:11-32",
    "explanation": "The unnamed man of God from Judah disobeyed the LORD's instruction and was killed by a lion.",
    "metadata": {
      "difficulty": "beginner",
      "case_title": "The Two Prophets and the Disputed Burial",
      "clues": [
        "Evidence A — An older prophet persuaded a younger man of God to eat with him despite a contrary instruction.",
        "Evidence B — The younger prophet died on the road after disobeying the word he had received.",
        "Evidence C — A lion stood beside the corpse and the donkey, but neither animal was eaten."
      ],
      "investigation_type": "multi_evidence_case",
      "fact_key": "detective-case-16"
    }
  },
  {
    "id": "bible-detective-case-l4-c2",
    "game_slug": "bible-detective",
    "level": 4,
    "challenge_index": 2,
    "question_text": "CASE FILE 17: The Battle Plan Hidden in a Dream\nInvestigate the testimony and identify the biblical event or person.",
    "correct_answer": "Gideon Overhears the Midianite Dream",
    "options": [
      "Gideon Overhears the Midianite Dream",
      "Joseph Interprets Pharaoh's Dream",
      "Daniel Interprets Nebuchadnezzar's Dream",
      "Jonathan's Armour-Bearer"
    ],
    "reference": "Judges 7:9-15",
    "explanation": "Gideon overheard a Midianite's dream and its interpretation before attacking the camp.",
    "metadata": {
      "difficulty": "beginner",
      "case_title": "The Battle Plan Hidden in a Dream",
      "clues": [
        "Evidence A — A Midianite soldier told a companion about a dream involving a barley loaf.",
        "Evidence B — The loaf rolled into the camp and struck a tent, which collapsed.",
        "Evidence C — The companion interpreted the dream as God's giving the Midianite camp into Gideon's hand."
      ],
      "investigation_type": "multi_evidence_case",
      "fact_key": "detective-case-17"
    }
  },
  {
    "id": "bible-detective-case-l4-c3",
    "game_slug": "bible-detective",
    "level": 4,
    "challenge_index": 3,
    "question_text": "CASE FILE 18: The Priest Who Hid the Royal Heir\nInvestigate the testimony and identify the biblical event or person.",
    "correct_answer": "Jehoash Hidden by Jehosheba",
    "options": [
      "Jehoash Hidden by Jehosheba",
      "Joash Hidden by Athaliah",
      "Moses Hidden by Pharaoh's Daughter",
      "Josiah Hidden by Hilkiah"
    ],
    "reference": "2 Kings 11:1-12",
    "explanation": "Jehosheba hid Joash, and Jehoiada later brought him out to be crowned king.",
    "metadata": {
      "difficulty": "beginner",
      "case_title": "The Priest Who Hid the Royal Heir",
      "clues": [
        "Evidence A — A queen attempted to destroy the royal descendants after her son's death.",
        "Evidence B — A princess took a young child and his nurse and hid them in a bedroom.",
        "Evidence C — The child remained hidden in the temple for six years before being crowned."
      ],
      "investigation_type": "multi_evidence_case",
      "fact_key": "detective-case-18"
    }
  },
  {
    "id": "bible-detective-case-l4-c4",
    "game_slug": "bible-detective",
    "level": 4,
    "challenge_index": 4,
    "question_text": "CASE FILE 019: The Mountain Claimed at Eighty-Five\nInvestigate the evidence and identify the biblical event or person.",
    "correct_answer": "Caleb Receives Hebron",
    "options": [
      "Caleb Receives Hebron",
      "Joshua Receives Timnath-serah",
      "Othniel Receives Achsah",
      "The Daughters of Zelophehad Receive an Inheritance"
    ],
    "reference": "Joshua 14:6-15",
    "explanation": "Caleb reminded Joshua of the promise Moses had made and received Hebron as his inheritance because he had followed the LORD wholeheartedly.",
    "metadata": {
      "difficulty": "beginner",
      "case_title": "The Mountain Claimed at Eighty-Five",
      "clues": [
        "An older leader from the tribe of Judah approached Joshua at Gilgal and recalled the earlier mission to scout Canaan.",
        "He said forty-five years had passed since Moses sent him from Kadesh-barnea, and he was now eighty-five.",
        "Rather than request an easy portion, he asked for the hill country where the Anakim still lived."
      ],
      "investigation_type": "multi_evidence_case",
      "fact_key": "detective-rebuilt-4-4"
    }
  },
  {
    "id": "bible-detective-case-l4-c5",
    "game_slug": "bible-detective",
    "level": 4,
    "challenge_index": 5,
    "question_text": "CASE FILE 20: The Prophet Who Bought Back His Wife\nInvestigate the testimony and identify the biblical event or person.",
    "correct_answer": "Hosea Redeems Gomer",
    "options": [
      "Hosea Redeems Gomer",
      "Boaz Redeems Ruth",
      "Jeremiah Buys a Field",
      "Abraham Marries Hagar"
    ],
    "reference": "Hosea 3:1-5",
    "explanation": "Hosea bought Gomer back as a sign of the LORD's continued love for unfaithful Israel.",
    "metadata": {
      "difficulty": "beginner",
      "case_title": "The Prophet Who Bought Back His Wife",
      "clues": [
        "Evidence A — A prophet was told to love a woman who was loved by another and was adulterous.",
        "Evidence B — He bought her for fifteen pieces of silver and a quantity of barley.",
        "Evidence C — She was told to remain with him for many days without prostitution or another man."
      ],
      "investigation_type": "multi_evidence_case",
      "fact_key": "detective-case-20"
    }
  },
  {
    "id": "bible-detective-case-l5-c1",
    "game_slug": "bible-detective",
    "level": 5,
    "challenge_index": 1,
    "question_text": "CASE FILE 21: The Queen Who Asked for a Second Banquet\nInvestigate the testimony and identify the biblical event or person.",
    "correct_answer": "Esther Exposes Haman",
    "options": [
      "Esther Exposes Haman",
      "Vashti Refuses the King",
      "Bathsheba Appeals to David",
      "Athaliah Seizes the Throne"
    ],
    "reference": "Esther 7:1-6",
    "explanation": "Esther exposed Haman's plot during the second banquet and pleaded for her people.",
    "metadata": {
      "difficulty": "beginner",
      "case_title": "The Queen Who Asked for a Second Banquet",
      "clues": [
        "Evidence A — A royal decree threatened the lives of a people scattered through an empire.",
        "Evidence B — A queen approached the king uninvited, then invited him and the enemy official to two banquets.",
        "Evidence C — At the second banquet she identified her own people and exposed the plot against them."
      ],
      "investigation_type": "multi_evidence_case",
      "fact_key": "detective-case-21"
    }
  },
  {
    "id": "bible-detective-case-l5-c2",
    "game_slug": "bible-detective",
    "level": 5,
    "challenge_index": 2,
    "question_text": "CASE FILE 22: The Vision of the Flying Scroll\nInvestigate the testimony and identify the biblical event or person.",
    "correct_answer": "Zechariah's Flying Scroll",
    "options": [
      "Zechariah's Flying Scroll",
      "Ezekiel's Scroll",
      "Daniel's Sealed Book",
      "Jeremiah's Burned Scroll"
    ],
    "reference": "Zechariah 5:1-4",
    "explanation": "Zechariah's flying scroll represented judgment against theft and false swearing.",
    "metadata": {
      "difficulty": "beginner",
      "case_title": "The Vision of the Flying Scroll",
      "clues": [
        "Evidence A — A prophet saw a scroll flying through the air.",
        "Evidence B — The scroll was twenty cubits long and ten cubits wide.",
        "Evidence C — It represented a curse entering the houses of thieves and those who swore falsely."
      ],
      "investigation_type": "multi_evidence_case",
      "fact_key": "detective-case-22"
    }
  },
  {
    "id": "bible-detective-case-l5-c3",
    "game_slug": "bible-detective",
    "level": 5,
    "challenge_index": 3,
    "question_text": "CASE FILE 23: The Basket That Measured Wickedness\nInvestigate the testimony and identify the biblical event or person.",
    "correct_answer": "Zechariah's Ephah Vision",
    "options": [
      "Zechariah's Ephah Vision",
      "Amos' Basket of Summer Fruit",
      "Jeremiah's Linen Belt",
      "Ezekiel's Measuring Line"
    ],
    "reference": "Zechariah 5:5-11",
    "explanation": "The ephah vision depicted Wickedness being carried to Shinar.",
    "metadata": {
      "difficulty": "beginner",
      "case_title": "The Basket That Measured Wickedness",
      "clues": [
        "Evidence A — A prophet saw a basket with a lead cover lifted away.",
        "Evidence B — A woman called Wickedness sat inside, and she was pushed back into the basket.",
        "Evidence C — Two women with wings carried it to Shinar to build a house for it."
      ],
      "investigation_type": "multi_evidence_case",
      "fact_key": "detective-case-23"
    }
  },
  {
    "id": "bible-detective-case-l5-c4",
    "game_slug": "bible-detective",
    "level": 5,
    "challenge_index": 4,
    "question_text": "CASE FILE 024: The Midnight Hymns in Philippi\nInvestigate the evidence and identify the biblical event or person.",
    "correct_answer": "Paul and Silas in the Philippian Jail",
    "options": [
      "Paul and Silas in the Philippian Jail",
      "Peter Escapes Herod's Prison",
      "Paul's Shipwreck on Malta",
      "The Apostles Released by an Angel"
    ],
    "reference": "Acts 16:16-40",
    "explanation": "After a slave girl's owners stirred up opposition, Paul and Silas were beaten and imprisoned; an earthquake opened the prison, and the jailer and his household believed.",
    "metadata": {
      "difficulty": "beginner",
      "case_title": "The Midnight Hymns in Philippi",
      "clues": [
        "A slave girl followed two missionaries through a Macedonian city, crying out about them; her owners profited from her fortune-telling.",
        "After the missionaries removed the spirit, the owners dragged them before magistrates, who ordered them beaten and jailed.",
        "At midnight the prisoners prayed and sang; an earthquake opened the doors, and the jailer asked what he must do to be saved."
      ],
      "investigation_type": "multi_evidence_case",
      "fact_key": "detective-rebuilt-5-4"
    }
  },
  {
    "id": "bible-detective-case-l5-c5",
    "game_slug": "bible-detective",
    "level": 5,
    "challenge_index": 5,
    "question_text": "CASE FILE 25: The Council's Unexpected Adviser\nInvestigate the testimony and identify the biblical event or person.",
    "correct_answer": "Gamaliel's Counsel",
    "options": [
      "Gamaliel's Counsel",
      "Nicodemus' Defence",
      "Joseph of Arimathea's Appeal",
      "Caiaphas' Prophecy"
    ],
    "reference": "Acts 5:34-39",
    "explanation": "Gamaliel advised caution when the council considered killing the apostles.",
    "metadata": {
      "difficulty": "beginner",
      "case_title": "The Council's Unexpected Adviser",
      "clues": [
        "Evidence A — A respected Pharisee stood up after apostles were brought before the council.",
        "Evidence B — He recalled earlier failed uprisings led by Theudas and Judas the Galilean.",
        "Evidence C — He advised the council to leave the apostles alone, warning that opposing God would fail."
      ],
      "investigation_type": "multi_evidence_case",
      "fact_key": "detective-case-25"
    }
  }
];
