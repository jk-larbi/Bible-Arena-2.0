import * as fs from 'fs';
import * as path from 'path';

const file = path.join(process.cwd(), 'src', 'components', 'game', 'BaseGame.tsx');
let content = fs.readFileSync(file, 'utf8');

// 1. Add state variable
content = content.replace(
  "  const [riddleTyped, setRiddleTyped] = useState('');",
  "  const [riddleTyped, setRiddleTyped] = useState('');\n  const [memoryTyped, setMemoryTyped] = useState('');"
);

// 2. Add reset
content = content.replace(
  "    setRiddleTyped('');",
  "    setRiddleTyped('');\n    setMemoryTyped('');"
);

// 3. Update memoryCards effect to skip curated
content = content.replace(
  "      if (gameId === 'bible-memory-challenge') {",
  "      if (gameId === 'bible-memory-challenge' && !currentChallenge.metadata?.curated) {"
);

// 4. Update supportsHints
content = content.replace(
  "'complete-the-scripture', 'scripture-scramble'].includes(gameId);",
  "'complete-the-scripture', 'scripture-scramble', 'bible-memory-challenge'].includes(gameId);"
);

// 5. Add hint logic
const hintTarget = "    if (gameId === 'bible-geography-quest') {";
const hintAddition = `    if (gameId === 'bible-memory-challenge') {
      if (metadata.hint) return \`Memory Clue: \${metadata.hint}\`;
      const answer = String(currentChallenge.correct_answer || '');
      return requestedLevel === 1
        ? \`The answer begins with “\${answer.charAt(0)}” and contains \${answer.length} characters.\`
        : \`Scripture Reference: \${currentChallenge.reference}. Translation: \${metadata.translation || 'KJV'}.\`;
    }

    if (gameId === 'bible-geography-quest') {`;

content = content.replace(hintTarget, hintAddition);

// 6. Add curated Bible Memory Challenge rendering before legacy memoryCards check
const renderTarget = "    // 7. BIBLE MEMORY CHALLENGE (Flip-card pair matching)";
const renderAddition = `    // 7A. BIBLE MEMORY CHALLENGE (Curated Scripture Memory & Study Quest)
    if (gameId === 'bible-memory-challenge' && currentChallenge.metadata?.curated) {
      const meta = currentChallenge.metadata || {};
      const isTyped = meta.is_typed;
      const studyMode = meta.study_mode;
      const passage = meta.passage;

      const handleMemorySubmit = (answerStr: string) => {
        const clean = answerStr.trim().toLowerCase();
        const correct = String(currentChallenge.correct_answer || '').trim().toLowerCase();
        const alts = ((meta.acceptedAlternatives || []) as string[]).map((a) => a.trim().toLowerCase());
        const isMatch = clean === correct || alts.includes(clean);
        settleAnswer(isMatch ? currentChallenge.correct_answer : answerStr.trim());
      };

      return (
        <div className="space-y-4">
          <div className="rounded-2xl border border-emerald-800/15 bg-emerald-50 p-5 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800">
              <span className="flex items-center gap-1.5">
                <span className="text-xl">🧠</span>
                Stage {meta.stage || 1} · {meta.stage_title || 'Memory Foundations'}
              </span>
              {studyMode ? (
                <span className="rounded-full bg-emerald-700/15 px-2.5 py-0.5 text-[11px] font-bold text-emerald-900 flex items-center gap-1">
                  📖 Deep Scripture Study · {meta.timerSeconds || 60}s
                </span>
              ) : (
                <span className="text-[11px] font-medium text-emerald-800/70">
                  {meta.level_theme || 'Scripture Memory'}
                </span>
              )}
            </div>

            {passage && passage !== currentChallenge.question_text && (
              <div className="mt-3 rounded-xl border border-emerald-900/10 bg-white/80 p-4 font-serif text-base italic leading-relaxed text-[#171B24]">
                “{passage}”
              </div>
            )}

            <p className="mt-3 font-serif text-lg font-semibold leading-relaxed text-[#171B24] whitespace-pre-line">
              {currentChallenge.question_text}
            </p>

            <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-[#5A6275]">
              <span>Translation: <strong className="text-emerald-900 font-semibold">{meta.translation || 'KJV'}</strong></span>
              <span>•</span>
              <span>{isTyped ? 'Type exact wording from memory' : 'Choose the exact Scripture wording'}</span>
            </div>
          </div>

          {isTyped ? (
            <div className="rounded-2xl border border-emerald-800/15 bg-white p-4 shadow-sm space-y-3">
              <label htmlFor="memory-typed-input" className="block text-xs font-bold uppercase tracking-wider text-emerald-800">
                ✍️ Type Scripture Answer From Memory:
              </label>
              <div className="flex gap-2">
                <input
                  id="memory-typed-input"
                  type="text"
                  disabled={reveal !== null}
                  value={memoryTyped}
                  onChange={(e) => setMemoryTyped(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && memoryTyped.trim() && reveal === null) {
                      handleMemorySubmit(memoryTyped);
                    }
                  }}
                  placeholder="Type missing word, phrase, or reference..."
                  className="flex-1 rounded-xl border border-emerald-800/20 bg-emerald-50/50 px-4 py-3 font-serif text-base font-semibold text-[#171B24] placeholder-slate-400 focus:border-emerald-700 focus:outline-none"
                />
                <button
                  type="button"
                  disabled={reveal !== null || !memoryTyped.trim()}
                  onClick={() => handleMemorySubmit(memoryTyped)}
                  className="rounded-xl bg-emerald-800 px-6 py-3 font-bold text-white hover:bg-emerald-900 disabled:opacity-40 transition-colors"
                >
                  Submit
                </button>
              </div>
              <p className="text-[11px] text-slate-500">
                Tip: Press Enter to submit. Exact Scripture wording verified against KJV.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {currentChallenge.options.map((option) => (
                <button
                  key={option}
                  type="button"
                  disabled={reveal !== null}
                  onClick={() => settleAnswer(option)}
                  className="min-h-14 rounded-xl border border-emerald-900/15 bg-white p-4 text-left font-serif font-bold text-[#171B24] hover:border-emerald-700 hover:bg-emerald-50/40 disabled:opacity-50 transition-all flex items-center gap-2"
                >
                  <span className="text-emerald-700 text-sm">✦</span>
                  <span>{option}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      );
    }

    // 7B. BIBLE MEMORY CHALLENGE (Flip-card pair matching)`;

content = content.replace(renderTarget, renderAddition);

fs.writeFileSync(file, content, 'utf8');
console.log('Successfully patched BaseGame.tsx for bible-memory-challenge!');
