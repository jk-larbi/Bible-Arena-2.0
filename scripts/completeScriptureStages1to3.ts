// Complete the Scripture — Stages 1–3 (Levels 1–15, 75 Questions)
// All passages verified from the King James Version (KJV)

export interface RawScriptureChallenge {
  level: number;
  challengeIndex: number;
  ref: string;
  verseText: string;
  targetWords: string[];
  mode: 0 | 1 | 2 | 3 | 4 | 5;
  distractors?: string[];
  explanation: string;
  difficulty: string;
  stage: number;
  stageTitle: string;
  levelTitle: string;
  timerSeconds: number;
}

export const SCRIPTURE_STAGES_1_TO_3: RawScriptureChallenge[] = [
  // =========================================================================
  // STAGE 1 — SCRIPTURE FOUNDATIONS (Levels 1–5 · Easy to moderate)
  // =========================================================================

  // Level 1: Famous Scripture (Mode 0: Find the Missing Word)
  {
    level: 1, challengeIndex: 1,
    ref: 'Genesis 1:1',
    verseText: 'In the beginning God created the heaven and the earth.',
    targetWords: ['beginning'],
    mode: 0,
    distractors: ['heavens', 'light', 'firmament'],
    explanation: 'The Bible opens by establishing God as the eternal Creator of all things.',
    difficulty: 'Accessible',
    stage: 1, stageTitle: 'Scripture Foundations', levelTitle: 'Famous Scripture', timerSeconds: 25
  },
  {
    level: 1, challengeIndex: 2,
    ref: 'John 3:16',
    verseText: 'For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.',
    targetWords: ['perish'],
    mode: 0,
    distractors: ['stumble', 'sorrow', 'die'],
    explanation: 'Christ declared the measure of the Father\'s love and the promise of everlasting life to all who believe.',
    difficulty: 'Moderate',
    stage: 1, stageTitle: 'Scripture Foundations', levelTitle: 'Famous Scripture', timerSeconds: 25
  },
  {
    level: 1, challengeIndex: 3,
    ref: 'Psalm 23:1',
    verseText: 'The LORD is my shepherd; I shall not want.',
    targetWords: ['shepherd'],
    mode: 0,
    distractors: ['fortress', 'deliverer', 'shield'],
    explanation: 'David rejoices in the personal pastoral care and faithful provision of the LORD.',
    difficulty: 'Difficult',
    stage: 1, stageTitle: 'Scripture Foundations', levelTitle: 'Famous Scripture', timerSeconds: 25
  },
  {
    level: 1, challengeIndex: 4,
    ref: 'Proverbs 3:5',
    verseText: 'Trust in the LORD with all thine heart; and lean not unto thine own understanding.',
    targetWords: ['understanding'],
    mode: 0,
    distractors: ['counsel', 'strength', 'imagination'],
    explanation: 'Solomon instructs the disciple to place undivided trust in God rather than relying on human wisdom.',
    difficulty: 'Very Difficult',
    stage: 1, stageTitle: 'Scripture Foundations', levelTitle: 'Famous Scripture', timerSeconds: 25
  },
  {
    level: 1, challengeIndex: 5,
    ref: 'Matthew 6:33',
    verseText: 'But seek ye first the kingdom of God, and his righteousness; and all these things shall be added unto you.',
    targetWords: ['righteousness'],
    mode: 0,
    distractors: ['holiness', 'glory', 'wisdom'],
    explanation: 'In the Sermon on the Mount, Jesus commands prioritizing God\'s reign above temporal anxieties.',
    difficulty: 'Mini-boss',
    stage: 1, stageTitle: 'Scripture Foundations', levelTitle: 'Famous Scripture', timerSeconds: 20
  },

  // Level 2: Words of Wisdom (Proverbs & Ecclesiastes)
  {
    level: 2, challengeIndex: 1,
    ref: 'Proverbs 1:7',
    verseText: 'The fear of the LORD is the beginning of knowledge: but fools despise wisdom and instruction.',
    targetWords: ['despise'],
    mode: 0,
    distractors: ['reject', 'forget', 'mock'],
    explanation: 'True knowledge starts with reverent awe of the LORD, whereas folly scorns correction.',
    difficulty: 'Accessible',
    stage: 1, stageTitle: 'Scripture Foundations', levelTitle: 'Words of Wisdom', timerSeconds: 25
  },
  {
    level: 2, challengeIndex: 2,
    ref: 'Proverbs 15:1',
    verseText: 'A soft answer turneth away wrath: but grievous words stir up anger.',
    targetWords: ['soft'],
    mode: 0,
    distractors: ['gentle', 'patient', 'wise'],
    explanation: 'A gentle, humble response diffuses hostility, while harsh words provoke wrath.',
    difficulty: 'Moderate',
    stage: 1, stageTitle: 'Scripture Foundations', levelTitle: 'Words of Wisdom', timerSeconds: 25
  },
  {
    level: 2, challengeIndex: 3,
    ref: 'Ecclesiastes 3:1',
    verseText: 'To every thing there is a season, and a time to every purpose under the heaven:',
    targetWords: ['season'],
    mode: 0,
    distractors: ['portion', 'measure', 'generation'],
    explanation: 'The Preacher observes God\'s sovereign ordering of all appointed times in earthly life.',
    difficulty: 'Difficult',
    stage: 1, stageTitle: 'Scripture Foundations', levelTitle: 'Words of Wisdom', timerSeconds: 25
  },
  {
    level: 2, challengeIndex: 4,
    ref: 'Proverbs 27:17',
    verseText: 'Iron sharpeneth iron; so a man sharpeneth the countenance of his friend.',
    targetWords: ['countenance'],
    mode: 0,
    distractors: ['spirit', 'heart', 'understanding'],
    explanation: 'Christian fellowship and mutual accountability sharpen character and resolve.',
    difficulty: 'Very Difficult',
    stage: 1, stageTitle: 'Scripture Foundations', levelTitle: 'Words of Wisdom', timerSeconds: 25
  },
  {
    level: 2, challengeIndex: 5,
    ref: 'Ecclesiastes 12:13',
    verseText: 'Let us hear the conclusion of the whole matter: Fear God, and keep his commandments: for this is the whole duty of man.',
    targetWords: ['conclusion'],
    mode: 0,
    distractors: ['sum', 'foundation', 'substance'],
    explanation: 'The final conclusion of Solomon\'s quest: reverencing God and obeying His word encompasses man\'s entire calling.',
    difficulty: 'Mini-boss',
    stage: 1, stageTitle: 'Scripture Foundations', levelTitle: 'Words of Wisdom', timerSeconds: 20
  },

  // Level 3: Psalms Challenge (Mode 0)
  {
    level: 3, challengeIndex: 1,
    ref: 'Psalm 46:1',
    verseText: 'God is our refuge and strength, a very present help in trouble.',
    targetWords: ['refuge'],
    mode: 0,
    distractors: ['shield', 'tower', 'salvation'],
    explanation: 'The sons of Korah celebrate the impenetrable security found in God alone.',
    difficulty: 'Accessible',
    stage: 1, stageTitle: 'Scripture Foundations', levelTitle: 'Psalms Challenge', timerSeconds: 25
  },
  {
    level: 3, challengeIndex: 2,
    ref: 'Psalm 119:105',
    verseText: 'Thy word is a lamp unto my feet, and a light unto my path.',
    targetWords: ['lamp'],
    mode: 0,
    distractors: ['torch', 'sun', 'beacon'],
    explanation: 'God\'s written word provides immediate illumination for daily decisions and long-term guidance.',
    difficulty: 'Moderate',
    stage: 1, stageTitle: 'Scripture Foundations', levelTitle: 'Psalms Challenge', timerSeconds: 25
  },
  {
    level: 3, challengeIndex: 3,
    ref: 'Psalm 100:1',
    verseText: 'Make a joyful noise unto the LORD, all ye lands.',
    targetWords: ['joyful'],
    mode: 0,
    distractors: ['holy', 'loud', 'solemn'],
    explanation: 'A universal psalm of thanksgiving summoning all the earth to praise the LORD.',
    difficulty: 'Difficult',
    stage: 1, stageTitle: 'Scripture Foundations', levelTitle: 'Psalms Challenge', timerSeconds: 25
  },
  {
    level: 3, challengeIndex: 4,
    ref: 'Psalm 121:2',
    verseText: 'My help cometh from the LORD, which made heaven and earth.',
    targetWords: ['help'],
    mode: 0,
    distractors: ['hope', 'peace', 'deliverance'],
    explanation: 'The pilgrim looks past the physical mountains to the sovereign Creator who never slumbers.',
    difficulty: 'Very Difficult',
    stage: 1, stageTitle: 'Scripture Foundations', levelTitle: 'Psalms Challenge', timerSeconds: 25
  },
  {
    level: 3, challengeIndex: 5,
    ref: 'Psalm 19:14',
    verseText: 'Let the words of my mouth, and the meditation of my heart, be acceptable in thy sight, O LORD, my strength, and my redeemer.',
    targetWords: ['meditation'],
    mode: 0,
    distractors: ['thoughts', 'desire', 'prayer'],
    explanation: 'David prays that both outward speech and inward contemplation remain pleasing to his Redeemer.',
    difficulty: 'Mini-boss',
    stage: 1, stageTitle: 'Scripture Foundations', levelTitle: 'Psalms Challenge', timerSeconds: 20
  },

  // Level 4: Words of Jesus (Gospel teachings)
  {
    level: 4, challengeIndex: 1,
    ref: 'Matthew 11:28',
    verseText: 'Come unto me, all ye that labour and are heavy laden, and I will give you rest.',
    targetWords: ['rest'],
    mode: 0,
    distractors: ['peace', 'comfort', 'life'],
    explanation: 'Jesus extends a tender invitation of spiritual rest to souls burdened by legalism and sin.',
    difficulty: 'Accessible',
    stage: 1, stageTitle: 'Scripture Foundations', levelTitle: 'Words of Jesus', timerSeconds: 25
  },
  {
    level: 4, challengeIndex: 2,
    ref: 'John 14:6',
    verseText: 'Jesus saith unto him, I am the way, the truth, and the life: no man cometh unto the Father, but by me.',
    targetWords: ['truth'],
    mode: 0,
    distractors: ['light', 'word', 'door'],
    explanation: 'Christ declares His exclusive mediatorial role as the only path to the Father.',
    difficulty: 'Moderate',
    stage: 1, stageTitle: 'Scripture Foundations', levelTitle: 'Words of Jesus', timerSeconds: 25
  },
  {
    level: 4, challengeIndex: 3,
    ref: 'Luke 19:10',
    verseText: 'For the Son of man is come to seek and to save that which was lost.',
    targetWords: ['lost'],
    mode: 0,
    distractors: ['scattered', 'broken', 'blind'],
    explanation: 'Spoken in the house of Zacchaeus, summarizing the core purpose of the Incarnation.',
    difficulty: 'Difficult',
    stage: 1, stageTitle: 'Scripture Foundations', levelTitle: 'Words of Jesus', timerSeconds: 25
  },
  {
    level: 4, challengeIndex: 4,
    ref: 'Matthew 5:14',
    verseText: 'Ye are the light of the world. A city that is set on an hill cannot be hid.',
    targetWords: ['hill'],
    mode: 0,
    distractors: ['rock', 'mountain', 'cliff'],
    explanation: 'Believers are called to distinct, public testimony that manifests God\'s righteousness.',
    difficulty: 'Very Difficult',
    stage: 1, stageTitle: 'Scripture Foundations', levelTitle: 'Words of Jesus', timerSeconds: 25
  },
  {
    level: 4, challengeIndex: 5,
    ref: 'John 10:11',
    verseText: 'I am the good shepherd: the good shepherd giveth his life for the sheep.',
    targetWords: ['shepherd'],
    mode: 0,
    distractors: ['master', 'teacher', 'vine'],
    explanation: 'Jesus contrasts His sacrificial dedication with hirelings who abandon the flock.',
    difficulty: 'Mini-boss',
    stage: 1, stageTitle: 'Scripture Foundations', levelTitle: 'Words of Jesus', timerSeconds: 20
  },

  // Level 5: Mixed Scripture (OT & NT Pillars)
  {
    level: 5, challengeIndex: 1,
    ref: 'Isaiah 40:31',
    verseText: 'But they that wait upon the LORD shall renew their strength; they shall mount up with wings as eagles; they shall run, and not be weary; and they shall walk, and not faint.',
    targetWords: ['eagles'],
    mode: 0,
    distractors: ['doves', 'falcons', 'angels'],
    explanation: 'Patient expectation in God revitalizes weary souls with supernatural vigor.',
    difficulty: 'Accessible',
    stage: 1, stageTitle: 'Scripture Foundations', levelTitle: 'Mixed Scripture', timerSeconds: 25
  },
  {
    level: 5, challengeIndex: 2,
    ref: 'Romans 8:28',
    verseText: 'And we know that all things work together for good to them that love God, to them who are the called according to his purpose.',
    targetWords: ['purpose'],
    mode: 0,
    distractors: ['covenant', 'promise', 'will'],
    explanation: 'Paul reveals the divine orchestration of all earthly circumstances for the elect.',
    difficulty: 'Moderate',
    stage: 1, stageTitle: 'Scripture Foundations', levelTitle: 'Mixed Scripture', timerSeconds: 25
  },
  {
    level: 5, challengeIndex: 3,
    ref: 'Philippians 4:13',
    verseText: 'I can do all things through Christ which strengtheneth me.',
    targetWords: ['strengtheneth'],
    mode: 0,
    distractors: ['upholdeth', 'comforteth', 'delivereth'],
    explanation: 'Paul expresses contented endurance in any condition through the indwelling power of Christ.',
    difficulty: 'Difficult',
    stage: 1, stageTitle: 'Scripture Foundations', levelTitle: 'Mixed Scripture', timerSeconds: 25
  },
  {
    level: 5, challengeIndex: 4,
    ref: 'Joshua 1:9',
    verseText: 'Have not I commanded thee? Be strong and of a good courage; be not afraid, neither be thou dismayed: for the LORD thy God is with thee whithersoever thou goest.',
    targetWords: ['courage'],
    mode: 0,
    distractors: ['heart', 'spirit', 'mind'],
    explanation: 'God charges Joshua before the Jordan with unwavering bravery rooted in His abiding presence.',
    difficulty: 'Very Difficult',
    stage: 1, stageTitle: 'Scripture Foundations', levelTitle: 'Mixed Scripture', timerSeconds: 25
  },
  {
    level: 5, challengeIndex: 5,
    ref: 'Jeremiah 29:11',
    verseText: 'For I know the thoughts that I think toward you, saith the LORD, thoughts of peace, and not of evil, to give you an expected end.',
    targetWords: ['peace'],
    mode: 0,
    distractors: ['grace', 'mercy', 'joy'],
    explanation: 'God reveals His benevolent counsel toward the exiles in Babylon, promising restoration.',
    difficulty: 'Mini-boss',
    stage: 1, stageTitle: 'Scripture Foundations', levelTitle: 'Mixed Scripture', timerSeconds: 20
  },

  // =========================================================================
  // STAGE 2 — COMPLETE THE VERSE (Levels 6–10 · Moderate)
  // =========================================================================

  // Level 6: Promises of God
  {
    level: 6, challengeIndex: 1,
    ref: '2 Corinthians 12:9',
    verseText: 'And he said unto me, My grace is sufficient for thee: for my strength is made perfect in weakness.',
    targetWords: ['sufficient'],
    mode: 0,
    distractors: ['abundant', 'everlasting', 'faithful'],
    explanation: 'The Lord answered Paul\'s thorn in the flesh by magnifying divine power through mortal frailty.',
    difficulty: 'Accessible',
    stage: 2, stageTitle: 'Complete the Verse', levelTitle: 'Promises of God', timerSeconds: 25
  },
  {
    level: 6, challengeIndex: 2,
    ref: '1 John 1:9',
    verseText: 'If we confess our sins, he is faithful and just to forgive us our sins, and to cleanse us from all unrighteousness.',
    targetWords: ['cleanse'],
    mode: 0,
    distractors: ['deliver', 'purify', 'save'],
    explanation: 'Confession receives both legal forgiveness and thorough purification on Christ\'s merits.',
    difficulty: 'Moderate',
    stage: 2, stageTitle: 'Complete the Verse', levelTitle: 'Promises of God', timerSeconds: 25
  },
  {
    level: 6, challengeIndex: 3,
    ref: 'Isaiah 41:10',
    verseText: 'Fear thou not; for I am with thee: be not dismayed; for I am thy God: I will strengthen thee; yea, I will help thee; yea, I will uphold thee with the right hand of my righteousness.',
    targetWords: ['uphold'],
    mode: 0,
    distractors: ['preserve', 'cover', 'defend'],
    explanation: 'God guarantees steadfast support to His servant Israel against all dread.',
    difficulty: 'Difficult',
    stage: 2, stageTitle: 'Complete the Verse', levelTitle: 'Promises of God', timerSeconds: 25
  },
  {
    level: 6, challengeIndex: 4,
    ref: 'Hebrews 13:5',
    verseText: 'Let your conversation be without covetousness; and be content with such things as ye have: for he hath said, I will never leave thee, nor forsake thee.',
    targetWords: ['forsake'],
    mode: 0,
    distractors: ['forget', 'reject', 'fail'],
    explanation: 'Contentment rests in God\'s unfailing pledge of constant companionship.',
    difficulty: 'Very Difficult',
    stage: 2, stageTitle: 'Complete the Verse', levelTitle: 'Promises of God', timerSeconds: 25
  },
  {
    level: 6, challengeIndex: 5,
    ref: '1 Corinthians 10:13',
    verseText: 'There hath no temptation taken you but such as is common to man: but God is faithful, who will not suffer you to be tempted above that ye are able; but will with the temptation also make a way to escape, that ye may be able to bear it.',
    targetWords: ['escape'],
    mode: 0,
    distractors: ['refuge', 'peace', 'victory'],
    explanation: 'God limits trial and provides an avenue of endurance for believers.',
    difficulty: 'Mini-boss',
    stage: 2, stageTitle: 'Complete the Verse', levelTitle: 'Promises of God', timerSeconds: 20
  },

  // Level 7: Faith and Trust
  {
    level: 7, challengeIndex: 1,
    ref: 'Hebrews 11:1',
    verseText: 'Now faith is the substance of things hoped for, the evidence of things not seen.',
    targetWords: ['substance'],
    mode: 0,
    distractors: ['foundation', 'assurance', 'confidence'],
    explanation: 'Biblical faith provides solid reality to unseen future promises.',
    difficulty: 'Accessible',
    stage: 2, stageTitle: 'Complete the Verse', levelTitle: 'Faith and Trust', timerSeconds: 25
  },
  {
    level: 7, challengeIndex: 2,
    ref: 'Romans 10:17',
    verseText: 'So then faith cometh by hearing, and hearing by the word of God.',
    targetWords: ['hearing'],
    mode: 0,
    distractors: ['reading', 'preaching', 'believing'],
    explanation: 'Spiritual faith is generated through attentive reception of God\'s proclamation.',
    difficulty: 'Moderate',
    stage: 2, stageTitle: 'Complete the Verse', levelTitle: 'Faith and Trust', timerSeconds: 25
  },
  {
    level: 7, challengeIndex: 3,
    ref: '2 Corinthians 5:7',
    verseText: '(For we walk by faith, not by sight:)',
    targetWords: ['sight'],
    mode: 0,
    distractors: ['fear', 'flesh', 'appearances'],
    explanation: 'Believers govern life by divine revelation rather than outward sensory perceptions.',
    difficulty: 'Difficult',
    stage: 2, stageTitle: 'Complete the Verse', levelTitle: 'Faith and Trust', timerSeconds: 25
  },
  {
    level: 7, challengeIndex: 4,
    ref: 'Mark 11:22',
    verseText: 'And Jesus answering saith unto them, Have faith in God.',
    targetWords: ['faith'],
    mode: 0,
    distractors: ['hope', 'trust', 'confidence'],
    explanation: 'Following the withering of the fig tree, Jesus points the disciples to trust in God\'s omnipotence.',
    difficulty: 'Very Difficult',
    stage: 2, stageTitle: 'Complete the Verse', levelTitle: 'Faith and Trust', timerSeconds: 25
  },
  {
    level: 7, challengeIndex: 5,
    ref: 'Habakkuk 2:4',
    verseText: 'Behold, his soul which is lifted up is not upright in him: but the just shall live by his faith.',
    targetWords: ['just'],
    mode: 0,
    distractors: ['humble', 'righteous', 'elect'],
    explanation: 'The famous foundational oracle quoted by Paul in Romans and Galatians to contrast pride and faith.',
    difficulty: 'Mini-boss',
    stage: 2, stageTitle: 'Complete the Verse', levelTitle: 'Faith and Trust', timerSeconds: 20
  },

  // Level 8: Prayer and Worship
  {
    level: 8, challengeIndex: 1,
    ref: '1 Thessalonians 5:17',
    verseText: 'Pray without ceasing.',
    targetWords: ['ceasing'],
    mode: 0,
    distractors: ['fainting', 'doubting', 'fear'],
    explanation: 'A concise command urging constant communion with God throughout the day.',
    difficulty: 'Accessible',
    stage: 2, stageTitle: 'Complete the Verse', levelTitle: 'Prayer and Worship', timerSeconds: 25
  },
  {
    level: 8, challengeIndex: 2,
    ref: 'Philippians 4:6',
    verseText: 'Be careful for nothing; but in every thing by prayer and supplication with thanksgiving let your requests be made known unto God.',
    targetWords: ['thanksgiving'],
    mode: 0,
    distractors: ['humility', 'rejoicing', 'fasting'],
    explanation: 'Supplication is to be coupled with grateful acknowledgment of God\'s past mercies.',
    difficulty: 'Moderate',
    stage: 2, stageTitle: 'Complete the Verse', levelTitle: 'Prayer and Worship', timerSeconds: 25
  },
  {
    level: 8, challengeIndex: 3,
    ref: 'John 4:24',
    verseText: 'God is a Spirit: and they that worship him must worship him in spirit and in truth.',
    targetWords: ['truth'],
    mode: 0,
    distractors: ['holiness', 'reverence', 'fear'],
    explanation: 'Jesus informs the Samaritan woman that acceptable worship is inward and scriptural.',
    difficulty: 'Difficult',
    stage: 2, stageTitle: 'Complete the Verse', levelTitle: 'Prayer and Worship', timerSeconds: 25
  },
  {
    level: 8, challengeIndex: 4,
    ref: 'Psalm 95:6',
    verseText: 'O come, let us worship and bow down: let us kneel before the LORD our maker.',
    targetWords: ['kneel'],
    mode: 0,
    distractors: ['fall', 'stand', 'praise'],
    explanation: 'A call to reverent bodily adoration before the sovereign Creator.',
    difficulty: 'Very Difficult',
    stage: 2, stageTitle: 'Complete the Verse', levelTitle: 'Prayer and Worship', timerSeconds: 25
  },
  {
    level: 8, challengeIndex: 5,
    ref: 'Colossians 4:2',
    verseText: 'Continue in prayer, and watch in the same with thanksgiving;',
    targetWords: ['watch'],
    mode: 0,
    distractors: ['abide', 'stand', 'walk'],
    explanation: 'Paul urges vigilant spiritual alertness in persistent intercession.',
    difficulty: 'Mini-boss',
    stage: 2, stageTitle: 'Complete the Verse', levelTitle: 'Prayer and Worship', timerSeconds: 20
  },

  // Level 9: Wisdom and Understanding
  {
    level: 9, challengeIndex: 1,
    ref: 'James 1:5',
    verseText: 'If any of you lack wisdom, let him ask of God, that giveth to all men liberally, and upbraideth not; and it shall be given him.',
    targetWords: ['liberally'],
    mode: 0,
    distractors: ['freely', 'bountifully', 'graciously'],
    explanation: 'God generously bestows wisdom upon humble petitioners without reproach.',
    difficulty: 'Accessible',
    stage: 2, stageTitle: 'Complete the Verse', levelTitle: 'Wisdom and Understanding', timerSeconds: 25
  },
  {
    level: 9, challengeIndex: 2,
    ref: 'Proverbs 9:10',
    verseText: 'The fear of the LORD is the beginning of wisdom: and the knowledge of the holy is understanding.',
    targetWords: ['holy'],
    mode: 0,
    distractors: ['Lord', 'Almighty', 'truth'],
    explanation: 'True understanding consists in knowing the nature and character of the Holy One.',
    difficulty: 'Moderate',
    stage: 2, stageTitle: 'Complete the Verse', levelTitle: 'Wisdom and Understanding', timerSeconds: 25
  },
  {
    level: 9, challengeIndex: 3,
    ref: 'Job 28:28',
    verseText: 'And unto man he said, Behold, the fear of the Lord, that is wisdom; and to depart from evil is understanding.',
    targetWords: ['depart'],
    mode: 0,
    distractors: ['flee', 'turn', 'abstain'],
    explanation: 'In Job\'s hymn on wisdom, practical understanding is defined as moral separation from evil.',
    difficulty: 'Difficult',
    stage: 2, stageTitle: 'Complete the Verse', levelTitle: 'Wisdom and Understanding', timerSeconds: 25
  },
  {
    level: 9, challengeIndex: 4,
    ref: 'Proverbs 4:7',
    verseText: 'Wisdom is the principal thing; therefore get wisdom: and with all thy getting get understanding.',
    targetWords: ['principal'],
    mode: 0,
    distractors: ['first', 'highest', 'chief'],
    explanation: 'Solomon prioritizes divine wisdom as the supreme treasure to acquire.',
    difficulty: 'Very Difficult',
    stage: 2, stageTitle: 'Complete the Verse', levelTitle: 'Wisdom and Understanding', timerSeconds: 25
  },
  {
    level: 9, challengeIndex: 5,
    ref: '1 Corinthians 1:25',
    verseText: 'Because the foolishness of God is wiser than men; and the weakness of God is stronger than men.',
    targetWords: ['foolishness'],
    mode: 0,
    distractors: ['counsel', 'mystery', 'silence'],
    explanation: 'Paul exposes the vanity of worldly philosophy compared with the cross of Christ.',
    difficulty: 'Mini-boss',
    stage: 2, stageTitle: 'Complete the Verse', levelTitle: 'Wisdom and Understanding', timerSeconds: 20
  },

  // Level 10: Verse Completion Boss
  {
    level: 10, challengeIndex: 1,
    ref: 'Romans 12:2',
    verseText: 'And be not conformed to this world: but be ye transformed by the renewing of your mind, that ye may prove what is that good, and acceptable, and perfect, will of God.',
    targetWords: ['transformed'],
    mode: 0,
    distractors: ['renewed', 'sanctified', 'cleansed'],
    explanation: 'Spiritual transformation operates through a mind saturated in Scripture.',
    difficulty: 'Accessible',
    stage: 2, stageTitle: 'Complete the Verse', levelTitle: 'Verse Completion Boss', timerSeconds: 25
  },
  {
    level: 10, challengeIndex: 2,
    ref: 'Galatians 2:20',
    verseText: 'I am crucified with Christ: nevertheless I live; yet not I, but Christ liveth in me: and the life which I now live in the flesh I live by the faith of the Son of God, who loved me, and gave himself for me.',
    targetWords: ['crucified'],
    mode: 0,
    distractors: ['buried', 'risen', 'dead'],
    explanation: 'The Christian\'s vital union with Christ involves co-crucifixion to sin and co-resurrection to life.',
    difficulty: 'Moderate',
    stage: 2, stageTitle: 'Complete the Verse', levelTitle: 'Verse Completion Boss', timerSeconds: 25
  },
  {
    level: 10, challengeIndex: 3,
    ref: 'Micah 6:8',
    verseText: 'He hath shewed thee, O man, what is good; and what doth the LORD require of thee, but to do justly, and to love mercy, and to walk humbly with thy God?',
    targetWords: ['humbly'],
    mode: 0,
    distractors: ['rightly', 'closely', 'faithfully'],
    explanation: 'Prophetic summary of covenant obedience: justice, mercy, and humility before God.',
    difficulty: 'Difficult',
    stage: 2, stageTitle: 'Complete the Verse', levelTitle: 'Verse Completion Boss', timerSeconds: 25
  },
  {
    level: 10, challengeIndex: 4,
    ref: 'Zephaniah 3:17',
    verseText: 'The LORD thy God in the midst of thee is mighty; he will save, he will rejoice over thee with joy; he will rest in his love, he will joy over thee with singing.',
    targetWords: ['singing'],
    mode: 0,
    distractors: ['shouting', 'gladness', 'triumph'],
    explanation: 'The LORD celebrates the restoration of His people with divine singing.',
    difficulty: 'Very Difficult',
    stage: 2, stageTitle: 'Complete the Verse', levelTitle: 'Verse Completion Boss', timerSeconds: 25
  },
  {
    level: 10, challengeIndex: 5,
    ref: 'Ephesians 2:8',
    verseText: 'For by grace are ye saved through faith; and that not of yourselves: it is the gift of God:',
    targetWords: ['gift'],
    mode: 0,
    distractors: ['work', 'reward', 'mercy'],
    explanation: 'Paul emphasizes that salvation is an unmerited divine gift excluding human boasting.',
    difficulty: 'Mini-boss',
    stage: 2, stageTitle: 'Complete the Verse', levelTitle: 'Verse Completion Boss', timerSeconds: 20
  },

  // =========================================================================
  // STAGE 3 — MISSING WORDS (Levels 11–15 · Moderate to hard)
  // =========================================================================

  // Level 11: Two Missing Words (Mode 2: Arrange word tiles)
  {
    level: 11, challengeIndex: 1,
    ref: 'Deuteronomy 6:5',
    verseText: 'And thou shalt love the LORD thy God with all thine heart, and with all thy soul, and with all thy might.',
    targetWords: ['heart', 'soul'],
    mode: 2,
    distractors: ['mind', 'strength', 'spirit'],
    explanation: 'The Great Shema commands total personal devotion to the LORD.',
    difficulty: 'Accessible',
    stage: 3, stageTitle: 'Missing Words', levelTitle: 'Two Missing Words', timerSeconds: 25
  },
  {
    level: 11, challengeIndex: 2,
    ref: 'Psalm 34:8',
    verseText: 'O taste and see that the LORD is good: blessed is the man that trusteth in him.',
    targetWords: ['taste', 'see'],
    mode: 2,
    distractors: ['hear', 'know', 'rejoice'],
    explanation: 'David invites experiential participation in God\'s covenant goodness.',
    difficulty: 'Moderate',
    stage: 3, stageTitle: 'Missing Words', levelTitle: 'Two Missing Words', timerSeconds: 25
  },
  {
    level: 11, challengeIndex: 3,
    ref: '2 Timothy 1:7',
    verseText: 'For God hath not given us the spirit of fear; but of power, and of love, and of a sound mind.',
    targetWords: ['power', 'love'],
    mode: 2,
    distractors: ['peace', 'grace', 'wisdom'],
    explanation: 'The Holy Spirit confers divine boldness, sacrificial charity, and self-control.',
    difficulty: 'Difficult',
    stage: 3, stageTitle: 'Missing Words', levelTitle: 'Two Missing Words', timerSeconds: 25
  },
  {
    level: 11, challengeIndex: 4,
    ref: 'Galatians 5:22',
    verseText: 'But the fruit of the Spirit is love, joy, peace, longsuffering, gentleness, goodness, faith,',
    targetWords: ['joy', 'peace'],
    mode: 2,
    distractors: ['hope', 'patience', 'mercy'],
    explanation: 'The indwelling Spirit produces harmonious virtues reflecting Christ\'s character.',
    difficulty: 'Very Difficult',
    stage: 3, stageTitle: 'Missing Words', levelTitle: 'Two Missing Words', timerSeconds: 25
  },
  {
    level: 11, challengeIndex: 5,
    ref: 'Matthew 22:37',
    verseText: 'Jesus said unto him, Thou shalt love the Lord thy God with all thy heart, and with all thy soul, and with all thy mind.',
    targetWords: ['soul', 'mind'],
    mode: 2,
    distractors: ['might', 'strength', 'understanding'],
    explanation: 'Christ cites the first and great commandment embracing heart, soul, and intellect.',
    difficulty: 'Mini-boss',
    stage: 3, stageTitle: 'Missing Words', levelTitle: 'Two Missing Words', timerSeconds: 20
  },

  // Level 12: Three Missing Words (Mode 2)
  {
    level: 12, challengeIndex: 1,
    ref: '1 Corinthians 13:13',
    verseText: 'And now abideth faith, hope, charity, these three; but the greatest of these is charity.',
    targetWords: ['faith', 'hope', 'charity'],
    mode: 2,
    distractors: ['peace', 'truth', 'grace'],
    explanation: 'The triad of abiding virtues culminates in enduring sacrificial love.',
    difficulty: 'Accessible',
    stage: 3, stageTitle: 'Missing Words', levelTitle: 'Three Missing Words', timerSeconds: 25
  },
  {
    level: 12, challengeIndex: 2,
    ref: '1 Thessalonians 5:16-18',
    verseText: 'Rejoice evermore. Pray without ceasing. In every thing give thanks:',
    targetWords: ['Rejoice', 'Pray', 'thanks'],
    mode: 2,
    distractors: ['Sing', 'Praise', 'glory'],
    explanation: 'Three concise commands presenting God\'s will in Christ for every believer.',
    difficulty: 'Moderate',
    stage: 3, stageTitle: 'Missing Words', levelTitle: 'Three Missing Words', timerSeconds: 25
  },
  {
    level: 12, challengeIndex: 3,
    ref: 'Ephesians 4:32',
    verseText: 'And be ye kind one to another, tenderhearted, forgiving one another, even as God for Christ\'s sake hath forgiven you.',
    targetWords: ['kind', 'tenderhearted', 'forgiving'],
    mode: 2,
    distractors: ['gentle', 'patient', 'loving'],
    explanation: 'Mutual interpersonal grace modeled upon God\'s forgiveness in Christ.',
    difficulty: 'Difficult',
    stage: 3, stageTitle: 'Missing Words', levelTitle: 'Three Missing Words', timerSeconds: 25
  },
  {
    level: 12, challengeIndex: 4,
    ref: '1 Peter 5:7',
    verseText: 'Casting all your care upon him; for he careth for you.',
    targetWords: ['Casting', 'care', 'careth'],
    mode: 2,
    distractors: ['Leaving', 'burden', 'watcheth'],
    explanation: 'Believers roll all anxiety onto God in confident assurance of His pastoral solicitude.',
    difficulty: 'Very Difficult',
    stage: 3, stageTitle: 'Missing Words', levelTitle: 'Three Missing Words', timerSeconds: 25
  },
  {
    level: 12, challengeIndex: 5,
    ref: 'Psalm 37:4-5',
    verseText: 'Delight thyself also in the LORD; and he shall give thee the desires of thine heart. Commit thy way unto the LORD; trust also in him; and he shall bring it to pass.',
    targetWords: ['Delight', 'Commit', 'trust'],
    mode: 2,
    distractors: ['Wait', 'Rest', 'Praise'],
    explanation: 'Three active verbs outlining the life of unwavering reliance on the LORD.',
    difficulty: 'Mini-boss',
    stage: 3, stageTitle: 'Missing Words', levelTitle: 'Three Missing Words', timerSeconds: 20
  },

  // Level 13: The Missing Phrase
  {
    level: 13, challengeIndex: 1,
    ref: '2 Chronicles 7:14',
    verseText: 'If my people, which are called by my name, shall humble themselves, and pray, and seek my face, and turn from their wicked ways; then will I hear from heaven, and will forgive their sin, and will heal their land.',
    targetWords: ['humble', 'pray'],
    mode: 2,
    distractors: ['fast', 'weep', 'cry'],
    explanation: 'God\'s covenant response to national repentance and revival.',
    difficulty: 'Accessible',
    stage: 3, stageTitle: 'Missing Words', levelTitle: 'The Missing Phrase', timerSeconds: 25
  },
  {
    level: 13, challengeIndex: 2,
    ref: 'Isaiah 53:5',
    verseText: 'But he was wounded for our transgressions, he was bruised for our iniquities: the chastisement of our peace was upon him; and with his stripes we are healed.',
    targetWords: ['transgressions', 'iniquities'],
    mode: 2,
    distractors: ['sins', 'rebellion', 'sorrows'],
    explanation: 'The vicarious substitution of the Suffering Servant bearing human sin.',
    difficulty: 'Moderate',
    stage: 3, stageTitle: 'Missing Words', levelTitle: 'The Missing Phrase', timerSeconds: 25
  },
  {
    level: 13, challengeIndex: 3,
    ref: 'Romans 6:23',
    verseText: 'For the wages of sin is death; but the gift of God is eternal life through Jesus Christ our Lord.',
    targetWords: ['wages', 'gift'],
    mode: 2,
    distractors: ['reward', 'merit', 'portion'],
    explanation: 'Paul contrasts earned judgment with unmerited eternal life in Christ.',
    difficulty: 'Difficult',
    stage: 3, stageTitle: 'Missing Words', levelTitle: 'The Missing Phrase', timerSeconds: 25
  },
  {
    level: 13, challengeIndex: 4,
    ref: 'Matthew 28:19',
    verseText: 'Go ye therefore, and teach all nations, baptizing them in the name of the Father, and of the Son, and of the Holy Ghost:',
    targetWords: ['Father', 'Son'],
    mode: 2,
    distractors: ['Lord', 'Spirit', 'Christ'],
    explanation: 'The Great Commission initiates discipleship under the one triune Name.',
    difficulty: 'Very Difficult',
    stage: 3, stageTitle: 'Missing Words', levelTitle: 'The Missing Phrase', timerSeconds: 25
  },
  {
    level: 13, challengeIndex: 5,
    ref: 'John 1:14',
    verseText: 'And the Word was made flesh, and dwelt among us, (and we beheld his glory, the glory as of the only begotten of the Father,) full of grace and truth.',
    targetWords: ['grace', 'truth'],
    mode: 2,
    distractors: ['light', 'mercy', 'peace'],
    explanation: 'The Incarnation unveiled the Father\'s glorious fullness in the flesh.',
    difficulty: 'Mini-boss',
    stage: 3, stageTitle: 'Missing Words', levelTitle: 'The Missing Phrase', timerSeconds: 20
  },

  // Level 14: Complete the Sentence
  {
    level: 14, challengeIndex: 1,
    ref: 'Hebrews 12:1',
    verseText: 'Wherefore seeing we also are compassed about with so great a cloud of witnesses, let us lay aside every weight, and the sin which doth so easily beset us, and let us run with patience the race that is set before us,',
    targetWords: ['patience', 'race'],
    mode: 2,
    distractors: ['speed', 'course', 'faith'],
    explanation: 'Encouraged by ancient heroes, believers run the marathon of faith with endurance.',
    difficulty: 'Accessible',
    stage: 3, stageTitle: 'Missing Words', levelTitle: 'Complete the Sentence', timerSeconds: 25
  },
  {
    level: 14, challengeIndex: 2,
    ref: 'Lamentations 3:22-23',
    verseText: 'It is of the LORD\'s mercies that we are not consumed, because his compassions fail not. They are new every morning: great is thy faithfulness.',
    targetWords: ['consumed', 'faithfulness'],
    mode: 2,
    distractors: ['destroyed', 'goodness', 'righteousness'],
    explanation: 'Jeremiah recalls God\'s inexhaustible compassions amidst Jerusalem\'s ruins.',
    difficulty: 'Moderate',
    stage: 3, stageTitle: 'Missing Words', levelTitle: 'Complete the Sentence', timerSeconds: 25
  },
  {
    level: 14, challengeIndex: 3,
    ref: 'Colossians 3:1-2',
    verseText: 'If ye then be risen with Christ, seek those things which are above, where Christ sitteth on the right hand of God. Set your affection on things above, not on things on the earth.',
    targetWords: ['affection', 'above'],
    mode: 2,
    distractors: ['mind', 'heart', 'heaven'],
    explanation: 'Resurrection union with Christ redirects earthly affections heavenward.',
    difficulty: 'Difficult',
    stage: 3, stageTitle: 'Missing Words', levelTitle: 'Complete the Sentence', timerSeconds: 25
  },
  {
    level: 14, challengeIndex: 4,
    ref: 'Titus 2:11-12',
    verseText: 'For the grace of God that bringeth salvation hath appeared to all men, Teaching us that, denying ungodliness and worldly lusts, we should live soberly, righteously, and godly, in this present world;',
    targetWords: ['ungodliness', 'soberly'],
    mode: 2,
    distractors: ['wickedness', 'justly', 'faithfully'],
    explanation: 'Salvation by grace trains believers in practical moral sanctification.',
    difficulty: 'Very Difficult',
    stage: 3, stageTitle: 'Missing Words', levelTitle: 'Complete the Sentence', timerSeconds: 25
  },
  {
    level: 14, challengeIndex: 5,
    ref: 'Psalm 91:1-2',
    verseText: 'He that dwelleth in the secret place of the most High shall abide under the shadow of the Almighty. I will say of the LORD, He is my refuge and my fortress: my God; in him will I trust.',
    targetWords: ['secret', 'fortress'],
    mode: 2,
    distractors: ['holy', 'shield', 'habitation'],
    explanation: 'The pilgrim finds invulnerable safety dwelling in communion with the Almighty.',
    difficulty: 'Mini-boss',
    stage: 3, stageTitle: 'Missing Words', levelTitle: 'Complete the Sentence', timerSeconds: 20
  },

  // Level 15: Missing Words Boss
  {
    level: 15, challengeIndex: 1,
    ref: 'Ephesians 6:11',
    verseText: 'Put on the whole armour of God, that ye may be able to stand against the wiles of the devil.',
    targetWords: ['armour', 'wiles'],
    mode: 2,
    distractors: ['shield', 'snares', 'darts'],
    explanation: 'Divine armor equips Christians against deceptive demonic stratagems.',
    difficulty: 'Accessible',
    stage: 3, stageTitle: 'Missing Words', levelTitle: 'Missing Words Boss', timerSeconds: 25
  },
  {
    level: 15, challengeIndex: 2,
    ref: 'Romans 5:8',
    verseText: 'But God commendeth his love toward us, in that, while we were yet sinners, Christ died for us.',
    targetWords: ['commendeth', 'sinners'],
    mode: 2,
    distractors: ['manifested', 'enemies', 'rebels'],
    explanation: 'God demonstrates the supremacy of His love while we were spiritually helpless.',
    difficulty: 'Moderate',
    stage: 3, stageTitle: 'Missing Words', levelTitle: 'Missing Words Boss', timerSeconds: 25
  },
  {
    level: 15, challengeIndex: 3,
    ref: 'Isaiah 9:6',
    verseText: 'For unto us a child is born, unto us a son is given: and the government shall be upon his shoulder: and his name shall be called Wonderful, Counseller, The mighty God, The everlasting Father, The Prince of Peace.',
    targetWords: ['government', 'Prince'],
    mode: 2,
    distractors: ['kingdom', 'King', 'Lord'],
    explanation: 'Messianic titles announcing the deity and everlasting reign of the Messiah.',
    difficulty: 'Difficult',
    stage: 3, stageTitle: 'Missing Words', levelTitle: 'Missing Words Boss', timerSeconds: 25
  },
  {
    level: 15, challengeIndex: 4,
    ref: 'Philippians 2:5',
    verseText: 'Let this mind be in you, which was also in Christ Jesus:',
    targetWords: ['mind'],
    mode: 0,
    distractors: ['spirit', 'heart', 'humility'],
    explanation: 'Paul introduces the great Carmen Christi by commanding believers to share Christ\'s self-emptying humility.',
    difficulty: 'Very Difficult',
    stage: 3, stageTitle: 'Missing Words', levelTitle: 'Missing Words Boss', timerSeconds: 25
  },
  {
    level: 15, challengeIndex: 5,
    ref: '1 Timothy 3:16',
    verseText: 'And without controversy great is the mystery of godliness: God was manifest in the flesh, justified in the Spirit, seen of angels, preached unto the Gentiles, believed on in the world, received up into glory.',
    targetWords: ['mystery', 'glory'],
    mode: 2,
    distractors: ['secret', 'heaven', 'grace'],
    explanation: 'An early Christian confession of the Incarnation, vindication, and ascension of Christ.',
    difficulty: 'Mini-boss',
    stage: 3, stageTitle: 'Missing Words', levelTitle: 'Missing Words Boss', timerSeconds: 20
  },
];
