import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLeaveGuard } from '../hooks/useLeaveGuard';

type Props = {
  exitTo: string;                       // where to go after leaving, e.g. `/games/${slug}`
  onLeave?: () => Promise<void> | void; // e.g. leave the room in multiplayer
  multiplayer?: boolean;
  active?: boolean;                     // false once the game is finished
};

export function LeaveGameButton({ exitTo, onLeave, multiplayer = false, active = true }: Props) {
  const nav = useNavigate();
  const [open, setOpen] = useState(false);
  const [busy, setBusy] = useState(false);

  useLeaveGuard(active && !open, () => setOpen(true));

  async function confirmLeave() {
    setBusy(true);
    try { await onLeave?.(); } finally {
      setBusy(false); setOpen(false);
      nav(exitTo, { replace: true });
    }
  }

  return (<>
    <button onClick={() => (active ? setOpen(true) : nav(exitTo, { replace: true }))}
      className="inline-flex min-h-[44px] min-w-[44px] items-center gap-2 rounded-xl px-3 font-semibold text-[#171B24] hover:bg-[#171B24]/10 transition-colors cursor-pointer" aria-label="Back">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
           strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 18l-6-6 6-6" /></svg>
      Back
    </button>

    {open && (
      <div role="dialog" aria-modal="true" aria-labelledby="leave-title"
           className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 p-4 sm:items-center">
        <div className="w-full max-w-sm rounded-2xl bg-white p-5 text-[#171B24]"
             style={{ paddingBottom: 'max(1.25rem, env(safe-area-inset-bottom))' }}>
          <h2 id="leave-title" className="font-serif text-xl font-bold">Leave this game?</h2>
          <p className="mt-2 text-sm text-[#5A6275]">
            {multiplayer
              ? 'You will leave the room and your place in this game will be lost.'
              : 'Your progress on this level will not be saved.'}
          </p>
          <div className="mt-4 grid gap-2">
            <button onClick={() => setOpen(false)} className="min-h-[48px] rounded-xl bg-[#3156C9] font-semibold text-white hover:bg-[#2544A5] transition-colors cursor-pointer">
              Keep playing
            </button>
            <button disabled={busy} onClick={confirmLeave}
              className="min-h-[48px] rounded-xl border border-red-600 font-semibold text-red-700 hover:bg-red-50 transition-colors cursor-pointer disabled:opacity-50">
              {busy ? 'Leaving…' : 'Leave game'}
            </button>
          </div>
        </div>
      </div>
    )}
  </>);
}
