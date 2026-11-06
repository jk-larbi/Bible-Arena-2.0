import React, { useEffect } from 'react';
import { Bell, X } from 'lucide-react';
import { Notification } from '../hooks/useNotifications';

type Props = {
  notification: Notification | null;
  onDismiss: () => void;
  inGame?: boolean;
};

export const NotificationToast: React.FC<Props> = ({ notification, onDismiss, inGame = false }) => {
  useEffect(() => {
    if (!notification) return;
    const timer = setTimeout(() => {
      onDismiss();
    }, 4000);
    return () => clearTimeout(timer);
  }, [notification, onDismiss]);

  if (!notification || inGame) return null;

  return (
    <div className="fixed top-18 right-4 z-50 max-w-sm rounded-2xl bg-[#171B24] p-4 text-white shadow-2xl border border-white/10 flex items-start gap-3 animate-fadeIn transition-all">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#D66B3D]">
        <Bell className="w-4 h-4 text-white" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-xs font-bold uppercase tracking-wider text-[#D66B3D]">New Notification</p>
        <p className="text-sm font-semibold text-white truncate">{notification.title}</p>
        {notification.message && <p className="text-xs text-white/70 truncate mt-0.5">{notification.message}</p>}
      </div>
      <button
        onClick={onDismiss}
        className="p-1 text-white/60 hover:text-white transition-colors cursor-pointer min-h-[36px] min-w-[36px] flex items-center justify-center"
        aria-label="Dismiss notification"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
