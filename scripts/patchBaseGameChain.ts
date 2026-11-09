import * as fs from 'fs';
import * as path from 'path';

const filePath = path.resolve(process.cwd(), 'src', 'components', 'game', 'BaseGame.tsx');
let content = fs.readFileSync(filePath, 'utf-8');

// 1. Update getHintForLevel
const oldHint = `    if (gameId === 'bible-chain-challenge') {
      const clues: string[] = metadata.clues || [];
      return clues[requestedLevel - 1] || 'Review the chain rule and compare the Scripture dossier with each option.';
    }`;

const newHint = `    if (gameId === 'bible-chain-challenge') {
      if (metadata.hint1 && requestedLevel === 1) return metadata.hint1;
      if (metadata.hint2 && requestedLevel === 2) return metadata.hint2;
      const clues: string[] = metadata.clues || [];
      return clues[requestedLevel - 1] || 'Review the chain rule and compare the Scripture dossier with each option.';
    }`;

if (content.includes(oldHint)) {
  content = content.replace(oldHint, newHint);
  console.log('Updated getHintForLevel');
} else {
  console.log('oldHint not found with exact matching, trying normalize');
  content = content.replace(
    /if \(gameId === 'bible-chain-challenge'\) \{\s*const clues: string\[\] = metadata\.clues \|\| \[\];\s*return clues\[requestedLevel - 1\] \|\| 'Review the chain rule and compare the Scripture dossier with each option\x2E';\s*\}/,
    newHint
  );
  console.log('Replaced with regex');
}

// 2. Update bible-chain-challenge renderer
const oldRenderer = `    // 9. BIBLE CHAIN CHALLENGE — continue the chain using the required opening letter.
    if (gameId === 'bible-chain-challenge') {
      const chain: string[] = currentChallenge.metadata?.chain || [];
      const required = String(currentChallenge.metadata?.requiredLetter || '');
      return (
        <div className="space-y-4">
          <div className="rounded-2xl bg-[#171B24] p-5 text-center text-white">
            <p className="text-xs font-bold uppercase tracking-wider text-[#F0B18D]">Five-Person Bible Name Chain</p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
              {chain.map((name, index) => (
                <React.Fragment key={name}>
                  {index > 0 && <span className="text-xl text-[#F0B18D]">→</span>}
                  <span className="rounded-xl bg-white/10 px-3 py-2 font-serif text-base font-bold">{name}</span>
                </React.Fragment>
              ))}
              <span className="text-xl text-[#F0B18D]">→</span>
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#D66B3D] text-2xl font-black">{required}</span>
              <span className="text-xl text-[#F0B18D]">?</span>
            </div>
            <p className="mt-3 text-xs text-white/70">The next person's name must begin with the final letter of {chain[chain.length - 1] || 'the previous name'}. No person may appear twice in this chain.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {currentChallenge.options.map((option) => (
              <button key={option} type="button" disabled={reveal !== null} onClick={() => settleAnswer(option)}
                className="min-h-14 rounded-xl border border-[#171B24]/15 bg-[#F3EBDD] p-4 text-left font-bold text-[#171B24] hover:border-[#D66B3D] disabled:opacity-50">
                <span className="mr-2 inline-flex h-7 w-7 items-center justify-center rounded-lg bg-[#D66B3D]/15 text-sm font-black text-[#D66B3D]">{option.charAt(0)}</span>
                {option}
              </button>
            ))}
          </div>
        </div>
      );
    }`;

const newRenderer = `    // 9. BIBLE CHAIN CHALLENGE — connect biblical links across scripture.
    if (gameId === 'bible-chain-challenge') {
      const isCurated = Boolean(currentChallenge.metadata?.curated);
      const isTyped = Boolean(currentChallenge.metadata?.is_typed);
      const chainNodes: string[] = currentChallenge.metadata?.chain_nodes || currentChallenge.metadata?.chain || [];
      const stage = currentChallenge.metadata?.stage ?? Math.ceil((level ?? 1) / 5);
      const stageTitle = currentChallenge.metadata?.stage_title || 'Chain Foundations';
      const levelTitle = currentChallenge.metadata?.level_title || 'Chain Challenge';
      const chainType = currentChallenge.metadata?.chain_type || 'character_chain';
      const dossier = currentChallenge.metadata?.dossier;

      return (
        <div className="space-y-4">
          <div className="rounded-2xl border border-[#D66B3D]/25 bg-[#FFF8F0] p-5 sm:p-6 text-zinc-900 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#D66B3D]/15 pb-3">
              <span className="rounded-full bg-[#D66B3D]/15 px-3 py-1 text-xs font-black uppercase tracking-wider text-[#D66B3D]">
                🔗 Stage \${stage}: \${stageTitle}
              </span>
              <span className="text-xs font-bold text-zinc-500">
                \${levelTitle} · \${currentChallenge.metadata?.difficulty || 'Standard'}
              </span>
            </div>

            {chainNodes.length > 0 && (
              <div className="my-4 rounded-xl bg-[#171B24] p-4 text-center">
                <p className="mb-2 text-[11px] font-bold uppercase tracking-wider text-[#F0B18D]">
                  {chainType === 'wrong_chain' ? '⚠️ Broken Chain Investigation' : 'Biblical Chain Sequence'}
                </p>
                <div className="flex flex-wrap items-center justify-center gap-2">
                  {chainNodes.map((node, idx) => (
                    <React.Fragment key={idx}>
                      {idx > 0 && <span className="text-base font-bold text-[#F0B18D]">→</span>}
                      <span className={\`rounded-lg px-2.5 py-1.5 font-serif text-sm font-bold \${
                        node.includes('[BROKEN]') || node.includes('[') 
                          ? 'bg-rose-900/60 text-rose-200 border border-rose-500/50' 
                          : node === '?' 
                          ? 'bg-[#D66B3D] text-white' 
                          : 'bg-white/10 text-white'
                      }\`}>
                        {node}
                      </span>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            )}

            {dossier && (
              <div className="mb-4 rounded-xl border border-amber-800/20 bg-amber-500/10 p-3.5 text-xs font-serif leading-relaxed text-amber-950">
                <span className="font-bold uppercase tracking-wider text-amber-900">📜 Scripture Case Study: </span>
                {dossier}
              </div>
            )}

            <p className="mt-3 whitespace-pre-line font-serif text-base sm:text-lg font-bold leading-relaxed text-[#171B24]">
              {currentChallenge.question_text}
            </p>
          </div>

          {isTyped ? (
            <div className="space-y-3 rounded-2xl border border-[#D66B3D]/25 bg-[#FFF8F0] p-5">
              <label className="block text-sm font-bold text-[#171B24]">
                Type the connecting biblical answer:
                <input
                  type="text"
                  value={chainTyped}
                  disabled={reveal !== null}
                  onChange={(e) => setChainTyped(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && chainTyped.trim() && reveal === null) {
                      settleAnswer(chainTyped.trim());
                    }
                  }}
                  placeholder="Type name, person, location, or missing connection..."
                  className="mt-2 w-full rounded-xl border border-[#171B24]/20 bg-white px-4 py-3 font-serif text-lg font-bold text-[#171B24] outline-none transition focus:border-[#D66B3D] focus:ring-2 focus:ring-[#D66B3D]/20"
                  autoFocus
                />
              </label>
              <button
                type="button"
                disabled={reveal !== null || !chainTyped.trim()}
                onClick={() => settleAnswer(chainTyped.trim())}
                className="w-full rounded-xl bg-[#D66B3D] px-5 py-3 font-bold text-white shadow transition hover:bg-[#c05a2e] disabled:opacity-40"
              >
                Submit Connection
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {currentChallenge.options.map((option, optIdx) => {
                const label = ['A', 'B', 'C', 'D'][optIdx] || String(optIdx + 1);
                return (
                  <button
                    key={option}
                    type="button"
                    disabled={reveal !== null}
                    onClick={() => settleAnswer(option)}
                    className="min-h-14 rounded-xl border border-[#171B24]/15 bg-[#F3EBDD] p-4 text-left font-bold text-[#171B24] transition hover:border-[#D66B3D] hover:bg-white disabled:opacity-50"
                  >
                    <span className="mr-2.5 inline-flex h-7 w-7 items-center justify-center rounded-lg bg-[#D66B3D]/15 text-xs font-black text-[#D66B3D]">
                      {label}
                    </span>
                    {option}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      );
    }`;

if (content.includes(oldRenderer)) {
  content = content.replace(oldRenderer, newRenderer);
  console.log('Updated bible-chain-challenge renderer');
} else {
  console.log('oldRenderer not found with exact match, using regex');
  content = content.replace(
    /\/\/ 9\. BIBLE CHAIN CHALLENGE[\s\S]*?\}\n    \}/,
    newRenderer
  );
  console.log('Replaced renderer with regex');
}

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Successfully updated BaseGame.tsx');
