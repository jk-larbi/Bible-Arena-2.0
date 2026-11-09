import fs from 'fs';
import path from 'path';

const file = path.join(process.cwd(), 'src', 'components', 'game', 'BaseGame.tsx');
let content = fs.readFileSync(file, 'utf8');

// 1. Line 194
content = content.replace(
  "if (gameId === 'bible-timeline' || gameId === 'bible-puzzles') {",
  "if (gameId === 'bible-timeline') {"
);

// 2. Hint handler
const hintTarget = `    if (gameId === 'bible-puzzles') {
      const fragments: string[] = metadata.tiles || [];
      if (requestedLevel === 1) return fragments[0] ? \`The first fragment is: “\${fragments[0]}”\` : 'Look for the opening words of the verse.';
      return fragments[1] ? \`After the first fragment comes: “\${fragments[1]}”\` : 'Read the verse fragments for a natural sentence flow.';
    }`.replace(/\r?\n/g, '\r\n');

const hintReplacement = `    if (gameId === 'bible-puzzles') {
      if (metadata.hint) return \`Puzzle Clue: \${metadata.hint}\`;
      return \`Scripture Reference: \${currentChallenge.reference}. Examine the biblical testimony and clues carefully.\`;
    }`.replace(/\r?\n/g, '\r\n');

if (!content.includes(hintTarget)) {
  console.error('hintTarget not found in BaseGame.tsx');
  process.exit(1);
}
content = content.replace(hintTarget, hintReplacement);

// 3. Rendering block
const renderTarget = `    // 3. BIBLE TIMELINE & BIBLE PUZZLES (Chronological / Fragment Ordering)
    if (gameId === 'bible-timeline' || gameId === 'bible-puzzles') {`.replace(/\r?\n/g, '\r\n');

const renderReplacement = `    // BIBLE PUZZLES — Brain teasers, forensic clues, logic deductions, odd one out
    if (gameId === 'bible-puzzles') {
      const puzzleType = currentChallenge.metadata?.puzzle_type || 'Bible Brain Teaser';
      const levelTheme = currentChallenge.metadata?.level_theme || 'Puzzle Challenge';
      const clues = currentChallenge.metadata?.clues as string[] | undefined;
      return (
        <div className="space-y-4">
          <div className="rounded-2xl border border-[#3156C9]/20 bg-[#F3EBDD] p-5 space-y-3">
            <div className="flex items-center justify-between">
              <span className="inline-block rounded-full bg-[#3156C9]/10 px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-[#3156C9]">
                🧩 {puzzleType}
              </span>
              <span className="text-xs font-semibold text-[#5A6275]">
                {levelTheme}
              </span>
            </div>
            <p className="font-serif text-lg font-bold leading-relaxed text-[#171B24] whitespace-pre-line">
              {currentChallenge.question_text}
            </p>
            {clues && clues.length > 0 && (
              <div className="pt-2 border-t border-[#171B24]/10 space-y-1.5">
                <span className="text-xs font-bold uppercase tracking-wider text-[#5A6275]">
                  Investigation Clues:
                </span>
                {clues.map((clue, idx) => (
                  <p key={idx} className="text-sm font-medium text-[#171B24] flex items-start gap-2">
                    <span className="text-[#3156C9] font-bold">•</span>
                    <span>{clue}</span>
                  </p>
                ))}
              </div>
            )}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {currentChallenge.options.map((option) => (
              <button
                key={option}
                type="button"
                disabled={reveal !== null}
                onClick={() => settleAnswer(option)}
                className="min-h-14 rounded-xl border border-[#171B24]/15 bg-white p-4 text-left font-bold text-[#171B24] hover:border-[#3156C9] hover:bg-blue-50/50 disabled:opacity-50 transition-all cursor-pointer shadow-sm"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      );
    }

    // 3. BIBLE TIMELINE (Chronological Ordering)
    if (gameId === 'bible-timeline') {`.replace(/\r?\n/g, '\r\n');

if (!content.includes(renderTarget)) {
  console.error('renderTarget not found in BaseGame.tsx');
  process.exit(1);
}
content = content.replace(renderTarget, renderReplacement);

fs.writeFileSync(file, content, 'utf8');
console.log('Successfully patched BaseGame.tsx for bible-puzzles!');
