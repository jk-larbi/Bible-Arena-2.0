import * as fs from 'fs';
import * as path from 'path';

const filePath = path.resolve(process.cwd(), 'src/components/game/BaseGame.tsx');
let code = fs.readFileSync(filePath, 'utf-8');

// 1. Add 'verse-builder' to supportsHints
if (!code.includes("'verse-builder', 'bible-crossword'")) {
  code = code.replace(
    "const supportsHints = ['bible-crossword'",
    "const supportsHints = ['verse-builder', 'bible-crossword'"
  );
  console.log('Added verse-builder to supportsHints');
}

// 2. Add hint handler for verse-builder
if (!code.includes("if (gameId === 'verse-builder')")) {
  const hintMarker = "if (gameId === 'bible-crossword') {";
  const hintCode = `if (gameId === 'verse-builder') {
      if (metadata.hint1 && requestedLevel === 1) return metadata.hint1;
      if (metadata.hint2 && requestedLevel >= 2) return metadata.hint2;
      return requestedLevel === 1
        ? \`Scripture reference: \${currentChallenge.reference}. Examine the exact wording.\`
        : \`Second clue: \${currentChallenge.explanation}\`;
    }

    if (gameId === 'bible-crossword') {`;
  code = code.replace(hintMarker, hintCode);
  console.log('Added verse-builder hint logic');
}

// 3. Add instructions banner for verse-builder
if (!code.includes("How to play — Verse Builder")) {
  const whoSaidItMarker = "{gameId === 'who-said-it' && (";
  const vbBanner = `{gameId === 'verse-builder' && (
          <section className="mb-4 rounded-2xl border border-[#3156C9]/15 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-[#171B24] font-extrabold text-lg mb-2">
              <HelpCircle className="h-5 w-5 text-[#3156C9]" />
              How to play — Verse Builder
            </div>
            <ol className="list-decimal pl-5 space-y-1.5 text-sm leading-relaxed text-[#394150]">
              <li>Each level has five Scripture reconstruction challenges across 10 structured stages.</li>
              <li><strong>Arrange the Words:</strong> tap the word tiles in sequence to reconstruct verses. Tap placed tiles to remove them.</li>
              <li><strong>The Word Trap:</strong> detect incorrect and substituted words within familiar and unfamiliar verses.</li>
              <li><strong>Scripture Continuation:</strong> supply what comes next in famous and less familiar passages.</li>
              <li><strong>Passage Reconstruction:</strong> reorder scrambled clauses and sections into biblical sequence.</li>
              <li><strong>Manual Typed Answers:</strong> type missing words, phrases, or references directly with punctuation and case tolerance.</li>
              <li><strong>Deep Scripture Study:</strong> master multi-verse passages from James, Romans, Isaiah, Psalm 119, and Hebrews.</li>
              <li>Read the explanation and full verse after each answer. Hints cost marks.</li>
            </ol>
            <p className="mt-3 text-xs leading-relaxed text-[#687386]">Translation: King James Version (KJV). Match the exact wording, including original spelling.</p>
          </section>
        )}
        {gameId === 'who-said-it' && (`;
  code = code.replace(whoSaidItMarker, vbBanner);
  console.log('Added verse-builder instructions banner');
}

// 4. Replace renderMechanicUI for verse-builder
const vbStart = "// 2. VERSE BUILDER (Word tile assembly)\n    if (gameId === 'verse-builder') {";
const vbStartAlt = "// 2. VERSE BUILDER (Word tile assembly)\r\n    if (gameId === 'verse-builder') {";

const newVBUI = `// 2. VERSE BUILDER (Multi-mechanic: Tiles, Typed, ABCD, and Sequences)
    if (gameId === 'verse-builder') {
      const isTyped = Boolean(currentChallenge.metadata?.is_typed);
      const isTiles = Boolean(currentChallenge.metadata?.is_tiles);
      const words = currentChallenge.options;
      const sections: string[] = Array.isArray(currentChallenge.metadata?.sections)
        ? currentChallenge.metadata.sections
        : [];

      // A. TYPED INPUT MODE
      if (isTyped) {
        return (
          <div className="space-y-4">
            <div className="rounded-2xl border border-[#3156C9]/20 bg-[#EEF2FF] p-5 text-center">
              <p className="text-xs font-bold uppercase tracking-wider text-[#3156C9]">King James Version (KJV)</p>
              {currentChallenge.metadata?.verse_text && (
                <p className="mt-3 font-serif text-lg sm:text-xl font-semibold leading-relaxed text-[#171B24]">
                  {currentChallenge.metadata.verse_text}
                </p>
              )}
              <p className="mt-2 text-xs font-bold text-[#5A6275]">Reference: {currentChallenge.reference}</p>
            </div>

            <div className="space-y-3">
              <input
                type="text"
                value={verseTyped}
                disabled={reveal !== null}
                onChange={(e) => setVerseTyped(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && verseTyped.trim() && reveal === null) {
                    settleAnswer(verseTyped.trim());
                  }
                }}
                placeholder="Type the exact missing word(s), phrase, or reference..."
                className="w-full rounded-xl border border-[#171B24]/20 bg-white px-4 py-3.5 text-base font-medium text-[#171B24] outline-none focus:border-[#3156C9] focus:ring-2 focus:ring-[#3156C9]/20"
              />
              <button
                type="button"
                disabled={reveal !== null || !verseTyped.trim()}
                onClick={() => settleAnswer(verseTyped.trim())}
                className="w-full rounded-xl bg-[#D66B3D] px-6 py-3 font-bold text-white hover:bg-[#c25a2c] disabled:opacity-40 transition-colors shadow-sm cursor-pointer"
              >
                Submit Answer
              </button>
            </div>
          </div>
        );
      }

      // B. WORD TILE ASSEMBLY MODE
      if (isTiles || words.length > 4) {
        const builtSentence = versePicked.map((idx) => words[idx]).join(' ');
        return (
          <div className="space-y-6">
            <div className="min-h-[88px] p-4 rounded-2xl bg-[#F3EBDD] border-2 border-dashed border-[#171B24]/20 flex flex-wrap items-center justify-center gap-2">
              {versePicked.length === 0 ? (
                <span className="text-sm text-[#171B24]/50">Tap word tiles in sequence to assemble the verse</span>
              ) : (
                versePicked.map((wIdx, pos) => (
                  <button
                    key={\`vb-picked-\${pos}\`}
                    disabled={reveal !== null}
                    onClick={() => setVersePicked(versePicked.filter((_, i) => i !== pos))}
                    className="px-3.5 py-2 rounded-xl bg-[#171B24] text-white text-sm font-semibold shadow cursor-pointer hover:bg-red-900 transition-colors"
                    title="Tap to remove"
                  >
                    {words[wIdx]}
                  </button>
                ))
              )}
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              {words.map((word, idx) => {
                const used = versePicked.includes(idx);
                return (
                  <button
                    key={\`vb-pool-\${idx}\`}
                    disabled={used || reveal !== null}
                    onClick={() => {
                      const next = [...versePicked, idx];
                      setVersePicked(next);
                      if (next.length === words.length) {
                        settleAnswer(next.map((i) => words[i]).join(' '));
                      }
                    }}
                    className={\`px-3.5 py-2.5 rounded-xl text-sm font-semibold border transition-all cursor-pointer \${
                      used
                        ? 'bg-stone-200 text-stone-400 opacity-40 cursor-not-allowed'
                        : 'bg-white text-[#171B24] border-[#171B24]/20 hover:bg-[#3156C9] hover:text-white'
                    }\`}
                  >
                    {word}
                  </button>
                );
              })}
            </div>

            <div className="flex justify-center gap-3">
              <button
                disabled={reveal !== null || versePicked.length === 0}
                onClick={() => setVersePicked([])}
                className="px-4 py-2.5 rounded-xl border border-[#171B24]/20 text-xs font-semibold hover:bg-[#F3EBDD] cursor-pointer disabled:opacity-40"
              >
                Reset Tiles
              </button>
              <button
                disabled={reveal !== null || versePicked.length === 0}
                onClick={() => settleAnswer(builtSentence)}
                className="px-6 py-2.5 rounded-xl bg-[#D66B3D] text-white text-sm font-bold cursor-pointer disabled:opacity-40"
              >
                Submit Verse
              </button>
            </div>
          </div>
        );
      }

      // C. MULTIPLE CHOICE MODE (with optional section/trap notice)
      return (
        <div className="space-y-4">
          {sections.length > 0 && (
            <div className="p-4 rounded-2xl bg-[#EEF2FF] border border-[#3156C9]/20 space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-[#3156C9]">Passage Sections to Sequence</div>
              {sections.map((sec, idx) => (
                <div key={idx} className="text-sm text-[#171B24] font-medium pl-3 border-l-2 border-[#3156C9]">
                  <span className="font-bold text-[#3156C9] mr-2">[{idx + 1}]</span> "{sec}"
                </div>
              ))}
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {words.map((option, idx) => {
              const letter = ['A', 'B', 'C', 'D'][idx] || '';
              return (
                <button
                  key={option}
                  type="button"
                  disabled={reveal !== null}
                  onClick={() => settleAnswer(option)}
                  className="min-h-14 rounded-xl border border-[#171B24]/15 bg-white p-4 text-left font-semibold text-[#171B24] hover:border-[#D66B3D] hover:bg-[#FFF8F0] disabled:opacity-50 transition-all flex items-start gap-3 shadow-sm cursor-pointer"
                >
                  <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-[#F3EBDD] text-[#171B24] font-bold text-xs flex items-center justify-center">
                    {letter}
                  </span>
                  <span className="text-sm leading-snug">{option}</span>
                </button>
              );
            })}
          </div>
        </div>
      );
    }`;

// Find old verse-builder block ending before "// BIBLE PUZZLES"
const oldVBRegex = /\/\/\s*2\.\s*VERSE BUILDER[\s\S]*?(?=\/\/\s*BIBLE PUZZLES)/;
if (oldVBRegex.test(code)) {
  code = code.replace(oldVBRegex, newVBUI + '\n\n    ');
  console.log('Replaced verse-builder mechanic UI');
} else {
  console.error('Could not locate old verse-builder mechanic UI block');
}

// 5. Add stage & study badges to question header
if (!code.includes("gameId === 'verse-builder' && currentChallenge.metadata?.stage_title")) {
  const headerMarker = "{gameId === 'complete-the-scripture' && currentChallenge.metadata?.modeLabel && (";
  const vbHeaderBadges = `{gameId === 'verse-builder' && currentChallenge.metadata?.stage_title && (
          <div className="mb-2 flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-1 rounded-lg bg-[#3156C9]/10 text-[#3156C9] font-bold text-xs uppercase tracking-wider">
              Stage {currentChallenge.metadata.stage}: {currentChallenge.metadata.stage_title}
            </span>
            {currentChallenge.metadata.level_title && (
              <span className="px-2.5 py-1 rounded-lg bg-[#D66B3D]/10 text-[#D66B3D] font-bold text-xs">
                {currentChallenge.metadata.level_title}
              </span>
            )}
            {currentChallenge.metadata.study_passage && (
              <span className="px-2.5 py-1 rounded-lg bg-amber-100 text-amber-900 font-bold text-xs">
                📖 Study: {currentChallenge.metadata.study_passage}
              </span>
            )}
          </div>
        )}
        {gameId === 'complete-the-scripture' && currentChallenge.metadata?.modeLabel && (`;
  code = code.replace(headerMarker, vbHeaderBadges);
  console.log('Added verse-builder stage & study badges to challenge header');
}

fs.writeFileSync(filePath, code, 'utf-8');
console.log('BaseGame.tsx patched successfully!');
