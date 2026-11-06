import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Notification } from '../hooks/useNotifications';
import { supabase } from '../lib/supabase';
import { notifyChallengeResponse } from '../services/notificationService';
import { Check, X, Award, Flame, Bell, CheckCheck, Users, Gamepad2, Settings, Trash2, ArrowRight } from 'lucide-react';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  items: Notification[];
  loading: boolean;
  onMarkRead: (id: string) => void;
  onMarkAllRead: () => void;
  onDelete?: (id: string) => void;
  userId?: string;
};

function formatRelativeTime(dateStr: string): string {
  const diffMs = Date.now() - Date.parse(dateStr);
  const diffSecs = Math.floor(diffMs / 1000);
  if (diffSecs < 60) return 'just now';
  const diffMins = Math.floor(diffSecs / 60);
  if (diffMins < 60) return `${diffMins}m ago`;
  const diffHours = Math.floor(diffMins / 60);
  if (diffHours < 24) return `${diffHours}h ago`;
  const diffDays = Math.floor(diffHours / 24);
  return `${diffDays}d ago`;
}

export const NotificationPanel: React.FC<Props> = ({
  isOpen,
  onClose,
  items,
  loading,
  onMarkRead,
  onMarkAllRead,
  onDelete,
  userId
}) => {
  const nav = useNavigate();
  const [actionBusy, setActionBusy] = useState<string | null>(null);

  if (!isOpen) return null;

  async function handleChallengeAction(
    e: React.MouseEvent,
    notif: Notification,
    status: 'accepted' | 'declined'
  ) {
    e.stopPropagation();
    const challengeId = notif.reference_id;
    if (!challengeId) return;

    setActionBusy(notif.id);
    try {
      await supabase.from('challenges').update({ status }).eq('id', challengeId);
      
      // Notify challenger if sender_id exists
      if (notif.sender_id && userId) {
        const { data: profile } = await supabase.from('profiles').select('full_name, username').eq('id', userId).single();
        const senderName = profile?.full_name || profile?.username || 'Your opponent';
        await notifyChallengeResponse(notif.sender_id, userId, senderName, challengeId, status);
      }

      await onMarkRead(notif.id);
      if (status === 'accepted') {
        onClose();
        nav('/challenges');
      }
    } catch (err) {
      console.error('Error acting on challenge:', err);
    } finally {
      setActionBusy(null);
    }
  }

  const handleItemClick = (notif: Notification) => {
    onMarkRead(notif.id);
    if (notif.reference_id) {
      onClose();
      if (notif.reference_id.startsWith('/')) {
        nav(notif.reference_id);
      } else {
        nav(`/challenges`);
      }
    }
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'achievement':
      case 'achievement_earned':
        return <Award className="w-4 h-4 text-amber-500" />;
      case 'challenge':
      case 'challenge_received':
      case 'challenge_accepted':
      case 'challenge_response':
        return <Flame className="w-4 h-4 text-[#D66B3D]" />;
      case 'room_invite':
      case 'room_joined':
        return <Users className="w-4 h-4 text-[#3156C9]" />;
      case 'game_started':
        return <Gamepad2 className="w-4 h-4 text-emerald-600" />;
      case 'challenge_declined':
      case 'challenge_cancelled':
        return <X className="w-4 h-4 text-red-500" />;
      default:
        return <Bell className="w-4 h-4 text-[#3156C9]" />;
    }
  };

  const unreadCount = items.filter((i) => !i.is_read).length;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 z-40 bg-black/40 backdrop-blur-xs transition-opacity cursor-pointer"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Dropdown Panel */}
      <div className="fixed inset-x-0 bottom-0 z-50 flex flex-col rounded-t-3xl bg-white shadow-2xl transition-all sm:absolute sm:inset-auto sm:right-4 sm:top-16 sm:w-[380px] sm:rounded-2xl border border-[#171B24]/10 text-[#171B24]">
        
        {/* Mobile Drag Handle */}
        <div className="flex justify-center pt-3 sm:hidden">
          <div className="h-1.5 w-12 rounded-full bg-[#171B24]/20" />
        </div>

        {/* Panel Header */}
        <div className="flex items-center justify-between border-b border-[#F3EBDD] p-4">
          <div className="flex items-center gap-2">
            <h2 className="font-serif text-lg font-bold">Notifications</h2>
            {unreadCount > 0 && (
              <span className="rounded-full bg-[#D66B3D] px-2 py-0.5 text-xs font-bold text-white">
                {unreadCount}
              </span>
            )}
          </div>

          <div className="flex items-center gap-1">
            {unreadCount > 0 && (
              <button
                onClick={onMarkAllRead}
                className="inline-flex items-center gap-1 rounded-lg px-2 py-1 text-xs font-semibold text-[#3156C9] hover:bg-[#F3EBDD] transition-colors cursor-pointer"
                title="Mark all as read"
              >
                <CheckCheck className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Mark read</span>
              </button>
            )}

            <button
              onClick={() => {
                onClose();
                nav('/notification-settings');
              }}
              className="p-1.5 rounded-lg text-[#5A6275] hover:text-[#171B24] hover:bg-[#F3EBDD] transition-colors cursor-pointer"
              title="Notification Settings"
              aria-label="Notification Settings"
            >
              <Settings className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* List Content */}
        <div 
          className="max-h-[60vh] sm:max-h-[380px] overflow-y-auto divide-y divide-[#F3EBDD] p-2"
          style={{ paddingBottom: 'max(0.5rem, env(safe-area-inset-bottom))' }}
        >
          {loading ? (
            <div className="p-8 text-center text-xs text-[#5A6275]">
              <div className="inline-block h-6 w-6 animate-spin rounded-full border-2 border-[#3156C9] border-t-transparent" />
              <p className="mt-2 font-medium">Checking live notifications…</p>
            </div>
          ) : items.length === 0 ? (
            <div className="p-8 text-center">
              <div className="w-12 h-12 rounded-full bg-[#F3EBDD] text-[#171B24]/40 flex items-center justify-center mx-auto mb-2">
                <Bell className="h-6 w-6" />
              </div>
              <p className="text-sm font-semibold text-[#171B24]">No notifications yet</p>
              <p className="mt-1 text-xs text-[#5A6275]">
                Game invites, peer challenges and achievements will show up here.
              </p>
            </div>
          ) : (
            items.slice(0, 15).map((item) => {
              const isUnread = !item.is_read;
              return (
                <div
                  key={item.id}
                  onClick={() => handleItemClick(item)}
                  className={`group relative flex items-start gap-3 rounded-xl p-3 transition-colors cursor-pointer ${
                    isUnread ? 'bg-[#F3EBDD]/60 font-medium' : 'hover:bg-[#F3EBDD]/30'
                  }`}
                >
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#171B24]/5">
                    {getIcon(item.type)}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-baseline justify-between gap-2">
                      <p className="text-sm font-bold text-[#171B24] truncate">{item.title}</p>
                      <span className="text-[10px] text-[#5A6275] shrink-0">{formatRelativeTime(item.created_at)}</span>
                    </div>

                    <p className="mt-0.5 text-xs text-[#171B24]/80 leading-snug">{item.message}</p>

                    {/* Inline Actions */}
                    {item.type === 'challenge' && (
                      <div className="mt-2.5 flex items-center gap-2">
                        <button
                          disabled={actionBusy === item.id}
                          onClick={(e) => handleChallengeAction(e, item, 'accepted')}
                          className="inline-flex min-h-[32px] items-center gap-1 rounded-lg bg-[#3156C9] px-3 py-1 text-xs font-semibold text-white hover:bg-[#2544A5] transition-colors cursor-pointer shadow-xs"
                        >
                          <Check className="w-3.5 h-3.5" />
                          <span>Accept</span>
                        </button>
                        <button
                          disabled={actionBusy === item.id}
                          onClick={(e) => handleChallengeAction(e, item, 'declined')}
                          className="inline-flex min-h-[32px] items-center gap-1 rounded-lg border border-[#D4CEBF] bg-white px-3 py-1 text-xs font-semibold text-[#171B24] hover:bg-[#F3EBDD] transition-colors cursor-pointer"
                        >
                          <X className="w-3.5 h-3.5 text-red-600" />
                          <span>Decline</span>
                        </button>
                      </div>
                    )}

                    {(item.type === 'room_invite' || item.type === 'room_joined' || item.type === 'game_started') && item.reference_id && (
                      <div className="mt-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onMarkRead(item.id);
                            onClose();
                            nav(item.reference_id!);
                          }}
                          className="inline-flex min-h-[32px] items-center gap-1 rounded-lg bg-[#D66B3D] px-3 py-1 text-xs font-semibold text-white hover:bg-[#c25a2c] transition-colors cursor-pointer shadow-xs"
                        >
                          <Gamepad2 className="w-3.5 h-3.5" />
                          <span>{item.type === 'game_started' ? 'Enter Match' : 'Join Room'}</span>
                        </button>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center gap-1">
                    {isUnread && (
                      <span className="h-2 w-2 shrink-0 rounded-full bg-[#D66B3D]" aria-label="Unread" />
                    )}
                    {onDelete && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onDelete(item.id);
                        }}
                        className="opacity-0 group-hover:opacity-100 p-1 text-gray-400 hover:text-red-600 transition-opacity"
                        title="Delete"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Panel Footer */}
        <div className="border-t border-[#F3EBDD] p-3 flex items-center justify-between text-xs font-semibold">
          <button
            onClick={() => {
              onClose();
              nav('/notifications');
            }}
            className="flex items-center gap-1.5 text-[#3156C9] hover:text-[#2544A5] transition-colors cursor-pointer"
          >
            <span>View All Notifications</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
          
          <button
            onClick={() => {
              onClose();
              nav('/notification-settings');
            }}
            className="text-[#5A6275] hover:text-[#171B24] transition-colors cursor-pointer"
          >
            Settings
          </button>
        </div>

      </div>
    </>
  );
};
