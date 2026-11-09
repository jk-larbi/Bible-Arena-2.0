import React, { useState, useEffect, useCallback, useMemo } from 'react';
import {
  Trophy,
  Play,
  RefreshCw,
  Medal,
  Crown,
  Share2,
  Check,
  TrendingUp,
  TrendingDown,
  Minus,
  Award,
  CalendarDays,
  Flame,
  Calendar,
  Clock,
  BookOpen,
} from 'lucide-react';
import { Button } from '../components/Button';
import { supabase, isSupabaseConfigured } from '../lib/supabase';
import { BackButton } from '../components/BackButton';

interface LeaderboardProps {
  onPlayGame?: () => void;
}

export type LeaderboardPeriod = 'all-time' | 'weekly' | 'monthly';

export interface Leader {
  id: string;
  rank: number;
  prevRank?: number | null;
  name: string;
  level: number;
  points: number;
  avatar: string;
  badges: string[];
}

export type WeeklyLeader = {
  rank: number;
  player_id: string;
  username: string | null;
  full_name: string | null;
  player_level: number;
  weekly_points: number;
  levels_played: number;
  games_played: number;
};

// Weekly Rotation Themes
export const WEEKLY_THEMES = [
  {
    week: 1,
    title: 'Old Testament Masters',
    subtitle: 'From Genesis to Malachi, the Law, Prophets & Kings',
    icon: '📜',
    bonusText: 'Featured across Old Testament quizzes & timelines',
  },
  {
    week: 2,
    title: 'New Testament Masters',
    subtitle: 'The Gospels, Acts, Epistles & the Revelation of Jesus Christ',
    icon: '🕊️',
    bonusText: 'Featured across Apostolic epistles & teachings',
  },
  {
    week: 3,
    title: 'Scripture Memory Week',
    subtitle: 'Word-for-word verse recall & sacred reconstructions',
    icon: '🧠',
    bonusText: 'Featured across Verse Builder & Memory Challenge',
  },
  {
    week: 4,
    title: 'Bible Detective Week',
    subtitle: 'Uncover subtle scriptural clues & forgotten details',
    icon: '🔎',
    bonusText: 'Featured across Bible Detective & Character Riddles',
  },
  {
    week: 5,
    title: 'Difficult Bible Knowledge',
    subtitle: 'Deep biblical scholarship, lesser-known rulers & ancient measures',
    icon: '👑',
    bonusText: 'Highest difficulty challenges across all 19 games',
  },
];

const getWeekNumber = (): number => {
  const now = new Date();
  const startOfYear = new Date(Date.UTC(now.getUTCFullYear(), 0, 1));
  const pastDaysOfYear = (now.getTime() - startOfYear.getTime()) / 86400000;
  return Math.ceil((pastDaysOfYear + startOfYear.getUTCDay() + 1) / 7);
};

const getCurrentWeeklyTheme = () => {
  const weekNum = getWeekNumber();
  const themeIdx = (weekNum - 1) % WEEKLY_THEMES.length;
  return WEEKLY_THEMES[themeIdx];
};

const getTimeUntilMondayReset = (): { days: number; hours: number; minutes: number } => {
  const now = new Date();
  const nextMonday = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));
  const day = nextMonday.getUTCDay();
  const daysUntilMonday = ((8 - day) % 7) || 7;
  nextMonday.setUTCDate(nextMonday.getUTCDate() + daysUntilMonday);
  nextMonday.setUTCHours(0, 0, 0, 0);

  const diffMs = Math.max(0, nextMonday.getTime() - now.getTime());
  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
  return { days, hours, minutes };
};

const getUtcWeekLabel = () => {
  const now = new Date();
  const start = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));
  const offset = (start.getUTCDay() + 6) % 7;
  start.setUTCDate(start.getUTCDate() - offset);
  const end = new Date(start);
  end.setUTCDate(end.getUTCDate() + 6);
  const fmt = (date: Date) => date.toLocaleDateString(undefined, { month: 'short', day: 'numeric', timeZone: 'UTC' });
  return `${fmt(start)} – ${fmt(end)} UTC`;
};

// Compute genuine badge tags based on actual points and level
const computeScholarBadges = (level: number, points: number, rank: number): string[] => {
  const badges: string[] = [];
  if (rank === 1) badges.push('👑 Weekly Champion');
  if (points >= 1500) badges.push('⭐ Perfect Scholar');
  if (level >= 8) badges.push('📜 Scripture Scholar');
  if (level >= 12 || points >= 2500) badges.push('🧠 Memory Master');
  if (level >= 15 || points >= 4000) badges.push('🔎 Bible Detective');
  if (points >= 300) badges.push('🔥 Active Streak');
  return badges.slice(0, 2);
};

// Weekly Arena Cup Header Card
const WeeklyArenaPanel: React.FC<{
  currentUserId: string | null;
  currentUserPoints: number;
}> = ({ currentUserId }) => {
  const [rows, setRows] = useState<WeeklyLeader[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [countdown, setCountdown] = useState(getTimeUntilMondayReset());

  const theme = useMemo(() => getCurrentWeeklyTheme(), []);

  const load = useCallback(async () => {
    if (!supabase || !isSupabaseConfigured) {
      setError('Weekly Arena is unavailable right now.');
      setLoading(false);
      return;
    }
    const { data, error: rpcError } = await supabase.rpc('get_weekly_arena_standings');
    if (rpcError) {
      setError('Weekly standings could not be loaded. Please try again.');
    } else {
      setRows((data || []) as WeeklyLeader[]);
      setError('');
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    void load();
    const interval = window.setInterval(() => void load(), 30000);
    const timerInterval = window.setInterval(() => {
      setCountdown(getTimeUntilMondayReset());
    }, 60000);

    const onFocus = () => void load();
    window.addEventListener('focus', onFocus);
    return () => {
      window.clearInterval(interval);
      window.clearInterval(timerInterval);
      window.removeEventListener('focus', onFocus);
    };
  }, [load]);

  const userStanding = rows.find((r) => r.player_id === currentUserId);

  return (
    <section className="overflow-hidden rounded-3xl border border-[#171B24]/10 bg-white shadow-xl space-y-0">
      {/* Top Banner with Theme and Reset Countdown */}
      <div className="bg-[#171B24] p-5 sm:p-7 text-white space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#F0B18D] flex items-center gap-1.5">
              <Trophy className="w-3.5 h-3.5 text-[#F0B18D]" /> Weekly Competition · Season Cup
            </span>
            <h3 className="mt-1 font-serif text-2xl sm:text-3xl font-extrabold flex items-center gap-2">
              Weekly Arena Cup
            </h3>
            <p className="mt-1 text-xs text-white/70 max-w-lg">
              Compete each week for the Crown of Wisdom. Best score per level counts once to ensure fair play.
            </p>
          </div>

          <div className="rounded-2xl border border-white/15 bg-white/10 px-4 py-2.5 text-right space-y-0.5">
            <p className="text-[10px] font-bold uppercase tracking-wider text-white/55">Competition Cycle</p>
            <p className="text-xs font-bold text-white">{getUtcWeekLabel()}</p>
            <p className="text-[11px] font-mono text-[#F0B18D] flex items-center justify-end gap-1 mt-1">
              <Clock className="w-3 h-3" /> Resets in {countdown.days}d {countdown.hours}h {countdown.minutes}m
            </p>
          </div>
        </div>

        {/* Weekly Theme Banner */}
        <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{theme.icon}</span>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#D66B3D]/30 text-[#F0B18D]">
                  Week {theme.week} Theme
                </span>
                <span className="font-serif font-bold text-sm text-white">{theme.title}</span>
              </div>
              <p className="text-xs text-white/70 mt-0.5">{theme.subtitle}</p>
            </div>
          </div>
          <span className="text-[11px] text-[#F0B18D] font-medium bg-[#D66B3D]/10 px-3 py-1 rounded-xl border border-[#D66B3D]/20 shrink-0">
            {theme.bonusText}
          </span>
        </div>
      </div>

      {/* Standings Content */}
      <div className="space-y-4 p-4 sm:p-6 bg-white">
        {loading ? (
          <div className="space-y-3">
            {[1, 2, 3].map((item) => (
              <div key={item} className="h-14 animate-pulse rounded-2xl bg-[#171B24]/5" />
            ))}
          </div>
        ) : error ? (
          <p className="rounded-xl bg-rose-50 p-3 text-sm text-rose-700">{error}</p>
        ) : rows.length === 0 ? (
          <div className="py-8 text-center space-y-2">
            <Trophy className="mx-auto h-9 w-9 text-[#D66B3D]" />
            <p className="font-serif text-lg font-bold text-[#171B24]">The Weekly Cup is open!</p>
            <p className="text-xs text-[#5A6275] max-w-sm mx-auto">
              Complete any level this week to post your initial score and claim rank #1 on the board.
            </p>
          </div>
        ) : (
          <>
            {/* Top 3 Podium Preview */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 pb-2">
              {rows.slice(0, 3).map((player) => {
                const name = player.username || player.full_name || 'Bible Arena Scholar';
                const isMe = player.player_id === currentUserId;
                const isFirst = player.rank === 1;
                return (
                  <div
                    key={player.player_id}
                    className={`rounded-2xl p-4 text-center border relative transition ${
                      isFirst
                        ? 'bg-amber-50/70 border-amber-300 ring-1 ring-amber-400/40 shadow-xs'
                        : player.rank === 2
                        ? 'bg-stone-50 border-stone-200'
                        : 'bg-[#F3EBDD]/50 border-[#171B24]/10'
                    }`}
                  >
                    <div className="flex justify-center mb-1">
                      {isFirst ? (
                        <Crown className="w-5 h-5 text-amber-500" />
                      ) : (
                        <Medal className="w-4 h-4 text-stone-400" />
                      )}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#5A6275]">
                      Rank #{player.rank}
                    </span>
                    <h4 className="font-serif font-bold text-sm text-[#171B24] truncate mt-0.5">
                      {name} {isMe && <span className="text-[#3156C9]">(YOU)</span>}
                    </h4>
                    <p className="font-mono text-base font-extrabold text-[#D66B3D] mt-1">
                      {Number(player.weekly_points).toLocaleString()} pts
                    </p>
                    <p className="text-[10px] text-[#5A6275]">
                      {player.levels_played} levels · {player.games_played} games
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Personal Standing Card if competing */}
            {userStanding ? (
              <div className="p-3.5 rounded-2xl bg-[#EEF2FF] border border-[#3156C9]/30 flex items-center justify-between text-xs font-semibold text-[#171B24]">
                <div className="flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-lg bg-[#3156C9] text-white flex items-center justify-center font-bold text-xs">
                    #{userStanding.rank}
                  </span>
                  <span>Your Weekly Arena Cup Standing:</span>
                </div>
                <span className="font-mono font-bold text-sm text-[#3156C9]">
                  {Number(userStanding.weekly_points).toLocaleString()} weekly pts
                </span>
              </div>
            ) : currentUserId ? (
              <p className="rounded-2xl bg-[#F3EBDD] p-3 text-xs text-[#5A6275] text-center">
                You haven't posted a score in this week's competition yet. Play a level to enter the weekly standings!
              </p>
            ) : null}
          </>
        )}

        <div className="flex items-center justify-between text-[10px] text-[#7A8190] pt-1 border-t border-[#171B24]/5">
          <span>Weekly points reset every Monday at 00:00 UTC</span>
          <span>Lifetime scholar scores remain safe and permanent</span>
        </div>
      </div>
    </section>
  );
};

export const LeaderboardPage: React.FC<LeaderboardProps> = ({ onPlayGame }) => {
  const [period, setPeriod] = useState<LeaderboardPeriod>('all-time');
  const [leaders, setLeaders] = useState<Leader[]>([]);
  const [currentUserId, setCurrentUserId] = useState<string | null>(null);
  const [currentUserProfile, setCurrentUserProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState('');
  const [copiedLink, setCopiedLink] = useState(false);

  // Fetch Leaderboard for Selected Period
  const fetchLeaders = useCallback(async () => {
    if (!isSupabaseConfigured || !supabase) {
      setLeaders([]);
      setLoadError('The online leaderboard is currently offline.');
      setLoading(false);
      return;
    }

    const { data: authData } = await supabase.auth.getUser();
    const userId = authData.user?.id ?? null;
    setCurrentUserId(userId);

    try {
      if (period === 'weekly') {
        const { data: weeklyData, error: weeklyError } = await supabase.rpc('get_weekly_arena_standings');
        if (weeklyError) throw weeklyError;

        const list = (weeklyData || []).map((p: any, idx: number) => {
          const name = p.username || p.full_name || 'Bible Arena Scholar';
          return {
            id: p.player_id,
            rank: idx + 1,
            prevRank: idx + 1,
            name,
            level: Number(p.player_level) || 1,
            points: Number(p.weekly_points) || 0,
            avatar: name.trim().charAt(0).toUpperCase() || 'B',
            badges: computeScholarBadges(Number(p.player_level) || 1, Number(p.weekly_points) || 0, idx + 1),
          };
        });
        setLeaders(list);
      } else if (period === 'monthly') {
        let monthlyList: any[] = [];
        const { data: monthlyData, error: monthlyError } = await supabase.rpc('get_monthly_arena_standings');
        if (!monthlyError && monthlyData) {
          monthlyList = monthlyData;
        } else {
          // Fallback to profiles ranking if RPC not applied yet
          const { data: fallbackProfiles } = await supabase
            .from('profiles')
            .select('id, username, full_name, level, xp, created_at')
            .neq('is_guest', true)
            .order('xp', { ascending: false })
            .limit(50);
          monthlyList = fallbackProfiles || [];
        }

        const list = monthlyList.map((p: any, idx: number) => {
          const name = p.username || p.full_name || 'Bible Arena Scholar';
          const pts = Number(p.monthly_points ?? p.xp) || 0;
          return {
            id: p.player_id || p.id,
            rank: idx + 1,
            prevRank: idx + 1,
            name,
            level: Number(p.player_level ?? p.level) || 1,
            points: pts,
            avatar: name.trim().charAt(0).toUpperCase() || 'B',
            badges: computeScholarBadges(Number(p.player_level ?? p.level) || 1, pts, idx + 1),
          };
        });
        setLeaders(list);
      } else {
        // All-Time Lifetime Rankings
        const allPlayers: any[] = [];
        const pageSize = 1000;
        for (let offset = 0; ; offset += pageSize) {
          const { data, error } = await supabase
            .from('profiles')
            .select('id, username, full_name, level, xp, created_at')
            .eq('is_guest', false)
            .order('xp', { ascending: false })
            .order('level', { ascending: false })
            .order('created_at', { ascending: true })
            .range(offset, offset + pageSize - 1);

          if (error) throw error;
          allPlayers.push(...(data || []));
          if (!data || data.length < pageSize) break;
        }

        // Retrieve cached previous ranks to calculate rank movements
        let cachedRanks: Record<string, number> = {};
        try {
          const raw = localStorage.getItem('hall_of_scholars_ranks_all_time');
          if (raw) cachedRanks = JSON.parse(raw);
        } catch {
          // Ignore
        }

        const newRankMap: Record<string, number> = {};
        const mapped = allPlayers.map((player: any, index: number) => {
          const name = player.username || player.full_name || 'Bible Arena Player';
          const currentRank = index + 1;
          newRankMap[player.id] = currentRank;
          const prevRank = cachedRanks[player.id];

          return {
            id: player.id,
            rank: currentRank,
            prevRank: prevRank !== undefined ? prevRank : null,
            name,
            level: Number(player.level) || 1,
            points: Number(player.xp) || 0,
            avatar: name.trim().charAt(0).toUpperCase() || 'B',
            badges: computeScholarBadges(Number(player.level) || 1, Number(player.xp) || 0, currentRank),
          };
        });

        // Cache new snapshot
        try {
          localStorage.setItem('hall_of_scholars_ranks_all_time', JSON.stringify(newRankMap));
        } catch {
          // Ignore
        }

        setLeaders(mapped);

        if (userId) {
          const me = allPlayers.find((p) => p.id === userId);
          if (me) setCurrentUserProfile(me);
        }
      }
      setLoadError('');
    } catch (e) {
      console.error('Error fetching leaderboard:', e);
      setLoadError('We could not load the leaderboard. Please try again.');
    } finally {
      setLoading(false);
    }
  }, [period]);

  useEffect(() => {
    let active = true;
    const load = async () => {
      if (!active) return;
      await fetchLeaders();
    };

    load();
    const channel = supabase
      ?.channel('leaderboard-live')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'profiles' }, () => {
        if (active) fetchLeaders();
      })
      .subscribe();

    const refreshInterval = window.setInterval(() => {
      if (active) fetchLeaders();
    }, 25000);

    const onFocus = () => {
      if (active) fetchLeaders();
    };
    window.addEventListener('focus', onFocus);

    return () => {
      active = false;
      window.clearInterval(refreshInterval);
      window.removeEventListener('focus', onFocus);
      if (channel) supabase?.removeChannel(channel);
    };
  }, [fetchLeaders]);

  // Invite Fellow Scholars Action
  const handleInviteScholars = async () => {
    const inviteUrl = window.location.origin;
    const inviteText = 'Join me in the Hall of Scholars on Bible Arena! Test your Scripture knowledge and study God’s Word together.';
    if (navigator.share) {
      try {
        await navigator.share({ title: 'Bible Arena Hall of Scholars', text: inviteText, url: inviteUrl });
      } catch {
        // Fallback
      }
    } else {
      await navigator.clipboard.writeText(`${inviteText} ${inviteUrl}`);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  // User position in current list
  const userRankIndex = leaders.findIndex((l) => l.id === currentUserId);
  const userLeader = userRankIndex >= 0 ? leaders[userRankIndex] : null;

  // Milestone calculation
  const currentXp = userLeader?.points || Number(currentUserProfile?.xp || 0);
  const currentLvl = userLeader?.level || Number(currentUserProfile?.level || 1);
  const nextLevelXp = currentLvl * 500;
  const xpNeeded = Math.max(0, nextLevelXp - currentXp);
  const progressInLevelPct = Math.min(100, Math.round(((currentXp % 500) / 500) * 100));

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 text-[#171B24]">
      {/* Top Header Navigation */}
      <div className="flex items-center justify-between">
        <BackButton fallback="/" />
        <button
          type="button"
          onClick={() => {
            setLoading(true);
            fetchLeaders();
          }}
          className="inline-flex items-center gap-2 rounded-full border border-[#171B24]/15 bg-white px-4 py-2 text-xs font-bold text-[#171B24] hover:bg-[#F3EBDD] transition shadow-xs"
        >
          <RefreshCw className="h-3.5 w-3.5" /> Refresh Rankings
        </button>
      </div>

      {/* Main Title Banner */}
      <div className="text-center max-w-xl mx-auto">
        <span className="px-3.5 py-1.5 rounded-full bg-amber-500/10 text-xs font-bold text-amber-800 uppercase tracking-wider">
          Scripture Scholarship
        </span>
        <h2 className="font-serif font-extrabold text-3xl sm:text-4xl text-[#171B24] mt-3 mb-2">
          The Hall of Scholars
        </h2>
        <p className="text-sm text-[#171B24]/70">
          Every registered believer has a rightful place here. Study God's Word, challenge other scholars, and climb the rankings.
        </p>
      </div>

      {/* Period Selection Tabs */}
      <div className="flex justify-center">
        <div className="inline-flex bg-white p-1 rounded-2xl border border-[#171B24]/15 shadow-sm">
          <button
            type="button"
            onClick={() => setPeriod('all-time')}
            className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-1.5 ${
              period === 'all-time'
                ? 'bg-[#171B24] text-white shadow-xs'
                : 'text-[#5A6275] hover:text-[#171B24]'
            }`}
          >
            <Trophy className="w-3.5 h-3.5 text-amber-400" /> All-Time
          </button>
          <button
            type="button"
            onClick={() => setPeriod('weekly')}
            className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-1.5 ${
              period === 'weekly'
                ? 'bg-[#D66B3D] text-white shadow-xs'
                : 'text-[#5A6275] hover:text-[#171B24]'
            }`}
          >
            <Calendar className="w-3.5 h-3.5" /> Weekly Cup
          </button>
          <button
            type="button"
            onClick={() => setPeriod('monthly')}
            className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-1.5 ${
              period === 'monthly'
                ? 'bg-[#3156C9] text-white shadow-xs'
                : 'text-[#5A6275] hover:text-[#171B24]'
            }`}
          >
            <CalendarDays className="w-3.5 h-3.5" /> Monthly
          </button>
        </div>
      </div>

      {/* Weekly Arena Panel (Shown prominently in all tabs, focused on weekly competition) */}
      <WeeklyArenaPanel
        currentUserId={currentUserId}
        currentUserPoints={currentXp}
      />

      {/* Low-Player or Milestone Motivation Card */}
      {userLeader && (
        <div className="rounded-3xl border border-[#171B24]/10 bg-white p-5 sm:p-6 shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#D66B3D]">Scholar Standing</span>
            <h4 className="font-serif font-bold text-base text-[#171B24]">
              You are ranked #{userLeader.rank} in the Hall of Scholars
            </h4>
            <p className="text-xs text-[#5A6275]">
              {xpNeeded > 0
                ? `${xpNeeded} points needed to reach Level ${currentLvl + 1}`
                : 'Maximum milestone achieved for this tier!'}
            </p>
            <div className="w-48 sm:w-64 h-2 rounded-full bg-stone-100 overflow-hidden mt-2">
              <div
                className="h-full bg-gradient-to-r from-[#D66B3D] to-amber-500 rounded-full transition-all"
                style={{ width: `${progressInLevelPct}%` }}
              />
            </div>
          </div>

          <button
            type="button"
            onClick={handleInviteScholars}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-[#F3EBDD] border border-[#171B24]/15 text-xs font-bold text-[#171B24] hover:bg-stone-200 transition shrink-0"
          >
            {copiedLink ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4 text-[#D66B3D]" />}
            {copiedLink ? 'Link Copied!' : 'Invite Fellow Scholars'}
          </button>
        </div>
      )}

      {/* Rankings Leaderboard Table */}
      <div className="bg-white rounded-3xl p-5 sm:p-8 shadow-xl border border-[#171B24]/10 min-h-[260px] space-y-4">
        {loading ? (
          <div className="space-y-3 py-4">
            <div className="h-16 bg-[#171B24]/5 rounded-2xl animate-pulse" />
            <div className="h-16 bg-[#171B24]/5 rounded-2xl animate-pulse" />
            <div className="h-16 bg-[#171B24]/5 rounded-2xl animate-pulse" />
          </div>
        ) : loadError ? (
          <div className="text-center py-12 space-y-4">
            <p className="text-sm text-red-700">{loadError}</p>
            <Button
              variant="primary"
              onClick={() => {
                setLoading(true);
                fetchLeaders();
              }}
            >
              Try Again
            </Button>
          </div>
        ) : leaders.length === 0 ? (
          <div className="text-center py-12 px-4 space-y-4">
            <div className="w-16 h-16 rounded-full bg-amber-500/10 text-amber-800 flex items-center justify-center mx-auto mb-2">
              <Trophy className="w-8 h-8 text-[#D66B3B]" />
            </div>
            <h3 className="font-serif font-bold text-2xl text-[#171B24]">
              {period === 'weekly'
                ? 'No weekly points logged yet'
                : period === 'monthly'
                ? 'No monthly scores recorded yet'
                : 'The Hall of Scholars is waiting for its first believer.'}
            </h3>
            <p className="text-sm text-[#171B24]/60 max-w-md mx-auto">
              Play any Bible game and answer questions correctly to take your place in the global rankings.
            </p>
            {onPlayGame && (
              <div className="pt-2">
                <Button
                  variant="primary"
                  size="lg"
                  icon={<Play className="w-4 h-4 fill-current" />}
                  onClick={onPlayGame}
                >
                  Play Now
                </Button>
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-3">
            <div className="flex items-center justify-between px-1 pb-1">
              <p className="text-xs font-bold uppercase tracking-wider text-[#171B24]/50">
                {leaders.length} registered {leaders.length === 1 ? 'scholar' : 'scholars'} · Authentic Rankings
              </p>
              <p className="text-xs font-bold uppercase tracking-wider text-[#171B24]/50">
                {period === 'weekly' ? 'Weekly Points' : period === 'monthly' ? 'Monthly Points' : 'Lifetime Points'}
              </p>
            </div>

            {leaders.map((leader) => {
              const isMe = leader.id === currentUserId;

              // Calculate rank movement
              let movement = 'same';
              let moveDelta = 0;
              if (leader.prevRank !== null && leader.prevRank !== undefined) {
                if (leader.prevRank > leader.rank) {
                  movement = 'up';
                  moveDelta = leader.prevRank - leader.rank;
                } else if (leader.prevRank < leader.rank) {
                  movement = 'down';
                  moveDelta = leader.rank - leader.prevRank;
                }
              } else {
                movement = 'new';
              }

              return (
                <div
                  key={leader.id}
                  className={`flex items-center justify-between gap-3 p-3.5 sm:p-4 rounded-2xl border transition-all ${
                    isMe
                      ? 'border-[#3156C9] bg-[#EEF2FF] ring-2 ring-[#3156C9]/30 shadow-xs'
                      : leader.rank === 1
                      ? 'bg-amber-500/10 border-amber-500/30'
                      : leader.rank === 2
                      ? 'bg-stone-200/50 border-stone-300'
                      : leader.rank === 3
                      ? 'bg-amber-700/10 border-amber-800/20'
                      : 'bg-[#F3EBDD]/40 border-[#171B24]/10 hover:border-[#171B24]/20'
                  }`}
                >
                  <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                    {/* Rank with Movement Indicator */}
                    <div className="flex flex-col items-center justify-center shrink-0 w-9 sm:w-10">
                      <div
                        className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center font-serif font-bold text-sm ${
                          leader.rank === 1
                            ? 'bg-amber-500 text-white shadow-md'
                            : leader.rank === 2
                            ? 'bg-stone-400 text-white'
                            : leader.rank === 3
                            ? 'bg-amber-700 text-white'
                            : 'bg-[#171B24]/10 text-[#171B24]'
                        }`}
                      >
                        {leader.rank <= 3 ? <Medal className="w-4 h-4 sm:w-5 sm:h-5" /> : `#${leader.rank}`}
                      </div>

                      {/* Rank Movement Indicator */}
                      <span className="text-[10px] font-bold mt-0.5 flex items-center">
                        {movement === 'up' && (
                          <span className="text-emerald-700 flex items-center font-mono">
                            <TrendingUp className="w-2.5 h-2.5 mr-0.5" />+{moveDelta}
                          </span>
                        )}
                        {movement === 'down' && (
                          <span className="text-rose-600 flex items-center font-mono">
                            <TrendingDown className="w-2.5 h-2.5 mr-0.5" />-{moveDelta}
                          </span>
                        )}
                        {movement === 'same' && (
                          <span className="text-stone-400">
                            <Minus className="w-2.5 h-2.5" />
                          </span>
                        )}
                        {movement === 'new' && (
                          <span className="text-amber-700 font-mono text-[9px]">NEW</span>
                        )}
                      </span>
                    </div>

                    {/* Avatar Initials */}
                    <div className="w-10 h-10 shrink-0 rounded-full bg-[#171B24] text-white font-bold flex items-center justify-center text-sm shadow-xs">
                      {leader.avatar}
                    </div>

                    {/* Name, Level and Badges */}
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-1.5">
                        <h4 className="font-serif font-bold text-sm sm:text-base text-[#171B24] truncate">
                          {leader.name}
                        </h4>
                        {isMe && (
                          <span className="text-[10px] font-sans font-bold text-[#3156C9] bg-white px-2 py-0.2 rounded-full border border-[#3156C9]/20">
                            YOU
                          </span>
                        )}
                      </div>

                      <div className="flex flex-wrap items-center gap-1.5 mt-0.5">
                        <span className="text-xs text-[#5A6275]">Level {leader.level} Scholar</span>
                        {leader.badges.map((b, bIdx) => (
                          <span
                            key={bIdx}
                            className="px-2 py-0.2 rounded-full text-[10px] font-bold bg-[#171B24]/5 text-[#171B24] border border-[#171B24]/10 hidden sm:inline-flex"
                          >
                            {b}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Points */}
                  <div className="text-right shrink-0">
                    <span className="font-serif font-bold text-base sm:text-lg text-[#D66B3D] font-mono">
                      {leader.points.toLocaleString()}
                    </span>
                    <p className="text-[10px] uppercase tracking-wider text-[#171B24]/50">points</p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Integrity Footer Guarantee */}
      <div className="p-4 rounded-2xl bg-white border border-[#171B24]/10 text-center text-xs text-[#5A6275] space-y-1">
        <p className="font-bold text-[#171B24]">Biblical Integrity & Anti-Cheat Guarantee</p>
        <p className="text-[11px] text-[#5A6275]/80">
          Only genuine registered accounts are ranked. Points are verified through Scripture challenges and level completions. No bots, simulated players, or fabricated scores exist on Bible Arena.
        </p>
      </div>
    </div>
  );
};
