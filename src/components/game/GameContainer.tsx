import React from 'react';
import { BackButton } from '../BackButton';

interface GameContainerProps {
  title: string;
  score: number;
  level: number;
  children: React.ReactNode;
  onExit: () => void;
}

export const GameContainer: React.FC<GameContainerProps> = ({ title, score, level, children, onExit }) => {
  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 min-h-screen">
      <div className="flex items-center justify-between mb-6">
        <BackButton fallback="/" label="Exit" />
        <div className="text-right">
          <p className="text-[10px] font-bold uppercase text-[#5A6275]">Level {level}</p>
          <p className="font-serif text-lg font-bold text-[#171B24]">Score: {score}</p>
        </div>
      </div>
      
      <h1 className="font-serif text-2xl font-bold mb-6">{title}</h1>
      
      <div className="bg-white rounded-3xl p-6 shadow-xl border border-[#171B24]/10">
        {children}
      </div>
    </div>
  );
};
