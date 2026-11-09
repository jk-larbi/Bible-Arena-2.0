/**
 * Scripture Challenge production roadmap.
 * This metadata is intentionally separate from the shared stage labels used by
 * the other 18 games. Each level has a distinct theme and mechanic.
 */
export interface ScriptureLevelSpec {
  level: number;
  stage: number;
  name: string;
  focus: string;
  mechanic: string;
  rule: string;
}

export const SCRIPTURE_CHALLENGE_LEVELS: ScriptureLevelSpec[] = [
  { level: 1, stage: 1, name: 'The Knowledge Gate', focus: 'Mixed Bible knowledge', mechanic: 'final-detail', rule: 'Questions 1–3 cover mixed Bible knowledge; question 4 changes the clue style; question 5 tests a difficult textual detail.' },
  { level: 2, stage: 1, name: 'Who Am I?', focus: 'Bible character identification', mechanic: 'progressive-clues', rule: 'Identify the character from up to three clues; earlier answers earn more points.' },
  { level: 3, stage: 1, name: 'The Name Trap', focus: 'Similar biblical names', mechanic: 'name-disambiguation', rule: 'Distinguish people with similar names, roles, families or historical settings.' },
  { level: 4, stage: 1, name: 'Family Connections', focus: 'Biblical family relationships', mechanic: 'relationship-check', rule: 'Identify exact parent, child, sibling, spouse and extended-family relationships.' },
  { level: 5, stage: 1, name: 'Odd One Out', focus: 'Shared biblical connections', mechanic: 'odd-one-out', rule: 'Find the item that does not share the stated biblical connection; explain the other three.' },
  { level: 6, stage: 2, name: 'Before and After', focus: 'Biblical chronology', mechanic: 'event-order', rule: 'Choose the only correctly ordered sequence of events.' },
  { level: 7, stage: 2, name: 'The Patriarch Files', focus: 'Abraham, Isaac, Jacob and Joseph', mechanic: 'patriarch-casefile', rule: 'Answer detailed questions about the patriarchs, their households and their journeys.' },
  { level: 8, stage: 2, name: "Egypt's Secrets", focus: 'Israel in Egypt and the Exodus', mechanic: 'exodus-evidence', rule: 'Identify people, objects, plagues and events from the Egyptian period.' },
  { level: 9, stage: 2, name: 'Wilderness Survival', focus: 'Moses, Aaron and Israel in the wilderness', mechanic: 'wilderness-detail', rule: 'Use precise details about leaders, provision, laws and wilderness events.' },
  { level: 10, stage: 2, name: 'The Patriarch Boss Round', focus: 'Patriarchs and Exodus synthesis', mechanic: 'rising-difficulty', rule: 'Each correct answer advances to a harder question; the fifth is the boss question.' },
  { level: 11, stage: 3, name: "The Judges' Arena", focus: 'Judges of Israel', mechanic: 'judge-identification', rule: 'Identify judges from their actions, tribes, opponents and unusual details.' },
  { level: 12, stage: 3, name: 'Kings of Israel', focus: 'United and divided monarchy', mechanic: 'king-disambiguation', rule: 'Distinguish kings with similar names and identify the correct kingdom and period.' },
  { level: 13, stage: 3, name: 'Throne and Bloodline', focus: 'Royal genealogy and succession', mechanic: 'royal-lineage', rule: 'Trace royal relationships and succession without confusing namesakes.' },
  { level: 14, stage: 3, name: 'Battles and Betrayals', focus: 'Biblical battles and conflicts', mechanic: 'battle-evidence', rule: 'Identify participants, locations, tactics and outcomes from the text.' },
  { level: 15, stage: 3, name: 'The Royal Examination', focus: 'Kings, reigns and decisions', mechanic: 'king-profile', rule: 'Identify a king from combined clues about reign, conduct and historical setting.' },
  { level: 16, stage: 4, name: 'Name That Prophet', focus: 'Biblical prophets', mechanic: 'prophet-identification', rule: 'Identify prophets from their messages, assignments and recorded experiences.' },
  { level: 17, stage: 4, name: "The Prophet's Message", focus: 'Prophetic audiences and context', mechanic: 'message-recipient', rule: 'Match a prophetic message to its intended person, kingdom or situation.' },
  { level: 18, stage: 4, name: 'Strange but Biblical', focus: 'Unusual events and objects', mechanic: 'unusual-detail', rule: 'Recall unusual but explicitly recorded events, signs, objects and instructions.' },
  { level: 19, stage: 4, name: 'The Missing Detail', focus: 'Small details in Bible passages', mechanic: 'precision-recall', rule: 'Choose the exact detail from closely related and plausible alternatives.' },
  { level: 20, stage: 4, name: 'Prophetic Showdown', focus: 'Prophets and prophetic books', mechanic: 'prophet-boss', rule: 'A difficult mixed examination of prophetic people, books, events and context.' },
  { level: 21, stage: 5, name: 'The Birth and Early Years', focus: 'Birth and childhood of Jesus', mechanic: 'gospel-detail', rule: 'Distinguish the people, places and events in the birth and early-life narratives.' },
  { level: 22, stage: 5, name: 'The Ministry Files', focus: 'Jesus’ ministry', mechanic: 'ministry-casefile', rule: 'Identify locations, people, disciples and events from the ministry accounts.' },
  { level: 23, stage: 5, name: 'Miracle Detective', focus: 'Miracles of Jesus', mechanic: 'miracle-identification', rule: 'Identify a miracle from its circumstances, participants and outcome.' },
  { level: 24, stage: 5, name: 'Who Said It?', focus: 'Statements in the Gospel accounts', mechanic: 'speaker-and-audience', rule: 'Identify who spoke a statement or who was being addressed, using its context.' },
  { level: 25, stage: 5, name: 'The Gospel Comparison', focus: 'Matthew, Mark, Luke and John', mechanic: 'gospel-comparison', rule: 'Identify which Gospel records a detail and avoid combining separate accounts.' },
  { level: 26, stage: 6, name: 'Parable Decoder', focus: 'Parables of Jesus', mechanic: 'parable-clue', rule: 'Identify a parable from its characters, sequence, distinctive detail or lesson.' },
  { level: 27, stage: 6, name: 'Complete the Teaching', focus: 'Teachings of Jesus', mechanic: 'teaching-completion', rule: 'Complete a short teaching using the selected Bible translation consistently.' },
  { level: 28, stage: 6, name: "The Disciples' Test", focus: 'The Twelve and other followers', mechanic: 'disciple-identity', rule: 'Distinguish disciples by their actions, relationships, questions and experiences.' },
  { level: 29, stage: 6, name: 'The Final Week', focus: 'Events of Jesus’ final week', mechanic: 'passion-week-order', rule: 'Reconstruct the sequence of events surrounding the final week.' },
  { level: 30, stage: 6, name: 'The Gospel Boss Round', focus: 'Gospel synthesis', mechanic: 'gospel-boss', rule: 'Five difficult questions combining teachings, miracles, relationships and Gospel details.' },

  { level: 31, stage: 7, name: 'Acts in Motion', focus: 'The early church and the book of Acts', mechanic: 'acts-investigation', rule: 'Trace the early church through precise details about its people, places, speeches and turning points.' },
  { level: 32, stage: 7, name: "Paul's Mission Trail", focus: 'Paul’s journeys and companions', mechanic: 'journey-reconstruction', rule: 'Identify locations, companions, officials and events from Paul’s missionary journeys.' },
  { level: 33, stage: 7, name: 'Letters Under Examination', focus: 'Details from New Testament letters', mechanic: 'epistle-evidence', rule: 'Answer detailed questions about the recipients, people, instructions and references in the New Testament letters.' },
];

export function getScriptureLevelSpec(level: number): ScriptureLevelSpec | undefined {
  return SCRIPTURE_CHALLENGE_LEVELS.find((entry) => entry.level === level);
}
