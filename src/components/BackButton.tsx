import { useLocation, useNavigate } from 'react-router-dom';

/** Goes back if there is in-app history, otherwise to `fallback` (e.g. when opened from a shared link) */
export function BackButton({ fallback = '/', label = 'Back' }: { fallback?: string; label?: string }) {
  const nav = useNavigate();
  const { key } = useLocation();
  const hasHistory = key !== 'default';

  return (
    <button onClick={() => (hasHistory ? nav(-1) : nav(fallback, { replace: true }))}
      className="inline-flex min-h-[44px] min-w-[44px] items-center gap-2 rounded-xl px-3 font-semibold text-[#171B24] hover:bg-[#171B24]/10 transition-colors cursor-pointer"
      aria-label={label}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
           strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 18l-6-6 6-6" /></svg>
      <span>{label}</span>
    </button>
  );
}
