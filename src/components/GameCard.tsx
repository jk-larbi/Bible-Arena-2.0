import React, { useState } from 'react';
import { GameInfo } from '../data/gamesList';
import { Star, Play, Sparkles } from 'lucide-react';

interface GameCardProps {
  game: GameInfo;
  onPlay: (game: GameInfo) => void;
  layout?: 'poster' | 'horizontal' | 'grid';
}

export const GameCard: React.FC<GameCardProps> = ({ game, onPlay, layout = 'poster' }) => {
  const [imgError, setImgError] = useState(false);
  const optimizedImageFile = game.imageFile.replace(/\.(png|jpe?g)$/i, '.webp');
  const imagePath = `${import.meta.env.BASE_URL}assets/games/${optimizedImageFile}`;

  if (layout === 'horizontal') {
    return (
      <div 
        onClick={() => onPlay(game)}
        className="flex items-center gap-4 bg-white p-3 rounded-2xl border border-[#171B24]/10 hover:shadow-md transition-all cursor-pointer group w-full"
      >
        <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-xl ${game.colorScheme.bg} flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform overflow-hidden relative shadow-inner`}>
          {!imgError ? (
            <img
              src={imagePath}
              alt={game.title}
              onError={() => setImgError(true)}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
          ) : (
            <Sparkles className="w-8 h-8 opacity-80" />
          )}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#D66B3D]">{game.category}</span>
            <span className="text-xs text-[#171B24]/50">• {game.difficulty}</span>
          </div>
          <h4 className="font-serif font-bold text-base text-[#171B24] truncate">{game.title}</h4>
          <p className="text-xs text-[#171B24]/70 truncate">{game.subtitle}</p>
        </div>
        <button className="w-10 h-10 rounded-full bg-[#171B24] text-white flex items-center justify-center shrink-0 group-hover:bg-[#D66B3D] transition-colors shadow-sm">
          <Play className="w-4 h-4 fill-current ml-0.5" />
        </button>
      </div>
    );
  }

  return (
    <div
      onClick={() => onPlay(game)}
      className={`group relative flex flex-col justify-between ${layout === 'grid' ? 'w-full min-w-0' : 'w-[280px] sm:w-[300px] shrink-0'} h-[380px] sm:h-[400px] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-[#171B24]/10 bg-gradient-to-b from-[#171B24] to-[#0A0D14]`}
    >
      {/* Background illustration image or gradient fallback */}
      <div className={`absolute inset-0 bg-gradient-to-br ${game.colorScheme.gradient} opacity-90 group-hover:scale-105 transition-transform duration-500`} />
      
      {!imgError && (
        <div className="absolute inset-0 opacity-25 mix-blend-overlay">
          <img
            src={imagePath}
            alt={game.title}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            loading="lazy"
          />
        </div>
      )}

      {/* Vignette lighting overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/35 pointer-events-none" />

      {/* Top badges */}
      <div className="relative z-10 p-5 flex items-center justify-between">
        <span className="px-3 py-1 rounded-full text-xs font-medium bg-black/40 backdrop-blur-md text-white border border-white/15">
          {game.category}
        </span>
        {game.rating ? (
          <div className="flex items-center gap-1 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-semibold border border-white/15">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>{game.rating}</span>
          </div>
        ) : (
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-black/40 backdrop-blur-md text-amber-200 border border-white/15 font-semibold">
            {game.difficulty}
          </span>
        )}
      </div>

      {/* Center visual representation / thumbnail */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 text-center">
        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-4 text-white shadow-xl group-hover:scale-105 transition-transform overflow-hidden relative">
          {!imgError ? (
            <img
              src={imagePath}
              alt={game.title}
              onError={() => setImgError(true)}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          ) : (
            <Sparkles className="w-10 h-10 text-white/90" />
          )}
        </div>
        <h3 className="font-serif font-extrabold text-2xl text-white mb-1" style={{ textShadow: "0 2px 3px rgba(0,0,0,1), 0 3px 10px rgba(0,0,0,0.95), 0 0 18px rgba(0,0,0,0.85)" }}>{game.title}</h3>
        <p className="text-[13px] leading-snug text-white font-bold line-clamp-2 max-w-[220px]" style={{ textShadow: "0 2px 3px rgba(0,0,0,1), 0 3px 8px rgba(0,0,0,1), 0 0 14px rgba(0,0,0,0.95)" }}>{game.subtitle}</p>
      </div>

      {/* Footer bar */}
      <div className="relative z-10 p-5 bg-black/50 backdrop-blur-md border-t border-white/10 flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-[10px] text-white/90 uppercase font-semibold">Progress</span>
          <span className="text-xs font-bold text-white font-mono">Level {game.playerLevel}/{game.levelsCount}</span>
        </div>
        <button className="px-4 py-2.5 rounded-xl bg-[#D66B3D] text-white text-xs font-bold flex items-center gap-1.5 shadow-md group-hover:bg-white group-hover:text-[#171B24] transition-colors">
          <Play className="w-3.5 h-3.5 fill-current" />
          <span>Play</span>
        </button>
      </div>
    </div>
  );
};
