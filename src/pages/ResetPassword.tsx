import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setNewPassword } from '../lib/auth';

export default function ResetPassword() {
  const nav = useNavigate();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [info, setInfo] = useState('');
  const [busy, setBusy] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setInfo('');

    if (password.length < 8) {
      setError('Use at least 8 characters.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setBusy(true);
    try {
      const r = await setNewPassword(password);
      if (!r.ok) {
        setError(r.error);
      } else {
        setInfo('Password updated successfully! Redirecting to login…');
        setTimeout(() => nav('/login'), 2000);
      }
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setBusy(false);
    }
  }

  return (
    <main className="mx-auto max-w-md p-6 text-[#171B24]">
      <div className="rounded-2xl bg-[#F3EBDD] p-6 text-[#171B24] border border-[#E3D9C6]">
        <h1 className="font-serif text-3xl font-bold">Set New Password</h1>
        <p className="mt-1 text-sm text-[#5A6275]">Enter your new password below.</p>

        <form onSubmit={submit} className="mt-6 space-y-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#5A6275]">New Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full rounded-xl border border-[#D4CEBF] bg-white p-3 text-base text-[#171B24] focus:outline-none focus:ring-2 focus:ring-[#3156C9]"
              placeholder="At least 8 characters"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#5A6275]">Confirm New Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="mt-1 w-full rounded-xl border border-[#D4CEBF] bg-white p-3 text-base text-[#171B24] focus:outline-none focus:ring-2 focus:ring-[#3156C9]"
              placeholder="Re-enter password"
            />
          </div>

          {error && <p className="text-sm text-red-600 font-medium" role="alert">{error}</p>}
          {info && <p className="text-sm text-green-700 font-medium" role="status">{info}</p>}

          <button
            disabled={busy || !password || !confirmPassword}
            className="min-h-[48px] w-full rounded-xl bg-[#3156C9] font-semibold text-white disabled:opacity-50 hover:bg-[#2544A5] transition-colors"
          >
            {busy ? 'Updating…' : 'Update Password'}
          </button>
        </form>
      </div>
    </main>
  );
}
