import React, { useState, useRef } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import { copyText, inviteLink, shareRoom } from '../lib/rooms';
import { Download, Copy, Share2, MessageCircle, Check, QrCode } from 'lucide-react';

interface Props {
  code: string;
  gameTitle?: string;
}

export const RoomSharePanel: React.FC<Props> = ({ code, gameTitle = 'BibleArena Match' }) => {
  const [note, setNote] = useState('');
  const qrRef = useRef<HTMLDivElement>(null);

  const url = inviteLink(code);

  const flash = (m: string) => {
    setNote(m);
    setTimeout(() => setNote(''), 2500);
  };

  const handleDownloadQR = () => {
    if (!qrRef.current) return;
    const canvas = qrRef.current.querySelector('canvas');
    if (!canvas) return;

    const image = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = image;
    link.download = `BibleArena_Room_${code}_QR.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    flash('QR Code downloaded!');
  };

  const handleShareWhatsApp = () => {
    const text = encodeURIComponent(`Join my live ${gameTitle} on BibleArena! 📖⚡\nRoom PIN: ${code}\nLink: ${url}`);
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  return (
    <section className="rounded-3xl bg-white p-6 sm:p-8 text-center text-[#171B24] border border-[#171B24]/10 shadow-lg space-y-6">
      <div className="space-y-1">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#3156C9]/10 text-xs font-bold text-[#3156C9] uppercase tracking-wider">
          <QrCode className="w-3.5 h-3.5" /> Instant Join Access
        </div>
        <h3 className="font-serif font-extrabold text-2xl text-[#171B24]">
          Scan or Share to Invite Players
        </h3>
        <p className="text-xs sm:text-sm text-[#5A6275]">
          Scan the QR code with any smartphone camera or tap a share link below to jump in immediately.
        </p>
      </div>

      {/* Large Scannable QR Code */}
      <div className="flex flex-col items-center justify-center">
        <div 
          ref={qrRef}
          className="p-4 bg-white rounded-2xl border-2 border-[#171B24]/10 shadow-md inline-block transition-transform hover:scale-102"
        >
          <QRCodeCanvas
            value={url}
            size={220}
            level="H"
            marginSize={2}
            imageSettings={{
              src: "/assets/bible-arena-logo.png",
              x: undefined,
              y: undefined,
              height: 40,
              width: 40,
              excavate: true,
            }}
          />
        </div>
        <button
          onClick={handleDownloadQR}
          className="mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#F3EBDD] hover:bg-[#EADBCE] text-xs font-bold text-[#171B24] transition-colors cursor-pointer"
        >
          <Download className="w-3.5 h-3.5 text-[#3156C9]" />
          <span>Download QR Image (.PNG)</span>
        </button>
      </div>

      {/* Prominent Room PIN Box */}
      <div className="p-4 bg-[#F3EBDD] rounded-2xl border border-[#171B24]/10 flex flex-col sm:flex-row items-center justify-between gap-3 max-w-md mx-auto">
        <div className="text-left">
          <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#5A6275]">Room PIN</p>
          <p className="select-all font-mono text-3xl font-extrabold tracking-[0.25em] text-[#171B24]">{code}</p>
        </div>
        <button
          onClick={async () => {
            await copyText(code);
            flash('Room PIN copied to clipboard!');
          }}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-white border border-[#171B24]/15 hover:bg-[#171B24] hover:text-white text-xs font-bold transition-all cursor-pointer shadow-xs min-h-[40px]"
        >
          <Copy className="w-3.5 h-3.5" />
          <span>Copy PIN</span>
        </button>
      </div>

      {/* Share Action Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 max-w-md mx-auto">
        <button
          onClick={async () => {
            await copyText(url);
            flash('Invite link copied!');
          }}
          className="inline-flex items-center justify-center gap-2 min-h-[44px] rounded-xl bg-[#3156C9] hover:bg-[#2544A5] px-4 font-bold text-xs text-white transition-colors cursor-pointer shadow-xs"
        >
          <Copy className="w-4 h-4" />
          <span>Copy Link</span>
        </button>

        <button
          onClick={handleShareWhatsApp}
          className="inline-flex items-center justify-center gap-2 min-h-[44px] rounded-xl bg-[#25D366] hover:bg-[#20bd5a] px-4 font-bold text-xs text-white transition-colors cursor-pointer shadow-xs"
        >
          <MessageCircle className="w-4 h-4" />
          <span>WhatsApp</span>
        </button>

        <button
          onClick={async () => {
            const res = await shareRoom(code);
            if (res === 'copied') flash('Invite link copied!');
          }}
          className="inline-flex items-center justify-center gap-2 min-h-[44px] rounded-xl bg-[#D66B3D] hover:bg-[#c25a2c] px-4 font-bold text-xs text-white transition-colors cursor-pointer shadow-xs"
        >
          <Share2 className="w-4 h-4" />
          <span>Share Link</span>
        </button>
      </div>

      {note && (
        <p className="text-xs font-bold text-emerald-700 bg-emerald-50 py-1.5 px-3 rounded-xl inline-flex items-center gap-1.5 mx-auto border border-emerald-200 animate-fadeIn" aria-live="polite">
          <Check className="w-3.5 h-3.5" /> {note}
        </p>
      )}
    </section>
  );
};
