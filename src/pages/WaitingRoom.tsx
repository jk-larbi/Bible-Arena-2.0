import { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { useSession } from '../lib/auth';
import { RoomSharePanel } from '../components/RoomSharePanel';
import {
  kickPlayerFromRoom,
  closeRoom,
  createRoom,
  submitRoomAnswer,
  advanceRoomQuestion,
  finishRoomSession,
  startRoomBoard,
} from '../lib/rooms';
import { notifyGameStarted } from '../services/notificationService';
import { getGameById } from '../data/gamesList';
import { getLevelChallenges } from '../lib/levels';
import type { ChallengeItem } from '../data/bibleContentBank';
import { useAutoAdvance } from '../hooks/useRoomClock';
import { useMultiplayerSync, SyncPlayer } from '../hooks/useMultiplayerSync';
import RoomBoardPanel from '../components/RoomBoardPanel';
import { AutoAdvanceBar } from '../components/AutoAdvanceBar';
import { AnswerFeedback, Reveal } from '../components/AnswerFeedback';
import {
  UserX,
  XCircle,
  Trophy,
  ArrowRight,
  ArrowUp,
  ArrowDown,
  RotateCcw,
  CheckCircle2,
  Clock,
  Sparkles,
} from 'lucide-react';

export default function WaitingRoom() {
  const { roomId } = useParams<{ roomId: string }>();
  const nav = useNavigate();
  const { user } = useSession();

  const {
    room,
    players,
    phase,
    secondsLeft,
    progress,
    loading,
    error: syncError,
    isHost,
    currentPlayer,
    refetch,
  } = useMultiplayerSync(roomId);

  const [challenges, setChallenges] = useState<ChallengeItem[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [rematchBusy, setRematchBusy] = useState(false);
  const [reveal, setReveal] = useState<Reveal | null>(null);
  const [myPick, setMyPick] = useState<string | null>(null);

  // Mechanics state for active multiplayer round
  const [scramblePicked, setScramblePicked] = useState<number[]>([]);
  const [versePicked, setVersePicked] = useState<number[]>([]);
  const [timelineOrder, setTimelineOrder] = useState<string[]>([]);
  const [matchSelectedLeft, setMatchSelectedLeft] = useState<string | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<Record<string, string>>({});

  useAutoAdvance(room, phase);

  // Load challenges whenever room's selected game is identified
  useEffect(() => {
    if (room?.game_slug) {
      getLevelChallenges(room.game_slug, 1)
        .then(setChallenges)
        .catch((e) => setError(e.message));
    }
  }, [room?.game_slug]);

  const currentChallenge: ChallengeItem | undefined =
    challenges[room?.current_question_index ?? 0] || challenges[0];

  const sharedBoardType = room?.game_slug === 'scripture-scramble' || room?.game_slug === 'bible-crossword' ||
    room?.game_slug === 'bible-word-search' || room?.game_slug === 'verse-builder' ||
    room?.game_slug === 'complete-the-scripture' || room?.game_slug === 'complete-scripture';


  // Reset interactive challenge state when question changes
  useEffect(() => {
    if (phase === 'answering') {
      setReveal(null);
      setMyPick(null);
      setScramblePicked([]);
      setVersePicked([]);
      setMatchSelectedLeft(null);
      setMatchedPairs({});
      if (currentChallenge) {
        if (room?.game_slug === 'bible-timeline' || room?.game_slug === 'bible-puzzles') {
          setTimelineOrder([...currentChallenge.options]);
        }
      }
    }
  }, [room?.current_question_index, phase, currentChallenge, room?.game_slug]);

  // Reveal answer when phase flips to 'reveal'
  useEffect(() => {
    if (phase !== 'reveal' || !room || !currentChallenge) return;

    const fetchReveal = async () => {
      try {
        const { data } = await supabase.rpc('reveal_current_question', { p_room: room.id });
        if (data?.[0]) {
          const row = data[0];
          const isCorrect = myPick !== null ? myPick.trim().toLowerCase() === row.correct_answer.trim().toLowerCase() : null;
          setReveal({
            is_correct: isCorrect,
            correct_answer: row.correct_answer,
            explanation: row.explanation || currentChallenge.explanation,
            reference: row.reference || currentChallenge.reference,
            picked: myPick,
            marks_awarded: isCorrect ? 10 : 0,
            is_new_marks: false,
          });
          return;
        }
      } catch {
        // Fallthrough to local challenge
      }

      const isCorrect = myPick !== null ? myPick.trim().toLowerCase() === currentChallenge.correct_answer.trim().toLowerCase() : null;
      setReveal({
        is_correct: isCorrect,
        correct_answer: currentChallenge.correct_answer,
        explanation: currentChallenge.explanation,
        reference: currentChallenge.reference,
        picked: myPick,
        marks_awarded: isCorrect ? 10 : 0,
        is_new_marks: false,
      });
    };

    fetchReveal();
  }, [phase, room?.current_question_index, room, currentChallenge, myPick]);

  const isLastQuestion = Boolean(
    room && challenges.length > 0 && room.current_question_index + 1 >= challenges.length
  );

  async function handleToggleReady() {
    if (!currentPlayer || busy) return;
    setBusy(true);
    try {
      const { error: err } = await supabase
        .from('room_players')
        .update({ is_ready: !currentPlayer.is_ready })
        .eq('id', currentPlayer.id);
      if (err) throw err;
      await refetch();
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
      await refetch();
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

  async function handleRematch() {
    if (!isHost || !room || rematchBusy) return;
    setRematchBusy(true);
    setError(null);
    try {
      const displayName = currentPlayer?.display_name
        || user?.user_metadata?.username
        || user?.user_metadata?.full_name
        || user?.email?.split('@')[0]
        || 'Host';
      const nextRoom = await createRoom(room.game_slug, displayName);
      nav(`/room/${nextRoom.id}`);
    } catch (err) {
      setError((err as Error).message || 'A new rematch room could not be created.');
    } finally {
      setRematchBusy(false);
    }
  }

  async function handleStartGame() {
    if (!roomId || !isHost || busy) return;
    setBusy(true);
    setError(null);
    try {
      if (challenges.length !== 10) {
        throw new Error(`This game has ${challenges.length} of 10 questions loaded. Please refresh the room and try again.`);
      }

      const questionIds = challenges.map((q) => q.id);
      const { error: startError } = await supabase.rpc('start_game', {
        p_room: roomId,
        p_question_ids: questionIds,
      });
      if (startError) throw new Error(startError.message);

      // Initialize a server-owned shared board for the five board-style game formats.
      if (sharedBoardType && room && currentChallenge) {
        const privateStates: Record<string, { tiles: string[] }> = {};
        for (const player of players) {
          if (!player.user_id) continue;
          const tiles = [...currentChallenge.options];
          for (let i = tiles.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [tiles[i], tiles[j]] = [tiles[j], tiles[i]];
          }
          privateStates[player.user_id] = { tiles };
        }
        const boardType = room.game_slug === 'scripture-scramble' ? 'scramble'
          : room.game_slug === 'bible-crossword' ? 'crossword'
          : room.game_slug === 'bible-word-search' ? 'word_search'
          : room.game_slug === 'verse-builder' ? 'verse_builder'
          : 'complete_scripture';
        await startRoomBoard(room.id, boardType, {
          question_id: currentChallenge.id,
          prompt: currentChallenge.question_text,
          board_revision: 1,
          last_move: null,
        }, privateStates);
      }

      // Notify other players after the database confirms the game has started.
      const hostName = currentPlayer?.display_name || 'Host';
      for (const p of players) {
        if (p.user_id && p.user_id !== user?.id) {
          try {
            await notifyGameStarted(p.user_id, hostName, roomId);
          } catch {
            // Notifications are non-blocking; room state is already authoritative.
          }
        }
      }

      await refetch();
    } catch (err) {
      setError((err as Error).message || 'The game could not be started. Please try again.');
    } finally {
      setBusy(false);
    }
  }

  async function handleAnswerSubmission(picked: string) {
    if (!room || !currentChallenge || phase !== 'answering' || myPick !== null) return;
    setMyPick(picked);
    try {
      await submitRoomAnswer(room.id, currentChallenge.id, picked, 0, currentChallenge);
      await refetch();
    } catch (err) {
      console.warn('Answer submit notice:', err);
    }
  }

  async function handleHostAdvance() {
    if (!room || !isHost || busy) return;
    setBusy(true);
    try {
      if (isLastQuestion) {
        await finishRoomSession(room.id);
      } else {
        await advanceRoomQuestion(room.id, room.current_question_index);
      }
      await refetch();
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

  const displayError = error || syncError;
  if (displayError || !room) {
    return (
      <main className="mx-auto max-w-md p-6 text-center text-[#171B24]">
        <div className="rounded-2xl bg-[#F3EBDD] p-6 border border-[#E3D9C6]">
          <h2 className="font-serif text-2xl font-bold text-red-600">Room Error</h2>
          <p className="mt-2 text-sm text-[#5A6275]">{displayError || 'Room not found'}</p>
          <Link
            to="/multiplayer"
            className="mt-6 inline-block rounded-xl bg-[#3156C9] px-5 py-3 font-semibold text-white"
          >
            Back to Multiplayer
          </Link>
        </div>
      </main>
    );
  }

  const gameInfo = getGameById(room.game_slug) || getGameById('scripture-challenge');
  const sortedPlayers = [...players].sort((a, b) => (b.score || 0) - (a.score || 0));

  // Render mechanic-specific question input
  const renderInteractiveMechanic = () => {
    if (!currentChallenge) return null;
    const isAnswering = phase === 'answering' && myPick === null;

    // 1. Scripture Scramble
    if (room.game_slug === 'scripture-scramble') {
      const letters = currentChallenge.options;
      const builtWord = scramblePicked.map((idx) => letters[idx]).join('');
      return (
        <div className="space-y-4">
          <div className="min-h-[56px] p-3 rounded-2xl bg-[#F3EBDD] border-2 border-dashed border-[#171B24]/20 flex flex-wrap items-center justify-center gap-2">
            {scramblePicked.length === 0 ? (
              <span className="text-xs text-[#171B24]/60">Tap letters below in sequence to unscramble the word</span>
            ) : (
              scramblePicked.map((letterIdx, pos) => (
                <button
                  key={`sp-${pos}`}
                  disabled={!isAnswering}
                  onClick={() => setScramblePicked(scramblePicked.filter((_, i) => i !== pos))}
                  className="w-10 h-10 rounded-xl bg-[#171B24] text-white font-serif font-bold text-base flex items-center justify-center shadow"
                >
                  {letters[letterIdx]}
                </button>
              ))
            )}
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {letters.map((char, idx) => {
              const used = scramblePicked.includes(idx);
              return (
                <button
                  key={`pool-${idx}`}
                  disabled={used || !isAnswering}
                  onClick={() => {
                    const next = [...scramblePicked, idx];
                    setScramblePicked(next);
                    const candidate = next.map((i) => letters[i]).join('');
                    if (candidate.length === letters.length) {
                      handleAnswerSubmission(candidate);
                    }
                  }}
                  className={`w-10 h-10 rounded-xl font-serif font-bold text-base flex items-center justify-center border transition-all ${
                    used
                      ? 'bg-stone-200 text-stone-400 opacity-40 cursor-not-allowed'
                      : 'bg-white text-[#171B24] border-[#171B24]/20 hover:bg-[#D66B3D] hover:text-white shadow-xs'
                  }`}
                >
                  {char}
                </button>
              );
            })}
          </div>

          <div className="flex justify-center gap-2 pt-2">
            <button
              disabled={!isAnswering || scramblePicked.length === 0}
              onClick={() => setScramblePicked([])}
              className="px-3 py-2 rounded-xl border border-[#171B24]/20 text-xs font-semibold hover:bg-[#F3EBDD] inline-flex items-center gap-1 cursor-pointer disabled:opacity-40"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Clear
            </button>
            <button
              disabled={!isAnswering || builtWord.length === 0}
              onClick={() => handleAnswerSubmission(builtWord)}
              className="px-5 py-2 rounded-xl bg-[#D66B3D] text-white text-xs font-bold hover:bg-[#c25a2c] cursor-pointer disabled:opacity-40"
            >
              Submit Word
            </button>
          </div>
        </div>
      );
    }

    // 2. Verse Builder
    if (room.game_slug === 'verse-builder') {
      const words = currentChallenge.options;
      const builtSentence = versePicked.map((idx) => words[idx]).join(' ');
      return (
        <div className="space-y-4">
          <div className="min-h-[72px] p-3 rounded-2xl bg-[#F3EBDD] border-2 border-dashed border-[#171B24]/20 flex flex-wrap items-center justify-center gap-2">
            {versePicked.length === 0 ? (
              <span className="text-xs text-[#171B24]/60">Tap word tiles below in sequence to assemble the verse</span>
            ) : (
              versePicked.map((wIdx, pos) => (
                <button
                  key={`vp-${pos}`}
                  disabled={!isAnswering}
                  onClick={() => setVersePicked(versePicked.filter((_, i) => i !== pos))}
                  className="px-3 py-1.5 rounded-xl bg-[#171B24] text-white text-xs font-semibold shadow"
                >
                  {words[wIdx]}
                </button>
              ))
            )}
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {words.map((w, idx) => {
              const used = versePicked.includes(idx);
              return (
                <button
                  key={`wpool-${idx}`}
                  disabled={used || !isAnswering}
                  onClick={() => {
                    const next = [...versePicked, idx];
                    setVersePicked(next);
                    if (next.length === words.length) {
                      handleAnswerSubmission(next.map((i) => words[i]).join(' '));
                    }
                  }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
                    used
                      ? 'bg-stone-200 text-stone-400 opacity-40 cursor-not-allowed'
                      : 'bg-white text-[#171B24] border-[#171B24]/20 hover:bg-[#3156C9] hover:text-white shadow-xs'
                  }`}
                >
                  {w}
                </button>
              );
            })}
          </div>

          <div className="flex justify-center gap-2 pt-2">
            <button
              disabled={!isAnswering || versePicked.length === 0}
              onClick={() => setVersePicked([])}
              className="px-3 py-2 rounded-xl border border-[#171B24]/20 text-xs font-semibold hover:bg-[#F3EBDD] inline-flex items-center gap-1 cursor-pointer disabled:opacity-40"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Clear
            </button>
            <button
              disabled={!isAnswering || builtSentence.length === 0}
              onClick={() => handleAnswerSubmission(builtSentence)}
              className="px-5 py-2 rounded-xl bg-[#3156C9] text-white text-xs font-bold hover:bg-[#2544A5] cursor-pointer disabled:opacity-40"
            >
              Submit Verse
            </button>
          </div>
        </div>
      );
    }

    // 3. Bible Timeline & Bible Puzzles (Ordering)
    if (room.game_slug === 'bible-timeline' || room.game_slug === 'bible-puzzles') {
      const items = timelineOrder.length > 0 ? timelineOrder : currentChallenge.options;
      const moveItem = (index: number, direction: 'up' | 'down') => {
        const nextIdx = direction === 'up' ? index - 1 : index + 1;
        if (nextIdx < 0 || nextIdx >= items.length) return;
        const copy = [...items];
        const [moved] = copy.splice(index, 1);
        copy.splice(nextIdx, 0, moved);
        setTimelineOrder(copy);
      };

      return (
        <div className="space-y-4">
          <div className="space-y-2">
            {items.map((item, idx) => (
              <div
                key={`tl-${idx}-${item}`}
                className="flex items-center justify-between p-3 rounded-xl bg-[#F3EBDD] border border-[#171B24]/15"
              >
                <div className="flex items-center gap-2.5">
                  <span className="w-6 h-6 rounded-lg bg-[#171B24] text-white font-mono font-bold text-xs flex items-center justify-center">
                    {idx + 1}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold">{item}</span>
                </div>
                {isAnswering && (
                  <div className="flex items-center gap-1">
                    <button
                      disabled={idx === 0}
                      onClick={() => moveItem(idx, 'up')}
                      className="p-1 rounded-lg bg-white border border-[#171B24]/10 hover:bg-[#171B24] hover:text-white disabled:opacity-30"
                    >
                      <ArrowUp className="w-3.5 h-3.5" />
                    </button>
                    <button
                      disabled={idx === items.length - 1}
                      onClick={() => moveItem(idx, 'down')}
                      className="p-1 rounded-lg bg-white border border-[#171B24]/10 hover:bg-[#171B24] hover:text-white disabled:opacity-30"
                    >
                      <ArrowDown className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex justify-center pt-2">
            <button
              disabled={!isAnswering}
              onClick={() => handleAnswerSubmission(items.join(' -> '))}
              className="px-6 py-2.5 rounded-xl bg-[#D66B3D] text-white text-xs font-bold hover:bg-[#c25a2c] cursor-pointer disabled:opacity-40"
            >
              Lock in Chronological Order
            </button>
          </div>
        </div>
      );
    }

    // 4. Default Multiple-Choice Layout for remaining games
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
        {currentChallenge.options.map((opt) => {
          const isSelected = myPick === opt;
          let style = 'bg-[#F3EBDD] border-[#171B24]/15 hover:bg-[#3156C9] hover:text-white';
          if (isSelected) style = 'bg-[#3156C9] text-white border-[#3156C9] font-bold';
          if (reveal) {
            if (opt.toLowerCase().trim() === reveal.correct_answer.toLowerCase().trim()) {
              style = 'bg-green-600 text-white border-green-600 font-bold';
            } else if (isSelected && !reveal.is_correct) {
              style = 'bg-red-600 text-white border-red-600';
            } else {
              style = 'bg-gray-100 text-gray-400 opacity-50';
            }
          }

          return (
            <button
              key={opt}
              disabled={!isAnswering}
              onClick={() => handleAnswerSubmission(opt)}
              className={`min-h-[48px] rounded-xl border p-4 text-left font-semibold text-sm sm:text-base transition-all cursor-pointer disabled:cursor-default ${style}`}
            >
              {opt}
            </button>
          );
        })}
      </div>
    );
  };

  return (
    <main className="mx-auto max-w-3xl space-y-6 p-4 sm:p-6 text-[#171B24]">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#E3D9C6] pb-4">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-[#3156C9]">
            Live Multiplayer Arena
          </span>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold">{gameInfo?.title}</h1>
          {gameInfo?.imageFile && (
            <img
              src={`${import.meta.env.BASE_URL}assets/games/${gameInfo.imageFile.replace(/\\.(png|jpe?g)$/i, '.webp')}`}
              alt={`${gameInfo.title} game artwork`}
              className="mt-2 h-16 w-28 rounded-xl object-cover border border-[#E3D9C6] shadow-sm"
              onError={(event) => { event.currentTarget.src = `${import.meta.env.BASE_URL}assets/games/${gameInfo.imageFile}`; }}
            />
          )}
        </div>
        <Link to="/multiplayer" className="text-sm font-semibold text-[#5A6275] hover:text-[#171B24]">
          ← Exit
        </Link>
      </div>

      {/* Room Share Panel (shown in lobby) */}
      {room.status === 'waiting' && <RoomSharePanel code={room.code} gameTitle={gameInfo?.title} />}

      {/* ACTIVE MULTIPLAYER MATCH VIEW */}
      {room.status === 'playing' && currentChallenge && (
        <div className="rounded-3xl bg-white p-6 sm:p-8 shadow-xl border border-[#171B24]/10 text-[#171B24] space-y-6">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D66B3D]">
              Question {room.current_question_index + 1} of {challenges.length}
            </span>
            {phase === 'answering' ? (
              <span className="tabular-nums font-mono text-[#D66B3D] font-bold text-base sm:text-lg flex items-center gap-1">
                <Clock className="w-4 h-4" /> {secondsLeft}s
              </span>
            ) : (
              <span className="text-xs font-bold text-[#3156C9] uppercase tracking-wider">
                Round Revealing…
              </span>
            )}
          </div>

          <div>
            <h2 className="font-serif font-bold text-xl sm:text-2xl text-[#171B24] leading-snug">
              {currentChallenge.question_text}
            </h2>
          </div>

          {/* Interactive Mechanic */}
          {sharedBoardType && roomId && currentChallenge ? <RoomBoardPanel roomId={roomId} gameSlug={room.game_slug} challenge={currentChallenge} players={players} isHost={isHost} /> : renderInteractiveMechanic()}

          {/* Submission status banner */}
          {phase === 'answering' && myPick !== null && (
            <div className="p-3 bg-emerald-50 text-emerald-800 rounded-xl border border-emerald-200 text-xs font-semibold flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Answer locked in ({myPick}). Waiting for round reveal…</span>
            </div>
          )}

          {/* Answer Feedback on Reveal */}
          {reveal && (
            <div className="space-y-4">
              <AnswerFeedback r={reveal} />
              <AutoAdvanceBar
                progress={progress}
                secondsLeft={secondsLeft}
                isLast={isLastQuestion}
              />
            </div>
          )}

          {/* Host Next Question Control */}
          {isHost && (
            <div className="pt-4 border-t border-[#F3EBDD] flex justify-end">
              <button
                onClick={handleHostAdvance}
                disabled={busy}
                className="px-5 py-2.5 rounded-xl bg-[#171B24] text-white text-xs font-bold hover:bg-[#2b3140] inline-flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
              >
                <span>{isLastQuestion ? 'Complete Match (Host)' : 'Advance Next Round (Host)'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>
      )}

      {/* FINISHED SCREEN */}
      {room.status === 'finished' && (
        <div className="rounded-3xl bg-white p-8 text-center shadow-xl border border-[#171B24]/10 space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-[#D66B3D] text-white flex items-center justify-center mx-auto shadow-md">
            <Trophy className="w-8 h-8" />
          </div>
          <div>
            <h2 className="font-serif text-3xl font-extrabold text-[#171B24]">Match Finished!</h2>
            <p className="text-sm text-[#5A6275] mt-1">
              Outstanding effort across all {challenges.length} rounds of {gameInfo?.title}.
            </p>
          </div>

          {sortedPlayers.length > 0 && (
            <div className="max-w-md mx-auto p-4 rounded-2xl bg-[#F3EBDD] border border-[#171B24]/10 text-left space-y-2">
              <p className="text-xs font-extrabold uppercase tracking-widest text-[#5A6275]">
                Final Arena Standings
              </p>
              {sortedPlayers.map((p, idx) => (
                <div
                  key={`podium-${p.id}`}
                  className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-[#171B24]/10"
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      className={`w-6 h-6 rounded-lg font-bold text-xs flex items-center justify-center ${
                        idx === 0
                          ? 'bg-[#D66B3D] text-white'
                          : idx === 1
                          ? 'bg-stone-300 text-[#171B24]'
                          : 'bg-[#F3EBDD] text-[#5A6275]'
                      }`}
                    >
                      #{idx + 1}
                    </span>
                    <span className="font-semibold text-sm">{p.display_name}</span>
                  </div>
                  <span className="font-mono font-bold text-sm text-[#3156C9]">
                    {p.score || 0} marks
                  </span>
                </div>
              ))}
            </div>
          )}

          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            {isHost && (
              <button
                type="button"
                disabled={rematchBusy}
                onClick={handleRematch}
                className="min-h-[48px] rounded-xl bg-[#D66B3D] px-6 font-semibold text-white hover:bg-[#c25a2c] transition-colors disabled:opacity-50"
              >
                {rematchBusy ? 'Creating Rematch…' : 'Start a Rematch'}
              </button>
            )}
            <button
              onClick={() => nav('/multiplayer')}
              className="min-h-[48px] rounded-xl border border-[#171B24]/15 bg-white px-6 font-semibold text-[#171B24] hover:bg-[#F3EBDD] transition-colors"
            >
              Return to Multiplayer
            </button>
          </div>
          {isHost && <p className="text-xs text-[#5A6275]">A fresh room PIN and QR code will be created so everyone can join the next match.</p>}
        </div>
      )}

      {/* Live Players List & Standings */}
      <section className="rounded-2xl bg-white p-6 shadow-sm border border-[#E3D9C6]">
        <div className="flex items-center justify-between pb-4 border-b border-[#F3EBDD]">
          <div>
            <h2 className="font-serif text-xl font-bold">
              {room.status === 'playing' ? 'Live Room Leaderboard' : `Players in Room (${players.length})`}
            </h2>
            <p className="text-xs text-[#5A6275]">
              {room.status === 'waiting'
                ? `${players.filter((p) => p.is_ready).length}/${players.length} Ready`
                : 'Scoring: +10 marks per correct answer'}
            </p>
          </div>
        </div>

        <div className="mt-4 divide-y divide-[#F3EBDD]">
          {sortedPlayers.length === 0 ? (
            <p className="py-4 text-center text-sm text-[#5A6275]">Waiting for players to join…</p>
          ) : (
            sortedPlayers.map((p, idx) => {
              const isSelf = p.user_id === user?.id;
              return (
                <div key={p.id} className="flex items-center justify-between py-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F3EBDD] font-bold text-xs text-[#171B24]">
                      {idx + 1}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-sm sm:text-base">{p.display_name}</span>
                        {isSelf && (
                          <span className="rounded bg-[#F3EBDD] px-1.5 py-0.5 text-[10px] font-bold text-[#3156C9]">
                            You
                          </span>
                        )}
                        {p.is_host && (
                          <span className="rounded bg-[#D66B3D] px-1.5 py-0.5 text-[10px] font-bold text-white">
                            Host
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="font-mono font-bold text-sm text-[#171B24]">
                      {p.score || 0} marks
                    </span>

                    {room.status === 'waiting' && (
                      p.is_ready ? (
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-green-700 bg-green-50 px-2.5 py-1 rounded-full border border-green-200">
                          ✓ Ready
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-xs font-medium text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                          • Waiting
                        </span>
                      )
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

        {/* Action Controls for Waiting Room */}
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
                <div className="rounded-xl border border-[#3156C9]/15 bg-[#3156C9]/5 p-3 text-xs text-[#5A6275]">
                  <strong className="text-[#171B24]">{players.filter((p) => p.is_ready).length} of {players.length}</strong> players ready.
                  {players.length < 2 ? ' Invite at least one other player to begin.' : players.some((p) => !p.is_ready) ? ' Waiting for everyone to mark themselves ready.' : ' Everyone is ready. Let the battle begin!'}
                </div>
                <button
                  onClick={handleStartGame}
                  disabled={busy || players.length < 2 || players.some((p) => !p.is_ready)}
                  className="min-h-[48px] w-full rounded-xl bg-[#D66B3D] font-semibold text-white shadow hover:bg-[#c25a2c] transition-colors disabled:opacity-50"
                >
                  {busy ? 'Starting Game…' : players.length < 2 ? 'Waiting for Players…' : players.some((p) => !p.is_ready) ? 'Waiting for Everyone to Be Ready…' : `Start ${gameInfo?.title || 'Game'} (Host)`}
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
