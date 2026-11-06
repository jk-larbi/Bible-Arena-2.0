export function AutoAdvanceBar({ progress, secondsLeft, isLast }: { progress: number; secondsLeft: number; isLast: boolean }) {
  return (
    <div aria-live="polite" className="mt-4">
      <div className="h-2 overflow-hidden rounded-full bg-black/10">
        <div className="h-full bg-[#D66B3D] transition-[width] duration-100 ease-linear"
             style={{ width: `${Math.max(0, Math.min(1, progress)) * 100}%` }} />
      </div>
      <p className="mt-2 text-center text-sm font-semibold tabular-nums">
        {isLast ? 'Results in' : 'Next question in'} {secondsLeft}…
      </p>
    </div>
  );
}
