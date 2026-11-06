import React, { useState } from 'react';
import { Modal } from './Modal';
import { Button } from './Button';
import { supabase, isSupabaseConfigured } from '../lib/supabase';
import { Mail, Lock, User, AlertCircle, CheckCircle } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (user: any) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, onSuccess }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccessMsg(null);

    if (!isSupabaseConfigured || !supabase) {
      // Simulate offline / local demo user if Supabase is not connected
      if (!email) {
        setError('Please enter an email.');
        return;
      }
      const demoUser = {
        id: 'demo-user-id',
        email,
        user_metadata: { username: username || email.split('@')[0], level: 12, xp: 2450 }
      };
      onSuccess(demoUser);
      onClose();
      return;
    }

    setLoading(true);
    try {
      if (isSignUp) {
        const { data, error: signUpError } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: { username, full_name: fullName, level: 1, xp: 0 }
          }
        });
        if (signUpError) throw signUpError;
        setSuccessMsg('Registration successful! Check your email to confirm or sign in now.');
        if (data.user) {
          onSuccess(data.user);
        }
      } else {
        const { data, error: signInError } = await supabase.auth.signInWithPassword({
          email,
          password
        });
        if (signInError) throw signInError;
        if (data.user) {
          onSuccess(data.user);
          onClose();
        }
      }
    } catch (err: any) {
      setError(err.message || 'Authentication failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={isSignUp ? 'Create Player Account' : 'Sign In to BibleArena'}>
      <form onSubmit={handleSubmit} className="space-y-4">
        {!isSupabaseConfigured && (
          <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-2xl text-xs text-amber-800">
            <strong>Offline Demo Mode:</strong> Supabase is not connected. Entering any email will log you in locally so you can play immediately!
          </div>
        )}

        {error && (
          <div className="flex items-center gap-2 p-3 bg-rose-500/10 border border-rose-500/20 rounded-2xl text-xs text-rose-700">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {successMsg && (
          <div className="flex items-center gap-2 p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl text-xs text-emerald-700">
            <CheckCircle className="w-4 h-4 shrink-0" />
            <span>{successMsg}</span>
          </div>
        )}

        {isSignUp && (
          <>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#171B24]/70 mb-1">Username</label>
              <div className="relative">
                <User className="absolute left-3.5 top-3 w-4 h-4 text-[#171B24]/40" />
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="e.g. DavidWarrior"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-[#171B24]/15 text-[#171B24] text-sm focus:outline-none focus:ring-2 focus:ring-[#D66B3D]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#171B24]/70 mb-1">Full Name</label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="e.g. Samuel Ben-Jesse"
                className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#171B24]/15 text-[#171B24] text-sm focus:outline-none focus:ring-2 focus:ring-[#D66B3D]"
              />
            </div>
          </>
        )}

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#171B24]/70 mb-1">Email Address</label>
          <div className="relative">
            <Mail className="absolute left-3.5 top-3 w-4 h-4 text-[#171B24]/40" />
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-[#171B24]/15 text-[#171B24] text-sm focus:outline-none focus:ring-2 focus:ring-[#D66B3D]"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#171B24]/70 mb-1">Password</label>
          <div className="relative">
            <Lock className="absolute left-3.5 top-3 w-4 h-4 text-[#171B24]/40" />
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-[#171B24]/15 text-[#171B24] text-sm focus:outline-none focus:ring-2 focus:ring-[#D66B3D]"
            />
          </div>
        </div>

        <Button type="submit" variant="primary" size="lg" className="w-full mt-2" disabled={loading}>
          {loading ? 'Please wait...' : isSignUp ? 'Create Account' : 'Sign In'}
        </Button>

        <div className="text-center pt-2">
          <button
            type="button"
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-xs font-semibold text-[#3156C9] hover:underline cursor-pointer"
          >
            {isSignUp ? 'Already have an account? Sign in' : "Don't have an account? Create one"}
          </button>
        </div>
      </form>
    </Modal>
  );
};
