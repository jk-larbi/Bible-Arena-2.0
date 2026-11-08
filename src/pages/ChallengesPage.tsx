import React, { useState, useEffect } from 'react';
import { Flame, Search, UserCheck, Check, X, Swords, Send, Trophy } from 'lucide-react';
import { Button } from '../components/Button';
import { supabase, isSupabaseConfigured } from '../lib/supabase';
import { useSession } from '../lib/auth';
import { notifyPlayerOfChallenge, notifyChallengeResponse } from '../services/notificationService';

import { BackButton } from '../components/BackButton';

type Profile = {
  id: string;
  username: string;
  full_name: string | null;
  level: number;
};

type ChallengeItem = {
  id: string;
  title: string;
  description: string;
  game_id: string;
  target_score: number;
  reward_xp: number;
  challenger_id?: string;
  opponent_id?: string;
  status?: string;
  created_at: string;
};

export const ChallengesPage: React.FC = () => {
  const { user } = useSession();
  const [challenges, setChallenges] = useState<ChallengeItem[]>([]);
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [sendingChallenge, setSendingChallenge] = useState<string | null>(null);
  const [actionBusy, setActionBusy] = useState<string | null>(null);
  const [statusMsg, setStatusMsg] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  useEffect(() => {
    let isMounted = true;
    async function loadData() {
      setLoading(true);
      if (isSupabaseConfigured && supabase) {
        try {
          // Fetch existing challenges
          const { data: challengeData } = await supabase
            .from('challenges')
            .select('*')
            .order('created_at', { ascending: false });

          if (isMounted && challengeData) {
            setChallenges(challengeData);
          }

          // Fetch profiles to allow peer search
          const { data: profileData } = await supabase
            .from('profiles')
            .select('id, username, full_name, level')
            .limit(50);

          if (isMounted && profileData) {
            setProfiles(profileData);
          }
        } catch (e) {
          console.error('Error fetching challenges:', e);
        }
      }
      if (isMounted) setLoading(false);
    }
    loadData();
    return () => { isMounted = false; };
  }, []);

  const handleSendChallenge = async (targetProfile: Profile) => {
    if (!user?.id) {
      setStatusMsg({ type: 'error', text: 'Please log in to challenge players.' });
      return;
    }
    if (user.id === targetProfile.id) {
      setStatusMsg({ type: 'error', text: 'You cannot challenge yourself.' });
      return;
    }

    setSendingChallenge(targetProfile.id);
    setStatusMsg(null);
    try {
      const senderName = user.user_metadata?.username || user.user_metadata?.full_name || 'A Bible Arena Scholar';
      const challengeTitle = `Scripture Challenge: ${senderName} vs ${targetProfile.username || targetProfile.full_name}`;
      
      const { data: inserted, error: insertErr } = await supabase
        .from('challenges')
        .insert({
          challenger_id: user.id,
          opponent_id: targetProfile.id,
          title: challengeTitle,
          description: `Score at least 1500 XP in Scripture Challenge to win 250 bonus XP!`,
          game_id: 'scripture-challenge',
          target_score: 1500,
          reward_xp: 250,
          expires_at: new Date(Date.now() + 7 * 24 * 3600 * 1000).toISOString()
        })
        .select()
        .single();

      if (insertErr) throw insertErr;

      // Trigger instant real-time notification
      await notifyPlayerOfChallenge(
        targetProfile.id,
        user.id,
        senderName,
        inserted.id
      );

      setStatusMsg({ type: 'success', text: `Challenge sent to ${targetProfile.username || targetProfile.full_name}!` });
      setChallenges((prev) => [inserted, ...prev]);
    } catch (err) {
      setStatusMsg({ type: 'error', text: (err as Error).message });
    } finally {
      setSendingChallenge(null);
    }
  };

  const handleResponse = async (challenge: ChallengeItem, status: 'accepted' | 'declined') => {
    setActionBusy(challenge.id);
    try {
      if (!user?.id || challenge.opponent_id !== user.id || challenge.status !== 'pending') {
        throw new Error('Only the invited player can respond to a pending challenge.');
      }
      const { error: responseError } = await supabase
        .from('challenges')
        .update({ status })
        .eq('id', challenge.id)
        .eq('opponent_id', user.id)
        .eq('status', 'pending');
      if (responseError) throw responseError;

      if (challenge.challenger_id && user?.id) {
        const senderName = user.user_metadata?.username || user.user_metadata?.full_name || 'Scholar';
        await notifyChallengeResponse(challenge.challenger_id, user.id, senderName, challenge.id, status);
      }

      setChallenges((prev) => prev.map((c) => (c.id === challenge.id ? { ...c, status } : c)));
      setStatusMsg({ type: 'success', text: `Challenge ${status}!` });
    } catch (err) {
      setStatusMsg({ type: 'error', text: (err as Error).message });
    } finally {
      setActionBusy(null);
    }
  };

  const searchedProfiles = searchQuery
    ? profiles.filter(p =>
        (p.username && p.username.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (p.full_name && p.full_name.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : [];

  const filteredChallenges = searchQuery
    ? challenges.filter(c => c.title.toLowerCase().includes(searchQuery.toLowerCase()))
    : challenges;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 text-[#171B24]">
      {/* Top Header Navigation */}
      <div className="flex items-center justify-between">
        <BackButton fallback="/" />
      </div>

      {/* Header */}
      <div className="text-center max-w-xl mx-auto">
        <span className="px-3.5 py-1.5 rounded-full bg-[#D66B3D]/10 text-xs font-bold text-[#D66B3D] uppercase tracking-wider">
          Peer Challenges & Quests
        </span>
        <h2 className="font-serif font-extrabold text-3xl sm:text-4xl text-[#171B24] mt-3 mb-2">
          Scripture Challenges
        </h2>
        <p className="text-sm text-[#171B24]/70">
          Challenge friends to head-to-head Bible games and deliver real-time notifications.
        </p>
      </div>

      {statusMsg && (
        <div
          className={`max-w-md mx-auto p-4 rounded-2xl text-xs sm:text-sm font-semibold text-center ${
            statusMsg.type === 'success' ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'
          }`}
        >
          {statusMsg.text}
        </div>
      )}

      {/* Search Input */}
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

      {/* Searched Players Results (if searching) */}
      {searchQuery && searchedProfiles.length > 0 && (
        <div className="bg-white rounded-3xl p-6 border border-[#171B24]/10 shadow-lg space-y-4">
          <h3 className="font-serif font-bold text-lg text-[#171B24]">Registered Scholars ({searchedProfiles.length})</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {searchedProfiles.map((p) => {
              const isSelf = user?.id === p.id;
              return (
                <div key={p.id} className="p-3.5 rounded-2xl bg-[#F3EBDD] flex items-center justify-between border border-[#171B24]/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#3156C9] text-white flex items-center justify-center font-bold text-sm">
                      {(p.username || p.full_name || 'P')[0]?.toUpperCase()}
                    </div>
                    <div>
                      <p className="font-bold text-sm text-[#171B24]">{p.full_name || p.username}</p>
                      <p className="text-xs text-[#5A6275]">Level {p.level || 1} Scholar</p>
                    </div>
                  </div>

                  {!isSelf && (
                    <Button
                      size="sm"
                      disabled={sendingChallenge === p.id}
                      onClick={() => handleSendChallenge(p)}
                      className="bg-[#D66B3D] hover:bg-[#c25a2c] text-white"
                    >
                      <Send className="w-3.5 h-3.5 mr-1" />
                      {sendingChallenge === p.id ? 'Sending…' : 'Challenge'}
                    </Button>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Active Challenges List */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-[#171B24]/10 min-h-[220px]">
        <h3 className="font-serif font-bold text-xl text-[#171B24] mb-4">Active Challenges & Community Quests</h3>

        {loading ? (
          <div className="w-full h-24 bg-[#171B24]/5 rounded-2xl animate-pulse" />
        ) : filteredChallenges.length === 0 ? (
          <div className="text-center py-8 px-4 space-y-3">
            <div className="w-14 h-14 rounded-full bg-[#D66B3D]/10 text-[#D66B3D] flex items-center justify-center mx-auto">
              <Flame className="w-7 h-7" />
            </div>
            <h4 className="font-serif font-bold text-xl text-[#171B24]">
              {searchQuery ? 'No matching challenges found' : 'No active challenges yet'}
            </h4>
            <p className="text-xs text-[#171B24]/60 max-w-sm mx-auto">
              Type a player name in the search bar above to send a direct head-to-head challenge.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredChallenges.map((c) => (
              <div key={c.id} className="p-5 rounded-2xl bg-[#F3EBDD] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border border-[#171B24]/10">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Swords className="w-4 h-4 text-[#D66B3D]" />
                    <h4 className="font-serif font-bold text-base text-[#171B24]">{c.title}</h4>
                    {c.status && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[#171B24]/10 text-[#171B24]">
                        {c.status}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-[#171B24]/70">{c.description}</p>
                  <div className="flex items-center gap-3 text-[11px] font-semibold text-[#5A6275]">
                    <span className="flex items-center gap-1"><Trophy className="w-3.5 h-3.5 text-amber-500" /> +{c.reward_xp} XP Reward</span>
                    <span>Target: {c.target_score} PTS</span>
                  </div>
                </div>

                {c.status === 'pending' && c.opponent_id === user?.id && (
                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <Button
                      size="sm"
                      disabled={actionBusy === c.id}
                      onClick={() => handleResponse(c, 'accepted')}
                      className="bg-[#3156C9] hover:bg-[#2544A5] text-white flex-1 sm:flex-initial"
                    >
                      <Check className="w-4 h-4 mr-1" /> Accept
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      disabled={actionBusy === c.id}
                      onClick={() => handleResponse(c, 'declined')}
                      className="text-red-600 border-red-200 hover:bg-red-50 flex-1 sm:flex-initial"
                    >
                      <X className="w-4 h-4 mr-1" /> Decline
                    </Button>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
