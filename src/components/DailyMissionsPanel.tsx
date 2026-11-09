import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
  BookOpen,
  CalendarCheck,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Flame,
  LockKeyhole,
  Sparkles,
  Target,
  Trophy,
  X,
  Zap,
} from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { isSupabaseConfigured, supabase } from '../lib/supabase';
import { playBibleArenaSound } from '../lib/gameAudio';

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

const GUEST_DAILY_CLAIMS_PREFIX = 'biblearena_daily_claims_';

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
  const [celebration, setCelebration] = useState<{ id: string; title: string; reward: number } | null>(null);
  const [message, setMessage] = useState('');
  const [showClaimed, setShowClaimed] = useState(false);

  const loadMissions = useCallback(async () => {
    const today = utcDay();
    setDay(today);

    // Read local guest claims first (for fallback or guest mode)
    let localGuestClaims: string[] = [];
    try {
      const raw = localStorage.getItem(`${GUEST_DAILY_CLAIMS_PREFIX}${today}`);
      if (raw) localGuestClaims = JSON.parse(raw);
    } catch {
      localGuestClaims = [];
    }

    // Read local level progress for attempts if playing offline / guest
    const readLocalAttempts = (): Attempt[] => {
      try {
        const raw = localStorage.getItem('biblearena_levels_progress');
        if (!raw) return [];
        const parsed = JSON.parse(raw);
        const list: Attempt[] = [];
        for (const [slug, levels] of Object.entries(parsed as Record<string, Record<string, any>>)) {
          for (const [lvl, prog] of Object.entries(levels || {})) {
            if (prog?.completed) {
              list.push({
                game_slug: slug,
                level: Number(lvl),
                percent: Number(prog?.best_percent ?? 100),
                completed_at: prog?.completed_at || `${today}T12:00:00.000Z`,
              });
            }
          }
        }
        return list;
      } catch {
        return [];
      }
    };

    if (!userId || !isSupabaseConfigured || !supabase) {
      setAttempts(readLocalAttempts());
      setClaimed(localGuestClaims);
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

      const serverAttempts = (attemptResult.data || []) as Attempt[];
      const localAttempts = readLocalAttempts();
      // Combine server & local attempts so newly finished levels are counted immediately
      const mergedAttempts = [...serverAttempts];
      for (const loc of localAttempts) {
        if (!mergedAttempts.some((a) => a.game_slug === loc.game_slug && a.level === loc.level)) {
          mergedAttempts.push(loc);
        }
      }

      const serverClaims = (claimResult.data || []).map((row: any) => row.mission_id);
      const combinedClaims = Array.from(new Set([...serverClaims, ...localGuestClaims]));

      setAttempts(mergedAttempts);
      setClaimed(combinedClaims);
    } catch (error) {
      console.error('Daily mission load failed:', error);
      setMessage('We could not refresh your online missions. Your local progress is still active.');
      setAttempts(readLocalAttempts());
      setClaimed(localGuestClaims);
    } finally {
      setLoading(false);
    }
  }, [userId]);

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
    if (claiming) return;
    setClaiming(mission.id);
    setMessage('');

    try {
      let persistedXp: number;

      if (supabase && userId) {
        // Authenticated user: claim through Supabase atomic RPC
        const { data, error } = await supabase.rpc('claim_daily_mission', { p_mission_id: mission.id });
        if (error) throw error;

        const row = Array.isArray(data) ? data[0] : data;
        if (!row || Number(row.reward_xp) !== mission.reward || row.total_xp === undefined) {
          throw new Error('The server did not confirm this reward. Please refresh and try again.');
        }

        const { data: profile, error: profileError } = await supabase
          .from('profiles')
          .select('xp, level')
          .eq('id', userId)
          .maybeSingle();
        if (profileError) throw profileError;

        persistedXp = Number(profile?.xp ?? row.total_xp);
      } else {
        // Guest user: save claim locally and award local XP
        const today = utcDay();
        const guestKey = `${GUEST_DAILY_CLAIMS_PREFIX}${today}`;
        const prevClaims: string[] = (() => {
          try {
            return JSON.parse(localStorage.getItem(guestKey) || '[]');
          } catch {
            return [];
          }
        })();

        if (prevClaims.includes(mission.id)) {
          throw new Error('You have already claimed this reward today.');
        }

        const nextClaims = [...prevClaims, mission.id];
        try {
          localStorage.setItem(guestKey, JSON.stringify(nextClaims));
        } catch {
          // ignore quota error
        }

        let currentXp = 0;
        let currentGames = 0;
        try {
          const raw = localStorage.getItem('biblearena_user_stats');
          const parsed = raw ? JSON.parse(raw) : {};
          currentXp = Number.isFinite(Number(parsed?.xp)) ? Number(parsed.xp) : 0;
          currentGames = Number.isFinite(Number(parsed?.gamesPlayed)) ? Number(parsed.gamesPlayed) : 0;
        } catch {
          currentXp = 0;
        }

        persistedXp = currentXp + mission.reward;
        const newLevel = Math.floor(persistedXp / 500) + 1;

        try {
          localStorage.setItem(
            'biblearena_user_stats',
            JSON.stringify({ xp: persistedXp, gamesPlayed: currentGames, level: newLevel })
          );
          window.dispatchEvent(new Event('storage'));
        } catch {
          // ignore quota error
        }
      }

      // Play audio celebratory sound
      try {
        playBibleArenaSound('correct', true);
      } catch {
        // audio is optional
      }

      // Update claimed state immediately so card automatically clears from active list
      setClaimed((current) => (current.includes(mission.id) ? current : [...current, mission.id]));
      onXpAwarded?.(persistedXp);

      // Show celebratory notification
      setCelebration({
        id: mission.id,
        title: mission.title,
        reward: mission.reward,
      });

      // Automatically hide celebration notification after 6 seconds
      setTimeout(() => {
        setCelebration((curr) => (curr?.id === mission.id ? null : curr));
      }, 6000);
    } catch (error) {
      console.error('Daily mission claim failed:', error);
      const detail = error instanceof Error ? error.message : 'Please check your connection and try again.';
      setMessage(detail.toLowerCase().includes('already') ? 'You have already claimed this reward today.' : detail);
    } finally {
      setClaiming(null);
    }
  };

  const activeMissions = useMemo(
    () => MISSIONS.filter((m) => !claimed.includes(m.id)),
    [claimed]
  );

  const claimedMissions = useMemo(
    () => MISSIONS.filter((m) => claimed.includes(m.id)),
    [claimed]
  );

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

      <div className="space-y-3.5 p-4 sm:p-6">
        <div className="flex items-center justify-between gap-3">
          <p className="text-sm font-bold text-[#171B24]">{dayLabel}</p>
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-[#171B24]/5 px-2.5 py-1 text-xs font-bold text-[#171B24]">
              {claimed.length} / {MISSIONS.length} claimed
            </span>
          </div>
        </div>

        {/* Celebratory Feedback Banner when a reward is claimed */}
        <AnimatePresence>
          {celebration && (
            <motion.div
              key={celebration.id}
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              className="flex items-center justify-between gap-3 rounded-2xl border border-emerald-600/30 bg-gradient-to-r from-emerald-50 via-white to-emerald-50/50 p-4 shadow-xs"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-xs">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700">Reward Claimed!</span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2 py-0.5 text-[11px] font-extrabold text-emerald-800">
                      <Sparkles className="h-3 w-3" /> +{celebration.reward} XP
                    </span>
                  </div>
                  <p className="mt-0.5 text-xs font-semibold text-emerald-950">
                    <strong className="font-bold text-[#171B24]">{celebration.title}</strong> completed and cleared from your goals.
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setCelebration(null)}
                className="rounded-lg p-1 text-emerald-700 transition hover:bg-emerald-100 cursor-pointer"
                aria-label="Dismiss notification"
              >
                <X className="h-4 w-4" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {!userId && (
          <div className="flex items-center justify-between gap-3 rounded-xl bg-[#F3EBDD] p-3 text-xs text-[#5A6275]">
            <span>
              <strong className="text-[#171B24]">Guest Scholar Mode:</strong> You can claim daily mission rewards right here on this device. Sign in anytime to sync your achievements to the global Hall of Scholars.
            </span>
          </div>
        )}

        {/* Active / Unclaimed Missions with animated exit upon claim */}
        <div className="space-y-3">
          <AnimatePresence initial={false}>
            {activeMissions.map((mission) => {
              const progress = Math.min(mission.target, mission.progress(attempts));
              const complete = progress >= mission.target;
              const pct = Math.round((progress / mission.target) * 100);
              const isClaimingThis = claiming === mission.id;

              return (
                <motion.div
                  key={mission.id}
                  layout
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, height: 0, scale: 0.94, marginBottom: 0, transition: { duration: 0.3 } }}
                  className="rounded-2xl border border-[#171B24]/10 bg-[#FCFBF8] p-4 transition-shadow hover:shadow-xs"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#D66B3D]/10 text-[#D66B3D]">
                      {mission.icon}
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
                          <div
                            className="h-full rounded-full bg-[#D66B3D] transition-all"
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                        <span className="min-w-[42px] text-right text-[11px] font-bold tabular-nums text-[#5A6275]">
                          {progress}/{mission.target}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 flex justify-end">
                    {complete ? (
                      <button
                        type="button"
                        disabled={claiming !== null}
                        onClick={() => void claimMission(mission)}
                        className="inline-flex items-center gap-1.5 rounded-xl bg-[#D66B3D] px-4 py-2 text-xs font-bold text-white shadow-xs transition hover:bg-[#bf592f] disabled:opacity-50 cursor-pointer"
                      >
                        {isClaimingThis ? (
                          <>Claiming…</>
                        ) : (
                          <>
                            <Sparkles className="h-3.5 w-3.5" /> Claim reward
                          </>
                        )}
                      </button>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#7A8190]">
                        <LockKeyhole className="h-3.5 w-3.5" /> Keep playing to unlock
                      </span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>

          {/* All Missions Cleared State */}
          {activeMissions.length === 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl border border-emerald-500/25 bg-gradient-to-b from-emerald-50/70 to-white p-6 text-center shadow-xs"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-sm">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <h3 className="mt-3 font-serif text-lg font-bold text-[#171B24]">
                All Scripture Goals Cleared! 🎉
              </h3>
              <p className="mt-1 text-xs text-[#5A6275]">
                You have successfully claimed all {MISSIONS.length} Scripture mission rewards for today. Check back tomorrow at midnight UTC for fresh daily goals!
              </p>
            </motion.div>
          )}
        </div>

        {/* Claimed Missions Collapsible Drawer */}
        {claimedMissions.length > 0 && (
          <div className="pt-2">
            <button
              type="button"
              onClick={() => setShowClaimed((prev) => !prev)}
              className="flex w-full items-center justify-between rounded-xl border border-dashed border-[#171B24]/15 bg-[#FCFBF8] px-4 py-2.5 text-xs font-semibold text-[#5A6275] transition hover:bg-[#F3EBDD]/60 cursor-pointer"
            >
              <span className="flex items-center gap-2 font-medium text-[#171B24]">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                Claimed Goals Today ({claimedMissions.length})
              </span>
              <span className="flex items-center gap-1 font-bold text-[#D66B3D]">
                {showClaimed ? 'Hide' : 'View'}
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${showClaimed ? 'rotate-180' : ''}`} />
              </span>
            </button>

            {showClaimed && (
              <div className="mt-2.5 space-y-2">
                {claimedMissions.map((m) => (
                  <div
                    key={m.id}
                    className="flex items-center justify-between rounded-xl border border-emerald-500/15 bg-emerald-50/50 px-4 py-2 text-xs"
                  >
                    <span className="flex items-center gap-2 font-medium text-emerald-950">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                      {m.title}
                    </span>
                    <span className="font-bold text-emerald-700">+{m.reward} XP Claimed</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {loading && <p className="text-center text-xs text-[#7A8190]">Updating your mission progress…</p>}
        {message && (
          <p role="status" className="rounded-xl bg-[#F3EBDD] px-3 py-2 text-xs font-semibold text-[#5A6275]">
            {message}
          </p>
        )}
        <p className="text-[11px] text-[#7A8190]">
          Missions use completed game levels saved to your player account. Rewards can only be claimed once per day.
        </p>
      </div>
    </section>
  );
};
