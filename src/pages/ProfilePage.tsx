import React, { useEffect, useRef, useState } from 'react';
import { User, Trophy, Award, BookOpen, Shield, LogOut, Play, Gamepad2, Target, Star, Layers, Flame, Camera, Loader2 } from 'lucide-react';
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
  const [avatarUrl, setAvatarUrl] = useState<string>(user?.user_metadata?.avatar_url || '');
  const [avatarUploading, setAvatarUploading] = useState(false);
  const [avatarMessage, setAvatarMessage] = useState('');
  const avatarInputRef = useRef<HTMLInputElement>(null);
  const [performance, setPerformance] = useState({ accuracy: 0, gamesExplored: 0, levelsCompleted: 0, bestGame: '', currentStreak: 0, bestStreak: 0 });

  useEffect(() => {
    let active = true;
    const loadProfile = async () => {
      if (!user?.id || !isSupabaseConfigured || !supabase) return;
      setStatsLoading(true);
      const [profileResult, attemptsResult, definitionsResult, unlockedResult] = await Promise.all([
        supabase.from('profiles').select('xp, level').eq('id', user.id).maybeSingle(),
        supabase.from('level_attempts').select('game_slug, level, percent, completed_at').eq('user_id', user.id).eq('status', 'completed'),
        supabase.from('achievement_definitions').select('id, title, description, icon_emoji').order('title'),
        supabase.from('achievements').select('achievement_id').eq('user_id', user.id),
      ]);
      if (!active) return;
      setProfileStats({
        xp: Number(profileResult.data?.xp ?? localStats.xp ?? 0),
        level: Number(profileResult.data?.level ?? localStats.level ?? 1),
        gamesPlayed: Number(attemptsResult.data?.length ?? localStats.gamesPlayed ?? 0),
      });
      const completedAttempts = attemptsResult.data || [];
      const averageAccuracy = completedAttempts.length
        ? Math.round(completedAttempts.reduce((sum: number, item: any) => sum + Number(item.percent || 0), 0) / completedAttempts.length)
        : 0;
      const gameCounts = completedAttempts.reduce((counts: Record<string, number>, item: any) => {
        counts[item.game_slug] = (counts[item.game_slug] || 0) + 1;
        return counts;
      }, {});
      const bestGameSlug = Object.entries(gameCounts).sort((a, b) => b[1] - a[1])[0]?.[0] || '';
      const activityDays = [...new Set(completedAttempts
        .map((item: any) => item.completed_at ? new Date(item.completed_at).toISOString().slice(0, 10) : '')
        .filter(Boolean))].sort();
      let bestStreak = 0;
      let runStreak = 0;
      let previousDay = '';
      for (const day of activityDays) {
        const consecutive = previousDay
          ? (Date.parse(`${day}T00:00:00.000Z`) - Date.parse(`${previousDay}T00:00:00.000Z`)) === 86400000
          : false;
        runStreak = consecutive ? runStreak + 1 : 1;
        bestStreak = Math.max(bestStreak, runStreak);
        previousDay = day;
      }
      const todayUtc = new Date().toISOString().slice(0, 10);
      const yesterdayUtc = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
      let currentStreak = 0;
      if (activityDays.length && [todayUtc, yesterdayUtc].includes(activityDays[activityDays.length - 1])) {
        currentStreak = 1;
        for (let i = activityDays.length - 1; i > 0; i--) {
          const gap = Date.parse(`${activityDays[i]}T00:00:00.000Z`) - Date.parse(`${activityDays[i - 1]}T00:00:00.000Z`);
          if (gap !== 86400000) break;
          currentStreak++;
        }
      }

      const gameTitles: Record<string, string> = {
        'scripture-challenge': 'Scripture Challenge', 'bible-character-quest': 'Bible Character Quest',
        'scripture-scramble': 'Scripture Scramble', 'bible-word-search': 'Bible Word Search',
        'bible-crossword': 'Bible Crossword', 'who-said-it': 'Who Said It?',
        'complete-the-scripture': 'Complete the Scripture', 'bible-match-up': 'Bible Match-Up',
        'bible-timeline': 'Bible Timeline', 'bible-puzzles': 'Bible Puzzles',
        'find-the-bible-book': 'Find the Bible Book', 'bible-riddles': 'Bible Riddles',
        'bible-geography-quest': 'Bible Geography Quest', 'bible-memory-challenge': 'Bible Memory Challenge',
        'old-vs-new-testament': 'Old vs New Testament', 'bible-detective': 'Bible Detective',
        'bible-chain-challenge': 'Bible Chain Challenge', 'verse-builder': 'Verse Builder',
        'guess-the-emoji': 'Guess the Emoji',
      };
      setPerformance({
        accuracy: averageAccuracy,
        gamesExplored: Object.keys(gameCounts).length,
        levelsCompleted: completedAttempts.length,
        bestGame: gameTitles[bestGameSlug] || '',
        currentStreak,
        bestStreak,
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
  const rankTitle = xp >= 20000 ? 'Hall of Fame Scholar' : xp >= 10000 ? 'Bible Champion' : xp >= 5000 ? 'Scripture Master' : xp >= 3000 ? 'Kingdom Scholar' : xp >= 1500 ? 'Word Seeker' : xp >= 500 ? 'Scripture Explorer' : 'Bible Beginner';
  const rankFloor = Math.floor(xp / 500) * 500;
  const rankProgress = Math.round(((xp - rankFloor) / 500) * 100);


  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Navigation Header */}
      <div className="flex items-center justify-between">
        <BackButton fallback="/" />
      </div>

      {/* Profile Header */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-[#171B24]/10 flex flex-col sm:flex-row items-center gap-6">
        <div className="relative h-20 w-20 shrink-0 sm:h-24 sm:w-24">
          <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-3xl bg-[#171B24] text-3xl font-serif font-extrabold text-[#F3EBDD] shadow-md">
            {avatarUrl
              ? <img src={avatarUrl} alt="Your profile" className="h-full w-full object-cover" />
              : (user?.email?.[0]?.toUpperCase() || user?.user_metadata?.username?.[0]?.toUpperCase() || 'P')}
          </div>
          <button
            type="button"
            onClick={() => avatarInputRef.current?.click()}
            disabled={avatarUploading || !user?.id || !isSupabaseConfigured}
            aria-label="Change profile picture"
            title="Change profile picture"
            className="absolute -bottom-2 -right-2 flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-[#3156C9] text-white shadow-md transition hover:bg-[#2444a7] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {avatarUploading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Camera className="h-4 w-4" />}
          </button>
          <input
            ref={avatarInputRef}
            type="file"
            accept="image/png,image/jpeg,image/webp,image/gif"
            className="hidden"
            onChange={async (event) => {
              const file = event.target.files?.[0];
              event.target.value = '';
              if (!file || !user?.id || !supabase) return;
              if (!['image/jpeg', 'image/png', 'image/webp', 'image/gif'].includes(file.type)) {
                setAvatarMessage('Choose a JPG, PNG, WEBP or GIF image.');
                return;
              }
              if (file.size > 5 * 1024 * 1024) {
                setAvatarMessage('Your profile picture must be 5 MB or smaller.');
                return;
              }
              setAvatarUploading(true);
              setAvatarMessage('');
              try {
                const extension = file.type === 'image/jpeg' ? 'jpg' : file.type.split('/')[1];
                const path = `${user.id}/avatar.${extension}`;
                const { error: uploadError } = await supabase.storage
                  .from('avatars')
                  .upload(path, file, { upsert: true, contentType: file.type, cacheControl: '3600' });
                if (uploadError) throw uploadError;
                const { data } = supabase.storage.from('avatars').getPublicUrl(path);
                const publicUrl = `${data.publicUrl}?v=${Date.now()}`;
                const { error: metadataError } = await supabase.auth.updateUser({
                  data: { avatar_url: publicUrl },
                });
                if (metadataError) throw metadataError;
                setAvatarUrl(publicUrl);
                setAvatarMessage('Profile picture updated successfully.');
              } catch (error) {
                console.error('Profile picture upload failed:', error);
                setAvatarMessage(error instanceof Error ? error.message : 'Could not update your profile picture. Please try again.');
              } finally {
                setAvatarUploading(false);
              }
            }}
          />
        </div>

        <div className="text-center sm:text-left flex-1">
          <span className="px-3 py-1 rounded-full bg-[#D66B3D]/10 text-xs font-bold text-[#D66B3D] uppercase tracking-wider">
            {gamesPlayed > 0 ? 'Active Scholar' : 'New Player'}
          </span>
          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#171B24] mt-1">
            {user?.user_metadata?.username || user?.email?.split('@')[0] || 'Player Account'}
          </h2>
          <p className="text-xs sm:text-sm text-[#171B24]/70">{user?.email || 'Guest Session'}</p>
          {avatarMessage && <p role="status" className="mt-2 text-xs font-medium text-[#3156C9]">{avatarMessage}</p>}
          <p className="mt-1 text-[11px] text-[#5A6275]">Tap the camera to change your profile picture · JPG, PNG, WEBP or GIF · Max 5 MB</p>

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

      <section className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        <div className="rounded-2xl border border-[#171B24]/10 bg-white p-4">
          <Target className="mb-2 h-5 w-5 text-[#D66B3D]" />
          <p className="text-2xl font-serif font-bold text-[#171B24]">{performance.accuracy}%</p>
          <p className="text-[11px] font-semibold text-[#5A6275]">Average accuracy</p>
        </div>
        <div className="rounded-2xl border border-[#171B24]/10 bg-white p-4">
          <Layers className="mb-2 h-5 w-5 text-[#3156C9]" />
          <p className="text-2xl font-serif font-bold text-[#171B24]">{performance.levelsCompleted}</p>
          <p className="text-[11px] font-semibold text-[#5A6275]">Levels completed</p>
        </div>
        <div className="rounded-2xl border border-[#171B24]/10 bg-white p-4">
          <BookOpen className="mb-2 h-5 w-5 text-emerald-700" />
          <p className="text-2xl font-serif font-bold text-[#171B24]">{performance.gamesExplored}/19</p>
          <p className="text-[11px] font-semibold text-[#5A6275]">Games explored</p>
        </div>
        <div className="rounded-2xl border border-[#171B24]/10 bg-white p-4">
          <Flame className="mb-2 h-5 w-5 text-orange-600" />
          <p className="text-2xl font-serif font-bold text-[#171B24]">{performance.currentStreak} days</p>
          <p className="text-[11px] font-semibold text-[#5A6275]">Current streak · Best {performance.bestStreak}</p>
        </div>
        <div className="rounded-2xl border border-[#171B24]/10 bg-white p-4">
          <Star className="mb-2 h-5 w-5 text-amber-600" />
          <p className="truncate text-sm font-bold text-[#171B24]">{performance.bestGame || 'Not yet set'}</p>
          <p className="text-[11px] font-semibold text-[#5A6275]">Most played game</p>
        </div>
      </section>

      <section className="rounded-3xl border border-[#171B24]/10 bg-white p-5 shadow-sm sm:p-7">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-[#D66B3D]">Your Scholar Rank</p>
            <h3 className="mt-1 font-serif text-2xl font-bold text-[#171B24]">{rankTitle}</h3>
          </div>
          <span className="rounded-xl bg-[#171B24] px-3 py-2 text-xs font-bold text-white">Level {level}</span>
        </div>
        <div className="mt-4 h-3 overflow-hidden rounded-full bg-[#171B24]/10">
          <div className="h-full rounded-full bg-[#D66B3D] transition-all" style={{ width: `${rankProgress}%` }} />
        </div>
        <p className="mt-2 text-right text-xs text-[#5A6275]">{xp.toLocaleString()} XP · {500 - (xp % 500)} XP to next level</p>
      </section>

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
