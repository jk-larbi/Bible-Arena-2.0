import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { GAMES_LIST, GameInfo } from '../data/gamesList';
import {
  Flame,
  Search,
  Check,
  X,
  Swords,
  Send,
  Trophy,
  Clock,
  Medal,
  Zap,
  Users,
  BookOpen,
  Sparkles,
  RefreshCw,
  AlertCircle,
  RotateCcw,
  Target,
  ChevronRight,
  ShieldAlert,
} from 'lucide-react';
import { Button } from '../components/Button';
import { supabase, isSupabaseConfigured } from '../lib/supabase';
import { useSession } from '../lib/auth';
import {
  notifyPlayerOfChallenge,
  notifyChallengeResponse,
  notifyChallengeCompleted,
} from '../services/notificationService';
import { BackButton } from '../components/BackButton';
import { buildLocalChallengesForLevel, ChallengeItem as BibleQuestion } from '../data/bibleContentBank';

export type Profile = {
  id: string;
  username: string;
  full_name: string | null;
  level: number;
  xp?: number;
  updated_at?: string;
  last_active_at?: string;
};

export type ChallengeCategoryType =
  | 'quick-challenge'
  | 'scripture-battle'
  | 'character-challenge'
  | 'scripture-memory-battle'
  | 'random-bible-challenge';

export interface ChallengeCategoryMeta {
  id: ChallengeCategoryType;
  title: string;
  subtitle: string;
  description: string;
  gameSlug: string;
  questionCount: number;
  timeLimitSec: number;
  targetScore: number;
  rewardXp: number;
  badge: string;
}

export const CHALLENGE_CATEGORIES: ChallengeCategoryMeta[] = [
  {
    id: 'quick-challenge',
    title: 'Quick Challenge',
    subtitle: '5 Questions · Rapid Bible Recall',
    description: 'A fast-paced multi-choice Scripture quiz testing core Bible recall.',
    gameSlug: 'scripture-challenge',
    questionCount: 5,
    timeLimitSec: 125,
    targetScore: 400,
    rewardXp: 150,
    badge: 'Fast-Paced',
  },
  {
    id: 'scripture-battle',
    title: 'Scripture Battle',
    subtitle: 'Challenging & Deep Theological Inquiries',
    description: 'A rigorous battle across forgotten kings, prophets, and intricate biblical mysteries.',
    gameSlug: 'bible-detective',
    questionCount: 5,
    timeLimitSec: 150,
    targetScore: 700,
    rewardXp: 300,
    badge: 'Difficult',
  },
  {
    id: 'character-challenge',
    title: 'Character Challenge',
    subtitle: 'Identify Characters from Mystery Clues',
    description: 'Deduce biblical figures from subtle scriptural hints and deeds.',
    gameSlug: 'who-am-i-bible-characters',
    questionCount: 5,
    timeLimitSec: 150,
    targetScore: 600,
    rewardXp: 250,
    badge: 'Character Quest',
  },
  {
    id: 'scripture-memory-battle',
    title: 'Scripture Memory Battle',
    subtitle: 'Reconstruct Verses & Missing Words',
    description: 'Reconstruct foundational Scripture passages with perfect word sequence.',
    gameSlug: 'complete-the-scripture',
    questionCount: 5,
    timeLimitSec: 175,
    targetScore: 650,
    rewardXp: 250,
    badge: 'Memory',
  },
  {
    id: 'random-bible-challenge',
    title: 'Random Bible Challenge',
    subtitle: 'Providential Mystery Arena',
    description: 'The system chooses a random game and difficulty across all 19 arenas.',
    gameSlug: 'random',
    questionCount: 5,
    timeLimitSec: 150,
    targetScore: 500,
    rewardXp: 200,
    badge: 'Mystery',
  },
];

export interface ChallengeItem {
  id: string;
  title: string;
  description: string;
  game_id: string;
  challenge_category?: ChallengeCategoryType;
  target_score: number;
  reward_xp: number;
  challenger_id: string;
  opponent_id: string;
  challenger_score: number;
  opponent_score: number;
  challenger_duration_ms?: number;
  opponent_duration_ms?: number;
  challenger_correct?: number;
  opponent_correct?: number;
  challenger_completed?: boolean;
  opponent_completed?: boolean;
  winner_id?: string | null;
  status: 'pending' | 'accepted' | 'declined' | 'completed' | 'expired' | 'cancelled';
  created_at: string;
  expires_at?: string;
  completed_at?: string;
  reward_awarded?: boolean;
  questions_seed?: number;
}

export interface CommunityQuest {
  id: string;
  title: string;
  type: 'daily' | 'weekly' | 'special';
  description: string;
  target: number;
  current: number;
  reward: string;
  deadline: string;
  eligibleCategory: string;
  gameSlug: string;
}

interface ChallengesPageProps {
  onSelectGame?: (game: GameInfo) => void;
}

type TabType = 'all' | 'received' | 'sent' | 'accepted' | 'completed' | 'quests';

export const ChallengesPage: React.FC<ChallengesPageProps> = ({ onSelectGame }) => {
  const { user } = useSession();

  // State
  const [challenges, setChallenges] = useState<ChallengeItem[]>([]);
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<TabType>('all');
  const [statusMsg, setStatusMsg] = useState<{ type: 'success' | 'error' | 'info'; text: string } | null>(null);
  const [actionBusy, setActionBusy] = useState<string | null>(null);

  // Challenge Creation Modal
  const [selectedTargetProfile, setSelectedTargetProfile] = useState<Profile | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<ChallengeCategoryType>('quick-challenge');
  const [sendingChallenge, setSendingChallenge] = useState(false);

  // In-Game Challenge Runner Modal
  const [activePlayChallenge, setActivePlayChallenge] = useState<ChallengeItem | null>(null);
  const [challengeQuestions, setChallengeQuestions] = useState<BibleQuestion[]>([]);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [answerSubmitted, setAnswerSubmitted] = useState(false);
  const [sessionScore, setSessionScore] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(25);
  const [matchStartTime, setMatchStartTime] = useState<number>(0);
  const [matchSubmitting, setMatchSubmitting] = useState(false);
  const [matchCompletedStats, setMatchCompletedStats] = useState<{
    score: number;
    durationMs: number;
    correct: number;
    isWinner: boolean | null;
    isTie: boolean;
  } | null>(null);

  // Community Quests State
  const [communityQuests, setCommunityQuests] = useState<CommunityQuest[]>([
    {
      id: 'quest-100-verses',
      title: 'The 100-Verse Quest',
      type: 'daily',
      description: 'Collectively answer 100 Scripture questions across the community today.',
      target: 100,
      current: 74,
      reward: 'Scripture Vanguard Title & +150 XP',
      deadline: 'Resets in 8h 30m',
      eligibleCategory: 'Quiz',
      gameSlug: 'scripture-challenge',
    },
    {
      id: 'quest-bible-explorer',
      title: 'Bible Explorer 500',
      type: 'weekly',
      description: 'Have scholars clear 500 levels collectively across all 19 Bible games this week.',
      target: 500,
      current: 362,
      reward: 'Cartographer of Faith Badge & +500 XP',
      deadline: '5 days left',
      eligibleCategory: 'All Games',
      gameSlug: 'bible-timeline',
    },
    {
      id: 'quest-ot-knowledge',
      title: 'Old Testament Quest',
      type: 'weekly',
      description: 'Answer 200 Old Testament questions as a united community.',
      target: 200,
      current: 148,
      reward: 'Patriarchs’ Insight & +250 XP',
      deadline: '3 days left',
      eligibleCategory: 'History & Law',
      gameSlug: 'find-the-bible-book',
    },
    {
      id: 'quest-memory-week',
      title: 'Memory Week Challenge',
      type: 'special',
      description: 'Collectively complete 300 Scripture memory challenges without a miss.',
      target: 300,
      current: 215,
      reward: 'Living Word Keeper Badge & +300 XP',
      deadline: 'Sunday 00:00 UTC',
      eligibleCategory: 'Memory & Verses',
      gameSlug: 'complete-the-scripture',
    },
  ]);

  // Load Data
  const loadChallengesAndProfiles = useCallback(async () => {
    setLoading(true);
    if (!user?.id) {
      // Local fallback for guest
      setChallenges([]);
      setProfiles([]);
      setLoading(false);
      return;
    }

    if (isSupabaseConfigured && supabase) {
      try {
        // Fetch user challenges
        const { data: challengeData, error: challengeError } = await supabase
          .from('challenges')
          .select('*')
          .or(`challenger_id.eq.${user.id},opponent_id.eq.${user.id}`)
          .order('created_at', { ascending: false });

        if (!challengeError && challengeData) {
          // Normalize status and expiration
          const now = new Date();
          const normalized: ChallengeItem[] = challengeData.map((c: any) => {
            const isExpired = c.status === 'pending' && c.expires_at && new Date(c.expires_at) < now;
            return {
              ...c,
              status: isExpired ? 'expired' : c.status,
              challenger_score: Number(c.challenger_score || 0),
              opponent_score: Number(c.opponent_score || 0),
              reward_xp: Number(c.reward_xp || 200),
              target_score: Number(c.target_score || 500),
            };
          });
          setChallenges(normalized);
        }

        // Fetch registered profiles for player search
        const { data: profileData } = await supabase
          .from('profiles')
          .select('id, username, full_name, level, xp, updated_at')
          .neq('is_guest', true)
          .limit(80);

        if (profileData) {
          setProfiles(profileData);
        }

        // Fetch community quest aggregates if available
        try {
          const { data: questStats } = await supabase.rpc('get_community_quest_stats');
          if (questStats) {
            setCommunityQuests((prev) =>
              prev.map((q) => {
                if (q.id === 'quest-100-verses' && questStats.total_questions_answered) {
                  return { ...q, current: Math.min(q.target, Math.max(q.current, (questStats.total_questions_answered % 100) + 40)) };
                }
                if (q.id === 'quest-bible-explorer' && questStats.total_levels_completed) {
                  return { ...q, current: Math.min(q.target, Math.max(q.current, questStats.total_levels_completed)) };
                }
                return q;
              })
            );
          }
        } catch {
          // RPC optional, fallback to state
        }
      } catch (err) {
        console.error('Error fetching challenges:', err);
      }
    }
    setLoading(false);
  }, [user?.id]);

  useEffect(() => {
    loadChallengesAndProfiles();
  }, [loadChallengesAndProfiles]);

  // Real-time listener for challenges
  useEffect(() => {
    if (!isSupabaseConfigured || !supabase || !user?.id) return;
    const channel = supabase
      .channel(`user-challenges-${user.id}`)
      .on('postgres_changes', { event: '*', schema: 'public', table: 'challenges' }, () => {
        loadChallengesAndProfiles();
      })
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [user?.id, loadChallengesAndProfiles]);

  // Player search helpers
  const searchedProfiles = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase().trim();
    return profiles.filter(
      (p) =>
        (p.username && p.username.toLowerCase().includes(q)) ||
        (p.full_name && p.full_name.toLowerCase().includes(q))
    );
  }, [searchQuery, profiles]);

  const profileMap = useMemo(() => {
    const map = new Map<string, Profile>();
    profiles.forEach((p) => map.set(p.id, p));
    return map;
  }, [profiles]);

  // Online status calculation
  const getPlayerStatus = (p: Profile): { label: string; color: string; isOnline: boolean } => {
    if (!p.updated_at) return { label: 'Scholar', color: 'bg-stone-400', isOnline: false };
    const diffMin = (Date.now() - new Date(p.updated_at).getTime()) / (1000 * 60);
    if (diffMin <= 10) return { label: 'Online now', color: 'bg-emerald-500', isOnline: true };
    if (diffMin <= 120) return { label: 'Active recently', color: 'bg-amber-500', isOnline: false };
    return { label: 'Scholar', color: 'bg-stone-300', isOnline: false };
  };

  // Tab counts
  const counts = useMemo(() => {
    if (!user?.id) return { all: 0, received: 0, sent: 0, accepted: 0, completed: 0 };
    return {
      all: challenges.length,
      received: challenges.filter((c) => c.opponent_id === user.id && c.status === 'pending').length,
      sent: challenges.filter((c) => c.challenger_id === user.id && c.status === 'pending').length,
      accepted: challenges.filter((c) => c.status === 'accepted').length,
      completed: challenges.filter((c) => c.status === 'completed').length,
    };
  }, [challenges, user?.id]);

  // Filtered challenges based on tab
  const filteredChallenges = useMemo(() => {
    if (!user?.id) return [];
    let list = challenges;
    switch (activeTab) {
      case 'received':
        list = challenges.filter((c) => c.opponent_id === user.id && c.status === 'pending');
        break;
      case 'sent':
        list = challenges.filter((c) => c.challenger_id === user.id && c.status === 'pending');
        break;
      case 'accepted':
        list = challenges.filter((c) => c.status === 'accepted');
        break;
      case 'completed':
        list = challenges.filter((c) => c.status === 'completed');
        break;
      default:
        list = challenges;
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter((c) => c.title.toLowerCase().includes(q));
    }
    return list;
  }, [challenges, activeTab, user?.id, searchQuery]);

  // Initiate Challenge Action
  const openChallengeModal = (targetProfile: Profile, preselectedCategory?: ChallengeCategoryType) => {
    setSelectedTargetProfile(targetProfile);
    if (preselectedCategory) setSelectedCategory(preselectedCategory);
    setStatusMsg(null);
  };

  const handleSendChallenge = async () => {
    if (!user?.id || !selectedTargetProfile) return;
    if (user.id === selectedTargetProfile.id) {
      setStatusMsg({ type: 'error', text: 'You cannot challenge yourself.' });
      return;
    }

    setSendingChallenge(true);
    setStatusMsg(null);

    const categoryMeta = CHALLENGE_CATEGORIES.find((cat) => cat.id === selectedCategory) || CHALLENGE_CATEGORIES[0];
    const senderName = user.user_metadata?.username || user.user_metadata?.full_name || 'Bible Scholar';
    const targetName = selectedTargetProfile.username || selectedTargetProfile.full_name || 'Fellow Scholar';

    // Random seed to ensure both players get identical questions
    const questionSeed = Math.floor(Math.random() * 8000) + 1;
    let actualGameSlug = categoryMeta.gameSlug;
    if (actualGameSlug === 'random') {
      const availableGames = ['bible-timeline', 'find-the-bible-book', 'bible-riddles', 'sword-drill', 'guess-the-emoji'];
      actualGameSlug = availableGames[Math.floor(Math.random() * availableGames.length)];
    }

    const payload = {
      challenger_id: user.id,
      opponent_id: selectedTargetProfile.id,
      title: `${categoryMeta.title}: ${senderName} vs ${targetName}`,
      description: `${categoryMeta.description} (5 questions · Target: ${categoryMeta.targetScore} XP)`,
      game_id: actualGameSlug,
      challenge_category: selectedCategory,
      target_score: categoryMeta.targetScore,
      reward_xp: categoryMeta.rewardXp,
      expires_at: new Date(Date.now() + 7 * 24 * 3600 * 1000).toISOString(),
      questions_seed: questionSeed,
      challenger_score: 0,
      opponent_score: 0,
      status: 'pending',
    };

    try {
      if (isSupabaseConfigured && supabase) {
        let insertedData = null;
        const { data: inserted, error: insertErr } = await supabase
          .from('challenges')
          .insert(payload)
          .select()
          .single();

        if (insertErr) {
          // If extended columns don't exist yet, retry with base columns
          const basePayload = {
            challenger_id: user.id,
            opponent_id: selectedTargetProfile.id,
            title: payload.title,
            description: payload.description,
            game_id: payload.game_id,
            target_score: payload.target_score,
            reward_xp: payload.reward_xp,
            expires_at: payload.expires_at,
            challenger_score: 0,
            opponent_score: 0,
            status: 'pending',
          };
          const { data: fallbackInserted, error: fallbackErr } = await supabase
            .from('challenges')
            .insert(basePayload)
            .select()
            .single();
          if (fallbackErr) throw fallbackErr;
          insertedData = fallbackInserted;
        } else {
          insertedData = inserted;
        }

        // In-app notification
        await notifyPlayerOfChallenge(selectedTargetProfile.id, user.id, senderName, insertedData.id);

        setChallenges((prev) => [insertedData, ...prev]);
      } else {
        // Offline preview
        const localItem: ChallengeItem = {
          id: `local-c-${Date.now()}`,
          ...payload,
          status: 'pending',
          created_at: new Date().toISOString(),
        };
        setChallenges((prev) => [localItem, ...prev]);
      }

      setStatusMsg({
        type: 'success',
        text: `⚔️ Challenge sent to ${targetName}! They will receive an instant notification.`,
      });
      setSelectedTargetProfile(null);
      setActiveTab('sent');
    } catch (err) {
      setStatusMsg({ type: 'error', text: (err as Error).message });
    } finally {
      setSendingChallenge(false);
    }
  };

  // Respond to incoming challenge
  const handleResponse = async (challenge: ChallengeItem, status: 'accepted' | 'declined') => {
    setActionBusy(challenge.id);
    setStatusMsg(null);
    try {
      if (!user?.id || challenge.opponent_id !== user.id || challenge.status !== 'pending') {
        throw new Error('Only the invited player can respond to this challenge.');
      }

      if (isSupabaseConfigured && supabase) {
        const { error: rpcError } = await supabase.rpc('respond_to_challenge', {
          p_challenge_id: challenge.id,
          p_status: status,
        });

        if (rpcError) {
          // Fallback direct update
          await supabase
            .from('challenges')
            .update({
              status,
              accepted_at: status === 'accepted' ? new Date().toISOString() : null,
            })
            .eq('id', challenge.id);
        }

        const senderName = user.user_metadata?.username || user.user_metadata?.full_name || 'Scholar';
        await notifyChallengeResponse(challenge.challenger_id, user.id, senderName, challenge.id, status);
      }

      setChallenges((prev) => prev.map((c) => (c.id === challenge.id ? { ...c, status } : c)));
      setStatusMsg({
        type: 'success',
        text: status === 'accepted' ? 'Challenge accepted! Ready to battle.' : 'Challenge declined.',
      });
    } catch (err) {
      setStatusMsg({ type: 'error', text: (err as Error).message });
    } finally {
      setActionBusy(null);
    }
  };

  // Launch Fair Head-to-Head Challenge Match Runner
  const handlePlayChallenge = (challenge: ChallengeItem) => {
    const isChallenger = challenge.challenger_id === user?.id;
    const isOpponent = challenge.opponent_id === user?.id;
    if (!isChallenger && !isOpponent) return;

    // Check if user already completed this challenge attempt
    const alreadyDone = isChallenger ? challenge.challenger_completed : challenge.opponent_completed;
    if (alreadyDone) {
      setStatusMsg({
        type: 'info',
        text: 'You have already recorded your attempt for this challenge. Waiting for your opponent to complete.',
      });
      return;
    }

    // Determine questions based on challenge game_id and deterministic seed
    const gameSlug = challenge.game_id || 'scripture-challenge';
    const seed = challenge.questions_seed || 42;
    const levelNumber = Math.min(50, Math.max(1, (seed % 40) + 1));
    const questions = buildLocalChallengesForLevel(gameSlug, levelNumber, seed);

    setChallengeQuestions(questions.slice(0, 5));
    setCurrentQIndex(0);
    setSelectedAnswer(null);
    setAnswerSubmitted(false);
    setSessionScore(0);
    setCorrectCount(0);
    setTimeRemaining(25);
    setMatchStartTime(Date.now());
    setMatchCompletedStats(null);
    setActivePlayChallenge(challenge);
  };

  // Timer countdown for current question in Challenge Match
  useEffect(() => {
    if (!activePlayChallenge || matchCompletedStats || answerSubmitted) return;
    if (timeRemaining <= 0) {
      // Auto submit timeout
      handleSelectChallengeAnswer('');
      return;
    }
    const timer = setInterval(() => {
      setTimeRemaining((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [activePlayChallenge, timeRemaining, matchCompletedStats, answerSubmitted]);

  // Answer handler
  const handleSelectChallengeAnswer = (ans: string) => {
    if (answerSubmitted) return;
    const q = challengeQuestions[currentQIndex];
    if (!q) return;

    setSelectedAnswer(ans);
    setAnswerSubmitted(true);

    const isCorrect = ans === q.correct_answer;
    if (isCorrect) {
      const speedBonus = Math.max(0, timeRemaining * 4);
      const points = 100 + speedBonus;
      setSessionScore((prev) => prev + points);
      setCorrectCount((prev) => prev + 1);
    }
  };

  // Next Question / Complete Match
  const handleNextChallengeQuestion = async () => {
    if (currentQIndex + 1 < challengeQuestions.length) {
      setCurrentQIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setAnswerSubmitted(false);
      setTimeRemaining(25);
    } else {
      // Match attempt finished
      await handleSubmitChallengeMatch();
    }
  };

  // Authoritative submission of challenge match
  const handleSubmitChallengeMatch = async () => {
    if (!activePlayChallenge || !user?.id) return;
    setMatchSubmitting(true);

    const totalDurationMs = Math.max(1000, Date.now() - matchStartTime);
    const finalScore = sessionScore;
    const isChallenger = activePlayChallenge.challenger_id === user.id;

    let updatedChallenge: ChallengeItem = {
      ...activePlayChallenge,
      challenger_score: isChallenger ? finalScore : activePlayChallenge.challenger_score,
      opponent_score: !isChallenger ? finalScore : activePlayChallenge.opponent_score,
      challenger_duration_ms: isChallenger ? totalDurationMs : activePlayChallenge.challenger_duration_ms || 0,
      opponent_duration_ms: !isChallenger ? totalDurationMs : activePlayChallenge.opponent_duration_ms || 0,
      challenger_correct: isChallenger ? correctCount : activePlayChallenge.challenger_correct || 0,
      opponent_correct: !isChallenger ? correctCount : activePlayChallenge.opponent_correct || 0,
      challenger_completed: isChallenger ? true : activePlayChallenge.challenger_completed,
      opponent_completed: !isChallenger ? true : activePlayChallenge.opponent_completed,
    };

    // Check if both have now completed
    const bothDone = updatedChallenge.challenger_completed && updatedChallenge.opponent_completed;
    let winnerId: string | null = null;
    let isTie = false;

    if (bothDone) {
      updatedChallenge.status = 'completed';
      updatedChallenge.completed_at = new Date().toISOString();

      const cScore = updatedChallenge.challenger_score;
      const oScore = updatedChallenge.opponent_score;
      const cDur = updatedChallenge.challenger_duration_ms || 999999;
      const oDur = updatedChallenge.opponent_duration_ms || 999999;

      if (cScore > oScore) {
        winnerId = updatedChallenge.challenger_id;
      } else if (oScore > cScore) {
        winnerId = updatedChallenge.opponent_id;
      } else {
        // Equal scores: Tie-breaker by faster completion time
        if (cDur < oDur) {
          winnerId = updatedChallenge.challenger_id;
        } else if (oDur < cDur) {
          winnerId = updatedChallenge.opponent_id;
        } else {
          winnerId = null;
          isTie = true;
        }
      }
      updatedChallenge.winner_id = winnerId;
    }

    try {
      if (isSupabaseConfigured && supabase) {
        // Try server-side RPC for atomic verification
        const { data: serverChallenge, error: rpcError } = await supabase.rpc('submit_challenge_result', {
          p_challenge_id: activePlayChallenge.id,
          p_score: finalScore,
          p_duration_ms: totalDurationMs,
          p_correct: correctCount,
        });

        if (!rpcError && serverChallenge) {
          updatedChallenge = { ...updatedChallenge, ...serverChallenge };
        } else {
          // Fallback direct update
          const { error: fullUpdateErr } = await supabase
            .from('challenges')
            .update({
              challenger_score: updatedChallenge.challenger_score,
              opponent_score: updatedChallenge.opponent_score,
              challenger_duration_ms: updatedChallenge.challenger_duration_ms,
              opponent_duration_ms: updatedChallenge.opponent_duration_ms,
              challenger_correct: updatedChallenge.challenger_correct,
              opponent_correct: updatedChallenge.opponent_correct,
              challenger_completed: updatedChallenge.challenger_completed,
              opponent_completed: updatedChallenge.opponent_completed,
              winner_id: updatedChallenge.winner_id,
              status: updatedChallenge.status,
              completed_at: updatedChallenge.completed_at,
            })
            .eq('id', activePlayChallenge.id);

          if (fullUpdateErr) {
            // If extended columns don't exist yet, update base columns
            await supabase
              .from('challenges')
              .update({
                challenger_score: updatedChallenge.challenger_score,
                opponent_score: updatedChallenge.opponent_score,
                winner_id: updatedChallenge.winner_id,
                status: updatedChallenge.status,
                completed_at: updatedChallenge.completed_at,
              })
              .eq('id', activePlayChallenge.id);
          }

          // If match just concluded, notify players
          if (bothDone) {
            const opponentId = isChallenger ? activePlayChallenge.opponent_id : activePlayChallenge.challenger_id;
            const senderName = user.user_metadata?.username || user.user_metadata?.full_name || 'Scholar';
            const userWon = winnerId === user.id;
            await notifyChallengeCompleted(
              opponentId,
              user.id,
              senderName,
              activePlayChallenge.id,
              userWon ? 'lost' : isTie ? 'draw' : 'won',
              finalScore,
              activePlayChallenge.reward_xp,
              activePlayChallenge.title
            );
          }
        }
      }

      // Update local challenges list
      setChallenges((prev) => prev.map((c) => (c.id === updatedChallenge.id ? updatedChallenge : c)));

      // Record completion stats for modal display
      setMatchCompletedStats({
        score: finalScore,
        durationMs: totalDurationMs,
        correct: correctCount,
        isWinner: bothDone ? winnerId === user.id : null,
        isTie: Boolean(bothDone && isTie),
      });

      // Update Community Quest progress
      setCommunityQuests((prev) =>
        prev.map((q) => {
          if (q.id === 'quest-100-verses') {
            return { ...q, current: Math.min(q.target, q.current + correctCount) };
          }
          return q;
        })
      );
    } catch (err) {
      console.error('Failed to submit challenge match:', err);
    } finally {
      setMatchSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 text-[#171B24]">
      {/* Top Header Navigation */}
      <div className="flex items-center justify-between">
        <BackButton fallback="/" />
        <button
          type="button"
          onClick={() => loadChallengesAndProfiles()}
          className="inline-flex items-center gap-1.5 rounded-full border border-[#171B24]/15 bg-white px-3.5 py-1.5 text-xs font-bold text-[#171B24] hover:bg-[#F3EBDD] transition shadow-xs"
        >
          <RefreshCw className="h-3.5 w-3.5" /> Refresh Board
        </button>
      </div>

      {/* Header */}
      <div className="text-center max-w-xl mx-auto">
        <span className="px-3.5 py-1.5 rounded-full bg-[#D66B3D]/10 text-xs font-bold text-[#D66B3D] uppercase tracking-wider">
          Peer Challenges & Community Quests
        </span>
        <h2 className="font-serif font-extrabold text-3xl sm:text-4xl text-[#171B24] mt-3 mb-2">
          Scripture Challenges
        </h2>
        <p className="text-sm text-[#171B24]/70">
          Compete head-to-head with fellow believers across 5 specialized Bible challenges and join community-wide quests.
        </p>
      </div>

      {statusMsg && (
        <div
          className={`max-w-md mx-auto p-4 rounded-2xl text-xs sm:text-sm font-semibold text-center shadow-xs flex items-center justify-center gap-2 ${
            statusMsg.type === 'success'
              ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
              : statusMsg.type === 'info'
              ? 'bg-blue-50 text-blue-800 border border-blue-200'
              : 'bg-rose-50 text-rose-800 border border-rose-200'
          }`}
        >
          {statusMsg.type === 'success' && <Check className="w-4 h-4 shrink-0 text-emerald-600" />}
          {statusMsg.type === 'info' && <AlertCircle className="w-4 h-4 shrink-0 text-blue-600" />}
          {statusMsg.type === 'error' && <X className="w-4 h-4 shrink-0 text-rose-600" />}
          <span>{statusMsg.text}</span>
        </div>
      )}

      {/* Search Input for Registered Scholars */}
      <div className="relative max-w-md mx-auto">
        <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-[#171B24]/40" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search registered players to challenge..."
          className="w-full pl-10 pr-4 py-3 rounded-2xl bg-white border border-[#171B24]/15 text-[#171B24] text-sm focus:outline-none focus:ring-2 focus:ring-[#D66B3D] shadow-xs"
        />
      </div>

      {/* Searched Players Results Card */}
      {searchQuery && (
        <div className="bg-white rounded-3xl p-5 sm:p-6 border border-[#171B24]/10 shadow-lg space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-serif font-bold text-base sm:text-lg text-[#171B24]">
              Scholars Found ({searchedProfiles.length})
            </h3>
            <span className="text-[11px] font-bold text-[#5A6275]">Tap Challenge to select a category</span>
          </div>

          {searchedProfiles.length === 0 ? (
            <p className="text-xs text-[#5A6275] py-3 text-center">No registered scholars match "{searchQuery}".</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {searchedProfiles.map((p) => {
                const isSelf = user?.id === p.id;
                const status = getPlayerStatus(p);
                return (
                  <div
                    key={p.id}
                    className="p-3.5 rounded-2xl bg-[#F3EBDD] flex items-center justify-between border border-[#171B24]/10 hover:border-[#D66B3D]/30 transition"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="relative">
                        <div className="w-10 h-10 rounded-full bg-[#3156C9] text-white flex items-center justify-center font-bold text-sm shadow-xs shrink-0">
                          {(p.username || p.full_name || 'P')[0]?.toUpperCase()}
                        </div>
                        <span
                          className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${status.color}`}
                          title={status.label}
                        />
                      </div>
                      <div className="min-w-0">
                        <p className="font-bold text-sm text-[#171B24] truncate">{p.full_name || p.username}</p>
                        <div className="flex items-center gap-2 text-xs text-[#5A6275]">
                          <span>Level {p.level || 1} Scholar</span>
                          <span>•</span>
                          <span className="font-semibold text-[#D66B3D]">{Number(p.xp || 0).toLocaleString()} pts</span>
                        </div>
                      </div>
                    </div>

                    {!isSelf && (
                      <Button
                        size="sm"
                        onClick={() => openChallengeModal(p)}
                        className="bg-[#D66B3D] hover:bg-[#c25a2c] text-white shrink-0 ml-2"
                      >
                        <Swords className="w-3.5 h-3.5 mr-1" /> Challenge
                      </Button>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* Community Quests Section */}
      <div className="bg-gradient-to-br from-[#171B24] to-[#252B3A] text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-white/10 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D66B3D]/20 text-[#F0B18D] text-xs font-bold uppercase tracking-wider">
              <Users className="w-3.5 h-3.5" /> Community Scripture Quests
            </div>
            <h3 className="font-serif font-extrabold text-2xl text-white mt-1.5">
              Active Community Objectives
            </h3>
            <p className="text-xs text-white/70 max-w-lg mt-1">
              Collaborate with scholars worldwide. Every answered question and completed level advances our shared milestones.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Link
              to="/community-quests"
              className="text-xs font-bold text-[#F0B18D] hover:text-white bg-white/10 hover:bg-white/15 px-3 py-1.5 rounded-xl border border-white/15 transition flex items-center gap-1"
            >
              Start / Manage Quests →
            </Link>
            <span className="text-[11px] font-mono text-[#F0B18D] bg-white/10 px-3 py-1.5 rounded-xl border border-white/10 hidden sm:inline-block">
              Collective Progress
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {communityQuests.map((quest) => {
            const pct = Math.min(100, Math.round((quest.current / quest.target) * 100));
            return (
              <div
                key={quest.id}
                className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5 flex flex-col justify-between space-y-3 hover:bg-white/10 transition"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#D66B3D]/30 text-[#F0B18D]">
                      {quest.type} Quest
                    </span>
                    <span className="text-[11px] text-white/60 font-mono flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {quest.deadline}
                    </span>
                  </div>
                  <h4 className="font-serif font-bold text-base text-white">{quest.title}</h4>
                  <p className="text-xs text-white/75 mt-1">{quest.description}</p>
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-semibold">
                    <span className="text-white/60">Community Progress</span>
                    <span className="font-mono text-[#F0B18D]">
                      {quest.current} / {quest.target} ({pct}%)
                    </span>
                  </div>
                  <div className="w-full h-2.5 rounded-full bg-white/15 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#D66B3D] to-amber-400 rounded-full transition-all duration-500"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <div className="flex items-center justify-between pt-1 text-[11px]">
                    <span className="text-[#F0B18D] font-medium flex items-center gap-1">
                      <Trophy className="w-3 h-3" /> {quest.reward}
                    </span>
                    <button
                      type="button"
                      onClick={() => {
                        const targetGame = GAMES_LIST.find((g) => g.id === quest.gameSlug);
                        if (targetGame && onSelectGame) onSelectGame(targetGame);
                      }}
                      className="text-xs font-bold text-white hover:text-[#F0B18D] inline-flex items-center gap-1 transition"
                    >
                      Contribute <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Scripture Challenges Area */}
      <div className="bg-white rounded-3xl p-5 sm:p-8 shadow-xl border border-[#171B24]/10 min-h-[300px] space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#171B24]/10 pb-4">
          <div>
            <h3 className="font-serif font-bold text-xl text-[#171B24]">Your Scripture Challenges</h3>
            <p className="text-xs text-[#5A6275]">
              Head-to-head Bible matches with verified scoring, time limits, and tie-breakers.
            </p>
          </div>

          {/* Status Sub-Tabs */}
          <div className="flex flex-wrap gap-1 bg-[#F3EBDD] p-1 rounded-2xl border border-[#171B24]/10 text-xs font-bold">
            <button
              type="button"
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1.5 rounded-xl transition ${
                activeTab === 'all' ? 'bg-white text-[#171B24] shadow-xs' : 'text-[#5A6275] hover:text-[#171B24]'
              }`}
            >
              All ({counts.all})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('received')}
              className={`px-3 py-1.5 rounded-xl transition ${
                activeTab === 'received' ? 'bg-[#3156C9] text-white shadow-xs' : 'text-[#5A6275] hover:text-[#171B24]'
              }`}
            >
              Received {counts.received > 0 && <span className="ml-1 px-1.5 py-0.2 rounded-full bg-white text-[#3156C9] text-[10px]">{counts.received}</span>}
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('sent')}
              className={`px-3 py-1.5 rounded-xl transition ${
                activeTab === 'sent' ? 'bg-white text-[#171B24] shadow-xs' : 'text-[#5A6275] hover:text-[#171B24]'
              }`}
            >
              Sent ({counts.sent})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('accepted')}
              className={`px-3 py-1.5 rounded-xl transition ${
                activeTab === 'accepted' ? 'bg-[#D66B3D] text-white shadow-xs' : 'text-[#5A6275] hover:text-[#171B24]'
              }`}
            >
              Active ({counts.accepted})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('completed')}
              className={`px-3 py-1.5 rounded-xl transition ${
                activeTab === 'completed' ? 'bg-white text-[#171B24] shadow-xs' : 'text-[#5A6275] hover:text-[#171B24]'
              }`}
            >
              Completed ({counts.completed})
            </button>
          </div>
        </div>

        {loading ? (
          <div className="space-y-3 py-4">
            <div className="h-20 bg-[#171B24]/5 rounded-2xl animate-pulse" />
            <div className="h-20 bg-[#171B24]/5 rounded-2xl animate-pulse" />
          </div>
        ) : filteredChallenges.length === 0 ? (
          <div className="text-center py-12 px-4 space-y-3">
            <div className="w-14 h-14 rounded-full bg-[#D66B3D]/10 text-[#D66B3D] flex items-center justify-center mx-auto">
              <Flame className="w-7 h-7" />
            </div>
            <h4 className="font-serif font-bold text-xl text-[#171B24]">
              {activeTab === 'received'
                ? 'No pending invitations'
                : activeTab === 'sent'
                ? 'No sent invitations waiting'
                : activeTab === 'accepted'
                ? 'No active matches right now'
                : activeTab === 'completed'
                ? 'No finished challenges yet'
                : 'No challenges found'}
            </h4>
            <p className="text-xs text-[#171B24]/60 max-w-sm mx-auto">
              Search for any registered scholar above to start a Quick Challenge, Scripture Battle, or Memory Challenge!
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredChallenges.map((c) => {
              const isChallenger = c.challenger_id === user?.id;
              const isOpponent = c.opponent_id === user?.id;
              const challengerProfile = profileMap.get(c.challenger_id);
              const opponentProfile = profileMap.get(c.opponent_id);

              const challengerName = challengerProfile?.username || challengerProfile?.full_name || 'Challenger';
              const opponentName = opponentProfile?.username || opponentProfile?.full_name || 'Opponent';

              const hasPlayed = isChallenger ? c.challenger_completed : c.opponent_completed;
              const opponentHasPlayed = isChallenger ? c.opponent_completed : c.challenger_completed;

              return (
                <div
                  key={c.id}
                  className="p-5 sm:p-6 rounded-2xl bg-[#F3EBDD] flex flex-col gap-4 border border-[#171B24]/10 hover:border-[#171B24]/20 transition shadow-xs"
                >
                  {/* Challenge Header & Category */}
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <Swords className="w-4 h-4 text-[#D66B3D]" />
                      <h4 className="font-serif font-bold text-base sm:text-lg text-[#171B24]">{c.title}</h4>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white border border-[#171B24]/15 text-[#171B24]">
                        {c.game_id.replace(/-/g, ' ')}
                      </span>
                      <span
                        className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                          c.status === 'completed'
                            ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                            : c.status === 'accepted'
                            ? 'bg-[#3156C9]/10 text-[#3156C9] border border-[#3156C9]/20'
                            : c.status === 'expired' || c.status === 'declined'
                            ? 'bg-stone-200 text-stone-600'
                            : 'bg-amber-100 text-amber-800 border border-amber-300'
                        }`}
                      >
                        {c.status}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-[#171B24]/75">{c.description}</p>

                  {/* Rewards and Target Metrics */}
                  <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-[#5A6275]">
                    <span className="flex items-center gap-1 text-amber-700">
                      <Trophy className="w-3.5 h-3.5 text-amber-500" /> +{c.reward_xp} XP Bounty
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Target className="w-3.5 h-3.5 text-[#3156C9]" /> Target: {c.target_score} XP
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#5A6275]" /> 5 Questions · 25s Timer
                    </span>
                  </div>

                  {/* Detailed Head-to-Head Card for Completed Matches */}
                  {c.status === 'completed' && (
                    <div className="rounded-2xl border border-[#171B24]/15 bg-white p-4 space-y-3">
                      <div className="text-center pb-2 border-b border-[#171B24]/10">
                        {c.winner_id ? (
                          <div className="flex items-center justify-center gap-2">
                            <Trophy className="w-5 h-5 text-amber-500" />
                            <span className="font-serif font-bold text-sm text-[#171B24]">
                              {c.winner_id === user?.id ? '🎉 Victory! You Won This Challenge' : `Winner: ${c.winner_id === c.challenger_id ? challengerName : opponentName}`}
                            </span>
                            <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                              +{c.reward_xp} XP Awarded
                            </span>
                          </div>
                        ) : (
                          <div className="flex items-center justify-center gap-2">
                            <span className="font-serif font-bold text-sm text-[#171B24]">🤝 Honorable Draw! Both scholars tied.</span>
                          </div>
                        )}
                        {/* Tie-breaker note if time was used */}
                        {c.challenger_score === c.opponent_score && c.winner_id && (
                          <p className="text-[11px] text-[#5A6275] mt-1 font-sans">
                            Scores were tied! Decided by faster completion time.
                          </p>
                        )}
                      </div>

                      {/* Side-by-side Scoreboard */}
                      <div className="grid grid-cols-2 gap-4 text-center">
                        {/* Challenger */}
                        <div
                          className={`p-3 rounded-xl border ${
                            c.winner_id === c.challenger_id
                              ? 'bg-amber-50/60 border-amber-300'
                              : 'bg-stone-50 border-stone-200'
                          }`}
                        >
                          <p className="text-xs font-bold text-[#171B24] truncate">
                            {challengerName} {isChallenger && <span className="text-[#3156C9]">(YOU)</span>}
                          </p>
                          <p className="font-mono text-lg font-black text-[#D66B3D] mt-1">{c.challenger_score} pts</p>
                          <div className="flex justify-center gap-2 text-[11px] text-[#5A6275] mt-1">
                            <span>{c.challenger_correct ?? 0}/5 correct</span>
                            <span>•</span>
                            <span>{((c.challenger_duration_ms || 0) / 1000).toFixed(1)}s</span>
                          </div>
                        </div>

                        {/* Opponent */}
                        <div
                          className={`p-3 rounded-xl border ${
                            c.winner_id === c.opponent_id
                              ? 'bg-amber-50/60 border-amber-300'
                              : 'bg-stone-50 border-stone-200'
                          }`}
                        >
                          <p className="text-xs font-bold text-[#171B24] truncate">
                            {opponentName} {isOpponent && <span className="text-[#3156C9]">(YOU)</span>}
                          </p>
                          <p className="font-mono text-lg font-black text-[#D66B3D] mt-1">{c.opponent_score} pts</p>
                          <div className="flex justify-center gap-2 text-[11px] text-[#5A6275] mt-1">
                            <span>{c.opponent_correct ?? 0}/5 correct</span>
                            <span>•</span>
                            <span>{((c.opponent_duration_ms || 0) / 1000).toFixed(1)}s</span>
                          </div>
                        </div>
                      </div>

                      {/* Rematch Action */}
                      <div className="pt-2 flex justify-end">
                        <Button
                          size="sm"
                          onClick={() => {
                            const rematchTarget = isChallenger ? opponentProfile : challengerProfile;
                            if (rematchTarget) {
                              openChallengeModal(rematchTarget, c.challenge_category || 'quick-challenge');
                            } else {
                              setStatusMsg({ type: 'info', text: 'Preparing rematch...' });
                            }
                          }}
                          className="bg-[#D66B3D] hover:bg-[#c25a2c] text-white text-xs"
                        >
                          <RotateCcw className="w-3.5 h-3.5 mr-1" /> Rematch
                        </Button>
                      </div>
                    </div>
                  )}

                  {/* Active Match In-Progress Card */}
                  {c.status === 'accepted' && (
                    <div className="rounded-2xl border border-[#3156C9]/20 bg-white p-3.5 text-xs text-[#5A6275] space-y-2">
                      <div className="flex items-center justify-between">
                        <span>
                          {hasPlayed ? (
                            <span className="font-bold text-emerald-700 flex items-center gap-1">
                              <Check className="w-3.5 h-3.5" /> Your attempt submitted: {isChallenger ? c.challenger_score : c.opponent_score} pts ({isChallenger ? c.challenger_correct : c.opponent_correct}/5)
                            </span>
                          ) : (
                            <span className="font-bold text-[#3156C9] flex items-center gap-1">
                              <AlertCircle className="w-3.5 h-3.5" /> Ready to play your 5 questions
                            </span>
                          )}
                        </span>
                        <span>
                          {opponentHasPlayed ? (
                            <span className="text-emerald-700 font-semibold">Opponent finished</span>
                          ) : (
                            <span className="text-amber-700 font-medium">Opponent hasn’t played yet</span>
                          )}
                        </span>
                      </div>

                      {!hasPlayed && (
                        <div className="pt-2">
                          <Button
                            size="sm"
                            onClick={() => handlePlayChallenge(c)}
                            className="bg-[#3156C9] hover:bg-[#2544A5] text-white w-full sm:w-auto font-bold"
                          >
                            <Swords className="w-4 h-4 mr-1.5" /> Play Challenge Now (5 Questions)
                          </Button>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Pending Response Controls */}
                  {c.status === 'pending' && c.opponent_id === user?.id && (
                    <div className="flex items-center gap-2 pt-1">
                      <Button
                        size="sm"
                        disabled={actionBusy === c.id}
                        onClick={() => handleResponse(c, 'accepted')}
                        className="bg-[#3156C9] hover:bg-[#2544A5] text-white"
                      >
                        <Check className="w-4 h-4 mr-1" /> Accept Challenge
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        disabled={actionBusy === c.id}
                        onClick={() => handleResponse(c, 'declined')}
                        className="text-red-600 border-red-200 hover:bg-red-50"
                      >
                        <X className="w-4 h-4 mr-1" /> Decline
                      </Button>
                    </div>
                  )}

                  {c.status === 'pending' && c.challenger_id === user?.id && (
                    <div className="text-xs text-[#5A6275] italic flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-amber-600" />
                      Waiting for {opponentName} to accept your challenge...
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Challenge Category Selection Modal */}
      {selectedTargetProfile && (
        <div className="fixed inset-0 z-50 flex items-start sm:items-center justify-center overflow-y-auto overscroll-contain p-4 bg-black/75">
          <div className="bg-white rounded-3xl max-w-lg w-full max-h-[calc(100dvh-2rem)] overflow-y-auto overscroll-contain p-6 sm:p-7 shadow-2xl border border-[#171B24]/10 space-y-5 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between border-b border-[#171B24]/10 pb-3">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#D66B3D]">Head-to-Head Invitation</span>
                <h3 className="font-serif font-extrabold text-xl text-[#171B24]">
                  Challenge {selectedTargetProfile.full_name || selectedTargetProfile.username}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedTargetProfile(null)}
                className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center text-stone-500 hover:bg-stone-200 transition"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Recipient Snapshot */}
            <div className="p-3 rounded-2xl bg-[#F3EBDD] flex items-center gap-3 border border-[#171B24]/10">
              <div className="w-10 h-10 rounded-full bg-[#3156C9] text-white flex items-center justify-center font-bold text-sm">
                {(selectedTargetProfile.username || selectedTargetProfile.full_name || 'P')[0]?.toUpperCase()}
              </div>
              <div>
                <p className="font-bold text-sm text-[#171B24]">{selectedTargetProfile.full_name || selectedTargetProfile.username}</p>
                <p className="text-xs text-[#5A6275]">
                  Level {selectedTargetProfile.level} Scholar • {Number(selectedTargetProfile.xp || 0).toLocaleString()} pts
                </p>
              </div>
            </div>

            {/* Choose Category */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-[#171B24]/70">
                Select Challenge Category:
              </label>
              <div className="grid grid-cols-1 gap-2.5 max-h-none overflow-visible pr-1">
                {CHALLENGE_CATEGORIES.map((cat) => {
                  const isSel = selectedCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`text-left p-3 rounded-2xl border transition flex items-start justify-between gap-3 ${
                        isSel
                          ? 'border-[#D66B3D] bg-[#D66B3D]/10 ring-2 ring-[#D66B3D]/30'
                          : 'border-[#171B24]/10 bg-white hover:bg-stone-50'
                      }`}
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-serif font-bold text-sm text-[#171B24]">{cat.title}</span>
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#171B24]/10 text-[#171B24]">
                            {cat.badge}
                          </span>
                        </div>
                        <p className="text-xs text-[#5A6275] mt-1">{cat.subtitle}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="text-xs font-mono font-bold text-[#D66B3D]">+{cat.rewardXp} XP</span>
                        <p className="text-[10px] text-[#5A6275]">{cat.timeLimitSec}s limit</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Fair Rules Notice */}
            <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-200 text-xs text-blue-900 space-y-1">
              <p className="font-bold flex items-center gap-1.5">
                <ShieldAlert className="w-3.5 h-3.5 text-blue-700" /> Fair Competition Guarantee
              </p>
              <p className="text-[11px] text-blue-800">
                Both players receive identical questions and equal timers. Scores are locked on first submission, and ties are decided by completion speed.
              </p>
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <Button variant="outline" size="sm" onClick={() => setSelectedTargetProfile(null)}>
                Cancel
              </Button>
              <Button
                size="sm"
                disabled={sendingChallenge}
                onClick={handleSendChallenge}
                className="bg-[#D66B3D] hover:bg-[#c25a2c] text-white"
              >
                <Send className="w-3.5 h-3.5 mr-1" />
                {sendingChallenge ? 'Dispatching...' : 'Send Challenge'}
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Head-to-Head Fair Match Runner Modal */}
      {activePlayChallenge && (
        <div className="fixed inset-0 z-50 flex items-start sm:items-center justify-center overflow-y-auto overscroll-contain p-4 bg-black/80">
          <div className="bg-white rounded-3xl max-w-xl w-full max-h-[calc(100dvh-2rem)] overflow-y-auto overscroll-contain p-6 sm:p-8 shadow-2xl border border-[#171B24]/10 space-y-6 animate-in fade-in duration-200">
            {/* If finished attempt */}
            {matchCompletedStats ? (
              <div className="text-center space-y-5 py-4">
                <div className="w-16 h-16 rounded-full bg-amber-500/10 text-amber-700 flex items-center justify-center mx-auto">
                  <Trophy className="w-8 h-8 text-[#D66B3D]" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#D66B3D]">Attempt Locked & Verified</span>
                  <h3 className="font-serif font-extrabold text-2xl text-[#171B24] mt-1">
                    {matchCompletedStats.isWinner === true
                      ? '🎉 Victory! Match Won'
                      : matchCompletedStats.isWinner === false
                      ? 'Challenge Attempt Recorded'
                      : 'Attempt Submitted!'}
                  </h3>
                  <p className="text-xs text-[#5A6275] max-w-sm mx-auto mt-1">
                    {matchCompletedStats.isWinner === null
                      ? 'Your marks are saved. Once your opponent completes their attempt, the winner will be determined!'
                      : 'Match finalized and stored on the ledger.'}
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-[#F3EBDD] border border-[#171B24]/10 text-center">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#5A6275]">Score Earned</span>
                    <p className="font-mono text-xl font-black text-[#D66B3D]">{matchCompletedStats.score} pts</p>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#5A6275]">Accuracy</span>
                    <p className="font-mono text-xl font-black text-[#171B24]">{matchCompletedStats.correct} / 5</p>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#5A6275]">Total Time</span>
                    <p className="font-mono text-xl font-black text-[#3156C9]">
                      {(matchCompletedStats.durationMs / 1000).toFixed(1)}s
                    </p>
                  </div>
                </div>

                <Button
                  onClick={() => {
                    setActivePlayChallenge(null);
                    setMatchCompletedStats(null);
                    loadChallengesAndProfiles();
                  }}
                  className="bg-[#3156C9] hover:bg-[#2544A5] text-white w-full"
                >
                  Return to Challenge Board
                </Button>
              </div>
            ) : (
              /* Active In-Match Question Flow */
              <div className="space-y-5">
                {/* Match Bar */}
                <div className="flex items-center justify-between border-b border-[#171B24]/10 pb-3">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#D66B3D]">
                      Question {currentQIndex + 1} of 5
                    </span>
                    <h4 className="font-serif font-bold text-sm text-[#171B24]">{activePlayChallenge.title}</h4>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-sm font-bold px-2.5 py-1 rounded-xl bg-amber-500/10 text-[#D66B3D] border border-amber-300 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {timeRemaining}s
                    </span>
                    <span className="font-mono text-sm font-bold px-2.5 py-1 rounded-xl bg-[#3156C9]/10 text-[#3156C9]">
                      {sessionScore} pts
                    </span>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="w-full h-1.5 rounded-full bg-stone-100 overflow-hidden">
                  <div
                    className="h-full bg-[#D66B3D] transition-all duration-300"
                    style={{ width: `${((currentQIndex + 1) / 5) * 100}%` }}
                  />
                </div>

                {/* Question Text */}
                {challengeQuestions[currentQIndex] && (
                  <div className="space-y-4">
                    <p className="font-serif font-bold text-base sm:text-lg text-[#171B24] leading-relaxed">
                      {challengeQuestions[currentQIndex].question_text}
                    </p>

                    {/* Options */}
                    <div className="space-y-2">
                      {challengeQuestions[currentQIndex].options.map((option, idx) => {
                        const isCorrect = option === challengeQuestions[currentQIndex].correct_answer;
                        const isSelected = selectedAnswer === option;
                        let btnStyle = 'bg-stone-50 border-stone-200 text-[#171B24] hover:bg-stone-100';

                        if (answerSubmitted) {
                          if (isCorrect) {
                            btnStyle = 'bg-emerald-100 border-emerald-400 text-emerald-900 font-bold';
                          } else if (isSelected) {
                            btnStyle = 'bg-rose-100 border-rose-400 text-rose-900';
                          } else {
                            btnStyle = 'bg-stone-50 border-stone-200 text-stone-400 opacity-60';
                          }
                        }

                        return (
                          <button
                            key={idx}
                            type="button"
                            disabled={answerSubmitted}
                            onClick={() => handleSelectChallengeAnswer(option)}
                            className={`w-full p-3.5 rounded-2xl border text-left text-sm transition flex items-center justify-between ${btnStyle}`}
                          >
                            <span>{option}</span>
                            {answerSubmitted && isCorrect && <Check className="w-4 h-4 text-emerald-600 shrink-0" />}
                            {answerSubmitted && isSelected && !isCorrect && <X className="w-4 h-4 text-rose-600 shrink-0" />}
                          </button>
                        );
                      })}
                    </div>

                    {/* Feedback and Scriptural Explanation */}
                    {answerSubmitted && (
                      <div className="p-3.5 rounded-2xl bg-[#F3EBDD] border border-[#171B24]/10 text-xs text-[#171B24] space-y-1 animate-in fade-in">
                        <div className="flex items-center gap-1.5 font-bold text-[#D66B3D]">
                          <BookOpen className="w-3.5 h-3.5" />
                          <span>{challengeQuestions[currentQIndex].reference}</span>
                        </div>
                        <p className="text-[#5A6275]">{challengeQuestions[currentQIndex].explanation}</p>
                      </div>
                    )}
                  </div>
                )}

                {/* Continue / Next Button */}
                {answerSubmitted && (
                  <div className="flex justify-end pt-2">
                    <Button
                      size="sm"
                      disabled={matchSubmitting}
                      onClick={handleNextChallengeQuestion}
                      className="bg-[#3156C9] hover:bg-[#2544A5] text-white"
                    >
                      {currentQIndex + 1 < challengeQuestions.length ? 'Next Question →' : matchSubmitting ? 'Finalizing Match...' : 'Submit Attempt'}
                    </Button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
