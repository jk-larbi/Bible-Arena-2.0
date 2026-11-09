import fs from 'fs';
import path from 'path';

export interface QuestionEntry {
  level: number;
  index: number;
  text: string;
  answer: string;
  distractors: [string, string, string];
  reference: string;
  explanation: string;
  clues?: [string, string, string];
}

export const STAGES = [
  { stage: 1, title: 'The Patriarchs & The Early World', category: 'Patriarchs' },
  { stage: 2, title: 'Exodus, Wilderness & The Law', category: 'Exodus & Law' },
  { stage: 3, title: 'Conquest, Deliverers & Judges', category: 'Judges & Deliverers' },
  { stage: 4, title: 'The United Kingdom & Early Kings', category: 'Judges & Kingdom' },
  { stage: 5, title: 'Divided Kingdom & Elijah/Elisha', category: 'Prophets' },
  { stage: 6, title: 'Prophets of Warning & Promise', category: 'Prophets' },
  { stage: 7, title: 'Exile, Return & Reconstruction', category: 'Exile & Return' },
  { stage: 8, title: 'Gospels — The Messiah & Disciples', category: 'Gospels' },
  { stage: 9, title: 'Acts & The Early Church', category: 'Acts & Epistles' },
  { stage: 10, title: 'Epistles, Hall of Faith & Revelation', category: 'Acts & Epistles' },
];

export const LEVEL_DEFS: Record<number, { theme: string; mechanic: string; timer: number; difficulty: string }> = {
  // Stage 1
  1: { theme: 'Early World Pioneers', mechanic: 'firsts-and-origins', timer: 30, difficulty: 'beginner' },
  2: { theme: 'Abraham & The Covenant', mechanic: 'progressive-clues', timer: 30, difficulty: 'beginner' },
  3: { theme: 'Isaac, Jacob & Esau', mechanic: 'identity-by-deed', timer: 30, difficulty: 'beginner' },
  4: { theme: 'Joseph & The Sons of Israel', mechanic: 'family-connections', timer: 30, difficulty: 'beginner' },
  5: { theme: 'Patriarchal Stage Boss', mechanic: 'boss-quick-discernment', timer: 25, difficulty: 'beginner' },

  // Stage 2
  6: { theme: 'Moses & Deliverance Calling', mechanic: 'progressive-clues', timer: 30, difficulty: 'beginner' },
  7: { theme: 'Plagues & Red Sea Deliverers', mechanic: 'miracle-witnesses', timer: 30, difficulty: 'beginner' },
  8: { theme: 'Tabernacle Builders & High Priests', mechanic: 'sacred-roles', timer: 30, difficulty: 'beginner' },
  9: { theme: 'Spies & Wilderness Leaders', mechanic: 'court-fidelity', timer: 30, difficulty: 'beginner' },
  10: { theme: 'Wilderness Stage Boss', mechanic: 'boss-quick-discernment', timer: 25, difficulty: 'beginner' },

  // Stage 3
  11: { theme: 'Joshua & Crossing Jordan', mechanic: 'battle-of-faith', timer: 30, difficulty: 'easy' },
  12: { theme: 'Early Judges & Deliverers', mechanic: 'who-am-i-deliverer', timer: 30, difficulty: 'easy' },
  13: { theme: 'Deborah, Barak & Jael', mechanic: 'progressive-clues', timer: 30, difficulty: 'easy' },
  14: { theme: 'Gideon, Jephthah & Samson', mechanic: 'pivotal-vows', timer: 30, difficulty: 'easy' },
  15: { theme: 'Ruth & Kinsman-Redeemer Boss', mechanic: 'boss-family-redeemer', timer: 25, difficulty: 'easy' },

  // Stage 4
  16: { theme: 'Samuel & Prophet Commission', mechanic: 'prophet-commission', timer: 30, difficulty: 'easy' },
  17: { theme: 'Saul, Israel’s First King', mechanic: 'tragic-decisions', timer: 30, difficulty: 'easy' },
  18: { theme: 'David the Fugitive & King', mechanic: 'progressive-clues', timer: 30, difficulty: 'easy' },
  19: { theme: 'Solomon’s Wisdom & Temple', mechanic: 'wisdom-and-splendor', timer: 30, difficulty: 'easy' },
  20: { theme: 'United Monarchy Stage Boss', mechanic: 'boss-quick-discernment', timer: 25, difficulty: 'easy' },

  // Stage 5
  21: { theme: 'Kings of Judah & Israel', mechanic: 'kings-evaluation', timer: 30, difficulty: 'intermediate' },
  22: { theme: 'Elijah & Carmel Prophets', mechanic: 'progressive-clues', timer: 30, difficulty: 'intermediate' },
  23: { theme: 'Elisha’s Double Portion', mechanic: 'miracles-and-witnesses', timer: 30, difficulty: 'intermediate' },
  24: { theme: 'Queens, Conspirators & Priests', mechanic: 'royal-alliances', timer: 30, difficulty: 'intermediate' },
  25: { theme: 'Divided Monarchy Stage Boss', mechanic: 'boss-quick-discernment', timer: 25, difficulty: 'intermediate' },

  // Stage 6
  26: { theme: 'Prophets of Warning', mechanic: 'prophetic-calling', timer: 30, difficulty: 'intermediate' },
  27: { theme: 'Isaiah & Messianic Signs', mechanic: 'prophetic-vision', timer: 30, difficulty: 'intermediate' },
  28: { theme: 'Jeremiah & Weeping Prophet', mechanic: 'progressive-clues', timer: 30, difficulty: 'intermediate' },
  29: { theme: 'Jonah, Nahum & Habakkuk', mechanic: 'foreign-missions', timer: 30, difficulty: 'intermediate' },
  30: { theme: 'Prophetic Stage Boss', mechanic: 'boss-quick-discernment', timer: 25, difficulty: 'intermediate' },

  // Stage 7
  31: { theme: 'Daniel in Babylon Court', mechanic: 'court-fidelity', timer: 25, difficulty: 'advanced' },
  32: { theme: 'Ezekiel & Kebar River Exiles', mechanic: 'visionary-signs', timer: 25, difficulty: 'advanced' },
  33: { theme: 'Esther & Mordecai in Susa', mechanic: 'progressive-clues', timer: 25, difficulty: 'advanced' },
  34: { theme: 'Ezra, Nehemiah & Rebuilders', mechanic: 'restoration-leaders', timer: 25, difficulty: 'advanced' },
  35: { theme: 'Exile & Return Stage Boss', mechanic: 'boss-exile-speed', timer: 20, difficulty: 'advanced' },

  // Stage 8
  36: { theme: 'Messianic Heralds & Nativity', mechanic: 'messianic-heralds', timer: 25, difficulty: 'advanced' },
  37: { theme: 'The Twelve Apostles', mechanic: 'apostolic-identity', timer: 25, difficulty: 'advanced' },
  38: { theme: 'Lives Transformed by Christ', mechanic: 'progressive-clues', timer: 25, difficulty: 'advanced' },
  39: { theme: 'Roman Inquirers & Rulers', mechanic: 'outside-inquirers', timer: 25, difficulty: 'advanced' },
  40: { theme: 'Passion & Resurrection Witnesses Boss', mechanic: 'boss-resurrection-witnesses', timer: 20, difficulty: 'advanced' },

  // Stage 9
  41: { theme: 'Pentecost & Jerusalem Deacons', mechanic: 'deacons-and-martyrs', timer: 25, difficulty: 'expert' },
  42: { theme: 'Peter & Gentile Breakthrough', mechanic: 'progressive-clues', timer: 25, difficulty: 'expert' },
  43: { theme: 'Paul’s Missionary Companions', mechanic: 'missionary-partners', timer: 25, difficulty: 'expert' },
  44: { theme: 'Churches, Converts & Adversaries', mechanic: 'provincial-encounters', timer: 25, difficulty: 'expert' },
  45: { theme: 'Early Church Stage Boss', mechanic: 'boss-early-church', timer: 20, difficulty: 'expert' },

  // Stage 10
  46: { theme: 'Pastoral Coworkers & Co-laborers', mechanic: 'epistle-coworkers', timer: 20, difficulty: 'expert' },
  47: { theme: 'Heroes of Faith (Hebrews 11)', mechanic: 'progressive-clues', timer: 20, difficulty: 'expert' },
  48: { theme: 'Opponents & Warning Figures', mechanic: 'unfaithful-warnings', timer: 20, difficulty: 'expert' },
  49: { theme: 'Visionaries & Heavenly Messengers', mechanic: 'heavenly-messengers', timer: 20, difficulty: 'expert' },
  50: { theme: 'Grand Character Quest Final Boss', mechanic: 'ultimate-character-boss', timer: 15, difficulty: 'master' },
};
