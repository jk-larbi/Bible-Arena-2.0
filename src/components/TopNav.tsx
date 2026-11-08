import React, { useState } from 'react';
import { Search, Bell, Trophy, Gamepad2, Users, Flame } from 'lucide-react';

interface TopNavProps {
  currentTab: string;
  onSelectTab: (tab: string) => void;
  onOpenSearch: () => void;
  onOpenAuth: () => void;
  onLogout: () => void;
  user: any;
  unreadCount?: number;
  isNotifOpen?: boolean;
  onToggleNotif?: () => void;
}

export const TopNav: React.FC<TopNavProps> = ({
  currentTab,
  onSelectTab,
  onOpenSearch,
  onOpenAuth,
  onLogout,
  user,
  unreadCount = 0,
  isNotifOpen = false,
  onToggleNotif
}) => {
  const [logoFailed, setLogoFailed] = useState(false);
  const isGuest = user?.is_anonymous === true;

  const navTabs = [
    { id: 'games', label: 'Games', icon: <Gamepad2 className="w-4 h-4" /> },
    { id: 'multiplayer', label: 'Multiplayer', icon: <Users className="w-4 h-4" /> },
    { id: 'leaderboard', label: 'Leaderboard', icon: <Trophy className="w-4 h-4" /> },
    { id: 'challenges', label: 'Challenges', icon: <Flame className="w-4 h-4" /> }
  ];

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-[#F3EBDD]/90 border-b border-[#171B24]/10 transition-all">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-14 md:h-16 flex items-center justify-between gap-4">
        
        {/* Logo Left */}
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            onSelectTab('games');
          }}
          className="flex min-h-[44px] items-center gap-2 cursor-pointer group"
          aria-label="BibleArena home"
        >
          <img 
            src={`${import.meta.env.BASE_URL}assets/bible-arena-logo.webp`} 
            alt="" 
            className="h-6 w-6 shrink-0 object-contain rounded group-hover:scale-105 transition-transform" 
          />
          <span className="whitespace-nowrap font-serif text-xl font-bold leading-none tracking-tight md:text-[22px] text-[#171B24] max-[359px]:hidden">
            BibleArena
          </span>
          <span className="hidden max-[359px]:inline font-serif text-lg font-bold leading-none text-[#171B24]">
            BA
          </span>
        </a>

        {/* Centered Pill Nav */}
        <nav className="hidden md:flex items-center gap-1 bg-[#171B24]/5 p-1 rounded-full border border-[#171B24]/10">
          {navTabs.map((tab) => {
            const isActive = currentTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onSelectTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer min-h-[36px] ${
                  isActive
                    ? 'bg-[#171B24] text-[#F3EBDD] shadow-sm'
                    : 'text-[#171B24]/70 hover:text-[#171B24] hover:bg-[#171B24]/5'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Search Button */}
          <button
            onClick={onOpenSearch}
            className="w-10 h-10 min-h-[44px] min-w-[44px] rounded-full bg-[#171B24]/5 hover:bg-[#171B24]/10 text-[#171B24] flex items-center justify-center transition-colors cursor-pointer"
            title="Search Games"
            aria-label="Search Games"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Notifications Bell (Always visible for logged-in users) */}
          {user && (
            <div className="relative">
              <button
                onClick={onToggleNotif}
                className={`relative w-10 h-10 min-h-[44px] min-w-[44px] rounded-full flex items-center justify-center transition-colors cursor-pointer ${
                  isNotifOpen ? 'bg-[#171B24] text-white' : 'bg-[#171B24]/5 hover:bg-[#171B24]/10 text-[#171B24]'
                }`}
                title="Notifications"
                aria-label="Notifications"
              >
                <Bell className="w-5 h-5" />
                {unreadCount > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-[#D66B3D] px-1 text-[10px] font-bold text-white shadow-sm">
                    {unreadCount > 9 ? '9+' : unreadCount}
                  </span>
                )}
              </button>
            </div>
          )}

          {/* Player Profile / Auth */}
          {user ? (
            <div className="flex items-center gap-2">
              <div 
                onClick={() => onSelectTab('profile')}
                className="flex items-center gap-2 pl-2 pr-3 py-1 rounded-full bg-[#171B24]/5 hover:bg-[#171B24]/10 transition-colors cursor-pointer border border-[#171B24]/10 min-h-[44px]"
              >
                <div className="w-8 h-8 rounded-full bg-[#3156C9] text-white flex items-center justify-center font-bold text-xs shadow-sm">
                  {(user.user_metadata?.username || user.email || 'P')[0]?.toUpperCase()}
                </div>
              </div>

              <button
                onClick={onLogout}
                className="px-3 py-1.5 rounded-full bg-[#171B24]/10 text-[#171B24] font-semibold text-xs hover:bg-red-600 hover:text-white transition-colors cursor-pointer min-h-[44px] flex items-center justify-center"
                title="Log out"
              >
                Log out
              </button>
            </div>
          ) : (
            <button
              onClick={onOpenAuth}
              className="px-4 py-2 min-h-[44px] rounded-full bg-[#171B24] text-[#F3EBDD] font-semibold text-xs hover:bg-[#D66B3D] transition-colors shadow-sm cursor-pointer flex items-center justify-center"
            >
              Sign In
            </button>
          )}
        </div>

      </div>
    </header>
  );
};
