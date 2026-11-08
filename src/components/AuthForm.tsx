import React, { useState } from 'react';
import { loginPlayer, registerPlayer, requestPasswordReset, isUsernameAvailable, USERNAME_RE } from '../lib/auth';

type Mode = 'login' | 'register' | 'reset';

export function AuthForm({ onDone }: { onDone?: () => void }) {
  const [mode, setMode] = useState<Mode>('login');
  const [f, setF] = useState({ fullName: '', username: '', email: '', password: '', confirmPassword: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [info, setInfo] = useState('');
  const [busy, setBusy] = useState(false);
  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement>) => setF({ ...f, [k]: e.target.value });

  async function checkUsername() {
    if (!f.username) return;
    if (!USERNAME_RE.test(f.username)) return setErrors((p) => ({ ...p, username: '3–20 letters, numbers or underscore.' }));
    try {
      const ok = await isUsernameAvailable(f.username);
      setErrors((p) => ({ ...p, username: ok ? '' : 'That username is taken.' }));
    } catch { /* ignore; checked again on submit */ }
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault(); setErrors({}); setInfo(''); setBusy(true);
    try {
      if (mode === 'register') {
        const r = await registerPlayer(f);
        if (!r.ok) return setErrors(r.errors);
        if (r.needsEmailConfirmation) return setInfo('Account created. Check your email to confirm, then log in.');
        onDone?.();
      } else if (mode === 'login') {
        const r = await loginPlayer(f.email, f.password);
        if (!r.ok) return setErrors({ form: r.error });
        onDone?.();
      } else {
        const r = await requestPasswordReset(f.email);
        if (!r.ok) return setErrors({ form: r.error });
        setInfo('If that email has an account, a reset link is on its way.');
      }
    } finally { setBusy(false); }
  }

  const input = 'mt-1 w-full rounded-xl border p-3 text-base bg-white text-[#171B24] border-[#D4CEBF] focus:outline-none focus:ring-2 focus:ring-[#3156C9]';
  const Err = ({ k }: { k: string }) => (errors[k] ? <p className="text-sm text-red-600">{errors[k]}</p> : null);

  return (
    <form onSubmit={submit} className="mx-auto max-w-md space-y-3 p-6 bg-[#F3EBDD] rounded-2xl text-[#171B24] border border-[#E3D9C6]">
      <div className="flex items-center gap-3 mb-2">
        <img src={`${import.meta.env.BASE_URL}assets/bible-arena-logo.png`} alt="BibleArena Logo" className="h-12 w-auto object-contain rounded-xl" />
        <span className="font-serif font-extrabold text-xl text-[#171B24]">BibleArena</span>
      </div>
      <h1 className="font-serif text-3xl font-bold">
        {mode === 'login' ? 'Log in' : mode === 'register' ? 'Create your account' : 'Reset password'}
      </h1>
      {mode === 'register' && (<>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#5A6275]">Full Name</label>
          <input className={input} placeholder="Full name" autoComplete="name" value={f.fullName} onChange={set('fullName')} />
          <Err k="fullName" />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#5A6275]">Username</label>
          <input className={input} placeholder="Username" autoComplete="username" autoCapitalize="none"
            value={f.username} onChange={set('username')} onBlur={checkUsername} />
          <Err k="username" />
        </div>
      </>)}
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-[#5A6275]">Email Address</label>
        <input className={input} type="email" inputMode="email" placeholder="Email" autoComplete="email" value={f.email} onChange={set('email')} />
        <Err k="email" />
      </div>
      {mode !== 'reset' && (
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#5A6275]">Password</label>
          <input className={input} type="password" placeholder="Password"
            autoComplete={mode === 'login' ? 'current-password' : 'new-password'} value={f.password} onChange={set('password')} />
          <Err k="password" />
        </div>
      )}
      {mode === 'register' && (<>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#5A6275]">Confirm Password</label>
          <input className={input} type="password" placeholder="Confirm password" autoComplete="new-password"
            value={f.confirmPassword} onChange={set('confirmPassword')} />
          <Err k="confirmPassword" />
        </div>
      </>)}
      <Err k="form" />
      {info && <p className="text-sm text-green-700 font-medium" role="status">{info}</p>}
      <button disabled={busy} className="min-h-[48px] w-full rounded-xl bg-[#3156C9] font-semibold text-white disabled:opacity-50 hover:bg-[#2544A5] transition-colors">
        {busy ? 'Please wait…' : mode === 'login' ? 'Log in' : mode === 'register' ? 'Register' : 'Send reset link'}
      </button>
      <div className="flex justify-between text-sm pt-2">
        <button type="button" className="underline text-[#3156C9] font-medium" onClick={() => setMode(mode === 'login' ? 'register' : 'login')}>
          {mode === 'login' ? 'New here? Register' : 'Have an account? Log in'}
        </button>
        {mode === 'login' && <button type="button" className="underline text-[#5A6275]" onClick={() => setMode('reset')}>Forgot password?</button>}
      </div>
    </form>
  );
}
