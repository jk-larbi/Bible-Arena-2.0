import { BIBLE_CHAIN_PEOPLE_SEED, normalizeBiblePersonName } from './bibleChainPeople';

export interface ChallengeItem {
  id: string;
  game_slug: string;
  level: number;
  challenge_index: number;
  question_text: string;
  options: string[];
  correct_answer: string;
  explanation: string;
  reference: string;
  metadata?: Record<string, any>;
}

const BOOKS_66 = [
  { name: 'Genesis', testament: 'Old Testament', section: 'Law', author: 'Moses', chapters: 50, clue: 'Creation, Abrahamic covenant, and Joseph in Egypt', ref: 'Genesis 1:1' },
  { name: 'Exodus', testament: 'Old Testament', section: 'Law', author: 'Moses', chapters: 40, clue: 'Deliverance from Egypt, the Red Sea, and Mount Sinai', ref: 'Exodus 20:1' },
  { name: 'Leviticus', testament: 'Old Testament', section: 'Law', author: 'Moses', chapters: 27, clue: 'Priestly laws, offerings, and the Day of Atonement', ref: 'Leviticus 19:18' },
  { name: 'Numbers', testament: 'Old Testament', section: 'Law', author: 'Moses', chapters: 36, clue: 'Wilderness census, twelve spies, and forty years of wandering', ref: 'Numbers 6:24' },
  { name: 'Deuteronomy', testament: 'Old Testament', section: 'Law', author: 'Moses', chapters: 34, clue: 'Moses’ farewell speeches on the plains of Moab and the Shema', ref: 'Deuteronomy 6:4' },
  { name: 'Joshua', testament: 'Old Testament', section: 'History', author: 'Joshua', chapters: 24, clue: 'Crossing the Jordan, fall of Jericho, and dividing Canaan', ref: 'Joshua 1:9' },
  { name: 'Judges', testament: 'Old Testament', section: 'History', author: 'Samuel (trad.)', chapters: 21, clue: 'Cycles of apostasy and deliverers like Deborah, Gideon, and Samson', ref: 'Judges 21:25' },
  { name: 'Ruth', testament: 'Old Testament', section: 'History', author: 'Samuel (trad.)', chapters: 4, clue: 'A loyal Moabite widow gleans in the fields of Boaz in Bethlehem', ref: 'Ruth 1:16' },
  { name: '1 Samuel', testament: 'Old Testament', section: 'History', author: 'Samuel / Nathan / Gad', chapters: 31, clue: 'Hannah’s prayer, King Saul’s reign, and David slaying Goliath', ref: '1 Samuel 17:45' },
  { name: '2 Samuel', testament: 'Old Testament', section: 'History', author: 'Nathan / Gad', chapters: 24, clue: 'King David’s reign in Jerusalem and the Davidic covenant', ref: '2 Samuel 7:16' },
  { name: '1 Kings', testament: 'Old Testament', section: 'History', author: 'Jeremiah (trad.)', chapters: 22, clue: 'Solomon’s temple, the divided kingdom, and Elijah on Mount Carmel', ref: '1 Kings 18:38' },
  { name: '2 Kings', testament: 'Old Testament', section: 'History', author: 'Jeremiah (trad.)', chapters: 25, clue: 'Elisha’s miracles, Josiah’s reforms, and the exile of Israel and Judah', ref: '2 Kings 2:11' },
  { name: '1 Chronicles', testament: 'Old Testament', section: 'History', author: 'Ezra (trad.)', chapters: 29, clue: 'Genealogies from Adam and David’s preparations for the temple', ref: '1 Chronicles 16:34' },
  { name: '2 Chronicles', testament: 'Old Testament', section: 'History', author: 'Ezra (trad.)', chapters: 36, clue: 'Solomon’s dedication of the temple and the kings of Judah', ref: '2 Chronicles 7:14' },
  { name: 'Ezra', testament: 'Old Testament', section: 'History', author: 'Ezra', chapters: 10, clue: 'Return from Babylonian exile under Zerubbabel and rebuilding the altar', ref: 'Ezra 7:10' },
  { name: 'Nehemiah', testament: 'Old Testament', section: 'History', author: 'Nehemiah', chapters: 13, clue: 'Rebuilding the broken walls of Jerusalem in fifty-two days', ref: 'Nehemiah 6:15' },
  { name: 'Esther', testament: 'Old Testament', section: 'History', author: 'Mordecai (trad.)', chapters: 10, clue: 'A Jewish queen in Susa risks her life to foil Haman’s plot', ref: 'Esther 4:14' },
  { name: 'Job', testament: 'Old Testament', section: 'Wisdom', author: 'Unknown', chapters: 42, clue: 'A righteous sufferer in Uz questions his friends and hears God from the whirlwind', ref: 'Job 19:25' },
  { name: 'Psalms', testament: 'Old Testament', section: 'Wisdom', author: 'David, Asaph, Sons of Korah', chapters: 150, clue: 'Israel’s hymnal of praise, lament, thanksgiving, and royal songs', ref: 'Psalm 23:1' },
  { name: 'Proverbs', testament: 'Old Testament', section: 'Wisdom', author: 'Solomon, Agur, Lemuel', chapters: 31, clue: 'Practical sayings teaching that the fear of the Lord is the beginning of knowledge', ref: 'Proverbs 1:7' },
  { name: 'Ecclesiastes', testament: 'Old Testament', section: 'Wisdom', author: 'Solomon (Qoheleth)', chapters: 12, clue: 'The Teacher reflects on life under the sun and concludes we must fear God', ref: 'Ecclesiastes 12:13' },
  { name: 'Song of Solomon', testament: 'Old Testament', section: 'Wisdom', author: 'Solomon', chapters: 8, clue: 'Poetic dialogue celebrating covenant love between bride and bridegroom', ref: 'Song of Solomon 2:16' },
  { name: 'Isaiah', testament: 'Old Testament', section: 'Prophets', author: 'Isaiah', chapters: 66, clue: 'Visions of God’s holiness, the Virgin birth prophecy, and the Suffering Servant', ref: 'Isaiah 53:5' },
  { name: 'Jeremiah', testament: 'Old Testament', section: 'Prophets', author: 'Jeremiah', chapters: 52, clue: 'The weeping prophet warns Jerusalem and promises a New Covenant', ref: 'Jeremiah 31:31' },
  { name: 'Lamentations', testament: 'Old Testament', section: 'Prophets', author: 'Jeremiah', chapters: 5, clue: 'Five acrostic poems mourning the destruction of Jerusalem yet praising God’s mercies', ref: 'Lamentations 3:22-23' },
  { name: 'Ezekiel', testament: 'Old Testament', section: 'Prophets', author: 'Ezekiel', chapters: 48, clue: 'Prophet by the Chebar canal sees the four living creatures and the Valley of Dry Bones', ref: 'Ezekiel 37:3' },
  { name: 'Daniel', testament: 'Old Testament', section: 'Prophets', author: 'Daniel', chapters: 12, clue: 'Faithfulness in Babylon’s court, the fiery furnace, lions’ den, and apocalyptic visions', ref: 'Daniel 6:22' },
  { name: 'Hosea', testament: 'Old Testament', section: 'Prophets', author: 'Hosea', chapters: 14, clue: 'A prophet’s marriage to Gomer illustrates God’s unfailing love for unfaithful Israel', ref: 'Hosea 6:6' },
  { name: 'Joel', testament: 'Old Testament', section: 'Prophets', author: 'Joel', chapters: 3, clue: 'A devastating locust plague and the promise to pour out God’s Spirit on all flesh', ref: 'Joel 2:28' },
  { name: 'Amos', testament: 'Old Testament', section: 'Prophets', author: 'Amos', chapters: 9, clue: 'A shepherd from Tekoa calls for justice to roll down like waters', ref: 'Amos 5:24' },
  { name: 'Obadiah', testament: 'Old Testament', section: 'Prophets', author: 'Obadiah', chapters: 1, clue: 'Shortest Old Testament book pronouncing judgment on Edom for pride against Judah', ref: 'Obadiah 1:3' },
  { name: 'Jonah', testament: 'Old Testament', section: 'Prophets', author: 'Jonah', chapters: 4, clue: 'A reluctant prophet swallowed by a great fish is sent to preach repentance to Nineveh', ref: 'Jonah 2:1' },
  { name: 'Micah', testament: 'Old Testament', section: 'Prophets', author: 'Micah', chapters: 7, clue: 'Foretells Bethlehem as the birthplace of the ruler and calls to do justly and love mercy', ref: 'Micah 6:8' },
  { name: 'Nahum', testament: 'Old Testament', section: 'Prophets', author: 'Nahum', chapters: 3, clue: 'Foretells the final downfall of Nineveh, the bloodthirsty capital of Assyria', ref: 'Nahum 1:7' },
  { name: 'Habakkuk', testament: 'Old Testament', section: 'Prophets', author: 'Habakkuk', chapters: 3, clue: 'A prophet questions God on the watchtower and learns the righteous shall live by faith', ref: 'Habakkuk 2:4' },
  { name: 'Zephaniah', testament: 'Old Testament', section: 'Prophets', author: 'Zephaniah', chapters: 3, clue: 'Warns of the great Day of the Lord and promises God will rejoice over His people with singing', ref: 'Zephaniah 3:17' },
  { name: 'Haggai', testament: 'Old Testament', section: 'Prophets', author: 'Haggai', chapters: 2, clue: 'Urges returned exiles to consider their ways and finish rebuilding the Temple', ref: 'Haggai 1:7' },
  { name: 'Zechariah', testament: 'Old Testament', section: 'Prophets', author: 'Zechariah', chapters: 14, clue: 'Night visions encouraging Zerubbabel and prophecies of the humble King riding on a donkey', ref: 'Zechariah 9:9' },
  { name: 'Malachi', testament: 'Old Testament', section: 'Prophets', author: 'Malachi', chapters: 4, clue: 'Final Old Testament prophet calling Israel back to faithful offerings and promising Elijah’s forerunner', ref: 'Malachi 4:5' },
  { name: 'Matthew', testament: 'New Testament', section: 'Gospels', author: 'Matthew', chapters: 28, clue: 'Gospel presenting Jesus as the promised Messiah and King of the line of Abraham and David', ref: 'Matthew 28:19' },
  { name: 'Mark', testament: 'New Testament', section: 'Gospels', author: 'John Mark', chapters: 16, clue: 'Fast-paced Gospel emphasizing Jesus as the suffering Servant who came to give His life a ransom', ref: 'Mark 10:45' },
  { name: 'Luke', testament: 'New Testament', section: 'Gospels', author: 'Luke', chapters: 24, clue: 'Orderly historical Gospel written to Theophilus highlighting Jesus’ compassion for the outcast', ref: 'Luke 19:10' },
  { name: 'John', testament: 'New Testament', section: 'Gospels', author: 'John the Apostle', chapters: 21, clue: 'Gospel of the eternal Word made flesh, seven miraculous signs, and the seven "I AM" statements', ref: 'John 20:31' },
  { name: 'Acts', testament: 'New Testament', section: 'Acts', author: 'Luke', chapters: 28, clue: 'Pentecost, the birth of the early church, and the spread of the Gospel from Jerusalem to Rome', ref: 'Acts 2:1-4; Acts 1:8' },
  { name: 'Romans', testament: 'New Testament', section: 'Letters', author: 'Paul', chapters: 16, clue: 'Paul’s systematic exposition of the Gospel, justification by faith, and life in the Spirit', ref: 'Romans 1:16' },
  { name: '1 Corinthians', testament: 'New Testament', section: 'Letters', author: 'Paul', chapters: 16, clue: 'Addresses church divisions, spiritual gifts, the chapter on love, and bodily resurrection', ref: '1 Corinthians 13:13' },
  { name: '2 Corinthians', testament: 'New Testament', section: 'Letters', author: 'Paul', chapters: 13, clue: 'Paul defends his apostolic ministry and teaches that God’s power is made perfect in weakness', ref: '2 Corinthians 12:9' },
  { name: 'Galatians', testament: 'New Testament', section: 'Letters', author: 'Paul', chapters: 6, clue: 'Defends Christian freedom from ceremonial law and lists the ninefold fruit of the Spirit', ref: 'Galatians 5:22-23' },
  { name: 'Ephesians', testament: 'New Testament', section: 'Letters', author: 'Paul', chapters: 6, clue: 'Celebrates salvation by grace, the unity of the Church as Christ’s body, and the Armor of God', ref: 'Ephesians 2:8-9' },
  { name: 'Philippians', testament: 'New Testament', section: 'Letters', author: 'Paul', chapters: 4, clue: 'Joyful prison epistle exalting Christ’s humility on the cross', ref: 'Philippians 4:4' },
  { name: 'Colossians', testament: 'New Testament', section: 'Letters', author: 'Paul', chapters: 4, clue: 'Proclaims the supreme preeminence of Christ, in whom all the fullness of deity dwells bodily', ref: 'Colossians 1:15-17' },
  { name: '1 Thessalonians', testament: 'New Testament', section: 'Letters', author: 'Paul', chapters: 5, clue: 'Commends a young church for steadfast faith and comforts believers regarding Christ’s return', ref: '1 Thessalonians 4:16' },
  { name: '2 Thessalonians', testament: 'New Testament', section: 'Letters', author: 'Paul', chapters: 3, clue: 'Clarifies signs preceding the Day of the Lord and encourages believers not to grow weary in doing good', ref: '2 Thessalonians 3:13' },
  { name: '1 Timothy', testament: 'New Testament', section: 'Letters', author: 'Paul', chapters: 6, clue: 'Pastoral instructions to Timothy in Ephesus on sound doctrine and qualifications for elders and deacons', ref: '1 Timothy 4:12' },
  { name: '2 Timothy', testament: 'New Testament', section: 'Letters', author: 'Paul', chapters: 4, clue: 'Paul’s final letter from prison charging Timothy to preach the Word; all Scripture is God-breathed', ref: '2 Timothy 3:16' },
  { name: 'Titus', testament: 'New Testament', section: 'Letters', author: 'Paul', chapters: 3, clue: 'Pastoral letter to Titus on the island of Crete on appointing elders and adorning sound doctrine with good works', ref: 'Titus 2:11' },
  { name: 'Philemon', testament: 'New Testament', section: 'Letters', author: 'Paul', chapters: 1, clue: 'Personal appeal asking Philemon to receive back his runaway servant Onesimus as a beloved brother', ref: 'Philemon 1:16' },
  { name: 'Hebrews', testament: 'New Testament', section: 'Letters', author: 'Unknown', chapters: 13, clue: 'Exalts Jesus as our great High Priest and mediator of a better covenant, plus the Hall of Faith', ref: 'Hebrews 11:1' },
  { name: 'James', testament: 'New Testament', section: 'Letters', author: 'James', chapters: 5, clue: 'Practical wisdom teaching believers to be doers of the Word and that faith without works is dead', ref: 'James 1:22' },
  { name: '1 Peter', testament: 'New Testament', section: 'Letters', author: 'Peter', chapters: 5, clue: 'Encourages suffering believers scattered in Asia Minor to stand firm in the living hope of Christ', ref: '1 Peter 1:3' },
  { name: '2 Peter', testament: 'New Testament', section: 'Letters', author: 'Peter', chapters: 3, clue: 'Warns against false teachers and reminds believers to grow in the grace and knowledge of our Lord', ref: '2 Peter 3:18' },
  { name: '1 John', testament: 'New Testament', section: 'Letters', author: 'John the Apostle', chapters: 5, clue: 'Teaches that God is light and God is love, giving assurance of eternal life to believers', ref: '1 John 4:8' },
  { name: '2 John', testament: 'New Testament', section: 'Letters', author: 'John the Apostle', chapters: 1, clue: 'Addressed to the elect lady, urging believers to walk in truth and love and reject deceivers', ref: '2 John 1:6' },
  { name: '3 John', testament: 'New Testament', section: 'Letters', author: 'John the Apostle', chapters: 1, clue: 'Commends Gaius for walking in the truth and showing hospitality to traveling brothers', ref: '3 John 1:4' },
  { name: 'Jude', testament: 'New Testament', section: 'Letters', author: 'Jude', chapters: 1, clue: 'Urgent call to contend earnestly for the faith once for all delivered to the saints', ref: 'Jude 1:3' },
  { name: 'Revelation', testament: 'New Testament', section: 'Revelation', author: 'John the Apostle', chapters: 22, clue: 'Apocalyptic letters to seven churches and visions of the Lamb’s victory and the New Jerusalem', ref: 'Revelation 21:1' },
];

const BIBLE_CHARACTERS = [
  { name: 'Noah', testament: 'Old Testament', role: 'Patriarch', clue1: 'Walked faithfully with God when the earth was filled with violence', clue1Ref: 'Genesis 6:9-11', clue2: 'Built a three-story vessel of gopher wood to preserve life', clue2Ref: 'Genesis 6:14-16', clue3: 'Sent out a raven and a dove after forty days of rain', clue3Ref: 'Genesis 8:6-12', ref: 'Genesis 6:9' },
  { name: 'Abraham', testament: 'Old Testament', role: 'Patriarch', clue1: 'Called by God to leave Ur of the Chaldeans for a land he did not know', clue1Ref: 'Genesis 12:1-4', clue2: 'Promised descendants as numerous as the stars of heaven', clue2Ref: 'Genesis 15:5-6', clue3: 'Tested on Mount Moriah when offering his promised son Isaac', clue3Ref: 'Genesis 22:1-14', ref: 'Genesis 12:1-3' },
  { name: 'Sarah', testament: 'Old Testament', role: 'Matriarch', clue1: 'Traveled from Mesopotamia to Canaan with her husband Abram', clue1Ref: 'Genesis 12:4-5', clue2: 'Laughed within herself when visitors promised she would bear a son in old age', clue2Ref: 'Genesis 18:10-14', clue3: 'Gave birth to Isaac at ninety years old and was buried in Machpelah', clue3Ref: 'Genesis 21:1-3; 23:19', ref: 'Genesis 21:2' },
  { name: 'Joseph', testament: 'Old Testament', role: 'Patriarch', clue1: 'Dreamed of eleven sheaves bowing down to his sheaf', clue1Ref: 'Genesis 37:5-8', clue2: 'Sold by his jealous brothers to Ishmaelite traders for twenty shekels of silver', clue2Ref: 'Genesis 37:28', clue3: 'Interpreted Pharaoh’s dreams of seven fat and seven lean cows to become governor of Egypt', clue3Ref: 'Genesis 41:39-43', ref: 'Genesis 41:41' },
  { name: 'Moses', testament: 'Old Testament', role: 'Prophet & Deliverer', clue1: 'Hidden for three months in a basket of bulrushes along the Nile', clue1Ref: 'Exodus 2:2-3', clue2: 'Encountered the Angel of the Lord in a bush that burned without being consumed', clue2Ref: 'Exodus 3:2-4', clue3: 'Led Israel across the Red Sea and received the tablets of the Law on Mount Sinai', clue3Ref: 'Exodus 14:21-22; 31:18', ref: 'Exodus 3:2' },
  { name: 'Miriam', testament: 'Old Testament', role: 'Prophetess', clue1: 'Watched over her baby brother’s reed basket by the bank of the Nile', clue1Ref: 'Exodus 2:4-8', clue2: 'Led the women of Israel with timbrels and dancing after the Red Sea crossing', clue2Ref: 'Exodus 15:20-21', clue3: 'Sister of Aaron and Moses during the wilderness journey', clue3Ref: 'Exodus 15:20; Numbers 26:59', ref: 'Exodus 15:20' },
  { name: 'Joshua', testament: 'Old Testament', role: 'Leader', clue1: 'One of the two faithful spies who brought back a good report of Canaan', clue1Ref: 'Numbers 14:6-9', clue2: 'Succeeded Moses and led Israel dry-shod across the Jordan River', clue2Ref: 'Joshua 3:14-17', clue3: 'Commanded the people to march around Jericho for seven days', clue3Ref: 'Joshua 6:15-20', ref: 'Joshua 6:2' },
  { name: 'Deborah', testament: 'Old Testament', role: 'Judge & Prophetess', clue1: 'Held court under a palm tree between Ramah and Bethel in Ephraim', clue1Ref: 'Judges 4:4-5', clue2: 'Summoned Barak to muster ten thousand men at Mount Tabor', clue2Ref: 'Judges 4:6-14', clue3: 'Sang a famous victory hymn after Sisera’s Canaanite chariots were routed', clue3Ref: 'Judges 5:1-12', ref: 'Judges 4:4-5' },
  { name: 'Gideon', testament: 'Old Testament', role: 'Judge', clue1: 'Threshed wheat in a winepress to hide it from the Midianites', clue1Ref: 'Judges 6:11', clue2: 'Asked God for a sign using a fleece of wool and morning dew', clue2Ref: 'Judges 6:36-40', clue3: 'Routed the Midianite camp with only three hundred men carrying trumpets and torches in jars', clue3Ref: 'Judges 7:16-22', ref: 'Judges 7:7' },
  { name: 'Samson', testament: 'Old Testament', role: 'Judge', clue1: 'Set apart as a Nazirite from before his birth to begin delivering Israel from the Philistines', clue1Ref: 'Judges 13:5', clue2: 'Tore a young lion apart with his bare hands and posed a riddle about honey', clue2Ref: 'Judges 14:5-14', clue3: 'Betrayed by Delilah when the seven locks of his hair were shaved', clue3Ref: 'Judges 16:17-19', ref: 'Judges 16:17' },
  { name: 'Ruth', testament: 'Old Testament', role: 'Ancestor of David', clue1: 'Refused to leave her widowed mother-in-law Naomi, saying "Your God shall be my God"', clue1Ref: 'Ruth 1:16-17', clue2: 'Gleaned ears of barley in the fields of Bethlehem', clue2Ref: 'Ruth 2:2-3', clue3: 'Married her kinsman-redeemer Boaz and became the great-grandmother of King David', clue3Ref: 'Ruth 4:13-17', ref: 'Ruth 1:16' },
  { name: 'Hannah', testament: 'Old Testament', role: 'Mother of Samuel', clue1: 'Wept and prayed silently at the tabernacle in Shiloh while Eli watched', clue1Ref: '1 Samuel 1:10-13', clue2: 'Vowed to dedicate her son to the Lord for all the days of his life', clue2Ref: '1 Samuel 1:11', clue3: 'Sang a prophetic prayer exalting the Lord who humbles and exalts', clue3Ref: '1 Samuel 2:1-10', ref: '1 Samuel 1:11' },
  { name: 'Samuel', testament: 'Old Testament', role: 'Prophet & Judge', clue1: 'Heard the voice of the Lord calling his name in the night while serving under Eli', clue1Ref: '1 Samuel 3:8-10', clue2: 'Set up the stone of Ebenezer saying "Till now the Lord has helped us"', clue2Ref: '1 Samuel 7:12', clue3: 'Anointed both Saul and David as kings over Israel', clue3Ref: '1 Samuel 10:1; 16:13', ref: '1 Samuel 3:10' },
  { name: 'David', testament: 'Old Testament', role: 'King & Psalmist', clue1: 'Youngest son of Jesse who tended his father’s sheep in Bethlehem', clue1Ref: '1 Samuel 16:11-23', clue2: 'Defeated the Philistine champion Goliath with a sling and a smooth stone', clue2Ref: '1 Samuel 17:49-50', clue3: 'Ruled as king in Hebron and Jerusalem and composed many of the Psalms', clue3Ref: '2 Samuel 5:4-5; Psalm 23:1', ref: '1 Samuel 17:50' },
  { name: 'Solomon', testament: 'Old Testament', role: 'King', clue1: 'Asked God at Gibeon for an understanding heart to govern His people rather than riches', clue1Ref: '1 Kings 3:9-12', clue2: 'Built the magnificent First Temple on Mount Moriah in Jerusalem', clue2Ref: '1 Kings 6:1; 2 Chronicles 3:1', clue3: 'Visited by the Queen of Sheba who marveled at his wisdom and proverbs', clue3Ref: '1 Kings 10:1-9', ref: '1 Kings 3:9' },
  { name: 'Elijah', testament: 'Old Testament', role: 'Prophet', clue1: 'Fed by ravens by the brook Cherith during a three-year drought', clue1Ref: '1 Kings 17:4-6', clue2: 'Challenged the prophets of Baal on Mount Carmel and prayed down fire from heaven', clue2Ref: '1 Kings 18:36-38', clue3: 'Taken up into heaven by a whirlwind with a chariot and horses of fire', clue3Ref: '2 Kings 2:11', ref: '1 Kings 18:38' },
  { name: 'Elisha', testament: 'Old Testament', role: 'Prophet', clue1: 'Left his twelve yoke of oxen to follow Elijah and asked for a double portion of his spirit', clue1Ref: '1 Kings 19:19-21; 2 Kings 2:9-12', clue2: 'Purified the bitter waters of Jericho and multiplied a widow’s jar of oil', clue2Ref: '2 Kings 2:19-22; 4:1-7', clue3: 'Instructed Naaman the Syrian commander to wash seven times in the Jordan River', clue3Ref: '2 Kings 5:10-14', ref: '2 Kings 5:10' },
  { name: 'Esther', testament: 'Old Testament', role: 'Queen of Persia', clue1: 'An orphan raised by her cousin Mordecai in the citadel of Susa', clue1Ref: 'Esther 2:7', clue2: 'Chosen as queen by King Ahasuerus in place of Vashti', clue2Ref: 'Esther 2:16-17', clue3: 'Approached the king uninvited saying "If I perish, I perish" to save the Jewish people', clue3Ref: 'Esther 4:15-16', ref: 'Esther 4:16' },
  { name: 'Nehemiah', testament: 'Old Testament', role: 'Governor', clue1: 'Served as royal cupbearer to King Artaxerxes in Susa', clue1Ref: 'Nehemiah 1:11; 2:1', clue2: 'Inspected the ruined gates of Jerusalem by night on a single mount', clue2Ref: 'Nehemiah 2:12-15', clue3: 'Led the people to rebuild Jerusalem’s walls in fifty-two days despite Sanballat’s opposition', clue3Ref: 'Nehemiah 6:15', ref: 'Nehemiah 2:17' },
  { name: 'Daniel', testament: 'Old Testament', role: 'Prophet', clue1: 'Resolved in Babylon not to defile himself with the king’s rich food and wine', clue1Ref: 'Daniel 1:8', clue2: 'Read the mysterious handwriting MENE, MENE, TEKEL, PARSIN on Belshazzar’s palace wall', clue2Ref: 'Daniel 5:25-28', clue3: 'Delivered unharmed from the den of lions under King Darius', clue3Ref: 'Daniel 6:22-23', ref: 'Daniel 6:22' },
  { name: 'Jonah', testament: 'Old Testament', role: 'Prophet', clue1: 'Boarded a ship at Joppa bound for Tarshish to flee from the presence of the Lord', clue1Ref: 'Jonah 1:3', clue2: 'Prayed from the belly of a great fish for three days and three nights', clue2Ref: 'Jonah 1:17; 2:1-2', clue3: 'Preached to Nineveh and sat outside the city under a shade plant God provided', clue3Ref: 'Jonah 3:4-5; 4:5-6', ref: 'Jonah 1:17' },
  { name: 'John the Baptist', testament: 'New Testament', role: 'Forerunner', clue1: 'Son of Zechariah and Elizabeth who leaped in the womb at Mary’s greeting', clue1Ref: 'Luke 1:13, 41; Matthew 3:4', clue2: 'Preached repentance in the wilderness of Judea wearing camel’s hair', clue2Ref: 'Matthew 3:1-8', clue3: 'Baptized Jesus in the Jordan River and declared, "Behold, the Lamb of God!"', clue3Ref: 'John 1:29-34; Matthew 3:13-17', ref: 'John 1:29' },
  { name: 'Mary of Nazareth', testament: 'New Testament', role: 'Mother of Jesus', clue1: 'Visited by the angel Gabriel in Nazareth while betrothed to Joseph', clue1Ref: 'Luke 1:26-35', clue2: 'Sang the Magnificat: "My soul magnifies the Lord"', clue2Ref: 'Luke 1:46-47', clue3: 'Gave birth to Jesus in Bethlehem and treasured all these things in her heart', clue3Ref: 'Luke 2:6-7, 19', ref: 'Luke 1:46-47' },
  { name: 'Simon Peter', testament: 'New Testament', role: 'Apostle', clue1: 'A fisherman of Bethsaida and Capernaum called with his brother Andrew', clue1Ref: 'Matthew 4:18-20', clue2: 'Confessed at Caesarea Philippi, "You are the Christ, the Son of the living God"', clue2Ref: 'Matthew 16:16', clue3: 'Preached boldly at Pentecost where about three thousand souls were added', clue3Ref: 'Acts 2:14-41', ref: 'Matthew 16:16' },
  { name: 'John the Apostle', testament: 'New Testament', role: 'Apostle', clue1: 'Son of Zebedee and brother of James, called by Jesus "Sons of Thunder"', clue1Ref: 'Mark 3:17', clue2: 'Known as the disciple whom Jesus loved, who leaned back against Jesus at the Last Supper', clue2Ref: 'John 13:23; 19:26', clue3: 'Wrote the fourth Gospel, three epistles, and the Book of Revelation on Patmos', clue3Ref: 'John 21:24; Revelation 1:9', ref: 'John 21:20' },
  { name: 'Mary Magdalene', testament: 'New Testament', role: 'Disciple', clue1: 'Delivered by Jesus from seven demons and supported His ministry in Galilee', clue1Ref: 'Luke 8:2', clue2: 'Stood near the cross at Golgotha and watched where Joseph of Arimathea laid Jesus', clue2Ref: 'Mark 15:40, 47', clue3: 'First witness to see the risen Lord outside the empty tomb on resurrection morning', clue3Ref: 'John 20:14-18', ref: 'John 20:16-18' },
  { name: 'Stephen', testament: 'New Testament', role: 'Deacon & Martyr', clue1: 'Chosen among the seven men full of the Spirit and wisdom to care for widows in Jerusalem', clue1Ref: 'Acts 6:3-5', clue2: 'Recounted Israel’s history from Abraham to Solomon before the Sanhedrin', clue2Ref: 'Acts 7:2-50', clue3: 'Saw the heavens opened and the Son of Man standing at the right hand of God as he was martyred', clue3Ref: 'Acts 7:55-60', ref: 'Acts 7:55-56' },
  { name: 'Barnabas', testament: 'New Testament', role: 'Missionary', clue1: 'A Levite from Cyprus named Joseph whom the apostles called "Son of Encouragement"', clue1Ref: 'Acts 4:36-37', clue2: 'Vouched for the newly converted Saul before the apostles in Jerusalem', clue2Ref: 'Acts 9:26-27', clue3: 'Traveled with Paul to Antioch and on the first missionary journey', clue3Ref: 'Acts 13:2-4', ref: 'Acts 4:36' },
  { name: 'Paul (Saul of Tarsus)', testament: 'New Testament', role: 'Apostle to the Gentiles', clue1: 'Educated in Jerusalem at the feet of Gamaliel and blinded by a light on the road to Damascus', clue1Ref: 'Acts 9:3-6; 22:3', clue2: 'Undertook three missionary journeys across Asia Minor and Greece planting churches', clue2Ref: 'Acts 13-21', clue3: 'Authored thirteen New Testament epistles including Romans, Corinthians, and Ephesians', clue3Ref: 'Romans 1:1; 2 Peter 3:15-16', ref: 'Acts 9:3-6' },
  { name: 'Lydia', testament: 'New Testament', role: 'Believer in Philippi', clue1: 'A worshiper of God from the city of Thyatira who sold purple cloth', clue1Ref: 'Acts 16:14', clue2: 'Listened to Paul by the riverside outside Philippi when the Lord opened her heart', clue2Ref: 'Acts 16:14', clue3: 'Baptized with her household and hosted the missionaries in her home', clue3Ref: 'Acts 16:14-15', ref: 'Acts 16:14' },
  { name: 'Timothy', testament: 'New Testament', role: 'Pastor & Coworker', clue1: 'Native of Lystra taught the sacred Scriptures from childhood by his grandmother Lois and mother Eunice', clue1Ref: 'Acts 16:1-2; 2 Timothy 1:5', clue2: 'Joined Paul on his second missionary journey as a trusted spiritual son', clue2Ref: 'Philippians 2:19-22', clue3: 'Recipient of two pastoral epistles charging him to guard the good deposit in Ephesus', clue3Ref: '1 Timothy 1:18; 4:12; 2 Timothy 1:5', ref: '2 Timothy 1:5' },
  { name: 'Priscilla and Aquila', testament: 'New Testament', role: 'Tentmakers & Teachers', clue1: 'Jewish Christian couple who left Rome under Claudius’ decree and worked with Paul in Corinth', clue1Ref: 'Acts 18:2-3', clue2: 'Hosted a church in their house and risked their necks for Paul’s life', clue2Ref: 'Romans 16:3-5', clue3: 'Took Apollos aside in Ephesus and explained to him the way of God more accurately', clue3Ref: 'Acts 18:24-26', ref: 'Acts 18:26' },
];

const QUOTES_POOL = [
  { quote: 'Let there be light.', speaker: 'God', options: ['God', 'Moses', 'Adam', 'Noah'], context: 'Spoken at Creation on the first day.', ref: 'Genesis 1:3' },
  { quote: 'Am I my brother’s keeper?', speaker: 'Cain', options: ['Cain', 'Abel', 'Seth', 'Lamech'], context: 'Cain’s reply when the Lord asked where his brother Abel was.', ref: 'Genesis 4:9' },
  { quote: 'Here I am; send me!', speaker: 'Isaiah', options: ['Isaiah', 'Jeremiah', 'Ezekiel', 'Samuel'], context: 'Isaiah’s response in the temple vision after a seraph touched his lips with a live coal.', ref: 'Isaiah 6:8' },
  { quote: 'Speak, Lord, for your servant hears.', speaker: 'Samuel', options: ['Samuel', 'Eli', 'David', 'Solomon'], context: 'Young Samuel’s response in the tabernacle at Shiloh as instructed by Eli.', ref: '1 Samuel 3:9-10' },
  { quote: 'Where you go I will go, and where you lodge I will lodge. Your people shall be my people, and your God my God.', speaker: 'Ruth', options: ['Ruth', 'Naomi', 'Orpah', 'Esther'], context: 'Ruth’s pledge of loyalty to her mother-in-law Naomi on the road to Bethlehem.', ref: 'Ruth 1:16' },
  { quote: 'As for me and my house, we will serve the Lord.', speaker: 'Joshua', options: ['Joshua', 'Moses', 'Caleb', 'Gideon'], context: 'Joshua’s covenant challenge to the tribes of Israel gathered at Shechem.', ref: 'Joshua 24:15' },
  { quote: 'You come to me with a sword and with a spear and with a javelin, but I come to you in the name of the Lord of hosts.', speaker: 'David', options: ['David', 'Saul', 'Jonathan', 'Samson'], context: 'David’s declaration to the Philistine giant Goliath in the Valley of Elah.', ref: '1 Samuel 17:45' },
  { quote: 'Give your servant therefore an understanding mind to govern your people, that I may discern between good and evil.', speaker: 'Solomon', options: ['Solomon', 'David', 'Hezekiah', 'Josiah'], context: 'Solomon’s prayer to God when the Lord appeared to him in a dream at Gibeon.', ref: '1 Kings 3:9' },
  { quote: 'How long will you go limping between two different opinions? If the Lord is God, follow him; but if Baal, then follow him.', speaker: 'Elijah', options: ['Elijah', 'Elisha', 'Micaiah', 'Amos'], context: 'Elijah’s challenge to all Israel gathered on Mount Carmel.', ref: '1 Kings 18:21' },
  { quote: 'If I perish, I perish.', speaker: 'Esther', options: ['Esther', 'Ruth', 'Deborah', 'Judith'], context: 'Queen Esther’s resolve before approaching King Ahasuerus without being summoned.', ref: 'Esther 4:16' },
  { quote: 'The Lord gave, and the Lord has taken away; blessed be the name of the Lord.', speaker: 'Job', options: ['Job', 'David', 'Abraham', 'Jacob'], context: 'Job’s worshipful response after hearing of the loss of his livestock and children.', ref: 'Job 1:21' },
  { quote: 'I know that my Redeemer lives, and at the last he will stand upon the earth.', speaker: 'Job', options: ['Job', 'Isaiah', 'David', 'Daniel'], context: 'Job’s confession of hope in the midst of his suffering.', ref: 'Job 19:25' },
  { quote: 'The Lord is my shepherd; I shall not want.', speaker: 'David', options: ['David', 'Solomon', 'Asaph', 'Moses'], context: 'Opening verse of the Shepherd Psalm.', ref: 'Psalm 23:1' },
  { quote: 'Our God whom we serve is able to deliver us from the burning fiery furnace... But if not, be it known to you, O king, that we will not serve your gods.', speaker: 'Shadrach, Meshach, and Abednego', options: ['Shadrach, Meshach, and Abednego', 'Daniel', 'Ezekiel', 'Jeremiah'], context: 'Spoken to King Nebuchadnezzar before being cast into the furnace.', ref: 'Daniel 3:17-18' },
  { quote: 'Behold, the Lamb of God, who takes away the sin of the world!', speaker: 'John the Baptist', options: ['John the Baptist', 'Simon Peter', 'Andrew', 'Philip'], context: 'John the Baptist’s testimony when he saw Jesus coming toward him at the Jordan.', ref: 'John 1:29' },
  { quote: 'He must increase, but I must decrease.', speaker: 'John the Baptist', options: ['John the Baptist', 'Paul', 'Peter', 'Barnabas'], context: 'John the Baptist speaking to his disciples about Jesus’ growing ministry.', ref: 'John 3:30' },
  { quote: 'My soul magnifies the Lord, and my spirit rejoices in God my Savior.', speaker: 'Mary', options: ['Mary', 'Elizabeth', 'Anna', 'Martha'], context: 'Mary’s song of praise (the Magnificat) when visiting Elizabeth in the hill country of Judah.', ref: 'Luke 1:46-47' },
  { quote: 'I am the way, and the truth, and the life. No one comes to the Father except through me.', speaker: 'Jesus', options: ['Jesus', 'Paul', 'John', 'Peter'], context: 'Jesus comforting His disciples in the Upper Room in response to Thomas’s question.', ref: 'John 14:6' },
  { quote: 'I am the resurrection and the life. Whoever believes in me, though he die, yet shall he live.', speaker: 'Jesus', options: ['Jesus', 'Martha', 'Paul', 'Peter'], context: 'Jesus speaking to Martha at Bethany before raising Lazarus from the tomb.', ref: 'John 11:25' },
  { quote: 'Lord, to whom shall we go? You have the words of eternal life.', speaker: 'Simon Peter', options: ['Simon Peter', 'John', 'Thomas', 'Andrew'], context: 'Peter’s confession in Capernaum when many disciples turned back.', ref: 'John 6:68' },
  { quote: 'You are the Christ, the Son of the living God.', speaker: 'Simon Peter', options: ['Simon Peter', 'John the Baptist', 'Nathanael', 'Paul'], context: 'Peter’s answer at Caesarea Philippi when Jesus asked, "Who do you say that I am?"', ref: 'Matthew 16:16' },
  { quote: 'My Lord and my God!', speaker: 'Thomas', options: ['Thomas', 'Peter', 'John', 'Matthew'], context: 'Thomas’s declaration upon seeing the risen Jesus and His wounds.', ref: 'John 20:28' },
  { quote: 'Truly this man was the Son of God!', speaker: 'The Roman Centurion', options: ['The Roman Centurion', 'Pontius Pilate', 'Joseph of Arimathea', 'Nicodemus'], context: 'Spoken at the cross when the centurion saw the earthquake and how Jesus breathed His last.', ref: 'Mark 15:39' },
  { quote: 'For I am not ashamed of the gospel, for it is the power of God for salvation to everyone who believes.', speaker: 'Paul', options: ['Paul', 'Peter', 'James', 'Luke'], context: 'Paul’s thesis statement near the beginning of his epistle to the believers in Rome.', ref: 'Romans 1:16' },
  { quote: 'For to me to live is Christ, and to die is gain.', speaker: 'Paul', options: ['Paul', 'Stephen', 'Peter', 'Ignatius'], context: 'Written by Paul from prison to the church in Philippi.', ref: 'Philippians 1:21' },
  { quote: 'I have fought the good fight, I have finished the race, I have kept the faith.', speaker: 'Paul', options: ['Paul', 'Peter', 'Timothy', 'Barnabas'], context: 'Paul’s final charge to Timothy before his martyrdom in Rome.', ref: '2 Timothy 4:7' },
  { quote: 'Silver and gold have I none, but such as I have give I thee: In the name of Jesus Christ of Nazareth rise up and walk.', speaker: 'Simon Peter', options: ['Simon Peter', 'Paul', 'Stephen', 'Philip'], context: 'Peter healing the lame beggar at the Beautiful Gate of the temple.', ref: 'Acts 3:6' },
  { quote: 'Sirs, what must I do to be saved?', speaker: 'The Philippian Jailer', options: ['The Philippian Jailer', 'Cornelius', 'The Ethiopian Eunuch', 'Sergius Paulus'], context: 'Asked of Paul and Silas at midnight after an earthquake opened the prison doors in Philippi.', ref: 'Acts 16:30' },
  { quote: 'Almost you persuade me to become a Christian.', speaker: 'King Agrippa', options: ['King Agrippa', 'Governor Felix', 'Porcius Festus', 'Herod Antipas'], context: 'King Agrippa II responding to Paul’s defense in Caesarea.', ref: 'Acts 26:28' },
  { quote: 'Lord, do not hold this sin against them.', speaker: 'Stephen', options: ['Stephen', 'James', 'Paul', 'Peter'], context: 'Stephen’s final prayer as he was being stoned outside Jerusalem.', ref: 'Acts 7:60' },
];

const VERSES_POOL = [
  { ref: 'Genesis 1:1', text: 'In the beginning God created the heavens and the earth', missing: 'beginning', distractors: ['morning', 'eternity', 'wilderness'] },
  { ref: 'Psalm 23:1', text: 'The Lord is my shepherd I shall not want', missing: 'shepherd', distractors: ['fortress', 'captain', 'counselor'] },
  { ref: 'Psalm 119:105', text: 'Your word is a lamp to my feet and a light to my path', missing: 'lamp', distractors: ['shield', 'staff', 'crown'] },
  { ref: 'Proverbs 3:5', text: 'Trust in the Lord with all your heart and lean not on your own understanding', missing: 'understanding', distractors: ['strength', 'riches', 'wisdom'] },
  { ref: 'Isaiah 40:31', text: 'Those who wait for the Lord shall renew their strength they shall mount up with wings like eagles', missing: 'eagles', distractors: ['doves', 'lions', 'chariots'] },
  { ref: 'Jeremiah 29:11', text: 'For I know the plans I have for you declares the Lord plans for welfare and not for evil', missing: 'plans', distractors: ['visions', 'crowns', 'armies'] },
  { ref: 'Micah 6:8', text: 'What does the Lord require of you but to do justice and to love kindness and to walk humbly with your God', missing: 'humbly', distractors: ['boldly', 'swiftly', 'proudly'] },
  { ref: 'Matthew 5:9', text: 'Blessed are the peacemakers for they shall be called sons of God', missing: 'peacemakers', distractors: ['conquerors', 'scribes', 'rulers'] },
  { ref: 'Matthew 6:33', text: 'Seek first the kingdom of God and his righteousness and all these things will be added to you', missing: 'kingdom', distractors: ['temple', 'palace', 'mountain'] },
  { ref: 'Matthew 11:28', text: 'Come to me all who labor and are heavy laden and I will give you rest', missing: 'rest', distractors: ['gold', 'fame', 'tribute'] },
  { ref: 'Matthew 28:19', text: 'Go therefore and make disciples of all nations baptizing them in the name of the Father and of the Son and of the Holy Spirit', missing: 'disciples', distractors: ['captains', 'merchants', 'governors'] },
  { ref: 'John 1:1', text: 'In the beginning was the Word and the Word was with God and the Word was God', missing: 'Word', distractors: ['Law', 'Scroll', 'Prophet'] },
  { ref: 'John 3:16', text: 'For God so loved the world that he gave his only Son that whoever believes in him should not perish', missing: 'loved', distractors: ['judged', 'feared', 'searched'] },
  { ref: 'John 8:32', text: 'You will know the truth and the truth will set you free', missing: 'truth', distractors: ['sword', 'wealth', 'custom'] },
  { ref: 'John 14:6', text: 'Jesus said to him I am the way and the truth and the life', missing: 'way', distractors: ['gate', 'bridge', 'harbor'] },
  { ref: 'Acts 1:8', text: 'You will receive power when the Holy Spirit has come upon you and you will be my witnesses', missing: 'witnesses', distractors: ['senators', 'philosophers', 'soldiers'] },
  { ref: 'Romans 3:23', text: 'For all have sinned and fall short of the glory of God', missing: 'glory', distractors: ['throne', 'temple', 'statute'] },
  { ref: 'Romans 8:28', text: 'We know that for those who love God all things work together for good', missing: 'good', distractors: ['wealth', 'fame', 'ease'] },
  { ref: 'Galatians 5:22', text: 'The fruit of the Spirit is love joy peace patience kindness goodness faithfulness', missing: 'patience', distractors: ['ambition', 'haste', 'pride'] },
  { ref: 'Ephesians 2:8', text: 'For by grace you have been saved through faith and this is not your own doing it is the gift of God', missing: 'grace', distractors: ['merit', 'lineage', 'ritual'] },
  { ref: 'Philippians 4:13', text: 'I can do all things through him who strengthens me', missing: 'strengthens', distractors: ['Flatters', 'pays', 'praises'] },
  { ref: '2 Timothy 3:16', text: 'All Scripture is breathed out by God and profitable for teaching for reproof for correction', missing: 'Scripture', distractors: ['philosophy', 'tradition', 'chronicle'] },
  { ref: 'Hebrews 11:1', text: 'Now faith is the assurance of things hoped for the conviction of things not seen', missing: 'faith', distractors: ['sight', 'reason', 'fortune'] },
  { ref: 'James 1:22', text: 'Be doers of the word and not hearers only deceiving yourselves', missing: 'doers', distractors: ['scribes', 'critics', 'debaters'] },
  { ref: '1 John 4:19', text: 'We love because he first loved us', missing: 'first', distractors: ['rarely', 'lately', 'nearly'] },
];

const GEOGRAPHY_LOCATIONS = [
  { place: 'Bethlehem', region: 'Judea', event: 'Birthplace of King David and of Jesus Christ as foretold by Micah', ref: 'Micah 5:2; Luke 2:4' },
  { place: 'Nazareth', region: 'Galilee', event: 'Hometown in Galilee where Gabriel appeared to Mary and where Jesus grew up', ref: 'Luke 1:26; 2:51' },
  { place: 'Jerusalem', region: 'Judea', event: 'City of David, site of Solomon’s Temple, Jesus’ crucifixion, resurrection, and Pentecost', ref: '2 Samuel 5:7; Acts 2:1' },
  { place: 'Jericho', region: 'Jordan Valley', event: 'Ancient walled city conquered under Joshua and where Jesus met Zacchaeus', ref: 'Joshua 6:20; Luke 19:1' },
  { place: 'Mount Sinai (Horeb)', region: 'Sinai Peninsula', event: 'Mountain where Moses saw the burning bush and received the Ten Commandments', ref: 'Exodus 3:1; 19:20' },
  { place: 'Mount Carmel', region: 'Northern Israel', event: 'Mountain ridge overlooking the Mediterranean where Elijah confronted the prophets of Baal', ref: '1 Kings 18:19' },
  { place: 'Sea of Galilee', region: 'Galilee', event: 'Freshwater lake where Jesus called fishermen, calmed the storm, and walked on water', ref: 'Matthew 4:18; 14:25' },
  { place: 'Jordan River', region: 'Rift Valley', event: 'River parted for Joshua, where Naaman washed seven times, and where John baptized Jesus', ref: 'Joshua 3:17; 2 Kings 5:14; Mark 1:9' },
  { place: 'Ur of the Chaldeans', region: 'Mesopotamia', event: 'Ancient Mesopotamian city from which Abram and Terah set out toward Canaan', ref: 'Genesis 11:31' },
  { place: 'Nineveh', region: 'Assyria (Tigris River)', event: 'Capital of Assyria where Jonah preached and the people repented in sackcloth', ref: 'Jonah 3:3-5' },
  { place: 'Babylon', region: 'Mesopotamia (Euphrates)', event: 'Imperial capital where Daniel and Judah’s exiles were taken under Nebuchadnezzar', ref: 'Daniel 1:1' },
  { place: 'Susa (Shushan)', region: 'Persia', event: 'Royal winter citadel where Queen Esther saved the Jewish people and Nehemiah served as cupbearer', ref: 'Esther 1:2; Nehemiah 1:1' },
  { place: 'Cana of Galilee', region: 'Galilee', event: 'Village where Jesus performed His first sign by turning water into wine at a wedding', ref: 'John 2:11' },
  { place: 'Capernaum', region: 'Galilee', event: 'Lakeside town that served as the center of Jesus’ Galilean ministry and Peter’s home', ref: 'Matthew 4:13; Mark 2:1' },
  { place: 'Bethany', region: 'Near Jerusalem', event: 'Village on the eastern slope of the Mount of Olives, home of Mary, Martha, and Lazarus', ref: 'John 11:1' },
  { place: 'Damascus', region: 'Syria', event: 'Ancient Syrian city on the road to which Saul of Tarsus saw the risen Christ', ref: 'Acts 9:3' },
  { place: 'Antioch in Syria', region: 'Syria', event: 'City where believers were first called Christians and from which Paul was sent on missions', ref: 'Acts 11:26; 13:1-3' },
  { place: 'Philippi', region: 'Macedonia', event: 'Roman colony in Macedonia where Lydia believed and Paul and Silas sang in prison at midnight', ref: 'Acts 16:12-25' },
  { place: 'Athens', region: 'Greece (Achaia)', event: 'Intellectual capital where Paul preached about the "Unknown God" before the Areopagus (Mars Hill)', ref: 'Acts 17:22-23' },
  { place: 'Patmos', region: 'Aegean Sea', event: 'Rocky island where the apostle John received the visions of the Book of Revelation', ref: 'Revelation 1:9' },
];

const RIDDLES_POOL = [
  { riddle: 'I was built of gopher wood with three decks and a single window above, carrying eight souls safely through rising waters. What am I?', answer: 'Noah’s Ark', options: ['Noah’s Ark', 'Solomon’s Temple', 'The Tabernacle', 'Jonah’s Ship'], explanation: 'Noah’s Ark preserved Noah, his wife, his three sons, and their wives through the flood.', ref: 'Genesis 6:14-16' },
  { riddle: 'I burned with fire on Mount Horeb yet my branches never turned to ash, and from my midst God called a shepherd back to Egypt. What am I?', answer: 'The Burning Bush', options: ['The Burning Bush', 'Aaron’s Rod', 'The Pillar of Fire', 'Elijah’s Altar'], explanation: 'God appeared to Moses in a flame of fire out of the midst of a bush that was not consumed.', ref: 'Exodus 3:2' },
  { riddle: 'Once a dry staff of almond wood, I budded, blossomed, and bore ripe almonds overnight inside the tent of testimony. What am I?', answer: 'Aaron’s Rod', options: ['Aaron’s Rod', 'Moses’ Staff', 'David’s Sling', 'Gideon’s Torch'], explanation: 'Aaron’s rod sprouted and bore almonds to confirm God’s choice of the Levitical priesthood.', ref: 'Numbers 17:8' },
  { riddle: 'I fell with the morning dew for forty years in the desert; I tasted like wafers made with honey, and my name means "What is it?" What am I?', answer: 'Manna', options: ['Manna', 'Showbread', 'Unleavened Bread', 'Quail'], explanation: 'God fed Israel with manna from heaven throughout their wilderness journey.', ref: 'Exodus 16:15, 31' },
  { riddle: 'Seven priests blew ram’s horns before me for seven days, and when the people shouted on the seventh day, I fell flat. What am I?', answer: 'The Walls of Jericho', options: ['The Walls of Jericho', 'The Tower of Babel', 'The Gates of Gaza', 'The Wall of Jerusalem'], explanation: 'The walls of Jericho collapsed when Israel marched around them and shouted by faith.', ref: 'Joshua 6:20' },
  { riddle: 'Picked smooth from a valley brook, I flew from a shepherd’s sling and felled the giant champion of Gath. What am I?', answer: 'David’s Stone', options: ['David’s Stone', 'Jacob’s Pillow Stone', 'The Stone of Ebenezer', 'The Tablets of Law'], explanation: 'David chose five smooth stones from the brook and struck Goliath with one.', ref: '1 Samuel 17:40, 49' },
  { riddle: 'Although I had no speech or language, I opened my mouth on a narrow path to rebuke Balaam when an angel stood with a drawn sword. What am I?', answer: 'Balaam’s Donkey', options: ['Balaam’s Donkey', 'Elijah’s Raven', 'Jonah’s Great Fish', 'Peter’s Rooster'], explanation: 'The Lord opened the mouth of Balaam’s donkey to speak and save Balaam’s life.', ref: 'Numbers 22:28' },
  { riddle: 'I swallowed a fleeing prophet who boarded a ship at Joppa, and after three days and nights I cast him onto dry land. What am I?', answer: 'The Great Fish of Jonah', options: ['The Great Fish of Jonah', 'The Coin-Bearing Fish', 'Leviathan', 'The Miraculous Catch'], explanation: 'The Lord appointed a great fish to swallow up Jonah for three days and three nights.', ref: 'Jonah 1:17' },
  { riddle: 'A coin of a stater was found inside my mouth when Peter cast a hook into the Sea of Galilee to pay the temple tax. What am I?', answer: 'The Fish with the Shekel', options: ['The Fish with the Shekel', 'Jonah’s Fish', 'Tobit’s Fish', 'The Two Small Fish'], explanation: 'Jesus told Peter the first fish he caught would have a shekel in its mouth for their tax.', ref: 'Matthew 17:27' },
  { riddle: 'Woven from thorny branches and pressed upon the King of kings by Roman soldiers in the governor’s headquarters, what am I?', answer: 'The Crown of Thorns', options: ['The Crown of Thorns', 'Aaron’s Mitre', 'David’s Royal Diadem', 'The Olive Wreath'], explanation: 'The soldiers twisted together a crown of thorns and put it on Jesus’ head.', ref: 'Matthew 27:29' },
];

const DETECTIVE_CASES = [
  { title: 'The Case of the Silver Cup in the Grain Sack', clue1: 'Evidence A: Ten brothers traveled to Egypt during a severe famine to buy grain.', clue2: 'Evidence B: The governor’s personal divining cup of silver was found in the youngest brother Benjamin’s sack.', clue3: 'Witness Statement: Judah stepped forward offering himself as a pledge in place of the boy.', answer: 'Joseph Testing His Brothers', options: ['Joseph Testing His Brothers', 'Achan’s Hidden Silver', 'Micah’s Stolen Silver', 'Gehazi’s Greed'], explanation: 'Joseph had his silver cup placed in Benjamin’s sack to see if his brothers’ hearts had changed since selling him.', ref: 'Genesis 44:1-12' },
  { title: 'The Mystery of the Defeat at Ai', clue1: 'Evidence A: After conquering Jericho, Israel suffered an unexpected rout before the small town of Ai.', clue2: 'Evidence B: Joshua tore his clothes and learned the devoted ban had been broken.', clue3: 'Confession: Hidden beneath a tent floor were a beautiful cloak from Shinar, 200 shekels of silver, and a bar of gold.', answer: 'Achan’s Hidden Spoils', options: ['Achan’s Hidden Spoils', 'Saul Sparing Agag', 'Ananias and Sapphira', 'Gideon’s Ephod'], explanation: 'Achan son of Carmi took devoted items from Jericho and hid them under his tent.', ref: 'Joshua 7:20-21' },
  { title: 'The Case of the Dry Fleece and Wet Ground', clue1: 'Evidence A: Midianite raiders were destroying Israel’s crops as far as Gaza.', clue2: 'Evidence B: On the first night, a wool fleece on the threshing floor was soaked with a bowlful of dew while the ground stayed dry.', clue3: 'Evidence C: On the second night, the fleece remained completely dry while dew covered all the ground.', answer: 'Gideon’s Sign on the Threshing Floor', options: ['Gideon’s Sign on the Threshing Floor', 'Elijah’s Water-Soaked Altar', 'Samuel’s Thunder at Wheat Harvest', 'Hezekiah’s Sundial'], explanation: 'Gideon asked God for two confirming signs with a fleece of wool before leading Israel against Midian.', ref: 'Judges 6:36-40' },
  { title: 'The Investigation of the Two Mothers', clue1: 'Evidence A: Two women living in the same house each gave birth to a son three days apart.', clue2: 'Evidence B: Both women stood before the throne claiming the living infant was hers.', clue3: 'Decisive Test: When the king called for a sword to divide the living child, one woman cried out to give the baby to the other so he would live.', answer: 'Solomon’s Wise Judgment', options: ['Solomon’s Wise Judgment', 'Deborah Under the Palm', 'Moses Judging the People', 'Samuel at Mizpah'], explanation: 'King Solomon discerned the true mother by her compassion for her son’s life.', ref: '1 Kings 3:16-28' },
  { title: 'The Case of the Floating Iron Axe Head', clue1: 'Evidence A: The sons of the prophets were cutting timber by the Jordan River to build larger quarters.', clue2: 'Evidence B: A borrowed iron axe head flew off its handle and sank into the river.', clue3: 'Resolution: The prophet cut a stick, threw it into the water, and the heavy iron floated to the surface.', answer: 'Elisha and the Borrowed Axe Head', options: ['Elisha and the Borrowed Axe Head', 'Moses’ Sweetening the Waters of Marah', 'Elijah Parting the Jordan with His Cloak', 'Joshua’s Twelve Memorial Stones'], explanation: 'Elisha caused the borrowed iron axe head to float by throwing a stick into the Jordan.', ref: '2 Kings 6:1-7' },
  { title: 'The Mystery of the Writing on the Palace Wall', clue1: 'Evidence A: King Belshazzar held a great feast for a thousand lords using gold vessels taken from the Jerusalem Temple.', clue2: 'Evidence B: The fingers of a human hand appeared opposite the lampstand and wrote four Aramaic words on the plaster.', clue3: 'Interpretation: God has numbered the days of your kingdom and brought it to an end; you have been weighed in the balances.', answer: 'Daniel Interpreting the Handwriting on the Wall', options: ['Daniel Interpreting the Handwriting on the Wall', 'Nebuchadnezzar’s Statue Dream', 'Joseph Interpreting the Baker’s Dream', 'Ezekiel’s Scroll'], explanation: 'Daniel read MENE, MENE, TEKEL, and PARSIN on the night Babylon fell to the Medes and Persians.', ref: 'Daniel 5:25-28' },
  { title: 'The Case of the Empty Tomb Linen Cloths', clue1: 'Evidence A: On the first day of the week at dawn, the heavy stone was found rolled away from the garden tomb.', clue2: 'Evidence B: Two disciples ran to the tomb and saw the linen cloths lying there.', clue3: 'Evidence C: The face cloth that had been on Jesus’ head was not lying with the linen cloths but folded up in a place by itself.', answer: 'The Resurrection of Jesus', options: ['The Resurrection of Jesus', 'The Raising of Lazarus', 'The Burial of Stephen', 'The Translation of Enoch'], explanation: 'Peter and John inspected the empty tomb and saw the orderly grave clothes testifying that Jesus had risen.', ref: 'John 20:1-8' },
  { title: 'The Case of the Midnight Earthquake in Prison', clue1: 'Evidence A: Two missionaries were beaten with rods in a Roman colony and fastened in the inner prison stocks.', clue2: 'Evidence B: About midnight they were praying and singing hymns to God while the other prisoners listened.', clue3: 'Outcome: Despite all doors flying open and chains unfastened, not a single prisoner fled, saving the jailer’s life.', answer: 'Paul and Silas in Philippi', options: ['Paul and Silas in Philippi', 'Peter Freed by an Angel', 'John on Patmos', 'Joseph in Pharaoh’s Prison'], explanation: 'Paul and Silas stayed in the Philippian prison after the earthquake, leading the jailer and his household to faith.', ref: 'Acts 16:25-34' },
];

export const ALL_19_GAME_SLUGS = [
  'scripture-challenge',
  'bible-character-quest',
  'scripture-scramble',
  'bible-word-search',
  'bible-crossword',
  'who-said-it',
  'complete-the-scripture',
  'bible-match-up',
  'bible-timeline',
  'bible-puzzles',
  'find-the-bible-book',
  'bible-riddles',
  'bible-geography-quest',
  'bible-memory-challenge',
  'old-vs-new-testament',
  'bible-detective',
  'bible-chain-challenge',
  'verse-builder',
  'guess-the-emoji',
] as const;

export const LEVEL_STAGE_TITLES = [
  'Foundations of Genesis',
  'Covenants of the Patriarchs',
  'Deliverance from Egypt',
  'Sinai & Wilderness Sanctuary',
  'Conquest & Judges of Israel',
  'The United Monarchy',
  'Psalms & Wisdom Literature',
  'Elijah, Elisha & The Divided Kingdom',
  'Prophets of Exile & Return',
  'Dawn of the Gospels',
  'Miracles of the Messiah',
  'Parables of the Kingdom',
  'The Upper Room & Calvary',
  'The Risen Lord & Pentecost',
  'Journeys of the Apostle Paul',
  'Epistles of Grace & Faith',
  'Heroes of the Hall of Faith',
  'Biblical Geography & Sacred Places',
  'Prophecy & Revelation',
  'Mastery of Sacred Scripture',
];

export function getStageTitleForLevel(level: number): string {
  const stageIdx = Math.min(LEVEL_STAGE_TITLES.length - 1, Math.floor((level - 1) / 3));
  return `${LEVEL_STAGE_TITLES[stageIdx]} • Stage ${ ((level - 1) % 3) + 1 }`;
}

export function getDifficultyForLevel(level: number): string {
  if (level <= 10) return 'beginner';
  if (level <= 20) return 'easy';
  if (level <= 30) return 'intermediate';
  if (level <= 40) return 'advanced';
  return 'expert';
}

/**
 * Deterministically builds 5 challenges for any (gameSlug, level) pair
 * from 1..50+ so every level in all 19 games is genuinely playable and biblically accurate.
 */
export function buildLocalChallengesForLevel(gameSlug: string, level: number, variationSeed = 0): ChallengeItem[] {
  const items: ChallengeItem[] = [];
  // Five questions per level: consume the source pools sequentially without
  // skipping every other item. This improves coverage but does not replace
  // the separate uniqueness audit or the ongoing source-bank expansion.
  const baseIdx = (level - 1) * 5;

  for (let i = 0; i < 5; i++) {
    const challengeIndex = i + 1;
    const globalSeed = baseIdx + i + variationSeed;
    const shuffleSeed = (level * 10007) + (challengeIndex * 997) + (globalSeed * 31) + 1337;
    const id = `${gameSlug}-l${level}-c${challengeIndex}`;

    switch (gameSlug) {
      case 'scripture-challenge': {
        const mode = globalSeed % 3;
        if (mode === 0) {
          const char = BIBLE_CHARACTERS[globalSeed % BIBLE_CHARACTERS.length];
          const candidateChars: string[] = [];
          for (let off = 1; candidateChars.length < 3 && off < BIBLE_CHARACTERS.length; off++) {
            const c = BIBLE_CHARACTERS[(globalSeed + off * 7) % BIBLE_CHARACTERS.length].name;
            if (c !== char.name && !candidateChars.includes(c)) candidateChars.push(c);
          }
          const options = makeFourDistinctOptions(char.name, candidateChars, shuffleSeed);
          items.push({
            id,
            game_slug: gameSlug,
            level,
            challenge_index: challengeIndex,
            question_text: `Which biblical figure ${char.clue3.charAt(0).toLowerCase() + char.clue3.slice(1)}?`,
            options,
            correct_answer: char.name,
            explanation: `${char.name} (${char.role}): ${char.clue3}.`,
            reference: char.clue3Ref,
          });
        } else if (mode === 1) {
          const book = BOOKS_66[globalSeed % BOOKS_66.length];
          const candidateBooks: string[] = [];
          for (let off = 1; candidateBooks.length < 3 && off < BOOKS_66.length; off++) {
            const b = BOOKS_66[(globalSeed + off * 11) % BOOKS_66.length].name;
            if (b !== book.name && !candidateBooks.includes(b)) candidateBooks.push(b);
          }
          const options = makeFourDistinctOptions(book.name, candidateBooks, shuffleSeed);
          items.push({
            id,
            game_slug: gameSlug,
            level,
            challenge_index: challengeIndex,
            question_text: `Which book of the ${book.testament} features: "${book.clue}"?`,
            options,
            correct_answer: book.name,
            explanation: `${book.name} is in the ${book.section} section of the ${book.testament} (${book.chapters} chapters).`,
            reference: book.ref,
          });
        } else {
          const loc = GEOGRAPHY_LOCATIONS[globalSeed % GEOGRAPHY_LOCATIONS.length];
          const candidateLocs: string[] = [];
          for (let off = 1; candidateLocs.length < 3 && off < GEOGRAPHY_LOCATIONS.length; off++) {
            const l = GEOGRAPHY_LOCATIONS[(globalSeed + off * 5) % GEOGRAPHY_LOCATIONS.length].place;
            if (l !== loc.place && !candidateLocs.includes(l)) candidateLocs.push(l);
          }
          const options = makeFourDistinctOptions(loc.place, candidateLocs, shuffleSeed);
          items.push({
            id,
            game_slug: gameSlug,
            level,
            challenge_index: challengeIndex,
            question_text: `Which biblical location is described: "${loc.event}"?`,
            options,
            correct_answer: loc.place,
            explanation: `${loc.place} (${loc.region}): ${loc.event}.`,
            reference: loc.ref,
          });
        }
        break;
      }

      case 'bible-character-quest': {
        const char = BIBLE_CHARACTERS[globalSeed % BIBLE_CHARACTERS.length];
        const candidateChars: string[] = [];
        for (let off = 1; candidateChars.length < 3 && off < BIBLE_CHARACTERS.length; off++) {
          const c = BIBLE_CHARACTERS[(globalSeed + off * 7) % BIBLE_CHARACTERS.length].name;
          if (c !== char.name && !candidateChars.includes(c)) candidateChars.push(c);
        }
        const options = makeFourDistinctOptions(char.name, candidateChars, shuffleSeed);
        items.push({
          id,
          game_slug: gameSlug,
          level,
          challenge_index: challengeIndex,
          question_text: `Identify this ${char.testament} ${char.role} from the biblical record:`,
          options,
          correct_answer: char.name,
          explanation: `${char.name} is remembered as the ${char.role.toLowerCase()} who ${char.clue3.toLowerCase()}.`,
          reference: char.clue3Ref,
          metadata: {
            clues: [char.clue1, char.clue2, char.clue3],
            role: char.role,
            testament: char.testament,
          },
        });
        break;
      }

      case 'scripture-scramble': {
        const wordSource = BOOKS_66[globalSeed % BOOKS_66.length];
        const cleanWord = wordSource.name.replace(/[^a-zA-Z]/g, '').toUpperCase();
        items.push({
          id,
          game_slug: gameSlug,
          level,
          challenge_index: challengeIndex,
          question_text: `Unscramble the letters to form the name of this biblical book: "${wordSource.clue}"`,
          options: shuffleDeterministic(cleanWord.split(''), shuffleSeed),
          correct_answer: cleanWord,
          explanation: `${wordSource.name} (${wordSource.section}): ${wordSource.clue}.`,
          reference: wordSource.ref,
          metadata: {
            word: cleanWord,
          },
        });
        break;
      }

      case 'bible-word-search': {
        const c1 = BIBLE_CHARACTERS[globalSeed % BIBLE_CHARACTERS.length];
        const c2 = BIBLE_CHARACTERS[(globalSeed + 5) % BIBLE_CHARACTERS.length];
        const c3 = BOOKS_66[globalSeed % BOOKS_66.length];
        const words = [
          c1.name.split(' ')[0].replace(/[^A-Za-z]/g, '').toUpperCase(),
          c2.name.split(' ')[0].replace(/[^A-Za-z]/g, '').toUpperCase(),
          c3.name.replace(/[^A-Za-z]/g, '').toUpperCase().slice(0, 8),
        ];
        items.push({
          id,
          game_slug: gameSlug,
          level,
          challenge_index: challengeIndex,
          question_text: `Locate the hidden sacred words in the letter grid: ${words.join(', ')}`,
          options: words,
          correct_answer: words.join(','),
          explanation: `Key terms from ${c1.clue3Ref}, ${c2.clue3Ref}, and ${c3.ref}: ${words.join(', ')}.`,
          reference: `${c1.clue3Ref}; ${c2.clue3Ref}; ${c3.ref}`,
          metadata: {
            words,
            gridSize: 8,
          },
        });
        break;
      }

      case 'bible-crossword': {
        // Curated clue pairs: every clue has one clear answer and the answers
        // share at least one letter, so the crossword intersection is real.
        const crosswordPairs = [
          { across: 'NOAH', acrossClue: 'The man God told to build an ark before the flood', down: 'ARK', downClue: 'The large vessel Noah built to survive the flood', acrossRef: 'Genesis 6:13-22', downRef: 'Genesis 6:14', extraDown: 'HAM', extraDownClue: 'One of Noah’s sons who entered the ark with his wife', extraDownRef: 'Genesis 7:13' },
          { across: 'EDEN', acrossClue: 'The garden where Adam and Eve first lived', down: 'EVE', downClue: 'The first woman, formed from Adam’s side', acrossRef: 'Genesis 2:8', downRef: 'Genesis 2:21-23', extraDown: 'NEHEMIAH', extraDownClue: 'The cupbearer who led the rebuilding of Jerusalem’s wall', extraDownRef: 'Nehemiah 2:17-18' },
          { across: 'MOSES', acrossClue: 'The leader God used to bring Israel out of Egypt', down: 'SEA', downClue: 'The body of water God parted for Israel to cross', acrossRef: 'Exodus 3:10', downRef: 'Exodus 14:21-22', extraDown: 'JOSHUA', extraDownClue: 'The leader who succeeded Moses and led Israel into Canaan', extraDownRef: 'Joshua 1:1-6' },
          { across: 'RUTH', acrossClue: 'The Moabite woman who stayed loyal to Naomi', down: 'THOMAS', downClue: 'The disciple who doubted Jesus had risen until he saw Him', acrossRef: 'Ruth 1:16-17', downRef: 'John 20:24-29', extraDown: 'RACHEL', extraDownClue: 'The wife of Jacob and mother of Joseph and Benjamin', extraDownRef: 'Genesis 35:24' },
          { across: 'JONAH', acrossClue: 'The prophet who was swallowed by a great fish', down: 'JOHN', downClue: 'The apostle traditionally associated with the fourth Gospel', acrossRef: 'Jonah 1:17', downRef: 'John 21:20-24', extraDown: 'NOAH', extraDownClue: 'The man who built the ark before the flood', extraDownRef: 'Genesis 6:13-22' },
          { across: 'DAVID', acrossClue: 'The young shepherd who defeated Goliath', down: 'DANIEL', downClue: 'The prophet who was thrown into the lions’ den', acrossRef: '1 Samuel 17:49-50', downRef: 'Daniel 6:16-23', extraDown: 'ISAIAH', extraDownClue: 'The prophet who foretold that a child would be called Immanuel', extraDownRef: 'Isaiah 7:14' },
          { across: 'MARY', acrossClue: 'The mother of Jesus', down: 'MARK', downClue: 'The Gospel writer whose account begins with John the Baptist', acrossRef: 'Luke 1:30-31', downRef: 'Mark 1:1-4', extraDown: 'RUTH', extraDownClue: 'The loyal Moabite woman who became an ancestor of David', extraDownRef: 'Ruth 4:13-17' },
          { across: 'PETER', acrossClue: 'The disciple who denied Jesus three times', down: 'TEMPLE', downClue: 'The holy place in Jerusalem where Jesus taught', acrossRef: 'Luke 22:54-62', downRef: 'Luke 19:45-47', extraDown: 'RUTH', extraDownClue: 'The Moabite woman who stayed with Naomi', extraDownRef: 'Ruth 1:16-17' },
          { across: 'ESTHER', acrossClue: 'The Jewish queen who risked her life to save her people', down: 'STAR', downClue: 'The sign that led the wise men to Jesus', acrossRef: 'Esther 4:14-16', downRef: 'Matthew 2:1-2', extraDown: 'JESUS', extraDownClue: 'The promised Messiah born in Bethlehem', extraDownRef: 'Matthew 2:1' },
          { across: 'ISAAC', acrossClue: 'The son God promised to Abraham and Sarah', down: 'CAIN', downClue: 'Adam and Eve’s first son, who killed Abel', acrossRef: 'Genesis 21:1-3', downRef: 'Genesis 4:1-8', extraDown: 'SARAH', extraDownClue: 'Abraham’s wife and the mother of Isaac', extraDownRef: 'Genesis 21:1-3' },
          { across: 'JACOB', acrossClue: 'The son of Isaac whose name was changed to Israel', down: 'JOB', downClue: 'The righteous man who endured great suffering and remained faithful', acrossRef: 'Genesis 32:28', downRef: 'Job 1:1-22', extraDown: 'RACHEL', extraDownClue: 'The wife of Jacob whom he loved deeply', extraDownRef: 'Genesis 29:18' },
          { across: 'SAMUEL', acrossClue: 'The prophet who anointed Saul and David as kings', down: 'SAUL', downClue: 'Israel’s first king, anointed by Samuel', acrossRef: '1 Samuel 10:1; 16:13', downRef: '1 Samuel 10:1', extraDown: 'DAVID', extraDownClue: 'The shepherd boy who became king after Saul', extraDownRef: '1 Samuel 16:13' },
        ];
        const pair = crosswordPairs[globalSeed % crosswordPairs.length];
        const acrossWord = pair.across.replace(/[^A-Z]/gi, '').toUpperCase();
        const downWord = pair.down.replace(/[^A-Z]/gi, '').toUpperCase();
        const extraWord = pair.extraDown.replace(/[^A-Z]/gi, '').toUpperCase();
        const sharedAcrossIndex = [...acrossWord].findIndex((letter) => downWord.includes(letter));
        const extraAcrossIndex = [...acrossWord].findIndex((letter, index) => index !== sharedAcrossIndex && extraWord.includes(letter));
        if (sharedAcrossIndex < 0 || extraAcrossIndex < 0) {
          throw new Error(`Invalid Bible crossword intersection for level ${level}, challenge ${challengeIndex}.`);
        }
        if (!pair.acrossClue.trim() || !pair.downClue.trim() || !pair.extraDownClue.trim() ||
            !pair.acrossRef.trim() || !pair.downRef.trim() || !pair.extraDownRef.trim()) {
          throw new Error(`Incomplete Bible crossword clue or Scripture reference for level ${level}, challenge ${challengeIndex}.`);
        }
        items.push({
          id,
          game_slug: gameSlug,
          level,
          challenge_index: challengeIndex,
          question_text: 'Solve the two Bible clues. Their answers cross at a shared letter.',
          options: [acrossWord, downWord],
          correct_answer: `${acrossWord}|${downWord}`,
          explanation: `Across: ${acrossWord} — ${pair.acrossClue} (${pair.acrossRef}). Down: ${downWord} — ${pair.downClue} (${pair.downRef}).`,
          reference: `${pair.acrossRef}; ${pair.downRef}`,
          metadata: {
            acrossClue: pair.acrossClue,
            acrossAnswer: acrossWord,
            downClue: pair.downClue,
            downAnswer: downWord,
            extraDownAnswer: pair.extraDown,
            extraDownClue: pair.extraDownClue,
            extraDownReference: pair.extraDownRef,
          },
        });
        break;
      }

      case 'who-said-it': {
        const q = QUOTES_POOL[globalSeed % QUOTES_POOL.length];
        const options = makeFourDistinctOptions(q.speaker, q.options, shuffleSeed);
        items.push({
          id,
          game_slug: gameSlug,
          level,
          challenge_index: challengeIndex,
          question_text: `Who spoke these words in Scripture: "${q.quote}"?`,
          options,
          correct_answer: q.speaker,
          explanation: q.context,
          reference: q.ref,
        });
        break;
      }

      case 'complete-the-scripture': {
        const v = VERSES_POOL[globalSeed % VERSES_POOL.length];
        const masked = v.text.replace(new RegExp(`\\b${v.missing}\\b`, 'i'), '_____');
        const options = makeFourDistinctOptions(v.missing, v.distractors, shuffleSeed);
        items.push({
          id,
          game_slug: gameSlug,
          level,
          challenge_index: challengeIndex,
          question_text: `Complete the verse (${v.ref}): "${masked}"`,
          options,
          correct_answer: v.missing,
          explanation: `Full verse (${v.ref}): "${v.text}."`,
          reference: v.ref,
        });
        break;
      }

      case 'bible-match-up': {
        const pairs = [
          BIBLE_CHARACTERS[globalSeed % BIBLE_CHARACTERS.length],
          BIBLE_CHARACTERS[(globalSeed + 3) % BIBLE_CHARACTERS.length],
          BIBLE_CHARACTERS[(globalSeed + 7) % BIBLE_CHARACTERS.length],
          BIBLE_CHARACTERS[(globalSeed + 11) % BIBLE_CHARACTERS.length],
        ].map((c) => ({ left: c.name, right: c.clue3, ref: c.clue3Ref }));
        items.push({
          id,
          game_slug: gameSlug,
          level,
          challenge_index: challengeIndex,
          question_text: 'Match each biblical figure with their scriptural accomplishment:',
          options: pairs.map((p) => `${p.left}:${p.right}`),
          correct_answer: pairs.map((p) => `${p.left}=${p.right}`).join('|'),
          explanation: pairs.map((p) => `${p.left} — ${p.right} (${p.ref})`).join(' • '),
          reference: pairs.map((p) => p.ref).join('; '),
          metadata: { pairs },
        });
        break;
      }

      case 'bible-timeline': {
        const startBook = (globalSeed * 2) % (BOOKS_66.length - 4);
        const seq = [
          BOOKS_66[startBook],
          BOOKS_66[startBook + 1],
          BOOKS_66[startBook + 2],
          BOOKS_66[startBook + 3],
        ];
        items.push({
          id,
          game_slug: gameSlug,
          level,
          challenge_index: challengeIndex,
          question_text: 'Arrange these four biblical books and epochs in canonical order from earliest to latest:',
          options: shuffleDeterministic(seq.map((s) => s.name), shuffleSeed),
          correct_answer: seq.map((s) => s.name).join(' -> '),
          explanation: `Canonical sequence: ${seq.map((s) => `${s.name} (${s.clue})`).join(' → ')}.`,
          reference: `${seq[0].ref} – ${seq[3].ref}`,
          metadata: {
            events: seq.map((s, idx) => ({ order: idx + 1, title: s.name, clue: s.clue, ref: s.ref })),
          },
        });
        break;
      }

      case 'bible-puzzles': {
        const v = VERSES_POOL[globalSeed % VERSES_POOL.length];
        const words = v.text.split(' ');
        const third = Math.max(2, Math.floor(words.length / 3));
        const tiles = [
          words.slice(0, third).join(' '),
          words.slice(third, third * 2).join(' '),
          words.slice(third * 2).join(' '),
        ];
        items.push({
          id,
          game_slug: gameSlug,
          level,
          challenge_index: challengeIndex,
          question_text: `Reconstruct the sacred tablet mosaic for ${v.ref} by placing the three carved stone fragments in order:`,
          options: shuffleDeterministic([...tiles], shuffleSeed),
          correct_answer: tiles.join(' | '),
          explanation: `Completed inscription (${v.ref}): "${v.text}."`,
          reference: v.ref,
          metadata: { tiles },
        });
        break;
      }

      case 'find-the-bible-book': {
        const book = BOOKS_66[globalSeed % BOOKS_66.length];
        const candidateBooks: string[] = [];
        for (let off = 1; candidateBooks.length < 3 && off < BOOKS_66.length; off++) {
          const b = BOOKS_66[(globalSeed + off * 11) % BOOKS_66.length].name;
          if (b !== book.name && !candidateBooks.includes(b)) candidateBooks.push(b);
        }
        const options = makeFourDistinctOptions(book.name, candidateBooks, shuffleSeed);
        items.push({
          id,
          game_slug: gameSlug,
          level,
          challenge_index: challengeIndex,
          question_text: `Clue: "${book.clue}" (${book.testament} • ${book.section}, ${book.chapters} chapters). Which book is this?`,
          options,
          correct_answer: book.name,
          explanation: `${book.name} was written by ${book.author} and belongs to the ${book.section} section. Key scripture: ${book.ref}.`,
          reference: book.ref,
        });
        break;
      }

      case 'bible-riddles': {
        const r = RIDDLES_POOL[globalSeed % RIDDLES_POOL.length];
        const options = makeFourDistinctOptions(r.answer, r.options, shuffleSeed);
        items.push({
          id,
          game_slug: gameSlug,
          level,
          challenge_index: challengeIndex,
          question_text: r.riddle,
          options,
          correct_answer: r.answer,
          explanation: r.explanation,
          reference: r.ref,
        });
        break;
      }

      case 'bible-geography-quest': {
        const loc = GEOGRAPHY_LOCATIONS[globalSeed % GEOGRAPHY_LOCATIONS.length];
        const candidateLocs: string[] = [];
        for (let off = 1; candidateLocs.length < 3 && off < GEOGRAPHY_LOCATIONS.length; off++) {
          const l = GEOGRAPHY_LOCATIONS[(globalSeed + off * 5) % GEOGRAPHY_LOCATIONS.length].place;
          if (l !== loc.place && !candidateLocs.includes(l)) candidateLocs.push(l);
        }
        const options = makeFourDistinctOptions(loc.place, candidateLocs, shuffleSeed);
        items.push({
          id,
          game_slug: gameSlug,
          level,
          challenge_index: challengeIndex,
          question_text: `Sacred Atlas (${loc.region}): Identify the location where "${loc.event}".`,
          options,
          correct_answer: loc.place,
          explanation: `${loc.place} is located in ${loc.region}. ${loc.event}.`,
          reference: loc.ref,
          metadata: { region: loc.region },
        });
        break;
      }

      case 'bible-memory-challenge': {
        const subset = [
          BOOKS_66[globalSeed % BOOKS_66.length],
          BOOKS_66[(globalSeed + 4) % BOOKS_66.length],
          BOOKS_66[(globalSeed + 9) % BOOKS_66.length],
        ];
        items.push({
          id,
          game_slug: gameSlug,
          level,
          challenge_index: challengeIndex,
          question_text: 'Flip and match each Bible book card with its key scriptural reference:',
          options: subset.map((s) => `${s.name}|${s.ref}`),
          correct_answer: subset.map((s) => `${s.name}=${s.ref}`).join(','),
          explanation: subset.map((s) => `${s.name} (${s.ref}): ${s.clue}`).join(' • '),
          reference: subset.map((s) => s.ref).join('; '),
          metadata: {
            memoryPairs: subset.map((s) => ({ a: s.name, b: s.ref })),
          },
        });
        break;
      }

      case 'old-vs-new-testament': {
        const book = BOOKS_66[globalSeed % BOOKS_66.length];
        items.push({
          id,
          game_slug: gameSlug,
          level,
          challenge_index: challengeIndex,
          question_text: `Classify "${book.name}" (${book.clue}): Does it belong to the Old Testament or the New Testament?`,
          options: ['Old Testament', 'New Testament'],
          correct_answer: book.testament,
          explanation: `${book.name} is part of the ${book.section} section in the ${book.testament}.`,
          reference: book.ref,
        });
        break;
      }

      case 'bible-detective': {
        const c = DETECTIVE_CASES[globalSeed % DETECTIVE_CASES.length];
        const options = makeFourDistinctOptions(c.answer, c.options, shuffleSeed);
        items.push({
          id,
          game_slug: gameSlug,
          level,
          challenge_index: challengeIndex,
          question_text: `${c.title} — Examine the evidence and identify the biblical account:`,
          options,
          correct_answer: c.answer,
          explanation: c.explanation,
          reference: c.ref,
          metadata: {
            clues: [c.clue1, c.clue2, c.clue3],
          },
        });
        break;
      }

      case 'bible-chain-challenge': {
        // Combine the curated rare-name catalogue with the established character
        // reference bank. Only single people are eligible; Bible book titles and
        // group/couple labels are excluded.
        const curated = BIBLE_CHAIN_PEOPLE_SEED.map((p) => ({
          id: p.id, name: p.displayName, aliases: p.aliases, reference: p.reference,
          identity: p.identity, category: p.category, difficulty: p.difficulty,
        }));
        const established = BIBLE_CHARACTERS
          .filter((p) => !/[&]|\band\b/i.test(p.name))
          .map((p) => ({
            id: `existing-${normalizeBiblePersonName(p.name)}`,
            name: p.name.replace(/\s*\([^)]*\)\s*/g, '').trim(),
            aliases: [] as string[],
            reference: p.clue1Ref || p.ref,
            identity: p.clue1,
            category: p.role.toLowerCase().includes('prophet') ? 'prophet' : p.role.toLowerCase().includes('king') ? 'king' : p.role.toLowerCase().includes('apostle') ? 'apostle' : 'other',
            difficulty: 2,
          }));
        const uniquePeople = new Map<string, { id: string; name: string; reference: string; identity: string; category: string; difficulty: number }>();
        for (const person of [...curated, ...established]) {
          const key = normalizeBiblePersonName(person.name);
          if (key.length < 2 || !person.reference || !person.identity) continue;
          if (!uniquePeople.has(key)) uniquePeople.set(key, person);
        }
        const people = [...uniquePeople.values()];
        // Build a genuine five-person chain. Every next name begins with
        // the previous name's final letter, and no person appears twice.
        const byInitial = new Map<string, typeof people>();
        for (const person of people) {
          const initial = normalizeBiblePersonName(person.name)[0]?.toUpperCase();
          if (!initial) continue;
          byInitial.set(initial, [...(byInitial.get(initial) || []), person]);
        }
        const paths: Array<{ chain: typeof people; answer: typeof people[number]; choices: typeof people }> = [];
        for (const first of people) {
          const walk = (chain: typeof people) => {
            if (paths.length >= 500) return;
            if (chain.length === 4) {
              const last = chain[chain.length - 1];
              const required = normalizeBiblePersonName(last.name).slice(-1).toUpperCase();
              const next = (byInitial.get(required) || []).filter((p) => !chain.some((x) => x.id === p.id));
              if (next.length >= 4) {
                const ranked = shuffleDeterministic(next, shuffleSeed + chain.length * 37 + normalizeBiblePersonName(first.name).length);
                paths.push({ chain, answer: ranked[0], choices: ranked.slice(0, 4) });
              }
              return;
            }
            const last = chain[chain.length - 1];
            const required = normalizeBiblePersonName(last.name).slice(-1).toUpperCase();
            const next = (byInitial.get(required) || [])
              .filter((p) => !chain.some((x) => x.id === p.id))
              .sort((a, b) => a.name.localeCompare(b.name));
            for (const candidate of next.slice(0, 12)) {
              walk([...chain, candidate]);
              if (paths.length >= 500) break;
            }
          };
          walk([first]);
        }
        if (!paths.length) {
          throw new Error('Bible Chain needs at least five distinct linked people and four valid final choices.');
        }
        const chosen = paths[globalSeed % paths.length];
        const requiredLetter = normalizeBiblePersonName(chosen.chain[3].name).slice(-1).toUpperCase();
        const options = shuffleDeterministic(chosen.choices.map((person) => person.name), shuffleSeed);
        const chainNames = chosen.chain.map((person) => person.name);
        items.push({
          id,
          game_slug: gameSlug,
          level,
          challenge_index: challengeIndex,
          question_text: `Complete this five-person Bible name chain. Each name must begin with the final letter of the name before it. Dossier: ${chosen.answer.identity} Which person fits the dossier and completes the chain?`,
          options,
          correct_answer: chosen.answer.name,
          explanation: `${chainNames.join(' → ')} → ${chosen.answer.name}. The final letter of ${chosen.chain[3].name} is “${requiredLetter}”, so the next name begins with that letter. ${chosen.answer.identity}`,
          reference: [ ...chosen.chain.map((person) => person.reference), chosen.answer.reference ].join('; '),
          metadata: {
            chain: chainNames,
            previousWord: chosen.chain[3].name,
            requiredLetter,
            answerPersonId: chosen.answer.id,
            category: chosen.answer.category,
            difficulty: Math.min(5, Math.max(1, Math.ceil(level / 6))),
            clues: [
              `The next name begins with “${requiredLetter}”.`,
              `Check the relevant Bible passages: ${chosen.answer.reference}.`,
            ],
          },
        });
        break;
      }

      case 'verse-builder': {
        const v = VERSES_POOL[globalSeed % VERSES_POOL.length];
        const words = v.text.split(' ');
        items.push({
          id,
          game_slug: gameSlug,
          level,
          challenge_index: challengeIndex,
          question_text: `Tap the word tiles in order to assemble ${v.ref}:`,
          options: shuffleDeterministic([...words], shuffleSeed),
          correct_answer: v.text,
          explanation: `Completed verse (${v.ref}): "${v.text}."`,
          reference: v.ref,
          metadata: {
            words,
          },
        });
        break;
      }

      case 'guess-the-emoji':
      default: {
        const emojiList = [
          { emojis: '🌧️ 🛶 🦒 🌈', answer: 'Noah’s Ark', opts: ['Noah’s Ark', 'Red Sea Crossing', 'Jonah’s Ship', 'Creation'], exp: 'Noah built the ark to preserve his family and creatures through the flood.', ref: 'Genesis 6:14' },
          { emojis: '🐟 🙏 🌊 🏙️', answer: 'Jonah and the Great Fish', opts: ['Jonah and the Great Fish', 'Miraculous Catch', 'Walking on Water', 'Paul’s Shipwreck'], exp: 'Jonah prayed three days inside the great fish before preaching to Nineveh.', ref: 'Jonah 1:17' },
          { emojis: '👶 ⭐ 🐑 👑', answer: 'The Birth of Jesus', opts: ['The Birth of Jesus', 'Boy Samuel at Shiloh', 'Moses in the Basket', 'Birth of Isaac'], exp: 'Jesus was born in Bethlehem as angels announced good news to shepherds.', ref: 'Luke 2:11' },
          { emojis: '🌊 🦯 🏜️ 🚶', answer: 'Parting the Red Sea', opts: ['Parting the Red Sea', 'Water from the Rock', 'Baptism in the Jordan', 'Pool of Siloam'], exp: 'Moses stretched out his hand and the Lord divided the Red Sea.', ref: 'Exodus 14:21' },
          { emojis: '🦁 🙏 🕳️ 👑', answer: 'Daniel in the Lions’ Den', opts: ['Daniel in the Lions’ Den', 'Samson’s Lion Riddle', 'David Guarding Sheep', 'Fiery Furnace'], exp: 'God sent His angel to shut the lions’ mouths because Daniel trusted in Him.', ref: 'Daniel 6:22' },
          { emojis: '🍞 🍞 🐟 🐟 🧺', answer: 'Feeding the Five Thousand', opts: ['Feeding the Five Thousand', 'Manna in the Wilderness', 'The Last Supper', 'Elijah and the Widow'], exp: 'Jesus multiplied five barley loaves and two fish to feed 5,000 men.', ref: 'Matthew 14:19-20' },
          { emojis: '🪨 🏹 🛡️ 🏆', answer: 'David and Goliath', opts: ['David and Goliath', 'Walls of Jericho', 'Gideon’s Three Hundred', 'Jonathan’s Armor-Bearer'], exp: 'David defeated the Philistine giant Goliath with a sling and a stone.', ref: '1 Samuel 17:49' },
          { emojis: '🔥 🌿 🗣️ 🩴', answer: 'Moses and the Burning Bush', opts: ['Moses and the Burning Bush', 'Elijah on Mount Carmel', 'Pentecost Tongues of Fire', 'Pillar of Fire'], exp: 'God spoke to Moses from the burning bush on Mount Horeb.', ref: 'Exodus 3:2-5' },
          { emojis: '🧱 📯 💥 🏰', answer: 'Fall of Jericho', opts: ['Fall of Jericho', 'Tower of Babel', 'Nehemiah’s Wall', 'Solomon’s Temple'], exp: 'The walls of Jericho fell flat on the seventh day after the priests blew the trumpets.', ref: 'Joshua 6:20' },
          { emojis: '🍷 🏺 💧 💒', answer: 'Water into Wine at Cana', opts: ['Water into Wine at Cana', 'The Last Supper', 'Woman at the Well', 'Waters of Marah'], exp: 'Jesus turned water into choice wine at the wedding in Cana of Galilee.', ref: 'John 2:1-11' },
        ];
        const em = emojiList[globalSeed % emojiList.length];
        const options = makeFourDistinctOptions(em.answer, em.opts, shuffleSeed);
        items.push({
          id,
          game_slug: gameSlug,
          level,
          challenge_index: challengeIndex,
          question_text: em.emojis,
          options,
          correct_answer: em.answer,
          explanation: em.exp,
          reference: em.ref,
          metadata: { emojis: em.emojis },
        });
        break;
      }
    }
  }

  return items;
}

/**
 * High-quality 32-bit Mulberry32 PRNG for uniform, unbiased deterministic shuffling.
 */
export function mulberry32(seed: number): () => number {
  let s = (seed >>> 0) + 0x6d2b79f5;
  return () => {
    s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * Guarantees exactly 4 distinct options with the correct answer included,
 * shuffled uniformly across positions A, B, C, and D (~25% each).
 */
export function makeFourDistinctOptions(
  correct: string,
  candidates: string[],
  seed: number
): string[] {
  const distinct = [correct];
  const seen = new Set<string>([correct.trim().toLowerCase()]);
  for (const c of candidates) {
    const norm = c.trim().toLowerCase();
    if (!seen.has(norm) && c.trim().length > 0) {
      seen.add(norm);
      distinct.push(c);
      if (distinct.length === 4) break;
    }
  }
  return shuffleDeterministic(distinct, seed);
}

/**
 * Uniform Fisher-Yates shuffle powered by Mulberry32.
 */
export function shuffleDeterministic<T>(arr: T[], seed: number): T[] {
  const copy = [...arr];
  if (copy.length <= 1) return copy;
  const rand = mulberry32(seed + 0x9e3779b9);
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}
