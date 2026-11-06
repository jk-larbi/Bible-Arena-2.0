import { useState } from 'react';
import { copyText } from '../lib/rooms';

type Props = { path: string; title: string; text: string; label?: string };

export function ShareButton({ path, title, text, label = 'Share' }: Props) {
  const [note, setNote] = useState('');
  const url = `${window.location.origin}${path}`;
  const flash = (m: string) => { setNote(m); setTimeout(() => setNote(''), 2000); };

  async function share() {
    if (navigator.share) {
      try { await navigator.share({ title, text, url }); return; }
      catch (e) { if ((e as DOMException).name === 'AbortError') return; }
    }
    await copyText(url);
    flash('Link copied');
  }

  const whatsapp = `https://wa.me/?text=${encodeURIComponent(`${text} ${url}`)}`;

  return (
    <div className="inline-flex flex-wrap items-center gap-2">
      <button onClick={share} className="min-h-[44px] rounded-xl bg-[#3156C9] px-4 font-semibold text-white hover:bg-[#2544A5] transition-colors cursor-pointer">
        {label}
      </button>
      <a href={whatsapp} target="_blank" rel="noopener noreferrer"
         className="inline-flex min-h-[44px] items-center rounded-xl border border-[#D4CEBF] bg-white px-4 font-semibold text-[#171B24] hover:bg-[#F3EBDD] transition-colors">
        WhatsApp
      </a>
      <button onClick={async () => { await copyText(url); flash('Link copied'); }}
        className="min-h-[44px] rounded-xl border border-[#D4CEBF] bg-white px-4 font-semibold text-[#171B24] hover:bg-[#F3EBDD] transition-colors cursor-pointer">
        Copy link
      </button>
      <span className="text-sm font-medium text-emerald-700" aria-live="polite">{note}</span>
    </div>
  );
}
