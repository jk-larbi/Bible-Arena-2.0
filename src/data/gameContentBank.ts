import { INITIAL_QUESTIONS } from './initialQuestions';
import { EMOJI_QUESTIONS } from './emojiQuestions';

export interface GameChallenge {
  id: string;
  gameSlug: string;
  level: number;
  challengeIndex: number; // 1..10
  questionText: string;
  options?: string[];
  correctAnswer: string;
  acceptedAnswers?: string[];
  explanation: string;
  reference: string;
  difficulty: 'Beginner' | 'Easy' | 'Medium' | 'Hard' | 'Expert';
  metadata?: Record<string, any>;
}

export interface PublishedLevelMeta {
  gameSlug: string;
  level: number;
  name: string;
  difficulty: string;
  challengeCount: number;
  isPublished: boolean;
}

// ============================================================================
// CORE DATASETS FOR GENERATING DISTINCT, VERIFIED CHALLENGES ACROSS LEVELS
// ============================================================================

export const BIBLE_BOOKS_DATA = [
  // Law (5)
  { num: 1, name: 'Genesis', testament: 'Old Testament', section: 'Law', author: 'Moses', chapters: 50, theme: 'Creation, Fall, Flood, and the Patriarchs Abraham, Isaac, Jacob, and Joseph', keyVerse: 'Genesis 1:1', event: 'Creation and Abrahamic Covenant' },
  { num: 2, name: 'Exodus', testament: 'Old Testament', section: 'Law', author: 'Moses', chapters: 40, theme: 'Deliverance from Egypt, the Ten Commandments at Sinai, and the Tabernacle', keyVerse: 'Exodus 20:2-3', event: 'Crossing the Red Sea and Giving of the Law' },
  { num: 3, name: 'Leviticus', testament: 'Old Testament', section: 'Law', author: 'Moses', chapters: 27, theme: 'Holiness, sacrifices, priesthood, and the Day of Atonement', keyVerse: 'Leviticus 19:2', event: 'Ordination of Aaron and the Levitical Priesthood' },
  { num: 4, name: 'Numbers', testament: 'Old Testament', section: 'Law', author: 'Moses', chapters: 36, theme: 'Wilderness wanderings, censuses of Israel, and forty years of testing', keyVerse: 'Numbers 6:24-26', event: 'Twelve Spies at Kadesh-barnea and the Bronze Serpent' },
  { num: 5, name: 'Deuteronomy', testament: 'Old Testament', section: 'Law', author: 'Moses', chapters: 34, theme: 'Moses’ farewell addresses renewing the covenant on the plains of Moab', keyVerse: 'Deuteronomy 6:4-5', event: 'The Shema and Covenant Renewal before Canaan' },
  // History (12)
  { num: 6, name: 'Joshua', testament: 'Old Testament', section: 'History', author: 'Joshua', chapters: 24, theme: 'Conquest and allotment of the Promised Land of Canaan', keyVerse: 'Joshua 1:9', event: 'Fall of Jericho and Division of the Land' },
  { num: 7, name: 'Judges', testament: 'Old Testament', section: 'History', author: 'Samuel (traditional)', chapters: 21, theme: 'Cycles of apostasy, oppression, and deliverance through raised-up judges', keyVerse: 'Judges 21:25', event: 'Victories of Deborah, Gideon, and Samson' },
  { num: 8, name: 'Ruth', testament: 'Old Testament', section: 'History', author: 'Samuel (traditional)', chapters: 4, theme: 'Loyal love and redemption of a Moabite widow in the lineage of David', keyVerse: 'Ruth 1:16', event: 'Boaz redeems Ruth in Bethlehem' },
  { num: 9, name: '1 Samuel', testament: 'Old Testament', section: 'History', author: 'Samuel / Nathan / Gad', chapters: 31, theme: 'Transition from judges to monarchy: Samuel, King Saul, and young David', keyVerse: '1 Samuel 16:7', event: 'Anointing of Saul and David slaying Goliath' },
  { num: 10, name: '2 Samuel', testament: 'Old Testament', section: 'History', author: 'Nathan / Gad', chapters: 24, theme: 'King David’s reign in Jerusalem, the Davidic Covenant, and family trials', keyVerse: '2 Samuel 7:16', event: 'God’s everlasting covenant with David’s house' },
  { num: 11, name: '1 Kings', testament: 'Old Testament', section: 'History', author: 'Jeremiah (traditional)', chapters: 22, theme: 'Solomon’s temple and wisdom, division of the kingdom, and Elijah’s ministry', keyVerse: '1 Kings 8:27', event: 'Dedication of Solomon’s Temple and Mount Carmel' },
  { num: 12, name: '2 Kings', testament: 'Old Testament', section: 'History', author: 'Jeremiah (traditional)', chapters: 25, theme: 'Elisha’s miracles and the decline and exile of both Israel and Judah', keyVerse: '2 Kings 17:13', event: 'Fall of Samaria to Assyria and Jerusalem to Babylon' },
  { num: 13, name: '1 Chronicles', testament: 'Old Testament', section: 'History', author: 'Ezra (traditional)', chapters: 29, theme: 'Genealogies from Adam and the priestly preparation under King David', keyVerse: '1 Chronicles 29:11', event: 'Bringing the Ark of the Covenant to Jerusalem' },
  { num: 14, name: '2 Chronicles', testament: 'Old Testament', section: 'History', author: 'Ezra (traditional)', chapters: 36, theme: 'History of Judah’s kings emphasizing temple worship and reform', keyVerse: '2 Chronicles 7:14', event: 'Reforms of Hezekiah and Josiah' },
  { num: 15, name: 'Ezra', testament: 'Old Testament', section: 'History', author: 'Ezra', chapters: 10, theme: 'Return of the Jewish remnant from Babylon and rebuilding the Temple', keyVerse: 'Ezra 7:10', event: 'Completion of the Second Temple under Zerubbabel' },
  { num: 16, name: 'Nehemiah', testament: 'Old Testament', section: 'History', author: 'Nehemiah', chapters: 13, theme: 'Rebuilding the walls of Jerusalem in 52 days and spiritual renewal', keyVerse: 'Nehemiah 8:10', event: 'Reconstruction of Jerusalem’s walls and public reading of the Law' },
  { num: 17, name: 'Esther', testament: 'Old Testament', section: 'History', author: 'Mordecai (traditional)', chapters: 10, theme: 'Providential deliverance of the Jewish people in Persia from Haman’s plot', keyVerse: 'Esther 4:14', event: 'Queen Esther intercedes before King Ahasuerus' },
  // Wisdom & Poetry (5)
  { num: 18, name: 'Job', testament: 'Old Testament', section: 'Wisdom', author: 'Unknown / Moses', chapters: 42, theme: 'Righteous suffering, divine sovereignty, and God’s speech from the whirlwind', keyVerse: 'Job 19:25', event: 'Testing and restoration of Job' },
  { num: 19, name: 'Psalms', testament: 'Old Testament', section: 'Wisdom', author: 'David, Asaph, Sons of Korah, Solomon, Moses', chapters: 150, theme: 'Sacred hymns of praise, lament, thanksgiving, and Messianic prophecy', keyVerse: 'Psalm 23:1', event: 'Worship songs of Ancient Israel' },
  { num: 20, name: 'Proverbs', testament: 'Old Testament', section: 'Wisdom', author: 'Solomon, Agur, Lemuel', chapters: 31, theme: 'Practical godly wisdom grounded in the fear of the Lord', keyVerse: 'Proverbs 1:7', event: 'Collection of royal wisdom sayings' },
  { num: 21, name: 'Ecclesiastes', testament: 'Old Testament', section: 'Wisdom', author: 'Solomon (Qoheleth)', chapters: 12, theme: 'The vanity of life "under the sun" apart from fearing God and keeping His commands', keyVerse: 'Ecclesiastes 12:13', event: 'The Preacher’s search for meaning' },
  { num: 22, name: 'Song of Solomon', testament: 'Old Testament', section: 'Wisdom', author: 'Solomon', chapters: 8, theme: 'Poetic celebration of marital love and devotion', keyVerse: 'Song of Solomon 8:6-7', event: 'Royal wedding poetry' },
  // Major Prophets (5)
  { num: 23, name: 'Isaiah', testament: 'Old Testament', section: 'Prophets', author: 'Isaiah', chapters: 66, theme: 'Holiness of God, judgment, comfort for Zion, and the Suffering Servant', keyVerse: 'Isaiah 53:5', event: 'Prophecies during the reigns of Uzziah, Jotham, Ahaz, and Hezekiah' },
  { num: 24, name: 'Jeremiah', testament: 'Old Testament', section: 'Prophets', author: 'Jeremiah', chapters: 52, theme: 'Warnings of Babylonian exile and the promise of the New Covenant', keyVerse: 'Jeremiah 31:33', event: 'Prophetic ministry during the final years of Judah' },
  { num: 25, name: 'Lamentations', testament: 'Old Testament', section: 'Prophets', author: 'Jeremiah', chapters: 5, theme: 'Five poetic dirges mourning the destruction of Jerusalem in 586 BC', keyVerse: 'Lamentations 3:22-23', event: 'Mourning over fallen Jerusalem' },
  { num: 26, name: 'Ezekiel', testament: 'Old Testament', section: 'Prophets', author: 'Ezekiel', chapters: 48, theme: 'Visions of God’s glory, the valley of dry bones, and the restored temple', keyVerse: 'Ezekiel 36:26', event: 'Prophetic visions by the Chebar canal in Babylon' },
  { num: 27, name: 'Daniel', testament: 'Old Testament', section: 'Prophets', author: 'Daniel', chapters: 12, theme: 'Faithfulness in exile and apocalyptic visions of world empires and the Son of Man', keyVerse: 'Daniel 2:21', event: 'Fiery furnace, lions’ den, and vision of four beasts' },
  // Minor Prophets (12)
  { num: 28, name: 'Hosea', testament: 'Old Testament', section: 'Prophets', author: 'Hosea', chapters: 14, theme: 'God’s unfailing covenant love for unfaithful Israel illustrated by Hosea and Gomer', keyVerse: 'Hosea 6:6', event: 'Prophecy to the Northern Kingdom before Assyria' },
  { num: 29, name: 'Joel', testament: 'Old Testament', section: 'Prophets', author: 'Joel', chapters: 3, theme: 'The locust plague, the Day of the Lord, and the outpouring of the Spirit', keyVerse: 'Joel 2:28', event: 'Call to national repentance and promise of the Spirit' },
  { num: 30, name: 'Amos', testament: 'Old Testament', section: 'Prophets', author: 'Amos', chapters: 9, theme: 'Social justice and righteous judgment proclaimed by a shepherd from Tekoa', keyVerse: 'Amos 5:24', event: 'Prophetic rebuke at Bethel during Jeroboam II' },
  { num: 31, name: 'Obadiah', testament: 'Old Testament', section: 'Prophets', author: 'Obadiah', chapters: 1, theme: 'Judgment against Edom for pride and violence against brother Jacob', keyVerse: 'Obadiah 1:15', event: 'Oracle against Edom (shortest Old Testament book)' },
  { num: 32, name: 'Jonah', testament: 'Old Testament', section: 'Prophets', author: 'Jonah', chapters: 4, theme: 'God’s sovereign compassion extending even to repentant Nineveh', keyVerse: 'Jonah 2:9', event: 'Jonah swallowed by a great fish and preaching to Nineveh' },
  { num: 33, name: 'Micah', testament: 'Old Testament', section: 'Prophets', author: 'Micah', chapters: 7, theme: 'Justice, mercy, humility, and the prophecy of Messiah’s birth in Bethlehem', keyVerse: 'Micah 6:8', event: 'Prophecy of the ruler from Bethlehem Ephrathah' },
  { num: 34, name: 'Nahum', testament: 'Old Testament', section: 'Prophets', author: 'Nahum', chapters: 3, theme: 'The righteous downfall and judgment of cruel Nineveh, capital of Assyria', keyVerse: 'Nahum 1:7', event: 'Foretelling the destruction of Nineveh' },
  { num: 35, name: 'Habakkuk', testament: 'Old Testament', section: 'Prophets', author: 'Habakkuk', chapters: 3, theme: 'A prophet’s dialogue with God over evil and living by faith', keyVerse: 'Habakkuk 2:4', event: 'Watchtower dialogue: "The righteous shall live by his faith"' },
  { num: 36, name: 'Zephaniah', testament: 'Old Testament', section: 'Prophets', author: 'Zephaniah', chapters: 3, theme: 'The approaching Day of the Lord and the joyful restoration of a humble remnant', keyVerse: 'Zephaniah 3:17', event: 'Prophecy during King Josiah’s reign' },
  { num: 37, name: 'Haggai', testament: 'Old Testament', section: 'Prophets', author: 'Haggai', chapters: 2, theme: 'Exhortation to returned exiles to prioritize rebuilding the Lord’s Temple', keyVerse: 'Haggai 1:7-8', event: 'Resuming construction of the Second Temple in 520 BC' },
  { num: 38, name: 'Zechariah', testament: 'Old Testament', section: 'Prophets', author: 'Zechariah', chapters: 14, theme: 'Night visions encouraging temple rebuilding and Messianic prophecies of the King', keyVerse: 'Zechariah 9:9', event: 'Visions of the lampstand, Joshua the high priest, and the humble King' },
  { num: 39, name: 'Malachi', testament: 'Old Testament', section: 'Prophets', author: 'Malachi', chapters: 4, theme: 'Call to covenant faithfulness and the promise of Elijah before the Day of the Lord', keyVerse: 'Malachi 3:1', event: 'Final Old Testament prophetic message' },
  // Gospels (4)
  { num: 40, name: 'Matthew', testament: 'New Testament', section: 'Gospels', author: 'Matthew (Levi)', chapters: 28, theme: 'Jesus as the promised Messianic King fulfilling Old Testament prophecy', keyVerse: 'Matthew 28:19-20', event: 'Sermon on the Mount and Great Commission' },
  { num: 41, name: 'Mark', testament: 'New Testament', section: 'Gospels', author: 'John Mark', chapters: 16, theme: 'Fast-paced account of Jesus as the suffering Servant of God in action', keyVerse: 'Mark 10:45', event: 'Miracles of Jesus and Passion Week' },
  { num: 42, name: 'Luke', testament: 'New Testament', section: 'Gospels', author: 'Luke', chapters: 24, theme: 'Orderly historical account of Jesus as the compassionate Savior of all people', keyVerse: 'Luke 19:10', event: 'Parables of the Good Samaritan and Prodigal Son' },
  { num: 43, name: 'John', testament: 'New Testament', section: 'Gospels', author: 'John the Apostle', chapters: 21, theme: 'Jesus as the eternal Word made flesh and the seven signs leading to eternal life', keyVerse: 'John 20:31', event: 'Seven "I AM" declarations and Upper Room Discourse' },
  // History NT (1)
  { num: 44, name: 'Acts', testament: 'New Testament', section: 'Acts', author: 'Luke', chapters: 28, theme: 'The risen Christ’s work through the Holy Spirit in the early Church from Jerusalem to Rome', keyVerse: 'Acts 1:8', event: 'Pentecost and Paul’s three missionary journeys' },
  // Letters (21)
  { num: 45, name: 'Romans', testament: 'New Testament', section: 'Letters', author: 'Paul', chapters: 16, theme: 'The gospel of God’s righteousness and justification by faith alone', keyVerse: 'Romans 1:16-17', event: 'Systematic exposition of salvation written from Corinth' },
  { num: 46, name: '1 Corinthians', testament: 'New Testament', section: 'Letters', author: 'Paul', chapters: 16, theme: 'Church unity, spiritual gifts, love (chapter 13), and the bodily resurrection', keyVerse: '1 Corinthians 13:13', event: 'Addressing divisions and questions in the Corinthian church' },
  { num: 47, name: '2 Corinthians', testament: 'New Testament', section: 'Letters', author: 'Paul', chapters: 13, theme: 'Comfort in affliction, the ministry of reconciliation, and God’s power in weakness', keyVerse: '2 Corinthians 12:9', event: 'Defense of Paul’s apostolic ministry' },
  { num: 48, name: 'Galatians', testament: 'New Testament', section: 'Letters', author: 'Paul', chapters: 6, theme: 'Christian freedom in grace vs. bondage to legalism, and the fruit of the Spirit', keyVerse: 'Galatians 2:20', event: 'Defense of justification by faith apart from works of the law' },
  { num: 49, name: 'Ephesians', testament: 'New Testament', section: 'Letters', author: 'Paul', chapters: 6, theme: 'The glorious mystery of the Church as Christ’s body and the armor of God', keyVerse: 'Ephesians 2:8-9', event: 'Prison epistle on unity in Christ' },
  { num: 50, name: 'Philippians', testament: 'New Testament', section: 'Letters', author: 'Paul', chapters: 4, theme: 'Joy in Christ amid suffering and the humble mindset of Christ’s incarnation', keyVerse: 'Philippians 4:13', event: 'Thankful letter to the church at Philippi from prison' },
  { num: 51, name: 'Colossians', testament: 'New Testament', section: 'Letters', author: 'Paul', chapters: 4, theme: 'The absolute supremacy and sufficiency of Christ over all creation', keyVerse: 'Colossians 1:16-17', event: 'Refuting heresy by exalting Christ as preeminent' },
  { num: 52, name: '1 Thessalonians', testament: 'New Testament', section: 'Letters', author: 'Paul', chapters: 5, theme: 'Encouragement in persecution, holy living, and hope in Christ’s return', keyVerse: '1 Thessalonians 4:16-17', event: 'Comfort concerning believers who have fallen asleep' },
  { num: 53, name: '2 Thessalonians', testament: 'New Testament', section: 'Letters', author: 'Paul', chapters: 3, theme: 'Clarification regarding the Day of the Lord and diligence in work', keyVerse: '2 Thessalonians 3:13', event: 'Correcting misunderstandings about the Second Coming' },
  { num: 54, name: '1 Timothy', testament: 'New Testament', section: 'Letters', author: 'Paul', chapters: 6, theme: 'Pastoral instructions on sound doctrine, church leadership, and godliness', keyVerse: '1 Timothy 4:12', event: 'Guidance to young Timothy ministering in Ephesus' },
  { num: 55, name: '2 Timothy', testament: 'New Testament', section: 'Letters', author: 'Paul', chapters: 4, theme: 'Paul’s final charge to endure hardship and preach the God-breathed Scriptures', keyVerse: '2 Timothy 3:16-17', event: 'Paul’s final letter from Roman imprisonment' },
  { num: 56, name: 'Titus', testament: 'New Testament', section: 'Letters', author: 'Paul', chapters: 3, theme: 'Appointing elders in Crete and adorning sound doctrine with good works', keyVerse: 'Titus 3:5', event: 'Pastoral letter to Titus on the island of Crete' },
  { num: 57, name: 'Philemon', testament: 'New Testament', section: 'Letters', author: 'Paul', chapters: 1, theme: 'Paul’s appeal for forgiveness and Christian brotherhood on behalf of Onesimus', keyVerse: 'Philemon 1:16', event: 'Intercession for the runaway servant Onesimus' },
  { num: 58, name: 'Hebrews', testament: 'New Testament', section: 'Letters', author: 'Unknown', chapters: 13, theme: 'Christ’s superiority as Great High Priest of a better covenant and the Hall of Faith', keyVerse: 'Hebrews 11:1', event: 'Exaltation of Christ above angels, Moses, and Levitical priests' },
  { num: 59, name: 'James', testament: 'New Testament', section: 'Letters', author: 'James (brother of Jesus)', chapters: 5, theme: 'Living faith demonstrated by works, taming the tongue, and heavenly wisdom', keyVerse: 'James 1:22', event: 'Practical wisdom epistle to the twelve tribes dispersed abroad' },
  { num: 60, name: '1 Peter', testament: 'New Testament', section: 'Letters', author: 'Peter', chapters: 5, theme: 'Living hope and holy conduct for believers suffering as exiles', keyVerse: '1 Peter 1:3', event: 'Encouragement to persecuted Christians in Asia Minor' },
  { num: 61, name: '2 Peter', testament: 'New Testament', section: 'Letters', author: 'Peter', chapters: 3, theme: 'Growing in grace, warning against false teachers, and the certainty of Christ’s return', keyVerse: '2 Peter 3:9', event: 'Peter’s farewell reminder before his departure' },
  { num: 62, name: '1 John', testament: 'New Testament', section: 'Letters', author: 'John the Apostle', chapters: 5, theme: 'Fellowship with God who is light and love, and assurance of eternal life', keyVerse: '1 John 4:8', event: 'Tests of genuine faith, love, and truth' },
  { num: 63, name: '2 John', testament: 'New Testament', section: 'Letters', author: 'John the Apostle', chapters: 1, theme: 'Walking in truth and love while refusing hospitality to deceivers', keyVerse: '2 John 1:6', event: 'Letter to the elect lady and her children' },
  { num: 64, name: '3 John', testament: 'New Testament', section: 'Letters', author: 'John the Apostle', chapters: 1, theme: 'Commending Gaius for hospitality to gospel workers and rebuking Diotrephes', keyVerse: '3 John 1:4', event: 'Personal letter to beloved Gaius' },
  { num: 65, name: 'Jude', testament: 'New Testament', section: 'Letters', author: 'Jude (brother of James)', chapters: 1, theme: 'Contending earnestly for the faith once for all delivered to the saints', keyVerse: 'Jude 1:3', event: 'Urgent warning against ungodly false teachers' },
  // Prophecy NT (1)
  { num: 66, name: 'Revelation', testament: 'New Testament', section: 'Revelation', author: 'John the Apostle', chapters: 22, theme: 'The unveiling of Jesus Christ, letters to seven churches, final judgment, and New Jerusalem', keyVerse: 'Revelation 21:4', event: 'Apocalyptic visions given to John on the island of Patmos' },
];

export const BIBLE_CHARACTERS_DATA = [
  { name: 'Adam', testament: 'Old Testament', role: 'First Man', reference: 'Genesis 2:7', clues: ['Formed by God from the dust of the ground.', 'Placed in the Garden of Eden to tend and keep it.', 'Named all the livestock, birds, and beasts of the field.'], story: 'First human created by God in Genesis', options: ['Adam', 'Noah', 'Enoch', 'Seth'] },
  { name: 'Eve', testament: 'Old Testament', role: 'First Woman', reference: 'Genesis 3:20', clues: ['Fashioned from a rib taken from the first man.', 'Deceived by the serpent in the Garden of Eden.', 'Named "the mother of all living."'], story: 'First woman and mother of all living', options: ['Eve', 'Sarah', 'Rebekah', 'Rachel'] },
  { name: 'Noah', testament: 'Old Testament', role: 'Patriarch', reference: 'Genesis 6:8-22', clues: ['Found grace in the eyes of the Lord when the earth was corrupt.', 'Father of Shem, Ham, and Japheth.', 'Built an ark of gopher wood to survive the global flood.'], story: 'Builder of the Ark during the Great Flood', options: ['Noah', 'Abraham', 'Lot', 'Methuselah'] },
  { name: 'Abraham', testament: 'Old Testament', role: 'Patriarch', reference: 'Genesis 12:1-3', clues: ['Called by God to leave Ur of the Chaldeans and Haran for Canaan.', 'Received the covenant promise that all nations would be blessed through his seed.', 'Was willing to offer his beloved son Isaac on Mount Moriah.'], story: 'Father of a multitude of nations', options: ['Abraham', 'Isaac', 'Jacob', 'Terah'] },
  { name: 'Sarah', testament: 'Old Testament', role: 'Matriarch', reference: 'Genesis 21:1-3', clues: ['Wife of Abraham who accompanied him from Haran to Canaan.', 'Laughed when she overheard the promise that she would bear a son in old age.', 'Gave birth to Isaac at ninety years old.'], story: 'Mother of Isaac in her old age', options: ['Sarah', 'Hagar', 'Rebekah', 'Leah'] },
  { name: 'Isaac', testament: 'Old Testament', role: 'Patriarch', reference: 'Genesis 22:9-13', clues: ['Child of promise born to Abraham and Sarah in their old age.', 'Carried the wood up Mount Moriah where God provided a ram in his place.', 'Married Rebekah and fathered twin sons Esau and Jacob.'], story: 'Son of promise spared on Mount Moriah', options: ['Isaac', 'Ishmael', 'Jacob', 'Joseph'] },
  { name: 'Rebekah', testament: 'Old Testament', role: 'Matriarch', reference: 'Genesis 24:15-20', clues: ['Drew water for Abraham’s servant and his ten camels at the well in Nahor.', 'Left her family in Mesopotamia to marry Isaac.', 'Mother of twin brothers Esau and Jacob.'], story: 'Wife of Isaac chosen at the well', options: ['Rebekah', 'Rachel', 'Sarah', 'Zipporah'] },
  { name: 'Jacob', testament: 'Old Testament', role: 'Patriarch', reference: 'Genesis 28:12; 32:28', clues: ['Dreamed at Bethel of a ladder reaching heaven with angels ascending and descending.', 'Wrestled with a heavenly messenger at Peniel until daybreak.', 'Given the covenant name Israel and fathered the twelve tribes.'], story: 'Renamed Israel after wrestling at Peniel', options: ['Jacob', 'Esau', 'Laban', 'Isaac'] },
  { name: 'Rachel', testament: 'Old Testament', role: 'Matriarch', reference: 'Genesis 29:18-20', clues: ['Shepherdess daughter of Laban whom Jacob loved.', 'Jacob served seven years for her hand, which seemed to him but a few days.', 'Mother of Joseph and Benjamin.'], story: 'Beloved wife of Jacob and mother of Joseph', options: ['Rachel', 'Leah', 'Bilhah', 'Zilpah'] },
  { name: 'Joseph', testament: 'Old Testament', role: 'Ruler / Patriarch', reference: 'Genesis 37:3; 41:41', clues: ['Given a coat of many colors by his father Jacob and sold into Egypt by his brothers.', 'Interpreted Pharaoh’s dreams of seven fat cows and seven lean cows.', 'Made second-in-command over Egypt and saved his family from famine.'], story: 'Dreamer who became governor of Egypt', options: ['Joseph', 'Benjamin', 'Judah', 'Reuben'] },
  { name: 'Moses', testament: 'Old Testament', role: 'Prophet / Lawgiver', reference: 'Exodus 3:2-10; 14:21', clues: ['Hidden in a basket of bulrushes on the Nile and raised by Pharaoh’s daughter.', 'Called by God from a burning bush on Mount Horeb.', 'Led Israel out of Egypt across the Red Sea and received the Ten Commandments.'], story: 'Deliverer of Israel and receiver of the Law at Sinai', options: ['Moses', 'Aaron', 'Joshua', 'Caleb'] },
  { name: 'Aaron', testament: 'Old Testament', role: 'First High Priest', reference: 'Exodus 28:1; Numbers 17:8', clues: ['Older brother and spokesman for Moses before Pharaoh.', 'Consecrated as Israel’s first High Priest.', 'His almond rod budded, blossomed, and yielded ripe almonds overnight.'], story: 'First High Priest of Israel', options: ['Aaron', 'Moses', 'Eleazar', 'Hur'] },
  { name: 'Miriam', testament: 'Old Testament', role: 'Prophetess', reference: 'Exodus 15:20-21', clues: ['Watched over her baby brother’s basket among the reeds of the Nile.', 'Sister of Moses and Aaron.', 'Led the women of Israel with timbrels and dancing after crossing the Red Sea.'], story: 'Prophetess who led praise at the Red Sea', options: ['Miriam', 'Deborah', 'Zipporah', 'Hannah'] },
  { name: 'Joshua', testament: 'Old Testament', role: 'Leader', reference: 'Joshua 1:1-2; 6:20', clues: ['Son of Nun who served as Moses’ assistant and was one of the two faithful spies.', 'Commissioned to lead Israel across the Jordan River into Canaan.', 'Led the march around Jericho and declared, "As for me and my house, we will serve the Lord."'], story: 'Successor to Moses who led the conquest of Canaan', options: ['Joshua', 'Caleb', 'Gideon', 'Othniel'] },
  { name: 'Caleb', testament: 'Old Testament', role: 'Spy / Leader', reference: 'Numbers 14:24; Joshua 14:12', clues: ['Spy from the tribe of Judah who brought back a good report of Canaan with Joshua.', 'Followed the Lord wholly despite the giants in the land.', 'At eighty-five years old, requested and conquered the hill country of Hebron.'], story: 'Faithful spy who inherited Hebron at age 85', options: ['Caleb', 'Joshua', 'Phinehas', 'Boaz'] },
  { name: 'Rahab', testament: 'Old Testament', role: 'Heroine of Faith', reference: 'Joshua 2:1-21', clues: ['Lived on the city wall of Jericho and hid two Israelite spies under stalks of flax.', 'Hung a scarlet cord in her window as a sign of protection.', 'Spared when Jericho fell and entered the lineage of King David and Jesus.'], story: 'Woman of Jericho who hid the spies and hung a scarlet cord', options: ['Rahab', 'Ruth', 'Tamar', 'Jael'] },
  { name: 'Deborah', testament: 'Old Testament', role: 'Judge / Prophetess', reference: 'Judges 4:4-9', clues: ['Held court under a palm tree between Ramah and Bethel in the hill country of Ephraim.', 'Summoned Barak to battle against Sisera’s 900 iron chariots.', 'Sang a famous victory hymn in Judges 5 after Canaan’s defeat.'], story: 'Prophetess and Judge who led Israel to victory over Sisera', options: ['Deborah', 'Jael', 'Miriam', 'Huldah'] },
  { name: 'Gideon', testament: 'Old Testament', role: 'Judge', reference: 'Judges 6:12; 7:7', clues: ['Was threshing wheat in a winepress when the Angel of the Lord called him a mighty man of valor.', 'Asked for a sign with a wool fleece wet and dry.', 'Defeated the vast Midianite army with only 300 men carrying trumpets, jars, and torches.'], story: 'Judge who defeated Midian with 300 men', options: ['Gideon', 'Samson', 'Jephthah', 'Ehud'] },
  { name: 'Samson', testament: 'Old Testament', role: 'Judge', reference: 'Judges 13:5; 16:17-30', clues: ['Dedicated as a Nazirite from birth with a vow that no razor should touch his head.', 'Tore a lion apart with his bare hands and posed a riddle about honey in its carcass.', 'Betrayed by Delilah, lost his strength when his hair was cut, and pulled down Dagon’s temple.'], story: 'Nazirite judge gifted with supernatural physical strength', options: ['Samson', 'Gideon', 'Saul', 'Barak'] },
  { name: 'Ruth', testament: 'Old Testament', role: 'Ancestor of David', reference: 'Ruth 1:16; 4:13', clues: ['Moabite widow who refused to leave her mother-in-law Naomi.', 'Declared, "Your people shall be my people, and your God my God."', 'Gleaned in the fields of Bethlehem, married Boaz, and became great-grandmother of King David.'], story: 'Loyal Moabite widow redeemed by Boaz', options: ['Ruth', 'Naomi', 'Orpah', 'Esther'] },
  { name: 'Hannah', testament: 'Old Testament', role: 'Mother of Samuel', reference: '1 Samuel 1:10-20', clues: ['Wept and prayed silently at the tabernacle in Shiloh for a son while Eli watched.', 'Vowed to dedicate her child to the Lord for all the days of his life.', 'Mother of the prophet Samuel who sang a prayer of exaltation in 1 Samuel 2.'], story: 'Prayerful mother who dedicated Samuel to the Lord', options: ['Hannah', 'Elizabeth', 'Sarah', 'Rachel'] },
  { name: 'Samuel', testament: 'Old Testament', role: 'Prophet / Judge', reference: '1 Samuel 3:10; 16:13', clues: ['Ministered as a boy under Eli at Shiloh when God called his name in the night.', 'Answered, "Speak, Lord, for your servant hears."', 'Last judge of Israel who anointed both King Saul and King David.'], story: 'Prophet who anointed Saul and David', options: ['Samuel', 'Eli', 'Nathan', 'Elijah'] },
  { name: 'Saul', testament: 'Old Testament', role: 'First King of Israel', reference: '1 Samuel 9:2; 10:1', clues: ['From the tribe of Benjamin, standing head and shoulders taller than anyone else.', 'Anointed by Samuel while searching for his father Kish’s lost donkeys.', 'First king of Israel whose disobedience at Gilgal and against Amalek cost him the dynasty.'], story: 'First King of Israel from the tribe of Benjamin', options: ['Saul', 'David', 'Jonathan', 'Abner'] },
  { name: 'Jonathan', testament: 'Old Testament', role: 'Prince / Friend of David', reference: '1 Samuel 14:6; 18:1-4', clues: ['Brave son of King Saul who routed a Philistine garrison with only his armor-bearer.', 'Knit his soul in loyal covenant friendship with David, giving him his robe and bow.', 'Warned David of Saul’s plot using arrows in a field.'], story: 'Loyal friend of David and son of Saul', options: ['Jonathan', 'David', 'Absalom', 'Joab'] },
  { name: 'David', testament: 'Old Testament', role: 'King / Psalmist', reference: '1 Samuel 16:13; 17:49', clues: ['Youngest son of Jesse of Bethlehem who tended sheep and played the harp.', 'Defeated the Philistine champion Goliath with a sling and a stone.', 'Second king of Israel, described as a man after God’s own heart, and author of many Psalms.'], story: 'Shepherd boy who became Israel’s greatest king', options: ['David', 'Solomon', 'Saul', 'Samuel'] },
  { name: 'Solomon', testament: 'Old Testament', role: 'King of Israel', reference: '1 Kings 3:9-12; 6:1', clues: ['Son of David and Bathsheba who succeeded his father on the throne.', 'Asked God at Gibeon for an understanding heart to discern between good and evil.', 'Built the glorious First Temple in Jerusalem and authored Proverbs.'], story: 'Wisest king who built the First Temple in Jerusalem', options: ['Solomon', 'David', 'Hezekiah', 'Josiah'] },
  { name: 'Elijah', testament: 'Old Testament', role: 'Prophet', reference: '1 Kings 17:1; 18:38; 2 Kings 2:11', clues: ['Tishbite prophet fed by ravens by the brook Cherith during a three-year drought.', 'Confronted the prophets of Baal on Mount Carmel where fire fell from heaven.', 'Taken up into heaven in a whirlwind with a chariot and horses of fire.'], story: 'Prophet of fire on Mount Carmel', options: ['Elijah', 'Elisha', 'Isaiah', 'Jeremiah'] },
  { name: 'Elisha', testament: 'Old Testament', role: 'Prophet', reference: '2 Kings 2:9; 5:14', clues: ['Plowing with twelve yoke of oxen when Elijah cast his mantle upon him.', 'Asked for a double portion of Elijah’s spirit.', 'Instructed Naaman the Syrian commander to wash seven times in the Jordan River to be healed of leprosy.'], story: 'Successor to Elijah who healed Naaman', options: ['Elisha', 'Elijah', 'Gehazi', 'Jonah'] },
  { name: 'Hezekiah', testament: 'Old Testament', role: 'King of Judah', reference: '2 Kings 18:4-5; 19:14', clues: ['Righteous king of Judah who tore down the high places and broke the bronze serpent Nehushtan.', 'Spread Sennacherib’s threatening letter before the Lord in the Temple, and an angel struck 185,000 Assyrians.', 'Granted fifteen additional years of life when he prayed during a fatal illness.'], story: 'Godly king of Judah delivered from Sennacherib', options: ['Hezekiah', 'Josiah', 'Uzziah', 'Jehoshaphat'] },
  { name: 'Josiah', testament: 'Old Testament', role: 'King of Judah', reference: '2 Kings 22:1-13; 23:25', clues: ['Became king of Judah at only eight years old.', 'Tore his clothes in repentance when Hilkiah found the Book of the Law during temple repairs.', 'Led a sweeping covenant renewal and celebrated a historic Passover.'], story: 'Boy king who rediscovered the Book of the Law', options: ['Josiah', 'Hezekiah', 'Joash', 'Manasseh'] },
  { name: 'Isaiah', testament: 'Old Testament', role: 'Prophet', reference: 'Isaiah 6:1-8; 53:5', clues: ['Saw the Lord high and lifted up in the temple with seraphim crying "Holy, holy, holy."', 'Touched on the lips with a live coal and answered, "Here am I! Send me."', 'Prophesied of the virgin birth (Immanuel) and the Suffering Servant pierced for our transgressions.'], story: 'Messianic prophet who saw the Lord high and lifted up', options: ['Isaiah', 'Jeremiah', 'Ezekiel', 'Daniel'] },
  { name: 'Jeremiah', testament: 'Old Testament', role: 'Prophet', reference: 'Jeremiah 1:5; 31:31; 38:6', clues: ['Known as the "weeping prophet" from Anathoth, called before he was formed in the womb.', 'Lowered into a muddy cistern for warning that Jerusalem would fall to Babylon.', 'Prophesied the seventy-year exile and the New Covenant written on the heart.'], story: 'Weeping prophet who foretold the New Covenant', options: ['Jeremiah', 'Isaiah', 'Ezekiel', 'Baruch'] },
  { name: 'Daniel', testament: 'Old Testament', role: 'Prophet / Statesman', reference: 'Daniel 1:8; 6:10-22', clues: ['Taken captive to Babylon as a youth and resolved not to defile himself with the king’s food.', 'Interpreted Nebuchadnezzar’s dreams and the handwriting on the wall ("Mene, Mene, Tekel, Upharsin").', 'Protected by an angel when thrown into the lions’ den for praying three times daily.'], story: 'Faithful prophet in Babylon who survived the lions’ den', options: ['Daniel', 'Ezekiel', 'Nehemiah', 'Ezra'] },
  { name: 'Esther', testament: 'Old Testament', role: 'Queen of Persia', reference: 'Esther 2:17; 4:14-16', clues: ['Jewish orphan named Hadassah raised by her cousin Mordecai in Susa.', 'Chosen as Queen of Persia by King Ahasuerus.', 'Risked her life approaching the king uninvited ("If I perish, I perish") to save her people from Haman.'], story: 'Brave Jewish Queen who saved her people in Persia', options: ['Esther', 'Ruth', 'Vashti', 'Deborah'] },
  { name: 'Nehemiah', testament: 'Old Testament', role: 'Governor / Cupbearer', reference: 'Nehemiah 1:11; 6:15', clues: ['Served as cupbearer to King Artaxerxes in Susa when he heard Jerusalem’s walls lay in ruins.', 'Received royal permission to return and rebuild Jerusalem’s walls despite Sanballat and Tobiah’s opposition.', 'Completed the wall in just fifty-two days with builders holding a tool in one hand and a weapon in the other.'], story: 'Cupbearer who rebuilt Jerusalem’s walls in 52 days', options: ['Nehemiah', 'Ezra', 'Zerubbabel', 'Mordecai'] },
  { name: 'Job', testament: 'Old Testament', role: 'Patriarch', reference: 'Job 1:1-21; 42:10', clues: ['Blameless and upright man from the land of Uz who feared God and turned away from evil.', 'Lost his children, wealth, and health in severe testing yet refused to curse God.', 'Declared "I know that my Redeemer lives" and had his fortunes restored twofold after God spoke from the whirlwind.'], story: 'Righteous sufferer of Uz who persevered in faith', options: ['Job', 'Eliphaz', 'Elihu', 'Noah'] },
  { name: 'Jonah', testament: 'Old Testament', role: 'Prophet', reference: 'Jonah 1:3-17; 3:5', clues: ['Son of Amittai commanded to cry out against Nineveh, but boarded a ship to Tarshish instead.', 'Swallowed by a great fish appointed by the Lord and prayed from its belly for three days.', 'Preached to Nineveh, resulting in the entire city repenting in sackcloth from the king on down.'], story: 'Reluctant prophet swallowed by a great fish', options: ['Jonah', 'Nahum', 'Amos', 'Micah'] },
  { name: 'John the Baptist', testament: 'New Testament', role: 'Forerunner of Christ', reference: 'Matthew 3:1-4; John 1:29', clues: ['Son of Zechariah and Elizabeth who lived in the wilderness wearing camel’s hair and eating locusts and wild honey.', 'Preached a baptism of repentance in the Jordan River as the voice crying in the wilderness.', 'Pointed to Jesus and declared, "Behold, the Lamb of God, who takes away the sin of the world!"'], story: 'Forerunner who baptized Jesus in the Jordan', options: ['John the Baptist', 'Peter', 'Elijah', 'Andrew'] },
  { name: 'Mary (Mother of Jesus)', testament: 'New Testament', role: 'Mother of Jesus', reference: 'Luke 1:26-38; 1:46', clues: ['Virgin of Nazareth betrothed to Joseph of the house of David.', 'Visited by the angel Gabriel and responded, "Behold, I am the servant of the Lord; let it be to me according to your word."', 'Sang the Magnificat ("My soul magnifies the Lord") and stood near the cross of Jesus.'], story: 'Mother of Jesus who Magnified the Lord', options: ['Mary (Mother of Jesus)', 'Mary Magdalene', 'Martha', 'Elizabeth'] },
  { name: 'Simon Peter', testament: 'New Testament', role: 'Apostle', reference: 'Matthew 14:29; 16:16; Acts 2:14', clues: ['Fisherman of Bethsaida and Capernaum, brother of Andrew, called by Jesus to be a fisher of men.', 'Stepped out of the boat to walk on water and confessed, "You are the Christ, the Son of the living God."', 'Denied Jesus three times, was restored by the sea ("Feed my sheep"), and preached at Pentecost where 3,000 believed.'], story: 'Apostle who confessed Christ and preached at Pentecost', options: ['Simon Peter', 'John', 'James', 'Andrew'] },
  { name: 'John the Apostle', testament: 'New Testament', role: 'Apostle / Evangelist', reference: 'Mark 3:17; John 19:26; Revelation 1:9', clues: ['Son of Zebedee and brother of James, nicknamed one of the "Sons of Thunder."', 'Known as "the disciple whom Jesus loved," entrusted with caring for Mary at the cross.', 'Wrote the fourth Gospel, three epistles, and the book of Revelation while exiled on Patmos.'], story: 'Beloved disciple and author of the Gospel of John and Revelation', options: ['John the Apostle', 'Simon Peter', 'Matthew', 'Luke'] },
  { name: 'Paul (Saul of Tarsus)', testament: 'New Testament', role: 'Apostle to the Gentiles', reference: 'Acts 9:3-15; 2 Timothy 4:7', clues: ['Pharisee born in Tarsus and trained under Gamaliel who initially persecuted the church.', 'Blinded by a heavenly light on the road to Damascus where the risen Jesus asked, "Saul, Saul, why are you persecuting me?"', 'Conducted three missionary journeys, wrote thirteen New Testament epistles, and testified before Roman rulers.'], story: 'Converted Pharisee who became Apostle to the Gentiles', options: ['Paul (Saul of Tarsus)', 'Barnabas', 'Silas', 'Timothy'] },
  { name: 'Stephen', testament: 'New Testament', role: 'Deacon / First Martyr', reference: 'Acts 6:5; 7:55-60', clues: ['One of the seven men full of the Spirit and wisdom chosen to serve the Jerusalem church.', 'Face shone like the face of an angel as he recounted Israel’s history before the Sanhedrin.', 'Became the first Christian martyr, gazing into heaven to see Jesus standing at God’s right hand and praying for his executioners.'], story: 'First Christian martyr full of grace and power', options: ['Stephen', 'Philip', 'Barnabas', 'James'] },
  { name: 'Barnabas', testament: 'New Testament', role: 'Missionary', reference: 'Acts 4:36; 9:27; 13:2', clues: ['Levite from Cyprus named Joseph, whom the apostles called "Son of Encouragement."', 'Vouched for newly converted Saul before the wary disciples in Jerusalem.', 'Sent out by the Antioch church with Paul on the first missionary journey and mentored young John Mark.'], story: 'Son of Encouragement and missionary partner of Paul', options: ['Barnabas', 'Silas', 'Apollos', 'Timothy'] },
  { name: 'Lydia', testament: 'New Testament', role: 'First European Convert', reference: 'Acts 16:14-15', clues: ['Seller of purple goods from the city of Thyatira who worshiped God.', 'Listened to Paul by the riverside outside Philippi as the Lord opened her heart.', 'Was baptized with her household and insisted that Paul’s missionary team stay at her home.'], story: 'Seller of purple in Philippi whose heart the Lord opened', options: ['Lydia', 'Priscilla', 'Phoebe', 'Dorcas'] },
  { name: 'Timothy', testament: 'New Testament', role: 'Pastor / Companion of Paul', reference: 'Acts 16:1; 2 Timothy 1:5; 3:15', clues: ['Young disciple from Lystra taught the sacred Scriptures from childhood by his grandmother Lois and mother Eunice.', 'Joined Paul on his missionary travels as a beloved "true child in the faith."', 'Left in Ephesus to shepherd the church and received two pastoral letters bearing his name.'], story: 'Faithful young pastor and spiritual son of Paul', options: ['Timothy', 'Titus', 'Epaphroditus', 'Onesimus'] },
  { name: 'Priscilla and Aquila', testament: 'New Testament', role: 'Tentmakers / Teachers', reference: 'Acts 18:2-3; 18:26', clues: ['Married Jewish Christian tentmakers who met Paul in Corinth after Claudius expelled Jews from Rome.', 'Hosted church gatherings in their home and risked their necks for Paul’s life.', 'Took eloquent Apollos aside in Ephesus and explained the way of God to him more accurately.'], story: 'Tentmaking couple who instructed Apollos', options: ['Priscilla and Aquila', 'Ananias and Sapphira', 'Zechariah and Elizabeth', 'Philemon and Apphia'] },
  { name: 'Zacchaeus', testament: 'New Testament', role: 'Chief Tax Collector', reference: 'Luke 19:1-10', clues: ['Wealthy chief tax collector in Jericho who was short in stature.', 'Climbed up into a sycamore-fig tree to see Jesus passing through the crowd.', 'Joyfully welcomed Jesus into his house and pledged to give half his goods to the poor and restore fourfold anyone he had defrauded.'], story: 'Chief tax collector of Jericho who climbed a sycamore tree', options: ['Zacchaeus', 'Matthew', 'Nicodemus', 'Bartimaeus'] },
  { name: 'Nicodemus', testament: 'New Testament', role: 'Pharisee / Ruler', reference: 'John 3:1-16; 19:39', clues: ['Pharisee and member of the Jewish ruling council who came to Jesus by night.', 'Heard Jesus explain what it means to be born again of water and the Spirit (John 3:16).', 'Later defended Jesus’ right to a hearing and brought seventy-five pounds of myrrh and aloes for Jesus’ burial.'], story: 'Pharisee who visited Jesus by night and helped bury Him', options: ['Nicodemus', 'Joseph of Arimathea', 'Gamaliel', 'Caiaphas'] },
  { name: 'Cornelius', testament: 'New Testament', role: 'Roman Centurion', reference: 'Acts 10:1-48', clues: ['Devout Roman centurion of the Italian Cohort stationed at Caesarea who feared God and gave alms generously.', 'Instructed by an angel in a vision to send men to Joppa for Simon Peter.', 'Along with his household, became the first Gentile converts to receive the Holy Spirit and baptism when Peter preached.'], story: 'Roman centurion in Caesarea whose household received the Holy Spirit', options: ['Cornelius', 'Julius', 'Sergius Paulus', 'Felix'] },
];

export const WHO_SAID_IT_QUOTES = [
  { quote: 'Am I my brother’s keeper?', speaker: 'Cain', options: ['Cain', 'Abel', 'Esau', 'Lamech'], reference: 'Genesis 4:9', explanation: 'Cain spoke these evasive words to the Lord after murdering his brother Abel in the field.' },
  { quote: 'Here is the fire and the wood, but where is the lamb for a burnt offering?', speaker: 'Isaac', options: ['Isaac', 'Abraham', 'Jacob', 'Aaron'], reference: 'Genesis 22:7', explanation: 'Young Isaac asked his father Abraham this question as they ascended Mount Moriah.' },
  { quote: 'As for you, you meant evil against me, but God meant it for good, to bring it about that many people should be kept alive.', speaker: 'Joseph', options: ['Joseph', 'Jacob', 'Moses', 'David'], reference: 'Genesis 50:20', explanation: 'Joseph comforted his brothers in Egypt after Jacob’s death, recognizing God’s sovereign providence.' },
  { quote: 'Who am I that I should go to Pharaoh and bring the children of Israel out of Egypt?', speaker: 'Moses', options: ['Moses', 'Aaron', 'Joshua', 'Gideon'], reference: 'Exodus 3:11', explanation: 'Moses expressed his inadequacy when God called him from the burning bush at Horeb.' },
  { quote: 'As for me and my house, we will serve the Lord.', speaker: 'Joshua', options: ['Joshua', 'Moses', 'Caleb', 'Samuel'], reference: 'Joshua 24:15', explanation: 'Joshua declared his household’s covenant commitment to the Lord during his farewell address at Shechem.' },
  { quote: 'Where you go I will go, and where you lodge I will lodge. Your people shall be my people, and your God my God.', speaker: 'Ruth', options: ['Ruth', 'Naomi', 'Orpah', 'Esther'], reference: 'Ruth 1:16', explanation: 'Ruth pledged unwavering loyalty to her mother-in-law Naomi and to the God of Israel.' },
  { quote: 'Speak, Lord, for your servant hears.', speaker: 'Samuel', options: ['Samuel', 'Eli', 'David', 'Solomon'], reference: '1 Samuel 3:9-10', explanation: 'Young Samuel responded to the voice of the Lord in the tabernacle at Shiloh.' },
  { quote: 'You come to me with a sword and with a spear and with a javelin, but I come to you in the name of the Lord of hosts.', speaker: 'David', options: ['David', 'Jonathan', 'Saul', 'Gideon'], reference: '1 Samuel 17:45', explanation: 'David boldly confronted the Philistine giant Goliath in the Valley of Elah.' },
  { quote: 'Give your servant therefore an understanding mind to govern your people, that I may discern between good and evil.', speaker: 'Solomon', options: ['Solomon', 'David', 'Hezekiah', 'Josiah'], reference: '1 Kings 3:9', explanation: 'King Solomon prayed for wisdom rather than riches or long life when God appeared to him at Gibeon.' },
  { quote: 'How long will you go limping between two different opinions? If the Lord is God, follow him; but if Baal, then follow him.', speaker: 'Elijah', options: ['Elijah', 'Elisha', 'Isaiah', 'Moses'], reference: '1 Kings 18:21', explanation: 'Elijah challenged the people of Israel on Mount Carmel before calling down fire from heaven.' },
  { quote: 'If I perish, I perish.', speaker: 'Esther', options: ['Esther', 'Ruth', 'Deborah', 'Hannah'], reference: 'Esther 4:16', explanation: 'Queen Esther resolved to approach King Ahasuerus uninvited after three days of fasting to save the Jewish people.' },
  { quote: 'Naked I came from my mother’s womb, and naked shall I return. The Lord gave, and the Lord has taken away; blessed be the name of the Lord.', speaker: 'Job', options: ['Job', 'David', 'Solomon', 'Abraham'], reference: 'Job 1:21', explanation: 'Job worshiped God and did not sin with his lips after losing his possessions and children.' },
  { quote: 'Here am I! Send me.', speaker: 'Isaiah', options: ['Isaiah', 'Jeremiah', 'Ezekiel', 'Samuel'], reference: 'Isaiah 6:8', explanation: 'Isaiah volunteered to be God’s messenger after his lips were cleansed in the temple vision.' },
  { quote: 'Our God whom we serve is able to deliver us from the burning fiery furnace... But if not, be it known to you, O king, that we will not serve your gods.', speaker: 'Shadrach, Meshach, and Abednego', options: ['Shadrach, Meshach, and Abednego', 'Daniel', 'Ezekiel', 'Nehemiah'], reference: 'Daniel 3:17-18', explanation: 'The three Hebrew youths refused to bow to Nebuchadnezzar’s golden image on the plain of Dura.' },
  { quote: 'I am doing a great work and I cannot come down.', speaker: 'Nehemiah', options: ['Nehemiah', 'Ezra', 'Zerubbabel', 'Solomon'], reference: 'Nehemiah 6:3', explanation: 'Nehemiah refused to be distracted by Sanballat and Geshem’s schemes while rebuilding Jerusalem’s wall.' },
  { quote: 'Behold, the Lamb of God, who takes away the sin of the world!', speaker: 'John the Baptist', options: ['John the Baptist', 'Simon Peter', 'Andrew', 'Isaiah'], reference: 'John 1:29', explanation: 'John the Baptist identified Jesus at the Jordan River as God’s sacrificial Lamb.' },
  { quote: 'My soul magnifies the Lord, and my spirit rejoices in God my Savior.', speaker: 'Mary (Mother of Jesus)', options: ['Mary (Mother of Jesus)', 'Elizabeth', 'Hannah', 'Martha'], reference: 'Luke 1:46-47', explanation: 'Mary sang this hymn of praise (the Magnificat) when visiting her relative Elizabeth.' },
  { quote: 'I am the way, and the truth, and the life. No one comes to the Father except through me.', speaker: 'Jesus', options: ['Jesus', 'Paul', 'John', 'Peter'], reference: 'John 14:6', explanation: 'Jesus spoke these words to Thomas and the disciples in the Upper Room.' },
  { quote: 'Lord, to whom shall we go? You have the words of eternal life.', speaker: 'Simon Peter', options: ['Simon Peter', 'John', 'Thomas', 'Andrew'], reference: 'John 6:68', explanation: 'Simon Peter affirmed the Twelve’s loyalty to Jesus when many disciples turned back.' },
  { quote: 'My Lord and my God!', speaker: 'Thomas', options: ['Thomas', 'Simon Peter', 'John', 'Nathanael'], reference: 'John 20:28', explanation: 'Thomas made this climactic confession of faith upon seeing the risen Jesus’ hands and side.' },
  { quote: 'Lord, do not hold this sin against them.', speaker: 'Stephen', options: ['Stephen', 'Paul', 'Peter', 'James'], reference: 'Acts 7:60', explanation: 'Stephen prayed for his executioners as he was being stoned outside Jerusalem.' },
  { quote: 'Sirs, what must I do to be saved?', speaker: 'The Philippian Jailer', options: ['The Philippian Jailer', 'Cornelius', 'The Ethiopian Eunuch', 'Sergius Paulus'], reference: 'Acts 16:30', explanation: 'The jailer in Philippi asked Paul and Silas this question after an earthquake opened the prison doors.' },
  { quote: 'For to me to live is Christ, and to die is gain.', speaker: 'Paul', options: ['Paul', 'Peter', 'John', 'Stephen'], reference: 'Philippians 1:21', explanation: 'The Apostle Paul wrote this from prison to the church at Philippi.' },
  { quote: 'Silver and gold have I none, but such as I have give I thee: In the name of Jesus Christ of Nazareth rise up and walk.', speaker: 'Simon Peter', options: ['Simon Peter', 'Paul', 'John', 'Philip'], reference: 'Acts 3:6', explanation: 'Peter spoke these words to the lame beggar at the Beautiful Gate of the temple.' },
  { quote: 'Almost you persuade me to become a Christian.', speaker: 'King Agrippa', options: ['King Agrippa', 'Pontius Pilate', 'Felix', 'Festus'], reference: 'Acts 26:28', explanation: 'King Herod Agrippa II replied to Paul’s passionate defense and appeal in Caesarea.' },
  { quote: 'What is truth?', speaker: 'Pontius Pilate', options: ['Pontius Pilate', 'Caiaphas', 'Herod Antipas', 'Centurion'], reference: 'John 18:38', explanation: 'Roman governor Pontius Pilate asked Jesus this question during His trial.' },
  { quote: 'Truly this man was the Son of God!', speaker: 'The Roman Centurion', options: ['The Roman Centurion', 'Pontius Pilate', 'Joseph of Arimathea', 'Simon of Cyrene'], reference: 'Mark 15:39', explanation: 'The centurion standing opposite the cross confessed this when he saw how Jesus breathed His last.' },
  { quote: 'Look, here is water! What prevents me from being baptized?', speaker: 'The Ethiopian Eunuch', options: ['The Ethiopian Eunuch', 'Cornelius', 'Lydia', 'Simon Magus'], reference: 'Acts 8:36', explanation: 'The Ethiopian official responded to Philip’s explanation of Isaiah 53 along the desert road to Gaza.' },
  { quote: 'I have fought the good fight, I have finished the race, I have kept the faith.', speaker: 'Paul', options: ['Paul', 'Peter', 'Timothy', 'John'], reference: '2 Timothy 4:7', explanation: 'Paul wrote this farewell reflection to Timothy near the end of his life in Rome.' },
  { quote: 'Father, forgive them, for they know not what they do.', speaker: 'Jesus', options: ['Jesus', 'Stephen', 'Peter', 'Paul'], reference: 'Luke 23:34', explanation: 'Jesus prayed for those crucifying Him at Calvary.' },
];

export const COMPLETE_SCRIPTURE_VERSES = [
  { full: 'For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.', blanked: 'For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not _____, but have everlasting life.', missing: 'perish', options: ['perish', 'faint', 'fear', 'stumble'], reference: 'John 3:16', explanation: 'John 3:16 declares God’s saving love so that believers do not perish but receive eternal life.' },
  { full: 'The Lord is my shepherd; I shall not want.', blanked: 'The Lord is my _____; I shall not want.', missing: 'shepherd', options: ['shepherd', 'fortress', 'captain', 'shield'], reference: 'Psalm 23:1', explanation: 'David opens Psalm 23 by portraying the Lord as a caring shepherd who provides every need.' },
  { full: 'Trust in the Lord with all thine heart; and lean not unto thine own understanding.', blanked: 'Trust in the Lord with all thine heart; and lean not unto thine own _____.', missing: 'understanding', options: ['understanding', 'strength', 'wisdom', 'wealth'], reference: 'Proverbs 3:5', explanation: 'Proverbs 3:5 calls believers to wholehearted trust in God rather than self-reliance.' },
  { full: 'Thy word is a lamp unto my feet, and a light unto my path.', blanked: 'Thy word is a _____ unto my feet, and a light unto my path.', missing: 'lamp', options: ['lamp', 'guide', 'shield', 'staff'], reference: 'Psalm 119:105', explanation: 'God’s Word illuminates every step and guides the believer’s way.' },
  { full: 'I can do all things through Christ which strengtheneth me.', blanked: 'I can do all things through Christ which _____ me.', missing: 'strengtheneth', options: ['strengtheneth', 'comforteth', 'leadeth', 'healeth'], reference: 'Philippians 4:13', explanation: 'Paul testifies that Christ’s strength empowers contentment in every circumstance.' },
  { full: 'In the beginning God created the heaven and the earth.', blanked: 'In the _____ God created the heaven and the earth.', missing: 'beginning', options: ['beginning', 'eternity', 'silence', 'morning'], reference: 'Genesis 1:1', explanation: 'The opening verse of Scripture proclaims God as Creator of all things.' },
  { full: 'For the wages of sin is death; but the gift of God is eternal life through Jesus Christ our Lord.', blanked: 'For the _____ of sin is death; but the gift of God is eternal life through Jesus Christ our Lord.', missing: 'wages', options: ['wages', 'burden', 'shadow', 'penalty'], reference: 'Romans 6:23', explanation: 'Paul contrasts the earned wages of sin with the free gift of eternal life in Christ.' },
  { full: 'But the fruit of the Spirit is love, joy, peace, longsuffering, gentleness, goodness, faith.', blanked: 'But the _____ of the Spirit is love, joy, peace, longsuffering, gentleness, goodness, faith.', missing: 'fruit', options: ['fruit', 'work', 'crown', 'voice'], reference: 'Galatians 5:22', explanation: 'The Holy Spirit produces Christlike character in the believer.' },
  { full: 'For by grace are ye saved through faith; and that not of yourselves: it is the gift of God.', blanked: 'For by _____ are ye saved through faith; and that not of yourselves: it is the gift of God.', missing: 'grace', options: ['grace', 'works', 'merit', 'law'], reference: 'Ephesians 2:8', explanation: 'Salvation is by God’s unmerited grace received through faith.' },
  { full: 'Be strong and of a good courage; be not afraid, neither be thou dismayed: for the Lord thy God is with thee whithersoever thou goest.', blanked: 'Be strong and of a good _____; be not afraid, neither be thou dismayed: for the Lord thy God is with thee whithersoever thou goest.', missing: 'courage', options: ['courage', 'patience', 'counsel', 'spirit'], reference: 'Joshua 1:9', explanation: 'God charged Joshua with courage grounded in His constant presence.' },
  { full: 'And we know that all things work together for good to them that love God, to them who are the called according to his purpose.', blanked: 'And we know that all things work together for _____ to them that love God, to them who are the called according to his purpose.', missing: 'good', options: ['good', 'peace', 'glory', 'victory'], reference: 'Romans 8:28', explanation: 'God sovereignly weaves all circumstances for the good of those who love Him.' },
  { full: 'Create in me a clean heart, O God; and renew a right spirit within me.', blanked: 'Create in me a clean _____, O God; and renew a right spirit within me.', missing: 'heart', options: ['heart', 'mind', 'hands', 'voice'], reference: 'Psalm 51:10', explanation: 'David’s penitential psalm asks God for inward cleansing and spiritual renewal.' },
  { full: 'The fear of the Lord is the beginning of knowledge: but fools despise wisdom and instruction.', blanked: 'The _____ of the Lord is the beginning of knowledge: but fools despise wisdom and instruction.', missing: 'fear', options: ['fear', 'joy', 'praise', 'law'], reference: 'Proverbs 1:7', explanation: 'Reverent awe of the Lord is the foundation of true wisdom.' },
  { full: 'Come unto me, all ye that labour and are heavy laden, and I will give you rest.', blanked: 'Come unto me, all ye that labour and are heavy laden, and I will give you _____.', missing: 'rest', options: ['rest', 'gold', 'fame', 'might'], reference: 'Matthew 11:28', explanation: 'Jesus invites the weary and burdened to find soul-rest in Him.' },
  { full: 'But seek ye first the kingdom of God, and his righteousness; and all these things shall be added unto you.', blanked: 'But seek ye first the _____ of God, and his righteousness; and all these things shall be added unto you.', missing: 'kingdom', options: ['kingdom', 'temple', 'favor', 'blessing'], reference: 'Matthew 6:33', explanation: 'In the Sermon on the Mount, Jesus teaches disciples to prioritize God’s kingdom above earthly worry.' },
  { full: 'Now faith is the substance of things hoped for, the evidence of things not seen.', blanked: 'Now _____ is the substance of things hoped for, the evidence of things not seen.', missing: 'faith', options: ['faith', 'hope', 'charity', 'prayer'], reference: 'Hebrews 11:1', explanation: 'Hebrews 11 opens the Hall of Faith by defining faith’s assurance and conviction.' },
  { full: 'Be ye doers of the word, and not hearers only, deceiving your own selves.', blanked: 'Be ye _____ of the word, and not hearers only, deceiving your own selves.', missing: 'doers', options: ['doers', 'readers', 'teachers', 'singers'], reference: 'James 1:22', explanation: 'James emphasizes putting God’s Word into obedient practice.' },
  { full: 'If we confess our sins, he is faithful and just to forgive us our sins, and to cleanse us from all unrighteousness.', blanked: 'If we _____ our sins, he is faithful and just to forgive us our sins, and to cleanse us from all unrighteousness.', missing: 'confess', options: ['confess', 'conceal', 'forget', 'excuse'], reference: '1 John 1:9', explanation: 'God promises faithful forgiveness and cleansing when believers confess their sins.' },
  { full: 'The grass withereth, the flower fadeth: but the word of our God shall stand for ever.', blanked: 'The grass withereth, the flower fadeth: but the _____ of our God shall stand for ever.', missing: 'word', options: ['word', 'house', 'city', 'mountain'], reference: 'Isaiah 40:8', explanation: 'Unlike fleeting earthly life, God’s Word endures eternally.' },
  { full: 'He hath shewed thee, O man, what is good; and what doth the Lord require of thee, but to do justly, and to love mercy, and to walk humbly with thy God?', blanked: 'He hath shewed thee, O man, what is good; and what doth the Lord require of thee, but to do justly, and to love _____, and to walk humbly with thy God?', missing: 'mercy', options: ['mercy', 'wealth', 'power', 'tribute'], reference: 'Micah 6:8', explanation: 'Micah summarizes covenant faithfulness as justice, mercy, and humble fellowship with God.' },
];

export const BIBLE_GEOGRAPHY_DATA = [
  { place: 'Bethlehem', region: 'Judea', event: 'Birthplace of King David and of Jesus the Messiah; where Ruth gleaned in Boaz’s fields.', reference: 'Micah 5:2; Luke 2:4', options: ['Bethlehem', 'Nazareth', 'Capernaum', 'Hebron'] },
  { place: 'Nazareth', region: 'Galilee', event: 'Hometown in Galilee where Gabriel appeared to Mary and where Jesus grew up in Joseph’s carpentry shop.', reference: 'Luke 1:26; 2:51', options: ['Nazareth', 'Bethlehem', 'Cana', 'Bethany'] },
  { place: 'Jerusalem', region: 'Judea', event: 'City of David, site of Solomon’s Temple, Jesus’ crucifixion and resurrection, and the Pentecost outpouring.', reference: '2 Samuel 5:7; Acts 2:1-5', options: ['Jerusalem', 'Samaria', 'Jericho', 'Antioch'] },
  { place: 'Mount Sinai (Horeb)', region: 'Wilderness of Sinai', event: 'Mountain where God spoke to Moses from the burning bush and gave Israel the Ten Commandments.', reference: 'Exodus 3:1; 19:20', options: ['Mount Sinai (Horeb)', 'Mount Carmel', 'Mount Nebo', 'Mount Tabor'] },
  { place: 'Jericho', region: 'Jordan Valley', event: 'Ancient walled city whose walls fell flat after Israel marched around it seven days; where Jesus met Zacchaeus.', reference: 'Joshua 6:20; Luke 19:1', options: ['Jericho', 'Ai', 'Gibeon', 'Lachish'] },
  { place: 'Jordan River', region: 'Rift Valley', event: 'River parted for Joshua and Israel, where Naaman dipped seven times, and where John baptized Jesus.', reference: 'Joshua 3:17; Matthew 3:13', options: ['Jordan River', 'Nile River', 'Euphrates River', 'Kishon River'] },
  { place: 'Sea of Galilee', region: 'Galilee', event: 'Freshwater lake where Jesus called fishermen, calmed the storm, and walked on water.', reference: 'Matthew 4:18; 14:25', options: ['Sea of Galilee', 'Dead Sea', 'Mediterranean Sea', 'Red Sea'] },
  { place: 'Mount Carmel', region: 'Northern Israel', event: 'Mountain ridge where Elijah challenged the 450 prophets of Baal and God answered with fire from heaven.', reference: '1 Kings 18:19-38', options: ['Mount Carmel', 'Mount Sinai', 'Mount Hermon', 'Mount Gilboa'] },
  { place: 'Nineveh', region: 'Assyria (Tigris River)', event: 'Great capital of Assyria where Jonah preached and the inhabitants repented in sackcloth.', reference: 'Jonah 3:1-5', options: ['Nineveh', 'Babylon', 'Ur', 'Damascus'] },
  { place: 'Babylon', region: 'Mesopotamia', event: 'Imperial capital where Judah was exiled under Nebuchadnezzar and where Daniel served in the royal court.', reference: 'Daniel 1:1; 2 Kings 25:7', options: ['Babylon', 'Nineveh', 'Susa', 'Memphis'] },
  { place: 'Cana of Galilee', region: 'Galilee', event: 'Village where Jesus performed His first miracle, turning water into wine at a wedding feast.', reference: 'John 2:1-11', options: ['Cana of Galilee', 'Capernaum', 'Nain', 'Bethsaida'] },
  { place: 'Capernaum', region: 'Galilee (North Shore)', event: 'Lakeside town that served as the headquarters of Jesus’ Galilean ministry and home of Peter.', reference: 'Matthew 4:13; Mark 2:1', options: ['Capernaum', 'Nazareth', 'Tiberias', 'Gadara'] },
  { place: 'Bethany', region: 'Mount of Olives (near Jerusalem)', event: 'Village two miles from Jerusalem, home of Mary, Martha, and Lazarus whom Jesus raised from the dead.', reference: 'John 11:1-44', options: ['Bethany', 'Bethphage', 'Emmaus', 'Joppa'] },
  { place: 'Damascus', region: 'Syria', event: 'Ancient Syrian city on the road to which Saul of Tarsus saw the risen Christ and was baptized via Ananias.', reference: 'Acts 9:2-18', options: ['Damascus', 'Antioch', 'Tarsus', 'Caesarea'] },
  { place: 'Antioch of Syria', region: 'Syria', event: 'Thriving church center where the disciples were first called Christians and from which Paul was sent on missions.', reference: 'Acts 11:26; 13:1-3', options: ['Antioch of Syria', 'Ephesus', 'Corinth', 'Jerusalem'] },
  { place: 'Philippi', region: 'Macedonia', event: 'Roman colony in Macedonia where Lydia was converted and Paul and Silas sang hymns in prison at midnight.', reference: 'Acts 16:12-25', options: ['Philippi', 'Thessalonica', 'Berea', 'Athens'] },
  { place: 'Athens (Areopagus)', region: 'Greece (Achaia)', event: 'Intellectual capital where Paul preached at Mars’ Hill concerning the altar "To the Unknown God."', reference: 'Acts 17:22-23', options: ['Athens (Areopagus)', 'Corinth', 'Rome', 'Ephesus'] },
  { place: 'Island of Patmos', region: 'Aegean Sea', event: 'Rocky island where the Apostle John was exiled for the Word of God and received the book of Revelation.', reference: 'Revelation 1:9', options: ['Island of Patmos', 'Malta', 'Cyprus', 'Crete'] },
  { place: 'Mount Nebo (Pisgah)', region: 'Moab', event: 'Mountain peak east of the Jordan from which Moses viewed the Promised Land before his death.', reference: 'Deuteronomy 34:1-5', options: ['Mount Nebo (Pisgah)', 'Mount Sinai', 'Mount Ebal', 'Mount Gerizim'] },
  { place: 'Ur of the Chaldeans', region: 'Mesopotamia', event: 'Ancient Mesopotamian city from which God first called Abram and his family to depart toward Canaan.', reference: 'Genesis 11:31; 15:7', options: ['Ur of the Chaldeans', 'Haran', 'Shechem', 'Beersheba'] },
];

export const BIBLE_RIDDLES_DATA = [
  { riddle: 'Out of the eater came something to eat, and out of the strong came something sweet. What two things solved this riddle at a wedding feast?', answer: 'A lion and honey', options: ['A lion and honey', 'A bear and figs', 'A ram and olive oil', 'A raven and bread'], reference: 'Judges 14:14-18', explanation: 'Samson posed this riddle to the Philistines after finding a swarm of bees and honey in the carcass of the lion he had slain.' },
  { riddle: 'I was built of gopher wood, three stories tall with a single door in my side, carrying eight souls while mountains disappeared beneath the waves. What am I?', answer: 'Noah’s Ark', options: ['Noah’s Ark', 'Solomon’s Temple', 'The Tabernacle', 'Paul’s Grain Ship'], reference: 'Genesis 6:14-16; 1 Peter 3:20', explanation: 'Noah’s Ark preserved eight people and land animals through the global flood.' },
  { riddle: 'I never was born, yet I died; I had no breath, yet I swallowed Egyptian rods whole when cast before Pharaoh. What was I?', answer: 'Aaron’s Rod', options: ['Aaron’s Rod', 'Goliath’s Spear', 'Samson’s Jawbone', 'David’s Sling'], reference: 'Exodus 7:10-12', explanation: 'Aaron’s staff became a serpent before Pharaoh and swallowed the staffs of the Egyptian magicians.' },
  { riddle: 'We fell from heaven six mornings a week like coriander seed and frost on the desert ground, tasting of wafers made with honey. What are we?', answer: 'Manna', options: ['Manna', 'Quail', 'Showbread', 'Unleavened Bread'], reference: 'Exodus 16:14-31', explanation: 'God fed Israel with manna in the wilderness for forty years until they entered Canaan.' },
  { riddle: 'I stood taller than any warrior of Gath, clad in five thousand shekels of bronze, yet a single smooth stone from a brook brought me down. Who am I?', answer: 'Goliath', options: ['Goliath', 'Og King of Bashan', 'Sisera', 'Abner'], reference: '1 Samuel 17:4-50', explanation: 'Goliath of Gath was defeated by young David with a sling and a stone.' },
  { riddle: 'I burned on Mount Horeb with bright flame, yet not a single leaf or branch of mine turned to ash as the voice of I AM spoke. What am I?', answer: 'The Burning Bush', options: ['The Burning Bush', 'Elijah’s Altar', 'Aaron’s Censer', 'Gideon’s Torch'], reference: 'Exodus 3:2-4', explanation: 'God appeared to Moses in a bush that burned with fire yet was not consumed.' },
  { riddle: 'I carried no sword and spoke no battle cry, yet when God opened my mouth on a narrow vineyard path, I rebuked a prophet to save his life from an angel’s blade. What am I?', answer: 'Balaam’s Donkey', options: ['Balaam’s Donkey', 'Elijah’s Raven', 'Jonah’s Great Fish', 'Peter’s Rooster'], reference: 'Numbers 22:22-33', explanation: 'The Lord opened the mouth of Balaam’s donkey when an angel blocked the road.' },
  { riddle: 'I held three stone jars—no, inside my gilded acacia chest rested two tablets of stone, a golden pot of manna, and a rod that budded beneath cherubim wings. What am I?', answer: 'The Ark of the Covenant', options: ['The Ark of the Covenant', 'The Bronze Laver', 'The Table of Showbread', 'The Golden Lampstand'], reference: 'Hebrews 9:4; Exodus 25:10-22', explanation: 'The Ark of the Covenant in the Most Holy Place contained the tablets of the covenant, Aaron’s budded rod, and a jar of manna.' },
  { riddle: 'I crowed twice in the chill of Jerusalem’s night, and at my sound a bold fisherman went out and wept bitterly. What am I?', answer: 'The Rooster at Peter’s Denial', options: ['The Rooster at Peter’s Denial', 'The Dove of Noah', 'The Quail in Sinai', 'The Sparrow in the Temple'], reference: 'Mark 14:72', explanation: 'Jesus foretold that before the rooster crowed twice, Peter would deny Him three times.' },
  { riddle: 'I was a seamless garment at the foot of the cross; soldiers would not tear me, so they cast lots to see who would take me, fulfilling Psalm 22. What am I?', answer: 'Jesus’ Tunic (Robe)', options: ['Jesus’ Tunic (Robe)', 'Joseph’s Coat', 'Elijah’s Mantle', 'Samuel’s Ephod'], reference: 'John 19:23-24', explanation: 'Roman soldiers cast lots for Jesus’ seamless tunic, fulfilling Psalm 22:18.' },
];

export const BIBLE_DETECTIVE_CASES = [
  { title: 'The Case of the Hidden Plunder at Ai', clue1: 'After Jericho fell under God’s strict ban, Israel suffered a shocking defeat at the small town of Ai.', clue2: 'Tribe by tribe and family by family was brought forward until one man from the tribe of Judah was identified.', clue3: 'Buried beneath his tent floor were a beautiful Babylonian garment, 200 shekels of silver, and a 50-shekel wedge of gold.', answer: 'Achan', options: ['Achan', 'Gehazi', 'Korah', 'Balaam'], reference: 'Joshua 7:19-21', explanation: 'Achan confessed to taking devoted items from Jericho and hiding them under his tent.' },
  { title: 'The Mystery of the Missing Silver Cup', clue1: 'Eleven brothers departed Egypt with sacks full of grain during a severe famine.', clue2: 'The governor’s steward overtook them and searched their sacks from the oldest down to the youngest.', clue3: 'Not only was every brother’s money returned, but the governor’s personal divining cup was found in the youngest brother’s sack as a test of their hearts.', answer: 'Benjamin’s Sack (by Joseph’s command)', options: ['Benjamin’s Sack (by Joseph’s command)', 'Simeon’s Sack', 'Judah’s Tent', 'Laban’s Household'], reference: 'Genesis 44:1-12', explanation: 'Joseph instructed his steward to place his silver cup in Benjamin’s sack to test whether his brothers would abandon Benjamin as they had once betrayed Joseph.' },
  { title: 'The Disappearing Syrian Gifts', clue1: 'A Syrian commander was healed of leprosy after washing seven times in the Jordan River, and the prophet refused any payment.', clue2: 'The prophet’s servant secretly ran after the chariot and fabricated a story about two young prophets needing silver and garments.', clue3: 'After hiding two talents of silver and two changes of festal garments in the house, the servant stood before Elisha and was struck with Naaman’s leprosy.', answer: 'Gehazi', options: ['Gehazi', 'Hazael', 'Ziba', 'Doeg'], reference: '2 Kings 5:20-27', explanation: 'Gehazi greedily pursued Naaman for silver and clothing and lied to Elisha, receiving Naaman’s leprosy as judgment.' },
  { title: 'The Case of the Two Mothers before the Throne', clue1: 'Two women who lived alone in the same house came before the young king in Jerusalem with one living infant and one deceased infant.', clue2: 'With no external witnesses, the king called for a sword and ordered the living child to be divided in half.', clue3: 'One woman cried out in anguish to give the baby to the other rather than see him harmed, revealing the true mother.', answer: 'King Solomon’s Judgment', options: ['King Solomon’s Judgment', 'Deborah under the Palm', 'Moses and the Daughters of Zelophehad', 'Samuel at Mizpah'], reference: '1 Kings 3:16-28', explanation: 'Solomon’s God-given wisdom discerned the true mother by her compassionate love for her child.' },
  { title: 'The Secret Plot at the Beautiful Gate', clue1: 'In the early Jerusalem church, believers sold property and laid the proceeds at the apostles’ feet for the needy.', clue2: 'A married couple sold a piece of land and secretly kept back part of the proceeds while claiming to donate the full price.', clue3: 'Peter confronted them for lying not to men but to the Holy Spirit.', answer: 'Ananias and Sapphira', options: ['Ananias and Sapphira', 'Simon Magus', 'Elymas the Sorcerer', 'Demas'], reference: 'Acts 5:1-11', explanation: 'Ananias and Sapphira conspired to deceive the church about their offering and fell down in judgment.' },
  { title: 'The Midnight Escape from Damascus', clue1: 'After a former persecutor began boldly proving in the synagogues that Jesus is the Christ, opponents plotted to kill him.', clue2: 'The city gates were watched day and night to prevent his departure.', clue3: 'His disciples took him by night and lowered him down through an opening in the city wall in a large basket.', answer: 'Saul (Paul)', options: ['Saul (Paul)', 'Simon Peter', 'Barnabas', 'Silas'], reference: 'Acts 9:23-25; 2 Corinthians 11:32-33', explanation: 'Disciples lowered Saul in a basket through a window in the Damascus wall so he could escape assassination.' },
  { title: 'The Case of the Unclaimed Cloak and Scrolls', clue1: 'Writing from a cold Roman dungeon near the end of his life, an apostle sent urgent instructions to Ephesus.', clue2: 'He noted that Demas had deserted him for love of this present world and only Luke remained with him.', clue3: 'He asked his young co-worker to bring the cloak left with Carpus at Troas, along with the books and above all the parchments.', answer: 'Paul writing to Timothy', options: ['Paul writing to Timothy', 'Peter writing to Mark', 'John writing to Gaius', 'Jeremiah writing to Baruch'], reference: '2 Timothy 4:9-13', explanation: 'In 2 Timothy 4:13, Paul asked Timothy to bring the cloak, scrolls, and parchments left at Troas.' },
  { title: 'The Mystery of the Wet and Dry Fleece', clue1: 'Midianite raiders were stripping Israel’s crops bare like locusts when a cautious farmer from Manasseh was called to lead.', clue2: 'On the first night on the threshing floor, a wool fleece was soaked with a bowlful of dew while all the surrounding ground stayed bone dry.', clue3: 'On the second night, the fleece remained completely dry while dew covered all the ground around it.', answer: 'Gideon', options: ['Gideon', 'Jephthah', 'Samson', 'Barak'], reference: 'Judges 6:36-40', explanation: 'God graciously confirmed His word to Gideon through the two signs of the wool fleece.' },
  { title: 'The Case of the Stolen Household Idols', clue1: 'After twenty years in Paddan-aram, a patriarch departed secretly with his wives, children, and flocks.', clue2: 'His father-in-law pursued him for seven days to the hill country of Gilead, accusing him of stealing his household gods (teraphim).', clue3: 'Unbeknownst to her husband, the favored wife had hidden the idols inside her camel’s saddle and sat upon them during the search.', answer: 'Rachel (hiding Laban’s idols)', options: ['Rachel (hiding Laban’s idols)', 'Leah', 'Michal', 'Delilah'], reference: 'Genesis 31:19-35', explanation: 'Rachel took her father Laban’s household idols and hid them in her camel’s saddle.' },
  { title: 'The Ambush of the Forty Oath-Takers', clue1: 'More than forty men in Jerusalem bound themselves by an oath neither to eat nor drink until they had killed a prisoner in Roman custody.', clue2: 'The prisoner’s young nephew overheard the ambush plot and entered the Antonia Fortress to warn his uncle and the tribune Claudius Lysias.', clue3: 'That night at the third hour, 200 soldiers, 70 horsemen, and 200 spearmen escorted the prisoner safely to Governor Felix in Caesarea.', answer: 'Paul’s Nephew warning Paul', options: ['Paul’s Nephew warning Paul', 'John Mark warning Peter', 'Timothy warning Silas', 'Barnabas warning James'], reference: 'Acts 23:12-24', explanation: 'Paul’s sister’s son heard of the ambush plot in Jerusalem and alerted Paul and the Roman commander.' },
];

export const SCRAMBLE_WORDS_BANK = [
  { word: 'GENESIS', hint: 'First book of the Bible meaning "Beginning"', reference: 'Genesis 1:1' },
  { word: 'EXODUS', hint: 'The departure of Israel out of bondage in Egypt', reference: 'Exodus 12:51' },
  { word: 'MESSIAH', hint: 'The Anointed Savior promised in the Scriptures', reference: 'John 1:41' },
  { word: 'GOLGOTHA', hint: 'Aramaic name for "Place of a Skull" where Jesus was crucified', reference: 'John 19:17' },
  { word: 'TABERNACLE', hint: 'Portable sanctuary tent of meeting in the wilderness', reference: 'Exodus 25:9' },
  { word: 'COVENANT', hint: 'Sacred binding promise and agreement established by God', reference: 'Genesis 9:12' },
  { word: 'PASSOVER', hint: 'Feast commemorating when the Lord passed over blood-marked homes in Egypt', reference: 'Exodus 12:11' },
  { word: 'BETHLEHEM', hint: 'Judean town known as the City of David where Jesus was born', reference: 'Micah 5:2' },
  { word: 'NAZARETH', hint: 'Galilean hometown where Jesus grew up in wisdom and stature', reference: 'Luke 2:51' },
  { word: 'JERUSALEM', hint: 'Holy capital city where Solomon built the Temple on Mount Moriah', reference: '2 Chronicles 3:1' },
  { word: 'SANCTUARY', hint: 'Holy place set apart for the worship and presence of God', reference: 'Exodus 25:8' },
  { word: 'PENTATEUCH', hint: 'Traditional name for the five books of the Law of Moses', reference: 'Deuteronomy 31:24' },
  { word: 'BEATITUDES', hint: 'The "Blessed are..." declarations opening the Sermon on the Mount', reference: 'Matthew 5:3-12' },
  { word: 'GETHSEMANE', hint: 'Olive grove across the Kidron Valley where Jesus prayed before His arrest', reference: 'Matthew 26:36' },
  { word: 'PENTECOST', hint: 'Feast day when the Holy Spirit descended like tongues of fire in Jerusalem', reference: 'Acts 2:1-4' },
  { word: 'REDEMPTION', hint: 'Deliverance and buying back from bondage through the blood of Christ', reference: 'Ephesians 1:7' },
  { word: 'ATONEMENT', hint: 'Reconciliation and covering of sin through sacrificial blood on Yom Kippur', reference: 'Leviticus 16:30' },
  { word: 'CHERUBIM', hint: 'Winged angelic beings overshadowing the mercy seat of the Ark', reference: 'Exodus 25:20' },
  { word: 'SERAPHIM', hint: 'Six-winged fiery beings crying "Holy, holy, holy" in Isaiah’s temple vision', reference: 'Isaiah 6:2-3' },
  { word: 'EPISTLES', hint: 'Apostolic letters written to instruct and encourage early New Testament churches', reference: '2 Peter 3:16' },
];

export const VERSE_BUILDER_BANK = [
  { reference: 'John 3:16', words: ['For', 'God', 'so', 'loved', 'the', 'world', 'that', 'he', 'gave', 'his', 'only', 'begotten', 'Son'], explanation: 'Jesus explained God’s saving love for the world to Nicodemus.' },
  { reference: 'Psalm 23:1', words: ['The', 'Lord', 'is', 'my', 'shepherd;', 'I', 'shall', 'not', 'want.'], explanation: 'David rejoices in the complete provision of the Good Shepherd.' },
  { reference: 'Proverbs 3:5', words: ['Trust', 'in', 'the', 'Lord', 'with', 'all', 'thine', 'heart', 'and', 'lean', 'not', 'unto', 'thine', 'own', 'understanding.'], explanation: 'Solomon counsels wholehearted reliance upon God’s wisdom.' },
  { reference: 'Genesis 1:1', words: ['In', 'the', 'beginning', 'God', 'created', 'the', 'heaven', 'and', 'the', 'earth.'], explanation: 'Scripture opens with God sovereignly creating the cosmos.' },
  { reference: 'Philippians 4:13', words: ['I', 'can', 'do', 'all', 'things', 'through', 'Christ', 'which', 'strengtheneth', 'me.'], explanation: 'Paul testifies to Christ’s sustaining power in every season.' },
  { reference: 'Psalm 119:105', words: ['Thy', 'word', 'is', 'a', 'lamp', 'unto', 'my', 'feet,', 'and', 'a', 'light', 'unto', 'my', 'path.'], explanation: 'God’s Word illuminates the believer’s daily walk.' },
  { reference: 'Romans 8:28', words: ['And', 'we', 'know', 'that', 'all', 'things', 'work', 'together', 'for', 'good', 'to', 'them', 'that', 'love', 'God.'], explanation: 'God weaves every circumstance for the eternal good of those who love Him.' },
  { reference: 'Matthew 6:33', words: ['But', 'seek', 'ye', 'first', 'the', 'kingdom', 'of', 'God,', 'and', 'his', 'righteousness.'], explanation: 'Jesus teaches disciples to put God’s kingdom first.' },
  { reference: 'Joshua 1:9', words: ['Be', 'strong', 'and', 'of', 'a', 'good', 'courage;', 'be', 'not', 'afraid,', 'for', 'the', 'Lord', 'thy', 'God', 'is', 'with', 'thee.'], explanation: 'The Lord encouraged Joshua as he prepared to lead Israel across the Jordan.' },
  { reference: 'Isaiah 40:8', words: ['The', 'grass', 'withereth,', 'the', 'flower', 'fadeth:', 'but', 'the', 'word', 'of', 'our', 'God', 'shall', 'stand', 'for', 'ever.'], explanation: 'Human glory fades, but God’s Word endures forever.' },
];

export const TIMELINE_SETS_BANK = [
  {
    title: 'Creation to the Patriarchs',
    reference: 'Genesis 1–50',
    explanation: 'Genesis progresses from Creation and the Flood to the call of Abraham, the birth of Isaac and Jacob, and Joseph’s rise in Egypt.',
    events: [
      { id: 't1-1', order: 1, title: 'Creation of the Heavens and the Earth', reference: 'Genesis 1:1' },
      { id: 't1-2', order: 2, title: 'Noah Builds the Ark & the Great Flood', reference: 'Genesis 6–8' },
      { id: 't1-3', order: 3, title: 'Call of Abram from Ur and Haran to Canaan', reference: 'Genesis 12:1-4' },
      { id: 't1-4', order: 4, title: 'Birth of Isaac & Testing on Mount Moriah', reference: 'Genesis 21–22' },
      { id: 't1-5', order: 5, title: 'Joseph Sold into Egypt & Made Governor', reference: 'Genesis 37; 41' },
    ]
  },
  {
    title: 'The Exodus to the Conquest of Canaan',
    reference: 'Exodus 1 – Joshua 6',
    explanation: 'Moses was called at the burning bush, led Israel through the Red Sea to Sinai, and after forty years Joshua led Israel across the Jordan to Jericho.',
    events: [
      { id: 't2-1', order: 1, title: 'Moses Called at the Burning Bush on Horeb', reference: 'Exodus 3:2' },
      { id: 't2-2', order: 2, title: 'The First Passover & Crossing the Red Sea', reference: 'Exodus 12; 14' },
      { id: 't2-3', order: 3, title: 'Giving of the Ten Commandments at Mount Sinai', reference: 'Exodus 20:1-17' },
      { id: 't2-4', order: 4, title: 'Israel Crosses the Jordan River under Joshua', reference: 'Joshua 3:14-17' },
      { id: 't2-5', order: 5, title: 'The Fall of the Walls of Jericho', reference: 'Joshua 6:20' },
    ]
  },
  {
    title: 'Judges to the United Monarchy',
    reference: 'Judges 4 – 1 Kings 6',
    explanation: 'Israel was governed by judges like Deborah and Gideon until Samuel anointed Saul and David, followed by Solomon building the Temple.',
    events: [
      { id: 't3-1', order: 1, title: 'Deborah and Barak Defeat Sisera’s Chariots', reference: 'Judges 4:14-15' },
      { id: 't3-2', order: 2, title: 'Gideon’s 300 Men Rout the Midianite Camp', reference: 'Judges 7:19-22' },
      { id: 't3-3', order: 3, title: 'Samuel Anoints Saul as First King of Israel', reference: '1 Samuel 10:1' },
      { id: 't3-4', order: 4, title: 'David Defeats Goliath in the Valley of Elah', reference: '1 Samuel 17:49' },
      { id: 't3-5', order: 5, title: 'King Solomon Builds the First Temple in Jerusalem', reference: '1 Kings 6:1' },
    ]
  },
  {
    title: 'Divided Kingdom to the Return from Exile',
    reference: '1 Kings 12 – Nehemiah 6',
    explanation: 'After Solomon, the kingdom divided; Elijah ministered in the north, Jerusalem fell to Babylon, Daniel served in exile, and Nehemiah rebuilt the walls.',
    events: [
      { id: 't4-1', order: 1, title: 'Division of the Kingdom under Rehoboam and Jeroboam', reference: '1 Kings 12:16-20' },
      { id: 't4-2', order: 2, title: 'Elijah Confronts the Prophets of Baal on Mount Carmel', reference: '1 Kings 18:36-39' },
      { id: 't4-3', order: 3, title: 'Fall of Jerusalem & Babylonian Exile under Nebuchadnezzar', reference: '2 Kings 25:8-11' },
      { id: 't4-4', order: 4, title: 'Daniel Delivered from the Lions’ Den in Medo-Persia', reference: 'Daniel 6:16-22' },
      { id: 't4-5', order: 5, title: 'Nehemiah Rebuilds the Walls of Jerusalem in 52 Days', reference: 'Nehemiah 6:15' },
    ]
  },
  {
    title: 'The Life and Ministry of Jesus',
    reference: 'Luke 2 – Acts 1',
    explanation: 'The Gospels trace Jesus’ birth in Bethlehem, baptism by John, Galilean miracles, crucifixion and resurrection, and ascension from Olivet.',
    events: [
      { id: 't5-1', order: 1, title: 'Birth of Jesus in Bethlehem of Judea', reference: 'Luke 2:4-7' },
      { id: 't5-2', order: 2, title: 'Jesus Baptized by John in the Jordan River', reference: 'Matthew 3:13-17' },
      { id: 't5-3', order: 3, title: 'First Miracle: Turning Water into Wine at Cana', reference: 'John 2:1-11' },
      { id: 't5-4', order: 4, title: 'Crucifixion and Third-Day Resurrection of Jesus', reference: 'Luke 23–24' },
      { id: 't5-5', order: 5, title: 'Ascension of the Risen Christ from the Mount of Olives', reference: 'Acts 1:9-12' },
    ]
  },
];

export const CHAIN_CHALLENGE_BANK = [
  { start: 'MOSES', chain: ['MOSES', 'SINAI', 'ISAAC', 'CANAAN', 'NOAH'], hint: 'Complete the letter chain where each biblical name/place starts with the last letter of the previous word: MOSES → SINAI → ISAAC → CANAAN → ?', options: ['NOAH', 'ABRAHAM', 'EDOM', 'RUTH'], answer: 'NOAH', reference: 'Genesis 6:8', explanation: 'CANAAN ends with the letter N, and NOAH begins with N.' },
  { start: 'DAVID', chain: ['DAVID', 'DANIEL', 'LUKE', 'ESTHER', 'RUTH'], hint: 'Complete the letter chain where each word starts with the last letter of the previous word: DAVID → DANIEL → LUKE → ESTHER → ?', options: ['RUTH', 'SARAH', 'HANNAH', 'NAOMI'], answer: 'RUTH', reference: 'Ruth 1:16', explanation: 'ESTHER ends with the letter R, and RUTH begins with R.' },
  { start: 'ABRAHAM', chain: ['ABRAHAM', 'MARK', 'KORAH', 'HEBRON', 'NEHEMIAH'], hint: 'Complete the letter chain: ABRAHAM → MARK → KORAH → HEBRON → ?', options: ['NEHEMIAH', 'EZRA', 'JOSHUA', 'CALEB'], answer: 'NEHEMIAH', reference: 'Nehemiah 1:1', explanation: 'HEBRON ends with the letter N, and NEHEMIAH begins with N.' },
  { start: 'JACOB', chain: ['JACOB', 'BETHEL', 'LEVI', 'ISAIAH', 'HOSEA'], hint: 'Complete the letter chain: JACOB → BETHEL → LEVI → ISAIAH → ?', options: ['HOSEA', 'AMOS', 'JOEL', 'MICAH'], answer: 'HOSEA', reference: 'Hosea 1:1', explanation: 'ISAIAH ends with the letter H, and HOSEA begins with H.' },
  { start: 'EDEN', chain: ['EDEN', 'NINEVEH', 'HANNAH', 'HEROD', 'DAMASCUS'], hint: 'Complete the letter chain: EDEN → NINEVEH → HANNAH → HEROD → ?', options: ['DAMASCUS', 'JERUSALEM', 'ANTIOCH', 'CORINTH'], answer: 'DAMASCUS', reference: 'Acts 9:2', explanation: 'HEROD ends with the letter D, and DAMASCUS begins with D.' },
  { start: 'PAUL', chain: ['PAUL', 'LYDIA', 'AARON', 'NAZARETH', 'HEZEKIAH'], hint: 'Complete the letter chain: PAUL → LYDIA → AARON → NAZARETH → ?', options: ['HEZEKIAH', 'JOSIAH', 'SOLOMON', 'ASA'], answer: 'HEZEKIAH', reference: '2 Kings 18:1', explanation: 'NAZARETH ends with the letter H, and HEZEKIAH begins with H.' },
  { start: 'PETER', chain: ['PETER', 'REBEKAH', 'HABAKKUK', 'KISH', 'HOREB'], hint: 'Complete the letter chain: PETER → REBEKAH → HABAKKUK → KISH → ?', options: ['HOREB', 'CARMEL', 'TABOR', 'ZION'], answer: 'HOREB', reference: 'Exodus 3:1', explanation: 'KISH ends with the letter H, and HOREB begins with H.' },
  { start: 'TITUS', chain: ['TITUS', 'SAMUEL', 'LAZARUS', 'STEPHEN', 'NICODEMUS'], hint: 'Complete the letter chain: TITUS → SAMUEL → LAZARUS → STEPHEN → ?', options: ['NICODEMUS', 'ZACCHAEUS', 'BARNABAS', 'TIMOTHY'], answer: 'NICODEMUS', reference: 'John 3:1', explanation: 'STEPHEN ends with the letter N, and NICODEMUS begins with N.' },
  { start: 'GIDEON', chain: ['GIDEON', 'NAAMAN', 'NATHAN', 'NAHUM', 'MATTHEW'], hint: 'Complete the letter chain: GIDEON → NAAMAN → NATHAN → NAHUM → ?', options: ['MATTHEW', 'JOHN', 'LUKE', 'ACTS'], answer: 'MATTHEW', reference: 'Matthew 9:9', explanation: 'NAHUM ends with the letter M, and MATTHEW begins with M.' },
  { start: 'CALEB', chain: ['CALEB', 'BOAZ', 'ZECHARIAH', 'HAGGAI', 'ISRAEL'], hint: 'Complete the letter chain: CALEB → BOAZ → ZECHARIAH → HAGGAI → ?', options: ['ISRAEL', 'JUDAH', 'SIMEON', 'GAD'], answer: 'ISRAEL', reference: 'Genesis 32:28', explanation: 'HAGGAI ends with the letter I, and ISRAEL begins with I.' },
];

export const PUZZLE_CHALLENGES_BANK = [
  { title: 'Tabernacle Courtyard Sequence', prompt: 'In the Tabernacle layout, after entering the single eastern gate into the outer court, which two bronze furnishings did a priest encounter in order before entering the Holy Place?', answer: 'Bronze Altar of Burnt Offering, then Bronze Laver', options: ['Bronze Altar of Burnt Offering, then Bronze Laver', 'Golden Lampstand, then Table of Showbread', 'Ark of the Covenant, then Altar of Incense', 'Bronze Laver, then Ark of the Covenant'], reference: 'Exodus 40:6-7, 29-30', explanation: 'Upon entering the courtyard gate, one first approached the Bronze Altar for sacrifice, and then the Bronze Laver for washing before entering the tent.' },
  { title: 'Days of Creation Mosaic', prompt: 'Match the Creation symmetry: Day 1 (Light) corresponds to Day 4 (Sun, Moon, Stars), and Day 2 (Waters & Sky) corresponds to Day 5 (Fish & Birds). Which two creations were formed on Day 6 to inhabit the Dry Land made on Day 3?', answer: 'Land Animals and Humanity (Male and Female)', options: ['Land Animals and Humanity (Male and Female)', 'Sea Monsters and Winged Birds', 'Fruit Trees and Seed-bearing Plants', 'The Firmament and Morning Stars'], reference: 'Genesis 1:24-27', explanation: 'On the sixth day God created land animals and mankind in His image to inhabit the dry land formed on day three.' },
  { title: 'Armor of God Assembly', prompt: 'In Ephesians 6, Paul lists pieces of spiritual armor. Which piece is explicitly described as the "sword of the Spirit", the only offensive weapon in the list?', answer: 'The Word of God', options: ['The Word of God', 'The Shield of Faith', 'The Breastplate of Righteousness', 'The Helmet of Salvation'], reference: 'Ephesians 6:17', explanation: 'Paul writes, "take the helmet of salvation, and the sword of the Spirit, which is the word of God."' },
  { title: 'High Priest’s Breastpiece Gemstones', prompt: 'Aaron’s breastpiece of judgment held twelve precious stones set in gold filigree, arranged in four rows of three. What was engraved upon those twelve stones?', answer: 'The names of the twelve tribes of Israel', options: ['The names of the twelve tribes of Israel', 'The Ten Commandments', 'The names of the twelve apostles', 'The seven feasts of the Lord'], reference: 'Exodus 28:17-21', explanation: 'Each of the twelve stones was engraved like a signet with the name of one of the twelve tribes of Israel.' },
  { title: 'Nebuchadnezzar’s Statue Metals', prompt: 'In Daniel 2, King Nebuchadnezzar’s dream statue had a head of gold, chest and arms of silver, and middle and thighs of bronze. What were its legs and feet made of before the uncut stone struck it?', answer: 'Legs of iron, and feet partly of iron and partly of clay', options: ['Legs of iron, and feet partly of iron and partly of clay', 'Legs of brass, and feet of pure marble', 'Legs of cedar, and feet of beaten copper', 'Legs of silver, and feet of onyx stone'], reference: 'Daniel 2:32-33', explanation: 'The fourth kingdom was represented by legs of iron and feet partly of iron and partly of potter’s clay.' },
  { title: 'Parable of the Sower Soils', prompt: 'In the Parable of the Sower, seed fell along the path, on rocky ground, and among thorns. What yield did the seed produce when it fell into the fourth soil—the good soil?', answer: 'Thirtyfold, sixtyfold, and a hundredfold', options: ['Thirtyfold, sixtyfold, and a hundredfold', 'Double and triple', 'Sevenfold and twelvefold', 'Ten baskets and twelve baskets'], reference: 'Mark 4:8, 20', explanation: 'The seed sown on good soil represents those who hear the word, accept it, and bear fruit thirtyfold, sixtyfold, and a hundredfold.' },
  { title: 'New Jerusalem Foundations & Gates', prompt: 'In Revelation 21, the holy city New Jerusalem has twelve gates made of twelve pearls and twelve foundations adorned with every jewel. Whose names are written on the gates, and whose on the foundations?', answer: 'Twelve tribes of Israel on the gates; twelve apostles of the Lamb on the foundations', options: ['Twelve tribes of Israel on the gates; twelve apostles of the Lamb on the foundations', 'Twelve minor prophets on the gates; twelve judges on the foundations', 'Four living creatures on the gates; twenty-four elders on the foundations', 'Kings of Judah on the gates; patriarchs on the foundations'], reference: 'Revelation 21:12-14', explanation: 'The twelve gates bear the names of the twelve tribes of the sons of Israel, and the twelve foundations bear the names of the twelve apostles of the Lamb.' },
  { title: 'Gideon’s Army Reduction Puzzle', prompt: 'Gideon began with 32,000 men. After 22,000 fearful men returned home, 10,000 remained at the water. How did the final 300 men drink water, distinguishing them from the rest?', answer: 'They lapped the water by putting their hand to their mouth', options: ['They lapped the water by putting their hand to their mouth', 'They knelt down on both knees to drink directly', 'They filled their leather wineskins first', 'They refused to drink until after sunset'], reference: 'Judges 7:3-7', explanation: 'God separated the 300 who lapped water with their hands to their mouths from those who knelt down to drink.' },
  { title: 'Seven Churches of Asia Sequence', prompt: 'In Revelation 2–3, Christ addresses seven churches in Asia Minor along a circular Roman postal route, beginning with Ephesus and Smyrna. Which church is addressed seventh and last?', answer: 'Laodicea', options: ['Laodicea', 'Philadelphia', 'Sardis', 'Pergamum'], reference: 'Revelation 1:11; 3:14', explanation: 'The seven letters follow the order: Ephesus, Smyrna, Pergamum, Thyatira, Sardis, Philadelphia, and finally Laodicea.' },
  { title: 'Elijah’s Altar Reconstruction', prompt: 'On Mount Carmel, before calling on the Lord, Elijah repaired the ruined altar using a specific number of stones and dug a trench around it. How many stones did he use, and how many times did he have four jars of water poured over the offering?', answer: '12 stones (for the 12 tribes), and water poured 3 times (12 jars total)', options: ['12 stones (for the 12 tribes), and water poured 3 times (12 jars total)', '7 stones, and water poured 7 times', '10 stones, and water poured once', '3 stones, and oil poured 4 times'], reference: '1 Kings 18:31-34', explanation: 'Elijah took twelve stones according to the number of the tribes of Jacob, and had four jars of water poured over the burnt offering and wood three times.' },
];

export const ALL_GAME_SLUGS = [
  'scripture-challenge',
  'scripture-scramble',
  'verse-builder',
  'bible-timeline',
  'guess-the-emoji',
  'bible-character-quest',
  'bible-word-search',
  'bible-crossword',
  'who-said-it',
  'complete-the-scripture',
  'bible-match-up',
  'bible-puzzles',
  'find-the-bible-book',
  'bible-riddles',
  'bible-geography-quest',
  'bible-memory-challenge',
  'old-vs-new-testament',
  'bible-detective',
  'bible-chain-challenge',
] as const;

export type GameSlug = typeof ALL_GAME_SLUGS[number];

export const PUBLISHED_LEVEL_COUNTS: Record<string, number> = {
  'scripture-challenge': 10,
  'scripture-scramble': 10,
  'verse-builder': 10,
  'bible-timeline': 10,
  'guess-the-emoji': 10,
  'bible-character-quest': 10,
  'bible-word-search': 10,
  'bible-crossword': 10,
  'who-said-it': 10,
  'complete-the-scripture': 10,
  'bible-match-up': 10,
  'bible-puzzles': 10,
  'find-the-bible-book': 10,
  'bible-riddles': 10,
  'bible-geography-quest': 10,
  'bible-memory-challenge': 10,
  'old-vs-new-testament': 10,
  'bible-detective': 10,
  'bible-chain-challenge': 10,
};

const LEVEL_NAMES = [
  'Foundations of Faith',
  'Patriarchs & Promises',
  'Exodus & Wilderness',
  'Conquest & Judges',
  'Kings & Chronicles',
  'Psalms & Wisdom',
  'Prophets of Israel',
  'Gospels & Miracles',
  'Acts & Early Church',
  'Epistles & Revelation',
];

function getDifficultyForLevel(level: number): 'Beginner' | 'Easy' | 'Medium' | 'Hard' | 'Expert' {
  if (level <= 2) return 'Beginner';
  if (level <= 4) return 'Easy';
  if (level <= 6) return 'Medium';
  if (level <= 8) return 'Hard';
  return 'Expert';
}

function deterministicShuffle<T>(arr: T[], seed: number): T[] {
  const copy = [...arr];
  let s = (seed * 9301 + 49297) % 233280;
  for (let i = copy.length - 1; i > 0; i--) {
    s = (s * 9301 + 49297) % 233280;
    const j = s % (i + 1);
    const tmp = copy[i];
    copy[i] = copy[j];
    copy[j] = tmp;
  }
  return copy;
}

function scrambleWordDeterministic(word: string, seed: number): string {
  const clean = word.toUpperCase().replace(/[^A-Z]/g, '');
  if (clean.length <= 1) return clean;
  let letters = deterministicShuffle(clean.split(''), seed);
  if (letters.join('') === clean) {
    // Rotate by 1 to ensure it is never already solved
    letters = [...letters.slice(1), letters[0]];
  }
  return letters.join('');
}

function buildWordSearchGrid(targetWord: string, extraWords: string[], seed: number) {
  const size = 8;
  const grid: string[][] = Array.from({ length: size }, () => Array(size).fill(''));
  const words = [targetWord, ...extraWords]
    .map(w => w.toUpperCase().replace(/[^A-Z]/g, ''))
    .filter(w => w.length >= 3 && w.length <= size)
    .slice(0, 3);

  const placements: { word: string; row: number; col: number; dir: 'H' | 'V'; cells: [number, number][] }[] = [];

  words.forEach((word, wIdx) => {
    const dir: 'H' | 'V' = (wIdx + seed) % 2 === 0 ? 'H' : 'V';
    let placed = false;
    for (let attempt = 0; attempt < 40 && !placed; attempt++) {
      const r = dir === 'H' ? (wIdx * 2 + attempt) % size : (attempt) % Math.max(1, size - word.length + 1);
      const c = dir === 'V' ? (wIdx * 2 + attempt) % size : (attempt) % Math.max(1, size - word.length + 1);
      if (dir === 'H' && c + word.length > size) continue;
      if (dir === 'V' && r + word.length > size) continue;

      let canPlace = true;
      const cells: [number, number][] = [];
      for (let i = 0; i < word.length; i++) {
        const rr = dir === 'H' ? r : r + i;
        const cc = dir === 'H' ? c + i : c;
        if (grid[rr][cc] !== '' && grid[rr][cc] !== word[i]) {
          canPlace = false;
          break;
        }
        cells.push([rr, cc]);
      }
      if (canPlace) {
        cells.forEach(([rr, cc], i) => {
          grid[rr][cc] = word[i];
        });
        placements.push({ word, row: r, col: c, dir, cells });
        placed = true;
      }
    }
  });

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
      if (!grid[r][c]) {
        const idx = (r * 13 + c * 7 + seed * 17) % alphabet.length;
        grid[r][c] = alphabet[idx];
      }
    }
  }

  return { grid, placements, words: placements.map(p => p.word) };
}

export function getPublishedLevelsForGame(gameSlug: string): PublishedLevelMeta[] {
  const count = PUBLISHED_LEVEL_COUNTS[gameSlug] ?? 10;
  const levels: PublishedLevelMeta[] = [];
  for (let lvl = 1; lvl <= count; lvl++) {
    levels.push({
      gameSlug,
      level: lvl,
      name: `Level ${lvl}: ${LEVEL_NAMES[(lvl - 1) % LEVEL_NAMES.length]}`,
      difficulty: getDifficultyForLevel(lvl),
      challengeCount: 10,
      isPublished: true,
    });
  }
  return levels;
}

export function getChallengesForGameLevel(gameSlug: string, level: number): GameChallenge[] {
  const safeLevel = Math.max(1, level);
  const difficulty = getDifficultyForLevel(safeLevel);
  const baseOffset = (safeLevel - 1) * 10;
  const challenges: GameChallenge[] = [];

  for (let i = 0; i < 10; i++) {
    const challengeIndex = i + 1;
    const globalIdx = baseOffset + i;
    const id = `${gameSlug}-lvl${safeLevel}-ch${challengeIndex}`;

    switch (gameSlug) {
      case 'scripture-challenge': {
        // Combine INITIAL_QUESTIONS + book/character/quote facts so every level 1..10 has 10 distinct questions
        if (globalIdx < INITIAL_QUESTIONS.length) {
          const q = INITIAL_QUESTIONS[globalIdx];
          challenges.push({
            id,
            gameSlug,
            level: safeLevel,
            challengeIndex,
            questionText: q.question,
            options: q.options,
            correctAnswer: q.answer,
            explanation: q.explanation,
            reference: q.reference,
            difficulty,
            metadata: { timerSeconds: 20, category: q.category },
          });
        } else {
          const book = BIBLE_BOOKS_DATA[globalIdx % BIBLE_BOOKS_DATA.length];
          const d1 = BIBLE_BOOKS_DATA[(globalIdx + 5) % BIBLE_BOOKS_DATA.length].name;
          const d2 = BIBLE_BOOKS_DATA[(globalIdx + 13) % BIBLE_BOOKS_DATA.length].name;
          const d3 = BIBLE_BOOKS_DATA[(globalIdx + 27) % BIBLE_BOOKS_DATA.length].name;
          const opts = deterministicShuffle([book.name, d1, d2, d3], globalIdx + 11);
          challenges.push({
            id,
            gameSlug,
            level: safeLevel,
            challengeIndex,
            questionText: `Which book of the ${book.testament} (${book.section}) centers on "${book.theme}" and features ${book.event}?`,
            options: opts,
            correctAnswer: book.name,
            explanation: `${book.name} (traditionally attributed to ${book.author}, ${book.chapters} chapters) focuses on ${book.theme}.`,
            reference: book.keyVerse,
            difficulty,
            metadata: { timerSeconds: 20, category: book.section },
          });
        }
        break;
      }

      case 'scripture-scramble': {
        // Pool of 66 books + 20 scramble words + 40 characters
        const scramblePool = [
          ...SCRAMBLE_WORDS_BANK,
          ...BIBLE_BOOKS_DATA
            .filter(b => /^[A-Za-z]+$/.test(b.name) && b.name.length >= 4)
            .map(b => ({
              word: b.name.toUpperCase(),
              hint: `${b.testament} book (${b.section}): ${b.theme}`,
              reference: b.keyVerse,
            })),
          ...BIBLE_CHARACTERS_DATA
            .filter(c => /^[A-Za-z]+$/.test(c.name) && c.name.length >= 4)
            .map(c => ({
              word: c.name.toUpperCase(),
              hint: `${c.role}: ${c.clues[0]}`,
              reference: c.reference,
            })),
        ];
        const item = scramblePool[globalIdx % scramblePool.length];
        const cleanWord = item.word.toUpperCase().replace(/[^A-Z]/g, '');
        const scrambled = scrambleWordDeterministic(cleanWord, globalIdx + 17);
        challenges.push({
          id,
          gameSlug,
          level: safeLevel,
          challengeIndex,
          questionText: item.hint,
          options: scrambled.split(''),
          correctAnswer: cleanWord,
          explanation: `The unscrambled biblical word is ${cleanWord} (${item.hint}).`,
          reference: item.reference,
          difficulty,
          metadata: {
            word: cleanWord,
            scrambled,
            letters: scrambled.split(''),
            hintText: `Starts with "${cleanWord[0]}" and has ${cleanWord.length} letters.`,
          },
        });
        break;
      }

      case 'verse-builder': {
        const versePool = [
          ...VERSE_BUILDER_BANK,
          ...COMPLETE_SCRIPTURE_VERSES.map(v => ({
            reference: v.reference,
            words: v.fullText.split(/\s+/),
            explanation: v.explanation,
          })),
        ];
        const item = versePool[globalIdx % versePool.length];
        const orderedWords = item.words;
        const shuffledWords = deterministicShuffle(orderedWords, globalIdx + 23);
        const fullVerse = orderedWords.join(' ');
        challenges.push({
          id,
          gameSlug,
          level: safeLevel,
          challengeIndex,
          questionText: `Arrange the words in exact biblical order for ${item.reference}:`,
          options: shuffledWords,
          correctAnswer: fullVerse,
          explanation: item.explanation,
          reference: item.reference,
          difficulty,
          metadata: {
            orderedWords,
            shuffledWords,
            reference: item.reference,
          },
        });
        break;
      }

      case 'bible-timeline': {
        // Build 10 distinct chronological ordering challenges per level
        if (i < TIMELINE_SETS_BANK.length && safeLevel === 1) {
          const tSet = TIMELINE_SETS_BANK[i];
          const shuffledEvents = deterministicShuffle(tSet.events, globalIdx + 31);
          const correctSequence = tSet.events.map(e => e.id).join(',');
          challenges.push({
            id,
            gameSlug,
            level: safeLevel,
            challengeIndex,
            questionText: `Place these 5 biblical events from "${tSet.title}" in chronological order from earliest to latest:`,
            options: shuffledEvents.map(e => e.title),
            correctAnswer: correctSequence,
            acceptedAnswers: [
              correctSequence,
              tSet.events.map(e => e.title).join(' -> '),
              tSet.events.map(e => e.title).join('|'),
            ],
            explanation: tSet.explanation,
            reference: tSet.reference,
            difficulty,
            metadata: {
              title: tSet.title,
              orderedEvents: tSet.events,
              shuffledEvents,
            },
          });
        } else {
          // Canonical sequence of 5 Bible books/events from BIBLE_BOOKS_DATA (61 possible starting slices, coprime step 6)
          const startBookIdx = (globalIdx * 6 + safeLevel) % (BIBLE_BOOKS_DATA.length - 5);
          const slice = BIBLE_BOOKS_DATA.slice(startBookIdx, startBookIdx + 5);
          const orderedEvents = slice.map((b, idx) => ({
            id: `bk-${b.num}`,
            order: idx + 1,
            title: `${b.name}: ${b.event}`,
            reference: b.keyVerse,
          }));
          const shuffledEvents = deterministicShuffle(orderedEvents, globalIdx + 41);
          const correctSequence = orderedEvents.map(e => e.id).join(',');
          challenges.push({
            id,
            gameSlug,
            level: safeLevel,
            challengeIndex,
            questionText: `Order these 5 biblical books and milestones in their canonical sequence (${slice[0].name} through ${slice[slice.length - 1].name}):`,
            options: shuffledEvents.map(e => e.title),
            correctAnswer: correctSequence,
            acceptedAnswers: [
              correctSequence,
              orderedEvents.map(e => e.title).join(' -> '),
              orderedEvents.map(e => e.title).join('|'),
            ],
            explanation: `The correct canonical order is: ${orderedEvents.map(e => e.title).join(' → ')}.`,
            reference: `${slice[0].keyVerse} – ${slice[slice.length - 1].keyVerse}`,
            difficulty,
            metadata: {
              title: `Canonical Sequence (${slice[0].section})`,
              orderedEvents,
              shuffledEvents,
            },
          });
        }
        break;
      }

      case 'guess-the-emoji': {
        const em = EMOJI_QUESTIONS[globalIdx % EMOJI_QUESTIONS.length];
        challenges.push({
          id,
          gameSlug,
          level: safeLevel,
          challengeIndex,
          questionText: `${em.emojis} — Identify the biblical story, character, or event (${em.category}):`,
          options: em.options,
          correctAnswer: em.correctAnswer,
          acceptedAnswers: em.acceptedAnswers,
          explanation: em.explanation,
          reference: em.reference,
          difficulty,
          metadata: {
            emojis: em.emojis,
            hint: em.hint,
            category: em.category,
          },
        });
        break;
      }

      case 'bible-character-quest': {
        const ch = BIBLE_CHARACTERS_DATA[globalIdx % BIBLE_CHARACTERS_DATA.length];
        const opts = deterministicShuffle(ch.options, globalIdx + 19);
        challenges.push({
          id,
          gameSlug,
          level: safeLevel,
          challengeIndex,
          questionText: `Identify the biblical character from the progressive clues. Clue 1: ${ch.clues[0]}`,
          options: opts,
          correctAnswer: ch.name,
          explanation: `${ch.name} (${ch.role}, ${ch.testament}): ${ch.clues.join(' ')}`,
          reference: ch.reference,
          difficulty,
          metadata: {
            clues: ch.clues,
            role: ch.role,
            testament: ch.testament,
          },
        });
        break;
      }

      case 'bible-word-search': {
        const primaryBook = BIBLE_BOOKS_DATA[globalIdx % BIBLE_BOOKS_DATA.length];
        const cleanTarget = primaryBook.name.toUpperCase().replace(/[^A-Z]/g, '');
        const extra1 = BIBLE_CHARACTERS_DATA[globalIdx % BIBLE_CHARACTERS_DATA.length].name.toUpperCase().replace(/[^A-Z]/g, '');
        const extra2 = SCRAMBLE_WORDS_BANK[globalIdx % SCRAMBLE_WORDS_BANK.length].word.toUpperCase().replace(/[^A-Z]/g, '');
        const ws = buildWordSearchGrid(
          cleanTarget.length >= 3 && cleanTarget.length <= 8 ? cleanTarget : 'GENESIS',
          [extra1, extra2],
          globalIdx + 7
        );
        const targetWords = ws.words;
        challenges.push({
          id,
          gameSlug,
          level: safeLevel,
          challengeIndex,
          questionText: `Find the hidden biblical words in the grid: ${targetWords.join(', ')}`,
          options: targetWords,
          correctAnswer: targetWords.join(','),
          acceptedAnswers: [targetWords.join(','), targetWords[0]],
          explanation: `Located ${targetWords.join(', ')} in the Scripture Word Search grid (${primaryBook.theme}).`,
          reference: primaryBook.keyVerse,
          difficulty,
          metadata: {
            grid: ws.grid,
            words: targetWords,
            placements: ws.placements,
            clue: `${primaryBook.name}: ${primaryBook.theme}`,
          },
        });
        break;
      }

      case 'bible-crossword': {
        // Each challenge presents a mini-crossword of 3 intersecting/themed biblical clues
        const c1 = SCRAMBLE_WORDS_BANK[(globalIdx * 3) % SCRAMBLE_WORDS_BANK.length];
        const c2 = SCRAMBLE_WORDS_BANK[(globalIdx * 3 + 1) % SCRAMBLE_WORDS_BANK.length];
        const c3 = BIBLE_CHARACTERS_DATA[globalIdx % BIBLE_CHARACTERS_DATA.length];
        const w3 = c3.name.toUpperCase().replace(/[^A-Z]/g, '');
        const clues = [
          { number: 1, direction: 'Across', clue: c1.hint, answer: c1.word.toUpperCase().replace(/[^A-Z]/g, ''), reference: c1.reference },
          { number: 2, direction: 'Down', clue: c2.hint, answer: c2.word.toUpperCase().replace(/[^A-Z]/g, ''), reference: c2.reference },
          { number: 3, direction: 'Across', clue: c3.clues[0], answer: w3, reference: c3.reference },
        ];
        const combinedAnswer = clues.map(c => c.answer).join(',');
        challenges.push({
          id,
          gameSlug,
          level: safeLevel,
          challengeIndex,
          questionText: `Solve the 3 Bible Crossword clues (1 Across: ${clues[0].clue})`,
          options: clues.map(c => c.answer),
          correctAnswer: combinedAnswer,
          acceptedAnswers: [combinedAnswer, clues[0].answer],
          explanation: `1 Across: ${clues[0].answer} (${clues[0].reference}); 2 Down: ${clues[1].answer} (${clues[1].reference}); 3 Across: ${clues[2].answer} (${clues[2].reference}).`,
          reference: `${clues[0].reference}; ${clues[2].reference}`,
          difficulty,
          metadata: {
            clues,
          },
        });
        break;
      }

      case 'who-said-it': {
        const qItem = WHO_SAID_IT_QUOTES[globalIdx % WHO_SAID_IT_QUOTES.length];
        const opts = deterministicShuffle(qItem.options, globalIdx + 29);
        challenges.push({
          id,
          gameSlug,
          level: safeLevel,
          challengeIndex,
          questionText: `Who spoke these words: "${qItem.quote}"?`,
          options: opts,
          correctAnswer: qItem.speaker,
          explanation: qItem.explanation,
          reference: qItem.reference,
          difficulty,
          metadata: {
            quote: qItem.quote,
            speaker: qItem.speaker,
          },
        });
        break;
      }

      case 'complete-the-scripture': {
        const vItem = COMPLETE_SCRIPTURE_VERSES[globalIdx % COMPLETE_SCRIPTURE_VERSES.length];
        const opts = deterministicShuffle(vItem.options, globalIdx + 37);
        challenges.push({
          id,
          gameSlug,
          level: safeLevel,
          challengeIndex,
          questionText: `Complete the verse (${vItem.reference}): "${vItem.blankText}"`,
          options: opts,
          correctAnswer: vItem.missingWord,
          explanation: `${vItem.fullText} (${vItem.reference}) — ${vItem.explanation}`,
          reference: vItem.reference,
          difficulty,
          metadata: {
            blankText: vItem.blankText,
            fullText: vItem.fullText,
            missingWord: vItem.missingWord,
          },
        });
        break;
      }

      case 'bible-match-up': {
        // 4 pairs of Biblical Character <-> Role/Act to match
        const pairs = [0, 1, 2, 3].map(offset => {
          const ch = BIBLE_CHARACTERS_DATA[(globalIdx * 4 + offset) % BIBLE_CHARACTERS_DATA.length];
          return {
            id: `pair-${offset + 1}`,
            left: ch.name,
            right: `${ch.role} (${ch.reference})`,
            reference: ch.reference,
          };
        });
        const shuffledRights = deterministicShuffle(pairs.map(p => p.right), globalIdx + 43);
        const answerStr = pairs.map(p => `${p.left}:${p.right}`).join('|');
        challenges.push({
          id,
          gameSlug,
          level: safeLevel,
          challengeIndex,
          questionText: `Match all 4 biblical figures with their corresponding biblical role and Scripture reference:`,
          options: shuffledRights,
          correctAnswer: answerStr,
          explanation: pairs.map(p => `${p.left} — ${p.right}`).join('; '),
          reference: pairs.map(p => p.reference).join('; '),
          difficulty,
          metadata: {
            pairs,
            shuffledRights,
          },
        });
        break;
      }

      case 'bible-puzzles': {
        const pItem = PUZZLE_CHALLENGES_BANK[globalIdx % PUZZLE_CHALLENGES_BANK.length];
        const opts = deterministicShuffle(pItem.options, globalIdx + 53);
        challenges.push({
          id,
          gameSlug,
          level: safeLevel,
          challengeIndex,
          questionText: `${pItem.title}: ${pItem.prompt}`,
          options: opts,
          correctAnswer: pItem.answer,
          explanation: pItem.explanation,
          reference: pItem.reference,
          difficulty,
          metadata: {
            puzzleTitle: pItem.title,
          },
        });
        break;
      }

      case 'find-the-bible-book': {
        const book = BIBLE_BOOKS_DATA[globalIdx % BIBLE_BOOKS_DATA.length];
        const prevBook = book.num > 1 ? BIBLE_BOOKS_DATA[book.num - 2].name : 'None (First Book)';
        const nextBook = book.num < 66 ? BIBLE_BOOKS_DATA[book.num].name : 'None (Final Book)';
        const d1 = BIBLE_BOOKS_DATA[(globalIdx + 4) % BIBLE_BOOKS_DATA.length].name;
        const d2 = BIBLE_BOOKS_DATA[(globalIdx + 9) % BIBLE_BOOKS_DATA.length].name;
        const d3 = BIBLE_BOOKS_DATA[(globalIdx + 15) % BIBLE_BOOKS_DATA.length].name;
        const opts = deterministicShuffle(
          Array.from(new Set([book.name, d1, d2, d3])).slice(0, 4),
          globalIdx + 61
        );
        challenges.push({
          id,
          gameSlug,
          level: safeLevel,
          challengeIndex,
          questionText: `Find the Bible Book: Book #${book.num} (${book.testament} • ${book.section}). Written by ${book.author} (${book.chapters} chapters). Theme: ${book.theme}.`,
          options: opts,
          correctAnswer: book.name,
          explanation: `${book.name} is Book #${book.num} of the Bible (${book.section}), positioned after ${prevBook} and before ${nextBook}.`,
          reference: book.keyVerse,
          difficulty,
          metadata: {
            bookNumber: book.num,
            testament: book.testament,
            section: book.section,
            author: book.author,
            chapters: book.chapters,
            prevBook,
            nextBook,
          },
        });
        break;
      }

      case 'bible-riddles': {
        if (i < BIBLE_RIDDLES_DATA.length && safeLevel === 1) {
          const rItem = BIBLE_RIDDLES_DATA[i];
          const opts = deterministicShuffle(rItem.options, globalIdx + 71);
          challenges.push({
            id,
            gameSlug,
            level: safeLevel,
            challengeIndex,
            questionText: rItem.riddle,
            options: opts,
            correctAnswer: rItem.answer,
            explanation: rItem.explanation,
            reference: rItem.reference,
            difficulty,
            metadata: {
              hint: `Scripture reference hint: ${rItem.reference}`,
            },
          });
        } else {
          // Combine riddles and poetic character riddles across levels
          if (globalIdx % 2 === 0) {
            const rItem = BIBLE_RIDDLES_DATA[(globalIdx / 2) % BIBLE_RIDDLES_DATA.length];
            const opts = deterministicShuffle(rItem.options, globalIdx + 71);
            challenges.push({
              id,
              gameSlug,
              level: safeLevel,
              challengeIndex,
              questionText: rItem.riddle,
              options: opts,
              correctAnswer: rItem.answer,
              explanation: rItem.explanation,
              reference: rItem.reference,
              difficulty,
              metadata: {
                hint: `Scripture reference hint: ${rItem.reference}`,
              },
            });
          } else {
            const ch = BIBLE_CHARACTERS_DATA[globalIdx % BIBLE_CHARACTERS_DATA.length];
            const opts = deterministicShuffle(ch.options, globalIdx + 73);
            const riddleText = `I am remembered in the ${ch.testament} as ${ch.role}. ${ch.clues[1]} ${ch.clues[2]} Who am I?`;
            challenges.push({
              id,
              gameSlug,
              level: safeLevel,
              challengeIndex,
              questionText: riddleText,
              options: opts,
              correctAnswer: ch.name,
              explanation: `${ch.name}: ${ch.clues.join(' ')}`,
              reference: ch.reference,
              difficulty,
              metadata: {
                hint: ch.clues[0],
              },
            });
          }
        }
        break;
      }

      case 'bible-geography-quest': {
        const geo = BIBLE_GEOGRAPHY_DATA[globalIdx % BIBLE_GEOGRAPHY_DATA.length];
        const opts = deterministicShuffle(geo.options, globalIdx + 79);
        challenges.push({
          id,
          gameSlug,
          level: safeLevel,
          challengeIndex,
          questionText: `Region: ${geo.region} — ${geo.event} Which biblical location is this?`,
          options: opts,
          correctAnswer: geo.place,
          explanation: `${geo.place} (${geo.region}): ${geo.event}`,
          reference: geo.reference,
          difficulty,
          metadata: {
            region: geo.region,
            place: geo.place,
          },
        });
        break;
      }

      case 'bible-memory-challenge': {
        // 4 pairs (8 cards) of Reference <-> Verse/Truth for interactive card flipping across 50 items
        const memoryPool = [
          ...COMPLETE_SCRIPTURE_VERSES.map(v => ({ reference: v.reference, text: v.fullText })),
          ...WHO_SAID_IT_QUOTES.map(q => ({ reference: q.reference, text: `"${q.quote}" (${q.speaker})` })),
        ];
        const pairs = [0, 1, 2, 3].map(offset => {
          const item = memoryPool[(globalIdx * 4 + offset + safeLevel) % memoryPool.length];
          return {
            pairId: `mem-${offset + 1}`,
            reference: item.reference,
            snippet: item.text.length > 68 ? `${item.text.slice(0, 65)}...` : item.text,
          };
        });
        const cards = deterministicShuffle(
          pairs.flatMap(p => [
            { id: `${p.pairId}-ref`, pairId: p.pairId, type: 'reference', label: p.reference },
            { id: `${p.pairId}-txt`, pairId: p.pairId, type: 'text', label: p.snippet },
          ]),
          globalIdx + 83
        );
        const answerStr = pairs.map(p => p.pairId).join(',');
        challenges.push({
          id,
          gameSlug,
          level: safeLevel,
          challengeIndex,
          questionText: `Flip and match all 4 pairs of Scripture references and verses (${pairs.map(p => p.reference).join(', ')}):`,
          options: pairs.map(p => p.reference),
          correctAnswer: answerStr,
          explanation: pairs.map(p => `${p.reference}: ${p.snippet}`).join(' | '),
          reference: pairs.map(p => p.reference).join('; '),
          difficulty,
          metadata: {
            pairs,
            cards,
          },
        });
        break;
      }

      case 'old-vs-new-testament': {
        const isBookItem = globalIdx % 2 === 0;
        if (isBookItem) {
          const book = BIBLE_BOOKS_DATA[globalIdx % BIBLE_BOOKS_DATA.length];
          challenges.push({
            id,
            gameSlug,
            level: safeLevel,
            challengeIndex,
            questionText: `Classify this Bible book and milestone: "${book.name} — ${book.event}"`,
            options: ['Old Testament', 'New Testament'],
            correctAnswer: book.testament,
            explanation: `${book.name} is Book #${book.num} in the ${book.testament} (${book.section}). Remember: Books 1–39 (Genesis to Malachi) are Old Testament; Books 40–66 (Matthew to Revelation) are New Testament.`,
            reference: book.keyVerse,
            difficulty,
            metadata: {
              itemTitle: book.name,
              itemSubtitle: `${book.section} • ${book.event}`,
              classificationRule: 'Old Testament = 39 books before Christ’s incarnation (Genesis–Malachi). New Testament = 27 books of Christ’s ministry, early Church, and Epistles (Matthew–Revelation).',
            },
          });
        } else {
          const ch = BIBLE_CHARACTERS_DATA[globalIdx % BIBLE_CHARACTERS_DATA.length];
          challenges.push({
            id,
            gameSlug,
            level: safeLevel,
            challengeIndex,
            questionText: `Classify this biblical figure and account: "${ch.name} (${ch.role}) — ${ch.clues[0]}"`,
            options: ['Old Testament', 'New Testament'],
            correctAnswer: ch.testament,
            explanation: `${ch.name} appears primarily in the ${ch.testament} (${ch.reference}).`,
            reference: ch.reference,
            difficulty,
            metadata: {
              itemTitle: ch.name,
              itemSubtitle: ch.role,
              classificationRule: 'Old Testament = Creation, Patriarchs, Exodus, Kings & Prophets of Israel. New Testament = Life of Jesus, Apostles, Acts & Epistles.',
            },
          });
        }
        break;
      }

      case 'bible-detective': {
        const dCase = BIBLE_DETECTIVE_CASES[globalIdx % BIBLE_DETECTIVE_CASES.length];
        const opts = deterministicShuffle(dCase.options, globalIdx + 89);
        challenges.push({
          id,
          gameSlug,
          level: safeLevel,
          challengeIndex,
          questionText: `${dCase.title}: Examine the biblical evidence and identify the person or judgment.`,
          options: opts,
          correctAnswer: dCase.answer,
          explanation: dCase.explanation,
          reference: dCase.reference,
          difficulty,
          metadata: {
            caseTitle: dCase.title,
            clues: [dCase.clue1, dCase.clue2, dCase.clue3],
          },
        });
        break;
      }

      case 'bible-chain-challenge':
      default: {
        const chainItem = CHAIN_CHALLENGE_BANK[globalIdx % CHAIN_CHALLENGE_BANK.length];
        const opts = deterministicShuffle(chainItem.options, globalIdx + 97);
        challenges.push({
          id,
          gameSlug,
          level: safeLevel,
          challengeIndex,
          questionText: chainItem.hint,
          options: opts,
          correctAnswer: chainItem.answer,
          explanation: chainItem.explanation,
          reference: chainItem.reference,
          difficulty,
          metadata: {
            chain: chainItem.chain,
            previousWords: chainItem.chain.slice(0, -1),
            requiredStartLetter: chainItem.chain[chainItem.chain.length - 2].slice(-1),
          },
        });
        break;
      }
    }
  }

  return challenges;
}

export function normalizeAnswerText(val: string): string {
  return (val || '')
    .trim()
    .toLowerCase()
    .replace(/[\u2018\u2019']/g, "'")
    .replace(/\s+/g, ' ');
}

export function checkChallengeAnswer(
  challenge: GameChallenge,
  submittedAnswer: string,
  hintsUsed = 0
): { isCorrect: boolean; score: number; explanation: string; reference: string; correctAnswer: string } {
  const normSubmitted = normalizeAnswerText(submittedAnswer);
  const normCorrect = normalizeAnswerText(challenge.correctAnswer);
  const accepted = (challenge.acceptedAnswers || [challenge.correctAnswer]).map(normalizeAnswerText);

  const isCorrect =
    normSubmitted.length > 0 &&
    (normSubmitted === normCorrect || accepted.includes(normSubmitted));

  let score = 0;
  if (isCorrect) {
    const penalty = Math.min(0.5, Math.max(0, hintsUsed) * 0.25);
    score = Number(Math.max(0.5, 1 - penalty).toFixed(3));
  }

  return {
    isCorrect,
    score,
    explanation: challenge.explanation,
    reference: challenge.reference,
    correctAnswer: challenge.correctAnswer,
  };
}

