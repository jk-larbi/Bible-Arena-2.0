export interface EmojiPuzzle {
  id: string;
  level: number;
  difficulty: 'Easy' | 'Medium' | 'Hard' | 'Expert';
  emojis: string;
  answer: string;
  acceptedAnswers: string[];
  options?: string[]; // Multiple choice options for fast mobile play
  hint: string;
  reference: string;
  explanation: string;
  category: 'Story' | 'Character' | 'Miracle' | 'Place' | 'Teaching';
}

export const EMOJI_PUZZLES: EmojiPuzzle[] = [
  // --- LEVELS 1-10: Familiar Bible Stories ---
  {
    id: 'em-1',
    level: 1,
    difficulty: 'Easy',
    emojis: '🌧️ 🛶 🦒 🌈',
    answer: "Noah's Ark",
    acceptedAnswers: ["Noah's Ark", "Noahs Ark", "The Ark of Noah", "Ark of Noah", "Noah Ark"],
    options: ["Noah's Ark", "Crossing the Red Sea", "Creation of Animals", "The Great Flood"],
    hint: "Genesis 6: A massive wooden vessel built to survive forty days of deluge.",
    reference: "Genesis 6:14-22",
    explanation: "Noah built an ark at God's command to save his household and two of every living creature from the great deluge, culminating in God's rainbow covenant.",
    category: 'Story'
  },
  {
    id: 'em-2',
    level: 2,
    difficulty: 'Easy',
    emojis: '🐟 👨 🌊 🗯️',
    answer: "Jonah and the Great Fish",
    acceptedAnswers: ["Jonah and the Great Fish", "Jonah", "Jonah and the Whale", "Jonah and the Fish"],
    options: ["Jonah and the Great Fish", "Peter Fishing", "Miraculous Catch of Fish", "Walking on Water"],
    hint: "Jonah 1: A reluctant prophet spent three days in the belly of a leviathan after fleeing to Tarshish.",
    reference: "Jonah 1:17 - 2:10",
    explanation: "Jonah tried fleeing from Nineveh, but after a violent storm, he was swallowed by a great fish where he prayed for three days before being vomited onto dry land.",
    category: 'Story'
  },
  {
    id: 'em-3',
    level: 3,
    difficulty: 'Easy',
    emojis: '👶 ⭐ 🐑 👑 ✝️',
    answer: "The Birth of Jesus",
    acceptedAnswers: ["The Birth of Jesus", "Birth of Jesus", "The Nativity", "Nativity", "Jesus Birth"],
    options: ["The Birth of Jesus", "The Epiphany", "Presentation in Temple", "Flight to Egypt"],
    hint: "Luke 2: A savior born in a manger beneath a shining star in Bethlehem.",
    reference: "Luke 2:1-20",
    explanation: "Jesus was born in Bethlehem, laid in a manger because there was no room in the inn, while angels announced his birth to shepherds abiding in the fields.",
    category: 'Story'
  },
  {
    id: 'em-4',
    level: 4,
    difficulty: 'Easy',
    emojis: '🌊 🧔 🪄 🏜️',
    answer: "Moses Parting the Red Sea",
    acceptedAnswers: ["Moses Parting the Red Sea", "Red Sea Crossing", "Parting of the Red Sea", "Red Sea", "Moses Red Sea"],
    options: ["Moses Parting the Red Sea", "Crossing the Jordan", "Water from the Rock", "Plagues of Egypt"],
    hint: "Exodus 14: A leader raised his staff, walling up the sea for Israel to pass on dry ground.",
    reference: "Exodus 14:21-31",
    explanation: "Moses stretched out his hand over the sea, and the Lord drove the sea back with a strong east wind, allowing the Israelites to cross safely while Pharaoh's army was swallowed.",
    category: 'Story'
  },
  {
    id: 'em-5',
    level: 5,
    difficulty: 'Easy',
    emojis: '🦁 🙏 👨 🏰',
    answer: "Daniel in the Lions' Den",
    acceptedAnswers: ["Daniel in the Lions' Den", "Daniel in the Lions Den", "Daniel and the Lions", "Daniel Lions Den"],
    options: ["Daniel in the Lions' Den", "Samson Fighting Lions", "David Slays a Lion", "The Lion of Judah"],
    hint: "Daniel 6: A faithful advisor was thrown to wild beasts for praying to God three times a day.",
    reference: "Daniel 6:16-23",
    explanation: "King Darius threw Daniel into a den of lions for continuing his daily prayers, but God sent an angel to shut the lions' mouths.",
    category: 'Story'
  },
  {
    id: 'em-6',
    level: 6,
    difficulty: 'Easy',
    emojis: '🍞 🍞 🍞 🍞 🍞 🐟 🐟',
    answer: "Feeding the Five Thousand",
    acceptedAnswers: ["Feeding the Five Thousand", "Feeding the 5000", "Five Loaves and Two Fish", "Loaves and Fishes", "Feeding 5000"],
    options: ["Feeding the Five Thousand", "Manna from Heaven", "The Last Supper", "Wedding at Cana"],
    hint: "Matthew 14: Five barley loaves and two small fish multiplied to feed a massive crowd.",
    reference: "Matthew 14:13-21",
    explanation: "Jesus took five loaves and two fish, gave thanks, broke them, and his disciples distributed the food to 5,000 men besides women and children, with 12 baskets left over.",
    category: 'Miracle'
  },
  {
    id: 'em-7',
    level: 7,
    difficulty: 'Easy',
    emojis: '🪨 🧔 🏹 🛡️ 🏆',
    answer: "David and Goliath",
    acceptedAnswers: ["David and Goliath", "David vs Goliath", "David & Goliath", "Slaying Goliath"],
    options: ["David and Goliath", "Samson and Philistines", "Saul's Armor", "Battle of Jericho"],
    hint: "1 Samuel 17: A shepherd boy used a sling and five smooth stones to defeat a Philistine giant.",
    reference: "1 Samuel 17:40-50",
    explanation: "Armed only with a shepherd's staff, sling, and faith in the God of Israel, David struck the giant Goliath of Gath down with a single stone.",
    category: 'Story'
  },
  {
    id: 'em-8',
    level: 8,
    difficulty: 'Easy',
    emojis: '🌳 🍎 🐍 👫',
    answer: "Adam and Eve in the Garden of Eden",
    acceptedAnswers: ["Adam and Eve", "Garden of Eden", "Adam and Eve in the Garden", "The Fall of Man"],
    options: ["Adam and Eve in the Garden of Eden", "Cain and Abel", "Tree of Life", "Temptation of Jesus"],
    hint: "Genesis 3: The first man and woman tempted by a serpent near the tree of knowledge.",
    reference: "Genesis 3:1-19",
    explanation: "Eve and Adam ate the forbidden fruit after being deceived by the serpent, bringing sin and mortality into human history.",
    category: 'Story'
  },
  {
    id: 'em-9',
    level: 9,
    difficulty: 'Easy',
    emojis: '🧱 🏗️ 🗣️ 🌍',
    answer: "Tower of Babel",
    acceptedAnswers: ["Tower of Babel", "Babel", "The Tower of Babel", "Building of Babel"],
    options: ["Tower of Babel", "Walls of Jericho", "Solomon's Temple", "Nehemiah's Wall"],
    hint: "Genesis 11: Humanity tried building a tower reaching heaven, resulting in confused tongues.",
    reference: "Genesis 11:1-9",
    explanation: "Humanity sought to make a name for themselves by building a tower to heaven, so God confused their single language and scattered them across the earth.",
    category: 'Story'
  },
  {
    id: 'em-10',
    level: 10,
    difficulty: 'Easy',
    emojis: '🔥 🪵 🌿 🗣️',
    answer: "Moses and the Burning Bush",
    acceptedAnswers: ["Moses and the Burning Bush", "The Burning Bush", "Burning Bush", "Moses Burning Bush"],
    options: ["Moses and the Burning Bush", "Pillar of Fire", "Elijah's Altar Fire", "Pentecost Tongue of Fire"],
    hint: "Exodus 3: A bush burned with fire on Mount Horeb yet was not consumed.",
    reference: "Exodus 3:1-6",
    explanation: "God called to Moses out of a burning bush that was not consumed by the flame, commanding him to return to Egypt and deliver his people.",
    category: 'Story'
  },

  // --- LEVELS 11-20: Well-Known Characters ---
  {
    id: 'em-11',
    level: 11,
    difficulty: 'Medium',
    emojis: '🧥 🌈 🌾 👑',
    answer: "Joseph and the Coat of Many Colors",
    acceptedAnswers: ["Joseph and the Coat of Many Colors", "Joseph's Coat", "Joseph and his Coat", "Coat of Many Colors", "Joseph in Egypt"],
    options: ["Joseph and the Coat of Many Colors", "Jacob's Ladder", "Benjamin's Sack", "Dreams of Pharaoh"],
    hint: "Genesis 37: A beloved son given a ornate robe by his father Jacob, triggering his brothers' envy.",
    reference: "Genesis 37:3-36",
    explanation: "Jacob favored Joseph and gave him a tunic of many colors. His jealous brothers sold him into slavery in Egypt, where God later raised him to governor.",
    category: 'Character'
  },
  {
    id: 'em-12',
    level: 12,
    difficulty: 'Medium',
    emojis: '🌾 🌾 👩‍🌾 💍',
    answer: "Ruth and Boaz",
    acceptedAnswers: ["Ruth and Boaz", "Ruth", "Book of Ruth", "Ruth Gleaning"],
    options: ["Ruth and Boaz", "Esther and Xerxes", "Mary and Joseph", "Isaac and Rebekah"],
    hint: "Ruth 2: A devoted Moabite widow gleaning barley in the fields of her kinsman redeemer.",
    reference: "Ruth 2:1-12",
    explanation: "Ruth loyally accompanied her mother-in-law Naomi to Bethlehem, gleaning in the barley fields of Boaz, who acted as her kinsman-redeemer.",
    category: 'Character'
  },
  {
    id: 'em-13',
    level: 13,
    difficulty: 'Medium',
    emojis: '👑 👩 🍇 📜',
    answer: "Queen Esther",
    acceptedAnswers: ["Queen Esther", "Esther", "Queen Esther Saves Her People", "Purim"],
    options: ["Queen Esther", "Queen of Sheba", "Jezebel", "Athaliah"],
    hint: "Esther 4: A brave Jewish queen who approached King Ahasuerus saying 'If I perish, I perish.'",
    reference: "Esther 4:14-16",
    explanation: "Esther risked her life by approaching the Persian king uninvited to foil Haman's wicked decree and save the Jewish people from destruction.",
    category: 'Character'
  },
  {
    id: 'em-14',
    level: 14,
    difficulty: 'Medium',
    emojis: '🐪 🧥 🍯 🌊 🗣️',
    answer: "John the Baptist",
    acceptedAnswers: ["John the Baptist", "John Baptist", "Saint John the Baptist"],
    options: ["John the Baptist", "Elijah", "Elisha", "Jeremiah"],
    hint: "Matthew 3: A prophet clothed in camel's hair who ate locusts and wild honey in the Judean wilderness.",
    reference: "Matthew 3:1-12",
    explanation: "John the Baptist preached repentance in the wilderness and baptized believers in the Jordan River, preparing the way for Jesus Messiah.",
    category: 'Character'
  },
  {
    id: 'em-15',
    level: 15,
    difficulty: 'Medium',
    emojis: '🔥 🛷 🏇 ☁️',
    answer: "Elijah Taken up in a Chariot of Fire",
    acceptedAnswers: ["Elijah Taken up in a Chariot of Fire", "Elijah Chariot of Fire", "Chariot of Fire", "Elijah Ascending"],
    options: ["Elijah Taken up in a Chariot of Fire", "Enoch Ascending", "Translation of Moses", "Fiery Furnace"],
    hint: "2 Kings 2: A prophet swept up into heaven by a whirlwind with horses of fire.",
    reference: "2 Kings 2:11-12",
    explanation: "As Elijah and Elisha walked, a chariot of fire and horses of fire separated them, and Elijah went up by a whirlwind into heaven.",
    category: 'Miracle'
  },

  // --- LEVELS 21-35: Events & Miracles ---
  {
    id: 'em-21',
    level: 21,
    difficulty: 'Medium',
    emojis: '🍷 🏺 💧 💒',
    answer: "Water into Wine at Cana",
    acceptedAnswers: ["Water into Wine at Cana", "Water into Wine", "Wedding at Cana", "Miracle at Cana", "Turning Water into Wine"],
    options: ["Water into Wine at Cana", "Washing of Feet", "The Last Supper", "Pool of Bethesda"],
    hint: "John 2: Jesus turned six stone water jars of purifying water into fine wine at a wedding feast.",
    reference: "John 2:1-11",
    explanation: "At the wedding feast in Cana of Galilee, Jesus performed his first public miracle by transforming water into choice wine.",
    category: 'Miracle'
  },
  {
    id: 'em-22',
    level: 22,
    difficulty: 'Medium',
    emojis: '🚶 🌊 👣 ⛵',
    answer: "Jesus Walking on Water",
    acceptedAnswers: ["Jesus Walking on Water", "Walking on Water", "Peter Walking on Water", "Jesus Walks on Water"],
    options: ["Jesus Walking on Water", "Calming the Storm", "Miraculous Draught of Fishes", "Parting the Red Sea"],
    hint: "Matthew 14: Disciples saw a figure walking across stormy waves in the fourth watch of the night.",
    reference: "Matthew 14:22-33",
    explanation: "Jesus walked on the stormy Sea of Galilee toward his disciples' boat, and invited Peter to step out onto the waves in faith.",
    category: 'Miracle'
  },
  {
    id: 'em-23',
    level: 23,
    difficulty: 'Medium',
    emojis: '🔥 🔥 🔥 👨‍👨‍👦 😇',
    answer: "Shadrach Meshach and Abednego in the Fiery Furnace",
    acceptedAnswers: ["Shadrach Meshach and Abednego in the Fiery Furnace", "The Fiery Furnace", "Fiery Furnace", "Three Hebrew Boys"],
    options: ["Shadrach Meshach and Abednego in the Fiery Furnace", "Daniel in Lions Den", "Elijah's Altar", "Pillar of Fire"],
    hint: "Daniel 3: Three young Hebrews refused to bow to King Nebuchadnezzar's golden image.",
    reference: "Daniel 3:19-27",
    explanation: "Shadrach, Meshach, and Abednego were thrown into a blazing furnace, but God preserved them unharmed, walking with a fourth figure like the Son of God.",
    category: 'Story'
  },

  // --- LEVELS 36-50: Places & Teachings ---
  {
    id: 'em-36',
    level: 36,
    difficulty: 'Hard',
    emojis: '🛡️ 🗡️ ⛑️ 👟 🪵',
    answer: "The Armor of God",
    acceptedAnswers: ["The Armor of God", "Armor of God", "Full Armor of God", "Ephesians Armor"],
    options: ["The Armor of God", "David's Sling", "Gideon's Swords", "Solomon's Guard"],
    hint: "Ephesians 6: Belt of truth, breastplate of righteousness, shield of faith, helmet of salvation.",
    reference: "Ephesians 6:10-18",
    explanation: "Paul instructs believers to put on the whole armor of God to stand firm against spiritual forces of wickedness.",
    category: 'Teaching'
  },
  {
    id: 'em-37',
    level: 37,
    difficulty: 'Hard',
    emojis: '🧱 📯 💥 🏰 🚶‍♂️',
    answer: "The Fall of the Walls of Jericho",
    acceptedAnswers: ["The Fall of the Walls of Jericho", "Walls of Jericho", "Fall of Jericho", "Battle of Jericho", "Jericho Walls"],
    options: ["The Fall of the Walls of Jericho", "Tower of Babel", "Temple of Solomon", "Nehemiah's Wall"],
    hint: "Joshua 6: Seven days of marching around the city walls accompanied by ram's horn trumpets.",
    reference: "Joshua 6:1-20",
    explanation: "Israel marched around Jericho once a day for six days and seven times on the seventh day. When the priests blew trumpets and the people shouted, the walls collapsed.",
    category: 'Story'
  },
  {
    id: 'em-38',
    level: 38,
    difficulty: 'Hard',
    emojis: '🍞 🍷 🍞 🍷 🍞 🍷',
    answer: "The Last Supper",
    acceptedAnswers: ["The Last Supper", "Last Supper", "Lord's Supper", "Holy Communion", "The Eucharist"],
    options: ["The Last Supper", "Passover Feast", "Wedding at Cana", "Feeding 5000"],
    hint: "Luke 22: Jesus broke bread and shared the cup of the new covenant with his twelve apostles.",
    reference: "Luke 22:14-20",
    explanation: "On the night he was betrayed, Jesus instituted Holy Communion, giving bread as his body and the cup as his blood of the new covenant.",
    category: 'Story'
  },

  // --- LEVELS 51-100: Advanced & Expert ---
  {
    id: 'em-51',
    level: 51,
    difficulty: 'Hard',
    emojis: '🫏 🗣️ 🛣️ 🦯',
    answer: "Balaam and the Talking Donkey",
    acceptedAnswers: ["Balaam and the Talking Donkey", "Balaam's Donkey", "Balaam Donkey", "Talking Donkey"],
    options: ["Balaam and the Talking Donkey", "Samson's Donkey Jawbone", "Entry into Jerusalem on Colt", "Abigail on a Donkey"],
    hint: "Numbers 22: A beast of burden spoke with a man's voice after seeing an angel blocking the path.",
    reference: "Numbers 22:21-34",
    explanation: "When Balaam struck his donkey for turning aside, God opened the donkey's mouth to rebuke the prophet before revealing the Angel of the Lord standing with drawn sword.",
    category: 'Story'
  },
  {
    id: 'em-66',
    level: 66,
    difficulty: 'Expert',
    emojis: '🦴 🦴 🦴 💨 🧍‍♂️',
    answer: "The Valley of Dry Bones",
    acceptedAnswers: ["The Valley of Dry Bones", "Valley of Dry Bones", "Dry Bones", "Ezekiel Dry Bones"],
    options: ["The Valley of Dry Bones", "Valley of Rephaim", "Valley of Hinnom", "Burial of Moses"],
    hint: "Ezekiel 37: The prophet prophesied to scattered bones, and breath entered them to form a vast army.",
    reference: "Ezekiel 37:1-14",
    explanation: "God carried Ezekiel to a valley filled with dry bones and commanded him to prophesy life unto them, symbolizing the spiritual restoration of Israel.",
    category: 'Teaching'
  },
  {
    id: 'em-81',
    level: 81,
    difficulty: 'Expert',
    emojis: '⛵ ⛈️ 🐍 🏝️',
    answer: "Paul's Shipwreck at Malta",
    acceptedAnswers: ["Paul's Shipwreck at Malta", "Paul Shipwreck Malta", "Shipwreck at Malta", "Paul's Shipwreck", "Paul Malta Viper"],
    options: ["Paul's Shipwreck at Malta", "Jonah's Shipwreck", "Solomon's Fleet at Ezion-geber", "Voyage to Tarshish"],
    hint: "Acts 27-28: A storm named Euroclydon wrecked the Roman grain ship, but all 276 souls survived.",
    reference: "Acts 27:13 - 28:6",
    explanation: "Paul was shipwrecked on the island of Malta during his voyage to Rome. He survived a viper bite on the shore, gaining the favor of the islanders.",
    category: 'Story'
  }
];
