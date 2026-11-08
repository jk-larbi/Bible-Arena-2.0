import React, { useEffect, useState } from 'react';
import { User, Trophy, Award, BookOpen, Shield, LogOut, Play, Gamepad2 } from 'lucide-react';
import { Button } from '../components/Button';
import { BackButton } from '../components/BackButton';
import { supabase, isSupabaseConfigured } from '../lib/supabase';

interface ProfilePageProps {
  user: any;
  onLogout: () => void;
  onNavigateTab?: (tab: string) => void;
}

export const ProfilePage: React.FC<ProfilePageProps> = ({ user, onLogout, onNavigateTab }) => {
  const localStats = JSON.parse(localStorage.getItem('biblearena_user_stats') || '{"xp": 0, "gamesPlayed": 0, "level": 1, "achievements": []}');
  const [profileStats, setProfileStats] = useState({
    xp: Number(localStats.xp) || 0,
    level: Number(localStats.level) || 1,
    gamesPlayed: Number(localStats.gamesPlayed) || 0,
  });
  const [achievements, setAchievements] = useState<{ id: string; title: string; desc: string; icon: string }[]>([]);
  const [unlockedAchievements, setUnlockedAchievements] = useState<string[]>(localStats.achievements || []);
  const [statsLoading, setStatsLoading] = useState(false);

  useEffect(() => {
    let active = true;
    const loadProfile = async () => {
      if (!user?.id || !isSupabaseConfigured || !supabase) return;
      setStatsLoading(true);
      const [profileResult, attemptsResult, definitionsResult, unlockedResult] = await Promise.all([
        supabase.from('profiles').select('xp, level').eq('id', user.id).maybeSingle(),
        supabase.from('level_attempts').select('id', { count: 'exact', head: true }).eq('user_id', user.id).eq('status', 'completed'),
        supabase.from('achievement_definitions').select('id, title, description, icon_emoji').order('title'),
        supabase.from('achievements').select('achievement_id').eq('user_id', user.id),
      ]);
      if (!active) return;
      setProfileStats({
        xp: Number(profileResult.data?.xp ?? localStats.xp ?? 0),
        level: Number(profileResult.data?.level ?? localStats.level ?? 1),
        gamesPlayed: Number(attemptsResult.count ?? localStats.gamesPlayed ?? 0),
      });
      if (definitionsResult.data) {
        setAchievements(definitionsResult.data.map((item: any) => ({
          id: item.id,
          title: item.title,
          desc: item.description,
          icon: item.icon_emoji || '🏅',
        })));
      }
      if (unlockedResult.data) setUnlockedAchievements(unlockedResult.data.map((item: any) => item.achievement_id));
      setStatsLoading(false);
    };
    void loadProfile();
    return () => { active = false; };
  }, [user?.id]);

  const xp = profileStats.xp;
  const level = profileStats.level;
  const totalMarks = user?.user_metadata?.total_marks ?? localStats.total_marks ?? 0;
  const gamesPlayed = profileStats.gamesPlayed;
  const unlockedCount = achievements.filter((a) => unlockedAchievements.includes(a.id)).length;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Navigation Header */}
      <div className="flex items-center justify-between">
        <BackButton fallback="/" />
      </div>

      {/* Profile Header */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-[#171B24]/10 flex flex-col sm:flex-row items-center gap-6">
        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-[#171B24] text-[#F3EBDD] font-serif font-extrabold text-3xl flex items-center justify-center shadow-md shrink-0">
          {user?.email?.[0]?.toUpperCase() || user?.user_metadata?.username?.[0]?.toUpperCase() || 'P'}
        </div>

        <div className="text-center sm:text-left flex-1">
          <span className="px-3 py-1 rounded-full bg-[#D66B3D]/10 text-xs font-bold text-[#D66B3D] uppercase tracking-wider">
            {gamesPlayed > 0 ? 'Active Scholar' : 'New Player'}
          </span>
          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#171B24] mt-1">
            {user?.user_metadata?.username || user?.email?.split('@')[0] || 'Player Account'}
          </h2>
          <p className="text-xs sm:text-sm text-[#171B24]/70">{user?.email || 'Guest Session'}</p>

          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 mt-4">
            <span className="text-xs font-bold bg-[#F3EBDD] px-3.5 py-1.5 rounded-xl text-[#171B24] font-mono">
              Level {level}
            </span>
            <span className="text-xs font-bold bg-[#F3EBDD] px-3.5 py-1.5 rounded-xl text-[#D66B3D] font-mono">
              {totalMarks} Career Marks
            </span>
            <span className="text-xs font-bold bg-[#F3EBDD] px-3.5 py-1.5 rounded-xl text-[#3156C9] font-mono">
              {xp} Total XP
            </span>
            <span className="text-xs font-bold bg-[#F3EBDD] px-3.5 py-1.5 rounded-xl text-[#171B24] font-mono">
              {gamesPlayed} Games Played
            </span>
          </div>
        </div>

        <Button variant="outline" size="sm" icon={<LogOut className="w-4 h-4" />} onClick={onLogout}>
          Sign Out
        </Button>
      </div>

      {/* Recently Played Section */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-[#171B24]/10">
        <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#171B24] mb-4">Recently Played</h3>
        
        {gamesPlayed === 0 ? (
          <div className="text-center py-8 px-4 bg-[#F3EBDD]/50 rounded-2xl border border-dashed border-[#171B24]/20 space-y-3">
            <Gamepad2 className="w-10 h-10 text-[#D66B3D] mx-auto" />
            <p className="text-sm font-semibold text-[#171B24]">
              You haven't played anything yet. Pick a game to start.
            </p>
            {onNavigateTab && (
              <Button
                variant="primary"
                size="sm"
                icon={<Play className="w-3.5 h-3.5 fill-current" />}
                onClick={() => onNavigateTab('games')}
              >
                Browse Games Library
              </Button>
            )}
          </div>
        ) : (
          <div className="p-4 bg-[#F3EBDD]/50 rounded-2xl border border-[#171B24]/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#D66B3D] text-white flex items-center justify-center font-bold text-sm">
                🎮
              </div>
              <div>
                <h4 className="font-serif font-bold text-sm text-[#171B24]">Active Player Session</h4>
                <span className="text-xs text-[#171B24]/60">{gamesPlayed} game(s) completed</span>
              </div>
            </div>
            <span className="text-xs font-bold text-[#D66B3D] font-mono">+{xp} XP</span>
          </div>
        )}
      </div>

      {/* Achievements Section */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-[#171B24]/10">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#171B24]">Achievements & Badges</h3>
          <span className="text-xs font-bold text-[#171B24]/60 font-mono">{unlockedCount} / {achievements.length} Unlocked</span>
        </div>

        {statsLoading && <p className="mb-3 text-xs text-[#5A6275]">Refreshing your player record…</p>}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {achievements.map((ach) => {
            const isUnlocked = unlockedAchievements.includes(ach.id);
            return (
              <div
                key={ach.id}
                className={`p-5 rounded-2xl border flex items-center gap-4 transition-all ${
                  isUnlocked ? 'bg-[#F3EBDD]/80 border-[#D66B3D]/40' : 'bg-stone-50 border-stone-200 opacity-60'
                }`}
              >
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-2xl shrink-0">
                  {ach.icon}
                </div>
                <div>
                  <h4 className="font-serif font-bold text-base text-[#171B24]">{ach.title}</h4>
                  <p className="text-xs text-[#171B24]/70 mb-1">{ach.desc}</p>
                  <span className={`text-[11px] font-bold ${isUnlocked ? 'text-emerald-700' : 'text-stone-400'}`}>
                    {isUnlocked ? '✓ Unlocked' : '🔒 Locked — Complete quest to unlock'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
