import { useEffect, useMemo, useRef, useState } from 'react';
import { encouragement, type LevelResult } from '../lib/levels';
import { useCountUp } from '../hooks/useCountUp';
import './victory.css';

type Props = {
  gameName: string; level: number; result: LevelResult; nextLevelAvailable: boolean;
  onNext: () => void; onReplay: () => void; onBack: () => void; shareSlot?: React.ReactNode;
};

const COLORS = ['#D66B3D', '#3156C9', '#A7B49A', '#F3EBDD', '#FFFFFF'];
const confetti = (n: number) => Array.from({ length: n }, (_, i) => ({
  id: i, x: Math.random() * 100, w: 6 + Math.random() * 6, h: 10 + Math.random() * 10, c: COLORS[i % 5],
  d: 2.8 + Math.random() * 2, delay: 0.4 + Math.random() * 1.2, drift: Math.random() * 40 - 20, rot: 360 + Math.random() * 720,
}));

const Star = ({ on, i }: { on: boolean; i: number }) => (
  <svg viewBox="0 0 24 24" width="44" height="44" aria-hidden="true"
       className={on ? 'v-star' : 'v-star-off'} style={{ '--i': i } as React.CSSProperties}>
    <polygon points="12 2 15.1 8.6 22 9.3 16.8 14 18.4 21 12 17.3 5.6 21 7.2 14 2 9.3 8.9 8.6"
      fill={on ? '#D66B3D' : 'none'} stroke={on ? '#F3EBDD' : '#A7B49A'} strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);

const fmtTime = (ms: number) => `${Math.floor(ms / 60000)}:${String(Math.floor((ms % 60000) / 1000)).padStart(2, '0')}`;

export function ResultsScreen({ gameName, level, result: r, nextLevelAvailable, onNext, onReplay, onBack, shareSlot }: Props) {
  const stars = r.result_stars;
  const pct = useCountUp(Math.round(r.result_percent), 1000, 900);
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  // Celebration scales with real performance. 0 to 2 stars get a calm screen: no confetti, no rays.
  const pieces = useMemo(() => {
    if (reduce || stars < 3) return [];
    const base = stars === 5 ? 64 : stars === 4 ? 44 : 24;
    return confetti(window.innerWidth < 640 ? Math.round(base * 0.55) : base);
  }, [reduce, stars]);
  const [ready, setReady] = useState(false);
  const primary = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (stars >= 3) navigator.vibrate?.([30, 40, 60]);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const t = setTimeout(() => setReady(true), reduce ? 0 : 2000);
    return () => { clearTimeout(t); document.body.style.overflow = prev; };
  }, [reduce, stars]);
  useEffect(() => { if (ready) primary.current?.focus(); }, [ready]);

  const rise = (at: number) => ({ '--at': `${at}s` } as React.CSSProperties);

  return (
    <div className="victory-root" role="dialog" aria-modal="true" aria-labelledby="r-title">
      <p className="sr-only" aria-live="assertive">
        Level {level} completed. {stars} out of 5 stars. Performance {Math.round(r.result_percent)} percent.
      </p>

      <div className="victory-fx" aria-hidden="true">
        {stars >= 4 && <div className="v-rays-wrap"><div className="v-rays" /></div>}
        {pieces.map((c) => (
          <i key={c.id} className="v-confetti" style={{
            '--x': `${c.x}%`, '--w': `${c.w}px`, '--h': `${c.h}px`, '--c': c.c, '--d': `${c.d}s`,
            '--delay': `${c.delay}s`, '--drift': `${c.drift}vw`, '--rot': `${c.rot}deg`,
          } as React.CSSProperties} />
        ))}
      </div>

      <div className="victory-inner">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#A7B49A]">{gameName}</p>
        <h1 id="r-title" className="v-title font-serif text-4xl font-bold uppercase leading-tight sm:text-5xl">
          Level {level} completed!
        </h1>

        <div className="flex gap-1.5" aria-hidden="true">
          {[0, 1, 2, 3, 4].map((i) => <Star key={i} i={i} on={i < stars} />)}
        </div>
        <p className="v-rise font-serif text-2xl font-bold" style={rise(1.1)}>{stars} out of 5 stars</p>
        
        {/* Unified Marks Badge */}
        <div className="v-rise flex flex-col items-center gap-1.5" style={rise(1.15)}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-[#D66B3D] text-white font-bold text-lg shadow-md">
            <span>Session Marks: {r.session_marks ?? r.fully_correct * 10} / 100</span>
          </div>
          {r.new_marks_awarded > 0 ? (
            <span className="text-xs font-semibold text-[#A7B49A]">
              +{r.new_marks_awarded} new marks added to your career total
            </span>
          ) : (
            <span className="text-xs font-semibold text-[#F3EBDD]/70">
              Replay: duplicate marks prevention active
            </span>
          )}
        </div>

        {r.is_new_best && (
          <p className="v-rise rounded-full bg-[#3156C9] px-3.5 py-1 text-sm font-semibold" style={rise(1.2)}>
            New best rating (was {r.prev_best_stars} stars)
          </p>
        )}

        <dl className="v-rise grid w-full max-w-md grid-cols-2 sm:grid-cols-3 gap-2.5 text-center my-2" style={rise(1.2)}>
          <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
            <dt className="text-[11px] uppercase tracking-wider text-[#A7B49A]">Accuracy</dt>
            <dd className="font-serif text-2xl font-bold tabular-nums">{pct}%</dd>
          </div>
          <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
            <dt className="text-[11px] uppercase tracking-wider text-[#A7B49A]">Correct</dt>
            <dd className="font-serif text-2xl font-bold tabular-nums text-emerald-400">
              {r.correct_count ?? r.fully_correct}/10
            </dd>
          </div>
          <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
            <dt className="text-[11px] uppercase tracking-wider text-[#A7B49A]">Incorrect</dt>
            <dd className="font-serif text-2xl font-bold tabular-nums text-rose-300">
              {r.incorrect_count ?? (10 - r.fully_correct)}/10
            </dd>
          </div>
          <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
            <dt className="text-[11px] uppercase tracking-wider text-[#A7B49A]">Overall Marks</dt>
            <dd className="font-serif text-2xl font-bold tabular-nums text-[#D66B3D]">
              {r.total_accumulated_marks ?? (r.fully_correct * 10)}
            </dd>
          </div>
          <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
            <dt className="text-[11px] uppercase tracking-wider text-[#A7B49A]">Personal Best</dt>
            <dd className="font-serif text-2xl font-bold tabular-nums">
              {r.personal_best_marks ?? (r.fully_correct * 10)}
            </dd>
          </div>
          <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
            <dt className="text-[11px] uppercase tracking-wider text-[#A7B49A]">Completed</dt>
            <dd className="font-serif text-2xl font-bold tabular-nums">
              {r.completed_levels ?? 1} lvl
            </dd>
          </div>
        </dl>

        <p className="v-rise max-w-sm text-base" style={rise(1.4)}>
          {encouragement(stars)}
          {r.first_completion && nextLevelAvailable && ` You have unlocked Level ${level + 1}.`}
        </p>

        {ready && (
          <div className="v-rise grid w-full max-w-sm gap-2" style={rise(0)}>
            {nextLevelAvailable
              ? <button ref={primary} onClick={onNext} className="min-h-[52px] rounded-xl bg-[#D66B3D] text-lg font-bold text-white">Next level</button>
              : <p ref={undefined} className="rounded-xl bg-white/10 p-3 text-sm">More levels are coming soon.</p>}
            <div className="grid grid-cols-2 gap-2">
              <button onClick={onReplay} className="min-h-[48px] rounded-xl border border-white/40 font-semibold">Replay level</button>
              <button ref={nextLevelAvailable ? undefined : primary} onClick={onBack} className="min-h-[48px] rounded-xl border border-white/40 font-semibold">Back to levels</button>
            </div>
            {shareSlot}
          </div>
        )}
      </div>
    </div>
  );
}
