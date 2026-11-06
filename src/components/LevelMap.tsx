import React from 'react';
import { Check, Lock, Star, Play } from 'lucide-react';

interface LevelMapProps {
  totalLevels?: number;
  currentLevel: number;
  maxCompleted: number;
  onSelectLevel: (level: number) => void;
}

export const LevelMap: React.FC<LevelMapProps> = ({
  totalLevels = 20,
  currentLevel,
  maxCompleted,
  onSelectLevel
}) => {
  const levels = Array.from({ length: totalLevels }, (_, i) => i + 1);

  return (
    <div className="py-6 px-4">
      <div className="text-center mb-6">
        <h4 className="font-serif font-bold text-lg text-[#171B24]">Difficulty Ladder & Level Map</h4>
        <p className="text-xs text-[#171B24]/70">Select an unlocked level or continue your journey</p>
      </div>

      <div className="grid grid-cols-4 sm:grid-cols-5 gap-3 max-h-[350px] overflow-y-auto p-2">
        {levels.map((lvl) => {
          const isCompleted = lvl <= maxCompleted;
          const isCurrent = lvl === currentLevel;
          const isLocked = lvl > maxCompleted + 1;

          return (
            <button
              key={lvl}
              disabled={isLocked}
              onClick={() => onSelectLevel(lvl)}
              className={`relative flex flex-col items-center justify-center h-20 rounded-2xl font-bold transition-all cursor-pointer ${
                isCompleted
                  ? 'bg-emerald-800 text-white shadow-md hover:bg-emerald-700'
                  : isCurrent
                  ? 'bg-[#D66B3D] text-white shadow-lg ring-4 ring-[#D66B3D]/30 scale-105'
                  : 'bg-white/60 text-[#171B24]/40 border border-[#171B24]/10 opacity-60 cursor-not-allowed'
              }`}
            >
              <span className="text-xs uppercase opacity-80 mb-0.5">Lvl</span>
              <span className="text-xl font-serif font-extrabold">{lvl}</span>
              
              <div className="absolute top-1.5 right-1.5">
                {isCompleted && <Check className="w-3.5 h-3.5 text-emerald-300" />}
                {isLocked && <Lock className="w-3.5 h-3.5 text-stone-400" />}
                {isCurrent && <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300 animate-pulse" />}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
