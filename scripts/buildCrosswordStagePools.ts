import { writeFileSync, readFileSync } from 'fs';
import { buildBibleCrosswordLayout, CrosswordEntry } from '../src/components/game/BibleCrosswordBoard';
import { BIBLE_CHARACTER_QUEST_QUESTIONS } from '../src/data/bibleCharacterQuestQuestions';
import { SCRIPTURE_SCRAMBLE_QUESTIONS } from '../src/data/scriptureScrambleQuestions';

export type RawClue = {
  answer: string;
  clue: string;
  reference: string;
  tags?: string[];
};

// Global pool of verified clues
export const MASTER_CLUES: RawClue[] = [];
const seenKeys = new Set<string>();

export function addMasterClue(answer: string, clue: string, reference: string, tags: string[] = []) {
  const normAns = answer.toUpperCase().replace(/[^A-Z]/g, '');
  const normClue = clue.trim();
  const normRef = reference.trim();
  if (normAns.length >= 3 && normAns.length <= 16 && normClue && normRef) {
    const key = normAns + '|' + normClue.toLowerCase().slice(0, 30);
    if (!seenKeys.has(key)) {
      seenKeys.add(key);
      MASTER_CLUES.push({ answer: normAns, clue: normClue, reference: normRef, tags });
    }
  }
}

// 1. Core items from bibleContentBank.ts
const bankFile = readFileSync('src/data/bibleContentBank.ts', 'utf-8');

const origMatch = bankFile.matchAll(/\['([A-Z]+)',\s*'([^']+)',\s*'([^']+)'\]/g);
for (const m of origMatch) {
  addMasterClue(m[1], m[2], m[3], ['core', 'general', 'ot', 'nt']);
}

const bookMatch = bankFile.matchAll(/\{\s*name:\s*'([^']+)',\s*clue:\s*'([^']+)',\s*ref:\s*'([^']+)'\s*\}/g);
for (const m of bookMatch) {
  addMasterClue(m[1], m[2], m[3], ['book', 'scripture']);
}

const geoMatch = bankFile.matchAll(/\{\s*place:\s*'([^']+)',\s*event:\s*'([^']+)',\s*ref:\s*'([^']+)'\s*\}/g);
for (const m of geoMatch) {
  addMasterClue(m[1], m[2], m[3], ['place', 'geography']);
}

const detMatch = bankFile.matchAll(/\{\s*id:\s*'[^']+',\s*answer:\s*'([^']+)',\s*clue1:\s*'([^']+)',\s*clue2:\s*'([^']+)',\s*clue3:\s*'([^']+)',\s*ref:\s*'([^']+)'/g);
for (const m of detMatch) {
  addMasterClue(m[1], m[2], m[5], ['detective']);
  addMasterClue(m[1], m[3], m[5], ['detective']);
  addMasterClue(m[1], m[4], m[5], ['detective']);
}

// Character quest clues
for (const q of BIBLE_CHARACTER_QUEST_QUESTIONS) {
  let prompt = q.question_text.replace(/^Who am I\?|Identify the character:?/gi, '').trim();
  if (!prompt || prompt.length < 10) prompt = q.explanation;
  addMasterClue(q.correct_answer, prompt, q.reference, ['character', 'people', q.metadata?.category || 'general']);
}

// Scramble clues
for (const q of SCRIPTURE_SCRAMBLE_QUESTIONS) {
  let prompt = q.explanation;
  if (!prompt || prompt.length < 10) prompt = q.question_text;
  addMasterClue(q.correct_answer, prompt, q.reference, ['scramble', 'words', q.metadata?.category || 'general']);
}

// 2. Add extensive dictionary of uncommon and high-priority biblical clues
const EXTRA_CLUES: RawClue[] = [
  // Uncommon names specifically requested by user
  { answer: 'MELCHIZEDEK', clue: 'King of Salem and priest of God Most High who blessed Abram', reference: 'Genesis 14:18-20', tags: ['uncommon', 'people', 'ot', 'priest'] },
  { answer: 'ONESIPHORUS', clue: 'Ephesian Christian who searched diligently for Paul in Rome and refreshed him', reference: '2 Timothy 1:16-18', tags: ['uncommon', 'people', 'nt', 'companion'] },
  { answer: 'EBEDMELECH', clue: 'Cushite royal official who rescued Jeremiah from the muddy cistern with rags', reference: 'Jeremiah 38:7-13', tags: ['uncommon', 'people', 'ot', 'rescue'] },
  { answer: 'EPAPHRAS', clue: 'Faithful minister from Colossae who wrestled intensely in prayer for the saints', reference: 'Colossians 1:7; 4:12', tags: ['uncommon', 'people', 'nt', 'companion'] },
  { answer: 'HULDAH', clue: 'Prophetess in Jerusalem consulted by King Josiah when the Book of the Law was recovered', reference: '2 Kings 22:14-20', tags: ['uncommon', 'people', 'ot', 'prophetess', 'women'] },
  { answer: 'TYCHICUS', clue: 'Dear brother and faithful minister Paul sent with epistles to Ephesus and Colossae', reference: 'Ephesians 6:21; Colossians 4:7', tags: ['uncommon', 'people', 'nt', 'companion'] },
  { answer: 'BEZALEL', clue: 'Chief craftsman filled with the Spirit of God to construct the Tabernacle furnishings', reference: 'Exodus 31:1-5', tags: ['uncommon', 'people', 'ot', 'artisan'] },
  { answer: 'ARISTARCHUS', clue: 'Macedonian of Thessalonica and fellow prisoner with Paul dragged into the Ephesian theater', reference: 'Acts 19:29; 27:2; Colossians 4:10', tags: ['uncommon', 'people', 'nt', 'companion'] },
  { answer: 'EHUD', clue: 'Left-handed Benjaminite judge who delivered Israel by striking down King Eglon of Moab', reference: 'Judges 3:15-22', tags: ['uncommon', 'people', 'ot', 'judge'] },
  { answer: 'SOSTHENES', clue: 'Ruler of the Corinthian synagogue beaten before Gallio, later co-sender of 1 Corinthians', reference: 'Acts 18:17; 1 Corinthians 1:1', tags: ['uncommon', 'people', 'nt'] },
  { answer: 'JAEL', clue: 'Wife of Heber the Kenite who drove a tent peg into Sisera while he slept', reference: 'Judges 4:17-22', tags: ['uncommon', 'people', 'ot', 'women'] },
  { answer: 'TERTIUS', clue: 'Scribe who penned the Epistle to the Romans as Paul dictated', reference: 'Romans 16:22', tags: ['uncommon', 'people', 'nt', 'scribe'] },
  { answer: 'ZILPAH', clue: 'Leah\'s handmaid who bore Gad and Asher to Jacob', reference: 'Genesis 30:9-13', tags: ['uncommon', 'people', 'ot', 'women', 'patriarch'] },
  { answer: 'QUARTUS', clue: 'Believer in Corinth whom Paul greeted in Romans as "our brother"', reference: 'Romans 16:23', tags: ['uncommon', 'people', 'nt'] },
  { answer: 'TIRZAH', clue: 'One of the five inheritance-seeking daughters of Zelophehad, also early capital of northern Israel', reference: 'Numbers 27:1; 1 Kings 14:17', tags: ['uncommon', 'people', 'ot', 'women', 'place'] },
  { answer: 'TRYPHENA', clue: 'Faithful Christian worker in Rome greeted warmly by the Apostle Paul', reference: 'Romans 16:12', tags: ['uncommon', 'people', 'nt', 'women'] },
  { answer: 'MAHLAH', clue: 'Eldest daughter of Zelophehad who petitioned Moses for land possession among their father\'s brothers', reference: 'Numbers 27:1-7', tags: ['uncommon', 'people', 'ot', 'women'] },
  { answer: 'PERSIS', clue: 'Beloved Christian woman commended by Paul for having laboured much in the Lord', reference: 'Romans 16:12', tags: ['uncommon', 'people', 'nt', 'women'] },
  { answer: 'HOGLAH', clue: 'Third daughter of Zelophehad who secured ancestral inheritance in Manasseh', reference: 'Numbers 26:33; 27:1', tags: ['uncommon', 'people', 'ot', 'women'] },
  { answer: 'MILCAH', clue: 'Fourth daughter of Zelophehad; also grandmother of Rebekah through Nahor', reference: 'Numbers 27:1; Genesis 22:20-23', tags: ['uncommon', 'people', 'ot', 'women'] },
  { answer: 'NOAH', clue: 'Second daughter of Zelophehad, sharing her name in English with the ark builder', reference: 'Numbers 27:1', tags: ['uncommon', 'people', 'ot', 'women'] },
  { answer: 'SHIPHRAH', clue: 'Hebrew midwife who feared God and refused Pharaoh\'s order to kill newborn boys', reference: 'Exodus 1:15-17', tags: ['uncommon', 'people', 'ot', 'women'] },
  { answer: 'PUAH', clue: 'Fellow midwife with Shiphrah who preserved the Hebrew male infants alive in Egypt', reference: 'Exodus 1:15-20', tags: ['uncommon', 'people', 'ot', 'women'] },
  { answer: 'SHAMGAR', clue: 'Son of Anath who struck down six hundred Philistines with an oxgoad to deliver Israel', reference: 'Judges 3:31', tags: ['uncommon', 'people', 'ot', 'judge'] },
  { answer: 'BARZILLAI', clue: 'Elderly Gileadite of Rogelim who provided food and beds for David during Absalom\'s revolt', reference: '2 Samuel 17:27-29; 19:31-39', tags: ['uncommon', 'people', 'ot'] },
  { answer: 'RIZPAH', clue: 'Concubine of Saul who vigilantly protected the hanging bodies of her sons from birds and beasts', reference: '2 Samuel 21:8-11', tags: ['uncommon', 'people', 'ot', 'women'] },
  { answer: 'JEHOSHEBA', clue: 'Daughter of King Jehoram who hid baby Joash in a bedroom from Queen Athaliah\'s slaughter', reference: '2 Kings 11:2-3', tags: ['uncommon', 'people', 'ot', 'women'] },
  { answer: 'MICAIAH', clue: 'Prophet of God who told Ahab the truth about defeat at Ramoth-Gilead while 400 prophets lied', reference: '1 Kings 22:13-28', tags: ['uncommon', 'people', 'ot', 'prophet'] },
  { answer: 'MEPHIBOSHETH', clue: 'Lame son of Jonathan welcomed by David to eat at the king\'s royal table continually', reference: '2 Samuel 9:1-13', tags: ['uncommon', 'people', 'ot'] },
  { answer: 'BENAIAH', clue: 'Mighty warrior who struck down a lion in a pit on a snowy day and led David\'s bodyguard', reference: '2 Samuel 23:20-23', tags: ['uncommon', 'people', 'ot', 'warrior'] },
  { answer: 'ITHAMAR', clue: 'Youngest son of Aaron who directed the Levites in inventorying the Tabernacle metals', reference: 'Exodus 38:21', tags: ['uncommon', 'people', 'ot', 'priest'] },
  { answer: 'ELEAZAR', clue: 'Aaron\'s third son who succeeded him as high priest on Mount Hor', reference: 'Numbers 20:25-28', tags: ['uncommon', 'people', 'ot', 'priest'] },
  { answer: 'PHINEHAS', clue: 'Son of Eleazar whose zealous intervention at Peor stopped the plague on Israel', reference: 'Numbers 25:6-13', tags: ['uncommon', 'people', 'ot', 'priest'] },
  { answer: 'HUR', clue: 'Companion of Moses and Aaron who helped hold up Moses\' arms during the battle with Amalek', reference: 'Exodus 17:10-12', tags: ['uncommon', 'people', 'ot'] },
  { answer: 'OTHNIEL', clue: 'Caleb\'s nephew who captured Kiriath-sepher and became the first judge of Israel', reference: 'Judges 3:9-11', tags: ['uncommon', 'people', 'ot', 'judge'] },
  { answer: 'ACHSAH', clue: 'Daughter of Caleb who asked her father for both upper and lower water springs', reference: 'Joshua 15:16-19', tags: ['uncommon', 'people', 'ot', 'women'] },
  { answer: 'JETHRO', clue: 'Priest of Midian and father-in-law of Moses who advised delegating judgment to capable leaders', reference: 'Exodus 18:1-24', tags: ['uncommon', 'people', 'ot'] },
  { answer: 'REUEL', clue: 'Another name for Moses\' Midianite father-in-law Jethro', reference: 'Exodus 2:18', tags: ['uncommon', 'people', 'ot'] },
  { answer: 'HOBAB', clue: 'Moses\' brother-in-law requested to serve as eyes and wilderness guide for Israel', reference: 'Numbers 10:29-32', tags: ['uncommon', 'people', 'ot'] },
  { answer: 'PURAH', clue: 'Servant who accompanied Gideon into the Midianite camp to overhear the dream of the barley loaf', reference: 'Judges 7:9-11', tags: ['uncommon', 'people', 'ot'] },
  { answer: 'ABIMELECH', clue: 'Son of Gideon who murdered seventy of his brothers on one stone to rule Shechem', reference: 'Judges 9:1-6', tags: ['uncommon', 'people', 'ot'] },
  { answer: 'JOTHAM', clue: 'Gideon\'s youngest son who escaped Abimelech\'s slaughter and told the fable of the trees and bramble', reference: 'Judges 9:7-21', tags: ['uncommon', 'people', 'ot'] },
  { answer: 'TOLA', clue: 'Judge of the tribe of Issachar who arose after Abimelech to save Israel for twenty-three years', reference: 'Judges 10:1-2', tags: ['uncommon', 'people', 'ot', 'judge'] },
  { answer: 'JAIR', clue: 'Gileadite judge who had thirty sons who rode thirty donkeys and controlled thirty towns', reference: 'Judges 10:3-4', tags: ['uncommon', 'people', 'ot', 'judge'] },
  { answer: 'IBZAN', clue: 'Judge of Bethlehem who had thirty sons and thirty daughters whom he gave in marriage outside his clan', reference: 'Judges 12:8-10', tags: ['uncommon', 'people', 'ot', 'judge'] },
  { answer: 'ELON', clue: 'Judge from the tribe of Zebulun who led Israel for ten years', reference: 'Judges 12:11-12', tags: ['uncommon', 'people', 'ot', 'judge'] },
  { answer: 'ABDON', clue: 'Judge of Pirathon who had forty sons and thirty grandsons who rode on seventy donkeys', reference: 'Judges 12:13-15', tags: ['uncommon', 'people', 'ot', 'judge'] },
  { answer: 'MANOAH', clue: 'Father of Samson from the tribe of Dan who prayed for guidance from the Angel of the LORD', reference: 'Judges 13:2-23', tags: ['uncommon', 'people', 'ot'] },
  { answer: 'PENINNAH', clue: 'Wife of Elkanah who provoked Hannah grievously because the LORD had closed Hannah\'s womb', reference: '1 Samuel 1:2-7', tags: ['uncommon', 'people', 'ot', 'women'] },
  { answer: 'ICHABOD', clue: 'Son of Phinehas whose name means "the glory has departed" when the Ark of God was captured', reference: '1 Samuel 4:19-22', tags: ['uncommon', 'people', 'ot'] },
  { answer: 'ABNER', clue: 'Commander of Saul\'s army who made Ishbosheth king before defecting to David', reference: '2 Samuel 2:8; 3:12', tags: ['uncommon', 'people', 'ot'] },
  { answer: 'ISHBOSHETH', clue: 'Saul\'s son proclaimed king over eleven tribes at Mahanaim after Saul\'s death', reference: '2 Samuel 2:8-10', tags: ['uncommon', 'people', 'ot'] },
  { answer: 'ABISHAI', clue: 'David\'s fiercely loyal nephew who slipped with him into Saul\'s camp and took the spear and water jug', reference: '1 Samuel 26:6-12', tags: ['uncommon', 'people', 'ot', 'warrior'] },
  { answer: 'ASAHEL', clue: 'Brother of Joab, as fleet of foot as a gazelle, slain by Abner\'s reversed spear', reference: '2 Samuel 2:18-23', tags: ['uncommon', 'people', 'ot'] },
  { answer: 'AMASA', clue: 'Absalom\'s army commander whom Joab deceitfully kissed and stabbed at the great rock of Gibeon', reference: '2 Samuel 20:9-10', tags: ['uncommon', 'people', 'ot'] },
  { answer: 'ZERUIAH', clue: 'David\'s sister whose three mighty sons Joab, Abishai, and Asahel served as military commanders', reference: '1 Chronicles 2:16; 2 Samuel 2:18', tags: ['uncommon', 'people', 'ot', 'women'] },
  { answer: 'ITTAI', clue: 'Loyal Philistine warrior of Gath who pledged allegiance to follow David even in exile', reference: '2 Samuel 15:19-22', tags: ['uncommon', 'people', 'ot'] },
  { answer: 'HUSHAI', clue: 'David\'s friend and counselor who infiltrated Absalom\'s council to defeat Ahithophel\'s advice', reference: '2 Samuel 15:32-37; 17:5-14', tags: ['uncommon', 'people', 'ot'] },
  { answer: 'AHITHOPHEL', clue: 'David\'s wise counselor whose advice was like the oracle of God, who hanged himself after Absalom rejected his plan', reference: '2 Samuel 16:23; 17:23', tags: ['uncommon', 'people', 'ot'] },
  { answer: 'ZIBA', clue: 'Former servant of Saul\'s house who informed David about lame Mephibosheth', reference: '2 Samuel 9:2-4', tags: ['uncommon', 'people', 'ot'] },
  { answer: 'CHIMHAM', clue: 'Son of Barzillai who accompanied David to Jerusalem in place of his elderly father', reference: '2 Samuel 19:37-40', tags: ['uncommon', 'people', 'ot'] },
  { answer: 'SHIMEI', clue: 'Benjaminite from Gera who cursed and threw stones at David fleeing Absalom', reference: '2 Samuel 16:5-13', tags: ['uncommon', 'people', 'ot'] },
  { answer: 'SHEBA', clue: 'Troublemaker from Benjamin who blew a trumpet and led a rebellion against David saying "we have no share in David"', reference: '2 Samuel 20:1-2', tags: ['uncommon', 'people', 'ot'] },
  { answer: 'ADONIJAH', clue: 'Eldest surviving son of David who exalted himself saying "I will be king" before Solomon was crowned', reference: '1 Kings 1:5-10', tags: ['uncommon', 'people', 'ot'] },
  { answer: 'ABIATHAR', clue: 'Sole surviving priest from the massacre at Nob who fled to David with the ephod', reference: '1 Samuel 22:20-23', tags: ['uncommon', 'people', 'ot', 'priest'] },
  { answer: 'ZADOK', clue: 'Faithful high priest who anointed Solomon at Gihon spring alongside Nathan the prophet', reference: '1 Kings 1:38-39', tags: ['uncommon', 'people', 'ot', 'priest'] },
  { answer: 'ATHALIAH', clue: 'Wicked daughter of Ahab and Jezebel who usurped the throne of Judah and destroyed royal heirs', reference: '2 Kings 11:1-3', tags: ['uncommon', 'people', 'ot', 'women', 'monarch'] },
  { answer: 'JEHOIADA', clue: 'High priest who orchestrated the downfall of Queen Athaliah and crowned young Joash king', reference: '2 Kings 11:4-16', tags: ['uncommon', 'people', 'ot', 'priest'] },
  { answer: 'GEDALIAH', clue: 'Governor appointed over Judah\'s remnant by Nebuchadnezzar, assassinated at Mizpah', reference: '2 Kings 25:22-25; Jeremiah 40:7', tags: ['uncommon', 'people', 'ot'] },
  { answer: 'BARUCH', clue: 'Faithful scribe who recorded Jeremiah\'s prophecies from dictation onto a papyrus scroll', reference: 'Jeremiah 36:4-10', tags: ['uncommon', 'people', 'ot', 'scribe'] },
  { answer: 'SERAIAH', clue: 'Chief quartermaster sent by Jeremiah to Babylon with a scroll to read and throw into the Euphrates', reference: 'Jeremiah 51:59-64', tags: ['uncommon', 'people', 'ot'] },
  { answer: 'GEHAZI', clue: 'Greedy servant of Elisha struck with Naaman\'s leprosy after running after silver and garments', reference: '2 Kings 5:20-27', tags: ['uncommon', 'people', 'ot'] },
  { answer: 'HAZAEL', clue: 'Syrian officer who smothered his master King Ben-Hadad with a wet thick cloth and seized the throne', reference: '2 Kings 8:7-15', tags: ['uncommon', 'people', 'ot'] },
  { answer: 'JEHU', clue: 'Furious chariot-driver anointed king of Israel to execute judgment on the house of Ahab', reference: '2 Kings 9:1-24', tags: ['uncommon', 'people', 'ot', 'monarch'] },
  { answer: 'RABSHAKEH', clue: 'Assyrian military envoy who shouted blasphemous intimidation in Hebrew on Jerusalem\'s wall', reference: '2 Kings 18:17-35', tags: ['uncommon', 'people', 'ot'] },
  { answer: 'NEBUZARADAN', clue: 'Captain of the Babylonian royal bodyguard who burned the Temple and broke down Jerusalem\'s walls', reference: '2 Kings 25:8-11', tags: ['uncommon', 'people', 'ot'] },
  { answer: 'EVILMERODACH', clue: 'King of Babylon who released Judean King Jehoiachin from prison and gave him a regular allowance', reference: '2 Kings 25:27-30', tags: ['uncommon', 'people', 'ot', 'monarch'] },
  { answer: 'BELSHAZZAR', clue: 'Babylonian coregent who drank from sacred Temple vessels and saw the mysterious handwriting on the wall', reference: 'Daniel 5:1-5', tags: ['uncommon', 'people', 'ot', 'monarch'] },
  { answer: 'VASHTI', clue: 'Queen of Persia who refused King Ahasuerus\' command to display her beauty before banquet guests', reference: 'Esther 1:10-12', tags: ['uncommon', 'people', 'ot', 'women'] },
  { answer: 'ZERESH', clue: 'Wife of Haman who advised building a seventy-five-foot gallows to hang Mordecai', reference: 'Esther 5:14; 6:13', tags: ['uncommon', 'people', 'ot', 'women'] },
  { answer: 'HARBONA', clue: 'Royal eunuch who pointed out to King Ahasuerus the gallows Haman had prepared for Mordecai', reference: 'Esther 7:9', tags: ['uncommon', 'people', 'ot'] },
  { answer: 'SANBALLAT', clue: 'Horonite governor who conspired with Tobiah to mock and oppose the rebuilding of Jerusalem\'s walls', reference: 'Nehemiah 2:19; 4:1-8', tags: ['uncommon', 'people', 'ot'] },
  { answer: 'TOBIAH', clue: 'Ammonite official who sneered that even a fox walking on Nehemiah\'s stone wall would break it down', reference: 'Nehemiah 2:10; 4:3', tags: ['uncommon', 'people', 'ot'] },
  { answer: 'GESHEM', clue: 'Arab leader who joined Sanballat and Tobiah in falsely accusing Nehemiah of planning rebellion', reference: 'Nehemiah 2:19; 6:1-6', tags: ['uncommon', 'people', 'ot'] },
  { answer: 'PROCHORUS', clue: 'One of the seven godly men chosen to oversee daily food distribution to Greek-speaking widows', reference: 'Acts 6:5', tags: ['uncommon', 'people', 'nt', 'deacon'] },
  { answer: 'NICANOR', clue: 'One of the seven deacons appointed alongside Stephen and Philip in Jerusalem', reference: 'Acts 6:5', tags: ['uncommon', 'people', 'nt', 'deacon'] },
  { answer: 'TIMON', clue: 'One of the original seven deacons ordained with prayer and the laying on of hands', reference: 'Acts 6:5-6', tags: ['uncommon', 'people', 'nt', 'deacon'] },
  { answer: 'PARMENAS', clue: 'One of the seven selected to serve tables in the early Jerusalem church', reference: 'Acts 6:5', tags: ['uncommon', 'people', 'nt', 'deacon'] },
  { answer: 'NICOLAUS', clue: 'Proselyte from Antioch appointed as one of the seven deacons in Acts', reference: 'Acts 6:5', tags: ['uncommon', 'people', 'nt', 'deacon'] },
  { answer: 'SAPPHIRA', clue: 'Wife of Ananias who colluded in withholding money and fell dead before Peter', reference: 'Acts 5:1-10', tags: ['uncommon', 'people', 'nt', 'women'] },
  { answer: 'RHODA', clue: 'Servant girl at Mary\'s house who was so overjoyed hearing Peter\'s voice she forgot to open the gate', reference: 'Acts 12:13-16', tags: ['uncommon', 'people', 'nt', 'women'] },
  { answer: 'MALCHUS', clue: 'High priest\'s servant whose right ear was cut off by Peter in Gethsemane and healed by Jesus', reference: 'John 18:10; Luke 22:50-51', tags: ['uncommon', 'people', 'nt'] },
  { answer: 'PUBLIUS', clue: 'Chief official of Malta whose estate hosted Paul and whose sick father was healed of dysentery', reference: 'Acts 28:7-8', tags: ['uncommon', 'people', 'nt'] },
  { answer: 'SERGIUS', clue: 'Roman proconsul of Cyprus who believed the gospel after Paul blinded Elymas the sorcerer', reference: 'Acts 13:7-12', tags: ['uncommon', 'people', 'nt'] },
  { answer: 'ELYMAS', clue: 'Jewish sorcerer and false prophet on Cyprus who tried to turn the proconsul from the faith', reference: 'Acts 13:8-11', tags: ['uncommon', 'people', 'nt'] },
  { answer: 'GALLIO', clue: 'Roman proconsul of Achaia who dismissed Jewish charges against Paul as a matter of internal law', reference: 'Acts 18:12-17', tags: ['uncommon', 'people', 'nt'] },
  { answer: 'TERTULLUS', clue: 'Professional orator hired by high priest Ananias to present formal charges against Paul before Felix', reference: 'Acts 24:1-8', tags: ['uncommon', 'people', 'nt'] },
  { answer: 'BERNICE', clue: 'Sister of King Agrippa II who sat beside him in grand pomp to hear Paul\'s defense in Caesarea', reference: 'Acts 25:13, 23', tags: ['uncommon', 'people', 'nt', 'women'] },
  { answer: 'DRUSILLA', clue: 'Jewish wife of Governor Felix who listened with him as Paul spoke on righteousness and self-control', reference: 'Acts 24:24', tags: ['uncommon', 'people', 'nt', 'women'] },
  { answer: 'CRISPUS', clue: 'Corinthian synagogue ruler who believed in the Lord with his entire household and was baptized by Paul', reference: 'Acts 18:8; 1 Corinthians 1:14', tags: ['uncommon', 'people', 'nt'] },
  { answer: 'JUSTUS', clue: 'Titius Justus, worshiper of God whose house next door to the Corinthian synagogue became a meeting place', reference: 'Acts 18:7', tags: ['uncommon', 'people', 'nt'] },
  { answer: 'CLEOPAS', clue: 'One of the two disciples whose hearts burned as the risen Jesus walked with them to Emmaus', reference: 'Luke 24:13-32', tags: ['uncommon', 'people', 'nt'] },
  { answer: 'CLOPAS', clue: 'Husband of Mary who stood near the cross of Jesus alongside his mother', reference: 'John 19:25', tags: ['uncommon', 'people', 'nt'] },
  { answer: 'BARTIMAEUS', clue: 'Blind beggar near Jericho who called out "Jesus, Son of David, have mercy on me!"', reference: 'Mark 10:46-52', tags: ['uncommon', 'people', 'nt'] },
  { answer: 'JAIRUS', clue: 'Synagogue leader who fell at Jesus\' feet pleading for his dying twelve-year-old daughter', reference: 'Mark 5:22-43', tags: ['uncommon', 'people', 'nt'] },
  { answer: 'MNASON', clue: 'Early disciple from Cyprus with whom Paul and his companions lodged when arriving in Jerusalem', reference: 'Acts 21:16', tags: ['uncommon', 'people', 'nt'] },
  { answer: 'SECUNDUS', clue: 'Thessalonian Christian who accompanied Paul on his journey carrying the relief collection to Jerusalem', reference: 'Acts 20:4', tags: ['uncommon', 'people', 'nt'] },
  { answer: 'SOPATER', clue: 'Son of Pyrrhus from Berea who traveled with Paul into Asia', reference: 'Acts 20:4', tags: ['uncommon', 'people', 'nt'] },
  { answer: 'EPAPHRODITUS', clue: 'Philippian messenger who risked his life carrying aid to Paul in prison and fell gravely ill', reference: 'Philippians 2:25-30', tags: ['uncommon', 'people', 'nt'] },
  { answer: 'ARCHIPPUS', clue: 'Fellow soldier urged by Paul in Colossians to "fulfill the ministry you received in the Lord"', reference: 'Colossians 4:17; Philemon 1:2', tags: ['uncommon', 'people', 'nt'] },
  { answer: 'APPHIA', clue: 'Christian sister greeted in Philemon alongside Archippus and the church in Philemon\'s house', reference: 'Philemon 1:2', tags: ['uncommon', 'people', 'nt', 'women'] },
  { answer: 'CARPUS', clue: 'Believer in Troas at whose house Paul left his cloak and parchments', reference: '2 Timothy 4:13', tags: ['uncommon', 'people', 'nt'] },
  { answer: 'CLAUDIA', clue: 'Christian sister in Rome who sent greetings to Timothy alongside Eubulus, Pudens, and Linus', reference: '2 Timothy 4:21', tags: ['uncommon', 'people', 'nt', 'women'] },
  { answer: 'PUDENS', clue: 'Roman believer who sent greetings to Timothy in Paul\'s final letter', reference: '2 Timothy 4:21', tags: ['uncommon', 'people', 'nt'] },
  { answer: 'LINUS', clue: 'Roman Christian mentioned in 2 Timothy, recognized early in church history as an elder of Rome', reference: '2 Timothy 4:21', tags: ['uncommon', 'people', 'nt'] },
  { answer: 'EUBULUS', clue: 'Brother in Rome who sent personal greetings to Timothy during Paul\'s second Roman imprisonment', reference: '2 Timothy 4:21', tags: ['uncommon', 'people', 'nt'] },
  { answer: 'ARTEMAS', clue: 'Co-worker Paul considered sending to Titus in Crete before calling Titus to Nicopolis', reference: 'Titus 3:12', tags: ['uncommon', 'people', 'nt'] },
  { answer: 'ZENAS', clue: 'Christian lawyer whom Paul instructed Titus to assist diligently on his journey', reference: 'Titus 3:13', tags: ['uncommon', 'people', 'nt'] },
  { answer: 'ASYNCRITUS', clue: 'Believer in Rome greeted by name in Paul\'s extensive list of greetings', reference: 'Romans 16:14', tags: ['uncommon', 'people', 'nt'] },
  { answer: 'PHLEGON', clue: 'Roman brother greeted alongside Hermes, Patrobas, and Hermas in Romans 16', reference: 'Romans 16:14', tags: ['uncommon', 'people', 'nt'] },
  { answer: 'PATROBAS', clue: 'Christian disciple in Rome greeted by Paul in Romans 16:14', reference: 'Romans 16:14', tags: ['uncommon', 'people', 'nt'] },
  { answer: 'HERMAS', clue: 'Brother in the Lord in Rome mentioned in Paul\'s greetings to the house churches', reference: 'Romans 16:14', tags: ['uncommon', 'people', 'nt'] },
  { answer: 'PHILOLOGUS', clue: 'Roman Christian greeted together with Julia, Nereus, and Olympas', reference: 'Romans 16:15', tags: ['uncommon', 'people', 'nt'] },
  { answer: 'JULIA', clue: 'Christian woman in Rome greeted in Romans 16:15', reference: 'Romans 16:15', tags: ['uncommon', 'people', 'nt', 'women'] },
  { answer: 'NEREUS', clue: 'Believer greeted with his sister and Olympas in Romans 16:15', reference: 'Romans 16:15', tags: ['uncommon', 'people', 'nt'] },
  { answer: 'OLYMPAS', clue: 'Roman disciple greeted alongside Philologus, Julia, and Nereus', reference: 'Romans 16:15', tags: ['uncommon', 'people', 'nt'] },
  { answer: 'JASON', clue: 'Thessalonian host whose house was dragged before magistrates because he welcomed Paul and Silas', reference: 'Acts 17:5-9; Romans 16:21', tags: ['uncommon', 'people', 'nt'] },
  { answer: 'SOSIPATER', clue: 'Kinsman of Paul who sent warm greetings to the church in Rome', reference: 'Romans 16:21', tags: ['uncommon', 'people', 'nt'] },
  { answer: 'LUCIUS', clue: 'Kinsman of Paul or prophet/teacher from Cyrene mentioned in Antioch and Romans', reference: 'Acts 13:1; Romans 16:21', tags: ['uncommon', 'people', 'nt'] },
  { answer: 'MANAEN', clue: 'Teacher in the church at Antioch who had been brought up with Herod the tetrarch', reference: 'Acts 13:1', tags: ['uncommon', 'people', 'nt'] },

  // Transliterated words, Hebrew/Greek terms & sacred objects
  { answer: 'SHIBBOLETH', clue: 'Password word used by Jephthah\'s men at Jordan crossings to detect Ephraimites who pronounced it Sibboleth', reference: 'Judges 12:6', tags: ['vocabulary', 'hebrew', 'ot'] },
  { answer: 'MARANATHA', clue: 'Aramaic prayer meaning "Our Lord, come!" with which Paul closed 1 Corinthians', reference: '1 Corinthians 16:22', tags: ['vocabulary', 'aramaic', 'nt'] },
  { answer: 'EPHPHATHA', clue: 'Aramaic command spoken by Jesus meaning "Be opened!" when healing a deaf and mute man', reference: 'Mark 7:34', tags: ['vocabulary', 'aramaic', 'nt'] },
  { answer: 'TALITHA', clue: 'Aramaic word spoken by Jesus meaning "Little girl" before saying "arise"', reference: 'Mark 5:41', tags: ['vocabulary', 'aramaic', 'nt'] },
  { answer: 'CORBAN', clue: 'Hebrew/Aramaic term meaning a gift devoted to God, rebuked when used to bypass caring for parents', reference: 'Mark 7:11', tags: ['vocabulary', 'hebrew', 'nt'] },
  { answer: 'AKELDAMA', clue: 'Aramaic name meaning "Field of Blood", bought with the thirty pieces of silver', reference: 'Acts 1:19; Matthew 27:8', tags: ['vocabulary', 'aramaic', 'place'] },
  { answer: 'BOANERGES', clue: 'Aramaic nickname given by Jesus to James and John meaning "Sons of Thunder"', reference: 'Mark 3:17', tags: ['vocabulary', 'aramaic', 'nt'] },
  { answer: 'RABBONI', clue: 'Aramaic title meaning "My Great Teacher", spoken joyfully by Mary Magdalene outside the empty tomb', reference: 'John 20:16', tags: ['vocabulary', 'aramaic', 'nt'] },
  { answer: 'EBENEZER', clue: 'Memorial stone set up by Samuel between Mizpah and Shen saying "Thus far the LORD has helped us"', reference: '1 Samuel 7:12', tags: ['vocabulary', 'hebrew', 'ot'] },
  { answer: 'MAHERSHALAL', clue: 'Symbolic prophetic name given to Isaiah\'s newborn son meaning "Speed the spoil, hasten the booty"', reference: 'Isaiah 8:1-3', tags: ['vocabulary', 'hebrew', 'prophet'] },
  { answer: 'PHYLACTERY', clue: 'Small leather box containing Scripture verses worn on forehead and arm during prayer', reference: 'Matthew 23:5; Deuteronomy 6:8', tags: ['object', 'sacred'] },
  { answer: 'BREASTPIECE', clue: 'Square embroidered pouch mounted with twelve precious engraved gemstones worn by the high priest', reference: 'Exodus 28:15-21', tags: ['object', 'sacred', 'priest'] },
  { answer: 'MERCYSEAT', clue: 'Pure gold lid atop the Ark of the Covenant between the wings of two golden cherubim', reference: 'Exodus 25:17-22', tags: ['object', 'sacred'] },
  { answer: 'CANDLESTICK', clue: 'Seven-branched pure gold lampstand hammered from a single talent of gold for the Holy Place', reference: 'Exodus 25:31-37', tags: ['object', 'sacred'] },
  { answer: 'FRANKINCENSE', clue: 'Fragrant white resin burned on the altar of incense and presented as a gift by the Magi', reference: 'Exodus 30:34; Matthew 2:11', tags: ['object', 'sacred'] },
  { answer: 'SHOWBREAD', clue: 'Twelve consecrated loaves of bread arranged weekly before the LORD on the golden table', reference: 'Leviticus 24:5-9', tags: ['object', 'sacred'] },

  // Geographic places & towns
  { answer: 'ENGEDI', clue: 'Oasis and crag of wild goats by the Dead Sea where David cut off the corner of Saul\'s robe in a cave', reference: '1 Samuel 24:1-4', tags: ['place', 'ot'] },
  { answer: 'ZIKLAG', clue: 'Philistine border city given to David by King Achish, raided and burned by Amalekites', reference: '1 Samuel 27:6; 30:1', tags: ['place', 'ot'] },
  { answer: 'JEZREEL', clue: 'Fertile valley and royal winter city where Naboth kept a vineyard coveted by Ahab', reference: '1 Kings 21:1; Hosea 1:4', tags: ['place', 'ot'] },
  { answer: 'MIZPAH', clue: 'Watchtower town where Israel assembled before Samuel and where Governor Gedaliah governed', reference: '1 Samuel 7:5-6; 2 Kings 25:23', tags: ['place', 'ot'] },
  { answer: 'GIBEON', clue: 'City whose inhabitants tricked Joshua with moldy bread, where the sun stood still in battle', reference: 'Joshua 9:3-15; 10:12', tags: ['place', 'ot'] },
  { answer: 'AIJALON', clue: 'Valley over which Joshua commanded the moon to stand motionless during the fight for Gibeon', reference: 'Joshua 10:12-13', tags: ['place', 'ot'] },
  { answer: 'SHILOH', clue: 'Early central sanctuary in Ephraim where the Tabernacle stood and young Samuel ministered', reference: 'Joshua 18:1; 1 Samuel 3:21', tags: ['place', 'ot'] },
  { answer: 'BEREA', clue: 'Macedonian city whose noble citizens examined the Scriptures daily to verify Paul\'s teachings', reference: 'Acts 17:10-12', tags: ['place', 'nt'] },
  { answer: 'TROAS', clue: 'Coastal city in Mysia where Paul saw the night vision of the man of Macedonia pleading "Come over and help us"', reference: 'Acts 16:8-10', tags: ['place', 'nt'] },
  { answer: 'MILETUS', clue: 'Port city where Paul gave his poignant farewell address to the elders of the church of Ephesus', reference: 'Acts 20:17-38', tags: ['place', 'nt'] },
  { answer: 'CENCHREAE', clue: 'Port of Corinth where Paul had his hair cut because of a vow, and home of deaconess Phoebe', reference: 'Acts 18:18; Romans 16:1', tags: ['place', 'nt'] },
  { answer: 'DERBE', clue: 'Galatian city where Paul and Barnabas preached and made many disciples after fleeing Lystra', reference: 'Acts 14:20-21', tags: ['place', 'nt'] },
  { answer: 'LYSTRA', clue: 'City where Paul healed a crippled man, was hailed as Hermes, and was subsequently stoned and left for dead', reference: 'Acts 14:8-19', tags: ['place', 'nt'] },
  { answer: 'ICONIUM', clue: 'City in Asia Minor where a great multitude of Jews and Greeks believed despite severe opposition', reference: 'Acts 14:1-5', tags: ['place', 'nt'] },
  { answer: 'PAPHOS', clue: 'City on Cyprus where proconsul Sergius Paulus was converted after Elymas was struck blind', reference: 'Acts 13:6-12', tags: ['place', 'nt'] },
  { answer: 'PATMOS', clue: 'Aegean island where the Apostle John was exiled for the word of God and received the Revelation', reference: 'Revelation 1:9', tags: ['place', 'nt'] },
  { answer: 'SMYRNA', clue: 'City of Asia Minor whose persecuted church was promised the crown of life if faithful unto death', reference: 'Revelation 2:8-10', tags: ['place', 'nt'] },
  { answer: 'PERGAMUM', clue: 'City described in Revelation as the place "where Satan has his throne"', reference: 'Revelation 2:12-13', tags: ['place', 'nt'] },
  { answer: 'THYATIRA', clue: 'City known for its purple dye trade, home of Lydia, and rebuked in Revelation for tolerating Jezebel', reference: 'Acts 16:14; Revelation 2:18-20', tags: ['place', 'nt'] },
  { answer: 'SARDIS', clue: 'City whose church had a reputation of being alive but was pronounced dead by Christ', reference: 'Revelation 3:1-3', tags: ['place', 'nt'] },
  { answer: 'PHILADELPHIA', clue: 'City whose faithful church was set before an open door that no one could shut', reference: 'Revelation 3:7-8', tags: ['place', 'nt'] },
  { answer: 'LAODICEA', clue: 'Wealthy city whose lukewarm church was warned that Christ would spit them out of His mouth', reference: 'Revelation 3:14-17', tags: ['place', 'nt'] },
];

for (const c of EXTRA_CLUES) {
  addMasterClue(c.answer, c.clue, c.reference, c.tags);
}

console.log('Total master clues compiled:', MASTER_CLUES.length);
const distinctAns = new Set(MASTER_CLUES.map(c => c.answer));
console.log('Distinct answers:', distinctAns.size);
