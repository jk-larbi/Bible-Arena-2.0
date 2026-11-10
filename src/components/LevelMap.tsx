import { useEffect, useRef, useState } from 'react';
import type { LevelNode } from '../lib/levels';

type Props = { gameName: string; levels: LevelNode[]; onPlay: (level: number, restart: boolean) => void };

const Star = ({ on }: { on: boolean }) => (
  <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
    <polygon points="12 2 15.1 8.6 22 9.3 16.8 14 18.4 21 12 17.3 5.6 21 7.2 14 2 9.3 8.9 8.6"
      fill={on ? '#D66B3D' : 'none'} stroke={on ? '#D66B3D' : '#8a8f99'} strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);
export const Stars5 = ({ n }: { n: number }) => (
  <span className="inline-flex" role="img" aria-label={`${n} out of 5 stars`}>
    {[1, 2, 3, 4, 5].map((i) => <Star key={i} on={i <= n} />)}
  </span>
);

type State = 'locked' | 'soon' | 'done' | 'progress' | 'open';
const stateOf = (l: LevelNode): State =>
  !l.is_published ? 'soon' : !l.unlocked ? 'locked' : l.completed ? 'done' : l.challenges_done > 0 ? 'progress' : 'open';

const STYLE: Record<State, string> = {
  done:     'bg-[#A7B49A] text-[#171B24]',
  progress: 'bg-[#3156C9] text-white',
  open:     'bg-[#D66B3D] text-white',
  soon:     'bg-white/10 text-[#F3EBDD]/60 border border-dashed border-white/30',
  locked:   'bg-white/5 text-[#F3EBDD]/40',
};

export function LevelMap({ gameName, levels, onPlay }: Props) {
  const [sel, setSel] = useState<LevelNode | null>(null);
  const currentRef = useRef<HTMLButtonElement>(null);
  const current = levels.find((l) => l.unlocked && l.is_published && !l.completed);
  const done = levels.filter((l) => l.completed).length;
  const stars = levels.reduce((s, l) => s + l.best_stars, 0);

  useEffect(() => { currentRef.current?.scrollIntoView({ block: 'center', behavior: 'smooth' }); }, [current?.level]);

  return (
    <div className="bg-[#171B24] p-4 pb-40 text-[#F3EBDD]">
      <h1 className="font-serif text-3xl font-bold">{gameName}</h1>
      <p className="mt-1 text-sm tabular-nums">
        {done} of {levels.length} levels completed · {stars} stars earned
      </p>
      <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/15" role="progressbar"
           aria-valuemin={0} aria-valuemax={levels.length} aria-valuenow={done}>
        <div className="h-full bg-[#D66B3D]" style={{ width: `${levels.length ? (done / levels.length) * 100 : 0}%` }} />
      </div>

      <ul className="mt-5 grid grid-cols-4 gap-3 sm:grid-cols-6 md:grid-cols-10">
        {levels.map((l) => {
          const s = stateOf(l);
          const isCurrent = current?.level === l.level;
          return (
            <li key={l.level}>
              <button ref={isCurrent ? currentRef : undefined} onClick={() => setSel(l)}
                aria-label={`Level ${l.level}, ${s === 'done' ? `completed, ${l.best_stars} stars` : s === 'progress' ? `in progress, ${l.challenges_done} of ${l.challenge_count}` : s}`}
                className={`flex min-h-[64px] w-full flex-col items-center justify-center rounded-xl font-serif text-xl font-bold
                  ${STYLE[s]} ${isCurrent ? 'ring-2 ring-[#F3EBDD] ring-offset-2 ring-offset-[#171B24]' : ''}`}>
                {s === 'locked' ? <LockIcon /> : s === 'soon' ? (
                  <>
                    <span>{l.level}</span>
                    <span className="mt-0.5 inline-flex items-center gap-1 font-sans text-[8px] font-bold uppercase tracking-wider opacity-80">
                      <LockIcon size={11} /> Soon
                    </span>
                  </>
                ) : l.level}
                {s === 'done' && <Stars5 n={l.best_stars} />}
                {s === 'progress' && <span className="text-xs font-sans tabular-nums">{l.challenges_done}/{l.challenge_count}</span>}
              </button>
            </li>
          );
        })}
      </ul>

      <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-1 text-xs">
        <li>Completed</li><li>In progress</li><li>Available</li><li>Coming soon</li><li>Locked</li>
      </ul>

      {sel && (
        <div role="dialog" aria-label={`Level ${sel.level}`}
             className="fixed inset-x-0 bottom-0 z-[60] mx-auto max-h-[85dvh] w-full max-w-md overflow-y-auto overscroll-contain rounded-t-2xl bg-[#F3EBDD] p-5 text-[#171B24] shadow-2xl"
             style={{ paddingBottom: 'max(1.25rem, env(safe-area-inset-bottom))' }}>
          <div className="flex items-start justify-between">
            <div>
              <h2 className="font-serif text-xl font-bold">Level {sel.level} — {sel.name}</h2>
              <p className="text-sm">{sel.challenge_count} challenges</p>
            </div>
            <button onClick={() => setSel(null)} className="min-h-[44px] min-w-[44px] text-sm font-semibold">Close</button>
          </div>
          {sel.completed && (
            <p className="mt-2 flex items-center gap-2 text-sm">
              Best: <Stars5 n={sel.best_stars} /> <span className="tabular-nums">{Math.round(sel.best_percent)}%</span>
              <span>· {sel.attempts} attempt{sel.attempts === 1 ? '' : 's'}</span>
            </p>
          )}
          <div className="mt-4 grid gap-2">
            {!sel.is_published && (
              <div className="rounded-xl border border-[#D66B3D]/25 bg-[#D66B3D]/10 p-3">
                <div className="flex items-center gap-2 text-sm font-bold text-[#A94B27]">
                  <LockIcon size={15} />
                  Coming Soon
                </div>
                <p className="mt-1 text-sm text-[#171B24]/75">
                  Levels 31–50 are being prepared. Continue with the available levels while this stage is locked.
                </p>
              </div>
            )}
            {sel.is_published && !sel.unlocked && <p className="text-sm">Complete Level {sel.level - 1} to unlock this level.</p>}
            {sel.unlocked && sel.is_published && sel.challenges_done > 0 && !sel.completed && (<>
              <button onClick={() => onPlay(sel.level, false)} className="min-h-[48px] rounded-xl bg-[#3156C9] font-semibold text-white">
                Continue ({sel.challenges_done}/{sel.challenge_count})
              </button>
              <button onClick={() => onPlay(sel.level, true)} className="min-h-[48px] rounded-xl border border-[#171B24]/40 font-semibold">Start over</button>
            </>)}
            {sel.unlocked && sel.is_published && !(sel.challenges_done > 0 && !sel.completed) && (
              <button onClick={() => onPlay(sel.level, true)} className="min-h-[48px] rounded-xl bg-[#D66B3D] font-semibold text-white">
                {sel.completed ? 'Replay level' : 'Start level'}
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

const LockIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <rect x="5" y="11" width="14" height="9" rx="2" /><path d="M8 11V8a4 4 0 018 0v3" />
  </svg>
);
