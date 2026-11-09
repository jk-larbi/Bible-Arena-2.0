export type MatchUpMode = 'Character & Action' | 'Object & Purpose' | 'Person & Place' | 'Person & Relationship' | 'Event & Outcome' | 'Prophet & Assignment' | 'Book & Content';

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
{left:'The covenant at Mizpah',right:'Jacob and Laban set up a witness heap and pillar',ref:'Genesis 31:43- " '},
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
];

export function getMatchUpChallenge(seed: number): MatchUpSet {
  const set = MATCH_UP_BANK[seed % MATCH_UP_BANK.length];
  const offset = (Math.floor(seed / MATCH_UP_BANK.length) * 4) % set.pairs.length;
  const selected = Array.from({length:4}, (_,i) => set.pairs[(offset+i)%set.pairs.length]);
  return { ...set, pairs: selected };
}
