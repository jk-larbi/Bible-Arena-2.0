import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSession } from '../lib/auth';
import {
  getNotificationPreferences,
  updateNotificationPreferences,
  playNotificationChime,
  NotificationPreferences
} from '../services/notificationService';
import {
  subscribeUserToPush,
  unsubscribeUserFromPush
} from '../services/pushNotificationService';
import { Button } from '../components/Button';
import { Bell, Flame, Users, Award, Volume2, ShieldCheck, ArrowLeft, Check, AlertCircle } from 'lucide-react';

export const NotificationSettingsPage: React.FC = () => {
  const nav = useNavigate();
  const { user } = useSession();

  const [prefs, setPrefs] = useState<NotificationPreferences>({
    browser_push_enabled: true,
    daily_verse_enabled: true,
    challenges_enabled: true,
    live_games_enabled: true,
    achievements_enabled: true,
    sound_enabled: true
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [browserPermission, setBrowserPermission] = useState<NotificationPermission>(
    typeof Notification !== 'undefined' ? Notification.permission : 'default'
  );
  const [statusMsg, setStatusMsg] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  useEffect(() => {
    async function load() {
      if (!user?.id) {
        setLoading(false);
        return;
      }
      try {
        const fetched = await getNotificationPreferences(user.id);
        setPrefs(fetched);
      } catch (err) {
        console.error('Failed to load preferences:', err);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [user?.id]);

  const handleToggle = (key: keyof NotificationPreferences) => {
    setPrefs((prev) => {
      const next = { ...prev, [key]: !prev[key] };
      if (key === 'sound_enabled' && next.sound_enabled) {
        playNotificationChime();
      }
      return next;
    });
  };

  const handleEnableBrowserPush = async () => {
    if (!user?.id) {
      setStatusMsg({ type: 'error', text: 'Please log in to enable browser push notifications.' });
      return;
    }
    setSaving(true);
    setStatusMsg(null);
    try {
      const subscribed = await subscribeUserToPush(user.id);
      if (typeof Notification !== 'undefined') {
        setBrowserPermission(Notification.permission);
      }
      if (subscribed) {
        setPrefs((p) => ({ ...p, browser_push_enabled: true }));
        setStatusMsg({ type: 'success', text: 'Browser push notifications successfully enabled on this device!' });
      } else {
        setPrefs((p) => ({ ...p, browser_push_enabled: false }));
        setStatusMsg({ type: 'error', text: 'Push notifications could not be enabled. Check browser permission and support, then try again.' });
      }
    } catch (err) {
      setStatusMsg({ type: 'error', text: (err as Error).message });
    } finally {
      setSaving(false);
    }
  };

  const handleDisableBrowserPush = async () => {
    if (!user?.id) return;
    setSaving(true);
    try {
      await unsubscribeUserFromPush(user.id);
      setPrefs((p) => ({ ...p, browser_push_enabled: false }));
      setStatusMsg({ type: 'success', text: 'Browser push notifications disabled.' });
    } catch (err) {
      setStatusMsg({ type: 'error', text: (err as Error).message });
    } finally {
      setSaving(false);
    }
  };

  const handleSavePreferences = async () => {
    if (!user?.id) {
      setStatusMsg({ type: 'error', text: 'Please sign in to save preferences.' });
      return;
    }
    setSaving(true);
    setStatusMsg(null);
    try {
      await updateNotificationPreferences(user.id, prefs);
      setStatusMsg({ type: 'success', text: 'Notification preferences saved successfully!' });
    } catch (err) {
      setStatusMsg({ type: 'error', text: (err as Error).message });
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="max-w-xl mx-auto py-12 px-4 text-center">
        <div className="inline-block h-6 w-6 animate-spin rounded-full border-2 border-[#3156C9] border-t-transparent mb-2" />
        <p className="text-sm font-medium text-[#5A6275]">Loading preferences…</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8 space-y-6 text-[#171B24]">
      {/* Top Title Bar */}
      <div className="flex items-center gap-3 border-b border-[#E3D9C6] pb-6">
        <button
          onClick={() => nav(-1)}
          className="p-2 rounded-xl bg-white border border-[#171B24]/10 hover:bg-[#F3EBDD] transition-colors cursor-pointer"
          aria-label="Go Back"
        >
          <ArrowLeft className="w-5 h-5 text-[#171B24]" />
        </button>
        <div>
          <h1 className="font-serif font-extrabold text-2xl sm:text-3xl text-[#171B24]">
            Notification Settings
          </h1>
          <p className="text-xs sm:text-sm text-[#5A6275]">
            Control real-time alerts, Web Push permissions, and sound preferences.
          </p>
        </div>
      </div>

      {statusMsg && (
        <div
          className={`p-4 rounded-2xl text-xs sm:text-sm font-medium flex items-center gap-2 ${
            statusMsg.type === 'success' ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'
          }`}
        >
          {statusMsg.type === 'success' ? <Check className="w-4 h-4 shrink-0" /> : <AlertCircle className="w-4 h-4 shrink-0" />}
          <span>{statusMsg.text}</span>
        </div>
      )}

      {/* Web Push Card */}
      <div className="bg-white rounded-3xl p-6 border border-[#171B24]/10 shadow-md space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#3156C9]/10 text-[#3156C9] flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg text-[#171B24]">Browser Push Notifications</h3>
              <p className="text-xs text-[#5A6275]">
                Receive instant pop-ups when you're using another tab or background app.
              </p>
            </div>
          </div>
          <span
            className={`px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider shrink-0 ${
              browserPermission === 'granted' && prefs.browser_push_enabled
                ? 'bg-emerald-100 text-emerald-800'
                : 'bg-amber-100 text-amber-800'
            }`}
          >
            {browserPermission === 'granted' && prefs.browser_push_enabled ? 'Active' : 'Disabled'}
          </span>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-[#F3EBDD]/60 p-4 rounded-2xl border border-[#171B24]/10 text-xs">
          <div>
            <p className="font-bold text-[#171B24]">Permission Status: <span className="capitalize">{browserPermission}</span></p>
            <p className="text-[#5A6275] mt-0.5">
              {browserPermission === 'granted'
                ? 'Your browser allows BibleArena push alerts.'
                : 'Interactive prompt required to activate background Web Push.'}
            </p>
          </div>

          {browserPermission === 'granted' && prefs.browser_push_enabled ? (
            <Button size="sm" variant="outline" onClick={handleDisableBrowserPush} disabled={saving}>
              Disable Push
            </Button>
          ) : (
            <Button size="sm" onClick={handleEnableBrowserPush} disabled={saving} className="bg-[#3156C9] text-white">
              Enable Push Notifications
            </Button>
          )}
        </div>
      </div>

      {/* Category Preference Toggles */}
      <div className="bg-white rounded-3xl p-6 border border-[#171B24]/10 shadow-md divide-y divide-[#F3EBDD]">
        <h3 className="font-serif font-bold text-lg text-[#171B24] pb-4">Activity Categories</h3>

        {/* Peer Challenges */}
        <div className="py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#D66B3D]/10 text-[#D66B3D] flex items-center justify-center">
              <Flame className="w-4 h-4" />
            </div>
            <div>
              <p className="font-bold text-sm text-[#171B24]">Peer Challenges</p>
              <p className="text-xs text-[#5A6275]">When someone challenges you or responds to your challenge.</p>
            </div>
          </div>
          <button
            onClick={() => handleToggle('challenges_enabled')}
            className={`w-12 h-6 rounded-full transition-colors p-1 cursor-pointer ${
              prefs.challenges_enabled ? 'bg-[#D66B3D]' : 'bg-gray-300'
            }`}
          >
            <div
              className={`w-4 h-4 rounded-full bg-white transition-transform ${
                prefs.challenges_enabled ? 'translate-x-6' : 'translate-x-0'
              }`}
            />
          </button>
        </div>

        {/* Daily Bible Verse */}
        <div className="py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-700 flex items-center justify-center">
              <Bell className="w-4 h-4" />
            </div>
            <div>
              <p className="font-bold text-sm text-[#171B24]">Daily Bible Verse</p>
              <p className="text-xs text-[#5A6275]">Receive a Scripture and short encouragement each morning.</p>
            </div>
          </div>
          <button
            type="button"
            role="switch"
            aria-checked={prefs.daily_verse_enabled}
            onClick={() => handleToggle('daily_verse_enabled')}
            className={`w-12 h-6 rounded-full transition-colors p-1 cursor-pointer ${prefs.daily_verse_enabled ? 'bg-emerald-600' : 'bg-gray-300'}`}
          >
            <div className={`w-4 h-4 rounded-full bg-white transition-transform ${prefs.daily_verse_enabled ? 'translate-x-6' : 'translate-x-0'}`} />
          </button>
        </div>

        {/* Live Game Invitations */}
        <div className="py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#3156C9]/10 text-[#3156C9] flex items-center justify-center">
              <Users className="w-4 h-4" />
            </div>
            <div>
              <p className="font-bold text-sm text-[#171B24]">Live Game Invitations</p>
              <p className="text-xs text-[#5A6275]">Room codes, players joining your room, and match start alerts.</p>
            </div>
          </div>
          <button
            onClick={() => handleToggle('live_games_enabled')}
            className={`w-12 h-6 rounded-full transition-colors p-1 cursor-pointer ${
              prefs.live_games_enabled ? 'bg-[#3156C9]' : 'bg-gray-300'
            }`}
          >
            <div
              className={`w-4 h-4 rounded-full bg-white transition-transform ${
                prefs.live_games_enabled ? 'translate-x-6' : 'translate-x-0'
              }`}
            />
          </button>
        </div>

        {/* Achievements */}
        <div className="py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center">
              <Award className="w-4 h-4" />
            </div>
            <div>
              <p className="font-bold text-sm text-[#171B24]">Achievements & Quests</p>
              <p className="text-xs text-[#5A6275]">Unlocked badges, level ups, and milestone achievements.</p>
            </div>
          </div>
          <button
            onClick={() => handleToggle('achievements_enabled')}
            className={`w-12 h-6 rounded-full transition-colors p-1 cursor-pointer ${
              prefs.achievements_enabled ? 'bg-amber-500' : 'bg-gray-300'
            }`}
          >
            <div
              className={`w-4 h-4 rounded-full bg-white transition-transform ${
                prefs.achievements_enabled ? 'translate-x-6' : 'translate-x-0'
              }`}
            />
          </button>
        </div>

        {/* Sound Effects */}
        <div className="py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-purple-500/10 text-purple-600 flex items-center justify-center">
              <Volume2 className="w-4 h-4" />
            </div>
            <div>
              <p className="font-bold text-sm text-[#171B24]">Notification Chime Sound</p>
              <p className="text-xs text-[#5A6275]">Play audio chime when a live notification arrives.</p>
            </div>
          </div>
          <button
            onClick={() => handleToggle('sound_enabled')}
            className={`w-12 h-6 rounded-full transition-colors p-1 cursor-pointer ${
              prefs.sound_enabled ? 'bg-purple-600' : 'bg-gray-300'
            }`}
          >
            <div
              className={`w-4 h-4 rounded-full bg-white transition-transform ${
                prefs.sound_enabled ? 'translate-x-6' : 'translate-x-0'
              }`}
            />
          </button>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end gap-3 pt-4">
        <Button
          variant="primary"
          size="lg"
          onClick={handleSavePreferences}
          disabled={saving}
          className="bg-[#D66B3D] hover:bg-[#c25a2c] text-white min-h-[48px] px-8"
        >
          {saving ? 'Saving…' : 'Save Preferences'}
        </Button>
      </div>
    </div>
  );
};
