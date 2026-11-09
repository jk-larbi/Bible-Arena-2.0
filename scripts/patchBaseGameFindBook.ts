import fs from 'fs';
import path from 'path';

const file = path.join(process.cwd(), 'src', 'components', 'game', 'BaseGame.tsx');
let content = fs.readFileSync(file, 'utf8');

// 1. Add typedBook state
const stateTarget = "const [scriptureTyped, setScriptureTyped] = useState('');";
const stateRep = "const [scriptureTyped, setScriptureTyped] = useState('');\n  const [typedBook, setTypedBook] = useState('');";

if (!content.includes(stateTarget)) {
  throw new Error('stateTarget not found');
}
content = content.replace(stateTarget, stateRep);

// 2. Reset typedBook
const resetTarget = "setScriptureTyped('');";
const resetRep = "setScriptureTyped('');\n    setTypedBook('');";
if (!content.includes(resetTarget)) {
  throw new Error('resetTarget not found');
}
content = content.replace(resetTarget, resetRep);

// 3. Hint handling
const hintTarget = `    if (gameId === 'bible-riddles' || gameId === 'complete-the-scripture' || gameId === 'find-the-bible-book') {
      const answer = String(currentChallenge.correct_answer || '');
      return requestedLevel === 1
        ? \`The answer begins with “\${answer.charAt(0)}” and contains \${answer.length} characters.\`
        : \`The answer is “\${answer}”. Use this final clue carefully.\`;
    }`;

const hintRep = `    if (gameId === 'find-the-bible-book') {
      if (metadata.hint) return \`Book Clue: \${metadata.hint}\`;
      const answer = String(currentChallenge.correct_answer || '');
      return requestedLevel === 1
        ? \`The book starts with “\${answer.charAt(0)}” and has \${answer.length} characters.\`
        : \`Testament: \${metadata.testament || 'Bible'} • Reference: \${currentChallenge.reference}.\`;
    }
    if (gameId === 'bible-riddles' || gameId === 'complete-the-scripture') {
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

// 4. Render block for find-the-bible-book
const renderTarget = `    // 12. FIND THE BIBLE BOOK — choose the correct book from the library shelves.
    if (gameId === 'find-the-bible-book') {
      return (
        <div className="space-y-4">
          <div className="rounded-2xl bg-[#171B24] p-5 text-white">
            <p className="text-xs font-bold uppercase tracking-wider text-[#F0B18D]">The Bible Library</p>
            <p className="mt-2 font-serif text-lg font-semibold leading-relaxed">{currentChallenge.question_text}</p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {currentChallenge.options.map((option, index) => (
              <button key={option} type="button" disabled={reveal !== null} onClick={() => settleAnswer(option)}
                className="min-h-24 rounded-xl border border-[#171B24]/15 bg-[#F3EBDD] p-3 text-center font-serif font-bold text-[#171B24] shadow-sm hover:-translate-y-0.5 hover:border-[#D66B3D] disabled:opacity-50">
                <span className="mb-2 block text-2xl">{['📕', '📗', '📘', '📙'][index % 4]}</span>{option}
              </button>
            ))}
          </div>
        </div>
      );
    }`;

const renderRep = `    // 12. FIND THE BIBLE BOOK — choose the correct book from the library shelves, or type the name.
    if (gameId === 'find-the-bible-book') {
      const isTyped = Boolean(currentChallenge.metadata?.is_typed);
      const clues: string[] = currentChallenge.metadata?.clues || [];
      const stageTitle = currentChallenge.metadata?.stage_title;
      const levelTheme = currentChallenge.metadata?.level_theme;
      const qType = currentChallenge.metadata?.question_type;

      return (
        <div className="space-y-4">
          <div className="rounded-2xl bg-[#171B24] p-5 text-white">
            <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#F0B18D]">
              <span>The Bible Library {stageTitle ? \`• \${stageTitle}\` : ''}</span>
              {qType && <span className="rounded bg-[#F0B18D]/20 px-2 py-0.5 text-[10px] text-[#F0B18D] font-mono">{qType}</span>}
            </div>
            {levelTheme && <p className="mt-1 text-xs text-[#E8C29D]/80 font-medium">{levelTheme}</p>}
            <p className="mt-3 font-serif text-lg font-semibold leading-relaxed whitespace-pre-line">{currentChallenge.question_text}</p>
            {clues.length > 0 && (
              <div className="mt-4 space-y-1.5 border-t border-white/10 pt-3">
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#A2B4E8]">Forensic Dossier Clues:</p>
                {clues.map((clue, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-white/90">
                    <span className="text-[#F0B18D]">•</span>
                    <span>{clue}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {isTyped ? (
            <div className="space-y-3 rounded-2xl border border-[#171B24]/15 bg-[#F3EBDD] p-5">
              <label className="block text-sm font-bold text-[#171B24]">
                Type the name of the Bible Book:
                <input
                  type="text"
                  value={typedBook}
                  disabled={reveal !== null}
                  onChange={(e) => setTypedBook(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && typedBook.trim() && reveal === null) {
                      settleAnswer(typedBook.trim());
                    }
                  }}
                  placeholder="e.g. Genesis, Habakkuk, Philemon, 1 Peter..."
                  className="mt-2 w-full rounded-xl border border-[#171B24]/20 bg-white px-4 py-3 font-serif text-lg font-bold text-[#171B24] outline-none transition focus:border-[#3156C9] focus:ring-2 focus:ring-[#3156C9]/20"
                  autoFocus
                />
              </label>
              <button
                type="button"
                disabled={reveal !== null || !typedBook.trim()}
                onClick={() => settleAnswer(typedBook.trim())}
                className="w-full rounded-xl bg-[#D66B3D] px-5 py-3 font-bold text-white shadow transition hover:bg-[#c25e34] disabled:opacity-40"
              >
                Submit Book
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-3">
              {currentChallenge.options.map((option, index) => (
                <button
                  key={option}
                  type="button"
                  disabled={reveal !== null}
                  onClick={() => settleAnswer(option)}
                  className="min-h-24 rounded-xl border border-[#171B24]/15 bg-[#F3EBDD] p-3 text-center font-serif font-bold text-[#171B24] shadow-sm transition hover:-translate-y-0.5 hover:border-[#D66B3D] hover:shadow-md disabled:opacity-50"
                >
                  <span className="mb-2 block text-2xl">{['📕', '📗', '📘', '📙'][index % 4]}</span>
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
console.log('Successfully patched BaseGame.tsx!');
