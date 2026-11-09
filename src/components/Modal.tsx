import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  maxWidth?: string;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  maxWidth = 'max-w-xl'
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    const previousOverflow = document.body.style.overflow;
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className={`relative w-full ${maxWidth} bg-[#F3EBDD] rounded-t-3xl sm:rounded-3xl shadow-2xl border border-[#171B24]/15 overflow-hidden flex flex-col max-h-[90svh] max-h-[90dvh] sm:max-h-[85vh]`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#171B24]/15 bg-white/50 shrink-0">
          <h3 className="font-serif font-bold text-xl text-[#171B24]">{title}</h3>
          <button
            onClick={onClose}
            className="w-11 h-11 rounded-full bg-[#171B24]/5 hover:bg-[#171B24]/10 text-[#171B24] flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="min-h-0 p-4 sm:p-6 overflow-y-auto overscroll-contain flex-1 pb-[max(2.5rem,env(safe-area-inset-bottom))] sm:pb-6" style={{ WebkitOverflowScrolling: 'touch', touchAction: 'pan-y' }}>
          {children}
        </div>
      </div>
    </div>
  );
};
