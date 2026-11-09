import fs from 'fs';
import path from 'path';

const file = path.join(process.cwd(), 'src', 'components', 'game', 'BaseGame.tsx');
let content = fs.readFileSync(file, 'utf8');

// 1. Add riddleTyped state
const stateTarget = "const [typedBook, setTypedBook] = useState('');";
const stateRep = "const [typedBook, setTypedBook] = useState('');\n  const [riddleTyped, setRiddleTyped] = useState('');";

if (!content.includes(stateTarget)) {
  throw new Error('stateTarget not found');
}
content = content.replace(stateTarget, stateRep);

// 2. Reset riddleTyped
const resetTarget = "setTypedBook('');";
const resetRep = "setTypedBook('');\n    setRiddleTyped('');";
if (!content.includes(resetTarget)) {
  throw new Error('resetTarget not found');
}
content = content.replace(resetTarget, resetRep);

// 3. Hint handling
const hintTarget = `    if (gameId === 'bible-riddles' || gameId === 'complete-the-scripture') {
      const answer = String(currentChallenge.correct_answer || '');
      return requestedLevel === 1
        ? \`The answer begins with “\${answer.charAt(0)}” and contains \${answer.length} characters.\`
        : \`The answer is “\${answer}”. Use this final clue carefully.\`;
    }`;

const hintRep = `    if (gameId === 'bible-riddles') {
      if (metadata.hint) return \`Riddle Clue: \${metadata.hint}\`;
      const answer = String(currentChallenge.correct_answer || '');
      return requestedLevel === 1
        ? \`The answer begins with “\${answer.charAt(0)}” and contains \${answer.length} characters.\`
        : \`Scripture Reference: \${currentChallenge.reference}. Study the biblical clues carefully.\`;
    }
    if (gameId === 'complete-the-scripture') {
      const answer = String(currentChallenge.correct_answer || '');
      return requestedLevel === 1
        ? \`The answer begins with “\${answer.charAt(0)}” and contains \${answer.length} characters.\`
        : \`The answer is “\${answer}”. Use this final clue carefully.\`;
    }`;

if (content.includes(hintTarget)) {
  content = content.replace(hintTarget, hintRep);
} else {
  const hintTargetCRLF = hintTarget.replace(/\n/g, '\r\n');
  const hintRepCRLF = hintRep.replace(/\n/g, '\r\n');
  if (content.includes(hintTargetCRLF)) {
    content = content.replace(hintTargetCRLF, hintRepCRLF);
  } else {
    throw new Error('hintTarget not found');
  }
}

// 4. Render block for bible-riddles
const renderTarget = `    // 14. BIBLE RIDDLES — solve the riddle before selecting the answer.
    if (gameId === 'bible-riddles') {
      return (
        <div className="space-y-4">
          <div className="rounded-2xl border border-amber-700/20 bg-amber-50 p-6 text-center">
            <p className="text-xs font-bold uppercase tracking-wider text-amber-800">A Biblical Mystery</p>
            <p className="mt-3 font-serif text-xl font-bold leading-relaxed text-[#171B24]">{currentChallenge.question_text}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {currentChallenge.options.map((option) => (
              <button key={option} type="button" disabled={reveal !== null} onClick={() => settleAnswer(option)}
                className="min-h-14 rounded-xl border border-amber-900/15 bg-white p-4 text-left font-bold text-[#171B24] hover:border-amber-700 disabled:opacity-50">
                {option}
              </button>
            ))}
          </div>
        </div>
      );
    }`;

const renderRep = `    // 14. BIBLE RIDDLES — solve the riddle before selecting or typing the answer.
    if (gameId === 'bible-riddles') {
      const isTyped = Boolean(currentChallenge.metadata?.is_typed);
      const clues: string[] = currentChallenge.metadata?.clues || [];
      const stageTitle = currentChallenge.metadata?.stage_title;
      const levelTheme = currentChallenge.metadata?.level_theme;
      const rType = currentChallenge.metadata?.riddle_type;

      return (
        <div className="space-y-4">
          <div className="rounded-2xl border border-amber-700/20 bg-amber-50 p-6 text-left">
            <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-amber-800">
              <span>A Biblical Mystery {stageTitle ? \`• \${stageTitle}\` : ''}</span>
              {rType && (
                <span className="rounded bg-amber-800/10 px-2 py-0.5 text-[10px] text-amber-900 font-mono font-semibold">
                  {rType}
                </span>
              )}
            </div>
            {levelTheme && <p className="mt-1 text-xs text-amber-900/70 font-medium">{levelTheme}</p>}
            <p className="mt-3 font-serif text-lg font-bold leading-relaxed text-[#171B24] whitespace-pre-line">
              {currentChallenge.question_text}
            </p>
            {clues.length > 0 && (
              <div className="mt-4 space-y-1.5 border-t border-amber-900/15 pt-3">
                <p className="text-[11px] font-bold uppercase tracking-wider text-amber-900">Progressive Riddle Clues:</p>
                {clues.map((clue, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-[#171B24]">
                    <span className="text-amber-700 font-bold">•</span>
                    <span>{clue}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {isTyped ? (
            <div className="space-y-3 rounded-2xl border border-amber-700/20 bg-amber-50/80 p-5">
              <label className="block text-sm font-bold text-[#171B24]">
                Enter your biblical answer:
                <input
                  type="text"
                  value={riddleTyped}
                  disabled={reveal !== null}
                  onChange={(e) => setRiddleTyped(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && riddleTyped.trim() && reveal === null) {
                      settleAnswer(riddleTyped.trim());
                    }
                  }}
                  placeholder="Type name, place, object, event, or two answers..."
                  className="mt-2 w-full rounded-xl border border-amber-900/20 bg-white px-4 py-3 font-serif text-lg font-bold text-[#171B24] outline-none transition focus:border-amber-700 focus:ring-2 focus:ring-amber-700/20"
                  autoFocus
                />
              </label>
              <button
                type="button"
                disabled={reveal !== null || !riddleTyped.trim()}
                onClick={() => settleAnswer(riddleTyped.trim())}
                className="w-full rounded-xl bg-amber-800 px-5 py-3 font-bold text-white shadow transition hover:bg-amber-900 disabled:opacity-40"
              >
                Submit Riddle Answer
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {currentChallenge.options.map((option) => (
                <button
                  key={option}
                  type="button"
                  disabled={reveal !== null}
                  onClick={() => settleAnswer(option)}
                  className="min-h-14 rounded-xl border border-amber-900/15 bg-white p-4 text-left font-bold text-[#171B24] transition hover:-translate-y-0.5 hover:border-amber-700 hover:shadow-sm disabled:opacity-50"
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>
      );
    }`;

if (content.includes(renderTarget)) {
  content = content.replace(renderTarget, renderRep);
} else {
  const renderTargetCRLF = renderTarget.replace(/\n/g, '\r\n');
  const renderRepCRLF = renderRep.replace(/\n/g, '\r\n');
  if (content.includes(renderTargetCRLF)) {
    content = content.replace(renderTargetCRLF, renderRepCRLF);
  } else {
    throw new Error('renderTarget not found');
  }
}

fs.writeFileSync(file, content);
console.log('Successfully patched BaseGame.tsx for bible-riddles!');
