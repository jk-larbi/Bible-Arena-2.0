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
import CommunityChallengesPage from './pages/CommunityChallengesPage';
import WaitingRoom from './pages/WaitingRoom';
import ResetPassword from './pages/ResetPassword';
import GameDetailPage from './pages/GameDetailPage';
import PlayerProfilePage from './pages/PlayerProfilePage';
import { ScriptureScramble } from './games/ScriptureScramble';
import { VerseBuilder } from './games/VerseBuilder';
import { BibleTimeline } from './games/BibleTimeline';
import { ScriptureChallenge } from './games/ScriptureChallenge';
import { GuessTheEmoji } from './games/GuessTheEmoji';
import { BibleCharacterQuest } from './games/BibleCharacterQuest';
import { BibleWordSearch } from './games/BibleWordSearch';
import { BibleCrossword } from './games/BibleCrossword';
import { WhoSaidIt } from './games/WhoSaidIt';
import { CompleteTheScripture } from './games/CompleteTheScripture';
import { BibleMatchUp } from './games/BibleMatchUp';
import { BiblePuzzles } from './games/BiblePuzzles';
import { FindTheBibleBook } from './games/FindTheBibleBook';
import { BibleRiddles } from './games/BibleRiddles';
import { BibleGeographyQuest } from './games/BibleGeographyQuest';
import { BibleMemoryChallenge } from './games/BibleMemoryChallenge';
import { OldVsNewTestament } from './games/OldVsNewTestament';
import { BibleDetective } from './games/BibleDetective';
import { BibleChainChallenge } from './games/BibleChainChallenge';
import { BaseGame } from './components/game/BaseGame';
import { GAMES_LIST, GameInfo, getGameById } from './data/gamesList';
import { Search } from 'lucide-react';
import { Button } from './components/Button';
import { useSession, logoutPlayer } from './lib/auth';
import { useNotifications, Notification } from './hooks/useNotifications';
import { enqueueOfflineScore, setupOfflineSyncListener } from './lib/offlineSync';

import { NotificationsPage } from './pages/NotificationsPage';
import { NotificationSettingsPage } from './pages/NotificationSettingsPage';

export default function App() {
  const nav = useNavigate();
  const location = useLocation();
  const { user } = useSession();

  const handleLogout = async () => {
    const { error } = await logoutPlayer();
    if (error) {
      console.error('BibleArena logout failed:', error);
      window.alert('We could not sign you out. Please try again.');
      return;
    }
    setActiveGame(null);
    setIsNotifOpen(false);
    setIsOpenAuth(false);
    nav('/', { replace: true });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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

  const filteredSearchGames = GAMES_LIST.filter(g =>
    g.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    g.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    g.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderActiveGame = (game: GameInfo) => {
    const closeGame = () => setActiveGame(null);
    switch (game.id) {
      case 'scripture-challenge':
        return <ScriptureChallenge onBack={closeGame} />;
      case 'scripture-scramble':
        return <ScriptureScramble onBack={closeGame} />;
      case 'verse-builder':
        return <VerseBuilder onBack={closeGame} />;
      case 'bible-timeline':
        return <BibleTimeline onBack={closeGame} />;
      case 'guess-the-emoji':
        return <GuessTheEmoji onBack={closeGame} />;
      case 'bible-character-quest':
        return <BibleCharacterQuest onBack={closeGame} />;
      case 'bible-word-search':
        return <BibleWordSearch onBack={closeGame} />;
      case 'bible-crossword':
        return <BibleCrossword onBack={closeGame} />;
      case 'who-said-it':
        return <WhoSaidIt onBack={closeGame} />;
      case 'complete-the-scripture':
        return <CompleteTheScripture onBack={closeGame} />;
      case 'bible-match-up':
        return <BibleMatchUp onBack={closeGame} />;
      case 'bible-puzzles':
        return <BiblePuzzles onBack={closeGame} />;
      case 'find-the-bible-book':
        return <FindTheBibleBook onBack={closeGame} />;
      case 'bible-riddles':
        return <BibleRiddles onBack={closeGame} />;
      case 'bible-geography-quest':
        return <BibleGeographyQuest onBack={closeGame} />;
      case 'bible-memory-challenge':
        return <BibleMemoryChallenge onBack={closeGame} />;
      case 'old-vs-new-testament':
        return <OldVsNewTestament onBack={closeGame} />;
      case 'bible-detective':
        return <BibleDetective onBack={closeGame} />;
      case 'bible-chain-challenge':
        return <BibleChainChallenge onBack={closeGame} />;
      default:
        return <BaseGame gameId={game.id} gameName={game.title} onBack={closeGame} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F3EBDD] text-[#171B24] pb-[calc(5rem+env(safe-area-inset-bottom))] md:pb-0">
      
      {/* Top Navbar */}
      <TopNav
        currentTab={currentTab}
        onSelectTab={handleSelectTab}
        onOpenSearch={() => setIsOpenSearch(true)}
        onOpenAuth={() => nav('/login')}
        onLogout={handleLogout}
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
          <div>{renderActiveGame(activeGame)}</div>
        ) : (
          <Routes>
            <Route path="/" element={<HomePage onSelectGame={handleSelectGame} onNavigateTab={handleSelectTab} />} />
            <Route path="/multiplayer" element={<MultiplayerPage />} />
            <Route path="/leaderboard" element={<LeaderboardPage />} />
            <Route path="/challenges" element={<ChallengesPage onSelectGame={handleSelectGame} />} />
            <Route path="/community-challenges" element={<CommunityChallengesPage />} />
            <Route path="/community-challenges/:code" element={<CommunityChallengesPage />} />
            <Route path="/notifications" element={<NotificationsPage />} />
            <Route path="/notification-settings" element={<NotificationSettingsPage />} />
            <Route path="/profile" element={<ProfilePage user={user} onLogout={handleLogout} onNavigateTab={handleSelectTab} />} />
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
