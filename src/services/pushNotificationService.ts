import { supabase } from '../lib/supabase';

// Helper to convert base64 VAPID key to Uint8Array for pushManager.subscribe
function urlBase64ToUint8Array(base64String: string) {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

// Default public VAPID key placeholder if env var is not set
const DEFAULT_VAPID_PUBLIC_KEY = 'BMoD5ezxr7kAYMFNs2fJf3WrTJoWhtOCuI2g46URESOf2746xTk3xV-2e6G_GydgGReQbi26JoqKE7esDCXFXp8';

export async function requestNotificationPermission(): Promise<boolean> {
  if (!('Notification' in window)) {
    throw new Error('Browser notifications are not supported on this browser.');
  }

  const permission = await Notification.requestPermission();
  return permission === 'granted';
}

export async function registerNotificationWorker(): Promise<ServiceWorkerRegistration | null> {
  if (!('serviceWorker' in navigator)) {
    console.warn('Service workers are not supported on this browser.');
    return null;
  }

  try {
    const basePath = import.meta.env.BASE_URL || '/';
    const registration = await navigator.serviceWorker.register(`${basePath}sw.js`, { scope: basePath });
    return registration;
  } catch (err) {
    console.error('Service Worker registration failed:', err);
    return null;
  }
}

export async function subscribeUserToPush(userId: string): Promise<boolean> {
  const isGranted = await requestNotificationPermission();
  if (!isGranted) return false;

  const registration = await registerNotificationWorker();
  if (!registration) return false;

  if (!('PushManager' in window)) {
    throw new Error('Background push is not supported by this browser.');
  }

  const vapidKey = import.meta.env.VITE_VAPID_PUBLIC_KEY || DEFAULT_VAPID_PUBLIC_KEY;
  let subscription = await registration.pushManager.getSubscription();
  if (!subscription) {
    try {
      subscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(vapidKey)
      });
    } catch (err) {
      console.error('Push subscription failed:', err);
      throw new Error('Your browser could not create a push subscription. Please check browser support and try again.');
    }
  }

  const subJson = subscription.toJSON();
  if (!subJson.endpoint || !subJson.keys?.auth || !subJson.keys?.p256dh) {
    throw new Error('Your browser returned an incomplete push subscription.');
  }

  const { error } = await supabase
    .from('push_subscriptions')
    .upsert({
      user_id: userId,
      subscription: subJson,
      created_at: new Date().toISOString()
    }, { onConflict: 'user_id' });

  if (error) {
    console.error('Error saving push subscription to Supabase:', error);
    throw new Error('Your push subscription was created but could not be saved. Please try again.');
  }

  return true;
}

export async function unsubscribeUserFromPush(userId: string): Promise<void> {
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.ready;
      const subscription = await registration.pushManager.getSubscription();
      if (subscription) {
        await subscription.unsubscribe();
      }
    } catch {
      // Ignore
    }
  }

  await supabase
    .from('push_subscriptions')
    .delete()
    .eq('user_id', userId);
}

export async function getPushSubscription(userId: string) {
  const { data, error } = await supabase
    .from('push_subscriptions')
    .select('*')
    .eq('user_id', userId)
    .single();

  if (error) return null;
  return data;
}

/**
 * Display desktop background notification if tab is hidden or user has granted permission
 */
export function showBackgroundDesktopNotification(title: string, message: string, url: string = '/notifications') {
  if (!('Notification' in window) || Notification.permission !== 'granted') return;

  try {
    const notif = new Notification(title, {
      body: message,
      icon: '/assets/bible-arena-logo.png',
      badge: '/assets/bible-arena-logo.png',
      tag: 'biblearena-notif',
      data: { url }
    });

    notif.onclick = () => {
      window.focus();
      window.location.href = url;
      notif.close();
    };
  } catch {
    // Fallback if Notification constructor fails on mobile browsers
  }
}
