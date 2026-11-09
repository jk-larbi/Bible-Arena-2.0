import React, { useState, useEffect, useCallback } from 'react';
import { Trophy, Play, RefreshCw, Medal, Crown } from 'lucide-react';
import { Button } from '../components/Button';
import { supabase, isSupabaseConfigured } from '../lib/supabase';
import { BackButton } from '../components/BackButton';

interface LeaderboardProps {
  onPlayGame?: () => void;
}

interface Leader {
  id: string;
  rank: number;
  name: string;
  level: number;
  points: number;
  avatar: string;
}

type WeeklyLeader = {
  rank: number;
  player_id: string;
  username: string | null;
  full_name: string | null;
  player_level: number;
  weekly_points: number;
  levels_played: number;
  games_played: number;
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

const WeeklyArenaPanel: React.FC<{ currentUserId: string | null }> = ({ currentUserId }) => {
  const [rows, setRows] = useState<WeeklyLeader[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

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
    const onFocus = () => void load();
    window.addEventListener('focus', onFocus);
    return () => {
      window.clearInterval(interval);
      window.removeEventListener('focus', onFocus);
    };
  }, [load]);

  return (
    <section className="overflow-hidden rounded-3xl border border-[#171B24]/10 bg-white shadow-xl">
      <div className="bg-[#171B24] px-5 py-5 text-white sm:px-7">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#F0B18D]">Weekly Competition</span>
            <h3 className="mt-1 font-serif text-2xl font-extrabold">Weekly Arena Cup</h3>
            <p className="mt-1 text-xs text-white/65">Best score per level counts once. Beat your personal best to climb.</p>
          </div>
          <div className="rounded-xl border border-white/15 bg-white/10 px-3 py-2 text-right">
            <p className="text-[10px] font-bold uppercase tracking-wider text-white/55">This week's event</p>
            <p className="text-xs font-bold">{getUtcWeekLabel()}</p>
            <p className="mt-1 text-[10px] text-[#F0B18D]">Resets Monday · 00:00 UTC</p>
          </div>
        </div>
      </div>
      <div className="space-y-3 p-4 sm:p-6">
        {loading ? (
          <div className="space-y-3">
            {[1, 2, 3].map((item) => <div key={item} className="h-14 animate-pulse rounded-xl bg-[#171B24]/5" />)}
          </div>
        ) : error ? (
          <p className="rounded-xl bg-rose-50 p-3 text-sm text-rose-700">{error}</p>
        ) : rows.length === 0 ? (
          <div className="py-6 text-center">
            <Trophy className="mx-auto mb-3 h-9 w-9 text-[#D66B3D]" />
            <p className="font-serif text-lg font-bold text-[#171B24]">The weekly contest is ready.</p>
            <p className="mt-1 text-xs text-[#5A6275]">Complete a level this week to enter the standings automatically.</p>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between px-1 text-[10px] font-bold uppercase tracking-wider text-[#7A8190]">
              <span>{rows.length} competing scholars</span>
              <span>Weekly points</span>
            </div>
            {rows.slice(0, 10).map((player) => {
              const name = player.username || player.full_name || 'Bible Arena Scholar';
              const isMe = player.player_id === currentUserId;
              return (
                <div key={player.player_id} className={`flex items-center justify-between gap-3 rounded-2xl border p-3 ${isMe ? 'border-[#3156C9] bg-[#EEF2FF] ring-1 ring-[#3156C9]/20' : 'border-[#171B24]/10 bg-[#FCFBF8]'}`}>
                  <div className="flex min-w-0 items-center gap-3">
                    <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-xs font-black ${player.rank === 1 ? 'bg-amber-500 text-white' : player.rank === 2 ? 'bg-stone-300 text-[#171B24]' : player.rank === 3 ? 'bg-amber-800 text-white' : 'bg-[#171B24]/10 text-[#171B24]'}`}>#{player.rank}</span>
                    <div className="min-w-0">
                      <p className="truncate text-sm font-bold text-[#171B24]">{name} {isMe && <span className="text-[10px] text-[#3156C9]">(YOU)</span>}</p>
                      <p className="text-[10px] text-[#7A8190]">Level {player.player_level} · {player.levels_played} levels · {player.games_played} games</p>
                    </div>
                  </div>
                  <p className="shrink-0 font-mono text-sm font-extrabold text-[#D66B3D]">{Number(player.weekly_points).toLocaleString()}</p>
                </div>
              );
            })}
            {currentUserId && !rows.some((player) => player.player_id === currentUserId) && (
              <p className="rounded-xl bg-[#F3EBDD] p-3 text-xs text-[#5A6275]">You haven't posted a score in this week's competition yet. Play a level to enter.</p>
            )}
          </>
        )}
        <p className="text-[10px] text-[#7A8190]">Only registered players are ranked. Each level contributes its best completed score during the current week, preventing repeat attempts from inflating points.</p>
      </div>
    </section>
  );
};


const getUtcMonthLabel = () => {
  const now = new Date();
  const start = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), 1));
  const end = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth() + 1, 0));
  const fmt = (date: Date) => date.toLocaleDateString(undefined, { month: 'short', day: 'numeric', timeZone: 'UTC' });
  return `${fmt(start)} – ${fmt(end)} UTC`;
};

const MonthlyArenaPanel: React.FC<{ currentUserId: string | null }> = ({ currentUserId }) => {
  const [rows, setRows] = useState<WeeklyLeader[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const load = useCallback(async () => {
    if (!supabase || !isSupabaseConfigured) { setError('Monthly Arena is unavailable right now.'); setLoading(false); return; }
    const { data, error: rpcError } = await supabase.rpc('get_monthly_arena_standings');
    if (rpcError) setError('Monthly standings could not be loaded. Please try again.');
    else { setRows((data || []) as WeeklyLeader[]); setError(''); }
    setLoading(false);
  }, []);
  useEffect(() => {
    void load();
    const interval = window.setInterval(() => void load(), 30000);
    const onFocus = () => void load();
    window.addEventListener('focus', onFocus);
    return () => { window.clearInterval(interval); window.removeEventListener('focus', onFocus); };
  }, [load]);
  return (
    <section className="overflow-hidden rounded-3xl border border-[#171B24]/10 bg-white shadow-xl">
      <div className="bg-[#171B24] px-5 py-5 text-white sm:px-7">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div><span className="text-xs font-bold uppercase tracking-[0.16em] text-[#F0B18D]">Monthly Competition</span><h3 className="mt-1 font-serif text-2xl font-extrabold">Monthly Scholars Cup</h3><p className="mt-1 text-xs text-white/65">Your best score for each level counts once this month.</p></div>
          <div className="rounded-xl border border-white/15 bg-white/10 px-3 py-2 text-right"><p className="text-[10px] font-bold uppercase tracking-wider text-white/55">This month's event</p><p className="text-xs font-bold">{getUtcMonthLabel()}</p><p className="mt-1 text-[10px] text-[#F0B18D]">Resets on the 1st · 00:00 UTC</p></div>
        </div>
      </div>
      <div className="space-y-3 p-4 sm:p-6">
        {loading ? <div className="space-y-3">{[1,2,3].map((item)=><div key={item} className="h-14 animate-pulse rounded-xl bg-[#171B24]/5"/>)}</div>
        : error ? <p className="rounded-xl bg-rose-50 p-3 text-sm text-rose-700">{error}</p>
        : rows.length === 0 ? <div className="py-6 text-center"><Trophy className="mx-auto mb-3 h-9 w-9 text-[#D66B3D]"/><p className="font-serif text-lg font-bold text-[#171B24]">A new monthly contest awaits.</p><p className="mt-1 text-xs text-[#5A6275]">Complete a level this month to enter the standings.</p></div>
        : <>{rows.slice(0,10).map((player)=><div key={player.player_id} className={`flex items-center justify-between gap-3 rounded-2xl border p-3 ${player.player_id===currentUserId?'border-[#3156C9] bg-[#EEF2FF] ring-1 ring-[#3156C9]/20':'border-[#171B24]/10 bg-[#FCFBF8]'}`}><div className="min-w-0"><p className="truncate text-sm font-bold text-[#171B24]">#{player.rank} · {player.username || player.full_name || 'Bible Arena Scholar'} {player.player_id===currentUserId && <span className="text-[10px] text-[#3156C9]">(YOU)</span>}</p><p className="text-[10px] text-[#7A8190]">Level {player.player_level} · {player.levels_played} levels · {player.games_played} games</p></div><p className="shrink-0 font-mono text-sm font-extrabold text-[#D66B3D]">{Number(player.weekly_points).toLocaleString()}</p></div>)}</>}
        <p className="text-[10px] text-[#7A8190]">Registered players only. The best completed score per game level is counted once to prevent repeat-attempt farming.</p>
      </div>
    </section>
  );
};

export const LeaderboardPage: React.FC<LeaderboardProps> = ({ onPlayGame }) => {
  const [leaders, setLeaders] = useState<Leader[]>([]);
  const [currentUserId, setCurrentUserId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState('');

  const fetchLeaders = useCallback(async () => {
    if (!isSupabaseConfigured || !supabase) {
      setLeaders([]);
      setLoadError('The online leaderboard is not available right now.');
      setLoading(false);
      return;
    }

    const { data: authData } = await supabase.auth.getUser();
    const userId = authData.user?.id ?? null;
    setCurrentUserId(userId);

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
        .order('id', { ascending: true })
        .range(offset, offset + pageSize - 1);

      if (error) {
        setLoadError('We could not load the leaderboard. Please try again.');
        setLoading(false);
        return;
      }

      allPlayers.push(...(data || []));
      if (!data || data.length < pageSize) break;
    }

    // Fetch every registered account in stable pages, including players with zero XP.
    setLeaders(allPlayers.map((player: any, index: number) => {
      const name = player.username || player.full_name || 'Bible Arena Player';
      return {
        id: player.id,
        rank: index + 1,
        name,
        level: Number(player.level) || 1,
        points: Number(player.xp) || 0,
        avatar: name.trim().charAt(0).toUpperCase() || 'B',
      };
    }));
    setLoadError('');
    setLoading(false);
  }, []);

  useEffect(() => {
    let active = true;
    const load = async () => {
      if (!active) return;
      await fetchLeaders();
    };

    load();
    const channel = supabase?.channel('leaderboard-live')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'profiles' }, () => {
        if (active) fetchLeaders();
      })
      .subscribe();

    // Refresh as a fallback when realtime is unavailable and when players return to the tab.
    const refreshInterval = window.setInterval(() => { if (active) fetchLeaders(); }, 20000);
    const onFocus = () => { if (active) fetchLeaders(); };
    window.addEventListener('focus', onFocus);

    return () => {
      active = false;
      window.clearInterval(refreshInterval);
      window.removeEventListener('focus', onFocus);
      if (channel) supabase?.removeChannel(channel);
    };
  }, [fetchLeaders]);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <div className="flex items-center justify-between">
        <BackButton fallback="/" />
        <button
          type="button"
          onClick={() => { setLoading(true); fetchLeaders(); }}
          className="inline-flex items-center gap-2 rounded-full border border-[#171B24]/15 bg-white px-4 py-2 text-xs font-bold text-[#171B24] hover:bg-[#F3EBDD]"
        >
          <RefreshCw className="h-3.5 w-3.5" /> Refresh
        </button>
      </div>

      <div className="text-center max-w-xl mx-auto">
        <span className="px-3.5 py-1.5 rounded-full bg-amber-500/10 text-xs font-bold text-amber-800 uppercase tracking-wider">
          Global Rankings
        </span>
        <h2 className="font-serif font-extrabold text-3xl sm:text-4xl text-[#171B24] mt-3 mb-2">
          The Hall of Scholars
        </h2>
        <p className="text-sm text-[#171B24]/70">
          Every registered player has a place here. Play Bible games, earn points, and climb the rankings.
        </p>
        <p className="text-xs text-[#171B24]/50 mt-2">Ranked by total points earned across all games.</p>
      </div>

      <WeeklyArenaPanel currentUserId={currentUserId} />
      <MonthlyArenaPanel currentUserId={currentUserId} />

      <div className="bg-white rounded-3xl p-5 sm:p-8 shadow-xl border border-[#171B24]/10 min-h-[260px]">
        {loading ? (
          <div className="space-y-3 py-4">
            <div className="h-16 bg-[#171B24]/5 rounded-2xl animate-pulse" />
            <div className="h-16 bg-[#171B24]/5 rounded-2xl animate-pulse" />
            <div className="h-16 bg-[#171B24]/5 rounded-2xl animate-pulse" />
          </div>
        ) : loadError ? (
          <div className="text-center py-12 space-y-4">
            <p className="text-sm text-red-700">{loadError}</p>
            <Button variant="primary" onClick={() => { setLoading(true); fetchLeaders(); }}>Try Again</Button>
          </div>
        ) : leaders.length === 0 ? (
          <div className="text-center py-12 px-4 space-y-4">
            <div className="w-16 h-16 rounded-full bg-amber-500/10 text-amber-800 flex items-center justify-center mx-auto mb-2">
              <Trophy className="w-8 h-8 text-[#D66B3B]" />
            </div>
            <h3 className="font-serif font-bold text-2xl text-[#171B24]">
              The leaderboard is waiting for its first scholar.
            </h3>
            <p className="text-sm text-[#171B24]/60 max-w-md mx-auto">
              Create a registered account to appear here. Your name will be listed immediately, and every point you earn by answering correctly will move you up the rankings.
            </p>
            {onPlayGame && (
              <div className="pt-2">
                <Button variant="primary" size="lg" icon={<Play className="w-4 h-4 fill-current" />} onClick={onPlayGame}>
                  Play Now
                </Button>
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-3">
            <div className="flex items-center justify-between px-1 pb-1">
              <p className="text-xs font-bold uppercase tracking-wider text-[#171B24]/50">{leaders.length} registered {leaders.length === 1 ? 'player' : 'players'}</p>
              <p className="text-xs font-bold uppercase tracking-wider text-[#171B24]/50">Total points</p>
            </div>
            {leaders.map((leader) => {
              const isMe = leader.id === currentUserId;
              return (
                <div
                  key={leader.id}
                  className={`flex items-center justify-between gap-3 p-3 sm:p-4 rounded-2xl border transition-all ${
                    isMe ? 'ring-2 ring-[#3156C9] ring-offset-1 ' : ''
                  }${
                    leader.rank === 1 ? 'bg-amber-500/10 border-amber-500/30' :
                    leader.rank === 2 ? 'bg-stone-200/50 border-stone-300' :
                    leader.rank === 3 ? 'bg-amber-700/10 border-amber-800/20' :
                    'bg-[#F3EBDD]/50 border-[#171B24]/10'
                  }`}
                >
                  <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                    <div className={`w-9 h-9 sm:w-10 sm:h-10 shrink-0 rounded-xl flex items-center justify-center font-serif font-bold text-sm ${
                      leader.rank === 1 ? 'bg-amber-500 text-white shadow-md' :
                      leader.rank === 2 ? 'bg-stone-400 text-white' :
                      leader.rank === 3 ? 'bg-amber-700 text-white' : 'bg-[#171B24]/10 text-[#171B24]'
                    }`}>
                      {leader.rank <= 3 ? <Medal className="w-5 h-5" /> : `#${leader.rank}`}
                    </div>
                    <div className="w-10 h-10 shrink-0 rounded-full bg-[#171B24] text-white font-bold flex items-center justify-center text-sm shadow-sm">
                      {leader.avatar}
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-serif font-bold text-sm sm:text-base text-[#171B24] truncate">
                        {leader.name} {isMe && <span className="text-[10px] font-sans text-[#3156C9]">(YOU)</span>}
                      </h4>
                      <span className="text-xs text-[#171B24]/60">Level {leader.level}</span>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="font-serif font-bold text-base sm:text-lg text-[#D66B3B] font-mono">{leader.points.toLocaleString()}</span>
                    <p className="text-[10px] uppercase tracking-wider text-[#171B24]/50">points</p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <p className="text-center text-xs text-[#171B24]/45">Points are earned by answering game questions correctly. Your ranking updates as your score grows.</p>
    </div>
  );
};
