import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSession } from '../lib/auth';
import { useNotifications, Notification } from '../hooks/useNotifications';
import { supabase } from '../lib/supabase';
import { notifyChallengeResponse } from '../services/notificationService';
import { Button } from '../components/Button';
import { Bell, Flame, Users, Award, Gamepad2, CheckCheck, Trash2, Settings, ArrowLeft, Check, X, Filter } from 'lucide-react';

function formatFullTime(dateStr: string): string {
  try {
    const d = new Date(dateStr);
    return d.toLocaleDateString(undefined, {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  } catch {
    return dateStr;
  }
}

export const NotificationsPage: React.FC = () => {
  const nav = useNavigate();
  const { user } = useSession();
  const { items, unread, loading, markRead, markAllRead, deleteItem, clearAll } = useNotifications(user?.id);

  const [activeTab, setActiveTab] = useState<'all' | 'unread' | 'challenge' | 'room' | 'achievement'>('all');
  const [actionBusy, setActionBusy] = useState<string | null>(null);

  const filteredItems = items.filter((item) => {
    if (activeTab === 'unread') return !item.is_read;
    if (activeTab === 'challenge') return item.type.includes('challenge');
    if (activeTab === 'room') return item.type.includes('room') || item.type === 'game_started';
    if (activeTab === 'achievement') return item.type.includes('achievement');
    return true;
  });

  async function handleChallengeAction(
    notif: Notification,
    status: 'accepted' | 'declined'
  ) {
    const challengeId = notif.reference_id;
    if (!challengeId) return;

    setActionBusy(notif.id);
    try {
      await supabase.from('challenges').update({ status }).eq('id', challengeId);
      
      if (notif.sender_id && user?.id) {
        const { data: profile } = await supabase.from('profiles').select('full_name, username').eq('id', user.id).single();
        const senderName = profile?.full_name || profile?.username || 'Your opponent';
        await notifyChallengeResponse(notif.sender_id, user.id, senderName, challengeId, status);
      }

      await markRead(notif.id);
      if (status === 'accepted') {
        nav('/challenges');
      }
    } catch (err) {
      console.error('Error acting on challenge:', err);
    } finally {
      setActionBusy(null);
    }
  }

  const getIcon = (type: string) => {
    if (type.includes('achievement')) return <Award className="w-5 h-5 text-amber-500" />;
    if (type.includes('challenge')) return <Flame className="w-5 h-5 text-[#D66B3D]" />;
    if (type.includes('room')) return <Users className="w-5 h-5 text-[#3156C9]" />;
    if (type === 'game_started') return <Gamepad2 className="w-5 h-5 text-emerald-600" />;
    return <Bell className="w-5 h-5 text-[#3156C9]" />;
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6 text-[#171B24]">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E3D9C6] pb-6">
        <div className="flex items-center gap-3">
          <button
            onClick={() => nav(-1)}
            className="p-2 rounded-xl bg-white border border-[#171B24]/10 hover:bg-[#F3EBDD] transition-colors cursor-pointer"
            aria-label="Go Back"
          >
            <ArrowLeft className="w-5 h-5 text-[#171B24]" />
          </button>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-serif font-extrabold text-2xl sm:text-3xl text-[#171B24]">
                Notification History
              </h1>
              {unread > 0 && (
                <span className="rounded-full bg-[#D66B3D] px-2.5 py-0.5 text-xs font-bold text-white">
                  {unread} unread
                </span>
              )}
            </div>
            <p className="text-xs sm:text-sm text-[#5A6275]">
              Track challenges, live game room invites, and achievement activity.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {unread > 0 && (
            <button
              onClick={markAllRead}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white border border-[#171B24]/10 text-xs font-bold text-[#3156C9] hover:bg-[#F3EBDD] transition-colors cursor-pointer"
            >
              <CheckCheck className="w-4 h-4" />
              <span>Mark All Read</span>
            </button>
          )}

          <button
            onClick={() => nav('/notification-settings')}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#171B24] text-xs font-bold text-[#F3EBDD] hover:bg-[#D66B3D] transition-colors cursor-pointer"
          >
            <Settings className="w-4 h-4" />
            <span>Preferences</span>
          </button>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-2 rounded-2xl border border-[#171B24]/10 shadow-xs">
        <div className="flex flex-wrap items-center gap-1">
          {[
            { id: 'all', label: 'All', icon: <Bell className="w-3.5 h-3.5" /> },
            { id: 'unread', label: `Unread (${unread})`, icon: <Filter className="w-3.5 h-3.5" /> },
            { id: 'challenge', label: 'Challenges', icon: <Flame className="w-3.5 h-3.5" /> },
            { id: 'room', label: 'Live Games', icon: <Users className="w-3.5 h-3.5" /> },
            { id: 'achievement', label: 'Achievements', icon: <Award className="w-3.5 h-3.5" /> }
          ].map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer min-h-[36px] ${
                  isActive
                    ? 'bg-[#171B24] text-white shadow-xs'
                    : 'text-[#5A6275] hover:text-[#171B24] hover:bg-[#F3EBDD]'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {items.length > 0 && (
          <button
            onClick={() => {
              if (window.confirm('Clear all notifications from your history?')) {
                clearAll();
              }
            }}
            className="px-3 py-1.5 text-xs font-semibold text-red-600 hover:bg-red-50 rounded-xl transition-colors cursor-pointer"
          >
            Clear History
          </button>
        )}
      </div>

      {/* Notifications List */}
      <div className="bg-white rounded-3xl border border-[#171B24]/10 shadow-md divide-y divide-[#F3EBDD] overflow-hidden">
        {loading ? (
          <div className="p-12 text-center text-sm text-[#5A6275]">
            <div className="inline-block h-6 w-6 animate-spin rounded-full border-2 border-[#3156C9] border-t-transparent mb-2" />
            <p>Loading notification history…</p>
          </div>
        ) : filteredItems.length === 0 ? (
          <div className="p-12 text-center space-y-3">
            <div className="w-16 h-16 rounded-2xl bg-[#F3EBDD] text-[#171B24]/40 flex items-center justify-center mx-auto">
              <Bell className="w-8 h-8" />
            </div>
            <h3 className="font-serif font-bold text-xl text-[#171B24]">No notifications found</h3>
            <p className="text-xs text-[#5A6275] max-w-sm mx-auto">
              {activeTab === 'all'
                ? 'Your inbox is clear. Direct challenges and match invitations will appear here in real time.'
                : `No ${activeTab} notifications in your history.`}
            </p>
          </div>
        ) : (
          filteredItems.map((item) => {
            const isUnread = !item.is_read;
            return (
              <div
                key={item.id}
                className={`p-4 sm:p-5 flex items-start gap-4 transition-colors ${
                  isUnread ? 'bg-[#F3EBDD]/50 font-medium' : 'hover:bg-[#F3EBDD]/20'
                }`}
              >
                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#171B24]/5 border border-[#171B24]/10 shadow-xs">
                  {getIcon(item.type)}
                </div>

                <div className="min-w-0 flex-1 space-y-1">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="font-serif font-bold text-base text-[#171B24] truncate">{item.title}</h4>
                    <span className="text-xs text-[#5A6275] shrink-0 font-medium">
                      {formatFullTime(item.created_at)}
                    </span>
                  </div>

                  <p className="text-sm text-[#171B24]/80 leading-relaxed">{item.message}</p>

                  {/* Actions */}
                  {item.type === 'challenge' && (
                    <div className="pt-2 flex items-center gap-2">
                      <Button
                        size="sm"
                        disabled={actionBusy === item.id}
                        onClick={() => handleChallengeAction(item, 'accepted')}
                        className="bg-[#3156C9] hover:bg-[#2544A5] text-white"
                      >
                        <Check className="w-4 h-4 mr-1" /> Accept Challenge
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        disabled={actionBusy === item.id}
                        onClick={() => handleChallengeAction(item, 'declined')}
                        className="text-red-600 border-red-200 hover:bg-red-50"
                      >
                        <X className="w-4 h-4 mr-1" /> Decline
                      </Button>
                    </div>
                  )}

                  {(item.type === 'room_invite' || item.type === 'room_joined' || item.type === 'game_started') && item.reference_id && (
                    <div className="pt-2">
                      <Button
                        size="sm"
                        onClick={() => {
                          markRead(item.id);
                          nav(item.reference_id!);
                        }}
                        className="bg-[#D66B3D] hover:bg-[#c25a2c] text-white"
                      >
                        <Gamepad2 className="w-4 h-4 mr-1" /> {item.type === 'game_started' ? 'Enter Live Match' : 'Join Game Room'}
                      </Button>
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  {isUnread && (
                    <button
                      onClick={() => markRead(item.id)}
                      className="p-1 text-[#D66B3D] hover:text-[#171B24]"
                      title="Mark as read"
                    >
                      <span className="block h-2.5 w-2.5 rounded-full bg-[#D66B3D]" />
                    </button>
                  )}
                  <button
                    onClick={() => deleteItem(item.id)}
                    className="p-2 text-gray-400 hover:text-red-600 rounded-lg hover:bg-red-50 transition-colors cursor-pointer"
                    title="Delete notification"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
