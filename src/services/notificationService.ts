import { supabase } from '../lib/supabase';

export type NotificationItem = {
  id: string;
  user_id: string;
  sender_id?: string | null;
  title: string;
  message: string;
  type: 'challenge' | 'challenge_response' | 'room_invite' | 'room_joined' | 'game_started' | 'achievement' | 'system' | string;
  reference_id?: string | null;
  is_read: boolean;
  created_at: string;
};

export type NotificationPreferences = {
  user_id?: string;
  browser_push_enabled: boolean;
  challenges_enabled: boolean;
  live_games_enabled: boolean;
  achievements_enabled: boolean;
  sound_enabled: boolean;
};

export const DEFAULT_PREFERENCES: NotificationPreferences = {
  browser_push_enabled: true,
  challenges_enabled: true,
  live_games_enabled: true,
  achievements_enabled: true,
  sound_enabled: true,
};

/**
 * Audio Chime Generator using Web Audio API
 */
export function playNotificationChime() {
  try {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;
    const ctx = new AudioContextClass();
    
    // First tone (G5 - 783.99 Hz)
    const osc1 = ctx.createOscillator();
    const gain1 = ctx.createGain();
    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(783.99, ctx.currentTime);
    gain1.gain.setValueAtTime(0.15, ctx.currentTime);
    gain1.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);
    osc1.connect(gain1);
    gain1.connect(ctx.destination);
    osc1.start(ctx.currentTime);
    osc1.stop(ctx.currentTime + 0.25);

    // Second tone (C6 - 1046.50 Hz)
    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(1046.50, ctx.currentTime + 0.1);
    gain2.gain.setValueAtTime(0.2, ctx.currentTime + 0.1);
    gain2.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.45);
    osc2.connect(gain2);
    gain2.connect(ctx.destination);
    osc2.start(ctx.currentTime + 0.1);
    osc2.stop(ctx.currentTime + 0.45);
  } catch {
    // Ignore audio autoplay restrictions or uninitialized audio context
  }
}

/**
 * Fetch notifications for the logged-in user
 */
export async function getNotifications(): Promise<NotificationItem[]> {
  const { data, error } = await supabase
    .from('notifications')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching notifications:', error);
    return [];
  }
  
  // Normalize row fields to support both is_read and read_at schemas
  return (data || []).map((row: any) => ({
    id: row.id,
    user_id: row.user_id,
    sender_id: row.sender_id,
    title: row.title,
    message: row.message || row.body || '',
    type: row.type,
    reference_id: row.reference_id || row.link || (row.data?.challenge_id) || null,
    is_read: Boolean(row.is_read || row.read_at),
    created_at: row.created_at,
  }));
}

/**
 * Mark a single notification as read
 */
export async function markNotificationAsRead(id: string): Promise<void> {
  const now = new Date().toISOString();
  const { error } = await supabase
    .from('notifications')
    .update({ is_read: true, read_at: now })
    .eq('id', id);

  if (error) {
    console.error('Error marking notification as read:', error);
    throw error;
  }
}

/**
 * Mark all notifications as read for current user
 */
export async function markAllNotificationsAsRead(): Promise<void> {
  const now = new Date().toISOString();
  const { error } = await supabase
    .from('notifications')
    .update({ is_read: true, read_at: now })
    .or('is_read.eq.false,read_at.is.null');

  if (error) {
    console.error('Error marking all notifications as read:', error);
    throw error;
  }
}

/**
 * Delete a notification
 */
export async function deleteNotification(id: string): Promise<void> {
  const { error } = await supabase
    .from('notifications')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error deleting notification:', error);
    throw error;
  }
}

/**
 * Clear all notifications for current user
 */
export async function clearAllNotifications(userId: string): Promise<void> {
  const { error } = await supabase
    .from('notifications')
    .delete()
    .eq('user_id', userId);

  if (error) {
    console.error('Error clearing all notifications:', error);
    throw error;
  }
}

/**
 * Subscribe to Supabase Realtime for instant notification inserts
 */
export function subscribeToNotifications(
  userId: string,
  onNewNotification: (notification: NotificationItem) => void
) {
  const channel = supabase
    .channel(`notifications-${userId}`)
    .on(
      'postgres_changes',
      {
        event: 'INSERT',
        schema: 'public',
        table: 'notifications',
        filter: `user_id=eq.${userId}`
      },
      (payload) => {
        const row = payload.new as any;
        const normalized: NotificationItem = {
          id: row.id,
          user_id: row.user_id,
          sender_id: row.sender_id,
          title: row.title,
          message: row.message || row.body || '',
          type: row.type,
          reference_id: row.reference_id || row.link || null,
          is_read: Boolean(row.is_read || row.read_at),
          created_at: row.created_at || new Date().toISOString(),
        };
        onNewNotification(normalized);
      }
    )
    .subscribe();

  return () => {
    supabase.removeChannel(channel);
  };
}

/**
 * Helper to notify a player of a direct challenge
 */
export async function notifyPlayerOfChallenge(
  recipientId: string,
  senderId: string,
  senderName: string,
  challengeId: string
) {
  if (recipientId === senderId) return; // Don't notify self
  const { error } = await supabase
    .from('notifications')
    .insert({
      user_id: recipientId,
      sender_id: senderId,
      title: 'New Game Challenge!',
      message: `${senderName} has challenged you to a Bible game.`,
      type: 'challenge',
      reference_id: challengeId
    });

  if (error) throw error;
}

/**
 * Helper to notify challenge response (accepted / declined)
 */
export async function notifyChallengeResponse(
  recipientId: string,
  senderId: string,
  senderName: string,
  challengeId: string,
  status: 'accepted' | 'declined'
) {
  if (recipientId === senderId) return;
  const verb = status === 'accepted' ? 'accepted' : 'declined';
  const { error } = await supabase
    .from('notifications')
    .insert({
      user_id: recipientId,
      sender_id: senderId,
      title: `Challenge ${status === 'accepted' ? 'Accepted! ⚔️' : 'Declined'}`,
      message: `${senderName} ${verb} your Bible game challenge.`,
      type: 'challenge_response',
      reference_id: challengeId
    });

  if (error) throw error;
}

/**
 * Helper to notify live game invitation
 */
export async function notifyLiveGameInvite(
  recipientId: string,
  senderId: string,
  senderName: string,
  roomCode: string
) {
  if (recipientId === senderId) return;
  const { error } = await supabase
    .from('notifications')
    .insert({
      user_id: recipientId,
      sender_id: senderId,
      title: 'Live Game Invite 🎮',
      message: `${senderName} invited you to join a live game room (PIN: ${roomCode}).`,
      type: 'room_invite',
      reference_id: `/join/${roomCode}`
    });

  if (error) throw error;
}

/**
 * Helper to notify host when a player joins room
 */
export async function notifyPlayerJoinedRoom(
  hostId: string,
  playerId: string,
  playerName: string,
  roomId: string
) {
  if (hostId === playerId) return;
  const { error } = await supabase
    .from('notifications')
    .insert({
      user_id: hostId,
      sender_id: playerId,
      title: 'Player Joined Your Room 👥',
      message: `${playerName} has joined your live game room!`,
      type: 'room_joined',
      reference_id: `/room/${roomId}`
    });

  if (error) throw error;
}

/**
 * Helper to notify players when host starts game
 */
export async function notifyGameStarted(
  recipientId: string,
  hostName: string,
  roomId: string
) {
  const { error } = await supabase
    .from('notifications')
    .insert({
      user_id: recipientId,
      title: 'Match Started! 🚀',
      message: `${hostName} has started the live match!`,
      type: 'game_started',
      reference_id: `/room/${roomId}`
    });

  if (error) throw error;
}

/**
 * Helper to notify achievement unlocked
 */
export async function notifyAchievementUnlocked(
  userId: string,
  achievementTitle: string
) {
  const { error } = await supabase
    .from('notifications')
    .insert({
      user_id: userId,
      title: 'Achievement Unlocked! 🏆',
      message: `You earned the '${achievementTitle}' achievement!`,
      type: 'achievement',
      reference_id: '/profile'
    });

  if (error) throw error;
}

/**
 * Fetch notification preferences
 */
export async function getNotificationPreferences(userId: string): Promise<NotificationPreferences> {
  try {
    const { data, error } = await supabase
      .from('notification_preferences')
      .select('*')
      .eq('user_id', userId)
      .single();

    if (error || !data) {
      const local = localStorage.getItem(`notif_prefs_${userId}`);
      if (local) return JSON.parse(local);
      return { ...DEFAULT_PREFERENCES, user_id: userId };
    }
    return {
      user_id: data.user_id,
      browser_push_enabled: data.browser_push_enabled ?? true,
      challenges_enabled: data.challenges_enabled ?? true,
      live_games_enabled: data.live_games_enabled ?? true,
      achievements_enabled: data.achievements_enabled ?? true,
      sound_enabled: data.sound_enabled ?? true,
    };
  } catch {
    return { ...DEFAULT_PREFERENCES, user_id: userId };
  }
}

/**
 * Update notification preferences
 */
export async function updateNotificationPreferences(
  userId: string,
  prefs: NotificationPreferences
): Promise<void> {
  localStorage.setItem(`notif_prefs_${userId}`, JSON.stringify(prefs));
  try {
    await supabase.from('notification_preferences').upsert({
      user_id: userId,
      browser_push_enabled: prefs.browser_push_enabled,
      challenges_enabled: prefs.challenges_enabled,
      live_games_enabled: prefs.live_games_enabled,
      achievements_enabled: prefs.achievements_enabled,
      sound_enabled: prefs.sound_enabled,
      updated_at: new Date().toISOString()
    });
  } catch (err) {
    console.error('Error saving notification preferences:', err);
  }
}
