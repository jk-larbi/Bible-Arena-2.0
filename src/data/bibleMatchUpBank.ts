export type MatchUpMode = 'Character & Action' | 'Object & Purpose' | 'Person & Place' | 'Person & Relationship' | 'Event & Outcome' | 'Prophet & Assignment' | 'Book & Content' | 'Person & Spouse' | 'Person & Mother' | 'Miracle & Detail' | 'Bible Book & Testament' | 'Event & Sequence';

export interface MatchUpPair { left: string; right: string; ref: string; }
export interface MatchUpSet { mode: MatchUpMode; leftLabel: string; rightLabel: string; pairs: MatchUpPair[]; }

export const MATCH_UP_BANK: MatchUpSet[] = [
{ mode:'Character & Action', leftLabel:'Biblical person', rightLabel:'Scriptural detail', pairs:[
{left:'Ehud',right:'Killed Eglon, king of Moab',ref:'Judges 3:15-22'},
{left:'Huldah',right:'Was consulted after the Book of the Law was found',ref:'2 Kings 22:14-20'},
{left:'Ebed-melech',right:'Helped rescue Jeremiah from the cistern',ref:'Jeremiah 38:7-13'},
{left:'Shiphrah',right:'Refused Pharaoh’s command to kill Hebrew baby boys',ref:'Exodus 1:15-21'},
{left:'Barzillai',right:'Supplied David’s company during Absalom’s rebellion',ref:'2 Samuel 17:27-29'},
{left:'Bezalel',right:'Led skilled work on the tabernacle furnishings',ref:'Exodus 31:1-5'},
{left:'Jael',right:'Killed Sisera with a tent peg',ref:'Judges 4:17-22'},
{left:'Micaiah son of Imlah',right:'Prophesied against Ahab’s proposed battle',ref:'1 Kings 22:8-28'},
{left:'Benaiah',right:'Struck down a lion in a pit on a snowy day',ref:'2 Samuel 23:20'},
{left:'Onesiphorus',right:'Diligently searched for Paul in Rome and refreshed him',ref:'2 Timothy 1:16-18'},
{left:'Agabus',right:'Foretold a great famine and later Paul’s imprisonment',ref:'Acts 11:27-28; 21:10-11'},
{left:'Tertius',right:'Wrote down Paul’s letter to the Romans as its scribe',ref:'Romans 16:22'}
]},
{ mode:'Object & Purpose', leftLabel:'Biblical object', rightLabel:'Use or significance', pairs:[
{left:'Urim and Thummim',right:'Used by the high priest in seeking divine decisions',ref:'Exodus 28:30; Numbers 27:21'},
{left:'Gomer of manna',right:'A measure of manna was kept as a testimony',ref:'Exodus 16:32-34'},
{left:'Aaron’s rod',right:'Budded as a sign confirming the chosen priesthood',ref:'Numbers 17:1-10'},
{left:'The bronze serpent',right:'Those who looked at it after being bitten lived',ref:'Numbers 21:8-9'},
{left:'The ephod',right:'Priestly garment associated with the breastpiece',ref:'Exodus 28:6-30'},
{left:'The sling',right:'David used it against Goliath',ref:'1 Samuel 17:40-50'},
{left:'The jar of oil',right:'The widow’s oil multiplied to pay her debts',ref:'2 Kings 4:1-7'},
{left:'The red cord',right:'Marked Rahab’s house for the spies’ promised protection',ref:'Joshua 2:17-21'},
{left:'The alabaster flask',right:'A woman poured costly ointment on Jesus',ref:'Mark 14:3-9'},
{left:'The handkerchiefs and aprons',right:'Were carried from Paul and associated with healings',ref:'Acts 19:11-12'},
{left:'The writing tablet',right:'Zechariah used it to write that the child’s name was John',ref:'Luke 1:63'},
{left:'The scroll with seven seals',right:'Was opened by the Lamb in John’s vision',ref:'Revelation 5:1-9'}
]},
{ mode:'Person & Place', leftLabel:'Biblical person', rightLabel:'Associated place', pairs:[
{left:'Elijah',right:'Mount Carmel',ref:'1 Kings 18:19-40'},
{left:'Moses',right:'Mount Nebo',ref:'Deuteronomy 34:1-5'},
{left:'Gideon',right:'Ophrah',ref:'Judges 6:11-24'},
{left:'Lydia',right:'Philippi',ref:'Acts 16:12-15'},
{left:'Paul',right:'The island of Malta',ref:'Acts 28:1-10'},
{left:'John the Baptist',right:'The wilderness of Judea',ref:'Matthew 3:1-6'},
{left:'Nehemiah',right:'Shushan (Susa)',ref:'Nehemiah 1:1-2'},
{left:'Philip',right:'The road from Jerusalem to Gaza',ref:'Acts 8:26-39'},
{left:'Mary and Martha',right:'Bethany',ref:'John 11:1-3'},
{left:'Jacob',right:'Peniel (Penuel)',ref:'Genesis 32:24-30'},
{left:'Naaman',right:'The Jordan River',ref:'2 Kings 5:9-14'},
{left:'Peter',right:'Joppa',ref:'Acts 9:36-43'}
]},
{ mode:'Person & Relationship', leftLabel:'Biblical person', rightLabel:'Family or relationship', pairs:[
{left:'Jonathan',right:'Son of Saul and close friend of David',ref:'1 Samuel 18:1-4'},
{left:'Miriam',right:'Sister of Moses and Aaron',ref:'Exodus 15:20; Numbers 26:59'},
{left:'Abigail',right:'Wife of Nabal who later became David’s wife',ref:'1 Samuel 25:3, 39-42'},
{left:'Lois',right:'Grandmother of Timothy',ref:'2 Timothy 1:5'},
{left:'Priscilla',right:'Wife and ministry companion of Aquila',ref:'Acts 18:2, 18-26'},
{left:'Jochebed',right:'Mother of Moses, Aaron and Miriam',ref:'Exodus 6:20'},
{left:'Herodias',right:'Wife of Herod Antipas and mother of Salome',ref:'Mark 6:17-28'},
{left:'Elizabeth',right:'Mother of John the Baptist',ref:'Luke 1:5-25, 57-60'},
{left:'Jehoiada',right:'Priest who protected the boy Joash',ref:'2 Kings 11:1-12'},
{left:'Zebedee',right:'Father of James and John',ref:'Matthew 4:21'},
{left:'Philemon',right:'Owner of Onesimus, whom Paul appealed for',ref:'Philemon 1:10-16'},
{left:'Naomi',right:'Mother-in-law of Ruth',ref:'Ruth 1:3-5, 16-18'}
]},
{ mode:'Event & Outcome', leftLabel:'Biblical event', rightLabel:'Outcome', pairs:[
{left:'The walls of Jericho fell',right:'Israel took the city after marching and shouting',ref:'Joshua 6:12-21'},
{left:'The contest on Mount Carmel',right:'The people declared that the LORD is God',ref:'1 Kings 18:36-39'},
{left:'Peter’s prison escape',right:'An angel led him past the guards and out of the gate',ref:'Acts 12:5-11'},
{left:'The covenant at Mizpah',right:'Jacob and Laban set up a witness heap and pillar',ref:'Genesis 31:43-54'},
{left:'The dedication of the temple',right:'Fire came down and the glory of the LORD filled it',ref:'2 Chronicles 7:1-3'},
{left:'The feeding of the five thousand',right:'Five loaves and two fish fed the crowd, with leftovers',ref:'Mark 6:34-44'},
{left:'The fall of Dagon before the ark',right:'Dagon was found fallen before the ark twice',ref:'1 Samuel 5:1-5'},
{left:'The handwriting at Belshazzar’s feast',right:'Daniel interpreted the kingdom’s coming judgment',ref:'Daniel 5:1-31'},
{left:'The day of Pentecost',right:'The disciples spoke as the Spirit enabled them',ref:'Acts 2:1-12'},
{left:'The healing of Naaman',right:'His leprosy was cleansed after washing in the Jordan',ref:'2 Kings 5:10-14'},
{left:'The rebuilding under Nehemiah',right:'Jerusalem’s wall was completed despite opposition',ref:'Nehemiah 6:15-16'},
{left:'The Philippian jail earthquake',right:'The jailer and his household believed and were baptized',ref:'Acts 16:25-34'}
]},
{ mode:'Prophet & Assignment', leftLabel:'Prophet or messenger', rightLabel:'Message or assignment', pairs:[
{left:'Nathan',right:'Confronted David through the parable of the ewe lamb',ref:'2 Samuel 12:1-7'},
{left:'Jonah',right:'Was sent to warn Nineveh',ref:'Jonah 1:1-2; 3:1-5'},
{left:'Haggai',right:'Urged the returned exiles to rebuild the temple',ref:'Haggai 1:1-8'},
{left:'Micaiah son of Imlah',right:'Warned Ahab of defeat at Ramoth-gilead',ref:'1 Kings 22:17-28'},
{left:'Elisha',right:'Instructed Naaman to wash seven times in the Jordan',ref:'2 Kings 5:8-14'},
{left:'Amos',right:'Pronounced judgment on Israel for injustice and oppression',ref:'Amos 2:6-8; 5:21-24'},
{left:'Huldah',right:'Explained the judgment and mercy in the discovered law book',ref:'2 Kings 22:14-20'},
{left:'Agabus',right:'Used Paul’s belt to signify his coming arrest',ref:'Acts 21:10-11'},
{left:'Isaiah',right:'Was sent to tell Hezekiah to set his house in order',ref:'2 Kings 20:1-6'},
{left:'Samuel',right:'Anointed David after God rejected Saul as king',ref:'1 Samuel 16:1-13'},
{left:'Elijah',right:'Announced drought to Ahab',ref:'1 Kings 17:1'},
{left:'Zechariah son of Jehoiada',right:'Rebuked the people for forsaking the LORD',ref:'2 Chronicles 24:20-22'}
]},
{ mode:'Book & Content', leftLabel:'Bible book', rightLabel:'Distinctive content', pairs:[
{left:'Philemon',right:'Paul’s appeal concerning Onesimus',ref:'Philemon 1:8-21'},
{left:'Ruth',right:'A Moabite widow’s loyalty and family redemption',ref:'Ruth 1:16-17; 4:13-17'},
{left:'Habakkuk',right:'A dialogue about injustice and living by faith',ref:'Habakkuk 1:2-4; 2:4'},
{left:'Esther',right:'A Jewish queen helps avert a plot against her people',ref:'Esther 4:13-16; 7:3-6'},
{left:'Jude',right:'A warning to contend for the faith against false teachers',ref:'Jude 1:3-4'},
{left:'Ecclesiastes',right:'Reflections on life’s vanity and fearing God',ref:'Ecclesiastes 1:2; 12:13'},
{left:'Lamentations',right:'Poetic grief over Jerusalem’s destruction',ref:'Lamentations 1:1; 3:22-24'},
{left:'Nahum',right:'A prophecy announcing Nineveh’s downfall',ref:'Nahum 1:1; 3:1-7'},
{left:'2 Timothy',right:'Paul’s final charge to Timothy and words about finishing his course',ref:'2 Timothy 4:6-8'},
{left:'Hebrews',right:'Presents Christ’s superiority and priesthood',ref:'Hebrews 1:1-4; 4:14-16'},
{left:'Acts',right:'Records the early church and spread of the gospel',ref:'Acts 1:8; 2:1-47'},
{left:'Leviticus',right:'Details offerings, priestly duties and holiness laws',ref:'Leviticus 1:1-4; 19:2'}
]}
,
{ mode:'Person & Spouse', leftLabel:'Biblical person', rightLabel:'Spouse', pairs:[
{left:'Moses',right:'Zipporah',ref:'Exodus 2:21'},
{left:'Ananias',right:'Sapphira',ref:'Acts 5:1-2'},
{left:'Boaz',right:'Ruth',ref:'Ruth 4:13'},
{left:'Ahasuerus',right:'Esther',ref:'Esther 2:17'},
{left:'Elkanah',right:'Hannah',ref:'1 Samuel 1:1-2'},
{left:'Adam',right:'Eve',ref:'Genesis 2:21-25'},
{left:'Joseph',right:'Mary',ref:'Matthew 1:18-25'},
{left:'Aquila',right:'Priscilla',ref:'Acts 18:2'},
{left:'Hosea',right:'Gomer',ref:'Hosea 1:2-3'},
{left:'Abraham',right:'Sarah',ref:'Genesis 17:15-19'},
{left:'Isaac',right:'Rebekah',ref:'Genesis 24:67'},
{left:'Jacob',right:'Rachel',ref:'Genesis 29:18-30'}
]},
{ mode:'Person & Mother', leftLabel:'Biblical person', rightLabel:'Mother', pairs:[
{left:'Samuel',right:'Hannah',ref:'1 Samuel 1:20'},
{left:'Moses',right:'Jochebed',ref:'Exodus 6:20'},
{left:'Solomon',right:'Bathsheba',ref:'2 Samuel 12:24'},
{left:'John the Baptist',right:'Elizabeth',ref:'Luke 1:57-60'},
{left:'Jesus',right:'Mary',ref:'Matthew 1:18-25'},
{left:'Jacob and Esau',right:'Rebekah',ref:'Genesis 25:24-26'},
{left:'Joseph and Benjamin',right:'Rachel',ref:'Genesis 30:22-24; 35:16-18'},
{left:'Ishmael',right:'Hagar',ref:'Genesis 16:15'},
{left:'Obed',right:'Ruth',ref:'Ruth 4:13-17'},
{left:'Abel',right:'Eve',ref:'Genesis 4:1-2'},
{left:'Isaac',right:'Sarah',ref:'Genesis 21:1-3'},
{left:'John Mark',right:'Mary of Jerusalem',ref:'Acts 12:12'}
]},
{ mode:'Miracle & Detail', leftLabel:'Miracle or healing', rightLabel:'Person or detail', pairs:[
{left:'Jesus healed the servant’s ear',right:'Malchus',ref:'Luke 22:50-51; John 18:10'},
{left:'Peter raised a woman at Joppa',right:'Tabitha (Dorcas)',ref:'Acts 9:36-41'},
{left:'Jesus healed a feverish relative',right:'Peter’s mother-in-law',ref:'Mark 1:29-31'},
{left:'Paul restored a young man after a fall',right:'Eutychus',ref:'Acts 20:9-12'},
{left:'Jesus healed a blind man near Jericho',right:'Bartimaeus',ref:'Mark 10:46-52'},
{left:'Two apostles healed a lame man at the temple gate',right:'Peter and John',ref:'Acts 3:1-10'},
{left:'Jesus fed a large crowd',right:'Five loaves and two fishes',ref:'John 6:5-13'},
{left:'One of ten healed lepers returned to give thanks',right:'A Samaritan',ref:'Luke 17:11-19'},
{left:'Jesus walked across the water toward the disciples',right:'The Sea of Galilee',ref:'Matthew 14:24-33'},
{left:'Jesus healed a man who had been unable to walk for 38 years',right:'The pool of Bethesda',ref:'John 5:2-9'},
{left:'Three Hebrews survived the fiery furnace',right:'Shadrach, Meshach and Abednego',ref:'Daniel 3:19-27'},
{left:'An angel shut the lions’ mouths',right:'Daniel',ref:'Daniel 6:16-23'}
]},
{ mode:'Bible Book & Testament', leftLabel:'Bible book', rightLabel:'Testament and section', pairs:[
{left:'Genesis',right:'Old Testament · Law',ref:'Genesis 1:1'},
{left:'Psalms',right:'Old Testament · Wisdom and Poetry',ref:'Psalm 1:1'},
{left:'Isaiah',right:'Old Testament · Major Prophets',ref:'Isaiah 1:1'},
{left:'Malachi',right:'Old Testament · Minor Prophets',ref:'Malachi 1:1'},
{left:'Matthew',right:'New Testament · Gospel',ref:'Matthew 1:1'},
{left:'Acts',right:'New Testament · History',ref:'Acts 1:1'},
{left:'Romans',right:'New Testament · Pauline Epistle',ref:'Romans 1:1'},
{left:'Hebrews',right:'New Testament · General Epistle',ref:'Hebrews 1:1'},
{left:'Revelation',right:'New Testament · Prophecy',ref:'Revelation 1:1'},
{left:'Ruth',right:'Old Testament · History',ref:'Ruth 1:1'},
{left:'Proverbs',right:'Old Testament · Wisdom',ref:'Proverbs 1:1'},
{left:'Jude',right:'New Testament · General Epistle',ref:'Jude 1:1'}
]},
{ mode:'Event & Sequence', leftLabel:'Bible event', rightLabel:'What happened next', pairs:[
{left:'Noah entered the ark',right:'The floodwaters came upon the earth',ref:'Genesis 7:7-12'},
{left:'Abraham was told to offer Isaac',right:'God provided a ram as a substitute',ref:'Genesis 22:1-13'},
{left:'Moses led Israel to the Red Sea',right:'The sea divided and Israel crossed on dry ground',ref:'Exodus 14:10-22'},
{left:'Israel crossed the Jordan',right:'Memorial stones were set up at Gilgal',ref:'Joshua 3:14-17; 4:1-9'},
{left:'Gideon’s army surrounded the camp',right:'They blew trumpets and broke their pitchers',ref:'Judges 7:19-22'},
{left:'David was anointed by Samuel',right:'The Spirit of the LORD came upon David',ref:'1 Samuel 16:12-13'},
{left:'Elijah challenged Baal’s prophets',right:'Fire from the LORD consumed the offering',ref:'1 Kings 18:30-39'},
{left:'Jonah preached in Nineveh',right:'The people believed God and proclaimed a fast',ref:'Jonah 3:4-6'},
{left:'Daniel interpreted the writing on the wall',right:'Belshazzar was slain that night',ref:'Daniel 5:25-31'},
{left:'Jesus was crucified',right:'He was buried in a new tomb',ref:'John 19:16-42'},
{left:'The women found the tomb open',right:'They were told Jesus had risen',ref:'Luke 24:1-8'},
{left:'The Holy Spirit came at Pentecost',right:'Peter preached and about three thousand were added',ref:'Acts 2:1-4, 37-41'}
]}];

export function getMatchUpChallenge(seed: number): MatchUpSet {
  const modeIndex = ((seed % MATCH_UP_BANK.length) + MATCH_UP_BANK.length) % MATCH_UP_BANK.length;
  const set = MATCH_UP_BANK[modeIndex];
  const chooseCount = 4;
  const combinations: number[][] = [];
  const build = (start: number, chosen: number[]) => {
    if (chosen.length === chooseCount) { combinations.push([...chosen]); return; }
    for (let i = start; i <= set.pairs.length - (chooseCount - chosen.length); i++) {
      chosen.push(i); build(i + 1, chosen); chosen.pop();
    }
  };
  build(0, []);
  const roundIndex = Math.floor(Math.abs(seed) / MATCH_UP_BANK.length) % combinations.length;
  const indexes = combinations[roundIndex];
  return { ...set, pairs: indexes.map((index) => set.pairs[index]) };
}
