import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getGameById } from '../data/gamesList';
import { BackButton } from '../components/BackButton';
import { ShareButton } from '../components/ShareButton';
import { useSession } from '../lib/auth';
import { supabase, isBackendConfigured } from '../lib/supabase';
import { Play, Sparkles, LogIn } from 'lucide-react';

export default function GameDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const nav = useNavigate();
  const { user } = useSession();
  const [busy, setBusy] = useState(false);

  const game = getGameById(slug || '');

  async function handlePlayAsGuest() {
    if (!game) return;
    setBusy(true);
    try {
      if (!user && isBackendConfigured && supabase) {
        await supabase.auth.signInAnonymously({
          options: { data: { full_name: 'Guest Scholar' } }
        });
      }
      nav(`/game/${game.id}`);
    } catch {
      nav(`/game/${game.id}`);
    } finally {
      setBusy(false);
    }
  }

  if (!game) {
    return (
      <main className="mx-auto max-w-md p-6 text-center text-[#171B24]">
        <div className="rounded-2xl bg-[#F3EBDD] p-6 border border-[#E3D9C6]">
          <h2 className="font-serif text-2xl font-bold text-red-600">Game Not Found</h2>
          <p className="mt-2 text-sm text-[#5A6275]">We couldn't find a game with slug "{slug}".</p>
          <div className="mt-4">
            <BackButton fallback="/" />
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-3xl p-6 text-[#171B24] space-y-6">
      <div className="flex items-center justify-between">
        <BackButton fallback="/" />
        <ShareButton
          path={`/games/${game.id}`}
          title={game.title}
          text={`Try ${game.title} on BibleArena!`}
        />
      </div>

      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-[#171B24]/10 text-center relative overflow-hidden">
        <div className="h-48 sm:h-64 rounded-2xl overflow-hidden mb-6 relative bg-[#171B24]">
          <img
            src={`/assets/games/${game.imageFile}`}
            alt={game.title}
            className="w-full h-full object-cover object-center"
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/assets/scripture-challenge-hero.jpg';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
            <div className="text-left text-white">
              <span className="px-3 py-1 rounded-full bg-[#D66B3D] text-xs font-bold uppercase tracking-wider">
                {game.category} • {game.difficulty}
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl font-extrabold mt-2">{game.title}</h1>
            </div>
          </div>
        </div>

        <p className="text-base sm:text-lg text-[#171B24]/80 mb-6 leading-relaxed max-w-xl mx-auto">
          {game.description}
        </p>

        <div className="bg-[#F3EBDD] p-4 rounded-2xl mb-8 flex flex-wrap items-center justify-around text-center text-xs font-semibold text-[#171B24]">
          <div>
            <span className="block text-[10px] uppercase text-[#5A6275]">Ladder</span>
            <strong className="text-sm font-bold text-[#D66B3D]">{game.levelsCount} Levels</strong>
          </div>
          <div>
            <span className="block text-[10px] uppercase text-[#5A6275]">Starting State</span>
            <strong className="text-sm font-bold text-emerald-700">Level 1 Unlocked</strong>
          </div>
          <div>
            <span className="block text-[10px] uppercase text-[#5A6275]">Category</span>
            <strong className="text-sm font-bold text-[#3156C9]">{game.category}</strong>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={handlePlayAsGuest}
            disabled={busy}
            className="min-h-[48px] px-8 rounded-xl bg-[#D66B3D] font-semibold text-white shadow-md hover:bg-[#c25a2c] transition-colors cursor-pointer flex items-center justify-center gap-2"
          >
            <Play className="w-4 h-4 fill-white" />
            <span>{user ? 'Play Game' : 'Play as Guest'}</span>
          </button>

          {!user && (
            <Link
              to="/login"
              className="min-h-[48px] px-6 rounded-xl border border-[#D4CEBF] bg-white font-semibold text-[#171B24] hover:bg-[#F3EBDD] transition-colors flex items-center justify-center gap-2"
            >
              <LogIn className="w-4 h-4 text-[#3156C9]" />
              <span>Sign In / Register</span>
            </Link>
          )}
        </div>
      </div>
    </main>
  );
}
