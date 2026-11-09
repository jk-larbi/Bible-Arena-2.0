// Complete the Scripture — Stages 7–10 (Levels 31–50, 100 Questions)
// All passages verified from the King James Version (KJV)
import type { RawScriptureChallenge } from './completeScriptureStages1to3';

export const SCRIPTURE_STAGES_7_TO_10: RawScriptureChallenge[] = [
  // =========================================================================
  // STAGE 7 — DIFFICULT PASSAGES (Levels 31–35 · Very hard)
  // =========================================================================

  // Level 31: Difficult Old Testament Verses
  {
    level: 31, challengeIndex: 1,
    ref: 'Leviticus 17:11',
    verseText: 'For the life of the flesh is in the blood: and I have given it to you upon the altar to make an atonement for your souls: for it is the blood that maketh an atonement for the soul.',
    targetWords: ['flesh', 'atonement'],
    mode: 2,
    distractors: ['body', 'sacrifice', 'cleansing'],
    explanation: 'The biblical theology of blood atonement grounding the substitutionary sacrificial system.',
    difficulty: 'Accessible',
    stage: 7, stageTitle: 'Difficult Passages', levelTitle: 'Difficult Old Testament Verses', timerSeconds: 22
  },
  {
    level: 31, challengeIndex: 2,
    ref: 'Numbers 23:19',
    verseText: 'God is not a man, that he should lie; neither the son of man, that he should repent: hath he said, and shall he not do it? or hath he spoken, and shall he not make it good?',
    targetWords: ['repent', 'good'],
    mode: 2,
    distractors: ['change', 'stand', 'fulfilled'],
    explanation: 'Balaam\'s oracle declaring the immaculate veracity and immutable counsel of God.',
    difficulty: 'Moderate',
    stage: 7, stageTitle: 'Difficult Passages', levelTitle: 'Difficult Old Testament Verses', timerSeconds: 22
  },
  {
    level: 31, challengeIndex: 3,
    ref: 'Ezekiel 36:26',
    verseText: 'A new heart also will I give you, and a new spirit will I put within you: and I will take away the stony heart out of your flesh, and I will give you an heart of flesh.',
    targetWords: ['stony', 'flesh'],
    mode: 2,
    distractors: ['hard', 'bone', 'spirit'],
    explanation: 'The prophetic promise of the New Covenant: regeneration replacing dead stony rebellion with living responsive devotion.',
    difficulty: 'Difficult',
    stage: 7, stageTitle: 'Difficult Passages', levelTitle: 'Difficult Old Testament Verses', timerSeconds: 22
  },
  {
    level: 31, challengeIndex: 4,
    ref: 'Deuteronomy 8:3',
    verseText: '...man doth not live by bread only, but by every word that proceedeth out of the mouth of the LORD doth man live.',
    targetWords: ['bread', 'proceedeth'],
    mode: 2,
    distractors: ['meat', 'cometh', 'issueth'],
    explanation: 'Moses reminds Israel of the manna, quoted by Jesus when refuting the tempter in the wilderness.',
    difficulty: 'Very Difficult',
    stage: 7, stageTitle: 'Difficult Passages', levelTitle: 'Difficult Old Testament Verses', timerSeconds: 22
  },
  {
    level: 31, challengeIndex: 5,
    ref: '1 Kings 18:21',
    verseText: 'And Elijah came unto all the people, and said, How long halt ye between two opinions? if the LORD be God, follow him: but if Baal, then follow him. And the people answered him not a word.',
    targetWords: ['halt', 'opinions'],
    mode: 2,
    distractors: ['stumble', 'ways', 'gods'],
    explanation: 'Elijah\'s Carmel confrontation summoning Israel to uncompromised allegiance to the LORD.',
    difficulty: 'Mini-boss',
    stage: 7, stageTitle: 'Difficult Passages', levelTitle: 'Difficult Old Testament Verses', timerSeconds: 18
  },

  // Level 32: Difficult New Testament Verses
  {
    level: 32, challengeIndex: 1,
    ref: 'Hebrews 10:24-25',
    verseText: 'And let us consider one another to provoke unto love and to good works: Not forsaking the assembling of ourselves together, as the manner of some is;',
    targetWords: ['provoke', 'assembling'],
    mode: 2,
    distractors: ['exhort', 'fellowship', 'gathering'],
    explanation: 'Covenant mutual encouragement and the necessity of corporate gathering.',
    difficulty: 'Accessible',
    stage: 7, stageTitle: 'Difficult Passages', levelTitle: 'Difficult New Testament Verses', timerSeconds: 22
  },
  {
    level: 32, challengeIndex: 2,
    ref: '1 Peter 3:15',
    verseText: 'But sanctify the Lord God in your hearts: and be ready always to give an answer to every man that asketh you a reason of the hope that is in you with meekness and fear:',
    targetWords: ['sanctify', 'reason', 'meekness'],
    mode: 2,
    distractors: ['exalt', 'defense', 'humility'],
    explanation: 'The classic foundation for Christian apologetics, uniting intellectual clarity with humble reverence.',
    difficulty: 'Moderate',
    stage: 7, stageTitle: 'Difficult Passages', levelTitle: 'Difficult New Testament Verses', timerSeconds: 22
  },
  {
    level: 32, challengeIndex: 3,
    ref: 'Revelation 3:20',
    verseText: 'Behold, I stand at the door, and knock: if any man hear my voice, and open the door, I will come in to him, and will sup with him, and he with me.',
    targetWords: ['knock', 'sup'],
    mode: 2,
    distractors: ['call', 'dine', 'fellowship'],
    explanation: 'Christ\'s invitation to the lukewarm church of Laodicea promising intimate fellowship.',
    difficulty: 'Difficult',
    stage: 7, stageTitle: 'Difficult Passages', levelTitle: 'Difficult New Testament Verses', timerSeconds: 22
  },
  {
    level: 32, challengeIndex: 4,
    ref: 'Hebrews 11:6',
    verseText: 'But without faith it is impossible to please him: for he that cometh to God must believe that he is, and that he is a rewarder of them that diligently seek him.',
    targetWords: ['rewarder', 'diligently'],
    mode: 2,
    distractors: ['keeper', 'earnestly', 'faithfully'],
    explanation: 'Two indispensable axioms of approach to God: believing in His being and His faithful reward.',
    difficulty: 'Very Difficult',
    stage: 7, stageTitle: 'Difficult Passages', levelTitle: 'Difficult New Testament Verses', timerSeconds: 22
  },
  {
    level: 32, challengeIndex: 5,
    ref: '2 Peter 1:21',
    verseText: 'For the prophecy came not in old time by the will of man: but holy men of God spake as they were moved by the Holy Ghost.',
    targetWords: ['prophecy', 'moved'],
    mode: 2,
    distractors: ['scripture', 'guided', 'inspired'],
    explanation: 'The divine origin of biblical prophecy: holy men carried along by the Holy Spirit.',
    difficulty: 'Mini-boss',
    stage: 7, stageTitle: 'Difficult Passages', levelTitle: 'Difficult New Testament Verses', timerSeconds: 18
  },

  // Level 33: Paul's Letters
  {
    level: 33, challengeIndex: 1,
    ref: 'Romans 3:23-24',
    verseText: 'For all have sinned, and come short of the glory of God; Being justified freely by his grace through the redemption that is in Christ Jesus:',
    targetWords: ['glory', 'freely', 'redemption'],
    mode: 2,
    distractors: ['righteousness', 'richly', 'mercy'],
    explanation: 'Universal human guilt met by free forensic justification through the redemption accomplished by Christ.',
    difficulty: 'Accessible',
    stage: 7, stageTitle: 'Difficult Passages', levelTitle: 'Paul\'s Letters', timerSeconds: 22
  },
  {
    level: 33, challengeIndex: 2,
    ref: 'Ephesians 1:3-4',
    verseText: 'Blessed be the God and Father of our Lord Jesus Christ, who hath blessed us with all spiritual blessings in heavenly places in Christ: According as he hath chosen us in him before the foundation of the world,',
    targetWords: ['spiritual', 'chosen', 'foundation'],
    mode: 2,
    distractors: ['heavenly', 'called', 'beginning'],
    explanation: 'The eternal doxology of election: chosen in Christ before creation to be holy and blameless.',
    difficulty: 'Moderate',
    stage: 7, stageTitle: 'Difficult Passages', levelTitle: 'Paul\'s Letters', timerSeconds: 22
  },
  {
    level: 33, challengeIndex: 3,
    ref: 'Colossians 1:15',
    verseText: 'Who is the image of the invisible God, the firstborn of every creature:',
    targetWords: ['image', 'firstborn'],
    mode: 2,
    distractors: ['likeness', 'heir', 'creator'],
    explanation: 'The cosmic supremacy of Christ as the exact representation of God and supreme Lord over creation.',
    difficulty: 'Difficult',
    stage: 7, stageTitle: 'Difficult Passages', levelTitle: 'Paul\'s Letters', timerSeconds: 22
  },
  {
    level: 33, challengeIndex: 4,
    ref: 'Galatians 2:16',
    verseText: 'Knowing that a man is not justified by the works of the law, but by the faith of Jesus Christ, even we have believed in Jesus Christ, that we might be justified by the faith of Christ, and not by the works of the law:',
    targetWords: ['justified', 'works'],
    mode: 2,
    distractors: ['saved', 'deeds', 'commandments'],
    explanation: 'The bedrock doctrine of the Protestant Reformation: justification solely by faith apart from legal works.',
    difficulty: 'Very Difficult',
    stage: 7, stageTitle: 'Difficult Passages', levelTitle: 'Paul\'s Letters', timerSeconds: 22
  },
  {
    level: 33, challengeIndex: 5,
    ref: '2 Corinthians 4:17-18',
    verseText: 'For our light affliction, which is but for a moment, worketh for us a far more exceeding and eternal weight of glory; While we look not at the things which are seen, but at the things which are not seen:',
    targetWords: ['affliction', 'weight'],
    mode: 2,
    distractors: ['sorrow', 'portion', 'crown'],
    explanation: 'Paul contrasts momentary temporal sufferings with the ineffable eternal weight of heavenly glory.',
    difficulty: 'Mini-boss',
    stage: 7, stageTitle: 'Difficult Passages', levelTitle: 'Paul\'s Letters', timerSeconds: 18
  },

  // Level 34: Prophets and Their Messages
  {
    level: 34, challengeIndex: 1,
    ref: 'Jeremiah 17:7-8',
    verseText: 'Blessed is the man that trusteth in the LORD, and whose hope the LORD is. For he shall be as a tree planted by the waters, and that spreadeth out her roots by the river,',
    targetWords: ['hope', 'roots'],
    mode: 2,
    distractors: ['shield', 'branches', 'leaves'],
    explanation: 'Jeremiah echoes Psalm 1, portraying the evergreen resilience of the soul anchored in God.',
    difficulty: 'Accessible',
    stage: 7, stageTitle: 'Difficult Passages', levelTitle: 'Prophets and Their Messages', timerSeconds: 22
  },
  {
    level: 34, challengeIndex: 2,
    ref: 'Ezekiel 11:19',
    verseText: 'And I will give them one heart, and I will put a new spirit within you; and I will take the stony heart out of their flesh, and will give them an heart of flesh:',
    targetWords: ['one', 'spirit'],
    mode: 2,
    distractors: ['pure', 'covenant', 'law'],
    explanation: 'Ezekiel foretells unifying regeneration and spiritual surgery under the New Covenant.',
    difficulty: 'Moderate',
    stage: 7, stageTitle: 'Difficult Passages', levelTitle: 'Prophets and Their Messages', timerSeconds: 22
  },
  {
    level: 34, challengeIndex: 3,
    ref: 'Zechariah 9:9',
    verseText: 'Rejoice greatly, O daughter of Zion; shout, O daughter of Jerusalem: behold, thy King cometh unto thee: he is just, and having salvation; lowly, and riding upon an ass, and upon a colt the foal of an ass.',
    targetWords: ['King', 'lowly'],
    mode: 2,
    distractors: ['Lord', 'meek', 'righteous'],
    explanation: 'The Palm Sunday prophecy of the humble Messianic King entering Jerusalem on a colt.',
    difficulty: 'Difficult',
    stage: 7, stageTitle: 'Difficult Passages', levelTitle: 'Prophets and Their Messages', timerSeconds: 22
  },
  {
    level: 34, challengeIndex: 4,
    ref: 'Isaiah 55:8',
    verseText: 'For my thoughts are not your thoughts, neither are your ways my ways, saith the LORD.',
    targetWords: ['thoughts', 'ways'],
    mode: 2,
    distractors: ['counsels', 'paths', 'plans'],
    explanation: 'The infinite qualitative distinction between human reasoning and the transcendent wisdom of God.',
    difficulty: 'Very Difficult',
    stage: 7, stageTitle: 'Difficult Passages', levelTitle: 'Prophets and Their Messages', timerSeconds: 22
  },
  {
    level: 34, challengeIndex: 5,
    ref: 'Hosea 10:12',
    verseText: 'Sow to yourselves in righteousness, reap in mercy; break up your fallow ground: for it is time to seek the LORD, till he come and rain righteousness upon you.',
    targetWords: ['fallow', 'rain'],
    mode: 2,
    distractors: ['hard', 'pour', 'shower'],
    explanation: 'Hosea calls for spiritual agriculture: breaking unplowed stubborn hearts to receive divine rain.',
    difficulty: 'Mini-boss',
    stage: 7, stageTitle: 'Difficult Passages', levelTitle: 'Prophets and Their Messages', timerSeconds: 18
  },

  // Level 35: Difficult Scripture Boss
  {
    level: 35, challengeIndex: 1,
    ref: 'Romans 8:1',
    verseText: 'There is therefore now no condemnation to them which are in Christ Jesus, who walk not after the flesh, but after the Spirit.',
    targetWords: ['condemnation', 'flesh', 'Spirit'],
    mode: 2,
    distractors: ['judgment', 'world', 'truth'],
    explanation: 'The Magna Carta of Christian assurance: complete acquittal from all condemnation for those in Christ.',
    difficulty: 'Accessible',
    stage: 7, stageTitle: 'Difficult Passages', levelTitle: 'Difficult Scripture Boss', timerSeconds: 22
  },
  {
    level: 35, challengeIndex: 2,
    ref: '1 Corinthians 15:20',
    verseText: 'But now is Christ risen from the dead, and become the firstfruits of them that slept.',
    targetWords: ['risen', 'firstfruits'],
    mode: 2,
    distractors: ['raised', 'harvest', 'pledge'],
    explanation: 'Paul celebrates Christ\'s resurrection as the definitive harbinger of the general resurrection.',
    difficulty: 'Moderate',
    stage: 7, stageTitle: 'Difficult Passages', levelTitle: 'Difficult Scripture Boss', timerSeconds: 22
  },
  {
    level: 35, challengeIndex: 3,
    ref: 'Isaiah 53:6',
    verseText: 'All we like sheep have gone astray; we have turned every one to his own way; and the LORD hath laid on him the iniquity of us all.',
    targetWords: ['sheep', 'astray', 'iniquity'],
    mode: 2,
    distractors: ['flocks', 'wandered', 'sin'],
    explanation: 'Universal human apostasy met by the vicarious transfer of guilt onto the Suffering Servant.',
    difficulty: 'Difficult',
    stage: 7, stageTitle: 'Difficult Passages', levelTitle: 'Difficult Scripture Boss', timerSeconds: 22
  },
  {
    level: 35, challengeIndex: 4,
    ref: 'Hebrews 7:25',
    verseText: 'Wherefore he is able also to save them to the uttermost that come unto God by him, seeing he ever liveth to make intercession for them.',
    targetWords: ['uttermost', 'intercession'],
    mode: 2,
    distractors: ['end', 'prayers', 'supplication'],
    explanation: 'The perpetual priesthood of Christ guaranteeing total, everlasting salvation through ongoing intercession.',
    difficulty: 'Very Difficult',
    stage: 7, stageTitle: 'Difficult Passages', levelTitle: 'Difficult Scripture Boss', timerSeconds: 22
  },
  {
    level: 35, challengeIndex: 5,
    ref: 'Colossians 2:14',
    verseText: 'Blotting out the handwriting of ordinances that was against us, which was contrary to us, and took it out of the way, nailing it to his cross;',
    targetWords: ['handwriting', 'ordinances', 'cross'],
    mode: 2,
    distractors: ['record', 'decrees', 'tree'],
    explanation: 'The debt-certificate of our legal guilt cancelled and nailed triumphantly to the cross of Christ.',
    difficulty: 'Mini-boss',
    stage: 7, stageTitle: 'Difficult Passages', levelTitle: 'Difficult Scripture Boss', timerSeconds: 18
  },

  // =========================================================================
  // STAGE 8 — SCRIPTURE DETECTIVE (Levels 36–40 · Very hard)
  // =========================================================================

  // Level 36: Reference Detective (Mode 5: Hidden Reference)
  {
    level: 36, challengeIndex: 1,
    ref: 'Ecclesiastes 12:1',
    verseText: 'Remember now thy Creator in the days of thy youth, while the evil days come not, nor the years draw nigh, when thou shalt say, I have no pleasure in them;',
    targetWords: ['Creator'],
    mode: 5,
    distractors: ['Lord', 'Father', 'Maker'],
    explanation: 'Solomon urges early piety before the physical infirmities of old age arrive.',
    difficulty: 'Accessible',
    stage: 8, stageTitle: 'Scripture Detective', levelTitle: 'Reference Detective', timerSeconds: 22
  },
  {
    level: 36, challengeIndex: 2,
    ref: 'Matthew 7:13',
    verseText: 'Enter ye in at the strait gate: for wide is the gate, and broad is the way, that leadeth to destruction, and many there be which go in thereat:',
    targetWords: ['strait'],
    mode: 5,
    distractors: ['narrow', 'small', 'low'],
    explanation: 'Jesus commands entry through the demanding, exclusive gate of discipleship.',
    difficulty: 'Moderate',
    stage: 8, stageTitle: 'Scripture Detective', levelTitle: 'Reference Detective', timerSeconds: 22
  },
  {
    level: 36, challengeIndex: 3,
    ref: 'Psalm 116:15',
    verseText: 'Precious in the sight of the LORD is the death of his saints.',
    targetWords: ['Precious'],
    mode: 5,
    distractors: ['Costly', 'Blessed', 'Honorable'],
    explanation: 'God cherishes the homecoming of His faithful servants with tender regard.',
    difficulty: 'Difficult',
    stage: 8, stageTitle: 'Scripture Detective', levelTitle: 'Reference Detective', timerSeconds: 22
  },
  {
    level: 36, challengeIndex: 4,
    ref: 'Proverbs 22:1',
    verseText: 'A good name is rather to be chosen than great riches, and loving favour rather than silver and gold.',
    targetWords: ['favour'],
    mode: 5,
    distractors: ['kindness', 'mercy', 'honor'],
    explanation: 'Moral reputation and loving esteem outshine mountains of accumulated treasure.',
    difficulty: 'Very Difficult',
    stage: 8, stageTitle: 'Scripture Detective', levelTitle: 'Reference Detective', timerSeconds: 22
  },
  {
    level: 36, challengeIndex: 5,
    ref: 'Galatians 5:1',
    verseText: 'Stand fast therefore in the liberty wherewith Christ hath made us free, and be not entangled again with the yoke of bondage.',
    targetWords: ['yoke'],
    mode: 5,
    distractors: ['chains', 'burden', 'snare'],
    explanation: 'Paul commands vigilance against legalistic bondage, defending Christian liberty.',
    difficulty: 'Mini-boss',
    stage: 8, stageTitle: 'Scripture Detective', levelTitle: 'Reference Detective', timerSeconds: 18
  },

  // Level 37: Find the Missing Word
  {
    level: 37, challengeIndex: 1,
    ref: 'Romans 5:1',
    verseText: 'Therefore being justified by faith, we have peace with God through our Lord Jesus Christ:',
    targetWords: ['peace'],
    mode: 0,
    distractors: ['favour', 'access', 'grace'],
    explanation: 'Justification removes legal enmity, establishing objective reconciliation with God.',
    difficulty: 'Accessible',
    stage: 8, stageTitle: 'Scripture Detective', levelTitle: 'Find the Missing Word', timerSeconds: 22
  },
  {
    level: 37, challengeIndex: 2,
    ref: '1 Corinthians 1:18',
    verseText: 'For the preaching of the cross is to them that perish foolishness; but unto us which are saved it is the power of God.',
    targetWords: ['preaching'],
    mode: 0,
    distractors: ['word', 'message', 'wisdom'],
    explanation: 'The proclamation of the crucified Christ manifests divine power to believers while confounding worldly intellect.',
    difficulty: 'Moderate',
    stage: 8, stageTitle: 'Scripture Detective', levelTitle: 'Find the Missing Word', timerSeconds: 22
  },
  {
    level: 37, challengeIndex: 3,
    ref: 'Ephesians 2:10',
    verseText: 'For we are his workmanship, created in Christ Jesus unto good works, which God hath before ordained that we should walk in them.',
    targetWords: ['workmanship'],
    mode: 0,
    distractors: ['creation', 'masterpiece', 'handiwork'],
    explanation: 'Believers are God\'s new-covenant masterpiece (poiema) fashioned for holiness.',
    difficulty: 'Difficult',
    stage: 8, stageTitle: 'Scripture Detective', levelTitle: 'Find the Missing Word', timerSeconds: 22
  },
  {
    level: 37, challengeIndex: 4,
    ref: '2 Corinthians 1:3',
    verseText: 'Blessed be God, even the Father of our Lord Jesus Christ, the Father of mercies, and the God of all comfort;',
    targetWords: ['comfort'],
    mode: 0,
    distractors: ['consolation', 'peace', 'grace'],
    explanation: 'Paul celebrates God as the inexhaustible source of consolation in affliction.',
    difficulty: 'Very Difficult',
    stage: 8, stageTitle: 'Scripture Detective', levelTitle: 'Find the Missing Word', timerSeconds: 22
  },
  {
    level: 37, challengeIndex: 5,
    ref: 'James 1:17',
    verseText: 'Every good gift and every perfect gift is from above, and cometh down from the Father of lights, with whom is no variableness, neither shadow of turning.',
    targetWords: ['variableness'],
    mode: 0,
    distractors: ['changing', 'darkness', 'doubt'],
    explanation: 'James asserts God\'s unvarying benevolence, contrasting Him with shifting celestial shadows.',
    difficulty: 'Mini-boss',
    stage: 8, stageTitle: 'Scripture Detective', levelTitle: 'Find the Missing Word', timerSeconds: 18
  },

  // Level 38: Similar Words Trap (KJV-specific translation tests)
  {
    level: 38, challengeIndex: 1,
    ref: '1 Corinthians 13:1',
    verseText: 'Though I speak with the tongues of men and of angels, and have not charity, I am become as sounding brass, or a tinkling cymbal.',
    targetWords: ['charity'],
    mode: 0,
    distractors: ['love', 'grace', 'pity'],
    explanation: 'The KJV famously renders agape in 1 Corinthians 13 as "charity", emphasizing benevolent action.',
    difficulty: 'Accessible',
    stage: 8, stageTitle: 'Scripture Detective', levelTitle: 'Similar Words Trap', timerSeconds: 22
  },
  {
    level: 38, challengeIndex: 2,
    ref: 'Philippians 1:27',
    verseText: 'Only let your conversation be as it becometh the gospel of Christ:',
    targetWords: ['conversation'],
    mode: 0,
    distractors: ['conduct', 'manner', 'speech'],
    explanation: 'KJV "conversation" denotes citizenship and total ethical conduct.',
    difficulty: 'Moderate',
    stage: 8, stageTitle: 'Scripture Detective', levelTitle: 'Similar Words Trap', timerSeconds: 22
  },
  {
    level: 38, challengeIndex: 3,
    ref: '1 Thessalonians 4:15',
    verseText: 'For this we say unto you by the word of the Lord, that we which are alive and remain unto the coming of the Lord shall not prevent them which are asleep.',
    targetWords: ['prevent'],
    mode: 0,
    distractors: ['precede', 'hinder', 'surpass'],
    explanation: 'Arch-archaic KJV "prevent" means to go before or precede.',
    difficulty: 'Difficult',
    stage: 8, stageTitle: 'Scripture Detective', levelTitle: 'Similar Words Trap', timerSeconds: 22
  },
  {
    level: 38, challengeIndex: 4,
    ref: 'Ephesians 2:1',
    verseText: 'And you hath he quickened, who were dead in trespasses and sins;',
    targetWords: ['quickened'],
    mode: 0,
    distractors: ['revived', 'awakened', 'healed'],
    explanation: 'KJV "quickened" signifies made spiritually alive from the cemetery of sin.',
    difficulty: 'Very Difficult',
    stage: 8, stageTitle: 'Scripture Detective', levelTitle: 'Similar Words Trap', timerSeconds: 22
  },
  {
    level: 38, challengeIndex: 5,
    ref: '1 Peter 2:9',
    verseText: '...a chosen generation, a royal priesthood, an holy nation, a peculiar people;',
    targetWords: ['peculiar'],
    mode: 0,
    distractors: ['special', 'treasured', 'separate'],
    explanation: 'KJV "peculiar" translates peripoiesis, meaning God\'s specially possessed personal treasure.',
    difficulty: 'Mini-boss',
    stage: 8, stageTitle: 'Scripture Detective', levelTitle: 'Similar Words Trap', timerSeconds: 18
  },

  // Level 39: Complete the Unfamiliar Passage
  {
    level: 39, challengeIndex: 1,
    ref: 'Haggai 2:9',
    verseText: 'The glory of this latter house shall be greater than of the former, saith the LORD of hosts: and in this place will I give peace, saith the LORD of hosts.',
    targetWords: ['glory', 'peace'],
    mode: 2,
    distractors: ['beauty', 'grace', 'rest'],
    explanation: 'Haggai reassures the second temple builders that Christ\'s personal presence will outshine Solomon\'s gold.',
    difficulty: 'Accessible',
    stage: 8, stageTitle: 'Scripture Detective', levelTitle: 'Complete the Unfamiliar Passage', timerSeconds: 22
  },
  {
    level: 39, challengeIndex: 2,
    ref: 'Zephaniah 1:14',
    verseText: 'The great day of the LORD is near, it is near, and hasteth greatly, even the voice of the day of the LORD: the mighty man shall cry there bitterly.',
    targetWords: ['hasteth', 'bitterly'],
    mode: 2,
    distractors: ['cometh', 'loudly', 'sorely'],
    explanation: 'Zephaniah sounds the trumpet of the impending day of wrath upon unrepentant Judah.',
    difficulty: 'Moderate',
    stage: 8, stageTitle: 'Scripture Detective', levelTitle: 'Complete the Unfamiliar Passage', timerSeconds: 22
  },
  {
    level: 39, challengeIndex: 3,
    ref: 'Malachi 4:2',
    verseText: 'But unto you that fear my name shall the Sun of righteousness arise with healing in his wings; and ye shall go forth, and grow up as calves of the stall.',
    targetWords: ['healing', 'wings'],
    mode: 2,
    distractors: ['light', 'rays', 'glory'],
    explanation: 'The messianic dawn promising therapeutic spiritual healing and youthful joy.',
    difficulty: 'Difficult',
    stage: 8, stageTitle: 'Scripture Detective', levelTitle: 'Complete the Unfamiliar Passage', timerSeconds: 22
  },
  {
    level: 39, challengeIndex: 4,
    ref: 'Obadiah 1:15',
    verseText: 'For the day of the LORD is near upon all the heathen: as thou hast done, it shall be done unto thee: thy reward shall return upon thine own head.',
    targetWords: ['heathen', 'head'],
    mode: 2,
    distractors: ['nations', 'house', 'soul'],
    explanation: 'Obadiah pronounces lex talionis upon prideful Edom for gloating over Jerusalem\'s ruin.',
    difficulty: 'Very Difficult',
    stage: 8, stageTitle: 'Scripture Detective', levelTitle: 'Complete the Unfamiliar Passage', timerSeconds: 22
  },
  {
    level: 39, challengeIndex: 5,
    ref: 'Song of Solomon 2:16',
    verseText: 'My beloved is mine, and I am his: he feedeth among the lilies.',
    targetWords: ['beloved', 'lilies'],
    mode: 2,
    distractors: ['friend', 'roses', 'flocks'],
    explanation: 'The intimate mutual possession between the Bride and her heavenly Bridegroom.',
    difficulty: 'Mini-boss',
    stage: 8, stageTitle: 'Scripture Detective', levelTitle: 'Complete the Unfamiliar Passage', timerSeconds: 18
  },

  // Level 40: Scripture Detective Boss
  {
    level: 40, challengeIndex: 1,
    ref: '1 Kings 19:12',
    verseText: 'And after the earthquake a fire; but the LORD was not in the fire: and after the fire a still small voice.',
    targetWords: ['voice'],
    mode: 0,
    distractors: ['whisper', 'sound', 'wind'],
    explanation: 'At Mount Horeb, God speaks to Elijah not in violent upheaval, but in the gentle silence.',
    difficulty: 'Accessible',
    stage: 8, stageTitle: 'Scripture Detective', levelTitle: 'Scripture Detective Boss', timerSeconds: 22
  },
  {
    level: 40, challengeIndex: 2,
    ref: 'Job 19:25',
    verseText: 'For I know that my redeemer liveth, and that he shall stand at the latter day upon the earth:',
    targetWords: ['redeemer', 'liveth'],
    mode: 2,
    distractors: ['Savior', 'cometh', 'reigneth'],
    explanation: 'Job\'s ancient confession of faith in a living personal Goel and bodily resurrection.',
    difficulty: 'Moderate',
    stage: 8, stageTitle: 'Scripture Detective', levelTitle: 'Scripture Detective Boss', timerSeconds: 22
  },
  {
    level: 40, challengeIndex: 3,
    ref: 'Acts 17:28',
    verseText: 'For in him we live, and move, and have our being; as certain also of your own poets have said, For we are also his offspring.',
    targetWords: ['move', 'being'],
    mode: 2,
    distractors: ['walk', 'dwell', 'spirit'],
    explanation: 'Paul\'s Areopagus speech in Athens demonstrating total human dependence on the Creator.',
    difficulty: 'Difficult',
    stage: 8, stageTitle: 'Scripture Detective', levelTitle: 'Scripture Detective Boss', timerSeconds: 22
  },
  {
    level: 40, challengeIndex: 4,
    ref: '1 Timothy 2:5',
    verseText: 'For there is one God, and one mediator between God and men, the man Christ Jesus;',
    targetWords: ['mediator', 'Jesus'],
    mode: 2,
    distractors: ['advocate', 'Lord', 'King'],
    explanation: 'The exclusive mediation of the God-man Christ Jesus reconciling humanity to God.',
    difficulty: 'Very Difficult',
    stage: 8, stageTitle: 'Scripture Detective', levelTitle: 'Scripture Detective Boss', timerSeconds: 22
  },
  {
    level: 40, challengeIndex: 5,
    ref: 'Revelation 21:4',
    verseText: 'And God shall wipe away all tears from their eyes; and there shall be no more death, neither sorrow, nor crying, neither shall there be any more pain: for the former things are passed away.',
    targetWords: ['tears', 'death', 'pain'],
    mode: 2,
    distractors: ['grief', 'curse', 'night'],
    explanation: 'The consummation of redemptive history: the total eradication of sorrow in the New Jerusalem.',
    difficulty: 'Mini-boss',
    stage: 8, stageTitle: 'Scripture Detective', levelTitle: 'Scripture Detective Boss', timerSeconds: 18
  },

  // =========================================================================
  // STAGE 9 — EXPERT SCRIPTURE CHALLENGE (Levels 41–45 · Expert)
  // =========================================================================

  // Level 41: No Options (Mode 3: Type exact word)
  {
    level: 41, challengeIndex: 1,
    ref: 'Deuteronomy 33:27',
    verseText: 'The eternal God is thy refuge, and underneath are the everlasting arms: and he shall thrust out the enemy from before thee; and shall say, Destroy them.',
    targetWords: ['arms'],
    mode: 3,
    explanation: 'Moses\' dying blessing over Asher, assuring Israel of the everlasting arms supporting them.',
    difficulty: 'Accessible',
    stage: 9, stageTitle: 'Expert Scripture Challenge', levelTitle: 'No Options', timerSeconds: 20
  },
  {
    level: 41, challengeIndex: 2,
    ref: 'Psalm 127:1',
    verseText: 'Except the LORD build the house, they labour in vain that build it: except the LORD keep the city, the watchman waketh but in vain.',
    targetWords: ['watchman'],
    mode: 3,
    explanation: 'Solomon warns against self-reliant human labor apart from divine blessing.',
    difficulty: 'Moderate',
    stage: 9, stageTitle: 'Expert Scripture Challenge', levelTitle: 'No Options', timerSeconds: 20
  },
  {
    level: 41, challengeIndex: 3,
    ref: 'Proverbs 16:3',
    verseText: 'Commit thy works unto the LORD, and thy thoughts shall be established.',
    targetWords: ['established'],
    mode: 3,
    explanation: 'Rolling one\'s deeds onto God yields steady, settled counsels and plans.',
    difficulty: 'Difficult',
    stage: 9, stageTitle: 'Expert Scripture Challenge', levelTitle: 'No Options', timerSeconds: 20
  },
  {
    level: 41, challengeIndex: 4,
    ref: 'John 15:13',
    verseText: 'Greater love hath no man than this, that a man lay down his life for his friends.',
    targetWords: ['friends'],
    mode: 3,
    explanation: 'The supreme expression of sacrificial love exemplified on Calvary.',
    difficulty: 'Very Difficult',
    stage: 9, stageTitle: 'Expert Scripture Challenge', levelTitle: 'No Options', timerSeconds: 20
  },
  {
    level: 41, challengeIndex: 5,
    ref: 'Romans 14:8',
    verseText: 'For whether we live, we live unto the Lord; and whether we die, we die unto the Lord: whether we live therefore, or die, we are the Lord\'s.',
    targetWords: ['Lord'],
    mode: 3,
    explanation: 'The total lordship of Christ embracing every dimension of life and death.',
    difficulty: 'Mini-boss',
    stage: 9, stageTitle: 'Expert Scripture Challenge', levelTitle: 'No Options', timerSeconds: 16
  },

  // Level 42: Long Passage Challenge (Mode 2)
  {
    level: 42, challengeIndex: 1,
    ref: '1 Corinthians 15:51-52',
    verseText: 'Behold, I shew you a mystery; We shall not all sleep, but we shall all be changed, In a moment, in the twinkling of an eye, at the last trump:',
    targetWords: ['changed', 'twinkling', 'trump'],
    mode: 2,
    distractors: ['transformed', 'flash', 'shout'],
    explanation: 'Paul reveals the sudden instantaneous transformation of living believers at the final trumpet.',
    difficulty: 'Accessible',
    stage: 9, stageTitle: 'Expert Scripture Challenge', levelTitle: 'Long Passage Challenge', timerSeconds: 20
  },
  {
    level: 42, challengeIndex: 2,
    ref: 'Psalm 103:8',
    verseText: 'The LORD is merciful and gracious, slow to anger, and plenteous in mercy.',
    targetWords: ['gracious', 'plenteous'],
    mode: 2,
    distractors: ['kind', 'abundant', 'rich'],
    explanation: 'David recounts the Sinai revelation of God\'s covenant compassion.',
    difficulty: 'Moderate',
    stage: 9, stageTitle: 'Expert Scripture Challenge', levelTitle: 'Long Passage Challenge', timerSeconds: 20
  },
  {
    level: 42, challengeIndex: 3,
    ref: 'Isaiah 43:2',
    verseText: 'When thou passest through the waters, I will be with thee; and through the rivers, they shall not overflow thee: when thou walkest through the fire, thou shalt not be burned; neither shall the flame kindle upon thee.',
    targetWords: ['waters', 'rivers', 'fire'],
    mode: 2,
    distractors: ['floods', 'flames', 'seas'],
    explanation: 'God\'s pledge of supernatural preservation through figurative waters and fiery ordeals.',
    difficulty: 'Difficult',
    stage: 9, stageTitle: 'Expert Scripture Challenge', levelTitle: 'Long Passage Challenge', timerSeconds: 20
  },
  {
    level: 42, challengeIndex: 4,
    ref: 'Romans 8:31',
    verseText: 'What shall we then say to these things? If God be for us, who can be against us?',
    targetWords: ['God', 'against'],
    mode: 2,
    distractors: ['Christ', 'withstand', 'harm'],
    explanation: 'Paul\'s invincible rhetorical question celebrating God\'s absolute commitment to His people.',
    difficulty: 'Very Difficult',
    stage: 9, stageTitle: 'Expert Scripture Challenge', levelTitle: 'Long Passage Challenge', timerSeconds: 20
  },
  {
    level: 42, challengeIndex: 5,
    ref: 'Ephesians 6:14-15',
    verseText: 'Stand therefore, having your loins girt about with truth, and having on the breastplate of righteousness; And your feet shod with the preparation of the gospel of peace;',
    targetWords: ['truth', 'breastplate', 'shod'],
    mode: 2,
    distractors: ['girdle', 'shield', 'helmet'],
    explanation: 'The panoply of spiritual armor equipping believers for victorious warfare.',
    difficulty: 'Mini-boss',
    stage: 9, stageTitle: 'Expert Scripture Challenge', levelTitle: 'Long Passage Challenge', timerSeconds: 16
  },

  // Level 43: Forgotten Scripture
  {
    level: 43, challengeIndex: 1,
    ref: 'Song of Solomon 8:6',
    verseText: 'Set me as a seal upon thine heart, as a seal upon thine arm: for love is strong as death; jealousy is cruel as the grave: the coals thereof are coals of fire, which hath a most vehement flame.',
    targetWords: ['seal', 'death'],
    mode: 2,
    distractors: ['signet', 'life', 'sword'],
    explanation: 'The invincible tenacity of covenant love outlasting mortal death.',
    difficulty: 'Accessible',
    stage: 9, stageTitle: 'Expert Scripture Challenge', levelTitle: 'Forgotten Scripture', timerSeconds: 20
  },
  {
    level: 43, challengeIndex: 2,
    ref: 'Ecclesiastes 9:11',
    verseText: 'I returned, and saw under the sun, that the race is not to the swift, nor the battle to the strong, neither yet bread to the wise, nor yet riches to men of understanding, nor yet favour to men of skill; but time and chance happeneth to them all.',
    targetWords: ['swift', 'chance'],
    mode: 2,
    distractors: ['fast', 'providence', 'fate'],
    explanation: 'Human endowments cannot guarantee earthly outcomes under the sun.',
    difficulty: 'Moderate',
    stage: 9, stageTitle: 'Expert Scripture Challenge', levelTitle: 'Forgotten Scripture', timerSeconds: 20
  },
  {
    level: 43, challengeIndex: 3,
    ref: 'Proverbs 25:11',
    verseText: 'A word fitly spoken is like apples of gold in pictures of silver.',
    targetWords: ['fitly', 'apples'],
    mode: 2,
    distractors: ['wisely', 'crowns', 'jewels'],
    explanation: 'Appropriate timely speech possesses exquisite artistic beauty and moral worth.',
    difficulty: 'Difficult',
    stage: 9, stageTitle: 'Expert Scripture Challenge', levelTitle: 'Forgotten Scripture', timerSeconds: 20
  },
  {
    level: 43, challengeIndex: 4,
    ref: 'Leviticus 26:3-4',
    verseText: 'If ye walk in my statutes, and keep my commandments, and do them; Then I will give you rain in due season, and the land shall yield her increase, and the trees of the field shall yield their fruit.',
    targetWords: ['statutes', 'increase'],
    mode: 2,
    distractors: ['judgments', 'harvest', 'plenty'],
    explanation: 'Covenant blessing promised to Israel conditional upon national obedience.',
    difficulty: 'Very Difficult',
    stage: 9, stageTitle: 'Expert Scripture Challenge', levelTitle: 'Forgotten Scripture', timerSeconds: 20
  },
  {
    level: 43, challengeIndex: 5,
    ref: 'Deuteronomy 32:2',
    verseText: 'My doctrine shall drop as the rain, my speech shall distil as the dew, as the small rain upon the tender herb, and as the showers upon the grass:',
    targetWords: ['doctrine', 'distil'],
    mode: 2,
    distractors: ['teaching', 'fall', 'pour'],
    explanation: 'Moses begins his grand Song with gentle poetic imagery of refreshing divine instruction.',
    difficulty: 'Mini-boss',
    stage: 9, stageTitle: 'Expert Scripture Challenge', levelTitle: 'Forgotten Scripture', timerSeconds: 16
  },

  // Level 44: Complete Without Hints (Mode 3: Type exact word)
  {
    level: 44, challengeIndex: 1,
    ref: 'Colossians 3:12',
    verseText: 'Put on therefore, as the elect of God, holy and beloved, bowels of mercies, kindness, humbleness of mind, meekness, longsuffering;',
    targetWords: ['kindness'],
    mode: 3,
    explanation: 'The garments of new life fitting the elect of God.',
    difficulty: 'Accessible',
    stage: 9, stageTitle: 'Expert Scripture Challenge', levelTitle: 'Complete Without Hints', timerSeconds: 20
  },
  {
    level: 44, challengeIndex: 2,
    ref: '2 Peter 3:18',
    verseText: 'But grow in grace, and in the knowledge of our Lord and Saviour Jesus Christ. To him be glory both now and for ever. Amen.',
    targetWords: ['knowledge'],
    mode: 3,
    explanation: 'Peter\'s parting charge commanding continuous spiritual development.',
    difficulty: 'Moderate',
    stage: 9, stageTitle: 'Expert Scripture Challenge', levelTitle: 'Complete Without Hints', timerSeconds: 20
  },
  {
    level: 44, challengeIndex: 3,
    ref: 'Jude 1:21',
    verseText: 'Keep yourselves in the love of God, looking for the mercy of our Lord Jesus Christ unto eternal life.',
    targetWords: ['mercy'],
    mode: 3,
    explanation: 'Jude anchors personal preservation in constant expectation of Christ\'s mercy.',
    difficulty: 'Difficult',
    stage: 9, stageTitle: 'Expert Scripture Challenge', levelTitle: 'Complete Without Hints', timerSeconds: 20
  },
  {
    level: 44, challengeIndex: 4,
    ref: '1 Thessalonians 5:23',
    verseText: 'And the very God of peace sanctify you wholly; and I pray God your whole spirit and soul and body be preserved blameless unto the coming of our Lord Jesus Christ.',
    targetWords: ['wholly'],
    mode: 3,
    explanation: 'Paul prays for total tripartite sanctification of spirit, soul, and body.',
    difficulty: 'Very Difficult',
    stage: 9, stageTitle: 'Expert Scripture Challenge', levelTitle: 'Complete Without Hints', timerSeconds: 20
  },
  {
    level: 44, challengeIndex: 5,
    ref: '1 Timothy 1:15',
    verseText: 'This is a faithful saying, and worthy of all acceptation, that Christ Jesus came into the world to save sinners; of whom I am chief.',
    targetWords: ['chief'],
    mode: 3,
    explanation: 'Paul\'s humble testimony acknowledging himself the foremost recipient of grace.',
    difficulty: 'Mini-boss',
    stage: 9, stageTitle: 'Expert Scripture Challenge', levelTitle: 'Complete Without Hints', timerSeconds: 16
  },

  // Level 45: Expert Scripture Boss
  {
    level: 45, challengeIndex: 1,
    ref: 'Romans 11:33',
    verseText: 'O the depth of the riches both of the wisdom and knowledge of God! how unsearchable are his judgments, and his ways past finding out!',
    targetWords: ['depth', 'unsearchable'],
    mode: 2,
    distractors: ['height', 'inscrutable', 'mysteries'],
    explanation: 'Paul\'s awe-struck hymn closing Romans 9–11 on the unfathomable wisdom of God.',
    difficulty: 'Accessible',
    stage: 9, stageTitle: 'Expert Scripture Challenge', levelTitle: 'Expert Scripture Boss', timerSeconds: 20
  },
  {
    level: 45, challengeIndex: 2,
    ref: '1 Corinthians 2:9',
    verseText: 'But as it is written, Eye hath not seen, nor ear heard, neither have entered into the heart of man, the things which God hath prepared for them that love him.',
    targetWords: ['seen', 'heard', 'prepared'],
    mode: 2,
    distractors: ['known', 'conceived', 'stored'],
    explanation: 'Human faculties cannot perceive the glories revealed through the Spirit to believers.',
    difficulty: 'Moderate',
    stage: 9, stageTitle: 'Expert Scripture Challenge', levelTitle: 'Expert Scripture Boss', timerSeconds: 20
  },
  {
    level: 45, challengeIndex: 3,
    ref: 'Ephesians 3:17-18',
    verseText: 'That Christ may dwell in your hearts by faith; that ye, being rooted and grounded in love, May be able to comprehend with all saints what is the breadth, and length, and depth, and height;',
    targetWords: ['rooted', 'breadth', 'height'],
    mode: 2,
    distractors: ['settled', 'extent', 'majesty'],
    explanation: 'Paul\'s soaring petition that believers grasp the multi-dimensional love of Christ.',
    difficulty: 'Difficult',
    stage: 9, stageTitle: 'Expert Scripture Challenge', levelTitle: 'Expert Scripture Boss', timerSeconds: 20
  },
  {
    level: 45, challengeIndex: 4,
    ref: 'Philippians 1:6',
    verseText: 'Being confident of this very thing, that he which hath begun a good work in you will perform it until the day of Jesus Christ:',
    targetWords: ['confident', 'perform'],
    mode: 2,
    distractors: ['assured', 'perfect', 'complete'],
    explanation: 'God guarantees the final consummation of the saving work He inaugurates.',
    difficulty: 'Very Difficult',
    stage: 9, stageTitle: 'Expert Scripture Challenge', levelTitle: 'Expert Scripture Boss', timerSeconds: 20
  },
  {
    level: 45, challengeIndex: 5,
    ref: '2 Corinthians 3:18',
    verseText: 'But we all, with open face beholding as in a glass the glory of the Lord, are changed into the same image from glory to glory, even as by the Spirit of the Lord.',
    targetWords: ['beholding', 'glass', 'image'],
    mode: 2,
    distractors: ['gazing', 'mirror', 'likeness'],
    explanation: 'Progressive Christ-like transformation wrought by the Spirit through contemplative communion with Christ.',
    difficulty: 'Mini-boss',
    stage: 9, stageTitle: 'Expert Scripture Challenge', levelTitle: 'Expert Scripture Boss', timerSeconds: 16
  },

  // =========================================================================
  // STAGE 10 — ULTIMATE SCRIPTURE MASTER (Levels 46–50 · Master)
  // =========================================================================

  // Level 46: The Hidden Verse (Mode 5: Hidden reference)
  {
    level: 46, challengeIndex: 1,
    ref: 'Isaiah 6:8',
    verseText: 'Also I heard the voice of the Lord, saying, Whom shall I send, and who will go for us? Then said I, Here am I; send me.',
    targetWords: ['send'],
    mode: 5,
    distractors: ['call', 'choose', 'appoint'],
    explanation: 'Isaiah responds with prompt self-dedication to the heavenly commission.',
    difficulty: 'Accessible',
    stage: 10, stageTitle: 'Ultimate Scripture Master', levelTitle: 'The Hidden Verse', timerSeconds: 20
  },
  {
    level: 46, challengeIndex: 2,
    ref: 'Jeremiah 33:3',
    verseText: 'Call unto me, and I will answer thee, and shew thee great and mighty things, which thou knowest not.',
    targetWords: ['mighty'],
    mode: 5,
    distractors: ['secret', 'hidden', 'wondrous'],
    explanation: 'God invites Jeremiah in the court of the prison to petition Him for revelation.',
    difficulty: 'Moderate',
    stage: 10, stageTitle: 'Ultimate Scripture Master', levelTitle: 'The Hidden Verse', timerSeconds: 20
  },
  {
    level: 46, challengeIndex: 3,
    ref: 'Micah 7:18',
    verseText: 'Who is a God like unto thee, that pardoneth iniquity, and passeth by the transgression of the remnant of his heritage? he retaineth not his anger for ever, because he delighteth in mercy.',
    targetWords: ['delighteth'],
    mode: 5,
    distractors: ['rejoiceth', 'aboundeth', 'resteth'],
    explanation: 'Micah marvels at the unmatched pardoning mercy of God toward His remnant.',
    difficulty: 'Difficult',
    stage: 10, stageTitle: 'Ultimate Scripture Master', levelTitle: 'The Hidden Verse', timerSeconds: 20
  },
  {
    level: 46, challengeIndex: 4,
    ref: 'Nahum 1:3',
    verseText: 'The LORD is slow to anger, and great in power, and will not at all acquit the wicked: the LORD hath his way in the whirlwind and in the storm, and the clouds are the dust of his feet.',
    targetWords: ['whirlwind'],
    mode: 5,
    distractors: ['tempest', 'wilderness', 'heavens'],
    explanation: 'Nahum depicts the awesome majesty of God marching in meteorological grandeur.',
    difficulty: 'Very Difficult',
    stage: 10, stageTitle: 'Ultimate Scripture Master', levelTitle: 'The Hidden Verse', timerSeconds: 20
  },
  {
    level: 46, challengeIndex: 5,
    ref: 'Habakkuk 1:13',
    verseText: 'Thou art of purer eyes than to behold evil, and canst not look on iniquity: wherefore lookest thou upon them that deal treacherously...',
    targetWords: ['purer'],
    mode: 5,
    distractors: ['holier', 'cleaner', 'clearer'],
    explanation: 'Habakkuk struggles with the moral problem of holy God employing wicked Babylon to chastise Judah.',
    difficulty: 'Mini-boss',
    stage: 10, stageTitle: 'Ultimate Scripture Master', levelTitle: 'The Hidden Verse', timerSeconds: 16
  },

  // Level 47: Old Testament Meets New Testament (Prophecy and fulfillment)
  {
    level: 47, challengeIndex: 1,
    ref: 'Psalm 22:1',
    verseText: 'My God, my God, why hast thou forsaken me? why art thou so far from helping me, and from the words of my roaring?',
    targetWords: ['forsaken', 'roaring'],
    mode: 2,
    distractors: ['abandoned', 'crying', 'grief'],
    explanation: 'David\'s prophetic lament uttered by the Lord Jesus upon the cross of Golgotha.',
    difficulty: 'Accessible',
    stage: 10, stageTitle: 'Ultimate Scripture Master', levelTitle: 'Old Testament Meets New Testament', timerSeconds: 20
  },
  {
    level: 47, challengeIndex: 2,
    ref: 'Isaiah 7:14',
    verseText: 'Therefore the Lord himself shall give you a sign; Behold, a virgin shall conceive, and bear a son, and shall call his name Immanuel.',
    targetWords: ['sign', 'virgin', 'Immanuel'],
    mode: 2,
    distractors: ['wonder', 'maiden', 'Jesus'],
    explanation: 'The virgin birth prophecy quoted in Matthew 1:23 confirming the Incarnation.',
    difficulty: 'Moderate',
    stage: 10, stageTitle: 'Ultimate Scripture Master', levelTitle: 'Old Testament Meets New Testament', timerSeconds: 20
  },
  {
    level: 47, challengeIndex: 3,
    ref: 'Micah 5:2',
    verseText: 'But thou, Bethlehem Ephratah, though thou be little among the thousands of Judah, yet out of thee shall he come forth unto me that is to be ruler in Israel; whose goings forth have been from of old, from everlasting.',
    targetWords: ['ruler', 'everlasting'],
    mode: 2,
    distractors: ['king', 'ancient', 'glory'],
    explanation: 'The prophecy locating the birthplace and pre-existence of the Messiah in Bethlehem.',
    difficulty: 'Difficult',
    stage: 10, stageTitle: 'Ultimate Scripture Master', levelTitle: 'Old Testament Meets New Testament', timerSeconds: 20
  },
  {
    level: 47, challengeIndex: 4,
    ref: 'Jeremiah 31:31',
    verseText: 'Behold, the days come, saith the LORD, that I will make a new covenant with the house of Israel, and with the house of Judah:',
    targetWords: ['new', 'covenant'],
    mode: 2,
    distractors: ['everlasting', 'testament', 'promise'],
    explanation: 'The foundational New Covenant oracle fulfilled in Christ\'s blood and cited in Hebrews 8.',
    difficulty: 'Very Difficult',
    stage: 10, stageTitle: 'Ultimate Scripture Master', levelTitle: 'Old Testament Meets New Testament', timerSeconds: 20
  },
  {
    level: 47, challengeIndex: 5,
    ref: 'Malachi 3:1',
    verseText: 'Behold, I will send my messenger, and he shall prepare the way before me: and the Lord, whom ye seek, shall suddenly come to his temple, even the messenger of the covenant, whom ye delight in: behold, he shall come, saith the LORD of hosts.',
    targetWords: ['messenger', 'suddenly', 'temple'],
    mode: 2,
    distractors: ['prophet', 'quickly', 'sanctuary'],
    explanation: 'The herald prophecy applied to John the Baptist preparing the way for Christ.',
    difficulty: 'Mini-boss',
    stage: 10, stageTitle: 'Ultimate Scripture Master', levelTitle: 'Old Testament Meets New Testament', timerSeconds: 16
  },

  // Level 48: The Ultimate Memory Test (Multi-gap recall)
  {
    level: 48, challengeIndex: 1,
    ref: 'Psalm 119:9',
    verseText: 'Wherewithal shall a young man cleanse his way? by taking heed thereto according to thy word.',
    targetWords: ['cleanse', 'heed'],
    mode: 2,
    distractors: ['purify', 'guard', 'truth'],
    explanation: 'The secret of youthful moral purity: alignment with God\'s word.',
    difficulty: 'Accessible',
    stage: 10, stageTitle: 'Ultimate Scripture Master', levelTitle: 'The Ultimate Memory Test', timerSeconds: 18
  },
  {
    level: 48, challengeIndex: 2,
    ref: 'Matthew 5:16',
    verseText: 'Let your light so shine before men, that they may see your good works, and glorify your Father which is in heaven.',
    targetWords: ['shine', 'glorify'],
    mode: 2,
    distractors: ['burn', 'praise', 'honor'],
    explanation: 'Good works are to radiate visibly so that glory rebounds exclusively to the Father.',
    difficulty: 'Moderate',
    stage: 10, stageTitle: 'Ultimate Scripture Master', levelTitle: 'The Ultimate Memory Test', timerSeconds: 18
  },
  {
    level: 48, challengeIndex: 3,
    ref: 'Romans 6:4',
    verseText: 'Therefore we are buried with him by baptism into death: that like as Christ was raised up from the dead by the glory of the Father, even so we also should walk in newness of life.',
    targetWords: ['buried', 'baptism', 'newness'],
    mode: 2,
    distractors: ['risen', 'grace', 'power'],
    explanation: 'Spiritual baptism unites the believer with Christ\'s burial and bodily resurrection.',
    difficulty: 'Difficult',
    stage: 10, stageTitle: 'Ultimate Scripture Master', levelTitle: 'The Ultimate Memory Test', timerSeconds: 18
  },
  {
    level: 48, challengeIndex: 4,
    ref: 'Galatians 5:16',
    verseText: 'This I say then, Walk in the Spirit, and ye shall not fulfil the lust of the flesh.',
    targetWords: ['Spirit', 'fulfil', 'flesh'],
    mode: 2,
    distractors: ['truth', 'obey', 'world'],
    explanation: 'Active submission to the Holy Spirit renders impossible the completion of carnal lusts.',
    difficulty: 'Very Difficult',
    stage: 10, stageTitle: 'Ultimate Scripture Master', levelTitle: 'The Ultimate Memory Test', timerSeconds: 18
  },
  {
    level: 48, challengeIndex: 5,
    ref: '2 Timothy 2:15',
    verseText: 'Study to shew thyself approved unto God, a workman that needeth not to be ashamed, rightly dividing the word of truth.',
    targetWords: ['approved', 'ashamed', 'rightly'],
    mode: 2,
    distractors: ['faithful', 'fearful', 'truly'],
    explanation: 'Paul commands rigorous biblical study and precise exegetical handling of Scripture.',
    difficulty: 'Mini-boss',
    stage: 10, stageTitle: 'Ultimate Scripture Master', levelTitle: 'The Ultimate Memory Test', timerSeconds: 15
  },

  // Level 49: Complete the Difficult Passage
  {
    level: 49, challengeIndex: 1,
    ref: 'Hebrews 1:1-2',
    verseText: 'God, who at sundry times and in divers manners spake in time past unto the fathers by the prophets, Hath in these last days spoken unto us by his Son, whom he hath appointed heir of all things, by whom also he made the worlds;',
    targetWords: ['sundry', 'manners', 'heir'],
    mode: 2,
    distractors: ['ancient', 'ways', 'Lord'],
    explanation: 'The majestic prologue of Hebrews contrasting fragmented past revelation with the climax in the Son.',
    difficulty: 'Accessible',
    stage: 10, stageTitle: 'Ultimate Scripture Master', levelTitle: 'Complete the Difficult Passage', timerSeconds: 18
  },
  {
    level: 49, challengeIndex: 2,
    ref: '1 Peter 1:3-4',
    verseText: 'Blessed be the God and Father of our Lord Jesus Christ, which according to his abundant mercy hath begotten us again unto a lively hope by the resurrection of Jesus Christ from the dead, To an inheritance incorruptible, and undefiled, and that fadeth not away, reserved in heaven for you,',
    targetWords: ['lively', 'incorruptible', 'reserved'],
    mode: 2,
    distractors: ['living', 'immortal', 'prepared'],
    explanation: 'Peter extols the living hope of resurrection and the unblemished celestial inheritance.',
    difficulty: 'Moderate',
    stage: 10, stageTitle: 'Ultimate Scripture Master', levelTitle: 'Complete the Difficult Passage', timerSeconds: 18
  },
  {
    level: 49, challengeIndex: 3,
    ref: 'Colossians 1:9-10',
    verseText: 'For this cause we also... do not cease to pray for you, and to desire that ye might be filled with the knowledge of his will in all wisdom and spiritual understanding; That ye might walk worthy of the Lord unto all pleasing, being fruitful in every good work,',
    targetWords: ['wisdom', 'worthy', 'fruitful'],
    mode: 2,
    distractors: ['truth', 'holy', 'active'],
    explanation: 'Paul\'s apostolic prayer for spiritual discernment issuing in worthy, fruitful conduct.',
    difficulty: 'Difficult',
    stage: 10, stageTitle: 'Ultimate Scripture Master', levelTitle: 'Complete the Difficult Passage', timerSeconds: 18
  },
  {
    level: 49, challengeIndex: 4,
    ref: '2 Thessalonians 2:13',
    verseText: 'But we are bound to give thanks alway to God for you, brethren beloved of the Lord, because God hath from the beginning chosen you to salvation through sanctification of the Spirit and belief of the truth:',
    targetWords: ['chosen', 'sanctification', 'belief'],
    mode: 2,
    distractors: ['called', 'holiness', 'faith'],
    explanation: 'Paul roots gratitude in sovereign election linked inseparable to sanctification and faith.',
    difficulty: 'Very Difficult',
    stage: 10, stageTitle: 'Ultimate Scripture Master', levelTitle: 'Complete the Difficult Passage', timerSeconds: 18
  },
  {
    level: 49, challengeIndex: 5,
    ref: 'Titus 3:4-5',
    verseText: 'But after that the kindness and love of God our Saviour toward man appeared, Not by works of righteousness which we have done, but according to his mercy he saved us, by the washing of regeneration, and renewing of the Holy Ghost;',
    targetWords: ['kindness', 'mercy', 'washing'],
    mode: 2,
    distractors: ['grace', 'love', 'cleansing'],
    explanation: 'Paul contrasts unmerited divine mercy with human works, emphasizing renewal by the Holy Spirit.',
    difficulty: 'Mini-boss',
    stage: 10, stageTitle: 'Ultimate Scripture Master', levelTitle: 'Complete the Difficult Passage', timerSeconds: 15
  },

  // Level 50: Scripture Completion Master (Grand Finale Boss)
  {
    level: 50, challengeIndex: 1,
    ref: 'John 1:1-2',
    verseText: 'In the beginning was the Word, and the Word was with God, and the Word was God. The same was in the beginning with God.',
    targetWords: ['Word', 'God'],
    mode: 2,
    distractors: ['Light', 'Lord', 'Life'],
    explanation: 'The immortal opening of John\'s Gospel establishing the eternal deity and distinct personhood of the Logos.',
    difficulty: 'Accessible',
    stage: 10, stageTitle: 'Ultimate Scripture Master', levelTitle: 'Scripture Completion Master', timerSeconds: 18
  },
  {
    level: 50, challengeIndex: 2,
    ref: 'Revelation 1:8',
    verseText: 'I am Alpha and Omega, the beginning and the ending, saith the Lord, which is, and which was, and which is to come, the Almighty.',
    targetWords: ['Alpha', 'Omega', 'Almighty'],
    mode: 2,
    distractors: ['First', 'Last', 'King'],
    explanation: 'The self-designation of the sovereign, self-existent Lord across all ages.',
    difficulty: 'Moderate',
    stage: 10, stageTitle: 'Ultimate Scripture Master', levelTitle: 'Scripture Completion Master', timerSeconds: 18
  },
  {
    level: 50, challengeIndex: 3,
    ref: 'Isaiah 40:8',
    verseText: 'The grass withereth, the flower fadeth: but the word of our God shall stand for ever.',
    targetWords: ['withereth', 'fadeth', 'stand'],
    mode: 2,
    distractors: ['perisheth', 'dieth', 'remain'],
    explanation: 'The triumph of God\'s eternal word outlasting all transitory flesh and worldly glory.',
    difficulty: 'Difficult',
    stage: 10, stageTitle: 'Ultimate Scripture Master', levelTitle: 'Scripture Completion Master', timerSeconds: 18
  },
  {
    level: 50, challengeIndex: 4,
    ref: '1 Corinthians 15:55-57',
    verseText: 'O death, where is thy sting? O grave, where is thy victory? The sting of death is sin; and the strength of sin is the law. But thanks be to God, which giveth us the victory through our Lord Jesus Christ.',
    targetWords: ['sting', 'victory', 'strength'],
    mode: 2,
    distractors: ['power', 'triumph', 'curse'],
    explanation: 'The apostolic taunt over conquered death and sin through the resurrection of Christ.',
    difficulty: 'Very Difficult',
    stage: 10, stageTitle: 'Ultimate Scripture Master', levelTitle: 'Scripture Completion Master', timerSeconds: 18
  },
  {
    level: 50, challengeIndex: 5,
    ref: 'Revelation 22:12-14',
    verseText: 'And, behold, I come quickly; and my reward is with me, to give every man according as his work shall be. I am Alpha and Omega, the beginning and the end, the first and the last. Blessed are they that do his commandments, that they may have right to the tree of life, and may enter in through the gates into the city.',
    targetWords: ['reward', 'Alpha', 'tree'],
    mode: 2,
    distractors: ['portion', 'First', 'water'],
    explanation: 'The grand finale of Holy Scripture: the return of Christ with reward and entry into the celestial city.',
    difficulty: 'Mini-boss',
    stage: 10, stageTitle: 'Ultimate Scripture Master', levelTitle: 'Scripture Completion Master', timerSeconds: 15
  },
];
