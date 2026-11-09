import type { ChallengeItem } from './bibleContentBank';

/**
 * Hand-curated Scripture Challenge questions.
 * Each entry is tied to a precise passage; wording is original and references
 * point players to the biblical text for verification.
 */
const question = (
  level: number,
  index: number,
  text: string,
  answer: string,
  distractors: [string, string, string],
  reference: string,
  explanation: string,
  mechanic: string,
): ChallengeItem => ({
  id: `scripture-challenge-l${level}-c${index}`,
  game_slug: 'scripture-challenge',
  level,
  challenge_index: index,
  question_text: text,
  options: [answer, ...distractors],
  correct_answer: answer,
  reference,
  explanation,
  metadata: { challengeType: mechanic, curated: true, difficulty: level === 1 ? 'medium' : 'hard' },
});

export const SCRIPTURE_CHALLENGE_QUESTIONS: ChallengeItem[] = [
  // LEVEL 1 — THE KNOWLEDGE GATE
  question(1, 1, 'Which item did the Lord command Noah to bring into the ark in addition to his family and the animals?', 'Food for every kind of creature', ['A golden altar', 'The tablets of the covenant', 'A lampstand'], 'Genesis 6:21', 'Noah was instructed to gather and store food for himself and the animals.', 'mixed-knowledge'),
  question(1, 2, 'At the dedication of the temple, what filled the house so that the priests could not continue ministering?', 'The glory of the LORD', ['A cloud of incense from the altar', 'The sound of trumpets alone', 'A great wind from the east'], '1 Kings 8:10-11', 'The cloud filled the house of the LORD, and the priests could not stand to minister because of it.', 'textual-detail'),
  question(1, 3, 'Which New Testament book records the Bereans examining the Scriptures daily to test what they heard?', 'Acts', ['Romans', 'Hebrews', 'James'], 'Acts 17:10-12', 'The Bereans received the message eagerly and examined the Scriptures daily to see whether Paul and Silas’ teaching was true.', 'book-identification'),
  question(1, 4, 'Which prophet was instructed to marry Gomer as a sign concerning Israel?', 'Hosea', ['Amos', 'Micah', 'Ezekiel'], 'Hosea 1:2-3', 'The LORD told Hosea to take an unfaithful wife as a prophetic sign concerning the unfaithfulness of the land.', 'prophet-identification'),
  question(1, 5, 'When Jesus asked the disciples who people said He was, which answer did Peter give when Jesus asked, “But who do you say that I am?”', 'You are the Christ, the Son of the living God', ['You are Elijah who is to come', 'You are the prophet like Moses', 'You are the Son of David only'], 'Matthew 16:15-16', 'Peter confessed Jesus as the Christ, the Son of the living God.', 'final-detail'),

  // LEVEL 2 — WHO AM I?
  question(2, 1, 'I was a left-handed Benjamite. I delivered Israel by striking down Moab’s king in a private audience. Who am I?', 'Ehud', ['Shamgar', 'Othniel', 'Gideon'], 'Judges 3:15-22', 'Ehud was a left-handed man from Benjamin who used a concealed sword to kill Eglon, king of Moab.', 'progressive-clues'),
  question(2, 2, 'I was a Cushite official in the service of King Zedekiah. I rescued Jeremiah from a muddy cistern. Who am I?', 'Ebed-melech', ['Baruch', 'Gedaliah', 'Pashhur'], 'Jeremiah 38:7-13', 'Ebed-melech appealed to the king and used ropes and worn-out clothes to lift Jeremiah from the cistern.', 'progressive-clues'),
  question(2, 3, 'I was a craftsman from the tribe of Judah, filled with the Spirit of God for work on the tabernacle. Who am I?', 'Bezalel', ['Oholiab', 'Hur', 'Ithamar'], 'Exodus 31:1-5', 'Bezalel son of Uri was appointed and equipped to design and make the tabernacle furnishings.', 'progressive-clues'),
  question(2, 4, 'I was the prophetess consulted when the Book of the Law was found during King Josiah’s reign. Who am I?', 'Huldah', ['Deborah', 'Miriam', 'Noadiah'], '2 Kings 22:14-20', 'Huldah delivered the LORD’s message to the delegation sent by Josiah.', 'progressive-clues'),
  question(2, 5, 'I was chosen by lot to take the place left vacant by Judas among the apostles. Who am I?', 'Matthias', ['Joseph Barsabbas', 'Barnabas', 'Silas'], 'Acts 1:23-26', 'After prayer and the casting of lots, Matthias was numbered with the eleven apostles.', 'progressive-clues'),

  // LEVEL 3 — THE NAME TRAP
  question(3, 1, 'Which pair correctly identifies the two men named James who appear among the Twelve: one was the son of Zebedee and the other the son of Alphaeus?', 'James son of Zebedee and James son of Alphaeus', ['James the Lord’s brother and James son of Joseph', 'James son of Alphaeus and James son of Cleopas', 'James son of Zebedee and James son of Clopas'], 'Matthew 10:2-3; Mark 3:17-18', 'The lists of the Twelve distinguish James son of Zebedee from James son of Alphaeus.', 'name-disambiguation'),
  question(3, 2, 'Which statement correctly distinguishes the two kings named Herod in the birth and ministry narratives?', 'Herod the Great ruled at Jesus’ birth; Herod Antipas ruled during much of Jesus’ public ministry', ['Herod Antipas ruled at Jesus’ birth; Herod the Great ruled during the trial', 'Both names refer to the same ruler', 'Herod Agrippa ruled at Jesus’ birth; Herod the Great ruled during John’s imprisonment'], 'Matthew 2:1; Luke 3:1; Luke 23:7-11', 'Matthew places Jesus’ birth under Herod the Great; Luke identifies Herod Antipas as tetrarch during Jesus’ ministry.', 'name-disambiguation'),
  question(3, 3, 'Which Mary was the sister of Martha and Lazarus?', 'Mary of Bethany', ['Mary Magdalene', 'Mary the mother of James and Joses', 'Mary the wife of Clopas'], 'John 11:1-2; Luke 10:38-39', 'John identifies Mary as the sister of Martha and Lazarus; Luke records her sitting at Jesus’ feet.', 'name-disambiguation'),
  question(3, 4, 'Which John was the father of the apostle Peter?', 'The Bible does not identify Peter’s father as John; it names him Jonah or John in different translations', ['John the Baptist', 'John the son of Zebedee', 'John Mark'], 'Matthew 16:17; John 1:42', 'Matthew 16:17 calls Peter son of Jonah; John 1:42 uses a form rendered John or Jonah depending on translation. Do not confuse him with John the Baptist or the apostle John.', 'name-disambiguation'),
  question(3, 5, 'Which statement correctly distinguishes Philip the apostle from Philip the evangelist in Acts?', 'Philip the apostle was one of the Twelve; Philip the evangelist was one of the Seven appointed in Jerusalem', ['They are explicitly identified as the same person', 'Philip the evangelist was one of the Twelve; Philip the apostle was one of the Seven', 'Philip the apostle was the Ethiopian official baptized on the road'], 'Matthew 10:2-3; Acts 6:5; Acts 8:5-6', 'The apostle Philip appears in the lists of the Twelve; Acts 6 names Philip among the Seven, and Acts 8 describes his evangelistic work.', 'name-disambiguation'),
];
