import React, { useEffect, useState } from 'react';
import { GAMES_LIST, CATEGORIES, GameInfo } from '../data/gamesList';
import { HeroBanner } from '../components/HeroBanner';
import { Pill } from '../components/Pill';
import { GameCard } from '../components/GameCard';
import { SupabaseConfigNotice } from '../components/SupabaseConfigNotice';
import { isSupabaseConfigured, supabase } from '../lib/supabase';
import { useSession } from '../lib/auth';
import { DailyMissionsPanel } from '../components/DailyMissionsPanel';
import { Trophy, Users, Flame, ArrowRight, Plus, Mail } from 'lucide-react';

interface HomePageProps {
  onSelectGame: (game: GameInfo) => void;
  onNavigateTab: (tab: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onSelectGame, onNavigateTab }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Trending');
  const { user } = useSession();
  const localStats = (() => {
    try {
      const raw = localStorage.getItem('biblearena_user_stats');
      const parsed = raw ? JSON.parse(raw) : {};
      return {
        xp: Number.isFinite(Number(parsed?.xp)) ? Number(parsed.xp) : 0,
        gamesPlayed: Number.isFinite(Number(parsed?.gamesPlayed)) ? Number(parsed.gamesPlayed) : 0,
        level: Number.isFinite(Number(parsed?.level)) && Number(parsed.level) > 0 ? Number(parsed.level) : 1,
      };
    } catch (error) {
      console.warn('Ignoring invalid local BibleArena stats:', error);
      return { xp: 0, gamesPlayed: 0, level: 1 };
    }
  })();
  const [remoteStats, setRemoteStats] = useState<{ xp: number; level: number; gamesPlayed: number } | null>(null);

  useEffect(() => {
    let active = true;
    const loadStats = async () => {
      if (!user?.id || !isSupabaseConfigured || !supabase) {
        setRemoteStats(null);
        return;
      }
      const [profileResult, attemptsResult] = await Promise.all([
        supabase.from('profiles').select('xp, level').eq('id', user.id).maybeSingle(),
        supabase.from('level_attempts').select('id', { count: 'exact', head: true }).eq('user_id', user.id).eq('status', 'completed'),
      ]);
      if (!active) return;
      setRemoteStats({
        xp: Number(profileResult.data?.xp ?? localStats.xp ?? 0),
        level: Number(profileResult.data?.level ?? localStats.level ?? 1),
        gamesPlayed: Number(attemptsResult.count ?? localStats.gamesPlayed ?? 0),
      });
    };
    void loadStats();
    return () => { active = false; };
  }, [user?.id]);

  const xp = remoteStats?.xp ?? localStats.xp ?? 0;
  const level = remoteStats?.level ?? localStats.level ?? 1;
  const gamesPlayed = remoteStats?.gamesPlayed ?? localStats.gamesPlayed ?? 0;

  const filteredGames = selectedCategory === 'Trending'
    ? GAMES_LIST
    : GAMES_LIST.filter(g => g.category === selectedCategory || (selectedCategory === 'Multiplayer' && g.isFirstPlayable));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      
      {/* Supabase Notice if not configured */}
      {!isSupabaseConfigured && <SupabaseConfigNotice />}

      {/* Two Hero Banners Side by Side */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <HeroBanner
          badge="Featured Game"
          subtitle="Scripture Masterclass"
          title="Scripture Challenge"
          description="Test your theological knowledge across timed multi-choice rounds with instant verse commentaries and references."
          bgGradient="from-[#171B24] via-[#222836] to-[#0A0D14]"
          bgImage="/assets/scripture-challenge-hero.webp"
          onAction={() => {
            const game = GAMES_LIST.find(g => g.id === 'scripture-challenge') || GAMES_LIST[0];
            onSelectGame(game);
          }}
        />
        <HeroBanner
          type="multiplayer"
          badge="Live Arena"
          subtitle="Compete Worldwide"
          title="Battle of the Prophets"
          description="Create or join live competitive rooms on Mount Carmel with real-time timers, automatic score reveals, and instant rankings."
          bgGradient="from-[#D66B3D] via-[#C05A2F] to-[#8C3F1B]"
          bgImage="/assets/battle-of-the-prophets.webp"
          onAction={() => onNavigateTab('multiplayer')}
        />
      </div>

      <DailyMissionsPanel
        userId={user?.id ?? null}
        onXpAwarded={(newXp) => setRemoteStats((current) => ({
          xp: newXp,
          level: Math.floor(newXp / 500) + 1,
          gamesPlayed: current?.gamesPlayed ?? gamesPlayed,
        }))}
      />

      {/* Category Pills Rail */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-serif font-bold text-2xl text-[#171B24]">Explore Categories</h3>
          <span className="text-xs text-[#171B24]/60 font-medium">19 featured games</span>
        </div>
        <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none">
          {CATEGORIES.map((cat) => (
            <Pill
              key={cat}
              label={cat}
              isActive={selectedCategory === cat}
              onClick={() => setSelectedCategory(cat)}
            />
          ))}
        </div>
      </div>

      {/* Trending / Category Section with Horizontal Rail */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="font-serif font-bold text-2xl text-[#171B24]">
              {selectedCategory === 'Trending' ? 'Featured Catalog' : `${selectedCategory} Games`}
            </h3>
            <p className="text-sm text-[#171B24]/70">Explore illustrated Bible games in fixed editorial order</p>
          </div>
          <button 
            onClick={() => onNavigateTab('games')}
            className="text-xs font-bold text-[#D66B3D] flex items-center gap-1 hover:underline cursor-pointer"
          >
            <span>View All</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Horizontal Rail of Poster Game Cards */}
        <div className="flex gap-6 overflow-x-auto pb-4 pt-1 scrollbar-none">
          {filteredGames.map((game) => (
            <GameCard key={game.id} game={game} onPlay={onSelectGame} />
          ))}
        </div>
      </div>


      {/* Feedback and suggestions */}
      <section className="rounded-3xl border border-[#171B24]/10 bg-white p-6 shadow-sm sm:flex sm:items-center sm:justify-between sm:gap-6">
        <div className="flex items-start gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#3156C9]/10 text-[#3156C9]">
            <Mail className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-serif text-lg font-bold text-[#171B24]">Have feedback or a suggestion?</h3>
            <p className="mt-1 text-sm text-[#5A6275]">We'd love to hear how we can make BibleArena better. Send your feedback or ideas directly to us.</p>
          </div>
        </div>
        <a href="mailto:jlarb43@gmail.com?subject=BibleArena%20Feedback" className="mt-4 inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-xl bg-[#171B24] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#3156C9] sm:mt-0">
          <Mail className="h-4 w-4" /> Send feedback
        </a>
      </section>

      {/* Player Progress & Real Highlights Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1: Real Player Stats */}
        <div className="bg-white p-6 rounded-3xl border border-[#171B24]/10 shadow-sm flex flex-col justify-between">
          <div>
            <span className="text-xs font-bold text-[#D66B3D] uppercase tracking-wider">Your Progress</span>
            <h4 className="font-serif font-bold text-xl text-[#171B24] mt-1">
              Level {level} {gamesPlayed === 0 ? 'Novice' : 'Scholar'}
            </h4>
            <p className="text-xs text-[#171B24]/70 mt-2">
              {gamesPlayed === 0
                ? '0 XP earned across 0 played games.'
                : `${xp} XP earned across ${gamesPlayed} completed game(s).`}
            </p>
          </div>
          <div className="mt-6">
            <div className="w-full bg-[#171B24]/10 h-3 rounded-full overflow-hidden">
              <div
                className="bg-[#D66B3D] h-full transition-all duration-500"
                style={{ width: `${Math.min(100, (xp % 500) / 5)}%` }}
              />
            </div>
            <span className="text-[11px] text-[#171B24]/60 mt-1 block text-right font-mono">
              {xp} XP / {level * 500} XP
            </span>
          </div>
        </div>

        {/* Card 2: Live Rooms Empty State */}
        <div className="bg-white p-6 rounded-3xl border border-[#171B24]/10 shadow-sm flex flex-col justify-between">
          <div>
            <span className="text-xs font-bold text-[#3156C9] uppercase tracking-wider">Multiplayer Arenas</span>
            <h4 className="font-serif font-bold text-xl text-[#171B24] mt-1">Live Rooms</h4>
            <p className="text-xs text-[#171B24]/70 mt-2">
              No live rooms right now. Create one and invite friends.
            </p>
          </div>
          <button
            onClick={() => onNavigateTab('multiplayer')}
            className="mt-6 w-full py-2.5 rounded-xl bg-[#171B24] text-white font-bold text-xs hover:bg-[#3156C9] transition-colors cursor-pointer flex items-center justify-center gap-1.5"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Create Live Room</span>
          </button>
        </div>

        {/* Card 3: Daily Quest / Challenges Empty State */}
        <div className="bg-white p-6 rounded-3xl border border-[#171B24]/10 shadow-sm flex flex-col justify-between">
          <div>
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Challenges</span>
            <h4 className="font-serif font-bold text-xl text-[#171B24] mt-1">Quests & Peer Battles</h4>
            <p className="text-xs text-[#171B24]/70 mt-2">
              No active challenges right now. Search for a player to challenge.
            </p>
          </div>
          <button
            onClick={() => onNavigateTab('challenges')}
            className="mt-6 w-full py-2.5 rounded-xl bg-emerald-800 text-white font-bold text-xs hover:bg-emerald-700 transition-colors cursor-pointer"
          >
            Explore Quests
          </button>
        </div>
      </div>

    </div>
  );
};
