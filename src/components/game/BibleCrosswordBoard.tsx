import React, { useMemo, useState } from 'react';

type Entry = { number: number; answer: string; clue: string; reference: string; direction: 'across' | 'down' };
type Placed = Entry & { x: number; y: number };
type Cell = { x: number; y: number; across?: number; down?: number };

function buildLayout(entries: Entry[]) {
  const placed: Placed[] = [];
  const cells = new Map<string, Cell>();
  const key = (x: number, y: number) => `${x},${y}`;
  const canPlace = (word: string, x: number, y: number, direction: 'across' | 'down') => {
    let crossings = 0;
    for (let i = 0; i < word.length; i++) {
      const px = x + (direction === 'across' ? i : 0);
      const py = y + (direction === 'down' ? i : 0);
      const existing = cells.get(key(px, py));
      if (existing) {
        const letterMatches = [...placed].some((p) => {
          for (let j = 0; j < p.answer.length; j++) {
            const qx = p.x + (p.direction === 'across' ? j : 0);
            const qy = p.y + (p.direction === 'down' ? j : 0);
            if (qx === px && qy === py && p.answer[j] === word[i] && p.direction !== direction) return true;
          }
          return false;
        });
        if (!letterMatches) return false;
        crossings++;
      } else {
        const side = direction === 'across' ? [[px, py - 1], [px, py + 1]] : [[px - 1, py], [px + 1, py]];
        if (side.some(([sx, sy]) => cells.has(key(sx, sy)))) return false;
      }
    }
    if (crossings !== 1) return false;
    const before = direction === 'across' ? key(x - 1, y) : key(x, y - 1);
    const after = direction === 'across' ? key(x + word.length, y) : key(x, y + word.length);
    if (cells.has(before) || cells.has(after)) return false;
    return true;
  };
  const add = (entry: Entry, x: number, y: number) => {
    const p: Placed = { ...entry, x, y };
    placed.push(p);
    for (let i = 0; i < entry.answer.length; i++) {
      const px = x + (entry.direction === 'across' ? i : 0);
      const py = y + (entry.direction === 'down' ? i : 0);
      const k = key(px, py);
      const cell = cells.get(k) || { x: px, y: py };
      cell[entry.direction] = entry.number;
      cells.set(k, cell);
    }
  };
  const first = entries[0];
  if (!first) return { placed, cells: [] as Cell[] };
  add({ ...first, direction: 'across' }, 0, 0);
  const remaining = entries.slice(1);
  while (remaining.length) {
    let best = -1, bestPos: [number, number] | null = null, bestDir: 'across' | 'down' = 'down';
    for (let ei = 0; ei < remaining.length && !bestPos; ei++) {
      const word = remaining[ei].answer;
      const dir = placed[placed.length - 1].direction === 'across' ? 'down' : 'across';
      for (const p of placed) {
        for (let pi = 0; pi < p.answer.length && !bestPos; pi++) {
          const px = p.x + (p.direction === 'across' ? pi : 0);
          const py = p.y + (p.direction === 'down' ? pi : 0);
          for (let wi = 0; wi < word.length; wi++) {
            if (word[wi] !== p.answer[pi]) continue;
            const x = px - (dir === 'across' ? wi : 0);
            const y = py - (dir === 'down' ? wi : 0);
            if (canPlace(word, x, y, dir)) { best = ei; bestPos = [x, y]; bestDir = dir; break; }
          }
        }
      }
    }
    if (best < 0 || !bestPos) break;
    const [entry] = remaining.splice(best, 1);
    add({ ...entry, direction: bestDir }, bestPos[0], bestPos[1]);
  }
  const minX = Math.min(...placed.map((p) => p.x));
  const minY = Math.min(...placed.map((p) => p.y));
  const normalized = placed.map((p) => ({ ...p, x: p.x - minX, y: p.y - minY }));
  const normalizedCells = new Map<string, Cell>();
  normalized.forEach((p) => {
    for (let i = 0; i < p.answer.length; i++) {
      const x = p.x + (p.direction === 'across' ? i : 0);
      const y = p.y + (p.direction === 'down' ? i : 0);
      const k = key(x, y), cell = normalizedCells.get(k) || { x, y };
      cell[p.direction] = p.number;
      normalizedCells.set(k, cell);
    }
  });
  return { placed: normalized, cells: [...normalizedCells.values()] };
}

export function BibleCrosswordBoard({ entries, onSubmit, disabled }: {
  entries: Entry[]; onSubmit: (answer: string) => void; disabled: boolean;
}) {
  const layout = useMemo(() => buildLayout(entries), [entries]);
  const [letters, setLetters] = useState<Record<string, string>>({});
  const [active, setActive] = useState<'across' | 'down'>('across');
  const width = Math.max(1, ...layout.cells.map((c) => c.x + 1));
  const height = Math.max(1, ...layout.cells.map((c) => c.y + 1));
  const cellMap = new Map(layout.cells.map((c) => [`${c.x},${c.y}`, c]));
  const readWord = (p: Placed) => Array.from({ length: p.answer.length }, (_, i) => letters[`${p.x + (p.direction === 'across' ? i : 0)},${p.y + (p.direction === 'down' ? i : 0)}`] || '').join('');
  const usable = layout.placed.length;
  return (
    <div className="space-y-4">
      <div className="rounded-xl bg-[#F3EBDD] border border-[#171B24]/15 p-3 text-sm text-[#171B24]">
        Fill the numbered squares. Crossing answers share letters. This puzzle contains {usable} connected clues.
      </div>
      {usable < 10 && <p className="rounded-lg bg-amber-50 p-3 text-sm text-amber-900">This puzzle layout did not produce the required 10 connected answers. It is being held back from submission.</p>}
      <div className="overflow-auto rounded-2xl bg-[#171B24] p-3">
        <div className="mx-auto grid w-max gap-1" style={{ gridTemplateColumns: `repeat(${width}, 34px)` }}>
          {Array.from({ length: width * height }, (_, idx) => {
            const x = idx % width, y = Math.floor(idx / width), cell = cellMap.get(`${x},${y}`);
            if (!cell) return <div key={idx} className="h-[34px] w-[34px] bg-[#080B12] rounded-sm" />;
            const value = letters[`${x},${y}`] || '';
            return <div key={idx} className="relative h-[34px] w-[34px]">
              <input aria-label={`Crossword cell ${x + 1}, ${y + 1}`} maxLength={1} value={value} disabled={disabled}
                onFocus={() => setActive(cell.across ? 'across' : 'down')}
                onChange={(e) => setLetters((old) => ({ ...old, [`${x},${y}`]: e.target.value.replace(/[^a-z]/gi, '').slice(-1).toUpperCase() }))}
                className="h-full w-full rounded-sm border-2 border-white bg-white text-center font-black text-[#171B24] uppercase focus:border-[#D66B3D] outline-none" />
              {(cell.across || cell.down) && <span className="absolute left-0.5 top-0 text-[8px] font-bold text-slate-500 pointer-events-none">{Math.min(cell.across || 999, cell.down || 999)}</span>}
            </div>;
          })}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {(['across','down'] as const).map((direction) => <section key={direction} className="space-y-2">
          <button type="button" onClick={() => setActive(direction)} className={`font-black uppercase text-sm ${active === direction ? 'text-[#D66B3D]' : 'text-[#3156C9]'}`}>{direction}</button>
          {layout.placed.filter((p) => p.direction === direction).map((p) => <div key={p.number} className="rounded-xl border border-slate-200 p-3">
            <p className="text-xs font-black text-[#3156C9]">{p.number}. {p.answer.length} letters</p>
            <p className="text-sm text-[#171B24]">{p.clue}</p>
            <p className="text-[11px] text-slate-500 mt-1">Answer progress: {readWord(p).replace(/./g, (ch) => ch || '·')}</p>
          </div>)}
        </section>)}
      </div>
      <button type="button" disabled={disabled || usable < 10} onClick={() => onSubmit(layout.placed.map(readWord).join('|'))}
        className="w-full rounded-xl bg-[#D66B3D] px-5 py-3 font-bold text-white disabled:opacity-40">Submit Crossword</button>
    </div>
  );
}
