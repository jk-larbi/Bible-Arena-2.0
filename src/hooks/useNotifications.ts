import { useCallback, useEffect, useState } from 'react';
import {
  getNotifications,
  markNotificationAsRead,
  markAllNotificationsAsRead,
  deleteNotification,
  clearAllNotifications,
  subscribeToNotifications,
  getNotificationPreferences,
  playNotificationChime,
  NotificationItem,
  NotificationPreferences
} from '../services/notificationService';
import { showBackgroundDesktopNotification } from '../services/pushNotificationService';

export type { NotificationItem as Notification };

export function useNotifications(userId: string | undefined) {
  const [items, setItems] = useState<NotificationItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [prefs, setPrefs] = useState<NotificationPreferences | null>(null);

  const loadPreferences = useCallback(async () => {
    if (!userId) return;
    const userPrefs = await getNotificationPreferences(userId);
    setPrefs(userPrefs);
  }, [userId]);

  const load = useCallback(async () => {
    if (!userId) return;
    try {
      const data = await getNotifications();
      setItems(data);
    } catch (err) {
      console.error('Failed to load notifications:', err);
    } finally {
      setLoading(false);
    }
  }, [userId]);

  useEffect(() => {
    if (!userId) {
      setItems([]);
      setLoading(false);
      return;
    }

    loadPreferences();
    load();

    const unsubscribe = subscribeToNotifications(userId, (newNotif) => {
      setItems((prev) => {
        // Prevent duplicates
        if (prev.some((item) => item.id === newNotif.id)) return prev;
        return [newNotif, ...prev];
      });

      // Sound feedback
      if (prefs?.sound_enabled !== false) {
        playNotificationChime();
      }

      // Background desktop push if tab is inactive or hidden
      if (prefs?.browser_push_enabled !== false && document.visibilityState !== 'visible') {
        showBackgroundDesktopNotification(newNotif.title, newNotif.message, newNotif.reference_id || '/notifications');
      }
    });

    const onVisible = () => {
      if (document.visibilityState === 'visible') {
        load();
      }
    };
    document.addEventListener('visibilitychange', onVisible);

    return () => {
      unsubscribe();
      document.removeEventListener('visibilitychange', onVisible);
    };
  }, [userId, load, loadPreferences, prefs?.sound_enabled, prefs?.browser_push_enabled]);

  const unread = items.filter((n) => !n.is_read).length;

  const markRead = async (id: string) => {
    setItems((p) => p.map((n) => (n.id === id ? { ...n, is_read: true } : n)));
    try {
      await markNotificationAsRead(id);
    } catch {
      // Revert if error
    }
  };

  const markAllRead = async () => {
    setItems((p) => p.map((n) => ({ ...n, is_read: true })));
    try {
      await markAllNotificationsAsRead();
    } catch {
      // Revert
    }
  };

  const deleteItem = async (id: string) => {
    setItems((p) => p.filter((n) => n.id !== id));
    try {
      await deleteNotification(id);
    } catch {
      // Revert
    }
  };

  const clearAll = async () => {
    if (!userId) return;
    setItems([]);
    try {
      await clearAllNotifications(userId);
    } catch {
      load();
    }
  };

  return {
    items,
    unread,
    loading,
    prefs,
    markRead,
    markAllRead,
    deleteItem,
    clearAll,
    refresh: load,
    refreshPrefs: loadPreferences
  };
}
