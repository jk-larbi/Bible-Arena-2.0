import { useEffect, useMemo, useRef, useState } from 'react';
import { startRoomBoard, submitRoomBoardMove, type RoomBoardType } from '../lib/rooms';
import { useRoomBoardSync } from '../hooks/useRoomBoardSync';
import type { ChallengeItem } from '../data/bibleContentBank';
import type { SyncPlayer } from '../hooks/useMultiplayerSync';

type Props = { roomId: string; gameSlug: string; challenge: ChallengeItem; players: SyncPlayer[]; isHost: boolean };

const boardTypeFor = (slug: string): RoomBoardType | null => {
  if (slug === 'scripture-scramble') return 'scramble';
  if (slug === 'bible-crossword') return 'crossword';
  if (slug === 'bible-word-search') return 'word_search';
  if (slug === 'verse-builder') return 'verse_builder';
  if (slug === 'complete-the-scripture' || slug === 'complete-scripture') return 'complete_scripture';
  return null;
};

export default function RoomBoardPanel({ roomId, gameSlug, challenge, players, isHost }: Props) {
  const { board, myPrivateState, isMyTurn, currentPlayerId, loading, error, refresh } = useRoomBoardSync(roomId);
  const [picked, setPicked] = useState<number[]>([]);
  const [busy, setBusy] = useState(false);
  const [notice, setNotice] = useState('');
  const type = boardTypeFor(gameSlug);
  const initializedQuestion = useRef<string>('');
  useEffect(() => {
    if (!isHost || !board || !challenge?.id || board.board_state.question_id === challenge.id || initializedQuestion.current === challenge.id) return;
    initializedQuestion.current = challenge.id;
    const privateStates: Record<string, { tiles: string[] }> = {};
    for (const player of players) {
      if (!player.user_id) continue;
      const tiles = [...challenge.options];
      for (let i = tiles.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [tiles[i], tiles[j]] = [tiles[j], tiles[i]];
      }
      privateStates[player.user_id] = { tiles };
    }
    const boardType = boardTypeFor(gameSlug);
    if (!boardType) return;
    void startRoomBoard(roomId, boardType, { question_id: challenge.id, prompt: challenge.question_text, last_move: null }, privateStates)
      .then(refresh)
      .catch((e) => setNotice(e instanceof Error ? e.message : 'Could not load the next board.'));
  }, [isHost, board, challenge?.id, challenge?.options, challenge?.question_text, gameSlug, players, refresh, roomId]);

  const rack = useMemo(() => Array.isArray(myPrivateState.tiles) ? myPrivateState.tiles.map(String) : challenge.options, [myPrivateState.tiles, challenge.options]);
  const currentPlayer = players.find(p => p.user_id === currentPlayerId);
  const selected = picked.map(i => rack[i]).filter(Boolean);
  const answer = type === 'verse_builder' || type === 'complete_scripture' ? selected.join(' ') : selected.join('');

  if (!type) return null;
  if (loading) return <div className="rounded-2xl bg-white border p-4 text-sm text-[#5A6275]">Preparing shared board…</div>;
  if (error) return <div className="rounded-2xl bg-amber-50 border border-amber-200 p-4 text-sm text-amber-900">Board sync: {error}</div>;
  if (!board) return <div className="rounded-2xl bg-blue-50 border border-blue-200 p-4 text-sm text-blue-900">The host is preparing the shared board.</div>;

  const toggleTile = (index: number) => setPicked(old => old.includes(index) ? old.filter(x => x !== index) : [...old, index]);
  const submit = async () => {
    if (!isMyTurn || !answer.trim() || busy) return;
    setBusy(true); setNotice('');
    try {
      const result = await submitRoomBoardMove(roomId, board.revision, 'answer', { answer }, { tiles: rack });
      setPicked([]);
      setNotice(result?.is_correct ? 'Correct! 10 points awarded.' : 'Move submitted. The next player is up.');
      await refresh();
    } catch (e) {
      setNotice(e instanceof Error ? e.message : 'Move could not be submitted.');
      await refresh();
    } finally { setBusy(false); }
  };

  const letters = type === 'crossword' || type === 'word_search' || type === 'scramble';
  return (
    <section className="rounded-3xl border border-[#3156C9]/20 bg-[#F8FAFF] p-4 sm:p-6 space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div><p className="text-[11px] font-bold uppercase tracking-wider text-[#3156C9]">Live shared board</p><h3 className="font-serif text-lg font-bold text-[#171B24]">{type === 'scramble' ? 'Letter Tile Board' : type === 'crossword' ? 'Crossword Challenge' : type === 'word_search' ? 'Word Search Grid' : type === 'verse_builder' ? 'Verse Builder Board' : 'Complete the Scripture'}</h3></div>
        <span className="rounded-full bg-white border px-3 py-1 text-xs font-bold text-[#3156C9]">Turn {board.turn_number}</span>
      </div>
      <div className="rounded-2xl bg-white border border-[#E3D9C6] p-3">
        <p className="text-xs font-semibold text-[#5A6275]">Shared board activity</p>
        {board.board_state.last_move ? <p className="mt-1 text-sm font-bold text-[#171B24]">{String((board.board_state.last_move as Record<string, unknown>).answer || 'A move was played')}</p> : <p className="mt-1 text-sm text-[#5A6275]">The board is ready. Players take turns on their own devices.</p>}
        <p className="mt-2 text-[11px] text-[#5A6275]">Revision {board.revision} · {players.length} players connected</p>
      </div>
      <div className="flex flex-wrap gap-2">
        {players.map(p => <span key={p.user_id} className={`rounded-full px-3 py-1.5 text-xs font-semibold ${p.user_id === currentPlayerId ? 'bg-[#3156C9] text-white' : 'bg-white border text-[#5A6275]'}`}>{p.display_name}{p.user_id === currentPlayerId ? ' · playing' : ''} · {p.score || 0} pts</span>)}
      </div>
      <div className="rounded-2xl bg-white border border-[#E3D9C6] p-3 space-y-3">
        <p className="text-xs font-bold text-[#171B24]">{isMyTurn ? 'Your turn — select your tiles' : `Waiting for ${currentPlayer?.display_name || 'the next player'}`}</p>
        <div className={`grid gap-2 ${letters ? 'grid-cols-6 sm:grid-cols-8' : 'grid-cols-2 sm:grid-cols-4'}`}>
          {rack.map((tile, index) => <button type="button" key={`${index}-${tile}`} disabled={!isMyTurn || busy || picked.includes(index)} onClick={() => toggleTile(index)} className={`min-h-11 rounded-xl border font-bold text-sm shadow-sm transition ${picked.includes(index) ? 'bg-[#3156C9] text-white opacity-50' : 'bg-[#FFFDF8] border-[#D9CBAF] text-[#171B24] hover:border-[#3156C9]'}`}>{tile}</button>)}
        </div>
        <div className="min-h-12 rounded-xl border-2 border-dashed border-[#3156C9]/30 bg-[#3156C9]/5 p-3 text-center text-sm font-semibold text-[#171B24]">{answer || 'Your selected tiles appear here'}</div>
        <div className="flex gap-2">
          <button type="button" onClick={() => setPicked([])} disabled={!isMyTurn || busy || picked.length===0} className="flex-1 rounded-xl border border-[#D9CBAF] bg-white py-2.5 text-xs font-bold disabled:opacity-40">Clear</button>
          <button type="button" onClick={submit} disabled={!isMyTurn || busy || !answer.trim()} className="flex-1 rounded-xl bg-[#3156C9] py-2.5 text-xs font-bold text-white disabled:opacity-40">{busy ? 'Submitting…' : 'Submit move'}</button>
        </div>
      </div>
      {notice && <p className="rounded-xl bg-white border p-3 text-xs font-semibold text-[#3156C9]" aria-live="polite">{notice}</p>}
    </section>
  );
}
