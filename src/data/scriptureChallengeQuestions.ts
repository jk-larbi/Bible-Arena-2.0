export interface ScriptureChallengeSeedQuestion {
  question_text: string;
  options: string[];
  correct_answer: string;
  explanation: string;
  reference: string;
  category: string;
  difficulty: 'medium' | 'hard' | 'very-hard';
}

const q = (
  question_text: string,
  correct_answer: string,
  distractors: [string, string, string],
  reference: string,
  explanation: string,
  category: string,
  difficulty: ScriptureChallengeSeedQuestion['difficulty'] = 'hard',
): ScriptureChallengeSeedQuestion => ({
  question_text,
  options: [correct_answer, ...distractors],
  correct_answer,
  reference,
  explanation,
  category,
  difficulty,
});

/**
 * Curated opening bank for Scripture Challenge. Questions are paraphrased,
 * text-grounded, and paired with references for player review.
 */
export const SCRIPTURE_CHALLENGE_OPENING_BANK: ScriptureChallengeSeedQuestion[] = [
  q('Which of Noah’s sons is named in the passage as the father of Canaan?', 'Ham', ['Shem', 'Japheth', 'Lamech'], 'Genesis 9:18, 22-25', 'Genesis identifies Ham as the father of Canaan in the account following the flood.', 'Genealogy', 'hard'),
  q('What name is given to the servant Abraham sent to find a wife for Isaac, when Abraham speaks of his household heir?', 'Eliezer of Damascus', ['Abimelech of Gerar', 'Lot of Sodom', 'Ephron the Hittite'], 'Genesis 15:2; 24:2-4', 'Genesis 15:2 names Eliezer of Damascus as the servant who would inherit Abraham’s household if he remained childless. Genesis 24 describes the servant’s mission.', 'People and relationships', 'very-hard'),
  q('Which name did Hagar use for the LORD after He spoke to her in the wilderness?', 'El Roi', ['El Shaddai', 'Jehovah Jireh', 'El Elyon'], 'Genesis 16:13', 'Hagar called the LORD “the God who sees me” after her encounter in the wilderness.', 'Names of God', 'hard'),
  q('Melchizedek was king of which place when he brought bread and wine to Abram?', 'Salem', ['Sodom', 'Bethel', 'Hebron'], 'Genesis 14:18', 'Melchizedek is identified as king of Salem and priest of God Most High.', 'Geography', 'hard'),
  q('Whose nurse was Deborah, whose death is recorded near Bethel under an oak tree?', 'Rebekah', ['Rachel', 'Leah', 'Sarah'], 'Genesis 35:8; compare Genesis 24:59', 'Genesis 35:8 records the death and burial of Deborah, Rebekah’s nurse.', 'People and relationships', 'very-hard'),
  q('How old was Isaac when he married Rebekah?', 'Forty', ['Thirty', 'Thirty-five', 'Sixty'], 'Genesis 25:20', 'The text states that Isaac was forty years old when he took Rebekah as his wife.', 'Numbers and details', 'medium'),
  q('What food did Esau receive in exchange for his birthright?', 'Bread and lentil stew', ['Roasted goat and wine', 'Manna and water', 'A bowl of barley porridge'], 'Genesis 25:29-34', 'Jacob gave Esau bread and lentil stew; Esau ate and drank before despising his birthright.', 'Biblical events', 'hard'),
  q('When Joseph’s brothers returned to Egypt with Benjamin, which brother offered to remain as a slave in Benjamin’s place?', 'Judah', ['Reuben', 'Simeon', 'Levi'], 'Genesis 44:18, 33-34', 'Judah pleaded with Joseph and offered himself as a substitute so Benjamin could return to their father.', 'People and relationships', 'hard'),
  q('Into whose sack did Joseph’s steward place Joseph’s silver cup?', 'Benjamin’s sack', ['Reuben’s sack', 'Judah’s sack', 'Simeon’s sack'], 'Genesis 44:1-2, 12', 'Joseph instructed his steward to place the cup in Benjamin’s sack before the brothers departed.', 'Biblical events', 'hard'),
  q('In the cupbearer’s dream, how many branches did the vine have?', 'Three', ['Two', 'Five', 'Seven'], 'Genesis 40:9-13', 'Joseph interpreted the three branches as three days, after which Pharaoh would restore the cupbearer.', 'Numbers and details', 'very-hard'),
  q('What was the name of Moses’ wife, the daughter of Reuel (Jethro)?', 'Zipporah', ['Miriam', 'Keziah', 'Abigail'], 'Exodus 2:21; 3:1', 'Moses married Zipporah, one of the daughters of the Midianite priest Reuel, also called Jethro.', 'People and relationships', 'medium'),
  q('Bezalel, whom God filled with skill for the tabernacle work, was from which tribe?', 'Judah', ['Levi', 'Benjamin', 'Ephraim'], 'Exodus 31:1-5', 'Bezalel son of Uri, son of Hur, was from the tribe of Judah and was appointed for skilled craftsmanship.', 'Tribes of Israel', 'very-hard'),
  q('Oholiab, appointed alongside Bezalel for the tabernacle work, was from which tribe?', 'Dan', ['Judah', 'Naphtali', 'Issachar'], 'Exodus 31:6; 35:34', 'Oholiab son of Ahisamach was from the tribe of Dan.', 'Tribes of Israel', 'very-hard'),
  q('Which two sons of Aaron died after offering unauthorized fire before the LORD?', 'Nadab and Abihu', ['Eleazar and Ithamar', 'Hophni and Phinehas', 'Gershom and Eliezer'], 'Leviticus 10:1-2', 'Nadab and Abihu offered unauthorized fire, and fire came out from before the LORD and consumed them.', 'Priests and worship', 'hard'),
  q('Which daughter of Zelophehad is NOT among the five sisters named in Numbers 27?', 'Tamar', ['Mahlah', 'Hoglah', 'Tirzah'], 'Numbers 26:33; 27:1', 'The five daughters named are Mahlah, Noah, Hoglah, Milcah and Tirzah. Tamar is not listed.', 'Genealogy', 'very-hard'),
  q('Which two spies stood with Moses and urged Israel not to rebel after the report about Canaan?', 'Joshua and Caleb', ['Eleazar and Ithamar', 'Gershom and Eliezer', 'Aaron and Hur'], 'Numbers 14:6-9', 'Joshua son of Nun and Caleb son of Jephunneh tore their clothes and urged the people to trust the LORD.', 'Biblical events', 'medium'),
  q('Which judge of Israel is explicitly described as left-handed?', 'Ehud', ['Othniel', 'Shamgar', 'Tola'], 'Judges 3:15', 'Ehud son of Gera is described as a left-handed Benjaminite who delivered Israel from Moab.', 'Judges', 'hard'),
  q('Shamgar used what object to strike down six hundred Philistines?', 'An oxgoad', ['A sling', 'A shepherd’s staff', 'A bronze spear'], 'Judges 3:31', 'Shamgar son of Anath struck down six hundred Philistines with an oxgoad.', 'Weapons and objects', 'very-hard'),
  q('What did Jael use to kill Sisera while he slept in her tent?', 'A tent peg and a hammer', ['A sword and a shield', 'A spear and a stone', 'A knife and a cord'], 'Judges 4:21', 'Jael drove a tent peg through Sisera’s temple with a hammer while he was asleep.', 'Biblical events', 'hard'),
  q('Which part of an animal did Samson use as a weapon against a thousand Philistines?', 'The jawbone of a donkey', ['The horn of an ox', 'The jawbone of a lion', 'The bone of a camel'], 'Judges 15:15-16', 'Samson found a fresh jawbone of a donkey and used it to strike down a thousand men.', 'Weapons and objects', 'hard'),
  q('What was the name of the son born to Ruth and Boaz, who became the grandfather of David?', 'Obed', ['Jesse', 'Eliab', 'Mahlon'], 'Ruth 4:13-17', 'Ruth and Boaz named their son Obed; Obed became the father of Jesse, who was David’s father.', 'Genealogy', 'hard'),
  q('At which sanctuary did Hannah pray for a son while Eli the priest observed her?', 'Shiloh', ['Bethel', 'Gilgal', 'Gibeon'], '1 Samuel 1:9-13', 'Hannah prayed at Shiloh, where Eli was sitting by the doorpost of the temple of the LORD.', 'Geography', 'hard'),
  q('Who was the father of Israel’s first king, Saul?', 'Kish', ['Ner', 'Abner', 'Jesse'], '1 Samuel 9:1-2', 'Saul is introduced as the son of Kish, a Benjaminite of the family of Matri.', 'Genealogy', 'medium'),
  q('Mephibosheth, whom David showed kindness for Jonathan’s sake, was the son of whom?', 'Jonathan', ['Saul', 'Ish-bosheth', 'Abner'], '2 Samuel 4:4; 9:6-7', 'Mephibosheth was Jonathan’s son and Saul’s grandson.', 'Genealogy', 'hard'),
  q('Who reached out and took hold of the ark when the oxen stumbled, and was struck down?', 'Uzzah', ['Ahio', 'Obed-edom', 'Abinadab'], '2 Samuel 6:3-7', 'Uzzah touched the ark when the oxen stumbled, and the LORD struck him down for his irreverence.', 'Biblical events', 'hard'),
  q('Which prophet told David the story of a rich man taking a poor man’s only lamb?', 'Nathan', ['Gad', 'Samuel', 'Ahijah'], '2 Samuel 12:1-7', 'Nathan used the parable of the ewe lamb to confront David after his sin involving Bathsheba and Uriah.', 'Prophets', 'medium'),
  q('At which brook did ravens bring Elijah bread and meat during the drought?', 'The brook Cherith', ['The brook Kidron', 'The river Chebar', 'The brook Besor'], '1 Kings 17:2-6', 'The LORD instructed Elijah to hide by the brook Cherith, east of the Jordan, where ravens brought him food.', 'Geography', 'hard'),
  q('The widow who provided for Elijah during the famine lived in which town?', 'Zarephath', ['Shunem', 'Tishbe', 'Bethlehem'], '1 Kings 17:8-16', 'God sent Elijah to a widow at Zarephath in the region of Sidon.', 'Geography', 'hard'),
  q('What was the name of Elisha’s servant who secretly accepted gifts from Naaman?', 'Gehazi', ['Benaiah', 'Joash', 'Hazael'], '2 Kings 5:20-27', 'Gehazi pursued Naaman and accepted gifts in Elisha’s name, and he was struck with Naaman’s leprosy.', 'People and relationships', 'hard'),
  q('Naaman served as commander of the army of which kingdom?', 'Aram', ['Moab', 'Edom', 'Ammon'], '2 Kings 5:1', 'Naaman was commander of the army of the king of Aram and was highly regarded, though he had leprosy.', 'Kingdoms and history', 'hard'),
  q('How old was Josiah when he began to reign in Jerusalem?', 'Eight years old', ['Six years old', 'Twelve years old', 'Sixteen years old'], '2 Kings 22:1', 'Josiah was eight years old when he became king and reigned for thirty-one years.', 'Kings and numbers', 'medium'),
  q('How long did it take Nehemiah and the builders to complete the Jerusalem wall?', 'Fifty-two days', ['Forty days', 'Seventy days', 'One hundred days'], 'Nehemiah 6:15', 'The wall was completed in fifty-two days, on the twenty-fifth day of Elul.', 'Numbers and details', 'hard'),
  q('How was Esther related to Mordecai before she became queen?', 'She was his cousin, raised by him as his daughter', ['She was his sister', 'She was his niece by marriage', 'She was his daughter'], 'Esther 2:7', 'Esther was the daughter of Mordecai’s uncle; Mordecai took her as his own daughter after her parents died.', 'Genealogy', 'very-hard'),
  q('What were the Hebrew names of Daniel’s three companions who were taken to Babylon with him?', 'Hananiah, Mishael and Azariah', ['Shadrach, Meshach and Abednego', 'Belteshazzar, Shadrach and Meshach', 'Haggai, Zechariah and Malachi'], 'Daniel 1:6-7', 'Daniel 1:6 lists Hananiah, Mishael and Azariah; their Babylonian names were Shadrach, Meshach and Abednego.', 'People and names', 'hard'),
  q('What Babylonian name was given to Daniel?', 'Belteshazzar', ['Shadrach', 'Meshach', 'Abednego'], 'Daniel 1:7', 'The chief official gave Daniel the name Belteshazzar.', 'People and names', 'medium'),
  q('Which prophet was told that the death of his wife would be a sign to the exiles, and called her “the desire of your eyes”?', 'Ezekiel', ['Jeremiah', 'Hosea', 'Daniel'], 'Ezekiel 24:15-18', 'God told Ezekiel that his wife would die and instructed him not to perform the usual public mourning rituals.', 'Prophets', 'very-hard'),
  q('What was the name of the woman Hosea was instructed to marry?', 'Gomer', ['Deborah', 'Lo-Ruhamah', 'Huldah'], 'Hosea 1:2-3', 'Hosea married Gomer daughter of Diblaim, as a sign connected with Israel’s unfaithfulness.', 'Prophets and relationships', 'hard'),
  q('From which town did the prophet Amos come?', 'Tekoa', ['Moresheth', 'Anathoth', 'Gath-hepher'], 'Amos 1:1', 'Amos identifies himself as one of the shepherds of Tekoa.', 'Geography', 'very-hard'),
  q('Who served as the scribe who wrote down the words Jeremiah dictated?', 'Baruch son of Neriah', ['Seraiah son of Neriah', 'Ebed-melech', 'Gedaliah son of Ahikam'], 'Jeremiah 36:4', 'Jeremiah called Baruch son of Neriah, who wrote the words on a scroll as Jeremiah dictated.', 'People and relationships', 'hard'),
  q('From which port did Jonah set out when he tried to flee from the presence of the LORD?', 'Joppa', ['Caesarea', 'Tyre', 'Ashkelon'], 'Jonah 1:3', 'Jonah went down to Joppa and found a ship bound for Tarshish.', 'Geography', 'hard'),
  q('Who was the father of John the Baptist?', 'Zechariah', ['Simeon', 'Joseph', 'Cleopas'], 'Luke 1:5, 13', 'John the Baptist was born to Zechariah, a priest, and Elizabeth.', 'Genealogy', 'medium'),
  q('Which elderly prophetess, from the tribe of Asher, gave thanks when she saw the infant Jesus at the temple?', 'Anna', ['Elizabeth', 'Martha', 'Joanna'], 'Luke 2:36-38', 'Anna, daughter of Phanuel, was of the tribe of Asher and spoke about Jesus to those awaiting Jerusalem’s redemption.', 'People and relationships', 'very-hard'),
  q('Nathanael is identified in John’s Gospel as being from which town?', 'Cana in Galilee', ['Bethsaida', 'Capernaum', 'Nazareth'], 'John 21:2', 'John identifies Nathanael as being from Cana in Galilee.', 'Geography', 'hard'),
  q('By what other name does John’s Gospel identify Thomas?', 'Didymus', ['Bar-Jonah', 'Boanerges', 'Iscariot'], 'John 11:16; 20:24', 'Thomas is called Didymus, a name meaning “Twin.”', 'People and names', 'medium'),
  q('Who was chosen by lot to take the place of Judas Iscariot among the Twelve?', 'Matthias', ['Joseph Barsabbas', 'Stephen', 'Silas'], 'Acts 1:23-26', 'The believers proposed Joseph called Barsabbas and Matthias; the lot fell to Matthias.', 'Early church', 'hard'),
  q('How many daughters of Philip the evangelist are described as prophesying?', 'Four', ['Two', 'Three', 'Seven'], 'Acts 21:8-9', 'Philip had four unmarried daughters who prophesied.', 'Numbers and details', 'very-hard'),
  q('Lydia, the seller of purple goods who hosted Paul in Philippi, came from which city?', 'Thyatira', ['Ephesus', 'Iconium', 'Antioch'], 'Acts 16:14-15', 'Lydia is described as a worshiper of God from Thyatira, a seller of purple goods.', 'Geography', 'hard'),
  q('From what height did Eutychus fall while Paul was speaking late into the night?', 'The third story', ['The second story', 'The fourth story', 'The roof'], 'Acts 20:7-9', 'Eutychus was sitting in a window on the third story when he fell asleep and fell down.', 'Numbers and details', 'very-hard'),
  q('Which two generations of Timothy’s family are specifically commended for their sincere faith?', 'His grandmother Lois and his mother Eunice', ['His grandmother Eunice and his mother Priscilla', 'His mother Lydia and his sister Phoebe', 'His father Jason and his grandmother Lois'], '2 Timothy 1:5', 'Paul recalls the sincere faith that first lived in Timothy’s grandmother Lois and his mother Eunice.', 'Genealogy', 'hard'),
  q('Phoebe, commended by Paul to the church in Rome, was associated with which congregation or port town?', 'Cenchreae', ['Corinth', 'Ephesus', 'Philippi'], 'Romans 16:1-2', 'Paul describes Phoebe as a servant of the church at Cenchreae and asks the Roman believers to welcome her.', 'Early church', 'very-hard'),
];

export function getScriptureChallengeOpeningQuestion(index: number) {
  return SCRIPTURE_CHALLENGE_OPENING_BANK[index];
}
