import { BIBLE_CHAIN_PEOPLE_SEED, normalizeBiblePersonName } from './bibleChainPeople';
import { COMPLETE_SCRIPTURE_VERSES } from './completeScriptureVerses';
import { getMatchUpChallenge } from './bibleMatchUpBank';
import { SCRIPTURE_CHALLENGE_QUESTIONS } from './scriptureChallengeQuestions';
import { BIBLE_CHARACTER_QUEST_QUESTIONS } from './bibleCharacterQuestQuestions';
import { SCRIPTURE_SCRAMBLE_QUESTIONS } from './scriptureScrambleQuestions';
import { BIBLE_CROSSWORD_QUESTIONS } from './bibleCrosswordQuestions';
import { COMPLETE_THE_SCRIPTURE_QUESTIONS } from './completeScriptureQuestions';
import { BIBLE_MATCH_UP_QUESTIONS } from './bibleMatchUpQuestions';
import { BIBLE_TIMELINE_QUESTIONS } from './bibleTimelineQuestions';
import { BIBLE_PUZZLES_QUESTIONS } from './biblePuzzlesQuestions';
import { FIND_THE_BIBLE_BOOK_QUESTIONS } from './findTheBibleBookQuestions';
import { BIBLE_RIDDLES_QUESTIONS } from './bibleRiddlesQuestions';
import { BIBLE_MEMORY_QUESTIONS } from './bibleMemoryQuestions';
import { BIBLE_CHAIN_QUESTIONS } from './bibleChainQuestions';
import { VERSE_BUILDER_QUESTIONS } from './verseBuilderQuestions';
import { BIBLE_DETECTIVE_BATCH_01 } from './rebuild/bibleDetectiveBatch01';
import { BIBLE_DETECTIVE_BATCH_02 } from './rebuild/bibleDetectiveBatch02';
import { BIBLE_DETECTIVE_BATCH_03 } from './rebuild/bibleDetectiveBatch03';
import { BIBLE_DETECTIVE_BATCH_04 } from './rebuild/bibleDetectiveBatch04';
import { BIBLE_DETECTIVE_BATCH_05 } from './rebuild/bibleDetectiveBatch05';
import { BIBLE_GEOGRAPHY_BATCH_01 } from './rebuild/bibleGeographyBatch01';
import { BIBLE_GEOGRAPHY_BATCH_02 } from './rebuild/bibleGeographyBatch02';

import { GUESS_THE_EMOJI_QUESTIONS } from './guessTheEmojiQuestions';

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


/**
 * Passage-reviewed batches replace the small fallback pools for the published
 * levels of these games. Runtime questions now use the batches that passed the
 * staged uniqueness and structural reference audit.
 */
const REVIEWED_BATCHES_BY_GAME: Record<string, ChallengeItem[]> = {
  'bible-detective': [
    ...BIBLE_DETECTIVE_BATCH_01,
    ...BIBLE_DETECTIVE_BATCH_02,
    ...BIBLE_DETECTIVE_BATCH_03,
    ...BIBLE_DETECTIVE_BATCH_04,
    ...BIBLE_DETECTIVE_BATCH_05,
  ],
  'bible-geography-quest': [
    ...BIBLE_GEOGRAPHY_BATCH_01,
    ...BIBLE_GEOGRAPHY_BATCH_02,
  ],
};

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


const OLD_TESTAMENT_BOOKS = BOOKS_66.filter((book) => book.testament === 'Old Testament');
const NEW_TESTAMENT_BOOKS = BOOKS_66.filter((book) => book.testament === 'New Testament');
const OLD_NEW_INTERLEAVED_BOOKS: (typeof BOOKS_66)[number][] = [];
for (let index = 0; index < Math.max(OLD_TESTAMENT_BOOKS.length, NEW_TESTAMENT_BOOKS.length); index++) {
  if (OLD_TESTAMENT_BOOKS[index]) OLD_NEW_INTERLEAVED_BOOKS.push(OLD_TESTAMENT_BOOKS[index]);
  if (NEW_TESTAMENT_BOOKS[index]) OLD_NEW_INTERLEAVED_BOOKS.push(NEW_TESTAMENT_BOOKS[index]);
}

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

  { quote: 'How can I do this great wickedness?', speaker: 'Joseph', options: [], context: 'Joseph refused Potiphar’s wife because he would not sin against God.', ref: 'Genesis 39:9' },
  { quote: 'I have sinned against the Lord.', speaker: 'David', options: [], context: 'David confessed after Nathan confronted him about Bathsheba and Uriah.', ref: '2 Samuel 12:13' },
  { quote: 'I know that my Redeemer liveth.', speaker: 'Job', options: [], context: 'Job declared his confidence that his Redeemer lives despite his suffering.', ref: 'Job 19:25' },
  { quote: 'Though he slay me, yet will I trust in him.', speaker: 'Job', options: [], context: 'Job expressed determination to trust God amid suffering.', ref: 'Job 13:15' },
  { quote: 'I am not worthy of the least of all the mercies.', speaker: 'Jacob', options: [], context: 'Jacob prayed before meeting Esau and remembered God’s kindness.', ref: 'Genesis 32:10' },
  { quote: 'Let me die the death of the righteous.', speaker: 'Balaam', options: [], context: 'Balaam spoke this wish while delivering an oracle over Israel.', ref: 'Numbers 23:10' },
  { quote: 'The Lord is my portion, saith my soul.', speaker: 'Jeremiah', options: [], context: 'The lamenting speaker declared hope in the Lord’s faithfulness.', ref: 'Lamentations 3:24' },
  { quote: 'Here am I; for thou calledst me.', speaker: 'Samuel', options: [], context: 'Samuel answered Eli after hearing his name called during the night.', ref: '1 Samuel 3:8' },
  { quote: 'I am a man of unclean lips.', speaker: 'Isaiah', options: [], context: 'Isaiah confessed his uncleanness during his vision of the Lord.', ref: 'Isaiah 6:5' },
  { quote: 'O Lord GOD, thou knowest.', speaker: 'Ezekiel', options: [], context: 'Ezekiel answered when asked whether the dry bones could live.', ref: 'Ezekiel 37:3' },
  { quote: 'Remember me, O my God, for good.', speaker: 'Nehemiah', options: [], context: 'Nehemiah prayed this after describing reforms he had made in Jerusalem.', ref: 'Nehemiah 13:31' },
  { quote: 'I have sinned; for I have betrayed the innocent blood.', speaker: 'Judas Iscariot', options: [], context: 'Judas returned the silver and confessed to the chief priests and elders.', ref: 'Matthew 27:4' },
  { quote: 'Lord, remember me when thou comest into thy kingdom.', speaker: 'The repentant thief', options: [], context: 'One of the criminals crucified beside Jesus asked to be remembered.', ref: 'Luke 23:42' },
  { quote: 'My Lord and my God!', speaker: 'Thomas', options: [], context: 'Thomas responded after seeing the risen Jesus and His wounds.', ref: 'John 20:28' },
  { quote: 'Lord, show us the Father, and it sufficeth us.', speaker: 'Philip', options: [], context: 'Philip made this request during Jesus’ teaching at the Last Supper.', ref: 'John 14:8' },
  { quote: 'Let us also go, that we may die with him.', speaker: 'Thomas', options: [], context: 'Thomas said this when Jesus decided to return to Judea near Lazarus.', ref: 'John 11:16' },
  { quote: 'Can there any good thing come out of Nazareth?', speaker: 'Nathanael', options: [], context: 'Nathanael questioned Philip’s announcement about Jesus of Nazareth.', ref: 'John 1:46' },
  { quote: 'Thou art the Son of God; thou art the King of Israel.', speaker: 'Nathanael', options: [], context: 'Nathanael confessed his belief after Jesus described seeing him under the fig tree.', ref: 'John 1:49' },
  { quote: 'We have found the Messias.', speaker: 'Andrew', options: [], context: 'Andrew told his brother Simon that he had found the Messiah.', ref: 'John 1:41' },
  { quote: 'Yea, Lord: I believe that thou art the Christ.', speaker: 'Martha', options: [], context: 'Martha made this confession before Jesus raised Lazarus.', ref: 'John 11:27' },
  { quote: 'They have no wine.', speaker: 'Mary, the mother of Jesus', options: [], context: 'Mary brought the shortage at the wedding in Cana to Jesus’ attention.', ref: 'John 2:3' },
  { quote: 'Behold the handmaid of the Lord.', speaker: 'Mary, the mother of Jesus', options: [], context: 'Mary submitted to the angel’s announcement that she would bear Jesus.', ref: 'Luke 1:38' },
  { quote: 'Now lettest thou thy servant depart in peace.', speaker: 'Simeon', options: [], context: 'Simeon praised God after seeing the infant Jesus in the temple.', ref: 'Luke 2:29' },
  { quote: 'I am Gabriel, that stand in the presence of God.', speaker: 'Gabriel', options: [], context: 'The angel identified himself when announcing John’s birth to Zechariah.', ref: 'Luke 1:19' },
  { quote: 'How shall this be, seeing I know not a man?', speaker: 'Mary, the mother of Jesus', options: [], context: 'Mary asked Gabriel how his announcement would be fulfilled.', ref: 'Luke 1:34' },
  { quote: 'Blessed art thou among women.', speaker: 'Elizabeth', options: [], context: 'Elizabeth greeted Mary when Mary visited her in the hill country.', ref: 'Luke 1:42' },
  { quote: 'What manner of man is this, that even the winds obey him?', speaker: 'The disciples', options: [], context: 'The disciples asked this after Jesus calmed the storm on the lake.', ref: 'Matthew 8:27' },
  { quote: 'Lord, if it be thou, bid me come unto thee on the water.', speaker: 'Peter', options: [], context: 'Peter spoke from the boat during the storm when he saw Jesus walking on the sea.', ref: 'Matthew 14:28' },
  { quote: 'Depart from me; for I am a sinful man, O Lord.', speaker: 'Simon Peter', options: [], context: 'Peter said this after the miraculous catch of fish.', ref: 'Luke 5:8' },
  { quote: 'Lord, thou knowest all things; thou knowest that I love thee.', speaker: 'Peter', options: [], context: 'Peter answered Jesus’ question beside the Sea of Tiberias after the resurrection.', ref: 'John 21:17' },
  { quote: 'I know not the man.', speaker: 'Peter', options: [], context: 'Peter denied knowing Jesus during the high priest’s proceedings.', ref: 'Matthew 26:72' },
  { quote: 'Who art thou, Lord?', speaker: 'Saul of Tarsus', options: [], context: 'Saul asked this when the risen Jesus confronted him on the road to Damascus.', ref: 'Acts 9:5' },
  { quote: 'Lord, what wilt thou have me to do?', speaker: 'Saul of Tarsus', options: [], context: 'Saul asked for direction after being stopped on the road to Damascus.', ref: 'Acts 9:6' },
  { quote: 'We ought to obey God rather than men.', speaker: 'Peter and the apostles', options: [], context: 'The apostles answered the council after being ordered to stop teaching in Jesus’ name.', ref: 'Acts 5:29' },
  { quote: 'Lord Jesus, receive my spirit.', speaker: 'Stephen', options: [], context: 'Stephen prayed this as he was being stoned.', ref: 'Acts 7:59' },
  { quote: 'Behold, I see the heavens opened.', speaker: 'Stephen', options: [], context: 'Stephen described his vision of the Son of Man standing at God’s right hand.', ref: 'Acts 7:56' },
  { quote: 'What doth hinder me to be baptized?', speaker: 'The Ethiopian eunuch', options: [], context: 'The Ethiopian official asked Philip this after hearing the good news about Jesus.', ref: 'Acts 8:36' },
  { quote: 'I perceive that God is no respecter of persons.', speaker: 'Peter', options: [], context: 'Peter spoke at Cornelius’ house as he understood that God welcomes people from every nation.', ref: 'Acts 10:34' },
  { quote: 'I am a Pharisee, the son of a Pharisee.', speaker: 'Paul', options: [], context: 'Paul declared this before the council when the resurrection became the issue.', ref: 'Acts 23:6' },
  { quote: 'I appeal unto Caesar.', speaker: 'Paul', options: [], context: 'Paul made this appeal before Festus when his case was being heard.', ref: 'Acts 25:11' },
  { quote: 'Almost thou persuadest me to be a Christian.', speaker: 'King Agrippa', options: [], context: 'Agrippa responded to Paul’s testimony before Festus and the assembled officials.', ref: 'Acts 26:28' },
  { quote: 'Believe on the Lord Jesus Christ, and thou shalt be saved.', speaker: 'Paul and Silas', options: [], context: 'They answered the Philippian jailer’s question about salvation.', ref: 'Acts 16:31' },
  { quote: 'Sirs, what must I do to be saved?', speaker: 'The Philippian jailer', options: [], context: 'The jailer asked Paul and Silas this after the earthquake opened the prison doors.', ref: 'Acts 16:30' },
  { quote: 'I have fought a good fight, I have finished my course.', speaker: 'Paul', options: [], context: 'Paul reflected on his faithful ministry near the end of his life.', ref: '2 Timothy 4:7' },
  { quote: 'I know whom I have believed.', speaker: 'Paul', options: [], context: 'Paul expressed confidence in the One to whom he had entrusted himself.', ref: '2 Timothy 1:12' },
  { quote: 'I am crucified with Christ.', speaker: 'Paul', options: [], context: 'Paul explained his life of faith and union with Christ.', ref: 'Galatians 2:20' },
  { quote: 'O foolish Galatians, who hath bewitched you?', speaker: 'Paul', options: [], context: 'Paul challenged the Galatian believers about abandoning the truth of the gospel.', ref: 'Galatians 3:1' },
  { quote: 'Stand fast therefore in the liberty wherewith Christ hath made us free.', speaker: 'Paul', options: [], context: 'Paul urged believers not to return to a yoke of bondage.', ref: 'Galatians 5:1' },
  { quote: 'Let us not be weary in well doing.', speaker: 'Paul', options: [], context: 'Paul encouraged the churches to continue doing good without giving up.', ref: 'Galatians 6:9' },
  { quote: 'Put on the whole armour of God.', speaker: 'Paul', options: [], context: 'Paul instructed believers to stand against the schemes of the devil.', ref: 'Ephesians 6:11' },
  { quote: 'Rejoice in the Lord alway: and again I say, Rejoice.', speaker: 'Paul', options: [], context: 'Paul urged the Philippians to rejoice continually in the Lord.', ref: 'Philippians 4:4' },
  { quote: 'I press toward the mark for the prize.', speaker: 'Paul', options: [], context: 'Paul described his determination to pursue the upward call of God in Christ.', ref: 'Philippians 3:14' },
  { quote: 'For we walk by faith, not by sight.', speaker: 'Paul', options: [], context: 'Paul described the believer’s confidence while away from the Lord’s visible presence.', ref: '2 Corinthians 5:7' },
  { quote: 'I have learned, in whatsoever state I am, therewith to be content.', speaker: 'Paul', options: [], context: 'Paul explained that he had learned contentment in both abundance and need.', ref: 'Philippians 4:11' },
  { quote: 'If God be for us, who can be against us?', speaker: 'Paul', options: [], context: 'Paul declared the security of those who are in Christ.', ref: 'Romans 8:31' },
  { quote: 'Who shall separate us from the love of Christ?', speaker: 'Paul', options: [], context: 'Paul asked this rhetorical question while describing the believer’s security in Christ.', ref: 'Romans 8:35' },
  { quote: 'The love of Christ constraineth us.', speaker: 'Paul', options: [], context: 'Paul explained what motivates his ministry and life.', ref: '2 Corinthians 5:14' },
  { quote: 'I am ready not to be bound only, but also to die.', speaker: 'Paul', options: [], context: 'Paul answered those who pleaded with him not to go to Jerusalem.', ref: 'Acts 21:13' },
  { quote: 'I have not shunned to declare unto you all the counsel of God.', speaker: 'Paul', options: [], context: 'Paul reminded the Ephesian elders of the completeness of his teaching.', ref: 'Acts 20:27' },
  { quote: 'I count all things but loss for the excellency of the knowledge of Christ.', speaker: 'Paul', options: [], context: 'Paul described the surpassing worth of knowing Christ Jesus.', ref: 'Philippians 3:8' },
  { quote: 'I am the least of the apostles.', speaker: 'Paul', options: [], context: 'Paul reflected on his former persecution of the church and God’s grace to him.', ref: '1 Corinthians 15:9' },

  { quote: 'Whom have I in heaven but thee?', speaker: 'Asaph', options: [], context: 'Asaph confessed that God was his supreme desire and strength.', ref: 'Psalm 73:25' },
  { quote: 'Create in me a clean heart, O God.', speaker: 'David', options: [], context: 'David prayed for cleansing and renewal after his sin with Bathsheba.', ref: 'Psalm 51:10' },
  { quote: 'I will bless the LORD at all times.', speaker: 'David', options: [], context: 'David began a psalm of praise and testimony about deliverance.', ref: 'Psalm 34:1' },
  { quote: 'The LORD is my light and my salvation.', speaker: 'David', options: [], context: 'David declared his confidence in God in the face of enemies.', ref: 'Psalm 27:1' },
  { quote: 'What is man, that thou art mindful of him?', speaker: 'David', options: [], context: 'David marvelled at God’s care for humanity in Psalm 8.', ref: 'Psalm 8:4' },
  { quote: 'I will lift up mine eyes unto the hills.', speaker: 'The psalmist', options: [], context: 'The psalmist began a song about the Lord as keeper and helper.', ref: 'Psalm 121:1' },
  { quote: 'The fear of the LORD is the beginning of knowledge.', speaker: 'Solomon', options: [], context: 'The opening proverbs introduce the foundation of true knowledge.', ref: 'Proverbs 1:7' },
  { quote: 'Vanity of vanities; all is vanity.', speaker: 'The Preacher', options: [], context: 'The Preacher introduced his reflection on the fleeting nature of earthly pursuits.', ref: 'Ecclesiastes 1:2' },
  { quote: 'To every thing there is a season.', speaker: 'The Preacher', options: [], context: 'The Preacher reflected on the appointed times for human experiences.', ref: 'Ecclesiastes 3:1' },
  { quote: 'I know that my redeemer liveth.', speaker: 'Job', options: [], context: 'Job declared hope in his living Redeemer in the middle of suffering.', ref: 'Job 19:25' },
  { quote: 'Naked came I out of my mother’s womb.', speaker: 'Job', options: [], context: 'Job worshipped after losing his possessions and children.', ref: 'Job 1:21' },
  { quote: 'Shall we receive good at the hand of God, and shall we not receive evil?', speaker: 'Job', options: [], context: 'Job answered his wife after calamity struck his household.', ref: 'Job 2:10' },
  { quote: 'I have heard of thee by the hearing of the ear.', speaker: 'Job', options: [], context: 'Job confessed a deeper understanding of God after the Lord answered him.', ref: 'Job 42:5' },
  { quote: 'Is there no balm in Gilead?', speaker: 'Jeremiah', options: [], context: 'Jeremiah lamented the spiritual sickness and suffering of his people.', ref: 'Jeremiah 8:22' },
  { quote: 'Ah, Lord GOD! behold, I cannot speak.', speaker: 'Jeremiah', options: [], context: 'Jeremiah responded to his call by saying he was too young to speak.', ref: 'Jeremiah 1:6' },
  { quote: 'Thy words were found, and I did eat them.', speaker: 'Jeremiah', options: [], context: 'Jeremiah described the joy of receiving God’s words.', ref: 'Jeremiah 15:16' },
  { quote: 'The just shall live by his faith.', speaker: 'Habakkuk', options: [], context: 'Habakkuk contrasted the proud with the righteous person who lives by faith.', ref: 'Habakkuk 2:4' },
  { quote: 'Though the fig tree shall not blossom, neither shall fruit be in the vines.', speaker: 'Habakkuk', options: [], context: 'Habakkuk declared that he would rejoice in the Lord even when crops failed.', ref: 'Habakkuk 3:17-18' },
  { quote: 'But as for me, I will look unto the LORD.', speaker: 'Micah', options: [], context: 'Micah expressed patient hope while awaiting God’s salvation.', ref: 'Micah 7:7' },
  { quote: 'Let justice roll down as waters.', speaker: 'Amos', options: [], context: 'Amos called Israel to let justice and righteousness replace empty worship.', ref: 'Amos 5:24' },
  { quote: 'I was no prophet, neither was I a prophet’s son.', speaker: 'Amos', options: [], context: 'Amos explained that he was a herdsman and a dresser of sycamore trees.', ref: 'Amos 7:14' },
  { quote: 'The LORD is good, a strong hold in the day of trouble.', speaker: 'Nahum', options: [], context: 'Nahum described God’s goodness and protection for those who trust Him.', ref: 'Nahum 1:7' },
  { quote: 'Prepare to meet thy God, O Israel.', speaker: 'Amos', options: [], context: 'Amos warned Israel to prepare to face the Lord after repeated refusals to repent.', ref: 'Amos 4:12' },
  { quote: 'Yet forty days, and Nineveh shall be overthrown.', speaker: 'Jonah', options: [], context: 'Jonah delivered God’s warning to the people of Nineveh.', ref: 'Jonah 3:4' },
  { quote: 'I know that thou art a gracious God, and merciful.', speaker: 'Jonah', options: [], context: 'Jonah explained why he had initially fled from his commission.', ref: 'Jonah 4:2' },
  { quote: 'Behold, I am vile; what shall I answer thee?', speaker: 'Job', options: [], context: 'Job humbled himself after the Lord questioned him.', ref: 'Job 40:4' },
  { quote: 'I will go down now, and see whether they have done altogether according to the cry of it.', speaker: 'The LORD', options: [], context: 'The Lord spoke concerning the outcry against Sodom and Gomorrah.', ref: 'Genesis 18:21' },
  { quote: 'Is any thing too hard for the LORD?', speaker: 'The LORD', options: [], context: 'The Lord challenged the doubt that Sarah could bear a son in old age.', ref: 'Genesis 18:14' },
  { quote: 'I am the God of thy father, the God of Abraham.', speaker: 'God', options: [], context: 'God identified Himself to Moses from the burning bush.', ref: 'Exodus 3:6' },
  { quote: 'I AM THAT I AM.', speaker: 'God', options: [], context: 'God revealed His name to Moses when Moses asked what to tell Israel.', ref: 'Exodus 3:14' },
  { quote: 'Thou shalt have no other gods before me.', speaker: 'God', options: [], context: 'God gave the first commandment at Mount Sinai.', ref: 'Exodus 20:3' },
  { quote: 'The LORD shall fight for you, and ye shall hold your peace.', speaker: 'Moses', options: [], context: 'Moses reassured Israel when Pharaoh’s army pursued them at the Red Sea.', ref: 'Exodus 14:14' },
  { quote: 'Choose you this day whom ye will serve.', speaker: 'Joshua', options: [], context: 'Joshua challenged Israel at Shechem to choose whom they would serve.', ref: 'Joshua 24:15' },
  { quote: 'As for me and my house, we will serve the LORD.', speaker: 'Joshua', options: [], context: 'Joshua declared his household’s commitment during his covenant challenge.', ref: 'Joshua 24:15' },
  { quote: 'The sword of the LORD, and of Gideon.', speaker: 'Gideon’s army', options: [], context: 'The three hundred shouted this battle cry as the Midianite camp was thrown into confusion.', ref: 'Judges 7:20' },
  { quote: 'Speak; for thy servant heareth.', speaker: 'Samuel', options: [], context: 'Samuel answered the Lord after Eli taught him how to respond.', ref: '1 Samuel 3:10' },
  { quote: 'Thou art the man.', speaker: 'Nathan', options: [], context: 'Nathan confronted David with a parable that exposed his sin.', ref: '2 Samuel 12:7' },
  { quote: 'The LORD forbid that I should give the inheritance of my fathers unto thee.', speaker: 'Naboth', options: [], context: 'Naboth refused Ahab’s request to sell his ancestral vineyard.', ref: '1 Kings 21:3' },
  { quote: 'How long halt ye between two opinions?', speaker: 'Elijah', options: [], context: 'Elijah challenged Israel before the contest on Mount Carmel.', ref: '1 Kings 18:21' },
  { quote: 'The LORD, he is the God; the LORD, he is the God.', speaker: 'The people of Israel', options: [], context: 'The people cried this after the Lord answered Elijah by fire.', ref: '1 Kings 18:39' },
  { quote: 'Let not the king impute any thing unto his servant.', speaker: 'Mephibosheth', options: [], context: 'Mephibosheth answered David after being questioned about Ziba.', ref: '2 Samuel 19:26-27' },
  { quote: 'Is it well with thee? is it well with thy husband?', speaker: 'Elisha', options: [], context: 'Elisha asked the Shunammite woman about her family when she came to him.', ref: '2 Kings 4:26' },
  { quote: 'Go, wash in Jordan seven times.', speaker: 'Elisha', options: [], context: 'Elisha sent Naaman to wash in the Jordan to be healed of leprosy.', ref: '2 Kings 5:10' },
  { quote: 'Are there not rivers of Damascus better than all the waters of Israel?', speaker: 'Naaman', options: [], context: 'Naaman reacted angrily to Elisha’s instruction to wash in the Jordan.', ref: '2 Kings 5:12' },
  { quote: 'Behold, I know that there is no God in all the earth, but in Israel.', speaker: 'Naaman', options: [], context: 'Naaman confessed the uniqueness of Israel’s God after being healed.', ref: '2 Kings 5:15' },
  { quote: 'If I perish, I perish.', speaker: 'Esther', options: [], context: 'Esther resolved to approach the king to plead for her people.', ref: 'Esther 4:16' },
  { quote: 'Who knoweth whether thou art come to the kingdom for such a time as this?', speaker: 'Mordecai', options: [], context: 'Mordecai urged Esther to recognize the purpose of her position as queen.', ref: 'Esther 4:14' },
  { quote: 'The God whom we serve is able to deliver us.', speaker: 'Shadrach, Meshach, and Abednego', options: [], context: 'The three men answered Nebuchadnezzar before being thrown into the furnace.', ref: 'Daniel 3:17' },
  { quote: 'I saw in the night visions, and, behold, one like the Son of man.', speaker: 'Daniel', options: [], context: 'Daniel described the vision of one like a Son of Man coming with the clouds.', ref: 'Daniel 7:13' },
  { quote: 'We will not serve thy gods, nor worship the golden image.', speaker: 'Shadrach, Meshach, and Abednego', options: [], context: 'They refused Nebuchadnezzar’s command to worship the golden image.', ref: 'Daniel 3:18' },
  { quote: 'My God hath sent his angel, and hath shut the lions’ mouths.', speaker: 'Daniel', options: [], context: 'Daniel explained how he survived the lions’ den to King Darius.', ref: 'Daniel 6:22' },
  { quote: 'I have heard of thee, that the spirit of the holy gods is in thee.', speaker: 'King Belshazzar', options: [], context: 'Belshazzar addressed Daniel before asking him to interpret the writing on the wall.', ref: 'Daniel 5:14' },
  { quote: 'The writing is MENE, MENE, TEKEL, UPHARSIN.', speaker: 'Daniel', options: [], context: 'Daniel read and interpreted the mysterious writing during Belshazzar’s feast.', ref: 'Daniel 5:25' },
  { quote: 'I will pour out my spirit upon all flesh.', speaker: 'The LORD', options: [], context: 'The Lord promised through Joel that His Spirit would be poured out broadly.', ref: 'Joel 2:28' },
  { quote: 'He hath showed thee, O man, what is good.', speaker: 'Micah', options: [], context: 'Micah summarized what the Lord requires: justice, mercy and humble walking with God.', ref: 'Micah 6:8' },
  { quote: 'The LORD is in his holy temple.', speaker: 'Habakkuk', options: [], context: 'Habakkuk called all the earth to silence before the Lord.', ref: 'Habakkuk 2:20' },
  { quote: 'I will rejoice in the LORD, I will joy in the God of my salvation.', speaker: 'Habakkuk', options: [], context: 'Habakkuk declared joy in God despite the loss of crops and herds.', ref: 'Habakkuk 3:18' },
  { quote: 'The LORD thy God in the midst of thee is mighty.', speaker: 'Zephaniah', options: [], context: 'Zephaniah described God’s presence and rejoicing over His people.', ref: 'Zephaniah 3:17' },
  { quote: 'Not by might, nor by power, but by my spirit.', speaker: 'The LORD', options: [], context: 'The Lord gave Zerubbabel a message through Zechariah about completing the temple.', ref: 'Zechariah 4:6' },
  { quote: 'Bring ye all the tithes into the storehouse.', speaker: 'The LORD', options: [], context: 'The Lord called Israel to return to Him and test His promise of provision.', ref: 'Malachi 3:10' },
  { quote: 'Behold, I send my messenger before thy face.', speaker: 'Jesus', options: [], context: 'Jesus cited Scripture while describing John the Baptist’s role.', ref: 'Matthew 11:10' },
  { quote: 'I am not able to bear all this people alone.', speaker: 'Moses', options: [], context: 'Moses told the Lord that the burden of leading Israel was too heavy for him alone.', ref: 'Numbers 11:14' },
  { quote: 'I have sinned: yet honour me now, I pray thee.', speaker: 'Saul', options: [], context: 'Saul admitted his sin to Samuel but still asked to be honoured before the elders.', ref: '1 Samuel 15:30' },
  { quote: 'Nay; but as captain of the host of the LORD am I now come.', speaker: 'The captain of the LORD’s host', options: [], context: 'The mysterious commander answered Joshua near Jericho.', ref: 'Joshua 5:14' },
  { quote: 'If thou be the Son of God, command that these stones be made bread.', speaker: 'Satan', options: ['Satan', 'Jesus', 'Peter', 'A Pharisee'], context: 'The tempter challenged Jesus to turn stones into bread after Jesus had fasted in the wilderness.', ref: 'Matthew 4:1-4' },
  { quote: 'If thou be the Son of God, cast thyself down.', speaker: 'Satan', options: ['Satan', 'Jesus', 'John the Baptist', 'A chief priest'], context: 'The devil quoted Scripture while tempting Jesus at the pinnacle of the temple.', ref: 'Matthew 4:5-7' },
  { quote: 'All these things will I give thee, if thou wilt fall down and worship me.', speaker: 'Satan', options: ['Satan', 'Herod Antipas', 'Pilate', 'A Roman centurion'], context: 'The devil offered Jesus the kingdoms of the world in exchange for worship.', ref: 'Matthew 4:8-10' },
  { quote: 'Who is the LORD, that I should obey his voice to let Israel go?', speaker: 'Pharaoh', options: ['Pharaoh', 'Nebuchadnezzar', 'Ahab', 'Abimelech'], context: 'Pharaoh rejected Moses and Aaron’s demand to release Israel from Egypt.', ref: 'Exodus 5:1-2' },
  { quote: 'Doest thou now govern the kingdom of Israel? arise, and eat bread, and let thine heart be merry.', speaker: 'Jezebel', options: ['Jezebel', 'Athaliah', 'Esther', 'Herodias'], context: 'Jezebel rebuked Ahab and promised to obtain Naboth’s vineyard for him.', ref: '1 Kings 21:5-7' },
  { quote: 'What is this thou hast done unto us?', speaker: 'Abimelech', options: ['Abimelech', 'Pharaoh', 'Laban', 'Ahab'], context: 'Abimelech questioned Isaac after discovering that Rebekah was his wife, not his sister.', ref: 'Genesis 26:8-10' },
  { quote: 'I know that the LORD hath given you the land.', speaker: 'Rahab', options: ['Rahab', 'Deborah', 'Ruth', 'Jael'], context: 'Rahab told the Israelite spies that the people of Jericho had heard what the LORD had done.', ref: 'Joshua 2:8-11' },
  { quote: 'Come, see a man, which told me all things that ever I did: is not this the Christ?', speaker: 'The Samaritan woman', options: ['The Samaritan woman', 'Martha', 'Mary Magdalene', 'Elizabeth'], context: 'The woman at the well invited the people of her city to meet Jesus.', ref: 'John 4:28-30' },
  { quote: 'Is not this great Babylon, that I have built for the house of the kingdom by the might of my power?', speaker: 'Nebuchadnezzar', options: ['Nebuchadnezzar', 'Belshazzar', 'Darius', 'Cyrus'], context: 'Nebuchadnezzar boasted about Babylon from the roof of his royal palace before judgment fell upon him.', ref: 'Daniel 4:28-33' },
  { quote: 'As I have seen, they that plow iniquity, and sow wickedness, reap the same.', speaker: 'Eliphaz', options: ['Eliphaz', 'Bildad', 'Zophar', 'Elihu'], context: 'Eliphaz offered this observation during his first speech to Job.', ref: 'Job 4:7-9' },
  { quote: 'How long wilt thou speak these things? and how long shall the words of thy mouth be like a strong wind?', speaker: 'Bildad', options: ['Bildad', 'Eliphaz', 'Zophar', 'Elihu'], context: 'Bildad challenged Job at the beginning of his first response.', ref: 'Job 8:1-2' },
  { quote: 'Should not the multitude of words be answered? and should a man full of talk be justified?', speaker: 'Zophar', options: ['Zophar', 'Eliphaz', 'Bildad', 'Elihu'], context: 'Zophar began his first speech by rebuking Job’s many words.', ref: 'Job 11:1-2' },
  { quote: 'I am young, and ye are very old; wherefore I was afraid, and durst not shew you mine opinion.', speaker: 'Elihu', options: ['Elihu', 'Eliphaz', 'Bildad', 'Zophar'], context: 'Elihu explained why he had waited before speaking in the debate about Job’s suffering.', ref: 'Job 32:4-7' },
  { quote: 'Let me die the death of the righteous, and let my last end be like his!', speaker: 'Balaam', options: ['Balaam', 'Balak', 'Moses', 'Aaron'], context: 'Balaam spoke this blessing while Balak was seeking a curse against Israel.', ref: 'Numbers 23:7-10' },
  { quote: 'What is truth?', speaker: 'Pontius Pilate', options: ['Pontius Pilate', 'Herod Antipas', 'Felix', 'Festus'], context: 'Pilate asked Jesus this during the hearing before the crucifixion.', ref: 'John 18:37-38' },
];


const QUOTE_SPEAKER_GROUPS: Record<string, string[]> = {
  'God': ['The LORD', 'Jesus', 'Gabriel', 'Moses', 'Isaiah'],
  'The LORD': ['God', 'Jesus', 'Moses', 'Isaiah', 'Jeremiah'],
  'The captain of the LORD’s host': ['Gabriel', 'God', 'Joshua', 'Moses', 'Elisha'],
  'The Preacher': ['Solomon', 'Job', 'David', 'Asaph', 'Agur'],
  'The psalmist': ['David', 'Asaph', 'Solomon', 'Moses', 'The sons of Korah'],
  'David': ['Saul', 'Jonathan', 'Solomon', 'Nathan', 'Asaph'],
  'Solomon': ['David', 'Rehoboam', 'Hezekiah', 'Job', 'Agur'],
  'Moses': ['Aaron', 'Joshua', 'Caleb', 'Pharaoh', 'Balaam'],
  'Joshua': ['Moses', 'Caleb', 'Gideon', 'Samuel', 'David'],
  'Joseph': ['Jacob', 'Judah', 'Reuben', 'Benjamin', 'Moses'],
  'Jacob': ['Isaac', 'Abraham', 'Esau', 'Joseph', 'Laban'],
  'Job': ['Eliphaz', 'Bildad', 'Zophar', 'Elihu', 'David'],
  'Balaam': ['Balak', 'Moses', 'Aaron', 'Joshua', 'Phinehas'],
  'Samuel': ['Eli', 'Saul', 'David', 'Nathan', 'Elijah'],
  'Isaiah': ['Jeremiah', 'Ezekiel', 'Micah', 'Amos', 'Daniel'],
  'Jeremiah': ['Isaiah', 'Ezekiel', 'Daniel', 'Baruch', 'Habakkuk'],
  'Ezekiel': ['Isaiah', 'Jeremiah', 'Daniel', 'Hosea', 'Zechariah'],
  'Daniel': ['Ezekiel', 'Jeremiah', 'Isaiah', 'Hananiah', 'Ezra'],
  'Habakkuk': ['Micah', 'Zephaniah', 'Nahum', 'Haggai', 'Malachi'],
  'Micah': ['Amos', 'Isaiah', 'Hosea', 'Habakkuk', 'Zephaniah'],
  'Amos': ['Hosea', 'Micah', 'Elijah', 'Elisha', 'Jonah'],
  'Jonah': ['Nahum', 'Micah', 'Amos', 'Elijah', 'Elisha'],
  'Elijah': ['Elisha', 'Micaiah', 'Nathan', 'Samuel', 'Amos'],
  'Elisha': ['Elijah', 'Gehazi', 'Micaiah', 'Samuel', 'Nathan'],
  'Naaman': ['Gehazi', 'Elisha', 'Ben-hadad', 'Hazael', 'Ahab'],
  'Naboth': ['Ahab', 'Elijah', 'Jezebel', 'Obadiah', 'Micaiah'],
  'Nathan': ['David', 'Samuel', 'Gad', 'Solomon', 'Joab'],
  'Mephibosheth': ['Ziba', 'David', 'Jonathan', 'Joab', 'Absalom'],
  'Esther': ['Vashti', 'Mordecai', 'Ruth', 'Deborah', 'Abigail'],
  'Mordecai': ['Esther', 'Haman', 'Ahasuerus', 'Nehemiah', 'Ezra'],
  'Shadrach, Meshach, and Abednego': ['Daniel', 'Nebuchadnezzar', 'Belshazzar', 'Darius', 'Cyrus'],
  'King Belshazzar': ['Nebuchadnezzar', 'Darius', 'Cyrus', 'Pharaoh', 'Herod'],
  'The people of Israel': ['Joshua', 'Moses', 'Gideon', 'Samuel', 'David'],
  'Mary, the mother of Jesus': ['Elizabeth', 'Martha', 'Mary Magdalene', 'Anna', 'Ruth'],
  'Mary': ['Martha', 'Elizabeth', 'Anna', 'Mary Magdalene', 'Joanna'],
  'Elizabeth': ['Mary, the mother of Jesus', 'Anna', 'Martha', 'Ruth', 'Esther'],
  'Martha': ['Mary', 'Lazarus', 'Peter', 'Thomas', 'Mary Magdalene'],
  'Simeon': ['Zechariah', 'Joseph', 'Anna', 'John the Baptist', 'Gabriel'],
  'Gabriel': ['Michael', 'Jesus', 'Zechariah', 'Simeon', 'John the Baptist'],
  'Jesus': ['Peter', 'John the Baptist', 'Paul', 'Thomas', 'Philip'],
  'Peter': ['John', 'James', 'Andrew', 'Thomas', 'Philip'],
  'Simon Peter': ['John', 'James', 'Andrew', 'Thomas', 'Philip'],
  'Thomas': ['Peter', 'Philip', 'Andrew', 'Nathanael', 'John'],
  'Philip': ['Andrew', 'Nathanael', 'Thomas', 'Peter', 'John'],
  'Nathanael': ['Philip', 'Andrew', 'Thomas', 'Peter', 'John'],
  'Andrew': ['Peter', 'Philip', 'John', 'James', 'Thomas'],
  'Saul of Tarsus': ['Peter', 'Stephen', 'Barnabas', 'Ananias', 'Silas'],
  'Paul': ['Peter', 'James', 'John', 'Barnabas', 'Silas'],
  'Stephen': ['Philip', 'Paul', 'Peter', 'James', 'Barnabas'],
  'The Philippian jailer': ['Cornelius', 'Ethiopian eunuch', 'Sergius Paulus', 'Felix', 'Festus'],
  'The Ethiopian eunuch': ['Cornelius', 'Philippian jailer', 'Sergius Paulus', 'Nicodemus', 'Simon the sorcerer'],
  'King Agrippa': ['Felix', 'Festus', 'Herod Antipas', 'Caesar', 'Pilate'],
  'The repentant thief': ['Barabbas', 'Judas Iscariot', 'Simon of Cyrene', 'the Roman centurion', 'Joseph of Arimathea'],
  'The disciples': ['Peter', 'Thomas', 'Philip', 'Andrew', 'James'],
  'Peter and the apostles': ['Paul and Silas', 'Stephen', 'Barnabas', 'Philip', 'James'],
  'Paul and Silas': ['Peter and John', 'Barnabas and Paul', 'Timothy and Silas', 'Philip and the eunuch', 'Peter and the apostles'],
  'Judas Iscariot': ['Peter', 'Thomas', 'Judas (son of James)', 'Matthew', 'John'],
};
const QUOTE_SPEAKERS = [...new Set(QUOTES_POOL.map((item) => item.speaker))];
const normalizeQuote = (value: string) => value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]/g, '');
const UNIQUE_QUOTES_POOL = QUOTES_POOL.filter((item, index, all) =>
  all.findIndex((other) => normalizeQuote(other.quote) === normalizeQuote(item.quote)) === index
);

type WhoSaidItAudience = { quote: string; speaker: string; audience: string; ref: string; explanation: string; options: string[] };
const WHO_SAID_IT_AUDIENCES: WhoSaidItAudience[] = [
{quote:'Am I my brother’s keeper?',speaker:'Cain',audience:'The LORD',ref:'Genesis 4:9',explanation:'Cain answered the LORD after being asked where Abel was.',options:['The LORD','Abel','Adam','Eve']},
{quote:'If I perish, I perish.',speaker:'Esther',audience:'Mordecai',ref:'Esther 4:16',explanation:'Esther sent this resolve to Mordecai before approaching the king unsummoned.',options:['Mordecai','Ahasuerus','Haman','The Jewish elders']},
{quote:'Thou art the man.',speaker:'Nathan',audience:'David',ref:'2 Samuel 12:7',explanation:'Nathan confronted David after telling him the parable of the ewe lamb.',options:['David','Saul','Joab','Solomon']},
{quote:'Speak, Lord; for thy servant heareth.',speaker:'Samuel',audience:'The LORD',ref:'1 Samuel 3:9-10',explanation:'Samuel answered the LORD after Eli instructed him how to respond to the call.',options:['The LORD','Eli','Hophni','Phinehas']},
{quote:'What is truth?',speaker:'Pontius Pilate',audience:'Jesus',ref:'John 18:37-38',explanation:'Pilate asked Jesus this during the interrogation before the crucifixion.',options:['Jesus','The chief priests','The crowd','Herod Antipas']},
{quote:'My Lord and my God!',speaker:'Thomas',audience:'The risen Jesus',ref:'John 20:26-29',explanation:'Thomas confessed this when Jesus appeared to the disciples.',options:['The risen Jesus','Peter','The other disciples','Mary Magdalene']},
{quote:'How can a man be born when he is old?',speaker:'Nicodemus',audience:'Jesus',ref:'John 3:1-4',explanation:'Nicodemus asked Jesus how a person could be born again.',options:['Jesus','John the Baptist','The Pharisees','The disciples']},
{quote:'Who is my neighbour?',speaker:'A lawyer',audience:'Jesus',ref:'Luke 10:25-29',explanation:'The lawyer asked Jesus this after discussing the commandments.',options:['Jesus','The disciples','The Samaritan','Martha']},
{quote:'What must I do to be saved?',speaker:'The Philippian jailer',audience:'Paul and Silas',ref:'Acts 16:25-31',explanation:'The jailer asked Paul and Silas after the earthquake opened the prison doors.',options:['Paul and Silas','The magistrates','The other prisoners','His family']},
{quote:'Who art thou, Lord?',speaker:'Saul of Tarsus',audience:'The voice of Jesus',ref:'Acts 9:3-6',explanation:'Saul asked this after being confronted by the heavenly light on the road to Damascus.',options:['The voice of Jesus','Ananias','Barnabas','Stephen']},
{quote:'Where is the lamb for a burnt offering?',speaker:'Isaac',audience:'Abraham',ref:'Genesis 22:6-8',explanation:'Isaac asked his father about the missing sacrificial lamb on the journey up the mountain.',options:['Abraham','The two servants','The angel of the LORD','Sarah']},
{quote:'Who made thee a prince and a judge over us?',speaker:'A Hebrew man',audience:'Moses',ref:'Exodus 2:13-14',explanation:'A Hebrew man challenged Moses after Moses questioned him about striking another Hebrew.',options:['Moses','Aaron','Pharaoh','Jethro']},
{quote:'Who is the LORD, that I should obey his voice?',speaker:'Pharaoh',audience:'Moses and Aaron',ref:'Exodus 5:1-2',explanation:'Pharaoh rejected Moses and Aaron’s request to let Israel go.',options:['Moses and Aaron','The Hebrew foremen','The Egyptian taskmasters','The elders of Israel']},
{quote:'How long halt ye between two opinions?',speaker:'Elijah',audience:'The people of Israel',ref:'1 Kings 18:20-21',explanation:'Elijah challenged Israel on Mount Carmel to stop wavering between the LORD and Baal.',options:['The people of Israel','The prophets of Baal','Ahab','Obadiah']},
{quote:'Is there not a cause?',speaker:'David',audience:'Eliab',ref:'1 Samuel 17:28-29',explanation:'David answered Eliab after Eliab accused him of pride and curiosity about the battle.',options:['Eliab','Saul','Goliath','Jonathan']},
{quote:'How long wilt thou be drunken?',speaker:'Eli',audience:'Hannah',ref:'1 Samuel 1:12-15',explanation:'Eli mistook Hannah’s silent prayer for drunkenness and questioned her.',options:['Hannah','Elkanah','Peninnah','Samuel']},
{quote:'Is thy servant a dog, that he should do this great thing?',speaker:'Hazael',audience:'Elisha',ref:'2 Kings 8:11-13',explanation:'Hazael asked Elisha this after hearing the prophet’s prediction about him.',options:['Elisha','Ben-hadad','Jehu','Naaman']},
{quote:'What have I to do with thee, thou man of God?',speaker:'The widow of Zarephath',audience:'Elijah',ref:'1 Kings 17:17-18',explanation:'The widow spoke to Elijah after her son became ill and stopped breathing.',options:['Elijah','Her son','Ahab','Obadiah']},
{quote:'Lord, remember me when thou comest into thy kingdom.',speaker:'The repentant thief',audience:'Jesus',ref:'Luke 23:39-43',explanation:'One of the criminals crucified beside Jesus asked Him to remember him.',options:['Jesus','The other criminal','The soldiers','Pilate']},
{quote:'Art thou he that should come, or do we look for another?',speaker:'John the Baptist’s disciples',audience:'Jesus',ref:'Matthew 11:2-6',explanation:'John sent his disciples to ask Jesus this while John was in prison.',options:['Jesus','John the Baptist','Herod','The Pharisees']},
{quote:'What wilt thou that I should do unto thee?',speaker:'Jesus',audience:'Blind Bartimaeus',ref:'Mark 10:46-52',explanation:'Jesus asked Bartimaeus what he wanted after calling him near.',options:['Blind Bartimaeus','James and John','The crowd','The disciples']},
{quote:'What is that in thine hand?',speaker:'The LORD',audience:'Moses',ref:'Exodus 4:1-4',explanation:'The LORD asked Moses this during the signs given at the burning bush.',options:['Moses','Aaron','Joshua','Jethro']},
{quote:'What shall I do then with Jesus which is called Christ?',speaker:'Pontius Pilate',audience:'The crowd',ref:'Matthew 27:21-22',explanation:'Pilate asked the assembled crowd what should be done with Jesus.',options:['The crowd','Jesus','The chief priests alone','Barabbas']},
{quote:'Shall I smite them? shall I smite them, my father?',speaker:'The king of Israel',audience:'Elisha',ref:'2 Kings 6:21-22',explanation:'The king asked Elisha whether he should strike the Aramean captives after they were brought to Samaria.',options:['Elisha','Naaman','Gehazi','The captain of the host']},
{quote:'Wherefore didst thou flee away secretly?',speaker:'Laban',audience:'Jacob',ref:'Genesis 31:25-28',explanation:'Laban confronted Jacob after pursuing him and asked why he had left secretly.',options:['Jacob','Rachel','Leah','The servants']},
{quote:'Why persecutest thou me?',speaker:'Jesus',audience:'Saul of Tarsus',ref:'Acts 9:4-5',explanation:'The risen Jesus addressed Saul on the road to Damascus.',options:['Saul of Tarsus','Ananias','Stephen','Barnabas']},
{quote:'What doth hinder me to be baptized?',speaker:'The Ethiopian eunuch',audience:'Philip',ref:'Acts 8:35-38',explanation:'The eunuch asked Philip this after Philip explained the Scripture he was reading.',options:['Philip','Peter','Ananias','The angel']},
{quote:'Why callest thou me good?',speaker:'Jesus',audience:'The rich young ruler',ref:'Mark 10:17-18',explanation:'Jesus replied to the man who asked what he must do to inherit eternal life.',options:['The rich young ruler','Peter','The scribes','The disciples']},
{quote:'Lord, if thou wilt, thou canst make me clean.',speaker:'A leper',audience:'Jesus',ref:'Matthew 8:1-3',explanation:'The leper approached Jesus and expressed confidence in His power to cleanse him.',options:['Jesus','The disciples','The priests','The crowd']},
{quote:'How shall this be, seeing I know not a man?',speaker:'Mary',audience:'Gabriel',ref:'Luke 1:26-38',explanation:'Mary asked Gabriel how the announcement of her child would take place.',options:['Gabriel','Elizabeth','Joseph','Zechariah']},
{quote:'Lord, dost thou wash my feet?',speaker:'Peter',audience:'Jesus',ref:'John 13:5-8',explanation:'Peter questioned Jesus when He began washing the disciples’ feet.',options:['Jesus','John','The other disciples','Judas']},
{quote:'Whence knowest thou me?',speaker:'Nathanael',audience:'Jesus',ref:'John 1:47-49',explanation:'Nathanael asked Jesus how He knew him before they had met.',options:['Jesus','Philip','Andrew','John the Baptist']},
{quote:'Lord, if thou hadst been here, my brother had not died.',speaker:'Martha',audience:'Jesus',ref:'John 11:20-22',explanation:'Martha said this when she met Jesus after Lazarus had died.',options:['Jesus','Mary','Lazarus','The disciples']},
{quote:'What shall we do?',speaker:'The crowds',audience:'John the Baptist',ref:'Luke 3:7-10',explanation:'The crowds asked John what they should do in response to his call to repentance.',options:['John the Baptist','Jesus','The Pharisees','The tax collectors']},
{quote:'I am not worthy that thou shouldest come under my roof.',speaker:'The Roman centurion',audience:'Jesus',ref:'Matthew 8:5-13',explanation:'The centurion addressed Jesus in Capernaum while asking Him to heal his servant.',options:['Jesus','Peter','The elders of the Jews','The servant']},
{quote:'What shall I do that I may inherit eternal life?',speaker:'The rich young ruler',audience:'Jesus',ref:'Mark 10:17-22',explanation:'The man ran to Jesus and asked what he must do to inherit eternal life.',options:['Jesus','Peter','The scribes','The disciples']}
];
type WhoSaidItDialogue = { prompt: string; answer: string; ref: string; explanation: string; options: string[] };
const WHO_SAID_IT_DIALOGUES: WhoSaidItDialogue[] = [
{prompt:'Jesus asked, “Whom say ye that I am?” Who answered, “Thou art the Christ, the Son of the living God”?',answer:'Simon Peter',ref:'Matthew 16:13-17',explanation:'Peter gave this confession at Caesarea Philippi.',options:['Simon Peter','Andrew','Thomas','Philip']},
{prompt:'The angel told Mary she would bear a son. Who replied, “How shall this be, seeing I know not a man”?',answer:'Mary',ref:'Luke 1:26-34',explanation:'Mary asked Gabriel how the announcement would take place.',options:['Mary','Elizabeth','Anna','Martha']},
{prompt:'Jesus asked the Samaritan woman for a drink. Who replied, “How is it that thou, being a Jew, askest drink of me”?',answer:'The Samaritan woman',ref:'John 4:7-9',explanation:'The woman at the well questioned why a Jewish man would ask a Samaritan woman for water.',options:['The Samaritan woman','Martha','Mary Magdalene','The disciples']},
{prompt:'Paul and Silas prayed in prison. After the earthquake, who asked, “Sirs, what must I do to be saved”?',answer:'The Philippian jailer',ref:'Acts 16:25-31',explanation:'The jailer asked Paul and Silas after finding the prison doors open.',options:['The Philippian jailer','The magistrate','A Jerusalem guard','The jailer’s servant']},
{prompt:'The LORD asked Adam where he was. Who answered that he was afraid because he was naked?',answer:'Adam',ref:'Genesis 3:8-10',explanation:'Adam answered after he and Eve heard the LORD God in the garden.',options:['Adam','Eve','Cain','Abel']},
{prompt:'The LORD asked Cain where Abel was. Who replied, “I know not”?',answer:'Cain',ref:'Genesis 4:8-9',explanation:'Cain denied knowing Abel’s whereabouts after murdering his brother.',options:['Cain','Adam','Seth','Lamech']},
{prompt:'The LORD asked Hagar where she had come from. Who answered that she was fleeing from Sarai?',answer:'Hagar',ref:'Genesis 16:7-8',explanation:'Hagar answered the angel of the LORD in the wilderness.',options:['Hagar','Sarai','Rebekah','Leah']},
{prompt:'Elijah challenged the prophets of Baal. Who cried, “The LORD, he is the God”?',answer:'The people',ref:'1 Kings 18:36-39',explanation:'The people responded after fire from the LORD consumed Elijah’s offering.',options:['The people','The prophets of Baal','Ahab','Obadiah']},
{prompt:'Elisha told Naaman to wash in the Jordan. Who questioned why he could not wash in Damascus?',answer:'Naaman',ref:'2 Kings 5:9-12',explanation:'Naaman reacted angrily because he expected a more dramatic healing.',options:['Naaman','Gehazi','Ben-hadad','The king of Israel']},
{prompt:'Job’s first friend to speak after his lament was who?',answer:'Eliphaz the Temanite',ref:'Job 4:1-2',explanation:'Eliphaz began the first cycle of speeches after Job’s lament.',options:['Eliphaz the Temanite','Bildad the Shuhite','Zophar the Naamathite','Elihu']},
{prompt:'Jesus asked the disciples who people said He was. Who reported the different opinions?',answer:'The disciples',ref:'Matthew 16:13-14',explanation:'The disciples reported that some people thought Jesus was John the Baptist, Elijah, Jeremiah, or a prophet.',options:['The disciples','The Pharisees','The crowd','The chief priests']},
{prompt:'The LORD asked Isaiah whom He should send. Who answered, “Here am I; send me”?',answer:'Isaiah',ref:'Isaiah 6:8',explanation:'Isaiah volunteered after hearing the LORD’s question in the vision.',options:['Isaiah','Jeremiah','Ezekiel','Micah']},
{prompt:'Jesus asked Peter three times whether he loved Him. Who answered that the Lord knew he loved Him?',answer:'Peter',ref:'John 21:15-17',explanation:'Peter answered Jesus during the conversation by the Sea of Tiberias.',options:['Peter','John','Thomas','Andrew']},
{prompt:'The angel announced that Elizabeth would bear a son. Who asked, “Whereby shall I know this”?',answer:'Zechariah',ref:'Luke 1:11-18',explanation:'Zechariah questioned Gabriel because he and Elizabeth were advanced in years.',options:['Zechariah','Joseph','Simeon','Herod']},
{prompt:'Jesus asked the man at the pool whether he wanted to be made whole. Who said he had no one to put him into the pool?',answer:'The man at Bethesda',ref:'John 5:1-7',explanation:'The man explained that someone else entered the water before he could reach it.',options:['The man at Bethesda','Bartimaeus','The man born blind','The paralytic at Capernaum']},
{prompt:'Jesus asked the disciples whether they also wanted to leave. Who answered, “Lord, to whom shall we go”?',answer:'Simon Peter',ref:'John 6:66-69',explanation:'Peter answered after many followers turned back.',options:['Simon Peter','Thomas','Philip','Andrew']},
{prompt:'The LORD asked Job where he was when the foundations of the earth were laid. Who had been demanding an answer?',answer:'Job',ref:'Job 38:1-4',explanation:'God answered Job out of the whirlwind after the debates with his friends.',options:['Job','Eliphaz','Bildad','Elihu']},
{prompt:'Jesus asked the blind man at Jericho what he wanted. Who answered that he wanted to receive his sight?',answer:'Bartimaeus',ref:'Mark 10:46-52',explanation:'Bartimaeus made his request when Jesus called him near.',options:['Bartimaeus','The man at Bethesda','The Samaritan leper','The man born blind']},
{prompt:'The angel told Manoah’s wife she would bear a son. Who asked how the child should be raised?',answer:'Manoah',ref:'Judges 13:2-12',explanation:'Manoah prayed for the messenger to return and asked how the child should be raised.',options:['Manoah','Samson','The high priest','The angel']},
{prompt:'Jesus asked the disciples who touched Him. Who answered that the multitude was pressing around Him?',answer:'Peter',ref:'Luke 8:43-45',explanation:'Peter responded when Jesus asked who had touched Him in the crowd.',options:['Peter','John','James','Andrew']},
{prompt:'The LORD asked Elijah what he was doing at Horeb. Who answered that Israel had forsaken the covenant?',answer:'Elijah',ref:'1 Kings 19:9-10',explanation:'Elijah answered from the cave at Horeb, explaining his zeal and fear.',options:['Elijah','Elisha','Obadiah','Micaiah']},
{prompt:'Nathan told David a story about a poor man’s lamb. Who declared that the man deserved to die?',answer:'David',ref:'2 Samuel 12:1-6',explanation:'David pronounced judgment in response to Nathan’s parable before Nathan confronted him.',options:['David','Nathan','Joab','Solomon']},
{prompt:'The LORD asked Moses what was in his hand. Who answered, “A rod”?',answer:'Moses',ref:'Exodus 4:1-4',explanation:'Moses answered the LORD during the signs given at the burning bush.',options:['Moses','Aaron','Joshua','Jethro']},
{prompt:'The Ethiopian official was reading Isaiah. Who asked him whether he understood what he was reading?',answer:'Philip',ref:'Acts 8:26-31',explanation:'Philip approached the chariot after being directed by the angel and the Spirit.',options:['Philip','Peter','Stephen','Barnabas']},
{prompt:'After the earthquake in Philippi, who brought Paul and Silas out and asked about salvation?',answer:'The Philippian jailer',ref:'Acts 16:27-30',explanation:'The jailer called for a light, fell before Paul and Silas, and asked how to be saved.',options:['The Philippian jailer','The magistrate','A Jerusalem prison keeper','The jailer’s wife']},
{prompt:'The angel of the LORD greeted Gideon as a mighty man of valour. Who replied by asking why these troubles had come upon Israel?',answer:'Gideon',ref:'Judges 6:11-13',explanation:'Gideon questioned the angel’s greeting because Midian was oppressing Israel.',options:['Gideon','Barak','Jephthah','Samson']},
{prompt:'The LORD asked Jonah whether he did well to be angry. Who answered that he did?',answer:'Jonah',ref:'Jonah 4:8-9',explanation:'Jonah defended his anger after the plant withered.',options:['Jonah','Nahum','Micah','Obadiah']},
{prompt:'Jesus asked the man born blind what he believed about the Son of God. Who asked who He was?',answer:'The man born blind',ref:'John 9:35-38',explanation:'The healed man asked Jesus to identify the Son of God so he could believe.',options:['The man born blind','Nicodemus','Bartimaeus','The man at Bethesda']},
{prompt:'The LORD asked Moses who made man’s mouth. Who had just explained that he was slow of speech?',answer:'Moses',ref:'Exodus 4:10-12',explanation:'Moses had protested that he was not eloquent, and the LORD answered his objection.',options:['Moses','Aaron','Joshua','Caleb']},
{prompt:'The LORD asked the prophet what he saw. Who answered that he saw an almond branch?',answer:'Jeremiah',ref:'Jeremiah 1:11-12',explanation:'Jeremiah answered the LORD during his call as a prophet.',options:['Jeremiah','Isaiah','Ezekiel','Amos']},
{prompt:'Eli asked Hannah how long she would remain drunk. Who explained that she was pouring out her soul before the LORD?',answer:'Hannah',ref:'1 Samuel 1:12-16',explanation:'Hannah explained that she had not been drinking but was praying in deep distress.',options:['Hannah','Peninnah','Ruth','Abigail']},
{prompt:'Joseph asked his brothers whether their father was still alive. Who answered, “Thy servant our father is in good health”?',answer:'Judah',ref:'Genesis 43:26-28',explanation:'Judah answered Joseph’s inquiry about their father Jacob.',options:['Judah','Reuben','Benjamin','Simeon']},
{prompt:'Jesus asked the disciples who they said He was. Who answered, “Thou art the Christ”?',answer:'Peter',ref:'Mark 8:27-30',explanation:'Peter confessed Jesus as the Christ near Caesarea Philippi.',options:['Peter','Andrew','James','John']},
{prompt:'The angel told Cornelius to send for Peter. Who asked the messengers why they had come?',answer:'Peter',ref:'Acts 10:17-21',explanation:'Peter went down to meet the men and asked the purpose of their visit.',options:['Peter','Cornelius','Philip','John']},
{prompt:'Paul asked the Galatians who had bewitched them. Which church was he addressing?',answer:'The churches of Galatia',ref:'Galatians 3:1',explanation:'Paul addressed the believers in the churches of Galatia.',options:['The churches of Galatia','The church at Corinth','The church at Ephesus','The church at Philippi']},
{prompt:'Jesus asked the man at Bethesda whether he wanted to be made whole. Who replied that he had no one to help him into the pool?',answer:'The man at Bethesda',ref:'John 5:1-7',explanation:'The man explained that others entered the water before he could reach it.',options:['The man at Bethesda','Bartimaeus','The man born blind','The paralytic at Capernaum']}
];
type WhoSaidItNotScripture = { saying: string; ref: string; status: 'not-scripture' | 'paraphrase' | 'scripture'; explanation: string };
const WHO_SAID_IT_NOT_SCRIPTURE: WhoSaidItNotScripture[] = [
{ saying:'God helps those who help themselves.',ref:'Proverbs 3:5-6',status:'not-scripture',explanation:'This sentence is not a Bible verse. Proverbs 3:5-6 teaches trust in the LORD rather than reliance on one’s own understanding.' },
{ saying:'Cleanliness is next to godliness.',ref:'1 Peter 1:15-16',status:'not-scripture',explanation:'This familiar saying is not Scripture. First Peter calls believers to holiness; it does not use this phrase.' },
{ saying:'Money is the root of all evil.',ref:'1 Timothy 6:10',status:'paraphrase',explanation:'This is an inaccurate shortening. The verse says the love of money is a root of all kinds of evil.' },
{ saying:'This too shall pass.',ref:'2 Corinthians 4:17-18',status:'not-scripture',explanation:'This exact saying is not in the Bible. Scripture teaches that present affliction is temporary in comparison with eternal glory.' },
{ saying:'The Lord works in mysterious ways.',ref:'Romans 11:33',status:'not-scripture',explanation:'This wording is not a Bible quotation. Romans 11:33 praises the depth of God’s wisdom and knowledge.' },
{ saying:'God will never give you more than you can handle.',ref:'1 Corinthians 10:13',status:'paraphrase',explanation:'This popular wording is not a direct verse. First Corinthians 10:13 concerns temptation and God providing a way of escape.' },
{ saying:'Spare the rod and spoil the child.',ref:'Proverbs 13:24',status:'paraphrase',explanation:'This is a traditional paraphrase, not the exact wording of a verse. Proverbs 13:24 speaks about discipline.' },
{ saying:'Hate the sin, love the sinner.',ref:'John 8:1-11',status:'not-scripture',explanation:'This phrase is not stated in Scripture. It is often used as a summary of a Christian approach to sin and mercy.' },
{ saying:'When one door closes, another opens.',ref:'Revelation 3:7-8',status:'not-scripture',explanation:'This is not a Bible quotation. Revelation 3:7-8 describes the open door set before the church in Philadelphia.' },
{ saying:'To thine own self be true.',ref:'Psalm 139:23-24',status:'not-scripture',explanation:'This line comes from Shakespeare, not Scripture. Psalm 139 asks God to search and lead the psalmist.' },
{ saying:'Everything happens for a reason.',ref:'Romans 8:28',status:'not-scripture',explanation:'This exact sentence is not a verse. Romans 8:28 teaches that God works all things together for good for those who love Him.' },
{ saying:'The eye is the window to the soul.',ref:'Matthew 6:22-23',status:'not-scripture',explanation:'This exact saying is not Scripture. Matthew 6:22-23 uses the eye as a lamp of the body.' },
{ saying:'A fool and his money are soon parted.',ref:'Proverbs 21:20',status:'not-scripture',explanation:'This is a popular saying, not a Bible verse. Proverbs 21:20 says the wise store up choice food and oil.' },
{ saying:'The ends justify the means.',ref:'Romans 3:8',status:'not-scripture',explanation:'This is not Scripture. Romans 3:8 rejects doing evil so that good may result.' },
{ saying:'God said it, I believe it, that settles it.',ref:'2 Timothy 3:16-17',status:'not-scripture',explanation:'This slogan is not a verse. Second Timothy teaches that all Scripture is God-breathed and useful for equipping believers.' },
{ saying:'The family that prays together stays together.',ref:'Joshua 24:15',status:'not-scripture',explanation:'This is a modern slogan, not a Bible quotation. Joshua 24:15 records Joshua’s declaration that his household would serve the LORD.' },
{ saying:'Pride comes before a fall.',ref:'Proverbs 16:18',status:'paraphrase',explanation:'This is a common shortened form of Proverbs 16:18, which says pride goes before destruction and a haughty spirit before a fall.' },
{ saying:'God is in control.',ref:'Psalm 103:19',status:'paraphrase',explanation:'This is a theological summary, not a direct quotation in this wording. Psalm 103:19 says the LORD rules over all.' },
{ saying:'I can do all things through Christ who strengthens me.',ref:'Philippians 4:13',status:'scripture',explanation:'This is a biblical quotation in a familiar translation; Paul wrote it while describing contentment in every circumstance.' },
{ saying:'A leopard cannot change its spots.',ref:'Jeremiah 13:23',status:'scripture',explanation:'Jeremiah 13:23 uses this image in a question about whether an Ethiopian can change his skin or a leopard its spots.' },
{ saying:'There is nothing new under the sun.',ref:'Ecclesiastes 1:9',status:'scripture',explanation:'This statement appears in Ecclesiastes 1:9.'},
{ saying:'The love of money is the root of all evil.',ref:'1 Timothy 6:10',status:'paraphrase',explanation:'This is a close but incomplete rendering. The verse says the love of money is a root of all kinds of evil.'},
{ saying:'The truth will set you free.',ref:'John 8:32',status:'scripture',explanation:'This wording appears in Scripture as part of Jesus’ teaching.'},
{ saying:'Pride goeth before destruction, and an haughty spirit before a fall.',ref:'Proverbs 16:18',status:'scripture',explanation:'This is the wording of Proverbs 16:18 in the King James Version.'},
{ saying:'God will not put on you more than you can bear.',ref:'1 Corinthians 10:13',status:'paraphrase',explanation:'This popular expression is often confused with 1 Corinthians 10:13, which specifically addresses temptation.'},
{ saying:'The Lord is my shepherd; I shall not want.',ref:'Psalm 23:1',status:'scripture',explanation:'This is a direct biblical quotation from Psalm 23:1.'},
{ saying:'Be in the world but not of the world.',ref:'John 17:14-16',status:'paraphrase',explanation:'This is a common summary of Jesus’ prayer, not the exact wording of John 17.'},
{ saying:'God does not call the qualified; He qualifies the called.',ref:'Exodus 4:10-12',status:'not-scripture',explanation:'This popular motivational saying is not a Bible verse. Exodus records God answering Moses’ concern about his speech.'},
{ saying:'The battle is not yours, but God’s.',ref:'2 Chronicles 20:15',status:'scripture',explanation:'This statement is based on the words spoken by Jahaziel to Judah in 2 Chronicles 20:15.'},
{ saying:'Faith can move mountains.',ref:'Matthew 17:20',status:'paraphrase',explanation:'This is a shortened paraphrase of Jesus’ teaching about faith like a grain of mustard seed.'},
{ saying:'God works all things together for good.',ref:'Romans 8:28',status:'paraphrase',explanation:'This is a shortened rendering of Romans 8:28, not its full wording.'},
{ saying:'The spirit is willing, but the flesh is weak.',ref:'Matthew 26:41',status:'scripture',explanation:'Jesus said this to the disciples in Gethsemane.'},
{ saying:'As iron sharpens iron, so one person sharpens another.',ref:'Proverbs 27:17',status:'scripture',explanation:'This is a direct rendering of Proverbs 27:17.'},
{ saying:'The wages of sin is death.',ref:'Romans 6:23',status:'scripture',explanation:'This is a direct biblical statement from Romans 6:23.'},
{ saying:'The meek shall inherit the earth.',ref:'Matthew 5:5',status:'scripture',explanation:'Jesus taught this in the Beatitudes.'},
{ saying:'Pride goeth before a fall.',ref:'Proverbs 16:18',status:'paraphrase',explanation:'This short form paraphrases Proverbs 16:18, which says pride goes before destruction and a haughty spirit before a fall.'}
];
const WHO_SAID_IT_MODES = ['Identify the Speaker','Who Was Being Addressed?','Complete the Conversation','The Unexpected Speaker','Who Said It and Where?','The Misattributed Quote','Scripture or Not?'] as const;


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
  const reviewedSource = REVIEWED_BATCHES_BY_GAME[gameSlug] ?? [];
  const reviewedLevel = reviewedSource
    .filter((entry) => entry.level === level)
    .sort((a, b) => a.challenge_index - b.challenge_index);

  if (reviewedLevel.length === 5) {
    const baseIndex = (level - 1) * 5;
    return reviewedLevel.map((entry) => {
      const challengeIndex = entry.challenge_index;
      const seed =
        (level * 10007) +
        (challengeIndex * 997) +
        ((baseIndex + challengeIndex - 1) * 31) +
        1337;
      return {
        ...entry,
        id: `${gameSlug}-l${level}-c${challengeIndex}`,
        game_slug: gameSlug,
        level,
        options: entry.metadata?.is_typed ? [] : shuffleDeterministic([...entry.options], seed),
      };
    });
  }

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
        // Levels 1–42 use the curated Scripture Challenge question bank.
        // Later levels retain the existing generator until their curated batches land.
        if (level >= 1 && level <= 42) {
          const curated = SCRIPTURE_CHALLENGE_QUESTIONS.find(
            (entry) => entry.level === level && entry.challenge_index === challengeIndex,
          );
          if (curated) {
            items.push({ ...curated, id, game_slug: gameSlug, level, challenge_index: challengeIndex, options: shuffleDeterministic([...curated.options], shuffleSeed) });
            break;
          }
        }
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
        const curated = BIBLE_CHARACTER_QUEST_QUESTIONS.find(
          (entry) => entry.level === level && entry.challenge_index === challengeIndex
        );
        if (curated) {
          items.push({
            ...curated,
            id,
            options: shuffleDeterministic(curated.options, shuffleSeed),
          });
          break;
        }
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
        const curated = SCRIPTURE_SCRAMBLE_QUESTIONS.find(
          (q) => q.level === level && q.challenge_index === challengeIndex
        );
        if (curated) {
          items.push({
            ...curated,
            id,
            options: shuffleDeterministic([...curated.options], shuffleSeed),
          });
          break;
        }

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
        const wordEntries: Array<{ word: string; reference: string }> = [];
        const addWord = (rawWord: string, reference: string) => {
          const word = rawWord.replace(/[^A-Za-z]/g, '').toUpperCase().slice(0, 8);
          if (word && !wordEntries.some((entry) => entry.word === word)) {
            wordEntries.push({ word, reference });
          }
        };

        addWord(c1.name.split(' ')[0], c1.clue3Ref || c1.ref);
        addWord(c2.name.split(' ')[0], c2.clue3Ref || c2.ref);
        addWord(c3.name, c3.ref);

        // Names such as John can also be Bible book names. If a collision occurs,
        // select the next unused character/book clue and keep its own reference.
        for (let offset = 1; wordEntries.length < 3 && offset <= BIBLE_CHARACTERS.length; offset++) {
          const person = BIBLE_CHARACTERS[(globalSeed + 5 + offset) % BIBLE_CHARACTERS.length];
          addWord(person.name.split(' ')[0], person.clue3Ref || person.ref);
        }
        for (let offset = 1; wordEntries.length < 3 && offset <= BOOKS_66.length; offset++) {
          const book = BOOKS_66[(globalSeed + offset) % BOOKS_66.length];
          addWord(book.name, book.ref);
        }

        const words = wordEntries.map((entry) => entry.word);
        const references = wordEntries.map((entry) => entry.reference);
        items.push({
          id,
          game_slug: gameSlug,
          level,
          challenge_index: challengeIndex,
          question_text: `Locate the hidden sacred words in the letter grid: ${words.join(', ')}`,
          options: words,
          correct_answer: words.join(','),
          explanation: `Key terms from ${references.join(', ')}: ${words.join(', ')}.`,
          reference: references.join('; '),
          metadata: {
            words,
            gridSize: 8,
          },
        });
        break;
      }

      case 'bible-crossword': {
        const curated = BIBLE_CROSSWORD_QUESTIONS.find(
          (entry) => entry.level === level && entry.challenge_index === challengeIndex
        );
        if (curated) {
          items.push({
            ...curated,
            id,
          });
          break;
        }
        // Original Scripture-checked clue bank. Answers are normalized for grid entry;
        // references and explanations remain visible after submission.
        const originalCrosswordClues = [
          ['JEHOIAKIM','The king who cut Jeremiah’s scroll with a knife and burned it','Jeremiah 36:20-26'],
          ['EHUD','The left-handed judge who killed Eglon','Judges 3:15-22'],
          ['EBEDMELECH','The Ethiopian official who rescued Jeremiah from the cistern','Jeremiah 38:7-13'],
          ['HULDAH','The prophetess consulted during Josiah’s reign','2 Kings 22:14-20'],
          ['MATTHIAS','The man chosen to replace Judas among the Twelve','Acts 1:23-26'],
          ['UZZIAH','The king struck with leprosy after unlawfully burning incense','2 Chronicles 26:16-21'],
          ['MEPHIBOSHETH','Jonathan’s son whom David showed kindness','2 Samuel 9:1-13'],
          ['MICAIAH','The prophet who warned Ahab despite the other prophets’ assurances','1 Kings 22:13-28'],
          ['JAEL','The woman who killed Sisera with a tent peg','Judges 4:17-22'],
          ['BEZALEL','The craftsman appointed to make articles for the tabernacle','Exodus 31:1-5'],
          ['SHAMGAR','The judge who struck down six hundred Philistines with an oxgoad','Judges 3:31'],
          ['ABIGAIL','The wise woman who became David’s wife after Nabal died','1 Samuel 25:23-42'],
          ['RIZPAH','The woman who guarded the bodies of Saul’s descendants','2 Samuel 21:8-10'],
          ['HAGGAI','The prophet who urged the returned exiles to rebuild the temple','Haggai 1:1-8'],
          ['ZEPHANIAH','The prophet whose book begins with a warning about the day of the LORD','Zephaniah 1:1-7'],
          ['NAAMAN','The Syrian commander healed after washing in the Jordan','2 Kings 5:1-14'],
          ['GIDEON','The judge who reduced his army to three hundred men','Judges 7:1-8'],
          ['DEBORAH','The prophetess and judge who summoned Barak','Judges 4:4-9'],
          ['BARZILLAI','The elderly Gileadite who supplied David during Absalom’s rebellion','2 Samuel 17:27-29'],
          ['DOEG','The Edomite who reported David’s visit to Ahimelech','1 Samuel 22:9-19'],
          ['ONESIMUS','The formerly useless servant Paul described as useful to him','Philemon 10-16'],
          ['EUTYCHUS','The young man who fell from a window while Paul preached','Acts 20:7-12'],
          ['PHOEBE','The servant of the church at Cenchreae commended by Paul','Romans 16:1-2'],
          ['AGABUS','The prophet who foretold a great famine and Paul’s arrest','Acts 11:27-28; 21:10-11'],
          ['TROPHIMUS','The Ephesian whom Paul left sick at Miletus','2 Timothy 4:20'],
          ['LYDIA','The seller of purple goods who hosted Paul in Philippi','Acts 16:14-15'],
          ['PRISCILLA','The woman who, with Aquila, explained God’s way more accurately to Apollos','Acts 18:24-26'],
          ['MELCHIZEDEK','The king of Salem and priest who blessed Abraham','Genesis 14:18-20'],
          ['ZACCHAEUS','The chief tax collector who climbed a tree to see Jesus','Luke 19:1-10'],
          ['BEREA','The place whose people examined the Scriptures daily','Acts 17:10-12'],
          ['PATMOS','The island where John received the Revelation','Revelation 1:9'],
          ['JOPPA','The coastal city where Peter raised Tabitha','Acts 9:36-43'],
          ['SHILOH','The place where the tabernacle stood during Joshua’s time','Joshua 18:1'],
          ['PISGAH','The mountain height from which Moses viewed the land','Deuteronomy 34:1-4'],
          ['GOLGOTHA','The place where Jesus was crucified','John 19:17-18'],
          ['PENTECOST','The feast day when the Holy Spirit came upon the gathered disciples','Acts 2:1-4'],
          ['PASSOVER','The feast commemorating Israel’s deliverance from Egypt','Exodus 12:1-14'],
          ['EPHOD','A priestly garment associated with the high priest','Exodus 28:6-12'],
          ['URIM','An object kept in the high priest’s breastpiece for decision-making','Exodus 28:30'],
          ['MANNA','The food God provided Israel in the wilderness','Exodus 16:14-15'],
          ['SHOFAR','A ram’s horn sounded at Jericho','Joshua 6:4-5'],
          ['JUBILEE','The year of release proclaimed every fiftieth year','Leviticus 25:8-12'],
          ['SHEPHERD','The image Jesus used when describing his care for the sheep','John 10:11-14'],
          ['PARABLE','A teaching story Jesus often used to reveal truth','Matthew 13:34'],
          ['COVENANT','A solemn agreement established by God with his people','Genesis 17:1-7'],
          ['TABERNACLE','The portable sanctuary Israel built in the wilderness','Exodus 25:8-9'],
          ['PENTATEUCH','The collective name for the first five books of the Bible','Luke 24:44'],
          ['PHILEMON','The short New Testament letter concerning Onesimus','Philemon 1:1'],
          ['NAHUM','The prophet whose book announces judgment against Nineveh','Nahum 1:1'],
          ['HABAKKUK','The prophet who asked why injustice seemed to go unpunished','Habakkuk 1:2-4'],
          ['ELISHA','The prophet who succeeded Elijah and received a double portion','2 Kings 2:9-15'],
          ['JEROBOAM','The king whose rebellion divided the kingdom after Solomon','1 Kings 12:16-20'],
          ['ATHALIAH','The queen who attempted to destroy the royal heirs of Judah','2 Kings 11:1-3'],
          ['JEHOSHAPHAT','The king of Judah who appointed singers before the army','2 Chronicles 20:20-22'],
          ['ZACHARIAS','The father of John the Baptist, named in Luke’s account','Luke 1:5-13'],
          ['SAPPHIRA','The wife of Ananias who lied about the proceeds of a sale','Acts 5:1-10'],
          ['TABITHA','The disciple also known as Dorcas, raised by Peter','Acts 9:36-41'],
          ['CORNELIUS','The Roman centurion whose household heard Peter preach','Acts 10:1-48'],
          ['GAMALIEL','The Pharisee who advised the council to leave the apostles alone','Acts 5:34-39'],
          ['EPAPHRAS','The servant of Christ who laboured in prayer for the Colossians','Colossians 4:12'],
        ] as const;
        // Grow the bank with additional, independently referenced facts already
        // curated in the Bible content catalogue: character episodes, book identities,
        // biblical geography, and detective-case evidence.
        const derivedCrosswordClues: Array<[string, string, string]> = [];
        for (const person of BIBLE_CHARACTERS) {
          const answer = person.name.replace(/[^A-Za-z]/g, '').toUpperCase();
          if (person.clue1 && person.clue1Ref) derivedCrosswordClues.push([answer, person.clue1, person.clue1Ref]);
          if (person.clue2 && person.clue2Ref) derivedCrosswordClues.push([answer, person.clue2, person.clue2Ref]);
          if (person.clue3 && person.clue3Ref) derivedCrosswordClues.push([answer, person.clue3, person.clue3Ref]);
        }
        for (const book of BOOKS_66) {
          derivedCrosswordClues.push([book.name.replace(/[^A-Za-z]/g, '').toUpperCase(), book.clue, book.ref]);
        }
        for (const place of GEOGRAPHY_LOCATIONS) {
          derivedCrosswordClues.push([place.place.replace(/[^A-Za-z]/g, '').toUpperCase(), place.event, place.ref]);
        }
        for (const item of DETECTIVE_CASES) {
          derivedCrosswordClues.push([item.answer.replace(/[^A-Za-z]/g, '').toUpperCase(), item.clue1, item.ref]);
          derivedCrosswordClues.push([item.answer.replace(/[^A-Za-z]/g, '').toUpperCase(), item.clue2, item.ref]);
          derivedCrosswordClues.push([item.answer.replace(/[^A-Za-z]/g, '').toUpperCase(), item.clue3, item.ref]);
        }
        const clueMap = new Map<string, readonly [string, string, string]>();
        for (const clue of [...originalCrosswordClues, ...derivedCrosswordClues]) {
          const [answer, prompt, reference] = clue;
          if (answer.length >= 3 && prompt?.trim() && reference?.trim()) {
            const key = answer + '|' + prompt.trim().toLowerCase();
            if (!clueMap.has(key)) clueMap.set(key, [answer, prompt.trim(), reference.trim()]);
          }
        }
        const crosswordClues = [...clueMap.values()];
        const count = 10;
        // Each seed creates a distinct ten-answer crossword. We shuffle the expanded
        // clue bank deterministically, then reject duplicate answer entries in a grid.
        const chosen = (() => {
          for (let attempt = 0; attempt < 500; attempt++) {
            const shuffled = shuffleDeterministic(crosswordClues, globalSeed * 7919 + attempt * 104729 + 37);
            const selected: typeof crosswordClues = [];
            const answers = new Set<string>();
            for (const clue of shuffled) {
              if (answers.has(clue[0])) continue;
              selected.push(clue);
              answers.add(clue[0]);
              if (selected.length === count) break;
            }
            if (selected.length === count) return selected;
          }
          throw new Error('Crossword bank could not produce ten distinct answer entries.');
        })();
        const entries = chosen.map(([answer, clue, reference], index) => ({
          number: index + 1,
          answer,
          clue,
          reference,
          direction: index % 2 === 0 ? 'across' : 'down',
        }));
        items.push({
          id, game_slug: gameSlug, level, challenge_index: challengeIndex,
          question_text: 'Complete the Bible crossword. Solve every Across and Down clue.',
          options: entries.map((entry) => entry.answer),
          correct_answer: entries.map((entry) => entry.answer).join('|'),
          explanation: entries.map((entry) => `${entry.number}. ${entry.answer}: ${entry.clue} (${entry.reference})`).join(' '),
          reference: [...new Set(entries.map((entry) => entry.reference))].join('; '),
          metadata: { entries, crosswordVersion: 4, category: 'Mixed Bible knowledge', clueBankSize: crosswordClues.length, clueCount: entries.length },
        });
        break;
      }

      case 'who-said-it': {
        const modeIndex = globalSeed % WHO_SAID_IT_MODES.length;
        const mode = WHO_SAID_IT_MODES[modeIndex];
        const slot = Math.floor(globalSeed / WHO_SAID_IT_MODES.length);
        const q = UNIQUE_QUOTES_POOL[(slot + modeIndex * 19) % UNIQUE_QUOTES_POOL.length];
        let questionText = '';
        let correctAnswer = '';
        let options: string[] = [];
        let explanation = '';
        let reference = q.ref;
        let metadata: Record<string, any> = { mode, modeIndex };

        if (modeIndex === 0) {
          const candidates = q.options.length ? q.options : (QUOTE_SPEAKER_GROUPS[q.speaker] || QUOTE_SPEAKERS);
          options = makeFourDistinctOptions(q.speaker, candidates, shuffleSeed);
          questionText = 'IDENTIFY THE SPEAKER\nWho spoke these words in Scripture?\n“' + q.quote + '”';
          correctAnswer = q.speaker;
          explanation = q.context + ' The speaker is ' + q.speaker + '.';
          metadata = { ...metadata, quote: q.quote, speaker: q.speaker };
        } else if (modeIndex === 1) {
          const a = WHO_SAID_IT_AUDIENCES[slot % WHO_SAID_IT_AUDIENCES.length];
          options = makeFourDistinctOptions(a.audience, a.options, shuffleSeed);
          questionText = 'WHO WAS BEING ADDRESSED?\n' + a.speaker + ' said: “' + a.quote + '”\nWho was the speaker talking to?';
          correctAnswer = a.audience;
          explanation = a.explanation;
          reference = a.ref;
          metadata = { ...metadata, quote: a.quote, speaker: a.speaker, addressedTo: a.audience };
        } else if (modeIndex === 2) {
          const d = WHO_SAID_IT_DIALOGUES[slot % WHO_SAID_IT_DIALOGUES.length];
          options = makeFourDistinctOptions(d.answer, d.options, shuffleSeed);
          questionText = 'COMPLETE THE CONVERSATION\n' + d.prompt + '\nWho gave the response?';
          correctAnswer = d.answer;
          explanation = d.explanation;
          reference = d.ref;
          metadata = { ...metadata, dialogue: d.prompt, responseSpeaker: d.answer };
        } else if (modeIndex === 3) {
          const unexpected = UNIQUE_QUOTES_POOL.filter((entry) => ['Cain','Balaam','Judas Iscariot','King Agrippa','The Roman Centurion','The Philippian Jailer','The Ethiopian eunuch','Saul','Naaman','King Belshazzar','The repentant thief','Pharaoh','Nathanael','Martha','Thomas','The Samaritan woman','The Shunammite woman','The widow of Zarephath','Hazael','Laban','Eli','A Hebrew man','The crowds','The rich young ruler','The leper','Naboth','Mephibosheth','Mordecai','The chief priests and elders','The king of Israel','The captain of the LORD’s host','The people of Israel','The disciples','Satan','Pharaoh','Jezebel','Abimelech','Rahab','The Samaritan woman','Nebuchadnezzar','Eliphaz','Bildad','Zophar','Elihu','Pontius Pilate','Mary','Elizabeth','Zechariah','The Preacher','Habakkuk','Micah','Amos','Nahum','Jonah','Nehemiah','Stephen','The repentant thief','The psalmist','Joseph','Jacob','Gideon’s army','Peter and the apostles','Paul and Silas','Simon Peter','Andrew'].includes(entry.speaker));
          const u = unexpected[slot % unexpected.length] || q;
          const candidates = QUOTE_SPEAKER_GROUPS[u.speaker] || QUOTE_SPEAKERS;
          options = makeFourDistinctOptions(u.speaker, candidates, shuffleSeed);
          questionText = 'THE UNEXPECTED SPEAKER\nThis statement came from a person you might not expect:\n“' + u.quote + '”\nWho actually said it?';
          correctAnswer = u.speaker;
          explanation = u.context + ' The unexpected speaker was ' + u.speaker + '.';
          reference = u.ref;
          metadata = { ...metadata, quote: u.quote, speaker: u.speaker, unexpectedSpeaker: true };
        } else if (modeIndex === 4) {
          const candidates = UNIQUE_QUOTES_POOL.filter((entry) => entry.ref !== q.ref && entry.speaker !== q.speaker);
          const refOptions = [q.speaker + ' — ' + q.ref, ...candidates.slice(slot % Math.max(1, candidates.length - 3), (slot % Math.max(1, candidates.length - 3)) + 3).map((entry) => entry.speaker + ' — ' + entry.ref)];
          options = shuffleDeterministic(refOptions, shuffleSeed);
          correctAnswer = q.speaker + ' — ' + q.ref;
          questionText = 'WHO SAID IT AND WHERE?\n“' + q.quote + '”\nChoose the correct speaker AND Bible passage.';
          explanation = q.context + ' The correct attribution is ' + q.speaker + ' in ' + q.ref + '.';
          metadata = { ...metadata, quote: q.quote, speaker: q.speaker, exactReference: q.ref };
        } else if (modeIndex === 5) {
          const candidates = q.options.length ? q.options : (QUOTE_SPEAKER_GROUPS[q.speaker] || QUOTE_SPEAKERS);
          options = makeFourDistinctOptions(q.speaker, candidates, shuffleSeed);
          questionText = 'THE MISATTRIBUTED QUOTE\nSeveral people are often confused with the speaker of this statement:\n“' + q.quote + '”\nWho actually said it?';
          correctAnswer = q.speaker;
          explanation = q.context + ' It is attributed to ' + q.speaker + ', not the other suggested speakers.';
          metadata = { ...metadata, quote: q.quote, speaker: q.speaker, misattributionCheck: true };
        } else {
          const claim = WHO_SAID_IT_NOT_SCRIPTURE[slot % WHO_SAID_IT_NOT_SCRIPTURE.length];
          const labels = ['Yes — a direct biblical quotation', 'No — not a biblical quotation', 'It is a paraphrase or popular summary', 'The Bible records it, but no speaker is named'];
          correctAnswer = claim.status === 'scripture' ? labels[0] : claim.status === 'paraphrase' ? labels[2] : labels[1];
          options = shuffleDeterministic(labels, shuffleSeed);
          questionText = 'SCRIPTURE OR NOT?\nIs this saying actually found in the Bible?\n“' + claim.saying + '”';
          explanation = claim.explanation;
          reference = claim.ref;
          metadata = { ...metadata, saying: claim.saying, scriptureStatus: claim.status };
        }

        if (options.length !== 4 || new Set(options.map((option) => option.toLowerCase())).size !== 4 || !options.includes(correctAnswer)) {
          options = makeFourDistinctOptions(correctAnswer, q.options.length ? q.options : (QUOTE_SPEAKER_GROUPS[q.speaker] || QUOTE_SPEAKERS), shuffleSeed);
        }
        items.push({
          id, game_slug: gameSlug, level, challenge_index: challengeIndex,
          question_text: questionText, options, correct_answer: correctAnswer,
          explanation, reference, metadata: { ...metadata, mode, modeIndex },
        });
        break;
      }

      case 'complete-the-scripture': {
        const curated = COMPLETE_THE_SCRIPTURE_QUESTIONS.find(
          (entry) => entry.level === level && entry.challenge_index === challengeIndex
        );
        if (curated) {
          items.push({
            ...curated,
            id,
            options: curated.metadata?.mode === 0 || curated.metadata?.mode === 5
              ? shuffleDeterministic([...curated.options], shuffleSeed)
              : [...curated.options],
          });
          break;
        }
        const verse = COMPLETE_SCRIPTURE_VERSES[globalSeed % COMPLETE_SCRIPTURE_VERSES.length];
        const words = verse.text.split(/\s+/);
        const candidates = words.map((word, index) => ({ word: word.replace(/^[^A-Za-z]+|[^A-Za-z]+$/g, ''), index }))
          .filter((entry) => entry.word.length >= 4 && !['THAT','THIS','THEM','THEIR','THERE','WHICH','WHEN','THOU','THEY','WITH','FROM','HATH','SHALL','WILL'].includes(entry.word.toUpperCase()));
        const chosen = candidates[(globalSeed * 7 + 3) % candidates.length] || candidates[0];
        const chosenTwo = candidates.find((entry) => entry.index !== chosen.index && entry.word.length >= 4) || chosen;
        const mode = (level + challengeIndex - 2) % 6;
        const mask = (indexes: number[]) => words.map((word, index) => indexes.includes(index) ? '________' : word).join(' ');
        const targetIndexes = mode === 1 || mode === 2 || mode === 4 ? [...new Set([chosen.index, chosenTwo.index])] : [chosen.index];
        const targetWords = targetIndexes.map((index) => words[index].replace(/^[^A-Za-z]+|[^A-Za-z]+$/g, ''));
        const missingText = mask(targetIndexes);
        const options = mode === 0 || mode === 5
          ? makeFourDistinctOptions(targetWords[0], candidates.filter((entry) => entry.word.toLowerCase() !== targetWords[0].toLowerCase()).slice(0, 12).map((entry) => entry.word), shuffleSeed)
          : mode === 3 ? [] : shuffleDeterministic([...targetWords], shuffleSeed);
        const labels = ['Find the Missing Word', 'Multiple Missing Words', 'Arrange the Missing Words', 'Type the Missing Word', 'Disappearing Scripture', 'No Reference Challenge'];
        const questionText = mode === 4
          ? 'Memorise the verse shown, then hide it and rebuild the missing words.'
          : mode === 2
            ? 'Arrange the missing words in their correct order to complete the verse.'
            : mode === 3
              ? 'Type the exact missing word to complete this KJV verse.'
              : mode === 1
                ? 'Fill both blanks in the correct order.'
                : mode === 5
                  ? 'Complete the verse. This round deliberately hides the reference.'
                  : 'Choose the exact missing word from the KJV verse.';
        const answer = mode === 1 || mode === 2 || mode === 4 ? targetWords.join(' ') : targetWords[0];
        items.push({
          id, game_slug: gameSlug, level, challenge_index: challengeIndex,
          question_text: questionText,
          options,
          correct_answer: answer,
          explanation: verse.explanation + ' The complete KJV wording is: “' + verse.text + '”',
          reference: verse.ref,
          metadata: {
            mode, modeLabel: labels[mode], verseText: verse.text, maskedText: missingText,
            targetWords, wordPool: mode === 2 || mode === 4 ? shuffleDeterministic([...targetWords, ...words.filter((_, index) => !targetIndexes.includes(index)).filter((word) => word.replace(/[^A-Za-z]/g, '').length >= 3).slice(0, 5).map((word) => word.replace(/^[^A-Za-z]+|[^A-Za-z]+$/g, ''))], shuffleSeed + 17) : [],
            hiddenReference: mode === 5, difficulty: verse.difficulty,
          },
        });
        break;
      }

      case 'bible-match-up': {
        const curated = BIBLE_MATCH_UP_QUESTIONS.find(
          (entry) => entry.level === level && entry.challenge_index === challengeIndex
        );
        if (curated) {
          items.push({
            ...curated,
            id,
          });
          break;
        }

        const matchSet = getMatchUpChallenge(globalSeed);
        const pairs = matchSet.pairs;
        items.push({
          id,
          game_slug: gameSlug,
          level,
          challenge_index: challengeIndex,
          question_text: `Match each ${matchSet.leftLabel.toLowerCase()} with its correct ${matchSet.rightLabel.toLowerCase()}:`,
          options: pairs.map((p) => `${p.left}:${p.right}`),
          correct_answer: pairs.map((p) => `${p.left}=${p.right}`).join('|'),
          explanation: pairs.map((p) => `${p.left} — ${p.right} (${p.ref})`).join(' • '),
          reference: pairs.map((p) => p.ref).join('; '),
          metadata: { pairs, mode: matchSet.mode, leftLabel: matchSet.leftLabel, rightLabel: matchSet.rightLabel },
        });
        break;
      }

      case 'bible-timeline': {
        const curated = BIBLE_TIMELINE_QUESTIONS.find(
          (entry) => entry.level === level && entry.challenge_index === challengeIndex
        );
        if (curated) {
          items.push({
            ...curated,
            id,
          });
          break;
        }

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
        const curated = BIBLE_PUZZLES_QUESTIONS.find(
          (entry) => entry.level === level && entry.challenge_index === challengeIndex
        );
        if (curated) {
          items.push({
            ...curated,
            id,
            options: shuffleDeterministic([...curated.options], shuffleSeed),
          });
          break;
        }

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
        const curated = FIND_THE_BIBLE_BOOK_QUESTIONS.find(
          (entry) => entry.level === level && entry.challenge_index === challengeIndex
        );
        if (curated) {
          items.push({
            ...curated,
            id,
            options: shuffleDeterministic([...curated.options], shuffleSeed),
          });
          break;
        }

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
        const curated = BIBLE_RIDDLES_QUESTIONS.find(
          (entry) => entry.level === level && entry.challenge_index === challengeIndex
        );
        if (curated) {
          items.push({
            ...curated,
            id,
            options: shuffleDeterministic([...curated.options], shuffleSeed),
          });
          break;
        }

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
        const curated = BIBLE_MEMORY_QUESTIONS.find(
          (entry) => entry.level === level && entry.challenge_index === challengeIndex
        );
        if (curated) {
          items.push({
            ...curated,
            id,
            game_slug: gameSlug,
          });
          break;
        }
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
        const book = OLD_NEW_INTERLEAVED_BOOKS[globalSeed % OLD_NEW_INTERLEAVED_BOOKS.length];
        const verseNumber = Math.floor(globalSeed / OLD_NEW_INTERLEAVED_BOOKS.length) + 1;
        const passageReference = `${book.name} 1:${verseNumber}`;
        items.push({
          id,
          game_slug: gameSlug,
          level,
          challenge_index: challengeIndex,
          question_text: `Which Testament contains the passage ${passageReference}?`,
          options: ['Old Testament', 'New Testament'],
          correct_answer: book.testament,
          explanation: `${passageReference} is in ${book.name}, which belongs to the ${book.section} section of the ${book.testament}.`,
          reference: passageReference,
          metadata: {
            difficulty: getDifficultyForLevel(level),
            fact_key: `testament-${book.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-1-${verseNumber}`,
            curated: true,
            book_name: book.name,
            testament: book.testament,
          },
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
        const curated = BIBLE_CHAIN_QUESTIONS.find(
          (entry) => entry.level === level && entry.challenge_index === challengeIndex
        );
        if (curated) {
          items.push({
            ...curated,
            id,
            options: curated.metadata?.is_typed ? [] : shuffleDeterministic(curated.options, shuffleSeed)
          });
          break;
        }

        // Combine the curated rare-name catalogue with the established character
        // reference bank. Only single people are eligible; Bible book titles and
        // group/couple labels are excluded.
        const curatedPeople = BIBLE_CHAIN_PEOPLE_SEED.map((p) => ({
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
        for (const person of [...curatedPeople, ...established]) {
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
          question_text: chosen.answer.identity,
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
              `Category: ${chosen.answer.category}.`,
              `Read ${chosen.answer.reference} carefully for the identifying detail.`,
            ],
          },
        });
        break;
      }

      case 'verse-builder': {
        const curated = VERSE_BUILDER_QUESTIONS.find(
          (entry) => entry.level === level && entry.challenge_index === challengeIndex
        );
        if (curated) {
          const isTyped = Boolean(curated.metadata?.is_typed);
          const isTiles = Boolean(curated.metadata?.is_tiles);
          items.push({
            ...curated,
            id,
            options: isTyped
              ? []
              : isTiles
              ? shuffleDeterministic([...curated.options], shuffleSeed)
              : shuffleDeterministic([...curated.options], shuffleSeed),
          });
          break;
        }

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

      case 'guess-the-emoji': {
        const curated = GUESS_THE_EMOJI_QUESTIONS.find(
          (entry) => entry.level === level && entry.challenge_index === challengeIndex
        );
        if (curated) {
          const isTyped = Boolean(curated.metadata?.is_typed);
          items.push({
            ...curated,
            id,
            options: isTyped ? [] : shuffleDeterministic([...curated.options], shuffleSeed),
          });
          break;
        }

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
