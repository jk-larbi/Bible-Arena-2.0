import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { TopNav } from './components/TopNav';
import { BottomNav } from './components/BottomNav';
import { Modal } from './components/Modal';
import { AuthModal } from './components/AuthModal';
import { NotificationPanel } from './components/NotificationPanel';
import { NotificationToast } from './components/NotificationToast';
import { HomePage } from './pages/HomePage';
import { MultiplayerPage } from './pages/MultiplayerPage';
import { LeaderboardPage } from './pages/LeaderboardPage';
import { ChallengesPage } from './pages/ChallengesPage';
import { ProfilePage } from './pages/ProfilePage';
import LoginPage from './pages/LoginPage';
import JoinRoom from './pages/JoinRoom';
import WaitingRoom from './pages/WaitingRoom';
import ResetPassword from './pages/ResetPassword';
import GameDetailPage from './pages/GameDetailPage';
import PlayerProfilePage from './pages/PlayerProfilePage';
import { ScriptureScramble } from './games/ScriptureScramble';
import { VerseBuilder } from './games/VerseBuilder';
import { BibleTimeline } from './games/BibleTimeline';
import { ScriptureChallenge } from './games/ScriptureChallenge';
import { GuessTheEmoji } from './games/GuessTheEmoji';
import { GAMES_LIST, GameInfo, getGameById } from './data/gamesList';
import { Search, Sparkles } from 'lucide-react';
import { Button } from './components/Button';
import { useSession } from './lib/auth';
import { useNotifications, Notification } from './hooks/useNotifications';
import { enqueueOfflineScore, setupOfflineSyncListener } from './lib/offlineSync';

import { NotificationsPage } from './pages/NotificationsPage';
import { NotificationSettingsPage } from './pages/NotificationSettingsPage';

export default function App() {
  const nav = useNavigate();
  const location = useLocation();
  const { user } = useSession();

  const [activeGame, setActiveGame] = useState<GameInfo | null>(null);
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const [isOpenAuth, setIsOpenAuth] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Notification state
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const [latestToast, setLatestToast] = useState<Notification | null>(null);
  const { items: notifItems, unread: notifUnread, loading: notifLoading, markRead, markAllRead, deleteItem } = useNotifications(user?.id);

  // Setup offline IndexedDB score queue sync listener
  useEffect(() => {
    const cleanup = setupOfflineSyncListener();
    return cleanup;
  }, []);

  // Trigger toast when a new item arrives while user is active
  useEffect(() => {
    if (notifItems.length > 0) {
      const newest = notifItems[0];
      if (!newest.is_read) {
        setLatestToast(newest);
      }
    }
  }, [notifItems]);

  // Determine current tab from route location
  const path = location.pathname;
  let currentTab = 'games';
  if (path === '/multiplayer') currentTab = 'multiplayer';
  else if (path === '/leaderboard') currentTab = 'leaderboard';
  else if (path === '/challenges') currentTab = 'challenges';
  else if (path === '/profile') currentTab = 'profile';

  const handleSelectTab = (tab: string) => {
    setActiveGame(null);
    setIsNotifOpen(false);
    if (tab === 'games') nav('/');
    else if (tab === 'multiplayer') nav('/multiplayer');
    else if (tab === 'leaderboard') nav('/leaderboard');
    else if (tab === 'challenges') nav('/challenges');
    else if (tab === 'profile') nav('/profile');
  };

  const handleSelectGame = (game: GameInfo) => {
    setActiveGame(game);
  };

  const handleCompleteLevel = async (gameId: string, level: number, earnedScore: number) => {
    const stats = JSON.parse(localStorage.getItem('biblearena_user_stats') || '{"xp": 0, "gamesPlayed": 0, "level": 1, "achievements": []}');
    const newXp = (stats.xp || 0) + earnedScore;
    const newGamesPlayed = (stats.gamesPlayed || 0) + 1;
    const newLevel = Math.floor(newXp / 500) + 1;

    const updatedStats = {
      ...stats,
      xp: newXp,
      gamesPlayed: newGamesPlayed,
      level: newLevel
    };
    localStorage.setItem('biblearena_user_stats', JSON.stringify(updatedStats));

    const username = user?.user_metadata?.username || user?.email?.split('@')[0] || 'Player Scholar';
    const localScores = JSON.parse(localStorage.getItem('biblearena_scores') || '[]');
    localScores.push({
      gameId,
      level,
      score: earnedScore,
      username,
      createdAt: new Date().toISOString()
    });
    localStorage.setItem('biblearena_scores', JSON.stringify(localScores));

    if (user && user.id) {
      const timestamp = new Date().toISOString();
      if (typeof navigator !== 'undefined' && navigator.onLine) {
        try {
          const { supabase, isBackendConfigured } = await import('./lib/supabase');
          if (isBackendConfigured && supabase) {
            const { error: scoreErr } = await supabase.from('scores').insert({
              user_id: user.id,
              game_id: gameId,
              score: earnedScore,
              created_at: timestamp
            });
            if (scoreErr) throw scoreErr;

            await supabase.from('game_progress').upsert({
              user_id: user.id,
              game_id: gameId,
              current_level: level + 1,
              max_level_completed: level,
              best_score: earnedScore,
              total_attempts: 1,
              updated_at: timestamp
            });
          }
        } catch {
          // Network / DB failure -> queue in IndexedDB
          await enqueueOfflineScore({
            userId: user.id,
            gameId,
            level,
            score: earnedScore,
            timestamp
          });
        }
      } else {
        // Offline -> queue in IndexedDB
        await enqueueOfflineScore({
          userId: user.id,
          gameId,
          level,
          score: earnedScore,
          timestamp
        });
      }
    }
  };

  const filteredSearchGames = GAMES_LIST.filter(g =>
    g.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    g.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    g.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#F3EBDD] text-[#171B24] pb-20 md:pb-0">
      
      {/* Top Navbar */}
      <TopNav
        currentTab={currentTab}
        onSelectTab={handleSelectTab}
        onOpenSearch={() => setIsOpenSearch(true)}
        onOpenAuth={() => nav('/login')}
        user={user}
        unreadCount={notifUnread}
        isNotifOpen={isNotifOpen}
        onToggleNotif={() => setIsNotifOpen(!isNotifOpen)}
      />

      {/* Notification Dropdown Panel */}
      <NotificationPanel
        isOpen={isNotifOpen}
        onClose={() => setIsNotifOpen(false)}
        items={notifItems}
        loading={notifLoading}
        onMarkRead={markRead}
        onMarkAllRead={markAllRead}
        onDelete={deleteItem}
        userId={user?.id}
      />

      {/* Live Toast Notification */}
      <NotificationToast
        notification={latestToast as any}
        onDismiss={() => setLatestToast(null)}
        inGame={Boolean(activeGame)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeGame ? (
          <div>
            {activeGame.id === 'scripture-scramble' && (
              <ScriptureScramble onBack={() => setActiveGame(null)} onCompleteLevel={handleCompleteLevel} />
            )}
            {activeGame.id === 'verse-builder' && (
              <VerseBuilder onBack={() => setActiveGame(null)} onCompleteLevel={handleCompleteLevel} />
            )}
            {activeGame.id === 'bible-timeline' && (
              <BibleTimeline onBack={() => setActiveGame(null)} onCompleteLevel={handleCompleteLevel} />
            )}
            {activeGame.id === 'scripture-challenge' && (
              <ScriptureChallenge onBack={() => setActiveGame(null)} onCompleteLevel={handleCompleteLevel} />
            )}
            {activeGame.id === 'guess-the-emoji' && (
              <GuessTheEmoji onBack={() => setActiveGame(null)} onCompleteLevel={handleCompleteLevel} />
            )}
            {['ark-navigator', 'david-sling', 'prophets-lamp', 'exodus-journey', 'solomons-wisdom', 'paul-journeys', 'daniel-lions', 'joseph-dreams', 'psalms-harp', 'creation-week', 'tabernacle-secrets', 'parables-hidden', 'judges-tribes', 'revelation-seals'].includes(activeGame.id) && (
              <div className="max-w-xl mx-auto p-6 my-12 bg-white rounded-3xl shadow-xl text-center border border-[#171B24]/10">
                <div className="flex items-center justify-between mb-4">
                  <button onClick={() => setActiveGame(null)} className="inline-flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-semibold hover:bg-[#F3EBDD] transition-colors cursor-pointer text-[#171B24]">
                    ← Back to Library
                  </button>
                  <span className="text-xs font-bold text-[#D66B3D] uppercase tracking-wider">{activeGame.category}</span>
                </div>
                <div className="w-16 h-16 rounded-2xl bg-[#D66B3D] text-white flex items-center justify-center mx-auto mb-4 shadow-md">
                  <Sparkles className="w-8 h-8" />
                </div>
                <h2 className="font-serif font-bold text-3xl text-[#171B24] mt-2 mb-3">{activeGame.title}</h2>
                <p className="text-sm text-[#171B24]/70 mb-6 leading-relaxed">{activeGame.description}</p>
                
                <div className="p-4 bg-[#F3EBDD] rounded-2xl text-xs text-[#171B24]/80 mb-6">
                  This game is scheduled for release in the upcoming expansion pack. Play <strong>Scripture Scramble</strong>, <strong>Verse Builder</strong>, <strong>Bible Timeline</strong>, <strong>Guess the Emoji</strong>, or <strong>Scripture Challenge</strong> right now!
                </div>

                <Button variant="primary" onClick={() => setActiveGame(null)}>
                  Return to Game Library
                </Button>
              </div>
            )}
          </div>
        ) : (
          <Routes>
            <Route path="/" element={<HomePage onSelectGame={handleSelectGame} onNavigateTab={handleSelectTab} />} />
            <Route path="/multiplayer" element={<MultiplayerPage />} />
            <Route path="/leaderboard" element={<LeaderboardPage />} />
            <Route path="/challenges" element={<ChallengesPage />} />
            <Route path="/notifications" element={<NotificationsPage />} />
            <Route path="/notification-settings" element={<NotificationSettingsPage />} />
            <Route path="/profile" element={<ProfilePage user={user} onLogout={() => {}} />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/join/:code?" element={<JoinRoom />} />
            <Route path="/room/:roomId" element={<WaitingRoom />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/games/:slug" element={<GameDetailPage />} />
            <Route path="/players/:username" element={<PlayerProfilePage />} />
            <Route path="/game/:gameId" element={<GameLauncher onSelectGame={handleSelectGame} />} />
          </Routes>
        )}
      </main>

      {/* Mobile Bottom Navigation */}
      <BottomNav
        currentTab={currentTab}
        onSelectTab={handleSelectTab}
      />

      {/* Search Modal */}
      <Modal isOpen={isOpenSearch} onClose={() => setIsOpenSearch(false)} title="Search BibleArena Games">
        <div className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-[#171B24]/40" />
            <input
              type="text"
              autoFocus
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by title, category, or keyword..."
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-[#171B24]/15 text-[#171B24] text-sm focus:outline-none focus:ring-2 focus:ring-[#D66B3D]"
            />
          </div>

          <div className="space-y-2 max-h-80 overflow-y-auto">
            {filteredSearchGames.map((game) => (
              <div
                key={game.id}
                onClick={() => {
                  setIsOpenSearch(false);
                  setActiveGame(game);
                }}
                className="flex items-center justify-between p-3 rounded-xl hover:bg-[#F3EBDD] transition-colors cursor-pointer border border-[#171B24]/10 bg-white"
              >
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#171B24]">{game.title}</h4>
                  <span className="text-[11px] text-[#171B24]/60">{game.category} • {game.difficulty}</span>
                </div>
                <Button size="sm">Play</Button>
              </div>
            ))}
          </div>
        </div>
      </Modal>

      {/* Auth Modal */}
      <AuthModal
        isOpen={isOpenAuth}
        onClose={() => setIsOpenAuth(false)}
        onSuccess={() => {}}
      />

    </div>
  );
}

function GameLauncher({ onSelectGame }: { onSelectGame: (g: GameInfo) => void }) {
  const location = useLocation();
  const gameId = location.pathname.split('/game/')[1];
  const game = getGameById(gameId);

  useEffect(() => {
    if (game) {
      onSelectGame(game);
    }
  }, [game, onSelectGame]);

  return null;
}
