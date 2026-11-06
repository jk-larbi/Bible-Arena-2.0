import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase, isBackendConfigured } from '../lib/supabase';
import { BackButton } from '../components/BackButton';
import { ShareButton } from '../components/ShareButton';
import { Trophy, Award, Star, Flame } from 'lucide-react';

type PublicProfile = {
  username: string;
  display_name: string;
  level: number;
  xp: number;
  games_played: number;
  created_at: string;
};

export default function PlayerProfilePage() {
  const { username } = useParams<{ username: string }>();
  const [profile, setProfile] = useState<PublicProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProfile() {
      if (!username) return;
      try {
        if (isBackendConfigured && supabase) {
          const { data, error } = await supabase
            .from('profiles')
            .select('*')
            .eq('username', username)
            .single();

          if (data && !error) {
            setProfile({
              username: data.username,
              display_name: data.full_name || data.username,
              level: data.level || 1,
              xp: data.xp || 0,
              games_played: 0,
              created_at: data.created_at
            });
            setLoading(false);
            return;
          }
        }
      } catch {
        // Fallthrough to local fallback
      }

      // Local fallback
      setProfile({
        username: username,
        display_name: username,
        level: 1,
        xp: 0,
        games_played: 0,
        created_at: new Date().toISOString()
      });
      setLoading(false);
    }

    loadProfile();
  }, [username]);

  if (loading) {
    return (
      <main className="mx-auto max-w-xl p-6 text-center text-[#171B24]">
        <div className="py-12">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-[#3156C9] border-t-transparent"></div>
          <p className="mt-4 font-medium text-sm text-[#5A6275]">Loading profile…</p>
        </div>
      </main>
    );
  }

  if (!profile) {
    return (
      <main className="mx-auto max-w-md p-6 text-center text-[#171B24]">
        <div className="rounded-2xl bg-[#F3EBDD] p-6 border border-[#E3D9C6]">
          <h2 className="font-serif text-2xl font-bold text-red-600">Player Not Found</h2>
          <div className="mt-4">
            <BackButton fallback="/" />
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-2xl p-6 text-[#171B24] space-y-6">
      <div className="flex items-center justify-between">
        <BackButton fallback="/leaderboard" />
        <ShareButton
          path={`/players/${profile.username}`}
          title={profile.display_name}
          text={`Challenge ${profile.display_name} on BibleArena!`}
          label="Share profile"
        />
      </div>

      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-[#171B24]/10">
        <div className="flex items-center gap-4 border-b border-[#F3EBDD] pb-6 mb-6">
          <div className="w-16 h-16 rounded-full bg-[#171B24] text-[#F3EBDD] font-serif font-extrabold text-2xl flex items-center justify-center shadow-md">
            {profile.display_name.charAt(0).toUpperCase()}
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#D66B3D]">Public Player Profile</span>
            <h1 className="font-serif text-3xl font-bold text-[#171B24]">{profile.display_name}</h1>
            <p className="text-xs text-[#5A6275] font-mono">@{profile.username}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-2xl bg-[#F3EBDD] text-center border border-[#171B24]/10">
            <Star className="w-5 h-5 text-[#D66B3D] mx-auto mb-1" />
            <span className="block text-[10px] uppercase font-semibold text-[#5A6275]">Level</span>
            <strong className="text-xl font-bold text-[#171B24]">Level {profile.level}</strong>
          </div>

          <div className="p-4 rounded-2xl bg-[#F3EBDD] text-center border border-[#171B24]/10">
            <Trophy className="w-5 h-5 text-amber-600 mx-auto mb-1" />
            <span className="block text-[10px] uppercase font-semibold text-[#5A6275]">Total XP</span>
            <strong className="text-xl font-bold text-[#171B24]">{profile.xp}</strong>
          </div>

          <div className="p-4 rounded-2xl bg-[#F3EBDD] text-center border border-[#171B24]/10 col-span-2 sm:col-span-1">
            <Flame className="w-5 h-5 text-[#3156C9] mx-auto mb-1" />
            <span className="block text-[10px] uppercase font-semibold text-[#5A6275]">Status</span>
            <strong className="text-sm font-bold text-emerald-700">Arena Scholar</strong>
          </div>
        </div>
      </div>
    </main>
  );
}
