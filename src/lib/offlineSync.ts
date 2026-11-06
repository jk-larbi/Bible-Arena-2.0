import { supabase, isBackendConfigured } from './supabase';

const DB_NAME = 'biblearena_offline_db';
const DB_VERSION = 1;
const STORE_NAME = 'queued_scores';

export type QueuedScore = {
  id?: number;
  userId?: string;
  gameId: string;
  level: number;
  score: number;
  timestamp: string;
};

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined' || !window.indexedDB) {
      reject(new Error('IndexedDB not supported'));
      return;
    }

    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id', autoIncrement: true });
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

/** Enqueues a score progress update into IndexedDB */
export async function enqueueOfflineScore(entry: Omit<QueuedScore, 'id'>): Promise<void> {
  try {
    const db = await openDB();
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);
    store.add(entry);
    await new Promise((resolve) => {
      tx.oncomplete = resolve;
    });
  } catch (err) {
    // LocalStorage fallback if IndexedDB fails
    const localQueue: Omit<QueuedScore, 'id'>[] = JSON.parse(
      localStorage.getItem('biblearena_queued_scores') || '[]'
    );
    localQueue.push(entry);
    localStorage.setItem('biblearena_queued_scores', JSON.stringify(localQueue));
  }
}

/** Reads and syncs all queued score updates from IndexedDB with Supabase */
export async function syncQueuedScores(): Promise<{ syncedCount: number }> {
  if (typeof navigator !== 'undefined' && !navigator.onLine) {
    return { syncedCount: 0 };
  }

  if (!isBackendConfigured || !supabase) {
    return { syncedCount: 0 };
  }

  let syncedCount = 0;

  try {
    const db = await openDB();
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);
    const getAllReq = store.getAll();

    const items: QueuedScore[] = await new Promise((resolve, reject) => {
      getAllReq.onsuccess = () => resolve(getAllReq.result || []);
      getAllReq.onerror = () => reject(getAllReq.error);
    });

    for (const item of items) {
      try {
        if (item.userId) {
          await supabase.from('scores').insert({
            user_id: item.userId,
            game_id: item.gameId,
            score: item.score,
            created_at: item.timestamp
          });

          await supabase.from('game_progress').upsert({
            user_id: item.userId,
            game_id: item.gameId,
            current_level: item.level + 1,
            max_level_completed: item.level,
            best_score: item.score,
            total_attempts: 1,
            updated_at: item.timestamp
          });
        }

        // Remove successfully synced score
        if (item.id !== undefined) {
          const deleteTx = db.transaction(STORE_NAME, 'readwrite');
          deleteTx.objectStore(STORE_NAME).delete(item.id);
        }
        syncedCount++;
      } catch {
        // Skip item to retry on next connectivity restoration
      }
    }
  } catch {
    // Try syncing localStorage backup if IndexedDB unavailable
    const localQueue: Omit<QueuedScore, 'id'>[] = JSON.parse(
      localStorage.getItem('biblearena_queued_scores') || '[]'
    );

    if (localQueue.length > 0) {
      const remaining: Omit<QueuedScore, 'id'>[] = [];
      for (const item of localQueue) {
        try {
          if (item.userId) {
            await supabase.from('scores').insert({
              user_id: item.userId,
              game_id: item.gameId,
              score: item.score,
              created_at: item.timestamp
            });
          }
          syncedCount++;
        } catch {
          remaining.push(item);
        }
      }
      localStorage.setItem('biblearena_queued_scores', JSON.stringify(remaining));
    }
  }

  return { syncedCount };
}

/** Configures auto-sync triggers on network reconnection */
export function setupOfflineSyncListener(): () => void {
  if (typeof window === 'undefined') return () => {};

  const handleOnline = () => {
    syncQueuedScores();
  };

  window.addEventListener('online', handleOnline);

  // Attempt initial sync on load
  if (navigator.onLine) {
    syncQueuedScores();
  }

  return () => {
    window.removeEventListener('online', handleOnline);
  };
}
