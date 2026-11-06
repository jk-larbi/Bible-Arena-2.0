import React from 'react';
import { Play, Users, Trophy, ArrowRight } from 'lucide-react';

interface HeroBannerProps {
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  type?: 'featured' | 'multiplayer';
  onAction: () => void;
  bgGradient: string;
  bgImage?: string;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  title,
  subtitle,
  description,
  badge,
  type = 'featured',
  onAction,
  bgGradient,
  bgImage
}) => {
  return (
    <div className={`relative rounded-3xl overflow-hidden p-8 md:p-10 flex flex-col justify-between shadow-lg text-white bg-gradient-to-br ${bgGradient} min-h-[320px] md:min-h-[360px] flex-1 cursor-pointer group border border-white/10`} onClick={onAction}>
      
      {/* Background Image if provided */}
      {bgImage && (
        <div className="absolute inset-0">
          <img
            src={bgImage}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />
        </div>
      )}

      {/* Decorative background aura */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none group-hover:scale-110 transition-transform duration-700" />
      
      {/* Header Badge */}
      <div className="relative z-10 flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-black/40 backdrop-blur-md border border-white/20">
          {type === 'multiplayer' ? <Users className="w-3.5 h-3.5" /> : <Trophy className="w-3.5 h-3.5" />}
          {badge}
        </span>
        <span className="text-xs text-white/90 font-medium tracking-wide uppercase px-2.5 py-1 rounded-full bg-black/30 backdrop-blur-md border border-white/10">BibleArena 2.0</span>
      </div>

      {/* Main Content */}
      <div className="relative z-10 my-6">
        <span className="text-xs md:text-sm font-semibold tracking-wider text-amber-300 uppercase mb-1 block drop-shadow-sm">
          {subtitle}
        </span>
        <h2 className="font-serif font-extrabold text-3xl md:text-4xl text-white mb-3 tracking-tight drop-shadow-md">
          {title}
        </h2>
        <p className="text-sm md:text-base text-white/90 max-w-lg line-clamp-2 leading-relaxed drop-shadow-sm">
          {description}
        </p>
      </div>

      {/* Action Button */}
      <div className="relative z-10 flex items-center gap-4">
        <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-[#171B24] font-bold text-sm shadow-lg group-hover:bg-[#D66B3D] group-hover:text-white transition-all">
          {type === 'multiplayer' ? <Users className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
          <span>{type === 'multiplayer' ? 'Join Live Room' : 'Play Now'}</span>
          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};
