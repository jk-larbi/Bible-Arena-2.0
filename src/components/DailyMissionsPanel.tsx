import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { BookOpen, CalendarCheck, CheckCircle2, Clock3, Flame, LockKeyhole, Target, Trophy } from 'lucide-react';
import { isSupabaseConfigured, supabase } from '../lib/supabase';

type Attempt = { game_slug: string; level: number; percent: number | null; completed_at: string };
type Mission = {
  id: string;
  title: string;
  description: string;
  reward: number;
  target: number;
  icon: React.ReactNode;
  progress: (attempts: Attempt[]) => number;
};

const MISSIONS: Mission[] = [
  {
    id: 'daily-check-in',
    title: 'Daily Check-in',
    description: 'Claim your daily welcome reward and keep your Arena journey moving.',
    reward: 25,
    target: 1,
    icon: <CalendarCheck className="h-5 w-5" />,
    progress: () => 1,
  },
  {
    id: 'finish-one-level',
    title: 'First Victory',
    description: 'Complete any one game level today.',
    reward: 50,
    target: 1,
    icon: <BookOpen className="h-5 w-5" />,
    progress: (attempts) => Math.min(1, new Set(attempts.map((a) => `${a.game_slug}:${a.level}`)).size),
  },
  {
    id: 'play-two-games',
    title: 'Explore the Arena',
    description: 'Complete levels in two different games.',
    reward: 75,
    target: 2,
    icon: <Target className="h-5 w-5" />,
    progress: (attempts) => new Set(attempts.map((a) => a.game_slug)).size,
  },
  {
    id: 'score-80-percent',
    title: 'Sharp Scripture Mind',
    description: 'Score at least 80% in any completed level.',
    reward: 100,
    target: 1,
    icon: <Zap className="h-5 w-5" />,
    progress: (attempts) => attempts.some((a) => Number(a.percent) >= 80) ? 1 : 0,
  },
  {
    id: 'finish-three-levels',
    title: 'On a Winning Streak',
    description: 'Complete three levels today.',
    reward: 150,
    target: 3,
    icon: <Flame className="h-5 w-5" />,
    progress: (attempts) => Math.min(3, new Set(attempts.map((a) => `${a.game_slug}:${a.level}`)).size),
  },
  {
    id: 'perfect-level',
    title: 'Perfect Scholar',
    description: 'Complete a level with a perfect 100% score.',
    reward: 200,
    target: 1,
    icon: <Trophy className="h-5 w-5" />,
    progress: (attempts) => attempts.some((a) => Number(a.percent) >= 100) ? 1 : 0,
  },
];

function utcDay() {
  return new Date().toISOString().slice(0, 10);
}

interface DailyMissionsPanelProps {
  userId: string | null;
  onXpAwarded?: (xp: number) => void;
}

export const DailyMissionsPanel: React.FC<DailyMissionsPanelProps> = ({ userId, onXpAwarded }) => {
  const [day, setDay] = useState(utcDay);
  const [attempts, setAttempts] = useState<Attempt[]>([]);
  const [claimed, setClaimed] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [claiming, setClaiming] = useState<string | null>(null);
  const [message, setMessage] = useState('');

  const loadMissions = useCallback(async () => {
    const today = utcDay();
    setDay(today);
    if (!userId || !isSupabaseConfigured || !supabase) {
      setAttempts([]);
      setClaimed([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    setMessage('');
    const start = `${today}T00:00:00.000Z`;
    try {
      const [attemptResult, claimResult] = await Promise.all([
        supabase
          .from('level_attempts')
          .select('game_slug, level, percent, completed_at')
          .eq('user_id', userId)
          .eq('status', 'completed')
          .gte('completed_at', start),
        supabase
          .from('daily_mission_claims')
          .select('mission_id')
          .eq('user_id', userId)
          .eq('mission_date', today),
      ]);

      if (attemptResult.error) throw attemptResult.error;
      if (claimResult.error) throw claimResult.error;
      setAttempts((attemptResult.data || []) as Attempt[]);
      setClaimed((claimResult.data || []).map((row: any) => row.mission_id));
    } catch (error) {
      console.error('Daily mission load failed:', error);
      setMessage('We could not refresh your missions. Check your connection and try again.');
    } finally {
      setLoading(false);
    }
  }, [userId]);;

  useEffect(() => {
    void loadMissions();
    window.addEventListener('focus', loadMissions);
    return () => window.removeEventListener('focus', loadMissions);
  }, [loadMissions]);

  const dayLabel = useMemo(
    () => new Date(`${day}T00:00:00.000Z`).toLocaleDateString(undefined, { weekday: 'long', month: 'short', day: 'numeric', timeZone: 'UTC' }),
    [day]
  );

  const claimMission = async (mission: Mission) => {
    if (!supabase || !userId || claiming) return;
    setClaiming(mission.id);
    setMessage('');
    try {
      const { data, error } = await supabase.rpc('claim_daily_mission', { p_mission_id: mission.id });
      if (error) throw error;

      const row = Array.isArray(data) ? data[0] : data;
      if (!row || Number(row.reward_xp) !== mission.reward || row.total_xp === undefined) {
        throw new Error('The server did not confirm this reward. Please refresh and try again.');
      }

      setClaimed((current) => current.includes(mission.id) ? current : [...current, mission.id]);
      onXpAwarded?.(Number(row.total_xp));
      setMessage(`Reward claimed! +${Number(row.reward_xp)} XP added to your account.`);
    } catch (error) {
      console.error('Daily mission claim failed:', error);
      const detail = error instanceof Error ? error.message : 'Please check your connection and try again.';
      setMessage(detail.toLowerCase().includes('already') ? 'You have already claimed this reward today.' : detail);
    } finally {
      setClaiming(null);
    }
  };

  return (
    <section className="overflow-hidden rounded-3xl border border-[#171B24]/10 bg-white shadow-sm">
      <div className="flex flex-col gap-3 bg-[#171B24] px-5 py-5 text-white sm:flex-row sm:items-center sm:justify-between sm:px-7">
        <div>
          <div className="mb-1 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#F0B18D]">
            <BookOpen className="h-4 w-4" /> Daily Missions
          </div>
          <h2 className="font-serif text-2xl font-bold">Today's Scripture Goals</h2>
          <p className="mt-1 text-sm text-white/65">Play, improve and earn bonus XP every day.</p>
        </div>
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2 text-xs font-semibold text-white/80">
          <Clock3 className="h-4 w-4" /> Resets at midnight UTC
        </div>
      </div>

      <div className="space-y-3 p-4 sm:p-6">
        <div className="flex items-center justify-between gap-3">
          <p className="text-sm font-bold text-[#171B24]">{dayLabel}</p>
          <p className="text-xs text-[#5A6275]">{claimed.length} / {MISSIONS.length} rewards claimed</p>
        </div>

        {!userId && (
          <p className="rounded-xl bg-[#F3EBDD] p-3 text-sm text-[#5A6275]">
            Start a player session to track your daily mission progress.
          </p>
        )}

        {MISSIONS.map((mission) => {
          const progress = Math.min(mission.target, mission.progress(attempts));
          const complete = progress >= mission.target;
          const isClaimed = claimed.includes(mission.id);
          const pct = Math.round((progress / mission.target) * 100);
          return (
            <div key={mission.id} className="rounded-2xl border border-[#171B24]/10 bg-[#FCFBF8] p-4">
              <div className="flex items-start gap-3">
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${isClaimed ? 'bg-emerald-100 text-emerald-700' : 'bg-[#D66B3D]/10 text-[#D66B3D]'}`}>
                  {isClaimed ? <CheckCircle2 className="h-5 w-5" /> : mission.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-sm font-bold text-[#171B24]">{mission.title}</h3>
                    <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-1 text-[11px] font-bold text-amber-800">
                      <Trophy className="h-3 w-3" /> +{mission.reward} XP
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-[#5A6275]">{mission.description}</p>
                  <div className="mt-3 flex items-center gap-3">
                    <div className="h-2 flex-1 overflow-hidden rounded-full bg-[#171B24]/10">
                      <div className="h-full rounded-full bg-[#D66B3D] transition-all" style={{ width: `${pct}%` }} />
                    </div>
                    <span className="min-w-[42px] text-right text-[11px] font-bold tabular-nums text-[#5A6275]">{progress}/{mission.target}</span>
                  </div>
                </div>
              </div>
              <div className="mt-3 flex justify-end">
                {isClaimed ? (
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700"><CheckCircle2 className="h-4 w-4" /> Reward claimed</span>
                ) : complete ? (
                  <button type="button" disabled={claiming !== null || !userId} onClick={() => void claimMission(mission)}
                    className="rounded-xl bg-[#D66B3D] px-4 py-2 text-xs font-bold text-white transition hover:bg-[#bf592f] disabled:opacity-50">
                    {claiming === mission.id ? 'Claiming…' : 'Claim reward'}
                  </button>
                ) : (
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#7A8190]"><LockKeyhole className="h-3.5 w-3.5" /> Keep playing to unlock</span>
                )}
              </div>
            </div>
          );
        })}

        {loading && <p className="text-center text-xs text-[#7A8190]">Updating your mission progress…</p>}
        {message && <p role="status" className="rounded-xl bg-[#F3EBDD] px-3 py-2 text-xs font-semibold text-[#5A6275]">{message}</p>}
        <p className="text-[11px] text-[#7A8190]">Missions use completed game levels saved to your player account. Rewards can only be claimed once per day.</p>
      </div>
    </section>
  );
};
