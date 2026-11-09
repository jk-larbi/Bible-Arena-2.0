// Generator for Stages 7-10 of Bible Match-Up
import fs from 'fs';

const puzzles = [];

function add(p) {
  if (p.pairs.length !== 4) throw new Error(`Level ${p.level} Challenge ${p.challengeIndex} must have 4 pairs`);
  const lefts = new Set(p.pairs.map(x => x[0]));
  if (lefts.size !== 4) throw new Error(`Level ${p.level} Challenge ${p.challengeIndex} has duplicate lefts`);
  puzzles.push(p);
}

// =========================================================================
// STAGE 7 — THE NAME TRAP (Levels 31–35)
// =========================================================================

// Level 31: Similar Biblical Names
add({
  level: 31, challengeIndex: 1,
  stage: 7, stageTitle: 'The Name Trap', levelTitle: 'Similar Biblical Names',
  mode: 'Name Distinction', leftLabel: 'Biblical Person', rightLabel: 'Precise Identification',
  questionText: 'Distinguish these different individuals named James in the New Testament:',
  difficulty: 'Difficult', timerSeconds: 30,
  pairs: [
    ['James son of Zebedee', 'Apostle martyred with the sword by Herod Agrippa I', 'Acts 12:2'],
    ['James the brother of Jesus', 'Pillar of Jerusalem church who spoke at Jerusalem Council and wrote James', 'Galatians 1:19; Acts 15:13'],
    ['James son of Alphaeus', 'One of the Twelve Apostles, also called James the Less', 'Matthew 10:3; Mark 15:40'],
    ['James father of Judas (not Iscariot)', 'Father of the apostle Judas who asked Jesus why He manifests only to them', 'Luke 6:16; John 14:22']
  ]
});

add({
  level: 31, challengeIndex: 2,
  stage: 7, stageTitle: 'The Name Trap', levelTitle: 'Similar Biblical Names',
  mode: 'Name Distinction', leftLabel: 'Biblical Person', rightLabel: 'Precise Identification',
  questionText: 'Distinguish these biblical men named Saul or Paul:',
  difficulty: 'Difficult', timerSeconds: 30,
  pairs: [
    ['King Saul (Son of Kish)', 'First anointed king of Israel from tribe of Benjamin who fell on his own sword', '1 Samuel 9:1-2; 31:4'],
    ['Saul of Tarsus (Apostle Paul)', 'Pharisee who persecuted church until converted on Damascus road', 'Acts 9:1-6; 13:9'],
    ['Shaul son of Simeon', 'Son of Simeon born of a Canaanitish woman', 'Genesis 46:10'],
    ['Shaul of Rehoboth', 'Early king who reigned in Edom before any king ruled over Israel', 'Genesis 36:37']
  ]
});

add({
  level: 31, challengeIndex: 3,
  stage: 7, stageTitle: 'The Name Trap', levelTitle: 'Similar Biblical Names',
  mode: 'Name Distinction', leftLabel: 'Biblical Person', rightLabel: 'Precise Identification',
  questionText: 'Distinguish these different men named Zechariah:',
  difficulty: 'Difficult', timerSeconds: 30,
  pairs: [
    ['Zechariah son of Berechiah', 'Post-exilic prophet who had visions of horsemen, lampstand, and flying scroll', 'Zechariah 1:1; 4:2'],
    ['Zechariah the Priest', 'Husband of Elizabeth struck dumb until the circumcision of his son John', 'Luke 1:5, 20, 64'],
    ['Zechariah son of Jehoiada', 'Priest stoned in court of LORD\'s house by King Joash', '2 Chronicles 24:20-21'],
    ['King Zechariah', 'Last reigning king of Jehu\'s dynasty, struck down after six months by Shallum', '2 Kings 15:8-10']
  ]
});

add({
  level: 31, challengeIndex: 4,
  stage: 7, stageTitle: 'The Name Trap', levelTitle: 'Similar Biblical Names',
  mode: 'Name Distinction', leftLabel: 'Biblical Person', rightLabel: 'Precise Identification',
  questionText: 'Distinguish these men named Philip in the New Testament:',
  difficulty: 'Difficult', timerSeconds: 30,
  pairs: [
    ['Philip of Bethsaida', 'One of the Twelve who brought Nathanael to Jesus and tested about bread', 'John 1:43-45; 6:5-7'],
    ['Philip the Evangelist', 'One of the Seven deacons who preached in Samaria and baptized Ethiopian eunuch', 'Acts 6:5; 8:26-38'],
    ['Philip the Tetrarch (Son of Herod the Great)', 'Ruler over Ituraea and Trachonitis who built Caesarea Philippi', 'Luke 3:1'],
    ['Herod Philip (First Husband of Herodias)', 'Herod\'s son whose wife Herodias left him to marry his brother Antipas', 'Matthew 14:3; Mark 6:17']
  ]
});

add({
  level: 31, challengeIndex: 5,
  stage: 7, stageTitle: 'The Name Trap', levelTitle: 'Similar Biblical Names',
  mode: 'Name Distinction', leftLabel: 'Biblical Person', rightLabel: 'Precise Identification',
  questionText: 'Distinguish these figures named John in Scripture:',
  difficulty: 'Difficult', timerSeconds: 30,
  pairs: [
    ['John the Baptist', 'Forerunner in wilderness who wore camel\'s hair and baptized Jesus in Jordan', 'Matthew 3:1-4; 3:13-17'],
    ['John son of Zebedee', 'Apostle whom Jesus loved, writer of fourth Gospel, Epistles, and Revelation', 'John 21:20-24; Revelation 1:1-2'],
    ['John Mark', 'Cousin of Barnabas who left Paul at Perga and later wrote Gospel of Mark', 'Acts 12:12; 13:13; 2 Timothy 4:11'],
    ['John the High Priest\'s Kin', 'Member of high priest Annas\'s family who questioned Peter and John', 'Acts 4:6']
  ]
});

// Level 32: People with Similar Roles
add({
  level: 32, challengeIndex: 1,
  stage: 7, stageTitle: 'The Name Trap', levelTitle: 'People with Similar Roles',
  mode: 'Role Distinction', leftLabel: 'Biblical Person', rightLabel: 'Specific Biblical Role & Context',
  questionText: 'Distinguish these royal cupbearers in Scripture:',
  difficulty: 'Difficult', timerSeconds: 30,
  pairs: [
    ['Nehemiah', 'Cupbearer to Persian King Artaxerxes who rebuilt walls of Jerusalem', 'Nehemiah 1:11; 2:1'],
    ['Pharaoh\'s Chief Butler', 'Restored to royal service as Joseph predicted after dream of vine with three branches', 'Genesis 40:9-13; 41:9-13'],
    ['Rabshakeh', 'Assyrian royal cupbearer/field commander who blasphemed God on conduit of upper pool', '2 Kings 18:17, 28-35'],
    ['Solomon\'s Cupbearers', 'Whose magnificent apparel and ascent astonished the Queen of Sheba', '1 Kings 10:4-5']
  ]
});

add({
  level: 32, challengeIndex: 2,
  stage: 7, stageTitle: 'The Name Trap', levelTitle: 'People with Similar Roles',
  mode: 'Role Distinction', leftLabel: 'Biblical Person', rightLabel: 'Specific Biblical Role & Context',
  questionText: 'Distinguish these prominent biblical counselors who gave pivotal advice:',
  difficulty: 'Difficult', timerSeconds: 30,
  pairs: [
    ['Ahithophel the Gilonite', 'Whose counsel was like the oracle of God, who hanged himself when Absalom rejected it', '2 Samuel 16:23; 17:23'],
    ['Hushai the Archite', 'David\'s faithful friend who defeated Ahithophel\'s advice and saved David', '2 Samuel 15:32-37; 17:14'],
    ['Gamaliel', 'Respected doctor of the Law who advised Sanhedrin: "If it be of God, ye cannot overthrow it"', 'Acts 5:34-39'],
    ['Jethro (Reuel)', 'Priest of Midian who advised Moses to appoint able men as rulers over thousands and hundreds', 'Exodus 18:17-24']
  ]
});

add({
  level: 32, challengeIndex: 3,
  stage: 7, stageTitle: 'The Name Trap', levelTitle: 'People with Similar Roles',
  mode: 'Role Distinction', leftLabel: 'Biblical Person', rightLabel: 'Specific Biblical Role & Context',
  questionText: 'Distinguish these Roman centurions highlighted in the New Testament:',
  difficulty: 'Difficult', timerSeconds: 30,
  pairs: [
    ['Cornelius', 'Centurion of Italian band in Caesarea, devout God-fearer whose prayers rose as a memorial', 'Acts 10:1-4'],
    ['Julius of Augustan Band', 'Centurion who courteously entreated Paul and prevented soldiers from killing prisoners', 'Acts 27:1-3, 42-43'],
    ['Centurion at Capernaum', 'Whose faith exceeded all Israel, saying "Speak the word only, and my servant shall be healed"', 'Matthew 8:8-10'],
    ['Centurion at the Cross', 'Who glorified God saying: "Truly this man was the Son of God"', 'Mark 15:39; Luke 23:47']
  ]
});

add({
  level: 32, challengeIndex: 4,
  stage: 7, stageTitle: 'The Name Trap', levelTitle: 'People with Similar Roles',
  mode: 'Role Distinction', leftLabel: 'Biblical Person', rightLabel: 'Specific Biblical Role & Context',
  questionText: 'Distinguish these prominent prophetesses in biblical history:',
  difficulty: 'Difficult', timerSeconds: 30,
  pairs: [
    ['Miriam', 'Aaron and Moses\' sister who led women with timbrels singing horse and rider thrown into sea', 'Exodus 15:20-21'],
    ['Deborah', 'Judge and wife of Lapidoth who judged Israel under palm tree and called Barak to battle', 'Judges 4:4-6'],
    ['Huldah', 'Wife of Shallum keeper of wardrobe consulted by King Josiah\'s delegation regarding Book of Law', '2 Kings 22:14-16'],
    ['Anna daughter of Phanuel', 'Widow of 84 years of tribe of Asher who departed not from temple serving with fastings and prayers', 'Luke 2:36-38']
  ]
});

add({
  level: 32, challengeIndex: 5,
  stage: 7, stageTitle: 'The Name Trap', levelTitle: 'People with Similar Roles',
  mode: 'Role Distinction', leftLabel: 'Biblical Person', rightLabel: 'Specific Biblical Role & Context',
  questionText: 'Distinguish these high priests who officiated at crucial biblical junctions:',
  difficulty: 'Difficult', timerSeconds: 30,
  pairs: [
    ['Aaron', 'First high priest of Israel consecrated with holy garments, breastplate, and urim and thummim', 'Exodus 28:1-30; Leviticus 8'],
    ['Eli', 'Priest at Shiloh who mentored Samuel and fell backward dying upon hearing Ark was captured', '1 Samuel 1:9; 4:17-18'],
    ['Caiaphas', 'High priest that fateful year who declared one man should die for the people', 'John 11:49-50; 18:13-14'],
    ['Joshua son of Jehozadak', 'Post-exilic high priest whose filthy garments were replaced with clean robes and mitre', 'Zechariah 3:1-5; Ezra 3:2']
  ]
});

// Level 33: Who Belongs to Whom?
add({
  level: 33, challengeIndex: 1,
  stage: 7, stageTitle: 'The Name Trap', levelTitle: 'Who Belongs to Whom?',
  mode: 'Family Genealogy', leftLabel: 'Parent / Ancestor', rightLabel: 'Specific Child or Lineage',
  questionText: 'Match each parent with their specific scriptural offspring:',
  difficulty: 'Difficult', timerSeconds: 30,
  pairs: [
    ['Amram and Jochebed', 'Parents of Aaron, Moses, and Miriam from Levi\'s tribe', 'Exodus 6:20; Numbers 26:59'],
    ['Kish the Benjamite', 'Father of King Saul, Israel\'s first monarch', '1 Samuel 9:1-2'],
    ['Jesse of Bethlehem', 'Father of Eliab, Abinadab, Shimea, and young David', '1 Samuel 16:6-13; 17:12-14'],
    ['Elkanah and Hannah', 'Parents of Samuel born in answer to earnest prayer at Shiloh', '1 Samuel 1:19-20']
  ]
});

add({
  level: 33, challengeIndex: 2,
  stage: 7, stageTitle: 'The Name Trap', levelTitle: 'Who Belongs to Whom?',
  mode: 'Family Genealogy', leftLabel: 'Biblical Father', rightLabel: 'Specific Child or Dynasty',
  questionText: 'Match these Old Testament fathers with their respective sons:',
  difficulty: 'Difficult', timerSeconds: 30,
  pairs: [
    ['Caleb son of Jephunneh', 'Father of Achsah whom he gave to Othniel as wife for taking Kirjathsepher', 'Joshua 15:16-17'],
    ['Barzillai the Gileadite', 'Father of Chimham whom David rewarded at the Jordan River', '2 Samuel 19:37-38'],
    ['Manoah the Danite', 'Father of Samson visited by angel announcing son\'s Nazirite calling', 'Judges 13:2-5, 24'],
    ['Jehoiada the Priest', 'Father of Benaiah, mighty warrior commanding David\'s Cherethites and Pelethites', '2 Samuel 8:18; 23:20']
  ]
});

add({
  level: 33, challengeIndex: 3,
  stage: 7, stageTitle: 'The Name Trap', levelTitle: 'Who Belongs to Whom?',
  mode: 'Family Genealogy', leftLabel: 'Biblical Mother', rightLabel: 'Notable Scriptural Child',
  questionText: 'Connect these biblical mothers with their specific children:',
  difficulty: 'Difficult', timerSeconds: 30,
  pairs: [
    ['Zerbiah (David\'s Sister)', 'Mother of Joab, Abishai, and Asahel, David\'s chief warriors', '1 Chronicles 2:16; 2 Samuel 2:18'],
    ['Rizpah daughter of Aiah', 'Mother of Armoni and Mephibosheth who guarded their hanging bodies from birds', '2 Samuel 21:8-10'],
    ['Eunice', 'Faithful mother of Timothy who instructed him in Holy Scriptures from infancy', '2 Timothy 1:5; 3:15'],
    ['Salome', 'Mother of Zebedee\'s sons James and John who asked for top seats in the kingdom', 'Matthew 20:20-21; 27:56; Mark 15:40']
  ]
});

add({
  level: 33, challengeIndex: 4,
  stage: 7, stageTitle: 'The Name Trap', levelTitle: 'Who Belongs to Whom?',
  mode: 'Family Genealogy', leftLabel: 'Biblical King', rightLabel: 'Royal Son & Successor',
  questionText: 'Match each Judahite monarch with their direct son who ruled after them:',
  difficulty: 'Difficult', timerSeconds: 30,
  pairs: [
    ['Asa', 'Father of Jehoshaphat who walked in the LORD\'s ways and sent teachers with the Law', '1 Kings 15:24; 2 Chronicles 17:7-9'],
    ['Hezekiah', 'Father of Manasseh who rebuilt high places and reigned fifty-five wicked years', '2 Kings 20:21; 21:1-2'],
    ['Josiah', 'Father of Jehoahaz, Jehoiakim (Eliakim), and Zedekiah (Mattaniah)', '2 Kings 23:31, 34; 24:17'],
    ['Uzziah (Azariah)', 'Father of Jotham who built the upper gate of the LORD\'s house', '2 Kings 15:7, 32-35']
  ]
});

add({
  level: 33, challengeIndex: 5,
  stage: 7, stageTitle: 'The Name Trap', levelTitle: 'Who Belongs to Whom?',
  mode: 'Family Genealogy', leftLabel: 'Patriarch / Husband', rightLabel: 'Biblical Wife',
  questionText: 'Connect these biblical men with their lawful wives:',
  difficulty: 'Difficult', timerSeconds: 30,
  pairs: [
    ['Boaz of Bethlehem', 'Husband of Ruth the Moabitess, redeeming Elimelech\'s inheritance', 'Ruth 4:9-10, 13'],
    ['Uriah the Hittite', 'Husband of Bathsheba, slain on front line of Rabbah by royal design', '2 Samuel 11:3, 14-17'],
    ['Aquila of Pontus', 'Husband of Priscilla, tentmakers who expounded way of God more perfectly to Apollos', 'Acts 18:2-3, 26'],
    ['Zacharias', 'Husband of Elisabeth, daughter of Aaron, both righteous before God walking blamelessly', 'Luke 1:5-6']
  ]
});

// Level 34: Confusing Connections
add({
  level: 34, challengeIndex: 1,
  stage: 7, stageTitle: 'The Name Trap', levelTitle: 'Confusing Connections',
  mode: 'Similar Event Differentiation', leftLabel: 'Unique Event', rightLabel: 'Actual Scriptural Subject',
  questionText: 'Distinguish who experienced these similar-sounding miraculous water events:',
  difficulty: 'Difficult', timerSeconds: 30,
  pairs: [
    ['Water turned to blood', 'Moses and Aaron striking the Nile with rod before Pharaoh', 'Exodus 7:17-21'],
    ['Bitter waters made sweet with a tree', 'Moses casting wood into waters of Marah at LORD\'s direction', 'Exodus 15:23-25'],
    ['Bad spring waters healed with salt', 'Elisha casting salt into spring in Jericho with new cruse', '2 Kings 2:19-22'],
    ['Water poured on ground becoming blood', 'First miraculous sign given Moses to convince skeptical Israelites', 'Exodus 4:9']
  ]
});

add({
  level: 34, challengeIndex: 2,
  stage: 7, stageTitle: 'The Name Trap', levelTitle: 'Confusing Connections',
  mode: 'Similar Event Differentiation', leftLabel: 'Unusual Death', rightLabel: 'Actual Biblical Character',
  questionText: 'Distinguish these unique and fatal scriptural outcomes:',
  difficulty: 'Difficult', timerSeconds: 30,
  pairs: [
    ['Smitten by millstone thrown by a woman', 'Abimelech son of Gideon besieged at Thebez tower', 'Judges 9:50-54'],
    ['Pierced through temple with a tent peg', 'Sisera Canaanite commander sleeping in Jael\'s tent', 'Judges 4:17-21'],
    ['Eaten of worms and gave up the ghost', 'Herod Agrippa I after failing to give God glory in Caesarea', 'Acts 12:21-23'],
    ['Fell backward from seat breaking neck', 'Eli aged priest on hearing Ark of God was captured by Philistines', '1 Samuel 4:17-18']
  ]
});

add({
  level: 34, challengeIndex: 3,
  stage: 7, stageTitle: 'The Name Trap', levelTitle: 'Confusing Connections',
  mode: 'Similar Event Differentiation', leftLabel: 'Miraculous Oil / Food Miracle', rightLabel: 'Key Person & Scriptural Occurrence',
  questionText: 'Connect each miraculous provision with its exact biblical narrative:',
  difficulty: 'Difficult', timerSeconds: 30,
  pairs: [
    ['Barrel of meal wasted not, nor cruse of oil failed', 'Widow of Zarephath sustaining prophet Elijah in famine', '1 Kings 17:14-16'],
    ['Single pot of oil filled every empty borrowed vessel', 'Widow of a prophet instructed by Elisha to pay her creditor', '2 Kings 4:1-7'],
    ['Poisonous wild gourds stew neutralized with meal', 'Elisha feeding sons of prophets at Gilgal during famine', '2 Kings 4:38-41'],
    ['Twenty barley loaves fed hundred men with leftovers', 'Man from Baalshalisha bringing firstfruits multiplied by Elisha', '2 Kings 4:42-44']
  ]
});

add({
  level: 34, challengeIndex: 4,
  stage: 7, stageTitle: 'The Name Trap', levelTitle: 'Confusing Connections',
  mode: 'Similar Event Differentiation', leftLabel: 'Biblical Mountain Event', rightLabel: 'Scriptural Scene & Figures',
  questionText: 'Connect these prominent biblical mountains with their distinct events:',
  difficulty: 'Difficult', timerSeconds: 30,
  pairs: [
    ['Mount Carmel', 'Elijah challenging 450 prophets of Baal to answer by fire', '1 Kings 18:19-38'],
    ['Mount Nebo (Pisgah)', 'Moses viewing promised land before dying in land of Moab', 'Deuteronomy 34:1-5'],
    ['Mount Gilboa', 'Saul and his three sons falling slain in battle against Philistines', '1 Samuel 31:1-6'],
    ['Mount Gerizim', 'Six tribes standing upon to proclaim blessings, opposite Mount Ebal', 'Deuteronomy 27:11-13; Joshua 8:33']
  ]
});

add({
  level: 34, challengeIndex: 5,
  stage: 7, stageTitle: 'The Name Trap', levelTitle: 'Confusing Connections',
  mode: 'Similar Event Differentiation', leftLabel: 'Unusual Object of God', rightLabel: 'Precise Biblical Association',
  questionText: 'Connect these specific symbolic objects with their exact biblical accounts:',
  difficulty: 'Difficult', timerSeconds: 30,
  pairs: [
    ['Brazen Serpent (Nehushtan)', 'Made by Moses in wilderness, later broken to pieces by King Hezekiah', 'Numbers 21:8-9; 2 Kings 18:4'],
    ['Golden Calf of Sinai', 'Fashioned by Aaron with graving tool from people\'s ear ornaments', 'Exodus 32:2-4'],
    ['Two Calves of Gold at Dan and Bethel', 'Erected by Jeroboam son of Nebat saying "behold thy gods, O Israel"', '1 Kings 12:28-29'],
    ['Golden Mice and Emerods', 'Philistine trespass offering returning Ark on new cart with kine', '1 Samuel 6:4-11']
  ]
});

// Level 35: Name Trap Boss (Timed challenge with tricky distinctions)
add({
  level: 35, challengeIndex: 1,
  stage: 7, stageTitle: 'The Name Trap', levelTitle: 'Name Trap Boss',
  mode: 'Boss Name Trap', leftLabel: 'Similar Biblical Name', rightLabel: 'Distinct Biblical Narrative',
  questionText: 'Boss Round 1: Untangle these men named Jonathan:',
  difficulty: 'Mini-boss', timerSeconds: 25,
  pairs: [
    ['Jonathan son of Saul', 'David\'s covenant brother who scaled Philistine pass with his armor-bearer', '1 Samuel 14:6-14; 18:1-3'],
    ['Jonathan son of Abiathar', 'Priest\'s swift courier who hid in a well at Bahurim delivering news', '2 Samuel 15:27; 17:17-21'],
    ['Jonathan son of Shimeah', 'David\'s nephew who slew giant of Gath with six fingers and six toes on each limb', '2 Samuel 21:20-21'],
    ['Jonathan son of Gershom', 'Grandson of Moses who served as renegade priest for tribe of Dan', 'Judges 18:30']
  ]
});

add({
  level: 35, challengeIndex: 2,
  stage: 7, stageTitle: 'The Name Trap', levelTitle: 'Name Trap Boss',
  mode: 'Boss Name Trap', leftLabel: 'Similar Biblical Name', rightLabel: 'Distinct Biblical Narrative',
  questionText: 'Boss Round 2: Untangle these figures named Mary:',
  difficulty: 'Mini-boss', timerSeconds: 25,
  pairs: [
    ['Mary mother of Jesus', 'Virgin of Nazareth who magnified the Lord in the Magnificat hymn', 'Luke 1:26-38, 46-55'],
    ['Mary Magdalene', 'Healed of seven demons, first witness of the risen Christ at the garden tomb', 'Mark 16:9; John 20:14-18'],
    ['Mary of Bethany', 'Sister of Martha and Lazarus who sat at Jesus\' feet and anointed His feet with spikenard', 'Luke 10:38-42; John 12:3'],
    ['Mary mother of John Mark', 'Whose house in Jerusalem gathered believers praying when Peter escaped prison', 'Acts 12:12']
  ]
});

add({
  level: 35, challengeIndex: 3,
  stage: 7, stageTitle: 'The Name Trap', levelTitle: 'Name Trap Boss',
  mode: 'Boss Name Trap', leftLabel: 'Similar Biblical Name', rightLabel: 'Distinct Biblical Narrative',
  questionText: 'Boss Round 3: Distinguish these four men named Ananias:',
  difficulty: 'Mini-boss', timerSeconds: 25,
  pairs: [
    ['Ananias of Jerusalem', 'Husband of Sapphira who kept back part of price and fell dead at Peter\'s feet', 'Acts 5:1-5'],
    ['Ananias of Damascus', 'Disciple sent by vision to Straight Street to lay hands on blind Saul', 'Acts 9:10-17'],
    ['Ananias the High Priest', 'Ordered Paul to be smitten on the mouth, whom Paul called a whited wall', 'Acts 23:1-3; 24:1'],
    ['Hananiah (Ananias in LXX)', 'Hebrew youth renamed Shadrach who stood firm in the burning fiery furnace', 'Daniel 1:6-7; 3:12-26']
  ]
});

add({
  level: 35, challengeIndex: 4,
  stage: 7, stageTitle: 'The Name Trap', levelTitle: 'Name Trap Boss',
  mode: 'Boss Name Trap', leftLabel: 'Similar Biblical Name', rightLabel: 'Distinct Biblical Narrative',
  questionText: 'Boss Round 4: Distinguish these figures named Joseph:',
  difficulty: 'Mini-boss', timerSeconds: 25,
  pairs: [
    ['Joseph son of Jacob', 'Sold by brothers to Ishmeelites, rose to second ruler over all Egypt', 'Genesis 37:28; 41:40-44'],
    ['Joseph of Arimathaea', 'Secret disciple and council member who begged Jesus\' body and laid it in own tomb', 'Matthew 27:57-60; John 19:38'],
    ['Joseph called Barsabas (Justus)', 'Nominated alongside Matthias to replace Judas Iscariot in apostleship', 'Acts 1:23'],
    ['Joseph the Carpenter', 'Just man of line of David betrothed to Mary, warned by angel in dreams', 'Matthew 1:18-24; 2:13']
  ]
});

add({
  level: 35, challengeIndex: 5,
  stage: 7, stageTitle: 'The Name Trap', levelTitle: 'Name Trap Boss',
  mode: 'Boss Name Trap', leftLabel: 'Similar Biblical Name', rightLabel: 'Distinct Biblical Narrative',
  questionText: 'Boss Round 5: Master these confusing biblical kings named Jeroboam, Rehoboam, and Jehoash:',
  difficulty: 'Mini-boss', timerSeconds: 20,
  pairs: [
    ['Jeroboam I son of Nebat', 'Severed Northern kingdom and made Israel to sin with golden calves', '1 Kings 12:26-30'],
    ['Rehoboam son of Solomon', 'Forsook old men\'s counsel saying: "My father chastised with whips, I with scorpions"', '1 Kings 12:13-14'],
    ['Jehoash (Joash) of Judah', 'Hidden in temple by Jehosheba from Athaliah and anointed king at age seven', '2 Kings 11:1-4, 12, 21'],
    ['Jeroboam II of Israel', 'Restored coast of Israel from Hamath to dead sea according to Jonah\'s word', '2 Kings 14:23-25']
  ]
});


// =========================================================================
// STAGE 8 — THREE-WAY MATCH (Levels 36–40)
// Person / Entity <-> Role + Scriptural Context & Reference
// =========================================================================

// Level 36: Person, Role and Reference
add({
  level: 36, challengeIndex: 1,
  stage: 8, stageTitle: 'Three-Way Match', levelTitle: 'Person, Role and Reference',
  mode: 'Person, Role & Context', leftLabel: 'Biblical Character', rightLabel: 'Role, Critical Action & Scriptural Reference',
  questionText: 'Match each person to their exact role, defining account, and scripture text:',
  difficulty: 'Difficult', timerSeconds: 30,
  pairs: [
    ['Huldah', 'Prophetess consulted by King Josiah\'s high priest Hilkiah — 2 Kings 22:14', '2 Kings 22:14'],
    ['Bezalel', 'Master Tabernacle Craftsman filled with Spirit of God — Exodus 31:2-5', 'Exodus 31:2-5'],
    ['Tertius', 'Scribe who penned Paul\'s Epistle to the Romans — Romans 16:22', 'Romans 16:22'],
    ['Tychicus', 'Faithful Messenger carrying epistles to Ephesus and Colossae — Colossians 4:7-8', 'Colossians 4:7-8']
  ]
});

add({
  level: 36, challengeIndex: 2,
  stage: 8, stageTitle: 'Three-Way Match', levelTitle: 'Person, Role and Reference',
  mode: 'Person, Role & Context', leftLabel: 'Biblical Character', rightLabel: 'Role, Critical Action & Scriptural Reference',
  questionText: 'Match each figure with their specific role and scriptural citation:',
  difficulty: 'Difficult', timerSeconds: 30,
  pairs: [
    ['Onesiphorus', 'Faithful Refresher who sought out Paul in Roman chains — 2 Timothy 1:16-17', '2 Timothy 1:16-17'],
    ['Epaphras', 'Fervent Pastor in prayer who founded Colossian Church — Colossians 1:7; 4:12', 'Colossians 1:7; 4:12'],
    ['Baruch son of Neriah', 'Prophetic Scribe who wrote Jeremiah\'s dictated words on a roll — Jeremiah 36:4', 'Jeremiah 36:4'],
    ['Ebed-Melech the Ethiopian', 'Royal Eunuch who drew Jeremiah out of the miry dungeon with rags — Jeremiah 38:7-13', 'Jeremiah 38:7-13']
  ]
});

add({
  level: 36, challengeIndex: 3,
  stage: 8, stageTitle: 'Three-Way Match', levelTitle: 'Person, Role and Reference',
  mode: 'Person, Role & Context', leftLabel: 'Biblical Character', rightLabel: 'Role, Critical Action & Scriptural Reference',
  questionText: 'Match each Old Testament person with their specific calling and chapter:',
  difficulty: 'Difficult', timerSeconds: 30,
  pairs: [
    ['Hur', 'Companion who held up Moses\' heavy hands during battle with Amalek — Exodus 17:10-12', 'Exodus 17:10-12'],
    ['Phinehas son of Eleazar', 'Zealous Priest who stopped plague with a javelin at Shittim — Numbers 25:7-11', 'Numbers 25:7-11'],
    ['Ahijah the Shilonite', 'Prophet who tore his garment into twelve pieces giving Jeroboam ten — 1 Kings 11:29-31', '1 Kings 11:29-31'],
    ['Micaiah son of Imlah', 'True Prophet who foretold Ahab\'s fall at Ramoth-gilead — 1 Kings 22:13-23', '1 Kings 22:13-23']
  ]
});

add({
  level: 36, challengeIndex: 4,
  stage: 8, stageTitle: 'Three-Way Match', levelTitle: 'Person, Role and Reference',
  mode: 'Person, Role & Context', leftLabel: 'Biblical Character', rightLabel: 'Role, Critical Action & Scriptural Reference',
  questionText: 'Match each New Testament helper with their ministerial detail:',
  difficulty: 'Difficult', timerSeconds: 30,
  pairs: [
    ['Phoebe', 'Servant/Deaconess of Cenchrea commended to church at Rome — Romans 16:1-2', 'Romans 16:1-2'],
    ['Erastus', 'City Chamberlain / Treasurer of Corinth greeting the Romans — Romans 16:23', 'Romans 16:23'],
    ['Gaius of Derbe', 'Hospitable Host of Paul and the whole church — Romans 16:23; 3 John 1:1', 'Romans 16:23'],
    ['Zenas the Lawyer', 'Christian Jurist sent forward alongside Apollos diligently — Titus 3:13', 'Titus 3:13']
  ]
});

add({
  level: 36, challengeIndex: 5,
  stage: 8, stageTitle: 'Three-Way Match', levelTitle: 'Person, Role and Reference',
  mode: 'Person, Role & Context', leftLabel: 'Biblical Character', rightLabel: 'Role, Critical Action & Scriptural Reference',
  questionText: 'Match each prominent woman in Scripture with her unique calling and text:',
  difficulty: 'Difficult', timerSeconds: 30,
  pairs: [
    ['Shiphrah', 'Hebrew Midwife who feared God and spared newborn baby boys — Exodus 1:15-17', 'Exodus 1:15-17'],
    ['Puah', 'Courageous Midwife rewarded by God with households for saving infants — Exodus 1:15-21', 'Exodus 1:15-21'],
    ['Abigail', 'Discreet Wife of Nabal who pacified David with provisions and wisdom — 1 Samuel 25:18-35', '1 Samuel 25:18-35'],
    ['Lydia', 'Seller of Purple of Thyatira whose heart LORD opened in Philippi — Acts 16:14-15', 'Acts 16:14-15']
  ]
});

// Level 37: Place, Event and Person
add({
  level: 37, challengeIndex: 1,
  stage: 8, stageTitle: 'Three-Way Match', levelTitle: 'Place, Event and Person',
  mode: 'Place, Event & Figure', leftLabel: 'Biblical Location', rightLabel: 'Historic Biblical Event & Central Character',
  questionText: 'Connect each geographic site to its key biblical episode and individual:',
  difficulty: 'Difficult', timerSeconds: 30,
  pairs: [
    ['Mount Moriah', 'Abraham offering Isaac, where God provided the ram caught in thicket — Genesis 22:2-13', 'Genesis 22:2-13'],
    ['Brook Cherith', 'Ravens bringing bread and flesh morning and evening to Elijah — 1 Kings 17:3-6', '1 Kings 17:3-6'],
    ['Valley of Elah', 'David taking five smooth stones from brook to fell Goliath — 1 Samuel 17:2, 40-49', '1 Samuel 17:2, 40-49'],
    ['Threshingfloor of Araunah (Ornan)', 'David erecting altar to stay angel\'s plague over Jerusalem — 2 Samuel 24:18-25', '2 Samuel 24:18-25']
  ]
});

add({
  level: 37, challengeIndex: 2,
  stage: 8, stageTitle: 'Three-Way Match', levelTitle: 'Place, Event and Person',
  mode: 'Place, Event & Figure', leftLabel: 'Biblical Location', rightLabel: 'Historic Biblical Event & Central Character',
  questionText: 'Match these water locations with their historic miracle and prophet:',
  difficulty: 'Difficult', timerSeconds: 30,
  pairs: [
    ['Pool of Siloam', 'Blind man washing off clay anointed by Jesus to receive sight — John 9:6-7', 'John 9:6-7'],
    ['Pool of Bethesda', 'Man infirm thirty-eight years told by Jesus: "Rise, take up thy bed" — John 5:2-9', 'John 5:2-9'],
    ['River Chebar', 'Ezekiel receiving visions of God and the four living creatures — Ezekiel 1:1-5', 'Ezekiel 1:1-5'],
    ['River Kishon', 'Barak and Deborah routing Sisera whose chariots were swept by flood — Judges 4:13; 5:21', 'Judges 4:13; 5:21']
  ]
});

add({
  level: 37, challengeIndex: 3,
  stage: 8, stageTitle: 'Three-Way Match', levelTitle: 'Place, Event and Person',
  mode: 'Place, Event & Figure', leftLabel: 'Biblical Location', rightLabel: 'Historic Biblical Event & Central Character',
  questionText: 'Match each desert stop with its historic encounter:',
  difficulty: 'Difficult', timerSeconds: 30,
  pairs: [
    ['Rephidim (Massah & Meribah)', 'Moses striking rock in Horeb to yield water for thirsty multitude — Exodus 17:1-7', 'Exodus 17:1-7'],
    ['Kadesh-barnea', 'Twelve spies sent out by Moses to search Canaan for forty days — Numbers 13:26; 32:8', 'Numbers 13:26'],
    ['Wilderness of Ziph', 'David sparing sleeping Saul in trench, taking only spear and cruse — 1 Samuel 26:1-12', '1 Samuel 26:1-12'],
    ['Cave of Adullam', 'David gathering 400 distressed, indebted, and discontented men — 1 Samuel 22:1-2', '1 Samuel 22:1-2']
  ]
});

add({
  level: 37, challengeIndex: 4,
  stage: 8, stageTitle: 'Three-Way Match', levelTitle: 'Place, Event and Person',
  mode: 'Place, Event & Figure', leftLabel: 'Biblical Location', rightLabel: 'Historic Biblical Event & Central Character',
  questionText: 'Match these New Testament towns with their dramatic missionary events:',
  difficulty: 'Difficult', timerSeconds: 30,
  pairs: [
    ['Lystra', 'Paul stoning by mob stirred from Antioch and Iconium, dragged outside dead — Acts 14:19', 'Acts 14:19'],
    ['Berea', 'Noble Jews searching Scriptures daily to verify Paul and Silas\' teachings — Acts 17:10-11', 'Acts 17:10-11'],
    ['Troas', 'Eutychus falling from third loft during Paul\'s midnight sermon revived — Acts 20:7-10', 'Acts 20:7-10'],
    ['Island of Melita (Malta)', 'Viper fastening on Paul\'s hand shaken into fire unharmed after shipwreck — Acts 28:1-5', 'Acts 28:1-5']
  ]
});

add({
  level: 37, challengeIndex: 5,
  stage: 8, stageTitle: 'Three-Way Match', levelTitle: 'Place, Event and Person',
  mode: 'Place, Event & Figure', leftLabel: 'Biblical Location', rightLabel: 'Historic Biblical Event & Central Character',
  questionText: 'Match these ancient cities with their tragic downfalls or deliverances:',
  difficulty: 'Difficult', timerSeconds: 30,
  pairs: [
    ['Jericho', 'Walls falling flat after Israel compassed them seven days blowing horns — Joshua 6:20', 'Joshua 6:20'],
    ['Ai', 'Israel ambushing and burning city after Achan\'s sin was purged — Joshua 8:14-22', 'Joshua 8:14-22'],
    ['Gibeon', 'Hivites deceiving Joshua with moldy bread and old clouted shoes — Joshua 9:3-15', 'Joshua 9:3-15'],
    ['Nineveh', 'King and people repenting in sackcloth and ashes at Jonah\'s preaching — Jonah 3:4-10', 'Jonah 3:4-10']
  ]
});

// Level 38: Speaker, Audience and Message
add({
  level: 38, challengeIndex: 1,
  stage: 8, stageTitle: 'Three-Way Match', levelTitle: 'Speaker, Audience and Message',
  mode: 'Speaker, Audience & Scripture', leftLabel: 'Biblical Speaker', rightLabel: 'Target Audience, Message & Reference',
  questionText: 'Match each speaker with their recipient, declaration, and scripture:',
  difficulty: 'Difficult', timerSeconds: 30,
  pairs: [
    ['Nathan the Prophet', 'To King David: "Thou art the man" regarding Uriah\'s wife — 2 Samuel 12:7', '2 Samuel 12:7'],
    ['Elijah the Tishbite', 'To Ahab: "As the LORD liveth, there shall not be dew nor rain these years" — 1 Kings 17:1', '1 Kings 17:1'],
    ['John the Baptist', 'To Pharisees & Sadducees: "O generation of vipers, who hath warned you to flee" — Matthew 3:7', 'Matthew 3:7'],
    ['Peter at Pentecost', 'To Men of Judea: "Repent, and be baptized every one of you in the name of Jesus" — Acts 2:38', 'Acts 2:38']
  ]
});

add({
  level: 38, challengeIndex: 2,
  stage: 8, stageTitle: 'Three-Way Match', levelTitle: 'Speaker, Audience and Message',
  mode: 'Speaker, Audience & Scripture', leftLabel: 'Biblical Speaker', rightLabel: 'Target Audience, Message & Reference',
  questionText: 'Match these solemn scriptural warnings with their original delivery:',
  difficulty: 'Difficult', timerSeconds: 30,
  pairs: [
    ['Stephen the Martyr', 'To the Sanhedrin: "Ye stiffnecked and uncircumcised in heart and ears" — Acts 7:51', 'Acts 7:51'],
    ['Samuel the Prophet', 'To King Saul: "To obey is better than sacrifice, to hearken than fat of rams" — 1 Samuel 15:22', '1 Samuel 15:22'],
    ['Joshua to Israel', 'At Shechem: "Choose you this day whom ye will serve; as for me and my house" — Joshua 24:15', 'Joshua 24:15'],
    ['Manoah\'s Wife', 'To Manoah: "If the LORD were pleased to kill us, He would not have received an offering" — Judges 13:23', 'Judges 13:23']
  ]
});

add({
  level: 38, challengeIndex: 3,
  stage: 8, stageTitle: 'Three-Way Match', levelTitle: 'Speaker, Audience and Message',
  mode: 'Speaker, Audience & Scripture', leftLabel: 'Biblical Speaker', rightLabel: 'Target Audience, Message & Reference',
  questionText: 'Match these profound interrogations with speaker and verse:',
  difficulty: 'Difficult', timerSeconds: 30,
  pairs: [
    ['God to Job', 'Out of the Whirlwind: "Where wast thou when I laid the foundations of the earth?" — Job 38:4', 'Job 38:4'],
    ['Jesus to Cleopas & Friend', 'On Road to Emmaus: "O fools, and slow of heart to believe all the prophets" — Luke 24:25', 'Luke 24:25'],
    ['Paul to Agrippa', 'At Caesarea Tribunal: "King Agrippa, believest thou the prophets? I know thou believest" — Acts 26:27', 'Acts 26:27'],
    ['Pilate to Jesus', 'In the Praetorium: "Art thou the King of the Jews? What is truth?" — John 18:33, 38', 'John 18:33, 38']
  ]
});

add({
  level: 38, challengeIndex: 4,
  stage: 8, stageTitle: 'Three-Way Match', levelTitle: 'Speaker, Audience and Message',
  mode: 'Speaker, Audience & Scripture', leftLabel: 'Biblical Speaker', rightLabel: 'Target Audience, Message & Reference',
  questionText: 'Match these prophetic announcements with their exact audience:',
  difficulty: 'Difficult', timerSeconds: 30,
  pairs: [
    ['Isaiah to Hezekiah', 'In Sickness: "Set thine house in order; for thou shalt die, and not live" — 2 Kings 20:1; Isaiah 38:1', '2 Kings 20:1'],
    ['Jeremiah to Pashur', 'Chief Governor in Temple: "The LORD hath not called thy name Pashur, but Magor-missabib" — Jeremiah 20:1-3', 'Jeremiah 20:3'],
    ['Amos to Amaziah', 'Priest of Bethel: "I was no prophet, neither was I a prophet\'s son; but an herdman" — Amos 7:14', 'Amos 7:14'],
    ['Agabus the Prophet', 'To Church at Caesarea: Girding Paul\'s girdle foretelling his binding in Jerusalem — Acts 21:10-11', 'Acts 21:10-11']
  ]
});

add({
  level: 38, challengeIndex: 5,
  stage: 8, stageTitle: 'Three-Way Match', levelTitle: 'Speaker, Audience and Message',
  mode: 'Speaker, Audience & Scripture', leftLabel: 'Biblical Speaker', rightLabel: 'Target Audience, Message & Reference',
  questionText: 'Match these declarations of faith with speaker and passage:',
  difficulty: 'Difficult', timerSeconds: 30,
  pairs: [
    ['Shadrach, Meshach & Abednego', 'To Nebuchadnezzar: "Our God whom we serve is able to deliver us from burning fiery furnace" — Daniel 3:17', 'Daniel 3:17'],
    ['Esther to Mordecai', 'Before Royal Court: "Fast ye for me... and if I perish, I perish" — Esther 4:16', 'Esther 4:16'],
    ['Caleb to Congregation', 'At Kadesh: "Let us go up at once, and possess it; for we are well able to overcome it" — Numbers 13:30', 'Numbers 13:30'],
    ['Peter before Council', 'To High Priest: "We ought to obey God rather than men" — Acts 5:29', 'Acts 5:29']
  ]
});

// Level 39: Family, Relationship and Story
add({
  level: 39, challengeIndex: 1,
  stage: 8, stageTitle: 'Three-Way Match', levelTitle: 'Family, Relationship and Story',
  mode: 'Kinship & History', leftLabel: 'Biblical Figure', rightLabel: 'Family Tie, Dramatic Event & Reference',
  questionText: 'Connect these related figures with their distinct family account:',
  difficulty: 'Difficult', timerSeconds: 30,
  pairs: [
    ['Mephibosheth', 'Lame son of Jonathan given daily seat at David\'s table for father\'s sake — 2 Samuel 9:6-13', '2 Samuel 9:6-13'],
    ['Jonathan son of Saul', 'Brother of Michal who made covenant of love with David stripping his robe — 1 Samuel 18:1-4', '1 Samuel 18:1-4'],
    ['Abishai son of Zeruiah', 'Brother of Joab who went down with David into Saul\'s sleeping camp — 1 Samuel 26:6-9', '1 Samuel 26:6-9'],
    ['Asahel son of Zeruiah', 'Swift brother of Joab pierced with back end of Abner\'s spear in pursuit — 2 Samuel 2:18-23', '2 Samuel 2:18-23']
  ]
});

add({
  level: 39, challengeIndex: 2,
  stage: 8, stageTitle: 'Three-Way Match', levelTitle: 'Family, Relationship and Story',
  mode: 'Kinship & History', leftLabel: 'Biblical Figure', rightLabel: 'Family Tie, Dramatic Event & Reference',
  questionText: 'Connect these Patriarchal family members with their scriptural records:',
  difficulty: 'Difficult', timerSeconds: 30,
  pairs: [
    ['Laban the Syrian', 'Brother of Rebekah and uncle of Jacob who switched Leah for Rachel — Genesis 29:21-26', 'Genesis 29:21-26'],
    ['Reuben son of Jacob', 'Firstborn of Leah who saved Joseph from pit but defiled Bilhah\'s couch — Genesis 35:22; 37:21-22', 'Genesis 35:22'],
    ['Judah son of Jacob', 'Fourth son of Leah who pledged himself surety for Benjamin in Egypt — Genesis 43:8-9; 44:32-34', 'Genesis 44:32-34'],
    ['Dinah daughter of Jacob', 'Only named daughter of Leah defiled by Shechem son of Hamor — Genesis 34:1-2', 'Genesis 34:1-2']
  ]
});

add({
  level: 39, challengeIndex: 3,
  stage: 8, stageTitle: 'Three-Way Match', levelTitle: 'Family, Relationship and Story',
  mode: 'Kinship & History', leftLabel: 'Biblical Figure', rightLabel: 'Family Tie, Dramatic Event & Reference',
  questionText: 'Connect these New Testament relatives with their shared biblical experiences:',
  difficulty: 'Difficult', timerSeconds: 30,
  pairs: [
    ['Lois', 'Grandmother of Timothy lauded for her unfeigned faith in Lystra — 2 Timothy 1:5', '2 Timothy 1:5'],
    ['Elisabeth', 'Cousin of Mary filled with Holy Ghost as babe leaped in her womb — Luke 1:41-42', 'Luke 1:41-42'],
    ['Barnabas', 'Levite of Cyprus and uncle/cousin of John Mark who sold field giving price to apostles — Acts 4:36-37; Colossians 4:10', 'Acts 4:36-37'],
    ['Philip\'s Four Daughters', 'Virgins in Caesarea endowed with the prophetic gift of Holy Spirit — Acts 21:8-9', 'Acts 21:8-9']
  ]
});

add({
  level: 39, challengeIndex: 4,
  stage: 8, stageTitle: 'Three-Way Match', levelTitle: 'Family, Relationship and Story',
  mode: 'Kinship & History', leftLabel: 'Biblical Figure', rightLabel: 'Family Tie, Dramatic Event & Reference',
  questionText: 'Connect these Old Testament siblings with their historical clashes:',
  difficulty: 'Difficult', timerSeconds: 30,
  pairs: [
    ['Eliab son of Jesse', 'Eldest brother of David who scolded him for coming to see battle — 1 Samuel 17:28', '1 Samuel 17:28'],
    ['Absalom son of David', 'Brother of Tamar who slew Amnon and hung by hair in oak in Ephraim wood — 2 Samuel 13:28-29; 18:9', '2 Samuel 18:9'],
    ['Adonijah son of Haggith', 'Elder brother who exalted himself to be king and caught horns of altar — 1 Kings 1:5, 50', '1 Kings 1:50'],
    ['Solomon son of Bathsheba', 'Anointed on Gihon riding David\'s mule, granted supreme wisdom by God — 1 Kings 1:38-39; 3:9-12', '1 Kings 1:38-39']
  ]
});

add({
  level: 39, challengeIndex: 5,
  stage: 8, stageTitle: 'Three-Way Match', levelTitle: 'Family, Relationship and Story',
  mode: 'Kinship & History', leftLabel: 'Biblical Figure', rightLabel: 'Family Tie, Dramatic Event & Reference',
  questionText: 'Connect these biblical pairs of spouses or in-laws with their record:',
  difficulty: 'Difficult', timerSeconds: 30,
  pairs: [
    ['Sapphira', 'Wife of Ananias buried beside husband three hours after lying to Peter — Acts 5:7-10', 'Acts 5:7-10'],
    ['Zipporah daughter of Jethro', 'Wife of Moses who circumcised her son with sharp stone at the inn — Exodus 4:24-26', 'Exodus 4:24-26'],
    ['Michal daughter of Saul', 'First wife of David who despised him in her heart for dancing before Ark — 2 Samuel 6:16, 20-23', '2 Samuel 6:16'],
    ['Naomi of Bethlehem', 'Mother-in-law of Ruth who asked to be called Mara because Almighty dealt bitterly — Ruth 1:19-21', 'Ruth 1:20']
  ]
});

// Level 40: Three-Way Match Boss
add({
  level: 40, challengeIndex: 1,
  stage: 8, stageTitle: 'Three-Way Match', levelTitle: 'Three-Way Match Boss',
  mode: 'Boss Three-Way Link', leftLabel: 'Biblical Figure', rightLabel: 'Office, Defining Event & Scripture',
  questionText: 'Stage 8 Boss Round 1: Match these prophets to their pivotal historical scene:',
  difficulty: 'Mini-boss', timerSeconds: 25,
  pairs: [
    ['Habakkuk', 'Watchman Prophet standing upon rampart waiting for vision written on tables — Habakkuk 2:1-2', 'Habakkuk 2:1-2'],
    ['Haggai', 'Post-Exilic Messenger commanding Zerubbabel to rebuild LORD\'s temple house — Haggai 1:1-4', 'Haggai 1:1-4'],
    ['Malachi', 'Final OT Prophet proclaiming Sun of Righteousness with healing in His wings — Malachi 4:2', 'Malachi 4:2'],
    ['Obadiah', 'Seer of Doom declaring judgment upon Edom dwelling in clefts of the rock — Obadiah 1:1-3', 'Obadiah 1:3']
  ]
});

add({
  level: 40, challengeIndex: 2,
  stage: 8, stageTitle: 'Three-Way Match', levelTitle: 'Three-Way Match Boss',
  mode: 'Boss Three-Way Link', leftLabel: 'Biblical Figure', rightLabel: 'Office, Defining Event & Scripture',
  questionText: 'Stage 8 Boss Round 2: Match these New Testament disciples to their unique moment:',
  difficulty: 'Mini-boss', timerSeconds: 25,
  pairs: [
    ['Nathanael (Bartholomew)', 'Guileless Israelite seen by Jesus sitting under the fig tree — John 1:47-49', 'John 1:47-49'],
    ['Thomas called Didymus', 'Apostle who declared "Except I shall see in his hands the print of the nails" — John 20:25', 'John 20:25'],
    ['Cleopas', 'Disciple walking to Emmaus whose eyes were opened at the breaking of bread — Luke 24:18, 30-31', 'Luke 24:18'],
    ['Simon the Canaanite (Zelotes)', 'Apostle chosen by Jesus from the zealous nationalist movement — Luke 6:15; Acts 1:13', 'Luke 6:15']
  ]
});

add({
  level: 40, challengeIndex: 3,
  stage: 8, stageTitle: 'Three-Way Match', levelTitle: 'Three-Way Match Boss',
  mode: 'Boss Three-Way Link', leftLabel: 'Biblical Figure', rightLabel: 'Office, Defining Event & Scripture',
  questionText: 'Stage 8 Boss Round 3: Match these leaders of the return from exile:',
  difficulty: 'Mini-boss', timerSeconds: 25,
  pairs: [
    ['Zerubbabel son of Shealtiel', 'Governor who laid temple foundation stone with shouting "Grace, grace" — Zechariah 4:7-9', 'Zechariah 4:7-9'],
    ['Ezra the Scribe', 'Priest who prepared heart to seek Law, do it, and teach statutes in Israel — Ezra 7:10', 'Ezra 7:10'],
    ['Nehemiah son of Hachaliah', 'Governor who inspected ruined walls by night riding mule and rebuilt in 52 days — Nehemiah 2:12-15; 6:15', 'Nehemiah 6:15'],
    ['Sanballat the Horonite', 'Hostile adversary who allied with Tobiah the Ammonite mocking Jewish builders — Nehemiah 2:19; 4:1-3', 'Nehemiah 4:1-3']
  ]
});

add({
  level: 40, challengeIndex: 4,
  stage: 8, stageTitle: 'Three-Way Match', levelTitle: 'Three-Way Match Boss',
  mode: 'Boss Three-Way Link', leftLabel: 'Biblical Figure', rightLabel: 'Office, Defining Event & Scripture',
  questionText: 'Stage 8 Boss Round 4: Match these Old Testament covenants with recipient and seal:',
  difficulty: 'Mini-boss', timerSeconds: 20,
  pairs: [
    ['Noah', 'Covenant of Preservation marked by rainbow set in clouds never to flood all flesh — Genesis 9:11-13', 'Genesis 9:11-13'],
    ['Abraham', 'Covenant of Seed and Land sealed with token of circumcision of males — Genesis 17:7-11', 'Genesis 17:10-11'],
    ['Moses and Israel', 'Covenant of the Law sprinkled with blood of calves and goats upon book and people — Exodus 24:7-8; Hebrews 9:19-20', 'Exodus 24:8'],
    ['David', 'Covenant of Everlasting Kingdom whose seed\'s throne is established forever — 2 Samuel 7:12-16', '2 Samuel 7:12-16']
  ]
});

add({
  level: 40, challengeIndex: 5,
  stage: 8, stageTitle: 'Three-Way Match', levelTitle: 'Three-Way Match Boss',
  mode: 'Boss Three-Way Link', leftLabel: 'Biblical Figure', rightLabel: 'Office, Defining Event & Scripture',
  questionText: 'Stage 8 Boss Round 5: Master these obscure yet vital New Testament ministers:',
  difficulty: 'Mini-boss', timerSeconds: 20,
  pairs: [
    ['Sosthenes', 'Ruler of synagogue beaten before Gallio\'s judgment seat, later brother with Paul — Acts 18:17; 1 Corinthians 1:1', 'Acts 18:17'],
    ['Crispus', 'Chief ruler of Corinthian synagogue who believed on the Lord with all his house — Acts 18:8; 1 Corinthians 1:14', 'Acts 18:8'],
    ['Aristobulus', 'Household in Rome greeted by Paul whose servants had received the faith — Romans 16:10', 'Romans 16:10'],
    ['Dionysius the Areopagite', 'Athenian court judge converted when hearing Paul preach on Mars Hill — Acts 17:34', 'Acts 17:34']
  ]
});


// =========================================================================
// STAGE 9 — EXPERT CONNECTIONS (Levels 41–45)
// =========================================================================

// Level 41: Unfamiliar Names
add({
  level: 41, challengeIndex: 1,
  stage: 9, stageTitle: 'Expert Connections', levelTitle: 'Unfamiliar Names',
  mode: 'Rare Biblical Names', leftLabel: 'Unfamiliar Person', rightLabel: 'Scriptural Identity & Account',
  questionText: 'Match these rarely mentioned Old Testament figures to their precise deeds:',
  difficulty: 'Expert', timerSeconds: 25,
  pairs: [
    ['Jabez', 'Honorable man who prayed that God would enlarge his border and keep from grief — 1 Chronicles 4:9-10', '1 Chronicles 4:9-10'],
    ['Bilha and Zilpah', 'Maidservants of Rachel and Leah who bore four sons of Jacob — Genesis 30:3-12', 'Genesis 30:3-12'],
    ['Barzillai the Gileadite', 'Aged wealthy man of Rogelim who provided food for David\'s army at Mahanaim — 2 Samuel 17:27-29', '2 Samuel 17:27'],
    ['Shamgar son of Anath', 'Judge who delivered Israel by slaying 600 Philistines with an ox goad — Judges 3:31', 'Judges 3:31']
  ]
});

add({
  level: 41, challengeIndex: 2,
  stage: 9, stageTitle: 'Expert Connections', levelTitle: 'Unfamiliar Names',
  mode: 'Rare Biblical Names', leftLabel: 'Unfamiliar Person', rightLabel: 'Scriptural Identity & Account',
  questionText: 'Connect these obscure New Testament believers to their scriptural record:',
  difficulty: 'Expert', timerSeconds: 25,
  pairs: [
    ['Hermas', 'Roman Christian greeted by Paul alongside Asyncritus, Phlegon, and Patrobas — Romans 16:14', 'Romans 16:14'],
    ['Quartus', 'Christian brother in Corinth sending salutations to church at Rome — Romans 16:23', 'Romans 16:23'],
    ['Secundus', 'Thessalonian believer who accompanied Paul into Asia carrying relief collection — Acts 20:4', 'Acts 20:4'],
    ['Mnason of Cyprus', 'An old disciple with whom Paul and companions were to lodge in Jerusalem — Acts 21:16', 'Acts 21:16']
  ]
});

add({
  level: 41, challengeIndex: 3,
  stage: 9, stageTitle: 'Expert Connections', levelTitle: 'Unfamiliar Names',
  mode: 'Rare Biblical Names', leftLabel: 'Unfamiliar Person', rightLabel: 'Scriptural Identity & Account',
  questionText: 'Connect these uncommon Old Testament figures with their historical actions:',
  difficulty: 'Expert', timerSeconds: 25,
  pairs: [
    ['Othniel son of Kenaz', 'Caleb\'s younger brother who won Kirjath-sepher and became Israel\'s first judge — Judges 1:13; 3:9-11', 'Judges 3:9-11'],
    ['Gershom son of Moses', 'Firstborn of Zipporah in Midian named because Moses was stranger in foreign land — Exodus 2:22', 'Exodus 2:22'],
    ['Eliezer of Damascus', 'Steward of Abraham\'s household whom Abraham initially considered his heir — Genesis 15:2', 'Genesis 15:2'],
    ['Potipherah priest of On', 'Egyptian priest whose daughter Asenath was given to Joseph as wife — Genesis 41:45', 'Genesis 41:45']
  ]
});

add({
  level: 41, challengeIndex: 4,
  stage: 9, stageTitle: 'Expert Connections', levelTitle: 'Unfamiliar Names',
  mode: 'Rare Biblical Names', leftLabel: 'Unfamiliar Person', rightLabel: 'Scriptural Identity & Account',
  questionText: 'Connect these minor figures from the Gospels and Acts:',
  difficulty: 'Expert', timerSeconds: 25,
  pairs: [
    ['Bartimaeus son of Timaeus', 'Blind beggar outside Jericho who cried "Jesus, thou Son of David, have mercy on me" — Mark 10:46-52', 'Mark 10:46'],
    ['Simon the Cyrenian', 'Father of Alexander and Rufus compelled to bear Jesus\' cross to Golgotha — Mark 15:21', 'Mark 15:21'],
    ['Malchus', 'High priest\'s servant whose right ear Peter cut off with sword in Gethsemane — John 18:10', 'John 18:10'],
    ['Rhodah', 'Maid who ran to gate hearing Peter knock after angel freed him, forgetting to open — Acts 12:13-14', 'Acts 12:13-14']
  ]
});

add({
  level: 41, challengeIndex: 5,
  stage: 9, stageTitle: 'Expert Connections', levelTitle: 'Unfamiliar Names',
  mode: 'Rare Biblical Names', leftLabel: 'Unfamiliar Person', rightLabel: 'Scriptural Identity & Account',
  questionText: 'Connect these lesser-known Old Testament characters to their narratives:',
  difficulty: 'Expert', timerSeconds: 25,
  pairs: [
    ['Jael wife of Heber', 'Kenite woman who invited Sisera into tent giving milk and struck nail through temple — Judges 4:17-21', 'Judges 4:17-21'],
    ['Eglon king of Moab', 'Very fat king who oppressed Israel eighteen years and was slain by Ehud with dagger — Judges 3:14-22', 'Judges 3:14-22'],
    ['Adoni-bezek', 'Canaanite king who had 70 kings with thumbs and great toes cut off eating under table — Judges 1:5-7', 'Judges 1:6-7'],
    ['Zelophehad\'s Daughters (Mahlah, Noah, Hoglah, Milcah, Tirzah)', 'Sisters who claimed inheritance of land when father died without sons — Numbers 27:1-7', 'Numbers 27:1-7']
  ]
});

// Level 42: Forgotten Events
add({
  level: 42, challengeIndex: 1,
  stage: 9, stageTitle: 'Expert Connections', levelTitle: 'Forgotten Events',
  mode: 'Obscure Event Recall', leftLabel: 'Forgotten Event', rightLabel: 'Actual Scriptural Details & Key Figures',
  questionText: 'Match these often-overlooked biblical events to their true context:',
  difficulty: 'Expert', timerSeconds: 25,
  pairs: [
    ['Dead man resurrected touching prophet\'s bones', 'Burial in Elisha\'s sepulchre interrupted by Moabite bands — 2 Kings 13:20-21', '2 Kings 13:20-21'],
    ['Sun dialed backward ten degrees', 'Miraculous sign given King Hezekiah by Isaiah on sundial of Ahaz — 2 Kings 20:8-11', '2 Kings 20:11'],
    ['Iron ax head floated on water', 'Elisha throwing stick into Jordan where son of prophets dropped borrowed ax — 2 Kings 6:5-7', '2 Kings 6:5-7'],
    ['Seven trumpets of rams\' horns blown', 'Priests walking around Jericho for seven days preceding wall collapse — Joshua 6:4-5', 'Joshua 6:4']
  ]
});

add({
  level: 42, challengeIndex: 2,
  stage: 9, stageTitle: 'Expert Connections', levelTitle: 'Forgotten Events',
  mode: 'Obscure Event Recall', leftLabel: 'Forgotten Event', rightLabel: 'Actual Scriptural Details & Key Figures',
  questionText: 'Connect these unusual covenant and altar accounts:',
  difficulty: 'Expert', timerSeconds: 25,
  pairs: [
    ['Altar of "Ed" built by Jordan', 'Reuben, Gad, and half-Manasseh building witness altar of witness, not burnt offering — Joshua 22:10, 34', 'Joshua 22:34'],
    ['Covenant of Salt', 'Perpetual divine covenant giving kingdom of Israel to David and his sons forever — 2 Chronicles 13:5', '2 Chronicles 13:5'],
    ['Valley of Achor (Trouble)', 'Where Achan and his household were stoned for taking accursed Babylonian garment — Joshua 7:24-26', 'Joshua 7:26'],
    ['Heap of witness called Galeed (Jegar-sahadutha)', 'Boundary stone covenant established between Laban and Jacob — Genesis 31:47-49', 'Genesis 31:47-49']
  ]
});

add({
  level: 42, challengeIndex: 3,
  stage: 9, stageTitle: 'Expert Connections', levelTitle: 'Forgotten Events',
  mode: 'Obscure Event Recall', leftLabel: 'Forgotten Event', rightLabel: 'Actual Scriptural Details & Key Figures',
  questionText: 'Connect these unique prophetic demonstrations to their prophets:',
  difficulty: 'Expert', timerSeconds: 25,
  pairs: [
    ['Lying on left side 390 days and right side 40 days', 'Ezekiel bearing iniquity of Israel and Judah eating bread baked with dung — Ezekiel 4:4-15', 'Ezekiel 4:4-15'],
    ['Walking naked and barefoot three years', 'Isaiah as a sign against Egypt and Ethiopia before king of Assyria — Isaiah 20:2-4', 'Isaiah 20:2-4'],
    ['Hiding linen girdle in hole of rock by Euphrates', 'Jeremiah demonstrating how pride of Judah shall be marred and good for nothing — Jeremiah 13:1-7', 'Jeremiah 13:1-7'],
    ['Yoke of wood broken by Hananiah', 'Jeremiah commanded to wear bonds, replaced by yoke of iron when broken — Jeremiah 27:2; 28:10-14', 'Jeremiah 28:10-14']
  ]
});

add({
  level: 42, challengeIndex: 4,
  stage: 9, stageTitle: 'Expert Connections', levelTitle: 'Forgotten Events',
  mode: 'Obscure Event Recall', leftLabel: 'Forgotten Event', rightLabel: 'Actual Scriptural Details & Key Figures',
  questionText: 'Connect these dramatic episodes from Acts to their specific chapter:',
  difficulty: 'Expert', timerSeconds: 25,
  pairs: [
    ['Seven sons of Sceva beaten by demoniac', 'Vagabond Jewish exorcists assaulted saying "Jesus I know, and Paul I know" — Acts 19:13-16', 'Acts 19:14-16'],
    ['Sorcerer Elymas (Bar-jesus) struck blind', 'Paul withstanding false prophet before Sergius Paulus the proconsul — Acts 13:6-11', 'Acts 13:8-11'],
    ['Great riot in amphitheater of Ephesus', 'Demetrius the silversmith stirring artisans crying "Great is Diana of Ephesians" — Acts 19:24-34', 'Acts 19:28'],
    ['Forty Jews binding under vow not to eat or drink', 'Conspiracy to assassinate Paul foiled by his nephew reporting to chief captain — Acts 23:12-22', 'Acts 23:12-16']
  ]
});

add({
  level: 42, challengeIndex: 5,
  stage: 9, stageTitle: 'Expert Connections', levelTitle: 'Forgotten Events',
  mode: 'Obscure Event Recall', leftLabel: 'Forgotten Event', rightLabel: 'Actual Scriptural Details & Key Figures',
  questionText: 'Connect these rare Old Testament warfare occurrences:',
  difficulty: 'Expert', timerSeconds: 25,
  pairs: [
    ['Three hundred men lapping water with tongue like dogs', 'Gideon\'s army culled by the LORD beside well of Harod — Judges 7:4-7', 'Judges 7:5-7'],
    ['Sound of a going in tops of the mulberry trees', 'David\'s battle sign from God to ambush Philistines at Rephaim — 2 Samuel 5:23-24', '2 Samuel 5:24'],
    ['Singers appointed before army praising beauty of holiness', 'Jehoshaphat\'s choir leading battle as Ammon and Moab destroyed each other — 2 Chronicles 20:21-23', '2 Chronicles 20:21-22'],
    ['Valley filled with trenches without wind or rain', 'Miraculous red water filling valley deceiving Moabites before defeat — 2 Kings 3:16-24', '2 Kings 3:16-17']
  ]
});

// Level 43: Difficult Genealogies
add({
  level: 43, challengeIndex: 1,
  stage: 9, stageTitle: 'Expert Connections', levelTitle: 'Difficult Genealogies',
  mode: 'Genealogical Mastery', leftLabel: 'Biblical Father', rightLabel: 'Scriptural Offspring & Genealogy',
  questionText: 'Connect these prominent fathers from 1 Chronicles with their sons:',
  difficulty: 'Expert', timerSeconds: 25,
  pairs: [
    ['Terah of Ur', 'Father of Abram, Nahor, and Haran who died in Haran — Genesis 11:26-32', 'Genesis 11:26'],
    ['Kohath son of Levi', 'Father of Amram, Izhar, Hebron, and Uzziel — Exodus 6:18; 1 Chronicles 6:2', '1 Chronicles 6:2'],
    ['Hezron son of Pharez', 'Father of Ram, Chelubai (Caleb), and Jerahmeel — 1 Chronicles 2:9', '1 Chronicles 2:9'],
    ['Obed son of Boaz', 'Father of Jesse the Bethlehemite, grandfather of King David — Ruth 4:17, 21-22', 'Ruth 4:17']
  ]
});

add({
  level: 43, challengeIndex: 2,
  stage: 9, stageTitle: 'Expert Connections', levelTitle: 'Difficult Genealogies',
  mode: 'Genealogical Mastery', leftLabel: 'Patriarchal Ancestor', rightLabel: 'Twelve Tribes Lineage Assignment',
  questionText: 'Match each son of Jacob to his maternal ancestry:',
  difficulty: 'Expert', timerSeconds: 25,
  pairs: [
    ['Dan and Naphtali', 'Sons of Jacob born to Bilhah, Rachel\'s handmaid — Genesis 30:4-8; 35:25', 'Genesis 35:25'],
    ['Gad and Asher', 'Sons of Jacob born to Zilpah, Leah\'s handmaid — Genesis 30:9-13; 35:26', 'Genesis 35:26'],
    ['Issachar and Zebulun', 'Fifth and sixth sons of Jacob born to Leah — Genesis 30:17-20; 35:23', 'Genesis 35:23'],
    ['Ephraim and Manasseh', 'Grandsons of Jacob through Joseph adopted by Jacob as his own — Genesis 48:5', 'Genesis 48:5']
  ]
});

add({
  level: 43, challengeIndex: 3,
  stage: 9, stageTitle: 'Expert Connections', levelTitle: 'Difficult Genealogies',
  mode: 'Genealogical Mastery', leftLabel: 'Biblical Lineage', rightLabel: 'Specific Lineage Connection in Matthew 1',
  questionText: 'Match these royal ancestors in Christ\'s genealogy in Matthew 1:',
  difficulty: 'Expert', timerSeconds: 25,
  pairs: [
    ['Salmon begat Booz (Boaz)', 'By Rachab (Rahab of Jericho) — Matthew 1:5', 'Matthew 1:5'],
    ['Booz (Boaz) begat Obed', 'By Ruth the Moabitess — Matthew 1:5', 'Matthew 1:5'],
    ['David the king begat Solomon', 'Of her that had been the wife of Urias (Bathsheba) — Matthew 1:6', 'Matthew 1:6'],
    ['Josias begat Jechonias', 'And his brethren about the time carried away to Babylon — Matthew 1:11', 'Matthew 1:11']
  ]
});

add({
  level: 43, challengeIndex: 4,
  stage: 9, stageTitle: 'Expert Connections', levelTitle: 'Difficult Genealogies',
  mode: 'Genealogical Mastery', leftLabel: 'Pre-Flood Figure', rightLabel: 'Genealogical Generation in Genesis 5',
  questionText: 'Match these antediluvian patriarchs with their remarkable lifespan/event:',
  difficulty: 'Expert', timerSeconds: 25,
  pairs: [
    ['Methuselah son of Enoch', 'Lived nine hundred sixty and nine years, oldest recorded in Scripture — Genesis 5:27', 'Genesis 5:27'],
    ['Enoch son of Jared', 'Walked with God and was not, for God took him at 365 years — Genesis 5:24', 'Genesis 5:24'],
    ['Lamech son of Methuselah', 'Father of Noah who said "This same shall comfort us concerning our work" — Genesis 5:28-29', 'Genesis 5:29'],
    ['Mahalaleel son of Cainan', 'Lived eight hundred ninety and five years and begat Jared — Genesis 5:15-17', 'Genesis 5:15-17']
  ]
});

add({
  level: 43, challengeIndex: 5,
  stage: 9, stageTitle: 'Expert Connections', levelTitle: 'Difficult Genealogies',
  mode: 'Genealogical Mastery', leftLabel: 'Levitical Family', rightLabel: 'Specific Tabernacle Duties Assigned',
  questionText: 'Match the sons of Levi with their specific transport duty in Numbers 4:',
  difficulty: 'Expert', timerSeconds: 25,
  pairs: [
    ['Sons of Kohath', 'Carried most holy vessels (Ark, table, candlestick, altars) upon their shoulders — Numbers 4:4-15; 7:9', 'Numbers 4:4-15'],
    ['Sons of Gershon', 'Carried curtains, coverings of tabernacle, hangings of court and cords — Numbers 4:24-26', 'Numbers 4:24-26'],
    ['Sons of Merari', 'Carried boards, bars, pillars, and sockets of tabernacle and court — Numbers 4:31-32', 'Numbers 4:31-32'],
    ['Eleazar son of Aaron', 'Oversight of oil for light, sweet incense, daily meat offering, and anointing oil — Numbers 4:16', 'Numbers 4:16']
  ]
});

// Level 44: The Hidden Connection
add({
  level: 44, challengeIndex: 1,
  stage: 9, stageTitle: 'Expert Connections', levelTitle: 'The Hidden Connection',
  mode: 'Subtle Biblical Links', leftLabel: 'Old Testament Link', rightLabel: 'Deep Scriptural Tie & Fulfillment',
  questionText: 'Connect these subtle Old Testament details to their deeper biblical links:',
  difficulty: 'Expert', timerSeconds: 25,
  pairs: [
    ['Balaam\'s Ass speaking with man\'s voice', 'Rebuked the madness of the greedy prophet — Numbers 22:28-30; 2 Peter 2:15-16', '2 Peter 2:15-16'],
    ['Jannes and Jambres', 'Egyptian magicians who withstood Moses by imitating signs — Exodus 7:11; 2 Timothy 3:8', '2 Timothy 3:8'],
    ['Michael archangel disputing about body of Moses', 'Contending with devil saying "The Lord rebuke thee" — Jude 1:9', 'Jude 1:9'],
    ['Enoch the seventh from Adam prophesying', 'Saying "Behold the Lord cometh with ten thousands of his saints" — Jude 1:14', 'Jude 1:14']
  ]
});

add({
  level: 44, challengeIndex: 2,
  stage: 9, stageTitle: 'Expert Connections', levelTitle: 'The Hidden Connection',
  mode: 'Subtle Biblical Links', leftLabel: 'New Testament Person', rightLabel: 'Their Forgotten Old Testament Roots',
  questionText: 'Connect these New Testament personalities with their Old Testament lineage:',
  difficulty: 'Expert', timerSeconds: 25,
  pairs: [
    ['Apostle Paul', 'Circumcised the eighth day, of the stock of Israel, of the tribe of Benjamin — Philippians 3:5', 'Philippians 3:5'],
    ['Barnabas of Cyprus', 'A Levite from the island of Cyprus whose real name was Joses — Acts 4:36', 'Acts 4:36'],
    ['Anna the Prophetess', 'Daughter of Phanuel belonging to the northern tribe of Asher — Luke 2:36', 'Luke 2:36'],
    ['John the Baptist', 'Born of a father belonging to priestly course of Abia and mother of Aaron\'s daughters — Luke 1:5', 'Luke 1:5']
  ]
});

add({
  level: 44, challengeIndex: 3,
  stage: 9, stageTitle: 'Expert Connections', levelTitle: 'The Hidden Connection',
  mode: 'Subtle Biblical Links', leftLabel: 'Obscure Biblical Item', rightLabel: 'Hidden Scriptural Meaning',
  questionText: 'Connect these special scriptural objects with their significant occurrences:',
  difficulty: 'Expert', timerSeconds: 25,
  pairs: [
    ['Aaron\'s Rod that budded', 'Brought forth buds, bloomed blossoms, and yielded almonds inside Ark — Numbers 17:8; Hebrews 9:4', 'Numbers 17:8'],
    ['Golden pot having manna', 'Omer of angel\'s food preserved before testimony for all generations — Exodus 16:33-34; Hebrews 9:4', 'Hebrews 9:4'],
    ['Pot of oil of the prophet\'s widow', 'Flowed ceaselessly until every borrowed pot was filled — 2 Kings 4:4-6', '2 Kings 4:6'],
    ['Elijah\'s Mantle', 'Divided Jordan river waters when struck by Elijah and later Elisha — 2 Kings 2:8, 14', '2 Kings 2:14']
  ]
});

add({
  level: 44, challengeIndex: 4,
  stage: 9, stageTitle: 'Expert Connections', levelTitle: 'The Hidden Connection',
  mode: 'Subtle Biblical Links', leftLabel: 'Ancient King / Ruler', rightLabel: 'Historic Foreign Encounter in Scripture',
  questionText: 'Match each foreign ruler to their documented biblical interaction:',
  difficulty: 'Expert', timerSeconds: 25,
  pairs: [
    ['Cyrus King of Persia', 'LORD stirred his spirit to proclaim rebuilding of temple in Jerusalem — Ezra 1:1-3; Isaiah 44:28', 'Ezra 1:1-2'],
    ['Darius the Mede', 'Cast Daniel into lions\' den and spent night fasting in sorrow — Daniel 6:14-18', 'Daniel 6:18'],
    ['Tiglath-pileser (Tilgath-pilneser)', 'Assyrian king hired by Ahaz who carried away northern tribes — 2 Kings 16:7-9; 1 Chronicles 5:26', '2 Kings 16:7-9'],
    ['Merodach-baladan King of Babylon', 'Sent letters and present to Hezekiah who vainly showed all his treasures — 2 Kings 20:12-13; Isaiah 39:1-2', 'Isaiah 39:1-2']
  ]
});

add({
  level: 44, challengeIndex: 5,
  stage: 9, stageTitle: 'Expert Connections', levelTitle: 'The Hidden Connection',
  mode: 'Subtle Biblical Links', leftLabel: 'Significant Biblical Tree', rightLabel: 'Exact Biblical Account Associated',
  questionText: 'Match each historic biblical tree with its memorable occurrence:',
  difficulty: 'Expert', timerSeconds: 25,
  pairs: [
    ['Sycomore Tree of Jericho', 'Climbed by short tax collector Zacchaeus to see Jesus — Luke 19:1-4', 'Luke 19:4'],
    ['Oak of Ophrah', 'Where Angel of the LORD sat before Gideon beating wheat in winepress — Judges 6:11', 'Judges 6:11'],
    ['Palm Tree of Deborah', 'Between Ramah and Bethel where children of Israel came to judge for judgment — Judges 4:5', 'Judges 4:5'],
    ['Juniper Tree in the Wilderness', 'Where discouraged Elijah requested for himself that he might die — 1 Kings 19:4-5', '1 Kings 19:4']
  ]
});

// Level 45: Expert Match Boss
add({
  level: 45, challengeIndex: 1,
  stage: 9, stageTitle: 'Expert Connections', levelTitle: 'Expert Match Boss',
  mode: 'Boss Expert Challenge', leftLabel: 'Obscure Bible Person', rightLabel: 'Accurate Historical Link & Scripture',
  questionText: 'Stage 9 Finale Round 1: Match these little-known biblical figures:',
  difficulty: 'Mini-boss', timerSeconds: 25,
  pairs: [
    ['Cush the Benjamite', 'Mentioned in Title of Psalm 7 concerning words against David — Psalm 7:title', 'Psalm 7:title'],
    ['Ethan the Ezrahite', 'Man of renowned wisdom surpassed by Solomon, author of Psalm 89 — 1 Kings 4:31; Psalm 89:title', '1 Kings 4:31'],
    ['Heman the Ezrahite', 'Singer and wise man who authored somber Psalm 88 — 1 Kings 4:31; Psalm 88:title', 'Psalm 88:title'],
    ['Asaph the Levite', 'Chief musician appointed by David to give thanks, author of 12 Psalms — 1 Chronicles 16:4-7; Psalm 73:title', '1 Chronicles 16:7']
  ]
});

add({
  level: 45, challengeIndex: 2,
  stage: 9, stageTitle: 'Expert Connections', levelTitle: 'Expert Match Boss',
  mode: 'Boss Expert Challenge', leftLabel: 'Obscure Bible Person', rightLabel: 'Accurate Historical Link & Scripture',
  questionText: 'Stage 9 Finale Round 2: Match these minor characters in Jeremiah\'s ministry:',
  difficulty: 'Mini-boss', timerSeconds: 25,
  pairs: [
    ['Pashur son of Immer', 'Priest who smote Jeremiah and put him in stocks at Upper Gate of Benjamin — Jeremiah 20:1-2', 'Jeremiah 20:1-2'],
    ['Jehudi son of Nethaniah', 'Official who read Jeremiah\'s scroll before King Jehoiakim cutting it with penknife — Jeremiah 36:21-23', 'Jeremiah 36:23'],
    ['Gedaliah son of Ahikam', 'Appointed governor over remnant in Judah by Babylon, slain at Mizpah by Ishmael — Jeremiah 40:5-7; 41:1-2', 'Jeremiah 41:2'],
    ['Jonadab son of Rechab', 'Established vow for descendants never to drink wine or build houses — Jeremiah 35:6-10', 'Jeremiah 35:6']
  ]
});

add({
  level: 45, challengeIndex: 3,
  stage: 9, stageTitle: 'Expert Connections', levelTitle: 'Expert Match Boss',
  mode: 'Boss Expert Challenge', leftLabel: 'Obscure Bible Person', rightLabel: 'Accurate Historical Link & Scripture',
  questionText: 'Stage 9 Finale Round 3: Match these individuals in the Passion and Resurrection:',
  difficulty: 'Mini-boss', timerSeconds: 20,
  pairs: [
    ['Nicodemus', 'Ruler of Jews who first came by night, brought 100 pounds of myrrh and aloes — John 3:1-2; 19:39', 'John 19:39'],
    ['Barabbas', 'Notable prisoner and murderer released by Pilate at Passover instead of Jesus — Matthew 27:16, 26; Mark 15:7', 'Mark 15:7'],
    ['Alexander and Rufus', 'Sons of Simon of Cyrene known to early church in Rome — Mark 15:21; Romans 16:13', 'Mark 15:21'],
    ['Joanna wife of Chuza', 'Herod\'s steward\'s wife who ministered to Jesus of her substance and visited tomb — Luke 8:3; 24:10', 'Luke 8:3']
  ]
});

add({
  level: 45, challengeIndex: 4,
  stage: 9, stageTitle: 'Expert Connections', levelTitle: 'Expert Match Boss',
  mode: 'Boss Expert Challenge', leftLabel: 'Obscure Bible Person', rightLabel: 'Accurate Historical Link & Scripture',
  questionText: 'Stage 9 Finale Round 4: Match these Old Testament covenants and signs:',
  difficulty: 'Mini-boss', timerSeconds: 20,
  pairs: [
    ['Sabbath day', 'Perpetual sign between the LORD and children of Israel throughout generations — Exodus 31:16-17; Ezekiel 20:12', 'Exodus 31:17'],
    ['Fringes (Tsitsit) on garments with ribbon of blue', 'To look upon and remember all commandments of the LORD — Numbers 15:38-39', 'Numbers 15:38-39'],
    ['Blood on lintel and two side posts', 'Sign for destroying angel to pass over houses in Egypt — Exodus 12:7, 13', 'Exodus 12:13'],
    ['Scarlet line bound in window', 'Sign given Rahab of Jericho that her household be spared destruction — Joshua 2:18-21; 6:23', 'Joshua 2:18']
  ]
});

add({
  level: 45, challengeIndex: 5,
  stage: 9, stageTitle: 'Expert Connections', levelTitle: 'Expert Match Boss',
  mode: 'Boss Expert Challenge', leftLabel: 'Obscure Bible Person', rightLabel: 'Accurate Historical Link & Scripture',
  questionText: 'Stage 9 Finale Round 5: Master these challenging Old Testament figures:',
  difficulty: 'Mini-boss', timerSeconds: 20,
  pairs: [
    ['Balaam son of Beor', 'Soothsayer of Pethor hired by Balak king of Moab who could only bless Israel — Numbers 22:5; 23:11', 'Numbers 23:11'],
    ['Coebi daughter of Zur', 'Midianitish woman slain by Phinehas with Zimri in tent — Numbers 25:14-15', 'Numbers 25:15'],
    ['Achan son of Carmi', 'Troubler of Israel from Judah tribe who hid silver, gold wedge, and Babylon garment — Joshua 7:1, 21', 'Joshua 7:21'],
    ['Jabin King of Hazor', 'Canaanite king whose mighty host and 900 iron chariots were delivered into Barak\'s hand — Judges 4:2-3, 23-24', 'Judges 4:2']
  ]
});


// =========================================================================
// STAGE 10 — ULTIMATE BIBLE MATCH-UP (Levels 46–50)
// =========================================================================

// Level 46: No Easy Matches
add({
  level: 46, challengeIndex: 1,
  stage: 10, stageTitle: 'Ultimate Bible Match-Up', levelTitle: 'No Easy Matches',
  mode: 'Plausible Distractors', leftLabel: 'Biblical Actor', rightLabel: 'Precise Distinguishing Deed & Verse',
  questionText: 'Carefully match each Old Testament warrior with his exact heroic feat:',
  difficulty: 'Very Difficult', timerSeconds: 20,
  pairs: [
    ['Josheb-basshebeth the Tachmonite (Adino)', 'Chief of David\'s three mighty men who lifted spear against 800 slain at once — 2 Samuel 23:8', '2 Samuel 23:8'],
    ['Eleazar son of Dodo the Ahohite', 'Smote Philistines until his hand was weary and clave unto sword — 2 Samuel 23:9-10', '2 Samuel 23:10'],
    ['Shammah son of Agee the Hararite', 'Stood in middle of plot of ground full of lentiles and defended it against Philistines — 2 Samuel 23:11-12', '2 Samuel 23:11-12'],
    ['Abishai brother of Joab', 'Chief among three who lifted spear against 300 and slew them — 2 Samuel 23:18-19', '2 Samuel 23:18']
  ]
});

add({
  level: 46, challengeIndex: 2,
  stage: 10, stageTitle: 'Ultimate Bible Match-Up', levelTitle: 'No Easy Matches',
  mode: 'Plausible Distractors', leftLabel: 'Biblical Actor', rightLabel: 'Precise Distinguishing Deed & Verse',
  questionText: 'Distinguish these individuals associated with the Ark of the Covenant:',
  difficulty: 'Very Difficult', timerSeconds: 20,
  pairs: [
    ['Uzzah son of Abinadab', 'Struck dead at threshingfloor of Chidon/Nachon for putting hand to steady Ark — 2 Samuel 6:6-7; 1 Chronicles 13:9-10', '2 Samuel 6:6-7'],
    ['Obed-edom the Gittite', 'Philistine city native whose household the LORD blessed for three months while Ark rested there — 2 Samuel 6:10-12', '2 Samuel 6:11'],
    ['Hophni and Phinehas sons of Eli', 'Wicked priests who brought Ark into battle at Aphek and were slain by Philistines — 1 Samuel 4:4, 11', '1 Samuel 4:11'],
    ['Men of Beth-shemesh', 'Smitten because they looked into the Ark of the LORD when it returned from Philistines — 1 Samuel 6:19', '1 Samuel 6:19']
  ]
});

add({
  level: 46, challengeIndex: 3,
  stage: 10, stageTitle: 'Ultimate Bible Match-Up', levelTitle: 'No Easy Matches',
  mode: 'Plausible Distractors', leftLabel: 'Biblical Actor', rightLabel: 'Precise Distinguishing Deed & Verse',
  questionText: 'Match each biblical person with the specific animal involved in their story:',
  difficulty: 'Very Difficult', timerSeconds: 20,
  pairs: [
    ['Samson', 'Found swarm of bees and honey in carcass of young lion he had rent — Judges 14:8-9', 'Judges 14:8'],
    ['The Disobedient Prophet of Judah', 'Slain by a lion that stood by the carcass with the ass neither eating body nor tearing ass — 1 Kings 13:24-28', '1 Kings 13:28'],
    ['Elisha the Prophet', 'Two she bears coming out of wood tearing 42 mocking youths of Bethel — 2 Kings 2:23-24', '2 Kings 2:24'],
    ['David at Bethlehem', 'Slew both lion and bear that came to take lamb out of father\'s flock — 1 Samuel 17:34-36', '1 Samuel 17:35']
  ]
});

add({
  level: 46, challengeIndex: 4,
  stage: 10, stageTitle: 'Ultimate Bible Match-Up', levelTitle: 'No Easy Matches',
  mode: 'Plausible Distractors', leftLabel: 'Biblical Actor', rightLabel: 'Precise Distinguishing Deed & Verse',
  questionText: 'Distinguish these royal assassinations recorded in the book of Kings:',
  difficulty: 'Very Difficult', timerSeconds: 20,
  pairs: [
    ['King Eglon of Moab', 'Slain in private summer parlor by left-handed Ehud with two-edged dagger — Judges 3:20-22', 'Judges 3:21-22'],
    ['Sennacherib King of Assyria', 'Slain with sword by his sons Adrammelech and Sharezer while worshipping in Nisroch\'s temple — 2 Kings 19:37', '2 Kings 19:37'],
    ['Ben-hadad King of Syria', 'Smothered with thick cloth dipped in water by Hazael who seized the throne — 2 Kings 8:15', '2 Kings 8:15'],
    ['King Joram (Jehoram) of Israel', 'Struck between arms with arrow by Jehu at Naboth\'s vineyard — 2 Kings 9:24-26', '2 Kings 9:24']
  ]
});

add({
  level: 46, challengeIndex: 5,
  stage: 10, stageTitle: 'Ultimate Bible Match-Up', levelTitle: 'No Easy Matches',
  mode: 'Plausible Distractors', leftLabel: 'Biblical Actor', rightLabel: 'Precise Distinguishing Deed & Verse',
  questionText: 'Match these specific biblical cities to their memorable scriptural curse or judgment:',
  difficulty: 'Very Difficult', timerSeconds: 20,
  pairs: [
    ['Jericho', 'Curse placed by Joshua that rebuilder would lay foundation in firstborn and set gates in youngest — Joshua 6:26; 1 Kings 16:34', 'Joshua 6:26'],
    ['Bethel', 'Altar torn and ashes poured out when unnamed prophet cried out against Jeroboam\'s golden calf — 1 Kings 13:1-5', '1 Kings 13:3'],
    ['Sodom and Gomorrah', 'Overthrown with brimstone and fire from the LORD out of heaven — Genesis 19:24-25', 'Genesis 19:24'],
    ['Chorazin and Bethsaida', 'Woe pronounced by Jesus because mighty works done there would have caused Tyre to repent — Matthew 11:21-22', 'Matthew 11:21']
  ]
});

// Level 47: Old Testament Meets New Testament
add({
  level: 47, challengeIndex: 1,
  stage: 10, stageTitle: 'Ultimate Bible Match-Up', levelTitle: 'Old Testament Meets New Testament',
  mode: 'Cross-Testament Typology', leftLabel: 'Old Testament Figure / Type', rightLabel: 'New Testament Antitype & Exposition',
  questionText: 'Match each Old Testament shadow to its New Testament fulfillment:',
  difficulty: 'Very Difficult', timerSeconds: 20,
  pairs: [
    ['Melchizedek King of Salem', 'Priest forever after whose order Christ is made High Priest without genealogy — Hebrews 7:1-3, 17', 'Hebrews 7:1-3'],
    ['The Brazen Serpent in Wilderness', 'Type of Son of man lifted up on the cross that whosoever believeth should not perish — John 3:14-15', 'John 3:14'],
    ['The Passover Lamb without blemish', 'Fulfilled in Christ our passover sacrificed for us, Lamb of God taking away sin — 1 Corinthians 5:7; John 1:29', '1 Corinthians 5:7'],
    ['Jonah three days in whale\'s belly', 'Sign given to evil generation: Son of man three days and three nights in heart of earth — Matthew 12:39-40', 'Matthew 12:40']
  ]
});

add({
  level: 47, challengeIndex: 2,
  stage: 10, stageTitle: 'Ultimate Bible Match-Up', levelTitle: 'Old Testament Meets New Testament',
  mode: 'Cross-Testament Typology', leftLabel: 'Old Testament Passage Quoted', rightLabel: 'New Testament Citation & Application',
  questionText: 'Match each prophetic Old Testament passage to its New Testament usage:',
  difficulty: 'Very Difficult', timerSeconds: 20,
  pairs: [
    ['Isaiah 53:1-7 ("He was led as sheep to slaughter")', 'Read by Ethiopian eunuch in chariot and explained by Philip as Jesus — Acts 8:32-35', 'Acts 8:32-35'],
    ['Joel 2:28-32 ("I will pour out my spirit upon all flesh")', 'Preached by Peter at Pentecost explaining the disciples speaking in tongues — Acts 2:16-21', 'Acts 2:16-17'],
    ['Psalm 16:10 ("Thou wilt not leave my soul in hell")', 'Cited by Peter and Paul demonstrating David\'s body saw corruption but Christ rose — Acts 2:27-31; 13:35-37', 'Acts 2:27-31'],
    ['Habakkuk 2:4 ("The just shall live by his faith")', 'Core doctrinal thesis expounded by Paul in Romans, Galatians, and Hebrews — Romans 1:17; Galatians 3:11; Hebrews 10:38', 'Romans 1:17']
  ]
});

add({
  level: 47, challengeIndex: 3,
  stage: 10, stageTitle: 'Ultimate Bible Match-Up', levelTitle: 'Old Testament Meets New Testament',
  mode: 'Cross-Testament Typology', leftLabel: 'Old Testament Patriarch', rightLabel: 'New Testament Hall of Faith Citation in Hebrews 11',
  questionText: 'Match each hero to their commendation in Hebrews 11:',
  difficulty: 'Very Difficult', timerSeconds: 20,
  pairs: [
    ['Abel', 'By faith offered unto God a more excellent sacrifice than Cain, by which he obtained witness — Hebrews 11:4', 'Hebrews 11:4'],
    ['Enoch', 'By faith was translated that he should not see death, having testimony that he pleased God — Hebrews 11:5', 'Hebrews 11:5'],
    ['Abraham', 'By faith when called to go out into place of inheritance obeyed, not knowing whither he went — Hebrews 11:8', 'Hebrews 11:8'],
    ['Moses', 'By faith refused to be called son of Pharaoh\'s daughter, choosing affliction with God\'s people — Hebrews 11:24-25', 'Hebrews 11:24-25']
  ]
});

add({
  level: 47, challengeIndex: 4,
  stage: 10, stageTitle: 'Ultimate Bible Match-Up', levelTitle: 'Old Testament Meets New Testament',
  mode: 'Cross-Testament Typology', leftLabel: 'Old Testament Covenant Person', rightLabel: 'New Testament Apostolic Defense',
  questionText: 'Match these Old Testament individuals with apostolic teachings in the epistles:',
  difficulty: 'Very Difficult', timerSeconds: 20,
  pairs: [
    ['Hagar and Sarah', 'Paul\'s allegory of two covenants: Mount Sinai bearing children to bondage vs Jerusalem above free — Galatians 4:22-26', 'Galatians 4:24-26'],
    ['Adam the first man', 'Contrasted by Paul with the Last Adam (Christ), a quickening spirit — 1 Corinthians 15:22, 45', '1 Corinthians 15:45'],
    ['Rahab the harlot', 'Cited by James as justified by works when she received spies and sent them out another way — James 2:25', 'James 2:25'],
    ['Elijah the prophet', 'Cited by James as man subject to like passions as us who prayed earnestly and heaven gave rain — James 5:17-18', 'James 5:17']
  ]
});

add({
  level: 47, challengeIndex: 5,
  stage: 10, stageTitle: 'Ultimate Bible Match-Up', levelTitle: 'Old Testament Meets New Testament',
  mode: 'Cross-Testament Typology', leftLabel: 'Old Testament Book', rightLabel: 'Revelation Symbol Derived from it',
  questionText: 'Match the prophetic Old Testament book to its parallel symbol in Revelation:',
  difficulty: 'Very Difficult', timerSeconds: 20,
  pairs: [
    ['Daniel 7 (Four Great Beasts from Sea)', 'Revelation 13 beast like a leopard with feet of bear and mouth of lion — Revelation 13:1-2', 'Revelation 13:2'],
    ['Ezekiel 1 (Four Living Creatures with four faces)', 'Revelation 4 four beasts like lion, calf, man, and flying eagle praising God — Revelation 4:6-8', 'Revelation 4:7'],
    ['Zechariah 4 (Two Olive Trees beside Golden Candlestick)', 'Revelation 11 two witnesses standing before the God of the earth — Revelation 11:3-4', 'Revelation 11:4'],
    ['Exodus 25 (Ark of the Testimony in Holy of Holies)', 'Revelation 11 temple of God opened in heaven and ark of testament seen — Revelation 11:19', 'Revelation 11:19']
  ]
});

// Level 48: The Ultimate Connection Trap
add({
  level: 48, challengeIndex: 1,
  stage: 10, stageTitle: 'Ultimate Bible Match-Up', levelTitle: 'The Ultimate Connection Trap',
  mode: 'Master Distractor Trap', leftLabel: 'Confusing Biblical Person', rightLabel: 'Exact Defining Biblical Record',
  questionText: 'Trap Challenge 1: Distinguish these figures named Zedekiah:',
  difficulty: 'Very Difficult', timerSeconds: 20,
  pairs: [
    ['Zedekiah son of Chenaanah', 'False prophet who made horns of iron saying Ahab would push Syrians — 1 Kings 22:11, 24', '1 Kings 22:11'],
    ['Zedekiah son of Josiah (Mattaniah)', 'Last king of Judah whose sons were slain before his eyes before he was blinded — 2 Kings 24:17; 25:7', '2 Kings 25:7'],
    ['Zedekiah son of Maaseiah', 'False prophet in Babylon roasted in fire by King Nebuchadnezzar for adultery — Jeremiah 29:21-22', 'Jeremiah 29:22'],
    ['Zedekiah son of Hananiah', 'Prince of Judah in Jehoiakim\'s reign sitting in scribe\'s chamber hearing scroll — Jeremiah 36:12', 'Jeremiah 36:12']
  ]
});

add({
  level: 48, challengeIndex: 2,
  stage: 10, stageTitle: 'Ultimate Bible Match-Up', levelTitle: 'The Ultimate Connection Trap',
  mode: 'Master Distractor Trap', leftLabel: 'Confusing Biblical Person', rightLabel: 'Exact Defining Biblical Record',
  questionText: 'Trap Challenge 2: Distinguish these prominent men named Nathan:',
  difficulty: 'Very Difficult', timerSeconds: 20,
  pairs: [
    ['Nathan the Prophet', 'Rebuked David with parable of the poor man\'s ewe lamb — 2 Samuel 12:1-7', '2 Samuel 12:1-7'],
    ['Nathan son of David', 'Son born to David and Bathsheba in Jerusalem listed in Christ\'s lineage — 2 Samuel 5:14; Luke 3:31', 'Luke 3:31'],
    ['Nathan of Zobah', 'Father of Igal, one of David\'s thirty mighty warriors — 2 Samuel 23:36', '2 Samuel 23:36'],
    ['Nathan son of Attai', 'Father of Zabad in genealogical line of Jerahmeel — 1 Chronicles 2:36', '1 Chronicles 2:36']
  ]
});

add({
  level: 48, challengeIndex: 3,
  stage: 10, stageTitle: 'Ultimate Bible Match-Up', levelTitle: 'The Ultimate Connection Trap',
  mode: 'Master Distractor Trap', leftLabel: 'Confusing Biblical Person', rightLabel: 'Exact Defining Biblical Record',
  questionText: 'Trap Challenge 3: Distinguish these four men named Korah:',
  difficulty: 'Very Difficult', timerSeconds: 20,
  pairs: [
    ['Korah son of Izhar', 'Levite rebel swallowed alive by the earth for defying Moses and Aaron — Numbers 16:1-33', 'Numbers 16:31-33'],
    ['Korah son of Esau', 'Duke born to Esau by Aholibamah daughter of Anah in Edom — Genesis 36:5, 14, 18', 'Genesis 36:18'],
    ['Sons of Korah', 'Levitical musical guild that died not in rebellion and composed eleven Psalms — Numbers 26:11; Psalm 42:title', 'Numbers 26:11'],
    ['Korah son of Hebron', 'Descendant of Judah through Caleb in 1 Chronicles genealogy — 1 Chronicles 2:43', '1 Chronicles 2:43']
  ]
});

add({
  level: 48, challengeIndex: 4,
  stage: 10, stageTitle: 'Ultimate Bible Match-Up', levelTitle: 'The Ultimate Connection Trap',
  mode: 'Master Distractor Trap', leftLabel: 'Confusing Biblical Person', rightLabel: 'Exact Defining Biblical Record',
  questionText: 'Trap Challenge 4: Distinguish these biblical people named Simon:',
  difficulty: 'Very Difficult', timerSeconds: 20,
  pairs: [
    ['Simon Peter (Cephas)', 'Son of Jona, leader among the Twelve who confessed Christ and denied Him thrice — Matthew 16:16; 26:69-75', 'Matthew 16:16'],
    ['Simon the Sorcerer (Magus)', 'Practiced sorcery in Samaria, offered money to buy gift of Holy Ghost — Acts 8:9-20', 'Acts 8:18-20'],
    ['Simon the Tanner', 'Believer in Joppa by sea side with whom Peter lodged when Cornelius called — Acts 9:43; 10:6', 'Acts 10:6'],
    ['Simon the Leper', 'Resident of Bethany in whose house a woman poured costly ointment on Jesus\' head — Matthew 26:6-7', 'Matthew 26:6']
  ]
});

add({
  level: 48, challengeIndex: 5,
  stage: 10, stageTitle: 'Ultimate Bible Match-Up', levelTitle: 'The Ultimate Connection Trap',
  mode: 'Master Distractor Trap', leftLabel: 'Confusing Biblical Person', rightLabel: 'Exact Defining Biblical Record',
  questionText: 'Trap Challenge 5: Distinguish these biblical women named Tamar:',
  difficulty: 'Very Difficult', timerSeconds: 20,
  pairs: [
    ['Tamar daughter-in-law of Judah', 'Mother of Pharez and Zarah who secured her pledge with signet, bracelets, and staff — Genesis 38:13-30', 'Genesis 38:24-30'],
    ['Tamar daughter of David', 'Full sister of Absalom wronged by half-brother Amnon — 2 Samuel 13:1-19', '2 Samuel 13:1-19'],
    ['Tamar daughter of Absalom', 'Woman of fair countenance named after Absalom\'s wronged sister — 2 Samuel 14:27', '2 Samuel 14:27'],
    ['Maachah daughter of Tamar (or Absalom)', 'Mother of Abijam and wife of Rehoboam king of Judah — 1 Kings 15:2; 2 Chronicles 11:20', '2 Chronicles 11:20']
  ]
});

// Level 49: Bible Knowledge Master
add({
  level: 49, challengeIndex: 1,
  stage: 10, stageTitle: 'Ultimate Bible Match-Up', levelTitle: 'Bible Knowledge Master',
  mode: 'Master Level Synthesis', leftLabel: 'Master Clue / Individual', rightLabel: 'Complete Scriptural Synthesis & Scripture',
  questionText: 'Master Level Challenge 1: Match these Old Testament covenants with their exact biblical conditions:',
  difficulty: 'Expert', timerSeconds: 20,
  pairs: [
    ['Phinehas\' Covenant of Peace', 'Everlasting priesthood given because he was zealous for his God at Shittim — Numbers 25:12-13', 'Numbers 25:13'],
    ['Davidic Covenant of Kingdom', 'House, throne, and kingdom established forever before the LORD — 2 Samuel 7:16; Psalm 89:3-4', '2 Samuel 7:16'],
    ['New Covenant in Jeremiah', 'Law written on inward parts and in their hearts with sins remembered no more — Jeremiah 31:31-34; Hebrews 8:8-12', 'Jeremiah 31:33'],
    ['Mosaic Covenant of Blessings & Curses', 'Conditions of obedience upon Mount Gerizim and disobedience upon Mount Ebal — Deuteronomy 28:1-68', 'Deuteronomy 28:1-2']
  ]
});

add({
  level: 49, challengeIndex: 2,
  stage: 10, stageTitle: 'Ultimate Bible Match-Up', levelTitle: 'Bible Knowledge Master',
  mode: 'Master Level Synthesis', leftLabel: 'Master Clue / Individual', rightLabel: 'Complete Scriptural Synthesis & Scripture',
  questionText: 'Master Level Challenge 2: Match each Gospel to its unique opening genealogy or narrative:',
  difficulty: 'Expert', timerSeconds: 20,
  pairs: [
    ['Gospel of Matthew', 'Opens with royal genealogy of Jesus Christ from Abraham through David and kings — Matthew 1:1-17', 'Matthew 1:1'],
    ['Gospel of Mark', 'Opens directly with John the Baptist\'s wilderness ministry without birth record — Mark 1:1-4', 'Mark 1:1'],
    ['Gospel of Luke', 'Traces ancestry backward from Jesus all the way to "Adam which was the son of God" — Luke 3:23-38', 'Luke 3:38'],
    ['Gospel of John', 'Opens in eternity with "In the beginning was the Word, and the Word was with God" — John 1:1-3', 'John 1:1']
  ]
});

add({
  level: 49, challengeIndex: 3,
  stage: 10, stageTitle: 'Ultimate Bible Match-Up', levelTitle: 'Bible Knowledge Master',
  mode: 'Master Level Synthesis', leftLabel: 'Master Clue / Individual', rightLabel: 'Complete Scriptural Synthesis & Scripture',
  questionText: 'Master Level Challenge 3: Match each major Pauline epistle to its primary thematic greeting/focus:',
  difficulty: 'Expert', timerSeconds: 20,
  pairs: [
    ['Romans', 'Systematic exposition of justification by faith and reconciliation through Christ — Romans 1:16-17; 5:1', 'Romans 1:16-17'],
    ['Galatians', 'Fierce defense of Christian liberty against Judaizing circumcision teachers — Galatians 1:6-9; 5:1', 'Galatians 5:1'],
    ['Ephesians', 'Exposition of church as the body of Christ, heavenly blessings, and spiritual armor — Ephesians 1:3; 6:10-18', 'Ephesians 1:3'],
    ['Philippians', 'Epistle of joy in persecution, the Kenosis hymn, and contentment in all things — Philippians 2:5-11; 4:4, 11-13', 'Philippians 2:5-8']
  ]
});

add({
  level: 49, challengeIndex: 4,
  stage: 10, stageTitle: 'Ultimate Bible Match-Up', levelTitle: 'Bible Knowledge Master',
  mode: 'Master Level Synthesis', leftLabel: 'Master Clue / Individual', rightLabel: 'Complete Scriptural Synthesis & Scripture',
  questionText: 'Master Level Challenge 4: Match these prophetic visions with their biblical prophets:',
  difficulty: 'Expert', timerSeconds: 20,
  pairs: [
    ['Valley of Dry Bones coming together', 'Ezekiel prophesying to the wind to breathe life into slain host of Israel — Ezekiel 37:1-10', 'Ezekiel 37:7-10'],
    ['Colossus of Gold, Silver, Brass, Iron and Clay', 'Daniel interpreting Nebuchadnezzar\'s dream destroyed by stone cut without hands — Daniel 2:31-35', 'Daniel 2:34-35'],
    ['Seraphim crying "Holy, holy, holy" with live coal from altar', 'Isaiah\'s temple vision in the year King Uzziah died cleansing his lips — Isaiah 6:1-7', 'Isaiah 6:6-7'],
    ['Four Horns and Four Carpenters', 'Zechariah seeing craftsmen who come to fray the horns that scattered Judah — Zechariah 1:18-21', 'Zechariah 1:20-21']
  ]
});

add({
  level: 49, challengeIndex: 5,
  stage: 10, stageTitle: 'Ultimate Bible Match-Up', levelTitle: 'Bible Knowledge Master',
  mode: 'Master Level Synthesis', leftLabel: 'Master Clue / Individual', rightLabel: 'Complete Scriptural Synthesis & Scripture',
  questionText: 'Master Level Challenge 5: Match these specific Old Testament miracles with their detailed locations:',
  difficulty: 'Expert', timerSeconds: 20,
  pairs: [
    ['Sun and Moon standing still', 'Joshua commanding in sight of Israel upon Gibeon and valley of Ajalon — Joshua 10:12-14', 'Joshua 10:12'],
    ['Water flowing from jawbone of an ass', 'En-hakkore in Lehi where Samson drank and his spirit came again — Judges 15:18-19', 'Judges 15:19'],
    ['Fire consuming sacrifice, wood, stones, dust, and water in trench', 'Mount Carmel at the time of the evening sacrifice under Elijah — 1 Kings 18:36-38', '1 Kings 18:38'],
    ['Jordan River divided by a mantle', 'Opposite Jericho when Elijah struck waters and both went over on dry ground — 2 Kings 2:7-8', '2 Kings 2:8']
  ]
});

// Level 50: Match-Up Grandmaster
add({
  level: 50, challengeIndex: 1,
  stage: 10, stageTitle: 'Ultimate Bible Match-Up', levelTitle: 'Match-Up Grandmaster',
  mode: 'Grandmaster Final Boss', leftLabel: 'Biblical Person', rightLabel: 'Ultimate Scriptural Distinction & Scripture',
  questionText: 'Grandmaster Trial 1: Connect these high-level Old Testament figures to their specific legacy:',
  difficulty: 'Boss', timerSeconds: 15,
  pairs: [
    ['Bezalel son of Uri son of Hur', 'Chief artisan filled with wisdom, understanding, and knowledge to fashion tabernacle — Exodus 35:30-35', 'Exodus 35:30'],
    ['Aholiab son of Ahisamach', 'Danite craftsman appointed companion to Bezalel to teach and embroider fine linen — Exodus 35:34-35', 'Exodus 35:34'],
    ['Hiram of Tyre (Huram-abi)', 'Widow\'s son of Naphtali skilled to work in brass who made Jachin and Boaz pillars — 1 Kings 7:13-21', '1 Kings 7:13-14'],
    ['Adoniram son of Abda', 'Superintendent over the tribute and forced levy under David, Solomon, and Rehoboam — 1 Kings 4:6; 12:18', '1 Kings 12:18']
  ]
});

add({
  level: 50, challengeIndex: 2,
  stage: 10, stageTitle: 'Ultimate Bible Match-Up', levelTitle: 'Match-Up Grandmaster',
  mode: 'Grandmaster Final Boss', leftLabel: 'Biblical Person', rightLabel: 'Ultimate Scriptural Distinction & Scripture',
  questionText: 'Grandmaster Trial 2: Connect these high-level New Testament co-workers to their distinct legacy:',
  difficulty: 'Boss', timerSeconds: 15,
  pairs: [
    ['Tertius of Rome', 'Christian amanuensis who wrote down Paul\'s epistle to the Romans sending own greeting — Romans 16:22', 'Romans 16:22'],
    ['Onesiphorus of Ephesus', 'Loyal friend who was not ashamed of Paul\'s chain and often refreshed him in Rome — 2 Timothy 1:16-18', '2 Timothy 1:16'],
    ['Aristarchus of Thessalonica', 'Macedonian travel companion seized in Ephesus riot and fellow prisoner in Rome — Acts 19:29; Colossians 4:10', 'Colossians 4:10'],
    ['Epaphras of Colossae', 'Faithful minister and fellow prisoner who wrestled fervently in prayers for his flock — Colossians 4:12; Philemon 1:23', 'Colossians 4:12']
  ]
});

add({
  level: 50, challengeIndex: 3,
  stage: 10, stageTitle: 'Ultimate Bible Match-Up', levelTitle: 'Match-Up Grandmaster',
  mode: 'Grandmaster Final Boss', leftLabel: 'Biblical Person', rightLabel: 'Ultimate Scriptural Distinction & Scripture',
  questionText: 'Grandmaster Trial 3: Connect these courageous women to their definitive biblical moment:',
  difficulty: 'Boss', timerSeconds: 15,
  pairs: [
    ['Shiphrah and Puah', 'Hebrew midwives who defied Pharaoh\'s murderous decree fearing God above king — Exodus 1:15-21', 'Exodus 1:17'],
    ['Huldah wife of Shallum', 'Prophetess residing in college in Jerusalem who authenticated the discovered Book of the Law — 2 Kings 22:14-20', '2 Kings 22:14'],
    ['Jael wife of Heber the Kenite', 'Woman praised above women in tents who felled Sisera with tent pin and hammer — Judges 4:21; 5:24', 'Judges 5:24'],
    ['Rizpah daughter of Aiah', 'Mother who kept sackcloth vigil over hanging bodies of Saul\'s sons from barley harvest to rain — 2 Samuel 21:8-10', '2 Samuel 21:10']
  ]
});

add({
  level: 50, challengeIndex: 4,
  stage: 10, stageTitle: 'Ultimate Bible Match-Up', levelTitle: 'Match-Up Grandmaster',
  mode: 'Grandmaster Final Boss', leftLabel: 'Biblical Person', rightLabel: 'Ultimate Scriptural Distinction & Scripture',
  questionText: 'Grandmaster Trial 4: Match these pivotal prophetic milestones to their exact biblical chapter:',
  difficulty: 'Boss', timerSeconds: 15,
  pairs: [
    ['Jeremiah\'s 70-Year Captivity Prophecy', 'Foretelling Babylon\'s dominion and return of remnant to Jerusalem — Jeremiah 25:11-12; 29:10', 'Jeremiah 25:11'],
    ['Daniel\'s Seventy Weeks Prophecy', 'Seventy weeks determined upon holy city to finish transgression and make reconciliation — Daniel 9:24-27', 'Daniel 9:24'],
    ['Ezekiel\'s Vision of the Temple Waters', 'Waters issuing from under threshold of house becoming river that could not be passed — Ezekiel 47:1-9', 'Ezekiel 47:5'],
    ['Zechariah\'s Thirty Pieces of Silver', 'Goodly price priced of them cast unto potter in house of the LORD — Zechariah 11:12-13; Matthew 27:9-10', 'Zechariah 11:12-13']
  ]
});

add({
  level: 50, challengeIndex: 5,
  stage: 10, stageTitle: 'Ultimate Bible Match-Up', levelTitle: 'Match-Up Grandmaster',
  mode: 'Grandmaster Final Boss', leftLabel: 'Biblical Person', rightLabel: 'Ultimate Scriptural Distinction & Scripture',
  questionText: 'Ultimate Grandmaster Final Trial: Match these five final master connections:',
  difficulty: 'Boss', timerSeconds: 15,
  pairs: [
    ['Melchizedek King of Salem', 'Priest of Most High God who brought bread and wine and received tithes from Abraham — Genesis 14:18-20', 'Genesis 14:18'],
    ['Ebed-Melech the Ethiopian', 'Palace eunuch whose faith saved him when Babylon took Jerusalem because he trusted God — Jeremiah 38:7-13; 39:15-18', 'Jeremiah 39:18'],
    ['Benaiah son of Jehoiada', 'Mighty priest\'s son who slew lion in pit in snowy day and two lionlike men of Moab — 2 Samuel 23:20', '2 Samuel 23:20'],
    ['Baruch son of Neriah', 'Faithful scribe given personal promise from God that his life would be prize in all places — Jeremiah 45:1-5', 'Jeremiah 45:5']
  ]
});

const tsCode = `// Bible Match-Up — Stages 7–10 (Levels 31–50, 100 Matching Puzzles)
// Exactly 4 pairs per puzzle, each with verified Scripture reference.
import { RawMatchUpPuzzle } from './matchUpStages1to3';

export const MATCH_UP_STAGES_7_TO_10: RawMatchUpPuzzle[] = ${JSON.stringify(puzzles, null, 2)};
`;

fs.writeFileSync('scripts/matchUpStages7to10.ts', tsCode, 'utf8');
console.log(`Generated ${puzzles.length} puzzles for Stages 7-10.`);
