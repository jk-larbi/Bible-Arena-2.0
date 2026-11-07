import { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { useSession } from '../lib/auth';
import { RoomSharePanel } from '../components/RoomSharePanel';
import {
  kickPlayerFromRoom,
  closeRoom,
  submitRoomAnswer,
  advanceRoomQuestion,
} from '../lib/rooms';
import { notifyGameStarted } from '../services/notificationService';
import { getGameById } from '../data/gamesList';
import { getLevelChallenges } from '../lib/levels';
import type { ChallengeItem } from '../data/bibleContentBank';
import { useAutoAdvance } from '../hooks/useRoomClock';
import { useMultiplayerSync, SyncPlayer } from '../hooks/useMultiplayerSync';
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
  const [reveal, setReveal] = useState<Reveal | null>(null);
  const [myPick, setMyPick] = useState<string | null>(null);

  // Mechanics state for active multiplayer round
  const [scramblePicked, setScramblePicked] = useState<number[]>([]);
  const [versePicked, setVersePicked] = useState<number[]>([]);
  const [timelineOrder, setTimelineOrder] = useState<string[]>([]);
  const [matchSelectedLeft, setMatchSelectedLeft] = useState<string | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<Record<string, string>>({});
  const [wordSearchFound, setWordSearchFound] = useState<string[]>([]);
  const [wordSearchSelection, setWordSearchSelection] = useState<{ row: number; col: number }[]>([]);
  const [crosswordAcross, setCrosswordAcross] = useState('');
  const [crosswordDown, setCrosswordDown] = useState('');
  const [memoryFlipped, setMemoryFlipped] = useState<number[]>([]);
  const [memorySolved, setMemorySolved] = useState<number[]>([]);
  const [memoryCards, setMemoryCards] = useState<{ id: number; text: string; pairKey: string }[]>([]);

  useAutoAdvance(room, phase);

  // Load challenges whenever room's selected game is identified
  useEffect(() => {
    if (room?.game_slug) {
      const requestedCount = Math.min(50, Math.max(1, Number(room.settings?.questionCount) || 10));
      const levelsNeeded = Math.ceil(requestedCount / 10);
      const firstLevel = room.settings?.difficulty === 'hard' ? 26 : room.settings?.difficulty === 'medium' ? 11 : 1;
      Promise.all(Array.from({ length: levelsNeeded }, (_, index) => getLevelChallenges(room.game_slug, firstLevel + index)))
        .then((sets) => setChallenges(sets.flat().slice(0, requestedCount)))
        .catch((e) => setError(e.message));
    }
  }, [room?.game_slug]);

  const currentChallenge: ChallengeItem | undefined =
    challenges[room?.current_question_index ?? 0] || challenges[0];

  // Reset interactive challenge state when question changes
  useEffect(() => {
    if (phase === 'answering') {
      setReveal(null);
      setMyPick(null);
      setScramblePicked([]);
      setVersePicked([]);
      setMatchSelectedLeft(null);
      setMatchedPairs({});
      setWordSearchFound([]);
      setWordSearchSelection([]);
      setCrosswordAcross('');
      setCrosswordDown('');
      setMemoryFlipped([]);
      setMemorySolved([]);
      setMemoryCards([]);
      if (currentChallenge) {
        if (room?.game_slug === 'bible-timeline' || room?.game_slug === 'bible-puzzles') {
          setTimelineOrder([...currentChallenge.options]);
        }
        if (room?.game_slug === 'bible-memory-challenge') {
          const pairs: { a: string; b: string }[] = currentChallenge.metadata?.memoryPairs || [];
          const deck: { id: number; text: string; pairKey: string }[] = [];
          pairs.forEach((pair, index) => {
            deck.push({ id: index * 2, text: pair.a, pairKey: `pair-${index}` });
            deck.push({ id: index * 2 + 1, text: pair.b, pairKey: `pair-${index}` });
          });
          setMemoryCards(deck.sort((a, b) => ((a.id * 7 + (room?.current_question_index || 0)) % 5) - ((b.id * 7 + (room?.current_question_index || 0)) % 5)));
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
      const { error: err } = await supabase.rpc('set_room_ready', {
        p_room: room?.id,
        p_is_ready: !currentPlayer.is_ready,
      });
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

  async function handleStartGame() {
    if (!roomId || !isHost || busy) return;
    setBusy(true);
    try {
      if (challenges.length === 0) throw new Error('No published challenges are available for this game.');
      const publishResult = await supabase.rpc('publish_room_questions', {
        p_room: roomId,
        p_questions: challenges,
      });
      if (publishResult.error) throw new Error(publishResult.error.message);
      const questionIds = (publishResult.data as string[]) || challenges.map((q) => q.id);
      const startResult = await supabase.rpc('start_game', {
        p_room: roomId,
        p_question_ids: questionIds,
      });
      if (startResult.error) throw new Error(startResult.error.message);

      // Notify other players
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

      await refetch();
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setBusy(false);
    }
  }

  async function handleAnswerSubmission(picked: string) {
    if (!room || !currentChallenge || phase !== 'answering' || myPick !== null) return;
    setMyPick(picked);
    setError(null);
    try {
      await submitRoomAnswer(room.id, currentChallenge.id, picked, 0, currentChallenge);
      await refetch();
    } catch (err) {
      setMyPick(null);
      setError((err as Error).message);
    }
  }

  async function handleHostAdvance() {
    if (!room || !isHost || busy) return;
    setBusy(true);
    try {
      await advanceRoomQuestion(room.id, room.current_question_index);
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

    // 4. Bible Word Search — select adjacent letters to find every target word.
    if (room.game_slug === 'bible-word-search') {
      const targetWords: string[] = currentChallenge.metadata?.words || currentChallenge.options;
      const cleanWord = (value: string) => value.toUpperCase().replace(/[^A-Z]/g, '');
      const words = targetWords.map(cleanWord).filter(Boolean);
      const columns = Math.max(12, ...words.map((word) => word.length));
      const grid = words.map((word, row) => {
        const cells = Array.from({ length: columns }, (_, col) => 'ABCDEFGHJKLMNPQRSTUVWXYZ'[(row * 11 + col * 7 + 3) % 24]);
        const start = (row * 3) % Math.max(1, columns - word.length + 1);
        [...word].forEach((letter, offset) => { cells[start + offset] = letter; });
        return cells;
      });
      const selectCell = (row: number, col: number) => {
        if (!isAnswering) return;
        const previous = wordSearchSelection[wordSearchSelection.length - 1];
        if (previous && (previous.row !== row || Math.abs(previous.col - col) !== 1)) {
          setWordSearchSelection([{ row, col }]);
          return;
        }
        if (wordSearchSelection.some((cell) => cell.row === row && cell.col === col)) return;
        const next = [...wordSearchSelection, { row, col }];
        const candidate = next.map(({ row: r, col: c }) => grid[r][c]).join('');
        const match = targetWords.find((word) => {
          const normalized = cleanWord(word);
          return !wordSearchFound.includes(word) && (candidate === normalized || candidate === [...normalized].reverse().join(''));
        });
        if (match) {
          const found = [...wordSearchFound, match];
          setWordSearchFound(found);
          setWordSearchSelection([]);
          if (found.length === targetWords.length) handleAnswerSubmission(targetWords.join(','));
          return;
        }
        setWordSearchSelection(next);
      };
      return (
        <div className="space-y-5">
          <div className="flex flex-wrap gap-2 justify-center">
            {targetWords.map((word) => (
              <span key={word} className={`px-3 py-2 rounded-xl font-mono text-sm font-bold border ${wordSearchFound.includes(word) ? 'bg-emerald-700 text-white border-emerald-700 line-through' : 'bg-[#F3EBDD] text-[#171B24] border-[#171B24]/20'}`}>
                {wordSearchFound.includes(word) ? `✓ ${word}` : word}
              </span>
            ))}
          </div>
          <div className="bg-[#171B24] text-[#F3EBDD] p-4 rounded-2xl font-mono text-center select-none overflow-x-auto">
            <div className="inline-grid gap-1.5" style={{ gridTemplateColumns: `repeat(${columns}, minmax(1.8rem, 1fr))` }}>
              {grid.flatMap((row, rowIdx) => row.map((letter, colIdx) => {
                const selected = wordSearchSelection.some((cell) => cell.row === rowIdx && cell.col === colIdx);
                return <button key={`${rowIdx}-${colIdx}`} type="button" disabled={!isAnswering || wordSearchFound.length === targetWords.length}
                  onClick={() => selectCell(rowIdx, colIdx)} aria-label={`Row ${rowIdx + 1}, column ${colIdx + 1}, ${letter}`}
                  className={`w-7 h-8 sm:w-8 sm:h-9 rounded flex items-center justify-center font-bold text-sm ${selected ? 'bg-[#D66B3D] text-white' : 'bg-white/10 hover:bg-white/25'}`}>{letter}</button>;
              }))}
            </div>
          </div>
          <div className="flex items-center justify-between gap-3">
            <p className="text-xs text-[#5A6275]">Select adjacent letters in a row, forwards or backwards.</p>
            <button type="button" disabled={!isAnswering || wordSearchSelection.length === 0} onClick={() => setWordSearchSelection([])}
              className="shrink-0 px-3 py-2 rounded-lg border border-[#171B24]/20 text-xs font-semibold disabled:opacity-40">Clear selection</button>
          </div>
          <p className="text-xs text-center text-[#5A6275]">{wordSearchFound.length} of {targetWords.length} words found</p>
        </div>
      );
    }

    // 5. Bible Crossword — solve both intersecting clues.
    if (room.game_slug === 'bible-crossword') {
      const acrossAnswer: string = currentChallenge.metadata?.acrossAnswer || currentChallenge.options[0] || '';
      const downAnswer: string = currentChallenge.metadata?.downAnswer || currentChallenge.options[1] || '';
      return (
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-[#F3EBDD] border border-[#171B24]/15">
              <label className="block text-xs font-bold uppercase text-[#D66B3D] mb-1">Across ({acrossAnswer.length} letters)</label>
              <p className="text-xs text-[#171B24]/80 mb-2">{currentChallenge.metadata?.acrossClue}</p>
              <input type="text" disabled={!isAnswering} value={crosswordAcross} onChange={(e) => setCrosswordAcross(e.target.value.toUpperCase())}
                placeholder="Enter across answer..." className="w-full px-3 py-2 rounded-xl bg-white border border-[#171B24]/20 font-mono uppercase font-bold" />
            </div>
            <div className="p-4 rounded-2xl bg-[#F3EBDD] border border-[#171B24]/15">
              <label className="block text-xs font-bold uppercase text-[#3156C9] mb-1">Down ({downAnswer.length} letters)</label>
              <p className="text-xs text-[#171B24]/80 mb-2">{currentChallenge.metadata?.downClue}</p>
              <input type="text" disabled={!isAnswering} value={crosswordDown} onChange={(e) => setCrosswordDown(e.target.value.toUpperCase())}
                placeholder="Enter down answer..." className="w-full px-3 py-2 rounded-xl bg-white border border-[#171B24]/20 font-mono uppercase font-bold" />
            </div>
          </div>
          <div className="flex justify-end">
            <button type="button" disabled={!isAnswering || !crosswordAcross.trim() || !crosswordDown.trim()}
              onClick={() => handleAnswerSubmission(`${crosswordAcross.trim()}|${crosswordDown.trim()}`)}
              className="px-6 py-2.5 rounded-xl bg-[#D66B3D] text-white font-bold text-sm disabled:opacity-40">Submit Crossword</button>
          </div>
        </div>
      );
    }

    // 6. Bible Match-Up — pair each biblical figure with the correct act.
    if (room.game_slug === 'bible-match-up') {
      const pairs: { left: string; right: string }[] = currentChallenge.metadata?.pairs || [];
      const leftItems = pairs.map((pair) => pair.left);
      const rightItems = pairs.map((pair) => pair.right);
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase text-[#5A6275]">Select Biblical Figure</span>
            {leftItems.map((left) => {
              const matched = Boolean(matchedPairs[left]);
              const selected = matchSelectedLeft === left;
              return <button key={left} disabled={!isAnswering || matched} onClick={() => setMatchSelectedLeft(left)}
                className={`w-full p-3 rounded-xl text-left text-sm font-bold border ${matched ? 'bg-emerald-100 border-emerald-600 text-emerald-900' : selected ? 'bg-[#3156C9] text-white border-[#3156C9]' : 'bg-white border-[#171B24]/15'}`}>
                {left} {matched ? '✓' : ''}
              </button>;
            })}
          </div>
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase text-[#5A6275]">Match Defining Act</span>
            {rightItems.map((right) => {
              const used = Object.values(matchedPairs).includes(right);
              return <button key={right} disabled={!isAnswering || used || !matchSelectedLeft}
                onClick={() => {
                  if (!matchSelectedLeft) return;
                  const next = { ...matchedPairs, [matchSelectedLeft]: right };
                  setMatchedPairs(next);
                  setMatchSelectedLeft(null);
                  if (Object.keys(next).length === pairs.length) {
                    handleAnswerSubmission(pairs.map((pair) => `${pair.left}=${next[pair.left]}`).join('|'));
                  }
                }}
                className={`w-full p-3 rounded-xl text-left text-xs font-semibold border ${used ? 'bg-stone-100 text-stone-400 border-stone-200' : 'bg-[#F3EBDD] border-[#171B24]/15 hover:bg-[#D66B3D] hover:text-white'}`}>{right}</button>;
            })}
          </div>
        </div>
      );
    }

    // 7. Bible Memory Challenge — flip cards and find every matching pair.
    if (room.game_slug === 'bible-memory-challenge' && memoryCards.length > 0) {
      return (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {memoryCards.map((card, idx) => {
            const solved = memorySolved.includes(idx);
            const flipped = memoryFlipped.includes(idx) || solved;
            return <button key={card.id} disabled={!isAnswering || flipped || memoryFlipped.length >= 2}
              onClick={() => {
                const nextFlipped = [...memoryFlipped, idx];
                setMemoryFlipped(nextFlipped);
                if (nextFlipped.length === 2) {
                  const [firstIdx, secondIdx] = nextFlipped;
                  if (memoryCards[firstIdx].pairKey === memoryCards[secondIdx].pairKey) {
                    const nextSolved = [...memorySolved, firstIdx, secondIdx];
                    setMemorySolved(nextSolved);
                    setMemoryFlipped([]);
                    if (nextSolved.length === memoryCards.length) handleAnswerSubmission(currentChallenge.correct_answer);
                  } else {
                    setTimeout(() => setMemoryFlipped([]), 700);
                  }
                }
              }}
              className={`min-h-[80px] p-3 rounded-2xl font-serif font-bold text-sm border flex items-center justify-center text-center ${solved ? 'bg-emerald-700 text-white border-emerald-700' : flipped ? 'bg-[#3156C9] text-white border-[#3156C9]' : 'bg-[#F3EBDD] text-[#171B24] border-[#171B24]/20'}`}>
              {flipped ? card.text : '✦ Tap to Flip'}
            </button>;
          })}
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
          {renderInteractiveMechanic()}

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
                disabled={busy || phase !== 'advancing'}
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

          <div className="flex justify-center gap-3">
            <button
              onClick={() => nav('/multiplayer')}
              className="min-h-[48px] rounded-xl bg-[#D66B3D] px-6 font-semibold text-white hover:bg-[#c25a2c] transition-colors"
            >
              Return to Multiplayer
            </button>
          </div>
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
                <button
                  onClick={handleStartGame}
                  disabled={busy || challenges.length === 0}
                  className="min-h-[48px] w-full rounded-xl bg-[#D66B3D] font-semibold text-white shadow hover:bg-[#c25a2c] transition-colors disabled:opacity-50"
                >
                  {busy ? 'Starting Game…' : `Start ${gameInfo?.title || 'Game'} (Host)`}
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
