import { useEffect, useState } from 'react';
import type { Session } from '@supabase/supabase-js';
import { supabase } from './supabase';

export const USERNAME_RE = /^[A-Za-z0-9_]{3,20}$/;

export type RegisterInput = {
  fullName: string; username: string; email: string;
  password: string; confirmPassword: string;
};

export function validateRegistration(f: RegisterInput) {
  const e: Record<string, string> = {};
  if (f.fullName.trim().length < 2) e.fullName = 'Enter your full name.';
  if (!USERNAME_RE.test(f.username)) e.username = '3–20 characters: letters, numbers, underscore.';
  if (!/^\S+@\S+\.\S+$/.test(f.email)) e.email = 'Enter a valid email.';
  if (f.password.length < 8) e.password = 'Use at least 8 characters.';
  if (f.password !== f.confirmPassword) e.confirmPassword = 'Passwords do not match.';
  return e;
}

export async function isUsernameAvailable(username: string) {
  if (!USERNAME_RE.test(username)) return false;
  const { data, error } = await supabase.rpc('is_username_available', { p_username: username });
  if (error) throw error;
  return data === true;
}

function friendly(msg: string) {
  const m = msg.toLowerCase();
  if (m.includes('already registered')) return 'An account with this email already exists.';
  if (m.includes('invalid login')) return 'Wrong email or password.';
  if (m.includes('email not confirmed')) return 'Please confirm your email first. Check your inbox.';
  if (m.includes('database error')) return 'That username may already be taken. Try another.';
  if (m.includes('rate limit')) return 'Too many attempts. Please wait a moment.';
  return msg;
}

export async function registerPlayer(f: RegisterInput) {
  const errors = validateRegistration(f);
  if (Object.keys(errors).length) return { ok: false as const, errors };
  if (!(await isUsernameAvailable(f.username)))
    return { ok: false as const, errors: { username: 'That username is taken.' } };

  const { data, error } = await supabase.auth.signUp({
    email: f.email.trim(),
    password: f.password,
    options: {
      data: { username: f.username, full_name: f.fullName.trim() },
      emailRedirectTo: window.location.origin,
    },
  });
  if (error) return { ok: false as const, errors: { form: friendly(error.message) } };
  return { ok: true as const, needsEmailConfirmation: !data.session };
}

export async function loginPlayer(email: string, password: string) {
  const { error } = await supabase.auth.signInWithPassword({ email: email.trim(), password });
  return error ? { ok: false as const, error: friendly(error.message) } : { ok: true as const };
}

export const logoutPlayer = () => supabase.auth.signOut();

export async function requestPasswordReset(email: string) {
  const { error } = await supabase.auth.resetPasswordForEmail(email.trim(), {
    redirectTo: `${window.location.origin}/reset-password`,
  });
  return error ? { ok: false as const, error: friendly(error.message) } : { ok: true as const };
}

export async function setNewPassword(password: string) {
  const { error } = await supabase.auth.updateUser({ password });
  return error ? { ok: false as const, error: friendly(error.message) } : { ok: true as const };
}

export function useSession() {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => { setSession(data.session); setLoading(false); });
    const { data: sub } = supabase.auth.onAuthStateChange((_e, s) => setSession(s));
    return () => sub.subscription.unsubscribe();
  }, []);
  return { session, user: session?.user ?? null, isGuest: session?.user?.is_anonymous ?? false, loading };
}
