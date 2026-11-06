import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { isValidCode, joinWithCode, normalizeCode } from '../lib/rooms';
import { supabase } from '../lib/supabase';
import { useSession } from '../lib/auth';
import { notifyPlayerJoinedRoom } from '../services/notificationService';
import { getGameById } from '../data/gamesList';
import { Button } from '../components/Button';
import { Gamepad2, Users, AlertCircle, ArrowLeft, Check, Sparkles } from 'lucide-react';

export default function JoinRoom() {
  const { code: urlCode } = useParams<{ code?: string }>();
  const nav = useNavigate();
  const { user } = useSession();

  const [code, setCode] = useState(normalizeCode(urlCode ?? ''));
  const [name, setName] = useState(
    user?.user_metadata?.username || user?.user_metadata?.full_name || ''
  );
  const [roomData, setRoomData] = useState<{
    id: string;
    room_code: string;
    game_id: string;
    host_id: string;
    status: string;
    host_name?: string;
  } | null>(null);
  const [loadingRoom, setLoadingRoom] = useState(false);
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);

  // Auto-fetch room details if code is provided in URL
  useEffect(() => {
    async function fetchRoomDetails() {
      const clean = normalizeCode(code);
      if (!isValidCode(clean)) return;

      setLoadingRoom(true);
      setError('');
      try {
        const { data, error: fetchErr } = await supabase
          .from('rooms')
          .select('id, room_code, game_id, host_id, status')
          .eq('room_code', clean)
          .single();

        if (fetchErr || !data) {
          setError('Room not found or invalid PIN.');
          setRoomData(null);
          return;
        }

        if (data.status !== 'waiting') {
          setError(`This game room is currently ${data.status === 'playing' ? 'in progress' : 'closed'}.`);
        }

        // Fetch host display name
        let hostName = 'A Scholar';
        if (data.host_id) {
          const { data: hostProfile } = await supabase
            .from('profiles')
            .select('full_name, username')
            .eq('id', data.host_id)
            .single();

          if (hostProfile) {
            hostName = hostProfile.full_name || hostProfile.username || 'Host';
          }
        }

        setRoomData({ ...data, host_name: hostName });
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoadingRoom(false);
      }
    }

    if (code.length === 6) {
      fetchRoomDetails();
    }
  }, [code]);

  async function handleSubmit() {
    setError('');
    setBusy(true);
    try {
      const cleanCode = normalizeCode(code);
      const room = await joinWithCode(cleanCode, name);
      
      // Dispatch notification to host
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user?.id && room.host_id && room.host_id !== session.user.id) {
        try {
          await notifyPlayerJoinedRoom(room.host_id, session.user.id, name.trim(), room.id);
        } catch {
          // Non-blocking
        }
      }

      nav(`/room/${room.id}`);
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setBusy(false);
    }
  }

  const gameInfo = roomData ? getGameById(roomData.game_id) : null;

  return (
    <main className="max-w-xl mx-auto px-4 py-12 space-y-6 text-[#171B24]">
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-[#E3D9C6] pb-4">
        <Link
          to="/multiplayer"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#5A6275] hover:text-[#171B24] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Exit to Arenas
        </Link>
        <span className="text-xs font-bold text-[#3156C9] uppercase tracking-wider">
          Multiplayer Invitation
        </span>
      </div>

      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#171B24]/10 shadow-xl space-y-6">
        <div className="text-center space-y-2">
          <div className="w-14 h-14 rounded-2xl bg-[#3156C9] text-white flex items-center justify-center mx-auto shadow-md">
            <Gamepad2 className="w-7 h-7" />
          </div>
          <h1 className="font-serif font-extrabold text-2xl sm:text-3xl text-[#171B24]">
            {gameInfo ? gameInfo.title : 'Join BibleArena Game'}
          </h1>
          {roomData?.host_name && (
            <p className="text-xs sm:text-sm text-[#5A6275] font-medium">
              Hosted by <strong className="text-[#171B24]">{roomData.host_name}</strong>
            </p>
          )}
        </div>

        {loadingRoom ? (
          <div className="p-6 text-center text-xs text-[#5A6275]">
            <div className="inline-block h-6 w-6 animate-spin rounded-full border-2 border-[#3156C9] border-t-transparent mb-2" />
            <p>Verifying room invitation code…</p>
          </div>
        ) : (
          <div className="space-y-4">
            {/* Room Code Field */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#5A6275] mb-1">
                Room PIN Code
              </label>
              <input
                value={code}
                onChange={(e) => setCode(normalizeCode(e.target.value).slice(0, 6))}
                className="w-full rounded-2xl border border-[#D4CEBF] bg-[#F3EBDD] p-3.5 text-center font-mono text-2xl font-bold tracking-[0.25em] text-[#171B24] focus:outline-none focus:ring-2 focus:ring-[#3156C9]"
                autoCapitalize="characters"
                autoComplete="off"
                placeholder="ABC123"
              />
            </div>

            {/* Display Name Field */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#5A6275] mb-1">
                Your Player Display Name
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength={24}
                className="w-full rounded-xl border border-[#D4CEBF] bg-white p-3.5 text-sm font-semibold text-[#171B24] focus:outline-none focus:ring-2 focus:ring-[#3156C9]"
                placeholder="e.g. Scholar Grace"
              />
            </div>

            {error && (
              <div className="p-3.5 rounded-xl bg-red-100 text-red-700 text-xs font-semibold flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <Button
              variant="primary"
              size="lg"
              disabled={busy || !isValidCode(code) || name.trim().length < 2 || roomData?.status === 'playing' || roomData?.status === 'finished'}
              onClick={handleSubmit}
              className="w-full bg-[#D66B3D] hover:bg-[#c25a2c] text-white min-h-[48px] shadow-sm"
            >
              {busy ? 'Joining Room…' : 'Join Game Now'}
            </Button>
          </div>
        )}
      </div>
    </main>
  );
}
