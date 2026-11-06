import React from 'react';
import { Gamepad2, Users, Trophy, Flame, User } from 'lucide-react';

interface BottomNavProps {
  currentTab: string;
  onSelectTab: (tab: string) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ currentTab, onSelectTab }) => {
  const tabs = [
    { id: 'games', label: 'Games', icon: <Gamepad2 className="w-5 h-5" /> },
    { id: 'multiplayer', label: 'Multiplayer', icon: <Users className="w-5 h-5" /> },
    { id: 'leaderboard', label: 'Rankings', icon: <Trophy className="w-5 h-5" /> },
    { id: 'challenges', label: 'Challenges', icon: <Flame className="w-5 h-5" /> },
    { id: 'profile', label: 'Profile', icon: <User className="w-5 h-5" /> }
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#F3EBDD]/95 backdrop-blur-md border-t border-[#171B24]/10 px-2 py-2 flex items-center justify-around shadow-lg pb-[max(0.5rem,env(safe-area-inset-bottom))]">
      {tabs.map((tab) => {
        const isActive = currentTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onSelectTab(tab.id)}
            className={`flex flex-col items-center justify-center min-w-[44px] min-h-[44px] px-3 py-1 rounded-xl transition-all cursor-pointer ${
              isActive ? 'text-[#D66B3D] font-bold scale-105' : 'text-[#171B24]/60 hover:text-[#171B24]'
            }`}
            aria-label={tab.label}
          >
            {tab.icon}
            <span className="text-[10px] mt-0.5">{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
};
