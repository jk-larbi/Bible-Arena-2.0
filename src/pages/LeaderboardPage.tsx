import React, { useState, useEffect } from 'react';
import { Trophy, Play, Sparkles, User } from 'lucide-react';
import { Button } from '../components/Button';
import { supabase, isSupabaseConfigured } from '../lib/supabase';

import { BackButton } from '../components/BackButton';

interface LeaderboardProps {
  onPlayGame?: () => void;
}

export const LeaderboardPage: React.FC<LeaderboardProps> = ({ onPlayGame }) => {
  const [timeframe, setTimeframe] = useState<'weekly' | 'allTime'>('weekly');
  const [leaders, setLeaders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function fetchLeaders() {
      setLoading(true);
      if (isSupabaseConfigured && supabase) {
        try {
          const { data, error } = await supabase
            .from('scores')
            .select(`
              score,
              game_id,
              created_at,
              profiles ( username, level )
            `)
            .order('score', { ascending: false })
            .limit(20);

          if (!error && data) {
            const formatted = data.map((item: any, index: number) => ({
              rank: index + 1,
              name: item.profiles?.username || 'Anonymous Scholar',
              level: item.profiles?.level || 1,
              xp: item.score,
              avatar: (item.profiles?.username || 'A')[0].toUpperCase()
            }));
            if (isMounted) setLeaders(formatted);
          }
        } catch (err) {
          // Fallback to local
        }
      } else {
        // Read local recorded scores from localStorage
        const localScores = JSON.parse(localStorage.getItem('biblearena_scores') || '[]');
        if (localScores.length > 0) {
          const formatted = localScores
            .sort((a: any, b: any) => b.score - a.score)
            .map((item: any, idx: number) => ({
              rank: idx + 1,
              name: item.username || 'Local Player',
              level: item.level || 1,
              xp: item.score,
              avatar: (item.username || 'L')[0].toUpperCase()
            }));
          if (isMounted) setLeaders(formatted);
        } else {
          if (isMounted) setLeaders([]);
        }
      }
      if (isMounted) setLoading(false);
    }

    fetchLeaders();
    return () => { isMounted = false; };
  }, [timeframe]);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Top Header Navigation */}
      <div className="flex items-center justify-between">
        <BackButton fallback="/" />
      </div>

      <div className="text-center max-w-xl mx-auto">
        <span className="px-3.5 py-1.5 rounded-full bg-amber-500/10 text-xs font-bold text-amber-800 uppercase tracking-wider">
          Global Rankings
        </span>
        <h2 className="font-serif font-extrabold text-3xl sm:text-4xl text-[#171B24] mt-3 mb-2">
          The Hall of Scholars
        </h2>
        <p className="text-sm text-[#171B24]/70">
          Real database rankings from verified player achievements worldwide.
        </p>
      </div>

      <div className="flex justify-center gap-2">
        <button
          onClick={() => setTimeframe('weekly')}
          className={`px-6 py-2.5 rounded-full font-semibold text-xs transition-all cursor-pointer ${
            timeframe === 'weekly' ? 'bg-[#171B24] text-white shadow-md' : 'bg-white text-[#171B24] border border-[#171B24]/15'
          }`}
        >
          Weekly Rankings
        </button>
        <button
          onClick={() => setTimeframe('allTime')}
          className={`px-6 py-2.5 rounded-full font-semibold text-xs transition-all cursor-pointer ${
            timeframe === 'allTime' ? 'bg-[#171B24] text-white shadow-md' : 'bg-white text-[#171B24] border border-[#171B24]/15'
          }`}
        >
          All-Time Grandmasters
        </button>
      </div>

      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-[#171B24]/10 min-h-[260px] flex flex-col justify-center">
        {loading ? (
          <div className="space-y-3 py-4">
            <div className="h-16 bg-[#171B24]/5 rounded-2xl animate-pulse" />
            <div className="h-16 bg-[#171B24]/5 rounded-2xl animate-pulse" />
            <div className="h-16 bg-[#171B24]/5 rounded-2xl animate-pulse" />
          </div>
        ) : leaders.length === 0 ? (
          <div className="text-center py-12 px-4 space-y-4">
            <div className="w-16 h-16 rounded-full bg-amber-500/10 text-amber-800 flex items-center justify-center mx-auto mb-2">
              <Trophy className="w-8 h-8 text-[#D66B3D]" />
            </div>
            <h3 className="font-serif font-bold text-2xl text-[#171B24]">
              No rankings yet. Be the first on the board.
            </h3>
            <p className="text-sm text-[#171B24]/60 max-w-md mx-auto">
              Complete a game challenge or solve an emoji puzzle to record your score and claim #1!
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
            {leaders.map((leader) => (
              <div
                key={leader.rank}
                className={`flex items-center justify-between p-4 rounded-2xl border transition-all ${
                  leader.rank === 1
                    ? 'bg-amber-500/10 border-amber-500/30'
                    : leader.rank === 2
                    ? 'bg-stone-200/50 border-stone-300'
                    : leader.rank === 3
                    ? 'bg-amber-700/10 border-amber-800/20'
                    : 'bg-[#F3EBDD]/50 border-[#171B24]/10'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-2xl flex items-center justify-center font-serif font-bold text-base ${
                    leader.rank === 1 ? 'bg-amber-500 text-white shadow-md' :
                    leader.rank === 2 ? 'bg-stone-400 text-white' :
                    leader.rank === 3 ? 'bg-amber-700 text-white' : 'bg-[#171B24]/10 text-[#171B24]'
                  }`}>
                    #{leader.rank}
                  </div>
                  <div className="w-11 h-11 rounded-full bg-[#171B24] text-white font-bold flex items-center justify-center text-sm shadow-sm">
                    {leader.avatar}
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-base text-[#171B24]">{leader.name}</h4>
                    <span className="text-xs text-[#171B24]/60">Level {leader.level}</span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="font-serif font-bold text-lg text-[#D66B3D] font-mono">{leader.xp.toLocaleString()} XP</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
