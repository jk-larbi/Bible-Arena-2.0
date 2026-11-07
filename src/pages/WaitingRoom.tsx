import { useEffect, useState, useCallback } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { useSession } from '../lib/auth';
import { RoomSharePanel } from '../components/RoomSharePanel';
import { subscribeToRoom, kickPlayerFromRoom, closeRoom } from '../lib/rooms';
import { notifyGameStarted } from '../services/notificationService';
import { getGameById } from '../data/gamesList';
import { useServerOffset, useRoomPhase, useAutoAdvance, RoomState } from '../hooks/useRoomClock';
import { AutoAdvanceBar } from '../components/AutoAdvanceBar';
import { AnswerFeedback, Reveal } from '../components/AnswerFeedback';
import { UserX, XCircle } from 'lucide-react';

type RoomPlayer = {
  id: string;
  room_id: string;
  user_id: string;
  display_name: string;
  is_ready: boolean;
  is_host: boolean;
  score: number;
};

type RoomData = RoomState & {
  code: string;
  host_id: string;
  game_slug: string;
  question_ids?: string[];
  settings?: Record<string, unknown>;
};

type LiveQuestion = {
  id: string;
  question_text: string;
  options: string[];
  explanation?: string;
  reference?: string;
  metadata?: Record<string, any>;
};

function gameInfoLabel(slug: string) {
  return getGameById(slug)?.title || slug;
}

export default function WaitingRoom() {
  const { roomId } = useParams<{ roomId: string }>();
  const nav = useNavigate();
  const { user } = useSession();

  const [room, setRoom] = useState<RoomData | null>(null);
  const [players, setPlayers] = useState<RoomPlayer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [reveal, setReveal] = useState<Reveal | null>(null);
  const [myPick, setMyPick] = useState<string | null>(null);
  const [questions, setQuestions] = useState<LiveQuestion[]>([]);
  const [answerResult, setAnswerResult] = useState<{ is_correct: boolean; marks_awarded: number } | null>(null);
  const [textAnswer, setTextAnswer] = useState('');

  const offset = useServerOffset();
  const { phase, secondsLeft, progress } = useRoomPhase(room, offset);
  useAutoAdvance(room, phase);

  const loadData = useCallback(async () => {
    if (!roomId) return;
    try {
      const { data: roomData, error: roomError } = await supabase
        .from('rooms')
        .select('*')
        .eq('id', roomId)
        .single();

      if (roomError) throw new Error(roomError.message);
      
      const formattedRoom: RoomData = {
        id: roomData.id,
        code: roomData.room_code || roomData.code,
        host_id: roomData.host_id,
        game_slug: roomData.game_id || roomData.game_slug,
        question_ids: roomData.question_ids || [],
        settings: roomData.settings || {},
        status: roomData.status,
        current_question_index: roomData.current_question_index ?? 0,
        question_started_at: roomData.question_started_at ?? null,
        question_duration_seconds: roomData.question_duration_seconds ?? 20,
        reveal_seconds: roomData.reveal_seconds ?? 5
      };
      setRoom(formattedRoom);

      if (formattedRoom.status === 'playing' && formattedRoom.question_ids?.length) {
        const { data: content, error: contentError } = await supabase
          .from('game_content_public')
          .select('id, question_text, options, explanation, reference, metadata')
          .in('id', formattedRoom.question_ids);
        if (contentError) throw new Error(`Could not load this game's questions: ${contentError.message}`);
        const byId = new Map((content || []).map((q: any) => [q.id, q]));
        setQuestions(formattedRoom.question_ids.map((id) => byId.get(id)).filter(Boolean) as LiveQuestion[]);
      }

      const { data: playersData, error: playersError } = await supabase
        .from('room_players')
        .select('*')
        .eq('room_id', roomId)
        .order('created_at', { ascending: true });

      if (playersError) throw new Error(playersError.message);
      setPlayers((playersData as RoomPlayer[]) || []);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  }, [roomId]);

  useEffect(() => {
    loadData();
    if (!roomId) return;
    const unsubscribe = subscribeToRoom(roomId, () => {
      loadData();
    });
    return () => {
      unsubscribe();
    };
  }, [roomId, loadData]);

  // Reveal the server-validated answer only after the shared answer timer ends.
  useEffect(() => {
    if (phase !== 'reveal' || !room) return;
    let cancelled = false;
    const fetchReveal = async () => {
      const { data, error: revealError } = await supabase.rpc('reveal_current_question', { p_room: room.id });
      if (cancelled) return;
      if (revealError || !data?.[0]) {
        setError(revealError?.message || 'The answer explanation is not available yet.');
        return;
      }
      const row = data[0];
      setReveal({
        is_correct: answerResult?.is_correct ?? null,
        correct_answer: row.correct_answer,
        explanation: row.explanation,
        reference: row.reference,
        picked: myPick
      });
    };
    fetchReveal();
    return () => { cancelled = true; };
  }, [phase, room?.current_question_index, room?.id, answerResult, myPick]);

  // Reset myPick on new question
  useEffect(() => {
    if (phase === 'answering') {
      setReveal(null);
      setMyPick(null);
      setAnswerResult(null);
      setTextAnswer('');
    }
  }, [room?.current_question_index, phase]);

  const currentPlayer = players.find(p => p.user_id === user?.id);
  const isHost = room?.host_id === user?.id || currentPlayer?.is_host === true;

  async function handleToggleReady() {
    if (!currentPlayer || busy) return;
    setBusy(true);
    try {
      const { error: err } = await supabase
        .from('room_players')
        .update({ is_ready: !currentPlayer.is_ready })
        .eq('id', currentPlayer.id);
      if (err) throw err;
      await loadData();
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setBusy(false);
    }
  }

  async function handleKickPlayer(playerId: string, playerName: string) {
    if (!roomId || !isHost) return;
    if (!window.confirm(`Are you sure you want to remove ${playerName} from this room?`)) return;
    try {
      await kickPlayerFromRoom(roomId, playerId);
      await loadData();
    } catch (err) {
      setError((err as Error).message);
    }
  }

  async function handleCloseRoom() {
    if (!roomId || !isHost) return;
    if (!window.confirm('Are you sure you want to close this room for all participants?')) return;
    try {
      await closeRoom(roomId);
      nav('/multiplayer');
    } catch (err) {
      setError((err as Error).message);
    }
  }

  async function handleStartGame() {
    if (!roomId || !isHost || busy) return;
    setBusy(true);
    try {
      if (!room) throw new Error('Room details are unavailable.');
      const requestedCount = Number(room.settings?.questionCount || 5);
      const { data: content, error: contentError } = await supabase
        .from('game_content_public')
        .select('id, level, challenge_index')
        .eq('game_slug', room.game_slug)
        .eq('level', 1)
        .order('challenge_index', { ascending: true })
        .limit(Math.min(15, Math.max(1, requestedCount)));
      if (contentError) throw new Error(`Could not load ${gameInfoLabel(room.game_slug)} content: ${contentError.message}`);
      const questionIds = (content || []).map((q: any) => q.id as string);
      if (questionIds.length !== requestedCount) {
        throw new Error(`${gameInfoLabel(room.game_slug)} has only ${questionIds.length} published questions for this room. Publish at least ${requestedCount} questions for Level 1, then try again.`);
      }
      const { error: err } = await supabase.rpc('start_game', {
        p_room: roomId,
        p_question_ids: questionIds
      });
      if (err) throw new Error(err.message);

      // Dispatch notifications to players
      const hostName = currentPlayer?.display_name || 'Host';
      for (const p of players) {
        if (p.user_id && p.user_id !== user?.id) {
          try {
            await notifyGameStarted(p.user_id, hostName, roomId);
          } catch {
            // Non-blocking
          }
        }
      }

      await loadData();
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setBusy(false);
    }
  }

  if (loading) {
    return (
      <main className="mx-auto max-w-xl p-6 text-center text-[#171B24]">
        <div className="py-12">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-[#3156C9] border-t-transparent"></div>
          <p className="mt-4 font-medium text-sm text-[#5A6275]">Loading game room…</p>
        </div>
      </main>
    );
  }

  if (error || !room) {
    return (
      <main className="mx-auto max-w-md p-6 text-center text-[#171B24]">
        <div className="rounded-2xl bg-[#F3EBDD] p-6">
          <h2 className="font-serif text-2xl font-bold text-red-600">Room Error</h2>
          <p className="mt-2 text-sm text-[#5A6275]">{error || 'Room not found'}</p>
          <Link to="/multiplayer" className="mt-6 inline-block rounded-xl bg-[#3156C9] px-5 py-3 font-semibold text-white">
            Back to Multiplayer
          </Link>
        </div>
      </main>
    );
  }

  const gameInfo = getGameById(room.game_slug);
  const currentQ = questions[room.current_question_index];
  const questionTotal = room.question_ids?.length || questions.length;
  const isLastQuestion = questionTotal > 0 && (room.current_question_index + 1) >= questionTotal;

  async function submitAnswer() {
    if (!room || !currentQ || phase !== 'answering' || myPick !== null || busy) return;
    const answer = textAnswer.trim();
    if (!answer) { setError('Enter or select an answer before submitting.'); return; }
    setBusy(true);
    setError(null);
    try {
      const { data, error: submitError } = await supabase.rpc('submit_room_answer', {
        p_room: room.id,
        p_question_id: currentQ.id,
        p_answer: answer
      });
      if (submitError) throw new Error(submitError.message);
      const result = Array.isArray(data) ? data[0] : data;
      if (result?.already_answered) throw new Error('Your answer has already been recorded for this question.');
      setMyPick(answer);
      setAnswerResult({ is_correct: Boolean(result?.is_correct), marks_awarded: Number(result?.marks_awarded || 0) });
      await loadData();
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setBusy(false);
    }
  }

  return (
    <main className="mx-auto max-w-2xl space-y-6 p-6 text-[#171B24]">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#E3D9C6] pb-4">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-[#3156C9]">Multiplayer Room</span>
          <h1 className="font-serif text-3xl font-bold">{gameInfo?.title || 'Scripture Challenge'}</h1>
        </div>
        <Link to="/multiplayer" className="text-sm font-semibold text-[#5A6275] hover:text-[#171B24]">
          ← Exit
        </Link>
      </div>

      {/* Room Share Panel (shown in lobby) */}
      {room.status === 'waiting' && <RoomSharePanel code={room.code} gameTitle={gameInfo?.title} />}

      {/* ACTIVE MULTIPLAYER MATCH VIEW */}
      {room.status === 'playing' && (
        <div className="rounded-3xl bg-white p-8 shadow-xl border border-[#171B24]/10 text-[#171B24]">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D66B3D]">
              Live Arena • Question {room.current_question_index + 1} of {questionTotal}
            </span>
            {phase === 'answering' && (
              <span className="tabular-nums font-mono text-[#D66B3D] font-bold text-lg">⏱ {secondsLeft}s</span>
            )}
          </div>

          {currentQ ? (
            <h2 className="font-serif font-bold text-2xl text-[#171B24] mb-6">{currentQ.question_text}</h2>
          ) : (
            <p className="rounded-xl bg-amber-50 p-4 text-sm text-amber-800">Loading this game's question… If this persists, ask the host to check the published game content.</p>
          )}

          {currentQ?.options?.length ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
              {currentQ.options.map((opt) => {
                const isSelected = textAnswer === opt;
                let style = 'bg-[#F3EBDD] border-[#171B24]/15 hover:bg-[#3156C9] hover:text-white';
                if (isSelected) style = 'bg-[#3156C9] text-white border-[#3156C9] font-bold';
                if (reveal) {
                  if (opt === reveal.correct_answer) style = 'bg-green-600 text-white border-green-600 font-bold';
                  else if (isSelected && !reveal.is_correct) style = 'bg-red-600 text-white border-red-600';
                  else style = 'bg-gray-100 text-gray-400 opacity-50';
                }
                return (
                  <button key={opt} type="button" disabled={phase !== 'answering' || myPick !== null || busy}
                    onClick={() => setTextAnswer(opt)}
                    className={`min-h-[48px] rounded-xl border p-4 text-left font-semibold text-base transition-all cursor-pointer disabled:cursor-default ${style}`}>
                    {opt}
                  </button>
                );
              })}
            </div>
          ) : (
            <div className="mb-4">
              <label className="mb-2 block text-sm font-semibold">Your answer</label>
              <input value={textAnswer} onChange={(e) => setTextAnswer(e.target.value)}
                disabled={phase !== 'answering' || myPick !== null || busy}
                className="w-full rounded-xl border border-[#171B24]/20 p-4" placeholder="Type your answer…" />
            </div>
          )}
          {phase === 'answering' && (
            <button type="button" onClick={submitAnswer}
              disabled={!textAnswer.trim() || myPick !== null || busy || !currentQ}
              className="min-h-[48px] w-full rounded-xl bg-[#3156C9] px-5 font-bold text-white disabled:opacity-50">
              {busy ? 'Submitting…' : myPick !== null ? 'Answer recorded' : 'Submit Answer'}
            </button>
          )}
          {answerResult && (
            <p className="mt-3 text-sm font-semibold" aria-live="polite">
              Answer recorded. {answerResult.marks_awarded} marks awarded.
            </p>
          )}

          {reveal && (
            <div>
              <AnswerFeedback r={reveal} />
              <AutoAdvanceBar progress={progress} secondsLeft={secondsLeft} isLast={isLastQuestion} />
            </div>
          )}
        </div>
      )}

      {/* FINISHED SCREEN */}
      {room.status === 'finished' && (
        <div className="rounded-3xl bg-white p-8 text-center shadow-xl border border-[#171B24]/10 space-y-4">
          <h2 className="font-serif text-3xl font-bold text-[#171B24]">🏆 Match Completed!</h2>
          <p className="text-sm text-[#5A6275]">All rounds finished. Check out the room standings below!</p>
          <button
            onClick={() => nav('/multiplayer')}
            className="min-h-[48px] rounded-xl bg-[#D66B3D] px-6 font-semibold text-white hover:bg-[#c25a2c] transition-colors"
          >
            Return to Multiplayer
          </button>
        </div>
      )}

      {/* Live Players List */}
      <section className="rounded-2xl bg-white p-6 shadow-sm border border-[#E3D9C6]">
        <div className="flex items-center justify-between pb-4 border-b border-[#F3EBDD]">
          <h2 className="font-serif text-xl font-bold">Players in Room ({players.length})</h2>
          <span className="text-xs font-semibold text-[#5A6275] uppercase tracking-wider">
            {players.filter(p => p.is_ready).length}/{players.length} Ready
          </span>
        </div>

        <div className="mt-4 divide-y divide-[#F3EBDD]">
          {players.length === 0 ? (
            <p className="py-4 text-center text-sm text-[#5A6275]">Waiting for players to join…</p>
          ) : (
            players.map((p) => {
              const isSelf = p.user_id === user?.id;
              return (
                <div key={p.id} className="flex items-center justify-between py-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F3EBDD] font-bold text-[#171B24]">
                      {p.display_name.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-base">{p.display_name}</span>
                        {isSelf && (
                          <span className="rounded bg-[#F3EBDD] px-2 py-0.5 text-xs font-semibold text-[#3156C9]">You</span>
                        )}
                        {p.is_host && (
                          <span className="rounded bg-[#D66B3D] px-2 py-0.5 text-xs font-semibold text-white">Host</span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {p.is_ready ? (
                      <span className="inline-flex items-center gap-1 text-sm font-semibold text-green-700 bg-green-50 px-3 py-1 rounded-full border border-green-200">
                        ✓ Ready
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-sm font-medium text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                        • Waiting
                      </span>
                    )}

                    {isHost && !p.is_host && room.status === 'waiting' && (
                      <button
                        onClick={() => handleKickPlayer(p.id, p.display_name)}
                        className="p-1.5 text-gray-400 hover:text-red-600 rounded-lg hover:bg-red-50 transition-colors cursor-pointer"
                        title={`Remove ${p.display_name}`}
                      >
                        <UserX className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Action Controls */}
        {room.status === 'waiting' && (
          <div className="mt-6 flex flex-col gap-3 pt-4 border-t border-[#F3EBDD]">
            {currentPlayer && (
              <button
                onClick={handleToggleReady}
                disabled={busy}
                className={`min-h-[48px] w-full rounded-xl font-semibold transition-colors text-white ${
                  currentPlayer.is_ready ? 'bg-gray-600 hover:bg-gray-700' : 'bg-[#3156C9] hover:bg-[#2544A5]'
                }`}
              >
                {currentPlayer.is_ready ? 'Mark as Not Ready' : 'I am Ready!'}
              </button>
            )}

            {isHost && (
              <div className="space-y-2">
                <button
                  onClick={handleStartGame}
                  disabled={busy}
                  className="min-h-[48px] w-full rounded-xl bg-[#D66B3D] font-semibold text-white shadow hover:bg-[#c25a2c] transition-colors disabled:opacity-50"
                >
                  {busy ? 'Starting Game…' : 'Start Game Now (Host)'}
                </button>

                <button
                  onClick={handleCloseRoom}
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2 text-xs font-bold text-red-600 hover:bg-red-50 rounded-xl transition-colors cursor-pointer"
                >
                  <XCircle className="w-4 h-4" /> Close Room for All
                </button>
              </div>
            )}
          </div>
        )}
      </section>
    </main>
  );
}
