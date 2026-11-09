import fs from 'fs';
import path from 'path';

const bgPath = path.resolve('src/components/game/BaseGame.tsx');
let content = fs.readFileSync(bgPath, 'utf-8');
const isCRLF = content.includes('\r\n');
let norm = content.replace(/\r\n/g, '\n');

// 1. Add scripture-scramble to supportsHints
const oldHints = "'complete-the-scripture'].includes(gameId);";
const newHints = "'complete-the-scripture', 'scripture-scramble'].includes(gameId);";
if (norm.includes(oldHints)) {
  norm = norm.replace(oldHints, newHints);
} else {
  console.error('Could not find oldHints');
  process.exit(1);
}

// 2. Add hint resolver for scripture-scramble
const oldHintResolver = "    if (gameId === 'bible-crossword') {";
const newHintResolver = `    if (gameId === 'scripture-scramble') {
      if (requestedLevel === 1) {
        return metadata.hint1 || \`First clue: The answer begins with "\${currentChallenge.correct_answer[0]}" (\${currentChallenge.reference}).\`;
      }
      return metadata.hint2 || \`Second clue: \${currentChallenge.explanation}\`;
    }

    if (gameId === 'bible-crossword') {`;

if (norm.includes(oldHintResolver)) {
  norm = norm.replace(oldHintResolver, newHintResolver);
} else {
  console.error('Could not find oldHintResolver');
  process.exit(1);
}

// 3. Update scripture-scramble block
const oldScrambleBlock = `    // 1. SCRIPTURE SCRAMBLE (Letter tile rearranging)
    if (gameId === 'scripture-scramble') {
      const letters = currentChallenge.options;
      const builtWord = scramblePicked.map((idx) => letters[idx]).join('');
      return (
        <div className="space-y-6">
          <div className="min-h-[64px] p-4 rounded-2xl bg-[#F3EBDD] border-2 border-dashed border-[#171B24]/20 flex flex-wrap items-center justify-center gap-2">
            {scramblePicked.length === 0 ? (
              <span className="text-sm text-[#171B24]/50">Tap scrambled letters below to spell the biblical word</span>
            ) : (
              scramblePicked.map((letterIdx, pos) => (
                <button
                  key={\`picked-\${pos}\`}
                  disabled={reveal !== null}
                  onClick={() => setScramblePicked(scramblePicked.filter((_, i) => i !== pos))}
                  className="w-11 h-12 rounded-xl bg-[#171B24] text-white font-serif font-bold text-lg flex items-center justify-center shadow cursor-pointer"
                >
                  {letters[letterIdx]}
                </button>
              ))
            )}
          </div>

          <div className="flex flex-wrap justify-center gap-2.5">
            {letters.map((char, idx) => {
              const used = scramblePicked.includes(idx);
              return (
                <button
                  key={\`pool-\${idx}\`}
                  disabled={used || reveal !== null}
                  onClick={() => {
                    const next = [...scramblePicked, idx];
                    setScramblePicked(next);
                    const candidate = next.map((i) => letters[i]).join('');
                    if (candidate.length === letters.length) {
                      settleAnswer(candidate);
                    }
                  }}
                  className={\`w-11 h-12 rounded-xl font-serif font-bold text-lg flex items-center justify-center border transition-all cursor-pointer \${
                    used
                      ? 'bg-stone-200 text-stone-400 opacity-40 cursor-not-allowed'
                      : 'bg-white text-[#171B24] border-[#171B24]/20 hover:bg-[#D66B3D] hover:text-white shadow-sm'
                  }\`}
                >
                  {char}
                </button>
              );
            })}
          </div>

          <div className="flex justify-center gap-3">
            <button
              disabled={reveal !== null || scramblePicked.length === 0}
              onClick={() => setScramblePicked([])}
              className="px-4 py-2.5 rounded-xl border border-[#171B24]/20 text-xs font-semibold hover:bg-[#F3EBDD] inline-flex items-center gap-1.5 cursor-pointer disabled:opacity-40"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Clear Letters
            </button>
            <button
              disabled={reveal !== null || builtWord.length === 0}
              onClick={() => settleAnswer(builtWord)}
              className="px-6 py-2.5 rounded-xl bg-[#D66B3D] text-white text-sm font-bold hover:bg-[#c25a2c] cursor-pointer disabled:opacity-40"
            >
              Check Word
            </button>
          </div>
        </div>
      );
    }`;

const newScrambleBlock = `    // 1. SCRIPTURE SCRAMBLE (Letter tile rearranging & Word order assembly)
    if (gameId === 'scripture-scramble') {
      const letters = currentChallenge.options;
      const isWordPuzzle = letters.some((l) => l.length > 1);
      const separator = isWordPuzzle ? ' ' : '';
      const builtWord = scramblePicked.map((idx) => letters[idx]).join(separator);
      return (
        <div className="space-y-6">
          <div className="min-h-[64px] p-4 rounded-2xl bg-[#F3EBDD] border-2 border-dashed border-[#171B24]/20 flex flex-wrap items-center justify-center gap-2">
            {scramblePicked.length === 0 ? (
              <span className="text-sm text-[#171B24]/50">
                {isWordPuzzle ? 'Tap scrambled words below to arrange the phrase in order' : 'Tap scrambled letters below to spell the biblical answer'}
              </span>
            ) : (
              scramblePicked.map((letterIdx, pos) => (
                <button
                  key={\`picked-\${pos}\`}
                  disabled={reveal !== null}
                  onClick={() => setScramblePicked(scramblePicked.filter((_, i) => i !== pos))}
                  className="min-w-11 h-12 px-2.5 rounded-xl bg-[#171B24] text-white font-serif font-bold text-lg flex items-center justify-center shadow cursor-pointer"
                >
                  {letters[letterIdx]}
                </button>
              ))
            )}
          </div>

          <div className="flex flex-wrap justify-center gap-2.5">
            {letters.map((char, idx) => {
              const used = scramblePicked.includes(idx);
              return (
                <button
                  key={\`pool-\${idx}\`}
                  disabled={used || reveal !== null}
                  onClick={() => {
                    const next = [...scramblePicked, idx];
                    setScramblePicked(next);
                    if (next.length === letters.length) {
                      const candidate = next.map((i) => letters[i]).join(separator);
                      settleAnswer(candidate);
                    }
                  }}
                  className={\`min-w-11 h-12 px-2.5 rounded-xl font-serif font-bold text-lg flex items-center justify-center border transition-all cursor-pointer \${
                    used
                      ? 'bg-stone-200 text-stone-400 opacity-40 cursor-not-allowed'
                      : 'bg-white text-[#171B24] border-[#171B24]/20 hover:bg-[#D66B3D] hover:text-white shadow-sm'
                  }\`}
                >
                  {char}
                </button>
              );
            })}
          </div>

          <div className="flex justify-center gap-3">
            <button
              disabled={reveal !== null || scramblePicked.length === 0}
              onClick={() => setScramblePicked([])}
              className="px-4 py-2.5 rounded-xl border border-[#171B24]/20 text-xs font-semibold hover:bg-[#F3EBDD] inline-flex items-center gap-1.5 cursor-pointer disabled:opacity-40"
            >
              <RotateCcw className="w-3.5 h-3.5" /> {isWordPuzzle ? 'Clear Words' : 'Clear Letters'}
            </button>
            <button
              disabled={reveal !== null || builtWord.length === 0}
              onClick={() => settleAnswer(builtWord)}
              className="px-6 py-2.5 rounded-xl bg-[#D66B3D] text-white text-sm font-bold hover:bg-[#c25a2c] cursor-pointer disabled:opacity-40"
            >
              {isWordPuzzle ? 'Check Phrase' : 'Check Word'}
            </button>
          </div>
        </div>
      );
    }`;

if (norm.includes(oldScrambleBlock)) {
  norm = norm.replace(oldScrambleBlock, newScrambleBlock);
} else {
  console.error('Could not find oldScrambleBlock');
  process.exit(1);
}

// 4. Update version check in useEffect for local attempt refresh
const oldVersionCheck = "if (gameId === 'bible-character-quest')";
const newVersionCheck = "if (gameId === 'bible-character-quest' || gameId === 'scripture-scramble')";
norm = norm.replaceAll(oldVersionCheck, newVersionCheck);

const finalContent = isCRLF ? norm.replace(/\n/g, '\r\n') : norm;
fs.writeFileSync(bgPath, finalContent, 'utf-8');
console.log('Successfully patched BaseGame.tsx for scripture-scramble');
