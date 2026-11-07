import { createClient } from '@supabase/supabase-js';

const env: Record<string, any> =
  typeof import.meta !== 'undefined' && import.meta.env
    ? import.meta.env
    : typeof process !== 'undefined' && process.env
    ? process.env
    : {};

const url = (env.VITE_SUPABASE_URL || env.NEXT_PUBLIC_SUPABASE_URL) as string | undefined;
const key = (env.VITE_SUPABASE_PUBLISHABLE_KEY || env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY) as string | undefined;

export const isBackendConfigured = Boolean(url && key);
export const isSupabaseConfigured = isBackendConfigured;

export const supabase = createClient(url ?? 'http://localhost', key ?? 'missing', {
  auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true },
});
